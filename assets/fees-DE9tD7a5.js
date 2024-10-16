import {
    f as e,
    _ as a
} from "./index-BPv_7EZ9.js";
import {
    _ as t
} from "./Section-DPQWt_EU.js";
import {
    _ as i
} from "./PageTitle-ChfDSLUN.js";
import {
    _ as s
} from "./Navbar2-Cx1AKm6v.js";
import {
    m as o,
    dm as r,
    Y as l,
    G as n,
    dp as p,
    a as d,
    u as m,
    dn as u,
    y as c,
    j as v,
    v as g,
    l as j,
    w as f,
    p as b,
    X as w,
    P as x,
    o as h,
    dj as _,
    dh as y,
    t as F,
    q as S,
    s as k
} from "./index-CQfCy4Xm.js";
import "./index-DZwhim7i.js";
import {
    u as A
} from "./useSeoMeta-DJrBtPw8.js";
import {
    E as L,
    a as T
} from "./index-BUqPiGKl.js";
import "./Subtitle-C6oUzL5I.js";
import "./_plugin-vue_export-helper-BCo6x5W8.js";
import "./ButtonGR-CCzD27Qk.js";
import "./Title-B_xB6icS.js";
import "./AppPop-DXr7YMXx.js";
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
import "./_initCloneObject-DqrhPNyg.js";
import "./isPlainObject-BkooXA2Q.js";
const D = {
        class: "container con-2"
    },
    V = {
        class: "pricing-wrapper"
    },
    C = {
        class: "pricing-tabs"
    },
    P = {
        key: 0,
        class: "right-coupon"
    },
    R = o({
        __name: "fees",
        setup(o) {
            const {
                Api: R
            } = r(), {
                t: U
            } = l();
            n(), p(), d();
            const B = m(),
                I = u();
            A(U("pga.trading-fees") + " | Fee Level Overview", "Check your current fee level and understand our cost structure. We provide the clarity you need to manage your finances effectively.");
            const O = c(0),
                G = c([]),
                M = c(0);
            R.getAllFeeLevel().then((e => {
                const a = e.data;
                0 == a.code && (G.value = a.data)
            })), B.isLoggedIn && R.getUserFeeLevel().then((e => {
                const a = e.data;
                0 == a.code && (M.value = a.data.id)
            }));
            const N = ({
                row: e,
                rowIndex: a
            }) => B.isLoggedIn && a === M.value - 1 ? "current-row" : "";
            return (o, r) => {
                const l = s,
                    n = i,
                    p = t,
                    d = a;
                return h(), v(x, null, [g(l), j("div", null, [g(p, {
                    class: b(w(I).isAppOn && "pt-0")
                }, {
                    default: f((() => [j("div", D, [g(n, {
                        title: w(U)("pga.trading-fees"),
                        subtitle: w(U)("ctm.enjoy-higher-discounts-vip")
                    }, null, 8, ["title", "subtitle"]), j("div", V, [j("div", C, [j("a", {
                        class: b(["tab-item", 0 === O.value && "is-active"]),
                        onClick: r[0] || (r[0] = _((e => O.value = 0), ["prevent"])),
                        onKeydown: r[1] || (r[1] = y(_((() => O.value = 0), ["prevent"]), ["space"]))
                    }, [j("span", null, F(w(U)("pga.spot-trading-fee")), 1)], 34), j("a", {
                        class: b(["tab-item", 1 === O.value && "is-active"]),
                        onClick: r[2] || (r[2] = _((e => O.value = 1), ["prevent"])),
                        onKeydown: r[3] || (r[3] = y(_((() => O.value = 1), ["prevent"]), ["space"]))
                    }, [j("span", null, F(w(U)("dash.derivates")), 1)], 34), r[4] || (r[4] = j("div", {
                        class: "naver"
                    }, [j("div", {
                        class: "naver-inner"
                    }, [j("div", {
                        class: "naver-naver"
                    })])], -1))])]), g(w(L), {
                        class: "slim-table",
                        data: G.value,
                        style: {
                            width: "100%"
                        },
                        "table-layout": "fixed",
                        "row-class-name": N
                    }, {
                        default: f((() => [g(w(T), {
                            prop: "gradeName",
                            label: w(U)("pga.level"),
                            width: "190"
                        }, {
                            default: f((e => [S(F(e.row.gradeName) + " ", 1), w(B).isLoggedIn && e.row.id == M.value ? (h(), v("div", P, F(w(U)("pga.current").toUpperCase()), 1)) : k("", !0)])),
                            _: 1
                        }, 8, ["label"]), g(w(T), {
                            label: w(U)("pga.30d-trade-volume"),
                            align: "center"
                        }, {
                            default: f((e => [S(F(0 == e.row.spotTradeVolume ? "< " + (0 == O.value ? G.value[1].spotTradeVolume : G.value[1].marginTradeVolume).toLocaleString(void 0, {
                                minimumFractionDigits: 2
                            }) : "≥ " + (0 == O.value ? e.row.spotTradeVolume : e.row.marginTradeVolume).toLocaleString(void 0, {
                                minimumFractionDigits: 2
                            })) + " USDT ", 1)])),
                            _: 1
                        }, 8, ["label"]), g(w(T), {
                            label: w(U)("pga.or"),
                            "min-width": "40px",
                            align: "center"
                        }, {
                            default: f((e => r[5] || (r[5] = [S("/")]))),
                            _: 1
                        }, 8, ["label"]), g(w(T), {
                            label: w(U)("dash.deposit") + " (USDT)",
                            align: "center"
                        }, {
                            default: f((e => [S(F(0 == e.row.depositAmount ? "< " + G.value[1].depositAmount.toLocaleString(void 0, {
                                minimumFractionDigits: 2
                            }) : "≥ " + e.row.depositAmount.toLocaleString(void 0, {
                                minimumFractionDigits: 2
                            })) + " USDT ", 1)])),
                            _: 1
                        }, 8, ["label"]), g(w(T), {
                            label: w(U)("dash.maker") + " " + w(U)("pga.fee"),
                            align: "right"
                        }, {
                            default: f((e => [S(F((100 * (0 == O.value ? e.row.spotMakerFeeRate : e.row.marginMakerFeeRate)).toFixed(4)) + "% ", 1)])),
                            _: 1
                        }, 8, ["label"]), g(w(T), {
                            label: w(U)("dash.taker") + " " + w(U)("pga.fee"),
                            align: "right"
                        }, {
                            default: f((e => [S(F((100 * (0 == O.value ? e.row.spotFeeRate : e.row.marginFeeRate)).toFixed(4)) + "% ", 1)])),
                            _: 1
                        }, 8, ["label"])])),
                        _: 1
                    }, 8, ["data"])])])),
                    _: 1
                }, 8, ["class"])]), g(d, {
                    content: w(e),
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