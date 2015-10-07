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

	joint.shapes.history.nodes.Activity = __webpack_require__(3);
	joint.shapes.history.nodes.Actor = __webpack_require__(4);
	joint.shapes.history.nodes.Artifact = __webpack_require__(5);
	joint.shapes.history.nodes.ClassIdentity = __webpack_require__(6);
	joint.shapes.history.nodes.CommunityIdentity = __webpack_require__(7);
	joint.shapes.history.nodes.Condition = __webpack_require__(8);
	joint.shapes.history.nodes.Destruction = __webpack_require__(9);
	joint.shapes.history.nodes.Document = __webpack_require__(10);
	joint.shapes.history.nodes.Event = __webpack_require__(11);
	joint.shapes.history.nodes.GroupIdentity = __webpack_require__(12);
	joint.shapes.history.nodes.Idea = __webpack_require__(13);
	joint.shapes.history.nodes.Identity = __webpack_require__(14);
	joint.shapes.history.nodes.Note = __webpack_require__(15);
	joint.shapes.history.nodes.PredefinedProcess = __webpack_require__(16);
	joint.shapes.history.nodes.Profession = __webpack_require__(17);
	joint.shapes.history.nodes.ReligionCaste = __webpack_require__(18);
	joint.shapes.history.nodes.Start = __webpack_require__(19);
	joint.shapes.history.nodes.Stop = __webpack_require__(20);
	joint.shapes.history.nodes.Trade = __webpack_require__(21);
	joint.shapes.history.nodes.UsecaseOrConcept = __webpack_require__(22);
	joint.shapes.history.nodes.War = __webpack_require__(23);

	joint.shapes.history.links.UndirectedLink = __webpack_require__(24);
	joint.shapes.history.links.UnidirectionalLink = __webpack_require__(25);
	joint.shapes.history.links.BidirectionalLink = __webpack_require__(26);

	var MenuGraph = __webpack_require__(27);
	var MenuPaper = __webpack_require__(28);
	var linkHandles = __webpack_require__(29);
	var SaveButton = __webpack_require__(30);
	var LoadButton = __webpack_require__(31);
	var ClearButton = __webpack_require__(34);
	var Zoom = __webpack_require__(35);
	var ZoomButton = __webpack_require__(36);
	__webpack_require__(37);

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
	    height: 2350,
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
	                fill: '#1A1A1A',
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
	    markup: '<g class="outer"><path d="m 19.69382,1.4006566 100.61227,0 c 10.10313,0 18.29323,8.190116 18.29323,18.2931454 l 0,9.146577 c 0,10.10304 -8.1901,18.293155 -18.29323,18.293155 l -100.61227,0 c -10.102992,0 -18.2931634,-8.190115 -18.2931634,-18.293155 l 0,-9.146577 C 1.4006566,9.5907726 9.590828,1.4006566 19.69382,1.4006566 Z" style="fill:#5fd35f;stroke:#000000;stroke-width:2.80131316;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"></path></g><text/><g class="linkHandle"><circle/><polyline/></g>',
	    defaults: joint.util.deepSupplement({
	        type: 'history.nodes.Activity',
	        size: {
	            width: 138,
	            height: 46,
	        },
	    }, joint.shapes.history.GenericShape.prototype.defaults)
	});


/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = joint.shapes.history.GenericShape.extend({
	    markup: '<g class="outer"><path style="fill:#5fd35f;fill-opacity:1;fill-rule:nonzero;stroke:#000000;stroke-width:4.9982233;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" d="m 47.898603,17.798843 c 0,8.449813 -6.849982,15.299729 -15.299729,15.299729 -8.449863,0 -15.299712,-6.849916 -15.299712,-15.299729 0,-8.4497966 6.849849,-15.2997286 15.299712,-15.2997286 8.449747,0 15.299729,6.849932 15.299729,15.2997286 z"></path><path style="fill:#5fd35f;stroke:#000000;stroke-width:4.9982233;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" d="m 47.898603,17.79886 c 0,8.449796 -6.849982,15.299729 -15.299845,15.299729 -8.449747,0 -15.299729,-6.849933 -15.299729,-15.299729 0,-8.4498136 6.849982,-15.299729 15.299729,-15.299729 8.449863,0 15.299845,6.8499154 15.299845,15.299729 z"></path><path style="fill:#5fd35f;stroke:#000000;stroke-width:4.9982233;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" d="m 32.598758,32.078601 0,50.999107 m 0,-40.799282 -30.5994411,0 m 30.5994411,0 30.599557,0 M 32.598758,83.077708 1.9993169,123.87699 M 32.598758,83.077708 63.198315,123.87699"></path></g><text/><g class="linkHandle"><circle/><polyline/></g>',
	    defaults: joint.util.deepSupplement({
	        type: 'history.nodes.Actor',
	        size: {
	            width: 64,
	            height: 124,
	        },
	        attrs: {
	            text: {
	                'ref-x': '0%',
	            }
	        },
	    }, joint.shapes.history.GenericShape.prototype.defaults)
	});


/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = joint.shapes.history.GenericShape.extend({
	    markup: '<g class="outer"><path style="fill:#5fd35f;stroke:#000000;stroke-width:1.26126289;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1" d="m 0.63062382,0.63063145 138.73873618,0 0,63.06313555 -138.73873618,0 0,-63.06313555 z"></path></g><text/><g class="linkHandle"><circle/><polyline/></g>',
	    defaults: joint.util.deepSupplement({
	        type: 'history.nodes.Artifact',
	        size: {
	            width: 138,
	            height: 64,
	        },
	    }, joint.shapes.history.GenericShape.prototype.defaults)
	});


