import {
    ds as e,
    m as a,
    be as i,
    h as t,
    y as n,
    B as l,
    I as c,
    o as s,
    j as o,
    l as v,
    X as d,
    p as u,
    dh as r,
    n as f,
    w as p,
    cE as m,
    s as y,
    t as b,
    v as h,
    r as k,
    ck as x,
    dj as I,
    M as g,
    dt as V
} from "./index-CQfCy4Xm.js";
import {
    b as T,
    d as w,
    e as S,
    i as _,
    a as j,
    E as B,
    l as C,
    _ as A,
    w as E
} from "./index-DZwhim7i.js";
import {
    i as N
} from "./validator-Kt7cHrwc.js";
import {
    a as P,
    j as K,
    k as L,
    t as $
} from "./index-DWyf7GKU.js";
import {
    U as z,
    C as D,
    I as F,
    b as M,
    d as U,
    f as X,
    g as q
} from "./index-wV0BwLDn.js";
const G = T({
        modelValue: {
            type: [Boolean, String, Number],
            default: !1
        },
        disabled: Boolean,
        loading: Boolean,
        size: {
            type: String,
            validator: N
        },
        width: {
            type: [String, Number],
            default: ""
        },
        inlinePrompt: Boolean,
        inactiveActionIcon: {
            type: P
        },
        activeActionIcon: {
            type: P
        },
        activeIcon: {
            type: P
        },
        inactiveIcon: {
            type: P
        },
        activeText: {
            type: String,
            default: ""
        },
        inactiveText: {
            type: String,
            default: ""
        },
        activeValue: {
            type: [Boolean, String, Number],
            default: !0
        },
        inactiveValue: {
            type: [Boolean, String, Number],
            default: !1
        },
        name: {
            type: String,
            default: ""
        },
        validateEvent: {
            type: Boolean,
            default: !0
        },
        beforeChange: {
            type: w(Function)
        },
        id: String,
        tabindex: {
            type: [String, Number]
        },
        ...K(["ariaLabel"])
    }),
    H = {
        [z]: a => S(a) || e(a) || _(a),
        [D]: a => S(a) || e(a) || _(a),
        [F]: a => S(a) || e(a) || _(a)
    },
    J = "ElSwitch",
    O = a({
        name: J
    });
