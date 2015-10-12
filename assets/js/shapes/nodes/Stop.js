module.exports = joint.shapes.history.GenericShape.extend({
    markup: '<g class="outer"><path d="m 98.387083,49.999993 c 0,26.723476 -21.663837,48.387123 -48.386822,48.387123 -26.723792,0 -48.3873597,-21.663647 -48.3873597,-48.387123 0,-26.723444 21.6635677,-48.3870898 48.3873597,-48.3870898 26.722985,0 48.386822,21.6636458 48.386822,48.3870898 z" class="filled" style="stroke:#1a1a1a;stroke-width:3.22580647;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"></path><path d="m 85.483726,49.999993 c 0,19.597197 -15.886205,35.483877 -35.483465,35.483877 -19.597007,0 -35.484003,-15.88668 -35.484003,-35.483877 0,-19.59718 15.886996,-35.483876 35.484003,-35.483876 19.59726,0 35.483465,15.886696 35.483465,35.483876 z" style="fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none"></path></g><text/><g class="linkHandle"><circle/><polyline/></g>',
    defaults: joint.util.deepSupplement({
        type: 'history.nodes.Stop',
        size: {
            width: 99,
            height: 99,
        },
        attrs: {
            text: {
                fill: '#FFFFFF',
            }
        },
    }, joint.shapes.history.GenericShape.prototype.defaults)
});
