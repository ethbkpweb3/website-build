import {
    h as e,
    F as t,
    ds as a,
    m as o,
    cW as n,
    W as l,
    be as s,
    R as i,
    y as r,
    B as u,
    M as p,
    I as d,
    cS as c,
    o as f,
    j as v,
    s as m,
    P as x,
    p as y,
    X as h,
    r as g,
    l as b,
    n as w,
    w as S,
    cE as C,
    bc as k,
    v as z,
    dj as E,
    dv as I,
    t as $,
    ck as j,
    dw as B
} from "./index-CQfCy4Xm.js";
import {
    a as F,
    j as P,
    m as M,
    k as N,
    V
} from "./index-DWyf7GKU.js";
import {
    f as _,
    z as R,
    i as A,
    b as H,
    d as L,
    E as O,
    j as W,
    A as T,
    B as K,
    C as U,
    _ as X,
    w as Y
} from "./index-DZwhim7i.js";
import {
    i as Z,
    U as q,
    b as D,
    f as G,
    d as J,
    g as Q,
    j as ee,
    m as te
} from "./index-wV0BwLDn.js";
import {
    m as ae
} from "./typescript-CRqm1_SZ.js";
const oe = ["class", "style"],
    ne = /^on[A-Z]/;
let le;
const se = `\n  height:0 !important;\n  visibility:hidden !important;\n  ${_&&/firefox/i.test(window.navigator.userAgent)?"":"overflow:hidden !important;"}\n  position:absolute !important;\n  z-index:-1000 !important;\n  top:0 !important;\n  right:0 !important;\n`,
    ie = ["letter-spacing", "line-height", "padding-top", "padding-bottom", "font-family", "font-weight", "font-size", "text-rendering", "text-transform", "width", "text-indent", "padding-left", "padding-right", "border-width", "box-sizing"];

function re(e, t = 1, a) {
    var o;
    le || (le = document.createElement("textarea"), document.body.appendChild(le));
    const {
        paddingSize: n,
        borderSize: l,
        boxSizing: s,
        contextStyle: i
    } = function(e) {
        const t = window.getComputedStyle(e),
            a = t.getPropertyValue("box-sizing"),
            o = Number.parseFloat(t.getPropertyValue("padding-bottom")) + Number.parseFloat(t.getPropertyValue("padding-top")),
            n = Number.parseFloat(t.getPropertyValue("border-bottom-width")) + Number.parseFloat(t.getPropertyValue("border-top-width"));
        return {
            contextStyle: ie.map((e => `${e}:${t.getPropertyValue(e)}`)).join(";"),
            paddingSize: o,
            borderSize: n,
            boxSizing: a
        }
    }(e);
    le.setAttribute("style", `${i};${se}`), le.value = e.value || e.placeholder || "";
    let r = le.scrollHeight;
    const u = {};
    "border-box" === s ? r += l : "content-box" === s && (r -= n), le.value = "";
    const p = le.scrollHeight - n;
    if (A(t)) {
        let e = p * t;
        "border-box" === s && (e = e + n + l), r = Math.max(e, r), u.minHeight = `${e}px`
    }
    if (A(a)) {
        let e = p * a;
        "border-box" === s && (e = e + n + l), r = Math.min(e, r)
    }
    return u.height = `${r}px`, null == (o = le.parentNode) || o.removeChild(le), le = void 0, u
}
const ue = H({
        id: {
            type: String,
            default: void 0
        },
        size: Z,
        disabled: Boolean,
        modelValue: {
            type: L([String, Number, Object]),
            default: ""
        },
        maxlength: {
            type: [String, Number]
        },
        minlength: {
            type: [String, Number]
        },
        type: {
            type: String,
            default: "text"
        },
        resize: {
            type: String,
            values: ["none", "both", "horizontal", "vertical"]
        },
        autosize: {
            type: L([Boolean, Object]),
            default: !1
        },
        autocomplete: {
            type: String,
            default: "off"
        },
        formatter: {
            type: Function
        },
        parser: {
            type: Function
        },
        placeholder: {
            type: String
        },
        form: {
            type: String
        },
        readonly: Boolean,
        clearable: Boolean,
        showPassword: Boolean,
        showWordLimit: Boolean,
        suffixIcon: {
            type: F
        },
        prefixIcon: {
            type: F
        },
        containerRole: {
            type: String,
            default: void 0
        },
        tabindex: {
            type: [String, Number],
            default: 0
        },
        validateEvent: {
            type: Boolean,
            default: !0
        },
        inputStyle: {
            type: L([Object, Array, String]),
            default: () => ae({})
        },
        autofocus: Boolean,
        rows: {
            type: Number,
            default: 2
        },
        ...P(["ariaLabel"])
    }),
    pe = {
        [q]: e => a(e),
        input: e => a(e),
        change: e => a(e),
        focus: e => e instanceof FocusEvent,
        blur: e => e instanceof FocusEvent,
        clear: () => !0,
        mouseleave: e => e instanceof MouseEvent,
        mouseenter: e => e instanceof MouseEvent,
        keydown: e => e instanceof Event,
        compositionstart: e => e instanceof CompositionEvent,
        compositionupdate: e => e instanceof CompositionEvent,
        compositionend: e => e instanceof CompositionEvent
    },
    de = o({
        name: "ElInput",
        inheritAttrs: !1
    });
