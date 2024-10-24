import {
    bb as e,
    y as t,
    h as r,
    I as i,
    N as n,
    B as o,
    o as a,
    j as s,
    bc as l
} from "./index-CQfCy4Xm.js";

function u(e) {
    return -1 !== [null, void 0, !1].indexOf(e)
}

function c(e) {
    var t = {
        exports: {}
    };
    return e(t, t.exports), t.exports
}
var p, d = c((function(e, t) {
        e.exports = function() {
            var e = ["decimals", "thousand", "mark", "prefix", "suffix", "encoder", "decoder", "negativeBefore", "negative", "edit", "undo"];

            function t(e) {
                return e.split("").reverse().join("")
            }

            function r(e, t) {
                return e.substring(0, t.length) === t
            }

            function i(e, t, r) {
                if ((e[t] || e[r]) && e[t] === e[r]) throw new Error(t)
            }

            function n(e) {
                return "number" == typeof e && isFinite(e)
            }

            function o(e, r, i, o, a, s, l, u, c, p, d, f) {
                var h, m, v, g = f,
                    b = "",
                    y = "";
                return s && (f = s(f)), !!n(f) && (!1 !== e && 0 === parseFloat(f.toFixed(e)) && (f = 0), f < 0 && (h = !0, f = Math.abs(f)), !1 !== e && (f = function(e, t) {
                    return e = e.toString().split("e"), (+((e = (e = Math.round(+(e[0] + "e" + (e[1] ? +e[1] + t : t)))).toString().split("e"))[0] + "e" + (e[1] ? +e[1] - t : -t))).toFixed(t)
                }(f, e)), -1 !== (f = f.toString()).indexOf(".") ? (v = (m = f.split("."))[0], i && (b = i + m[1])) : v = f, r && (v = t(v).match(/.{1,3}/g), v = t(v.join(t(r)))), h && u && (y += u), o && (y += o), h && c && (y += c), y += v, y += b, a && (y += a), p && (y = p(y, g)), y)
            }

            function a(e, t, i, o, a, s, l, u, c, p, d, f) {
                var h, m = "";
                return d && (f = d(f)), !(!f || "string" != typeof f) && (u && r(f, u) && (f = f.replace(u, ""), h = !0), o && r(f, o) && (f = f.replace(o, "")), c && r(f, c) && (f = f.replace(c, ""), h = !0), a && function(e, t) {
                    return e.slice(-1 * t.length) === t
                }(f, a) && (f = f.slice(0, -1 * a.length)), t && (f = f.split(t).join("")), i && (f = f.replace(i, ".")), h && (m += "-"), "" !== (m = (m += f).replace(/[^0-9\.\-.]/g, "")) && (m = Number(m), l && (m = l(m)), !!n(m) && m))
            }

            function s(t, r, i) {
                var n, o = [];
                for (n = 0; n < e.length; n += 1) o.push(t[e[n]]);
                return o.push(i), r.apply("", o)
            }
            return function t(r) {
                if (!(this instanceof t)) return new t(r);
                "object" == typeof r && (r = function(t) {
                    var r, n, o, a = {};
                    for (void 0 === t.suffix && (t.suffix = t.postfix), r = 0; r < e.length; r += 1)
                        if (void 0 === (o = t[n = e[r]])) "negative" !== n || a.negativeBefore ? "mark" === n && "." !== a.thousand ? a[n] = "." : a[n] = !1 : a[n] = "-";
                        else if ("decimals" === n) {
                        if (!(o >= 0 && o < 8)) throw new Error(n);
                        a[n] = o
                    } else if ("encoder" === n || "decoder" === n || "edit" === n || "undo" === n) {
                        if ("function" != typeof o) throw new Error(n);
                        a[n] = o
                    } else {
                        if ("string" != typeof o) throw new Error(n);
                        a[n] = o
                    }
                    return i(a, "mark", "thousand"), i(a, "prefix", "negative"), i(a, "prefix", "negativeBefore"), a
                }(r), this.to = function(e) {
                    return s(r, o, e)
                }, this.from = function(e) {
                    return s(r, a, e)
                })
            }
        }()
    })),
    f = (p = c((function(e, t) {
        ! function(e) {
            function t(e) {
                return "object" == typeof e && "function" == typeof e.to
            }

            function r(e) {
                e.parentElement.removeChild(e)
            }

            function i(e) {
                return null != e
            }

            function n(e) {
                e.preventDefault()
            }

            function o(e) {
                return "number" == typeof e && !isNaN(e) && isFinite(e)
            }

            function a(e, t, r) {
                r > 0 && (c(e, t), setTimeout((function() {
                    p(e, t)
                }), r))
            }

            function s(e) {
                return Math.max(Math.min(e, 100), 0)
            }

            function l(e) {
                return Array.isArray(e) ? e : [e]
            }

            function u(e) {
                var t = (e = String(e)).split(".");
                return t.length > 1 ? t[1].length : 0
            }

            function c(e, t) {
                e.classList && !/\s/.test(t) ? e.classList.add(t) : e.className += " " + t
            }

            function p(e, t) {
                e.classList && !/\s/.test(t) ? e.classList.remove(t) : e.className = e.className.replace(new RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)", "gi"), " ")
            }

            function d(e) {
                var t = void 0 !== window.pageXOffset,
                    r = "CSS1Compat" === (e.compatMode || "");
                return {
                    x: t ? window.pageXOffset : r ? e.documentElement.scrollLeft : e.body.scrollLeft,
                    y: t ? window.pageYOffset : r ? e.documentElement.scrollTop : e.body.scrollTop
                }
            }

            function f(e, t) {
                return 100 / (t - e)
            }

            function h(e, t, r) {
                return 100 * t / (e[r + 1] - e[r])
            }

            function m(e, t) {
                for (var r = 1; e >= t[r];) r += 1;
                return r
            }

            function v(e, t, r) {
                if (r >= e.slice(-1)[0]) return 100;
                var i = m(r, e),
                    n = e[i - 1],
                    o = e[i],
                    a = t[i - 1],
                    s = t[i];
                return a + function(e, t) {
                    return h(e, e[0] < 0 ? t + Math.abs(e[0]) : t - e[0], 0)
                }([n, o], r) / f(a, s)
            }

            function g(e, t, r, i) {
                if (100 === i) return i;
                var n = m(i, e),
                    o = e[n - 1],
                    a = e[n];
                return r ? i - o > (a - o) / 2 ? a : o : t[n - 1] ? e[n - 1] + function(e, t) {
                    return Math.round(e / t) * t
                }(i - e[n - 1], t[n - 1]) : i
            }
            var b, y;
            e.PipsMode = void 0, (y = e.PipsMode || (e.PipsMode = {})).Range = "range", y.Steps = "steps", y.Positions = "positions", y.Count = "count", y.Values = "values", e.PipsType = void 0, (b = e.PipsType || (e.PipsType = {}))[b.None = -1] = "None", b[b.NoValue = 0] = "NoValue", b[b.LargeValue = 1] = "LargeValue", b[b.SmallValue = 2] = "SmallValue";
            var S = function() {
                    function e(e, t, r) {
                        var i;
                        this.xPct = [], this.xVal = [], this.xSteps = [], this.xNumSteps = [], this.xHighestCompleteStep = [], this.xSteps = [r || !1], this.xNumSteps = [!1], this.snap = t;
                        var n = [];
                        for (Object.keys(e).forEach((function(t) {
                                n.push([l(e[t]), t])
                            })), n.sort((function(e, t) {
                                return e[0][0] - t[0][0]
                            })), i = 0; i < n.length; i++) this.handleEntryPoint(n[i][1], n[i][0]);
                        for (this.xNumSteps = this.xSteps.slice(0), i = 0; i < this.xNumSteps.length; i++) this.handleStepPoint(i, this.xNumSteps[i])
                    }
                    return e.prototype.getDistance = function(e) {
                        for (var t = [], r = 0; r < this.xNumSteps.length - 1; r++) t[r] = h(this.xVal, e, r);
                        return t
                    }, e.prototype.getAbsoluteDistance = function(e, t, r) {
                        var i, n = 0;
                        if (e < this.xPct[this.xPct.length - 1])
                            for (; e > this.xPct[n + 1];) n++;
                        else e === this.xPct[this.xPct.length - 1] && (n = this.xPct.length - 2);
                        r || e !== this.xPct[n + 1] || n++, null === t && (t = []);
                        var o = 1,
                            a = t[n],
                            s = 0,
                            l = 0,
                            u = 0,
                            c = 0;
                        for (i = r ? (e - this.xPct[n]) / (this.xPct[n + 1] - this.xPct[n]) : (this.xPct[n + 1] - e) / (this.xPct[n + 1] - this.xPct[n]); a > 0;) s = this.xPct[n + 1 + c] - this.xPct[n + c], t[n + c] * o + 100 - 100 * i > 100 ? (l = s * i, o = (a - 100 * i) / t[n + c], i = 1) : (l = t[n + c] * s / 100 * o, o = 0), r ? (u -= l, this.xPct.length + c >= 1 && c--) : (u += l, this.xPct.length - c >= 1 && c++), a = t[n + c] * o;
                        return e + u
                    }, e.prototype.toStepping = function(e) {
                        return v(this.xVal, this.xPct, e)
                    }, e.prototype.fromStepping = function(e) {
                        return function(e, t, r) {
                            if (r >= 100) return e.slice(-1)[0];
                            var i = m(r, t),
                                n = e[i - 1],
                                o = e[i],
                                a = t[i - 1];
                            return function(e, t) {
                                return t * (e[1] - e[0]) / 100 + e[0]
                            }([n, o], (r - a) * f(a, t[i]))
                        }(this.xVal, this.xPct, e)
                    }, e.prototype.getStep = function(e) {
                        return g(this.xPct, this.xSteps, this.snap, e)
                    }, e.prototype.getDefaultStep = function(e, t, r) {
                        var i = m(e, this.xPct);
                        return (100 === e || t && e === this.xPct[i - 1]) && (i = Math.max(i - 1, 1)), (this.xVal[i] - this.xVal[i - 1]) / r
                    }, e.prototype.getNearbySteps = function(e) {
                        var t = m(e, this.xPct);
                        return {
                            stepBefore: {
                                startValue: this.xVal[t - 2],
                                step: this.xNumSteps[t - 2],
                                highestStep: this.xHighestCompleteStep[t - 2]
                            },
                            thisStep: {
                                startValue: this.xVal[t - 1],
                                step: this.xNumSteps[t - 1],
                                highestStep: this.xHighestCompleteStep[t - 1]
                            },
                            stepAfter: {
                                startValue: this.xVal[t],
                                step: this.xNumSteps[t],
                                highestStep: this.xHighestCompleteStep[t]
                            }
                        }
                    }, e.prototype.countStepDecimals = function() {
                        var e = this.xNumSteps.map(u);
                        return Math.max.apply(null, e)
                    }, e.prototype.hasNoSize = function() {
                        return this.xVal[0] === this.xVal[this.xVal.length - 1]
                    }, e.prototype.convert = function(e) {
                        return this.getStep(this.toStepping(e))
                    }, e.prototype.handleEntryPoint = function(e, t) {
                        var r;
                        if (!o(r = "min" === e ? 0 : "max" === e ? 100 : parseFloat(e)) || !o(t[0])) throw new Error("noUiSlider: 'range' value isn't numeric.");
                        this.xPct.push(r), this.xVal.push(t[0]);
                        var i = Number(t[1]);
                        r ? this.xSteps.push(!isNaN(i) && i) : isNaN(i) || (this.xSteps[0] = i), this.xHighestCompleteStep.push(0)
                    }, e.prototype.handleStepPoint = function(e, t) {
                        if (t)
                            if (this.xVal[e] !== this.xVal[e + 1]) {
                                this.xSteps[e] = h([this.xVal[e], this.xVal[e + 1]], t, 0) / f(this.xPct[e], this.xPct[e + 1]);
                                var r = (this.xVal[e + 1] - this.xVal[e]) / this.xNumSteps[e],
                                    i = Math.ceil(Number(r.toFixed(3)) - 1),
                                    n = this.xVal[e] + this.xNumSteps[e] * i;
                                this.xHighestCompleteStep[e] = n
                            } else this.xSteps[e] = this.xHighestCompleteStep[e] = this.xVal[e]
                    }, e
                }(),
                x = {
                    to: function(e) {
                        return void 0 === e ? "" : e.toFixed(2)
                    },
                    from: Number
                },
                w = {
                    target: "target",
                    base: "base",
                    origin: "origin",
                    handle: "handle",
                    handleLower: "handle-lower",
                    handleUpper: "handle-upper",
                    touchArea: "touch-area",
                    horizontal: "horizontal",
                    vertical: "vertical",
                    background: "background",
                    connect: "connect",
                    connects: "connects",
                    ltr: "ltr",
                    rtl: "rtl",
                    textDirectionLtr: "txt-dir-ltr",
                    textDirectionRtl: "txt-dir-rtl",
                    draggable: "draggable",
                    drag: "state-drag",
                    tap: "state-tap",
                    active: "active",
                    tooltip: "tooltip",
                    pips: "pips",
                    pipsHorizontal: "pips-horizontal",
                    pipsVertical: "pips-vertical",
                    marker: "marker",
                    markerHorizontal: "marker-horizontal",
                    markerVertical: "marker-vertical",
                    markerNormal: "marker-normal",
                    markerLarge: "marker-large",
                    markerSub: "marker-sub",
                    value: "value",
                    valueHorizontal: "value-horizontal",
                    valueVertical: "value-vertical",
                    valueNormal: "value-normal",
                    valueLarge: "value-large",
                    valueSub: "value-sub"
                },
                E = ".__tooltips",
                P = ".__aria";

            function N(e, t) {
                if (!o(t)) throw new Error("noUiSlider: 'step' is not numeric.");
                e.singleStep = t
            }

            function C(e, t) {
                if (!o(t)) throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");
                e.keyboardPageMultiplier = t
            }

            function k(e, t) {
                if (!o(t)) throw new Error("noUiSlider: 'keyboardMultiplier' is not numeric.");
                e.keyboardMultiplier = t
            }

            function V(e, t) {
                if (!o(t)) throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");
                e.keyboardDefaultStep = t
            }

            function A(e, t) {
                if ("object" != typeof t || Array.isArray(t)) throw new Error("noUiSlider: 'range' is not an object.");
                if (void 0 === t.min || void 0 === t.max) throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");
                e.spectrum = new S(t, e.snap || !1, e.singleStep)
            }

            function M(e, t) {
                if (t = l(t), !Array.isArray(t) || !t.length) throw new Error("noUiSlider: 'start' option is incorrect.");
                e.handles = t.length, e.start = t
            }

            function L(e, t) {
                if ("boolean" != typeof t) throw new Error("noUiSlider: 'snap' option must be a boolean.");
                e.snap = t
            }

            function U(e, t) {
                if ("boolean" != typeof t) throw new Error("noUiSlider: 'animate' option must be a boolean.");
                e.animate = t
            }

            function O(e, t) {
                if ("number" != typeof t) throw new Error("noUiSlider: 'animationDuration' option must be a number.");
                e.animationDuration = t
            }

            function j(e, t) {
                var r, i = [!1];
                if ("lower" === t ? t = [!0, !1] : "upper" === t && (t = [!1, !0]), !0 === t || !1 === t) {
                    for (r = 1; r < e.handles; r++) i.push(t);
                    i.push(!1)
                } else {
                    if (!Array.isArray(t) || !t.length || t.length !== e.handles + 1) throw new Error("noUiSlider: 'connect' option doesn't match handle count.");
                    i = t
                }
                e.connect = i
            }

            function D(e, t) {
                switch (t) {
                    case "horizontal":
                        e.ort = 0;
                        break;
                    case "vertical":
                        e.ort = 1;
                        break;
                    default:
                        throw new Error("noUiSlider: 'orientation' option is invalid.")
                }
            }

            function F(e, t) {
                if (!o(t)) throw new Error("noUiSlider: 'margin' option must be numeric.");
                0 !== t && (e.margin = e.spectrum.getDistance(t))
            }

            function T(e, t) {
                if (!o(t)) throw new Error("noUiSlider: 'limit' option must be numeric.");
                if (e.limit = e.spectrum.getDistance(t), !e.limit || e.handles < 2) throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.")
            }

            function z(e, t) {
                var r;
                if (!o(t) && !Array.isArray(t)) throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");
                if (Array.isArray(t) && 2 !== t.length && !o(t[0]) && !o(t[1])) throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");
                if (0 !== t) {
                    for (Array.isArray(t) || (t = [t, t]), e.padding = [e.spectrum.getDistance(t[0]), e.spectrum.getDistance(t[1])], r = 0; r < e.spectrum.xNumSteps.length - 1; r++)
                        if (e.padding[0][r] < 0 || e.padding[1][r] < 0) throw new Error("noUiSlider: 'padding' option must be a positive number(s).");
                    var i = t[0] + t[1],
                        n = e.spectrum.xVal[0];
                    if (i / (e.spectrum.xVal[e.spectrum.xVal.length - 1] - n) > 1) throw new Error("noUiSlider: 'padding' option must not exceed 100% of the range.")
                }
            }

            function H(e, t) {
                switch (t) {
                    case "ltr":
                        e.dir = 0;
                        break;
                    case "rtl":
                        e.dir = 1;
                        break;
                    default:
                        throw new Error("noUiSlider: 'direction' option was not recognized.")
                }
            }

            function q(e, t) {
                if ("string" != typeof t) throw new Error("noUiSlider: 'behaviour' must be a string containing options.");
                var r = t.indexOf("tap") >= 0,
                    i = t.indexOf("drag") >= 0,
                    n = t.indexOf("fixed") >= 0,
                    o = t.indexOf("snap") >= 0,
                    a = t.indexOf("hover") >= 0,
                    s = t.indexOf("unconstrained") >= 0,
                    l = t.indexOf("drag-all") >= 0,
                    u = t.indexOf("smooth-steps") >= 0;
                if (n) {
                    if (2 !== e.handles) throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");
                    F(e, e.start[1] - e.start[0])
                }
                if (s && (e.margin || e.limit)) throw new Error("noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit");
                e.events = {
                    tap: r || o,
                    drag: i,
                    dragAll: l,
                    smoothSteps: u,
                    fixed: n,
                    snap: o,
                    hover: a,
                    unconstrained: s
                }
            }

            function R(e, r) {
                if (!1 !== r)
                    if (!0 === r || t(r)) {
                        e.tooltips = [];
                        for (var i = 0; i < e.handles; i++) e.tooltips.push(r)
                    } else {
                        if ((r = l(r)).length !== e.handles) throw new Error("noUiSlider: must pass a formatter for all handles.");
                        r.forEach((function(e) {
                            if ("boolean" != typeof e && !t(e)) throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.")
                        })), e.tooltips = r
                    }
            }

            function B(e, t) {
                if (t.length !== e.handles) throw new Error("noUiSlider: must pass a attributes for all handles.");
                e.handleAttributes = t
            }

            function _(e, r) {
                if (!t(r)) throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");
                e.ariaFormat = r
            }

            function $(e, r) {
                if (! function(e) {
                        return t(e) && "function" == typeof e.from
                    }(r)) throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");
                e.format = r
            }

            function X(e, t) {
                if ("boolean" != typeof t) throw new Error("noUiSlider: 'keyboardSupport' option must be a boolean.");
                e.keyboardSupport = t
            }

            function Y(e, t) {
                e.documentElement = t
            }

            function I(e, t) {
                if ("string" != typeof t && !1 !== t) throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");
                e.cssPrefix = t
            }

            function W(e, t) {
                if ("object" != typeof t) throw new Error("noUiSlider: 'cssClasses' must be an object.");
                "string" == typeof e.cssPrefix ? (e.cssClasses = {}, Object.keys(t).forEach((function(r) {
                    e.cssClasses[r] = e.cssPrefix + t[r]
                }))) : e.cssClasses = t
            }

            function G(e) {
                var t = {
                        margin: null,
                        limit: null,
                        padding: null,
                        animate: !0,
                        animationDuration: 300,
                        ariaFormat: x,
                        format: x
                    },
                    r = {
                        step: {
                            r: !1,
                            t: N
                        },
                        keyboardPageMultiplier: {
                            r: !1,
                            t: C
                        },
                        keyboardMultiplier: {
                            r: !1,
                            t: k
                        },
                        keyboardDefaultStep: {
                            r: !1,
                            t: V
                        },
                        start: {
                            r: !0,
                            t: M
                        },
                        connect: {
                            r: !0,
                            t: j
                        },
                        direction: {
                            r: !0,
                            t: H
                        },
                        snap: {
                            r: !1,
                            t: L
                        },
                        animate: {
                            r: !1,
                            t: U
                        },
                        animationDuration: {
                            r: !1,
                            t: O
                        },
                        range: {
                            r: !0,
                            t: A
                        },
                        orientation: {
                            r: !1,
                            t: D
                        },
                        margin: {
                            r: !1,
                            t: F
                        },
                        limit: {
                            r: !1,
                            t: T
                        },
                        padding: {
                            r: !1,
                            t: z
                        },
                        behaviour: {
                            r: !0,
                            t: q
                        },
                        ariaFormat: {
                            r: !1,
                            t: _
                        },
                        format: {
                            r: !1,
                            t: $
                        },
                        tooltips: {
                            r: !1,
                            t: R
                        },
                        keyboardSupport: {
                            r: !0,
                            t: X
                        },
                        documentElement: {
                            r: !1,
                            t: Y
                        },
                        cssPrefix: {
                            r: !0,
                            t: I
                        },
                        cssClasses: {
                            r: !0,
                            t: W
                        },
                        handleAttributes: {
                            r: !1,
                            t: B
                        }
                    },
                    n = {
                        connect: !1,
                        direction: "ltr",
                        behaviour: "tap",
                        orientation: "horizontal",
                        keyboardSupport: !0,
                        cssPrefix: "noUi-",
                        cssClasses: w,
                        keyboardPageMultiplier: 5,
                        keyboardMultiplier: 1,
                        keyboardDefaultStep: 10
                    };
                e.format && !e.ariaFormat && (e.ariaFormat = e.format), Object.keys(r).forEach((function(o) {
                    if (i(e[o]) || void 0 !== n[o]) r[o].t(t, i(e[o]) ? e[o] : n[o]);
                    else if (r[o].r) throw new Error("noUiSlider: '" + o + "' is required.")
                })), t.pips = e.pips;
                var o = document.createElement("div"),
                    a = void 0 !== o.style.msTransform,
                    s = void 0 !== o.style.transform;
                return t.transformRule = s ? "transform" : a ? "msTransform" : "webkitTransform", t.style = [
                    ["left", "top"],
                    ["right", "bottom"]
                ][t.dir][t.ort], t
            }

            function J(t, o, u) {
                var f, h, m, v, g, b, y = window.navigator.pointerEnabled ? {
                        start: "pointerdown",
                        move: "pointermove",
                        end: "pointerup"
                    } : window.navigator.msPointerEnabled ? {
                        start: "MSPointerDown",
                        move: "MSPointerMove",
                        end: "MSPointerUp"
                    } : {
                        start: "mousedown touchstart",
                        move: "mousemove touchmove",
                        end: "mouseup touchend"
                    },
                    S = window.CSS && CSS.supports && CSS.supports("touch-action", "none") && function() {
                        var e = !1;
                        try {
                            var t = Object.defineProperty({}, "passive", {
                                get: function() {
                                    e = !0
                                }
                            });
                            window.addEventListener("test", null, t)
                        } catch (r) {}
                        return e
                    }(),
                    x = t,
                    w = o.spectrum,
                    N = [],
                    C = [],
                    k = [],
                    V = 0,
                    A = {},
                    M = t.ownerDocument,
                    L = o.documentElement || M.documentElement,
                    U = M.body,
                    O = "rtl" === M.dir || 1 === o.ort ? 0 : 100;

                function j(e, t) {
                    var r = M.createElement("div");
                    return t && c(r, t), e.appendChild(r), r
                }

                function D(e, t) {
                    var r = j(e, o.cssClasses.origin),
                        i = j(r, o.cssClasses.handle);
                    if (j(i, o.cssClasses.touchArea), i.setAttribute("data-handle", String(t)), o.keyboardSupport && (i.setAttribute("tabindex", "0"), i.addEventListener("keydown", (function(e) {
                            return function(e, t) {
                                if (z() || H(t)) return !1;
                                var r = ["Left", "Right"],
                                    i = ["Down", "Up"],
                                    n = ["PageDown", "PageUp"],
                                    a = ["Home", "End"];
                                o.dir && !o.ort ? r.reverse() : o.ort && !o.dir && (i.reverse(), n.reverse());
                                var s, l = e.key.replace("Arrow", ""),
                                    u = l === n[0],
                                    c = l === n[1],
                                    p = l === i[0] || l === r[0] || u,
                                    d = l === i[1] || l === r[1] || c,
                                    f = l === a[0],
                                    h = l === a[1];
                                if (!(p || d || f || h)) return !0;
                                if (e.preventDefault(), d || p) {
                                    var m = p ? 0 : 1,
                                        v = ve(t)[m];
                                    if (null === v) return !1;
                                    !1 === v && (v = w.getDefaultStep(C[t], p, o.keyboardDefaultStep)), v *= c || u ? o.keyboardPageMultiplier : o.keyboardMultiplier, v = Math.max(v, 1e-7), v *= p ? -1 : 1, s = N[t] + v
                                } else s = h ? o.spectrum.xVal[o.spectrum.xVal.length - 1] : o.spectrum.xVal[0];
                                return pe(t, w.toStepping(s), !0, !0), oe("slide", t), oe("update", t), oe("change", t), oe("set", t), !1
                            }(e, t)
                        }))), void 0 !== o.handleAttributes) {
                        var n = o.handleAttributes[t];
                        Object.keys(n).forEach((function(e) {
                            i.setAttribute(e, n[e])
                        }))
                    }
                    return i.setAttribute("role", "slider"), i.setAttribute("aria-orientation", o.ort ? "vertical" : "horizontal"), 0 === t ? c(i, o.cssClasses.handleLower) : t === o.handles - 1 && c(i, o.cssClasses.handleUpper), r
                }

                function F(e, t) {
                    return !!t && j(e, o.cssClasses.connect)
                }

                function T(e, t) {
                    return !(!o.tooltips || !o.tooltips[t]) && j(e.firstChild, o.cssClasses.tooltip)
                }

                function z() {
                    return x.hasAttribute("disabled")
                }

                function H(e) {
                    return h[e].hasAttribute("disabled")
                }

                function q() {
                    g && (ne("update" + E), g.forEach((function(e) {
                        e && r(e)
                    })), g = null)
                }

                function R() {
                    q(), g = h.map(T), ie("update" + E, (function(e, t, r) {
                        if (g && o.tooltips && !1 !== g[t]) {
                            var i = e[t];
                            !0 !== o.tooltips[t] && (i = o.tooltips[t].to(r[t])), g[t].innerHTML = i
                        }
                    }))
                }

                function B(e, t) {
                    return e.map((function(e) {
                        return w.fromStepping(t ? w.getStep(e) : e)
                    }))
                }

                function _(t) {
                    function r(e, t) {
                        return Number((e + t).toFixed(7))
                    }
                    var i, n = function(t) {
                            if (t.mode === e.PipsMode.Range || t.mode === e.PipsMode.Steps) return w.xVal;
                            if (t.mode === e.PipsMode.Count) {
                                if (t.values < 2) throw new Error("noUiSlider: 'values' (>= 2) required for mode 'count'.");
                                for (var r = t.values - 1, i = 100 / r, n = []; r--;) n[r] = r * i;
                                return n.push(100), B(n, t.stepped)
                            }
                            return t.mode === e.PipsMode.Positions ? B(t.values, t.stepped) : t.mode === e.PipsMode.Values ? t.stepped ? t.values.map((function(e) {
                                return w.fromStepping(w.getStep(w.toStepping(e)))
                            })) : t.values : []
                        }(t),
                        o = {},
                        a = w.xVal[0],
                        s = w.xVal[w.xVal.length - 1],
                        l = !1,
                        u = !1,
                        c = 0;
                    return (i = n.slice().sort((function(e, t) {
                        return e - t
                    })), n = i.filter((function(e) {
                        return !this[e] && (this[e] = !0)
                    }), {}))[0] !== a && (n.unshift(a), l = !0), n[n.length - 1] !== s && (n.push(s), u = !0), n.forEach((function(i, a) {
                        var s, p, d, f, h, m, v, g, b, y, S = i,
                            x = n[a + 1],
                            E = t.mode === e.PipsMode.Steps;
                        for (E && (s = w.xNumSteps[a]), s || (s = x - S), void 0 === x && (x = S), s = Math.max(s, 1e-7), p = S; p <= x; p = r(p, s)) {
                            for (g = (h = (f = w.toStepping(p)) - c) / (t.density || 1), y = h / (b = Math.round(g)), d = 1; d <= b; d += 1) o[(m = c + d * y).toFixed(5)] = [w.fromStepping(m), 0];
                            v = n.indexOf(p) > -1 ? e.PipsType.LargeValue : E ? e.PipsType.SmallValue : e.PipsType.NoValue, !a && l && p !== x && (v = 0), p === x && u || (o[f.toFixed(5)] = [p, v]), c = f
                        }
                    })), o
                }

                function $(t, r, i) {
                    var n, a, s = M.createElement("div"),
                        l = ((n = {})[e.PipsType.None] = "", n[e.PipsType.NoValue] = o.cssClasses.valueNormal, n[e.PipsType.LargeValue] = o.cssClasses.valueLarge, n[e.PipsType.SmallValue] = o.cssClasses.valueSub, n),
                        u = ((a = {})[e.PipsType.None] = "", a[e.PipsType.NoValue] = o.cssClasses.markerNormal, a[e.PipsType.LargeValue] = o.cssClasses.markerLarge, a[e.PipsType.SmallValue] = o.cssClasses.markerSub, a),
                        p = [o.cssClasses.valueHorizontal, o.cssClasses.valueVertical],
                        d = [o.cssClasses.markerHorizontal, o.cssClasses.markerVertical];

                    function f(e, t) {
                        var r = t === o.cssClasses.value,
                            i = r ? l : u;
                        return t + " " + (r ? p : d)[o.ort] + " " + i[e]
                    }
                    return c(s, o.cssClasses.pips), c(s, 0 === o.ort ? o.cssClasses.pipsHorizontal : o.cssClasses.pipsVertical), Object.keys(t).forEach((function(n) {
                        ! function(t, n, a) {
                            if ((a = r ? r(n, a) : a) !== e.PipsType.None) {
                                var l = j(s, !1);
                                l.className = f(a, o.cssClasses.marker), l.style[o.style] = t + "%", a > e.PipsType.NoValue && ((l = j(s, !1)).className = f(a, o.cssClasses.value), l.setAttribute("data-value", String(n)), l.style[o.style] = t + "%", l.innerHTML = String(i.to(n)))
                            }
                        }(n, t[n][0], t[n][1])
                    })), s
                }

                function X() {
                    v && (r(v), v = null)
                }

                function Y(e) {
                    X();
                    var t = _(e),
                        r = e.filter,
                        i = e.format || {
                            to: function(e) {
                                return String(Math.round(e))
                            }
                        };
                    return v = x.appendChild($(t, r, i))
                }

                function I() {
                    var e = f.getBoundingClientRect(),
                        t = "offset" + ["Width", "Height"][o.ort];
                    return 0 === o.ort ? e.width || f[t] : e.height || f[t]
                }

                function W(e, t, r, i) {
                    var n = function(n) {
                            var a = function(e, t, r) {
                                var i = 0 === e.type.indexOf("touch"),
                                    n = 0 === e.type.indexOf("mouse"),
                                    o = 0 === e.type.indexOf("pointer"),
                                    a = 0,
                                    s = 0;
                                if (0 === e.type.indexOf("MSPointer") && (o = !0), "mousedown" === e.type && !e.buttons && !e.touches) return !1;
                                if (i) {
                                    var l = function(t) {
                                        var i = t.target;
                                        return i === r || r.contains(i) || e.composed && e.composedPath().shift() === r
                                    };
                                    if ("touchstart" === e.type) {
                                        var u = Array.prototype.filter.call(e.touches, l);
                                        if (u.length > 1) return !1;
                                        a = u[0].pageX, s = u[0].pageY
                                    } else {
                                        var c = Array.prototype.find.call(e.changedTouches, l);
                                        if (!c) return !1;
                                        a = c.pageX, s = c.pageY
                                    }
                                }
                                return t = t || d(M), (n || o) && (a = e.clientX + t.x, s = e.clientY + t.y), e.pageOffset = t, e.points = [a, s], e.cursor = n || o, e
                            }(n, i.pageOffset, i.target || t);
                            return !!a && !(z() && !i.doNotReject) && !(function(e, t) {
                                return e.classList ? e.classList.contains(t) : new RegExp("\\b" + t + "\\b").test(e.className)
                            }(x, o.cssClasses.tap) && !i.doNotReject) && !(e === y.start && void 0 !== a.buttons && a.buttons > 1) && (!i.hover || !a.buttons) && (S || a.preventDefault(), a.calcPoint = a.points[o.ort], void r(a, i))
                        },
                        a = [];
                    return e.split(" ").forEach((function(e) {
                        t.addEventListener(e, n, !!S && {
                            passive: !0
                        }), a.push([e, n])
                    })), a
                }

                function J(e) {
                    var t = 100 * (e - function(e, t) {
                        var r = e.getBoundingClientRect(),
                            i = e.ownerDocument,
                            n = i.documentElement,
                            o = d(i);
                        return /webkit.*Chrome.*Mobile/i.test(navigator.userAgent) && (o.x = 0), t ? r.top + o.y - n.clientTop : r.left + o.x - n.clientLeft
                    }(f, o.ort)) / I();
                    return t = s(t), o.dir ? 100 - t : t
                }

                function K(e, t) {
                    "mouseout" === e.type && "HTML" === e.target.nodeName && null === e.relatedTarget && Z(e, t)
                }

                function Q(e, t) {
                    if (-1 === navigator.appVersion.indexOf("MSIE 9") && 0 === e.buttons && 0 !== t.buttonsProperty) return Z(e, t);
                    var r = (o.dir ? -1 : 1) * (e.calcPoint - t.startCalcPoint);
                    le(r > 0, 100 * r / t.baseSize, t.locations, t.handleNumbers, t.connect)
                }

                function Z(e, t) {
                    t.handle && (p(t.handle, o.cssClasses.active), V -= 1), t.listeners.forEach((function(e) {
                        L.removeEventListener(e[0], e[1])
                    })), 0 === V && (p(x, o.cssClasses.drag), ce(), e.cursor && (U.style.cursor = "", U.removeEventListener("selectstart", n))), o.events.smoothSteps && (t.handleNumbers.forEach((function(e) {
                        pe(e, C[e], !0, !0, !1, !1)
                    })), t.handleNumbers.forEach((function(e) {
                        oe("update", e)
                    }))), t.handleNumbers.forEach((function(e) {
                        oe("change", e), oe("set", e), oe("end", e)
                    }))
                }

                function ee(e, t) {
                    if (!t.handleNumbers.some(H)) {
                        var r;
                        1 === t.handleNumbers.length && (r = h[t.handleNumbers[0]].children[0], V += 1, c(r, o.cssClasses.active)), e.stopPropagation();
                        var i = [],
                            a = W(y.move, L, Q, {
                                target: e.target,
                                handle: r,
                                connect: t.connect,
                                listeners: i,
                                startCalcPoint: e.calcPoint,
                                baseSize: I(),
                                pageOffset: e.pageOffset,
                                handleNumbers: t.handleNumbers,
                                buttonsProperty: e.buttons,
                                locations: C.slice()
                            }),
                            s = W(y.end, L, Z, {
                                target: e.target,
                                handle: r,
                                listeners: i,
                                doNotReject: !0,
                                handleNumbers: t.handleNumbers
                            }),
                            l = W("mouseout", L, K, {
                                target: e.target,
                                handle: r,
                                listeners: i,
                                doNotReject: !0,
                                handleNumbers: t.handleNumbers
                            });
                        i.push.apply(i, a.concat(s, l)), e.cursor && (U.style.cursor = getComputedStyle(e.target).cursor, h.length > 1 && c(x, o.cssClasses.drag), U.addEventListener("selectstart", n, !1)), t.handleNumbers.forEach((function(e) {
                            oe("start", e)
                        }))
                    }
                }

                function te(e) {
                    e.stopPropagation();
                    var t = J(e.calcPoint),
                        r = function(e) {
                            var t = 100,
                                r = !1;
                            return h.forEach((function(i, n) {
                                if (!H(n)) {
                                    var o = C[n],
                                        a = Math.abs(o - e);
                                    (a < t || a <= t && e > o || 100 === a && 100 === t) && (r = n, t = a)
                                }
                            })), r
                        }(t);
                    !1 !== r && (o.events.snap || a(x, o.cssClasses.tap, o.animationDuration), pe(r, t, !0, !0), ce(), oe("slide", r, !0), oe("update", r, !0), o.events.snap ? ee(e, {
                        handleNumbers: [r]
                    }) : (oe("change", r, !0), oe("set", r, !0)))
                }

                function re(e) {
                    var t = J(e.calcPoint),
                        r = w.getStep(t),
                        i = w.fromStepping(r);
                    Object.keys(A).forEach((function(e) {
                        "hover" === e.split(".")[0] && A[e].forEach((function(e) {
                            e.call(ge, i)
                        }))
                    }))
                }

                function ie(e, t) {
                    A[e] = A[e] || [], A[e].push(t), "update" === e.split(".")[0] && h.forEach((function(e, t) {
                        oe("update", t)
                    }))
                }

                function ne(e) {
                    var t = e && e.split(".")[0],
                        r = t ? e.substring(t.length) : e;
                    Object.keys(A).forEach((function(e) {
                        var i = e.split(".")[0],
                            n = e.substring(i.length);
                        t && t !== i || r && r !== n || function(e) {
                            return e === P || e === E
                        }(n) && r !== n || delete A[e]
                    }))
                }

                function oe(e, t, r) {
                    Object.keys(A).forEach((function(i) {
                        var n = i.split(".")[0];
                        e === n && A[i].forEach((function(e) {
                            e.call(ge, N.map(o.format.to), t, N.slice(), r || !1, C.slice(), ge)
                        }))
                    }))
                }

                function ae(e, t, r, i, n, a, l) {
                    var u;
                    return h.length > 1 && !o.events.unconstrained && (i && t > 0 && (u = w.getAbsoluteDistance(e[t - 1], o.margin, !1), r = Math.max(r, u)), n && t < h.length - 1 && (u = w.getAbsoluteDistance(e[t + 1], o.margin, !0), r = Math.min(r, u))), h.length > 1 && o.limit && (i && t > 0 && (u = w.getAbsoluteDistance(e[t - 1], o.limit, !1), r = Math.min(r, u)), n && t < h.length - 1 && (u = w.getAbsoluteDistance(e[t + 1], o.limit, !0), r = Math.max(r, u))), o.padding && (0 === t && (u = w.getAbsoluteDistance(0, o.padding[0], !1), r = Math.max(r, u)), t === h.length - 1 && (u = w.getAbsoluteDistance(100, o.padding[1], !0), r = Math.min(r, u))), l || (r = w.getStep(r)), !((r = s(r)) === e[t] && !a) && r
                }

                function se(e, t) {
                    var r = o.ort;
                    return (r ? t : e) + ", " + (r ? e : t)
                }

                function le(e, t, r, i, n) {
                    var a = r.slice(),
                        s = i[0],
                        l = o.events.smoothSteps,
                        u = [!e, e],
                        c = [e, !e];
                    i = i.slice(), e && i.reverse(), i.length > 1 ? i.forEach((function(e, r) {
                        var i = ae(a, e, a[e] + t, u[r], c[r], !1, l);
                        !1 === i ? t = 0 : (t = i - a[e], a[e] = i)
                    })) : u = c = [!0];
                    var p = !1;
                    i.forEach((function(e, i) {
                        p = pe(e, r[e] + t, u[i], c[i], !1, l) || p
                    })), p && (i.forEach((function(e) {
                        oe("update", e), oe("slide", e)
                    })), null != n && oe("drag", s))
                }

                function ue(e, t) {
                    return o.dir ? 100 - e - t : e
                }

                function ce() {
                    k.forEach((function(e) {
                        var t = C[e] > 50 ? -1 : 1,
                            r = 3 + (h.length + t * e);
                        h[e].style.zIndex = String(r)
                    }))
                }

                function pe(e, t, r, i, n, a) {
                    return n || (t = ae(C, e, t, r, i, !1, a)), !1 !== t && (function(e, t) {
                        C[e] = t, N[e] = w.fromStepping(t);
                        var r = "translate(" + se(ue(t, 0) - O + "%", "0") + ")";
                        h[e].style[o.transformRule] = r, de(e), de(e + 1)
                    }(e, t), !0)
                }

                function de(e) {
                    if (m[e]) {
                        var t = 0,
                            r = 100;
                        0 !== e && (t = C[e - 1]), e !== m.length - 1 && (r = C[e]);
                        var i = r - t,
                            n = "translate(" + se(ue(t, i) + "%", "0") + ")",
                            a = "scale(" + se(i / 100, "1") + ")";
                        m[e].style[o.transformRule] = n + " " + a
                    }
                }

                function fe(e, t) {
                    return null === e || !1 === e || void 0 === e ? C[t] : ("number" == typeof e && (e = String(e)), !1 !== (e = o.format.from(e)) && (e = w.toStepping(e)), !1 === e || isNaN(e) ? C[t] : e)
                }

                function he(e, t, r) {
                    var i = l(e),
                        n = void 0 === C[0];
                    t = void 0 === t || t, o.animate && !n && a(x, o.cssClasses.tap, o.animationDuration), k.forEach((function(e) {
                        pe(e, fe(i[e], e), !0, !1, r)
                    }));
                    var s = 1 === k.length ? 0 : 1;
                    if (n && w.hasNoSize() && (r = !0, C[0] = 0, k.length > 1)) {
                        var u = 100 / (k.length - 1);
                        k.forEach((function(e) {
                            C[e] = e * u
                        }))
                    }
                    for (; s < k.length; ++s) k.forEach((function(e) {
                        pe(e, C[e], !0, !0, r)
                    }));
                    ce(), k.forEach((function(e) {
                        oe("update", e), null !== i[e] && t && oe("set", e)
                    }))
                }

                function me(e) {
                    if (void 0 === e && (e = !1), e) return 1 === N.length ? N[0] : N.slice(0);
                    var t = N.map(o.format.to);
                    return 1 === t.length ? t[0] : t
                }

                function ve(e) {
                    var t = C[e],
                        r = w.getNearbySteps(t),
                        i = N[e],
                        n = r.thisStep.step,
                        a = null;
                    if (o.snap) return [i - r.stepBefore.startValue || null, r.stepAfter.startValue - i || null];
                    !1 !== n && i + n > r.stepAfter.startValue && (n = r.stepAfter.startValue - i), a = i > r.thisStep.startValue ? r.thisStep.step : !1 !== r.stepBefore.step && i - r.stepBefore.highestStep, 100 === t ? n = null : 0 === t && (a = null);
                    var s = w.countStepDecimals();
                    return null !== n && !1 !== n && (n = Number(n.toFixed(s))), null !== a && !1 !== a && (a = Number(a.toFixed(s))), [a, n]
                }
                c(b = x, o.cssClasses.target), 0 === o.dir ? c(b, o.cssClasses.ltr) : c(b, o.cssClasses.rtl), 0 === o.ort ? c(b, o.cssClasses.horizontal) : c(b, o.cssClasses.vertical), c(b, "rtl" === getComputedStyle(b).direction ? o.cssClasses.textDirectionRtl : o.cssClasses.textDirectionLtr), f = j(b, o.cssClasses.base),
                    function(e, t) {
                        var r = j(t, o.cssClasses.connects);
                        h = [], (m = []).push(F(r, e[0]));
                        for (var i = 0; i < o.handles; i++) h.push(D(t, i)), k[i] = i, m.push(F(r, e[i + 1]))
                    }(o.connect, f),
                    function(e) {
                        e.fixed || h.forEach((function(e, t) {
                            W(y.start, e.children[0], ee, {
                                handleNumbers: [t]
                            })
                        })), e.tap && W(y.start, f, te, {}), e.hover && W(y.move, f, re, {
                            hover: !0
                        }), e.drag && m.forEach((function(t, r) {
                            if (!1 !== t && 0 !== r && r !== m.length - 1) {
                                var i = h[r - 1],
                                    n = h[r],
                                    a = [t],
                                    s = [i, n],
                                    l = [r - 1, r];
                                c(t, o.cssClasses.draggable), e.fixed && (a.push(i.children[0]), a.push(n.children[0])), e.dragAll && (s = h, l = k), a.forEach((function(e) {
                                    W(y.start, e, ee, {
                                        handles: s,
                                        handleNumbers: l,
                                        connect: t
                                    })
                                }))
                            }
                        }))
                    }(o.events), he(o.start), o.pips && Y(o.pips), o.tooltips && R(), ne("update" + P), ie("update" + P, (function(e, t, r, i, n) {
                        k.forEach((function(e) {
                            var t = h[e],
                                i = ae(C, e, 0, !0, !0, !0),
                                a = ae(C, e, 100, !0, !0, !0),
                                s = n[e],
                                l = String(o.ariaFormat.to(r[e]));
                            i = w.fromStepping(i).toFixed(1), a = w.fromStepping(a).toFixed(1), s = w.fromStepping(s).toFixed(1), t.children[0].setAttribute("aria-valuemin", i), t.children[0].setAttribute("aria-valuemax", a), t.children[0].setAttribute("aria-valuenow", s), t.children[0].setAttribute("aria-valuetext", l)
                        }))
                    }));
                var ge = {
                    destroy: function() {
                        for (ne(P), ne(E), Object.keys(o.cssClasses).forEach((function(e) {
                                p(x, o.cssClasses[e])
                            })); x.firstChild;) x.removeChild(x.firstChild);
                        delete x.noUiSlider
                    },
                    steps: function() {
                        return k.map(ve)
                    },
                    on: ie,
                    off: ne,
                    get: me,
                    set: he,
                    setHandle: function(e, t, r, i) {
                        if (!((e = Number(e)) >= 0 && e < k.length)) throw new Error("noUiSlider: invalid handle number, got: " + e);
                        pe(e, fe(t, e), !0, !0, i), oe("update", e), r && oe("set", e)
                    },
                    reset: function(e) {
                        he(o.start, e)
                    },
                    __moveHandles: function(e, t, r) {
                        le(e, t, C, r)
                    },
                    options: u,
                    updateOptions: function(e, t) {
                        var r = me(),
                            n = ["margin", "limit", "padding", "range", "animate", "snap", "step", "format", "pips", "tooltips"];
                        n.forEach((function(t) {
                            void 0 !== e[t] && (u[t] = e[t])
                        }));
                        var a = G(u);
                        n.forEach((function(t) {
                            void 0 !== e[t] && (o[t] = a[t])
                        })), w = a.spectrum, o.margin = a.margin, o.limit = a.limit, o.padding = a.padding, o.pips ? Y(o.pips) : X(), o.tooltips ? R() : q(), C = [], he(i(e.start) ? e.start : r, t)
                    },
                    target: x,
                    removePips: X,
                    removeTooltips: q,
                    getPositions: function() {
                        return C.slice()
                    },
                    getTooltips: function() {
                        return g
                    },
                    getOrigins: function() {
                        return h
                    },
                    pips: Y
                };
                return ge
            }

            function K(e, t) {
                if (!e || !e.nodeName) throw new Error("noUiSlider: create requires a single element, got: " + e);
                if (e.noUiSlider) throw new Error("noUiSlider: Slider was already initialized.");
                var r = J(e, G(t), t);
                return e.noUiSlider = r, r
            }
            var Q = {
                __spectrum: S,
                cssClasses: w,
                create: K
            };
            e.create = K, e.cssClasses = w, e.default = Q, Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }(t)
    }))) && p.__esModule && Object.prototype.hasOwnProperty.call(p, "default") ? p.default : p;

