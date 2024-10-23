import {m as e, h as o, cC as l, o as i, n as t, w as a, j as s, p as d, s as n, r as u} from "./index-jdACH0Rc.js";
import {_ as f} from "./_plugin-vue_export-helper-BCo6x5W8.js";
const c = ["href"]
  , r = ["disabled"]
  , y = f(e({
    __name: "Button",
    props: {
        color: {
            default: void 0
        },
        size: {
            default: void 0
        },
        long: {
            default: void 0
        },
        rounded: {
            type: Boolean,
            default: !1
        },
        outlined: {
            type: Boolean,
            default: !1
        },
        raised: {
            type: Boolean,
            default: !1
        },
        elevated: {
            type: Boolean,
            default: !1
        },
        bold: {
            type: Boolean
        },
        fullwidth: {
            type: Boolean,
            default: !1
        },
        to: {
            default: void 0
        },
        href: {
            default: void 0
        },
        loading: {
            type: Boolean,
            default: !1
        },
        disabled: {
            type: Boolean,
            default: !1
        },
        iconLeft: {
            default: void 0
        },
        iconRight: {
            default: void 0
        }
    },
    setup(e) {
        const f = e
          , y = o(( () => [f.size && `is-${f.size}`, f.color && `is-${f.color}`, f.rounded && "is-rounded", f.outlined && "is-outlined", f.raised && "is-raised", f.elevated && "is-elevated", f.bold && "is-bold", f.long && `is-long-${f.long}`, f.fullwidth && "is-fullwidth", f.loading && "is-loading"]));
        return (e, o) => {
            const p = l("RouterLink");
            return f.to ? (i(),
            t(p, {
                key: 0,
                to: f.to,
                class: d(["button", y.value])
            }, {
                default: a(( () => [f.iconLeft ? (i(),
                s("i", {
                    key: 0,
                    class: d(["iconify mr-2", f.iconLeft])
                }, null, 2)) : n("", !0), u(e.$slots, "default", {}, void 0, !0), f.iconRight ? (i(),
                s("i", {
                    key: 1,
                    class: d(["iconify ml-2", f.iconRight])
                }, null, 2)) : n("", !0)])),
                _: 3
            }, 8, ["to", "class"])) : f.href ? (i(),
            s("a", {
                key: 1,
                href: f.href,
                class: d(["button", y.value])
            }, [f.iconLeft ? (i(),
            s("i", {
                key: 0,
                class: d(["iconify mr-2", f.iconLeft])
            }, null, 2)) : n("", !0), u(e.$slots, "default", {}, void 0, !0), f.iconRight ? (i(),
            s("i", {
                key: 1,
                class: d(["iconify ml-2", f.iconRight])
            }, null, 2)) : n("", !0)], 10, c)) : (i(),
            s("button", {
                key: 2,
                class: d(["button", y.value]),
                disabled: f.disabled
            }, [f.iconLeft ? (i(),
            s("i", {
                key: 0,
                class: d(["iconify mr-2", f.iconLeft])
            }, null, 2)) : n("", !0), u(e.$slots, "default", {}, void 0, !0), f.iconRight ? (i(),
            s("i", {
                key: 1,
                class: d(["iconify ml-2", f.iconRight])
            }, null, 2)) : n("", !0)], 10, r))
        }
    }
}), [["__scopeId", "data-v-a8a7af6d"]]);
export {y as _};
