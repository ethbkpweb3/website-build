import {
    f as s,
    _ as t,
    a as e
} from "./index-B_Hz-fzE.js";
import {
    _ as o
} from "./Section-fdq8wkjz.js";
import {
    _ as i
} from "./Button-BbTMX0Dh.js";
import {
    _ as a
} from "./PageTitle-C0-ARbcp.js";
import {
    _ as r
} from "./ButtonGR-BF9zAU5B.js";
import {
    _ as l
} from "./Navbar2-DVEXcHRs.js";
import {
    _ as n
} from "./Title-ChmnbwlA.js";
import {
    _ as p
} from "./Subtitle-ytb6lg8s.js";
import {
    _ as c
} from "./AvatarSimple-CfXnZ0K8.js";
import {
    v as d
} from "./viaPlaceholderErrorHandler-CLF0o5vT.js";
import {
    m,
    cC as u,
    o as g,
    j as f,
    l as j,
    X as v,
    v as h,
    w as x,
    t as _,
    h as y,
    P as w,
    cB as b,
    p as B,
    y as k,
    q as P,
    n as C
} from "./index-jdACH0Rc.js";
import {
    _ as E
} from "./_plugin-vue_export-helper-BCo6x5W8.js";
import {
    u as I
} from "./useSeoMeta-CRPJPIvz.js";
import {
    b as O
} from "./route-block-B_A1xBdJ.js";
import "./AppPop-C6dVPDH2.js";
import "./index-Dwv4qbXN.js";
import "./browser-B3Bvmjnq.js";
import "./index-DPTDKB4o.js";
import "./index-D4R9Vjdp.js";
import "./index-Citk0ABi.js";
import "./index-DtPnfIe2.js";
import "./google-play-0W6tGWt8.js";
import "./VPlaceload-jGgmcTFZ.js";
import "./user-qMNVzsWD.js";
import "./sett-Dbwu6PJ1.js";
import "./avatarSettings-Daanxsoo.js";
import "./vue3-avataaars-C_k_hIh4.js";
import "./index-cRGdv3RN.js";
import "./index-C8W9xb4z.js";
import "./index-B1yvdImc.js";
import "./index-Cg9BJciP.js";
import "./use-dialog-CmZNE833.js";
import "./use-global-config-Dm8LyY4T.js";
import "./index-BWeq1WY3.js";
import "./index-DBFvTDaE.js";
import "./typescript-CRqm1_SZ.js";
import "./logo-DqlCWKKL.js";
import "./index-DWTvrBdo.js";
import "./aria-C-hsWcn7.js";
import "./via-placeholder-csI6CdwS.js";
import "./vue.8fc199ce-D3bCrqKA.js";
const z = {
        class: "card"
    },
    A = {
        class: "card-image"
    },
    D = ["src"],
    G = {
        class: "card-content"
    },
    L = {
        class: "media is-align-items-center"
    },
    S = {
        class: "media-left"
    },
    Z = {
        class: "media-content"
    },
    q = {
        class: "content"
    },
    F = {
        class: "paragraph"
    },
    M = {
        class: "is-flex is-align-items-center is-justify-content-space-between"
    },
    R = E(m({
        __name: "BlogGridItem",
        props: {
            post: {},
            upsideDown: {
                type: Boolean,
                default: !1
            }
        },
        setup(s) {
            const t = s;
            return (s, e) => {
                const o = c,
                    i = p,
                    a = n,
                    r = u("RouterLink");
                return g(), f("div", z, [j("div", A, [j("img", {
                    class: "block",
                    src: t.post.image,
                    alt: "Post image",
                    width: "360",
                    height: "200",
                    onErrorOnce: e[0] || (e[0] = s => v(d)(s, "360x200"))
                }, null, 40, D)]), j("div", G, [j("div", L, [j("div", S, [h(o, {
                    picture: "/images/opz/opz.png"
                })]), j("div", Z, [h(i, {
                    tag: "p",
                    size: 6,
                    weight: "semi",
                    uppercase: "",
                    class: "rem-75 weight-5 text-primary"
                }, {
                    default: x((() => [j("span", null, _(t.post.category), 1)])),
                    _: 1
                }), h(a, {
                    tag: "h3",
                    size: 6,
                    weight: "semi"
                }, {
                    default: x((() => [j("span", null, _(t.post.title), 1)])),
                    _: 1
                })])]), j("div", q, [j("p", F, _(t.post.abstract), 1)]), j("div", M, [j("div", null, [h(r, {
                    to: {
                        name: "blog-article",
                        query: {
                            id: t.post.id
                        }
                    },
                    class: "is-flex is-align-items-center"
                }, {
                    default: x((() => e[1] || (e[1] = [j("span", {
                        class: "mr-2"
                    }, "Read More", -1), j("i", {
                        class: "iconify",
                        "data-icon": "feather:arrow-right"
                    }, null, -1)]))),
                    _: 1
                }, 8, ["to"])])])])])
            }
        }
    }), [
        ["__scopeId", "data-v-86773cf2"]
    ]),
    T = {
        class: "blog-grid"
    },
    X = {
        class: "columns b-columns-half-tablet-p is-multiline"
    },
    N = E(m({
        __name: "BlogGrid",
        props: {
            posts: {
                default: () => []
            },
            upsideDown: {
                type: Boolean,
                default: !1
            },
            limit: {
                default: 20
            },
            sideGrid: {
                type: Boolean,
                default: !1
            }
        },
        setup(s) {
            const t = s,
                e = y((() => [t.sideGrid ? "is-6" : "is-4"]));
            return (s, o) => {
                const i = R;
                return g(), f("div", T, [j("div", X, [(g(!0), f(w, null, b(t.posts.slice(0, t.limit), ((s, o) => (g(), f("div", {
                    key: o,
                    class: B(["column", e.value])
                }, [h(i, {
                    post: s,
                    "upside-down": t.upsideDown
                }, null, 8, ["post", "upside-down"])], 2)))), 128))])])
            }
        }
    }), [
        ["__scopeId", "data-v-2a56dc32"]
    ]),
    V = {
        class: "mx-auto max-w-9"
    },
    W = {
        class: "mx-auto max-w-6 mt-2"
    },
    H = {
        style: {
            display: "flex",
            "justify-content": "center",
            "align-items": "center"
        },
        class: "mt-3"
    },
    J = {
        key: 1,
        class: "load-more py-6"
    },
    K = {
        class: "buttons is-centered"
    },
    Q = m({
        __name: "index",
        setup(n) {
            const p = k([]);
            I("Blogs | Insights, Analysis & Trends", "Explore expert analysis, market updates, and educational content on our OPZ Crypto Blog. Learn the best practices for wallet protection on the OPZ Crypto Blog."), fetch("/assets/blogs/all.json").then((s => s.json())).then((s => {
                s.forEach((s => {
                    fetch("/assets/blogs/" + s + ".json").then((s => s.json())).then((s => {
                        p.value.push(s), p.value.sort(((s, t) => t.id - s.id))
                    })).catch((t => {
                        console.error("Error retrieving post with ID:", s)
                    }))
                }))
            })).catch((s => {
                console.error("Error fetching list of post IDs:", s)
            }));
            const c = k(!1);
            return (n, d) => {
                const m = l,
                    _ = r,
                    y = a,
                    b = i,
                    B = u("Container"),
                    k = o,
                    E = t;
                return g(), f(w, null, [h(m), j("div", null, [h(k, {
                    color: "grey"
                }, {
                    default: x((() => [h(B, null, {
                        default: x((() => [j("div", V, [h(y, {
                            title: "Latest News",
                            subtitle: "OPZ Blog"
                        }, {
                            content: x((() => [j("div", W, [d[3] || (d[3] = j("p", {
                                class: "paragraph rem-115"
                            }, " Explore the newest topics and insights to guide you through Web3. ", -1)), j("div", H, [h(_, {
                                size: "small",
                                onClick: d[0] || (d[0] = s => {
                                    window.open("https://twitter.com/OPZ_Official")
                                })
                            }, {
                                default: x((() => d[2] || (d[2] = [j("div", {
                                    style: {
                                        "padding-left": "21px",
                                        "padding-right": "21px"
                                    }
                                }, [P(" Follow "), j("img", {
                                    src: e,
                                    alt: "X.com",
                                    width: "9"
                                }), P(" @OPZ_OFFICIAL ")], -1)]))),
                                _: 1
                            })])])])),
                            _: 1
                        })]), h(N, {
                            posts: p.value.slice(0, 6),
                            "upside-down": ""
                        }, null, 8, ["posts"]), c.value ? (g(), C(N, {
                            key: 0,
                            posts: p.value.slice(6, 12),
                            "upside-down": ""
                        }, null, 8, ["posts"])) : (g(), f("div", J, [j("div", K, [h(b, {
                            color: "primary",
                            long: 3,
                            raised: "",
                            bold: "",
                            onClick: d[1] || (d[1] = s => c.value = !0)
                        }, {
                            default: x((() => d[4] || (d[4] = [P(" Load More ")]))),
                            _: 1
                        })])]))])),
                        _: 1
                    })])),
                    _: 1
                }), h(E, {
                    content: v(s),
                    color: "dark",
                    cta: !1
                }, null, 8, ["content"])])], 64)
            }
        }
    });
"function" == typeof O && O(Q);
export {
    Q as
    default
};