/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = joint.shapes.history.GenericShape.extend({
	    markup: '<g class="outer"><path style="color:#000000;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#5fd35f;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1.57693899;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate" d="M 133.26201,67.28784 A 65.974196,65.974196 0 0 1 67.28779,133.26204 65.974196,65.974196 0 0 1 1.31357,67.28784 65.974196,65.974196 0 0 1 67.28779,1.31364 65.974196,65.974196 0 0 1 133.26201,67.28784 Z"></path><path d="m 67.28946,0.22346 c -37.01001,-6e-5 -67.066,30.056 -67.066,67.06601 0,37.01001 30.05599,67.06284 67.066,67.06274 37.01001,-1e-5 67.06283,-30.0528 67.06283,-67.06274 0,-37.00994 -30.05282,-67.06598 -67.06283,-67.06601 z m 0,4.88759 c 34.36945,3e-5 62.1784,27.809 62.1784,62.17842 0,14.44332 -4.92392,27.71515 -13.16915,38.2644 -0.0583,-0.38229 -0.0933,-0.77914 -0.15661,-1.13892 -2.11025,-12.08889 -9.25605,-22.22306 -18.94194,-26.8622 -1.04246,-0.49923 -1.93098,-0.99712 -1.97196,-1.10312 -0.13329,-0.34611 0.0933,-0.64624 0.71924,-0.9632 4.54388,-2.30017 8.26073,-6.71776 9.81734,-11.66903 0.8422,-2.67897 1.10211,-6.50081 0.62811,-9.21873 -1.35751,-7.78403 -7.2141,-14.05095 -14.84505,-15.88303 -1.51213,-0.36308 -3.00144,-0.54365 -4.50357,-0.54343 -1.93131,3.4e-4 -3.88695,0.3021 -5.94189,0.90789 -0.471,0.13886 -0.85319,0.29902 -0.8492,0.35469 0,0.0561 0.6821,0.53469 1.5098,1.06733 2.95778,1.90361 5.44906,4.67233 7.10031,7.88782 1.00531,1.95745 1.52329,3.41511 1.98496,5.5807 0.45534,2.14249 0.45434,5.79034 0,7.93988 -1.17725,5.52304 -4.36961,10.31524 -8.88684,13.33836 -0.7374,0.49346 -1.32453,0.92097 -1.30487,0.95344 0.02,0.0327 0.62311,0.36849 1.34069,0.74518 7.73925,4.06143 13.70796,11.32113 17.01229,20.68926 1.14676,3.2514 2.329,13.96374 2.79517,21.38562 -1.60026,1.06908 -3.24884,2.07065 -4.94941,2.99048 -0.0716,-4.81455 -0.22708,-12.0915 -0.41652,-13.95338 -0.38353,-3.76938 -0.86036,-6.75523 -1.36351,-8.56466 -0.34238,-1.23189 -1.78003,-4.81461 -2.54143,-6.33238 -3.68986,-7.35668 -9.30269,-12.94811 -16.07812,-16.01319 -1.46748,-0.66379 -1.58094,-1.08998 -0.43934,-1.66608 1.92898,-0.97353 4.32429,-2.85877 5.84092,-4.59472 4.55455,-5.21274 6.03835,-12.57704 3.8593,-19.16636 -1.93515,-5.85194 -6.62815,-10.57623 -12.3068,-12.39143 -2.56825,-0.82097 -4.90325,-1.20691 -7.15879,-1.16495 -1.75421,0.0327 -3.45927,0.32455 -5.18699,0.87534 -4.98072,1.58776 -9.38949,5.36447 -11.69517,10.02248 -1.52196,3.07457 -2.06743,5.38394 -2.0761,8.78919 0,1.24455 0.0833,2.73271 0.19527,3.35493 0.25624,1.43036 0.94899,3.60912 1.60426,5.04703 1.66657,3.65705 5.23614,7.37915 8.77621,9.1504 1.60193,0.80148 1.48814,1.12441 -0.78755,2.18997 -3.64737,1.70809 -6.27927,3.69375 -9.46913,7.1459 -2.86915,3.10449 -4.77014,6.5971 -6.73928,12.39143 -1.52529,4.48878 -2.68138,18.03285 -3.03592,24.93905 -1.75171,-0.9427 -3.45377,-1.96786 -5.09918,-3.06857 l 0,-0.13017 c 0.36787,-7.93183 3.86112,-24.67024 7.34772,-30.48721 2.74419,-4.57875 7.19277,-8.74154 12.07571,-11.29807 l 1.50996,-0.78748 -0.79405,-0.49136 c -3.41462,-2.10098 -6.42422,-5.43304 -8.08296,-8.9519 -1.35535,-2.87427 -1.85518,-4.95628 -1.9688,-8.17743 -0.12996,-3.68996 0.43001,-6.46135 1.94914,-9.63199 0.89868,-1.87598 1.64941,-3.04709 3.0036,-4.68258 1.3845,-1.67185 3.66569,-3.58619 5.31378,-4.45805 0.38686,-0.2048 0.70291,-0.41235 0.70291,-0.46208 0,-0.0494 -0.48633,-0.23396 -1.08028,-0.41001 -1.79603,-0.53236 -3.65987,-0.80449 -5.51571,-0.82653 -3.09306,-0.0372 -6.16131,0.62526 -8.82503,1.95894 -4.71216,2.35917 -8.47165,6.66414 -10.05826,11.51934 -0.73673,2.25416 -0.94749,3.68579 -0.94033,6.32263 0,2.52683 0.17627,3.66047 0.89485,5.93539 1.52762,4.8355 5.21331,9.20348 9.67423,11.46402 1.5921,0.8067 1.47614,1.12553 -0.79722,2.18998 -3.96659,1.85761 -7.25659,4.46519 -10.43895,8.26854 -3.99242,4.77145 -7.10681,11.70134 -8.46383,18.83445 -0.0466,0.24278 -0.0633,0.46104 -0.1,0.68986 C 9.97512,94.86843 5.10152,81.65789 5.10152,67.28946 5.10152,32.91998 32.9138,5.11098 67.28325,5.11104 Z" style="color:#000000;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#1a1a1a;fill-opacity:1;fill-rule:nonzero;stroke:#1a1a1a;stroke-width:0.44692999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"></path></g><text/><g class="linkHandle"><circle/><polyline/></g>',
	    defaults: joint.util.deepSupplement({
	        type: 'history.nodes.ClassIdentity',
	        size: {
	            width: 131,
	            height: 131,
	        },
	        attrs: {
	            text: {
	                fill: '#FFFFFF',
	                'ref-y': '80%',
	            },
	        },
	    }, joint.shapes.history.GenericShape.prototype.defaults)
	});


