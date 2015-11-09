module.exports = Backbone.View.extend({
    template: _.template($('#template-question-panel').html()),
    initialize: function() {
        this.render();
        window.updateQAndA = function (q, a) {
            $('.question', this.$el).val(q);
            $('.answer', this.$el).val(a);
            window.q = q;
            window.a = a;
        }.bind(this);
    },
    events: {
        'change textarea': 'changeInput'
    },
    changeInput: function(event) {
        window.q = $('.question', this.$el).val();
        window.a = $('.answer', this.$el).val();
    },
    render: function() {
        this.$el.html(this.template());
    }
});
