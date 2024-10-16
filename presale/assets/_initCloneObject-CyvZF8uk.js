import {
    o as r,
    r as t,
    s as e,
    v as n
} from "./index-Citk0ABi.js";
import {
    q as o,
    r as u,
    s as a,
    t as s,
    v as f
} from "./index-D4R9Vjdp.js";
var c = Object.create,
    i = function() {
        function t() {}
        return function(e) {
            if (!r(e)) return {};
            if (c) return c(e);
            t.prototype = e;
            var n = new t;
            return t.prototype = void 0, n
        }
    }();

function p(r, t) {
    var e = -1,
        n = r.length;
    for (t || (t = Array(n)); ++e < n;) t[e] = r[e];
    return t
}

function v(r, n, o, u) {
    var a = !o;
    o || (o = {});
    for (var s = -1, f = n.length; ++s < f;) {
        var c = n[s],
            i = void 0;
        void 0 === i && (i = r[c]), a ? t(o, c, i) : e(o, c, i)
    }
    return o
}
var d = Object.prototype.hasOwnProperty;

function l(t) {
    if (!r(t)) return function(r) {
        var t = [];
        if (null != r)
            for (var e in Object(r)) t.push(e);
        return t
    }(t);
    var e = o(t),
        n = [];
    for (var u in t)("constructor" != u || !e && d.call(t, u)) && n.push(u);
    return n
}

function y(r) {
    return u(r) ? a(r, !0) : l(r)
}
var b = s(Object.getPrototypeOf, Object),
    j = "object" == typeof exports && exports && !exports.nodeType && exports,
    h = j && "object" == typeof module && module && !module.nodeType && module,
    m = h && h.exports === j ? n.Buffer : void 0,
    x = m ? m.allocUnsafe : void 0;

function O(r, t) {
    if (t) return r.slice();
    var e = r.length,
        n = x ? x(e) : new r.constructor(e);
    return r.copy(n), n
}

function g(r) {
    var t = new r.constructor(r.byteLength);
    return new f(t).set(new f(r)), t
}

function w(r, t) {
    var e = t ? g(r.buffer) : r.buffer;
    return new r.constructor(e, r.byteOffset, r.length)
}

function P(r) {
    return "function" != typeof r.constructor || o(r) ? {} : i(b(r))
}
export {
    g as a, w as b, v as c, p as d, O as e, b as g, P as i, y as k
};