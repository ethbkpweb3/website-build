import {H as t, I as e, J as n, K as o, L as l, g as r, a as i, M as a, u as s, h as u, C as c} from "./index-jFhAlE56.js";
import {b as f, d, f as p, _ as v, e as h, i as m, E as g, w as y, F as w} from "./index-DXzVhuRT.js";
import {y as x, I as b, B as R, C as k, h as C, ds as E, J as $, dy as L, X as T, z as A, m as O, Q as B, cS as P, o as S, j, l as I, p as z, ck as W, bc as V, s as _, v as D, w as H, r as M, be as N, W as F, L as q, n as X, P as J, cE as K, t as U, cB as Y, q as Z} from "./index-N2rhOp93.js";
import {k as G, U as Q, u as tt} from "./index-B6QNixY4.js";
import {u as et} from "./index-DP_x0l5O.js";
import {f as nt} from "./index-B_GYtH8g.js";
import {E as ot} from "./index-BPcizNiM.js";
import {g as lt, b as rt} from "./_baseClone-BHsCAS1S.js";
import {c as it} from "./_initCloneObject-CjiI1zRU.js";
import {i as at} from "./isPlainObject-B7ZirgRB.js";
function st(e, n) {
    return n.length < 2 ? e : t(e, function(t, e, n) {
        var o = -1
          , l = t.length;
        e < 0 && (e = -e > l ? 0 : l + e),
        (n = n > l ? l : n) < 0 && (n += l),
        l = e > n ? 0 : n - e >>> 0,
        e >>>= 0;
        for (var r = Array(l); ++o < l; )
            r[o] = t[o + e];
        return r
    }(n, 0, -1))
}
function ut(t, o) {
    return null == (t = st(t, o = e(o, t))) || delete t[n((l = o,
    r = null == l ? 0 : l.length,
    r ? l[r - 1] : void 0))];
    var l, r
}
function ct(t) {
    return at(t) ? void 0 : t
}
var ft = o((function(t, n) {
    var o = {};
    if (null == t)
        return o;
    var r = !1;
    n = l(n, (function(n) {
        return n = e(n, t),
        r || (r = n.length > 1),
        n
    }
    )),
    it(t, lt(t), o),
    r && (o = rt(o, 7, ct));
    for (var i = n.length; i--; )
        ut(o, n[i]);
    return o
}
));
function dt(t) {
    return t.split("-")[0]
}
function pt(t) {
    return t.split("-")[1]
}
function vt(t) {
    return ["top", "bottom"].includes(dt(t)) ? "x" : "y"
}
function ht(t) {
    return "y" === t ? "height" : "width"
}
function mt(t, e, n) {
    let {reference: o, floating: l} = t;
    const r = o.x + o.width / 2 - l.width / 2
      , i = o.y + o.height / 2 - l.height / 2
      , a = vt(e)
      , s = ht(a)
      , u = o[s] / 2 - l[s] / 2
      , c = "x" === a;
    let f;
    switch (dt(e)) {
    case "top":
        f = {
            x: r,
            y: o.y - l.height
        };
        break;
    case "bottom":
        f = {
            x: r,
            y: o.y + o.height
        };
        break;
    case "right":
        f = {
            x: o.x + o.width,
            y: i
        };
        break;
    case "left":
        f = {
            x: o.x - l.width,
            y: i
        };
        break;
    default:
        f = {
            x: o.x,
            y: o.y
        }
    }
    switch (pt(e)) {
    case "start":
        f[a] -= u * (n && c ? -1 : 1);
        break;
    case "end":
        f[a] += u * (n && c ? -1 : 1)
    }
    return f
}
function gt(t) {
    return "number" != typeof t ? (e = t,
    {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...e
    }) : {
        top: t,
        right: t,
        bottom: t,
        left: t
    };
    var e
}
function yt(t) {
    return {
        ...t,
        top: t.y,
        left: t.x,
        right: t.x + t.width,
        bottom: t.y + t.height
    }
}
async function wt(t, e) {
    var n;
    void 0 === e && (e = {});
    const {x: o, y: l, platform: r, rects: i, elements: a, strategy: s} = t
      , {boundary: u="clippingAncestors", rootBoundary: c="viewport", elementContext: f="floating", altBoundary: d=!1, padding: p=0} = e
      , v = gt(p)
      , h = a[d ? "floating" === f ? "reference" : "floating" : f]
      , m = yt(await r.getClippingRect({
        element: null == (n = await (null == r.isElement ? void 0 : r.isElement(h))) || n ? h : h.contextElement || await (null == r.getDocumentElement ? void 0 : r.getDocumentElement(a.floating)),
        boundary: u,
        rootBoundary: c,
        strategy: s
    }))
      , g = yt(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
        rect: "floating" === f ? {
            ...i.floating,
            x: o,
            y: l
        } : i.reference,
        offsetParent: await (null == r.getOffsetParent ? void 0 : r.getOffsetParent(a.floating)),
        strategy: s
    }) : i[f]);
    return {
        top: m.top - g.top + v.top,
        bottom: g.bottom - m.bottom + v.bottom,
        left: m.left - g.left + v.left,
        right: g.right - m.right + v.right
    }
}
const xt = Math.min
  , bt = Math.max;
