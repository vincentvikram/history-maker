module.exports = joint.shapes.history.GenericShape.extend({
    markup: '<g class="outer"><path d="m 2.194639,9.0433297 c 0,-3.7798834 2.8678326,-6.8486869 6.3991998,-6.8486869 l 112.8127112,0 c 3.53117,0 6.39881,3.0688035 6.39881,6.8486869 l 0,68.4055553 c -20.23994,-8.088387 -42.565328,-8.088387 -62.805265,0 -20.239937,8.06794 -42.565518,8.06794 -62.805456,0 l 0,-68.4055553 z" style="fill:#5fd35f;stroke:#000000;stroke-width:4.38928556;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"></path><path d="m 20.990981,24.594553 88.018039,0 0,0.490081 -88.018039,0 z" style="color:#000000;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#5fd35f;fill-opacity:1;fill-rule:nonzero;stroke:#1a1a1a;stroke-width:2.15088391;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"></path><path d="m 20.990981,37.872734 88.018039,0 0,0.490081 -88.018039,0 z" style="color:#000000;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#5fd35f;fill-opacity:1;fill-rule:nonzero;stroke:#1a1a1a;stroke-width:2.15088391;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"></path></g><text/><g class="linkHandle"><circle/><polyline/></g>',
    defaults: joint.util.deepSupplement({
        type: 'history.nodes.Document',
        size: {
            width: 128,
            height: 85,
        },
        attrs: {
            text: {
                'ref-y': '70%',
            }
        },
    }, joint.shapes.history.GenericShape.prototype.defaults)
});
