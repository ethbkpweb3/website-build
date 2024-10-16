import {b as o, l as e, d as t, E as a, _ as s, w as r, F as l} from "./index-Dwv4qbXN.js";
import {a as n, b as i, d as c, g as d, i as u} from "./index-D4R9Vjdp.js";
import {u as p} from "./use-global-config-Dm8LyY4T.js";
import {h as b, Q as g, y as v, W as f, bu as m, be as y, m as k, o as x, n as h, w as S, j as B, r as _, X as V, p as w, cE as $, P as N, s as z, bc as j, L as E, K as C, cS as I} from "./index-jdACH0Rc.js";
import {a as T} from "./index-Citk0ABi.js";
import {T as A} from "./index-Cg9BJciP.js";
const G = Symbol("buttonGroupContextKey")
  , P = ["default", "primary", "success", "warning", "info", "danger", "text", ""]
  , D = o({
    size: u,
    disabled: Boolean,
    type: {
        type: String,
        values: P,
        default: ""
    },
    icon: {
        type: T
    },
    nativeType: {
        type: String,
        values: ["button", "submit", "reset"],
        default: "button"
    },
    loading: Boolean,
    loadingIcon: {
        type: T,
        default: () => e
    },
    plain: Boolean,
    text: Boolean,
    link: Boolean,
    bg: Boolean,
    autofocus: Boolean,
    round: Boolean,
    circle: Boolean,
    color: String,
    dark: Boolean,
    autoInsertSpace: {
        type: Boolean,
        default: void 0
    },
    tag: {
        type: t([String, Object]),
        default: "button"
    }
})
  , F = {
    click: o => o instanceof MouseEvent
};
function K(o, e=20) {
    return o.mix("#141414", e).toString()
}
const U = k({
    name: "ElButton"
});
var L = s(k({
    ...U,
    props: D,
    emits: F,
    setup(o, {expose: e, emit: t}) {
        const s = o
          , r = function(o) {
            const e = d()
              , t = y("button");
            return b(( () => {
                let a = {}
                  , s = o.color;
                if (s) {
                    const r = s.match(/var\((.*?)\)/);
                    r && (s = window.getComputedStyle(window.document.documentElement).getPropertyValue(r[1]));
                    const l = new A(s)
                      , n = o.dark ? l.tint(20).toString() : K(l, 20);
                    if (o.plain)
                        a = t.cssVarBlock({
                            "bg-color": o.dark ? K(l, 90) : l.tint(90).toString(),
                            "text-color": s,
                            "border-color": o.dark ? K(l, 50) : l.tint(50).toString(),
                            "hover-text-color": `var(${t.cssVarName("color-white")})`,
                            "hover-bg-color": s,
                            "hover-border-color": s,
                            "active-bg-color": n,
                            "active-text-color": `var(${t.cssVarName("color-white")})`,
                            "active-border-color": n
                        }),
                        e.value && (a[t.cssVarBlockName("disabled-bg-color")] = o.dark ? K(l, 90) : l.tint(90).toString(),
                        a[t.cssVarBlockName("disabled-text-color")] = o.dark ? K(l, 50) : l.tint(50).toString(),
                        a[t.cssVarBlockName("disabled-border-color")] = o.dark ? K(l, 80) : l.tint(80).toString());
                    else {
                        const r = o.dark ? K(l, 30) : l.tint(30).toString()
                          , i = l.isDark() ? `var(${t.cssVarName("color-white")})` : `var(${t.cssVarName("color-black")})`;
                        if (a = t.cssVarBlock({
                            "bg-color": s,
                            "text-color": i,
                            "border-color": s,
                            "hover-bg-color": r,
                            "hover-text-color": i,
                            "hover-border-color": r,
                            "active-bg-color": n,
                            "active-border-color": n
                        }),
                        e.value) {
                            const e = o.dark ? K(l, 50) : l.tint(50).toString();
                            a[t.cssVarBlockName("disabled-bg-color")] = e,
                            a[t.cssVarBlockName("disabled-text-color")] = o.dark ? "rgba(255, 255, 255, 0.5)" : `var(${t.cssVarName("color-white")})`,
                            a[t.cssVarBlockName("disabled-border-color")] = e
                        }
                    }
                }
                return a
            }
            ))
        }(s)
          , l = y("button")
          , {_ref: u, _size: k, _type: E, _disabled: C, _props: I, shouldAddSpace: T, handleClick: P} = ( (o, e) => {
            n({
                from: "type.text",
                replacement: "link",
                version: "3.0.0",
                scope: "props",
                ref: "https://element-plus.org/en-US/component/button.html#button-attributes"
            }, b(( () => "text" === o.type)));
            const t = g(G, void 0)
              , a = p("button")
              , {form: s} = i()
              , r = c(b(( () => null == t ? void 0 : t.size)))
              , l = d()
              , u = v()
              , y = f()
              , k = b(( () => o.type || (null == t ? void 0 : t.type) || ""))
              , x = b(( () => {
                var e, t, s;
                return null != (s = null != (t = o.autoInsertSpace) ? t : null == (e = a.value) ? void 0 : e.autoInsertSpace) && s
            }
            ))
              , h = b(( () => "button" === o.tag ? {
                ariaDisabled: l.value || o.loading,
                disabled: l.value || o.loading,
                autofocus: o.autofocus,
                type: o.nativeType
            } : {}))
              , S = b(( () => {
                var o;
                const e = null == (o = y.default) ? void 0 : o.call(y);
                if (x.value && 1 === (null == e ? void 0 : e.length)) {
                    const o = e[0];
                    if ((null == o ? void 0 : o.type) === m) {
                        const e = o.children;
                        return new RegExp("^\\p{Unified_Ideograph}{2}$","u").test(e.trim())
                    }
                }
                return !1
            }
            ));
            return {
                _disabled: l,
                _size: r,
                _type: k,
                _ref: u,
                _props: h,
                shouldAddSpace: S,
                handleClick: t => {
                    l.value || o.loading ? t.stopPropagation() : ("reset" === o.nativeType && (null == s || s.resetFields()),
                    e("click", t))
                }
            }
        }
        )(s, t)
          , D = b(( () => [l.b(), l.m(E.value), l.m(k.value), l.is("disabled", C.value), l.is("loading", s.loading), l.is("plain", s.plain), l.is("round", s.round), l.is("circle", s.circle), l.is("text", s.text), l.is("link", s.link), l.is("has-bg", s.bg)]));
        return e({
            ref: u,
            size: k,
            type: E,
            disabled: C,
            shouldAddSpace: T
        }),
        (o, e) => (x(),
        h($(o.tag), j({
            ref_key: "_ref",
            ref: u
        }, V(I), {
            class: V(D),
            style: V(r),
            onClick: V(P)
        }), {
            default: S(( () => [o.loading ? (x(),
            B(N, {
                key: 0
            }, [o.$slots.loading ? _(o.$slots, "loading", {
                key: 0
            }) : (x(),
            h(V(a), {
                key: 1,
                class: w(V(l).is("loading"))
            }, {
                default: S(( () => [(x(),
                h($(o.loadingIcon)))])),
                _: 1
            }, 8, ["class"]))], 64)) : o.icon || o.$slots.icon ? (x(),
            h(V(a), {
                key: 1
            }, {
                default: S(( () => [o.icon ? (x(),
                h($(o.icon), {
                    key: 0
                })) : _(o.$slots, "icon", {
                    key: 1
                })])),
                _: 3
            })) : z("v-if", !0), o.$slots.default ? (x(),
            B("span", {
                key: 2,
                class: w({
                    [V(l).em("text", "expand")]: V(T)
                })
            }, [_(o.$slots, "default")], 2)) : z("v-if", !0)])),
            _: 3
        }, 16, ["class", "style", "onClick"]))
    }
}), [["__file", "button.vue"]]);
const M = {
    size: D.size,
    type: D.type
}
  , O = k({
    name: "ElButtonGroup"
});
var Q = s(k({
    ...O,
    props: M,
    setup(o) {
        const e = o;
        E(G, C({
            size: I(e, "size"),
            type: I(e, "type")
        }));
        const t = y("button");
        return (o, e) => (x(),
        B("div", {
            class: w(V(t).b("group"))
        }, [_(o.$slots, "default")], 2))
    }
}), [["__file", "button-group.vue"]]);
const R = r(L, {
    ButtonGroup: Q
})
  , W = l(Q);
export {R as E, W as a, P as b};
