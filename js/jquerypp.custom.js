/*!
 * jQuery++ - 2.0.0
 * http://jquerypp.com
 * Copyright (c) 2015 Bitovi
 * Sun, 20 Sep 2015 11:59:42 GMT
 * Licensed MIT

 * Includes: jquerypp/event/drag/drag
 * Download from: http://bitbuilder.herokuapp.com/jquerypp.custom.js?plugins=jquerypp%2Fevent%2Fdrag%2Fdrag
 */
/*[global-shim-start]*/
(function (exports, global){
	var origDefine = global.define;

	var get = function(name){
		var parts = name.split("."),
			cur = global,
			i;
		for(i = 0 ; i < parts.length; i++){
			if(!cur) {
				break;
			}
			cur = cur[parts[i]];
		}
		return cur;
	};
	var modules = (global.define && global.define.modules) ||
		(global._define && global._define.modules) || {};
	var ourDefine = global.define = function(moduleName, deps, callback){
		var module;
		if(typeof deps === "function") {
			callback = deps;
			deps = [];
		}
		var args = [],
			i;
		for(i =0; i < deps.length; i++) {
			args.push( exports[deps[i]] ? get(exports[deps[i]]) : ( modules[deps[i]] || get(deps[i]) )  );
		}
		// CJS has no dependencies but 3 callback arguments
		if(!deps.length && callback.length) {
			module = { exports: {} };
			var require = function(name) {
				return exports[name] ? get(exports[name]) : modules[name];
			};
			args.push(require, module.exports, module);
		}
		// Babel uses only the exports objet
		else if(!args[0] && deps[0] === "exports") {
			module = { exports: {} };
			args[0] = module.exports;
		}

		global.define = origDefine;
		var result = callback ? callback.apply(null, args) : undefined;
		global.define = ourDefine;

		// Favor CJS module.exports over the return value
		modules[moduleName] = module && module.exports ? module.exports : result;
	};
	global.define.orig = origDefine;
	global.define.modules = modules;
	global.define.amd = true;
	global.System = {
		define: function(__name, __code){
			global.define = origDefine;
			eval("(function() { " + __code + " \n }).call(global);");
			global.define = ourDefine;
		},
		orig: global.System
	};
})({"jquery":"jQuery","zepto":"Zepto"},window)
/*jquerypp@2.0.0#lang/vector/vector*/
define('jquerypp/lang/vector/vector', ['jquery'], function ($) {
    var getSetZero = function (v) {
            return v !== undefined ? this.array[0] = v : this.array[0];
        }, getSetOne = function (v) {
            return v !== undefined ? this.array[1] = v : this.array[1];
        };
    $.Vector = function (arr) {
        var array = $.isArray(arr) ? arr : $.makeArray(arguments);
        this.update(array);
    };
    $.Vector.prototype = {
        app: function (f) {
            var i, newArr = [];
            for (i = 0; i < this.array.length; i++) {
                newArr.push(f(this.array[i], i));
            }
            return new $.Vector(newArr);
        },
        plus: function () {
            var i, args = arguments[0] instanceof $.Vector ? arguments[0].array : $.makeArray(arguments), arr = this.array.slice(0), vec = new $.Vector();
            for (i = 0; i < args.length; i++) {
                arr[i] = (arr[i] ? arr[i] : 0) + args[i];
            }
            return vec.update(arr);
        },
        minus: function () {
            var i, args = arguments[0] instanceof $.Vector ? arguments[0].array : $.makeArray(arguments), arr = this.array.slice(0), vec = new $.Vector();
            for (i = 0; i < args.length; i++) {
                arr[i] = (arr[i] ? arr[i] : 0) - args[i];
            }
            return vec.update(arr);
        },
        equals: function () {
            var i, args = arguments[0] instanceof $.Vector ? arguments[0].array : $.makeArray(arguments), arr = this.array.slice(0), vec = new $.Vector();
            for (i = 0; i < args.length; i++) {
                if (arr[i] != args[i]) {
                    return null;
                }
            }
            return vec.update(arr);
        },
        x: getSetZero,
        left: getSetZero,
        width: getSetZero,
        y: getSetOne,
        top: getSetOne,
        height: getSetOne,
        toString: function () {
            return '(' + this.array.join(', ') + ')';
        },
        update: function (array) {
            var i;
            if (this.array) {
                for (i = 0; i < this.array.length; i++) {
                    delete this.array[i];
                }
            }
            this.array = array;
            for (i = 0; i < array.length; i++) {
                this[i] = this.array[i];
            }
            return this;
        }
    };
    $.Event.prototype.vector = function () {
        var touches = 'ontouchend' in document && this.originalEvent.changedTouches && this.originalEvent.changedTouches.length ? this.originalEvent.changedTouches[0] : this;
        if (this.originalEvent.synthetic) {
            var doc = document.documentElement, body = document.body;
            return new $.Vector(touches.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc.clientLeft || 0), touches.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc.clientTop || 0));
        } else {
            return new $.Vector(touches.pageX, touches.pageY);
        }
    };
    $.fn.offsetv = function () {
        if (this[0] == window) {
            return new $.Vector(window.pageXOffset ? window.pageXOffset : document.documentElement.scrollLeft, window.pageYOffset ? window.pageYOffset : document.documentElement.scrollTop);
        } else {
            var offset = this.offset() || {};
            return new $.Vector(offset.left, offset.top);
        }
    };
    $.fn.dimensionsv = function (which) {
        if (this[0] == window || !which) {
            return new $.Vector(this.width(), this.height());
        } else {
            return new $.Vector(this[which + 'Width'](), this[which + 'Height']());
        }
    };
    return $;
});
/*jquerypp@2.0.0#event/livehack/livehack*/
define('jquerypp/event/livehack/livehack', ['jquery'], function ($) {
    var event = $.event, findHelper = function (events, types, callback, selector) {
            var t, type, typeHandlers, all, h, handle, namespaces, namespace, match;
            for (t = 0; t < types.length; t++) {
                type = types[t];
                all = type.indexOf('.') < 0;
                if (!all) {
                    namespaces = type.split('.');
                    type = namespaces.shift();
                    namespace = new RegExp('(^|\\.)' + namespaces.slice(0).sort().join('\\.(?:.*\\.)?') + '(\\.|$)');
                }
                typeHandlers = (events[type] || []).slice(0);
                for (h = 0; h < typeHandlers.length; h++) {
                    handle = typeHandlers[h];
                    match = all || namespace.test(handle.namespace);
                    if (match) {
                        if (selector) {
                            if (handle.selector === selector) {
                                callback(type, handle.origHandler || handle.handler);
                            }
                        } else if (selector === null) {
                            callback(type, handle.origHandler || handle.handler, handle.selector);
                        } else if (!handle.selector) {
                            callback(type, handle.origHandler || handle.handler);
                        }
                    }
                }
            }
        };
    event.find = function (el, types, selector) {
        var events = ($._data(el) || {}).events, handlers = [], t, liver, live;
        if (!events) {
            return handlers;
        }
        findHelper(events, types, function (type, handler) {
            handlers.push(handler);
        }, selector);
        return handlers;
    };
    event.findBySelector = function (el, types) {
        var events = $._data(el).events, selectors = {}, add = function (selector, event, handler) {
                var select = selectors[selector] || (selectors[selector] = {}), events = select[event] || (select[event] = []);
                events.push(handler);
            };
        if (!events) {
            return selectors;
        }
        findHelper(events, types, function (type, handler, selector) {
            add(selector || '', type, handler);
        }, null);
        return selectors;
    };
    event.supportTouch = 'ontouchend' in document;
    $.fn.respondsTo = function (events) {
        if (!this.length) {
            return false;
        } else {
            return event.find(this[0], $.isArray(events) ? events : [events]).length > 0;
        }
    };
    $.fn.triggerHandled = function (event, data) {
        event = typeof event == 'string' ? $.Event(event) : event;
        this.trigger(event, data);
        return event.handled;
    };
    event.setupHelper = function (types, startingEvent, onFirst) {
        if (!onFirst) {
            onFirst = startingEvent;
            startingEvent = null;
        }
        var add = function (handleObj) {
                var bySelector, selector = handleObj.selector || '', namespace = handleObj.namespace ? '.' + handleObj.namespace : '';
                if (selector) {
                    bySelector = event.find(this, types, selector);
                    if (!bySelector.length) {
                        $(this).delegate(selector, startingEvent + namespace, onFirst);
                    }
                } else {
                    if (!event.find(this, types, selector).length) {
                        event.add(this, startingEvent + namespace, onFirst, {
                            selector: selector,
                            delegate: this
                        });
                    }
                }
            }, remove = function (handleObj) {
                var bySelector, selector = handleObj.selector || '';
                if (selector) {
                    bySelector = event.find(this, types, selector);
                    if (!bySelector.length) {
                        $(this).undelegate(selector, startingEvent, onFirst);
                    }
                } else {
                    if (!event.find(this, types, selector).length) {
                        event.remove(this, startingEvent, onFirst, {
                            selector: selector,
                            delegate: this
                        });
                    }
                }
            };
        $.each(types, function () {
            event.special[this] = {
                add: add,
                remove: remove,
                setup: function () {
                },
                teardown: function () {
                }
            };
        });
    };
    return $;
});
/*jquerypp@2.0.0#event/reverse/reverse*/
define('jquerypp/event/reverse/reverse', ['jquery'], function ($) {
    $.event.reverse = function (name, attributes) {
        var bound = $(), count = 0, dispatch = $.event.handle || $.event.dispatch;
        $.event.special[name] = {
            setup: function () {
                if (this !== window) {
                    bound.push(this);
                    $.unique(bound);
                }
                return this !== window;
            },
            teardown: function () {
                bound = bound.not(this);
                return this !== window;
            },
            add: function (handleObj) {
                var origHandler = handleObj.handler;
                handleObj.origHandler = origHandler;
                handleObj.handler = function (ev, data) {
                    var isWindow = this === window;
                    if (attributes && attributes.handler) {
                        var result = attributes.handler.apply(this, arguments);
                        if (result === true) {
                            return;
                        }
                    }
                    if (count === 0) {
                        count++;
                        var where = data === false ? ev.target : this;
                        dispatch.call(where, ev, data);
                        if (ev.isPropagationStopped()) {
                            count--;
                            return;
                        }
                        var index = bound.index(this), length = bound.length, child, sub;
                        while (++index < length && (child = bound[index]) && (isWindow || $.contains(where, child))) {
                            dispatch.call(child, ev, data);
                            if (ev.isPropagationStopped()) {
                                while (++index < length && (sub = bound[index])) {
                                    if (!$.contains(child, sub)) {
                                        index--;
                                        break;
                                    }
                                }
                            }
                        }
                        ev.stopImmediatePropagation();
                        count--;
                    } else {
                        handleObj.origHandler.call(this, ev, data);
                    }
                };
            }
        };
        $([
            document,
            window
        ]).bind(name, function () {
        });
        return $.event.special[name];
    };
    return $;
});
/*jquerypp@2.0.0#event/drag/core/core*/
define('jquerypp/event/drag/core/core', [
    'jquery',
    'jquerypp/lang/vector/vector',
    'jquerypp/event/livehack/livehack',
    'jquerypp/event/reverse/reverse'
], function ($) {
    if (!$.event.special.move) {
        $.event.reverse('move');
    }
    var bind = function (object, method) {
            var args = Array.prototype.slice.call(arguments, 2);
            return function () {
                var args2 = [this].concat(args, $.makeArray(arguments));
                return method.apply(object, args2);
            };
        }, event = $.event, clearSelection = window.getSelection ? function () {
            window.getSelection().removeAllRanges();
        } : function () {
        }, supportTouch = !window._phantom && 'ontouchend' in document, startEvent = supportTouch ? 'touchstart' : 'mousedown', stopEvent = supportTouch ? 'touchend' : 'mouseup', moveEvent = supportTouch ? 'touchmove' : 'mousemove', preventTouchScroll = function (ev) {
            ev.preventDefault();
        };
    $.Drag = function () {
    };
    $.extend($.Drag, {
        lowerName: 'drag',
        current: null,
        distance: 0,
        mousedown: function (ev, element) {
            var isLeftButton = ev.button === 0 || ev.button == 1, doEvent = isLeftButton || supportTouch;
            if (!doEvent || this.current) {
                return;
            }
            var drag = new $.Drag(), delegate = ev.delegateTarget || element, selector = ev.handleObj.selector, self = this;
            this.current = drag;
            drag.setup({
                element: element,
                delegate: ev.delegateTarget || element,
                selector: ev.handleObj.selector,
                moved: false,
                _distance: this.distance,
                callbacks: {
                    dragdown: event.find(delegate, ['dragdown'], selector),
                    draginit: event.find(delegate, ['draginit'], selector),
                    dragover: event.find(delegate, ['dragover'], selector),
                    dragmove: event.find(delegate, ['dragmove'], selector),
                    dragout: event.find(delegate, ['dragout'], selector),
                    dragend: event.find(delegate, ['dragend'], selector),
                    dragcleanup: event.find(delegate, ['dragcleanup'], selector)
                },
                destroyed: function () {
                    self.current = null;
                }
            }, ev);
        }
    });
    $.extend($.Drag.prototype, {
        setup: function (options, ev) {
            $.extend(this, options);
            this.element = $(this.element);
            this.event = ev;
            this.moved = false;
            this.allowOtherDrags = false;
            var mousemove = bind(this, this.mousemove), mouseup = bind(this, this.mouseup);
            this._mousemove = mousemove;
            this._mouseup = mouseup;
            this._distance = options.distance ? options.distance : 0;
            this.mouseStartPosition = ev.vector();
            $(document).bind(moveEvent, mousemove);
            $(document).bind(stopEvent, mouseup);
            if (supportTouch) {
                $(document).bind(moveEvent, preventTouchScroll);
            }
            if (!this.callEvents('down', this.element, ev)) {
                this.noSelection(this.delegate);
                clearSelection();
            }
        },
        destroy: function () {
            $(document).unbind(moveEvent, this._mousemove);
            $(document).unbind(stopEvent, this._mouseup);
            if (supportTouch) {
                $(document).unbind(moveEvent, preventTouchScroll);
            }
            if (!this.moved) {
                this.event = this.element = null;
            }
            if (!supportTouch) {
                this.selection(this.delegate);
            }
            this.destroyed();
        },
        mousemove: function (docEl, ev) {
            if (!this.moved) {
                var dist = Math.sqrt(Math.pow(ev.pageX - this.event.pageX, 2) + Math.pow(ev.pageY - this.event.pageY, 2));
                if (dist < this._distance) {
                    return false;
                }
                this.init(this.element, ev);
                this.moved = true;
            }
            this.element.trigger('move', this);
            var pointer = ev.vector();
            if (this._start_position && this._start_position.equal(pointer)) {
                return;
            }
            this.draw(pointer, ev);
        },
        mouseup: function (docEl, event) {
            if (this.moved) {
                this.end(event);
            }
            this.destroy();
        },
        noSelection: function (elm) {
            elm = elm || this.delegate;
            document.documentElement.onselectstart = function () {
                return false;
            };
            document.documentElement.unselectable = 'on';
            this.selectionDisabled = this.selectionDisabled ? this.selectionDisabled.add(elm) : $(elm);
            this.selectionDisabled.css('-moz-user-select', '-moz-none');
        },
        selection: function () {
            if (this.selectionDisabled) {
                document.documentElement.onselectstart = function () {
                };
                document.documentElement.unselectable = 'off';
                this.selectionDisabled.css('-moz-user-select', '');
            }
        },
        init: function (element, event) {
            element = $(element);
            var startElement = this.movingElement = this.element = $(element);
            this._cancelled = false;
            this.event = event;
            this.mouseElementPosition = this.mouseStartPosition.minus(this.element.offsetv());
            this.callEvents('init', element, event);
            if (this._cancelled === true) {
                return;
            }
            this.startPosition = startElement != this.movingElement ? this.movingElement.offsetv() : this.currentDelta();
            this.makePositioned(this.movingElement);
            this.oldZIndex = this.movingElement.css('zIndex');
            this.movingElement.css('zIndex', 1000);
            if (!this._only && this.constructor.responder) {
                this.constructor.responder.compile(event, this);
            }
        },
        makePositioned: function (that) {
            var style, pos = that.css('position');
            if (!pos || pos == 'static') {
                style = { position: 'relative' };
                if (window.opera) {
                    style.top = '0px';
                    style.left = '0px';
                }
                that.css(style);
            }
        },
        callEvents: function (type, element, event, drop) {
            var i, cbs = this.callbacks[this.constructor.lowerName + type];
            for (i = 0; i < cbs.length; i++) {
                cbs[i].call(element, event, this, drop);
            }
            return cbs.length;
        },
        currentDelta: function () {
            return new $.Vector(parseInt(this.movingElement.css('left'), 10) || 0, parseInt(this.movingElement.css('top'), 10) || 0);
        },
        draw: function (pointer, event) {
            if (this._cancelled) {
                return;
            }
            clearSelection();
            this.location = pointer.minus(this.mouseElementPosition);
            this.move(event);
            if (this._cancelled) {
                return;
            }
            if (!event.isDefaultPrevented()) {
                this.position(this.location);
            }
            if (!this._only && this.constructor.responder) {
                this.constructor.responder.show(pointer, this, event);
            }
        },
        position: function (newOffsetv) {
            var style, dragged_element_css_offset = this.currentDelta(), dragged_element_position_vector = this.movingElement.offsetv().minus(dragged_element_css_offset);
            this.required_css_position = newOffsetv.minus(dragged_element_position_vector);
            this.offsetv = newOffsetv;
            style = this.movingElement[0].style;
            if (!this._cancelled && !this._horizontal) {
                style.top = this.required_css_position.top() + 'px';
            }
            if (!this._cancelled && !this._vertical) {
                style.left = this.required_css_position.left() + 'px';
            }
        },
        move: function (event) {
            this.callEvents('move', this.element, event);
        },
        over: function (event, drop) {
            this.callEvents('over', this.element, event, drop);
        },
        out: function (event, drop) {
            this.callEvents('out', this.element, event, drop);
        },
        end: function (event) {
            if (this._cancelled) {
                return;
            }
            if (!this._only && this.constructor.responder) {
                this.constructor.responder.end(event, this);
            }
            this.callEvents('end', this.element, event);
            if (this._revert) {
                var self = this;
                this.movingElement.animate({
                    top: this.startPosition.top() + 'px',
                    left: this.startPosition.left() + 'px'
                }, function () {
                    self.cleanup.apply(self, arguments);
                });
            } else {
                this.cleanup(event);
            }
            this.event = null;
        },
        cleanup: function (event) {
            this.movingElement.css({ zIndex: this.oldZIndex });
            if (this.movingElement[0] !== this.element[0] && !this.movingElement.has(this.element[0]).length && !this.element.has(this.movingElement[0]).length) {
                this.movingElement.css({ display: 'none' });
            }
            if (this._removeMovingElement) {
                this.movingElement.remove();
            }
            if (event) {
                this.callEvents('cleanup', this.element, event);
            }
            this.movingElement = this.element = this.event = null;
        },
        cancel: function () {
            this._cancelled = true;
            if (!this._only && this.constructor.responder) {
                this.constructor.responder.clear(this.event.vector(), this, this.event);
            }
            this.destroy();
        },
        ghost: function (parent) {
            var ghost = this.movingElement.clone().css('position', 'absolute');
            if (parent) {
                $(parent).append(ghost);
            } else {
                $(this.movingElement).after(ghost);
            }
            ghost.width(this.movingElement.width()).height(this.movingElement.height());
            ghost.offset(this.movingElement.offset());
            this.movingElement = ghost;
            this.noSelection(ghost);
            this._removeMovingElement = true;
            return ghost;
        },
        representative: function (element, offsetX, offsetY) {
            this._offsetX = offsetX || 0;
            this._offsetY = offsetY || 0;
            var p = this.mouseStartPosition;
            this.movingElement = $(element);
            this.movingElement.css({
                top: p.y() - this._offsetY + 'px',
                left: p.x() - this._offsetX + 'px',
                display: 'block',
                position: 'absolute'
            }).show();
            this.noSelection(this.movingElement);
            this.mouseElementPosition = new $.Vector(this._offsetX, this._offsetY);
            return this;
        },
        revert: function (val) {
            this._revert = val === undefined ? true : val;
            return this;
        },
        vertical: function () {
            this._vertical = true;
            return this;
        },
        horizontal: function () {
            this._horizontal = true;
            return this;
        },
        only: function (only) {
            return this._only = only === undefined ? true : only;
        },
        distance: function (val) {
            if (val !== undefined) {
                this._distance = val;
                return this;
            } else {
                return this._distance;
            }
        }
    });
    event.setupHelper([
        'dragdown',
        'draginit',
        'dragover',
        'dragmove',
        'dragout',
        'dragend',
        'dragcleanup'
    ], startEvent, function (e) {
        $.Drag.mousedown.call($.Drag, e, this);
    });
    return $;
});
/*jquerypp@2.0.0#event/drag/step/step*/
define('jquerypp/event/drag/step/step', [
    'jquery',
    'jquerypp/event/drag/core/core'
], function ($) {
    var round = function (x, m) {
        return Math.round(x / m) * m;
    };
    $.Drag.prototype.step = function (amount, container, center) {
        if (typeof amount == 'number') {
            amount = {
                x: amount,
                y: amount
            };
        }
        container = container || $(document.body);
        this._step = amount;
        var styles = container.css([
                'borderTopWidth',
                'paddingTop',
                'borderLeftWidth',
                'paddingLeft'
            ]);
        var top = parseInt(styles.borderTopWidth) + parseInt(styles.paddingTop), left = parseInt(styles.borderLeftWidth) + parseInt(styles.paddingLeft);
        this._step.offset = container.offsetv().plus(left, top);
        this._step.center = center;
        return this;
    };
    (function () {
        var oldPosition = $.Drag.prototype.position;
        $.Drag.prototype.position = function (offsetPositionv) {
            if (this._step) {
                var step = this._step, center = step.center && step.center.toLowerCase(), movingSize = this.movingElement.dimensionsv('outer'), lot = step.offset.top() - (center && center != 'x' ? movingSize.height() / 2 : 0), lof = step.offset.left() - (center && center != 'y' ? movingSize.width() / 2 : 0);
                if (this._step.x) {
                    offsetPositionv.left(Math.round(lof + round(offsetPositionv.left() - lof, this._step.x)));
                }
                if (this._step.y) {
                    offsetPositionv.top(Math.round(lot + round(offsetPositionv.top() - lot, this._step.y)));
                }
            }
            oldPosition.call(this, offsetPositionv);
        };
    }());
    return $;
});
/*jquerypp@2.0.0#event/drag/limit/limit*/
define('jquerypp/event/drag/limit/limit', [
    'jquery',
    'jquerypp/event/drag/core/core'
], function ($) {
    $.Drag.prototype.limit = function (container, center) {
        var styles = container.css([
                'borderTopWidth',
                'paddingTop',
                'borderLeftWidth',
                'paddingLeft'
            ]), paddingBorder = new $.Vector(parseInt(styles.borderLeftWidth, 10) + parseInt(styles.paddingLeft, 10) || 0, parseInt(styles.borderTopWidth, 10) + parseInt(styles.paddingTop, 10) || 0);
        this._limit = {
            offset: container.offsetv().plus(paddingBorder),
            size: container.dimensionsv(),
            center: center === true ? 'both' : center
        };
        return this;
    };
    var oldPosition = $.Drag.prototype.position;
    $.Drag.prototype.position = function (offsetPositionv) {
        if (this._limit) {
            var limit = this._limit, center = limit.center && limit.center.toLowerCase(), movingSize = this.movingElement.dimensionsv('outer'), halfHeight = center && center != 'x' ? movingSize.height() / 2 : 0, halfWidth = center && center != 'y' ? movingSize.width() / 2 : 0, lot = limit.offset.top(), lof = limit.offset.left(), height = limit.size.height(), width = limit.size.width();
            if (offsetPositionv.top() + halfHeight < lot) {
                offsetPositionv.top(lot - halfHeight);
            }
            if (offsetPositionv.top() + movingSize.height() - halfHeight > lot + height) {
                offsetPositionv.top(lot + height - movingSize.height() + halfHeight);
            }
            if (offsetPositionv.left() + halfWidth < lof) {
                offsetPositionv.left(lof - halfWidth);
            }
            if (offsetPositionv.left() + movingSize.width() - halfWidth > lof + width) {
                offsetPositionv.left(lof + width - movingSize.left() + halfWidth);
            }
        }
        oldPosition.call(this, offsetPositionv);
    };
    return $;
});
/*jquerypp@2.0.0#dom/within/within*/
define('jquerypp/dom/within/within', ['jquery'], function ($) {
    var withinBox = function (x, y, left, top, width, height) {
        return y >= top && y < top + height && x >= left && x < left + width;
    };
    $.fn.within = function (left, top, useOffsetCache) {
        var ret = [];
        this.each(function () {
            var q = jQuery(this);
            if (this == document.documentElement) {
                return ret.push(this);
            }
            var offset = useOffsetCache ? $.data(this, 'offsetCache') || $.data(this, 'offsetCache', q.offset()) : q.offset();
            var res = withinBox(left, top, offset.left, offset.top, this.offsetWidth, this.offsetHeight);
            if (res) {
                ret.push(this);
            }
        });
        return this.pushStack($.unique(ret), 'within', left + ',' + top);
    };
    $.fn.withinBox = function (left, top, width, height, useOffsetCache) {
        var ret = [];
        this.each(function () {
            var q = jQuery(this);
            if (this == document.documentElement)
                return ret.push(this);
            var offset = useOffsetCache ? $.data(this, 'offset') || $.data(this, 'offset', q.offset()) : q.offset();
            var ew = q.width(), eh = q.height(), res = !(offset.top > top + height || offset.top + eh < top || offset.left > left + width || offset.left + ew < left);
            if (res)
                ret.push(this);
        });
        return this.pushStack($.unique(ret), 'withinBox', $.makeArray(arguments).join(','));
    };
    return $;
});
/*jquerypp@2.0.0#dom/compare/compare*/
define('jquerypp/dom/compare/compare', ['jquery'], function ($) {
    $.fn.compare = function (element) {
        try {
            element = element.jquery ? element[0] : element;
        } catch (e) {
            return null;
        }
        if (window.HTMLElement) {
            var s = HTMLElement.prototype.toString.call(element);
            if (s == '[xpconnect wrapped native prototype]' || s == '[object XULElement]' || s === '[object Window]') {
                return null;
            }
        }
        if (this[0].compareDocumentPosition) {
            return this[0].compareDocumentPosition(element);
        }
        if (this[0] == document && element != document)
            return 8;
        var number = (this[0] !== element && this[0].contains(element) && 16) + (this[0] != element && element.contains(this[0]) && 8), docEl = document.documentElement;
        if (this[0].sourceIndex) {
            number += this[0].sourceIndex < element.sourceIndex && 4;
            number += this[0].sourceIndex > element.sourceIndex && 2;
            number += (this[0].ownerDocument !== element.ownerDocument || this[0] != docEl && this[0].sourceIndex <= 0 || element != docEl && element.sourceIndex <= 0) && 1;
        }
        return number;
    };
    return $;
});
/*jquerypp@2.0.0#event/drop/drop*/
define('jquerypp/event/drop/drop', [
    'jquery',
    'jquerypp/event/drag/core/core',
    'jquerypp/dom/within/within',
    'jquerypp/dom/compare/compare'
], function ($) {
    var event = $.event;
    var eventNames = [
            'dropover',
            'dropon',
            'dropout',
            'dropinit',
            'dropmove',
            'dropend'
        ];
    $.Drop = function (callbacks, element) {
        $.extend(this, callbacks);
        this.element = $(element);
    };
    $.each(eventNames, function () {
        event.special[this] = {
            add: function (handleObj) {
                var el = $(this), current = el.data('dropEventCount') || 0;
                el.data('dropEventCount', current + 1);
                if (current == 0) {
                    $.Drop.addElement(this);
                }
            },
            remove: function () {
                var el = $(this), current = el.data('dropEventCount') || 0;
                el.data('dropEventCount', current - 1);
                if (current <= 1) {
                    $.Drop.removeElement(this);
                }
            }
        };
    });
    $.extend($.Drop, {
        lowerName: 'drop',
        _rootElements: [],
        _elements: $(),
        last_active: [],
        endName: 'dropon',
        addElement: function (el) {
            for (var i = 0; i < this._rootElements.length; i++) {
                if (el == this._rootElements[i])
                    return;
            }
            this._rootElements.push(el);
        },
        removeElement: function (el) {
            for (var i = 0; i < this._rootElements.length; i++) {
                if (el == this._rootElements[i]) {
                    this._rootElements.splice(i, 1);
                    return;
                }
            }
        },
        sortByDeepestChild: function (a, b) {
            var compare = a.element.compare(b.element);
            if (compare & 16 || compare & 4)
                return 1;
            if (compare & 8 || compare & 2)
                return -1;
            return 0;
        },
        isAffected: function (point, moveable, responder) {
            return responder.element != moveable.element && responder.element.within(point[0], point[1], responder._cache).length == 1;
        },
        deactivate: function (responder, mover, event) {
            mover.out(event, responder);
            responder.callHandlers(this.lowerName + 'out', responder.element[0], event, mover);
        },
        activate: function (responder, mover, event) {
            mover.over(event, responder);
            responder.callHandlers(this.lowerName + 'over', responder.element[0], event, mover);
        },
        move: function (responder, mover, event) {
            responder.callHandlers(this.lowerName + 'move', responder.element[0], event, mover);
        },
        compile: function (event, drag) {
            if (!this.dragging && !drag) {
                return;
            } else if (!this.dragging) {
                this.dragging = drag;
                this.last_active = [];
            }
            var el, drops, selector, dropResponders, newEls = [], dragging = this.dragging;
            for (var i = 0; i < this._rootElements.length; i++) {
                el = this._rootElements[i];
                var drops = $.event.findBySelector(el, eventNames);
                for (selector in drops) {
                    dropResponders = selector ? jQuery(selector, el) : [el];
                    for (var e = 0; e < dropResponders.length; e++) {
                        if (this.addCallbacks(dropResponders[e], drops[selector], dragging)) {
                            newEls.push(dropResponders[e]);
                        }
                        ;
                    }
                }
            }
            this.add(newEls, event, dragging);
        },
        addCallbacks: function (el, callbacks, onlyNew) {
            var origData = $.data(el, '_dropData');
            if (!origData) {
                $.data(el, '_dropData', new $.Drop(callbacks, el));
                return true;
            } else if (!onlyNew) {
                var origCbs = origData;
                for (var eventName in callbacks) {
                    origCbs[eventName] = origCbs[eventName] ? origCbs[eventName].concat(callbacks[eventName]) : callbacks[eventName];
                }
                return false;
            }
        },
        add: function (newEls, event, drag, dragging) {
            var i = 0, drop;
            while (i < newEls.length) {
                drop = $.data(newEls[i], '_dropData');
                drop.callHandlers(this.lowerName + 'init', newEls[i], event, drag);
                if (drop._canceled) {
                    newEls.splice(i, 1);
                } else {
                    i++;
                }
            }
            this._elements.push.apply(this._elements, newEls);
        },
        show: function (point, moveable, event) {
            var element = moveable.element;
            if (!this._elements.length)
                return;
            var respondable, affected = [], propagate = true, i = 0, j, la, toBeActivated, aff, oldLastActive = this.last_active, responders = [], self = this, drag;
            while (i < this._elements.length) {
                drag = $.data(this._elements[i], '_dropData');
                if (!drag) {
                    this._elements.splice(i, 1);
                } else {
                    i++;
                    if (self.isAffected(point, moveable, drag)) {
                        affected.push(drag);
                    }
                }
            }
            affected.sort(this.sortByDeepestChild);
            event.stopRespondPropagate = function () {
                propagate = false;
            };
            toBeActivated = affected.slice();
            this.last_active = affected;
            for (j = 0; j < oldLastActive.length; j++) {
                la = oldLastActive[j];
                i = 0;
                while (aff = toBeActivated[i]) {
                    if (la == aff) {
                        toBeActivated.splice(i, 1);
                        break;
                    } else {
                        i++;
                    }
                }
                if (!aff) {
                    this.deactivate(la, moveable, event);
                }
                if (!propagate)
                    return;
            }
            for (var i = 0; i < toBeActivated.length; i++) {
                this.activate(toBeActivated[i], moveable, event);
                if (!propagate)
                    return;
            }
            for (i = 0; i < affected.length; i++) {
                this.move(affected[i], moveable, event);
                if (!propagate)
                    return;
            }
        },
        end: function (event, moveable) {
            var la, endName = this.lowerName + 'end', onEvent = $.Event(this.endName, event), dropData;
            for (var i = 0; i < this.last_active.length; i++) {
                la = this.last_active[i];
                if (this.isAffected(event.vector(), moveable, la) && la[this.endName]) {
                    la.callHandlers(this.endName, null, onEvent, moveable);
                }
                if (onEvent.isPropagationStopped()) {
                    break;
                }
            }
            for (var r = 0; r < this._elements.length; r++) {
                dropData = $.data(this._elements[r], '_dropData');
                dropData && dropData.callHandlers(endName, null, event, moveable);
            }
            this.clear();
        },
        clear: function () {
            this._elements.each(function () {
                $.removeData(this, '_dropData');
            });
            this._elements = $();
            delete this.dragging;
        }
    });
    $.Drag.responder = $.Drop;
    $.extend($.Drop.prototype, {
        callHandlers: function (method, el, ev, drag) {
            var length = this[method] ? this[method].length : 0;
            for (var i = 0; i < length; i++) {
                this[method][i].call(el || this.element[0], ev, this, drag);
            }
        },
        cache: function (value) {
            this._cache = value != null ? value : true;
        },
        cancel: function () {
            this._canceled = true;
        }
    });
    return $;
});
/*jquerypp@2.0.0#event/drag/scroll/scroll*/
define('jquerypp/event/drag/scroll/scroll', [
    'jquery',
    'jquerypp/event/drop/drop'
], function ($) {
    $.Drag.prototype.scrolls = function (elements, options) {
        var elements = $(elements);
        for (var i = 0; i < elements.length; i++) {
            this.constructor.responder._elements.push(elements.eq(i).data('_dropData', new $.Scrollable(elements[i], options))[0]);
        }
    }, $.Scrollable = function (element, options) {
        this.element = jQuery(element);
        this.options = $.extend({
            distance: 30,
            delta: function (diff, distance) {
                return (distance - diff) / 2;
            },
            direction: 'xy',
            delay: 15
        }, options);
        this.x = this.options.direction.indexOf('x') != -1;
        this.y = this.options.direction.indexOf('y') != -1;
    };
    $.extend($.Scrollable.prototype, {
        init: function (element) {
            this.element = jQuery(element);
        },
        callHandlers: function (method, el, ev, drag) {
            this[method](el || this.element[0], ev, this, drag);
        },
        dropover: function () {
        },
        dropon: function () {
            this.clear_timeout();
        },
        dropout: function () {
            this.clear_timeout();
        },
        dropinit: function () {
        },
        dropend: function () {
        },
        clear_timeout: function () {
            if (this.interval) {
                clearTimeout(this.interval);
                this.interval = null;
            }
        },
        distance: function (diff) {
            return (30 - diff) / 2;
        },
        dropmove: function (el, ev, drop, drag) {
            this.clear_timeout();
            var mouse = ev.vector(), location_object = $(el == document.documentElement ? window : el), dimensions = location_object.dimensionsv('outer'), position = location_object.offsetv(), bottom = position.y() + dimensions.y() - mouse.y(), top = mouse.y() - position.y(), right = position.x() + dimensions.x() - mouse.x(), left = mouse.x() - position.x(), dx = 0, dy = 0, distance = this.options.distance;
            if (bottom < distance && this.y) {
                dy = this.options.delta(bottom, distance);
            } else if (top < distance && this.y) {
                dy = -this.options.delta(top, distance);
            }
            if (right < distance && this.options && this.x) {
                dx = this.options.delta(right, distance);
            } else if (left < distance && this.x) {
                dx = -this.options.delta(left, distance);
            }
            if (dx || dy) {
                var self = this;
                this.interval = setTimeout(function () {
                    self.move($(el), drag.movingElement, dx, dy, ev, ev.clientX, ev.clientY, ev.screenX, ev.screenY);
                }, this.options.delay);
            }
        },
        move: function (scroll_element, drag_element, dx, dy, ev) {
            scroll_element.scrollTop(scroll_element.scrollTop() + dy);
            scroll_element.scrollLeft(scroll_element.scrollLeft() + dx);
            drag_element.trigger($.event.fix({
                type: 'mousemove',
                clientX: ev.clientX,
                clientY: ev.clientY,
                screenX: ev.screenX,
                screenY: ev.screenY,
                pageX: ev.pageX,
                pageY: ev.pageY
            }));
        }
    });
    return $;
});
/*jquerypp@2.0.0#event/drag/drag*/
define('jquerypp/event/drag/drag', [
    'jquery',
    'jquerypp/event/drag/core/core',
    'jquerypp/event/drag/step/step',
    'jquerypp/event/drag/limit/limit',
    'jquerypp/event/drag/scroll/scroll'
], function ($) {
    return $;
});
/*[global-shim-end]*/
(function (){
	window._define = window.define;
	window.define = window.define.orig;
	window.System = window.System.orig;
})();