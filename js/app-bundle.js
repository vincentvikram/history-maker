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

	joint.shapes.history = {nodes: {}, links: {}};

	joint.shapes.history.GenericShape = __webpack_require__(1);
	joint.shapes.history.GenericLink = __webpack_require__(2);

	joint.shapes.history.links.UndirectedLink = __webpack_require__(3);
	joint.shapes.history.links.UnidirectionalLink = __webpack_require__(4);
	joint.shapes.history.links.BidirectionalLink = __webpack_require__(5);

	var MenuGraph = __webpack_require__(6);
	var MenuPaper = __webpack_require__(7);
	var linkHandles = __webpack_require__(8);
	var SaveButton = __webpack_require__(9);
	var LoadButton = __webpack_require__(10);
	var ClearButton = __webpack_require__(13);
	var Zoom = __webpack_require__(14);
	var ZoomButton = __webpack_require__(15);
	__webpack_require__(16);

	$.Drag.prototype.position = _.noop;

	var canvasGraph = new joint.dia.Graph();

	var canvasPaper = new joint.dia.Paper({
	    el: document.getElementById('canvas'),
	    width: 2000,
	    height: 1000,
	    gridSize: 1,
	    model: canvasGraph,
	    linkPinning: false,
	    linkConnectionPoint: joint.util.shapePerimeterConnectionPoint,
	    restrictTranslate: true,
	});

	linkHandles(canvasGraph);

	var zoom = new Zoom({
	    paper: canvasPaper,
	});

	var menuGraph = new MenuGraph();

	var menuPaper = new MenuPaper({
	    el: document.getElementById('menu'),
	    model: menuGraph,
	    height: 400,
	    width: 150,
	    targetPaper: canvasPaper,
	    zoom: zoom,
	});

	menuGraph.addItems(joint.shapes.history.nodes);

	var saveButton = new SaveButton({
	    el: document.getElementById('save-btn'),
	    model: canvasGraph,
	});

	var loadButton = new LoadButton({
	    el: document.getElementById('load-btn'),
	    model: canvasGraph,
	});

	var clearButton = new ClearButton({
	    el: document.getElementById('clear-btn'),
	    model: canvasGraph,
	});

	var zoomInButton = new ZoomButton({
	    el: document.getElementById('zoom-in-btn'),
	    model: zoom,
	});

	var zoomOutButton = new ZoomButton({
	    el: document.getElementById('zoom-out-btn'),
	    model: zoom,
	});


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = joint.dia.Element.extend({
	    defaults: {
	        type: 'history.Generic',
	        size: {
	            height: 75,
	            width: 150,
	        },
	        attrs: {
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
	                points: '0,0 5,5 0,10',
	                ref: '.linkHandle circle',
	                'ref-x': 0.5,
	                'ref-y': 0.5,
	                'x-alignment': 'middle',
	                'y-alignment': 'middle',
	            },
	        },
	    },
	});


/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = joint.dia.Link.extend({
	    defaults: {
	        type: 'history.GenericLink',
	        router: { name: 'metro' },
	        labels: [{
	            position: 0.5,
	            attrs: {
	                text: { dy: -8, text: 'Link', fill: '#000000' },
	                rect: {
	                    stroke: '#70A3C4',
	                    fill: '#70A3C4',
	                    'stroke-width': 15,
	                    rx: 0,
	                    ry: 0,
	                },
	            },
	        }],
	    },
	    setLabelText: function(text) {
	        this.label(0, {attrs: {text: {text: text}}});

	        return this;
	    }
	});


/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = joint.shapes.history.GenericLink.extend({
	    defaults: joint.util.deepSupplement({
	        type: 'history.links.UndirectedLink',
	    }, joint.shapes.history.GenericLink.prototype.defaults),
	});


/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = joint.shapes.history.GenericLink.extend({
	    defaults: joint.util.deepSupplement({
	        type: 'history.links.UnidirectionalLink',
	        attrs: {
	            '.marker-source': { fill: '#4b4a67', stroke: '#4b4a67', d: 'M 0 0 L 0 10 L 5 10 L 5 0 z'},
	            '.marker-target': { fill: '#4b4a67', stroke: '#4b4a67', d: 'M 10 0 L 0 5 L 10 10 z' },
	        },
	    }, joint.shapes.history.GenericLink.prototype.defaults),
	});


/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = joint.shapes.history.GenericLink.extend({
	    defaults: joint.util.deepSupplement({
	        type: 'history.links.BidirectionalLink',
	        attrs: {
	            '.marker-source': { fill: '#4b4a67', stroke: '#4b4a67', d: 'M 10 0 L 0 5 L 10 10 z'},
	            '.marker-target': { fill: '#4b4a67', stroke: '#4b4a67', d: 'M 10 0 L 0 5 L 10 10 z' },
	        },
	    }, joint.shapes.history.GenericLink.prototype.defaults),
	});


