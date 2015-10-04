module.exports = joint.shapes.history.GenericLink.extend({
    defaults: joint.util.deepSupplement({
        type: 'history.links.UndirectedLink',
    }, joint.shapes.history.GenericLink.prototype.defaults),
});
