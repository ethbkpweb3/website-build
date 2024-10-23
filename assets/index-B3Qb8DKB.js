import {b as e, d as t, E as a, g as s, h as r, j as n, k as o, c as i, _ as l, w as c} from "./index-DXzVhuRT.js";
import {m as d, be as u, h as p, o as f, j as h, p as g, X as y, l as k, ck as v, r as b, t as m, s as x, n as w, w as $, cE as N, J as B, ds as F} from "./index-N2rhOp93.js";
const I = e({
    type: {
        type: String,
        default: "line",
        values: ["line", "circle", "dashboard"]
    },
    percentage: {
        type: Number,
        default: 0,
        validator: e => e >= 0 && e <= 100
    },
    status: {
        type: String,
        default: "",
        values: ["", "success", "exception", "warning"]
    },
    indeterminate: Boolean,
    duration: {
        type: Number,
        default: 3
    },
    strokeWidth: {
        type: Number,
        default: 6
    },
    strokeLinecap: {
        type: t(String),
        default: "round"
    },
    textInside: Boolean,
    width: {
        type: Number,
        default: 126
    },
    showText: {
        type: Boolean,
        default: !0
    },
    color: {
        type: t([String, Array, Function]),
        default: ""
    },
    striped: Boolean,
    stripedFlow: Boolean,
    format: {
        type: t(Function),
        default: e => `${e}%`
    }
})
  , D = d({
    name: "ElProgress"
});
const S = c(l(d({
    ...D,
    props: I,
    setup(e) {
        const t = e
          , l = {
            success: "#13ce66",
            exception: "#ff4949",
            warning: "#e6a23c",
            default: "#20a0ff"
        }
          , c = u("progress")
          , d = p(( () => {
            const e = {
                width: `${t.percentage}%`,
                animationDuration: `${t.duration}s`
            }
              , a = A(t.percentage);
            return a.includes("gradient") ? e.background = a : e.backgroundColor = a,
            e
        }
        ))
          , I = p(( () => (t.strokeWidth / t.width * 100).toFixed(1)))
          , D = p(( () => ["circle", "dashboard"].includes(t.type) ? Number.parseInt("" + (50 - Number.parseFloat(I.value) / 2), 10) : 0))
          , S = p(( () => {
            const e = D.value
              , a = "dashboard" === t.type;
            return `\n          M 50 50\n          m 0 ${a ? "" : "-"}${e}\n          a ${e} ${e} 0 1 1 0 ${a ? "-" : ""}${2 * e}\n          a ${e} ${e} 0 1 1 0 ${a ? "" : "-"}${2 * e}\n          `
        }
        ))
          , T = p(( () => 2 * Math.PI * D.value))
          , j = p(( () => "dashboard" === t.type ? .75 : 1))
          , E = p(( () => `${-1 * T.value * (1 - j.value) / 2}px`))
          , W = p(( () => ({
            strokeDasharray: `${T.value * j.value}px, ${T.value}px`,
            strokeDashoffset: E.value
        })))
          , _ = p(( () => ({
            strokeDasharray: `${T.value * j.value * (t.percentage / 100)}px, ${T.value}px`,
            strokeDashoffset: E.value,
            transition: "stroke-dasharray 0.6s ease 0s, stroke 0.6s ease, opacity ease 0.6s"
        })))
          , L = p(( () => {
            let e;
            return e = t.color ? A(t.percentage) : l[t.status] || l.default,
            e
        }
        ))
          , M = p(( () => "warning" === t.status ? s : "line" === t.type ? "success" === t.status ? r : n : "success" === t.status ? o : i))
          , P = p(( () => "line" === t.type ? 12 + .4 * t.strokeWidth : .111111 * t.width + 2))
          , z = p(( () => t.format(t.percentage)));
        const A = e => {
            var a;
            const {color: s} = t;
            if (B(s))
                return s(e);
            if (F(s))
                return s;
            {
                const t = function(e) {
                    const t = 100 / e.length;
                    return e.map(( (e, a) => F(e) ? {
                        color: e,
                        percentage: (a + 1) * t
                    } : e)).sort(( (e, t) => e.percentage - t.percentage))
                }(s);
                for (const a of t)
                    if (a.percentage > e)
                        return a.color;
                return null == (a = t[t.length - 1]) ? void 0 : a.color
            }
        }
        ;
        return (e, t) => (f(),
        h("div", {
            class: g([y(c).b(), y(c).m(e.type), y(c).is(e.status), {
                [y(c).m("without-text")]: !e.showText,
                [y(c).m("text-inside")]: e.textInside
            }]),
            role: "progressbar",
            "aria-valuenow": e.percentage,
            "aria-valuemin": "0",
            "aria-valuemax": "100"
        }, ["line" === e.type ? (f(),
        h("div", {
            key: 0,
            class: g(y(c).b("bar"))
        }, [k("div", {
            class: g(y(c).be("bar", "outer")),
            style: v({
                height: `${e.strokeWidth}px`
            })
        }, [k("div", {
            class: g([y(c).be("bar", "inner"), {
                [y(c).bem("bar", "inner", "indeterminate")]: e.indeterminate
            }, {
                [y(c).bem("bar", "inner", "striped")]: e.striped
            }, {
                [y(c).bem("bar", "inner", "striped-flow")]: e.stripedFlow
            }]),
            style: v(y(d))
        }, [(e.showText || e.$slots.default) && e.textInside ? (f(),
        h("div", {
            key: 0,
            class: g(y(c).be("bar", "innerText"))
        }, [b(e.$slots, "default", {
            percentage: e.percentage
        }, ( () => [k("span", null, m(y(z)), 1)]))], 2)) : x("v-if", !0)], 6)], 6)], 2)) : (f(),
        h("div", {
            key: 1,
            class: g(y(c).b("circle")),
            style: v({
                height: `${e.width}px`,
                width: `${e.width}px`
            })
        }, [(f(),
        h("svg", {
            viewBox: "0 0 100 100"
        }, [k("path", {
            class: g(y(c).be("circle", "track")),
            d: y(S),
            stroke: `var(${y(c).cssVarName("fill-color-light")}, #e5e9f2)`,
            "stroke-linecap": e.strokeLinecap,
            "stroke-width": y(I),
            fill: "none",
            style: v(y(W))
        }, null, 14, ["d", "stroke", "stroke-linecap", "stroke-width"]), k("path", {
            class: g(y(c).be("circle", "path")),
            d: y(S),
            stroke: y(L),
            fill: "none",
            opacity: e.percentage ? 1 : 0,
            "stroke-linecap": e.strokeLinecap,
            "stroke-width": y(I),
            style: v(y(_))
        }, null, 14, ["d", "stroke", "opacity", "stroke-linecap", "stroke-width"])]))], 6)), !e.showText && !e.$slots.default || e.textInside ? x("v-if", !0) : (f(),
        h("div", {
            key: 2,
            class: g(y(c).e("text")),
            style: v({
                fontSize: `${y(P)}px`
            })
        }, [b(e.$slots, "default", {
            percentage: e.percentage
        }, ( () => [e.status ? (f(),
        w(y(a), {
            key: 1
        }, {
            default: $(( () => [(f(),
            w(N(y(M))))])),
            _: 1
        })) : (f(),
        h("span", {
            key: 0
        }, m(y(z)), 1))]))], 6))], 10, ["aria-valuenow"]))
    }
}), [["__file", "progress.vue"]]));
export {S as E};
