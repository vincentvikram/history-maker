module.exports = Backbone.View.extend({
    events: {
        'click': 'doClear',
    },
    doClear: function() {
        if (confirm('Are you sure you wish to clear the canvas?')) {
            this.model.clear();
        }
    },
});