function Rt(t, e, n) {
    return bt(t, xt(e, n))
}
const kt = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
};
function Ct(t) {
    return t.replace(/left|right|bottom|top/g, (t => kt[t]))
}
const Et = {
    start: "end",
    end: "start"
};
function $t(t) {
    return t.replace(/start|end/g, (t => Et[t]))
}
["top", "right", "bottom", "left"].reduce(( (t, e) => t.concat(e, e + "-start", e + "-end")), []);
const Lt = function(t) {
    return void 0 === t && (t = {}),
    {
        name: "flip",
        options: t,
        async fn(e) {
            var n;
            const {placement: o, middlewareData: l, rects: r, initialPlacement: i, platform: a, elements: s} = e
              , {mainAxis: u=!0, crossAxis: c=!0, fallbackPlacements: f, fallbackStrategy: d="bestFit", flipAlignment: p=!0, ...v} = t
              , h = dt(o)
              , m = [i, ...f || (h !== i && p ? function(t) {
                const e = Ct(t);
                return [$t(t), e, $t(e)]
            }(i) : [Ct(i)])]
              , g = await wt(e, v)
              , y = [];
            let w = (null == (n = l.flip) ? void 0 : n.overflows) || [];
            if (u && y.push(g[h]),
            c) {
                const {main: t, cross: e} = function(t, e, n) {
                    void 0 === n && (n = !1);
                    const o = pt(t)
                      , l = vt(t)
                      , r = ht(l);
                    let i = "x" === l ? o === (n ? "end" : "start") ? "right" : "left" : "start" === o ? "bottom" : "top";
                    return e.reference[r] > e.floating[r] && (i = Ct(i)),
                    {
                        main: i,
                        cross: Ct(i)
                    }
                }(o, r, await (null == a.isRTL ? void 0 : a.isRTL(s.floating)));
                y.push(g[t], g[e])
            }
            if (w = [...w, {
                placement: o,
                overflows: y
            }],
            !y.every((t => t <= 0))) {
                var x, b;
                const t = (null != (x = null == (b = l.flip) ? void 0 : b.index) ? x : 0) + 1
                  , e = m[t];
                if (e)
                    return {
                        data: {
                            index: t,
                            overflows: w
                        },
                        reset: {
                            placement: e
                        }
                    };
                let n = "bottom";
                switch (d) {
                case "bestFit":
                    {
                        var R;
                        const t = null == (R = w.map((t => [t, t.overflows.filter((t => t > 0)).reduce(( (t, e) => t + e), 0)])).sort(( (t, e) => t[1] - e[1]))[0]) ? void 0 : R[0].placement;
                        t && (n = t);
                        break
                    }
                case "initialPlacement":
                    n = i
                }
                if (o !== n)
                    return {
                        reset: {
                            placement: n
                        }
                    }
            }
            return {}
        }
    }
};
function Tt(t) {
    return t && t.document && t.location && t.alert && t.setInterval
}
function At(t) {
    if (null == t)
        return window;
    if (!Tt(t)) {
        const e = t.ownerDocument;
        return e && e.defaultView || window
    }
    return t
}
function Ot(t) {
    return At(t).getComputedStyle(t)
}
function Bt(t) {
    return Tt(t) ? "" : t ? (t.nodeName || "").toLowerCase() : ""
}
function Pt() {
    const t = navigator.userAgentData;
    return null != t && t.brands ? t.brands.map((t => t.brand + "/" + t.version)).join(" ") : navigator.userAgent
}
function St(t) {
    return t instanceof At(t).HTMLElement
}
function jt(t) {
    return t instanceof At(t).Element
}
function It(t) {
    return "undefined" != typeof ShadowRoot && (t instanceof At(t).ShadowRoot || t instanceof ShadowRoot)
}
function zt(t) {
    const {overflow: e, overflowX: n, overflowY: o} = Ot(t);
    return /auto|scroll|overlay|hidden/.test(e + o + n)
}
function Wt(t) {
    return ["table", "td", "th"].includes(Bt(t))
}
function Vt(t) {
    const e = /firefox/i.test(Pt())
      , n = Ot(t);
    return "none" !== n.transform || "none" !== n.perspective || "paint" === n.contain || ["transform", "perspective"].includes(n.willChange) || e && "filter" === n.willChange || e && !!n.filter && "none" !== n.filter
}
function _t() {
    return !/^((?!chrome|android).)*safari/i.test(Pt())
}
const Dt = Math.min
  , Ht = Math.max
  , Mt = Math.round;
