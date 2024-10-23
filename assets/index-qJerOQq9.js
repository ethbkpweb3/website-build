import {
    ds as e,
    y as a,
    Q as l,
    h as o,
    m as s,
    be as d,
    o as i,
    j as n,
    l as u,
    dg as r,
    d6 as t,
    X as c,
    cd as v,
    p as b,
    dj as p,
    r as m,
    q as f,
    t as y,
    M as g,
    ck as h,
    dr as k,
    I as B,
    L as V,
    K as S,
    bb as x,
    B as C
} from "./index-jdACH0Rc.js";
import {
    b as R,
    i as _,
    e as G,
    G as E,
    _ as I,
    w as j,
    F as w
} from "./index-Dwv4qbXN.js";
import {
    i as z,
    U as F,
    C as K,
    d as U,
    g as L,
    a as N,
    b as $,
    f as q
} from "./index-D4R9Vjdp.js";
import {
    j as A,
    k as M
} from "./index-Citk0ABi.js";
const Q = R({
        modelValue: {
            type: [String, Number, Boolean],
            default: void 0
        },
        size: z,
        disabled: Boolean,
        label: {
            type: [String, Number, Boolean],
            default: void 0
        },
        value: {
            type: [String, Number, Boolean],
            default: void 0
        },
        name: {
            type: String,
            default: void 0
        }
    }),
    X = R({ ...Q,
        border: Boolean
    }),
    D = {
        [F]: a => e(a) || _(a) || G(a),
        [K]: a => e(a) || _(a) || G(a)
    },
    H = Symbol("radioGroupKey"),
    J = (e, s) => {
        const d = a(),
            i = l(H, void 0),
            n = o((() => !!i)),
            u = o((() => E(e.value) ? e.label : e.value)),
            r = o({
                get: () => n.value ? i.modelValue : e.modelValue,
                set(a) {
                    n.value ? i.changeEvent(a) : s && s(F, a), d.value.checked = e.modelValue === u.value
                }
            }),
            t = U(o((() => null == i ? void 0 : i.size))),
            c = L(o((() => null == i ? void 0 : i.disabled))),
            v = a(!1),
            b = o((() => c.value || n.value && r.value !== u.value ? -1 : 0));
        return N({
            from: "label act as value",
            replacement: "value",
            version: "3.0.0",
            scope: "el-radio",
            ref: "https://element-plus.org/en-US/component/radio.html"
        }, o((() => n.value && E(e.value)))), {
            radioRef: d,
            isGroup: n,
            radioGroup: i,
            focus: v,
            size: t,
            disabled: c,
            tabIndex: b,
            modelValue: r,
            actualValue: u
        }
    },
    O = s({
        name: "ElRadio"
    });
var P = I(s({ ...O,
    props: X,
    emits: D,
    setup(e, {
        emit: a
    }) {
        const l = e,
            o = d("radio"),
            {
                radioRef: s,
                radioGroup: h,
                focus: k,
                size: B,
                disabled: V,
                modelValue: S,
                actualValue: x
            } = J(l, a);

        function C() {
            g((() => a("change", S.value)))
        }
        return (e, a) => {
            var l;
            return i(), n("label", {
                class: b([c(o).b(), c(o).is("disabled", c(V)), c(o).is("focus", c(k)), c(o).is("bordered", e.border), c(o).is("checked", c(S) === c(x)), c(o).m(c(B))])
            }, [u("span", {
                class: b([c(o).e("input"), c(o).is("disabled", c(V)), c(o).is("checked", c(S) === c(x))])
            }, [r(u("input", {
                ref_key: "radioRef",
                ref: s,
                "onUpdate:modelValue": e => v(S) ? S.value = e : null,
                class: b(c(o).e("original")),
                value: c(x),
                name: e.name || (null == (l = c(h)) ? void 0 : l.name),
                disabled: c(V),
                checked: c(S) === c(x),
                type: "radio",
                onFocus: e => k.value = !0,
                onBlur: e => k.value = !1,
                onChange: C,
                onClick: p((() => {}), ["stop"])
            }, null, 42, ["onUpdate:modelValue", "value", "name", "disabled", "checked", "onFocus", "onBlur", "onClick"]), [
                [t, c(S)]
            ]), u("span", {
                class: b(c(o).e("inner"))
            }, null, 2)], 2), u("span", {
                class: b(c(o).e("label")),
                onKeydown: p((() => {}), ["stop"])
            }, [m(e.$slots, "default", {}, (() => [f(y(e.label), 1)]))], 42, ["onKeydown"])], 2)
        }
    }
}), [
    ["__file", "radio.vue"]
]);
const T = R({ ...Q
    }),
    W = s({
        name: "ElRadioButton"
    });
