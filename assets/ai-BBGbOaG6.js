import {
    _ as e
} from "./VPlaceload-DcvQMSN9.js";
import {
    dm as t,
    m as a,
    K as l,
    Y as s,
    y as i,
    B as r,
    o as n,
    j as o,
    v as d,
    w as c,
    ck as u,
    s as m,
    P as p,
    cB as v,
    n as g,
    X as x,
    l as y,
    t as h,
    p as f,
    u as b,
    h as w,
    dn as A,
    a as S,
    G as k,
    dp as C,
    q as _,
    I,
    dh as P,
    dj as j,
    k as E,
    N as L,
    cD as V,
    dg as T,
    dD as B,
    ey as O
} from "./index-CQfCy4Xm.js";
import {
    I as D,
    H as W,
    y as z
} from "./index-DZwhim7i.js";
import {
    _ as U,
    g as N,
    t as F,
    c as R,
    s as Z,
    f as K
} from "./tiny-slider-CC0nyWcN.js";
import {
    a as q,
    E as H
} from "./index-38aUouWI.js";
import {
    _ as M
} from "./ButtonGR-CCzD27Qk.js";
import {
    C as $,
    S as G
} from "./carousel.es-BlHzsVLl.js";
import {
    F as X
} from "./browser-Cv63Auap.js";
import {
    e as Y
} from "./encrypt-CxsJCXOk.js";
import {
    E as J
} from "./index-CB5HUA9W.js";
import {
    E as Q,
    a as ee
} from "./index-DI0c3Das.js";
import {
    E as te
} from "./index-BaPl-dvV.js";
import {
    E as ae
} from "./index-DhHA3mFI.js";
import {
    E as le
} from "./index-5N62XIoj.js";
import {
    _ as se
} from "./_plugin-vue_export-helper-BCo6x5W8.js";
import {
    E as ie
} from "./index-CsseI5JE.js";
import {
    a as re,
    E as ne,
    v as oe
} from "./directive-CUB6-Wra.js";
import {
    V as de
} from "./vue3-lottie.es-CiYK4lOh.js";
import {
    _ as ce
} from "./lodash-Bm6t9hsB.js";
import {
    l as ue
} from "./loadingSvg-B2DNNGSL.js";
import {
    D as me
} from "./DownloadApp-CvKNuiGj.js";
import {
    E as pe
} from "./index-DxHJyswS.js";
import {
    E as ve
} from "./index-CteOOV_f.js";
import {
    E as ge
} from "./index-wV0BwLDn.js";
import {
    E as xe
} from "./index-Q5e3bkYB.js";
import {
    E as ye,
    a as he
} from "./index-D21_sbBM.js";
import {
    a as fe,
    E as be,
    b as we
} from "./index-BUqPiGKl.js";
import {
    u as Ae
} from "./viewWrapper-yhXGfwRy.js";
import "./index-DWyf7GKU.js";
import "./_commonjs-dynamic-modules-BHR_E30J.js";
import "./___vite-browser-external_commonjs-proxy-CX5ghsV-.js";
import "./_baseClone-CNNEnxsr.js";
import "./_initCloneObject-DqrhPNyg.js";
import "./typescript-CRqm1_SZ.js";
import "./use-global-config-CYuHb1FB.js";
import "./index-CreMjc0E.js";
import "./index-DYh1qtlV.js";
import "./use-dialog-CC6CVfkB.js";
import "./index-BR6qnryQ.js";
import "./index-Czea63rc.js";
import "./google-play-0W6tGWt8.js";
import "./aria-C-hsWcn7.js";
import "./isPlainObject-BkooXA2Q.js";
const {
    Api: Se
} = t(), ke = {
    class: "flex tel-input"
}, Ce = ["src"], _e = {
    class: "flex items-center"
}, Ie = ["src"], Pe = {
    style: {
        float: "left"
    }
}, je = a({
    __name: "ExchangeChooseInput",
    props: {
        default: {
            default: void 0
        },
        modelValue: {
            default: void 0
        }
    },
    emits: ["update:modelValue"],
    setup(e, {
        emit: t
    }) {
        const a = t,
            b = l({
                allCards: [],
                filteredOptions: []
            }),
            {
                t: w
            } = s();
        b.allCards.push({
            name: "Binance",
            price: "25",
            img: "/images/icons/exchanges/binance.png"
        }), b.allCards.push({
            name: "Huobi",
            price: "25",
            img: "/images/icons/exchanges/huobi.png"
        }), b.allCards.push({
            name: "OKX",
            price: "50",
            img: "/images/icons/exchanges/okx.png"
        }), b.filteredOptions = b.allCards;
        const A = i([]);
        r(b.allCards, (e => {
            b.filteredOptions = [...e]
        }));
        const S = e => {
                b.filteredOptions = b.allCards, a("update:modelValue", "")
            },
            k = e => {
                a("update:modelValue", e)
            },
            C = e => {
                b.filteredOptions = b.allCards.filter((t => t.name.toLowerCase().includes(e.toLowerCase())))
            };
        return (e, t) => (n(), o("div", ke, [d(x(H), {
            modelValue: A.value,
            "onUpdate:modelValue": t[0] || (t[0] = e => A.value = e),
            filterable: "",
            clearable: "",
            class: f(A.value && "greenBorderSelect"),
            "default-first-option": "",
            "filter-method": C,
            onClear: S,
            onChange: k,
            placeholder: x(w)("wall.please-select"),
            style: {
                width: "100%"
            }
        }, {
            prefix: c((() => {
                var e, t;
                return [A.value ? (n(), o("img", {
                    key: 0,
                    src: null == (e = b.allCards.find((e => e.name === A.value))) ? void 0 : e.img,
                    style: u(!(null == (t = b.allCards.find((e => e.name === A.value))) ? void 0 : t.img) && "display: none"),
                    width: "20",
                    class: "ml-1 mr-2"
                }, null, 12, Ce)) : m("", !0)]
            })),
            default: c((() => [(n(!0), o(p, null, v(b.filteredOptions, (e => (n(), g(x(q), {
                key: e.name,
                label: e.name,
                class: "vti__dropdown-item",
                value: e.name
            }, {
                default: c((() => [y("div", _e, [y("img", {
                    src: e.img,
                    width: "20",
                    class: "mr-2"
                }, null, 8, Ie), y("span", Pe, h(e.name), 1)])])),
                _: 2
            }, 1032, ["label", "value"])))), 128))])),
            _: 1
        }, 8, ["modelValue", "class", "placeholder"])]))
    }
}), Ee = {
    key: 0
}, Le = {
    class: "flex items-center"
}, Ve = {
    style: {
        float: "left"
    }
}, Te = {
    key: 1
}, Be = {
    role: "row",
    class: "order-buy my-3"
}, Oe = {
    role: "cell",
    class: "order-buy-cell justify-start"
}, De = {
    class: "img-start"
}, We = {
    class: "img-data"
}, ze = ["src", "alt"], Ue = ["src"], Ne = ["src"], Fe = {
    role: "cell",
    class: "order-buy-cell justify-center text-mid"
}, Re = {
    class: "pl-3"
}, Ze = {
    role: "row",
    class: "order-buy my-3"
}, Ke = {
    role: "cell",
    class: "order-buy-cell justify-center text-mid"
}, qe = {
    class: "pl-3"
}, He = a({
    __name: "AddStreamExchange",
    props: {
        btn: {
            type: Boolean,
            default: !1
        },
        modelValue: {
            type: Boolean,
            default: !0
        }
    },
    emits: ["update:modelValue", "addSuccess", "close"],
    setup(a, {
        emit: r
    }) {
        i(!1);
        const u = b(),
            {
                t: I
            } = s(),
            {
                Api: P
            } = t(),
            j = i(),
            E = r,
            L = a,
            V = w({
                get: () => L.modelValue,
                set: e => E("update:modelValue", e)
            }),
            T = l({
                allCards: [],
                allTypes: ["SPOT", "FUTURES"]
            });
        T.allCards.push({
            name: "Binance",
            price: "25",
            img: "/images/icons/exchanges/binance.png",
            img2: "/images/icons/exchanges/binance.png"
        }), T.allCards.push({
            name: "Bybit",
            price: "50",
            img: "/images/icons/exchanges/bybit.png",
            img2: "/images/icons/exchanges/bybit.png"
        }), T.allCards.push({
            name: "OKX",
            price: "50",
            img: "/images/icons/exchanges/okx.png",
            img2: "/images/icons/exchanges/okx.png"
        }), T.allCards.push({
            name: "Huobi",
            price: "50",
            img: "/images/icons/exchanges/huobi.png",
            img2: "/images/icons/exchanges/huobi.png"
        });
        const B = l({
                name: "",
                apikey: "",
                apisecretkey: "",
                passwordphrase: ""
            }),
            O = i();
        i(), i();
        const D = i("SPOT");
        A();
        const W = S(),
            z = i(""),
            U = i(!1),
            N = i(""),
            F = () => {
                z.value = "", N.value = "", E("update:modelValue", !1)
            },
            R = k();
        C();
        const Z = () => {
            if (u.isLoggedIn) {
                E("update:modelValue", !0);
                const e = `${window.location.pathname}`;
                window.history.replaceState({}, "", e)
            } else W.error(I("inx.please-login")), E("update:modelValue", !1), R.push({
                name: "auth",
                query: {
                    redirect: "/mpc"
                }
            })
        };
        return (t, a) => {
            const l = M,
                s = je,
                i = e;
            return n(), o(p, null, [L.btn ? (n(), g(l, {
                key: 0,
                class: "btn-buy-card",
                onClick: a[0] || (a[0] = e => Z())
            }, {
                default: c((() => a[11] || (a[11] = [_("Order")]))),
                _: 1
            })) : m("", !0), d(x(le), {
                modelValue: V.value,
                "onUpdate:modelValue": a[9] || (a[9] = e => V.value = e),
                "append-to-body": "",
                class: "dialogw cdetail buy-card-pop heads2",
                "destroy-on-close": "",
                onClose: F,
                onOpen: a[10] || (a[10] = e => Z())
            }, {
                header: c((() => a[12] || (a[12] = [y("div", {
                    class: "flex text-gray4 head-title items-center mb-1"
                }, [y("i", {
                    class: "fas fa-cicle"
                }), _(" " + h("Connect Exchange"))], -1)]))),
                default: c((() => [y("div", null, [a[19] || (a[19] = y("p", {
                    class: "title-input"
                }, "Select Exchange", -1)), d(s, {
                    modelValue: N.value,
                    "onUpdate:modelValue": a[1] || (a[1] = e => N.value = e)
                }, null, 8, ["modelValue"]), "Binance" == N.value ? (n(), o("div", Ee, [a[13] || (a[13] = y("p", {
                    class: "title-input mt-2"
                }, "Type", -1)), d(x(H), {
                    modelValue: D.value,
                    "onUpdate:modelValue": a[2] || (a[2] = e => D.value = e),
                    class: f(D.value && "greenBorderSelect"),
                    "default-first-option": "",
                    placeholder: x(I)("wall.please-select"),
                    style: {
                        width: "100%"
                    }
                }, {
                    default: c((() => [(n(!0), o(p, null, v(T.allTypes, (e => (n(), g(x(q), {
                        key: e,
                        label: e,
                        class: "vti__dropdown-item",
                        value: e
                    }, {
                        default: c((() => [y("div", Le, [y("span", Ve, h(e), 1)])])),
                        _: 2
                    }, 1032, ["label", "value"])))), 128))])),
                    _: 1
                }, 8, ["modelValue", "class", "placeholder"])])) : m("", !0), N.value ? (n(), o("div", Te, [a[16] || (a[16] = y("hr", {
                    class: "mt-4 mb-0 line-hz"
                }, null, -1)), y("div", Be, [y("div", Oe, [y("div", De, [y("div", We, [d(x(J), {
                    placement: "bottom",
                    width: 300,
                    trigger: "click"
                }, {
                    reference: c((() => {
                        var e;
                        return [y("img", {
                            src: null == (e = T.allCards.find((e => e.name == N.value))) ? void 0 : e.img,
                            alt: N.value,
                            class: "img-data"
                        }, null, 8, ze)]
                    })),
                    default: c((() => [d(x($), {
                        "items-to-show": 1,
                        autoplay: 2e3,
                        wrapAround: "",
                        pauseAutoplayOnHover: ""
                    }, {
                        default: c((() => [(n(), g(x(G), {
                            key: 1
                        }, {
                            default: c((() => {
                                var e;
                                return [y("img", {
                                    src: null == (e = T.allCards.find((e => e.name == N.value))) ? void 0 : e.img,
                                    style: {
                                        "border-radius": "9px"
                                    },
                                    alt: ""
                                }, null, 8, Ue)]
                            })),
                            _: 1
                        })), (n(), g(x(G), {
                            key: 2
                        }, {
                            default: c((() => {
                                var e;
                                return [y("img", {
                                    src: null == (e = T.allCards.find((e => e.name == N.value))) ? void 0 : e.img2,
                                    alt: ""
                                }, null, 8, Ne)]
                            })),
                            _: 1
                        }))])),
                        _: 1
                    })])),
                    _: 1
                })])])]), y("div", Fe, [y("p", Re, h(N.value), 1)]), a[14] || (a[14] = y("div", {
                    role: "cell",
                    class: "order-buy-cell justify-center text-end"
                }, [y("p", {
                    class: "pl-3 qt-item"
                }, "API Integration")], -1))]), a[17] || (a[17] = y("hr", {
                    class: "mt-0 mb-2 line-hz"
                }, null, -1)), y("div", Ze, [y("div", Ke, [y("p", qe, " To enable AI analysis on your " + h(N.value) + " orders, please provide your " + h(N.value) + " API key and secret. ", 1)]), a[15] || (a[15] = y("div", {
                    role: "cell",
                    class: "order-buy-cell justify-center text-end"
                }, [y("p", {
                    class: "pl-3 flex"
                })], -1))]), a[18] || (a[18] = y("hr", {
                    class: "mt-2 mb-5 line-hz"
                }, null, -1)), d(x(Q), {
                    "label-position": "left",
                    "label-width": "150px",
                    style: {
                        "max-width": "460px"
                    },
                    model: B,
                    ref_key: "formRef",
                    ref: j,
                    class: "form-buy-card"
                }, {
                    default: c((() => [d(x(ee), {
                        label: x(I)("sett.name") + "/" + x(I)("sett.note"),
                        prop: "name",
                        rules: {
                            required: !1
                        }
                    }, {
                        default: c((() => [d(x(te), {
                            modelValue: B.name,
                            "onUpdate:modelValue": a[3] || (a[3] = e => B.name = e),
                            placeholder: x(I)("sett.name") + "/" + x(I)("sett.note"),
                            ref_key: "ref1",
                            ref: O
                        }, null, 8, ["modelValue", "placeholder"])])),
                        _: 1
                    }, 8, ["label"]), d(x(ee), {
                        label: x(I)("sett.api-key"),
                        prop: "apikey",
                        rules: {
                            required: !0,
                            message: x(I)("pga.field-is-required"),
                            trigger: "blur"
                        }
                    }, {
                        default: c((() => [d(x(te), {
                            placeholder: x(I)("sett.api-key"),
                            modelValue: B.apikey,
                            "onUpdate:modelValue": a[4] || (a[4] = e => B.apikey = e)
                        }, null, 8, ["placeholder", "modelValue"])])),
                        _: 1
                    }, 8, ["label", "rules"]), d(x(ee), {
                        label: x(I)("sett.secret-key"),
                        prop: "apisecretkey",
                        rules: {
                            required: !0,
                            message: x(I)("pga.field-is-required"),
                            trigger: "blur"
                        }
                    }, {
                        default: c((() => [d(x(te), {
                            placeholder: x(I)("sett.secret-key"),
                            modelValue: B.apisecretkey,
                            "onUpdate:modelValue": a[5] || (a[5] = e => B.apisecretkey = e)
                        }, null, 8, ["placeholder", "modelValue"])])),
                        _: 1
                    }, 8, ["label", "rules"]), "OKX" == N.value.toUpperCase() ? (n(), g(x(ee), {
                        key: 0,
                        label: "Password Phrase",
                        prop: "passwordphrase",
                        rules: {
                            required: !0,
                            message: x(I)("pga.field-is-required"),
                            trigger: "blur"
                        }
                    }, {
                        default: c((() => [d(x(te), {
                            placeholder: "Password Phrase",
                            modelValue: B.passwordphrase,
                            "onUpdate:modelValue": a[6] || (a[6] = e => B.passwordphrase = e)
                        }, null, 8, ["modelValue"])])),
                        _: 1
                    }, 8, ["rules"])) : m("", !0), d(x(ee), null, {
                        default: c((() => [U.value ? (n(), g(i, {
                            key: 1,
                            height: "32px",
                            width: "120px"
                        })) : (n(), g(x(ae), {
                            key: 0,
                            type: "primary",
                            onClick: a[7] || (a[7] = e => {
                                var t;
                                (t = j.value) && t.validate((e => {
                                    if (!e) return !1; {
                                        const e = new X;
                                        e.append("apiName", B.name), e.append("apiKey", Y(B.apikey)), e.append("secretKey", Y(B.apisecretkey)), B.passwordphrase && e.append("passphrase", Y(B.passwordphrase)), D.value && e.append("typeExchange", D.value), e.append("exchange", N.value.toUpperCase()), U.value = !0, P.saveStreamApi(e).then((({
                                            data: e
                                        }) => {
                                            500 == e.code ? W.error(e.message) : 0 == e.code && (E("update:modelValue", !1), E("addSuccess"), t.resetFields(), W.success(I("sett.key-successfully-added"))), U.value = !1
                                        }))
                                    }
                                }))
                            })
                        }, {
                            default: c((() => [_(h(x(I)("dash.add")), 1)])),
                            _: 1
                        })), U.value ? m("", !0) : (n(), g(x(ae), {
                            key: 2,
                            onClick: a[8] || (a[8] = e => {
                                var t;
                                (t = j.value) && t.resetFields()
                            })
                        }, {
                            default: c((() => [_(h(x(I)("wall.reset")), 1)])),
                            _: 1
                        }))])),
                        _: 1
                    })])),
                    _: 1
                }, 8, ["model"])])) : m("", !0)])])),
                _: 1
            }, 8, ["modelValue"])], 64)
        }
    }
}), Me = se(He, [
    ["__scopeId", "data-v-0370c017"]
]), $e = {
    class: "flex cards-nft-box"
}, Ge = {
    class: "banking-dashboard-v2 card"
}, Xe = {
    class: "dashboard-card is-card-panel"
}, Ye = {
    class: "columns"
}, Je = {
    class: "column is-9 a3d-cards"
}, Qe = {
    class: "inner-box clip2"
}, et = {
    class: "cards-wrapper"
}, tt = {
    class: "flex justify-center"
}, at = {
    class: "controls"
}, lt = {
    class: "arrowSlides",
    style: {
        position: "absolute",
        right: "0"
    }
}, st = {
    class: "cards-carousel"
}, it = ["tabindex", "onKeydown", "onClick"], rt = {
    class: "column is-3 info-cards"
}, nt = {
    key: 0,
    style: {
        height: "100%",
        "padding-bottom": "12px"
    }
}, ot = {
    key: 1,
    class: "inner-box pl-5"
}, dt = {
    class: "box-title mb-1"
}, ct = {
    class: "box-desc"
}, ut = {
    key: 2,
    class: "inner-box pl-5"
}, mt = {
    class: "box-title mb-1"
}, pt = {
    class: "box-desc"
}, vt = {
    class: "card-balance-wrap"
}, gt = {
    class: "text-medium",
    style: {
        "font-size": "15px"
    }
}, xt = {
    key: 0,
    class: "card-balance-wrap"
}, yt = {
    class: "card-balance"
}, ht = {
    class: "text-gray-card text-medium"
}, ft = {
    class: "balance_stream"
}, bt = {
    class: "symbol"
}, wt = {
    class: "text-gray-card text-medium"
}, At = {
    class: "balance_stream"
}, St = {
    class: "symbol"
}, kt = {
    key: 1,
    class: "card-balance-wrap"
}, Ct = {
    key: 3,
    class: "inner-box pl-5"
}, _t = a({
    __name: "NftBox",
    props: {
        modelValue: {
            default: []
        }
    },
    emits: ["update:modelValue", "changeExchanges"],
    setup(t, {
        emit: a
    }) {
        const u = A();
        b();
        const {
            t: m
        } = s(), f = i(!0), k = i(!1), C = i(!0), L = a, V = t, T = w({
            get: () => V.modelValue,
            set: e => L("update:modelValue", e)
        }), B = () => {
            Z.allExchanges = [], Z.allExchanges.push({
                id: 0,
                memberId: 0,
                apiKey: "***",
                apiName: "",
                exchange: 0,
                status: 0
            }), Z.allExchanges.push({
                id: 1,
                memberId: 0,
                apiKey: "***",
                apiName: "",
                exchange: 1,
                status: 0
            }), Z.allExchanges.push({
                id: -2,
                memberId: 0,
                apiKey: "***",
                apiName: "",
                exchange: 3,
                status: 0
            }), Z.allExchanges.push({
                id: -3,
                memberId: 0,
                apiKey: "***",
                apiName: "",
                exchange: 7,
                status: 0
            })
        }, O = () => {
            Se.getStreamApi().then((e => {
                var t, a, l, s;
                if (200 == e.status && 0 == e.data.code)
                    if (Z.allExchanges = e.data.data, T.value = e.data.data, L("changeExchanges", e.data.data), Z.allExchanges.length > 0)
                        if (0 == (null == (t = Z.allExchanges) ? void 0 : t.filter((e => e.id == u.tradeWalletId)).length)) u.tradeWalletId = Z.allExchanges[0].id, null == (a = Y.value) || a.goTo(0), setTimeout((function() {
                            var e;
                            null == (e = Y.value) || e.rebuild()
                        }), 200);
                        else {
                            const e = Z.allExchanges.findIndex((e => e.id === u.tradeWalletId));
                            if (-1 !== e) {
                                const t = Z.allExchanges[e].exchange;
                                null == (l = Y.value) || l.goTo(t)
                            }
                            setTimeout((function() {
                                var e;
                                null == (e = Y.value) || e.rebuild()
                            }), 200)
                        }
                else u.tradeWalletId = 0, k.value = !1, B(), null == (s = Y.value) || s.goTo(0), setTimeout((function() {
                    var e;
                    null == (e = Y.value) || e.rebuild()
                }), 200);
                else B(), u.tradeWalletId = 0, k.value = !1, null == Y || Y.value.goTo(0), setTimeout((function() {
                    var e;
                    null == (e = Y.value) || e.rebuild()
                }), 200);
                R(), C.value && (C.value = !1, J())
            }))
        }, R = () => {
            var e;
            if (!u.tradeWalletId || u.tradeWalletId <= 1) return void(f.value = !1);
            f.value = !0;
            const t = new FormData;
            t.append("apiId", u.tradeWalletId.toString()), t.append("exchangeName", null == (e = Z.allExchanges) ? void 0 : e.filter((e => e.id === u.tradeWalletId))[0].exchange), Se.getStreamAssets(t).then((e => {
                200 == e.status && 0 == e.data.code ? (Z.wallet = e.data.data, X.value = Object.keys(Z.wallet)[0], k.value = !1, f.value = !1) : (k.value = !0, f.value = !1)
            }))
        }, Z = l({
            allExchanges: {},
            offsetW: 0,
            selectedCardId: null,
            wallet: {}
        }), K = e => {
            u.tradeWalletId = e
        };
        r((() => u.tradeWalletId), ((e, t) => {
            e > 1 ? (R(), L("changeExchanges", Z.allExchanges)) : H.value = !0
        }));
        const q = () => {
                O()
            },
            H = i(!1),
            M = i(),
            $ = S(),
            G = e => {
                Se.delStreamApi(e).then((t => {
                    var a;
                    const l = t.data;
                    0 == l.code ? ($.success(m("sett.successfully-deleted")), Z.allExchanges = null == (a = Z.allExchanges) ? void 0 : a.filter((t => t.id !== e)), Z.allExchanges.length > 0 ? (K(Z.allExchanges[0].id), Y.value.goTo(0), setTimeout((function() {
                        Y.value.rebuild()
                    }), 200)) : (B(), u.tradeWalletId = 0, k.value = !1, Y.value.goTo(0), setTimeout((function() {
                        Y.value.rebuild()
                    }), 200))) : $.error(l.message)
                }))
            },
            X = i(""),
            Y = i(null),
            J = async () => {
                setTimeout((function() {
                    M.value && (Y.value = F({
                        container: M.value,
                        controls: !1,
                        nav: !1,
                        mouseDrag: !0,
                        autoplayButtonOutput: !1,
                        center: !1,
                        loop: !1
                    }))
                }), 200)
            },
            Q = e => {
                Y.value && Y.value.goTo(e)
            };
        I((async () => {
            O()
        }));
        return (t, a) => {
            var l, s, i;
            const r = e;
            return n(), o(p, null, [y("div", $e, [y("div", Ge, [y("div", Xe, [y("div", Ye, [y("div", Je, [y("div", Qe, [y("div", et, [y("div", tt, [y("div", at, [y("button", {
                onClick: a[0] || (a[0] = e => H.value = !0),
                class: "btn-nft button"
            }, a[7] || (a[7] = [y("h3", null, "Add Exchange", -1), y("span", {
                class: "nft-ic ml-2 flex"
            }, [y("i", {
                "aria-hidden": "true",
                class: "iconify",
                "data-icon": "feather:plus"
            })], -1)]))]), y("div", lt, [d(x(ae), {
                style: {
                    position: "absolute",
                    right: "12px"
                },
                icon: x(D),
                size: "small",
                circle: "",
                onClick: a[1] || (a[1] = e => Y.value.goTo("next"))
            }, null, 8, ["icon"]), d(x(ae), {
                style: {
                    position: "absolute",
                    right: "42px"
                },
                icon: x(W),
                size: "small",
                circle: "",
                onClick: a[2] || (a[2] = e => Y.value.goTo("prev"))
            }, null, 8, ["icon"])])]), y("div", st, [y("div", {
                ref_key: "sliderElement",
                ref: M,
                class: "cards-carousel-inner flex",
                style: {
                    width: "100%"
                }
            }, [(n(!0), o(p, null, v(Z.allExchanges, ((e, t) => (n(), o("div", {
                key: t,
                class: "cards-carousel-item",
                tabindex: t,
                onKeydown: P(j((a => {
                    Q(t), K(e.id)
                }), ["prevent"]), ["space"]),
                onClick: a => {
                    Q(t), K(e.id)
                }
            }, [d(U, {
                idExchange: e.id,
                radius: Z.offsetW,
                apiKey: e.apiKey,
                name: e.apiName,
                exchange: e.exchange
            }, null, 8, ["idExchange", "radius", "apiKey", "name", "exchange"])], 40, it)))), 128))], 512)])])])]), y("div", rt, [f.value ? (n(), o("div", nt, [d(r, {
                width: "100%",
                height: "100%",
                style: {
                    "border-radius": "3px"
                }
            })])) : k.value ? (n(), o("div", ot, [d(x(ie), {
                onConfirm: a[3] || (a[3] = e => G(x(u).tradeWalletId)),
                "icon-color": "#626AEF",
                title: "Are you sure to remove this API?",
                width: "249",
                "confirm-button-text": "Yes",
                "cancel-button-text": "Cancel"
            }, {
                reference: c((() => [d(x(ae), {
                    style: {
                        position: "absolute",
                        right: "0"
                    },
                    icon: x(z),
                    size: "small",
                    circle: ""
                }, null, 8, ["icon"])])),
                _: 1
            }), y("div", dt, [a[8] || (a[8] = y("h3", null, "API Connection Failed", -1)), y("span", ct, "Couldn't Fetch data from " + h(x(N)(null == (l = Z.allExchanges) ? void 0 : l.filter((e => e.id == x(u).tradeWalletId))[0].exchange)) + " using your API.", 1), a[9] || (a[9] = y("div", {
                class: "card-balance-wrap"
            }, [y("div", {
                class: "card-balance"
            }, [y("span", {
                class: "text-gray-card text-medium mt-1"
            }, "Note: Please check if the API is not expired and is still valid.")])], -1))])])) : Z.allExchanges.length > 0 && x(u).tradeWalletId > 1 ? (n(), o("div", ut, [d(x(ie), {
                onConfirm: a[4] || (a[4] = e => G(x(u).tradeWalletId)),
                "icon-color": "#626AEF",
                title: "Are you sure to remove this API?",
                width: "249",
                "confirm-button-text": "Yes",
                "cancel-button-text": "Cancel"
            }, {
                reference: c((() => [d(x(ae), {
                    style: {
                        position: "absolute",
                        right: "0"
                    },
                    icon: x(z),
                    size: "small",
                    circle: ""
                }, null, 8, ["icon"])])),
                _: 1
            }), y("div", mt, [y("h3", null, h(x(N)(null == (s = Z.allExchanges) ? void 0 : s.filter((e => e.id == x(u).tradeWalletId))[0].exchange)), 1), y("span", pt, h(null == (i = Z.allExchanges) ? void 0 : i.filter((e => e.id == x(u).tradeWalletId))[0].apiName), 1)]), y("div", vt, [d(x(ne), {
                class: "switch-acc",
                modelValue: X.value,
                "onUpdate:modelValue": a[5] || (a[5] = e => X.value = e),
                "before-leave": e => {
                    e.toString()
                }
            }, {
                default: c((() => [(n(!0), o(p, null, v(Z.wallet, ((e, t) => (n(), g(x(re), {
                    key: t,
                    name: t
                }, {
                    label: c((() => {
                        return [y("span", gt, h((t = e.name, t ? t.charAt(0).toUpperCase() + t.slice(1).toLowerCase() : "")), 1)];
                        var t
                    })),
                    default: c((() => {
                        var t;
                        return [(null == (t = null == e ? void 0 : e.balances) ? void 0 : t.filter((e => e.total > 0)).length) > 0 ? (n(), o("div", xt, [y("div", yt, [y("span", ht, "- " + h(x(m)("dash.total-balance")), 1), y("ul", ft, [(n(!0), o(p, null, v(e.balances.filter((e => e.total > 0)), (e => (n(), o("li", {
                            key: e.currency
                        }, [y("span", bt, h(e.currency) + ":", 1), _(" " + h(e.total), 1)])))), 128))]), a[10] || (a[10] = y("br", null, null, -1)), y("span", wt, "- " + h(x(m)("dash.available-balance")), 1), y("ul", At, [(n(!0), o(p, null, v(e.balances.filter((e => e.total > 0)), (e => (n(), o("li", {
                            key: e.currency
                        }, [y("span", St, h(e.currency) + ":", 1), _(" " + h(e.total), 1)])))), 128))])])])) : (n(), o("div", kt, a[11] || (a[11] = [y("div", {
                            class: "card-balance"
                        }, [y("span", {
                            class: "text-gray-card text-medium"
                        }, " No balance ")], -1)])))]
                    })),
                    _: 2
                }, 1032, ["name"])))), 128))])),
                _: 1
            }, 8, ["modelValue", "before-leave"])])])) : (n(), o("div", Ct, a[12] || (a[12] = [y("div", {
                class: "box-title mb-1"
            }, [y("h3", null, "Please add an Exchange")], -1)])))])])]), a[13] || (a[13] = E('<div class="card-arrow" data-v-733c2797><div class="card-arrow-top-left" data-v-733c2797></div><div class="card-arrow-top-right" data-v-733c2797></div><div class="card-arrow-bottom-left" data-v-733c2797></div><div class="card-arrow-bottom-right" data-v-733c2797></div></div>', 1))])]), d(Me, {
                modelValue: H.value,
                "onUpdate:modelValue": a[6] || (a[6] = e => H.value = e),
                onAddSuccess: q,
                btn: !1
            }, null, 8, ["modelValue"])], 64)
        }
    }
}), It = se(_t, [
    ["__scopeId", "data-v-733c2797"]
]), Pt = {
    key: 0,
    class: "col-xl-3 col-lg-6 balance-info"
}, jt = {
    key: 1,
    class: "col-xl-3 col-lg-6 balance-info"
}, Et = {
    ref: "card",
    class: "card flex flex-row"
}, Lt = {
    class: "card-body"
}, Vt = {
    class: "flex fw-bold small mb-2"
}, Tt = ["src"], Bt = {
    class: "flex-grow-1 text-medium text-gray2"
}, Ot = {
    class: "row align-items-center mb-2"
}, Dt = {
    class: "col-5"
}, Wt = {
    key: 0,
    class: "mb-0 font-big-1"
}, zt = {
    key: 1,
    class: "mb-0 font-big-1"
}, Ut = {
    class: "text-gray1"
}, Nt = {
    class: "col-2 flex flex align-items-center p-0 chart-balance"
}, Ft = {
    class: "mt-n3 pt-2 mb-n2 chapex items-center justify-center flex flex-col"
}, Rt = {
    class: "percentage-value"
}, Zt = {
    class: "flex flex-col align-baseline price-indi"
}, Kt = {
    class: "text-12 text-gray5 price-indi-desc mt-1"
}, qt = {
    key: 1,
    class: "text-10 text-gray2",
    style: {
        "font-size": "8px"
    }
}, Ht = {
    key: 0,
    class: "small mb-0 text-white text-opacity-60 text-12-24"
}, Mt = {
    key: 1,
    class: "small mb-0 text-white text-opacity-60 text-12-24"
}, $t = {
    class: "flex align-items-center text-medium flex-row info-coin-r"
}, Gt = {
    class: "flex align-items-center text-gray2 ml-2"
}, Xt = {
    class: "ml-2"
}, Yt = {
    class: "flex align-items-center text-medium flex-row info-coin-r"
}, Jt = {
    class: "ml-2"
}, Qt = {
    class: "flex align-items-center text-medium flex-row info-coin-r"
}, ea = {
    class: "flex align-items-center text-gray2 ml-2"
}, ta = {
    class: "ml-2"
}, aa = {
    class: "flex align-items-center text-medium flex-row info-coin-r"
}, la = {
    class: "flex align-items-center text-gray2 ml-2"
}, sa = {
    class: "ml-2"
}, ia = {
    class: "small text-white text-opacity-50 text-truncate"
}, ra = {
    class: "items-center flex"
}, na = {
    class: "text-gray2 mr-1",
    style: {
        "min-width": "18%"
    }
}, oa = {
    key: 0,
    class: "coins-text flex items-center"
}, da = ["src"], ca = {
    class: "first-text-coins ml-2 pb-1"
}, ua = {
    class: "coin-click-data"
}, ma = {
    key: 0
}, pa = {
    class: "mb-1 text-12 flex expand-data"
}, va = {
    class: "line-expand"
}, ga = {
    class: "text-gray5"
}, xa = {
    class: "mb-1 text-12 flex expand-data"
}, ya = {
    class: "line-expand"
}, ha = {
    class: "text-gray5"
}, fa = {
    class: "line-expand"
}, ba = {
    class: "text-gray5"
}, wa = {
    class: "mb-1 text-12 flex expand-data"
}, Aa = {
    class: "line-expand"
}, Sa = {
    class: "text-gray5"
}, ka = {
    class: "mb-1 text-12 flex expand-data"
}, Ca = {
    class: "line-expand"
}, _a = {
    class: "text-gray5"
}, Ia = {
    class: "line-expand"
}, Pa = {
    class: "text-gray5"
}, ja = {
    class: "mb-1 text-12 flex expand-data"
}, Ea = {
    class: "line-expand"
}, La = {
    class: "text-gray5"
}, Va = {
    key: 1
}, Ta = {
    class: "flex justify-center items-center mt-5"
}, Ba = {
    width: "330px",
    height: "180px",
    style: {
        top: "126px",
        display: "flex",
        "flex-direction": "column",
        "align-items": "center",
        "justify-content": "center",
        width: "330px",
        height: "180px"
    },
    class: "items-center justify-center",
    initial: {
        opacity: 0,
        y: 0,
        scale: .5
    },
    enter: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 25,
            damping: 10,
            mass: 1,
            delay: 100
        }
    }
}, Oa = {
    style: {
        width: "210px"
    }
}, Da = {
    class: "title-nw mt-2 text-gray4",
    style: {
        display: "flex",
        position: "relative",
        "justify-content": "start",
        "padding-left": "36px",
        top: "-33px",
        "font-size": "12px"
    }
}, Wa = {
    key: 2
}, za = {
    class: "flex items-center w-100"
}, Ua = se(a({
    __name: "FutureOrderBox",
    props: {
        item: {
            default: {}
        },
        loading: {
            type: Boolean,
            default: !0
        },
        opzBalance: {
            default: 0
        },
        isMobileWidth: {
            type: Boolean,
            default: 0
        }
    },
    emits: ["lowerBalance"],
    setup(a, {
        emit: u
    }) {
        const v = i(!1),
            b = k(),
            {
                Api: w
            } = t(),
            C = S();
        i(!0);
        const P = A();
        i(!1);
        const {
            t: j
        } = s(), B = a, O = new Set(["BTCUSDT", "ETHUSDT"]), D = u, W = i(!1), z = l({
            sentiment: {}
        }), U = i("Generating Analysis"), N = i("");
        (() => {
            const e = [".", "..", "..."];
            let t = 0;
            setInterval((() => {
                U.value = `Generating Analysis${e[t%e.length]}`, N.value = `${e[t%e.length]}`, t++
            }), 500)
        })();
        const F = () => {
            if (!B.item.symbol) return;
            const e = P.getTradingAdvice(B.item.symbol + "FUTURES");
            e && (z.sentiment = e, z.sentiment.hasAi = !0)
        };
        F(), r((() => B.item.symbol), ((e, t) => {
            e && F()
        }));
        const q = (e, t = 3, a = !1) => {
                var l;
                const s = {
                    entryPrice: e.entryPrice,
                    breakEvenPrice: e.breakEvenPrice,
                    marginType: e.marginType,
                    isAutoAddMargin: e.isAutoAddMargin,
                    isolatedMargin: e.isolatedMargin,
                    leverage: e.leverage,
                    liquidationPrice: e.liquidationPrice,
                    markPrice: e.markPrice,
                    maxNotionalValue: e.maxNotionalValue,
                    positionAmt: e.positionAmt,
                    notional: e.notional,
                    isolatedWallet: e.isolatedWallet,
                    symbol: e.symbol,
                    unRealizedProfit: e.unRealizedProfit,
                    positionSide: e.positionSide,
                    updateTime: null !== e.updateTime ? e.updateTime : null,
                    aiSelect: (null == (l = null == P ? void 0 : P.selectedAiData) ? void 0 : l.id) ? ? 0
                };
                W.value = !0, v.value = !0, w.queryPosition(s).then((({
                    data: l
                }) => {
                    if (0 == l.code) {
                        if (l.data)
                            if (l.data.healthScoreShortterm) {
                                D("lowerBalance");
                                const t = { ...l.data,
                                    id: e.symbol + "FUTURES",
                                    timestamp: Date.now()
                                };
                                z.sentiment = t, P.addOrUpdateTradingAdvice(t), z.sentiment.hasAi = !0
                            } else {
                                if (l.data.retry && t > 0) return void q(e, t - 1, a);
                                l.message && "ERROR" != l.message ? C.error(l.message) : C.error(j("pga.server-busy-try-later")), v.value = !1
                            }
                    } else {
                        if (l.message && "ERROR: Please try again later." == l.message && t > 0) return void q(e, t - 1, a);
                        l.message && "ERROR" != l.message ? (C.error(l.message), v.value = !1) : (C.error(j("pga.server-busy-try-later")), v.value = !1)
                    }
                    W.value = !1
                })).catch((e => {
                    C.error(j("pga.server-busy-try-later")), W.value = !1, v.value = !1
                }))
            },
            H = i(Date.now());
        return I((() => {
            const e = setInterval((() => {
                H.value = Date.now()
            }), 5e3);
            L((() => {
                clearInterval(e)
            }))
        })), (t, a) => {
            var l, s, i, r;
            const u = e,
                w = V("motion");
            return n(), o(p, null, [B.loading || !B.item.symbol ? (n(), o("div", Pt, [d(u, {
                height: "115px",
                "mobile-height": "127px"
            })])) : (n(), o("div", jt, [y("div", Et, [y("div", Lt, [y("div", Vt, [y("img", {
                src: "/images/icons/coin/" + (B.item.symbol.startsWith("BTC") ? "btc" : "eth") + "w.svg",
                style: {
                    width: "12px",
                    "margin-right": "2px"
                }
            }, null, 8, Tt), y("span", Bt, h(B.item.symbol + " " + x(j)("exh.mark-price")), 1)]), y("div", Ot, [y("div", Dt, ["USD" == x(P).currency ? (n(), o("h3", Wt, [a[4] || (a[4] = y("span", {
                class: "text-gray1"
            }, "$", -1)), _(" " + h(Number(B.item.markPrice).toLocaleString(void 0, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            })), 1)])) : (n(), o("h3", zt, [y("span", Ut, h(null == (l = t.allCurr.find((e => e.name == x(P).currency))) ? void 0 : l.value), 1), _(" " + h(" " + (B.item.markPrice * Number(x(P).currencyRate.toString())).toLocaleString(void 0, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            })), 1)]))]), y("div", Nt, [y("div", Ft, [(null == (s = z.sentiment) ? void 0 : s.hasAi) ? (n(), g(x(pe), {
                key: 0,
                class: "btn-more text-12 pb-2",
                type: "primary",
                onClick: a[0] || (a[0] = e => v.value = !0),
                disabled: W.value || !x(O).has(B.item.symbol) || 0 == B.item.positionAmt
            }, {
                default: c((() => [_(h(x(j)("sett.details")), 1)])),
                _: 1
            }, 8, ["disabled"])) : m("", !0), d(x(J), {
                placement: "top",
                trigger: "hover",
                width: 222,
                persistent: !1,
                disabled: W.value || !(null == (i = z.sentiment) ? void 0 : i.healthScoreShorttermDescription)
            }, {
                reference: c((() => {
                    var e, t;
                    return [d(x(ve), {
                        type: "dashboard",
                        percentage: z.sentiment.hasAi && !W.value ? z.sentiment.healthScoreShortterm : 100,
                        color: z.sentiment.hasAi && !W.value ? x(R)(null == (e = z.sentiment) ? void 0 : e.healthScoreShortterm) : "#7303fc",
                        width: 60,
                        indeterminate: !0,
                        duration: 5,
                        status: z.sentiment.hasAi && !W.value ? x(Z)(null == (t = z.sentiment) ? void 0 : t.healthScoreShortterm) : "",
                        striped: "",
                        "striped-flow": ""
                    }, {
                        default: c((({
                            percentage: e
                        }) => [y("span", Rt, h(W.value ? N.value : z.sentiment.hasAi ? e : "-"), 1), a[5] || (a[5] = y("span", {
                            class: "percentage-label"
                        }, [y("i", {
                            "aria-hidden": "true",
                            class: "iconify sidebar-svg",
                            "data-icon": "feather:activity"
                        })], -1))])),
                        _: 1
                    }, 8, ["percentage", "color", "status"])]
                })),
                default: c((() => {
                    var e;
                    return [y("div", Zt, [a[6] || (a[6] = y("p", {
                        class: "text-12 text-gray-darken"
                    }, "ShortTerm HealthScore", -1)), y("p", Kt, h(null == (e = z.sentiment) ? void 0 : e.healthScoreShorttermDescription), 1), a[7] || (a[7] = y("p", {
                        class: "text-10 text-gray5 price-indi-desc mt-2 help"
                    }, " Please Note: OPZ-AI is in Beta. Its use is completely at your own risk. It is important to conduct thorough research and consult with a financial advisor before making any investment decisions. ", -1))])]
                })),
                _: 1
            }, 8, ["disabled"]), d(x(ie), {
                onConfirm: a[1] || (a[1] = e => B.opzBalance > .1 ? q(B.item, 3, !0) : x(b).push({
                    name: "presale"
                })),
                "icon-color": "#626AEF",
                title: B.opzBalance > .1 ? "Start Analysis (0.1 OPZ)" : "Insufficient OPZ Balance",
                width: "196",
                "confirm-button-text": B.opzBalance > .1 ? x(j)("sett.start") : x(j)("exh.buy"),
                "cancel-button-text": "Cancel",
                disabled: W.value
            }, {
                reference: c((() => [d(x(pe), {
                    class: "btn-more text-12",
                    type: "primary",
                    disabled: W.value || !x(O).has(B.item.symbol) || 0 == B.item.positionAmt
                }, {
                    default: c((() => [_(h(x(O).has(B.item.symbol) ? "Start Analysis" : x(j)("pga.not-eligible")), 1)])),
                    _: 1
                }, 8, ["disabled"])])),
                _: 1
            }, 8, ["title", "confirm-button-text", "disabled"]), z.sentiment.hasAi && !W.value ? (n(), o("span", qt, h(x(j)("pga.last-update-time").replace(":time", x(K)(null == (r = z.sentiment) ? void 0 : r.timestamp, H.value))), 1)) : m("", !0)]), 0 == B.item.positionAmt ? (n(), o("div", Ht, a[8] || (a[8] = [y("div", {
                class: "flex align-items-center text-medium flex-row info-coin-r"
            }, [y("div", {
                class: "flex align-items-center text-gray2 ml-2"
            }, " No open positions ")], -1)]))) : (n(), o("table", Mt, [y("tbody", null, [y("tr", null, [y("td", null, [y("div", $t, [y("div", Gt, h(x(j)("exh.entry-price")) + ": ", 1), y("div", Xt, h(B.item.entryPrice), 1)])])]), y("tr", null, [y("td", null, [y("div", Yt, [a[9] || (a[9] = y("div", {
                class: "flex align-items-center text-gray2 ml-2"
            }, h("Break Even Price") + ": ", -1)), y("div", Jt, h(B.item.breakEvenPrice.toFixed(1)), 1)])])]), y("tr", null, [y("td", null, [y("div", Qt, [y("div", ea, h(x(j)("exh.amount")) + ": ", 1), y("div", ta, h(B.item.positionAmt), 1)])])]), y("tr", null, [y("td", null, [y("div", aa, [y("div", la, h(x(j)("exh.liquidation-price")) + ": ", 1), y("div", sa, h(B.item.liquidationPrice.toFixed(1)), 1)])])])])]))])]), y("div", ia, [y("div", {
                class: f(["flex", (B.isMobileWidth, "flex-col")])
            }, [y("div", ra, [y("span", na, h(x(j)("wall.type")) + ": ", 1)]), y("span", null, h((A = B.item.marginType, A ? A.charAt(0).toUpperCase() + A.slice(1).toLowerCase() : "")), 1)], 2)])]), a[10] || (a[10] = E('<div class="card-arrow" data-v-36ecd516><div class="card-arrow-top-left" data-v-36ecd516></div><div class="card-arrow-top-right" data-v-36ecd516></div><div class="card-arrow-bottom-left" data-v-36ecd516></div><div class="card-arrow-bottom-right" data-v-36ecd516></div></div>', 1))], 512)])), d(x(xe), {
                modelValue: v.value,
                "onUpdate:modelValue": a[3] || (a[3] = e => v.value = e),
                class: "drawerCoinClick2",
                direction: "btt",
                size: t.isMobileWidth ? "560" : "475",
                "lock-scroll": !0,
                "destroy-on-close": !0
            }, {
                header: c((() => [B.item.symbol ? (n(), o("div", oa, [B.item.symbol ? (n(), o("img", {
                    key: 0,
                    class: "coins-img",
                    alt: "coin",
                    src: "/images/icons/coin/" + (B.item.symbol.startsWith("BTC") ? "btc" : "eth") + ".svg"
                }, null, 8, da)) : m("", !0), y("div", ca, [y("span", null, h(B.item.symbol), 1)])])) : m("", !0)])),
                default: c((() => {
                    var e, l, s, i, r, m, p;
                    return [y("div", ua, [z.sentiment.hasAi && !W.value ? (n(), o("div", ma, [a[18] || (a[18] = y("div", {
                        class: "mb-1 text-12 flex expand-data"
                    }, [y("div", {
                        class: "line-expand",
                        style: {
                            "max-width": "100%"
                        }
                    }, [y("span", {
                        class: "text-gray1 mr-2 text-regular"
                    }, "Please Note:"), y("span", {
                        class: "text-gray5"
                    }, "OPZ-AI is in Beta. Its use is completely at your own risk. It is important to conduct thorough research and consult with a financial advisor before making any investment decisions.")])], -1)), a[19] || (a[19] = y("div", {
                        class: "my-4",
                        style: {
                            "align-items": "center",
                            display: "flex",
                            "justify-content": "center"
                        }
                    }, [y("div", {
                        style: {
                            "border-top": "1px solid #2d2d2d",
                            width: "100%"
                        }
                    })], -1)), y("div", pa, [y("div", va, [a[11] || (a[11] = y("span", {
                        class: "text-gray1 mr-2 text-regular"
                    }, "HealthScore Shortterm:", -1)), y("span", ga, h(null == (e = z.sentiment) ? void 0 : e.healthScoreShorttermDescription), 1)])]), a[20] || (a[20] = y("div", {
                        class: "my-4",
                        style: {
                            "align-items": "center",
                            display: "flex",
                            "justify-content": "center"
                        }
                    }, [y("div", {
                        style: {
                            "border-top": "1px solid #2d2d2d",
                            width: "100%"
                        }
                    })], -1)), y("div", xa, [y("div", ya, [a[12] || (a[12] = y("span", {
                        class: "text-gray1 mr-2 text-regular"
                    }, "News Impact", -1)), y("span", ha, h(null == (l = z.sentiment) ? void 0 : l.recentNewsImpact), 1)]), y("div", fa, [a[13] || (a[13] = y("span", {
                        class: "text-gray1 mr-2 text-regular"
                    }, "Market Sentiment", -1)), y("span", ba, h(null == (s = z.sentiment) ? void 0 : s.marketSentiment), 1)])]), a[21] || (a[21] = y("div", {
                        class: "my-4",
                        style: {
                            "align-items": "center",
                            display: "flex",
                            "justify-content": "center"
                        }
                    }, [y("div", {
                        style: {
                            "border-top": "1px solid #2d2d2d",
                            width: "100%"
                        }
                    })], -1)), y("div", wa, [y("div", Aa, [a[14] || (a[14] = y("span", {
                        class: "text-gray1 mr-2 text-regular"
                    }, "Action Shortterm:", -1)), y("span", Sa, h(null == (i = z.sentiment) ? void 0 : i.NextActionShorttermDescription), 1)])]), a[22] || (a[22] = y("div", {
                        class: "my-4",
                        style: {
                            "align-items": "center",
                            display: "flex",
                            "justify-content": "center"
                        }
                    }, [y("div", {
                        style: {
                            "border-top": "1px solid #2d2d2d",
                            width: "100%"
                        }
                    })], -1)), y("div", ka, [y("div", Ca, [a[15] || (a[15] = y("span", {
                        class: "text-gray1 mr-2 text-regular"
                    }, "StopLoss Price Shortterm:", -1)), y("span", _a, h(null == (r = z.sentiment) ? void 0 : r.StopLossAdvicePriceShortterm), 1)]), y("div", Ia, [a[16] || (a[16] = y("span", {
                        class: "text-gray1 mr-2 text-regular"
                    }, "StopLoss Advice Shortterm:", -1)), y("span", Pa, h(null == (m = z.sentiment) ? void 0 : m.StopLossAdviceShortterm), 1)])]), a[23] || (a[23] = y("div", {
                        class: "my-4",
                        style: {
                            "align-items": "center",
                            display: "flex",
                            "justify-content": "center"
                        }
                    }, [y("div", {
                        style: {
                            "border-top": "1px solid #2d2d2d",
                            width: "100%"
                        }
                    })], -1)), y("div", ja, [y("div", Ea, [a[17] || (a[17] = y("span", {
                        class: "text-gray1 mr-2 text-regular"
                    }, "Liquidation Note:", -1)), y("span", La, h(null == (p = z.sentiment) ? void 0 : p.LiquidationRisk), 1)])]), a[24] || (a[24] = y("div", {
                        class: "my-2 mb-5 pb-5 pt-2",
                        style: {
                            "align-items": "center",
                            display: "flex",
                            "justify-content": "center"
                        }
                    }, [y("div", {
                        style: {
                            "border-top": "1px solid #2d2d2d",
                            width: "100%"
                        }
                    })], -1))])) : W.value ? (n(), o("div", Va, [y("div", Ta, [T((n(), o("div", Ba, [d(x(de), {
                        class: "fbz-img-lt",
                        animationLink: "/assets/animated/ai5.json",
                        height: 90,
                        width: 90
                    }), d(u, {
                        width: "210px",
                        height: "30px",
                        style: {
                            "border-radius": "3px",
                            "margin-top": "12px"
                        }
                    }), y("div", Oa, [y("p", Da, h(U.value), 1)])])), [
                        [w]
                    ])])])) : (n(), o("div", Wa, [y("div", za, [d(x(ge), {
                        "wrap-class": "scroll-wrap",
                        class: "scroll-more flex",
                        "view-class": "scroll-view",
                        style: {
                            "justify-content": "left",
                            "align-items": "center"
                        }
                    }, {
                        default: c((() => [d(x(ie), {
                            onConfirm: a[2] || (a[2] = e => t.opzBalance > .1 ? q(B.item, 3, !0) : x(b).push({
                                name: "presale"
                            })),
                            "icon-color": "#626AEF",
                            title: t.opzBalance > .1 ? "Start Analysis (0.1 OPZ)" : "Insufficient OPZ Balance",
                            width: "196",
                            "confirm-button-text": t.opzBalance > .1 ? x(j)("sett.start") : x(j)("exh.buy"),
                            "cancel-button-text": "Cancel",
                            disabled: W.value
                        }, {
                            reference: c((() => [d(x(pe), {
                                class: "btn-more",
                                type: "primary",
                                disabled: W.value || !x(O).has(B.item.symbol)
                            }, {
                                default: c((() => [_(h(x(O).has(B.item.symbol) ? "Start Analysis" : x(j)("pga.not-eligible")), 1)])),
                                _: 1
                            }, 8, ["disabled"])])),
                            _: 1
                        }, 8, ["title", "confirm-button-text", "disabled"])])),
                        _: 1
                    })])]))])]
                })),
                _: 1
            }, 8, ["modelValue", "size"])], 64);
            var A
        }
    }
}), [
    ["__scopeId", "data-v-36ecd516"]
]), Na = {
    class: "dashboard"
}, Fa = {
    class: "columns is-multiline"
}, Ra = {
    class: "column is-12"
}, Za = {
    key: 0,
    class: "column is-12 flex justify-between row"
}, Ka = {
    key: 1,
    class: "stock-card"
}, qa = {
    key: 0
}, Ha = {
    class: "mb-1 text-12 ml-5 flex expand-data"
}, Ma = {
    key: 0,
    class: "line-expand",
    style: {
        "max-width": "100%"
    }
}, $a = {
    class: "mb-1 text-12 ml-5 flex expand-data"
}, Ga = {
    key: 0,
    class: "line-expand"
}, Xa = {
    class: "text-gray5"
}, Ya = {
    key: 1,
    class: "line-expand"
}, Ja = {
    class: "text-gray5"
}, Qa = {
    key: 2,
    class: "line-expand"
}, el = {
    class: "text-gray5"
}, tl = {
    key: 3,
    class: "line-expand"
}, al = {
    class: "text-gray5"
}, ll = {
    class: "mb-1 text-12 ml-5 flex expand-data"
}, sl = {
    key: 0,
    class: "line-expand"
}, il = {
    class: "text-gray5"
}, rl = {
    key: 1,
    class: "line-expand"
}, nl = {
    class: "text-gray5"
}, ol = {
    class: "mb-1 text-12 ml-5 flex expand-data"
}, dl = {
    key: 0,
    class: "line-expand"
}, cl = {
    class: "text-gray5"
}, ul = {
    key: 1,
    class: "line-expand"
}, ml = {
    class: "text-gray5"
}, pl = {
    key: 2,
    class: "line-expand"
}, vl = {
    class: "text-gray5"
}, gl = {
    key: 3,
    class: "line-expand"
}, xl = {
    class: "text-gray5"
}, yl = {
    key: 1
}, hl = {
    class: "flex justify-center items-center mt-5"
}, fl = {
    width: "330px",
    height: "180px",
    style: {
        top: "126px",
        display: "flex",
        "flex-direction": "column",
        "align-items": "center",
        "justify-content": "center",
        width: "330px",
        height: "180px"
    },
    class: "items-center justify-center",
    initial: {
        opacity: 0,
        y: 0,
        scale: .5
    },
    enter: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 25,
            damping: 10,
            mass: 1,
            delay: 100
        }
    }
}, bl = {
    style: {
        width: "210px"
    }
}, wl = {
    class: "title-nw mt-2 text-gray4",
    style: {
        display: "flex",
        position: "relative",
        "justify-content": "start",
        "padding-left": "36px",
        top: "-33px",
        "font-size": "12px"
    }
}, Al = {
    key: 2
}, Sl = {
    class: "flex items-center w-100"
}, kl = {
    class: "imgParent"
}, Cl = ["src"], _l = {
    class: "flex flex-col",
    style: {
        "line-height": "20px"
    }
}, Il = {
    class: "text-white"
}, Pl = {
    class: "text-gray2 ml-1"
}, jl = {
    class: "text-gray2 ml-1"
}, El = {
    class: "text-gray2 ml-1"
}, Ll = {
    class: "benefits content flex items-center mb-0 [b-0]"
}, Vl = {
    class: "items-center flex-col flex mr-4"
}, Tl = {
    class: "percentage-value"
}, Bl = {
    class: "flex flex-col align-baseline price-indi"
}, Ol = {
    class: "text-12 text-gray5 price-indi-desc mt-1"
}, Dl = {
    class: "items-center flex-col flex"
}, Wl = {
    class: "percentage-value"
}, zl = {
    class: "flex flex-col align-baseline price-indi"
}, Ul = {
    class: "text-12 text-gray5 price-indi-desc mt-1"
}, Nl = {
    class: "flex items-center justify-left btn-filters"
}, Fl = {
    class: "flex flex-col items-center w-100",
    style: {
        "line-height": "24px"
    }
}, Rl = {
    key: 0,
    class: "text-12"
}, Zl = {
    key: 2
}, Kl = {
    class: "t-coins-header"
}, ql = {
    class: ""
}, Hl = {
    class: "coins-text",
    style: {
        "line-height": "24px"
    }
}, Ml = ["src"], $l = {
    class: "first-text-coins"
}, Gl = {
    class: "sec-text-coins"
}, Xl = {
    class: "text-gray2 text-12"
}, Yl = {
    class: "flex flex-col",
    style: {
        "line-height": "24px"
    }
}, Jl = {
    key: 0,
    class: "text-10 text-gray2"
}, Ql = {
    class: "t-coins-body"
}, es = {
    class: "bottom-balance"
}, ts = {
    class: "balance-left"
}, as = {
    class: "b-text-1"
}, ls = {
    class: "b-text-2"
}, ss = {
    class: "text-gray2 ml-1"
}, is = {
    class: "balance-right"
}, rs = {
    class: "b-text-3"
}, ns = {
    class: "b-text-4"
}, os = {
    class: "text-gray2 ml-1"
}, ds = {
    class: "bottom-balance"
}, cs = {
    class: "balance-left"
}, us = {
    class: "b-text-1"
}, ms = {
    class: "b-text-2"
}, ps = {
    class: "text-gray2 ml-1"
}, vs = {
    class: "balance-right"
}, gs = {
    class: "b-text-3"
}, xs = {
    class: "b-text-4"
}, ys = {
    class: "bottom-balance mt-4"
}, hs = {
    class: "balance-left"
}, fs = {
    class: "items-center flex-col flex"
}, bs = {
    class: "percentage-value"
}, ws = {
    class: "flex flex-col align-baseline price-indi"
}, As = {
    class: "text-12 text-gray5 price-indi-desc mt-1"
}, Ss = {
    class: "balance-right",
    style: {
        "align-items": "center"
    }
}, ks = {
    class: "items-center flex-col flex"
}, Cs = {
    class: "percentage-value"
}, _s = {
    class: "flex flex-col align-baseline price-indi"
}, Is = {
    class: "text-12 text-gray5 price-indi-desc mt-1"
}, Ps = {
    class: "more-info3 mt-2"
}, js = {
    key: 0,
    class: "coins-text"
}, Es = ["src"], Ls = {
    class: "first-text-coins"
}, Vs = {
    class: "sec-text-coins"
}, Ts = {
    class: "coin-click-data"
}, Bs = {
    key: 0
}, Os = {
    class: "mb-1 text-12 flex expand-data"
}, Ds = {
    key: 0,
    class: "line-expand",
    style: {
        "max-width": "100%"
    }
}, Ws = {
    class: "mb-1 text-12 flex expand-data"
}, zs = {
    key: 0,
    class: "line-expand"
}, Us = {
    class: "text-gray5"
}, Ns = {
    key: 1,
    class: "line-expand"
}, Fs = {
    class: "text-gray5"
}, Rs = {
    class: "mb-1 text-12 flex expand-data"
}, Zs = {
    key: 0,
    class: "line-expand"
}, Ks = {
    class: "text-gray5"
}, qs = {
    key: 1,
    class: "line-expand"
}, Hs = {
    class: "text-gray5"
}, Ms = {
    class: "mb-1 text-12 flex expand-data"
}, $s = {
    key: 0,
    class: "line-expand"
}, Gs = {
    class: "text-gray5"
}, Xs = {
    key: 1,
    class: "line-expand"
}, Ys = {
    class: "text-gray5"
}, Js = {
    class: "mb-1 text-12 flex expand-data"
}, Qs = {
    key: 0,
    class: "line-expand"
}, ei = {
    class: "text-gray5"
}, ti = {
    key: 1,
    class: "line-expand"
}, ai = {
    class: "text-gray5"
}, li = {
    class: "mb-1 text-12 flex expand-data"
}, si = {
    key: 0,
    class: "line-expand"
}, ii = {
    class: "text-gray5"
}, ri = {
    key: 1,
    class: "line-expand"
}, ni = {
    class: "text-gray5"
}, oi = {
    key: 1
}, di = {
    class: "flex justify-center items-center mt-5"
}, ci = {
    width: "330px",
    height: "180px",
    style: {
        top: "126px",
        display: "flex",
        "flex-direction": "column",
        "align-items": "center",
        "justify-content": "center",
        width: "330px",
        height: "180px"
    },
    class: "items-center justify-center",
    initial: {
        opacity: 0,
        y: 0,
        scale: .5
    },
    enter: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 25,
            damping: 10,
            mass: 1,
            delay: 100
        }
    }
}, ui = {
    style: {
        width: "210px"
    }
}, mi = {
    class: "title-nw mt-2 text-gray4",
    style: {
        display: "flex",
        position: "relative",
        "justify-content": "start",
        "padding-left": "36px",
        top: "-33px",
        "font-size": "12px"
    }
}, pi = {
    key: 2
}, vi = {
    class: "flex items-center w-100"
}, gi = se(a({
    __name: "AiDashboard",
    setup(a) {
        const {
            Api: u
        } = t(), C = i(!0), P = i(!0), j = A(), E = k();
        b();
        const {
            t: B
        } = s(), O = i(window.innerWidth <= 767), D = i("");
        i("");
        const W = i(0),
            z = i(!1),
            U = i(!1),
            N = {
                minimumFractionDigits: 0,
                maximumFractionDigits: 8
            },
            F = i(!1);
        i(!1), i(!1);
        const K = w((() => H.allOrders.filter((e => !D.value || e.instrument.toLowerCase().includes(D.value.toLowerCase())))));
        let q;
        I((() => {
            q = ce.throttle((() => {
                O.value = window.innerWidth <= 767
            }), 100), window.addEventListener("resize", q)
        })), L((() => {
            window.removeEventListener("resize", q)
        }));
        const H = l({
                currentCoin: {},
                wallet: {
                    base: 0,
                    coin: 0
                },
                tableData: [],
                allOrders: [],
                allExchanges: [],
                allBinancePositions: []
            }),
            M = S(),
            $ = i(0),
            G = i(0),
            X = i(0),
            Y = e => {
                H.currentCoin = e, j.isAppOn ? window.ReactNativeWebView.postMessage(JSON.stringify({
                    opzkey: "coinmenu",
                    value: e.name
                })) : z.value = !0
            },
            Q = i(Date.now());
        I((() => {
            const e = setInterval((() => {
                Q.value = Date.now()
            }), 5e3);
            L((() => {
                clearInterval(e), clearInterval(Pe), clearInterval(je)
            }))
        }));
        const ee = e => {
                if (!j.tradeWalletId || j.tradeWalletId <= 1) return void(P.value = !1);
                e || (P.value = !0);
                const t = new FormData;
                t.append("apiId", j.tradeWalletId.toString()), u.getStreamOpenPositions(t).then((t => {
                    200 == t.status && 0 == t.data.code && t.data.data && t.data.data.length > 0 && (H.allBinancePositions = t.data.data), e || (P.value = !1)
                }))
            },
            ae = () => {
                if (!j.tradeWalletId || j.tradeWalletId <= 1) return void(C.value = !1);
                C.value = !0;
                const e = new FormData;
                e.append("apiId", j.tradeWalletId.toString()), u.getStreamOpenOrders(e).then((e => {
                    if (200 == e.status && 0 == e.data.code && e.data.data) {
                        if (e.data.data.allOpenOrders) {
                            for (const t of e.data.data.allOpenOrders) t.busyAi = !1, t.hasAi = !1, j.getTradingAdvice(t.id);
                            H.allOrders = e.data.data.allOpenOrders
                        } else H.allOrders = [];
                        le(), C.value = !1
                    } else C.value = !1
                }))
            };
        r((() => j.tradeWalletId), ((e, t) => {
            t != e && ae()
        }));
        const le = () => {
            for (const e of H.allOrders) {
                const t = j.getTradingAdvice(e.id);
                e.tradingAdvice = [], t && (e.tradingAdvice = t, e.hasAi = !0)
            }
        };
        ae();
        u.getOPZBalance().then((({
            data: e
        }) => {
            0 == e.code && e.data && (W.value = e.data)
        }));
        const se = (e, t = 3, a = !1) => {
                var l;
                a ? Y(e) : ke(e);
                const s = {
                    trigger: e.trigger,
                    type: e.type,
                    originalAmount: e.originalAmount,
                    instrument: e.instrument,
                    id: e.id,
                    timestamp: e.timestamp,
                    status: e.status,
                    cumulativeAmount: null !== e.cumulativeAmount ? e.cumulativeAmount : null,
                    averagePrice: e.averagePrice || null,
                    leverage: e.leverage || null,
                    limitPrice: e.limitPrice || 0,
                    remainingAmount: e.remainingAmount,
                    fee: (null == (l = null == j ? void 0 : j.selectedAiData) ? void 0 : l.id) ? ? 0
                };
                e.busyAi = !0, u.orderQuery(s).then((({
                    data: l
                }) => {
                    if (0 == l.code) {
                        if (l.data)
                            if (l.data.healthScoreLongterm) {
                                W.value -= .1;
                                const t = { ...l.data,
                                    id: e.id,
                                    timestamp: Date.now()
                                };
                                e.tradingAdvice = t, j.addOrUpdateTradingAdvice(t), e.hasAi = !0
                            } else {
                                if (l.data.retry && t > 0) return void se(e, t - 1, a);
                                l.message && "ERROR" != l.message ? M.error(l.message) : M.error(B("pga.server-busy-try-later"))
                            }
                    } else l.message && "ERROR" != l.message ? M.error(l.message) : M.error(B("pga.server-busy-try-later"));
                    e.busyAi = !1
                })).catch((t => {
                    M.error(B("pga.server-busy-try-later")), e.busyAi = !1
                }))
            },
            re = w((() => !C.value)),
            ne = i(!1);

        function Ae(e) {
            return new Intl.DateTimeFormat("en-GB", {
                timeStyle: "medium",
                dateStyle: "short",
                timeZone: "UTC"
            }).format(new Date(e))
        }
        r(re, (e => {
            e && !ne.value && (H.tableData.forEach((e => {
                e.balance = e.mpcBalance, e.usdTotal = e.balance * e.usdRate, $.value += e.usdTotal, G.value += e.frozenBalance * e.usdRate, e.availBalance = e.balance - e.frozenBalance, X.value += e.availBalance
            })), H.tableData.sort(((e, t) => t.usdTotal - e.usdTotal)), ne.value = !0)
        }));
        const Se = (e, t) => {
                if (t.length > 0) {
                    Ce.value = [];
                    for (let e = 0; e < t.length; e++) Ce.value.push(t[e].timestamp)
                } else Ce.value = []
            },
            ke = e => {
                Ce.value.includes(e.timestamp) || Ce.value.push(e.timestamp)
            },
            Ce = i([]),
            _e = i("Generating Analysis"),
            Ie = i("");
        let Pe;
        let je;
        (() => {
            const e = [".", "..", "..."];
            let t = 0;
            Pe = setInterval((() => {
                _e.value = `Generating Analysis${e[t%e.length]}`, Ie.value = `${e[t%e.length]}`, t++
            }), 500)
        })();
        je = setInterval((() => {
            "1" == Ve.value && ee(!0)
        }), 1e4);
        const Ee = new Set(["BTC/USDT", "ETH/USDT", "BTC/USDT/PERP", "ETH/USDT/PERP"]),
            Le = e => {
                const t = Q.value - e,
                    a = Math.floor(t / 1e3),
                    l = Math.floor(t / 6e4),
                    s = Math.floor(t / 36e5);
                if (a < 1) return "1s";
                if (a < 60) return `${a}s`;
                if (l < 60) return `${l}m`;
                if (s < 24) return `${s}h`; {
                    const t = {
                        year: "numeric",
                        month: "long",
                        day: "numeric"
                    };
                    return new Date(e).toLocaleDateString(void 0, t)
                }
            },
            Ve = i("0"),
            Te = e => {
                var t, a;
                e && e.length > 0 ? (Ve.value = null == (a = null == (t = e.find((e => e.id === j.tradeWalletId))) ? void 0 : t.typeExchange) ? void 0 : a.toString(), H.allExchanges = e, "1" == Ve.value && ee()) : (Ve.value = "0", H.allExchanges = [])
            };
        return (t, a) => {
            const l = e,
                s = V("motion");
            return n(), o(p, null, [y("div", Na, [y("div", null, [d(It, {
                modelValue: H.allExchanges,
                "onUpdate:modelValue": a[0] || (a[0] = e => H.allExchanges = e),
                onChangeExchanges: Te
            }, null, 8, ["modelValue"])]), y("div", Fa, [y("div", Ra, [d(x(he), {
                "default-active": Ve.value,
                class: "mt-2 mb-3",
                style: {
                    "min-width": "400px",
                    "margin-bottom": "1px"
                },
                mode: "horizontal",
                "text-color": "white"
            }, {
                default: c((() => [d(x(ye), {
                    index: "0",
                    style: {
                        color: "white !important"
                    },
                    disabled: "1" == Ve.value
                }, {
                    default: c((() => [_(h(x(B)("exh.spot")), 1)])),
                    _: 1
                }, 8, ["disabled"]), d(x(ye), {
                    index: "1",
                    style: {
                        color: "white !important"
                    },
                    disabled: "1" != Ve.value
                }, {
                    default: c((() => [_(h(x(B)("inx.futures")), 1)])),
                    _: 1
                }, 8, ["disabled"]), d(x(ye), {
                    index: "3",
                    style: {
                        color: "white !important"
                    },
                    disabled: ""
                }, {
                    default: c((() => [_(h(x(B)("exh.margin")), 1)])),
                    _: 1
                })])),
                _: 1
            }, 8, ["default-active"]), "1" === Ve.value ? (n(), o("div", Za, [d(Ua, {
                loading: P.value,
                item: H.allBinancePositions[0],
                opzBalance: W.value,
                isMobileWidth: O.value,
                onLowerBalance: a[1] || (a[1] = e => W.value -= .1)
            }, null, 8, ["loading", "item", "opzBalance", "isMobileWidth"]), d(Ua, {
                loading: P.value,
                item: H.allBinancePositions[1],
                opzBalance: W.value,
                isMobileWidth: O.value,
                onLowerBalance: a[2] || (a[2] = e => W.value -= .1)
            }, null, 8, ["loading", "item", "opzBalance", "isMobileWidth"])])) : m("", !0), O.value ? (n(), o("div", Zl, [d(x(te), {
                modelValue: D.value,
                "onUpdate:modelValue": a[5] || (a[5] = e => D.value = e),
                placeholder: x(B)("dash.search-coin")
            }, {
                prefix: c((() => a[33] || (a[33] = [y("i", {
                    class: "el-input__icon fas fa-search"
                }, null, -1)]))),
                suffix: c((() => [d(x(we), {
                    modelValue: U.value,
                    "onUpdate:modelValue": a[4] || (a[4] = e => U.value = e),
                    label: x(B)("dash.hide-0-assets"),
                    size: "small"
                }, null, 8, ["modelValue", "label"])])),
                _: 1
            }, 8, ["modelValue", "placeholder"]), (n(!0), o(p, null, v(K.value, ((e, t) => {
                var l, s, i, r;
                return n(), o("div", {
                    key: t,
                    class: "table-coins"
                }, [y("div", Kl, [y("div", ql, [y("div", Hl, [y("img", {
                    class: "coins-img",
                    alt: "coin",
                    src: "/images/icons/coin/" + (null == (l = e.instrument.split("/")[0]) ? void 0 : l.toLowerCase()) + ".svg"
                }, null, 8, Ml), y("div", $l, [y("span", null, h(e.instrument), 1)]), y("div", Gl, [y("span", {
                    class: f(e.type.includes("ASK") ? "text-red-darken" : "text-green-darken")
                }, h(e.type), 3)])]), y("span", Xl, h(Ae(e.timestamp)), 1)]), y("div", Yl, [d(x(ie), {
                    onConfirm: t => W.value > .1 ? se(e, 3, !0) : x(E).push({
                        name: "presale"
                    }),
                    "icon-color": "#626AEF",
                    title: W.value > .1 ? "Start Analysis (0.1 OPZ)" : "Insufficient OPZ Balance",
                    width: "196",
                    "confirm-button-text": W.value > .1 ? x(B)("sett.start") : x(B)("exh.buy"),
                    "cancel-button-text": "Cancel",
                    position: "top",
                    disabled: e.busyAi
                }, {
                    reference: c((() => [d(x(pe), {
                        type: "primary",
                        disabled: e.busyAi || !x(Ee).has(e.instrument)
                    }, {
                        default: c((() => [_(h(x(Ee).has(e.instrument) ? "Start Analysis" : x(B)("pga.not-eligible")), 1)])),
                        _: 2
                    }, 1032, ["disabled"])])),
                    _: 2
                }, 1032, ["onConfirm", "title", "confirm-button-text", "disabled"]), e.hasAi && !e.busyAi ? (n(), o("span", Jl, h(x(B)("pga.last-update-time").replace(":time", Le(null == (s = e.tradingAdvice) ? void 0 : s.timestamp))), 1)) : m("", !0)])]), y("div", Ql, [a[42] || (a[42] = y("div", {
                    style: {
                        "align-items": "center",
                        display: "flex",
                        "justify-content": "center"
                    }
                }, [y("div", {
                    style: {
                        "border-top": "1px solid #2d2d2d",
                        width: "100%"
                    }
                })], -1)), y("div", es, [y("div", ts, [y("div", as, h(x(B)("depwi.amount")), 1), y("div", ls, [_(h(e.originalAmount.toLocaleString(void 0, { ...N
                })) + " ", 1), y("span", ss, h(e.instrument.split("/")[0]), 1)])]), y("div", is, [y("div", rs, h(x(B)("wall.filled")), 1), y("div", ns, [_(h((e.originalAmount - e.remainingAmount).toLocaleString(void 0, { ...N
                })) + " ", 1), y("span", os, h(e.instrument.split("/")[0]), 1)])])]), y("div", ds, [y("div", cs, [y("div", us, h(x(B)("exh.price")), 1), y("div", ms, [_(h((e.limitPrice && e.limitPrice > 0 ? e.limitPrice : e.averagePrice).toLocaleString(void 0, { ...N
                })) + " ", 1), y("span", ps, h(e.instrument.split("/")[1]), 1)])]), y("div", vs, [y("div", gs, h(x(B)("wall.status")), 1), y("div", xs, h(e.status), 1)])]), a[43] || (a[43] = y("div", {
                    class: "my-3",
                    style: {
                        "align-items": "center",
                        display: "flex",
                        "justify-content": "center"
                    }
                }, [y("div", {
                    style: {
                        "border-top": "1px solid #2d2d2d",
                        width: "100%"
                    }
                })], -1)), y("div", ys, [y("div", hs, [y("div", fs, [d(x(J), {
                    placement: "top",
                    trigger: "hover",
                    width: 222,
                    persistent: !1,
                    disabled: e.busyAi || !(null == (i = e.tradingAdvice) ? void 0 : i.healthScoreShorttermDescription)
                }, {
                    reference: c((() => {
                        var t, l;
                        return [d(x(ve), {
                            type: "dashboard",
                            percentage: e.hasAi && !e.busyAi ? e.tradingAdvice.healthScoreShortterm : 100,
                            color: e.hasAi && !e.busyAi ? x(R)(null == (t = e.tradingAdvice) ? void 0 : t.healthScoreShortterm) : "#7303fc",
                            width: 60,
                            indeterminate: !0,
                            duration: 5,
                            status: e.hasAi && !e.busyAi ? x(Z)(null == (l = e.tradingAdvice) ? void 0 : l.healthScoreShortterm) : "",
                            striped: "",
                            "striped-flow": ""
                        }, {
                            default: c((({
                                percentage: t
                            }) => [y("span", bs, h(e.busyAi ? Ie.value : e.hasAi ? t : "-"), 1), a[34] || (a[34] = y("span", {
                                class: "percentage-label"
                            }, [y("i", {
                                "aria-hidden": "true",
                                class: "iconify sidebar-svg",
                                "data-icon": "feather:activity"
                            })], -1))])),
                            _: 2
                        }, 1032, ["percentage", "color", "status"])]
                    })),
                    default: c((() => {
                        var t;
                        return [y("div", ws, [a[35] || (a[35] = y("p", {
                            class: "text-12 text-gray-darken"
                        }, "ShortTerm HealthScore", -1)), y("p", As, h(null == (t = e.tradingAdvice) ? void 0 : t.healthScoreShorttermDescription), 1), a[36] || (a[36] = y("p", {
                            class: "text-10 text-gray5 price-indi-desc mt-2 help"
                        }, " Please Note: OPZ-AI is in Beta. Its use is completely at your own risk. It is important to conduct thorough research and consult with a financial advisor before making any investment decisions. ", -1))])]
                    })),
                    _: 2
                }, 1032, ["disabled"]), a[37] || (a[37] = y("p", {
                    class: "text-12 text-medium text-gray4"
                }, h("ShortTerm"), -1))])]), y("div", Ss, [y("div", ks, [d(x(J), {
                    placement: "top",
                    trigger: "hover",
                    width: 222,
                    persistent: !1,
                    disabled: e.busyAi || !(null == (r = e.tradingAdvice) ? void 0 : r.healthScoreLongtermDescription)
                }, {
                    reference: c((() => {
                        var t, l;
                        return [d(x(ve), {
                            type: "dashboard",
                            percentage: e.hasAi && !e.busyAi ? e.tradingAdvice.healthScoreLongterm : 100,
                            color: e.hasAi && !e.busyAi ? x(R)(null == (t = e.tradingAdvice) ? void 0 : t.healthScoreLongterm) : "#7303fc",
                            width: 60,
                            indeterminate: !0,
                            duration: 5,
                            status: e.hasAi && !e.busyAi ? x(Z)(null == (l = e.tradingAdvice) ? void 0 : l.healthScoreLongterm) : "",
                            striped: "",
                            "striped-flow": ""
                        }, {
                            default: c((({
                                percentage: t
                            }) => [y("span", Cs, h(e.busyAi ? Ie.value : e.hasAi ? t : "-"), 1), a[38] || (a[38] = y("span", {
                                class: "percentage-label"
                            }, [y("i", {
                                "aria-hidden": "true",
                                class: "iconify sidebar-svg",
                                "data-icon": "feather:activity"
                            })], -1))])),
                            _: 2
                        }, 1032, ["percentage", "color", "status"])]
                    })),
                    default: c((() => {
                        var t;
                        return [y("div", _s, [a[39] || (a[39] = y("p", {
                            class: "text-12 text-gray-darken"
                        }, "LongTerm HealthScore", -1)), y("p", Is, h(null == (t = e.tradingAdvice) ? void 0 : t.healthScoreLongtermDescription), 1), a[40] || (a[40] = y("p", {
                            class: "text-10 text-gray5 price-indi-desc mt-2 help"
                        }, " Please Note: OPZ-AI is in Beta. Its use is completely at your own risk. It is important to conduct thorough research and consult with a financial advisor before making any investment decisions. ", -1))])]
                    })),
                    _: 2
                }, 1032, ["disabled"]), a[41] || (a[41] = y("p", {
                    class: "text-12 text-medium text-gray4"
                }, h("LongTerm"), -1))])])]), y("div", Ps, [e.hasAi && !e.busyAi ? (n(), g(x(pe), {
                    key: 0,
                    onClick: t => Y(e),
                    type: "primary",
                    disabled: e.busyAi || !x(Ee).has(e.instrument),
                    class: "text-12 mt-1"
                }, {
                    default: c((() => [_(h(x(Ee).has(e.instrument) ? x(B)("pga.view-more") : x(B)("pga.not-eligible")), 1)])),
                    _: 2
                }, 1032, ["onClick", "disabled"])) : m("", !0)])])])
            })), 128))])) : (n(), o("div", Ka, [T((n(), g(x(be), {
                data: K.value,
                "tooltip-effect": "dark",
                class: "slim-table",
                style: {
                    width: "100%"
                },
                "cell-class-name": "cell-wallet",
                "element-loading-background": "rgba(0, 0, 0, 0.8)",
                "element-loading-text": x(B)("pga.loading"),
                "element-loading-spinner": x(ue),
                "element-loading-svg-view-box": "-10, -10, 50, 50",
                "row-key": "timestamp",
                "expand-row-keys": Ce.value,
                "default-sort": {
                    prop: "timestamp",
                    order: "descending"
                },
                onExpandChange: Se
            }, {
                default: c((() => [d(x(fe), {
                    label: "AI",
                    type: "expand"
                }, {
                    default: c((e => {
                        var t, i, r, u, p, v, g, f, b, w;
                        return [e.row.hasAi && !e.row.busyAi ? (n(), o("div", qa, [y("div", Ha, [e.row.status ? (n(), o("div", Ma, a[9] || (a[9] = [y("span", {
                            class: "text-gray1 mr-2 text-regular"
                        }, "Please Note:", -1), y("span", {
                            class: "text-gray5"
                        }, "OPZ-AI is in Beta. Its use is completely at your own risk. It is important to conduct thorough research and consult with a financial advisor before making any investment decisions.", -1)]))) : m("", !0)]), a[20] || (a[20] = y("div", {
                            class: "my-4",
                            style: {
                                "align-items": "center",
                                display: "flex",
                                "justify-content": "center"
                            }
                        }, [y("div", {
                            style: {
                                "border-top": "1px solid #2d2d2d",
                                width: "100%"
                            }
                        })], -1)), y("div", $a, [e.row.status ? (n(), o("div", Ga, [a[10] || (a[10] = y("span", {
                            class: "text-gray1 mr-2 text-regular"
                        }, "HealthScore Shortterm:", -1)), y("span", Xa, h(null == (t = e.row.tradingAdvice) ? void 0 : t.healthScoreShorttermDescription), 1)])) : m("", !0), e.row.status ? (n(), o("div", Ya, [a[11] || (a[11] = y("span", {
                            class: "text-gray1 mr-2 text-regular"
                        }, "HealthScore Longterm", -1)), y("span", Ja, h(null == (i = e.row.tradingAdvice) ? void 0 : i.healthScoreShorttermDescription), 1)])) : m("", !0), e.row.status ? (n(), o("div", Qa, [a[12] || (a[12] = y("span", {
                            class: "text-gray1 mr-2 text-regular"
                        }, "News Impact", -1)), y("span", el, h(null == (r = e.row.tradingAdvice) ? void 0 : r.recentNewsImpact), 1)])) : m("", !0), e.row.status ? (n(), o("div", tl, [a[13] || (a[13] = y("span", {
                            class: "text-gray1 mr-2 text-regular"
                        }, "Market Sentiment", -1)), y("span", al, h(null == (u = e.row.tradingAdvice) ? void 0 : u.marketSentiment), 1)])) : m("", !0)]), a[21] || (a[21] = y("div", {
                            class: "my-4",
                            style: {
                                "align-items": "center",
                                display: "flex",
                                "justify-content": "center"
                            }
                        }, [y("div", {
                            style: {
                                "border-top": "1px solid #2d2d2d",
                                width: "100%"
                            }
                        })], -1)), y("div", ll, [e.row.status ? (n(), o("div", sl, [a[14] || (a[14] = y("span", {
                            class: "text-gray1 mr-2 text-regular"
                        }, "Action Shortterm:", -1)), y("span", il, h(null == (p = e.row.tradingAdvice) ? void 0 : p.NextActionShorttermDescription), 1)])) : m("", !0), e.row.status ? (n(), o("div", rl, [a[15] || (a[15] = y("span", {
                            class: "text-gray1 mr-2 text-regular"
                        }, "Action Longterm", -1)), y("span", nl, h(null == (v = e.row.tradingAdvice) ? void 0 : v.NextActionLongtermDescription), 1)])) : m("", !0)]), a[22] || (a[22] = y("div", {
                            class: "my-4",
                            style: {
                                "align-items": "center",
                                display: "flex",
                                "justify-content": "center"
                            }
                        }, [y("div", {
                            style: {
                                "border-top": "1px solid #2d2d2d",
                                width: "100%"
                            }
                        })], -1)), y("div", ol, [e.row.status ? (n(), o("div", dl, [a[16] || (a[16] = y("span", {
                            class: "text-gray1 mr-2 text-regular"
                        }, "StopLoss Price Shortterm:", -1)), y("span", cl, h(null == (g = e.row.tradingAdvice) ? void 0 : g.StopLossAdvicePriceShortterm), 1)])) : m("", !0), e.row.status ? (n(), o("div", ul, [a[17] || (a[17] = y("span", {
                            class: "text-gray1 mr-2 text-regular"
                        }, "StopLoss Price Longterm:", -1)), y("span", ml, h(null == (f = e.row.tradingAdvice) ? void 0 : f.StopLossAdvicePriceLongterm), 1)])) : m("", !0), e.row.status ? (n(), o("div", pl, [a[18] || (a[18] = y("span", {
                            class: "text-gray1 mr-2 text-regular"
                        }, "StopLoss Advice Shortterm:", -1)), y("span", vl, h(null == (b = e.row.tradingAdvice) ? void 0 : b.StopLossAdviceShortterm), 1)])) : m("", !0), e.row.status ? (n(), o("div", gl, [a[19] || (a[19] = y("span", {
                            class: "text-gray1 mr-2 text-regular"
                        }, "StopLoss Advice Longterm:", -1)), y("span", xl, h(null == (w = e.row.tradingAdvice) ? void 0 : w.StopLossAdviceLongterm), 1)])) : m("", !0)])])) : e.row.busyAi ? (n(), o("div", yl, [y("div", hl, [T((n(), o("div", fl, [d(x(de), {
                            class: "fbz-img-lt",
                            animationLink: "/assets/animated/ai5.json",
                            height: 90,
                            width: 90
                        }), d(l, {
                            width: "210px",
                            height: "30px",
                            style: {
                                "border-radius": "3px",
                                "margin-top": "12px"
                            }
                        }), y("div", bl, [y("p", wl, h(_e.value), 1)])])), [
                            [s]
                        ])])])) : (n(), o("div", Al, [y("div", Sl, [d(x(ge), {
                            "wrap-class": "scroll-wrap",
                            class: "scroll-more flex",
                            "view-class": "scroll-view",
                            style: {
                                "justify-content": "left",
                                "align-items": "center"
                            }
                        }, {
                            default: c((() => [d(x(ie), {
                                onConfirm: t => W.value > .1 ? se(e.row) : x(E).push({
                                    name: "presale"
                                }),
                                "icon-color": "#626AEF",
                                title: W.value > .1 ? "Start Analysis (0.1 OPZ)" : "Insufficient OPZ Balance",
                                width: "196",
                                "confirm-button-text": W.value > .1 ? x(B)("sett.start") : x(B)("exh.buy"),
                                "cancel-button-text": "Cancel",
                                disabled: e.row.busyAi
                            }, {
                                reference: c((() => [d(x(pe), {
                                    class: "btn-more",
                                    type: "primary",
                                    disabled: e.row.busyAi || !x(Ee).has(e.row.instrument)
                                }, {
                                    default: c((() => [_(h(x(Ee).has(e.row.instrument) ? "Start Analysis" : x(B)("pga.not-eligible")), 1)])),
                                    _: 2
                                }, 1032, ["disabled"])])),
                                _: 2
                            }, 1032, ["onConfirm", "title", "confirm-button-text", "disabled"])])),
                            _: 2
                        }, 1024)])]))]
                    })),
                    _: 1
                }), d(x(fe), {
                    label: x(B)("wall.symbol"),
                    prop: "instrument",
                    width: "200",
                    sortable: ""
                }, {
                    default: c((e => {
                        var t;
                        return [y("span", kl, [y("img", {
                            class: "imgSelect",
                            src: "/images/icons/coin/" + (null == (t = e.row.instrument.split("/")[0]) ? void 0 : t.toLowerCase()) + ".svg"
                        }, null, 8, Cl)]), y("div", _l, [y("span", Il, h(e.row.instrument), 1)])]
                    })),
                    _: 1
                }, 8, ["label"]), d(x(fe), {
                    label: x(B)("wall.order-time"),
                    prop: "timestamp",
                    width: "165",
                    "class-name": "timeColumn",
                    sortable: ""
                }, {
                    default: c((e => [_(h(Ae(e.row.timestamp)), 1)])),
                    _: 1
                }, 8, ["label"]), d(x(fe), {
                    label: x(B)("wall.direction"),
                    width: "90"
                }, {
                    default: c((e => [y("div", {
                        class: f(e.row.type.includes("ASK") ? "text-red-darken" : "text-green-darken")
                    }, h(e.row.type), 3)])),
                    _: 1
                }, 8, ["label"]), d(x(fe), {
                    label: x(B)("exh.trigger"),
                    width: "105"
                }, {
                    default: c((e => {
                        return [_(h((t = e.row.trigger, t ? t.charAt(0).toUpperCase() + t.slice(1).toLowerCase() : "")), 1)];
                        var t
                    })),
                    _: 1
                }, 8, ["label"]), d(x(fe), {
                    label: x(B)("depwi.amount")
                }, {
                    default: c((e => [_(h(e.row.originalAmount.toLocaleString(void 0, { ...N
                    })) + " ", 1), y("span", Pl, h(e.row.instrument.split("/")[0]), 1)])),
                    _: 1
                }, 8, ["label"]), d(x(fe), {
                    prop: "filled",
                    label: x(B)("wall.filled")
                }, {
                    default: c((e => [_(h((e.row.originalAmount - e.row.remainingAmount).toLocaleString(void 0, { ...N
                    })) + " ", 1), y("span", jl, h(e.row.instrument.split("/")[0]), 1)])),
                    _: 1
                }, 8, ["label"]), d(x(fe), {
                    label: x(B)("exh.price")
                }, {
                    default: c((e => [_(h((e.row.limitPrice && e.row.limitPrice > 0 ? e.row.limitPrice : e.row.averagePrice).toLocaleString(void 0, { ...N
                    })) + " ", 1), y("span", El, h(e.row.instrument.split("/")[1]), 1)])),
                    _: 1
                }, 8, ["label"]), d(x(fe), {
                    label: x(B)("wall.status"),
                    width: "105"
                }, {
                    default: c((e => [_(h(e.row.status), 1)])),
                    _: 1
                }, 8, ["label"]), d(x(fe), {
                    width: "150",
                    label: "HealthScore",
                    align: "center"
                }, {
                    default: c((e => {
                        var t, l;
                        return [y("div", Ll, [y("div", Vl, [d(x(J), {
                            placement: "top",
                            trigger: "hover",
                            width: 222,
                            persistent: !1,
                            disabled: e.row.busyAi || !(null == (t = e.row.tradingAdvice) ? void 0 : t.healthScoreShorttermDescription)
                        }, {
                            reference: c((() => {
                                var t, l;
                                return [d(x(ve), {
                                    type: "dashboard",
                                    percentage: e.row.hasAi && !e.row.busyAi ? e.row.tradingAdvice.healthScoreShortterm : 100,
                                    color: e.row.hasAi && !e.row.busyAi ? x(R)(null == (t = e.row.tradingAdvice) ? void 0 : t.healthScoreShortterm) : "#7303fc",
                                    width: 60,
                                    indeterminate: !0,
                                    duration: 5,
                                    status: e.row.hasAi && !e.row.busyAi ? x(Z)(null == (l = e.row.tradingAdvice) ? void 0 : l.healthScoreShortterm) : "",
                                    striped: "",
                                    "striped-flow": ""
                                }, {
                                    default: c((({
                                        percentage: t
                                    }) => [y("span", Tl, h(e.row.busyAi ? Ie.value : e.row.hasAi ? t : "-"), 1), a[23] || (a[23] = y("span", {
                                        class: "percentage-label"
                                    }, [y("i", {
                                        "aria-hidden": "true",
                                        class: "iconify sidebar-svg",
                                        "data-icon": "feather:activity"
                                    })], -1))])),
                                    _: 2
                                }, 1032, ["percentage", "color", "status"])]
                            })),
                            default: c((() => {
                                var t;
                                return [y("div", Bl, [a[24] || (a[24] = y("p", {
                                    class: "text-12 text-gray-darken"
                                }, "ShortTerm HealthScore", -1)), y("p", Ol, h(null == (t = e.row.tradingAdvice) ? void 0 : t.healthScoreShorttermDescription), 1), a[25] || (a[25] = y("p", {
                                    class: "text-10 text-gray5 price-indi-desc mt-2 help"
                                }, " Please Note: OPZ-AI is in Beta. Its use is completely at your own risk. It is important to conduct thorough research and consult with a financial advisor before making any investment decisions. ", -1))])]
                            })),
                            _: 2
                        }, 1032, ["disabled"]), a[26] || (a[26] = y("p", {
                            class: "text-12 text-medium text-gray4"
                        }, h("ShortTerm"), -1))]), y("div", Dl, [d(x(J), {
                            placement: "top",
                            trigger: "hover",
                            width: 222,
                            persistent: !1,
                            disabled: e.row.busyAi || !(null == (l = e.row.tradingAdvice) ? void 0 : l.healthScoreLongtermDescription)
                        }, {
                            reference: c((() => {
                                var t, l;
                                return [d(x(ve), {
                                    type: "dashboard",
                                    percentage: e.row.hasAi && !e.row.busyAi ? e.row.tradingAdvice.healthScoreLongterm : 100,
                                    color: e.row.hasAi && !e.row.busyAi ? x(R)(null == (t = e.row.tradingAdvice) ? void 0 : t.healthScoreLongterm) : "#7303fc",
                                    width: 60,
                                    indeterminate: !0,
                                    duration: 5,
                                    status: e.row.hasAi && !e.row.busyAi ? x(Z)(null == (l = e.row.tradingAdvice) ? void 0 : l.healthScoreLongterm) : "",
                                    striped: "",
                                    "striped-flow": ""
                                }, {
                                    default: c((({
                                        percentage: t
                                    }) => [y("span", Wl, h(e.row.busyAi ? Ie.value : e.row.hasAi ? t : "-"), 1), a[27] || (a[27] = y("span", {
                                        class: "percentage-label"
                                    }, [y("i", {
                                        "aria-hidden": "true",
                                        class: "iconify sidebar-svg",
                                        "data-icon": "feather:activity"
                                    })], -1))])),
                                    _: 2
                                }, 1032, ["percentage", "color", "status"])]
                            })),
                            default: c((() => {
                                var t;
                                return [y("div", zl, [a[28] || (a[28] = y("p", {
                                    class: "text-12 text-gray-darken"
                                }, "LongTerm HealthScore", -1)), y("p", Ul, h(null == (t = e.row.tradingAdvice) ? void 0 : t.healthScoreLongtermDescription), 1), a[29] || (a[29] = y("p", {
                                    class: "text-10 text-gray5 price-indi-desc mt-2 help"
                                }, " Please Note: OPZ-AI is in Beta. Its use is completely at your own risk. It is important to conduct thorough research and consult with a financial advisor before making any investment decisions. ", -1))])]
                            })),
                            _: 2
                        }, 1032, ["disabled"]), a[30] || (a[30] = y("p", {
                            class: "text-12 text-medium text-gray4"
                        }, h("LongTerm"), -1))])])]
                    })),
                    _: 1
                }), d(x(fe), {
                    align: "right",
                    "min-width": "90",
                    width: "180"
                }, {
                    header: c((() => [y("div", Nl, [d(x(te), {
                        modelValue: D.value,
                        "onUpdate:modelValue": a[3] || (a[3] = e => D.value = e),
                        size: "small",
                        style: {
                            "max-width": "100%"
                        },
                        placeholder: x(B)("dash.search")
                    }, {
                        prefix: c((() => a[31] || (a[31] = [y("i", {
                            class: "el-input__icon fas fa-search"
                        }, null, -1)]))),
                        suffix: c((() => a[32] || (a[32] = []))),
                        _: 1
                    }, 8, ["modelValue", "placeholder"])])])),
                    default: c((e => {
                        var t;
                        return [y("div", Fl, [d(x(ie), {
                            onConfirm: t => W.value > .1 ? se(e.row) : x(E).push({
                                name: "presale"
                            }),
                            "icon-color": "#626AEF",
                            title: W.value > .1 ? "Start Analysis (0.1 OPZ)" : "Insufficient OPZ Balance",
                            width: "196",
                            "confirm-button-text": W.value > .1 ? x(B)("sett.start") : x(B)("exh.buy"),
                            "cancel-button-text": "Cancel",
                            position: "top",
                            disabled: e.row.busyAi
                        }, {
                            reference: c((() => [d(x(pe), {
                                class: "btn-more",
                                type: "primary",
                                disabled: e.row.busyAi || !x(Ee).has(e.row.instrument)
                            }, {
                                default: c((() => [_(h(x(Ee).has(e.row.instrument) ? "Start Analysis" : x(B)("pga.not-eligible")), 1)])),
                                _: 2
                            }, 1032, ["disabled"])])),
                            _: 2
                        }, 1032, ["onConfirm", "title", "confirm-button-text", "disabled"]), e.row.hasAi && !e.row.busyAi ? (n(), o("span", Rl, h(x(B)("pga.last-update-time").replace(":time", Le(null == (t = e.row.tradingAdvice) ? void 0 : t.timestamp))), 1)) : m("", !0)])]
                    })),
                    _: 1
                })])),
                _: 1
            }, 8, ["data", "element-loading-text", "element-loading-spinner", "expand-row-keys"])), [
                [x(oe), !re.value]
            ])]))])])]), d(x(xe), {
                modelValue: z.value,
                "onUpdate:modelValue": a[7] || (a[7] = e => z.value = e),
                class: "drawerCoinClick2",
                direction: "btt",
                size: 600,
                "lock-scroll": !0,
                "destroy-on-close": !0
            }, {
                header: c((() => {
                    var e;
                    return [H.currentCoin.instrument ? (n(), o("div", js, [H.currentCoin.instrument ? (n(), o("img", {
                        key: 0,
                        class: "coins-img",
                        alt: "coin",
                        src: "/images/icons/coin/" + (null == (e = H.currentCoin.instrument.split("/")[0]) ? void 0 : e.toLowerCase()) + ".svg"
                    }, null, 8, Es)) : m("", !0), y("div", Ls, [y("span", null, h(H.currentCoin.instrument), 1)]), y("div", Vs, [y("span", {
                        class: f(H.currentCoin.type.includes("ASK") ? "text-red-darken" : "text-green-darken")
                    }, h(H.currentCoin.type), 3)])])) : m("", !0)]
                })),
                default: c((() => {
                    var e, t, i, r, u, p, v, g, f, b;
                    return [y("div", Ts, [H.currentCoin.hasAi && !H.currentCoin.busyAi ? (n(), o("div", Bs, [y("div", Os, [H.currentCoin.status ? (n(), o("div", Ds, a[44] || (a[44] = [y("span", {
                        class: "text-gray1 mr-2 text-regular"
                    }, "Please Note:", -1), y("span", {
                        class: "text-gray5"
                    }, "OPZ-AI is in Beta. Its use is completely at your own risk. It is important to conduct thorough research and consult with a financial advisor before making any investment decisions.", -1)]))) : m("", !0)]), a[55] || (a[55] = y("div", {
                        class: "my-4",
                        style: {
                            "align-items": "center",
                            display: "flex",
                            "justify-content": "center"
                        }
                    }, [y("div", {
                        style: {
                            "border-top": "1px solid #2d2d2d",
                            width: "100%"
                        }
                    })], -1)), y("div", Ws, [H.currentCoin.status ? (n(), o("div", zs, [a[45] || (a[45] = y("span", {
                        class: "text-gray1 mr-2 text-regular"
                    }, "HealthScore Shortterm:", -1)), y("span", Us, h(null == (e = H.currentCoin.tradingAdvice) ? void 0 : e.healthScoreShorttermDescription), 1)])) : m("", !0), H.currentCoin.status ? (n(), o("div", Ns, [a[46] || (a[46] = y("span", {
                        class: "text-gray1 mr-2 text-regular"
                    }, "HealthScore Longterm", -1)), y("span", Fs, h(null == (t = H.currentCoin.tradingAdvice) ? void 0 : t.healthScoreShorttermDescription), 1)])) : m("", !0)]), a[56] || (a[56] = y("div", {
                        class: "my-4",
                        style: {
                            "align-items": "center",
                            display: "flex",
                            "justify-content": "center"
                        }
                    }, [y("div", {
                        style: {
                            "border-top": "1px solid #2d2d2d",
                            width: "100%"
                        }
                    })], -1)), y("div", Rs, [H.currentCoin.status ? (n(), o("div", Zs, [a[47] || (a[47] = y("span", {
                        class: "text-gray1 mr-2 text-regular"
                    }, "News Impact", -1)), y("span", Ks, h(null == (i = H.currentCoin.tradingAdvice) ? void 0 : i.recentNewsImpact), 1)])) : m("", !0), H.currentCoin.status ? (n(), o("div", qs, [a[48] || (a[48] = y("span", {
                        class: "text-gray1 mr-2 text-regular"
                    }, "Market Sentiment", -1)), y("span", Hs, h(null == (r = H.currentCoin.tradingAdvice) ? void 0 : r.marketSentiment), 1)])) : m("", !0)]), a[57] || (a[57] = y("div", {
                        class: "my-4",
                        style: {
                            "align-items": "center",
                            display: "flex",
                            "justify-content": "center"
                        }
                    }, [y("div", {
                        style: {
                            "border-top": "1px solid #2d2d2d",
                            width: "100%"
                        }
                    })], -1)), y("div", Ms, [H.currentCoin.status ? (n(), o("div", $s, [a[49] || (a[49] = y("span", {
                        class: "text-gray1 mr-2 text-regular"
                    }, "Action Shortterm:", -1)), y("span", Gs, h(null == (u = H.currentCoin.tradingAdvice) ? void 0 : u.NextActionShorttermDescription), 1)])) : m("", !0), H.currentCoin.status ? (n(), o("div", Xs, [a[50] || (a[50] = y("span", {
                        class: "text-gray1 mr-2 text-regular"
                    }, "Action Longterm", -1)), y("span", Ys, h(null == (p = H.currentCoin.tradingAdvice) ? void 0 : p.NextActionLongtermDescription), 1)])) : m("", !0)]), a[58] || (a[58] = y("div", {
                        class: "my-4",
                        style: {
                            "align-items": "center",
                            display: "flex",
                            "justify-content": "center"
                        }
                    }, [y("div", {
                        style: {
                            "border-top": "1px solid #2d2d2d",
                            width: "100%"
                        }
                    })], -1)), y("div", Js, [H.currentCoin.status ? (n(), o("div", Qs, [a[51] || (a[51] = y("span", {
                        class: "text-gray1 mr-2 text-regular"
                    }, "StopLoss Price Shortterm:", -1)), y("span", ei, h(null == (v = H.currentCoin.tradingAdvice) ? void 0 : v.StopLossAdvicePriceShortterm), 1)])) : m("", !0), H.currentCoin.status ? (n(), o("div", ti, [a[52] || (a[52] = y("span", {
                        class: "text-gray1 mr-2 text-regular"
                    }, "StopLoss Price Longterm:", -1)), y("span", ai, h(null == (g = H.currentCoin.tradingAdvice) ? void 0 : g.StopLossAdvicePriceLongterm), 1)])) : m("", !0)]), a[59] || (a[59] = y("div", {
                        class: "my-4",
                        style: {
                            "align-items": "center",
                            display: "flex",
                            "justify-content": "center"
                        }
                    }, [y("div", {
                        style: {
                            "border-top": "1px solid #2d2d2d",
                            width: "100%"
                        }
                    })], -1)), y("div", li, [H.currentCoin.status ? (n(), o("div", si, [a[53] || (a[53] = y("span", {
                        class: "text-gray1 mr-2 text-regular"
                    }, "StopLoss Advice Shortterm:", -1)), y("span", ii, h(null == (f = H.currentCoin.tradingAdvice) ? void 0 : f.StopLossAdviceShortterm), 1)])) : m("", !0), H.currentCoin.status ? (n(), o("div", ri, [a[54] || (a[54] = y("span", {
                        class: "text-gray1 mr-2 text-regular"
                    }, "StopLoss Advice Longterm:", -1)), y("span", ni, h(null == (b = H.currentCoin.tradingAdvice) ? void 0 : b.StopLossAdviceLongterm), 1)])) : m("", !0)]), a[60] || (a[60] = y("div", {
                        class: "my-2 mb-5 pb-5",
                        style: {
                            "align-items": "center",
                            display: "flex",
                            "justify-content": "center"
                        }
                    }, [y("div", {
                        style: {
                            "border-top": "1px solid #2d2d2d",
                            width: "100%"
                        }
                    })], -1))])) : H.currentCoin.busyAi ? (n(), o("div", oi, [y("div", di, [T((n(), o("div", ci, [d(x(de), {
                        class: "fbz-img-lt",
                        animationLink: "/assets/animated/ai5.json",
                        height: 90,
                        width: 90
                    }), d(l, {
                        width: "210px",
                        height: "30px",
                        style: {
                            "border-radius": "3px",
                            "margin-top": "12px"
                        }
                    }), y("div", ui, [y("p", mi, h(_e.value), 1)])])), [
                        [s]
                    ])])])) : (n(), o("div", pi, [y("div", vi, [d(x(ge), {
                        "wrap-class": "scroll-wrap",
                        class: "scroll-more flex",
                        "view-class": "scroll-view",
                        style: {
                            "justify-content": "left",
                            "align-items": "center"
                        }
                    }, {
                        default: c((() => [d(x(ie), {
                            onConfirm: a[6] || (a[6] = e => W.value > .1 ? se(H.currentCoin, 3, !0) : x(E).push({
                                name: "presale"
                            })),
                            "icon-color": "#626AEF",
                            title: W.value > .1 ? "Start Analysis (0.1 OPZ)" : "Insufficient OPZ Balance",
                            width: "196",
                            "confirm-button-text": W.value > .1 ? x(B)("sett.start") : x(B)("exh.buy"),
                            "cancel-button-text": "Cancel",
                            disabled: H.currentCoin.busyAi
                        }, {
                            reference: c((() => [d(x(pe), {
                                class: "btn-more",
                                type: "primary",
                                disabled: H.currentCoin.busyAi || !x(Ee).has(H.currentCoin.instrument)
                            }, {
                                default: c((() => [_(h(x(Ee).has(H.currentCoin.instrument) ? "Start Analysis" : x(B)("pga.not-eligible")), 1)])),
                                _: 1
                            }, 8, ["disabled"])])),
                            _: 1
                        }, 8, ["title", "confirm-button-text", "disabled"])])),
                        _: 1
                    })])]))])]
                })),
                _: 1
            }, 8, ["modelValue"]), d(me, {
                modelValue: F.value,
                "onUpdate:modelValue": a[8] || (a[8] = e => F.value = e)
            }, null, 8, ["modelValue"])], 64)
        }
    }
}), [
    ["__scopeId", "data-v-c4471f15"]
]), xi = {
    class: "page-content-inner"
}, yi = a({
    __name: "ai",
    setup(e) {
        const t = B();
        return Ae().setPageTitle("TradeScan AI"), I((() => {
            t.event("UserDasboard"), window.fbq2opz("trackCustom", "UserDasboard")
        })), O({
            title: "OPZ | TradeScan AI"
        }), (e, t) => {
            const a = gi;
            return n(), o("div", xi, [d(a)])
        }
    }
});
export {
    yi as
    default
};