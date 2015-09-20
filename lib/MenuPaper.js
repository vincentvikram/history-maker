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

function getNewItemPosition(drag, itemSize, paper) {
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

    return topLeft;
}

function createNewItem(type, paper) {
    var text = prompt('Text for ' + type) || '';
    var newItem = new joint.shapes.history[type]();

    newItem.attr('text/text', text);

    return newItem;
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
            var position = getNewItemPosition(drag, item.get('size'), paper);

            var newItem = createNewItem(item.prop('itemType'), paper);
            newItem.set('position', position);
            paper.model.addCell(newItem);

            $(this).data('proxy').remove();
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
