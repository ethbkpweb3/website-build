import {
    f as e,
    _ as a
} from "./index-BPv_7EZ9.js";
import {
    _ as s
} from "./Hero.vue_vue_type_style_index_0_lang-DHspTRKr.js";
import {
    _ as t
} from "./PageTitle-ChfDSLUN.js";
import {
    _ as l
} from "./Button-C_PMcYdl.js";
import {
    _ as o
} from "./VPlaceload-DcvQMSN9.js";
import {
    _ as n
} from "./Navbar2-Cx1AKm6v.js";
import {
    m as r,
    Y as i,
    u as d,
    dm as c,
    G as u,
    dn as v,
    h as p,
    o as m,
    j as g,
    l as f,
    q as h,
    v as x,
    t as y,
    a as b,
    K as w,
    y as k,
    n as j,
    w as P,
    X as V,
    p as _,
    s as S,
    du as I,
    I as z,
    B as T,
    P as M,
    cB as B,
    ck as O
} from "./index-CQfCy4Xm.js";
import {
    u as C
} from "./vue.8fc199ce-DBDcZ0BB.js";
import {
    u as E
} from "./useSeoMeta-DJrBtPw8.js";
import {
    _ as A
} from "./opz-B6gfBROM.js";
import "./index-DZwhim7i.js";
import {
    _ as F
} from "./_plugin-vue_export-helper-BCo6x5W8.js";
import {
    _ as R
} from "./ButtonGR-CCzD27Qk.js";
import {
    r as Z
} from "./calcs-C2mNVRpW.js";
import {
    E as G
} from "./index-5N62XIoj.js";
import {
    E as N,
    a as D
} from "./index-CcBkONjK.js";
import {
    E as U
} from "./index-Ccebcdf2.js";
import {
    E as L
} from "./index-DWyf7GKU.js";
import {
    E as W,
    a as q
} from "./index-Cqgn8wHL.js";
import {
    B as $
} from "./provider-browser-D4UahRA7.js";
import {
    E as H
} from "./index--1JsBO1r.js";
import "./Subtitle-C6oUzL5I.js";
import "./Title-B_xB6icS.js";
import "./AppPop-DXr7YMXx.js";
import "./browser-Cv63Auap.js";
import "./index-DPTDKB4o.js";
import "./index-wV0BwLDn.js";
import "./index-CB5HUA9W.js";
import "./google-play-0W6tGWt8.js";
import "./AvatarSimple-DIs6U3iF.js";
import "./via-placeholder-csI6CdwS.js";
import "./user-qMNVzsWD.js";
import "./sett-Dbwu6PJ1.js";
import "./avatarSettings-C1kj7zSJ.js";
import "./vue3-avataaars-DO56oOZp.js";
import "./index-38aUouWI.js";
import "./index-BaPl-dvV.js";
import "./typescript-CRqm1_SZ.js";
import "./logo-DqlCWKKL.js";
import "./index-D21_sbBM.js";
import "./aria-C-hsWcn7.js";
import "./index-CreMjc0E.js";
import "./index-DYh1qtlV.js";
import "./use-dialog-CC6CVfkB.js";
import "./use-global-config-CYuHb1FB.js";
import "./index-BR6qnryQ.js";
import "./index-CIJievV_.js";
import "./sha256-o0pdH_sn.js";
import "./secp256k1-LeYlzbB0.js";
const X = {
        class: "staking-dash"
    },
    K = {
        class: "staking-dash-body"
    },
    Y = {
        class: "staking-dash-top"
    },
    J = {
        role: "toolbar",
        "aria-orientation": "horizontal",
        dir: "ltr",
        class: "sdash-btn-i sdash-21",
        layout: "row",
        tabindex: "-1",
        "data-orientation": "horizontal",
        style: {
            outline: "none"
        }
    },
    Q = {
        class: "sdash-7562 sdash-75242"
    },
    ee = {
        class: "stdash-62165"
    },
    ae = {
        key: 0,
        class: "sdash-b13s stdash-21314"
    },
    se = {
        key: 1,
        class: "sdash-b13s stdash-21314"
    },
    te = {
        class: "stdash-bottom"
    },
    le = {
        class: "sdash-4252"
    },
    oe = {
        class: "stads-4342 stadsg-4325"
    },
    ne = {
        class: "stdasdh-3242"
    },
    re = {
        key: 0,
        class: "sdash-b13s stdash-21314"
    },
    ie = ["title"],
    de = {
        class: "stdasdh-3242"
    },
    ce = {
        key: 0,
        class: "sdash-b13s stdash-21314"
    },
    ue = {
        key: 1,
        title: "0",
        class: "sdash-b13s stdash-21314"
    },
    ve = F(r({
        __name: "GovernanceDash",
        props: {
            opzBalance: {
                default: 0
            },
            loading: {
                type: Boolean,
                default: !1
            },
            address: {
                default: ""
            }
        },
        setup(e) {
            const a = e;
            i(), d(), c(), u(), v();
            const s = p((() => {
                if (!a.address || a.address.length <= 10) return a.address;
                return `${a.address.slice(0,5)}***${a.address.slice(-5)}`
            }));
            return (e, t) => {
                const l = o;
                return m(), g("section", X, [f("div", K, [f("div", Y, [t[1] || (t[1] = f("h3", {
                    class: "sdash-im"
                }, [f("img", {
                    src: A,
                    class: "sdash-title",
                    alt: "OPZ"
                }), h("OPZ ")], -1)), f("div", J, [f("dl", Q, [f("div", ee, [f("dd", null, [e.loading ? (m(), g("div", ae, [x(l, {
                    height: "17.9px",
                    width: "75px",
                    style: {
                        "background-color": "rgba(255, 255, 255, 0.33)"
                    }
                })])) : (m(), g("output", se, t[0] || (t[0] = [f("span", {
                    class: "text-gray1 mr-2"
                }, y("OPZ"), -1), f("span", {
                    class: "stadsh-312 stads-131"
                }, y("GOVERNANCE"), -1)])))])])])])]), f("div", te, [f("div", le, [f("dl", oe, [f("div", ne, [t[2] || (t[2] = f("dt", null, [f("div", {
                    class: "stdash-img-s21"
                }, [f("h4", null, "Voting Power"), f("div", {
                    class: "stdash-if2"
                }, [f("i", {
                    class: "fas fa-gavel sdash-img"
                })])])], -1)), f("dd", null, [e.loading ? (m(), g("div", re, [x(l, {
                    height: "25.6px",
                    width: "60px",
                    style: {
                        "background-color": "rgba(255, 255, 255, 0.33)"
                    }
                })])) : (m(), g("output", {
                    key: 1,
                    title: a.opzBalance || "0.00",
                    class: "sdash-b13s stdash-21314"
                }, y(a.opzBalance || "0.00") + " OPZ ", 9, ie))])]), f("div", de, [t[3] || (t[3] = f("dt", null, [f("div", {
                    class: "stdash-img-s21"
                }, [f("h4", null, " ID "), f("div", {
                    class: "stdash-if2"
                }, [f("i", {
                    class: "fas fa-wallet sdash-img"
                })])])], -1)), f("dd", null, [e.loading ? (m(), g("div", ce, [x(l, {
                    height: "25.6px",
                    width: "75px",
                    style: {
                        "background-color": "rgba(255, 255, 255, 0.33)"
                    }
                })])) : (m(), g("output", ue, y(s.value), 1))])])])])])])])
            }
        }
    }), [
        ["__scopeId", "data-v-7c522e28"]
    ]),
    pe = {
        class: "flex flex-col mb-3"
    },
    me = {
        class: "text-gray5"
    },
    ge = {
        class: "statistic-card"
    },
    fe = {
        style: {
            display: "inline-flex",
            "align-items": "center"
        }
    },
    he = {
        class: "statistic-footer"
    },
    xe = {
        class: "footer-item"
    },
    ye = {
        key: 0,
        class: "flex"
    },
    be = {
        key: 1,
        class: "flex"
    },
    we = {
        class: "text-gray3"
    },
    ke = {
        class: "statistic-card"
    },
    je = {
        style: {
            display: "inline-flex",
            "align-items": "center"
        }
    },
    Pe = {
        class: "statistic-footer"
    },
    Ve = {
        class: "footer-item"
    },
    _e = {
        key: 0
    },
    Se = {
        class: "flex justify-between mb-3 mx-1"
    },
    Ie = {
        class: "text-gray5"
    },
    ze = {
        key: 0,
        class: "mt-0 mb-3 line-hz"
    },
    Te = {
        key: 1,
        class: "flex justify-between mb-1 mx-1",
        style: {
            "margin-top": "1px"
        }
    },
    Me = {
        class: "text-medium flex"
    },
    Be = {
        key: 2,
        class: "flex justify-between mb-3 mx-1",
        style: {
            "margin-top": "1px"
        }
    },
    Oe = {
        class: "text-medium flex"
    },
    Ce = {
        class: "flex justify-between mb-0 mx-1 items-center",
        style: {
            "margin-top": "1px"
        }
    },
    Ee = {
        class: "text-medium flex"
    },
    Ae = {
        class: "flex justify-between mb-0 mx-1",
        style: {
            "margin-top": "1px"
        }
    },
    Fe = {
        class: "text-medium flex"
    },
    Re = {
        class: "dialog-footer"
    },
    Ze = {
        class: "flex",
        style: {
            display: "flex",
            width: "100%"
        }
    },
    Ge = F(r({
        __name: "GovernanceModal",
        props: {
            modelValue: {
                type: Boolean,
                default: !1
            },
            governanceItem: {
                default: void 0
            },
            opzBalance: {
                default: 0
            },
            address: {
                default: ""
            },
            provider: {
                default: void 0
            }
        },
        emits: ["update:modelValue", "success"],
        setup(e, {
            emit: a
        }) {
            const {
                t: s
            } = i(), {
                Api: t
            } = c();
            v();
            const l = b();
            d(), u();
            const o = a;
            w({
                amount: 0
            });
            const n = e,
                r = p({
                    get: () => n.modelValue,
                    set: e => o("update:modelValue", e)
                }),
                I = k(0),
                z = k(null),
                T = k(!0),
                M = k(0),
                B = k(!1),
                O = k(0),
                C = k(1),
                E = k(0),
                A = w({}),
                F = ["Vote in Favor", "Vote Against"],
                H = p((() => !!T.value || (B.value ? !(M.value !== z.value || M.value && I.value !== n.opzBalance) : !(z.value !== X.value || z.value && I.value !== n.opzBalance)))),
                X = k(null),
                K = e => {
                    if (T.value = !0, e && J(), o("update:modelValue", !0), 1 == n.governanceItem.id || 3 == n.governanceItem.id ? B.value = !0 : 2 == n.governanceItem.id && (B.value = !1), n.governanceItem && n.address) {
                        const e = new FormData;
                        e.append("address", n.address), t.governanceCurrent(e).then((({
                            data: e
                        }) => {
                            0 == e.code && (console.log("isPresale", e), 1 == n.governanceItem.id ? (E.value = 12.5, O.value = 13.5, B.value = !0, C.value = .5, Object.assign(A, {
                                12.5: "12.5",
                                13: "13",
                                13.5: "13.5"
                            }), null != e.data.releaseTge && (I.value = e.data.votingPower, z.value = e.data.releaseTge, M.value = z.value)) : 2 == n.governanceItem.id ? (B.value = !1, null != e.data.releaseMainnet && (I.value = e.data.votingPower, e.data.releaseMainnet ? z.value = "Vote in Favor" : z.value = "Vote Against", X.value = z.value)) : 3 == n.governanceItem.id ? (O.value = 36, E.value = 18, C.value = 1, B.value = !0, Object.assign(A, {
                                18: "18",
                                24: "24",
                                30: "30",
                                36: "36"
                            }), null != e.data.releaseStage && (z.value = e.data.releaseStage, I.value = e.data.votingPower, M.value = z.value)) : J())
                        })), T.value = !1
                    }
                },
                Y = () => {
                    o("update:modelValue", !1), T.value = !1
                },
                J = () => {
                    I.value = 0, z.value = null, M.value = 0, E.value = 0, O.value = 0, Object.assign(A, {}), B.value = !1, C.value = 1, X.value = null
                },
                Q = async () => {
                    const e = new $(n.provider, "any"),
                        a = await e.getSigner(),
                        r = await a.signMessage("OPZ Governance");
                    if (null == r || "" === r) return;
                    const i = new FormData;
                    if (i.append("address", n.address), i.append("signature", r), 1 === n.governanceItem.id && null !== M.value) i.append("releaseTge", M.value.toString());
                    else if (2 === n.governanceItem.id && null !== z.value) {
                        const e = "Vote in Favor" === z.value ? "true" : "false";
                        i.append("releaseMainnet", e)
                    } else 3 === n.governanceItem.id && null !== M.value && i.append("releaseStage", M.value.toString());
                    T.value = !0, t.governanceVote(i).then((e => {
                        const a = e.data;
                        0 === a.code ? (l.success(s("inx.submitted-successfully")), K(!1), o("success")) : (l.error(a.message), T.value = !1)
                    }))
                };
            return (e, a) => {
                const t = R;
                return m(), j(V(G), {
                    class: "dialogGovernance",
                    modelValue: r.value,
                    "onUpdate:modelValue": a[2] || (a[2] = e => r.value = e),
                    "append-to-body": "",
                    "destroy-on-close": "",
                    onClose: Y,
                    onOpen: a[3] || (a[3] = e => K(!0))
                }, {
                    header: P((() => [a[5] || (a[5] = f("span", {
                        class: "imgParent"
                    }, [f("img", {
                        width: "35",
                        height: "35",
                        src: "/images/icons/coin/opz.svg"
                    })], -1)), f("div", pe, [a[4] || (a[4] = f("span", {
                        class: "text-gray3",
                        style: {
                            "font-size": "12px"
                        }
                    }, "Proposal:", -1)), f("span", me, y(n.governanceItem.title), 1)])])),
                    footer: P((() => [f("span", Re, [f("div", Ze, [x(t, {
                        size: "small",
                        style: {
                            "flex-grow": "1",
                            "margin-right": "10px"
                        },
                        onClick: Y
                    }, {
                        default: P((() => [h(y(V(s)("sett.close")), 1)])),
                        _: 1
                    }), x(t, {
                        size: "small",
                        style: {
                            "flex-grow": "1"
                        },
                        onClick: Q,
                        disabled: H.value
                    }, {
                        default: P((() => [h(y(V(s)("sett.save")), 1)])),
                        _: 1
                    }, 8, ["disabled"])])])])),
                    default: P((() => {
                        var e;
                        return [f("div", null, [x(V(D), {
                            gutter: 16,
                            class: "mt-2 mb-3"
                        }, {
                            default: P((() => [x(V(N), {
                                span: 12
                            }, {
                                default: P((() => [f("div", ge, [x(V(U), {
                                    value: n.governanceItem.power
                                }, {
                                    suffix: P((() => a[6] || (a[6] = [f("div", {
                                        style: {
                                            position: "relative",
                                            top: "-1px"
                                        }
                                    }, [f("span", {
                                        style: {
                                            "font-size": "16px",
                                            "font-family": "DINPRO-Bold",
                                            color: "white"
                                        }
                                    }, "OPZ")], -1)]))),
                                    title: P((() => [f("div", fe, [a[8] || (a[8] = h(" Total Votes ")), x(V(L), {
                                        effect: "customized",
                                        content: "This is the total number of votes counted for this proposal.",
                                        placement: "top"
                                    }, {
                                        default: P((() => a[7] || (a[7] = [f("i", {
                                            class: "fas fa-info-circle text-gray1 ml-1",
                                            style: {
                                                "font-size": "12px"
                                            }
                                        }, null, -1)]))),
                                        _: 1
                                    })])])),
                                    _: 1
                                }, 8, ["value"]), f("div", he, [f("div", xe, [B.value ? (m(), g("div", be, [f("span", we, y(n.governanceItem.startStr) + ":", 1), f("span", null, y(n.governanceItem.avgScore + "" + (n.governanceItem.endStr ? ? "")), 1)])) : (m(), g("div", ye, [a[9] || (a[9] = f("p", {
                                    class: "text-gray2 mr-1"
                                }, y("Result:"), -1)), f("p", {
                                    class: _(["text-medium flex", n.governanceItem.favor >= n.governanceItem.against ? "text-green-500" : "text-red-500"])
                                }, y(n.governanceItem.favor >= n.governanceItem.against ? "Vote in Favor" : "Vote Against"), 3)]))])])])])),
                                _: 1
                            }), x(V(N), {
                                span: 12
                            }, {
                                default: P((() => {
                                    var e;
                                    return [f("div", ke, [x(V(U), {
                                        value: I.value
                                    }, {
                                        suffix: P((() => a[10] || (a[10] = [f("div", {
                                            style: {
                                                position: "relative",
                                                top: "-1px"
                                            }
                                        }, [f("span", {
                                            style: {
                                                "font-size": "16px",
                                                "font-family": "DINPRO-Bold",
                                                color: "white"
                                            }
                                        }, "OPZ")], -1)]))),
                                        title: P((() => [f("div", je, [a[12] || (a[12] = h(" My Votes ")), x(V(L), {
                                            effect: "customized",
                                            content: "This shows your current voting status for this proposal.",
                                            placement: "top"
                                        }, {
                                            default: P((() => a[11] || (a[11] = [f("i", {
                                                class: "fas fa-info-circle text-gray1 ml-1",
                                                style: {
                                                    "font-size": "12px"
                                                }
                                            }, null, -1)]))),
                                            _: 1
                                        })])])),
                                        _: 1
                                    }, 8, ["value"]), f("div", Pe, [f("div", Ve, [a[13] || (a[13] = f("span", {
                                        class: "text-gray2 mr-1"
                                    }, "My Vote: ", -1)), B.value ? (m(), g("p", _e, y(z.value ? String(z.value) + ((null == (e = null == n ? void 0 : n.governanceItem) ? void 0 : e.endStr) ? ? "") : V(s)("sett.not-set")), 1)) : (m(), g("p", {
                                        key: 1,
                                        class: _(["text-medium flex", "Vote in Favor" == X.value ? "text-green-500" : "Vote Against" == X.value ? "text-red-500" : ""])
                                    }, y(X.value ? X.value : V(s)("sett.not-set")), 3))])])])]
                                })),
                                _: 1
                            })])),
                            _: 1
                        }), f("div", Se, [f("p", Ie, y(n.governanceItem.description), 1)]), B.value ? S("", !0) : (m(), g("hr", ze)), B.value ? S("", !0) : (m(), g("div", Te, [a[15] || (a[15] = f("p", {
                            class: "text-gray2 text-green-500"
                        }, y("Total Vote in Favor"), -1)), f("span", Me, [h(y(V(Z)(n.governanceItem.favor, 0)) + " ", 1), a[14] || (a[14] = f("p", {
                            class: "ml-1 text-gray3"
                        }, y("OPZ"), -1))])])), B.value ? S("", !0) : (m(), g("div", Be, [a[17] || (a[17] = f("p", {
                            class: "text-gray2 text-red-500"
                        }, y("Total Vote Against"), -1)), f("span", Oe, [h(y(V(Z)(n.governanceItem.against, 0)) + " ", 1), a[16] || (a[16] = f("p", {
                            class: "ml-1 text-gray3"
                        }, y("OPZ"), -1))])])), a[21] || (a[21] = f("hr", {
                            class: "mt-0 mb-3 line-hz"
                        }, null, -1)), f("div", Ce, [a[18] || (a[18] = f("p", {
                            class: "text-gray2"
                        }, y("My Vote"), -1)), f("p", Ee, [h(y(n.governanceItem.startStr ? n.governanceItem.startStr + ":" : "") + " ", 1), B.value ? (m(), g("p", {
                            key: 0,
                            class: _(["ml-1 text-gray3", "Vote in Favor" === z.value && "text-green-500"])
                        }, y(z.value ? String(z.value) + ((null == (e = null == n ? void 0 : n.governanceItem) ? void 0 : e.endStr) ? ? "") : V(s)("sett.not-set")), 3)) : (m(), j(V(W), {
                            key: 1,
                            modelValue: z.value,
                            "onUpdate:modelValue": a[0] || (a[0] = e => z.value = e),
                            options: F
                        }, null, 8, ["modelValue"]))])]), f("div", {
                            class: _(["px-3", B.value && "mb-5 pb-2"])
                        }, [B.value ? (m(), j(V(q), {
                            key: 0,
                            min: E.value,
                            "show-stops": "",
                            step: C.value,
                            max: O.value,
                            "tooltip-class": "sliderAmount",
                            modelValue: M.value,
                            "onUpdate:modelValue": a[1] || (a[1] = e => M.value = e),
                            marks: A,
                            "show-input": "",
                            "show-input-controls": ""
                        }, null, 8, ["min", "step", "max", "modelValue", "marks"])) : S("", !0)], 2), a[22] || (a[22] = f("hr", {
                            class: "mt-3 mb-3 line-hz"
                        }, null, -1)), f("div", Ae, [a[20] || (a[20] = f("p", {
                            class: "text-gray2"
                        }, y("My Voting Power"), -1)), f("p", Fe, [h(y(V(Z)(n.opzBalance, 0)) + " ", 1), a[19] || (a[19] = f("p", {
                            class: "ml-1 text-gray3"
                        }, y("OPZ"), -1))])])])]
                    })),
                    _: 1
                }, 8, ["modelValue"])
            }
        }
    }), [
        ["__scopeId", "data-v-499b5601"]
    ]),
    Ne = {
        class: "columns is-vcentered msa-21"
    },
    De = {
        class: "column is-relative"
    },
    Ue = {
        key: 0,
        class: "hero-caption mx-auto"
    },
    Le = {
        class: "flex items-center justify-around p-1 mt-12 mx-auto al-hero flex-col"
    },
    We = {
        style: {
            width: "100%"
        }
    },
    qe = {
        key: 0,
        class: "flex justify-around px-3 mx-3 al-hero flex-col"
    },
    $e = {
        class: "flex mt-0 t-dapp"
    },
    He = {
        class: "governance-container"
    },
    Xe = {
        key: 1,
        class: "flex justify-around px-3 mx-3 al-hero flex-col"
    },
    Ke = {
        key: 1
    },
    Ye = {
        class: "governance-container"
    },
    Je = ["onClick"],
    Qe = {
        class: "title-container"
    },
    ea = {
        class: "icon-wrapper sdsa mt-1"
    },
    aa = {
        width: "26",
        height: "26",
        viewBox: "0 0 26 26",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    },
    sa = ["stroke"],
    ta = ["fill"],
    la = {
        class: "governance-status"
    },
    oa = {
        key: 0,
        class: "status-text"
    },
    na = {
        class: "icon-wrapper fasa"
    },
    ra = {
        key: 1,
        class: "progress-bar-container"
    },
    ia = {
        key: 2,
        class: "data-container"
    },
    da = {
        class: "text-gray3 mr-1"
    },
    ca = {
        key: 1,
        class: "hero-caption mx-auto max-w-6"
    },
    ua = F(r({
        __name: "governance",
        setup(r) {
            const {
                t: d
            } = i();
            b();
            const u = k([]);
            E("Investors Dashbaord", "OPZ"), C({
                meta: [{
                    name: "robots",
                    content: "noindex"
                }]
            }), v();
            const p = k(!0),
                {
                    wallets: A,
                    connectWallet: F,
                    connectedWallet: R,
                    setChain: Z,
                    connectedChain: G,
                    disconnectConnectedWallet: N,
                    alreadyConnectedWallets: D
                } = I(),
                U = e => "Executed" === e ? "rgb(146,203,90)" : "Failed" === e ? "rgb(231,95,97)" : "Cancelled" === e ? "gray" : "#57FFC3",
                L = k(!1),
                W = async () => {
                    R.value || await F(), R.value && K()
                },
                {
                    Api: q
                } = c(),
                $ = k(!1),
                X = k(0),
                K = async () => {
                    var e, a;
                    const s = null == (a = null == (e = R.value) ? void 0 : e.accounts[0]) ? void 0 : a.address;
                    if (s) {
                        const e = new FormData;
                        e.append("address", s), q.isPresaleAddress(e).then((({
                            data: e
                        }) => {
                            0 == e.code ? ($.value = !0, X.value = e.data) : $.value = !1, p.value = !1
                        }))
                    }
                },
                Y = k(!1),
                J = k(!1);
            z((async () => {
                var e, a;
                !R.value && D.value && D.value[0] ? (Y.value = !0, await F({
                    autoSelect: {
                        label: D.value[0],
                        disableModals: !0
                    }
                }), Y.value = !1) : R.value && R.value.accounts[0] || (J.value = !0);
                (null == (a = null == (e = R.value) ? void 0 : e.accounts[0]) ? void 0 : a.address) && K(), J.value = !0
            }));
            const Q = w({
                    averageListingPrice: "0",
                    averageListingPricePower: 0,
                    averageReleaseTge: "0",
                    averageReleaseTgePower: 0,
                    averageReleaseStage: 0,
                    averageReleaseStagePower: 0,
                    releaseMainnet: !1,
                    releaseMainnetPower: 0,
                    releaseMainnetProgress: 0,
                    releaseMainnetFavor: 0,
                    releaseMainnetAgainst: 0
                }),
                ee = k(!0),
                ae = () => {
                    q.governanceSummary().then((({
                        data: e
                    }) => {
                        500 == e.code ? console.error("Error fetching governance summary") : 0 == e.code && (Object.assign(Q, e.data), te()), ee.value = !1
                    }))
                };
            z((() => {
                ae()
            }));
            const se = k({}),
                te = () => {
                    const e = (a = Number(Q.averageReleaseTge), Math.round(2 * a) / 2);
                    var a;
                    const s = Q.averageReleaseStage,
                        t = Math.floor(Number(Q.averageReleaseStagePower)),
                        l = Math.floor(Number(Q.averageReleaseTgePower)),
                        o = Math.floor(Number(Q.releaseMainnetPower));
                    u.value = [{
                        id: 1,
                        title: "Vote on Token Release Percentage at Presale TGE (12.5% - 13.5%)",
                        description: "This proposal allows users to vote on how much of the token will be released at the Token Generation Event (TGE) during the presale. Users can choose between 12.5% to 13.5% for the token release. Note: A lower token release percentage may result in lower selling pressure, helping to maintain price stability.",
                        status: "Executed",
                        avgScore: e,
                        isProgress: !1,
                        endStr: "%",
                        startStr: "TGE Release",
                        power: l
                    }, {
                        id: 2,
                        title: "Vote to Launch Token with Mainnet if not already Launched",
                        description: "This proposal involves launching the token regardless of the current presale stage. Normally, OPZ tokens are launched at stage 36, but if the community agrees, the token can launch once our development team completes the mainnet, even before reaching the final presale stage. However, if the agreed launch stage is reached earlier, the token should be launched without waiting for the mainnet.",
                        status: Q.releaseMainnetProgress >= 50 ? "Executed" : "Failed",
                        progress: Q.releaseMainnetProgress,
                        favor: Q.releaseMainnetFavor,
                        against: Q.releaseMainnetAgainst,
                        isProgress: !0,
                        power: o
                    }, {
                        id: 3,
                        title: "Vote on Token Launch Stage (Stage 18 to 36)",
                        description: "This proposal allows the community to decide at which stage the token should launch. While stage 36 is the normal target, users can vote to launch between stages 18 and 36. Stage 18 ensures a successful launch, but a later stage will give us a more mature product and potentially a better-prepared launch, increasing the chances of a stronger, more successful release.",
                        status: "Executed",
                        avgScore: s,
                        isProgress: !1,
                        startStr: "Stage",
                        power: t
                    }], se.value && (se.value = u.value.find((e => e.id === se.value.id)))
                },
                le = () => {
                    ae()
                },
                oe = k(""),
                ne = k(!1);
            return T(R, (e => {
                e && (oe.value || (oe.value = e.accounts[0].address), e && e.accounts && e.accounts[0] && e.accounts[0].address && (ne.value && e.accounts[0].address !== oe.value && (K(), oe.value = e.accounts[0].address), ne.value = !0))
            }), {
                deep: !0
            }), (r, i) => {
                var c, v, b;
                const w = n,
                    k = o,
                    I = l,
                    z = t,
                    T = s,
                    C = a;
                return m(), g(M, null, [x(w), f("div", null, [x(T, {
                    alignment: "center",
                    size: "fullheight"
                }, {
                    body: P((() => [f("div", Ne, [f("div", De, [V(R) ? (m(), g("div", Ue, [f("div", Le, [f("div", We, [x(ve, {
                        opzBalance: X.value,
                        "onUpdate:opzBalance": i[0] || (i[0] = e => X.value = e),
                        address: V(R).accounts[0].address,
                        loading: p.value
                    }, null, 8, ["opzBalance", "address", "loading"])])]), p.value || ee.value ? (m(), g("div", qe, [f("div", $e, [i[2] || (i[2] = f("div", {
                        class: "block-title"
                    }, null, -1)), x(k, {
                        class: "max-w-6 ml-3 title-dark",
                        width: "84px",
                        height: "22px",
                        style: {
                            "border-radius": "3px"
                        }
                    })]), f("div", null, [f("div", He, [(m(), g(M, null, B(3, (e => x(k, {
                        key: e,
                        class: "max-w-6 governance-header",
                        width: "84px",
                        height: "22px",
                        style: {
                            "border-radius": "3px"
                        }
                    }))), 64))])])])) : S("", !0), ee.value || p.value ? S("", !0) : (m(), g("div", Xe, [i[4] || (i[4] = f("div", {
                        class: "flex mt-0 t-dapp"
                    }, [f("div", {
                        class: "block-title"
                    }), f("div", {
                        class: "title-dark"
                    }, "Proposals")], -1)), $.value || p.value || ee.value ? (m(), g("div", Ke, [f("div", Ye, [(m(!0), g(M, null, B(u.value, (e => (m(), g("div", {
                        class: "governance-header",
                        key: e.id,
                        onClick: a => {
                            return s = e, se.value = s, void(L.value = !0);
                            var s
                        }
                    }, [f("div", Qe, [f("div", ea, [(m(), g("svg", aa, [f("circle", {
                        cx: "12.5",
                        cy: "12.5",
                        r: "11",
                        stroke: U(e.status)
                    }, null, 8, sa), f("circle", {
                        cx: "12.5",
                        cy: "12.5",
                        r: "7",
                        fill: U(e.status)
                    }, null, 8, ta)]))]), h(" " + y(e.title), 1)]), f("div", la, [e.isProgress ? (m(), g("div", oa, [f("div", na, [f("i", {
                        class: _(["fas", "Failed" === e.status ? "fa-close" : "Cancelled" === e.status ? "" : "fa-check"]),
                        style: O({
                            color: U(e.status)
                        })
                    }, null, 6)]), h(" " + y(e.status), 1)])) : S("", !0), e.isProgress ? (m(), g("div", ra, [f("div", {
                        class: "progress-bar-filled",
                        style: O({
                            width: e.progress + "%",
                            backgroundColor: U(e.status)
                        })
                    }, null, 4), i[3] || (i[3] = f("div", {
                        class: "progress-bar-empty"
                    }, null, -1))])) : (m(), g("div", ia, [f("span", da, y(e.startStr) + ":", 1), f("span", null, y(e.avgScore + " " + (e.endStr ? ? "")), 1)]))])], 8, Je)))), 128))])])) : (m(), j(V(H), {
                        key: 0,
                        class: "max-w-12 mt-3",
                        center: "",
                        title: "Presale Participation Required",
                        description: "The address (" + V(R).accounts[0].address + ") is not eligible for governance voting. Please join our presale to participate in governance decisions.",
                        type: "info",
                        closable: !0,
                        onClose: V(N),
                        effect: "dark"
                    }, null, 8, ["description", "onClose"]))]))])) : (m(), g("div", ca, [f("div", {
                        class: "flex items-center justify-around p-3 mt-12 mx-auto text-center al-hero"
                    }, [f("div", {
                        class: "flex"
                    }, [f("div", {
                        class: "m-3 flex-1"
                    }, [f("img", {
                        onClick: W,
                        src: "/images/svg/atomic-energy.svg",
                        class: "mx-auto cursor-pointer",
                        style: {
                            width: "100px",
                            height: "100px"
                        }
                    })])])]), x(z, {
                        class: "inv-page",
                        title: "This is the official OPZ Token Governance Page",
                        subtitle: "OPZ Governance",
                        text: "To participate in governance decisions, please connect your wallet.",
                        headsmall: ""
                    }, {
                        content: P((() => [x(I, {
                            color: "primary",
                            class: "mt-4",
                            elevated: "",
                            bold: "",
                            onClick: W
                        }, {
                            default: P((() => [h(y(V(d)("pga.connect-wallet")), 1)])),
                            _: 1
                        })])),
                        _: 1
                    })]))])])])),
                    footer: P((() => i[5] || (i[5] = []))),
                    _: 1
                }), x(C, {
                    content: V(e),
                    color: "dark",
                    cta: !1
                }, null, 8, ["content"]), x(Ge, {
                    modelValue: L.value,
                    "onUpdate:modelValue": i[1] || (i[1] = e => L.value = e),
                    governanceItem: se.value,
                    address: null == (v = null == (c = V(R)) ? void 0 : c.accounts[0]) ? void 0 : v.address,
                    opzBalance: X.value,
                    provider: null == (b = V(R)) ? void 0 : b.provider,
                    onSuccess: le
                }, null, 8, ["modelValue", "governanceItem", "address", "opzBalance", "provider"])])], 64)
            }
        }
    }), [
        ["__scopeId", "data-v-42bddda8"]
    ]);
export {
    ua as
    default
};