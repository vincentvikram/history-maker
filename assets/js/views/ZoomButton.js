module.exports = Backbone.View.extend({
    events: {
        'click': 'doZoom'
    },
    doZoom: function() {
        var zoom = this.model.get('zoom');

        if (this.$el.data('zoom') === '+') {
            zoom += 0.2;
        } else {
            zoom -= 0.2;
        }

        this.model.set('zoom', zoom);
    },
});
