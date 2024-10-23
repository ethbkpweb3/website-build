import {
    ds as e,
    Q as l,
    h as t,
    B as n,
    M as o,
    F as a,
    y as r,
    dy as s,
    dw as i,
    cR as u,
    m as d,
    W as c,
    be as p,
    o as h,
    n as v,
    w as f,
    l as m,
    p as g,
    X as b,
    dg as y,
    j as w,
    cd as x,
    dj as C,
    d4 as S,
    r as k,
    P as E,
    q as N,
    t as R,
    s as L,
    cE as O,
    ck as F,
    L as A,
    bb as W,
    dx as H,
    v as T,
    cA as M,
    cC as B,
    cD as $,
    cB as V,
    cl as I,
    I as z,
    cs as K,
    N as D,
    i as P,
    z as j,
    d9 as _,
    bk as Y,
    C as U
} from "./index-jdACH0Rc.js";
import {
    r as G,
    F as X,
    N as q,
    R as Q,
    O as Z,
    w as J,
    i as ee,
    U as le,
    g as te,
    b as ne,
    z as oe,
    d as ae,
    f as re,
    a as se,
    x as ie,
    n as ue,
    E as de,
    u as ce,
    p as pe
} from "./index-D4R9Vjdp.js";
import {
    U as he,
    W as ve,
    X as fe,
    o as me,
    Y as ge,
    Z as be,
    r as ye,
    i as we,
    G as xe,
    _ as Ce,
    $ as Se,
    L as ke,
    a0 as Ee,
    j as Ne,
    k as Re,
    a1 as Le,
    t as Oe,
    E as Fe,
    A as Ae,
    N as We,
    m as He
} from "./index-Citk0ABi.js";
import {
    f as Te,
    i as Me,
    e as Be,
    p as $e,
    G as Ve,
    _ as Ie,
    b as ze,
    d as Ke,
    w as De,
    F as Pe,
    E as je,
    O as _e,
    U as Ye,
    o as Ue,
    s as Ge,
    m as Xe,
    r as qe,
    I as Qe,
    l as Ze
} from "./index-Dwv4qbXN.js";
import {
    c as Je,
    k as el,
    d as ll,
    e as tl,
    b as nl,
    i as ol
} from "./_initCloneObject-CyvZF8uk.js";
import {
    i as al
} from "./isPlainObject--3V5F7Ei.js";
var rl = function(e, l, t) {
    for (var n = -1, o = Object(e), a = t(e), r = a.length; r--;) {
        var s = a[++n];
        if (!1 === l(o[s], s, o)) break
    }
    return e
};
var sl, il = (sl = function(e, l) {
    return e && rl(e, l, X)
}, function(e, l) {
    if (null == e) return e;
    if (!G(e)) return sl(e, l);
    for (var t = e.length, n = -1, o = Object(e); ++n < t && !1 !== l(o[n], n, o););
    return e
});

function ul(e, l, t) {
    (void 0 !== t && !be(e[l], t) || void 0 === t && !(l in e)) && ye(e, l, t)
}

function dl(e, l) {
    if (("constructor" !== l || "function" != typeof e[l]) && "__proto__" != l) return e[l]
}

function cl(e, l, t, n, o, a, r) {
    var s = dl(e, t),
        i = dl(l, t),
        u = r.get(i);
    if (u) ul(e, t, u);
    else {
        var d, c = a ? a(s, i, t + "", e, l, r) : void 0,
            p = void 0 === c;
        if (p) {
            var h = xe(i),
                v = !h && q(i),
                f = !h && !v && Q(i);
            c = i, h || v || f ? xe(s) ? c = s : we(d = s) && G(d) ? c = ll(s) : v ? (p = !1, c = tl(i, !0)) : f ? (p = !1, c = nl(i, !0)) : c = [] : al(i) || Ce(i) ? (c = s, Ce(s) ? c = function(e) {
                return Je(e, el(e))
            }(s) : me(s) && !Se(s) || (c = ol(i))) : p = !1
        }
        p && (r.set(i, c), o(c, i, n, a, r), r.delete(i)), ul(e, t, c)
    }
}

function pl(e, l, t, n, o) {
    e !== l && rl(l, (function(a, r) {
        if (o || (o = new Z), me(a)) cl(e, l, r, t, pl, n, o);
        else {
            var s = n ? n(dl(e, r), a, r + "", e, l, o) : void 0;
            void 0 === s && (s = a), ul(e, r, s)
        }
    }), el)
}

function hl(e, l) {
    var t = -1,
        n = G(e) ? Array(e.length) : [];
    return il(e, (function(e, o, a) {
        n[++t] = l(e, o, a)
    })), n
}

function vl(e, l) {
    return Ee(function(e, l) {
        return (xe(e) ? ke : hl)(e, J(l))
    }(e, l))
}
var fl, ml, gl, bl = (fl = function(e, l, t) {
    pl(e, l, t)
}, he(ve(ml = function(e, l) {
    var t = -1,
        n = l.length,
        o = n > 1 ? l[n - 1] : void 0,
        a = n > 2 ? l[2] : void 0;
    for (o = fl.length > 3 && "function" == typeof o ? (n--, o) : void 0, a && function(e, l, t) {
            if (!me(t)) return !1;
            var n = typeof l;
            return !!("number" == n ? G(t) && ge(l, t.length) : "string" == n && l in t) && be(t[l], e)
        }(l[0], l[1], a) && (o = n < 3 ? void 0 : o, n = 1), e = Object(e); ++t < n;) {
        var r = l[t];
        r && fl(e, r, t, o)
    }
    return e
}, gl, fe), ml + ""));
var yl, wl, xl, Cl, Sl, kl, El, Nl, Rl, Ll, Ol, Fl, Al, Wl, Hl, Tl = !1;

function Ml() {
    if (!Tl) {
        Tl = !0;
        var e = navigator.userAgent,
            l = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(e),
            t = /(Mac OS X)|(Windows)|(Linux)/.exec(e);
        if (Fl = /\b(iPhone|iP[ao]d)/.exec(e), Al = /\b(iP[ao]d)/.exec(e), Ll = /Android/i.exec(e), Wl = /FBAN\/\w+;/i.exec(e), Hl = /Mobile/i.exec(e), Ol = !!/Win64/.exec(e), l) {
            (yl = l[1] ? parseFloat(l[1]) : l[5] ? parseFloat(l[5]) : NaN) && document && document.documentMode && (yl = document.documentMode);
            var n = /(?:Trident\/(\d+.\d+))/.exec(e);
            kl = n ? parseFloat(n[1]) + 4 : yl, wl = l[2] ? parseFloat(l[2]) : NaN, xl = l[3] ? parseFloat(l[3]) : NaN, (Cl = l[4] ? parseFloat(l[4]) : NaN) ? (l = /(?:Chrome\/(\d+\.\d+))/.exec(e), Sl = l && l[1] ? parseFloat(l[1]) : NaN) : Sl = NaN
        } else yl = wl = xl = Sl = Cl = NaN;
        if (t) {
            if (t[1]) {
                var o = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(e);
                El = !o || parseFloat(o[1].replace("_", "."))
            } else El = !1;
            Nl = !!t[2], Rl = !!t[3]
        } else El = Nl = Rl = !1
    }
}
var Bl, $l = {
        ie: function() {
            return Ml() || yl
        },
        ieCompatibilityMode: function() {
            return Ml() || kl > yl
        },
        ie64: function() {
            return $l.ie() && Ol
        },
        firefox: function() {
            return Ml() || wl
        },
        opera: function() {
            return Ml() || xl
        },
        webkit: function() {
            return Ml() || Cl
        },
        safari: function() {
            return $l.webkit()
        },
        chrome: function() {
            return Ml() || Sl
        },
        windows: function() {
            return Ml() || Nl
        },
        osx: function() {
            return Ml() || El
        },
        linux: function() {
            return Ml() || Rl
        },
        iphone: function() {
            return Ml() || Fl
        },
        mobile: function() {
            return Ml() || Fl || Al || Ll || Hl
        },
        nativeApp: function() {
            return Ml() || Wl
        },
        android: function() {
            return Ml() || Ll
        },
        ipad: function() {
            return Ml() || Al
        }
    },
    Vl = $l,
    Il = !!(typeof window < "u" && window.document && window.document.createElement),
    zl = {
        canUseDOM: Il,
        canUseWorkers: typeof Worker < "u",
        canUseEventListeners: Il && !(!window.addEventListener && !window.attachEvent),
        canUseViewport: Il && !!window.screen,
        isInWorker: !Il
    };
zl.canUseDOM && (Bl = document.implementation && document.implementation.hasFeature && !0 !== document.implementation.hasFeature("", ""));
var Kl = function(e, l) {
    if (!zl.canUseDOM || l && !("addEventListener" in document)) return !1;
    var t = "on" + e,
        n = t in document;
    if (!n) {
        var o = document.createElement("div");
        o.setAttribute(t, "return;"), n = "function" == typeof o[t]
    }
    return !n && Bl && "wheel" === e && (n = document.implementation.hasFeature("Events.wheel", "3.0")), n
};

