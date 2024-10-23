import {
    _ as t
} from "./Subtitle-C6WMT3xu.js";
import {
    _ as e
} from "./ButtonGR-CwZN5Zti.js";
import {
    _ as a
} from "./Title-BBFGXJPy.js";
import {
    m as l,
    G as s,
    Y as o,
    cD as i,
    dg as n,
    o as c,
    j as r,
    l as p,
    v as d,
    w as m,
    t as f,
    q as u,
    X as b,
    P as g,
    cB as h,
    h as k,
    cC as v,
    n as y,
    s as _,
    p as w
} from "./index-N2rhOp93.js";
import {
    _ as x
} from "./_plugin-vue_export-helper-BCo6x5W8.js";
import {
    _ as O
} from "./AppPop-BHeufWtp.js";
const P = {
        class: "columns is-vcentered b-columns-half-tablet-p"
    },
    C = {
        class: "column is-6"
    },
    j = {
        class: "column is-6"
    },
    z = {
        class: "buttons is-right is-relative z-1"
    },
    T = {
        class: "field is-grouped mx-auto"
    },
    A = {
        class: "pl-2 pr-3"
    },
    Z = x(l({
        __name: "FooterCta",
        props: {
            content: {
                default: void 0
            }
        },
        setup(l) {
            const k = s(),
                v = t => {
                    t ? window.open("https://play.google.com/store/apps/details?id=com.opz.dev") : window.open("https://testflight.apple.com/join/Oxsd9WMO")
                };
            o();
            const y = l,
                _ = {
                    opacity: 1,
                    y: 0,
                    transition: {
                        type: "spring",
                        stiffness: 90,
                        damping: 9,
                        delay: 150
                    }
                };
            return (l, s) => {
                const o = t,
                    w = a,
                    x = e,
                    O = i("motion");
                return n((c(), r("div", {
                    class: "footer-cta",
                    initial: {
                        opacity: 0,
                        y: 60
                    },
                    visibleOnce: _
                }, [p("div", P, [p("div", C, [d(o, {
                    tag: "h3",
                    size: 6,
                    weight: "semi",
                    narrow: "",
                    class: "pb-5"
                }, {
                    default: m((() => [p("span", null, f(y.content.subtitle), 1)])),
                    _: 1
                }), d(w, {
                    tag: "h2",
                    size: 2,
                    weight: "bold",
                    inverted: ""
                }, {
                    default: m((() => [u(f(y.content.title), 1)])),
                    _: 1
                })]), p("div", j, [p("div", null, [p("div", z, [d(x, {
                    class: "mr-2 btn-cta-btm",
                    onClick: s[0] || (s[0] = t => v())
                }, {
                    default: m((() => [u(f(y.content.links[0].label), 1)])),
                    _: 1
                }), d(x, {
                    class: "mr-2 btn-cta-btm",
                    onClick: s[1] || (s[1] = t => v(!0))
                }, {
                    default: m((() => [u(f(y.content.links[1].label), 1)])),
                    _: 1
                }), d(x, {
                    class: "btn-cta-btm-sm",
                    onClick: s[2] || (s[2] = t => b(k).push({
                        name: "user-center-dashboard-settings-api"
                    }))
                }, {
                    default: m((() => s[3] || (s[3] = [u("API")]))),
                    _: 1
                })]), p("div", T, [(c(!0), r(g, null, h(y.content.benefits, ((t, e) => (c(), r("div", {
                    key: e,
                    class: "control"
                }, [s[4] || (s[4] = p("i", {
                    class: "iconify",
                    "data-icon": "feather:check"
                }, null, -1)), p("span", A, f(t.label), 1)])))), 128))])])])])])), [
                    [O]
                ])
            }
        }
    }), [
        ["__scopeId", "data-v-c7c9245b"]
    ]),
    D = "/images/illustrations/opz.png",
    I = {
        class: "map-bg z-0",
        src: D,
        alt: "map illustration"
    };
