module.exports = joint.shapes.history.GenericLink.extend({
    defaults: joint.util.deepSupplement({
        type: 'isat.links.StarburstLink',
        attrs: {
            '.marker-source': { fill: '#009245', stroke: '#009245', d: 'M 0 0 L 0 10 L 5 10 L 5 0 z'},
            '.marker-target': { fill: '#009245', stroke: '#009245', d: 'M 10 0 L 0 5 L 10 10 z' },
            '.connection': { stroke: '#009245' },
        },
    }, joint.shapes.history.GenericLink.prototype.defaults),
});
