import {
    a as t,
    f as e,
    _ as o
} from "./index-BPv_7EZ9.js";
import {
    _ as n
} from "./Section-DPQWt_EU.js";
import {
    _ as s
} from "./Subtitle-C6oUzL5I.js";
import {
    _ as i
} from "./Title-B_xB6icS.js";
import {
    u as a
} from "./vue.8fc199ce-DBDcZ0BB.js";
import {
    m as l,
    G as r,
    y as c,
    h as d,
    Y as u,
    B as p,
    I as m,
    cC as v,
    o as g,
    j as f,
    l as j,
    p as w,
    v as h,
    w as x,
    q as b,
    t as y,
    X as _,
    s as k,
    dp as I,
    u as R,
    P as C
} from "./index-CQfCy4Xm.js";
import {
    u as B
} from "./useSeoMeta-DJrBtPw8.js";
import {
    _ as $
} from "./_plugin-vue_export-helper-BCo6x5W8.js";
import {
    _ as S
} from "./Navbar2-Cx1AKm6v.js";
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
import "./Button-C_PMcYdl.js";
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
const z = {
        class: "columns is-vcentered"
    },
    L = {
        key: 0
    },
    A = ["src"],
    P = {
        class: "metadata"
    },
    T = {
        class: "meta"
    },
    q = {
        class: "post-body"
    },
    U = {
        class: "post-body-inner mx-auto max-w-7"
    },
    E = ["innerHTML"],
    M = {
        class: "sharing-options"
    },
    N = ["href"],
    W = {
        class: "flex flex-row pt-6 align-center items-center"
    },
    G = $(l({
        __name: "BlogPost",
        props: {
            content: {},
            centered: {
                type: Boolean
            }
        },
        setup(e) {
            var o, n;
            const l = r(),
                I = c(""),
                R = "blog-article" === (null == (n = null == (o = null == l ? void 0 : l.currentRoute) ? void 0 : o.value) ? void 0 : n.name),
                C = e,
                $ = d((() => `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(I.value)}`)),
                S = d((() => {
                    var t;
                    return `https://twitter.com/intent/tweet?text=${encodeURIComponent((null==(t=null==C?void 0:C.content)?void 0:t.title)+" "+I.value)}`
                })),
                G = d((() => `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(I.value)}`)),
                H = d((() => {
                    var t, e, o;
                    const n = null == (t = null == C ? void 0 : C.content) ? void 0 : t.title,
                        s = `${(null==(o=null==(e=null==C?void 0:C.content)?void 0:e.content)?void 0:o.substring(3,200))+"..."} Read more at: ${I.value}`;
                    return `mailto:?subject=${encodeURIComponent(n)}&body=${encodeURIComponent(s)}`
                })),
                J = () => {
                    window.open(S.value, "shareWindow", "height=600,width=800")
                },
                O = () => {
                    window.open(G.value, "shareWindow", "height=600,width=800")
                },
                X = () => {
                    window.open($.value, "shareWindow", "height=600,width=800")
                },
                {
                    t: F
                } = u();
            return p((() => null == C ? void 0 : C.content), ((t, e) => {
                var o, n;
                if ((null == t ? void 0 : t.title) && (null == t ? void 0 : t.desc)) {
                    const e = t.title;
                    B(`${e}`, null == t ? void 0 : t.desc, !0, null == t ? void 0 : t.image)
                }
                I.value = "https://www.opz.com" + (null == (n = null == (o = null == l ? void 0 : l.currentRoute) ? void 0 : o.value) ? void 0 : n.fullPath), a({
                    meta: [{
                        property: "og:url",
                        content: I.value
                    }, {
                        property: "og:type",
                        content: "article"
                    }]
                })
            }), {
                immediate: !0
            }), m((() => {
                var t, e;
                B(`${null==C?void 0:C.content.title}`, null == (t = null == C ? void 0 : C.content) ? void 0 : t.desc, !0, null == (e = null == C ? void 0 : C.content) ? void 0 : e.image)
            })), (e, o) => {
                var n, a, l;
                const r = i,
                    c = v("RouterLink"),
                    d = s;
                return g(), f("div", null, [j("div", {
                    class: w(["post-header pt-10", C.centered && "is-centered"])
                }, [j("div", z, [j("div", {
                    class: w(["column is-6", C.centered ? "is-12" : "is-6"])
                }, [j("div", {
                    class: w(["tags", C.centered && "mx-auto max-w-3 is-justify-content-center"])
                }, null, 2), j("div", {
                    class: w(["mb-4", C.centered ? "mx-auto max-w-6" : "max-w-5"])
                }, [h(r, {
                    tag: "h1",
                    size: 2,
                    weight: "bold"
                }, {
                    default: x((() => [b(y(C.content.title), 1)])),
                    _: 1
                }), h(c, {
                    to: {
                        name: _(R) ? "blog" : "announcements"
                    }
                }, {
                    default: x((() => [b(y(_(R) ? "Blogs" : _(F)("pga.announcements")), 1)])),
                    _: 1
                }, 8, ["to"]), h(d, {
                    tag: "p",
                    size: 5,
                    weight: "thin",
                    class: "pt-0"
                }, {
                    default: x((() => [b(y(C.content.date), 1)])),
                    _: 1
                })], 2), (null == (n = null == C ? void 0 : C.content) ? void 0 : n.image) ? (g(), f("div", L, [j("img", {
                    class: "post-image",
                    src: C.content.image,
                    alt: "Post Image"
                }, null, 8, A)])) : k("", !0), j("div", P, [j("div", T, [o[0] || (o[0] = j("span", null, "Author:", -1)), j("span", null, y((null == (l = null == (a = C.content) ? void 0 : a.author) ? void 0 : l.name) ? ? ""), 1)])])], 2)])], 2), j("div", q, [j("div", U, [j("div", {
                    class: "content",
                    innerHTML: C.content.content
                }, null, 8, E)]), j("div", M, [j("a", {
                    onClick: X
                }, o[1] || (o[1] = [j("i", {
                    class: "iconify",
                    "data-icon": "fa-brands:facebook-f"
                }, null, -1), j("span", {
                    class: "is-sr-only"
                }, "Facebook", -1)])), j("a", {
                    onClick: J
                }, o[2] || (o[2] = [j("img", {
                    src: t,
                    alt: "X.com",
                    width: "12"
                }, null, -1), j("span", {
                    class: "is-sr-only"
                }, "Twitter", -1)])), j("a", {
                    onClick: O
                }, o[3] || (o[3] = [j("i", {
                    class: "iconify",
                    "data-icon": "fa-brands:linkedin-in"
                }, null, -1), j("span", {
                    class: "is-sr-only"
                }, "Linkedin", -1)])), j("a", {
                    href: H.value
                }, o[4] || (o[4] = [j("i", {
                    class: "iconify",
                    "data-icon": "fa-solid:envelope"
                }, null, -1), j("span", {
                    class: "is-sr-only"
                }, "Email", -1)]), 8, N)])]), h(c, {
                    to: {
                        name: _(R) ? "blog" : "announcements"
                    },
                    class: "action"
                }, {
                    default: x((() => [j("div", W, [o[5] || (o[5] = j("i", {
                        class: "fas fa-arrow-left mr-2",
                        style: {
                            "font-size": "21px"
                        }
                    }, null, -1)), h(r, {
                        size: 5
                    }, {
                        default: x((() => [b(y(_(R) ? "Blogs" : _(F)("pga.announcements")), 1)])),
                        _: 1
                    })])])),
                    _: 1
                }, 8, ["to"]), o[6] || (o[6] = j("div", {
                    class: "py-1"
                }, null, -1))])
            }
        }
    }), [
        ["__scopeId", "data-v-3b4465ab"]
    ]),
    H = {
        class: "blog-post-bg"
    },
    J = {
        class: "container"
    },
    O = $(l({
        __name: "post",
        setup(t) {
            const s = I(),
                i = s.query.id,
                a = R();
            s.query.v2;
            const l = c({}); {
                const t = new XMLHttpRequest;
                t.open("GET", "/assets/blogs/" + i + ".json"), t.onload = () => {
                    if (200 === t.status) {
                        const e = JSON.parse(t.responseText);
                        l.value = e
                    } else console.error("Failed to retrieve JSON file")
                }, t.onerror = () => {
                    console.error("Error retrieving JSON file")
                }, t.send()
            }
            return (t, s) => {
                const i = S,
                    r = G,
                    c = n,
                    d = o;
                return g(), f(C, null, [h(i), j("div", H, [h(c, null, {
                    default: x((() => [j("div", J, [h(r, {
                        content: l.value,
                        centered: !0
                    }, null, 8, ["content"])])])),
                    _: 1
                }), h(d, {
                    content: _(e),
                    color: "dark",
                    cta: !_(a).isLoggedIn,
                    class: w(_(a).isLoggedIn ? "" : "login-fot")
                }, null, 8, ["content", "cta", "class"])])], 64)
            }
        }
    }), [
        ["__scopeId", "data-v-6d4462c2"]
    ]);
export {
    O as
    default
};