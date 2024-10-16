import {
    _ as e
} from "./Title-ChmnbwlA.js";
import {
    _ as t
} from "./Subtitle-ytb6lg8s.js";
import {
    m as a,
    h as s,
    o as l,
    j as i,
    v as d,
    w as n,
    l as o,
    p as r,
    r as p,
    q as u,
    t as v,
    s as g
} from "./index-jdACH0Rc.js";
import {
    _ as m
} from "./_plugin-vue_export-helper-BCo6x5W8.js";
const f = {
        class: "paragraph rem-125"
    },
    _ = m(a({
        __name: "PageTitle",
        props: {
            title: {
                default: void 0
            },
            subtitle: {
                default: void 0
            },
            text: {
                default: void 0
            },
            inverted: {
                type: Boolean,
                default: !1
            },
            aligned: {
                type: Boolean,
                default: !1
            },
            leading: {
                type: Boolean,
                default: !1
            },
            headsmall: {
                type: Boolean,
                default: !1
            }
        },
        setup(a) {
            const m = a,
                _ = s((() => [m.aligned && "is-aligned", m.leading && "is-leading", m.headsmall && "is-headsmall"])),
                h = s((() => [m.inverted ? "text-white" : "text-gradient"])),
                c = s((() => [m.aligned ? "" : "mx-auto"]));
            return (a, s) => {
                const x = t,
                    b = e;
                return l(), i("div", {
                    class: r(["page-title-new", _.value])
                }, [d(x, {
                    tag: "h3",
                    size: 5,
                    weight: "bold",
                    inverted: m.inverted,
                    class: "m-0 pb-5"
                }, {
                    default: n((() => [o("span", {
                        class: r(h.value)
                    }, [p(a.$slots, "subtitle", {}, (() => [u(v(a.subtitle), 1)]), !0)], 2)])),
                    _: 3
                }, 8, ["inverted"]), d(b, {
                    tag: "h1",
                    size: 2,
                    weight: "bold",
                    inverted: m.inverted,
                    leading: ""
                }, {
                    default: n((() => [o("span", null, [p(a.$slots, "default", {}, (() => [u(v(a.title), 1)]), !0)])])),
                    _: 3
                }, 8, ["inverted"]), m.text ? (l(), i("div", {
                    key: 0,
                    class: r(["max-w-5", c.value])
                }, [o("p", f, v(m.text), 1)], 2)) : g("", !0), p(a.$slots, "content", {}, void 0, !0)], 2)
            }
        }
    }), [
        ["__scopeId", "data-v-1fb0be51"]
    ]);
export {
    _
};