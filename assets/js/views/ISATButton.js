module.exports = Backbone.View.extend({
    events: {
        'click': 'doToggle',
    },
    doToggle: function() {
        this.model.clear();

        window.iSATMode = !window.iSATMode;

        if (window.iSATMode) {
            this.model.addItems(joint.shapes.isat.nodes);
            window.jQuery('.title').text('iSAT Planner');
        } else {
            this.model.addItems(joint.shapes.history.nodes);
            window.jQuery('.title').text('History Maker');
        }
    },
});
