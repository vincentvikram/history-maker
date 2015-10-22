module.exports = joint.shapes.history.GenericShape.extend({
    markup: '<g class="outer"><rect ry="25.517525" y="-0.46710238" x="-7.5101852e-06" height="125.71101" width="130.00002" style="fill:#ffffff;stroke:none;stroke-width:2.00000024;stroke-miterlimit:10;stroke-dasharray:none"></rect><rect ry="0" y="52.819183" x="-7.5101852e-06" height="72.424728" width="130.00002" style="fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:3.171;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:12.684, 12.684;stroke-dashoffset:0"></rect><path style="fill:none;stroke:#cccccc;stroke-width:3.17100038;stroke-miterlimit:10;stroke-dasharray:12.68400151,12.68400151;stroke-linejoin:round;stroke-dashoffset:0" d="m 109.39024,123.65854 -95.121947,0 m 114.146347,-6.34146 0,6.34146 -6.34147,0 M 1.5853659,104.63415 l 0,-84.817076 C 1.5853659,9.3108539 10.89622,1.5853659 21.40244,1.5853659 l 88.78049,0 c 10.50622,0 18.23171,7.725488 18.23171,18.2317081 l 0,91.158536 m -120.4878105,12.68293 -6.3414636,0 0,-6.34146"></path></g><text/><g class="linkHandle"><circle/><polyline/></g>',
    defaults: joint.util.deepSupplement({
        type: 'isat.nodes.Phase',
        size: {
            width: 130,
            height: 126,
        },
    }, joint.shapes.history.GenericShape.prototype.defaults)
});
