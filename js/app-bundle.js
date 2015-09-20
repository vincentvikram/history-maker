/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	joint.shapes.history = __webpack_require__(1);
	var MenuGraph = __webpack_require__(2);
	var MenuPaper = __webpack_require__(3);
	var linkHandles = __webpack_require__(4);
	__webpack_require__(5);

	$.Drag.prototype.position = _.noop;

	var canvasGraph = new joint.dia.Graph();

	var canvasPaper = new joint.dia.Paper({
	    el: document.getElementById('canvas'),
	    width: 800,
	    height: 600,
	    gridSize: 1,
	    model: canvasGraph,
	    linkPinning: false,
	    linkConnectionPoint: joint.util.shapePerimeterConnectionPoint,
	    restrictTranslate: true,
	});

	linkHandles(canvasGraph);

	var menuGraph = new MenuGraph();

	var menuPaper = new MenuPaper({
	    el: document.getElementById('menu'),
	    model: menuGraph,
	    targetPaper: canvasPaper,
	});

	menuGraph.addItems(['Rectangle', 'Ellipse']);


/***/ },
/* 1 */
/***/ function(module, exports) {

	var GenericShape = joint.dia.Element.extend({
	    defaults: {
	        type: 'history.Generic',
	        size: {
	            height: 75,
	            width: 150,
	        },
	        attrs: {
	            '.outer': {
	                'stroke-width': 2,
	            },
	            '.inner': {
	                'stroke-width': 2,
	                display: 'none',
	            },
	            text: {
	                'font-family': 'Arial',
	                'font-size': 14,
	                'letter-spacing': 0,
	                fill: '#ffffff',
	                ref: '.outer',
	                'ref-x': 0.5,
	                'ref-y': 0.5,
	                'x-alignment': 'middle',
	                'y-alignment': 'middle',
	            },
	            '.linkHandle circle': {
	                r: 8,
	                ref: '.outer',
	                'ref-x': '90%',
	                'ref-y': '50%',
	                fill: '#000000',
	            },
	            '.linkHandle polyline': {
	                stroke: '#ffffff',
	                ref: '.linkHandle circle',
	                'ref-x': 0.5,
	                'ref-y': 0.5,
	                'x-alignment': 'middle',
	                'y-alignment': 'middle',
	            },
	        },
	    },
	});

	module.exports = {
	    Rectangle: GenericShape.extend({
	        markup: '<g class="rotatable"><g class="scalable"><polygon class="outer"/><polygon class="inner"/></g><text/></g><g class="linkHandle"><circle/><polyline points="0,0 5,5 0,10"/></g>',
	        defaults: joint.util.deepSupplement({
	            type: 'history.Rectangle',
	            attrs: {
	                '.outer': {
	                    fill: '#2ECC71',
	                    stroke: '#27AE60',
	                    points: '100,0 100,60 0,60 0,0',
	                },
	                '.inner': {
	                    fill: '#2ECC71',
	                    stroke: '#27AE60',
	                    points: '95,5 95,55 5,55 5,5',
	                },
	                text: {
	                    text: 'Rectangle',
	                },
	            },
	        }, GenericShape.prototype.defaults)
	    }),
	    Ellipse: GenericShape.extend({
	        markup: '<g class="rotatable"><g class="scalable"><ellipse class="outer"/><ellipse class="inner"/></g><text/></g><g class="linkHandle"><circle/><polyline points="0,0 5,5 0,10"/></g>',
	        defaults: joint.util.deepSupplement({
	            type: 'history.Ellipse',
	            attrs: {
	                ellipse: {
	                    'transform': 'translate(50, 25)'
	                },
	                '.outer': {
	                    'stroke': '#D35400',
	                    'rx': 50,
	                    'ry': 25,
	                    'fill': '#E67E22'
	                },
	                '.inner': {
	                    'stroke': '#D35400',
	                    'rx': 45,
	                    'ry': 20,
	                    'fill': '#E67E22',
	                },
	                text: {
	                    text: 'Rectangle',
	                },
	            },
	        }, GenericShape.prototype.defaults),
	    }),
	    Link: joint.shapes.erd.Line.extend({
	        defaults: joint.util.deepSupplement({
	            type: 'history.Link',
	            labels: [{
	                position: 0.5,
	                attrs: {
	                    text: {
	                        dy: -8,
	                        text: 'Link',
	                        fill: '#000000',
	                    },
	                    rect: {
	                        stroke: '#70A3C4',
	                        'stroke-width': 15,
	                        rx: 0,
	                        ry: 0,
	                    },
	                },
	            }]
	        }, joint.shapes.erd.Line.prototype.defaults),
	        setLabelText: function(text) {
	            this.label(0, {
	                attrs: {
	                    text: {
	                        text: text,
	                    },
	                },
	            });
	            return this;
	        }
	    })
	};


/***/ },
/* 2 */
/***/ function(module, exports) {

	function getItemPosition(item, prevItem) {
	    var y = 0;

	    if (prevItem) {
	        y += prevItem.prop('position/y') + prevItem.prop('size/height');
	        y += 20;
	    }

	    return g.point(0, y);
	}

	module.exports = joint.dia.Graph.extend({
	    addItems: function(menu) {
	        var prevItem = null;

	        _.each(menu, function(type) {
	            var item = new joint.shapes.history[type]()
	                .set('position', getItemPosition(item, prevItem))
	                .attr('text/text', type)
	                .prop('itemType', type);

	            this.addCell(item);

	            prevItem = item;
	        }, this);
	    }
	});


/***/ },
/* 3 */
/***/ function(module, exports) {

	function moveSVGElementsToOrigin($svg) {
	    $svg.children().each(function() {
	        _.each(this.transform.baseVal, function(transform) {
	            if (transform.type == SVGTransform.SVG_TRANSFORM_TRANSLATE) {
	                transform.setTranslate(0, 0);
	            }
	        });
	    });
	}

	function createSVGProxy(element) {
	    var $clone = $(element).clone();
	    var $svg = $($.parseHTML('<svg version="1.1">'));

	    $clone.appendTo($svg);

	    moveSVGElementsToOrigin($svg);

	    $svg.css({
	        opacity: 0.75,
	        position: 'absolute',
	        overflow: 'visible'
	    }).appendTo(document.body);

	    return $svg;
	}

	function getNewItemPosition(drag, itemSize, paper) {
	    var dragX = drag.location.x(),
	        dragY = drag.location.y();
	    var offset = paper.$el.find('svg').offset();
	    var paperBox = g.rect(0, 0, paper.options.width, paper.options.height);

	    var width = itemSize.width;
	    var height = itemSize.height;

	    var topLeft = g.point(dragX - offset.left, dragY - offset.top);
	    var bottomRight = g.point(topLeft.x + width, topLeft.y + height);

	    if (!paperBox.containsPoint(topLeft)) {
	        topLeft.adhereToRect(paperBox);
	        bottomRight = g.point(topLeft.x + itemSize.width, topLeft.y + height);
	    }

	    if (!paperBox.containsPoint(bottomRight)) {
	        bottomRight.adhereToRect(paperBox);
	        topLeft = g.point(bottomRight.x - width, bottomRight.y - height);
	    }

	    return topLeft;
	}

	function createNewItem(type, paper) {
	    var text = prompt('Text for ' + type) || '';
	    var newItem = new joint.shapes.history[type]();

	    newItem.attr('text/text', text);

	    return newItem;
	}

	function initializePaper() {
	    joint.dia.Paper.prototype.initialize.apply(this, arguments);

	    var self = this;

	    $(this.$el)
	        .on('draginit', 'g.element', function(event, drag) {
	            $(this).data('proxy', createSVGProxy(this));
	        })
	        .on('dragmove', 'g.element', function(event, drag) {
	            $(this).data('proxy').css({
	                top: drag.location.y(),
	                left: drag.location.x(),
	            });
	        })
	        .on('dragend', 'g.element', function(event, drag) {
	            var item = $(this).data('model');
	            var paper = self.options.targetPaper;
	            var position = getNewItemPosition(drag, item.get('size'), paper);

	            var newItem = createNewItem(item.prop('itemType'), paper);
	            newItem.set('position', position);
	            paper.model.addCell(newItem);

	            $(this).data('proxy').remove();
	        });

	    this.listenTo(this.model, 'add', function(item) {
	        this.findViewByModel(item).$el.data('model', item);
	    });
	}

	var options = {
	    width: 300,
	    height: 600,
	    gridSize: 1,
	    interactive: false,
	};

	var parentOptions = _.clone(joint.dia.Paper.prototype.options);

	module.exports = joint.dia.Paper.extend({
	    options: _.extend(parentOptions, options),
	    initialize: initializePaper,
	});


/***/ },
/* 4 */
/***/ function(module, exports) {

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


/***/ },
/* 5 */
/***/ function(module, exports) {

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


/***/ }
/******/ ]);