var dialogTemplate = _.template($('#template-link-dialog').html());
function getLinkAttributes(callback) {
    var linkTypes = {};
    var shapes;

    var options = {
        linkTypes: {},
        lineStyles: { 'solid': 'Solid Line', 'dotted': 'Dotted Line' },
    };

    if (window.iSATMode) {
        shapes = joint.shapes.isat.links;
        options.linkTypes = {
            'NormalLink': 'Normal',
            'AlignedLink': 'Aligned',
            'StarburstLink': 'Starburst',
            'SlideLink': 'Slide',
        };
    } else {
        shapes = joint.shapes.history.links;
        options.linkTypes = {
            'UndirectedLink': 'Ordinary Relationship',
            'UnidirectionalLink': 'Cause and Effect',
            'BidirectionalLink': 'Parent-Child',
        };
    }

    _.each(shapes, function (type, key) {
        linkTypes[key] = key.replace(/([A-Z])/g, ' $1');
    });

    var box = bootbox.dialog({
        title: 'Add Link',
        message: dialogTemplate(options),
        onescape: true,
        buttons: {
            success: {
                label: 'Add Link',
                classname: 'btn-success',
                callback: function() {
                    var $form = $(this).find('form');

                    var result = {
                        text: $form.find('[name=text]').val(),
                        linkType: $form.find('[name=link-type] option:selected').val(),
                        lineStyle: $form.find('[name=line-style] option:selected').val(),
                    };

                    callback(result);
                },
            },
        }
    });

    var submitOnEnterKeyPress = function(event) {
        if (event.which == 13) {
            $('.btn-success', box).trigger('click');
        }
    };

    box.on('hidden.bs.modal', function () {
        $(document).off('keypress', submitOnEnterKeyPress);
    });

    $(document).on('keypress', submitOnEnterKeyPress);

    box.find('form').on('submit', function(event) {
        event.preventDefault();
    });
}

module.exports = function(graph) {
    $(document).on('ready', function() {
        $('#canvas svg').on('draginit', '.linkHandle', function(e, drag) {
            var view = $(this).parents('g.element').data('view');
            var model = view.model;

            var link = new joint.shapes.history.GenericLink({
                source: {
                    id: model.id
                },
                target: {
                    x: drag.mouseStartPosition.x(),
                    y: drag.mouseStartPosition.y()
                },
            });

            link.addTo(graph);
            $(this).data('view', view);
            $(this).data('sourceView', view);
            $(this).data('link', link);
            $(this).data('offset', view.paper.$el.find('svg').offset());
            $(this).data('paper', view.paper);
        });

        $('#canvas svg').on('dragmove', '.linkHandle', function(e, drag) {
            var paper = $(this).data('paper');
            var link = $(this).data('link');
            var offset = $(this).data('offset');
            var view = $(this).data('view');

            link.set('target', {
                x: drag.location.x() - offset.left,
                y: drag.location.y() - offset.top
            });

            var point = g.point(drag.location.x() - offset.left, drag.location.y() - offset.top);
            var views = _.without(paper.findViewsFromPoint(point), view);
            var sortedViews = _.sortBy(views, function(view) {
                return -view.z;
            });

            _.each(paper.options.model.getElements(), function(item) {
                item.findView(paper).unhighlight();
            });

            if (sortedViews.length) {
                sortedViews[0].highlight();
                $(this).data('targetView', sortedViews[0]);
            } else {
                $(this).data('targetView', null);
            }
        });

        $('#canvas svg').on('dragend', '.linkHandle', function(e, drag) {
            var link = $(this).data('link');
            var targetView = $(this).data('targetView');

            if (targetView) {
                targetView.unhighlight();

                link.set('target', { id: targetView.model.id });

                getLinkAttributes(function (result) {
                    var constructor = joint.shapes.history.links[result.linkType] || joint.shapes.isat.links[result.linkType];
                    var newLink = new constructor({
                        source: { id: $(this).data('sourceView').model.id },
                        target: { id: targetView.model.id },
                    });

                    newLink.setLabelText(result.text);
                    newLink.prop('lineStyle', result.lineStyle);

                    if (result.lineStyle === 'dotted') {
                        newLink.attr('.connection/stroke-dasharray', '2 5');
                    }

                    newLink.addTo(graph);
                    link.remove();
                }.bind(this));
            } else {
                link.remove();
            }
        });

        $('#canvas svg').on('mouseup mousemove mousedown', '.linkHandle', function(e) {
            e.stopImmediatePropagation();
        });
    });
};