function h(e, t) {
    if (!Array.isArray(e) || !Array.isArray(t)) return !1;
    const r = t.slice().sort();
    return e.length === t.length && e.slice().sort().every((function(e, t) {
        return e === r[t]
    }))
}
var m = {
    name: "Slider",
    emits: ["input", "update:modelValue", "start", "slide", "drag", "update", "change", "set", "end"],
    props: {
        value: {
            validator: function(e) {
                return e => "number" == typeof e || e instanceof Array || null == e || !1 === e
            },
            required: !1
        },
        modelValue: {
            validator: function(e) {
                return e => "number" == typeof e || e instanceof Array || null == e || !1 === e
            },
            required: !1
        },
        id: {
            type: [String, Number],
            required: !1
        },
        disabled: {
            type: Boolean,
            required: !1,
            default: !1
        },
        min: {
            type: Number,
            required: !1,
            default: 0
        },
        max: {
            type: Number,
            required: !1,
            default: 100
        },
        step: {
            type: Number,
            required: !1,
            default: 1
        },
        orientation: {
            type: String,
            required: !1,
            default: "horizontal"
        },
        direction: {
            type: String,
            required: !1,
            default: "ltr"
        },
        tooltips: {
            type: Boolean,
            required: !1,
            default: !0
        },
        options: {
            type: Object,
            required: !1,
            default: () => ({})
        },
        merge: {
            type: Number,
            required: !1,
            default: -1
        },
        format: {
            type: [Object, Function, Boolean],
            required: !1,
            default: null
        },
        classes: {
            type: Object,
            required: !1,
            default: () => ({})
        },
        showTooltip: {
            type: String,
            required: !1,
            default: "always"
        },
        tooltipPosition: {
            type: String,
            required: !1,
            default: null
        },
        lazy: {
            type: Boolean,
            required: !1,
            default: !0
        },
        ariaLabelledby: {
            type: String,
            required: !1,
            default: void 0
        },
        aria: {
            required: !1,
            type: Object,
            default: () => ({})
        }
    },
    setup(a, s) {
        const l = function(r) {
                const {
                    value: i,
                    modelValue: n,
                    min: o
                } = e(r);
                let a = n && void 0 !== n.value ? n : i;
                const s = t(a.value);
                if (u(a.value) && (a = t(o.value)), Array.isArray(a.value) && 0 == a.value.length) throw new Error("Slider v-model must not be an empty array");
                return {
                    value: a,
                    initialValue: s
                }
            }(a),
            c = function(t) {
                const {
                    classes: i,
                    showTooltip: n,
                    tooltipPosition: o,
                    orientation: a
                } = e(t), s = r((() => ({
                    target: "slider-target",
                    focused: "slider-focused",
                    tooltipFocus: "slider-tooltip-focus",
                    tooltipDrag: "slider-tooltip-drag",
                    ltr: "slider-ltr",
                    rtl: "slider-rtl",
                    horizontal: "slider-horizontal",
                    vertical: "slider-vertical",
                    textDirectionRtl: "slider-txt-dir-rtl",
                    textDirectionLtr: "slider-txt-dir-ltr",
                    base: "slider-base",
                    connects: "slider-connects",
                    connect: "slider-connect",
                    origin: "slider-origin",
                    handle: "slider-handle",
                    handleLower: "slider-handle-lower",
                    handleUpper: "slider-handle-upper",
                    touchArea: "slider-touch-area",
                    tooltip: "slider-tooltip",
                    tooltipTop: "slider-tooltip-top",
                    tooltipBottom: "slider-tooltip-bottom",
                    tooltipLeft: "slider-tooltip-left",
                    tooltipRight: "slider-tooltip-right",
                    tooltipHidden: "slider-tooltip-hidden",
                    active: "slider-active",
                    draggable: "slider-draggable",
                    tap: "slider-state-tap",
                    drag: "slider-state-drag",
                    pips: "slider-pips",
                    pipsHorizontal: "slider-pips-horizontal",
                    pipsVertical: "slider-pips-vertical",
                    marker: "slider-marker",
                    markerHorizontal: "slider-marker-horizontal",
                    markerVertical: "slider-marker-vertical",
                    markerNormal: "slider-marker-normal",
                    markerLarge: "slider-marker-large",
                    markerSub: "slider-marker-sub",
                    value: "slider-value",
                    valueHorizontal: "slider-value-horizontal",
                    valueVertical: "slider-value-vertical",
                    valueNormal: "slider-value-normal",
                    valueLarge: "slider-value-large",
                    valueSub: "slider-value-sub",
                    ...i.value
                })));
                return {
                    classList: r((() => {
                        const e = { ...s.value
                        };
                        return Object.keys(e).forEach((t => {
                            e[t] = Array.isArray(e[t]) ? e[t].filter((e => null !== e)).join(" ") : e[t]
                        })), "always" !== n.value && (e.target += ` ${"drag"===n.value?e.tooltipDrag:e.tooltipFocus}`), "horizontal" === a.value && (e.tooltip += "bottom" === o.value ? ` ${e.tooltipBottom}` : ` ${e.tooltipTop}`), "vertical" === a.value && (e.tooltip += "right" === o.value ? ` ${e.tooltipRight}` : ` ${e.tooltipLeft}`), e
                    }))
                }
            }(a),
            p = function(t, i, n) {
                const {
                    format: o,
                    step: a
                } = e(t), s = n.value, l = n.classList, u = r((() => o && o.value ? "function" == typeof o.value ? {
                    to: o.value
                } : d({ ...o.value
                }) : d({
                    decimals: a.value >= 0 ? 0 : 2
                }))), c = r((() => Array.isArray(s.value) ? s.value.map((e => u.value)) : u.value));
                return {
                    tooltipFormat: u,
                    tooltipsFormat: c,
                    tooltipsMerge: (e, t, r) => {
                        var i = "rtl" === getComputedStyle(e).direction,
                            n = "rtl" === e.noUiSlider.options.direction,
                            o = "vertical" === e.noUiSlider.options.orientation,
                            a = e.noUiSlider.getTooltips(),
                            s = e.noUiSlider.getOrigins();
                        a.forEach((function(e, t) {
                            e && s[t].appendChild(e)
                        })), e.noUiSlider.on("update", (function(e, s, c, p, d) {
                            var f = [
                                    []
                                ],
                                h = [
                                    []
                                ],
                                m = [
                                    []
                                ],
                                v = 0;
                            a[0] && (f[0][0] = 0, h[0][0] = d[0], m[0][0] = u.value.to(parseFloat(e[0])));
                            for (var g = 1; g < e.length; g++)(!a[g] || e[g] - e[g - 1] > t) && (f[++v] = [], m[v] = [], h[v] = []), a[g] && (f[v].push(g), m[v].push(u.value.to(parseFloat(e[g]))), h[v].push(d[g]));
                            f.forEach((function(e, t) {
                                for (var s = e.length, u = 0; u < s; u++) {
                                    var c = e[u];
                                    if (u === s - 1) {
                                        var p = 0;
                                        h[t].forEach((function(e) {
                                            p += 1e3 - e
                                        }));
                                        var d = o ? "bottom" : "right",
                                            f = n ? 0 : s - 1,
                                            v = 1e3 - h[t][f];
                                        p = (i && !o ? 100 : 0) + p / s - v, a[c].innerHTML = m[t].join(r), a[c].style.display = "block", a[c].style[d] = p + "%", l.value.tooltipHidden.split(" ").forEach((e => {
                                            a[c].classList.contains(e) && a[c].classList.remove(e)
                                        }))
                                    } else a[c].style.display = "none", l.value.tooltipHidden.split(" ").forEach((e => {
                                        a[c].classList.add(e)
                                    }))
                                }
                            }))
                        }))
                    }
                }
            }(a, 0, {
                value: l.value,
                classList: c.classList
            }),
            m = function(a, s, l) {
                const {
                    orientation: c,
                    direction: p,
                    tooltips: d,
                    step: m,
                    min: v,
                    max: g,
                    merge: b,
                    id: y,
                    disabled: S,
                    options: x,
                    classes: w,
                    format: E,
                    lazy: P,
                    ariaLabelledby: N,
                    aria: C
                } = e(a), k = l.value, V = l.initialValue, A = l.tooltipsFormat, M = l.tooltipsMerge, L = l.tooltipFormat, U = l.classList, O = t(null), j = t(null), D = t(!1), F = r((() => {
                    let e = {
                        cssPrefix: "",
                        cssClasses: U.value,
                        orientation: c.value,
                        direction: p.value,
                        tooltips: !!d.value && A.value,
                        connect: "lower",
                        start: u(k.value) ? v.value : k.value,
                        range: {
                            min: v.value,
                            max: g.value
                        }
                    };
                    if (m.value > 0 && (e.step = m.value), Array.isArray(k.value) && (e.connect = !0), N && N.value || C && Object.keys(C.value).length) {
                        let t = Array.isArray(k.value) ? k.value : [k.value];
                        e.handleAttributes = t.map((e => Object.assign({}, C.value, N && N.value ? {
                            "aria-labelledby": N.value
                        } : {})))
                    }
                    return E.value && (e.ariaFormat = L.value), e
                })), T = r((() => {
                    let e = {
                        id: y && y.value ? y.value : void 0
                    };
                    return S.value && (e.disabled = !0), e
                })), z = r((() => Array.isArray(k.value))), H = () => {
                    let e = j.value.get();
                    return Array.isArray(e) ? e.map((e => parseFloat(e))) : parseFloat(e)
                }, q = function(e) {
                    let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    j.value.set(e, t)
                }, R = e => {
                    s.emit("input", e), s.emit("update:modelValue", e), s.emit("update", e)
                }, B = () => {
                    j.value = f.create(O.value, Object.assign({}, F.value, x.value)), d.value && z.value && b.value >= 0 && M(O.value, b.value, " - "), j.value.on("set", (() => {
                        const e = H();
                        s.emit("change", e), s.emit("set", e), P.value && R(e)
                    })), j.value.on("update", (() => {
                        if (!D.value) return;
                        const e = H();
                        z.value && h(k.value, e) || !z.value && k.value == e ? s.emit("update", e) : P.value || R(e)
                    })), j.value.on("start", (() => {
                        s.emit("start", H())
                    })), j.value.on("end", (() => {
                        s.emit("end", H())
                    })), j.value.on("slide", (() => {
                        s.emit("slide", H())
                    })), j.value.on("drag", (() => {
                        s.emit("drag", H())
                    })), O.value.querySelectorAll("[data-handle]").forEach((e => {
                        e.onblur = () => {
                            O.value && U.value.focused.split(" ").forEach((e => {
                                O.value.classList.remove(e)
                            }))
                        }, e.onfocus = () => {
                            U.value.focused.split(" ").forEach((e => {
                                O.value.classList.add(e)
                            }))
                        }
                    })), D.value = !0
                }, _ = () => {
                    j.value.off(), j.value.destroy(), j.value = null
                }, $ = (e, t) => {
                    D.value = !1, _(), B()
                };
                return i(B), n(_), o(z, $, {
                    immediate: !1
                }), o(v, $, {
                    immediate: !1
                }), o(g, $, {
                    immediate: !1
                }), o(m, $, {
                    immediate: !1
                }), o(c, $, {
                    immediate: !1
                }), o(p, $, {
                    immediate: !1
                }), o(d, $, {
                    immediate: !1
                }), o(b, $, {
                    immediate: !1
                }), o(E, $, {
                    immediate: !1,
                    deep: !0
                }), o(x, $, {
                    immediate: !1,
                    deep: !0
                }), o(w, $, {
                    immediate: !1,
                    deep: !0
                }), o(k, ((e, t) => {
                    t && ("object" == typeof t && "object" == typeof e && e && Object.keys(t) > Object.keys(e) || "object" == typeof t && "object" != typeof e || u(e)) && $()
                }), {
                    immediate: !1
                }), o(k, (e => {
                    if (u(e)) return void q(v.value, !1);
                    let t = H();
                    z.value && !Array.isArray(t) && (t = [t]), (z.value && !h(e, t) || !z.value && e != t) && q(e, !1)
                }), {
                    deep: !0
                }), {
                    slider: O,
                    slider$: j,
                    isRange: z,
                    sliderProps: T,
                    init: B,
                    destroy: _,
                    refresh: $,
                    update: q,
                    reset: () => {
                        R(V.value)
                    }
                }
            }(a, s, {
                value: l.value,
                initialValue: l.initialValue,
                tooltipFormat: p.tooltipFormat,
                tooltipsFormat: p.tooltipsFormat,
                tooltipsMerge: p.tooltipsMerge,
                classList: c.classList
            });
        return { ...c,
            ...p,
            ...m
        }
    },
    render: function(e, t, r, i, n, o) {
        return a(), s("div", l(e.sliderProps, {
            ref: "slider"
        }), null, 16)
    },
    __file: "src/Slider.vue"
};
export {
    m as
    default
};