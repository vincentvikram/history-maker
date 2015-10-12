module.exports = joint.shapes.history.GenericShape.extend({
    markup: '<g class="outer"><path d="m 96.428576,49.999852 c 0,25.641762 -20.786966,46.428478 -46.428948,46.428478 -25.641541,0 -46.4282123,-20.786716 -46.4282123,-46.428478 0,-25.641717 20.7866713,-46.4284325 46.4282123,-46.4284325 25.641982,0 46.428948,20.7867155 46.428948,46.4284325 z" class="filled" style="stroke:#000000;stroke-width:7.14283895;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"></path></g><text/><g class="linkHandle"><circle/><polyline/></g>',
    defaults: joint.util.deepSupplement({
        type: 'history.nodes.Start',
        size: {
            width: 99,
            height: 99,
        },
    }, joint.shapes.history.GenericShape.prototype.defaults)
});