function Dl(e) {
    var l = 0,
        t = 0,
        n = 0,
        o = 0;
    return "detail" in e && (t = e.detail), "wheelDelta" in e && (t = -e.wheelDelta / 120), "wheelDeltaY" in e && (t = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (l = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (l = t, t = 0), n = 10 * l, o = 10 * t, "deltaY" in e && (o = e.deltaY), "deltaX" in e && (n = e.deltaX), (n || o) && e.deltaMode && (1 == e.deltaMode ? (n *= 40, o *= 40) : (n *= 800, o *= 800)), n && !l && (l = n < 1 ? -1 : 1), o && !t && (t = o < 1 ? -1 : 1), {
        spinX: l,
        spinY: t,
        pixelX: n,
        pixelY: o
    }
}
Dl.getEventType = function() {
    return Vl.firefox() ? "DOMMouseScroll" : Kl("wheel") ? "wheel" : "mousewheel"
};
var Pl = Dl;
/**
 * Checks if an event is supported in the current execution environment.
 *
 * NOTE: This will not work correctly for non-generic events such as `change`,
 * `reset`, `load`, `error`, and `select`.
 *
 * Borrows from Modernizr.
 *
 * @param {string} eventNameSuffix Event name, e.g. "click".
 * @param {?boolean} capture Check if the capture phase is supported.
 * @return {boolean} True if the event is supported.
 * @internal
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */
const jl = {
        beforeMount(e, l) {
            ! function(e, l) {
                if (e && e.addEventListener) {
                    const t = function(e) {
                        const t = Pl(e);
                        l && Reflect.apply(l, this, [e, t])
                    };
                    e.addEventListener("wheel", t, {
                        passive: !0
                    })
                }
            }(e, l.value)
        }
    },
    _l = {
        modelValue: {
            type: [Number, String, Boolean],
            default: void 0
        },
        label: {
            type: [String, Boolean, Number, Object],
            default: void 0
        },
        value: {
            type: [String, Boolean, Number, Object],
            default: void 0
        },
        indeterminate: Boolean,
        disabled: Boolean,
        checked: Boolean,
        name: {
            type: String,
            default: void 0
        },
        trueValue: {
            type: [String, Number],
            default: void 0
        },
        falseValue: {
            type: [String, Number],
            default: void 0
        },
        trueLabel: {
            type: [String, Number],
            default: void 0
        },
        falseLabel: {
            type: [String, Number],
            default: void 0
        },
        id: {
            type: String,
            default: void 0
        },
        border: Boolean,
        size: ee,
        tabindex: [String, Number],
        validateEvent: {
            type: Boolean,
            default: !0
        },
        ...Ne(["ariaControls"])
    },
    Yl = {
        [le]: l => e(l) || Me(l) || Be(l),
        change: l => e(l) || Me(l) || Be(l)
    },
    Ul = Symbol("checkboxGroupContextKey"),
    Gl = (e, {
        model: r,
        isLimitExceeded: s,
        hasOwnLabel: i,
        isDisabled: u,
        isLabeledByFormItem: d
    }) => {
        const c = l(Ul, void 0),
            {
                formItem: p
            } = ne(),
            {
                emit: h
            } = a();

        function v(l) {
            var t, n, o, a;
            return [!0, e.trueValue, e.trueLabel].includes(l) ? null == (n = null != (t = e.trueValue) ? t : e.trueLabel) || n : null != (a = null != (o = e.falseValue) ? o : e.falseLabel) && a
        }
        const f = t((() => (null == c ? void 0 : c.validateEvent) || e.validateEvent));
        return n((() => e.modelValue), (() => {
            f.value && (null == p || p.validate("change").catch((e => Re())))
        })), {
            handleChange: function(e) {
                if (s.value) return;
                const l = e.target;
                h("change", v(l.checked), e)
            },
            onClickRoot: async function(l) {
                if (!s.value && !i.value && !u.value && d.value) {
                    l.composedPath().some((e => "LABEL" === e.tagName)) || (r.value = v([!1, e.falseValue, e.falseLabel].includes(r.value)), await o(), function(e, l) {
                        h("change", v(e), l)
                    }(r.value, l))
                }
            }
        }
    },
    Xl = (e, n) => {
        const {
            formItem: o
        } = ne(), {
            model: d,
            isGroup: c,
            isLimitExceeded: p
        } = (e => {
            const n = r(!1),
                {
                    emit: o
                } = a(),
                i = l(Ul, void 0),
                u = t((() => !1 === $e(i))),
                d = r(!1),
                c = t({
                    get() {
                        var l, t;
                        return u.value ? null == (l = null == i ? void 0 : i.modelValue) ? void 0 : l.value : null != (t = e.modelValue) ? t : n.value
                    },
                    set(e) {
                        var l, t;
                        u.value && s(e) ? (d.value = void 0 !== (null == (l = null == i ? void 0 : i.max) ? void 0 : l.value) && e.length > (null == i ? void 0 : i.max.value) && e.length > c.value.length, !1 === d.value && (null == (t = null == i ? void 0 : i.changeEvent) || t.call(i, e))) : (o(le, e), n.value = e)
                    }
                });
            return {
                model: c,
                isGroup: u,
                isLimitExceeded: d
            }
        })(e), {
            isFocused: h,
            isChecked: v,
            checkboxButtonSize: f,
            checkboxSize: m,
            hasOwnLabel: g,
            actualValue: b
        } = ((e, n, {
            model: o
        }) => {
            const a = l(Ul, void 0),
                d = r(!1),
                c = t((() => Ve(e.value) ? e.label : e.value)),
                p = t((() => {
                    const l = o.value;
                    return Be(l) ? l : s(l) ? i(c.value) ? l.map(u).some((e => oe(e, c.value))) : l.map(u).includes(c.value) : null != l ? l === e.trueValue || l === e.trueLabel : !!l
                }));
            return {
                checkboxButtonSize: ae(t((() => {
                    var e;
                    return null == (e = null == a ? void 0 : a.size) ? void 0 : e.value
                })), {
                    prop: !0
                }),
                isChecked: p,
                isFocused: d,
                checkboxSize: ae(t((() => {
                    var e;
                    return null == (e = null == a ? void 0 : a.size) ? void 0 : e.value
                }))),
                hasOwnLabel: t((() => !!n.default || !Ve(c.value))),
                actualValue: c
            }
        })(e, n, {
            model: d
        }), {
            isDisabled: y
        } = (({
            model: e,
            isChecked: n
        }) => {
            const o = l(Ul, void 0),
                a = t((() => {
                    var l, t;
                    const a = null == (l = null == o ? void 0 : o.max) ? void 0 : l.value,
                        r = null == (t = null == o ? void 0 : o.min) ? void 0 : t.value;
                    return !$e(a) && e.value.length >= a && !n.value || !$e(r) && e.value.length <= r && n.value
                }));
            return {
                isDisabled: te(t((() => (null == o ? void 0 : o.disabled.value) || a.value))),
                isLimitDisabled: a
            }
        })({
            model: d,
            isChecked: v
        }), {
            inputId: w,
            isLabeledByFormItem: x
        } = re(e, {
            formItemContext: o,
            disableIdGeneration: g,
            disableIdManagement: c
        }), {
            handleChange: C,
            onClickRoot: S
        } = Gl(e, {
            model: d,
            isLimitExceeded: p,
            hasOwnLabel: g,
            isDisabled: y,
            isLabeledByFormItem: x
        });
        var k, E;
        return e.checked && (s(d.value) && !d.value.includes(b.value) ? d.value.push(b.value) : d.value = null == (E = null != (k = e.trueValue) ? k : e.trueLabel) || E), se({
            from: "label act as value",
            replacement: "value",
            version: "3.0.0",
            scope: "el-checkbox",
            ref: "https://element-plus.org/en-US/component/checkbox.html"
        }, t((() => c.value && Ve(e.value)))), se({
            from: "true-label",
            replacement: "true-value",
            version: "3.0.0",
            scope: "el-checkbox",
            ref: "https://element-plus.org/en-US/component/checkbox.html"
        }, t((() => !!e.trueLabel))), se({
            from: "false-label",
            replacement: "false-value",
            version: "3.0.0",
            scope: "el-checkbox",
            ref: "https://element-plus.org/en-US/component/checkbox.html"
        }, t((() => !!e.falseLabel))), {
            inputId: w,
            isLabeledByFormItem: x,
            isChecked: v,
            isDisabled: y,
            isFocused: h,
            checkboxButtonSize: f,
            checkboxSize: m,
            hasOwnLabel: g,
            model: d,
            actualValue: b,
            handleChange: C,
            onClickRoot: S
        }
    },
    ql = d({
        name: "ElCheckbox"
    });
var Ql = Ie(d({ ...ql,
    props: _l,
    emits: Yl,
    setup(e) {
        const l = e,
            n = c(),
            {
                inputId: o,
                isLabeledByFormItem: a,
                isChecked: r,
                isDisabled: s,
                isFocused: i,
                checkboxSize: u,
                hasOwnLabel: d,
                model: F,
                actualValue: A,
                handleChange: W,
                onClickRoot: H
            } = Xl(l, n),
            T = p("checkbox"),
            M = t((() => [T.b(), T.m(u.value), T.is("disabled", s.value), T.is("bordered", l.border), T.is("checked", r.value)])),
            B = t((() => [T.e("input"), T.is("disabled", s.value), T.is("checked", r.value), T.is("indeterminate", l.indeterminate), T.is("focus", i.value)]));
        return (e, l) => (h(), v(O(!b(d) && b(a) ? "span" : "label"), {
            class: g(b(M)),
            "aria-controls": e.indeterminate ? e.ariaControls : null,
            onClick: b(H)
        }, {
            default: f((() => {
                var l, t, n, a;
                return [m("span", {
                    class: g(b(B))
                }, [e.trueValue || e.falseValue || e.trueLabel || e.falseLabel ? y((h(), w("input", {
                    key: 0,
                    id: b(o),
                    "onUpdate:modelValue": e => x(F) ? F.value = e : null,
                    class: g(b(T).e("original")),
                    type: "checkbox",
                    indeterminate: e.indeterminate,
                    name: e.name,
                    tabindex: e.tabindex,
                    disabled: b(s),
                    "true-value": null == (t = null != (l = e.trueValue) ? l : e.trueLabel) || t,
                    "false-value": null != (a = null != (n = e.falseValue) ? n : e.falseLabel) && a,
                    onChange: b(W),
                    onFocus: e => i.value = !0,
                    onBlur: e => i.value = !1,
                    onClick: C((() => {}), ["stop"])
                }, null, 42, ["id", "onUpdate:modelValue", "indeterminate", "name", "tabindex", "disabled", "true-value", "false-value", "onChange", "onFocus", "onBlur", "onClick"])), [
                    [S, b(F)]
                ]) : y((h(), w("input", {
                    key: 1,
                    id: b(o),
                    "onUpdate:modelValue": e => x(F) ? F.value = e : null,
                    class: g(b(T).e("original")),
                    type: "checkbox",
                    indeterminate: e.indeterminate,
                    disabled: b(s),
                    value: b(A),
                    name: e.name,
                    tabindex: e.tabindex,
                    onChange: b(W),
                    onFocus: e => i.value = !0,
                    onBlur: e => i.value = !1,
                    onClick: C((() => {}), ["stop"])
                }, null, 42, ["id", "onUpdate:modelValue", "indeterminate", "disabled", "value", "name", "tabindex", "onChange", "onFocus", "onBlur", "onClick"])), [
                    [S, b(F)]
                ]), m("span", {
                    class: g(b(T).e("inner"))
                }, null, 2)], 2), b(d) ? (h(), w("span", {
                    key: 0,
                    class: g(b(T).e("label"))
                }, [k(e.$slots, "default"), e.$slots.default ? L("v-if", !0) : (h(), w(E, {
                    key: 0
                }, [N(R(e.label), 1)], 64))], 2)) : L("v-if", !0)]
            })),
            _: 3
        }, 8, ["class", "aria-controls", "onClick"]))
    }
}), [
    ["__file", "checkbox.vue"]
]);
const Zl = d({
    name: "ElCheckboxButton"
});
var Jl = Ie(d({ ...Zl,
    props: _l,
    emits: Yl,
    setup(e) {
        const n = e,
            o = c(),
            {
                isFocused: a,
                isChecked: r,
                isDisabled: s,
                checkboxButtonSize: i,
                model: u,
                actualValue: d,
                handleChange: v
            } = Xl(n, o),
            f = l(Ul, void 0),
            m = p("checkbox"),
            E = t((() => {
                var e, l, t, n;
                const o = null != (l = null == (e = null == f ? void 0 : f.fill) ? void 0 : e.value) ? l : "";
                return {
                    backgroundColor: o,
                    borderColor: o,
                    color: null != (n = null == (t = null == f ? void 0 : f.textColor) ? void 0 : t.value) ? n : "",
                    boxShadow: o ? `-1px 0 0 0 ${o}` : void 0
                }
            })),
            O = t((() => [m.b("button"), m.bm("button", i.value), m.is("disabled", s.value), m.is("checked", r.value), m.is("focus", a.value)]));
        return (e, l) => {
            var t, n, o, i;
            return h(), w("label", {
                class: g(b(O))
            }, [e.trueValue || e.falseValue || e.trueLabel || e.falseLabel ? y((h(), w("input", {
                key: 0,
                "onUpdate:modelValue": e => x(u) ? u.value = e : null,
                class: g(b(m).be("button", "original")),
                type: "checkbox",
                name: e.name,
                tabindex: e.tabindex,
                disabled: b(s),
                "true-value": null == (n = null != (t = e.trueValue) ? t : e.trueLabel) || n,
                "false-value": null != (i = null != (o = e.falseValue) ? o : e.falseLabel) && i,
                onChange: b(v),
                onFocus: e => a.value = !0,
                onBlur: e => a.value = !1,
                onClick: C((() => {}), ["stop"])
            }, null, 42, ["onUpdate:modelValue", "name", "tabindex", "disabled", "true-value", "false-value", "onChange", "onFocus", "onBlur", "onClick"])), [
                [S, b(u)]
            ]) : y((h(), w("input", {
                key: 1,
                "onUpdate:modelValue": e => x(u) ? u.value = e : null,
                class: g(b(m).be("button", "original")),
                type: "checkbox",
                name: e.name,
                tabindex: e.tabindex,
                disabled: b(s),
                value: b(d),
                onChange: b(v),
                onFocus: e => a.value = !0,
                onBlur: e => a.value = !1,
                onClick: C((() => {}), ["stop"])
            }, null, 42, ["onUpdate:modelValue", "name", "tabindex", "disabled", "value", "onChange", "onFocus", "onBlur", "onClick"])), [
                [S, b(u)]
            ]), e.$slots.default || e.label ? (h(), w("span", {
                key: 2,
                class: g(b(m).be("button", "inner")),
                style: F(b(r) ? b(E) : void 0)
            }, [k(e.$slots, "default", {}, (() => [N(R(e.label), 1)]))], 6)) : L("v-if", !0)], 2)
        }
    }
}), [
    ["__file", "checkbox-button.vue"]
]);
const et = ze({
        modelValue: {
            type: Ke(Array),
            default: () => []
        },
        disabled: Boolean,
        min: Number,
        max: Number,
        size: ee,
        fill: String,
        textColor: String,
        tag: {
            type: String,
            default: "div"
        },
        validateEvent: {
            type: Boolean,
            default: !0
        },
        ...Ne(["ariaLabel"])
    }),
    lt = {
        [le]: e => s(e),
        change: e => s(e)
    },
    tt = d({
        name: "ElCheckboxGroup"
    });
var nt = Ie(d({ ...tt,
    props: et,
    emits: lt,
    setup(e, {
        emit: l
    }) {
        const a = e,
            r = p("checkbox"),
            {
                formItem: s
            } = ne(),
            {
                inputId: i,
                isLabeledByFormItem: u
            } = re(a, {
                formItemContext: s
            }),
            d = async e => {
                l(le, e), await o(), l("change", e)
            },
            c = t({
                get: () => a.modelValue,
                set(e) {
                    d(e)
                }
            });
        return A(Ul, { ...Le(W(a), ["size", "min", "max", "disabled", "validateEvent", "fill", "textColor"]),
            modelValue: c,
            changeEvent: d
        }), n((() => a.modelValue), (() => {
            a.validateEvent && (null == s || s.validate("change").catch((e => Re())))
        })), (e, l) => {
            var t;
            return h(), v(O(e.tag), {
                id: b(i),
                class: g(b(r).b("group")),
                role: "group",
                "aria-label": b(u) ? void 0 : e.ariaLabel || "checkbox-group",
                "aria-labelledby": b(u) ? null == (t = b(s)) ? void 0 : t.labelId : void 0
            }, {
                default: f((() => [k(e.$slots, "default")])),
                _: 3
            }, 8, ["id", "class", "aria-label", "aria-labelledby"])
        }
    }
}), [
    ["__file", "checkbox-group.vue"]
]);
const ot = De(Ql, {
    CheckboxButton: Jl,
    CheckboxGroup: nt
});
Pe(Jl), Pe(nt);
const at = function(e) {
        var l;
        return null == (l = e.target) ? void 0 : l.closest("td")
    },
    rt = function(e, l, t, n, o) {
        if (!l && !n && (!o || Array.isArray(o) && !o.length)) return e;
        t = "string" == typeof t ? "descending" === t ? -1 : 1 : t && t < 0 ? -1 : 1;
        const a = n ? null : function(t, n) {
            return o ? (Array.isArray(o) || (o = [o]), o.map((l => "string" == typeof l ? ie(t, l) : l(t, n, e)))) : ("$key" !== l && i(t) && "$value" in t && (t = t.$value), [i(t) ? ie(t, l) : t])
        };
        return e.map(((e, l) => ({
            value: e,
            index: l,
            key: a ? a(e, l) : null
        }))).sort(((e, l) => {
            let o = function(e, l) {
                if (n) return n(e.value, l.value);
                for (let t = 0, n = e.key.length; t < n; t++) {
                    if (e.key[t] < l.key[t]) return -1;
                    if (e.key[t] > l.key[t]) return 1
                }
                return 0
            }(e, l);
            return o || (o = e.index - l.index), o * +t
        })).map((e => e.value))
    },
    st = function(e, l) {
        let t = null;
        return e.columns.forEach((e => {
            e.id === l && (t = e)
        })), t
    },
    it = function(e, l, t) {
        const n = (l.className || "").match(new RegExp(`${t}-table_[^\\s]+`, "gm"));
        return n ? st(e, n[0]) : null
    },
    ut = (e, l) => {
        if (!e) throw new Error("Row is required when get row identity");
        if ("string" == typeof l) {
            if (!l.includes(".")) return `${e[l]}`;
            const t = l.split(".");
            let n = e;
            for (const e of t) n = n[e];
            return `${n}`
        }
        if ("function" == typeof l) return l.call(null, e)
    },
    dt = function(e, l) {
        const t = {};
        return (e || []).forEach(((e, n) => {
            t[ut(e, l)] = {
                row: e,
                index: n
            }
        })), t
    };

function ct(e) {
    return "" === e || void 0 !== e && (e = Number.parseInt(e, 10), Number.isNaN(e) && (e = "")), e
}

function pt(e) {
    return "" === e || void 0 !== e && (e = ct(e), Number.isNaN(e) && (e = 80)), e
}

function ht(e, l, t, n, o, a) {
    let r = null != a ? a : 0,
        i = !1;
    const u = e.indexOf(l),
        d = -1 !== u,
        c = null == o ? void 0 : o.call(null, l, a),
        p = t => {
            "add" === t ? e.push(l) : e.splice(u, 1), i = !0
        },
        h = e => {
            let l = 0;
            const t = (null == n ? void 0 : n.children) && e[n.children];
            return t && s(t) && (l += t.length, t.forEach((e => {
                l += h(e)
            }))), l
        };
    return o && !c || (Be(t) ? t && !d ? p("add") : !t && d && p("remove") : p(d ? "remove" : "add")), !(null == n ? void 0 : n.checkStrictly) && (null == n ? void 0 : n.children) && s(l[n.children]) && l[n.children].forEach((l => {
        ht(e, l, null != t ? t : !d, n, o, r + 1), r += h(l) + 1
    })), i
}

function vt(e, l, t = "children", n = "hasChildren") {
    const o = e => !(Array.isArray(e) && e.length);

    function a(e, r, s) {
        l(e, r, s), r.forEach((e => {
            if (e[n]) return void l(e, null, s + 1);
            const r = e[t];
            o(r) || a(e, r, s + 1)
        }))
    }
    e.forEach((e => {
        if (e[n]) return void l(e, null, 0);
        const r = e[t];
        o(r) || a(e, r, 0)
    }))
}
let ft = null;

function mt(e) {
    return e.children ? vl(e.children, mt) : [e]
}

function gt(e, l) {
    return e + l.colSpan
}
const bt = (e, l, t, n) => {
        let o = 0,
            a = e;
        const r = t.states.columns.value;
        if (n) {
            const l = mt(n[e]);
            o = r.slice(0, r.indexOf(l[0])).reduce(gt, 0), a = o + l.reduce(gt, 0) - 1
        } else o = e;
        let s;
        switch (l) {
            case "left":
                a < t.states.fixedLeafColumnsLength.value && (s = "left");
                break;
            case "right":
                o >= r.length - t.states.rightFixedLeafColumnsLength.value && (s = "right");
                break;
            default:
                a < t.states.fixedLeafColumnsLength.value ? s = "left" : o >= r.length - t.states.rightFixedLeafColumnsLength.value && (s = "right")
        }
        return s ? {
            direction: s,
            start: o,
            after: a
        } : {}
    },
    yt = (e, l, t, n, o, a = 0) => {
        const r = [],
            {
                direction: s,
                start: i,
                after: u
            } = bt(l, t, n, o);
        if (s) {
            const l = "left" === s;
            r.push(`${e}-fixed-column--${s}`), l && u + a === n.states.fixedLeafColumnsLength.value - 1 ? r.push("is-last-column") : l || i - a != n.states.columns.value.length - n.states.rightFixedLeafColumnsLength.value || r.push("is-first-column")
        }
        return r
    };

function wt(e, l) {
    return e + (null === l.realWidth || Number.isNaN(l.realWidth) ? Number(l.width) : l.realWidth)
}
const xt = (e, l, t, n) => {
        const {
            direction: o,
            start: a = 0,
            after: r = 0
        } = bt(e, l, t, n);
        if (!o) return;
        const s = {},
            i = "left" === o,
            u = t.states.columns.value;
        return i ? s.left = u.slice(0, a).reduce(wt, 0) : s.right = u.slice(r + 1).reverse().reduce(wt, 0), s
    },
    Ct = (e, l) => {
        e && (Number.isNaN(e[l]) || (e[l] = `${e[l]}px`))
    };
const St = e => {
    const l = [];
    return e.forEach((e => {
        e.children && e.children.length > 0 ? l.push.apply(l, St(e.children)) : l.push(e)
    })), l
};

function kt() {
    var e;
    const l = a(),
        {
            size: o
        } = W(null == (e = l.proxy) ? void 0 : e.$props),
        s = r(null),
        i = r([]),
        u = r([]),
        d = r(!1),
        c = r([]),
        p = r([]),
        h = r([]),
        v = r([]),
        f = r([]),
        m = r([]),
        g = r([]),
        y = r([]),
        w = r(0),
        x = r(0),
        C = r(0),
        S = r(!1),
        k = r([]),
        E = r(!1),
        N = r(!1),
        R = r(null),
        L = r({}),
        O = r(null),
        F = r(null),
        A = r(null),
        T = r(null),
        M = r(null);
    n(i, (() => l.state && I(!1)), {
        deep: !0
    });
    const B = e => {
        var l;
        null == (l = e.children) || l.forEach((l => {
            l.fixed = e.fixed, B(l)
        }))
    };
    let $;
    const V = () => {
            if (c.value.forEach((e => {
                    B(e)
                })), v.value = c.value.filter((e => !0 === e.fixed || "left" === e.fixed)), f.value = c.value.filter((e => "right" === e.fixed)), $e($) && c.value[0] && "selection" === c.value[0].type && ($ = Boolean(c.value[0].fixed)), v.value.length > 0 && c.value[0] && "selection" === c.value[0].type)
                if (c.value[0].fixed) {
                    v.value.some((e => "selection" !== e.type)) ? $ = void 0 : (c.value[0].fixed = $, $ || v.value.shift())
                } else c.value[0].fixed = !0, v.value.unshift(c.value[0]);
            const e = c.value.filter((e => !e.fixed));
            p.value = [].concat(v.value).concat(e).concat(f.value);
            const l = St(e),
                t = St(v.value),
                n = St(f.value);
            w.value = l.length, x.value = t.length, C.value = n.length, h.value = [].concat(t).concat(l).concat(n), d.value = v.value.length > 0 || f.value.length > 0
        },
        I = (e, t = !1) => {
            e && V(), t ? l.state.doLayout() : l.state.debouncedUpdateLayout()
        },
        z = e => {
            var t;
            if (!l || !l.store) return 0;
            const {
                treeData: n
            } = l.store.states;
            let o = 0;
            const a = null == (t = n.value[e]) ? void 0 : t.children;
            return a && (o += a.length, a.forEach((e => {
                o += z(e)
            }))), o
        },
        K = (e, l, t) => {
            F.value && F.value !== e && (F.value.order = null), F.value = e, A.value = l, T.value = t
        },
        D = () => {
            let e = b(u);
            Object.keys(L.value).forEach((l => {
                const t = L.value[l];
                if (!t || 0 === t.length) return;
                const n = st({
                    columns: h.value
                }, l);
                n && n.filterMethod && (e = e.filter((e => t.some((l => n.filterMethod.call(null, l, e, n))))))
            })), O.value = e
        },
        P = () => {
            i.value = ((e, l) => {
                const t = l.sortingColumn;
                return t && "string" != typeof t.sortable ? rt(e, l.sortProp, l.sortOrder, t.sortMethod, t.sortBy) : e
            })(O.value, {
                sortingColumn: F.value,
                sortProp: A.value,
                sortOrder: T.value
            })
        },
        {
            setExpandRowKeys: j,
            toggleRowExpansion: _,
            updateExpandRows: Y,
            states: U,
            isRowExpanded: G
        } = function(e) {
            const l = a(),
                t = r(!1),
                n = r([]);
            return {
                updateExpandRows: () => {
                    const l = e.data.value || [],
                        o = e.rowKey.value;
                    if (t.value) n.value = l.slice();
                    else if (o) {
                        const e = dt(n.value, o);
                        n.value = l.reduce(((l, t) => {
                            const n = ut(t, o);
                            return e[n] && l.push(t), l
                        }), [])
                    } else n.value = []
                },
                toggleRowExpansion: (e, t) => {
                    ht(n.value, e, t) && l.emit("expand-change", e, n.value.slice())
                },
                setExpandRowKeys: t => {
                    l.store.assertRowKey();
                    const o = e.data.value || [],
                        a = e.rowKey.value,
                        r = dt(o, a);
                    n.value = t.reduce(((e, l) => {
                        const t = r[l];
                        return t && e.push(t.row), e
                    }), [])
                },
                isRowExpanded: l => {
                    const t = e.rowKey.value;
                    return t ? !!dt(n.value, t)[ut(l, t)] : n.value.includes(l)
                },
                states: {
                    expandRows: n,
                    defaultExpandAll: t
                }
            }
        }({
            data: i,
            rowKey: s
        }),
        {
            updateTreeExpandKeys: X,
            toggleTreeExpansion: q,
            updateTreeData: Q,
            updateKeyChildren: Z,
            loadOrToggle: J,
            states: ee
        } = function(e) {
            const l = r([]),
                o = r({}),
                s = r(16),
                i = r(!1),
                u = r({}),
                d = r("hasChildren"),
                c = r("children"),
                p = r(!1),
                h = a(),
                v = t((() => {
                    if (!e.rowKey.value) return {};
                    const l = e.data.value || [];
                    return m(l)
                })),
                f = t((() => {
                    const l = e.rowKey.value,
                        t = Object.keys(u.value),
                        n = {};
                    return t.length ? (t.forEach((e => {
                        if (u.value[e].length) {
                            const t = {
                                children: []
                            };
                            u.value[e].forEach((e => {
                                const o = ut(e, l);
                                t.children.push(o), e[d.value] && !n[o] && (n[o] = {
                                    children: []
                                })
                            })), n[e] = t
                        }
                    })), n) : n
                })),
                m = l => {
                    const t = e.rowKey.value,
                        n = {};
                    return vt(l, ((e, l, o) => {
                        const a = ut(e, t);
                        Array.isArray(l) ? n[a] = {
                            children: l.map((e => ut(e, t))),
                            level: o
                        } : i.value && (n[a] = {
                            children: [],
                            lazy: !0,
                            level: o
                        })
                    }), c.value, d.value), n
                },
                g = (e = !1, t = (e => null == (e = h.store) ? void 0 : e.states.defaultExpandAll.value)()) => {
                    var n;
                    const a = v.value,
                        r = f.value,
                        s = Object.keys(a),
                        u = {};
                    if (s.length) {
                        const n = b(o),
                            d = [],
                            c = (n, o) => {
                                if (e) return l.value ? t || l.value.includes(o) : !(!t && !(null == n ? void 0 : n.expanded)); {
                                    const e = t || l.value && l.value.includes(o);
                                    return !(!(null == n ? void 0 : n.expanded) && !e)
                                }
                            };
                        s.forEach((e => {
                            const l = n[e],
                                t = { ...a[e]
                                };
                            if (t.expanded = c(l, e), t.lazy) {
                                const {
                                    loaded: n = !1,
                                    loading: o = !1
                                } = l || {};
                                t.loaded = !!n, t.loading = !!o, d.push(e)
                            }
                            u[e] = t
                        }));
                        const p = Object.keys(r);
                        i.value && p.length && d.length && p.forEach((e => {
                            const l = n[e],
                                t = r[e].children;
                            if (d.includes(e)) {
                                if (0 !== u[e].children.length) throw new Error("[ElTable]children must be an empty array.");
                                u[e].children = t
                            } else {
                                const {
                                    loaded: n = !1,
                                    loading: o = !1
                                } = l || {};
                                u[e] = {
                                    lazy: !0,
                                    loaded: !!n,
                                    loading: !!o,
                                    expanded: c(l, e),
                                    children: t,
                                    level: ""
                                }
                            }
                        }))
                    }
                    o.value = u, null == (n = h.store) || n.updateTableScrollY()
                };
            n((() => l.value), (() => {
                g(!0)
            })), n((() => v.value), (() => {
                g()
            })), n((() => f.value), (() => {
                g()
            }));
            const y = (l, t) => {
                    h.store.assertRowKey();
                    const n = e.rowKey.value,
                        a = ut(l, n),
                        r = a && o.value[a];
                    if (a && r && "expanded" in r) {
                        const e = r.expanded;
                        t = void 0 === t ? !r.expanded : t, o.value[a].expanded = t, e !== t && h.emit("expand-change", l, t), h.store.updateTableScrollY()
                    }
                },
                w = (e, l, t) => {
                    const {
                        load: n
                    } = h.props;
                    n && !o.value[l].loaded && (o.value[l].loading = !0, n(e, t, (t => {
                        if (!Array.isArray(t)) throw new TypeError("[ElTable] data must be an array");
                        o.value[l].loading = !1, o.value[l].loaded = !0, o.value[l].expanded = !0, t.length && (u.value[l] = t), h.emit("expand-change", e, !0)
                    })))
                };
            return {
                loadData: w,
                loadOrToggle: l => {
                    h.store.assertRowKey();
                    const t = e.rowKey.value,
                        n = ut(l, t),
                        a = o.value[n];
                    i.value && a && "loaded" in a && !a.loaded ? w(l, n, a) : y(l, void 0)
                },
                toggleTreeExpansion: y,
                updateTreeExpandKeys: e => {
                    l.value = e, g()
                },
                updateTreeData: g,
                updateKeyChildren: (e, l) => {
                    const {
                        lazy: t,
                        rowKey: n
                    } = h.props;
                    if (t) {
                        if (!n) throw new Error("[Table] rowKey is required in updateKeyChild");
                        u.value[e] && (u.value[e] = l)
                    }
                },
                normalize: m,
                states: {
                    expandRowKeys: l,
                    treeData: o,
                    indent: s,
                    lazy: i,
                    lazyTreeNodeMap: u,
                    lazyColumnIdentifier: d,
                    childrenColumnName: c,
                    checkStrictly: p
                }
            }
        }({
            data: i,
            rowKey: s
        }),
        {
            updateCurrentRowData: le,
            updateCurrentRow: te,
            setCurrentRowKey: ne,
            states: ae
        } = function(e) {
            const l = a(),
                t = r(null),
                n = r(null),
                o = () => {
                    t.value = null
                },
                s = t => {
                    const {
                        data: o,
                        rowKey: a
                    } = e;
                    let r = null;
                    a.value && (r = (b(o) || []).find((e => ut(e, a.value) === t))), n.value = r, l.emit("current-change", n.value, null)
                };
            return {
                setCurrentRowKey: e => {
                    l.store.assertRowKey(), t.value = e, s(e)
                },
                restoreCurrentRowKey: o,
                setCurrentRowByKey: s,
                updateCurrentRow: e => {
                    const t = n.value;
                    if (e && e !== t) return n.value = e, void l.emit("current-change", n.value, t);
                    !e && t && (n.value = null, l.emit("current-change", null, t))
                },
                updateCurrentRowData: () => {
                    const a = e.rowKey.value,
                        r = e.data.value || [],
                        i = n.value;
                    if (!r.includes(i) && i) {
                        if (a) {
                            const e = ut(i, a);
                            s(e)
                        } else n.value = null;
                        null === n.value && l.emit("current-change", null, i)
                    } else t.value && (s(t.value), o())
                },
                states: {
                    _currentRowKey: t,
                    currentRow: n
                }
            }
        }({
            data: i,
            rowKey: s
        });
    return {
        assertRowKey: () => {
            if (!s.value) throw new Error("[ElTable] prop row-key is required")
        },
        updateColumns: V,
        scheduleLayout: I,
        isSelected: e => k.value.some((l => oe(l, e))),
        clearSelection: () => {
            S.value = !1;
            const e = k.value;
            k.value = [], e.length && l.emit("selection-change", [])
        },
        cleanSelection: () => {
            let e;
            if (s.value) {
                e = [];
                const l = dt(k.value, s.value),
                    t = dt(i.value, s.value);
                for (const n in l) H(l, n) && !t[n] && e.push(l[n].row)
            } else e = k.value.filter((e => !i.value.includes(e)));
            if (e.length) {
                const t = k.value.filter((l => !e.includes(l)));
                k.value = t, l.emit("selection-change", t.slice())
            }
        },
        getSelectionRows: () => (k.value || []).slice(),
        toggleRowSelection: (e, t, n = !0, o = !1) => {
            var a, r, s, i;
            const u = {
                children: null == (r = null == (a = null == l ? void 0 : l.store) ? void 0 : a.states) ? void 0 : r.childrenColumnName.value,
                checkStrictly: null == (i = null == (s = null == l ? void 0 : l.store) ? void 0 : s.states) ? void 0 : i.checkStrictly.value
            };
            if (ht(k.value, e, t, u, o ? void 0 : R.value)) {
                const t = (k.value || []).slice();
                n && l.emit("select", t, e), l.emit("selection-change", t)
            }
        },
        _toggleAllSelection: () => {
            var e, t;
            const n = N.value ? !S.value : !(S.value || k.value.length);
            S.value = n;
            let o = !1,
                a = 0;
            const r = null == (t = null == (e = null == l ? void 0 : l.store) ? void 0 : e.states) ? void 0 : t.rowKey.value,
                {
                    childrenColumnName: s
                } = l.store.states,
                u = {
                    children: s.value,
                    checkStrictly: !1
                };
            i.value.forEach(((e, l) => {
                const t = l + a;
                ht(k.value, e, n, u, R.value, t) && (o = !0), a += z(ut(e, r))
            })), o && l.emit("selection-change", k.value ? k.value.slice() : []), l.emit("select-all", (k.value || []).slice())
        },
        toggleAllSelection: null,
        updateSelectionByRowKey: () => {
            const e = dt(k.value, s.value);
            i.value.forEach((l => {
                const t = ut(l, s.value),
                    n = e[t];
                n && (k.value[n.index] = l)
            }))
        },
        updateAllSelected: () => {
            var e;
            if (0 === (null == (e = i.value) ? void 0 : e.length)) return void(S.value = !1);
            const {
                childrenColumnName: t
            } = l.store.states, n = s.value ? dt(k.value, s.value) : void 0;
            let o = 0,
                a = 0;
            const r = e => n ? !!n[ut(e, s.value)] : k.value.includes(e),
                u = e => {
                    var l;
                    for (const n of e) {
                        const e = R.value && R.value.call(null, n, o);
                        if (r(n)) a++;
                        else if (!R.value || e) return !1;
                        if (o++, (null == (l = n[t.value]) ? void 0 : l.length) && !u(n[t.value])) return !1
                    }
                    return !0
                },
                d = u(i.value || []);
            S.value = 0 !== a && d
        },
        updateFilters: (e, l) => {
            Array.isArray(e) || (e = [e]);
            const t = {};
            return e.forEach((e => {
                L.value[e.id] = l, t[e.columnKey || e.id] = l
            })), t
        },
        updateCurrentRow: te,
        updateSort: K,
        execFilter: D,
        execSort: P,
        execQuery: (e = void 0) => {
            e && e.filter || D(), P()
        },
        clearFilter: e => {
            const {
                tableHeaderRef: t
            } = l.refs;
            if (!t) return;
            const n = Object.assign({}, t.filterPanels),
                o = Object.keys(n);
            if (o.length)
                if ("string" == typeof e && (e = [e]), Array.isArray(e)) {
                    const t = e.map((e => function(e, l) {
                        let t = null;
                        for (let n = 0; n < e.columns.length; n++) {
                            const o = e.columns[n];
                            if (o.columnKey === l) {
                                t = o;
                                break
                            }
                        }
                        return t || Oe("ElTable", `No column matching with column-key: ${l}`), t
                    }({
                        columns: h.value
                    }, e)));
                    o.forEach((e => {
                        const l = t.find((l => l.id === e));
                        l && (l.filteredValue = [])
                    })), l.store.commit("filterChange", {
                        column: t,
                        values: [],
                        silent: !0,
                        multi: !0
                    })
                } else o.forEach((e => {
                    const l = h.value.find((l => l.id === e));
                    l && (l.filteredValue = [])
                })), L.value = {}, l.store.commit("filterChange", {
                    column: {},
                    values: [],
                    silent: !0
                })
        },
        clearSort: () => {
            F.value && (K(null, null, null), l.store.commit("changeSortCondition", {
                silent: !0
            }))
        },
        toggleRowExpansion: _,
        setExpandRowKeysAdapter: e => {
            j(e), X(e)
        },
        setCurrentRowKey: ne,
        toggleRowExpansionAdapter: (e, l) => {
            h.value.some((({
                type: e
            }) => "expand" === e)) ? _(e, l) : q(e, l)
        },
        isRowExpanded: G,
        updateExpandRows: Y,
        updateCurrentRowData: le,
        loadOrToggle: J,
        updateTreeData: Q,
        updateKeyChildren: Z,
        states: {
            tableSize: o,
            rowKey: s,
            data: i,
            _data: u,
            isComplex: d,
            _columns: c,
            originColumns: p,
            columns: h,
            fixedColumns: v,
            rightFixedColumns: f,
            leafColumns: m,
            fixedLeafColumns: g,
            rightFixedLeafColumns: y,
            updateOrderFns: [],
            leafColumnsLength: w,
            fixedLeafColumnsLength: x,
            rightFixedLeafColumnsLength: C,
            isAllSelected: S,
            selection: k,
            reserveSelection: E,
            selectOnIndeterminate: N,
            selectable: R,
            filters: L,
            filteredData: O,
            sortingColumn: F,
            sortProp: A,
            sortOrder: T,
            hoverRow: M,
            ...U,
            ...ee,
            ...ae
        }
    }
}

function Et(e, l) {
    return e.map((e => {
        var t;
        return e.id === l.id ? l : ((null == (t = e.children) ? void 0 : t.length) && (e.children = Et(e.children, l)), e)
    }))
}

function Nt(e) {
    e.forEach((e => {
        var l, t;
        e.no = null == (l = e.getColumnIndex) ? void 0 : l.call(e), (null == (t = e.children) ? void 0 : t.length) && Nt(e.children)
    })), e.sort(((e, l) => e.no - l.no))
}
const Rt = {
    rowKey: "rowKey",
    defaultExpandAll: "defaultExpandAll",
    selectOnIndeterminate: "selectOnIndeterminate",
    indent: "indent",
    lazy: "lazy",
    data: "data",
    "treeProps.hasChildren": {
        key: "lazyColumnIdentifier",
        default: "hasChildren"
    },
    "treeProps.children": {
        key: "childrenColumnName",
        default: "children"
    },
    "treeProps.checkStrictly": {
        key: "checkStrictly",
        default: !1
    }
};

function Lt(e, l) {
    if (!e) throw new Error("Table is required.");
    const t = function() {
        const e = a(),
            l = kt();
        return {
            ns: p("table"),
            ...l,
            mutations: {
                setData(l, t) {
                    const n = b(l._data) !== t;
                    l.data.value = t, l._data.value = t, e.store.execQuery(), e.store.updateCurrentRowData(), e.store.updateExpandRows(), e.store.updateTreeData(e.store.states.defaultExpandAll.value), b(l.reserveSelection) ? (e.store.assertRowKey(), e.store.updateSelectionByRowKey()) : n ? e.store.clearSelection() : e.store.cleanSelection(), e.store.updateAllSelected(), e.$ready && e.store.scheduleLayout()
                },
                insertColumn(l, t, n, o) {
                    const a = b(l._columns);
                    let r = [];
                    n ? (n && !n.children && (n.children = []), n.children.push(t), r = Et(a, n)) : (a.push(t), r = a), Nt(r), l._columns.value = r, l.updateOrderFns.push(o), "selection" === t.type && (l.selectable.value = t.selectable, l.reserveSelection.value = t.reserveSelection), e.$ready && (e.store.updateColumns(), e.store.scheduleLayout())
                },
                updateColumnOrder(l, t) {
                    var n;
                    (null == (n = t.getColumnIndex) ? void 0 : n.call(t)) !== t.no && (Nt(l._columns.value), e.$ready && e.store.updateColumns())
                },
                removeColumn(l, t, n, a) {
                    const r = b(l._columns) || [];
                    if (n) n.children.splice(n.children.findIndex((e => e.id === t.id)), 1), o((() => {
                        var e;
                        0 === (null == (e = n.children) ? void 0 : e.length) && delete n.children
                    })), l._columns.value = Et(r, n);
                    else {
                        const e = r.indexOf(t);
                        e > -1 && (r.splice(e, 1), l._columns.value = r)
                    }
                    const s = l.updateOrderFns.indexOf(a);
                    s > -1 && l.updateOrderFns.splice(s, 1), e.$ready && (e.store.updateColumns(), e.store.scheduleLayout())
                },
                sort(l, t) {
                    const {
                        prop: n,
                        order: o,
                        init: a
                    } = t;
                    if (n) {
                        const t = b(l.columns).find((e => e.property === n));
                        t && (t.order = o, e.store.updateSort(t, n, o), e.store.commit("changeSortCondition", {
                            init: a
                        }))
                    }
                },
                changeSortCondition(l, t) {
                    const {
                        sortingColumn: n,
                        sortProp: o,
                        sortOrder: a
                    } = l, r = b(n), s = b(o), i = b(a);
                    null === i && (l.sortingColumn.value = null, l.sortProp.value = null), e.store.execQuery({
                        filter: !0
                    }), t && (t.silent || t.init) || e.emit("sort-change", {
                        column: r,
                        prop: s,
                        order: i
                    }), e.store.updateTableScrollY()
                },
                filterChange(l, t) {
                    const {
                        column: n,
                        values: o,
                        silent: a
                    } = t, r = e.store.updateFilters(n, o);
                    e.store.execQuery(), a || e.emit("filter-change", r), e.store.updateTableScrollY()
                },
                toggleAllSelection() {
                    e.store.toggleAllSelection()
                },
                rowSelectedChanged(l, t) {
                    e.store.toggleRowSelection(t), e.store.updateAllSelected()
                },
                setHoverRow(e, l) {
                    e.hoverRow.value = l
                },
                setCurrentRow(l, t) {
                    e.store.updateCurrentRow(t)
                }
            },
            commit: function(l, ...t) {
                const n = e.store.mutations;
                if (!n[l]) throw new Error(`Action not found: ${l}`);
                n[l].apply(e, [e.store.states].concat(t))
            },
            updateTableScrollY: function() {
                o((() => e.layout.updateScrollY.apply(e.layout)))
            }
        }
    }();
    return t.toggleAllSelection = ue(t._toggleAllSelection, 10), Object.keys(Rt).forEach((e => {
            Ot(Ft(l, e), e, t)
        })),
        function(e, l) {
            Object.keys(Rt).forEach((t => {
                n((() => Ft(l, t)), (l => {
                    Ot(l, t, e)
                }))
            }))
        }(t, l), t
}

function Ot(e, l, t) {
    let n = e,
        o = Rt[l];
    "object" == typeof Rt[l] && (o = o.key, n = n || Rt[l].default), t.states[o].value = n
}

function Ft(e, l) {
    if (l.includes(".")) {
        const t = l.split(".");
        let n = e;
        return t.forEach((e => {
            n = n[e]
        })), n
    }
    return e[l]
}
class At {
    constructor(e) {
        this.observers = [], this.table = null, this.store = null, this.columns = [], this.fit = !0, this.showHeader = !0, this.height = r(null), this.scrollX = r(!1), this.scrollY = r(!1), this.bodyWidth = r(null), this.fixedWidth = r(null), this.rightFixedWidth = r(null), this.gutterWidth = 0;
        for (const l in e) H(e, l) && (x(this[l]) ? this[l].value = e[l] : this[l] = e[l]);
        if (!this.table) throw new Error("Table is required for Table Layout");
        if (!this.store) throw new Error("Store is required for Table Layout")
    }
    updateScrollY() {
        if (null === this.height.value) return !1;
        const e = this.table.refs.scrollBarRef;
        if (this.table.vnode.el && (null == e ? void 0 : e.wrapRef)) {
            let l = !0;
            const t = this.scrollY.value;
            return l = e.wrapRef.scrollHeight > e.wrapRef.clientHeight, this.scrollY.value = l, t !== l
        }
        return !1
    }
    setHeight(e, l = "height") {
        if (!Te) return;
        const t = this.table.vnode.el;
        var n;
        if (e = "number" == typeof(n = e) ? n : "string" == typeof n ? /^\d+(?:px)?$/.test(n) ? Number.parseInt(n, 10) : n : null, this.height.value = Number(e), !t && (e || 0 === e)) return o((() => this.setHeight(e, l)));
        "number" == typeof e ? (t.style[l] = `${e}px`, this.updateElsHeight()) : "string" == typeof e && (t.style[l] = e, this.updateElsHeight())
    }
    setMaxHeight(e) {
        this.setHeight(e, "max-height")
    }
    getFlattenColumns() {
        const e = [];
        return this.table.store.states.columns.value.forEach((l => {
            l.isColumnGroup ? e.push.apply(e, l.columns) : e.push(l)
        })), e
    }
    updateElsHeight() {
        this.updateScrollY(), this.notifyObservers("scrollable")
    }
    headerDisplayNone(e) {
        if (!e) return !0;
        let l = e;
        for (;
            "DIV" !== l.tagName;) {
            if ("none" === getComputedStyle(l).display) return !0;
            l = l.parentElement
        }
        return !1
    }
    updateColumnsWidth() {
        if (!Te) return;
        const e = this.fit,
            l = this.table.vnode.el.clientWidth;
        let t = 0;
        const n = this.getFlattenColumns(),
            o = n.filter((e => "number" != typeof e.width));
        if (n.forEach((e => {
                "number" == typeof e.width && e.realWidth && (e.realWidth = null)
            })), o.length > 0 && e) {
            if (n.forEach((e => {
                    t += Number(e.width || e.minWidth || 80)
                })), t <= l) {
                this.scrollX.value = !1;
                const e = l - t;
                if (1 === o.length) o[0].realWidth = Number(o[0].minWidth || 80) + e;
                else {
                    const l = e / o.reduce(((e, l) => e + Number(l.minWidth || 80)), 0);
                    let t = 0;
                    o.forEach(((e, n) => {
                        if (0 === n) return;
                        const o = Math.floor(Number(e.minWidth || 80) * l);
                        t += o, e.realWidth = Number(e.minWidth || 80) + o
                    })), o[0].realWidth = Number(o[0].minWidth || 80) + e - t
                }
            } else this.scrollX.value = !0, o.forEach((e => {
                e.realWidth = Number(e.minWidth)
            }));
            this.bodyWidth.value = Math.max(t, l), this.table.state.resizeState.value.width = this.bodyWidth.value
        } else n.forEach((e => {
            e.width || e.minWidth ? e.realWidth = Number(e.width || e.minWidth) : e.realWidth = 80, t += e.realWidth
        })), this.scrollX.value = t > l, this.bodyWidth.value = t;
        const a = this.store.states.fixedColumns.value;
        if (a.length > 0) {
            let e = 0;
            a.forEach((l => {
                e += Number(l.realWidth || l.width)
            })), this.fixedWidth.value = e
        }
        const r = this.store.states.rightFixedColumns.value;
        if (r.length > 0) {
            let e = 0;
            r.forEach((l => {
                e += Number(l.realWidth || l.width)
            })), this.rightFixedWidth.value = e
        }
        this.notifyObservers("columns")
    }
    addObserver(e) {
        this.observers.push(e)
    }
    removeObserver(e) {
        const l = this.observers.indexOf(e); - 1 !== l && this.observers.splice(l, 1)
    }
    notifyObservers(e) {
        this.observers.forEach((l => {
            var t, n;
            switch (e) {
                case "columns":
                    null == (t = l.state) || t.onColumnsChange(this);
                    break;
                case "scrollable":
                    null == (n = l.state) || n.onScrollableChange(this);
                    break;
                default:
                    throw new Error(`Table Layout don't have event ${e}.`)
            }
        }))
    }
}
const {
    CheckboxGroup: Wt
} = ot;
var Ht = Ie(d({
    name: "ElTableFilterPanel",
    components: {
        ElCheckbox: ot,
        ElCheckboxGroup: Wt,
        ElScrollbar: de,
        ElTooltip: Fe,
        ElIcon: je,
        ArrowDown: _e,
        ArrowUp: Ye
    },
    directives: {
        ClickOutside: Ae
    },
    props: {
        placement: {
            type: String,
            default: "bottom-start"
        },
        store: {
            type: Object
        },
        column: {
            type: Object
        },
        upDataColumn: {
            type: Function
        },
        appendTo: {
            type: String
        }
    },
    setup(e) {
        const l = a(),
            {
                t: o
            } = ce(),
            s = p("table-filter"),
            i = null == l ? void 0 : l.parent;
        i.filterPanels.value[e.column.id] || (i.filterPanels.value[e.column.id] = l);
        const u = r(!1),
            d = r(null),
            c = t((() => e.column && e.column.filters)),
            h = t((() => e.column.filterClassName ? `${s.b()} ${e.column.filterClassName}` : s.b())),
            v = t({
                get: () => {
                    var l;
                    return ((null == (l = e.column) ? void 0 : l.filteredValue) || [])[0]
                },
                set: e => {
                    f.value && (null != e ? f.value.splice(0, 1, e) : f.value.splice(0, 1))
                }
            }),
            f = t({
                get: () => e.column && e.column.filteredValue || [],
                set(l) {
                    e.column && e.upDataColumn("filteredValue", l)
                }
            }),
            m = t((() => !e.column || e.column.filterMultiple)),
            g = () => {
                u.value = !1
            },
            b = l => {
                e.store.commit("filterChange", {
                    column: e.column,
                    values: l
                }), e.store.updateAllSelected()
            };
        n(u, (l => {
            e.column && e.upDataColumn("filterOpened", l)
        }), {
            immediate: !0
        });
        const y = t((() => {
            var e, l;
            return null == (l = null == (e = d.value) ? void 0 : e.popperRef) ? void 0 : l.contentRef
        }));
        return {
            tooltipVisible: u,
            multiple: m,
            filterClassName: h,
            filteredValue: f,
            filterValue: v,
            filters: c,
            handleConfirm: () => {
                b(f.value), g()
            },
            handleReset: () => {
                f.value = [], b(f.value), g()
            },
            handleSelect: e => {
                v.value = e, b(null != e ? f.value : []), g()
            },
            isActive: e => e.value === v.value,
            t: o,
            ns: s,
            showFilterPanel: e => {
                e.stopPropagation(), u.value = !u.value
            },
            hideFilterPanel: () => {
                u.value = !1
            },
            popperPaneRef: y,
            tooltip: d
        }
    }
}), [
    ["render", function(e, l, t, n, o, a) {
        const r = B("el-checkbox"),
            s = B("el-checkbox-group"),
            i = B("el-scrollbar"),
            u = B("arrow-up"),
            d = B("arrow-down"),
            c = B("el-icon"),
            p = B("el-tooltip"),
            b = $("click-outside");
        return h(), v(p, {
            ref: "tooltip",
            visible: e.tooltipVisible,
            offset: 0,
            placement: e.placement,
            "show-arrow": !1,
            "stop-popper-mouse-event": !1,
            teleported: "",
            effect: "light",
            pure: "",
            "popper-class": e.filterClassName,
            persistent: "",
            "append-to": e.appendTo
        }, {
            content: f((() => [e.multiple ? (h(), w("div", {
                key: 0
            }, [m("div", {
                class: g(e.ns.e("content"))
            }, [T(i, {
                "wrap-class": e.ns.e("wrap")
            }, {
                default: f((() => [T(s, {
                    modelValue: e.filteredValue,
                    "onUpdate:modelValue": l => e.filteredValue = l,
                    class: g(e.ns.e("checkbox-group"))
                }, {
                    default: f((() => [(h(!0), w(E, null, V(e.filters, (e => (h(), v(r, {
                        key: e.value,
                        value: e.value
                    }, {
                        default: f((() => [N(R(e.text), 1)])),
                        _: 2
                    }, 1032, ["value"])))), 128))])),
                    _: 1
                }, 8, ["modelValue", "onUpdate:modelValue", "class"])])),
                _: 1
            }, 8, ["wrap-class"])], 2), m("div", {
                class: g(e.ns.e("bottom"))
            }, [m("button", {
                class: g({
                    [e.ns.is("disabled")]: 0 === e.filteredValue.length
                }),
                disabled: 0 === e.filteredValue.length,
                type: "button",
                onClick: e.handleConfirm
            }, R(e.t("el.table.confirmFilter")), 11, ["disabled", "onClick"]), m("button", {
                type: "button",
                onClick: e.handleReset
            }, R(e.t("el.table.resetFilter")), 9, ["onClick"])], 2)])) : (h(), w("ul", {
                key: 1,
                class: g(e.ns.e("list"))
            }, [m("li", {
                class: g([e.ns.e("list-item"), {
                    [e.ns.is("active")]: void 0 === e.filterValue || null === e.filterValue
                }]),
                onClick: l => e.handleSelect(null)
            }, R(e.t("el.table.clearFilter")), 11, ["onClick"]), (h(!0), w(E, null, V(e.filters, (l => (h(), w("li", {
                key: l.value,
                class: g([e.ns.e("list-item"), e.ns.is("active", e.isActive(l))]),
                label: l.value,
                onClick: t => e.handleSelect(l.value)
            }, R(l.text), 11, ["label", "onClick"])))), 128))], 2))])),
            default: f((() => [y((h(), w("span", {
                class: g([`${e.ns.namespace.value}-table__column-filter-trigger`, `${e.ns.namespace.value}-none-outline`]),
                onClick: e.showFilterPanel
            }, [T(c, null, {
                default: f((() => [k(e.$slots, "filter-icon", {}, (() => [e.column.filterOpened ? (h(), v(u, {
                    key: 0
                })) : (h(), v(d, {
                    key: 1
                }))]))])),
                _: 3
            })], 10, ["onClick"])), [
                [b, e.hideFilterPanel, e.popperPaneRef]
            ])])),
            _: 3
        }, 8, ["visible", "placement", "popper-class", "append-to"])
    }],
    ["__file", "filter-panel.vue"]
]);

function Tt(e) {
    const l = a();
    I((() => {
        n.value.addObserver(l)
    })), z((() => {
        o(n.value), r(n.value)
    })), K((() => {
        o(n.value), r(n.value)
    })), D((() => {
        n.value.removeObserver(l)
    }));
    const n = t((() => {
            const l = e.layout;
            if (!l) throw new Error("Can not find table layout.");
            return l
        })),
        o = l => {
            var t;
            const n = (null == (t = e.vnode.el) ? void 0 : t.querySelectorAll("colgroup > col")) || [];
            if (!n.length) return;
            const o = l.getFlattenColumns(),
                a = {};
            o.forEach((e => {
                a[e.id] = e
            }));
            for (let e = 0, r = n.length; e < r; e++) {
                const l = n[e],
                    t = l.getAttribute("name"),
                    o = a[t];
                o && l.setAttribute("width", o.realWidth || o.width)
            }
        },
        r = l => {
            var t, n;
            const o = (null == (t = e.vnode.el) ? void 0 : t.querySelectorAll("colgroup > col[name=gutter]")) || [];
            for (let e = 0, r = o.length; e < r; e++) {
                o[e].setAttribute("width", l.scrollY.value ? l.gutterWidth : "0")
            }
            const a = (null == (n = e.vnode.el) ? void 0 : n.querySelectorAll("th.gutter")) || [];
            for (let e = 0, r = a.length; e < r; e++) {
                const t = a[e];
                t.style.width = l.scrollY.value ? `${l.gutterWidth}px` : "0", t.style.display = l.scrollY.value ? "" : "none"
            }
        };
    return {
        tableLayout: n.value,
        onColumnsChange: o,
        onScrollableChange: r
    }
}
const Mt = Symbol("ElTable");
const Bt = e => {
        const l = [];
        return e.forEach((e => {
            e.children ? (l.push(e), l.push.apply(l, Bt(e.children))) : l.push(e)
        })), l
    },
    $t = e => {
        let l = 1;
        const t = (e, n) => {
            if (n && (e.level = n.level + 1, l < e.level && (l = e.level)), e.children) {
                let l = 0;
                e.children.forEach((n => {
                    t(n, e), l += n.colSpan
                })), e.colSpan = l
            } else e.colSpan = 1
        };
        e.forEach((e => {
            e.level = 1, t(e, void 0)
        }));
        const n = [];
        for (let o = 0; o < l; o++) n.push([]);
        return Bt(e).forEach((e => {
            e.children ? (e.rowSpan = 1, e.children.forEach((e => e.isSubColumn = !0))) : e.rowSpan = l - e.level + 1, n[e.level - 1].push(e)
        })), n
    };
var Vt = d({
    name: "ElTableHeader",
    components: {
        ElCheckbox: ot
    },
    props: {
        fixed: {
            type: String,
            default: ""
        },
        store: {
            required: !0,
            type: Object
        },
        border: Boolean,
        defaultSort: {
            type: Object,
            default: () => ({
                prop: "",
                order: ""
            })
        },
        appendFilterPanelTo: {
            type: String
        }
    },
    setup(e, {
        emit: n
    }) {
        const s = a(),
            i = l(Mt),
            u = p("table"),
            d = r({}),
            {
                onColumnsChange: c,
                onScrollableChange: h
            } = Tt(i);
        z((async () => {
            await o(), await o();
            const {
                prop: l,
                order: t
            } = e.defaultSort;
            null == i || i.store.commit("sort", {
                prop: l,
                order: t,
                init: !0
            })
        }));
        const {
            handleHeaderClick: v,
            handleHeaderContextMenu: f,
            handleMouseDown: m,
            handleMouseMove: g,
            handleMouseOut: b,
            handleSortClick: y,
            handleFilterClick: w
        } = function(e, t) {
            const n = a(),
                o = l(Mt),
                s = e => {
                    e.stopPropagation()
                },
                i = r(null),
                u = r(!1),
                d = r({}),
                c = (l, t, n) => {
                    var a;
                    l.stopPropagation();
                    const r = t.order === n ? null : n || (({
                            order: e,
                            sortOrders: l
                        }) => {
                            if ("" === e) return l[0];
                            const t = l.indexOf(e || null);
                            return l[t > l.length - 2 ? 0 : t + 1]
                        })(t),
                        s = null == (a = l.target) ? void 0 : a.closest("th");
                    if (s && Xe(s, "noclick")) return void qe(s, "noclick");
                    if (!t.sortable) return;
                    const i = l.currentTarget;
                    if (["ascending", "descending"].some((e => Xe(i, e) && !t.sortOrders.includes(e)))) return;
                    const u = e.store.states;
                    let d, c = u.sortProp.value;
                    const p = u.sortingColumn.value;
                    (p !== t || p === t && null === p.order) && (p && (p.order = null), u.sortingColumn.value = t, c = t.property), d = t.order = r || null, u.sortProp.value = c, u.sortOrder.value = d, null == o || o.store.commit("changeSortCondition")
                };
            return {
                handleHeaderClick: (e, l) => {
                    !l.filters && l.sortable ? c(e, l, !1) : l.filterable && !l.sortable && s(e), null == o || o.emit("header-click", l, e)
                },
                handleHeaderContextMenu: (e, l) => {
                    null == o || o.emit("header-contextmenu", l, e)
                },
                handleMouseDown: (l, a) => {
                    if (Te && !(a.children && a.children.length > 0) && i.value && e.border) {
                        u.value = !0;
                        const r = o;
                        t("set-drag-visible", !0);
                        const s = (null == r ? void 0 : r.vnode.el).getBoundingClientRect().left,
                            c = n.vnode.el.querySelector(`th.${a.id}`),
                            p = c.getBoundingClientRect(),
                            h = p.left - s + 30;
                        Ue(c, "noclick"), d.value = {
                            startMouseLeft: l.clientX,
                            startLeft: p.right - s,
                            startColumnLeft: p.left - s,
                            tableLeft: s
                        };
                        const v = null == r ? void 0 : r.refs.resizeProxy;
                        v.style.left = `${d.value.startLeft}px`, document.onselectstart = function() {
                            return !1
                        }, document.ondragstart = function() {
                            return !1
                        };
                        const f = e => {
                                const l = e.clientX - d.value.startMouseLeft,
                                    t = d.value.startLeft + l;
                                v.style.left = `${Math.max(h,t)}px`
                            },
                            m = () => {
                                if (u.value) {
                                    const {
                                        startColumnLeft: n,
                                        startLeft: o
                                    } = d.value, s = Number.parseInt(v.style.left, 10) - n;
                                    a.width = a.realWidth = s, null == r || r.emit("header-dragend", a.width, o - n, a, l), requestAnimationFrame((() => {
                                        e.store.scheduleLayout(!1, !0)
                                    })), document.body.style.cursor = "", u.value = !1, i.value = null, d.value = {}, t("set-drag-visible", !1)
                                }
                                document.removeEventListener("mousemove", f), document.removeEventListener("mouseup", m), document.onselectstart = null, document.ondragstart = null, setTimeout((() => {
                                    qe(c, "noclick")
                                }), 0)
                            };
                        document.addEventListener("mousemove", f), document.addEventListener("mouseup", m)
                    }
                },
                handleMouseMove: (l, t) => {
                    if (t.children && t.children.length > 0) return;
                    const n = l.target;
                    if (!Ge(n)) return;
                    const o = null == n ? void 0 : n.closest("th");
                    if (t && t.resizable && !u.value && e.border) {
                        const e = o.getBoundingClientRect(),
                            n = document.body.style;
                        e.width > 12 && e.right - l.pageX < 8 ? (n.cursor = "col-resize", Xe(o, "is-sortable") && (o.style.cursor = "col-resize"), i.value = t) : u.value || (n.cursor = "", Xe(o, "is-sortable") && (o.style.cursor = "pointer"), i.value = null)
                    }
                },
                handleMouseOut: () => {
                    Te && (document.body.style.cursor = "")
                },
                handleSortClick: c,
                handleFilterClick: s
            }
        }(e, n), {
            getHeaderRowStyle: x,
            getHeaderRowClass: C,
            getHeaderCellStyle: S,
            getHeaderCellClass: k
        } = function(e) {
            const t = l(Mt),
                n = p("table");
            return {
                getHeaderRowStyle: e => {
                    const l = null == t ? void 0 : t.props.headerRowStyle;
                    return "function" == typeof l ? l.call(null, {
                        rowIndex: e
                    }) : l
                },
                getHeaderRowClass: e => {
                    const l = [],
                        n = null == t ? void 0 : t.props.headerRowClassName;
                    return "string" == typeof n ? l.push(n) : "function" == typeof n && l.push(n.call(null, {
                        rowIndex: e
                    })), l.join(" ")
                },
                getHeaderCellStyle: (l, n, o, a) => {
                    var r;
                    let s = null != (r = null == t ? void 0 : t.props.headerCellStyle) ? r : {};
                    "function" == typeof s && (s = s.call(null, {
                        rowIndex: l,
                        columnIndex: n,
                        row: o,
                        column: a
                    }));
                    const i = xt(n, a.fixed, e.store, o);
                    return Ct(i, "left"), Ct(i, "right"), Object.assign({}, s, i)
                },
                getHeaderCellClass: (l, o, a, r) => {
                    const s = yt(n.b(), o, r.fixed, e.store, a),
                        i = [r.id, r.order, r.headerAlign, r.className, r.labelClassName, ...s];
                    r.children || i.push("is-leaf"), r.sortable && i.push("is-sortable");
                    const u = null == t ? void 0 : t.props.headerCellClassName;
                    return "string" == typeof u ? i.push(u) : "function" == typeof u && i.push(u.call(null, {
                        rowIndex: l,
                        columnIndex: o,
                        row: a,
                        column: r
                    })), i.push(n.e("cell")), i.filter((e => Boolean(e))).join(" ")
                }
            }
        }(e), {
            isGroup: E,
            toggleAllSelection: N,
            columnRows: R
        } = function(e) {
            const n = l(Mt),
                o = t((() => $t(e.store.states.originColumns.value)));
            return {
                isGroup: t((() => {
                    const e = o.value.length > 1;
                    return e && n && (n.state.isGroup.value = !0), e
                })),
                toggleAllSelection: e => {
                    e.stopPropagation(), null == n || n.store.commit("toggleAllSelection")
                },
                columnRows: o
            }
        }(e);
        return s.state = {
            onColumnsChange: c,
            onScrollableChange: h
        }, s.filterPanels = d, {
            ns: u,
            filterPanels: d,
            onColumnsChange: c,
            onScrollableChange: h,
            columnRows: R,
            getHeaderRowClass: C,
            getHeaderRowStyle: x,
            getHeaderCellClass: k,
            getHeaderCellStyle: S,
            handleHeaderClick: v,
            handleHeaderContextMenu: f,
            handleMouseDown: m,
            handleMouseMove: g,
            handleMouseOut: b,
            handleSortClick: y,
            handleFilterClick: w,
            isGroup: E,
            toggleAllSelection: N
        }
    },
    render() {
        const {
            ns: e,
            isGroup: l,
            columnRows: t,
            getHeaderCellStyle: n,
            getHeaderCellClass: o,
            getHeaderRowClass: a,
            getHeaderRowStyle: r,
            handleHeaderClick: s,
            handleHeaderContextMenu: i,
            handleMouseDown: u,
            handleMouseMove: d,
            handleSortClick: c,
            handleMouseOut: p,
            store: h,
            $parent: v
        } = this;
        let f = 1;
        return P("thead", {
            class: {
                [e.is("group")]: l
            }
        }, t.map(((e, l) => P("tr", {
            class: a(l),
            key: l,
            style: r(l)
        }, e.map(((t, a) => (t.rowSpan > f && (f = t.rowSpan), P("th", {
            class: o(l, a, e, t),
            colspan: t.colSpan,
            key: `${t.id}-thead`,
            rowspan: t.rowSpan,
            style: n(l, a, e, t),
            onClick: e => {
                e.currentTarget.classList.contains("noclick") || s(e, t)
            },
            onContextmenu: e => i(e, t),
            onMousedown: e => u(e, t),
            onMousemove: e => d(e, t),
            onMouseout: p
        }, [P("div", {
            class: ["cell", t.filteredValue && t.filteredValue.length > 0 ? "highlight" : ""]
        }, [t.renderHeader ? t.renderHeader({
            column: t,
            $index: a,
            store: h,
            _self: v
        }) : t.label, t.sortable && P("span", {
            onClick: e => c(e, t),
            class: "caret-wrapper"
        }, [P("i", {
            onClick: e => c(e, t, "ascending"),
            class: "sort-caret ascending"
        }), P("i", {
            onClick: e => c(e, t, "descending"),
            class: "sort-caret descending"
        })]), t.filterable && P(Ht, {
            store: h,
            placement: t.filterPlacement || "bottom-start",
            appendTo: v.appendFilterPanelTo,
            column: t,
            upDataColumn: (e, l) => {
                t[e] = l
            }
        }, {
            "filter-icon": () => t.renderFilterIcon ? t.renderFilterIcon({
                filterOpened: t.filterOpened
            }) : null
        })])]))))))))
    }
});

function It(e, l, t = .03) {
    return e - l > t
}

function zt(e) {
    const t = l(Mt),
        n = r(""),
        o = r(P("div")),
        a = (l, n, o) => {
            var a;
            const r = t,
                s = at(l);
            let i;
            const u = null == (a = null == r ? void 0 : r.vnode.el) ? void 0 : a.dataset.prefix;
            s && (i = it({
                columns: e.store.states.columns.value
            }, s, u), i && (null == r || r.emit(`cell-${o}`, n, i, s, l))), null == r || r.emit(`row-${o}`, n, i, l)
        },
        s = ue((l => {
            e.store.commit("setHoverRow", l)
        }), 30),
        i = ue((() => {
            e.store.commit("setHoverRow", null)
        }), 30),
        u = (e, l, t) => {
            let n = l.target.parentNode;
            for (; e > 1 && (n = null == n ? void 0 : n.nextSibling, n && "TR" === n.nodeName);) t(n, "hover-row hover-fixed-row"), e--
        };
    return {
        handleDoubleClick: (e, l) => {
            a(e, l, "dblclick")
        },
        handleClick: (l, t) => {
            e.store.commit("setCurrentRow", t), a(l, t, "click")
        },
        handleContextMenu: (e, l) => {
            a(e, l, "contextmenu")
        },
        handleMouseEnter: s,
        handleMouseLeave: i,
        handleCellMouseEnter: (l, n, o) => {
            var a;
            const r = t,
                s = at(l),
                i = null == (a = null == r ? void 0 : r.vnode.el) ? void 0 : a.dataset.prefix;
            if (s) {
                const t = it({
                    columns: e.store.states.columns.value
                }, s, i);
                s.rowSpan > 1 && u(s.rowSpan, l, Ue);
                const o = r.hoverState = {
                    cell: s,
                    column: t,
                    row: n
                };
                null == r || r.emit("cell-mouse-enter", o.row, o.column, o.cell, l)
            }
            if (!o) return;
            const d = l.target.querySelector(".cell");
            if (!Xe(d, `${i}-tooltip`) || !d.childNodes.length) return;
            const c = document.createRange();
            c.setStart(d, 0), c.setEnd(d, d.childNodes.length);
            const {
                width: p,
                height: h
            } = c.getBoundingClientRect(), {
                width: v,
                height: f
            } = d.getBoundingClientRect(), {
                top: m,
                left: g,
                right: b,
                bottom: y
            } = (e => {
                const l = window.getComputedStyle(e, null);
                return {
                    left: Number.parseInt(l.paddingLeft, 10) || 0,
                    right: Number.parseInt(l.paddingRight, 10) || 0,
                    top: Number.parseInt(l.paddingTop, 10) || 0,
                    bottom: Number.parseInt(l.paddingBottom, 10) || 0
                }
            })(d), w = m + y;
            (It(p + (g + b), v) || It(h + w, f) || It(d.scrollWidth, v)) && function(e, l, t, n) {
                if ((null == ft ? void 0 : ft.trigger) === t) return;
                null == ft || ft();
                const o = null == n ? void 0 : n.refs.tableWrapper,
                    a = null == o ? void 0 : o.dataset.prefix,
                    r = {
                        strategy: "fixed",
                        ...e.popperOptions
                    },
                    s = T(Fe, {
                        content: l,
                        virtualTriggering: !0,
                        virtualRef: t,
                        appendTo: o,
                        placement: "top",
                        transition: "none",
                        offset: 0,
                        hideAfter: 0,
                        ...e,
                        popperOptions: r,
                        onHide: () => {
                            null == ft || ft()
                        }
                    });
                s.appContext = { ...n.appContext,
                    ...n
                };
                const i = document.createElement("div");
                M(s, i), s.component.exposed.onOpen();
                const u = null == o ? void 0 : o.querySelector(`.${a}-scrollbar__wrap`);
                ft = () => {
                    M(null, i), null == u || u.removeEventListener("scroll", ft), ft = null
                }, ft.trigger = t, null == u || u.addEventListener("scroll", ft)
            }(o, s.innerText || s.textContent, s, r)
        },
        handleCellMouseLeave: e => {
            const l = at(e);
            if (!l) return;
            l.rowSpan > 1 && u(l.rowSpan, e, qe);
            const n = null == t ? void 0 : t.hoverState;
            null == t || t.emit("cell-mouse-leave", null == n ? void 0 : n.row, null == n ? void 0 : n.column, null == n ? void 0 : n.cell, e)
        },
        tooltipContent: n,
        tooltipTrigger: o
    }
}

function Kt(e) {
    const n = l(Mt),
        o = p("table"),
        {
            handleDoubleClick: a,
            handleClick: r,
            handleContextMenu: s,
            handleMouseEnter: i,
            handleMouseLeave: u,
            handleCellMouseEnter: d,
            handleCellMouseLeave: c,
            tooltipContent: h,
            tooltipTrigger: v
        } = zt(e),
        {
            getRowStyle: f,
            getRowClass: m,
            getCellStyle: g,
            getCellClass: b,
            getSpan: y,
            getColspanRealWidth: w
        } = function(e) {
            const t = l(Mt),
                n = p("table");
            return {
                getRowStyle: (e, l) => {
                    const n = null == t ? void 0 : t.props.rowStyle;
                    return "function" == typeof n ? n.call(null, {
                        row: e,
                        rowIndex: l
                    }) : n || null
                },
                getRowClass: (l, o) => {
                    const a = [n.e("row")];
                    (null == t ? void 0 : t.props.highlightCurrentRow) && l === e.store.states.currentRow.value && a.push("current-row"), e.stripe && o % 2 == 1 && a.push(n.em("row", "striped"));
                    const r = null == t ? void 0 : t.props.rowClassName;
                    return "string" == typeof r ? a.push(r) : "function" == typeof r && a.push(r.call(null, {
                        row: l,
                        rowIndex: o
                    })), a
                },
                getCellStyle: (l, n, o, a) => {
                    const r = null == t ? void 0 : t.props.cellStyle;
                    let s = null != r ? r : {};
                    "function" == typeof r && (s = r.call(null, {
                        rowIndex: l,
                        columnIndex: n,
                        row: o,
                        column: a
                    }));
                    const i = xt(n, null == e ? void 0 : e.fixed, e.store);
                    return Ct(i, "left"), Ct(i, "right"), Object.assign({}, s, i)
                },
                getCellClass: (l, o, a, r, s) => {
                    const i = yt(n.b(), o, null == e ? void 0 : e.fixed, e.store, void 0, s),
                        u = [r.id, r.align, r.className, ...i],
                        d = null == t ? void 0 : t.props.cellClassName;
                    return "string" == typeof d ? u.push(d) : "function" == typeof d && u.push(d.call(null, {
                        rowIndex: l,
                        columnIndex: o,
                        row: a,
                        column: r
                    })), u.push(n.e("cell")), u.filter((e => Boolean(e))).join(" ")
                },
                getSpan: (e, l, n, o) => {
                    let a = 1,
                        r = 1;
                    const s = null == t ? void 0 : t.props.spanMethod;
                    if ("function" == typeof s) {
                        const t = s({
                            row: e,
                            column: l,
                            rowIndex: n,
                            columnIndex: o
                        });
                        Array.isArray(t) ? (a = t[0], r = t[1]) : "object" == typeof t && (a = t.rowspan, r = t.colspan)
                    }
                    return {
                        rowspan: a,
                        colspan: r
                    }
                },
                getColspanRealWidth: (e, l, t) => {
                    if (l < 1) return e[t].realWidth;
                    const n = e.map((({
                        realWidth: e,
                        width: l
                    }) => e || l)).slice(t, t + l);
                    return Number(n.reduce(((e, l) => Number(e) + Number(l)), -1))
                }
            }
        }(e),
        x = t((() => e.store.states.columns.value.findIndex((({
            type: e
        }) => "default" === e)))),
        C = (e, l) => {
            const t = n.props.rowKey;
            return t ? ut(e, t) : l
        },
        S = (l, t, p, h = !1) => {
            const {
                tooltipEffect: v,
                tooltipOptions: S,
                store: E
            } = e, {
                indent: N,
                columns: R
            } = E.states, L = m(l, t);
            let O = !0;
            p && (L.push(o.em("row", `level-${p.level}`)), O = p.display);
            return P("tr", {
                style: [O ? null : {
                    display: "none"
                }, f(l, t)],
                class: L,
                key: C(l, t),
                onDblclick: e => a(e, l),
                onClick: e => r(e, l),
                onContextmenu: e => s(e, l),
                onMouseenter: () => i(t),
                onMouseleave: u
            }, R.value.map(((o, a) => {
                const {
                    rowspan: r,
                    colspan: s
                } = y(l, o, t, a);
                if (!r || !s) return null;
                const i = Object.assign({}, o);
                i.realWidth = w(R.value, s, a);
                const u = {
                    store: e.store,
                    _self: e.context || n,
                    column: i,
                    row: l,
                    $index: t,
                    cellIndex: a,
                    expanded: h
                };
                a === x.value && p && (u.treeNode = {
                    indent: p.level * N.value,
                    level: p.level
                }, "boolean" == typeof p.expanded && (u.treeNode.expanded = p.expanded, "loading" in p && (u.treeNode.loading = p.loading), "noLazyChildren" in p && (u.treeNode.noLazyChildren = p.noLazyChildren)));
                const f = `${C(l,t)},${a}`,
                    m = i.columnKey || i.rawColumnKey || "",
                    E = k(a, o, u),
                    L = o.showOverflowTooltip && bl({
                        effect: v
                    }, S, o.showOverflowTooltip);
                return P("td", {
                    style: g(t, a, l, o),
                    class: b(t, a, l, o, s - 1),
                    key: `${m}${f}`,
                    rowspan: r,
                    colspan: s,
                    onMouseenter: e => d(e, l, L),
                    onMouseleave: c
                }, [E])
            })))
        },
        k = (e, l, t) => l.renderCell(t);
    return {
        wrappedRowRender: (l, t) => {
            const a = e.store,
                {
                    isRowExpanded: r,
                    assertRowKey: s
                } = a,
                {
                    treeData: i,
                    lazyTreeNodeMap: u,
                    childrenColumnName: d,
                    rowKey: c
                } = a.states,
                p = a.states.columns.value;
            if (p.some((({
                    type: e
                }) => "expand" === e))) {
                const e = r(l),
                    s = S(l, t, void 0, e),
                    i = n.renderExpanded;
                return e ? i ? [
                    [s, P("tr", {
                        key: `expanded-row__${s.key}`
                    }, [P("td", {
                        colspan: p.length,
                        class: `${o.e("cell")} ${o.e("expanded-cell")}`
                    }, [i({
                        row: l,
                        $index: t,
                        store: a,
                        expanded: e
                    })])])]
                ] : (console.error("[Element Error]renderExpanded is required."), s) : [
                    [s]
                ]
            }
            if (Object.keys(i.value).length) {
                s();
                const e = ut(l, c.value);
                let n = i.value[e],
                    o = null;
                n && (o = {
                    expanded: n.expanded,
                    level: n.level,
                    display: !0
                }, "boolean" == typeof n.lazy && ("boolean" == typeof n.loaded && n.loaded && (o.noLazyChildren = !(n.children && n.children.length)), o.loading = n.loading));
                const a = [S(l, t, o)];
                if (n) {
                    let o = 0;
                    const r = (e, l) => {
                        e && e.length && l && e.forEach((e => {
                            const s = {
                                    display: l.display && l.expanded,
                                    level: l.level + 1,
                                    expanded: !1,
                                    noLazyChildren: !1,
                                    loading: !1
                                },
                                p = ut(e, c.value);
                            if (null == p) throw new Error("For nested data item, row-key is required.");
                            if (n = { ...i.value[p]
                                }, n && (s.expanded = n.expanded, n.level = n.level || s.level, n.display = !(!n.expanded || !s.display), "boolean" == typeof n.lazy && ("boolean" == typeof n.loaded && n.loaded && (s.noLazyChildren = !(n.children && n.children.length)), s.loading = n.loading)), o++, a.push(S(e, t + o, s)), n) {
                                const l = u.value[p] || e[d.value];
                                r(l, n)
                            }
                        }))
                    };
                    n.display = !0;
                    const s = u.value[e] || l[d.value];
                    r(s, n)
                }
                return a
            }
            return S(l, t, void 0)
        },
        tooltipContent: h,
        tooltipTrigger: v
    }
}
var Dt = d({
    name: "ElTableBody",
    props: {
        store: {
            required: !0,
            type: Object
        },
        stripe: Boolean,
        tooltipEffect: String,
        tooltipOptions: {
            type: Object
        },
        context: {
            default: () => ({}),
            type: Object
        },
        rowClassName: [String, Function],
        rowStyle: [Object, Function],
        fixed: {
            type: String,
            default: ""
        },
        highlight: Boolean
    },
    setup(e) {
        const t = a(),
            o = l(Mt),
            r = p("table"),
            {
                wrappedRowRender: s,
                tooltipContent: i,
                tooltipTrigger: u
            } = Kt(e),
            {
                onColumnsChange: d,
                onScrollableChange: c
            } = Tt(o),
            h = [];
        return n(e.store.states.hoverRow, ((l, n) => {
            var o;
            const a = null == t ? void 0 : t.vnode.el,
                s = Array.from((null == a ? void 0 : a.children) || []).filter((e => null == e ? void 0 : e.classList.contains(`${r.e("row")}`)));
            let i = l;
            const u = null == (o = s[i]) ? void 0 : o.childNodes;
            if (null == u ? void 0 : u.length) {
                let e = 0;
                Array.from(u).reduce(((l, t, n) => {
                    var o, a;
                    return (null == (o = u[n]) ? void 0 : o.colSpan) > 1 && (e = null == (a = u[n]) ? void 0 : a.colSpan), "TD" !== t.nodeName && 0 === e && l.push(n), e > 0 && e--, l
                }), []).forEach((e => {
                    var t;
                    for (i = l; i > 0;) {
                        const l = null == (t = s[i - 1]) ? void 0 : t.childNodes;
                        if (l[e] && "TD" === l[e].nodeName && l[e].rowSpan > 1) {
                            Ue(l[e], "hover-cell"), h.push(l[e]);
                            break
                        }
                        i--
                    }
                }))
            } else h.forEach((e => qe(e, "hover-cell"))), h.length = 0;
            var d;
            e.store.states.isComplex.value && Te && (d = () => {
                const e = s[n],
                    t = s[l];
                e && !e.classList.contains("hover-fixed-row") && qe(e, "hover-row"), t && Ue(t, "hover-row")
            }, Te ? window.requestAnimationFrame(d) : setTimeout(d, 16))
        })), D((() => {
            var e;
            null == (e = ft) || e()
        })), {
            ns: r,
            onColumnsChange: d,
            onScrollableChange: c,
            wrappedRowRender: s,
            tooltipContent: i,
            tooltipTrigger: u
        }
    },
    render() {
        const {
            wrappedRowRender: e,
            store: l
        } = this, t = l.states.data.value || [];
        return P("tbody", {
            tabIndex: -1
        }, [t.reduce(((l, t) => l.concat(e(t, l.length))), [])])
    }
});

function Pt(e) {
    const {
        columns: n
    } = function() {
        const e = l(Mt),
            n = null == e ? void 0 : e.store;
        return {
            leftFixedLeafCount: t((() => n.states.fixedLeafColumnsLength.value)),
            rightFixedLeafCount: t((() => n.states.rightFixedColumns.value.length)),
            columnsCount: t((() => n.states.columns.value.length)),
            leftFixedCount: t((() => n.states.fixedColumns.value.length)),
            rightFixedCount: t((() => n.states.rightFixedColumns.value.length)),
            columns: n.states.columns
        }
    }(), o = p("table");
    return {
        getCellClasses: (l, t) => {
            const n = l[t],
                a = [o.e("cell"), n.id, n.align, n.labelClassName, ...yt(o.b(), t, n.fixed, e.store)];
            return n.className && a.push(n.className), n.children || a.push(o.is("leaf")), a
        },
        getCellStyles: (l, t) => {
            const n = xt(t, l.fixed, e.store);
            return Ct(n, "left"), Ct(n, "right"), n
        },
        columns: n
    }
}
var jt = d({
    name: "ElTableFooter",
    props: {
        fixed: {
            type: String,
            default: ""
        },
        store: {
            required: !0,
            type: Object
        },
        summaryMethod: Function,
        sumText: String,
        border: Boolean,
        defaultSort: {
            type: Object,
            default: () => ({
                prop: "",
                order: ""
            })
        }
    },
    setup(e) {
        const {
            getCellClasses: l,
            getCellStyles: t,
            columns: n
        } = Pt(e);
        return {
            ns: p("table"),
            getCellClasses: l,
            getCellStyles: t,
            columns: n
        }
    },
    render() {
        const {
            columns: e,
            getCellStyles: l,
            getCellClasses: t,
            summaryMethod: n,
            sumText: o
        } = this, a = this.store.states.data.value;
        let r = [];
        return n ? r = n({
            columns: e,
            data: a
        }) : e.forEach(((e, l) => {
            if (0 === l) return void(r[l] = o);
            const t = a.map((l => Number(l[e.property]))),
                n = [];
            let s = !0;
            t.forEach((e => {
                if (!Number.isNaN(+e)) {
                    s = !1;
                    const l = `${e}`.split(".")[1];
                    n.push(l ? l.length : 0)
                }
            }));
            const i = Math.max.apply(null, n);
            r[l] = s ? "" : t.reduce(((e, l) => {
                const t = Number(l);
                return Number.isNaN(+t) ? e : Number.parseFloat((e + l).toFixed(Math.min(i, 20)))
            }), 0)
        })), P(P("tfoot", [P("tr", {}, [...e.map(((n, o) => P("td", {
            key: o,
            colspan: n.colSpan,
            rowspan: n.rowSpan,
            class: t(e, o),
            style: l(n, o)
        }, [P("div", {
            class: ["cell", n.labelClassName]
        }, [r[o]])])))])]))
    }
});

function _t(e, l, a, s) {
    const i = r(!1),
        u = r(null),
        d = r(!1),
        c = r({
            width: null,
            height: null,
            headerHeight: null
        }),
        p = r(!1),
        h = r(),
        v = r(0),
        f = r(0),
        m = r(0),
        g = r(0),
        y = r(0);
    j((() => {
        l.setHeight(e.height)
    })), j((() => {
        l.setMaxHeight(e.maxHeight)
    })), n((() => [e.currentRowKey, a.states.rowKey]), (([e, l]) => {
        b(l) && b(e) && a.setCurrentRowKey(`${e}`)
    }), {
        immediate: !0
    }), n((() => e.data), (e => {
        s.store.commit("setData", e)
    }), {
        immediate: !0,
        deep: !0
    }), j((() => {
        e.expandRowKeys && a.setExpandRowKeysAdapter(e.expandRowKeys)
    }));
    const w = t((() => e.height || e.maxHeight || a.states.fixedColumns.value.length > 0 || a.states.rightFixedColumns.value.length > 0)),
        x = t((() => ({
            width: l.bodyWidth.value ? `${l.bodyWidth.value}px` : ""
        }))),
        C = () => {
            w.value && l.updateElsHeight(), l.updateColumnsWidth(), requestAnimationFrame(k)
        };
    z((async () => {
        await o(), a.updateColumns(), E(), requestAnimationFrame(C);
        const l = s.vnode.el,
            t = s.refs.headerWrapper;
        e.flexible && l && l.parentElement && (l.parentElement.style.minWidth = "0"), c.value = {
            width: h.value = l.offsetWidth,
            height: l.offsetHeight,
            headerHeight: e.showHeader && t ? t.offsetHeight : null
        }, a.states.columns.value.forEach((e => {
            e.filteredValue && e.filteredValue.length && s.store.commit("filterChange", {
                column: e,
                values: e.filteredValue,
                silent: !0
            })
        })), s.$ready = !0
    }));
    const S = e => {
            const {
                tableWrapper: t
            } = s.refs;
            ((e, t) => {
                if (!e) return;
                const n = Array.from(e.classList).filter((e => !e.startsWith("is-scrolling-")));
                n.push(l.scrollX.value ? t : "is-scrolling-none"), e.className = n.join(" ")
            })(t, e)
        },
        k = function() {
            if (!s.refs.scrollBarRef) return;
            if (!l.scrollX.value) {
                const e = "is-scrolling-none";
                return void((e => {
                    const {
                        tableWrapper: l
                    } = s.refs;
                    return !(!l || !l.classList.contains(e))
                })(e) || S(e))
            }
            const e = s.refs.scrollBarRef.wrapRef;
            if (!e) return;
            const {
                scrollLeft: t,
                offsetWidth: n,
                scrollWidth: o
            } = e, {
                headerWrapper: a,
                footerWrapper: r
            } = s.refs;
            a && (a.scrollLeft = t), r && (r.scrollLeft = t);
            S(t >= o - n - 1 ? "is-scrolling-right" : 0 === t ? "is-scrolling-left" : "is-scrolling-middle")
        },
        E = () => {
            s.refs.scrollBarRef && (s.refs.scrollBarRef.wrapRef && We(s.refs.scrollBarRef.wrapRef, "scroll", k, {
                passive: !0
            }), e.fit ? He(s.vnode.el, N) : We(window, "resize", N), He(s.refs.bodyWrapper, (() => {
                var e, l;
                N(), null == (l = null == (e = s.refs) ? void 0 : e.scrollBarRef) || l.update()
            })))
        },
        N = () => {
            var l, t, n, o;
            const a = s.vnode.el;
            if (!s.$ready || !a) return;
            let r = !1;
            const {
                width: i,
                height: u,
                headerHeight: d
            } = c.value, p = h.value = a.offsetWidth;
            i !== p && (r = !0);
            const b = a.offsetHeight;
            (e.height || w.value) && u !== b && (r = !0);
            const x = "fixed" === e.tableLayout ? s.refs.headerWrapper : null == (l = s.refs.tableHeaderRef) ? void 0 : l.$el;
            e.showHeader && (null == x ? void 0 : x.offsetHeight) !== d && (r = !0), v.value = (null == (t = s.refs.tableWrapper) ? void 0 : t.scrollHeight) || 0, m.value = (null == x ? void 0 : x.scrollHeight) || 0, g.value = (null == (n = s.refs.footerWrapper) ? void 0 : n.offsetHeight) || 0, y.value = (null == (o = s.refs.appendWrapper) ? void 0 : o.offsetHeight) || 0, f.value = v.value - m.value - g.value - y.value, r && (c.value = {
                width: p,
                height: b,
                headerHeight: e.showHeader && (null == x ? void 0 : x.offsetHeight) || 0
            }, C())
        },
        R = ae(),
        L = t((() => {
            const {
                bodyWidth: e,
                scrollY: t,
                gutterWidth: n
            } = l;
            return e.value ? e.value - (t.value ? n : 0) + "px" : ""
        })),
        O = t((() => e.maxHeight ? "fixed" : e.tableLayout)),
        F = t((() => {
            if (e.data && e.data.length) return null;
            let l = "100%";
            e.height && f.value && (l = `${f.value}px`);
            const t = h.value;
            return {
                width: t ? `${t}px` : "",
                height: l
            }
        })),
        A = t((() => e.height ? {
            height: Number.isNaN(Number(e.height)) ? e.height : `${e.height}px`
        } : e.maxHeight ? {
            maxHeight: Number.isNaN(Number(e.maxHeight)) ? e.maxHeight : `${e.maxHeight}px`
        } : {})),
        W = t((() => e.height ? {
            height: "100%"
        } : e.maxHeight ? Number.isNaN(Number(e.maxHeight)) ? {
            maxHeight: `calc(${e.maxHeight} - ${m.value+g.value}px)`
        } : {
            maxHeight: e.maxHeight - m.value - g.value + "px"
        } : {}));
    return {
        isHidden: i,
        renderExpanded: u,
        setDragVisible: e => {
            d.value = e
        },
        isGroup: p,
        handleMouseLeave: () => {
            s.store.commit("setHoverRow", null), s.hoverState && (s.hoverState = null)
        },
        handleHeaderFooterMousewheel: (e, l) => {
            const {
                pixelX: t,
                pixelY: n
            } = l;
            Math.abs(t) >= Math.abs(n) && (s.refs.bodyWrapper.scrollLeft += l.pixelX / 5)
        },
        tableSize: R,
        emptyBlockStyle: F,
        handleFixedMousewheel: (e, l) => {
            const t = s.refs.bodyWrapper;
            if (Math.abs(l.spinY) > 0) {
                const n = t.scrollTop;
                l.pixelY < 0 && 0 !== n && e.preventDefault(), l.pixelY > 0 && t.scrollHeight - t.clientHeight > n && e.preventDefault(), t.scrollTop += Math.ceil(l.pixelY / 5)
            } else t.scrollLeft += Math.ceil(l.pixelX / 5)
        },
        resizeProxyVisible: d,
        bodyWidth: L,
        resizeState: c,
        doLayout: C,
        tableBodyStyles: x,
        tableLayout: O,
        scrollbarViewStyle: {
            display: "inline-block",
            verticalAlign: "middle"
        },
        tableInnerStyle: A,
        scrollbarStyle: W
    }
}

function Yt(e) {
    const l = r();
    z((() => {
        (() => {
            const t = e.vnode.el.querySelector(".hidden-columns"),
                n = e.store.states.updateOrderFns;
            l.value = new MutationObserver((() => {
                n.forEach((e => e()))
            })), l.value.observe(t, {
                childList: !0,
                subtree: !0
            })
        })()
    })), D((() => {
        var e;
        null == (e = l.value) || e.disconnect()
    }))
}
var Ut = {
    data: {
        type: Array,
        default: () => []
    },
    size: ee,
    width: [String, Number],
    height: [String, Number],
    maxHeight: [String, Number],
    fit: {
        type: Boolean,
        default: !0
    },
    stripe: Boolean,
    border: Boolean,
    rowKey: [String, Function],
    showHeader: {
        type: Boolean,
        default: !0
    },
    showSummary: Boolean,
    sumText: String,
    summaryMethod: Function,
    rowClassName: [String, Function],
    rowStyle: [Object, Function],
    cellClassName: [String, Function],
    cellStyle: [Object, Function],
    headerRowClassName: [String, Function],
    headerRowStyle: [Object, Function],
    headerCellClassName: [String, Function],
    headerCellStyle: [Object, Function],
    highlightCurrentRow: Boolean,
    currentRowKey: [String, Number],
    emptyText: String,
    expandRowKeys: Array,
    defaultExpandAll: Boolean,
    defaultSort: Object,
    tooltipEffect: String,
    tooltipOptions: Object,
    spanMethod: Function,
    selectOnIndeterminate: {
        type: Boolean,
        default: !0
    },
    indent: {
        type: Number,
        default: 16
    },
    treeProps: {
        type: Object,
        default: () => ({
            hasChildren: "hasChildren",
            children: "children",
            checkStrictly: !1
        })
    },
    lazy: Boolean,
    load: Function,
    style: {
        type: Object,
        default: () => ({})
    },
    className: {
        type: String,
        default: ""
    },
    tableLayout: {
        type: String,
        default: "fixed"
    },
    scrollbarAlwaysOn: Boolean,
    flexible: Boolean,
    showOverflowTooltip: [Boolean, Object],
    appendFilterPanelTo: String,
    scrollbarTabindex: {
        type: [Number, String],
        default: void 0
    }
};

function Gt(e) {
    const l = "auto" === e.tableLayout;
    let t = e.columns || [];
    l && t.every((e => void 0 === e.width)) && (t = []);
    return P("colgroup", {}, t.map((t => P("col", (t => {
        const n = {
            key: `${e.tableLayout}_${t.id}`,
            style: {},
            name: void 0
        };
        return l ? n.style = {
            width: `${t.width}px`
        } : n.name = t.id, n
    })(t)))))
}
Gt.props = ["columns", "tableLayout"];
let Xt = 1;
var qt = Ie(d({
    name: "ElTable",
    directives: {
        Mousewheel: jl
    },
    components: {
        TableHeader: Vt,
        TableBody: Dt,
        TableFooter: jt,
        ElScrollbar: de,
        hColgroup: Gt
    },
    props: Ut,
    emits: ["select", "select-all", "selection-change", "cell-mouse-enter", "cell-mouse-leave", "cell-contextmenu", "cell-click", "cell-dblclick", "row-click", "row-contextmenu", "row-dblclick", "header-click", "header-contextmenu", "sort-change", "filter-change", "current-change", "header-dragend", "expand-change"],
    setup(e) {
        const {
            t: l
        } = ce(), n = p("table"), o = a();
        A(Mt, o);
        const s = Lt(o, e);
        o.store = s;
        const i = new At({
            store: o.store,
            table: o,
            fit: e.fit,
            showHeader: e.showHeader
        });
        o.layout = i;
        const u = t((() => 0 === (s.states.data.value || []).length)),
            {
                setCurrentRow: d,
                getSelectionRows: c,
                toggleRowSelection: h,
                clearSelection: v,
                clearFilter: f,
                toggleAllSelection: m,
                toggleRowExpansion: g,
                clearSort: b,
                sort: y,
                updateKeyChildren: w
            } = function(e) {
                return {
                    setCurrentRow: l => {
                        e.commit("setCurrentRow", l)
                    },
                    getSelectionRows: () => e.getSelectionRows(),
                    toggleRowSelection: (l, t, n = !0) => {
                        e.toggleRowSelection(l, t, !1, n), e.updateAllSelected()
                    },
                    clearSelection: () => {
                        e.clearSelection()
                    },
                    clearFilter: l => {
                        e.clearFilter(l)
                    },
                    toggleAllSelection: () => {
                        e.commit("toggleAllSelection")
                    },
                    toggleRowExpansion: (l, t) => {
                        e.toggleRowExpansionAdapter(l, t)
                    },
                    clearSort: () => {
                        e.clearSort()
                    },
                    sort: (l, t) => {
                        e.commit("sort", {
                            prop: l,
                            order: t
                        })
                    },
                    updateKeyChildren: (l, t) => {
                        e.updateKeyChildren(l, t)
                    }
                }
            }(s),
            {
                isHidden: x,
                renderExpanded: C,
                setDragVisible: S,
                isGroup: k,
                handleMouseLeave: E,
                handleHeaderFooterMousewheel: N,
                tableSize: R,
                emptyBlockStyle: L,
                handleFixedMousewheel: O,
                resizeProxyVisible: F,
                bodyWidth: W,
                resizeState: H,
                doLayout: T,
                tableBodyStyles: M,
                tableLayout: B,
                scrollbarViewStyle: $,
                tableInnerStyle: V,
                scrollbarStyle: I
            } = _t(e, i, s, o),
            {
                scrollBarRef: z,
                scrollTo: K,
                setScrollLeft: D,
                setScrollTop: P
            } = (() => {
                const e = r(),
                    l = (l, t) => {
                        const n = e.value;
                        n && Me(t) && ["Top", "Left"].includes(l) && n[`setScroll${l}`](t)
                    };
                return {
                    scrollBarRef: e,
                    scrollTo: (l, t) => {
                        const n = e.value;
                        n && n.scrollTo(l, t)
                    },
                    setScrollTop: e => l("Top", e),
                    setScrollLeft: e => l("Left", e)
                }
            })(),
            j = ue(T, 50),
            _ = `${n.namespace.value}-table_${Xt++}`;
        o.tableId = _, o.state = {
            isGroup: k,
            resizeState: H,
            doLayout: T,
            debouncedUpdateLayout: j
        };
        const Y = t((() => {
                var t;
                return null != (t = e.sumText) ? t : l("el.table.sumText")
            })),
            U = t((() => {
                var t;
                return null != (t = e.emptyText) ? t : l("el.table.emptyText")
            })),
            G = t((() => $t(s.states.originColumns.value)[0]));
        return Yt(o), {
            ns: n,
            layout: i,
            store: s,
            columns: G,
            handleHeaderFooterMousewheel: N,
            handleMouseLeave: E,
            tableId: _,
            tableSize: R,
            isHidden: x,
            isEmpty: u,
            renderExpanded: C,
            resizeProxyVisible: F,
            resizeState: H,
            isGroup: k,
            bodyWidth: W,
            tableBodyStyles: M,
            emptyBlockStyle: L,
            debouncedUpdateLayout: j,
            handleFixedMousewheel: O,
            setCurrentRow: d,
            getSelectionRows: c,
            toggleRowSelection: h,
            clearSelection: v,
            clearFilter: f,
            toggleAllSelection: m,
            toggleRowExpansion: g,
            clearSort: b,
            doLayout: T,
            sort: y,
            updateKeyChildren: w,
            t: l,
            setDragVisible: S,
            context: o,
            computedSumText: Y,
            computedEmptyText: U,
            tableLayout: B,
            scrollbarViewStyle: $,
            tableInnerStyle: V,
            scrollbarStyle: I,
            scrollBarRef: z,
            scrollTo: K,
            setScrollLeft: D,
            setScrollTop: P
        }
    }
}), [
    ["render", function(e, l, t, n, o, a) {
        const r = B("hColgroup"),
            s = B("table-header"),
            i = B("table-body"),
            u = B("table-footer"),
            d = B("el-scrollbar"),
            c = $("mousewheel");
        return h(), w("div", {
            ref: "tableWrapper",
            class: g([{
                [e.ns.m("fit")]: e.fit,
                [e.ns.m("striped")]: e.stripe,
                [e.ns.m("border")]: e.border || e.isGroup,
                [e.ns.m("hidden")]: e.isHidden,
                [e.ns.m("group")]: e.isGroup,
                [e.ns.m("fluid-height")]: e.maxHeight,
                [e.ns.m("scrollable-x")]: e.layout.scrollX.value,
                [e.ns.m("scrollable-y")]: e.layout.scrollY.value,
                [e.ns.m("enable-row-hover")]: !e.store.states.isComplex.value,
                [e.ns.m("enable-row-transition")]: 0 !== (e.store.states.data.value || []).length && (e.store.states.data.value || []).length < 100,
                "has-footer": e.showSummary
            }, e.ns.m(e.tableSize), e.className, e.ns.b(), e.ns.m(`layout-${e.tableLayout}`)]),
            style: F(e.style),
            "data-prefix": e.ns.namespace.value,
            onMouseleave: e.handleMouseLeave
        }, [m("div", {
            class: g(e.ns.e("inner-wrapper")),
            style: F(e.tableInnerStyle)
        }, [m("div", {
            ref: "hiddenColumns",
            class: "hidden-columns"
        }, [k(e.$slots, "default")], 512), e.showHeader && "fixed" === e.tableLayout ? y((h(), w("div", {
            key: 0,
            ref: "headerWrapper",
            class: g(e.ns.e("header-wrapper"))
        }, [m("table", {
            ref: "tableHeader",
            class: g(e.ns.e("header")),
            style: F(e.tableBodyStyles),
            border: "0",
            cellpadding: "0",
            cellspacing: "0"
        }, [T(r, {
            columns: e.store.states.columns.value,
            "table-layout": e.tableLayout
        }, null, 8, ["columns", "table-layout"]), T(s, {
            ref: "tableHeaderRef",
            border: e.border,
            "default-sort": e.defaultSort,
            store: e.store,
            "append-filter-panel-to": e.appendFilterPanelTo,
            onSetDragVisible: e.setDragVisible
        }, null, 8, ["border", "default-sort", "store", "append-filter-panel-to", "onSetDragVisible"])], 6)], 2)), [
            [c, e.handleHeaderFooterMousewheel]
        ]) : L("v-if", !0), m("div", {
            ref: "bodyWrapper",
            class: g(e.ns.e("body-wrapper"))
        }, [T(d, {
            ref: "scrollBarRef",
            "view-style": e.scrollbarViewStyle,
            "wrap-style": e.scrollbarStyle,
            always: e.scrollbarAlwaysOn,
            tabindex: e.scrollbarTabindex
        }, {
            default: f((() => [m("table", {
                ref: "tableBody",
                class: g(e.ns.e("body")),
                cellspacing: "0",
                cellpadding: "0",
                border: "0",
                style: F({
                    width: e.bodyWidth,
                    tableLayout: e.tableLayout
                })
            }, [T(r, {
                columns: e.store.states.columns.value,
                "table-layout": e.tableLayout
            }, null, 8, ["columns", "table-layout"]), e.showHeader && "auto" === e.tableLayout ? (h(), v(s, {
                key: 0,
                ref: "tableHeaderRef",
                class: g(e.ns.e("body-header")),
                border: e.border,
                "default-sort": e.defaultSort,
                store: e.store,
                "append-filter-panel-to": e.appendFilterPanelTo,
                onSetDragVisible: e.setDragVisible
            }, null, 8, ["class", "border", "default-sort", "store", "append-filter-panel-to", "onSetDragVisible"])) : L("v-if", !0), T(i, {
                context: e.context,
                highlight: e.highlightCurrentRow,
                "row-class-name": e.rowClassName,
                "tooltip-effect": e.tooltipEffect,
                "tooltip-options": e.tooltipOptions,
                "row-style": e.rowStyle,
                store: e.store,
                stripe: e.stripe
            }, null, 8, ["context", "highlight", "row-class-name", "tooltip-effect", "tooltip-options", "row-style", "store", "stripe"]), e.showSummary && "auto" === e.tableLayout ? (h(), v(u, {
                key: 1,
                class: g(e.ns.e("body-footer")),
                border: e.border,
                "default-sort": e.defaultSort,
                store: e.store,
                "sum-text": e.computedSumText,
                "summary-method": e.summaryMethod
            }, null, 8, ["class", "border", "default-sort", "store", "sum-text", "summary-method"])) : L("v-if", !0)], 6), e.isEmpty ? (h(), w("div", {
                key: 0,
                ref: "emptyBlock",
                style: F(e.emptyBlockStyle),
                class: g(e.ns.e("empty-block"))
            }, [m("span", {
                class: g(e.ns.e("empty-text"))
            }, [k(e.$slots, "empty", {}, (() => [N(R(e.computedEmptyText), 1)]))], 2)], 6)) : L("v-if", !0), e.$slots.append ? (h(), w("div", {
                key: 1,
                ref: "appendWrapper",
                class: g(e.ns.e("append-wrapper"))
            }, [k(e.$slots, "append")], 2)) : L("v-if", !0)])),
            _: 3
        }, 8, ["view-style", "wrap-style", "always", "tabindex"])], 2), e.showSummary && "fixed" === e.tableLayout ? y((h(), w("div", {
            key: 1,
            ref: "footerWrapper",
            class: g(e.ns.e("footer-wrapper"))
        }, [m("table", {
            class: g(e.ns.e("footer")),
            cellspacing: "0",
            cellpadding: "0",
            border: "0",
            style: F(e.tableBodyStyles)
        }, [T(r, {
            columns: e.store.states.columns.value,
            "table-layout": e.tableLayout
        }, null, 8, ["columns", "table-layout"]), T(u, {
            border: e.border,
            "default-sort": e.defaultSort,
            store: e.store,
            "sum-text": e.computedSumText,
            "summary-method": e.summaryMethod
        }, null, 8, ["border", "default-sort", "store", "sum-text", "summary-method"])], 6)], 2)), [
            [_, !e.isEmpty],
            [c, e.handleHeaderFooterMousewheel]
        ]) : L("v-if", !0), e.border || e.isGroup ? (h(), w("div", {
            key: 2,
            class: g(e.ns.e("border-left-patch"))
        }, null, 2)) : L("v-if", !0)], 6), y(m("div", {
            ref: "resizeProxy",
            class: g(e.ns.e("column-resize-proxy"))
        }, null, 2), [
            [_, e.resizeProxyVisible]
        ])], 46, ["data-prefix", "onMouseleave"])
    }],
    ["__file", "table.vue"]
]);
const Qt = {
        selection: "table-column--selection",
        expand: "table__expand-column"
    },
    Zt = {
        default: {
            order: ""
        },
        selection: {
            width: 48,
            minWidth: 48,
            realWidth: 48,
            order: ""
        },
        expand: {
            width: 48,
            minWidth: 48,
            realWidth: 48,
            order: ""
        },
        index: {
            width: 48,
            minWidth: 48,
            realWidth: 48,
            order: ""
        }
    },
    Jt = {
        selection: {
            renderHeader: ({
                store: e,
                column: l
            }) => P(ot, {
                disabled: e.states.data.value && 0 === e.states.data.value.length,
                size: e.states.tableSize.value,
                indeterminate: e.states.selection.value.length > 0 && !e.states.isAllSelected.value,
                "onUpdate:modelValue": e.toggleAllSelection,
                modelValue: e.states.isAllSelected.value,
                ariaLabel: l.label
            }),
            renderCell: ({
                row: e,
                column: l,
                store: t,
                $index: n
            }) => P(ot, {
                disabled: !!l.selectable && !l.selectable.call(null, e, n),
                size: t.states.tableSize.value,
                onChange: () => {
                    t.commit("rowSelectedChanged", e)
                },
                onClick: e => e.stopPropagation(),
                modelValue: t.isSelected(e),
                ariaLabel: l.label
            }),
            sortable: !1,
            resizable: !1
        },
        index: {
            renderHeader: ({
                column: e
            }) => e.label || "#",
            renderCell({
                column: e,
                $index: l
            }) {
                let t = l + 1;
                const n = e.index;
                return "number" == typeof n ? t = l + n : "function" == typeof n && (t = n(l)), P("div", {}, [t])
            },
            sortable: !1
        },
        expand: {
            renderHeader: ({
                column: e
            }) => e.label || "",
            renderCell({
                row: e,
                store: l,
                expanded: t
            }) {
                const {
                    ns: n
                } = l, o = [n.e("expand-icon")];
                t && o.push(n.em("expand-icon", "expanded"));
                return P("div", {
                    class: o,
                    onClick: function(t) {
                        t.stopPropagation(), l.toggleRowExpansion(e)
                    }
                }, {
                    default: () => [P(je, null, {
                        default: () => [P(Qe)]
                    })]
                })
            },
            sortable: !1,
            resizable: !1
        }
    };

function en({
    row: e,
    column: l,
    $index: t
}) {
    var n;
    const o = l.property,
        a = o && pe(e, o).value;
    return l && l.formatter ? l.formatter(e, l, a, t) : (null == (n = null == a ? void 0 : a.toString) ? void 0 : n.call(a)) || ""
}

function ln(e, l) {
    return e.reduce(((e, l) => (e[l] = l, e)), l)
}

function tn(e, l, n) {
    const o = a(),
        s = r(""),
        i = r(!1),
        u = r(),
        d = r(),
        c = p("table");
    j((() => {
        u.value = e.align ? `is-${e.align}` : null, u.value
    })), j((() => {
        d.value = e.headerAlign ? `is-${e.headerAlign}` : u.value, d.value
    }));
    const h = t((() => {
            let e = o.vnode.vParent || o.parent;
            for (; e && !e.tableId && !e.columnId;) e = e.vnode.vParent || e.parent;
            return e
        })),
        v = t((() => {
            const {
                store: e
            } = o.parent;
            if (!e) return !1;
            const {
                treeData: l
            } = e.states, t = l.value;
            return t && Object.keys(t).length > 0
        })),
        f = r(ct(e.width)),
        m = r(pt(e.minWidth));
    return {
        columnId: s,
        realAlign: u,
        isSubColumn: i,
        realHeaderAlign: d,
        columnOrTableParent: h,
        setColumnWidth: e => (f.value && (e.width = f.value), m.value && (e.minWidth = m.value), !f.value && m.value && (e.width = void 0), e.minWidth || (e.minWidth = 80), e.realWidth = Number(void 0 === e.width ? e.minWidth : e.width), e),
        setColumnForcedProps: e => {
            const l = e.type,
                t = Jt[l] || {};
            Object.keys(t).forEach((l => {
                const n = t[l];
                "className" !== l && void 0 !== n && (e[l] = n)
            }));
            const n = (e => Qt[e] || "")(l);
            if (n) {
                const l = `${b(c.namespace)}-${n}`;
                e.className = e.className ? `${e.className} ${l}` : l
            }
            return e
        },
        setColumnRenders: t => {
            e.renderHeader || "selection" !== t.type && (t.renderHeader = e => (o.columnConfig.value.label, k(l, "header", e, (() => [t.label])))), l["filter-icon"] && (t.renderFilterIcon = e => k(l, "filter-icon", e));
            let a = t.renderCell;
            return "expand" === t.type ? (t.renderCell = e => P("div", {
                class: "cell"
            }, [a(e)]), n.value.renderExpanded = e => l.default ? l.default(e) : l.default) : (a = a || en, t.renderCell = e => {
                let r = null;
                if (l.default) {
                    const t = l.default(e);
                    r = t.some((e => e.type !== Y)) ? t : a(e)
                } else r = a(e);
                const {
                    columns: s
                } = n.value.store.states, i = s.value.findIndex((e => "default" === e.type)), u = function({
                    row: e,
                    treeNode: l,
                    store: t
                }, n = !1) {
                    const {
                        ns: o
                    } = t;
                    if (!l) return n ? [P("span", {
                        class: o.e("placeholder")
                    })] : null;
                    const a = [],
                        r = function(n) {
                            n.stopPropagation(), l.loading || t.loadOrToggle(e)
                        };
                    if (l.indent && a.push(P("span", {
                            class: o.e("indent"),
                            style: {
                                "padding-left": `${l.indent}px`
                            }
                        })), "boolean" != typeof l.expanded || l.noLazyChildren) a.push(P("span", {
                        class: o.e("placeholder")
                    }));
                    else {
                        const e = [o.e("expand-icon"), l.expanded ? o.em("expand-icon", "expanded") : ""];
                        let t = Qe;
                        l.loading && (t = Ze), a.push(P("div", {
                            class: e,
                            onClick: r
                        }, {
                            default: () => [P(je, {
                                class: {
                                    [o.is("loading")]: l.loading
                                }
                            }, {
                                default: () => [P(t)]
                            })]
                        }))
                    }
                    return a
                }(e, v.value && e.cellIndex === i), d = {
                    class: "cell",
                    style: {}
                };
                return t.showOverflowTooltip && (d.class = `${d.class} ${b(c.namespace)}-tooltip`, d.style = {
                    width: (e.column.realWidth || Number(e.column.width)) - 1 + "px"
                }), (e => {
                    function l(e) {
                        var l;
                        "ElTableColumn" === (null == (l = null == e ? void 0 : e.type) ? void 0 : l.name) && (e.vParent = o)
                    }
                    Array.isArray(e) ? e.forEach((e => l(e))) : l(e)
                })(r), P("div", d, [u, r])
            }), t
        },
        getPropsData: (...l) => l.reduce(((l, t) => (Array.isArray(t) && t.forEach((t => {
            l[t] = e[t]
        })), l)), {}),
        getColumnElIndex: (e, l) => Array.prototype.indexOf.call(e, l),
        updateColumnOrder: () => {
            n.value.store.commit("updateColumnOrder", o.columnConfig.value)
        }
    }
}
var nn = {
    type: {
        type: String,
        default: "default"
    },
    label: String,
    className: String,
    labelClassName: String,
    property: String,
    prop: String,
    width: {
        type: [String, Number],
        default: ""
    },
    minWidth: {
        type: [String, Number],
        default: ""
    },
    renderHeader: Function,
    sortable: {
        type: [Boolean, String],
        default: !1
    },
    sortMethod: Function,
    sortBy: [String, Function, Array],
    resizable: {
        type: Boolean,
        default: !0
    },
    columnKey: String,
    align: String,
    headerAlign: String,
    showOverflowTooltip: {
        type: [Boolean, Object],
        default: void 0
    },
    fixed: [Boolean, String],
    formatter: Function,
    selectable: Function,
    reserveSelection: Boolean,
    filterMethod: Function,
    filteredValue: Array,
    filters: Array,
    filterPlacement: String,
    filterMultiple: {
        type: Boolean,
        default: !0
    },
    filterClassName: String,
    index: [Number, Function],
    sortOrders: {
        type: Array,
        default: () => ["ascending", "descending", null],
        validator: e => e.every((e => ["ascending", "descending", null].includes(e)))
    }
};
let on = 1;
var an = d({
    name: "ElTableColumn",
    components: {
        ElCheckbox: ot
    },
    props: nn,
    setup(e, {
        slots: l
    }) {
        const o = a(),
            s = r({}),
            i = t((() => {
                let e = o.parent;
                for (; e && !e.tableId;) e = e.parent;
                return e
            })),
            {
                registerNormalWatchers: u,
                registerComplexWatchers: d
            } = function(e, l) {
                const t = a();
                return {
                    registerComplexWatchers: () => {
                        const o = {
                                realWidth: "width",
                                realMinWidth: "minWidth"
                            },
                            a = ln(["fixed"], o);
                        Object.keys(a).forEach((a => {
                            const r = o[a];
                            H(l, r) && n((() => l[r]), (l => {
                                let n = l;
                                "width" === r && "realWidth" === a && (n = ct(l)), "minWidth" === r && "realMinWidth" === a && (n = pt(l)), t.columnConfig.value[r] = n, t.columnConfig.value[a] = n;
                                const o = "fixed" === r;
                                e.value.store.scheduleLayout(o)
                            }))
                        }))
                    },
                    registerNormalWatchers: () => {
                        const e = {
                                property: "prop",
                                align: "realAlign",
                                headerAlign: "realHeaderAlign"
                            },
                            o = ln(["label", "filters", "filterMultiple", "filteredValue", "sortable", "index", "formatter", "className", "labelClassName", "filterClassName", "showOverflowTooltip"], e);
                        Object.keys(o).forEach((o => {
                            const a = e[o];
                            H(l, a) && n((() => l[a]), (e => {
                                t.columnConfig.value[o] = e
                            }))
                        }))
                    }
                }
            }(i, e),
            {
                columnId: c,
                isSubColumn: p,
                realHeaderAlign: h,
                columnOrTableParent: v,
                setColumnWidth: f,
                setColumnForcedProps: m,
                setColumnRenders: g,
                getPropsData: b,
                getColumnElIndex: y,
                realAlign: w,
                updateColumnOrder: x
            } = tn(e, l, i),
            C = v.value;
        c.value = `${C.tableId||C.columnId}_column_${on++}`, I((() => {
            p.value = i.value !== C;
            const l = e.type || "default",
                t = "" === e.sortable || e.sortable,
                n = $e(e.showOverflowTooltip) ? C.props.showOverflowTooltip : e.showOverflowTooltip,
                a = { ...Zt[l],
                    id: c.value,
                    type: l,
                    property: e.prop || e.property,
                    align: w,
                    headerAlign: h,
                    showOverflowTooltip: n,
                    filterable: e.filters || e.filterMethod,
                    filteredValue: [],
                    filterPlacement: "",
                    filterClassName: "",
                    isColumnGroup: !1,
                    isSubColumn: !1,
                    filterOpened: !1,
                    sortable: t,
                    index: e.index,
                    rawColumnKey: o.vnode.key
                };
            let r = b(["columnKey", "label", "className", "labelClassName", "type", "renderHeader", "formatter", "fixed", "resizable"], ["sortMethod", "sortBy", "sortOrders"], ["selectable", "reserveSelection"], ["filterMethod", "filters", "filterMultiple", "filterOpened", "filteredValue", "filterPlacement", "filterClassName"]);
            r = function(e, l) {
                const t = {};
                let n;
                for (n in e) t[n] = e[n];
                for (n in l)
                    if (H(l, n)) {
                        const e = l[n];
                        void 0 !== e && (t[n] = e)
                    }
                return t
            }(a, r);
            r = function(...e) {
                return 0 === e.length ? e => e : 1 === e.length ? e[0] : e.reduce(((e, l) => (...t) => e(l(...t))))
            }(g, f, m)(r), s.value = r, u(), d()
        })), z((() => {
            var e;
            const l = v.value,
                t = p.value ? l.vnode.el.children : null == (e = l.refs.hiddenColumns) ? void 0 : e.children,
                n = () => y(t || [], o.vnode.el);
            s.value.getColumnIndex = n;
            n() > -1 && i.value.store.commit("insertColumn", s.value, p.value ? l.columnConfig.value : null, x)
        })), U((() => {
            const e = s.value.getColumnIndex;
            (e ? e() : -1) > -1 && i.value.store.commit("removeColumn", s.value, p.value ? C.columnConfig.value : null, x)
        })), o.columnId = c.value, o.columnConfig = s
    },
    render() {
        var l, t, n;
        try {
            const o = null == (t = (l = this.$slots).default) ? void 0 : t.call(l, {
                    row: {},
                    column: {},
                    $index: -1
                }),
                a = [];
            if (Array.isArray(o))
                for (const l of o) "ElTableColumn" === (null == (n = l.type) ? void 0 : n.name) || 2 & l.shapeFlag ? a.push(l) : l.type === E && Array.isArray(l.children) && l.children.forEach((l => {
                    1024 === (null == l ? void 0 : l.patchFlag) || e(null == l ? void 0 : l.children) || a.push(l)
                }));
            return P("div", a)
        } catch (o) {
            return P("div", [])
        }
    }
});
const rn = De(qt, {
        TableColumn: an
    }),
    sn = Pe(an);
export {
    rn as E, sn as a, ot as b
};