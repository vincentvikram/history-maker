var graph = new joint.dia.Graph();

var paper = new joint.dia.Paper({
    el: document.getElementById('paper'),
    width: 800,
    height: 600,
    gridSize: 1,
    model: graph,
    linkPinning: false,
    linkConnectionPoint: joint.util.shapePerimeterConnectionPoint,
    restrictTranslate: true
});

var menuGraph = new joint.dia.Graph();

var menuPaper = new joint.dia.Paper({
    el: document.getElementById('menu'),
    width: 300,
    height: 600,
    gridSize: 1,
    model: menuGraph,
    interactive: false
});

joint.shapes.history = {};

joint.shapes.history.Rectangle = joint.shapes.erd.Entity.extend({
    defaults: joint.util.deepSupplement({
        type: 'history.Rectangle',
        attrs: {
            text: {
                fill: '#ffffff',
                text: 'Rectangle',
                'letter-spacing': 0
            }
        },
        size: { height: 75, width: 150 }
    }, joint.shapes.erd.Entity.prototype.defaults),
});

joint.shapes.history.Ellipse = joint.shapes.erd.Normal.extend({
    defaults: joint.util.deepSupplement({
        type: 'history.Ellipse',
        attrs: {
            text: {
                fill: '#ffffff',
                text: 'Rectangle',
                'letter-spacing': 0
            }
        },
        size: { height: 75, width: 150 }
    }, joint.shapes.erd.Normal.prototype.defaults),
});

joint.shapes.history.Link = joint.shapes.erd.Line.extend({
    defaults: joint.util.deepSupplement({
        type: 'history.Link',
        router: {
            name: 'metro'
        },
        labels: [{
            position: 0.5,
            attrs: {
                text: { dy: -8, text: 'Link', fill: '#000000' },
                rect: { stroke: '#70A3C4', 'stroke-width': 15, rx: 0, ry: 0 }
            }
        }]
    }, joint.shapes.erd.Line.prototype.defaults),
    setLabelText: function (text) {
        this.attributes.labels[0].attrs.text.text = text;
        return this;
    }
});

var menu = {
    'Rectangle': function (text, graph) {
        var item = new joint.shapes.history.Rectangle({
            position: { x: 20, y: 20 },
        }).attr('text/text', text);

        graph.addCell(item);
        return item;
    },
    'Ellipse': function (text, graph) {
        var item = new joint.shapes.history.Ellipse({
            position: {x: 20, y: 20},
        }).attr('text/text', text);

        graph.addCell(item);
        return item;
    },
    'Link': function (text, graph) {
        var link = new joint.shapes.history.Link({
            source: {x: 480, y: 580},
            target: {x: 580, y: 580},
        });

        link.setLabelText(text);

        link.addTo(graph);
        return link;
    }
};

paper.on('cell:pointerup', function () {
    _.each(graph.getLinks(), function (link) {
        paper.findViewByModel(link).update();
    });
});

function repositionMenuItem(item, prevItem) {
    var y = 0;

    if (prevItem) {
        y += prevItem.prop('position/y') + prevItem.prop('size/height');
        y += 20;
    }

    if (item.isLink()) {
        y += 15;
        item.set('source', {x: 0, y: y});
        item.set('target', {x: 0 + 150, y: y});
    } else {
        item.set('position', {x: 0, y: y});
    }
}

function createProxy()
{
    var $clone = $(this).clone();
    var $svg = $($.parseHTML('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">'));

    $clone.appendTo($svg);

    $svg.children().each(function () {
        var transforms = this.transform.baseVal;

        for (var i = 0; i < transforms.numberOfItems; i++) {
            var transform = transforms.getItem(i);

            if (transform.type == SVGTransform.SVG_TRANSFORM_TRANSLATE){
                transform.setTranslate(0, 0);
            }
        }
    });

    $svg.css({
        opacity: 0.75,
        position: 'absolute',
        overflow: 'visible'
    }).appendTo(document.body);

    return $svg;
}

function moveProxy(e, dd)
{
    $(dd.proxy).css({
        top: dd.offsetY,
        left: dd.offsetX
    });
}

function addItem(e, dd, type)
{
    var box = g.rect(0, 0, paper.options.width, paper.options.height);
    var offset = graph.get('offset');
    var leftTopPoint = g.point(dd.offsetX - offset.left, dd.offsetY - offset.top);
    var rightBottomPoint = g.point(leftTopPoint.x + 150, leftTopPoint.y + 75);

    if (!box.containsPoint(leftTopPoint)) {
        leftTopPoint.adhereToRect(box);
        rightBottomPoint = g.point(leftTopPoint.x + 150, leftTopPoint.y + 75);
    }

    if(!box.containsPoint(rightBottomPoint)) {
        rightBottomPoint.adhereToRect(box);
        leftTopPoint = g.point(rightBottomPoint.x - 150, rightBottomPoint.y - 75);
    }

    var text = prompt('Text for ' + type) || '';
    var item = menu[type](text, graph);
    item.set('position', leftTopPoint);
    paper.findViewByModel(item).$el.data('model', item);

    $(dd.proxy).remove();
}

function makeDraggable(item, type)
{
    menuPaper.findViewByModel(item).$el
        .drag('start', createProxy)
        .drag(moveProxy)
        .drag('end', _.partial(addItem, _, _, type));
}

function createMenu()
{
    var prevMenuItem = null;

    _.each(menu, function (unused, type) {
        item = menu[type](type, menuGraph);
        repositionMenuItem(item, prevMenuItem);
        prevMenuItem = item;

        makeDraggable(item, type);
    });
}

function textFieldKeyUpCallback(e){
    if (e.keyCode == 13) {
        var opt = $(this).parents('.context-menu-root')
        .data('contextMenu');
        opt.$menu.trigger('contextmenu:hide');
    }
}


function getTextField(name, title) {
    return {
        name: title,
        type: 'text',
        events: {
            keyup: textFieldKeyUpCallback
        }
    };
}


$(document).on('ready', function () {
    graph.set('offset', paper.$el.find('svg').offset());

    createMenu();

    $.contextMenu({
        selector: '#paper svg g.element',
        items: {
            name: getTextField('name', 'Name'),
            type: _.extend({disabled: true}, getTextField('type', 'Type')),

            perspective: getTextField('perspective', 'Perspective'),
            description: getTextField('description', 'Description'),
            remove: {
                name: 'Remove',
                callback: function (key, opt) {
                    opt.$menu.trigger('contextmenu:hide');
                    $(this).data('model').remove();
                }
            }
        },
        events: {
            show: function (opt) {
                var model = $(this).data('model');

                $.contextMenu.setInputValues(opt, {
                    name: model.attr('text/text'),
                    type: model.attributes.type,
                    perspective: model.prop('perspective'),
                    description: model.prop('description')
                });
            },
            hide: function (opt) {
                var values = $.contextMenu.getInputValues(opt);
                var model = $(this).data('model');

                if (model) {
                    model.attr('text/text', values.name);
                    model.prop('perspective', values.perspective);
                    model.prop('description', values.description);
                }
            }
        }
    });
});
