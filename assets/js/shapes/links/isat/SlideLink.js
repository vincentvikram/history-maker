module.exports = joint.shapes.history.GenericLink.extend({
    defaults: joint.util.deepSupplement({
        type: 'history.links.isat.SlideLink',
        attrs: {
            '.marker-source': { fill: '#C1272D', stroke: '#C1272D', d: 'M 0 0 L 0 10 L 5 10 L 5 0 z'},
            '.marker-target': { fill: '#C1272D', stroke: '#C1272D', d: 'M 10 0 L 0 5 L 10 10 z' },
            '.connection': { stroke: '#C1272D' },
        },
    }, joint.shapes.history.GenericLink.prototype.defaults),
});
