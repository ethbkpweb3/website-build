import {
    m as a,
    h as s,
    cC as t,
    j as e,
    l as r,
    n as o,
    w as l,
    ck as d,
    r as i,
    p as n,
    o as p
} from "./index-jdACH0Rc.js";
import {
    _ as u
} from "./_plugin-vue_export-helper-BCo6x5W8.js";
const c = {
        class: "btn-gr-content"
    },
    f = ["href", "target"],
    y = u(a({
        __name: "ButtonGR",
        props: {
            size: {
                default: void 0
            },
            primary: {
                default: void 0
            },
            blank: {
                type: Boolean,
                default: void 0
            },
            disabled: {
                type: Boolean,
                default: !1
            },
            to: {
                default: void 0
            },
            href: {
                default: void 0
            }
        },
        setup(a) {
            const u = a,
                y = s((() => [u.size && `is-${u.size}`, u.disabled && "disabled"]));
            return (a, s) => {
                const b = t("RouterLink");
                return p(), e("div", {
                    class: n(["btn-gr", y.value])
                }, [r("div", c, [u.to ? (p(), o(b, {
                    key: 0,
                    to: u.to
                }, {
                    default: l((() => [r("span", {
                        class: "btn-gr-data",
                        style: d(u.primary && "background-color:" + u.primary)
                    }, [i(a.$slots, "default", {}, void 0, !0)], 4)])),
                    _: 3
                }, 8, ["to"])) : u.href ? (p(), e("a", {
                    key: 1,
                    href: u.href,
                    target: a.blank ? "_blank" : "_self"
                }, [r("span", {
                    class: "btn-gr-data",
                    style: d(u.primary && "background-color:" + u.primary)
                }, [i(a.$slots, "default", {}, void 0, !0)], 4)], 8, f)) : (p(), e("span", {
                    key: 2,
                    class: "btn-gr-data",
                    style: d(u.primary && "background-color:" + u.primary)
                }, [i(a.$slots, "default", {}, void 0, !0)], 4))])], 2)
            }
        }
    }), [
        ["__scopeId", "data-v-323203e1"]
    ]);
export {
    y as _
};