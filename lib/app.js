joint.shapes.history = require('./shapes');
var MenuGraph = require('./MenuGraph');
var MenuPaper = require('./MenuPaper');
var linkHandles = require('./linkHandles');
require('./contextMenu');

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
