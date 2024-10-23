import {
    _ as e
} from "./Title-ChmnbwlA.js";
import {
    m as o,
    o as a,
    j as t,
    r as s,
    p as l,
    h as i,
    l as d,
    P as r,
    cB as n,
    v as u,
    w as c,
    t as m
} from "./index-jdACH0Rc.js";
import {
    _ as p
} from "./_plugin-vue_export-helper-BCo6x5W8.js";
const f = p(o({
        __name: "IconBox",
        props: {
            size: {
                default: void 0
            },
            color: {
                default: "default"
            },
            rounded: {
                type: Boolean
            },
            bordered: {
                type: Boolean,
                default: !1
            },
            inverted: {
                type: Boolean,
                default: !1
            }
        },
        setup(e) {
            const o = e;
            return (e, i) => (a(), t("div", {
                class: l(["icon-box", [o.size && "is-" + o.size, o.color && "is-" + o.color, o.rounded && "is-rounded", o.bordered && "is-bordered", o.inverted && "is-inverted"]])
            }, [s(e.$slots, "default", {}, void 0, !0)], 2))
        }
    }), [
        ["__scopeId", "data-v-5480b062"]
    ]),
    v = {
        class: "py-6 mx-auto max-w-9"
    },
    _ = {
        class: "columns is-multiline b-columns-half-tablet-p"
    },
    x = ["src"],
    h = ["href"],
    z = p(o({
        __name: "FeatureBlockT",
        props: {
            features: {},
            limit: {
                default: 3
            },
            size: {
                default: void 0
            },
            rounded: {
                type: Boolean,
                default: !1
            },
            links: {
                type: Boolean,
                default: !1
            },
            animated: {
                type: Boolean,
                default: !1
            },
            horizontal: {
                type: Boolean,
                default: !1
            }
        },
        setup(o) {
            const p = o,
                z = i((() => [p.horizontal ? "is-6" : "is-3"])),
                B = i((() => [p.animated && "animated", !p.horizontal && "has-text-centered p-5 large:p-10"]));
            return i((() => ["small" === p.size && "rem-90", p.links && "mb-4", !p.horizontal && "mx-auto max-w-2"])), (o, i) => {
                const b = f,
                    y = e;
                return a(), t("div", v, [d("div", _, [(a(!0), t(r, null, n(p.features.slice(0, p.limit), ((e, i) => (a(), t("div", {
                    key: i,
                    class: l(["column", z.value])
                }, [d("div", {
                    class: l(["box", B.value])
                }, [s(o.$slots, "column", {
                    feature: e,
                    index: i
                }, (() => [u(b, {
                    color: e.color,
                    size: p.size,
                    rounded: p.rounded
                }, {
                    default: c((() => [d("img", {
                        src: e.icon,
                        width: "18"
                    }, null, 8, x)])),
                    _: 2
                }, 1032, ["color", "size", "rounded"]), u(y, {
                    tag: "h3",
                    size: 6,
                    weight: "semi",
                    leading: ""
                }, {
                    default: c((() => [d("span", null, m(e.title), 1)])),
                    _: 2
                }, 1024), d("a", {
                    href: "mailto:" + e.text
                }, [d("span", null, m(e.text), 1)], 8, h)]), !0)], 2)], 2)))), 128))])])
            }
        }
    }), [
        ["__scopeId", "data-v-a1596e17"]
    ]);
export {
    z as _
};