/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = joint.shapes.history.GenericShape.extend({
	    markup: '<g class="outer"><path d="m 68.541629,0.3184101 c -2.465678,0.04604 -4.862686,0.456896 -7.29115,1.231056 -7.000971,2.231764 -13.195624,7.542724 -16.436416,14.0899799 -2.139239,4.321636 -2.906737,7.567551 -2.919075,12.353884 -0.0084,1.749355 0.117016,3.836733 0.273756,4.711335 0.36022,2.010573 1.333759,5.074168 2.254715,7.095287 2.342602,5.140292 7.362096,10.373946 12.337963,12.863612 2.251602,1.126496 2.089103,1.577968 -1.109671,3.075748 -5.126615,2.400909 -8.8275,5.193292 -13.31125,10.045499 -4.03258,4.363721 -6.700598,9.271054 -9.468189,17.415462 -2.554251,7.516576 -4.485341,17.685497 -4.49582,23.680577 0,1.07477 0.04737,1.21167 0.469501,1.30562 0.73328,0.16305 10.486994,1.11211 15.024514,1.46229 6.194603,0.47819 11.85522,0.77126 18.218198,0.94143 14.533718,0.38841 27.841704,-0.0151 41.669945,-1.26201 4.93144,-0.44476 7.7633,-0.76634 7.8924,-0.89558 0.11216,-0.11166 -0.30918,-6.23699 -0.67906,-9.871248 -0.53914,-5.298187 -1.20643,-9.496848 -1.91362,-12.040168 -0.48139,-1.73156 -2.50264,-6.766723 -3.57281,-8.90007 C 100.29917,67.280616 92.406951,59.421147 82.883586,55.112953 80.82095,54.179944 80.663959,53.58211 82.268594,52.772276 c 2.711259,-1.36841 6.079043,-4.016408 8.210867,-6.456389 6.401715,-7.327041 8.485176,-17.67904 5.422284,-26.940937 C 93.18168,11.149569 86.587233,4.5095881 78.605241,1.9582161 74.995473,0.8042831 71.711826,0.2594501 68.541629,0.3184101 Z m 29.224897,0.01172 c -2.714574,4.52e-4 -5.461122,0.424286 -8.349428,1.275753 -0.662183,0.195227 -1.201325,0.418728 -1.195499,0.496939 0.0084,0.07851 0.961133,0.754959 2.124274,1.503657 4.157479,2.675752 7.660141,6.5665739 9.981117,11.0862489 1.41304,2.751403 2.14165,4.79919 2.79072,7.843031 0.63986,3.011481 0.63838,8.138214 -0.008,11.159656 -1.65468,7.763162 -6.143173,14.499334 -12.49244,18.748517 -1.0366,0.693622 -1.862086,1.297482 -1.834531,1.34315 0.02745,0.04604 0.876076,0.516173 1.884852,1.045656 10.878169,5.708729 19.267509,15.911102 23.912059,29.078904 1.67403,4.746172 2.68351,11.49967 3.27975,21.932058 l 0,0 c 0.13476,2.35673 0.15887,2.45329 0.58402,2.36247 0.24359,-0.0524 1.43134,-0.24228 2.64079,-0.42263 2.71258,-0.40458 11.16688,-1.82052 15.39081,-2.57765 l 3.14117,-0.56343 0.0626,-1.45322 c 0.0717,-1.66673 -0.40516,-6.232638 -1.01912,-9.749881 -2.96601,-16.992046 -13.01158,-31.237378 -26.62606,-37.7581 -1.46517,-0.701758 -2.71043,-1.397958 -2.76791,-1.547082 -0.18666,-0.486442 0.12789,-0.909204 1.00775,-1.354784 6.38675,-3.233058 11.61138,-9.443698 13.79922,-16.40317 1.18368,-3.765536 1.55023,-9.13482 0.88401,-12.955182 C 123.04869,12.479831 114.81544,3.6713811 104.0896,1.0962881 101.96405,0.5858571 99.872839,0.3298791 97.761489,0.3301301 Z m -55.997844,0.04788 c -4.347466,-0.0524 -8.65566,0.879591 -12.399852,2.754282 -6.623358,3.315989 -11.909074,9.3703409 -14.139164,16.1946339 -1.035377,3.168473 -1.33498,5.177824 -1.325003,8.884217 0.01004,3.551644 0.250872,5.147189 1.260921,8.344757 2.147107,6.796722 7.32838,12.936065 13.59875,16.113494 2.237639,1.133844 2.075475,1.581868 -1.120051,3.078041 C 22.069025,58.358399 17.44109,62.022589 12.96802,67.368537 7.3563189,74.075279 2.9795568,83.814863 1.0721383,93.841194 0.66127851,96.001209 0.50510727,97.620223 0.42274448,100.57479 l -0.10864523,3.89 2.64064825,0.46138 c 2.2090136,0.3861 12.2499085,2.01044 16.7823225,2.71526 0.691078,0.10714 1.500259,0.20695 1.798958,0.22101 l 0.544013,0.0249 0.132918,-2.87885 c 0.517028,-11.148854 4.659089,-25.92417 9.559826,-34.100502 3.857258,-6.435799 10.109012,-12.28411 16.97231,-15.877638 l 2.121897,-1.11076 -1.115313,-0.687126 C 44.952105,50.279346 40.72244,45.595581 38.390653,40.649494 36.485779,36.609432 35.780254,33.680949 35.620517,29.153339 35.43731,23.96676 36.225582,20.074214 38.360855,15.617583 c 1.263147,-2.636814 2.319751,-4.28474 4.223286,-6.5835159 1.945971,-2.349951 5.1534,-5.039514 7.469887,-6.265063 0.543745,-0.287767 0.988253,-0.580574 0.988253,-0.650465 0,-0.06947 -0.683545,-0.328564 -1.518439,-0.576054 -2.52452,-0.748313 -5.146486,-1.13366 -7.755043,-1.164663 z" style="color:#000000;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#5fd35f;fill-opacity:1;fill-rule:nonzero;stroke:#1a1a1a;stroke-width:0.62819999;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"></path></g><text/><g class="linkHandle"><circle/><polyline/></g>',
	    defaults: joint.util.deepSupplement({
	        type: 'history.nodes.CommunityIdentity',
	        size: {
	            width: 138,
	            height: 110,
	        },
	        attrs: {
	            text: {
	                'ref-y': '70%',
	            },
	        }
	    }, joint.shapes.history.GenericShape.prototype.defaults)
	});


/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = joint.shapes.history.GenericShape.extend({
	    markup: '<g class="outer"><path d="M 69.999992,2.2433039 135.51339,34.999991 69.999992,67.756679 4.4866013,34.999991 69.999992,2.2433039 Z" style="fill:#5fd35f;stroke:#1a1a1a;stroke-width:4.01294422;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"></path></g><text/><g class="linkHandle"><circle/><polyline/></g>',
	    defaults: joint.util.deepSupplement({
	        type: 'history.nodes.Condition',
	        size: {
	            width: 138,
	            height: 67,
	        },
	    }, joint.shapes.history.GenericShape.prototype.defaults)
	});


/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = joint.shapes.history.GenericShape.extend({
	    markup: '<g class="outer"><path d="M 95.413128,4.5868684 4.5868648,95.412849 m 0,-90.8259806 90.8262632,90.8259806" style="fill:#ffffff;stroke:#000000;stroke-width:9.08200645;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"></path></g><text/><g class="linkHandle"><circle/><polyline/></g>',
	    defaults: joint.util.deepSupplement({
	        type: 'history.nodes.Destruction',
	        size: {
	            width: 99,
	            height: 99,
	        },
	        attrs: {
	            text: {
	                'ref-y': '90%',
	            },
	        }
	    }, joint.shapes.history.GenericShape.prototype.defaults)
	});


/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = joint.shapes.history.GenericShape.extend({
	    markup: '<g class="outer"><path d="m 2.194639,9.0433297 c 0,-3.7798834 2.8678326,-6.8486869 6.3991998,-6.8486869 l 112.8127112,0 c 3.53117,0 6.39881,3.0688035 6.39881,6.8486869 l 0,68.4055553 c -20.23994,-8.088387 -42.565328,-8.088387 -62.805265,0 -20.239937,8.06794 -42.565518,8.06794 -62.805456,0 l 0,-68.4055553 z" style="fill:#5fd35f;stroke:#000000;stroke-width:4.38928556;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"></path><path d="m 20.990981,24.594553 88.018039,0 0,0.490081 -88.018039,0 z" style="color:#000000;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#5fd35f;fill-opacity:1;fill-rule:nonzero;stroke:#1a1a1a;stroke-width:2.15088391;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"></path><path d="m 20.990981,37.872734 88.018039,0 0,0.490081 -88.018039,0 z" style="color:#000000;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#5fd35f;fill-opacity:1;fill-rule:nonzero;stroke:#1a1a1a;stroke-width:2.15088391;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"></path></g><text/><g class="linkHandle"><circle/><polyline/></g>',
	    defaults: joint.util.deepSupplement({
	        type: 'history.nodes.Document',
	        size: {
	            width: 128,
	            height: 85,
	        },
	        attrs: {
	            text: {
	                'ref-y': '70%',
	            }
	        },
	    }, joint.shapes.history.GenericShape.prototype.defaults)
	});


