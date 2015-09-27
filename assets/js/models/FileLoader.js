module.exports = Backbone.Model.extend({
    defaults: {
        validMIMETypes: [],
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
            this.set({
                isFileSelected: true,
                isFileValid: _.contains(this.attributes.validMIMETypes, file.type),
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
