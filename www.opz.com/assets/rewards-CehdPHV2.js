import {
    f as e,
    _ as s
} from "./index-B_Hz-fzE.js";
import {
    _ as a
} from "./line-circ-y8Xq16cD.js";
import {
    ds as l,
    dy as t,
    y as n,
    B as o,
    L as i,
    be as r,
    h as d,
    m as c,
    o as u,
    j as p,
    r as m,
    p as v,
    X as b,
    Q as f,
    ew as g,
    l as h,
    q as x,
    t as y,
    v as w,
    w as k,
    n as V,
    cE as C,
    dh as j,
    dj as T,
    dg as D,
    d9 as _,
    G as B,
    cC as S,
    ck as A,
    Y as I,
    dm as U,
    dn as K,
    a as N,
    u as $,
    K as M,
    I as q,
    s as E,
    P as F,
    cB as P
} from "./index-jdACH0Rc.js";
import {
    b as O,
    d as W,
    i as z,
    _ as R,
    I as L,
    E as H,
    w as Z,
    F as Y
} from "./index-Dwv4qbXN.js";
import {
    a as G,
    E as Q
} from "./index-Citk0ABi.js";
import {
    E as J
} from "./index-BFAH_eUP.js";
import {
    _ as X
} from "./_plugin-vue_export-helper-BCo6x5W8.js";
import {
    _ as ee
} from "./Navbar2-DVEXcHRs.js";
import {
    C as se,
    P as ae,
    S as le
} from "./carousel.es-cLcmNbI1.js";
import {
    u as te
} from "./useSeoMeta-CRPJPIvz.js";
import {
    F as ne
} from "./browser-B3Bvmjnq.js";
import {
    m as oe
} from "./typescript-CRqm1_SZ.js";
import {
    U as ie,
    C as re,
    o as de
} from "./index-D4R9Vjdp.js";
import {
    b as ce
} from "./index-DWTvrBdo.js";
import "./Subtitle-ytb6lg8s.js";
import "./ButtonGR-BF9zAU5B.js";
import "./Title-ChmnbwlA.js";
import "./AppPop-C6dVPDH2.js";
import "./index-DPTDKB4o.js";
import "./index-DtPnfIe2.js";
import "./google-play-0W6tGWt8.js";
import "./VPlaceload-jGgmcTFZ.js";
import "./Button-BbTMX0Dh.js";
import "./AvatarSimple-CfXnZ0K8.js";
import "./via-placeholder-csI6CdwS.js";
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
import "./logo-DqlCWKKL.js";
import "./vue.8fc199ce-D3bCrqKA.js";
import "./aria-C-hsWcn7.js";
const ue = e => z(e) || l(e) || t(e),
    pe = O({
        accordion: Boolean,
        modelValue: {
            type: W([Array, String, Number]),
            default: () => oe([])
        }
    }),
    me = {
        [ie]: ue,
        [re]: ue
    },
    ve = Symbol("collapseContextKey"),
    be = c({
        name: "ElCollapse"
    });
var fe = R(c({ ...be,
    props: pe,
    emits: me,
    setup(e, {
        expose: s,
        emit: a
    }) {
        const l = e,
            {
                activeNames: t,
                setActiveNames: c
            } = ((e, s) => {
                const a = n(de(e.modelValue)),
                    l = l => {
                        a.value = l;
                        const t = e.accordion ? a.value[0] : a.value;
                        s(ie, t), s(re, t)
                    };
                return o((() => e.modelValue), (() => a.value = de(e.modelValue)), {
                    deep: !0
                }), i(ve, {
                    activeNames: a,
                    handleItemClick: s => {
                        if (e.accordion) l([a.value[0] === s ? "" : s]);
                        else {
                            const e = [...a.value],
                                t = e.indexOf(s);
                            t > -1 ? e.splice(t, 1) : e.push(s), l(e)
                        }
                    }
                }), {
                    activeNames: a,
                    setActiveNames: l
                }
            })(l, a),
            {
                rootKls: f
            } = (() => {
                const e = r("collapse");
                return {
                    rootKls: d((() => e.b()))
                }
            })();
        return s({
            activeNames: t,
            setActiveNames: c
        }), (e, s) => (u(), p("div", {
            class: v(b(f))
        }, [m(e.$slots, "default")], 2))
    }
}), [
    ["__file", "collapse.vue"]
]);
const ge = O({
        title: {
            type: String,
            default: ""
        },
        name: {
            type: W([String, Number]),
            default: void 0
        },
        icon: {
            type: G,
            default: L
        },
        disabled: Boolean
    }),
    he = c({
        name: "ElCollapseItem"
    });