/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = joint.shapes.history.GenericShape.extend({
	    markup: '<g class="outer"><path d="m 28.233278,7.0482296 c 3.681688,-3.524138 8.924759,-5.558347 14.440163,-5.615664 l 44.638753,0 c 5.529723,0.0573 10.772864,2.091526 14.454626,5.615664 l 26.25882,25.8004874 c 0.73069,1.432563 0.73069,3.065716 0,4.498279 l -26.25882,25.800466 c -3.681762,3.524188 -8.924903,5.558396 -14.454626,5.615679 l -44.638753,0 C 37.158037,68.705556 31.914966,66.67165 28.233278,63.147462 L 1.9742488,37.346996 c -0.730551,-1.432563 -0.730551,-3.065716 0,-4.498279 L 28.233278,7.0482296 Z" style="fill:#5fd35f;stroke:#000000;stroke-width:2.86513114;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"></path></g><text/><g class="linkHandle"><circle/><polyline/></g>',
	    defaults: joint.util.deepSupplement({
	        type: 'history.nodes.Event',
	        size: {
	            width: 128,
	            height: 67,
	        },
	    }, joint.shapes.history.GenericShape.prototype.defaults)
	});


/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = joint.shapes.history.GenericShape.extend({
	    markup: '<g class="outer"><path style="color:#000000;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#5fd35f;fill-opacity:1;fill-rule:nonzero;stroke:#1a1a1a;stroke-width:2.14313102;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate" d="m 68.399581,1.0762764 c -2.698007,0.050354 -5.320812,0.4999448 -7.97814,1.3470244 -7.660514,2.4419928 -14.438733,8.2532612 -17.984732,15.4172712 -2.340801,4.728735 -3.180437,8.280418 -3.19396,13.517629 -0.01869,1.914133 0.128194,4.198138 0.299485,5.155138 0.394147,2.199975 1.459277,5.552155 2.467126,7.763674 2.563326,5.624508 8.05565,11.351164 13.500258,14.075359 2.463717,1.232618 2.285829,1.726615 -1.214213,3.365483 -5.609523,2.627083 -9.659172,5.682515 -14.565278,10.991805 -4.412461,4.774779 -7.331673,10.144372 -10.360169,19.055996 -2.794867,8.224643 -4.907756,19.351484 -4.9193,25.911284 0,1.17602 0.05167,1.32584 0.513875,1.42862 0.802256,0.17859 11.474884,1.21687 16.43981,1.60003 6.778109,0.52326 12.97198,0.84393 19.934464,1.03012 15.902737,0.42502 30.464277,-0.0165 45.595213,-1.38088 5.3959,-0.48665 8.49465,-0.83855 8.63582,-0.97995 0.1228,-0.12218 -0.3383,-6.82451 -0.74311,-10.80113 -0.58984,-5.79726 -1.31998,-10.391445 -2.09387,-13.174339 -0.52662,-1.894684 -2.73846,-7.404159 -3.90925,-9.738473 -5.67505,-11.314576 -14.310646,-19.914411 -24.731174,-24.628447 -2.256914,-1.020888 -2.428756,-1.67504 -0.672852,-2.56116 2.966488,-1.497317 6.651674,-4.39476 8.98434,-7.064588 7.004702,-8.017247 9.284486,-19.344422 5.932975,-29.47879 C 95.360737,12.927749 88.144943,5.662272 79.411054,2.8705608 75.461234,1.6079179 71.868289,1.0117724 68.399581,1.0762764 Z m 24.650919,0.01187 c -2.970336,4.95e-4 -5.975634,0.4642681 -9.135952,1.395927 -0.724636,0.2136306 -1.314591,0.4581773 -1.308214,0.5437571 0,0.085976 1.051826,0.8260804 2.324419,1.6453003 4.549121,2.9278099 8.381741,7.1851522 10.92143,12.1305852 1.546131,3.010586 2.343329,5.251283 3.053453,8.581848 0.700118,3.295153 0.698689,8.904829 0,12.21091 -1.810435,8.494444 -6.721709,15.865158 -13.669131,20.514613 -1.134174,0.758982 -2.037577,1.419719 -2.007343,1.469677 0.02969,0.05035 0.958485,0.564811 2.062315,1.144179 11.903002,6.246479 21.082493,17.409916 26.164723,31.818139 1.83166,5.193278 2.93626,12.582948 3.58866,23.998088 l 0,0 c 0.14842,2.57871 0.17404,2.68437 0.63899,2.58501 0.2665,-0.0574 1.56614,-0.26512 2.88953,-0.46244 2.96813,-0.44271 12.21876,-1.99201 16.84066,-2.82048 l 3.43704,-0.61651 0.0682,-1.5901 c 0.0792,-1.82374 -0.44329,-6.81976 -1.11515,-10.66832 -3.24531,-18.59272 -14.2371,-34.179964 -29.13408,-41.314938 -1.6033,-0.767866 -2.96583,-1.529651 -3.02882,-1.692818 -0.20417,-0.532268 0.13918,-0.994854 1.10273,-1.482419 6.98843,-3.53761 12.70525,-10.333289 15.09916,-17.948341 1.29524,-4.120265 1.6962,-9.995345 0.96739,-14.175573 C 120.72266,14.382363 111.7138,4.7441581 99.977692,1.9264783 97.651953,1.3679668 95.363705,1.0878754 93.053358,1.0881504 Z m -46.619114,0.052443 c -4.756913,-0.057391 -9.471058,0.962454 -13.567872,3.0137306 -7.247238,3.6283681 -13.03102,10.253041 -15.4711,17.720175 -1.132855,3.466938 -1.460706,5.665583 -1.449822,9.721124 0.01869,3.886207 0.274419,5.632061 1.379678,9.130839 2.349377,7.436978 8.018599,14.15464 14.879825,17.631375 2.448436,1.240665 2.270987,1.730891 -1.225647,3.368 -6.100419,2.856934 -11.164294,6.866299 -16.058636,12.715828 -6.1403288,7.338534 -10.9294554,17.995583 -13.0165075,28.966389 -0.4496678,2.36349 -0.6206295,4.13503 -0.710673,7.36792 l -0.1190685,4.25642 2.8895277,0.50485 c 2.4169917,0.42249 13.4037273,2.19982 18.3631563,2.97106 0.756079,0.11722 1.641562,0.22642 1.968423,0.2418 l 0.595233,0.0273 0.144685,-3.15004 C 25.598246,103.42825 30.130545,87.261084 35.492916,78.314554 39.713636,71.272493 46.554303,64.873259 54.063974,60.941227 L 56.385865,59.725816 55.165386,58.97398 C 49.913838,55.742628 45.285778,50.617647 42.734216,45.205648 40.650022,40.784996 39.877891,37.580657 39.703191,32.62655 c -0.200536,-5.67517 0.661968,-9.934393 2.998372,-14.810836 1.382206,-2.885196 2.538369,-4.688363 4.621243,-7.203688 2.12927,-2.5713084 5.638878,-5.5142355 8.173399,-6.8552349 0.595122,-0.3148774 1.081511,-0.6352739 1.081511,-0.7117504 0,-0.075971 -0.747943,-0.3595144 -1.661572,-0.6303045 C 52.153821,1.5959341 49.284853,1.1742908 46.430617,1.1403513 Z"></path></g><text/><g class="linkHandle"><circle/><polyline/></g>',
	    defaults: joint.util.deepSupplement({
	        type: 'history.nodes.GroupIdentity',
	        size: {
	            width: 138,
	            height: 120,
	        },
	        attrs: {
	            text: {
	                'ref-y': '90%',
	            }
	        },
	    }, joint.shapes.history.GenericShape.prototype.defaults)
	});