var Y = I(s({ ...W,
    props: T,
    setup(e) {
        const a = e,
            l = d("radio"),
            {
                radioRef: s,
                focus: g,
                size: k,
                disabled: B,
                modelValue: V,
                radioGroup: S,
                actualValue: x
            } = J(a),
            C = o((() => ({
                backgroundColor: (null == S ? void 0 : S.fill) || "",
                borderColor: (null == S ? void 0 : S.fill) || "",
                boxShadow: (null == S ? void 0 : S.fill) ? `-1px 0 0 0 ${S.fill}` : "",
                color: (null == S ? void 0 : S.textColor) || ""
            })));
        return (e, a) => {
            var o;
            return i(), n("label", {
                class: b([c(l).b("button"), c(l).is("active", c(V) === c(x)), c(l).is("disabled", c(B)), c(l).is("focus", c(g)), c(l).bm("button", c(k))])
            }, [r(u("input", {
                ref_key: "radioRef",
                ref: s,
                "onUpdate:modelValue": e => v(V) ? V.value = e : null,
                class: b(c(l).be("button", "original-radio")),
                value: c(x),
                type: "radio",
                name: e.name || (null == (o = c(S)) ? void 0 : o.name),
                disabled: c(B),
                onFocus: e => g.value = !0,
                onBlur: e => g.value = !1,
                onClick: p((() => {}), ["stop"])
            }, null, 42, ["onUpdate:modelValue", "value", "name", "disabled", "onFocus", "onBlur", "onClick"]), [
                [t, c(V)]
            ]), u("span", {
                class: b(c(l).be("button", "inner")),
                style: h(c(V) === c(x) ? c(C) : {}),
                onKeydown: p((() => {}), ["stop"])
            }, [m(e.$slots, "default", {}, (() => [f(y(e.label), 1)]))], 46, ["onKeydown"])], 2)
        }
    }
}), [
    ["__file", "radio-button.vue"]
]);
const Z = R({
        id: {
            type: String,
            default: void 0
        },
        size: z,
        disabled: Boolean,
        modelValue: {
            type: [String, Number, Boolean],
            default: void 0
        },
        fill: {
            type: String,
            default: ""
        },
        textColor: {
            type: String,
            default: ""
        },
        name: {
            type: String,
            default: void 0
        },
        validateEvent: {
            type: Boolean,
            default: !0
        },
        ...A(["ariaLabel"])
    }),
    ee = D,
    ae = s({
        name: "ElRadioGroup"
    });
var le = I(s({ ...ae,
    props: Z,
    emits: ee,
    setup(e, {
        emit: l
    }) {
        const s = e,
            u = d("radio"),
            r = k(),
            t = a(),
            {
                formItem: v
            } = $(),
            {
                inputId: p,
                isLabeledByFormItem: f
            } = q(s, {
                formItemContext: v
            });
        B((() => {
            const e = t.value.querySelectorAll("[type=radio]"),
                a = e[0];
            !Array.from(e).some((e => e.checked)) && a && (a.tabIndex = 0)
        }));
        const y = o((() => s.name || r.value));
        return V(H, S({ ...x(s),
            changeEvent: e => {
                l(F, e), g((() => l("change", e)))
            },
            name: y
        })), C((() => s.modelValue), (() => {
            s.validateEvent && (null == v || v.validate("change").catch((e => M())))
        })), (e, a) => (i(), n("div", {
            id: c(p),
            ref_key: "radioGroupRef",
            ref: t,
            class: b(c(u).b("group")),
            role: "radiogroup",
            "aria-label": c(f) ? void 0 : e.ariaLabel || "radio-group",
            "aria-labelledby": c(f) ? c(v).labelId : void 0
        }, [m(e.$slots, "default")], 10, ["id", "aria-label", "aria-labelledby"]))
    }
}), [
    ["__file", "radio-group.vue"]
]);
const oe = j(P, {
        RadioButton: Y,
        RadioGroup: le
    }),
    se = w(le),
    de = w(Y);
export {
    se as E, de as a, oe as b
};