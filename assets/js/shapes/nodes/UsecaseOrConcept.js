module.exports = joint.shapes.history.GenericShape.extend({
    markup: '<g class="outer"><path class="filled" style="color:#000000;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill-opacity:1;fill-rule:nonzero;stroke:#1a1a1a;stroke-width:1.31380069;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate" d="M 139.34308,23.771259 A 69.343065,23.114355 0 0 1 69.999959,46.885618 69.343065,23.114355 0 0 1 0.65690035,23.771259 69.343065,23.114355 0 0 1 69.999959,0.65690035 69.343065,23.114355 0 0 1 139.34308,23.771259 Z"></path></g><text/><g class="linkHandle"><circle/><polyline/></g>',
    defaults: joint.util.deepSupplement({
        type: 'history.nodes.UsecaseOrConcept',
        size: {
            width: 138,
            height: 46,
        },
    }, joint.shapes.history.GenericShape.prototype.defaults)
});