function Nt(t, e, n) {
    var o, l, r, i;
    void 0 === e && (e = !1),
    void 0 === n && (n = !1);
    const a = t.getBoundingClientRect();
    let s = 1
      , u = 1;
    e && St(t) && (s = t.offsetWidth > 0 && Mt(a.width) / t.offsetWidth || 1,
    u = t.offsetHeight > 0 && Mt(a.height) / t.offsetHeight || 1);
    const c = jt(t) ? At(t) : window
      , f = !_t() && n
      , d = (a.left + (f && null != (o = null == (l = c.visualViewport) ? void 0 : l.offsetLeft) ? o : 0)) / s
      , p = (a.top + (f && null != (r = null == (i = c.visualViewport) ? void 0 : i.offsetTop) ? r : 0)) / u
      , v = a.width / s
      , h = a.height / u;
    return {
        width: v,
        height: h,
        top: p,
        right: d + v,
        bottom: p + h,
        left: d,
        x: d,
        y: p
    }
}
function Ft(t) {
    return (e = t,
    (e instanceof At(e).Node ? t.ownerDocument : t.document) || window.document).documentElement;
    var e
}
function qt(t) {
    return jt(t) ? {
        scrollLeft: t.scrollLeft,
        scrollTop: t.scrollTop
    } : {
        scrollLeft: t.pageXOffset,
        scrollTop: t.pageYOffset
    }
}
function Xt(t) {
    return Nt(Ft(t)).left + qt(t).scrollLeft
}
function Jt(t, e, n) {
    const o = St(e)
      , l = Ft(e)
      , r = Nt(t, o && function(t) {
        const e = Nt(t);
        return Mt(e.width) !== t.offsetWidth || Mt(e.height) !== t.offsetHeight
    }(e), "fixed" === n);
    let i = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const a = {
        x: 0,
        y: 0
    };
    if (o || !o && "fixed" !== n)
        if (("body" !== Bt(e) || zt(l)) && (i = qt(e)),
        St(e)) {
            const t = Nt(e, !0);
            a.x = t.x + e.clientLeft,
            a.y = t.y + e.clientTop
        } else
            l && (a.x = Xt(l));
    return {
        x: r.left + i.scrollLeft - a.x,
        y: r.top + i.scrollTop - a.y,
        width: r.width,
        height: r.height
    }
}
function Kt(t) {
    return "html" === Bt(t) ? t : t.assignedSlot || t.parentNode || (It(t) ? t.host : null) || Ft(t)
}
function Ut(t) {
    return St(t) && "fixed" !== Ot(t).position ? function(t) {
        let {offsetParent: e} = t
          , n = t
          , o = !1;
        for (; n && n !== e; ) {
            const {assignedSlot: t} = n;
            if (t) {
                let l = t.offsetParent;
                if ("contents" === Ot(t).display) {
                    const e = t.hasAttribute("style")
                      , o = t.style.display;
                    t.style.display = Ot(n).display,
                    l = t.offsetParent,
                    t.style.display = o,
                    e || t.removeAttribute("style")
                }
                n = t,
                e !== l && (e = l,
                o = !0)
            } else if (It(n) && n.host && o)
                break;
            n = It(n) && n.host || n.parentNode
        }
        return e
    }(t) : null
}
function Yt(t) {
    const e = At(t);
    let n = Ut(t);
    for (; n && Wt(n) && "static" === Ot(n).position; )
        n = Ut(n);
    return n && ("html" === Bt(n) || "body" === Bt(n) && "static" === Ot(n).position && !Vt(n)) ? e : n || function(t) {
        let e = Kt(t);
        for (It(e) && (e = e.host); St(e) && !["html", "body"].includes(Bt(e)); ) {
            if (Vt(e))
                return e;
            {
                const t = e.parentNode;
                e = It(t) ? t.host : t
            }
        }
        return null
    }(t) || e
}
function Zt(t) {
    if (St(t))
        return {
            width: t.offsetWidth,
            height: t.offsetHeight
        };
    const e = Nt(t);
    return {
        width: e.width,
        height: e.height
    }
}
function Gt(t) {
    const e = Kt(t);
    return ["html", "body", "#document"].includes(Bt(e)) ? t.ownerDocument.body : St(e) && zt(e) ? e : Gt(e)
}
function Qt(t, e) {
    var n;
    void 0 === e && (e = []);
    const o = Gt(t)
      , l = o === (null == (n = t.ownerDocument) ? void 0 : n.body)
      , r = At(o)
      , i = l ? [r].concat(r.visualViewport || [], zt(o) ? o : []) : o
      , a = e.concat(i);
    return l ? a : a.concat(Qt(i))
}
function te(t, e, n) {
    return "viewport" === e ? yt(function(t, e) {
        const n = At(t)
          , o = Ft(t)
          , l = n.visualViewport;
        let r = o.clientWidth
          , i = o.clientHeight
          , a = 0
          , s = 0;
        if (l) {
            r = l.width,
            i = l.height;
            const t = _t();
            (t || !t && "fixed" === e) && (a = l.offsetLeft,
            s = l.offsetTop)
        }
        return {
            width: r,
            height: i,
            x: a,
            y: s
        }
    }(t, n)) : jt(e) ? function(t, e) {
        const n = Nt(t, !1, "fixed" === e)
          , o = n.top + t.clientTop
          , l = n.left + t.clientLeft;
        return {
            top: o,
            left: l,
            x: l,
            y: o,
            right: l + t.clientWidth,
            bottom: o + t.clientHeight,
            width: t.clientWidth,
            height: t.clientHeight
        }
    }(e, n) : yt(function(t) {
        var e;
        const n = Ft(t)
          , o = qt(t)
          , l = null == (e = t.ownerDocument) ? void 0 : e.body
          , r = Ht(n.scrollWidth, n.clientWidth, l ? l.scrollWidth : 0, l ? l.clientWidth : 0)
          , i = Ht(n.scrollHeight, n.clientHeight, l ? l.scrollHeight : 0, l ? l.clientHeight : 0);
        let a = -o.scrollLeft + Xt(t);
        const s = -o.scrollTop;
        return "rtl" === Ot(l || n).direction && (a += Ht(n.clientWidth, l ? l.clientWidth : 0) - r),
        {
            width: r,
            height: i,
            x: a,
            y: s
        }
    }(Ft(t)))
}
function ee(t) {
    const e = Qt(t)
      , n = ["absolute", "fixed"].includes(Ot(t).position) && St(t) ? Yt(t) : t;
    return jt(n) ? e.filter((t => jt(t) && function(t, e) {
        const n = null == e.getRootNode ? void 0 : e.getRootNode();
        if (t.contains(e))
            return !0;
        if (n && It(n)) {
            let n = e;
            do {
                if (n && t === n)
                    return !0;
                n = n.parentNode || n.host
            } while (n)
        }
        return !1
    }(t, n) && "body" !== Bt(t))) : []
}
const ne = {
    getClippingRect: function(t) {
        let {element: e, boundary: n, rootBoundary: o, strategy: l} = t;
        const r = [..."clippingAncestors" === n ? ee(e) : [].concat(n), o]
          , i = r[0]
          , a = r.reduce(( (t, n) => {
            const o = te(e, n, l);
            return t.top = Ht(o.top, t.top),
            t.right = Dt(o.right, t.right),
            t.bottom = Dt(o.bottom, t.bottom),
            t.left = Ht(o.left, t.left),
            t
        }
        ), te(e, i, l));
        return {
            width: a.right - a.left,
            height: a.bottom - a.top,
            x: a.left,
            y: a.top
        }
    },
    convertOffsetParentRelativeRectToViewportRelativeRect: function(t) {
        let {rect: e, offsetParent: n, strategy: o} = t;
        const l = St(n)
          , r = Ft(n);
        if (n === r)
            return e;
        let i = {
            scrollLeft: 0,
            scrollTop: 0
        };
        const a = {
            x: 0,
            y: 0
        };
        if ((l || !l && "fixed" !== o) && (("body" !== Bt(n) || zt(r)) && (i = qt(n)),
        St(n))) {
            const t = Nt(n, !0);
            a.x = t.x + n.clientLeft,
            a.y = t.y + n.clientTop
        }
        return {
            ...e,
            x: e.x - i.scrollLeft + a.x,
            y: e.y - i.scrollTop + a.y
        }
    },
    isElement: jt,
    getDimensions: Zt,
    getOffsetParent: Yt,
    getDocumentElement: Ft,
    getElementRects: t => {
        let {reference: e, floating: n, strategy: o} = t;
        return {
            reference: Jt(e, Yt(n), o),
            floating: {
                ...Zt(n),
                x: 0,
                y: 0
            }
        }
    }
    ,
    getClientRects: t => Array.from(t.getClientRects()),
    isRTL: t => "rtl" === Ot(t).direction
};
const oe = (t, e, n) => (async (t, e, n) => {
    const {placement: o="bottom", strategy: l="absolute", middleware: r=[], platform: i} = n
      , a = await (null == i.isRTL ? void 0 : i.isRTL(e));
    let s = await i.getElementRects({
        reference: t,
        floating: e,
        strategy: l
    })
      , {x: u, y: c} = mt(s, o, a)
      , f = o
      , d = {}
      , p = 0;
    for (let v = 0; v < r.length; v++) {
        const {name: n, fn: h} = r[v]
          , {x: m, y: g, data: y, reset: w} = await h({
            x: u,
            y: c,
            initialPlacement: o,
            placement: f,
            strategy: l,
            middlewareData: d,
            rects: s,
            platform: i,
            elements: {
                reference: t,
                floating: e
            }
        });
        u = null != m ? m : u,
        c = null != g ? g : c,
        d = {
            ...d,
            [n]: {
                ...d[n],
                ...y
            }
        },
        w && p <= 50 && (p++,
        "object" == typeof w && (w.placement && (f = w.placement),
        w.rects && (s = !0 === w.rects ? await i.getElementRects({
            reference: t,
            floating: e,
            strategy: l
        }) : w.rects),
        ({x: u, y: c} = mt(s, f, a))),
        v = -1)
    }
    return {
        x: u,
        y: c,
        placement: f,
        strategy: l,
        middlewareData: d
    }
}
)(t, e, {
    platform: ne,
    ...n
})
  , le = f({
    zIndex: {
        type: Number,
        default: 1001
    },
    visible: Boolean,
    fill: {
        type: String,
        default: "rgba(0,0,0,0.5)"
    },
    pos: {
        type: d(Object)
    },
    targetAreaClickable: {
        type: Boolean,
        default: !0
    }
})
  , re = (t, e, n, o, l) => {
    const r = x(null)
      , i = () => {
        let e;
        return e = E(t.value) ? document.querySelector(t.value) : $(t.value) ? t.value() : t.value,
        e
    }
      , a = () => {
        const t = i();
        if (!t || !e.value)
            return void (r.value = null);
        !function(t) {
            const e = window.innerWidth || document.documentElement.clientWidth
              , n = window.innerHeight || document.documentElement.clientHeight
              , {top: o, right: l, bottom: r, left: i} = t.getBoundingClientRect();
            return o >= 0 && i >= 0 && l <= e && r <= n
        }(t) && e.value && t.scrollIntoView(l.value);
        const {left: n, top: o, width: a, height: s} = t.getBoundingClientRect();
        r.value = {
            left: n,
            top: o,
            width: a,
            height: s,
            radius: 0
        }
    }
    ;
    b(( () => {
        R([e, t], ( () => {
            a()
        }
        ), {
            immediate: !0
        }),
        window.addEventListener("resize", a)
    }
    )),
    k(( () => {
        window.removeEventListener("resize", a)
    }
    ));
    const s = t => {
        var e;
        return null != (e = L(n.value.offset) ? n.value.offset[t] : n.value.offset) ? e : 6
    }
      , u = C(( () => {
        var t;
        if (!r.value)
            return r.value;
        const e = s(0)
          , o = s(1)
          , l = (null == (t = n.value) ? void 0 : t.radius) || 2;
        return {
            left: r.value.left - e,
            top: r.value.top - o,
            width: r.value.width + 2 * e,
            height: r.value.height + 2 * o,
            radius: l
        }
    }
    ))
      , c = C(( () => {
        const t = i();
        return o.value && t && window.DOMRect ? {
            getBoundingClientRect() {
                var t, e, n, o;
                return window.DOMRect.fromRect({
                    width: (null == (t = u.value) ? void 0 : t.width) || 0,
                    height: (null == (e = u.value) ? void 0 : e.height) || 0,
                    x: (null == (n = u.value) ? void 0 : n.left) || 0,
                    y: (null == (o = u.value) ? void 0 : o.top) || 0
                })
            }
        } : t || void 0
    }
    ));
    return {
        mergedPosInfo: u,
        triggerTarget: c
    }
}
  , ie = Symbol("ElTour");
