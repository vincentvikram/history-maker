module.exports = joint.dia.Element.extend({
    defaults: {
        type: 'history.Generic',
        size: {
            height: 75,
            width: 150,
        },
        attrs: {
            text: {
                'font-family': 'Arial',
                'font-size': 14,
                'letter-spacing': 0,
                fill: '#ffffff',
                ref: '.outer',
                'ref-x': 0.5,
                'ref-y': 0.5,
                'x-alignment': 'middle',
                'y-alignment': 'middle',
            },
            '.linkHandle circle': {
                r: 8,
                ref: '.outer',
                'ref-x': '90%',
                'ref-y': '50%',
                fill: '#000000',
            },
            '.linkHandle polyline': {
                stroke: '#ffffff',
                points: '0,0 5,5 0,10',
                ref: '.linkHandle circle',
                'ref-x': 0.5,
                'ref-y': 0.5,
                'x-alignment': 'middle',
                'y-alignment': 'middle',
            },
        },
    },
});
