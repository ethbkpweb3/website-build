import {
    b as s,
    d as e,
    i as t,
    _ as a,
    w as i
} from "./index-DZwhim7i.js";
import {
    m as r,
    be as l,
    h as p,
    J as f,
    o as n,
    j as o,
    p as u,
    X as c,
    r as d,
    q as x,
    t as m,
    s as S,
    l as v,
    ck as y
} from "./index-CQfCy4Xm.js";
const b = s({
        decimalSeparator: {
            type: String,
            default: "."
        },
        groupSeparator: {
            type: String,
            default: ","
        },
        precision: {
            type: Number,
            default: 0
        },
        formatter: Function,
        value: {
            type: e([Number, Object]),
            default: 0
        },
        prefix: String,
        suffix: String,
        title: String,
        valueStyle: {
            type: e([String, Object, Array])
        }
    }),
    g = r({
        name: "ElStatistic"
    });
const j = i(a(r({ ...g,
    props: b,
    setup(s, {
        expose: e
    }) {
        const a = s,
            i = l("statistic"),
            r = p((() => {
                const {
                    value: s,
                    formatter: e,
                    precision: i,
                    decimalSeparator: r,
                    groupSeparator: l
                } = a;
                if (f(e)) return e(s);
                if (!t(s) || Number.isNaN(s)) return s;
                let [p, n = ""] = String(s).split(".");
                return n = n.padEnd(i, "0").slice(0, i > 0 ? i : 0), p = p.replace(/\B(?=(\d{3})+(?!\d))/g, l), [p, n].join(n ? r : "")
            }));
        return e({
            displayValue: r
        }), (s, e) => (n(), o("div", {
            class: u(c(i).b())
        }, [s.$slots.title || s.title ? (n(), o("div", {
            key: 0,
            class: u(c(i).e("head"))
        }, [d(s.$slots, "title", {}, (() => [x(m(s.title), 1)]))], 2)) : S("v-if", !0), v("div", {
            class: u(c(i).e("content"))
        }, [s.$slots.prefix || s.prefix ? (n(), o("div", {
            key: 0,
            class: u(c(i).e("prefix"))
        }, [d(s.$slots, "prefix", {}, (() => [v("span", null, m(s.prefix), 1)]))], 2)) : S("v-if", !0), v("span", {
            class: u(c(i).e("number")),
            style: y(s.valueStyle)
        }, m(c(r)), 7), s.$slots.suffix || s.suffix ? (n(), o("div", {
            key: 1,
            class: u(c(i).e("suffix"))
        }, [d(s.$slots, "suffix", {}, (() => [v("span", null, m(s.suffix), 1)]))], 2)) : S("v-if", !0)], 2)], 2))
    }
}), [
    ["__file", "statistic.vue"]
]));
export {
    j as E
};