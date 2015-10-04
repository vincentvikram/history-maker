function moveSVGElementsToOrigin($svg) {
    $svg.children().each(function() {
        _.each(this.transform.baseVal, function(transform) {
            if (transform.type == SVGTransform.SVG_TRANSFORM_TRANSLATE) {
                transform.setTranslate(0, 0);
            }
        });
    });
}

function createSVGProxy(element) {
    var $clone = $(element).clone();
    var $svg = $($.parseHTML('<svg version="1.1">'));

    $clone.appendTo($svg);

    moveSVGElementsToOrigin($svg);

    $svg.css({
        opacity: 0.75,
        position: 'absolute',
        overflow: 'visible'
    }).appendTo(document.body);

    return $svg;
}

function getNewItemPosition(drag, itemSize, paper, zoom) {
    var dragX = drag.location.x(),
        dragY = drag.location.y();
    var offset = paper.$el.find('svg').offset();
    var paperBox = g.rect(0, 0, paper.options.width, paper.options.height);

    var width = itemSize.width;
    var height = itemSize.height;

    var topLeft = g.point(dragX - offset.left, dragY - offset.top);
    var bottomRight = g.point(topLeft.x + width, topLeft.y + height);

    if (!paperBox.containsPoint(topLeft)) {
        topLeft.adhereToRect(paperBox);
        bottomRight = g.point(topLeft.x + itemSize.width, topLeft.y + height);
    }

    if (!paperBox.containsPoint(bottomRight)) {
        bottomRight.adhereToRect(paperBox);
        topLeft = g.point(bottomRight.x - width, bottomRight.y - height);
    }

    if (zoom) {
        topLeft = g.point(topLeft.x * zoom, topLeft.y * zoom);
    }

    return topLeft;
}

function createNewItem(type, paper, callback) {
    bootbox.prompt('Text for ' + type, function (result) {
        var text = result || '';
        var newItem = new joint.shapes.history.nodes[type]();

        newItem.attr('text/text', text);
        callback(newItem);
    });
}

function initializePaper() {
    joint.dia.Paper.prototype.initialize.apply(this, arguments);

    var self = this;

    $(this.$el)
        .on('draginit', 'g.element', function(event, drag) {
            $(this).data('proxy', createSVGProxy(this));
        })
        .on('dragmove', 'g.element', function(event, drag) {
            $(this).data('proxy').css({
                top: drag.location.y(),
                left: drag.location.x(),
            });
        })
        .on('dragend', 'g.element', function(event, drag) {
            var item = $(this).data('model');
            var paper = self.options.targetPaper;
            var zoom = 1 / self.options.zoom.get('zoom');
            var position = getNewItemPosition(drag, item.get('size'), paper, zoom);

            createNewItem(item.prop('itemType'), paper, function (newItem) {

                newItem.set('position', position);
                paper.model.addCell(newItem);

                $(this).data('proxy').remove();
            }.bind(this));
        });

    this.listenTo(this.model, 'add', function(item) {
        this.findViewByModel(item).$el.data('model', item);
    });
}

var options = {
    width: 300,
    height: 600,
    gridSize: 1,
    interactive: false,
};

var parentOptions = _.clone(joint.dia.Paper.prototype.options);

module.exports = joint.dia.Paper.extend({
    options: _.extend(parentOptions, options),
    initialize: initializePaper,
});
