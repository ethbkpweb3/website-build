import {
    m as e,
    W as a,
    h as t,
    y as s,
    be as o,
    o as l,
    n as r,
    w as d,
    v as i,
    dg as n,
    d9 as f,
    X as c,
    l as u,
    p,
    j as b,
    r as v,
    t as m,
    s as y,
    bc as h,
    dj as k,
    bw as C
} from "./index-jdACH0Rc.js";
import {
    b as w,
    E as A,
    c as x,
    a as E,
    _ as g,
    w as F
} from "./index-Dwv4qbXN.js";
import {
    E as L
} from "./index-B1yvdImc.js";
import {
    g as R,
    h as _
} from "./index-Citk0ABi.js";
import {
    d as j,
    a as $,
    u as T
} from "./use-dialog-CmZNE833.js";
import {
    a as S,
    u as z
} from "./index-D4R9Vjdp.js";
const B = w({ ...j,
        direction: {
            type: String,
            default: "rtl",
            values: ["ltr", "rtl", "ttb", "btt"]
        },
        size: {
            type: [String, Number],
            default: "30%"
        },
        withHeader: {
            type: Boolean,
            default: !0
        },
        modalFade: {
            type: Boolean,
            default: !0
        },
        headerAriaLevel: {
            type: String,
            default: "2"
        }
    }),
    I = $,
    P = e({
        name: "ElDrawer",
        inheritAttrs: !1
    });
const q = F(g(e({ ...P,
    props: B,
    emits: I,
    setup(e, {
        expose: w
    }) {
        const g = e,
            F = a();
        S({
            scope: "el-drawer",
            from: "the title slot",
            replacement: "the header slot",
            version: "3.0.0",
            ref: "https://element-plus.org/en-US/component/drawer.html#slots"
        }, t((() => !!F.title)));
        const j = s(),
            $ = s(),
            B = o("drawer"),
            {
                t: I
            } = z(),
            {
                afterEnter: P,
                afterLeave: q,
                beforeLeave: D,
                visible: H,
                rendered: O,
                titleId: M,
                bodyId: N,
                zIndex: U,
                onModalClick: W,
                onOpenAutoFocus: X,
                onCloseAutoFocus: G,
                onFocusoutPrevented: J,
                onCloseRequested: K,
                handleClose: Q
            } = T(g, j),
            V = t((() => "rtl" === g.direction || "ltr" === g.direction)),
            Y = t((() => E(g.size)));
        return w({
            handleClose: Q,
            afterEnter: P,
            afterLeave: q
        }), (e, a) => (l(), r(c(_), {
            to: e.appendTo,
            disabled: "body" === e.appendTo && !e.appendToBody
        }, {
            default: d((() => [i(C, {
                name: c(B).b("fade"),
                onAfterEnter: c(P),
                onAfterLeave: c(q),
                onBeforeLeave: c(D),
                persisted: ""
            }, {
                default: d((() => [n(i(c(L), {
                    mask: e.modal,
                    "overlay-class": e.modalClass,
                    "z-index": c(U),
                    onClick: c(W)
                }, {
                    default: d((() => [i(c(R), {
                        loop: "",
                        trapped: c(H),
                        "focus-trap-el": j.value,
                        "focus-start-el": $.value,
                        onFocusAfterTrapped: c(X),
                        onFocusAfterReleased: c(G),
                        onFocusoutPrevented: c(J),
                        onReleaseRequested: c(K)
                    }, {
                        default: d((() => [u("div", h({
                            ref_key: "drawerRef",
                            ref: j,
                            "aria-modal": "true",
                            "aria-label": e.title || void 0,
                            "aria-labelledby": e.title ? void 0 : c(M),
                            "aria-describedby": c(N)
                        }, e.$attrs, {
                            class: [c(B).b(), e.direction, c(H) && "open"],
                            style: c(V) ? "width: " + c(Y) : "height: " + c(Y),
                            role: "dialog",
                            onClick: k((() => {}), ["stop"])
                        }), [u("span", {
                            ref_key: "focusStartRef",
                            ref: $,
                            class: p(c(B).e("sr-focus")),
                            tabindex: "-1"
                        }, null, 2), e.withHeader ? (l(), b("header", {
                            key: 0,
                            class: p(c(B).e("header"))
                        }, [e.$slots.title ? v(e.$slots, "title", {
                            key: 1
                        }, (() => [y(" DEPRECATED SLOT ")])) : v(e.$slots, "header", {
                            key: 0,
                            close: c(Q),
                            titleId: c(M),
                            titleClass: c(B).e("title")
                        }, (() => [e.$slots.title ? y("v-if", !0) : (l(), b("span", {
                            key: 0,
                            id: c(M),
                            role: "heading",
                            "aria-level": e.headerAriaLevel,
                            class: p(c(B).e("title"))
                        }, m(e.title), 11, ["id", "aria-level"]))])), e.showClose ? (l(), b("button", {
                            key: 2,
                            "aria-label": c(I)("el.drawer.close"),
                            class: p(c(B).e("close-btn")),
                            type: "button",
                            onClick: c(Q)
                        }, [i(c(A), {
                            class: p(c(B).e("close"))
                        }, {
                            default: d((() => [i(c(x))])),
                            _: 1
                        }, 8, ["class"])], 10, ["aria-label", "onClick"])) : y("v-if", !0)], 2)) : y("v-if", !0), c(O) ? (l(), b("div", {
                            key: 1,
                            id: c(N),
                            class: p(c(B).e("body"))
                        }, [v(e.$slots, "default")], 10, ["id"])) : y("v-if", !0), e.$slots.footer ? (l(), b("div", {
                            key: 2,
                            class: p(c(B).e("footer"))
                        }, [v(e.$slots, "footer")], 2)) : y("v-if", !0)], 16, ["aria-label", "aria-labelledby", "aria-describedby", "onClick"])])),
                        _: 3
                    }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusoutPrevented", "onReleaseRequested"])])),
                    _: 3
                }, 8, ["mask", "overlay-class", "z-index", "onClick"]), [
                    [f, c(H)]
                ])])),
                _: 3
            }, 8, ["name", "onAfterEnter", "onAfterLeave", "onBeforeLeave"])])),
            _: 3
        }, 8, ["to", "disabled"]))
    }
}), [
    ["__file", "drawer.vue"]
]));
export {
    q as E
};