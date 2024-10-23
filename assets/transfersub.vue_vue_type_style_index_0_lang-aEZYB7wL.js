import {
    m as e,
    dm as a,
    dn as l,
    Y as s,
    h as t,
    a as u,
    K as n,
    y as i,
    I as o,
    G as d,
    j as c,
    X as m,
    n as r,
    w as v,
    s as p,
    v as f,
    p as b,
    P as h,
    o as x,
    q as g,
    t as y,
    l as w,
    cB as V
} from "./index-jdACH0Rc.js";
import "./index-Dwv4qbXN.js";
import {
    E as A
} from "./index-CYOIannN.js";
import {
    E as k
} from "./index-C8W9xb4z.js";
import {
    E as S,
    a as C
} from "./index-cRGdv3RN.js";
import {
    E as D
} from "./index-DBFvTDaE.js";
const _ = {
        class: "flex text-gray4 head-title items-center mb-1"
    },
    j = {
        class: "columns deposit-content height-min"
    },
    F = {
        class: "column is-7 px-5"
    },
    N = {
        class: "field"
    },
    T = {
        class: "help text-medium mb-1"
    },
    U = {
        class: "imgParent"
    },
    E = ["src"],
    B = {
        style: {
            float: "left"
        }
    },
    G = {
        style: {
            float: "right",
            color: "var(--el-text-color-secondary)",
            "font-size": "13px"
        }
    },
    I = {
        key: 0,
        class: "flex justify-between mt-2 mb-1"
    },
    O = {
        class: "help text-medium"
    },
    W = {
        class: "help text-medium mr-1"
    },
    q = {
        key: 1,
        class: "field flex justify-between"
    },
    z = {
        key: 2,
        class: "field"
    },
    K = {
        class: "show-qrcode",
        style: {
            "padding-top": "5px",
            "border-radius": "10px"
        }
    },
    L = {
        class: "flex justify-between mb-1"
    },
    P = {
        class: "help text-medium"
    },
    X = {
        class: "help text-medium mr-1"
    },
    Y = {
        class: "flex amountSelect"
    },
    H = {
        class: "column is-5"
    },
    J = {
        key: 0,
        class: "calc-result"
    },
    M = {
        class: "calc-result-title text-medium"
    },
    Q = {
        class: "calc-result-item"
    },
    R = {
        class: "calc-result-item-right text-medium"
    },
    Z = {
        class: "calc-result-item-unit"
    },
    $ = e({
        __name: "transfersub",
        props: {
            modelValue: {
                type: Boolean,
                default: !0
            },
            single: {
                type: Boolean
            }
        },
        emits: ["update:modelValue", "successTransfer", "closeTransfer"],
        setup(e, {
            emit: $
        }) {
            const {
                Api: ee
            } = a(), ae = l(), {
                t: le
            } = s(), se = e, te = $, ue = t({
                get: () => se.modelValue,
                set: e => te("update:modelValue", e)
            }), ne = u(), ie = n({
                allWallets: [],
                allSubAcc: []
            }), oe = i("0"), de = i(0), ce = i(0), me = i(""), re = i(), ve = i(), pe = i(!1), fe = i(!1), be = i(!1);
            ee.getAllCoinStatus().then((e => {
                200 == e.status && 0 == e.data.code && (ie.allWallets = e.data.data)
            }));
            (() => {
                ie.allSubAcc = [];
                const e = {
                    id: 0,
                    name: le("hiss.main-account")
                };
                ie.allSubAcc.push(e), ee.subAccountAll().then((e => {
                    if (200 == e.status && 0 == e.data.code)
                        for (const a of e.data.data) {
                            const e = {
                                id: a.id,
                                name: a.name
                            };
                            ie.allSubAcc.push(e)
                        }
                }))
            })();
            const he = () => {
                    te("update:modelValue", !1), be.value ? te("successTransfer") : te("closeTransfer")
                },
                xe = () => {
                    if (null == me.value || null == re.value || null == ve.value || 0 == Number(oe.value)) return void ne.error(le("depwi.incorrect-format-try-again"));
                    const e = new FormData;
                    e.append("unit", me.value), e.append("fromsubid", re.value), e.append("tosubid", ve.value), e.append("amount", oe.value.toString()), ee.subAccountTransfer(e).then((e => {
                        200 == e.status && 0 == e.data.code ? (ne.success(le("hiss.transfer-success")), be.value = !0, oe.value = "0", ye(re.value)) : ne.error(e.data)
                    }))
                },
                ge = e => {
                    null != e && (ye(e), fe.value = !0)
                },
                ye = e => {
                    if (null == e) return;
                    const a = new FormData;
                    a.append("coin", me.value), a.append("subid", e), ee.getAmountCoin(a).then((e => {
                        200 == e.status && 0 == e.data.code && e.data.data.amount ? (de.value = e.data.data.amount, ce.value = e.data.data.scale) : (de.value = 0, ce.value = 0)
                    }))
                },
                we = e => {
                    null != e && (ye(re.value), pe.value = !0)
                };
            o((() => {})), new Intl.NumberFormat(void 0, {
                maximumFractionDigits: 8,
                minimumFractionDigits: ce.value,
                useGrouping: !1
            });
            const Ve = e => {
                oe.value = new Intl.NumberFormat(void 0, {
                    maximumFractionDigits: 8,
                    minimumFractionDigits: e,
                    useGrouping: !1
                }).format(Number(oe.value))
            };
            d();
            return (e, a) => (x(), c(h, null, [se.single && !m(ae).isAppOn ? (x(), r(m(A), {
                key: 0,
                size: "medium",
                color: "var(--primary)",
                style: {
                    color: "white",
                    "margin-bottom": "0.5rem"
                },
                onClick: a[0] || (a[0] = e => te("update:modelValue", !0))
            }, {
                default: v((() => [g(y(m(le)("subb.transfer-asset")), 1)])),
                _: 1
            })) : p("", !0), f(m(k), {
                modelValue: ue.value,
                "onUpdate:modelValue": a[8] || (a[8] = e => ue.value = e),
                "lock-scroll": "",
                class: b(["dialogw transfer-assets hdrbtn-2", m(ae).isAppOn && "isapp"]),
                "destroy-on-close": "",
                onClose: he
            }, {
                header: v((() => [w("div", _, [a[9] || (a[9] = w("i", {
                    class: "fas fa-cicle"
                }, null, -1)), g(" " + y(m(le)("subb.transfer-asset")), 1)])])),
                default: v((() => [w("div", j, [w("div", F, [w("div", N, [w("p", T, y(m(le)("depwi.coin")) + ":", 1), f(m(S), {
                    modelValue: me.value,
                    "onUpdate:modelValue": a[1] || (a[1] = e => me.value = e),
                    class: "text-medium",
                    style: {
                        width: "100%"
                    },
                    placeholder: "Select",
                    onChange: we
                }, {
                    default: v((() => [(x(!0), c(h, null, V(ie.allWallets, (e => (x(), r(m(C), {
                        key: e.name,
                        label: e.name,
                        value: e.unit
                    }, {
                        default: v((() => {
                            var a;
                            return [w("span", U, [w("img", {
                                class: "imgSelect",
                                src: "/images/icons/coin/" + (null == (a = e.unit) ? void 0 : a.toLowerCase()) + ".svg"
                            }, null, 8, E)]), w("span", B, y(e.name), 1), w("span", G, y(e.unit), 1)]
                        })),
                        _: 2
                    }, 1032, ["label", "value"])))), 128))])),
                    _: 1
                }, 8, ["modelValue"])]), pe.value ? (x(), c("div", I, [w("p", O, y(m(le)("wall.from")) + ":", 1), w("p", W, y(m(le)("wall.to")) + ":", 1)])) : p("", !0), pe.value ? (x(), c("div", q, [f(m(S), {
                    modelValue: re.value,
                    "onUpdate:modelValue": a[2] || (a[2] = e => re.value = e),
                    placeholder: m(le)("ctm2.select"),
                    style: {
                        width: "40%"
                    },
                    onChange: ge
                }, {
                    default: v((() => [(x(!0), c(h, null, V(ie.allSubAcc, (e => (x(), r(m(C), {
                        key: e.id,
                        label: e.name,
                        value: e.id
                    }, null, 8, ["label", "value"])))), 128))])),
                    _: 1
                }, 8, ["modelValue", "placeholder"]), f(m(S), {
                    modelValue: ve.value,
                    "onUpdate:modelValue": a[3] || (a[3] = e => ve.value = e),
                    placeholder: m(le)("ctm2.select"),
                    style: {
                        width: "40%"
                    }
                }, {
                    default: v((() => [(x(!0), c(h, null, V(ie.allSubAcc, (e => (x(), r(m(C), {
                        key: e.id,
                        label: e.name,
                        value: e.id
                    }, null, 8, ["label", "value"])))), 128))])),
                    _: 1
                }, 8, ["modelValue", "placeholder"])])) : p("", !0), pe.value ? (x(), c("div", z, [w("div", K, [w("div", L, [w("p", P, y(m(le)("depwi.amount")) + ":", 1), w("p", X, y((2 * Number(oe.value)).toLocaleString(void 0, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                })), 1)]), w("div", Y, [f(m(D), {
                    modelValue: oe.value,
                    "onUpdate:modelValue": a[5] || (a[5] = e => oe.value = e),
                    class: "text-medium",
                    onChange: a[6] || (a[6] = e => Ve(ce.value)),
                    onKeydown: a[7] || (a[7] = e => (e => {
                        const a = e.keyCode;
                        190 != a && 110 != a || (oe.value.indexOf(".") > 0 && e.preventDefault(), "" == oe.value && e.preventDefault()), a >= 48 && a <= 57 || a >= 96 && a <= 105 || [8, 37, 39, 46, 190, 110].includes(a) || e.preventDefault()
                    })(e))
                }, {
                    suffix: v((() => [g(y(me.value) + " | ", 1), w("span", {
                        class: "max-add",
                        onClick: a[4] || (a[4] = e => {
                            oe.value = de.value, Ve(ce.value)
                        })
                    }, y(m(le)("inx.max")), 1)])),
                    _: 1
                }, 8, ["modelValue"])]), f(m(A), {
                    class: "mt-4",
                    color: "var(--primary)",
                    style: {
                        color: "white"
                    },
                    disabled: null == ve.value || null == re.value || Number(oe.value) <= 0 || re.value == ve.value,
                    onClick: xe
                }, {
                    default: v((() => [g(y(m(le)("hiss.transfer")), 1)])),
                    _: 1
                }, 8, ["disabled"])])])) : p("", !0)]), a[10] || (a[10] = w("div", {
                    class: "is-divider-vertical"
                }, null, -1)), w("div", H, [me.value && fe.value ? (x(), c("section", J, [w("div", null, [w("div", M, y(m(le)("dash.balance")) + ":", 1), w("ul", Q, [w("li", null, [w("span", null, "• " + y(m(le)("dash.available-balance")), 1), w("div", R, [w("span", Z, y(de.value + " " + me.value), 1)])])])])])) : p("", !0)])])])),
                _: 1
            }, 8, ["modelValue", "class"])], 64))
        }
    });
export {
    $ as _
};