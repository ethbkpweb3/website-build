import {
    f as e,
    _ as a
} from "./index-BPv_7EZ9.js";
import {
    _ as l
} from "./Section-DPQWt_EU.js";
import {
    _ as t
} from "./Button-C_PMcYdl.js";
import {
    _ as s
} from "./Title-B_xB6icS.js";
import {
    _ as o
} from "./AvatarSimple-DIs6U3iF.js";
import {
    v as i
} from "./viaPlaceholderErrorHandler-CLF0o5vT.js";
import {
    m as n,
    h as r,
    y as u,
    cC as d,
    o as c,
    j as p,
    l as m,
    X as v,
    t as f,
    v as g,
    w as h,
    q as j,
    p as y,
    Y as _,
    r as b,
    P as x,
    cB as C,
    bx as V
} from "./index-CQfCy4Xm.js";
import {
    _ as w
} from "./_plugin-vue_export-helper-BCo6x5W8.js";
import "./index-DZwhim7i.js";
import {
    u as A
} from "./useSeoMeta-DJrBtPw8.js";
import {
    E as z
} from "./index-CRtkyuT7.js";
import {
    _ as B
} from "./Control-BAxR9hhH.js";
import {
    _ as k
} from "./VInput-DA6_NWOO.js";
import {
    a as I
} from "./index-Gj2QCn8P.js";
import {
    _ as D
} from "./Navbar2-Cx1AKm6v.js";
import "./Subtitle-C6oUzL5I.js";
import "./ButtonGR-CCzD27Qk.js";
import "./AppPop-DXr7YMXx.js";
import "./browser-Cv63Auap.js";
import "./index-DPTDKB4o.js";
import "./index-wV0BwLDn.js";
import "./index-DWyf7GKU.js";
import "./index-CB5HUA9W.js";
import "./google-play-0W6tGWt8.js";
import "./via-placeholder-csI6CdwS.js";
import "./vue.8fc199ce-DBDcZ0BB.js";
import "./index-38aUouWI.js";
import "./typescript-CRqm1_SZ.js";
import "./index-BaPl-dvV.js";
import "./VPlaceload-DcvQMSN9.js";
import "./user-qMNVzsWD.js";
import "./sett-Dbwu6PJ1.js";
import "./avatarSettings-C1kj7zSJ.js";
import "./vue3-avataaars-DO56oOZp.js";
import "./index-5N62XIoj.js";
import "./index-DYh1qtlV.js";
import "./index-CreMjc0E.js";
import "./use-dialog-CC6CVfkB.js";
import "./use-global-config-CYuHb1FB.js";
import "./index-BR6qnryQ.js";
import "./logo-DqlCWKKL.js";
import "./index-D21_sbBM.js";
import "./aria-C-hsWcn7.js";
const M = {
        class: "card-image"
    },
    S = ["src", "alt"],
    P = {
        class: "likes"
    },
    T = {
        class: "card-head"
    },
    E = {
        class: "card-foot"
    },
    G = {
        class: "bid"
    },
    U = {
        class: "bid-value"
    },
    L = {
        class: "bid-action"
    },
    Y = w(n({
        __name: "CharityCard",
        props: {
            content: {},
            flat: {
                type: Boolean,
                default: !1
            }
        },
        setup(e) {
            const a = e,
                l = r((() => [a.flat && "is-flat"])),
                n = 6e4,
                _ = 36e5,
                b = 24 * _,
                x = u(0),
                C = u(0),
                V = u(0),
                w = u(0),
                A = Math.floor(11 * Math.random()),
                z = new Date(Date.now() + 864e5 * A).getTime(),
                B = setInterval((() => {
                    const e = (new Date).getTime(),
                        a = z - e;
                    w.value = Math.floor(a / b), V.value = Math.floor(a % b / _), C.value = Math.floor(a % _ / n), x.value = Math.floor(a % n / 1e3), a < 0 && clearInterval(B)
                }), 0);
            return (e, n) => {
                const r = d("RouterLink"),
                    u = o,
                    _ = s,
                    b = t;
                return c(), p("div", {
                    class: y(["nft-card", l.value])
                }, [m("div", M, [m("img", {
                    src: a.content.logo,
                    alt: a.content.name,
                    loading: "lazy",
                    width: "600",
                    onErrorOnce: n[0] || (n[0] = e => v(i)(e, "600x510"))
                }, null, 40, S), m("div", P, [n[1] || (n[1] = m("i", {
                    class: "rem-80 text-danger"
                }, null, -1)), m("span", null, f(a.content.country), 1)]), g(r, {
                    to: {
                        name: "index",
                        params: {
                            slug: a.content.id
                        }
                    },
                    class: "details"
                }, {
                    default: h((() => n[2] || (n[2] = [m("i", {
                        class: "rem-70 fas fa-donate"
                    }, null, -1)]))),
                    _: 1
                }, 8, ["to"])]), m("div", T, [g(r, {
                    to: {
                        name: "apps-charity-slug",
                        params: {
                            slug: a.content.id
                        }
                    }
                }, {
                    default: h((() => [g(u, {
                        picture: a.content.logo
                    }, null, 8, ["picture"])])),
                    _: 1
                }, 8, ["to"]), g(r, {
                    to: {
                        name: "apps-charity-slug",
                        params: {
                            slug: a.content.id
                        }
                    }
                }, {
                    default: h((() => [g(_, {
                        tag: "h3",
                        size: 6,
                        weight: "semi"
                    }, {
                        default: h((() => [j(f(a.content.name), 1)])),
                        _: 1
                    })])),
                    _: 1
                }, 8, ["to"])]), m("div", E, [m("div", G, [n[4] || (n[4] = m("span", {
                    class: "bid-label"
                }, "Tax Id:", -1)), m("span", U, f(a.content.nonprofitTaxID), 1), m("span", L, [g(b, {
                    to: {
                        name: "apps-charity-slug",
                        params: {
                            slug: a.content.id
                        }
                    },
                    color: "primary",
                    raised: ""
                }, {
                    default: h((() => n[3] || (n[3] = [j(" Donate ")]))),
                    _: 1
                }, 8, ["to"])])])])], 2)
            }
        }
    }), [
        ["__scopeId", "data-v-d5ec0920"]
    ]),
    R = {
        class: "py-6"
    },
    q = {
        class: "grid-inner"
    },
    F = w(n({
        __name: "CharityCardGrid",
        props: {
            items: {
                default: () => []
            },
            pulled: {
                type: Boolean,
                default: !1
            },
            sideGrid: {
                type: Boolean,
                default: !1
            }
        },
        setup(e) {
            const a = e,
                {
                    t: l
                } = _();
            A(l("dash.charity"), "Your Contribution Makes a Difference. Your support helps us contribute more effectively to charity through digital currency.");
            const t = u(1),
                s = u(12),
                o = r((() => [a.sideGrid && "is-side-grid"])),
                i = r((() => [a.sideGrid ? "is-3" : "is-2"]));
            return (e, l) => {
                const n = Y;
                return c(), p("div", R, [m("div", {
                    class: y(["nft-grid", o.value])
                }, [b(e.$slots, "title", {}, void 0, !0), m("div", q, [g(V, {
                    name: "list",
                    tag: "div",
                    class: "columns is-multiline b-columns-half-tablet-p b-columns-third-tablet-l"
                }, {
                    default: h((() => [(c(!0), p(x, null, C(a.items.slice(t.value * s.value - s.value, s.value * t.value), ((e, a) => (c(), p("div", {
                        key: a,
                        class: y(["column", i.value])
                    }, [g(n, {
                        content: e,
                        flat: ""
                    }, null, 8, ["content"])], 2)))), 128))])),
                    _: 1
                })])], 2), g(v(z), {
                    currentPage: t.value,
                    "onUpdate:currentPage": l[0] || (l[0] = e => t.value = e),
                    "page-size": s.value,
                    "onUpdate:pageSize": l[1] || (l[1] = e => s.value = e),
                    class: "mt-5",
                    background: "",
                    "page-sizes": [12, 25, 50, 100],
                    "hide-on-single-page": "",
                    layout: "sizes, prev, pager, next, jumper",
                    total: a.items.length
                }, null, 8, ["currentPage", "page-size", "total"])])
            }
        }
    }), [
        ["__scopeId", "data-v-2d14420f"]
    ]),
    X = ["value"],
    H = ["value"],
    N = w(n({
        __name: "VSelect",
        props: {
            options: {},
            value: {
                default: void 0
            },
            modelValue: {
                default: void 0
            },
            placeholder: {
                default: ""
            },
            readonly: {
                type: Boolean,
                default: !1
            },
            rounded: {
                type: Boolean,
                default: !1
            }
        },
        emits: ["update:modelValue"],
        setup(e, {
            emit: a
        }) {
            const l = a,
                t = e,
                s = r((() => [t.rounded && "is-rounded"]));
            return (e, a) => (c(), p("div", {
                class: y(["select", s.value])
            }, [m("select", {
                value: e.modelValue,
                onChange: a[0] || (a[0] = e => function(e) {
                    const a = e.target.value;
                    l("update:modelValue", a)
                }(e))
            }, [m("option", null, f(t.placeholder), 1), (c(!0), p(x, null, C(t.options, ((e, a) => (c(), p("option", {
                key: a,
                value: e.value
            }, f(e.label), 9, H)))), 128))], 40, X)], 2))
        }
    }), [
        ["__scopeId", "data-v-385e4a79"]
    ]),
    O = {
        class: "mt-6"
    },
    W = {
        class: "flex-form is-relative z-1"
    },
    $ = {
        class: "flex items-center"
    },
    J = {
        class: "columns -mt-6"
    },
    K = {
        class: "column is-3"
    },
    Q = {
        class: "nft-list-filters"
    },
    Z = {
        class: "py-6 filters-bd"
    },
    ee = {
        class: "nft-list-filters-inner"
    },
    ae = {
        class: "mb-5"
    },
    le = {
        class: "mb-5 filters-type"
    },
    te = {
        class: "b-hidden-mobile b-hidden-tablet-p"
    },
    se = {
        class: "column is-9"
    },
    oe = w(n({
        __name: "CharityFilterList",
        setup(e) {
            const a = [{
                    value: "anondonation",
                    label: "Anonymous donations"
                }],
                l = u(I),
                o = u([{}]);
            o.value = [], l.value.forEach((e => {
                e.country && !o.value.find((a => (null == a ? void 0 : a.value) == e.country)) && o.value.push({
                    value: e.country,
                    label: e.country
                })
            }));
            const i = u(""),
                n = u("All"),
                d = u("All"),
                v = r((() => l.value.filter((e => (!i.value || e.name.toLowerCase().includes(i.value.toLowerCase())) && ("All" == n.value || e.country == n.value) && ("All" == d.value || e.allowsAnon == ("anondonation" == d.value)))))),
                f = () => {},
                y = () => {
                    d.value = "All", n.value = "All", i.value = ""
                };
            return (e, l) => {
                const r = s,
                    u = k,
                    _ = B,
                    b = N,
                    x = t,
                    C = F;
                return c(), p("div", null, [m("form", O, [m("div", W, [m("div", null, [m("div", $, [g(r, {
                    tag: "h1",
                    size: 3,
                    weight: "bold",
                    narrow: ""
                }, {
                    default: h((() => l[3] || (l[3] = [m("span", null, "Donate Crypto", -1)]))),
                    _: 1
                })])]), g(_, {
                    icon: "feather:search",
                    expanded: ""
                }, {
                    default: h((() => [g(u, {
                        modelValue: i.value,
                        "onUpdate:modelValue": l[0] || (l[0] = e => i.value = e),
                        placeholder: "Search..."
                    }, null, 8, ["modelValue"])])),
                    _: 1
                })])]), m("div", J, [m("div", K, [m("div", Q, [m("div", Z, [m("div", ee, [m("div", ae, [l[4] || (l[4] = m("label", {
                    class: "small-label"
                }, "Country", -1)), g(_, null, {
                    default: h((() => [g(b, {
                        modelValue: n.value,
                        "onUpdate:modelValue": l[1] || (l[1] = e => n.value = e),
                        options: o.value,
                        placeholder: "All",
                        onChange: f
                    }, null, 8, ["modelValue", "options"])])),
                    _: 1
                })]), m("div", le, [l[5] || (l[5] = m("label", {
                    class: "small-label"
                }, "Type", -1)), g(_, null, {
                    default: h((() => [g(b, {
                        modelValue: d.value,
                        "onUpdate:modelValue": l[2] || (l[2] = e => d.value = e),
                        options: a,
                        placeholder: "All"
                    }, null, 8, ["modelValue"])])),
                    _: 1
                })]), m("div", te, [g(x, {
                    class: "btn-reset",
                    fullwidth: "",
                    bold: "",
                    onClick: y
                }, {
                    default: h((() => l[6] || (l[6] = [j(" Reset Filters ")]))),
                    _: 1
                })])])])])]), m("div", se, [g(C, {
                    items: v.value,
                    "side-grid": ""
                }, null, 8, ["items"])])])])
            }
        }
    }), [
        ["__scopeId", "data-v-8b476105"]
    ]),
    ie = {
        class: "container"
    },
    ne = n({
        __name: "charity-list",
        setup: t => (t, s) => {
            const o = D,
                i = oe,
                n = l,
                r = a;
            return c(), p(x, null, [g(o), m("div", null, [g(n, {
                color: "grey",
                overflown: ""
            }, {
                default: h((() => [m("div", ie, [g(i)])])),
                _: 1
            }), g(r, {
                content: v(e),
                color: "dark",
                cta: !1
            }, null, 8, ["content"])])], 64)
        }
    });
export {
    ne as
    default
};