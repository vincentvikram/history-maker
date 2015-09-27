module.exports = Backbone.View.extend({
    template: _.template($('#template-file-load').html()),
    initialize: function() {
        this.listenTo(this.model, 'change', this.render);
        this.render();
    },
    events: {
        'change input': 'changeInput'
    },
    changeInput: function(event) {
        this.model.trigger('selectFile', event.target.files[0] || null);
    },
    render: function() {
        var lablel = '',
            formGroupClass = '',
            type = this.model.get('fileType');

        if (this.model.get('isFileSelected')) {
            if (this.model.get('isFileValid')) {
                label = 'Ready to load file';
                formGroupClass = 'has-success';
            } else {
                label = 'Invalid file. Please select a valid ' + type + ' file';
                formGroupClass = 'has-error';
            }
        } else {
            label = 'Please select a ' + type + ' file';
            formGroupClass = 'has-warning';
        }

        this.$el.html(this.template({
            label: label,
            formGroupClass: formGroupClass,
        }));

        var MIMETypes = this.model.get('validMIMETypes');
        var extensions = this.model.get('validExtensions');
        var acceptedTypes = _.union(MIMETypes, extensions).join(',');

        this.$el.find('input').attr('accept', acceptedTypes);
    }
});
