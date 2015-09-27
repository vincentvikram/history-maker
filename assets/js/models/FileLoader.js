module.exports = Backbone.Model.extend({
    defaults: {
        validMIMETypes: [],
        validExtensions: [],
        fileType: '',
        data: null,
        isFileSelected: false,
        isFileValid: false,
        file: null,
    },
    initialize: function() {
        this.on('selectFile', this.checkSelectedFile);
    },
    checkSelectedFile: function(file) {
        if (file) {
            var validMIMEType = _.contains(this.get('validMIMETypes'), file.type);

            var validExtension = _.some(this.get('validExtensions'), function(ext) {
                var pos = file.name.lastIndexOf(ext);

                return (pos !== -1) && (pos === file.name.length - ext.length);
            });

            this.set({
                isFileSelected: true,
                isFileValid: validMIMEType || validExtension,
                file: file,
            });
        } else {
            this.set({
                isFileSelected: false,
                isFileValid: false,
                file: null,
            });
        }
    },
    loadFileContents: function(callback) {
        if (this.attributes.isFileValid) {
            var reader = new FileReader();

            reader.onloadend = function(event) {
                if (event.target.readyState == FileReader.DONE) {
                    callback(event.target.result);
                }
            };

            reader.readAsText(this.attributes.file);
        }
    }
});
