joint.shapes.history = {nodes: {}, links: {}};

joint.shapes.history.GenericShape = require('./shapes/GenericShape');
joint.shapes.history.GenericLink = require('./shapes/GenericLink');

joint.shapes.history.nodes.Community = require('./shapes/nodes/Community');
joint.shapes.history.nodes.Profession = require('./shapes/nodes/Profession');
joint.shapes.history.nodes.Identity = require('./shapes/nodes/Identity');
joint.shapes.history.nodes.Idea = require('./shapes/nodes/Idea');
joint.shapes.history.nodes.War = require('./shapes/nodes/War');

joint.shapes.history.links.UndirectedLink = require('./shapes/links/UndirectedLink');
joint.shapes.history.links.UnidirectionalLink = require('./shapes/links/UnidirectionalLink');
joint.shapes.history.links.BidirectionalLink = require('./shapes/links/BidirectionalLink');

var MenuGraph = require('./models/MenuGraph');
var MenuPaper = require('./views/MenuPaper');
var linkHandles = require('./misc/linkHandles');
var SaveButton = require('./views/SaveButton');
var LoadButton = require('./views/LoadButton');
var ClearButton = require('./views/ClearButton');
var Zoom = require('./models/Zoom');
var ZoomButton = require('./views/ZoomButton');
require('./misc/contextMenu');

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
    height: 650,
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
