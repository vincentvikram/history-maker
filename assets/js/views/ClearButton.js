module.exports = Backbone.View.extend({
    events: {
        'click': 'doClear',
    },
    doClear: function() {
        bootbox.confirm('Are you sure you wish to clear the canvas?', function (result) {
            if (result) {
                this.model.clear();
                window.updateQAndA('', '');
            }
        }.bind(this));
    },
});