const Q = E(A(a({ ...O,
    props: G,
    emits: H,
    setup(e, {
        expose: a,
        emit: T
    }) {
        const w = e,
            {
                formItem: _
            } = M(),
            A = U(),
            E = i("switch"),
            {
                inputId: N
            } = X(w, {
                formItemContext: _
            }),
            P = q(t((() => w.loading))),
            K = n(!1 !== w.modelValue),
            G = n(),
            H = n(),
            O = t((() => [E.b(), E.m(A.value), E.is("disabled", P.value), E.is("checked", Z.value)])),
            Q = t((() => [E.e("label"), E.em("label", "left"), E.is("active", !Z.value)])),
            R = t((() => [E.e("label"), E.em("label", "right"), E.is("active", Z.value)])),
            W = t((() => ({
                width: j(w.width)
            })));
        l((() => w.modelValue), (() => {
            K.value = !0
        }));
        const Y = t((() => !!K.value && w.modelValue)),
            Z = t((() => Y.value === w.activeValue));
        [w.activeValue, w.inactiveValue].includes(Y.value) || (T(z, w.inactiveValue), T(D, w.inactiveValue), T(F, w.inactiveValue)), l(Z, (e => {
            var a;
            G.value.checked = e, w.validateEvent && (null == (a = null == _ ? void 0 : _.validate) || a.call(_, "change").catch((e => L())))
        }));
        const ee = () => {
                const e = Z.value ? w.inactiveValue : w.activeValue;
                T(z, e), T(D, e), T(F, e), g((() => {
                    G.value.checked = Z.value
                }))
            },
            ae = () => {
                if (P.value) return;
                const {
                    beforeChange: e
                } = w;
                if (!e) return void ee();
                const a = e();
                [V(a), S(a)].includes(!0) || $(J, "beforeChange must return type `Promise<boolean>` or `boolean`"), V(a) ? a.then((e => {
                    e && ee()
                })).catch((e => {})) : a && ee()
            };
        return c((() => {
            G.value.checked = Z.value
        })), a({
            focus: () => {
                var e, a;
                null == (a = null == (e = G.value) ? void 0 : e.focus) || a.call(e)
            },
            checked: Z
        }), (e, a) => (s(), o("div", {
            class: u(d(O)),
            onClick: I(ae, ["prevent"])
        }, [v("input", {
            id: d(N),
            ref_key: "input",
            ref: G,
            class: u(d(E).e("input")),
            type: "checkbox",
            role: "switch",
            "aria-checked": d(Z),
            "aria-disabled": d(P),
            "aria-label": e.ariaLabel,
            name: e.name,
            "true-value": e.activeValue,
            "false-value": e.inactiveValue,
            disabled: d(P),
            tabindex: e.tabindex,
            onChange: ee,
            onKeydown: r(ae, ["enter"])
        }, null, 42, ["id", "aria-checked", "aria-disabled", "aria-label", "name", "true-value", "false-value", "disabled", "tabindex", "onKeydown"]), e.inlinePrompt || !e.inactiveIcon && !e.inactiveText ? y("v-if", !0) : (s(), o("span", {
            key: 0,
            class: u(d(Q))
        }, [e.inactiveIcon ? (s(), f(d(B), {
            key: 0
        }, {
            default: p((() => [(s(), f(m(e.inactiveIcon)))])),
            _: 1
        })) : y("v-if", !0), !e.inactiveIcon && e.inactiveText ? (s(), o("span", {
            key: 1,
            "aria-hidden": d(Z)
        }, b(e.inactiveText), 9, ["aria-hidden"])) : y("v-if", !0)], 2)), v("span", {
            ref_key: "core",
            ref: H,
            class: u(d(E).e("core")),
            style: x(d(W))
        }, [e.inlinePrompt ? (s(), o("div", {
            key: 0,
            class: u(d(E).e("inner"))
        }, [e.activeIcon || e.inactiveIcon ? (s(), f(d(B), {
            key: 0,
            class: u(d(E).is("icon"))
        }, {
            default: p((() => [(s(), f(m(d(Z) ? e.activeIcon : e.inactiveIcon)))])),
            _: 1
        }, 8, ["class"])) : e.activeText || e.inactiveText ? (s(), o("span", {
            key: 1,
            class: u(d(E).is("text")),
            "aria-hidden": !d(Z)
        }, b(d(Z) ? e.activeText : e.inactiveText), 11, ["aria-hidden"])) : y("v-if", !0)], 2)) : y("v-if", !0), v("div", {
            class: u(d(E).e("action"))
        }, [e.loading ? (s(), f(d(B), {
            key: 0,
            class: u(d(E).is("loading"))
        }, {
            default: p((() => [h(d(C))])),
            _: 1
        }, 8, ["class"])) : d(Z) ? k(e.$slots, "active-action", {
            key: 1
        }, (() => [e.activeActionIcon ? (s(), f(d(B), {
            key: 0
        }, {
            default: p((() => [(s(), f(m(e.activeActionIcon)))])),
            _: 1
        })) : y("v-if", !0)])) : d(Z) ? y("v-if", !0) : k(e.$slots, "inactive-action", {
            key: 2
        }, (() => [e.inactiveActionIcon ? (s(), f(d(B), {
            key: 0
        }, {
            default: p((() => [(s(), f(m(e.inactiveActionIcon)))])),
            _: 1
        })) : y("v-if", !0)]))], 2)], 6), e.inlinePrompt || !e.activeIcon && !e.activeText ? y("v-if", !0) : (s(), o("span", {
            key: 1,
            class: u(d(R))
        }, [e.activeIcon ? (s(), f(d(B), {
            key: 0
        }, {
            default: p((() => [(s(), f(m(e.activeIcon)))])),
            _: 1
        })) : y("v-if", !0), !e.activeIcon && e.activeText ? (s(), o("span", {
            key: 1,
            "aria-hidden": !d(Z)
        }, b(e.activeText), 9, ["aria-hidden"])) : y("v-if", !0)], 2))], 10, ["onClick"]))
    }
}), [
    ["__file", "switch.vue"]
]));
export {
    Q as E
};