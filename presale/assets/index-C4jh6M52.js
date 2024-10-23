import {
    f as e,
    _ as t
} from "./index-BPv_7EZ9.js";
import {
    _ as a
} from "./Buttons-CiRbhFtL.js";
import {
    _ as s
} from "./Button-C_PMcYdl.js";
import {
    _ as o
} from "./Title-B_xB6icS.js";
import {
    m as i,
    h as r,
    o as l,
    j as n,
    l as c,
    p as d,
    v as p,
    w as m,
    t as u,
    q as v,
    k as g,
    Y as h,
    X as f,
    cC as y,
    P as x,
    cB as _,
    s as j,
    dn as b
} from "./index-CQfCy4Xm.js";
import {
    _ as k
} from "./_plugin-vue_export-helper-BCo6x5W8.js";
import {
    _ as w
} from "./Collapse.vue_vue_type_style_index_0_lang-jEeEeRhV.js";
import {
    _ as C
} from "./SectionTitle.vue_vue_type_script_setup_true_lang-C7hy-prY.js";
import {
    _ as S
} from "./Section-DPQWt_EU.js";
import {
    _ as B
} from "./PageTitle-ChfDSLUN.js";
import {
    _ as P
} from "./Navbar2-Cx1AKm6v.js";
import {
    h as L
} from "./index-BSBG2tux.js";
import {
    m as H
} from "./index-CaRD-WAZ.js";
import {
    u as T
} from "./useSeoMeta-DJrBtPw8.js";
import "./Subtitle-C6oUzL5I.js";
import "./ButtonGR-CCzD27Qk.js";
import "./AppPop-DXr7YMXx.js";
import "./index-DZwhim7i.js";
import "./browser-Cv63Auap.js";
import "./index-DPTDKB4o.js";
import "./index-wV0BwLDn.js";
import "./index-DWyf7GKU.js";
import "./index-CB5HUA9W.js";
import "./google-play-0W6tGWt8.js";
import "./VPlaceload-DcvQMSN9.js";
import "./AvatarSimple-DIs6U3iF.js";
import "./via-placeholder-csI6CdwS.js";
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
const G = {
        class: "mx-auto max-w-8 py-6"
    },
    z = {
        class: "columns is-vcentered b-flex-tablet-p"
    },
    A = {
        class: "column is-6"
    },
    q = {
        class: "cta-content"
    },
    F = {
        class: "column is-6"
    },
    I = {
        class: "cta-content"
    },
    O = k(i({
        __name: "CtaBlockB",
        props: {
            titlePrimary: {},
            contentPrimary: {},
            titleSecondary: {},
            contentSecondary: {},
            ctaPrimary: {},
            ctaPrimaryLink: {},
            ctaSecondary: {},
            ctaSecondaryLink: {},
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
                i = r((() => [t.inverted && !t.boxed && "default" === t.color && "is-inverted", t.boxed && "is-boxed", t.shapes && "has-shapes", t.animated && "is-animated", t.color && `is-${t.color}`])),
                h = r((() => [t.boxed && "primary" === t.color && "has-text-white", t.boxed && "darker" === t.color && "has-text-white", t.inverted && !t.boxed && "default" === t.color && "text-light"]));
            return (e, r) => {
                const f = o,
                    y = s,
                    x = a;
                return l(), n("div", G, [c("div", z, [c("div", A, [c("div", {
                    class: d(["cta-block mobile:mb-6", i.value])
                }, [c("div", q, [p(f, {
                    tag: "h3",
                    size: 4,
                    weight: "semi",
                    inverted: t.boxed && "primary" === t.color || "darker" === t.color || t.inverted && "default" === t.color,
                    leading: ""
                }, {
                    default: m((() => [c("span", null, u(t.titlePrimary), 1)])),
                    _: 1
                }, 8, ["inverted"]), c("p", {
                    class: d(["paragraph mx-auto max-w-3 mb-4 opacity-70", h.value])
                }, u(t.contentPrimary), 3), p(x, {
                    alignment: "centered"
                }, {
                    default: m((() => [p(y, {
                        color: "primary",
                        long: 3,
                        to: t.ctaPrimaryLink,
                        raised: ""
                    }, {
                        default: m((() => [v(u(t.ctaPrimary), 1)])),
                        _: 1
                    }, 8, ["to"])])),
                    _: 1
                })]), r[0] || (r[0] = g('<div class="moving-shape moving-shape-1" data-v-e3f06752></div><div class="moving-shape moving-shape-2" data-v-e3f06752></div><div class="moving-shape moving-shape-3" data-v-e3f06752></div><div class="moving-shape moving-shape-4" data-v-e3f06752></div><div class="moving-shape moving-shape-5" data-v-e3f06752></div>', 5))], 2)]), c("div", F, [c("div", {
                    class: d(["cta-block", i.value])
                }, [c("div", I, [p(f, {
                    tag: "h3",
                    size: 4,
                    weight: "semi",
                    inverted: t.boxed && "primary" === t.color || "darker" === t.color || t.inverted && "default" === t.color,
                    leading: ""
                }, {
                    default: m((() => [c("span", null, u(t.titleSecondary), 1)])),
                    _: 1
                }, 8, ["inverted"]), c("p", {
                    class: d(["paragraph mx-auto max-w-3 mb-4 opacity-70", h.value])
                }, u(t.contentSecondary), 3), p(x, {
                    alignment: "centered"
                }, {
                    default: m((() => [p(y, {
                        color: "light",
                        to: t.ctaSecondaryLink,
                        long: 3,
                        outlined: "primary" === t.color || "darker" === t.color
                    }, {
                        default: m((() => [v(u(t.ctaSecondary), 1)])),
                        _: 1
                    }, 8, ["to", "outlined"])])),
                    _: 1
                })]), r[1] || (r[1] = g('<div class="moving-shape moving-shape-1" data-v-e3f06752></div><div class="moving-shape moving-shape-2" data-v-e3f06752></div><div class="moving-shape moving-shape-3" data-v-e3f06752></div><div class="moving-shape moving-shape-4" data-v-e3f06752></div><div class="moving-shape moving-shape-5" data-v-e3f06752></div>', 5))], 2)])])])
            }
        }
    }), [
        ["__scopeId", "data-v-e3f06752"]
    ]),
    Z = {
        class: "py-6"
    },
    R = {
        class: "mx-auto max-w-7"
    },
    M = {
        class: "columns"
    },
    Q = {
        class: "column"
    },
    V = {
        class: "collapse-wrap"
    },
    X = k(i({
        __name: "FaqListBoxed",
        props: {
            items: {
                default: () => []
            },
            chevrons: {
                type: Boolean,
                default: !1
            }
        },
        setup(e) {
            const t = e;
            return (e, a) => {
                const s = w;
                return l(), n("div", Z, [c("div", R, [c("div", M, [c("div", Q, [c("div", V, [p(s, {
                    items: t.items,
                    "with-chevron": t.chevrons
                }, null, 8, ["items", "with-chevron"])])])])])])
            }
        }
    }), [
        ["__scopeId", "data-v-a45fccc2"]
    ]),
    $ = {
        class: "flex-card category-card light-bordered"
    },
    D = {
        class: "card-body"
    },
    E = ["href"],
    N = {
        class: "inner-content"
    },
    U = {
        class: "inner-text"
    },
    W = {
        class: "is-flex is-align-items-center items-center go-read-m"
    },
    Y = {
        class: "read-m"
    },
    J = k(i({
        __name: "HelpCenterCategoryCard",
        props: {
            url: {
                default: ""
            },
            name: {
                default: ""
            },
            text: {
                default: ""
            },
            isGoToLink: {
                type: Boolean,
                default: !1
            }
        },
        setup(e) {
            const t = e,
                {
                    t: a
                } = h();
            return (e, s) => {
                const i = o;
                return l(), n("div", $, [c("div", D, [c("a", {
                    href: t.url
                }, [c("div", N, [p(i, {
                    tag: "h3",
                    size: 4,
                    weight: "thin",
                    leading: ""
                }, {
                    default: m((() => [c("span", null, u(t.name), 1)])),
                    _: 1
                }), c("div", U, [c("span", null, u(t.text), 1)]), c("a", W, [c("span", Y, u(t.isGoToLink ? f(a)("pga.visit-0").replace(":0", t.name) : f(a)("pga.read-more")), 1), s[0] || (s[0] = c("i", {
                    class: "fas fa-arrow-right"
                }, null, -1))])])], 8, E)])])
            }
        }
    }), [
        ["__scopeId", "data-v-48dd4bd6"]
    ]),
    K = {
        key: 0,
        class: "help-center-navigation"
    },
    ee = {
        class: "columns is-multiline b-columns-half-tablet-p"
    },
    te = ["src"],
    ae = k(i({
        __name: "HelpCenterHeader",
        props: {
            title: {},
            subtitle: {},
            text: {
                default: void 0
            },
            topics: {
                default: () => []
            },
            compact: {
                type: Boolean,
                default: !1
            }
        },
        setup(e) {
            const {
                t: t
            } = h(), a = e;
            return (e, s) => {
                const i = B,
                    r = o,
                    v = y("RouterLink");
                return l(), n("div", null, [p(i, {
                    title: a.title,
                    subtitle: a.subtitle,
                    text: a.text
                }, {
                    content: m((() => s[0] || (s[0] = []))),
                    _: 1
                }, 8, ["title", "subtitle", "text"]), a.compact ? j("", !0) : (l(), n("div", K, [c("div", ee, [(l(!0), n(x, null, _(a.topics.slice(0, 4), ((e, a) => (l(), n("div", {
                    key: a,
                    class: "column is-3"
                }, [p(v, {
                    to: e.link,
                    class: "box"
                }, {
                    default: m((() => [c("img", {
                        src: e.image,
                        width: "33",
                        class: d(["mb-3 img-help", e.iconColor && `text-${e.iconColor}`])
                    }, null, 10, te), p(r, {
                        tag: "h3",
                        size: 6,
                        weight: "semi",
                        narrow: ""
                    }, {
                        default: m((() => [c("span", null, u(f(t)("pga." + e.title)), 1)])),
                        _: 2
                    }, 1024)])),
                    _: 2
                }, 1032, ["to"])])))), 128))])]))])
            }
        }
    }), [
        ["__scopeId", "data-v-3272fd1d"]
    ]),
    se = [{
        icon: "ph:password",
        image: "/images/svg/res-pass.svg",
        iconColor: "primary",
        title: "reset-password",
        link: "/reset-password"
    }, {
        icon: "ph:user",
        image: "/images/svg/res-mail.svg",
        iconColor: "secondary",
        title: "reset-email",
        link: "/help-desk/contact?title=reset-email"
    }, {
        icon: "ph:device-mobile",
        iconColor: "warning",
        image: "/images/svg/res-phone.svg",
        title: "reset-phone",
        link: "/help-desk/contact?title=reset-phone"
    }, {
        icon: "ph:lock-open-light",
        iconColor: "success",
        image: "/images/svg/res-auth.svg",
        title: "reset-google",
        link: "/help-desk/contact?title=reset-google"
    }],
    oe = {
        class: "container"
    },
    ie = {
        class: "container"
    },
    re = {
        class: "columns is-multiline mt-5"
    },
    le = {
        class: "container"
    },
    ne = i({
        __name: "index",
        setup(a) {
            const {
                t: s
            } = h();
            return T(s("pga.help-center") + " | Here to help you 24/7", "Learn how to use OPZ and find all the answers to your OPZ-related questions. Step into our help center for detailed tutorials and support."), b(), (a, o) => {
                const i = P,
                    r = ae,
                    d = S,
                    u = C,
                    v = J,
                    g = X,
                    h = O,
                    y = t;
                return l(), n(x, null, [p(i), c("div", null, [p(d, {
                    color: "grey"
                }, {
                    default: m((() => [c("div", oe, [p(r, {
                        title: "Here to help you 24/7",
                        subtitle: "Help Center",
                        topics: f(se)
                    }, null, 8, ["topics"])])])),
                    _: 1
                }), p(d, {
                    color: "grey"
                }, {
                    default: m((() => [c("div", ie, [p(u, {
                        title: f(s)("ctm.documentation")
                    }, null, 8, ["title"]), c("div", re, [(l(!0), n(x, null, _(f(L), ((e, t) => (l(), n("div", {
                        key: t,
                        class: "column is-6"
                    }, [p(v, {
                        url: e.url,
                        isGoToLink: e.isGoToLink,
                        name: e.name,
                        text: e.text
                    }, null, 8, ["url", "isGoToLink", "name", "text"])])))), 128))])])])),
                    _: 1
                }), p(d, {
                    color: "grey",
                    wave: "wave-1",
                    "shape-color": "white"
                }, {
                    default: m((() => [c("div", le, [p(u, {
                        title: "Read our FAQs",
                        subtitle: "Have a Question?"
                    }), p(g, {
                        items: f(H)
                    }, null, 8, ["items"]), p(h, {
                        "title-primary": "Give us Feedback!",
                        "content-primary": "OPZ is always here to listen. Let's enhance our community together.",
                        "cta-primary": "Submit Feeback",
                        "cta-primary-link": "/feedback",
                        "title-secondary": "More info?",
                        "content-secondary": "Can't find what you're looking for? Contact OPZ Support.",
                        "cta-secondary": "Contact Us",
                        "cta-secondary-link": "/help-desk/contact",
                        boxed: "",
                        shapes: "",
                        animated: ""
                    })])])),
                    _: 1
                }), p(y, {
                    content: f(e),
                    color: "light",
                    cta: !1
                }, null, 8, ["content"])])], 64)
            }
        }
    });
export {
    ne as
    default
};