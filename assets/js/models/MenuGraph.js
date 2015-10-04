function getItemPosition(item, prevItem) {
    var y = 0;

    if (prevItem) {
        y += prevItem.prop('position/y') + prevItem.prop('size/height');
        y += 20;
    }

    return g.point(0, y);
}

module.exports = joint.dia.Graph.extend({
    addItems: function(menu) {
        var prevItem = null;

        _.each(menu, function(type) {
            var item = new joint.shapes.history.nodes[type]()
                .set('position', getItemPosition(item, prevItem))
                .attr('text/text', type)
                .prop('itemType', type);

            this.addCell(item);

            prevItem = item;
        }, this);
    }
});
