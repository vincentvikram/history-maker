module.exports = joint.shapes.history.GenericShape.extend({
    markup: '<g class="rotatable"><g class="scalable"><ellipse class="outer"/><ellipse class="inner"/></g><text/></g><g class="linkHandle"><circle/><polyline points="0,0 5,5 0,10"/></g>',
    defaults: joint.util.deepSupplement({
        type: 'history.nodes.Ellipse',
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
    }, joint.shapes.history.GenericShape.prototype.defaults),
});
