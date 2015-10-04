module.exports = joint.dia.Link.extend({
    defaults: {
        type: 'history.GenericLink',
        router: { name: 'metro' },
        labels: [{
            position: 0.5,
            attrs: {
                text: { dy: -8, text: 'Link', fill: '#000000' },
                rect: {
                    stroke: '#70A3C4',
                    fill: '#70A3C4',
                    'stroke-width': 15,
                    rx: 0,
                    ry: 0,
                },
            },
        }],
    },
    setLabelText: function(text) {
        this.label(0, {attrs: {text: {text: text}}});

        return this;
    }
});
