module.exports = Backbone.View.extend({
    events: {
        'click': 'doSave',
    },
    getJSONBlob: function() {
        var data = this.model.toJSON();
        return new Blob(
            [JSON.stringify(data)],
            {type: 'application/json;charset=utf-8'}
        );
    },
    doSave: function() {
        var name = prompt('Enter a file name for this diagram');
        saveAs(this.getJSONBlob(), name + '.json');
    },
});
