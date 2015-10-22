window.iSATMode = false;

module.exports = Backbone.View.extend({
    events: {
        'click': 'doToggle',
    },
    doToggle: function() {
        this.model.clear();

        window.iSATMode = !window.iSATMode;

        if (window.iSATMode) {
            this.model.addItems(joint.shapes.isat.nodes);
        } else {
            this.model.addItems(joint.shapes.history.nodes);
        }
    },
});
