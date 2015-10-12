module.exports = joint.shapes.history.GenericShape.extend({
    markup: '<g class="outer"><path d="m 51.565804,2.6859334 c -0.09607,0 -0.175752,0.07708 -0.175752,0.173223 l 0,14.2988086 c 0,0.09606 0.07971,0.173206 0.175752,0.173206 l 36.868443,0 c 0.09591,0 0.173118,-0.07708 0.173118,-0.173206 l 0,-14.2988086 c 0,-0.09606 -0.07726,-0.173223 -0.173118,-0.173223 l -36.868443,0 z M 112.05836,13.700586 c -0.0961,0 -0.17322,0.07708 -0.17322,0.173214 l 0,3.281567 c 0,0.09607 0.0771,0.175664 0.17322,0.175664 l 4.47774,0 c 0.0961,0 0.1732,-0.07962 0.1732,-0.175664 l 0,-3.281567 c 0,-0.09607 -0.0771,-0.173214 -0.1732,-0.173214 l -4.47774,0 z m -88.594417,0.186321 c -0.09591,0 -0.173118,0.07708 -0.173118,0.173206 l 0,3.284183 c 0,0.09606 0.07708,0.173205 0.173118,0.173205 l 4.4751,0 c 0.09592,0 0.173136,-0.07708 0.173136,-0.173205 l 0,-3.284183 c 0,-0.09607 -0.07726,-0.173206 -0.173136,-0.173206 l -4.4751,0 z m -5.999155,3.772066 c -8.1878866,0 -14.7788432,6.590991 -14.7788432,14.778861 l 0,53.646148 c 0,8.18789 6.5909566,14.778848 14.7788432,14.778848 l 105.070452,0 c 8.18789,0 14.77883,-6.590958 14.77883,-14.778848 l 0,-53.646148 c 0,-8.18787 -6.59094,-14.778861 -14.77883,-14.778861 l -105.070452,0 z" class="filled" style="color:#000000;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill-opacity:1;fill-rule:nonzero;stroke:#1a1a1a;stroke-width:5.37188959;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"></path></g><text/><g class="linkHandle"><circle/><polyline/></g>',
    defaults: joint.util.deepSupplement({
        type: 'history.nodes.Profession',
        size: {
            width: 138,
            height: 103,
        },
        attrs: {
            text: {
                'ref-y': '60%',
            }
        },
    }, joint.shapes.history.GenericShape.prototype.defaults)
});
