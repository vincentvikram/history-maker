joint.shapes.history = {nodes: {}, links: {}};

joint.shapes.history.GenericShape = require('./shapes/GenericShape');
joint.shapes.history.GenericLink = require('./shapes/GenericLink');

joint.shapes.history.nodes.Activity = require('./shapes/nodes/Activity');
joint.shapes.history.nodes.Actor = require('./shapes/nodes/Actor');
joint.shapes.history.nodes.Artifact = require('./shapes/nodes/Artifact');
joint.shapes.history.nodes.ClassIdentity = require('./shapes/nodes/ClassIdentity');
joint.shapes.history.nodes.CommunityIdentity = require('./shapes/nodes/CommunityIdentity');
joint.shapes.history.nodes.Condition = require('./shapes/nodes/Condition');
joint.shapes.history.nodes.Destruction = require('./shapes/nodes/Destruction');
joint.shapes.history.nodes.Document = require('./shapes/nodes/Document');
joint.shapes.history.nodes.Event = require('./shapes/nodes/Event');
joint.shapes.history.nodes.GroupIdentity = require('./shapes/nodes/GroupIdentity');
joint.shapes.history.nodes.Idea = require('./shapes/nodes/Idea');
joint.shapes.history.nodes.Identity = require('./shapes/nodes/Identity');
joint.shapes.history.nodes.Note = require('./shapes/nodes/Note');
joint.shapes.history.nodes.PredefinedProcess = require('./shapes/nodes/PredefinedProcess');
joint.shapes.history.nodes.Profession = require('./shapes/nodes/Profession');
joint.shapes.history.nodes.ReligionCaste = require('./shapes/nodes/ReligionCaste');
joint.shapes.history.nodes.Start = require('./shapes/nodes/Start');
joint.shapes.history.nodes.Stop = require('./shapes/nodes/Stop');
joint.shapes.history.nodes.Trade = require('./shapes/nodes/Trade');
joint.shapes.history.nodes.UsecaseOrConcept = require('./shapes/nodes/UsecaseOrConcept');
joint.shapes.history.nodes.War = require('./shapes/nodes/War');

joint.shapes.history.links.UndirectedLink = require('./shapes/links/UndirectedLink');
joint.shapes.history.links.UnidirectionalLink = require('./shapes/links/UnidirectionalLink');
joint.shapes.history.links.BidirectionalLink = require('./shapes/links/BidirectionalLink');

joint.shapes.isat = {nodes: {}, links: {}};

joint.shapes.isat.nodes.Data = require('./shapes/nodes/isat/Data');
joint.shapes.isat.nodes.Phase = require('./shapes/nodes/isat/Phase');
joint.shapes.isat.nodes.Query = require('./shapes/nodes/isat/Query');
joint.shapes.isat.nodes.Question = require('./shapes/nodes/isat/Question');
joint.shapes.isat.nodes.Stratum = require('./shapes/nodes/isat/Stratum');

joint.shapes.isat.links.NormalLink = require('./shapes/links/isat/NormalLink');
joint.shapes.isat.links.AlignedLink = require('./shapes/links/isat/AlignedLink');
joint.shapes.isat.links.StarburstLink = require('./shapes/links/isat/StarburstLink');
joint.shapes.isat.links.SlideLink = require('./shapes/links/isat/SlideLink');

var MenuGraph = require('./models/MenuGraph');
var MenuPaper = require('./views/MenuPaper');
var linkHandles = require('./misc/linkHandles');
var SaveButton = require('./views/SaveButton');
var LoadButton = require('./views/LoadButton');
var ClearButton = require('./views/ClearButton');
var ISATButton = require('./views/ISATButton');
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

var iSatButton = new ISATButton({
    el: document.getElementById('isat-btn'),
    model: menuGraph,
});
