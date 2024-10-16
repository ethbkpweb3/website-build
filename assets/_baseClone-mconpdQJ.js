import {F as e, G as t, H as r, J as a, K as n, L as o, M as c, N as s, O as b, P as i} from "./index-D4R9Vjdp.js";
import {D as u, S as j, i as f, o as y, G as l, s as p} from "./index-Citk0ABi.js";
import {c as A, k as v, g as d, a as m, b as g, d as w, e as x, i as O} from "./_initCloneObject-CyvZF8uk.js";
var S = Object.getOwnPropertySymbols ? function(e) {
    for (var r = []; e; )
        u(r, t(e)),
        e = d(e);
    return r
}
: r;
function I(e) {
    return a(e, v, S)
}
var U = Object.prototype.hasOwnProperty;
var h = /\w*$/;
var F = j ? j.prototype : void 0
  , M = F ? F.valueOf : void 0;
function D(e, t, r) {
    var a, n, o, c = e.constructor;
    switch (t) {
    case "[object ArrayBuffer]":
        return m(e);
    case "[object Boolean]":
    case "[object Date]":
        return new c(+e);
    case "[object DataView]":
        return function(e, t) {
            var r = t ? m(e.buffer) : e.buffer;
            return new e.constructor(r,e.byteOffset,e.byteLength)
        }(e, r);
    case "[object Float32Array]":
    case "[object Float64Array]":
    case "[object Int8Array]":
    case "[object Int16Array]":
    case "[object Int32Array]":
    case "[object Uint8Array]":
    case "[object Uint8ClampedArray]":
    case "[object Uint16Array]":
    case "[object Uint32Array]":
        return g(e, r);
    case "[object Map]":
    case "[object Set]":
        return new c;
    case "[object Number]":
    case "[object String]":
        return new c(e);
    case "[object RegExp]":
        return (o = new (n = e).constructor(n.source,h.exec(n))).lastIndex = n.lastIndex,
        o;
    case "[object Symbol]":
        return a = e,
        M ? Object(M.call(a)) : {}
    }
}
var E = o && o.isMap
  , B = E ? c(E) : function(e) {
    return f(e) && "[object Map]" == n(e)
}
;
var G = o && o.isSet
  , C = G ? c(G) : function(e) {
    return f(e) && "[object Set]" == n(e)
}
  , N = "[object Arguments]"
  , P = "[object Function]"
  , k = "[object Object]"
  , L = {};
function R(r, a, o, c, u, j) {
    var f, d = 1 & a, m = 2 & a, g = 4 & a;
    if (o && (f = u ? o(r, c, u, j) : o(r)),
    void 0 !== f)
        return f;
    if (!y(r))
        return r;
    var h = l(r);
    if (h) {
        if (f = function(e) {
            var t = e.length
              , r = new e.constructor(t);
            return t && "string" == typeof e[0] && U.call(e, "index") && (r.index = e.index,
            r.input = e.input),
            r
        }(r),
        !d)
            return w(r, f)
    } else {
        var F = n(r)
          , M = F == P || "[object GeneratorFunction]" == F;
        if (s(r))
            return x(r, d);
        if (F == k || F == N || M && !u) {
            if (f = m || M ? {} : O(r),
            !d)
                return m ? function(e, t) {
                    return A(e, S(e), t)
                }(r, function(e, t) {
                    return e && A(t, v(t), e)
                }(f, r)) : function(e, r) {
                    return A(e, t(e), r)
                }(r, function(t, r) {
                    return t && A(r, e(r), t)
                }(f, r))
        } else {
            if (!L[F])
                return u ? r : {};
            f = D(r, F, d)
        }
    }
    j || (j = new b);
    var E = j.get(r);
    if (E)
        return E;
    j.set(r, f),
    C(r) ? r.forEach((function(e) {
        f.add(R(e, a, o, e, r, j))
    }
    )) : B(r) && r.forEach((function(e, t) {
        f.set(t, R(e, a, o, t, r, j))
    }
    ));
    var G = h ? void 0 : (g ? m ? I : i : m ? v : e)(r);
    return function(e, t) {
        for (var r = -1, a = null == e ? 0 : e.length; ++r < a && !1 !== t(e[r], r, e); )
            ;
    }(G || r, (function(e, t) {
        G && (e = r[t = e]),
        p(f, t, R(e, a, o, t, r, j))
    }
    )),
    f
}
L[N] = L["[object Array]"] = L["[object ArrayBuffer]"] = L["[object DataView]"] = L["[object Boolean]"] = L["[object Date]"] = L["[object Float32Array]"] = L["[object Float64Array]"] = L["[object Int8Array]"] = L["[object Int16Array]"] = L["[object Int32Array]"] = L["[object Map]"] = L["[object Number]"] = L[k] = L["[object RegExp]"] = L["[object Set]"] = L["[object String]"] = L["[object Symbol]"] = L["[object Uint8Array]"] = L["[object Uint8ClampedArray]"] = L["[object Uint16Array]"] = L["[object Uint32Array]"] = !0,
L["[object Error]"] = L[P] = L["[object WeakMap]"] = !1;
export {R as b, I as g};
