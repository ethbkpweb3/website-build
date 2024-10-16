import {
    n as e,
    f as t,
    a as o,
    E as r
} from "./index-Citk0ABi.js";
import {
    _ as a,
    b as n,
    d as i,
    e as l,
    a as s,
    D as p,
    w as d
} from "./index-Dwv4qbXN.js";
import {
    m as f,
    r as u,
    y as c,
    L as b,
    Q as m,
    I as v,
    X as y,
    C as g,
    h,
    be as w,
    o as S,
    n as x,
    w as B,
    j as A,
    p as C,
    t as N,
    s as O,
    q as $,
    bc as _
} from "./index-jdACH0Rc.js";
var j = a(f({
    inheritAttrs: !1
}), [
    ["render", function(e, t, o, r, a, n) {
        return u(e.$slots, "default")
    }],
    ["__file", "collection.vue"]
]);
var R = a(f({
    name: "ElCollectionItem",
    inheritAttrs: !1
}), [
    ["render", function(e, t, o, r, a, n) {
        return u(e.$slots, "default")
    }],
    ["__file", "collection-item.vue"]
]);
const E = n({
    trigger: e.trigger,
    effect: { ...t.effect,
        default: "light"
    },
    type: {
        type: i(String)
    },
    placement: {
        type: i(String),
        default: "bottom"
    },
    popperOptions: {
        type: i(Object),
        default: () => ({})
    },
    id: String,
    size: {
        type: String,
        default: ""
    },
    splitButton: Boolean,
    hideOnClick: {
        type: Boolean,
        default: !0
    },
    loop: {
        type: Boolean,
        default: !0
    },
    showTimeout: {
        type: Number,
        default: 150
    },
    hideTimeout: {
        type: Number,
        default: 150
    },
    tabindex: {
        type: i([Number, String]),
        default: 0
    },
    maxHeight: {
        type: i([Number, String]),
        default: ""
    },
    popperClass: {
        type: String,
        default: ""
    },
    disabled: Boolean,
    role: {
        type: String,
        default: "menu"
    },
    buttonProps: {
        type: i(Object)
    },
    teleported: t.teleported
});
n({
    command: {
        type: [Object, String, Number],
        default: () => ({})
    },
    disabled: Boolean,
    divided: Boolean,
    textValue: String,
    icon: {
        type: o
    }
}), n({
    onKeydown: {
        type: i(Function)
    }
}), (e => {
    const t = `El${e}Collection`,
        o = `${t}Item`,
        r = Symbol(t),
        a = Symbol(o),
        n = { ...j,
            name: t,
            setup() {
                const e = c(null),
                    t = new Map;
                b(r, {
                    itemMap: t,
                    getItems: () => {
                        const o = y(e);
                        if (!o) return [];
                        const r = Array.from(o.querySelectorAll("[data-el-collection-item]"));
                        return [...t.values()].sort(((e, t) => r.indexOf(e.ref) - r.indexOf(t.ref)))
                    },
                    collectionRef: e
                })
            }
        },
        i = { ...R,
            name: o,
            setup(e, {
                attrs: t
            }) {
                const o = c(null),
                    n = m(r, void 0);
                b(a, {
                    collectionItemRef: o
                }), v((() => {
                    const e = y(o);
                    e && n.itemMap.set(e, {
                        ref: e,
                        ...t
                    })
                })), g((() => {
                    const e = y(o);
                    n.itemMap.delete(e)
                }))
            }
        }
})("Dropdown");
const I = n({
        trigger: e.trigger,
        placement: E.placement,
        disabled: e.disabled,
        visible: t.visible,
        transition: t.transition,
        popperOptions: E.popperOptions,
        tabindex: E.tabindex,
        content: t.content,
        popperStyle: t.popperStyle,
        popperClass: t.popperClass,
        enterable: { ...t.enterable,
            default: !0
        },
        effect: { ...t.effect,
            default: "light"
        },
        teleported: t.teleported,
        title: String,
        width: {
            type: [String, Number],
            default: 150
        },
        offset: {
            type: Number,
            default: void 0
        },
        showAfter: {
            type: Number,
            default: 0
        },
        hideAfter: {
            type: Number,
            default: 200
        },
        autoClose: {
            type: Number,
            default: 0
        },
        showArrow: {
            type: Boolean,
            default: !0
        },
        persistent: {
            type: Boolean,
            default: !0
        },
        "onUpdate:visible": {
            type: Function
        }
    }),
    k = {
        "update:visible": e => l(e),
        "before-enter": () => !0,
        "before-leave": () => !0,
        "after-enter": () => !0,
        "after-leave": () => !0
    },
    M = f({
        name: "ElPopover"
    }),
    U = f({ ...M,
        props: I,
        emits: k,
        setup(e, {
            expose: t,
            emit: o
        }) {
            const a = e,
                n = h((() => a["onUpdate:visible"])),
                i = w("popover"),
                l = c(),
                p = h((() => {
                    var e;
                    return null == (e = y(l)) ? void 0 : e.popperRef
                })),
                d = h((() => [{
                    width: s(a.width)
                }, a.popperStyle])),
                f = h((() => [i.b(), a.popperClass, {
                    [i.m("plain")]: !!a.content
                }])),
                b = h((() => a.transition === `${i.namespace.value}-fade-in-linear`)),
                m = () => {
                    o("before-enter")
                },
                v = () => {
                    o("before-leave")
                },
                g = () => {
                    o("after-enter")
                },
                j = () => {
                    o("update:visible", !1), o("after-leave")
                };
            return t({
                popperRef: p,
                hide: () => {
                    var e;
                    null == (e = l.value) || e.hide()
                }
            }), (e, t) => (S(), x(y(r), _({
                ref_key: "tooltipRef",
                ref: l
            }, e.$attrs, {
                trigger: e.trigger,
                placement: e.placement,
                disabled: e.disabled,
                visible: e.visible,
                transition: e.transition,
                "popper-options": e.popperOptions,
                tabindex: e.tabindex,
                content: e.content,
                offset: e.offset,
                "show-after": e.showAfter,
                "hide-after": e.hideAfter,
                "auto-close": e.autoClose,
                "show-arrow": e.showArrow,
                "aria-label": e.title,
                effect: e.effect,
                enterable: e.enterable,
                "popper-class": y(f),
                "popper-style": y(d),
                teleported: e.teleported,
                persistent: e.persistent,
                "gpu-acceleration": y(b),
                "onUpdate:visible": y(n),
                onBeforeShow: m,
                onBeforeHide: v,
                onShow: g,
                onHide: j
            }), {
                content: B((() => [e.title ? (S(), A("div", {
                    key: 0,
                    class: C(y(i).e("title")),
                    role: "title"
                }, N(e.title), 3)) : O("v-if", !0), u(e.$slots, "default", {}, (() => [$(N(e.content), 1)]))])),
                default: B((() => [e.$slots.reference ? u(e.$slots, "reference", {
                    key: 0
                }) : O("v-if", !0)])),
                _: 3
            }, 16, ["trigger", "placement", "disabled", "visible", "transition", "popper-options", "tabindex", "content", "offset", "show-after", "hide-after", "auto-close", "show-arrow", "aria-label", "effect", "enterable", "popper-class", "popper-style", "teleported", "persistent", "gpu-acceleration", "onUpdate:visible"]))
        }
    });
const H = (e, t) => {
    const o = t.arg || t.value,
        r = null == o ? void 0 : o.popperRef;
    r && (r.triggerRef = e)
};
const q = d(a(U, [
    ["__file", "popover.vue"]
]), {
    directive: p({
        mounted(e, t) {
            H(e, t)
        },
        updated(e, t) {
            H(e, t)
        }
    }, "popover")
});
export {
    q as E
};