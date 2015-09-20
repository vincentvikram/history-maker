module.exports = function(graph) {
    $(document).on('ready', function() {
        $('#canvas svg').on('draginit', '.linkHandle', function(e, drag) {
            var view = $(this).parents('g.element').data('view');
            var model = view.model;

            var link = new joint.shapes.history.Link({
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
                link.set('target', {
                    id: targetView.model.id
                });

                var text = prompt('Text for link') || '';
                link.setLabelText(text);
            } else {
                link.remove();
            }
        });

        $('#canvas svg').on('mouseup mousemove mousedown', '.linkHandle', function(e) {
            e.stopImmediatePropagation();
        });
    });
};
