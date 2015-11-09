module.exports = Backbone.View.extend({
    events: {
        'click': 'doSave',
    },
    getJSONBlob: function() {
        var data = this.model.toJSON();
        data.q = window.q;
        data.a = window.a;
        return new Blob(
            [JSON.stringify(data)],
            {type: 'application/json;charset=utf-8'}
        );
    },
    doSave: function() {
        var box = bootbox.prompt('Enter a file name for this diagram', function(result) {
            var name = result || 'History Maker Diagram';
            saveAs(this.getJSONBlob(), name + '.dia.json');
        }.bind(this));
    },
});
