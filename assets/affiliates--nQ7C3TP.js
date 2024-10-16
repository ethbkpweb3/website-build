import {
    b as e,
    f as t,
    _ as a
} from "./index-BPv_7EZ9.js";
import {
    _ as s
} from "./Button-C_PMcYdl.js";
import {
    _ as o
} from "./ButtonGR-CCzD27Qk.js";
import {
    _ as r
} from "./Subtitle-C6oUzL5I.js";
import {
    _ as i
} from "./Title-B_xB6icS.js";
import {
    m as l,
    h as n,
    o as d,
    j as c,
    l as m,
    v as p,
    w as u,
    t as f,
    n as g,
    q as v,
    s as h,
    p as y,
    P as b,
    cB as x,
    cC as _,
    r as k,
    u as j,
    Y as w,
    X as B,
    cl as I
} from "./index-CQfCy4Xm.js";
import {
    _ as S
} from "./_plugin-vue_export-helper-BCo6x5W8.js";
import {
    _ as z
} from "./Section-DPQWt_EU.js";
import {
    _ as P
} from "./CaseStudy-DQNeIYfq.js";
import {
    _ as L
} from "./SideSection-DxrL8o77.js";
import {
    _ as A
} from "./Hero.vue_vue_type_style_index_0_lang-DHspTRKr.js";
import {
    _ as C
} from "./Navbar2-Cx1AKm6v.js";
import {
    a as T
} from "./index-BSBG2tux.js";
import {
    u as O
} from "./useSeoMeta-DJrBtPw8.js";
import {
    b as H
} from "./route-block-B_A1xBdJ.js";
import "./AppPop-DXr7YMXx.js";
import "./index-DZwhim7i.js";
import "./browser-Cv63Auap.js";
import "./index-DPTDKB4o.js";
import "./index-wV0BwLDn.js";
import "./index-DWyf7GKU.js";
import "./index-CB5HUA9W.js";
import "./google-play-0W6tGWt8.js";
import "./DarkImage-CKYmncsD.js";
import "./via-placeholder-csI6CdwS.js";
import "./Blob-B8YNKMyz.js";
import "./VPlaceload-DcvQMSN9.js";
import "./AvatarSimple-DIs6U3iF.js";
import "./user-qMNVzsWD.js";
import "./sett-Dbwu6PJ1.js";
import "./avatarSettings-C1kj7zSJ.js";
import "./vue3-avataaars-DO56oOZp.js";
import "./index-38aUouWI.js";
import "./index-5N62XIoj.js";
import "./index-DYh1qtlV.js";
import "./index-CreMjc0E.js";
import "./use-dialog-CC6CVfkB.js";
import "./use-global-config-CYuHb1FB.js";
import "./index-BR6qnryQ.js";
import "./index-BaPl-dvV.js";
import "./typescript-CRqm1_SZ.js";
import "./logo-DqlCWKKL.js";
import "./index-D21_sbBM.js";
import "./aria-C-hsWcn7.js";
import "./vue.8fc199ce-DBDcZ0BB.js";
const M = {
        class: "py-6"
    },
    R = {
        class: "cta-content mx-auto max-w-4"
    },
    $ = {
        key: 0,
        class: "buttons cta-content is-centered mt-5"
    },
    E = {
        class: "px-4"
    },
    W = {
        key: 2,
        class: "cta-content mx-auto max-w-5 max-w-tablet-p max-w-tp-4"
    },
    Z = {
        class: "columns b-columns-half-mobile b-columns-third-tablet-p"
    },
    q = ["src"],
    D = {
        key: 3,
        class: "box-shape box-shape-1"
    },
    F = {
        key: 4,
        class: "box-shape box-shape-2"
    },
    G = {
        key: 5,
        class: "box-shape box-shape-3"
    },
    N = {
        key: 6,
        class: "box-shape box-shape-4"
    },
    V = {
        key: 7,
        class: "box-shape box-shape-5"
    },
    J = {
        key: 8,
        class: "box-shape box-shape-6"
    },
    Q = S(l({
        __name: "CtaBlockA",
        props: {
            title: {},
            subtitle: {},
            logosText: {
                default: "Biggest companies using our product"
            },
            logos: {
                default: () => []
            },
            ctaPrimary: {
                default: void 0
            },
            ctaPrimaryLink: {
                default: void 0
            },
            ctaSecondary: {
                default: void 0
            },
            ctaSecondaryLink: {
                default: void 0
            },
            inverted: {
                type: Boolean,
                default: !1
            },
            boxed: {
                type: Boolean,
                default: !1
            },
            color: {
                default: "default"
            },
            shapes: {
                type: Boolean,
                default: !1
            },
            animated: {
                type: Boolean,
                default: !1
            }
        },
        setup(e) {
            const t = e,
                a = n((() => [t.inverted && !t.boxed && "default" === t.color && "is-inverted", t.boxed && "is-boxed", t.animated && "is-animated", t.color && `is-${t.color}`])),
                l = n((() => [t.boxed && "primary" === t.color && "has-text-white", t.boxed && "darker" === t.color && "has-text-white", t.inverted && !t.boxed && "default" === t.color && "text-light"]));
            return (e, n) => {
                const _ = i,
                    k = r,
                    j = o,
                    w = s;
                return d(), c("div", M, [m("div", {
                    class: y(["cta-block", a.value])
                }, [m("div", R, [p(_, {
                    tag: "h3",
                    size: 3,
                    weight: "semi",
                    inverted: t.boxed && "primary" === t.color || "darker" === t.color || t.inverted
                }, {
                    default: u((() => [m("span", null, f(t.title), 1)])),
                    _: 1
                }, 8, ["inverted"]), p(k, {
                    tag: "h3",
                    size: 5,
                    weight: "thin",
                    inverted: t.boxed && "primary" === t.color || "darker" === t.color || t.inverted,
                    class: "opacity-70"
                }, {
                    default: u((() => [m("span", null, f(t.subtitle), 1)])),
                    _: 1
                }, 8, ["inverted"])]), t.ctaPrimary ? (d(), c("div", $, [p(j, {
                    to: t.ctaPrimaryLink
                }, {
                    default: u((() => [m("span", E, f(e.$props.ctaPrimary), 1)])),
                    _: 1
                }, 8, ["to"]), t.ctaSecondary ? (d(), g(w, {
                    key: 0,
                    color: "light",
                    to: t.ctaPrimaryLink,
                    long: 2,
                    outlined: "primary" === t.color || "darker" === t.color
                }, {
                    default: u((() => [v(f(e.$props.ctaSecondary), 1)])),
                    _: 1
                }, 8, ["to", "outlined"])) : h("", !0)])) : h("", !0), t.logos.length > 0 ? (d(), c("p", {
                    key: 1,
                    class: y(["cta-content paragraph rem-95 opacity-70 my-5", l.value])
                }, f(t.logosText), 3)) : h("", !0), t.logos.length > 0 ? (d(), c("div", W, [m("div", Z, [(d(!0), c(b, null, x(t.logos.slice(0, 5), ((e, t) => (d(), c("div", {
                    key: t,
                    class: "column px-5"
                }, [m("img", {
                    src: e.logo,
                    alt: "Client logo",
                    width: "65",
                    height: "30"
                }, null, 8, q)])))), 128))])])) : h("", !0), t.shapes ? (d(), c("div", D)) : h("", !0), t.shapes ? (d(), c("div", F)) : h("", !0), t.shapes ? (d(), c("div", G)) : h("", !0), t.shapes ? (d(), c("div", N)) : h("", !0), t.shapes ? (d(), c("div", V)) : h("", !0), t.shapes ? (d(), c("div", J)) : h("", !0)], 2)])
            }
        }
    }), [
        ["__scopeId", "data-v-69616cd6"]
    ]),
    U = S(l({
        __name: "ActionLink",
        props: {
            link: {
                default: void 0
            },
            label: {
                default: "Learn More"
            },
            size: {
                default: void 0
            },
            narrow: {
                type: Boolean,
                default: !1
            },
            heavy: {
                type: Boolean,
                default: !1
            }
        },
        setup(e) {
            const t = e,
                a = n((() => ["tiny" === t.size && "rem-90", "small" === t.size && "rem-95", t.narrow && "is-narrow", t.heavy && "is-heavy"]));
            return (e, s) => {
                const o = _("RouterLink");
                return d(), g(o, {
                    to: t.link,
                    class: y(["action-link", a.value])
                }, {
                    default: u((() => [m("span", null, f(t.label), 1), s[0] || (s[0] = m("i", {
                        class: "iconify",
                        "data-icon": "feather:arrow-right"
                    }, null, -1))])),
                    _: 1
                }, 8, ["to", "class"])
            }
        }
    }), [
        ["__scopeId", "data-v-e34f40bc"]
    ]),
    X = {
        class: "py-6"
    },
    Y = {
        class: "py-4"
    },
    K = {
        class: "btn-gr"
    },
    ee = {
        class: "btn-gr-content"
    },
    te = {
        class: "btn-gr-data"
    },
    ae = {
        class: "px-4"
    },
    se = S(l({
        __name: "FeatureBlockA",
        props: {
            alignment: {
                default: void 0
            },
            features: {},
            columns: {
                default: 4
            },
            limit: {
                default: 6
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
            inverted: {
                type: Boolean,
                default: !1
            }
        },
        setup(e) {
            const t = e,
                a = n((() => [t.alignment && "has-text-centered"])),
                s = n((() => [t.columns && `is-${t.columns}`])),
                o = n((() => ["centered" === t.alignment && "mx-auto", "small" === t.size && "rem-90", 6 != t.columns && "max-w-3", 6 === t.columns && "max-w-4", 3 === t.columns && "rem-90", t.inverted && "text-light"]));
            return (e, r) => {
                const l = i,
                    n = U;
                return d(), c("div", X, [m("div", {
                    class: y(["columns is-multiline b-columns-half-tablet-p has-text-centered", a.value])
                }, [(d(!0), c(b, null, x(t.features.slice(0, t.limit), ((a, r) => (d(), c("div", {
                    key: r,
                    class: y(["column", s.value])
                }, [m("div", Y, [k(e.$slots, "column", {
                    feature: a,
                    index: r
                }, (() => [m("div", K, [m("div", ee, [m("span", te, [m("span", ae, [m("i", {
                    class: y(a.icon)
                }, null, 2)])])])]), p(l, {
                    tag: "h3",
                    size: 6,
                    weight: "semi",
                    leading: "",
                    inverted: t.inverted
                }, {
                    default: u((() => [m("span", null, f(a.title), 1)])),
                    _: 2
                }, 1032, ["inverted"]), m("p", {
                    class: y(["paragraph", o.value])
                }, f(a.text), 3), t.links ? (d(), g(n, {
                    key: 0,
                    link: a.link,
                    size: "small"
                }, null, 8, ["link"])) : h("", !0)]), !0)])], 2)))), 128))], 2)])
            }
        }
    }), [
        ["__scopeId", "data-v-668c44ce"]
    ]),
    oe = {
        class: "map-bg z-0",
        src: e,
        alt: "map background"
    };
const re = S({}, [
        ["render", function(e, t) {
            return d(), c("img", oe)
        }],
        ["__scopeId", "data-v-87c92e51"]
    ]),
    ie = {
        class: "columns is-vcentered"
    },
    le = {
        class: "column is-5"
    },
    ne = {
        class: "buttons is-relative z-1"
    },
    de = {
        class: "px-4"
    },
    ce = S(l({
        __name: "HeroC",
        setup(e) {
            const t = j(),
                {
                    t: a
                } = w();
            return (e, s) => {
                const l = i,
                    n = r,
                    c = o,
                    h = A;
                return d(), g(h, {
                    class: "marketing-hero",
                    alignment: "left",
                    size: "fullheight",
                    shape: "/assets/shapes/hero-shape.svg",
                    "shape-orientation": "right"
                }, {
                    body: u((() => [m("div", ie, [m("div", le, [p(l, {
                        tag: "h1",
                        size: 2,
                        weight: "bold"
                    }, {
                        default: u((() => s[0] || (s[0] = [v(" Share your "), m("b", {
                            style: {
                                color: "var(--primary)"
                            }
                        }, "link", -1), v(" and "), m("b", {
                            style: {
                                color: "var(--primary)"
                            }
                        }, "earn.", -1)]))),
                        _: 1
                    }), p(n, {
                        tag: "p",
                        size: 5,
                        classes: "b-centered-tablet-p text-medium"
                    }, {
                        default: u((() => s[1] || (s[1] = [v(" Help us introduce the world to the new cryptocurrency financial system. ")]))),
                        _: 1
                    }), m("div", ne, [p(c, {
                        to: B(t).isLoggedIn ? "/referral" : "/register"
                    }, {
                        default: u((() => [m("span", de, f(B(t).isLoggedIn ? B(a)("dash.go-to-dashboard") : B(a)("aff.referral-program")), 1)])),
                        _: 1
                    }, 8, ["to"])])]), s[2] || (s[2] = m("div", {
                        class: "column is-7 is-offset-1"
                    }, [m("img", {
                        src: "/images/illustrations/aff-info2.png",
                        style: {
                            "border-radius": "30px"
                        }
                    })], -1))])])),
                    _: 1
                })
            }
        }
    }), [
        ["__scopeId", "data-v-a0225b4c"]
    ]),
    me = {
        class: "container"
    },
    pe = {
        class: "container"
    },
    ue = l({
        __name: "affiliates",
        setup(e) {
            const s = j(),
                {
                    t: o
                } = w();
            return I((() => {
                O(o("aff.referral-program"), "Earn by referring others to OPZ's innovative digital asset solutions. Start growing your income with our trusted affiliate network today!")
            })), (e, r) => {
                const i = C,
                    l = ce,
                    n = L,
                    f = P,
                    g = z,
                    v = re,
                    h = se,
                    y = Q,
                    x = a;
                return d(), c(b, null, [p(i), m("div", null, [p(l), p(g, {
                    color: "darker"
                }, {
                    default: u((() => [m("div", me, [p(f, null, {
                        default: u((() => [p(n, {
                            subtitle: "Commission Rate Is Higher Than Industry Standards",
                            title: "UP TO 65% LIFETIME COMMISSION",
                            content: "We are excited to partner with like-minded and creative individuals to spread the word about trustworthy, safe, and reliable trading.",
                            image: "/images/illustrations/aff-img1.png",
                            imageWidth: "800",
                            imageHeight: "625",
                            cta: B(s).isLoggedIn ? B(o)("dash.go-to-dashboard") : "Join OPZ Affiliate Program",
                            inverted: "",
                            to: B(s).isLoggedIn ? "referral" : "register"
                        }, null, 8, ["cta", "to"])])),
                        _: 1
                    })])])),
                    _: 1
                }), p(g, {
                    color: "darker"
                }, {
                    background: u((() => [p(v)])),
                    default: u((() => [m("div", pe, [p(h, {
                        alignment: "centered",
                        features: B(T),
                        columns: 4,
                        limit: 3,
                        size: "medium",
                        inverted: ""
                    }, null, 8, ["features"]), p(y, {
                        title: "Ready To Go?",
                        subtitle: "Promote OPZ and earn money",
                        "cta-primary": B(s).isLoggedIn ? B(o)("dash.go-to-dashboard") : B(o)("aff.referral-program"),
                        "cta-primary-link": B(s).isLoggedIn ? "/referral" : "/register",
                        boxed: "",
                        shapes: "",
                        animated: ""
                    }, null, 8, ["cta-primary", "cta-primary-link"])])])),
                    _: 1
                }), p(x, {
                    content: B(t),
                    color: "dark",
                    cta: !1
                }, null, 8, ["content"])])], 64)
            }
        }
    });
"function" == typeof H && H(ue);
export {
    ue as
    default
};