module.exports = joint.shapes.history.GenericShape.extend({
    markup: '<g class="outer"><path style="fill:#cccccc" d="m 122.35294,126.94118 c 0,10.13541 -8.21753,18.35294 -18.35294,18.35294 l -85.647059,0 C 8.217529,145.29412 0,137.07659 0,126.94118 L 0,26 C 0,15.864589 8.217529,7.6470588 18.352941,7.6470588 l 85.647059,0 c 10.13541,0 18.35294,8.2175302 18.35294,18.3529412 l 0,100.94118 z"></path><path style="fill:#cccccc;stroke:#ffffff;stroke-width:3.05882359;stroke-miterlimit:10" d="m 128.47059,120.82353 c 0,10.13541 -8.21753,18.35294 -18.35294,18.35294 l -85.647062,0 c -10.135412,0 -18.352941,-8.21753 -18.352941,-18.35294 l 0,-100.941177 c 0,-10.1354112 8.217529,-18.3529412 18.352941,-18.3529412 l 85.647062,0 c 10.13541,0 18.35294,8.21753 18.35294,18.3529412 l 0,100.941177 z" stroke-miterlimit="10"></path></g><text/><g class="linkHandle"><circle/><polyline/></g>',
    defaults: joint.util.deepSupplement({
        type: 'isat.nodes.Data',
        size: {
            width: 130,
            height: 145,
        },
    }, joint.shapes.history.GenericShape.prototype.defaults)
});