var xe = R(c({ ...he,
    props: ge,
    setup(e, {
        expose: s
    }) {
        const a = e,
            {
                focusing: l,
                id: t,
                isActive: o,
                handleFocus: i,
                handleHeaderClick: c,
                handleEnterClick: B
            } = (e => {
                const s = f(ve),
                    {
                        namespace: a
                    } = r("collapse"),
                    l = n(!1),
                    t = n(!1),
                    o = g(),
                    i = d((() => o.current++)),
                    c = d((() => {
                        var s;
                        return null != (s = e.name) ? s : `${a.value}-id-${o.prefix}-${b(i)}`
                    })),
                    u = d((() => null == s ? void 0 : s.activeNames.value.includes(b(c))));
                return {
                    focusing: l,
                    id: i,
                    isActive: u,
                    handleFocus: () => {
                        setTimeout((() => {
                            t.value ? t.value = !1 : l.value = !0
                        }), 50)
                    },
                    handleHeaderClick: () => {
                        e.disabled || (null == s || s.handleItemClick(b(c)), l.value = !1, t.value = !0)
                    },
                    handleEnterClick: () => {
                        null == s || s.handleItemClick(b(c))
                    }
                }
            })(a),
            {
                arrowKls: S,
                headKls: A,
                rootKls: I,
                itemWrapperKls: U,
                itemContentKls: K,
                scopedContentId: N,
                scopedHeadId: $
            } = ((e, {
                focusing: s,
                isActive: a,
                id: l
            }) => {
                const t = r("collapse"),
                    n = d((() => [t.b("item"), t.is("active", b(a)), t.is("disabled", e.disabled)])),
                    o = d((() => [t.be("item", "header"), t.is("active", b(a)), {
                        focusing: b(s) && !e.disabled
                    }]));
                return {
                    arrowKls: d((() => [t.be("item", "arrow"), t.is("active", b(a))])),
                    headKls: o,
                    rootKls: n,
                    itemWrapperKls: d((() => t.be("item", "wrap"))),
                    itemContentKls: d((() => t.be("item", "content"))),
                    scopedContentId: d((() => t.b(`content-${b(l)}`))),
                    scopedHeadId: d((() => t.b(`head-${b(l)}`)))
                }
            })(a, {
                focusing: l,
                isActive: o,
                id: t
            });
        return s({
            isActive: o
        }), (e, s) => (u(), p("div", {
            class: v(b(I))
        }, [h("button", {
            id: b($),
            class: v(b(A)),
            "aria-expanded": b(o),
            "aria-controls": b(N),
            "aria-describedby": b(N),
            tabindex: e.disabled ? -1 : 0,
            type: "button",
            onClick: b(c),
            onKeydown: j(T(b(B), ["stop", "prevent"]), ["space", "enter"]),
            onFocus: b(i),
            onBlur: e => l.value = !1
        }, [m(e.$slots, "title", {}, (() => [x(y(e.title), 1)])), m(e.$slots, "icon", {
            isActive: b(o)
        }, (() => [w(b(H), {
            class: v(b(S))
        }, {
            default: k((() => [(u(), V(C(e.icon)))])),
            _: 1
        }, 8, ["class"])]))], 42, ["id", "aria-expanded", "aria-controls", "aria-describedby", "tabindex", "onClick", "onKeydown", "onFocus", "onBlur"]), w(b(ce), null, {
            default: k((() => [D(h("div", {
                id: b(N),
                role: "region",
                class: v(b(U)),
                "aria-hidden": !b(o),
                "aria-labelledby": b($)
            }, [h("div", {
                class: v(b(K))
            }, [m(e.$slots, "default")], 2)], 10, ["id", "aria-hidden", "aria-labelledby"]), [
                [_, b(o)]
            ])])),
            _: 3
        })], 2))
    }
}), [
    ["__file", "collapse-item.vue"]
]);
const ye = Z(fe, {
        CollapseItem: xe
    }),
    we = Y(xe),
    ke = {
        class: "cardV2-header"
    },
    Ve = {
        class: "cardV2-btn-icon"
    },
    Ce = {
        class: "cardv2-tp-text"
    },
    je = {
        class: "cardv2-bt-text"
    },
    Te = ["href"],
    De = {
        class: "cardV2-btn-text"
    },
    _e = {
        class: "cardV2-btn-text"
    },
    Be = {
        class: "cardV2-top-btn"
    },
    Se = {
        class: "cardV2-body"
    },
    Ae = {
        class: "cardV2-body-top"
    },
    Ie = {
        width: "0"
    },
    Ue = {
        class: "cardV2-body-middle"
    },
    Ke = {
        class: "cardV2-body-middle-t1"
    },
    Ne = {
        class: "cardV2-body-bottom"
    },
    $e = {
        class: "cardV2-body-bottom-r"
    },
    Me = {
        class: "percentage-value"
    },
    qe = {
        class: "cardV2-body-bottom-t"
    },
    Ee = {
        class: "cardV2-body-bottom-t1"
    },
    Fe = {
        class: "cardV2-body-bottom-t2"
    },
    Pe = {
        key: 1,
        class: "cardV2-body-bottom"
    },
    Oe = ["href"],
    We = {
        class: "right-coupon"
    },
    ze = X(c({
        __name: "CardV2",
        props: {
            card: {}
        },
        setup(e) {
            B();
            const s = e,
                l = n(!1),
                t = () => {
                    l.value = !0
                },
                o = () => {
                    l.value = !1
                };
            return (e, n) => {
                const i = S("RouterLink");
                return u(), p("div", {
                    class: "cardV2",
                    style: A(s.card.expired && "opacity:0.8;")
                }, [h("div", null, [h("div", ke, [h("div", {
                    class: "cardV2-header-bg",
                    style: A("background-image: url(" + s.card.img + ")")
                }, n[0] || (n[0] = [h("img", {
                    class: "cardV2-header-rd",
                    alt: "",
                    src: a
                }, null, -1)]), 4), h("div", {
                    class: v(["cardV2-btn", l.value && "isHover"]),
                    onMouseover: t,
                    onMouseleave: o,
                    onFocus: t,
                    onFocusout: o
                }, [h("div", Ve, [h("span", Ce, y(s.card.bonus), 1), h("span", je, y(s.card.symbol), 1)]), s.card.link.startsWith("https") ? (u(), p("a", {
                    key: 0,
                    href: s.card.link,
                    target: "_blank"
                }, [h("div", De, [h("span", null, y(s.card.btn), 1)])], 8, Te)) : (u(), V(i, {
                    key: 1,
                    to: {
                        name: s.card.link
                    }
                }, {
                    default: k((() => [h("div", _e, [h("span", null, y(s.card.btn), 1)])])),
                    _: 1
                }, 8, ["to"]))], 34), h("div", Be, [w(b(Q), {
                    effect: "customized",
                    content: s.card.expired ? "Expired" : s.card.maxprogress == s.card.progress ? "Finished" : "Active",
                    placement: "top"
                }, {
                    default: k((() => [h("div", {
                        class: v(s.card.expired ? "expired-circle" : s.card.maxprogress == s.card.progress ? "completed-circle" : "cardV2-top-btn-circle pulsate")
                    }, null, 2)])),
                    _: 1
                }, 8, ["content"])])])]), h("div", Se, [h("div", Ae, [h("span", Ie, [h("span", null, [h("span", null, y(s.card.title), 1)])])]), h("div", Ue, [h("span", Ke, y(s.card.text), 1)]), 0 != s.card.maxprogress ? (u(), V(b(Q), {
                    key: 0,
                    effect: "customized",
                    content: "Progress is updated every day 3:00 PM UTC",
                    placement: "bottom"
                }, {
                    default: k((() => [h("div", Ne, [h("div", $e, [w(b(J), {
                        percentage: 0 == s.card.progress ? 50 : s.card.progress / s.card.maxprogress * 100,
                        "stroke-width": 9,
                        indeterminate: 0 == s.card.progress
                    }, {
                        default: k((({
                            percentage: e
                        }) => [h("span", Me, y(0 == s.card.progress ? "0" : e) + "%", 1)])),
                        _: 1
                    }, 8, ["percentage", "indeterminate"])]), h("div", qe, [h("div", Ee, y(0 == s.card.progress ? "0" : s.card.progress) + " USDT ", 1), h("div", Fe, y(s.card.maxprogress) + " USDT", 1)])])])),
                    _: 1
                })) : (u(), p("div", Pe, [h("a", {
                    href: s.card.link,
                    target: "_blank"
                }, [h("div", We, y(s.card.voucher), 1)], 8, Oe)]))])], 4)
            }
        }
    }), [
        ["__scopeId", "data-v-926c0ecf"]
    ]),
    Re = {
        class: "staking"
    },
    Le = {
        class: "staking-head"
    },
    He = {
        class: "staking-top"
    },
    Ze = {
        class: "staking-top-body"
    },
    Ye = {
        class: "staking-top-left"
    },
    Ge = {
        style: {
            color: "white",
            "font-size": "32px"
        }
    },
    Qe = {
        style: {},
        class: "subtitle-claim"
    },
    Je = {
        class: "flex sub-content justify-between items-center btnAt"
    },
    Xe = {
        key: 1,
        style: {
            "margin-bottom": "36px"
        }
    },
    es = {
        key: 2,
        style: {
            width: "100%",
            "margin-bottom": "36px"
        }
    },
    ss = {
        id: "countdown"
    },
    as = {
        id: "days"
    },
    ls = {
        class: "numbers"
    },
    ts = {
        class: "label"
    },
    ns = {
        id: "hours"
    },
    os = {
        class: "numbers"
    },
    is = {
        class: "label"
    },
    rs = {
        id: "minutes"
    },
    ds = {
        class: "numbers"
    },
    cs = {
        class: "label"
    },
    us = {
        id: "seconds"
    },
    ps = {
        class: "numbers"
    },
    ms = {
        class: "label"
    },
    vs = {
        key: 3,
        style: {
            "margin-bottom": "36px"
        }
    },
    bs = {
        class: "staking-body"
    },
    fs = {
        class: "deposit-bonus"
    },
    gs = {
        class: "deposit-bonus mt-5"
    },
    hs = {
        class: "box-style1"
    },
    xs = {
        class: "box"
    },
    ys = {
        class: "content"
    },
    ws = {
        class: "top"
    },
    ks = {
        class: "left-amount"
    },
    Vs = {
        class: "right-coupon"
    },
    Cs = {
        class: "box-desc"
    },
    js = {
        class: "box-btn btnAt"
    },
    Ts = {
        class: "box"
    },
    Ds = {
        class: "content"
    },
    _s = {
        class: "top"
    },
    Bs = {
        class: "left-amount"
    },
    Ss = {
        class: "right-coupon"
    },
    As = {
        class: "box-desc"
    },
    Is = {
        class: "box-btn btnAt"
    },
    Us = {
        class: "box"
    },
    Ks = {
        class: "content"
    },
    Ns = {
        class: "top"
    },
    $s = {
        class: "left-amount"
    },
    Ms = {
        class: "right-coupon"
    },
    qs = {
        class: "box-desc"
    },
    Es = {
        class: "box-btn btnAt"
    },
    Fs = {
        class: "box"
    },
    Ps = {
        class: "content"
    },
    Os = {
        class: "top"
    },
    Ws = {
        class: "left-amount"
    },
    zs = {
        class: "right-coupon"
    },
    Rs = {
        class: "box-desc"
    },
    Ls = {
        class: "box-btn btnAt"
    },
    Hs = {
        class: "box"
    },
    Zs = {
        class: "content"
    },
    Ys = {
        class: "top"
    },
    Gs = {
        class: "left-amount"
    },
    Qs = {
        class: "right-coupon"
    },
    Js = {
        class: "box-desc"
    },
    Xs = {
        class: "box-btn btnAt"
    },
    ea = {
        class: "box"
    },
    sa = {
        class: "content"
    },
    aa = {
        class: "top"
    },
    la = {
        class: "left-amount"
    },
    ta = {
        class: "right-coupon"
    },
    na = {
        class: "box-desc"
    },
    oa = {
        class: "box-btn btnAt"
    },
    ia = {
        class: "table-bonus"
    },
    ra = {
        class: "row-bonus"
    },
    da = {
        class: "item-bonus text-bold"
    },
    ca = {
        class: "item-bonus text-bold"
    },
    ua = {
        class: "item-bonus"
    },
    pa = {
        class: "item-bonus"
    },
    ma = {
        class: "flex mt-6"
    },
    va = {
        class: "title-dark"
    },
    ba = {
        class: "info-items"
    },
    fa = {
        class: "info-items mb-0"
    },
    ga = "/images/illustrations/purple-trades.jpg",
    ha = X(c({
        __name: "rewards",
        setup(a) {
            const {
                t: l
            } = I();
            te(l("inx.reward-center"), "Earn rewards and bonuses by completing user tasks.");
            const {
                Api: t
            } = U(), o = K(), i = B(), r = N(), d = $(), c = n(["1"]), m = n(["1"]), v = n(""), f = n(0), g = [{
                id: 1,
                btn: "Follow OPZ",
                link: "https://forms.gle/UE3tfNYQnpPWWKRq6",
                title: "Follow OPZ's Twitter account",
                text: "& RT our pinned tweet",
                img: "/images/illustrations/twitter.jpg",
                bonus: 5,
                maxprogress: 0,
                progress: 1,
                voucher: "Social Media Voucher",
                expired: !1,
                symbol: "USDT"
            }, {
                id: 11,
                btn: "Start Trading",
                link: "trade-slug",
                title: "Cumulative Spot Trading Value",
                text: "≥ 5,000 USDT",
                bonus: 10,
                maxprogress: 5e3,
                progress: 0,
                img: ga,
                expired: !1,
                symbol: "USDT"
            }, {
                id: 12,
                btn: "Start Trading",
                link: "trade-slug",
                title: "Cumulative Spot Trading Value",
                text: "≥ 20,000 USDT",
                bonus: 20,
                maxprogress: 2e4,
                progress: 0,
                img: ga,
                expired: !1,
                symbol: "USDT"
            }, {
                id: 13,
                btn: "Start Trading",
                link: "trade-slug",
                title: "Cumulative Spot Trading Value",
                text: "≥ 50,000 USDT",
                bonus: 50,
                maxprogress: 5e4,
                progress: 0,
                img: ga,
                expired: !1,
                symbol: "USDT"
            }], C = M({
                counter: {
                    days: 0,
                    hours: 0,
                    min: 0,
                    sec: 0
                },
                allCardV2: [],
                allbonus: [
                    [.006, 20],
                    [.012, 40],
                    [.025, 60],
                    [.05, 100],
                    [.1, 160],
                    [.2, 320],
                    [.5, 500],
                    [1, 1e3],
                    [2, 1500],
                    [3, 2250],
                    [4, 3500],
                    [5, 5e3]
                ]
            });
            C.allCardV2 = g;
            const j = () => {
                    o.isAppOn ? window.ReactNativeWebView.postMessage(JSON.stringify({
                        opzkey: "go",
                        value: "wallet"
                    })) : i.push({
                        name: d.isLoggedIn ? "user-center-dashboard-wallet" : "register"
                    })
                },
                T = () => {
                    let e = setInterval((() => {
                        C.counter.hours - 1 == -1 && C.counter.min - 1 == -1 && C.counter.sec - 1 == -1 && (C.counter.days -= 1, C.counter.hours = 23, C.counter.min = 59, C.counter.sec = 59), C.counter.min - 1 == -1 && C.counter.sec - 1 == -1 ? (C.counter.hours -= 1, C.counter.min = 59, C.counter.sec = 59) : C.counter.sec - 1 == -1 ? (C.counter.min -= 1, C.counter.sec = 59) : C.counter.sec -= 1, 0 === C.counter.min && 0 == C.counter.sec && 0 == C.counter.hours && 0 == C.counter.days && clearInterval(e)
                    }), 1e3)
                },
                D = () => {
                    if (1 == d.isLoggedIn) {
                        const e = new ne;
                        e.append("bonus", "zf231at4"), t.setRewardRedeemed(e).then((e => {
                            200 == e.status && 0 == e.data.code ? (f.value = 2, v.value = l("inx.processing-days-wait").replace(":days", "1"), r.success(l("inx.submitted-successfully"))) : r.error(l("inx.request-failed-support"))
                        }))
                    } else r.error(l("inx.please-login"))
                };
            (() => {
                if (1 == d.isLoggedIn) {
                    const e = new ne;
                    e.append("bonus", "zf231at4"), t.getRewardsStatus(e).then((e => {
                        let s = 0;
                        if (200 == e.status && 0 == e.data.code && e.data.data) {
                            s = e.data.data.time + 25056e5 - Number(new Date), 1 == e.data.data.status ? (s > 0 && (C.counter = _(s), T()), f.value = 3) : 2 == e.data.data.status ? f.value = 1 : 3 == e.data.data.status ? (f.value = 2, v.value = l("inx.processing-days-wait").replace(":days", "1")) : 4 == e.data.data.status ? (f.value = 2, v.value = l("inx.welcome-bonus") + ": " + l("inx.succesfully-redeemed")) : (f.value = 2, v.value = l("inx.reward-expired"))
                        } else f.value = 2, v.value = l("inx.reward-expired");
                        s <= 0 && C.allCardV2.forEach((e => {
                            e.expired = !0
                        }));
                        const a = e.data.data.tvalues;
                        if (a && a.includes(","))
                            if (a.includes(";")) a.split(";").forEach((e => {
                                if (e && e.includes(",")) {
                                    C.allCardV2.find((s => s.id == e.split(",")[0])).progress = e.split(",")[1]
                                }
                            }));
                            else {
                                C.allCardV2.find((e => e.id == a.split(",")[0])).progress = a.split(",")[1]
                            }
                    }))
                } else {
                    const s = o.rewardsTime,
                        a = new Date;
                    if (s > a) o.rewardsTime = a, C.counter = {
                        days: 29,
                        hours: 59,
                        min: 59,
                        sec: 58
                    };
                    else {
                        var e = Math.abs(s - a) / 1e3;
                        const l = e / 60 / 60 / 24 >= 1 ? Math.floor(e / 60 / 60 / 24) : 0;
                        if (l < 0) return o.rewardsTime = a, void(C.counter = {
                            days: 29,
                            hours: 59,
                            min: 59,
                            sec: 58
                        });
                        const t = (e -= 60 * l * 60 * 24) / 60 / 60 >= 1 ? Math.floor(e / 60 / 60) : 0,
                            n = (e -= 60 * t * 60) / 60 >= 1 ? Math.floor(e / 60) : 0;
                        e -= 60 * n, C.counter = {
                            days: 29 - l,
                            hours: 59 - t,
                            min: 59 - n,
                            sec: 59 - Math.floor(e)
                        };
                        for (let e in C.counter)
                            if (C.counter[e] < 0) return void(f.value = 4)
                    }
                    T(), f.value = 3
                }
            })();
            const _ = e => (e = Number(e / 1e3), {
                days: Math.floor(e / 86400),
                hours: Math.floor(e % 86400 / 3600),
                min: Math.floor(e % 3600 / 60),
                sec: Math.floor(e % 60)
            });
            q((async () => {
                d.isLoggedIn
            }));
            const S = {
                0: {
                    itemsToShow: 1,
                    snapAlign: "center"
                },
                700: {
                    itemsToShow: 2,
                    snapAlign: "center"
                },
                1024: {
                    itemsToShow: 3,
                    snapAlign: "start"
                }
            };
            return (a, t) => {
                const n = ee,
                    r = ze,
                    d = s;
                return u(), p(F, null, [b(o).isAppOn ? E("", !0) : (u(), V(n, {
                    key: 0
                })), h("div", Re, [h("div", Le, [h("div", He, [h("div", Ze, [h("div", Ye, [h("div", Ge, y(b(l)("inx.reward-center")), 1), h("div", Qe, y(b(l)("inx.complete-taks-earn-rewards")), 1), t[3] || (t[3] = h("div", {
                    class: "bg-spark"
                }, null, -1)), h("div", Je, [1 == f.value ? (u(), p("button", {
                    key: 0,
                    class: "pulse",
                    onClick: D,
                    style: {
                        "margin-bottom": "36px"
                    }
                }, y(b(l)("inx.claim-rewards")), 1)) : 2 == f.value ? (u(), p("div", Xe, y(v.value), 1)) : 3 == f.value ? (u(), p("div", es, [h("ul", ss, [h("li", as, [h("div", ls, y((C.counter.days > 9 ? "" : "0") + C.counter.days), 1), h("div", ts, y(b(l)("inx.days")), 1)]), h("li", ns, [h("div", os, y((C.counter.hours > 9 ? "" : "0") + C.counter.hours), 1), h("div", is, y(b(l)("inx.hours")), 1)]), h("li", rs, [h("div", ds, y((C.counter.min > 9 ? "" : "0") + C.counter.min), 1), h("div", cs, y(b(l)("inx.minutes")), 1)]), h("li", us, [h("div", ps, y((C.counter.sec > 9 ? "" : "0") + C.counter.sec), 1), h("div", ms, y(b(l)("inx.seconds")), 1)])])])) : 4 == f.value ? (u(), p("div", vs, [h("button", {
                    class: "pulse",
                    onClick: t[0] || (t[0] = e => b(i).push({
                        name: "auth",
                        query: {
                            redirect: "/trade"
                        }
                    }))
                }, y(b(l)("auth.log-in")), 1)])) : E("", !0)])])])])]), h("div", bs, [h("div", fs, [t[4] || (t[4] = h("div", {
                    class: "flex"
                }, [h("div", {
                    class: "block-title"
                }), h("div", {
                    class: "title-dark"
                }, "User Task (Demo)")], -1)), w(b(se), {
                    breakpoints: S,
                    class: "bg-drop-lin"
                }, {
                    addons: k((() => [w(b(ae))])),
                    default: k((() => [(u(!0), p(F, null, P(C.allCardV2, (e => (u(), V(b(le), {
                        key: e.id
                    }, {
                        default: k((() => [w(r, {
                            card: e
                        }, null, 8, ["card"])])),
                        _: 2
                    }, 1024)))), 128))])),
                    _: 1
                })]), h("div", gs, [t[56] || (t[56] = h("div", {
                    class: "flex"
                }, [h("div", {
                    class: "block-title"
                }), h("div", {
                    class: "title-dark"
                }, "Deposit Bonus (Demo)")], -1)), h("div", hs, [h("div", xs, [t[8] || (t[8] = h("span", null, null, -1)), t[9] || (t[9] = h("span", null, null, -1)), t[10] || (t[10] = h("span", null, null, -1)), t[11] || (t[11] = h("span", null, null, -1)), h("div", ys, [h("div", ws, [t[5] || (t[5] = h("div", {
                    class: "left-symbol"
                }, "$", -1)), h("div", ks, y(C.allbonus[0][1]), 1), h("div", Vs, y(b(l)("inx.coupon")), 1)]), h("div", Cs, [x(" Deposit no less than " + y(C.allbonus[0][0]) + " BTC ", 1), t[6] || (t[6] = h("br", null, null, -1)), t[7] || (t[7] = h("div", {
                    class: "text-value-calc"
                }, " (Value calculated on the day of claiming) ", -1))]), h("div", js, [h("button", {
                    class: "raise",
                    onClick: j
                }, y(3 == f.value ? b(l)("inx.claim") : b(l)("inx.deposit-now")), 1)])])]), h("div", Ts, [t[15] || (t[15] = h("span", null, null, -1)), t[16] || (t[16] = h("span", null, null, -1)), t[17] || (t[17] = h("span", null, null, -1)), t[18] || (t[18] = h("span", null, null, -1)), h("div", Ds, [h("div", _s, [t[12] || (t[12] = h("div", {
                    class: "left-symbol"
                }, "$", -1)), h("div", Bs, y(C.allbonus[3][1]), 1), h("div", Ss, y(b(l)("inx.coupon")), 1)]), h("div", As, [x(" Deposit no less than " + y(C.allbonus[3][0]) + " BTC ", 1), t[13] || (t[13] = h("br", null, null, -1)), t[14] || (t[14] = h("div", {
                    class: "text-value-calc"
                }, " (Value calculated on the day of claiming) ", -1))]), h("div", Is, [h("button", {
                    class: "raise",
                    onClick: j
                }, y(3 == f.value ? b(l)("inx.claim") : b(l)("inx.deposit-now")), 1)])])]), h("div", Us, [t[22] || (t[22] = h("span", null, null, -1)), t[23] || (t[23] = h("span", null, null, -1)), t[24] || (t[24] = h("span", null, null, -1)), t[25] || (t[25] = h("span", null, null, -1)), h("div", Ks, [h("div", Ns, [t[19] || (t[19] = h("div", {
                    class: "left-symbol"
                }, "$", -1)), h("div", $s, y(C.allbonus[5][1]), 1), h("div", Ms, y(b(l)("inx.coupon")), 1)]), h("div", qs, [x(" Deposit no less than " + y(C.allbonus[5][0]) + " BTC ", 1), t[20] || (t[20] = h("br", null, null, -1)), t[21] || (t[21] = h("div", {
                    class: "text-value-calc"
                }, " (Value calculated on the day of claiming) ", -1))]), h("div", Es, [h("button", {
                    class: "raise",
                    onClick: j
                }, y(3 == f.value ? b(l)("inx.claim") : b(l)("inx.deposit-now")), 1)])])]), h("div", Fs, [t[29] || (t[29] = h("span", null, null, -1)), t[30] || (t[30] = h("span", null, null, -1)), t[31] || (t[31] = h("span", null, null, -1)), t[32] || (t[32] = h("span", null, null, -1)), h("div", Ps, [h("div", Os, [t[26] || (t[26] = h("div", {
                    class: "left-symbol"
                }, "$", -1)), h("div", Ws, y(C.allbonus[7][1]), 1), h("div", zs, y(b(l)("inx.coupon")), 1)]), h("div", Rs, [x(" Deposit no less than " + y(C.allbonus[7][0]) + " BTC ", 1), t[27] || (t[27] = h("br", null, null, -1)), t[28] || (t[28] = h("div", {
                    class: "text-value-calc"
                }, " (Value calculated on the day of claiming) ", -1))]), h("div", Ls, [h("button", {
                    class: "raise",
                    onClick: j
                }, y(3 == f.value ? b(l)("inx.claim") : b(l)("inx.deposit-now")), 1)])])]), h("div", Hs, [t[36] || (t[36] = h("span", null, null, -1)), t[37] || (t[37] = h("span", null, null, -1)), t[38] || (t[38] = h("span", null, null, -1)), t[39] || (t[39] = h("span", null, null, -1)), h("div", Zs, [h("div", Ys, [t[33] || (t[33] = h("div", {
                    class: "left-symbol"
                }, "$", -1)), h("div", Gs, y(C.allbonus[9][1]), 1), h("div", Qs, y(b(l)("inx.coupon")), 1)]), h("div", Js, [x(" Deposit no less than " + y(C.allbonus[9][0]) + " BTC ", 1), t[34] || (t[34] = h("br", null, null, -1)), t[35] || (t[35] = h("div", {
                    class: "text-value-calc"
                }, " (Value calculated on the day of claiming) ", -1))]), h("div", Xs, [h("button", {
                    class: "raise",
                    onClick: j
                }, y(3 == f.value ? b(l)("inx.claim") : b(l)("inx.deposit-now")), 1)])])]), h("div", ea, [t[43] || (t[43] = h("span", null, null, -1)), t[44] || (t[44] = h("span", null, null, -1)), t[45] || (t[45] = h("span", null, null, -1)), t[46] || (t[46] = h("span", null, null, -1)), h("div", sa, [h("div", aa, [t[40] || (t[40] = h("div", {
                    class: "left-symbol"
                }, "$", -1)), h("div", la, y(C.allbonus[11][1]), 1), h("div", ta, y(b(l)("inx.coupon")), 1)]), h("div", na, [x(" Deposit no less than " + y(C.allbonus[11][0]) + " BTC ", 1), t[41] || (t[41] = h("br", null, null, -1)), t[42] || (t[42] = h("div", {
                    class: "text-value-calc"
                }, " (Value calculated on the day of claiming) ", -1))]), h("div", oa, [h("button", {
                    class: "raise",
                    onClick: j
                }, y(3 == f.value ? b(l)("inx.claim") : b(l)("inx.deposit-now")), 1)])])])]), h("div", ia, [h("div", ra, [h("div", da, y(b(l)("inx.min-deposit")), 1), h("div", ca, y(b(l)("inx.bonus")), 1)]), (u(!0), p(F, null, P(C.allbonus, ((e, s) => (u(), p("div", {
                    key: s,
                    class: "row-bonus"
                }, [h("div", ua, [x(" ≥ " + y(e[0]) + " ", 1), t[47] || (t[47] = h("span", {
                    class: "pl-2 text-gray2"
                }, "BTC", -1))]), h("div", pa, [t[48] || (t[48] = h("span", {
                    class: "pr-1 text-gray2"
                }, "$", -1)), x(" " + y(e[1].toLocaleString(void 0, {
                    minimumFractionDigits: 2
                })), 1)])])))), 128))]), h("div", ma, [t[49] || (t[49] = h("div", {
                    class: "block-title"
                }, null, -1)), h("div", va, y(b(l)("inx.faq")), 1)]), h("div", ba, [w(b(ye), {
                    class: "collapse",
                    modelValue: c.value,
                    "onUpdate:modelValue": t[1] || (t[1] = e => c.value = e)
                }, {
                    default: k((() => [w(b(we), {
                        title: "What is the Deposit Bonus?",
                        name: "1"
                    }, {
                        default: k((() => t[50] || (t[50] = [h("div", null, " The Deposit Bonus is a reward program where you can receive USD rewards by depositing a certain amount within a 30-day timeframe. These rewards can be used to cover trading losses and offset trading fees. ", -1)]))),
                        _: 1
                    }), w(b(we), {
                        title: "How can I qualify for the Deposit Bonus?",
                        name: "2"
                    }, {
                        default: k((() => t[51] || (t[51] = [h("div", null, " To qualify for the Deposit Bonus, you need to deposit the required amount of USD into your account within a 30-day timeframe. ", -1)]))),
                        _: 1
                    }), w(b(we), {
                        title: "When will I receive my Deposit Bonus?",
                        name: "3"
                    }, {
                        default: k((() => t[52] || (t[52] = [h("div", null, " The Deposit Bonus will be credited to your account within a certain period after the 30-day timeframe has ended. ", -1)]))),
                        _: 1
                    }), w(b(we), {
                        title: "Can I use the Deposit Bonus for all types of trading?",
                        name: "4"
                    }, {
                        default: k((() => t[53] || (t[53] = [h("div", null, " Yes, the Deposit Bonus can be used to offset losses and fees across all types of trading on OPZ. ", -1)]))),
                        _: 1
                    }), w(b(we), {
                        title: "What happens if I withdraw my deposit before the end of the 30-day timeframe?",
                        name: "5"
                    }, {
                        default: k((() => t[54] || (t[54] = [h("div", null, " If you withdraw your deposit before the end of the 30-day timeframe, you will not qualify for the Deposit Bonus. ", -1)]))),
                        _: 1
                    })])),
                    _: 1
                }, 8, ["modelValue"])]), h("div", fa, [w(b(ye), {
                    class: "collapse",
                    modelValue: m.value,
                    "onUpdate:modelValue": t[2] || (t[2] = e => m.value = e)
                }, {
                    default: k((() => [w(b(we), {
                        title: b(l)("inx.terms-conditions"),
                        name: "1"
                    }, {
                        default: k((() => t[55] || (t[55] = [h("div", null, [h("p", {
                            class: "mb-2"
                        }, " The Deposit Bonus is subject to the following terms and conditions: "), h("ul", null, [h("li", null, [h("p", null, " The Deposit Bonus can only be used to offset trading losses and fees on the OPZ platform. ")]), h("li", null, [h("p", null, " Users must deposit the required amount within a 30-day timeframe to qualify for the Deposit Bonus. ")]), h("li", null, [h("p", null, " If a user withdraws their deposit before the end of the 30-day timeframe, they will not qualify for the Deposit Bonus. ")]), h("li", null, [h("p", null, " OPZ reserves the right to modify, suspend, or terminate the Deposit Bonus program at any time without prior notice. Any changes will be announced on our platform. ")]), h("li", null, [h("p", null, " To qualify for the Deposit Bonus, users must maintain an active account and engage in trading during the 30-day timeframe. ")])]), h("p", {
                            class: "mb-2"
                        }, " By participating in the Deposit Bonus program, users agree to be bound by these terms and conditions. ")], -1)]))),
                        _: 1
                    }, 8, ["title"])])),
                    _: 1
                }, 8, ["modelValue"])])])])]), b(o).isAppOn ? E("", !0) : (u(), V(d, {
                    key: 1,
                    content: b(e),
                    color: "dark",
                    cta: !1
                }, null, 8, ["content"]))], 64)
            }
        }
    }), [
        ["__scopeId", "data-v-492165cc"]
    ]);
export {
    ha as
    default
};