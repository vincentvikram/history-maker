var graph = new joint.dia.Graph();

var paper = new joint.dia.Paper({
    el: document.getElementById('paper'),
    width: 600,
    height: 600,
    gridSize: 1,
    model: graph,
    linkPinning: false,
    linkConnectionPoint: joint.util.shapePerimeterConnectionPoint,
    restrictTranslate: true
});

var erd = joint.shapes.erd;

var links = [];

var items = {
    'rectangle': function (text) {
        var item = new erd.Entity({
            position: { x: 20, y: 20 },
            attrs: {
                text: {
                    fill: '#ffffff',
                    text: text,
                    'letter-spacing': 0,
                    style: { 'text-shadow': '1px 0 1px #333333' }
                },
                '.outer, .inner': {
                    fill: '#31d0c6',
                    stroke: 'none',
                    filter: { name: 'dropShadow',  args: { dx: 0.5, dy: 2, blur: 2, color: '#333333' }}
                }
            }
        });

        graph.addCell(item);
    },
    'ellipse': function (text) {
        var item = new erd.Normal({
            position: { x: 20, y: 20 },
            attrs: {
                text: {
                    fill: '#ffffff',
                    text: text,
                    'letter-spacing': 0,
                    style: { 'text-shadow': '1px 0 1px #333333' }
                },
                '.outer': {
                    fill: '#fe8550',
                    stroke: '#fe854f',
                    filter: { name: 'dropShadow',  args: { dx: 0, dy: 2, blur: 2, color: '#222138' }}
                }
            }
        });

        graph.addCell(item);
    },
    'link': function (text) {
        var link = new erd.Line({
            source: { x: 480, y: 580 },
            target: { x: 580, y: 580 },
            router: {
                name: 'metro'
            },
            labels: [{
                position: 0.5,
                attrs: {
                    text: { dy: -8, text: text, fill: '#000000' },
                    rect: { fill: 'none' }
                }
            }]
        });

        links.push(link);
        link.addTo(graph);
    }
};

graph.on('change:position', function(cell) {
    _.each(links, function (link) {
        paper.findViewByModel(link).update();
    });
});

$(document).on('ready', function () {
    $('#items a').on('click', function (e) {
        e.preventDefault();

        var type = $(this).data('type');
        var text = prompt('Text for ' + type);

        items[type](text);
    });
});
