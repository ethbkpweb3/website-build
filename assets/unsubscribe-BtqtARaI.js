import {
    f as s,
    _ as e
} from "./index-BPv_7EZ9.js";
import {
    _ as t
} from "./Hero.vue_vue_type_style_index_0_lang-DHspTRKr.js";
import {
    _ as i
} from "./PageTitle-ChfDSLUN.js";
import {
    m as o,
    dn as a,
    dm as r,
    u as n,
    a as p,
    Y as d,
    G as m,
    dp as l,
    I as c,
    o as u,
    j as v,
    k as j,
    v as f,
    w as b,
    l as x,
    X as y,
    P as g
} from "./index-CQfCy4Xm.js";
import {
    _
} from "./_plugin-vue_export-helper-BCo6x5W8.js";
import {
    _ as w
} from "./Navbar2-Cx1AKm6v.js";
import {
    u as h
} from "./useSeoMeta-DJrBtPw8.js";
import {
    b as k
} from "./route-block-B_A1xBdJ.js";
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
import "./vue.8fc199ce-DBDcZ0BB.js";
const A = {
        class: "hero-wrapper"
    },
    P = {
        class: "columns is-vcentered"
    },
    B = {
        class: "column is-relative"
    },
    I = {
        class: "hero-caption mx-auto max-w-6"
    },
    S = {
        ref: "root"
    },
    Y = _(o({
        __name: "HeroI2",
        setup(s) {
            a();
            const {
                Api: e
            } = r();
            n();
            const o = p(),
                {
                    t: y
                } = d();
            m();
            const g = l();
            return c((() => {
                g.query.id && (() => {
                    const s = new FormData;
                    s.append("mailId", g.query.id), s.append("days", "30"), e.setUnsubscribe(s).then((({
                        data: s
                    }) => {
                        0 === s.code && o.success(y("sett.successfully-removed"))
                    }))
                })()
            })), (s, e) => {
                const o = i,
                    a = t;
                return u(), v("div", A, [e[3] || (e[3] = j('<div class="hero-grid" data-v-e66a44f6><div class="strip" data-v-e66a44f6></div><div class="strip" data-v-e66a44f6></div><div class="strip" data-v-e66a44f6></div><div class="strip" data-v-e66a44f6></div><div class="strip" data-v-e66a44f6></div><div class="strip" data-v-e66a44f6></div></div>', 1)), f(a, {
                    alignment: "center",
                    size: "fullheight"
                }, {
                    body: b((() => [x("div", P, [x("div", B, [x("div", I, [f(o, {
                        title: "You are now unsubscribed",
                        subtitle: "Mailing List",
                        text: "we sorry to see you go, but we respect your decision. You can always come back whenever you want!"
                    }, {
                        content: b((() => e[0] || (e[0] = []))),
                        _: 1
                    }), e[1] || (e[1] = x("div", {
                        class: "mt-4 items-center flex justify-center"
                    }, null, -1))])])])])),
                    footer: b((() => e[2] || (e[2] = []))),
                    _: 1
                }), x("div", S, null, 512)])
            }
        }
    }), [
        ["__scopeId", "data-v-e66a44f6"]
    ]),
    q = o({
        __name: "unsubscribe",
        setup: t => (d(), h("Unsubscribe | Mailing List", "Unsubscribe from our mailing list and stop receiving updates from OPZ. We're sorry to see you go, but we respect your decision. You can always come back whenever you want!"), a(), (t, i) => {
            const o = w,
                a = Y,
                r = e;
            return u(), v(g, null, [f(o), x("div", null, [f(a), f(r, {
                content: y(s),
                color: "dark",
                cta: !1
            }, null, 8, ["content"])])], 64)
        })
    });
"function" == typeof k && k(q);
export {
    q as
    default
};