import {b as e, E as s, _ as a, w as i} from "./index-Dwv4qbXN.js";
import {a as t} from "./index-Citk0ABi.js";
import {m as n, be as l, h as d, o, j as r, n as f, w as c, cE as u, X as p, s as m, p as b, r as y} from "./index-jdACH0Rc.js";
const g = e({
    type: {
        type: String,
        values: ["primary", "success", "warning", "info", "danger", "default"],
        default: "default"
    },
    underline: {
        type: Boolean,
        default: !0
    },
    disabled: Boolean,
    href: {
        type: String,
        default: ""
    },
    target: {
        type: String,
        default: "_self"
    },
    icon: {
        type: t
    }
})
  , k = {
    click: e => e instanceof MouseEvent
}
  , v = n({
    name: "ElLink"
});
const h = i(a(n({
    ...v,
    props: g,
    emits: k,
    setup(e, {emit: a}) {
        const i = e
          , t = l("link")
          , n = d(( () => [t.b(), t.m(i.type), t.is("disabled", i.disabled), t.is("underline", i.underline && !i.disabled)]));
        function g(e) {
            i.disabled || a("click", e)
        }
        return (e, a) => (o(),
        r("a", {
            class: b(p(n)),
            href: e.disabled || !e.href ? void 0 : e.href,
            target: e.disabled || !e.href ? void 0 : e.target,
            onClick: g
        }, [e.icon ? (o(),
        f(p(s), {
            key: 0
        }, {
            default: c(( () => [(o(),
            f(u(e.icon)))])),
            _: 1
        })) : m("v-if", !0), e.$slots.default ? (o(),
        r("span", {
            key: 1,
            class: b(p(t).e("inner"))
        }, [y(e.$slots, "default")], 2)) : m("v-if", !0), e.$slots.icon ? y(e.$slots, "icon", {
            key: 2
        }) : m("v-if", !0)], 10, ["href", "target"]))
    }
}), [["__file", "link.vue"]]));
export {h as E};