const ce = Y(X(o({ ...de,
    props: ue,
    emits: pe,
    setup(a, {
        expose: o,
        emit: F
    }) {
        const P = a,
            A = n(),
            H = l(),
            L = e((() => {
                const e = {};
                return "combobox" === P.containerRole && (e["aria-haspopup"] = A["aria-haspopup"], e["aria-owns"] = A["aria-owns"], e["aria-expanded"] = A["aria-expanded"]), e
            })),
            X = e((() => ["textarea" === P.type ? de.b() : pe.b(), pe.m(ie.value), pe.is("disabled", ue.value), pe.is("exceed", Ne.value), {
                [pe.b("group")]: H.prepend || H.append,
                [pe.m("prefix")]: H.prefix || P.prefixIcon,
                [pe.m("suffix")]: H.suffix || P.suffixIcon || P.clearable || P.showPassword,
                [pe.bm("suffix", "password-clear")]: Be.value && Fe.value,
                [pe.b("hidden")]: "hidden" === P.type
            }, A.class])),
            Y = e((() => [pe.e("wrapper"), pe.is("focus", be.value)])),
            Z = ((a = {}) => {
                const {
                    excludeListeners: o = !1,
                    excludeKeys: n
                } = a, l = e((() => ((null == n ? void 0 : n.value) || []).concat(oe))), s = t();
                return e(s ? () => {
                    var e;
                    return R(Object.entries(null == (e = s.proxy) ? void 0 : e.$attrs).filter((([e]) => !(l.value.includes(e) || o && ne.test(e)))))
                } : () => ({}))
            })({
                excludeKeys: e((() => Object.keys(L.value)))
            }),
            {
                form: ae,
                formItem: le
            } = D(),
            {
                inputId: se
            } = G(P, {
                formItemContext: le
            }),
            ie = J(),
            ue = Q(),
            pe = s("input"),
            de = s("textarea"),
            ce = i(),
            fe = i(),
            ve = r(!1),
            me = r(!1),
            xe = r(),
            ye = i(P.inputStyle),
            he = e((() => ce.value || fe.value)),
            {
                wrapperRef: ge,
                isFocused: be,
                handleFocus: we,
                handleBlur: Se
            } = ee(he, {
                beforeFocus: () => ue.value,
                afterBlur() {
                    var e;
                    P.validateEvent && (null == (e = null == le ? void 0 : le.validate) || e.call(le, "blur").catch((e => N())))
                }
            }),
            Ce = e((() => {
                var e;
                return null != (e = null == ae ? void 0 : ae.statusIcon) && e
            })),
            ke = e((() => (null == le ? void 0 : le.validateState) || "")),
            ze = e((() => ke.value && V[ke.value])),
            Ee = e((() => me.value ? T : K)),
            Ie = e((() => [A.style])),
            $e = e((() => [P.inputStyle, ye.value, {
                resize: P.resize
            }])),
            je = e((() => U(P.modelValue) ? "" : String(P.modelValue))),
            Be = e((() => P.clearable && !ue.value && !P.readonly && !!je.value && (be.value || ve.value))),
            Fe = e((() => P.showPassword && !ue.value && !P.readonly && !!je.value && (!!je.value || be.value))),
            Pe = e((() => P.showWordLimit && !!P.maxlength && ("text" === P.type || "textarea" === P.type) && !ue.value && !P.readonly && !P.showPassword)),
            Me = e((() => je.value.length)),
            Ne = e((() => !!Pe.value && Me.value > Number(P.maxlength))),
            Ve = e((() => !!H.suffix || !!P.suffixIcon || Be.value || P.showPassword || Pe.value || !!ke.value && Ce.value)),
            [_e, Re] = function(e) {
                let t;
                return [function() {
                    if (null == e.value) return;
                    const {
                        selectionStart: a,
                        selectionEnd: o,
                        value: n
                    } = e.value;
                    if (null == a || null == o) return;
                    const l = n.slice(0, Math.max(0, a)),
                        s = n.slice(Math.max(0, o));
                    t = {
                        selectionStart: a,
                        selectionEnd: o,
                        value: n,
                        beforeTxt: l,
                        afterTxt: s
                    }
                }, function() {
                    if (null == e.value || null == t) return;
                    const {
                        value: a
                    } = e.value, {
                        beforeTxt: o,
                        afterTxt: n,
                        selectionStart: l
                    } = t;
                    if (null == o || null == n || null == l) return;
                    let s = a.length;
                    if (a.endsWith(n)) s = a.length - n.length;
                    else if (a.startsWith(o)) s = o.length;
                    else {
                        const e = o[l - 1],
                            t = a.indexOf(e, l - 1); - 1 !== t && (s = t + 1)
                    }
                    e.value.setSelectionRange(s, s)
                }]
            }(ce);
        M(fe, (e => {
            if (He(), !Pe.value || "both" !== P.resize) return;
            const t = e[0],
                {
                    width: a
                } = t.contentRect;
            xe.value = {
                right: `calc(100% - ${a+15+6}px)`
            }
        }));
        const Ae = () => {
                const {
                    type: e,
                    autosize: t
                } = P;
                if (_ && "textarea" === e && fe.value)
                    if (t) {
                        const e = B(t) ? t.minRows : void 0,
                            a = B(t) ? t.maxRows : void 0,
                            o = re(fe.value, e, a);
                        ye.value = {
                            overflowY: "hidden",
                            ...o
                        }, p((() => {
                            fe.value.offsetHeight, ye.value = o
                        }))
                    } else ye.value = {
                        minHeight: re(fe.value).minHeight
                    }
            },
            He = (e => {
                let t = !1;
                return () => {
                    var a;
                    if (t || !P.autosize) return;
                    null === (null == (a = fe.value) ? void 0 : a.offsetParent) || (e(), t = !0)
                }
            })(Ae),
            Le = () => {
                const e = he.value,
                    t = P.formatter ? P.formatter(je.value) : je.value;
                e && e.value !== t && (e.value = t)
            },
            Oe = async e => {
                _e();
                let {
                    value: t
                } = e.target;
                P.formatter && (t = P.parser ? P.parser(t) : t), Te.value || (t !== je.value ? (F(q, t), F("input", t), await p(), Le(), Re()) : Le())
            },
            We = e => {
                F("change", e.target.value)
            },
            {
                isComposing: Te,
                handleCompositionStart: Ke,
                handleCompositionUpdate: Ue,
                handleCompositionEnd: Xe
            } = te({
                emit: F,
                afterComposition: Oe
            }),
            Ye = () => {
                me.value = !me.value, Ze()
            },
            Ze = async () => {
                var e;
                await p(), null == (e = he.value) || e.focus()
            },
            qe = e => {
                ve.value = !1, F("mouseleave", e)
            },
            De = e => {
                ve.value = !0, F("mouseenter", e)
            },
            Ge = e => {
                F("keydown", e)
            },
            Je = () => {
                F(q, ""), F("change", ""), F("clear"), F("input", "")
            };
        return u((() => P.modelValue), (() => {
            var e;
            p((() => Ae())), P.validateEvent && (null == (e = null == le ? void 0 : le.validate) || e.call(le, "change").catch((e => N())))
        })), u(je, (() => Le())), u((() => P.type), (async () => {
            await p(), Le(), Ae()
        })), d((() => {
            !P.formatter && P.parser, Le(), p(Ae)
        })), o({
            input: ce,
            textarea: fe,
            ref: he,
            textareaStyle: $e,
            autosize: c(P, "autosize"),
            isComposing: Te,
            focus: Ze,
            blur: () => {
                var e;
                return null == (e = he.value) ? void 0 : e.blur()
            },
            select: () => {
                var e;
                null == (e = he.value) || e.select()
            },
            clear: Je,
            resizeTextarea: Ae
        }), (e, t) => (f(), v("div", k(h(L), {
            class: [h(X), {
                [h(pe).bm("group", "append")]: e.$slots.append,
                [h(pe).bm("group", "prepend")]: e.$slots.prepend
            }],
            style: h(Ie),
            role: e.containerRole,
            onMouseenter: De,
            onMouseleave: qe
        }), [m(" input "), "textarea" !== e.type ? (f(), v(x, {
            key: 0
        }, [m(" prepend slot "), e.$slots.prepend ? (f(), v("div", {
            key: 0,
            class: y(h(pe).be("group", "prepend"))
        }, [g(e.$slots, "prepend")], 2)) : m("v-if", !0), b("div", {
            ref_key: "wrapperRef",
            ref: ge,
            class: y(h(Y))
        }, [m(" prefix slot "), e.$slots.prefix || e.prefixIcon ? (f(), v("span", {
            key: 0,
            class: y(h(pe).e("prefix"))
        }, [b("span", {
            class: y(h(pe).e("prefix-inner"))
        }, [g(e.$slots, "prefix"), e.prefixIcon ? (f(), w(h(O), {
            key: 0,
            class: y(h(pe).e("icon"))
        }, {
            default: S((() => [(f(), w(C(e.prefixIcon)))])),
            _: 1
        }, 8, ["class"])) : m("v-if", !0)], 2)], 2)) : m("v-if", !0), b("input", k({
            id: h(se),
            ref_key: "input",
            ref: ce,
            class: h(pe).e("inner")
        }, h(Z), {
            minlength: e.minlength,
            maxlength: e.maxlength,
            type: e.showPassword ? me.value ? "text" : "password" : e.type,
            disabled: h(ue),
            readonly: e.readonly,
            autocomplete: e.autocomplete,
            tabindex: e.tabindex,
            "aria-label": e.ariaLabel,
            placeholder: e.placeholder,
            style: e.inputStyle,
            form: e.form,
            autofocus: e.autofocus,
            onCompositionstart: h(Ke),
            onCompositionupdate: h(Ue),
            onCompositionend: h(Xe),
            onInput: Oe,
            onChange: We,
            onKeydown: Ge
        }), null, 16, ["id", "minlength", "maxlength", "type", "disabled", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder", "form", "autofocus", "onCompositionstart", "onCompositionupdate", "onCompositionend"]), m(" suffix slot "), h(Ve) ? (f(), v("span", {
            key: 1,
            class: y(h(pe).e("suffix"))
        }, [b("span", {
            class: y(h(pe).e("suffix-inner"))
        }, [h(Be) && h(Fe) && h(Pe) ? m("v-if", !0) : (f(), v(x, {
            key: 0
        }, [g(e.$slots, "suffix"), e.suffixIcon ? (f(), w(h(O), {
            key: 0,
            class: y(h(pe).e("icon"))
        }, {
            default: S((() => [(f(), w(C(e.suffixIcon)))])),
            _: 1
        }, 8, ["class"])) : m("v-if", !0)], 64)), h(Be) ? (f(), w(h(O), {
            key: 1,
            class: y([h(pe).e("icon"), h(pe).e("clear")]),
            onMousedown: E(h(I), ["prevent"]),
            onClick: Je
        }, {
            default: S((() => [z(h(W))])),
            _: 1
        }, 8, ["class", "onMousedown"])) : m("v-if", !0), h(Fe) ? (f(), w(h(O), {
            key: 2,
            class: y([h(pe).e("icon"), h(pe).e("password")]),
            onClick: Ye
        }, {
            default: S((() => [(f(), w(C(h(Ee))))])),
            _: 1
        }, 8, ["class"])) : m("v-if", !0), h(Pe) ? (f(), v("span", {
            key: 3,
            class: y(h(pe).e("count"))
        }, [b("span", {
            class: y(h(pe).e("count-inner"))
        }, $(h(Me)) + " / " + $(e.maxlength), 3)], 2)) : m("v-if", !0), h(ke) && h(ze) && h(Ce) ? (f(), w(h(O), {
            key: 4,
            class: y([h(pe).e("icon"), h(pe).e("validateIcon"), h(pe).is("loading", "validating" === h(ke))])
        }, {
            default: S((() => [(f(), w(C(h(ze))))])),
            _: 1
        }, 8, ["class"])) : m("v-if", !0)], 2)], 2)) : m("v-if", !0)], 2), m(" append slot "), e.$slots.append ? (f(), v("div", {
            key: 1,
            class: y(h(pe).be("group", "append"))
        }, [g(e.$slots, "append")], 2)) : m("v-if", !0)], 64)) : (f(), v(x, {
            key: 1
        }, [m(" textarea "), b("textarea", k({
            id: h(se),
            ref_key: "textarea",
            ref: fe,
            class: [h(de).e("inner"), h(pe).is("focus", h(be))]
        }, h(Z), {
            minlength: e.minlength,
            maxlength: e.maxlength,
            tabindex: e.tabindex,
            disabled: h(ue),
            readonly: e.readonly,
            autocomplete: e.autocomplete,
            style: h($e),
            "aria-label": e.ariaLabel,
            placeholder: e.placeholder,
            form: e.form,
            autofocus: e.autofocus,
            rows: e.rows,
            onCompositionstart: h(Ke),
            onCompositionupdate: h(Ue),
            onCompositionend: h(Xe),
            onInput: Oe,
            onFocus: h(we),
            onBlur: h(Se),
            onChange: We,
            onKeydown: Ge
        }), null, 16, ["id", "minlength", "maxlength", "tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder", "form", "autofocus", "rows", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onFocus", "onBlur"]), h(Pe) ? (f(), v("span", {
            key: 0,
            style: j(xe.value),
            class: y(h(pe).e("count"))
        }, $(h(Me)) + " / " + $(e.maxlength), 7)) : m("v-if", !0)], 64))], 16, ["role"]))
    }
}), [
    ["__file", "input.vue"]
]));
export {
    ce as E
};