import {
    f as i,
    _ as a
} from "./index-BPv_7EZ9.js";
import {
    _ as s
} from "./Section-DPQWt_EU.js";
import {
    m as e,
    dm as n,
    y as t,
    o,
    j as r,
    l,
    P as p,
    cB as m,
    p as c,
    dj as u,
    dh as d,
    t as v,
    v as j,
    dp as g,
    G as x,
    B as b,
    cC as f,
    w as y,
    X as T,
    n as _
} from "./index-CQfCy4Xm.js";
import "./index-DZwhim7i.js";
import {
    D as C,
    T as h,
    N as B,
    C as P
} from "./chatAi-C5hZwDRz.js";
import {
    _ as k
} from "./_plugin-vue_export-helper-BCo6x5W8.js";
import {
    _ as w
} from "./PageTitle-ChfDSLUN.js";
import {
    W as A,
    _ as G
} from "./Navbar2-Cx1AKm6v.js";
import {
    b as V
} from "./route-block-B_A1xBdJ.js";
import "./Subtitle-C6oUzL5I.js";
import "./ButtonGR-CCzD27Qk.js";
import "./Title-B_xB6icS.js";
import "./AppPop-DXr7YMXx.js";
import "./browser-Cv63Auap.js";
import "./index-DPTDKB4o.js";
import "./index-wV0BwLDn.js";
import "./index-DWyf7GKU.js";
import "./index-CB5HUA9W.js";
import "./google-play-0W6tGWt8.js";
import "./vue.runtime.esm-bundler-BbVV3g-V.js";
import "./vue3-apexcharts-DWxdUF6r.js";
import "./loadingSvg-B2DNNGSL.js";
import "./index-CcBkONjK.js";
import "./typescript-CRqm1_SZ.js";
import "./index-Ccebcdf2.js";
import "./index-CteOOV_f.js";
import "./index-38aUouWI.js";
import "./index-BUqPiGKl.js";
import "./_initCloneObject-DqrhPNyg.js";
import "./isPlainObject-BkooXA2Q.js";
import "./VPlaceload-DcvQMSN9.js";
import "./viewWrapper-yhXGfwRy.js";
import "./VPageContent-BIuP73X_.js";
import "./dayjs.min-CoMKM3gL.js";
import "./index-BFnVcjcj.js";
import "./vue3-lottie.es-CiYK4lOh.js";
import "./vue3-markdown-it.umd.min-h-q_g2pl.js";
import "./tiny-slider-CC0nyWcN.js";
import "./index-D21_sbBM.js";
import "./aria-C-hsWcn7.js";
import "./index-CreMjc0E.js";
import "./index-DhHA3mFI.js";
import "./use-global-config-CYuHb1FB.js";
import "./Button-C_PMcYdl.js";
import "./AvatarSimple-DIs6U3iF.js";
import "./via-placeholder-csI6CdwS.js";
import "./user-qMNVzsWD.js";
import "./sett-Dbwu6PJ1.js";
import "./avatarSettings-C1kj7zSJ.js";
import "./vue3-avataaars-DO56oOZp.js";
import "./index-5N62XIoj.js";
import "./index-DYh1qtlV.js";
import "./use-dialog-CC6CVfkB.js";
import "./index-BR6qnryQ.js";
import "./index-BaPl-dvV.js";
import "./logo-DqlCWKKL.js";
const S = {
        class: "pricing-wrapper"
    },
    q = {
        class: "pricing-tabs"
    },
    z = ["onClick", "onKeydown"],
    D = ["src"],
    E = {
        class: "container-inner no-padding"
    },
    N = {
        class: "container-inner no-padding"
    },
    O = {
        class: "container-inner no-padding"
    },
    W = k(e({
        __name: "PricingTabbed",
        props: {
            coin: {
                default: ""
            }
        },
        setup(i) {
            n();
            const a = i,
                s = [{
                    icon: "/images/svg/market-analysis.svg",
                    name: "Details"
                }, {
                    icon: "/images/svg/data-analysis.svg",
                    name: "Chart"
                }, {
                    icon: "/images/svg/newspaper.svg",
                    name: "News"
                }],
                e = t(0);
            return (i, n) => (o(), r("div", S, [l("div", q, [(o(), r(p, null, m(s, ((i, a) => l("a", {
                key: a,
                class: c(["tab-item", e.value === a && "is-active"]),
                href: "#",
                onClick: u((i => e.value = a), ["prevent"]),
                onKeydown: d(u((() => e.value = a), ["prevent"]), ["space"])
            }, [l("img", {
                src: i.icon,
                alt: "Pricing icon"
            }, null, 8, D), l("span", null, v(i.name), 1)], 42, z))), 64)), n[0] || (n[0] = l("div", {
                class: "naver"
            }, [l("div", {
                class: "naver-inner"
            }, [l("div", {
                class: "naver-naver"
            })])], -1))]), l("div", {
                class: c(["pricing-container", 0 === e.value && "is-active"])
            }, [l("div", E, [j(C, {
                coin: a.coin
            }, null, 8, ["coin"])])], 2), l("div", {
                class: c(["pricing-container", 1 === e.value && "is-active"])
            }, [l("div", N, [j(h, {
                coin: a.coin,
                activeTab: e.value
            }, null, 8, ["coin", "activeTab"])])], 2), l("div", {
                class: c(["pricing-container", 2 === e.value && "is-active"])
            }, [l("div", O, [j(B, {
                coin: a.coin,
                activeTab: e.value
            }, null, 8, ["coin", "activeTab"])])], 2)]))
        }
    }), [
        ["__scopeId", "data-v-4913c643"]
    ]),
    $ = e({
        __name: "[slug]",
        setup(e) {
            const l = g(),
                p = x(),
                m = t(!1);
            t(l.query.open);
            const c = t(l.params.slug);
            return (!c.value || "BTC" !== c.value && "ETH" !== c.value) && (p.push({
                name: "ai-slug",
                params: {
                    slug: "BTC"
                }
            }), c.value = "BTC"), t(!1), b(l, (i => {
                const a = i.params.slug;
                "GG" !== a ? "BTC" === a || "ETH" === a ? c.value = a : (p.push({
                    name: "ai-slug",
                    params: {
                        slug: "BTC"
                    }
                }), c.value = "BTC") : p.push({
                    name: "ai-slug",
                    params: {
                        slug: c.value
                    },
                    query: {
                        open: i.query.open
                    }
                })
            })), n(), (e, n) => {
                const t = G,
                    l = w,
                    p = W,
                    u = f("Container"),
                    d = s,
                    v = a;
                return o(), r("div", null, [j(t), j(d, null, {
                    default: y((() => [j(u, null, {
                        default: y((() => [j(l, {
                            title: c.value + "-GPT",
                            subtitle: "OPZ-AI",
                            text: "Your stake directly fuels " + c.value + "-GPT Processing Power, allowing it to make smart trading decisions."
                        }, null, 8, ["title", "text"]), (o(), _(P, {
                            coin: c.value,
                            key: `chat-ai-${c.value}`
                        }, null, 8, ["coin"])), (o(), _(p, {
                            coin: c.value,
                            key: `pricing-tabbed-${c.value}`
                        }, null, 8, ["coin"]))])),
                        _: 1
                    })])),
                    _: 1
                }), j(v, {
                    content: T(i),
                    cta: !1,
                    color: "dark"
                }, null, 8, ["content"]), j(A, {
                    modelValue: m.value,
                    "onUpdate:modelValue": n[0] || (n[0] = i => m.value = i),
                    btn: !1
                }, null, 8, ["modelValue"])])
            }
        }
    });
"function" == typeof V && V($);
export {
    $ as
    default
};