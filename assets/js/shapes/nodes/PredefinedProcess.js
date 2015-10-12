module.exports = joint.shapes.history.GenericShape.extend({
    markup: '<g class="outer"><path d="m 6.562579,1.7499992 126.874971,0 c 2.65784,0 4.81244,2.154673 4.81244,4.812502 l 0,62.1250268 c 0,2.657986 -2.1546,4.812444 -4.81244,4.812444 l -126.874971,0 c -2.6578427,0 -4.8125875,-2.154458 -4.8125875,-4.812444 l 0,-62.1250268 c 0,-2.657829 2.1547448,-4.812502 4.8125875,-4.812502 z" class="filled" style="fill-opacity:1;fill-rule:nonzero;stroke:none"></path><path d="m 6.562579,1.7499992 126.874971,0 c 2.65784,0 4.81244,2.154673 4.81244,4.812502 l 0,62.1250268 c 0,2.657986 -2.1546,4.812444 -4.81244,4.812444 l -126.874971,0 c -2.6578427,0 -4.8125875,-2.154458 -4.8125875,-4.812444 l 0,-62.1250268 c 0,-2.657829 2.1547448,-4.812502 4.8125875,-4.812502 z" class="filled" style="stroke:#000000;stroke-width:3.49999833;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"></path><path d="m 21.245029,1.7499992 0,71.7499728" class="filled" style="stroke:#000000;stroke-width:3.49999833;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"></path><path d="m 118.7551,1.7499992 0,71.7499728" class="filled" style="stroke:#000000;stroke-width:3.49999833;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"></path></g><text/><g class="linkHandle"><circle/><polyline/></g>',
    defaults: joint.util.deepSupplement({
        type: 'history.nodes.PredefinedProcess',
        size: {
            width: 138,
            height: 74,
        },
    }, joint.shapes.history.GenericShape.prototype.defaults)
});
