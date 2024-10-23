import {
    m as e,
    h as o,
    o as s,
    j as n,
    p as a,
    y as l,
    cB as t,
    r as i,
    l as c,
    q as r,
    t as p,
    n as d,
    s as u,
    dh as v,
    dj as h,
    P as m
} from "./index-N2rhOp93.js";
import {
    _ as y
} from "./_plugin-vue_export-helper-BCo6x5W8.js";
const f = ["data-icon"],
    _ = y(e({
        __name: "Icon",
        props: {
            icon: {},
            size: {
                default: void 0
            },
            color: {
                default: void 0
            }
        },
        setup(e) {
            const l = e,
                t = o((() => l.icon && -1 !== l.icon.indexOf(":"))),
                i = o((() => [l.size && `rem-${l.size}`, l.color && `text-${l.color}`]));
            return (e, o) => (s(), n("span", {
                key: l.icon
            }, [t.value ? (s(), n("i", {
                key: 0,
                "aria-hidden": "true",
                class: a(["iconify", i.value]),
                "data-icon": l.icon
            }, null, 10, f)) : (s(), n("i", {
                key: 1,
                "aria-hidden": "true",
                class: a(l.icon)
            }, null, 2))]))
        }
    }), [
        ["__scopeId", "data-v-0f6b1899"]
    ]),
    x = ["open"],
    k = ["onKeydown", "onClick"],
    w = {
        class: "collapse-icon"
    },
    C = {
        class: "collapse-content"
    },
    g = e({
        __name: "Collapse",
        props: {
            items: {
                default: () => []
            },
            itemOpen: {
                default: void 0
            },
            withChevron: {
                type: Boolean
            }
        },
        setup(e) {
            const o = l(e.itemOpen),
                y = e => {
                    o.value !== e ? o.value = e : o.value = void 0
                };
            return (e, l) => {
                const f = _;
                return s(!0), n(m, null, t(e.items, ((l, t) => (s(), n("div", {
                    key: t,
                    class: a([
                        [e.withChevron && "has-chevron", !e.withChevron && "has-plus"], "collapse"
                    ]),
                    open: o.value === t || void 0
                }, [i(e.$slots, "collapse-item", {
                    item: l,
                    index: t,
                    toggle: y
                }, (() => [c("div", {
                    class: "collapse-header",
                    tabindex: "0",
                    onKeydown: v(h((() => y(t)), ["prevent"]), ["space"]),
                    onClick: h((() => y(t)), ["prevent"])
                }, [c("h3", null, [i(e.$slots, "collapse-item-summary", {
                    item: l,
                    index: t,
                    toggle: y
                }, (() => [r(p(l.title), 1)]))]), c("div", w, [e.withChevron ? (s(), d(f, {
                    key: 0,
                    icon: "feather:chevron-down"
                })) : e.withChevron ? u("", !0) : (s(), d(f, {
                    key: 1,
                    icon: "feather:plus"
                }))])], 40, k), c("div", C, [i(e.$slots, "collapse-item-content", {
                    item: l,
                    index: t,
                    toggle: y
                }, (() => [c("p", null, p(l.content), 1)]))])]))], 10, x)))), 128)
            }
        }
    });
export {
    g as _
};