/***/ },
/* 6 */
/***/ function(module, exports) {

	function getItemPosition(item, prevItem) {
	    var x = 0, y = 0;

	    if (prevItem) {
	        y += prevItem.prop('position/y') + prevItem.prop('size/height');
	        y += 20;
	    }

	    var width = item.prop('size/width');

	    if (width <= 150) {
	        x = (150 - width) / 2;
	    }

	    return g.point(x, y);
	}

	var prevItem = null;

	module.exports = joint.dia.Graph.extend({
	    addItems: function(nodes) {
	        _.each(nodes, function(node, type) {
	            var item = new node();

	            item.set('position', getItemPosition(item, prevItem))
	                .attr('text/text', type)
	                .prop('itemType', type);

	            this.addCell(item);

	            prevItem = item;
	        }, this);
	    }
	});


/***/ },
/* 7 */
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

	function getNewItemPosition(drag, itemSize, paper, zoom) {
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

	    if (zoom) {
	        topLeft = g.point(topLeft.x * zoom, topLeft.y * zoom);
	    }

	    return topLeft;
	}

	function createNewItem(type, paper, callback) {
	    bootbox.prompt('Text for ' + type, function (result) {
	        var text = result || '';
	        var newItem = new joint.shapes.history.nodes[type]();

	        newItem.attr('text/text', text);
	        callback(newItem);
	    });
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
	            var zoom = 1 / self.options.zoom.get('zoom');
	            var position = getNewItemPosition(drag, item.get('size'), paper, zoom);

	            createNewItem(item.prop('itemType'), paper, function (newItem) {

	                newItem.set('position', position);
	                paper.model.addCell(newItem);

	                $(this).data('proxy').remove();
	            }.bind(this));
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
/* 8 */
/***/ function(module, exports) {

	var dialogTemplate = _.template($('#template-link-dialog').html());
	function getLinkAttributes(callback) {
	    var linkTypes = {};

	    _.each(joint.shapes.history.links, function (type, key) {
	        linkTypes[key] = key.replace(/([A-Z])/g, ' $1');
	    });

	    var options = {
	        linkTypes: {
	            'UndirectedLink': 'Ordinary Relationship',
	            'UnidirectionalLink': 'Cause and Effect',
	            'BidirectionalLink': 'Parent-Child',
	        },
	        lineStyles: { 'solid': 'Solid Line', 'dotted': 'Dotted Line' },
	    };

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
	                    var newLink = new joint.shapes.history.links[result.linkType]({
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


/***/ },
/* 9 */
/***/ function(module, exports) {

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
	        var box = bootbox.prompt('Enter a file name for this diagram', function(result) {
	            var name = result || 'History Maker Diagram';
	            saveAs(this.getJSONBlob(), name + '.dia.json');
	        }.bind(this));
	    },
	});


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var FileLoader = __webpack_require__(11);
	var LoadFileInput = __webpack_require__(12);

	module.exports = Backbone.View.extend({
	    events: {
	        'click': 'doLoad',
	    },
	    doLoad: function() {
	        var element = $.parseHTML('<div>');

	        var fileLoader = new FileLoader({
	            fileType: 'JSON diagram',
	            validExtensions: ['.dia.json'],
	        });

	        var fileInput = new LoadFileInput({
	            el: element,
	            model: fileLoader
	        });

	        var self = this;

	        var box = bootbox.dialog({
	            title: 'Load Diagram',
	            message: element,
	            onEscape: true,
	            buttons: {
	                success: {
	                    label: 'Load',
	                    className: 'btn-success',
	                    callback: function() {
	                        fileLoader.loadFileContents(function(json) {
	                            fileInput.remove();

	                            try {
	                                self.model.fromJSON(JSON.parse(json));
	                            } catch (e) {
	                                bootbox.alert('Unable to load diagram - invalid file');
	                            }
	                        });
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
	    },
	});


/***/ },
/* 11 */
/***/ function(module, exports) {

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
	        } else {
	            bootbox.alert('Unable to load diagram - invalid file');
	        }
	    }
	});


/***/ },
/* 12 */
/***/ function(module, exports) {

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


/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = Backbone.View.extend({
	    events: {
	        'click': 'doClear',
	    },
	    doClear: function() {
	        bootbox.confirm('Are you sure you wish to clear the canvas?', function (result) {
	            if (result) {
	                this.model.clear();
	            }
	        }.bind(this));
	    },
	});


/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = Backbone.Model.extend({
	    defaults: {
	        zoom: 1,
	        paper: null,
	    },
	    initialize: function() {
	        this.on('change', function () {
	            var zoom = this.attributes.zoom;
	            this.attributes.paper.scale(zoom, zoom);
	        });
	    },
	});


/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = Backbone.View.extend({
	    events: {
	        'click': 'doZoom'
	    },
	    doZoom: function() {
	        var zoom = this.model.get('zoom');

	        if (this.$el.data('zoom') === '+') {
	            zoom += 0.2;
	        } else {
	            zoom -= 0.2;
	        }

	        this.model.set('zoom', zoom);
	    },
	});


/***/ },
/* 16 */
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