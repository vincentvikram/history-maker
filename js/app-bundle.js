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

	joint.shapes.history.nodes.Community = __webpack_require__(3);
	joint.shapes.history.nodes.Profession = __webpack_require__(4);

	joint.shapes.history.links.UndirectedLink = __webpack_require__(5);
	joint.shapes.history.links.UnidirectionalLink = __webpack_require__(6);
	joint.shapes.history.links.BidirectionalLink = __webpack_require__(7);

	var MenuGraph = __webpack_require__(8);
	var MenuPaper = __webpack_require__(9);
	var linkHandles = __webpack_require__(10);
	var SaveButton = __webpack_require__(11);
	var LoadButton = __webpack_require__(12);
	var ClearButton = __webpack_require__(15);
	var Zoom = __webpack_require__(16);
	var ZoomButton = __webpack_require__(17);
	__webpack_require__(18);

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

	module.exports = joint.shapes.history.GenericShape.extend({
	    markup: '<path class="outer" d="m 56.19582,0.2796 c -2.1654,0.04 -4.2716,0.4002 -6.4043,1.0801 -6.14835,1.96 -11.58754,6.6251 -14.43364,12.375 -1.8787,3.7953 -2.55365,6.6461 -2.56445,10.8496 -0.01,1.5363 0.10263,3.3686 0.24023,4.1367 0.3164,1.7657 1.17157,4.4555 1.98047,6.2305 2.0573,4.5143 6.46614,9.1103 10.83594,11.2968 1.97735,0.9893 1.83455,1.3858 -0.97461,2.7012 -4.5023,2.1084 -7.75175,4.5611 -11.68945,8.8223 -3.5415,3.8323 -5.88591,8.1424 -8.31641,15.2949 -2.2432,6.6012 -3.93806,15.5319 -3.94726,20.7969 0,0.9438 0.0418,1.0639 0.4121,1.1465 0.64401,0.1431 9.20846,0.9757 13.19336,1.2832 5.4402,0.42 10.41201,0.6787 16.00002,0.8281 12.7638,0.3411 24.4516,-0.014 36.5957,-1.1094 4.3308,-0.3906 6.8182,-0.6717 6.9316,-0.7852 0.098,-0.098 -0.2728,-5.4783 -0.5976,-8.6699 -0.4735,-4.653 -1.0587,-8.3406 -1.6797,-10.5742 -0.4228,-1.5207 -2.1989,-5.9428 -3.1387,-7.8164 -4.5548,-9.0811 -11.4839,-15.9821 -19.8476,-19.7656 -1.8114,-0.8194 -1.9504,-1.3455 -0.5411,-2.0567 2.381,-1.2018 5.3388,-3.5271 7.211,-5.6699 5.622,-6.4348 7.4516,-15.5262 4.7617,-23.6601 C 77.83432,9.7903 72.04352,3.9597 65.03362,1.719 61.86342,0.7056 58.97992,0.2278 56.19582,0.2796 Z m 21.6582,0.01 c -2.3815,0 -4.7925,0.3723 -7.3262,1.1192 -0.5815,0.1715 -1.054,0.3688 -1.0488,0.4375 0.01,0.069 0.8438,0.6628 1.8652,1.3203 3.6512,2.3499 6.7273,5.7671 8.7656,9.7363 1.241,2.4163 1.8811,4.2135 2.4512,6.8867 0.5619,2.6446 0.5608,7.1473 -0.01,9.8008 -1.4532,6.8177 -5.3965,12.7332 -10.9726,16.4649 -0.9103,0.6092 -1.6336,1.1396 -1.6094,1.1797 0.024,0.04 0.7683,0.4549 1.6543,0.9199 9.5533,5.0135 16.9211,13.973 21,25.5371 1.4702,4.1682 2.3573,10.0979 2.8808,19.2598 0.1184,2.0697 0.1384,2.1559 0.5118,2.0761 0.2139,-0.046 1.2582,-0.2127 2.3203,-0.3711 2.3823,-0.3553 9.8061,-1.5986 13.5156,-2.2636 l 2.7598,-0.4961 0.055,-1.2754 c 0.063,-1.4637 -0.3573,-5.4736 -0.8965,-8.5625 -2.6048,-14.9226 -11.4264,-27.4336 -23.3828,-33.1602 -1.2868,-0.6163 -2.3793,-1.2284 -2.4297,-1.3594 -0.164,-0.4272 0.1119,-0.7981 0.8847,-1.1894 5.6089,-2.8393 10.1959,-8.2924 12.1172,-14.4043 1.0396,-3.3069 1.3625,-8.0238 0.7774,-11.3789 C 100.06122,10.9583 92.83032,3.223 83.41072,0.9615 81.54662,0.5139 79.71342,0.29 77.86192,0.2896 l -0.01,0 z M 36.6821,0.3306 c -3.8181,-0.046 -7.60047,0.7736 -10.88867,2.4199 -5.8168,2.9122 -10.45947,8.2294 -12.41797,14.2226 -0.9093,2.7826 -1.17091,4.5458 -1.16211,7.8008 0.01,3.1191 0.21837,4.52 1.10547,7.3281 1.8856,5.969 6.43666,11.3619 11.94336,14.1524 1.9652,0.9958 1.82192,1.3891 -0.98438,2.7031 -4.8963,2.293 -8.96027,5.5102 -12.88867,10.2051 -4.9282,5.8899 -8.77216,14.4448 -10.44726,23.25 -0.3608,1.897 -0.49802,3.3174 -0.57032,5.9121 l -0.0957,3.416 2.32031,0.4063 c 1.9399,0.3391 10.75778,1.7657 14.73828,2.3847 0.6069,0.094 1.31768,0.181 1.58008,0.1934 l 0.47657,0.021 0.11718,-2.5274 c 0.4541,-9.7911 4.09073,-22.7666 8.39453,-29.9472 3.3875,-5.652 8.87885,-10.7876 14.90625,-13.9434 l 1.86329,-0.9766 -0.97852,-0.6035 c -4.2151,-2.5935 -7.93062,-6.7071 -9.97852,-11.0508 -1.6729,-3.548 -2.29134,-6.1195 -2.43164,-10.0957 -0.1608,-4.5549 0.53105,-7.9728 2.40625,-11.8867 1.1093,-2.3157 2.03729,-3.7644 3.70899,-5.7832 1.709,-2.0638 4.52616,-4.4256 6.56054,-5.5019 0.4775,-0.2527 0.86719,-0.5089 0.86719,-0.5703 0,-0.061 -0.60068,-0.2886 -1.33398,-0.5059 C 41.27575,0.6963 38.9729,0.3574 36.6821,0.3301 Z" /><path d="m 56.19582,0.2796 c -2.1654,0.04 -4.2716,0.4002 -6.4043,1.0801 -6.14835,1.96 -11.58754,6.6251 -14.43364,12.375 -1.8787,3.7953 -2.55365,6.6461 -2.56445,10.8496 -0.01,1.5363 0.10263,3.3686 0.24023,4.1367 0.3164,1.7657 1.17157,4.4555 1.98047,6.2305 2.0573,4.5143 6.46614,9.1103 10.83594,11.2968 1.97735,0.9893 1.83455,1.3858 -0.97461,2.7012 -4.5023,2.1084 -7.75175,4.5611 -11.68945,8.8223 -3.5415,3.8323 -5.88591,8.1424 -8.31641,15.2949 -2.2432,6.6012 -3.93806,15.5319 -3.94726,20.7969 0,0.9438 0.0418,1.0639 0.4121,1.1465 0.64401,0.1431 9.20846,0.9757 13.19336,1.2832 5.4402,0.42 10.41201,0.6787 16.00002,0.8281 12.7638,0.3411 24.4516,-0.014 36.5957,-1.1094 4.3308,-0.3906 6.8182,-0.6717 6.9316,-0.7852 0.098,-0.098 -0.2728,-5.4783 -0.5976,-8.6699 -0.4735,-4.653 -1.0587,-8.3406 -1.6797,-10.5742 -0.4228,-1.5207 -2.1989,-5.9428 -3.1387,-7.8164 -4.5548,-9.0811 -11.4839,-15.9821 -19.8476,-19.7656 -1.8114,-0.8194 -1.9504,-1.3455 -0.5411,-2.0567 2.381,-1.2018 5.3388,-3.5271 7.211,-5.6699 5.622,-6.4348 7.4516,-15.5262 4.7617,-23.6601 C 77.83432,9.7903 72.04352,3.9597 65.03362,1.719 61.86342,0.7056 58.97992,0.2278 56.19582,0.2796 Z m 21.6582,0.01 c -2.3815,0 -4.7925,0.3723 -7.3262,1.1192 -0.5815,0.1715 -1.054,0.3688 -1.0488,0.4375 0.01,0.069 0.8438,0.6628 1.8652,1.3203 3.6512,2.3499 6.7273,5.7671 8.7656,9.7363 1.241,2.4163 1.8811,4.2135 2.4512,6.8867 0.5619,2.6446 0.5608,7.1473 -0.01,9.8008 -1.4532,6.8177 -5.3965,12.7332 -10.9726,16.4649 -0.9103,0.6092 -1.6336,1.1396 -1.6094,1.1797 0.024,0.04 0.7683,0.4549 1.6543,0.9199 9.5533,5.0135 16.9211,13.973 21,25.5371 1.4702,4.1682 2.3573,10.0979 2.8808,19.2598 0.1184,2.0697 0.1384,2.1559 0.5118,2.0761 0.2139,-0.046 1.2582,-0.2127 2.3203,-0.3711 2.3823,-0.3553 9.8061,-1.5986 13.5156,-2.2636 l 2.7598,-0.4961 0.055,-1.2754 c 0.063,-1.4637 -0.3573,-5.4736 -0.8965,-8.5625 -2.6048,-14.9226 -11.4264,-27.4336 -23.3828,-33.1602 -1.2868,-0.6163 -2.3793,-1.2284 -2.4297,-1.3594 -0.164,-0.4272 0.1119,-0.7981 0.8847,-1.1894 5.6089,-2.8393 10.1959,-8.2924 12.1172,-14.4043 1.0396,-3.3069 1.3625,-8.0238 0.7774,-11.3789 C 100.06122,10.9583 92.83032,3.223 83.41072,0.9615 81.54662,0.5139 79.71342,0.29 77.86192,0.2896 l -0.01,0 z M 36.6821,0.3306 c -3.8181,-0.046 -7.60047,0.7736 -10.88867,2.4199 -5.8168,2.9122 -10.45947,8.2294 -12.41797,14.2226 -0.9093,2.7826 -1.17091,4.5458 -1.16211,7.8008 0.01,3.1191 0.21837,4.52 1.10547,7.3281 1.8856,5.969 6.43666,11.3619 11.94336,14.1524 1.9652,0.9958 1.82192,1.3891 -0.98438,2.7031 -4.8963,2.293 -8.96027,5.5102 -12.88867,10.2051 -4.9282,5.8899 -8.77216,14.4448 -10.44726,23.25 -0.3608,1.897 -0.49802,3.3174 -0.57032,5.9121 l -0.0957,3.416 2.32031,0.4063 c 1.9399,0.3391 10.75778,1.7657 14.73828,2.3847 0.6069,0.094 1.31768,0.181 1.58008,0.1934 l 0.47657,0.021 0.11718,-2.5274 c 0.4541,-9.7911 4.09073,-22.7666 8.39453,-29.9472 3.3875,-5.652 8.87885,-10.7876 14.90625,-13.9434 l 1.86329,-0.9766 -0.97852,-0.6035 c -4.2151,-2.5935 -7.93062,-6.7071 -9.97852,-11.0508 -1.6729,-3.548 -2.29134,-6.1195 -2.43164,-10.0957 -0.1608,-4.5549 0.53105,-7.9728 2.40625,-11.8867 1.1093,-2.3157 2.03729,-3.7644 3.70899,-5.7832 1.709,-2.0638 4.52616,-4.4256 6.56054,-5.5019 0.4775,-0.2527 0.86719,-0.5089 0.86719,-0.5703 0,-0.061 -0.60068,-0.2886 -1.33398,-0.5059 C 41.27575,0.6963 38.9729,0.3574 36.6821,0.3301 Z"/><text/><g class="linkHandle"><circle/><polyline/></g>',
	    defaults: joint.util.deepSupplement({
	        type: 'history.nodes.Community',
	        size: {
	            width: 114,
	            height: 97,
	        },
	        attrs: {
	            path: {
	                fill: '#1A1A1A',
	                stroke: '#1A1A1A',
	            },
	        },
	    }, joint.shapes.history.GenericShape.prototype.defaults)
	});