/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = joint.shapes.history.GenericShape.extend({
	    markup: '<g class="outer"><path d="m 56.910581,14.667339 c -0.664218,-0.06624 -1.331138,-0.09976 -1.998493,-0.100631 l -0.04358,0 C 43.343403,7.3817827 27.864715,15.742159 24.498915,25.869227 16.085635,28.591395 10.381781,36.42119 10.370277,45.263985 c 0.0087,7.285574 3.897714,14.014786 10.207478,17.657115 l 0,0.02118 c 3.394562,16.136126 17.297552,25.206119 30.612064,17.652601 8.322463,4.429048 18.1665,2.850506 24.369759,-2.952767 5.516816,1.744415 11.911644,0.810789 16.455623,-1.767407 5.855156,2.928398 11.445359,3.574592 17.186079,1.513835 13.47244,4.646073 27.05897,-9.203482 27.36183,-19.16572 -0.0148,-3.583203 -0.96055,-7.100986 -2.75971,-10.199757 1.80152,-3.102719 2.75335,-6.62547 2.75971,-10.213266 C 133.47308,24.586679 123.89042,15.689595 112.51801,17.731021 106.17574,10.795275 98.570832,7.4192507 90.351736,9.6290447 79.987115,-0.78223029 63.019537,2.4794527 56.910145,14.667409 Z" style="color:#000000;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#5fd35f;fill-opacity:1;fill-rule:nonzero;stroke:#000000;stroke-width:6.87377548;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"></path><path style="color:#000000;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#5fd35f;fill-opacity:1;fill-rule:nonzero;stroke:#000000;stroke-width:3.7320106;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate" d="m 4.6273767,105.66957 c -0.03922,-0.004 -0.079312,-0.006 -0.1186196,-0.006 l 0,0 c -0.6844381,-0.42672 -1.6037622,0.0697 -1.8036115,0.67125 -0.4996667,0.16166 -0.8384431,0.62666 -0.8391403,1.15183 0,0.43269 0.231487,0.83233 0.6062588,1.04864 l 0,0.002 c 0.2015924,0.95834 1.0273107,1.49699 1.8179922,1.04839 0.4942631,0.26304 1.0789072,0.16928 1.4473167,-0.17536 0.3276203,0.10368 0.7074473,0.0482 0.977283,-0.10484 0.3477535,0.17392 0.6797316,0.21229 1.0206869,0.0899 0.8000943,0.2759 1.6069869,-0.54659 1.6249411,-1.13828 0,-0.21277 -0.056652,-0.42167 -0.1638538,-0.60572 0.1070279,-0.18429 0.1635052,-0.39349 0.1638538,-0.60657 -0.1834639,-0.78528 -0.7525942,-1.3137 -1.427968,-1.19245 -0.3766893,-0.41191 -0.828333,-0.61241 -1.316408,-0.48117 -0.6155846,-0.61833 -1.6232851,-0.42461 -1.9861166,0.29924 z"></path><path d="m 17.273575,90.217919 c -0.06885,-0.007 -0.138056,-0.0116 -0.207258,-0.0116 l 0,0 c -1.195784,-0.74538 -2.801638,0.12198 -3.150785,1.1726 -0.87287,0.28242 -1.464661,1.09474 -1.465794,2.01216 0,0.75587 0.404318,1.45401 1.058948,1.83187 l 0,0.003 c 0.352199,1.6741 1.794547,2.61508 3.175974,1.8314 0.86337,0.45951 1.884667,0.29574 2.528228,-0.30633 0.572268,0.18099 1.235789,0.0841 1.707217,-0.18336 0.607479,0.30383 1.187417,0.37087 1.783043,0.15708 1.397637,0.48199 2.807215,-0.95483 2.838679,-1.9884 0,-0.37174 -0.100143,-0.73669 -0.286309,-1.0582 0.186863,-0.3219 0.285611,-0.68736 0.286309,-1.0596 -0.320561,-1.37184 -1.314665,-2.2949 -2.494674,-2.08311 -0.657942,-0.71957 -1.446881,-1.0698 -2.299705,-0.84055 -1.075246,-1.08014 -2.835541,-0.74176 -3.469341,0.52274 z" style="color:#000000;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#5fd35f;fill-opacity:1;fill-rule:nonzero;stroke:#000000;stroke-width:4.79414463;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"></path></g><text/><g class="linkHandle"><circle/><polyline/></g>',
	    defaults: joint.util.deepSupplement({
	        type: 'history.nodes.Idea',
	        size: {
	            width: 138,
	            height: 110,
	        },
	        attrs: {
	            text: {
	                'ref-x': '55%',
	                'ref-y': '40%',
	            }
	        },
	    }, joint.shapes.history.GenericShape.prototype.defaults)
	});


/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = joint.shapes.history.GenericShape.extend({
	    markup: '<g class="outer"><path style="color:#000000;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#5fd35f;fill-opacity:1;fill-rule:nonzero;stroke:#000000;stroke-width:1.94967234;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate" d="M 47.7067,0.97484 C 30.16587,0.97531 15.94632,15.19488 15.94591,32.73573 15.96261,45.03216 23.07399,56.21461 34.20372,61.44257 26.70028,64.44123 20.25851,69.36233 14.54967,76.46116 6.18111,86.8674 0.38599,103.83295 1.02371,116.06265 l 0.20574,3.93866 3.61112,1.78466 c 4.27501,2.11301 14.6831,4.27022 24.28968,5.03414 4.52698,0.35997 9.20113,0.57302 13.87191,0.65135 20.43245,0.34261 40.79986,-1.89336 48.49474,-5.68925 3.38419,-1.66941 3.62383,-1.94597 3.8258,-4.40711 0.35665,-4.34426 -1.09692,-14.37772 -2.92192,-20.16435 C 86.95209,79.93442 75.9456,67.15348 61.5804,61.28009 72.51339,55.97148 79.45842,44.88937 79.46883,32.73573 79.46841,15.19437 65.24807,0.97458 47.70672,0.97484 Z"></path></g><text/><g class="linkHandle"><circle/><polyline/></g>',
	    defaults: joint.util.deepSupplement({
	        type: 'history.nodes.Identity',
	        size: {
	            width: 96,
	            height: 128,
	        },
	        attrs: {
	            text: {
	                'ref-y': '80%',
	            }
	        },
	    }, joint.shapes.history.GenericShape.prototype.defaults)
	});


