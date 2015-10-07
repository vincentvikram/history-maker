module.exports = joint.shapes.history.GenericShape.extend({
    markup: '<g class="outer"><path d="m 19.69382,1.4006566 100.61227,0 c 10.10313,0 18.29323,8.190116 18.29323,18.2931454 l 0,9.146577 c 0,10.10304 -8.1901,18.293155 -18.29323,18.293155 l -100.61227,0 c -10.102992,0 -18.2931634,-8.190115 -18.2931634,-18.293155 l 0,-9.146577 C 1.4006566,9.5907726 9.590828,1.4006566 19.69382,1.4006566 Z" style="fill:#5fd35f;stroke:#000000;stroke-width:2.80131316;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"></path></g><text/><g class="linkHandle"><circle/><polyline/></g>',
    defaults: joint.util.deepSupplement({
        type: 'history.nodes.Activity',
        size: {
            width: 138,
            height: 46,
        },
    }, joint.shapes.history.GenericShape.prototype.defaults)
});
