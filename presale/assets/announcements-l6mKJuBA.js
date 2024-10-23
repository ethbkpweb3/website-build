import {
    f as e,
    _ as t
} from "./index-BPv_7EZ9.js";
import {
    _ as a
} from "./Section-DPQWt_EU.js";
import {
    _ as n
} from "./PageTitle-ChfDSLUN.js";
import {
    f as s,
    _ as r
} from "./Navbar2-Cx1AKm6v.js";
import {
    m as o,
    Y as i,
    dn as l,
    dm as p,
    K as c,
    y as m,
    dp as u,
    j as d,
    v,
    l as g,
    w as j,
    X as f,
    P as y,
    o as w,
    p as x,
    dj as S,
    dh as h,
    t as A,
    cB as b,
    ck as k,
    q as _,
    s as P,
    n as z
} from "./index-CQfCy4Xm.js";
import "./index-DZwhim7i.js";
import {
    F as C
} from "./browser-Cv63Auap.js";
import {
    u as E
} from "./useSeoMeta-DJrBtPw8.js";
import {
    E as T
} from "./index-CRtkyuT7.js";
import "./Subtitle-C6oUzL5I.js";
import "./_plugin-vue_export-helper-BCo6x5W8.js";
import "./ButtonGR-CCzD27Qk.js";
import "./Title-B_xB6icS.js";
import "./AppPop-DXr7YMXx.js";
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
const B = {
        class: "container con-2"
    },
    D = {
        class: "pricing-wrapper"
    },
    K = {
        class: "pricing-tabs"
    },
    N = ["alt"],
    q = ["alt"],
    U = {
        class: "announcements"
    },
    V = ["href"],
    W = {
        class: "accouncements-date"
    },
    X = {
        class: "text-gray1"
    },
    Y = {
        class: "accouncements-content"
    },
    F = {
        class: "accouncements-title"
    },
    G = {
        class: "accouncements-description"
    },
    M = ["href", "target"],
    O = {
        class: "mt-1"
    },
    R = o({
        __name: "announcements",
        setup(o) {
            const {
                t: R
            } = i();
            l();
            const {
                Api: Z
            } = p();
            E(R("pga.notifications"), "Stay updated with the latest notifications from OPZ. Subscribe now for real-time alerts on breakthroughs, special offers, and expert insights in our industry.");
            const H = c({
                    allAnnouncementsSystem: {
                        pageSize: 10,
                        total: 1,
                        rows: {}
                    },
                    allAnnouncementsEvents: {
                        pageSize: 10,
                        total: 1,
                        rows: {}
                    }
                }),
                I = m(0),
                J = u();
            J.params.tp && "2" == J.params.tp && (I.value = 1);
            const L = m(1),
                Q = m(1),
                $ = () => {
                    const e = new C;
                    e.append("pageNo", String(L.value)), e.append("type", "1"), e.append("pageSize", String(H.allAnnouncementsSystem.pageSize)), Z.getAnnouncement(e).then((e => {
                        const t = e.data;
                        if (0 == t.code) {
                            const e = t.data.content.sort(((e, t) => new Date(t.createTime) - new Date(e.createTime)));
                            H.allAnnouncementsSystem.rows = e
                        }
                    }))
                },
                ee = () => {
                    const e = new C;
                    e.append("pageNo", String(Q.value)), e.append("type", "2"), e.append("pageSize", String(H.allAnnouncementsEvents.pageSize)), Z.getAnnouncement(e).then((e => {
                        const t = e.data;
                        if (0 == t.code) {
                            const e = t.data.content.sort(((e, t) => new Date(t.createTime) - new Date(e.createTime)));
                            H.allAnnouncementsEvents.rows = e
                        }
                    }))
                };
            return $(), ee(), (o, i) => {
                const l = r,
                    p = n,
                    c = a,
                    m = t;
                return w(), d(y, null, [v(l), g("div", null, [v(c, null, {
                    default: j((() => [g("div", B, [v(p, {
                        title: f(R)("pga.notifications"),
                        subtitle: ""
                    }, null, 8, ["title"]), g("div", D, [g("div", K, [g("a", {
                        class: x(["tab-item", 0 === I.value && "is-active"]),
                        onClick: i[0] || (i[0] = S((e => I.value = 0), ["prevent"])),
                        onKeydown: i[1] || (i[1] = h(S((() => I.value = 0), ["prevent"]), ["space"]))
                    }, [g("img", {
                        src: "/images/svg/alarm-on.svg",
                        alt: f(R)("pga.general-notifications")
                    }, null, 8, N), g("span", null, A(f(R)("pga.general-notifications")), 1)], 34), g("a", {
                        class: x(["tab-item", 1 === I.value && "is-active"]),
                        onClick: i[2] || (i[2] = S((e => I.value = 1), ["prevent"])),
                        onKeydown: i[3] || (i[3] = h(S((() => I.value = 1), ["prevent"]), ["space"]))
                    }, [g("img", {
                        src: "/images/svg/calendar.svg",
                        alt: f(R)("pga.activities")
                    }, null, 8, q), g("span", null, A(f(R)("pga.activities")), 1)], 34), i[8] || (i[8] = g("div", {
                        class: "naver"
                    }, [g("div", {
                        class: "naver-inner"
                    }, [g("div", {
                        class: "naver-naver"
                    })])], -1))])]), g("div", U, [(w(!0), d(y, null, b(I.value ? H.allAnnouncementsSystem.rows : H.allAnnouncementsEvents.rows, ((e, t) => (w(), d("div", {
                        key: t,
                        class: "accouncement-item"
                    }, [g("a", {
                        href: e.url,
                        style: k(e.url ? "" : "cursor:inherit"),
                        "data-wpel-link": "internal",
                        target: "_self",
                        rel: "follow noopener noreferrer"
                    }, [g("div", W, [g("div", X, A(f(s)(e.createTime)), 1)]), g("div", Y, [g("div", F, A(e.title), 1), g("div", G, [_(A(e.content) + " ", 1), e.url ? (w(), d("a", {
                        key: 0,
                        href: e.url,
                        target: e.url.startsWith("http") ? "_blank" : "_self",
                        rel: "follow noopener noreferrer"
                    }, A(f(R)("pga.read-more")) + " >", 9, M)) : P("", !0)])])], 12, V)])))), 128))]), g("div", O, [I.value ? (w(), z(f(T), {
                        key: 0,
                        currentPage: L.value,
                        "onUpdate:currentPage": i[4] || (i[4] = e => L.value = e),
                        background: "",
                        size: "small",
                        layout: "prev, pager, next",
                        total: H.allAnnouncementsSystem.total,
                        onCurrentChange: i[5] || (i[5] = e => $())
                    }, null, 8, ["currentPage", "total"])) : (w(), z(f(T), {
                        key: 1,
                        currentPage: Q.value,
                        "onUpdate:currentPage": i[6] || (i[6] = e => Q.value = e),
                        background: "",
                        size: "small",
                        layout: "prev, pager, next",
                        total: H.allAnnouncementsEvents.total,
                        onCurrentChange: i[7] || (i[7] = e => ee())
                    }, null, 8, ["currentPage", "total"]))])])])),
                    _: 1
                })]), v(m, {
                    content: f(e),
                    color: "dark",
                    cta: !1
                }, null, 8, ["content"])], 64)
            }
        }
    });
export {
    R as
    default
};