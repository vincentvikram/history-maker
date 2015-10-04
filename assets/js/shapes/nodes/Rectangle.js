module.exports = joint.shapes.history.GenericShape.extend({
    markup: '<g class="rotatable"><g class="scalable"><polygon class="outer"/><polygon class="inner"/></g><text/></g><g class="linkHandle"><circle/><polyline points="0,0 5,5 0,10"/></g>',
    defaults: joint.util.deepSupplement({
        type: 'history.nodes.Rectangle',
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
    }, joint.shapes.history.GenericShape.prototype.defaults)
});
