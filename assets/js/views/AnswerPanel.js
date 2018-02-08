module.exports = Backbone.View.extend({
                                      template: _.template($('#template-answer-panel').html()),
                                      initialize: function() {
                                      this.render();
                                      window.updateQAndA = function (q, a) {
                                      $('.answer', this.$el).val(a);
                                      window.a = a;
                                      }.bind(this);
                                      },
                                      events: {
                                      'change textarea': 'changeInput'
                                      },
                                      changeInput: function(event) {
                                      window.a = $('.answer', this.$el).val();
                                      },
                                      render: function() {
                                      this.$el.html(this.template());
                                      }
                                      });
