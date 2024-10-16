import {
    f as a,
    _ as i
} from "./index-BPv_7EZ9.js";
import {
    _ as o
} from "./Section-DPQWt_EU.js";
import {
    _ as t
} from "./Button-C_PMcYdl.js";
import {
    M as s
} from "./vue3-markdown-it.umd.min-h-q_g2pl.js";
import {
    m as e,
    cC as l,
    o as n,
    j as c,
    v as r,
    w as d,
    l as u,
    t as p,
    q as m,
    s as v,
    X as j,
    P as h,
    cB as f,
    k as y,
    p as b,
    dp as k,
    G as g,
    y as w,
    I as x,
    cr as _,
    B as P
} from "./index-CQfCy4Xm.js";
import {
    _ as B
} from "./_plugin-vue_export-helper-BCo6x5W8.js";
import {
    _ as A
} from "./Navbar2-Cx1AKm6v.js";
import {
    s as S
} from "./sleep-MiAo3PcT.js";
import {
    j as W
} from "./index-2AuomsNz.js";
import "./Subtitle-C6oUzL5I.js";
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
import "./vue.runtime.esm-bundler-BbVV3g-V.js";
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
const O = {
        class: "job-wrapper"
    },
    z = {
        class: "job-header"
    },
    J = {
        class: "left"
    },
    Z = {
        class: "job-icon"
    },
    q = ["src"],
    C = {
        class: "meta"
    },
    E = {
        class: "job-title"
    },
    G = {
        key: 0,
        class: "job-subtitle"
    },
    I = {
        key: 0,
        class: "right"
    },
    D = {
        href: "mailto: jobs@opz.com"
    },
    R = {
        class: "job-body"
    },
    V = {
        class: "columns"
    },
    $ = {
        class: "column is-7"
    },
    F = {
        key: 0,
        class: "requirements-list"
    },
    L = {
        class: "column is-4 is-offset-1"
    },
    M = {
        key: 0,
        class: "recommended-skills"
    },
    N = ["src"],
    T = {
        key: 1,
        class: "apply-card"
    },
    X = {
        key: 0,
        class: "action"
    },
    H = {
        href: "mailto: jobs@opz.com"
    },
    K = B(e({
        __name: "JobDetails",
        props: {
            job: {}
        },
        setup(a) {
            const i = a;
            return (a, o) => {
                const e = l("RouterLink"),
                    k = t;
                return n(), c("div", O, [r(e, {
                    to: "/jobs",
                    class: "back-link"
                }, {
                    default: d((() => o[0] || (o[0] = [u("i", {
                        class: "iconify",
                        "aria-hidden": "true",
                        "data-icon": "feather:arrow-left"
                    }, null, -1), u("span", null, "Back to jobs", -1)]))),
                    _: 1
                }), u("div", z, [u("div", J, [u("div", Z, [u("img", {
                    src: i.job.icon,
                    alt: ""
                }, null, 8, q)]), u("div", C, [u("h3", E, p(i.job.title), 1), i.job.location || i.job.duration ? (n(), c("h4", G, [o[1] || (o[1] = u("i", {
                    class: "iconify",
                    "aria-hidden": "true",
                    "data-icon": "feather:map-pin"
                }, null, -1)), m(" " + p(i.job.location) + " - ", 1), o[2] || (o[2] = u("i", {
                    class: "iconify",
                    "aria-hidden": "true",
                    "data-icon": "feather:clock"
                }, null, -1)), m(" " + p(i.job.duration), 1)])) : v("", !0)])]), i.job.contact ? (n(), c("div", I, [u("a", D, [r(k, {
                    color: "primary",
                    long: 3,
                    outlined: "",
                    raised: ""
                }, {
                    default: d((() => o[3] || (o[3] = [m("Apply")]))),
                    _: 1
                })])])) : v("", !0)]), u("div", R, [u("div", V, [u("div", $, [o[7] || (o[7] = u("h3", null, "Our team", -1)), r(j(s), {
                    source: "Join our dynamic team at OPZ, where you'll be at the forefront of cryptocurrency innovation. With us, you'll have the opportunity to shape the future of digital finance while working in a diverse, collaborative environment. We value curiosity, creativity, and a commitment to excellence. If you're passionate about blockchain technology and ready to make an impact, we want to hear from you. Explore our open positions and start your journey with OPZ today.",
                    breaks: !0
                }), (n(!0), c(h, null, f(i.job.content.description, ((a, i) => (n(), c(h, {
                    key: i
                }, [u("h3", null, p(a.title), 1), r(j(s), {
                    source: a.text,
                    breaks: !0
                }, null, 8, ["source"])], 64)))), 128)), i.job.content.aptitude ? (n(), c("div", F, [(n(!0), c(h, null, f(i.job.content.aptitude, ((a, i) => (n(), c(h, {
                    key: i
                }, [u("h3", null, p(a.title), 1), (n(!0), c(h, null, f(a.skills, ((a, i) => (n(), c("li", {
                    key: i
                }, [o[4] || (o[4] = u("div", {
                    class: "block-icon"
                }, [u("i", {
                    class: "iconify",
                    "aria-hidden": "true",
                    "data-icon": "fa-solid:check"
                })], -1)), u("span", null, p(a), 1)])))), 128)), o[5] || (o[5] = u("hr", {
                    class: "is-invisible"
                }, null, -1))], 64)))), 128)), o[6] || (o[6] = y('<h3 data-v-11c48920>Working with OPZ</h3><ul data-v-11c48920><li data-v-11c48920><div class="block-icon" data-v-11c48920><i class="iconify" aria-hidden="true" data-icon="fa-solid:check" data-v-11c48920></i></div><span data-v-11c48920>Be a part of the future of finance technology</span></li><li data-v-11c48920><div class="block-icon" data-v-11c48920><i class="iconify" aria-hidden="true" data-icon="fa-solid:check" data-v-11c48920></i></div><span data-v-11c48920>Flexible working hours and a team that is driven by strong values and a clear shared vision</span></li><li data-v-11c48920><div class="block-icon" data-v-11c48920><i class="iconify" aria-hidden="true" data-icon="fa-solid:check" data-v-11c48920></i></div><span data-v-11c48920>Working with the latest technologies and systems, which will challenge your skills and push your creative limits</span></li><li data-v-11c48920><div class="block-icon" data-v-11c48920><i class="iconify" aria-hidden="true" data-icon="fa-solid:check" data-v-11c48920></i></div><span data-v-11c48920>Great career development opportunities in a growing company</span></li><li data-v-11c48920><div class="block-icon" data-v-11c48920><i class="iconify" aria-hidden="true" data-icon="fa-solid:check" data-v-11c48920></i></div><span data-v-11c48920>Competitive salary</span></li></ul>', 2))])) : v("", !0)]), u("div", L, [i.job.content.technologies ? (n(), c("div", M, [(n(!0), c(h, null, f(i.job.content.technologies, ((a, i) => (n(), c(h, {
                    key: i
                }, [u("h3", null, p(a.title), 1), (n(!0), c(h, null, f(a.tools, ((a, i) => (n(), c("div", {
                    key: i,
                    class: b("skill-block")
                }, [u("img", {
                    src: a.icon,
                    alt: "Skill icon"
                }, null, 8, N), u("p", null, p(a.title), 1)])))), 128)), o[8] || (o[8] = u("hr", {
                    class: "is-invisible"
                }, null, -1))], 64)))), 128))])) : v("", !0), i.job.salary || i.job.contact ? (n(), c("div", T, [o[10] || (o[10] = u("h3", null, "We’re OPZ!", -1)), o[11] || (o[11] = u("p", null, "Apply now to schedule an introductory call!", -1)), i.job.contact ? (n(), c("div", X, [u("a", H, [r(k, {
                    color: "primary",
                    raised: "",
                    fullwidth: ""
                }, {
                    default: d((() => o[9] || (o[9] = [m("Apply")]))),
                    _: 1
                })])])) : v("", !0)])) : v("", !0)])])])])
            }
        }
    }), [
        ["__scopeId", "data-v-11c48920"]
    ]);
const Q = {
        key: 0,
        class: "container"
    },
    U = e({
        __name: "[slug]",
        setup(t) {
            const s = k(),
                e = g(),
                l = s.params.slug,
                p = w();
            async function m() {
                try {
                    p.value = await async function(a) {
                        const i = W.find((i => i.slug === a));
                        return await S(200), i ? Promise.resolve(i) : Promise.reject(new Error(`Job ${a} not found`))
                    }(l)
                } catch {
                    e.replace({
                        name: "all",
                        params: {
                            all: `not-found-${s.params.slug}`
                        }
                    })
                }
            }
            return x(m), _(m), P((() => s.fullPath), m), (t, s) => {
                const e = A,
                    l = K,
                    m = o,
                    f = i;
                return n(), c(h, null, [r(e), u("div", null, [r(m, {
                    overflown: ""
                }, {
                    default: d((() => [p.value ? (n(), c("div", Q, [r(l, {
                        job: p.value
                    }, null, 8, ["job"])])) : v("", !0)])),
                    _: 1
                }), r(f, {
                    content: j(a),
                    color: "dark",
                    cta: !1
                }, null, 8, ["content"])])], 64)
            }
        }
    });
export {
    U as
    default
};