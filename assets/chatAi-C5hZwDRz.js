import {
    bh as t,
    m as e,
    dm as i,
    K as s,
    y as r,
    e as o,
    B as a,
    R as n,
    o as l,
    j as h,
    l as d,
    t as c,
    n as p,
    X as u,
    s as g,
    cj as f,
    bc as m,
    q as x,
    h as y,
    Y as v,
    v as b,
    w as k,
    p as S,
    b$ as C,
    P as w,
    cB as M,
    r as A,
    eM as T,
    z as P,
    k as L,
    H as O,
    u as E,
    g as D,
    G as j,
    a as I,
    I as B,
    N as R,
    ey as N,
    dc as z,
    dn as W,
    dp as H,
    ck as G,
    dh as F,
    dj as _,
    M as X
} from "./index-CQfCy4Xm.js";
import {
    I as Y,
    H as U
} from "./index-DZwhim7i.js";
import {
    r as V
} from "./vue.runtime.esm-bundler-BbVV3g-V.js";
import {
    m as $
} from "./vue3-apexcharts-DWxdUF6r.js";
import {
    _ as q
} from "./_plugin-vue_export-helper-BCo6x5W8.js";
import {
    l as Z
} from "./loadingSvg-B2DNNGSL.js";
import {
    E as K,
    a as J
} from "./index-CcBkONjK.js";
import {
    E as Q
} from "./index-Ccebcdf2.js";
import {
    E as tt
} from "./index-CteOOV_f.js";
import {
    b as et
} from "./index-38aUouWI.js";
import {
    a as it,
    E as st
} from "./index-BUqPiGKl.js";
import {
    _ as rt
} from "./VPlaceload-DcvQMSN9.js";
import {
    E as ot
} from "./index-wV0BwLDn.js";
import {
    u as at
} from "./viewWrapper-yhXGfwRy.js";
import {
    _ as nt,
    a as lt
} from "./VPageContent-BIuP73X_.js";
import {
    D as ht,
    b as dt,
    c as ct,
    d as pt,
    e as ut,
    W as gt
} from "./Navbar2-Cx1AKm6v.js";
import {
    _ as ft
} from "./ButtonGR-CCzD27Qk.js";
import {
    d as mt
} from "./dayjs.min-CoMKM3gL.js";
import {
    d as xt
} from "./index-BFnVcjcj.js";
import {
    V as yt
} from "./vue3-lottie.es-CiYK4lOh.js";
import {
    E as vt
} from "./index-DWyf7GKU.js";
import {
    M as bt
} from "./vue3-markdown-it.umd.min-h-q_g2pl.js";
import {
    _ as kt,
    t as St
} from "./tiny-slider-CC0nyWcN.js";
import {
    E as Ct,
    a as wt
} from "./index-D21_sbBM.js";
import {
    E as Mt
} from "./index-DhHA3mFI.js";
var At, Tt = {
        exports: {}
    },
    Pt = {
        exports: {}
    };

function Lt() {
    return At || (At = 1, e = Pt, i = "undefined" != typeof window ? window : t, s = function(t) {
        var e = {};

        function i(e, i, s, r) {
            e.hasOwnProperty(i) || (e[i] = r.apply(null, s), "function" == typeof CustomEvent && t.dispatchEvent(new CustomEvent("HighchartsModuleLoaded", {
                detail: {
                    path: i,
                    module: e[i]
                }
            })))
        }
        return i(e, "Core/Globals.js", [], (function() {
            var e, i;
            return (i = e || (e = {})).SVG_NS = "http://www.w3.org/2000/svg", i.product = "Highcharts", i.version = "11.4.0", i.win = void 0 !== t ? t : {}, i.doc = i.win.document, i.svg = i.doc && i.doc.createElementNS && !!i.doc.createElementNS(i.SVG_NS, "svg").createSVGRect, i.userAgent = i.win.navigator && i.win.navigator.userAgent || "", i.isChrome = -1 !== i.userAgent.indexOf("Chrome"), i.isFirefox = -1 !== i.userAgent.indexOf("Firefox"), i.isMS = /(edge|msie|trident)/i.test(i.userAgent) && !i.win.opera, i.isSafari = !i.isChrome && -1 !== i.userAgent.indexOf("Safari"), i.isTouchDevice = /(Mobile|Android|Windows Phone)/.test(i.userAgent), i.isWebKit = -1 !== i.userAgent.indexOf("AppleWebKit"), i.deg2rad = 2 * Math.PI / 360, i.hasBidiBug = i.isFirefox && 4 > parseInt(i.userAgent.split("Firefox/")[1], 10), i.marginNames = ["plotTop", "marginRight", "marginBottom", "plotLeft"], i.noop = function() {}, i.supportsPassiveEvents = function() {
                let t = !1;
                if (!i.isMS) {
                    let e = Object.defineProperty({}, "passive", {
                        get: function() {
                            t = !0
                        }
                    });
                    i.win.addEventListener && i.win.removeEventListener && (i.win.addEventListener("testPassive", i.noop, e), i.win.removeEventListener("testPassive", i.noop, e))
                }
                return t
            }(), i.charts = [], i.composed = [], i.dateFormats = {}, i.seriesTypes = {}, i.symbolSizes = {}, i.chartCount = 0, e
        })), i(e, "Core/Utilities.js", [e["Core/Globals.js"]], (function(t) {
            let e, {
                charts: i,
                doc: s,
                win: r
            } = t;

            function o(e, i, s, a) {
                let n = i ? "Highcharts error" : "Highcharts warning";
                32 === e && (e = `${n}: Deprecated member`);
                let l = p(e),
                    h = l ? `${n} #${e}: www.highcharts.com/errors/${e}/` : e.toString();
                if (void 0 !== a) {
                    let t = "";
                    l && (h += "?"), S(a, (function(e, i) {
                        t += `\n - ${i}: ${e}`, l && (h += encodeURI(i) + "=" + encodeURI(e))
                    })), h += t
                }
                w(t, "displayError", {
                    chart: s,
                    code: e,
                    message: h,
                    params: a
                }, (function() {
                    if (i) throw Error(h);
                    r.console && -1 === o.messages.indexOf(h) && console.warn(h)
                })), o.messages.push(h)
            }

            function a(t, e) {
                return parseInt(t, e || 10)
            }

            function n(t) {
                return "string" == typeof t
            }

            function l(t) {
                let e = Object.prototype.toString.call(t);
                return "[object Array]" === e || "[object Array Iterator]" === e
            }

            function h(t, e) {
                return !(!t || "object" != typeof t || e && l(t))
            }

            function d(t) {
                return h(t) && "number" == typeof t.nodeType
            }

            function c(t) {
                let e = t && t.constructor;
                return !(!h(t, !0) || d(t) || !e || !e.name || "Object" === e.name)
            }

            function p(t) {
                return "number" == typeof t && !isNaN(t) && t < 1 / 0 && t > -1 / 0
            }

            function u(t) {
                return null != t
            }

            function g(t, e, i) {
                let s, r = n(e) && !u(i),
                    o = (e, i) => {
                        u(e) ? t.setAttribute(i, e) : r ? (s = t.getAttribute(i)) || "class" !== i || (s = t.getAttribute(i + "Name")) : t.removeAttribute(i)
                    };
                return n(e) ? o(i, e) : S(e, o), s
            }

            function f(t) {
                return l(t) ? t : [t]
            }

            function m(t, e) {
                let i;
                for (i in t || (t = {}), e) t[i] = e[i];
                return t
            }

            function x() {
                let t = arguments,
                    e = t.length;
                for (let i = 0; i < e; i++) {
                    let e = t[i];
                    if (null != e) return e
                }
            }

            function y(t, e) {
                m(t.style, e)
            }

            function v(t) {
                return Math.pow(10, Math.floor(Math.log(t) / Math.LN10))
            }

            function b(t, e) {
                return t > 1e14 ? t : parseFloat(t.toPrecision(e || 14))
            }(o || (o = {})).messages = [], Math.easeInOutSine = function(t) {
                return -.5 * (Math.cos(Math.PI * t) - 1)
            };
            let k = Array.prototype.find ? function(t, e) {
                return t.find(e)
            } : function(t, e) {
                let i, s = t.length;
                for (i = 0; i < s; i++)
                    if (e(t[i], i)) return t[i]
            };

            function S(t, e, i) {
                for (let s in t) Object.hasOwnProperty.call(t, s) && e.call(i || t[s], t[s], s, t)
            }

            function C(t, e, i) {
                function s(e, i) {
                    let s = t.removeEventListener;
                    s && s.call(t, e, i, !1)
                }

                function r(i) {
                    let r, o;
                    t.nodeName && (e ? (r = {})[e] = !0 : r = i, S(r, (function(t, e) {
                        if (i[e])
                            for (o = i[e].length; o--;) s(e, i[e][o].fn)
                    })))
                }
                let o = "function" == typeof t && t.prototype || t;
                if (Object.hasOwnProperty.call(o, "hcEvents")) {
                    let t = o.hcEvents;
                    if (e) {
                        let o = t[e] || [];
                        i ? (t[e] = o.filter((function(t) {
                            return i !== t.fn
                        })), s(e, i)) : (r(t), t[e] = [])
                    } else r(t), delete o.hcEvents
                }
            }

            function w(e, i, r, o) {
                if (r = r || {}, s.createEvent && (e.dispatchEvent || e.fireEvent && e !== t)) {
                    let t = s.createEvent("Events");
                    t.initEvent(i, !0, !0), r = m(t, r), e.dispatchEvent ? e.dispatchEvent(r) : e.fireEvent(i, r)
                } else if (e.hcEvents) {
                    r.target || m(r, {
                        preventDefault: function() {
                            r.defaultPrevented = !0
                        },
                        target: e,
                        type: i
                    });
                    let t = [],
                        s = e,
                        o = !1;
                    for (; s.hcEvents;) Object.hasOwnProperty.call(s, "hcEvents") && s.hcEvents[i] && (t.length && (o = !0), t.unshift.apply(t, s.hcEvents[i])), s = Object.getPrototypeOf(s);
                    o && t.sort(((t, e) => t.order - e.order)), t.forEach((t => {
                        !1 === t.fn.call(e, r) && r.preventDefault()
                    }))
                }
                o && !r.defaultPrevented && o.call(e, r)
            }
            S({
                map: "map",
                each: "forEach",
                grep: "filter",
                reduce: "reduce",
                some: "some"
            }, (function(e, i) {
                t[i] = function(t) {
                    return o(32, !1, void 0, {
                        [`Highcharts.${i}`]: `use Array.${e}`
                    }), Array.prototype[e].apply(t, [].slice.call(arguments, 1))
                }
            }));
            let M = function() {
                let t = Math.random().toString(36).substring(2, 9) + "-",
                    i = 0;
                return function() {
                    return "highcharts-" + (e ? "" : t) + i++
                }
            }();
            return r.jQuery && (r.jQuery.fn.highcharts = function() {
                let e = [].slice.call(arguments);
                if (this[0]) return e[0] ? (new(t[n(e[0]) ? e.shift() : "Chart"])(this[0], e[0], e[1]), this) : i[g(this[0], "data-highcharts-chart")]
            }), {
                addEvent: function(e, i, s, r = {}) {
                    let o = "function" == typeof e && e.prototype || e;
                    Object.hasOwnProperty.call(o, "hcEvents") || (o.hcEvents = {});
                    let a = o.hcEvents;
                    t.Point && e instanceof t.Point && e.series && e.series.chart && (e.series.chart.runTrackerClick = !0);
                    let n = e.addEventListener;
                    n && n.call(e, i, s, !!t.supportsPassiveEvents && {
                        passive: void 0 === r.passive ? -1 !== i.indexOf("touch") : r.passive,
                        capture: !1
                    }), a[i] || (a[i] = []);
                    let l = {
                        fn: s,
                        order: "number" == typeof r.order ? r.order : 1 / 0
                    };
                    return a[i].push(l), a[i].sort(((t, e) => t.order - e.order)),
                        function() {
                            C(e, i, s)
                        }
                },
                arrayMax: function(t) {
                    let e = t.length,
                        i = t[0];
                    for (; e--;) t[e] > i && (i = t[e]);
                    return i
                },
                arrayMin: function(t) {
                    let e = t.length,
                        i = t[0];
                    for (; e--;) t[e] < i && (i = t[e]);
                    return i
                },
                attr: g,
                clamp: function(t, e, i) {
                    return t > e ? t < i ? t : i : e
                },
                clearTimeout: function(t) {
                    u(t) && clearTimeout(t)
                },
                correctFloat: b,
                createElement: function(t, e, i, r, o) {
                    let a = s.createElement(t);
                    return e && m(a, e), o && y(a, {
                        padding: "0",
                        border: "none",
                        margin: "0"
                    }), i && y(a, i), r && r.appendChild(a), a
                },
                css: y,
                defined: u,
                destroyObjectProperties: function(t, e, i) {
                    S(t, (function(s, r) {
                        s !== e && (null == s ? void 0 : s.destroy) && s.destroy(), ((null == s ? void 0 : s.destroy) || !i) && delete t[r]
                    }))
                },
                diffObjects: function(t, e, i, s) {
                    let r = {};
                    return function t(e, r, o, a) {
                        let n = i ? r : e;
                        S(e, (function(i, d) {
                            if (!a && s && s.indexOf(d) > -1 && r[d]) {
                                i = f(i), o[d] = [];
                                for (let e = 0; e < Math.max(i.length, r[d].length); e++) r[d][e] && (void 0 === i[e] ? o[d][e] = r[d][e] : (o[d][e] = {}, t(i[e], r[d][e], o[d][e], a + 1)))
                            } else h(i, !0) && !i.nodeType ? (o[d] = l(i) ? [] : {}, t(i, r[d] || {}, o[d], a + 1), 0 !== Object.keys(o[d]).length || "colorAxis" === d && 0 === a || delete o[d]) : (e[d] !== r[d] || d in e && !(d in r)) && "__proto__" !== d && "constructor" !== d && (o[d] = n[d])
                        }))
                    }(t, e, r, 0), r
                },
                discardElement: function(t) {
                    t && t.parentElement && t.parentElement.removeChild(t)
                },
                erase: function(t, e) {
                    let i = t.length;
                    for (; i--;)
                        if (t[i] === e) {
                            t.splice(i, 1);
                            break
                        }
                },
                error: o,
                extend: m,
                extendClass: function(t, e) {
                    let i = function() {};
                    return m(i.prototype = new t, e), i
                },
                find: k,
                fireEvent: w,
                getClosestDistance: function(t, e) {
                    let i, s, r, o = !e;
                    return t.forEach((t => {
                        if (t.length > 1)
                            for (r = t.length - 1; r > 0; r--)(s = t[r] - t[r - 1]) < 0 && !o ? (null == e || e(), e = void 0) : s && (void 0 === i || s < i) && (i = s)
                    })), i
                },
                getMagnitude: v,
                getNestedProperty: function(t, e) {
                    let i = t.split(".");
                    for (; i.length && u(e);) {
                        let t = i.shift();
                        if (void 0 === t || "__proto__" === t) return;
                        if ("this" === t) {
                            let t;
                            return h(e) && (t = e["@this"]), t ? ? e
                        }
                        let s = e[t];
                        if (!u(s) || "function" == typeof s || "number" == typeof s.nodeType || s === r) return;
                        e = s
                    }
                    return e
                },
                getStyle: function t(e, i, s) {
                    let o;
                    if ("width" === i) {
                        let i = Math.min(e.offsetWidth, e.scrollWidth),
                            s = e.getBoundingClientRect && e.getBoundingClientRect().width;
                        return s < i && s >= i - 1 && (i = Math.floor(s)), Math.max(0, i - (t(e, "padding-left", !0) || 0) - (t(e, "padding-right", !0) || 0))
                    }
                    if ("height" === i) return Math.max(0, Math.min(e.offsetHeight, e.scrollHeight) - (t(e, "padding-top", !0) || 0) - (t(e, "padding-bottom", !0) || 0));
                    let n = r.getComputedStyle(e, void 0);
                    return n && (o = n.getPropertyValue(i), x(s, "opacity" !== i) && (o = a(o))), o
                },
                inArray: function(t, e, i) {
                    return o(32, !1, void 0, {
                        "Highcharts.inArray": "use Array.indexOf"
                    }), e.indexOf(t, i)
                },
                insertItem: function(t, e) {
                    let i, s = t.options.index,
                        r = e.length;
                    for (i = t.options.isInternal ? r : 0; i < r + 1; i++)
                        if (!e[i] || p(s) && s < x(e[i].options.index, e[i]._i) || e[i].options.isInternal) {
                            e.splice(i, 0, t);
                            break
                        }
                    return i
                },
                isArray: l,
                isClass: c,
                isDOMElement: d,
                isFunction: function(t) {
                    return "function" == typeof t
                },
                isNumber: p,
                isObject: h,
                isString: n,
                keys: function(t) {
                    return o(32, !1, void 0, {
                        "Highcharts.keys": "use Object.keys"
                    }), Object.keys(t)
                },
                merge: function() {
                    let t, e = arguments,
                        i = {},
                        s = function(t, e) {
                            return "object" != typeof t && (t = {}), S(e, (function(i, r) {
                                "__proto__" !== r && "constructor" !== r && (!h(i, !0) || c(i) || d(i) ? t[r] = e[r] : t[r] = s(t[r] || {}, i))
                            })), t
                        };
                    !0 === e[0] && (i = e[1], e = Array.prototype.slice.call(e, 2));
                    let r = e.length;
                    for (t = 0; t < r; t++) i = s(i, e[t]);
                    return i
                },
                normalizeTickInterval: function(t, e, i, s, r) {
                    let o, a = t,
                        n = t / (i = x(i, v(t)));
                    for (!e && (e = r ? [1, 1.2, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10] : [1, 2, 2.5, 5, 10], !1 === s && (1 === i ? e = e.filter((function(t) {
                            return t % 1 == 0
                        })) : i <= .1 && (e = [1 / i]))), o = 0; o < e.length && (a = e[o], (!r || !(a * i >= t)) && (r || !(n <= (e[o] + (e[o + 1] || e[o])) / 2))); o++);
                    return b(a * i, -Math.round(Math.log(.001) / Math.LN10))
                },
                objectEach: S,
                offset: function(t) {
                    let e = s.documentElement,
                        i = t.parentElement || t.parentNode ? t.getBoundingClientRect() : {
                            top: 0,
                            left: 0,
                            width: 0,
                            height: 0
                        };
                    return {
                        top: i.top + (r.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                        left: i.left + (r.pageXOffset || e.scrollLeft) - (e.clientLeft || 0),
                        width: i.width,
                        height: i.height
                    }
                },
                pad: function(t, e, i) {
                    return Array((e || 2) + 1 - String(t).replace("-", "").length).join(i || "0") + t
                },
                pick: x,
                pInt: a,
                pushUnique: function(t, e) {
                    return 0 > t.indexOf(e) && !!t.push(e)
                },
                relativeLength: function(t, e, i) {
                    return /%$/.test(t) ? e * parseFloat(t) / 100 + (i || 0) : parseFloat(t)
                },
                removeEvent: C,
                replaceNested: function(t, ...e) {
                    let i, s;
                    do {
                        for (s of (i = t, e)) t = t.replace(s[0], s[1])
                    } while (t !== i);
                    return t
                },
                splat: f,
                stableSort: function(t, e) {
                    let i, s, r = t.length;
                    for (s = 0; s < r; s++) t[s].safeI = s;
                    for (t.sort((function(t, s) {
                            return 0 === (i = e(t, s)) ? t.safeI - s.safeI : i
                        })), s = 0; s < r; s++) delete t[s].safeI
                },
                syncTimeout: function(t, e, i) {
                    return e > 0 ? setTimeout(t, e, i) : (t.call(0, i), -1)
                },
                timeUnits: {
                    millisecond: 1,
                    second: 1e3,
                    minute: 6e4,
                    hour: 36e5,
                    day: 864e5,
                    week: 6048e5,
                    month: 24192e5,
                    year: 314496e5
                },
                uniqueKey: M,
                useSerialIds: function(t) {
                    return e = x(t, e)
                },
                wrap: function(t, e, i) {
                    let s = t[e];
                    t[e] = function() {
                        let t = arguments,
                            e = this;
                        return i.apply(this, [function() {
                            return s.apply(e, arguments.length ? arguments : t)
                        }].concat([].slice.call(arguments)))
                    }
                }
            }
        })), i(e, "Core/Chart/ChartDefaults.js", [], (function() {
            return {
                alignThresholds: !1,
                panning: {
                    enabled: !1,
                    type: "x"
                },
                styledMode: !1,
                borderRadius: 0,
                colorCount: 10,
                allowMutatingData: !0,
                ignoreHiddenSeries: !0,
                spacing: [10, 10, 15, 10],
                resetZoomButton: {
                    theme: {},
                    position: {}
                },
                reflow: !0,
                type: "line",
                zooming: {
                    singleTouch: !1,
                    resetButton: {
                        theme: {
                            zIndex: 6
                        },
                        position: {
                            align: "right",
                            x: -10,
                            y: 10
                        }
                    }
                },
                width: null,
                height: null,
                borderColor: "#334eff",
                backgroundColor: "#ffffff",
                plotBorderColor: "#cccccc"
            }
        })), i(e, "Core/Color/Palettes.js", [], (function() {
            return {
                colors: ["#2caffe", "#544fc5", "#00e272", "#fe6a35", "#6b8abc", "#d568fb", "#2ee0ca", "#fa4b42", "#feb56a", "#91e8e1"]
            }
        })), i(e, "Core/Time.js", [e["Core/Globals.js"], e["Core/Utilities.js"]], (function(t, e) {
            let {
                win: i
            } = t, {
                defined: s,
                error: r,
                extend: o,
                isNumber: a,
                isObject: n,
                merge: l,
                objectEach: h,
                pad: d,
                pick: c,
                splat: p,
                timeUnits: u
            } = e, g = t.isSafari && i.Intl && i.Intl.DateTimeFormat.prototype.formatRange, f = t.isSafari && i.Intl && !i.Intl.DateTimeFormat.prototype.formatRange;
            class m {
                constructor(t) {
                    this.options = {}, this.useUTC = !1, this.variableTimezone = !1, this.Date = i.Date, this.getTimezoneOffset = this.timezoneOffsetFunction(), this.update(t)
                }
                get(t, e) {
                    if (this.variableTimezone || this.timezoneOffset) {
                        let i = e.getTime(),
                            s = i - this.getTimezoneOffset(e);
                        e.setTime(s);
                        let r = e["getUTC" + t]();
                        return e.setTime(i), r
                    }
                    return this.useUTC ? e["getUTC" + t]() : e["get" + t]()
                }
                set(t, e, i) {
                    if (this.variableTimezone || this.timezoneOffset) {
                        if ("Milliseconds" === t || "Seconds" === t || "Minutes" === t && this.getTimezoneOffset(e) % 36e5 == 0) return e["setUTC" + t](i);
                        let s = this.getTimezoneOffset(e),
                            r = e.getTime() - s;
                        e.setTime(r), e["setUTC" + t](i);
                        let o = this.getTimezoneOffset(e);
                        return r = e.getTime() + o, e.setTime(r)
                    }
                    return this.useUTC || g && "FullYear" === t ? e["setUTC" + t](i) : e["set" + t](i)
                }
                update(t = {}) {
                    let e = c(t.useUTC, !0);
                    this.options = t = l(!0, this.options, t), this.Date = t.Date || i.Date || Date, this.useUTC = e, this.timezoneOffset = e && t.timezoneOffset || void 0, this.getTimezoneOffset = this.timezoneOffsetFunction(), this.variableTimezone = e && !(!t.getTimezoneOffset && !t.timezone)
                }
                makeTime(t, e, i, s, r, o) {
                    let a, n, l;
                    return this.useUTC ? (a = this.Date.UTC.apply(0, arguments), n = this.getTimezoneOffset(a), a += n, n !== (l = this.getTimezoneOffset(a)) ? a += l - n : n - 36e5 !== this.getTimezoneOffset(a - 36e5) || f || (a -= 36e5)) : a = new this.Date(t, e, c(i, 1), c(s, 0), c(r, 0), c(o, 0)).getTime(), a
                }
                timezoneOffsetFunction() {
                    let t = this,
                        e = this.options,
                        i = e.getTimezoneOffset;
                    return this.useUTC ? e.timezone ? t => {
                        try {
                            let i = `shortOffset,${e.timezone||""}`,
                                [s, r, o, n, l = 0] = (m.formatCache[i] = m.formatCache[i] || Intl.DateTimeFormat("en", {
                                    timeZone: e.timezone,
                                    timeZoneName: "shortOffset"
                                })).format(t).split(/(GMT|:)/).map(Number),
                                h = -36e5 * (o + l / 60);
                            if (a(h)) return h
                        } catch (i) {
                            r(34)
                        }
                        return 0
                    } : this.useUTC && i ? t => 6e4 * i(t.valueOf()) : () => 6e4 * (t.timezoneOffset || 0) : t => 6e4 * new Date(t.toString()).getTimezoneOffset()
                }
                dateFormat(e, i, r) {
                    if (!s(i) || isNaN(i)) return t.defaultOptions.lang && t.defaultOptions.lang.invalidDate || "";
                    e = c(e, "%Y-%m-%d %H:%M:%S");
                    let a = this,
                        n = new this.Date(i),
                        l = this.get("Hours", n),
                        p = this.get("Day", n),
                        u = this.get("Date", n),
                        g = this.get("Month", n),
                        f = this.get("FullYear", n),
                        m = t.defaultOptions.lang,
                        x = m && m.weekdays,
                        y = m && m.shortWeekdays;
                    return h(o({
                        a: y ? y[p] : x[p].substr(0, 3),
                        A: x[p],
                        d: d(u),
                        e: d(u, 2, " "),
                        w: p,
                        b: m.shortMonths[g],
                        B: m.months[g],
                        m: d(g + 1),
                        o: g + 1,
                        y: f.toString().substr(2, 2),
                        Y: f,
                        H: d(l),
                        k: l,
                        I: d(l % 12 || 12),
                        l: l % 12 || 12,
                        M: d(this.get("Minutes", n)),
                        p: l < 12 ? "AM" : "PM",
                        P: l < 12 ? "am" : "pm",
                        S: d(this.get("Seconds", n)),
                        L: d(Math.floor(i % 1e3), 3)
                    }, t.dateFormats), (function(t, s) {
                        for (; - 1 !== e.indexOf("%" + s);) e = e.replace("%" + s, "function" == typeof t ? t.call(a, i) : t)
                    })), r ? e.substr(0, 1).toUpperCase() + e.substr(1) : e
                }
                resolveDTLFormat(t) {
                    return n(t, !0) ? t : {
                        main: (t = p(t))[0],
                        from: t[1],
                        to: t[2]
                    }
                }
                getTimeTicks(t, e, i, r) {
                    let a, n, l, h, d = this,
                        p = d.Date,
                        g = [],
                        f = {},
                        m = new p(e),
                        x = t.unitRange,
                        y = t.count || 1;
                    if (r = c(r, 1), s(e)) {
                        d.set("Milliseconds", m, x >= u.second ? 0 : y * Math.floor(d.get("Milliseconds", m) / y)), x >= u.second && d.set("Seconds", m, x >= u.minute ? 0 : y * Math.floor(d.get("Seconds", m) / y)), x >= u.minute && d.set("Minutes", m, x >= u.hour ? 0 : y * Math.floor(d.get("Minutes", m) / y)), x >= u.hour && d.set("Hours", m, x >= u.day ? 0 : y * Math.floor(d.get("Hours", m) / y)), x >= u.day && d.set("Date", m, x >= u.month ? 1 : Math.max(1, y * Math.floor(d.get("Date", m) / y))), x >= u.month && (d.set("Month", m, x >= u.year ? 0 : y * Math.floor(d.get("Month", m) / y)), n = d.get("FullYear", m)), x >= u.year && (n -= n % y, d.set("FullYear", m, n)), x === u.week && (h = d.get("Day", m), d.set("Date", m, d.get("Date", m) - h + r + (h < r ? -7 : 0))), n = d.get("FullYear", m);
                        let t = d.get("Month", m),
                            o = d.get("Date", m),
                            c = d.get("Hours", m);
                        e = m.getTime(), (d.variableTimezone || !d.useUTC) && s(i) && (l = i - e > 4 * u.month || d.getTimezoneOffset(e) !== d.getTimezoneOffset(i));
                        let p = m.getTime();
                        for (a = 1; p < i;) g.push(p), x === u.year ? p = d.makeTime(n + a * y, 0) : x === u.month ? p = d.makeTime(n, t + a * y) : !l || x !== u.day && x !== u.week ? l && x === u.hour && y > 1 ? p = d.makeTime(n, t, o, c + a * y) : p += x * y : p = d.makeTime(n, t, o + a * y * (x === u.day ? 1 : 7)), a++;
                        g.push(p), x <= u.hour && g.length < 1e4 && g.forEach((function(t) {
                            t % 18e5 == 0 && "000000000" === d.dateFormat("%H%M%S%L", t) && (f[t] = "day")
                        }))
                    }
                    return g.info = o(t, {
                        higherRanks: f,
                        totalRange: x * y
                    }), g
                }
                getDateFormat(t, e, i, s) {
                    let r = this.dateFormat("%m-%d %H:%M:%S.%L", e),
                        o = "01-01 00:00:00.000",
                        a = {
                            millisecond: 15,
                            second: 12,
                            minute: 9,
                            hour: 6,
                            day: 3
                        },
                        n = "millisecond",
                        l = n;
                    for (n in u) {
                        if (t === u.week && +this.dateFormat("%w", e) === i && r.substr(6) === o.substr(6)) {
                            n = "week";
                            break
                        }
                        if (u[n] > t) {
                            n = l;
                            break
                        }
                        if (a[n] && r.substr(a[n]) !== o.substr(a[n])) break;
                        "week" !== n && (l = n)
                    }
                    return this.resolveDTLFormat(s[n]).main
                }
            }
            return m.formatCache = {}, m
        })), i(e, "Core/Defaults.js", [e["Core/Chart/ChartDefaults.js"], e["Core/Globals.js"], e["Core/Color/Palettes.js"], e["Core/Time.js"], e["Core/Utilities.js"]], (function(t, e, i, s, r) {
            let {
                isTouchDevice: o,
                svg: a
            } = e, {
                merge: n
            } = r, l = {
                colors: i.colors,
                symbols: ["circle", "diamond", "square", "triangle", "triangle-down"],
                lang: {
                    loading: "Loading...",
                    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                    shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    weekdays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                    decimalPoint: ".",
                    numericSymbols: ["k", "M", "G", "T", "P", "E"],
                    resetZoom: "Reset zoom",
                    resetZoomTitle: "Reset zoom level 1:1",
                    thousandsSep: " "
                },
                global: {},
                time: {
                    Date: void 0,
                    getTimezoneOffset: void 0,
                    timezone: void 0,
                    timezoneOffset: 0,
                    useUTC: !0
                },
                chart: t,
                title: {
                    style: {
                        color: "#333333",
                        fontWeight: "bold"
                    },
                    text: "Chart title",
                    align: "center",
                    margin: 15,
                    widthAdjust: -44
                },
                subtitle: {
                    style: {
                        color: "#666666",
                        fontSize: "0.8em"
                    },
                    text: "",
                    align: "center",
                    widthAdjust: -44
                },
                caption: {
                    margin: 15,
                    style: {
                        color: "#666666",
                        fontSize: "0.8em"
                    },
                    text: "",
                    align: "left",
                    verticalAlign: "bottom"
                },
                plotOptions: {},
                legend: {
                    enabled: !0,
                    align: "center",
                    alignColumns: !0,
                    className: "highcharts-no-tooltip",
                    layout: "horizontal",
                    itemMarginBottom: 2,
                    itemMarginTop: 2,
                    labelFormatter: function() {
                        return this.name
                    },
                    borderColor: "#999999",
                    borderRadius: 0,
                    navigation: {
                        style: {
                            fontSize: "0.8em"
                        },
                        activeColor: "#0022ff",
                        inactiveColor: "#cccccc"
                    },
                    itemStyle: {
                        color: "#333333",
                        cursor: "pointer",
                        fontSize: "0.8em",
                        textDecoration: "none",
                        textOverflow: "ellipsis"
                    },
                    itemHoverStyle: {
                        color: "#000000"
                    },
                    itemHiddenStyle: {
                        color: "#666666",
                        textDecoration: "line-through"
                    },
                    shadow: !1,
                    itemCheckboxStyle: {
                        position: "absolute",
                        width: "13px",
                        height: "13px"
                    },
                    squareSymbol: !0,
                    symbolPadding: 5,
                    verticalAlign: "bottom",
                    x: 0,
                    y: 0,
                    title: {
                        style: {
                            fontSize: "0.8em",
                            fontWeight: "bold"
                        }
                    }
                },
                loading: {
                    labelStyle: {
                        fontWeight: "bold",
                        position: "relative",
                        top: "45%"
                    },
                    style: {
                        position: "absolute",
                        backgroundColor: "#ffffff",
                        opacity: .5,
                        textAlign: "center"
                    }
                },
                tooltip: {
                    enabled: !0,
                    animation: a,
                    borderRadius: 3,
                    dateTimeLabelFormats: {
                        millisecond: "%A, %e %b, %H:%M:%S.%L",
                        second: "%A, %e %b, %H:%M:%S",
                        minute: "%A, %e %b, %H:%M",
                        hour: "%A, %e %b, %H:%M",
                        day: "%A, %e %b %Y",
                        week: "Week from %A, %e %b %Y",
                        month: "%B %Y",
                        year: "%Y"
                    },
                    footerFormat: "",
                    headerShape: "callout",
                    hideDelay: 500,
                    padding: 8,
                    shape: "callout",
                    shared: !1,
                    snap: o ? 25 : 10,
                    headerFormat: '<span style="font-size: 0.8em">{point.key}</span><br/>',
                    pointFormat: '<span style="color:{point.color}">●</span> {series.name}: <b>{point.y}</b><br/>',
                    backgroundColor: "#ffffff",
                    borderWidth: void 0,
                    shadow: !0,
                    stickOnContact: !1,
                    style: {
                        color: "#333333",
                        cursor: "default",
                        fontSize: "0.8em"
                    },
                    useHTML: !1
                },
                credits: {
                    enabled: !0,
                    href: "https://www.highcharts.com?credits",
                    position: {
                        align: "right",
                        x: -10,
                        verticalAlign: "bottom",
                        y: -5
                    },
                    style: {
                        cursor: "pointer",
                        color: "#999999",
                        fontSize: "0.6em"
                    },
                    text: "Highcharts.com"
                }
            };
            l.chart.styledMode = !1;
            let h = new s(l.time);
            return {
                defaultOptions: l,
                defaultTime: h,
                getOptions: function() {
                    return l
                },
                setOptions: function(t) {
                    return n(!0, l, t), (t.time || t.global) && (e.time ? e.time.update(n(l.global, l.time, t.global, t.time)) : e.time = h), l
                }
            }
        })), i(e, "Core/Color/Color.js", [e["Core/Globals.js"], e["Core/Utilities.js"]], (function(t, e) {
            let {
                isNumber: i,
                merge: s,
                pInt: r
            } = e;
            class o {
                static parse(t) {
                    return t ? new o(t) : o.None
                }
                constructor(e) {
                    let i, s, r, a;
                    this.rgba = [NaN, NaN, NaN, NaN], this.input = e;
                    let n = t.Color;
                    if (n && n !== o) return new n(e);
                    if ("object" == typeof e && void 0 !== e.stops) this.stops = e.stops.map((t => new o(t[1])));
                    else if ("string" == typeof e) {
                        if (this.input = e = o.names[e.toLowerCase()] || e, "#" === e.charAt(0)) {
                            let t = e.length,
                                i = parseInt(e.substr(1), 16);
                            7 === t ? s = [(16711680 & i) >> 16, (65280 & i) >> 8, 255 & i, 1] : 4 === t && (s = [(3840 & i) >> 4 | (3840 & i) >> 8, (240 & i) >> 4 | 240 & i, (15 & i) << 4 | 15 & i, 1])
                        }
                        if (!s)
                            for (r = o.parsers.length; r-- && !s;)(i = (a = o.parsers[r]).regex.exec(e)) && (s = a.parse(i))
                    }
                    s && (this.rgba = s)
                }
                get(t) {
                    let e = this.input,
                        r = this.rgba;
                    if ("object" == typeof e && void 0 !== this.stops) {
                        let i = s(e);
                        return i.stops = [].slice.call(i.stops), this.stops.forEach(((e, s) => {
                            i.stops[s] = [i.stops[s][0], e.get(t)]
                        })), i
                    }
                    return r && i(r[0]) ? "rgb" === t || !t && 1 === r[3] ? "rgb(" + r[0] + "," + r[1] + "," + r[2] + ")" : "a" === t ? `${r[3]}` : "rgba(" + r.join(",") + ")" : e
                }
                brighten(t) {
                    let e = this.rgba;
                    if (this.stops) this.stops.forEach((function(e) {
                        e.brighten(t)
                    }));
                    else if (i(t) && 0 !== t)
                        for (let i = 0; i < 3; i++) e[i] += r(255 * t), e[i] < 0 && (e[i] = 0), e[i] > 255 && (e[i] = 255);
                    return this
                }
                setOpacity(t) {
                    return this.rgba[3] = t, this
                }
                tweenTo(t, e) {
                    let s = this.rgba,
                        r = t.rgba;
                    if (!i(s[0]) || !i(r[0])) return t.input || "none";
                    let o = 1 !== r[3] || 1 !== s[3];
                    return (o ? "rgba(" : "rgb(") + Math.round(r[0] + (s[0] - r[0]) * (1 - e)) + "," + Math.round(r[1] + (s[1] - r[1]) * (1 - e)) + "," + Math.round(r[2] + (s[2] - r[2]) * (1 - e)) + (o ? "," + (r[3] + (s[3] - r[3]) * (1 - e)) : "") + ")"
                }
            }
            return o.names = {
                white: "#ffffff",
                black: "#000000"
            }, o.parsers = [{
                regex: /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,
                parse: function(t) {
                    return [r(t[1]), r(t[2]), r(t[3]), parseFloat(t[4], 10)]
                }
            }, {
                regex: /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/,
                parse: function(t) {
                    return [r(t[1]), r(t[2]), r(t[3]), 1]
                }
            }], o.None = new o(""), o
        })), i(e, "Core/Animation/Fx.js", [e["Core/Color/Color.js"], e["Core/Globals.js"], e["Core/Utilities.js"]], (function(t, e, i) {
            let {
                parse: s
            } = t, {
                win: r
            } = e, {
                isNumber: o,
                objectEach: a
            } = i;
            class n {
                constructor(t, e, i) {
                    this.pos = NaN, this.options = e, this.elem = t, this.prop = i
                }
                dSetter() {
                    let t = this.paths,
                        e = t && t[0],
                        i = t && t[1],
                        s = this.now || 0,
                        r = [];
                    if (1 !== s && e && i)
                        if (e.length === i.length && s < 1)
                            for (let a = 0; a < i.length; a++) {
                                let t = e[a],
                                    n = i[a],
                                    l = [];
                                for (let e = 0; e < n.length; e++) {
                                    let i = t[e],
                                        r = n[e];
                                    o(i) && o(r) && ("A" !== n[0] || 4 !== e && 5 !== e) ? l[e] = i + s * (r - i) : l[e] = r
                                }
                                r.push(l)
                            } else r = i;
                        else r = this.toD || [];
                    this.elem.attr("d", r, void 0, !0)
                }
                update() {
                    let t = this.elem,
                        e = this.prop,
                        i = this.now,
                        s = this.options.step;
                    this[e + "Setter"] ? this[e + "Setter"]() : t.attr ? t.element && t.attr(e, i, null, !0) : t.style[e] = i + this.unit, s && s.call(t, i, this)
                }
                run(t, e, i) {
                    let s = this,
                        o = s.options,
                        a = function(t) {
                            return !a.stopped && s.step(t)
                        },
                        l = r.requestAnimationFrame || function(t) {
                            setTimeout(t, 13)
                        },
                        h = function() {
                            for (let t = 0; t < n.timers.length; t++) n.timers[t]() || n.timers.splice(t--, 1);
                            n.timers.length && l(h)
                        };
                    t !== e || this.elem["forceAnimate:" + this.prop] ? (this.startTime = +new Date, this.start = t, this.end = e, this.unit = i, this.now = this.start, this.pos = 0, a.elem = this.elem, a.prop = this.prop, a() && 1 === n.timers.push(a) && l(h)) : (delete o.curAnim[this.prop], o.complete && 0 === Object.keys(o.curAnim).length && o.complete.call(this.elem))
                }
                step(t) {
                    let e, i, s = +new Date,
                        r = this.options,
                        o = this.elem,
                        n = r.complete,
                        l = r.duration,
                        h = r.curAnim;
                    return o.attr && !o.element ? e = !1 : t || s >= l + this.startTime ? (this.now = this.end, this.pos = 1, this.update(), h[this.prop] = !0, i = !0, a(h, (function(t) {
                        !0 !== t && (i = !1)
                    })), i && n && n.call(o), e = !1) : (this.pos = r.easing((s - this.startTime) / l), this.now = this.start + (this.end - this.start) * this.pos, this.update(), e = !0), e
                }
                initPath(t, e, i) {
                    let s, r, a, n, l = t.startX,
                        h = t.endX,
                        d = i.slice(),
                        c = t.isArea,
                        p = c ? 2 : 1,
                        u = e && e.slice();
                    if (!u) return [d, d];

                    function g(t, e) {
                        for (; t.length < r;) {
                            let i = t[0],
                                s = e[r - t.length];
                            if (s && "M" === i[0] && ("C" === s[0] ? t[0] = ["C", i[1], i[2], i[1], i[2], i[1], i[2]] : t[0] = ["L", i[1], i[2]]), t.unshift(i), c) {
                                let e = t.pop();
                                t.push(t[t.length - 1], e)
                            }
                        }
                    }

                    function f(t) {
                        for (; t.length < r;) {
                            let e = t[Math.floor(t.length / p) - 1].slice();
                            if ("C" === e[0] && (e[1] = e[5], e[2] = e[6]), c) {
                                let i = t[Math.floor(t.length / p)].slice();
                                t.splice(t.length / 2, 0, e, i)
                            } else t.push(e)
                        }
                    }
                    if (l && h && h.length) {
                        for (a = 0; a < l.length; a++) {
                            if (l[a] === h[0]) {
                                s = a;
                                break
                            }
                            if (l[0] === h[h.length - l.length + a]) {
                                s = a, n = !0;
                                break
                            }
                            if (l[l.length - 1] === h[h.length - l.length + a]) {
                                s = l.length - a;
                                break
                            }
                        }
                        void 0 === s && (u = [])
                    }
                    return u.length && o(s) && (r = d.length + s * p, n ? (g(u, d), f(d)) : (g(d, u), f(u))), [u, d]
                }
                fillSetter() {
                    n.prototype.strokeSetter.apply(this, arguments)
                }
                strokeSetter() {
                    this.elem.attr(this.prop, s(this.start).tweenTo(s(this.end), this.pos), void 0, !0)
                }
            }
            return n.timers = [], n
        })), i(e, "Core/Animation/AnimationUtilities.js", [e["Core/Animation/Fx.js"], e["Core/Utilities.js"]], (function(t, e) {
            let {
                defined: i,
                getStyle: s,
                isArray: r,
                isNumber: o,
                isObject: a,
                merge: n,
                objectEach: l,
                pick: h
            } = e;

            function d(t) {
                return a(t) ? n({
                    duration: 500,
                    defer: 0
                }, t) : {
                    duration: t ? 500 : 0,
                    defer: 0
                }
            }

            function c(e, i) {
                let s = t.timers.length;
                for (; s--;) t.timers[s].elem !== e || i && i !== t.timers[s].prop || (t.timers[s].stopped = !0)
            }
            return {
                animate: function(e, i, h) {
                    let d, p, u, g, f = "";
                    a(h) || (g = arguments, h = {
                        duration: g[2],
                        easing: g[3],
                        complete: g[4]
                    }), o(h.duration) || (h.duration = 400), h.easing = "function" == typeof h.easing ? h.easing : Math[h.easing] || Math.easeInOutSine, h.curAnim = n(i), l(i, (function(o, a) {
                        c(e, a), u = new t(e, h, a), p = void 0, "d" === a && r(i.d) ? (u.paths = u.initPath(e, e.pathArray, i.d), u.toD = i.d, d = 0, p = 1) : e.attr ? d = e.attr(a) : (d = parseFloat(s(e, a)) || 0, "opacity" !== a && (f = "px")), p || (p = o), "string" == typeof p && p.match("px") && (p = p.replace(/px/g, "")), u.run(d, p, f)
                    }))
                },
                animObject: d,
                getDeferredAnimation: function(t, e, s) {
                    let r = d(e),
                        o = s ? [s] : t.series,
                        n = 0,
                        l = 0;
                    return o.forEach((t => {
                        let s = d(t.options.animation);
                        n = a(e) && i(e.defer) ? r.defer : Math.max(n, s.duration + s.defer), l = Math.min(r.duration, s.duration)
                    })), t.renderer.forExport && (n = 0), {
                        defer: Math.max(0, n - l),
                        duration: Math.min(n, l)
                    }
                },
                setAnimation: function(t, e) {
                    e.renderer.globalAnimation = h(t, e.options.chart.animation, !0)
                },
                stop: c
            }
        })), i(e, "Core/Renderer/HTML/AST.js", [e["Core/Globals.js"], e["Core/Utilities.js"]], (function(t, e) {
            let {
                SVG_NS: i,
                win: s
            } = t, {
                attr: r,
                createElement: o,
                css: a,
                error: n,
                isFunction: l,
                isString: h,
                objectEach: d,
                splat: c
            } = e, {
                trustedTypes: p
            } = s, u = p && l(p.createPolicy) && p.createPolicy("highcharts", {
                createHTML: t => t
            }), g = u ? u.createHTML("") : "", f = function() {
                try {
                    return !!(new DOMParser).parseFromString(g, "text/html")
                } catch (t) {
                    return !1
                }
            }();
            class m {
                static filterUserAttributes(t) {
                    return d(t, ((e, i) => {
                        let s = !0; - 1 === m.allowedAttributes.indexOf(i) && (s = !1), -1 !== ["background", "dynsrc", "href", "lowsrc", "src"].indexOf(i) && (s = h(e) && m.allowedReferences.some((t => 0 === e.indexOf(t)))), s || (n(33, !1, void 0, {
                            "Invalid attribute in config": `${i}`
                        }), delete t[i]), h(e) && t[i] && (t[i] = e.replace(/</g, "&lt;"))
                    })), t
                }
                static parseStyle(t) {
                    return t.split(";").reduce(((t, e) => {
                        let i = e.split(":").map((t => t.trim())),
                            s = i.shift();
                        return s && i.length && (t[s.replace(/-([a-z])/g, (t => t[1].toUpperCase()))] = i.join(":")), t
                    }), {})
                }
                static setElementHTML(t, e) {
                    t.innerHTML = m.emptyHTML, e && new m(e).addToDOM(t)
                }
                constructor(t) {
                    this.nodes = "string" == typeof t ? this.parseMarkup(t) : t
                }
                addToDOM(e) {
                    return function e(s, o) {
                        let l;
                        return c(s).forEach((function(s) {
                            let h, c = s.tagName,
                                p = s.textContent ? t.doc.createTextNode(s.textContent) : void 0,
                                u = m.bypassHTMLFiltering;
                            if (c)
                                if ("#text" === c) h = p;
                                else if (-1 !== m.allowedTags.indexOf(c) || u) {
                                let n = "svg" === c ? i : o.namespaceURI || i,
                                    l = t.doc.createElementNS(n, c),
                                    g = s.attributes || {};
                                d(s, (function(t, e) {
                                    "tagName" !== e && "attributes" !== e && "children" !== e && "style" !== e && "textContent" !== e && (g[e] = t)
                                })), r(l, u ? g : m.filterUserAttributes(g)), s.style && a(l, s.style), p && l.appendChild(p), e(s.children || [], l), h = l
                            } else n(33, !1, void 0, {
                                "Invalid tagName in config": c
                            });
                            h && o.appendChild(h), l = h
                        })), l
                    }(this.nodes, e)
                }
                parseMarkup(t) {
                    let e, i = [];
                    if (t = t.trim().replace(/ style=(["'])/g, " data-style=$1"), f) e = (new DOMParser).parseFromString(u ? u.createHTML(t) : t, "text/html");
                    else {
                        let i = o("div");
                        i.innerHTML = t, e = {
                            body: i
                        }
                    }
                    let s = (t, e) => {
                        let i = t.nodeName.toLowerCase(),
                            r = {
                                tagName: i
                            };
                        "#text" === i && (r.textContent = t.textContent || "");
                        let o = t.attributes;
                        if (o) {
                            let t = {};
                            [].forEach.call(o, (e => {
                                "data-style" === e.name ? r.style = m.parseStyle(e.value) : t[e.name] = e.value
                            })), r.attributes = t
                        }
                        if (t.childNodes.length) {
                            let e = [];
                            [].forEach.call(t.childNodes, (t => {
                                s(t, e)
                            })), e.length && (r.children = e)
                        }
                        e.push(r)
                    };
                    return [].forEach.call(e.body.childNodes, (t => s(t, i))), i
                }
            }
            return m.allowedAttributes = ["alt", "aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup", "aria-hidden", "aria-label", "aria-labelledby", "aria-live", "aria-pressed", "aria-readonly", "aria-roledescription", "aria-selected", "class", "clip-path", "color", "colspan", "cx", "cy", "d", "dx", "dy", "disabled", "fill", "filterUnits", "flood-color", "flood-opacity", "height", "href", "id", "in", "markerHeight", "markerWidth", "offset", "opacity", "orient", "padding", "paddingLeft", "paddingRight", "patternUnits", "r", "refX", "refY", "role", "scope", "slope", "src", "startOffset", "stdDeviation", "stroke", "stroke-linecap", "stroke-width", "style", "tableValues", "result", "rowspan", "summary", "target", "tabindex", "text-align", "text-anchor", "textAnchor", "textLength", "title", "type", "valign", "width", "x", "x1", "x2", "xlink:href", "y", "y1", "y2", "zIndex"], m.allowedReferences = ["https://", "http://", "mailto:", "/", "../", "./", "#"], m.allowedTags = ["a", "abbr", "b", "br", "button", "caption", "circle", "clipPath", "code", "dd", "defs", "div", "dl", "dt", "em", "feComponentTransfer", "feDropShadow", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feOffset", "feMerge", "feMergeNode", "filter", "h1", "h2", "h3", "h4", "h5", "h6", "hr", "i", "img", "li", "linearGradient", "marker", "ol", "p", "path", "pattern", "pre", "rect", "small", "span", "stop", "strong", "style", "sub", "sup", "svg", "table", "text", "textPath", "thead", "title", "tbody", "tspan", "td", "th", "tr", "u", "ul", "#text"], m.emptyHTML = g, m.bypassHTMLFiltering = !1, m
        })), i(e, "Core/Templating.js", [e["Core/Defaults.js"], e["Core/Utilities.js"]], (function(t, e) {
            let {
                defaultOptions: i,
                defaultTime: s
            } = t, {
                extend: r,
                getNestedProperty: o,
                isArray: a,
                isNumber: n,
                isObject: l,
                pick: h,
                pInt: d
            } = e, c = {
                add: (t, e) => t + e,
                divide: (t, e) => 0 !== e ? t / e : "",
                eq: (t, e) => t == e,
                each: function(t) {
                    let e = arguments[arguments.length - 1];
                    return !!a(t) && t.map(((i, s) => p(e.body, r(l(i) ? i : {
                        "@this": i
                    }, {
                        "@index": s,
                        "@first": 0 === s,
                        "@last": s === t.length - 1
                    })))).join("")
                },
                ge: (t, e) => t >= e,
                gt: (t, e) => t > e,
                if: t => !!t,
                le: (t, e) => t <= e,
                lt: (t, e) => t < e,
                multiply: (t, e) => t * e,
                ne: (t, e) => t != e,
                subtract: (t, e) => t - e,
                unless: t => !t
            };

            function p(t = "", e, r) {
                let a, n, l, d = /\{([a-zA-Z0-9\:\.\,;\-\/<>%_@"'= #\(\)]+)\}/g,
                    g = /\(([a-zA-Z0-9\:\.\,;\-\/<>%_@"'= ]+)\)/g,
                    f = [],
                    m = /f$/,
                    x = /\.([0-9])/,
                    y = i.lang,
                    v = r && r.time || s,
                    b = r && r.numberFormatter || u,
                    k = (t = "") => {
                        let i;
                        return "true" === t || "false" !== t && ((i = Number(t)).toString() === t ? i : o(t, e))
                    },
                    S = 0;
                for (; null !== (a = d.exec(t));) {
                    let i = g.exec(a[1]);
                    i && (a = i, l = !0), n && n.isBlock || (n = {
                        ctx: e,
                        expression: a[1],
                        find: a[0],
                        isBlock: "#" === a[1].charAt(0),
                        start: a.index,
                        startInner: a.index + a[0].length,
                        length: a[0].length
                    });
                    let s = a[1].split(" ")[0].replace("#", "");
                    c[s] && (n.isBlock && s === n.fn && S++, n.fn || (n.fn = s));
                    let r = "else" === a[1];
                    if (n.isBlock && n.fn && (a[1] === `/${n.fn}` || r))
                        if (S) !r && S--;
                        else {
                            let e = n.startInner,
                                i = t.substr(e, a.index - e);
                            void 0 === n.body ? (n.body = i, n.startInner = a.index + a[0].length) : n.elseBody = i, n.find += i + a[0], r || (f.push(n), n = void 0)
                        }
                    else n.isBlock || f.push(n);
                    if (i && !(null == n ? void 0 : n.isBlock)) break
                }
                return f.forEach((i => {
                    let s, r, {
                        body: o,
                        elseBody: a,
                        expression: n,
                        fn: l
                    } = i;
                    if (l) {
                        let t = [i],
                            h = n.split(" ");
                        for (r = c[l].length; r--;) t.unshift(k(h[r + 1]));
                        s = c[l].apply(e, t), i.isBlock && "boolean" == typeof s && (s = p(s ? o : a, e))
                    } else {
                        let t = n.split(":");
                        if (s = k(t.shift() || ""), t.length && "number" == typeof s) {
                            let e = t.join(":");
                            if (m.test(e)) {
                                let t = parseInt((e.match(x) || ["", "-1"])[1], 10);
                                null !== s && (s = b(s, t, y.decimalPoint, e.indexOf(",") > -1 ? y.thousandsSep : ""))
                            } else s = v.dateFormat(e, s)
                        }
                    }
                    t = t.replace(i.find, h(s, ""))
                })), l ? p(t, e, r) : t
            }

            function u(t, e, s, r) {
                let o, a;
                t = +t || 0, e = +e;
                let l = i.lang,
                    c = (t.toString().split(".")[1] || "").split("e")[0].length,
                    p = t.toString().split("e"),
                    u = e; - 1 === e ? e = Math.min(c, 20) : n(e) ? e && p[1] && p[1] < 0 && ((a = e + +p[1]) >= 0 ? (p[0] = (+p[0]).toExponential(a).split("e")[0], e = a) : (p[0] = p[0].split(".")[0] || 0, t = e < 20 ? (p[0] * Math.pow(10, p[1])).toFixed(e) : 0, p[1] = 0)) : e = 2;
                let g = (Math.abs(p[1] ? p[0] : t) + Math.pow(10, -Math.max(e, c) - 1)).toFixed(e),
                    f = String(d(g)),
                    m = f.length > 3 ? f.length % 3 : 0;
                return s = h(s, l.decimalPoint), r = h(r, l.thousandsSep), o = (t < 0 ? "-" : "") + (m ? f.substr(0, m) + r : ""), 0 > +p[1] && !u ? o = "0" : o += f.substr(m).replace(/(\d{3})(?=\d)/g, "$1" + r), e && (o += s + g.slice(-e)), p[1] && 0 != +o && (o += "e" + p[1]), o
            }
            return {
                dateFormat: function(t, e, i) {
                    return s.dateFormat(t, e, i)
                },
                format: p,
                helpers: c,
                numberFormat: u
            }
        })), i(e, "Core/Renderer/RendererRegistry.js", [e["Core/Globals.js"]], (function(t) {
            var e, i;
            let s;
            return (i = e || (e = {})).rendererTypes = {}, i.getRendererType = function(t = s) {
                return i.rendererTypes[t] || i.rendererTypes[s]
            }, i.registerRendererType = function(e, r, o) {
                i.rendererTypes[e] = r, (!s || o) && (s = e, t.Renderer = r)
            }, e
        })), i(e, "Core/Renderer/RendererUtilities.js", [e["Core/Utilities.js"]], (function(t) {
            var e;
            let {
                clamp: i,
                pick: s,
                pushUnique: r,
                stableSort: o
            } = t;
            return (e || (e = {})).distribute = function t(e, a, n) {
                let l, h, d, c, p, u, g = e,
                    f = g.reducedLen || a,
                    m = (t, e) => t.target - e.target,
                    x = [],
                    y = e.length,
                    v = [],
                    b = x.push,
                    k = !0,
                    S = 0;
                for (l = y; l--;) S += e[l].size;
                if (S > f) {
                    for (o(e, ((t, e) => (e.rank || 0) - (t.rank || 0))), d = (u = e[0].rank === e[e.length - 1].rank) ? y / 2 : -1, h = u ? d : y - 1; d && S > f;) c = e[l = Math.floor(h)], r(v, l) && (S -= c.size), h += d, u && h >= e.length && (d /= 2, h = d);
                    v.sort(((t, e) => e - t)).forEach((t => b.apply(x, e.splice(t, 1))))
                }
                for (o(e, m), e = e.map((t => ({
                        size: t.size,
                        targets: [t.target],
                        align: s(t.align, .5)
                    }))); k;) {
                    for (l = e.length; l--;) c = e[l], p = (Math.min.apply(0, c.targets) + Math.max.apply(0, c.targets)) / 2, c.pos = i(p - c.size * c.align, 0, a - c.size);
                    for (l = e.length, k = !1; l--;) l > 0 && e[l - 1].pos + e[l - 1].size > e[l].pos && (e[l - 1].size += e[l].size, e[l - 1].targets = e[l - 1].targets.concat(e[l].targets), e[l - 1].align = .5, e[l - 1].pos + e[l - 1].size > a && (e[l - 1].pos = a - e[l - 1].size), e.splice(l, 1), k = !0)
                }
                return b.apply(g, x), l = 0, e.some((e => {
                    let i = 0;
                    return (e.targets || []).some((() => (g[l].pos = e.pos + i, void 0 !== n && Math.abs(g[l].pos - g[l].target) > n ? (g.slice(0, l + 1).forEach((t => delete t.pos)), g.reducedLen = (g.reducedLen || a) - .1 * a, g.reducedLen > .1 * a && t(g, a, n), !0) : (i += g[l].size, l++, !1))))
                })), o(g, m), g
            }, e
        })), i(e, "Core/Renderer/SVG/SVGElement.js", [e["Core/Animation/AnimationUtilities.js"], e["Core/Color/Color.js"], e["Core/Globals.js"], e["Core/Utilities.js"]], (function(t, e, i, s) {
            let {
                animate: r,
                animObject: o,
                stop: a
            } = t, {
                deg2rad: n,
                doc: l,
                svg: h,
                SVG_NS: d,
                win: c
            } = i, {
                addEvent: p,
                attr: u,
                createElement: g,
                css: f,
                defined: m,
                erase: x,
                extend: y,
                fireEvent: v,
                isArray: b,
                isFunction: k,
                isObject: S,
                isString: C,
                merge: w,
                objectEach: M,
                pick: A,
                pInt: T,
                replaceNested: P,
                syncTimeout: L,
                uniqueKey: O
            } = s;
            class E {
                _defaultGetter(t) {
                    let e = A(this[t + "Value"], this[t], this.element ? this.element.getAttribute(t) : null, 0);
                    return /^[\-0-9\.]+$/.test(e) && (e = parseFloat(e)), e
                }
                _defaultSetter(t, e, i) {
                    i.setAttribute(e, t)
                }
                add(t) {
                    let e, i = this.renderer,
                        s = this.element;
                    return t && (this.parentGroup = t), void 0 !== this.textStr && "text" === this.element.nodeName && i.buildText(this), this.added = !0, (!t || t.handleZ || this.zIndex) && (e = this.zIndexSetter()), e || (t ? t.element : i.box).appendChild(s), this.onAdd && this.onAdd(), this
                }
                addClass(t, e) {
                    let i = e ? "" : this.attr("class") || "";
                    return (t = (t || "").split(/ /g).reduce((function(t, e) {
                        return -1 === i.indexOf(e) && t.push(e), t
                    }), i ? [i] : []).join(" ")) !== i && this.attr("class", t), this
                }
                afterSetters() {
                    this.doTransform && (this.updateTransform(), this.doTransform = !1)
                }
                align(t, e, i, s = !0) {
                    let r, o, a, n, l, h = {},
                        d = this.renderer,
                        c = d.alignedObjects;
                    t ? (this.alignOptions = t, this.alignByTranslate = e, (!i || C(i)) && (this.alignTo = a = i || "renderer", x(c, this), c.push(this), i = void 0)) : (t = this.alignOptions, e = this.alignByTranslate, a = this.alignTo), i = A(i, d[a], d);
                    let p = t.align,
                        u = t.verticalAlign;
                    return r = (i.x || 0) + (t.x || 0), o = (i.y || 0) + (t.y || 0), "right" === p ? n = 1 : "center" === p && (n = 2), n && (r += (i.width - (t.width || 0)) / n), h[e ? "translateX" : "x"] = Math.round(r), "bottom" === u ? l = 1 : "middle" === u && (l = 2), l && (o += (i.height - (t.height || 0)) / l), h[e ? "translateY" : "y"] = Math.round(o), s && (this[this.placed ? "animate" : "attr"](h), this.placed = !0), this.alignAttr = h, this
                }
                alignSetter(t) {
                    let e = {
                        left: "start",
                        center: "middle",
                        right: "end"
                    };
                    e[t] && (this.alignValue = t, this.element.setAttribute("text-anchor", e[t]))
                }
                animate(t, e, i) {
                    let s = o(A(e, this.renderer.globalAnimation, !0)),
                        a = s.defer;
                    return l.hidden && (s.duration = 0), 0 !== s.duration ? (i && (s.complete = i), L((() => {
                        this.element && r(this, t, s)
                    }), a)) : (this.attr(t, void 0, i || s.complete), M(t, (function(t, e) {
                        s.step && s.step.call(this, t, {
                            prop: e,
                            pos: 1,
                            elem: this
                        })
                    }), this)), this
                }
                applyTextOutline(t) {
                    let e = this.element; - 1 !== t.indexOf("contrast") && (t = t.replace(/contrast/g, this.renderer.getContrast(e.style.fill)));
                    let s = t.split(" "),
                        r = s[s.length - 1],
                        o = s[0];
                    if (o && "none" !== o && i.svg) {
                        this.fakeTS = !0, o = o.replace(/(^[\d\.]+)(.*?)$/g, (function(t, e, i) {
                            return 2 * Number(e) + i
                        })), this.removeTextOutline();
                        let t = l.createElementNS(d, "tspan");
                        u(t, {
                            class: "highcharts-text-outline",
                            fill: r,
                            stroke: r,
                            "stroke-width": o,
                            "stroke-linejoin": "round"
                        });
                        let i = e.querySelector("textPath") || e;
                        [].forEach.call(i.childNodes, (e => {
                            let i = e.cloneNode(!0);
                            i.removeAttribute && ["fill", "stroke", "stroke-width", "stroke"].forEach((t => i.removeAttribute(t))), t.appendChild(i)
                        }));
                        let s = 0;
                        [].forEach.call(i.querySelectorAll("text tspan"), (t => {
                            s += Number(t.getAttribute("dy"))
                        }));
                        let a = l.createElementNS(d, "tspan");
                        a.textContent = "​", u(a, {
                            x: Number(e.getAttribute("x")),
                            dy: -s
                        }), t.appendChild(a), i.insertBefore(t, i.firstChild)
                    }
                }
                attr(t, e, i, s) {
                    let r, o, n, l = this.element,
                        h = E.symbolCustomAttribs,
                        d = this;
                    return "string" == typeof t && void 0 !== e && (r = t, (t = {})[r] = e), "string" == typeof t ? d = (this[t + "Getter"] || this._defaultGetter).call(this, t, l) : (M(t, (function(e, i) {
                        n = !1, s || a(this, i), this.symbolName && -1 !== h.indexOf(i) && (o || (this.symbolAttr(t), o = !0), n = !0), this.rotation && ("x" === i || "y" === i) && (this.doTransform = !0), n || (this[i + "Setter"] || this._defaultSetter).call(this, e, i, l)
                    }), this), this.afterSetters()), i && i.call(this), d
                }
                clip(t) {
                    if (t && !t.clipPath) {
                        let e = O() + "-",
                            i = this.renderer.createElement("clipPath").attr({
                                id: e
                            }).add(this.renderer.defs);
                        y(t, {
                            clipPath: i,
                            id: e,
                            count: 0
                        }), t.add(i)
                    }
                    return this.attr("clip-path", t ? `url(${this.renderer.url}#${t.id})` : "none")
                }
                crisp(t, e) {
                    let i = Math.round(e = e || t.strokeWidth || 0) % 2 / 2;
                    return t.x = Math.floor(t.x || this.x || 0) + i, t.y = Math.floor(t.y || this.y || 0) + i, t.width = Math.floor((t.width || this.width || 0) - 2 * i), t.height = Math.floor((t.height || this.height || 0) - 2 * i), m(t.strokeWidth) && (t.strokeWidth = e), t
                }
                complexColor(t, i, s) {
                    let r, o, a, n, l, h, d, c, p, u, g, f = this.renderer,
                        x = [];
                    v(this.renderer, "complexColor", {
                        args: arguments
                    }, (function() {
                        if (t.radialGradient ? o = "radialGradient" : t.linearGradient && (o = "linearGradient"), o) {
                            if (a = t[o], l = f.gradients, h = t.stops, p = s.radialReference, b(a) && (t[o] = a = {
                                    x1: a[0],
                                    y1: a[1],
                                    x2: a[2],
                                    y2: a[3],
                                    gradientUnits: "userSpaceOnUse"
                                }), "radialGradient" === o && p && !m(a.gradientUnits) && (n = a, a = w(a, f.getRadialAttr(p, n), {
                                    gradientUnits: "userSpaceOnUse"
                                })), M(a, (function(t, e) {
                                    "id" !== e && x.push(e, t)
                                })), M(h, (function(t) {
                                    x.push(t)
                                })), l[x = x.join(",")]) u = l[x].attr("id");
                            else {
                                a.id = u = O();
                                let t = l[x] = f.createElement(o).attr(a).add(f.defs);
                                t.radAttr = n, t.stops = [], h.forEach((function(i) {
                                    0 === i[1].indexOf("rgba") ? (d = (r = e.parse(i[1])).get("rgb"), c = r.get("a")) : (d = i[1], c = 1);
                                    let s = f.createElement("stop").attr({
                                        offset: i[0],
                                        "stop-color": d,
                                        "stop-opacity": c
                                    }).add(t);
                                    t.stops.push(s)
                                }))
                            }
                            g = "url(" + f.url + "#" + u + ")", s.setAttribute(i, g), s.gradient = x, t.toString = function() {
                                return g
                            }
                        }
                    }))
                }
                css(t) {
                    let e, i = this.styles,
                        s = {},
                        r = this.element,
                        o = !i;
                    if (i && M(t, (function(t, e) {
                            i && i[e] !== t && (s[e] = t, o = !0)
                        })), o) {
                        i && (t = y(i, s)), null === t.width || "auto" === t.width ? delete this.textWidth : "text" === r.nodeName.toLowerCase() && t.width && (e = this.textWidth = T(t.width)), y(this.styles, t), e && !h && this.renderer.forExport && delete t.width;
                        let o = w(t);
                        r.namespaceURI === this.SVG_NS && (["textOutline", "textOverflow", "width"].forEach((t => o && delete o[t])), o.color && (o.fill = o.color)), f(r, o)
                    }
                    return this.added && ("text" === this.element.nodeName && this.renderer.buildText(this), t.textOutline && this.applyTextOutline(t.textOutline)), this
                }
                dashstyleSetter(t) {
                    let e, i = this["stroke-width"];
                    if ("inherit" === i && (i = 1), t = t && t.toLowerCase()) {
                        let s = t.replace("shortdashdotdot", "3,1,1,1,1,1,").replace("shortdashdot", "3,1,1,1").replace("shortdot", "1,1,").replace("shortdash", "3,1,").replace("longdash", "8,3,").replace(/dot/g, "1,3,").replace("dash", "4,3,").replace(/,$/, "").split(",");
                        for (e = s.length; e--;) s[e] = "" + T(s[e]) * A(i, NaN);
                        t = s.join(",").replace(/NaN/g, "none"), this.element.setAttribute("stroke-dasharray", t)
                    }
                }
                destroy() {
                    var t;
                    let e, i, s = this,
                        r = s.element || {},
                        o = s.renderer,
                        n = r.ownerSVGElement,
                        l = "SPAN" === r.nodeName && s.parentGroup || void 0;
                    if (r.onclick = r.onmouseout = r.onmouseover = r.onmousemove = r.point = null, a(s), s.clipPath && n) {
                        let t = s.clipPath;
                        [].forEach.call(n.querySelectorAll("[clip-path],[CLIP-PATH]"), (function(e) {
                            e.getAttribute("clip-path").indexOf(t.element.id) > -1 && e.removeAttribute("clip-path")
                        })), s.clipPath = t.destroy()
                    }
                    if (s.connector = null == (t = s.connector) ? void 0 : t.destroy(), s.stops) {
                        for (i = 0; i < s.stops.length; i++) s.stops[i].destroy();
                        s.stops.length = 0, s.stops = void 0
                    }
                    for (s.safeRemoveChild(r); l && l.div && 0 === l.div.childNodes.length;) e = l.parentGroup, s.safeRemoveChild(l.div), delete l.div, l = e;
                    s.alignTo && x(o.alignedObjects, s), M(s, (function(t, e) {
                        s[e] && s[e].parentGroup === s && s[e].destroy && s[e].destroy(), delete s[e]
                    }))
                }
                dSetter(t, e, i) {
                    b(t) && ("string" == typeof t[0] && (t = this.renderer.pathToSegments(t)), this.pathArray = t, t = t.reduce(((t, e, i) => e && e.join ? (i ? t + " " : "") + e.join(" ") : (e || "").toString()), "")), /(NaN| {2}|^$)/.test(t) && (t = "M 0 0"), this[e] !== t && (i.setAttribute(e, t), this[e] = t)
                }
                fillSetter(t, e, i) {
                    "string" == typeof t ? i.setAttribute(e, t) : t && this.complexColor(t, e, i)
                }
                hrefSetter(t, e, i) {
                    i.setAttributeNS("http://www.w3.org/1999/xlink", e, t)
                }
                getBBox(t, e) {
                    let i, s, r, o, {
                            alignValue: a,
                            element: n,
                            renderer: l,
                            styles: h,
                            textStr: d
                        } = this,
                        {
                            cache: c,
                            cacheKeys: p
                        } = l,
                        u = n.namespaceURI === this.SVG_NS,
                        g = A(e, this.rotation, 0),
                        x = l.styledMode ? n && E.prototype.getStyle.call(n, "font-size") : h.fontSize;
                    if (m(d) && (-1 === (o = d.toString()).indexOf("<") && (o = o.replace(/[0-9]/g, "0")), o += ["", l.rootFontSize, x, g, this.textWidth, a, h.textOverflow, h.fontWeight].join(",")), o && !t && (i = c[o]), !i) {
                        if (u || l.forExport) {
                            try {
                                r = this.fakeTS && function(t) {
                                    let e = n.querySelector(".highcharts-text-outline");
                                    e && f(e, {
                                        display: t
                                    })
                                }, k(r) && r("none"), i = n.getBBox ? y({}, n.getBBox()) : {
                                    width: n.offsetWidth,
                                    height: n.offsetHeight,
                                    x: 0,
                                    y: 0
                                }, k(r) && r("")
                            } catch (v) {}(!i || i.width < 0) && (i = {
                                x: 0,
                                y: 0,
                                width: 0,
                                height: 0
                            })
                        } else i = this.htmlGetBBox();
                        s = i.height, u && (i.height = s = {
                            "11px,17": 14,
                            "13px,20": 16
                        }[`${x||""},${Math.round(s)}`] || s), g && (i = this.getRotatedBox(i, g))
                    }
                    if (o && ("" === d || i.height > 0)) {
                        for (; p.length > 250;) delete c[p.shift()];
                        c[o] || p.push(o), c[o] = i
                    }
                    return i
                }
                getRotatedBox(t, e) {
                    let {
                        x: i,
                        y: s,
                        width: r,
                        height: o
                    } = t, {
                        alignValue: a,
                        translateY: l,
                        rotationOriginX: h = 0,
                        rotationOriginY: d = 0
                    } = this, c = {
                        right: 1,
                        center: .5
                    }[a || 0] || 0, p = Number(this.element.getAttribute("y") || 0) - (l ? 0 : s), u = e * n, g = (e - 90) * n, f = Math.cos(u), m = Math.sin(u), x = r * f, y = r * m, v = Math.cos(g), b = Math.sin(g), [
                        [k, S],
                        [C, w]
                    ] = [h, d].map((t => [t - t * f, t * m])), M = i + c * (r - x) + k + w + p * v, A = M + x, T = A - o * v, P = T - x, L = s + p - c * y - S + C + p * b, O = L + y, E = O - o * b, D = E - y, j = Math.min(M, A, T, P), I = Math.min(L, O, E, D);
                    return {
                        x: j,
                        y: I,
                        width: Math.max(M, A, T, P) - j,
                        height: Math.max(L, O, E, D) - I
                    }
                }
                getStyle(t) {
                    return c.getComputedStyle(this.element || this, "").getPropertyValue(t)
                }
                hasClass(t) {
                    return -1 !== ("" + this.attr("class")).split(" ").indexOf(t)
                }
                hide() {
                    return this.attr({
                        visibility: "hidden"
                    })
                }
                htmlGetBBox() {
                    return {
                        height: 0,
                        width: 0,
                        x: 0,
                        y: 0
                    }
                }
                constructor(t, e) {
                    this.onEvents = {}, this.opacity = 1, this.SVG_NS = d, this.element = "span" === e || "body" === e ? g(e) : l.createElementNS(this.SVG_NS, e), this.renderer = t, this.styles = {}, v(this, "afterInit")
                }
                on(t, e) {
                    let {
                        onEvents: i
                    } = this;
                    return i[t] && i[t](), i[t] = p(this.element, t, e), this
                }
                opacitySetter(t, e, i) {
                    let s = Number(Number(t).toFixed(3));
                    this.opacity = s, i.setAttribute(e, s)
                }
                removeClass(t) {
                    return this.attr("class", ("" + this.attr("class")).replace(C(t) ? RegExp(`(^| )${t}( |$)`) : t, " ").replace(/ +/g, " ").trim())
                }
                removeTextOutline() {
                    let t = this.element.querySelector("tspan.highcharts-text-outline");
                    t && this.safeRemoveChild(t)
                }
                safeRemoveChild(t) {
                    let e = t.parentNode;
                    e && e.removeChild(t)
                }
                setRadialReference(t) {
                    let e = this.element.gradient && this.renderer.gradients[this.element.gradient];
                    return this.element.radialReference = t, e && e.radAttr && e.animate(this.renderer.getRadialAttr(t, e.radAttr)), this
                }
                setTextPath(t, e) {
                    e = w(!0, {
                        enabled: !0,
                        attributes: {
                            dy: -5,
                            startOffset: "50%",
                            textAnchor: "middle"
                        }
                    }, e);
                    let i = this.renderer.url,
                        s = this.text || this,
                        r = s.textPath,
                        {
                            attributes: o,
                            enabled: a
                        } = e;
                    if (t = t || r && r.path, r && r.undo(), t && a) {
                        let e = p(s, "afterModifyTree", (e => {
                            if (t && a) {
                                let r = t.attr("id");
                                r || t.attr("id", r = O());
                                let a = {
                                    x: 0,
                                    y: 0
                                };
                                m(o.dx) && (a.dx = o.dx, delete o.dx), m(o.dy) && (a.dy = o.dy, delete o.dy), s.attr(a), this.attr({
                                    transform: ""
                                }), this.box && (this.box = this.box.destroy());
                                let n = e.nodes.slice(0);
                                e.nodes.length = 0, e.nodes[0] = {
                                    tagName: "textPath",
                                    attributes: y(o, {
                                        "text-anchor": o.textAnchor,
                                        href: `${i}#${r}`
                                    }),
                                    children: n
                                }
                            }
                        }));
                        s.textPath = {
                            path: t,
                            undo: e
                        }
                    } else s.attr({
                        dx: 0,
                        dy: 0
                    }), delete s.textPath;
                    return this.added && (s.textCache = "", this.renderer.buildText(s)), this
                }
                shadow(t) {
                    var e;
                    let {
                        renderer: i
                    } = this, s = w(90 === (null == (e = this.parentGroup) ? void 0 : e.rotation) ? {
                        offsetX: -1,
                        offsetY: -1
                    } : {}, S(t) ? t : {}), r = i.shadowDefinition(s);
                    return this.attr({
                        filter: t ? `url(${i.url}#${r})` : "none"
                    })
                }
                show(t = !0) {
                    return this.attr({
                        visibility: t ? "inherit" : "visible"
                    })
                }
                "stroke-widthSetter" (t, e, i) {
                    this[e] = t, i.setAttribute(e, t)
                }
                strokeWidth() {
                    if (!this.renderer.styledMode) return this["stroke-width"] || 0;
                    let t, e = this.getStyle("stroke-width"),
                        i = 0;
                    return /px$/.test(e) ? i = T(e) : "" !== e && (u(t = l.createElementNS(d, "rect"), {
                        width: e,
                        "stroke-width": 0
                    }), this.element.parentNode.appendChild(t), i = t.getBBox().width, t.parentNode.removeChild(t)), i
                }
                symbolAttr(t) {
                    let e = this;
                    E.symbolCustomAttribs.forEach((function(i) {
                        e[i] = A(t[i], e[i])
                    })), e.attr({
                        d: e.renderer.symbols[e.symbolName](e.x, e.y, e.width, e.height, e)
                    })
                }
                textSetter(t) {
                    t !== this.textStr && (delete this.textPxLength, this.textStr = t, this.added && this.renderer.buildText(this))
                }
                titleSetter(t) {
                    let e = this.element,
                        i = e.getElementsByTagName("title")[0] || l.createElementNS(this.SVG_NS, "title");
                    e.insertBefore ? e.insertBefore(i, e.firstChild) : e.appendChild(i), i.textContent = P(A(t, ""), [/<[^>]*>/g, ""]).replace(/&lt;/g, "<").replace(/&gt;/g, ">")
                }
                toFront() {
                    let t = this.element;
                    return t.parentNode.appendChild(t), this
                }
                translate(t, e) {
                    return this.attr({
                        translateX: t,
                        translateY: e
                    })
                }
                updateTransform(t = "transform") {
                    var e;
                    let {
                        element: i,
                        matrix: s,
                        rotation: r = 0,
                        rotationOriginX: o,
                        rotationOriginY: a,
                        scaleX: n,
                        scaleY: l,
                        translateX: h = 0,
                        translateY: d = 0
                    } = this, c = ["translate(" + h + "," + d + ")"];
                    m(s) && c.push("matrix(" + s.join(",") + ")"), r && (c.push("rotate(" + r + " " + A(o, i.getAttribute("x"), 0) + " " + A(a, i.getAttribute("y") || 0) + ")"), "SPAN" === (null == (e = this.text) ? void 0 : e.element.tagName) && this.text.attr({
                        rotation: r,
                        rotationOriginX: (o || 0) - this.padding,
                        rotationOriginY: (a || 0) - this.padding
                    })), (m(n) || m(l)) && c.push("scale(" + A(n, 1) + " " + A(l, 1) + ")"), c.length && !(this.text || this).textPath && i.setAttribute(t, c.join(" "))
                }
                visibilitySetter(t, e, i) {
                    "inherit" === t ? i.removeAttribute(e) : this[e] !== t && i.setAttribute(e, t), this[e] = t
                }
                xGetter(t) {
                    return "circle" === this.element.nodeName && ("x" === t ? t = "cx" : "y" === t && (t = "cy")), this._defaultGetter(t)
                }
                zIndexSetter(t, e) {
                    let i, s, r, o, a, n = this.renderer,
                        l = this.parentGroup,
                        h = (l || n).element || n.box,
                        d = this.element,
                        c = h === n.box,
                        p = !1,
                        u = this.added;
                    if (m(t) ? (d.setAttribute("data-z-index", t), t = +t, this[e] === t && (u = !1)) : m(this[e]) && d.removeAttribute("data-z-index"), this[e] = t, u) {
                        for ((t = this.zIndex) && l && (l.handleZ = !0), a = (i = h.childNodes).length - 1; a >= 0 && !p; a--) o = !m(r = (s = i[a]).getAttribute("data-z-index")), s !== d && (t < 0 && o && !c && !a ? (h.insertBefore(d, i[a]), p = !0) : (T(r) <= t || o && (!m(t) || t >= 0)) && (h.insertBefore(d, i[a + 1]), p = !0));
                        p || (h.insertBefore(d, i[c ? 3 : 0]), p = !0)
                    }
                    return p
                }
            }
            return E.symbolCustomAttribs = ["anchorX", "anchorY", "clockwise", "end", "height", "innerR", "r", "start", "width", "x", "y"], E.prototype.strokeSetter = E.prototype.fillSetter, E.prototype.yGetter = E.prototype.xGetter, E.prototype.matrixSetter = E.prototype.rotationOriginXSetter = E.prototype.rotationOriginYSetter = E.prototype.rotationSetter = E.prototype.scaleXSetter = E.prototype.scaleYSetter = E.prototype.translateXSetter = E.prototype.translateYSetter = E.prototype.verticalAlignSetter = function(t, e) {
                this[e] = t, this.doTransform = !0
            }, E
        })), i(e, "Core/Renderer/SVG/SVGLabel.js", [e["Core/Renderer/SVG/SVGElement.js"], e["Core/Utilities.js"]], (function(t, e) {
            let {
                defined: i,
                extend: s,
                isNumber: r,
                merge: o,
                pick: a,
                removeEvent: n
            } = e;
            class l extends t {
                constructor(t, e, i, s, r, o, a, n, h, d) {
                    let c;
                    super(t, "g"), this.paddingLeftSetter = this.paddingSetter, this.paddingRightSetter = this.paddingSetter, this.textStr = e, this.x = i, this.y = s, this.anchorX = o, this.anchorY = a, this.baseline = h, this.className = d, this.addClass("button" === d ? "highcharts-no-tooltip" : "highcharts-label"), d && this.addClass("highcharts-" + d), this.text = t.text(void 0, 0, 0, n).attr({
                        zIndex: 1
                    }), "string" == typeof r && ((c = /^url\((.*?)\)$/.test(r)) || this.renderer.symbols[r]) && (this.symbolKey = r), this.bBox = l.emptyBBox, this.padding = 3, this.baselineOffset = 0, this.needsBox = t.styledMode || c, this.deferredAttr = {}, this.alignFactor = 0
                }
                alignSetter(t) {
                    let e = {
                        left: 0,
                        center: .5,
                        right: 1
                    }[t];
                    e !== this.alignFactor && (this.alignFactor = e, this.bBox && r(this.xSetting) && this.attr({
                        x: this.xSetting
                    }))
                }
                anchorXSetter(t, e) {
                    this.anchorX = t, this.boxAttr(e, Math.round(t) - this.getCrispAdjust() - this.xSetting)
                }
                anchorYSetter(t, e) {
                    this.anchorY = t, this.boxAttr(e, t - this.ySetting)
                }
                boxAttr(t, e) {
                    this.box ? this.box.attr(t, e) : this.deferredAttr[t] = e
                }
                css(e) {
                    if (e) {
                        let t = {};
                        e = o(e), l.textProps.forEach((i => {
                            void 0 !== e[i] && (t[i] = e[i], delete e[i])
                        })), this.text.css(t), "fontSize" in t || "fontWeight" in t ? this.updateTextPadding() : ("width" in t || "textOverflow" in t) && this.updateBoxSize()
                    }
                    return t.prototype.css.call(this, e)
                }
                destroy() {
                    n(this.element, "mouseenter"), n(this.element, "mouseleave"), this.text && this.text.destroy(), this.box && (this.box = this.box.destroy()), t.prototype.destroy.call(this)
                }
                fillSetter(t, e) {
                    t && (this.needsBox = !0), this.fill = t, this.boxAttr(e, t)
                }
                getBBox(t, e) {
                    this.textStr && 0 === this.bBox.width && 0 === this.bBox.height && this.updateBoxSize();
                    let {
                        padding: i,
                        height: s = 0,
                        translateX: r = 0,
                        translateY: o = 0,
                        width: n = 0
                    } = this, l = a(this.paddingLeft, i), h = e ? ? (this.rotation || 0), d = {
                        width: n,
                        height: s,
                        x: r + this.bBox.x - l,
                        y: o + this.bBox.y - i + this.baselineOffset
                    };
                    return h && (d = this.getRotatedBox(d, h)), d
                }
                getCrispAdjust() {
                    return this.renderer.styledMode && this.box ? this.box.strokeWidth() % 2 / 2 : (this["stroke-width"] ? parseInt(this["stroke-width"], 10) : 0) % 2 / 2
                }
                heightSetter(t) {
                    this.heightSetting = t
                }
                onAdd() {
                    this.text.add(this), this.attr({
                        text: a(this.textStr, ""),
                        x: this.x || 0,
                        y: this.y || 0
                    }), this.box && i(this.anchorX) && this.attr({
                        anchorX: this.anchorX,
                        anchorY: this.anchorY
                    })
                }
                paddingSetter(t, e) {
                    r(t) ? t !== this[e] && (this[e] = t, this.updateTextPadding()) : this[e] = void 0
                }
                rSetter(t, e) {
                    this.boxAttr(e, t)
                }
                strokeSetter(t, e) {
                    this.stroke = t, this.boxAttr(e, t)
                }
                "stroke-widthSetter" (t, e) {
                    t && (this.needsBox = !0), this["stroke-width"] = t, this.boxAttr(e, t)
                }
                "text-alignSetter" (t) {
                    this.textAlign = t
                }
                textSetter(t) {
                    void 0 !== t && this.text.attr({
                        text: t
                    }), this.updateTextPadding()
                }
                updateBoxSize() {
                    let t, e = this.text,
                        o = {},
                        a = this.padding,
                        n = this.bBox = r(this.widthSetting) && r(this.heightSetting) && !this.textAlign || !i(e.textStr) ? l.emptyBBox : e.getBBox(void 0, 0);
                    this.width = this.getPaddedWidth(), this.height = (this.heightSetting || n.height || 0) + 2 * a;
                    let h = this.renderer.fontMetrics(e);
                    if (this.baselineOffset = a + Math.min((this.text.firstLineMetrics || h).b, n.height || 1 / 0), this.heightSetting && (this.baselineOffset += (this.heightSetting - h.h) / 2), this.needsBox && !e.textPath) {
                        if (!this.box) {
                            let t = this.box = this.symbolKey ? this.renderer.symbol(this.symbolKey) : this.renderer.rect();
                            t.addClass(("button" === this.className ? "" : "highcharts-label-box") + (this.className ? " highcharts-" + this.className + "-box" : "")), t.add(this)
                        }
                        t = this.getCrispAdjust(), o.x = t, o.y = (this.baseline ? -this.baselineOffset : 0) + t, o.width = Math.round(this.width), o.height = Math.round(this.height), this.box.attr(s(o, this.deferredAttr)), this.deferredAttr = {}
                    }
                }
                updateTextPadding() {
                    let t = this.text;
                    if (!t.textPath) {
                        this.updateBoxSize();
                        let e = this.baseline ? 0 : this.baselineOffset,
                            s = a(this.paddingLeft, this.padding);
                        i(this.widthSetting) && this.bBox && ("center" === this.textAlign || "right" === this.textAlign) && (s += {
                            center: .5,
                            right: 1
                        }[this.textAlign] * (this.widthSetting - this.bBox.width)), (s !== t.x || e !== t.y) && (t.attr("x", s), t.hasBoxWidthChanged && (this.bBox = t.getBBox(!0)), void 0 !== e && t.attr("y", e)), t.x = s, t.y = e
                    }
                }
                widthSetter(t) {
                    this.widthSetting = r(t) ? t : void 0
                }
                getPaddedWidth() {
                    let t = this.padding,
                        e = a(this.paddingLeft, t),
                        i = a(this.paddingRight, t);
                    return (this.widthSetting || this.bBox.width || 0) + e + i
                }
                xSetter(t) {
                    this.x = t, this.alignFactor && (t -= this.alignFactor * this.getPaddedWidth(), this["forceAnimate:x"] = !0), this.xSetting = Math.round(t), this.attr("translateX", this.xSetting)
                }
                ySetter(t) {
                    this.ySetting = this.y = Math.round(t), this.attr("translateY", this.ySetting)
                }
            }
            return l.emptyBBox = {
                width: 0,
                height: 0,
                x: 0,
                y: 0
            }, l.textProps = ["color", "direction", "fontFamily", "fontSize", "fontStyle", "fontWeight", "lineHeight", "textAlign", "textDecoration", "textOutline", "textOverflow", "whiteSpace", "width"], l
        })), i(e, "Core/Renderer/SVG/Symbols.js", [e["Core/Utilities.js"]], (function(t) {
            let {
                defined: e,
                isNumber: i,
                pick: s
            } = t;

            function r(t, i, r, o, a) {
                let n = [];
                if (a) {
                    let l = a.start || 0,
                        h = s(a.r, r),
                        d = s(a.r, o || r),
                        c = .001 > Math.abs((a.end || 0) - l - 2 * Math.PI),
                        p = (a.end || 0) - .001,
                        u = a.innerR,
                        g = s(a.open, c),
                        f = Math.cos(l),
                        m = Math.sin(l),
                        x = Math.cos(p),
                        y = Math.sin(p),
                        v = s(a.longArc, p - l - Math.PI < .001 ? 0 : 1),
                        b = ["A", h, d, 0, v, s(a.clockwise, 1), t + h * x, i + d * y];
                    b.params = {
                        start: l,
                        end: p,
                        cx: t,
                        cy: i
                    }, n.push(["M", t + h * f, i + d * m], b), e(u) && ((b = ["A", u, u, 0, v, e(a.clockwise) ? 1 - a.clockwise : 0, t + u * f, i + u * m]).params = {
                        start: p,
                        end: l,
                        cx: t,
                        cy: i
                    }, n.push(g ? ["M", t + u * x, i + u * y] : ["L", t + u * x, i + u * y], b)), g || n.push(["Z"])
                }
                return n
            }

            function o(t, e, i, s, r) {
                return r && r.r ? a(t, e, i, s, r) : [
                    ["M", t, e],
                    ["L", t + i, e],
                    ["L", t + i, e + s],
                    ["L", t, e + s],
                    ["Z"]
                ]
            }

            function a(t, e, i, s, r) {
                let o = (null == r ? void 0 : r.r) || 0;
                return [
                    ["M", t + o, e],
                    ["L", t + i - o, e],
                    ["A", o, o, 0, 0, 1, t + i, e + o],
                    ["L", t + i, e + s - o],
                    ["A", o, o, 0, 0, 1, t + i - o, e + s],
                    ["L", t + o, e + s],
                    ["A", o, o, 0, 0, 1, t, e + s - o],
                    ["L", t, e + o],
                    ["A", o, o, 0, 0, 1, t + o, e],
                    ["Z"]
                ]
            }
            return {
                arc: r,
                callout: function(t, e, s, r, o) {
                    let n = Math.min(o && o.r || 0, s, r),
                        l = n + 6,
                        h = o && o.anchorX,
                        d = o && o.anchorY || 0,
                        c = a(t, e, s, r, {
                            r: n
                        });
                    if (!i(h) || h < s && h > 0 && d < r && d > 0) return c;
                    if (t + h > s - l)
                        if (d > e + l && d < e + r - l) c.splice(3, 1, ["L", t + s, d - 6], ["L", t + s + 6, d], ["L", t + s, d + 6], ["L", t + s, e + r - n]);
                        else if (h < s) {
                        let i = d < e + l,
                            o = i ? e : e + r;
                        c.splice(i ? 2 : 5, 0, ["L", h, d], ["L", t + s - n, o])
                    } else c.splice(3, 1, ["L", t + s, r / 2], ["L", h, d], ["L", t + s, r / 2], ["L", t + s, e + r - n]);
                    else if (t + h < l)
                        if (d > e + l && d < e + r - l) c.splice(7, 1, ["L", t, d + 6], ["L", t - 6, d], ["L", t, d - 6], ["L", t, e + n]);
                        else if (h > 0) {
                        let i = d < e + l,
                            s = i ? e : e + r;
                        c.splice(i ? 1 : 6, 0, ["L", h, d], ["L", t + n, s])
                    } else c.splice(7, 1, ["L", t, r / 2], ["L", h, d], ["L", t, r / 2], ["L", t, e + n]);
                    else d > r && h < s - l ? c.splice(5, 1, ["L", h + 6, e + r], ["L", h, e + r + 6], ["L", h - 6, e + r], ["L", t + n, e + r]) : d < 0 && h > l && c.splice(1, 1, ["L", h - 6, e], ["L", h, e - 6], ["L", h + 6, e], ["L", s - n, e]);
                    return c
                },
                circle: function(t, e, i, s) {
                    return r(t + i / 2, e + s / 2, i / 2, s / 2, {
                        start: .5 * Math.PI,
                        end: 2.5 * Math.PI,
                        open: !1
                    })
                },
                diamond: function(t, e, i, s) {
                    return [
                        ["M", t + i / 2, e],
                        ["L", t + i, e + s / 2],
                        ["L", t + i / 2, e + s],
                        ["L", t, e + s / 2],
                        ["Z"]
                    ]
                },
                rect: o,
                roundedRect: a,
                square: o,
                triangle: function(t, e, i, s) {
                    return [
                        ["M", t + i / 2, e],
                        ["L", t + i, e + s],
                        ["L", t, e + s],
                        ["Z"]
                    ]
                },
                "triangle-down": function(t, e, i, s) {
                    return [
                        ["M", t, e],
                        ["L", t + i, e],
                        ["L", t + i / 2, e + s],
                        ["Z"]
                    ]
                }
            }
        })), i(e, "Core/Renderer/SVG/TextBuilder.js", [e["Core/Renderer/HTML/AST.js"], e["Core/Globals.js"], e["Core/Utilities.js"]], (function(t, e, i) {
            let {
                doc: s,
                SVG_NS: r,
                win: o
            } = e, {
                attr: a,
                extend: n,
                fireEvent: l,
                isString: h,
                objectEach: d,
                pick: c
            } = i;
            return class {
                constructor(t) {
                    let e = t.styles;
                    this.renderer = t.renderer, this.svgElement = t, this.width = t.textWidth, this.textLineHeight = e && e.lineHeight, this.textOutline = e && e.textOutline, this.ellipsis = !(!e || "ellipsis" !== e.textOverflow), this.noWrap = !(!e || "nowrap" !== e.whiteSpace)
                }
                buildSVG() {
                    let e = this.svgElement,
                        i = e.element,
                        r = e.renderer,
                        o = c(e.textStr, "").toString(),
                        a = -1 !== o.indexOf("<"),
                        n = i.childNodes,
                        l = !e.added && r.box,
                        d = [o, this.ellipsis, this.noWrap, this.textLineHeight, this.textOutline, e.getStyle("font-size"), this.width].join(",");
                    if (d !== e.textCache) {
                        e.textCache = d, delete e.actualWidth;
                        for (let t = n.length; t--;) i.removeChild(n[t]);
                        if (a || this.ellipsis || this.width || e.textPath || -1 !== o.indexOf(" ") && (!this.noWrap || /<br.*?>/g.test(o))) {
                            if ("" !== o) {
                                l && l.appendChild(i);
                                let s = new t(o);
                                this.modifyTree(s.nodes), s.addToDOM(i), this.modifyDOM(), this.ellipsis && -1 !== (i.textContent || "").indexOf("…") && e.attr("title", this.unescapeEntities(e.textStr || "", ["&lt;", "&gt;"])), l && l.removeChild(i)
                            }
                        } else i.appendChild(s.createTextNode(this.unescapeEntities(o)));
                        h(this.textOutline) && e.applyTextOutline && e.applyTextOutline(this.textOutline)
                    }
                }
                modifyDOM() {
                    let t, e = this.svgElement,
                        i = a(e.element, "x");
                    for (e.firstLineMetrics = void 0;
                        (t = e.element.firstChild) && /^[\s\u200B]*$/.test(t.textContent || " ");) e.element.removeChild(t);
                    [].forEach.call(e.element.querySelectorAll("tspan.highcharts-br"), ((t, s) => {
                        t.nextSibling && t.previousSibling && (0 === s && 1 === t.previousSibling.nodeType && (e.firstLineMetrics = e.renderer.fontMetrics(t.previousSibling)), a(t, {
                            dy: this.getLineHeight(t.nextSibling),
                            x: i
                        }))
                    }));
                    let n = this.width || 0;
                    if (!n) return;
                    let l = (t, o) => {
                            let l = t.textContent || "",
                                h = l.replace(/([^\^])-/g, "$1- ").split(" "),
                                d = !this.noWrap && (h.length > 1 || e.element.childNodes.length > 1),
                                c = this.getLineHeight(o),
                                p = 0,
                                u = e.actualWidth;
                            if (this.ellipsis) l && this.truncate(t, l, void 0, 0, Math.max(0, n - .8 * c), ((t, e) => t.substring(0, e) + "…"));
                            else if (d) {
                                let l = [],
                                    d = [];
                                for (; o.firstChild && o.firstChild !== t;) d.push(o.firstChild), o.removeChild(o.firstChild);
                                for (; h.length;) h.length && !this.noWrap && p > 0 && (l.push(t.textContent || ""), t.textContent = h.join(" ").replace(/- /g, "-")), this.truncate(t, void 0, h, 0 === p && u || 0, n, ((t, e) => h.slice(0, e).join(" ").replace(/- /g, "-"))), u = e.actualWidth, p++;
                                d.forEach((e => {
                                    o.insertBefore(e, t)
                                })), l.forEach((e => {
                                    o.insertBefore(s.createTextNode(e), t);
                                    let n = s.createElementNS(r, "tspan");
                                    n.textContent = "​", a(n, {
                                        dy: c,
                                        x: i
                                    }), o.insertBefore(n, t)
                                }))
                            }
                        },
                        h = t => {
                            [].slice.call(t.childNodes).forEach((i => {
                                i.nodeType === o.Node.TEXT_NODE ? l(i, t) : (-1 !== i.className.baseVal.indexOf("highcharts-br") && (e.actualWidth = 0), h(i))
                            }))
                        };
                    h(e.element)
                }
                getLineHeight(t) {
                    let e = t.nodeType === o.Node.TEXT_NODE ? t.parentElement : t;
                    return this.textLineHeight ? parseInt(this.textLineHeight.toString(), 10) : this.renderer.fontMetrics(e || this.svgElement.element).h
                }
                modifyTree(t) {
                    let e = (i, s) => {
                        let {
                            attributes: r = {},
                            children: o,
                            style: a = {},
                            tagName: l
                        } = i, h = this.renderer.styledMode;
                        if ("b" === l || "strong" === l ? h ? r.class = "highcharts-strong" : a.fontWeight = "bold" : ("i" === l || "em" === l) && (h ? r.class = "highcharts-emphasized" : a.fontStyle = "italic"), a && a.color && (a.fill = a.color), "br" === l) {
                            r.class = "highcharts-br", i.textContent = "​";
                            let e = t[s + 1];
                            e && e.textContent && (e.textContent = e.textContent.replace(/^ +/gm, ""))
                        } else "a" === l && o && o.some((t => "#text" === t.tagName)) && (i.children = [{
                            children: o,
                            tagName: "tspan"
                        }]);
                        "#text" !== l && "a" !== l && (i.tagName = "tspan"), n(i, {
                            attributes: r,
                            style: a
                        }), o && o.filter((t => "#text" !== t.tagName)).forEach(e)
                    };
                    t.forEach(e), l(this.svgElement, "afterModifyTree", {
                        nodes: t
                    })
                }
                truncate(t, e, i, s, r, o) {
                    let a, n, l = this.svgElement,
                        {
                            rotation: h
                        } = l,
                        d = [],
                        c = i ? 1 : 0,
                        p = (e || i || "").length,
                        u = p,
                        g = function(e, r) {
                            let o = r || e,
                                a = t.parentNode;
                            if (a && void 0 === d[o] && a.getSubStringLength) try {
                                d[o] = s + a.getSubStringLength(0, i ? o + 1 : o)
                            } catch (n) {}
                            return d[o]
                        };
                    if (l.rotation = 0, s + (n = g(t.textContent.length)) > r) {
                        for (; c <= p;) u = Math.ceil((c + p) / 2), i && (a = o(i, u)), n = g(u, a && a.length - 1), c === p ? c = p + 1 : n > r ? p = u - 1 : c = u;
                        0 === p ? t.textContent = "" : e && p === e.length - 1 || (t.textContent = a || o(e || i, u))
                    }
                    i && i.splice(0, u), l.actualWidth = n, l.rotation = h
                }
                unescapeEntities(t, e) {
                    return d(this.renderer.escapes, (function(i, s) {
                        e && -1 !== e.indexOf(i) || (t = t.toString().replace(RegExp(i, "g"), s))
                    })), t
                }
            }
        })), i(e, "Core/Renderer/SVG/SVGRenderer.js", [e["Core/Renderer/HTML/AST.js"], e["Core/Color/Color.js"], e["Core/Globals.js"], e["Core/Renderer/RendererRegistry.js"], e["Core/Renderer/SVG/SVGElement.js"], e["Core/Renderer/SVG/SVGLabel.js"], e["Core/Renderer/SVG/Symbols.js"], e["Core/Renderer/SVG/TextBuilder.js"], e["Core/Utilities.js"]], (function(t, e, i, s, r, o, a, n, l) {
            let h, {
                    charts: d,
                    deg2rad: c,
                    doc: p,
                    isFirefox: u,
                    isMS: g,
                    isWebKit: f,
                    noop: m,
                    SVG_NS: x,
                    symbolSizes: y,
                    win: v
                } = i,
                {
                    addEvent: b,
                    attr: k,
                    createElement: S,
                    css: C,
                    defined: w,
                    destroyObjectProperties: M,
                    extend: A,
                    isArray: T,
                    isNumber: P,
                    isObject: L,
                    isString: O,
                    merge: E,
                    pick: D,
                    pInt: j,
                    replaceNested: I,
                    uniqueKey: B
                } = l;
            class R {
                constructor(t, e, i, s, r, o, a) {
                    let n, l, h = this.createElement("svg").attr({
                            version: "1.1",
                            class: "highcharts-root"
                        }),
                        d = h.element;
                    a || h.css(this.getStyle(s || {})), t.appendChild(d), k(t, "dir", "ltr"), -1 === t.innerHTML.indexOf("xmlns") && k(d, "xmlns", this.SVG_NS), this.box = d, this.boxWrapper = h, this.alignedObjects = [], this.url = this.getReferenceURL(), this.createElement("desc").add().element.appendChild(p.createTextNode("Created with Highcharts 11.4.0")), this.defs = this.createElement("defs").add(), this.allowHTML = o, this.forExport = r, this.styledMode = a, this.gradients = {}, this.cache = {}, this.cacheKeys = [], this.imgCount = 0, this.rootFontSize = h.getStyle("font-size"), this.setSize(e, i, !1), u && t.getBoundingClientRect && ((n = function() {
                        C(t, {
                            left: 0,
                            top: 0
                        }), l = t.getBoundingClientRect(), C(t, {
                            left: Math.ceil(l.left) - l.left + "px",
                            top: Math.ceil(l.top) - l.top + "px"
                        })
                    })(), this.unSubPixelFix = b(v, "resize", n))
                }
                definition(e) {
                    return new t([e]).addToDOM(this.defs.element)
                }
                getReferenceURL() {
                    if ((u || f) && p.getElementsByTagName("base").length) {
                        if (!w(h)) {
                            let e = B(),
                                i = new t([{
                                    tagName: "svg",
                                    attributes: {
                                        width: 8,
                                        height: 8
                                    },
                                    children: [{
                                        tagName: "defs",
                                        children: [{
                                            tagName: "clipPath",
                                            attributes: {
                                                id: e
                                            },
                                            children: [{
                                                tagName: "rect",
                                                attributes: {
                                                    width: 4,
                                                    height: 4
                                                }
                                            }]
                                        }]
                                    }, {
                                        tagName: "rect",
                                        attributes: {
                                            id: "hitme",
                                            width: 8,
                                            height: 8,
                                            "clip-path": `url(#${e})`,
                                            fill: "rgba(0,0,0,0.001)"
                                        }
                                    }]
                                }]).addToDOM(p.body);
                            C(i, {
                                position: "fixed",
                                top: 0,
                                left: 0,
                                zIndex: 9e5
                            });
                            let s = p.elementFromPoint(6, 6);
                            h = "hitme" === (s && s.id), p.body.removeChild(i)
                        }
                        if (h) return I(v.location.href.split("#")[0], [/<[^>]*>/g, ""], [/([\('\)])/g, "\\$1"], [/ /g, "%20"])
                    }
                    return ""
                }
                getStyle(t) {
                    return this.style = A({
                        fontFamily: "Helvetica, Arial, sans-serif",
                        fontSize: "1rem"
                    }, t), this.style
                }
                setStyle(t) {
                    this.boxWrapper.css(this.getStyle(t))
                }
                isHidden() {
                    return !this.boxWrapper.getBBox().width
                }
                destroy() {
                    let t = this.defs;
                    return this.box = null, this.boxWrapper = this.boxWrapper.destroy(), M(this.gradients || {}), this.gradients = null, this.defs = t.destroy(), this.unSubPixelFix && this.unSubPixelFix(), this.alignedObjects = null, null
                }
                createElement(t) {
                    return new this.Element(this, t)
                }
                getRadialAttr(t, e) {
                    return {
                        cx: t[0] - t[2] / 2 + (e.cx || 0) * t[2],
                        cy: t[1] - t[2] / 2 + (e.cy || 0) * t[2],
                        r: (e.r || 0) * t[2]
                    }
                }
                shadowDefinition(t) {
                    let e = [`highcharts-drop-shadow-${this.chartIndex}`, ...Object.keys(t).map((e => `${e}-${t[e]}`))].join("-").toLowerCase().replace(/[^a-z0-9\-]/g, ""),
                        i = E({
                            color: "#000000",
                            offsetX: 1,
                            offsetY: 1,
                            opacity: .15,
                            width: 5
                        }, t);
                    return this.defs.element.querySelector(`#${e}`) || this.definition({
                        tagName: "filter",
                        attributes: {
                            id: e,
                            filterUnits: i.filterUnits
                        },
                        children: [{
                            tagName: "feDropShadow",
                            attributes: {
                                dx: i.offsetX,
                                dy: i.offsetY,
                                "flood-color": i.color,
                                "flood-opacity": Math.min(5 * i.opacity, 1),
                                stdDeviation: i.width / 2
                            }
                        }]
                    }), e
                }
                buildText(t) {
                    new n(t).buildSVG()
                }
                getContrast(t) {
                    let i = e.parse(t).rgba.map((t => {
                            let e = t / 255;
                            return e <= .03928 ? e / 12.92 : Math.pow((e + .055) / 1.055, 2.4)
                        })),
                        s = .2126 * i[0] + .7152 * i[1] + .0722 * i[2];
                    return 1.05 / (s + .05) > (s + .05) / .05 ? "#FFFFFF" : "#000000"
                }
                button(e, i, s, r, o = {}, a, n, l, h, d) {
                    let c, p, u, f = this.label(e, i, s, h, void 0, void 0, d, void 0, "button"),
                        m = this.styledMode,
                        x = o.states || {},
                        y = 0;
                    delete(o = E(o)).states;
                    let v = E({
                        color: "#333333",
                        cursor: "pointer",
                        fontSize: "0.8em",
                        fontWeight: "normal"
                    }, o.style);
                    delete o.style;
                    let k = t.filterUserAttributes(o);
                    return f.attr(E({
                        padding: 8,
                        r: 2
                    }, k)), m || (k = E({
                        fill: "#f7f7f7",
                        stroke: "#cccccc",
                        "stroke-width": 1
                    }, k), c = (a = E(k, {
                        fill: "#e6e6e6"
                    }, t.filterUserAttributes(a || x.hover || {}))).style, delete a.style, p = (n = E(k, {
                        fill: "#e6e9ff",
                        style: {
                            color: "#000000",
                            fontWeight: "bold"
                        }
                    }, t.filterUserAttributes(n || x.select || {}))).style, delete n.style, u = (l = E(k, {
                        style: {
                            color: "#cccccc"
                        }
                    }, t.filterUserAttributes(l || x.disabled || {}))).style, delete l.style), b(f.element, g ? "mouseover" : "mouseenter", (function() {
                        3 !== y && f.setState(1)
                    })), b(f.element, g ? "mouseout" : "mouseleave", (function() {
                        3 !== y && f.setState(y)
                    })), f.setState = function(t) {
                        if (1 !== t && (f.state = y = t), f.removeClass(/highcharts-button-(normal|hover|pressed|disabled)/).addClass("highcharts-button-" + ["normal", "hover", "pressed", "disabled"][t || 0]), !m) {
                            f.attr([k, a, n, l][t || 0]);
                            let e = [v, c, p, u][t || 0];
                            L(e) && f.css(e)
                        }
                    }, !m && (f.attr(k).css(A({
                        cursor: "default"
                    }, v)), d && f.text.css({
                        pointerEvents: "none"
                    })), f.on("touchstart", (t => t.stopPropagation())).on("click", (function(t) {
                        3 !== y && r.call(f, t)
                    }))
                }
                crispLine(t, e, i = "round") {
                    let s = t[0],
                        r = t[1];
                    return w(s[1]) && s[1] === r[1] && (s[1] = r[1] = Math[i](s[1]) - e % 2 / 2), w(s[2]) && s[2] === r[2] && (s[2] = r[2] = Math[i](s[2]) + e % 2 / 2), t
                }
                path(t) {
                    let e = this.styledMode ? {} : {
                        fill: "none"
                    };
                    return T(t) ? e.d = t : L(t) && A(e, t), this.createElement("path").attr(e)
                }
                circle(t, e, i) {
                    let s = L(t) ? t : void 0 === t ? {} : {
                            x: t,
                            y: e,
                            r: i
                        },
                        r = this.createElement("circle");
                    return r.xSetter = r.ySetter = function(t, e, i) {
                        i.setAttribute("c" + e, t)
                    }, r.attr(s)
                }
                arc(t, e, i, s, r, o) {
                    let a;
                    L(t) ? (e = (a = t).y, i = a.r, s = a.innerR, r = a.start, o = a.end, t = a.x) : a = {
                        innerR: s,
                        start: r,
                        end: o
                    };
                    let n = this.symbol("arc", t, e, i, i, a);
                    return n.r = i, n
                }
                rect(t, e, i, s, r, o) {
                    let a = L(t) ? t : void 0 === t ? {} : {
                            x: t,
                            y: e,
                            r: r,
                            width: Math.max(i || 0, 0),
                            height: Math.max(s || 0, 0)
                        },
                        n = this.createElement("rect");
                    return this.styledMode || (void 0 !== o && (a["stroke-width"] = o, A(a, n.crisp(a))), a.fill = "none"), n.rSetter = function(t, e, i) {
                        n.r = t, k(i, {
                            rx: t,
                            ry: t
                        })
                    }, n.rGetter = function() {
                        return n.r || 0
                    }, n.attr(a)
                }
                roundedRect(t) {
                    return this.symbol("roundedRect").attr(t)
                }
                setSize(t, e, i) {
                    this.width = t, this.height = e, this.boxWrapper.animate({
                        width: t,
                        height: e
                    }, {
                        step: function() {
                            this.attr({
                                viewBox: "0 0 " + this.attr("width") + " " + this.attr("height")
                            })
                        },
                        duration: D(i, !0) ? void 0 : 0
                    }), this.alignElements()
                }
                g(t) {
                    let e = this.createElement("g");
                    return t ? e.attr({
                        class: "highcharts-" + t
                    }) : e
                }
                image(t, e, i, s, r, o) {
                    let a = {
                        preserveAspectRatio: "none"
                    };
                    P(e) && (a.x = e), P(i) && (a.y = i), P(s) && (a.width = s), P(r) && (a.height = r);
                    let n = this.createElement("image").attr(a),
                        l = function(e) {
                            n.attr({
                                href: t
                            }), o.call(n, e)
                        };
                    if (o) {
                        n.attr({
                            href: "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        });
                        let e = new v.Image;
                        b(e, "load", l), e.src = t, e.complete && l({})
                    } else n.attr({
                        href: t
                    });
                    return n
                }
                symbol(t, e, i, s, r, o) {
                    let a, n, l, h, c = this,
                        u = /^url\((.*?)\)$/,
                        g = u.test(t),
                        f = !g && (this.symbols[t] ? t : "circle"),
                        m = f && this.symbols[f];
                    if (m) "number" == typeof e && (n = m.call(this.symbols, Math.round(e || 0), Math.round(i || 0), s || 0, r || 0, o)), a = this.path(n), c.styledMode || a.attr("fill", "none"), A(a, {
                        symbolName: f || void 0,
                        x: e,
                        y: i,
                        width: s,
                        height: r
                    }), o && A(a, o);
                    else if (g) {
                        l = t.match(u)[1];
                        let s = a = this.image(l);
                        s.imgwidth = D(o && o.width, y[l] && y[l].width), s.imgheight = D(o && o.height, y[l] && y[l].height), h = t => t.attr({
                            width: t.width,
                            height: t.height
                        }), ["width", "height"].forEach((t => {
                            s[`${t}Setter`] = function(t, e) {
                                this[e] = t;
                                let {
                                    alignByTranslate: i,
                                    element: s,
                                    width: r,
                                    height: a,
                                    imgwidth: n,
                                    imgheight: l
                                } = this, h = "width" === e ? n : l, d = 1;
                                o && "within" === o.backgroundSize && r && a && n && l ? (d = Math.min(r / n, a / l), k(s, {
                                    width: Math.round(n * d),
                                    height: Math.round(l * d)
                                })) : s && h && s.setAttribute(e, h), !i && n && l && this.translate(((r || 0) - n * d) / 2, ((a || 0) - l * d) / 2)
                            }
                        })), w(e) && s.attr({
                            x: e,
                            y: i
                        }), s.isImg = !0, w(s.imgwidth) && w(s.imgheight) ? h(s) : (s.attr({
                            width: 0,
                            height: 0
                        }), S("img", {
                            onload: function() {
                                let t = d[c.chartIndex];
                                0 === this.width && (C(this, {
                                    position: "absolute",
                                    top: "-999em"
                                }), p.body.appendChild(this)), y[l] = {
                                    width: this.width,
                                    height: this.height
                                }, s.imgwidth = this.width, s.imgheight = this.height, s.element && h(s), this.parentNode && this.parentNode.removeChild(this), c.imgCount--, c.imgCount || !t || t.hasLoaded || t.onload()
                            },
                            src: l
                        }), this.imgCount++)
                    }
                    return a
                }
                clipRect(t, e, i, s) {
                    return this.rect(t, e, i, s, 0)
                }
                text(t, e, i, s) {
                    let r = {};
                    if (s && (this.allowHTML || !this.forExport)) return this.html(t, e, i);
                    r.x = Math.round(e || 0), i && (r.y = Math.round(i)), w(t) && (r.text = t);
                    let o = this.createElement("text").attr(r);
                    return s && (!this.forExport || this.allowHTML) || (o.xSetter = function(t, e, i) {
                        let s = i.getElementsByTagName("tspan"),
                            r = i.getAttribute(e);
                        for (let o, a = 0; a < s.length; a++)(o = s[a]).getAttribute(e) === r && o.setAttribute(e, t);
                        i.setAttribute(e, t)
                    }), o
                }
                fontMetrics(t) {
                    let e = j(r.prototype.getStyle.call(t, "font-size") || 0),
                        i = e < 24 ? e + 3 : Math.round(1.2 * e);
                    return {
                        h: i,
                        b: Math.round(.8 * i),
                        f: e
                    }
                }
                rotCorr(t, e, i) {
                    let s = t;
                    return e && i && (s = Math.max(s * Math.cos(e * c), 4)), {
                        x: -t / 3 * Math.sin(e * c),
                        y: s
                    }
                }
                pathToSegments(t) {
                    let e = [],
                        i = [],
                        s = {
                            A: 8,
                            C: 7,
                            H: 2,
                            L: 3,
                            M: 3,
                            Q: 5,
                            S: 5,
                            T: 3,
                            V: 2
                        };
                    for (let r = 0; r < t.length; r++) O(i[0]) && P(t[r]) && i.length === s[i[0].toUpperCase()] && t.splice(r, 0, i[0].replace("M", "L").replace("m", "l")), "string" == typeof t[r] && (i.length && e.push(i.slice(0)), i.length = 0), i.push(t[r]);
                    return e.push(i.slice(0)), e
                }
                label(t, e, i, s, r, a, n, l, h) {
                    return new o(this, t, e, i, s, r, a, n, l, h)
                }
                alignElements() {
                    this.alignedObjects.forEach((t => t.align()))
                }
            }
            return A(R.prototype, {
                Element: r,
                SVG_NS: x,
                escapes: {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    "'": "&#39;",
                    '"': "&quot;"
                },
                symbols: a,
                draw: m
            }), s.registerRendererType("svg", R, !0), R
        })), i(e, "Core/Renderer/HTML/HTMLElement.js", [e["Core/Renderer/HTML/AST.js"], e["Core/Globals.js"], e["Core/Renderer/SVG/SVGElement.js"], e["Core/Utilities.js"]], (function(t, e, i, s) {
            let {
                composed: r
            } = e, {
                attr: o,
                css: a,
                createElement: n,
                defined: l,
                extend: h,
                pInt: d,
                pushUnique: c
            } = s;

            function p(t, e, s) {
                var r;
                let o = (null == (r = this.div) ? void 0 : r.style) || s.style;
                i.prototype[`${e}Setter`].call(this, t, e, s), o && (o[e] = t)
            }
            let u = (t, e) => {
                var s;
                if (!t.div) {
                    let r = o(t.element, "class"),
                        a = t.css,
                        l = n("div", r ? {
                            className: r
                        } : void 0, {
                            position: "absolute",
                            left: `${t.translateX||0}px`,
                            top: `${t.translateY||0}px`,
                            ...t.styles,
                            display: t.display,
                            opacity: t.opacity,
                            visibility: t.visibility
                        }, (null == (s = t.parentGroup) ? void 0 : s.div) || e);
                    t.classSetter = (t, e, i) => {
                        i.setAttribute("class", t), l.className = t
                    }, t.translateXSetter = t.translateYSetter = (e, i) => {
                        t[i] = e, l.style["translateX" === i ? "left" : "top"] = `${e}px`, t.doTransform = !0
                    }, t.opacitySetter = t.visibilitySetter = p, t.css = e => (a.call(t, e), e.cursor && (l.style.cursor = e.cursor), e.pointerEvents && (l.style.pointerEvents = e.pointerEvents), t), t.on = function() {
                        return i.prototype.on.apply({
                            element: l,
                            onEvents: t.onEvents
                        }, arguments), t
                    }, t.div = l
                }
                return t.div
            };
            class g extends i {
                static compose(t) {
                    c(r, this.compose) && (t.prototype.html = function(t, e, i) {
                        return new g(this, "span").attr({
                            text: t,
                            x: Math.round(e),
                            y: Math.round(i)
                        })
                    })
                }
                constructor(t, e) {
                    super(t, e), this.css({
                        position: "absolute",
                        ...t.styledMode ? {} : {
                            fontFamily: t.style.fontFamily,
                            fontSize: t.style.fontSize
                        }
                    }), this.element.style.whiteSpace = "nowrap"
                }
                getSpanCorrection(t, e, i) {
                    this.xCorr = -t * i, this.yCorr = -e
                }
                css(t) {
                    let e, {
                            element: i
                        } = this,
                        s = "SPAN" === i.tagName && t && "width" in t,
                        r = s && t.width;
                    return s && (delete t.width, this.textWidth = d(r) || void 0, e = !0), "ellipsis" === (null == t ? void 0 : t.textOverflow) && (t.whiteSpace = "nowrap", t.overflow = "hidden"), h(this.styles, t), a(i, t), e && this.updateTransform(), this
                }
                htmlGetBBox() {
                    let {
                        element: t
                    } = this;
                    return {
                        x: t.offsetLeft,
                        y: t.offsetTop,
                        width: t.offsetWidth,
                        height: t.offsetHeight
                    }
                }
                updateTransform() {
                    var t;
                    if (!this.added) return void(this.alignOnAdd = !0);
                    let {
                        element: e,
                        renderer: i,
                        rotation: s,
                        rotationOriginX: r,
                        rotationOriginY: o,
                        styles: n,
                        textAlign: h = "left",
                        textWidth: d,
                        translateX: c = 0,
                        translateY: p = 0,
                        x: u = 0,
                        y: g = 0
                    } = this, f = n.whiteSpace;
                    if (a(e, {
                            marginLeft: `${c}px`,
                            marginTop: `${p}px`
                        }), "SPAN" === e.tagName) {
                        let n, c = [s, h, e.innerHTML, d, this.textAlign].join(","),
                            p = -1 * (null == (t = this.parentGroup) ? void 0 : t.padding) || 0,
                            m = !1;
                        if (d !== this.oldTextWidth) {
                            let t = this.textPxLength ? this.textPxLength : (a(e, {
                                    width: "",
                                    whiteSpace: f || "nowrap"
                                }), e.offsetWidth),
                                i = d || 0;
                            (i > this.oldTextWidth || t > i) && (/[ \-]/.test(e.textContent || e.innerText) || "ellipsis" === e.style.textOverflow) && (a(e, {
                                width: t > i || s ? d + "px" : "auto",
                                display: "block",
                                whiteSpace: f || "normal"
                            }), this.oldTextWidth = d, m = !0)
                        }
                        this.hasBoxWidthChanged = m, c !== this.cTT && (n = i.fontMetrics(e).b, l(s) && (s !== (this.oldRotation || 0) || h !== this.oldAlign) && this.setSpanRotation(s, p, p), this.getSpanCorrection(!l(s) && this.textPxLength || e.offsetWidth, n, {
                            left: 0,
                            center: .5,
                            right: 1
                        }[h]));
                        let {
                            xCorr: x = 0,
                            yCorr: y = 0
                        } = this;
                        a(e, {
                            left: `${u+x}px`,
                            top: `${g+y}px`,
                            transformOrigin: `${(r??u)-x-u-p}px ${(o??g)-y-g-p}px`
                        }), this.cTT = c, this.oldRotation = s, this.oldAlign = h
                    }
                }
                setSpanRotation(t, e, i) {
                    a(this.element, {
                        transform: `rotate(${t}deg)`,
                        transformOrigin: `${e}% ${i}px`
                    })
                }
                add(t) {
                    let e, i = this.renderer.box.parentNode,
                        s = [];
                    if (this.parentGroup = t, t && !(e = t.div)) {
                        let r = t;
                        for (; r;) s.push(r), r = r.parentGroup;
                        for (let t of s.reverse()) e = u(t, i)
                    }
                    return (e || i).appendChild(this.element), this.added = !0, this.alignOnAdd && this.updateTransform(), this
                }
                textSetter(e) {
                    e !== this.textStr && (delete this.bBox, delete this.oldTextWidth, t.setElementHTML(this.element, e ? ? ""), this.textStr = e, this.doTransform = !0)
                }
                alignSetter(t) {
                    this.alignValue = this.textAlign = t, this.doTransform = !0
                }
                xSetter(t, e) {
                    this[e] = t, this.doTransform = !0
                }
            }
            let f = g.prototype;
            return f.visibilitySetter = f.opacitySetter = p, f.ySetter = f.rotationSetter = f.rotationOriginXSetter = f.rotationOriginYSetter = f.xSetter, g
        })), i(e, "Core/Axis/AxisDefaults.js", [], (function() {
            var t, e;
            return (e = t || (t = {})).xAxis = {
                alignTicks: !0,
                allowDecimals: void 0,
                panningEnabled: !0,
                zIndex: 2,
                zoomEnabled: !0,
                dateTimeLabelFormats: {
                    millisecond: {
                        main: "%H:%M:%S.%L",
                        range: !1
                    },
                    second: {
                        main: "%H:%M:%S",
                        range: !1
                    },
                    minute: {
                        main: "%H:%M",
                        range: !1
                    },
                    hour: {
                        main: "%H:%M",
                        range: !1
                    },
                    day: {
                        main: "%e %b"
                    },
                    week: {
                        main: "%e %b"
                    },
                    month: {
                        main: "%b '%y"
                    },
                    year: {
                        main: "%Y"
                    }
                },
                endOnTick: !1,
                gridLineDashStyle: "Solid",
                gridZIndex: 1,
                labels: {
                    autoRotationLimit: 80,
                    distance: 15,
                    enabled: !0,
                    indentation: 10,
                    overflow: "justify",
                    padding: 5,
                    reserveSpace: void 0,
                    rotation: void 0,
                    staggerLines: 0,
                    step: 0,
                    useHTML: !1,
                    zIndex: 7,
                    style: {
                        color: "#333333",
                        cursor: "default",
                        fontSize: "0.8em"
                    }
                },
                maxPadding: .01,
                minorGridLineDashStyle: "Solid",
                minorTickLength: 2,
                minorTickPosition: "outside",
                minorTicksPerMajor: 5,
                minPadding: .01,
                offset: void 0,
                reversed: void 0,
                reversedStacks: !1,
                showEmpty: !0,
                showFirstLabel: !0,
                showLastLabel: !0,
                startOfWeek: 1,
                startOnTick: !1,
                tickLength: 10,
                tickPixelInterval: 100,
                tickmarkPlacement: "between",
                tickPosition: "outside",
                title: {
                    align: "middle",
                    useHTML: !1,
                    x: 0,
                    y: 0,
                    style: {
                        color: "#666666",
                        fontSize: "0.8em"
                    }
                },
                type: "linear",
                uniqueNames: !0,
                visible: !0,
                minorGridLineColor: "#f2f2f2",
                minorGridLineWidth: 1,
                minorTickColor: "#999999",
                lineColor: "#333333",
                lineWidth: 1,
                gridLineColor: "#e6e6e6",
                gridLineWidth: void 0,
                tickColor: "#333333"
            }, e.yAxis = {
                reversedStacks: !0,
                endOnTick: !0,
                maxPadding: .05,
                minPadding: .05,
                tickPixelInterval: 72,
                showLastLabel: !0,
                labels: {
                    x: void 0
                },
                startOnTick: !0,
                title: {
                    text: "Values"
                },
                stackLabels: {
                    animation: {},
                    allowOverlap: !1,
                    enabled: !1,
                    crop: !0,
                    overflow: "justify",
                    formatter: function() {
                        let {
                            numberFormatter: t
                        } = this.axis.chart;
                        return t(this.total || 0, -1)
                    },
                    style: {
                        color: "#000000",
                        fontSize: "0.7em",
                        fontWeight: "bold",
                        textOutline: "1px contrast"
                    }
                },
                gridLineWidth: 1,
                lineWidth: 0
            }, t
        })), i(e, "Core/Foundation.js", [e["Core/Utilities.js"]], (function(t) {
            var e;
            let {
                addEvent: i,
                isFunction: s,
                objectEach: r,
                removeEvent: o
            } = t;
            return (e || (e = {})).registerEventOptions = function(t, e) {
                t.eventOptions = t.eventOptions || {}, r(e.events, (function(e, r) {
                    t.eventOptions[r] !== e && (t.eventOptions[r] && (o(t, r, t.eventOptions[r]), delete t.eventOptions[r]), s(e) && (t.eventOptions[r] = e, i(t, r, e, {
                        order: 0
                    })))
                }))
            }, e
        })), i(e, "Core/Axis/Tick.js", [e["Core/Templating.js"], e["Core/Globals.js"], e["Core/Utilities.js"]], (function(t, e, i) {
            let {
                deg2rad: s
            } = e, {
                clamp: r,
                correctFloat: o,
                defined: a,
                destroyObjectProperties: n,
                extend: l,
                fireEvent: h,
                isNumber: d,
                merge: c,
                objectEach: p,
                pick: u
            } = i;
            return class {
                constructor(t, e, i, s, r) {
                    this.isNew = !0, this.isNewLabel = !0, this.axis = t, this.pos = e, this.type = i || "", this.parameters = r || {}, this.tickmarkOffset = this.parameters.tickmarkOffset, this.options = this.parameters.options, h(this, "init"), i || s || this.addLabel()
                }
                addLabel() {
                    let e, i, s, r = this,
                        n = r.axis,
                        c = n.options,
                        p = n.chart,
                        g = n.categories,
                        f = n.logarithmic,
                        m = n.names,
                        x = r.pos,
                        y = u(r.options && r.options.labels, c.labels),
                        v = n.tickPositions,
                        b = x === v[0],
                        k = x === v[v.length - 1],
                        S = (!y.step || 1 === y.step) && 1 === n.tickInterval,
                        C = v.info,
                        w = r.label,
                        M = this.parameters.category || (g ? u(g[x], m[x], x) : x);
                    f && d(M) && (M = o(f.lin2log(M))), n.dateTime && (C ? e = (i = p.time.resolveDTLFormat(c.dateTimeLabelFormats[!c.grid && C.higherRanks[x] || C.unitName])).main : d(M) && (e = n.dateTime.getXDateFormat(M, c.dateTimeLabelFormats || {}))), r.isFirst = b, r.isLast = k;
                    let A = {
                        axis: n,
                        chart: p,
                        dateTimeLabelFormat: e,
                        isFirst: b,
                        isLast: k,
                        pos: x,
                        tick: r,
                        tickPositionInfo: C,
                        value: M
                    };
                    h(this, "labelFormat", A);
                    let T = e => y.formatter ? y.formatter.call(e, e) : y.format ? (e.text = n.defaultLabelFormatter.call(e), t.format(y.format, e, p)) : n.defaultLabelFormatter.call(e),
                        P = T.call(A, A),
                        L = i && i.list;
                    r.shortenLabel = L ? function() {
                        for (s = 0; s < L.length; s++)
                            if (l(A, {
                                    dateTimeLabelFormat: L[s]
                                }), w.attr({
                                    text: T.call(A, A)
                                }), w.getBBox().width < n.getSlotWidth(r) - 2 * y.padding) return;
                        w.attr({
                            text: ""
                        })
                    } : void 0, S && n._addedPlotLB && r.moveLabel(P, y), a(w) || r.movedLabel ? w && w.textStr !== P && !S && (!w.textWidth || y.style.width || w.styles.width || w.css({
                        width: null
                    }), w.attr({
                        text: P
                    }), w.textPxLength = w.getBBox().width) : (r.label = w = r.createLabel(P, y), r.rotation = 0)
                }
                createLabel(t, e, i) {
                    let s = this.axis,
                        r = s.chart,
                        o = a(t) && e.enabled ? r.renderer.text(t, null == i ? void 0 : i.x, null == i ? void 0 : i.y, e.useHTML).add(s.labelGroup) : void 0;
                    return o && (r.styledMode || o.css(c(e.style)), o.textPxLength = o.getBBox().width), o
                }
                destroy() {
                    n(this, this.axis)
                }
                getPosition(t, e, i, s) {
                    let a = this.axis,
                        n = a.chart,
                        l = s && n.oldChartHeight || n.chartHeight,
                        d = {
                            x: t ? o(a.translate(e + i, void 0, void 0, s) + a.transB) : a.left + a.offset + (a.opposite ? (s && n.oldChartWidth || n.chartWidth) - a.right - a.left : 0),
                            y: t ? l - a.bottom + a.offset - (a.opposite ? a.height : 0) : o(l - a.translate(e + i, void 0, void 0, s) - a.transB)
                        };
                    return d.y = r(d.y, -1e5, 1e5), h(this, "afterGetPosition", {
                        pos: d
                    }), d
                }
                getLabelPosition(t, e, i, r, o, n, l, d) {
                    let c, p, g = this.axis,
                        f = g.transA,
                        m = g.isLinked && g.linkedParent ? g.linkedParent.reversed : g.reversed,
                        x = g.staggerLines,
                        y = g.tickRotCorr || {
                            x: 0,
                            y: 0
                        },
                        v = r || g.reserveSpaceDefault ? 0 : -g.labelOffset * ("center" === g.labelAlign ? .5 : 1),
                        b = o.distance,
                        k = {};
                    return c = 0 === g.side ? i.rotation ? -b : -i.getBBox().height : 2 === g.side ? y.y + b : Math.cos(i.rotation * s) * (y.y - i.getBBox(!1, 0).height / 2), a(o.y) && (c = 0 === g.side && g.horiz ? o.y + c : o.y), t = t + u(o.x, [0, 1, 0, -1][g.side] * b) + v + y.x - (n && r ? n * f * (m ? -1 : 1) : 0), e = e + c - (n && !r ? n * f * (m ? 1 : -1) : 0), x && (p = l / (d || 1) % x, g.opposite && (p = x - p - 1), e += g.labelOffset / x * p), k.x = t, k.y = Math.round(e), h(this, "afterGetLabelPosition", {
                        pos: k,
                        tickmarkOffset: n,
                        index: l
                    }), k
                }
                getLabelSize() {
                    return this.label ? this.label.getBBox()[this.axis.horiz ? "height" : "width"] : 0
                }
                getMarkPath(t, e, i, s, r, o) {
                    return o.crispLine([
                        ["M", t, e],
                        ["L", t + (r ? 0 : -i), e + (r ? i : 0)]
                    ], s)
                }
                handleOverflow(t) {
                    let e, i, r, o = this.axis,
                        a = o.options.labels,
                        n = t.x,
                        l = o.chart.chartWidth,
                        h = o.chart.spacing,
                        d = u(o.labelLeft, Math.min(o.pos, h[3])),
                        c = u(o.labelRight, Math.max(o.isRadial ? 0 : o.pos + o.len, l - h[1])),
                        p = this.label,
                        g = this.rotation,
                        f = {
                            left: 0,
                            center: .5,
                            right: 1
                        }[o.labelAlign || p.attr("align")],
                        m = p.getBBox().width,
                        x = o.getSlotWidth(this),
                        y = {},
                        v = x,
                        b = 1;
                    g || "justify" !== a.overflow ? g < 0 && n - f * m < d ? r = Math.round(n / Math.cos(g * s) - d) : g > 0 && n + f * m > c && (r = Math.round((l - n) / Math.cos(g * s))) : (e = n - f * m, i = n + (1 - f) * m, e < d ? v = t.x + v * (1 - f) - d : i > c && (v = c - t.x + v * f, b = -1), (v = Math.min(x, v)) < x && "center" === o.labelAlign && (t.x += b * (x - v - f * (x - Math.min(m, v)))), (m > v || o.autoRotation && (p.styles || {}).width) && (r = v)), r && (this.shortenLabel ? this.shortenLabel() : (y.width = Math.floor(r) + "px", (a.style || {}).textOverflow || (y.textOverflow = "ellipsis"), p.css(y)))
                }
                moveLabel(t, e) {
                    let i, s = this,
                        r = s.label,
                        o = s.axis,
                        a = !1;
                    r && r.textStr === t ? (s.movedLabel = r, a = !0, delete s.label) : p(o.ticks, (function(e) {
                        a || e.isNew || e === s || !e.label || e.label.textStr !== t || (s.movedLabel = e.label, a = !0, e.labelPos = s.movedLabel.xy, delete e.label)
                    })), !a && (s.labelPos || r) && (i = s.labelPos || r.xy, s.movedLabel = s.createLabel(t, e, i), s.movedLabel && s.movedLabel.attr({
                        opacity: 0
                    }))
                }
                render(t, e, i) {
                    let s = this.axis,
                        r = s.horiz,
                        a = this.pos,
                        n = u(this.tickmarkOffset, s.tickmarkOffset),
                        l = this.getPosition(r, a, n, e),
                        d = l.x,
                        c = l.y,
                        p = s.pos,
                        g = p + s.len,
                        f = r && d === g || !r && c === p ? -1 : 1,
                        m = r ? d : c;
                    !s.chart.polar && this.isNew && (o(m) < p || m > g) && (i = 0);
                    let x = u(i, this.label && this.label.newOpacity, 1);
                    i = u(i, 1), this.isActive = !0, this.renderGridLine(e, i, f), this.renderMark(l, i, f), this.renderLabel(l, e, x, t), this.isNew = !1, h(this, "afterRender")
                }
                renderGridLine(t, e, i) {
                    let s, r = this.axis,
                        o = r.options,
                        a = {},
                        n = this.pos,
                        l = this.type,
                        h = u(this.tickmarkOffset, r.tickmarkOffset),
                        d = r.chart.renderer,
                        c = this.gridLine,
                        p = o.gridLineWidth,
                        g = o.gridLineColor,
                        f = o.gridLineDashStyle;
                    "minor" === this.type && (p = o.minorGridLineWidth, g = o.minorGridLineColor, f = o.minorGridLineDashStyle), c || (r.chart.styledMode || (a.stroke = g, a["stroke-width"] = p || 0, a.dashstyle = f), l || (a.zIndex = 1), t && (e = 0), this.gridLine = c = d.path().attr(a).addClass("highcharts-" + (l ? l + "-" : "") + "grid-line").add(r.gridGroup)), c && (s = r.getPlotLinePath({
                        value: n + h,
                        lineWidth: c.strokeWidth() * i,
                        force: "pass",
                        old: t,
                        acrossPanes: !1
                    })) && c[t || this.isNew ? "attr" : "animate"]({
                        d: s,
                        opacity: e
                    })
                }
                renderMark(t, e, i) {
                    let s = this.axis,
                        r = s.options,
                        o = s.chart.renderer,
                        a = this.type,
                        n = s.tickSize(a ? a + "Tick" : "tick"),
                        l = t.x,
                        h = t.y,
                        d = u(r["minor" !== a ? "tickWidth" : "minorTickWidth"], !a && s.isXAxis ? 1 : 0),
                        c = r["minor" !== a ? "tickColor" : "minorTickColor"],
                        p = this.mark,
                        g = !p;
                    n && (s.opposite && (n[0] = -n[0]), p || (this.mark = p = o.path().addClass("highcharts-" + (a ? a + "-" : "") + "tick").add(s.axisGroup), s.chart.styledMode || p.attr({
                        stroke: c,
                        "stroke-width": d
                    })), p[g ? "attr" : "animate"]({
                        d: this.getMarkPath(l, h, n[0], p.strokeWidth() * i, s.horiz, o),
                        opacity: e
                    }))
                }
                renderLabel(t, e, i, s) {
                    let r = this.axis,
                        o = r.horiz,
                        a = r.options,
                        n = this.label,
                        l = a.labels,
                        h = l.step,
                        c = u(this.tickmarkOffset, r.tickmarkOffset),
                        p = t.x,
                        g = t.y,
                        f = !0;
                    n && d(p) && (n.xy = t = this.getLabelPosition(p, g, n, o, l, c, s, h), this.isFirst && !this.isLast && !a.showFirstLabel || this.isLast && !this.isFirst && !a.showLastLabel ? f = !1 : !o || l.step || l.rotation || e || 0 === i || this.handleOverflow(t), h && s % h && (f = !1), f && d(t.y) ? (t.opacity = i, n[this.isNewLabel ? "attr" : "animate"](t).show(!0), this.isNewLabel = !1) : (n.hide(), this.isNewLabel = !0))
                }
                replaceMovedLabel() {
                    let t = this.label,
                        e = this.axis;
                    t && !this.isNew && (t.animate({
                        opacity: 0
                    }, void 0, t.destroy), delete this.label), e.isDirty = !0, this.label = this.movedLabel, delete this.movedLabel
                }
            }
        })), i(e, "Core/Axis/Axis.js", [e["Core/Animation/AnimationUtilities.js"], e["Core/Axis/AxisDefaults.js"], e["Core/Color/Color.js"], e["Core/Defaults.js"], e["Core/Foundation.js"], e["Core/Globals.js"], e["Core/Axis/Tick.js"], e["Core/Utilities.js"]], (function(t, e, i, s, r, o, a, n) {
            let {
                animObject: l
            } = t, {
                xAxis: h,
                yAxis: d
            } = e, {
                defaultOptions: c
            } = s, {
                registerEventOptions: p
            } = r, {
                deg2rad: u
            } = o, {
                arrayMax: g,
                arrayMin: f,
                clamp: m,
                correctFloat: x,
                defined: y,
                destroyObjectProperties: v,
                erase: b,
                error: k,
                extend: S,
                fireEvent: C,
                getClosestDistance: w,
                insertItem: M,
                isArray: A,
                isNumber: T,
                isString: P,
                merge: L,
                normalizeTickInterval: O,
                objectEach: E,
                pick: D,
                relativeLength: j,
                removeEvent: I,
                splat: B,
                syncTimeout: R
            } = n, N = (t, e) => O(e, void 0, void 0, D(t.options.allowDecimals, e < .5 || void 0 !== t.tickAmount), !!t.tickAmount);
            S(c, {
                xAxis: h,
                yAxis: L(h, d)
            });
            class z {
                constructor(t, e, i) {
                    this.init(t, e, i)
                }
                init(t, e, i = this.coll) {
                    let s = "xAxis" === i,
                        r = this.isZAxis || (t.inverted ? !s : s);
                    this.chart = t, this.horiz = r, this.isXAxis = s, this.coll = i, C(this, "init", {
                        userOptions: e
                    }), this.opposite = D(e.opposite, this.opposite), this.side = D(e.side, this.side, r ? this.opposite ? 0 : 2 : this.opposite ? 1 : 3), this.setOptions(e);
                    let o = this.options,
                        a = o.labels,
                        n = o.type;
                    this.userOptions = e, this.minPixelPadding = 0, this.reversed = D(o.reversed, this.reversed), this.visible = o.visible, this.zoomEnabled = o.zoomEnabled, this.hasNames = "category" === n || !0 === o.categories, this.categories = A(o.categories) && o.categories || (this.hasNames ? [] : void 0), this.names || (this.names = [], this.names.keys = {}), this.plotLinesAndBandsGroups = {}, this.positiveValuesOnly = !!this.logarithmic, this.isLinked = y(o.linkedTo), this.ticks = {}, this.labelEdge = [], this.minorTicks = {}, this.plotLinesAndBands = [], this.alternateBands = {}, this.len = 0, this.minRange = this.userMinRange = o.minRange || o.maxZoom, this.range = o.range, this.offset = o.offset || 0, this.max = void 0, this.min = void 0;
                    let l = D(o.crosshair, B(t.options.tooltip.crosshairs)[s ? 0 : 1]);
                    this.crosshair = !0 === l ? {} : l, -1 === t.axes.indexOf(this) && (s ? t.axes.splice(t.xAxis.length, 0, this) : t.axes.push(this), M(this, t[this.coll])), t.orderItems(this.coll), this.series = this.series || [], t.inverted && !this.isZAxis && s && !y(this.reversed) && (this.reversed = !0), this.labelRotation = T(a.rotation) ? a.rotation : void 0, p(this, o), C(this, "afterInit")
                }
                setOptions(t) {
                    let e = this.horiz ? {
                        labels: {
                            autoRotation: [-45]
                        },
                        margin: 15
                    } : {
                        title: {
                            rotation: 90 * this.side
                        }
                    };
                    this.options = L(e, c[this.coll], t), C(this, "afterSetOptions", {
                        userOptions: t
                    })
                }
                defaultLabelFormatter() {
                    let t, e, i = this.axis,
                        {
                            numberFormatter: s
                        } = this.chart,
                        r = T(this.value) ? this.value : NaN,
                        o = i.chart.time,
                        a = i.categories,
                        n = this.dateTimeLabelFormat,
                        l = c.lang,
                        h = l.numericSymbols,
                        d = l.numericSymbolMagnitude || 1e3,
                        p = i.logarithmic ? Math.abs(r) : i.tickInterval,
                        u = h && h.length;
                    if (a) e = `${this.value}`;
                    else if (n) e = o.dateFormat(n, r);
                    else if (u && h && p >= 1e3)
                        for (; u-- && void 0 === e;) p >= (t = Math.pow(d, u + 1)) && 10 * r % t == 0 && null !== h[u] && 0 !== r && (e = s(r / t, -1) + h[u]);
                    return void 0 === e && (e = Math.abs(r) >= 1e4 ? s(r, -1) : s(r, -1, void 0, "")), e
                }
                getSeriesExtremes() {
                    let t, e = this;
                    C(this, "getSeriesExtremes", null, (function() {
                        e.hasVisibleSeries = !1, e.dataMin = e.dataMax = e.threshold = void 0, e.softThreshold = !e.isXAxis, e.series.forEach((i => {
                            if (i.reserveSpace()) {
                                let s, r, o, a = i.options,
                                    n = a.threshold;
                                if (e.hasVisibleSeries = !0, e.positiveValuesOnly && 0 >= (n || 0) && (n = void 0), e.isXAxis)(s = i.xData) && s.length && (s = e.logarithmic ? s.filter((t => t > 0)) : s, r = (t = i.getXExtremes(s)).min, o = t.max, T(r) || r instanceof Date || (s = s.filter(T), r = (t = i.getXExtremes(s)).min, o = t.max), s.length && (e.dataMin = Math.min(D(e.dataMin, r), r), e.dataMax = Math.max(D(e.dataMax, o), o)));
                                else {
                                    let t = i.applyExtremes();
                                    T(t.dataMin) && (r = t.dataMin, e.dataMin = Math.min(D(e.dataMin, r), r)), T(t.dataMax) && (o = t.dataMax, e.dataMax = Math.max(D(e.dataMax, o), o)), y(n) && (e.threshold = n), (!a.softThreshold || e.positiveValuesOnly) && (e.softThreshold = !1)
                                }
                            }
                        }))
                    })), C(this, "afterGetSeriesExtremes")
                }
                translate(t, e, i, s, r, o) {
                    var a;
                    let n = this.linkedParent || this,
                        l = s && n.old ? n.old.min : n.min;
                    if (!T(l)) return NaN;
                    let h = n.minPixelPadding,
                        d = (n.isOrdinal || (null == (a = n.brokenAxis) ? void 0 : a.hasBreaks) || n.logarithmic && r) && n.lin2val,
                        c = 1,
                        p = 0,
                        u = s && n.old ? n.old.transA : n.transA,
                        g = 0;
                    if (u || (u = n.transA), i && (c *= -1, p = n.len), n.reversed && (c *= -1, p -= c * (n.sector || n.len)), e) g = (t = t * c + p - h) / u + l, d && (g = n.lin2val(g));
                    else {
                        d && (t = n.val2lin(t));
                        let e = c * (t - l) * u;
                        g = (n.isRadial ? e : x(e)) + p + c * h + (T(o) ? u * o : 0)
                    }
                    return g
                }
                toPixels(t, e) {
                    return this.translate(t, !1, !this.horiz, void 0, !0) + (e ? 0 : this.pos)
                }
                toValue(t, e) {
                    return this.translate(t - (e ? 0 : this.pos), !0, !this.horiz, void 0, !0)
                }
                getPlotLinePath(t) {
                    let e, i, s, r, o, a = this,
                        n = a.chart,
                        l = a.left,
                        h = a.top,
                        d = t.old,
                        c = t.value,
                        p = t.lineWidth,
                        u = d && n.oldChartHeight || n.chartHeight,
                        g = d && n.oldChartWidth || n.chartWidth,
                        f = a.transB,
                        x = t.translatedValue,
                        y = t.force;

                    function v(t, e, i) {
                        return "pass" !== y && (t < e || t > i) && (y ? t = m(t, e, i) : o = !0), t
                    }
                    let b = {
                        value: c,
                        lineWidth: p,
                        old: d,
                        force: y,
                        acrossPanes: t.acrossPanes,
                        translatedValue: x
                    };
                    return C(this, "getPlotLinePath", b, (function(t) {
                        e = s = Math.round((x = m(x = D(x, a.translate(c, void 0, void 0, d)), -1e5, 1e5)) + f), i = r = Math.round(u - x - f), T(x) ? a.horiz ? (i = h, r = u - a.bottom + (n.scrollablePixelsY || 0), e = s = v(e, l, l + a.width)) : (e = l, s = g - a.right + (n.scrollablePixelsX || 0), i = r = v(i, h, h + a.height)) : (o = !0, y = !1), t.path = o && !y ? void 0 : n.renderer.crispLine([
                            ["M", e, i],
                            ["L", s, r]
                        ], p || 1)
                    })), b.path
                }
                getLinearTickPositions(t, e, i) {
                    let s, r, o, a = x(Math.floor(e / t) * t),
                        n = x(Math.ceil(i / t) * t),
                        l = [];
                    if (x(a + t) === a && (o = 20), this.single) return [e];
                    for (s = a; s <= n && (l.push(s), (s = x(s + t, o)) !== r);) r = s;
                    return l
                }
                getMinorTickInterval() {
                    let {
                        minorTicks: t,
                        minorTickInterval: e
                    } = this.options;
                    return !0 === t ? D(e, "auto") : !1 !== t ? e : void 0
                }
                getMinorTickPositions() {
                    let t, e = this.options,
                        i = this.tickPositions,
                        s = this.minorTickInterval,
                        r = this.pointRangePadding || 0,
                        o = (this.min || 0) - r,
                        a = (this.max || 0) + r,
                        n = a - o,
                        l = [];
                    if (n && n / s < this.len / 3) {
                        let r = this.logarithmic;
                        if (r) this.paddedTicks.forEach((function(t, e, i) {
                            e && l.push.apply(l, r.getLogTickPositions(s, i[e - 1], i[e], !0))
                        }));
                        else if (this.dateTime && "auto" === this.getMinorTickInterval()) l = l.concat(this.getTimeTicks(this.dateTime.normalizeTimeTickInterval(s), o, a, e.startOfWeek));
                        else
                            for (t = o + (i[0] - o) % s; t <= a && t !== l[0]; t += s) l.push(t)
                    }
                    return 0 !== l.length && this.trimTicks(l), l
                }
                adjustForMinRange() {
                    let t, e, i, s, r = this.options,
                        o = this.logarithmic,
                        {
                            max: a,
                            min: n,
                            minRange: l
                        } = this;
                    this.isXAxis && void 0 === l && !o && (l = y(r.min) || y(r.max) || y(r.floor) || y(r.ceiling) ? null : Math.min(5 * (w(this.series.map((t => {
                        var e;
                        return (t.xIncrement ? null == (e = t.xData) ? void 0 : e.slice(0, 2) : t.xData) || []
                    }))) || 0), this.dataMax - this.dataMin)), T(a) && T(n) && T(l) && a - n < l && (e = this.dataMax - this.dataMin >= l, t = (l - a + n) / 2, i = [n - t, D(r.min, n - t)], e && (i[2] = o ? o.log2lin(this.dataMin) : this.dataMin), s = [(n = g(i)) + l, D(r.max, n + l)], e && (s[2] = o ? o.log2lin(this.dataMax) : this.dataMax), (a = f(s)) - n < l && (i[0] = a - l, i[1] = D(r.min, a - l), n = g(i))), this.minRange = l, this.min = n, this.max = a
                }
                getClosest() {
                    let t, e;
                    if (this.categories) e = 1;
                    else {
                        let i = [];
                        this.series.forEach((function(t) {
                            var s;
                            let r = t.closestPointRange;
                            1 === (null == (s = t.xData) ? void 0 : s.length) ? i.push(t.xData[0]) : !t.noSharedTooltip && y(r) && t.reserveSpace() && (e = y(e) ? Math.min(e, r) : r)
                        })), i.length && (i.sort(((t, e) => t - e)), t = w([i]))
                    }
                    return t && e ? Math.min(t, e) : t || e
                }
                nameToX(t) {
                    let e, i = A(this.options.categories),
                        s = i ? this.categories : this.names,
                        r = t.options.x;
                    return t.series.requireSorting = !1, y(r) || (r = this.options.uniqueNames && s ? i ? s.indexOf(t.name) : D(s.keys[t.name], -1) : t.series.autoIncrement()), -1 === r ? !i && s && (e = s.length) : e = r, void 0 !== e ? (this.names[e] = t.name, this.names.keys[t.name] = e) : t.x && (e = t.x), e
                }
                updateNames() {
                    let t = this,
                        e = this.names;
                    e.length > 0 && (Object.keys(e.keys).forEach((function(t) {
                        delete e.keys[t]
                    })), e.length = 0, this.minRange = this.userMinRange, (this.series || []).forEach((e => {
                        e.xIncrement = null, (!e.points || e.isDirtyData) && (t.max = Math.max(t.max, e.xData.length - 1), e.processData(), e.generatePoints()), e.data.forEach((function(i, s) {
                            let r;
                            (null == i ? void 0 : i.options) && void 0 !== i.name && void 0 !== (r = t.nameToX(i)) && r !== i.x && (i.x = r, e.xData[s] = r)
                        }))
                    })))
                }
                setAxisTranslation() {
                    let t, e, i = this,
                        s = i.max - i.min,
                        r = i.linkedParent,
                        o = !!i.categories,
                        a = i.isXAxis,
                        n = i.axisPointRange || 0,
                        l = 0,
                        h = 0,
                        d = i.transA;
                    (a || o || n) && (t = i.getClosest(), r ? (l = r.minPointOffset, h = r.pointRangePadding) : i.series.forEach((function(e) {
                        let s = o ? 1 : a ? D(e.options.pointRange, t, 0) : i.axisPointRange || 0,
                            r = e.options.pointPlacement;
                        if (n = Math.max(n, s), !i.single || o) {
                            let t = e.is("xrange") ? !a : a;
                            l = Math.max(l, t && P(r) ? 0 : s / 2), h = Math.max(h, t && "on" === r ? 0 : s)
                        }
                    })), e = i.ordinal && i.ordinal.slope && t ? i.ordinal.slope / t : 1, i.minPointOffset = l *= e, i.pointRangePadding = h *= e, i.pointRange = Math.min(n, i.single && o ? 1 : s), a && t && (i.closestPointRange = t)), i.translationSlope = i.transA = d = i.staticScale || i.len / (s + h || 1), i.transB = i.horiz ? i.left : i.bottom, i.minPixelPadding = d * l, C(this, "afterSetAxisTranslation")
                }
                minFromRange() {
                    let {
                        max: t,
                        min: e
                    } = this;
                    return T(t) && T(e) && t - e || void 0
                }
                setTickInterval(t) {
                    var e, i, s, r;
                    let o, a, n, l, h, {
                            categories: d,
                            chart: c,
                            dataMax: p,
                            dataMin: u,
                            dateTime: g,
                            isXAxis: f,
                            logarithmic: m,
                            options: v,
                            softThreshold: b
                        } = this,
                        S = T(this.threshold) ? this.threshold : void 0,
                        w = this.minRange || 0,
                        {
                            ceiling: M,
                            floor: A,
                            linkedTo: P,
                            softMax: L,
                            softMin: O
                        } = v,
                        E = T(P) && (null == (e = c[this.coll]) ? void 0 : e[P]),
                        j = v.tickPixelInterval,
                        I = v.maxPadding,
                        B = v.minPadding,
                        R = 0,
                        z = T(v.tickInterval) && v.tickInterval >= 0 ? v.tickInterval : void 0;
                    if (g || d || E || this.getTickAmount(), l = D(this.userMin, v.min), h = D(this.userMax, v.max), E ? (this.linkedParent = E, o = E.getExtremes(), this.min = D(o.min, o.dataMin), this.max = D(o.max, o.dataMax), v.type !== E.options.type && k(11, !0, c)) : (b && y(S) && T(p) && T(u) && (u >= S ? (a = S, B = 0) : p <= S && (n = S, I = 0)), this.min = D(l, a, u), this.max = D(h, n, p)), T(this.max) && T(this.min) && (m && (this.positiveValuesOnly && !t && 0 >= Math.min(this.min, D(u, this.min)) && k(10, !0, c), this.min = x(m.log2lin(this.min), 16), this.max = x(m.log2lin(this.max), 16)), this.range && T(u) && (this.userMin = this.min = l = Math.max(u, this.minFromRange() || 0), this.userMax = h = this.max, this.range = void 0)), C(this, "foundExtremes"), this.adjustForMinRange(), T(this.min) && T(this.max)) {
                        if (!T(this.userMin) && T(O) && O < this.min && (this.min = l = O), !T(this.userMax) && T(L) && L > this.max && (this.max = h = L), d || this.axisPointRange || (null == (i = this.stacking) ? void 0 : i.usePercentage) || E || !(R = this.max - this.min) || (!y(l) && B && (this.min -= R * B), y(h) || !I || (this.max += R * I)), !T(this.userMin) && T(A) && (this.min = Math.max(this.min, A)), !T(this.userMax) && T(M) && (this.max = Math.min(this.max, M)), b && T(u) && T(p)) {
                            let t = S || 0;
                            !y(l) && this.min < t && u >= t ? this.min = v.minRange ? Math.min(t, this.max - w) : t : !y(h) && this.max > t && p <= t && (this.max = v.minRange ? Math.max(t, this.min + w) : t)
                        }!c.polar && this.min > this.max && (y(v.min) ? this.max = this.min : y(v.max) && (this.min = this.max)), R = this.max - this.min
                    }
                    if (this.min !== this.max && T(this.min) && T(this.max) ? E && !z && j === E.options.tickPixelInterval ? this.tickInterval = z = E.tickInterval : this.tickInterval = D(z, this.tickAmount ? R / Math.max(this.tickAmount - 1, 1) : void 0, d ? 1 : R * j / Math.max(this.len, j)) : this.tickInterval = 1, f && !t) {
                        let t = this.min !== (null == (s = this.old) ? void 0 : s.min) || this.max !== (null == (r = this.old) ? void 0 : r.max);
                        this.series.forEach((function(e) {
                            var i;
                            e.forceCrop = null == (i = e.forceCropping) ? void 0 : i.call(e), e.processData(t)
                        })), C(this, "postProcessData", {
                            hasExtremesChanged: t
                        })
                    }
                    this.setAxisTranslation(), C(this, "initialAxisTranslation"), this.pointRange && !z && (this.tickInterval = Math.max(this.pointRange, this.tickInterval));
                    let W = D(v.minTickInterval, g && !this.series.some((t => t.noSharedTooltip)) ? this.closestPointRange : 0);
                    !z && this.tickInterval < W && (this.tickInterval = W), g || m || z || (this.tickInterval = N(this, this.tickInterval)), this.tickAmount || (this.tickInterval = this.unsquish()), this.setTickPositions()
                }
                setTickPositions() {
                    var t, e;
                    let i, s = this.options,
                        r = s.tickPositions,
                        o = s.tickPositioner,
                        a = this.getMinorTickInterval(),
                        n = !this.isPanning,
                        l = n && s.startOnTick,
                        h = n && s.endOnTick,
                        d = [];
                    if (this.tickmarkOffset = this.categories && "between" === s.tickmarkPlacement && 1 === this.tickInterval ? .5 : 0, this.minorTickInterval = "auto" === a && this.tickInterval ? this.tickInterval / s.minorTicksPerMajor : a, this.single = this.min === this.max && y(this.min) && !this.tickAmount && (this.min % 1 == 0 || !1 !== s.allowDecimals), r) d = r.slice();
                    else if (T(this.min) && T(this.max)) {
                        if (!(null == (t = this.ordinal) ? void 0 : t.positions) && (this.max - this.min) / this.tickInterval > Math.max(2 * this.len, 200)) d = [this.min, this.max], k(19, !1, this.chart);
                        else if (this.dateTime) d = this.getTimeTicks(this.dateTime.normalizeTimeTickInterval(this.tickInterval, s.units), this.min, this.max, s.startOfWeek, null == (e = this.ordinal) ? void 0 : e.positions, this.closestPointRange, !0);
                        else if (this.logarithmic) d = this.logarithmic.getLogTickPositions(this.tickInterval, this.min, this.max);
                        else {
                            let t = this.tickInterval,
                                e = t;
                            for (; e <= 2 * t && (d = this.getLinearTickPositions(this.tickInterval, this.min, this.max), this.tickAmount && d.length > this.tickAmount);) this.tickInterval = N(this, e *= 1.1)
                        }
                        d.length > this.len && (d = [d[0], d[d.length - 1]])[0] === d[1] && (d.length = 1), o && (this.tickPositions = d, (i = o.apply(this, [this.min, this.max])) && (d = i))
                    }
                    this.tickPositions = d, this.paddedTicks = d.slice(0), this.trimTicks(d, l, h), !this.isLinked && T(this.min) && T(this.max) && (this.single && d.length < 2 && !this.categories && !this.series.some((t => t.is("heatmap") && "between" === t.options.pointPlacement)) && (this.min -= .5, this.max += .5), r || i || this.adjustTickAmount()), C(this, "afterSetTickPositions")
                }
                trimTicks(t, e, i) {
                    let s = t[0],
                        r = t[t.length - 1],
                        o = !this.isOrdinal && this.minPointOffset || 0;
                    if (C(this, "trimTicks"), !this.isLinked) {
                        if (e && s !== -1 / 0) this.min = s;
                        else
                            for (; this.min - o > t[0];) t.shift();
                        if (i) this.max = r;
                        else
                            for (; this.max + o < t[t.length - 1];) t.pop();
                        0 === t.length && y(s) && !this.options.tickPositions && t.push((r + s) / 2)
                    }
                }
                alignToOthers() {
                    let t, e = this,
                        i = e.chart,
                        s = [this],
                        r = e.options,
                        o = i.options.chart,
                        a = "yAxis" === this.coll && o.alignThresholds,
                        n = [];
                    if (e.thresholdAlignment = void 0, (!1 !== o.alignTicks && r.alignTicks || a) && !1 !== r.startOnTick && !1 !== r.endOnTick && !e.logarithmic) {
                        let r = t => {
                                let {
                                    horiz: e,
                                    options: i
                                } = t;
                                return [e ? i.left : i.top, i.width, i.height, i.pane].join(",")
                            },
                            o = r(this);
                        i[this.coll].forEach((function(i) {
                            let {
                                series: a
                            } = i;
                            a.length && a.some((t => t.visible)) && i !== e && r(i) === o && (t = !0, s.push(i))
                        }))
                    }
                    if (t && a) {
                        s.forEach((t => {
                            let i = t.getThresholdAlignment(e);
                            T(i) && n.push(i)
                        }));
                        let t = n.length > 1 ? n.reduce(((t, e) => t + e), 0) / n.length : void 0;
                        s.forEach((e => {
                            e.thresholdAlignment = t
                        }))
                    }
                    return t
                }
                getThresholdAlignment(t) {
                    if ((!T(this.dataMin) || this !== t && this.series.some((t => t.isDirty || t.isDirtyData))) && this.getSeriesExtremes(), T(this.threshold)) {
                        let t = m((this.threshold - (this.dataMin || 0)) / ((this.dataMax || 0) - (this.dataMin || 0)), 0, 1);
                        return this.options.reversed && (t = 1 - t), t
                    }
                }
                getTickAmount() {
                    let t = this.options,
                        e = t.tickPixelInterval,
                        i = t.tickAmount;
                    y(t.tickInterval) || i || !(this.len < e) || this.isRadial || this.logarithmic || !t.startOnTick || !t.endOnTick || (i = 2), !i && this.alignToOthers() && (i = Math.ceil(this.len / e) + 1), i < 4 && (this.finalTickAmt = i, i = 5), this.tickAmount = i
                }
                adjustTickAmount() {
                    let t, e, i, s = this,
                        {
                            finalTickAmt: r,
                            max: o,
                            min: a,
                            options: n,
                            tickPositions: l,
                            tickAmount: h,
                            thresholdAlignment: d
                        } = s,
                        c = null == l ? void 0 : l.length,
                        p = D(s.threshold, s.softThreshold ? 0 : null),
                        u = s.tickInterval,
                        g = () => l.push(x(l[l.length - 1] + u)),
                        f = () => l.unshift(x(l[0] - u));
                    if (T(d) && (i = d < .5 ? Math.ceil(d * (h - 1)) : Math.floor(d * (h - 1)), n.reversed && (i = h - 1 - i)), s.hasData() && T(a) && T(o)) {
                        let d = () => {
                            s.transA *= (c - 1) / (h - 1), s.min = n.startOnTick ? l[0] : Math.min(a, l[0]), s.max = n.endOnTick ? l[l.length - 1] : Math.max(o, l[l.length - 1])
                        };
                        if (T(i) && T(s.threshold)) {
                            for (; l[i] !== p || l.length !== h || l[0] > a || l[l.length - 1] < o;) {
                                for (l.length = 0, l.push(s.threshold); l.length < h;) void 0 === l[i] || l[i] > s.threshold ? f() : g();
                                if (u > 8 * s.tickInterval) break;
                                u *= 2
                            }
                            d()
                        } else if (c < h) {
                            for (; l.length < h;) l.length % 2 || a === p ? g() : f();
                            d()
                        }
                        if (y(r)) {
                            for (e = t = l.length; e--;)(3 === r && e % 2 == 1 || r <= 2 && e > 0 && e < t - 1) && l.splice(e, 1);
                            s.finalTickAmt = void 0
                        }
                    }
                }
                setScale() {
                    var t, e;
                    let {
                        coll: i,
                        stacking: s
                    } = this, r = !1, o = !1;
                    this.series.forEach((t => {
                        r = r || t.isDirtyData || t.isDirty, o = o || t.xAxis && t.xAxis.isDirty || !1
                    })), this.setAxisSize();
                    let a = this.len !== (this.old && this.old.len);
                    a || r || o || this.isLinked || this.forceRedraw || this.userMin !== (this.old && this.old.userMin) || this.userMax !== (this.old && this.old.userMax) || this.alignToOthers() ? (s && "yAxis" === i && s.buildStacks(), this.forceRedraw = !1, this.userMinRange || (this.minRange = void 0), this.getSeriesExtremes(), this.setTickInterval(), s && "xAxis" === i && s.buildStacks(), this.isDirty || (this.isDirty = a || this.min !== (null == (t = this.old) ? void 0 : t.min) || this.max !== (null == (e = this.old) ? void 0 : e.max))) : s && s.cleanStacks(), r && delete this.allExtremes, C(this, "afterSetScale")
                }
                setExtremes(t, e, i = !0, s, r) {
                    this.series.forEach((t => {
                        delete t.kdTree
                    })), C(this, "setExtremes", r = S(r, {
                        min: t,
                        max: e
                    }), (t => {
                        this.userMin = t.min, this.userMax = t.max, this.eventArgs = t, i && this.chart.redraw(s)
                    }))
                }
                setAxisSize() {
                    let t = this.chart,
                        e = this.options,
                        i = e.offsets || [0, 0, 0, 0],
                        s = this.horiz,
                        r = this.width = Math.round(j(D(e.width, t.plotWidth - i[3] + i[1]), t.plotWidth)),
                        o = this.height = Math.round(j(D(e.height, t.plotHeight - i[0] + i[2]), t.plotHeight)),
                        a = this.top = Math.round(j(D(e.top, t.plotTop + i[0]), t.plotHeight, t.plotTop)),
                        n = this.left = Math.round(j(D(e.left, t.plotLeft + i[3]), t.plotWidth, t.plotLeft));
                    this.bottom = t.chartHeight - o - a, this.right = t.chartWidth - r - n, this.len = Math.max(s ? r : o, 0), this.pos = s ? n : a
                }
                getExtremes() {
                    let t = this.logarithmic;
                    return {
                        min: t ? x(t.lin2log(this.min)) : this.min,
                        max: t ? x(t.lin2log(this.max)) : this.max,
                        dataMin: this.dataMin,
                        dataMax: this.dataMax,
                        userMin: this.userMin,
                        userMax: this.userMax
                    }
                }
                getThreshold(t) {
                    let e = this.logarithmic,
                        i = e ? e.lin2log(this.min) : this.min,
                        s = e ? e.lin2log(this.max) : this.max;
                    return null === t || t === -1 / 0 ? t = i : t === 1 / 0 ? t = s : i > t ? t = i : s < t && (t = s), this.translate(t, 0, 1, 0, 1)
                }
                autoLabelAlign(t) {
                    let e = (D(t, 0) - 90 * this.side + 720) % 360,
                        i = {
                            align: "center"
                        };
                    return C(this, "autoLabelAlign", i, (function(t) {
                        e > 15 && e < 165 ? t.align = "right" : e > 195 && e < 345 && (t.align = "left")
                    })), i.align
                }
                tickSize(t) {
                    let e, i = this.options,
                        s = D(i["tick" === t ? "tickWidth" : "minorTickWidth"], "tick" === t && this.isXAxis && !this.categories ? 1 : 0),
                        r = i["tick" === t ? "tickLength" : "minorTickLength"];
                    s && r && ("inside" === i[t + "Position"] && (r = -r), e = [r, s]);
                    let o = {
                        tickSize: e
                    };
                    return C(this, "afterTickSize", o), o.tickSize
                }
                labelMetrics() {
                    let t = this.chart.renderer,
                        e = this.ticks,
                        i = e[Object.keys(e)[0]] || {};
                    return this.chart.renderer.fontMetrics(i.label || i.movedLabel || t.box)
                }
                unsquish() {
                    let t, e, i = this.options.labels,
                        s = this.horiz,
                        r = this.tickInterval,
                        o = this.len / (((this.categories ? 1 : 0) + this.max - this.min) / r),
                        a = i.rotation,
                        n = this.labelMetrics().h,
                        l = Math.max(this.max - this.min, 0),
                        h = function(t) {
                            let e = t / (o || 1);
                            return (e = e > 1 ? Math.ceil(e) : 1) * r > l && t !== 1 / 0 && o !== 1 / 0 && l && (e = Math.ceil(l / r)), x(e * r)
                        },
                        d = r,
                        c = Number.MAX_VALUE;
                    if (s) {
                        if (!i.staggerLines && (T(a) ? e = [a] : o < i.autoRotationLimit && (e = i.autoRotation)), e) {
                            let i, s;
                            for (let r of e)(r === a || r && r >= -90 && r <= 90) && (s = (i = h(Math.abs(n / Math.sin(u * r)))) + Math.abs(r / 360)) < c && (c = s, t = r, d = i)
                        }
                    } else d = h(.75 * n);
                    return this.autoRotation = e, this.labelRotation = D(t, T(a) ? a : 0), i.step ? r : d
                }
                getSlotWidth(t) {
                    let e = this.chart,
                        i = this.horiz,
                        s = this.options.labels,
                        r = Math.max(this.tickPositions.length - (this.categories ? 0 : 1), 1),
                        o = e.margin[3];
                    if (t && T(t.slotWidth)) return t.slotWidth;
                    if (i && s.step < 2) return s.rotation ? 0 : (this.staggerLines || 1) * this.len / r;
                    if (!i) {
                        let t = s.style.width;
                        if (void 0 !== t) return parseInt(String(t), 10);
                        if (o) return o - e.spacing[3]
                    }
                    return .33 * e.chartWidth
                }
                renderUnsquish() {
                    let t, e, i, s, r = this.chart,
                        o = r.renderer,
                        a = this.tickPositions,
                        n = this.ticks,
                        l = this.options.labels,
                        h = l.style,
                        d = this.horiz,
                        c = this.getSlotWidth(),
                        p = Math.max(1, Math.round(c - 2 * l.padding)),
                        u = {},
                        g = this.labelMetrics(),
                        f = h.textOverflow,
                        m = 0;
                    if (P(l.rotation) || (u.rotation = l.rotation || 0), a.forEach((function(t) {
                            let e = n[t];
                            e.movedLabel && e.replaceMovedLabel(), e && e.label && e.label.textPxLength > m && (m = e.label.textPxLength)
                        })), this.maxLabelLength = m, this.autoRotation) m > p && m > g.h ? u.rotation = this.labelRotation : this.labelRotation = 0;
                    else if (c && (t = p, !f))
                        for (e = "clip", s = a.length; !d && s--;)(i = n[a[s]].label) && ("ellipsis" === i.styles.textOverflow ? i.css({
                            textOverflow: "clip"
                        }) : i.textPxLength > c && i.css({
                            width: c + "px"
                        }), i.getBBox().height > this.len / a.length - (g.h - g.f) && (i.specificTextOverflow = "ellipsis"));
                    u.rotation && (t = m > .5 * r.chartHeight ? .33 * r.chartHeight : m, f || (e = "ellipsis")), this.labelAlign = l.align || this.autoLabelAlign(this.labelRotation), this.labelAlign && (u.align = this.labelAlign), a.forEach((function(i) {
                        let s = n[i],
                            r = s && s.label,
                            o = h.width,
                            a = {};
                        r && (r.attr(u), s.shortenLabel ? s.shortenLabel() : t && !o && "nowrap" !== h.whiteSpace && (t < r.textPxLength || "SPAN" === r.element.tagName) ? (a.width = t + "px", f || (a.textOverflow = r.specificTextOverflow || e), r.css(a)) : !r.styles.width || a.width || o || r.css({
                            width: null
                        }), delete r.specificTextOverflow, s.rotation = u.rotation)
                    }), this), this.tickRotCorr = o.rotCorr(g.b, this.labelRotation || 0, 0 !== this.side)
                }
                hasData() {
                    return this.series.some((function(t) {
                        return t.hasData()
                    })) || this.options.showEmpty && y(this.min) && y(this.max)
                }
                addTitle(t) {
                    let e, i = this.chart.renderer,
                        s = this.horiz,
                        r = this.opposite,
                        o = this.options.title,
                        a = this.chart.styledMode;
                    this.axisTitle || ((e = o.textAlign) || (e = (s ? {
                        low: "left",
                        middle: "center",
                        high: "right"
                    } : {
                        low: r ? "right" : "left",
                        middle: "center",
                        high: r ? "left" : "right"
                    })[o.align]), this.axisTitle = i.text(o.text || "", 0, 0, o.useHTML).attr({
                        zIndex: 7,
                        rotation: o.rotation || 0,
                        align: e
                    }).addClass("highcharts-axis-title"), a || this.axisTitle.css(L(o.style)), this.axisTitle.add(this.axisGroup), this.axisTitle.isNew = !0), a || o.style.width || this.isRadial || this.axisTitle.css({
                        width: this.len + "px"
                    }), this.axisTitle[t ? "show" : "hide"](t)
                }
                generateTick(t) {
                    let e = this.ticks;
                    e[t] ? e[t].addLabel() : e[t] = new a(this, t)
                }
                createGroups() {
                    let {
                        axisParent: t,
                        chart: e,
                        coll: i,
                        options: s
                    } = this, r = e.renderer, o = (e, o, a) => r.g(e).attr({
                        zIndex: a
                    }).addClass(`highcharts-${i.toLowerCase()}${o} ` + (this.isRadial ? `highcharts-radial-axis${o} ` : "") + (s.className || "")).add(t);
                    this.axisGroup || (this.gridGroup = o("grid", "-grid", s.gridZIndex), this.axisGroup = o("axis", "", s.zIndex), this.labelGroup = o("axis-labels", "-labels", s.labels.zIndex))
                }
                getOffset() {
                    let t, e, i, s, r = this,
                        {
                            chart: o,
                            horiz: a,
                            options: n,
                            side: l,
                            ticks: h,
                            tickPositions: d,
                            coll: c
                        } = r,
                        p = o.inverted && !r.isZAxis ? [1, 0, 3, 2][l] : l,
                        u = r.hasData(),
                        g = n.title,
                        f = n.labels,
                        m = T(n.crossing),
                        x = o.axisOffset,
                        v = o.clipOffset,
                        b = [-1, 1, 1, -1][l],
                        k = 0,
                        S = 0,
                        w = 0;
                    if (r.showAxis = t = u || n.showEmpty, r.staggerLines = r.horiz && f.staggerLines || void 0, r.createGroups(), u || r.isLinked ? (d.forEach((function(t) {
                            r.generateTick(t)
                        })), r.renderUnsquish(), r.reserveSpaceDefault = 0 === l || 2 === l || {
                            1: "left",
                            3: "right"
                        }[l] === r.labelAlign, D(f.reserveSpace, !m && null, "center" === r.labelAlign || null, r.reserveSpaceDefault) && d.forEach((function(t) {
                            w = Math.max(h[t].getLabelSize(), w)
                        })), r.staggerLines && (w *= r.staggerLines), r.labelOffset = w * (r.opposite ? -1 : 1)) : E(h, (function(t, e) {
                            t.destroy(), delete h[e]
                        })), (null == g ? void 0 : g.text) && !1 !== g.enabled && (r.addTitle(t), t && !m && !1 !== g.reserveSpace && (r.titleOffset = k = r.axisTitle.getBBox()[a ? "height" : "width"], S = y(e = g.offset) ? 0 : D(g.margin, a ? 5 : 10))), r.renderLine(), r.offset = b * D(n.offset, x[l] ? x[l] + (n.margin || 0) : 0), r.tickRotCorr = r.tickRotCorr || {
                            x: 0,
                            y: 0
                        }, s = 0 === l ? -r.labelMetrics().h : 2 === l ? r.tickRotCorr.y : 0, i = Math.abs(w) + S, w && (i -= s, i += b * (a ? D(f.y, r.tickRotCorr.y + b * f.distance) : D(f.x, b * f.distance))), r.axisTitleMargin = D(e, i), r.getMaxLabelDimensions && (r.maxLabelDimensions = r.getMaxLabelDimensions(h, d)), "colorAxis" !== c) {
                        let t = this.tickSize("tick");
                        x[l] = Math.max(x[l], (r.axisTitleMargin || 0) + k + b * r.offset, i, d && d.length && t ? t[0] + b * r.offset : 0);
                        let e = !r.axisLine || n.offset ? 0 : 2 * Math.floor(r.axisLine.strokeWidth() / 2);
                        v[p] = Math.max(v[p], e)
                    }
                    C(this, "afterGetOffset")
                }
                getLinePath(t) {
                    let e = this.chart,
                        i = this.opposite,
                        s = this.offset,
                        r = this.horiz,
                        o = this.left + (i ? this.width : 0) + s,
                        a = e.chartHeight - this.bottom - (i ? this.height : 0) + s;
                    return i && (t *= -1), e.renderer.crispLine([
                        ["M", r ? this.left : o, r ? a : this.top],
                        ["L", r ? e.chartWidth - this.right : o, r ? a : e.chartHeight - this.bottom]
                    ], t)
                }
                renderLine() {
                    this.axisLine || (this.axisLine = this.chart.renderer.path().addClass("highcharts-axis-line").add(this.axisGroup), this.chart.styledMode || this.axisLine.attr({
                        stroke: this.options.lineColor,
                        "stroke-width": this.options.lineWidth,
                        zIndex: 7
                    }))
                }
                getTitlePosition(t) {
                    let e = this.horiz,
                        i = this.left,
                        s = this.top,
                        r = this.len,
                        o = this.options.title,
                        a = e ? i : s,
                        n = this.opposite,
                        l = this.offset,
                        h = o.x,
                        d = o.y,
                        c = this.chart.renderer.fontMetrics(t),
                        p = t ? Math.max(t.getBBox(!1, 0).height - c.h - 1, 0) : 0,
                        u = {
                            low: a + (e ? 0 : r),
                            middle: a + r / 2,
                            high: a + (e ? r : 0)
                        }[o.align],
                        g = (e ? s + this.height : i) + (e ? 1 : -1) * (n ? -1 : 1) * (this.axisTitleMargin || 0) + [-p, p, c.f, -p][this.side],
                        f = {
                            x: e ? u + h : g + (n ? this.width : 0) + l + h,
                            y: e ? g + d - (n ? this.height : 0) + l : u + d
                        };
                    return C(this, "afterGetTitlePosition", {
                        titlePosition: f
                    }), f
                }
                renderMinorTick(t, e) {
                    let i = this.minorTicks;
                    i[t] || (i[t] = new a(this, t, "minor")), e && i[t].isNew && i[t].render(null, !0), i[t].render(null, !1, 1)
                }
                renderTick(t, e, i) {
                    let s = this.isLinked,
                        r = this.ticks;
                    (!s || t >= this.min && t <= this.max || this.grid && this.grid.isColumn) && (r[t] || (r[t] = new a(this, t)), i && r[t].isNew && r[t].render(e, !0, -1), r[t].render(e))
                }
                render() {
                    let t, e, i = this,
                        s = i.chart,
                        r = i.logarithmic,
                        n = s.renderer,
                        h = i.options,
                        d = i.isLinked,
                        c = i.tickPositions,
                        p = i.axisTitle,
                        u = i.ticks,
                        g = i.minorTicks,
                        f = i.alternateBands,
                        m = h.stackLabels,
                        x = h.alternateGridColor,
                        y = h.crossing,
                        v = i.tickmarkOffset,
                        b = i.axisLine,
                        k = i.showAxis,
                        S = l(n.globalAnimation);
                    if (i.labelEdge.length = 0, i.overlap = !1, [u, g, f].forEach((function(t) {
                            E(t, (function(t) {
                                t.isActive = !1
                            }))
                        })), T(y)) {
                        let t = this.isXAxis ? s.yAxis[0] : s.xAxis[0],
                            e = [1, -1, -1, 1][this.side];
                        if (t) {
                            let s = t.toPixels(y, !0);
                            i.horiz && (s = t.len - s), i.offset = e * s
                        }
                    }
                    if (i.hasData() || d) {
                        let n = i.chart.hasRendered && i.old && T(i.old.min);
                        i.minorTickInterval && !i.categories && i.getMinorTickPositions().forEach((function(t) {
                            i.renderMinorTick(t, n)
                        })), c.length && (c.forEach((function(t, e) {
                            i.renderTick(t, e, n)
                        })), v && (0 === i.min || i.single) && (u[-1] || (u[-1] = new a(i, -1, null, !0)), u[-1].render(-1))), x && c.forEach((function(a, n) {
                            e = void 0 !== c[n + 1] ? c[n + 1] + v : i.max - v, n % 2 == 0 && a < i.max && e <= i.max + (s.polar ? -v : v) && (f[a] || (f[a] = new o.PlotLineOrBand(i, {})), t = a + v, f[a].options = {
                                from: r ? r.lin2log(t) : t,
                                to: r ? r.lin2log(e) : e,
                                color: x,
                                className: "highcharts-alternate-grid"
                            }, f[a].render(), f[a].isActive = !0)
                        })), i._addedPlotLB || (i._addedPlotLB = !0, (h.plotLines || []).concat(h.plotBands || []).forEach((function(t) {
                            i.addPlotBandOrLine(t)
                        })))
                    }[u, g, f].forEach((function(t) {
                        let e = [],
                            i = S.duration;
                        E(t, (function(t, i) {
                            t.isActive || (t.render(i, !1, 0), t.isActive = !1, e.push(i))
                        })), R((function() {
                            let i = e.length;
                            for (; i--;) t[e[i]] && !t[e[i]].isActive && (t[e[i]].destroy(), delete t[e[i]])
                        }), t !== f && s.hasRendered && i ? i : 0)
                    })), b && (b[b.isPlaced ? "animate" : "attr"]({
                        d: this.getLinePath(b.strokeWidth())
                    }), b.isPlaced = !0, b[k ? "show" : "hide"](k)), p && k && (p[p.isNew ? "attr" : "animate"](i.getTitlePosition(p)), p.isNew = !1), m && m.enabled && i.stacking && i.stacking.renderStackTotals(), i.old = {
                        len: i.len,
                        max: i.max,
                        min: i.min,
                        transA: i.transA,
                        userMax: i.userMax,
                        userMin: i.userMin
                    }, i.isDirty = !1, C(this, "afterRender")
                }
                redraw() {
                    this.visible && (this.render(), this.plotLinesAndBands.forEach((function(t) {
                        t.render()
                    }))), this.series.forEach((function(t) {
                        t.isDirty = !0
                    }))
                }
                getKeepProps() {
                    return this.keepProps || z.keepProps
                }
                destroy(t) {
                    let e = this,
                        i = e.plotLinesAndBands,
                        s = this.eventOptions;
                    if (C(this, "destroy", {
                            keepEvents: t
                        }), t || I(e), [e.ticks, e.minorTicks, e.alternateBands].forEach((function(t) {
                            v(t)
                        })), i) {
                        let t = i.length;
                        for (; t--;) i[t].destroy()
                    }
                    for (let r in ["axisLine", "axisTitle", "axisGroup", "gridGroup", "labelGroup", "cross", "scrollbar"].forEach((function(t) {
                            e[t] && (e[t] = e[t].destroy())
                        })), e.plotLinesAndBandsGroups) e.plotLinesAndBandsGroups[r] = e.plotLinesAndBandsGroups[r].destroy();
                    E(e, (function(t, i) {
                        -1 === e.getKeepProps().indexOf(i) && delete e[i]
                    })), this.eventOptions = s
                }
                drawCrosshair(t, e) {
                    let s, r, o, a, n = this.crosshair,
                        l = D(n && n.snap, !0),
                        h = this.chart,
                        d = this.cross;
                    if (C(this, "drawCrosshair", {
                            e: t,
                            point: e
                        }), t || (t = this.cross && this.cross.e), n && !1 !== (y(e) || !l)) {
                        if (l ? y(e) && (r = D("colorAxis" !== this.coll ? e.crosshairPos : null, this.isXAxis ? e.plotX : this.len - e.plotY)) : r = t && (this.horiz ? t.chartX - this.pos : this.len - t.chartY + this.pos), y(r) && (a = {
                                value: e && (this.isXAxis ? e.x : D(e.stackY, e.y)),
                                translatedValue: r
                            }, h.polar && S(a, {
                                isCrosshair: !0,
                                chartX: t && t.chartX,
                                chartY: t && t.chartY,
                                point: e
                            }), s = this.getPlotLinePath(a) || null), !y(s)) return void this.hideCrosshair();
                        o = this.categories && !this.isRadial, d || (this.cross = d = h.renderer.path().addClass("highcharts-crosshair highcharts-crosshair-" + (o ? "category " : "thin ") + (n.className || "")).attr({
                            zIndex: D(n.zIndex, 2)
                        }).add(), !h.styledMode && (d.attr({
                            stroke: n.color || (o ? i.parse("#ccd3ff").setOpacity(.25).get() : "#cccccc"),
                            "stroke-width": D(n.width, 1)
                        }).css({
                            "pointer-events": "none"
                        }), n.dashStyle && d.attr({
                            dashstyle: n.dashStyle
                        }))), d.show().attr({
                            d: s
                        }), o && !n.width && d.attr({
                            "stroke-width": this.transA
                        }), this.cross.e = t
                    } else this.hideCrosshair();
                    C(this, "afterDrawCrosshair", {
                        e: t,
                        point: e
                    })
                }
                hideCrosshair() {
                    this.cross && this.cross.hide(), C(this, "afterHideCrosshair")
                }
                update(t, e) {
                    let i = this.chart;
                    t = L(this.userOptions, t), this.destroy(!0), this.init(i, t), i.isDirtyBox = !0, D(e, !0) && i.redraw()
                }
                remove(t) {
                    let e = this.chart,
                        i = this.coll,
                        s = this.series,
                        r = s.length;
                    for (; r--;) s[r] && s[r].remove(!1);
                    b(e.axes, this), b(e[i] || [], this), e.orderItems(i), this.destroy(), e.isDirtyBox = !0, D(t, !0) && e.redraw()
                }
                setTitle(t, e) {
                    this.update({
                        title: t
                    }, e)
                }
                setCategories(t, e) {
                    this.update({
                        categories: t
                    }, e)
                }
            }
            return z.keepProps = ["coll", "extKey", "hcEvents", "names", "series", "userMax", "userMin"], z
        })), i(e, "Core/Axis/DateTimeAxis.js", [e["Core/Utilities.js"]], (function(t) {
            var e;
            let {
                addEvent: i,
                getMagnitude: s,
                normalizeTickInterval: r,
                timeUnits: o
            } = t;
            return function(t) {
                function e() {
                    return this.chart.time.getTimeTicks.apply(this.chart.time, arguments)
                }

                function a() {
                    "datetime" === this.options.type ? this.dateTime || (this.dateTime = new n(this)) : this.dateTime = void 0
                }
                t.compose = function(t) {
                    return t.keepProps.includes("dateTime") || (t.keepProps.push("dateTime"), t.prototype.getTimeTicks = e, i(t, "afterSetOptions", a)), t
                };
                class n {
                    constructor(t) {
                        this.axis = t
                    }
                    normalizeTimeTickInterval(t, e) {
                        let i, a = e || [
                                ["millisecond", [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]],
                                ["second", [1, 2, 5, 10, 15, 30]],
                                ["minute", [1, 2, 5, 10, 15, 30]],
                                ["hour", [1, 2, 3, 4, 6, 8, 12]],
                                ["day", [1, 2]],
                                ["week", [1, 2]],
                                ["month", [1, 2, 3, 4, 6]],
                                ["year", null]
                            ],
                            n = a[a.length - 1],
                            l = o[n[0]],
                            h = n[1];
                        for (i = 0; i < a.length && (l = o[(n = a[i])[0]], h = n[1], !(a[i + 1] && t <= (l * h[h.length - 1] + o[a[i + 1][0]]) / 2)); i++);
                        return l === o.year && t < 5 * l && (h = [1, 2, 5]), {
                            unitRange: l,
                            count: r(t / l, h, "year" === n[0] ? Math.max(s(t / l), 1) : 1),
                            unitName: n[0]
                        }
                    }
                    getXDateFormat(t, e) {
                        let {
                            axis: i
                        } = this, s = i.chart.time;
                        return i.closestPointRange ? s.getDateFormat(i.closestPointRange, t, i.options.startOfWeek, e) || s.resolveDTLFormat(e.year).main : s.resolveDTLFormat(e.day).main
                    }
                }
                t.Additions = n
            }(e || (e = {})), e
        })), i(e, "Core/Axis/LogarithmicAxis.js", [e["Core/Utilities.js"]], (function(t) {
            var e;
            let {
                addEvent: i,
                normalizeTickInterval: s,
                pick: r
            } = t;
            return function(t) {
                function e(t) {
                    let e = t.userOptions,
                        i = this.logarithmic;
                    "logarithmic" !== e.type ? this.logarithmic = void 0 : i || (i = this.logarithmic = new a(this))
                }

                function o() {
                    let t = this.logarithmic;
                    t && (this.lin2val = function(e) {
                        return t.lin2log(e)
                    }, this.val2lin = function(e) {
                        return t.log2lin(e)
                    })
                }
                t.compose = function(t) {
                    return t.keepProps.includes("logarithmic") || (t.keepProps.push("logarithmic"), i(t, "init", e), i(t, "afterInit", o)), t
                };
                class a {
                    constructor(t) {
                        this.axis = t
                    }
                    getLogTickPositions(t, e, i, o) {
                        let a = this.axis,
                            n = a.len,
                            l = a.options,
                            h = [];
                        if (o || (this.minorAutoInterval = void 0), t >= .5) t = Math.round(t), h = a.getLinearTickPositions(t, e, i);
                        else if (t >= .08) {
                            let s, r, a, n, l, d, c;
                            for (s = t > .3 ? [1, 2, 4] : t > .15 ? [1, 2, 4, 6, 8] : [1, 2, 3, 4, 5, 6, 7, 8, 9], r = Math.floor(e); r < i + 1 && !c; r++)
                                for (a = 0, n = s.length; a < n && !c; a++)(l = this.log2lin(this.lin2log(r) * s[a])) > e && (!o || d <= i) && void 0 !== d && h.push(d), d > i && (c = !0), d = l
                        } else {
                            let d = this.lin2log(e),
                                c = this.lin2log(i),
                                p = o ? a.getMinorTickInterval() : l.tickInterval,
                                u = l.tickPixelInterval / (o ? 5 : 1),
                                g = o ? n / a.tickPositions.length : n;
                            t = s(t = r("auto" === p ? null : p, this.minorAutoInterval, (c - d) * u / (g || 1))), h = a.getLinearTickPositions(t, d, c).map(this.log2lin), o || (this.minorAutoInterval = t / 5)
                        }
                        return o || (a.tickInterval = t), h
                    }
                    lin2log(t) {
                        return Math.pow(10, t)
                    }
                    log2lin(t) {
                        return Math.log(t) / Math.LN10
                    }
                }
                t.Additions = a
            }(e || (e = {})), e
        })), i(e, "Core/Axis/PlotLineOrBand/PlotLineOrBandAxis.js", [e["Core/Utilities.js"]], (function(t) {
            var e;
            let {
                erase: i,
                extend: s,
                isNumber: r
            } = t;
            return function(t) {
                let e;

                function o(t) {
                    return this.addPlotBandOrLine(t, "plotBands")
                }

                function a(t, i) {
                    let s = this.userOptions,
                        r = new e(this, t);
                    if (this.visible && (r = r.render()), r) {
                        if (this._addedPlotLB || (this._addedPlotLB = !0, (s.plotLines || []).concat(s.plotBands || []).forEach((t => {
                                this.addPlotBandOrLine(t)
                            }))), i) {
                            let e = s[i] || [];
                            e.push(t), s[i] = e
                        }
                        this.plotLinesAndBands.push(r)
                    }
                    return r
                }

                function n(t) {
                    return this.addPlotBandOrLine(t, "plotLines")
                }

                function l(t, e, i) {
                    i = i || this.options;
                    let s, o, a = this.getPlotLinePath({
                            value: e,
                            force: !0,
                            acrossPanes: i.acrossPanes
                        }),
                        n = [],
                        l = this.horiz,
                        h = !r(this.min) || !r(this.max) || t < this.min && e < this.min || t > this.max && e > this.max,
                        d = this.getPlotLinePath({
                            value: t,
                            force: !0,
                            acrossPanes: i.acrossPanes
                        }),
                        c = 1;
                    if (d && a)
                        for (h && (o = d.toString() === a.toString(), c = 0), s = 0; s < d.length; s += 2) {
                            let t = d[s],
                                e = d[s + 1],
                                i = a[s],
                                r = a[s + 1];
                            ("M" === t[0] || "L" === t[0]) && ("M" === e[0] || "L" === e[0]) && ("M" === i[0] || "L" === i[0]) && ("M" === r[0] || "L" === r[0]) && (l && i[1] === t[1] ? (i[1] += c, r[1] += c) : l || i[2] !== t[2] || (i[2] += c, r[2] += c), n.push(["M", t[1], t[2]], ["L", e[1], e[2]], ["L", r[1], r[2]], ["L", i[1], i[2]], ["Z"])), n.isFlat = o
                        }
                    return n
                }

                function h(t) {
                    this.removePlotBandOrLine(t)
                }

                function d(t) {
                    let e = this.plotLinesAndBands,
                        s = this.options,
                        r = this.userOptions;
                    if (e) {
                        let o = e.length;
                        for (; o--;) e[o].id === t && e[o].destroy();
                        [s.plotLines || [], r.plotLines || [], s.plotBands || [], r.plotBands || []].forEach((function(e) {
                            for (o = e.length; o--;)(e[o] || {}).id === t && i(e, e[o])
                        }))
                    }
                }

                function c(t) {
                    this.removePlotBandOrLine(t)
                }
                t.compose = function(t, i) {
                    let r = i.prototype;
                    return r.addPlotBand || (e = t, s(r, {
                        addPlotBand: o,
                        addPlotLine: n,
                        addPlotBandOrLine: a,
                        getPlotBandPath: l,
                        removePlotBand: h,
                        removePlotLine: c,
                        removePlotBandOrLine: d
                    })), i
                }
            }(e || (e = {})), e
        })), i(e, "Core/Axis/PlotLineOrBand/PlotLineOrBand.js", [e["Core/Axis/PlotLineOrBand/PlotLineOrBandAxis.js"], e["Core/Utilities.js"]], (function(t, e) {
            let {
                arrayMax: i,
                arrayMin: s,
                defined: r,
                destroyObjectProperties: o,
                erase: a,
                fireEvent: n,
                merge: l,
                objectEach: h,
                pick: d
            } = e;
            class c {
                static compose(e) {
                    return t.compose(c, e)
                }
                constructor(t, e) {
                    this.axis = t, this.options = e, this.id = e.id
                }
                render() {
                    n(this, "render");
                    let t, {
                            axis: e,
                            options: i
                        } = this,
                        {
                            horiz: s,
                            logarithmic: o
                        } = e,
                        {
                            color: a,
                            events: c,
                            zIndex: p = 0
                        } = i,
                        u = {},
                        g = e.chart.renderer,
                        f = i.to,
                        m = i.from,
                        x = i.value,
                        y = i.borderWidth,
                        v = i.label,
                        {
                            label: b,
                            svgElem: k
                        } = this,
                        S = [],
                        C = r(m) && r(f),
                        w = r(x),
                        M = !k,
                        A = {
                            class: "highcharts-plot-" + (C ? "band " : "line ") + (i.className || "")
                        },
                        T = C ? "bands" : "lines";
                    if (!e.chart.styledMode && (w ? (A.stroke = a || "#999999", A["stroke-width"] = d(i.width, 1), i.dashStyle && (A.dashstyle = i.dashStyle)) : C && (A.fill = a || "#e6e9ff", y && (A.stroke = i.borderColor, A["stroke-width"] = y))), u.zIndex = p, T += "-" + p, (t = e.plotLinesAndBandsGroups[T]) || (e.plotLinesAndBandsGroups[T] = t = g.g("plot-" + T).attr(u).add()), k || (this.svgElem = k = g.path().attr(A).add(t)), r(x)) S = e.getPlotLinePath({
                        value: (null == o ? void 0 : o.log2lin(x)) ? ? x,
                        lineWidth: k.strokeWidth(),
                        acrossPanes: i.acrossPanes
                    });
                    else {
                        if (!r(m) || !r(f)) return;
                        S = e.getPlotBandPath((null == o ? void 0 : o.log2lin(m)) ? ? m, (null == o ? void 0 : o.log2lin(f)) ? ? f, i)
                    }
                    return !this.eventsAdded && c && (h(c, ((t, e) => {
                        null == k || k.on(e, (t => {
                            c[e].apply(this, [t])
                        }))
                    })), this.eventsAdded = !0), !M && k.d || !(null == S ? void 0 : S.length) ? k && (S ? (k.show(), k.animate({
                        d: S
                    })) : k.d && (k.hide(), b && (this.label = b = b.destroy()))) : k.attr({
                        d: S
                    }), v && (r(v.text) || r(v.formatter)) && (null == S ? void 0 : S.length) && e.width > 0 && e.height > 0 && !S.isFlat ? (v = l({
                        align: s && C && "center",
                        x: s ? !C && 4 : 10,
                        verticalAlign: !s && C && "middle",
                        y: s ? C ? 16 : 10 : C ? 6 : -4,
                        rotation: s && !C && 90
                    }, v), this.renderLabel(v, S, C, p)) : b && b.hide(), this
                }
                renderLabel(t, e, r, o) {
                    let a = this.axis,
                        n = a.chart.renderer,
                        h = this.label;
                    h || (this.label = h = n.text(this.getLabelText(t), 0, 0, t.useHTML).attr({
                        align: t.textAlign || t.align,
                        rotation: t.rotation,
                        class: "highcharts-plot-" + (r ? "band" : "line") + "-label" + (t.className || ""),
                        zIndex: o
                    }), a.chart.styledMode || h.css(l({
                        fontSize: "0.8em",
                        textOverflow: "ellipsis"
                    }, t.style)), h.add());
                    let d = e.xBounds || [e[0][1], e[1][1], r ? e[2][1] : e[0][1]],
                        c = e.yBounds || [e[0][2], e[1][2], r ? e[2][2] : e[0][2]],
                        p = s(d),
                        u = s(c);
                    if (h.align(t, !1, {
                            x: p,
                            y: u,
                            width: i(d) - p,
                            height: i(c) - u
                        }), !h.alignValue || "left" === h.alignValue) {
                        let e = t.clip ? a.width : a.chart.chartWidth;
                        h.css({
                            width: (90 === h.rotation ? a.height - (h.alignAttr.y - a.top) : e - (h.alignAttr.x - a.left)) + "px"
                        })
                    }
                    h.show(!0)
                }
                getLabelText(t) {
                    return r(t.formatter) ? t.formatter.call(this) : t.text
                }
                destroy() {
                    a(this.axis.plotLinesAndBands, this), delete this.axis, o(this)
                }
            }
            return c
        })), i(e, "Core/Tooltip.js", [e["Core/Templating.js"], e["Core/Globals.js"], e["Core/Renderer/RendererUtilities.js"], e["Core/Renderer/RendererRegistry.js"], e["Core/Utilities.js"]], (function(t, e, i, s, r) {
            var o;
            let {
                format: a
            } = t, {
                composed: n,
                doc: l,
                isSafari: h
            } = e, {
                distribute: d
            } = i, {
                addEvent: c,
                clamp: p,
                css: u,
                discardElement: g,
                extend: f,
                fireEvent: m,
                isArray: x,
                isNumber: y,
                isString: v,
                merge: b,
                pick: k,
                pushUnique: S,
                splat: C,
                syncTimeout: w
            } = r;
            class M {
                constructor(t, e, i) {
                    this.allowShared = !0, this.crosshairs = [], this.distance = 0, this.isHidden = !0, this.isSticky = !1, this.now = {}, this.options = {}, this.outside = !1, this.chart = t, this.init(t, e), this.pointer = i
                }
                bodyFormatter(t) {
                    return t.map((function(t) {
                        let e = t.series.tooltipOptions;
                        return (e[(t.point.formatPrefix || "point") + "Formatter"] || t.point.tooltipFormatter).call(t.point, e[(t.point.formatPrefix || "point") + "Format"] || "")
                    }))
                }
                cleanSplit(t) {
                    this.chart.series.forEach((function(e) {
                        let i = e && e.tt;
                        i && (!i.isActive || t ? e.tt = i.destroy() : i.isActive = !1)
                    }))
                }
                defaultFormatter(t) {
                    let e, i = this.points || C(this);
                    return (e = (e = [t.tooltipFooterHeaderFormatter(i[0])]).concat(t.bodyFormatter(i))).push(t.tooltipFooterHeaderFormatter(i[0], !0)), e
                }
                destroy() {
                    this.label && (this.label = this.label.destroy()), this.split && (this.cleanSplit(!0), this.tt && (this.tt = this.tt.destroy())), this.renderer && (this.renderer = this.renderer.destroy(), g(this.container)), r.clearTimeout(this.hideTimer), r.clearTimeout(this.tooltipTimeout)
                }
                getAnchor(t, e) {
                    let i, {
                            chart: s,
                            pointer: r
                        } = this,
                        o = s.inverted,
                        a = s.plotTop,
                        n = s.plotLeft;
                    if ((t = C(t))[0].series && t[0].series.yAxis && !t[0].series.yAxis.options.reversedStacks && (t = t.slice().reverse()), this.followPointer && e) void 0 === e.chartX && (e = r.normalize(e)), i = [e.chartX - n, e.chartY - a];
                    else if (t[0].tooltipPos) i = t[0].tooltipPos;
                    else {
                        let s = 0,
                            r = 0;
                        t.forEach((function(t) {
                            let e = t.pos(!0);
                            e && (s += e[0], r += e[1])
                        })), s /= t.length, r /= t.length, this.shared && t.length > 1 && e && (o ? s = e.chartX : r = e.chartY), i = [s - n, r - a]
                    }
                    return i.map(Math.round)
                }
                getClassName(t, e, i) {
                    let s = this.options,
                        r = t.series,
                        o = r.options;
                    return [s.className, "highcharts-label", i && "highcharts-tooltip-header", e ? "highcharts-tooltip-box" : "highcharts-tooltip", !i && "highcharts-color-" + k(t.colorIndex, r.colorIndex), o && o.className].filter(v).join(" ")
                }
                getLabel() {
                    let t = this,
                        i = this.chart.styledMode,
                        r = this.options,
                        o = this.split && this.allowShared,
                        a = this.container,
                        n = this.chart.renderer;
                    if (this.label) {
                        let t = !this.label.hasClass("highcharts-label");
                        (!o && t || o && !t) && this.destroy()
                    }
                    if (!this.label) {
                        if (this.outside) {
                            let t = this.chart.options.chart.style,
                                i = s.getRendererType();
                            this.container = a = e.doc.createElement("div"), a.className = "highcharts-tooltip-container", u(a, {
                                position: "absolute",
                                top: "1px",
                                pointerEvents: "none",
                                zIndex: Math.max(this.options.style.zIndex || 0, (t && t.zIndex || 0) + 3)
                            }), this.renderer = n = new i(a, 0, 0, t, void 0, void 0, n.styledMode)
                        }
                        if (o ? this.label = n.g("tooltip") : (this.label = n.label("", 0, 0, r.shape, void 0, void 0, r.useHTML, void 0, "tooltip").attr({
                                padding: r.padding,
                                r: r.borderRadius
                            }), i || this.label.attr({
                                fill: r.backgroundColor,
                                "stroke-width": r.borderWidth || 0
                            }).css(r.style).css({
                                pointerEvents: r.style.pointerEvents || (this.shouldStickOnContact() ? "auto" : "none")
                            })), t.outside) {
                            let e = this.label,
                                {
                                    xSetter: i,
                                    ySetter: s
                                } = e;
                            e.xSetter = function(s) {
                                i.call(e, t.distance), a && (a.style.left = s + "px")
                            }, e.ySetter = function(i) {
                                s.call(e, t.distance), a && (a.style.top = i + "px")
                            }
                        }
                        this.label.attr({
                            zIndex: 8
                        }).shadow(r.shadow).add()
                    }
                    return a && !a.parentElement && e.doc.body.appendChild(a), this.label
                }
                getPlayingField() {
                    let {
                        body: t,
                        documentElement: e
                    } = l, {
                        chart: i,
                        distance: s,
                        outside: r
                    } = this;
                    return {
                        width: r ? Math.max(t.scrollWidth, e.scrollWidth, t.offsetWidth, e.offsetWidth, e.clientWidth) - 2 * s : i.chartWidth,
                        height: r ? Math.max(t.scrollHeight, e.scrollHeight, t.offsetHeight, e.offsetHeight, e.clientHeight) : i.chartHeight
                    }
                }
                getPosition(t, e, i) {
                    var s, r;
                    let o, {
                            distance: a,
                            chart: n,
                            outside: l,
                            pointer: h
                        } = this,
                        {
                            inverted: d,
                            plotLeft: c,
                            plotTop: p,
                            polar: u
                        } = n,
                        {
                            plotX: g = 0,
                            plotY: f = 0
                        } = i,
                        m = {},
                        x = d && i.h || 0,
                        {
                            height: y,
                            width: v
                        } = this.getPlayingField(),
                        b = h.getChartPosition(),
                        S = t => t * b.scaleX,
                        C = t => t * b.scaleY,
                        w = i => {
                            let s = "x" === i;
                            return [i, s ? v : y, s ? t : e].concat(l ? [s ? S(t) : C(e), s ? b.left - a + S(g + c) : b.top - a + C(f + p), 0, s ? v : y] : [s ? t : e, s ? g + c : f + p, s ? c : p, s ? c + n.plotWidth : p + n.plotHeight])
                        },
                        M = w("y"),
                        A = w("x"),
                        T = !!i.negative;
                    !u && (null == (r = null == (s = n.hoverSeries) ? void 0 : s.yAxis) ? void 0 : r.reversed) && (T = !T);
                    let P = !this.followPointer && k(i.ttBelow, !u && !d === T),
                        L = function(t, e, i, s, r, o, n) {
                            let h = l ? "y" === t ? C(a) : S(a) : a,
                                d = (i - s) / 2,
                                c = s < r - a,
                                p = r + a + s < e,
                                u = r - h - i + d,
                                g = r + h - d;
                            if (P && p) m[t] = g;
                            else if (!P && c) m[t] = u;
                            else if (c) m[t] = Math.min(n - s, u - x < 0 ? u : u - x);
                            else {
                                if (!p) return !1;
                                m[t] = Math.max(o, g + x + i > e ? g : g + x)
                            }
                        },
                        O = function(t, e, i, s, r) {
                            if (r < a || r > e - a) return !1;
                            m[t] = r < i / 2 ? 1 : r > e - s / 2 ? e - s - 2 : r - i / 2
                        },
                        E = function(t) {
                            [M, A] = [A, M], o = t
                        },
                        D = () => {
                            !1 !== L.apply(0, M) ? !1 !== O.apply(0, A) || o || (E(!0), D()) : o ? m.x = m.y = 0 : (E(!0), D())
                        };
                    return (d && !u || this.len > 1) && E(), D(), m
                }
                hide(t) {
                    let e = this;
                    r.clearTimeout(this.hideTimer), t = k(t, this.options.hideDelay), this.isHidden || (this.hideTimer = w((function() {
                        let i = e.getLabel();
                        e.getLabel().animate({
                            opacity: 0
                        }, {
                            duration: t ? 150 : t,
                            complete: () => {
                                i.hide(), e.container && e.container.remove()
                            }
                        }), e.isHidden = !0
                    }), t))
                }
                init(t, e) {
                    this.chart = t, this.options = e, this.crosshairs = [], this.now = {
                        x: 0,
                        y: 0
                    }, this.isHidden = !0, this.split = e.split && !t.inverted && !t.polar, this.shared = e.shared || this.split, this.outside = k(e.outside, !(!t.scrollablePixelsX && !t.scrollablePixelsY))
                }
                shouldStickOnContact(t) {
                    return !(this.followPointer || !this.options.stickOnContact || t && !this.pointer.inClass(t.target, "highcharts-tooltip"))
                }
                move(t, e, i, s) {
                    let o = this,
                        a = o.now,
                        n = !1 !== o.options.animation && !o.isHidden && (Math.abs(t - a.x) > 1 || Math.abs(e - a.y) > 1),
                        l = o.followPointer || o.len > 1;
                    f(a, {
                        x: n ? (2 * a.x + t) / 3 : t,
                        y: n ? (a.y + e) / 2 : e,
                        anchorX: l ? void 0 : n ? (2 * a.anchorX + i) / 3 : i,
                        anchorY: l ? void 0 : n ? (a.anchorY + s) / 2 : s
                    }), o.getLabel().attr(a), o.drawTracker(), n && (r.clearTimeout(this.tooltipTimeout), this.tooltipTimeout = setTimeout((function() {
                        o && o.move(t, e, i, s)
                    }), 32))
                }
                refresh(t, e) {
                    let {
                        chart: i,
                        options: s,
                        pointer: o,
                        shared: n
                    } = this, l = C(t), h = l[0], d = [], c = s.format, p = s.formatter || this.defaultFormatter, u = i.styledMode, g = {};
                    if (!s.enabled || !h.series) return;
                    r.clearTimeout(this.hideTimer), this.allowShared = !(!x(t) && t.series && t.series.noSharedTooltip), this.followPointer = !this.split && h.series.tooltipOptions.followPointer;
                    let f = this.getAnchor(t, e),
                        y = f[0],
                        b = f[1];
                    n && this.allowShared ? (o.applyInactiveState(l), l.forEach((function(t) {
                        t.setState("hover"), d.push(t.getLabelConfig())
                    })), (g = h.getLabelConfig()).points = d) : g = h.getLabelConfig(), this.len = d.length;
                    let S = v(c) ? a(c, g, i) : p.call(g, this),
                        w = h.series;
                    if (this.distance = k(w.tooltipOptions.distance, 16), !1 === S) this.hide();
                    else {
                        if (this.split && this.allowShared) this.renderSplit(S, l);
                        else {
                            let t = y,
                                r = b;
                            if (e && o.isDirectTouch && (t = e.chartX - i.plotLeft, r = e.chartY - i.plotTop), !i.polar && !1 !== w.options.clip && !l.some((e => o.isDirectTouch || e.series.shouldShowTooltip(t, r)))) return void this.hide(); {
                                let t = this.getLabel();
                                (!s.style.width || u) && t.css({
                                    width: (this.outside ? this.getPlayingField() : i.spacingBox).width + "px"
                                }), t.attr({
                                    text: S && S.join ? S.join("") : S
                                }), t.addClass(this.getClassName(h), !0), u || t.attr({
                                    stroke: s.borderColor || h.color || w.color || "#666666"
                                }), this.updatePosition({
                                    plotX: y,
                                    plotY: b,
                                    negative: h.negative,
                                    ttBelow: h.ttBelow,
                                    h: f[2] || 0
                                })
                            }
                        }
                        this.isHidden && this.label && this.label.attr({
                            opacity: 1
                        }).show(), this.isHidden = !1
                    }
                    m(this, "refresh")
                }
                renderSplit(t, e) {
                    var i;
                    let s = this,
                        {
                            chart: r,
                            chart: {
                                chartWidth: o,
                                chartHeight: a,
                                plotHeight: n,
                                plotLeft: c,
                                plotTop: u,
                                scrollablePixelsY: g = 0,
                                scrollablePixelsX: m,
                                styledMode: x
                            },
                            distance: y,
                            options: b,
                            options: {
                                positioner: S
                            },
                            pointer: C
                        } = s,
                        {
                            scrollLeft: w = 0,
                            scrollTop: M = 0
                        } = (null == (i = r.scrollablePlotArea) ? void 0 : i.scrollingContainer) || {},
                        A = s.outside && "number" != typeof m ? l.documentElement.getBoundingClientRect() : {
                            left: w,
                            right: w + o,
                            top: M,
                            bottom: M + a
                        },
                        T = s.getLabel(),
                        P = this.renderer || r.renderer,
                        L = !(!r.xAxis[0] || !r.xAxis[0].opposite),
                        {
                            left: O,
                            top: E
                        } = C.getChartPosition(),
                        D = u + M,
                        j = 0,
                        I = n - g;

                    function B(t, e, i, r, o = !0) {
                        let a, n;
                        return i ? (a = L ? 0 : I, n = p(t - r / 2, A.left, A.right - r - (s.outside ? O : 0))) : (a = e - D, n = p(n = o ? t - r - y : t + y, o ? n : A.left, A.right)), {
                            x: n,
                            y: a
                        }
                    }
                    v(t) && (t = [!1, t]);
                    let R = t.slice(0, e.length + 1).reduce((function(t, i, r) {
                        if (!1 !== i && "" !== i) {
                            let o = e[r - 1] || {
                                    isHeader: !0,
                                    plotX: e[0].plotX,
                                    plotY: n,
                                    series: {}
                                },
                                a = o.isHeader,
                                l = a ? s : o.series,
                                h = l.tt = function(t, e, i) {
                                    let r = t,
                                        {
                                            isHeader: o,
                                            series: a
                                        } = e;
                                    if (!r) {
                                        let t = {
                                            padding: b.padding,
                                            r: b.borderRadius
                                        };
                                        x || (t.fill = b.backgroundColor, t["stroke-width"] = b.borderWidth ? ? 1), r = P.label("", 0, 0, b[o ? "headerShape" : "shape"], void 0, void 0, b.useHTML).addClass(s.getClassName(e, !0, o)).attr(t).add(T)
                                    }
                                    return r.isActive = !0, r.attr({
                                        text: i
                                    }), x || r.css(b.style).attr({
                                        stroke: b.borderColor || e.color || a.color || "#333333"
                                    }), r
                                }(l.tt, o, i.toString()),
                                d = h.getBBox(),
                                g = d.width + h.strokeWidth();
                            a && (j = d.height, I += j, L && (D -= j));
                            let {
                                anchorX: f,
                                anchorY: m
                            } = function(t) {
                                let e, i, {
                                    isHeader: s,
                                    plotX: r = 0,
                                    plotY: o = 0,
                                    series: a
                                } = t;
                                if (s) e = Math.max(c + r, c), i = u + n / 2;
                                else {
                                    let {
                                        xAxis: t,
                                        yAxis: s
                                    } = a;
                                    e = t.pos + p(r, -y, t.len + y), a.shouldShowTooltip(0, s.pos - u + o, {
                                        ignoreX: !0
                                    }) && (i = s.pos + o)
                                }
                                return {
                                    anchorX: e = p(e, A.left - y, A.right + y),
                                    anchorY: i
                                }
                            }(o);
                            if ("number" == typeof m) {
                                let e = d.height + 1,
                                    i = S ? S.call(s, g, e, o) : B(f, m, a, g);
                                t.push({
                                    align: S ? 0 : void 0,
                                    anchorX: f,
                                    anchorY: m,
                                    boxWidth: g,
                                    point: o,
                                    rank: k(i.rank, a ? 1 : 0),
                                    size: e,
                                    target: i.y,
                                    tt: h,
                                    x: i.x
                                })
                            } else h.isActive = !1
                        }
                        return t
                    }), []);
                    !S && R.some((t => {
                        let {
                            outside: e
                        } = s, i = (e ? O : 0) + t.anchorX;
                        return i < A.left && i + t.boxWidth < A.right || i < O - A.left + t.boxWidth && A.right - i > i
                    })) && (R = R.map((t => {
                        let {
                            x: e,
                            y: i
                        } = B(t.anchorX, t.anchorY, t.point.isHeader, t.boxWidth, !1);
                        return f(t, {
                            target: i,
                            x: e
                        })
                    }))), s.cleanSplit(), d(R, I);
                    let N = {
                        left: O,
                        right: O
                    };
                    R.forEach((function(t) {
                        let {
                            x: e,
                            boxWidth: i,
                            isHeader: r
                        } = t;
                        !r && (s.outside && O + e < N.left && (N.left = O + e), !r && s.outside && N.left + i > N.right && (N.right = O + e))
                    })), R.forEach((function(t) {
                        let {
                            x: e,
                            anchorX: i,
                            anchorY: r,
                            pos: o,
                            point: {
                                isHeader: a
                            }
                        } = t, n = {
                            visibility: void 0 === o ? "hidden" : "inherit",
                            x: e,
                            y: (o || 0) + D,
                            anchorX: i,
                            anchorY: r
                        };
                        if (s.outside && e < i) {
                            let t = O - N.left;
                            t > 0 && (a || (n.x = e + t, n.anchorX = i + t), a && (n.x = (N.right - N.left) / 2, n.anchorX = i + t))
                        }
                        t.tt.attr(n)
                    }));
                    let {
                        container: z,
                        outside: W,
                        renderer: H
                    } = s;
                    if (W && z && H) {
                        let {
                            width: t,
                            height: e,
                            x: i,
                            y: s
                        } = T.getBBox();
                        H.setSize(t + i, e + s, !1), z.style.left = N.left + "px", z.style.top = E + "px"
                    }
                    h && T.attr({
                        opacity: 1 === T.opacity ? .999 : 1
                    })
                }
                drawTracker() {
                    if (!this.shouldStickOnContact()) return void(this.tracker && (this.tracker = this.tracker.destroy()));
                    let t = this.chart,
                        e = this.label,
                        i = this.shared ? t.hoverPoints : t.hoverPoint;
                    if (!e || !i) return;
                    let s = {
                            x: 0,
                            y: 0,
                            width: 0,
                            height: 0
                        },
                        r = this.getAnchor(i),
                        o = e.getBBox();
                    r[0] += t.plotLeft - (e.translateX || 0), r[1] += t.plotTop - (e.translateY || 0), s.x = Math.min(0, r[0]), s.y = Math.min(0, r[1]), s.width = r[0] < 0 ? Math.max(Math.abs(r[0]), o.width - r[0]) : Math.max(Math.abs(r[0]), o.width), s.height = r[1] < 0 ? Math.max(Math.abs(r[1]), o.height - Math.abs(r[1])) : Math.max(Math.abs(r[1]), o.height), this.tracker ? this.tracker.attr(s) : (this.tracker = e.renderer.rect(s).addClass("highcharts-tracker").add(e), t.styledMode || this.tracker.attr({
                        fill: "rgba(0,0,0,0)"
                    }))
                }
                styledModeFormat(t) {
                    return t.replace('style="font-size: 0.8em"', 'class="highcharts-header"').replace(/style="color:{(point|series)\.color}"/g, 'class="highcharts-color-{$1.colorIndex} {series.options.className} {point.options.className}"')
                }
                tooltipFooterHeaderFormatter(t, e) {
                    let i = t.series,
                        s = i.tooltipOptions,
                        r = i.xAxis,
                        o = r && r.dateTime,
                        n = {
                            isFooter: e,
                            labelConfig: t
                        },
                        l = s.xDateFormat,
                        h = s[e ? "footerFormat" : "headerFormat"];
                    return m(this, "headerFormatter", n, (function(e) {
                        o && !l && y(t.key) && (l = o.getXDateFormat(t.key, s.dateTimeLabelFormats)), o && l && (t.point && t.point.tooltipDateKeys || ["key"]).forEach((function(t) {
                            h = h.replace("{point." + t + "}", "{point." + t + ":" + l + "}")
                        })), i.chart.styledMode && (h = this.styledModeFormat(h)), e.text = a(h, {
                            point: t,
                            series: i
                        }, this.chart)
                    })), n.text
                }
                update(t) {
                    this.destroy(), this.init(this.chart, b(!0, this.options, t))
                }
                updatePosition(t) {
                    let e, {
                            chart: i,
                            container: s,
                            distance: r,
                            options: o,
                            pointer: a,
                            renderer: n
                        } = this,
                        {
                            height: l = 0,
                            width: h = 0
                        } = this.getLabel(),
                        {
                            left: d,
                            top: c,
                            scaleX: p,
                            scaleY: g
                        } = a.getChartPosition(),
                        f = (o.positioner || this.getPosition).call(this, h, l, t),
                        m = (t.plotX || 0) + i.plotLeft,
                        x = (t.plotY || 0) + i.plotTop;
                    n && s && (o.positioner && (f.x += d - r, f.y += c - r), e = (o.borderWidth || 0) + 2 * r + 2, n.setSize(h + e, l + e, !1), (1 !== p || 1 !== g) && (u(s, {
                        transform: `scale(${p}, ${g})`
                    }), m *= p, x *= g), m += d - f.x, x += c - f.y), this.move(Math.round(f.x), Math.round(f.y || 0), m, x)
                }
            }
            return (o = M || (M = {})).compose = function(t) {
                S(n, "Core.Tooltip") && c(t, "afterInit", (function() {
                    let t = this.chart;
                    t.options.tooltip && (t.tooltip = new o(t, t.options.tooltip, this))
                }))
            }, M
        })), i(e, "Core/Series/Point.js", [e["Core/Renderer/HTML/AST.js"], e["Core/Animation/AnimationUtilities.js"], e["Core/Defaults.js"], e["Core/Templating.js"], e["Core/Utilities.js"]], (function(t, e, i, s, r) {
            let {
                animObject: o
            } = e, {
                defaultOptions: a
            } = i, {
                format: n
            } = s, {
                addEvent: l,
                erase: h,
                extend: d,
                fireEvent: c,
                getNestedProperty: p,
                isArray: u,
                isFunction: g,
                isNumber: f,
                isObject: m,
                pick: x,
                syncTimeout: y,
                removeEvent: v,
                uniqueKey: b
            } = r;
            class k {
                animateBeforeDestroy() {
                    let t = this,
                        e = {
                            x: t.startXPos,
                            opacity: 0
                        },
                        i = t.getGraphicalProps();
                    i.singular.forEach((function(i) {
                        t[i] = t[i].animate("dataLabel" === i ? {
                            x: t[i].startXPos,
                            y: t[i].startYPos,
                            opacity: 0
                        } : e)
                    })), i.plural.forEach((function(e) {
                        t[e].forEach((function(e) {
                            e.element && e.animate(d({
                                x: t.startXPos
                            }, e.startYPos ? {
                                x: e.startXPos,
                                y: e.startYPos
                            } : {}))
                        }))
                    }))
                }
                applyOptions(t, e) {
                    let i = this.series,
                        s = i.options.pointValKey || i.pointValKey;
                    return d(this, t = k.prototype.optionsToObject.call(this, t)), this.options = this.options ? d(this.options, t) : t, t.group && delete this.group, t.dataLabels && delete this.dataLabels, s && (this.y = k.prototype.getNestedProperty.call(this, s)), this.selected && (this.state = "select"), "name" in this && void 0 === e && i.xAxis && i.xAxis.hasNames && (this.x = i.xAxis.nameToX(this)), void 0 === this.x && i ? this.x = void 0 === e ? i.autoIncrement() : e : f(t.x) && i.options.relativeXValue && (this.x = i.autoIncrement(t.x)), this.isNull = this.isValid && !this.isValid(), this.formatPrefix = this.isNull ? "null" : "point", this
                }
                destroy() {
                    if (!this.destroyed) {
                        let t = this,
                            e = t.series,
                            i = e.chart,
                            s = e.options.dataSorting,
                            r = i.hoverPoints,
                            a = o(t.series.chart.renderer.globalAnimation),
                            n = () => {
                                for (let e in (t.graphic || t.graphics || t.dataLabel || t.dataLabels) && (v(t), t.destroyElements()), t) delete t[e]
                            };
                        t.legendItem && i.legend.destroyItem(t), r && (t.setState(), h(r, t), r.length || (i.hoverPoints = null)), t === i.hoverPoint && t.onMouseOut(), s && s.enabled ? (this.animateBeforeDestroy(), y(n, a.duration)) : n(), i.pointCount--
                    }
                    this.destroyed = !0
                }
                destroyElements(t) {
                    let e = this,
                        i = e.getGraphicalProps(t);
                    i.singular.forEach((function(t) {
                        e[t] = e[t].destroy()
                    })), i.plural.forEach((function(t) {
                        e[t].forEach((function(t) {
                            t && t.element && t.destroy()
                        })), delete e[t]
                    }))
                }
                firePointEvent(t, e, i) {
                    let s = this,
                        r = this.series.options;
                    s.manageEvent(t), "click" === t && r.allowPointSelect && (i = function(t) {
                        !s.destroyed && s.select && s.select(null, t.ctrlKey || t.metaKey || t.shiftKey)
                    }), c(s, t, e, i)
                }
                getClassName() {
                    return "highcharts-point" + (this.selected ? " highcharts-point-select" : "") + (this.negative ? " highcharts-negative" : "") + (this.isNull ? " highcharts-null-point" : "") + (void 0 !== this.colorIndex ? " highcharts-color-" + this.colorIndex : "") + (this.options.className ? " " + this.options.className : "") + (this.zone && this.zone.className ? " " + this.zone.className.replace("highcharts-negative", "") : "")
                }
                getGraphicalProps(t) {
                    let e, i, s = this,
                        r = [],
                        o = {
                            singular: [],
                            plural: []
                        };
                    for ((t = t || {
                            graphic: 1,
                            dataLabel: 1
                        }).graphic && r.push("graphic", "connector"), t.dataLabel && r.push("dataLabel", "dataLabelPath", "dataLabelUpper"), i = r.length; i--;) s[e = r[i]] && o.singular.push(e);
                    return ["graphic", "dataLabel"].forEach((function(e) {
                        let i = e + "s";
                        t[e] && s[i] && o.plural.push(i)
                    })), o
                }
                getLabelConfig() {
                    return {
                        x: this.category,
                        y: this.y,
                        color: this.color,
                        colorIndex: this.colorIndex,
                        key: this.name || this.category,
                        series: this.series,
                        point: this,
                        percentage: this.percentage,
                        total: this.total || this.stackTotal
                    }
                }
                getNestedProperty(t) {
                    return t ? 0 === t.indexOf("custom.") ? p(t, this.options) : this[t] : void 0
                }
                getZone() {
                    let t, e = this.series,
                        i = e.zones,
                        s = e.zoneAxis || "y",
                        r = 0;
                    for (t = i[0]; this[s] >= t.value;) t = i[++r];
                    return this.nonZonedColor || (this.nonZonedColor = this.color), t && t.color && !this.options.color ? this.color = t.color : this.color = this.nonZonedColor, t
                }
                hasNewShapeType() {
                    return (this.graphic && (this.graphic.symbolName || this.graphic.element.nodeName)) !== this.shapeType
                }
                constructor(t, e, i) {
                    this.formatPrefix = "point", this.visible = !0, this.series = t, this.applyOptions(e, i), this.id ? ? (this.id = b()), this.resolveColor(), t.chart.pointCount++, c(this, "afterInit")
                }
                isValid() {
                    return (f(this.x) || this.x instanceof Date) && f(this.y)
                }
                optionsToObject(t) {
                    let e, i = this.series,
                        s = i.options.keys,
                        r = s || i.pointArrayMap || ["y"],
                        o = r.length,
                        a = {},
                        n = 0,
                        l = 0;
                    if (f(t) || null === t) a[r[0]] = t;
                    else if (u(t))
                        for (!s && t.length > o && ("string" == (e = typeof t[0]) ? a.name = t[0] : "number" === e && (a.x = t[0]), n++); l < o;) s && void 0 === t[n] || (r[l].indexOf(".") > 0 ? k.prototype.setNestedProperty(a, t[n], r[l]) : a[r[l]] = t[n]), n++, l++;
                    else "object" == typeof t && (a = t, t.dataLabels && (i.hasDataLabels = () => !0), t.marker && (i._hasPointMarkers = !0));
                    return a
                }
                pos(t, e = this.plotY) {
                    if (!this.destroyed) {
                        let {
                            plotX: i,
                            series: s
                        } = this, {
                            chart: r,
                            xAxis: o,
                            yAxis: a
                        } = s, n = 0, l = 0;
                        if (f(i) && f(e)) return t && (n = o ? o.pos : r.plotLeft, l = a ? a.pos : r.plotTop), r.inverted && o && a ? [a.len - e + l, o.len - i + n] : [i + n, e + l]
                    }
                }
                resolveColor() {
                    let t, e, i, s = this.series,
                        r = s.chart.options.chart,
                        o = s.chart.styledMode,
                        a = r.colorCount;
                    delete this.nonZonedColor, s.options.colorByPoint ? (o || (t = (e = s.options.colors || s.chart.options.colors)[s.colorCounter], a = e.length), i = s.colorCounter, s.colorCounter++, s.colorCounter === a && (s.colorCounter = 0)) : (o || (t = s.color), i = s.colorIndex), this.colorIndex = x(this.options.colorIndex, i), this.color = x(this.options.color, t)
                }
                setNestedProperty(t, e, i) {
                    return i.split(".").reduce((function(t, i, s, r) {
                        let o = r.length - 1 === s;
                        return t[i] = o ? e : m(t[i], !0) ? t[i] : {}, t[i]
                    }), t), t
                }
                shouldDraw() {
                    return !this.isNull
                }
                tooltipFormatter(t) {
                    let e = this.series,
                        i = e.tooltipOptions,
                        s = x(i.valueDecimals, ""),
                        r = i.valuePrefix || "",
                        o = i.valueSuffix || "";
                    return e.chart.styledMode && (t = e.chart.tooltip.styledModeFormat(t)), (e.pointArrayMap || ["y"]).forEach((function(e) {
                        e = "{point." + e, (r || o) && (t = t.replace(RegExp(e + "}", "g"), r + e + "}" + o)), t = t.replace(RegExp(e + "}", "g"), e + ":,." + s + "f}")
                    })), n(t, {
                        point: this,
                        series: this.series
                    }, e.chart)
                }
                update(t, e, i, s) {
                    let r, o = this,
                        a = o.series,
                        n = o.graphic,
                        l = a.chart,
                        h = a.options;

                    function d() {
                        o.applyOptions(t);
                        let s = n && o.hasMockGraphic,
                            d = null === o.y ? !s : s;
                        n && d && (o.graphic = n.destroy(), delete o.hasMockGraphic), m(t, !0) && (n && n.element && t && t.marker && void 0 !== t.marker.symbol && (o.graphic = n.destroy()), (null == t ? void 0 : t.dataLabels) && o.dataLabel && (o.dataLabel = o.dataLabel.destroy())), r = o.index, a.updateParallelArrays(o, r), h.data[r] = m(h.data[r], !0) || m(t, !0) ? o.options : x(t, h.data[r]), a.isDirty = a.isDirtyData = !0, !a.fixedBox && a.hasCartesianSeries && (l.isDirtyBox = !0), "point" === h.legendType && (l.isDirtyLegend = !0), e && l.redraw(i)
                    }
                    e = x(e, !0), !1 === s ? d() : o.firePointEvent("update", {
                        options: t
                    }, d)
                }
                remove(t, e) {
                    this.series.removePoint(this.series.data.indexOf(this), t, e)
                }
                select(t, e) {
                    let i = this,
                        s = i.series,
                        r = s.chart;
                    t = x(t, !i.selected), this.selectedStaging = t, i.firePointEvent(t ? "select" : "unselect", {
                        accumulate: e
                    }, (function() {
                        i.selected = i.options.selected = t, s.options.data[s.data.indexOf(i)] = i.options, i.setState(t && "select"), e || r.getSelectedPoints().forEach((function(t) {
                            let e = t.series;
                            t.selected && t !== i && (t.selected = t.options.selected = !1, e.options.data[e.data.indexOf(t)] = t.options, t.setState(r.hoverPoints && e.options.inactiveOtherPoints ? "inactive" : ""), t.firePointEvent("unselect"))
                        }))
                    })), delete this.selectedStaging
                }
                onMouseOver(t) {
                    let {
                        inverted: e,
                        pointer: i
                    } = this.series.chart;
                    i && (t = t ? i.normalize(t) : i.getChartCoordinatesFromPoint(this, e), i.runPointActions(t, this))
                }
                onMouseOut() {
                    let t = this.series.chart;
                    this.firePointEvent("mouseOut"), this.series.options.inactiveOtherPoints || (t.hoverPoints || []).forEach((function(t) {
                        t.setState()
                    })), t.hoverPoints = t.hoverPoint = null
                }
                manageEvent(t) {
                    var e, i, s, r, o;
                    let a = null == (e = (this.series.options.point || {}).events) ? void 0 : e[t];
                    !g(a) || (null == (i = this.hcEvents) ? void 0 : i[t]) && -1 !== (null == (r = null == (s = this.hcEvents) ? void 0 : s[t]) ? void 0 : r.map((t => t.fn)).indexOf(a)) ? this.hasImportedEvents && !a && (null == (o = this.hcEvents) ? void 0 : o[t]) && (v(this, t), delete this.hcEvents[t], Object.keys(this.hcEvents) || (this.hasImportedEvents = !1)) : (l(this, t, a), this.hasImportedEvents = !0)
                }
                setState(e, i) {
                    let s, r, o, n, l = this.series,
                        h = this.state,
                        p = l.options.states[e || "normal"] || {},
                        u = a.plotOptions[l.type].marker && l.options.marker,
                        g = u && !1 === u.enabled,
                        m = u && u.states && u.states[e || "normal"] || {},
                        y = !1 === m.enabled,
                        v = this.marker || {},
                        b = l.chart,
                        k = u && l.markerAttribs,
                        S = l.halo,
                        C = l.stateMarkerGraphic;
                    if ((e = e || "") === this.state && !i || this.selected && "select" !== e || !1 === p.enabled || e && (y || g && !1 === m.enabled) || e && v.states && v.states[e] && !1 === v.states[e].enabled) return;
                    if (this.state = e, k && (s = l.markerAttribs(this, e)), this.graphic && !this.hasMockGraphic) {
                        if (h && this.graphic.removeClass("highcharts-point-" + h), e && this.graphic.addClass("highcharts-point-" + e), !b.styledMode) {
                            r = l.pointAttribs(this, e), o = x(b.options.chart.animation, p.animation);
                            let t = r.opacity;
                            l.options.inactiveOtherPoints && f(t) && (this.dataLabels || []).forEach((function(e) {
                                e && !e.hasClass("highcharts-data-label-hidden") && (e.animate({
                                    opacity: t
                                }, o), e.connector && e.connector.animate({
                                    opacity: t
                                }, o))
                            })), this.graphic.animate(r, o)
                        }
                        s && this.graphic.animate(s, x(b.options.chart.animation, m.animation, u.animation)), C && C.hide()
                    } else e && m && (n = v.symbol || l.symbol, C && C.currentSymbol !== n && (C = C.destroy()), s && (C ? C[i ? "animate" : "attr"]({
                        x: s.x,
                        y: s.y
                    }) : n && (l.stateMarkerGraphic = C = b.renderer.symbol(n, s.x, s.y, s.width, s.height).add(l.markerGroup), C.currentSymbol = n)), !b.styledMode && C && "inactive" !== this.state && C.attr(l.pointAttribs(this, e))), C && (C[e && this.isInside ? "show" : "hide"](), C.element.point = this, C.addClass(this.getClassName(), !0));
                    let w = p.halo,
                        M = this.graphic || C,
                        A = M && M.visibility || "inherit";
                    w && w.size && M && "hidden" !== A && !this.isCluster ? (S || (l.halo = S = b.renderer.path().add(M.parentGroup)), S.show()[i ? "animate" : "attr"]({
                        d: this.haloPath(w.size)
                    }), S.attr({
                        class: "highcharts-halo highcharts-color-" + x(this.colorIndex, l.colorIndex) + (this.className ? " " + this.className : ""),
                        visibility: A,
                        zIndex: -1
                    }), S.point = this, b.styledMode || S.attr(d({
                        fill: this.color || l.color,
                        "fill-opacity": w.opacity
                    }, t.filterUserAttributes(w.attributes || {})))) : S && S.point && S.point.haloPath && S.animate({
                        d: S.point.haloPath(0)
                    }, null, S.hide), c(this, "afterSetState", {
                        state: e
                    })
                }
                haloPath(t) {
                    let e = this.pos();
                    return e ? this.series.chart.renderer.symbols.circle(Math.floor(e[0]) - t, e[1] - t, 2 * t, 2 * t) : []
                }
            }
            return k
        })), i(e, "Core/Pointer.js", [e["Core/Color/Color.js"], e["Core/Globals.js"], e["Core/Utilities.js"]], (function(t, e, i) {
            var s;
            let {
                parse: r
            } = t, {
                charts: o,
                composed: a
            } = e, {
                addEvent: n,
                attr: l,
                css: h,
                extend: d,
                find: c,
                fireEvent: p,
                isNumber: u,
                isObject: g,
                objectEach: f,
                offset: m,
                pick: x,
                pushUnique: y,
                splat: v
            } = i;
            class b {
                applyInactiveState(t) {
                    let e, i = [];
                    (t || []).forEach((function(t) {
                        e = t.series, i.push(e), e.linkedParent && i.push(e.linkedParent), e.linkedSeries && (i = i.concat(e.linkedSeries)), e.navigatorSeries && i.push(e.navigatorSeries)
                    })), this.chart.series.forEach((function(t) {
                        -1 === i.indexOf(t) ? t.setState("inactive", !0) : t.options.inactiveOtherPoints && t.setAllPointsToState("inactive")
                    }))
                }
                destroy() {
                    let t = this;
                    this.eventsToUnbind.forEach((t => t())), this.eventsToUnbind = [], !e.chartCount && (b.unbindDocumentMouseUp && (b.unbindDocumentMouseUp = b.unbindDocumentMouseUp()), b.unbindDocumentTouchEnd && (b.unbindDocumentTouchEnd = b.unbindDocumentTouchEnd())), clearInterval(t.tooltipTimeout), f(t, (function(e, i) {
                        t[i] = void 0
                    }))
                }
                getSelectionMarkerAttrs(t, e) {
                    let i = {
                        args: {
                            chartX: t,
                            chartY: e
                        },
                        attrs: {},
                        shapeType: "rect"
                    };
                    return p(this, "getSelectionMarkerAttrs", i, (i => {
                        let s, {
                                chart: r,
                                zoomHor: o,
                                zoomVert: a
                            } = this,
                            {
                                mouseDownX: n = 0,
                                mouseDownY: l = 0
                            } = r,
                            h = i.attrs;
                        h.x = r.plotLeft, h.y = r.plotTop, h.width = o ? 1 : r.plotWidth, h.height = a ? 1 : r.plotHeight, o && (s = t - n, h.width = Math.max(1, Math.abs(s)), h.x = (s > 0 ? 0 : s) + n), a && (s = e - l, h.height = Math.max(1, Math.abs(s)), h.y = (s > 0 ? 0 : s) + l)
                    })), i
                }
                drag(t) {
                    let e, {
                            chart: i
                        } = this,
                        {
                            mouseDownX: s = 0,
                            mouseDownY: o = 0
                        } = i,
                        {
                            panning: a,
                            panKey: n,
                            selectionMarkerFill: l
                        } = i.options.chart,
                        h = i.plotLeft,
                        d = i.plotTop,
                        c = i.plotWidth,
                        p = i.plotHeight,
                        u = g(a) ? a.enabled : a,
                        f = n && t[`${n}Key`],
                        m = t.chartX,
                        x = t.chartY,
                        y = this.selectionMarker;
                    if ((!y || !y.touch) && (m < h ? m = h : m > h + c && (m = h + c), x < d ? x = d : x > d + p && (x = d + p), this.hasDragged = Math.sqrt(Math.pow(s - m, 2) + Math.pow(o - x, 2)), this.hasDragged > 10)) {
                        e = i.isInsidePlot(s - h, o - d, {
                            visiblePlotOnly: !0
                        });
                        let {
                            shapeType: n,
                            attrs: c
                        } = this.getSelectionMarkerAttrs(m, x);
                        (i.hasCartesianSeries || i.mapView) && this.hasZoom && e && !f && !y && (this.selectionMarker = y = i.renderer[n](), y.attr({
                            class: "highcharts-selection-marker",
                            zIndex: 7
                        }).add(), i.styledMode || y.attr({
                            fill: l || r("#334eff").setOpacity(.25).get()
                        })), y && y.attr(c), e && !y && u && i.pan(t, a)
                    }
                }
                dragStart(t) {
                    let e = this.chart;
                    e.mouseIsDown = t.type, e.cancelClick = !1, e.mouseDownX = t.chartX, e.mouseDownY = t.chartY
                }
                getSelectionBox(t) {
                    let e = {
                        args: {
                            marker: t
                        },
                        result: t.getBBox()
                    };
                    return p(this, "getSelectionBox", e), e.result
                }
                drop(t) {
                    let e, {
                        chart: i,
                        selectionMarker: s
                    } = this;
                    for (let r of i.axes) r.isPanning && (r.isPanning = !1, (r.options.startOnTick || r.options.endOnTick || r.series.some((t => t.boosted))) && (r.forceRedraw = !0, r.setExtremes(r.userMin, r.userMax, !1), e = !0));
                    if (e && i.redraw(), s && t) {
                        if (this.hasDragged) {
                            let e = this.getSelectionBox(s);
                            i.transform({
                                axes: i.axes.filter((t => t.zoomEnabled && ("xAxis" === t.coll && this.zoomX || "yAxis" === t.coll && this.zoomY))),
                                selection: {
                                    originalEvent: t,
                                    xAxis: [],
                                    yAxis: [],
                                    ...e
                                },
                                from: e
                            })
                        }
                        u(i.index) && (this.selectionMarker = s.destroy())
                    }
                    i && u(i.index) && (h(i.container, {
                        cursor: i._cursor
                    }), i.cancelClick = this.hasDragged > 10, i.mouseIsDown = !1, this.hasDragged = 0, this.pinchDown = [])
                }
                findNearestKDPoint(t, e, i) {
                    let s;
                    return t.forEach((function(t) {
                        let r = !(t.noSharedTooltip && e) && 0 > t.options.findNearestPointBy.indexOf("y"),
                            o = t.searchPoint(i, r);
                        g(o, !0) && o.series && (!g(s, !0) || function(t, i) {
                            var s, r;
                            let o = t.distX - i.distX,
                                a = t.dist - i.dist,
                                n = (null == (s = i.series.group) ? void 0 : s.zIndex) - (null == (r = t.series.group) ? void 0 : r.zIndex);
                            return 0 !== o && e ? o : 0 !== a ? a : 0 !== n ? n : t.series.index > i.series.index ? -1 : 1
                        }(s, o) > 0) && (s = o)
                    })), s
                }
                getChartCoordinatesFromPoint(t, e) {
                    let {
                        xAxis: i,
                        yAxis: s
                    } = t.series, r = t.shapeArgs;
                    if (i && s) {
                        let o = t.clientX ? ? t.plotX ? ? 0,
                            a = t.plotY || 0;
                        return t.isNode && r && u(r.x) && u(r.y) && (o = r.x, a = r.y), e ? {
                            chartX: s.len + s.pos - a,
                            chartY: i.len + i.pos - o
                        } : {
                            chartX: o + i.pos,
                            chartY: a + s.pos
                        }
                    }
                    if (r && r.x && r.y) return {
                        chartX: r.x,
                        chartY: r.y
                    }
                }
                getChartPosition() {
                    if (this.chartPosition) return this.chartPosition;
                    let {
                        container: t
                    } = this.chart, e = m(t);
                    this.chartPosition = {
                        left: e.left,
                        top: e.top,
                        scaleX: 1,
                        scaleY: 1
                    };
                    let {
                        offsetHeight: i,
                        offsetWidth: s
                    } = t;
                    return s > 2 && i > 2 && (this.chartPosition.scaleX = e.width / s, this.chartPosition.scaleY = e.height / i), this.chartPosition
                }
                getCoordinates(t) {
                    let e = {
                        xAxis: [],
                        yAxis: []
                    };
                    for (let i of this.chart.axes) e[i.isXAxis ? "xAxis" : "yAxis"].push({
                        axis: i,
                        value: i.toValue(t[i.horiz ? "chartX" : "chartY"])
                    });
                    return e
                }
                getHoverData(t, e, i, s, r, o) {
                    let a, n = [],
                        l = function(t) {
                            return t.visible && !(!r && t.directTouch) && x(t.options.enableMouseTracking, !0)
                        },
                        h = e,
                        d = {
                            chartX: o ? o.chartX : void 0,
                            chartY: o ? o.chartY : void 0,
                            shared: r
                        };
                    p(this, "beforeGetHoverData", d), a = h && !h.stickyTracking ? [h] : i.filter((t => t.stickyTracking && (d.filter || l)(t)));
                    let u = s && t || !o ? t : this.findNearestKDPoint(a, r, o);
                    return h = u && u.series, u && (r && !h.noSharedTooltip ? (a = i.filter((function(t) {
                        return d.filter ? d.filter(t) : l(t) && !t.noSharedTooltip
                    }))).forEach((function(t) {
                        let e = c(t.points, (function(t) {
                            return t.x === u.x && !t.isNull
                        }));
                        g(e) && (t.boosted && t.boost && (e = t.boost.getPoint(e)), n.push(e))
                    })) : n.push(u)), p(this, "afterGetHoverData", d = {
                        hoverPoint: u
                    }), {
                        hoverPoint: d.hoverPoint,
                        hoverSeries: h,
                        hoverPoints: n
                    }
                }
                getPointFromEvent(t) {
                    let e, i = t.target;
                    for (; i && !e;) e = i.point, i = i.parentNode;
                    return e
                }
                onTrackerMouseOut(t) {
                    let e = this.chart,
                        i = t.relatedTarget,
                        s = e.hoverSeries;
                    this.isDirectTouch = !1, !s || !i || s.stickyTracking || this.inClass(i, "highcharts-tooltip") || this.inClass(i, "highcharts-series-" + s.index) && this.inClass(i, "highcharts-tracker") || s.onMouseOut()
                }
                inClass(t, e) {
                    let i, s = t;
                    for (; s;) {
                        if (i = l(s, "class")) {
                            if (-1 !== i.indexOf(e)) return !0;
                            if (-1 !== i.indexOf("highcharts-container")) return !1
                        }
                        s = s.parentElement
                    }
                }
                constructor(t, e) {
                    var i;
                    this.hasDragged = 0, this.eventsToUnbind = [], this.options = e, this.chart = t, this.runChartClick = !!(null == (i = e.chart.events) ? void 0 : i.click), this.pinchDown = [], this.setDOMEvents(), p(this, "afterInit")
                }
                normalize(t, e) {
                    let i = t.touches,
                        s = i ? i.length ? i.item(0) : x(i.changedTouches, t.changedTouches)[0] : t;
                    e || (e = this.getChartPosition());
                    let r = s.pageX - e.left,
                        o = s.pageY - e.top;
                    return d(t, {
                        chartX: Math.round(r /= e.scaleX),
                        chartY: Math.round(o /= e.scaleY)
                    })
                }
                onContainerClick(t) {
                    let e = this.chart,
                        i = e.hoverPoint,
                        s = this.normalize(t),
                        r = e.plotLeft,
                        o = e.plotTop;
                    !e.cancelClick && (i && this.inClass(s.target, "highcharts-tracker") ? (p(i.series, "click", d(s, {
                        point: i
                    })), e.hoverPoint && i.firePointEvent("click", s)) : (d(s, this.getCoordinates(s)), e.isInsidePlot(s.chartX - r, s.chartY - o, {
                        visiblePlotOnly: !0
                    }) && p(e, "click", s)))
                }
                onContainerMouseDown(t) {
                    var i;
                    let s = !(1 & ~(t.buttons || t.button));
                    t = this.normalize(t), e.isFirefox && 0 !== t.button && this.onContainerMouseMove(t), (void 0 === t.button || s) && (this.zoomOption(t), s && (null == (i = t.preventDefault) || i.call(t)), this.dragStart(t))
                }
                onContainerMouseLeave(t) {
                    let {
                        pointer: e
                    } = o[x(b.hoverChartIndex, -1)] || {};
                    t = this.normalize(t), this.onContainerMouseMove(t), e && t.relatedTarget && !this.inClass(t.relatedTarget, "highcharts-tooltip") && (e.reset(), e.chartPosition = void 0)
                }
                onContainerMouseEnter() {
                    delete this.chartPosition
                }
                onContainerMouseMove(t) {
                    let e = this.chart,
                        i = e.tooltip,
                        s = this.normalize(t);
                    this.setHoverChartIndex(t), ("mousedown" === e.mouseIsDown || this.touchSelect(s)) && this.drag(s), !e.openMenu && (this.inClass(s.target, "highcharts-tracker") || e.isInsidePlot(s.chartX - e.plotLeft, s.chartY - e.plotTop, {
                        visiblePlotOnly: !0
                    })) && (!i || !i.shouldStickOnContact(s)) && (this.inClass(s.target, "highcharts-no-tooltip") ? this.reset(!1, 0) : this.runPointActions(s))
                }
                onDocumentTouchEnd(t) {
                    this.onDocumentMouseUp(t)
                }
                onContainerTouchMove(t) {
                    this.touchSelect(t) ? this.onContainerMouseMove(t) : this.touch(t)
                }
                onContainerTouchStart(t) {
                    this.touchSelect(t) ? this.onContainerMouseDown(t) : (this.zoomOption(t), this.touch(t, !0))
                }
                onDocumentMouseMove(t) {
                    let e = this.chart,
                        i = e.tooltip,
                        s = this.chartPosition,
                        r = this.normalize(t, s);
                    !s || e.isInsidePlot(r.chartX - e.plotLeft, r.chartY - e.plotTop, {
                        visiblePlotOnly: !0
                    }) || i && i.shouldStickOnContact(r) || this.inClass(r.target, "highcharts-tracker") || this.reset()
                }
                onDocumentMouseUp(t) {
                    var e, i;
                    null == (i = null == (e = o[x(b.hoverChartIndex, -1)]) ? void 0 : e.pointer) || i.drop(t)
                }
                pinch(t) {
                    let e = this,
                        {
                            chart: i,
                            hasZoom: s,
                            lastTouches: r
                        } = e,
                        o = [].map.call(t.touches || [], (t => e.normalize(t))),
                        a = o.length,
                        n = 1 === a && (e.inClass(t.target, "highcharts-tracker") && i.runTrackerClick || e.runChartClick),
                        l = i.tooltip,
                        h = 1 === a && x(null == l ? void 0 : l.options.followTouchMove, !0);
                    a > 1 ? e.initiated = !0 : h && (e.initiated = !1), s && e.initiated && !n && !1 !== t.cancelable && t.preventDefault(), "touchstart" === t.type ? (e.pinchDown = o, e.res = !0) : h ? this.runPointActions(e.normalize(t)) : r && (p(i, "touchpan", {
                        originalEvent: t,
                        touches: o
                    }, (() => {
                        let e = t => {
                            let e = t[0],
                                i = t[1] || e;
                            return {
                                x: e.chartX,
                                y: e.chartY,
                                width: i.chartX - e.chartX,
                                height: i.chartY - e.chartY
                            }
                        };
                        i.transform({
                            axes: i.axes.filter((t => t.zoomEnabled && (this.zoomHor && t.horiz || this.zoomVert && !t.horiz))),
                            to: e(o),
                            from: e(r),
                            trigger: t.type
                        })
                    })), e.res && (e.res = !1, this.reset(!1, 0))), e.lastTouches = o
                }
                reset(t, e) {
                    let i = this.chart,
                        s = i.hoverSeries,
                        r = i.hoverPoint,
                        o = i.hoverPoints,
                        a = i.tooltip,
                        n = a && a.shared ? o : r;
                    t && n && v(n).forEach((function(e) {
                        e.series.isCartesian && void 0 === e.plotX && (t = !1)
                    })), t ? a && n && v(n).length && (a.refresh(n), a.shared && o ? o.forEach((function(t) {
                        t.setState(t.state, !0), t.series.isCartesian && (t.series.xAxis.crosshair && t.series.xAxis.drawCrosshair(null, t), t.series.yAxis.crosshair && t.series.yAxis.drawCrosshair(null, t))
                    })) : r && (r.setState(r.state, !0), i.axes.forEach((function(t) {
                        t.crosshair && r.series[t.coll] === t && t.drawCrosshair(null, r)
                    })))) : (r && r.onMouseOut(), o && o.forEach((function(t) {
                        t.setState()
                    })), s && s.onMouseOut(), a && a.hide(e), this.unDocMouseMove && (this.unDocMouseMove = this.unDocMouseMove()), i.axes.forEach((function(t) {
                        t.hideCrosshair()
                    })), i.hoverPoints = i.hoverPoint = void 0)
                }
                runPointActions(t, e, i) {
                    let s = this.chart,
                        r = s.series,
                        a = s.tooltip && s.tooltip.options.enabled ? s.tooltip : void 0,
                        l = !!a && a.shared,
                        h = e || s.hoverPoint,
                        d = h && h.series || s.hoverSeries,
                        p = (!t || "touchmove" !== t.type) && (!!e || d && d.directTouch && this.isDirectTouch),
                        u = this.getHoverData(h, d, r, p, l, t);
                    h = u.hoverPoint, d = u.hoverSeries;
                    let g = u.hoverPoints,
                        f = d && d.tooltipOptions.followPointer && !d.tooltipOptions.split,
                        m = l && d && !d.noSharedTooltip;
                    if (h && (i || h !== s.hoverPoint || a && a.isHidden)) {
                        if ((s.hoverPoints || []).forEach((function(t) {
                                -1 === g.indexOf(t) && t.setState()
                            })), s.hoverSeries !== d && d.onMouseOver(), this.applyInactiveState(g), (g || []).forEach((function(t) {
                                t.setState("hover")
                            })), s.hoverPoint && s.hoverPoint.firePointEvent("mouseOut"), !h.series) return;
                        s.hoverPoints = g, s.hoverPoint = h, h.firePointEvent("mouseOver", void 0, (() => {
                            a && h && a.refresh(m ? g : h, t)
                        }))
                    } else if (f && a && !a.isHidden) {
                        let e = a.getAnchor([{}], t);
                        s.isInsidePlot(e[0], e[1], {
                            visiblePlotOnly: !0
                        }) && a.updatePosition({
                            plotX: e[0],
                            plotY: e[1]
                        })
                    }
                    this.unDocMouseMove || (this.unDocMouseMove = n(s.container.ownerDocument, "mousemove", (t => {
                        var e, i;
                        return null == (i = null == (e = o[b.hoverChartIndex ? ? -1]) ? void 0 : e.pointer) ? void 0 : i.onDocumentMouseMove(t)
                    })), this.eventsToUnbind.push(this.unDocMouseMove)), s.axes.forEach((function(e) {
                        let i, r = x((e.crosshair || {}).snap, !0);
                        !r || (i = s.hoverPoint) && i.series[e.coll] === e || (i = c(g, (t => t.series && t.series[e.coll] === e))), i || !r ? e.drawCrosshair(t, i) : e.hideCrosshair()
                    }))
                }
                setDOMEvents() {
                    let t = this.chart.container,
                        e = t.ownerDocument;
                    t.onmousedown = this.onContainerMouseDown.bind(this), t.onmousemove = this.onContainerMouseMove.bind(this), t.onclick = this.onContainerClick.bind(this), this.eventsToUnbind.push(n(t, "mouseenter", this.onContainerMouseEnter.bind(this)), n(t, "mouseleave", this.onContainerMouseLeave.bind(this))), b.unbindDocumentMouseUp || (b.unbindDocumentMouseUp = n(e, "mouseup", this.onDocumentMouseUp.bind(this)));
                    let i = this.chart.renderTo.parentElement;
                    for (; i && "BODY" !== i.tagName;) this.eventsToUnbind.push(n(i, "scroll", (() => {
                        delete this.chartPosition
                    }))), i = i.parentElement;
                    this.eventsToUnbind.push(n(t, "touchstart", this.onContainerTouchStart.bind(this), {
                        passive: !1
                    }), n(t, "touchmove", this.onContainerTouchMove.bind(this), {
                        passive: !1
                    })), b.unbindDocumentTouchEnd || (b.unbindDocumentTouchEnd = n(e, "touchend", this.onDocumentTouchEnd.bind(this), {
                        passive: !1
                    }))
                }
                setHoverChartIndex(t) {
                    var i;
                    let s = this.chart,
                        r = e.charts[x(b.hoverChartIndex, -1)];
                    r && r !== s && (null == (i = r.pointer) || i.onContainerMouseLeave(t || {
                        relatedTarget: s.container
                    })), r && r.mouseIsDown || (b.hoverChartIndex = s.index)
                }
                touch(t, e) {
                    let i, {
                        chart: s,
                        pinchDown: r = []
                    } = this;
                    this.setHoverChartIndex(), 1 === t.touches.length ? (t = this.normalize(t), s.isInsidePlot(t.chartX - s.plotLeft, t.chartY - s.plotTop, {
                        visiblePlotOnly: !0
                    }) && !s.openMenu ? (e && this.runPointActions(t), "touchmove" === t.type && (i = !!r[0] && Math.pow(r[0].chartX - t.chartX, 2) + Math.pow(r[0].chartY - t.chartY, 2) >= 16), x(i, !0) && this.pinch(t)) : e && this.reset()) : 2 === t.touches.length && this.pinch(t)
                }
                touchSelect(t) {
                    return !(!this.chart.zooming.singleTouch || !t.touches || 1 !== t.touches.length)
                }
                zoomOption(t) {
                    let e, i, s = this.chart,
                        r = s.inverted,
                        o = s.zooming.type || "";
                    /touch/.test(t.type) && (o = x(s.zooming.pinchType, o)), this.zoomX = e = /x/.test(o), this.zoomY = i = /y/.test(o), this.zoomHor = e && !r || i && r, this.zoomVert = i && !r || e && r, this.hasZoom = e || i
                }
            }
            return (s = b || (b = {})).compose = function(t) {
                y(a, "Core.Pointer") && n(t, "beforeRender", (function() {
                    this.pointer = new s(this, this.options)
                }))
            }, b
        })), i(e, "Core/Legend/Legend.js", [e["Core/Animation/AnimationUtilities.js"], e["Core/Templating.js"], e["Core/Globals.js"], e["Core/Series/Point.js"], e["Core/Renderer/RendererUtilities.js"], e["Core/Utilities.js"]], (function(t, e, i, s, r, o) {
            var a;
            let {
                animObject: n,
                setAnimation: l
            } = t, {
                format: h
            } = e, {
                composed: d,
                marginNames: c
            } = i, {
                distribute: p
            } = r, {
                addEvent: u,
                createElement: g,
                css: f,
                defined: m,
                discardElement: x,
                find: y,
                fireEvent: v,
                isNumber: b,
                merge: k,
                pick: S,
                pushUnique: C,
                relativeLength: w,
                stableSort: M,
                syncTimeout: A
            } = o;
            class T {
                constructor(t, e) {
                    this.allItems = [], this.initialItemY = 0, this.itemHeight = 0, this.itemMarginBottom = 0, this.itemMarginTop = 0, this.itemX = 0, this.itemY = 0, this.lastItemY = 0, this.lastLineHeight = 0, this.legendHeight = 0, this.legendWidth = 0, this.maxItemWidth = 0, this.maxLegendWidth = 0, this.offsetWidth = 0, this.padding = 0, this.pages = [], this.symbolHeight = 0, this.symbolWidth = 0, this.titleHeight = 0, this.totalItemWidth = 0, this.widthOption = 0, this.chart = t, this.setOptions(e), e.enabled && (this.render(), u(this.chart, "endResize", (function() {
                        this.legend.positionCheckboxes()
                    }))), u(this.chart, "render", (() => {
                        this.options.enabled && this.proximate && (this.proximatePositions(), this.positionItems())
                    }))
                }
                setOptions(t) {
                    let e = S(t.padding, 8);
                    this.options = t, this.chart.styledMode || (this.itemStyle = t.itemStyle, this.itemHiddenStyle = k(this.itemStyle, t.itemHiddenStyle)), this.itemMarginTop = t.itemMarginTop, this.itemMarginBottom = t.itemMarginBottom, this.padding = e, this.initialItemY = e - 5, this.symbolWidth = S(t.symbolWidth, 16), this.pages = [], this.proximate = "proximate" === t.layout && !this.chart.inverted, this.baseline = void 0
                }
                update(t, e) {
                    let i = this.chart;
                    this.setOptions(k(!0, this.options, t)), this.destroy(), i.isDirtyLegend = i.isDirtyBox = !0, S(e, !0) && i.redraw(), v(this, "afterUpdate", {
                        redraw: e
                    })
                }
                colorizeItem(t, e) {
                    let {
                        area: i,
                        group: s,
                        label: r,
                        line: o,
                        symbol: a
                    } = t.legendItem || {};
                    if (null == s || s[e ? "removeClass" : "addClass"]("highcharts-legend-item-hidden"), !this.chart.styledMode) {
                        let {
                            itemHiddenStyle: s = {}
                        } = this, n = s.color, {
                            fillColor: l,
                            fillOpacity: h,
                            lineColor: d,
                            marker: c
                        } = t.options, p = t => (!e && (t.fill && (t.fill = n), t.stroke && (t.stroke = n)), t);
                        null == r || r.css(k(e ? this.itemStyle : s)), null == o || o.attr(p({
                            stroke: d || t.color
                        })), a && a.attr(p(c && a.isMarker ? t.pointAttribs() : {
                            fill: t.color
                        })), null == i || i.attr(p({
                            fill: l || t.color,
                            "fill-opacity": l ? 1 : h ? ? .75
                        }))
                    }
                    v(this, "afterColorizeItem", {
                        item: t,
                        visible: e
                    })
                }
                positionItems() {
                    this.allItems.forEach(this.positionItem, this), this.chart.isResizing || this.positionCheckboxes()
                }
                positionItem(t) {
                    let {
                        group: e,
                        x: i = 0,
                        y: s = 0
                    } = t.legendItem || {}, r = this.options, o = r.symbolPadding, a = !r.rtl, n = t.checkbox;
                    if (e && e.element) {
                        let r = {
                            translateX: a ? i : this.legendWidth - i - 2 * o - 4,
                            translateY: s
                        };
                        e[m(e.translateY) ? "animate" : "attr"](r, void 0, (() => {
                            v(this, "afterPositionItem", {
                                item: t
                            })
                        }))
                    }
                    n && (n.x = i, n.y = s)
                }
                destroyItem(t) {
                    let e = t.checkbox,
                        i = t.legendItem || {};
                    for (let s of ["group", "label", "line", "symbol"]) i[s] && (i[s] = i[s].destroy());
                    e && x(e), t.legendItem = void 0
                }
                destroy() {
                    for (let t of this.getAllItems()) this.destroyItem(t);
                    for (let t of ["clipRect", "up", "down", "pager", "nav", "box", "title", "group"]) this[t] && (this[t] = this[t].destroy());
                    this.display = null
                }
                positionCheckboxes() {
                    let t, e = this.group && this.group.alignAttr,
                        i = this.clipHeight || this.legendHeight,
                        s = this.titleHeight;
                    e && (t = e.translateY, this.allItems.forEach((function(r) {
                        let o, a = r.checkbox;
                        a && (o = t + s + a.y + (this.scrollOffset || 0) + 3, f(a, {
                            left: e.translateX + r.checkboxOffset + a.x - 20 + "px",
                            top: o + "px",
                            display: this.proximate || o > t - 6 && o < t + i - 6 ? "" : "none"
                        }))
                    }), this))
                }
                renderTitle() {
                    let t, e = this.options,
                        i = this.padding,
                        s = e.title,
                        r = 0;
                    s.text && (this.title || (this.title = this.chart.renderer.label(s.text, i - 3, i - 4, void 0, void 0, void 0, e.useHTML, void 0, "legend-title").attr({
                        zIndex: 1
                    }), this.chart.styledMode || this.title.css(s.style), this.title.add(this.group)), s.width || this.title.css({
                        width: this.maxLegendWidth + "px"
                    }), r = (t = this.title.getBBox()).height, this.offsetWidth = t.width, this.contentGroup.attr({
                        translateY: r
                    })), this.titleHeight = r
                }
                setText(t) {
                    let e = this.options;
                    t.legendItem.label.attr({
                        text: e.labelFormat ? h(e.labelFormat, t, this.chart) : e.labelFormatter.call(t)
                    })
                }
                renderItem(t) {
                    let e = t.legendItem = t.legendItem || {},
                        i = this.chart,
                        s = i.renderer,
                        r = this.options,
                        o = "horizontal" === r.layout,
                        a = this.symbolWidth,
                        n = r.symbolPadding || 0,
                        l = this.itemStyle,
                        h = this.itemHiddenStyle,
                        d = o ? S(r.itemDistance, 20) : 0,
                        c = !r.rtl,
                        p = !t.series,
                        u = !p && t.series.drawLegendSymbol ? t.series : t,
                        g = u.options,
                        f = !!this.createCheckboxForItem && g && g.showCheckbox,
                        m = r.useHTML,
                        x = t.options.className,
                        y = e.label,
                        v = a + n + d + (f ? 20 : 0);
                    !y && (e.group = s.g("legend-item").addClass("highcharts-" + u.type + "-series highcharts-color-" + t.colorIndex + (x ? " " + x : "") + (p ? " highcharts-series-" + t.index : "")).attr({
                        zIndex: 1
                    }).add(this.scrollGroup), e.label = y = s.text("", c ? a + n : -n, this.baseline || 0, m), i.styledMode || y.css(k(t.visible ? l : h)), y.attr({
                        align: c ? "left" : "right",
                        zIndex: 2
                    }).add(e.group), !this.baseline && (this.fontMetrics = s.fontMetrics(y), this.baseline = this.fontMetrics.f + 3 + this.itemMarginTop, y.attr("y", this.baseline), this.symbolHeight = S(r.symbolHeight, this.fontMetrics.f), r.squareSymbol && (this.symbolWidth = S(r.symbolWidth, Math.max(this.symbolHeight, 16)), v = this.symbolWidth + n + d + (f ? 20 : 0), c && y.attr("x", this.symbolWidth + n))), u.drawLegendSymbol(this, t), this.setItemEvents && this.setItemEvents(t, y, m)), f && !t.checkbox && this.createCheckboxForItem && this.createCheckboxForItem(t), this.colorizeItem(t, t.visible), (i.styledMode || !l.width) && y.css({
                        width: (r.itemWidth || this.widthOption || i.spacingBox.width) - v + "px"
                    }), this.setText(t);
                    let b = y.getBBox(),
                        C = this.fontMetrics && this.fontMetrics.h || 0;
                    t.itemWidth = t.checkboxOffset = r.itemWidth || e.labelWidth || b.width + v, this.maxItemWidth = Math.max(this.maxItemWidth, t.itemWidth), this.totalItemWidth += t.itemWidth, this.itemHeight = t.itemHeight = Math.round(e.labelHeight || (b.height > 1.5 * C ? b.height : C))
                }
                layoutItem(t) {
                    let e = this.options,
                        i = this.padding,
                        s = "horizontal" === e.layout,
                        r = t.itemHeight,
                        o = this.itemMarginBottom,
                        a = this.itemMarginTop,
                        n = s ? S(e.itemDistance, 20) : 0,
                        l = this.maxLegendWidth,
                        h = e.alignColumns && this.totalItemWidth > l ? this.maxItemWidth : t.itemWidth,
                        d = t.legendItem || {};
                    s && this.itemX - i + h > l && (this.itemX = i, this.lastLineHeight && (this.itemY += a + this.lastLineHeight + o), this.lastLineHeight = 0), this.lastItemY = a + this.itemY + o, this.lastLineHeight = Math.max(r, this.lastLineHeight), d.x = this.itemX, d.y = this.itemY, s ? this.itemX += h : (this.itemY += a + r + o, this.lastLineHeight = r), this.offsetWidth = this.widthOption || Math.max((s ? this.itemX - i - (t.checkbox ? 0 : n) : h) + i, this.offsetWidth)
                }
                getAllItems() {
                    let t = [];
                    return this.chart.series.forEach((function(e) {
                        let i = e && e.options;
                        e && S(i.showInLegend, !m(i.linkedTo) && void 0, !0) && (t = t.concat((e.legendItem || {}).labels || ("point" === i.legendType ? e.data : e)))
                    })), v(this, "afterGetAllItems", {
                        allItems: t
                    }), t
                }
                getAlignment() {
                    let t = this.options;
                    return this.proximate ? t.align.charAt(0) + "tv" : t.floating ? "" : t.align.charAt(0) + t.verticalAlign.charAt(0) + t.layout.charAt(0)
                }
                adjustMargins(t, e) {
                    let i = this.chart,
                        s = this.options,
                        r = this.getAlignment();
                    r && [/(lth|ct|rth)/, /(rtv|rm|rbv)/, /(rbh|cb|lbh)/, /(lbv|lm|ltv)/].forEach((function(o, a) {
                        o.test(r) && !m(t[a]) && (i[c[a]] = Math.max(i[c[a]], i.legend[(a + 1) % 2 ? "legendHeight" : "legendWidth"] + [1, -1, -1, 1][a] * s[a % 2 ? "x" : "y"] + S(s.margin, 12) + e[a] + (i.titleOffset[a] || 0)))
                    }))
                }
                proximatePositions() {
                    let t, e = this.chart,
                        i = [],
                        s = "left" === this.options.align;
                    for (let r of (this.allItems.forEach((function(t) {
                            let r, o, a, n, l = s;
                            t.yAxis && (t.xAxis.options.reversed && (l = !l), t.points && (r = y(l ? t.points : t.points.slice(0).reverse(), (function(t) {
                                return b(t.plotY)
                            }))), o = this.itemMarginTop + t.legendItem.label.getBBox().height + this.itemMarginBottom, n = t.yAxis.top - e.plotTop, a = t.visible ? (r ? r.plotY : t.yAxis.height) + (n - .3 * o) : n + t.yAxis.height, i.push({
                                target: a,
                                size: o,
                                item: t
                            }))
                        }), this), p(i, e.plotHeight))) t = r.item.legendItem || {}, b(r.pos) && (t.y = e.plotTop - e.spacing[0] + r.pos)
                }
                render() {
                    let t, e, i, s, r = this.chart,
                        o = r.renderer,
                        a = this.options,
                        n = this.padding,
                        l = this.getAllItems(),
                        h = this.group,
                        d = this.box;
                    this.itemX = n, this.itemY = this.initialItemY, this.offsetWidth = 0, this.lastItemY = 0, this.widthOption = w(a.width, r.spacingBox.width - n), s = r.spacingBox.width - 2 * n - a.x, ["rm", "lm"].indexOf(this.getAlignment().substring(0, 2)) > -1 && (s /= 2), this.maxLegendWidth = this.widthOption || s, h || (this.group = h = o.g("legend").addClass(a.className || "").attr({
                        zIndex: 7
                    }).add(), this.contentGroup = o.g().attr({
                        zIndex: 1
                    }).add(h), this.scrollGroup = o.g().add(this.contentGroup)), this.renderTitle(), M(l, ((t, e) => (t.options && t.options.legendIndex || 0) - (e.options && e.options.legendIndex || 0))), a.reversed && l.reverse(), this.allItems = l, this.display = t = !!l.length, this.lastLineHeight = 0, this.maxItemWidth = 0, this.totalItemWidth = 0, this.itemHeight = 0, l.forEach(this.renderItem, this), l.forEach(this.layoutItem, this), e = (this.widthOption || this.offsetWidth) + n, i = this.lastItemY + this.lastLineHeight + this.titleHeight, i = this.handleOverflow(i) + n, d || (this.box = d = o.rect().addClass("highcharts-legend-box").attr({
                        r: a.borderRadius
                    }).add(h)), r.styledMode || d.attr({
                        stroke: a.borderColor,
                        "stroke-width": a.borderWidth || 0,
                        fill: a.backgroundColor || "none"
                    }).shadow(a.shadow), e > 0 && i > 0 && d[d.placed ? "animate" : "attr"](d.crisp.call({}, {
                        x: 0,
                        y: 0,
                        width: e,
                        height: i
                    }, d.strokeWidth())), h[t ? "show" : "hide"](), r.styledMode && "none" === h.getStyle("display") && (e = i = 0), this.legendWidth = e, this.legendHeight = i, t && this.align(), this.proximate || this.positionItems(), v(this, "afterRender")
                }
                align(t = this.chart.spacingBox) {
                    let e = this.chart,
                        i = this.options,
                        s = t.y;
                    /(lth|ct|rth)/.test(this.getAlignment()) && e.titleOffset[0] > 0 ? s += e.titleOffset[0] : /(lbh|cb|rbh)/.test(this.getAlignment()) && e.titleOffset[2] > 0 && (s -= e.titleOffset[2]), s !== t.y && (t = k(t, {
                        y: s
                    })), e.hasRendered || (this.group.placed = !1), this.group.align(k(i, {
                        width: this.legendWidth,
                        height: this.legendHeight,
                        verticalAlign: this.proximate ? "top" : i.verticalAlign
                    }), !0, t)
                }
                handleOverflow(t) {
                    let e, i, s, r = this,
                        o = this.chart,
                        a = o.renderer,
                        n = this.options,
                        l = n.y,
                        h = "top" === n.verticalAlign,
                        d = this.padding,
                        c = n.maxHeight,
                        p = n.navigation,
                        u = S(p.animation, !0),
                        g = p.arrowSize || 12,
                        f = this.pages,
                        m = this.allItems,
                        x = function(t) {
                            "number" == typeof t ? k.attr({
                                height: t
                            }) : k && (r.clipRect = k.destroy(), r.contentGroup.clip()), r.contentGroup.div && (r.contentGroup.div.style.clip = t ? "rect(" + d + "px,9999px," + (d + t) + "px,0)" : "auto")
                        },
                        y = function(t) {
                            return r[t] = a.circle(0, 0, 1.3 * g).translate(g / 2, g / 2).add(b), o.styledMode || r[t].attr("fill", "rgba(0,0,0,0.0001)"), r[t]
                        },
                        v = o.spacingBox.height + (h ? -l : l) - d,
                        b = this.nav,
                        k = this.clipRect;
                    return "horizontal" !== n.layout || "middle" === n.verticalAlign || n.floating || (v /= 2), c && (v = Math.min(v, c)), f.length = 0, t && v > 0 && t > v && !1 !== p.enabled ? (this.clipHeight = e = Math.max(v - 20 - this.titleHeight - d, 0), this.currentPage = S(this.currentPage, 1), this.fullHeight = t, m.forEach(((t, r) => {
                        let o = (s = t.legendItem || {}).y || 0,
                            a = Math.round(s.label.getBBox().height),
                            n = f.length;
                        (!n || o - f[n - 1] > e && (i || o) !== f[n - 1]) && (f.push(i || o), n++), s.pageIx = n - 1, i && ((m[r - 1].legendItem || {}).pageIx = n - 1), r === m.length - 1 && o + a - f[n - 1] > e && o > f[n - 1] && (f.push(o), s.pageIx = n), o !== i && (i = o)
                    })), k || (k = r.clipRect = a.clipRect(0, d - 2, 9999, 0), r.contentGroup.clip(k)), x(e), b || (this.nav = b = a.g().attr({
                        zIndex: 1
                    }).add(this.group), this.up = a.symbol("triangle", 0, 0, g, g).add(b), y("upTracker").on("click", (function() {
                        r.scroll(-1, u)
                    })), this.pager = a.text("", 15, 10).addClass("highcharts-legend-navigation"), !o.styledMode && p.style && this.pager.css(p.style), this.pager.add(b), this.down = a.symbol("triangle-down", 0, 0, g, g).add(b), y("downTracker").on("click", (function() {
                        r.scroll(1, u)
                    }))), r.scroll(0), t = v) : b && (x(), this.nav = b.destroy(), this.scrollGroup.attr({
                        translateY: 1
                    }), this.clipHeight = 0), t
                }
                scroll(t, e) {
                    let i = this.chart,
                        s = this.pages,
                        r = s.length,
                        o = this.clipHeight,
                        a = this.options.navigation,
                        h = this.pager,
                        d = this.padding,
                        c = this.currentPage + t;
                    c > r && (c = r), c > 0 && (void 0 !== e && l(e, i), this.nav.attr({
                        translateX: d,
                        translateY: o + this.padding + 7 + this.titleHeight,
                        visibility: "inherit"
                    }), [this.up, this.upTracker].forEach((function(t) {
                        t.attr({
                            class: 1 === c ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active"
                        })
                    })), h.attr({
                        text: c + "/" + r
                    }), [this.down, this.downTracker].forEach((function(t) {
                        t.attr({
                            x: 18 + this.pager.getBBox().width,
                            class: c === r ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active"
                        })
                    }), this), i.styledMode || (this.up.attr({
                        fill: 1 === c ? a.inactiveColor : a.activeColor
                    }), this.upTracker.css({
                        cursor: 1 === c ? "default" : "pointer"
                    }), this.down.attr({
                        fill: c === r ? a.inactiveColor : a.activeColor
                    }), this.downTracker.css({
                        cursor: c === r ? "default" : "pointer"
                    })), this.scrollOffset = -s[c - 1] + this.initialItemY, this.scrollGroup.animate({
                        translateY: this.scrollOffset
                    }), this.currentPage = c, this.positionCheckboxes(), A((() => {
                        v(this, "afterScroll", {
                            currentPage: c
                        })
                    }), n(S(e, i.renderer.globalAnimation, !0)).duration))
                }
                setItemEvents(t, e, i) {
                    let r = this,
                        o = t.legendItem || {},
                        a = r.chart.renderer.boxWrapper,
                        n = t instanceof s,
                        l = "highcharts-legend-" + (n ? "point" : "series") + "-active",
                        h = r.chart.styledMode,
                        d = i ? [e, o.symbol] : [o.group],
                        c = e => {
                            r.allItems.forEach((i => {
                                t !== i && [i].concat(i.linkedSeries || []).forEach((t => {
                                    t.setState(e, !n)
                                }))
                            }))
                        };
                    for (let s of d) s && s.on("mouseover", (function() {
                        t.visible && c("inactive"), t.setState("hover"), t.visible && a.addClass(l), h || e.css(r.options.itemHoverStyle)
                    })).on("mouseout", (function() {
                        r.chart.styledMode || e.css(k(t.visible ? r.itemStyle : r.itemHiddenStyle)), c(""), a.removeClass(l), t.setState()
                    })).on("click", (function(e) {
                        let i = "legendItemClick",
                            s = function() {
                                t.setVisible && t.setVisible(), c(t.visible ? "inactive" : "")
                            };
                        a.removeClass(l), e = {
                            browserEvent: e
                        }, t.firePointEvent ? t.firePointEvent(i, e, s) : v(t, i, e, s)
                    }))
                }
                createCheckboxForItem(t) {
                    t.checkbox = g("input", {
                        type: "checkbox",
                        className: "highcharts-legend-checkbox",
                        checked: t.selected,
                        defaultChecked: t.selected
                    }, this.options.itemCheckboxStyle, this.chart.container), u(t.checkbox, "click", (function(e) {
                        let i = e.target;
                        v(t.series || t, "checkboxClick", {
                            checked: i.checked,
                            item: t
                        }, (function() {
                            t.select()
                        }))
                    }))
                }
            }
            return (a = T || (T = {})).compose = function(t) {
                C(d, "Core.Legend") && u(t, "beforeMargins", (function() {
                    this.legend = new a(this, this.options.legend)
                }))
            }, T
        })), i(e, "Core/Legend/LegendSymbol.js", [e["Core/Utilities.js"]], (function(t) {
            var e;
            let {
                extend: i,
                merge: s,
                pick: r
            } = t;
            return function(t) {
                function e(t, e, o) {
                    var a;
                    let n, l = this.legendItem = this.legendItem || {},
                        {
                            chart: h,
                            options: d
                        } = this,
                        {
                            baseline: c = 0,
                            symbolWidth: p,
                            symbolHeight: u
                        } = t,
                        g = this.symbol || "circle",
                        f = u / 2,
                        m = h.renderer,
                        x = l.group,
                        y = c - Math.round(u * (o ? .4 : .3)),
                        v = {},
                        b = d.marker,
                        k = 0;
                    if (h.styledMode || (v["stroke-width"] = Math.min(d.lineWidth || 0, 24), d.dashStyle ? v.dashstyle = d.dashStyle : "square" === d.linecap || (v["stroke-linecap"] = "round")), l.line = m.path().addClass("highcharts-graph").attr(v).add(x), o && (l.area = m.path().addClass("highcharts-area").add(x)), v["stroke-linecap"] && (k = Math.min(l.line.strokeWidth(), p) / 2), p) {
                        let t = [
                            ["M", k, y],
                            ["L", p - k, y]
                        ];
                        l.line.attr({
                            d: t
                        }), null == (a = l.area) || a.attr({
                            d: [...t, ["L", p - k, c],
                                ["L", k, c]
                            ]
                        })
                    }
                    if (b && !1 !== b.enabled && p) {
                        let t = Math.min(r(b.radius, f), f);
                        0 === g.indexOf("url") && (b = s(b, {
                            width: u,
                            height: u
                        }), t = 0), l.symbol = n = m.symbol(g, p / 2 - t, y - t, 2 * t, 2 * t, i({
                            context: "legend"
                        }, b)).addClass("highcharts-point").add(x), n.isMarker = !0
                    }
                }
                t.areaMarker = function(t, i) {
                    e.call(this, t, i, !0)
                }, t.lineMarker = e, t.rectangle = function(t, e) {
                    let i = e.legendItem || {},
                        s = t.options,
                        o = t.symbolHeight,
                        a = s.squareSymbol,
                        n = a ? o : t.symbolWidth;
                    i.symbol = this.chart.renderer.rect(a ? (t.symbolWidth - o) / 2 : 0, t.baseline - o + 1, n, o, r(t.options.symbolRadius, o / 2)).addClass("highcharts-point").attr({
                        zIndex: 3
                    }).add(i.group)
                }
            }(e || (e = {})), e
        })), i(e, "Core/Series/SeriesDefaults.js", [], (function() {
            return {
                lineWidth: 2,
                allowPointSelect: !1,
                crisp: !0,
                showCheckbox: !1,
                animation: {
                    duration: 1e3
                },
                enableMouseTracking: !0,
                events: {},
                marker: {
                    enabledThreshold: 2,
                    lineColor: "#ffffff",
                    lineWidth: 0,
                    radius: 4,
                    states: {
                        normal: {
                            animation: !0
                        },
                        hover: {
                            animation: {
                                duration: 150
                            },
                            enabled: !0,
                            radiusPlus: 2,
                            lineWidthPlus: 1
                        },
                        select: {
                            fillColor: "#cccccc",
                            lineColor: "#000000",
                            lineWidth: 2
                        }
                    }
                },
                point: {
                    events: {}
                },
                dataLabels: {
                    animation: {},
                    align: "center",
                    borderWidth: 0,
                    defer: !0,
                    formatter: function() {
                        let {
                            numberFormatter: t
                        } = this.series.chart;
                        return "number" != typeof this.y ? "" : t(this.y, -1)
                    },
                    padding: 5,
                    style: {
                        fontSize: "0.7em",
                        fontWeight: "bold",
                        color: "contrast",
                        textOutline: "1px contrast"
                    },
                    verticalAlign: "bottom",
                    x: 0,
                    y: 0
                },
                cropThreshold: 300,
                opacity: 1,
                pointRange: 0,
                softThreshold: !0,
                states: {
                    normal: {
                        animation: !0
                    },
                    hover: {
                        animation: {
                            duration: 150
                        },
                        lineWidthPlus: 1,
                        marker: {},
                        halo: {
                            size: 10,
                            opacity: .25
                        }
                    },
                    select: {
                        animation: {
                            duration: 0
                        }
                    },
                    inactive: {
                        animation: {
                            duration: 150
                        },
                        opacity: .2
                    }
                },
                stickyTracking: !0,
                turboThreshold: 1e3,
                findNearestPointBy: "x"
            }
        })), i(e, "Core/Series/SeriesRegistry.js", [e["Core/Globals.js"], e["Core/Defaults.js"], e["Core/Series/Point.js"], e["Core/Utilities.js"]], (function(t, e, i, s) {
            var r;
            let {
                defaultOptions: o
            } = e, {
                extend: a,
                extendClass: n,
                merge: l
            } = s;
            return function(e) {
                function s(t, s) {
                    let r = o.plotOptions || {},
                        a = s.defaultOptions,
                        n = s.prototype;
                    return n.type = t, n.pointClass || (n.pointClass = i), !e.seriesTypes[t] && (a && (r[t] = a), e.seriesTypes[t] = s, !0)
                }
                e.seriesTypes = t.seriesTypes, e.registerSeriesType = s, e.seriesType = function(t, r, h, d, c) {
                    let p = o.plotOptions || {};
                    if (r = r || "", p[t] = l(p[r], h), delete e.seriesTypes[t], s(t, n(e.seriesTypes[r] || function() {}, d)), e.seriesTypes[t].prototype.type = t, c) {
                        class s extends i {}
                        a(s.prototype, c), e.seriesTypes[t].prototype.pointClass = s
                    }
                    return e.seriesTypes[t]
                }
            }(r || (r = {})), r
        })), i(e, "Core/Series/Series.js", [e["Core/Animation/AnimationUtilities.js"], e["Core/Defaults.js"], e["Core/Foundation.js"], e["Core/Globals.js"], e["Core/Legend/LegendSymbol.js"], e["Core/Series/Point.js"], e["Core/Series/SeriesDefaults.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Renderer/SVG/SVGElement.js"], e["Core/Utilities.js"]], (function(t, e, i, s, r, o, a, n, l, h) {
            let {
                animObject: d,
                setAnimation: c
            } = t, {
                defaultOptions: p
            } = e, {
                registerEventOptions: u
            } = i, {
                svg: g,
                win: f
            } = s, {
                seriesTypes: m
            } = n, {
                arrayMax: x,
                arrayMin: y,
                clamp: v,
                correctFloat: b,
                defined: k,
                destroyObjectProperties: S,
                diffObjects: C,
                erase: w,
                error: M,
                extend: A,
                find: T,
                fireEvent: P,
                getClosestDistance: L,
                getNestedProperty: O,
                insertItem: E,
                isArray: D,
                isNumber: j,
                isString: I,
                merge: B,
                objectEach: R,
                pick: N,
                removeEvent: z,
                splat: W,
                syncTimeout: H
            } = h;
            class G {
                constructor() {
                    this.zoneAxis = "y"
                }
                init(t, e) {
                    let i;
                    P(this, "init", {
                        options: e
                    });
                    let s = this,
                        r = t.series;
                    this.eventsToUnbind = [], s.chart = t, s.options = s.setOptions(e);
                    let o = s.options,
                        a = !1 !== o.visible;
                    s.linkedSeries = [], s.bindAxes(), A(s, {
                        name: o.name,
                        state: "",
                        visible: a,
                        selected: !0 === o.selected
                    }), u(this, o);
                    let n = o.events;
                    (n && n.click || o.point && o.point.events && o.point.events.click || o.allowPointSelect) && (t.runTrackerClick = !0), s.getColor(), s.getSymbol(), s.parallelArrays.forEach((function(t) {
                        s[t + "Data"] || (s[t + "Data"] = [])
                    })), s.isCartesian && (t.hasCartesianSeries = !0), r.length && (i = r[r.length - 1]), s._i = N(i && i._i, -1) + 1, s.opacity = s.options.opacity, t.orderItems("series", E(this, r)), o.dataSorting && o.dataSorting.enabled ? s.setDataSortingOptions() : s.points || s.data || s.setData(o.data, !1), P(this, "afterInit")
                }
                is(t) {
                    return m[t] && this instanceof m[t]
                }
                bindAxes() {
                    let t, e = this,
                        i = e.options,
                        s = e.chart;
                    P(this, "bindAxes", null, (function() {
                        (e.axisTypes || []).forEach((function(r) {
                            s[r].forEach((function(s) {
                                t = s.options, (N(i[r], 0) === s.index || void 0 !== i[r] && i[r] === t.id) && (E(e, s.series), e[r] = s, s.isDirty = !0)
                            })), e[r] || e.optionalAxis === r || M(18, !0, s)
                        }))
                    })), P(this, "afterBindAxes")
                }
                updateParallelArrays(t, e, i) {
                    let s = t.series,
                        r = j(e) ? function(i) {
                            let r = "y" === i && s.toYData ? s.toYData(t) : t[i];
                            s[i + "Data"][e] = r
                        } : function(t) {
                            Array.prototype[e].apply(s[t + "Data"], i)
                        };
                    s.parallelArrays.forEach(r)
                }
                hasData() {
                    return this.visible && void 0 !== this.dataMax && void 0 !== this.dataMin || this.visible && this.yData && this.yData.length > 0
                }
                hasMarkerChanged(t, e) {
                    let i = t.marker,
                        s = e.marker || {};
                    return i && (s.enabled && !i.enabled || s.symbol !== i.symbol || s.height !== i.height || s.width !== i.width)
                }
                autoIncrement(t) {
                    let e, i, s = this.options,
                        r = s.pointIntervalUnit,
                        o = s.relativeXValue,
                        a = this.chart.time,
                        n = this.xIncrement;
                    return n = N(n, s.pointStart, 0), this.pointInterval = i = N(this.pointInterval, s.pointInterval, 1), o && j(t) && (i *= t), r && (e = new a.Date(n), "day" === r ? a.set("Date", e, a.get("Date", e) + i) : "month" === r ? a.set("Month", e, a.get("Month", e) + i) : "year" === r && a.set("FullYear", e, a.get("FullYear", e) + i), i = e.getTime() - n), o && j(t) ? n + i : (this.xIncrement = n + i, n)
                }
                setDataSortingOptions() {
                    let t = this.options;
                    A(this, {
                        requireSorting: !1,
                        sorted: !1,
                        enabledDataSorting: !0,
                        allowDG: !1
                    }), k(t.pointRange) || (t.pointRange = 1)
                }
                setOptions(t) {
                    var e, i;
                    let s, r = this.chart,
                        o = r.options.plotOptions,
                        a = r.userOptions || {},
                        n = B(t),
                        l = r.styledMode,
                        h = {
                            plotOptions: o,
                            userOptions: n
                        };
                    P(this, "setOptions", h);
                    let d = h.plotOptions[this.type],
                        c = a.plotOptions || {},
                        u = c.series || {},
                        g = p.plotOptions[this.type] || {},
                        f = c[this.type] || {};
                    this.userOptions = h.userOptions;
                    let m = B(d, o.series, f, n);
                    this.tooltipOptions = B(p.tooltip, null == (e = p.plotOptions.series) ? void 0 : e.tooltip, null == g ? void 0 : g.tooltip, r.userOptions.tooltip, null == (i = c.series) ? void 0 : i.tooltip, f.tooltip, n.tooltip), this.stickyTracking = N(n.stickyTracking, f.stickyTracking, u.stickyTracking, !!this.tooltipOptions.shared && !this.noSharedTooltip || m.stickyTracking), null === d.marker && delete m.marker, this.zoneAxis = m.zoneAxis || "y";
                    let x = this.zones = (m.zones || []).map((t => ({ ...t
                    })));
                    return (m.negativeColor || m.negativeFillColor) && !m.zones && (s = {
                        value: m[this.zoneAxis + "Threshold"] || m.threshold || 0,
                        className: "highcharts-negative"
                    }, l || (s.color = m.negativeColor, s.fillColor = m.negativeFillColor), x.push(s)), x.length && k(x[x.length - 1].value) && x.push(l ? {} : {
                        color: this.color,
                        fillColor: this.fillColor
                    }), P(this, "afterSetOptions", {
                        options: m
                    }), m
                }
                getName() {
                    return N(this.options.name, "Series " + (this.index + 1))
                }
                getCyclic(t, e, i) {
                    let s, r, o = this.chart,
                        a = `${t}Index`,
                        n = `${t}Counter`,
                        l = (null == i ? void 0 : i.length) || o.options.chart.colorCount;
                    !e && (k(r = N("color" === t ? this.options.colorIndex : void 0, this[a])) ? s = r : (o.series.length || (o[n] = 0), s = o[n] % l, o[n] += 1), i && (e = i[s])), void 0 !== s && (this[a] = s), this[t] = e
                }
                getColor() {
                    this.chart.styledMode ? this.getCyclic("color") : this.options.colorByPoint ? this.color = "#cccccc" : this.getCyclic("color", this.options.color || p.plotOptions[this.type].color, this.chart.options.colors)
                }
                getPointsCollection() {
                    return (this.hasGroupedData ? this.points : this.data) || []
                }
                getSymbol() {
                    let t = this.options.marker;
                    this.getCyclic("symbol", t.symbol, this.chart.options.symbols)
                }
                findPointIndex(t, e) {
                    let i, s, r, a = t.id,
                        n = t.x,
                        l = this.points,
                        h = this.options.dataSorting;
                    if (a) {
                        let t = this.chart.get(a);
                        t instanceof o && (i = t)
                    } else if (this.linkedParent || this.enabledDataSorting || this.options.relativeXValue) {
                        let e = e => !e.touched && e.index === t.index;
                        if (h && h.matchByName ? e = e => !e.touched && e.name === t.name : this.options.relativeXValue && (e = e => !e.touched && e.options.x === t.x), !(i = T(l, e))) return
                    }
                    return i && void 0 !== (r = i && i.index) && (s = !0), void 0 === r && j(n) && (r = this.xData.indexOf(n, e)), -1 !== r && void 0 !== r && this.cropped && (r = r >= this.cropStart ? r - this.cropStart : r), !s && j(r) && l[r] && l[r].touched && (r = void 0), r
                }
                updateData(t, e) {
                    let i, s, r, o, a = this.options,
                        n = a.dataSorting,
                        l = this.points,
                        h = [],
                        d = this.requireSorting,
                        c = t.length === l.length,
                        p = !0;
                    if (this.xIncrement = null, t.forEach((function(t, e) {
                            let s, r = k(t) && this.pointClass.prototype.optionsToObject.call({
                                    series: this
                                }, t) || {},
                                p = r.x;
                            r.id || j(p) ? (-1 === (s = this.findPointIndex(r, o)) || void 0 === s ? h.push(t) : l[s] && t !== a.data[s] ? (l[s].update(t, !1, null, !1), l[s].touched = !0, d && (o = s + 1)) : l[s] && (l[s].touched = !0), (!c || e !== s || n && n.enabled || this.hasDerivedData) && (i = !0)) : h.push(t)
                        }), this), i)
                        for (s = l.length; s--;)(r = l[s]) && !r.touched && r.remove && r.remove(!1, e);
                    else !c || n && n.enabled ? p = !1 : (t.forEach((function(t, e) {
                        t === l[e].y || l[e].destroyed || l[e].update(t, !1, null, !1)
                    })), h.length = 0);
                    return l.forEach((function(t) {
                        t && (t.touched = !1)
                    })), !!p && (h.forEach((function(t) {
                        this.addPoint(t, !1, null, null, !1)
                    }), this), null === this.xIncrement && this.xData && this.xData.length && (this.xIncrement = x(this.xData), this.autoIncrement()), !0)
                }
                setData(t, e = !0, i, s) {
                    var r;
                    let o, a, n, l, h = this,
                        d = h.points,
                        c = d && d.length || 0,
                        p = h.options,
                        u = h.chart,
                        g = p.dataSorting,
                        f = h.xAxis,
                        m = p.turboThreshold,
                        x = this.xData,
                        y = this.yData,
                        v = h.pointArrayMap,
                        b = v && v.length,
                        k = p.keys,
                        S = 0,
                        C = 1,
                        w = null;
                    u.options.chart.allowMutatingData || (p.data && delete h.options.data, h.userOptions.data && delete h.userOptions.data, l = B(!0, t));
                    let A = (t = l || t || []).length;
                    if (g && g.enabled && (t = this.sortData(t)), u.options.chart.allowMutatingData && !1 !== s && A && c && !h.cropped && !h.hasGroupedData && h.visible && !h.boosted && (n = this.updateData(t, i)), !n) {
                        if (h.xIncrement = null, h.colorCounter = 0, this.parallelArrays.forEach((function(t) {
                                h[t + "Data"].length = 0
                            })), m && A > m)
                            if (j(w = h.getFirstValidPoint(t)))
                                for (o = 0; o < A; o++) x[o] = this.autoIncrement(), y[o] = t[o];
                            else if (D(w))
                            if (b)
                                if (w.length === b)
                                    for (o = 0; o < A; o++) x[o] = this.autoIncrement(), y[o] = t[o];
                                else
                                    for (o = 0; o < A; o++) a = t[o], x[o] = a[0], y[o] = a.slice(1, b + 1);
                        else if (k && (S = k.indexOf("x"), C = k.indexOf("y"), S = S >= 0 ? S : 0, C = C >= 0 ? C : 1), 1 === w.length && (C = 0), S === C)
                            for (o = 0; o < A; o++) x[o] = this.autoIncrement(), y[o] = t[o][C];
                        else
                            for (o = 0; o < A; o++) a = t[o], x[o] = a[S], y[o] = a[C];
                        else M(12, !1, u);
                        else
                            for (o = 0; o < A; o++) a = {
                                series: h
                            }, h.pointClass.prototype.applyOptions.apply(a, [t[o]]), h.updateParallelArrays(a, o);
                        for (y && I(y[0]) && M(14, !0, u), h.data = [], h.options.data = h.userOptions.data = t, o = c; o--;) null == (r = d[o]) || r.destroy();
                        f && (f.minRange = f.userMinRange), h.isDirty = u.isDirtyBox = !0, h.isDirtyData = !!d, i = !1
                    }
                    "point" === p.legendType && (this.processData(), this.generatePoints()), e && u.redraw(i)
                }
                sortData(t) {
                    let e = this,
                        i = e.options.dataSorting.sortKey || "y",
                        s = function(t, e) {
                            return k(e) && t.pointClass.prototype.optionsToObject.call({
                                series: t
                            }, e) || {}
                        };
                    return t.forEach((function(i, r) {
                        t[r] = s(e, i), t[r].index = r
                    }), this), t.concat().sort(((t, e) => {
                        let s = O(i, t),
                            r = O(i, e);
                        return r < s ? -1 : r > s ? 1 : 0
                    })).forEach((function(t, e) {
                        t.x = e
                    }), this), e.linkedSeries && e.linkedSeries.forEach((function(e) {
                        let i = e.options,
                            r = i.data;
                        i.dataSorting && i.dataSorting.enabled || !r || (r.forEach((function(i, o) {
                            r[o] = s(e, i), t[o] && (r[o].x = t[o].x, r[o].index = o)
                        })), e.setData(r, !1))
                    })), t
                }
                getProcessedData(t) {
                    let e, i, s, r, o, a = this,
                        n = a.xAxis,
                        l = a.options,
                        h = l.cropThreshold,
                        d = t || a.getExtremesFromAll || l.getExtremesFromAll,
                        c = null == n ? void 0 : n.logarithmic,
                        p = a.isCartesian,
                        u = 0,
                        g = a.xData,
                        f = a.yData,
                        m = !1,
                        x = g.length;
                    n && (r = (s = n.getExtremes()).min, o = s.max, m = !(!n.categories || n.names.length)), p && a.sorted && !d && (!h || x > h || a.forceCrop) && (g[x - 1] < r || g[0] > o ? (g = [], f = []) : a.yData && (g[0] < r || g[x - 1] > o) && (g = (e = this.cropData(a.xData, a.yData, r, o)).xData, f = e.yData, u = e.start, i = !0));
                    let y = L([c ? g.map(c.log2lin) : g], (() => a.requireSorting && !m && M(15, !1, a.chart)));
                    return {
                        xData: g,
                        yData: f,
                        cropped: i,
                        cropStart: u,
                        closestPointRange: y
                    }
                }
                processData(t) {
                    let e = this.xAxis;
                    if (this.isCartesian && !this.isDirty && !e.isDirty && !this.yAxis.isDirty && !t) return !1;
                    let i = this.getProcessedData();
                    this.cropped = i.cropped, this.cropStart = i.cropStart, this.processedXData = i.xData, this.processedYData = i.yData, this.closestPointRange = this.basePointRange = i.closestPointRange, P(this, "afterProcessData")
                }
                cropData(t, e, i, s) {
                    let r, o, a = t.length,
                        n = 0,
                        l = a;
                    for (r = 0; r < a; r++)
                        if (t[r] >= i) {
                            n = Math.max(0, r - 1);
                            break
                        }
                    for (o = r; o < a; o++)
                        if (t[o] > s) {
                            l = o + 1;
                            break
                        }
                    return {
                        xData: t.slice(n, l),
                        yData: e.slice(n, l),
                        start: n,
                        end: l
                    }
                }
                generatePoints() {
                    let t, e, i, s, r = this.options,
                        o = this.processedData || r.data,
                        a = this.processedXData,
                        n = this.processedYData,
                        l = this.pointClass,
                        h = a.length,
                        d = this.cropStart || 0,
                        c = this.hasGroupedData,
                        p = r.keys,
                        u = [],
                        g = r.dataGrouping && r.dataGrouping.groupAll ? d : 0,
                        f = this.data;
                    if (!f && !c) {
                        let t = [];
                        t.length = o.length, f = this.data = t
                    }
                    for (p && c && (this.options.keys = !1), s = 0; s < h; s++) e = d + s, c ? ((i = new l(this, [a[s]].concat(W(n[s])))).dataGroup = this.groupMap[g + s], i.dataGroup.options && (i.options = i.dataGroup.options, A(i, i.dataGroup.options), delete i.dataLabels)) : (i = f[e]) || void 0 === o[e] || (f[e] = i = new l(this, o[e], a[s])), i && (i.index = c ? g + s : e, u[s] = i);
                    if (this.options.keys = p, f && (h !== (t = f.length) || c))
                        for (s = 0; s < t; s++) s !== d || c || (s += h), f[s] && (f[s].destroyElements(), f[s].plotX = void 0);
                    this.data = f, this.points = u, P(this, "afterGeneratePoints")
                }
                getXExtremes(t) {
                    return {
                        min: y(t),
                        max: x(t)
                    }
                }
                getExtremes(t, e) {
                    let i, s, r, o, a, n, l, h = this.xAxis,
                        d = this.yAxis,
                        c = this.processedXData || this.xData,
                        p = [],
                        u = this.requireSorting && !this.is("column") ? 1 : 0,
                        g = !!d && d.positiveValuesOnly,
                        f = 0,
                        m = 0,
                        v = 0,
                        b = (t = t || this.stackedYData || this.processedYData || []).length;
                    for (h && (f = (i = h.getExtremes()).min, m = i.max), n = 0; n < b; n++)
                        if (o = c[n], s = (j(a = t[n]) || D(a)) && ((j(a) ? a > 0 : a.length) || !g), r = e || this.getExtremesFromAll || this.options.getExtremesFromAll || this.cropped || !h || (c[n + u] || o) >= f && (c[n - u] || o) <= m, s && r)
                            if (l = a.length)
                                for (; l--;) j(a[l]) && (p[v++] = a[l]);
                            else p[v++] = a;
                    let k = {
                        activeYData: p,
                        dataMin: y(p),
                        dataMax: x(p)
                    };
                    return P(this, "afterGetExtremes", {
                        dataExtremes: k
                    }), k
                }
                applyExtremes() {
                    let t = this.getExtremes();
                    return this.dataMin = t.dataMin, this.dataMax = t.dataMax, t
                }
                getFirstValidPoint(t) {
                    let e = t.length,
                        i = 0,
                        s = null;
                    for (; null === s && i < e;) s = t[i], i++;
                    return s
                }
                translate() {
                    var t;
                    this.processedXData || this.processData(), this.generatePoints();
                    let e, i, s, r, o = this.options,
                        a = o.stacking,
                        n = this.xAxis,
                        l = n.categories,
                        h = this.enabledDataSorting,
                        d = this.yAxis,
                        c = this.points,
                        p = c.length,
                        u = this.pointPlacementToXValue(),
                        g = !!u,
                        f = o.threshold,
                        m = o.startFromThreshold ? f : 0,
                        x = Number.MAX_VALUE;

                    function y(t) {
                        return v(t, -1e5, 1e5)
                    }
                    for (e = 0; e < p; e++) {
                        let o, p, v, S = c[e],
                            C = S.x,
                            w = S.y,
                            M = S.low,
                            A = a && (null == (t = d.stacking) ? void 0 : t.stacks[(this.negStacks && w < (m ? 0 : f) ? "-" : "") + this.stackKey]);
                        i = n.translate(C, !1, !1, !1, !0, u), S.plotX = j(i) ? b(y(i)) : void 0, a && this.visible && A && A[C] && (r = this.getStackIndicator(r, C, this.index), !S.isNull && r.key && (v = (p = A[C]).points[r.key]), p && D(v) && (M = v[0], w = v[1], M === m && r.key === A[C].base && (M = N(j(f) ? f : d.min)), d.positiveValuesOnly && k(M) && M <= 0 && (M = void 0), S.total = S.stackTotal = N(p.total), S.percentage = k(S.y) && p.total ? S.y / p.total * 100 : void 0, S.stackY = w, this.irregularWidths || p.setOffset(this.pointXOffset || 0, this.barW || 0, void 0, void 0, void 0, this.xAxis))), S.yBottom = k(M) ? y(d.translate(M, !1, !0, !1, !0)) : void 0, this.dataModify && (w = this.dataModify.modifyValue(w, e)), j(w) && void 0 !== S.plotX && (o = j(o = d.translate(w, !1, !0, !1, !0)) ? y(o) : void 0), S.plotY = o, S.isInside = this.isPointInside(S), S.clientX = g ? b(n.translate(C, !1, !1, !1, !0, u)) : i, S.negative = (S.y || 0) < (f || 0), S.category = N(l && l[S.x], S.x), S.isNull || !1 === S.visible || (void 0 !== s && (x = Math.min(x, Math.abs(i - s))), s = i), S.zone = this.zones.length ? S.getZone() : void 0, !S.graphic && this.group && h && (S.isNew = !0)
                    }
                    this.closestPointRangePx = x, P(this, "afterTranslate")
                }
                getValidPoints(t, e, i) {
                    let s = this.chart;
                    return (t || this.points || []).filter((function(t) {
                        let {
                            plotX: r,
                            plotY: o
                        } = t;
                        return !(!(i || !t.isNull && j(o)) || e && !s.isInsidePlot(r, o, {
                            inverted: s.inverted
                        })) && !1 !== t.visible
                    }))
                }
                getClipBox() {
                    let {
                        chart: t,
                        xAxis: e,
                        yAxis: i
                    } = this, {
                        x: s,
                        y: r,
                        width: o,
                        height: a
                    } = B(t.clipBox);
                    return e && e.len !== t.plotSizeX && (o = e.len), i && i.len !== t.plotSizeY && (a = i.len), t.inverted && !this.invertible && ([o, a] = [a, o]), {
                        x: s,
                        y: r,
                        width: o,
                        height: a
                    }
                }
                getSharedClipKey() {
                    return this.sharedClipKey = (this.options.xAxis || 0) + "," + (this.options.yAxis || 0), this.sharedClipKey
                }
                setClip() {
                    let {
                        chart: t,
                        group: e,
                        markerGroup: i
                    } = this, s = t.sharedClips, r = t.renderer, o = this.getClipBox(), a = this.getSharedClipKey(), n = s[a];
                    n ? n.animate(o) : s[a] = n = r.clipRect(o), e && e.clip(!1 === this.options.clip ? void 0 : n), i && i.clip()
                }
                animate(t) {
                    let {
                        chart: e,
                        group: i,
                        markerGroup: s
                    } = this, r = e.inverted, o = d(this.options.animation), a = [this.getSharedClipKey(), o.duration, o.easing, o.defer].join(","), n = e.sharedClips[a], l = e.sharedClips[a + "m"];
                    if (t && i) {
                        let t = this.getClipBox();
                        if (n) n.attr("height", t.height);
                        else {
                            t.width = 0, r && (t.x = e.plotHeight), n = e.renderer.clipRect(t), e.sharedClips[a] = n;
                            let i = {
                                x: -99,
                                y: -99,
                                width: r ? e.plotWidth + 199 : 99,
                                height: r ? 99 : e.plotHeight + 199
                            };
                            l = e.renderer.clipRect(i), e.sharedClips[a + "m"] = l
                        }
                        i.clip(n), null == s || s.clip(l)
                    } else if (n && !n.hasClass("highcharts-animating")) {
                        let t = this.getClipBox(),
                            i = o.step;
                        ((null == s ? void 0 : s.element.childNodes.length) || e.series.length > 1) && (o.step = function(t, e) {
                            i && i.apply(e, arguments), "width" === e.prop && (null == l ? void 0 : l.element) && l.attr(r ? "height" : "width", t + 99)
                        }), n.addClass("highcharts-animating").animate(t, o)
                    }
                }
                afterAnimate() {
                    this.setClip(), R(this.chart.sharedClips, ((t, e, i) => {
                        t && !this.chart.container.querySelector(`[clip-path="url(#${t.id})"]`) && (t.destroy(), delete i[e])
                    })), this.finishedAnimating = !0, P(this, "afterAnimate")
                }
                drawPoints(t = this.points) {
                    let e, i, s, r, o, a, n, l = this.chart,
                        h = l.styledMode,
                        {
                            colorAxis: d,
                            options: c
                        } = this,
                        p = c.marker,
                        u = this[this.specialGroup || "markerGroup"],
                        g = this.xAxis,
                        f = N(p.enabled, !g || !!g.isRadial || null, this.closestPointRangePx >= p.enabledThreshold * p.radius);
                    if (!1 !== p.enabled || this._hasPointMarkers)
                        for (e = 0; e < t.length; e++)
                            if (r = (s = (i = t[e]).graphic) ? "animate" : "attr", o = i.marker || {}, a = !!i.marker, (f && void 0 === o.enabled || o.enabled) && !i.isNull && !1 !== i.visible) {
                                let t = N(o.symbol, this.symbol, "rect");
                                n = this.markerAttribs(i, i.selected && "select"), this.enabledDataSorting && (i.startXPos = g.reversed ? -(n.width || 0) : g.width);
                                let e = !1 !== i.isInside;
                                if (!s && e && ((n.width || 0) > 0 || i.hasImage) && (i.graphic = s = l.renderer.symbol(t, n.x, n.y, n.width, n.height, a ? o : p).add(u), this.enabledDataSorting && l.hasRendered && (s.attr({
                                        x: i.startXPos
                                    }), r = "animate")), s && "animate" === r && s[e ? "show" : "hide"](e).animate(n), s) {
                                    let t = this.pointAttribs(i, h || !i.selected ? void 0 : "select");
                                    h ? d && s.css({
                                        fill: t.fill
                                    }) : s[r](t)
                                }
                                s && s.addClass(i.getClassName(), !0)
                            } else s && (i.graphic = s.destroy())
                }
                markerAttribs(t, e) {
                    let i, s, r = this.options,
                        o = r.marker,
                        a = t.marker || {},
                        n = a.symbol || o.symbol,
                        l = {},
                        h = N(a.radius, o && o.radius);
                    e && (i = o.states[e], h = N((s = a.states && a.states[e]) && s.radius, i && i.radius, h && h + (i && i.radiusPlus || 0))), t.hasImage = n && 0 === n.indexOf("url"), t.hasImage && (h = 0);
                    let d = t.pos();
                    return j(h) && d && (l.x = d[0] - h, l.y = d[1] - h, r.crisp && (l.x = Math.floor(l.x))), h && (l.width = l.height = 2 * h), l
                }
                pointAttribs(t, e) {
                    let i, s, r, o, a = this.options.marker,
                        n = t && t.options,
                        l = n && n.marker || {},
                        h = n && n.color,
                        d = t && t.color,
                        c = t && t.zone && t.zone.color,
                        p = this.color,
                        u = N(l.lineWidth, a.lineWidth),
                        g = 1;
                    return p = h || c || d || p, r = l.fillColor || a.fillColor || p, o = l.lineColor || a.lineColor || p, e = e || "normal", i = a.states[e] || {}, u = N((s = l.states && l.states[e] || {}).lineWidth, i.lineWidth, u + N(s.lineWidthPlus, i.lineWidthPlus, 0)), r = s.fillColor || i.fillColor || r, {
                        stroke: o = s.lineColor || i.lineColor || o,
                        "stroke-width": u,
                        fill: r,
                        opacity: g = N(s.opacity, i.opacity, g)
                    }
                }
                destroy(t) {
                    let e, i, s, r = this,
                        o = r.chart,
                        a = /AppleWebKit\/533/.test(f.navigator.userAgent),
                        n = r.data || [];
                    for (P(r, "destroy", {
                            keepEventsForUpdate: t
                        }), this.removeEvents(t), (r.axisTypes || []).forEach((function(t) {
                            (s = r[t]) && s.series && (w(s.series, r), s.isDirty = s.forceRedraw = !0)
                        })), r.legendItem && r.chart.legend.destroyItem(r), e = n.length; e--;)(i = n[e]) && i.destroy && i.destroy();
                    for (let l of r.zones) S(l, void 0, !0);
                    h.clearTimeout(r.animationTimeout), R(r, (function(t, e) {
                        t instanceof l && !t.survive && t[a && "group" === e ? "hide" : "destroy"]()
                    })), o.hoverSeries === r && (o.hoverSeries = void 0), w(o.series, r), o.orderItems("series"), R(r, (function(e, i) {
                        t && "hcEvents" === i || delete r[i]
                    }))
                }
                applyZones() {
                    let {
                        area: t,
                        chart: e,
                        graph: i,
                        zones: s,
                        points: r,
                        xAxis: o,
                        yAxis: a,
                        zoneAxis: n
                    } = this, {
                        inverted: l,
                        renderer: h
                    } = e, d = this[`${n}Axis`], {
                        isXAxis: c,
                        len: p = 0
                    } = d || {}, u = ((null == i ? void 0 : i.strokeWidth()) || 0) / 2 + 1, g = (t, e = 0, i = 0) => {
                        l && (i = p - i);
                        let {
                            translated: s = 0,
                            lineClip: r
                        } = t, o = i - s;
                        null == r || r.push(["L", e, Math.abs(o) < u ? i - u * (o <= 0 ? -1 : 1) : s])
                    };
                    if (s.length && (i || t) && d && j(d.min)) {
                        let e = d.getExtremes().max,
                            u = t => {
                                t.forEach(((e, i) => {
                                    ("M" === e[0] || "L" === e[0]) && (t[i] = [e[0], c ? p - e[1] : e[1], c ? e[2] : p - e[2]])
                                }))
                            };
                        if (s.forEach((t => {
                                t.lineClip = [], t.translated = v(d.toPixels(N(t.value, e), !0) || 0, 0, p)
                            })), i && !this.showLine && i.hide(), t && t.hide(), "y" === n && r.length < o.len)
                            for (let t of r) {
                                let {
                                    plotX: e,
                                    plotY: i,
                                    zone: r
                                } = t, o = r && s[s.indexOf(r) - 1];
                                r && g(r, e, i), o && g(o, e, i)
                            }
                        let f = [],
                            m = d.toPixels(d.getExtremes().min, !0);
                        s.forEach((e => {
                            var s, r;
                            let n = e.lineClip || [],
                                d = Math.round(e.translated || 0);
                            o.reversed && n.reverse();
                            let {
                                clip: p,
                                simpleClip: g
                            } = e, x = 0, y = 0, v = o.len, b = a.len;
                            c ? (x = d, v = m) : (y = d, b = m);
                            let k = [
                                    ["M", x, y],
                                    ["L", v, y],
                                    ["L", v, b],
                                    ["L", x, b],
                                    ["Z"]
                                ],
                                S = [k[0], ...n, k[1], k[2], ...f, k[3], k[4]];
                            f = n.reverse(), m = d, l && (u(S), t && u(k)), p ? (p.animate({
                                d: S
                            }), null == g || g.animate({
                                d: k
                            })) : (p = e.clip = h.path(S), t && (g = e.simpleClip = h.path(k))), i && (null == (s = e.graph) || s.clip(p)), t && (null == (r = e.area) || r.clip(g))
                        }))
                    } else this.visible && (i && i.show(), t && t.show())
                }
                plotGroup(t, e, i, s, r) {
                    let o = this[t],
                        a = !o,
                        n = {
                            visibility: i,
                            zIndex: s || .1
                        };
                    return k(this.opacity) && !this.chart.styledMode && "inactive" !== this.state && (n.opacity = this.opacity), o || (this[t] = o = this.chart.renderer.g().add(r)), o.addClass("highcharts-" + e + " highcharts-series-" + this.index + " highcharts-" + this.type + "-series " + (k(this.colorIndex) ? "highcharts-color-" + this.colorIndex + " " : "") + (this.options.className || "") + (o.hasClass("highcharts-tracker") ? " highcharts-tracker" : ""), !0), o.attr(n)[a ? "attr" : "animate"](this.getPlotBox(e)), o
                }
                getPlotBox(t) {
                    let e = this.xAxis,
                        i = this.yAxis,
                        s = this.chart,
                        r = s.inverted && !s.polar && e && this.invertible && "series" === t;
                    return s.inverted && (e = i, i = this.xAxis), {
                        translateX: e ? e.left : s.plotLeft,
                        translateY: i ? i.top : s.plotTop,
                        rotation: r ? 90 : 0,
                        rotationOriginX: r ? (e.len - i.len) / 2 : 0,
                        rotationOriginY: r ? (e.len + i.len) / 2 : 0,
                        scaleX: r ? -1 : 1,
                        scaleY: 1
                    }
                }
                removeEvents(t) {
                    let {
                        eventsToUnbind: e
                    } = this;
                    t || z(this), e.length && (e.forEach((t => {
                        t()
                    })), e.length = 0)
                }
                render() {
                    var t, e, i, s, r;
                    let o = this,
                        {
                            chart: a,
                            options: n,
                            hasRendered: l
                        } = o,
                        h = d(n.animation),
                        c = o.visible ? "inherit" : "hidden",
                        p = n.zIndex,
                        u = a.seriesGroup,
                        g = o.finishedAnimating ? 0 : h.duration;
                    P(this, "render"), o.plotGroup("group", "series", c, p, u), o.markerGroup = o.plotGroup("markerGroup", "markers", c, p, u), !1 !== n.clip && o.setClip(), g && (null == (t = o.animate) || t.call(o, !0)), o.drawGraph && (o.drawGraph(), o.applyZones()), o.visible && o.drawPoints(), null == (e = o.drawDataLabels) || e.call(o), null == (i = o.redrawPoints) || i.call(o), n.enableMouseTracking && (null == (s = o.drawTracker) || s.call(o)), g && (null == (r = o.animate) || r.call(o)), l || (g && h.defer && (g += h.defer), o.animationTimeout = H((() => {
                        o.afterAnimate()
                    }), g || 0)), o.isDirty = !1, o.hasRendered = !0, P(o, "afterRender")
                }
                redraw() {
                    let t = this.isDirty || this.isDirtyData;
                    this.translate(), this.render(), t && delete this.kdTree
                }
                reserveSpace() {
                    return this.visible || !this.chart.options.chart.ignoreHiddenSeries
                }
                searchPoint(t, e) {
                    let {
                        xAxis: i,
                        yAxis: s
                    } = this, r = this.chart.inverted;
                    return this.searchKDTree({
                        clientX: r ? i.len - t.chartY + i.pos : t.chartX - i.pos,
                        plotY: r ? s.len - t.chartX + s.pos : t.chartY - s.pos
                    }, e, t)
                }
                buildKDTree(t) {
                    this.buildingKdTree = !0;
                    let e = this,
                        i = e.options.findNearestPointBy.indexOf("y") > -1 ? 2 : 1;
                    delete e.kdTree, H((function() {
                        e.kdTree = function t(i, s, r) {
                            let o, a, n = null == i ? void 0 : i.length;
                            if (n) return o = e.kdAxisArray[s % r], i.sort(((t, e) => (t[o] || 0) - (e[o] || 0))), {
                                point: i[a = Math.floor(n / 2)],
                                left: t(i.slice(0, a), s + 1, r),
                                right: t(i.slice(a + 1), s + 1, r)
                            }
                        }(e.getValidPoints(void 0, !e.directTouch), i, i), e.buildingKdTree = !1
                    }), e.options.kdNow || "touchstart" === (null == t ? void 0 : t.type) ? 0 : 1)
                }
                searchKDTree(t, e, i) {
                    let s = this,
                        [r, o] = this.kdAxisArray,
                        a = e ? "distX" : "dist",
                        n = (s.options.findNearestPointBy || "").indexOf("y") > -1 ? 2 : 1,
                        l = !!s.isBubble;
                    if (this.kdTree || this.buildingKdTree || this.buildKDTree(i), this.kdTree) return function t(e, i, n, h) {
                        var d;
                        let c, p, u = i.point,
                            g = s.kdAxisArray[n % h],
                            f = u;
                        ! function(t, e) {
                            var i;
                            let s = t[r],
                                a = e[r],
                                n = k(s) && k(a) ? s - a : null,
                                h = t[o],
                                d = e[o],
                                c = k(h) && k(d) ? h - d : 0,
                                p = l && (null == (i = e.marker) ? void 0 : i.radius) || 0;
                            e.dist = Math.sqrt((n && n * n || 0) + c * c) - p, e.distX = k(n) ? Math.abs(n) - p : Number.MAX_VALUE
                        }(e, u);
                        let m = (e[g] || 0) - (u[g] || 0) + (l && (null == (d = u.marker) ? void 0 : d.radius) || 0),
                            x = m < 0 ? "left" : "right",
                            y = m < 0 ? "right" : "left";
                        return i[x] && (f = (c = t(e, i[x], n + 1, h))[a] < f[a] ? c : u), i[y] && Math.sqrt(m * m) < f[a] && (f = (p = t(e, i[y], n + 1, h))[a] < f[a] ? p : f), f
                    }(t, this.kdTree, n, n)
                }
                pointPlacementToXValue() {
                    let {
                        options: t,
                        xAxis: e
                    } = this, i = t.pointPlacement;
                    return "between" === i && (i = e.reversed ? -.5 : .5), j(i) ? i * (t.pointRange || e.pointRange) : 0
                }
                isPointInside(t) {
                    let {
                        chart: e,
                        xAxis: i,
                        yAxis: s
                    } = this, {
                        plotX: r = -1,
                        plotY: o = -1
                    } = t;
                    return o >= 0 && o <= (s ? s.len : e.plotHeight) && r >= 0 && r <= (i ? i.len : e.plotWidth)
                }
                drawTracker() {
                    var t;
                    let e = this,
                        i = e.options,
                        s = i.trackByArea,
                        r = [].concat((s ? e.areaPath : e.graphPath) || []),
                        o = e.chart,
                        a = o.pointer,
                        n = o.renderer,
                        l = (null == (t = o.options.tooltip) ? void 0 : t.snap) || 0,
                        h = () => {
                            i.enableMouseTracking && o.hoverSeries !== e && e.onMouseOver()
                        },
                        d = "rgba(192,192,192," + (g ? 1e-4 : .002) + ")",
                        c = e.tracker;
                    c ? c.attr({
                        d: r
                    }) : e.graph && (e.tracker = c = n.path(r).attr({
                        visibility: e.visible ? "inherit" : "hidden",
                        zIndex: 2
                    }).addClass(s ? "highcharts-tracker-area" : "highcharts-tracker-line").add(e.group), o.styledMode || c.attr({
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        stroke: d,
                        fill: s ? d : "none",
                        "stroke-width": e.graph.strokeWidth() + (s ? 0 : 2 * l)
                    }), [e.tracker, e.markerGroup, e.dataLabelsGroup].forEach((t => {
                        t && (t.addClass("highcharts-tracker").on("mouseover", h).on("mouseout", (t => {
                            null == a || a.onTrackerMouseOut(t)
                        })), i.cursor && !o.styledMode && t.css({
                            cursor: i.cursor
                        }), t.on("touchstart", h))
                    }))), P(this, "afterDrawTracker")
                }
                addPoint(t, e, i, s, r) {
                    let o, a, n = this.options,
                        l = this.data,
                        h = this.chart,
                        d = this.xAxis,
                        c = d && d.hasNames && d.names,
                        p = n.data,
                        u = this.xData;
                    e = N(e, !0);
                    let g = {
                        series: this
                    };
                    this.pointClass.prototype.applyOptions.apply(g, [t]);
                    let f = g.x;
                    if (a = u.length, this.requireSorting && f < u[a - 1])
                        for (o = !0; a && u[a - 1] > f;) a--;
                    this.updateParallelArrays(g, "splice", [a, 0, 0]), this.updateParallelArrays(g, a), c && g.name && (c[f] = g.name), p.splice(a, 0, t), (o || this.processedData) && (this.data.splice(a, 0, null), this.processData()), "point" === n.legendType && this.generatePoints(), i && (l[0] && l[0].remove ? l[0].remove(!1) : (l.shift(), this.updateParallelArrays(g, "shift"), p.shift())), !1 !== r && P(this, "addPoint", {
                        point: g
                    }), this.isDirty = !0, this.isDirtyData = !0, e && h.redraw(s)
                }
                removePoint(t, e, i) {
                    let s = this,
                        r = s.data,
                        o = r[t],
                        a = s.points,
                        n = s.chart,
                        l = function() {
                            a && a.length === r.length && a.splice(t, 1), r.splice(t, 1), s.options.data.splice(t, 1), s.updateParallelArrays(o || {
                                series: s
                            }, "splice", [t, 1]), o && o.destroy(), s.isDirty = !0, s.isDirtyData = !0, e && n.redraw()
                        };
                    c(i, n), e = N(e, !0), o ? o.firePointEvent("remove", null, l) : l()
                }
                remove(t, e, i, s) {
                    let r = this,
                        o = r.chart;

                    function a() {
                        r.destroy(s), o.isDirtyLegend = o.isDirtyBox = !0, o.linkSeries(s), N(t, !0) && o.redraw(e)
                    }!1 !== i ? P(r, "remove", null, a) : a()
                }
                update(t, e) {
                    var i, s, r;
                    P(this, "update", {
                        options: t = C(t, this.userOptions)
                    });
                    let o, a, n = this,
                        l = n.chart,
                        h = n.userOptions,
                        d = n.initialType || n.type,
                        c = l.options.plotOptions,
                        p = m[d].prototype,
                        u = n.finishedAnimating && {
                            animation: !1
                        },
                        g = {},
                        f = ["colorIndex", "eventOptions", "navigatorSeries", "symbolIndex", "baseSeries"],
                        x = t.type || h.type || l.options.chart.type,
                        y = !(this.hasDerivedData || x && x !== this.type || void 0 !== t.pointStart || void 0 !== t.pointInterval || void 0 !== t.relativeXValue || t.joinBy || t.mapData || ["dataGrouping", "pointStart", "pointInterval", "pointIntervalUnit", "keys"].some((t => n.hasOptionChanged(t))));
                    x = x || d, y && (f.push("data", "isDirtyData", "isDirtyCanvas", "points", "processedData", "processedXData", "processedYData", "xIncrement", "cropped", "_hasPointMarkers", "hasDataLabels", "nodes", "layout", "level", "mapMap", "mapData", "minY", "maxY", "minX", "maxX", "transformGroups"), !1 !== t.visible && f.push("area", "graph"), n.parallelArrays.forEach((function(t) {
                        f.push(t + "Data")
                    })), t.data && (t.dataSorting && A(n.options.dataSorting, t.dataSorting), this.setData(t.data, !1))), t = B(h, {
                        index: void 0 === h.index ? n.index : h.index,
                        pointStart: (null == (i = null == c ? void 0 : c.series) ? void 0 : i.pointStart) ? ? h.pointStart ? ? (null == (s = n.xData) ? void 0 : s[0])
                    }, !y && {
                        data: n.options.data
                    }, t, u), y && t.data && (t.data = n.options.data), (f = ["group", "markerGroup", "dataLabelsGroup", "transformGroup"].concat(f)).forEach((function(t) {
                        f[t] = n[t], delete n[t]
                    }));
                    let v = !1;
                    if (m[x]) {
                        if (v = x !== n.type, n.remove(!1, !1, !1, !0), v)
                            if (l.propFromSeries(), Object.setPrototypeOf) Object.setPrototypeOf(n, m[x].prototype);
                            else {
                                let t = Object.hasOwnProperty.call(n, "hcEvents") && n.hcEvents;
                                for (a in p) n[a] = void 0;
                                A(n, m[x].prototype), t ? n.hcEvents = t : delete n.hcEvents
                            }
                    } else M(17, !0, l, {
                        missingModuleFor: x
                    });
                    if (f.forEach((function(t) {
                            n[t] = f[t]
                        })), n.init(l, t), y && this.points)
                        for (let m of (!1 === (o = n.options).visible ? (g.graphic = 1, g.dataLabel = 1) : (this.hasMarkerChanged(o, h) && (g.graphic = 1), (null == (r = n.hasDataLabels) ? void 0 : r.call(n)) || (g.dataLabel = 1)), this.points)) m && m.series && (m.resolveColor(), Object.keys(g).length && m.destroyElements(g), !1 === o.showInLegend && m.legendItem && l.legend.destroyItem(m));
                    n.initialType = d, l.linkSeries(), l.setSortedData(), v && n.linkedSeries.length && (n.isDirtyData = !0), P(this, "afterUpdate"), N(e, !0) && l.redraw(!!y && void 0)
                }
                setName(t) {
                    this.name = this.options.name = this.userOptions.name = t, this.chart.isDirtyLegend = !0
                }
                hasOptionChanged(t) {
                    var e, i;
                    let s = this.chart,
                        r = this.options[t],
                        o = s.options.plotOptions,
                        a = this.userOptions[t],
                        n = N(null == (e = null == o ? void 0 : o[this.type]) ? void 0 : e[t], null == (i = null == o ? void 0 : o.series) ? void 0 : i[t]);
                    return a && !k(n) ? r !== a : r !== N(n, r)
                }
                onMouseOver() {
                    let t = this.chart,
                        e = t.hoverSeries,
                        i = t.pointer;
                    null == i || i.setHoverChartIndex(), e && e !== this && e.onMouseOut(), this.options.events.mouseOver && P(this, "mouseOver"), this.setState("hover"), t.hoverSeries = this
                }
                onMouseOut() {
                    let t = this.options,
                        e = this.chart,
                        i = e.tooltip,
                        s = e.hoverPoint;
                    e.hoverSeries = null, s && s.onMouseOut(), this && t.events.mouseOut && P(this, "mouseOut"), i && !this.stickyTracking && (!i.shared || this.noSharedTooltip) && i.hide(), e.series.forEach((function(t) {
                        t.setState("", !0)
                    }))
                }
                setState(t, e) {
                    let i = this,
                        s = i.options,
                        r = i.graph,
                        o = s.inactiveOtherPoints,
                        a = s.states,
                        n = N(a[t || "normal"] && a[t || "normal"].animation, i.chart.options.chart.animation),
                        l = s.lineWidth,
                        h = s.opacity;
                    if (t = t || "", i.state !== t && ([i.group, i.markerGroup, i.dataLabelsGroup].forEach((function(e) {
                            e && (i.state && e.removeClass("highcharts-series-" + i.state), t && e.addClass("highcharts-series-" + t))
                        })), i.state = t, !i.chart.styledMode)) {
                        if (a[t] && !1 === a[t].enabled) return;
                        if (t && (l = a[t].lineWidth || l + (a[t].lineWidthPlus || 0), h = N(a[t].opacity, h)), r && !r.dashstyle && j(l))
                            for (let t of [r, ...this.zones.map((t => t.graph))]) null == t || t.animate({
                                "stroke-width": l
                            }, n);
                        o || [i.group, i.markerGroup, i.dataLabelsGroup, i.labelBySeries].forEach((function(t) {
                            t && t.animate({
                                opacity: h
                            }, n)
                        }))
                    }
                    e && o && i.points && i.setAllPointsToState(t || void 0)
                }
                setAllPointsToState(t) {
                    this.points.forEach((function(e) {
                        e.setState && e.setState(t)
                    }))
                }
                setVisible(t, e) {
                    var i;
                    let s = this,
                        r = s.chart,
                        o = r.options.chart.ignoreHiddenSeries,
                        a = s.visible;
                    s.visible = t = s.options.visible = s.userOptions.visible = void 0 === t ? !a : t;
                    let n = t ? "show" : "hide";
                    ["group", "dataLabelsGroup", "markerGroup", "tracker", "tt"].forEach((t => {
                        var e;
                        null == (e = s[t]) || e[n]()
                    })), (r.hoverSeries === s || (null == (i = r.hoverPoint) ? void 0 : i.series) === s) && s.onMouseOut(), s.legendItem && r.legend.colorizeItem(s, t), s.isDirty = !0, s.options.stacking && r.series.forEach((t => {
                        t.options.stacking && t.visible && (t.isDirty = !0)
                    })), s.linkedSeries.forEach((e => {
                        e.setVisible(t, !1)
                    })), o && (r.isDirtyBox = !0), P(s, n), !1 !== e && r.redraw()
                }
                show() {
                    this.setVisible(!0)
                }
                hide() {
                    this.setVisible(!1)
                }
                select(t) {
                    this.selected = t = this.options.selected = void 0 === t ? !this.selected : t, this.checkbox && (this.checkbox.checked = t), P(this, t ? "select" : "unselect")
                }
                shouldShowTooltip(t, e, i = {}) {
                    return i.series = this, i.visiblePlotOnly = !0, this.chart.isInsidePlot(t, e, i)
                }
                drawLegendSymbol(t, e) {
                    var i;
                    null == (i = r[this.options.legendSymbol || "rectangle"]) || i.call(this, t, e)
                }
            }
            return G.defaultOptions = a, G.types = n.seriesTypes, G.registerType = n.registerSeriesType, A(G.prototype, {
                axisTypes: ["xAxis", "yAxis"],
                coll: "series",
                colorCounter: 0,
                directTouch: !1,
                invertible: !0,
                isCartesian: !0,
                kdAxisArray: ["clientX", "plotY"],
                parallelArrays: ["x", "y"],
                pointClass: o,
                requireSorting: !0,
                sorted: !0
            }), n.series = G, G
        })), i(e, "Core/Chart/Chart.js", [e["Core/Animation/AnimationUtilities.js"], e["Core/Axis/Axis.js"], e["Core/Defaults.js"], e["Core/Templating.js"], e["Core/Foundation.js"], e["Core/Globals.js"], e["Core/Renderer/RendererRegistry.js"], e["Core/Series/Series.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Renderer/SVG/SVGRenderer.js"], e["Core/Time.js"], e["Core/Utilities.js"], e["Core/Renderer/HTML/AST.js"], e["Core/Axis/Tick.js"]], (function(t, e, i, s, r, o, a, n, l, h, d, c, p, u) {
            let {
                animate: g,
                animObject: f,
                setAnimation: m
            } = t, {
                defaultOptions: x,
                defaultTime: y
            } = i, {
                numberFormat: v
            } = s, {
                registerEventOptions: b
            } = r, {
                charts: k,
                doc: S,
                marginNames: C,
                svg: w,
                win: M
            } = o, {
                seriesTypes: A
            } = l, {
                addEvent: T,
                attr: P,
                createElement: L,
                css: O,
                defined: E,
                diffObjects: D,
                discardElement: j,
                erase: I,
                error: B,
                extend: R,
                find: N,
                fireEvent: z,
                getStyle: W,
                isArray: H,
                isNumber: G,
                isObject: F,
                isString: _,
                merge: X,
                objectEach: Y,
                pick: U,
                pInt: V,
                relativeLength: $,
                removeEvent: q,
                splat: Z,
                syncTimeout: K,
                uniqueKey: J
            } = c;
            class Q {
                static chart(t, e, i) {
                    return new Q(t, e, i)
                }
                constructor(t, e, i) {
                    this.sharedClips = {};
                    let s = [...arguments];
                    (_(t) || t.nodeName) && (this.renderTo = s.shift()), this.init(s[0], s[1])
                }
                setZoomOptions() {
                    let t = this.options.chart,
                        e = t.zooming;
                    this.zooming = { ...e,
                        type: U(t.zoomType, e.type),
                        key: U(t.zoomKey, e.key),
                        pinchType: U(t.pinchType, e.pinchType),
                        singleTouch: U(t.zoomBySingleTouch, e.singleTouch, !1),
                        resetButton: X(e.resetButton, t.resetZoomButton)
                    }
                }
                init(t, e) {
                    z(this, "init", {
                        args: arguments
                    }, (function() {
                        let i = X(x, t),
                            s = i.chart;
                        this.userOptions = R({}, t), this.margin = [], this.spacing = [], this.labelCollectors = [], this.callback = e, this.isResizing = 0, this.options = i, this.axes = [], this.series = [], this.time = t.time && Object.keys(t.time).length ? new d(t.time) : o.time, this.numberFormatter = s.numberFormatter || v, this.styledMode = s.styledMode, this.hasCartesianSeries = s.showAxes, this.index = k.length, k.push(this), o.chartCount++, b(this, s), this.xAxis = [], this.yAxis = [], this.pointCount = this.colorCounter = this.symbolCounter = 0, this.setZoomOptions(), z(this, "afterInit"), this.firstRender()
                    }))
                }
                initSeries(t) {
                    let e = this.options.chart,
                        i = t.type || e.type,
                        s = A[i];
                    s || B(17, !0, this, {
                        missingModuleFor: i
                    });
                    let r = new s;
                    return "function" == typeof r.init && r.init(this, t), r
                }
                setSortedData() {
                    this.getSeriesOrderByLinks().forEach((function(t) {
                        t.points || t.data || !t.enabledDataSorting || t.setData(t.options.data, !1)
                    }))
                }
                getSeriesOrderByLinks() {
                    return this.series.concat().sort((function(t, e) {
                        return t.linkedSeries.length || e.linkedSeries.length ? e.linkedSeries.length - t.linkedSeries.length : 0
                    }))
                }
                orderItems(t, e = 0) {
                    let i = this[t],
                        s = this.options[t] = Z(this.options[t]).slice(),
                        r = this.userOptions[t] = this.userOptions[t] ? Z(this.userOptions[t]).slice() : [];
                    if (this.hasRendered && (s.splice(e), r.splice(e)), i)
                        for (let o = e, a = i.length; o < a; ++o) {
                            let t = i[o];
                            t && (t.index = o, t instanceof n && (t.name = t.getName()), t.options.isInternal || (s[o] = t.options, r[o] = t.userOptions))
                        }
                }
                isInsidePlot(t, e, i = {}) {
                    var s;
                    let {
                        inverted: r,
                        plotBox: o,
                        plotLeft: a,
                        plotTop: n,
                        scrollablePlotBox: l
                    } = this, {
                        scrollLeft: h = 0,
                        scrollTop: d = 0
                    } = i.visiblePlotOnly && (null == (s = this.scrollablePlotArea) ? void 0 : s.scrollingContainer) || {}, c = i.series, p = i.visiblePlotOnly && l || o, u = i.inverted ? e : t, g = i.inverted ? t : e, f = {
                        x: u,
                        y: g,
                        isInsidePlot: !0,
                        options: i
                    };
                    if (!i.ignoreX) {
                        let t = c && (r && !this.polar ? c.yAxis : c.xAxis) || {
                                pos: a,
                                len: 1 / 0
                            },
                            e = i.paneCoordinates ? t.pos + u : a + u;
                        e >= Math.max(h + a, t.pos) && e <= Math.min(h + a + p.width, t.pos + t.len) || (f.isInsidePlot = !1)
                    }
                    if (!i.ignoreY && f.isInsidePlot) {
                        let t = !r && i.axis && !i.axis.isXAxis && i.axis || c && (r ? c.xAxis : c.yAxis) || {
                                pos: n,
                                len: 1 / 0
                            },
                            e = i.paneCoordinates ? t.pos + g : n + g;
                        e >= Math.max(d + n, t.pos) && e <= Math.min(d + n + p.height, t.pos + t.len) || (f.isInsidePlot = !1)
                    }
                    return z(this, "afterIsInsidePlot", f), f.isInsidePlot
                }
                redraw(t) {
                    z(this, "beforeRedraw");
                    let e, i, s, r, o = this.hasCartesianSeries ? this.axes : this.colorAxis || [],
                        a = this.series,
                        n = this.pointer,
                        l = this.legend,
                        h = this.userOptions.legend,
                        d = this.renderer,
                        c = d.isHidden(),
                        p = [],
                        u = this.isDirtyBox,
                        g = this.isDirtyLegend;
                    for (d.rootFontSize = d.boxWrapper.getStyle("font-size"), this.setResponsive && this.setResponsive(!1), m(!!this.hasRendered && t, this), c && this.temporaryDisplay(), this.layOutTitles(!1), s = a.length; s--;)
                        if (((r = a[s]).options.stacking || r.options.centerInCategory) && (i = !0, r.isDirty)) {
                            e = !0;
                            break
                        }
                    if (e)
                        for (s = a.length; s--;)(r = a[s]).options.stacking && (r.isDirty = !0);
                    a.forEach((function(t) {
                        t.isDirty && ("point" === t.options.legendType ? ("function" == typeof t.updateTotals && t.updateTotals(), g = !0) : h && (h.labelFormatter || h.labelFormat) && (g = !0)), t.isDirtyData && z(t, "updatedData")
                    })), g && l && l.options.enabled && (l.render(), this.isDirtyLegend = !1), i && this.getStacks(), o.forEach((function(t) {
                        t.updateNames(), t.setScale()
                    })), this.getMargins(), o.forEach((function(t) {
                        t.isDirty && (u = !0)
                    })), o.forEach((function(t) {
                        let e = t.min + "," + t.max;
                        t.extKey !== e && (t.extKey = e, p.push((function() {
                            z(t, "afterSetExtremes", R(t.eventArgs, t.getExtremes())), delete t.eventArgs
                        }))), (u || i) && t.redraw()
                    })), u && this.drawChartBox(), z(this, "predraw"), a.forEach((function(t) {
                        (u || t.isDirty) && t.visible && t.redraw(), t.isDirtyData = !1
                    })), n && n.reset(!0), d.draw(), z(this, "redraw"), z(this, "render"), c && this.temporaryDisplay(!0), p.forEach((function(t) {
                        t.call()
                    }))
                }
                get(t) {
                    let e = this.series;

                    function i(e) {
                        return e.id === t || e.options && e.options.id === t
                    }
                    let s = N(this.axes, i) || N(this.series, i);
                    for (let r = 0; !s && r < e.length; r++) s = N(e[r].points || [], i);
                    return s
                }
                getAxes() {
                    let t = this.userOptions;
                    for (let i of (z(this, "getAxes"), ["xAxis", "yAxis"]))
                        for (let s of t[i] = Z(t[i] || {})) new e(this, s, i);
                    z(this, "afterGetAxes")
                }
                getSelectedPoints() {
                    return this.series.reduce(((t, e) => (e.getPointsCollection().forEach((e => {
                        U(e.selectedStaging, e.selected) && t.push(e)
                    })), t)), [])
                }
                getSelectedSeries() {
                    return this.series.filter((function(t) {
                        return t.selected
                    }))
                }
                setTitle(t, e, i) {
                    this.applyDescription("title", t), this.applyDescription("subtitle", e), this.applyDescription("caption", void 0), this.layOutTitles(i)
                }
                applyDescription(t, e) {
                    let i = this,
                        s = this.options[t] = X(this.options[t], e),
                        r = this[t];
                    r && e && (this[t] = r = r.destroy()), s && !r && ((r = this.renderer.text(s.text, 0, 0, s.useHTML).attr({
                        align: s.align,
                        class: "highcharts-" + t,
                        zIndex: s.zIndex || 4
                    }).add()).update = function(e, s) {
                        i.applyDescription(t, e), i.layOutTitles(s)
                    }, this.styledMode || r.css(R("title" === t ? {
                        fontSize: this.options.isStock ? "1em" : "1.2em"
                    } : {}, s.style)), this[t] = r)
                }
                layOutTitles(t = !0) {
                    let e = [0, 0, 0],
                        i = this.renderer,
                        s = this.spacingBox;
                    ["title", "subtitle", "caption"].forEach((function(t) {
                        let r = this[t],
                            o = this.options[t],
                            a = o.verticalAlign || "top",
                            n = "title" === t ? "top" === a ? -3 : 0 : "top" === a ? e[0] + 2 : 0;
                        if (r) {
                            r.css({
                                width: (o.width || s.width + (o.widthAdjust || 0)) + "px"
                            });
                            let t = i.fontMetrics(r).b,
                                l = Math.round(r.getBBox(o.useHTML).height);
                            r.align(R({
                                y: "bottom" === a ? t : n + t,
                                height: l
                            }, o), !1, "spacingBox"), o.floating || ("top" === a ? e[0] = Math.ceil(e[0] + l) : "bottom" === a && (e[2] = Math.ceil(e[2] + l)))
                        }
                    }), this), e[0] && "top" === (this.options.title.verticalAlign || "top") && (e[0] += this.options.title.margin), e[2] && "bottom" === this.options.caption.verticalAlign && (e[2] += this.options.caption.margin);
                    let r = !this.titleOffset || this.titleOffset.join(",") !== e.join(",");
                    this.titleOffset = e, z(this, "afterLayOutTitles"), !this.isDirtyBox && r && (this.isDirtyBox = this.isDirtyLegend = r, this.hasRendered && t && this.isDirtyBox && this.redraw())
                }
                getContainerBox() {
                    return {
                        width: W(this.renderTo, "width", !0) || 0,
                        height: W(this.renderTo, "height", !0) || 0
                    }
                }
                getChartSize() {
                    let t = this.options.chart,
                        e = t.width,
                        i = t.height,
                        s = this.getContainerBox();
                    this.chartWidth = Math.max(0, e || s.width || 600), this.chartHeight = Math.max(0, $(i, this.chartWidth) || (s.height > 1 ? s.height : 400)), this.containerBox = s
                }
                temporaryDisplay(t) {
                    let e, i = this.renderTo;
                    if (t)
                        for (; i && i.style;) i.hcOrigStyle && (O(i, i.hcOrigStyle), delete i.hcOrigStyle), i.hcOrigDetached && (S.body.removeChild(i), i.hcOrigDetached = !1), i = i.parentNode;
                    else
                        for (; i && i.style && (S.body.contains(i) || i.parentNode || (i.hcOrigDetached = !0, S.body.appendChild(i)), ("none" === W(i, "display", !1) || i.hcOricDetached) && (i.hcOrigStyle = {
                                display: i.style.display,
                                height: i.style.height,
                                overflow: i.style.overflow
                            }, e = {
                                display: "block",
                                overflow: "hidden"
                            }, i !== this.renderTo && (e.height = 0), O(i, e), i.offsetWidth || i.style.setProperty("display", "block", "important")), (i = i.parentNode) !== S.body););
                }
                setClassName(t) {
                    this.container.className = "highcharts-container " + (t || "")
                }
                getContainer() {
                    var t;
                    let e, i = this.options,
                        s = i.chart,
                        r = "data-highcharts-chart",
                        o = J(),
                        n = this.renderTo;
                    n || (this.renderTo = n = s.renderTo), _(n) && (this.renderTo = n = S.getElementById(n)), n || B(13, !0, this);
                    let l = V(P(n, r));
                    G(l) && k[l] && k[l].hasRendered && k[l].destroy(), P(n, r, this.index), n.innerHTML = p.emptyHTML, s.skipClone || n.offsetWidth || this.temporaryDisplay(), this.getChartSize();
                    let d = this.chartHeight,
                        c = this.chartWidth;
                    O(n, {
                        overflow: "hidden"
                    }), this.styledMode || (e = R({
                        position: "relative",
                        overflow: "hidden",
                        width: c + "px",
                        height: d + "px",
                        textAlign: "left",
                        lineHeight: "normal",
                        zIndex: 0,
                        "-webkit-tap-highlight-color": "rgba(0,0,0,0)",
                        userSelect: "none",
                        "touch-action": "manipulation",
                        outline: "none"
                    }, s.style || {}));
                    let u = L("div", {
                        id: o
                    }, e, n);
                    this.container = u, this.getChartSize(), c === this.chartWidth || (c = this.chartWidth, this.styledMode || O(u, {
                        width: U(null == (t = s.style) ? void 0 : t.width, c + "px")
                    })), this.containerBox = this.getContainerBox(), this._cursor = u.style.cursor;
                    let g = s.renderer || !w ? a.getRendererType(s.renderer) : h;
                    if (this.renderer = new g(u, c, d, void 0, s.forExport, i.exporting && i.exporting.allowHTML, this.styledMode), m(void 0, this), this.setClassName(s.className), this.styledMode)
                        for (let a in i.defs) this.renderer.definition(i.defs[a]);
                    else this.renderer.setStyle(s.style);
                    this.renderer.chartIndex = this.index, z(this, "afterGetContainer")
                }
                getMargins(t) {
                    let {
                        spacing: e,
                        margin: i,
                        titleOffset: s
                    } = this;
                    this.resetMargins(), s[0] && !E(i[0]) && (this.plotTop = Math.max(this.plotTop, s[0] + e[0])), s[2] && !E(i[2]) && (this.marginBottom = Math.max(this.marginBottom, s[2] + e[2])), this.legend && this.legend.display && this.legend.adjustMargins(i, e), z(this, "getMargins"), t || this.getAxisMargins()
                }
                getAxisMargins() {
                    let t = this,
                        e = t.axisOffset = [0, 0, 0, 0],
                        i = t.colorAxis,
                        s = t.margin,
                        r = function(t) {
                            t.forEach((function(t) {
                                t.visible && t.getOffset()
                            }))
                        };
                    t.hasCartesianSeries ? r(t.axes) : i && i.length && r(i), C.forEach((function(i, r) {
                        E(s[r]) || (t[i] += e[r])
                    })), t.setChartSize()
                }
                getOptions() {
                    return D(this.userOptions, x)
                }
                reflow(t) {
                    var e;
                    let i = this,
                        s = i.containerBox,
                        r = i.getContainerBox();
                    null == (e = i.pointer) || delete e.chartPosition, !i.isPrinting && !i.isResizing && s && r.width && ((r.width !== s.width || r.height !== s.height) && (c.clearTimeout(i.reflowTimeout), i.reflowTimeout = K((function() {
                        i.container && i.setSize(void 0, void 0, !1)
                    }), t ? 100 : 0)), i.containerBox = r)
                }
                setReflow() {
                    let t = this,
                        e = e => {
                            var i;
                            (null == (i = t.options) ? void 0 : i.chart.reflow) && t.hasLoaded && t.reflow(e)
                        };
                    if ("function" == typeof ResizeObserver) new ResizeObserver(e).observe(t.renderTo);
                    else {
                        let t = T(M, "resize", e);
                        T(this, "destroy", t)
                    }
                }
                setSize(t, e, i) {
                    let s = this,
                        r = s.renderer;
                    s.isResizing += 1, m(i, s);
                    let o = r.globalAnimation;
                    s.oldChartHeight = s.chartHeight, s.oldChartWidth = s.chartWidth, void 0 !== t && (s.options.chart.width = t), void 0 !== e && (s.options.chart.height = e), s.getChartSize();
                    let {
                        chartWidth: a,
                        chartHeight: n,
                        scrollablePixelsX: l = 0,
                        scrollablePixelsY: h = 0
                    } = s;
                    (s.isDirtyBox || a !== s.oldChartWidth || n !== s.oldChartHeight) && (s.styledMode || (o ? g : O)(s.container, {
                        width: `${a+l}px`,
                        height: `${n+h}px`
                    }, o), s.setChartSize(!0), r.setSize(a, n, o), s.axes.forEach((function(t) {
                        t.isDirty = !0, t.setScale()
                    })), s.isDirtyLegend = !0, s.isDirtyBox = !0, s.layOutTitles(), s.getMargins(), s.redraw(o), s.oldChartHeight = void 0, z(s, "resize"), setTimeout((() => {
                        s && z(s, "endResize", void 0, (() => {
                            s.isResizing -= 1
                        }))
                    }), f(o).duration))
                }
                setChartSize(t) {
                    let e, i, s, r, o = this.inverted,
                        a = this.renderer,
                        n = this.chartWidth,
                        l = this.chartHeight,
                        h = this.options.chart,
                        d = this.spacing,
                        c = this.clipOffset;
                    this.plotLeft = e = Math.round(this.plotLeft), this.plotTop = i = Math.round(this.plotTop), this.plotWidth = s = Math.max(0, Math.round(n - e - this.marginRight)), this.plotHeight = r = Math.max(0, Math.round(l - i - this.marginBottom)), this.plotSizeX = o ? r : s, this.plotSizeY = o ? s : r, this.plotBorderWidth = h.plotBorderWidth || 0, this.spacingBox = a.spacingBox = {
                        x: d[3],
                        y: d[0],
                        width: n - d[3] - d[1],
                        height: l - d[0] - d[2]
                    }, this.plotBox = a.plotBox = {
                        x: e,
                        y: i,
                        width: s,
                        height: r
                    };
                    let p = 2 * Math.floor(this.plotBorderWidth / 2),
                        u = Math.ceil(Math.max(p, c[3]) / 2),
                        g = Math.ceil(Math.max(p, c[0]) / 2);
                    this.clipBox = {
                        x: u,
                        y: g,
                        width: Math.floor(this.plotSizeX - Math.max(p, c[1]) / 2 - u),
                        height: Math.max(0, Math.floor(this.plotSizeY - Math.max(p, c[2]) / 2 - g))
                    }, t || (this.axes.forEach((function(t) {
                        t.setAxisSize(), t.setAxisTranslation()
                    })), a.alignElements()), z(this, "afterSetChartSize", {
                        skipAxes: t
                    })
                }
                resetMargins() {
                    z(this, "resetMargins");
                    let t = this,
                        e = t.options.chart;
                    ["margin", "spacing"].forEach((function(i) {
                        let s = e[i],
                            r = F(s) ? s : [s, s, s, s];
                        ["Top", "Right", "Bottom", "Left"].forEach((function(s, o) {
                            t[i][o] = U(e[i + s], r[o])
                        }))
                    })), C.forEach((function(e, i) {
                        t[e] = U(t.margin[i], t.spacing[i])
                    })), t.axisOffset = [0, 0, 0, 0], t.clipOffset = [0, 0, 0, 0]
                }
                drawChartBox() {
                    let t, e, i, s = this.options.chart,
                        r = this.renderer,
                        o = this.chartWidth,
                        a = this.chartHeight,
                        n = this.styledMode,
                        l = this.plotBGImage,
                        h = s.backgroundColor,
                        d = s.plotBackgroundColor,
                        c = s.plotBackgroundImage,
                        p = this.plotLeft,
                        u = this.plotTop,
                        g = this.plotWidth,
                        f = this.plotHeight,
                        m = this.plotBox,
                        x = this.clipRect,
                        y = this.clipBox,
                        v = this.chartBackground,
                        b = this.plotBackground,
                        k = this.plotBorder,
                        S = "animate";
                    v || (this.chartBackground = v = r.rect().addClass("highcharts-background").add(), S = "attr"), n ? t = e = v.strokeWidth() : (e = (t = s.borderWidth || 0) + (s.shadow ? 8 : 0), i = {
                        fill: h || "none"
                    }, (t || v["stroke-width"]) && (i.stroke = s.borderColor, i["stroke-width"] = t), v.attr(i).shadow(s.shadow)), v[S]({
                        x: e / 2,
                        y: e / 2,
                        width: o - e - t % 2,
                        height: a - e - t % 2,
                        r: s.borderRadius
                    }), S = "animate", b || (S = "attr", this.plotBackground = b = r.rect().addClass("highcharts-plot-background").add()), b[S](m), !n && (b.attr({
                        fill: d || "none"
                    }).shadow(s.plotShadow), c && (l ? (c !== l.attr("href") && l.attr("href", c), l.animate(m)) : this.plotBGImage = r.image(c, p, u, g, f).add())), x ? x.animate({
                        width: y.width,
                        height: y.height
                    }) : this.clipRect = r.clipRect(y), S = "animate", k || (S = "attr", this.plotBorder = k = r.rect().addClass("highcharts-plot-border").attr({
                        zIndex: 1
                    }).add()), n || k.attr({
                        stroke: s.plotBorderColor,
                        "stroke-width": s.plotBorderWidth || 0,
                        fill: "none"
                    }), k[S](k.crisp({
                        x: p,
                        y: u,
                        width: g,
                        height: f
                    }, -k.strokeWidth())), this.isDirtyBox = !1, z(this, "afterDrawChartBox")
                }
                propFromSeries() {
                    let t, e, i, s = this,
                        r = s.options.chart,
                        o = s.options.series;
                    ["inverted", "angular", "polar"].forEach((function(a) {
                        for (e = A[r.type], i = r[a] || e && e.prototype[a], t = o && o.length; !i && t--;)(e = A[o[t].type]) && e.prototype[a] && (i = !0);
                        s[a] = i
                    }))
                }
                linkSeries(t) {
                    let e = this,
                        i = e.series;
                    i.forEach((function(t) {
                        t.linkedSeries.length = 0
                    })), i.forEach((function(t) {
                        let {
                            linkedTo: i
                        } = t.options;
                        if (_(i)) {
                            let s;
                            (s = ":previous" === i ? e.series[t.index - 1] : e.get(i)) && s.linkedParent !== t && (s.linkedSeries.push(t), t.linkedParent = s, s.enabledDataSorting && t.setDataSortingOptions(), t.visible = U(t.options.visible, s.options.visible, t.visible))
                        }
                    })), z(this, "afterLinkSeries", {
                        isUpdating: t
                    })
                }
                renderSeries() {
                    this.series.forEach((function(t) {
                        t.translate(), t.render()
                    }))
                }
                render() {
                    var t;
                    let e, i = this.axes,
                        s = this.colorAxis,
                        r = this.renderer,
                        o = this.options.chart.axisLayoutRuns || 2,
                        a = t => {
                            t.forEach((t => {
                                t.visible && t.render()
                            }))
                        },
                        n = 0,
                        l = !0,
                        h = 0;
                    for (let d of (this.setTitle(), z(this, "beforeMargins"), null == (t = this.getStacks) || t.call(this), this.getMargins(!0), this.setChartSize(), i)) {
                        let {
                            options: t
                        } = d, {
                            labels: e
                        } = t;
                        if (d.horiz && d.visible && e.enabled && d.series.length && "colorAxis" !== d.coll && !this.polar) {
                            n = t.tickLength, d.createGroups();
                            let i = new u(d, 0, "", !0),
                                s = i.createLabel("x", e);
                            if (i.destroy(), s && U(e.reserveSpace, !G(t.crossing)) && (n = s.getBBox().height + e.distance + Math.max(t.offset || 0, 0)), n) {
                                null == s || s.destroy();
                                break
                            }
                        }
                    }
                    for (this.plotHeight = Math.max(this.plotHeight - n, 0);
                        (l || e || o > 1) && h < o;) {
                        let t = this.plotWidth,
                            s = this.plotHeight;
                        for (let r of i) 0 === h ? r.setScale() : (r.horiz && l || !r.horiz && e) && r.setTickInterval(!0);
                        0 === h ? this.getAxisMargins() : this.getMargins(), l = t / this.plotWidth > (h ? 1 : 1.1), e = s / this.plotHeight > (h ? 1 : 1.05), h++
                    }
                    this.drawChartBox(), this.hasCartesianSeries ? a(i) : s && s.length && a(s), this.seriesGroup || (this.seriesGroup = r.g("series-group").attr({
                        zIndex: 3
                    }).shadow(this.options.chart.seriesGroupShadow).add()), this.renderSeries(), this.addCredits(), this.setResponsive && this.setResponsive(), this.hasRendered = !0
                }
                addCredits(t) {
                    let e = this,
                        i = X(!0, this.options.credits, t);
                    i.enabled && !this.credits && (this.credits = this.renderer.text(i.text + (this.mapCredits || ""), 0, 0).addClass("highcharts-credits").on("click", (function() {
                        i.href && (M.location.href = i.href)
                    })).attr({
                        align: i.position.align,
                        zIndex: 8
                    }), e.styledMode || this.credits.css(i.style), this.credits.add().align(i.position), this.credits.update = function(t) {
                        e.credits = e.credits.destroy(), e.addCredits(t)
                    })
                }
                destroy() {
                    let t, e = this,
                        i = e.axes,
                        s = e.series,
                        r = e.container,
                        a = r && r.parentNode;
                    for (z(e, "destroy"), e.renderer.forExport ? I(k, e) : k[e.index] = void 0, o.chartCount--, e.renderTo.removeAttribute("data-highcharts-chart"), q(e), t = i.length; t--;) i[t] = i[t].destroy();
                    for (this.scroller && this.scroller.destroy && this.scroller.destroy(), t = s.length; t--;) s[t] = s[t].destroy();
                    ["title", "subtitle", "chartBackground", "plotBackground", "plotBGImage", "plotBorder", "seriesGroup", "clipRect", "credits", "pointer", "rangeSelector", "legend", "resetZoomButton", "tooltip", "renderer"].forEach((function(t) {
                        let i = e[t];
                        i && i.destroy && (e[t] = i.destroy())
                    })), r && (r.innerHTML = p.emptyHTML, q(r), a && j(r)), Y(e, (function(t, i) {
                        delete e[i]
                    }))
                }
                firstRender() {
                    var t;
                    let e = this,
                        i = e.options;
                    e.getContainer(), e.resetMargins(), e.setChartSize(), e.propFromSeries(), e.getAxes();
                    let s = H(i.series) ? i.series : [];
                    i.series = [], s.forEach((function(t) {
                        e.initSeries(t)
                    })), e.linkSeries(), e.setSortedData(), z(e, "beforeRender"), e.render(), null == (t = e.pointer) || t.getChartPosition(), e.renderer.imgCount || e.hasLoaded || e.onload(), e.temporaryDisplay(!0)
                }
                onload() {
                    this.callbacks.concat([this.callback]).forEach((function(t) {
                        t && void 0 !== this.index && t.apply(this, [this])
                    }), this), z(this, "load"), z(this, "render"), E(this.index) && this.setReflow(), this.warnIfA11yModuleNotLoaded(), this.hasLoaded = !0
                }
                warnIfA11yModuleNotLoaded() {
                    let {
                        options: t,
                        title: e
                    } = this;
                    !t || this.accessibility || (this.renderer.boxWrapper.attr({
                        role: "img",
                        "aria-label": (e && e.element.textContent || "").replace(/</g, "&lt;")
                    }), t.accessibility && !1 === t.accessibility.enabled || B('Highcharts warning: Consider including the "accessibility.js" module to make your chart more usable for people with disabilities. Set the "accessibility.enabled" option to false to remove this warning. See https://www.highcharts.com/docs/accessibility/accessibility-module.', !1, this))
                }
                addSeries(t, e, i) {
                    let s, r = this;
                    return t && (e = U(e, !0), z(r, "addSeries", {
                        options: t
                    }, (function() {
                        s = r.initSeries(t), r.isDirtyLegend = !0, r.linkSeries(), s.enabledDataSorting && s.setData(t.data, !1), z(r, "afterAddSeries", {
                            series: s
                        }), e && r.redraw(i)
                    }))), s
                }
                addAxis(t, e, i, s) {
                    return this.createAxis(e ? "xAxis" : "yAxis", {
                        axis: t,
                        redraw: i,
                        animation: s
                    })
                }
                addColorAxis(t, e, i) {
                    return this.createAxis("colorAxis", {
                        axis: t,
                        redraw: e,
                        animation: i
                    })
                }
                createAxis(t, i) {
                    let s = new e(this, i.axis, t);
                    return U(i.redraw, !0) && this.redraw(i.animation), s
                }
                showLoading(t) {
                    let e = this,
                        i = e.options,
                        s = i.loading,
                        r = function() {
                            o && O(o, {
                                left: e.plotLeft + "px",
                                top: e.plotTop + "px",
                                width: e.plotWidth + "px",
                                height: e.plotHeight + "px"
                            })
                        },
                        o = e.loadingDiv,
                        a = e.loadingSpan;
                    o || (e.loadingDiv = o = L("div", {
                        className: "highcharts-loading highcharts-loading-hidden"
                    }, null, e.container)), a || (e.loadingSpan = a = L("span", {
                        className: "highcharts-loading-inner"
                    }, null, o), T(e, "redraw", r)), o.className = "highcharts-loading", p.setElementHTML(a, U(t, i.lang.loading, "")), e.styledMode || (O(o, R(s.style, {
                        zIndex: 10
                    })), O(a, s.labelStyle), e.loadingShown || (O(o, {
                        opacity: 0,
                        display: ""
                    }), g(o, {
                        opacity: s.style.opacity || .5
                    }, {
                        duration: s.showDuration || 0
                    }))), e.loadingShown = !0, r()
                }
                hideLoading() {
                    let t = this.options,
                        e = this.loadingDiv;
                    e && (e.className = "highcharts-loading highcharts-loading-hidden", this.styledMode || g(e, {
                        opacity: 0
                    }, {
                        duration: t.loading.hideDuration || 100,
                        complete: function() {
                            O(e, {
                                display: "none"
                            })
                        }
                    })), this.loadingShown = !1
                }
                update(t, e, i, s) {
                    let r, o, a, n = this,
                        l = {
                            credits: "addCredits",
                            title: "setTitle",
                            subtitle: "setSubtitle",
                            caption: "setCaption"
                        },
                        h = t.isResponsiveOptions,
                        c = [];
                    z(n, "update", {
                        options: t
                    }), h || n.setResponsive(!1, !0), t = D(t, n.options), n.userOptions = X(n.userOptions, t);
                    let p = t.chart;
                    p && (X(!0, n.options.chart, p), this.setZoomOptions(), "className" in p && n.setClassName(p.className), ("inverted" in p || "polar" in p || "type" in p) && (n.propFromSeries(), r = !0), "alignTicks" in p && (r = !0), "events" in p && b(this, p), Y(p, (function(t, e) {
                        -1 !== n.propsRequireUpdateSeries.indexOf("chart." + e) && (o = !0), -1 !== n.propsRequireDirtyBox.indexOf(e) && (n.isDirtyBox = !0), -1 === n.propsRequireReflow.indexOf(e) || (n.isDirtyBox = !0, h || (a = !0))
                    })), !n.styledMode && p.style && n.renderer.setStyle(n.options.chart.style || {})), !n.styledMode && t.colors && (this.options.colors = t.colors), t.time && (this.time === y && (this.time = new d(t.time)), X(!0, n.options.time, t.time)), Y(t, (function(e, i) {
                        n[i] && "function" == typeof n[i].update ? n[i].update(e, !1) : "function" == typeof n[l[i]] ? n[l[i]](e) : "colors" !== i && -1 === n.collectionsWithUpdate.indexOf(i) && X(!0, n.options[i], t[i]), "chart" !== i && -1 !== n.propsRequireUpdateSeries.indexOf(i) && (o = !0)
                    })), this.collectionsWithUpdate.forEach((function(e) {
                        t[e] && (Z(t[e]).forEach((function(t, s) {
                            let r, o = E(t.id);
                            o && (r = n.get(t.id)), !r && n[e] && (r = n[e][U(t.index, s)]) && (o && E(r.options.id) || r.options.isInternal) && (r = void 0), r && r.coll === e && (r.update(t, !1), i && (r.touched = !0)), !r && i && n.collectionsWithInit[e] && (n.collectionsWithInit[e][0].apply(n, [t].concat(n.collectionsWithInit[e][1] || []).concat([!1])).touched = !0)
                        })), i && n[e].forEach((function(t) {
                            t.touched || t.options.isInternal ? delete t.touched : c.push(t)
                        })))
                    })), c.forEach((function(t) {
                        t.chart && t.remove && t.remove(!1)
                    })), r && n.axes.forEach((function(t) {
                        t.update({}, !1)
                    })), o && n.getSeriesOrderByLinks().forEach((function(t) {
                        t.chart && t.update({}, !1)
                    }), this);
                    let u = p && p.width,
                        g = p && (_(p.height) ? $(p.height, u || n.chartWidth) : p.height);
                    a || G(u) && u !== n.chartWidth || G(g) && g !== n.chartHeight ? n.setSize(u, g, s) : U(e, !0) && n.redraw(s), z(n, "afterUpdate", {
                        options: t,
                        redraw: e,
                        animation: s
                    })
                }
                setSubtitle(t, e) {
                    this.applyDescription("subtitle", t), this.layOutTitles(e)
                }
                setCaption(t, e) {
                    this.applyDescription("caption", t), this.layOutTitles(e)
                }
                showResetZoom() {
                    let t = this,
                        e = x.lang,
                        i = t.zooming.resetButton,
                        s = i.theme,
                        r = "chart" === i.relativeTo || "spacingBox" === i.relativeTo ? null : "plotBox";

                    function o() {
                        t.zoomOut()
                    }
                    z(this, "beforeShowResetZoom", null, (function() {
                        t.resetZoomButton = t.renderer.button(e.resetZoom, null, null, o, s).attr({
                            align: i.position.align,
                            title: e.resetZoomTitle
                        }).addClass("highcharts-reset-zoom").add().align(i.position, !1, r)
                    })), z(this, "afterShowResetZoom")
                }
                zoomOut() {
                    z(this, "selection", {
                        resetSelection: !0
                    }, (() => this.transform({
                        reset: !0,
                        trigger: "zoom"
                    })))
                }
                pan(t, e) {
                    let i = this,
                        s = "object" == typeof e ? e : {
                            enabled: e,
                            type: "x"
                        },
                        r = s.type,
                        o = r && i[{
                            x: "xAxis",
                            xy: "axes",
                            y: "yAxis"
                        }[r]].filter((t => t.options.panningEnabled && !t.options.isInternal)),
                        a = i.options.chart;
                    (null == a ? void 0 : a.panning) && (a.panning = s), z(this, "pan", {
                        originalEvent: t
                    }, (() => {
                        i.transform({
                            axes: o,
                            event: t,
                            to: {
                                x: t.chartX - (i.mouseDownX || 0),
                                y: t.chartY - (i.mouseDownY || 0)
                            },
                            trigger: "pan"
                        }), O(i.container, {
                            cursor: "move"
                        })
                    }))
                }
                transform(t) {
                    var e;
                    let i, {
                            axes: s = this.axes,
                            event: r,
                            from: o = {},
                            reset: a,
                            selection: n,
                            to: l = {},
                            trigger: h
                        } = t,
                        {
                            inverted: d,
                            resetZoomButton: c
                        } = this,
                        p = !1;
                    for (let u of (null == (e = this.hoverPoints) || e.forEach((t => t.setState())), s)) {
                        let {
                            horiz: t,
                            len: e,
                            minPointOffset: s = 0,
                            options: c,
                            reversed: g
                        } = u, f = t ? "width" : "height", m = t ? "x" : "y", x = l[f] || u.len, y = o[f] || u.len, v = 10 > Math.abs(x) ? 1 : x / y, b = (o[m] || 0) + y / 2 - u.pos, k = b - ((l[m] ? ? u.pos) + x / 2 - u.pos) / v, S = g && !d || !g && d ? -1 : 1;
                        if (!a && (b < 0 || b > u.len)) continue;
                        let C = u.toValue(k, !0) + s * S,
                            w = u.toValue(k + e / v, !0) - (s * S || 0),
                            M = u.allExtremes;
                        if (C > w && ([C, w] = [w, C]), 1 === v && !a && "yAxis" === u.coll && !M) {
                            for (let t of u.series) {
                                let e = t.getExtremes(t.getProcessedData(!0).yData, !0);
                                M ? ? (M = {
                                    dataMin: Number.MAX_VALUE,
                                    dataMax: -Number.MAX_VALUE
                                }), G(e.dataMin) && G(e.dataMax) && (M.dataMin = Math.min(e.dataMin, M.dataMin), M.dataMax = Math.max(e.dataMax, M.dataMax))
                            }
                            u.allExtremes = M
                        }
                        let {
                            dataMin: A,
                            dataMax: T,
                            min: P,
                            max: L
                        } = R(u.getExtremes(), M || {}), O = A ? ? c.min, D = T ? ? c.max, j = w - C, I = u.categories ? 0 : Math.min(j, D - O), B = O - I * (E(c.min) ? 0 : c.minPadding), N = D + I * (E(c.max) ? 0 : c.maxPadding), z = u.allowZoomOutside || 1 === v || "zoom" !== h && v > 1, W = Math.min(c.min ? ? B, B, z ? P : B), H = Math.max(c.max ? ? N, N, z ? L : N);
                        (!u.isOrdinal || 1 !== v || a) && (C < W && (C = W, v >= 1 && (w = C + j)), w > H && (w = H, v >= 1 && (C = w - j)), (a || u.series.length && (C !== P || w !== L) && C >= W && w <= H) && (n ? n[u.coll].push({
                            axis: u,
                            min: C,
                            max: w
                        }) : (u.isPanning = "zoom" !== h, u.setExtremes(a ? void 0 : C, a ? void 0 : w, !1, !1, {
                            move: k,
                            trigger: h,
                            scale: v
                        }), !a && (C > W || w < H) && "mousewheel" !== h && (i = !0)), p = !0), r && (this[t ? "mouseDownX" : "mouseDownY"] = r[t ? "chartX" : "chartY"]))
                    }
                    return p && (n ? z(this, "selection", n, (() => {
                        delete t.selection, t.trigger = "zoom", this.transform(t)
                    })) : (i && !c ? this.showResetZoom() : !i && c && (this.resetZoomButton = c.destroy()), this.redraw("zoom" === h && (this.options.chart.animation ? ? this.pointCount < 100)))), p
                }
            }
            return R(Q.prototype, {
                callbacks: [],
                collectionsWithInit: {
                    xAxis: [Q.prototype.addAxis, [!0]],
                    yAxis: [Q.prototype.addAxis, [!1]],
                    series: [Q.prototype.addSeries]
                },
                collectionsWithUpdate: ["xAxis", "yAxis", "series"],
                propsRequireDirtyBox: ["backgroundColor", "borderColor", "borderWidth", "borderRadius", "plotBackgroundColor", "plotBackgroundImage", "plotBorderColor", "plotBorderWidth", "plotShadow", "shadow"],
                propsRequireReflow: ["margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "spacing", "spacingTop", "spacingRight", "spacingBottom", "spacingLeft"],
                propsRequireUpdateSeries: ["chart.inverted", "chart.polar", "chart.ignoreHiddenSeries", "chart.type", "colors", "plotOptions", "time", "tooltip"]
            }), Q
        })), i(e, "Extensions/ScrollablePlotArea.js", [e["Core/Animation/AnimationUtilities.js"], e["Core/Globals.js"], e["Core/Renderer/RendererRegistry.js"], e["Core/Utilities.js"]], (function(t, e, i, s) {
            let {
                stop: r
            } = t, {
                composed: o
            } = e, {
                addEvent: a,
                createElement: n,
                css: l,
                defined: h,
                merge: d,
                pushUnique: c
            } = s;

            function p() {
                let t = this.scrollablePlotArea;
                (this.scrollablePixelsX || this.scrollablePixelsY) && !t && (this.scrollablePlotArea = t = new g(this)), null == t || t.applyFixed()
            }

            function u() {
                this.chart.scrollablePlotArea && (this.chart.scrollablePlotArea.isDirty = !0)
            }
            class g {
                static compose(t, e, i) {
                    c(o, this.compose) && (a(t, "afterInit", u), a(e, "afterSetChartSize", (t => this.afterSetSize(t.target, t))), a(e, "render", p), a(i, "show", u))
                }
                static afterSetSize(t, e) {
                    let i, s, r, {
                            minWidth: o,
                            minHeight: a
                        } = t.options.chart.scrollablePlotArea || {},
                        {
                            clipBox: n,
                            plotBox: l,
                            inverted: c,
                            renderer: p
                        } = t;
                    if (!p.forExport && (o ? (t.scrollablePixelsX = i = Math.max(0, o - t.chartWidth), i && (t.scrollablePlotBox = d(t.plotBox), l.width = t.plotWidth += i, n[c ? "height" : "width"] += i, r = !0)) : a && (t.scrollablePixelsY = s = Math.max(0, a - t.chartHeight), h(s) && (t.scrollablePlotBox = d(t.plotBox), l.height = t.plotHeight += s, n[c ? "width" : "height"] += s, r = !1)), h(r) && !e.skipAxes))
                        for (let h of t.axes) h.horiz === r && (h.setAxisSize(), h.setAxisTranslation())
                }
                constructor(t) {
                    var e;
                    let s, r = t.options.chart,
                        o = i.getRendererType(),
                        h = r.scrollablePlotArea || {},
                        d = this.moveFixedElements.bind(this),
                        c = {
                            WebkitOverflowScrolling: "touch",
                            overflowX: "hidden",
                            overflowY: "hidden"
                        };
                    t.scrollablePixelsX && (c.overflowX = "auto"), t.scrollablePixelsY && (c.overflowY = "auto"), this.chart = t;
                    let p = this.parentDiv = n("div", {
                            className: "highcharts-scrolling-parent"
                        }, {
                            position: "relative"
                        }, t.renderTo),
                        u = this.scrollingContainer = n("div", {
                            className: "highcharts-scrolling"
                        }, c, p),
                        g = this.innerContainer = n("div", {
                            className: "highcharts-inner-container"
                        }, void 0, u),
                        f = this.fixedDiv = n("div", {
                            className: "highcharts-fixed"
                        }, {
                            position: "absolute",
                            overflow: "hidden",
                            pointerEvents: "none",
                            zIndex: ((null == (e = r.style) ? void 0 : e.zIndex) || 0) + 2,
                            top: 0
                        }, void 0, !0),
                        m = this.fixedRenderer = new o(f, t.chartWidth, t.chartHeight, r.style);
                    this.mask = m.path().attr({
                        fill: r.backgroundColor || "#fff",
                        "fill-opacity": h.opacity ? ? .85,
                        zIndex: -1
                    }).addClass("highcharts-scrollable-mask").add(), u.parentNode.insertBefore(f, u), l(t.renderTo, {
                        overflow: "visible"
                    }), a(t, "afterShowResetZoom", d), a(t, "afterApplyDrilldown", d), a(t, "afterLayOutTitles", d), a(u, "scroll", (() => {
                        let {
                            pointer: e,
                            hoverPoint: i
                        } = t;
                        e && (delete e.chartPosition, i && (s = i), e.runPointActions(void 0, s, !0))
                    })), g.appendChild(t.container)
                }
                applyFixed() {
                    var t;
                    let {
                        chart: e,
                        fixedRenderer: i,
                        isDirty: s,
                        scrollingContainer: o
                    } = this, {
                        axisOffset: a,
                        chartWidth: n,
                        chartHeight: d,
                        container: c,
                        plotHeight: p,
                        plotLeft: u,
                        plotTop: g,
                        plotWidth: f,
                        scrollablePixelsX: m = 0,
                        scrollablePixelsY: x = 0
                    } = e, {
                        scrollPositionX: y = 0,
                        scrollPositionY: v = 0
                    } = e.options.chart.scrollablePlotArea || {}, b = n + m, k = d + x;
                    i.setSize(n, d), (s ? ? !0) && (this.isDirty = !1, this.moveFixedElements()), r(e.container), l(c, {
                        width: `${b}px`,
                        height: `${k}px`
                    }), e.renderer.boxWrapper.attr({
                        width: b,
                        height: k,
                        viewBox: [0, 0, b, k].join(" ")
                    }), null == (t = e.chartBackground) || t.attr({
                        width: b,
                        height: k
                    }), l(o, {
                        width: `${n}px`,
                        height: `${d}px`
                    }), h(s) || (o.scrollLeft = m * y, o.scrollTop = x * v);
                    let S = g - a[0] - 1,
                        C = u - a[3] - 1,
                        w = g + p + a[2] + 1,
                        M = u + f + a[1] + 1,
                        A = u + f - m,
                        T = g + p - x,
                        P = [
                            ["M", 0, 0]
                        ];
                    m ? P = [
                        ["M", 0, S],
                        ["L", u - 1, S],
                        ["L", u - 1, w],
                        ["L", 0, w],
                        ["Z"],
                        ["M", A, S],
                        ["L", n, S],
                        ["L", n, w],
                        ["L", A, w],
                        ["Z"]
                    ] : x && (P = [
                        ["M", C, 0],
                        ["L", C, g - 1],
                        ["L", M, g - 1],
                        ["L", M, 0],
                        ["Z"],
                        ["M", C, T],
                        ["L", C, d],
                        ["L", M, d],
                        ["L", M, T],
                        ["Z"]
                    ]), "adjustHeight" !== e.redrawTrigger && this.mask.attr({
                        d: P
                    })
                }
                moveFixedElements() {
                    let t, {
                            container: e,
                            inverted: i,
                            scrollablePixelsX: s,
                            scrollablePixelsY: r
                        } = this.chart,
                        o = this.fixedRenderer,
                        a = [".highcharts-breadcrumbs-group", ".highcharts-contextbutton", ".highcharts-caption", ".highcharts-credits", ".highcharts-legend", ".highcharts-legend-checkbox", ".highcharts-navigator-series", ".highcharts-navigator-xaxis", ".highcharts-navigator-yaxis", ".highcharts-navigator", ".highcharts-reset-zoom", ".highcharts-drillup-button", ".highcharts-scrollbar", ".highcharts-subtitle", ".highcharts-title"];
                    for (let n of (s && !i ? t = ".highcharts-yaxis" : s && i || r && !i ? t = ".highcharts-xaxis" : r && i && (t = ".highcharts-yaxis"), t && a.push(`${t}:not(.highcharts-radial-axis)`, `${t}-labels:not(.highcharts-radial-axis-labels)`), a))[].forEach.call(e.querySelectorAll(n), (t => {
                        (t.namespaceURI === o.SVG_NS ? o.box : o.box.parentNode).appendChild(t), t.style.pointerEvents = "auto"
                    }))
                }
            }
            return g
        })), i(e, "Core/Axis/Stacking/StackItem.js", [e["Core/Templating.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], (function(t, e, i) {
            let {
                format: s
            } = t, {
                series: r
            } = e, {
                destroyObjectProperties: o,
                fireEvent: a,
                isNumber: n,
                pick: l
            } = i;
            return class {
                constructor(t, e, i, s, r) {
                    let o = t.chart.inverted,
                        a = t.reversed;
                    this.axis = t;
                    let n = this.isNegative = !!i != !!a;
                    this.options = e = e || {}, this.x = s, this.total = null, this.cumulative = null, this.points = {}, this.hasValidPoints = !1, this.stack = r, this.leftCliff = 0, this.rightCliff = 0, this.alignOptions = {
                        align: e.align || (o ? n ? "left" : "right" : "center"),
                        verticalAlign: e.verticalAlign || (o ? "middle" : n ? "bottom" : "top"),
                        y: e.y,
                        x: e.x
                    }, this.textAlign = e.textAlign || (o ? n ? "right" : "left" : "center")
                }
                destroy() {
                    o(this, this.axis)
                }
                render(t) {
                    let e = this.axis.chart,
                        i = this.options,
                        r = i.format,
                        o = r ? s(r, this, e) : i.formatter.call(this);
                    if (this.label) this.label.attr({
                        text: o,
                        visibility: "hidden"
                    });
                    else {
                        this.label = e.renderer.label(o, null, void 0, i.shape, void 0, void 0, i.useHTML, !1, "stack-labels");
                        let s = {
                            r: i.borderRadius || 0,
                            text: o,
                            padding: l(i.padding, 5),
                            visibility: "hidden"
                        };
                        e.styledMode || (s.fill = i.backgroundColor, s.stroke = i.borderColor, s["stroke-width"] = i.borderWidth, this.label.css(i.style || {})), this.label.attr(s), this.label.added || this.label.add(t)
                    }
                    this.label.labelrank = e.plotSizeY, a(this, "afterRender")
                }
                setOffset(t, e, i, s, o, h) {
                    let {
                        alignOptions: d,
                        axis: c,
                        label: p,
                        options: u,
                        textAlign: g
                    } = this, f = c.chart, m = this.getStackBox({
                        xOffset: t,
                        width: e,
                        boxBottom: i,
                        boxTop: s,
                        defaultX: o,
                        xAxis: h
                    }), {
                        verticalAlign: x
                    } = d;
                    if (p && m) {
                        let t, e = p.getBBox(void 0, 0),
                            i = p.padding,
                            s = "justify" === l(u.overflow, "justify");
                        d.x = u.x || 0, d.y = u.y || 0;
                        let {
                            x: o,
                            y: a
                        } = this.adjustStackPosition({
                            labelBox: e,
                            verticalAlign: x,
                            textAlign: g
                        });
                        m.x -= o, m.y -= a, p.align(d, !1, m), (t = f.isInsidePlot(p.alignAttr.x + d.x + o, p.alignAttr.y + d.y + a)) || (s = !1), s && r.prototype.justifyDataLabel.call(c, p, d, p.alignAttr, e, m), p.attr({
                            x: p.alignAttr.x,
                            y: p.alignAttr.y,
                            rotation: u.rotation,
                            rotationOriginX: e.width * {
                                left: 0,
                                center: .5,
                                right: 1
                            }[u.textAlign || "center"],
                            rotationOriginY: e.height / 2
                        }), l(!s && u.crop, !0) && (t = n(p.x) && n(p.y) && f.isInsidePlot(p.x - i + (p.width || 0), p.y) && f.isInsidePlot(p.x + i, p.y)), p[t ? "show" : "hide"]()
                    }
                    a(this, "afterSetOffset", {
                        xOffset: t,
                        width: e
                    })
                }
                adjustStackPosition({
                    labelBox: t,
                    verticalAlign: e,
                    textAlign: i
                }) {
                    let s = {
                            bottom: 0,
                            middle: 1,
                            top: 2,
                            right: 1,
                            center: 0,
                            left: -1
                        },
                        r = s[e],
                        o = s[i];
                    return {
                        x: t.width / 2 + t.width / 2 * o,
                        y: t.height / 2 * r
                    }
                }
                getStackBox(t) {
                    let e = this.axis,
                        i = e.chart,
                        {
                            boxTop: s,
                            defaultX: r,
                            xOffset: o,
                            width: a,
                            boxBottom: h
                        } = t,
                        d = e.stacking.usePercentage ? 100 : l(s, this.total, 0),
                        c = e.toPixels(d),
                        p = t.xAxis || i.xAxis[0],
                        u = l(r, p.translate(this.x)) + o,
                        g = Math.abs(c - e.toPixels(h || n(e.min) && e.logarithmic && e.logarithmic.lin2log(e.min) || 0)),
                        f = i.inverted,
                        m = this.isNegative;
                    return f ? {
                        x: (m ? c : c - g) - i.plotLeft,
                        y: p.height - u - a,
                        width: g,
                        height: a
                    } : {
                        x: u + p.transB - i.plotLeft,
                        y: (m ? c - g : c) - i.plotTop,
                        width: a,
                        height: g
                    }
                }
            }
        })), i(e, "Core/Axis/Stacking/StackingAxis.js", [e["Core/Animation/AnimationUtilities.js"], e["Core/Axis/Axis.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Axis/Stacking/StackItem.js"], e["Core/Utilities.js"]], (function(t, e, i, s, r) {
            var o;
            let {
                getDeferredAnimation: a
            } = t, {
                series: {
                    prototype: n
                }
            } = i, {
                addEvent: l,
                correctFloat: h,
                defined: d,
                destroyObjectProperties: c,
                fireEvent: p,
                isArray: u,
                isNumber: g,
                objectEach: f,
                pick: m
            } = r;

            function x() {
                let t = this.inverted;
                this.axes.forEach((t => {
                    t.stacking && t.stacking.stacks && t.hasVisibleSeries && (t.stacking.oldStacks = t.stacking.stacks)
                })), this.series.forEach((e => {
                    let i = e.xAxis && e.xAxis.options || {};
                    e.options.stacking && e.reserveSpace() && (e.stackKey = [e.type, m(e.options.stack, ""), t ? i.top : i.left, t ? i.height : i.width].join(","))
                }))
            }

            function y() {
                var t;
                let e = this.stacking;
                if (e) {
                    let i = e.stacks;
                    f(i, ((t, e) => {
                        c(t), delete i[e]
                    })), null == (t = e.stackTotalGroup) || t.destroy()
                }
            }

            function v() {
                this.stacking || (this.stacking = new M(this))
            }

            function b(t, e, i, s) {
                return !d(t) || t.x !== e || s && t.stackKey !== s ? t = {
                    x: e,
                    index: 0,
                    key: s,
                    stackKey: s
                } : t.index++, t.key = [i, e, t.index].join(","), t
            }

            function k() {
                let t, e = this,
                    i = e.yAxis,
                    s = e.stackKey || "",
                    r = i.stacking.stacks,
                    o = e.processedXData,
                    a = e.options.stacking,
                    n = e[a + "Stacker"];
                n && [s, "-" + s].forEach((i => {
                    var s;
                    let a, l, h, d = o.length;
                    for (; d--;) a = o[d], t = e.getStackIndicator(t, a, e.index, i), l = null == (s = r[i]) ? void 0 : s[a], (h = null == l ? void 0 : l.points[t.key || ""]) && n.call(e, h, l, d)
                }))
            }

            function S(t, e, i) {
                let s = e.total ? 100 / e.total : 0;
                t[0] = h(t[0] * s), t[1] = h(t[1] * s), this.stackedYData[i] = t[1]
            }

            function C(t) {
                (this.is("column") || this.is("columnrange")) && (this.options.centerInCategory && !this.options.stacking && this.chart.series.length > 1 ? n.setStackedPoints.call(this, t, "group") : t.stacking.resetStacks())
            }

            function w(t, e) {
                var i, r;
                let o, a, n, l, c, p, g, f, x, y = e || this.options.stacking;
                if (!y || !this.reserveSpace() || ({
                        group: "xAxis"
                    }[y] || "yAxis") !== t.coll) return;
                let v = this.processedXData,
                    b = this.processedYData,
                    k = [],
                    S = b.length,
                    C = this.options,
                    w = C.threshold || 0,
                    M = C.startFromThreshold ? w : 0,
                    A = C.stack,
                    T = e ? `${this.type},${y}` : this.stackKey || "",
                    P = "-" + T,
                    L = this.negStacks,
                    O = t.stacking,
                    E = O.stacks,
                    D = O.oldStacks;
                for (O.stacksTouched += 1, g = 0; g < S; g++) {
                    f = v[g], x = b[g], p = (o = this.getStackIndicator(o, f, this.index)).key || "", E[c = (a = L && x < (M ? 0 : w)) ? P : T] || (E[c] = {}), E[c][f] || ((null == (i = D[c]) ? void 0 : i[f]) ? (E[c][f] = D[c][f], E[c][f].total = null) : E[c][f] = new s(t, t.options.stackLabels, !!a, f, A)), n = E[c][f], null !== x ? (n.points[p] = n.points[this.index] = [m(n.cumulative, M)], d(n.cumulative) || (n.base = p), n.touched = O.stacksTouched, o.index > 0 && !1 === this.singleStacks && (n.points[p][0] = n.points[this.index + "," + f + ",0"][0])) : (delete n.points[p], delete n.points[this.index]);
                    let e = n.total || 0;
                    "percent" === y ? (l = a ? T : P, e = L && (null == (r = E[l]) ? void 0 : r[f]) ? (l = E[l][f]).total = Math.max(l.total || 0, e) + Math.abs(x) || 0 : h(e + (Math.abs(x) || 0))) : "group" === y ? (u(x) && (x = x[0]), null !== x && e++) : e = h(e + (x || 0)), n.cumulative = "group" === y ? (e || 1) - 1 : h(m(n.cumulative, M) + (x || 0)), n.total = e, null !== x && (n.points[p].push(n.cumulative), k[g] = n.cumulative, n.hasValidPoints = !0)
                }
                "percent" === y && (O.usePercentage = !0), "group" !== y && (this.stackedYData = k), O.oldStacks = {}
            }
            class M {
                constructor(t) {
                    this.oldStacks = {}, this.stacks = {}, this.stacksTouched = 0, this.axis = t
                }
                buildStacks() {
                    let t, e, i = this.axis,
                        s = i.series,
                        r = "xAxis" === i.coll,
                        o = i.options.reversedStacks,
                        a = s.length;
                    for (this.resetStacks(), this.usePercentage = !1, e = a; e--;) t = s[o ? e : a - e - 1], r && t.setGroupedPoints(i), t.setStackedPoints(i);
                    if (!r)
                        for (e = 0; e < a; e++) s[e].modifyStacks();
                    p(i, "afterBuildStacks")
                }
                cleanStacks() {
                    this.oldStacks && (this.stacks = this.oldStacks, f(this.stacks, (t => {
                        f(t, (t => {
                            t.cumulative = t.total
                        }))
                    })))
                }
                resetStacks() {
                    f(this.stacks, (t => {
                        f(t, ((e, i) => {
                            g(e.touched) && e.touched < this.stacksTouched ? (e.destroy(), delete t[i]) : (e.total = null, e.cumulative = null)
                        }))
                    }))
                }
                renderStackTotals() {
                    var t;
                    let e = this.axis,
                        i = e.chart,
                        s = i.renderer,
                        r = this.stacks,
                        o = a(i, (null == (t = e.options.stackLabels) ? void 0 : t.animation) || !1),
                        n = this.stackTotalGroup = this.stackTotalGroup || s.g("stack-labels").attr({
                            zIndex: 6,
                            opacity: 0
                        }).add();
                    n.translate(i.plotLeft, i.plotTop), f(r, (t => {
                        f(t, (t => {
                            t.render(n)
                        }))
                    })), n.animate({
                        opacity: 1
                    }, o)
                }
            }
            return (o || (o = {})).compose = function(t, e, i) {
                let s = e.prototype,
                    r = i.prototype;
                s.getStacks || (l(t, "init", v), l(t, "destroy", y), s.getStacks = x, r.getStackIndicator = b, r.modifyStacks = k, r.percentStacker = S, r.setGroupedPoints = C, r.setStackedPoints = w)
            }, o
        })), i(e, "Series/Line/LineSeries.js", [e["Core/Series/Series.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], (function(t, e, i) {
            let {
                defined: s,
                merge: r,
                isObject: o
            } = i;
            class a extends t {
                drawGraph() {
                    let t = this.options,
                        e = (this.gappedPath || this.getGraphPath).call(this),
                        i = this.chart.styledMode;
                    [this, ...this.zones].forEach(((s, a) => {
                        let n, l = s.graph,
                            h = l ? "animate" : "attr",
                            d = s.dashStyle || t.dashStyle;
                        l ? (l.endX = this.preventGraphAnimation ? null : e.xMap, l.animate({
                            d: e
                        })) : e.length && (s.graph = l = this.chart.renderer.path(e).addClass("highcharts-graph" + (a ? ` highcharts-zone-graph-${a-1} ` : " ") + (a && s.className || "")).attr({
                            zIndex: 1
                        }).add(this.group)), l && !i && (n = {
                            stroke: !a && t.lineColor || s.color || this.color || "#cccccc",
                            "stroke-width": t.lineWidth || 0,
                            fill: this.fillGraph && this.color || "none"
                        }, d ? n.dashstyle = d : "square" !== t.linecap && (n["stroke-linecap"] = n["stroke-linejoin"] = "round"), l[h](n).shadow(a < 2 && t.shadow && r({
                            filterUnits: "userSpaceOnUse"
                        }, o(t.shadow) ? t.shadow : {}))), l && (l.startX = e.xMap, l.isArea = e.isArea)
                    }))
                }
                getGraphPath(t, e, i) {
                    let r, o = this,
                        a = o.options,
                        n = [],
                        l = [],
                        h = a.step,
                        d = (t = t || o.points).reversed;
                    return d && t.reverse(), (h = {
                        right: 1,
                        center: 2
                    }[h] || h && 3) && d && (h = 4 - h), (t = this.getValidPoints(t, !1, !(a.connectNulls && !e && !i))).forEach((function(d, c) {
                        let p, u = d.plotX,
                            g = d.plotY,
                            f = t[c - 1],
                            m = d.isNull || "number" != typeof g;
                        (d.leftCliff || f && f.rightCliff) && !i && (r = !0), m && !s(e) && c > 0 ? r = !a.connectNulls : m && !e ? r = !0 : (0 === c || r ? p = [
                            ["M", d.plotX, d.plotY]
                        ] : o.getPointSpline ? p = [o.getPointSpline(t, d, c)] : h ? (p = 1 === h ? [
                            ["L", f.plotX, g]
                        ] : 2 === h ? [
                            ["L", (f.plotX + u) / 2, f.plotY],
                            ["L", (f.plotX + u) / 2, g]
                        ] : [
                            ["L", u, f.plotY]
                        ]).push(["L", u, g]) : p = [
                            ["L", u, g]
                        ], l.push(d.x), h && (l.push(d.x), 2 === h && l.push(d.x)), n.push.apply(n, p), r = !1)
                    })), n.xMap = l, o.graphPath = n, n
                }
            }
            return a.defaultOptions = r(t.defaultOptions, {
                legendSymbol: "lineMarker"
            }), e.registerSeriesType("line", a), a
        })), i(e, "Series/Area/AreaSeries.js", [e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], (function(t, e) {
            let {
                seriesTypes: {
                    line: i
                }
            } = t, {
                extend: s,
                merge: r,
                objectEach: o,
                pick: a
            } = e;
            class n extends i {
                drawGraph() {
                    this.areaPath = [], super.drawGraph.apply(this);
                    let {
                        areaPath: t,
                        options: e
                    } = this;
                    [this, ...this.zones].forEach(((i, s) => {
                        let r = {},
                            o = i.fillColor || e.fillColor,
                            a = i.area,
                            n = a ? "animate" : "attr";
                        a ? (a.endX = this.preventGraphAnimation ? null : t.xMap, a.animate({
                            d: t
                        })) : (r.zIndex = 0, (a = i.area = this.chart.renderer.path(t).addClass("highcharts-area" + (s ? ` highcharts-zone-area-${s-1} ` : " ") + (s && i.className || "")).add(this.group)).isArea = !0), this.chart.styledMode || (r.fill = o || i.color || this.color, r["fill-opacity"] = o ? 1 : e.fillOpacity ? ? .75, a.css({
                            pointerEvents: this.stickyTracking ? "none" : "auto"
                        })), a[n](r), a.startX = t.xMap, a.shiftUnit = e.step ? 2 : 1
                    }))
                }
                getGraphPath(t) {
                    let e, s, r, o = i.prototype.getGraphPath,
                        n = this.options,
                        l = n.stacking,
                        h = this.yAxis,
                        d = [],
                        c = [],
                        p = this.index,
                        u = h.stacking.stacks[this.stackKey],
                        g = n.threshold,
                        f = Math.round(h.getThreshold(n.threshold)),
                        m = a(n.connectNulls, "percent" === l),
                        x = function(i, s, r) {
                            let o, a, n = t[i],
                                m = l && u[n.x].points[p],
                                x = n[r + "Null"] || 0,
                                y = n[r + "Cliff"] || 0,
                                v = !0;
                            y || x ? (o = (x ? m[0] : m[1]) + y, a = m[0] + y, v = !!x) : !l && t[s] && t[s].isNull && (o = a = g), void 0 !== o && (c.push({
                                plotX: e,
                                plotY: null === o ? f : h.getThreshold(o),
                                isNull: v,
                                isCliff: !0
                            }), d.push({
                                plotX: e,
                                plotY: null === a ? f : h.getThreshold(a),
                                doCurve: !1
                            }))
                        };
                    t = t || this.points, l && (t = this.getStackPoints(t));
                    for (let i = 0, C = t.length; i < C; ++i) l || (t[i].leftCliff = t[i].rightCliff = t[i].leftNull = t[i].rightNull = void 0), s = t[i].isNull, e = a(t[i].rectPlotX, t[i].plotX), r = l ? a(t[i].yBottom, f) : f, s && !m || (m || x(i, i - 1, "left"), s && !l && m || (c.push(t[i]), d.push({
                        x: i,
                        plotX: e,
                        plotY: r
                    })), m || x(i, i + 1, "right"));
                    let y = o.call(this, c, !0, !0);
                    d.reversed = !0;
                    let v = o.call(this, d, !0, !0),
                        b = v[0];
                    b && "M" === b[0] && (v[0] = ["L", b[1], b[2]]);
                    let k = y.concat(v);
                    k.length && k.push(["Z"]);
                    let S = o.call(this, c, !1, m);
                    return k.xMap = y.xMap, this.areaPath = k, S
                }
                getStackPoints(t) {
                    let e = this,
                        i = [],
                        s = [],
                        r = this.xAxis,
                        n = this.yAxis,
                        l = n.stacking.stacks[this.stackKey],
                        h = {},
                        d = n.series,
                        c = d.length,
                        p = n.options.reversedStacks ? 1 : -1,
                        u = d.indexOf(e);
                    if (t = t || this.points, this.options.stacking) {
                        for (let e = 0; e < t.length; e++) t[e].leftNull = t[e].rightNull = void 0, h[t[e].x] = t[e];
                        o(l, (function(t, e) {
                            null !== t.total && s.push(e)
                        })), s.sort((function(t, e) {
                            return t - e
                        }));
                        let g = d.map((t => t.visible));
                        s.forEach((function(t, o) {
                            let f, m, x = 0;
                            if (h[t] && !h[t].isNull) i.push(h[t]), [-1, 1].forEach((function(i) {
                                let r = 1 === i ? "rightNull" : "leftNull",
                                    a = l[s[o + i]],
                                    n = 0;
                                if (a) {
                                    let i = u;
                                    for (; i >= 0 && i < c;) {
                                        let s = d[i].index;
                                        !(f = a.points[s]) && (s === e.index ? h[t][r] = !0 : g[i] && (m = l[t].points[s]) && (n -= m[1] - m[0])), i += p
                                    }
                                }
                                h[t][1 === i ? "rightCliff" : "leftCliff"] = n
                            }));
                            else {
                                let e = u;
                                for (; e >= 0 && e < c;) {
                                    let i = d[e].index;
                                    if (f = l[t].points[i]) {
                                        x = f[1];
                                        break
                                    }
                                    e += p
                                }
                                x = a(x, 0), x = n.translate(x, 0, 1, 0, 1), i.push({
                                    isNull: !0,
                                    plotX: r.translate(t, 0, 0, 0, 1),
                                    x: t,
                                    plotY: x,
                                    yBottom: x
                                })
                            }
                        }))
                    }
                    return i
                }
            }
            return n.defaultOptions = r(i.defaultOptions, {
                threshold: 0,
                legendSymbol: "areaMarker"
            }), s(n.prototype, {
                singleStacks: !1
            }), t.registerSeriesType("area", n), n
        })), i(e, "Series/Spline/SplineSeries.js", [e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], (function(t, e) {
            let {
                line: i
            } = t.seriesTypes, {
                merge: s,
                pick: r
            } = e;
            class o extends i {
                getPointSpline(t, e, i) {
                    let s, o, a, n, l = e.plotX || 0,
                        h = e.plotY || 0,
                        d = t[i - 1],
                        c = t[i + 1];

                    function p(t) {
                        return t && !t.isNull && !1 !== t.doCurve && !e.isCliff
                    }
                    if (p(d) && p(c)) {
                        let t = d.plotX || 0,
                            i = d.plotY || 0,
                            r = c.plotX || 0,
                            p = c.plotY || 0,
                            u = 0;
                        s = (1.5 * l + t) / 2.5, o = (1.5 * h + i) / 2.5, a = (1.5 * l + r) / 2.5, n = (1.5 * h + p) / 2.5, a !== s && (u = (n - o) * (a - l) / (a - s) + h - n), o += u, n += u, o > i && o > h ? (o = Math.max(i, h), n = 2 * h - o) : o < i && o < h && (o = Math.min(i, h), n = 2 * h - o), n > p && n > h ? (n = Math.max(p, h), o = 2 * h - n) : n < p && n < h && (n = Math.min(p, h), o = 2 * h - n), e.rightContX = a, e.rightContY = n, e.controlPoints = {
                            low: [s, o],
                            high: [a, n]
                        }
                    }
                    let u = ["C", r(d.rightContX, d.plotX, 0), r(d.rightContY, d.plotY, 0), r(s, l, 0), r(o, h, 0), l, h];
                    return d.rightContX = d.rightContY = void 0, u
                }
            }
            return o.defaultOptions = s(i.defaultOptions), t.registerSeriesType("spline", o), o
        })), i(e, "Series/AreaSpline/AreaSplineSeries.js", [e["Series/Spline/SplineSeries.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], (function(t, e, i) {
            let {
                area: s,
                area: {
                    prototype: r
                }
            } = e.seriesTypes, {
                extend: o,
                merge: a
            } = i;
            class n extends t {}
            return n.defaultOptions = a(t.defaultOptions, s.defaultOptions), o(n.prototype, {
                getGraphPath: r.getGraphPath,
                getStackPoints: r.getStackPoints,
                drawGraph: r.drawGraph
            }), e.registerSeriesType("areaspline", n), n
        })), i(e, "Series/Column/ColumnSeriesDefaults.js", [], (function() {
            return {
                borderRadius: 3,
                centerInCategory: !1,
                groupPadding: .2,
                marker: null,
                pointPadding: .1,
                minPointLength: 0,
                cropThreshold: 50,
                pointRange: null,
                states: {
                    hover: {
                        halo: !1,
                        brightness: .1
                    },
                    select: {
                        color: "#cccccc",
                        borderColor: "#000000"
                    }
                },
                dataLabels: {
                    align: void 0,
                    verticalAlign: void 0,
                    y: void 0
                },
                startFromThreshold: !0,
                stickyTracking: !1,
                tooltip: {
                    distance: 6
                },
                threshold: 0,
                borderColor: "#ffffff"
            }
        })), i(e, "Series/Column/ColumnSeries.js", [e["Core/Animation/AnimationUtilities.js"], e["Core/Color/Color.js"], e["Series/Column/ColumnSeriesDefaults.js"], e["Core/Globals.js"], e["Core/Series/Series.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], (function(t, e, i, s, r, o, a) {
            let {
                animObject: n
            } = t, {
                parse: l
            } = e, {
                noop: h
            } = s, {
                clamp: d,
                defined: c,
                extend: p,
                fireEvent: u,
                isArray: g,
                isNumber: f,
                merge: m,
                pick: x,
                objectEach: y
            } = a;
            class v extends r {
                animate(t) {
                    let e, i, s = this,
                        r = this.yAxis,
                        o = r.pos,
                        a = s.options,
                        l = this.chart.inverted,
                        h = {},
                        c = l ? "translateX" : "translateY";
                    t ? (h.scaleY = .001, i = d(r.toPixels(a.threshold), o, o + r.len), l ? h.translateX = i - r.len : h.translateY = i, s.clipBox && s.setClip(), s.group.attr(h)) : (e = Number(s.group.attr(c)), s.group.animate({
                        scaleY: 1
                    }, p(n(s.options.animation), {
                        step: function(t, i) {
                            s.group && (h[c] = e + i.pos * (o - e), s.group.attr(h))
                        }
                    })))
                }
                init(t, e) {
                    super.init.apply(this, arguments);
                    let i = this;
                    (t = i.chart).hasRendered && t.series.forEach((function(t) {
                        t.type === i.type && (t.isDirty = !0)
                    }))
                }
                getColumnMetrics() {
                    var t, e;
                    let i, s = this,
                        r = s.options,
                        o = s.xAxis,
                        a = s.yAxis,
                        n = o.options.reversedStacks,
                        l = o.reversed && !n || !o.reversed && n,
                        h = {},
                        d = 0;
                    !1 === r.grouping ? d = 1 : s.chart.series.forEach((function(t) {
                        let e, r = t.yAxis,
                            o = t.options;
                        t.type === s.type && t.reserveSpace() && a.len === r.len && a.pos === r.pos && (o.stacking && "group" !== o.stacking ? (void 0 === h[i = t.stackKey] && (h[i] = d++), e = h[i]) : !1 !== o.grouping && (e = d++), t.columnIndex = e)
                    }));
                    let c = Math.min(Math.abs(o.transA) * (!(null == (t = o.brokenAxis) ? void 0 : t.hasBreaks) && (null == (e = o.ordinal) ? void 0 : e.slope) || r.pointRange || o.closestPointRange || o.tickInterval || 1), o.len),
                        p = c * r.groupPadding,
                        u = (c - 2 * p) / (d || 1),
                        g = Math.min(r.maxPointWidth || o.len, x(r.pointWidth, u * (1 - 2 * r.pointPadding))),
                        f = (s.columnIndex || 0) + (l ? 1 : 0);
                    return s.columnMetrics = {
                        width: g,
                        offset: (u - g) / 2 + (p + f * u - c / 2) * (l ? -1 : 1),
                        paddedWidth: u,
                        columnCount: d
                    }, s.columnMetrics
                }
                crispCol(t, e, i, s) {
                    let r = this.borderWidth,
                        o = -(r % 2 ? .5 : 0),
                        a = r % 2 ? .5 : 1;
                    this.options.crisp && (i = Math.round(t + i) + o - (t = Math.round(t) + o));
                    let n = Math.round(e + s) + a,
                        l = .5 >= Math.abs(e) && n > .5;
                    return s = n - (e = Math.round(e) + a), l && s && (e -= 1, s += 1), {
                        x: t,
                        y: e,
                        width: i,
                        height: s
                    }
                }
                adjustForMissingColumns(t, e, i, s) {
                    var r;
                    if (!i.isNull && s.columnCount > 1) {
                        let o = this.xAxis.series.filter((t => t.visible)).map((t => t.index)),
                            a = 0,
                            n = 0;
                        y(null == (r = this.xAxis.stacking) ? void 0 : r.stacks, (t => {
                            if ("number" == typeof i.x) {
                                let e = t[i.x.toString()];
                                if (e && g(e.points[this.index])) {
                                    let t = Object.keys(e.points).filter((t => !t.match(",") && e.points[t] && e.points[t].length > 1)).map(parseFloat).filter((t => -1 !== o.indexOf(t))).sort(((t, e) => e - t));
                                    a = t.indexOf(this.index), n = t.length
                                }
                            }
                        })), a = this.xAxis.reversed ? n - 1 - a : a;
                        let l = (n - 1) * s.paddedWidth + e;
                        t = (i.plotX || 0) + l / 2 - e - a * s.paddedWidth
                    }
                    return t
                }
                translate() {
                    let t = this,
                        e = t.chart,
                        i = t.options,
                        s = t.dense = t.closestPointRange * t.xAxis.transA < 2,
                        o = t.borderWidth = x(i.borderWidth, s ? 0 : 1),
                        a = t.xAxis,
                        n = t.yAxis,
                        l = i.threshold,
                        h = x(i.minPointLength, 5),
                        p = t.getColumnMetrics(),
                        g = p.width,
                        m = t.pointXOffset = p.offset,
                        y = t.dataMin,
                        v = t.dataMax,
                        b = t.barW = Math.max(g, 1 + 2 * o),
                        k = t.translatedThreshold = n.getThreshold(l);
                    e.inverted && (k -= .5), i.pointPadding && (b = Math.ceil(b)), r.prototype.translate.apply(t), t.points.forEach((function(s) {
                        let r, o = x(s.yBottom, k),
                            u = 999 + Math.abs(o),
                            S = s.plotX || 0,
                            C = d(s.plotY, -u, n.len + u),
                            w = Math.min(C, o),
                            M = Math.max(C, o) - w,
                            A = g,
                            T = S + m,
                            P = b;
                        h && Math.abs(M) < h && (M = h, r = !n.reversed && !s.negative || n.reversed && s.negative, f(l) && f(v) && s.y === l && v <= l && (n.min || 0) < l && (y !== v || (n.max || 0) <= l) && (r = !r, s.negative = !s.negative), w = Math.abs(w - k) > h ? o - h : k - (r ? h : 0)), c(s.options.pointWidth) && (T -= Math.round(((A = P = Math.ceil(s.options.pointWidth)) - g) / 2)), i.centerInCategory && !i.stacking && (T = t.adjustForMissingColumns(T, A, s, p)), s.barX = T, s.pointWidth = A, s.tooltipPos = e.inverted ? [d(n.len + n.pos - e.plotLeft - C, n.pos - e.plotLeft, n.len + n.pos - e.plotLeft), a.len + a.pos - e.plotTop - T - P / 2, M] : [a.left - e.plotLeft + T + P / 2, d(C + n.pos - e.plotTop, n.pos - e.plotTop, n.len + n.pos - e.plotTop), M], s.shapeType = t.pointClass.prototype.shapeType || "roundedRect", s.shapeArgs = t.crispCol(T, s.isNull ? k : w, P, s.isNull ? 0 : M)
                    })), u(this, "afterColumnTranslate")
                }
                drawGraph() {
                    this.group[this.dense ? "addClass" : "removeClass"]("highcharts-dense-data")
                }
                pointAttribs(t, e) {
                    let i, s, r, o = this.options,
                        a = this.pointAttrToOptions || {},
                        n = a.stroke || "borderColor",
                        h = a["stroke-width"] || "borderWidth",
                        d = t && t.color || this.color,
                        c = t && t[n] || o[n] || d,
                        p = t && t.options.dashStyle || o.dashStyle,
                        u = t && t[h] || o[h] || this[h] || 0,
                        g = x(t && t.opacity, o.opacity, 1);
                    t && this.zones.length && (s = t.getZone(), d = t.options.color || s && (s.color || t.nonZonedColor) || this.color, s && (c = s.borderColor || c, p = s.dashStyle || p, u = s.borderWidth || u)), e && t && (r = (i = m(o.states[e], t.options.states && t.options.states[e] || {})).brightness, d = i.color || void 0 !== r && l(d).brighten(i.brightness).get() || d, c = i[n] || c, u = i[h] || u, p = i.dashStyle || p, g = x(i.opacity, g));
                    let f = {
                        fill: d,
                        stroke: c,
                        "stroke-width": u,
                        opacity: g
                    };
                    return p && (f.dashstyle = p), f
                }
                drawPoints(t = this.points) {
                    let e, i = this,
                        s = this.chart,
                        r = i.options,
                        o = s.renderer,
                        a = r.animationLimit || 250;
                    t.forEach((function(t) {
                        let n = t.plotY,
                            l = t.graphic,
                            h = !!l,
                            d = l && s.pointCount < a ? "animate" : "attr";
                        f(n) && null !== t.y ? (e = t.shapeArgs, l && t.hasNewShapeType() && (l = l.destroy()), i.enabledDataSorting && (t.startXPos = i.xAxis.reversed ? -(e && e.width || 0) : i.xAxis.width), !l && (t.graphic = l = o[t.shapeType](e).add(t.group || i.group), l && i.enabledDataSorting && s.hasRendered && s.pointCount < a && (l.attr({
                            x: t.startXPos
                        }), h = !0, d = "animate")), l && h && l[d](m(e)), s.styledMode || l[d](i.pointAttribs(t, t.selected && "select")).shadow(!1 !== t.allowShadow && r.shadow), l && (l.addClass(t.getClassName(), !0), l.attr({
                            visibility: t.visible ? "inherit" : "hidden"
                        }))) : l && (t.graphic = l.destroy())
                    }))
                }
                drawTracker(t = this.points) {
                    let e, i = this,
                        s = i.chart,
                        r = s.pointer,
                        o = function(t) {
                            let e = null == r ? void 0 : r.getPointFromEvent(t);
                            r && e && i.options.enableMouseTracking && (r.isDirectTouch = !0, e.onMouseOver(t))
                        };
                    t.forEach((function(t) {
                        e = g(t.dataLabels) ? t.dataLabels : t.dataLabel ? [t.dataLabel] : [], t.graphic && (t.graphic.element.point = t), e.forEach((function(e) {
                            (e.div || e.element).point = t
                        }))
                    })), i._hasTracking || (i.trackerGroups.forEach((function(t) {
                        i[t] && (i[t].addClass("highcharts-tracker").on("mouseover", o).on("mouseout", (function(t) {
                            null == r || r.onTrackerMouseOut(t)
                        })).on("touchstart", o), !s.styledMode && i.options.cursor && i[t].css({
                            cursor: i.options.cursor
                        }))
                    })), i._hasTracking = !0), u(this, "afterDrawTracker")
                }
                remove() {
                    let t = this,
                        e = t.chart;
                    e.hasRendered && e.series.forEach((function(e) {
                        e.type === t.type && (e.isDirty = !0)
                    })), r.prototype.remove.apply(t, arguments)
                }
            }
            return v.defaultOptions = m(r.defaultOptions, i), p(v.prototype, {
                directTouch: !0,
                getSymbol: h,
                negStacks: !0,
                trackerGroups: ["group", "dataLabelsGroup"]
            }), o.registerSeriesType("column", v), v
        })), i(e, "Core/Series/DataLabel.js", [e["Core/Animation/AnimationUtilities.js"], e["Core/Templating.js"], e["Core/Utilities.js"]], (function(t, e, i) {
            var s;
            let {
                getDeferredAnimation: r
            } = t, {
                format: o
            } = e, {
                defined: a,
                extend: n,
                fireEvent: l,
                isArray: h,
                isString: d,
                merge: c,
                objectEach: p,
                pick: u,
                pInt: g,
                splat: f
            } = i;
            return function(t) {
                function e() {
                    return b(this).some((t => null == t ? void 0 : t.enabled))
                }

                function i(t, e, i, s, r) {
                    let o = this.chart,
                        l = this.isCartesian && o.inverted,
                        h = this.enabledDataSorting,
                        d = t.plotX,
                        p = t.plotY,
                        g = i.rotation || 0,
                        f = a(d) && a(p) && o.isInsidePlot(d, Math.round(p), {
                            inverted: l,
                            paneCoordinates: !0,
                            series: this
                        }),
                        m = 0 === g && "justify" === u(i.overflow, h ? "none" : "justify"),
                        x = this.visible && !1 !== t.visible && a(d) && (t.series.forceDL || h && !m || f || u(i.inside, !!this.options.stacking) && s && o.isInsidePlot(d, l ? s.x + 1 : s.y + s.height - 1, {
                            inverted: l,
                            paneCoordinates: !0,
                            series: this
                        })),
                        y = t.pos();
                    if (x && y) {
                        var v;
                        let a = e.getBBox(),
                            l = e.getBBox(void 0, 0),
                            d = {
                                right: 1,
                                center: .5
                            }[i.align || 0] || 0,
                            p = {
                                bottom: 1,
                                middle: .5
                            }[i.verticalAlign || 0] || 0;
                        if (s = n({
                                x: y[0],
                                y: Math.round(y[1]),
                                width: 0,
                                height: 0
                            }, s || {}), n(i, {
                                width: a.width,
                                height: a.height
                            }), v = s, h && this.xAxis && !m && this.setDataLabelStartPos(t, e, r, f, v), e.align(c(i, {
                                width: l.width,
                                height: l.height
                            }), !1, s, !1), e.alignAttr.x += d * (l.width - a.width), e.alignAttr.y += p * (l.height - a.height), e[e.placed ? "animate" : "attr"]({
                                x: e.alignAttr.x + (a.width - l.width) / 2,
                                y: e.alignAttr.y + (a.height - l.height) / 2,
                                rotationOriginX: (e.width || 0) / 2,
                                rotationOriginY: (e.height || 0) / 2
                            }), m && s.height >= 0) this.justifyDataLabel(e, i, e.alignAttr, a, s, r);
                        else if (u(i.crop, !0)) {
                            let {
                                x: t,
                                y: i
                            } = e.alignAttr;
                            x = o.isInsidePlot(t, i, {
                                paneCoordinates: !0,
                                series: this
                            }) && o.isInsidePlot(t + a.width - 1, i + a.height - 1, {
                                paneCoordinates: !0,
                                series: this
                            })
                        }
                        i.shape && !g && e[r ? "attr" : "animate"]({
                            anchorX: y[0],
                            anchorY: y[1]
                        })
                    }
                    r && h && (e.placed = !1), x || h && !m ? (e.show(), e.placed = !0) : (e.hide(), e.placed = !1)
                }

                function s() {
                    return this.plotGroup("dataLabelsGroup", "data-labels", this.hasRendered ? "inherit" : "hidden", this.options.dataLabels.zIndex || 6)
                }

                function m(t) {
                    let e = this.hasRendered || 0,
                        i = this.initDataLabelsGroup().attr({
                            opacity: +e
                        });
                    return !e && i && (this.visible && i.show(), this.options.animation ? i.animate({
                        opacity: 1
                    }, t) : i.attr({
                        opacity: 1
                    })), i
                }

                function x(t) {
                    var e;
                    let i;
                    t = t || this.points;
                    let s = this,
                        n = s.chart,
                        h = s.options,
                        c = n.renderer,
                        {
                            backgroundColor: m,
                            plotBackgroundColor: x
                        } = n.options.chart,
                        y = c.getContrast(d(x) && x || d(m) && m || "#000000"),
                        k = b(s),
                        {
                            animation: S,
                            defer: C
                        } = k[0],
                        w = C ? r(n, S, s) : {
                            defer: 0,
                            duration: 0
                        };
                    l(this, "drawDataLabels"), (null == (e = s.hasDataLabels) ? void 0 : e.call(s)) && (i = this.initDataLabels(w), t.forEach((t => {
                        var e, r;
                        let l = t.dataLabels || [];
                        f(v(k, t.dlOptions || (null == (e = t.options) ? void 0 : e.dataLabels))).forEach(((e, r) => {
                            var f;
                            let m, x, v, b, k, S = e.enabled && (t.visible || t.dataLabelOnHidden) && (!t.isNull || t.dataLabelOnNull) && function(t, e) {
                                    let i = e.filter;
                                    if (i) {
                                        let e = i.operator,
                                            s = t[i.property],
                                            r = i.value;
                                        return ">" === e && s > r || "<" === e && s < r || ">=" === e && s >= r || "<=" === e && s <= r || "==" === e && s == r || "===" === e && s === r || "!=" === e && s != r || "!==" === e && s !== r
                                    }
                                    return !0
                                }(t, e),
                                {
                                    backgroundColor: C,
                                    borderColor: w,
                                    distance: M,
                                    style: A = {}
                                } = e,
                                T = {},
                                P = l[r],
                                L = !P;
                            if (S && (x = u(e[t.formatPrefix + "Format"], e.format), m = t.getLabelConfig(), v = a(x) ? o(x, m, n) : (e[t.formatPrefix + "Formatter"] || e.formatter).call(m, e), b = e.rotation, !n.styledMode && (A.color = u(e.color, A.color, d(s.color) ? s.color : void 0, "#000000"), "contrast" === A.color ? ("none" !== C && (k = C), t.contrastColor = c.getContrast("auto" !== k && k || t.color || s.color), A.color = k || !a(M) && e.inside || 0 > g(M || 0) || h.stacking ? t.contrastColor : y) : delete t.contrastColor, h.cursor && (A.cursor = h.cursor)), T = {
                                    r: e.borderRadius || 0,
                                    rotation: b,
                                    padding: e.padding,
                                    zIndex: 1
                                }, n.styledMode || (T.fill = "auto" === C ? t.color : C, T.stroke = "auto" === w ? t.color : w, T["stroke-width"] = e.borderWidth), p(T, ((t, e) => {
                                    void 0 === t && delete T[e]
                                }))), !P || S && a(v) && !!P.div == !!e.useHTML && (P.rotation && e.rotation || P.rotation === e.rotation) || (P = void 0, L = !0), S && a(v) && (P ? T.text = v : (P = c.label(v, 0, 0, e.shape, void 0, void 0, e.useHTML, void 0, "data-label")).addClass(" highcharts-data-label-color-" + t.colorIndex + " " + (e.className || "") + (e.useHTML ? " highcharts-tracker" : "")), P)) {
                                P.options = e, P.attr(T), n.styledMode || P.css(A).shadow(e.shadow);
                                let o = e[t.formatPrefix + "TextPath"] || e.textPath;
                                o && !e.useHTML && (P.setTextPath((null == (f = t.getDataLabelPath) ? void 0 : f.call(t, P)) || t.graphic, o), t.dataLabelPath && !o.enabled && (t.dataLabelPath = t.dataLabelPath.destroy())), P.added || P.add(i), s.alignDataLabel(t, P, e, void 0, L), P.isActive = !0, l[r] && l[r] !== P && l[r].destroy(), l[r] = P
                            }
                        }));
                        let m = l.length;
                        for (; m--;) l[m] && l[m].isActive ? l[m].isActive = !1 : (null == (r = l[m]) || r.destroy(), l.splice(m, 1));
                        t.dataLabel = l[0], t.dataLabels = l
                    }))), l(this, "afterDrawDataLabels")
                }

                function y(t, e, i, s, r, o) {
                    let a, n, l = this.chart,
                        h = e.align,
                        d = e.verticalAlign,
                        c = t.box ? 0 : t.padding || 0,
                        {
                            x: p = 0,
                            y: u = 0
                        } = e;
                    return (a = (i.x || 0) + c) < 0 && ("right" === h && p >= 0 ? (e.align = "left", e.inside = !0) : p -= a, n = !0), (a = (i.x || 0) + s.width - c) > l.plotWidth && ("left" === h && p <= 0 ? (e.align = "right", e.inside = !0) : p += l.plotWidth - a, n = !0), (a = i.y + c) < 0 && ("bottom" === d && u >= 0 ? (e.verticalAlign = "top", e.inside = !0) : u -= a, n = !0), (a = (i.y || 0) + s.height - c) > l.plotHeight && ("top" === d && u <= 0 ? (e.verticalAlign = "bottom", e.inside = !0) : u += l.plotHeight - a, n = !0), n && (e.x = p, e.y = u, t.placed = !o, t.align(e, void 0, r)), n
                }

                function v(t, e) {
                    let i, s = [];
                    if (h(t) && !h(e)) s = t.map((function(t) {
                        return c(t, e)
                    }));
                    else if (h(e) && !h(t)) s = e.map((function(e) {
                        return c(t, e)
                    }));
                    else if (h(t) || h(e)) {
                        if (h(t) && h(e))
                            for (i = Math.max(t.length, e.length); i--;) s[i] = c(t[i], e[i])
                    } else s = c(t, e);
                    return s
                }

                function b(t) {
                    var e, i;
                    let s = t.chart.options.plotOptions;
                    return f(v(v(null == (e = null == s ? void 0 : s.series) ? void 0 : e.dataLabels, null == (i = null == s ? void 0 : s[t.type]) ? void 0 : i.dataLabels), t.options.dataLabels))
                }

                function k(t, e, i, s, r) {
                    let o = this.chart,
                        a = o.inverted,
                        n = this.xAxis,
                        l = n.reversed,
                        h = ((a ? e.height : e.width) || 0) / 2,
                        d = t.pointWidth,
                        c = d ? d / 2 : 0;
                    e.startXPos = a ? r.x : l ? -h - c : n.width - h + c, e.startYPos = a ? l ? this.yAxis.height - h + c : -h - c : r.y, s ? "hidden" === e.visibility && (e.show(), e.attr({
                        opacity: 0
                    }).animate({
                        opacity: 1
                    })) : e.attr({
                        opacity: 1
                    }).animate({
                        opacity: 0
                    }, void 0, e.hide), o.hasRendered && (i && e.attr({
                        x: e.startXPos,
                        y: e.startYPos
                    }), e.placed = !0)
                }
                t.compose = function(t) {
                    let r = t.prototype;
                    r.initDataLabels || (r.initDataLabels = m, r.initDataLabelsGroup = s, r.alignDataLabel = i, r.drawDataLabels = x, r.justifyDataLabel = y, r.setDataLabelStartPos = k, r.hasDataLabels = e)
                }
            }(s || (s = {})), s
        })), i(e, "Series/Column/ColumnDataLabel.js", [e["Core/Series/DataLabel.js"], e["Core/Globals.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], (function(t, e, i, s) {
            var r;
            let {
                composed: o
            } = e, {
                series: a
            } = i, {
                merge: n,
                pick: l,
                pushUnique: h
            } = s;
            return function(e) {
                function i(t, e, i, s, r) {
                    let o = this.chart.inverted,
                        h = t.series,
                        d = (h.xAxis ? h.xAxis.len : this.chart.plotSizeX) || 0,
                        c = (h.yAxis ? h.yAxis.len : this.chart.plotSizeY) || 0,
                        p = t.dlBox || t.shapeArgs,
                        u = l(t.below, t.plotY > l(this.translatedThreshold, c)),
                        g = l(i.inside, !!this.options.stacking);
                    if (p) {
                        if (s = n(p), "allow" !== i.overflow || !1 !== i.crop) {
                            s.y < 0 && (s.height += s.y, s.y = 0);
                            let t = s.y + s.height - c;
                            t > 0 && t < s.height && (s.height -= t)
                        }
                        o && (s = {
                            x: c - s.y - s.height,
                            y: d - s.x - s.width,
                            width: s.height,
                            height: s.width
                        }), g || (o ? (s.x += u ? 0 : s.width, s.width = 0) : (s.y += u ? s.height : 0, s.height = 0))
                    }
                    i.align = l(i.align, !o || g ? "center" : u ? "right" : "left"), i.verticalAlign = l(i.verticalAlign, o || g ? "middle" : u ? "top" : "bottom"), a.prototype.alignDataLabel.call(this, t, e, i, s, r), i.inside && t.contrastColor && e.css({
                        color: t.contrastColor
                    })
                }
                e.compose = function(e) {
                    t.compose(a), h(o, "ColumnDataLabel") && (e.prototype.alignDataLabel = i)
                }
            }(r || (r = {})), r
        })), i(e, "Series/Bar/BarSeries.js", [e["Series/Column/ColumnSeries.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], (function(t, e, i) {
            let {
                extend: s,
                merge: r
            } = i;
            class o extends t {}
            return o.defaultOptions = r(t.defaultOptions, {}), s(o.prototype, {
                inverted: !0
            }), e.registerSeriesType("bar", o), o
        })), i(e, "Series/Scatter/ScatterSeriesDefaults.js", [], (function() {
            return {
                lineWidth: 0,
                findNearestPointBy: "xy",
                jitter: {
                    x: 0,
                    y: 0
                },
                marker: {
                    enabled: !0
                },
                tooltip: {
                    headerFormat: '<span style="color:{point.color}">●</span> <span style="font-size: 0.8em"> {series.name}</span><br/>',
                    pointFormat: "x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>"
                }
            }
        })), i(e, "Series/Scatter/ScatterSeries.js", [e["Series/Scatter/ScatterSeriesDefaults.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], (function(t, e, i) {
            let {
                column: s,
                line: r
            } = e.seriesTypes, {
                addEvent: o,
                extend: a,
                merge: n
            } = i;
            class l extends r {
                applyJitter() {
                    let t = this,
                        e = this.options.jitter,
                        i = this.points.length;
                    e && this.points.forEach((function(s, r) {
                        ["x", "y"].forEach((function(o, a) {
                            let n, l, h, d, c = "plot" + o.toUpperCase();
                            e[o] && !s.isNull && (n = t[o + "Axis"], d = e[o] * n.transA, n && !n.isLog && (l = Math.max(0, s[c] - d), h = Math.min(n.len, s[c] + d), s[c] = l + (h - l) * function(t) {
                                let e = 1e4 * Math.sin(t);
                                return e - Math.floor(e)
                            }(r + a * i), "x" === o && (s.clientX = s.plotX)))
                        }))
                    }))
                }
                drawGraph() {
                    this.options.lineWidth ? super.drawGraph() : this.graph && (this.graph = this.graph.destroy())
                }
            }
            return l.defaultOptions = n(r.defaultOptions, t), a(l.prototype, {
                drawTracker: s.prototype.drawTracker,
                sorted: !1,
                requireSorting: !1,
                noSharedTooltip: !0,
                trackerGroups: ["group", "markerGroup", "dataLabelsGroup"]
            }), o(l, "afterTranslate", (function() {
                this.applyJitter()
            })), e.registerSeriesType("scatter", l), l
        })), i(e, "Series/CenteredUtilities.js", [e["Core/Globals.js"], e["Core/Series/Series.js"], e["Core/Utilities.js"]], (function(t, e, i) {
            var s, r;
            let {
                deg2rad: o
            } = t, {
                fireEvent: a,
                isNumber: n,
                pick: l,
                relativeLength: h
            } = i;
            return (r = s || (s = {})).getCenter = function() {
                let t, i, s, r = this.options,
                    o = this.chart,
                    d = 2 * (r.slicedOffset || 0),
                    c = o.plotWidth - 2 * d,
                    p = o.plotHeight - 2 * d,
                    u = r.center,
                    g = Math.min(c, p),
                    f = r.thickness,
                    m = r.size,
                    x = r.innerSize || 0;
                "string" == typeof m && (m = parseFloat(m)), "string" == typeof x && (x = parseFloat(x));
                let y = [l(u[0], "50%"), l(u[1], "50%"), l(m && m < 0 ? void 0 : r.size, "100%"), l(x && x < 0 ? void 0 : r.innerSize || 0, "0%")];
                for (!o.angular || this instanceof e || (y[3] = 0), i = 0; i < 4; ++i) s = y[i], t = i < 2 || 2 === i && /%$/.test(s), y[i] = h(s, [c, p, g, y[2]][i]) + (t ? d : 0);
                return y[3] > y[2] && (y[3] = y[2]), n(f) && 2 * f < y[2] && f > 0 && (y[3] = y[2] - 2 * f), a(this, "afterGetCenter", {
                    positions: y
                }), y
            }, r.getStartAndEndRadians = function(t, e) {
                let i = n(t) ? t : 0,
                    s = n(e) && e > i && e - i < 360 ? e : i + 360;
                return {
                    start: o * (i + -90),
                    end: o * (s + -90)
                }
            }, s
        })), i(e, "Series/Pie/PiePoint.js", [e["Core/Animation/AnimationUtilities.js"], e["Core/Series/Point.js"], e["Core/Utilities.js"]], (function(t, e, i) {
            let {
                setAnimation: s
            } = t, {
                addEvent: r,
                defined: o,
                extend: a,
                isNumber: n,
                pick: l,
                relativeLength: h
            } = i;
            class d extends e {
                getConnectorPath(t) {
                    let e = t.dataLabelPosition,
                        i = t.options || {},
                        s = i.connectorShape,
                        r = this.connectorShapes[s] || s;
                    return e && r.call(this, { ...e.computed,
                        alignment: e.alignment
                    }, e.connectorPosition, i) || []
                }
                getTranslate() {
                    return this.sliced && this.slicedTranslation || {
                        translateX: 0,
                        translateY: 0
                    }
                }
                haloPath(t) {
                    let e = this.shapeArgs;
                    return this.sliced || !this.visible ? [] : this.series.chart.renderer.symbols.arc(e.x, e.y, e.r + t, e.r + t, {
                        innerR: e.r - 1,
                        start: e.start,
                        end: e.end,
                        borderRadius: e.borderRadius
                    })
                }
                constructor(t, e, i) {
                    super(t, e, i), this.half = 0, this.name ? ? (this.name = "Slice");
                    let s = t => {
                        this.slice("select" === t.type)
                    };
                    r(this, "select", s), r(this, "unselect", s)
                }
                isValid() {
                    return n(this.y) && this.y >= 0
                }
                setVisible(t, e = !0) {
                    t !== this.visible && this.update({
                        visible: t ? ? !this.visible
                    }, e, void 0, !1)
                }
                slice(t, e, i) {
                    let r = this.series;
                    s(i, r.chart), e = l(e, !0), this.sliced = this.options.sliced = t = o(t) ? t : !this.sliced, r.options.data[r.data.indexOf(this)] = this.options, this.graphic && this.graphic.animate(this.getTranslate())
                }
            }
            return a(d.prototype, {
                connectorShapes: {
                    fixedOffset: function(t, e, i) {
                        let s = e.breakAt,
                            r = e.touchingSliceAt,
                            o = i.softConnector ? ["C", t.x + ("left" === t.alignment ? -5 : 5), t.y, 2 * s.x - r.x, 2 * s.y - r.y, s.x, s.y] : ["L", s.x, s.y];
                        return [
                            ["M", t.x, t.y], o, ["L", r.x, r.y]
                        ]
                    },
                    straight: function(t, e) {
                        let i = e.touchingSliceAt;
                        return [
                            ["M", t.x, t.y],
                            ["L", i.x, i.y]
                        ]
                    },
                    crookedLine: function(t, e, i) {
                        let {
                            breakAt: s,
                            touchingSliceAt: r
                        } = e, {
                            series: o
                        } = this, [a, n, l] = o.center, d = l / 2, {
                            plotLeft: c,
                            plotWidth: p
                        } = o.chart, u = "left" === t.alignment, {
                            x: g,
                            y: f
                        } = t, m = s.x;
                        if (i.crookDistance) {
                            let t = h(i.crookDistance, 1);
                            m = u ? a + d + (p + c - a - d) * (1 - t) : c + (a - d) * t
                        } else m = a + (n - f) * Math.tan((this.angle || 0) - Math.PI / 2);
                        let x = [
                            ["M", g, f]
                        ];
                        return (u ? m <= g && m >= s.x : m >= g && m <= s.x) && x.push(["L", m, f]), x.push(["L", s.x, s.y], ["L", r.x, r.y]), x
                    }
                }
            }), d
        })), i(e, "Series/Pie/PieSeriesDefaults.js", [], (function() {
            return {
                borderRadius: 3,
                center: [null, null],
                clip: !1,
                colorByPoint: !0,
                dataLabels: {
                    connectorPadding: 5,
                    connectorShape: "crookedLine",
                    crookDistance: void 0,
                    distance: 30,
                    enabled: !0,
                    formatter: function() {
                        return this.point.isNull ? void 0 : this.point.name
                    },
                    softConnector: !0,
                    x: 0
                },
                fillColor: void 0,
                ignoreHiddenPoint: !0,
                inactiveOtherPoints: !0,
                legendType: "point",
                marker: null,
                size: null,
                showInLegend: !1,
                slicedOffset: 10,
                stickyTracking: !1,
                tooltip: {
                    followPointer: !0
                },
                borderColor: "#ffffff",
                borderWidth: 1,
                lineWidth: void 0,
                states: {
                    hover: {
                        brightness: .1
                    }
                }
            }
        })), i(e, "Series/Pie/PieSeries.js", [e["Series/CenteredUtilities.js"], e["Series/Column/ColumnSeries.js"], e["Core/Globals.js"], e["Series/Pie/PiePoint.js"], e["Series/Pie/PieSeriesDefaults.js"], e["Core/Series/Series.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Renderer/SVG/Symbols.js"], e["Core/Utilities.js"]], (function(t, e, i, s, r, o, a, n, l) {
            let {
                getStartAndEndRadians: h
            } = t, {
                noop: d
            } = i, {
                clamp: c,
                extend: p,
                fireEvent: u,
                merge: g,
                pick: f
            } = l;
            class m extends o {
                animate(t) {
                    let e = this,
                        i = e.points,
                        s = e.startAngleRad;
                    t || i.forEach((function(t) {
                        let i = t.graphic,
                            r = t.shapeArgs;
                        i && r && (i.attr({
                            r: f(t.startR, e.center && e.center[3] / 2),
                            start: s,
                            end: s
                        }), i.animate({
                            r: r.r,
                            start: r.start,
                            end: r.end
                        }, e.options.animation))
                    }))
                }
                drawEmpty() {
                    let t, e, i = this.startAngleRad,
                        s = this.endAngleRad,
                        r = this.options;
                    0 === this.total && this.center ? (t = this.center[0], e = this.center[1], this.graph || (this.graph = this.chart.renderer.arc(t, e, this.center[1] / 2, 0, i, s).addClass("highcharts-empty-series").add(this.group)), this.graph.attr({
                        d: n.arc(t, e, this.center[2] / 2, 0, {
                            start: i,
                            end: s,
                            innerR: this.center[3] / 2
                        })
                    }), this.chart.styledMode || this.graph.attr({
                        "stroke-width": r.borderWidth,
                        fill: r.fillColor || "none",
                        stroke: r.color || "#cccccc"
                    })) : this.graph && (this.graph = this.graph.destroy())
                }
                drawPoints() {
                    let t = this.chart.renderer;
                    this.points.forEach((function(e) {
                        e.graphic && e.hasNewShapeType() && (e.graphic = e.graphic.destroy()), e.graphic || (e.graphic = t[e.shapeType](e.shapeArgs).add(e.series.group), e.delayedRendering = !0)
                    }))
                }
                generatePoints() {
                    super.generatePoints(), this.updateTotals()
                }
                getX(t, e, i, s) {
                    let r = this.center,
                        o = this.radii ? this.radii[i.index] || 0 : r[2] / 2,
                        a = s.dataLabelPosition,
                        n = (null == a ? void 0 : a.distance) || 0,
                        l = Math.asin(c((t - r[1]) / (o + n), -1, 1));
                    return r[0] + Math.cos(l) * (o + n) * (e ? -1 : 1) + (n > 0 ? (e ? -1 : 1) * (s.padding || 0) : 0)
                }
                hasData() {
                    return !!this.processedXData.length
                }
                redrawPoints() {
                    let t, e, i, s, r = this,
                        o = r.chart;
                    this.drawEmpty(), r.group && !o.styledMode && r.group.shadow(r.options.shadow), r.points.forEach((function(a) {
                        let n = {};
                        e = a.graphic, !a.isNull && e ? (s = a.shapeArgs, t = a.getTranslate(), o.styledMode || (i = r.pointAttribs(a, a.selected && "select")), a.delayedRendering ? (e.setRadialReference(r.center).attr(s).attr(t), o.styledMode || e.attr(i).attr({
                            "stroke-linejoin": "round"
                        }), a.delayedRendering = !1) : (e.setRadialReference(r.center), o.styledMode || g(!0, n, i), g(!0, n, s, t), e.animate(n)), e.attr({
                            visibility: a.visible ? "inherit" : "hidden"
                        }), e.addClass(a.getClassName(), !0)) : e && (a.graphic = e.destroy())
                    }))
                }
                sortByAngle(t, e) {
                    t.sort((function(t, i) {
                        return void 0 !== t.angle && (i.angle - t.angle) * e
                    }))
                }
                translate(t) {
                    u(this, "translate"), this.generatePoints();
                    let e, i, s, r, o, a, n, l = this.options,
                        d = l.slicedOffset,
                        c = h(l.startAngle, l.endAngle),
                        p = this.startAngleRad = c.start,
                        g = (this.endAngleRad = c.end) - p,
                        f = this.points,
                        m = l.ignoreHiddenPoint,
                        x = f.length,
                        y = 0;
                    for (t || (this.center = t = this.getCenter()), a = 0; a < x; a++) {
                        n = f[a], e = p + y * g, n.isValid() && (!m || n.visible) && (y += n.percentage / 100), i = p + y * g;
                        let l = {
                            x: t[0],
                            y: t[1],
                            r: t[2] / 2,
                            innerR: t[3] / 2,
                            start: Math.round(1e3 * e) / 1e3,
                            end: Math.round(1e3 * i) / 1e3
                        };
                        n.shapeType = "arc", n.shapeArgs = l, (s = (i + e) / 2) > 1.5 * Math.PI ? s -= 2 * Math.PI : s < -Math.PI / 2 && (s += 2 * Math.PI), n.slicedTranslation = {
                            translateX: Math.round(Math.cos(s) * d),
                            translateY: Math.round(Math.sin(s) * d)
                        }, r = Math.cos(s) * t[2] / 2, o = Math.sin(s) * t[2] / 2, n.tooltipPos = [t[0] + .7 * r, t[1] + .7 * o], n.half = s < -Math.PI / 2 || s > Math.PI / 2 ? 1 : 0, n.angle = s
                    }
                    u(this, "afterTranslate")
                }
                updateTotals() {
                    let t, e, i = this.points,
                        s = i.length,
                        r = this.options.ignoreHiddenPoint,
                        o = 0;
                    for (t = 0; t < s; t++)(e = i[t]).isValid() && (!r || e.visible) && (o += e.y);
                    for (t = 0, this.total = o; t < s; t++)(e = i[t]).percentage = o > 0 && (e.visible || !r) ? e.y / o * 100 : 0, e.total = o
                }
            }
            return m.defaultOptions = g(o.defaultOptions, r), p(m.prototype, {
                axisTypes: [],
                directTouch: !0,
                drawGraph: void 0,
                drawTracker: e.prototype.drawTracker,
                getCenter: t.getCenter,
                getSymbol: d,
                invertible: !1,
                isCartesian: !1,
                noSharedTooltip: !0,
                pointAttribs: e.prototype.pointAttribs,
                pointClass: s,
                requireSorting: !1,
                searchPoint: d,
                trackerGroups: ["group", "dataLabelsGroup"]
            }), a.registerSeriesType("pie", m), m
        })), i(e, "Series/Pie/PieDataLabel.js", [e["Core/Series/DataLabel.js"], e["Core/Globals.js"], e["Core/Renderer/RendererUtilities.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], (function(t, e, i, s, r) {
            var o;
            let {
                composed: a,
                noop: n
            } = e, {
                distribute: l
            } = i, {
                series: h
            } = s, {
                arrayMax: d,
                clamp: c,
                defined: p,
                pick: u,
                pushUnique: g,
                relativeLength: f
            } = r;
            return function(e) {
                let i = {
                    radialDistributionY: function(t, e) {
                        var i;
                        return ((null == (i = e.dataLabelPosition) ? void 0 : i.top) || 0) + t.distributeBox.pos
                    },
                    radialDistributionX: function(t, e, i, s, r) {
                        let o = r.dataLabelPosition;
                        return t.getX(i < ((null == o ? void 0 : o.top) || 0) + 2 || i > ((null == o ? void 0 : o.bottom) || 0) - 2 ? s : i, e.half, e, r)
                    },
                    justify: function(t, e, i, s) {
                        var r;
                        return s[0] + (t.half ? -1 : 1) * (i + ((null == (r = e.dataLabelPosition) ? void 0 : r.distance) || 0))
                    },
                    alignToPlotEdges: function(t, e, i, s) {
                        let r = t.getBBox().width;
                        return e ? r + s : i - r - s
                    },
                    alignToConnectors: function(t, e, i, s) {
                        let r, o = 0;
                        return t.forEach((function(t) {
                            (r = t.dataLabel.getBBox().width) > o && (o = r)
                        })), e ? o + s : i - o - s
                    }
                };

                function s(t, e) {
                    let {
                        center: i,
                        options: s
                    } = this, r = i[2] / 2, o = t.angle || 0, a = Math.cos(o), n = Math.sin(o), l = i[0] + a * r, h = i[1] + n * r, d = Math.min((s.slicedOffset || 0) + (s.borderWidth || 0), e / 5);
                    return {
                        natural: {
                            x: l + a * e,
                            y: h + n * e
                        },
                        computed: {},
                        alignment: e < 0 ? "center" : t.half ? "right" : "left",
                        connectorPosition: {
                            breakAt: {
                                x: l + a * d,
                                y: h + n * d
                            },
                            touchingSliceAt: {
                                x: l,
                                y: h
                            }
                        },
                        distance: e
                    }
                }

                function r() {
                    var t;
                    let e, i, s, r = this,
                        o = r.points,
                        a = r.chart,
                        n = a.plotWidth,
                        c = a.plotHeight,
                        g = a.plotLeft,
                        m = Math.round(a.chartWidth / 3),
                        x = r.center,
                        y = x[2] / 2,
                        v = x[1],
                        b = [
                            [],
                            []
                        ],
                        k = [0, 0, 0, 0],
                        S = r.dataLabelPositioners,
                        C = 0;
                    r.visible && (null == (t = r.hasDataLabels) ? void 0 : t.call(r)) && (o.forEach((t => {
                        (t.dataLabels || []).forEach((t => {
                            t.shortened && (t.attr({
                                width: "auto"
                            }).css({
                                width: "auto",
                                textOverflow: "clip"
                            }), t.shortened = !1)
                        }))
                    })), h.prototype.drawDataLabels.apply(r), o.forEach((t => {
                        (t.dataLabels || []).forEach(((e, i) => {
                            var s;
                            let r = x[2] / 2,
                                o = e.options,
                                a = f((null == o ? void 0 : o.distance) || 0, r);
                            0 === i && b[t.half].push(t), !p(null == (s = null == o ? void 0 : o.style) ? void 0 : s.width) && e.getBBox().width > m && (e.css({
                                width: Math.round(.7 * m) + "px"
                            }), e.shortened = !0), e.dataLabelPosition = this.getDataLabelPosition(t, a), C = Math.max(C, a)
                        }))
                    })), b.forEach(((t, e) => {
                        let o, h, d, f = t.length,
                            m = [],
                            b = 0;
                        f && (r.sortByAngle(t, e - .5), C > 0 && (o = Math.max(0, v - y - C), h = Math.min(v + y + C, a.plotHeight), t.forEach((t => {
                            (t.dataLabels || []).forEach((e => {
                                var i;
                                let s = e.dataLabelPosition;
                                s && s.distance > 0 && (s.top = Math.max(0, v - y - s.distance), s.bottom = Math.min(v + y + s.distance, a.plotHeight), b = e.getBBox().height || 21, t.distributeBox = {
                                    target: ((null == (i = e.dataLabelPosition) ? void 0 : i.natural.y) || 0) - s.top + b / 2,
                                    size: b,
                                    rank: t.y
                                }, m.push(t.distributeBox))
                            }))
                        })), l(m, d = h + b - o, d / 5)), t.forEach((o => {
                            (o.dataLabels || []).forEach((a => {
                                let l = a.options || {},
                                    h = o.distributeBox,
                                    d = a.dataLabelPosition,
                                    f = (null == d ? void 0 : d.natural.y) || 0,
                                    v = l.connectorPadding || 0,
                                    b = 0,
                                    C = f,
                                    w = "inherit";
                                if (d) {
                                    if (m && p(h) && d.distance > 0 && (void 0 === h.pos ? w = "hidden" : (s = h.size, C = S.radialDistributionY(o, a))), l.justify) b = S.justify(o, a, y, x);
                                    else switch (l.alignTo) {
                                        case "connectors":
                                            b = S.alignToConnectors(t, e, n, g);
                                            break;
                                        case "plotEdges":
                                            b = S.alignToPlotEdges(a, e, n, g);
                                            break;
                                        default:
                                            b = S.radialDistributionX(r, o, C, f, a)
                                    }
                                    if (d.attribs = {
                                            visibility: w,
                                            align: d.alignment
                                        }, d.posAttribs = {
                                            x: b + (l.x || 0) + ({
                                                left: v,
                                                right: -v
                                            }[d.alignment] || 0),
                                            y: C + (l.y || 0) - a.getBBox().height / 2
                                        }, d.computed.x = b, d.computed.y = C, u(l.crop, !0)) {
                                        let t;
                                        b - (i = a.getBBox().width) < v && 1 === e ? (t = Math.round(i - b + v), k[3] = Math.max(t, k[3])) : b + i > n - v && 0 === e && (t = Math.round(b + i - n + v), k[1] = Math.max(t, k[1])), C - s / 2 < 0 ? k[0] = Math.max(Math.round(s / 2 - C), k[0]) : C + s / 2 > c && (k[2] = Math.max(Math.round(C + s / 2 - c), k[2])), d.sideOverflow = t
                                    }
                                }
                            }))
                        })))
                    })), (0 === d(k) || this.verifyDataLabelOverflow(k)) && (this.placeDataLabels(), this.points.forEach((t => {
                        (t.dataLabels || []).forEach((i => {
                            var s;
                            let {
                                connectorColor: o,
                                connectorWidth: n = 1
                            } = i.options || {}, l = i.dataLabelPosition;
                            if (n) {
                                let h;
                                e = i.connector, l && l.distance > 0 ? (h = !e, e || (i.connector = e = a.renderer.path().addClass("highcharts-data-label-connector  highcharts-color-" + t.colorIndex + (t.className ? " " + t.className : "")).add(r.dataLabelsGroup)), a.styledMode || e.attr({
                                    "stroke-width": n,
                                    stroke: o || t.color || "#666666"
                                }), e[h ? "attr" : "animate"]({
                                    d: t.getConnectorPath(i)
                                }), e.attr({
                                    visibility: null == (s = l.attribs) ? void 0 : s.visibility
                                })) : e && (i.connector = e.destroy())
                            }
                        }))
                    }))))
                }

                function o() {
                    this.points.forEach((t => {
                        (t.dataLabels || []).forEach((t => {
                            var e;
                            let i = t.dataLabelPosition;
                            i ? (i.sideOverflow && (t.css({
                                width: Math.max(t.getBBox().width - i.sideOverflow, 0) + "px",
                                textOverflow: ((null == (e = t.options) ? void 0 : e.style) || {}).textOverflow || "ellipsis"
                            }), t.shortened = !0), t.attr(i.attribs), t[t.moved ? "animate" : "attr"](i.posAttribs), t.moved = !0) : t && t.attr({
                                y: -9999
                            })
                        })), delete t.distributeBox
                    }), this)
                }

                function m(t) {
                    let e = this.center,
                        i = this.options,
                        s = i.center,
                        r = i.minSize || 80,
                        o = r,
                        a = null !== i.size;
                    return !a && (null !== s[0] ? o = Math.max(e[2] - Math.max(t[1], t[3]), r) : (o = Math.max(e[2] - t[1] - t[3], r), e[0] += (t[3] - t[1]) / 2), null !== s[1] ? o = c(o, r, e[2] - Math.max(t[0], t[2])) : (o = c(o, r, e[2] - t[0] - t[2]), e[1] += (t[0] - t[2]) / 2), o < e[2] ? (e[2] = o, e[3] = Math.min(i.thickness ? Math.max(0, o - 2 * i.thickness) : Math.max(0, f(i.innerSize || 0, o)), o), this.translate(e), this.drawDataLabels && this.drawDataLabels()) : a = !0), a
                }
                e.compose = function(e) {
                    if (t.compose(h), g(a, "PieDataLabel")) {
                        let t = e.prototype;
                        t.dataLabelPositioners = i, t.alignDataLabel = n, t.drawDataLabels = r, t.getDataLabelPosition = s, t.placeDataLabels = o, t.verifyDataLabelOverflow = m
                    }
                }
            }(o || (o = {})), o
        })), i(e, "Extensions/OverlappingDataLabels.js", [e["Core/Utilities.js"]], (function(t) {
            let {
                addEvent: e,
                fireEvent: i,
                objectEach: s,
                pick: r
            } = t;

            function o(t) {
                let e, s, r, o, n, l = t.length,
                    h = !1;
                for (let i = 0; i < l; i++)(e = t[i]) && (e.oldOpacity = e.opacity, e.newOpacity = 1, e.absoluteBox = function(t) {
                    var e, i;
                    if (t && (!t.alignAttr || t.placed)) {
                        let s = t.box ? 0 : t.padding || 0,
                            r = t.alignAttr || {
                                x: t.attr("x"),
                                y: t.attr("y")
                            },
                            o = t.getBBox();
                        return t.width = o.width, t.height = o.height, {
                            x: r.x + ((null == (e = t.parentGroup) ? void 0 : e.translateX) || 0) + s,
                            y: r.y + ((null == (i = t.parentGroup) ? void 0 : i.translateY) || 0) + s,
                            width: (t.width || 0) - 2 * s,
                            height: (t.height || 0) - 2 * s
                        }
                    }
                }(e));
                t.sort(((t, e) => (e.labelrank || 0) - (t.labelrank || 0)));
                for (let i = 0; i < l; ++i) {
                    o = (s = t[i]) && s.absoluteBox;
                    for (let e = i + 1; e < l; ++e) n = (r = t[e]) && r.absoluteBox, o && n && s !== r && 0 !== s.newOpacity && 0 !== r.newOpacity && "hidden" !== s.visibility && "hidden" !== r.visibility && (d = o, !((c = n).x >= d.x + d.width || c.x + c.width <= d.x || c.y >= d.y + d.height || c.y + c.height <= d.y)) && ((s.labelrank < r.labelrank ? s : r).newOpacity = 0)
                }
                var d, c;
                for (let i of t) a(i, this) && (h = !0);
                h && i(this, "afterHideAllOverlappingLabels")
            }

            function a(t, e) {
                let s, r, o = !1;
                return t && (r = t.newOpacity, t.oldOpacity !== r && (t.hasClass("highcharts-data-label") ? (t[r ? "removeClass" : "addClass"]("highcharts-data-label-hidden"), s = function() {
                    e.styledMode || t.css({
                        pointerEvents: r ? "auto" : "none"
                    })
                }, o = !0, t[t.isOld ? "animate" : "attr"]({
                    opacity: r
                }, void 0, s), i(e, "afterHideOverlappingLabel")) : t.attr({
                    opacity: r
                })), t.isOld = !0), o
            }

            function n() {
                var t;
                let e = this,
                    i = [];
                for (let s of e.labelCollectors || []) i = i.concat(s());
                for (let r of e.yAxis || []) r.stacking && r.options.stackLabels && !r.options.stackLabels.allowOverlap && s(r.stacking.stacks, (t => {
                    s(t, (t => {
                        t.label && i.push(t.label)
                    }))
                }));
                for (let s of e.series || [])
                    if (s.visible && (null == (t = s.hasDataLabels) ? void 0 : t.call(s))) {
                        let t = t => {
                            for (let s of t) s.visible && (s.dataLabels || []).forEach((t => {
                                var o;
                                let n = t.options || {};
                                t.labelrank = r(n.labelrank, s.labelrank, null == (o = s.shapeArgs) ? void 0 : o.height), n.allowOverlap ? ? Number(n.distance) > 0 ? (t.oldOpacity = t.opacity, t.newOpacity = 1, a(t, e)) : i.push(t)
                            }))
                        };
                        t(s.nodes || []), t(s.points)
                    }
                this.hideOverlappingLabels(i)
            }
            return {
                compose: function(t) {
                    let i = t.prototype;
                    i.hideOverlappingLabels || (i.hideOverlappingLabels = o, e(t, "render", n))
                }
            }
        })), i(e, "Extensions/BorderRadius.js", [e["Core/Defaults.js"], e["Core/Globals.js"], e["Core/Utilities.js"]], (function(t, e, i) {
            let {
                defaultOptions: s
            } = t, {
                noop: r
            } = e, {
                addEvent: o,
                extend: a,
                isObject: n,
                merge: l,
                relativeLength: h
            } = i, d = {
                radius: 0,
                scope: "stack",
                where: void 0
            }, c = r, p = r;

            function u(t, e, i, s, r = {}) {
                let o = c(t, e, i, s, r),
                    {
                        innerR: a = 0,
                        r: n = i,
                        start: l = 0,
                        end: d = 0
                    } = r;
                if (r.open || !r.borderRadius) return o;
                let p = d - l,
                    u = Math.sin(p / 2),
                    g = Math.max(Math.min(h(r.borderRadius || 0, n - a), (n - a) / 2, n * u / (1 + u)), 0),
                    f = Math.min(g, p / Math.PI * 2 * a),
                    m = o.length - 1;
                for (; m--;) ! function(t, e, i) {
                    let s, r, o, a = t[e],
                        n = t[e + 1];
                    if ("Z" === n[0] && (n = t[0]), "M" !== a[0] && "L" !== a[0] || "A" !== n[0] ? "A" === a[0] && ("M" === n[0] || "L" === n[0]) && (s = n, r = a) : (s = a, r = n, o = !0), s && r && r.params) {
                        let a = r[1],
                            n = r[5],
                            l = r.params,
                            {
                                start: h,
                                end: d,
                                cx: c,
                                cy: p
                            } = l,
                            u = n ? a - i : a + i,
                            g = u ? Math.asin(i / u) : 0,
                            f = n ? g : -g,
                            m = Math.cos(g) * u;
                        o ? (l.start = h + f, s[1] = c + m * Math.cos(h), s[2] = p + m * Math.sin(h), t.splice(e + 1, 0, ["A", i, i, 0, 0, 1, c + a * Math.cos(l.start), p + a * Math.sin(l.start)])) : (l.end = d - f, r[6] = c + a * Math.cos(l.end), r[7] = p + a * Math.sin(l.end), t.splice(e + 1, 0, ["A", i, i, 0, 0, 1, c + m * Math.cos(d), p + m * Math.sin(d)])), r[4] = Math.abs(l.end - l.start) < Math.PI ? 0 : 1
                    }
                }(o, m, m > 1 ? f : g);
                return o
            }

            function g() {
                var t, e;
                if (this.options.borderRadius && (!this.chart.is3d || !this.chart.is3d())) {
                    let {
                        options: i,
                        yAxis: r
                    } = this, o = "percent" === i.stacking, l = null == (e = null == (t = s.plotOptions) ? void 0 : t[this.type]) ? void 0 : e.borderRadius, d = f(i.borderRadius, n(l) ? l : {}), c = r.options.reversed;
                    for (let t of this.points) {
                        let {
                            shapeArgs: e
                        } = t;
                        if ("roundedRect" === t.shapeType && e) {
                            let {
                                width: s = 0,
                                height: n = 0,
                                y: l = 0
                            } = e, p = l, u = n;
                            if ("stack" === d.scope && t.stackTotal) {
                                let e = r.translate(o ? 100 : t.stackTotal, !1, !0, !1, !0),
                                    s = r.translate(i.threshold || 0, !1, !0, !1, !0),
                                    a = this.crispCol(0, Math.min(e, s), 0, Math.abs(e - s));
                                p = a.y, u = a.height
                            }
                            let g = (t.negative ? -1 : 1) * (c ? -1 : 1) == -1,
                                f = d.where;
                            !f && this.is("waterfall") && Math.abs((t.yBottom || 0) - (this.translatedThreshold || 0)) > this.borderWidth && (f = "all"), f || (f = "end");
                            let m = Math.min(h(d.radius, s), s / 2, "all" === f ? n / 2 : 1 / 0) || 0;
                            "end" === f && (g && (p -= m), u += m), a(e, {
                                brBoxHeight: u,
                                brBoxY: p,
                                r: m
                            })
                        }
                    }
                }
            }

            function f(t, e) {
                return n(t) || (t = {
                    radius: t || 0
                }), l(d, e, t)
            }

            function m() {
                let t = f(this.options.borderRadius);
                for (let e of this.points) {
                    let i = e.shapeArgs;
                    i && (i.borderRadius = h(t.radius, (i.r || 0) - (i.innerR || 0)))
                }
            }

            function x(t, e, i, s, r = {}) {
                let o = p(t, e, i, s, r),
                    {
                        r: a = 0,
                        brBoxHeight: n = s,
                        brBoxY: l = e
                    } = r,
                    h = e - l,
                    d = l + n - (e + s),
                    c = h - a > -.1 ? 0 : a,
                    u = d - a > -.1 ? 0 : a,
                    g = Math.max(c && h, 0),
                    f = Math.max(u && d, 0),
                    m = [t + c, e],
                    x = [t + i - c, e],
                    y = [t + i, e + c],
                    v = [t + i, e + s - u],
                    b = [t + i - u, e + s],
                    k = [t + u, e + s],
                    S = [t, e + s - u],
                    C = [t, e + c],
                    w = (t, e) => Math.sqrt(Math.pow(t, 2) - Math.pow(e, 2));
                if (g) {
                    let t = w(c, c - g);
                    m[0] -= t, x[0] += t, y[1] = C[1] = e + c - g
                }
                if (s < c - g) {
                    let r = w(c, c - g - s);
                    y[0] = v[0] = t + i - c + r, b[0] = Math.min(y[0], b[0]), k[0] = Math.max(v[0], k[0]), S[0] = C[0] = t + c - r, y[1] = C[1] = e + s
                }
                if (f) {
                    let t = w(u, u - f);
                    b[0] += t, k[0] -= t, v[1] = S[1] = e + s - u + f
                }
                if (s < u - f) {
                    let r = w(u, u - f - s);
                    y[0] = v[0] = t + i - u + r, x[0] = Math.min(y[0], x[0]), m[0] = Math.max(v[0], m[0]), S[0] = C[0] = t + u - r, v[1] = S[1] = e
                }
                return o.length = 0, o.push(["M", ...m], ["L", ...x], ["A", c, c, 0, 0, 1, ...y], ["L", ...v], ["A", u, u, 0, 0, 1, ...b], ["L", ...k], ["A", u, u, 0, 0, 1, ...S], ["L", ...C], ["A", c, c, 0, 0, 1, ...m], ["Z"]), o
            }
            return {
                compose: function(t, e, i) {
                    let s = t.types.pie;
                    if (!e.symbolCustomAttribs.includes("borderRadius")) {
                        let r = i.prototype.symbols;
                        o(t, "afterColumnTranslate", g, {
                            order: 9
                        }), o(s, "afterTranslate", m), e.symbolCustomAttribs.push("borderRadius", "brBoxHeight", "brBoxY"), c = r.arc, p = r.roundedRect, r.arc = u, r.roundedRect = x
                    }
                },
                optionsToObject: f
            }
        })), i(e, "Core/Responsive.js", [e["Core/Utilities.js"]], (function(t) {
            var e;
            let {
                diffObjects: i,
                extend: s,
                find: r,
                merge: o,
                pick: a,
                uniqueKey: n
            } = t;
            return function(t) {
                function e(t, e) {
                    let i = t.condition;
                    (i.callback || function() {
                        return this.chartWidth <= a(i.maxWidth, Number.MAX_VALUE) && this.chartHeight <= a(i.maxHeight, Number.MAX_VALUE) && this.chartWidth >= a(i.minWidth, 0) && this.chartHeight >= a(i.minHeight, 0)
                    }).call(this) && e.push(t._id)
                }

                function l(t, e) {
                    let s, a = this.options.responsive,
                        l = this.currentResponsive,
                        h = [];
                    !e && a && a.rules && a.rules.forEach((t => {
                        void 0 === t._id && (t._id = n()), this.matchResponsiveRule(t, h)
                    }), this);
                    let d = o(...h.map((t => r((a || {}).rules || [], (e => e._id === t)))).map((t => t && t.chartOptions)));
                    d.isResponsiveOptions = !0, h = h.toString() || void 0;
                    let c = l && l.ruleIds;
                    h !== c && (l && this.update(l.undoOptions, t, !0), h ? ((s = i(d, this.options, !0, this.collectionsWithUpdate)).isResponsiveOptions = !0, this.currentResponsive = {
                        ruleIds: h,
                        mergedOptions: d,
                        undoOptions: s
                    }, this.update(d, t, !0)) : this.currentResponsive = void 0)
                }
                t.compose = function(t) {
                    let i = t.prototype;
                    return i.matchResponsiveRule || s(i, {
                        matchResponsiveRule: e,
                        setResponsive: l
                    }), t
                }
            }(e || (e = {})), e
        })), i(e, "masters/highcharts.src.js", [e["Core/Globals.js"], e["Core/Utilities.js"], e["Core/Defaults.js"], e["Core/Animation/Fx.js"], e["Core/Animation/AnimationUtilities.js"], e["Core/Renderer/HTML/AST.js"], e["Core/Templating.js"], e["Core/Renderer/RendererRegistry.js"], e["Core/Renderer/RendererUtilities.js"], e["Core/Renderer/SVG/SVGElement.js"], e["Core/Renderer/SVG/SVGRenderer.js"], e["Core/Renderer/HTML/HTMLElement.js"], e["Core/Axis/Axis.js"], e["Core/Axis/DateTimeAxis.js"], e["Core/Axis/LogarithmicAxis.js"], e["Core/Axis/PlotLineOrBand/PlotLineOrBand.js"], e["Core/Axis/Tick.js"], e["Core/Tooltip.js"], e["Core/Series/Point.js"], e["Core/Pointer.js"], e["Core/Legend/Legend.js"], e["Core/Legend/LegendSymbol.js"], e["Core/Chart/Chart.js"], e["Extensions/ScrollablePlotArea.js"], e["Core/Axis/Stacking/StackingAxis.js"], e["Core/Axis/Stacking/StackItem.js"], e["Core/Series/Series.js"], e["Core/Series/SeriesRegistry.js"], e["Series/Column/ColumnDataLabel.js"], e["Series/Pie/PieDataLabel.js"], e["Core/Series/DataLabel.js"], e["Extensions/OverlappingDataLabels.js"], e["Extensions/BorderRadius.js"], e["Core/Responsive.js"], e["Core/Color/Color.js"], e["Core/Time.js"]], (function(t, e, i, s, r, o, a, n, l, h, d, c, p, u, g, f, m, x, y, v, b, k, S, C, w, M, A, T, P, L, O, E, D, j, I, B) {
            return t.AST = o, t.Axis = p, t.Chart = S, t.Color = I, t.DataLabel = O, t.Fx = s, t.HTMLElement = c, t.Legend = b, t.LegendSymbol = k, t.OverlappingDataLabels = t.OverlappingDataLabels || E, t.PlotLineOrBand = f, t.Point = y, t.Pointer = v, t.RendererRegistry = n, t.Series = A, t.SeriesRegistry = T, t.StackItem = M, t.SVGElement = h, t.SVGRenderer = d, t.Templating = a, t.Tick = m, t.Time = B, t.Tooltip = x, t.animate = r.animate, t.animObject = r.animObject, t.chart = S.chart, t.color = I.parse, t.dateFormat = a.dateFormat, t.defaultOptions = i.defaultOptions, t.distribute = l.distribute, t.format = a.format, t.getDeferredAnimation = r.getDeferredAnimation, t.getOptions = i.getOptions, t.numberFormat = a.numberFormat, t.seriesType = T.seriesType, t.setAnimation = r.setAnimation, t.setOptions = i.setOptions, t.stop = r.stop, t.time = i.defaultTime, t.timers = s.timers, D.compose(t.Series, t.SVGElement, t.SVGRenderer), P.compose(t.Series.types.column), O.compose(t.Series), u.compose(t.Axis), c.compose(t.SVGRenderer), b.compose(t.Chart), g.compose(t.Axis), E.compose(t.Chart), L.compose(t.Series.types.pie), f.compose(t.Axis), v.compose(t.Chart), j.compose(t.Chart), C.compose(t.Axis, t.Chart, t.Series), w.compose(t.Axis, t.Chart, t.Series), x.compose(t.Pointer), e.extend(t, e), t
        })), e["masters/highcharts.src.js"]._modules = e, e["masters/highcharts.src.js"]
    }, e.exports ? (s.default = s, e.exports = i && i.document ? s(i) : s) : (i.Highcharts && i.Highcharts.error(16, !0), i.Highcharts = s(i))), Pt.exports;
    var e, i, s
}
self;
var Ot = Tt.exports = ((t, e) => (() => {
    var i = {
            879: e => {
                e.exports = t
            },
            744: t => {
                t.exports = e
            }
        },
        s = {};

    function r(t) {
        var e = s[t];
        if (void 0 !== e) return e.exports;
        var o = s[t] = {
            exports: {}
        };
        return i[t](o, o.exports, r), o.exports
    }
    r.n = t => {
        var e = t && t.__esModule ? () => t.default : () => t;
        return r.d(e, {
            a: e
        }), e
    }, r.d = (t, e) => {
        for (var i in e) r.o(e, i) && !r.o(t, i) && Object.defineProperty(t, i, {
            enumerable: !0,
            get: e[i]
        })
    }, r.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e), r.r = t => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    };
    var o = {};
    return (() => {
        r.r(o), r.d(o, {
            Chart: () => l,
            default: () => h
        });
        var t = r(879),
            e = r.n(t),
            i = function t(i, s) {
                var r = e().isArray(i) ? [] : {};

                function o(i, o) {
                    !e().isObject(i, !s) || e().isClass(i) || e().isDOMElement(i) ? r[o] = i : r[o] = t(i, s)
                }
                return e().isArray(i) ? i.forEach((function(t, e) {
                    return o(t, e)
                })) : e().objectEach(i, o), r
            },
            s = r(744);

        function a(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var i = 0, s = new Array(e); i < e; i++) s[i] = t[i];
            return s
        }
        const n = function(t) {
            var e = this;
            return {
                render: function() {
                    return (0, s.h)("div", {
                        ref: "chart"
                    })
                },
                beforeUnmount: function() {
                    var t;
                    return null == e || null === (t = e.chart) || void 0 === t ? void 0 : t.destroy()
                },
                props: {
                    constructorType: {
                        type: String,
                        default: "chart"
                    },
                    options: {
                        type: Object,
                        required: !0
                    },
                    callback: Function,
                    updateArgs: {
                        type: Array,
                        default: function() {
                            return [!0, !0]
                        }
                    },
                    highcharts: {
                        type: Object
                    },
                    deepCopyOnUpdate: {
                        type: Boolean,
                        default: !0
                    }
                },
                watch: {
                    options: {
                        handler: function(t) {
                            var e;
                            (e = this.chart).update.apply(e, [i(t, this.deepCopyOnUpdate)].concat(function(t) {
                                return function(t) {
                                    if (Array.isArray(t)) return a(t)
                                }(t) || function(t) {
                                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                                }(t) || function(t, e) {
                                    if (t) {
                                        if ("string" == typeof t) return a(t, e);
                                        var i = Object.prototype.toString.call(t).slice(8, -1);
                                        return "Object" === i && t.constructor && (i = t.constructor.name), "Map" === i || "Set" === i ? Array.from(t) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? a(t, e) : void 0
                                    }
                                }(t) || function() {
                                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                }()
                            }(this.updateArgs)))
                        },
                        deep: !0
                    }
                },
                mounted: function() {
                    var e = this.highcharts || t;
                    e[this.constructorType] ? this.options ? this.chart = e[this.constructorType](this.$refs.chart, i(this.options, !0), this.callback ? this.callback : null) : console.error('The "options" parameter was not passed.') : console.error("'".concat(this.constructorType, "' constructor-type is incorrect. Sometimes this error is caused by the fact, that the corresponding module wasn't imported."))
                }
            }
        };
        var l = n(e());

        function h(t) {
            var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            t.component(i.tagName || "highcharts", n(i.highcharts || e()))
        }
    })(), o
})())(Lt(), V);
const Et = {
        class: "plan-focus"
    },
    Dt = {
        key: 0,
        class: "left-side l2"
    },
    jt = {
        class: "plan-tagline pt-0"
    },
    It = {
        class: "header"
    },
    Bt = {
        class: "flex justify-between flex-wrap"
    },
    Rt = {
        class: "plan-tagline"
    },
    Nt = {
        class: "plan-tagline"
    },
    zt = {
        class: "plan-tagline"
    },
    Wt = {
        class: "flex justify-between flex-wrap"
    },
    Ht = {
        class: "plan-tagline"
    },
    Gt = {
        class: "centered-text"
    },
    Ft = {
        class: "plan-tagline flex items-center"
    },
    _t = {
        class: "content flex flex-col",
        style: {
            gap: "20px"
        }
    },
    Xt = {
        class: "mt-0"
    },
    Yt = {
        key: 1,
        class: "left-side l2"
    },
    Ut = {
        class: "plan-tagline pt-0"
    },
    Vt = {
        class: "header"
    },
    $t = {
        class: "flex justify-between flex-wrap"
    },
    qt = {
        class: "plan-tagline"
    },
    Zt = {
        class: "plan-tagline"
    },
    Kt = {
        class: "plan-tagline"
    },
    Jt = {
        class: "flex justify-between flex-wrap"
    },
    Qt = {
        class: "plan-tagline"
    },
    te = {
        class: "centered-text"
    },
    ee = {
        class: "plan-tagline flex items-center"
    },
    ie = {
        class: "content flex flex-col",
        style: {
            gap: "20px"
        }
    },
    se = {
        class: "mt-0"
    },
    re = q(e({
        __name: "TechAnalysis",
        props: {
            coin: {
                default: ""
            },
            activeTab: {
                default: 0
            }
        },
        setup(t) {
            const {
                Api: e
            } = i(), y = t, v = s({
                api30: {},
                api365: {},
                chart30: {},
                chart365: {}
            }), b = r(!1), k = o();
            r({}), r([]);
            const S = t => ({
                    chart: {
                        type: "line",
                        backgroundColor: "transparent",
                        height: 180
                    },
                    rangeSelector: {
                        selected: 1
                    },
                    title: {
                        text: ""
                    },
                    xAxis: {
                        type: "datetime",
                        dateTimeLabelFormats: {
                            day: "%e. %b",
                            month: "%b '%y",
                            year: "%Y"
                        },
                        labels: {
                            enabled: !1
                        },
                        tickWidth: 0,
                        lineWidth: 0
                    },
                    yAxis: {
                        title: {
                            text: null
                        },
                        gridLineWidth: 0,
                        labels: {
                            enabled: !1
                        }
                    },
                    legend: {
                        enabled: !1
                    },
                    tooltip: {
                        crosshairs: !0,
                        shared: !0,
                        valueSuffix: "",
                        xDateFormat: "%Y-%m-%d",
                        valueDecimals: 2,
                        valuePrefix: "$"
                    },
                    series: [{
                        name: "Price",
                        data: t,
                        color: "#007bff",
                        marker: {
                            enabled: !1
                        }
                    }],
                    credits: {
                        enabled: !1
                    },
                    exporting: {
                        enabled: !1
                    },
                    plotOptions: {
                        series: {
                            lineWidth: 1,
                            states: {
                                hover: {
                                    lineWidth: 1
                                }
                            }
                        }
                    }
                }),
                C = r(!1),
                w = r(!1),
                M = () => {
                    const t = new FormData;
                    t.append("coinId", "BTC" === y.coin ? "bitcoin" : "ethereum"), e.indicatorsQuery(t).then((({
                        data: t
                    }) => {
                        0 == t.code && t.data && (v.api30 = t.data[1], v.api365 = t.data[0], D(t.data[1], !1), D(t.data[0], !0)), w.value = !0, b.value = !0
                    }))
                };
            M(), a((() => y.activeTab), ((t, i) => {
                1 === t && (v.chart30 && v.chart365 && C.value || (() => {
                    const t = new FormData;
                    t.append("coinId", "BTC" === y.coin ? "bitcoin" : "ethereum"), t.append("days", "30"), e.marketChart(t).then((({
                        data: t
                    }) => {
                        t && (v.chart30 = S(t.prices))
                    }));
                    const i = new FormData;
                    i.append("coinId", "BTC" === y.coin ? "bitcoin" : "ethereum"), i.append("days", "365"), e.marketChart(i).then((({
                        data: t
                    }) => {
                        t && (v.chart365 = S(t.prices), C.value = !0)
                    }))
                })(), v.api30 && v.api365 && v.api30.EMA && v.api365.EMA && w.value || M())
            }));
            const A = n([]),
                T = n([]),
                P = r({}),
                L = r({}),
                O = s({
                    height: 350,
                    type: "radar",
                    series: A,
                    options: {
                        chart: {
                            toolbar: {
                                show: !1
                            }
                        },
                        tooltip: {
                            enabled: !0,
                            theme: "dark",
                            style: {
                                fontSize: "12px",
                                fontFamily: "DINPRO-Medium"
                            },
                            y: {
                                title: {
                                    formatter: function(t, {
                                        seriesIndex: e,
                                        dataPointIndex: i,
                                        w: s
                                    }) {
                                        const r = s.config.xaxis.categories[i];
                                        return `${P.value[r].dates.join("<br>")}<br>${t}`
                                    }
                                }
                            }
                        },
                        colors: [k.accent, k.info, k.primary, k.purple, k.orange],
                        xaxis: {
                            categories: ["Hammer", "Doji", "Inverted Hammer", "Engulfing", "Harami", "Shooting Star"]
                        }
                    }
                }),
                E = s({
                    height: 350,
                    type: "radar",
                    series: T,
                    options: {
                        chart: {
                            toolbar: {
                                show: !1
                            }
                        },
                        tooltip: {
                            enabled: !0,
                            theme: "dark",
                            style: {
                                fontSize: "12px",
                                fontFamily: "DINPRO-Medium"
                            },
                            y: {
                                title: {
                                    formatter: function(t, {
                                        seriesIndex: e,
                                        dataPointIndex: i,
                                        w: s
                                    }) {
                                        const r = s.config.xaxis.categories[i];
                                        return `${L.value[r].dates.join("<br>")}<br>${t}`
                                    }
                                }
                            }
                        },
                        colors: [k.accent, k.info, k.primary, k.purple, k.orange],
                        xaxis: {
                            categories: ["Hammer", "Doji", "Inverted Hammer", "Engulfing", "Harami", "Shooting Star"]
                        }
                    }
                }),
                D = (t, e) => {
                    const i = t.pattern_recognition;
                    if (!i) return void console.error("No pattern recognition data available");
                    const s = {
                            Hammer: {
                                count: 0,
                                dates: []
                            },
                            Doji: {
                                count: 0,
                                dates: []
                            },
                            "Inverted Hammer": {
                                count: 0,
                                dates: []
                            },
                            Engulfing: {
                                count: 0,
                                dates: []
                            },
                            Harami: {
                                count: 0,
                                dates: []
                            },
                            "Shooting Star": {
                                count: 0,
                                dates: []
                            }
                        },
                        r = {
                            "Hammer (CDLHAMMER)": "Hammer",
                            "Doji (CDLDOJI)": "Doji",
                            "Inverted Hammer (CDLINVERTEDHAMMER)": "Inverted Hammer",
                            "Engulfing Pattern (CDLENGULFING)": "Engulfing",
                            "Harami Pattern (CDLHARAMI)": "Harami",
                            "Shooting Star (CDLSHOOTINGSTAR)": "Shooting Star"
                        };
                    Object.entries(i).forEach((([t, e]) => {
                        const i = r[t];
                        i && s[i] && (e.Bullish && e.Bullish.count > 0 && (s[i].dates.push("Bullish:"), s[i].count += e.Bullish.count, s[i].dates.push(...e.Bullish.dates), e.Bearish && e.Bearish.count > 0 && s[i].dates.push(`Bullish Count: ${e.Bullish.count}`)), e.Bearish && e.Bearish.count > 0 && (e.Bullish && e.Bullish.count > 0 && s[i].dates.push(""), s[i].dates.push("Bearish:"), s[i].count += e.Bearish.count, s[i].dates.push(...e.Bearish.dates), e.Bullish && e.Bullish.count > 0 && s[i].dates.push(`Bearish Count: ${e.Bearish.count}`)), s[i].dates.push(""))
                    })), e ? (L.value = s, T.value = [{
                        name: "Total Count",
                        data: Object.values(s).map((t => t.count))
                    }]) : (P.value = s, A.value = [{
                        name: "Total Count",
                        data: Object.values(s).map((t => t.count))
                    }])
                };
            return (t, e) => (l(), h("div", Et, [b.value ? (l(), h("div", Dt, [d("div", jt, [d("div", It, [d("span", null, c(y.coin) + " Technical Analysis | 30 Days", 1)]), d("p", null, c(v.api30.description), 1)]), C.value ? (l(), p(u(Ot.Chart), {
                key: 0,
                options: v.chart30
            }, null, 8, ["options"])) : g("", !0), d("div", Bt, [d("div", Rt, [e[0] || (e[0] = d("h4", null, "Exponential Moving Average", -1)), d("p", null, c(v.api30.EMA["12 day"].description), 1), d("p", null, "Last EMA: " + c(v.api30.EMA["12 day"].last_ema_value), 1)]), d("div", Nt, [e[1] || (e[1] = d("h4", null, "Simple Moving Average", -1)), d("p", null, c(v.api30.SMA["12 day"].description), 1), d("p", null, "Last SMA: " + c(v.api30.SMA["12 day"].last_sma_value), 1)])]), e[8] || (e[8] = d("div", {
                class: "header2 mt-3"
            }, [d("span", null, " Pattern Recognition")], -1)), w.value ? (l(), p(u($), f(m({
                key: 1
            }, O)), null, 16)) : g("", !0), d("div", zt, [e[2] || (e[2] = d("h4", null, "MACD Analysis", -1)), d("p", null, c(v.api30["MACD Analysis"]), 1)]), d("div", Wt, [d("div", Ht, [e[3] || (e[3] = d("h4", null, "Relative Strength Index", -1)), d("p", Gt, c(v.api30["Relative Strength Index"].description), 1), d("p", null, "Last Value: " + c(v.api30["Relative Strength Index"].last_value), 1)]), d("div", Ft, [d("div", null, [e[4] || (e[4] = d("h4", null, "Bollinger Bands Analysis", -1)), d("p", null, c(v.api30["Bollinger Bands Analysis"].description), 1)]), d("div", _t, [d("ul", Xt, [d("li", null, [e[5] || (e[5] = d("b", null, "Last Lower Band:", -1)), x(" " + c(v.api30["Bollinger Bands Analysis"].last_lower_band_value), 1)]), d("li", null, [e[6] || (e[6] = d("b", null, "Last Middle Band:", -1)), x(" " + c(v.api30["Bollinger Bands Analysis"].last_middle_band_value), 1)]), d("li", null, [e[7] || (e[7] = d("b", null, "Last Upper Band:", -1)), x(" " + c(v.api30["Bollinger Bands Analysis"].last_upper_band_value), 1)])])])])])])) : g("", !0), b.value ? (l(), h("div", Yt, [d("div", Ut, [d("div", Vt, [d("span", null, c(y.coin) + " Technical Analysis | 365 Days", 1)]), d("p", null, c(v.api365.description), 1)]), C.value ? (l(), p(u(Ot.Chart), {
                key: 0,
                options: v.chart365
            }, null, 8, ["options"])) : g("", !0), d("div", $t, [d("div", qt, [e[9] || (e[9] = d("h4", null, "Exponential Moving Average", -1)), d("p", null, c(v.api365.EMA["20 day"].description), 1), d("p", null, "Last EMA: " + c(v.api365.EMA["20 day"].last_ema_value), 1), e[10] || (e[10] = d("br", null, null, -1)), d("p", null, c(v.api365.EMA["50 day"].description), 1), d("p", null, "Last SMA: " + c(v.api365.EMA["50 day"].last_ema_value), 1)]), d("div", Zt, [e[11] || (e[11] = d("h4", null, "Simple Moving Average", -1)), d("p", null, c(v.api365.SMA["50 day"].description), 1), d("p", null, "Last SMA: " + c(v.api365.SMA["50 day"].last_sma_value), 1), e[12] || (e[12] = d("br", null, null, -1)), d("p", null, c(v.api365.SMA["50 day"].description), 1), d("p", null, "Last SMA: " + c(v.api365.SMA["50 day"].last_sma_value), 1)])]), e[19] || (e[19] = d("div", {
                class: "header2 mt-4"
            }, [d("span", null, " Pattern Recognition")], -1)), w.value ? (l(), p(u($), f(m({
                key: 1
            }, E)), null, 16)) : g("", !0), d("div", Kt, [e[13] || (e[13] = d("h4", null, "MACD Analysis", -1)), d("p", null, c(v.api365["MACD Analysis"]), 1)]), d("div", Jt, [d("div", Qt, [e[14] || (e[14] = d("h4", null, "Relative Strength Index", -1)), d("p", te, c(v.api365["Relative Strength Index"].description), 1), d("p", null, "Last Value: " + c(v.api365["Relative Strength Index"].last_value), 1)]), d("div", ee, [d("div", null, [e[15] || (e[15] = d("h4", null, "Bollinger Bands Analysis", -1)), d("p", null, c(v.api365["Bollinger Bands Analysis"].description), 1)]), d("div", ie, [d("ul", se, [d("li", null, [e[16] || (e[16] = d("b", null, "Last Lower Band:", -1)), x(" " + c(v.api365["Bollinger Bands Analysis"].last_lower_band_value), 1)]), d("li", null, [e[17] || (e[17] = d("b", null, "Last Middle Band:", -1)), x(" " + c(v.api365["Bollinger Bands Analysis"].last_middle_band_value), 1)]), d("li", null, [e[18] || (e[18] = d("b", null, "Last Upper Band:", -1)), x(" " + c(v.api365["Bollinger Bands Analysis"].last_upper_band_value), 1)])])])])])])) : g("", !0)]))
        }
    }), [
        ["__scopeId", "data-v-f1debb27"]
    ]),
    oe = {
        class: "plan-focus"
    },
    ae = {
        key: 0,
        class: "left-side"
    },
    ne = {
        class: "statistic-card"
    },
    le = {
        style: {
            display: "inline-flex",
            "align-items": "center"
        }
    },
    he = {
        class: "statistic-footer"
    },
    de = {
        class: "footer-item"
    },
    ce = {
        class: "statistic-card"
    },
    pe = {
        style: {
            display: "inline-flex",
            "align-items": "center"
        }
    },
    ue = {
        class: "statistic-footer"
    },
    ge = {
        class: "footer-item"
    },
    fe = {
        class: "flex justify-between flex-wrap",
        style: {
            "flex-wrap": "wrap"
        }
    },
    me = {
        class: "benefits content flex items-center mb-0 [b-0]"
    },
    xe = {
        class: "items-center flex-col flex"
    },
    ye = {
        class: "percentage-value"
    },
    ve = {
        class: "text-12 text-medium text-gray4"
    },
    be = {
        class: "plan-tagline mt-0 pt-0 faga",
        style: {
            "max-width": "70%"
        }
    },
    ke = {
        class: "header2 mt-0 pb-0 mb-0"
    },
    Se = {
        key: 1,
        class: "right-side"
    },
    Ce = {
        class: "feature-highlight"
    },
    we = {
        class: "highlight-item"
    },
    Me = {
        class: "plan-tagline pt-0"
    },
    Ae = {
        class: "header"
    },
    Te = {
        class: "h2a"
    },
    Pe = {
        class: "coin-info-container"
    },
    Le = {
        class: ""
    },
    Oe = {
        class: "value"
    },
    Ee = {
        class: "header2 mt-5 pt-3 pb-0"
    },
    De = {
        class: "coin-info-container mt-0"
    },
    je = {
        class: "coin-info-point"
    },
    Ie = {
        class: "value"
    },
    Be = {
        class: "coin-info-point"
    },
    Re = {
        class: "value"
    },
    Ne = {
        class: "coin-info-point"
    },
    ze = {
        class: "value"
    },
    We = q(e({
        __name: "DetailsAnalysis",
        props: {
            coin: {
                default: ""
            }
        },
        setup(t) {
            const e = t => {
                    if (!t) return "N/A";
                    return new Date(t).toISOString().split("T")[0]
                },
                a = (t, e) => {
                    const i = (t ? ? 0) / (e ? ? 0);
                    return Number.isNaN(i) || !Number.isFinite(i) ? "0" : i.toFixed(2)
                },
                m = y((() => [{
                    label: j("dash.marketcap-rank"),
                    value: `#${D.currentCoin.market_cap_rank??0}`
                }, {
                    label: j("dash.marketcap"),
                    value: "$" + R(D.currentCoin.market_cap)
                }, {
                    label: j("ctm.fully_diluted_valuation"),
                    value: `$${R(D.currentCoin.fully_diluted_valuation??0)}`
                }, {
                    label: j("ctm.market-cap-fdv"),
                    value: `${a(D.currentCoin.market_cap??0,D.currentCoin.fully_diluted_valuation??0)??0}`
                }, {
                    label: j("exh.circulating-supply"),
                    value: R(D.currentCoin.circulating_supply)
                }, {
                    label: j("dash.max-supply"),
                    value: R(D.currentCoin.max_supply ? ? "N/A")
                }, {
                    label: j("exh.total-supply"),
                    value: R(D.currentCoin.total_supply ? ? "N/A")
                }, {
                    label: j("exh.24h-volume"),
                    value: "$" + R(D.currentCoin.total_volume)
                }, {
                    label: j("exh.24h-low"),
                    value: "$" + R(D.currentCoin.low_24h)
                }, {
                    label: j("exh.24h-high"),
                    value: "$" + R(D.currentCoin.high_24h)
                }, {
                    label: j("ctm.all-time-low") + " (" + e(D.currentCoin.atl_date) + ")",
                    value: "$" + R(D.currentCoin.atl)
                }, {
                    label: j("ctm.all-time-high") + " (" + e(D.currentCoin.ath_date) + ")",
                    value: "$" + R(D.currentCoin.ath)
                }])),
                A = [{
                    value: 80,
                    color: "#28c92b",
                    name: "Extreme Greed"
                }, {
                    value: 60,
                    color: "#a2e838",
                    name: "Greed"
                }, {
                    value: 40,
                    color: "#dbdb1a",
                    name: "Neutral"
                }, {
                    value: 20,
                    color: "#FF6256",
                    name: "Fear"
                }, {
                    value: 0,
                    color: "#c90e00",
                    name: "Extreme Fear"
                }],
                T = y((() => {
                    const t = D.configStats.fearAndGreedIndex;
                    return t >= 80 ? "Market sentiment is extremely greedy, indicating a possible overvaluation and a potential market top." : t >= 60 ? "Market sentiment is greedy, suggesting optimism and increased buying interest." : t >= 40 ? "Market sentiment is neutral, indicating a balance between buying and selling pressures." : t >= 20 ? "Market sentiment is fearful, suggesting pessimism and potential undervaluation." : "Market sentiment is extremely fearful, indicating extreme pessimism and a possible market bottom."
                })),
                P = y((() => {
                    const t = D.configStats.fearAndGreedIndex;
                    for (const e of A)
                        if (t >= e.value) return e.color;
                    return "#c90e00"
                })),
                L = o(),
                {
                    Api: O
                } = i(),
                E = t,
                D = s({
                    configStats: {},
                    allCoins: [],
                    currentCoin: {},
                    treasury: {}
                }),
                {
                    t: j
                } = v(),
                I = n([]);
            n([]);
            const B = r(!1);
            new FormData, O.configStats().then((({
                data: t
            }) => {
                var e;
                null != t && (D.configStats = t, D.configStats.fearAndGreedIndex = Number(null == (e = null == t ? void 0 : t.fearAndGreedIndex) ? void 0 : e.toString().replaceAll("/100", ""))), B.value = !0;
                const i = [];
                O.marketCap().then((({
                    data: t
                }) => {
                    if (null != t) {
                        D.allCoins = t, D.currentCoin = t.find((t => t.symbol.toLowerCase() === E.coin.toLowerCase()));
                        const e = t.find((t => "btc" === t.symbol.toLowerCase())),
                            s = (e ? e.market_cap : 0) / (parseFloat(D.configStats.dominanceBTC.replace("%", "")) / 100);
                        [...t].sort(((t, e) => e.market_cap - t.market_cap)).slice(0, 12).forEach((t => {
                            const e = t.market_cap / s * 100;
                            i.push({
                                x: t.symbol.toUpperCase(),
                                y: e.toFixed(2)
                            })
                        })), I.value = [{
                            data: i
                        }]
                    }
                    B.value = !0
                }))
            }));
            "BTC" == E.coin ? O.btcTreasury().then((({
                data: t
            }) => {
                0 == t.code && t.data && (D.treasury = t.data)
            })) : O.ethTreasury().then((({
                data: t
            }) => {
                0 == t.code && t.data && (D.treasury = t.data)
            }));
            const R = t => t ? t < 1e3 ? null == t ? void 0 : t.toString() : t >= 1e3 && t < 1e6 ? +(t / 1e3).toFixed(2) + "K" : t >= 1e6 && t < 1e9 ? +(t / 1e6).toFixed(2) + "M" : t >= 1e9 && t < 1e12 ? +(t / 1e9).toFixed(2) + "B" : t >= 1e12 ? +(t / 1e12).toFixed(2) + "T" : null == t ? void 0 : t.toString() : "0",
                N = y((() => {
                    const t = D.configStats.fearAndGreedIndex;
                    for (const e of A)
                        if (t >= e.value) return e.name;
                    return "Extreme Fear"
                })),
                z = s({
                    height: 350,
                    type: "treemap",
                    series: I,
                    options: {
                        chart: {
                            toolbar: {
                                show: !1
                            }
                        },
                        tooltip: {
                            enabled: !0,
                            theme: "dark",
                            style: {
                                fontSize: "12px",
                                fontFamily: "DINPRO-Medium"
                            },
                            y: {
                                title: {
                                    formatter: function(t, {
                                        seriesIndex: e,
                                        dataPointIndex: i,
                                        w: s
                                    }) {
                                        const r = D.allCoins.find((e => e.symbol.toUpperCase() === t));
                                        return `${j("dash.marketcap")}: $${R(Number(null==r?void 0:r.market_cap))}<br>${j("exh.24h-change")}: ${null==r?void 0:r.market_cap_change_percentage_24h.toFixed(2)}%<br><br>${"% "+j("dash.marketcap")+":"}`
                                    }
                                }
                            }
                        },
                        colors: [L.accent, L.info, L.primary, L.purple, L.orange],
                        plotOptions: {
                            treemap: {
                                enableShades: !1,
                                shadeIntensity: .5,
                                reverseNegativeShade: !0,
                                colorScale: {
                                    ranges: [{
                                        from: 50,
                                        to: 100,
                                        color: "#5c02c9"
                                    }, {
                                        from: 12,
                                        to: 50,
                                        color: "#7303fc"
                                    }, {
                                        from: 3,
                                        to: 12,
                                        color: "#8f35fc"
                                    }, {
                                        from: 0,
                                        to: 3,
                                        color: "#9D4EFC"
                                    }]
                                }
                            }
                        }
                    }
                }),
                W = r(window.innerWidth <= 767),
                H = s([{
                    label: "1H",
                    prop: "price_change_percentage_1h_in_currency"
                }, {
                    label: "24H",
                    prop: "price_change_percentage_24h_in_currency"
                }, {
                    label: "7D",
                    prop: "price_change_percentage_7d_in_currency"
                }, {
                    label: "14D",
                    prop: "price_change_percentage_14d_in_currency"
                }, {
                    label: "30D",
                    prop: "price_change_percentage_30d_in_currency"
                }, {
                    label: "1Y",
                    prop: "price_change_percentage_1y_in_currency"
                }]);
            return (t, e) => (l(), h("div", oe, [B.value ? (l(), h("div", ae, [e[1] || (e[1] = d("div", {
                class: "plan-tagline pt-0"
            }, [d("div", {
                class: "header"
            }, [d("span", null, " Global Crypto Analysis")])], -1)), b(u(J), {
                gutter: 16
            }, {
                default: k((() => [b(u(K), {
                    span: 12
                }, {
                    default: k((() => {
                        var t, e, i;
                        return [d("div", ne, [b(u(Q), {
                            value: null == (t = D.configStats) ? void 0 : t.marketCap
                        }, {
                            title: k((() => [d("div", le, c(u(j)("dash.marketcap")), 1)])),
                            _: 1
                        }, 8, ["value"]), d("div", he, [d("div", de, [d("span", null, c(u(j)("dash.today")), 1), d("span", {
                            class: S((null == (e = D.configStats) ? void 0 : e.marketCapPercent.startsWith("-")) ? "red" : "green")
                        }, c(null == (i = D.configStats) ? void 0 : i.marketCapPercent), 3)])])])]
                    })),
                    _: 1
                }), b(u(K), {
                    span: 12
                }, {
                    default: k((() => {
                        var t, e, i;
                        return [d("div", ce, [b(u(Q), {
                            value: null == (t = D.configStats) ? void 0 : t.volume24h
                        }, {
                            title: k((() => [d("div", pe, c(u(j)("exh.24h-volume")), 1)])),
                            _: 1
                        }, 8, ["value"]), d("div", ue, [d("div", ge, [d("span", null, c(u(j)("dash.today")), 1), d("span", {
                            class: S((null == (e = D.configStats) ? void 0 : e.volume24hPercent.startsWith("-")) ? "red" : "green")
                        }, c(null == (i = D.configStats) ? void 0 : i.volume24hPercent), 3)])])])]
                    })),
                    _: 1
                })])),
                _: 1
            }), e[2] || (e[2] = d("div", {
                class: "header2 mt-5 pb-1"
            }, [d("span", null, " Fear and Greed Index ")], -1)), d("div", fe, [d("div", me, [d("div", xe, [b(u(tt), {
                type: "dashboard",
                percentage: D.configStats.fearAndGreedIndex,
                color: P.value,
                width: 60
            }, {
                default: k((({
                    percentage: t
                }) => [d("span", ye, c(t) + "%", 1), e[0] || (e[0] = d("span", {
                    class: "percentage-label"
                }, [d("i", {
                    "aria-hidden": "true",
                    class: "iconify",
                    "data-icon": "feather:activity"
                })], -1))])),
                _: 1
            }, 8, ["percentage", "color"]), d("p", ve, c(N.value), 1)])]), d("div", be, [d("p", null, c(T.value), 1)])]), d("div", ke, [d("span", null, c(u(j)("dash.marketcap")) + " Heatmap ", 1)]), b(u($), f(C(z)), null, 16)])) : g("", !0), B.value ? (l(), h("div", Se, [d("div", Ce, [d("div", we, [d("div", Me, [d("div", Ae, [d("span", null, c(E.coin) + " Performance", 1)])]), b(u(J), {
                gutter: W.value ? 5 : 20
            }, {
                default: k((() => [(l(!0), h(w, null, M(H, ((t, e) => (l(), p(u(K), {
                    span: 8,
                    key: e
                }, {
                    default: k((() => [b(u(et), {
                        effect: "plain",
                        class: "h2a",
                        type: D.currentCoin[t.prop] < 0 ? "danger" : "success"
                    }, {
                        default: k((() => {
                            var e;
                            return [d("div", Te, [d("div", null, c(null == (e = D.currentCoin[t.prop]) ? void 0 : e.toFixed(2)) + "%", 1), d("div", null, c(t.label), 1)])]
                        })),
                        _: 2
                    }, 1032, ["type"])])),
                    _: 2
                }, 1024)))), 128))])),
                _: 1
            }, 8, ["gutter"]), d("div", Pe, [(l(!0), h(w, null, M(m.value, ((t, e) => (l(), h("div", {
                class: "coin-info-point",
                key: e
            }, [d("span", Le, c(t.label), 1), d("span", Oe, c(t.value), 1)])))), 128))]), d("div", Ee, [d("span", null, c(E.coin) + " Public Treasury ", 1)]), d("div", De, [d("div", je, [e[3] || (e[3] = d("span", {
                class: ""
            }, "Total Holdings", -1)), d("span", Ie, c(D.treasury.total_holdings), 1)]), d("div", Be, [e[4] || (e[4] = d("span", {
                class: ""
            }, "Total Value USD", -1)), d("span", Re, "$" + c(R(D.treasury.total_value_usd)), 1)]), d("div", Ne, [e[5] || (e[5] = d("span", {
                class: ""
            }, "Market Cap Dominance", -1)), d("span", ze, c(D.treasury.market_cap_dominance) + "%", 1)])]), b(u(st), {
                class: "slim-table mt-3",
                data: D.treasury.companies,
                "tooltip-effect": "dark",
                style: {
                    width: "100%"
                },
                height: "193",
                "element-loading-background": "rgba(0, 0, 0, 0.8)",
                "element-loading-text": u(j)("pga.loading"),
                "element-loading-spinner": u(Z),
                "element-loading-svg-view-box": "-10, -10, 50, 50"
            }, {
                default: k((() => [b(u(it), {
                    prop: "country",
                    label: "Country",
                    width: "66"
                }), b(u(it), {
                    prop: "name",
                    label: "Name"
                }), b(u(it), {
                    prop: "symbol",
                    label: "Symbol",
                    width: "130"
                }), b(u(it), {
                    "class-name": "zformat1",
                    fixed: "right",
                    prop: "total_current_value_usd",
                    align: "right",
                    label: "Value USD"
                }, {
                    default: k((t => [x(" $" + c(R(t.row.total_current_value_usd)), 1)])),
                    _: 1
                })])),
                _: 1
            }, 8, ["data", "element-loading-text", "element-loading-spinner"])])])])) : g("", !0)]))
        }
    }), [
        ["__scopeId", "data-v-c58dbdc9"]
    ]),
    He = {
        class: "plan-focus"
    },
    Ge = {
        class: "left-side"
    },
    Fe = {
        class: "header"
    },
    _e = {
        class: "text-bold",
        style: {
            "margin-left": "6px",
            position: "relative",
            top: "-3px",
            "font-size": "18px"
        }
    },
    Xe = {
        class: "benefits content flex items-center",
        style: {
            gap: "20px"
        }
    },
    Ye = {
        class: "items-center flex-col flex"
    },
    Ue = {
        class: "percentage-value"
    },
    Ve = {
        class: "text-12 text-medium text-gray4"
    },
    $e = {
        class: "mt-0"
    },
    qe = {
        class: "right-side"
    },
    Ze = {
        class: "feature-highlight"
    },
    Ke = {
        class: "highlight-item"
    },
    Je = {
        class: "announcements"
    },
    Qe = {
        class: "accouncements-date flex flex-col justify-between"
    },
    ti = {
        class: "text-gray1"
    },
    ei = {
        class: "accouncements-content"
    },
    ii = {
        class: "accouncements-title"
    },
    si = {
        class: "accouncements-description"
    },
    ri = q(e({
        __name: "NewsTab",
        props: {
            coin: {
                default: ""
            },
            activeTab: {
                default: 0
            }
        },
        setup(t) {
            const {
                Api: e
            } = i(), o = t, n = t => Math.round((t + 1.5) / 3 * 100), g = s({
                allNews: [],
                sentiment: {}
            }), f = t => t >= 80 ? "Very Positive" : t >= 60 ? "Positive" : t >= 40 ? "Neutral" : t >= 20 ? "Negative" : "Very Negative", m = r(!1);
            a((() => o.activeTab), ((t, i) => {
                2 === t && (g.sentiment && g.sentiment.sentimentScore && 0 !== g.sentiment.sentimentScore && g.allNews || (() => {
                    const t = new FormData;
                    t.append("coinId", "BTC" === o.coin ? "bitcoin" : "ethereum"), e.newsQuery(t).then((({
                        data: t
                    }) => {
                        0 == t.code && t.data && (g.allNews = t.data)
                    })), e.sentimentQuery(t).then((({
                        data: t
                    }) => {
                        if (0 == t.code && t.data) {
                            const e = {
                                sentimentScore: n(parseFloat(t.data["Sentiment Score"])),
                                sentimentScoreToday: n(parseFloat(t.data["Sentiment Score Today"])),
                                totalPositive: parseInt(t.data["Total Positive"], 10),
                                totalNegative: parseInt(t.data["Total Negative"], 10),
                                totalNeutral: parseInt(t.data["Total Neutral"], 10)
                            };
                            g.sentiment = e, m.value = !0
                        }
                    }))
                })())
            }));
            const v = t => {
                    const e = new Date(t);
                    return `${new Intl.DateTimeFormat("en-US",{year:"numeric",month:"short",day:"numeric"}).format(e)}, ${new Intl.DateTimeFormat("en-US",{hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(e)}`
                },
                C = t => t >= 80 || t >= 60 ? "success" : t >= 40 ? void 0 : t >= 20 ? "warning" : "exception",
                A = y((() => C(g.sentiment.sentimentScoreToday))),
                T = y((() => C(g.sentiment.sentimentScore)));
            return (t, e) => {
                const i = rt;
                return l(), h("div", He, [d("div", Ge, [d("div", Fe, [d("span", null, c(o.coin) + " News Analysis ", 1)]), e[4] || (e[4] = d("div", {
                    class: "plan-tagline"
                }, [d("p", null, " Dynamically aggregates and interprets the latest financial news, leveraging advanced AI to provide actionable insights and trends directly influencing crypto trading strategies. ")], -1)), e[5] || (e[5] = d("div", {
                    class: "header2"
                }, [d("span", null, " Segment Analysis Today")], -1)), m.value ? (l(), p(u(tt), {
                    key: 1,
                    percentage: g.sentiment.sentimentScoreToday,
                    "stroke-width": 24,
                    status: A.value,
                    striped: "",
                    class: "mb-5"
                }, {
                    default: k((({
                        percentage: t
                    }) => [d("span", _e, c(f(g.sentiment.sentimentScoreToday)), 1)])),
                    _: 1
                }, 8, ["percentage", "status"])) : (l(), p(i, {
                    key: 0,
                    width: "100%",
                    class: "mb-5",
                    height: "24px",
                    style: {
                        "border-radius": "15px"
                    }
                })), e[6] || (e[6] = d("div", {
                    class: "header2"
                }, [d("span", null, " Segment Analysis 30-Day")], -1)), d("div", Xe, [d("div", Ye, [b(u(tt), {
                    type: "dashboard",
                    percentage: g.sentiment.sentimentScore,
                    status: T.value,
                    width: 60
                }, {
                    default: k((({
                        percentage: t
                    }) => [d("span", Ue, c(t) + "%", 1), e[0] || (e[0] = d("span", {
                        class: "percentage-label"
                    }, [d("i", {
                        "aria-hidden": "true",
                        class: "iconify",
                        "data-icon": "feather:activity"
                    })], -1))])),
                    _: 1
                }, 8, ["percentage", "status"]), d("p", Ve, c(f(g.sentiment.sentimentScore)), 1)]), d("ul", $e, [d("li", null, [e[1] || (e[1] = d("b", null, "Total Positive News:", -1)), x(" " + c(g.sentiment.totalPositive), 1)]), d("li", null, [e[2] || (e[2] = d("b", null, "Total Negative News:", -1)), x(" " + c(g.sentiment.totalNegative), 1)]), d("li", null, [e[3] || (e[3] = d("b", null, "Total Neutral News:", -1)), x(" " + c(g.sentiment.totalNeutral), 1)])])])]), d("div", qe, [d("div", Ze, [d("div", Ke, [b(u(ot), {
                    height: "347px"
                }, {
                    default: k((() => [d("div", Je, [(l(!0), h(w, null, M((t.activeTab, g.allNews), ((t, e) => (l(), h("div", {
                        key: e,
                        class: "accouncement-item"
                    }, [d("div", null, [d("div", Qe, [d("div", ti, c(v(t.date)), 1), d("div", {
                        class: S(["text-gray1", "Neutral" != (null == t ? void 0 : t.sentiment) ? "Positive" === (null == t ? void 0 : t.sentiment) ? "text-green-darken" : "text-red-darken" : ""])
                    }, c(t.sentiment), 3)]), d("div", ei, [d("div", ii, c(t.headline), 1), d("div", si, c(t.text), 1)])])])))), 128))])])),
                    _: 1
                })])])])])
            }
        }
    }), [
        ["__scopeId", "data-v-ca747066"]
    ]),
    oi = e({
        __name: "VViewWrapperAI",
        props: {
            topNav: {
                type: Boolean
            },
            full: {
                type: Boolean
            }
        },
        setup(t) {
            const e = at(),
                i = t;
            return (t, s) => (l(), h("div", {
                class: S(["view-wrapper ai-view", [i.topNav && "has-top-nav", i.full && "view-wrapper-full", u(e).isPushed && "is-pushed-full", u(e).isPushedBlock && "is-pushed-block"]])
            }, [A(t.$slots, "default")], 2))
        }
    }),
    ai = "/images/svg/market-analysis.svg",
    ni = {
        class: "is-chat-placeholder animated preFadeInUp fadeInUp is-hidden"
    },
    li = e({
        __name: "ChatPlaceholder",
        setup: t => (t, e) => (l(), h("div", ni, e[0] || (e[0] = [d("div", {
            class: "caption"
        }, [d("img", {
            src: ai,
            alt: ""
        }), d("div", {
            class: "text"
        }, [d("h3", null, "Nothing to show"), d("p", null, "Select an existing conversation or start a new one"), d("a", {
            id: "new-chat",
            class: "button v-button is-solid is-outlined is-big is-rounded"
        }, " Start a new conversation ")])], -1)])))
    });
const hi = {
        class: "message-field-wrapper"
    },
    di = {
        class: "control"
    },
    ci = {
        class: "add-content"
    },
    pi = {
        class: "dropdown-menu",
        role: "menu"
    },
    ui = {
        class: "dropdown-content"
    },
    gi = {
        class: "add-emoji"
    },
    fi = e({
        __name: "ChatMessageFieldWrapper",
        setup(t) {
            const e = r(),
                i = function(t, e = {
                    clickOutside: !0
                }) {
                    const i = r(!1);
                    return e.clickOutside && T(t, (() => {
                        i.value = !1
                    })), P((() => {
                        t.value && (i.value ? t.value.classList.add("is-active") : t.value.classList.remove("is-active"))
                    })), s({
                        isOpen: i,
                        open: () => {
                            i.value = !0
                        },
                        close: () => {
                            i.value = !1
                        },
                        toggle: () => {
                            i.value = !i.value
                        }
                    })
                }(e),
                o = r(!1);
            return (t, s) => (l(), h("div", hi, [d("div", di, [d("div", ci, [d("div", {
                ref_key: "dropdownElement",
                ref: e,
                class: "dropdown dropdown-trigger is-up"
            }, [d("div", null, [d("div", {
                class: "button",
                "aria-haspopup": "true",
                onClick: s[0] || (s[0] = (...t) => u(i).toggle && u(i).toggle(...t))
            }, s[8] || (s[8] = [d("i", {
                "aria-hidden": "true",
                class: "iconify",
                "data-icon": "feather:plus"
            }, null, -1)]))]), d("div", pi, [d("div", ui, [d("a", {
                class: "dropdown-item",
                onClick: s[1] || (s[1] = t => o.value = !0)
            }, s[9] || (s[9] = [d("i", {
                "aria-hidden": "true",
                class: "iconify",
                "data-icon": "feather:video"
            }, null, -1), d("div", {
                class: "meta"
            }, [d("span", {
                class: "text-dark1"
            }, "Video"), d("span", null, "Embed a video")], -1)])), d("a", {
                onClick: s[2] || (s[2] = t => o.value = !0),
                class: "dropdown-item kill-drop v-modal-trigger"
            }, s[10] || (s[10] = [d("i", {
                "aria-hidden": "true",
                class: "iconify",
                "data-icon": "feather:image"
            }, null, -1), d("div", {
                class: "meta"
            }, [d("span", null, "Images"), d("span", null, "Upload pictures")], -1)])), d("a", {
                onClick: s[3] || (s[3] = t => o.value = !0),
                class: "dropdown-item kill-drop v-modal-trigger"
            }, s[11] || (s[11] = [d("i", {
                "aria-hidden": "true",
                class: "iconify",
                "data-icon": "feather:link"
            }, null, -1), d("div", {
                class: "meta"
            }, [d("span", null, "Link"), d("span", null, "Post a link")], -1)])), s[13] || (s[13] = d("hr", {
                class: "dropdown-divider"
            }, null, -1)), d("a", {
                onClick: s[4] || (s[4] = t => o.value = !0),
                class: "dropdown-item kill-drop v-modal-trigger"
            }, s[12] || (s[12] = [d("i", {
                "aria-hidden": "true",
                class: "iconify",
                "data-icon": "feather:file"
            }, null, -1), d("div", {
                class: "meta"
            }, [d("span", null, "File"), d("span", null, "Upload a file")], -1)]))])])], 512)]), d("div", gi, [d("div", {
                class: "button",
                onClick: s[5] || (s[5] = t => o.value = !0)
            }, s[14] || (s[14] = [d("i", {
                "aria-hidden": "true",
                class: "iconify",
                "data-icon": "feather:smile"
            }, null, -1)]))]), s[16] || (s[16] = d("input", {
                id: "chat-input",
                class: "input is-rounded",
                type: "text",
                placeholder: "Write a message ...",
                "aria-label": "Write a message"
            }, null, -1)), d("div", {
                class: "send-message",
                onClick: s[6] || (s[6] = t => o.value = !0)
            }, s[15] || (s[15] = [d("div", {
                class: "button v-button is-primary is-raised is-rounded"
            }, "Send", -1)]))]), s[17] || (s[17] = d("div", {
                class: "typing-indicator"
            }, [d("img", {
                src: "/images/icons/misc/typing.gif",
                alt: ""
            })], -1)), b(ht, {
                modelValue: o.value,
                "onUpdate:modelValue": s[7] || (s[7] = t => o.value = t)
            }, null, 8, ["modelValue"])]))
        }
    }),
    mi = {
        class: "chat-body-wrap"
    };
const xi = q({}, [
        ["render", function(t, e) {
            return l(), h("div", mi, [A(t.$slots, "default")])
        }]
    ]),
    yi = q(e({
        __name: "ChatCard",
        props: {
            loaded: {
                type: Boolean,
                default: !1
            },
            activeIndex: {
                default: "1"
            },
            fadeUp: {
                type: Boolean,
                default: !0
            }
        },
        setup(t) {
            const e = t,
                i = y((() => ({
                    exch: "2" === e.activeIndex,
                    preFadeInUp: e.fadeUp,
                    fadeInUp: e.fadeUp,
                    isTrade: !e.fadeUp
                })));
            return (t, e) => {
                const s = xi,
                    r = fi;
                return l(), h("div", {
                    class: S(["is-chat animated card", i.value])
                }, [b(s, null, {
                    default: k((() => [A(t.$slots, "body", {}, void 0, !0), A(t.$slots, "side", {}, void 0, !0)])),
                    _: 3
                }), b(r), e[0] || (e[0] = L('<div class="card-arrow" data-v-e9e596e1><div class="card-arrow-top-left" data-v-e9e596e1></div><div class="card-arrow-top-right" data-v-e9e596e1></div><div class="card-arrow-bottom-left" data-v-e9e596e1></div><div class="card-arrow-bottom-right" data-v-e9e596e1></div></div>', 1))], 2)
            }
        }
    }), [
        ["__scopeId", "data-v-e9e596e1"]
    ]);
var vi = {
    exports: {}
};
const bi = O(vi.exports = function(t, e, i) {
    e.prototype.isToday = function() {
        var t = "YYYY-MM-DD",
            e = i();
        return this.format(t) === e.format(t)
    }
});
var ki = {
    exports: {}
};
const Si = O(ki.exports = function(t, e, i) {
    e.prototype.isYesterday = function() {
        var t = "YYYY-MM-DD",
            e = i().subtract(1, "day");
        return this.format(t) === e.format(t)
    }
});
async function Ci(t, e, i) {
    let s = 0;
    const {
        _data: r = [],
        headers: o
    } = await t.raw(`/ai-chat/chat/${i}`);
    o.has("X-Total-Count") && (s = parseInt(o.get("X-Total-Count") ? ? "0"));
    const a = [];
    let n = "";
    return r.forEach(((t, i) => {
        const s = t.content.time ? parseInt(t.content.time) : Date.now(),
            r = mt(s).format("YYYY-MM-DD");
        if (n !== r) {
            const t = mt(s).isToday() ? "Today" : mt(s).isYesterday() ? "Yesterday" : mt(s).format("YYYY-MM-DD"),
                i = function(t, e) {
                    return {
                        id: -1,
                        conversationId: t,
                        messageId: 0,
                        type: "system",
                        sender: null,
                        avatar: null,
                        content: {
                            text: e,
                            time: null
                        }
                    }
                }(e, t);
            a.push(i), n = r
        }
        a.push(t)
    })), a.forEach(((t, e) => t.id = 0 + e + 1)), {
        messages: a,
        count: s
    }
}
mt.extend(bi), mt.extend(Si);
const wi = /#/g,
    Mi = /&/g,
    Ai = /\//g,
    Ti = /=/g,
    Pi = /\+/g,
    Li = /%5e/gi,
    Oi = /%60/gi,
    Ei = /%7c/gi,
    Di = /%20/gi;

function ji(t) {
    return (e = "string" == typeof t ? t : JSON.stringify(t), encodeURI("" + e).replace(Ei, "|")).replace(Pi, "%2B").replace(Di, "+").replace(wi, "%23").replace(Mi, "%26").replace(Oi, "`").replace(Li, "^").replace(Ai, "%2F");
    var e
}

function Ii(t) {
    return ji(t).replace(Ti, "%3D")
}

function Bi(t = "") {
    try {
        return decodeURIComponent("" + t)
    } catch {
        return "" + t
    }
}

function Ri(t) {
    return Bi(t.replace(Pi, " "))
}

function Ni(t = "") {
    const e = {};
    "?" === t[0] && (t = t.slice(1));
    for (const i of t.split("&")) {
        const t = i.match(/([^=]+)=?(.*)/) || [];
        if (t.length < 2) continue;
        const s = Bi(t[1].replace(Pi, " "));
        if ("__proto__" === s || "constructor" === s) continue;
        const r = Ri(t[2] || "");
        void 0 === e[s] ? e[s] = r : Array.isArray(e[s]) ? e[s].push(r) : e[s] = [e[s], r]
    }
    return e
}

function zi(t) {
    return Object.keys(t).filter((e => void 0 !== t[e])).map((e => {
        return i = e, "number" != typeof(s = t[e]) && "boolean" != typeof s || (s = String(s)), s ? Array.isArray(s) ? s.map((t => `${Ii(i)}=${ji(t)}`)).join("&") : `${Ii(i)}=${ji(s)}` : Ii(i);
        var i, s
    })).filter(Boolean).join("&")
}
const Wi = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/,
    Hi = /^[\s\w\0+.-]{2,}:([/\\]{2})?/,
    Gi = /^([/\\]\s*){2,}[^/\\]/,
    Fi = /^\.?\//;

function _i(t, e = {}) {
    return "boolean" == typeof e && (e = {
        acceptRelative: e
    }), e.strict ? Wi.test(t) : Hi.test(t) || !!e.acceptRelative && Gi.test(t)
}

function Xi(t = "", e) {
    return t.endsWith("/") ? t : t + "/"
}

function Yi(t, e) {
    if (!(i = e) || "/" === i || _i(t)) return t;
    var i;
    const s = function(t = "") {
        return (function(t = "") {
            return t.endsWith("/")
        }(t) ? t.slice(0, -1) : t) || "/"
    }(e);
    return t.startsWith(s) ? t : function(t, ...e) {
        let i = t || "";
        for (const s of e.filter((t => function(t) {
                return t && "/" !== t
            }(t))))
            if (i) {
                const t = s.replace(Fi, "");
                i = Xi(i) + t
            } else i = s;
        return i
    }(s, t)
}

function Ui(t, e) {
    const i = function(t = "") {
            const e = t.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);
            if (e) {
                const [, t, i = ""] = e;
                return {
                    protocol: t.toLowerCase(),
                    pathname: i,
                    href: t + i,
                    auth: "",
                    host: "",
                    search: "",
                    hash: ""
                }
            }
            if (!_i(t, {
                    acceptRelative: !0
                })) return $i(t);
            const [, i = "", s, r = ""] = t.replace(/\\/g, "/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || [];
            let [, o = "", a = ""] = r.match(/([^#/?]*)(.*)?/) || [];
            "file:" === i && (a = a.replace(/\/(?=[A-Za-z]:)/, ""));
            const {
                pathname: n,
                search: l,
                hash: h
            } = $i(a);
            return {
                protocol: i.toLowerCase(),
                auth: s ? s.slice(0, Math.max(0, s.length - 1)) : "",
                host: o,
                pathname: n,
                search: l,
                hash: h,
                [Vi]: !i
            }
        }(t),
        s = { ...Ni(i.search),
            ...e
        };
    return i.search = zi(s),
        function(t) {
            const e = t.pathname || "",
                i = t.search ? (t.search.startsWith("?") ? "" : "?") + t.search : "",
                s = t.hash || "",
                r = t.auth ? t.auth + "@" : "",
                o = t.host || "",
                a = t.protocol || t[Vi] ? (t.protocol || "") + "//" : "";
            return a + r + o + e + i + s
        }(i)
}
const Vi = Symbol.for("ufo:protocolRelative");

function $i(t = "") {
    const [e = "", i = "", s = ""] = (t.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
    return {
        pathname: e,
        search: i,
        hash: s
    }
}
class qi extends Error {
    constructor(t, e) {
        super(t, e), this.name = "FetchError", (null == e ? void 0 : e.cause) && !this.cause && (this.cause = e.cause)
    }
}
const Zi = new Set(Object.freeze(["PATCH", "POST", "PUT", "DELETE"]));

function Ki(t = "GET") {
    return Zi.has(t.toUpperCase())
}
const Ji = new Set(["image/svg", "application/xml", "application/xhtml", "application/html"]),
    Qi = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;

function ts(t, e, i = globalThis.Headers) {
    const s = { ...e,
        ...t
    };
    if ((null == e ? void 0 : e.params) && (null == t ? void 0 : t.params) && (s.params = { ...null == e ? void 0 : e.params,
            ...null == t ? void 0 : t.params
        }), (null == e ? void 0 : e.query) && (null == t ? void 0 : t.query) && (s.query = { ...null == e ? void 0 : e.query,
            ...null == t ? void 0 : t.query
        }), (null == e ? void 0 : e.headers) && (null == t ? void 0 : t.headers)) {
        s.headers = new i((null == e ? void 0 : e.headers) || {});
        for (const [e, r] of new i((null == t ? void 0 : t.headers) || {})) s.headers.set(e, r)
    }
    return s
}
const es = new Set([408, 409, 425, 429, 500, 502, 503, 504]),
    is = new Set([101, 204, 205, 304]);
const ss = function() {
        if ("undefined" != typeof globalThis) return globalThis;
        if ("undefined" != typeof self) return self;
        if ("undefined" != typeof window) return window;
        if ("undefined" != typeof global) return global;
        throw new Error("unable to locate global object")
    }(),
    rs = function t(e = {}) {
        const {
            fetch: i = globalThis.fetch,
            Headers: s = globalThis.Headers,
            AbortController: r = globalThis.AbortController
        } = e;
        async function o(t) {
            const e = t.error && "AbortError" === t.error.name && !t.options.timeout || !1;
            if (!1 !== t.options.retry && !e) {
                let e;
                e = "number" == typeof t.options.retry ? t.options.retry : Ki(t.options.method) ? 0 : 1;
                const i = t.response && t.response.status || 500;
                if (e > 0 && (Array.isArray(t.options.retryStatusCodes) ? t.options.retryStatusCodes.includes(i) : es.has(i))) {
                    const i = t.options.retryDelay || 0;
                    return i > 0 && await new Promise((t => setTimeout(t, i))), a(t.request, { ...t.options,
                        retry: e - 1,
                        timeout: t.options.timeout
                    })
                }
            }
            const i = function(t) {
                var e, i, s, r, o;
                const a = (null == (e = t.error) ? void 0 : e.message) || (null == (i = t.error) ? void 0 : i.toString()) || "",
                    n = (null == (s = t.request) ? void 0 : s.method) || (null == (r = t.options) ? void 0 : r.method) || "GET",
                    l = (null == (o = t.request) ? void 0 : o.url) || String(t.request) || "/",
                    h = `[${n}] ${JSON.stringify(l)}`,
                    d = t.response ? `${t.response.status} ${t.response.statusText}` : "<no response>",
                    c = new qi(`${h}: ${d}${a?` ${a}`:""}`, t.error ? {
                        cause: t.error
                    } : void 0);
                for (const p of ["request", "options", "response"]) Object.defineProperty(c, p, {
                    get: () => t[p]
                });
                for (const [p, u] of [
                        ["data", "_data"],
                        ["status", "status"],
                        ["statusCode", "status"],
                        ["statusText", "statusText"],
                        ["statusMessage", "statusText"]
                    ]) Object.defineProperty(c, p, {
                    get: () => t.response && t.response[u]
                });
                return c
            }(t);
            throw Error.captureStackTrace && Error.captureStackTrace(i, a), i
        }
        const a = async function(t, a = {}) {
                var n;
                const l = {
                    request: t,
                    options: ts(a, e.defaults, s),
                    response: void 0,
                    error: void 0
                };
                if (l.options.method = null == (n = l.options.method) ? void 0 : n.toUpperCase(), l.options.onRequest && await l.options.onRequest(l), "string" == typeof l.request && (l.options.baseURL && (l.request = Yi(l.request, l.options.baseURL)), (l.options.query || l.options.params) && (l.request = Ui(l.request, { ...l.options.params,
                        ...l.options.query
                    }))), l.options.body && Ki(l.options.method) && (! function(t) {
                        if (void 0 === t) return !1;
                        const e = typeof t;
                        return "string" === e || "number" === e || "boolean" === e || null === e || "object" === e && (!!Array.isArray(t) || !t.buffer && (t.constructor && "Object" === t.constructor.name || "function" == typeof t.toJSON))
                    }(l.options.body) ? ("pipeTo" in l.options.body && "function" == typeof l.options.body.pipeTo || "function" == typeof l.options.body.pipe) && ("duplex" in l.options || (l.options.duplex = "half")) : (l.options.body = "string" == typeof l.options.body ? l.options.body : JSON.stringify(l.options.body), l.options.headers = new s(l.options.headers || {}), l.options.headers.has("content-type") || l.options.headers.set("content-type", "application/json"), l.options.headers.has("accept") || l.options.headers.set("accept", "application/json"))), !l.options.signal && l.options.timeout) {
                    const t = new r;
                    setTimeout((() => t.abort()), l.options.timeout), l.options.signal = t.signal
                }
                try {
                    l.response = await i(l.request, l.options)
                } catch (h) {
                    return l.error = h, l.options.onRequestError && await l.options.onRequestError(l), await o(l)
                }
                if (l.response.body && !is.has(l.response.status) && "HEAD" !== l.options.method) {
                    const t = (l.options.parseResponse ? "json" : l.options.responseType) || function(t = "") {
                        if (!t) return "json";
                        const e = t.split(";").shift() || "";
                        return Qi.test(e) ? "json" : Ji.has(e) || e.startsWith("text/") ? "text" : "blob"
                    }(l.response.headers.get("content-type") || "");
                    switch (t) {
                        case "json":
                            {
                                const t = await l.response.text(),
                                    e = l.options.parseResponse || xt;l.response._data = e(t);
                                break
                            }
                        case "stream":
                            l.response._data = l.response.body;
                            break;
                        default:
                            l.response._data = await l.response[t]()
                    }
                }
                return l.options.onResponse && await l.options.onResponse(l), !l.options.ignoreResponseError && l.response.status >= 400 && l.response.status < 600 ? (l.options.onResponseError && await l.options.onResponseError(l), await o(l)) : l.response
            },
            n = async function(t, e) {
                return (await a(t, e))._data
            };
        return n.raw = a, n.native = (...t) => i(...t), n.create = (i = {}) => t({ ...e,
            defaults: { ...e.defaults,
                ...i
            }
        }), n
    }({
        fetch: ss.fetch || (() => Promise.reject(new Error("[ofetch] global.fetch is not supported!"))),
        Headers: ss.Headers,
        AbortController: ss.AbortController
    }),
    {
        Api: os
    } = i();
const as = {
        id: 0,
        name: "",
        lastMessage: "",
        unreadMessages: !1,
        avatar: "/images/svg/market-analysis.svg"
    },
    ns = D("chat", (() => {
        const t = rs.create({
                baseURL: os.isDev ? "http://localhost:6007/overview" : "https://www.api.opz.com/overview",
                onRequest: ({
                    options: t
                }) => {
                    const e = E();
                    e.isLoggedIn && (t.headers = { ...t.headers,
                        Authorization: `Bearer ${e.token}`
                    })
                }
            }),
            e = r([]),
            i = r([]),
            s = r(0),
            o = r(!1),
            a = r(!1),
            n = r(!1),
            l = y((() => {
                var t;
                const i = null == (t = e.value) ? void 0 : t.find((t => t.id === s.value));
                return i || as
            }));
        return {
            conversations: e,
            messages: i,
            selectedConversation: l,
            selectedConversationId: s,
            addConversationOpen: o,
            mobileConversationDetailsOpen: a,
            loading: n,
            loadConversations: async function(t) {
                if (!n.value) {
                    n.value = !0;
                    try {
                        const i = await async function() {
                            return {
                                conversations: [{
                                    id: 1,
                                    name: "OPZ-AI",
                                    lastMessage: "1 minutes ago",
                                    unreadMessages: !0,
                                    avatar: "/images/svg/market-analysis.svg"
                                }],
                                count: 1
                            }
                        }(0, 0, 10, t);
                        e.value = i.conversations ? ? []
                    } finally {
                        n.value = !1
                    }
                }
            },
            setAddConversationOpen: function(t) {
                o.value = t
            },
            setMobileConversationDetailsOpen: function(t) {
                a.value = t
            },
            selectConversastion: async function(e, r) {
                if (!n.value) {
                    n.value = !0;
                    try {
                        const o = await Ci(t, e, r);
                        s.value = e, i.value = o.messages
                    } finally {
                        n.value = !1
                    }
                }
            },
            unselectConversation: function() {
                s.value = 0, i.value = []
            }
        }
    })),
    ls = {
        class: "chat-side-header flex justify-between"
    },
    hs = {
        class: "flex items-center"
    },
    ds = ["src"],
    cs = {
        class: "cardV2-top-btn"
    },
    ps = {
        class: "chat-side-content is-single"
    },
    us = {
        class: "user-pic"
    },
    gs = {
        key: 0,
        class: "user-name"
    },
    fs = {
        class: "flex items-center justify-between mt-3",
        style: {
            width: "100%",
            "align-items": "start",
            "text-align": "start",
            "padding-right": "24px",
            "padding-left": "24px"
        }
    },
    ms = {
        class: "flex items-center"
    },
    xs = {
        key: 1
    },
    ys = {
        class: "flex items-center justify-between mt-1",
        style: {
            width: "100%",
            "align-items": "start",
            "text-align": "start",
            "padding-right": "24px",
            "padding-left": "24px"
        }
    },
    vs = {
        style: {
            "font-size": "12px"
        }
    },
    bs = {
        class: "cardV2"
    },
    ks = {
        class: "cardV2-body"
    },
    Ss = {
        class: "cardV2-body-bottom"
    },
    Cs = {
        class: "cardV2-body-bottom-r"
    },
    ws = {
        class: "percentage-value"
    },
    Ms = {
        class: "cardV2-body-bottom-t"
    },
    As = {
        class: "cardV2-body-bottom-t1"
    },
    Ts = {
        class: "cardV2-body-bottom-t2"
    },
    Ps = {
        class: "side-actions"
    },
    Ls = q(e({
        __name: "ChatSide",
        props: {
            coin: {
                default: ""
            }
        },
        setup(t) {
            const e = j(),
                {
                    Api: o
                } = i(),
                {
                    t: a
                } = v(),
                n = s({
                    staking: {}
                }),
                f = r(!0);
            o.getStakingAvailable().then((t => {
                const e = t.data;
                if (e.data && null != e.data && e.data.length > 0) {
                    const t = e.data.find((t => t.aiCoin === C.coin.toUpperCase()));
                    n.staking = t
                }
                f.value = !1
            }));
            const m = y((() => parseFloat((n.staking.amountPurchased / n.staking.maxAvailable * 100).toFixed(2)))),
                C = t,
                w = ns(),
                M = y((() => {
                    const t = n.staking.amountPurchased / n.staking.maxAvailable;
                    return t <= .1 ? "Basic" : t <= .2 ? "Moderate" : t <= .4 ? "Enhanced" : t <= .6 ? "High" : t <= .8 ? "Very High" : "Maximum"
                }));
            return (t, i) => {
                var s, r;
                const o = rt,
                    y = ft;
                return l(), h("div", {
                    class: S([
                        [u(w).mobileConversationDetailsOpen && "is-mobile-active"], "chat-side"
                    ])
                }, [d("div", ls, [d("div", hs, [d("img", {
                    id: "user-details-badge",
                    class: "mr-2",
                    width: "30",
                    src: "/images/coinsnew/" + (null == (s = C.coin) ? void 0 : s.toLowerCase()) + ".png",
                    alt: ""
                }, null, 8, ds), i[1] || (i[1] = d("span", {
                    class: "text-gray1 text-12"
                }, "OPZ-AI ", -1))]), d("div", cs, [b(u(vt), {
                    effect: "customized",
                    content: "Active",
                    placement: "top"
                }, {
                    default: k((() => i[2] || (i[2] = [d("div", {
                        class: "cardV2-top-btn-circle pulsate"
                    }, null, -1)]))),
                    _: 1
                })])]), d("div", ps, [d("div", us, [b(u(yt), {
                    class: "fbz-img-lt",
                    animationLink: "/assets/animated/ai5.json",
                    height: 90,
                    width: 90
                })]), u(w).selectedConversation.name ? (l(), h("h4", gs, c(null == (r = null == n ? void 0 : n.staking) ? void 0 : r.title), 1)) : g("", !0), d("div", fs, [d("div", ms, [d("p", null, c(u(a)("stk.est-apy")), 1)]), f.value || !n.staking ? (l(), p(o, {
                    key: 0,
                    width: "100px",
                    height: "30px"
                })) : (l(), h("div", xs, [d("span", {
                    class: S(n.staking.annualInterestRate > 0 ? "text-green-500" : n.staking.annualInterestRate < 0 ? "text-red-500" : "")
                }, c((n.staking.annualInterestRate > 0 ? "+" : "") + (100 * n.staking.annualInterestRate).toFixed(2)) + "% ", 3)]))]), b(u(vt), {
                    effect: "customized",
                    placement: "top"
                }, {
                    content: k((() => [d("p", null, [x(" Your stake directly fuels " + c(C.coin) + "-GPT Processing Power,", 1), i[3] || (i[3] = d("br", null, null, -1)), i[4] || (i[4] = x(" allowing it to make smart trading decisions. "))])])),
                    default: k((() => [d("div", ys, [i[5] || (i[5] = d("div", {
                        class: "flex items-center",
                        style: {
                            "font-size": "12px"
                        }
                    }, [d("p", null, "Processing Power")], -1)), d("span", vs, c(M.value), 1)])])),
                    _: 1
                }), d("div", bs, [d("div", ks, [0 != n.staking.maxprogress ? (l(), p(u(vt), {
                    key: 0,
                    effect: "customized",
                    content: n.staking.amountPurchased + "/" + n.staking.maxAvailable + " OPZ (" + m.value + "%)",
                    placement: "bottom"
                }, {
                    default: k((() => {
                        var t, e;
                        return [d("div", Ss, [d("div", Cs, [b(u(tt), {
                            percentage: 0 == m.value ? 50 : m.value,
                            indeterminate: 0 == m.value,
                            "stroke-width": 21,
                            striped: "",
                            "striped-flow": "",
                            "text-inside": !0,
                            duration: 10
                        }, {
                            default: k((({
                                percentage: t
                            }) => [d("span", ws, c(0 == m.value ? "0" : t) + "%", 1)])),
                            _: 1
                        }, 8, ["percentage", "indeterminate"])]), d("div", Ms, [d("div", As, c(null == (t = null == n ? void 0 : n.staking) ? void 0 : t.amountPurchased) + " OPZ ", 1), d("div", Ts, c(null == (e = null == n ? void 0 : n.staking) ? void 0 : e.maxAvailable) + " OPZ ", 1)])])]
                    })),
                    _: 1
                }, 8, ["content"])) : g("", !0)])]), d("div", Ps, [b(y, {
                    onClick: i[0] || (i[0] = t => u(e).push({
                        name: "staking"
                    }))
                }, {
                    default: k((() => [x(c(u(a)("stk.start-staking")), 1)])),
                    _: 1
                })])])], 2)
            }
        }
    }), [
        ["__scopeId", "data-v-b3b1719e"]
    ]),
    Os = {
        key: 0,
        class: "divider-container"
    },
    Es = {
        class: "divider"
    },
    Ds = {
        class: "avatar"
    },
    js = ["src"],
    Is = {
        class: "msg"
    },
    Bs = {
        class: "msg-inner"
    },
    Rs = e({
        __name: "ChatMsg",
        props: {
            message: {}
        },
        setup(t) {
            const e = t,
                i = y((() => {
                    const t = mt(e.message.content.time);
                    return t.isSame(mt(), "day") ? t.format("HH:mm:ss") : t.format("YYYY-MM-DD HH:mm:ss")
                }));

            function s(t) {
                const e = t.renderer.rules.link_open || function(t, e, i, s, r) {
                    return r.renderToken(t, e, i)
                };
                t.renderer.rules.link_open = function(t, i, s, r, o) {
                    return t[i].attrPush(["style", "pointer-events: none; text-decoration: none; color: inherit;"]), e(t, i, s, r, o)
                }
            }
            return y((() => ({
                plugins: [s]
            }))), (t, s) => (l(), h("li", {
                class: S(["system" === e.message.type && "divider-container", "system" !== e.message.type && e.message.sender])
            }, ["system" === e.message.type ? (l(), h("li", Os, [d("div", Es, [d("span", null, c(e.message.content.text), 1)])])) : (l(), h(w, {
                key: 1
            }, [d("div", Ds, [e.message.avatar ? (l(), h("img", {
                key: 0,
                src: e.message.avatar,
                draggable: "false",
                alt: ""
            }, null, 8, js)) : g("", !0)]), d("div", Is, [d("div", Bs, [d("p", null, [b(u(bt), {
                source: e.message.content.text,
                breaks: !0
            }, null, 8, ["source"])])]), d("time", null, c(i.value), 1)])], 64))], 2))
        }
    }),
    Ns = D("sidebar", (() => {
        const t = r("none");
        return {
            active: t,
            toggle: function(e) {
                t.value === e ? t.value = "none" : t.value = e
            },
            setActive: function(e) {
                t.value = e
            },
            close: function() {
                t.value = "none"
            }
        }
    })),
    zs = {
        key: 0,
        class: "no-messages"
    },
    Ws = {
        class: "inner-box clip2"
    },
    Hs = {
        class: "cards-wrapper"
    },
    Gs = {
        class: "flex justify-center mt-6"
    },
    Fs = {
        class: "arrowSlides",
        style: {
            position: "absolute",
            right: "0"
        }
    },
    _s = {
        key: 0,
        class: "cards-carousel"
    },
    Xs = ["tabindex", "onKeydown", "onClick"],
    Ys = q(e({
        __name: "chatAi",
        props: {
            coin: {
                default: ""
            },
            disableStaking: {
                type: Boolean,
                default: !1
            }
        },
        setup(t) {
            const e = j(),
                i = r(!1),
                o = ns(),
                n = r(null),
                f = t,
                m = at(),
                x = Ns(),
                y = I(),
                v = r(!1);
            let C;
            B((async () => {
                x.setActive("messages");
                const t = async () => {
                    try {
                        await o.loadConversations(f.coin);
                        const t = o.conversations.find((t => !t.unreadMessages));
                        t ? o.selectConversastion(t.id, f.coin) : o.conversations.length > 0 && o.selectConversastion(o.conversations[0].id, f.coin)
                    } catch (t) {
                        y.error(t.message), console.error(t)
                    }
                };
                await t(), C = setInterval((async () => {
                    console.log("Refreshing conversations and messages..."), await t()
                }), 6e4)
            }));
            const A = r(!1);
            P((() => {
                o.messages.length > 0 && !A.value && (A.value = !0, X((() => {
                    if (n.value) {
                        const t = n.value.querySelectorAll(".other");
                        if (t.length > 0) {
                            const e = t[t.length - 1].offsetTop;
                            n.value.scrollTop = e
                        }
                    }
                })))
            })), R((() => {
                C && clearInterval(C)
            })), N({
                title: f.coin + "-GPT | OPZ-AI - Your stake directly fuels BTC-GPT Processing Power, allowing it to make smart trading decisions."
            }), z((() => {
                m.setPushed("messages" === x.active)
            }));
            const T = r("1"),
                L = t => {
                    if ("4" === t) return window.open("https://www.app.opz.com"), void(T.value = "1");
                    T.value, "3" === t ? (i.value = !0, T.value = "1") : T.value = t
                },
                O = r();
            W();
            const E = r(null),
                D = s({
                    allExchanges: {},
                    offsetW: 0
                }),
                V = r(1);
            D.allExchanges = [], D.allExchanges.push({
                id: 1,
                memberId: 0,
                apiKey: "***",
                apiName: "",
                exchange: 0,
                status: 0
            }), D.allExchanges.push({
                id: 2,
                memberId: 0,
                apiKey: "***",
                apiName: "",
                exchange: 1,
                status: 0
            }), D.allExchanges.push({
                id: -1,
                memberId: 0,
                apiKey: "***",
                apiName: "",
                exchange: 7,
                status: 0
            }), (async () => {
                setTimeout((function() {
                    O.value && (E.value = St({
                        container: O.value,
                        controls: !1,
                        nav: !1,
                        mouseDrag: !0,
                        autoplayButtonOutput: !1,
                        center: !1,
                        loop: !1
                    }))
                }), 200)
            })();
            const $ = t => {
                    e.push({
                        name: "user-center-dashboard-ai"
                    })
                },
                q = t => {
                    E.value && E.value.goTo(t), V.value = t
                },
                Z = H();
            return a((() => Z.query.tradeScan), (t => {
                if ("true" === t) {
                    T.value = "2";
                    const t = new URL(window.location.href);
                    window.history.replaceState({}, "", `${t.pathname}`)
                }
            }), {
                immediate: !0
            }), a((() => Z.query.open), (t => {
                if ("true" === t) {
                    i.value = !0;
                    const t = new URL(window.location.href);
                    window.history.replaceState({}, "", `${t.pathname}`)
                }
            }), {
                immediate: !0
            }), (t, e) => {
                const s = Rs,
                    r = Ls,
                    a = yi,
                    m = li,
                    y = nt,
                    C = lt,
                    A = oi;
                return l(), h(w, null, [f.disableStaking ? g("", !0) : (l(), p(u(wt), {
                    key: 0,
                    "default-active": T.value,
                    class: "mt-0 mb-0 menu-ai-gpt",
                    style: {
                        "min-width": "400px",
                        "margin-bottom": "0px"
                    },
                    mode: "horizontal",
                    ellipsis: !1,
                    collapse: !1,
                    "text-color": "white",
                    onSelect: L
                }, {
                    default: k((() => [b(u(Ct), {
                        class: "text-medium text-menu-ai",
                        index: "1",
                        style: {
                            color: "white !important"
                        }
                    }, {
                        default: k((() => e[3] || (e[3] = [d("img", {
                            src: dt,
                            class: "icon-menu-ai",
                            width: "24"
                        }, null, -1), d("span", {
                            class: "text-ai-menu"
                        }, c("OPZ-AI"), -1)]))),
                        _: 1
                    }), b(u(Ct), {
                        class: "text-medium text-menu-ai",
                        index: "2",
                        style: {
                            color: "white !important"
                        }
                    }, {
                        default: k((() => e[4] || (e[4] = [d("img", {
                            src: ct,
                            class: "icon-menu-ai",
                            width: "24"
                        }, null, -1), d("span", {
                            class: "text-ai-menu"
                        }, c("TradeScan AI"), -1)]))),
                        _: 1
                    }), b(u(Ct), {
                        class: "text-medium text-menu-ai",
                        index: "3",
                        style: {
                            color: "white !important"
                        }
                    }, {
                        default: k((() => e[5] || (e[5] = [d("img", {
                            src: pt,
                            class: "icon-menu-ai",
                            width: "24"
                        }, null, -1), d("span", {
                            class: "text-ai-menu"
                        }, c("AutoTrade AI"), -1)]))),
                        _: 1
                    }), b(u(Ct), {
                        class: "text-medium text-menu-ai",
                        index: "4",
                        style: {
                            color: "white !important"
                        }
                    }, {
                        default: k((() => e[6] || (e[6] = [d("img", {
                            src: ut,
                            class: "icon-menu-ai",
                            width: "24"
                        }, null, -1), d("span", {
                            class: "text-ai-menu"
                        }, c("AI Dashboard"), -1)]))),
                        _: 1
                    })])),
                    _: 1
                }, 8, ["default-active"])), b(A, {
                    id: "opz-messaging",
                    class: S(["none" === u(x).active && "is-pushed-messages", "2" === T.value && "exch", t.disableStaking && "ai-trade"])
                }, {
                    default: k((() => [b(C, null, {
                        default: k((() => [b(y, {
                            class: "chat-content"
                        }, {
                            default: k((() => [b(a, {
                                loaded: v.value,
                                fadeUp: !f.disableStaking,
                                activeIndex: T.value
                            }, {
                                body: k((() => [d("ol", {
                                    id: "chat-body",
                                    class: "chat-body",
                                    ref_key: "chatBodyRef",
                                    ref: n,
                                    style: G("2" === T.value && "display: none;")
                                }, [0 === u(o).messages.length ? (l(), h("li", zs, e[7] || (e[7] = [d("img", {
                                    class: "light-image",
                                    src: ai,
                                    alt: ""
                                }, null, -1), d("img", {
                                    class: "dark-image",
                                    src: ai,
                                    alt: ""
                                }, null, -1), d("div", {
                                    class: "text"
                                }, [d("h3", null, "No messages yet"), d("p", null, "Start the conversation by typing a message")], -1)]))) : g("", !0), (l(!0), h(w, null, M(u(o).messages, (t => (l(), p(s, {
                                    key: t.id,
                                    message: t
                                }, null, 8, ["message"])))), 128)), d("li", {
                                    class: S(["chat-loader", [u(o).loading && "is-active"]])
                                }, e[8] || (e[8] = [d("div", {
                                    class: "loader is-loading"
                                }, null, -1)]), 2)], 4), d("ol", {
                                    style: G("2" != T.value && "display: none;"),
                                    class: "chat-body"
                                }, [d("div", Ws, [d("div", Hs, [d("div", Gs, [d("div", Fs, [b(u(Mt), {
                                    style: {
                                        position: "absolute",
                                        right: "12px"
                                    },
                                    icon: u(Y),
                                    size: "small",
                                    circle: "",
                                    onClick: e[0] || (e[0] = t => E.value.goTo("next"))
                                }, null, 8, ["icon"]), b(u(Mt), {
                                    style: {
                                        position: "absolute",
                                        right: "42px"
                                    },
                                    icon: u(U),
                                    size: "small",
                                    circle: "",
                                    onClick: e[1] || (e[1] = t => E.value.goTo("prev"))
                                }, null, 8, ["icon"])])]), f.disableStaking ? g("", !0) : (l(), h("div", _s, [d("div", {
                                    ref_key: "sliderElement",
                                    ref: O,
                                    class: "cards-carousel-inner flex",
                                    style: {
                                        width: "100%"
                                    }
                                }, [(l(!0), h(w, null, M(D.allExchanges, ((t, e) => (l(), h("div", {
                                    key: e,
                                    class: "cards-carousel-item",
                                    tabindex: e,
                                    onKeydown: F(_((i => {
                                        q(e), $(t.id)
                                    }), ["prevent"]), ["space"]),
                                    onClick: i => {
                                        q(e), $(t.id)
                                    }
                                }, [b(kt, {
                                    idExchange: t.id,
                                    radius: D.offsetW,
                                    apiKey: t.apiKey,
                                    name: t.apiName,
                                    exchange: t.exchange,
                                    activeExchange: V.value
                                }, null, 8, ["idExchange", "radius", "apiKey", "name", "exchange", "activeExchange"])], 40, Xs)))), 128))], 512)]))])])], 4)])),
                                side: k((() => [f.disableStaking ? g("", !0) : (l(), p(r, {
                                    key: 0,
                                    coin: f.coin
                                }, null, 8, ["coin"]))])),
                                _: 1
                            }, 8, ["loaded", "fadeUp", "activeIndex"]), b(m)])),
                            _: 1
                        })])),
                        _: 1
                    })])),
                    _: 1
                }, 8, ["class"]), b(gt, {
                    modelValue: i.value,
                    "onUpdate:modelValue": e[2] || (e[2] = t => i.value = t),
                    btn: !1
                }, null, 8, ["modelValue"])], 64)
            }
        }
    }), [
        ["__scopeId", "data-v-efe720c6"]
    ]);
export {
    Ys as C, We as D, ri as N, re as T
};