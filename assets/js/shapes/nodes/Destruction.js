module.exports = joint.shapes.history.GenericShape.extend({
    markup: '<g class="outer"><path d="M 95.413128,4.5868684 4.5868648,95.412849 m 0,-90.8259806 90.8262632,90.8259806" style="fill:#ffffff;stroke:#000000;stroke-width:9.08200645;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"></path></g><text/><g class="linkHandle"><circle/><polyline/></g>',
    defaults: joint.util.deepSupplement({
        type: 'history.nodes.Destruction',
        size: {
            width: 99,
            height: 99,
        },
        attrs: {
            text: {
                'ref-y': '90%',
            },
        }
    }, joint.shapes.history.GenericShape.prototype.defaults)
});
