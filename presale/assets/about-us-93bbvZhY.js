import {
    f as e,
    _ as t
} from "./index-BPv_7EZ9.js";
import {
    _ as s
} from "./FeatureBlockT-9M0q3Tg6.js";
import {
    _ as i
} from "./ButtonGR-CCzD27Qk.js";
import {
    _ as a
} from "./Title-B_xB6icS.js";
import {
    m as o,
    G as l,
    Y as n,
    h as r,
    o as c,
    j as m,
    l as u,
    p as d,
    t as p,
    v as g,
    w as v,
    q as f,
    X as h,
    P as b,
    cB as y,
    cC as _,
    n as j,
    cl as x
} from "./index-CQfCy4Xm.js";
import {
    _ as w
} from "./_plugin-vue_export-helper-BCo6x5W8.js";
import {
    _ as k
} from "./CaseStudy-DQNeIYfq.js";
import {
    _ as z
} from "./SideSection-DxrL8o77.js";
import {
    _ as O
} from "./SectionTitle.vue_vue_type_script_setup_true_lang-C7hy-prY.js";
import {
    _ as P
} from "./PageTitle-ChfDSLUN.js";
import {
    _ as S
} from "./Section-DPQWt_EU.js";
import {
    _ as A
} from "./Hero.vue_vue_type_style_index_0_lang-DHspTRKr.js";
import {
    _ as I
} from "./Navbar2-Cx1AKm6v.js";
import {
    f as C
} from "./index-BSBG2tux.js";
import {
    u as T
} from "./vue.8fc199ce-DBDcZ0BB.js";
import {
    u as Z
} from "./useSeoMeta-DJrBtPw8.js";
import {
    b as B
} from "./route-block-B_A1xBdJ.js";
import "./Subtitle-C6oUzL5I.js";
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
import "./Button-C_PMcYdl.js";
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
const F = {
        class: "py-6 px-6"
    },
    E = {
        class: "logo-stats"
    },
    V = {
        class: "paragraph"
    },
    D = {
        class: "left"
    },
    M = {
        class: "paragraph max-w-5"
    },
    R = {
        class: "mt-4 btn-donate"
    },
    W = {
        class: "right"
    },
    L = {
        class: "columns is-vcentered is-multiline b-columns-half-mobile b-columns-half-tablet-p"
    },
    U = ["src"],
    q = w(o({
        __name: "LogoStats",
        props: {
            title: {},
            subtitle: {},
            heading: {},
            content: {},
            logos: {
                default: () => []
            },
            inverted: {
                type: Boolean,
                default: !1
            }
        },
        setup(e) {
            const t = l(),
                s = e;
            n();
            const o = r((() => [s.inverted && "is-inverted"]));
            return (e, l) => {
                const n = a,
                    r = i;
                return c(), m("div", F, [u("div", E, [u("div", {
                    class: d(["big-number", o.value])
                }, [u("span", null, p(s.title), 1)], 2), u("p", V, p(s.subtitle), 1), u("hr", {
                    class: d(o.value)
                }, null, 2), u("div", {
                    class: d(["clients", o.value])
                }, [u("div", D, [g(n, {
                    tag: "h3",
                    size: 5,
                    weight: "semi",
                    leading: "",
                    inverted: s.inverted
                }, {
                    default: v((() => [u("span", null, p(s.heading), 1)])),
                    _: 1
                }, 8, ["inverted"]), u("p", M, p(s.content), 1), u("div", R, [g(r, {
                    size: "small",
                    onClick: l[0] || (l[0] = e => h(t).push({
                        name: "apps-charity"
                    }))
                }, {
                    default: v((() => l[1] || (l[1] = [f("Visit")]))),
                    _: 1
                })])]), u("div", W, [u("div", L, [(c(!0), m(b, null, y(s.logos.slice(0, 6), ((e, t) => (c(), m("div", {
                    key: t,
                    class: "column is-4"
                }, [u("img", {
                    class: "is-relative",
                    src: e.logo,
                    alt: "Customer logo"
                }, null, 8, U)])))), 128))])])], 2)])])
            }
        }
    }), [
        ["__scopeId", "data-v-22f1bb71"]
    ]),
    J = {
        class: "mx-auto max-w-9 pb-6"
    },
    K = {
        class: "columns is-multiline b-columns-third-tablet-p justify-center flex flex-col items-center"
    },
    G = {
        class: "team-member"
    },
    H = ["src"],
    N = {
        class: "meta-info"
    },
    X = {
        class: "left"
    },
    Y = {
        class: "right"
    },
    Q = ["href"],
    $ = ["data-icon"],
    ee = {
        class: "is-sr-only"
    },
    te = {
        class: "paragraph rem-100",
        style: {
            "text-align": "center"
        }
    },
    se = w(o({
        __name: "TeamSection2",
        props: {
            members: {
                default: () => []
            }
        },
        setup(e) {
            const t = e;
            return (e, s) => {
                const o = a,
                    l = i,
                    n = _("RouterLink");
                return c(), m("div", J, [u("div", K, [(c(!0), m(b, null, y(t.members, ((e, t) => (c(), m("div", {
                    key: t,
                    class: "column is-3"
                }, [u("div", G, [u("img", {
                    class: "mb-2",
                    src: e.picture,
                    alt: "Team member picture",
                    style: {
                        width: "100px",
                        "border-radius": "500px"
                    }
                }, null, 8, H), u("div", N, [u("div", X, [g(o, {
                    size: 6,
                    tag: "h3",
                    narrow: ""
                }, {
                    default: v((() => [f(p(e.name), 1)])),
                    _: 2
                }, 1024), u("p", null, p(e.role), 1)]), u("div", Y, [(c(!0), m(b, null, y(e.socialProfiles, ((e, t) => (c(), m("a", {
                    key: t,
                    href: e.url,
                    target: "_blank",
                    class: "social-profile"
                }, [u("i", {
                    class: "iconify",
                    "data-icon": e.icon
                }, null, 8, $), u("span", ee, p(e.name), 1)], 8, Q)))), 128))])]), u("p", null, p(e.desc), 1)])])))), 128)), g(l, {
                    class: "mb-3 mt-3",
                    href: "https://www.linkedin.com/company/opzofficial/people/",
                    blank: "",
                    style: {
                        width: "300px"
                    }
                }, {
                    default: v((() => s[0] || (s[0] = [f("Meet more Team Members on LinkedIn!")]))),
                    _: 1
                }), u("p", te, [s[2] || (s[2] = f(" Join our team! We're actively seeking new members. Send your CV to ")), s[3] || (s[3] = u("a", {
                    href: "mailto:jobs@opz.com"
                }, "jobs@opz.com", -1)), s[4] || (s[4] = f(" or explore all available positions: ")), g(n, {
                    to: "jobs",
                    class: "header-item"
                }, {
                    default: v((() => s[1] || (s[1] = [f(" Explore Jobs ")]))),
                    _: 1
                })])])])
            }
        }
    }), [
        ["__scopeId", "data-v-6e5073aa"]
    ]),
    ie = {
        class: "company-values mx-auto max-w-10"
    },
    ae = {
        class: "columns b-columns-third-tablet-p"
    },
    oe = {
        class: "company-value has-text-centered"
    },
    le = ["src"],
    ne = {
        class: "pb-4 mx-auto max-w-3"
    },
    re = w(o({
        __name: "ValuesSection",
        props: {
            values: {
                default: () => []
            },
            inverted: {
                type: Boolean,
                default: !1
            }
        },
        setup(e) {
            const t = e;
            return (e, s) => {
                const i = a;
                return c(), m("div", ie, [u("div", ae, [(c(!0), m(b, null, y(t.values, ((e, s) => (c(), m("div", {
                    key: s,
                    class: "column is-4"
                }, [u("div", oe, [u("img", {
                    src: e.img,
                    class: "img-value"
                }, null, 8, le), g(i, {
                    tag: "h3",
                    size: 5,
                    leading: "",
                    inverted: t.inverted
                }, {
                    default: v((() => [f(p(e.title), 1)])),
                    _: 2
                }, 1032, ["inverted"]), u("p", ne, p(e.content), 1)])])))), 128))])])
            }
        }
    }), [
        ["__scopeId", "data-v-e3da8fad"]
    ]),
    ce = {
        class: "columns is-vcentered"
    },
    me = {
        class: "column is-5"
    },
    ue = w(o({
        __name: "HeroE",
        setup: e => (e, t) => {
            const s = P,
                i = A;
            return c(), j(i, {
                color: "grey",
                class: "product-hero",
                orientation: "right"
            }, {
                body: v((() => [u("div", ce, [u("div", me, [g(s, {
                    aligned: "",
                    title: "Advancing the Future of AI-Driven Blockchain Innovation",
                    subtitle: "About Us",
                    text: "OPZ makes it easier and safer for millions to access Web3.\n            Fueled by KeyFusion technology, Our mission is to accelerate the transition to self-ownership of assets.\n            "
                }, {
                    content: v((() => t[0] || (t[0] = []))),
                    _: 1
                })]), t[1] || (t[1] = u("div", {
                    class: "column is-7 is-offset-1"
                }, [u("div", {
                    class: "hero-image-container justify-around flex align-center items-center"
                }, [u("img", {
                    class: "pt-6 mb-0 levitate",
                    src: "/assets/shapes/opz-info4.png",
                    width: "360",
                    height: "360"
                }), u("div", {
                    class: "hero-bg-circle"
                })])], -1))])])),
                _: 1
            })
        }
    }), [
        ["__scopeId", "data-v-8f34b4fd"]
    ]),
    de = [{
        id: 0,
        logo: "/images/svg/charity6.svg"
    }, {
        id: 1,
        logo: "/images/svg/charity2.svg"
    }, {
        id: 2,
        logo: "/images/svg/charity3.svg"
    }],
    pe = [{
        id: 0,
        title: "Our Mission",
        img: "/images/icons/mission.svg",
        content: "Bridging the Gap between Crypto and the Real World while continuing to lead in blockchain technology."
    }, {
        id: 1,
        title: "Our Vision",
        img: "/images/icons/vision.svg",
        content: "Our vision is a world where the complexities of blockchain technology and digital assets are made simple, accessible, and beneficial to all."
    }, {
        id: 3,
        title: "Our Values",
        img: "/images/icons/values.svg",
        content: "Our focus is always, on our users. Since the start we have prioritized user protection across the entire OPZ ecosystem."
    }],
    ge = [{
        id: 0,
        picture: "/images/team/sal.jpg",
        name: "Sal Haval",
        role: "CEO & Founder",
        socialProfiles: [{
            name: "Linkedin",
            icon: "fa:linkedin",
            url: "https://www.linkedin.com/in/sal-opz"
        }]
    }],
    ve = {
        class: "container"
    },
    fe = {
        class: "container"
    },
    he = {
        class: "flex mt-4"
    },
    be = {
        class: "container"
    },
    ye = {
        class: "mt-6"
    },
    _e = {
        class: "container"
    },
    je = {
        class: "flex mt-4"
    },
    xe = {
        class: "container"
    },
    we = {
        class: "container"
    },
    ke = o({
        __name: "about-us",
        setup(a) {
            const {
                t: o
            } = n();
            return x((() => {
                Z("About Us | Revolutionizing Digital Asset Security", "Discover OPZ: Leading innovation in secure and inclusive digital asset management using KEYFUSION™ technology.")
            })), T({
                meta: [{
                    name: "robots",
                    content: "noindex"
                }]
            }), l(), (a, l) => {
                const n = I,
                    r = ue,
                    d = re,
                    y = S,
                    _ = i,
                    j = P,
                    x = O,
                    w = se,
                    A = z,
                    T = k,
                    Z = q,
                    B = s,
                    F = t;
                return c(), m(b, null, [g(n), u("div", null, [g(r), g(y, {
                    "shape-color": "grey"
                }, {
                    default: v((() => [u("div", ve, [g(d, {
                        values: h(pe)
                    }, null, 8, ["values"])])])),
                    _: 1
                }), g(y, {
                    color: "grey"
                }, {
                    default: v((() => [u("div", fe, [g(j, {
                        aligned: "",
                        class: "pt-4 pb-4 px-6",
                        title: "OPZ x AI",
                        subtitle: "Superintelligence Trader"
                    }, {
                        content: v((() => [l[0] || (l[0] = u("p", {
                            class: "paragraph rem-100 mt-4",
                            style: {
                                "text-align": "left"
                            }
                        }, [f(" Superintelligence Trader, developed by OPZ, represents the future of AI-driven crypto trading. Inspired by the success of elite quantitative funds, it utilizes advanced algorithms and sophisticated AI techniques to identify and capitalize on market opportunities across various digital assets. "), u("br"), u("br"), f(" At its heart, OPZ-AI is about bringing things together because we believe AI will revolutionize trading. ")], -1)), u("div", he, [g(_, {
                            size: "small",
                            blank: !0,
                            href: "https://whitepaper.opz.com/opz/opz-ai/introduction-opz-ai"
                        }, {
                            default: v((() => [f(p(h(o)("sett.learn-more")), 1)])),
                            _: 1
                        })])])),
                        _: 1
                    })])])),
                    _: 1
                }), g(y, null, {
                    default: v((() => [u("div", be, [g(x, {
                        title: "OPZ Founder",
                        subtitle: "Team OPZ brings together decades of experience in technology."
                    }), u("div", ye, [g(w, {
                        members: h(ge)
                    }, null, 8, ["members"])]), g(T, null, {
                        default: v((() => [g(A, {
                            subtitle: "Join our Team",
                            title: "Working at OPZ",
                            content: "We’re always looking for like-minded people who share our passion for blockchain and cryptocurrency technology.",
                            image: "/images/illustrations/opz-building.png",
                            "dark-image": "",
                            cta: "Explore Jobs",
                            inverted: "",
                            to: "jobs"
                        })])),
                        _: 1
                    })])])),
                    _: 1
                }), g(y, {
                    color: "grey"
                }, {
                    default: v((() => [u("div", _e, [g(j, {
                        aligned: "",
                        class: "pt-4 pb-4 px-6",
                        title: "OPZ x KeyFusion",
                        subtitle: "Revolutionizing Digital Asset Security"
                    }, {
                        content: v((() => [l[1] || (l[1] = u("p", {
                            class: "paragraph rem-100 mt-4",
                            style: {
                                "text-align": "left"
                            }
                        }, [f(" KeyFusion, developed by OPZ, represents the next generation in private key security. Utilizing advanced Multi-Party Computation (MPC) technology, it offers a highly secure solution for storing and transferring digital assets. "), u("br"), u("br"), f(" OPZ is committed to making self-custodial wallets more accessible without compromising the security that is fundamental to its purpose. ")], -1)), u("div", je, [g(_, {
                            size: "small",
                            blank: !0,
                            href: "https://whitepaper.opz.com/opz/keyfusion/introduction-to-keyfusion"
                        }, {
                            default: v((() => [f(p(h(o)("sett.learn-more")), 1)])),
                            _: 1
                        })])])),
                        _: 1
                    })])])),
                    _: 1
                }), g(y, null, {
                    default: v((() => [u("div", xe, [g(Z, {
                        title: "One Earth",
                        subtitle: "Empower with Crypto",
                        heading: "Invest in Change with OPZ",
                        content: "Visit our donation page to make a difference with your digital assets.",
                        logos: h(de)
                    }, null, 8, ["logos"])])])),
                    _: 1
                }), g(y, {
                    color: "grey"
                }, {
                    default: v((() => [u("div", we, [g(x, {
                        title: "CONTACT US",
                        subtitle: "OPZ is your safe and reliable gateway into crypto"
                    }), g(B, {
                        features: h(C),
                        limit: 8,
                        size: "small",
                        links: "",
                        animated: ""
                    }, null, 8, ["features"])])])),
                    _: 1
                }), g(F, {
                    content: h(e),
                    color: "dark",
                    cta: !1
                }, null, 8, ["content"])])], 64)
            }
        }
    });
"function" == typeof B && B(ke);
export {
    ke as
    default
};