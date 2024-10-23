import {
    b as e,
    E as t
} from "./index-CYOIannN.js";
import {
    b as o,
    q as s,
    a as n,
    E as a,
    _ as i,
    w as l
} from "./index-Dwv4qbXN.js";
import {
    a as c,
    f as r,
    E as p
} from "./index-Citk0ABi.js";
import {
    u as f
} from "./index-D4R9Vjdp.js";
import {
    m as u,
    be as m,
    y as d,
    h as y,
    o as x,
    n as v,
    w as B,
    l as T,
    p as h,
    X as g,
    ck as b,
    cE as k,
    s as E,
    q as _,
    t as S,
    r as j,
    v as w,
    bc as C
} from "./index-jdACH0Rc.js";
const $ = o({
        title: String,
        confirmButtonText: String,
        cancelButtonText: String,
        confirmButtonType: {
            type: String,
            values: e,
            default: "primary"
        },
        cancelButtonType: {
            type: String,
            values: e,
            default: "text"
        },
        icon: {
            type: c,
            default: () => s
        },
        iconColor: {
            type: String,
            default: "#f90"
        },
        hideIcon: {
            type: Boolean,
            default: !1
        },
        hideAfter: {
            type: Number,
            default: 200
        },
        teleported: r.teleported,
        persistent: r.persistent,
        width: {
            type: [String, Number],
            default: 150
        }
    }),
    q = {
        confirm: e => e instanceof MouseEvent,
        cancel: e => e instanceof MouseEvent
    },
    z = u({
        name: "ElPopconfirm"
    });
const A = l(i(u({ ...z,
    props: $,
    emits: q,
    setup(e, {
        emit: o
    }) {
        const s = e,
            {
                t: i
            } = f(),
            l = m("popconfirm"),
            c = d(),
            r = () => {
                var e, t;
                null == (t = null == (e = c.value) ? void 0 : e.onClose) || t.call(e)
            },
            u = y((() => ({
                width: n(s.width)
            }))),
            $ = e => {
                o("confirm", e), r()
            },
            q = e => {
                o("cancel", e), r()
            },
            z = y((() => s.confirmButtonText || i("el.popconfirm.confirmButtonText"))),
            A = y((() => s.cancelButtonText || i("el.popconfirm.cancelButtonText")));
        return (e, o) => (x(), v(g(p), C({
            ref_key: "tooltipRef",
            ref: c,
            trigger: "click",
            effect: "light"
        }, e.$attrs, {
            "popper-class": `${g(l).namespace.value}-popover`,
            "popper-style": g(u),
            teleported: e.teleported,
            "fallback-placements": ["bottom", "top", "right", "left"],
            "hide-after": e.hideAfter,
            persistent: e.persistent
        }), {
            content: B((() => [T("div", {
                class: h(g(l).b())
            }, [T("div", {
                class: h(g(l).e("main"))
            }, [!e.hideIcon && e.icon ? (x(), v(g(a), {
                key: 0,
                class: h(g(l).e("icon")),
                style: b({
                    color: e.iconColor
                })
            }, {
                default: B((() => [(x(), v(k(e.icon)))])),
                _: 1
            }, 8, ["class", "style"])) : E("v-if", !0), _(" " + S(e.title), 1)], 2), T("div", {
                class: h(g(l).e("action"))
            }, [j(e.$slots, "actions", {
                confirm: $,
                cancel: q
            }, (() => [w(g(t), {
                size: "small",
                type: "text" === e.cancelButtonType ? "" : e.cancelButtonType,
                text: "text" === e.cancelButtonType,
                onClick: q
            }, {
                default: B((() => [_(S(g(A)), 1)])),
                _: 1
            }, 8, ["type", "text"]), w(g(t), {
                size: "small",
                type: "text" === e.confirmButtonType ? "" : e.confirmButtonType,
                text: "text" === e.confirmButtonType,
                onClick: $
            }, {
                default: B((() => [_(S(g(z)), 1)])),
                _: 1
            }, 8, ["type", "text"])]))], 2)], 2)])),
            default: B((() => [e.$slots.reference ? j(e.$slots, "reference", {
                key: 0
            }) : E("v-if", !0)])),
            _: 3
        }, 16, ["popper-class", "popper-style", "teleported", "hide-after", "persistent"]))
    }
}), [
    ["__file", "popconfirm.vue"]
]));
export {
    A as E
};