import {
    m as e,
    W as s,
    be as t,
    y as a,
    h as l,
    o as i,
    n as o,
    w as n,
    dg as c,
    l as r,
    p as d,
    X as f,
    cE as p,
    s as u,
    j as m,
    r as y,
    q as v,
    t as b,
    P as k,
    v as g,
    d9 as x,
    bw as h
} from "./index-CQfCy4Xm.js";
import {
    b as w,
    E as _,
    _ as j,
    w as E
} from "./index-DZwhim7i.js";
import {
    k as S
} from "./index-wV0BwLDn.js";
import {
    T,
    e as $
} from "./index-DWyf7GKU.js";
const B = w({
        title: {
            type: String,
            default: ""
        },
        description: {
            type: String,
            default: ""
        },
        type: {
            type: String,
            values: S(T),
            default: "info"
        },
        closable: {
            type: Boolean,
            default: !0
        },
        closeText: {
            type: String,
            default: ""
        },
        showIcon: Boolean,
        center: Boolean,
        effect: {
            type: String,
            values: ["light", "dark"],
            default: "light"
        }
    }),
    C = {
        close: e => e instanceof MouseEvent
    },
    I = e({
        name: "ElAlert"
    });
const q = E(j(e({ ...I,
    props: B,
    emits: C,
    setup(e, {
        emit: w
    }) {
        const j = e,
            {
                Close: E
            } = $,
            S = s(),
            B = t("alert"),
            C = a(!0),
            I = l((() => T[j.type])),
            q = l((() => [B.e("icon"), {
                [B.is("big")]: !!j.description || !!S.default
            }])),
            A = l((() => ({
                "with-description": j.description || S.default
            }))),
            M = e => {
                C.value = !1, w("close", e)
            };
        return (e, s) => (i(), o(h, {
            name: f(B).b("fade"),
            persisted: ""
        }, {
            default: n((() => [c(r("div", {
                class: d([f(B).b(), f(B).m(e.type), f(B).is("center", e.center), f(B).is(e.effect)]),
                role: "alert"
            }, [e.showIcon && f(I) ? (i(), o(f(_), {
                key: 0,
                class: d(f(q))
            }, {
                default: n((() => [(i(), o(p(f(I))))])),
                _: 1
            }, 8, ["class"])) : u("v-if", !0), r("div", {
                class: d(f(B).e("content"))
            }, [e.title || e.$slots.title ? (i(), m("span", {
                key: 0,
                class: d([f(B).e("title"), f(A)])
            }, [y(e.$slots, "title", {}, (() => [v(b(e.title), 1)]))], 2)) : u("v-if", !0), e.$slots.default || e.description ? (i(), m("p", {
                key: 1,
                class: d(f(B).e("description"))
            }, [y(e.$slots, "default", {}, (() => [v(b(e.description), 1)]))], 2)) : u("v-if", !0), e.closable ? (i(), m(k, {
                key: 2
            }, [e.closeText ? (i(), m("div", {
                key: 0,
                class: d([f(B).e("close-btn"), f(B).is("customed")]),
                onClick: M
            }, b(e.closeText), 3)) : (i(), o(f(_), {
                key: 1,
                class: d(f(B).e("close-btn")),
                onClick: M
            }, {
                default: n((() => [g(f(E))])),
                _: 1
            }, 8, ["class"]))], 64)) : u("v-if", !0)], 2)], 2), [
                [x, C.value]
            ])])),
            _: 3
        }, 8, ["name"]))
    }
}), [
    ["__file", "alert.vue"]
]));
export {
    q as E
};