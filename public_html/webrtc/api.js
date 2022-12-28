(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.mxwidgets = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ClientWidgetApi = void 0;

var _events = require("events");

var _PostmessageTransport = require("./transport/PostmessageTransport");

var _WidgetApiDirection = require("./interfaces/WidgetApiDirection");

var _WidgetApiAction = require("./interfaces/WidgetApiAction");

var _Capabilities = require("./interfaces/Capabilities");

var _ApiVersion = require("./interfaces/ApiVersion");

var _WidgetEventCapability = require("./models/WidgetEventCapability");

var _GetOpenIDAction = require("./interfaces/GetOpenIDAction");

var _SimpleObservable = require("./util/SimpleObservable");

var _Symbols = require("./Symbols");

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncIterator(iterable) { var method, async, sync, retry = 2; for ("undefined" != typeof Symbol && (async = Symbol.asyncIterator, sync = Symbol.iterator); retry--;) { if (async && null != (method = iterable[async])) return method.call(iterable); if (sync && null != (method = iterable[sync])) return new AsyncFromSyncIterator(method.call(iterable)); async = "@@asyncIterator", sync = "@@iterator"; } throw new TypeError("Object is not async iterable"); }

function AsyncFromSyncIterator(s) { function AsyncFromSyncIteratorContinuation(r) { if (Object(r) !== r) return Promise.reject(new TypeError(r + " is not an object.")); var done = r.done; return Promise.resolve(r.value).then(function (value) { return { value: value, done: done }; }); } return AsyncFromSyncIterator = function AsyncFromSyncIterator(s) { this.s = s, this.n = s.next; }, AsyncFromSyncIterator.prototype = { s: null, n: null, next: function next() { return AsyncFromSyncIteratorContinuation(this.n.apply(this.s, arguments)); }, "return": function _return(value) { var ret = this.s["return"]; return void 0 === ret ? Promise.resolve({ value: value, done: !0 }) : AsyncFromSyncIteratorContinuation(ret.apply(this.s, arguments)); }, "throw": function _throw(value) { var thr = this.s["return"]; return void 0 === thr ? Promise.reject(value) : AsyncFromSyncIteratorContinuation(thr.apply(this.s, arguments)); } }, new AsyncFromSyncIterator(s); }

/**
 * API handler for the client side of widgets. This raises events
 * for each action received as `action:${action}` (eg: "action:screenshot").
 * Default handling can be prevented by using preventDefault() on the
 * raised event. The default handling varies for each action: ones
 * which the SDK can handle safely are acknowledged appropriately and
 * ones which are unhandled (custom or require the client to do something)
 * are rejected with an error.
 *
 * Events which are preventDefault()ed must reply using the transport.
 * The events raised will have a default of an IWidgetApiRequest
 * interface.
 *
 * When the ClientWidgetApi is ready to start sending requests, it will
 * raise a "ready" CustomEvent. After the ready event fires, actions can
 * be sent and the transport will be ready.
 *
 * When the widget has indicated it has loaded, this class raises a
 * "preparing" CustomEvent. The preparing event does not indicate that
 * the widget is ready to receive communications - that is signified by
 * the ready event exclusively.
 *
 * This class only handles one widget at a time.
 */
var ClientWidgetApi = /*#__PURE__*/function (_EventEmitter) {
  _inherits(ClientWidgetApi, _EventEmitter);

  var _super = _createSuper(ClientWidgetApi);

  // contentLoadedActionSent is used to check that only one ContentLoaded request is send.

  /**
   * Creates a new client widget API. This will instantiate the transport
   * and start everything. When the iframe is loaded under the widget's
   * conditions, a "ready" event will be raised.
   * @param {Widget} widget The widget to communicate with.
   * @param {HTMLIFrameElement} iframe The iframe the widget is in.
   * @param {WidgetDriver} driver The driver for this widget/client.
   */
  function ClientWidgetApi(widget, iframe, driver) {
    var _this;

    _classCallCheck(this, ClientWidgetApi);

    _this = _super.call(this);
    _this.widget = widget;
    _this.iframe = iframe;
    _this.driver = driver;

    _defineProperty(_assertThisInitialized(_this), "transport", void 0);

    _defineProperty(_assertThisInitialized(_this), "contentLoadedActionSent", false);

    _defineProperty(_assertThisInitialized(_this), "allowedCapabilities", new Set());

    _defineProperty(_assertThisInitialized(_this), "allowedEvents", []);

    _defineProperty(_assertThisInitialized(_this), "isStopped", false);

    _defineProperty(_assertThisInitialized(_this), "turnServers", null);

    if (!(iframe !== null && iframe !== void 0 && iframe.contentWindow)) {
      throw new Error("No iframe supplied");
    }

    if (!widget) {
      throw new Error("Invalid widget");
    }

    if (!driver) {
      throw new Error("Invalid driver");
    }

    _this.transport = new _PostmessageTransport.PostmessageTransport(_WidgetApiDirection.WidgetApiDirection.ToWidget, widget.id, iframe.contentWindow, window);
    _this.transport.targetOrigin = widget.origin;

    _this.transport.on("message", _this.handleMessage.bind(_assertThisInitialized(_this)));

    iframe.addEventListener("load", _this.onIframeLoad.bind(_assertThisInitialized(_this)));

    _this.transport.start();

    return _this;
  }

  _createClass(ClientWidgetApi, [{
    key: "hasCapability",
    value: function hasCapability(capability) {
      return this.allowedCapabilities.has(capability);
    }
  }, {
    key: "canUseRoomTimeline",
    value: function canUseRoomTimeline(roomId) {
      return this.hasCapability("org.matrix.msc2762.timeline:".concat(_Symbols.Symbols.AnyRoom)) || this.hasCapability("org.matrix.msc2762.timeline:".concat(roomId));
    }
  }, {
    key: "canSendRoomEvent",
    value: function canSendRoomEvent(eventType) {
      var msgtype = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      return this.allowedEvents.some(function (e) {
        return e.matchesAsRoomEvent(_WidgetEventCapability.EventDirection.Send, eventType, msgtype);
      });
    }
  }, {
    key: "canSendStateEvent",
    value: function canSendStateEvent(eventType, stateKey) {
      return this.allowedEvents.some(function (e) {
        return e.matchesAsStateEvent(_WidgetEventCapability.EventDirection.Send, eventType, stateKey);
      });
    }
  }, {
    key: "canSendToDeviceEvent",
    value: function canSendToDeviceEvent(eventType) {
      return this.allowedEvents.some(function (e) {
        return e.matchesAsToDeviceEvent(_WidgetEventCapability.EventDirection.Send, eventType);
      });
    }
  }, {
    key: "canReceiveRoomEvent",
    value: function canReceiveRoomEvent(eventType) {
      var msgtype = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      return this.allowedEvents.some(function (e) {
        return e.matchesAsRoomEvent(_WidgetEventCapability.EventDirection.Receive, eventType, msgtype);
      });
    }
  }, {
    key: "canReceiveStateEvent",
    value: function canReceiveStateEvent(eventType, stateKey) {
      return this.allowedEvents.some(function (e) {
        return e.matchesAsStateEvent(_WidgetEventCapability.EventDirection.Receive, eventType, stateKey);
      });
    }
  }, {
    key: "canReceiveToDeviceEvent",
    value: function canReceiveToDeviceEvent(eventType) {
      return this.allowedEvents.some(function (e) {
        return e.matchesAsToDeviceEvent(_WidgetEventCapability.EventDirection.Receive, eventType);
      });
    }
  }, {
    key: "stop",
    value: function stop() {
      this.isStopped = true;
      this.transport.stop();
    }
  }, {
    key: "beginCapabilities",
    value: function beginCapabilities() {
      var _this2 = this;

      // widget has loaded - tell all the listeners that
      this.emit("preparing");
      var requestedCaps;
      this.transport.send(_WidgetApiAction.WidgetApiToWidgetAction.Capabilities, {}).then(function (caps) {
        requestedCaps = caps.capabilities;
        return _this2.driver.validateCapabilities(new Set(caps.capabilities));
      }).then(function (allowedCaps) {
        console.log("Widget ".concat(_this2.widget.id, " is allowed capabilities:"), Array.from(allowedCaps));
        _this2.allowedCapabilities = allowedCaps;
        _this2.allowedEvents = _WidgetEventCapability.WidgetEventCapability.findEventCapabilities(allowedCaps);

        _this2.notifyCapabilities(requestedCaps);

        _this2.emit("ready");
      });
    }
  }, {
    key: "notifyCapabilities",
    value: function notifyCapabilities(requested) {
      var _this3 = this;

      this.transport.send(_WidgetApiAction.WidgetApiToWidgetAction.NotifyCapabilities, {
        requested: requested,
        approved: Array.from(this.allowedCapabilities)
      })["catch"](function (e) {
        console.warn("non-fatal error notifying widget of approved capabilities:", e);
      }).then(function () {
        _this3.emit("capabilitiesNotified");
      });
    }
  }, {
    key: "onIframeLoad",
    value: function onIframeLoad(ev) {
      if (this.widget.waitForIframeLoad) {
        // If the widget is set to waitForIframeLoad the capabilities immediatly get setup after load.
        // The client does not wait for the ContentLoaded action.
        this.beginCapabilities();
      } else {
        // Reaching this means, that the Iframe got reloaded/loaded and
        // the clientApi is awaiting the FIRST ContentLoaded action.
        this.contentLoadedActionSent = false;
      }
    }
  }, {
    key: "handleContentLoadedAction",
    value: function handleContentLoadedAction(action) {
      if (this.contentLoadedActionSent) {
        throw new Error("Improper sequence: ContentLoaded Action can only be send once after the widget loaded " + "and should only be used if waitForIframeLoad is false (default=true)");
      }

      if (this.widget.waitForIframeLoad) {
        this.transport.reply(action, {
          error: {
            message: "Improper sequence: not expecting ContentLoaded event if " + "waitForIframLoad is true (default=true)"
          }
        });
      } else {
        this.transport.reply(action, {});
        this.beginCapabilities();
      }

      this.contentLoadedActionSent = true;
    }
  }, {
    key: "replyVersions",
    value: function replyVersions(request) {
      this.transport.reply(request, {
        supported_versions: _ApiVersion.CurrentApiVersions
      });
    }
  }, {
    key: "handleCapabilitiesRenegotiate",
    value: function handleCapabilitiesRenegotiate(request) {
      var _request$data,
          _this4 = this;

      // acknowledge first
      this.transport.reply(request, {});
      var requested = ((_request$data = request.data) === null || _request$data === void 0 ? void 0 : _request$data.capabilities) || [];
      var newlyRequested = new Set(requested.filter(function (r) {
        return !_this4.hasCapability(r);
      }));

      if (newlyRequested.size === 0) {
        // Nothing to do - notify capabilities
        return this.notifyCapabilities([]);
      }

      this.driver.validateCapabilities(newlyRequested).then(function (allowed) {
        allowed.forEach(function (c) {
          return _this4.allowedCapabilities.add(c);
        });

        var allowedEvents = _WidgetEventCapability.WidgetEventCapability.findEventCapabilities(allowed);

        allowedEvents.forEach(function (c) {
          return _this4.allowedEvents.push(c);
        });
        return _this4.notifyCapabilities(Array.from(newlyRequested));
      });
    }
  }, {
    key: "handleNavigate",
    value: function handleNavigate(request) {
      var _request$data2,
          _request$data3,
          _this5 = this;

      if (!this.hasCapability(_Capabilities.MatrixCapabilities.MSC2931Navigate)) {
        return this.transport.reply(request, {
          error: {
            message: "Missing capability"
          }
        });
      }

      if (!((_request$data2 = request.data) !== null && _request$data2 !== void 0 && _request$data2.uri) || !((_request$data3 = request.data) !== null && _request$data3 !== void 0 && _request$data3.uri.toString().startsWith("https://matrix.to/#"))) {
        return this.transport.reply(request, {
          error: {
            message: "Invalid matrix.to URI"
          }
        });
      }

      var onErr = function onErr(e) {
        console.error("[ClientWidgetApi] Failed to handle navigation: ", e);
        return _this5.transport.reply(request, {
          error: {
            message: "Error handling navigation"
          }
        });
      };

      try {
        this.driver.navigate(request.data.uri.toString())["catch"](function (e) {
          return onErr(e);
        }).then(function () {
          return _this5.transport.reply(request, {});
        });
      } catch (e) {
        return onErr(e);
      }
    }
  }, {
    key: "handleOIDC",
    value: function handleOIDC(request) {
      var _this6 = this;

      var phase = 1; // 1 = initial request, 2 = after user manual confirmation

      var replyState = function replyState(state, credential) {
        credential = credential || {};

        if (phase > 1) {
          return _this6.transport.send(_WidgetApiAction.WidgetApiToWidgetAction.OpenIDCredentials, _objectSpread({
            state: state,
            original_request_id: request.requestId
          }, credential));
        } else {
          return _this6.transport.reply(request, _objectSpread({
            state: state
          }, credential));
        }
      };

      var replyError = function replyError(msg) {
        console.error("[ClientWidgetApi] Failed to handle OIDC: ", msg);

        if (phase > 1) {
          // We don't have a way to indicate that a random error happened in this flow, so
          // just block the attempt.
          return replyState(_GetOpenIDAction.OpenIDRequestState.Blocked);
        } else {
          return _this6.transport.reply(request, {
            error: {
              message: msg
            }
          });
        }
      };

      var observer = new _SimpleObservable.SimpleObservable(function (update) {
        if (update.state === _GetOpenIDAction.OpenIDRequestState.PendingUserConfirmation && phase > 1) {
          observer.close();
          return replyError("client provided out-of-phase response to OIDC flow");
        }

        if (update.state === _GetOpenIDAction.OpenIDRequestState.PendingUserConfirmation) {
          replyState(update.state);
          phase++;
          return;
        }

        if (update.state === _GetOpenIDAction.OpenIDRequestState.Allowed && !update.token) {
          return replyError("client provided invalid OIDC token for an allowed request");
        }

        if (update.state === _GetOpenIDAction.OpenIDRequestState.Blocked) {
          update.token = null; // just in case the client did something weird
        }

        observer.close();
        return replyState(update.state, update.token);
      });
      this.driver.askOpenID(observer);
    }
  }, {
    key: "handleReadEvents",
    value: function handleReadEvents(request) {
      var _this7 = this;

      if (!request.data.type) {
        return this.transport.reply(request, {
          error: {
            message: "Invalid request - missing event type"
          }
        });
      }

      if (request.data.limit !== undefined && (!request.data.limit || request.data.limit < 0)) {
        return this.transport.reply(request, {
          error: {
            message: "Invalid request - limit out of range"
          }
        });
      }

      var askRoomIds = null; // null denotes current room only

      if (request.data.room_ids) {
        askRoomIds = request.data.room_ids;

        if (!Array.isArray(askRoomIds)) {
          askRoomIds = [askRoomIds];
        }

        var _iterator2 = _createForOfIteratorHelper(askRoomIds),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var roomId = _step2.value;

            if (!this.canUseRoomTimeline(roomId)) {
              return this.transport.reply(request, {
                error: {
                  message: "Unable to access room timeline: ".concat(roomId)
                }
              });
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }

      var limit = request.data.limit || 0;
      var events = Promise.resolve([]);

      if (request.data.state_key !== undefined) {
        var stateKey = request.data.state_key === true ? undefined : request.data.state_key.toString();

        if (!this.canReceiveStateEvent(request.data.type, stateKey)) {
          return this.transport.reply(request, {
            error: {
              message: "Cannot read state events of this type"
            }
          });
        }

        events = this.driver.readStateEvents(request.data.type, stateKey, limit, askRoomIds);
      } else {
        if (!this.canReceiveRoomEvent(request.data.type, request.data.msgtype)) {
          return this.transport.reply(request, {
            error: {
              message: "Cannot read room events of this type"
            }
          });
        }

        events = this.driver.readRoomEvents(request.data.type, request.data.msgtype, limit, askRoomIds);
      }

      return events.then(function (evs) {
        return _this7.transport.reply(request, {
          events: evs
        });
      });
    }
  }, {
    key: "handleSendEvent",
    value: function handleSendEvent(request) {
      var _this8 = this;

      if (!request.data.type) {
        return this.transport.reply(request, {
          error: {
            message: "Invalid request - missing event type"
          }
        });
      }

      if (!!request.data.room_id && !this.canUseRoomTimeline(request.data.room_id)) {
        return this.transport.reply(request, {
          error: {
            message: "Unable to access room timeline: ".concat(request.data.room_id)
          }
        });
      }

      var isState = request.data.state_key !== null && request.data.state_key !== undefined;
      var sendEventPromise;

      if (isState) {
        if (!this.canSendStateEvent(request.data.type, request.data.state_key)) {
          return this.transport.reply(request, {
            error: {
              message: "Cannot send state events of this type"
            }
          });
        }

        sendEventPromise = this.driver.sendEvent(request.data.type, request.data.content || {}, request.data.state_key, request.data.room_id);
      } else {
        var content = request.data.content || {};
        var msgtype = content['msgtype'];

        if (!this.canSendRoomEvent(request.data.type, msgtype)) {
          return this.transport.reply(request, {
            error: {
              message: "Cannot send room events of this type"
            }
          });
        }

        sendEventPromise = this.driver.sendEvent(request.data.type, content, null, // not sending a state event
        request.data.room_id);
      }

      sendEventPromise.then(function (sentEvent) {
        return _this8.transport.reply(request, {
          room_id: sentEvent.roomId,
          event_id: sentEvent.eventId
        });
      })["catch"](function (e) {
        console.error("error sending event: ", e);
        return _this8.transport.reply(request, {
          error: {
            message: "Error sending event"
          }
        });
      });
    }
  }, {
    key: "handleSendToDevice",
    value: function () {
      var _handleSendToDevice = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(request) {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (request.data.type) {
                  _context.next = 5;
                  break;
                }

                _context.next = 3;
                return this.transport.reply(request, {
                  error: {
                    message: "Invalid request - missing event type"
                  }
                });

              case 3:
                _context.next = 32;
                break;

              case 5:
                if (request.data.messages) {
                  _context.next = 10;
                  break;
                }

                _context.next = 8;
                return this.transport.reply(request, {
                  error: {
                    message: "Invalid request - missing event contents"
                  }
                });

              case 8:
                _context.next = 32;
                break;

              case 10:
                if (!(typeof request.data.encrypted !== "boolean")) {
                  _context.next = 15;
                  break;
                }

                _context.next = 13;
                return this.transport.reply(request, {
                  error: {
                    message: "Invalid request - missing encryption flag"
                  }
                });

              case 13:
                _context.next = 32;
                break;

              case 15:
                if (this.canSendToDeviceEvent(request.data.type)) {
                  _context.next = 20;
                  break;
                }

                _context.next = 18;
                return this.transport.reply(request, {
                  error: {
                    message: "Cannot send to-device events of this type"
                  }
                });

              case 18:
                _context.next = 32;
                break;

              case 20:
                _context.prev = 20;
                _context.next = 23;
                return this.driver.sendToDevice(request.data.type, request.data.encrypted, request.data.messages);

              case 23:
                _context.next = 25;
                return this.transport.reply(request, {});

              case 25:
                _context.next = 32;
                break;

              case 27:
                _context.prev = 27;
                _context.t0 = _context["catch"](20);
                console.error("error sending to-device event", _context.t0);
                _context.next = 32;
                return this.transport.reply(request, {
                  error: {
                    message: "Error sending event"
                  }
                });

              case 32:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[20, 27]]);
      }));

      function handleSendToDevice(_x) {
        return _handleSendToDevice.apply(this, arguments);
      }

      return handleSendToDevice;
    }()
  }, {
    key: "pollTurnServers",
    value: function () {
      var _pollTurnServers = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(turnServers, initialServer) {
        var _iteratorAbruptCompletion, _didIteratorError, _iteratorError, _iterator, _step, server;

        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return this.transport.send(_WidgetApiAction.WidgetApiToWidgetAction.UpdateTurnServers, initialServer // it's compatible, but missing the index signature
                );

              case 3:
                // Pick the generator up where we left off
                _iteratorAbruptCompletion = false;
                _didIteratorError = false;
                _context2.prev = 5;
                _iterator = _asyncIterator(turnServers);

              case 7:
                _context2.next = 9;
                return _iterator.next();

              case 9:
                if (!(_iteratorAbruptCompletion = !(_step = _context2.sent).done)) {
                  _context2.next = 16;
                  break;
                }

                server = _step.value;
                _context2.next = 13;
                return this.transport.send(_WidgetApiAction.WidgetApiToWidgetAction.UpdateTurnServers, server // it's compatible, but missing the index signature
                );

              case 13:
                _iteratorAbruptCompletion = false;
                _context2.next = 7;
                break;

              case 16:
                _context2.next = 22;
                break;

              case 18:
                _context2.prev = 18;
                _context2.t0 = _context2["catch"](5);
                _didIteratorError = true;
                _iteratorError = _context2.t0;

              case 22:
                _context2.prev = 22;
                _context2.prev = 23;

                if (!(_iteratorAbruptCompletion && _iterator["return"] != null)) {
                  _context2.next = 27;
                  break;
                }

                _context2.next = 27;
                return _iterator["return"]();

              case 27:
                _context2.prev = 27;

                if (!_didIteratorError) {
                  _context2.next = 30;
                  break;
                }

                throw _iteratorError;

              case 30:
                return _context2.finish(27);

              case 31:
                return _context2.finish(22);

              case 32:
                _context2.next = 37;
                break;

              case 34:
                _context2.prev = 34;
                _context2.t1 = _context2["catch"](0);
                console.error("error polling for TURN servers", _context2.t1);

              case 37:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 34], [5, 18, 22, 32], [23,, 27, 31]]);
      }));

      function pollTurnServers(_x2, _x3) {
        return _pollTurnServers.apply(this, arguments);
      }

      return pollTurnServers;
    }()
  }, {
    key: "handleWatchTurnServers",
    value: function () {
      var _handleWatchTurnServers = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(request) {
        var turnServers, _yield$turnServers$ne, done, value;

        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (this.hasCapability(_Capabilities.MatrixCapabilities.MSC3846TurnServers)) {
                  _context3.next = 5;
                  break;
                }

                _context3.next = 3;
                return this.transport.reply(request, {
                  error: {
                    message: "Missing capability"
                  }
                });

              case 3:
                _context3.next = 30;
                break;

              case 5:
                if (!this.turnServers) {
                  _context3.next = 10;
                  break;
                }

                _context3.next = 8;
                return this.transport.reply(request, {});

              case 8:
                _context3.next = 30;
                break;

              case 10:
                _context3.prev = 10;
                turnServers = this.driver.getTurnServers(); // Peek at the first result, so we can at least verify that the
                // client isn't banned from getting TURN servers entirely

                _context3.next = 14;
                return turnServers.next();

              case 14:
                _yield$turnServers$ne = _context3.sent;
                done = _yield$turnServers$ne.done;
                value = _yield$turnServers$ne.value;

                if (!done) {
                  _context3.next = 19;
                  break;
                }

                throw new Error("Client refuses to provide any TURN servers");

              case 19:
                _context3.next = 21;
                return this.transport.reply(request, {});

              case 21:
                // Start the poll loop, sending the widget the initial result
                this.pollTurnServers(turnServers, value);
                this.turnServers = turnServers;
                _context3.next = 30;
                break;

              case 25:
                _context3.prev = 25;
                _context3.t0 = _context3["catch"](10);
                console.error("error getting first TURN server results", _context3.t0);
                _context3.next = 30;
                return this.transport.reply(request, {
                  error: {
                    message: "TURN servers not available"
                  }
                });

              case 30:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[10, 25]]);
      }));

      function handleWatchTurnServers(_x4) {
        return _handleWatchTurnServers.apply(this, arguments);
      }

      return handleWatchTurnServers;
    }()
  }, {
    key: "handleUnwatchTurnServers",
    value: function () {
      var _handleUnwatchTurnServers = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(request) {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (this.hasCapability(_Capabilities.MatrixCapabilities.MSC3846TurnServers)) {
                  _context4.next = 5;
                  break;
                }

                _context4.next = 3;
                return this.transport.reply(request, {
                  error: {
                    message: "Missing capability"
                  }
                });

              case 3:
                _context4.next = 15;
                break;

              case 5:
                if (this.turnServers) {
                  _context4.next = 10;
                  break;
                }

                _context4.next = 8;
                return this.transport.reply(request, {});

              case 8:
                _context4.next = 15;
                break;

              case 10:
                _context4.next = 12;
                return this.turnServers["return"](undefined);

              case 12:
                this.turnServers = null;
                _context4.next = 15;
                return this.transport.reply(request, {});

              case 15:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function handleUnwatchTurnServers(_x5) {
        return _handleUnwatchTurnServers.apply(this, arguments);
      }

      return handleUnwatchTurnServers;
    }()
  }, {
    key: "handleReadRelations",
    value: function () {
      var _handleReadRelations = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(request) {
        var _this9 = this;

        var result, chunk;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (request.data.event_id) {
                  _context5.next = 2;
                  break;
                }

                return _context5.abrupt("return", this.transport.reply(request, {
                  error: {
                    message: "Invalid request - missing event ID"
                  }
                }));

              case 2:
                if (!(request.data.limit !== undefined && request.data.limit < 0)) {
                  _context5.next = 4;
                  break;
                }

                return _context5.abrupt("return", this.transport.reply(request, {
                  error: {
                    message: "Invalid request - limit out of range"
                  }
                }));

              case 4:
                if (!(request.data.room_id !== undefined && !this.canUseRoomTimeline(request.data.room_id))) {
                  _context5.next = 6;
                  break;
                }

                return _context5.abrupt("return", this.transport.reply(request, {
                  error: {
                    message: "Unable to access room timeline: ".concat(request.data.room_id)
                  }
                }));

              case 6:
                _context5.prev = 6;
                _context5.next = 9;
                return this.driver.readEventRelations(request.data.event_id, request.data.room_id, request.data.rel_type, request.data.event_type, request.data.from, request.data.to, request.data.limit, request.data.direction);

              case 9:
                result = _context5.sent;
                // only return events that the user has the permission to receive
                chunk = result.chunk.filter(function (e) {
                  if (e.state_key !== undefined) {
                    return _this9.canReceiveStateEvent(e.type, e.state_key);
                  } else {
                    return _this9.canReceiveRoomEvent(e.type, e.content['msgtype']);
                  }
                });
                return _context5.abrupt("return", this.transport.reply(request, {
                  chunk: chunk,
                  prev_batch: result.prevBatch,
                  next_batch: result.nextBatch
                }));

              case 14:
                _context5.prev = 14;
                _context5.t0 = _context5["catch"](6);
                console.error("error getting the relations", _context5.t0);
                _context5.next = 19;
                return this.transport.reply(request, {
                  error: {
                    message: "Unexpected error while reading relations"
                  }
                });

              case 19:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[6, 14]]);
      }));

      function handleReadRelations(_x6) {
        return _handleReadRelations.apply(this, arguments);
      }

      return handleReadRelations;
    }()
  }, {
    key: "handleMessage",
    value: function handleMessage(ev) {
      if (this.isStopped) return;
      var actionEv = new CustomEvent("action:".concat(ev.detail.action), {
        detail: ev.detail,
        cancelable: true
      });
      this.emit("action:".concat(ev.detail.action), actionEv);

      if (!actionEv.defaultPrevented) {
        switch (ev.detail.action) {
          case _WidgetApiAction.WidgetApiFromWidgetAction.ContentLoaded:
            return this.handleContentLoadedAction(ev.detail);

          case _WidgetApiAction.WidgetApiFromWidgetAction.SupportedApiVersions:
            return this.replyVersions(ev.detail);

          case _WidgetApiAction.WidgetApiFromWidgetAction.SendEvent:
            return this.handleSendEvent(ev.detail);

          case _WidgetApiAction.WidgetApiFromWidgetAction.SendToDevice:
            return this.handleSendToDevice(ev.detail);

          case _WidgetApiAction.WidgetApiFromWidgetAction.GetOpenIDCredentials:
            return this.handleOIDC(ev.detail);

          case _WidgetApiAction.WidgetApiFromWidgetAction.MSC2931Navigate:
            return this.handleNavigate(ev.detail);

          case _WidgetApiAction.WidgetApiFromWidgetAction.MSC2974RenegotiateCapabilities:
            return this.handleCapabilitiesRenegotiate(ev.detail);

          case _WidgetApiAction.WidgetApiFromWidgetAction.MSC2876ReadEvents:
            return this.handleReadEvents(ev.detail);

          case _WidgetApiAction.WidgetApiFromWidgetAction.WatchTurnServers:
            return this.handleWatchTurnServers(ev.detail);

          case _WidgetApiAction.WidgetApiFromWidgetAction.UnwatchTurnServers:
            return this.handleUnwatchTurnServers(ev.detail);

          case _WidgetApiAction.WidgetApiFromWidgetAction.MSC3869ReadRelations:
            return this.handleReadRelations(ev.detail);

          default:
            return this.transport.reply(ev.detail, {
              error: {
                message: "Unknown or unsupported action: " + ev.detail.action
              }
            });
        }
      }
    }
    /**
     * Takes a screenshot of the widget.
     * @returns Resolves to the widget's screenshot.
     * @throws Throws if there is a problem.
     */

  }, {
    key: "takeScreenshot",
    value: function takeScreenshot() {
      return this.transport.send(_WidgetApiAction.WidgetApiToWidgetAction.TakeScreenshot, {});
    }
    /**
     * Alerts the widget to whether or not it is currently visible.
     * @param {boolean} isVisible Whether the widget is visible or not.
     * @returns {Promise<IWidgetApiResponseData>} Resolves when the widget acknowledges the update.
     */

  }, {
    key: "updateVisibility",
    value: function updateVisibility(isVisible) {
      return this.transport.send(_WidgetApiAction.WidgetApiToWidgetAction.UpdateVisibility, {
        visible: isVisible
      });
    }
  }, {
    key: "sendWidgetConfig",
    value: function sendWidgetConfig(data) {
      return this.transport.send(_WidgetApiAction.WidgetApiToWidgetAction.WidgetConfig, data).then();
    }
  }, {
    key: "notifyModalWidgetButtonClicked",
    value: function notifyModalWidgetButtonClicked(id) {
      return this.transport.send(_WidgetApiAction.WidgetApiToWidgetAction.ButtonClicked, {
        id: id
      }).then();
    }
  }, {
    key: "notifyModalWidgetClose",
    value: function notifyModalWidgetClose(data) {
      return this.transport.send(_WidgetApiAction.WidgetApiToWidgetAction.CloseModalWidget, data).then();
    }
    /**
     * Feeds an event to the widget. If the widget is not able to accept the event due to
     * permissions, this will no-op and return calmly. If the widget failed to handle the
     * event, this will raise an error.
     * @param {IRoomEvent} rawEvent The event to (try to) send to the widget.
     * @param {string} currentViewedRoomId The room ID the user is currently interacting with.
     * Not the room ID of the event.
     * @returns {Promise<void>} Resolves when complete, rejects if there was an error sending.
     */

  }, {
    key: "feedEvent",
    value: function () {
      var _feedEvent = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(rawEvent, currentViewedRoomId) {
        var _rawEvent$content;

        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                if (!(rawEvent.room_id !== currentViewedRoomId && !this.canUseRoomTimeline(rawEvent.room_id))) {
                  _context6.next = 2;
                  break;
                }

                return _context6.abrupt("return");

              case 2:
                if (!(rawEvent.state_key !== undefined && rawEvent.state_key !== null)) {
                  _context6.next = 7;
                  break;
                }

                if (this.canReceiveStateEvent(rawEvent.type, rawEvent.state_key)) {
                  _context6.next = 5;
                  break;
                }

                return _context6.abrupt("return");

              case 5:
                _context6.next = 9;
                break;

              case 7:
                if (this.canReceiveRoomEvent(rawEvent.type, (_rawEvent$content = rawEvent.content) === null || _rawEvent$content === void 0 ? void 0 : _rawEvent$content["msgtype"])) {
                  _context6.next = 9;
                  break;
                }

                return _context6.abrupt("return");

              case 9:
                _context6.next = 11;
                return this.transport.send(_WidgetApiAction.WidgetApiToWidgetAction.SendEvent, rawEvent // it's compatible, but missing the index signature
                );

              case 11:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function feedEvent(_x7, _x8) {
        return _feedEvent.apply(this, arguments);
      }

      return feedEvent;
    }()
    /**
     * Feeds a to-device event to the widget. If the widget is not able to accept the
     * event due to permissions, this will no-op and return calmly. If the widget failed
     * to handle the event, this will raise an error.
     * @param {IRoomEvent} rawEvent The event to (try to) send to the widget.
     * @param {boolean} encrypted Whether the event contents were encrypted.
     * @returns {Promise<void>} Resolves when complete, rejects if there was an error sending.
     */

  }, {
    key: "feedToDevice",
    value: function () {
      var _feedToDevice = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(rawEvent, encrypted) {
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                if (!this.canReceiveToDeviceEvent(rawEvent.type)) {
                  _context7.next = 3;
                  break;
                }

                _context7.next = 3;
                return this.transport.send(_WidgetApiAction.WidgetApiToWidgetAction.SendToDevice, // it's compatible, but missing the index signature
                _objectSpread(_objectSpread({}, rawEvent), {}, {
                  encrypted: encrypted
                }));

              case 3:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function feedToDevice(_x9, _x10) {
        return _feedToDevice.apply(this, arguments);
      }

      return feedToDevice;
    }()
  }]);

  return ClientWidgetApi;
}(_events.EventEmitter);

exports.ClientWidgetApi = ClientWidgetApi;
},{"./Symbols":2,"./interfaces/ApiVersion":6,"./interfaces/Capabilities":7,"./interfaces/GetOpenIDAction":10,"./interfaces/WidgetApiAction":34,"./interfaces/WidgetApiDirection":35,"./models/WidgetEventCapability":40,"./transport/PostmessageTransport":46,"./util/SimpleObservable":47,"events":48}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Symbols = void 0;

/*
 * Copyright 2021 The Matrix.org Foundation C.I.C.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Symbols;
exports.Symbols = Symbols;

(function (Symbols) {
  Symbols["AnyRoom"] = "*";
})(Symbols || (exports.Symbols = Symbols = {}));
},{}],3:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WidgetApi = void 0;

var _events = require("events");

var _WidgetApiDirection = require("./interfaces/WidgetApiDirection");

var _ApiVersion = require("./interfaces/ApiVersion");

var _PostmessageTransport = require("./transport/PostmessageTransport");

var _WidgetApiAction = require("./interfaces/WidgetApiAction");

var _GetOpenIDAction = require("./interfaces/GetOpenIDAction");

var _WidgetType = require("./interfaces/WidgetType");

var _ModalWidgetActions = require("./interfaces/ModalWidgetActions");

var _WidgetEventCapability = require("./models/WidgetEventCapability");

var _Symbols = require("./Symbols");

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _awaitAsyncGenerator(value) { return new _AwaitValue(value); }

function _wrapAsyncGenerator(fn) { return function () { return new _AsyncGenerator(fn.apply(this, arguments)); }; }

function _AsyncGenerator(gen) { var front, back; function send(key, arg) { return new Promise(function (resolve, reject) { var request = { key: key, arg: arg, resolve: resolve, reject: reject, next: null }; if (back) { back = back.next = request; } else { front = back = request; resume(key, arg); } }); } function resume(key, arg) { try { var result = gen[key](arg); var value = result.value; var wrappedAwait = value instanceof _AwaitValue; Promise.resolve(wrappedAwait ? value.wrapped : value).then(function (arg) { if (wrappedAwait) { resume(key === "return" ? "return" : "next", arg); return; } settle(result.done ? "return" : "normal", arg); }, function (err) { resume("throw", err); }); } catch (err) { settle("throw", err); } } function settle(type, value) { switch (type) { case "return": front.resolve({ value: value, done: true }); break; case "throw": front.reject(value); break; default: front.resolve({ value: value, done: false }); break; } front = front.next; if (front) { resume(front.key, front.arg); } else { back = null; } } this._invoke = send; if (typeof gen["return"] !== "function") { this["return"] = undefined; } }

_AsyncGenerator.prototype[typeof Symbol === "function" && Symbol.asyncIterator || "@@asyncIterator"] = function () { return this; };

_AsyncGenerator.prototype.next = function (arg) { return this._invoke("next", arg); };

_AsyncGenerator.prototype["throw"] = function (arg) { return this._invoke("throw", arg); };

_AsyncGenerator.prototype["return"] = function (arg) { return this._invoke("return", arg); };

function _AwaitValue(value) { this.wrapped = value; }

/**
 * API handler for widgets. This raises events for each action
 * received as `action:${action}` (eg: "action:screenshot").
 * Default handling can be prevented by using preventDefault()
 * on the raised event. The default handling varies for each
 * action: ones which the SDK can handle safely are acknowledged
 * appropriately and ones which are unhandled (custom or require
 * the widget to do something) are rejected with an error.
 *
 * Events which are preventDefault()ed must reply using the
 * transport. The events raised will have a detail of an
 * IWidgetApiRequest interface.
 *
 * When the WidgetApi is ready to start sending requests, it will
 * raise a "ready" CustomEvent. After the ready event fires, actions
 * can be sent and the transport will be ready.
 */
var WidgetApi = /*#__PURE__*/function (_EventEmitter) {
  _inherits(WidgetApi, _EventEmitter);

  var _super = _createSuper(WidgetApi);

  /**
   * Creates a new API handler for the given widget.
   * @param {string} widgetId The widget ID to listen for. If not supplied then
   * the API will use the widget ID from the first valid request it receives.
   * @param {string} clientOrigin The origin of the client, or null if not known.
   */
  function WidgetApi() {
    var _this2;

    var widgetId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var clientOrigin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    _classCallCheck(this, WidgetApi);

    _this2 = _super.call(this);
    _this2.clientOrigin = clientOrigin;

    _defineProperty(_assertThisInitialized(_this2), "transport", void 0);

    _defineProperty(_assertThisInitialized(_this2), "capabilitiesFinished", false);

    _defineProperty(_assertThisInitialized(_this2), "supportsMSC2974Renegotiate", false);

    _defineProperty(_assertThisInitialized(_this2), "requestedCapabilities", []);

    _defineProperty(_assertThisInitialized(_this2), "approvedCapabilities", void 0);

    _defineProperty(_assertThisInitialized(_this2), "cachedClientVersions", void 0);

    _defineProperty(_assertThisInitialized(_this2), "turnServerWatchers", 0);

    if (!window.parent) {
      throw new Error("No parent window. This widget doesn't appear to be embedded properly.");
    }

    _this2.transport = new _PostmessageTransport.PostmessageTransport(_WidgetApiDirection.WidgetApiDirection.FromWidget, widgetId, window.parent, window);
    _this2.transport.targetOrigin = clientOrigin;

    _this2.transport.on("message", _this2.handleMessage.bind(_assertThisInitialized(_this2)));

    return _this2;
  }
  /**
   * Determines if the widget was granted a particular capability. Note that on
   * clients where the capabilities are not fed back to the widget this function
   * will rely on requested capabilities instead.
   * @param {Capability} capability The capability to check for approval of.
   * @returns {boolean} True if the widget has approval for the given capability.
   */


  _createClass(WidgetApi, [{
    key: "hasCapability",
    value: function hasCapability(capability) {
      if (Array.isArray(this.approvedCapabilities)) {
        return this.approvedCapabilities.includes(capability);
      }

      return this.requestedCapabilities.includes(capability);
    }
    /**
     * Request a capability from the client. It is not guaranteed to be allowed,
     * but will be asked for.
     * @param {Capability} capability The capability to request.
     * @throws Throws if the capabilities negotiation has already started and the
     * widget is unable to request additional capabilities.
     */

  }, {
    key: "requestCapability",
    value: function requestCapability(capability) {
      if (this.capabilitiesFinished && !this.supportsMSC2974Renegotiate) {
        throw new Error("Capabilities have already been negotiated");
      }

      this.requestedCapabilities.push(capability);
    }
    /**
     * Request capabilities from the client. They are not guaranteed to be allowed,
     * but will be asked for if the negotiation has not already happened.
     * @param {Capability[]} capabilities The capabilities to request.
     * @throws Throws if the capabilities negotiation has already started.
     */

  }, {
    key: "requestCapabilities",
    value: function requestCapabilities(capabilities) {
      var _this3 = this;

      capabilities.forEach(function (cap) {
        return _this3.requestCapability(cap);
      });
    }
    /**
     * Requests the capability to interact with rooms other than the user's currently
     * viewed room. Applies to event receiving and sending.
     * @param {string | Symbols.AnyRoom} roomId The room ID, or `Symbols.AnyRoom` to
     * denote all known rooms.
     */

  }, {
    key: "requestCapabilityForRoomTimeline",
    value: function requestCapabilityForRoomTimeline(roomId) {
      this.requestCapability("org.matrix.msc2762.timeline:".concat(roomId));
    }
    /**
     * Requests the capability to send a given state event with optional explicit
     * state key. It is not guaranteed to be allowed, but will be asked for if the
     * negotiation has not already happened.
     * @param {string} eventType The state event type to ask for.
     * @param {string} stateKey If specified, the specific state key to request.
     * Otherwise all state keys will be requested.
     */

  }, {
    key: "requestCapabilityToSendState",
    value: function requestCapabilityToSendState(eventType, stateKey) {
      this.requestCapability(_WidgetEventCapability.WidgetEventCapability.forStateEvent(_WidgetEventCapability.EventDirection.Send, eventType, stateKey).raw);
    }
    /**
     * Requests the capability to receive a given state event with optional explicit
     * state key. It is not guaranteed to be allowed, but will be asked for if the
     * negotiation has not already happened.
     * @param {string} eventType The state event type to ask for.
     * @param {string} stateKey If specified, the specific state key to request.
     * Otherwise all state keys will be requested.
     */

  }, {
    key: "requestCapabilityToReceiveState",
    value: function requestCapabilityToReceiveState(eventType, stateKey) {
      this.requestCapability(_WidgetEventCapability.WidgetEventCapability.forStateEvent(_WidgetEventCapability.EventDirection.Receive, eventType, stateKey).raw);
    }
    /**
     * Requests the capability to send a given to-device event. It is not
     * guaranteed to be allowed, but will be asked for if the negotiation has
     * not already happened.
     * @param {string} eventType The room event type to ask for.
     */

  }, {
    key: "requestCapabilityToSendToDevice",
    value: function requestCapabilityToSendToDevice(eventType) {
      this.requestCapability(_WidgetEventCapability.WidgetEventCapability.forToDeviceEvent(_WidgetEventCapability.EventDirection.Send, eventType).raw);
    }
    /**
     * Requests the capability to receive a given to-device event. It is not
     * guaranteed to be allowed, but will be asked for if the negotiation has
     * not already happened.
     * @param {string} eventType The room event type to ask for.
     */

  }, {
    key: "requestCapabilityToReceiveToDevice",
    value: function requestCapabilityToReceiveToDevice(eventType) {
      this.requestCapability(_WidgetEventCapability.WidgetEventCapability.forToDeviceEvent(_WidgetEventCapability.EventDirection.Receive, eventType).raw);
    }
    /**
     * Requests the capability to send a given room event. It is not guaranteed to be
     * allowed, but will be asked for if the negotiation has not already happened.
     * @param {string} eventType The room event type to ask for.
     */

  }, {
    key: "requestCapabilityToSendEvent",
    value: function requestCapabilityToSendEvent(eventType) {
      this.requestCapability(_WidgetEventCapability.WidgetEventCapability.forRoomEvent(_WidgetEventCapability.EventDirection.Send, eventType).raw);
    }
    /**
     * Requests the capability to receive a given room event. It is not guaranteed to be
     * allowed, but will be asked for if the negotiation has not already happened.
     * @param {string} eventType The room event type to ask for.
     */

  }, {
    key: "requestCapabilityToReceiveEvent",
    value: function requestCapabilityToReceiveEvent(eventType) {
      this.requestCapability(_WidgetEventCapability.WidgetEventCapability.forRoomEvent(_WidgetEventCapability.EventDirection.Receive, eventType).raw);
    }
    /**
     * Requests the capability to send a given message event with optional explicit
     * `msgtype`. It is not guaranteed to be allowed, but will be asked for if the
     * negotiation has not already happened.
     * @param {string} msgtype If specified, the specific msgtype to request.
     * Otherwise all message types will be requested.
     */

  }, {
    key: "requestCapabilityToSendMessage",
    value: function requestCapabilityToSendMessage(msgtype) {
      this.requestCapability(_WidgetEventCapability.WidgetEventCapability.forRoomMessageEvent(_WidgetEventCapability.EventDirection.Send, msgtype).raw);
    }
    /**
     * Requests the capability to receive a given message event with optional explicit
     * `msgtype`. It is not guaranteed to be allowed, but will be asked for if the
     * negotiation has not already happened.
     * @param {string} msgtype If specified, the specific msgtype to request.
     * Otherwise all message types will be requested.
     */

  }, {
    key: "requestCapabilityToReceiveMessage",
    value: function requestCapabilityToReceiveMessage(msgtype) {
      this.requestCapability(_WidgetEventCapability.WidgetEventCapability.forRoomMessageEvent(_WidgetEventCapability.EventDirection.Receive, msgtype).raw);
    }
    /**
     * Requests an OpenID Connect token from the client for the currently logged in
     * user. This token can be validated server-side with the federation API. Note
     * that the widget is responsible for validating the token and caching any results
     * it needs.
     * @returns {Promise<IOpenIDCredentials>} Resolves to a token for verification.
     * @throws Throws if the user rejected the request or the request failed.
     */

  }, {
    key: "requestOpenIDConnectToken",
    value: function requestOpenIDConnectToken() {
      var _this4 = this;

      return new Promise(function (resolve, reject) {
        _this4.transport.sendComplete(_WidgetApiAction.WidgetApiFromWidgetAction.GetOpenIDCredentials, {}).then(function (response) {
          var rdata = response.response;

          if (rdata.state === _GetOpenIDAction.OpenIDRequestState.Allowed) {
            resolve(rdata);
          } else if (rdata.state === _GetOpenIDAction.OpenIDRequestState.Blocked) {
            reject(new Error("User declined to verify their identity"));
          } else if (rdata.state === _GetOpenIDAction.OpenIDRequestState.PendingUserConfirmation) {
            var handlerFn = function handlerFn(ev) {
              ev.preventDefault();
              var request = ev.detail;
              if (request.data.original_request_id !== response.requestId) return;

              if (request.data.state === _GetOpenIDAction.OpenIDRequestState.Allowed) {
                resolve(request.data);

                _this4.transport.reply(request, {}); // ack

              } else if (request.data.state === _GetOpenIDAction.OpenIDRequestState.Blocked) {
                reject(new Error("User declined to verify their identity"));

                _this4.transport.reply(request, {}); // ack

              } else {
                reject(new Error("Invalid state on reply: " + rdata.state));

                _this4.transport.reply(request, {
                  error: {
                    message: "Invalid state"
                  }
                });
              }

              _this4.off("action:".concat(_WidgetApiAction.WidgetApiToWidgetAction.OpenIDCredentials), handlerFn);
            };

            _this4.on("action:".concat(_WidgetApiAction.WidgetApiToWidgetAction.OpenIDCredentials), handlerFn);
          } else {
            reject(new Error("Invalid state: " + rdata.state));
          }
        })["catch"](reject);
      });
    }
    /**
     * Asks the client for additional capabilities. Capabilities can be queued for this
     * request with the requestCapability() functions.
     * @returns {Promise<void>} Resolves when complete. Note that the promise resolves when
     * the capabilities request has gone through, not when the capabilities are approved/denied.
     * Use the WidgetApiToWidgetAction.NotifyCapabilities action to detect changes.
     */

  }, {
    key: "updateRequestedCapabilities",
    value: function updateRequestedCapabilities() {
      return this.transport.send(_WidgetApiAction.WidgetApiFromWidgetAction.MSC2974RenegotiateCapabilities, {
        capabilities: this.requestedCapabilities
      }).then();
    }
    /**
     * Tell the client that the content has been loaded.
     * @returns {Promise} Resolves when the client acknowledges the request.
     */

  }, {
    key: "sendContentLoaded",
    value: function sendContentLoaded() {
      return this.transport.send(_WidgetApiAction.WidgetApiFromWidgetAction.ContentLoaded, {}).then();
    }
    /**
     * Sends a sticker to the client.
     * @param {IStickerActionRequestData} sticker The sticker to send.
     * @returns {Promise} Resolves when the client acknowledges the request.
     */

  }, {
    key: "sendSticker",
    value: function sendSticker(sticker) {
      return this.transport.send(_WidgetApiAction.WidgetApiFromWidgetAction.SendSticker, sticker).then();
    }
    /**
     * Asks the client to set the always-on-screen status for this widget.
     * @param {boolean} value The new state to request.
     * @returns {Promise<boolean>} Resolve with true if the client was able to fulfill
     * the request, resolves to false otherwise. Rejects if an error occurred.
     */

  }, {
    key: "setAlwaysOnScreen",
    value: function setAlwaysOnScreen(value) {
      return this.transport.send(_WidgetApiAction.WidgetApiFromWidgetAction.UpdateAlwaysOnScreen, {
        value: value
      }).then(function (res) {
        return res.success;
      });
    }
    /**
     * Opens a modal widget.
     * @param {string} url The URL to the modal widget.
     * @param {string} name The name of the widget.
     * @param {IModalWidgetOpenRequestDataButton[]} buttons The buttons to have on the widget.
     * @param {IModalWidgetCreateData} data Data to supply to the modal widget.
     * @param {WidgetType} type The type of modal widget.
     * @returns {Promise<void>} Resolves when the modal widget has been opened.
     */

  }, {
    key: "openModalWidget",
    value: function openModalWidget(url, name) {
      var buttons = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      var data = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      var type = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : _WidgetType.MatrixWidgetType.Custom;
      return this.transport.send(_WidgetApiAction.WidgetApiFromWidgetAction.OpenModalWidget, {
        type: type,
        url: url,
        name: name,
        buttons: buttons,
        data: data
      }).then();
    }
    /**
     * Closes the modal widget. The widget's session will be terminated shortly after.
     * @param {IModalWidgetReturnData} data Optional data to close the modal widget with.
     * @returns {Promise<void>} Resolves when complete.
     */

  }, {
    key: "closeModalWidget",
    value: function closeModalWidget() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.transport.send(_WidgetApiAction.WidgetApiFromWidgetAction.CloseModalWidget, data).then();
    }
  }, {
    key: "sendRoomEvent",
    value: function sendRoomEvent(eventType, content, roomId) {
      return this.transport.send(_WidgetApiAction.WidgetApiFromWidgetAction.SendEvent, {
        type: eventType,
        content: content,
        room_id: roomId
      });
    }
  }, {
    key: "sendStateEvent",
    value: function sendStateEvent(eventType, stateKey, content, roomId) {
      return this.transport.send(_WidgetApiAction.WidgetApiFromWidgetAction.SendEvent, {
        type: eventType,
        content: content,
        state_key: stateKey,
        room_id: roomId
      });
    }
    /**
     * Sends a to-device event.
     * @param {string} eventType The type of events being sent.
     * @param {boolean} encrypted Whether to encrypt the message contents.
     * @param {Object} contentMap A map from user IDs to device IDs to message contents.
     * @returns {Promise<ISendToDeviceFromWidgetResponseData>} Resolves when complete.
     */

  }, {
    key: "sendToDevice",
    value: function sendToDevice(eventType, encrypted, contentMap) {
      return this.transport.send(_WidgetApiAction.WidgetApiFromWidgetAction.SendToDevice, {
        type: eventType,
        encrypted: encrypted,
        messages: contentMap
      });
    }
  }, {
    key: "readRoomEvents",
    value: function readRoomEvents(eventType, limit, msgtype, roomIds) {
      var data = {
        type: eventType,
        msgtype: msgtype
      };

      if (limit !== undefined) {
        data.limit = limit;
      }

      if (roomIds) {
        if (roomIds.includes(_Symbols.Symbols.AnyRoom)) {
          data.room_ids = _Symbols.Symbols.AnyRoom;
        } else {
          data.room_ids = roomIds;
        }
      }

      return this.transport.send(_WidgetApiAction.WidgetApiFromWidgetAction.MSC2876ReadEvents, data).then(function (r) {
        return r.events;
      });
    }
    /**
     * Reads all related events given a known eventId.
     * @param eventId The id of the parent event to be read.
     * @param roomId The room to look within. When undefined, the user's currently
     * viewed room.
     * @param relationType The relationship type of child events to search for.
     * When undefined, all relations are returned.
     * @param eventType The event type of child events to search for. When undefined,
     * all related events are returned.
     * @param limit The maximum number of events to retrieve per room. If not
     * supplied, the server will apply a default limit.
     * @param from The pagination token to start returning results from, as
     * received from a previous call. If not supplied, results start at the most
     * recent topological event known to the server.
     * @param to The pagination token to stop returning results at. If not
     * supplied, results continue up to limit or until there are no more events.
     * @param direction The direction to search for according to MSC3715.
     * @returns Resolves to the room relations.
     */

  }, {
    key: "readEventRelations",
    value: function () {
      var _readEventRelations = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(eventId, roomId, relationType, eventType, limit, from, to, direction) {
        var versions, data;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.getClientVersions();

              case 2:
                versions = _context.sent;

                if (versions.includes(_ApiVersion.UnstableApiVersion.MSC3869)) {
                  _context.next = 5;
                  break;
                }

                throw new Error("The read_relations action is not supported by the client.");

              case 5:
                data = {
                  event_id: eventId,
                  rel_type: relationType,
                  event_type: eventType,
                  room_id: roomId,
                  to: to,
                  from: from,
                  limit: limit,
                  direction: direction
                };
                return _context.abrupt("return", this.transport.send(_WidgetApiAction.WidgetApiFromWidgetAction.MSC3869ReadRelations, data));

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function readEventRelations(_x, _x2, _x3, _x4, _x5, _x6, _x7, _x8) {
        return _readEventRelations.apply(this, arguments);
      }

      return readEventRelations;
    }()
  }, {
    key: "readStateEvents",
    value: function readStateEvents(eventType, limit, stateKey, roomIds) {
      var data = {
        type: eventType,
        state_key: stateKey === undefined ? true : stateKey
      };

      if (limit !== undefined) {
        data.limit = limit;
      }

      if (roomIds) {
        if (roomIds.includes(_Symbols.Symbols.AnyRoom)) {
          data.room_ids = _Symbols.Symbols.AnyRoom;
        } else {
          data.room_ids = roomIds;
        }
      }

      return this.transport.send(_WidgetApiAction.WidgetApiFromWidgetAction.MSC2876ReadEvents, data).then(function (r) {
        return r.events;
      });
    }
    /**
     * Sets a button as disabled or enabled on the modal widget. Buttons are enabled by default.
     * @param {ModalButtonID} buttonId The button ID to enable/disable.
     * @param {boolean} isEnabled Whether or not the button is enabled.
     * @returns {Promise<void>} Resolves when complete.
     * @throws Throws if the button cannot be disabled, or the client refuses to disable the button.
     */

  }, {
    key: "setModalButtonEnabled",
    value: function setModalButtonEnabled(buttonId, isEnabled) {
      if (buttonId === _ModalWidgetActions.BuiltInModalButtonID.Close) {
        throw new Error("The close button cannot be disabled");
      }

      return this.transport.send(_WidgetApiAction.WidgetApiFromWidgetAction.SetModalButtonEnabled, {
        button: buttonId,
        enabled: isEnabled
      }).then();
    }
    /**
     * Attempts to navigate the client to the given URI. This can only be called with Matrix URIs
     * (currently only matrix.to, but in future a Matrix URI scheme will be defined).
     * @param {string} uri The URI to navigate to.
     * @returns {Promise<void>} Resolves when complete.
     * @throws Throws if the URI is invalid or cannot be processed.
     * @deprecated This currently relies on an unstable MSC (MSC2931).
     */

  }, {
    key: "navigateTo",
    value: function navigateTo(uri) {
      if (!uri || !uri.startsWith("https://matrix.to/#")) {
        throw new Error("Invalid matrix.to URI");
      }

      return this.transport.send(_WidgetApiAction.WidgetApiFromWidgetAction.MSC2931Navigate, {
        uri: uri
      }).then();
    }
    /**
     * Starts watching for TURN servers, yielding an initial set of credentials as soon as possible,
     * and thereafter yielding new credentials whenever the previous ones expire.
     * @yields {ITurnServer} The TURN server URIs and credentials currently available to the widget.
     */

  }, {
    key: "getTurnServers",
    value: function getTurnServers() {
      var _this = this;

      return _wrapAsyncGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var setTurnServer, onUpdateTurnServers;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                onUpdateTurnServers = /*#__PURE__*/function () {
                  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(ev) {
                    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            ev.preventDefault();
                            setTurnServer(ev.detail.data);
                            _context2.next = 4;
                            return _this.transport.reply(ev.detail, {});

                          case 4:
                          case "end":
                            return _context2.stop();
                        }
                      }
                    }, _callee2);
                  }));

                  return function onUpdateTurnServers(_x9) {
                    return _ref.apply(this, arguments);
                  };
                }(); // Start listening for updates before we even start watching, to catch
                // TURN data that is sent immediately


                _this.on("action:".concat(_WidgetApiAction.WidgetApiToWidgetAction.UpdateTurnServers), onUpdateTurnServers); // Only send the 'watch' action if we aren't already watching


                if (!(_this.turnServerWatchers === 0)) {
                  _context3.next = 12;
                  break;
                }

                _context3.prev = 3;
                _context3.next = 6;
                return _awaitAsyncGenerator(_this.transport.send(_WidgetApiAction.WidgetApiFromWidgetAction.WatchTurnServers, {}));

              case 6:
                _context3.next = 12;
                break;

              case 8:
                _context3.prev = 8;
                _context3.t0 = _context3["catch"](3);

                _this.off("action:".concat(_WidgetApiAction.WidgetApiToWidgetAction.UpdateTurnServers), onUpdateTurnServers);

                throw _context3.t0;

              case 12:
                _this.turnServerWatchers++;
                _context3.prev = 13;

              case 14:
                if (!true) {
                  _context3.next = 21;
                  break;
                }

                _context3.next = 17;
                return _awaitAsyncGenerator(new Promise(function (resolve) {
                  return setTurnServer = resolve;
                }));

              case 17:
                _context3.next = 19;
                return _context3.sent;

              case 19:
                _context3.next = 14;
                break;

              case 21:
                _context3.prev = 21;

                // The loop was broken by the caller - clean up
                _this.off("action:".concat(_WidgetApiAction.WidgetApiToWidgetAction.UpdateTurnServers), onUpdateTurnServers); // Since sending the 'unwatch' action will end updates for all other
                // consumers, only send it if we're the only consumer remaining


                _this.turnServerWatchers--;

                if (!(_this.turnServerWatchers === 0)) {
                  _context3.next = 27;
                  break;
                }

                _context3.next = 27;
                return _awaitAsyncGenerator(_this.transport.send(_WidgetApiAction.WidgetApiFromWidgetAction.UnwatchTurnServers, {}));

              case 27:
                return _context3.finish(21);

              case 28:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[3, 8], [13,, 21, 28]]);
      }))();
    }
    /**
     * Starts the communication channel. This should be done early to ensure
     * that messages are not missed. Communication can only be stopped by the client.
     */

  }, {
    key: "start",
    value: function start() {
      var _this5 = this;

      this.transport.start();
      this.getClientVersions().then(function (v) {
        if (v.includes(_ApiVersion.UnstableApiVersion.MSC2974)) {
          _this5.supportsMSC2974Renegotiate = true;
        }
      });
    }
  }, {
    key: "handleMessage",
    value: function handleMessage(ev) {
      var actionEv = new CustomEvent("action:".concat(ev.detail.action), {
        detail: ev.detail,
        cancelable: true
      });
      this.emit("action:".concat(ev.detail.action), actionEv);

      if (!actionEv.defaultPrevented) {
        switch (ev.detail.action) {
          case _WidgetApiAction.WidgetApiToWidgetAction.SupportedApiVersions:
            return this.replyVersions(ev.detail);

          case _WidgetApiAction.WidgetApiToWidgetAction.Capabilities:
            return this.handleCapabilities(ev.detail);

          case _WidgetApiAction.WidgetApiToWidgetAction.UpdateVisibility:
            return this.transport.reply(ev.detail, {});
          // ack to avoid error spam

          case _WidgetApiAction.WidgetApiToWidgetAction.NotifyCapabilities:
            return this.transport.reply(ev.detail, {});
          // ack to avoid error spam

          default:
            return this.transport.reply(ev.detail, {
              error: {
                message: "Unknown or unsupported action: " + ev.detail.action
              }
            });
        }
      }
    }
  }, {
    key: "replyVersions",
    value: function replyVersions(request) {
      this.transport.reply(request, {
        supported_versions: _ApiVersion.CurrentApiVersions
      });
    }
  }, {
    key: "getClientVersions",
    value: function getClientVersions() {
      var _this6 = this;

      if (Array.isArray(this.cachedClientVersions)) {
        return Promise.resolve(this.cachedClientVersions);
      }

      return this.transport.send(_WidgetApiAction.WidgetApiFromWidgetAction.SupportedApiVersions, {}).then(function (r) {
        _this6.cachedClientVersions = r.supported_versions;
        return r.supported_versions;
      })["catch"](function (e) {
        console.warn("non-fatal error getting supported client versions: ", e);
        return [];
      });
    }
  }, {
    key: "handleCapabilities",
    value: function handleCapabilities(request) {
      var _this7 = this;

      if (this.capabilitiesFinished) {
        return this.transport.reply(request, {
          error: {
            message: "Capability negotiation already completed"
          }
        });
      } // See if we can expect a capabilities notification or not


      return this.getClientVersions().then(function (v) {
        if (v.includes(_ApiVersion.UnstableApiVersion.MSC2871)) {
          _this7.once("action:".concat(_WidgetApiAction.WidgetApiToWidgetAction.NotifyCapabilities), function (ev) {
            _this7.approvedCapabilities = ev.detail.data.approved;

            _this7.emit("ready");
          });
        } else {
          // if we can't expect notification, we're as done as we can be
          _this7.emit("ready");
        } // in either case, reply to that capabilities request


        _this7.capabilitiesFinished = true;
        return _this7.transport.reply(request, {
          capabilities: _this7.requestedCapabilities
        });
      });
    }
  }]);

  return WidgetApi;
}(_events.EventEmitter);

exports.WidgetApi = WidgetApi;
},{"./Symbols":2,"./interfaces/ApiVersion":6,"./interfaces/GetOpenIDAction":10,"./interfaces/ModalWidgetActions":20,"./interfaces/WidgetApiAction":34,"./interfaces/WidgetApiDirection":35,"./interfaces/WidgetType":38,"./models/WidgetEventCapability":40,"./transport/PostmessageTransport":46,"events":48}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WidgetDriver = void 0;

var _ = require("..");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * Represents the functions and behaviour the widget-api is unable to
 * do, such as prompting the user for information or interacting with
 * the UI. Clients are expected to implement this class and override
 * any functions they need/want to support.
 *
 * This class assumes the client will have a context of a Widget
 * instance already.
 */
var WidgetDriver = /*#__PURE__*/function () {
  function WidgetDriver() {
    _classCallCheck(this, WidgetDriver);
  }

  _createClass(WidgetDriver, [{
    key: "validateCapabilities",
    value:
    /**
     * Verifies the widget's requested capabilities, returning the ones
     * it is approved to use. Mutating the requested capabilities will
     * have no effect.
     *
     * This SHOULD result in the user being prompted to approve/deny
     * capabilities.
     *
     * By default this rejects all capabilities (returns an empty set).
     * @param {Set<Capability>} requested The set of requested capabilities.
     * @returns {Promise<Set<Capability>>} Resolves to the allowed capabilities.
     */
    function validateCapabilities(requested) {
      return Promise.resolve(new Set());
    }
    /**
     * Sends an event into a room. If `roomId` is falsy, the client should send the event
     * into the room the user is currently looking at. The widget API will have already
     * verified that the widget is capable of sending the event to that room.
     * @param {string} eventType The event type to be sent.
     * @param {*} content The content for the event.
     * @param {string|null} stateKey The state key if this is a state event, otherwise null.
     * May be an empty string.
     * @param {string|null} roomId The room ID to send the event to. If falsy, the room the
     * user is currently looking at.
     * @returns {Promise<ISendEventDetails>} Resolves when the event has been sent with
     * details of that event.
     * @throws Rejected when the event could not be sent.
     */

  }, {
    key: "sendEvent",
    value: function sendEvent(eventType, content) {
      var stateKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var roomId = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
      return Promise.reject(new Error("Failed to override function"));
    }
    /**
     * Sends a to-device event. The widget API will have already verified that the widget
     * is capable of sending the event.
     * @param {string} eventType The event type to be sent.
     * @param {boolean} encrypted Whether to encrypt the message contents.
     * @param {Object} contentMap A map from user ID and device ID to event content.
     * @returns {Promise<void>} Resolves when the event has been sent.
     * @throws Rejected when the event could not be sent.
     */

  }, {
    key: "sendToDevice",
    value: function sendToDevice(eventType, encrypted, contentMap) {
      return Promise.reject(new Error("Failed to override function"));
    }
    /**
     * Reads all events of the given type, and optionally `msgtype` (if applicable/defined),
     * the user has access to. The widget API will have already verified that the widget is
     * capable of receiving the events. Less events than the limit are allowed to be returned,
     * but not more. If `roomIds` is supplied, it may contain `Symbols.AnyRoom` to denote that
     * `limit` in each of the client's known rooms should be returned. When `null`, only the
     * room the user is currently looking at should be considered.
     * @param eventType The event type to be read.
     * @param msgtype The msgtype of the events to be read, if applicable/defined.
     * @param limit The maximum number of events to retrieve per room. Will be zero to denote "as many
     * as possible".
     * @param roomIds When null, the user's currently viewed room. Otherwise, the list of room IDs
     * to look within, possibly containing Symbols.AnyRoom to denote all known rooms.
     * @returns {Promise<IRoomEvent[]>} Resolves to the room events, or an empty array.
     */

  }, {
    key: "readRoomEvents",
    value: function readRoomEvents(eventType, msgtype, limit) {
      var roomIds = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
      return Promise.resolve([]);
    }
    /**
     * Reads all events of the given type, and optionally state key (if applicable/defined),
     * the user has access to. The widget API will have already verified that the widget is
     * capable of receiving the events. Less events than the limit are allowed to be returned,
     * but not more. If `roomIds` is supplied, it may contain `Symbols.AnyRoom` to denote that
     * `limit` in each of the client's known rooms should be returned. When `null`, only the
     * room the user is currently looking at should be considered.
     * @param eventType The event type to be read.
     * @param stateKey The state key of the events to be read, if applicable/defined.
     * @param limit The maximum number of events to retrieve. Will be zero to denote "as many
     * as possible".
     * @param roomIds When null, the user's currently viewed room. Otherwise, the list of room IDs
     * to look within, possibly containing Symbols.AnyRoom to denote all known rooms.
     * @returns {Promise<IRoomEvent[]>} Resolves to the state events, or an empty array.
     */

  }, {
    key: "readStateEvents",
    value: function readStateEvents(eventType, stateKey, limit) {
      var roomIds = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
      return Promise.resolve([]);
    }
    /**
     * Reads all events that are related to a given event. The widget API will
     * have already verified that the widget is capable of receiving the event,
     * or will make sure to reject access to events which are returned from this
     * function, but are not capable of receiving. If `relationType` or `eventType`
     * are set, the returned events should already be filtered. Less events than
     * the limit are allowed to be returned, but not more.
     * @param eventId The id of the parent event to be read.
     * @param roomId The room to look within. When undefined, the user's
     * currently viewed room.
     * @param relationType The relationship type of child events to search for.
     * When undefined, all relations are returned.
     * @param eventType The event type of child events to search for. When undefined,
     * all related events are returned.
     * @param from The pagination token to start returning results from, as
     * received from a previous call. If not supplied, results start at the most
     * recent topological event known to the server.
     * @param to The pagination token to stop returning results at. If not
     * supplied, results continue up to limit or until there are no more events.
     * @param limit The maximum number of events to retrieve per room. If not
     * supplied, the server will apply a default limit.
     * @param direction The direction to search for according to MSC3715
     * @returns Resolves to the room relations.
     */

  }, {
    key: "readEventRelations",
    value: function readEventRelations(eventId, roomId, relationType, eventType, from, to, limit, direction) {
      return Promise.resolve({
        chunk: []
      });
    }
    /**
     * Asks the user for permission to validate their identity through OpenID Connect. The
     * interface for this function is an observable which accepts the state machine of the
     * OIDC exchange flow. For example, if the client/user blocks the request then it would
     * feed back a `{state: Blocked}` into the observable. Similarly, if the user already
     * approved the widget then a `{state: Allowed}` would be fed into the observable alongside
     * the token itself. If the client is asking for permission, it should feed in a
     * `{state: PendingUserConfirmation}` followed by the relevant Allowed or Blocked state.
     *
     * The widget API will reject the widget's request with an error if this contract is not
     * met properly. By default, the widget driver will block all OIDC requests.
     * @param {SimpleObservable<IOpenIDUpdate>} observer The observable to feed updates into.
     */

  }, {
    key: "askOpenID",
    value: function askOpenID(observer) {
      observer.update({
        state: _.OpenIDRequestState.Blocked
      });
    }
    /**
     * Navigates the client with a matrix.to URI. In future this function will also be provided
     * with the Matrix URIs once matrix.to is replaced. The given URI will have already been
     * lightly checked to ensure it looks like a valid URI, though the implementation is recommended
     * to do further checks on the URI.
     * @param {string} uri The URI to navigate to.
     * @returns {Promise<void>} Resolves when complete.
     * @throws Throws if there's a problem with the navigation, such as invalid format.
     */

  }, {
    key: "navigate",
    value: function navigate(uri) {
      throw new Error("Navigation is not implemented");
    }
    /**
     * Polls for TURN server data, yielding an initial set of credentials as soon as possible, and
     * thereafter yielding new credentials whenever the previous ones expire. The widget API will
     * have already verified that the widget has permission to access TURN servers.
     * @yields {ITurnServer} The TURN server URIs and credentials currently available to the client.
     */

  }, {
    key: "getTurnServers",
    value: function getTurnServers() {
      throw new Error("TURN server support is not implemented");
    }
  }]);

  return WidgetDriver;
}();

exports.WidgetDriver = WidgetDriver;
},{"..":5}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _WidgetApi = require("./WidgetApi");

Object.keys(_WidgetApi).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _WidgetApi[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _WidgetApi[key];
    }
  });
});

var _ClientWidgetApi = require("./ClientWidgetApi");

Object.keys(_ClientWidgetApi).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ClientWidgetApi[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ClientWidgetApi[key];
    }
  });
});

var _Symbols = require("./Symbols");

Object.keys(_Symbols).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Symbols[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Symbols[key];
    }
  });
});

var _ITransport = require("./transport/ITransport");

Object.keys(_ITransport).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ITransport[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ITransport[key];
    }
  });
});

var _PostmessageTransport = require("./transport/PostmessageTransport");

Object.keys(_PostmessageTransport).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _PostmessageTransport[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _PostmessageTransport[key];
    }
  });
});

var _ICustomWidgetData = require("./interfaces/ICustomWidgetData");

Object.keys(_ICustomWidgetData).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ICustomWidgetData[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ICustomWidgetData[key];
    }
  });
});

var _IJitsiWidgetData = require("./interfaces/IJitsiWidgetData");

Object.keys(_IJitsiWidgetData).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _IJitsiWidgetData[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _IJitsiWidgetData[key];
    }
  });
});

var _IStickerpickerWidgetData = require("./interfaces/IStickerpickerWidgetData");

Object.keys(_IStickerpickerWidgetData).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _IStickerpickerWidgetData[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _IStickerpickerWidgetData[key];
    }
  });
});

var _IWidget = require("./interfaces/IWidget");

Object.keys(_IWidget).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _IWidget[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _IWidget[key];
    }
  });
});

var _WidgetType = require("./interfaces/WidgetType");

Object.keys(_WidgetType).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _WidgetType[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _WidgetType[key];
    }
  });
});

var _IWidgetApiErrorResponse = require("./interfaces/IWidgetApiErrorResponse");

Object.keys(_IWidgetApiErrorResponse).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _IWidgetApiErrorResponse[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _IWidgetApiErrorResponse[key];
    }
  });
});

var _IWidgetApiRequest = require("./interfaces/IWidgetApiRequest");

Object.keys(_IWidgetApiRequest).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _IWidgetApiRequest[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _IWidgetApiRequest[key];
    }
  });
});

var _IWidgetApiResponse = require("./interfaces/IWidgetApiResponse");

Object.keys(_IWidgetApiResponse).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _IWidgetApiResponse[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _IWidgetApiResponse[key];
    }
  });
});

var _WidgetApiAction = require("./interfaces/WidgetApiAction");

Object.keys(_WidgetApiAction).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _WidgetApiAction[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _WidgetApiAction[key];
    }
  });
});

var _WidgetApiDirection = require("./interfaces/WidgetApiDirection");

Object.keys(_WidgetApiDirection).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _WidgetApiDirection[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _WidgetApiDirection[key];
    }
  });
});

var _ApiVersion = require("./interfaces/ApiVersion");

Object.keys(_ApiVersion).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ApiVersion[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ApiVersion[key];
    }
  });
});

var _Capabilities = require("./interfaces/Capabilities");

Object.keys(_Capabilities).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Capabilities[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Capabilities[key];
    }
  });
});

var _CapabilitiesAction = require("./interfaces/CapabilitiesAction");

Object.keys(_CapabilitiesAction).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _CapabilitiesAction[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _CapabilitiesAction[key];
    }
  });
});

var _ContentLoadedAction = require("./interfaces/ContentLoadedAction");

Object.keys(_ContentLoadedAction).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ContentLoadedAction[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ContentLoadedAction[key];
    }
  });
});

var _ScreenshotAction = require("./interfaces/ScreenshotAction");

Object.keys(_ScreenshotAction).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ScreenshotAction[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ScreenshotAction[key];
    }
  });
});

var _StickerAction = require("./interfaces/StickerAction");

Object.keys(_StickerAction).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _StickerAction[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _StickerAction[key];
    }
  });
});

var _StickyAction = require("./interfaces/StickyAction");

Object.keys(_StickyAction).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _StickyAction[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _StickyAction[key];
    }
  });
});

var _SupportedVersionsAction = require("./interfaces/SupportedVersionsAction");

Object.keys(_SupportedVersionsAction).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _SupportedVersionsAction[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _SupportedVersionsAction[key];
    }
  });
});

var _VisibilityAction = require("./interfaces/VisibilityAction");

Object.keys(_VisibilityAction).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _VisibilityAction[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _VisibilityAction[key];
    }
  });
});

var _GetOpenIDAction = require("./interfaces/GetOpenIDAction");

Object.keys(_GetOpenIDAction).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _GetOpenIDAction[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _GetOpenIDAction[key];
    }
  });
});

var _OpenIDCredentialsAction = require("./interfaces/OpenIDCredentialsAction");

Object.keys(_OpenIDCredentialsAction).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _OpenIDCredentialsAction[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _OpenIDCredentialsAction[key];
    }
  });
});

var _WidgetKind = require("./interfaces/WidgetKind");

Object.keys(_WidgetKind).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _WidgetKind[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _WidgetKind[key];
    }
  });
});

var _ModalButtonKind = require("./interfaces/ModalButtonKind");

Object.keys(_ModalButtonKind).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ModalButtonKind[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ModalButtonKind[key];
    }
  });
});

var _ModalWidgetActions = require("./interfaces/ModalWidgetActions");

Object.keys(_ModalWidgetActions).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ModalWidgetActions[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ModalWidgetActions[key];
    }
  });
});

var _SetModalButtonEnabledAction = require("./interfaces/SetModalButtonEnabledAction");

Object.keys(_SetModalButtonEnabledAction).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _SetModalButtonEnabledAction[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _SetModalButtonEnabledAction[key];
    }
  });
});

var _WidgetConfigAction = require("./interfaces/WidgetConfigAction");

Object.keys(_WidgetConfigAction).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _WidgetConfigAction[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _WidgetConfigAction[key];
    }
  });
});

var _SendEventAction = require("./interfaces/SendEventAction");

Object.keys(_SendEventAction).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _SendEventAction[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _SendEventAction[key];
    }
  });
});

var _SendToDeviceAction = require("./interfaces/SendToDeviceAction");

Object.keys(_SendToDeviceAction).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _SendToDeviceAction[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _SendToDeviceAction[key];
    }
  });
});

var _ReadEventAction = require("./interfaces/ReadEventAction");

Object.keys(_ReadEventAction).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ReadEventAction[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ReadEventAction[key];
    }
  });
});

var _IRoomEvent = require("./interfaces/IRoomEvent");

Object.keys(_IRoomEvent).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _IRoomEvent[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _IRoomEvent[key];
    }
  });
});

var _NavigateAction = require("./interfaces/NavigateAction");

Object.keys(_NavigateAction).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _NavigateAction[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _NavigateAction[key];
    }
  });
});

var _TurnServerActions = require("./interfaces/TurnServerActions");

Object.keys(_TurnServerActions).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _TurnServerActions[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _TurnServerActions[key];
    }
  });
});

var _ReadRelationsAction = require("./interfaces/ReadRelationsAction");

Object.keys(_ReadRelationsAction).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ReadRelationsAction[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ReadRelationsAction[key];
    }
  });
});

var _WidgetEventCapability = require("./models/WidgetEventCapability");

Object.keys(_WidgetEventCapability).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _WidgetEventCapability[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _WidgetEventCapability[key];
    }
  });
});

var _url = require("./models/validation/url");

Object.keys(_url).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _url[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _url[key];
    }
  });
});

var _utils = require("./models/validation/utils");

Object.keys(_utils).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _utils[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _utils[key];
    }
  });
});

var _Widget = require("./models/Widget");

Object.keys(_Widget).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Widget[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Widget[key];
    }
  });
});

var _WidgetParser = require("./models/WidgetParser");

Object.keys(_WidgetParser).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _WidgetParser[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _WidgetParser[key];
    }
  });
});

var _urlTemplate = require("./templating/url-template");

Object.keys(_urlTemplate).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _urlTemplate[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _urlTemplate[key];
    }
  });
});

var _SimpleObservable = require("./util/SimpleObservable");

Object.keys(_SimpleObservable).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _SimpleObservable[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _SimpleObservable[key];
    }
  });
});

var _WidgetDriver = require("./driver/WidgetDriver");

Object.keys(_WidgetDriver).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _WidgetDriver[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _WidgetDriver[key];
    }
  });
});
},{"./ClientWidgetApi":1,"./Symbols":2,"./WidgetApi":3,"./driver/WidgetDriver":4,"./interfaces/ApiVersion":6,"./interfaces/Capabilities":7,"./interfaces/CapabilitiesAction":8,"./interfaces/ContentLoadedAction":9,"./interfaces/GetOpenIDAction":10,"./interfaces/ICustomWidgetData":11,"./interfaces/IJitsiWidgetData":12,"./interfaces/IRoomEvent":13,"./interfaces/IStickerpickerWidgetData":14,"./interfaces/IWidget":15,"./interfaces/IWidgetApiErrorResponse":16,"./interfaces/IWidgetApiRequest":17,"./interfaces/IWidgetApiResponse":18,"./interfaces/ModalButtonKind":19,"./interfaces/ModalWidgetActions":20,"./interfaces/NavigateAction":21,"./interfaces/OpenIDCredentialsAction":22,"./interfaces/ReadEventAction":23,"./interfaces/ReadRelationsAction":24,"./interfaces/ScreenshotAction":25,"./interfaces/SendEventAction":26,"./interfaces/SendToDeviceAction":27,"./interfaces/SetModalButtonEnabledAction":28,"./interfaces/StickerAction":29,"./interfaces/StickyAction":30,"./interfaces/SupportedVersionsAction":31,"./interfaces/TurnServerActions":32,"./interfaces/VisibilityAction":33,"./interfaces/WidgetApiAction":34,"./interfaces/WidgetApiDirection":35,"./interfaces/WidgetConfigAction":36,"./interfaces/WidgetKind":37,"./interfaces/WidgetType":38,"./models/Widget":39,"./models/WidgetEventCapability":40,"./models/WidgetParser":41,"./models/validation/url":42,"./models/validation/utils":43,"./templating/url-template":44,"./transport/ITransport":45,"./transport/PostmessageTransport":46,"./util/SimpleObservable":47}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UnstableApiVersion = exports.MatrixApiVersion = exports.CurrentApiVersions = void 0;

/*
 * Copyright 2020 The Matrix.org Foundation C.I.C.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var MatrixApiVersion;
exports.MatrixApiVersion = MatrixApiVersion;

(function (MatrixApiVersion) {
  MatrixApiVersion["Prerelease1"] = "0.0.1";
  MatrixApiVersion["Prerelease2"] = "0.0.2";
})(MatrixApiVersion || (exports.MatrixApiVersion = MatrixApiVersion = {}));

var UnstableApiVersion;
exports.UnstableApiVersion = UnstableApiVersion;

(function (UnstableApiVersion) {
  UnstableApiVersion["MSC2762"] = "org.matrix.msc2762";
  UnstableApiVersion["MSC2871"] = "org.matrix.msc2871";
  UnstableApiVersion["MSC2931"] = "org.matrix.msc2931";
  UnstableApiVersion["MSC2974"] = "org.matrix.msc2974";
  UnstableApiVersion["MSC2876"] = "org.matrix.msc2876";
  UnstableApiVersion["MSC3819"] = "org.matrix.msc3819";
  UnstableApiVersion["MSC3846"] = "town.robin.msc3846";
  UnstableApiVersion["MSC3869"] = "org.matrix.msc3869";
})(UnstableApiVersion || (exports.UnstableApiVersion = UnstableApiVersion = {}));

var CurrentApiVersions = [MatrixApiVersion.Prerelease1, MatrixApiVersion.Prerelease2, //MatrixApiVersion.V010,
UnstableApiVersion.MSC2762, UnstableApiVersion.MSC2871, UnstableApiVersion.MSC2931, UnstableApiVersion.MSC2974, UnstableApiVersion.MSC2876, UnstableApiVersion.MSC3819, UnstableApiVersion.MSC3846, UnstableApiVersion.MSC3869];
exports.CurrentApiVersions = CurrentApiVersions;
},{}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VideoConferenceCapabilities = exports.StickerpickerCapabilities = exports.MatrixCapabilities = void 0;
exports.getTimelineRoomIDFromCapability = getTimelineRoomIDFromCapability;
exports.isTimelineCapability = isTimelineCapability;
exports.isTimelineCapabilityFor = isTimelineCapabilityFor;

/*
 * Copyright 2020 - 2021 The Matrix.org Foundation C.I.C.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var MatrixCapabilities;
exports.MatrixCapabilities = MatrixCapabilities;

(function (MatrixCapabilities) {
  MatrixCapabilities["Screenshots"] = "m.capability.screenshot";
  MatrixCapabilities["StickerSending"] = "m.sticker";
  MatrixCapabilities["AlwaysOnScreen"] = "m.always_on_screen";
  MatrixCapabilities["RequiresClient"] = "io.element.requires_client";
  MatrixCapabilities["MSC2931Navigate"] = "org.matrix.msc2931.navigate";
  MatrixCapabilities["MSC3846TurnServers"] = "town.robin.msc3846.turn_servers";
})(MatrixCapabilities || (exports.MatrixCapabilities = MatrixCapabilities = {}));

var StickerpickerCapabilities = [MatrixCapabilities.StickerSending];
exports.StickerpickerCapabilities = StickerpickerCapabilities;
var VideoConferenceCapabilities = [MatrixCapabilities.AlwaysOnScreen];
/**
 * Determines if a capability is a capability for a timeline.
 * @param {Capability} capability The capability to test.
 * @returns {boolean} True if a timeline capability, false otherwise.
 */

exports.VideoConferenceCapabilities = VideoConferenceCapabilities;

function isTimelineCapability(capability) {
  // TODO: Change when MSC2762 becomes stable.
  return capability === null || capability === void 0 ? void 0 : capability.startsWith("org.matrix.msc2762.timeline:");
}
/**
 * Determines if a capability is a timeline capability for the given room.
 * @param {Capability} capability The capability to test.
 * @param {string | Symbols.AnyRoom} roomId The room ID, or `Symbols.AnyRoom` for that designation.
 * @returns {boolean} True if a matching capability, false otherwise.
 */


function isTimelineCapabilityFor(capability, roomId) {
  return capability === "org.matrix.msc2762.timeline:".concat(roomId);
}
/**
 * Gets the room ID described by a timeline capability.
 * @param {string} capability The capability to parse.
 * @returns {string} The room ID.
 */


function getTimelineRoomIDFromCapability(capability) {
  return capability.substring(capability.indexOf(":") + 1);
}
},{}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
},{}],9:[function(require,module,exports){
arguments[4][8][0].apply(exports,arguments)
},{"dup":8}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OpenIDRequestState = void 0;

/*
 * Copyright 2020 The Matrix.org Foundation C.I.C.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var OpenIDRequestState;
exports.OpenIDRequestState = OpenIDRequestState;

(function (OpenIDRequestState) {
  OpenIDRequestState["Allowed"] = "allowed";
  OpenIDRequestState["Blocked"] = "blocked";
  OpenIDRequestState["PendingUserConfirmation"] = "request";
})(OpenIDRequestState || (exports.OpenIDRequestState = OpenIDRequestState = {}));
},{}],11:[function(require,module,exports){
arguments[4][8][0].apply(exports,arguments)
},{"dup":8}],12:[function(require,module,exports){
arguments[4][8][0].apply(exports,arguments)
},{"dup":8}],13:[function(require,module,exports){
arguments[4][8][0].apply(exports,arguments)
},{"dup":8}],14:[function(require,module,exports){
arguments[4][8][0].apply(exports,arguments)
},{"dup":8}],15:[function(require,module,exports){
arguments[4][8][0].apply(exports,arguments)
},{"dup":8}],16:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isErrorResponse = isErrorResponse;

/*
 * Copyright 2020 The Matrix.org Foundation C.I.C.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function isErrorResponse(responseData) {
  if ("error" in responseData) {
    var err = responseData;
    return !!err.error.message;
  }

  return false;
}
},{}],17:[function(require,module,exports){
arguments[4][8][0].apply(exports,arguments)
},{"dup":8}],18:[function(require,module,exports){
arguments[4][8][0].apply(exports,arguments)
},{"dup":8}],19:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModalButtonKind = void 0;

/*
 * Copyright 2020 The Matrix.org Foundation C.I.C.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ModalButtonKind;
exports.ModalButtonKind = ModalButtonKind;

(function (ModalButtonKind) {
  ModalButtonKind["Primary"] = "m.primary";
  ModalButtonKind["Secondary"] = "m.secondary";
  ModalButtonKind["Warning"] = "m.warning";
  ModalButtonKind["Danger"] = "m.danger";
  ModalButtonKind["Link"] = "m.link";
})(ModalButtonKind || (exports.ModalButtonKind = ModalButtonKind = {}));
},{}],20:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BuiltInModalButtonID = void 0;

/*
 * Copyright 2020 The Matrix.org Foundation C.I.C.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var BuiltInModalButtonID;
exports.BuiltInModalButtonID = BuiltInModalButtonID;

(function (BuiltInModalButtonID) {
  BuiltInModalButtonID["Close"] = "m.close";
})(BuiltInModalButtonID || (exports.BuiltInModalButtonID = BuiltInModalButtonID = {}));
},{}],21:[function(require,module,exports){
arguments[4][8][0].apply(exports,arguments)
},{"dup":8}],22:[function(require,module,exports){
arguments[4][8][0].apply(exports,arguments)
},{"dup":8}],23:[function(require,module,exports){
arguments[4][8][0].apply(exports,arguments)
},{"dup":8}],24:[function(require,module,exports){
arguments[4][8][0].apply(exports,arguments)
},{"dup":8}],25:[function(require,module,exports){
arguments[4][8][0].apply(exports,arguments)
},{"dup":8}],26:[function(require,module,exports){
arguments[4][8][0].apply(exports,arguments)
},{"dup":8}],27:[function(require,module,exports){
arguments[4][8][0].apply(exports,arguments)
},{"dup":8}],28:[function(require,module,exports){
arguments[4][8][0].apply(exports,arguments)
},{"dup":8}],29:[function(require,module,exports){
arguments[4][8][0].apply(exports,arguments)
},{"dup":8}],30:[function(require,module,exports){
arguments[4][8][0].apply(exports,arguments)
},{"dup":8}],31:[function(require,module,exports){
arguments[4][8][0].apply(exports,arguments)
},{"dup":8}],32:[function(require,module,exports){
arguments[4][8][0].apply(exports,arguments)
},{"dup":8}],33:[function(require,module,exports){
arguments[4][8][0].apply(exports,arguments)
},{"dup":8}],34:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WidgetApiToWidgetAction = exports.WidgetApiFromWidgetAction = void 0;

/*
 * Copyright 2020 The Matrix.org Foundation C.I.C.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var WidgetApiToWidgetAction;
exports.WidgetApiToWidgetAction = WidgetApiToWidgetAction;

(function (WidgetApiToWidgetAction) {
  WidgetApiToWidgetAction["SupportedApiVersions"] = "supported_api_versions";
  WidgetApiToWidgetAction["Capabilities"] = "capabilities";
  WidgetApiToWidgetAction["NotifyCapabilities"] = "notify_capabilities";
  WidgetApiToWidgetAction["TakeScreenshot"] = "screenshot";
  WidgetApiToWidgetAction["UpdateVisibility"] = "visibility";
  WidgetApiToWidgetAction["OpenIDCredentials"] = "openid_credentials";
  WidgetApiToWidgetAction["WidgetConfig"] = "widget_config";
  WidgetApiToWidgetAction["CloseModalWidget"] = "close_modal";
  WidgetApiToWidgetAction["ButtonClicked"] = "button_clicked";
  WidgetApiToWidgetAction["SendEvent"] = "send_event";
  WidgetApiToWidgetAction["SendToDevice"] = "send_to_device";
  WidgetApiToWidgetAction["UpdateTurnServers"] = "update_turn_servers";
})(WidgetApiToWidgetAction || (exports.WidgetApiToWidgetAction = WidgetApiToWidgetAction = {}));

var WidgetApiFromWidgetAction;
exports.WidgetApiFromWidgetAction = WidgetApiFromWidgetAction;

(function (WidgetApiFromWidgetAction) {
  WidgetApiFromWidgetAction["SupportedApiVersions"] = "supported_api_versions";
  WidgetApiFromWidgetAction["ContentLoaded"] = "content_loaded";
  WidgetApiFromWidgetAction["SendSticker"] = "m.sticker";
  WidgetApiFromWidgetAction["UpdateAlwaysOnScreen"] = "set_always_on_screen";
  WidgetApiFromWidgetAction["GetOpenIDCredentials"] = "get_openid";
  WidgetApiFromWidgetAction["CloseModalWidget"] = "close_modal";
  WidgetApiFromWidgetAction["OpenModalWidget"] = "open_modal";
  WidgetApiFromWidgetAction["SetModalButtonEnabled"] = "set_button_enabled";
  WidgetApiFromWidgetAction["SendEvent"] = "send_event";
  WidgetApiFromWidgetAction["SendToDevice"] = "send_to_device";
  WidgetApiFromWidgetAction["WatchTurnServers"] = "watch_turn_servers";
  WidgetApiFromWidgetAction["UnwatchTurnServers"] = "unwatch_turn_servers";
  WidgetApiFromWidgetAction["MSC2876ReadEvents"] = "org.matrix.msc2876.read_events";
  WidgetApiFromWidgetAction["MSC2931Navigate"] = "org.matrix.msc2931.navigate";
  WidgetApiFromWidgetAction["MSC2974RenegotiateCapabilities"] = "org.matrix.msc2974.request_capabilities";
  WidgetApiFromWidgetAction["MSC3869ReadRelations"] = "org.matrix.msc3869.read_relations";
})(WidgetApiFromWidgetAction || (exports.WidgetApiFromWidgetAction = WidgetApiFromWidgetAction = {}));
},{}],35:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WidgetApiDirection = void 0;
exports.invertedDirection = invertedDirection;

/*
 * Copyright 2020 The Matrix.org Foundation C.I.C.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var WidgetApiDirection;
exports.WidgetApiDirection = WidgetApiDirection;

(function (WidgetApiDirection) {
  WidgetApiDirection["ToWidget"] = "toWidget";
  WidgetApiDirection["FromWidget"] = "fromWidget";
})(WidgetApiDirection || (exports.WidgetApiDirection = WidgetApiDirection = {}));

function invertedDirection(dir) {
  if (dir === WidgetApiDirection.ToWidget) {
    return WidgetApiDirection.FromWidget;
  } else if (dir === WidgetApiDirection.FromWidget) {
    return WidgetApiDirection.ToWidget;
  } else {
    throw new Error("Invalid direction");
  }
}
},{}],36:[function(require,module,exports){
arguments[4][8][0].apply(exports,arguments)
},{"dup":8}],37:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WidgetKind = void 0;

/*
 * Copyright 2020 The Matrix.org Foundation C.I.C.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var WidgetKind;
exports.WidgetKind = WidgetKind;

(function (WidgetKind) {
  WidgetKind["Room"] = "room";
  WidgetKind["Account"] = "account";
  WidgetKind["Modal"] = "modal";
})(WidgetKind || (exports.WidgetKind = WidgetKind = {}));
},{}],38:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MatrixWidgetType = void 0;

/*
 * Copyright 2020 The Matrix.org Foundation C.I.C.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var MatrixWidgetType;
exports.MatrixWidgetType = MatrixWidgetType;

(function (MatrixWidgetType) {
  MatrixWidgetType["Custom"] = "m.custom";
  MatrixWidgetType["JitsiMeet"] = "m.jitsi";
  MatrixWidgetType["Stickerpicker"] = "m.stickerpicker";
})(MatrixWidgetType || (exports.MatrixWidgetType = MatrixWidgetType = {}));
},{}],39:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Widget = void 0;

var _utils = require("./validation/utils");

var _ = require("..");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * Represents the barest form of widget.
 */
var Widget = /*#__PURE__*/function () {
  function Widget(definition) {
    _classCallCheck(this, Widget);

    this.definition = definition;
    if (!this.definition) throw new Error("Definition is required");
    (0, _utils.assertPresent)(definition, "id");
    (0, _utils.assertPresent)(definition, "creatorUserId");
    (0, _utils.assertPresent)(definition, "type");
    (0, _utils.assertPresent)(definition, "url");
  }
  /**
   * The user ID who created the widget.
   */


  _createClass(Widget, [{
    key: "creatorUserId",
    get: function get() {
      return this.definition.creatorUserId;
    }
    /**
     * The type of widget.
     */

  }, {
    key: "type",
    get: function get() {
      return this.definition.type;
    }
    /**
     * The ID of the widget.
     */

  }, {
    key: "id",
    get: function get() {
      return this.definition.id;
    }
    /**
     * The name of the widget, or null if not set.
     */

  }, {
    key: "name",
    get: function get() {
      return this.definition.name || null;
    }
    /**
     * The title for the widget, or null if not set.
     */

  }, {
    key: "title",
    get: function get() {
      return this.rawData.title || null;
    }
    /**
     * The templated URL for the widget.
     */

  }, {
    key: "templateUrl",
    get: function get() {
      return this.definition.url;
    }
    /**
     * The origin for this widget.
     */

  }, {
    key: "origin",
    get: function get() {
      return new URL(this.templateUrl).origin;
    }
    /**
     * Whether or not the client should wait for the iframe to load. Defaults
     * to true.
     */

  }, {
    key: "waitForIframeLoad",
    get: function get() {
      if (this.definition.waitForIframeLoad === false) return false;
      if (this.definition.waitForIframeLoad === true) return true;
      return true; // default true
    }
    /**
     * The raw data for the widget. This will always be defined, though
     * may be empty.
     */

  }, {
    key: "rawData",
    get: function get() {
      return this.definition.data || {};
    }
    /**
     * Gets a complete widget URL for the client to render.
     * @param {ITemplateParams} params The template parameters.
     * @returns {string} A templated URL.
     */

  }, {
    key: "getCompleteUrl",
    value: function getCompleteUrl(params) {
      return (0, _.runTemplate)(this.templateUrl, this.definition, params);
    }
  }]);

  return Widget;
}();

exports.Widget = Widget;
},{"..":5,"./validation/utils":43}],40:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WidgetEventCapability = exports.EventKind = exports.EventDirection = void 0;

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/*
 * Copyright 2020 The Matrix.org Foundation C.I.C.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var EventKind;
exports.EventKind = EventKind;

(function (EventKind) {
  EventKind["Event"] = "event";
  EventKind["State"] = "state_event";
  EventKind["ToDevice"] = "to_device";
})(EventKind || (exports.EventKind = EventKind = {}));

var EventDirection;
exports.EventDirection = EventDirection;

(function (EventDirection) {
  EventDirection["Send"] = "send";
  EventDirection["Receive"] = "receive";
})(EventDirection || (exports.EventDirection = EventDirection = {}));

var WidgetEventCapability = /*#__PURE__*/function () {
  function WidgetEventCapability(direction, eventType, kind, keyStr, raw) {
    _classCallCheck(this, WidgetEventCapability);

    this.direction = direction;
    this.eventType = eventType;
    this.kind = kind;
    this.keyStr = keyStr;
    this.raw = raw;
  }

  _createClass(WidgetEventCapability, [{
    key: "matchesAsStateEvent",
    value: function matchesAsStateEvent(direction, eventType, stateKey) {
      if (this.kind !== EventKind.State) return false; // not a state event

      if (this.direction !== direction) return false; // direction mismatch

      if (this.eventType !== eventType) return false; // event type mismatch

      if (this.keyStr === null) return true; // all state keys are allowed

      if (this.keyStr === stateKey) return true; // this state key is allowed
      // Default not allowed

      return false;
    }
  }, {
    key: "matchesAsToDeviceEvent",
    value: function matchesAsToDeviceEvent(direction, eventType) {
      if (this.kind !== EventKind.ToDevice) return false; // not a to-device event

      if (this.direction !== direction) return false; // direction mismatch

      if (this.eventType !== eventType) return false; // event type mismatch
      // Checks passed, the event is allowed

      return true;
    }
  }, {
    key: "matchesAsRoomEvent",
    value: function matchesAsRoomEvent(direction, eventType) {
      var msgtype = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      if (this.kind !== EventKind.Event) return false; // not a room event

      if (this.direction !== direction) return false; // direction mismatch

      if (this.eventType !== eventType) return false; // event type mismatch

      if (this.eventType === "m.room.message") {
        if (this.keyStr === null) return true; // all message types are allowed

        if (this.keyStr === msgtype) return true; // this message type is allowed
      } else {
        return true; // already passed the check for if the event is allowed
      } // Default not allowed


      return false;
    }
  }], [{
    key: "forStateEvent",
    value: function forStateEvent(direction, eventType, stateKey) {
      // TODO: Enable support for m.* namespace once the MSC lands.
      // https://github.com/matrix-org/matrix-widget-api/issues/22
      eventType = eventType.replace(/#/g, '\\#');
      stateKey = stateKey !== null && stateKey !== undefined ? "#".concat(stateKey) : '';
      var str = "org.matrix.msc2762.".concat(direction, ".state_event:").concat(eventType).concat(stateKey); // cheat by sending it through the processor

      return WidgetEventCapability.findEventCapabilities([str])[0];
    }
  }, {
    key: "forToDeviceEvent",
    value: function forToDeviceEvent(direction, eventType) {
      // TODO: Enable support for m.* namespace once the MSC lands.
      // https://github.com/matrix-org/matrix-widget-api/issues/56
      var str = "org.matrix.msc3819.".concat(direction, ".to_device:").concat(eventType); // cheat by sending it through the processor

      return WidgetEventCapability.findEventCapabilities([str])[0];
    }
  }, {
    key: "forRoomEvent",
    value: function forRoomEvent(direction, eventType) {
      // TODO: Enable support for m.* namespace once the MSC lands.
      // https://github.com/matrix-org/matrix-widget-api/issues/22
      var str = "org.matrix.msc2762.".concat(direction, ".event:").concat(eventType); // cheat by sending it through the processor

      return WidgetEventCapability.findEventCapabilities([str])[0];
    }
  }, {
    key: "forRoomMessageEvent",
    value: function forRoomMessageEvent(direction, msgtype) {
      // TODO: Enable support for m.* namespace once the MSC lands.
      // https://github.com/matrix-org/matrix-widget-api/issues/22
      msgtype = msgtype === null || msgtype === undefined ? '' : msgtype;
      var str = "org.matrix.msc2762.".concat(direction, ".event:m.room.message#").concat(msgtype); // cheat by sending it through the processor

      return WidgetEventCapability.findEventCapabilities([str])[0];
    }
    /**
     * Parses a capabilities request to find all the event capability requests.
     * @param {Iterable<Capability>} capabilities The capabilities requested/to parse.
     * @returns {WidgetEventCapability[]} An array of event capability requests. May be empty, but never null.
     */

  }, {
    key: "findEventCapabilities",
    value: function findEventCapabilities(capabilities) {
      var parsed = [];

      var _iterator = _createForOfIteratorHelper(capabilities),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var cap = _step.value;
          var _direction = null;
          var eventSegment = void 0;
          var _kind = null; // TODO: Enable support for m.* namespace once the MSCs land.
          // https://github.com/matrix-org/matrix-widget-api/issues/22
          // https://github.com/matrix-org/matrix-widget-api/issues/56

          if (cap.startsWith("org.matrix.msc2762.send.event:")) {
            _direction = EventDirection.Send;
            _kind = EventKind.Event;
            eventSegment = cap.substring("org.matrix.msc2762.send.event:".length);
          } else if (cap.startsWith("org.matrix.msc2762.send.state_event:")) {
            _direction = EventDirection.Send;
            _kind = EventKind.State;
            eventSegment = cap.substring("org.matrix.msc2762.send.state_event:".length);
          } else if (cap.startsWith("org.matrix.msc3819.send.to_device:")) {
            _direction = EventDirection.Send;
            _kind = EventKind.ToDevice;
            eventSegment = cap.substring("org.matrix.msc3819.send.to_device:".length);
          } else if (cap.startsWith("org.matrix.msc2762.receive.event:")) {
            _direction = EventDirection.Receive;
            _kind = EventKind.Event;
            eventSegment = cap.substring("org.matrix.msc2762.receive.event:".length);
          } else if (cap.startsWith("org.matrix.msc2762.receive.state_event:")) {
            _direction = EventDirection.Receive;
            _kind = EventKind.State;
            eventSegment = cap.substring("org.matrix.msc2762.receive.state_event:".length);
          } else if (cap.startsWith("org.matrix.msc3819.receive.to_device:")) {
            _direction = EventDirection.Receive;
            _kind = EventKind.ToDevice;
            eventSegment = cap.substring("org.matrix.msc3819.receive.to_device:".length);
          }

          if (_direction === null || _kind === null) continue; // The capability uses `#` as a separator between event type and state key/msgtype,
          // so we split on that. However, a # is also valid in either one of those so we
          // join accordingly.
          // Eg: `m.room.message##m.text` is "m.room.message" event with msgtype "#m.text".

          var expectingKeyStr = eventSegment.startsWith("m.room.message#") || _kind === EventKind.State;

          var _keyStr = null;

          if (eventSegment.includes('#') && expectingKeyStr) {
            // Dev note: regex is difficult to write, so instead the rules are manually written
            // out. This is probably just as understandable as a boring regex though, so win-win?
            // Test cases:
            // str                      eventSegment        keyStr
            // -------------------------------------------------------------
            // m.room.message#          m.room.message      <empty string>
            // m.room.message#test      m.room.message      test
            // m.room.message\#         m.room.message#     test
            // m.room.message##test     m.room.message      #test
            // m.room.message\##test    m.room.message#     test
            // m.room.message\\##test   m.room.message\#    test
            // m.room.message\\###test  m.room.message\#    #test
            // First step: explode the string
            var parts = eventSegment.split('#'); // To form the eventSegment, we'll keep finding parts of the exploded string until
            // there's one that doesn't end with the escape character (\). We'll then join those
            // segments together with the exploding character. We have to remember to consume the
            // escape character as well.

            var idx = parts.findIndex(function (p) {
              return !p.endsWith("\\");
            });
            eventSegment = parts.slice(0, idx + 1).map(function (p) {
              return p.endsWith('\\') ? p.substring(0, p.length - 1) : p;
            }).join('#'); // The keyStr is whatever is left over.

            _keyStr = parts.slice(idx + 1).join('#');
          }

          parsed.push(new WidgetEventCapability(_direction, eventSegment, _kind, _keyStr, cap));
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return parsed;
    }
  }]);

  return WidgetEventCapability;
}();

exports.WidgetEventCapability = WidgetEventCapability;
},{}],41:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WidgetParser = void 0;

var _Widget = require("./Widget");

var _url = require("./validation/url");

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var WidgetParser = /*#__PURE__*/function () {
  function WidgetParser() {// private constructor because this is a util class

    _classCallCheck(this, WidgetParser);
  }
  /**
   * Parses widgets from the "m.widgets" account data event. This will always
   * return an array, though may be empty if no valid widgets were found.
   * @param {IAccountDataWidgets} content The content of the "m.widgets" account data.
   * @returns {Widget[]} The widgets in account data, or an empty array.
   */


  _createClass(WidgetParser, null, [{
    key: "parseAccountData",
    value: function parseAccountData(content) {
      if (!content) return [];
      var result = [];

      for (var _i = 0, _Object$keys = Object.keys(content); _i < _Object$keys.length; _i++) {
        var _widgetId = _Object$keys[_i];
        var roughWidget = content[_widgetId];
        if (!roughWidget) continue;
        if (roughWidget.type !== "m.widget" && roughWidget.type !== "im.vector.modular.widgets") continue;
        if (!roughWidget.sender) continue;
        var probableWidgetId = roughWidget.state_key || roughWidget.id;
        if (probableWidgetId !== _widgetId) continue;
        var asStateEvent = {
          content: roughWidget.content,
          sender: roughWidget.sender,
          type: "m.widget",
          state_key: _widgetId,
          event_id: "$example",
          room_id: "!example",
          origin_server_ts: 1
        };
        var widget = WidgetParser.parseRoomWidget(asStateEvent);
        if (widget) result.push(widget);
      }

      return result;
    }
    /**
     * Parses all the widgets possible in the given array. This will always return
     * an array, though may be empty if no widgets could be parsed.
     * @param {IStateEvent[]} currentState The room state to parse.
     * @returns {Widget[]} The widgets in the state, or an empty array.
     */

  }, {
    key: "parseWidgetsFromRoomState",
    value: function parseWidgetsFromRoomState(currentState) {
      if (!currentState) return [];
      var result = [];

      var _iterator = _createForOfIteratorHelper(currentState),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var state = _step.value;
          var widget = WidgetParser.parseRoomWidget(state);
          if (widget) result.push(widget);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return result;
    }
    /**
     * Parses a state event into a widget. If the state event does not represent
     * a widget (wrong event type, invalid widget, etc) then null is returned.
     * @param {IStateEvent} stateEvent The state event.
     * @returns {Widget|null} The widget, or null if invalid
     */

  }, {
    key: "parseRoomWidget",
    value: function parseRoomWidget(stateEvent) {
      if (!stateEvent) return null; // TODO: [Legacy] Remove legacy support

      if (stateEvent.type !== "m.widget" && stateEvent.type !== "im.vector.modular.widgets") {
        return null;
      } // Dev note: Throughout this function we have null safety to ensure that
      // if the caller did not supply something useful that we don't error. This
      // is done against the requirements of the interface because not everyone
      // will have an interface to validate against.


      var content = stateEvent.content || {}; // Form our best approximation of a widget with the information we have

      var estimatedWidget = {
        id: stateEvent.state_key,
        creatorUserId: content['creatorUserId'] || stateEvent.sender,
        name: content['name'],
        type: content['type'],
        url: content['url'],
        waitForIframeLoad: content['waitForIframeLoad'],
        data: content['data']
      }; // Finally, process that widget

      return WidgetParser.processEstimatedWidget(estimatedWidget);
    }
  }, {
    key: "processEstimatedWidget",
    value: function processEstimatedWidget(widget) {
      // Validate that the widget has the best chance of passing as a widget
      if (!widget.id || !widget.creatorUserId || !widget.type) {
        return null;
      }

      if (!(0, _url.isValidUrl)(widget.url)) {
        return null;
      } // TODO: Validate data for known widget types


      return new _Widget.Widget(widget);
    }
  }]);

  return WidgetParser;
}();

exports.WidgetParser = WidgetParser;
},{"./Widget":39,"./validation/url":42}],42:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isValidUrl = isValidUrl;

/*
 * Copyright 2020 The Matrix.org Foundation C.I.C.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function isValidUrl(val) {
  if (!val) return false; // easy: not valid if not present

  try {
    var parsed = new URL(val);

    if (parsed.protocol !== "http" && parsed.protocol !== "https") {
      return false;
    }

    return true;
  } catch (e) {
    if (e instanceof TypeError) {
      return false;
    }

    throw e;
  }
}
},{}],43:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assertPresent = assertPresent;

/*
 * Copyright 2020 The Matrix.org Foundation C.I.C.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function assertPresent(obj, key) {
  if (!obj[key]) {
    throw new Error("".concat(key, " is required"));
  }
}
},{}],44:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.runTemplate = runTemplate;
exports.toString = toString;

/*
 * Copyright 2020, 2021 The Matrix.org Foundation C.I.C.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function runTemplate(url, widget, params) {
  // Always apply the supplied params over top of data to ensure the data can't lie about them.
  var variables = Object.assign({}, widget.data, {
    'matrix_room_id': params.widgetRoomId || "",
    'matrix_user_id': params.currentUserId,
    'matrix_display_name': params.userDisplayName || params.currentUserId,
    'matrix_avatar_url': params.userHttpAvatarUrl || "",
    'matrix_widget_id': widget.id,
    // TODO: Convert to stable (https://github.com/matrix-org/matrix-doc/pull/2873)
    'org.matrix.msc2873.client_id': params.clientId || "",
    'org.matrix.msc2873.client_theme': params.clientTheme || "",
    'org.matrix.msc2873.client_language': params.clientLanguage || ""
  });
  var result = url;

  for (var _i = 0, _Object$keys = Object.keys(variables); _i < _Object$keys.length; _i++) {
    var key = _Object$keys[_i];
    // Regex escape from https://stackoverflow.com/a/6969486/7037379
    var pattern = "$".concat(key).replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string

    var rexp = new RegExp(pattern, 'g'); // This is technically not what we're supposed to do for a couple reasons:
    // 1. We are assuming that there won't later be a $key match after we replace a variable.
    // 2. We are assuming that the variable is in a place where it can be escaped (eg: path or query string).

    result = result.replace(rexp, encodeURIComponent(toString(variables[key])));
  }

  return result;
}

function toString(a) {
  if (a === null || a === undefined) {
    return "".concat(a);
  }

  return a.toString();
}
},{}],45:[function(require,module,exports){
arguments[4][8][0].apply(exports,arguments)
},{"dup":8}],46:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PostmessageTransport = void 0;

var _events = require("events");

var _ = require("..");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Transport for the Widget API over postMessage.
 */
var PostmessageTransport = /*#__PURE__*/function (_EventEmitter) {
  _inherits(PostmessageTransport, _EventEmitter);

  var _super = _createSuper(PostmessageTransport);

  function PostmessageTransport(sendDirection, initialWidgetId, transportWindow, inboundWindow) {
    var _this;

    _classCallCheck(this, PostmessageTransport);

    _this = _super.call(this);
    _this.sendDirection = sendDirection;
    _this.initialWidgetId = initialWidgetId;
    _this.transportWindow = transportWindow;
    _this.inboundWindow = inboundWindow;

    _defineProperty(_assertThisInitialized(_this), "strictOriginCheck", void 0);

    _defineProperty(_assertThisInitialized(_this), "targetOrigin", void 0);

    _defineProperty(_assertThisInitialized(_this), "timeoutSeconds", 10);

    _defineProperty(_assertThisInitialized(_this), "_ready", false);

    _defineProperty(_assertThisInitialized(_this), "_widgetId", null);

    _defineProperty(_assertThisInitialized(_this), "outboundRequests", new Map());

    _defineProperty(_assertThisInitialized(_this), "stopController", new AbortController());

    _this._widgetId = initialWidgetId;
    return _this;
  }

  _createClass(PostmessageTransport, [{
    key: "ready",
    get: function get() {
      return this._ready;
    }
  }, {
    key: "widgetId",
    get: function get() {
      return this._widgetId || null;
    }
  }, {
    key: "nextRequestId",
    get: function get() {
      var idBase = "widgetapi-".concat(Date.now());
      var index = 0;
      var id = idBase;

      while (this.outboundRequests.has(id)) {
        id = "".concat(idBase, "-").concat(index++);
      } // reserve the ID


      this.outboundRequests.set(id, null);
      return id;
    }
  }, {
    key: "sendInternal",
    value: function sendInternal(message) {
      var targetOrigin = this.targetOrigin || '*';
      console.log("[PostmessageTransport] Sending object to ".concat(targetOrigin, ": "), message);
      this.transportWindow.postMessage(message, targetOrigin);
    }
  }, {
    key: "reply",
    value: function reply(request, responseData) {
      return this.sendInternal(_objectSpread(_objectSpread({}, request), {}, {
        response: responseData
      }));
    }
  }, {
    key: "send",
    value: function send(action, data) {
      return this.sendComplete(action, data).then(function (r) {
        return r.response;
      });
    }
  }, {
    key: "sendComplete",
    value: function sendComplete(action, data) {
      var _this2 = this;

      if (!this.ready || !this.widgetId) {
        return Promise.reject(new Error("Not ready or unknown widget ID"));
      }

      var request = {
        api: this.sendDirection,
        widgetId: this.widgetId,
        requestId: this.nextRequestId,
        action: action,
        data: data
      };

      if (action === _.WidgetApiToWidgetAction.UpdateVisibility) {
        // XXX: This is for Scalar support
        // TODO: Fix scalar
        request['visible'] = data['visible'];
      }

      return new Promise(function (prResolve, prReject) {
        var resolve = function resolve(response) {
          cleanUp();
          prResolve(response);
        };

        var reject = function reject(err) {
          cleanUp();
          prReject(err);
        };

        var timerId = setTimeout(function () {
          return reject(new Error("Request timed out"));
        }, (_this2.timeoutSeconds || 1) * 1000);

        var onStop = function onStop() {
          return reject(new Error("Transport stopped"));
        };

        _this2.stopController.signal.addEventListener("abort", onStop);

        var cleanUp = function cleanUp() {
          _this2.outboundRequests["delete"](request.requestId);

          clearTimeout(timerId);

          _this2.stopController.signal.removeEventListener("abort", onStop);
        };

        _this2.outboundRequests.set(request.requestId, {
          request: request,
          resolve: resolve,
          reject: reject
        });

        _this2.sendInternal(request);
      });
    }
  }, {
    key: "start",
    value: function start() {
      var _this3 = this;

      this.inboundWindow.addEventListener("message", function (ev) {
        _this3.handleMessage(ev);
      });
      this._ready = true;
    }
  }, {
    key: "stop",
    value: function stop() {
      this._ready = false;
      this.stopController.abort();
    }
  }, {
    key: "handleMessage",
    value: function handleMessage(ev) {
      if (this.stopController.signal.aborted) return;
      if (!ev.data) return; // invalid event

      if (this.strictOriginCheck && ev.origin !== window.origin) return; // bad origin
      // treat the message as a response first, then downgrade to a request

      var response = ev.data;
      if (!response.action || !response.requestId || !response.widgetId) return; // invalid request/response

      if (!response.response) {
        // it's a request
        var request = response;
        if (request.api !== (0, _.invertedDirection)(this.sendDirection)) return; // wrong direction

        this.handleRequest(request);
      } else {
        // it's a response
        if (response.api !== this.sendDirection) return; // wrong direction

        this.handleResponse(response);
      }
    }
  }, {
    key: "handleRequest",
    value: function handleRequest(request) {
      if (this.widgetId) {
        if (this.widgetId !== request.widgetId) return; // wrong widget
      } else {
        this._widgetId = request.widgetId;
      }

      this.emit("message", new CustomEvent("message", {
        detail: request
      }));
    }
  }, {
    key: "handleResponse",
    value: function handleResponse(response) {
      if (response.widgetId !== this.widgetId) return; // wrong widget

      var req = this.outboundRequests.get(response.requestId);
      if (!req) return; // response to an unknown request

      if ((0, _.isErrorResponse)(response.response)) {
        var _err = response.response;
        req.reject(new Error(_err.error.message));
      } else {
        req.resolve(response);
      }
    }
  }]);

  return PostmessageTransport;
}(_events.EventEmitter);

exports.PostmessageTransport = PostmessageTransport;
},{"..":5,"events":48}],47:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SimpleObservable = void 0;

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
 * Copyright 2020 The Matrix.org Foundation C.I.C.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var SimpleObservable = /*#__PURE__*/function () {
  function SimpleObservable(initialFn) {
    _classCallCheck(this, SimpleObservable);

    _defineProperty(this, "listeners", []);

    if (initialFn) this.listeners.push(initialFn);
  }

  _createClass(SimpleObservable, [{
    key: "onUpdate",
    value: function onUpdate(fn) {
      this.listeners.push(fn);
    }
  }, {
    key: "update",
    value: function update(val) {
      var _iterator = _createForOfIteratorHelper(this.listeners),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var listener = _step.value;
          listener(val);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "close",
    value: function close() {
      this.listeners = []; // reset
    }
  }]);

  return SimpleObservable;
}();

exports.SimpleObservable = SimpleObservable;
},{}],48:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

'use strict';

var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;
module.exports.once = once;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function _getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  checkListener(listener);

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = _getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0)
      return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      checkListener(listener);

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}

function once(emitter, name) {
  return new Promise(function (resolve, reject) {
    function errorListener(err) {
      emitter.removeListener(name, resolver);
      reject(err);
    }

    function resolver() {
      if (typeof emitter.removeListener === 'function') {
        emitter.removeListener('error', errorListener);
      }
      resolve([].slice.call(arguments));
    };

    eventTargetAgnosticAddListener(emitter, name, resolver, { once: true });
    if (name !== 'error') {
      addErrorHandlerIfEventEmitter(emitter, errorListener, { once: true });
    }
  });
}

function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
  if (typeof emitter.on === 'function') {
    eventTargetAgnosticAddListener(emitter, 'error', handler, flags);
  }
}

function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
  if (typeof emitter.on === 'function') {
    if (flags.once) {
      emitter.once(name, listener);
    } else {
      emitter.on(name, listener);
    }
  } else if (typeof emitter.addEventListener === 'function') {
    // EventTarget does not have `error` event semantics like Node
    // EventEmitters, we do not listen for `error` events here.
    emitter.addEventListener(name, function wrapListener(arg) {
      // IE does not have builtin `{ once: true }` support so we
      // have to do it manually.
      if (flags.once) {
        emitter.removeEventListener(name, wrapListener);
      }
      listener(arg);
    });
  } else {
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
  }
}

},{}]},{},[5])(5)
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJsaWIvQ2xpZW50V2lkZ2V0QXBpLmpzIiwibGliL1N5bWJvbHMuanMiLCJsaWIvV2lkZ2V0QXBpLmpzIiwibGliL2RyaXZlci9XaWRnZXREcml2ZXIuanMiLCJsaWIvaW5kZXguanMiLCJsaWIvaW50ZXJmYWNlcy9BcGlWZXJzaW9uLmpzIiwibGliL2ludGVyZmFjZXMvQ2FwYWJpbGl0aWVzLmpzIiwibGliL2ludGVyZmFjZXMvQ2FwYWJpbGl0aWVzQWN0aW9uLmpzIiwibGliL2ludGVyZmFjZXMvR2V0T3BlbklEQWN0aW9uLmpzIiwibGliL2ludGVyZmFjZXMvSVdpZGdldEFwaUVycm9yUmVzcG9uc2UuanMiLCJsaWIvaW50ZXJmYWNlcy9Nb2RhbEJ1dHRvbktpbmQuanMiLCJsaWIvaW50ZXJmYWNlcy9Nb2RhbFdpZGdldEFjdGlvbnMuanMiLCJsaWIvaW50ZXJmYWNlcy9XaWRnZXRBcGlBY3Rpb24uanMiLCJsaWIvaW50ZXJmYWNlcy9XaWRnZXRBcGlEaXJlY3Rpb24uanMiLCJsaWIvaW50ZXJmYWNlcy9XaWRnZXRLaW5kLmpzIiwibGliL2ludGVyZmFjZXMvV2lkZ2V0VHlwZS5qcyIsImxpYi9tb2RlbHMvV2lkZ2V0LmpzIiwibGliL21vZGVscy9XaWRnZXRFdmVudENhcGFiaWxpdHkuanMiLCJsaWIvbW9kZWxzL1dpZGdldFBhcnNlci5qcyIsImxpYi9tb2RlbHMvdmFsaWRhdGlvbi91cmwuanMiLCJsaWIvbW9kZWxzL3ZhbGlkYXRpb24vdXRpbHMuanMiLCJsaWIvdGVtcGxhdGluZy91cmwtdGVtcGxhdGUuanMiLCJsaWIvdHJhbnNwb3J0L1Bvc3RtZXNzYWdlVHJhbnNwb3J0LmpzIiwibGliL3V0aWwvU2ltcGxlT2JzZXJ2YWJsZS5qcyIsIm5vZGVfbW9kdWxlcy9ldmVudHMvZXZlbnRzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwdUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3YyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDck5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1UEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQzNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDalFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9LCBfdHlwZW9mKG9iaik7IH1cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuQ2xpZW50V2lkZ2V0QXBpID0gdm9pZCAwO1xuXG52YXIgX2V2ZW50cyA9IHJlcXVpcmUoXCJldmVudHNcIik7XG5cbnZhciBfUG9zdG1lc3NhZ2VUcmFuc3BvcnQgPSByZXF1aXJlKFwiLi90cmFuc3BvcnQvUG9zdG1lc3NhZ2VUcmFuc3BvcnRcIik7XG5cbnZhciBfV2lkZ2V0QXBpRGlyZWN0aW9uID0gcmVxdWlyZShcIi4vaW50ZXJmYWNlcy9XaWRnZXRBcGlEaXJlY3Rpb25cIik7XG5cbnZhciBfV2lkZ2V0QXBpQWN0aW9uID0gcmVxdWlyZShcIi4vaW50ZXJmYWNlcy9XaWRnZXRBcGlBY3Rpb25cIik7XG5cbnZhciBfQ2FwYWJpbGl0aWVzID0gcmVxdWlyZShcIi4vaW50ZXJmYWNlcy9DYXBhYmlsaXRpZXNcIik7XG5cbnZhciBfQXBpVmVyc2lvbiA9IHJlcXVpcmUoXCIuL2ludGVyZmFjZXMvQXBpVmVyc2lvblwiKTtcblxudmFyIF9XaWRnZXRFdmVudENhcGFiaWxpdHkgPSByZXF1aXJlKFwiLi9tb2RlbHMvV2lkZ2V0RXZlbnRDYXBhYmlsaXR5XCIpO1xuXG52YXIgX0dldE9wZW5JREFjdGlvbiA9IHJlcXVpcmUoXCIuL2ludGVyZmFjZXMvR2V0T3BlbklEQWN0aW9uXCIpO1xuXG52YXIgX1NpbXBsZU9ic2VydmFibGUgPSByZXF1aXJlKFwiLi91dGlsL1NpbXBsZU9ic2VydmFibGVcIik7XG5cbnZhciBfU3ltYm9scyA9IHJlcXVpcmUoXCIuL1N5bWJvbHNcIik7XG5cbmZ1bmN0aW9uIF9yZWdlbmVyYXRvclJ1bnRpbWUoKSB7IFwidXNlIHN0cmljdFwiOyAvKiEgcmVnZW5lcmF0b3ItcnVudGltZSAtLSBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy4gLS0gbGljZW5zZSAoTUlUKTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2Jsb2IvbWFpbi9MSUNFTlNFICovIF9yZWdlbmVyYXRvclJ1bnRpbWUgPSBmdW5jdGlvbiBfcmVnZW5lcmF0b3JSdW50aW1lKCkgeyByZXR1cm4gZXhwb3J0czsgfTsgdmFyIGV4cG9ydHMgPSB7fSwgT3AgPSBPYmplY3QucHJvdG90eXBlLCBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eSwgJFN5bWJvbCA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sID8gU3ltYm9sIDoge30sIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIiwgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiLCB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7IGZ1bmN0aW9uIGRlZmluZShvYmosIGtleSwgdmFsdWUpIHsgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6ICEwLCBjb25maWd1cmFibGU6ICEwLCB3cml0YWJsZTogITAgfSksIG9ialtrZXldOyB9IHRyeSB7IGRlZmluZSh7fSwgXCJcIik7IH0gY2F0Y2ggKGVycikgeyBkZWZpbmUgPSBmdW5jdGlvbiBkZWZpbmUob2JqLCBrZXksIHZhbHVlKSB7IHJldHVybiBvYmpba2V5XSA9IHZhbHVlOyB9OyB9IGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHsgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3IsIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKSwgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTsgcmV0dXJuIGdlbmVyYXRvci5faW52b2tlID0gZnVuY3Rpb24gKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHsgdmFyIHN0YXRlID0gXCJzdXNwZW5kZWRTdGFydFwiOyByZXR1cm4gZnVuY3Rpb24gKG1ldGhvZCwgYXJnKSB7IGlmIChcImV4ZWN1dGluZ1wiID09PSBzdGF0ZSkgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTsgaWYgKFwiY29tcGxldGVkXCIgPT09IHN0YXRlKSB7IGlmIChcInRocm93XCIgPT09IG1ldGhvZCkgdGhyb3cgYXJnOyByZXR1cm4gZG9uZVJlc3VsdCgpOyB9IGZvciAoY29udGV4dC5tZXRob2QgPSBtZXRob2QsIGNvbnRleHQuYXJnID0gYXJnOzspIHsgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTsgaWYgKGRlbGVnYXRlKSB7IHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpOyBpZiAoZGVsZWdhdGVSZXN1bHQpIHsgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTsgcmV0dXJuIGRlbGVnYXRlUmVzdWx0OyB9IH0gaWYgKFwibmV4dFwiID09PSBjb250ZXh0Lm1ldGhvZCkgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO2Vsc2UgaWYgKFwidGhyb3dcIiA9PT0gY29udGV4dC5tZXRob2QpIHsgaWYgKFwic3VzcGVuZGVkU3RhcnRcIiA9PT0gc3RhdGUpIHRocm93IHN0YXRlID0gXCJjb21wbGV0ZWRcIiwgY29udGV4dC5hcmc7IGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpOyB9IGVsc2UgXCJyZXR1cm5cIiA9PT0gY29udGV4dC5tZXRob2QgJiYgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpOyBzdGF0ZSA9IFwiZXhlY3V0aW5nXCI7IHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTsgaWYgKFwibm9ybWFsXCIgPT09IHJlY29yZC50eXBlKSB7IGlmIChzdGF0ZSA9IGNvbnRleHQuZG9uZSA/IFwiY29tcGxldGVkXCIgOiBcInN1c3BlbmRlZFlpZWxkXCIsIHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlOyByZXR1cm4geyB2YWx1ZTogcmVjb3JkLmFyZywgZG9uZTogY29udGV4dC5kb25lIH07IH0gXCJ0aHJvd1wiID09PSByZWNvcmQudHlwZSAmJiAoc3RhdGUgPSBcImNvbXBsZXRlZFwiLCBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIiwgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnKTsgfSB9OyB9KGlubmVyRm4sIHNlbGYsIGNvbnRleHQpLCBnZW5lcmF0b3I7IH0gZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7IHRyeSB7IHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTsgfSBjYXRjaCAoZXJyKSB7IHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTsgfSB9IGV4cG9ydHMud3JhcCA9IHdyYXA7IHZhciBDb250aW51ZVNlbnRpbmVsID0ge307IGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9IGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge30gZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fSB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTsgZGVmaW5lKEl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCwgZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSk7IHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiwgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJiBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpICYmIChJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlKTsgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID0gR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpOyBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7IFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uIChtZXRob2QpIHsgZGVmaW5lKHByb3RvdHlwZSwgbWV0aG9kLCBmdW5jdGlvbiAoYXJnKSB7IHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpOyB9KTsgfSk7IH0gZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IsIFByb21pc2VJbXBsKSB7IGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7IHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpOyBpZiAoXCJ0aHJvd1wiICE9PSByZWNvcmQudHlwZSkgeyB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZywgdmFsdWUgPSByZXN1bHQudmFsdWU7IHJldHVybiB2YWx1ZSAmJiBcIm9iamVjdFwiID09IF90eXBlb2YodmFsdWUpICYmIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikgPyBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7IGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7IH0sIGZ1bmN0aW9uIChlcnIpIHsgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpOyB9KSA6IFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24gKHVud3JhcHBlZCkgeyByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQsIHJlc29sdmUocmVzdWx0KTsgfSwgZnVuY3Rpb24gKGVycm9yKSB7IHJldHVybiBpbnZva2UoXCJ0aHJvd1wiLCBlcnJvciwgcmVzb2x2ZSwgcmVqZWN0KTsgfSk7IH0gcmVqZWN0KHJlY29yZC5hcmcpOyB9IHZhciBwcmV2aW91c1Byb21pc2U7IHRoaXMuX2ludm9rZSA9IGZ1bmN0aW9uIChtZXRob2QsIGFyZykgeyBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHsgcmV0dXJuIG5ldyBQcm9taXNlSW1wbChmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTsgfSk7IH0gcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9IHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLCBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZykgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpOyB9OyB9IGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHsgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTsgaWYgKHVuZGVmaW5lZCA9PT0gbWV0aG9kKSB7IGlmIChjb250ZXh0LmRlbGVnYXRlID0gbnVsbCwgXCJ0aHJvd1wiID09PSBjb250ZXh0Lm1ldGhvZCkgeyBpZiAoZGVsZWdhdGUuaXRlcmF0b3JbXCJyZXR1cm5cIl0gJiYgKGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIiwgY29udGV4dC5hcmcgPSB1bmRlZmluZWQsIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpLCBcInRocm93XCIgPT09IGNvbnRleHQubWV0aG9kKSkgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7IGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiLCBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpOyB9IHJldHVybiBDb250aW51ZVNlbnRpbmVsOyB9IHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7IGlmIChcInRocm93XCIgPT09IHJlY29yZC50eXBlKSByZXR1cm4gY29udGV4dC5tZXRob2QgPSBcInRocm93XCIsIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZywgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGwsIENvbnRpbnVlU2VudGluZWw7IHZhciBpbmZvID0gcmVjb3JkLmFyZzsgcmV0dXJuIGluZm8gPyBpbmZvLmRvbmUgPyAoY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWUsIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2MsIFwicmV0dXJuXCIgIT09IGNvbnRleHQubWV0aG9kICYmIChjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiLCBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZCksIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsLCBDb250aW51ZVNlbnRpbmVsKSA6IGluZm8gOiAoY29udGV4dC5tZXRob2QgPSBcInRocm93XCIsIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpLCBjb250ZXh0LmRlbGVnYXRlID0gbnVsbCwgQ29udGludWVTZW50aW5lbCk7IH0gZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHsgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTsgMSBpbiBsb2NzICYmIChlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV0pLCAyIGluIGxvY3MgJiYgKGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdLCBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM10pLCB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7IH0gZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkgeyB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTsgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiLCBkZWxldGUgcmVjb3JkLmFyZywgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDsgfSBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7IHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV0sIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKSwgdGhpcy5yZXNldCghMCk7IH0gZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7IGlmIChpdGVyYWJsZSkgeyB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07IGlmIChpdGVyYXRvck1ldGhvZCkgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpOyBpZiAoXCJmdW5jdGlvblwiID09IHR5cGVvZiBpdGVyYWJsZS5uZXh0KSByZXR1cm4gaXRlcmFibGU7IGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkgeyB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHsgZm9yICg7ICsraSA8IGl0ZXJhYmxlLmxlbmd0aDspIHsgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkgcmV0dXJuIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXSwgbmV4dC5kb25lID0gITEsIG5leHQ7IH0gcmV0dXJuIG5leHQudmFsdWUgPSB1bmRlZmluZWQsIG5leHQuZG9uZSA9ICEwLCBuZXh0OyB9OyByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDsgfSB9IHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTsgfSBmdW5jdGlvbiBkb25lUmVzdWx0KCkgeyByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiAhMCB9OyB9IHJldHVybiBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSwgZGVmaW5lKEdwLCBcImNvbnN0cnVjdG9yXCIsIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKSwgZGVmaW5lKEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLCBcImNvbnN0cnVjdG9yXCIsIEdlbmVyYXRvckZ1bmN0aW9uKSwgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBkZWZpbmUoR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvckZ1bmN0aW9uXCIpLCBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbiAoZ2VuRnVuKSB7IHZhciBjdG9yID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBnZW5GdW4gJiYgZ2VuRnVuLmNvbnN0cnVjdG9yOyByZXR1cm4gISFjdG9yICYmIChjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fCBcIkdlbmVyYXRvckZ1bmN0aW9uXCIgPT09IChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkpOyB9LCBleHBvcnRzLm1hcmsgPSBmdW5jdGlvbiAoZ2VuRnVuKSB7IHJldHVybiBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSkgOiAoZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLCBkZWZpbmUoZ2VuRnVuLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JGdW5jdGlvblwiKSksIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKSwgZ2VuRnVuOyB9LCBleHBvcnRzLmF3cmFwID0gZnVuY3Rpb24gKGFyZykgeyByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTsgfSwgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKSwgZGVmaW5lKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlLCBhc3luY0l0ZXJhdG9yU3ltYm9sLCBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9KSwgZXhwb3J0cy5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvciwgZXhwb3J0cy5hc3luYyA9IGZ1bmN0aW9uIChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCwgUHJvbWlzZUltcGwpIHsgdm9pZCAwID09PSBQcm9taXNlSW1wbCAmJiAoUHJvbWlzZUltcGwgPSBQcm9taXNlKTsgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcih3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSwgUHJvbWlzZUltcGwpOyByZXR1cm4gZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pID8gaXRlciA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkgeyByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTsgfSk7IH0sIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCksIGRlZmluZShHcCwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yXCIpLCBkZWZpbmUoR3AsIGl0ZXJhdG9yU3ltYm9sLCBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9KSwgZGVmaW5lKEdwLCBcInRvU3RyaW5nXCIsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7IH0pLCBleHBvcnRzLmtleXMgPSBmdW5jdGlvbiAob2JqZWN0KSB7IHZhciBrZXlzID0gW107IGZvciAodmFyIGtleSBpbiBvYmplY3QpIHsga2V5cy5wdXNoKGtleSk7IH0gcmV0dXJuIGtleXMucmV2ZXJzZSgpLCBmdW5jdGlvbiBuZXh0KCkgeyBmb3IgKDsga2V5cy5sZW5ndGg7KSB7IHZhciBrZXkgPSBrZXlzLnBvcCgpOyBpZiAoa2V5IGluIG9iamVjdCkgcmV0dXJuIG5leHQudmFsdWUgPSBrZXksIG5leHQuZG9uZSA9ICExLCBuZXh0OyB9IHJldHVybiBuZXh0LmRvbmUgPSAhMCwgbmV4dDsgfTsgfSwgZXhwb3J0cy52YWx1ZXMgPSB2YWx1ZXMsIENvbnRleHQucHJvdG90eXBlID0geyBjb25zdHJ1Y3RvcjogQ29udGV4dCwgcmVzZXQ6IGZ1bmN0aW9uIHJlc2V0KHNraXBUZW1wUmVzZXQpIHsgaWYgKHRoaXMucHJldiA9IDAsIHRoaXMubmV4dCA9IDAsIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQsIHRoaXMuZG9uZSA9ICExLCB0aGlzLmRlbGVnYXRlID0gbnVsbCwgdGhpcy5tZXRob2QgPSBcIm5leHRcIiwgdGhpcy5hcmcgPSB1bmRlZmluZWQsIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpLCAhc2tpcFRlbXBSZXNldCkgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7IFwidFwiID09PSBuYW1lLmNoYXJBdCgwKSAmJiBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJiAhaXNOYU4oK25hbWUuc2xpY2UoMSkpICYmICh0aGlzW25hbWVdID0gdW5kZWZpbmVkKTsgfSB9LCBzdG9wOiBmdW5jdGlvbiBzdG9wKCkgeyB0aGlzLmRvbmUgPSAhMDsgdmFyIHJvb3RSZWNvcmQgPSB0aGlzLnRyeUVudHJpZXNbMF0uY29tcGxldGlvbjsgaWYgKFwidGhyb3dcIiA9PT0gcm9vdFJlY29yZC50eXBlKSB0aHJvdyByb290UmVjb3JkLmFyZzsgcmV0dXJuIHRoaXMucnZhbDsgfSwgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uIGRpc3BhdGNoRXhjZXB0aW9uKGV4Y2VwdGlvbikgeyBpZiAodGhpcy5kb25lKSB0aHJvdyBleGNlcHRpb247IHZhciBjb250ZXh0ID0gdGhpczsgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7IHJldHVybiByZWNvcmQudHlwZSA9IFwidGhyb3dcIiwgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbiwgY29udGV4dC5uZXh0ID0gbG9jLCBjYXVnaHQgJiYgKGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCIsIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkKSwgISFjYXVnaHQ7IH0gZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkgeyB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV0sIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247IGlmIChcInJvb3RcIiA9PT0gZW50cnkudHJ5TG9jKSByZXR1cm4gaGFuZGxlKFwiZW5kXCIpOyBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikgeyB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKSwgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7IGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7IGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgITApOyBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTsgfSBlbHNlIGlmIChoYXNDYXRjaCkgeyBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsICEwKTsgfSBlbHNlIHsgaWYgKCFoYXNGaW5hbGx5KSB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTsgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7IH0gfSB9IH0sIGFicnVwdDogZnVuY3Rpb24gYWJydXB0KHR5cGUsIGFyZykgeyBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7IHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTsgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiYgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJiB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7IHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTsgYnJlYWs7IH0gfSBmaW5hbGx5RW50cnkgJiYgKFwiYnJlYWtcIiA9PT0gdHlwZSB8fCBcImNvbnRpbnVlXCIgPT09IHR5cGUpICYmIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYyAmJiAoZmluYWxseUVudHJ5ID0gbnVsbCk7IHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9OyByZXR1cm4gcmVjb3JkLnR5cGUgPSB0eXBlLCByZWNvcmQuYXJnID0gYXJnLCBmaW5hbGx5RW50cnkgPyAodGhpcy5tZXRob2QgPSBcIm5leHRcIiwgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MsIENvbnRpbnVlU2VudGluZWwpIDogdGhpcy5jb21wbGV0ZShyZWNvcmQpOyB9LCBjb21wbGV0ZTogZnVuY3Rpb24gY29tcGxldGUocmVjb3JkLCBhZnRlckxvYykgeyBpZiAoXCJ0aHJvd1wiID09PSByZWNvcmQudHlwZSkgdGhyb3cgcmVjb3JkLmFyZzsgcmV0dXJuIFwiYnJlYWtcIiA9PT0gcmVjb3JkLnR5cGUgfHwgXCJjb250aW51ZVwiID09PSByZWNvcmQudHlwZSA/IHRoaXMubmV4dCA9IHJlY29yZC5hcmcgOiBcInJldHVyblwiID09PSByZWNvcmQudHlwZSA/ICh0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmcsIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIiwgdGhpcy5uZXh0ID0gXCJlbmRcIikgOiBcIm5vcm1hbFwiID09PSByZWNvcmQudHlwZSAmJiBhZnRlckxvYyAmJiAodGhpcy5uZXh0ID0gYWZ0ZXJMb2MpLCBDb250aW51ZVNlbnRpbmVsOyB9LCBmaW5pc2g6IGZ1bmN0aW9uIGZpbmlzaChmaW5hbGx5TG9jKSB7IGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHsgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldOyBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykgcmV0dXJuIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpLCByZXNldFRyeUVudHJ5KGVudHJ5KSwgQ29udGludWVTZW50aW5lbDsgfSB9LCBcImNhdGNoXCI6IGZ1bmN0aW9uIF9jYXRjaCh0cnlMb2MpIHsgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkgeyB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07IGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykgeyB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjsgaWYgKFwidGhyb3dcIiA9PT0gcmVjb3JkLnR5cGUpIHsgdmFyIHRocm93biA9IHJlY29yZC5hcmc7IHJlc2V0VHJ5RW50cnkoZW50cnkpOyB9IHJldHVybiB0aHJvd247IH0gfSB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7IH0sIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uIGRlbGVnYXRlWWllbGQoaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHsgcmV0dXJuIHRoaXMuZGVsZWdhdGUgPSB7IGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLCByZXN1bHROYW1lOiByZXN1bHROYW1lLCBuZXh0TG9jOiBuZXh0TG9jIH0sIFwibmV4dFwiID09PSB0aGlzLm1ldGhvZCAmJiAodGhpcy5hcmcgPSB1bmRlZmluZWQpLCBDb250aW51ZVNlbnRpbmVsOyB9IH0sIGV4cG9ydHM7IH1cblxuZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykgeyB0cnkgeyB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7IHZhciB2YWx1ZSA9IGluZm8udmFsdWU7IH0gY2F0Y2ggKGVycm9yKSB7IHJlamVjdChlcnJvcik7IHJldHVybjsgfSBpZiAoaW5mby5kb25lKSB7IHJlc29sdmUodmFsdWUpOyB9IGVsc2UgeyBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7IH0gfVxuXG5mdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikgeyByZXR1cm4gZnVuY3Rpb24gKCkgeyB2YXIgc2VsZiA9IHRoaXMsIGFyZ3MgPSBhcmd1bWVudHM7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTsgZnVuY3Rpb24gX25leHQodmFsdWUpIHsgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpOyB9IGZ1bmN0aW9uIF90aHJvdyhlcnIpIHsgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7IH0gX25leHQodW5kZWZpbmVkKTsgfSk7IH07IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIobywgYWxsb3dBcnJheUxpa2UpIHsgdmFyIGl0ID0gdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0gfHwgb1tcIkBAaXRlcmF0b3JcIl07IGlmICghaXQpIHsgaWYgKEFycmF5LmlzQXJyYXkobykgfHwgKGl0ID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8pKSB8fCBhbGxvd0FycmF5TGlrZSAmJiBvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgeyBpZiAoaXQpIG8gPSBpdDsgdmFyIGkgPSAwOyB2YXIgRiA9IGZ1bmN0aW9uIEYoKSB7fTsgcmV0dXJuIHsgczogRiwgbjogZnVuY3Rpb24gbigpIHsgaWYgKGkgPj0gby5sZW5ndGgpIHJldHVybiB7IGRvbmU6IHRydWUgfTsgcmV0dXJuIHsgZG9uZTogZmFsc2UsIHZhbHVlOiBvW2krK10gfTsgfSwgZTogZnVuY3Rpb24gZShfZSkgeyB0aHJvdyBfZTsgfSwgZjogRiB9OyB9IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gaXRlcmF0ZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfSB2YXIgbm9ybWFsQ29tcGxldGlvbiA9IHRydWUsIGRpZEVyciA9IGZhbHNlLCBlcnI7IHJldHVybiB7IHM6IGZ1bmN0aW9uIHMoKSB7IGl0ID0gaXQuY2FsbChvKTsgfSwgbjogZnVuY3Rpb24gbigpIHsgdmFyIHN0ZXAgPSBpdC5uZXh0KCk7IG5vcm1hbENvbXBsZXRpb24gPSBzdGVwLmRvbmU7IHJldHVybiBzdGVwOyB9LCBlOiBmdW5jdGlvbiBlKF9lMikgeyBkaWRFcnIgPSB0cnVlOyBlcnIgPSBfZTI7IH0sIGY6IGZ1bmN0aW9uIGYoKSB7IHRyeSB7IGlmICghbm9ybWFsQ29tcGxldGlvbiAmJiBpdFtcInJldHVyblwiXSAhPSBudWxsKSBpdFtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoZGlkRXJyKSB0aHJvdyBlcnI7IH0gfSB9OyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGVudW1lcmFibGVPbmx5ICYmIChzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSkpLCBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IG51bGwgIT0gYXJndW1lbnRzW2ldID8gYXJndW1lbnRzW2ldIDoge307IGkgJSAyID8gb3duS2V5cyhPYmplY3Qoc291cmNlKSwgITApLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSkgOiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSkgOiBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3ViQ2xhc3MsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IGVsc2UgaWYgKGNhbGwgIT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRGVyaXZlZCBjb25zdHJ1Y3RvcnMgbWF5IG9ubHkgcmV0dXJuIG9iamVjdCBvciB1bmRlZmluZWRcIik7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5mdW5jdGlvbiBfYXN5bmNJdGVyYXRvcihpdGVyYWJsZSkgeyB2YXIgbWV0aG9kLCBhc3luYywgc3luYywgcmV0cnkgPSAyOyBmb3IgKFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIFN5bWJvbCAmJiAoYXN5bmMgPSBTeW1ib2wuYXN5bmNJdGVyYXRvciwgc3luYyA9IFN5bWJvbC5pdGVyYXRvcik7IHJldHJ5LS07KSB7IGlmIChhc3luYyAmJiBudWxsICE9IChtZXRob2QgPSBpdGVyYWJsZVthc3luY10pKSByZXR1cm4gbWV0aG9kLmNhbGwoaXRlcmFibGUpOyBpZiAoc3luYyAmJiBudWxsICE9IChtZXRob2QgPSBpdGVyYWJsZVtzeW5jXSkpIHJldHVybiBuZXcgQXN5bmNGcm9tU3luY0l0ZXJhdG9yKG1ldGhvZC5jYWxsKGl0ZXJhYmxlKSk7IGFzeW5jID0gXCJAQGFzeW5jSXRlcmF0b3JcIiwgc3luYyA9IFwiQEBpdGVyYXRvclwiOyB9IHRocm93IG5ldyBUeXBlRXJyb3IoXCJPYmplY3QgaXMgbm90IGFzeW5jIGl0ZXJhYmxlXCIpOyB9XG5cbmZ1bmN0aW9uIEFzeW5jRnJvbVN5bmNJdGVyYXRvcihzKSB7IGZ1bmN0aW9uIEFzeW5jRnJvbVN5bmNJdGVyYXRvckNvbnRpbnVhdGlvbihyKSB7IGlmIChPYmplY3QocikgIT09IHIpIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgVHlwZUVycm9yKHIgKyBcIiBpcyBub3QgYW4gb2JqZWN0LlwiKSk7IHZhciBkb25lID0gci5kb25lOyByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUpLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiB7IHZhbHVlOiB2YWx1ZSwgZG9uZTogZG9uZSB9OyB9KTsgfSByZXR1cm4gQXN5bmNGcm9tU3luY0l0ZXJhdG9yID0gZnVuY3Rpb24gQXN5bmNGcm9tU3luY0l0ZXJhdG9yKHMpIHsgdGhpcy5zID0gcywgdGhpcy5uID0gcy5uZXh0OyB9LCBBc3luY0Zyb21TeW5jSXRlcmF0b3IucHJvdG90eXBlID0geyBzOiBudWxsLCBuOiBudWxsLCBuZXh0OiBmdW5jdGlvbiBuZXh0KCkgeyByZXR1cm4gQXN5bmNGcm9tU3luY0l0ZXJhdG9yQ29udGludWF0aW9uKHRoaXMubi5hcHBseSh0aGlzLnMsIGFyZ3VtZW50cykpOyB9LCBcInJldHVyblwiOiBmdW5jdGlvbiBfcmV0dXJuKHZhbHVlKSB7IHZhciByZXQgPSB0aGlzLnNbXCJyZXR1cm5cIl07IHJldHVybiB2b2lkIDAgPT09IHJldCA/IFByb21pc2UucmVzb2x2ZSh7IHZhbHVlOiB2YWx1ZSwgZG9uZTogITAgfSkgOiBBc3luY0Zyb21TeW5jSXRlcmF0b3JDb250aW51YXRpb24ocmV0LmFwcGx5KHRoaXMucywgYXJndW1lbnRzKSk7IH0sIFwidGhyb3dcIjogZnVuY3Rpb24gX3Rocm93KHZhbHVlKSB7IHZhciB0aHIgPSB0aGlzLnNbXCJyZXR1cm5cIl07IHJldHVybiB2b2lkIDAgPT09IHRociA/IFByb21pc2UucmVqZWN0KHZhbHVlKSA6IEFzeW5jRnJvbVN5bmNJdGVyYXRvckNvbnRpbnVhdGlvbih0aHIuYXBwbHkodGhpcy5zLCBhcmd1bWVudHMpKTsgfSB9LCBuZXcgQXN5bmNGcm9tU3luY0l0ZXJhdG9yKHMpOyB9XG5cbi8qKlxuICogQVBJIGhhbmRsZXIgZm9yIHRoZSBjbGllbnQgc2lkZSBvZiB3aWRnZXRzLiBUaGlzIHJhaXNlcyBldmVudHNcbiAqIGZvciBlYWNoIGFjdGlvbiByZWNlaXZlZCBhcyBgYWN0aW9uOiR7YWN0aW9ufWAgKGVnOiBcImFjdGlvbjpzY3JlZW5zaG90XCIpLlxuICogRGVmYXVsdCBoYW5kbGluZyBjYW4gYmUgcHJldmVudGVkIGJ5IHVzaW5nIHByZXZlbnREZWZhdWx0KCkgb24gdGhlXG4gKiByYWlzZWQgZXZlbnQuIFRoZSBkZWZhdWx0IGhhbmRsaW5nIHZhcmllcyBmb3IgZWFjaCBhY3Rpb246IG9uZXNcbiAqIHdoaWNoIHRoZSBTREsgY2FuIGhhbmRsZSBzYWZlbHkgYXJlIGFja25vd2xlZGdlZCBhcHByb3ByaWF0ZWx5IGFuZFxuICogb25lcyB3aGljaCBhcmUgdW5oYW5kbGVkIChjdXN0b20gb3IgcmVxdWlyZSB0aGUgY2xpZW50IHRvIGRvIHNvbWV0aGluZylcbiAqIGFyZSByZWplY3RlZCB3aXRoIGFuIGVycm9yLlxuICpcbiAqIEV2ZW50cyB3aGljaCBhcmUgcHJldmVudERlZmF1bHQoKWVkIG11c3QgcmVwbHkgdXNpbmcgdGhlIHRyYW5zcG9ydC5cbiAqIFRoZSBldmVudHMgcmFpc2VkIHdpbGwgaGF2ZSBhIGRlZmF1bHQgb2YgYW4gSVdpZGdldEFwaVJlcXVlc3RcbiAqIGludGVyZmFjZS5cbiAqXG4gKiBXaGVuIHRoZSBDbGllbnRXaWRnZXRBcGkgaXMgcmVhZHkgdG8gc3RhcnQgc2VuZGluZyByZXF1ZXN0cywgaXQgd2lsbFxuICogcmFpc2UgYSBcInJlYWR5XCIgQ3VzdG9tRXZlbnQuIEFmdGVyIHRoZSByZWFkeSBldmVudCBmaXJlcywgYWN0aW9ucyBjYW5cbiAqIGJlIHNlbnQgYW5kIHRoZSB0cmFuc3BvcnQgd2lsbCBiZSByZWFkeS5cbiAqXG4gKiBXaGVuIHRoZSB3aWRnZXQgaGFzIGluZGljYXRlZCBpdCBoYXMgbG9hZGVkLCB0aGlzIGNsYXNzIHJhaXNlcyBhXG4gKiBcInByZXBhcmluZ1wiIEN1c3RvbUV2ZW50LiBUaGUgcHJlcGFyaW5nIGV2ZW50IGRvZXMgbm90IGluZGljYXRlIHRoYXRcbiAqIHRoZSB3aWRnZXQgaXMgcmVhZHkgdG8gcmVjZWl2ZSBjb21tdW5pY2F0aW9ucyAtIHRoYXQgaXMgc2lnbmlmaWVkIGJ5XG4gKiB0aGUgcmVhZHkgZXZlbnQgZXhjbHVzaXZlbHkuXG4gKlxuICogVGhpcyBjbGFzcyBvbmx5IGhhbmRsZXMgb25lIHdpZGdldCBhdCBhIHRpbWUuXG4gKi9cbnZhciBDbGllbnRXaWRnZXRBcGkgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9FdmVudEVtaXR0ZXIpIHtcbiAgX2luaGVyaXRzKENsaWVudFdpZGdldEFwaSwgX0V2ZW50RW1pdHRlcik7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihDbGllbnRXaWRnZXRBcGkpO1xuXG4gIC8vIGNvbnRlbnRMb2FkZWRBY3Rpb25TZW50IGlzIHVzZWQgdG8gY2hlY2sgdGhhdCBvbmx5IG9uZSBDb250ZW50TG9hZGVkIHJlcXVlc3QgaXMgc2VuZC5cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBjbGllbnQgd2lkZ2V0IEFQSS4gVGhpcyB3aWxsIGluc3RhbnRpYXRlIHRoZSB0cmFuc3BvcnRcbiAgICogYW5kIHN0YXJ0IGV2ZXJ5dGhpbmcuIFdoZW4gdGhlIGlmcmFtZSBpcyBsb2FkZWQgdW5kZXIgdGhlIHdpZGdldCdzXG4gICAqIGNvbmRpdGlvbnMsIGEgXCJyZWFkeVwiIGV2ZW50IHdpbGwgYmUgcmFpc2VkLlxuICAgKiBAcGFyYW0ge1dpZGdldH0gd2lkZ2V0IFRoZSB3aWRnZXQgdG8gY29tbXVuaWNhdGUgd2l0aC5cbiAgICogQHBhcmFtIHtIVE1MSUZyYW1lRWxlbWVudH0gaWZyYW1lIFRoZSBpZnJhbWUgdGhlIHdpZGdldCBpcyBpbi5cbiAgICogQHBhcmFtIHtXaWRnZXREcml2ZXJ9IGRyaXZlciBUaGUgZHJpdmVyIGZvciB0aGlzIHdpZGdldC9jbGllbnQuXG4gICAqL1xuICBmdW5jdGlvbiBDbGllbnRXaWRnZXRBcGkod2lkZ2V0LCBpZnJhbWUsIGRyaXZlcikge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDbGllbnRXaWRnZXRBcGkpO1xuXG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKTtcbiAgICBfdGhpcy53aWRnZXQgPSB3aWRnZXQ7XG4gICAgX3RoaXMuaWZyYW1lID0gaWZyYW1lO1xuICAgIF90aGlzLmRyaXZlciA9IGRyaXZlcjtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJ0cmFuc3BvcnRcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJjb250ZW50TG9hZGVkQWN0aW9uU2VudFwiLCBmYWxzZSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiYWxsb3dlZENhcGFiaWxpdGllc1wiLCBuZXcgU2V0KCkpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImFsbG93ZWRFdmVudHNcIiwgW10pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImlzU3RvcHBlZFwiLCBmYWxzZSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwidHVyblNlcnZlcnNcIiwgbnVsbCk7XG5cbiAgICBpZiAoIShpZnJhbWUgIT09IG51bGwgJiYgaWZyYW1lICE9PSB2b2lkIDAgJiYgaWZyYW1lLmNvbnRlbnRXaW5kb3cpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBpZnJhbWUgc3VwcGxpZWRcIik7XG4gICAgfVxuXG4gICAgaWYgKCF3aWRnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgd2lkZ2V0XCIpO1xuICAgIH1cblxuICAgIGlmICghZHJpdmVyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGRyaXZlclwiKTtcbiAgICB9XG5cbiAgICBfdGhpcy50cmFuc3BvcnQgPSBuZXcgX1Bvc3RtZXNzYWdlVHJhbnNwb3J0LlBvc3RtZXNzYWdlVHJhbnNwb3J0KF9XaWRnZXRBcGlEaXJlY3Rpb24uV2lkZ2V0QXBpRGlyZWN0aW9uLlRvV2lkZ2V0LCB3aWRnZXQuaWQsIGlmcmFtZS5jb250ZW50V2luZG93LCB3aW5kb3cpO1xuICAgIF90aGlzLnRyYW5zcG9ydC50YXJnZXRPcmlnaW4gPSB3aWRnZXQub3JpZ2luO1xuXG4gICAgX3RoaXMudHJhbnNwb3J0Lm9uKFwibWVzc2FnZVwiLCBfdGhpcy5oYW5kbGVNZXNzYWdlLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpKTtcblxuICAgIGlmcmFtZS5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBfdGhpcy5vbklmcmFtZUxvYWQuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSkpO1xuXG4gICAgX3RoaXMudHJhbnNwb3J0LnN0YXJ0KCk7XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoQ2xpZW50V2lkZ2V0QXBpLCBbe1xuICAgIGtleTogXCJoYXNDYXBhYmlsaXR5XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhc0NhcGFiaWxpdHkoY2FwYWJpbGl0eSkge1xuICAgICAgcmV0dXJuIHRoaXMuYWxsb3dlZENhcGFiaWxpdGllcy5oYXMoY2FwYWJpbGl0eSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNhblVzZVJvb21UaW1lbGluZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjYW5Vc2VSb29tVGltZWxpbmUocm9vbUlkKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYXNDYXBhYmlsaXR5KFwib3JnLm1hdHJpeC5tc2MyNzYyLnRpbWVsaW5lOlwiLmNvbmNhdChfU3ltYm9scy5TeW1ib2xzLkFueVJvb20pKSB8fCB0aGlzLmhhc0NhcGFiaWxpdHkoXCJvcmcubWF0cml4Lm1zYzI3NjIudGltZWxpbmU6XCIuY29uY2F0KHJvb21JZCkpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjYW5TZW5kUm9vbUV2ZW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNhblNlbmRSb29tRXZlbnQoZXZlbnRUeXBlKSB7XG4gICAgICB2YXIgbXNndHlwZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogbnVsbDtcbiAgICAgIHJldHVybiB0aGlzLmFsbG93ZWRFdmVudHMuc29tZShmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4gZS5tYXRjaGVzQXNSb29tRXZlbnQoX1dpZGdldEV2ZW50Q2FwYWJpbGl0eS5FdmVudERpcmVjdGlvbi5TZW5kLCBldmVudFR5cGUsIG1zZ3R5cGUpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNhblNlbmRTdGF0ZUV2ZW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNhblNlbmRTdGF0ZUV2ZW50KGV2ZW50VHlwZSwgc3RhdGVLZXkpIHtcbiAgICAgIHJldHVybiB0aGlzLmFsbG93ZWRFdmVudHMuc29tZShmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4gZS5tYXRjaGVzQXNTdGF0ZUV2ZW50KF9XaWRnZXRFdmVudENhcGFiaWxpdHkuRXZlbnREaXJlY3Rpb24uU2VuZCwgZXZlbnRUeXBlLCBzdGF0ZUtleSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY2FuU2VuZFRvRGV2aWNlRXZlbnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2FuU2VuZFRvRGV2aWNlRXZlbnQoZXZlbnRUeXBlKSB7XG4gICAgICByZXR1cm4gdGhpcy5hbGxvd2VkRXZlbnRzLnNvbWUoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuIGUubWF0Y2hlc0FzVG9EZXZpY2VFdmVudChfV2lkZ2V0RXZlbnRDYXBhYmlsaXR5LkV2ZW50RGlyZWN0aW9uLlNlbmQsIGV2ZW50VHlwZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY2FuUmVjZWl2ZVJvb21FdmVudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjYW5SZWNlaXZlUm9vbUV2ZW50KGV2ZW50VHlwZSkge1xuICAgICAgdmFyIG1zZ3R5cGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IG51bGw7XG4gICAgICByZXR1cm4gdGhpcy5hbGxvd2VkRXZlbnRzLnNvbWUoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuIGUubWF0Y2hlc0FzUm9vbUV2ZW50KF9XaWRnZXRFdmVudENhcGFiaWxpdHkuRXZlbnREaXJlY3Rpb24uUmVjZWl2ZSwgZXZlbnRUeXBlLCBtc2d0eXBlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjYW5SZWNlaXZlU3RhdGVFdmVudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjYW5SZWNlaXZlU3RhdGVFdmVudChldmVudFR5cGUsIHN0YXRlS2V5KSB7XG4gICAgICByZXR1cm4gdGhpcy5hbGxvd2VkRXZlbnRzLnNvbWUoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuIGUubWF0Y2hlc0FzU3RhdGVFdmVudChfV2lkZ2V0RXZlbnRDYXBhYmlsaXR5LkV2ZW50RGlyZWN0aW9uLlJlY2VpdmUsIGV2ZW50VHlwZSwgc3RhdGVLZXkpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNhblJlY2VpdmVUb0RldmljZUV2ZW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNhblJlY2VpdmVUb0RldmljZUV2ZW50KGV2ZW50VHlwZSkge1xuICAgICAgcmV0dXJuIHRoaXMuYWxsb3dlZEV2ZW50cy5zb21lKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHJldHVybiBlLm1hdGNoZXNBc1RvRGV2aWNlRXZlbnQoX1dpZGdldEV2ZW50Q2FwYWJpbGl0eS5FdmVudERpcmVjdGlvbi5SZWNlaXZlLCBldmVudFR5cGUpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInN0b3BcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3RvcCgpIHtcbiAgICAgIHRoaXMuaXNTdG9wcGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMudHJhbnNwb3J0LnN0b3AoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiYmVnaW5DYXBhYmlsaXRpZXNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYmVnaW5DYXBhYmlsaXRpZXMoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgLy8gd2lkZ2V0IGhhcyBsb2FkZWQgLSB0ZWxsIGFsbCB0aGUgbGlzdGVuZXJzIHRoYXRcbiAgICAgIHRoaXMuZW1pdChcInByZXBhcmluZ1wiKTtcbiAgICAgIHZhciByZXF1ZXN0ZWRDYXBzO1xuICAgICAgdGhpcy50cmFuc3BvcnQuc2VuZChfV2lkZ2V0QXBpQWN0aW9uLldpZGdldEFwaVRvV2lkZ2V0QWN0aW9uLkNhcGFiaWxpdGllcywge30pLnRoZW4oZnVuY3Rpb24gKGNhcHMpIHtcbiAgICAgICAgcmVxdWVzdGVkQ2FwcyA9IGNhcHMuY2FwYWJpbGl0aWVzO1xuICAgICAgICByZXR1cm4gX3RoaXMyLmRyaXZlci52YWxpZGF0ZUNhcGFiaWxpdGllcyhuZXcgU2V0KGNhcHMuY2FwYWJpbGl0aWVzKSk7XG4gICAgICB9KS50aGVuKGZ1bmN0aW9uIChhbGxvd2VkQ2Fwcykge1xuICAgICAgICBjb25zb2xlLmxvZyhcIldpZGdldCBcIi5jb25jYXQoX3RoaXMyLndpZGdldC5pZCwgXCIgaXMgYWxsb3dlZCBjYXBhYmlsaXRpZXM6XCIpLCBBcnJheS5mcm9tKGFsbG93ZWRDYXBzKSk7XG4gICAgICAgIF90aGlzMi5hbGxvd2VkQ2FwYWJpbGl0aWVzID0gYWxsb3dlZENhcHM7XG4gICAgICAgIF90aGlzMi5hbGxvd2VkRXZlbnRzID0gX1dpZGdldEV2ZW50Q2FwYWJpbGl0eS5XaWRnZXRFdmVudENhcGFiaWxpdHkuZmluZEV2ZW50Q2FwYWJpbGl0aWVzKGFsbG93ZWRDYXBzKTtcblxuICAgICAgICBfdGhpczIubm90aWZ5Q2FwYWJpbGl0aWVzKHJlcXVlc3RlZENhcHMpO1xuXG4gICAgICAgIF90aGlzMi5lbWl0KFwicmVhZHlcIik7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwibm90aWZ5Q2FwYWJpbGl0aWVzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG5vdGlmeUNhcGFiaWxpdGllcyhyZXF1ZXN0ZWQpIHtcbiAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICB0aGlzLnRyYW5zcG9ydC5zZW5kKF9XaWRnZXRBcGlBY3Rpb24uV2lkZ2V0QXBpVG9XaWRnZXRBY3Rpb24uTm90aWZ5Q2FwYWJpbGl0aWVzLCB7XG4gICAgICAgIHJlcXVlc3RlZDogcmVxdWVzdGVkLFxuICAgICAgICBhcHByb3ZlZDogQXJyYXkuZnJvbSh0aGlzLmFsbG93ZWRDYXBhYmlsaXRpZXMpXG4gICAgICB9KVtcImNhdGNoXCJdKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcIm5vbi1mYXRhbCBlcnJvciBub3RpZnlpbmcgd2lkZ2V0IG9mIGFwcHJvdmVkIGNhcGFiaWxpdGllczpcIiwgZSk7XG4gICAgICB9KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMzLmVtaXQoXCJjYXBhYmlsaXRpZXNOb3RpZmllZFwiKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJvbklmcmFtZUxvYWRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25JZnJhbWVMb2FkKGV2KSB7XG4gICAgICBpZiAodGhpcy53aWRnZXQud2FpdEZvcklmcmFtZUxvYWQpIHtcbiAgICAgICAgLy8gSWYgdGhlIHdpZGdldCBpcyBzZXQgdG8gd2FpdEZvcklmcmFtZUxvYWQgdGhlIGNhcGFiaWxpdGllcyBpbW1lZGlhdGx5IGdldCBzZXR1cCBhZnRlciBsb2FkLlxuICAgICAgICAvLyBUaGUgY2xpZW50IGRvZXMgbm90IHdhaXQgZm9yIHRoZSBDb250ZW50TG9hZGVkIGFjdGlvbi5cbiAgICAgICAgdGhpcy5iZWdpbkNhcGFiaWxpdGllcygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gUmVhY2hpbmcgdGhpcyBtZWFucywgdGhhdCB0aGUgSWZyYW1lIGdvdCByZWxvYWRlZC9sb2FkZWQgYW5kXG4gICAgICAgIC8vIHRoZSBjbGllbnRBcGkgaXMgYXdhaXRpbmcgdGhlIEZJUlNUIENvbnRlbnRMb2FkZWQgYWN0aW9uLlxuICAgICAgICB0aGlzLmNvbnRlbnRMb2FkZWRBY3Rpb25TZW50ID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImhhbmRsZUNvbnRlbnRMb2FkZWRBY3Rpb25cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaGFuZGxlQ29udGVudExvYWRlZEFjdGlvbihhY3Rpb24pIHtcbiAgICAgIGlmICh0aGlzLmNvbnRlbnRMb2FkZWRBY3Rpb25TZW50KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkltcHJvcGVyIHNlcXVlbmNlOiBDb250ZW50TG9hZGVkIEFjdGlvbiBjYW4gb25seSBiZSBzZW5kIG9uY2UgYWZ0ZXIgdGhlIHdpZGdldCBsb2FkZWQgXCIgKyBcImFuZCBzaG91bGQgb25seSBiZSB1c2VkIGlmIHdhaXRGb3JJZnJhbWVMb2FkIGlzIGZhbHNlIChkZWZhdWx0PXRydWUpXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy53aWRnZXQud2FpdEZvcklmcmFtZUxvYWQpIHtcbiAgICAgICAgdGhpcy50cmFuc3BvcnQucmVwbHkoYWN0aW9uLCB7XG4gICAgICAgICAgZXJyb3I6IHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiSW1wcm9wZXIgc2VxdWVuY2U6IG5vdCBleHBlY3RpbmcgQ29udGVudExvYWRlZCBldmVudCBpZiBcIiArIFwid2FpdEZvcklmcmFtTG9hZCBpcyB0cnVlIChkZWZhdWx0PXRydWUpXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy50cmFuc3BvcnQucmVwbHkoYWN0aW9uLCB7fSk7XG4gICAgICAgIHRoaXMuYmVnaW5DYXBhYmlsaXRpZXMoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5jb250ZW50TG9hZGVkQWN0aW9uU2VudCA9IHRydWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlcGx5VmVyc2lvbnNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVwbHlWZXJzaW9ucyhyZXF1ZXN0KSB7XG4gICAgICB0aGlzLnRyYW5zcG9ydC5yZXBseShyZXF1ZXN0LCB7XG4gICAgICAgIHN1cHBvcnRlZF92ZXJzaW9uczogX0FwaVZlcnNpb24uQ3VycmVudEFwaVZlcnNpb25zXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaGFuZGxlQ2FwYWJpbGl0aWVzUmVuZWdvdGlhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaGFuZGxlQ2FwYWJpbGl0aWVzUmVuZWdvdGlhdGUocmVxdWVzdCkge1xuICAgICAgdmFyIF9yZXF1ZXN0JGRhdGEsXG4gICAgICAgICAgX3RoaXM0ID0gdGhpcztcblxuICAgICAgLy8gYWNrbm93bGVkZ2UgZmlyc3RcbiAgICAgIHRoaXMudHJhbnNwb3J0LnJlcGx5KHJlcXVlc3QsIHt9KTtcbiAgICAgIHZhciByZXF1ZXN0ZWQgPSAoKF9yZXF1ZXN0JGRhdGEgPSByZXF1ZXN0LmRhdGEpID09PSBudWxsIHx8IF9yZXF1ZXN0JGRhdGEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9yZXF1ZXN0JGRhdGEuY2FwYWJpbGl0aWVzKSB8fCBbXTtcbiAgICAgIHZhciBuZXdseVJlcXVlc3RlZCA9IG5ldyBTZXQocmVxdWVzdGVkLmZpbHRlcihmdW5jdGlvbiAocikge1xuICAgICAgICByZXR1cm4gIV90aGlzNC5oYXNDYXBhYmlsaXR5KHIpO1xuICAgICAgfSkpO1xuXG4gICAgICBpZiAobmV3bHlSZXF1ZXN0ZWQuc2l6ZSA9PT0gMCkge1xuICAgICAgICAvLyBOb3RoaW5nIHRvIGRvIC0gbm90aWZ5IGNhcGFiaWxpdGllc1xuICAgICAgICByZXR1cm4gdGhpcy5ub3RpZnlDYXBhYmlsaXRpZXMoW10pO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmRyaXZlci52YWxpZGF0ZUNhcGFiaWxpdGllcyhuZXdseVJlcXVlc3RlZCkudGhlbihmdW5jdGlvbiAoYWxsb3dlZCkge1xuICAgICAgICBhbGxvd2VkLmZvckVhY2goZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXM0LmFsbG93ZWRDYXBhYmlsaXRpZXMuYWRkKGMpO1xuICAgICAgICB9KTtcblxuICAgICAgICB2YXIgYWxsb3dlZEV2ZW50cyA9IF9XaWRnZXRFdmVudENhcGFiaWxpdHkuV2lkZ2V0RXZlbnRDYXBhYmlsaXR5LmZpbmRFdmVudENhcGFiaWxpdGllcyhhbGxvd2VkKTtcblxuICAgICAgICBhbGxvd2VkRXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXM0LmFsbG93ZWRFdmVudHMucHVzaChjKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBfdGhpczQubm90aWZ5Q2FwYWJpbGl0aWVzKEFycmF5LmZyb20obmV3bHlSZXF1ZXN0ZWQpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJoYW5kbGVOYXZpZ2F0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVOYXZpZ2F0ZShyZXF1ZXN0KSB7XG4gICAgICB2YXIgX3JlcXVlc3QkZGF0YTIsXG4gICAgICAgICAgX3JlcXVlc3QkZGF0YTMsXG4gICAgICAgICAgX3RoaXM1ID0gdGhpcztcblxuICAgICAgaWYgKCF0aGlzLmhhc0NhcGFiaWxpdHkoX0NhcGFiaWxpdGllcy5NYXRyaXhDYXBhYmlsaXRpZXMuTVNDMjkzMU5hdmlnYXRlKSkge1xuICAgICAgICByZXR1cm4gdGhpcy50cmFuc3BvcnQucmVwbHkocmVxdWVzdCwge1xuICAgICAgICAgIGVycm9yOiB7XG4gICAgICAgICAgICBtZXNzYWdlOiBcIk1pc3NpbmcgY2FwYWJpbGl0eVwiXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKCEoKF9yZXF1ZXN0JGRhdGEyID0gcmVxdWVzdC5kYXRhKSAhPT0gbnVsbCAmJiBfcmVxdWVzdCRkYXRhMiAhPT0gdm9pZCAwICYmIF9yZXF1ZXN0JGRhdGEyLnVyaSkgfHwgISgoX3JlcXVlc3QkZGF0YTMgPSByZXF1ZXN0LmRhdGEpICE9PSBudWxsICYmIF9yZXF1ZXN0JGRhdGEzICE9PSB2b2lkIDAgJiYgX3JlcXVlc3QkZGF0YTMudXJpLnRvU3RyaW5nKCkuc3RhcnRzV2l0aChcImh0dHBzOi8vbWF0cml4LnRvLyNcIikpKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRyYW5zcG9ydC5yZXBseShyZXF1ZXN0LCB7XG4gICAgICAgICAgZXJyb3I6IHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiSW52YWxpZCBtYXRyaXgudG8gVVJJXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICB2YXIgb25FcnIgPSBmdW5jdGlvbiBvbkVycihlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJbQ2xpZW50V2lkZ2V0QXBpXSBGYWlsZWQgdG8gaGFuZGxlIG5hdmlnYXRpb246IFwiLCBlKTtcbiAgICAgICAgcmV0dXJuIF90aGlzNS50cmFuc3BvcnQucmVwbHkocmVxdWVzdCwge1xuICAgICAgICAgIGVycm9yOiB7XG4gICAgICAgICAgICBtZXNzYWdlOiBcIkVycm9yIGhhbmRsaW5nIG5hdmlnYXRpb25cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICB0cnkge1xuICAgICAgICB0aGlzLmRyaXZlci5uYXZpZ2F0ZShyZXF1ZXN0LmRhdGEudXJpLnRvU3RyaW5nKCkpW1wiY2F0Y2hcIl0oZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICByZXR1cm4gb25FcnIoZSk7XG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBfdGhpczUudHJhbnNwb3J0LnJlcGx5KHJlcXVlc3QsIHt9KTtcbiAgICAgICAgfSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBvbkVycihlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaGFuZGxlT0lEQ1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVPSURDKHJlcXVlc3QpIHtcbiAgICAgIHZhciBfdGhpczYgPSB0aGlzO1xuXG4gICAgICB2YXIgcGhhc2UgPSAxOyAvLyAxID0gaW5pdGlhbCByZXF1ZXN0LCAyID0gYWZ0ZXIgdXNlciBtYW51YWwgY29uZmlybWF0aW9uXG5cbiAgICAgIHZhciByZXBseVN0YXRlID0gZnVuY3Rpb24gcmVwbHlTdGF0ZShzdGF0ZSwgY3JlZGVudGlhbCkge1xuICAgICAgICBjcmVkZW50aWFsID0gY3JlZGVudGlhbCB8fCB7fTtcblxuICAgICAgICBpZiAocGhhc2UgPiAxKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzNi50cmFuc3BvcnQuc2VuZChfV2lkZ2V0QXBpQWN0aW9uLldpZGdldEFwaVRvV2lkZ2V0QWN0aW9uLk9wZW5JRENyZWRlbnRpYWxzLCBfb2JqZWN0U3ByZWFkKHtcbiAgICAgICAgICAgIHN0YXRlOiBzdGF0ZSxcbiAgICAgICAgICAgIG9yaWdpbmFsX3JlcXVlc3RfaWQ6IHJlcXVlc3QucmVxdWVzdElkXG4gICAgICAgICAgfSwgY3JlZGVudGlhbCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBfdGhpczYudHJhbnNwb3J0LnJlcGx5KHJlcXVlc3QsIF9vYmplY3RTcHJlYWQoe1xuICAgICAgICAgICAgc3RhdGU6IHN0YXRlXG4gICAgICAgICAgfSwgY3JlZGVudGlhbCkpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICB2YXIgcmVwbHlFcnJvciA9IGZ1bmN0aW9uIHJlcGx5RXJyb3IobXNnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJbQ2xpZW50V2lkZ2V0QXBpXSBGYWlsZWQgdG8gaGFuZGxlIE9JREM6IFwiLCBtc2cpO1xuXG4gICAgICAgIGlmIChwaGFzZSA+IDEpIHtcbiAgICAgICAgICAvLyBXZSBkb24ndCBoYXZlIGEgd2F5IHRvIGluZGljYXRlIHRoYXQgYSByYW5kb20gZXJyb3IgaGFwcGVuZWQgaW4gdGhpcyBmbG93LCBzb1xuICAgICAgICAgIC8vIGp1c3QgYmxvY2sgdGhlIGF0dGVtcHQuXG4gICAgICAgICAgcmV0dXJuIHJlcGx5U3RhdGUoX0dldE9wZW5JREFjdGlvbi5PcGVuSURSZXF1ZXN0U3RhdGUuQmxvY2tlZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzNi50cmFuc3BvcnQucmVwbHkocmVxdWVzdCwge1xuICAgICAgICAgICAgZXJyb3I6IHtcbiAgICAgICAgICAgICAgbWVzc2FnZTogbXNnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHZhciBvYnNlcnZlciA9IG5ldyBfU2ltcGxlT2JzZXJ2YWJsZS5TaW1wbGVPYnNlcnZhYmxlKGZ1bmN0aW9uICh1cGRhdGUpIHtcbiAgICAgICAgaWYgKHVwZGF0ZS5zdGF0ZSA9PT0gX0dldE9wZW5JREFjdGlvbi5PcGVuSURSZXF1ZXN0U3RhdGUuUGVuZGluZ1VzZXJDb25maXJtYXRpb24gJiYgcGhhc2UgPiAxKSB7XG4gICAgICAgICAgb2JzZXJ2ZXIuY2xvc2UoKTtcbiAgICAgICAgICByZXR1cm4gcmVwbHlFcnJvcihcImNsaWVudCBwcm92aWRlZCBvdXQtb2YtcGhhc2UgcmVzcG9uc2UgdG8gT0lEQyBmbG93XCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHVwZGF0ZS5zdGF0ZSA9PT0gX0dldE9wZW5JREFjdGlvbi5PcGVuSURSZXF1ZXN0U3RhdGUuUGVuZGluZ1VzZXJDb25maXJtYXRpb24pIHtcbiAgICAgICAgICByZXBseVN0YXRlKHVwZGF0ZS5zdGF0ZSk7XG4gICAgICAgICAgcGhhc2UrKztcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodXBkYXRlLnN0YXRlID09PSBfR2V0T3BlbklEQWN0aW9uLk9wZW5JRFJlcXVlc3RTdGF0ZS5BbGxvd2VkICYmICF1cGRhdGUudG9rZW4pIHtcbiAgICAgICAgICByZXR1cm4gcmVwbHlFcnJvcihcImNsaWVudCBwcm92aWRlZCBpbnZhbGlkIE9JREMgdG9rZW4gZm9yIGFuIGFsbG93ZWQgcmVxdWVzdFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh1cGRhdGUuc3RhdGUgPT09IF9HZXRPcGVuSURBY3Rpb24uT3BlbklEUmVxdWVzdFN0YXRlLkJsb2NrZWQpIHtcbiAgICAgICAgICB1cGRhdGUudG9rZW4gPSBudWxsOyAvLyBqdXN0IGluIGNhc2UgdGhlIGNsaWVudCBkaWQgc29tZXRoaW5nIHdlaXJkXG4gICAgICAgIH1cblxuICAgICAgICBvYnNlcnZlci5jbG9zZSgpO1xuICAgICAgICByZXR1cm4gcmVwbHlTdGF0ZSh1cGRhdGUuc3RhdGUsIHVwZGF0ZS50b2tlbik7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuZHJpdmVyLmFza09wZW5JRChvYnNlcnZlcik7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImhhbmRsZVJlYWRFdmVudHNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaGFuZGxlUmVhZEV2ZW50cyhyZXF1ZXN0KSB7XG4gICAgICB2YXIgX3RoaXM3ID0gdGhpcztcblxuICAgICAgaWYgKCFyZXF1ZXN0LmRhdGEudHlwZSkge1xuICAgICAgICByZXR1cm4gdGhpcy50cmFuc3BvcnQucmVwbHkocmVxdWVzdCwge1xuICAgICAgICAgIGVycm9yOiB7XG4gICAgICAgICAgICBtZXNzYWdlOiBcIkludmFsaWQgcmVxdWVzdCAtIG1pc3NpbmcgZXZlbnQgdHlwZVwiXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlcXVlc3QuZGF0YS5saW1pdCAhPT0gdW5kZWZpbmVkICYmICghcmVxdWVzdC5kYXRhLmxpbWl0IHx8IHJlcXVlc3QuZGF0YS5saW1pdCA8IDApKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRyYW5zcG9ydC5yZXBseShyZXF1ZXN0LCB7XG4gICAgICAgICAgZXJyb3I6IHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiSW52YWxpZCByZXF1ZXN0IC0gbGltaXQgb3V0IG9mIHJhbmdlXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICB2YXIgYXNrUm9vbUlkcyA9IG51bGw7IC8vIG51bGwgZGVub3RlcyBjdXJyZW50IHJvb20gb25seVxuXG4gICAgICBpZiAocmVxdWVzdC5kYXRhLnJvb21faWRzKSB7XG4gICAgICAgIGFza1Jvb21JZHMgPSByZXF1ZXN0LmRhdGEucm9vbV9pZHM7XG5cbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGFza1Jvb21JZHMpKSB7XG4gICAgICAgICAgYXNrUm9vbUlkcyA9IFthc2tSb29tSWRzXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBfaXRlcmF0b3IyID0gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIoYXNrUm9vbUlkcyksXG4gICAgICAgICAgICBfc3RlcDI7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBmb3IgKF9pdGVyYXRvcjIucygpOyAhKF9zdGVwMiA9IF9pdGVyYXRvcjIubigpKS5kb25lOykge1xuICAgICAgICAgICAgdmFyIHJvb21JZCA9IF9zdGVwMi52YWx1ZTtcblxuICAgICAgICAgICAgaWYgKCF0aGlzLmNhblVzZVJvb21UaW1lbGluZShyb29tSWQpKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLnRyYW5zcG9ydC5yZXBseShyZXF1ZXN0LCB7XG4gICAgICAgICAgICAgICAgZXJyb3I6IHtcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiVW5hYmxlIHRvIGFjY2VzcyByb29tIHRpbWVsaW5lOiBcIi5jb25jYXQocm9vbUlkKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBfaXRlcmF0b3IyLmUoZXJyKTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBfaXRlcmF0b3IyLmYoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgbGltaXQgPSByZXF1ZXN0LmRhdGEubGltaXQgfHwgMDtcbiAgICAgIHZhciBldmVudHMgPSBQcm9taXNlLnJlc29sdmUoW10pO1xuXG4gICAgICBpZiAocmVxdWVzdC5kYXRhLnN0YXRlX2tleSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHZhciBzdGF0ZUtleSA9IHJlcXVlc3QuZGF0YS5zdGF0ZV9rZXkgPT09IHRydWUgPyB1bmRlZmluZWQgOiByZXF1ZXN0LmRhdGEuc3RhdGVfa2V5LnRvU3RyaW5nKCk7XG5cbiAgICAgICAgaWYgKCF0aGlzLmNhblJlY2VpdmVTdGF0ZUV2ZW50KHJlcXVlc3QuZGF0YS50eXBlLCBzdGF0ZUtleSkpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy50cmFuc3BvcnQucmVwbHkocmVxdWVzdCwge1xuICAgICAgICAgICAgZXJyb3I6IHtcbiAgICAgICAgICAgICAgbWVzc2FnZTogXCJDYW5ub3QgcmVhZCBzdGF0ZSBldmVudHMgb2YgdGhpcyB0eXBlXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGV2ZW50cyA9IHRoaXMuZHJpdmVyLnJlYWRTdGF0ZUV2ZW50cyhyZXF1ZXN0LmRhdGEudHlwZSwgc3RhdGVLZXksIGxpbWl0LCBhc2tSb29tSWRzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICghdGhpcy5jYW5SZWNlaXZlUm9vbUV2ZW50KHJlcXVlc3QuZGF0YS50eXBlLCByZXF1ZXN0LmRhdGEubXNndHlwZSkpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy50cmFuc3BvcnQucmVwbHkocmVxdWVzdCwge1xuICAgICAgICAgICAgZXJyb3I6IHtcbiAgICAgICAgICAgICAgbWVzc2FnZTogXCJDYW5ub3QgcmVhZCByb29tIGV2ZW50cyBvZiB0aGlzIHR5cGVcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZXZlbnRzID0gdGhpcy5kcml2ZXIucmVhZFJvb21FdmVudHMocmVxdWVzdC5kYXRhLnR5cGUsIHJlcXVlc3QuZGF0YS5tc2d0eXBlLCBsaW1pdCwgYXNrUm9vbUlkcyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBldmVudHMudGhlbihmdW5jdGlvbiAoZXZzKSB7XG4gICAgICAgIHJldHVybiBfdGhpczcudHJhbnNwb3J0LnJlcGx5KHJlcXVlc3QsIHtcbiAgICAgICAgICBldmVudHM6IGV2c1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJoYW5kbGVTZW5kRXZlbnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaGFuZGxlU2VuZEV2ZW50KHJlcXVlc3QpIHtcbiAgICAgIHZhciBfdGhpczggPSB0aGlzO1xuXG4gICAgICBpZiAoIXJlcXVlc3QuZGF0YS50eXBlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRyYW5zcG9ydC5yZXBseShyZXF1ZXN0LCB7XG4gICAgICAgICAgZXJyb3I6IHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiSW52YWxpZCByZXF1ZXN0IC0gbWlzc2luZyBldmVudCB0eXBlXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoISFyZXF1ZXN0LmRhdGEucm9vbV9pZCAmJiAhdGhpcy5jYW5Vc2VSb29tVGltZWxpbmUocmVxdWVzdC5kYXRhLnJvb21faWQpKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRyYW5zcG9ydC5yZXBseShyZXF1ZXN0LCB7XG4gICAgICAgICAgZXJyb3I6IHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiVW5hYmxlIHRvIGFjY2VzcyByb29tIHRpbWVsaW5lOiBcIi5jb25jYXQocmVxdWVzdC5kYXRhLnJvb21faWQpXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgdmFyIGlzU3RhdGUgPSByZXF1ZXN0LmRhdGEuc3RhdGVfa2V5ICE9PSBudWxsICYmIHJlcXVlc3QuZGF0YS5zdGF0ZV9rZXkgIT09IHVuZGVmaW5lZDtcbiAgICAgIHZhciBzZW5kRXZlbnRQcm9taXNlO1xuXG4gICAgICBpZiAoaXNTdGF0ZSkge1xuICAgICAgICBpZiAoIXRoaXMuY2FuU2VuZFN0YXRlRXZlbnQocmVxdWVzdC5kYXRhLnR5cGUsIHJlcXVlc3QuZGF0YS5zdGF0ZV9rZXkpKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNwb3J0LnJlcGx5KHJlcXVlc3QsIHtcbiAgICAgICAgICAgIGVycm9yOiB7XG4gICAgICAgICAgICAgIG1lc3NhZ2U6IFwiQ2Fubm90IHNlbmQgc3RhdGUgZXZlbnRzIG9mIHRoaXMgdHlwZVwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBzZW5kRXZlbnRQcm9taXNlID0gdGhpcy5kcml2ZXIuc2VuZEV2ZW50KHJlcXVlc3QuZGF0YS50eXBlLCByZXF1ZXN0LmRhdGEuY29udGVudCB8fCB7fSwgcmVxdWVzdC5kYXRhLnN0YXRlX2tleSwgcmVxdWVzdC5kYXRhLnJvb21faWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1ZXN0LmRhdGEuY29udGVudCB8fCB7fTtcbiAgICAgICAgdmFyIG1zZ3R5cGUgPSBjb250ZW50Wydtc2d0eXBlJ107XG5cbiAgICAgICAgaWYgKCF0aGlzLmNhblNlbmRSb29tRXZlbnQocmVxdWVzdC5kYXRhLnR5cGUsIG1zZ3R5cGUpKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNwb3J0LnJlcGx5KHJlcXVlc3QsIHtcbiAgICAgICAgICAgIGVycm9yOiB7XG4gICAgICAgICAgICAgIG1lc3NhZ2U6IFwiQ2Fubm90IHNlbmQgcm9vbSBldmVudHMgb2YgdGhpcyB0eXBlXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNlbmRFdmVudFByb21pc2UgPSB0aGlzLmRyaXZlci5zZW5kRXZlbnQocmVxdWVzdC5kYXRhLnR5cGUsIGNvbnRlbnQsIG51bGwsIC8vIG5vdCBzZW5kaW5nIGEgc3RhdGUgZXZlbnRcbiAgICAgICAgcmVxdWVzdC5kYXRhLnJvb21faWQpO1xuICAgICAgfVxuXG4gICAgICBzZW5kRXZlbnRQcm9taXNlLnRoZW4oZnVuY3Rpb24gKHNlbnRFdmVudCkge1xuICAgICAgICByZXR1cm4gX3RoaXM4LnRyYW5zcG9ydC5yZXBseShyZXF1ZXN0LCB7XG4gICAgICAgICAgcm9vbV9pZDogc2VudEV2ZW50LnJvb21JZCxcbiAgICAgICAgICBldmVudF9pZDogc2VudEV2ZW50LmV2ZW50SWRcbiAgICAgICAgfSk7XG4gICAgICB9KVtcImNhdGNoXCJdKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJlcnJvciBzZW5kaW5nIGV2ZW50OiBcIiwgZSk7XG4gICAgICAgIHJldHVybiBfdGhpczgudHJhbnNwb3J0LnJlcGx5KHJlcXVlc3QsIHtcbiAgICAgICAgICBlcnJvcjoge1xuICAgICAgICAgICAgbWVzc2FnZTogXCJFcnJvciBzZW5kaW5nIGV2ZW50XCJcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImhhbmRsZVNlbmRUb0RldmljZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX2hhbmRsZVNlbmRUb0RldmljZSA9IF9hc3luY1RvR2VuZXJhdG9yKCAvKiNfX1BVUkVfXyovX3JlZ2VuZXJhdG9yUnVudGltZSgpLm1hcmsoZnVuY3Rpb24gX2NhbGxlZShyZXF1ZXN0KSB7XG4gICAgICAgIHJldHVybiBfcmVnZW5lcmF0b3JSdW50aW1lKCkud3JhcChmdW5jdGlvbiBfY2FsbGVlJChfY29udGV4dCkge1xuICAgICAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKF9jb250ZXh0LnByZXYgPSBfY29udGV4dC5uZXh0KSB7XG4gICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBpZiAocmVxdWVzdC5kYXRhLnR5cGUpIHtcbiAgICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSA1O1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDM7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNwb3J0LnJlcGx5KHJlcXVlc3QsIHtcbiAgICAgICAgICAgICAgICAgIGVycm9yOiB7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiSW52YWxpZCByZXF1ZXN0IC0gbWlzc2luZyBldmVudCB0eXBlXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDMyO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICBpZiAocmVxdWVzdC5kYXRhLm1lc3NhZ2VzKSB7XG4gICAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMTA7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gODtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50cmFuc3BvcnQucmVwbHkocmVxdWVzdCwge1xuICAgICAgICAgICAgICAgICAgZXJyb3I6IHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJJbnZhbGlkIHJlcXVlc3QgLSBtaXNzaW5nIGV2ZW50IGNvbnRlbnRzXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDMyO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgIGNhc2UgMTA6XG4gICAgICAgICAgICAgICAgaWYgKCEodHlwZW9mIHJlcXVlc3QuZGF0YS5lbmNyeXB0ZWQgIT09IFwiYm9vbGVhblwiKSkge1xuICAgICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDE1O1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDEzO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRyYW5zcG9ydC5yZXBseShyZXF1ZXN0LCB7XG4gICAgICAgICAgICAgICAgICBlcnJvcjoge1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkludmFsaWQgcmVxdWVzdCAtIG1pc3NpbmcgZW5jcnlwdGlvbiBmbGFnXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICBjYXNlIDEzOlxuICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAzMjtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICBjYXNlIDE1OlxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNhblNlbmRUb0RldmljZUV2ZW50KHJlcXVlc3QuZGF0YS50eXBlKSkge1xuICAgICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDIwO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDE4O1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRyYW5zcG9ydC5yZXBseShyZXF1ZXN0LCB7XG4gICAgICAgICAgICAgICAgICBlcnJvcjoge1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkNhbm5vdCBzZW5kIHRvLWRldmljZSBldmVudHMgb2YgdGhpcyB0eXBlXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICBjYXNlIDE4OlxuICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAzMjtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICBjYXNlIDIwOlxuICAgICAgICAgICAgICAgIF9jb250ZXh0LnByZXYgPSAyMDtcbiAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMjM7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZHJpdmVyLnNlbmRUb0RldmljZShyZXF1ZXN0LmRhdGEudHlwZSwgcmVxdWVzdC5kYXRhLmVuY3J5cHRlZCwgcmVxdWVzdC5kYXRhLm1lc3NhZ2VzKTtcblxuICAgICAgICAgICAgICBjYXNlIDIzOlxuICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAyNTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50cmFuc3BvcnQucmVwbHkocmVxdWVzdCwge30pO1xuXG4gICAgICAgICAgICAgIGNhc2UgMjU6XG4gICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDMyO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgIGNhc2UgMjc6XG4gICAgICAgICAgICAgICAgX2NvbnRleHQucHJldiA9IDI3O1xuICAgICAgICAgICAgICAgIF9jb250ZXh0LnQwID0gX2NvbnRleHRbXCJjYXRjaFwiXSgyMCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcImVycm9yIHNlbmRpbmcgdG8tZGV2aWNlIGV2ZW50XCIsIF9jb250ZXh0LnQwKTtcbiAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMzI7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNwb3J0LnJlcGx5KHJlcXVlc3QsIHtcbiAgICAgICAgICAgICAgICAgIGVycm9yOiB7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiRXJyb3Igc2VuZGluZyBldmVudFwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgY2FzZSAzMjpcbiAgICAgICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5zdG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LCBfY2FsbGVlLCB0aGlzLCBbWzIwLCAyN11dKTtcbiAgICAgIH0pKTtcblxuICAgICAgZnVuY3Rpb24gaGFuZGxlU2VuZFRvRGV2aWNlKF94KSB7XG4gICAgICAgIHJldHVybiBfaGFuZGxlU2VuZFRvRGV2aWNlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBoYW5kbGVTZW5kVG9EZXZpY2U7XG4gICAgfSgpXG4gIH0sIHtcbiAgICBrZXk6IFwicG9sbFR1cm5TZXJ2ZXJzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfcG9sbFR1cm5TZXJ2ZXJzID0gX2FzeW5jVG9HZW5lcmF0b3IoIC8qI19fUFVSRV9fKi9fcmVnZW5lcmF0b3JSdW50aW1lKCkubWFyayhmdW5jdGlvbiBfY2FsbGVlMih0dXJuU2VydmVycywgaW5pdGlhbFNlcnZlcikge1xuICAgICAgICB2YXIgX2l0ZXJhdG9yQWJydXB0Q29tcGxldGlvbiwgX2RpZEl0ZXJhdG9yRXJyb3IsIF9pdGVyYXRvckVycm9yLCBfaXRlcmF0b3IsIF9zdGVwLCBzZXJ2ZXI7XG5cbiAgICAgICAgcmV0dXJuIF9yZWdlbmVyYXRvclJ1bnRpbWUoKS53cmFwKGZ1bmN0aW9uIF9jYWxsZWUyJChfY29udGV4dDIpIHtcbiAgICAgICAgICB3aGlsZSAoMSkge1xuICAgICAgICAgICAgc3dpdGNoIChfY29udGV4dDIucHJldiA9IF9jb250ZXh0Mi5uZXh0KSB7XG4gICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBfY29udGV4dDIucHJldiA9IDA7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQyLm5leHQgPSAzO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRyYW5zcG9ydC5zZW5kKF9XaWRnZXRBcGlBY3Rpb24uV2lkZ2V0QXBpVG9XaWRnZXRBY3Rpb24uVXBkYXRlVHVyblNlcnZlcnMsIGluaXRpYWxTZXJ2ZXIgLy8gaXQncyBjb21wYXRpYmxlLCBidXQgbWlzc2luZyB0aGUgaW5kZXggc2lnbmF0dXJlXG4gICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgLy8gUGljayB0aGUgZ2VuZXJhdG9yIHVwIHdoZXJlIHdlIGxlZnQgb2ZmXG4gICAgICAgICAgICAgICAgX2l0ZXJhdG9yQWJydXB0Q29tcGxldGlvbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIF9kaWRJdGVyYXRvckVycm9yID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQyLnByZXYgPSA1O1xuICAgICAgICAgICAgICAgIF9pdGVyYXRvciA9IF9hc3luY0l0ZXJhdG9yKHR1cm5TZXJ2ZXJzKTtcblxuICAgICAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICAgICAgX2NvbnRleHQyLm5leHQgPSA5O1xuICAgICAgICAgICAgICAgIHJldHVybiBfaXRlcmF0b3IubmV4dCgpO1xuXG4gICAgICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgICAgICBpZiAoIShfaXRlcmF0b3JBYnJ1cHRDb21wbGV0aW9uID0gIShfc3RlcCA9IF9jb250ZXh0Mi5zZW50KS5kb25lKSkge1xuICAgICAgICAgICAgICAgICAgX2NvbnRleHQyLm5leHQgPSAxNjtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHNlcnZlciA9IF9zdGVwLnZhbHVlO1xuICAgICAgICAgICAgICAgIF9jb250ZXh0Mi5uZXh0ID0gMTM7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNwb3J0LnNlbmQoX1dpZGdldEFwaUFjdGlvbi5XaWRnZXRBcGlUb1dpZGdldEFjdGlvbi5VcGRhdGVUdXJuU2VydmVycywgc2VydmVyIC8vIGl0J3MgY29tcGF0aWJsZSwgYnV0IG1pc3NpbmcgdGhlIGluZGV4IHNpZ25hdHVyZVxuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgY2FzZSAxMzpcbiAgICAgICAgICAgICAgICBfaXRlcmF0b3JBYnJ1cHRDb21wbGV0aW9uID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQyLm5leHQgPSA3O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgIGNhc2UgMTY6XG4gICAgICAgICAgICAgICAgX2NvbnRleHQyLm5leHQgPSAyMjtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICBjYXNlIDE4OlxuICAgICAgICAgICAgICAgIF9jb250ZXh0Mi5wcmV2ID0gMTg7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQyLnQwID0gX2NvbnRleHQyW1wiY2F0Y2hcIl0oNSk7XG4gICAgICAgICAgICAgICAgX2RpZEl0ZXJhdG9yRXJyb3IgPSB0cnVlO1xuICAgICAgICAgICAgICAgIF9pdGVyYXRvckVycm9yID0gX2NvbnRleHQyLnQwO1xuXG4gICAgICAgICAgICAgIGNhc2UgMjI6XG4gICAgICAgICAgICAgICAgX2NvbnRleHQyLnByZXYgPSAyMjtcbiAgICAgICAgICAgICAgICBfY29udGV4dDIucHJldiA9IDIzO1xuXG4gICAgICAgICAgICAgICAgaWYgKCEoX2l0ZXJhdG9yQWJydXB0Q29tcGxldGlvbiAmJiBfaXRlcmF0b3JbXCJyZXR1cm5cIl0gIT0gbnVsbCkpIHtcbiAgICAgICAgICAgICAgICAgIF9jb250ZXh0Mi5uZXh0ID0gMjc7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBfY29udGV4dDIubmV4dCA9IDI3O1xuICAgICAgICAgICAgICAgIHJldHVybiBfaXRlcmF0b3JbXCJyZXR1cm5cIl0oKTtcblxuICAgICAgICAgICAgICBjYXNlIDI3OlxuICAgICAgICAgICAgICAgIF9jb250ZXh0Mi5wcmV2ID0gMjc7XG5cbiAgICAgICAgICAgICAgICBpZiAoIV9kaWRJdGVyYXRvckVycm9yKSB7XG4gICAgICAgICAgICAgICAgICBfY29udGV4dDIubmV4dCA9IDMwO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3I7XG5cbiAgICAgICAgICAgICAgY2FzZSAzMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQyLmZpbmlzaCgyNyk7XG5cbiAgICAgICAgICAgICAgY2FzZSAzMTpcbiAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQyLmZpbmlzaCgyMik7XG5cbiAgICAgICAgICAgICAgY2FzZSAzMjpcbiAgICAgICAgICAgICAgICBfY29udGV4dDIubmV4dCA9IDM3O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgIGNhc2UgMzQ6XG4gICAgICAgICAgICAgICAgX2NvbnRleHQyLnByZXYgPSAzNDtcbiAgICAgICAgICAgICAgICBfY29udGV4dDIudDEgPSBfY29udGV4dDJbXCJjYXRjaFwiXSgwKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiZXJyb3IgcG9sbGluZyBmb3IgVFVSTiBzZXJ2ZXJzXCIsIF9jb250ZXh0Mi50MSk7XG5cbiAgICAgICAgICAgICAgY2FzZSAzNzpcbiAgICAgICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dDIuc3RvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSwgX2NhbGxlZTIsIHRoaXMsIFtbMCwgMzRdLCBbNSwgMTgsIDIyLCAzMl0sIFsyMywsIDI3LCAzMV1dKTtcbiAgICAgIH0pKTtcblxuICAgICAgZnVuY3Rpb24gcG9sbFR1cm5TZXJ2ZXJzKF94MiwgX3gzKSB7XG4gICAgICAgIHJldHVybiBfcG9sbFR1cm5TZXJ2ZXJzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwb2xsVHVyblNlcnZlcnM7XG4gICAgfSgpXG4gIH0sIHtcbiAgICBrZXk6IFwiaGFuZGxlV2F0Y2hUdXJuU2VydmVyc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX2hhbmRsZVdhdGNoVHVyblNlcnZlcnMgPSBfYXN5bmNUb0dlbmVyYXRvciggLyojX19QVVJFX18qL19yZWdlbmVyYXRvclJ1bnRpbWUoKS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUzKHJlcXVlc3QpIHtcbiAgICAgICAgdmFyIHR1cm5TZXJ2ZXJzLCBfeWllbGQkdHVyblNlcnZlcnMkbmUsIGRvbmUsIHZhbHVlO1xuXG4gICAgICAgIHJldHVybiBfcmVnZW5lcmF0b3JSdW50aW1lKCkud3JhcChmdW5jdGlvbiBfY2FsbGVlMyQoX2NvbnRleHQzKSB7XG4gICAgICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoX2NvbnRleHQzLnByZXYgPSBfY29udGV4dDMubmV4dCkge1xuICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaGFzQ2FwYWJpbGl0eShfQ2FwYWJpbGl0aWVzLk1hdHJpeENhcGFiaWxpdGllcy5NU0MzODQ2VHVyblNlcnZlcnMpKSB7XG4gICAgICAgICAgICAgICAgICBfY29udGV4dDMubmV4dCA9IDU7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBfY29udGV4dDMubmV4dCA9IDM7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNwb3J0LnJlcGx5KHJlcXVlc3QsIHtcbiAgICAgICAgICAgICAgICAgIGVycm9yOiB7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiTWlzc2luZyBjYXBhYmlsaXR5XCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgX2NvbnRleHQzLm5leHQgPSAzMDtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnR1cm5TZXJ2ZXJzKSB7XG4gICAgICAgICAgICAgICAgICBfY29udGV4dDMubmV4dCA9IDEwO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgX2NvbnRleHQzLm5leHQgPSA4O1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRyYW5zcG9ydC5yZXBseShyZXF1ZXN0LCB7fSk7XG5cbiAgICAgICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgICAgIF9jb250ZXh0My5uZXh0ID0gMzA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgY2FzZSAxMDpcbiAgICAgICAgICAgICAgICBfY29udGV4dDMucHJldiA9IDEwO1xuICAgICAgICAgICAgICAgIHR1cm5TZXJ2ZXJzID0gdGhpcy5kcml2ZXIuZ2V0VHVyblNlcnZlcnMoKTsgLy8gUGVlayBhdCB0aGUgZmlyc3QgcmVzdWx0LCBzbyB3ZSBjYW4gYXQgbGVhc3QgdmVyaWZ5IHRoYXQgdGhlXG4gICAgICAgICAgICAgICAgLy8gY2xpZW50IGlzbid0IGJhbm5lZCBmcm9tIGdldHRpbmcgVFVSTiBzZXJ2ZXJzIGVudGlyZWx5XG5cbiAgICAgICAgICAgICAgICBfY29udGV4dDMubmV4dCA9IDE0O1xuICAgICAgICAgICAgICAgIHJldHVybiB0dXJuU2VydmVycy5uZXh0KCk7XG5cbiAgICAgICAgICAgICAgY2FzZSAxNDpcbiAgICAgICAgICAgICAgICBfeWllbGQkdHVyblNlcnZlcnMkbmUgPSBfY29udGV4dDMuc2VudDtcbiAgICAgICAgICAgICAgICBkb25lID0gX3lpZWxkJHR1cm5TZXJ2ZXJzJG5lLmRvbmU7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBfeWllbGQkdHVyblNlcnZlcnMkbmUudmFsdWU7XG5cbiAgICAgICAgICAgICAgICBpZiAoIWRvbmUpIHtcbiAgICAgICAgICAgICAgICAgIF9jb250ZXh0My5uZXh0ID0gMTk7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDbGllbnQgcmVmdXNlcyB0byBwcm92aWRlIGFueSBUVVJOIHNlcnZlcnNcIik7XG5cbiAgICAgICAgICAgICAgY2FzZSAxOTpcbiAgICAgICAgICAgICAgICBfY29udGV4dDMubmV4dCA9IDIxO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRyYW5zcG9ydC5yZXBseShyZXF1ZXN0LCB7fSk7XG5cbiAgICAgICAgICAgICAgY2FzZSAyMTpcbiAgICAgICAgICAgICAgICAvLyBTdGFydCB0aGUgcG9sbCBsb29wLCBzZW5kaW5nIHRoZSB3aWRnZXQgdGhlIGluaXRpYWwgcmVzdWx0XG4gICAgICAgICAgICAgICAgdGhpcy5wb2xsVHVyblNlcnZlcnModHVyblNlcnZlcnMsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnR1cm5TZXJ2ZXJzID0gdHVyblNlcnZlcnM7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQzLm5leHQgPSAzMDtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICBjYXNlIDI1OlxuICAgICAgICAgICAgICAgIF9jb250ZXh0My5wcmV2ID0gMjU7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQzLnQwID0gX2NvbnRleHQzW1wiY2F0Y2hcIl0oMTApO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJlcnJvciBnZXR0aW5nIGZpcnN0IFRVUk4gc2VydmVyIHJlc3VsdHNcIiwgX2NvbnRleHQzLnQwKTtcbiAgICAgICAgICAgICAgICBfY29udGV4dDMubmV4dCA9IDMwO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRyYW5zcG9ydC5yZXBseShyZXF1ZXN0LCB7XG4gICAgICAgICAgICAgICAgICBlcnJvcjoge1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIlRVUk4gc2VydmVycyBub3QgYXZhaWxhYmxlXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICBjYXNlIDMwOlxuICAgICAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0My5zdG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LCBfY2FsbGVlMywgdGhpcywgW1sxMCwgMjVdXSk7XG4gICAgICB9KSk7XG5cbiAgICAgIGZ1bmN0aW9uIGhhbmRsZVdhdGNoVHVyblNlcnZlcnMoX3g0KSB7XG4gICAgICAgIHJldHVybiBfaGFuZGxlV2F0Y2hUdXJuU2VydmVycy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gaGFuZGxlV2F0Y2hUdXJuU2VydmVycztcbiAgICB9KClcbiAgfSwge1xuICAgIGtleTogXCJoYW5kbGVVbndhdGNoVHVyblNlcnZlcnNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF9oYW5kbGVVbndhdGNoVHVyblNlcnZlcnMgPSBfYXN5bmNUb0dlbmVyYXRvciggLyojX19QVVJFX18qL19yZWdlbmVyYXRvclJ1bnRpbWUoKS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWU0KHJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuIF9yZWdlbmVyYXRvclJ1bnRpbWUoKS53cmFwKGZ1bmN0aW9uIF9jYWxsZWU0JChfY29udGV4dDQpIHtcbiAgICAgICAgICB3aGlsZSAoMSkge1xuICAgICAgICAgICAgc3dpdGNoIChfY29udGV4dDQucHJldiA9IF9jb250ZXh0NC5uZXh0KSB7XG4gICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5oYXNDYXBhYmlsaXR5KF9DYXBhYmlsaXRpZXMuTWF0cml4Q2FwYWJpbGl0aWVzLk1TQzM4NDZUdXJuU2VydmVycykpIHtcbiAgICAgICAgICAgICAgICAgIF9jb250ZXh0NC5uZXh0ID0gNTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIF9jb250ZXh0NC5uZXh0ID0gMztcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50cmFuc3BvcnQucmVwbHkocmVxdWVzdCwge1xuICAgICAgICAgICAgICAgICAgZXJyb3I6IHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJNaXNzaW5nIGNhcGFiaWxpdHlcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICBfY29udGV4dDQubmV4dCA9IDE1O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50dXJuU2VydmVycykge1xuICAgICAgICAgICAgICAgICAgX2NvbnRleHQ0Lm5leHQgPSAxMDtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIF9jb250ZXh0NC5uZXh0ID0gODtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50cmFuc3BvcnQucmVwbHkocmVxdWVzdCwge30pO1xuXG4gICAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgICAgICBfY29udGV4dDQubmV4dCA9IDE1O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgIGNhc2UgMTA6XG4gICAgICAgICAgICAgICAgX2NvbnRleHQ0Lm5leHQgPSAxMjtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50dXJuU2VydmVyc1tcInJldHVyblwiXSh1bmRlZmluZWQpO1xuXG4gICAgICAgICAgICAgIGNhc2UgMTI6XG4gICAgICAgICAgICAgICAgdGhpcy50dXJuU2VydmVycyA9IG51bGw7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQ0Lm5leHQgPSAxNTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50cmFuc3BvcnQucmVwbHkocmVxdWVzdCwge30pO1xuXG4gICAgICAgICAgICAgIGNhc2UgMTU6XG4gICAgICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ0LnN0b3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sIF9jYWxsZWU0LCB0aGlzKTtcbiAgICAgIH0pKTtcblxuICAgICAgZnVuY3Rpb24gaGFuZGxlVW53YXRjaFR1cm5TZXJ2ZXJzKF94NSkge1xuICAgICAgICByZXR1cm4gX2hhbmRsZVVud2F0Y2hUdXJuU2VydmVycy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gaGFuZGxlVW53YXRjaFR1cm5TZXJ2ZXJzO1xuICAgIH0oKVxuICB9LCB7XG4gICAga2V5OiBcImhhbmRsZVJlYWRSZWxhdGlvbnNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF9oYW5kbGVSZWFkUmVsYXRpb25zID0gX2FzeW5jVG9HZW5lcmF0b3IoIC8qI19fUFVSRV9fKi9fcmVnZW5lcmF0b3JSdW50aW1lKCkubWFyayhmdW5jdGlvbiBfY2FsbGVlNShyZXF1ZXN0KSB7XG4gICAgICAgIHZhciBfdGhpczkgPSB0aGlzO1xuXG4gICAgICAgIHZhciByZXN1bHQsIGNodW5rO1xuICAgICAgICByZXR1cm4gX3JlZ2VuZXJhdG9yUnVudGltZSgpLndyYXAoZnVuY3Rpb24gX2NhbGxlZTUkKF9jb250ZXh0NSkge1xuICAgICAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKF9jb250ZXh0NS5wcmV2ID0gX2NvbnRleHQ1Lm5leHQpIHtcbiAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIGlmIChyZXF1ZXN0LmRhdGEuZXZlbnRfaWQpIHtcbiAgICAgICAgICAgICAgICAgIF9jb250ZXh0NS5uZXh0ID0gMjtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dDUuYWJydXB0KFwicmV0dXJuXCIsIHRoaXMudHJhbnNwb3J0LnJlcGx5KHJlcXVlc3QsIHtcbiAgICAgICAgICAgICAgICAgIGVycm9yOiB7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiSW52YWxpZCByZXF1ZXN0IC0gbWlzc2luZyBldmVudCBJRFwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBpZiAoIShyZXF1ZXN0LmRhdGEubGltaXQgIT09IHVuZGVmaW5lZCAmJiByZXF1ZXN0LmRhdGEubGltaXQgPCAwKSkge1xuICAgICAgICAgICAgICAgICAgX2NvbnRleHQ1Lm5leHQgPSA0O1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0NS5hYnJ1cHQoXCJyZXR1cm5cIiwgdGhpcy50cmFuc3BvcnQucmVwbHkocmVxdWVzdCwge1xuICAgICAgICAgICAgICAgICAgZXJyb3I6IHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJJbnZhbGlkIHJlcXVlc3QgLSBsaW1pdCBvdXQgb2YgcmFuZ2VcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pKTtcblxuICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgaWYgKCEocmVxdWVzdC5kYXRhLnJvb21faWQgIT09IHVuZGVmaW5lZCAmJiAhdGhpcy5jYW5Vc2VSb29tVGltZWxpbmUocmVxdWVzdC5kYXRhLnJvb21faWQpKSkge1xuICAgICAgICAgICAgICAgICAgX2NvbnRleHQ1Lm5leHQgPSA2O1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0NS5hYnJ1cHQoXCJyZXR1cm5cIiwgdGhpcy50cmFuc3BvcnQucmVwbHkocmVxdWVzdCwge1xuICAgICAgICAgICAgICAgICAgZXJyb3I6IHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJVbmFibGUgdG8gYWNjZXNzIHJvb20gdGltZWxpbmU6IFwiLmNvbmNhdChyZXF1ZXN0LmRhdGEucm9vbV9pZClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KSk7XG5cbiAgICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgIF9jb250ZXh0NS5wcmV2ID0gNjtcbiAgICAgICAgICAgICAgICBfY29udGV4dDUubmV4dCA9IDk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZHJpdmVyLnJlYWRFdmVudFJlbGF0aW9ucyhyZXF1ZXN0LmRhdGEuZXZlbnRfaWQsIHJlcXVlc3QuZGF0YS5yb29tX2lkLCByZXF1ZXN0LmRhdGEucmVsX3R5cGUsIHJlcXVlc3QuZGF0YS5ldmVudF90eXBlLCByZXF1ZXN0LmRhdGEuZnJvbSwgcmVxdWVzdC5kYXRhLnRvLCByZXF1ZXN0LmRhdGEubGltaXQsIHJlcXVlc3QuZGF0YS5kaXJlY3Rpb24pO1xuXG4gICAgICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBfY29udGV4dDUuc2VudDtcbiAgICAgICAgICAgICAgICAvLyBvbmx5IHJldHVybiBldmVudHMgdGhhdCB0aGUgdXNlciBoYXMgdGhlIHBlcm1pc3Npb24gdG8gcmVjZWl2ZVxuICAgICAgICAgICAgICAgIGNodW5rID0gcmVzdWx0LmNodW5rLmZpbHRlcihmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgaWYgKGUuc3RhdGVfa2V5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzOS5jYW5SZWNlaXZlU3RhdGVFdmVudChlLnR5cGUsIGUuc3RhdGVfa2V5KTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpczkuY2FuUmVjZWl2ZVJvb21FdmVudChlLnR5cGUsIGUuY29udGVudFsnbXNndHlwZSddKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ1LmFicnVwdChcInJldHVyblwiLCB0aGlzLnRyYW5zcG9ydC5yZXBseShyZXF1ZXN0LCB7XG4gICAgICAgICAgICAgICAgICBjaHVuazogY2h1bmssXG4gICAgICAgICAgICAgICAgICBwcmV2X2JhdGNoOiByZXN1bHQucHJldkJhdGNoLFxuICAgICAgICAgICAgICAgICAgbmV4dF9iYXRjaDogcmVzdWx0Lm5leHRCYXRjaFxuICAgICAgICAgICAgICAgIH0pKTtcblxuICAgICAgICAgICAgICBjYXNlIDE0OlxuICAgICAgICAgICAgICAgIF9jb250ZXh0NS5wcmV2ID0gMTQ7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQ1LnQwID0gX2NvbnRleHQ1W1wiY2F0Y2hcIl0oNik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcImVycm9yIGdldHRpbmcgdGhlIHJlbGF0aW9uc1wiLCBfY29udGV4dDUudDApO1xuICAgICAgICAgICAgICAgIF9jb250ZXh0NS5uZXh0ID0gMTk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNwb3J0LnJlcGx5KHJlcXVlc3QsIHtcbiAgICAgICAgICAgICAgICAgIGVycm9yOiB7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiVW5leHBlY3RlZCBlcnJvciB3aGlsZSByZWFkaW5nIHJlbGF0aW9uc1wiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgY2FzZSAxOTpcbiAgICAgICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dDUuc3RvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSwgX2NhbGxlZTUsIHRoaXMsIFtbNiwgMTRdXSk7XG4gICAgICB9KSk7XG5cbiAgICAgIGZ1bmN0aW9uIGhhbmRsZVJlYWRSZWxhdGlvbnMoX3g2KSB7XG4gICAgICAgIHJldHVybiBfaGFuZGxlUmVhZFJlbGF0aW9ucy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gaGFuZGxlUmVhZFJlbGF0aW9ucztcbiAgICB9KClcbiAgfSwge1xuICAgIGtleTogXCJoYW5kbGVNZXNzYWdlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZU1lc3NhZ2UoZXYpIHtcbiAgICAgIGlmICh0aGlzLmlzU3RvcHBlZCkgcmV0dXJuO1xuICAgICAgdmFyIGFjdGlvbkV2ID0gbmV3IEN1c3RvbUV2ZW50KFwiYWN0aW9uOlwiLmNvbmNhdChldi5kZXRhaWwuYWN0aW9uKSwge1xuICAgICAgICBkZXRhaWw6IGV2LmRldGFpbCxcbiAgICAgICAgY2FuY2VsYWJsZTogdHJ1ZVxuICAgICAgfSk7XG4gICAgICB0aGlzLmVtaXQoXCJhY3Rpb246XCIuY29uY2F0KGV2LmRldGFpbC5hY3Rpb24pLCBhY3Rpb25Fdik7XG5cbiAgICAgIGlmICghYWN0aW9uRXYuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICBzd2l0Y2ggKGV2LmRldGFpbC5hY3Rpb24pIHtcbiAgICAgICAgICBjYXNlIF9XaWRnZXRBcGlBY3Rpb24uV2lkZ2V0QXBpRnJvbVdpZGdldEFjdGlvbi5Db250ZW50TG9hZGVkOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlQ29udGVudExvYWRlZEFjdGlvbihldi5kZXRhaWwpO1xuXG4gICAgICAgICAgY2FzZSBfV2lkZ2V0QXBpQWN0aW9uLldpZGdldEFwaUZyb21XaWRnZXRBY3Rpb24uU3VwcG9ydGVkQXBpVmVyc2lvbnM6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZXBseVZlcnNpb25zKGV2LmRldGFpbCk7XG5cbiAgICAgICAgICBjYXNlIF9XaWRnZXRBcGlBY3Rpb24uV2lkZ2V0QXBpRnJvbVdpZGdldEFjdGlvbi5TZW5kRXZlbnQ6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVTZW5kRXZlbnQoZXYuZGV0YWlsKTtcblxuICAgICAgICAgIGNhc2UgX1dpZGdldEFwaUFjdGlvbi5XaWRnZXRBcGlGcm9tV2lkZ2V0QWN0aW9uLlNlbmRUb0RldmljZTpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZVNlbmRUb0RldmljZShldi5kZXRhaWwpO1xuXG4gICAgICAgICAgY2FzZSBfV2lkZ2V0QXBpQWN0aW9uLldpZGdldEFwaUZyb21XaWRnZXRBY3Rpb24uR2V0T3BlbklEQ3JlZGVudGlhbHM6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVPSURDKGV2LmRldGFpbCk7XG5cbiAgICAgICAgICBjYXNlIF9XaWRnZXRBcGlBY3Rpb24uV2lkZ2V0QXBpRnJvbVdpZGdldEFjdGlvbi5NU0MyOTMxTmF2aWdhdGU6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVOYXZpZ2F0ZShldi5kZXRhaWwpO1xuXG4gICAgICAgICAgY2FzZSBfV2lkZ2V0QXBpQWN0aW9uLldpZGdldEFwaUZyb21XaWRnZXRBY3Rpb24uTVNDMjk3NFJlbmVnb3RpYXRlQ2FwYWJpbGl0aWVzOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlQ2FwYWJpbGl0aWVzUmVuZWdvdGlhdGUoZXYuZGV0YWlsKTtcblxuICAgICAgICAgIGNhc2UgX1dpZGdldEFwaUFjdGlvbi5XaWRnZXRBcGlGcm9tV2lkZ2V0QWN0aW9uLk1TQzI4NzZSZWFkRXZlbnRzOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUmVhZEV2ZW50cyhldi5kZXRhaWwpO1xuXG4gICAgICAgICAgY2FzZSBfV2lkZ2V0QXBpQWN0aW9uLldpZGdldEFwaUZyb21XaWRnZXRBY3Rpb24uV2F0Y2hUdXJuU2VydmVyczpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZVdhdGNoVHVyblNlcnZlcnMoZXYuZGV0YWlsKTtcblxuICAgICAgICAgIGNhc2UgX1dpZGdldEFwaUFjdGlvbi5XaWRnZXRBcGlGcm9tV2lkZ2V0QWN0aW9uLlVud2F0Y2hUdXJuU2VydmVyczpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZVVud2F0Y2hUdXJuU2VydmVycyhldi5kZXRhaWwpO1xuXG4gICAgICAgICAgY2FzZSBfV2lkZ2V0QXBpQWN0aW9uLldpZGdldEFwaUZyb21XaWRnZXRBY3Rpb24uTVNDMzg2OVJlYWRSZWxhdGlvbnM6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVSZWFkUmVsYXRpb25zKGV2LmRldGFpbCk7XG5cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNwb3J0LnJlcGx5KGV2LmRldGFpbCwge1xuICAgICAgICAgICAgICBlcnJvcjoge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiVW5rbm93biBvciB1bnN1cHBvcnRlZCBhY3Rpb246IFwiICsgZXYuZGV0YWlsLmFjdGlvblxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBUYWtlcyBhIHNjcmVlbnNob3Qgb2YgdGhlIHdpZGdldC5cbiAgICAgKiBAcmV0dXJucyBSZXNvbHZlcyB0byB0aGUgd2lkZ2V0J3Mgc2NyZWVuc2hvdC5cbiAgICAgKiBAdGhyb3dzIFRocm93cyBpZiB0aGVyZSBpcyBhIHByb2JsZW0uXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJ0YWtlU2NyZWVuc2hvdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB0YWtlU2NyZWVuc2hvdCgpIHtcbiAgICAgIHJldHVybiB0aGlzLnRyYW5zcG9ydC5zZW5kKF9XaWRnZXRBcGlBY3Rpb24uV2lkZ2V0QXBpVG9XaWRnZXRBY3Rpb24uVGFrZVNjcmVlbnNob3QsIHt9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWxlcnRzIHRoZSB3aWRnZXQgdG8gd2hldGhlciBvciBub3QgaXQgaXMgY3VycmVudGx5IHZpc2libGUuXG4gICAgICogQHBhcmFtIHtib29sZWFufSBpc1Zpc2libGUgV2hldGhlciB0aGUgd2lkZ2V0IGlzIHZpc2libGUgb3Igbm90LlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPElXaWRnZXRBcGlSZXNwb25zZURhdGE+fSBSZXNvbHZlcyB3aGVuIHRoZSB3aWRnZXQgYWNrbm93bGVkZ2VzIHRoZSB1cGRhdGUuXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJ1cGRhdGVWaXNpYmlsaXR5XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZVZpc2liaWxpdHkoaXNWaXNpYmxlKSB7XG4gICAgICByZXR1cm4gdGhpcy50cmFuc3BvcnQuc2VuZChfV2lkZ2V0QXBpQWN0aW9uLldpZGdldEFwaVRvV2lkZ2V0QWN0aW9uLlVwZGF0ZVZpc2liaWxpdHksIHtcbiAgICAgICAgdmlzaWJsZTogaXNWaXNpYmxlXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2VuZFdpZGdldENvbmZpZ1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZW5kV2lkZ2V0Q29uZmlnKGRhdGEpIHtcbiAgICAgIHJldHVybiB0aGlzLnRyYW5zcG9ydC5zZW5kKF9XaWRnZXRBcGlBY3Rpb24uV2lkZ2V0QXBpVG9XaWRnZXRBY3Rpb24uV2lkZ2V0Q29uZmlnLCBkYXRhKS50aGVuKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm5vdGlmeU1vZGFsV2lkZ2V0QnV0dG9uQ2xpY2tlZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBub3RpZnlNb2RhbFdpZGdldEJ1dHRvbkNsaWNrZWQoaWQpIHtcbiAgICAgIHJldHVybiB0aGlzLnRyYW5zcG9ydC5zZW5kKF9XaWRnZXRBcGlBY3Rpb24uV2lkZ2V0QXBpVG9XaWRnZXRBY3Rpb24uQnV0dG9uQ2xpY2tlZCwge1xuICAgICAgICBpZDogaWRcbiAgICAgIH0pLnRoZW4oKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwibm90aWZ5TW9kYWxXaWRnZXRDbG9zZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBub3RpZnlNb2RhbFdpZGdldENsb3NlKGRhdGEpIHtcbiAgICAgIHJldHVybiB0aGlzLnRyYW5zcG9ydC5zZW5kKF9XaWRnZXRBcGlBY3Rpb24uV2lkZ2V0QXBpVG9XaWRnZXRBY3Rpb24uQ2xvc2VNb2RhbFdpZGdldCwgZGF0YSkudGhlbigpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBGZWVkcyBhbiBldmVudCB0byB0aGUgd2lkZ2V0LiBJZiB0aGUgd2lkZ2V0IGlzIG5vdCBhYmxlIHRvIGFjY2VwdCB0aGUgZXZlbnQgZHVlIHRvXG4gICAgICogcGVybWlzc2lvbnMsIHRoaXMgd2lsbCBuby1vcCBhbmQgcmV0dXJuIGNhbG1seS4gSWYgdGhlIHdpZGdldCBmYWlsZWQgdG8gaGFuZGxlIHRoZVxuICAgICAqIGV2ZW50LCB0aGlzIHdpbGwgcmFpc2UgYW4gZXJyb3IuXG4gICAgICogQHBhcmFtIHtJUm9vbUV2ZW50fSByYXdFdmVudCBUaGUgZXZlbnQgdG8gKHRyeSB0bykgc2VuZCB0byB0aGUgd2lkZ2V0LlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjdXJyZW50Vmlld2VkUm9vbUlkIFRoZSByb29tIElEIHRoZSB1c2VyIGlzIGN1cnJlbnRseSBpbnRlcmFjdGluZyB3aXRoLlxuICAgICAqIE5vdCB0aGUgcm9vbSBJRCBvZiB0aGUgZXZlbnQuXG4gICAgICogQHJldHVybnMge1Byb21pc2U8dm9pZD59IFJlc29sdmVzIHdoZW4gY29tcGxldGUsIHJlamVjdHMgaWYgdGhlcmUgd2FzIGFuIGVycm9yIHNlbmRpbmcuXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJmZWVkRXZlbnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF9mZWVkRXZlbnQgPSBfYXN5bmNUb0dlbmVyYXRvciggLyojX19QVVJFX18qL19yZWdlbmVyYXRvclJ1bnRpbWUoKS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWU2KHJhd0V2ZW50LCBjdXJyZW50Vmlld2VkUm9vbUlkKSB7XG4gICAgICAgIHZhciBfcmF3RXZlbnQkY29udGVudDtcblxuICAgICAgICByZXR1cm4gX3JlZ2VuZXJhdG9yUnVudGltZSgpLndyYXAoZnVuY3Rpb24gX2NhbGxlZTYkKF9jb250ZXh0Nikge1xuICAgICAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKF9jb250ZXh0Ni5wcmV2ID0gX2NvbnRleHQ2Lm5leHQpIHtcbiAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIGlmICghKHJhd0V2ZW50LnJvb21faWQgIT09IGN1cnJlbnRWaWV3ZWRSb29tSWQgJiYgIXRoaXMuY2FuVXNlUm9vbVRpbWVsaW5lKHJhd0V2ZW50LnJvb21faWQpKSkge1xuICAgICAgICAgICAgICAgICAgX2NvbnRleHQ2Lm5leHQgPSAyO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0Ni5hYnJ1cHQoXCJyZXR1cm5cIik7XG5cbiAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIGlmICghKHJhd0V2ZW50LnN0YXRlX2tleSAhPT0gdW5kZWZpbmVkICYmIHJhd0V2ZW50LnN0YXRlX2tleSAhPT0gbnVsbCkpIHtcbiAgICAgICAgICAgICAgICAgIF9jb250ZXh0Ni5uZXh0ID0gNztcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNhblJlY2VpdmVTdGF0ZUV2ZW50KHJhd0V2ZW50LnR5cGUsIHJhd0V2ZW50LnN0YXRlX2tleSkpIHtcbiAgICAgICAgICAgICAgICAgIF9jb250ZXh0Ni5uZXh0ID0gNTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dDYuYWJydXB0KFwicmV0dXJuXCIpO1xuXG4gICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICBfY29udGV4dDYubmV4dCA9IDk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNhblJlY2VpdmVSb29tRXZlbnQocmF3RXZlbnQudHlwZSwgKF9yYXdFdmVudCRjb250ZW50ID0gcmF3RXZlbnQuY29udGVudCkgPT09IG51bGwgfHwgX3Jhd0V2ZW50JGNvbnRlbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9yYXdFdmVudCRjb250ZW50W1wibXNndHlwZVwiXSkpIHtcbiAgICAgICAgICAgICAgICAgIF9jb250ZXh0Ni5uZXh0ID0gOTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dDYuYWJydXB0KFwicmV0dXJuXCIpO1xuXG4gICAgICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgICAgICBfY29udGV4dDYubmV4dCA9IDExO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRyYW5zcG9ydC5zZW5kKF9XaWRnZXRBcGlBY3Rpb24uV2lkZ2V0QXBpVG9XaWRnZXRBY3Rpb24uU2VuZEV2ZW50LCByYXdFdmVudCAvLyBpdCdzIGNvbXBhdGlibGUsIGJ1dCBtaXNzaW5nIHRoZSBpbmRleCBzaWduYXR1cmVcbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgIGNhc2UgMTE6XG4gICAgICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ2LnN0b3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sIF9jYWxsZWU2LCB0aGlzKTtcbiAgICAgIH0pKTtcblxuICAgICAgZnVuY3Rpb24gZmVlZEV2ZW50KF94NywgX3g4KSB7XG4gICAgICAgIHJldHVybiBfZmVlZEV2ZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmZWVkRXZlbnQ7XG4gICAgfSgpXG4gICAgLyoqXG4gICAgICogRmVlZHMgYSB0by1kZXZpY2UgZXZlbnQgdG8gdGhlIHdpZGdldC4gSWYgdGhlIHdpZGdldCBpcyBub3QgYWJsZSB0byBhY2NlcHQgdGhlXG4gICAgICogZXZlbnQgZHVlIHRvIHBlcm1pc3Npb25zLCB0aGlzIHdpbGwgbm8tb3AgYW5kIHJldHVybiBjYWxtbHkuIElmIHRoZSB3aWRnZXQgZmFpbGVkXG4gICAgICogdG8gaGFuZGxlIHRoZSBldmVudCwgdGhpcyB3aWxsIHJhaXNlIGFuIGVycm9yLlxuICAgICAqIEBwYXJhbSB7SVJvb21FdmVudH0gcmF3RXZlbnQgVGhlIGV2ZW50IHRvICh0cnkgdG8pIHNlbmQgdG8gdGhlIHdpZGdldC5cbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGVuY3J5cHRlZCBXaGV0aGVyIHRoZSBldmVudCBjb250ZW50cyB3ZXJlIGVuY3J5cHRlZC5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn0gUmVzb2x2ZXMgd2hlbiBjb21wbGV0ZSwgcmVqZWN0cyBpZiB0aGVyZSB3YXMgYW4gZXJyb3Igc2VuZGluZy5cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImZlZWRUb0RldmljZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX2ZlZWRUb0RldmljZSA9IF9hc3luY1RvR2VuZXJhdG9yKCAvKiNfX1BVUkVfXyovX3JlZ2VuZXJhdG9yUnVudGltZSgpLm1hcmsoZnVuY3Rpb24gX2NhbGxlZTcocmF3RXZlbnQsIGVuY3J5cHRlZCkge1xuICAgICAgICByZXR1cm4gX3JlZ2VuZXJhdG9yUnVudGltZSgpLndyYXAoZnVuY3Rpb24gX2NhbGxlZTckKF9jb250ZXh0Nykge1xuICAgICAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKF9jb250ZXh0Ny5wcmV2ID0gX2NvbnRleHQ3Lm5leHQpIHtcbiAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5jYW5SZWNlaXZlVG9EZXZpY2VFdmVudChyYXdFdmVudC50eXBlKSkge1xuICAgICAgICAgICAgICAgICAgX2NvbnRleHQ3Lm5leHQgPSAzO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgX2NvbnRleHQ3Lm5leHQgPSAzO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRyYW5zcG9ydC5zZW5kKF9XaWRnZXRBcGlBY3Rpb24uV2lkZ2V0QXBpVG9XaWRnZXRBY3Rpb24uU2VuZFRvRGV2aWNlLCAvLyBpdCdzIGNvbXBhdGlibGUsIGJ1dCBtaXNzaW5nIHRoZSBpbmRleCBzaWduYXR1cmVcbiAgICAgICAgICAgICAgICBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHJhd0V2ZW50KSwge30sIHtcbiAgICAgICAgICAgICAgICAgIGVuY3J5cHRlZDogZW5jcnlwdGVkXG4gICAgICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dDcuc3RvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSwgX2NhbGxlZTcsIHRoaXMpO1xuICAgICAgfSkpO1xuXG4gICAgICBmdW5jdGlvbiBmZWVkVG9EZXZpY2UoX3g5LCBfeDEwKSB7XG4gICAgICAgIHJldHVybiBfZmVlZFRvRGV2aWNlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmZWVkVG9EZXZpY2U7XG4gICAgfSgpXG4gIH1dKTtcblxuICByZXR1cm4gQ2xpZW50V2lkZ2V0QXBpO1xufShfZXZlbnRzLkV2ZW50RW1pdHRlcik7XG5cbmV4cG9ydHMuQ2xpZW50V2lkZ2V0QXBpID0gQ2xpZW50V2lkZ2V0QXBpOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5TeW1ib2xzID0gdm9pZCAwO1xuXG4vKlxuICogQ29weXJpZ2h0IDIwMjEgVGhlIE1hdHJpeC5vcmcgRm91bmRhdGlvbiBDLkkuQy5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG52YXIgU3ltYm9scztcbmV4cG9ydHMuU3ltYm9scyA9IFN5bWJvbHM7XG5cbihmdW5jdGlvbiAoU3ltYm9scykge1xuICBTeW1ib2xzW1wiQW55Um9vbVwiXSA9IFwiKlwiO1xufSkoU3ltYm9scyB8fCAoZXhwb3J0cy5TeW1ib2xzID0gU3ltYm9scyA9IHt9KSk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9LCBfdHlwZW9mKG9iaik7IH1cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuV2lkZ2V0QXBpID0gdm9pZCAwO1xuXG52YXIgX2V2ZW50cyA9IHJlcXVpcmUoXCJldmVudHNcIik7XG5cbnZhciBfV2lkZ2V0QXBpRGlyZWN0aW9uID0gcmVxdWlyZShcIi4vaW50ZXJmYWNlcy9XaWRnZXRBcGlEaXJlY3Rpb25cIik7XG5cbnZhciBfQXBpVmVyc2lvbiA9IHJlcXVpcmUoXCIuL2ludGVyZmFjZXMvQXBpVmVyc2lvblwiKTtcblxudmFyIF9Qb3N0bWVzc2FnZVRyYW5zcG9ydCA9IHJlcXVpcmUoXCIuL3RyYW5zcG9ydC9Qb3N0bWVzc2FnZVRyYW5zcG9ydFwiKTtcblxudmFyIF9XaWRnZXRBcGlBY3Rpb24gPSByZXF1aXJlKFwiLi9pbnRlcmZhY2VzL1dpZGdldEFwaUFjdGlvblwiKTtcblxudmFyIF9HZXRPcGVuSURBY3Rpb24gPSByZXF1aXJlKFwiLi9pbnRlcmZhY2VzL0dldE9wZW5JREFjdGlvblwiKTtcblxudmFyIF9XaWRnZXRUeXBlID0gcmVxdWlyZShcIi4vaW50ZXJmYWNlcy9XaWRnZXRUeXBlXCIpO1xuXG52YXIgX01vZGFsV2lkZ2V0QWN0aW9ucyA9IHJlcXVpcmUoXCIuL2ludGVyZmFjZXMvTW9kYWxXaWRnZXRBY3Rpb25zXCIpO1xuXG52YXIgX1dpZGdldEV2ZW50Q2FwYWJpbGl0eSA9IHJlcXVpcmUoXCIuL21vZGVscy9XaWRnZXRFdmVudENhcGFiaWxpdHlcIik7XG5cbnZhciBfU3ltYm9scyA9IHJlcXVpcmUoXCIuL1N5bWJvbHNcIik7XG5cbmZ1bmN0aW9uIF9yZWdlbmVyYXRvclJ1bnRpbWUoKSB7IFwidXNlIHN0cmljdFwiOyAvKiEgcmVnZW5lcmF0b3ItcnVudGltZSAtLSBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy4gLS0gbGljZW5zZSAoTUlUKTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2Jsb2IvbWFpbi9MSUNFTlNFICovIF9yZWdlbmVyYXRvclJ1bnRpbWUgPSBmdW5jdGlvbiBfcmVnZW5lcmF0b3JSdW50aW1lKCkgeyByZXR1cm4gZXhwb3J0czsgfTsgdmFyIGV4cG9ydHMgPSB7fSwgT3AgPSBPYmplY3QucHJvdG90eXBlLCBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eSwgJFN5bWJvbCA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sID8gU3ltYm9sIDoge30sIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIiwgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiLCB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7IGZ1bmN0aW9uIGRlZmluZShvYmosIGtleSwgdmFsdWUpIHsgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6ICEwLCBjb25maWd1cmFibGU6ICEwLCB3cml0YWJsZTogITAgfSksIG9ialtrZXldOyB9IHRyeSB7IGRlZmluZSh7fSwgXCJcIik7IH0gY2F0Y2ggKGVycikgeyBkZWZpbmUgPSBmdW5jdGlvbiBkZWZpbmUob2JqLCBrZXksIHZhbHVlKSB7IHJldHVybiBvYmpba2V5XSA9IHZhbHVlOyB9OyB9IGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHsgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3IsIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKSwgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTsgcmV0dXJuIGdlbmVyYXRvci5faW52b2tlID0gZnVuY3Rpb24gKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHsgdmFyIHN0YXRlID0gXCJzdXNwZW5kZWRTdGFydFwiOyByZXR1cm4gZnVuY3Rpb24gKG1ldGhvZCwgYXJnKSB7IGlmIChcImV4ZWN1dGluZ1wiID09PSBzdGF0ZSkgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTsgaWYgKFwiY29tcGxldGVkXCIgPT09IHN0YXRlKSB7IGlmIChcInRocm93XCIgPT09IG1ldGhvZCkgdGhyb3cgYXJnOyByZXR1cm4gZG9uZVJlc3VsdCgpOyB9IGZvciAoY29udGV4dC5tZXRob2QgPSBtZXRob2QsIGNvbnRleHQuYXJnID0gYXJnOzspIHsgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTsgaWYgKGRlbGVnYXRlKSB7IHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpOyBpZiAoZGVsZWdhdGVSZXN1bHQpIHsgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTsgcmV0dXJuIGRlbGVnYXRlUmVzdWx0OyB9IH0gaWYgKFwibmV4dFwiID09PSBjb250ZXh0Lm1ldGhvZCkgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO2Vsc2UgaWYgKFwidGhyb3dcIiA9PT0gY29udGV4dC5tZXRob2QpIHsgaWYgKFwic3VzcGVuZGVkU3RhcnRcIiA9PT0gc3RhdGUpIHRocm93IHN0YXRlID0gXCJjb21wbGV0ZWRcIiwgY29udGV4dC5hcmc7IGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpOyB9IGVsc2UgXCJyZXR1cm5cIiA9PT0gY29udGV4dC5tZXRob2QgJiYgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpOyBzdGF0ZSA9IFwiZXhlY3V0aW5nXCI7IHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTsgaWYgKFwibm9ybWFsXCIgPT09IHJlY29yZC50eXBlKSB7IGlmIChzdGF0ZSA9IGNvbnRleHQuZG9uZSA/IFwiY29tcGxldGVkXCIgOiBcInN1c3BlbmRlZFlpZWxkXCIsIHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlOyByZXR1cm4geyB2YWx1ZTogcmVjb3JkLmFyZywgZG9uZTogY29udGV4dC5kb25lIH07IH0gXCJ0aHJvd1wiID09PSByZWNvcmQudHlwZSAmJiAoc3RhdGUgPSBcImNvbXBsZXRlZFwiLCBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIiwgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnKTsgfSB9OyB9KGlubmVyRm4sIHNlbGYsIGNvbnRleHQpLCBnZW5lcmF0b3I7IH0gZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7IHRyeSB7IHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTsgfSBjYXRjaCAoZXJyKSB7IHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTsgfSB9IGV4cG9ydHMud3JhcCA9IHdyYXA7IHZhciBDb250aW51ZVNlbnRpbmVsID0ge307IGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9IGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge30gZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fSB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTsgZGVmaW5lKEl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCwgZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSk7IHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiwgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJiBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpICYmIChJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlKTsgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID0gR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpOyBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7IFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uIChtZXRob2QpIHsgZGVmaW5lKHByb3RvdHlwZSwgbWV0aG9kLCBmdW5jdGlvbiAoYXJnKSB7IHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpOyB9KTsgfSk7IH0gZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IsIFByb21pc2VJbXBsKSB7IGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7IHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpOyBpZiAoXCJ0aHJvd1wiICE9PSByZWNvcmQudHlwZSkgeyB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZywgdmFsdWUgPSByZXN1bHQudmFsdWU7IHJldHVybiB2YWx1ZSAmJiBcIm9iamVjdFwiID09IF90eXBlb2YodmFsdWUpICYmIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikgPyBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7IGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7IH0sIGZ1bmN0aW9uIChlcnIpIHsgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpOyB9KSA6IFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24gKHVud3JhcHBlZCkgeyByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQsIHJlc29sdmUocmVzdWx0KTsgfSwgZnVuY3Rpb24gKGVycm9yKSB7IHJldHVybiBpbnZva2UoXCJ0aHJvd1wiLCBlcnJvciwgcmVzb2x2ZSwgcmVqZWN0KTsgfSk7IH0gcmVqZWN0KHJlY29yZC5hcmcpOyB9IHZhciBwcmV2aW91c1Byb21pc2U7IHRoaXMuX2ludm9rZSA9IGZ1bmN0aW9uIChtZXRob2QsIGFyZykgeyBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHsgcmV0dXJuIG5ldyBQcm9taXNlSW1wbChmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTsgfSk7IH0gcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9IHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLCBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZykgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpOyB9OyB9IGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHsgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTsgaWYgKHVuZGVmaW5lZCA9PT0gbWV0aG9kKSB7IGlmIChjb250ZXh0LmRlbGVnYXRlID0gbnVsbCwgXCJ0aHJvd1wiID09PSBjb250ZXh0Lm1ldGhvZCkgeyBpZiAoZGVsZWdhdGUuaXRlcmF0b3JbXCJyZXR1cm5cIl0gJiYgKGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIiwgY29udGV4dC5hcmcgPSB1bmRlZmluZWQsIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpLCBcInRocm93XCIgPT09IGNvbnRleHQubWV0aG9kKSkgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7IGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiLCBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpOyB9IHJldHVybiBDb250aW51ZVNlbnRpbmVsOyB9IHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7IGlmIChcInRocm93XCIgPT09IHJlY29yZC50eXBlKSByZXR1cm4gY29udGV4dC5tZXRob2QgPSBcInRocm93XCIsIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZywgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGwsIENvbnRpbnVlU2VudGluZWw7IHZhciBpbmZvID0gcmVjb3JkLmFyZzsgcmV0dXJuIGluZm8gPyBpbmZvLmRvbmUgPyAoY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWUsIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2MsIFwicmV0dXJuXCIgIT09IGNvbnRleHQubWV0aG9kICYmIChjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiLCBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZCksIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsLCBDb250aW51ZVNlbnRpbmVsKSA6IGluZm8gOiAoY29udGV4dC5tZXRob2QgPSBcInRocm93XCIsIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpLCBjb250ZXh0LmRlbGVnYXRlID0gbnVsbCwgQ29udGludWVTZW50aW5lbCk7IH0gZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHsgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTsgMSBpbiBsb2NzICYmIChlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV0pLCAyIGluIGxvY3MgJiYgKGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdLCBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM10pLCB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7IH0gZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkgeyB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTsgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiLCBkZWxldGUgcmVjb3JkLmFyZywgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDsgfSBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7IHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV0sIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKSwgdGhpcy5yZXNldCghMCk7IH0gZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7IGlmIChpdGVyYWJsZSkgeyB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07IGlmIChpdGVyYXRvck1ldGhvZCkgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpOyBpZiAoXCJmdW5jdGlvblwiID09IHR5cGVvZiBpdGVyYWJsZS5uZXh0KSByZXR1cm4gaXRlcmFibGU7IGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkgeyB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHsgZm9yICg7ICsraSA8IGl0ZXJhYmxlLmxlbmd0aDspIHsgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkgcmV0dXJuIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXSwgbmV4dC5kb25lID0gITEsIG5leHQ7IH0gcmV0dXJuIG5leHQudmFsdWUgPSB1bmRlZmluZWQsIG5leHQuZG9uZSA9ICEwLCBuZXh0OyB9OyByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDsgfSB9IHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTsgfSBmdW5jdGlvbiBkb25lUmVzdWx0KCkgeyByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiAhMCB9OyB9IHJldHVybiBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSwgZGVmaW5lKEdwLCBcImNvbnN0cnVjdG9yXCIsIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKSwgZGVmaW5lKEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLCBcImNvbnN0cnVjdG9yXCIsIEdlbmVyYXRvckZ1bmN0aW9uKSwgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBkZWZpbmUoR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvckZ1bmN0aW9uXCIpLCBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbiAoZ2VuRnVuKSB7IHZhciBjdG9yID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBnZW5GdW4gJiYgZ2VuRnVuLmNvbnN0cnVjdG9yOyByZXR1cm4gISFjdG9yICYmIChjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fCBcIkdlbmVyYXRvckZ1bmN0aW9uXCIgPT09IChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkpOyB9LCBleHBvcnRzLm1hcmsgPSBmdW5jdGlvbiAoZ2VuRnVuKSB7IHJldHVybiBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSkgOiAoZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLCBkZWZpbmUoZ2VuRnVuLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JGdW5jdGlvblwiKSksIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKSwgZ2VuRnVuOyB9LCBleHBvcnRzLmF3cmFwID0gZnVuY3Rpb24gKGFyZykgeyByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTsgfSwgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKSwgZGVmaW5lKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlLCBhc3luY0l0ZXJhdG9yU3ltYm9sLCBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9KSwgZXhwb3J0cy5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvciwgZXhwb3J0cy5hc3luYyA9IGZ1bmN0aW9uIChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCwgUHJvbWlzZUltcGwpIHsgdm9pZCAwID09PSBQcm9taXNlSW1wbCAmJiAoUHJvbWlzZUltcGwgPSBQcm9taXNlKTsgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcih3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSwgUHJvbWlzZUltcGwpOyByZXR1cm4gZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pID8gaXRlciA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkgeyByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTsgfSk7IH0sIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCksIGRlZmluZShHcCwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yXCIpLCBkZWZpbmUoR3AsIGl0ZXJhdG9yU3ltYm9sLCBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9KSwgZGVmaW5lKEdwLCBcInRvU3RyaW5nXCIsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7IH0pLCBleHBvcnRzLmtleXMgPSBmdW5jdGlvbiAob2JqZWN0KSB7IHZhciBrZXlzID0gW107IGZvciAodmFyIGtleSBpbiBvYmplY3QpIHsga2V5cy5wdXNoKGtleSk7IH0gcmV0dXJuIGtleXMucmV2ZXJzZSgpLCBmdW5jdGlvbiBuZXh0KCkgeyBmb3IgKDsga2V5cy5sZW5ndGg7KSB7IHZhciBrZXkgPSBrZXlzLnBvcCgpOyBpZiAoa2V5IGluIG9iamVjdCkgcmV0dXJuIG5leHQudmFsdWUgPSBrZXksIG5leHQuZG9uZSA9ICExLCBuZXh0OyB9IHJldHVybiBuZXh0LmRvbmUgPSAhMCwgbmV4dDsgfTsgfSwgZXhwb3J0cy52YWx1ZXMgPSB2YWx1ZXMsIENvbnRleHQucHJvdG90eXBlID0geyBjb25zdHJ1Y3RvcjogQ29udGV4dCwgcmVzZXQ6IGZ1bmN0aW9uIHJlc2V0KHNraXBUZW1wUmVzZXQpIHsgaWYgKHRoaXMucHJldiA9IDAsIHRoaXMubmV4dCA9IDAsIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQsIHRoaXMuZG9uZSA9ICExLCB0aGlzLmRlbGVnYXRlID0gbnVsbCwgdGhpcy5tZXRob2QgPSBcIm5leHRcIiwgdGhpcy5hcmcgPSB1bmRlZmluZWQsIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpLCAhc2tpcFRlbXBSZXNldCkgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7IFwidFwiID09PSBuYW1lLmNoYXJBdCgwKSAmJiBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJiAhaXNOYU4oK25hbWUuc2xpY2UoMSkpICYmICh0aGlzW25hbWVdID0gdW5kZWZpbmVkKTsgfSB9LCBzdG9wOiBmdW5jdGlvbiBzdG9wKCkgeyB0aGlzLmRvbmUgPSAhMDsgdmFyIHJvb3RSZWNvcmQgPSB0aGlzLnRyeUVudHJpZXNbMF0uY29tcGxldGlvbjsgaWYgKFwidGhyb3dcIiA9PT0gcm9vdFJlY29yZC50eXBlKSB0aHJvdyByb290UmVjb3JkLmFyZzsgcmV0dXJuIHRoaXMucnZhbDsgfSwgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uIGRpc3BhdGNoRXhjZXB0aW9uKGV4Y2VwdGlvbikgeyBpZiAodGhpcy5kb25lKSB0aHJvdyBleGNlcHRpb247IHZhciBjb250ZXh0ID0gdGhpczsgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7IHJldHVybiByZWNvcmQudHlwZSA9IFwidGhyb3dcIiwgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbiwgY29udGV4dC5uZXh0ID0gbG9jLCBjYXVnaHQgJiYgKGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCIsIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkKSwgISFjYXVnaHQ7IH0gZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkgeyB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV0sIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247IGlmIChcInJvb3RcIiA9PT0gZW50cnkudHJ5TG9jKSByZXR1cm4gaGFuZGxlKFwiZW5kXCIpOyBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikgeyB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKSwgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7IGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7IGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgITApOyBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTsgfSBlbHNlIGlmIChoYXNDYXRjaCkgeyBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsICEwKTsgfSBlbHNlIHsgaWYgKCFoYXNGaW5hbGx5KSB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTsgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7IH0gfSB9IH0sIGFicnVwdDogZnVuY3Rpb24gYWJydXB0KHR5cGUsIGFyZykgeyBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7IHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTsgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiYgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJiB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7IHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTsgYnJlYWs7IH0gfSBmaW5hbGx5RW50cnkgJiYgKFwiYnJlYWtcIiA9PT0gdHlwZSB8fCBcImNvbnRpbnVlXCIgPT09IHR5cGUpICYmIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYyAmJiAoZmluYWxseUVudHJ5ID0gbnVsbCk7IHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9OyByZXR1cm4gcmVjb3JkLnR5cGUgPSB0eXBlLCByZWNvcmQuYXJnID0gYXJnLCBmaW5hbGx5RW50cnkgPyAodGhpcy5tZXRob2QgPSBcIm5leHRcIiwgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MsIENvbnRpbnVlU2VudGluZWwpIDogdGhpcy5jb21wbGV0ZShyZWNvcmQpOyB9LCBjb21wbGV0ZTogZnVuY3Rpb24gY29tcGxldGUocmVjb3JkLCBhZnRlckxvYykgeyBpZiAoXCJ0aHJvd1wiID09PSByZWNvcmQudHlwZSkgdGhyb3cgcmVjb3JkLmFyZzsgcmV0dXJuIFwiYnJlYWtcIiA9PT0gcmVjb3JkLnR5cGUgfHwgXCJjb250aW51ZVwiID09PSByZWNvcmQudHlwZSA/IHRoaXMubmV4dCA9IHJlY29yZC5hcmcgOiBcInJldHVyblwiID09PSByZWNvcmQudHlwZSA/ICh0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmcsIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIiwgdGhpcy5uZXh0ID0gXCJlbmRcIikgOiBcIm5vcm1hbFwiID09PSByZWNvcmQudHlwZSAmJiBhZnRlckxvYyAmJiAodGhpcy5uZXh0ID0gYWZ0ZXJMb2MpLCBDb250aW51ZVNlbnRpbmVsOyB9LCBmaW5pc2g6IGZ1bmN0aW9uIGZpbmlzaChmaW5hbGx5TG9jKSB7IGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHsgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldOyBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykgcmV0dXJuIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpLCByZXNldFRyeUVudHJ5KGVudHJ5KSwgQ29udGludWVTZW50aW5lbDsgfSB9LCBcImNhdGNoXCI6IGZ1bmN0aW9uIF9jYXRjaCh0cnlMb2MpIHsgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkgeyB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07IGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykgeyB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjsgaWYgKFwidGhyb3dcIiA9PT0gcmVjb3JkLnR5cGUpIHsgdmFyIHRocm93biA9IHJlY29yZC5hcmc7IHJlc2V0VHJ5RW50cnkoZW50cnkpOyB9IHJldHVybiB0aHJvd247IH0gfSB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7IH0sIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uIGRlbGVnYXRlWWllbGQoaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHsgcmV0dXJuIHRoaXMuZGVsZWdhdGUgPSB7IGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLCByZXN1bHROYW1lOiByZXN1bHROYW1lLCBuZXh0TG9jOiBuZXh0TG9jIH0sIFwibmV4dFwiID09PSB0aGlzLm1ldGhvZCAmJiAodGhpcy5hcmcgPSB1bmRlZmluZWQpLCBDb250aW51ZVNlbnRpbmVsOyB9IH0sIGV4cG9ydHM7IH1cblxuZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykgeyB0cnkgeyB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7IHZhciB2YWx1ZSA9IGluZm8udmFsdWU7IH0gY2F0Y2ggKGVycm9yKSB7IHJlamVjdChlcnJvcik7IHJldHVybjsgfSBpZiAoaW5mby5kb25lKSB7IHJlc29sdmUodmFsdWUpOyB9IGVsc2UgeyBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7IH0gfVxuXG5mdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikgeyByZXR1cm4gZnVuY3Rpb24gKCkgeyB2YXIgc2VsZiA9IHRoaXMsIGFyZ3MgPSBhcmd1bWVudHM7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTsgZnVuY3Rpb24gX25leHQodmFsdWUpIHsgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpOyB9IGZ1bmN0aW9uIF90aHJvdyhlcnIpIHsgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7IH0gX25leHQodW5kZWZpbmVkKTsgfSk7IH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3ViQ2xhc3MsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IGVsc2UgaWYgKGNhbGwgIT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRGVyaXZlZCBjb25zdHJ1Y3RvcnMgbWF5IG9ubHkgcmV0dXJuIG9iamVjdCBvciB1bmRlZmluZWRcIik7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5mdW5jdGlvbiBfYXdhaXRBc3luY0dlbmVyYXRvcih2YWx1ZSkgeyByZXR1cm4gbmV3IF9Bd2FpdFZhbHVlKHZhbHVlKTsgfVxuXG5mdW5jdGlvbiBfd3JhcEFzeW5jR2VuZXJhdG9yKGZuKSB7IHJldHVybiBmdW5jdGlvbiAoKSB7IHJldHVybiBuZXcgX0FzeW5jR2VuZXJhdG9yKGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpOyB9OyB9XG5cbmZ1bmN0aW9uIF9Bc3luY0dlbmVyYXRvcihnZW4pIHsgdmFyIGZyb250LCBiYWNrOyBmdW5jdGlvbiBzZW5kKGtleSwgYXJnKSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHZhciByZXF1ZXN0ID0geyBrZXk6IGtleSwgYXJnOiBhcmcsIHJlc29sdmU6IHJlc29sdmUsIHJlamVjdDogcmVqZWN0LCBuZXh0OiBudWxsIH07IGlmIChiYWNrKSB7IGJhY2sgPSBiYWNrLm5leHQgPSByZXF1ZXN0OyB9IGVsc2UgeyBmcm9udCA9IGJhY2sgPSByZXF1ZXN0OyByZXN1bWUoa2V5LCBhcmcpOyB9IH0pOyB9IGZ1bmN0aW9uIHJlc3VtZShrZXksIGFyZykgeyB0cnkgeyB2YXIgcmVzdWx0ID0gZ2VuW2tleV0oYXJnKTsgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlOyB2YXIgd3JhcHBlZEF3YWl0ID0gdmFsdWUgaW5zdGFuY2VvZiBfQXdhaXRWYWx1ZTsgUHJvbWlzZS5yZXNvbHZlKHdyYXBwZWRBd2FpdCA/IHZhbHVlLndyYXBwZWQgOiB2YWx1ZSkudGhlbihmdW5jdGlvbiAoYXJnKSB7IGlmICh3cmFwcGVkQXdhaXQpIHsgcmVzdW1lKGtleSA9PT0gXCJyZXR1cm5cIiA/IFwicmV0dXJuXCIgOiBcIm5leHRcIiwgYXJnKTsgcmV0dXJuOyB9IHNldHRsZShyZXN1bHQuZG9uZSA/IFwicmV0dXJuXCIgOiBcIm5vcm1hbFwiLCBhcmcpOyB9LCBmdW5jdGlvbiAoZXJyKSB7IHJlc3VtZShcInRocm93XCIsIGVycik7IH0pOyB9IGNhdGNoIChlcnIpIHsgc2V0dGxlKFwidGhyb3dcIiwgZXJyKTsgfSB9IGZ1bmN0aW9uIHNldHRsZSh0eXBlLCB2YWx1ZSkgeyBzd2l0Y2ggKHR5cGUpIHsgY2FzZSBcInJldHVyblwiOiBmcm9udC5yZXNvbHZlKHsgdmFsdWU6IHZhbHVlLCBkb25lOiB0cnVlIH0pOyBicmVhazsgY2FzZSBcInRocm93XCI6IGZyb250LnJlamVjdCh2YWx1ZSk7IGJyZWFrOyBkZWZhdWx0OiBmcm9udC5yZXNvbHZlKHsgdmFsdWU6IHZhbHVlLCBkb25lOiBmYWxzZSB9KTsgYnJlYWs7IH0gZnJvbnQgPSBmcm9udC5uZXh0OyBpZiAoZnJvbnQpIHsgcmVzdW1lKGZyb250LmtleSwgZnJvbnQuYXJnKTsgfSBlbHNlIHsgYmFjayA9IG51bGw7IH0gfSB0aGlzLl9pbnZva2UgPSBzZW5kOyBpZiAodHlwZW9mIGdlbltcInJldHVyblwiXSAhPT0gXCJmdW5jdGlvblwiKSB7IHRoaXNbXCJyZXR1cm5cIl0gPSB1bmRlZmluZWQ7IH0gfVxuXG5fQXN5bmNHZW5lcmF0b3IucHJvdG90eXBlW3R5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH07XG5cbl9Bc3luY0dlbmVyYXRvci5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uIChhcmcpIHsgcmV0dXJuIHRoaXMuX2ludm9rZShcIm5leHRcIiwgYXJnKTsgfTtcblxuX0FzeW5jR2VuZXJhdG9yLnByb3RvdHlwZVtcInRocm93XCJdID0gZnVuY3Rpb24gKGFyZykgeyByZXR1cm4gdGhpcy5faW52b2tlKFwidGhyb3dcIiwgYXJnKTsgfTtcblxuX0FzeW5jR2VuZXJhdG9yLnByb3RvdHlwZVtcInJldHVyblwiXSA9IGZ1bmN0aW9uIChhcmcpIHsgcmV0dXJuIHRoaXMuX2ludm9rZShcInJldHVyblwiLCBhcmcpOyB9O1xuXG5mdW5jdGlvbiBfQXdhaXRWYWx1ZSh2YWx1ZSkgeyB0aGlzLndyYXBwZWQgPSB2YWx1ZTsgfVxuXG4vKipcbiAqIEFQSSBoYW5kbGVyIGZvciB3aWRnZXRzLiBUaGlzIHJhaXNlcyBldmVudHMgZm9yIGVhY2ggYWN0aW9uXG4gKiByZWNlaXZlZCBhcyBgYWN0aW9uOiR7YWN0aW9ufWAgKGVnOiBcImFjdGlvbjpzY3JlZW5zaG90XCIpLlxuICogRGVmYXVsdCBoYW5kbGluZyBjYW4gYmUgcHJldmVudGVkIGJ5IHVzaW5nIHByZXZlbnREZWZhdWx0KClcbiAqIG9uIHRoZSByYWlzZWQgZXZlbnQuIFRoZSBkZWZhdWx0IGhhbmRsaW5nIHZhcmllcyBmb3IgZWFjaFxuICogYWN0aW9uOiBvbmVzIHdoaWNoIHRoZSBTREsgY2FuIGhhbmRsZSBzYWZlbHkgYXJlIGFja25vd2xlZGdlZFxuICogYXBwcm9wcmlhdGVseSBhbmQgb25lcyB3aGljaCBhcmUgdW5oYW5kbGVkIChjdXN0b20gb3IgcmVxdWlyZVxuICogdGhlIHdpZGdldCB0byBkbyBzb21ldGhpbmcpIGFyZSByZWplY3RlZCB3aXRoIGFuIGVycm9yLlxuICpcbiAqIEV2ZW50cyB3aGljaCBhcmUgcHJldmVudERlZmF1bHQoKWVkIG11c3QgcmVwbHkgdXNpbmcgdGhlXG4gKiB0cmFuc3BvcnQuIFRoZSBldmVudHMgcmFpc2VkIHdpbGwgaGF2ZSBhIGRldGFpbCBvZiBhblxuICogSVdpZGdldEFwaVJlcXVlc3QgaW50ZXJmYWNlLlxuICpcbiAqIFdoZW4gdGhlIFdpZGdldEFwaSBpcyByZWFkeSB0byBzdGFydCBzZW5kaW5nIHJlcXVlc3RzLCBpdCB3aWxsXG4gKiByYWlzZSBhIFwicmVhZHlcIiBDdXN0b21FdmVudC4gQWZ0ZXIgdGhlIHJlYWR5IGV2ZW50IGZpcmVzLCBhY3Rpb25zXG4gKiBjYW4gYmUgc2VudCBhbmQgdGhlIHRyYW5zcG9ydCB3aWxsIGJlIHJlYWR5LlxuICovXG52YXIgV2lkZ2V0QXBpID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfRXZlbnRFbWl0dGVyKSB7XG4gIF9pbmhlcml0cyhXaWRnZXRBcGksIF9FdmVudEVtaXR0ZXIpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoV2lkZ2V0QXBpKTtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBBUEkgaGFuZGxlciBmb3IgdGhlIGdpdmVuIHdpZGdldC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHdpZGdldElkIFRoZSB3aWRnZXQgSUQgdG8gbGlzdGVuIGZvci4gSWYgbm90IHN1cHBsaWVkIHRoZW5cbiAgICogdGhlIEFQSSB3aWxsIHVzZSB0aGUgd2lkZ2V0IElEIGZyb20gdGhlIGZpcnN0IHZhbGlkIHJlcXVlc3QgaXQgcmVjZWl2ZXMuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbGllbnRPcmlnaW4gVGhlIG9yaWdpbiBvZiB0aGUgY2xpZW50LCBvciBudWxsIGlmIG5vdCBrbm93bi5cbiAgICovXG4gIGZ1bmN0aW9uIFdpZGdldEFwaSgpIHtcbiAgICB2YXIgX3RoaXMyO1xuXG4gICAgdmFyIHdpZGdldElkID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBudWxsO1xuICAgIHZhciBjbGllbnRPcmlnaW4gPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IG51bGw7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgV2lkZ2V0QXBpKTtcblxuICAgIF90aGlzMiA9IF9zdXBlci5jYWxsKHRoaXMpO1xuICAgIF90aGlzMi5jbGllbnRPcmlnaW4gPSBjbGllbnRPcmlnaW47XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpczIpLCBcInRyYW5zcG9ydFwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMyKSwgXCJjYXBhYmlsaXRpZXNGaW5pc2hlZFwiLCBmYWxzZSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpczIpLCBcInN1cHBvcnRzTVNDMjk3NFJlbmVnb3RpYXRlXCIsIGZhbHNlKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzMiksIFwicmVxdWVzdGVkQ2FwYWJpbGl0aWVzXCIsIFtdKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzMiksIFwiYXBwcm92ZWRDYXBhYmlsaXRpZXNcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzMiksIFwiY2FjaGVkQ2xpZW50VmVyc2lvbnNcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzMiksIFwidHVyblNlcnZlcldhdGNoZXJzXCIsIDApO1xuXG4gICAgaWYgKCF3aW5kb3cucGFyZW50KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBwYXJlbnQgd2luZG93LiBUaGlzIHdpZGdldCBkb2Vzbid0IGFwcGVhciB0byBiZSBlbWJlZGRlZCBwcm9wZXJseS5cIik7XG4gICAgfVxuXG4gICAgX3RoaXMyLnRyYW5zcG9ydCA9IG5ldyBfUG9zdG1lc3NhZ2VUcmFuc3BvcnQuUG9zdG1lc3NhZ2VUcmFuc3BvcnQoX1dpZGdldEFwaURpcmVjdGlvbi5XaWRnZXRBcGlEaXJlY3Rpb24uRnJvbVdpZGdldCwgd2lkZ2V0SWQsIHdpbmRvdy5wYXJlbnQsIHdpbmRvdyk7XG4gICAgX3RoaXMyLnRyYW5zcG9ydC50YXJnZXRPcmlnaW4gPSBjbGllbnRPcmlnaW47XG5cbiAgICBfdGhpczIudHJhbnNwb3J0Lm9uKFwibWVzc2FnZVwiLCBfdGhpczIuaGFuZGxlTWVzc2FnZS5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMyKSkpO1xuXG4gICAgcmV0dXJuIF90aGlzMjtcbiAgfVxuICAvKipcbiAgICogRGV0ZXJtaW5lcyBpZiB0aGUgd2lkZ2V0IHdhcyBncmFudGVkIGEgcGFydGljdWxhciBjYXBhYmlsaXR5LiBOb3RlIHRoYXQgb25cbiAgICogY2xpZW50cyB3aGVyZSB0aGUgY2FwYWJpbGl0aWVzIGFyZSBub3QgZmVkIGJhY2sgdG8gdGhlIHdpZGdldCB0aGlzIGZ1bmN0aW9uXG4gICAqIHdpbGwgcmVseSBvbiByZXF1ZXN0ZWQgY2FwYWJpbGl0aWVzIGluc3RlYWQuXG4gICAqIEBwYXJhbSB7Q2FwYWJpbGl0eX0gY2FwYWJpbGl0eSBUaGUgY2FwYWJpbGl0eSB0byBjaGVjayBmb3IgYXBwcm92YWwgb2YuXG4gICAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSB3aWRnZXQgaGFzIGFwcHJvdmFsIGZvciB0aGUgZ2l2ZW4gY2FwYWJpbGl0eS5cbiAgICovXG5cblxuICBfY3JlYXRlQ2xhc3MoV2lkZ2V0QXBpLCBbe1xuICAgIGtleTogXCJoYXNDYXBhYmlsaXR5XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhc0NhcGFiaWxpdHkoY2FwYWJpbGl0eSkge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodGhpcy5hcHByb3ZlZENhcGFiaWxpdGllcykpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXBwcm92ZWRDYXBhYmlsaXRpZXMuaW5jbHVkZXMoY2FwYWJpbGl0eSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RlZENhcGFiaWxpdGllcy5pbmNsdWRlcyhjYXBhYmlsaXR5KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmVxdWVzdCBhIGNhcGFiaWxpdHkgZnJvbSB0aGUgY2xpZW50LiBJdCBpcyBub3QgZ3VhcmFudGVlZCB0byBiZSBhbGxvd2VkLFxuICAgICAqIGJ1dCB3aWxsIGJlIGFza2VkIGZvci5cbiAgICAgKiBAcGFyYW0ge0NhcGFiaWxpdHl9IGNhcGFiaWxpdHkgVGhlIGNhcGFiaWxpdHkgdG8gcmVxdWVzdC5cbiAgICAgKiBAdGhyb3dzIFRocm93cyBpZiB0aGUgY2FwYWJpbGl0aWVzIG5lZ290aWF0aW9uIGhhcyBhbHJlYWR5IHN0YXJ0ZWQgYW5kIHRoZVxuICAgICAqIHdpZGdldCBpcyB1bmFibGUgdG8gcmVxdWVzdCBhZGRpdGlvbmFsIGNhcGFiaWxpdGllcy5cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInJlcXVlc3RDYXBhYmlsaXR5XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlcXVlc3RDYXBhYmlsaXR5KGNhcGFiaWxpdHkpIHtcbiAgICAgIGlmICh0aGlzLmNhcGFiaWxpdGllc0ZpbmlzaGVkICYmICF0aGlzLnN1cHBvcnRzTVNDMjk3NFJlbmVnb3RpYXRlKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhcGFiaWxpdGllcyBoYXZlIGFscmVhZHkgYmVlbiBuZWdvdGlhdGVkXCIpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnJlcXVlc3RlZENhcGFiaWxpdGllcy5wdXNoKGNhcGFiaWxpdHkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXF1ZXN0IGNhcGFiaWxpdGllcyBmcm9tIHRoZSBjbGllbnQuIFRoZXkgYXJlIG5vdCBndWFyYW50ZWVkIHRvIGJlIGFsbG93ZWQsXG4gICAgICogYnV0IHdpbGwgYmUgYXNrZWQgZm9yIGlmIHRoZSBuZWdvdGlhdGlvbiBoYXMgbm90IGFscmVhZHkgaGFwcGVuZWQuXG4gICAgICogQHBhcmFtIHtDYXBhYmlsaXR5W119IGNhcGFiaWxpdGllcyBUaGUgY2FwYWJpbGl0aWVzIHRvIHJlcXVlc3QuXG4gICAgICogQHRocm93cyBUaHJvd3MgaWYgdGhlIGNhcGFiaWxpdGllcyBuZWdvdGlhdGlvbiBoYXMgYWxyZWFkeSBzdGFydGVkLlxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwicmVxdWVzdENhcGFiaWxpdGllc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZXF1ZXN0Q2FwYWJpbGl0aWVzKGNhcGFiaWxpdGllcykge1xuICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgIGNhcGFiaWxpdGllcy5mb3JFYWNoKGZ1bmN0aW9uIChjYXApIHtcbiAgICAgICAgcmV0dXJuIF90aGlzMy5yZXF1ZXN0Q2FwYWJpbGl0eShjYXApO1xuICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlcXVlc3RzIHRoZSBjYXBhYmlsaXR5IHRvIGludGVyYWN0IHdpdGggcm9vbXMgb3RoZXIgdGhhbiB0aGUgdXNlcidzIGN1cnJlbnRseVxuICAgICAqIHZpZXdlZCByb29tLiBBcHBsaWVzIHRvIGV2ZW50IHJlY2VpdmluZyBhbmQgc2VuZGluZy5cbiAgICAgKiBAcGFyYW0ge3N0cmluZyB8IFN5bWJvbHMuQW55Um9vbX0gcm9vbUlkIFRoZSByb29tIElELCBvciBgU3ltYm9scy5BbnlSb29tYCB0b1xuICAgICAqIGRlbm90ZSBhbGwga25vd24gcm9vbXMuXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJyZXF1ZXN0Q2FwYWJpbGl0eUZvclJvb21UaW1lbGluZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZXF1ZXN0Q2FwYWJpbGl0eUZvclJvb21UaW1lbGluZShyb29tSWQpIHtcbiAgICAgIHRoaXMucmVxdWVzdENhcGFiaWxpdHkoXCJvcmcubWF0cml4Lm1zYzI3NjIudGltZWxpbmU6XCIuY29uY2F0KHJvb21JZCkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXF1ZXN0cyB0aGUgY2FwYWJpbGl0eSB0byBzZW5kIGEgZ2l2ZW4gc3RhdGUgZXZlbnQgd2l0aCBvcHRpb25hbCBleHBsaWNpdFxuICAgICAqIHN0YXRlIGtleS4gSXQgaXMgbm90IGd1YXJhbnRlZWQgdG8gYmUgYWxsb3dlZCwgYnV0IHdpbGwgYmUgYXNrZWQgZm9yIGlmIHRoZVxuICAgICAqIG5lZ290aWF0aW9uIGhhcyBub3QgYWxyZWFkeSBoYXBwZW5lZC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnRUeXBlIFRoZSBzdGF0ZSBldmVudCB0eXBlIHRvIGFzayBmb3IuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHN0YXRlS2V5IElmIHNwZWNpZmllZCwgdGhlIHNwZWNpZmljIHN0YXRlIGtleSB0byByZXF1ZXN0LlxuICAgICAqIE90aGVyd2lzZSBhbGwgc3RhdGUga2V5cyB3aWxsIGJlIHJlcXVlc3RlZC5cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInJlcXVlc3RDYXBhYmlsaXR5VG9TZW5kU3RhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVxdWVzdENhcGFiaWxpdHlUb1NlbmRTdGF0ZShldmVudFR5cGUsIHN0YXRlS2V5KSB7XG4gICAgICB0aGlzLnJlcXVlc3RDYXBhYmlsaXR5KF9XaWRnZXRFdmVudENhcGFiaWxpdHkuV2lkZ2V0RXZlbnRDYXBhYmlsaXR5LmZvclN0YXRlRXZlbnQoX1dpZGdldEV2ZW50Q2FwYWJpbGl0eS5FdmVudERpcmVjdGlvbi5TZW5kLCBldmVudFR5cGUsIHN0YXRlS2V5KS5yYXcpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXF1ZXN0cyB0aGUgY2FwYWJpbGl0eSB0byByZWNlaXZlIGEgZ2l2ZW4gc3RhdGUgZXZlbnQgd2l0aCBvcHRpb25hbCBleHBsaWNpdFxuICAgICAqIHN0YXRlIGtleS4gSXQgaXMgbm90IGd1YXJhbnRlZWQgdG8gYmUgYWxsb3dlZCwgYnV0IHdpbGwgYmUgYXNrZWQgZm9yIGlmIHRoZVxuICAgICAqIG5lZ290aWF0aW9uIGhhcyBub3QgYWxyZWFkeSBoYXBwZW5lZC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnRUeXBlIFRoZSBzdGF0ZSBldmVudCB0eXBlIHRvIGFzayBmb3IuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHN0YXRlS2V5IElmIHNwZWNpZmllZCwgdGhlIHNwZWNpZmljIHN0YXRlIGtleSB0byByZXF1ZXN0LlxuICAgICAqIE90aGVyd2lzZSBhbGwgc3RhdGUga2V5cyB3aWxsIGJlIHJlcXVlc3RlZC5cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInJlcXVlc3RDYXBhYmlsaXR5VG9SZWNlaXZlU3RhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVxdWVzdENhcGFiaWxpdHlUb1JlY2VpdmVTdGF0ZShldmVudFR5cGUsIHN0YXRlS2V5KSB7XG4gICAgICB0aGlzLnJlcXVlc3RDYXBhYmlsaXR5KF9XaWRnZXRFdmVudENhcGFiaWxpdHkuV2lkZ2V0RXZlbnRDYXBhYmlsaXR5LmZvclN0YXRlRXZlbnQoX1dpZGdldEV2ZW50Q2FwYWJpbGl0eS5FdmVudERpcmVjdGlvbi5SZWNlaXZlLCBldmVudFR5cGUsIHN0YXRlS2V5KS5yYXcpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXF1ZXN0cyB0aGUgY2FwYWJpbGl0eSB0byBzZW5kIGEgZ2l2ZW4gdG8tZGV2aWNlIGV2ZW50LiBJdCBpcyBub3RcbiAgICAgKiBndWFyYW50ZWVkIHRvIGJlIGFsbG93ZWQsIGJ1dCB3aWxsIGJlIGFza2VkIGZvciBpZiB0aGUgbmVnb3RpYXRpb24gaGFzXG4gICAgICogbm90IGFscmVhZHkgaGFwcGVuZWQuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50VHlwZSBUaGUgcm9vbSBldmVudCB0eXBlIHRvIGFzayBmb3IuXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJyZXF1ZXN0Q2FwYWJpbGl0eVRvU2VuZFRvRGV2aWNlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlcXVlc3RDYXBhYmlsaXR5VG9TZW5kVG9EZXZpY2UoZXZlbnRUeXBlKSB7XG4gICAgICB0aGlzLnJlcXVlc3RDYXBhYmlsaXR5KF9XaWRnZXRFdmVudENhcGFiaWxpdHkuV2lkZ2V0RXZlbnRDYXBhYmlsaXR5LmZvclRvRGV2aWNlRXZlbnQoX1dpZGdldEV2ZW50Q2FwYWJpbGl0eS5FdmVudERpcmVjdGlvbi5TZW5kLCBldmVudFR5cGUpLnJhdyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlcXVlc3RzIHRoZSBjYXBhYmlsaXR5IHRvIHJlY2VpdmUgYSBnaXZlbiB0by1kZXZpY2UgZXZlbnQuIEl0IGlzIG5vdFxuICAgICAqIGd1YXJhbnRlZWQgdG8gYmUgYWxsb3dlZCwgYnV0IHdpbGwgYmUgYXNrZWQgZm9yIGlmIHRoZSBuZWdvdGlhdGlvbiBoYXNcbiAgICAgKiBub3QgYWxyZWFkeSBoYXBwZW5lZC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnRUeXBlIFRoZSByb29tIGV2ZW50IHR5cGUgdG8gYXNrIGZvci5cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInJlcXVlc3RDYXBhYmlsaXR5VG9SZWNlaXZlVG9EZXZpY2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVxdWVzdENhcGFiaWxpdHlUb1JlY2VpdmVUb0RldmljZShldmVudFR5cGUpIHtcbiAgICAgIHRoaXMucmVxdWVzdENhcGFiaWxpdHkoX1dpZGdldEV2ZW50Q2FwYWJpbGl0eS5XaWRnZXRFdmVudENhcGFiaWxpdHkuZm9yVG9EZXZpY2VFdmVudChfV2lkZ2V0RXZlbnRDYXBhYmlsaXR5LkV2ZW50RGlyZWN0aW9uLlJlY2VpdmUsIGV2ZW50VHlwZSkucmF3KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmVxdWVzdHMgdGhlIGNhcGFiaWxpdHkgdG8gc2VuZCBhIGdpdmVuIHJvb20gZXZlbnQuIEl0IGlzIG5vdCBndWFyYW50ZWVkIHRvIGJlXG4gICAgICogYWxsb3dlZCwgYnV0IHdpbGwgYmUgYXNrZWQgZm9yIGlmIHRoZSBuZWdvdGlhdGlvbiBoYXMgbm90IGFscmVhZHkgaGFwcGVuZWQuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50VHlwZSBUaGUgcm9vbSBldmVudCB0eXBlIHRvIGFzayBmb3IuXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJyZXF1ZXN0Q2FwYWJpbGl0eVRvU2VuZEV2ZW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlcXVlc3RDYXBhYmlsaXR5VG9TZW5kRXZlbnQoZXZlbnRUeXBlKSB7XG4gICAgICB0aGlzLnJlcXVlc3RDYXBhYmlsaXR5KF9XaWRnZXRFdmVudENhcGFiaWxpdHkuV2lkZ2V0RXZlbnRDYXBhYmlsaXR5LmZvclJvb21FdmVudChfV2lkZ2V0RXZlbnRDYXBhYmlsaXR5LkV2ZW50RGlyZWN0aW9uLlNlbmQsIGV2ZW50VHlwZSkucmF3KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmVxdWVzdHMgdGhlIGNhcGFiaWxpdHkgdG8gcmVjZWl2ZSBhIGdpdmVuIHJvb20gZXZlbnQuIEl0IGlzIG5vdCBndWFyYW50ZWVkIHRvIGJlXG4gICAgICogYWxsb3dlZCwgYnV0IHdpbGwgYmUgYXNrZWQgZm9yIGlmIHRoZSBuZWdvdGlhdGlvbiBoYXMgbm90IGFscmVhZHkgaGFwcGVuZWQuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50VHlwZSBUaGUgcm9vbSBldmVudCB0eXBlIHRvIGFzayBmb3IuXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJyZXF1ZXN0Q2FwYWJpbGl0eVRvUmVjZWl2ZUV2ZW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlcXVlc3RDYXBhYmlsaXR5VG9SZWNlaXZlRXZlbnQoZXZlbnRUeXBlKSB7XG4gICAgICB0aGlzLnJlcXVlc3RDYXBhYmlsaXR5KF9XaWRnZXRFdmVudENhcGFiaWxpdHkuV2lkZ2V0RXZlbnRDYXBhYmlsaXR5LmZvclJvb21FdmVudChfV2lkZ2V0RXZlbnRDYXBhYmlsaXR5LkV2ZW50RGlyZWN0aW9uLlJlY2VpdmUsIGV2ZW50VHlwZSkucmF3KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmVxdWVzdHMgdGhlIGNhcGFiaWxpdHkgdG8gc2VuZCBhIGdpdmVuIG1lc3NhZ2UgZXZlbnQgd2l0aCBvcHRpb25hbCBleHBsaWNpdFxuICAgICAqIGBtc2d0eXBlYC4gSXQgaXMgbm90IGd1YXJhbnRlZWQgdG8gYmUgYWxsb3dlZCwgYnV0IHdpbGwgYmUgYXNrZWQgZm9yIGlmIHRoZVxuICAgICAqIG5lZ290aWF0aW9uIGhhcyBub3QgYWxyZWFkeSBoYXBwZW5lZC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbXNndHlwZSBJZiBzcGVjaWZpZWQsIHRoZSBzcGVjaWZpYyBtc2d0eXBlIHRvIHJlcXVlc3QuXG4gICAgICogT3RoZXJ3aXNlIGFsbCBtZXNzYWdlIHR5cGVzIHdpbGwgYmUgcmVxdWVzdGVkLlxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwicmVxdWVzdENhcGFiaWxpdHlUb1NlbmRNZXNzYWdlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlcXVlc3RDYXBhYmlsaXR5VG9TZW5kTWVzc2FnZShtc2d0eXBlKSB7XG4gICAgICB0aGlzLnJlcXVlc3RDYXBhYmlsaXR5KF9XaWRnZXRFdmVudENhcGFiaWxpdHkuV2lkZ2V0RXZlbnRDYXBhYmlsaXR5LmZvclJvb21NZXNzYWdlRXZlbnQoX1dpZGdldEV2ZW50Q2FwYWJpbGl0eS5FdmVudERpcmVjdGlvbi5TZW5kLCBtc2d0eXBlKS5yYXcpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXF1ZXN0cyB0aGUgY2FwYWJpbGl0eSB0byByZWNlaXZlIGEgZ2l2ZW4gbWVzc2FnZSBldmVudCB3aXRoIG9wdGlvbmFsIGV4cGxpY2l0XG4gICAgICogYG1zZ3R5cGVgLiBJdCBpcyBub3QgZ3VhcmFudGVlZCB0byBiZSBhbGxvd2VkLCBidXQgd2lsbCBiZSBhc2tlZCBmb3IgaWYgdGhlXG4gICAgICogbmVnb3RpYXRpb24gaGFzIG5vdCBhbHJlYWR5IGhhcHBlbmVkLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtc2d0eXBlIElmIHNwZWNpZmllZCwgdGhlIHNwZWNpZmljIG1zZ3R5cGUgdG8gcmVxdWVzdC5cbiAgICAgKiBPdGhlcndpc2UgYWxsIG1lc3NhZ2UgdHlwZXMgd2lsbCBiZSByZXF1ZXN0ZWQuXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJyZXF1ZXN0Q2FwYWJpbGl0eVRvUmVjZWl2ZU1lc3NhZ2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVxdWVzdENhcGFiaWxpdHlUb1JlY2VpdmVNZXNzYWdlKG1zZ3R5cGUpIHtcbiAgICAgIHRoaXMucmVxdWVzdENhcGFiaWxpdHkoX1dpZGdldEV2ZW50Q2FwYWJpbGl0eS5XaWRnZXRFdmVudENhcGFiaWxpdHkuZm9yUm9vbU1lc3NhZ2VFdmVudChfV2lkZ2V0RXZlbnRDYXBhYmlsaXR5LkV2ZW50RGlyZWN0aW9uLlJlY2VpdmUsIG1zZ3R5cGUpLnJhdyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlcXVlc3RzIGFuIE9wZW5JRCBDb25uZWN0IHRva2VuIGZyb20gdGhlIGNsaWVudCBmb3IgdGhlIGN1cnJlbnRseSBsb2dnZWQgaW5cbiAgICAgKiB1c2VyLiBUaGlzIHRva2VuIGNhbiBiZSB2YWxpZGF0ZWQgc2VydmVyLXNpZGUgd2l0aCB0aGUgZmVkZXJhdGlvbiBBUEkuIE5vdGVcbiAgICAgKiB0aGF0IHRoZSB3aWRnZXQgaXMgcmVzcG9uc2libGUgZm9yIHZhbGlkYXRpbmcgdGhlIHRva2VuIGFuZCBjYWNoaW5nIGFueSByZXN1bHRzXG4gICAgICogaXQgbmVlZHMuXG4gICAgICogQHJldHVybnMge1Byb21pc2U8SU9wZW5JRENyZWRlbnRpYWxzPn0gUmVzb2x2ZXMgdG8gYSB0b2tlbiBmb3IgdmVyaWZpY2F0aW9uLlxuICAgICAqIEB0aHJvd3MgVGhyb3dzIGlmIHRoZSB1c2VyIHJlamVjdGVkIHRoZSByZXF1ZXN0IG9yIHRoZSByZXF1ZXN0IGZhaWxlZC5cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInJlcXVlc3RPcGVuSURDb25uZWN0VG9rZW5cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVxdWVzdE9wZW5JRENvbm5lY3RUb2tlbigpIHtcbiAgICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBfdGhpczQudHJhbnNwb3J0LnNlbmRDb21wbGV0ZShfV2lkZ2V0QXBpQWN0aW9uLldpZGdldEFwaUZyb21XaWRnZXRBY3Rpb24uR2V0T3BlbklEQ3JlZGVudGlhbHMsIHt9KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgIHZhciByZGF0YSA9IHJlc3BvbnNlLnJlc3BvbnNlO1xuXG4gICAgICAgICAgaWYgKHJkYXRhLnN0YXRlID09PSBfR2V0T3BlbklEQWN0aW9uLk9wZW5JRFJlcXVlc3RTdGF0ZS5BbGxvd2VkKSB7XG4gICAgICAgICAgICByZXNvbHZlKHJkYXRhKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHJkYXRhLnN0YXRlID09PSBfR2V0T3BlbklEQWN0aW9uLk9wZW5JRFJlcXVlc3RTdGF0ZS5CbG9ja2VkKSB7XG4gICAgICAgICAgICByZWplY3QobmV3IEVycm9yKFwiVXNlciBkZWNsaW5lZCB0byB2ZXJpZnkgdGhlaXIgaWRlbnRpdHlcIikpO1xuICAgICAgICAgIH0gZWxzZSBpZiAocmRhdGEuc3RhdGUgPT09IF9HZXRPcGVuSURBY3Rpb24uT3BlbklEUmVxdWVzdFN0YXRlLlBlbmRpbmdVc2VyQ29uZmlybWF0aW9uKSB7XG4gICAgICAgICAgICB2YXIgaGFuZGxlckZuID0gZnVuY3Rpb24gaGFuZGxlckZuKGV2KSB7XG4gICAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgIHZhciByZXF1ZXN0ID0gZXYuZGV0YWlsO1xuICAgICAgICAgICAgICBpZiAocmVxdWVzdC5kYXRhLm9yaWdpbmFsX3JlcXVlc3RfaWQgIT09IHJlc3BvbnNlLnJlcXVlc3RJZCkgcmV0dXJuO1xuXG4gICAgICAgICAgICAgIGlmIChyZXF1ZXN0LmRhdGEuc3RhdGUgPT09IF9HZXRPcGVuSURBY3Rpb24uT3BlbklEUmVxdWVzdFN0YXRlLkFsbG93ZWQpIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlcXVlc3QuZGF0YSk7XG5cbiAgICAgICAgICAgICAgICBfdGhpczQudHJhbnNwb3J0LnJlcGx5KHJlcXVlc3QsIHt9KTsgLy8gYWNrXG5cbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXF1ZXN0LmRhdGEuc3RhdGUgPT09IF9HZXRPcGVuSURBY3Rpb24uT3BlbklEUmVxdWVzdFN0YXRlLkJsb2NrZWQpIHtcbiAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKFwiVXNlciBkZWNsaW5lZCB0byB2ZXJpZnkgdGhlaXIgaWRlbnRpdHlcIikpO1xuXG4gICAgICAgICAgICAgICAgX3RoaXM0LnRyYW5zcG9ydC5yZXBseShyZXF1ZXN0LCB7fSk7IC8vIGFja1xuXG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihcIkludmFsaWQgc3RhdGUgb24gcmVwbHk6IFwiICsgcmRhdGEuc3RhdGUpKTtcblxuICAgICAgICAgICAgICAgIF90aGlzNC50cmFuc3BvcnQucmVwbHkocmVxdWVzdCwge1xuICAgICAgICAgICAgICAgICAgZXJyb3I6IHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJJbnZhbGlkIHN0YXRlXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIF90aGlzNC5vZmYoXCJhY3Rpb246XCIuY29uY2F0KF9XaWRnZXRBcGlBY3Rpb24uV2lkZ2V0QXBpVG9XaWRnZXRBY3Rpb24uT3BlbklEQ3JlZGVudGlhbHMpLCBoYW5kbGVyRm4pO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgX3RoaXM0Lm9uKFwiYWN0aW9uOlwiLmNvbmNhdChfV2lkZ2V0QXBpQWN0aW9uLldpZGdldEFwaVRvV2lkZ2V0QWN0aW9uLk9wZW5JRENyZWRlbnRpYWxzKSwgaGFuZGxlckZuKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihcIkludmFsaWQgc3RhdGU6IFwiICsgcmRhdGEuc3RhdGUpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pW1wiY2F0Y2hcIl0ocmVqZWN0KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBc2tzIHRoZSBjbGllbnQgZm9yIGFkZGl0aW9uYWwgY2FwYWJpbGl0aWVzLiBDYXBhYmlsaXRpZXMgY2FuIGJlIHF1ZXVlZCBmb3IgdGhpc1xuICAgICAqIHJlcXVlc3Qgd2l0aCB0aGUgcmVxdWVzdENhcGFiaWxpdHkoKSBmdW5jdGlvbnMuXG4gICAgICogQHJldHVybnMge1Byb21pc2U8dm9pZD59IFJlc29sdmVzIHdoZW4gY29tcGxldGUuIE5vdGUgdGhhdCB0aGUgcHJvbWlzZSByZXNvbHZlcyB3aGVuXG4gICAgICogdGhlIGNhcGFiaWxpdGllcyByZXF1ZXN0IGhhcyBnb25lIHRocm91Z2gsIG5vdCB3aGVuIHRoZSBjYXBhYmlsaXRpZXMgYXJlIGFwcHJvdmVkL2RlbmllZC5cbiAgICAgKiBVc2UgdGhlIFdpZGdldEFwaVRvV2lkZ2V0QWN0aW9uLk5vdGlmeUNhcGFiaWxpdGllcyBhY3Rpb24gdG8gZGV0ZWN0IGNoYW5nZXMuXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJ1cGRhdGVSZXF1ZXN0ZWRDYXBhYmlsaXRpZXNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlUmVxdWVzdGVkQ2FwYWJpbGl0aWVzKCkge1xuICAgICAgcmV0dXJuIHRoaXMudHJhbnNwb3J0LnNlbmQoX1dpZGdldEFwaUFjdGlvbi5XaWRnZXRBcGlGcm9tV2lkZ2V0QWN0aW9uLk1TQzI5NzRSZW5lZ290aWF0ZUNhcGFiaWxpdGllcywge1xuICAgICAgICBjYXBhYmlsaXRpZXM6IHRoaXMucmVxdWVzdGVkQ2FwYWJpbGl0aWVzXG4gICAgICB9KS50aGVuKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRlbGwgdGhlIGNsaWVudCB0aGF0IHRoZSBjb250ZW50IGhhcyBiZWVuIGxvYWRlZC5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZX0gUmVzb2x2ZXMgd2hlbiB0aGUgY2xpZW50IGFja25vd2xlZGdlcyB0aGUgcmVxdWVzdC5cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInNlbmRDb250ZW50TG9hZGVkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNlbmRDb250ZW50TG9hZGVkKCkge1xuICAgICAgcmV0dXJuIHRoaXMudHJhbnNwb3J0LnNlbmQoX1dpZGdldEFwaUFjdGlvbi5XaWRnZXRBcGlGcm9tV2lkZ2V0QWN0aW9uLkNvbnRlbnRMb2FkZWQsIHt9KS50aGVuKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNlbmRzIGEgc3RpY2tlciB0byB0aGUgY2xpZW50LlxuICAgICAqIEBwYXJhbSB7SVN0aWNrZXJBY3Rpb25SZXF1ZXN0RGF0YX0gc3RpY2tlciBUaGUgc3RpY2tlciB0byBzZW5kLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlfSBSZXNvbHZlcyB3aGVuIHRoZSBjbGllbnQgYWNrbm93bGVkZ2VzIHRoZSByZXF1ZXN0LlxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwic2VuZFN0aWNrZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2VuZFN0aWNrZXIoc3RpY2tlcikge1xuICAgICAgcmV0dXJuIHRoaXMudHJhbnNwb3J0LnNlbmQoX1dpZGdldEFwaUFjdGlvbi5XaWRnZXRBcGlGcm9tV2lkZ2V0QWN0aW9uLlNlbmRTdGlja2VyLCBzdGlja2VyKS50aGVuKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFza3MgdGhlIGNsaWVudCB0byBzZXQgdGhlIGFsd2F5cy1vbi1zY3JlZW4gc3RhdHVzIGZvciB0aGlzIHdpZGdldC5cbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHZhbHVlIFRoZSBuZXcgc3RhdGUgdG8gcmVxdWVzdC5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn0gUmVzb2x2ZSB3aXRoIHRydWUgaWYgdGhlIGNsaWVudCB3YXMgYWJsZSB0byBmdWxmaWxsXG4gICAgICogdGhlIHJlcXVlc3QsIHJlc29sdmVzIHRvIGZhbHNlIG90aGVyd2lzZS4gUmVqZWN0cyBpZiBhbiBlcnJvciBvY2N1cnJlZC5cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInNldEFsd2F5c09uU2NyZWVuXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldEFsd2F5c09uU2NyZWVuKHZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpcy50cmFuc3BvcnQuc2VuZChfV2lkZ2V0QXBpQWN0aW9uLldpZGdldEFwaUZyb21XaWRnZXRBY3Rpb24uVXBkYXRlQWx3YXlzT25TY3JlZW4sIHtcbiAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdWNjZXNzO1xuICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIE9wZW5zIGEgbW9kYWwgd2lkZ2V0LlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIFVSTCB0byB0aGUgbW9kYWwgd2lkZ2V0LlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHRoZSB3aWRnZXQuXG4gICAgICogQHBhcmFtIHtJTW9kYWxXaWRnZXRPcGVuUmVxdWVzdERhdGFCdXR0b25bXX0gYnV0dG9ucyBUaGUgYnV0dG9ucyB0byBoYXZlIG9uIHRoZSB3aWRnZXQuXG4gICAgICogQHBhcmFtIHtJTW9kYWxXaWRnZXRDcmVhdGVEYXRhfSBkYXRhIERhdGEgdG8gc3VwcGx5IHRvIHRoZSBtb2RhbCB3aWRnZXQuXG4gICAgICogQHBhcmFtIHtXaWRnZXRUeXBlfSB0eXBlIFRoZSB0eXBlIG9mIG1vZGFsIHdpZGdldC5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn0gUmVzb2x2ZXMgd2hlbiB0aGUgbW9kYWwgd2lkZ2V0IGhhcyBiZWVuIG9wZW5lZC5cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIm9wZW5Nb2RhbFdpZGdldFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvcGVuTW9kYWxXaWRnZXQodXJsLCBuYW1lKSB7XG4gICAgICB2YXIgYnV0dG9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogW107XG4gICAgICB2YXIgZGF0YSA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDoge307XG4gICAgICB2YXIgdHlwZSA9IGFyZ3VtZW50cy5sZW5ndGggPiA0ICYmIGFyZ3VtZW50c1s0XSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzRdIDogX1dpZGdldFR5cGUuTWF0cml4V2lkZ2V0VHlwZS5DdXN0b207XG4gICAgICByZXR1cm4gdGhpcy50cmFuc3BvcnQuc2VuZChfV2lkZ2V0QXBpQWN0aW9uLldpZGdldEFwaUZyb21XaWRnZXRBY3Rpb24uT3Blbk1vZGFsV2lkZ2V0LCB7XG4gICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgIHVybDogdXJsLFxuICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICBidXR0b25zOiBidXR0b25zLFxuICAgICAgICBkYXRhOiBkYXRhXG4gICAgICB9KS50aGVuKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENsb3NlcyB0aGUgbW9kYWwgd2lkZ2V0LiBUaGUgd2lkZ2V0J3Mgc2Vzc2lvbiB3aWxsIGJlIHRlcm1pbmF0ZWQgc2hvcnRseSBhZnRlci5cbiAgICAgKiBAcGFyYW0ge0lNb2RhbFdpZGdldFJldHVybkRhdGF9IGRhdGEgT3B0aW9uYWwgZGF0YSB0byBjbG9zZSB0aGUgbW9kYWwgd2lkZ2V0IHdpdGguXG4gICAgICogQHJldHVybnMge1Byb21pc2U8dm9pZD59IFJlc29sdmVzIHdoZW4gY29tcGxldGUuXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJjbG9zZU1vZGFsV2lkZ2V0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNsb3NlTW9kYWxXaWRnZXQoKSB7XG4gICAgICB2YXIgZGF0YSA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgICByZXR1cm4gdGhpcy50cmFuc3BvcnQuc2VuZChfV2lkZ2V0QXBpQWN0aW9uLldpZGdldEFwaUZyb21XaWRnZXRBY3Rpb24uQ2xvc2VNb2RhbFdpZGdldCwgZGF0YSkudGhlbigpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZW5kUm9vbUV2ZW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNlbmRSb29tRXZlbnQoZXZlbnRUeXBlLCBjb250ZW50LCByb29tSWQpIHtcbiAgICAgIHJldHVybiB0aGlzLnRyYW5zcG9ydC5zZW5kKF9XaWRnZXRBcGlBY3Rpb24uV2lkZ2V0QXBpRnJvbVdpZGdldEFjdGlvbi5TZW5kRXZlbnQsIHtcbiAgICAgICAgdHlwZTogZXZlbnRUeXBlLFxuICAgICAgICBjb250ZW50OiBjb250ZW50LFxuICAgICAgICByb29tX2lkOiByb29tSWRcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZW5kU3RhdGVFdmVudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZW5kU3RhdGVFdmVudChldmVudFR5cGUsIHN0YXRlS2V5LCBjb250ZW50LCByb29tSWQpIHtcbiAgICAgIHJldHVybiB0aGlzLnRyYW5zcG9ydC5zZW5kKF9XaWRnZXRBcGlBY3Rpb24uV2lkZ2V0QXBpRnJvbVdpZGdldEFjdGlvbi5TZW5kRXZlbnQsIHtcbiAgICAgICAgdHlwZTogZXZlbnRUeXBlLFxuICAgICAgICBjb250ZW50OiBjb250ZW50LFxuICAgICAgICBzdGF0ZV9rZXk6IHN0YXRlS2V5LFxuICAgICAgICByb29tX2lkOiByb29tSWRcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZW5kcyBhIHRvLWRldmljZSBldmVudC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnRUeXBlIFRoZSB0eXBlIG9mIGV2ZW50cyBiZWluZyBzZW50LlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gZW5jcnlwdGVkIFdoZXRoZXIgdG8gZW5jcnlwdCB0aGUgbWVzc2FnZSBjb250ZW50cy5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29udGVudE1hcCBBIG1hcCBmcm9tIHVzZXIgSURzIHRvIGRldmljZSBJRHMgdG8gbWVzc2FnZSBjb250ZW50cy5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxJU2VuZFRvRGV2aWNlRnJvbVdpZGdldFJlc3BvbnNlRGF0YT59IFJlc29sdmVzIHdoZW4gY29tcGxldGUuXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJzZW5kVG9EZXZpY2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2VuZFRvRGV2aWNlKGV2ZW50VHlwZSwgZW5jcnlwdGVkLCBjb250ZW50TWFwKSB7XG4gICAgICByZXR1cm4gdGhpcy50cmFuc3BvcnQuc2VuZChfV2lkZ2V0QXBpQWN0aW9uLldpZGdldEFwaUZyb21XaWRnZXRBY3Rpb24uU2VuZFRvRGV2aWNlLCB7XG4gICAgICAgIHR5cGU6IGV2ZW50VHlwZSxcbiAgICAgICAgZW5jcnlwdGVkOiBlbmNyeXB0ZWQsXG4gICAgICAgIG1lc3NhZ2VzOiBjb250ZW50TWFwXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVhZFJvb21FdmVudHNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVhZFJvb21FdmVudHMoZXZlbnRUeXBlLCBsaW1pdCwgbXNndHlwZSwgcm9vbUlkcykge1xuICAgICAgdmFyIGRhdGEgPSB7XG4gICAgICAgIHR5cGU6IGV2ZW50VHlwZSxcbiAgICAgICAgbXNndHlwZTogbXNndHlwZVxuICAgICAgfTtcblxuICAgICAgaWYgKGxpbWl0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZGF0YS5saW1pdCA9IGxpbWl0O1xuICAgICAgfVxuXG4gICAgICBpZiAocm9vbUlkcykge1xuICAgICAgICBpZiAocm9vbUlkcy5pbmNsdWRlcyhfU3ltYm9scy5TeW1ib2xzLkFueVJvb20pKSB7XG4gICAgICAgICAgZGF0YS5yb29tX2lkcyA9IF9TeW1ib2xzLlN5bWJvbHMuQW55Um9vbTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkYXRhLnJvb21faWRzID0gcm9vbUlkcztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy50cmFuc3BvcnQuc2VuZChfV2lkZ2V0QXBpQWN0aW9uLldpZGdldEFwaUZyb21XaWRnZXRBY3Rpb24uTVNDMjg3NlJlYWRFdmVudHMsIGRhdGEpLnRoZW4oZnVuY3Rpb24gKHIpIHtcbiAgICAgICAgcmV0dXJuIHIuZXZlbnRzO1xuICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlYWRzIGFsbCByZWxhdGVkIGV2ZW50cyBnaXZlbiBhIGtub3duIGV2ZW50SWQuXG4gICAgICogQHBhcmFtIGV2ZW50SWQgVGhlIGlkIG9mIHRoZSBwYXJlbnQgZXZlbnQgdG8gYmUgcmVhZC5cbiAgICAgKiBAcGFyYW0gcm9vbUlkIFRoZSByb29tIHRvIGxvb2sgd2l0aGluLiBXaGVuIHVuZGVmaW5lZCwgdGhlIHVzZXIncyBjdXJyZW50bHlcbiAgICAgKiB2aWV3ZWQgcm9vbS5cbiAgICAgKiBAcGFyYW0gcmVsYXRpb25UeXBlIFRoZSByZWxhdGlvbnNoaXAgdHlwZSBvZiBjaGlsZCBldmVudHMgdG8gc2VhcmNoIGZvci5cbiAgICAgKiBXaGVuIHVuZGVmaW5lZCwgYWxsIHJlbGF0aW9ucyBhcmUgcmV0dXJuZWQuXG4gICAgICogQHBhcmFtIGV2ZW50VHlwZSBUaGUgZXZlbnQgdHlwZSBvZiBjaGlsZCBldmVudHMgdG8gc2VhcmNoIGZvci4gV2hlbiB1bmRlZmluZWQsXG4gICAgICogYWxsIHJlbGF0ZWQgZXZlbnRzIGFyZSByZXR1cm5lZC5cbiAgICAgKiBAcGFyYW0gbGltaXQgVGhlIG1heGltdW0gbnVtYmVyIG9mIGV2ZW50cyB0byByZXRyaWV2ZSBwZXIgcm9vbS4gSWYgbm90XG4gICAgICogc3VwcGxpZWQsIHRoZSBzZXJ2ZXIgd2lsbCBhcHBseSBhIGRlZmF1bHQgbGltaXQuXG4gICAgICogQHBhcmFtIGZyb20gVGhlIHBhZ2luYXRpb24gdG9rZW4gdG8gc3RhcnQgcmV0dXJuaW5nIHJlc3VsdHMgZnJvbSwgYXNcbiAgICAgKiByZWNlaXZlZCBmcm9tIGEgcHJldmlvdXMgY2FsbC4gSWYgbm90IHN1cHBsaWVkLCByZXN1bHRzIHN0YXJ0IGF0IHRoZSBtb3N0XG4gICAgICogcmVjZW50IHRvcG9sb2dpY2FsIGV2ZW50IGtub3duIHRvIHRoZSBzZXJ2ZXIuXG4gICAgICogQHBhcmFtIHRvIFRoZSBwYWdpbmF0aW9uIHRva2VuIHRvIHN0b3AgcmV0dXJuaW5nIHJlc3VsdHMgYXQuIElmIG5vdFxuICAgICAqIHN1cHBsaWVkLCByZXN1bHRzIGNvbnRpbnVlIHVwIHRvIGxpbWl0IG9yIHVudGlsIHRoZXJlIGFyZSBubyBtb3JlIGV2ZW50cy5cbiAgICAgKiBAcGFyYW0gZGlyZWN0aW9uIFRoZSBkaXJlY3Rpb24gdG8gc2VhcmNoIGZvciBhY2NvcmRpbmcgdG8gTVNDMzcxNS5cbiAgICAgKiBAcmV0dXJucyBSZXNvbHZlcyB0byB0aGUgcm9vbSByZWxhdGlvbnMuXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJyZWFkRXZlbnRSZWxhdGlvbnNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF9yZWFkRXZlbnRSZWxhdGlvbnMgPSBfYXN5bmNUb0dlbmVyYXRvciggLyojX19QVVJFX18qL19yZWdlbmVyYXRvclJ1bnRpbWUoKS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUoZXZlbnRJZCwgcm9vbUlkLCByZWxhdGlvblR5cGUsIGV2ZW50VHlwZSwgbGltaXQsIGZyb20sIHRvLCBkaXJlY3Rpb24pIHtcbiAgICAgICAgdmFyIHZlcnNpb25zLCBkYXRhO1xuICAgICAgICByZXR1cm4gX3JlZ2VuZXJhdG9yUnVudGltZSgpLndyYXAoZnVuY3Rpb24gX2NhbGxlZSQoX2NvbnRleHQpIHtcbiAgICAgICAgICB3aGlsZSAoMSkge1xuICAgICAgICAgICAgc3dpdGNoIChfY29udGV4dC5wcmV2ID0gX2NvbnRleHQubmV4dCkge1xuICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDI7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q2xpZW50VmVyc2lvbnMoKTtcblxuICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgdmVyc2lvbnMgPSBfY29udGV4dC5zZW50O1xuXG4gICAgICAgICAgICAgICAgaWYgKHZlcnNpb25zLmluY2x1ZGVzKF9BcGlWZXJzaW9uLlVuc3RhYmxlQXBpVmVyc2lvbi5NU0MzODY5KSkge1xuICAgICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDU7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgcmVhZF9yZWxhdGlvbnMgYWN0aW9uIGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhlIGNsaWVudC5cIik7XG5cbiAgICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICBldmVudF9pZDogZXZlbnRJZCxcbiAgICAgICAgICAgICAgICAgIHJlbF90eXBlOiByZWxhdGlvblR5cGUsXG4gICAgICAgICAgICAgICAgICBldmVudF90eXBlOiBldmVudFR5cGUsXG4gICAgICAgICAgICAgICAgICByb29tX2lkOiByb29tSWQsXG4gICAgICAgICAgICAgICAgICB0bzogdG8sXG4gICAgICAgICAgICAgICAgICBmcm9tOiBmcm9tLFxuICAgICAgICAgICAgICAgICAgbGltaXQ6IGxpbWl0LFxuICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiBkaXJlY3Rpb25cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgdGhpcy50cmFuc3BvcnQuc2VuZChfV2lkZ2V0QXBpQWN0aW9uLldpZGdldEFwaUZyb21XaWRnZXRBY3Rpb24uTVNDMzg2OVJlYWRSZWxhdGlvbnMsIGRhdGEpKTtcblxuICAgICAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuc3RvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSwgX2NhbGxlZSwgdGhpcyk7XG4gICAgICB9KSk7XG5cbiAgICAgIGZ1bmN0aW9uIHJlYWRFdmVudFJlbGF0aW9ucyhfeCwgX3gyLCBfeDMsIF94NCwgX3g1LCBfeDYsIF94NywgX3g4KSB7XG4gICAgICAgIHJldHVybiBfcmVhZEV2ZW50UmVsYXRpb25zLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZWFkRXZlbnRSZWxhdGlvbnM7XG4gICAgfSgpXG4gIH0sIHtcbiAgICBrZXk6IFwicmVhZFN0YXRlRXZlbnRzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlYWRTdGF0ZUV2ZW50cyhldmVudFR5cGUsIGxpbWl0LCBzdGF0ZUtleSwgcm9vbUlkcykge1xuICAgICAgdmFyIGRhdGEgPSB7XG4gICAgICAgIHR5cGU6IGV2ZW50VHlwZSxcbiAgICAgICAgc3RhdGVfa2V5OiBzdGF0ZUtleSA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IHN0YXRlS2V5XG4gICAgICB9O1xuXG4gICAgICBpZiAobGltaXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBkYXRhLmxpbWl0ID0gbGltaXQ7XG4gICAgICB9XG5cbiAgICAgIGlmIChyb29tSWRzKSB7XG4gICAgICAgIGlmIChyb29tSWRzLmluY2x1ZGVzKF9TeW1ib2xzLlN5bWJvbHMuQW55Um9vbSkpIHtcbiAgICAgICAgICBkYXRhLnJvb21faWRzID0gX1N5bWJvbHMuU3ltYm9scy5BbnlSb29tO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRhdGEucm9vbV9pZHMgPSByb29tSWRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnRyYW5zcG9ydC5zZW5kKF9XaWRnZXRBcGlBY3Rpb24uV2lkZ2V0QXBpRnJvbVdpZGdldEFjdGlvbi5NU0MyODc2UmVhZEV2ZW50cywgZGF0YSkudGhlbihmdW5jdGlvbiAocikge1xuICAgICAgICByZXR1cm4gci5ldmVudHM7XG4gICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0cyBhIGJ1dHRvbiBhcyBkaXNhYmxlZCBvciBlbmFibGVkIG9uIHRoZSBtb2RhbCB3aWRnZXQuIEJ1dHRvbnMgYXJlIGVuYWJsZWQgYnkgZGVmYXVsdC5cbiAgICAgKiBAcGFyYW0ge01vZGFsQnV0dG9uSUR9IGJ1dHRvbklkIFRoZSBidXR0b24gSUQgdG8gZW5hYmxlL2Rpc2FibGUuXG4gICAgICogQHBhcmFtIHtib29sZWFufSBpc0VuYWJsZWQgV2hldGhlciBvciBub3QgdGhlIGJ1dHRvbiBpcyBlbmFibGVkLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fSBSZXNvbHZlcyB3aGVuIGNvbXBsZXRlLlxuICAgICAqIEB0aHJvd3MgVGhyb3dzIGlmIHRoZSBidXR0b24gY2Fubm90IGJlIGRpc2FibGVkLCBvciB0aGUgY2xpZW50IHJlZnVzZXMgdG8gZGlzYWJsZSB0aGUgYnV0dG9uLlxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwic2V0TW9kYWxCdXR0b25FbmFibGVkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldE1vZGFsQnV0dG9uRW5hYmxlZChidXR0b25JZCwgaXNFbmFibGVkKSB7XG4gICAgICBpZiAoYnV0dG9uSWQgPT09IF9Nb2RhbFdpZGdldEFjdGlvbnMuQnVpbHRJbk1vZGFsQnV0dG9uSUQuQ2xvc2UpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlIGNsb3NlIGJ1dHRvbiBjYW5ub3QgYmUgZGlzYWJsZWRcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnRyYW5zcG9ydC5zZW5kKF9XaWRnZXRBcGlBY3Rpb24uV2lkZ2V0QXBpRnJvbVdpZGdldEFjdGlvbi5TZXRNb2RhbEJ1dHRvbkVuYWJsZWQsIHtcbiAgICAgICAgYnV0dG9uOiBidXR0b25JZCxcbiAgICAgICAgZW5hYmxlZDogaXNFbmFibGVkXG4gICAgICB9KS50aGVuKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEF0dGVtcHRzIHRvIG5hdmlnYXRlIHRoZSBjbGllbnQgdG8gdGhlIGdpdmVuIFVSSS4gVGhpcyBjYW4gb25seSBiZSBjYWxsZWQgd2l0aCBNYXRyaXggVVJJc1xuICAgICAqIChjdXJyZW50bHkgb25seSBtYXRyaXgudG8sIGJ1dCBpbiBmdXR1cmUgYSBNYXRyaXggVVJJIHNjaGVtZSB3aWxsIGJlIGRlZmluZWQpLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmkgVGhlIFVSSSB0byBuYXZpZ2F0ZSB0by5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn0gUmVzb2x2ZXMgd2hlbiBjb21wbGV0ZS5cbiAgICAgKiBAdGhyb3dzIFRocm93cyBpZiB0aGUgVVJJIGlzIGludmFsaWQgb3IgY2Fubm90IGJlIHByb2Nlc3NlZC5cbiAgICAgKiBAZGVwcmVjYXRlZCBUaGlzIGN1cnJlbnRseSByZWxpZXMgb24gYW4gdW5zdGFibGUgTVNDIChNU0MyOTMxKS5cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIm5hdmlnYXRlVG9cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbmF2aWdhdGVUbyh1cmkpIHtcbiAgICAgIGlmICghdXJpIHx8ICF1cmkuc3RhcnRzV2l0aChcImh0dHBzOi8vbWF0cml4LnRvLyNcIikpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBtYXRyaXgudG8gVVJJXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy50cmFuc3BvcnQuc2VuZChfV2lkZ2V0QXBpQWN0aW9uLldpZGdldEFwaUZyb21XaWRnZXRBY3Rpb24uTVNDMjkzMU5hdmlnYXRlLCB7XG4gICAgICAgIHVyaTogdXJpXG4gICAgICB9KS50aGVuKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFN0YXJ0cyB3YXRjaGluZyBmb3IgVFVSTiBzZXJ2ZXJzLCB5aWVsZGluZyBhbiBpbml0aWFsIHNldCBvZiBjcmVkZW50aWFscyBhcyBzb29uIGFzIHBvc3NpYmxlLFxuICAgICAqIGFuZCB0aGVyZWFmdGVyIHlpZWxkaW5nIG5ldyBjcmVkZW50aWFscyB3aGVuZXZlciB0aGUgcHJldmlvdXMgb25lcyBleHBpcmUuXG4gICAgICogQHlpZWxkcyB7SVR1cm5TZXJ2ZXJ9IFRoZSBUVVJOIHNlcnZlciBVUklzIGFuZCBjcmVkZW50aWFscyBjdXJyZW50bHkgYXZhaWxhYmxlIHRvIHRoZSB3aWRnZXQuXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJnZXRUdXJuU2VydmVyc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRUdXJuU2VydmVycygpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIHJldHVybiBfd3JhcEFzeW5jR2VuZXJhdG9yKCAvKiNfX1BVUkVfXyovX3JlZ2VuZXJhdG9yUnVudGltZSgpLm1hcmsoZnVuY3Rpb24gX2NhbGxlZTMoKSB7XG4gICAgICAgIHZhciBzZXRUdXJuU2VydmVyLCBvblVwZGF0ZVR1cm5TZXJ2ZXJzO1xuICAgICAgICByZXR1cm4gX3JlZ2VuZXJhdG9yUnVudGltZSgpLndyYXAoZnVuY3Rpb24gX2NhbGxlZTMkKF9jb250ZXh0Mykge1xuICAgICAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKF9jb250ZXh0My5wcmV2ID0gX2NvbnRleHQzLm5leHQpIHtcbiAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIG9uVXBkYXRlVHVyblNlcnZlcnMgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgdmFyIF9yZWYgPSBfYXN5bmNUb0dlbmVyYXRvciggLyojX19QVVJFX18qL19yZWdlbmVyYXRvclJ1bnRpbWUoKS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUyKGV2KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfcmVnZW5lcmF0b3JSdW50aW1lKCkud3JhcChmdW5jdGlvbiBfY2FsbGVlMiQoX2NvbnRleHQyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoX2NvbnRleHQyLnByZXYgPSBfY29udGV4dDIubmV4dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUdXJuU2VydmVyKGV2LmRldGFpbC5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfY29udGV4dDIubmV4dCA9IDQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLnRyYW5zcG9ydC5yZXBseShldi5kZXRhaWwsIHt9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQyLnN0b3AoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sIF9jYWxsZWUyKTtcbiAgICAgICAgICAgICAgICAgIH0pKTtcblxuICAgICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIG9uVXBkYXRlVHVyblNlcnZlcnMoX3g5KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfcmVmLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0oKTsgLy8gU3RhcnQgbGlzdGVuaW5nIGZvciB1cGRhdGVzIGJlZm9yZSB3ZSBldmVuIHN0YXJ0IHdhdGNoaW5nLCB0byBjYXRjaFxuICAgICAgICAgICAgICAgIC8vIFRVUk4gZGF0YSB0aGF0IGlzIHNlbnQgaW1tZWRpYXRlbHlcblxuXG4gICAgICAgICAgICAgICAgX3RoaXMub24oXCJhY3Rpb246XCIuY29uY2F0KF9XaWRnZXRBcGlBY3Rpb24uV2lkZ2V0QXBpVG9XaWRnZXRBY3Rpb24uVXBkYXRlVHVyblNlcnZlcnMpLCBvblVwZGF0ZVR1cm5TZXJ2ZXJzKTsgLy8gT25seSBzZW5kIHRoZSAnd2F0Y2gnIGFjdGlvbiBpZiB3ZSBhcmVuJ3QgYWxyZWFkeSB3YXRjaGluZ1xuXG5cbiAgICAgICAgICAgICAgICBpZiAoIShfdGhpcy50dXJuU2VydmVyV2F0Y2hlcnMgPT09IDApKSB7XG4gICAgICAgICAgICAgICAgICBfY29udGV4dDMubmV4dCA9IDEyO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgX2NvbnRleHQzLnByZXYgPSAzO1xuICAgICAgICAgICAgICAgIF9jb250ZXh0My5uZXh0ID0gNjtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2F3YWl0QXN5bmNHZW5lcmF0b3IoX3RoaXMudHJhbnNwb3J0LnNlbmQoX1dpZGdldEFwaUFjdGlvbi5XaWRnZXRBcGlGcm9tV2lkZ2V0QWN0aW9uLldhdGNoVHVyblNlcnZlcnMsIHt9KSk7XG5cbiAgICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgIF9jb250ZXh0My5uZXh0ID0gMTI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgICAgIF9jb250ZXh0My5wcmV2ID0gODtcbiAgICAgICAgICAgICAgICBfY29udGV4dDMudDAgPSBfY29udGV4dDNbXCJjYXRjaFwiXSgzKTtcblxuICAgICAgICAgICAgICAgIF90aGlzLm9mZihcImFjdGlvbjpcIi5jb25jYXQoX1dpZGdldEFwaUFjdGlvbi5XaWRnZXRBcGlUb1dpZGdldEFjdGlvbi5VcGRhdGVUdXJuU2VydmVycyksIG9uVXBkYXRlVHVyblNlcnZlcnMpO1xuXG4gICAgICAgICAgICAgICAgdGhyb3cgX2NvbnRleHQzLnQwO1xuXG4gICAgICAgICAgICAgIGNhc2UgMTI6XG4gICAgICAgICAgICAgICAgX3RoaXMudHVyblNlcnZlcldhdGNoZXJzKys7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQzLnByZXYgPSAxMztcblxuICAgICAgICAgICAgICBjYXNlIDE0OlxuICAgICAgICAgICAgICAgIGlmICghdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgX2NvbnRleHQzLm5leHQgPSAyMTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIF9jb250ZXh0My5uZXh0ID0gMTc7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9hd2FpdEFzeW5jR2VuZXJhdG9yKG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gc2V0VHVyblNlcnZlciA9IHJlc29sdmU7XG4gICAgICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgICAgICAgIGNhc2UgMTc6XG4gICAgICAgICAgICAgICAgX2NvbnRleHQzLm5leHQgPSAxOTtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQzLnNlbnQ7XG5cbiAgICAgICAgICAgICAgY2FzZSAxOTpcbiAgICAgICAgICAgICAgICBfY29udGV4dDMubmV4dCA9IDE0O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgIGNhc2UgMjE6XG4gICAgICAgICAgICAgICAgX2NvbnRleHQzLnByZXYgPSAyMTtcblxuICAgICAgICAgICAgICAgIC8vIFRoZSBsb29wIHdhcyBicm9rZW4gYnkgdGhlIGNhbGxlciAtIGNsZWFuIHVwXG4gICAgICAgICAgICAgICAgX3RoaXMub2ZmKFwiYWN0aW9uOlwiLmNvbmNhdChfV2lkZ2V0QXBpQWN0aW9uLldpZGdldEFwaVRvV2lkZ2V0QWN0aW9uLlVwZGF0ZVR1cm5TZXJ2ZXJzKSwgb25VcGRhdGVUdXJuU2VydmVycyk7IC8vIFNpbmNlIHNlbmRpbmcgdGhlICd1bndhdGNoJyBhY3Rpb24gd2lsbCBlbmQgdXBkYXRlcyBmb3IgYWxsIG90aGVyXG4gICAgICAgICAgICAgICAgLy8gY29uc3VtZXJzLCBvbmx5IHNlbmQgaXQgaWYgd2UncmUgdGhlIG9ubHkgY29uc3VtZXIgcmVtYWluaW5nXG5cblxuICAgICAgICAgICAgICAgIF90aGlzLnR1cm5TZXJ2ZXJXYXRjaGVycy0tO1xuXG4gICAgICAgICAgICAgICAgaWYgKCEoX3RoaXMudHVyblNlcnZlcldhdGNoZXJzID09PSAwKSkge1xuICAgICAgICAgICAgICAgICAgX2NvbnRleHQzLm5leHQgPSAyNztcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIF9jb250ZXh0My5uZXh0ID0gMjc7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9hd2FpdEFzeW5jR2VuZXJhdG9yKF90aGlzLnRyYW5zcG9ydC5zZW5kKF9XaWRnZXRBcGlBY3Rpb24uV2lkZ2V0QXBpRnJvbVdpZGdldEFjdGlvbi5VbndhdGNoVHVyblNlcnZlcnMsIHt9KSk7XG5cbiAgICAgICAgICAgICAgY2FzZSAyNzpcbiAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQzLmZpbmlzaCgyMSk7XG5cbiAgICAgICAgICAgICAgY2FzZSAyODpcbiAgICAgICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dDMuc3RvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSwgX2NhbGxlZTMsIG51bGwsIFtbMywgOF0sIFsxMywsIDIxLCAyOF1dKTtcbiAgICAgIH0pKSgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTdGFydHMgdGhlIGNvbW11bmljYXRpb24gY2hhbm5lbC4gVGhpcyBzaG91bGQgYmUgZG9uZSBlYXJseSB0byBlbnN1cmVcbiAgICAgKiB0aGF0IG1lc3NhZ2VzIGFyZSBub3QgbWlzc2VkLiBDb21tdW5pY2F0aW9uIGNhbiBvbmx5IGJlIHN0b3BwZWQgYnkgdGhlIGNsaWVudC5cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInN0YXJ0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgICAgdmFyIF90aGlzNSA9IHRoaXM7XG5cbiAgICAgIHRoaXMudHJhbnNwb3J0LnN0YXJ0KCk7XG4gICAgICB0aGlzLmdldENsaWVudFZlcnNpb25zKCkudGhlbihmdW5jdGlvbiAodikge1xuICAgICAgICBpZiAodi5pbmNsdWRlcyhfQXBpVmVyc2lvbi5VbnN0YWJsZUFwaVZlcnNpb24uTVNDMjk3NCkpIHtcbiAgICAgICAgICBfdGhpczUuc3VwcG9ydHNNU0MyOTc0UmVuZWdvdGlhdGUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaGFuZGxlTWVzc2FnZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVNZXNzYWdlKGV2KSB7XG4gICAgICB2YXIgYWN0aW9uRXYgPSBuZXcgQ3VzdG9tRXZlbnQoXCJhY3Rpb246XCIuY29uY2F0KGV2LmRldGFpbC5hY3Rpb24pLCB7XG4gICAgICAgIGRldGFpbDogZXYuZGV0YWlsLFxuICAgICAgICBjYW5jZWxhYmxlOiB0cnVlXG4gICAgICB9KTtcbiAgICAgIHRoaXMuZW1pdChcImFjdGlvbjpcIi5jb25jYXQoZXYuZGV0YWlsLmFjdGlvbiksIGFjdGlvbkV2KTtcblxuICAgICAgaWYgKCFhY3Rpb25Fdi5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIHN3aXRjaCAoZXYuZGV0YWlsLmFjdGlvbikge1xuICAgICAgICAgIGNhc2UgX1dpZGdldEFwaUFjdGlvbi5XaWRnZXRBcGlUb1dpZGdldEFjdGlvbi5TdXBwb3J0ZWRBcGlWZXJzaW9uczpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlcGx5VmVyc2lvbnMoZXYuZGV0YWlsKTtcblxuICAgICAgICAgIGNhc2UgX1dpZGdldEFwaUFjdGlvbi5XaWRnZXRBcGlUb1dpZGdldEFjdGlvbi5DYXBhYmlsaXRpZXM6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVDYXBhYmlsaXRpZXMoZXYuZGV0YWlsKTtcblxuICAgICAgICAgIGNhc2UgX1dpZGdldEFwaUFjdGlvbi5XaWRnZXRBcGlUb1dpZGdldEFjdGlvbi5VcGRhdGVWaXNpYmlsaXR5OlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNwb3J0LnJlcGx5KGV2LmRldGFpbCwge30pO1xuICAgICAgICAgIC8vIGFjayB0byBhdm9pZCBlcnJvciBzcGFtXG5cbiAgICAgICAgICBjYXNlIF9XaWRnZXRBcGlBY3Rpb24uV2lkZ2V0QXBpVG9XaWRnZXRBY3Rpb24uTm90aWZ5Q2FwYWJpbGl0aWVzOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNwb3J0LnJlcGx5KGV2LmRldGFpbCwge30pO1xuICAgICAgICAgIC8vIGFjayB0byBhdm9pZCBlcnJvciBzcGFtXG5cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNwb3J0LnJlcGx5KGV2LmRldGFpbCwge1xuICAgICAgICAgICAgICBlcnJvcjoge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiVW5rbm93biBvciB1bnN1cHBvcnRlZCBhY3Rpb246IFwiICsgZXYuZGV0YWlsLmFjdGlvblxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZXBseVZlcnNpb25zXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlcGx5VmVyc2lvbnMocmVxdWVzdCkge1xuICAgICAgdGhpcy50cmFuc3BvcnQucmVwbHkocmVxdWVzdCwge1xuICAgICAgICBzdXBwb3J0ZWRfdmVyc2lvbnM6IF9BcGlWZXJzaW9uLkN1cnJlbnRBcGlWZXJzaW9uc1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldENsaWVudFZlcnNpb25zXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldENsaWVudFZlcnNpb25zKCkge1xuICAgICAgdmFyIF90aGlzNiA9IHRoaXM7XG5cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHRoaXMuY2FjaGVkQ2xpZW50VmVyc2lvbnMpKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5jYWNoZWRDbGllbnRWZXJzaW9ucyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnRyYW5zcG9ydC5zZW5kKF9XaWRnZXRBcGlBY3Rpb24uV2lkZ2V0QXBpRnJvbVdpZGdldEFjdGlvbi5TdXBwb3J0ZWRBcGlWZXJzaW9ucywge30pLnRoZW4oZnVuY3Rpb24gKHIpIHtcbiAgICAgICAgX3RoaXM2LmNhY2hlZENsaWVudFZlcnNpb25zID0gci5zdXBwb3J0ZWRfdmVyc2lvbnM7XG4gICAgICAgIHJldHVybiByLnN1cHBvcnRlZF92ZXJzaW9ucztcbiAgICAgIH0pW1wiY2F0Y2hcIl0oZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFwibm9uLWZhdGFsIGVycm9yIGdldHRpbmcgc3VwcG9ydGVkIGNsaWVudCB2ZXJzaW9uczogXCIsIGUpO1xuICAgICAgICByZXR1cm4gW107XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaGFuZGxlQ2FwYWJpbGl0aWVzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZUNhcGFiaWxpdGllcyhyZXF1ZXN0KSB7XG4gICAgICB2YXIgX3RoaXM3ID0gdGhpcztcblxuICAgICAgaWYgKHRoaXMuY2FwYWJpbGl0aWVzRmluaXNoZWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNwb3J0LnJlcGx5KHJlcXVlc3QsIHtcbiAgICAgICAgICBlcnJvcjoge1xuICAgICAgICAgICAgbWVzc2FnZTogXCJDYXBhYmlsaXR5IG5lZ290aWF0aW9uIGFscmVhZHkgY29tcGxldGVkXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSAvLyBTZWUgaWYgd2UgY2FuIGV4cGVjdCBhIGNhcGFiaWxpdGllcyBub3RpZmljYXRpb24gb3Igbm90XG5cblxuICAgICAgcmV0dXJuIHRoaXMuZ2V0Q2xpZW50VmVyc2lvbnMoKS50aGVuKGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIGlmICh2LmluY2x1ZGVzKF9BcGlWZXJzaW9uLlVuc3RhYmxlQXBpVmVyc2lvbi5NU0MyODcxKSkge1xuICAgICAgICAgIF90aGlzNy5vbmNlKFwiYWN0aW9uOlwiLmNvbmNhdChfV2lkZ2V0QXBpQWN0aW9uLldpZGdldEFwaVRvV2lkZ2V0QWN0aW9uLk5vdGlmeUNhcGFiaWxpdGllcyksIGZ1bmN0aW9uIChldikge1xuICAgICAgICAgICAgX3RoaXM3LmFwcHJvdmVkQ2FwYWJpbGl0aWVzID0gZXYuZGV0YWlsLmRhdGEuYXBwcm92ZWQ7XG5cbiAgICAgICAgICAgIF90aGlzNy5lbWl0KFwicmVhZHlcIik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gaWYgd2UgY2FuJ3QgZXhwZWN0IG5vdGlmaWNhdGlvbiwgd2UncmUgYXMgZG9uZSBhcyB3ZSBjYW4gYmVcbiAgICAgICAgICBfdGhpczcuZW1pdChcInJlYWR5XCIpO1xuICAgICAgICB9IC8vIGluIGVpdGhlciBjYXNlLCByZXBseSB0byB0aGF0IGNhcGFiaWxpdGllcyByZXF1ZXN0XG5cblxuICAgICAgICBfdGhpczcuY2FwYWJpbGl0aWVzRmluaXNoZWQgPSB0cnVlO1xuICAgICAgICByZXR1cm4gX3RoaXM3LnRyYW5zcG9ydC5yZXBseShyZXF1ZXN0LCB7XG4gICAgICAgICAgY2FwYWJpbGl0aWVzOiBfdGhpczcucmVxdWVzdGVkQ2FwYWJpbGl0aWVzXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFdpZGdldEFwaTtcbn0oX2V2ZW50cy5FdmVudEVtaXR0ZXIpO1xuXG5leHBvcnRzLldpZGdldEFwaSA9IFdpZGdldEFwaTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuV2lkZ2V0RHJpdmVyID0gdm9pZCAwO1xuXG52YXIgXyA9IHJlcXVpcmUoXCIuLlwiKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG4vKipcbiAqIFJlcHJlc2VudHMgdGhlIGZ1bmN0aW9ucyBhbmQgYmVoYXZpb3VyIHRoZSB3aWRnZXQtYXBpIGlzIHVuYWJsZSB0b1xuICogZG8sIHN1Y2ggYXMgcHJvbXB0aW5nIHRoZSB1c2VyIGZvciBpbmZvcm1hdGlvbiBvciBpbnRlcmFjdGluZyB3aXRoXG4gKiB0aGUgVUkuIENsaWVudHMgYXJlIGV4cGVjdGVkIHRvIGltcGxlbWVudCB0aGlzIGNsYXNzIGFuZCBvdmVycmlkZVxuICogYW55IGZ1bmN0aW9ucyB0aGV5IG5lZWQvd2FudCB0byBzdXBwb3J0LlxuICpcbiAqIFRoaXMgY2xhc3MgYXNzdW1lcyB0aGUgY2xpZW50IHdpbGwgaGF2ZSBhIGNvbnRleHQgb2YgYSBXaWRnZXRcbiAqIGluc3RhbmNlIGFscmVhZHkuXG4gKi9cbnZhciBXaWRnZXREcml2ZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBXaWRnZXREcml2ZXIoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFdpZGdldERyaXZlcik7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoV2lkZ2V0RHJpdmVyLCBbe1xuICAgIGtleTogXCJ2YWxpZGF0ZUNhcGFiaWxpdGllc1wiLFxuICAgIHZhbHVlOlxuICAgIC8qKlxuICAgICAqIFZlcmlmaWVzIHRoZSB3aWRnZXQncyByZXF1ZXN0ZWQgY2FwYWJpbGl0aWVzLCByZXR1cm5pbmcgdGhlIG9uZXNcbiAgICAgKiBpdCBpcyBhcHByb3ZlZCB0byB1c2UuIE11dGF0aW5nIHRoZSByZXF1ZXN0ZWQgY2FwYWJpbGl0aWVzIHdpbGxcbiAgICAgKiBoYXZlIG5vIGVmZmVjdC5cbiAgICAgKlxuICAgICAqIFRoaXMgU0hPVUxEIHJlc3VsdCBpbiB0aGUgdXNlciBiZWluZyBwcm9tcHRlZCB0byBhcHByb3ZlL2RlbnlcbiAgICAgKiBjYXBhYmlsaXRpZXMuXG4gICAgICpcbiAgICAgKiBCeSBkZWZhdWx0IHRoaXMgcmVqZWN0cyBhbGwgY2FwYWJpbGl0aWVzIChyZXR1cm5zIGFuIGVtcHR5IHNldCkuXG4gICAgICogQHBhcmFtIHtTZXQ8Q2FwYWJpbGl0eT59IHJlcXVlc3RlZCBUaGUgc2V0IG9mIHJlcXVlc3RlZCBjYXBhYmlsaXRpZXMuXG4gICAgICogQHJldHVybnMge1Byb21pc2U8U2V0PENhcGFiaWxpdHk+Pn0gUmVzb2x2ZXMgdG8gdGhlIGFsbG93ZWQgY2FwYWJpbGl0aWVzLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlQ2FwYWJpbGl0aWVzKHJlcXVlc3RlZCkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShuZXcgU2V0KCkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZW5kcyBhbiBldmVudCBpbnRvIGEgcm9vbS4gSWYgYHJvb21JZGAgaXMgZmFsc3ksIHRoZSBjbGllbnQgc2hvdWxkIHNlbmQgdGhlIGV2ZW50XG4gICAgICogaW50byB0aGUgcm9vbSB0aGUgdXNlciBpcyBjdXJyZW50bHkgbG9va2luZyBhdC4gVGhlIHdpZGdldCBBUEkgd2lsbCBoYXZlIGFscmVhZHlcbiAgICAgKiB2ZXJpZmllZCB0aGF0IHRoZSB3aWRnZXQgaXMgY2FwYWJsZSBvZiBzZW5kaW5nIHRoZSBldmVudCB0byB0aGF0IHJvb20uXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50VHlwZSBUaGUgZXZlbnQgdHlwZSB0byBiZSBzZW50LlxuICAgICAqIEBwYXJhbSB7Kn0gY29udGVudCBUaGUgY29udGVudCBmb3IgdGhlIGV2ZW50LlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfG51bGx9IHN0YXRlS2V5IFRoZSBzdGF0ZSBrZXkgaWYgdGhpcyBpcyBhIHN0YXRlIGV2ZW50LCBvdGhlcndpc2UgbnVsbC5cbiAgICAgKiBNYXkgYmUgYW4gZW1wdHkgc3RyaW5nLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfG51bGx9IHJvb21JZCBUaGUgcm9vbSBJRCB0byBzZW5kIHRoZSBldmVudCB0by4gSWYgZmFsc3ksIHRoZSByb29tIHRoZVxuICAgICAqIHVzZXIgaXMgY3VycmVudGx5IGxvb2tpbmcgYXQuXG4gICAgICogQHJldHVybnMge1Byb21pc2U8SVNlbmRFdmVudERldGFpbHM+fSBSZXNvbHZlcyB3aGVuIHRoZSBldmVudCBoYXMgYmVlbiBzZW50IHdpdGhcbiAgICAgKiBkZXRhaWxzIG9mIHRoYXQgZXZlbnQuXG4gICAgICogQHRocm93cyBSZWplY3RlZCB3aGVuIHRoZSBldmVudCBjb3VsZCBub3QgYmUgc2VudC5cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInNlbmRFdmVudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZW5kRXZlbnQoZXZlbnRUeXBlLCBjb250ZW50KSB7XG4gICAgICB2YXIgc3RhdGVLZXkgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IG51bGw7XG4gICAgICB2YXIgcm9vbUlkID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiBudWxsO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIkZhaWxlZCB0byBvdmVycmlkZSBmdW5jdGlvblwiKSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNlbmRzIGEgdG8tZGV2aWNlIGV2ZW50LiBUaGUgd2lkZ2V0IEFQSSB3aWxsIGhhdmUgYWxyZWFkeSB2ZXJpZmllZCB0aGF0IHRoZSB3aWRnZXRcbiAgICAgKiBpcyBjYXBhYmxlIG9mIHNlbmRpbmcgdGhlIGV2ZW50LlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudFR5cGUgVGhlIGV2ZW50IHR5cGUgdG8gYmUgc2VudC5cbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGVuY3J5cHRlZCBXaGV0aGVyIHRvIGVuY3J5cHQgdGhlIG1lc3NhZ2UgY29udGVudHMuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbnRlbnRNYXAgQSBtYXAgZnJvbSB1c2VyIElEIGFuZCBkZXZpY2UgSUQgdG8gZXZlbnQgY29udGVudC5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn0gUmVzb2x2ZXMgd2hlbiB0aGUgZXZlbnQgaGFzIGJlZW4gc2VudC5cbiAgICAgKiBAdGhyb3dzIFJlamVjdGVkIHdoZW4gdGhlIGV2ZW50IGNvdWxkIG5vdCBiZSBzZW50LlxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwic2VuZFRvRGV2aWNlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNlbmRUb0RldmljZShldmVudFR5cGUsIGVuY3J5cHRlZCwgY29udGVudE1hcCkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIkZhaWxlZCB0byBvdmVycmlkZSBmdW5jdGlvblwiKSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlYWRzIGFsbCBldmVudHMgb2YgdGhlIGdpdmVuIHR5cGUsIGFuZCBvcHRpb25hbGx5IGBtc2d0eXBlYCAoaWYgYXBwbGljYWJsZS9kZWZpbmVkKSxcbiAgICAgKiB0aGUgdXNlciBoYXMgYWNjZXNzIHRvLiBUaGUgd2lkZ2V0IEFQSSB3aWxsIGhhdmUgYWxyZWFkeSB2ZXJpZmllZCB0aGF0IHRoZSB3aWRnZXQgaXNcbiAgICAgKiBjYXBhYmxlIG9mIHJlY2VpdmluZyB0aGUgZXZlbnRzLiBMZXNzIGV2ZW50cyB0aGFuIHRoZSBsaW1pdCBhcmUgYWxsb3dlZCB0byBiZSByZXR1cm5lZCxcbiAgICAgKiBidXQgbm90IG1vcmUuIElmIGByb29tSWRzYCBpcyBzdXBwbGllZCwgaXQgbWF5IGNvbnRhaW4gYFN5bWJvbHMuQW55Um9vbWAgdG8gZGVub3RlIHRoYXRcbiAgICAgKiBgbGltaXRgIGluIGVhY2ggb2YgdGhlIGNsaWVudCdzIGtub3duIHJvb21zIHNob3VsZCBiZSByZXR1cm5lZC4gV2hlbiBgbnVsbGAsIG9ubHkgdGhlXG4gICAgICogcm9vbSB0aGUgdXNlciBpcyBjdXJyZW50bHkgbG9va2luZyBhdCBzaG91bGQgYmUgY29uc2lkZXJlZC5cbiAgICAgKiBAcGFyYW0gZXZlbnRUeXBlIFRoZSBldmVudCB0eXBlIHRvIGJlIHJlYWQuXG4gICAgICogQHBhcmFtIG1zZ3R5cGUgVGhlIG1zZ3R5cGUgb2YgdGhlIGV2ZW50cyB0byBiZSByZWFkLCBpZiBhcHBsaWNhYmxlL2RlZmluZWQuXG4gICAgICogQHBhcmFtIGxpbWl0IFRoZSBtYXhpbXVtIG51bWJlciBvZiBldmVudHMgdG8gcmV0cmlldmUgcGVyIHJvb20uIFdpbGwgYmUgemVybyB0byBkZW5vdGUgXCJhcyBtYW55XG4gICAgICogYXMgcG9zc2libGVcIi5cbiAgICAgKiBAcGFyYW0gcm9vbUlkcyBXaGVuIG51bGwsIHRoZSB1c2VyJ3MgY3VycmVudGx5IHZpZXdlZCByb29tLiBPdGhlcndpc2UsIHRoZSBsaXN0IG9mIHJvb20gSURzXG4gICAgICogdG8gbG9vayB3aXRoaW4sIHBvc3NpYmx5IGNvbnRhaW5pbmcgU3ltYm9scy5BbnlSb29tIHRvIGRlbm90ZSBhbGwga25vd24gcm9vbXMuXG4gICAgICogQHJldHVybnMge1Byb21pc2U8SVJvb21FdmVudFtdPn0gUmVzb2x2ZXMgdG8gdGhlIHJvb20gZXZlbnRzLCBvciBhbiBlbXB0eSBhcnJheS5cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInJlYWRSb29tRXZlbnRzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlYWRSb29tRXZlbnRzKGV2ZW50VHlwZSwgbXNndHlwZSwgbGltaXQpIHtcbiAgICAgIHZhciByb29tSWRzID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiBudWxsO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShbXSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlYWRzIGFsbCBldmVudHMgb2YgdGhlIGdpdmVuIHR5cGUsIGFuZCBvcHRpb25hbGx5IHN0YXRlIGtleSAoaWYgYXBwbGljYWJsZS9kZWZpbmVkKSxcbiAgICAgKiB0aGUgdXNlciBoYXMgYWNjZXNzIHRvLiBUaGUgd2lkZ2V0IEFQSSB3aWxsIGhhdmUgYWxyZWFkeSB2ZXJpZmllZCB0aGF0IHRoZSB3aWRnZXQgaXNcbiAgICAgKiBjYXBhYmxlIG9mIHJlY2VpdmluZyB0aGUgZXZlbnRzLiBMZXNzIGV2ZW50cyB0aGFuIHRoZSBsaW1pdCBhcmUgYWxsb3dlZCB0byBiZSByZXR1cm5lZCxcbiAgICAgKiBidXQgbm90IG1vcmUuIElmIGByb29tSWRzYCBpcyBzdXBwbGllZCwgaXQgbWF5IGNvbnRhaW4gYFN5bWJvbHMuQW55Um9vbWAgdG8gZGVub3RlIHRoYXRcbiAgICAgKiBgbGltaXRgIGluIGVhY2ggb2YgdGhlIGNsaWVudCdzIGtub3duIHJvb21zIHNob3VsZCBiZSByZXR1cm5lZC4gV2hlbiBgbnVsbGAsIG9ubHkgdGhlXG4gICAgICogcm9vbSB0aGUgdXNlciBpcyBjdXJyZW50bHkgbG9va2luZyBhdCBzaG91bGQgYmUgY29uc2lkZXJlZC5cbiAgICAgKiBAcGFyYW0gZXZlbnRUeXBlIFRoZSBldmVudCB0eXBlIHRvIGJlIHJlYWQuXG4gICAgICogQHBhcmFtIHN0YXRlS2V5IFRoZSBzdGF0ZSBrZXkgb2YgdGhlIGV2ZW50cyB0byBiZSByZWFkLCBpZiBhcHBsaWNhYmxlL2RlZmluZWQuXG4gICAgICogQHBhcmFtIGxpbWl0IFRoZSBtYXhpbXVtIG51bWJlciBvZiBldmVudHMgdG8gcmV0cmlldmUuIFdpbGwgYmUgemVybyB0byBkZW5vdGUgXCJhcyBtYW55XG4gICAgICogYXMgcG9zc2libGVcIi5cbiAgICAgKiBAcGFyYW0gcm9vbUlkcyBXaGVuIG51bGwsIHRoZSB1c2VyJ3MgY3VycmVudGx5IHZpZXdlZCByb29tLiBPdGhlcndpc2UsIHRoZSBsaXN0IG9mIHJvb20gSURzXG4gICAgICogdG8gbG9vayB3aXRoaW4sIHBvc3NpYmx5IGNvbnRhaW5pbmcgU3ltYm9scy5BbnlSb29tIHRvIGRlbm90ZSBhbGwga25vd24gcm9vbXMuXG4gICAgICogQHJldHVybnMge1Byb21pc2U8SVJvb21FdmVudFtdPn0gUmVzb2x2ZXMgdG8gdGhlIHN0YXRlIGV2ZW50cywgb3IgYW4gZW1wdHkgYXJyYXkuXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJyZWFkU3RhdGVFdmVudHNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVhZFN0YXRlRXZlbnRzKGV2ZW50VHlwZSwgc3RhdGVLZXksIGxpbWl0KSB7XG4gICAgICB2YXIgcm9vbUlkcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDogbnVsbDtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoW10pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZWFkcyBhbGwgZXZlbnRzIHRoYXQgYXJlIHJlbGF0ZWQgdG8gYSBnaXZlbiBldmVudC4gVGhlIHdpZGdldCBBUEkgd2lsbFxuICAgICAqIGhhdmUgYWxyZWFkeSB2ZXJpZmllZCB0aGF0IHRoZSB3aWRnZXQgaXMgY2FwYWJsZSBvZiByZWNlaXZpbmcgdGhlIGV2ZW50LFxuICAgICAqIG9yIHdpbGwgbWFrZSBzdXJlIHRvIHJlamVjdCBhY2Nlc3MgdG8gZXZlbnRzIHdoaWNoIGFyZSByZXR1cm5lZCBmcm9tIHRoaXNcbiAgICAgKiBmdW5jdGlvbiwgYnV0IGFyZSBub3QgY2FwYWJsZSBvZiByZWNlaXZpbmcuIElmIGByZWxhdGlvblR5cGVgIG9yIGBldmVudFR5cGVgXG4gICAgICogYXJlIHNldCwgdGhlIHJldHVybmVkIGV2ZW50cyBzaG91bGQgYWxyZWFkeSBiZSBmaWx0ZXJlZC4gTGVzcyBldmVudHMgdGhhblxuICAgICAqIHRoZSBsaW1pdCBhcmUgYWxsb3dlZCB0byBiZSByZXR1cm5lZCwgYnV0IG5vdCBtb3JlLlxuICAgICAqIEBwYXJhbSBldmVudElkIFRoZSBpZCBvZiB0aGUgcGFyZW50IGV2ZW50IHRvIGJlIHJlYWQuXG4gICAgICogQHBhcmFtIHJvb21JZCBUaGUgcm9vbSB0byBsb29rIHdpdGhpbi4gV2hlbiB1bmRlZmluZWQsIHRoZSB1c2VyJ3NcbiAgICAgKiBjdXJyZW50bHkgdmlld2VkIHJvb20uXG4gICAgICogQHBhcmFtIHJlbGF0aW9uVHlwZSBUaGUgcmVsYXRpb25zaGlwIHR5cGUgb2YgY2hpbGQgZXZlbnRzIHRvIHNlYXJjaCBmb3IuXG4gICAgICogV2hlbiB1bmRlZmluZWQsIGFsbCByZWxhdGlvbnMgYXJlIHJldHVybmVkLlxuICAgICAqIEBwYXJhbSBldmVudFR5cGUgVGhlIGV2ZW50IHR5cGUgb2YgY2hpbGQgZXZlbnRzIHRvIHNlYXJjaCBmb3IuIFdoZW4gdW5kZWZpbmVkLFxuICAgICAqIGFsbCByZWxhdGVkIGV2ZW50cyBhcmUgcmV0dXJuZWQuXG4gICAgICogQHBhcmFtIGZyb20gVGhlIHBhZ2luYXRpb24gdG9rZW4gdG8gc3RhcnQgcmV0dXJuaW5nIHJlc3VsdHMgZnJvbSwgYXNcbiAgICAgKiByZWNlaXZlZCBmcm9tIGEgcHJldmlvdXMgY2FsbC4gSWYgbm90IHN1cHBsaWVkLCByZXN1bHRzIHN0YXJ0IGF0IHRoZSBtb3N0XG4gICAgICogcmVjZW50IHRvcG9sb2dpY2FsIGV2ZW50IGtub3duIHRvIHRoZSBzZXJ2ZXIuXG4gICAgICogQHBhcmFtIHRvIFRoZSBwYWdpbmF0aW9uIHRva2VuIHRvIHN0b3AgcmV0dXJuaW5nIHJlc3VsdHMgYXQuIElmIG5vdFxuICAgICAqIHN1cHBsaWVkLCByZXN1bHRzIGNvbnRpbnVlIHVwIHRvIGxpbWl0IG9yIHVudGlsIHRoZXJlIGFyZSBubyBtb3JlIGV2ZW50cy5cbiAgICAgKiBAcGFyYW0gbGltaXQgVGhlIG1heGltdW0gbnVtYmVyIG9mIGV2ZW50cyB0byByZXRyaWV2ZSBwZXIgcm9vbS4gSWYgbm90XG4gICAgICogc3VwcGxpZWQsIHRoZSBzZXJ2ZXIgd2lsbCBhcHBseSBhIGRlZmF1bHQgbGltaXQuXG4gICAgICogQHBhcmFtIGRpcmVjdGlvbiBUaGUgZGlyZWN0aW9uIHRvIHNlYXJjaCBmb3IgYWNjb3JkaW5nIHRvIE1TQzM3MTVcbiAgICAgKiBAcmV0dXJucyBSZXNvbHZlcyB0byB0aGUgcm9vbSByZWxhdGlvbnMuXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJyZWFkRXZlbnRSZWxhdGlvbnNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVhZEV2ZW50UmVsYXRpb25zKGV2ZW50SWQsIHJvb21JZCwgcmVsYXRpb25UeXBlLCBldmVudFR5cGUsIGZyb20sIHRvLCBsaW1pdCwgZGlyZWN0aW9uKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHtcbiAgICAgICAgY2h1bms6IFtdXG4gICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQXNrcyB0aGUgdXNlciBmb3IgcGVybWlzc2lvbiB0byB2YWxpZGF0ZSB0aGVpciBpZGVudGl0eSB0aHJvdWdoIE9wZW5JRCBDb25uZWN0LiBUaGVcbiAgICAgKiBpbnRlcmZhY2UgZm9yIHRoaXMgZnVuY3Rpb24gaXMgYW4gb2JzZXJ2YWJsZSB3aGljaCBhY2NlcHRzIHRoZSBzdGF0ZSBtYWNoaW5lIG9mIHRoZVxuICAgICAqIE9JREMgZXhjaGFuZ2UgZmxvdy4gRm9yIGV4YW1wbGUsIGlmIHRoZSBjbGllbnQvdXNlciBibG9ja3MgdGhlIHJlcXVlc3QgdGhlbiBpdCB3b3VsZFxuICAgICAqIGZlZWQgYmFjayBhIGB7c3RhdGU6IEJsb2NrZWR9YCBpbnRvIHRoZSBvYnNlcnZhYmxlLiBTaW1pbGFybHksIGlmIHRoZSB1c2VyIGFscmVhZHlcbiAgICAgKiBhcHByb3ZlZCB0aGUgd2lkZ2V0IHRoZW4gYSBge3N0YXRlOiBBbGxvd2VkfWAgd291bGQgYmUgZmVkIGludG8gdGhlIG9ic2VydmFibGUgYWxvbmdzaWRlXG4gICAgICogdGhlIHRva2VuIGl0c2VsZi4gSWYgdGhlIGNsaWVudCBpcyBhc2tpbmcgZm9yIHBlcm1pc3Npb24sIGl0IHNob3VsZCBmZWVkIGluIGFcbiAgICAgKiBge3N0YXRlOiBQZW5kaW5nVXNlckNvbmZpcm1hdGlvbn1gIGZvbGxvd2VkIGJ5IHRoZSByZWxldmFudCBBbGxvd2VkIG9yIEJsb2NrZWQgc3RhdGUuXG4gICAgICpcbiAgICAgKiBUaGUgd2lkZ2V0IEFQSSB3aWxsIHJlamVjdCB0aGUgd2lkZ2V0J3MgcmVxdWVzdCB3aXRoIGFuIGVycm9yIGlmIHRoaXMgY29udHJhY3QgaXMgbm90XG4gICAgICogbWV0IHByb3Blcmx5LiBCeSBkZWZhdWx0LCB0aGUgd2lkZ2V0IGRyaXZlciB3aWxsIGJsb2NrIGFsbCBPSURDIHJlcXVlc3RzLlxuICAgICAqIEBwYXJhbSB7U2ltcGxlT2JzZXJ2YWJsZTxJT3BlbklEVXBkYXRlPn0gb2JzZXJ2ZXIgVGhlIG9ic2VydmFibGUgdG8gZmVlZCB1cGRhdGVzIGludG8uXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJhc2tPcGVuSURcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYXNrT3BlbklEKG9ic2VydmVyKSB7XG4gICAgICBvYnNlcnZlci51cGRhdGUoe1xuICAgICAgICBzdGF0ZTogXy5PcGVuSURSZXF1ZXN0U3RhdGUuQmxvY2tlZFxuICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIE5hdmlnYXRlcyB0aGUgY2xpZW50IHdpdGggYSBtYXRyaXgudG8gVVJJLiBJbiBmdXR1cmUgdGhpcyBmdW5jdGlvbiB3aWxsIGFsc28gYmUgcHJvdmlkZWRcbiAgICAgKiB3aXRoIHRoZSBNYXRyaXggVVJJcyBvbmNlIG1hdHJpeC50byBpcyByZXBsYWNlZC4gVGhlIGdpdmVuIFVSSSB3aWxsIGhhdmUgYWxyZWFkeSBiZWVuXG4gICAgICogbGlnaHRseSBjaGVja2VkIHRvIGVuc3VyZSBpdCBsb29rcyBsaWtlIGEgdmFsaWQgVVJJLCB0aG91Z2ggdGhlIGltcGxlbWVudGF0aW9uIGlzIHJlY29tbWVuZGVkXG4gICAgICogdG8gZG8gZnVydGhlciBjaGVja3Mgb24gdGhlIFVSSS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXJpIFRoZSBVUkkgdG8gbmF2aWdhdGUgdG8uXG4gICAgICogQHJldHVybnMge1Byb21pc2U8dm9pZD59IFJlc29sdmVzIHdoZW4gY29tcGxldGUuXG4gICAgICogQHRocm93cyBUaHJvd3MgaWYgdGhlcmUncyBhIHByb2JsZW0gd2l0aCB0aGUgbmF2aWdhdGlvbiwgc3VjaCBhcyBpbnZhbGlkIGZvcm1hdC5cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIm5hdmlnYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG5hdmlnYXRlKHVyaSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTmF2aWdhdGlvbiBpcyBub3QgaW1wbGVtZW50ZWRcIik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFBvbGxzIGZvciBUVVJOIHNlcnZlciBkYXRhLCB5aWVsZGluZyBhbiBpbml0aWFsIHNldCBvZiBjcmVkZW50aWFscyBhcyBzb29uIGFzIHBvc3NpYmxlLCBhbmRcbiAgICAgKiB0aGVyZWFmdGVyIHlpZWxkaW5nIG5ldyBjcmVkZW50aWFscyB3aGVuZXZlciB0aGUgcHJldmlvdXMgb25lcyBleHBpcmUuIFRoZSB3aWRnZXQgQVBJIHdpbGxcbiAgICAgKiBoYXZlIGFscmVhZHkgdmVyaWZpZWQgdGhhdCB0aGUgd2lkZ2V0IGhhcyBwZXJtaXNzaW9uIHRvIGFjY2VzcyBUVVJOIHNlcnZlcnMuXG4gICAgICogQHlpZWxkcyB7SVR1cm5TZXJ2ZXJ9IFRoZSBUVVJOIHNlcnZlciBVUklzIGFuZCBjcmVkZW50aWFscyBjdXJyZW50bHkgYXZhaWxhYmxlIHRvIHRoZSBjbGllbnQuXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJnZXRUdXJuU2VydmVyc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRUdXJuU2VydmVycygpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlRVUk4gc2VydmVyIHN1cHBvcnQgaXMgbm90IGltcGxlbWVudGVkXCIpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBXaWRnZXREcml2ZXI7XG59KCk7XG5cbmV4cG9ydHMuV2lkZ2V0RHJpdmVyID0gV2lkZ2V0RHJpdmVyOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX1dpZGdldEFwaSA9IHJlcXVpcmUoXCIuL1dpZGdldEFwaVwiKTtcblxuT2JqZWN0LmtleXMoX1dpZGdldEFwaSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgaWYgKGtleSBpbiBleHBvcnRzICYmIGV4cG9ydHNba2V5XSA9PT0gX1dpZGdldEFwaVtrZXldKSByZXR1cm47XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF9XaWRnZXRBcGlba2V5XTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbnZhciBfQ2xpZW50V2lkZ2V0QXBpID0gcmVxdWlyZShcIi4vQ2xpZW50V2lkZ2V0QXBpXCIpO1xuXG5PYmplY3Qua2V5cyhfQ2xpZW50V2lkZ2V0QXBpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBpZiAoa2V5IGluIGV4cG9ydHMgJiYgZXhwb3J0c1trZXldID09PSBfQ2xpZW50V2lkZ2V0QXBpW2tleV0pIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX0NsaWVudFdpZGdldEFwaVtrZXldO1xuICAgIH1cbiAgfSk7XG59KTtcblxudmFyIF9TeW1ib2xzID0gcmVxdWlyZShcIi4vU3ltYm9sc1wiKTtcblxuT2JqZWN0LmtleXMoX1N5bWJvbHMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICBpZiAoa2V5ID09PSBcImRlZmF1bHRcIiB8fCBrZXkgPT09IFwiX19lc01vZHVsZVwiKSByZXR1cm47XG4gIGlmIChrZXkgaW4gZXhwb3J0cyAmJiBleHBvcnRzW2tleV0gPT09IF9TeW1ib2xzW2tleV0pIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX1N5bWJvbHNba2V5XTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbnZhciBfSVRyYW5zcG9ydCA9IHJlcXVpcmUoXCIuL3RyYW5zcG9ydC9JVHJhbnNwb3J0XCIpO1xuXG5PYmplY3Qua2V5cyhfSVRyYW5zcG9ydCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgaWYgKGtleSBpbiBleHBvcnRzICYmIGV4cG9ydHNba2V5XSA9PT0gX0lUcmFuc3BvcnRba2V5XSkgcmV0dXJuO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfSVRyYW5zcG9ydFtrZXldO1xuICAgIH1cbiAgfSk7XG59KTtcblxudmFyIF9Qb3N0bWVzc2FnZVRyYW5zcG9ydCA9IHJlcXVpcmUoXCIuL3RyYW5zcG9ydC9Qb3N0bWVzc2FnZVRyYW5zcG9ydFwiKTtcblxuT2JqZWN0LmtleXMoX1Bvc3RtZXNzYWdlVHJhbnNwb3J0KS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBpZiAoa2V5IGluIGV4cG9ydHMgJiYgZXhwb3J0c1trZXldID09PSBfUG9zdG1lc3NhZ2VUcmFuc3BvcnRba2V5XSkgcmV0dXJuO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfUG9zdG1lc3NhZ2VUcmFuc3BvcnRba2V5XTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbnZhciBfSUN1c3RvbVdpZGdldERhdGEgPSByZXF1aXJlKFwiLi9pbnRlcmZhY2VzL0lDdXN0b21XaWRnZXREYXRhXCIpO1xuXG5PYmplY3Qua2V5cyhfSUN1c3RvbVdpZGdldERhdGEpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICBpZiAoa2V5ID09PSBcImRlZmF1bHRcIiB8fCBrZXkgPT09IFwiX19lc01vZHVsZVwiKSByZXR1cm47XG4gIGlmIChrZXkgaW4gZXhwb3J0cyAmJiBleHBvcnRzW2tleV0gPT09IF9JQ3VzdG9tV2lkZ2V0RGF0YVtrZXldKSByZXR1cm47XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF9JQ3VzdG9tV2lkZ2V0RGF0YVtrZXldO1xuICAgIH1cbiAgfSk7XG59KTtcblxudmFyIF9JSml0c2lXaWRnZXREYXRhID0gcmVxdWlyZShcIi4vaW50ZXJmYWNlcy9JSml0c2lXaWRnZXREYXRhXCIpO1xuXG5PYmplY3Qua2V5cyhfSUppdHNpV2lkZ2V0RGF0YSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgaWYgKGtleSBpbiBleHBvcnRzICYmIGV4cG9ydHNba2V5XSA9PT0gX0lKaXRzaVdpZGdldERhdGFba2V5XSkgcmV0dXJuO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfSUppdHNpV2lkZ2V0RGF0YVtrZXldO1xuICAgIH1cbiAgfSk7XG59KTtcblxudmFyIF9JU3RpY2tlcnBpY2tlcldpZGdldERhdGEgPSByZXF1aXJlKFwiLi9pbnRlcmZhY2VzL0lTdGlja2VycGlja2VyV2lkZ2V0RGF0YVwiKTtcblxuT2JqZWN0LmtleXMoX0lTdGlja2VycGlja2VyV2lkZ2V0RGF0YSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgaWYgKGtleSBpbiBleHBvcnRzICYmIGV4cG9ydHNba2V5XSA9PT0gX0lTdGlja2VycGlja2VyV2lkZ2V0RGF0YVtrZXldKSByZXR1cm47XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF9JU3RpY2tlcnBpY2tlcldpZGdldERhdGFba2V5XTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbnZhciBfSVdpZGdldCA9IHJlcXVpcmUoXCIuL2ludGVyZmFjZXMvSVdpZGdldFwiKTtcblxuT2JqZWN0LmtleXMoX0lXaWRnZXQpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICBpZiAoa2V5ID09PSBcImRlZmF1bHRcIiB8fCBrZXkgPT09IFwiX19lc01vZHVsZVwiKSByZXR1cm47XG4gIGlmIChrZXkgaW4gZXhwb3J0cyAmJiBleHBvcnRzW2tleV0gPT09IF9JV2lkZ2V0W2tleV0pIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX0lXaWRnZXRba2V5XTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbnZhciBfV2lkZ2V0VHlwZSA9IHJlcXVpcmUoXCIuL2ludGVyZmFjZXMvV2lkZ2V0VHlwZVwiKTtcblxuT2JqZWN0LmtleXMoX1dpZGdldFR5cGUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICBpZiAoa2V5ID09PSBcImRlZmF1bHRcIiB8fCBrZXkgPT09IFwiX19lc01vZHVsZVwiKSByZXR1cm47XG4gIGlmIChrZXkgaW4gZXhwb3J0cyAmJiBleHBvcnRzW2tleV0gPT09IF9XaWRnZXRUeXBlW2tleV0pIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX1dpZGdldFR5cGVba2V5XTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbnZhciBfSVdpZGdldEFwaUVycm9yUmVzcG9uc2UgPSByZXF1aXJlKFwiLi9pbnRlcmZhY2VzL0lXaWRnZXRBcGlFcnJvclJlc3BvbnNlXCIpO1xuXG5PYmplY3Qua2V5cyhfSVdpZGdldEFwaUVycm9yUmVzcG9uc2UpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICBpZiAoa2V5ID09PSBcImRlZmF1bHRcIiB8fCBrZXkgPT09IFwiX19lc01vZHVsZVwiKSByZXR1cm47XG4gIGlmIChrZXkgaW4gZXhwb3J0cyAmJiBleHBvcnRzW2tleV0gPT09IF9JV2lkZ2V0QXBpRXJyb3JSZXNwb25zZVtrZXldKSByZXR1cm47XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF9JV2lkZ2V0QXBpRXJyb3JSZXNwb25zZVtrZXldO1xuICAgIH1cbiAgfSk7XG59KTtcblxudmFyIF9JV2lkZ2V0QXBpUmVxdWVzdCA9IHJlcXVpcmUoXCIuL2ludGVyZmFjZXMvSVdpZGdldEFwaVJlcXVlc3RcIik7XG5cbk9iamVjdC5rZXlzKF9JV2lkZ2V0QXBpUmVxdWVzdCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgaWYgKGtleSBpbiBleHBvcnRzICYmIGV4cG9ydHNba2V5XSA9PT0gX0lXaWRnZXRBcGlSZXF1ZXN0W2tleV0pIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX0lXaWRnZXRBcGlSZXF1ZXN0W2tleV07XG4gICAgfVxuICB9KTtcbn0pO1xuXG52YXIgX0lXaWRnZXRBcGlSZXNwb25zZSA9IHJlcXVpcmUoXCIuL2ludGVyZmFjZXMvSVdpZGdldEFwaVJlc3BvbnNlXCIpO1xuXG5PYmplY3Qua2V5cyhfSVdpZGdldEFwaVJlc3BvbnNlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBpZiAoa2V5IGluIGV4cG9ydHMgJiYgZXhwb3J0c1trZXldID09PSBfSVdpZGdldEFwaVJlc3BvbnNlW2tleV0pIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX0lXaWRnZXRBcGlSZXNwb25zZVtrZXldO1xuICAgIH1cbiAgfSk7XG59KTtcblxudmFyIF9XaWRnZXRBcGlBY3Rpb24gPSByZXF1aXJlKFwiLi9pbnRlcmZhY2VzL1dpZGdldEFwaUFjdGlvblwiKTtcblxuT2JqZWN0LmtleXMoX1dpZGdldEFwaUFjdGlvbikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgaWYgKGtleSBpbiBleHBvcnRzICYmIGV4cG9ydHNba2V5XSA9PT0gX1dpZGdldEFwaUFjdGlvbltrZXldKSByZXR1cm47XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF9XaWRnZXRBcGlBY3Rpb25ba2V5XTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbnZhciBfV2lkZ2V0QXBpRGlyZWN0aW9uID0gcmVxdWlyZShcIi4vaW50ZXJmYWNlcy9XaWRnZXRBcGlEaXJlY3Rpb25cIik7XG5cbk9iamVjdC5rZXlzKF9XaWRnZXRBcGlEaXJlY3Rpb24pLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICBpZiAoa2V5ID09PSBcImRlZmF1bHRcIiB8fCBrZXkgPT09IFwiX19lc01vZHVsZVwiKSByZXR1cm47XG4gIGlmIChrZXkgaW4gZXhwb3J0cyAmJiBleHBvcnRzW2tleV0gPT09IF9XaWRnZXRBcGlEaXJlY3Rpb25ba2V5XSkgcmV0dXJuO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfV2lkZ2V0QXBpRGlyZWN0aW9uW2tleV07XG4gICAgfVxuICB9KTtcbn0pO1xuXG52YXIgX0FwaVZlcnNpb24gPSByZXF1aXJlKFwiLi9pbnRlcmZhY2VzL0FwaVZlcnNpb25cIik7XG5cbk9iamVjdC5rZXlzKF9BcGlWZXJzaW9uKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBpZiAoa2V5IGluIGV4cG9ydHMgJiYgZXhwb3J0c1trZXldID09PSBfQXBpVmVyc2lvbltrZXldKSByZXR1cm47XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF9BcGlWZXJzaW9uW2tleV07XG4gICAgfVxuICB9KTtcbn0pO1xuXG52YXIgX0NhcGFiaWxpdGllcyA9IHJlcXVpcmUoXCIuL2ludGVyZmFjZXMvQ2FwYWJpbGl0aWVzXCIpO1xuXG5PYmplY3Qua2V5cyhfQ2FwYWJpbGl0aWVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBpZiAoa2V5IGluIGV4cG9ydHMgJiYgZXhwb3J0c1trZXldID09PSBfQ2FwYWJpbGl0aWVzW2tleV0pIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX0NhcGFiaWxpdGllc1trZXldO1xuICAgIH1cbiAgfSk7XG59KTtcblxudmFyIF9DYXBhYmlsaXRpZXNBY3Rpb24gPSByZXF1aXJlKFwiLi9pbnRlcmZhY2VzL0NhcGFiaWxpdGllc0FjdGlvblwiKTtcblxuT2JqZWN0LmtleXMoX0NhcGFiaWxpdGllc0FjdGlvbikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgaWYgKGtleSBpbiBleHBvcnRzICYmIGV4cG9ydHNba2V5XSA9PT0gX0NhcGFiaWxpdGllc0FjdGlvbltrZXldKSByZXR1cm47XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF9DYXBhYmlsaXRpZXNBY3Rpb25ba2V5XTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbnZhciBfQ29udGVudExvYWRlZEFjdGlvbiA9IHJlcXVpcmUoXCIuL2ludGVyZmFjZXMvQ29udGVudExvYWRlZEFjdGlvblwiKTtcblxuT2JqZWN0LmtleXMoX0NvbnRlbnRMb2FkZWRBY3Rpb24pLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICBpZiAoa2V5ID09PSBcImRlZmF1bHRcIiB8fCBrZXkgPT09IFwiX19lc01vZHVsZVwiKSByZXR1cm47XG4gIGlmIChrZXkgaW4gZXhwb3J0cyAmJiBleHBvcnRzW2tleV0gPT09IF9Db250ZW50TG9hZGVkQWN0aW9uW2tleV0pIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX0NvbnRlbnRMb2FkZWRBY3Rpb25ba2V5XTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbnZhciBfU2NyZWVuc2hvdEFjdGlvbiA9IHJlcXVpcmUoXCIuL2ludGVyZmFjZXMvU2NyZWVuc2hvdEFjdGlvblwiKTtcblxuT2JqZWN0LmtleXMoX1NjcmVlbnNob3RBY3Rpb24pLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICBpZiAoa2V5ID09PSBcImRlZmF1bHRcIiB8fCBrZXkgPT09IFwiX19lc01vZHVsZVwiKSByZXR1cm47XG4gIGlmIChrZXkgaW4gZXhwb3J0cyAmJiBleHBvcnRzW2tleV0gPT09IF9TY3JlZW5zaG90QWN0aW9uW2tleV0pIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX1NjcmVlbnNob3RBY3Rpb25ba2V5XTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbnZhciBfU3RpY2tlckFjdGlvbiA9IHJlcXVpcmUoXCIuL2ludGVyZmFjZXMvU3RpY2tlckFjdGlvblwiKTtcblxuT2JqZWN0LmtleXMoX1N0aWNrZXJBY3Rpb24pLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICBpZiAoa2V5ID09PSBcImRlZmF1bHRcIiB8fCBrZXkgPT09IFwiX19lc01vZHVsZVwiKSByZXR1cm47XG4gIGlmIChrZXkgaW4gZXhwb3J0cyAmJiBleHBvcnRzW2tleV0gPT09IF9TdGlja2VyQWN0aW9uW2tleV0pIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX1N0aWNrZXJBY3Rpb25ba2V5XTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbnZhciBfU3RpY2t5QWN0aW9uID0gcmVxdWlyZShcIi4vaW50ZXJmYWNlcy9TdGlja3lBY3Rpb25cIik7XG5cbk9iamVjdC5rZXlzKF9TdGlja3lBY3Rpb24pLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICBpZiAoa2V5ID09PSBcImRlZmF1bHRcIiB8fCBrZXkgPT09IFwiX19lc01vZHVsZVwiKSByZXR1cm47XG4gIGlmIChrZXkgaW4gZXhwb3J0cyAmJiBleHBvcnRzW2tleV0gPT09IF9TdGlja3lBY3Rpb25ba2V5XSkgcmV0dXJuO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfU3RpY2t5QWN0aW9uW2tleV07XG4gICAgfVxuICB9KTtcbn0pO1xuXG52YXIgX1N1cHBvcnRlZFZlcnNpb25zQWN0aW9uID0gcmVxdWlyZShcIi4vaW50ZXJmYWNlcy9TdXBwb3J0ZWRWZXJzaW9uc0FjdGlvblwiKTtcblxuT2JqZWN0LmtleXMoX1N1cHBvcnRlZFZlcnNpb25zQWN0aW9uKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBpZiAoa2V5IGluIGV4cG9ydHMgJiYgZXhwb3J0c1trZXldID09PSBfU3VwcG9ydGVkVmVyc2lvbnNBY3Rpb25ba2V5XSkgcmV0dXJuO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfU3VwcG9ydGVkVmVyc2lvbnNBY3Rpb25ba2V5XTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbnZhciBfVmlzaWJpbGl0eUFjdGlvbiA9IHJlcXVpcmUoXCIuL2ludGVyZmFjZXMvVmlzaWJpbGl0eUFjdGlvblwiKTtcblxuT2JqZWN0LmtleXMoX1Zpc2liaWxpdHlBY3Rpb24pLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICBpZiAoa2V5ID09PSBcImRlZmF1bHRcIiB8fCBrZXkgPT09IFwiX19lc01vZHVsZVwiKSByZXR1cm47XG4gIGlmIChrZXkgaW4gZXhwb3J0cyAmJiBleHBvcnRzW2tleV0gPT09IF9WaXNpYmlsaXR5QWN0aW9uW2tleV0pIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX1Zpc2liaWxpdHlBY3Rpb25ba2V5XTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbnZhciBfR2V0T3BlbklEQWN0aW9uID0gcmVxdWlyZShcIi4vaW50ZXJmYWNlcy9HZXRPcGVuSURBY3Rpb25cIik7XG5cbk9iamVjdC5rZXlzKF9HZXRPcGVuSURBY3Rpb24pLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICBpZiAoa2V5ID09PSBcImRlZmF1bHRcIiB8fCBrZXkgPT09IFwiX19lc01vZHVsZVwiKSByZXR1cm47XG4gIGlmIChrZXkgaW4gZXhwb3J0cyAmJiBleHBvcnRzW2tleV0gPT09IF9HZXRPcGVuSURBY3Rpb25ba2V5XSkgcmV0dXJuO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfR2V0T3BlbklEQWN0aW9uW2tleV07XG4gICAgfVxuICB9KTtcbn0pO1xuXG52YXIgX09wZW5JRENyZWRlbnRpYWxzQWN0aW9uID0gcmVxdWlyZShcIi4vaW50ZXJmYWNlcy9PcGVuSURDcmVkZW50aWFsc0FjdGlvblwiKTtcblxuT2JqZWN0LmtleXMoX09wZW5JRENyZWRlbnRpYWxzQWN0aW9uKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBpZiAoa2V5IGluIGV4cG9ydHMgJiYgZXhwb3J0c1trZXldID09PSBfT3BlbklEQ3JlZGVudGlhbHNBY3Rpb25ba2V5XSkgcmV0dXJuO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfT3BlbklEQ3JlZGVudGlhbHNBY3Rpb25ba2V5XTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbnZhciBfV2lkZ2V0S2luZCA9IHJlcXVpcmUoXCIuL2ludGVyZmFjZXMvV2lkZ2V0S2luZFwiKTtcblxuT2JqZWN0LmtleXMoX1dpZGdldEtpbmQpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICBpZiAoa2V5ID09PSBcImRlZmF1bHRcIiB8fCBrZXkgPT09IFwiX19lc01vZHVsZVwiKSByZXR1cm47XG4gIGlmIChrZXkgaW4gZXhwb3J0cyAmJiBleHBvcnRzW2tleV0gPT09IF9XaWRnZXRLaW5kW2tleV0pIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX1dpZGdldEtpbmRba2V5XTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbnZhciBfTW9kYWxCdXR0b25LaW5kID0gcmVxdWlyZShcIi4vaW50ZXJmYWNlcy9Nb2RhbEJ1dHRvbktpbmRcIik7XG5cbk9iamVjdC5rZXlzKF9Nb2RhbEJ1dHRvbktpbmQpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICBpZiAoa2V5ID09PSBcImRlZmF1bHRcIiB8fCBrZXkgPT09IFwiX19lc01vZHVsZVwiKSByZXR1cm47XG4gIGlmIChrZXkgaW4gZXhwb3J0cyAmJiBleHBvcnRzW2tleV0gPT09IF9Nb2RhbEJ1dHRvbktpbmRba2V5XSkgcmV0dXJuO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfTW9kYWxCdXR0b25LaW5kW2tleV07XG4gICAgfVxuICB9KTtcbn0pO1xuXG52YXIgX01vZGFsV2lkZ2V0QWN0aW9ucyA9IHJlcXVpcmUoXCIuL2ludGVyZmFjZXMvTW9kYWxXaWRnZXRBY3Rpb25zXCIpO1xuXG5PYmplY3Qua2V5cyhfTW9kYWxXaWRnZXRBY3Rpb25zKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBpZiAoa2V5IGluIGV4cG9ydHMgJiYgZXhwb3J0c1trZXldID09PSBfTW9kYWxXaWRnZXRBY3Rpb25zW2tleV0pIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX01vZGFsV2lkZ2V0QWN0aW9uc1trZXldO1xuICAgIH1cbiAgfSk7XG59KTtcblxudmFyIF9TZXRNb2RhbEJ1dHRvbkVuYWJsZWRBY3Rpb24gPSByZXF1aXJlKFwiLi9pbnRlcmZhY2VzL1NldE1vZGFsQnV0dG9uRW5hYmxlZEFjdGlvblwiKTtcblxuT2JqZWN0LmtleXMoX1NldE1vZGFsQnV0dG9uRW5hYmxlZEFjdGlvbikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgaWYgKGtleSBpbiBleHBvcnRzICYmIGV4cG9ydHNba2V5XSA9PT0gX1NldE1vZGFsQnV0dG9uRW5hYmxlZEFjdGlvbltrZXldKSByZXR1cm47XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF9TZXRNb2RhbEJ1dHRvbkVuYWJsZWRBY3Rpb25ba2V5XTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbnZhciBfV2lkZ2V0Q29uZmlnQWN0aW9uID0gcmVxdWlyZShcIi4vaW50ZXJmYWNlcy9XaWRnZXRDb25maWdBY3Rpb25cIik7XG5cbk9iamVjdC5rZXlzKF9XaWRnZXRDb25maWdBY3Rpb24pLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICBpZiAoa2V5ID09PSBcImRlZmF1bHRcIiB8fCBrZXkgPT09IFwiX19lc01vZHVsZVwiKSByZXR1cm47XG4gIGlmIChrZXkgaW4gZXhwb3J0cyAmJiBleHBvcnRzW2tleV0gPT09IF9XaWRnZXRDb25maWdBY3Rpb25ba2V5XSkgcmV0dXJuO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfV2lkZ2V0Q29uZmlnQWN0aW9uW2tleV07XG4gICAgfVxuICB9KTtcbn0pO1xuXG52YXIgX1NlbmRFdmVudEFjdGlvbiA9IHJlcXVpcmUoXCIuL2ludGVyZmFjZXMvU2VuZEV2ZW50QWN0aW9uXCIpO1xuXG5PYmplY3Qua2V5cyhfU2VuZEV2ZW50QWN0aW9uKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBpZiAoa2V5IGluIGV4cG9ydHMgJiYgZXhwb3J0c1trZXldID09PSBfU2VuZEV2ZW50QWN0aW9uW2tleV0pIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX1NlbmRFdmVudEFjdGlvbltrZXldO1xuICAgIH1cbiAgfSk7XG59KTtcblxudmFyIF9TZW5kVG9EZXZpY2VBY3Rpb24gPSByZXF1aXJlKFwiLi9pbnRlcmZhY2VzL1NlbmRUb0RldmljZUFjdGlvblwiKTtcblxuT2JqZWN0LmtleXMoX1NlbmRUb0RldmljZUFjdGlvbikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgaWYgKGtleSBpbiBleHBvcnRzICYmIGV4cG9ydHNba2V5XSA9PT0gX1NlbmRUb0RldmljZUFjdGlvbltrZXldKSByZXR1cm47XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF9TZW5kVG9EZXZpY2VBY3Rpb25ba2V5XTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbnZhciBfUmVhZEV2ZW50QWN0aW9uID0gcmVxdWlyZShcIi4vaW50ZXJmYWNlcy9SZWFkRXZlbnRBY3Rpb25cIik7XG5cbk9iamVjdC5rZXlzKF9SZWFkRXZlbnRBY3Rpb24pLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICBpZiAoa2V5ID09PSBcImRlZmF1bHRcIiB8fCBrZXkgPT09IFwiX19lc01vZHVsZVwiKSByZXR1cm47XG4gIGlmIChrZXkgaW4gZXhwb3J0cyAmJiBleHBvcnRzW2tleV0gPT09IF9SZWFkRXZlbnRBY3Rpb25ba2V5XSkgcmV0dXJuO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfUmVhZEV2ZW50QWN0aW9uW2tleV07XG4gICAgfVxuICB9KTtcbn0pO1xuXG52YXIgX0lSb29tRXZlbnQgPSByZXF1aXJlKFwiLi9pbnRlcmZhY2VzL0lSb29tRXZlbnRcIik7XG5cbk9iamVjdC5rZXlzKF9JUm9vbUV2ZW50KS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBpZiAoa2V5IGluIGV4cG9ydHMgJiYgZXhwb3J0c1trZXldID09PSBfSVJvb21FdmVudFtrZXldKSByZXR1cm47XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF9JUm9vbUV2ZW50W2tleV07XG4gICAgfVxuICB9KTtcbn0pO1xuXG52YXIgX05hdmlnYXRlQWN0aW9uID0gcmVxdWlyZShcIi4vaW50ZXJmYWNlcy9OYXZpZ2F0ZUFjdGlvblwiKTtcblxuT2JqZWN0LmtleXMoX05hdmlnYXRlQWN0aW9uKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBpZiAoa2V5IGluIGV4cG9ydHMgJiYgZXhwb3J0c1trZXldID09PSBfTmF2aWdhdGVBY3Rpb25ba2V5XSkgcmV0dXJuO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfTmF2aWdhdGVBY3Rpb25ba2V5XTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbnZhciBfVHVyblNlcnZlckFjdGlvbnMgPSByZXF1aXJlKFwiLi9pbnRlcmZhY2VzL1R1cm5TZXJ2ZXJBY3Rpb25zXCIpO1xuXG5PYmplY3Qua2V5cyhfVHVyblNlcnZlckFjdGlvbnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICBpZiAoa2V5ID09PSBcImRlZmF1bHRcIiB8fCBrZXkgPT09IFwiX19lc01vZHVsZVwiKSByZXR1cm47XG4gIGlmIChrZXkgaW4gZXhwb3J0cyAmJiBleHBvcnRzW2tleV0gPT09IF9UdXJuU2VydmVyQWN0aW9uc1trZXldKSByZXR1cm47XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF9UdXJuU2VydmVyQWN0aW9uc1trZXldO1xuICAgIH1cbiAgfSk7XG59KTtcblxudmFyIF9SZWFkUmVsYXRpb25zQWN0aW9uID0gcmVxdWlyZShcIi4vaW50ZXJmYWNlcy9SZWFkUmVsYXRpb25zQWN0aW9uXCIpO1xuXG5PYmplY3Qua2V5cyhfUmVhZFJlbGF0aW9uc0FjdGlvbikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgaWYgKGtleSBpbiBleHBvcnRzICYmIGV4cG9ydHNba2V5XSA9PT0gX1JlYWRSZWxhdGlvbnNBY3Rpb25ba2V5XSkgcmV0dXJuO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfUmVhZFJlbGF0aW9uc0FjdGlvbltrZXldO1xuICAgIH1cbiAgfSk7XG59KTtcblxudmFyIF9XaWRnZXRFdmVudENhcGFiaWxpdHkgPSByZXF1aXJlKFwiLi9tb2RlbHMvV2lkZ2V0RXZlbnRDYXBhYmlsaXR5XCIpO1xuXG5PYmplY3Qua2V5cyhfV2lkZ2V0RXZlbnRDYXBhYmlsaXR5KS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBpZiAoa2V5IGluIGV4cG9ydHMgJiYgZXhwb3J0c1trZXldID09PSBfV2lkZ2V0RXZlbnRDYXBhYmlsaXR5W2tleV0pIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX1dpZGdldEV2ZW50Q2FwYWJpbGl0eVtrZXldO1xuICAgIH1cbiAgfSk7XG59KTtcblxudmFyIF91cmwgPSByZXF1aXJlKFwiLi9tb2RlbHMvdmFsaWRhdGlvbi91cmxcIik7XG5cbk9iamVjdC5rZXlzKF91cmwpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICBpZiAoa2V5ID09PSBcImRlZmF1bHRcIiB8fCBrZXkgPT09IFwiX19lc01vZHVsZVwiKSByZXR1cm47XG4gIGlmIChrZXkgaW4gZXhwb3J0cyAmJiBleHBvcnRzW2tleV0gPT09IF91cmxba2V5XSkgcmV0dXJuO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfdXJsW2tleV07XG4gICAgfVxuICB9KTtcbn0pO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZShcIi4vbW9kZWxzL3ZhbGlkYXRpb24vdXRpbHNcIik7XG5cbk9iamVjdC5rZXlzKF91dGlscykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgaWYgKGtleSBpbiBleHBvcnRzICYmIGV4cG9ydHNba2V5XSA9PT0gX3V0aWxzW2tleV0pIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX3V0aWxzW2tleV07XG4gICAgfVxuICB9KTtcbn0pO1xuXG52YXIgX1dpZGdldCA9IHJlcXVpcmUoXCIuL21vZGVscy9XaWRnZXRcIik7XG5cbk9iamVjdC5rZXlzKF9XaWRnZXQpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICBpZiAoa2V5ID09PSBcImRlZmF1bHRcIiB8fCBrZXkgPT09IFwiX19lc01vZHVsZVwiKSByZXR1cm47XG4gIGlmIChrZXkgaW4gZXhwb3J0cyAmJiBleHBvcnRzW2tleV0gPT09IF9XaWRnZXRba2V5XSkgcmV0dXJuO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfV2lkZ2V0W2tleV07XG4gICAgfVxuICB9KTtcbn0pO1xuXG52YXIgX1dpZGdldFBhcnNlciA9IHJlcXVpcmUoXCIuL21vZGVscy9XaWRnZXRQYXJzZXJcIik7XG5cbk9iamVjdC5rZXlzKF9XaWRnZXRQYXJzZXIpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICBpZiAoa2V5ID09PSBcImRlZmF1bHRcIiB8fCBrZXkgPT09IFwiX19lc01vZHVsZVwiKSByZXR1cm47XG4gIGlmIChrZXkgaW4gZXhwb3J0cyAmJiBleHBvcnRzW2tleV0gPT09IF9XaWRnZXRQYXJzZXJba2V5XSkgcmV0dXJuO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfV2lkZ2V0UGFyc2VyW2tleV07XG4gICAgfVxuICB9KTtcbn0pO1xuXG52YXIgX3VybFRlbXBsYXRlID0gcmVxdWlyZShcIi4vdGVtcGxhdGluZy91cmwtdGVtcGxhdGVcIik7XG5cbk9iamVjdC5rZXlzKF91cmxUZW1wbGF0ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgaWYgKGtleSBpbiBleHBvcnRzICYmIGV4cG9ydHNba2V5XSA9PT0gX3VybFRlbXBsYXRlW2tleV0pIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX3VybFRlbXBsYXRlW2tleV07XG4gICAgfVxuICB9KTtcbn0pO1xuXG52YXIgX1NpbXBsZU9ic2VydmFibGUgPSByZXF1aXJlKFwiLi91dGlsL1NpbXBsZU9ic2VydmFibGVcIik7XG5cbk9iamVjdC5rZXlzKF9TaW1wbGVPYnNlcnZhYmxlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBpZiAoa2V5IGluIGV4cG9ydHMgJiYgZXhwb3J0c1trZXldID09PSBfU2ltcGxlT2JzZXJ2YWJsZVtrZXldKSByZXR1cm47XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF9TaW1wbGVPYnNlcnZhYmxlW2tleV07XG4gICAgfVxuICB9KTtcbn0pO1xuXG52YXIgX1dpZGdldERyaXZlciA9IHJlcXVpcmUoXCIuL2RyaXZlci9XaWRnZXREcml2ZXJcIik7XG5cbk9iamVjdC5rZXlzKF9XaWRnZXREcml2ZXIpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICBpZiAoa2V5ID09PSBcImRlZmF1bHRcIiB8fCBrZXkgPT09IFwiX19lc01vZHVsZVwiKSByZXR1cm47XG4gIGlmIChrZXkgaW4gZXhwb3J0cyAmJiBleHBvcnRzW2tleV0gPT09IF9XaWRnZXREcml2ZXJba2V5XSkgcmV0dXJuO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfV2lkZ2V0RHJpdmVyW2tleV07XG4gICAgfVxuICB9KTtcbn0pOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5VbnN0YWJsZUFwaVZlcnNpb24gPSBleHBvcnRzLk1hdHJpeEFwaVZlcnNpb24gPSBleHBvcnRzLkN1cnJlbnRBcGlWZXJzaW9ucyA9IHZvaWQgMDtcblxuLypcbiAqIENvcHlyaWdodCAyMDIwIFRoZSBNYXRyaXgub3JnIEZvdW5kYXRpb24gQy5JLkMuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xudmFyIE1hdHJpeEFwaVZlcnNpb247XG5leHBvcnRzLk1hdHJpeEFwaVZlcnNpb24gPSBNYXRyaXhBcGlWZXJzaW9uO1xuXG4oZnVuY3Rpb24gKE1hdHJpeEFwaVZlcnNpb24pIHtcbiAgTWF0cml4QXBpVmVyc2lvbltcIlByZXJlbGVhc2UxXCJdID0gXCIwLjAuMVwiO1xuICBNYXRyaXhBcGlWZXJzaW9uW1wiUHJlcmVsZWFzZTJcIl0gPSBcIjAuMC4yXCI7XG59KShNYXRyaXhBcGlWZXJzaW9uIHx8IChleHBvcnRzLk1hdHJpeEFwaVZlcnNpb24gPSBNYXRyaXhBcGlWZXJzaW9uID0ge30pKTtcblxudmFyIFVuc3RhYmxlQXBpVmVyc2lvbjtcbmV4cG9ydHMuVW5zdGFibGVBcGlWZXJzaW9uID0gVW5zdGFibGVBcGlWZXJzaW9uO1xuXG4oZnVuY3Rpb24gKFVuc3RhYmxlQXBpVmVyc2lvbikge1xuICBVbnN0YWJsZUFwaVZlcnNpb25bXCJNU0MyNzYyXCJdID0gXCJvcmcubWF0cml4Lm1zYzI3NjJcIjtcbiAgVW5zdGFibGVBcGlWZXJzaW9uW1wiTVNDMjg3MVwiXSA9IFwib3JnLm1hdHJpeC5tc2MyODcxXCI7XG4gIFVuc3RhYmxlQXBpVmVyc2lvbltcIk1TQzI5MzFcIl0gPSBcIm9yZy5tYXRyaXgubXNjMjkzMVwiO1xuICBVbnN0YWJsZUFwaVZlcnNpb25bXCJNU0MyOTc0XCJdID0gXCJvcmcubWF0cml4Lm1zYzI5NzRcIjtcbiAgVW5zdGFibGVBcGlWZXJzaW9uW1wiTVNDMjg3NlwiXSA9IFwib3JnLm1hdHJpeC5tc2MyODc2XCI7XG4gIFVuc3RhYmxlQXBpVmVyc2lvbltcIk1TQzM4MTlcIl0gPSBcIm9yZy5tYXRyaXgubXNjMzgxOVwiO1xuICBVbnN0YWJsZUFwaVZlcnNpb25bXCJNU0MzODQ2XCJdID0gXCJ0b3duLnJvYmluLm1zYzM4NDZcIjtcbiAgVW5zdGFibGVBcGlWZXJzaW9uW1wiTVNDMzg2OVwiXSA9IFwib3JnLm1hdHJpeC5tc2MzODY5XCI7XG59KShVbnN0YWJsZUFwaVZlcnNpb24gfHwgKGV4cG9ydHMuVW5zdGFibGVBcGlWZXJzaW9uID0gVW5zdGFibGVBcGlWZXJzaW9uID0ge30pKTtcblxudmFyIEN1cnJlbnRBcGlWZXJzaW9ucyA9IFtNYXRyaXhBcGlWZXJzaW9uLlByZXJlbGVhc2UxLCBNYXRyaXhBcGlWZXJzaW9uLlByZXJlbGVhc2UyLCAvL01hdHJpeEFwaVZlcnNpb24uVjAxMCxcblVuc3RhYmxlQXBpVmVyc2lvbi5NU0MyNzYyLCBVbnN0YWJsZUFwaVZlcnNpb24uTVNDMjg3MSwgVW5zdGFibGVBcGlWZXJzaW9uLk1TQzI5MzEsIFVuc3RhYmxlQXBpVmVyc2lvbi5NU0MyOTc0LCBVbnN0YWJsZUFwaVZlcnNpb24uTVNDMjg3NiwgVW5zdGFibGVBcGlWZXJzaW9uLk1TQzM4MTksIFVuc3RhYmxlQXBpVmVyc2lvbi5NU0MzODQ2LCBVbnN0YWJsZUFwaVZlcnNpb24uTVNDMzg2OV07XG5leHBvcnRzLkN1cnJlbnRBcGlWZXJzaW9ucyA9IEN1cnJlbnRBcGlWZXJzaW9uczsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuVmlkZW9Db25mZXJlbmNlQ2FwYWJpbGl0aWVzID0gZXhwb3J0cy5TdGlja2VycGlja2VyQ2FwYWJpbGl0aWVzID0gZXhwb3J0cy5NYXRyaXhDYXBhYmlsaXRpZXMgPSB2b2lkIDA7XG5leHBvcnRzLmdldFRpbWVsaW5lUm9vbUlERnJvbUNhcGFiaWxpdHkgPSBnZXRUaW1lbGluZVJvb21JREZyb21DYXBhYmlsaXR5O1xuZXhwb3J0cy5pc1RpbWVsaW5lQ2FwYWJpbGl0eSA9IGlzVGltZWxpbmVDYXBhYmlsaXR5O1xuZXhwb3J0cy5pc1RpbWVsaW5lQ2FwYWJpbGl0eUZvciA9IGlzVGltZWxpbmVDYXBhYmlsaXR5Rm9yO1xuXG4vKlxuICogQ29weXJpZ2h0IDIwMjAgLSAyMDIxIFRoZSBNYXRyaXgub3JnIEZvdW5kYXRpb24gQy5JLkMuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xudmFyIE1hdHJpeENhcGFiaWxpdGllcztcbmV4cG9ydHMuTWF0cml4Q2FwYWJpbGl0aWVzID0gTWF0cml4Q2FwYWJpbGl0aWVzO1xuXG4oZnVuY3Rpb24gKE1hdHJpeENhcGFiaWxpdGllcykge1xuICBNYXRyaXhDYXBhYmlsaXRpZXNbXCJTY3JlZW5zaG90c1wiXSA9IFwibS5jYXBhYmlsaXR5LnNjcmVlbnNob3RcIjtcbiAgTWF0cml4Q2FwYWJpbGl0aWVzW1wiU3RpY2tlclNlbmRpbmdcIl0gPSBcIm0uc3RpY2tlclwiO1xuICBNYXRyaXhDYXBhYmlsaXRpZXNbXCJBbHdheXNPblNjcmVlblwiXSA9IFwibS5hbHdheXNfb25fc2NyZWVuXCI7XG4gIE1hdHJpeENhcGFiaWxpdGllc1tcIlJlcXVpcmVzQ2xpZW50XCJdID0gXCJpby5lbGVtZW50LnJlcXVpcmVzX2NsaWVudFwiO1xuICBNYXRyaXhDYXBhYmlsaXRpZXNbXCJNU0MyOTMxTmF2aWdhdGVcIl0gPSBcIm9yZy5tYXRyaXgubXNjMjkzMS5uYXZpZ2F0ZVwiO1xuICBNYXRyaXhDYXBhYmlsaXRpZXNbXCJNU0MzODQ2VHVyblNlcnZlcnNcIl0gPSBcInRvd24ucm9iaW4ubXNjMzg0Ni50dXJuX3NlcnZlcnNcIjtcbn0pKE1hdHJpeENhcGFiaWxpdGllcyB8fCAoZXhwb3J0cy5NYXRyaXhDYXBhYmlsaXRpZXMgPSBNYXRyaXhDYXBhYmlsaXRpZXMgPSB7fSkpO1xuXG52YXIgU3RpY2tlcnBpY2tlckNhcGFiaWxpdGllcyA9IFtNYXRyaXhDYXBhYmlsaXRpZXMuU3RpY2tlclNlbmRpbmddO1xuZXhwb3J0cy5TdGlja2VycGlja2VyQ2FwYWJpbGl0aWVzID0gU3RpY2tlcnBpY2tlckNhcGFiaWxpdGllcztcbnZhciBWaWRlb0NvbmZlcmVuY2VDYXBhYmlsaXRpZXMgPSBbTWF0cml4Q2FwYWJpbGl0aWVzLkFsd2F5c09uU2NyZWVuXTtcbi8qKlxuICogRGV0ZXJtaW5lcyBpZiBhIGNhcGFiaWxpdHkgaXMgYSBjYXBhYmlsaXR5IGZvciBhIHRpbWVsaW5lLlxuICogQHBhcmFtIHtDYXBhYmlsaXR5fSBjYXBhYmlsaXR5IFRoZSBjYXBhYmlsaXR5IHRvIHRlc3QuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiBhIHRpbWVsaW5lIGNhcGFiaWxpdHksIGZhbHNlIG90aGVyd2lzZS5cbiAqL1xuXG5leHBvcnRzLlZpZGVvQ29uZmVyZW5jZUNhcGFiaWxpdGllcyA9IFZpZGVvQ29uZmVyZW5jZUNhcGFiaWxpdGllcztcblxuZnVuY3Rpb24gaXNUaW1lbGluZUNhcGFiaWxpdHkoY2FwYWJpbGl0eSkge1xuICAvLyBUT0RPOiBDaGFuZ2Ugd2hlbiBNU0MyNzYyIGJlY29tZXMgc3RhYmxlLlxuICByZXR1cm4gY2FwYWJpbGl0eSA9PT0gbnVsbCB8fCBjYXBhYmlsaXR5ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjYXBhYmlsaXR5LnN0YXJ0c1dpdGgoXCJvcmcubWF0cml4Lm1zYzI3NjIudGltZWxpbmU6XCIpO1xufVxuLyoqXG4gKiBEZXRlcm1pbmVzIGlmIGEgY2FwYWJpbGl0eSBpcyBhIHRpbWVsaW5lIGNhcGFiaWxpdHkgZm9yIHRoZSBnaXZlbiByb29tLlxuICogQHBhcmFtIHtDYXBhYmlsaXR5fSBjYXBhYmlsaXR5IFRoZSBjYXBhYmlsaXR5IHRvIHRlc3QuXG4gKiBAcGFyYW0ge3N0cmluZyB8IFN5bWJvbHMuQW55Um9vbX0gcm9vbUlkIFRoZSByb29tIElELCBvciBgU3ltYm9scy5BbnlSb29tYCBmb3IgdGhhdCBkZXNpZ25hdGlvbi5cbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIGEgbWF0Y2hpbmcgY2FwYWJpbGl0eSwgZmFsc2Ugb3RoZXJ3aXNlLlxuICovXG5cblxuZnVuY3Rpb24gaXNUaW1lbGluZUNhcGFiaWxpdHlGb3IoY2FwYWJpbGl0eSwgcm9vbUlkKSB7XG4gIHJldHVybiBjYXBhYmlsaXR5ID09PSBcIm9yZy5tYXRyaXgubXNjMjc2Mi50aW1lbGluZTpcIi5jb25jYXQocm9vbUlkKTtcbn1cbi8qKlxuICogR2V0cyB0aGUgcm9vbSBJRCBkZXNjcmliZWQgYnkgYSB0aW1lbGluZSBjYXBhYmlsaXR5LlxuICogQHBhcmFtIHtzdHJpbmd9IGNhcGFiaWxpdHkgVGhlIGNhcGFiaWxpdHkgdG8gcGFyc2UuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgcm9vbSBJRC5cbiAqL1xuXG5cbmZ1bmN0aW9uIGdldFRpbWVsaW5lUm9vbUlERnJvbUNhcGFiaWxpdHkoY2FwYWJpbGl0eSkge1xuICByZXR1cm4gY2FwYWJpbGl0eS5zdWJzdHJpbmcoY2FwYWJpbGl0eS5pbmRleE9mKFwiOlwiKSArIDEpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5PcGVuSURSZXF1ZXN0U3RhdGUgPSB2b2lkIDA7XG5cbi8qXG4gKiBDb3B5cmlnaHQgMjAyMCBUaGUgTWF0cml4Lm9yZyBGb3VuZGF0aW9uIEMuSS5DLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbnZhciBPcGVuSURSZXF1ZXN0U3RhdGU7XG5leHBvcnRzLk9wZW5JRFJlcXVlc3RTdGF0ZSA9IE9wZW5JRFJlcXVlc3RTdGF0ZTtcblxuKGZ1bmN0aW9uIChPcGVuSURSZXF1ZXN0U3RhdGUpIHtcbiAgT3BlbklEUmVxdWVzdFN0YXRlW1wiQWxsb3dlZFwiXSA9IFwiYWxsb3dlZFwiO1xuICBPcGVuSURSZXF1ZXN0U3RhdGVbXCJCbG9ja2VkXCJdID0gXCJibG9ja2VkXCI7XG4gIE9wZW5JRFJlcXVlc3RTdGF0ZVtcIlBlbmRpbmdVc2VyQ29uZmlybWF0aW9uXCJdID0gXCJyZXF1ZXN0XCI7XG59KShPcGVuSURSZXF1ZXN0U3RhdGUgfHwgKGV4cG9ydHMuT3BlbklEUmVxdWVzdFN0YXRlID0gT3BlbklEUmVxdWVzdFN0YXRlID0ge30pKTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuaXNFcnJvclJlc3BvbnNlID0gaXNFcnJvclJlc3BvbnNlO1xuXG4vKlxuICogQ29weXJpZ2h0IDIwMjAgVGhlIE1hdHJpeC5vcmcgRm91bmRhdGlvbiBDLkkuQy5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5mdW5jdGlvbiBpc0Vycm9yUmVzcG9uc2UocmVzcG9uc2VEYXRhKSB7XG4gIGlmIChcImVycm9yXCIgaW4gcmVzcG9uc2VEYXRhKSB7XG4gICAgdmFyIGVyciA9IHJlc3BvbnNlRGF0YTtcbiAgICByZXR1cm4gISFlcnIuZXJyb3IubWVzc2FnZTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuTW9kYWxCdXR0b25LaW5kID0gdm9pZCAwO1xuXG4vKlxuICogQ29weXJpZ2h0IDIwMjAgVGhlIE1hdHJpeC5vcmcgRm91bmRhdGlvbiBDLkkuQy5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG52YXIgTW9kYWxCdXR0b25LaW5kO1xuZXhwb3J0cy5Nb2RhbEJ1dHRvbktpbmQgPSBNb2RhbEJ1dHRvbktpbmQ7XG5cbihmdW5jdGlvbiAoTW9kYWxCdXR0b25LaW5kKSB7XG4gIE1vZGFsQnV0dG9uS2luZFtcIlByaW1hcnlcIl0gPSBcIm0ucHJpbWFyeVwiO1xuICBNb2RhbEJ1dHRvbktpbmRbXCJTZWNvbmRhcnlcIl0gPSBcIm0uc2Vjb25kYXJ5XCI7XG4gIE1vZGFsQnV0dG9uS2luZFtcIldhcm5pbmdcIl0gPSBcIm0ud2FybmluZ1wiO1xuICBNb2RhbEJ1dHRvbktpbmRbXCJEYW5nZXJcIl0gPSBcIm0uZGFuZ2VyXCI7XG4gIE1vZGFsQnV0dG9uS2luZFtcIkxpbmtcIl0gPSBcIm0ubGlua1wiO1xufSkoTW9kYWxCdXR0b25LaW5kIHx8IChleHBvcnRzLk1vZGFsQnV0dG9uS2luZCA9IE1vZGFsQnV0dG9uS2luZCA9IHt9KSk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLkJ1aWx0SW5Nb2RhbEJ1dHRvbklEID0gdm9pZCAwO1xuXG4vKlxuICogQ29weXJpZ2h0IDIwMjAgVGhlIE1hdHJpeC5vcmcgRm91bmRhdGlvbiBDLkkuQy5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG52YXIgQnVpbHRJbk1vZGFsQnV0dG9uSUQ7XG5leHBvcnRzLkJ1aWx0SW5Nb2RhbEJ1dHRvbklEID0gQnVpbHRJbk1vZGFsQnV0dG9uSUQ7XG5cbihmdW5jdGlvbiAoQnVpbHRJbk1vZGFsQnV0dG9uSUQpIHtcbiAgQnVpbHRJbk1vZGFsQnV0dG9uSURbXCJDbG9zZVwiXSA9IFwibS5jbG9zZVwiO1xufSkoQnVpbHRJbk1vZGFsQnV0dG9uSUQgfHwgKGV4cG9ydHMuQnVpbHRJbk1vZGFsQnV0dG9uSUQgPSBCdWlsdEluTW9kYWxCdXR0b25JRCA9IHt9KSk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLldpZGdldEFwaVRvV2lkZ2V0QWN0aW9uID0gZXhwb3J0cy5XaWRnZXRBcGlGcm9tV2lkZ2V0QWN0aW9uID0gdm9pZCAwO1xuXG4vKlxuICogQ29weXJpZ2h0IDIwMjAgVGhlIE1hdHJpeC5vcmcgRm91bmRhdGlvbiBDLkkuQy5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG52YXIgV2lkZ2V0QXBpVG9XaWRnZXRBY3Rpb247XG5leHBvcnRzLldpZGdldEFwaVRvV2lkZ2V0QWN0aW9uID0gV2lkZ2V0QXBpVG9XaWRnZXRBY3Rpb247XG5cbihmdW5jdGlvbiAoV2lkZ2V0QXBpVG9XaWRnZXRBY3Rpb24pIHtcbiAgV2lkZ2V0QXBpVG9XaWRnZXRBY3Rpb25bXCJTdXBwb3J0ZWRBcGlWZXJzaW9uc1wiXSA9IFwic3VwcG9ydGVkX2FwaV92ZXJzaW9uc1wiO1xuICBXaWRnZXRBcGlUb1dpZGdldEFjdGlvbltcIkNhcGFiaWxpdGllc1wiXSA9IFwiY2FwYWJpbGl0aWVzXCI7XG4gIFdpZGdldEFwaVRvV2lkZ2V0QWN0aW9uW1wiTm90aWZ5Q2FwYWJpbGl0aWVzXCJdID0gXCJub3RpZnlfY2FwYWJpbGl0aWVzXCI7XG4gIFdpZGdldEFwaVRvV2lkZ2V0QWN0aW9uW1wiVGFrZVNjcmVlbnNob3RcIl0gPSBcInNjcmVlbnNob3RcIjtcbiAgV2lkZ2V0QXBpVG9XaWRnZXRBY3Rpb25bXCJVcGRhdGVWaXNpYmlsaXR5XCJdID0gXCJ2aXNpYmlsaXR5XCI7XG4gIFdpZGdldEFwaVRvV2lkZ2V0QWN0aW9uW1wiT3BlbklEQ3JlZGVudGlhbHNcIl0gPSBcIm9wZW5pZF9jcmVkZW50aWFsc1wiO1xuICBXaWRnZXRBcGlUb1dpZGdldEFjdGlvbltcIldpZGdldENvbmZpZ1wiXSA9IFwid2lkZ2V0X2NvbmZpZ1wiO1xuICBXaWRnZXRBcGlUb1dpZGdldEFjdGlvbltcIkNsb3NlTW9kYWxXaWRnZXRcIl0gPSBcImNsb3NlX21vZGFsXCI7XG4gIFdpZGdldEFwaVRvV2lkZ2V0QWN0aW9uW1wiQnV0dG9uQ2xpY2tlZFwiXSA9IFwiYnV0dG9uX2NsaWNrZWRcIjtcbiAgV2lkZ2V0QXBpVG9XaWRnZXRBY3Rpb25bXCJTZW5kRXZlbnRcIl0gPSBcInNlbmRfZXZlbnRcIjtcbiAgV2lkZ2V0QXBpVG9XaWRnZXRBY3Rpb25bXCJTZW5kVG9EZXZpY2VcIl0gPSBcInNlbmRfdG9fZGV2aWNlXCI7XG4gIFdpZGdldEFwaVRvV2lkZ2V0QWN0aW9uW1wiVXBkYXRlVHVyblNlcnZlcnNcIl0gPSBcInVwZGF0ZV90dXJuX3NlcnZlcnNcIjtcbn0pKFdpZGdldEFwaVRvV2lkZ2V0QWN0aW9uIHx8IChleHBvcnRzLldpZGdldEFwaVRvV2lkZ2V0QWN0aW9uID0gV2lkZ2V0QXBpVG9XaWRnZXRBY3Rpb24gPSB7fSkpO1xuXG52YXIgV2lkZ2V0QXBpRnJvbVdpZGdldEFjdGlvbjtcbmV4cG9ydHMuV2lkZ2V0QXBpRnJvbVdpZGdldEFjdGlvbiA9IFdpZGdldEFwaUZyb21XaWRnZXRBY3Rpb247XG5cbihmdW5jdGlvbiAoV2lkZ2V0QXBpRnJvbVdpZGdldEFjdGlvbikge1xuICBXaWRnZXRBcGlGcm9tV2lkZ2V0QWN0aW9uW1wiU3VwcG9ydGVkQXBpVmVyc2lvbnNcIl0gPSBcInN1cHBvcnRlZF9hcGlfdmVyc2lvbnNcIjtcbiAgV2lkZ2V0QXBpRnJvbVdpZGdldEFjdGlvbltcIkNvbnRlbnRMb2FkZWRcIl0gPSBcImNvbnRlbnRfbG9hZGVkXCI7XG4gIFdpZGdldEFwaUZyb21XaWRnZXRBY3Rpb25bXCJTZW5kU3RpY2tlclwiXSA9IFwibS5zdGlja2VyXCI7XG4gIFdpZGdldEFwaUZyb21XaWRnZXRBY3Rpb25bXCJVcGRhdGVBbHdheXNPblNjcmVlblwiXSA9IFwic2V0X2Fsd2F5c19vbl9zY3JlZW5cIjtcbiAgV2lkZ2V0QXBpRnJvbVdpZGdldEFjdGlvbltcIkdldE9wZW5JRENyZWRlbnRpYWxzXCJdID0gXCJnZXRfb3BlbmlkXCI7XG4gIFdpZGdldEFwaUZyb21XaWRnZXRBY3Rpb25bXCJDbG9zZU1vZGFsV2lkZ2V0XCJdID0gXCJjbG9zZV9tb2RhbFwiO1xuICBXaWRnZXRBcGlGcm9tV2lkZ2V0QWN0aW9uW1wiT3Blbk1vZGFsV2lkZ2V0XCJdID0gXCJvcGVuX21vZGFsXCI7XG4gIFdpZGdldEFwaUZyb21XaWRnZXRBY3Rpb25bXCJTZXRNb2RhbEJ1dHRvbkVuYWJsZWRcIl0gPSBcInNldF9idXR0b25fZW5hYmxlZFwiO1xuICBXaWRnZXRBcGlGcm9tV2lkZ2V0QWN0aW9uW1wiU2VuZEV2ZW50XCJdID0gXCJzZW5kX2V2ZW50XCI7XG4gIFdpZGdldEFwaUZyb21XaWRnZXRBY3Rpb25bXCJTZW5kVG9EZXZpY2VcIl0gPSBcInNlbmRfdG9fZGV2aWNlXCI7XG4gIFdpZGdldEFwaUZyb21XaWRnZXRBY3Rpb25bXCJXYXRjaFR1cm5TZXJ2ZXJzXCJdID0gXCJ3YXRjaF90dXJuX3NlcnZlcnNcIjtcbiAgV2lkZ2V0QXBpRnJvbVdpZGdldEFjdGlvbltcIlVud2F0Y2hUdXJuU2VydmVyc1wiXSA9IFwidW53YXRjaF90dXJuX3NlcnZlcnNcIjtcbiAgV2lkZ2V0QXBpRnJvbVdpZGdldEFjdGlvbltcIk1TQzI4NzZSZWFkRXZlbnRzXCJdID0gXCJvcmcubWF0cml4Lm1zYzI4NzYucmVhZF9ldmVudHNcIjtcbiAgV2lkZ2V0QXBpRnJvbVdpZGdldEFjdGlvbltcIk1TQzI5MzFOYXZpZ2F0ZVwiXSA9IFwib3JnLm1hdHJpeC5tc2MyOTMxLm5hdmlnYXRlXCI7XG4gIFdpZGdldEFwaUZyb21XaWRnZXRBY3Rpb25bXCJNU0MyOTc0UmVuZWdvdGlhdGVDYXBhYmlsaXRpZXNcIl0gPSBcIm9yZy5tYXRyaXgubXNjMjk3NC5yZXF1ZXN0X2NhcGFiaWxpdGllc1wiO1xuICBXaWRnZXRBcGlGcm9tV2lkZ2V0QWN0aW9uW1wiTVNDMzg2OVJlYWRSZWxhdGlvbnNcIl0gPSBcIm9yZy5tYXRyaXgubXNjMzg2OS5yZWFkX3JlbGF0aW9uc1wiO1xufSkoV2lkZ2V0QXBpRnJvbVdpZGdldEFjdGlvbiB8fCAoZXhwb3J0cy5XaWRnZXRBcGlGcm9tV2lkZ2V0QWN0aW9uID0gV2lkZ2V0QXBpRnJvbVdpZGdldEFjdGlvbiA9IHt9KSk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLldpZGdldEFwaURpcmVjdGlvbiA9IHZvaWQgMDtcbmV4cG9ydHMuaW52ZXJ0ZWREaXJlY3Rpb24gPSBpbnZlcnRlZERpcmVjdGlvbjtcblxuLypcbiAqIENvcHlyaWdodCAyMDIwIFRoZSBNYXRyaXgub3JnIEZvdW5kYXRpb24gQy5JLkMuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xudmFyIFdpZGdldEFwaURpcmVjdGlvbjtcbmV4cG9ydHMuV2lkZ2V0QXBpRGlyZWN0aW9uID0gV2lkZ2V0QXBpRGlyZWN0aW9uO1xuXG4oZnVuY3Rpb24gKFdpZGdldEFwaURpcmVjdGlvbikge1xuICBXaWRnZXRBcGlEaXJlY3Rpb25bXCJUb1dpZGdldFwiXSA9IFwidG9XaWRnZXRcIjtcbiAgV2lkZ2V0QXBpRGlyZWN0aW9uW1wiRnJvbVdpZGdldFwiXSA9IFwiZnJvbVdpZGdldFwiO1xufSkoV2lkZ2V0QXBpRGlyZWN0aW9uIHx8IChleHBvcnRzLldpZGdldEFwaURpcmVjdGlvbiA9IFdpZGdldEFwaURpcmVjdGlvbiA9IHt9KSk7XG5cbmZ1bmN0aW9uIGludmVydGVkRGlyZWN0aW9uKGRpcikge1xuICBpZiAoZGlyID09PSBXaWRnZXRBcGlEaXJlY3Rpb24uVG9XaWRnZXQpIHtcbiAgICByZXR1cm4gV2lkZ2V0QXBpRGlyZWN0aW9uLkZyb21XaWRnZXQ7XG4gIH0gZWxzZSBpZiAoZGlyID09PSBXaWRnZXRBcGlEaXJlY3Rpb24uRnJvbVdpZGdldCkge1xuICAgIHJldHVybiBXaWRnZXRBcGlEaXJlY3Rpb24uVG9XaWRnZXQ7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBkaXJlY3Rpb25cIik7XG4gIH1cbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuV2lkZ2V0S2luZCA9IHZvaWQgMDtcblxuLypcbiAqIENvcHlyaWdodCAyMDIwIFRoZSBNYXRyaXgub3JnIEZvdW5kYXRpb24gQy5JLkMuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xudmFyIFdpZGdldEtpbmQ7XG5leHBvcnRzLldpZGdldEtpbmQgPSBXaWRnZXRLaW5kO1xuXG4oZnVuY3Rpb24gKFdpZGdldEtpbmQpIHtcbiAgV2lkZ2V0S2luZFtcIlJvb21cIl0gPSBcInJvb21cIjtcbiAgV2lkZ2V0S2luZFtcIkFjY291bnRcIl0gPSBcImFjY291bnRcIjtcbiAgV2lkZ2V0S2luZFtcIk1vZGFsXCJdID0gXCJtb2RhbFwiO1xufSkoV2lkZ2V0S2luZCB8fCAoZXhwb3J0cy5XaWRnZXRLaW5kID0gV2lkZ2V0S2luZCA9IHt9KSk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLk1hdHJpeFdpZGdldFR5cGUgPSB2b2lkIDA7XG5cbi8qXG4gKiBDb3B5cmlnaHQgMjAyMCBUaGUgTWF0cml4Lm9yZyBGb3VuZGF0aW9uIEMuSS5DLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbnZhciBNYXRyaXhXaWRnZXRUeXBlO1xuZXhwb3J0cy5NYXRyaXhXaWRnZXRUeXBlID0gTWF0cml4V2lkZ2V0VHlwZTtcblxuKGZ1bmN0aW9uIChNYXRyaXhXaWRnZXRUeXBlKSB7XG4gIE1hdHJpeFdpZGdldFR5cGVbXCJDdXN0b21cIl0gPSBcIm0uY3VzdG9tXCI7XG4gIE1hdHJpeFdpZGdldFR5cGVbXCJKaXRzaU1lZXRcIl0gPSBcIm0uaml0c2lcIjtcbiAgTWF0cml4V2lkZ2V0VHlwZVtcIlN0aWNrZXJwaWNrZXJcIl0gPSBcIm0uc3RpY2tlcnBpY2tlclwiO1xufSkoTWF0cml4V2lkZ2V0VHlwZSB8fCAoZXhwb3J0cy5NYXRyaXhXaWRnZXRUeXBlID0gTWF0cml4V2lkZ2V0VHlwZSA9IHt9KSk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLldpZGdldCA9IHZvaWQgMDtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoXCIuL3ZhbGlkYXRpb24vdXRpbHNcIik7XG5cbnZhciBfID0gcmVxdWlyZShcIi4uXCIpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbi8qKlxuICogUmVwcmVzZW50cyB0aGUgYmFyZXN0IGZvcm0gb2Ygd2lkZ2V0LlxuICovXG52YXIgV2lkZ2V0ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gV2lkZ2V0KGRlZmluaXRpb24pIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgV2lkZ2V0KTtcblxuICAgIHRoaXMuZGVmaW5pdGlvbiA9IGRlZmluaXRpb247XG4gICAgaWYgKCF0aGlzLmRlZmluaXRpb24pIHRocm93IG5ldyBFcnJvcihcIkRlZmluaXRpb24gaXMgcmVxdWlyZWRcIik7XG4gICAgKDAsIF91dGlscy5hc3NlcnRQcmVzZW50KShkZWZpbml0aW9uLCBcImlkXCIpO1xuICAgICgwLCBfdXRpbHMuYXNzZXJ0UHJlc2VudCkoZGVmaW5pdGlvbiwgXCJjcmVhdG9yVXNlcklkXCIpO1xuICAgICgwLCBfdXRpbHMuYXNzZXJ0UHJlc2VudCkoZGVmaW5pdGlvbiwgXCJ0eXBlXCIpO1xuICAgICgwLCBfdXRpbHMuYXNzZXJ0UHJlc2VudCkoZGVmaW5pdGlvbiwgXCJ1cmxcIik7XG4gIH1cbiAgLyoqXG4gICAqIFRoZSB1c2VyIElEIHdobyBjcmVhdGVkIHRoZSB3aWRnZXQuXG4gICAqL1xuXG5cbiAgX2NyZWF0ZUNsYXNzKFdpZGdldCwgW3tcbiAgICBrZXk6IFwiY3JlYXRvclVzZXJJZFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuZGVmaW5pdGlvbi5jcmVhdG9yVXNlcklkO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUaGUgdHlwZSBvZiB3aWRnZXQuXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJ0eXBlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5kZWZpbml0aW9uLnR5cGU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRoZSBJRCBvZiB0aGUgd2lkZ2V0LlxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiaWRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmRlZmluaXRpb24uaWQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRoZSBuYW1lIG9mIHRoZSB3aWRnZXQsIG9yIG51bGwgaWYgbm90IHNldC5cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIm5hbWVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmRlZmluaXRpb24ubmFtZSB8fCBudWxsO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUaGUgdGl0bGUgZm9yIHRoZSB3aWRnZXQsIG9yIG51bGwgaWYgbm90IHNldC5cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInRpdGxlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5yYXdEYXRhLnRpdGxlIHx8IG51bGw7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRoZSB0ZW1wbGF0ZWQgVVJMIGZvciB0aGUgd2lkZ2V0LlxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwidGVtcGxhdGVVcmxcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmRlZmluaXRpb24udXJsO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUaGUgb3JpZ2luIGZvciB0aGlzIHdpZGdldC5cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIm9yaWdpblwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIG5ldyBVUkwodGhpcy50ZW1wbGF0ZVVybCkub3JpZ2luO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIG9yIG5vdCB0aGUgY2xpZW50IHNob3VsZCB3YWl0IGZvciB0aGUgaWZyYW1lIHRvIGxvYWQuIERlZmF1bHRzXG4gICAgICogdG8gdHJ1ZS5cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIndhaXRGb3JJZnJhbWVMb2FkXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICBpZiAodGhpcy5kZWZpbml0aW9uLndhaXRGb3JJZnJhbWVMb2FkID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xuICAgICAgaWYgKHRoaXMuZGVmaW5pdGlvbi53YWl0Rm9ySWZyYW1lTG9hZCA9PT0gdHJ1ZSkgcmV0dXJuIHRydWU7XG4gICAgICByZXR1cm4gdHJ1ZTsgLy8gZGVmYXVsdCB0cnVlXG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRoZSByYXcgZGF0YSBmb3IgdGhlIHdpZGdldC4gVGhpcyB3aWxsIGFsd2F5cyBiZSBkZWZpbmVkLCB0aG91Z2hcbiAgICAgKiBtYXkgYmUgZW1wdHkuXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJyYXdEYXRhXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5kZWZpbml0aW9uLmRhdGEgfHwge307XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldHMgYSBjb21wbGV0ZSB3aWRnZXQgVVJMIGZvciB0aGUgY2xpZW50IHRvIHJlbmRlci5cbiAgICAgKiBAcGFyYW0ge0lUZW1wbGF0ZVBhcmFtc30gcGFyYW1zIFRoZSB0ZW1wbGF0ZSBwYXJhbWV0ZXJzLlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IEEgdGVtcGxhdGVkIFVSTC5cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImdldENvbXBsZXRlVXJsXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldENvbXBsZXRlVXJsKHBhcmFtcykge1xuICAgICAgcmV0dXJuICgwLCBfLnJ1blRlbXBsYXRlKSh0aGlzLnRlbXBsYXRlVXJsLCB0aGlzLmRlZmluaXRpb24sIHBhcmFtcyk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFdpZGdldDtcbn0oKTtcblxuZXhwb3J0cy5XaWRnZXQgPSBXaWRnZXQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLldpZGdldEV2ZW50Q2FwYWJpbGl0eSA9IGV4cG9ydHMuRXZlbnRLaW5kID0gZXhwb3J0cy5FdmVudERpcmVjdGlvbiA9IHZvaWQgMDtcblxuZnVuY3Rpb24gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIobywgYWxsb3dBcnJheUxpa2UpIHsgdmFyIGl0ID0gdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0gfHwgb1tcIkBAaXRlcmF0b3JcIl07IGlmICghaXQpIHsgaWYgKEFycmF5LmlzQXJyYXkobykgfHwgKGl0ID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8pKSB8fCBhbGxvd0FycmF5TGlrZSAmJiBvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgeyBpZiAoaXQpIG8gPSBpdDsgdmFyIGkgPSAwOyB2YXIgRiA9IGZ1bmN0aW9uIEYoKSB7fTsgcmV0dXJuIHsgczogRiwgbjogZnVuY3Rpb24gbigpIHsgaWYgKGkgPj0gby5sZW5ndGgpIHJldHVybiB7IGRvbmU6IHRydWUgfTsgcmV0dXJuIHsgZG9uZTogZmFsc2UsIHZhbHVlOiBvW2krK10gfTsgfSwgZTogZnVuY3Rpb24gZShfZSkgeyB0aHJvdyBfZTsgfSwgZjogRiB9OyB9IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gaXRlcmF0ZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfSB2YXIgbm9ybWFsQ29tcGxldGlvbiA9IHRydWUsIGRpZEVyciA9IGZhbHNlLCBlcnI7IHJldHVybiB7IHM6IGZ1bmN0aW9uIHMoKSB7IGl0ID0gaXQuY2FsbChvKTsgfSwgbjogZnVuY3Rpb24gbigpIHsgdmFyIHN0ZXAgPSBpdC5uZXh0KCk7IG5vcm1hbENvbXBsZXRpb24gPSBzdGVwLmRvbmU7IHJldHVybiBzdGVwOyB9LCBlOiBmdW5jdGlvbiBlKF9lMikgeyBkaWRFcnIgPSB0cnVlOyBlcnIgPSBfZTI7IH0sIGY6IGZ1bmN0aW9uIGYoKSB7IHRyeSB7IGlmICghbm9ybWFsQ29tcGxldGlvbiAmJiBpdFtcInJldHVyblwiXSAhPSBudWxsKSBpdFtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoZGlkRXJyKSB0aHJvdyBlcnI7IH0gfSB9OyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG4vKlxuICogQ29weXJpZ2h0IDIwMjAgVGhlIE1hdHJpeC5vcmcgRm91bmRhdGlvbiBDLkkuQy5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG52YXIgRXZlbnRLaW5kO1xuZXhwb3J0cy5FdmVudEtpbmQgPSBFdmVudEtpbmQ7XG5cbihmdW5jdGlvbiAoRXZlbnRLaW5kKSB7XG4gIEV2ZW50S2luZFtcIkV2ZW50XCJdID0gXCJldmVudFwiO1xuICBFdmVudEtpbmRbXCJTdGF0ZVwiXSA9IFwic3RhdGVfZXZlbnRcIjtcbiAgRXZlbnRLaW5kW1wiVG9EZXZpY2VcIl0gPSBcInRvX2RldmljZVwiO1xufSkoRXZlbnRLaW5kIHx8IChleHBvcnRzLkV2ZW50S2luZCA9IEV2ZW50S2luZCA9IHt9KSk7XG5cbnZhciBFdmVudERpcmVjdGlvbjtcbmV4cG9ydHMuRXZlbnREaXJlY3Rpb24gPSBFdmVudERpcmVjdGlvbjtcblxuKGZ1bmN0aW9uIChFdmVudERpcmVjdGlvbikge1xuICBFdmVudERpcmVjdGlvbltcIlNlbmRcIl0gPSBcInNlbmRcIjtcbiAgRXZlbnREaXJlY3Rpb25bXCJSZWNlaXZlXCJdID0gXCJyZWNlaXZlXCI7XG59KShFdmVudERpcmVjdGlvbiB8fCAoZXhwb3J0cy5FdmVudERpcmVjdGlvbiA9IEV2ZW50RGlyZWN0aW9uID0ge30pKTtcblxudmFyIFdpZGdldEV2ZW50Q2FwYWJpbGl0eSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFdpZGdldEV2ZW50Q2FwYWJpbGl0eShkaXJlY3Rpb24sIGV2ZW50VHlwZSwga2luZCwga2V5U3RyLCByYXcpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgV2lkZ2V0RXZlbnRDYXBhYmlsaXR5KTtcblxuICAgIHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xuICAgIHRoaXMuZXZlbnRUeXBlID0gZXZlbnRUeXBlO1xuICAgIHRoaXMua2luZCA9IGtpbmQ7XG4gICAgdGhpcy5rZXlTdHIgPSBrZXlTdHI7XG4gICAgdGhpcy5yYXcgPSByYXc7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoV2lkZ2V0RXZlbnRDYXBhYmlsaXR5LCBbe1xuICAgIGtleTogXCJtYXRjaGVzQXNTdGF0ZUV2ZW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG1hdGNoZXNBc1N0YXRlRXZlbnQoZGlyZWN0aW9uLCBldmVudFR5cGUsIHN0YXRlS2V5KSB7XG4gICAgICBpZiAodGhpcy5raW5kICE9PSBFdmVudEtpbmQuU3RhdGUpIHJldHVybiBmYWxzZTsgLy8gbm90IGEgc3RhdGUgZXZlbnRcblxuICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uICE9PSBkaXJlY3Rpb24pIHJldHVybiBmYWxzZTsgLy8gZGlyZWN0aW9uIG1pc21hdGNoXG5cbiAgICAgIGlmICh0aGlzLmV2ZW50VHlwZSAhPT0gZXZlbnRUeXBlKSByZXR1cm4gZmFsc2U7IC8vIGV2ZW50IHR5cGUgbWlzbWF0Y2hcblxuICAgICAgaWYgKHRoaXMua2V5U3RyID09PSBudWxsKSByZXR1cm4gdHJ1ZTsgLy8gYWxsIHN0YXRlIGtleXMgYXJlIGFsbG93ZWRcblxuICAgICAgaWYgKHRoaXMua2V5U3RyID09PSBzdGF0ZUtleSkgcmV0dXJuIHRydWU7IC8vIHRoaXMgc3RhdGUga2V5IGlzIGFsbG93ZWRcbiAgICAgIC8vIERlZmF1bHQgbm90IGFsbG93ZWRcblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJtYXRjaGVzQXNUb0RldmljZUV2ZW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG1hdGNoZXNBc1RvRGV2aWNlRXZlbnQoZGlyZWN0aW9uLCBldmVudFR5cGUpIHtcbiAgICAgIGlmICh0aGlzLmtpbmQgIT09IEV2ZW50S2luZC5Ub0RldmljZSkgcmV0dXJuIGZhbHNlOyAvLyBub3QgYSB0by1kZXZpY2UgZXZlbnRcblxuICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uICE9PSBkaXJlY3Rpb24pIHJldHVybiBmYWxzZTsgLy8gZGlyZWN0aW9uIG1pc21hdGNoXG5cbiAgICAgIGlmICh0aGlzLmV2ZW50VHlwZSAhPT0gZXZlbnRUeXBlKSByZXR1cm4gZmFsc2U7IC8vIGV2ZW50IHR5cGUgbWlzbWF0Y2hcbiAgICAgIC8vIENoZWNrcyBwYXNzZWQsIHRoZSBldmVudCBpcyBhbGxvd2VkXG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJtYXRjaGVzQXNSb29tRXZlbnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbWF0Y2hlc0FzUm9vbUV2ZW50KGRpcmVjdGlvbiwgZXZlbnRUeXBlKSB7XG4gICAgICB2YXIgbXNndHlwZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogbnVsbDtcbiAgICAgIGlmICh0aGlzLmtpbmQgIT09IEV2ZW50S2luZC5FdmVudCkgcmV0dXJuIGZhbHNlOyAvLyBub3QgYSByb29tIGV2ZW50XG5cbiAgICAgIGlmICh0aGlzLmRpcmVjdGlvbiAhPT0gZGlyZWN0aW9uKSByZXR1cm4gZmFsc2U7IC8vIGRpcmVjdGlvbiBtaXNtYXRjaFxuXG4gICAgICBpZiAodGhpcy5ldmVudFR5cGUgIT09IGV2ZW50VHlwZSkgcmV0dXJuIGZhbHNlOyAvLyBldmVudCB0eXBlIG1pc21hdGNoXG5cbiAgICAgIGlmICh0aGlzLmV2ZW50VHlwZSA9PT0gXCJtLnJvb20ubWVzc2FnZVwiKSB7XG4gICAgICAgIGlmICh0aGlzLmtleVN0ciA9PT0gbnVsbCkgcmV0dXJuIHRydWU7IC8vIGFsbCBtZXNzYWdlIHR5cGVzIGFyZSBhbGxvd2VkXG5cbiAgICAgICAgaWYgKHRoaXMua2V5U3RyID09PSBtc2d0eXBlKSByZXR1cm4gdHJ1ZTsgLy8gdGhpcyBtZXNzYWdlIHR5cGUgaXMgYWxsb3dlZFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRydWU7IC8vIGFscmVhZHkgcGFzc2VkIHRoZSBjaGVjayBmb3IgaWYgdGhlIGV2ZW50IGlzIGFsbG93ZWRcbiAgICAgIH0gLy8gRGVmYXVsdCBub3QgYWxsb3dlZFxuXG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1dLCBbe1xuICAgIGtleTogXCJmb3JTdGF0ZUV2ZW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGZvclN0YXRlRXZlbnQoZGlyZWN0aW9uLCBldmVudFR5cGUsIHN0YXRlS2V5KSB7XG4gICAgICAvLyBUT0RPOiBFbmFibGUgc3VwcG9ydCBmb3IgbS4qIG5hbWVzcGFjZSBvbmNlIHRoZSBNU0MgbGFuZHMuXG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vbWF0cml4LW9yZy9tYXRyaXgtd2lkZ2V0LWFwaS9pc3N1ZXMvMjJcbiAgICAgIGV2ZW50VHlwZSA9IGV2ZW50VHlwZS5yZXBsYWNlKC8jL2csICdcXFxcIycpO1xuICAgICAgc3RhdGVLZXkgPSBzdGF0ZUtleSAhPT0gbnVsbCAmJiBzdGF0ZUtleSAhPT0gdW5kZWZpbmVkID8gXCIjXCIuY29uY2F0KHN0YXRlS2V5KSA6ICcnO1xuICAgICAgdmFyIHN0ciA9IFwib3JnLm1hdHJpeC5tc2MyNzYyLlwiLmNvbmNhdChkaXJlY3Rpb24sIFwiLnN0YXRlX2V2ZW50OlwiKS5jb25jYXQoZXZlbnRUeXBlKS5jb25jYXQoc3RhdGVLZXkpOyAvLyBjaGVhdCBieSBzZW5kaW5nIGl0IHRocm91Z2ggdGhlIHByb2Nlc3NvclxuXG4gICAgICByZXR1cm4gV2lkZ2V0RXZlbnRDYXBhYmlsaXR5LmZpbmRFdmVudENhcGFiaWxpdGllcyhbc3RyXSlbMF07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImZvclRvRGV2aWNlRXZlbnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZm9yVG9EZXZpY2VFdmVudChkaXJlY3Rpb24sIGV2ZW50VHlwZSkge1xuICAgICAgLy8gVE9ETzogRW5hYmxlIHN1cHBvcnQgZm9yIG0uKiBuYW1lc3BhY2Ugb25jZSB0aGUgTVNDIGxhbmRzLlxuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL21hdHJpeC1vcmcvbWF0cml4LXdpZGdldC1hcGkvaXNzdWVzLzU2XG4gICAgICB2YXIgc3RyID0gXCJvcmcubWF0cml4Lm1zYzM4MTkuXCIuY29uY2F0KGRpcmVjdGlvbiwgXCIudG9fZGV2aWNlOlwiKS5jb25jYXQoZXZlbnRUeXBlKTsgLy8gY2hlYXQgYnkgc2VuZGluZyBpdCB0aHJvdWdoIHRoZSBwcm9jZXNzb3JcblxuICAgICAgcmV0dXJuIFdpZGdldEV2ZW50Q2FwYWJpbGl0eS5maW5kRXZlbnRDYXBhYmlsaXRpZXMoW3N0cl0pWzBdO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJmb3JSb29tRXZlbnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZm9yUm9vbUV2ZW50KGRpcmVjdGlvbiwgZXZlbnRUeXBlKSB7XG4gICAgICAvLyBUT0RPOiBFbmFibGUgc3VwcG9ydCBmb3IgbS4qIG5hbWVzcGFjZSBvbmNlIHRoZSBNU0MgbGFuZHMuXG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vbWF0cml4LW9yZy9tYXRyaXgtd2lkZ2V0LWFwaS9pc3N1ZXMvMjJcbiAgICAgIHZhciBzdHIgPSBcIm9yZy5tYXRyaXgubXNjMjc2Mi5cIi5jb25jYXQoZGlyZWN0aW9uLCBcIi5ldmVudDpcIikuY29uY2F0KGV2ZW50VHlwZSk7IC8vIGNoZWF0IGJ5IHNlbmRpbmcgaXQgdGhyb3VnaCB0aGUgcHJvY2Vzc29yXG5cbiAgICAgIHJldHVybiBXaWRnZXRFdmVudENhcGFiaWxpdHkuZmluZEV2ZW50Q2FwYWJpbGl0aWVzKFtzdHJdKVswXTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZm9yUm9vbU1lc3NhZ2VFdmVudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmb3JSb29tTWVzc2FnZUV2ZW50KGRpcmVjdGlvbiwgbXNndHlwZSkge1xuICAgICAgLy8gVE9ETzogRW5hYmxlIHN1cHBvcnQgZm9yIG0uKiBuYW1lc3BhY2Ugb25jZSB0aGUgTVNDIGxhbmRzLlxuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL21hdHJpeC1vcmcvbWF0cml4LXdpZGdldC1hcGkvaXNzdWVzLzIyXG4gICAgICBtc2d0eXBlID0gbXNndHlwZSA9PT0gbnVsbCB8fCBtc2d0eXBlID09PSB1bmRlZmluZWQgPyAnJyA6IG1zZ3R5cGU7XG4gICAgICB2YXIgc3RyID0gXCJvcmcubWF0cml4Lm1zYzI3NjIuXCIuY29uY2F0KGRpcmVjdGlvbiwgXCIuZXZlbnQ6bS5yb29tLm1lc3NhZ2UjXCIpLmNvbmNhdChtc2d0eXBlKTsgLy8gY2hlYXQgYnkgc2VuZGluZyBpdCB0aHJvdWdoIHRoZSBwcm9jZXNzb3JcblxuICAgICAgcmV0dXJuIFdpZGdldEV2ZW50Q2FwYWJpbGl0eS5maW5kRXZlbnRDYXBhYmlsaXRpZXMoW3N0cl0pWzBdO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQYXJzZXMgYSBjYXBhYmlsaXRpZXMgcmVxdWVzdCB0byBmaW5kIGFsbCB0aGUgZXZlbnQgY2FwYWJpbGl0eSByZXF1ZXN0cy5cbiAgICAgKiBAcGFyYW0ge0l0ZXJhYmxlPENhcGFiaWxpdHk+fSBjYXBhYmlsaXRpZXMgVGhlIGNhcGFiaWxpdGllcyByZXF1ZXN0ZWQvdG8gcGFyc2UuXG4gICAgICogQHJldHVybnMge1dpZGdldEV2ZW50Q2FwYWJpbGl0eVtdfSBBbiBhcnJheSBvZiBldmVudCBjYXBhYmlsaXR5IHJlcXVlc3RzLiBNYXkgYmUgZW1wdHksIGJ1dCBuZXZlciBudWxsLlxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZmluZEV2ZW50Q2FwYWJpbGl0aWVzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGZpbmRFdmVudENhcGFiaWxpdGllcyhjYXBhYmlsaXRpZXMpIHtcbiAgICAgIHZhciBwYXJzZWQgPSBbXTtcblxuICAgICAgdmFyIF9pdGVyYXRvciA9IF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyKGNhcGFiaWxpdGllcyksXG4gICAgICAgICAgX3N0ZXA7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGZvciAoX2l0ZXJhdG9yLnMoKTsgIShfc3RlcCA9IF9pdGVyYXRvci5uKCkpLmRvbmU7KSB7XG4gICAgICAgICAgdmFyIGNhcCA9IF9zdGVwLnZhbHVlO1xuICAgICAgICAgIHZhciBfZGlyZWN0aW9uID0gbnVsbDtcbiAgICAgICAgICB2YXIgZXZlbnRTZWdtZW50ID0gdm9pZCAwO1xuICAgICAgICAgIHZhciBfa2luZCA9IG51bGw7IC8vIFRPRE86IEVuYWJsZSBzdXBwb3J0IGZvciBtLiogbmFtZXNwYWNlIG9uY2UgdGhlIE1TQ3MgbGFuZC5cbiAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vbWF0cml4LW9yZy9tYXRyaXgtd2lkZ2V0LWFwaS9pc3N1ZXMvMjJcbiAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vbWF0cml4LW9yZy9tYXRyaXgtd2lkZ2V0LWFwaS9pc3N1ZXMvNTZcblxuICAgICAgICAgIGlmIChjYXAuc3RhcnRzV2l0aChcIm9yZy5tYXRyaXgubXNjMjc2Mi5zZW5kLmV2ZW50OlwiKSkge1xuICAgICAgICAgICAgX2RpcmVjdGlvbiA9IEV2ZW50RGlyZWN0aW9uLlNlbmQ7XG4gICAgICAgICAgICBfa2luZCA9IEV2ZW50S2luZC5FdmVudDtcbiAgICAgICAgICAgIGV2ZW50U2VnbWVudCA9IGNhcC5zdWJzdHJpbmcoXCJvcmcubWF0cml4Lm1zYzI3NjIuc2VuZC5ldmVudDpcIi5sZW5ndGgpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoY2FwLnN0YXJ0c1dpdGgoXCJvcmcubWF0cml4Lm1zYzI3NjIuc2VuZC5zdGF0ZV9ldmVudDpcIikpIHtcbiAgICAgICAgICAgIF9kaXJlY3Rpb24gPSBFdmVudERpcmVjdGlvbi5TZW5kO1xuICAgICAgICAgICAgX2tpbmQgPSBFdmVudEtpbmQuU3RhdGU7XG4gICAgICAgICAgICBldmVudFNlZ21lbnQgPSBjYXAuc3Vic3RyaW5nKFwib3JnLm1hdHJpeC5tc2MyNzYyLnNlbmQuc3RhdGVfZXZlbnQ6XCIubGVuZ3RoKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGNhcC5zdGFydHNXaXRoKFwib3JnLm1hdHJpeC5tc2MzODE5LnNlbmQudG9fZGV2aWNlOlwiKSkge1xuICAgICAgICAgICAgX2RpcmVjdGlvbiA9IEV2ZW50RGlyZWN0aW9uLlNlbmQ7XG4gICAgICAgICAgICBfa2luZCA9IEV2ZW50S2luZC5Ub0RldmljZTtcbiAgICAgICAgICAgIGV2ZW50U2VnbWVudCA9IGNhcC5zdWJzdHJpbmcoXCJvcmcubWF0cml4Lm1zYzM4MTkuc2VuZC50b19kZXZpY2U6XCIubGVuZ3RoKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGNhcC5zdGFydHNXaXRoKFwib3JnLm1hdHJpeC5tc2MyNzYyLnJlY2VpdmUuZXZlbnQ6XCIpKSB7XG4gICAgICAgICAgICBfZGlyZWN0aW9uID0gRXZlbnREaXJlY3Rpb24uUmVjZWl2ZTtcbiAgICAgICAgICAgIF9raW5kID0gRXZlbnRLaW5kLkV2ZW50O1xuICAgICAgICAgICAgZXZlbnRTZWdtZW50ID0gY2FwLnN1YnN0cmluZyhcIm9yZy5tYXRyaXgubXNjMjc2Mi5yZWNlaXZlLmV2ZW50OlwiLmxlbmd0aCk7XG4gICAgICAgICAgfSBlbHNlIGlmIChjYXAuc3RhcnRzV2l0aChcIm9yZy5tYXRyaXgubXNjMjc2Mi5yZWNlaXZlLnN0YXRlX2V2ZW50OlwiKSkge1xuICAgICAgICAgICAgX2RpcmVjdGlvbiA9IEV2ZW50RGlyZWN0aW9uLlJlY2VpdmU7XG4gICAgICAgICAgICBfa2luZCA9IEV2ZW50S2luZC5TdGF0ZTtcbiAgICAgICAgICAgIGV2ZW50U2VnbWVudCA9IGNhcC5zdWJzdHJpbmcoXCJvcmcubWF0cml4Lm1zYzI3NjIucmVjZWl2ZS5zdGF0ZV9ldmVudDpcIi5sZW5ndGgpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoY2FwLnN0YXJ0c1dpdGgoXCJvcmcubWF0cml4Lm1zYzM4MTkucmVjZWl2ZS50b19kZXZpY2U6XCIpKSB7XG4gICAgICAgICAgICBfZGlyZWN0aW9uID0gRXZlbnREaXJlY3Rpb24uUmVjZWl2ZTtcbiAgICAgICAgICAgIF9raW5kID0gRXZlbnRLaW5kLlRvRGV2aWNlO1xuICAgICAgICAgICAgZXZlbnRTZWdtZW50ID0gY2FwLnN1YnN0cmluZyhcIm9yZy5tYXRyaXgubXNjMzgxOS5yZWNlaXZlLnRvX2RldmljZTpcIi5sZW5ndGgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChfZGlyZWN0aW9uID09PSBudWxsIHx8IF9raW5kID09PSBudWxsKSBjb250aW51ZTsgLy8gVGhlIGNhcGFiaWxpdHkgdXNlcyBgI2AgYXMgYSBzZXBhcmF0b3IgYmV0d2VlbiBldmVudCB0eXBlIGFuZCBzdGF0ZSBrZXkvbXNndHlwZSxcbiAgICAgICAgICAvLyBzbyB3ZSBzcGxpdCBvbiB0aGF0LiBIb3dldmVyLCBhICMgaXMgYWxzbyB2YWxpZCBpbiBlaXRoZXIgb25lIG9mIHRob3NlIHNvIHdlXG4gICAgICAgICAgLy8gam9pbiBhY2NvcmRpbmdseS5cbiAgICAgICAgICAvLyBFZzogYG0ucm9vbS5tZXNzYWdlIyNtLnRleHRgIGlzIFwibS5yb29tLm1lc3NhZ2VcIiBldmVudCB3aXRoIG1zZ3R5cGUgXCIjbS50ZXh0XCIuXG5cbiAgICAgICAgICB2YXIgZXhwZWN0aW5nS2V5U3RyID0gZXZlbnRTZWdtZW50LnN0YXJ0c1dpdGgoXCJtLnJvb20ubWVzc2FnZSNcIikgfHwgX2tpbmQgPT09IEV2ZW50S2luZC5TdGF0ZTtcblxuICAgICAgICAgIHZhciBfa2V5U3RyID0gbnVsbDtcblxuICAgICAgICAgIGlmIChldmVudFNlZ21lbnQuaW5jbHVkZXMoJyMnKSAmJiBleHBlY3RpbmdLZXlTdHIpIHtcbiAgICAgICAgICAgIC8vIERldiBub3RlOiByZWdleCBpcyBkaWZmaWN1bHQgdG8gd3JpdGUsIHNvIGluc3RlYWQgdGhlIHJ1bGVzIGFyZSBtYW51YWxseSB3cml0dGVuXG4gICAgICAgICAgICAvLyBvdXQuIFRoaXMgaXMgcHJvYmFibHkganVzdCBhcyB1bmRlcnN0YW5kYWJsZSBhcyBhIGJvcmluZyByZWdleCB0aG91Z2gsIHNvIHdpbi13aW4/XG4gICAgICAgICAgICAvLyBUZXN0IGNhc2VzOlxuICAgICAgICAgICAgLy8gc3RyICAgICAgICAgICAgICAgICAgICAgIGV2ZW50U2VnbWVudCAgICAgICAga2V5U3RyXG4gICAgICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICAvLyBtLnJvb20ubWVzc2FnZSMgICAgICAgICAgbS5yb29tLm1lc3NhZ2UgICAgICA8ZW1wdHkgc3RyaW5nPlxuICAgICAgICAgICAgLy8gbS5yb29tLm1lc3NhZ2UjdGVzdCAgICAgIG0ucm9vbS5tZXNzYWdlICAgICAgdGVzdFxuICAgICAgICAgICAgLy8gbS5yb29tLm1lc3NhZ2VcXCMgICAgICAgICBtLnJvb20ubWVzc2FnZSMgICAgIHRlc3RcbiAgICAgICAgICAgIC8vIG0ucm9vbS5tZXNzYWdlIyN0ZXN0ICAgICBtLnJvb20ubWVzc2FnZSAgICAgICN0ZXN0XG4gICAgICAgICAgICAvLyBtLnJvb20ubWVzc2FnZVxcIyN0ZXN0ICAgIG0ucm9vbS5tZXNzYWdlIyAgICAgdGVzdFxuICAgICAgICAgICAgLy8gbS5yb29tLm1lc3NhZ2VcXFxcIyN0ZXN0ICAgbS5yb29tLm1lc3NhZ2VcXCMgICAgdGVzdFxuICAgICAgICAgICAgLy8gbS5yb29tLm1lc3NhZ2VcXFxcIyMjdGVzdCAgbS5yb29tLm1lc3NhZ2VcXCMgICAgI3Rlc3RcbiAgICAgICAgICAgIC8vIEZpcnN0IHN0ZXA6IGV4cGxvZGUgdGhlIHN0cmluZ1xuICAgICAgICAgICAgdmFyIHBhcnRzID0gZXZlbnRTZWdtZW50LnNwbGl0KCcjJyk7IC8vIFRvIGZvcm0gdGhlIGV2ZW50U2VnbWVudCwgd2UnbGwga2VlcCBmaW5kaW5nIHBhcnRzIG9mIHRoZSBleHBsb2RlZCBzdHJpbmcgdW50aWxcbiAgICAgICAgICAgIC8vIHRoZXJlJ3Mgb25lIHRoYXQgZG9lc24ndCBlbmQgd2l0aCB0aGUgZXNjYXBlIGNoYXJhY3RlciAoXFwpLiBXZSdsbCB0aGVuIGpvaW4gdGhvc2VcbiAgICAgICAgICAgIC8vIHNlZ21lbnRzIHRvZ2V0aGVyIHdpdGggdGhlIGV4cGxvZGluZyBjaGFyYWN0ZXIuIFdlIGhhdmUgdG8gcmVtZW1iZXIgdG8gY29uc3VtZSB0aGVcbiAgICAgICAgICAgIC8vIGVzY2FwZSBjaGFyYWN0ZXIgYXMgd2VsbC5cblxuICAgICAgICAgICAgdmFyIGlkeCA9IHBhcnRzLmZpbmRJbmRleChmdW5jdGlvbiAocCkge1xuICAgICAgICAgICAgICByZXR1cm4gIXAuZW5kc1dpdGgoXCJcXFxcXCIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBldmVudFNlZ21lbnQgPSBwYXJ0cy5zbGljZSgwLCBpZHggKyAxKS5tYXAoZnVuY3Rpb24gKHApIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHAuZW5kc1dpdGgoJ1xcXFwnKSA/IHAuc3Vic3RyaW5nKDAsIHAubGVuZ3RoIC0gMSkgOiBwO1xuICAgICAgICAgICAgfSkuam9pbignIycpOyAvLyBUaGUga2V5U3RyIGlzIHdoYXRldmVyIGlzIGxlZnQgb3Zlci5cblxuICAgICAgICAgICAgX2tleVN0ciA9IHBhcnRzLnNsaWNlKGlkeCArIDEpLmpvaW4oJyMnKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBwYXJzZWQucHVzaChuZXcgV2lkZ2V0RXZlbnRDYXBhYmlsaXR5KF9kaXJlY3Rpb24sIGV2ZW50U2VnbWVudCwgX2tpbmQsIF9rZXlTdHIsIGNhcCkpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgX2l0ZXJhdG9yLmUoZXJyKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIF9pdGVyYXRvci5mKCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwYXJzZWQ7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFdpZGdldEV2ZW50Q2FwYWJpbGl0eTtcbn0oKTtcblxuZXhwb3J0cy5XaWRnZXRFdmVudENhcGFiaWxpdHkgPSBXaWRnZXRFdmVudENhcGFiaWxpdHk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLldpZGdldFBhcnNlciA9IHZvaWQgMDtcblxudmFyIF9XaWRnZXQgPSByZXF1aXJlKFwiLi9XaWRnZXRcIik7XG5cbnZhciBfdXJsID0gcmVxdWlyZShcIi4vdmFsaWRhdGlvbi91cmxcIik7XG5cbmZ1bmN0aW9uIF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyKG8sIGFsbG93QXJyYXlMaWtlKSB7IHZhciBpdCA9IHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdIHx8IG9bXCJAQGl0ZXJhdG9yXCJdOyBpZiAoIWl0KSB7IGlmIChBcnJheS5pc0FycmF5KG8pIHx8IChpdCA9IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvKSkgfHwgYWxsb3dBcnJheUxpa2UgJiYgbyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHsgaWYgKGl0KSBvID0gaXQ7IHZhciBpID0gMDsgdmFyIEYgPSBmdW5jdGlvbiBGKCkge307IHJldHVybiB7IHM6IEYsIG46IGZ1bmN0aW9uIG4oKSB7IGlmIChpID49IG8ubGVuZ3RoKSByZXR1cm4geyBkb25lOiB0cnVlIH07IHJldHVybiB7IGRvbmU6IGZhbHNlLCB2YWx1ZTogb1tpKytdIH07IH0sIGU6IGZ1bmN0aW9uIGUoX2UpIHsgdGhyb3cgX2U7IH0sIGY6IEYgfTsgfSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGl0ZXJhdGUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH0gdmFyIG5vcm1hbENvbXBsZXRpb24gPSB0cnVlLCBkaWRFcnIgPSBmYWxzZSwgZXJyOyByZXR1cm4geyBzOiBmdW5jdGlvbiBzKCkgeyBpdCA9IGl0LmNhbGwobyk7IH0sIG46IGZ1bmN0aW9uIG4oKSB7IHZhciBzdGVwID0gaXQubmV4dCgpOyBub3JtYWxDb21wbGV0aW9uID0gc3RlcC5kb25lOyByZXR1cm4gc3RlcDsgfSwgZTogZnVuY3Rpb24gZShfZTIpIHsgZGlkRXJyID0gdHJ1ZTsgZXJyID0gX2UyOyB9LCBmOiBmdW5jdGlvbiBmKCkgeyB0cnkgeyBpZiAoIW5vcm1hbENvbXBsZXRpb24gJiYgaXRbXCJyZXR1cm5cIl0gIT0gbnVsbCkgaXRbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKGRpZEVycikgdGhyb3cgZXJyOyB9IH0gfTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxudmFyIFdpZGdldFBhcnNlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFdpZGdldFBhcnNlcigpIHsvLyBwcml2YXRlIGNvbnN0cnVjdG9yIGJlY2F1c2UgdGhpcyBpcyBhIHV0aWwgY2xhc3NcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBXaWRnZXRQYXJzZXIpO1xuICB9XG4gIC8qKlxuICAgKiBQYXJzZXMgd2lkZ2V0cyBmcm9tIHRoZSBcIm0ud2lkZ2V0c1wiIGFjY291bnQgZGF0YSBldmVudC4gVGhpcyB3aWxsIGFsd2F5c1xuICAgKiByZXR1cm4gYW4gYXJyYXksIHRob3VnaCBtYXkgYmUgZW1wdHkgaWYgbm8gdmFsaWQgd2lkZ2V0cyB3ZXJlIGZvdW5kLlxuICAgKiBAcGFyYW0ge0lBY2NvdW50RGF0YVdpZGdldHN9IGNvbnRlbnQgVGhlIGNvbnRlbnQgb2YgdGhlIFwibS53aWRnZXRzXCIgYWNjb3VudCBkYXRhLlxuICAgKiBAcmV0dXJucyB7V2lkZ2V0W119IFRoZSB3aWRnZXRzIGluIGFjY291bnQgZGF0YSwgb3IgYW4gZW1wdHkgYXJyYXkuXG4gICAqL1xuXG5cbiAgX2NyZWF0ZUNsYXNzKFdpZGdldFBhcnNlciwgbnVsbCwgW3tcbiAgICBrZXk6IFwicGFyc2VBY2NvdW50RGF0YVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwYXJzZUFjY291bnREYXRhKGNvbnRlbnQpIHtcbiAgICAgIGlmICghY29udGVudCkgcmV0dXJuIFtdO1xuICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuXG4gICAgICBmb3IgKHZhciBfaSA9IDAsIF9PYmplY3Qka2V5cyA9IE9iamVjdC5rZXlzKGNvbnRlbnQpOyBfaSA8IF9PYmplY3Qka2V5cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIF93aWRnZXRJZCA9IF9PYmplY3Qka2V5c1tfaV07XG4gICAgICAgIHZhciByb3VnaFdpZGdldCA9IGNvbnRlbnRbX3dpZGdldElkXTtcbiAgICAgICAgaWYgKCFyb3VnaFdpZGdldCkgY29udGludWU7XG4gICAgICAgIGlmIChyb3VnaFdpZGdldC50eXBlICE9PSBcIm0ud2lkZ2V0XCIgJiYgcm91Z2hXaWRnZXQudHlwZSAhPT0gXCJpbS52ZWN0b3IubW9kdWxhci53aWRnZXRzXCIpIGNvbnRpbnVlO1xuICAgICAgICBpZiAoIXJvdWdoV2lkZ2V0LnNlbmRlcikgY29udGludWU7XG4gICAgICAgIHZhciBwcm9iYWJsZVdpZGdldElkID0gcm91Z2hXaWRnZXQuc3RhdGVfa2V5IHx8IHJvdWdoV2lkZ2V0LmlkO1xuICAgICAgICBpZiAocHJvYmFibGVXaWRnZXRJZCAhPT0gX3dpZGdldElkKSBjb250aW51ZTtcbiAgICAgICAgdmFyIGFzU3RhdGVFdmVudCA9IHtcbiAgICAgICAgICBjb250ZW50OiByb3VnaFdpZGdldC5jb250ZW50LFxuICAgICAgICAgIHNlbmRlcjogcm91Z2hXaWRnZXQuc2VuZGVyLFxuICAgICAgICAgIHR5cGU6IFwibS53aWRnZXRcIixcbiAgICAgICAgICBzdGF0ZV9rZXk6IF93aWRnZXRJZCxcbiAgICAgICAgICBldmVudF9pZDogXCIkZXhhbXBsZVwiLFxuICAgICAgICAgIHJvb21faWQ6IFwiIWV4YW1wbGVcIixcbiAgICAgICAgICBvcmlnaW5fc2VydmVyX3RzOiAxXG4gICAgICAgIH07XG4gICAgICAgIHZhciB3aWRnZXQgPSBXaWRnZXRQYXJzZXIucGFyc2VSb29tV2lkZ2V0KGFzU3RhdGVFdmVudCk7XG4gICAgICAgIGlmICh3aWRnZXQpIHJlc3VsdC5wdXNoKHdpZGdldCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFBhcnNlcyBhbGwgdGhlIHdpZGdldHMgcG9zc2libGUgaW4gdGhlIGdpdmVuIGFycmF5LiBUaGlzIHdpbGwgYWx3YXlzIHJldHVyblxuICAgICAqIGFuIGFycmF5LCB0aG91Z2ggbWF5IGJlIGVtcHR5IGlmIG5vIHdpZGdldHMgY291bGQgYmUgcGFyc2VkLlxuICAgICAqIEBwYXJhbSB7SVN0YXRlRXZlbnRbXX0gY3VycmVudFN0YXRlIFRoZSByb29tIHN0YXRlIHRvIHBhcnNlLlxuICAgICAqIEByZXR1cm5zIHtXaWRnZXRbXX0gVGhlIHdpZGdldHMgaW4gdGhlIHN0YXRlLCBvciBhbiBlbXB0eSBhcnJheS5cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInBhcnNlV2lkZ2V0c0Zyb21Sb29tU3RhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcGFyc2VXaWRnZXRzRnJvbVJvb21TdGF0ZShjdXJyZW50U3RhdGUpIHtcbiAgICAgIGlmICghY3VycmVudFN0YXRlKSByZXR1cm4gW107XG4gICAgICB2YXIgcmVzdWx0ID0gW107XG5cbiAgICAgIHZhciBfaXRlcmF0b3IgPSBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlcihjdXJyZW50U3RhdGUpLFxuICAgICAgICAgIF9zdGVwO1xuXG4gICAgICB0cnkge1xuICAgICAgICBmb3IgKF9pdGVyYXRvci5zKCk7ICEoX3N0ZXAgPSBfaXRlcmF0b3IubigpKS5kb25lOykge1xuICAgICAgICAgIHZhciBzdGF0ZSA9IF9zdGVwLnZhbHVlO1xuICAgICAgICAgIHZhciB3aWRnZXQgPSBXaWRnZXRQYXJzZXIucGFyc2VSb29tV2lkZ2V0KHN0YXRlKTtcbiAgICAgICAgICBpZiAod2lkZ2V0KSByZXN1bHQucHVzaCh3aWRnZXQpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgX2l0ZXJhdG9yLmUoZXJyKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIF9pdGVyYXRvci5mKCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFBhcnNlcyBhIHN0YXRlIGV2ZW50IGludG8gYSB3aWRnZXQuIElmIHRoZSBzdGF0ZSBldmVudCBkb2VzIG5vdCByZXByZXNlbnRcbiAgICAgKiBhIHdpZGdldCAod3JvbmcgZXZlbnQgdHlwZSwgaW52YWxpZCB3aWRnZXQsIGV0YykgdGhlbiBudWxsIGlzIHJldHVybmVkLlxuICAgICAqIEBwYXJhbSB7SVN0YXRlRXZlbnR9IHN0YXRlRXZlbnQgVGhlIHN0YXRlIGV2ZW50LlxuICAgICAqIEByZXR1cm5zIHtXaWRnZXR8bnVsbH0gVGhlIHdpZGdldCwgb3IgbnVsbCBpZiBpbnZhbGlkXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJwYXJzZVJvb21XaWRnZXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcGFyc2VSb29tV2lkZ2V0KHN0YXRlRXZlbnQpIHtcbiAgICAgIGlmICghc3RhdGVFdmVudCkgcmV0dXJuIG51bGw7IC8vIFRPRE86IFtMZWdhY3ldIFJlbW92ZSBsZWdhY3kgc3VwcG9ydFxuXG4gICAgICBpZiAoc3RhdGVFdmVudC50eXBlICE9PSBcIm0ud2lkZ2V0XCIgJiYgc3RhdGVFdmVudC50eXBlICE9PSBcImltLnZlY3Rvci5tb2R1bGFyLndpZGdldHNcIikge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0gLy8gRGV2IG5vdGU6IFRocm91Z2hvdXQgdGhpcyBmdW5jdGlvbiB3ZSBoYXZlIG51bGwgc2FmZXR5IHRvIGVuc3VyZSB0aGF0XG4gICAgICAvLyBpZiB0aGUgY2FsbGVyIGRpZCBub3Qgc3VwcGx5IHNvbWV0aGluZyB1c2VmdWwgdGhhdCB3ZSBkb24ndCBlcnJvci4gVGhpc1xuICAgICAgLy8gaXMgZG9uZSBhZ2FpbnN0IHRoZSByZXF1aXJlbWVudHMgb2YgdGhlIGludGVyZmFjZSBiZWNhdXNlIG5vdCBldmVyeW9uZVxuICAgICAgLy8gd2lsbCBoYXZlIGFuIGludGVyZmFjZSB0byB2YWxpZGF0ZSBhZ2FpbnN0LlxuXG5cbiAgICAgIHZhciBjb250ZW50ID0gc3RhdGVFdmVudC5jb250ZW50IHx8IHt9OyAvLyBGb3JtIG91ciBiZXN0IGFwcHJveGltYXRpb24gb2YgYSB3aWRnZXQgd2l0aCB0aGUgaW5mb3JtYXRpb24gd2UgaGF2ZVxuXG4gICAgICB2YXIgZXN0aW1hdGVkV2lkZ2V0ID0ge1xuICAgICAgICBpZDogc3RhdGVFdmVudC5zdGF0ZV9rZXksXG4gICAgICAgIGNyZWF0b3JVc2VySWQ6IGNvbnRlbnRbJ2NyZWF0b3JVc2VySWQnXSB8fCBzdGF0ZUV2ZW50LnNlbmRlcixcbiAgICAgICAgbmFtZTogY29udGVudFsnbmFtZSddLFxuICAgICAgICB0eXBlOiBjb250ZW50Wyd0eXBlJ10sXG4gICAgICAgIHVybDogY29udGVudFsndXJsJ10sXG4gICAgICAgIHdhaXRGb3JJZnJhbWVMb2FkOiBjb250ZW50Wyd3YWl0Rm9ySWZyYW1lTG9hZCddLFxuICAgICAgICBkYXRhOiBjb250ZW50WydkYXRhJ11cbiAgICAgIH07IC8vIEZpbmFsbHksIHByb2Nlc3MgdGhhdCB3aWRnZXRcblxuICAgICAgcmV0dXJuIFdpZGdldFBhcnNlci5wcm9jZXNzRXN0aW1hdGVkV2lkZ2V0KGVzdGltYXRlZFdpZGdldCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInByb2Nlc3NFc3RpbWF0ZWRXaWRnZXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcHJvY2Vzc0VzdGltYXRlZFdpZGdldCh3aWRnZXQpIHtcbiAgICAgIC8vIFZhbGlkYXRlIHRoYXQgdGhlIHdpZGdldCBoYXMgdGhlIGJlc3QgY2hhbmNlIG9mIHBhc3NpbmcgYXMgYSB3aWRnZXRcbiAgICAgIGlmICghd2lkZ2V0LmlkIHx8ICF3aWRnZXQuY3JlYXRvclVzZXJJZCB8fCAhd2lkZ2V0LnR5cGUpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIGlmICghKDAsIF91cmwuaXNWYWxpZFVybCkod2lkZ2V0LnVybCkpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9IC8vIFRPRE86IFZhbGlkYXRlIGRhdGEgZm9yIGtub3duIHdpZGdldCB0eXBlc1xuXG5cbiAgICAgIHJldHVybiBuZXcgX1dpZGdldC5XaWRnZXQod2lkZ2V0KTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gV2lkZ2V0UGFyc2VyO1xufSgpO1xuXG5leHBvcnRzLldpZGdldFBhcnNlciA9IFdpZGdldFBhcnNlcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuaXNWYWxpZFVybCA9IGlzVmFsaWRVcmw7XG5cbi8qXG4gKiBDb3B5cmlnaHQgMjAyMCBUaGUgTWF0cml4Lm9yZyBGb3VuZGF0aW9uIEMuSS5DLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmZ1bmN0aW9uIGlzVmFsaWRVcmwodmFsKSB7XG4gIGlmICghdmFsKSByZXR1cm4gZmFsc2U7IC8vIGVhc3k6IG5vdCB2YWxpZCBpZiBub3QgcHJlc2VudFxuXG4gIHRyeSB7XG4gICAgdmFyIHBhcnNlZCA9IG5ldyBVUkwodmFsKTtcblxuICAgIGlmIChwYXJzZWQucHJvdG9jb2wgIT09IFwiaHR0cFwiICYmIHBhcnNlZC5wcm90b2NvbCAhPT0gXCJodHRwc1wiKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBpZiAoZSBpbnN0YW5jZW9mIFR5cGVFcnJvcikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHRocm93IGU7XG4gIH1cbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuYXNzZXJ0UHJlc2VudCA9IGFzc2VydFByZXNlbnQ7XG5cbi8qXG4gKiBDb3B5cmlnaHQgMjAyMCBUaGUgTWF0cml4Lm9yZyBGb3VuZGF0aW9uIEMuSS5DLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmZ1bmN0aW9uIGFzc2VydFByZXNlbnQob2JqLCBrZXkpIHtcbiAgaWYgKCFvYmpba2V5XSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlwiLmNvbmNhdChrZXksIFwiIGlzIHJlcXVpcmVkXCIpKTtcbiAgfVxufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5ydW5UZW1wbGF0ZSA9IHJ1blRlbXBsYXRlO1xuZXhwb3J0cy50b1N0cmluZyA9IHRvU3RyaW5nO1xuXG4vKlxuICogQ29weXJpZ2h0IDIwMjAsIDIwMjEgVGhlIE1hdHJpeC5vcmcgRm91bmRhdGlvbiBDLkkuQy5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5mdW5jdGlvbiBydW5UZW1wbGF0ZSh1cmwsIHdpZGdldCwgcGFyYW1zKSB7XG4gIC8vIEFsd2F5cyBhcHBseSB0aGUgc3VwcGxpZWQgcGFyYW1zIG92ZXIgdG9wIG9mIGRhdGEgdG8gZW5zdXJlIHRoZSBkYXRhIGNhbid0IGxpZSBhYm91dCB0aGVtLlxuICB2YXIgdmFyaWFibGVzID0gT2JqZWN0LmFzc2lnbih7fSwgd2lkZ2V0LmRhdGEsIHtcbiAgICAnbWF0cml4X3Jvb21faWQnOiBwYXJhbXMud2lkZ2V0Um9vbUlkIHx8IFwiXCIsXG4gICAgJ21hdHJpeF91c2VyX2lkJzogcGFyYW1zLmN1cnJlbnRVc2VySWQsXG4gICAgJ21hdHJpeF9kaXNwbGF5X25hbWUnOiBwYXJhbXMudXNlckRpc3BsYXlOYW1lIHx8IHBhcmFtcy5jdXJyZW50VXNlcklkLFxuICAgICdtYXRyaXhfYXZhdGFyX3VybCc6IHBhcmFtcy51c2VySHR0cEF2YXRhclVybCB8fCBcIlwiLFxuICAgICdtYXRyaXhfd2lkZ2V0X2lkJzogd2lkZ2V0LmlkLFxuICAgIC8vIFRPRE86IENvbnZlcnQgdG8gc3RhYmxlIChodHRwczovL2dpdGh1Yi5jb20vbWF0cml4LW9yZy9tYXRyaXgtZG9jL3B1bGwvMjg3MylcbiAgICAnb3JnLm1hdHJpeC5tc2MyODczLmNsaWVudF9pZCc6IHBhcmFtcy5jbGllbnRJZCB8fCBcIlwiLFxuICAgICdvcmcubWF0cml4Lm1zYzI4NzMuY2xpZW50X3RoZW1lJzogcGFyYW1zLmNsaWVudFRoZW1lIHx8IFwiXCIsXG4gICAgJ29yZy5tYXRyaXgubXNjMjg3My5jbGllbnRfbGFuZ3VhZ2UnOiBwYXJhbXMuY2xpZW50TGFuZ3VhZ2UgfHwgXCJcIlxuICB9KTtcbiAgdmFyIHJlc3VsdCA9IHVybDtcblxuICBmb3IgKHZhciBfaSA9IDAsIF9PYmplY3Qka2V5cyA9IE9iamVjdC5rZXlzKHZhcmlhYmxlcyk7IF9pIDwgX09iamVjdCRrZXlzLmxlbmd0aDsgX2krKykge1xuICAgIHZhciBrZXkgPSBfT2JqZWN0JGtleXNbX2ldO1xuICAgIC8vIFJlZ2V4IGVzY2FwZSBmcm9tIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS82OTY5NDg2LzcwMzczNzlcbiAgICB2YXIgcGF0dGVybiA9IFwiJFwiLmNvbmNhdChrZXkpLnJlcGxhY2UoL1suKis/XiR7fSgpfFtcXF1cXFxcXS9nLCAnXFxcXCQmJyk7IC8vICQmIG1lYW5zIHRoZSB3aG9sZSBtYXRjaGVkIHN0cmluZ1xuXG4gICAgdmFyIHJleHAgPSBuZXcgUmVnRXhwKHBhdHRlcm4sICdnJyk7IC8vIFRoaXMgaXMgdGVjaG5pY2FsbHkgbm90IHdoYXQgd2UncmUgc3VwcG9zZWQgdG8gZG8gZm9yIGEgY291cGxlIHJlYXNvbnM6XG4gICAgLy8gMS4gV2UgYXJlIGFzc3VtaW5nIHRoYXQgdGhlcmUgd29uJ3QgbGF0ZXIgYmUgYSAka2V5IG1hdGNoIGFmdGVyIHdlIHJlcGxhY2UgYSB2YXJpYWJsZS5cbiAgICAvLyAyLiBXZSBhcmUgYXNzdW1pbmcgdGhhdCB0aGUgdmFyaWFibGUgaXMgaW4gYSBwbGFjZSB3aGVyZSBpdCBjYW4gYmUgZXNjYXBlZCAoZWc6IHBhdGggb3IgcXVlcnkgc3RyaW5nKS5cblxuICAgIHJlc3VsdCA9IHJlc3VsdC5yZXBsYWNlKHJleHAsIGVuY29kZVVSSUNvbXBvbmVudCh0b1N0cmluZyh2YXJpYWJsZXNba2V5XSkpKTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIHRvU3RyaW5nKGEpIHtcbiAgaWYgKGEgPT09IG51bGwgfHwgYSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIFwiXCIuY29uY2F0KGEpO1xuICB9XG5cbiAgcmV0dXJuIGEudG9TdHJpbmcoKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH0sIF90eXBlb2Yob2JqKTsgfVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5Qb3N0bWVzc2FnZVRyYW5zcG9ydCA9IHZvaWQgMDtcblxudmFyIF9ldmVudHMgPSByZXF1aXJlKFwiZXZlbnRzXCIpO1xuXG52YXIgXyA9IHJlcXVpcmUoXCIuLlwiKTtcblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGVudW1lcmFibGVPbmx5ICYmIChzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSkpLCBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IG51bGwgIT0gYXJndW1lbnRzW2ldID8gYXJndW1lbnRzW2ldIDoge307IGkgJSAyID8gb3duS2V5cyhPYmplY3Qoc291cmNlKSwgITApLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSkgOiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSkgOiBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3ViQ2xhc3MsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IGVsc2UgaWYgKGNhbGwgIT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRGVyaXZlZCBjb25zdHJ1Y3RvcnMgbWF5IG9ubHkgcmV0dXJuIG9iamVjdCBvciB1bmRlZmluZWRcIik7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG4vKipcbiAqIFRyYW5zcG9ydCBmb3IgdGhlIFdpZGdldCBBUEkgb3ZlciBwb3N0TWVzc2FnZS5cbiAqL1xudmFyIFBvc3RtZXNzYWdlVHJhbnNwb3J0ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfRXZlbnRFbWl0dGVyKSB7XG4gIF9pbmhlcml0cyhQb3N0bWVzc2FnZVRyYW5zcG9ydCwgX0V2ZW50RW1pdHRlcik7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihQb3N0bWVzc2FnZVRyYW5zcG9ydCk7XG5cbiAgZnVuY3Rpb24gUG9zdG1lc3NhZ2VUcmFuc3BvcnQoc2VuZERpcmVjdGlvbiwgaW5pdGlhbFdpZGdldElkLCB0cmFuc3BvcnRXaW5kb3csIGluYm91bmRXaW5kb3cpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUG9zdG1lc3NhZ2VUcmFuc3BvcnQpO1xuXG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKTtcbiAgICBfdGhpcy5zZW5kRGlyZWN0aW9uID0gc2VuZERpcmVjdGlvbjtcbiAgICBfdGhpcy5pbml0aWFsV2lkZ2V0SWQgPSBpbml0aWFsV2lkZ2V0SWQ7XG4gICAgX3RoaXMudHJhbnNwb3J0V2luZG93ID0gdHJhbnNwb3J0V2luZG93O1xuICAgIF90aGlzLmluYm91bmRXaW5kb3cgPSBpbmJvdW5kV2luZG93O1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInN0cmljdE9yaWdpbkNoZWNrXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwidGFyZ2V0T3JpZ2luXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwidGltZW91dFNlY29uZHNcIiwgMTApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIl9yZWFkeVwiLCBmYWxzZSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiX3dpZGdldElkXCIsIG51bGwpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIm91dGJvdW5kUmVxdWVzdHNcIiwgbmV3IE1hcCgpKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJzdG9wQ29udHJvbGxlclwiLCBuZXcgQWJvcnRDb250cm9sbGVyKCkpO1xuXG4gICAgX3RoaXMuX3dpZGdldElkID0gaW5pdGlhbFdpZGdldElkO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhQb3N0bWVzc2FnZVRyYW5zcG9ydCwgW3tcbiAgICBrZXk6IFwicmVhZHlcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZWFkeTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwid2lkZ2V0SWRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl93aWRnZXRJZCB8fCBudWxsO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJuZXh0UmVxdWVzdElkXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICB2YXIgaWRCYXNlID0gXCJ3aWRnZXRhcGktXCIuY29uY2F0KERhdGUubm93KCkpO1xuICAgICAgdmFyIGluZGV4ID0gMDtcbiAgICAgIHZhciBpZCA9IGlkQmFzZTtcblxuICAgICAgd2hpbGUgKHRoaXMub3V0Ym91bmRSZXF1ZXN0cy5oYXMoaWQpKSB7XG4gICAgICAgIGlkID0gXCJcIi5jb25jYXQoaWRCYXNlLCBcIi1cIikuY29uY2F0KGluZGV4KyspO1xuICAgICAgfSAvLyByZXNlcnZlIHRoZSBJRFxuXG5cbiAgICAgIHRoaXMub3V0Ym91bmRSZXF1ZXN0cy5zZXQoaWQsIG51bGwpO1xuICAgICAgcmV0dXJuIGlkO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZW5kSW50ZXJuYWxcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2VuZEludGVybmFsKG1lc3NhZ2UpIHtcbiAgICAgIHZhciB0YXJnZXRPcmlnaW4gPSB0aGlzLnRhcmdldE9yaWdpbiB8fCAnKic7XG4gICAgICBjb25zb2xlLmxvZyhcIltQb3N0bWVzc2FnZVRyYW5zcG9ydF0gU2VuZGluZyBvYmplY3QgdG8gXCIuY29uY2F0KHRhcmdldE9yaWdpbiwgXCI6IFwiKSwgbWVzc2FnZSk7XG4gICAgICB0aGlzLnRyYW5zcG9ydFdpbmRvdy5wb3N0TWVzc2FnZShtZXNzYWdlLCB0YXJnZXRPcmlnaW4pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZXBseVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZXBseShyZXF1ZXN0LCByZXNwb25zZURhdGEpIHtcbiAgICAgIHJldHVybiB0aGlzLnNlbmRJbnRlcm5hbChfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHJlcXVlc3QpLCB7fSwge1xuICAgICAgICByZXNwb25zZTogcmVzcG9uc2VEYXRhXG4gICAgICB9KSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNlbmRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2VuZChhY3Rpb24sIGRhdGEpIHtcbiAgICAgIHJldHVybiB0aGlzLnNlbmRDb21wbGV0ZShhY3Rpb24sIGRhdGEpLnRoZW4oZnVuY3Rpb24gKHIpIHtcbiAgICAgICAgcmV0dXJuIHIucmVzcG9uc2U7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2VuZENvbXBsZXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNlbmRDb21wbGV0ZShhY3Rpb24sIGRhdGEpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICBpZiAoIXRoaXMucmVhZHkgfHwgIXRoaXMud2lkZ2V0SWQpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIk5vdCByZWFkeSBvciB1bmtub3duIHdpZGdldCBJRFwiKSk7XG4gICAgICB9XG5cbiAgICAgIHZhciByZXF1ZXN0ID0ge1xuICAgICAgICBhcGk6IHRoaXMuc2VuZERpcmVjdGlvbixcbiAgICAgICAgd2lkZ2V0SWQ6IHRoaXMud2lkZ2V0SWQsXG4gICAgICAgIHJlcXVlc3RJZDogdGhpcy5uZXh0UmVxdWVzdElkLFxuICAgICAgICBhY3Rpb246IGFjdGlvbixcbiAgICAgICAgZGF0YTogZGF0YVxuICAgICAgfTtcblxuICAgICAgaWYgKGFjdGlvbiA9PT0gXy5XaWRnZXRBcGlUb1dpZGdldEFjdGlvbi5VcGRhdGVWaXNpYmlsaXR5KSB7XG4gICAgICAgIC8vIFhYWDogVGhpcyBpcyBmb3IgU2NhbGFyIHN1cHBvcnRcbiAgICAgICAgLy8gVE9ETzogRml4IHNjYWxhclxuICAgICAgICByZXF1ZXN0Wyd2aXNpYmxlJ10gPSBkYXRhWyd2aXNpYmxlJ107XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocHJSZXNvbHZlLCBwclJlamVjdCkge1xuICAgICAgICB2YXIgcmVzb2x2ZSA9IGZ1bmN0aW9uIHJlc29sdmUocmVzcG9uc2UpIHtcbiAgICAgICAgICBjbGVhblVwKCk7XG4gICAgICAgICAgcHJSZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgcmVqZWN0ID0gZnVuY3Rpb24gcmVqZWN0KGVycikge1xuICAgICAgICAgIGNsZWFuVXAoKTtcbiAgICAgICAgICBwclJlamVjdChlcnIpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZhciB0aW1lcklkID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIHJlamVjdChuZXcgRXJyb3IoXCJSZXF1ZXN0IHRpbWVkIG91dFwiKSk7XG4gICAgICAgIH0sIChfdGhpczIudGltZW91dFNlY29uZHMgfHwgMSkgKiAxMDAwKTtcblxuICAgICAgICB2YXIgb25TdG9wID0gZnVuY3Rpb24gb25TdG9wKCkge1xuICAgICAgICAgIHJldHVybiByZWplY3QobmV3IEVycm9yKFwiVHJhbnNwb3J0IHN0b3BwZWRcIikpO1xuICAgICAgICB9O1xuXG4gICAgICAgIF90aGlzMi5zdG9wQ29udHJvbGxlci5zaWduYWwuYWRkRXZlbnRMaXN0ZW5lcihcImFib3J0XCIsIG9uU3RvcCk7XG5cbiAgICAgICAgdmFyIGNsZWFuVXAgPSBmdW5jdGlvbiBjbGVhblVwKCkge1xuICAgICAgICAgIF90aGlzMi5vdXRib3VuZFJlcXVlc3RzW1wiZGVsZXRlXCJdKHJlcXVlc3QucmVxdWVzdElkKTtcblxuICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lcklkKTtcblxuICAgICAgICAgIF90aGlzMi5zdG9wQ29udHJvbGxlci5zaWduYWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImFib3J0XCIsIG9uU3RvcCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgX3RoaXMyLm91dGJvdW5kUmVxdWVzdHMuc2V0KHJlcXVlc3QucmVxdWVzdElkLCB7XG4gICAgICAgICAgcmVxdWVzdDogcmVxdWVzdCxcbiAgICAgICAgICByZXNvbHZlOiByZXNvbHZlLFxuICAgICAgICAgIHJlamVjdDogcmVqZWN0XG4gICAgICAgIH0pO1xuXG4gICAgICAgIF90aGlzMi5zZW5kSW50ZXJuYWwocmVxdWVzdCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic3RhcnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgdGhpcy5pbmJvdW5kV2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIGZ1bmN0aW9uIChldikge1xuICAgICAgICBfdGhpczMuaGFuZGxlTWVzc2FnZShldik7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuX3JlYWR5ID0gdHJ1ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic3RvcFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdG9wKCkge1xuICAgICAgdGhpcy5fcmVhZHkgPSBmYWxzZTtcbiAgICAgIHRoaXMuc3RvcENvbnRyb2xsZXIuYWJvcnQoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaGFuZGxlTWVzc2FnZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVNZXNzYWdlKGV2KSB7XG4gICAgICBpZiAodGhpcy5zdG9wQ29udHJvbGxlci5zaWduYWwuYWJvcnRlZCkgcmV0dXJuO1xuICAgICAgaWYgKCFldi5kYXRhKSByZXR1cm47IC8vIGludmFsaWQgZXZlbnRcblxuICAgICAgaWYgKHRoaXMuc3RyaWN0T3JpZ2luQ2hlY2sgJiYgZXYub3JpZ2luICE9PSB3aW5kb3cub3JpZ2luKSByZXR1cm47IC8vIGJhZCBvcmlnaW5cbiAgICAgIC8vIHRyZWF0IHRoZSBtZXNzYWdlIGFzIGEgcmVzcG9uc2UgZmlyc3QsIHRoZW4gZG93bmdyYWRlIHRvIGEgcmVxdWVzdFxuXG4gICAgICB2YXIgcmVzcG9uc2UgPSBldi5kYXRhO1xuICAgICAgaWYgKCFyZXNwb25zZS5hY3Rpb24gfHwgIXJlc3BvbnNlLnJlcXVlc3RJZCB8fCAhcmVzcG9uc2Uud2lkZ2V0SWQpIHJldHVybjsgLy8gaW52YWxpZCByZXF1ZXN0L3Jlc3BvbnNlXG5cbiAgICAgIGlmICghcmVzcG9uc2UucmVzcG9uc2UpIHtcbiAgICAgICAgLy8gaXQncyBhIHJlcXVlc3RcbiAgICAgICAgdmFyIHJlcXVlc3QgPSByZXNwb25zZTtcbiAgICAgICAgaWYgKHJlcXVlc3QuYXBpICE9PSAoMCwgXy5pbnZlcnRlZERpcmVjdGlvbikodGhpcy5zZW5kRGlyZWN0aW9uKSkgcmV0dXJuOyAvLyB3cm9uZyBkaXJlY3Rpb25cblxuICAgICAgICB0aGlzLmhhbmRsZVJlcXVlc3QocmVxdWVzdCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBpdCdzIGEgcmVzcG9uc2VcbiAgICAgICAgaWYgKHJlc3BvbnNlLmFwaSAhPT0gdGhpcy5zZW5kRGlyZWN0aW9uKSByZXR1cm47IC8vIHdyb25nIGRpcmVjdGlvblxuXG4gICAgICAgIHRoaXMuaGFuZGxlUmVzcG9uc2UocmVzcG9uc2UpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJoYW5kbGVSZXF1ZXN0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZVJlcXVlc3QocmVxdWVzdCkge1xuICAgICAgaWYgKHRoaXMud2lkZ2V0SWQpIHtcbiAgICAgICAgaWYgKHRoaXMud2lkZ2V0SWQgIT09IHJlcXVlc3Qud2lkZ2V0SWQpIHJldHVybjsgLy8gd3Jvbmcgd2lkZ2V0XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl93aWRnZXRJZCA9IHJlcXVlc3Qud2lkZ2V0SWQ7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZW1pdChcIm1lc3NhZ2VcIiwgbmV3IEN1c3RvbUV2ZW50KFwibWVzc2FnZVwiLCB7XG4gICAgICAgIGRldGFpbDogcmVxdWVzdFxuICAgICAgfSkpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJoYW5kbGVSZXNwb25zZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVSZXNwb25zZShyZXNwb25zZSkge1xuICAgICAgaWYgKHJlc3BvbnNlLndpZGdldElkICE9PSB0aGlzLndpZGdldElkKSByZXR1cm47IC8vIHdyb25nIHdpZGdldFxuXG4gICAgICB2YXIgcmVxID0gdGhpcy5vdXRib3VuZFJlcXVlc3RzLmdldChyZXNwb25zZS5yZXF1ZXN0SWQpO1xuICAgICAgaWYgKCFyZXEpIHJldHVybjsgLy8gcmVzcG9uc2UgdG8gYW4gdW5rbm93biByZXF1ZXN0XG5cbiAgICAgIGlmICgoMCwgXy5pc0Vycm9yUmVzcG9uc2UpKHJlc3BvbnNlLnJlc3BvbnNlKSkge1xuICAgICAgICB2YXIgX2VyciA9IHJlc3BvbnNlLnJlc3BvbnNlO1xuICAgICAgICByZXEucmVqZWN0KG5ldyBFcnJvcihfZXJyLmVycm9yLm1lc3NhZ2UpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlcS5yZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gUG9zdG1lc3NhZ2VUcmFuc3BvcnQ7XG59KF9ldmVudHMuRXZlbnRFbWl0dGVyKTtcblxuZXhwb3J0cy5Qb3N0bWVzc2FnZVRyYW5zcG9ydCA9IFBvc3RtZXNzYWdlVHJhbnNwb3J0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5TaW1wbGVPYnNlcnZhYmxlID0gdm9pZCAwO1xuXG5mdW5jdGlvbiBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlcihvLCBhbGxvd0FycmF5TGlrZSkgeyB2YXIgaXQgPSB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSB8fCBvW1wiQEBpdGVyYXRvclwiXTsgaWYgKCFpdCkgeyBpZiAoQXJyYXkuaXNBcnJheShvKSB8fCAoaXQgPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobykpIHx8IGFsbG93QXJyYXlMaWtlICYmIG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSB7IGlmIChpdCkgbyA9IGl0OyB2YXIgaSA9IDA7IHZhciBGID0gZnVuY3Rpb24gRigpIHt9OyByZXR1cm4geyBzOiBGLCBuOiBmdW5jdGlvbiBuKCkgeyBpZiAoaSA+PSBvLmxlbmd0aCkgcmV0dXJuIHsgZG9uZTogdHJ1ZSB9OyByZXR1cm4geyBkb25lOiBmYWxzZSwgdmFsdWU6IG9baSsrXSB9OyB9LCBlOiBmdW5jdGlvbiBlKF9lKSB7IHRocm93IF9lOyB9LCBmOiBGIH07IH0gdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBpdGVyYXRlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9IHZhciBub3JtYWxDb21wbGV0aW9uID0gdHJ1ZSwgZGlkRXJyID0gZmFsc2UsIGVycjsgcmV0dXJuIHsgczogZnVuY3Rpb24gcygpIHsgaXQgPSBpdC5jYWxsKG8pOyB9LCBuOiBmdW5jdGlvbiBuKCkgeyB2YXIgc3RlcCA9IGl0Lm5leHQoKTsgbm9ybWFsQ29tcGxldGlvbiA9IHN0ZXAuZG9uZTsgcmV0dXJuIHN0ZXA7IH0sIGU6IGZ1bmN0aW9uIGUoX2UyKSB7IGRpZEVyciA9IHRydWU7IGVyciA9IF9lMjsgfSwgZjogZnVuY3Rpb24gZigpIHsgdHJ5IHsgaWYgKCFub3JtYWxDb21wbGV0aW9uICYmIGl0W1wicmV0dXJuXCJdICE9IG51bGwpIGl0W1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChkaWRFcnIpIHRocm93IGVycjsgfSB9IH07IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbi8qXG4gKiBDb3B5cmlnaHQgMjAyMCBUaGUgTWF0cml4Lm9yZyBGb3VuZGF0aW9uIEMuSS5DLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbnZhciBTaW1wbGVPYnNlcnZhYmxlID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gU2ltcGxlT2JzZXJ2YWJsZShpbml0aWFsRm4pIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU2ltcGxlT2JzZXJ2YWJsZSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJsaXN0ZW5lcnNcIiwgW10pO1xuXG4gICAgaWYgKGluaXRpYWxGbikgdGhpcy5saXN0ZW5lcnMucHVzaChpbml0aWFsRm4pO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFNpbXBsZU9ic2VydmFibGUsIFt7XG4gICAga2V5OiBcIm9uVXBkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uVXBkYXRlKGZuKSB7XG4gICAgICB0aGlzLmxpc3RlbmVycy5wdXNoKGZuKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidXBkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZSh2YWwpIHtcbiAgICAgIHZhciBfaXRlcmF0b3IgPSBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlcih0aGlzLmxpc3RlbmVycyksXG4gICAgICAgICAgX3N0ZXA7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGZvciAoX2l0ZXJhdG9yLnMoKTsgIShfc3RlcCA9IF9pdGVyYXRvci5uKCkpLmRvbmU7KSB7XG4gICAgICAgICAgdmFyIGxpc3RlbmVyID0gX3N0ZXAudmFsdWU7XG4gICAgICAgICAgbGlzdGVuZXIodmFsKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIF9pdGVyYXRvci5lKGVycik7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBfaXRlcmF0b3IuZigpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjbG9zZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjbG9zZSgpIHtcbiAgICAgIHRoaXMubGlzdGVuZXJzID0gW107IC8vIHJlc2V0XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFNpbXBsZU9ic2VydmFibGU7XG59KCk7XG5cbmV4cG9ydHMuU2ltcGxlT2JzZXJ2YWJsZSA9IFNpbXBsZU9ic2VydmFibGU7IiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFIgPSB0eXBlb2YgUmVmbGVjdCA9PT0gJ29iamVjdCcgPyBSZWZsZWN0IDogbnVsbFxudmFyIFJlZmxlY3RBcHBseSA9IFIgJiYgdHlwZW9mIFIuYXBwbHkgPT09ICdmdW5jdGlvbidcbiAgPyBSLmFwcGx5XG4gIDogZnVuY3Rpb24gUmVmbGVjdEFwcGx5KHRhcmdldCwgcmVjZWl2ZXIsIGFyZ3MpIHtcbiAgICByZXR1cm4gRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LmNhbGwodGFyZ2V0LCByZWNlaXZlciwgYXJncyk7XG4gIH1cblxudmFyIFJlZmxlY3RPd25LZXlzXG5pZiAoUiAmJiB0eXBlb2YgUi5vd25LZXlzID09PSAnZnVuY3Rpb24nKSB7XG4gIFJlZmxlY3RPd25LZXlzID0gUi5vd25LZXlzXG59IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgUmVmbGVjdE93bktleXMgPSBmdW5jdGlvbiBSZWZsZWN0T3duS2V5cyh0YXJnZXQpIHtcbiAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGFyZ2V0KVxuICAgICAgLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHRhcmdldCkpO1xuICB9O1xufSBlbHNlIHtcbiAgUmVmbGVjdE93bktleXMgPSBmdW5jdGlvbiBSZWZsZWN0T3duS2V5cyh0YXJnZXQpIHtcbiAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGFyZ2V0KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gUHJvY2Vzc0VtaXRXYXJuaW5nKHdhcm5pbmcpIHtcbiAgaWYgKGNvbnNvbGUgJiYgY29uc29sZS53YXJuKSBjb25zb2xlLndhcm4od2FybmluZyk7XG59XG5cbnZhciBOdW1iZXJJc05hTiA9IE51bWJlci5pc05hTiB8fCBmdW5jdGlvbiBOdW1iZXJJc05hTih2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT09IHZhbHVlO1xufVxuXG5mdW5jdGlvbiBFdmVudEVtaXR0ZXIoKSB7XG4gIEV2ZW50RW1pdHRlci5pbml0LmNhbGwodGhpcyk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IEV2ZW50RW1pdHRlcjtcbm1vZHVsZS5leHBvcnRzLm9uY2UgPSBvbmNlO1xuXG4vLyBCYWNrd2FyZHMtY29tcGF0IHdpdGggbm9kZSAwLjEwLnhcbkV2ZW50RW1pdHRlci5FdmVudEVtaXR0ZXIgPSBFdmVudEVtaXR0ZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX2V2ZW50cyA9IHVuZGVmaW5lZDtcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX2V2ZW50c0NvdW50ID0gMDtcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX21heExpc3RlbmVycyA9IHVuZGVmaW5lZDtcblxuLy8gQnkgZGVmYXVsdCBFdmVudEVtaXR0ZXJzIHdpbGwgcHJpbnQgYSB3YXJuaW5nIGlmIG1vcmUgdGhhbiAxMCBsaXN0ZW5lcnMgYXJlXG4vLyBhZGRlZCB0byBpdC4gVGhpcyBpcyBhIHVzZWZ1bCBkZWZhdWx0IHdoaWNoIGhlbHBzIGZpbmRpbmcgbWVtb3J5IGxlYWtzLlxudmFyIGRlZmF1bHRNYXhMaXN0ZW5lcnMgPSAxMDtcblxuZnVuY3Rpb24gY2hlY2tMaXN0ZW5lcihsaXN0ZW5lcikge1xuICBpZiAodHlwZW9mIGxpc3RlbmVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwibGlzdGVuZXJcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRnVuY3Rpb24uIFJlY2VpdmVkIHR5cGUgJyArIHR5cGVvZiBsaXN0ZW5lcik7XG4gIH1cbn1cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KEV2ZW50RW1pdHRlciwgJ2RlZmF1bHRNYXhMaXN0ZW5lcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGRlZmF1bHRNYXhMaXN0ZW5lcnM7XG4gIH0sXG4gIHNldDogZnVuY3Rpb24oYXJnKSB7XG4gICAgaWYgKHR5cGVvZiBhcmcgIT09ICdudW1iZXInIHx8IGFyZyA8IDAgfHwgTnVtYmVySXNOYU4oYXJnKSkge1xuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1RoZSB2YWx1ZSBvZiBcImRlZmF1bHRNYXhMaXN0ZW5lcnNcIiBpcyBvdXQgb2YgcmFuZ2UuIEl0IG11c3QgYmUgYSBub24tbmVnYXRpdmUgbnVtYmVyLiBSZWNlaXZlZCAnICsgYXJnICsgJy4nKTtcbiAgICB9XG4gICAgZGVmYXVsdE1heExpc3RlbmVycyA9IGFyZztcbiAgfVxufSk7XG5cbkV2ZW50RW1pdHRlci5pbml0ID0gZnVuY3Rpb24oKSB7XG5cbiAgaWYgKHRoaXMuX2V2ZW50cyA9PT0gdW5kZWZpbmVkIHx8XG4gICAgICB0aGlzLl9ldmVudHMgPT09IE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKS5fZXZlbnRzKSB7XG4gICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG4gIH1cblxuICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSB0aGlzLl9tYXhMaXN0ZW5lcnMgfHwgdW5kZWZpbmVkO1xufTtcblxuLy8gT2J2aW91c2x5IG5vdCBhbGwgRW1pdHRlcnMgc2hvdWxkIGJlIGxpbWl0ZWQgdG8gMTAuIFRoaXMgZnVuY3Rpb24gYWxsb3dzXG4vLyB0aGF0IHRvIGJlIGluY3JlYXNlZC4gU2V0IHRvIHplcm8gZm9yIHVubGltaXRlZC5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuc2V0TWF4TGlzdGVuZXJzID0gZnVuY3Rpb24gc2V0TWF4TGlzdGVuZXJzKG4pIHtcbiAgaWYgKHR5cGVvZiBuICE9PSAnbnVtYmVyJyB8fCBuIDwgMCB8fCBOdW1iZXJJc05hTihuKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdUaGUgdmFsdWUgb2YgXCJuXCIgaXMgb3V0IG9mIHJhbmdlLiBJdCBtdXN0IGJlIGEgbm9uLW5lZ2F0aXZlIG51bWJlci4gUmVjZWl2ZWQgJyArIG4gKyAnLicpO1xuICB9XG4gIHRoaXMuX21heExpc3RlbmVycyA9IG47XG4gIHJldHVybiB0aGlzO1xufTtcblxuZnVuY3Rpb24gX2dldE1heExpc3RlbmVycyh0aGF0KSB7XG4gIGlmICh0aGF0Ll9tYXhMaXN0ZW5lcnMgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gRXZlbnRFbWl0dGVyLmRlZmF1bHRNYXhMaXN0ZW5lcnM7XG4gIHJldHVybiB0aGF0Ll9tYXhMaXN0ZW5lcnM7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZ2V0TWF4TGlzdGVuZXJzID0gZnVuY3Rpb24gZ2V0TWF4TGlzdGVuZXJzKCkge1xuICByZXR1cm4gX2dldE1heExpc3RlbmVycyh0aGlzKTtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uIGVtaXQodHlwZSkge1xuICB2YXIgYXJncyA9IFtdO1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgYXJncy5wdXNoKGFyZ3VtZW50c1tpXSk7XG4gIHZhciBkb0Vycm9yID0gKHR5cGUgPT09ICdlcnJvcicpO1xuXG4gIHZhciBldmVudHMgPSB0aGlzLl9ldmVudHM7XG4gIGlmIChldmVudHMgIT09IHVuZGVmaW5lZClcbiAgICBkb0Vycm9yID0gKGRvRXJyb3IgJiYgZXZlbnRzLmVycm9yID09PSB1bmRlZmluZWQpO1xuICBlbHNlIGlmICghZG9FcnJvcilcbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgLy8gSWYgdGhlcmUgaXMgbm8gJ2Vycm9yJyBldmVudCBsaXN0ZW5lciB0aGVuIHRocm93LlxuICBpZiAoZG9FcnJvcikge1xuICAgIHZhciBlcjtcbiAgICBpZiAoYXJncy5sZW5ndGggPiAwKVxuICAgICAgZXIgPSBhcmdzWzBdO1xuICAgIGlmIChlciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAvLyBOb3RlOiBUaGUgY29tbWVudHMgb24gdGhlIGB0aHJvd2AgbGluZXMgYXJlIGludGVudGlvbmFsLCB0aGV5IHNob3dcbiAgICAgIC8vIHVwIGluIE5vZGUncyBvdXRwdXQgaWYgdGhpcyByZXN1bHRzIGluIGFuIHVuaGFuZGxlZCBleGNlcHRpb24uXG4gICAgICB0aHJvdyBlcjsgLy8gVW5oYW5kbGVkICdlcnJvcicgZXZlbnRcbiAgICB9XG4gICAgLy8gQXQgbGVhc3QgZ2l2ZSBzb21lIGtpbmQgb2YgY29udGV4dCB0byB0aGUgdXNlclxuICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoJ1VuaGFuZGxlZCBlcnJvci4nICsgKGVyID8gJyAoJyArIGVyLm1lc3NhZ2UgKyAnKScgOiAnJykpO1xuICAgIGVyci5jb250ZXh0ID0gZXI7XG4gICAgdGhyb3cgZXJyOyAvLyBVbmhhbmRsZWQgJ2Vycm9yJyBldmVudFxuICB9XG5cbiAgdmFyIGhhbmRsZXIgPSBldmVudHNbdHlwZV07XG5cbiAgaWYgKGhhbmRsZXIgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgaWYgKHR5cGVvZiBoYW5kbGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgUmVmbGVjdEFwcGx5KGhhbmRsZXIsIHRoaXMsIGFyZ3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBsZW4gPSBoYW5kbGVyLmxlbmd0aDtcbiAgICB2YXIgbGlzdGVuZXJzID0gYXJyYXlDbG9uZShoYW5kbGVyLCBsZW4pO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpXG4gICAgICBSZWZsZWN0QXBwbHkobGlzdGVuZXJzW2ldLCB0aGlzLCBhcmdzKTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxuZnVuY3Rpb24gX2FkZExpc3RlbmVyKHRhcmdldCwgdHlwZSwgbGlzdGVuZXIsIHByZXBlbmQpIHtcbiAgdmFyIG07XG4gIHZhciBldmVudHM7XG4gIHZhciBleGlzdGluZztcblxuICBjaGVja0xpc3RlbmVyKGxpc3RlbmVyKTtcblxuICBldmVudHMgPSB0YXJnZXQuX2V2ZW50cztcbiAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHRhcmdldC5fZXZlbnRzQ291bnQgPSAwO1xuICB9IGVsc2Uge1xuICAgIC8vIFRvIGF2b2lkIHJlY3Vyc2lvbiBpbiB0aGUgY2FzZSB0aGF0IHR5cGUgPT09IFwibmV3TGlzdGVuZXJcIiEgQmVmb3JlXG4gICAgLy8gYWRkaW5nIGl0IHRvIHRoZSBsaXN0ZW5lcnMsIGZpcnN0IGVtaXQgXCJuZXdMaXN0ZW5lclwiLlxuICAgIGlmIChldmVudHMubmV3TGlzdGVuZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGFyZ2V0LmVtaXQoJ25ld0xpc3RlbmVyJywgdHlwZSxcbiAgICAgICAgICAgICAgICAgIGxpc3RlbmVyLmxpc3RlbmVyID8gbGlzdGVuZXIubGlzdGVuZXIgOiBsaXN0ZW5lcik7XG5cbiAgICAgIC8vIFJlLWFzc2lnbiBgZXZlbnRzYCBiZWNhdXNlIGEgbmV3TGlzdGVuZXIgaGFuZGxlciBjb3VsZCBoYXZlIGNhdXNlZCB0aGVcbiAgICAgIC8vIHRoaXMuX2V2ZW50cyB0byBiZSBhc3NpZ25lZCB0byBhIG5ldyBvYmplY3RcbiAgICAgIGV2ZW50cyA9IHRhcmdldC5fZXZlbnRzO1xuICAgIH1cbiAgICBleGlzdGluZyA9IGV2ZW50c1t0eXBlXTtcbiAgfVxuXG4gIGlmIChleGlzdGluZyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgLy8gT3B0aW1pemUgdGhlIGNhc2Ugb2Ygb25lIGxpc3RlbmVyLiBEb24ndCBuZWVkIHRoZSBleHRyYSBhcnJheSBvYmplY3QuXG4gICAgZXhpc3RpbmcgPSBldmVudHNbdHlwZV0gPSBsaXN0ZW5lcjtcbiAgICArK3RhcmdldC5fZXZlbnRzQ291bnQ7XG4gIH0gZWxzZSB7XG4gICAgaWYgKHR5cGVvZiBleGlzdGluZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8gQWRkaW5nIHRoZSBzZWNvbmQgZWxlbWVudCwgbmVlZCB0byBjaGFuZ2UgdG8gYXJyYXkuXG4gICAgICBleGlzdGluZyA9IGV2ZW50c1t0eXBlXSA9XG4gICAgICAgIHByZXBlbmQgPyBbbGlzdGVuZXIsIGV4aXN0aW5nXSA6IFtleGlzdGluZywgbGlzdGVuZXJdO1xuICAgICAgLy8gSWYgd2UndmUgYWxyZWFkeSBnb3QgYW4gYXJyYXksIGp1c3QgYXBwZW5kLlxuICAgIH0gZWxzZSBpZiAocHJlcGVuZCkge1xuICAgICAgZXhpc3RpbmcudW5zaGlmdChsaXN0ZW5lcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGV4aXN0aW5nLnB1c2gobGlzdGVuZXIpO1xuICAgIH1cblxuICAgIC8vIENoZWNrIGZvciBsaXN0ZW5lciBsZWFrXG4gICAgbSA9IF9nZXRNYXhMaXN0ZW5lcnModGFyZ2V0KTtcbiAgICBpZiAobSA+IDAgJiYgZXhpc3RpbmcubGVuZ3RoID4gbSAmJiAhZXhpc3Rpbmcud2FybmVkKSB7XG4gICAgICBleGlzdGluZy53YXJuZWQgPSB0cnVlO1xuICAgICAgLy8gTm8gZXJyb3IgY29kZSBmb3IgdGhpcyBzaW5jZSBpdCBpcyBhIFdhcm5pbmdcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxuICAgICAgdmFyIHcgPSBuZXcgRXJyb3IoJ1Bvc3NpYmxlIEV2ZW50RW1pdHRlciBtZW1vcnkgbGVhayBkZXRlY3RlZC4gJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nLmxlbmd0aCArICcgJyArIFN0cmluZyh0eXBlKSArICcgbGlzdGVuZXJzICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAnYWRkZWQuIFVzZSBlbWl0dGVyLnNldE1heExpc3RlbmVycygpIHRvICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAnaW5jcmVhc2UgbGltaXQnKTtcbiAgICAgIHcubmFtZSA9ICdNYXhMaXN0ZW5lcnNFeGNlZWRlZFdhcm5pbmcnO1xuICAgICAgdy5lbWl0dGVyID0gdGFyZ2V0O1xuICAgICAgdy50eXBlID0gdHlwZTtcbiAgICAgIHcuY291bnQgPSBleGlzdGluZy5sZW5ndGg7XG4gICAgICBQcm9jZXNzRW1pdFdhcm5pbmcodyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lciA9IGZ1bmN0aW9uIGFkZExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gIHJldHVybiBfYWRkTGlzdGVuZXIodGhpcywgdHlwZSwgbGlzdGVuZXIsIGZhbHNlKTtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub24gPSBFdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnByZXBlbmRMaXN0ZW5lciA9XG4gICAgZnVuY3Rpb24gcHJlcGVuZExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgICByZXR1cm4gX2FkZExpc3RlbmVyKHRoaXMsIHR5cGUsIGxpc3RlbmVyLCB0cnVlKTtcbiAgICB9O1xuXG5mdW5jdGlvbiBvbmNlV3JhcHBlcigpIHtcbiAgaWYgKCF0aGlzLmZpcmVkKSB7XG4gICAgdGhpcy50YXJnZXQucmVtb3ZlTGlzdGVuZXIodGhpcy50eXBlLCB0aGlzLndyYXBGbik7XG4gICAgdGhpcy5maXJlZCA9IHRydWU7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApXG4gICAgICByZXR1cm4gdGhpcy5saXN0ZW5lci5jYWxsKHRoaXMudGFyZ2V0KTtcbiAgICByZXR1cm4gdGhpcy5saXN0ZW5lci5hcHBseSh0aGlzLnRhcmdldCwgYXJndW1lbnRzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfb25jZVdyYXAodGFyZ2V0LCB0eXBlLCBsaXN0ZW5lcikge1xuICB2YXIgc3RhdGUgPSB7IGZpcmVkOiBmYWxzZSwgd3JhcEZuOiB1bmRlZmluZWQsIHRhcmdldDogdGFyZ2V0LCB0eXBlOiB0eXBlLCBsaXN0ZW5lcjogbGlzdGVuZXIgfTtcbiAgdmFyIHdyYXBwZWQgPSBvbmNlV3JhcHBlci5iaW5kKHN0YXRlKTtcbiAgd3JhcHBlZC5saXN0ZW5lciA9IGxpc3RlbmVyO1xuICBzdGF0ZS53cmFwRm4gPSB3cmFwcGVkO1xuICByZXR1cm4gd3JhcHBlZDtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24gb25jZSh0eXBlLCBsaXN0ZW5lcikge1xuICBjaGVja0xpc3RlbmVyKGxpc3RlbmVyKTtcbiAgdGhpcy5vbih0eXBlLCBfb25jZVdyYXAodGhpcywgdHlwZSwgbGlzdGVuZXIpKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnByZXBlbmRPbmNlTGlzdGVuZXIgPVxuICAgIGZ1bmN0aW9uIHByZXBlbmRPbmNlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgICAgIGNoZWNrTGlzdGVuZXIobGlzdGVuZXIpO1xuICAgICAgdGhpcy5wcmVwZW5kTGlzdGVuZXIodHlwZSwgX29uY2VXcmFwKHRoaXMsIHR5cGUsIGxpc3RlbmVyKSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4vLyBFbWl0cyBhICdyZW1vdmVMaXN0ZW5lcicgZXZlbnQgaWYgYW5kIG9ubHkgaWYgdGhlIGxpc3RlbmVyIHdhcyByZW1vdmVkLlxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lciA9XG4gICAgZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgICAgIHZhciBsaXN0LCBldmVudHMsIHBvc2l0aW9uLCBpLCBvcmlnaW5hbExpc3RlbmVyO1xuXG4gICAgICBjaGVja0xpc3RlbmVyKGxpc3RlbmVyKTtcblxuICAgICAgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuICAgICAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgbGlzdCA9IGV2ZW50c1t0eXBlXTtcbiAgICAgIGlmIChsaXN0ID09PSB1bmRlZmluZWQpXG4gICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICBpZiAobGlzdCA9PT0gbGlzdGVuZXIgfHwgbGlzdC5saXN0ZW5lciA9PT0gbGlzdGVuZXIpIHtcbiAgICAgICAgaWYgKC0tdGhpcy5fZXZlbnRzQ291bnQgPT09IDApXG4gICAgICAgICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgZGVsZXRlIGV2ZW50c1t0eXBlXTtcbiAgICAgICAgICBpZiAoZXZlbnRzLnJlbW92ZUxpc3RlbmVyKVxuICAgICAgICAgICAgdGhpcy5lbWl0KCdyZW1vdmVMaXN0ZW5lcicsIHR5cGUsIGxpc3QubGlzdGVuZXIgfHwgbGlzdGVuZXIpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBsaXN0ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHBvc2l0aW9uID0gLTE7XG5cbiAgICAgICAgZm9yIChpID0gbGlzdC5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgIGlmIChsaXN0W2ldID09PSBsaXN0ZW5lciB8fCBsaXN0W2ldLmxpc3RlbmVyID09PSBsaXN0ZW5lcikge1xuICAgICAgICAgICAgb3JpZ2luYWxMaXN0ZW5lciA9IGxpc3RbaV0ubGlzdGVuZXI7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IGk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocG9zaXRpb24gPCAwKVxuICAgICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICAgIGlmIChwb3NpdGlvbiA9PT0gMClcbiAgICAgICAgICBsaXN0LnNoaWZ0KCk7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHNwbGljZU9uZShsaXN0LCBwb3NpdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobGlzdC5sZW5ndGggPT09IDEpXG4gICAgICAgICAgZXZlbnRzW3R5cGVdID0gbGlzdFswXTtcblxuICAgICAgICBpZiAoZXZlbnRzLnJlbW92ZUxpc3RlbmVyICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgdGhpcy5lbWl0KCdyZW1vdmVMaXN0ZW5lcicsIHR5cGUsIG9yaWdpbmFsTGlzdGVuZXIgfHwgbGlzdGVuZXIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9mZiA9IEV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlQWxsTGlzdGVuZXJzID1cbiAgICBmdW5jdGlvbiByZW1vdmVBbGxMaXN0ZW5lcnModHlwZSkge1xuICAgICAgdmFyIGxpc3RlbmVycywgZXZlbnRzLCBpO1xuXG4gICAgICBldmVudHMgPSB0aGlzLl9ldmVudHM7XG4gICAgICBpZiAoZXZlbnRzID09PSB1bmRlZmluZWQpXG4gICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICAvLyBub3QgbGlzdGVuaW5nIGZvciByZW1vdmVMaXN0ZW5lciwgbm8gbmVlZCB0byBlbWl0XG4gICAgICBpZiAoZXZlbnRzLnJlbW92ZUxpc3RlbmVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICAgIHRoaXMuX2V2ZW50c0NvdW50ID0gMDtcbiAgICAgICAgfSBlbHNlIGlmIChldmVudHNbdHlwZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGlmICgtLXRoaXMuX2V2ZW50c0NvdW50ID09PSAwKVxuICAgICAgICAgICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICBkZWxldGUgZXZlbnRzW3R5cGVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICAvLyBlbWl0IHJlbW92ZUxpc3RlbmVyIGZvciBhbGwgbGlzdGVuZXJzIG9uIGFsbCBldmVudHNcbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZXZlbnRzKTtcbiAgICAgICAgdmFyIGtleTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICBrZXkgPSBrZXlzW2ldO1xuICAgICAgICAgIGlmIChrZXkgPT09ICdyZW1vdmVMaXN0ZW5lcicpIGNvbnRpbnVlO1xuICAgICAgICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoJ3JlbW92ZUxpc3RlbmVyJyk7XG4gICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHRoaXMuX2V2ZW50c0NvdW50ID0gMDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIGxpc3RlbmVycyA9IGV2ZW50c1t0eXBlXTtcblxuICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lcnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcnMpO1xuICAgICAgfSBlbHNlIGlmIChsaXN0ZW5lcnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAvLyBMSUZPIG9yZGVyXG4gICAgICAgIGZvciAoaSA9IGxpc3RlbmVycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXJzW2ldKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG5mdW5jdGlvbiBfbGlzdGVuZXJzKHRhcmdldCwgdHlwZSwgdW53cmFwKSB7XG4gIHZhciBldmVudHMgPSB0YXJnZXQuX2V2ZW50cztcblxuICBpZiAoZXZlbnRzID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIFtdO1xuXG4gIHZhciBldmxpc3RlbmVyID0gZXZlbnRzW3R5cGVdO1xuICBpZiAoZXZsaXN0ZW5lciA9PT0gdW5kZWZpbmVkKVxuICAgIHJldHVybiBbXTtcblxuICBpZiAodHlwZW9mIGV2bGlzdGVuZXIgPT09ICdmdW5jdGlvbicpXG4gICAgcmV0dXJuIHVud3JhcCA/IFtldmxpc3RlbmVyLmxpc3RlbmVyIHx8IGV2bGlzdGVuZXJdIDogW2V2bGlzdGVuZXJdO1xuXG4gIHJldHVybiB1bndyYXAgP1xuICAgIHVud3JhcExpc3RlbmVycyhldmxpc3RlbmVyKSA6IGFycmF5Q2xvbmUoZXZsaXN0ZW5lciwgZXZsaXN0ZW5lci5sZW5ndGgpO1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVycyA9IGZ1bmN0aW9uIGxpc3RlbmVycyh0eXBlKSB7XG4gIHJldHVybiBfbGlzdGVuZXJzKHRoaXMsIHR5cGUsIHRydWUpO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yYXdMaXN0ZW5lcnMgPSBmdW5jdGlvbiByYXdMaXN0ZW5lcnModHlwZSkge1xuICByZXR1cm4gX2xpc3RlbmVycyh0aGlzLCB0eXBlLCBmYWxzZSk7XG59O1xuXG5FdmVudEVtaXR0ZXIubGlzdGVuZXJDb3VudCA9IGZ1bmN0aW9uKGVtaXR0ZXIsIHR5cGUpIHtcbiAgaWYgKHR5cGVvZiBlbWl0dGVyLmxpc3RlbmVyQ291bnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gZW1pdHRlci5saXN0ZW5lckNvdW50KHR5cGUpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBsaXN0ZW5lckNvdW50LmNhbGwoZW1pdHRlciwgdHlwZSk7XG4gIH1cbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJDb3VudCA9IGxpc3RlbmVyQ291bnQ7XG5mdW5jdGlvbiBsaXN0ZW5lckNvdW50KHR5cGUpIHtcbiAgdmFyIGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcblxuICBpZiAoZXZlbnRzICE9PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgZXZsaXN0ZW5lciA9IGV2ZW50c1t0eXBlXTtcblxuICAgIGlmICh0eXBlb2YgZXZsaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfSBlbHNlIGlmIChldmxpc3RlbmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBldmxpc3RlbmVyLmxlbmd0aDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gMDtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5ldmVudE5hbWVzID0gZnVuY3Rpb24gZXZlbnROYW1lcygpIHtcbiAgcmV0dXJuIHRoaXMuX2V2ZW50c0NvdW50ID4gMCA/IFJlZmxlY3RPd25LZXlzKHRoaXMuX2V2ZW50cykgOiBbXTtcbn07XG5cbmZ1bmN0aW9uIGFycmF5Q2xvbmUoYXJyLCBuKSB7XG4gIHZhciBjb3B5ID0gbmV3IEFycmF5KG4pO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IG47ICsraSlcbiAgICBjb3B5W2ldID0gYXJyW2ldO1xuICByZXR1cm4gY29weTtcbn1cblxuZnVuY3Rpb24gc3BsaWNlT25lKGxpc3QsIGluZGV4KSB7XG4gIGZvciAoOyBpbmRleCArIDEgPCBsaXN0Lmxlbmd0aDsgaW5kZXgrKylcbiAgICBsaXN0W2luZGV4XSA9IGxpc3RbaW5kZXggKyAxXTtcbiAgbGlzdC5wb3AoKTtcbn1cblxuZnVuY3Rpb24gdW53cmFwTGlzdGVuZXJzKGFycikge1xuICB2YXIgcmV0ID0gbmV3IEFycmF5KGFyci5sZW5ndGgpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHJldC5sZW5ndGg7ICsraSkge1xuICAgIHJldFtpXSA9IGFycltpXS5saXN0ZW5lciB8fCBhcnJbaV07XG4gIH1cbiAgcmV0dXJuIHJldDtcbn1cblxuZnVuY3Rpb24gb25jZShlbWl0dGVyLCBuYW1lKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgZnVuY3Rpb24gZXJyb3JMaXN0ZW5lcihlcnIpIHtcbiAgICAgIGVtaXR0ZXIucmVtb3ZlTGlzdGVuZXIobmFtZSwgcmVzb2x2ZXIpO1xuICAgICAgcmVqZWN0KGVycik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVzb2x2ZXIoKSB7XG4gICAgICBpZiAodHlwZW9mIGVtaXR0ZXIucmVtb3ZlTGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgZW1pdHRlci5yZW1vdmVMaXN0ZW5lcignZXJyb3InLCBlcnJvckxpc3RlbmVyKTtcbiAgICAgIH1cbiAgICAgIHJlc29sdmUoW10uc2xpY2UuY2FsbChhcmd1bWVudHMpKTtcbiAgICB9O1xuXG4gICAgZXZlbnRUYXJnZXRBZ25vc3RpY0FkZExpc3RlbmVyKGVtaXR0ZXIsIG5hbWUsIHJlc29sdmVyLCB7IG9uY2U6IHRydWUgfSk7XG4gICAgaWYgKG5hbWUgIT09ICdlcnJvcicpIHtcbiAgICAgIGFkZEVycm9ySGFuZGxlcklmRXZlbnRFbWl0dGVyKGVtaXR0ZXIsIGVycm9yTGlzdGVuZXIsIHsgb25jZTogdHJ1ZSB9KTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRFcnJvckhhbmRsZXJJZkV2ZW50RW1pdHRlcihlbWl0dGVyLCBoYW5kbGVyLCBmbGFncykge1xuICBpZiAodHlwZW9mIGVtaXR0ZXIub24gPT09ICdmdW5jdGlvbicpIHtcbiAgICBldmVudFRhcmdldEFnbm9zdGljQWRkTGlzdGVuZXIoZW1pdHRlciwgJ2Vycm9yJywgaGFuZGxlciwgZmxhZ3MpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGV2ZW50VGFyZ2V0QWdub3N0aWNBZGRMaXN0ZW5lcihlbWl0dGVyLCBuYW1lLCBsaXN0ZW5lciwgZmxhZ3MpIHtcbiAgaWYgKHR5cGVvZiBlbWl0dGVyLm9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgaWYgKGZsYWdzLm9uY2UpIHtcbiAgICAgIGVtaXR0ZXIub25jZShuYW1lLCBsaXN0ZW5lcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVtaXR0ZXIub24obmFtZSwgbGlzdGVuZXIpO1xuICAgIH1cbiAgfSBlbHNlIGlmICh0eXBlb2YgZW1pdHRlci5hZGRFdmVudExpc3RlbmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gRXZlbnRUYXJnZXQgZG9lcyBub3QgaGF2ZSBgZXJyb3JgIGV2ZW50IHNlbWFudGljcyBsaWtlIE5vZGVcbiAgICAvLyBFdmVudEVtaXR0ZXJzLCB3ZSBkbyBub3QgbGlzdGVuIGZvciBgZXJyb3JgIGV2ZW50cyBoZXJlLlxuICAgIGVtaXR0ZXIuYWRkRXZlbnRMaXN0ZW5lcihuYW1lLCBmdW5jdGlvbiB3cmFwTGlzdGVuZXIoYXJnKSB7XG4gICAgICAvLyBJRSBkb2VzIG5vdCBoYXZlIGJ1aWx0aW4gYHsgb25jZTogdHJ1ZSB9YCBzdXBwb3J0IHNvIHdlXG4gICAgICAvLyBoYXZlIHRvIGRvIGl0IG1hbnVhbGx5LlxuICAgICAgaWYgKGZsYWdzLm9uY2UpIHtcbiAgICAgICAgZW1pdHRlci5yZW1vdmVFdmVudExpc3RlbmVyKG5hbWUsIHdyYXBMaXN0ZW5lcik7XG4gICAgICB9XG4gICAgICBsaXN0ZW5lcihhcmcpO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBcImVtaXR0ZXJcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRXZlbnRFbWl0dGVyLiBSZWNlaXZlZCB0eXBlICcgKyB0eXBlb2YgZW1pdHRlcik7XG4gIH1cbn1cbiJdfQ==