const ae = (t, e, n, o, l, r, i, a) => {
    const s = x()
      , u = x()
      , c = x({})
      , f = {
        x: s,
        y: u,
        placement: o,
        strategy: l,
        middlewareData: c
    }
      , d = C(( () => {
        const t = [(o = T(r),
        void 0 === o && (o = 0),
        {
            name: "offset",
            options: o,
            async fn(t) {
                const {x: e, y: n} = t
                  , l = await async function(t, e) {
                    const {placement: n, platform: o, elements: l} = t
                      , r = await (null == o.isRTL ? void 0 : o.isRTL(l.floating))
                      , i = dt(n)
                      , a = pt(n)
                      , s = "x" === vt(n)
                      , u = ["left", "top"].includes(i) ? -1 : 1
                      , c = r && s ? -1 : 1
                      , f = "function" == typeof e ? e(t) : e;
                    let {mainAxis: d, crossAxis: p, alignmentAxis: v} = "number" == typeof f ? {
                        mainAxis: f,
                        crossAxis: 0,
                        alignmentAxis: null
                    } : {
                        mainAxis: 0,
                        crossAxis: 0,
                        alignmentAxis: null,
                        ...f
                    };
                    return a && "number" == typeof v && (p = "end" === a ? -1 * v : v),
                    s ? {
                        x: p * c,
                        y: d * u
                    } : {
                        x: d * u,
                        y: p * c
                    }
                }(t, o);
                return {
                    x: e + l.x,
                    y: n + l.y,
                    data: l
                }
            }
        }), Lt(), (void 0 === e && (e = {}),
        {
            name: "shift",
            options: e,
            async fn(t) {
                const {x: n, y: o, placement: l} = t
                  , {mainAxis: r=!0, crossAxis: i=!1, limiter: a={
                    fn: t => {
                        let {x: e, y: n} = t;
                        return {
                            x: e,
                            y: n
                        }
                    }
                }, ...s} = e
                  , u = {
                    x: n,
                    y: o
                }
                  , c = await wt(t, s)
                  , f = vt(dt(l))
                  , d = "x" === f ? "y" : "x";
                let p = u[f]
                  , v = u[d];
                if (r) {
                    const t = "y" === f ? "bottom" : "right";
                    p = Rt(p + c["y" === f ? "top" : "left"], p, p - c[t])
                }
                if (i) {
                    const t = "y" === d ? "bottom" : "right";
                    v = Rt(v + c["y" === d ? "top" : "left"], v, v - c[t])
                }
                const h = a.fn({
                    ...t,
                    [f]: p,
                    [d]: v
                });
                return {
                    ...h,
                    data: {
                        x: h.x - n,
                        y: h.y - o
                    }
                }
            }
        }), se()];
        var e, o, l;
        return T(a) && T(n) && t.push({
            name: "arrow",
            options: l = {
                element: T(n)
            },
            async fn(t) {
                const {element: e, padding: n=0} = null != l ? l : {}
                  , {x: o, y: r, placement: i, rects: a, platform: s} = t;
                if (null == e)
                    return {};
                const u = gt(n)
                  , c = {
                    x: o,
                    y: r
                }
                  , f = vt(i)
                  , d = pt(i)
                  , p = ht(f)
                  , v = await s.getDimensions(e)
                  , h = "y" === f ? "top" : "left"
                  , m = "y" === f ? "bottom" : "right"
                  , g = a.reference[p] + a.reference[f] - c[f] - a.floating[p]
                  , y = c[f] - a.reference[f]
                  , w = await (null == s.getOffsetParent ? void 0 : s.getOffsetParent(e));
                let x = w ? "y" === f ? w.clientHeight || 0 : w.clientWidth || 0 : 0;
                0 === x && (x = a.floating[p]);
                const b = g / 2 - y / 2
                  , R = u[h]
                  , k = x - v[p] - u[m]
                  , C = x / 2 - v[p] / 2 + b
                  , E = Rt(R, C, k)
                  , $ = ("start" === d ? u[h] : u[m]) > 0 && C !== E && a.reference[p] <= a.floating[p];
                return {
                    [f]: c[f] - ($ ? C < R ? R - C : k - C : 0),
                    data: {
                        [f]: E,
                        centerOffset: C - E
                    }
                }
            }
        }),
        t
    }
    ))
      , v = async () => {
        if (!p)
            return;
        const n = T(t)
          , r = T(e);
        if (!n || !r)
            return;
        const i = await oe(n, r, {
            placement: T(o),
            strategy: T(l),
            middleware: T(d)
        });
        G(f).forEach((t => {
            f[t].value = i[t]
        }
        ))
    }
      , h = C(( () => {
        if (!T(t))
            return {
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate3d(-50%, -50%, 0)",
                maxWidth: "100vw",
                zIndex: T(i)
            };
        const {overflow: e} = T(c);
        return {
            position: T(l),
            zIndex: T(i),
            top: null != T(u) ? `${T(u)}px` : "",
            left: null != T(s) ? `${T(s)}px` : "",
            maxWidth: (null == e ? void 0 : e.maxWidth) ? `${null == e ? void 0 : e.maxWidth}px` : ""
        }
    }
    ))
      , m = C(( () => {
        if (!T(a))
            return {};
        const {arrow: t} = T(c);
        return {
            left: null != (null == t ? void 0 : t.x) ? `${null == t ? void 0 : t.x}px` : "",
            top: null != (null == t ? void 0 : t.y) ? `${null == t ? void 0 : t.y}px` : ""
        }
    }
    ));
    let g;
    return b(( () => {
        const n = T(t)
          , o = T(e);
        n && o && (g = function(t, e, n, o) {
            void 0 === o && (o = {});
            const {ancestorScroll: l=!0, ancestorResize: r=!0, elementResize: i=!0, animationFrame: a=!1} = o
              , s = l && !a
              , u = r && !a
              , c = s || u ? [...jt(t) ? Qt(t) : [], ...Qt(e)] : [];
            c.forEach((t => {
                s && t.addEventListener("scroll", n, {
                    passive: !0
                }),
                u && t.addEventListener("resize", n)
            }
            ));
            let f, d = null;
            if (i) {
                let o = !0;
                d = new ResizeObserver(( () => {
                    o || n(),
                    o = !1
                }
                )),
                jt(t) && !a && d.observe(t),
                d.observe(e)
            }
            let p = a ? Nt(t) : null;
            return a && function e() {
                const o = Nt(t);
                !p || o.x === p.x && o.y === p.y && o.width === p.width && o.height === p.height || n(),
                p = o,
                f = requestAnimationFrame(e)
            }(),
            n(),
            () => {
                var t;
                c.forEach((t => {
                    s && t.removeEventListener("scroll", n),
                    u && t.removeEventListener("resize", n)
                }
                )),
                null == (t = d) || t.disconnect(),
                d = null,
                a && cancelAnimationFrame(f)
            }
        }(n, o, v)),
        A(( () => {
            v()
        }
        ))
    }
    )),
    k(( () => {
        g && g()
    }
    )),
    {
        update: v,
        contentStyle: h,
        arrowStyle: m
    }
}
  , se = () => ({
    name: "overflow",
    async fn(t) {
        const e = await wt(t);
        let n = 0;
        e.left > 0 && (n = e.left),
        e.right > 0 && (n = e.right);
        return {
            data: {
                maxWidth: t.rects.floating.width - n
            }
        }
    }
})
  , ue = O({
    name: "ElTourMask",
    inheritAttrs: !1
});
var ce = v(O({
    ...ue,
    props: le,
    setup(t) {
        const e = t
          , {ns: n} = B(ie)
          , o = C(( () => {
            var t, n;
            return null != (n = null == (t = e.pos) ? void 0 : t.radius) ? n : 2
        }
        ))
          , l = C(( () => {
            const t = o.value
              , e = `a${t},${t} 0 0 1`;
            return {
                topRight: `${e} ${t},${t}`,
                bottomRight: `${e} ${-t},${t}`,
                bottomLeft: `${e} ${-t},${-t}`,
                topLeft: `${e} ${t},${-t}`
            }
        }
        ))
          , r = C(( () => {
            const t = window.innerWidth
              , n = window.innerHeight
              , r = l.value
              , i = `M${t},0 L0,0 L0,${n} L${t},${n} L${t},0 Z`
              , a = o.value;
            return e.pos ? `${i} M${e.pos.left + a},${e.pos.top} h${e.pos.width - 2 * a} ${r.topRight} v${e.pos.height - 2 * a} ${r.bottomRight} h${-e.pos.width + 2 * a} ${r.bottomLeft} v${-e.pos.height + 2 * a} ${r.topLeft} z` : i
        }
        ))
          , i = C(( () => ({
            fill: e.fill,
            pointerEvents: "auto",
            cursor: "auto"
        })));
        return et(P(e, "visible"), {
            ns: n
        }),
        (t, e) => t.visible ? (S(),
        j("div", V({
            key: 0,
            class: T(n).e("mask"),
            style: {
                position: "fixed",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                zIndex: t.zIndex,
                pointerEvents: t.pos && t.targetAreaClickable ? "none" : "auto"
            }
        }, t.$attrs), [(S(),
        j("svg", {
            style: {
                width: "100%",
                height: "100%"
            }
        }, [I("path", {
            class: z(T(n).e("hollow")),
            style: W(T(i)),
            d: T(r)
        }, null, 14, ["d"])]))], 16)) : _("v-if", !0)
    }
}), [["__file", "mask.vue"]]);
const fe = f({
    placement: {
        type: d(String),
        values: ["top-start", "top-end", "top", "bottom-start", "bottom-end", "bottom", "left-start", "left-end", "left", "right-start", "right-end", "right"],
        default: "bottom"
    },
    reference: {
        type: d(Object),
        default: null
    },
    strategy: {
        type: d(String),
        values: ["absolute", "fixed"],
        default: "absolute"
    },
    offset: {
        type: Number,
        default: 10
    },
    showArrow: Boolean,
    zIndex: {
        type: Number,
        default: 2001
    }
})
  , de = O({
    name: "ElTourContent"
});
var pe = v(O({
    ...de,
    props: fe,
    emits: {
        close: () => !0
    },
    setup(t, {emit: e}) {
        const n = t
          , o = x(n.placement)
          , l = x(n.strategy)
          , i = x(null)
          , a = x(null);
        R(( () => n.placement), ( () => {
            o.value = n.placement
        }
        ));
        const {contentStyle: s, arrowStyle: u} = ae(P(n, "reference"), i, a, o, l, P(n, "offset"), P(n, "zIndex"), P(n, "showArrow"))
          , c = C(( () => o.value.split("-")[0]))
          , {ns: f} = B(ie)
          , d = () => {
            e("close")
        }
          , p = t => {
            "pointer" === t.detail.focusReason && t.preventDefault()
        }
        ;
        return (t, e) => (S(),
        j("div", {
            ref_key: "contentRef",
            ref: i,
            style: W(T(s)),
            class: z(T(f).e("content")),
            "data-side": T(c),
            tabindex: "-1"
        }, [D(T(r), {
            loop: "",
            trapped: "",
            "focus-start-el": "container",
            "focus-trap-el": i.value || void 0,
            onReleaseRequested: d,
            onFocusoutPrevented: p
        }, {
            default: H(( () => [M(t.$slots, "default")])),
            _: 3
        }, 8, ["focus-trap-el"]), t.showArrow ? (S(),
        j("span", {
            key: 0,
            ref_key: "arrowRef",
            ref: a,
            style: W(T(u)),
            class: z(T(f).e("arrow"))
        }, null, 6)) : _("v-if", !0)], 14, ["data-side"]))
    }
}), [["__file", "content.vue"]])
  , ve = O({
    name: "ElTourSteps",
    props: {
        current: {
            type: Number,
            default: 0
        }
    },
    emits: ["update-total"],
    setup(t, {slots: e, emit: n}) {
        let o = 0;
        return () => {
            var l, r;
            const i = null == (l = e.default) ? void 0 : l.call(e)
              , a = [];
            let s = 0;
            var u;
            return i.length && (u = nt(null == (r = i[0]) ? void 0 : r.children),
            L(u) && u.forEach((t => {
                var e;
                "ElTourStep" === (null == (e = (null == t ? void 0 : t.type) || {}) ? void 0 : e.name) && (a.push(t),
                s += 1)
            }
            ))),
            o !== s && (o = s,
            n("update-total", s)),
            a.length ? a[t.current] : null
        }
    }
});
const he = f({
    modelValue: Boolean,
    current: {
        type: Number,
        default: 0
    },
    showArrow: {
        type: Boolean,
        default: !0
    },
    showClose: {
        type: Boolean,
        default: !0
    },
    closeIcon: {
        type: i
    },
    placement: fe.placement,
    contentStyle: {
        type: d([Object])
    },
    mask: {
        type: d([Boolean, Object]),
        default: !0
    },
    gap: {
        type: d(Object),
        default: () => ({
            offset: 6,
            radius: 2
        })
    },
    zIndex: {
        type: Number
    },
    scrollIntoViewOptions: {
        type: d([Boolean, Object]),
        default: () => ({
            block: "center"
        })
    },
    type: {
        type: d(String)
    },
    appendTo: {
        type: d([String, Object]),
        default: "body"
    },
    closeOnPressEscape: {
        type: Boolean,
        default: !0
    },
    targetAreaClickable: {
        type: Boolean,
        default: !0
    }
})
  , me = {
    [Q]: t => h(t),
    "update:current": t => m(t),
    close: t => m(t),
    finish: () => !0,
    change: t => m(t)
}
  , ge = O({
    name: "ElTour"
});
var ye = v(O({
    ...ge,
    props: he,
    emits: me,
    setup(t, {emit: e}) {
        const n = t
          , o = N("tour")
          , l = x(0)
          , r = x()
          , i = a(n, "current", e, {
            passive: !0
        })
          , c = C(( () => {
            var t;
            return null == (t = r.value) ? void 0 : t.target
        }
        ))
          , f = C(( () => [o.b(), "primary" === b.value ? o.m("primary") : ""]))
          , d = C(( () => {
            var t;
            return (null == (t = r.value) ? void 0 : t.placement) || n.placement
        }
        ))
          , p = C(( () => {
            var t, e;
            return null != (e = null == (t = r.value) ? void 0 : t.contentStyle) ? e : n.contentStyle
        }
        ))
          , v = C(( () => {
            var t, e;
            return null != (e = null == (t = r.value) ? void 0 : t.mask) ? e : n.mask
        }
        ))
          , m = C(( () => !!v.value && n.modelValue))
          , g = C(( () => h(v.value) ? void 0 : v.value))
          , y = C(( () => {
            var t, e;
            return !!c.value && (null != (e = null == (t = r.value) ? void 0 : t.showArrow) ? e : n.showArrow)
        }
        ))
          , w = C(( () => {
            var t, e;
            return null != (e = null == (t = r.value) ? void 0 : t.scrollIntoViewOptions) ? e : n.scrollIntoViewOptions
        }
        ))
          , b = C(( () => {
            var t, e;
            return null != (e = null == (t = r.value) ? void 0 : t.type) ? e : n.type
        }
        ))
          , {nextZIndex: k} = s()
          , E = k()
          , $ = C(( () => {
            var t;
            return null != (t = n.zIndex) ? t : E
        }
        ))
          , {mergedPosInfo: L, triggerTarget: A} = re(c, P(n, "modelValue"), P(n, "gap"), v, w);
        R(( () => n.modelValue), (t => {
            t || (i.value = 0)
        }
        ));
        const O = () => {
            n.closeOnPressEscape && (e("update:modelValue", !1),
            e("close", i.value))
        }
          , B = t => {
            l.value = t
        }
          , z = F();
        return q(ie, {
            currentStep: r,
            current: i,
            total: l,
            showClose: P(n, "showClose"),
            closeIcon: P(n, "closeIcon"),
            mergedType: b,
            ns: o,
            slots: z,
            updateModelValue(t) {
                e("update:modelValue", t)
            },
            onClose() {
                e("close", i.value)
            },
            onFinish() {
                e("finish")
            },
            onChange() {
                e("change", i.value)
            }
        }),
        (t, e) => (S(),
        j(J, null, [D(T(u), {
            to: t.appendTo
        }, {
            default: H(( () => {
                var e, n;
                return [I("div", V({
                    class: T(f)
                }, t.$attrs), [D(ce, {
                    visible: T(m),
                    fill: null == (e = T(g)) ? void 0 : e.color,
                    style: W(null == (n = T(g)) ? void 0 : n.style),
                    pos: T(L),
                    "z-index": T($),
                    "target-area-clickable": t.targetAreaClickable
                }, null, 8, ["visible", "fill", "style", "pos", "z-index", "target-area-clickable"]), t.modelValue ? (S(),
                X(pe, {
                    key: T(i),
                    reference: T(A),
                    placement: T(d),
                    "show-arrow": T(y),
                    "z-index": T($),
                    style: W(T(p)),
                    onClose: O
                }, {
                    default: H(( () => [D(T(ve), {
                        current: T(i),
                        onUpdateTotal: B
                    }, {
                        default: H(( () => [M(t.$slots, "default")])),
                        _: 3
                    }, 8, ["current"])])),
                    _: 3
                }, 8, ["reference", "placement", "show-arrow", "z-index", "style"])) : _("v-if", !0)], 16)]
            }
            )),
            _: 3
        }, 8, ["to"]), _(" just for IDE "), _("v-if", !0)], 64))
    }
}), [["__file", "tour.vue"]]);
const we = f({
    target: {
        type: d([String, Object, Function])
    },
    title: String,
    description: String,
    showClose: {
        type: Boolean,
        default: void 0
    },
    closeIcon: {
        type: i
    },
    showArrow: {
        type: Boolean,
        default: void 0
    },
    placement: fe.placement,
    mask: {
        type: d([Boolean, Object]),
        default: void 0
    },
    contentStyle: {
        type: d([Object])
    },
    prevButtonProps: {
        type: d(Object)
    },
    nextButtonProps: {
        type: d(Object)
    },
    scrollIntoViewOptions: {
        type: d([Boolean, Object]),
        default: void 0
    },
    type: {
        type: d(String)
    }
})
  , xe = O({
    name: "ElTourStep"
});
var be = v(O({
    ...xe,
    props: we,
    emits: {
        close: () => !0
    },
    setup(t, {emit: e}) {
        const n = t
          , {Close: o} = c
          , {t: l} = tt()
          , {currentStep: r, current: i, total: a, showClose: s, closeIcon: u, mergedType: f, ns: d, slots: p, updateModelValue: v, onClose: h, onFinish: m, onChange: y} = B(ie);
        R(n, (t => {
            r.value = t
        }
        ), {
            immediate: !0
        });
        const w = C(( () => {
            var t;
            return null != (t = n.showClose) ? t : s.value
        }
        ))
          , x = C(( () => {
            var t, e;
            return null != (e = null != (t = n.closeIcon) ? t : u.value) ? e : o
        }
        ))
          , b = t => {
            if (t)
                return ft(t, ["children", "onClick"])
        }
          , k = () => {
            var t, e;
            i.value -= 1,
            (null == (t = n.prevButtonProps) ? void 0 : t.onClick) && (null == (e = n.prevButtonProps) || e.onClick()),
            y()
        }
          , E = () => {
            var t;
            i.value >= a.value - 1 ? $() : i.value += 1,
            (null == (t = n.nextButtonProps) ? void 0 : t.onClick) && n.nextButtonProps.onClick(),
            y()
        }
          , $ = () => {
            L(),
            m()
        }
          , L = () => {
            v(!1),
            h(),
            e("close")
        }
        ;
        return (t, e) => (S(),
        j(J, null, [T(w) ? (S(),
        j("button", {
            key: 0,
            "aria-label": "Close",
            class: z(T(d).e("closebtn")),
            type: "button",
            onClick: L
        }, [D(T(g), {
            class: z(T(d).e("close"))
        }, {
            default: H(( () => [(S(),
            X(K(T(x))))])),
            _: 1
        }, 8, ["class"])], 2)) : _("v-if", !0), I("header", {
            class: z([T(d).e("header"), {
                "show-close": T(s)
            }])
        }, [M(t.$slots, "header", {}, ( () => [I("span", {
            role: "heading",
            class: z(T(d).e("title"))
        }, U(t.title), 3)]))], 2), I("div", {
            class: z(T(d).e("body"))
        }, [M(t.$slots, "default", {}, ( () => [I("span", null, U(t.description), 1)]))], 2), I("footer", {
            class: z(T(d).e("footer"))
        }, [I("div", {
            class: z(T(d).b("indicators"))
        }, [T(p).indicators ? (S(),
        X(K(T(p).indicators), {
            key: 0,
            current: T(i),
            total: T(a)
        }, null, 8, ["current", "total"])) : (S(!0),
        j(J, {
            key: 1
        }, Y(T(a), ( (t, e) => (S(),
        j("span", {
            key: t,
            class: z([T(d).b("indicator"), e === T(i) ? "is-active" : ""])
        }, null, 2)))), 128))], 2), I("div", {
            class: z(T(d).b("buttons"))
        }, [T(i) > 0 ? (S(),
        X(T(ot), V({
            key: 0,
            size: "small",
            type: T(f)
        }, b(t.prevButtonProps), {
            onClick: k
        }), {
            default: H(( () => {
                var e, n;
                return [Z(U(null != (n = null == (e = t.prevButtonProps) ? void 0 : e.children) ? n : T(l)("el.tour.previous")), 1)]
            }
            )),
            _: 1
        }, 16, ["type"])) : _("v-if", !0), T(i) <= T(a) - 1 ? (S(),
        X(T(ot), V({
            key: 1,
            size: "small",
            type: "primary" === T(f) ? "default" : "primary"
        }, b(t.nextButtonProps), {
            onClick: E
        }), {
            default: H(( () => {
                var e, n;
                return [Z(U(null != (n = null == (e = t.nextButtonProps) ? void 0 : e.children) ? n : T(i) === T(a) - 1 ? T(l)("el.tour.finish") : T(l)("el.tour.next")), 1)]
            }
            )),
            _: 1
        }, 16, ["type"])) : _("v-if", !0)], 2)], 2)], 64))
    }
}), [["__file", "step.vue"]]);
const Re = y(ye, {
    TourStep: be
})
  , ke = w(be);
export {ke as E, Re as a};