const B = x({}, [
        ["render", function(t, e) {
            return c(), r("img", I)
        }],
        ["__scopeId", "data-v-078236e6"]
    ]),
    S = "/images/icons/x.svg",
    M = {
        class: "container"
    },
    G = {
        class: "columns footer-columns is-bordered pt-4 pb-6"
    },
    L = {
        class: "footer-column"
    },
    X = {
        class: "footer-column-list"
    },
    q = {
        key: 1,
        href: "https://whitepaper.opz.com/",
        target: "_blank",
        class: "footer-link text-white"
    },
    F = {
        class: "column is-one-fifth has-text-centered end-social"
    },
    R = {
        class: "social-block"
    },
    W = {
        class: "socials sharing-options"
    },
    H = ["href"],
    Y = {
        key: 0,
        src: S,
        alt: "X.com",
        width: "12"
    },
    $ = ["alt", "data-icon"],
    E = {
        class: "is-sr-only"
    },
    J = {
        class: "columns is-vcentered pt-6 pb-6"
    },
    K = {
        class: "column is-8"
    },
    N = {
        class: "is-flex d-column-mobile d-column-tablet-p is-align-items-center"
    },
    Q = {
        class: "py-2"
    },
    U = {
        key: 0,
        class: "inline-block px-2"
    },
    V = {
        class: "column is-4 has-text-centered"
    },
    tt = {
        class: "paragraph medium:text-right is-6",
        "data-config-id": "copyright"
    },
    et = x(l({
        __name: "Footer",
        props: {
            content: {},
            color: {},
            cta: {
                type: Boolean
            },
            token: {
                type: Boolean
            }
        },
        setup(e) {
            const a = e,
                {
                    t: l
                } = o(),
                s = k((() => [a.color && `footer-${a.color}`, a.cta && a.content.cta && "has-cta"]));
            return (e, o) => {
                const i = B,
                    n = Z,
                    k = t,
                    x = v("RouterLink");
                return c(), r("footer", {
                    class: w(["footer", s.value])
                }, [d(i), a.cta && a.content.cta ? (c(), y(n, {
                    key: 0,
                    content: a.content.cta
                }, null, 8, ["content"])) : _("", !0), p("div", M, [p("div", G, [(c(!0), r(g, null, h(a.content.columns, ((t, e) => (c(), r("div", {
                    key: e,
                    class: "column is-one-fifth"
                }, [p("div", L, [d(k, {
                    size: 6,
                    weight: "thin",
                    tag: "p",
                    leading: "",
                    inverted: "",
                    uppercase: ""
                }, {
                    default: m((() => [p("span", null, f(b(l)(t.title)), 1)])),
                    _: 2
                }, 1024), p("ul", X, [(c(!0), r(g, null, h(t.links, ((t, e) => (c(), r("li", {
                    key: e
                }, [t.to ? (c(), y(x, {
                    key: 0,
                    to: {
                        name: t.to
                    },
                    class: "footer-link text-white"
                }, {
                    default: m((() => [u(f(b(l)(t.label)), 1)])),
                    _: 2
                }, 1032, ["to"])) : (c(), r("a", q, f(b(l)(t.label)), 1))])))), 128))])])])))), 128)), p("div", F, [p("div", R, [p("div", W, [(c(!0), r(g, null, h(a.content.socials, ((t, e) => (c(), r("a", {
                    href: t.link,
                    key: e,
                    target: "_blank",
                    class: "footer-link",
                    rel: "noopener noreferrer"
                }, ["Twitter" === t.name ? (c(), r("img", Y)) : (c(), r("i", {
                    key: 1,
                    class: w(["iconify", t.icon]),
                    alt: t.alt,
                    "data-icon": t.icon,
                    "data-inline": "false"
                }, null, 10, $)), p("span", E, f(t.name), 1)], 8, H)))), 128))])])])]), p("div", J, [p("div", K, [p("div", N, [o[1] || (o[1] = p("a", {
                    class: "footer-logo-left",
                    href: "#"
                }, [p("img", {
                    class: "small:mx-auto large:mx-0",
                    src: O,
                    alt: "logo"
                }), p("span", {
                    class: "footer-logo-text"
                }, "OPZ")], -1)), p("ul", Q, [(c(!0), r(g, null, h(e.content.links, ((t, e) => (c(), r("li", {
                    key: e,
                    class: "inline-block px-2"
                }, [d(x, {
                    to: {
                        name: t.to
                    },
                    class: "footer-link text-white rem-90"
                }, {
                    default: m((() => [u(f(b(l)(t.label)), 1)])),
                    _: 2
                }, 1032, ["to"])])))), 128)), a.token ? (c(), r("li", U, [d(x, {
                    to: {
                        name: "token-risk"
                    },
                    class: "footer-link"
                }, {
                    default: m((() => o[0] || (o[0] = [u(" Token Disclaimer ")]))),
                    _: 1
                })])) : _("", !0)])])]), p("div", V, [p("p", tt, f(e.content.copyright), 1)])])])], 2)
            }
        }
    }), [
        ["__scopeId", "data-v-e046ce01"]
    ]),
    at = {
        cta: {
            title: "Try with your iOS, Android, or API",
            subtitle: "All the OPZ features you love, at your fingertips",
            benefits: [{
                label: "iOS"
            }, {
                label: "Android"
            }, {
                label: "API"
            }],
            links: [{
                label: "OPZ Beta",
                to: "https://testflight.apple.com/join/Oxsd9WMO"
            }, {
                label: "Google Play",
                to: "https://play.google.com/store/apps/details?id=com.opz.dev"
            }]
        },
        columns: [{
            title: "pga.about",
            links: [{
                label: "pga.about-us",
                to: "about-us"
            }, {
                label: "pga.careers",
                to: "jobs"
            }, {
                label: "pga.announcements",
                to: "announcements"
            }, {
                label: "exh.blog",
                to: "blog"
            }]
        }, {
            title: "pga.service",
            links: [{
                label: "pga.referral",
                to: "affiliates"
            }, {
                label: "ctm.apps-dashboard",
                to: "apps"
            }]
        }, {
            title: "pga.support",
            links: [{
                label: "pga.help-center",
                to: "help-desk-center"
            }, {
                label: "exh.white-paper",
                url: "help-desk-center"
            }, {
                label: "pga.feedback",
                to: "feedback"
            }]
        }],
        socials: [{
            icon: "fa-brands:discord",
            link: "https://discord.gg/SSmXDHCMZC",
            name: "Discord",
            alt: "Official Discord"
        }, {
            icon: "fa-x",
            link: "https://twitter.com/OPZ_Official",
            name: "Twitter",
            alt: "Official Twitter"
        }, {
            icon: "fa-brands:linkedin-in",
            link: "https://www.linkedin.com/company/opzofficial",
            name: "Linkedin",
            alt: "Official Linkedin"
        }, {
            icon: "fa-brands:telegram-plane",
            link: "https://t.me/OPZ_Chat",
            name: "Telegram",
            alt: "Official Telegram Chat"
        }, {
            icon: "fa-brands:telegram",
            link: "https://t.me/OPZ_Official",
            name: "Telegram",
            alt: "Official Telegram Channel"
        }],
        links: [{
            label: "pga.contact-us",
            to: "help-desk-contact"
        }, {
            label: "pga.privacy",
            to: "help-desk-terms-privacy-policy"
        }, {
            label: "pga.terms",
            to: "help-desk-terms"
        }],
        copyright: "2024 OPZ.COM. All rights reserved."
    };
export {
    et as _, S as a, D as b, at as f
};