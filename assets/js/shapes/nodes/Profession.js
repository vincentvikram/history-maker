module.exports = joint.shapes.history.GenericShape.extend({
    markup: '<path class="outer" d="m 48.98665,2.551604 c -0.0912,0 -0.16696,0.073 -0.16696,0.1645 l 0,13.583699 c 0,0.091 0.0758,0.1645 0.16696,0.1645 l 35.024413,0 c 0.0912,0 0.16447,-0.073 0.16447,-0.1645 l 0,-13.583699 c 0,-0.091 -0.0734,-0.1645 -0.16447,-0.1645 l -35.024413,0 z m 57.46693,10.4637 c -0.0913,0 -0.16455,0.073 -0.16455,0.1646 l 0,3.117399 c 0,0.091 0.0733,0.1669 0.16455,0.1669 l 4.25377,0 c 0.0913,0 0.16455,-0.076 0.16455,-0.1669 l 0,-3.117399 c 0,-0.091 -0.0733,-0.1646 -0.16455,-0.1646 l -4.25377,0 z m -84.163217,0.177 c -0.0912,0 -0.16447,0.073 -0.16447,0.1645 l 0,3.119999 c 0,0.091 0.0733,0.1645 0.16447,0.1645 l 4.25127,0 c 0.0911,0 0.16447,-0.073 0.16447,-0.1645 l 0,-3.119999 c 0,-0.091 -0.0734,-0.1645 -0.16447,-0.1645 l -4.25127,0 z m -5.6991,3.583399 c -7.7783604,0 -14.0396604,6.2613 -14.0396604,14.0397 l 0,50.9629 c 0,7.7784 6.2613,14.0397 14.0396604,14.0397 l 99.815177,0 c 7.77836,0 14.03968,-6.2613 14.03968,-14.0397 l 0,-50.9629 c 0,-7.7784 -6.26132,-14.0397 -14.03968,-14.0397 l -99.815177,0 z"/><text/><g class="linkHandle"><circle/><polyline/></g>',
    defaults: joint.util.deepSupplement({
        type: 'history.nodes.Community',
        size: {
            width: 133,
            height: 98,
        },
        attrs: {
            path: {
                fill: '#FFFFFF',
                stroke: '#1A1A1A',
            },
            text: {
                fill: '#1A1A1A',
            },
        },
    }, joint.shapes.history.GenericShape.prototype.defaults)
});
