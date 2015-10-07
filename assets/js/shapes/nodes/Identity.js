module.exports = joint.shapes.history.GenericShape.extend({
    markup: '<g class="outer"><path style="color:#000000;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#5fd35f;fill-opacity:1;fill-rule:nonzero;stroke:#000000;stroke-width:1.94967234;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate" d="M 47.7067,0.97484 C 30.16587,0.97531 15.94632,15.19488 15.94591,32.73573 15.96261,45.03216 23.07399,56.21461 34.20372,61.44257 26.70028,64.44123 20.25851,69.36233 14.54967,76.46116 6.18111,86.8674 0.38599,103.83295 1.02371,116.06265 l 0.20574,3.93866 3.61112,1.78466 c 4.27501,2.11301 14.6831,4.27022 24.28968,5.03414 4.52698,0.35997 9.20113,0.57302 13.87191,0.65135 20.43245,0.34261 40.79986,-1.89336 48.49474,-5.68925 3.38419,-1.66941 3.62383,-1.94597 3.8258,-4.40711 0.35665,-4.34426 -1.09692,-14.37772 -2.92192,-20.16435 C 86.95209,79.93442 75.9456,67.15348 61.5804,61.28009 72.51339,55.97148 79.45842,44.88937 79.46883,32.73573 79.46841,15.19437 65.24807,0.97458 47.70672,0.97484 Z"></path></g><text/><g class="linkHandle"><circle/><polyline/></g>',
    defaults: joint.util.deepSupplement({
        type: 'history.nodes.Identity',
        size: {
            width: 96,
            height: 128,
        },
        attrs: {
            text: {
                'ref-y': '80%',
            }
        },
    }, joint.shapes.history.GenericShape.prototype.defaults)
});