/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = joint.shapes.history.GenericShape.extend({
	    markup: '<path class="outer" d="m 48.98665,2.551604 c -0.0912,0 -0.16696,0.073 -0.16696,0.1645 l 0,13.583699 c 0,0.091 0.0758,0.1645 0.16696,0.1645 l 35.024413,0 c 0.0912,0 0.16447,-0.073 0.16447,-0.1645 l 0,-13.583699 c 0,-0.091 -0.0734,-0.1645 -0.16447,-0.1645 l -35.024413,0 z m 57.46693,10.4637 c -0.0913,0 -0.16455,0.073 -0.16455,0.1646 l 0,3.117399 c 0,0.091 0.0733,0.1669 0.16455,0.1669 l 4.25377,0 c 0.0913,0 0.16455,-0.076 0.16455,-0.1669 l 0,-3.117399 c 0,-0.091 -0.0733,-0.1646 -0.16455,-0.1646 l -4.25377,0 z m -84.163217,0.177 c -0.0912,0 -0.16447,0.073 -0.16447,0.1645 l 0,3.119999 c 0,0.091 0.0733,0.1645 0.16447,0.1645 l 4.25127,0 c 0.0911,0 0.16447,-0.073 0.16447,-0.1645 l 0,-3.119999 c 0,-0.091 -0.0734,-0.1645 -0.16447,-0.1645 l -4.25127,0 z m -5.6991,3.583399 c -7.7783604,0 -14.0396604,6.2613 -14.0396604,14.0397 l 0,50.9629 c 0,7.7784 6.2613,14.0397 14.0396604,14.0397 l 99.815177,0 c 7.77836,0 14.03968,-6.2613 14.03968,-14.0397 l 0,-50.9629 c 0,-7.7784 -6.26132,-14.0397 -14.03968,-14.0397 l -99.815177,0 z"/><text/><g class="linkHandle"><circle/><polyline/></g>',
	    defaults: joint.util.deepSupplement({
	        type: 'history.nodes.Community',
	        size: {
	            width: 133,
	            height: 98,
	        },
	        attrs: {
	            path: {
	                fill: '#FFFFFF',
	                stroke: '#1A1A1A',
	            },
	            text: {
	                fill: '#1A1A1A',
	            },
	        },
	    }, joint.shapes.history.GenericShape.prototype.defaults)
	});


/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = joint.shapes.history.GenericLink.extend({
	    defaults: joint.util.deepSupplement({
	        type: 'history.links.UndirectedLink',
	    }, joint.shapes.history.GenericLink.prototype.defaults),
	});


/***/ },
/* 6 */
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
/* 7 */
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
/* 8 */
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
/* 9 */
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
/* 10 */
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
/* 11 */
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
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var FileLoader = __webpack_require__(13);
	var LoadFileInput = __webpack_require__(14);

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
/* 13 */
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
/* 14 */
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
/* 15 */
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
/* 16 */
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
/* 17 */
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
/* 18 */
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