/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = joint.shapes.history.GenericShape.extend({
	    markup: '<g class="outer"><path d="m 102.87123,6.36e-4 c -0.0469,0.0013 -0.0915,0.0038 -0.13621,0.01277 l -99.1972683,0 C 1.599882,0.013406 -7.6293945e-6,1.612951 -7.6293945e-6,3.550974 l 0,80.316442 c 0,1.938023 1.5998896293945,3.537568 3.5377593293945,3.537568 l 122.8835583,0 c 1.93787,0 3.53755,-1.599532 3.53755,-3.537568 l 0,-56.443073 c 0.10858,-0.420108 0,-0.866264 -0.29925,-1.184725 -0.0213,-0.01495 -0.0298,-0.03091 -0.0425,-0.04573 -0.0213,-0.01022 -0.0213,-0.02236 -0.0341,-0.03321 l -0.0213,-0.01277 -25.68993,-25.681627 c -0.0234,-0.02746 -0.0447,-0.05378 -0.0703,-0.07895 l -0.0255,-0.01277 c -0.0255,-0.02593 -0.0469,-0.0511 -0.0745,-0.07499 l -0.0256,-0.01277 c -0.0341,-0.02529 -0.0681,-0.04867 -0.10424,-0.07064 C 103.36519,0.078245 103.1249,0.003245 102.87736,0 Z" style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;baseline-shift:baseline;text-anchor:start;white-space:normal;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#5fd35f;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1.20000005;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"></path><path style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;baseline-shift:baseline;text-anchor:start;white-space:normal;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#1a1a1a;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1.20000005;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate" d="m 102.87123,6.36e-4 c -0.0469,0.0013 -0.0915,0.0038 -0.13621,0.01277 l -99.1972683,0 C 1.599882,0.013406 -7.6293945e-6,1.612951 -7.6293945e-6,3.550974 l 0,80.316442 c 0,1.938023 1.5998896293945,3.537568 3.5377593293945,3.537568 l 122.8835583,0 c 1.93787,0 3.53755,-1.599532 3.53755,-3.537568 l 0,-56.443073 c 0.10858,-0.420108 0,-0.866264 -0.29925,-1.184725 -0.0213,-0.01495 -0.0298,-0.03091 -0.0425,-0.04573 -0.0213,-0.01022 -0.0213,-0.02236 -0.0341,-0.03321 l -0.0213,-0.01277 -25.68993,-25.681627 c -0.0234,-0.02746 -0.0447,-0.05378 -0.0703,-0.07895 l -0.0255,-0.01277 c -0.0255,-0.02593 -0.0469,-0.0511 -0.0745,-0.07499 l -0.0256,-0.01277 c -0.0341,-0.02529 -0.0681,-0.04867 -0.10424,-0.07064 C 103.36519,0.078245 103.1249,0.003245 102.87736,0 Z m -99.3385882,2.564813 98.0956282,0 0,14.141967 c -0.003,0.177925 -0.003,0.354076 0,0.527914 l 0,9.827034 c 6.4e-4,0.704601 0.5719,1.275655 1.27638,1.276191 l 24.49676,0 0,55.528533 c 0,0.569151 -0.41608,0.985236 -0.98521,0.985197 l -122.8835582,0 c -0.5691253,0 -0.9852098,-0.416033 -0.9852098,-0.985197 l 0,-80.316442 c 0,-0.569164 0.4160845,-0.985197 0.9852098,-0.985197 z M 104.18082,24.800988 c 0.34479,0.363797 0.73194,0.685924 1.14718,0.985197 l 0,0 z"></path></g><text/><g class="linkHandle"><circle/><polyline/></g>',
	    defaults: joint.util.deepSupplement({
	        type: 'history.nodes.Note',
	        size: {
	            width: 128,
	            height: 85,
	        },
	    }, joint.shapes.history.GenericShape.prototype.defaults)
	});


/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = joint.shapes.history.GenericShape.extend({
	    markup: '<g class="outer"><path d="m 6.562579,1.7499992 126.874971,0 c 2.65784,0 4.81244,2.154673 4.81244,4.812502 l 0,62.1250268 c 0,2.657986 -2.1546,4.812444 -4.81244,4.812444 l -126.874971,0 c -2.6578427,0 -4.8125875,-2.154458 -4.8125875,-4.812444 l 0,-62.1250268 c 0,-2.657829 2.1547448,-4.812502 4.8125875,-4.812502 z" style="fill:#5fd35f;fill-opacity:1;fill-rule:nonzero;stroke:none"></path><path d="m 6.562579,1.7499992 126.874971,0 c 2.65784,0 4.81244,2.154673 4.81244,4.812502 l 0,62.1250268 c 0,2.657986 -2.1546,4.812444 -4.81244,4.812444 l -126.874971,0 c -2.6578427,0 -4.8125875,-2.154458 -4.8125875,-4.812444 l 0,-62.1250268 c 0,-2.657829 2.1547448,-4.812502 4.8125875,-4.812502 z" style="fill:#5fd35f;stroke:#000000;stroke-width:3.49999833;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"></path><path d="m 21.245029,1.7499992 0,71.7499728" style="fill:#5fd35f;stroke:#000000;stroke-width:3.49999833;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"></path><path d="m 118.7551,1.7499992 0,71.7499728" style="fill:#5fd35f;stroke:#000000;stroke-width:3.49999833;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"></path></g><text/><g class="linkHandle"><circle/><polyline/></g>',
	    defaults: joint.util.deepSupplement({
	        type: 'history.nodes.PredefinedProcess',
	        size: {
	            width: 138,
	            height: 74,
	        },
	    }, joint.shapes.history.GenericShape.prototype.defaults)
	});


/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = joint.shapes.history.GenericShape.extend({
	    markup: '<g class="outer"><path d="m 51.565804,2.6859334 c -0.09607,0 -0.175752,0.07708 -0.175752,0.173223 l 0,14.2988086 c 0,0.09606 0.07971,0.173206 0.175752,0.173206 l 36.868443,0 c 0.09591,0 0.173118,-0.07708 0.173118,-0.173206 l 0,-14.2988086 c 0,-0.09606 -0.07726,-0.173223 -0.173118,-0.173223 l -36.868443,0 z M 112.05836,13.700586 c -0.0961,0 -0.17322,0.07708 -0.17322,0.173214 l 0,3.281567 c 0,0.09607 0.0771,0.175664 0.17322,0.175664 l 4.47774,0 c 0.0961,0 0.1732,-0.07962 0.1732,-0.175664 l 0,-3.281567 c 0,-0.09607 -0.0771,-0.173214 -0.1732,-0.173214 l -4.47774,0 z m -88.594417,0.186321 c -0.09591,0 -0.173118,0.07708 -0.173118,0.173206 l 0,3.284183 c 0,0.09606 0.07708,0.173205 0.173118,0.173205 l 4.4751,0 c 0.09592,0 0.173136,-0.07708 0.173136,-0.173205 l 0,-3.284183 c 0,-0.09607 -0.07726,-0.173206 -0.173136,-0.173206 l -4.4751,0 z m -5.999155,3.772066 c -8.1878866,0 -14.7788432,6.590991 -14.7788432,14.778861 l 0,53.646148 c 0,8.18789 6.5909566,14.778848 14.7788432,14.778848 l 105.070452,0 c 8.18789,0 14.77883,-6.590958 14.77883,-14.778848 l 0,-53.646148 c 0,-8.18787 -6.59094,-14.778861 -14.77883,-14.778861 l -105.070452,0 z" style="color:#000000;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#5fd35f;fill-opacity:1;fill-rule:nonzero;stroke:#1a1a1a;stroke-width:5.37188959;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"></path></g><text/><g class="linkHandle"><circle/><polyline/></g>',
	    defaults: joint.util.deepSupplement({
	        type: 'history.nodes.Profession',
	        size: {
	            width: 138,
	            height: 103,
	        },
	        attrs: {
	            text: {
	                'ref-y': '60%',
	            }
	        },
	    }, joint.shapes.history.GenericShape.prototype.defaults)
	});


