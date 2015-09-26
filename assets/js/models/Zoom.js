module.exports = Backbone.Model.extend({
    defaults: {
        zoom: 1,
        paper: null,
    },
    initialize: function() {
        this.on('change', function () {
            var zoom = this.attributes.zoom;
            this.attributes.paper.scale(zoom, zoom);
        });
    },
});
