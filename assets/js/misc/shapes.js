var GenericShape = joint.dia.Element.extend({
    defaults: {
        type: 'history.Generic',
        size: {
            height: 75,
            width: 150,
        },
        attrs: {
            '.outer': {
                'stroke-width': 2,
            },
            '.inner': {
                'stroke-width': 2,
                display: 'none',
            },
            text: {
                'font-family': 'Arial',
                'font-size': 14,
                'letter-spacing': 0,
                fill: '#ffffff',
                ref: '.outer',
                'ref-x': 0.5,
                'ref-y': 0.5,
                'x-alignment': 'middle',
                'y-alignment': 'middle',
            },
            '.linkHandle circle': {
                r: 8,
                ref: '.outer',
                'ref-x': '90%',
                'ref-y': '50%',
                fill: '#000000',
            },
            '.linkHandle polyline': {
                stroke: '#ffffff',
                ref: '.linkHandle circle',
                'ref-x': 0.5,
                'ref-y': 0.5,
                'x-alignment': 'middle',
                'y-alignment': 'middle',
            },
        },
    },
});

module.exports = {
    Rectangle: GenericShape.extend({
        markup: '<g class="rotatable"><g class="scalable"><polygon class="outer"/><polygon class="inner"/></g><text/></g><g class="linkHandle"><circle/><polyline points="0,0 5,5 0,10"/></g>',
        defaults: joint.util.deepSupplement({
            type: 'history.Rectangle',
            attrs: {
                '.outer': {
                    fill: '#2ECC71',
                    stroke: '#27AE60',
                    points: '100,0 100,60 0,60 0,0',
                },
                '.inner': {
                    fill: '#2ECC71',
                    stroke: '#27AE60',
                    points: '95,5 95,55 5,55 5,5',
                },
                text: {
                    text: 'Rectangle',
                },
            },
        }, GenericShape.prototype.defaults)
    }),
    Ellipse: GenericShape.extend({
        markup: '<g class="rotatable"><g class="scalable"><ellipse class="outer"/><ellipse class="inner"/></g><text/></g><g class="linkHandle"><circle/><polyline points="0,0 5,5 0,10"/></g>',
        defaults: joint.util.deepSupplement({
            type: 'history.Ellipse',
            attrs: {
                ellipse: {
                    'transform': 'translate(50, 25)'
                },
                '.outer': {
                    'stroke': '#D35400',
                    'rx': 50,
                    'ry': 25,
                    'fill': '#E67E22'
                },
                '.inner': {
                    'stroke': '#D35400',
                    'rx': 45,
                    'ry': 20,
                    'fill': '#E67E22',
                },
                text: {
                    text: 'Rectangle',
                },
            },
        }, GenericShape.prototype.defaults),
    }),
    Link: joint.shapes.erd.Line.extend({
        defaults: joint.util.deepSupplement({
            type: 'history.Link',
            router: {
                name: 'metro',
            },
            labels: [{
                position: 0.5,
                attrs: {
                    text: {
                        dy: -8,
                        text: 'Link',
                        fill: '#000000',
                    },
                    rect: {
                        stroke: '#70A3C4',
                        fill: '#70A3C4',
                        'stroke-width': 15,
                        rx: 0,
                        ry: 0,
                    },
                },
            }]
        }, joint.shapes.erd.Line.prototype.defaults),
        setLabelText: function(text) {
            this.label(0, {
                attrs: {
                    text: {
                        text: text,
                    },
                },
            });
            return this;
        }
    })
};