/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = joint.shapes.history.GenericShape.extend({
	    markup: '<g class="outer"><path d="M 89.145105,40.1223 A 38.660799,38.660799 0 0 1 50.484351,78.783116 38.660799,38.660799 0 0 1 11.823388,40.1223 38.660799,38.660799 0 0 1 50.484351,1.4615142 38.660799,38.660799 0 0 1 89.145105,40.1223 Z" style="color:#000000;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#5fd35f;fill-opacity:1;fill-rule:nonzero;stroke:#1a1a1a;stroke-width:2.9230361;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"></path><path d="m 54.699015,78.499074 0,13.021844 c 0,1.958726 -1.576847,0.322757 -3.535689,0.322757 l -1.358159,0 c -1.958632,0 -3.535689,1.635969 -3.535689,-0.322757 l 0,-13.021844 c 0,-0.528741 0.90649,-0.06169 2.856505,-0.06169 l 1.358368,0 c 1.924163,0 4.214664,-0.427551 4.214664,0.06169 z" style="color:#000000;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"></path><path d="m 11.637802,92.152276 76.724186,0 c 5.446191,0 9.830676,4.384433 9.830676,9.830544 l 0,12.46733 c 0,5.44615 -4.384485,9.83057 -9.830676,9.83057 l -76.724186,0 c -5.4461906,0 -9.8304659,-4.38442 -9.8304659,-9.83057 l 0,-12.46733 c 0,-5.446111 4.3842753,-9.830544 9.8304659,-9.830544 z" style="color:#000000;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#5fd35f;fill-opacity:1;fill-rule:nonzero;stroke:#000000;stroke-width:3.61467218;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"></path></g><text/><g class="linkHandle"><circle/><polyline/></g>',
	    defaults: joint.util.deepSupplement({
	        type: 'history.nodes.ReligionCaste',
	        size: {
	            width: 99,
	            height: 124,
	        },
	        attrs: {
	            text: {
	                'ref-y': '90%',
	            }
	        },
	    }, joint.shapes.history.GenericShape.prototype.defaults)
	});


/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = joint.shapes.history.GenericShape.extend({
	    markup: '<g class="outer"><path d="m 96.428576,49.999852 c 0,25.641762 -20.786966,46.428478 -46.428948,46.428478 -25.641541,0 -46.4282123,-20.786716 -46.4282123,-46.428478 0,-25.641717 20.7866713,-46.4284325 46.4282123,-46.4284325 25.641982,0 46.428948,20.7867155 46.428948,46.4284325 z" style="fill:#5fd35f;stroke:#000000;stroke-width:7.14283895;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"></path></g><text/><g class="linkHandle"><circle/><polyline/></g>',
	    defaults: joint.util.deepSupplement({
	        type: 'history.nodes.Start',
	        size: {
	            width: 99,
	            height: 99,
	        },
	    }, joint.shapes.history.GenericShape.prototype.defaults)
	});


/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = joint.shapes.history.GenericShape.extend({
	    markup: '<g class="outer"><path d="m 98.387083,49.999993 c 0,26.723476 -21.663837,48.387123 -48.386822,48.387123 -26.723792,0 -48.3873597,-21.663647 -48.3873597,-48.387123 0,-26.723444 21.6635677,-48.3870898 48.3873597,-48.3870898 26.722985,0 48.386822,21.6636458 48.386822,48.3870898 z" style="fill:#55ff55;stroke:#1a1a1a;stroke-width:3.22580647;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"></path><path d="m 85.483726,49.999993 c 0,19.597197 -15.886205,35.483877 -35.483465,35.483877 -19.597007,0 -35.484003,-15.88668 -35.484003,-35.483877 0,-19.59718 15.886996,-35.483876 35.484003,-35.483876 19.59726,0 35.483465,15.886696 35.483465,35.483876 z" style="fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none"></path></g><text/><g class="linkHandle"><circle/><polyline/></g>',
	    defaults: joint.util.deepSupplement({
	        type: 'history.nodes.Stop',
	        size: {
	            width: 99,
	            height: 99,
	        },
	        attrs: {
	            text: {
	                fill: '#FFFFFF',
	            }
	        },
	    }, joint.shapes.history.GenericShape.prototype.defaults)
	});


/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = joint.shapes.history.GenericShape.extend({
	    markup: '<g class="outer"><path d="M 42.677351,21.595269 A 21.082069,21.082069 0 0 1 21.595276,42.677338 21.082069,21.082069 0 0 1 0.51320124,21.595269 21.082069,21.082069 0 0 1 21.595276,0.51319933 21.082069,21.082069 0 0 1 42.677351,21.595269 Z" style="color:#000000;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#5fd35f;fill-opacity:1;fill-rule:nonzero;stroke:#000000;stroke-width:1.02640247;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"></path><path d="M 145.4868,21.595269 A 21.082069,21.082069 0 0 1 124.40472,42.677338 21.082069,21.082069 0 0 1 103.32265,21.595269 21.082069,21.082069 0 0 1 124.40472,0.51319933 21.082069,21.082069 0 0 1 145.4868,21.595269 Z" style="color:#000000;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#5fd35f;fill-opacity:1;fill-rule:nonzero;stroke:#000000;stroke-width:1.02640247;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"></path><path d="m 42.592767,17.934723 45.717161,0 c 0.354423,0 0.639752,0.285338 0.639752,0.639763 0,0.354432 -0.285329,0.639763 -0.639752,0.639763 l -45.717161,0 c -0.354418,0 -0.639752,-0.285331 -0.639752,-0.639763 0,-0.354425 0.285334,-0.639763 0.639752,-0.639763 z" style="color:#000000;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#5fd35f;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"></path><path style="color:#000000;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#5fd35f;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate" d="m 57.958989,25.440086 45.717161,0 c 0.35442,0 0.63976,0.285337 0.63976,0.639763 0,0.354432 -0.28534,0.639764 -0.63976,0.639764 l -44.083073,0 c -0.322417,0 -1.196837,-1.21444 -2.273841,-0.639764 -0.312667,0.166857 0.285335,-0.639763 0.639753,-0.639763 z"></path><path d="m 57.727155,25.987852 c 2.99201,0 5.400769,2.408751 5.400769,5.400791 0,2.992039 -2.408759,5.400791 -5.400769,5.400791 -2.992012,0 -5.40077,-2.408752 -5.40077,-5.400791 0,-2.99204 2.408758,-5.400791 5.40077,-5.400791 z" style="color:#000000;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#5fd35f;fill-opacity:1;fill-rule:nonzero;stroke:#000000;stroke-width:1.09553003;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"></path><path d="m 82.946244,7.8649073 9.738035,0 c 0.294667,0 0.531831,0.237167 0.531831,0.531766 l 0,9.7380507 c 0,0.294598 -0.237164,0.531766 -0.531831,0.531766 l -9.738035,0 c -0.294585,0 -0.531752,-0.237168 -0.531752,-0.531766 l 0,-9.7380507 c 0,-0.294599 0.237167,-0.531766 0.531752,-0.531766 z" style="color:#000000;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#5fd35f;fill-opacity:1;fill-rule:nonzero;stroke:#000000;stroke-width:1.09553003;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"></path><path d="m 82.414492,9.8443643 3.428513,-1.979455 0,0" style="fill:#5fd35f;fill-rule:evenodd;stroke:#000000;stroke-width:0.60176212px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"></path><path style="fill:#5fd35f;fill-rule:evenodd;stroke:#000000;stroke-width:0.60176212px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" d="m 82.414492,14.658461 8.242616,-6.7935517 0,0"></path><path d="m 83.617996,18.269033 9.446116,-7.997075 0,0" style="fill:#5fd35f;fill-rule:evenodd;stroke:#000000;stroke-width:0.60176212px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"></path><path style="fill:#5fd35f;fill-rule:evenodd;stroke:#000000;stroke-width:0.60176212px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" d="m 88.432094,18.269033 4.632018,-3.182978 0,0"></path><path d="m 52.326385,31.388643 5.40077,5.400791" style="fill:#5fd35f;fill-rule:evenodd;stroke:#000000;stroke-width:0.60176212px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"></path><path style="fill:#5fd35f;fill-rule:evenodd;stroke:#000000;stroke-width:0.60176212px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" d="m 53.529889,27.77807 7.807862,7.807839"></path><path d="m 56.478817,26.131655 6.604356,6.604315" style="fill:#5fd35f;fill-rule:evenodd;stroke:#000000;stroke-width:0.60176212px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"></path><path d="m 52.76022,29.257219 7.018775,7.131628" style="fill:#5fd35f;fill-rule:evenodd;stroke:#000000;stroke-width:0.60176212px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"></path><path d="m 54.733393,26.574546 7.807862,7.807839" style="fill:#5fd35f;fill-rule:evenodd;stroke:#000000;stroke-width:0.60176212px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"></path></g><text/><g class="linkHandle"><circle/><polyline/></g>',
	    defaults: joint.util.deepSupplement({
	        type: 'history.nodes.Trade',
	        size: {
	            width: 145,
	            height: 43,
	        },
	        attrs: {
	            text: {
	                'ref-x': '60%',
	                'ref-y': '90%',
	            }
	        },
	    }, joint.shapes.history.GenericShape.prototype.defaults)
	});


