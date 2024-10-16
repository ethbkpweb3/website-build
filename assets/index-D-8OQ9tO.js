import {
    f as s,
    _ as e
} from "./index-BPv_7EZ9.js";
import {
    _ as t
} from "./Section-DPQWt_EU.js";
import {
    _ as o
} from "./Button-C_PMcYdl.js";
import {
    m as a,
    h as i,
    o as l,
    j as r,
    l as n,
    P as c,
    cB as p,
    t as u,
    q as m,
    s as d,
    v as b,
    w as j,
    p as v,
    n as g,
    X as f
} from "./index-CQfCy4Xm.js";
import {
    _
} from "./_plugin-vue_export-helper-BCo6x5W8.js";
import {
    _ as h
} from "./SectionTitle.vue_vue_type_script_setup_true_lang-C7hy-prY.js";
import {
    _ as y
} from "./Hero.vue_vue_type_style_index_0_lang-DHspTRKr.js";
import {
    _ as x
} from "./AvatarSimple-DIs6U3iF.js";
import {
    _ as k
} from "./Subtitle-C6oUzL5I.js";
import {
    _ as z
} from "./PageTitle-ChfDSLUN.js";
import {
    _ as S
} from "./Navbar2-Cx1AKm6v.js";
import {
    j as w
} from "./index-2AuomsNz.js";
import {
    u as P
} from "./useSeoMeta-DJrBtPw8.js";
import {
    b as B
} from "./route-block-B_A1xBdJ.js";
import "./ButtonGR-CCzD27Qk.js";
import "./Title-B_xB6icS.js";
import "./AppPop-DXr7YMXx.js";
import "./index-DZwhim7i.js";
import "./browser-Cv63Auap.js";
import "./index-DPTDKB4o.js";
import "./index-wV0BwLDn.js";
import "./index-DWyf7GKU.js";
import "./index-CB5HUA9W.js";
import "./google-play-0W6tGWt8.js";
import "./via-placeholder-csI6CdwS.js";
import "./VPlaceload-DcvQMSN9.js";
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
const J = {
        class: "py-6"
    },
    A = {
        class: "columns is-multiline b-columns-half-tablet-p"
    },
    F = {
        class: "job-card"
    },
    O = {
        class: "job-card-icon"
    },
    V = ["src"],
    Z = {
        class: "job-card-content"
    },
    C = {
        class: "job-card-title"
    },
    R = {
        class: "job-card-subtitle"
    },
    T = {
        class: "job-stacks"
    },
    q = ["src"],
    D = {
        class: "job-card-action"
    },
    G = _(a({
        __name: "JobGrid",
        props: {
            jobs: {
                default: () => []
            },
            pulled: {
                type: Boolean,
                default: !1
            }
        },
        setup(s) {
            const e = s,
                t = i((() => [e.pulled && "is-pulled"]));
            return (s, a) => {
                const i = o;
                return l(), r("div", J, [n("div", {
                    class: v(["job-grid", t.value])
                }, [n("div", A, [(l(!0), r(c, null, p(e.jobs, ((s, e) => (l(), r("div", {
                    key: e,
                    class: "column is-4"
                }, [n("div", F, [n("div", O, [n("img", {
                    src: s.icon,
                    alt: ""
                }, null, 8, V)]), n("div", Z, [n("h3", C, u(s.title), 1), n("h4", R, [n("span", null, [a[0] || (a[0] = n("i", {
                    class: "fa fa-location-dot fa-clock mr-1"
                }, null, -1)), m(" " + u(s.location), 1)]), n("span", null, [a[1] || (a[1] = n("i", {
                    class: "fa-regular fa-clock mr-1"
                }, null, -1)), m(" " + u(s.duration), 1)])])]), n("div", T, [(l(!0), r(c, null, p(s.content.technologies, ((s, e) => (l(), r("div", {
                    key: e,
                    class: "job-stacks-inner"
                }, [(l(!0), r(c, null, p(s.tools.slice(0, 3), ((s, t) => (l(), r("div", {
                    key: t
                }, [0 === e ? (l(), r("img", {
                    key: 0,
                    src: s.icon,
                    alt: "stack logo"
                }, null, 8, q)) : d("", !0)])))), 128))])))), 128))]), n("div", D, [b(i, {
                    to: {
                        name: "jobs-slug",
                        params: {
                            slug: s.slug
                        }
                    },
                    color: "primary",
                    long: 2,
                    outlined: "",
                    raised: ""
                }, {
                    default: j((() => a[2] || (a[2] = [m(" Job Details ")]))),
                    _: 2
                }, 1032, ["to"])])])])))), 128))])], 2)])
            }
        }
    }), [
        ["__scopeId", "data-v-828e0c1f"]
    ]),
    H = {
        class: "columns is-vcentered"
    },
    I = {
        class: "column is-5"
    },
    X = {
        class: "column is-7"
    },
    E = {
        class: "hero-image-composition"
    },
    L = {
        class: "image-wrap"
    },
    M = {
        class: "job-bubble job-bubble-1"
    },
    N = {
        class: "job-bubble job-bubble-2"
    },
    W = {
        class: "job-bubble job-bubble-3"
    },
    K = {
        class: "job-bubble job-bubble-4"
    },
    Q = _(a({
        __name: "HeroV1",
        setup: s => (s, e) => {
            const t = z,
                o = k,
                a = x,
                i = y;
            return l(), g(i, {
                color: "grey",
                class: "product-hero",
                shape: "/assets/shapes/hero-shape.svg",
                "shape-orientation": "right",
                size: "medium"
            }, {
                body: j((() => [n("div", H, [n("div", I, [b(t, {
                    class: "title-jobs p-0",
                    subtitle: "Join the OPZ Revolution",
                    title: "Shape the Future of Cryptocurrency"
                }), b(o, {
                    tag: "p",
                    size: 5,
                    classes: "b-centered-tablet-p text-medium"
                }, {
                    default: j((() => e[0] || (e[0] = [m(" 7 job offers are currently available. ")]))),
                    _: 1
                })]), n("div", X, [n("div", E, [n("div", L, [e[5] || (e[5] = n("img", {
                    src: "/images/illustrations/opz-building.png",
                    class: "levitate inner-image"
                }, null, -1)), e[6] || (e[6] = n("div", {
                    class: "perspective bg-gradient-secondary-fade"
                }, null, -1)), n("div", M, [b(a, {
                    picture: "/assets/stacks/java.svg",
                    size: "medium"
                }), e[1] || (e[1] = n("div", {
                    class: "bubble-content"
                }, [n("span"), n("span")], -1))]), n("div", N, [b(a, {
                    picture: "/assets/stacks/redis.svg",
                    size: "medium"
                }), e[2] || (e[2] = n("div", {
                    class: "bubble-content"
                }, [n("span"), n("span")], -1))]), n("div", W, [b(a, {
                    picture: "/assets/stacks/mongodb-light.svg",
                    size: "medium"
                }), e[3] || (e[3] = n("div", {
                    class: "bubble-content"
                }, [n("span"), n("span")], -1))]), n("div", K, [b(a, {
                    picture: "/assets/stacks/typescript-light.svg",
                    size: "medium"
                }), e[4] || (e[4] = n("div", {
                    class: "bubble-content"
                }, [n("span"), n("span")], -1))])])])])])])),
                _: 1
            })
        }
    }), [
        ["__scopeId", "data-v-41dc3e4e"]
    ]),
    U = {
        class: "container"
    },
    Y = a({
        __name: "index",
        setup: o => (P("Jobs | Join the OPZ Revolution", "Launch your career at OPZ. From full-time and part-time jobs use your CV to get matched with the right job at OPZ. Start your professional journey with us today!"), (o, a) => {
            const i = S,
                p = Q,
                u = h,
                m = G,
                d = t,
                v = e;
            return l(), r(c, null, [b(i), n("div", null, [b(p), b(d, {
                id: "job-offers",
                wave: "wave-2"
            }, {
                default: j((() => [n("div", U, [b(u, {
                    title: "Featured Jobs",
                    subtitle: "Featured"
                }), b(m, {
                    jobs: f(w)
                }, null, 8, ["jobs"])])])),
                _: 1
            }), b(v, {
                content: f(s),
                color: "dark",
                cta: !1
            }, null, 8, ["content"])])], 64)
        })
    });
"function" == typeof B && B(Y);
export {
    Y as
    default
};