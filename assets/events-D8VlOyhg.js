import {
    H as e
} from "./index-jdACH0Rc.js";
var t, n = {
        exports: {}
    },
    r = "object" == typeof Reflect ? Reflect : null,
    i = r && "function" == typeof r.apply ? r.apply : function(e, t, n) {
        return Function.prototype.apply.call(e, t, n)
    };
t = r && "function" == typeof r.ownKeys ? r.ownKeys : Object.getOwnPropertySymbols ? function(e) {
    return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
} : function(e) {
    return Object.getOwnPropertyNames(e)
};
var o = Number.isNaN || function(e) {
    return e != e
};

function s() {
    s.init.call(this)
}
n.exports = s, n.exports.once = function(e, t) {
    return new Promise((function(n, r) {
        function i(n) {
            e.removeListener(t, o), r(n)
        }

        function o() {
            "function" == typeof e.removeListener && e.removeListener("error", i), n([].slice.call(arguments))
        }
        d(e, t, o, {
            once: !0
        }), "error" !== t && function(e, t, n) {
            "function" == typeof e.on && d(e, "error", t, n)
        }(e, i, {
            once: !0
        })
    }))
}, s.EventEmitter = s, s.prototype._events = void 0, s.prototype._eventsCount = 0, s.prototype._maxListeners = void 0;
var u = 10;

function f(e) {
    if ("function" != typeof e) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e)
}

function c(e) {
    return void 0 === e._maxListeners ? s.defaultMaxListeners : e._maxListeners
}

function v(e, t, n, r) {
    var i, o, s, u;
    if (f(n), void 0 === (o = e._events) ? (o = e._events = Object.create(null), e._eventsCount = 0) : (void 0 !== o.newListener && (e.emit("newListener", t, n.listener ? n.listener : n), o = e._events), s = o[t]), void 0 === s) s = o[t] = n, ++e._eventsCount;
    else if ("function" == typeof s ? s = o[t] = r ? [n, s] : [s, n] : r ? s.unshift(n) : s.push(n), (i = c(e)) > 0 && s.length > i && !s.warned) {
        s.warned = !0;
        var v = new Error("Possible EventEmitter memory leak detected. " + s.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
        v.name = "MaxListenersExceededWarning", v.emitter = e, v.type = t, v.count = s.length, u = v, console && console.warn && console.warn(u)
    }
    return e
}

function p() {
    if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
}

function a(e, t, n) {
    var r = {
            fired: !1,
            wrapFn: void 0,
            target: e,
            type: t,
            listener: n
        },
        i = p.bind(r);
    return i.listener = n, r.wrapFn = i, i
}

function l(e, t, n) {
    var r = e._events;
    if (void 0 === r) return [];
    var i = r[t];
    return void 0 === i ? [] : "function" == typeof i ? n ? [i.listener || i] : [i] : n ? function(e) {
        for (var t = new Array(e.length), n = 0; n < t.length; ++n) t[n] = e[n].listener || e[n];
        return t
    }(i) : y(i, i.length)
}

function h(e) {
    var t = this._events;
    if (void 0 !== t) {
        var n = t[e];
        if ("function" == typeof n) return 1;
        if (void 0 !== n) return n.length
    }
    return 0
}

function y(e, t) {
    for (var n = new Array(t), r = 0; r < t; ++r) n[r] = e[r];
    return n
}

function d(e, t, n, r) {
    if ("function" == typeof e.on) r.once ? e.once(t, n) : e.on(t, n);
    else {
        if ("function" != typeof e.addEventListener) throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e);
        e.addEventListener(t, (function i(o) {
            r.once && e.removeEventListener(t, i), n(o)
        }))
    }
}
Object.defineProperty(s, "defaultMaxListeners", {
    enumerable: !0,
    get: function() {
        return u
    },
    set: function(e) {
        if ("number" != typeof e || e < 0 || o(e)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
        u = e
    }
}), s.init = function() {
    void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
}, s.prototype.setMaxListeners = function(e) {
    if ("number" != typeof e || e < 0 || o(e)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
    return this._maxListeners = e, this
}, s.prototype.getMaxListeners = function() {
    return c(this)
}, s.prototype.emit = function(e) {
    for (var t = [], n = 1; n < arguments.length; n++) t.push(arguments[n]);
    var r = "error" === e,
        o = this._events;
    if (void 0 !== o) r = r && void 0 === o.error;
    else if (!r) return !1;
    if (r) {
        var s;
        if (t.length > 0 && (s = t[0]), s instanceof Error) throw s;
        var u = new Error("Unhandled error." + (s ? " (" + s.message + ")" : ""));
        throw u.context = s, u
    }
    var f = o[e];
    if (void 0 === f) return !1;
    if ("function" == typeof f) i(f, this, t);
    else {
        var c = f.length,
            v = y(f, c);
        for (n = 0; n < c; ++n) i(v[n], this, t)
    }
    return !0
}, s.prototype.addListener = function(e, t) {
    return v(this, e, t, !1)
}, s.prototype.on = s.prototype.addListener, s.prototype.prependListener = function(e, t) {
    return v(this, e, t, !0)
}, s.prototype.once = function(e, t) {
    return f(t), this.on(e, a(this, e, t)), this
}, s.prototype.prependOnceListener = function(e, t) {
    return f(t), this.prependListener(e, a(this, e, t)), this
}, s.prototype.removeListener = function(e, t) {
    var n, r, i, o, s;
    if (f(t), void 0 === (r = this._events)) return this;
    if (void 0 === (n = r[e])) return this;
    if (n === t || n.listener === t) 0 == --this._eventsCount ? this._events = Object.create(null) : (delete r[e], r.removeListener && this.emit("removeListener", e, n.listener || t));
    else if ("function" != typeof n) {
        for (i = -1, o = n.length - 1; o >= 0; o--)
            if (n[o] === t || n[o].listener === t) {
                s = n[o].listener, i = o;
                break
            }
        if (i < 0) return this;
        0 === i ? n.shift() : function(e, t) {
            for (; t + 1 < e.length; t++) e[t] = e[t + 1];
            e.pop()
        }(n, i), 1 === n.length && (r[e] = n[0]), void 0 !== r.removeListener && this.emit("removeListener", e, s || t)
    }
    return this
}, s.prototype.off = s.prototype.removeListener, s.prototype.removeAllListeners = function(e) {
    var t, n, r;
    if (void 0 === (n = this._events)) return this;
    if (void 0 === n.removeListener) return 0 === arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : void 0 !== n[e] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete n[e]), this;
    if (0 === arguments.length) {
        var i, o = Object.keys(n);
        for (r = 0; r < o.length; ++r) "removeListener" !== (i = o[r]) && this.removeAllListeners(i);
        return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this
    }
    if ("function" == typeof(t = n[e])) this.removeListener(e, t);
    else if (void 0 !== t)
        for (r = t.length - 1; r >= 0; r--) this.removeListener(e, t[r]);
    return this
}, s.prototype.listeners = function(e) {
    return l(this, e, !0)
}, s.prototype.rawListeners = function(e) {
    return l(this, e, !1)
}, s.listenerCount = function(e, t) {
    return "function" == typeof e.listenerCount ? e.listenerCount(t) : h.call(e, t)
}, s.prototype.listenerCount = h, s.prototype.eventNames = function() {
    return this._eventsCount > 0 ? t(this._events) : []
};
var m = n.exports;
const L = e(m);
export {
    L as B, m as e
};