/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = joint.shapes.history.GenericShape.extend({
	    markup: '<g class="outer"><path style="color:#000000;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#5fd35f;fill-opacity:1;fill-rule:nonzero;stroke:#1a1a1a;stroke-width:1.31380069;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate" d="M 139.34308,23.771259 A 69.343065,23.114355 0 0 1 69.999959,46.885618 69.343065,23.114355 0 0 1 0.65690035,23.771259 69.343065,23.114355 0 0 1 69.999959,0.65690035 69.343065,23.114355 0 0 1 139.34308,23.771259 Z"></path></g><text/><g class="linkHandle"><circle/><polyline/></g>',
	    defaults: joint.util.deepSupplement({
	        type: 'history.nodes.UsecaseOrConcept',
	        size: {
	            width: 138,
	            height: 46,
	        },
	    }, joint.shapes.history.GenericShape.prototype.defaults)
	});


/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = joint.shapes.history.GenericShape.extend({
	    markup: '<g class="outer"><path d="M 118.66209,59.999976 A 58.662066,58.662066 0 0 1 59.999998,118.66205 58.662066,58.662066 0 0 1 1.3379056,59.999976 58.662066,58.662066 0 0 1 59.999998,1.3379018 58.662066,58.662066 0 0 1 118.66209,59.999976 Z" style="color:#000000;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#5fd35f;fill-opacity:1;fill-rule:nonzero;stroke:#000000;stroke-width:2.67581129;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"></path><path d="m 23.310055,35.747254 c 0.218016,-0.21787 0.943397,0.156533 1.626635,0.83968 l 19.564673,19.564727 c 0.683055,0.683164 1.057604,1.4086 0.839588,1.626561 -0.218016,0.21787 -0.943396,-0.156533 -1.626451,-0.83968 L 24.149644,37.373815 C 23.46659,36.690669 23.09204,35.965232 23.310055,35.747254 Z" style="color:#000000;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#5fd35f;fill-opacity:1;fill-rule:nonzero;stroke:#000000;stroke-width:2.15340042;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"></path><path style="color:#000000;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#5fd35f;fill-opacity:1;fill-rule:nonzero;stroke:#000000;stroke-width:2.15340042;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate" d="m 23.310055,57.778222 c 0.218016,0.21787 0.943397,-0.156533 1.626635,-0.83968 L 44.501363,37.373815 c 0.683055,-0.683164 1.057604,-1.4086 0.839588,-1.626561 -0.218016,-0.21787 -0.943396,0.156533 -1.626451,0.83968 L 24.149644,56.151661 c -0.683054,0.683146 -1.057604,1.408582 -0.839589,1.626561 z"></path><path style="color:#000000;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#5fd35f;fill-opacity:1;fill-rule:nonzero;stroke:#000000;stroke-width:2.15340042;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate" d="m 75.800023,35.747254 c 0.218016,-0.21787 0.943398,0.156533 1.626452,0.83968 l 19.564673,19.564727 c 0.683237,0.683164 1.057786,1.4086 0.839771,1.626561 -0.218016,0.21787 -0.943397,-0.156533 -1.626635,-0.83968 L 76.639612,37.373815 c -0.683055,-0.683146 -1.057604,-1.408583 -0.839589,-1.626561 z"></path><path d="m 75.800023,57.778222 c 0.218016,0.21787 0.943398,-0.156533 1.626452,-0.83968 L 96.991148,37.373815 c 0.683237,-0.683164 1.057786,-1.4086 0.839771,-1.626561 -0.218016,-0.21787 -0.943397,0.156533 -1.626635,0.83968 L 76.639612,56.151661 c -0.683055,0.683146 -1.057604,1.408582 -0.839589,1.626561 z" style="color:#000000;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#5fd35f;fill-opacity:1;fill-rule:nonzero;stroke:#000000;stroke-width:2.15340042;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"></path><path style="color:#000000;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#5fd35f;fill-opacity:1;fill-rule:nonzero;stroke:#000000;stroke-width:2.15340042;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate" d="m 45.265239,96.407901 c 0,-0.308213 0.777559,-0.556441 1.74376,-0.556423 11.018094,-7.539585 19.870625,-5.984193 27.668654,3.7e-5 0.966201,-3.7e-5 1.743943,0.248118 1.743943,0.556386 -1.83e-4,0.308215 -0.777742,0.556406 -1.743943,0.556425 -8.652942,-5.98423 -17.727686,-7.539567 -27.668654,0 -0.769714,0.583825 -1.743943,-0.248137 -1.74376,-0.556425 z"></path></g><text/><g class="linkHandle"><circle/><polyline/></g>',
	    defaults: joint.util.deepSupplement({
	        type: 'history.nodes.War',
	        size: {
	            width: 117,
	            height: 117,
	        },
	        attrs: {
	            text: {
	                'ref-y': '65%',
	            },
	        }
	    }, joint.shapes.history.GenericShape.prototype.defaults)
	});


/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = joint.shapes.history.GenericLink.extend({
	    defaults: joint.util.deepSupplement({
	        type: 'history.links.UndirectedLink',
	    }, joint.shapes.history.GenericLink.prototype.defaults),
	});


/***/ },
/* 25 */
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
/* 26 */
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
/* 27 */
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
	                .attr('text/text', type.replace(/([^^])([A-Z])/g, '$1 $2'))
	                .prop('itemType', type);

	            this.addCell(item);

	            prevItem = item;
	        }, this);
	    }
	});


/***/ },
/* 28 */
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
/* 29 */
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
/* 30 */
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
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var FileLoader = __webpack_require__(32);
	var LoadFileInput = __webpack_require__(33);

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
/* 32 */
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
/* 33 */
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
/* 34 */
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
/* 35 */
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
/* 36 */
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
/* 37 */
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