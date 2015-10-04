function getItemPosition(item, prevItem) {
    var x = 0, y = 0;

    if (prevItem) {
        y += prevItem.prop('position/y') + prevItem.prop('size/height');
        y += 20;
    }

    var width = item.prop('size/width');

    if (width <= 150) {
        x = (150 - width) / 2;
    }

    return g.point(x, y);
}

var prevItem = null;

module.exports = joint.dia.Graph.extend({
    addItems: function(nodes) {
        _.each(nodes, function(node, type) {
            var item = new node();

            item.set('position', getItemPosition(item, prevItem))
                .attr('text/text', type)
                .prop('itemType', type);

            this.addCell(item);

            prevItem = item;
        }, this);
    }
});
