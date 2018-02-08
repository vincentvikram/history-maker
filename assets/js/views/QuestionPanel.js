module.exports = Backbone.View.extend({
    template: _.template($('#template-question-panel').html()),
    initialize: function() {
        this.render();
        window.updateQAndA = function (q, a) {
            $('.question', this.$el).val(q);
            window.q = q;
        }.bind(this);
    },
    events: {
        'change textarea': 'changeInput'
    },
    changeInput: function(event) {
        window.q = $('.question', this.$el).val();
    },
    render: function() {
        this.$el.html(this.template());
    }
});
