module.exports = joint.shapes.history.GenericShape.extend({
    markup: '<g class="outer"><path style="fill:#cccccc" d="m 130,126.75 c 0,10.76887 -8.73113,19.5 -19.5,19.5 l -91,0 C 8.731125,146.25 0,137.51887 0,126.75 L 0,19.5 C 0,8.731125 8.731125,0 19.5,0 l 91,0 C 121.26887,0 130,8.731125 130,19.5 l 0,107.25 z"></path><line style="fill:none;stroke:#ffffff;stroke-width:3.25;stroke-miterlimit:10" y2="128.375" x2="130" y1="128.375" x1="0" stroke-miterlimit="10"></line></g><text/><g class="linkHandle"><circle/><polyline/></g>',
    defaults: joint.util.deepSupplement({
        type: 'isat.nodes.Stratum',
        size: {
            width: 130,
            height: 146,
        },
    }, joint.shapes.history.GenericShape.prototype.defaults)
});
