import {
    b as e,
    d as t,
    _ as s,
    w as r
} from "./index-DZwhim7i.js";
import {
    m as i,
    be as a,
    h as o,
    o as l,
    j as n,
    p as d,
    X as c,
    r as p,
    s as v,
    ck as f
} from "./index-CQfCy4Xm.js";
const u = e({
        direction: {
            type: String,
            values: ["horizontal", "vertical"],
            default: "horizontal"
        },
        contentPosition: {
            type: String,
            values: ["left", "center", "right"],
            default: "center"
        },
        borderStyle: {
            type: t(String),
            default: "solid"
        }
    }),
    y = i({
        name: "ElDivider"
    });
const b = r(s(i({ ...y,
    props: u,
    setup(e) {
        const t = e,
            s = a("divider"),
            r = o((() => s.cssVar({
                "border-style": t.borderStyle
            })));
        return (e, t) => (l(), n("div", {
            class: d([c(s).b(), c(s).m(e.direction)]),
            style: f(c(r)),
            role: "separator"
        }, [e.$slots.default && "vertical" !== e.direction ? (l(), n("div", {
            key: 0,
            class: d([c(s).e("text"), c(s).is(e.contentPosition)])
        }, [p(e.$slots, "default")], 2)) : v("v-if", !0)], 6))
    }
}), [
    ["__file", "divider.vue"]
]));
export {
    b as E
};