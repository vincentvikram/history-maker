function textFieldKeyUpCallback(e) {
    if (e.keyCode == 13) {
        $(this).parents('.context-menu-root').data('contextMenu')
            .$menu.trigger('contextmenu:hide');
    }
}

function showCallback(opt) {
    var model = $(this).data('view').model;

    $.contextMenu.setInputValues(opt, {
        name: model.attr('text/text'),
        type: model.attributes.type,
        perspective: model.prop('perspective'),
        description: model.prop('description')
    });
}

function hideCallback(opt) {
    var values = $.contextMenu.getInputValues(opt);
    var view = $(this).data('view');

    if (view) {
        var model = view.model;
        model.attr('text/text', values.name);
        model.prop('perspective', values.perspective);
        model.prop('description', values.description);
    }
}

function getTextField(name, title) {
    return {
        name: title,
        type: 'text',
        events: {
            keyup: textFieldKeyUpCallback
        }
    };
}

var items = {
    name: getTextField('name', 'Name'),
    type: _.extend({
        disabled: true
    }, getTextField('type', 'Type')),
    perspective: getTextField('perspective', 'Perspective'),
    description: getTextField('description', 'Description'),
    remove: {
        name: 'Remove',
        callback: function(key, opt) {
            opt.$menu.trigger('contextmenu:hide');
            $(this).data('view').model.remove();
        },
    }
};

$(document).on('ready', function() {
    $.contextMenu({
        selector: '#canvas svg g.element',
        items: items,
        events: {
            show: showCallback,
            hide: hideCallback,
        }
    });
});
