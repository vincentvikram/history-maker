module.exports = joint.shapes.history.GenericShape.extend({
    markup: '<g class="outer"><path class="filled" style="stroke:#000000;stroke-width:1.26126289;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1" d="m 0.63062382,0.63063145 138.73873618,0 0,63.06313555 -138.73873618,0 0,-63.06313555 z"></path></g><text/><g class="linkHandle"><circle/><polyline/></g>',
    defaults: joint.util.deepSupplement({
        type: 'history.nodes.Artifact',
        size: {
            width: 138,
            height: 64,
        },
    }, joint.shapes.history.GenericShape.prototype.defaults)
});
