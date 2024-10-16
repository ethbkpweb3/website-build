import {
    f as s,
    _ as t
} from "./index-BPv_7EZ9.js";
import {
    _ as a
} from "./Section-DPQWt_EU.js";
import {
    _ as e
} from "./Title-B_xB6icS.js";
import {
    _ as r
} from "./Collapse.vue_vue_type_style_index_0_lang-jEeEeRhV.js";
import {
    m as i,
    o,
    j as n,
    l,
    v as c,
    y as p,
    cC as m,
    t as d,
    s as f,
    q as u,
    X as v,
    w as j,
    dp as _,
    G as h,
    I as g,
    cr as x,
    B as y,
    P as w
} from "./index-CQfCy4Xm.js";
import {
    _ as b
} from "./_plugin-vue_export-helper-BCo6x5W8.js";
import {
    _ as k
} from "./SectionTitle.vue_vue_type_script_setup_true_lang-C7hy-prY.js";
import {
    c as A
} from "./index-CaRD-WAZ.js";
import {
    u as D
} from "./useSeoMeta-DJrBtPw8.js";
import {
    _ as I
} from "./Navbar2-Cx1AKm6v.js";
import {
    s as M
} from "./sleep-MiAo3PcT.js";
import {
    a as B
} from "./index-Gj2QCn8P.js";
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
import "./vue.8fc199ce-DBDcZ0BB.js";
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
const P = {
        class: "py-6"
    },
    S = {
        class: "mx-auto max-w-7"
    },
    T = {
        class: "columns"
    },
    C = {
        class: "column"
    },
    q = {
        class: "collapse-wrap"
    },
    z = b(i({
        __name: "FaqList",
        props: {
            items: {
                default: () => []
            },
            chevrons: {
                type: Boolean,
                default: !1
            }
        },
        setup(s) {
            const t = s;
            return (s, a) => {
                const e = r;
                return o(), n("div", P, [l("div", S, [l("div", T, [l("div", C, [l("div", q, [c(e, {
                    items: t.items,
                    "with-chevron": t.chevrons
                }, null, 8, ["items", "with-chevron"])])])])])])
            }
        }
    }), [
        ["__scopeId", "data-v-e09d6db1"]
    ]),
    E = {
        class: "nft-details-wrapper"
    },
    F = {
        class: "nft-details-inner"
    },
    G = {
        class: "columns"
    },
    J = {
        class: "column is-6"
    },
    L = {
        class: "nft-preview-holder"
    },
    R = {
        class: "main"
    },
    V = {
        class: "cards_g"
    },
    X = {
        class: "cards_g_item"
    },
    Y = {
        class: "card-g"
    },
    $ = {
        class: "card_image"
    },
    H = ["src"],
    N = {
        class: "card_content"
    },
    W = {
        class: "card_title"
    },
    K = {
        class: "nft-info-price flex items-center"
    },
    O = {
        class: "eth-price text-gradient"
    },
    Q = {
        key: 0,
        class: "paragraph px-1"
    },
    U = {
        class: "dollar-price"
    },
    Z = {
        key: 1,
        class: "paragraph px-1"
    },
    ss = {
        class: "collection-rank"
    },
    ts = {
        class: "nft-info-price flex items-center"
    },
    as = {
        class: "collection-rank"
    },
    es = {
        key: 0,
        class: "paragraph px-1"
    },
    rs = {
        class: "collection-rank"
    },
    is = {
        key: 1,
        class: "paragraph px-1"
    },
    os = {
        class: "collection-rank"
    },
    ns = {
        class: "mt-2 tx-id"
    },
    ls = {
        class: "tx-cnt"
    },
    cs = {
        class: "column is-6"
    },
    ps = {
        class: "nft-info"
    },
    ms = {
        class: "nft-info-head"
    },
    ds = {
        class: "actions"
    },
    fs = {
        class: "nft-info-tabs"
    },
    us = {
        class: "nft-info-tabs-inner flex justify-center"
    },
    vs = ["src"],
    js = b(i({
        __name: "CharityDetails",
        props: {
            nft: {}
        },
        setup(s) {
            const t = s,
                a = 6e4,
                r = 36e5,
                i = 24 * r,
                _ = p(0),
                h = p(0),
                g = p(0),
                x = p(0),
                y = Math.floor(11 * Math.random()),
                w = new Date(Date.now() + 864e5 * y).getTime();
            D(t.nft.name, "Your Contribution Makes a Difference. Your support helps us contribute more effectively to charity through digital currency.");
            const b = setInterval((() => {
                const s = (new Date).getTime(),
                    t = w - s;
                x.value = Math.floor(t / i), g.value = Math.floor(t % i / r), h.value = Math.floor(t % r / a), _.value = Math.floor(t % a / 1e3), t < 0 && clearInterval(b)
            }), 0);
            return (s, a) => {
                const r = k,
                    i = z,
                    p = e,
                    _ = m("RouterLink");
                return o(), n("div", E, [l("div", F, [l("div", G, [l("div", J, [l("div", L, [l("div", R, [l("ul", V, [l("li", X, [l("div", Y, [l("div", $, [l("img", {
                    src: t.nft.logo
                }, null, 8, H)]), l("div", N, [l("h2", W, d(t.nft.name), 1), l("div", K, [l("span", O, d(t.nft.country), 1), t.nft.state ? (o(), n("span", Q, "·")) : f("", !0), l("span", U, d(t.nft.state), 1), t.nft.city ? (o(), n("span", Z, "·")) : f("", !0), l("span", ss, d(t.nft.city), 1)]), l("div", ts, [l("span", as, d(t.nft.postcode), 1), t.nft.nonprofitAddress1 ? (o(), n("span", es, "·")) : f("", !0), l("span", rs, d(t.nft.nonprofitAddress1), 1), t.nft.nonprofitAddress2 ? (o(), n("span", is, "·")) : f("", !0), l("span", os, d(t.nft.nonprofitAddress2), 1)]), l("div", ns, [a[0] || (a[0] = u(" Tax Id: ")), l("span", ls, d(t.nft.nonprofitTaxID), 1)])])])])])]), c(r, {
                    class: "mt-5",
                    subtitle: "Faq"
                }), c(i, {
                    items: v(A)
                }, null, 8, ["items"])])]), l("div", cs, [l("div", ps, [l("div", ms, [c(p, {
                    tag: "h2",
                    size: 4,
                    weight: "bold",
                    narrow: ""
                }, {
                    default: j((() => a[1] || (a[1] = [l("div", {
                        class: "flex items-center"
                    }, null, -1)]))),
                    _: 1
                }), l("div", ds, [c(_, {
                    to: "/apps/charity",
                    class: "action"
                }, {
                    default: j((() => a[2] || (a[2] = [l("i", {
                        class: "fas fa-arrow-left"
                    }, null, -1)]))),
                    _: 1
                })])]), l("div", fs, [l("div", us, [l("iframe", {
                    title: "",
                    frameborder: "0",
                    width: "300",
                    height: "600",
                    scrolling: "no",
                    src: "https://tgbwidget.com?charityID=" + t.nft.id
                }, null, 8, vs)])])])])])])])
            }
        }
    }), [
        ["__scopeId", "data-v-2d694d74"]
    ]);
const _s = {
        key: 0,
        class: "container"
    },
    hs = i({
        __name: "[slug]",
        setup(e) {
            const r = _(),
                i = h(),
                m = r.params.slug,
                d = p();
            async function u() {
                try {
                    d.value = await async function(s) {
                        const t = B.find((t => t.id === s));
                        return await M(200), t ? Promise.resolve(t) : Promise.reject(new Error(`Job ${s} not found`))
                    }(m)
                } catch {
                    i.replace({
                        name: "all",
                        params: {
                            all: `not-found-${r.params.slug}`
                        }
                    })
                }
            }
            return g(u), x(u), y((() => r.fullPath), u), (e, r) => {
                const i = I,
                    p = js,
                    m = a,
                    u = t;
                return o(), n(w, null, [c(i), l("div", null, [c(m, {
                    color: "grey",
                    overflown: ""
                }, {
                    default: j((() => [d.value ? (o(), n("div", _s, [c(p, {
                        nft: d.value
                    }, null, 8, ["nft"])])) : f("", !0)])),
                    _: 1
                }), c(u, {
                    content: v(s),
                    color: "dark",
                    cta: !1
                }, null, 8, ["content"])])], 64)
            }
        }
    });
export {
    hs as
    default
};