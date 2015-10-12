module.exports = joint.shapes.history.GenericShape.extend({
    markup: '<g class="outer"><path class="filled" style="fill-opacity:1;fill-rule:nonzero;stroke:#000000;stroke-width:4.9982233;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" d="m 47.898603,17.798843 c 0,8.449813 -6.849982,15.299729 -15.299729,15.299729 -8.449863,0 -15.299712,-6.849916 -15.299712,-15.299729 0,-8.4497966 6.849849,-15.2997286 15.299712,-15.2997286 8.449747,0 15.299729,6.849932 15.299729,15.2997286 z"></path><path class="filled" style="stroke:#000000;stroke-width:4.9982233;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" d="m 47.898603,17.79886 c 0,8.449796 -6.849982,15.299729 -15.299845,15.299729 -8.449747,0 -15.299729,-6.849933 -15.299729,-15.299729 0,-8.4498136 6.849982,-15.299729 15.299729,-15.299729 8.449863,0 15.299845,6.8499154 15.299845,15.299729 z"></path><path class="filled" style="stroke:#000000;stroke-width:4.9982233;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" d="m 32.598758,32.078601 0,50.999107 m 0,-40.799282 -30.5994411,0 m 30.5994411,0 30.599557,0 M 32.598758,83.077708 1.9993169,123.87699 M 32.598758,83.077708 63.198315,123.87699"></path></g><text/><g class="linkHandle"><circle/><polyline/></g>',
    defaults: joint.util.deepSupplement({
        type: 'history.nodes.Actor',
        size: {
            width: 64,
            height: 124,
        },
        attrs: {
            text: {
                'ref-x': '0%',
            }
        },
    }, joint.shapes.history.GenericShape.prototype.defaults)
});
