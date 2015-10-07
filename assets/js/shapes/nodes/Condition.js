module.exports = joint.shapes.history.GenericShape.extend({
    markup: '<g class="outer"><path d="M 69.999992,2.2433039 135.51339,34.999991 69.999992,67.756679 4.4866013,34.999991 69.999992,2.2433039 Z" style="fill:#5fd35f;stroke:#1a1a1a;stroke-width:4.01294422;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"></path></g><text/><g class="linkHandle"><circle/><polyline/></g>',
    defaults: joint.util.deepSupplement({
        type: 'history.nodes.Condition',
        size: {
            width: 138,
            height: 67,
        },
    }, joint.shapes.history.GenericShape.prototype.defaults)
});
