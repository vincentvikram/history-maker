module.exports = joint.shapes.history.GenericShape.extend({
    markup: '<g class="outer"><path d="m 28.233278,7.0482296 c 3.681688,-3.524138 8.924759,-5.558347 14.440163,-5.615664 l 44.638753,0 c 5.529723,0.0573 10.772864,2.091526 14.454626,5.615664 l 26.25882,25.8004874 c 0.73069,1.432563 0.73069,3.065716 0,4.498279 l -26.25882,25.800466 c -3.681762,3.524188 -8.924903,5.558396 -14.454626,5.615679 l -44.638753,0 C 37.158037,68.705556 31.914966,66.67165 28.233278,63.147462 L 1.9742488,37.346996 c -0.730551,-1.432563 -0.730551,-3.065716 0,-4.498279 L 28.233278,7.0482296 Z" class="filled" style="stroke:#000000;stroke-width:2.86513114;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"></path></g><text/><g class="linkHandle"><circle/><polyline/></g>',
    defaults: joint.util.deepSupplement({
        type: 'history.nodes.Event',
        size: {
            width: 128,
            height: 67,
        },
    }, joint.shapes.history.GenericShape.prototype.defaults)
});
