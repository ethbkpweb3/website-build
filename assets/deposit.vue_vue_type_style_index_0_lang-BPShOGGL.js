import {
    m as e,
    Y as l,
    dm as a,
    h as s,
    a as t,
    K as i,
    y as u,
    I as d,
    z as n,
    o,
    j as r,
    n as c,
    w as m,
    q as v,
    t as p,
    X as h,
    s as f,
    v as w,
    l as g,
    P as x,
    cB as y,
    u as b,
    M as C,
    N as V,
    B as q
} from "./index-CQfCy4Xm.js";
import {
    t as W
} from "./index-DZwhim7i.js";
import {
    _ as k
} from "./doubleCheck.vue_vue_type_style_index_0_lang-CBr02gDU.js";
import {
    E as _
} from "./index-DhHA3mFI.js";
import {
    E as A,
    a as B
} from "./index-38aUouWI.js";
import {
    E as S,
    a as D
} from "./index-CBmmRNm0.js";
import {
    E as U
} from "./index-BaPl-dvV.js";
import {
    E as j
} from "./index-5N62XIoj.js";
import {
    _ as z
} from "./_plugin-vue_export-helper-BCo6x5W8.js";
import {
    _ as F
} from "./VPlaceload-DcvQMSN9.js";
import {
    i as N
} from "./vue-qrcode.esm-C-BWAPbN.js";
import {
    D as P
} from "./DownloadApp-CvKNuiGj.js";
import {
    E as R,
    a as E
} from "./directive-CUB6-Wra.js";
const I = {
        class: "flex text-gray4 head-title items-center mb-1"
    },
    L = {
        class: "columns deposit-content height-min"
    },
    T = {
        class: "column is-7 px-5"
    },
    G = {
        class: "field"
    },
    H = {
        class: "help text-medium mb-1"
    },
    M = {
        class: "imgParent"
    },
    $ = ["src"],
    J = {
        style: {
            float: "left"
        }
    },
    K = {
        style: {
            float: "right",
            color: "var(--el-text-color-secondary)",
            "font-size": "13px"
        }
    },
    O = {
        key: 0,
        class: "field"
    },
    X = {
        class: "help text-medium"
    },
    Z = {
        key: 1,
        class: "field"
    },
    Q = {
        class: "show-qrcode",
        style: {
            "text-align": "center",
            "padding-top": "5px",
            "border-radius": "10px"
        }
    },
    Y = {
        class: "help text-medium mb-1 text-left"
    },
    ee = {
        key: 0,
        class: "help text-medium mb-1 mt-2 text-left"
    },
    le = {
        class: "flex justify-between mt-2 mb-1"
    },
    ae = {
        class: "help text-medium"
    },
    se = {
        class: "help text-medium"
    },
    te = {
        class: "flex amountSelect"
    },
    ie = {
        class: "btn-widthdraw"
    },
    ue = {
        key: 2
    },
    de = {
        class: "column is-5"
    },
    ne = {
        key: 0,
        class: "calc-result"
    },
    oe = {
        class: "calc-result-title text-medium"
    },
    re = {
        class: "calc-result-item"
    },
    ce = {
        class: "calc-result-item-right text-medium"
    },
    me = {
        class: "calc-result-item-unit"
    },
    ve = {
        class: "calc-result-item-right text-medium"
    },
    pe = {
        class: "calc-result-item-unit"
    },
    he = {
        class: "calc-result-item-right text-medium"
    },
    fe = {
        class: "calc-result-item-unit"
    },
    we = {
        class: "calc-result-item-right text-medium"
    },
    ge = {
        class: "calc-result-item-unit"
    },
    xe = {
        class: "calc-result-item-right text-medium"
    },
    ye = {
        class: "calc-result-item-unit"
    },
    be = {
        class: "calc-result-item-right text-medium"
    },
    Ce = {
        class: "calc-result-item-unit"
    },
    Ve = {
        key: 1,
        class: "text-medium mt-3 text-red-darken text-center"
    },
    qe = z(e({
        __name: "withdrawal",
        props: {
            coinname: {},
            modelValue: {
                type: Boolean
            },
            single: {
                type: Boolean
            },
            started: {
                type: Boolean
            }
        },
        emits: ["update:modelValue", "closeWithdrawal", "successWithdrawal"],
        setup(e, {
            emit: b
        }) {
            var C;
            const {
                t: V
            } = l(), {
                Api: q
            } = a(), z = e, F = b, N = s({
                get: () => z.modelValue,
                set: e => F("update:modelValue", e)
            }), P = t(), R = i({
                allWallets: []
            }), E = u(""), qe = u(""), We = u(""), ke = u(0), _e = u(0), Ae = u(""), Be = u(""), Se = u(null), De = u(!1);
            q.getAllWalletsWithdraw().then((e => {
                for (let l = 0; l < e.data.data.length; l++) {
                    const a = e.data.data[l];
                    if (a && a[0]) {
                        const e = {
                            name: a[0] ? a[0] : "",
                            unit: a[1] ? a[1] : "",
                            address: a[2] ? a[2] : "",
                            allChains: a[3] ? a[3].includes(",") ? String(a[3]).split(",") : [a[3]] : [],
                            chain: a[4] ? a[4] : "",
                            parentChain: a[5] ? a[5] : "",
                            ismemo: !!a[6],
                            minWithdraw: a[7] ? a[7] : 0,
                            maxWithdraw: a[8] ? a[8] : 0,
                            usdRate: a[9] ? a[9] : 0,
                            balance: a[10] ? a[10] : "",
                            frozenBalance: a[11] ? a[11] : "",
                            TxFee: a[12] ? a[12] : 0,
                            scale: a[13] ? a[13] : 0,
                            withdrawPrecision: a[14] ? a[14] : 0
                        };
                        R.allWallets.push(e)
                    }
                }
                je()
            }));
            const Ue = u(!1),
                je = () => {
                    Be.value && 0 != R.allWallets.length && (Ue.value = !0, Se.value = R.allWallets.find((e => e.unit == Be.value)), Se.value.allChains[0] == Se.value.chain && (_e.value = Se.value.TxFee), qe.value = Se.value.allChains[0], P.success("changeCoin " + Be.value))
                },
                ze = () => {
                    F("update:modelValue", !1), F("closeWithdrawal")
                },
                Fe = () => {
                    Se.value.balance = Se.value.balance - Ie.amount, F("successWithdrawal"), F("update:modelValue", !1), Be.value = "", E.value = "", qe.value = "", We.value = "", Ae.value = "", ke.value = 0, _e.value = 0, Se.value = null, Ie.code = "", Ie.address = "", Ie.auth = ""
                };
            d((() => {}));
            n((() => Be.value = z.coinname)), n((() => (e => {
                if (e)
                    if (e == Se.value.chain) _e.value = Se.value.TxFee;
                    else {
                        let l = R.allWallets.find((l => l.chain == e));
                        l || (l = R.allWallets.find((l => l.parentChain == e)));
                        const a = l.TxFee * l.usdRate;
                        _e.value = a / Se.value.usdRate
                    }
            })(qe.value))), n((() => {
                return e = z.started, void console.log("started" + e);
                var e
            }));
            let Ne = new Intl.NumberFormat(void 0, {
                maximumFractionDigits: 8,
                minimumFractionDigits: null == (C = null == Se ? void 0 : Se.value) ? void 0 : C.scale,
                useGrouping: !1
            });
            const Pe = e => {
                E.value = new Intl.NumberFormat(void 0, {
                    maximumFractionDigits: 8,
                    minimumFractionDigits: e,
                    useGrouping: !1
                }).format(Number(E.value))
            };
            let Re = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            });
            const Ee = () => {
                    if (Ie.address = We.value, Ie.amount = Number(E.value), Ie.memo = Ae.value, Ie.amount)
                        if (Ie.amount < Se.value.minWithdraw) P.error(V("depwi.minimum-amount-asset").replace(":amount", Se.value.minWithdraw).replace(":asset", Be.value));
                        else if (We.value)
                        if (Ie.amount > Se.value.balance) P.error(V("depwi.low-balance-try-again"));
                        else {
                            let e;
                            switch (qe.value) {
                                case "BSC(BEP20)":
                                case "ERC20":
                                case "ARBITRUM":
                                    e = /0x[a-fA-F0-9]{40}/;
                                    break;
                                case "BTC":
                                    e = /^[13][a-km-zA-HJ-NP-Z1-9]{25,34}$/;
                                    break;
                                case "SOL":
                                    e = /^[1-9A-HJ-NP-Za-km-z]{32,44}$/;
                                    break;
                                case "XRP":
                                    e = /r[1-9A-HJ-NP-Za-km-z]{25,33}/;
                                    break;
                                default:
                                    e = /r{10,100}$/
                            }
                            e.test(Ie.address) ? (e.exec(Ie.address), De.value = !0) : P.error(V("depwi.invalid-wallet-address"))
                        }
                    else P.error(V("depwi.address-blank"));
                    else P.error(V("depwi.enter-amount"))
                },
                Ie = i({
                    code: "",
                    address: "",
                    auth: "",
                    memo: "",
                    amount: 0
                });
            return (e, l) => (o(), r(x, null, [z.single ? (o(), c(h(_), {
                key: 0,
                size: "small",
                color: "var(--primary)",
                style: {
                    color: "white"
                },
                onClick: l[0] || (l[0] = e => F("update:modelValue", !0))
            }, {
                default: m((() => [v(p(h(V)("dash.withdraw")), 1)])),
                _: 1
            })) : f("", !0), w(h(j), {
                modelValue: N.value,
                "onUpdate:modelValue": l[11] || (l[11] = e => N.value = e),
                "lock-scroll": "",
                class: "dialogw hdrbtn-2",
                "destroy-on-close": "",
                onClose: ze
            }, {
                header: m((() => [g("div", I, [l[14] || (l[14] = g("i", {
                    class: "fas fa-cicle"
                }, null, -1)), v(" " + p(h(V)("dash.withdraw") + " " + Be.value), 1)])])),
                default: m((() => {
                    var e, a, s, t, i, u, d, n, b, C, q;
                    return [g("div", L, [g("div", T, [g("div", G, [g("p", H, p(h(V)("depwi.coin")) + ":", 1), w(h(A), {
                        modelValue: Be.value,
                        "onUpdate:modelValue": l[1] || (l[1] = e => Be.value = e),
                        class: "text-medium",
                        style: {
                            width: "100%"
                        },
                        placeholder: "Select",
                        onChange: l[2] || (l[2] = e => je()),
                        onVnodeMounted: l[3] || (l[3] = e => je())
                    }, {
                        default: m((() => [(o(!0), r(x, null, y(R.allWallets, (e => (o(), c(h(B), {
                            key: e.name,
                            label: e.name,
                            value: e.unit
                        }, {
                            default: m((() => {
                                var l;
                                return [g("span", M, [g("img", {
                                    class: "imgSelect",
                                    src: "/images/icons/coin/" + (null == (l = e.unit) ? void 0 : l.toLowerCase()) + ".svg"
                                }, null, 8, $)]), g("span", J, p(e.name), 1), g("span", K, p(e.unit), 1)]
                            })),
                            _: 2
                        }, 1032, ["label", "value"])))), 128))])),
                        _: 1
                    }, 8, ["modelValue"])]), Ue.value ? (o(), r("div", O, [g("p", X, p(h(V)("depwi.chain-type")) + ":", 1), w(h(S), {
                        modelValue: qe.value,
                        "onUpdate:modelValue": l[4] || (l[4] = e => qe.value = e),
                        size: "small",
                        class: "mt-1"
                    }, {
                        default: m((() => [(o(!0), r(x, null, y(Se.value.allChains, ((e, l) => (o(), c(h(D), {
                            key: l,
                            class: "text-medium",
                            label: e,
                            value: e
                        }, null, 8, ["label", "value"])))), 128))])),
                        _: 1
                    }, 8, ["modelValue"])])) : f("", !0), Ue.value ? (o(), r("div", Z, [g("div", Q, [g("p", Y, p(h(V)("depwi.address")) + ":", 1), w(h(U), {
                        modelValue: We.value,
                        "onUpdate:modelValue": l[5] || (l[5] = e => We.value = e),
                        class: "addressInput text-medium btnChain",
                        placeholder: We.value,
                        "prefix-icon": h(W)
                    }, null, 8, ["modelValue", "placeholder", "prefix-icon"]), (null == (e = Se.value) ? void 0 : e.ismemo) && qe.value == Se.value.unit ? (o(), r("p", ee, p(h(V)("depwi.withdrawal-memo-tag")) + ": ", 1)) : f("", !0), (null == (a = Se.value) ? void 0 : a.ismemo) && qe.value == Se.value.unit ? (o(), c(h(U), {
                        key: 1,
                        modelValue: Ae.value,
                        "onUpdate:modelValue": l[6] || (l[6] = e => Ae.value = e),
                        class: "addressInput text-medium btnChain",
                        placeholder: Ae.value
                    }, null, 8, ["modelValue", "placeholder"])) : f("", !0), g("div", le, [g("p", ae, p(h(V)("depwi.amount")) + ":", 1), g("p", se, p(h(Re).format(Number(E.value) * Se.value.usdRate)), 1)]), g("div", te, [w(h(U), {
                        modelValue: E.value,
                        "onUpdate:modelValue": l[8] || (l[8] = e => E.value = e),
                        class: "text-medium",
                        onChange: l[9] || (l[9] = e => Pe(Se.value.withdrawPrecision)),
                        onKeydown: l[10] || (l[10] = e => (e => {
                            const l = e.keyCode;
                            190 != l && 110 != l || (E.value.indexOf(".") > 0 && e.preventDefault(), "" == E.value && e.preventDefault()), l >= 48 && l <= 57 || l >= 96 && l <= 105 || [8, 37, 39, 46, 190, 110].includes(l) || e.preventDefault()
                        })(e))
                    }, {
                        suffix: m((() => [v(p(Se.value.unit) + " | ", 1), g("span", {
                            class: "max-add",
                            onClick: l[7] || (l[7] = e => {
                                var l;
                                E.value = null == (l = Se.value) ? void 0 : l.balance, Pe(Se.value.withdrawPrecision)
                            })
                        }, p(h(V)("inx.max")), 1)])),
                        _: 1
                    }, 8, ["modelValue"])]), g("div", ie, [w(h(_), {
                        class: "mt-4",
                        color: "var(--primary)",
                        style: {
                            float: "left",
                            color: "white"
                        },
                        onClick: Ee
                    }, {
                        default: m((() => [v(p(h(V)("dash.withdraw")), 1)])),
                        _: 1
                    })])])])) : Ue.value ? (o(), r("div", ue)) : f("", !0)]), l[15] || (l[15] = g("div", {
                        class: "is-divider-vertical"
                    }, null, -1)), g("div", de, [Be.value ? (o(), r("section", ne, [g("div", null, [g("div", oe, p(h(V)("depwi.important")), 1), g("ul", re, [g("li", null, [g("span", null, "• " + p(h(V)("dash.available-balance")), 1), g("div", ce, [g("span", me, p((null == (t = h(Ne)) ? void 0 : t.format(null == (s = Se.value) ? void 0 : s.balance)) + " " + Be.value), 1)])]), g("li", null, [g("span", null, "• " + p(h(V)("dash.available-balance")) + " (USD)", 1), g("div", ve, [g("span", pe, p(h(Re).format((null == (i = Se.value) ? void 0 : i.balance) * (null == (u = Se.value) ? void 0 : u.usdRate))), 1)])]), g("li", null, [g("span", null, "• " + p(h(V)("depwi.transaction-fee")), 1), g("div", he, [g("span", fe, p(_e.value.toLocaleString(void 0, {
                        minimumFractionDigits: 5
                    }) + " " + Be.value + " = " + h(Re).format(_e.value * (null == (d = Se.value) ? void 0 : d.usdRate))), 1)])]), g("li", null, [g("span", null, "• " + p(h(V)("depwi.minimum-withdrawal")), 1), g("div", we, [g("span", ge, p((null == (b = null == (n = Se.value) ? void 0 : n.minWithdraw) ? void 0 : b.toFixed(Se.value.scale)) + " " + Be.value), 1)])]), g("li", null, [g("span", null, "• " + p(h(V)("depwi.chain-type")), 1), g("div", xe, [g("span", ye, p(qe.value), 1)])]), g("li", null, [g("span", null, "• " + p(h(V)("ctm2.arrival")), 1), g("div", be, [g("span", Ce, p(h(V)("depwi.in-2-hours")), 1)])])])])])) : f("", !0), 1 == (null == (C = Se.value) ? void 0 : C.accountType) && qe.value == (null == (q = Se.value) ? void 0 : q.unit) ? (o(), r("div", Ve, p("XRP" == Be.value ? h(V)("depwi.successful-transfer-tag") : h(V)("depwi.successful-transfer-memo")), 1)) : f("", !0)])])]
                })),
                _: 1
            }, 8, ["modelValue"]), De.value ? (o(), c(k, {
                key: 1,
                modelValue: De.value,
                "onUpdate:modelValue": l[12] || (l[12] = e => De.value = e),
                address: Ie.address,
                memo: Ie.memo,
                amount: Ie.amount,
                unit: Be.value,
                type: "TOKEN_WITHDRAW_AUTH",
                chain: qe.value,
                onCloseWithdraw: l[13] || (l[13] = e => De.value = !1),
                onSuccessAction: Fe
            }, null, 8, ["modelValue", "address", "memo", "amount", "unit", "chain"])) : f("", !0)], 64))
        }
    }), [
        ["__scopeId", "data-v-384ad25c"]
    ]),
    We = {
        class: "flex text-gray4 head-title items-center mb-1"
    },
    ke = {
        class: "columns deposit-content height-min"
    },
    _e = {
        class: "column is-7 px-5"
    },
    Ae = {
        class: "field"
    },
    Be = {
        class: "switch-acc-title"
    },
    Se = {
        class: "imgParent"
    },
    De = ["src"],
    Ue = {
        style: {
            float: "left"
        }
    },
    je = {
        style: {
            float: "right",
            color: "var(--el-text-color-secondary)",
            "font-size": "13px"
        }
    },
    ze = {
        key: 0,
        class: "field"
    },
    Fe = {
        class: "help text-medium"
    },
    Ne = {
        key: 1,
        class: "field"
    },
    Pe = {
        class: "show-qrcode",
        style: {
            "text-align": "center",
            "padding-top": "5px",
            "border-radius": "10px"
        }
    },
    Re = {
        class: "qrcode"
    },
    Ee = ["src"],
    Ie = {
        class: "help text-medium mb-1"
    },
    Le = {
        key: 0,
        class: "help text-medium mb-1 mt-2"
    },
    Te = {
        key: 2,
        class: "flex justify-center",
        style: {
            height: "210px"
        }
    },
    Ge = {
        class: "generatingAdd"
    },
    He = {
        class: "qrcode"
    },
    Me = ["src"],
    $e = {
        key: 0
    },
    Je = {
        key: 1
    },
    Ke = {
        class: "column is-5"
    },
    Oe = {
        key: 0,
        class: "calc-result"
    },
    Xe = {
        class: "calc-result-title text-medium"
    },
    Ze = {
        class: "calc-result-item"
    },
    Qe = {
        class: "calc-result-item-right text-medium"
    },
    Ye = {
        class: "calc-result-item-unit"
    },
    el = {
        class: "calc-result-item-right text-medium"
    },
    ll = {
        class: "calc-result-item-unit"
    },
    al = {
        key: 1,
        class: "text-medium mt-3 text-red-darken text-center"
    },
    sl = e({
        __name: "deposit",
        props: {
            coinname: {},
            modelValue: {
                type: Boolean
            },
            single: {
                type: Boolean
            },
            isMpc: {
                type: Boolean
            }
        },
        emits: ["update:modelValue", "cancelAll"],
        setup(e, {
            emit: W
        }) {
            const {
                Api: k
            } = a(), z = u(!1), I = b(), L = u(!0), T = u(null);
            let G = u("");
            d((async () => {
                await C(), G.value = `${T.value.offsetWidth}px`, window.addEventListener("resize", H)
            })), V((() => {
                window.removeEventListener("resize", H)
            }));
            const H = () => {
                    T.value && (G.value = `${T.value.offsetWidth}px`)
                },
                {
                    t: M
                } = l(),
                $ = e,
                J = W,
                K = s({
                    get: () => $.modelValue,
                    set: e => J("update:modelValue", e)
                }),
                O = t(),
                X = i({
                    oldPassword: "",
                    newPassword: "",
                    allWallets: [],
                    qrcode: {
                        value: "",
                        addressBase: "",
                        addressEth: "",
                        addressBsc: "",
                        addressArb: "",
                        addressSol: "",
                        size: 150,
                        page: 0,
                        rows: [],
                        coinName: "",
                        unit: ""
                    },
                    minDeposit: 0,
                    ismemo: !1,
                    memoCode: "",
                    isShowGetAddress: !1
                }),
                Z = u(""),
                Q = u(""),
                Y = u(0),
                ee = u(),
                le = u(!1),
                ae = u(!1),
                se = () => {
                    const e = new FormData;
                    e.append("isWallet", le.value.toString()), k.getAllWalletsDeposit(e).then((e => {
                        X.allWallets = [];
                        for (let l = 0; l < e.data.data.length; l++) {
                            const a = e.data.data[l];
                            if (a && a[0]) {
                                const e = {
                                    name: a[0] ? a[0] : "",
                                    unit: a[1] ? a[1] : "",
                                    address: a[2] ? a[2] : "",
                                    allChains: a[3] ? a[3].includes(",") ? String(a[3]).split(",") : [a[3]] : [],
                                    chain: a[4] ? a[4] : "",
                                    parentChain: a[5] ? a[5] : "",
                                    memo: a[6] ? a[6].split(",")[1] : "",
                                    mainAddress: a[6] ? a[6].split(",")[0] : "",
                                    ismemo: !!a[6],
                                    usdRate: a[7] ? a[7] : 0,
                                    confirmations: a[8] ? a[8] : 0
                                };
                                le.value && (e.allChains = [], e.allChains.push(e.parentChain ? e.parentChain : e.chain)), X.allWallets.push(e)
                            }
                        }
                        ie()
                    }))
                };
            se();
            const te = u(!1),
                ie = () => {
                    if (!Q.value || 0 == X.allWallets.length) return;
                    te.value = !0, ee.value = X.allWallets.find((e => e.unit == Q.value));
                    let e = !1;
                    for (var l = 0; l < X.allWallets.length; l++)
                        if (X.allWallets[l].unit == Q.value) {
                            e = !0, X.qrcode.value = X.allWallets[l].address, X.qrcode.addressBase = X.allWallets[l].address, X.qrcode.coinName = X.allWallets[l].name.toLowerCase(), X.qrcode.unit = X.allWallets[l].unit, Z.value = X.allWallets[l].allChains[0], ne(Z.value), X.allWallets[l].ismemo ? (X.qrcode.value = X.allWallets[l].mainAddress, X.qrcode.addressBase = X.allWallets[l].mainAddress, X.memoCode = X.allWallets[l].memo, X.ismemo = !0) : X.ismemo = !1, "" == X.qrcode.value || null == X.qrcode.value || null == X.qrcode.value ? X.isShowGetAddress = !0 : X.isShowGetAddress = !1;
                            break
                        }
                    e || (X.qrcode.coinName = "", X.qrcode.value = "", X.qrcode.unit = "", X.isShowGetAddress = !1)
                },
                ue = e => {
                    try {
                        navigator.clipboard.writeText(e), O.success(M("depwi.copied-successfully"))
                    } catch (l) {
                        O.error(M("depwi.error"))
                    }
                },
                de = () => {
                    J("update:modelValue", !1), J("cancelAll")
                },
                ne = e => {
                    if (e) {
                        ee.value.unit;
                        let l = !1;
                        if (e == ee.value.chain) {
                            if (ee.value.ismemo) return X.qrcode.value = ee.value.mainAddress, X.qrcode.addressBase = ee.value.mainAddress, X.memoCode = ee.value.memo, X.ismemo = !0, void(Y.value = ee.value.confirmations);
                            if (ee.value.parentChain) {
                                let e = X.allWallets.find((e => e.chain == ee.value.parentChain));
                                Y.value = e.confirmations, X.qrcode.value = e.address
                            } else X.qrcode.value = X.qrcode.addressBase, Y.value = ee.value.confirmations
                        } else {
                            let a = X.allWallets.find((l => l.chain == e));
                            a ? a.parentChain && (a = X.allWallets.find((e => e.chain == a.parentChain))) : a = X.allWallets.find((l => l.chain == e)), X.qrcode.value = a.address, Y.value = a.confirmations, a.address ? ee.value.address : l = !0
                        }(l || !X.qrcode.value && !L) && (() => {
                            if (!ae.value) {
                                let e = X.allWallets.find((e => e.chain == Z.value));
                                const l = new FormData;
                                if (l.append("unit", Q.value), l.append("chain", e.parentChain ? e.parentChain : Z.value), L) return;
                                k.resetAddress(l).then((l => {
                                    const a = l.data;
                                    a ? (X.allWallets.find((l => l.chain == (e.parentChain ? e.parentChain : Z.value))).address = a, ie()) : O.info(M("pga.went-wrong-refresh"))
                                }))
                            }
                        })()
                    }
                },
                oe = u(M("wall.spot-account"));
            d((() => {}));
            n((() => Q.value = $.coinname)), q($, (() => {
                se()
            }));
            const re = e => {
                ne(e)
            };
            return (e, l) => {
                const a = F;
                return o(), r(x, null, [$.single ? (o(), c(h(_), {
                    key: 0,
                    size: "small",
                    color: "var(--primary)",
                    style: {
                        color: "white"
                    },
                    onClick: l[0] || (l[0] = e => J("update:modelValue", !0))
                }, {
                    default: m((() => [v(p(h(M)("dash.deposit")), 1)])),
                    _: 1
                })) : f("", !0), w(h(j), {
                    modelValue: K.value,
                    "onUpdate:modelValue": l[11] || (l[11] = e => K.value = e),
                    "lock-scroll": "",
                    class: "dialogw hdrbtn-2",
                    "destroy-on-close": "",
                    onClose: de
                }, {
                    header: m((() => [g("div", We, [l[12] || (l[12] = g("i", {
                        class: "fas fa-cicle"
                    }, null, -1)), v(" " + p(h(M)("dash.deposit") + " " + X.qrcode.unit), 1)])])),
                    default: m((() => {
                        var e, s, t;
                        return [g("div", ke, [g("div", _e, [g("div", Ae, [w(h(R), {
                            class: "switch-acc",
                            modelValue: oe.value,
                            "onUpdate:modelValue": l[1] || (l[1] = e => oe.value = e),
                            "before-leave": e => (e => {
                                if (e === M("wall.spot-account")) le.value = !1;
                                else {
                                    if (!I.userData.mpcWallet) return oe.value = M("wall.spot-account"), z.value = !0, !1;
                                    le.value = !0
                                }
                                return se(), !0
                            })(e.toString())
                        }, {
                            default: m((() => [w(h(E), {
                                name: h(M)("wall.spot-account")
                            }, {
                                label: m((() => [g("div", Be, p(h(M)("wall.spot-account")), 1)])),
                                _: 1
                            }, 8, ["name"])])),
                            _: 1
                        }, 8, ["modelValue", "before-leave"]), g("p", {
                            ref_key: "textHelp",
                            ref: T,
                            class: "help text-medium mb-1"
                        }, p(h(M)("depwi.coin")) + ":", 513), w(h(A), {
                            modelValue: Q.value,
                            "onUpdate:modelValue": l[2] || (l[2] = e => Q.value = e),
                            class: "text-medium",
                            style: {
                                width: "100%"
                            },
                            placeholder: "Select",
                            onChange: l[3] || (l[3] = e => ie()),
                            onVnodeMounted: l[4] || (l[4] = e => ie())
                        }, {
                            default: m((() => [(o(!0), r(x, null, y(X.allWallets, (e => (o(), c(h(B), {
                                key: e.name,
                                label: e.name,
                                value: e.unit
                            }, {
                                default: m((() => {
                                    var l;
                                    return [g("span", Se, [g("img", {
                                        class: "imgSelect",
                                        src: "/images/icons/coin/" + (null == (l = e.unit) ? void 0 : l.toLowerCase()) + ".svg"
                                    }, null, 8, De)]), g("span", Ue, p(e.name), 1), g("span", je, p(e.unit), 1)]
                                })),
                                _: 2
                            }, 1032, ["label", "value"])))), 128))])),
                            _: 1
                        }, 8, ["modelValue"])]), X.qrcode.value ? (o(), r("div", ze, [g("p", Fe, p(h(M)("depwi.chain-type")) + ":", 1), w(h(S), {
                            modelValue: Z.value,
                            "onUpdate:modelValue": l[5] || (l[5] = e => Z.value = e),
                            size: "small",
                            class: "mt-1",
                            onChange: re
                        }, {
                            default: m((() => [(o(!0), r(x, null, y(ee.value.allChains, ((e, l) => (o(), c(h(D), {
                                key: l,
                                class: "text-medium",
                                label: e,
                                value: e
                            }, null, 8, ["label", "value"])))), 128))])),
                            _: 1
                        }, 8, ["modelValue"])])) : f("", !0), X.qrcode.value ? (o(), r("div", Ne, [g("div", Pe, [g("figure", Re, [w(h(N), {
                            value: X.qrcode.value,
                            options: {
                                width: X.qrcode.size,
                                errorCorrectionLevel: "Q"
                            },
                            tag: "svg"
                        }, null, 8, ["value", "options"]), g("img", {
                            class: "qrcode__image",
                            src: "/images/icons/coin/" + (null == (e = X.qrcode.unit) ? void 0 : e.toLowerCase()) + ".svg",
                            alt: "Bitcoin"
                        }, null, 8, Ee)]), g("p", Ie, p(h(M)("depwi.address")) + ":", 1), w(h(U), {
                            modelValue: X.qrcode.value,
                            "onUpdate:modelValue": l[7] || (l[7] = e => X.qrcode.value = e),
                            class: "addressInput text-medium btnChain",
                            placeholder: X.qrcode.value,
                            readonly: ""
                        }, {
                            suffix: m((() => [g("i", {
                                class: "copy-link fas fa-copy",
                                onClick: l[6] || (l[6] = e => ue(X.qrcode.value))
                            })])),
                            _: 1
                        }, 8, ["modelValue", "placeholder"]), X.ismemo && X.qrcode.addressBase == X.qrcode.value ? (o(), r("p", Le, p(h(M)("depwi.deposit-tag-memo")) + ": ", 1)) : f("", !0), X.ismemo && X.qrcode.addressBase == X.qrcode.value ? (o(), c(h(U), {
                            key: 1,
                            modelValue: X.memoCode,
                            "onUpdate:modelValue": l[9] || (l[9] = e => X.memoCode = e),
                            class: "addressInput text-medium btnChain",
                            placeholder: X.memoCode,
                            readonly: !0
                        }, {
                            suffix: m((() => [g("i", {
                                class: "copy-link fas fa-copy",
                                onClick: l[8] || (l[8] = e => ue(X.memoCode))
                            })])),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])) : f("", !0)])])) : te.value ? (o(), r("div", Te, [ae.value ? f("", !0) : (o(), c(a, {
                            key: 0,
                            height: "210px",
                            width: h(G),
                            style: {
                                position: "absolute"
                            }
                        }, null, 8, ["width"])), g("div", Ge, [g("figure", He, [w(h(N), {
                            value: "Generating " + X.qrcode.unit + " Address",
                            options: {
                                width: null == (s = X.qrcode) ? void 0 : s.size,
                                errorCorrectionLevel: "Q"
                            },
                            tag: "svg"
                        }, null, 8, ["value", "options"]), g("img", {
                            class: "qrcode__image",
                            src: "/images/icons/coin/" + (null == (t = X.qrcode.unit) ? void 0 : t.toLowerCase()) + ".svg",
                            alt: "Bitcoin"
                        }, null, 8, Me)]), L.value ? (o(), r("div", $e, "Demo Mode")) : (o(), r("div", Je, "Generating " + p(X.qrcode.unit) + " Address", 1))])])) : f("", !0)]), l[13] || (l[13] = g("div", {
                            class: "is-divider-vertical"
                        }, null, -1)), g("div", Ke, [X.qrcode.unit ? (o(), r("section", Oe, [g("div", null, [g("div", Xe, p(h(M)("depwi.important")), 1), g("ul", Ze, [g("li", null, [g("span", null, "• " + p(h(M)("depwi.coin")), 1), g("div", Qe, [g("span", Ye, p(X.qrcode.unit), 1)])]), g("li", null, [g("span", null, "• " + p(h(M)("depwi.chain-type")), 1), g("div", el, [g("span", ll, p(Z.value), 1)])])])])])) : f("", !0), 1 == X.ismemo && X.qrcode.addressBase == X.qrcode.value ? (o(), r("div", al, p(h(M)("depwi.please-ensure-deposit-tag")), 1)) : f("", !0)])]), w(P, {
                            modelValue: z.value,
                            "onUpdate:modelValue": l[10] || (l[10] = e => z.value = e)
                        }, null, 8, ["modelValue"])]
                    })),
                    _: 1
                }, 8, ["modelValue"])], 64)
            }
        }
    });
export {
    sl as _, qe as a
};