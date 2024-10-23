import {
    b as t,
    _ as e,
    w as s,
    d as a,
    i as u
} from "./index-Dwv4qbXN.js";
import {
    m as r,
    be as l,
    h as p,
    L as n,
    o,
    n as f,
    w as d,
    r as i,
    p as c,
    X as b,
    ck as m,
    cE as g,
    Q as y,
    dw as $
} from "./index-jdACH0Rc.js";
import {
    m as h
} from "./typescript-CRqm1_SZ.js";
const j = Symbol("rowContextKey"),
    v = t({
        tag: {
            type: String,
            default: "div"
        },
        gutter: {
            type: Number,
            default: 0
        },
        justify: {
            type: String,
            values: ["start", "center", "end", "space-around", "space-between", "space-evenly"],
            default: "start"
        },
        align: {
            type: String,
            values: ["top", "middle", "bottom"]
        }
    }),
    x = r({
        name: "ElRow"
    });
const N = s(e(r({ ...x,
        props: v,
        setup(t) {
            const e = t,
                s = l("row"),
                a = p((() => e.gutter));
            n(j, {
                gutter: a
            });
            const u = p((() => {
                    const t = {};
                    return e.gutter ? (t.marginRight = t.marginLeft = `-${e.gutter/2}px`, t) : t
                })),
                r = p((() => [s.b(), s.is(`justify-${e.justify}`, "start" !== e.justify), s.is(`align-${e.align}`, !!e.align)]));
            return (t, e) => (o(), f(g(t.tag), {
                class: c(b(r)),
                style: m(b(u))
            }, {
                default: d((() => [i(t.$slots, "default")])),
                _: 3
            }, 8, ["class", "style"]))
        }
    }), [
        ["__file", "row.vue"]
    ])),
    w = t({
        tag: {
            type: String,
            default: "div"
        },
        span: {
            type: Number,
            default: 24
        },
        offset: {
            type: Number,
            default: 0
        },
        pull: {
            type: Number,
            default: 0
        },
        push: {
            type: Number,
            default: 0
        },
        xs: {
            type: a([Number, Object]),
            default: () => h({})
        },
        sm: {
            type: a([Number, Object]),
            default: () => h({})
        },
        md: {
            type: a([Number, Object]),
            default: () => h({})
        },
        lg: {
            type: a([Number, Object]),
            default: () => h({})
        },
        xl: {
            type: a([Number, Object]),
            default: () => h({})
        }
    }),
    E = r({
        name: "ElCol"
    });
const _ = s(e(r({ ...E,
    props: w,
    setup(t) {
        const e = t,
            {
                gutter: s
            } = y(j, {
                gutter: p((() => 0))
            }),
            a = l("col"),
            r = p((() => {
                const t = {};
                return s.value && (t.paddingLeft = t.paddingRight = s.value / 2 + "px"), t
            })),
            n = p((() => {
                const t = [];
                ["span", "offset", "pull", "push"].forEach((s => {
                    const r = e[s];
                    u(r) && ("span" === s ? t.push(a.b(`${e[s]}`)) : r > 0 && t.push(a.b(`${s}-${e[s]}`)))
                }));
                return ["xs", "sm", "md", "lg", "xl"].forEach((s => {
                    u(e[s]) ? t.push(a.b(`${s}-${e[s]}`)) : $(e[s]) && Object.entries(e[s]).forEach((([e, u]) => {
                        t.push("span" !== e ? a.b(`${s}-${e}-${u}`) : a.b(`${s}-${u}`))
                    }))
                })), s.value && t.push(a.is("guttered")), [a.b(), t]
            }));
        return (t, e) => (o(), f(g(t.tag), {
            class: c(b(n)),
            style: m(b(r))
        }, {
            default: d((() => [i(t.$slots, "default")])),
            _: 3
        }, 8, ["class", "style"]))
    }
}), [
    ["__file", "col.vue"]
]));
export {
    _ as E, N as a
};