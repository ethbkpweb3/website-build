import {
    m as e,
    dn as s,
    Y as a,
    y as t,
    a as l,
    dz as i,
    dm as o,
    h as r,
    o as n,
    j as c,
    l as d,
    t as m,
    X as u,
    v as p,
    p as v,
    w as f,
    ck as b,
    q as x,
    dj as g,
    P as h,
    cB as y,
    s as w,
    n as j
} from "./index-jdACH0Rc.js";
import {
    v as _
} from "./index-Dwv4qbXN.js";
import {
    _ as S
} from "./transfersub.vue_vue_type_style_index_0_lang-aEZYB7wL.js";
import {
    E as k
} from "./index-Citk0ABi.js";
import {
    E as D
} from "./index-DBFvTDaE.js";
import {
    E as F
} from "./index-CYOIannN.js";
import {
    a as T,
    E as A
} from "./index-DZsnwgZr.js";
import {
    E as N
} from "./index-CSGGFzQh.js";
import {
    E as C
} from "./index-BhYs_tBo.js";
import {
    _ as E
} from "./_plugin-vue_export-helper-BCo6x5W8.js";
import {
    u as L
} from "./usePageTitle-BxNzo3__.js";
import "./index-C8W9xb4z.js";
import "./index-B1yvdImc.js";
import "./index-D4R9Vjdp.js";
import "./index-Cg9BJciP.js";
import "./use-dialog-CmZNE833.js";
import "./use-global-config-Dm8LyY4T.js";
import "./index-BWeq1WY3.js";
import "./index-cRGdv3RN.js";
import "./typescript-CRqm1_SZ.js";
import "./_initCloneObject-CyvZF8uk.js";
import "./isPlainObject--3V5F7Ei.js";
import "./vue.8fc199ce-D3bCrqKA.js";
import "./viewWrapper-Dh8gOQC5.js";
const U = {
        class: "account-box is-form is-footerless"
    },
    z = {
        class: "form-head-inner items-center"
    },
    I = {
        class: "left"
    },
    V = {
        class: "right"
    },
    O = {
        class: "buttons"
    },
    P = {
        class: "form-outer"
    },
    $ = {
        class: "form-body"
    },
    B = {
        class: "form-section add-form"
    },
    R = {
        class: "form-section-inner has-padding-bottom"
    },
    W = {
        class: "has-text-centered"
    },
    Y = {
        class: "columns is-multiline text-gray4 text-12 text-regular"
    },
    q = {
        class: "column is-12"
    },
    G = {
        style: {
            width: "200px"
        }
    },
    K = {
        class: "column is-12"
    },
    M = {
        class: "field text-gray3 text-12"
    },
    X = {
        class: "column is-12"
    },
    Z = {
        class: "field"
    },
    H = {
        class: "button-wrap"
    },
    J = {
        class: "form-section desc-form"
    },
    Q = {
        class: "form-section-inner"
    },
    ee = {
        class: "has-text-centered"
    },
    se = {
        class: "columns is-multiline"
    },
    ae = {
        class: "column is-12 text-gray4 text-12 text-regular"
    },
    te = {
        class: "field"
    },
    le = {
        class: "field"
    },
    ie = {
        class: "fieldset"
    },
    oe = {
        class: "columns is-multiline"
    },
    re = {
        class: "column is-12",
        style: {
            padding: "0 40px 30px"
        }
    },
    ne = {
        class: "mx-3",
        style: {
            width: "100%"
        }
    },
    ce = {
        class: "flex flex-row justify-between text-regular text-12",
        style: {
            "line-height": "18px"
        }
    },
    de = {
        class: "imgParent ml-10"
    },
    me = ["src"],
    ue = {
        class: "ml-2 mr-4 text-bold",
        style: {
            "margin-top": "auto",
            "margin-bottom": "auto"
        }
    },
    pe = {
        class: "flex flex-col mr-3 text-bold"
    },
    ve = {
        class: "ml-1"
    },
    fe = {
        class: "ml-1"
    },
    be = {
        class: "flex flex row text-gray4"
    },
    xe = {
        class: "flex flex-col mr-3",
        style: {
            "align-items": "end"
        }
    },
    ge = {
        class: "ml-1"
    },
    he = {
        class: "text-gray2"
    },
    ye = {
        class: "ml-1"
    },
    we = {
        class: "text-gray2"
    },
    je = {
        class: "flex flex-col mr-3",
        style: {
            "align-items": "end",
            "min-width": "70px"
        }
    },
    _e = {
        class: "ml-1"
    },
    Se = {
        class: "text-gray2"
    },
    ke = {
        class: "ml-1"
    },
    De = {
        class: "text-gray2"
    },
    Fe = {
        key: 0
    },
    Te = {
        class: "ml-10 text-gray4"
    },
    Ae = {
        key: 0,
        class: "right-coupon"
    },
    Ne = E(e({
        __name: "UserSubAccounts",
        setup(e) {
            const E = s(),
                {
                    t: L,
                    locale: Ne
                } = a(),
                Ce = t(!1),
                Ee = l(),
                {
                    y: Le
                } = i(),
                Ue = t(""),
                ze = t([]),
                {
                    Api: Ie
                } = o(),
                Ve = r((() => Le.value > 30)),
                Oe = ({
                    row: e,
                    rowIndex: s
                }) => e.enabled ? "current-row" : "",
                Pe = e => {
                    const {
                        columns: s,
                        data: a
                    } = e, t = [];
                    return s.forEach(((e, s) => {
                        if (0 === s) return void(t[s] = L("wall.total"));
                        const l = a.map((s => Number(s[e.property])));
                        var i;
                        l.every((e => isNaN(e))) ? t[s] = "" : t[s] = `$ ${i=l.reduce(((e,s)=>{const a=Number(s);return isNaN(a)?e:e+s}),0),i.toLocaleString(void 0,{minimumFractionDigits:2})}`
                    })), t
                },
                $e = () => {
                    Re()
                },
                Be = t(!1),
                Re = () => {
                    Ie.subAccountAllBalance().then((e => {
                        const s = e.data;
                        0 == s.code ? ze.value = s.data.sort(((e, s) => new Date(s.createTime).getTime() - new Date(e.createTime).getTime())) : Ee.error(s.message)
                    }))
                };
            return Re(), (e, s) => (n(), c("div", U, [d("div", {
                class: v(["form-head stuck-header", [Ve.value && "is-stuck"]])
            }, [d("div", z, [d("div", I, [d("h3", null, m(u(L)("hiss.subaccount")), 1)]), d("div", V, [d("div", O, [p(S, {
                single: !0,
                modelValue: Be.value,
                "onUpdate:modelValue": s[0] || (s[0] = e => Be.value = e),
                onSuccessTransfer: $e
            }, null, 8, ["modelValue"])])])])], 2), d("form", {
                class: "form-layout is-separate",
                onSubmit: s[4] || (s[4] = g((() => {}), ["prevent"]))
            }, [d("div", P, [d("div", $, [d("div", B, [d("div", R, [d("h3", W, m(u(L)("subb.create-subaccount")), 1), d("div", Y, [d("div", q, [p(u(k), {
                class: "box-item",
                placement: "top-start",
                effect: "customized",
                visible: Ce.value,
                "onUpdate:visible": s[1] || (s[1] = e => Ce.value = e)
            }, {
                content: f((() => [d("div", G, m(u(L)("newtrg.max-16-char-alpha")), 1)])),
                default: f((() => [d("label", null, m(u(L)("sett.name")), 1)])),
                _: 1
            }, 8, ["visible"]), p(u(D), {
                modelValue: Ue.value,
                "onUpdate:modelValue": s[2] || (s[2] = e => Ue.value = e),
                style: b(Ce.value ? "box-shadow: 0 0 3px 0.1px red" : ""),
                maxlength: "16",
                "show-word-limit": "",
                class: "addressInput text-medium btnChain",
                "prefix-icon": u(_)
            }, null, 8, ["modelValue", "style", "prefix-icon"])]), d("div", K, [d("div", M, [d("label", null, m(u(L)("newtrg.name-cannot-changed")), 1)])]), d("div", X, [d("div", Z, [d("div", H, [p(u(F), {
                class: "mt-3",
                style: {
                    width: "100%"
                },
                type: "success",
                size: "large",
                disabled: "" == Ue.value,
                onClick: s[3] || (s[3] = e => (() => {
                    if ("" == Ue.value) return void Ee.error(L("subb.please-enter") + ": " + L("sett.name"));
                    if (Ue.value.length > 16 || /[^a-zA-Z]/.test(Ue.value)) return Ce.value = !0, void setTimeout((() => {
                        clearInterval(), Ce.value = !1
                    }), 5e3);
                    if (ze.value.find((e => e.name == Ue.value))) return void Ee.error("same name");
                    const e = new FormData;
                    e.append("name", Ue.value), Ie.subAccountCreate(e).then((e => {
                        const s = e.data;
                        0 == s.code ? (Ee.success(s.message), Ue.value = "", Re()) : Ee.error(s.message)
                    }))
                })())
            }, {
                default: f((() => [x(m(u(L)("subb.create-now")), 1)])),
                _: 1
            }, 8, ["disabled"])])])])])])]), d("div", J, [d("div", Q, [d("h3", ee, m(u(L)("wall.notes")), 1), d("div", se, [d("div", ae, [d("div", te, [d("label", null, " • " + m(u(L)("ctm.sub-desc-1")), 1)]), d("div", le, [d("label", null, "• " + m(u(L)("ctm.sub-desc-2")), 1)])])])])])])])], 32), d("div", ie, [d("div", oe, [d("div", re, [s[5] || (s[5] = d("div", {
                class: "is-divider mb-4",
                "data-content": "My Sub Accounts"
            }, null, -1)), p(u(A), {
                "tooltip-effect": "dark pt-0 mt-0",
                style: {
                    width: "100%"
                },
                "show-summary": "",
                data: ze.value,
                class: "slim-table",
                "row-class-name": Oe,
                "summary-method": Pe
            }, {
                default: f((() => [p(u(T), {
                    type: "expand",
                    width: "100"
                }, {
                    default: f((e => [d("div", ne, [(n(!0), c(h, null, y(e.row.info, ((e, s) => {
                        var a;
                        return n(), c("div", {
                            key: s
                        }, [d("div", ce, [d("div", null, [d("span", de, [d("img", {
                            class: "imgSelect",
                            src: "/images/icons/coin/" + (null == (a = e.coin) ? void 0 : a.toLowerCase()) + ".svg"
                        }, null, 8, me), d("span", ue, m(e.coin), 1)]), d("div", pe, [d("span", ve, m(u(L)("dash.available-balance")) + ":", 1), d("span", fe, m(u(L)("dash.in-c-order")) + ":", 1)])]), d("div", be, [d("div", xe, [d("span", ge, [x(m(e.balance.toFixed(5) + " "), 1), d("span", he, m(e.coin), 1)]), d("span", ye, [x(m(e.inorder.toFixed(5) + " "), 1), d("span", we, m(e.coin), 1)])]), d("div", je, [d("span", _e, [x("≈ " + m((e.usdtvalue * Number(u(E).currencyRate.toString())).toLocaleString(void 0, {
                            minimumFractionDigits: 2
                        }) + " "), 1), d("span", Se, m(u(E).currency.toString()), 1)]), d("span", ke, [x("≈ " + m((e.inorderusdt * Number(u(E).currencyRate.toString())).toLocaleString(void 0, {
                            minimumFractionDigits: 2
                        }) + " "), 1), d("span", De, m(u(E).currency.toString()), 1)])])])]), p(u(N))])
                    })), 128)), 0 == e.row.info.length ? (n(), c("div", Fe, [d("p", Te, m(u(L)("exh.no-records-found")), 1)])) : w("", !0)])])),
                    _: 1
                }), p(u(T), {
                    label: u(L)("sett.created-time")
                }, {
                    default: f((e => [x(m(new Date(e.row.createdTime).toLocaleString("en-UK")), 1)])),
                    _: 1
                }, 8, ["label"]), p(u(T), {
                    label: u(L)("sett.name")
                }, {
                    default: f((e => [x(m(e.row.name) + " ", 1), e.row.enabled ? (n(), c("div", Ae, m(u(L)("subb.active").toUpperCase()), 1)) : w("", !0)])),
                    _: 1
                }, 8, ["label"]), p(u(T), {
                    label: u(L)("dash.available-balance"),
                    prop: "total"
                }, {
                    default: f((e => [x(" $ " + m(e.row.total.toLocaleString(void 0, {
                        minimumFractionDigits: 2
                    })), 1)])),
                    _: 1
                }, 8, ["label"]), p(u(T), {
                    label: u(L)("dash.in-c-order"),
                    prop: "inOrderTotal"
                }, {
                    default: f((e => [x(" $ " + m(e.row.inOrderTotal.toLocaleString(void 0, {
                        minimumFractionDigits: 2
                    })), 1)])),
                    _: 1
                }, 8, ["label"]), p(u(T), {
                    label: "",
                    width: "120px"
                }, {
                    default: f((e => [p(u(C), {
                        title: "Are you sure?",
                        onConfirm: s => (e => {
                            const s = new FormData;
                            s.append("subid", e), E.tradeWalletId = Number(e), Ie.subAccountSelect(s).then((e => {
                                const s = e.data;
                                0 == s.code ? (Ee.success(s.message), Ue.value = "", Re()) : Ee.error(s.message)
                            }))
                        })(e.row.enabled ? 0 : e.row.subId)
                    }, {
                        reference: f((() => [e.row.enabled ? (n(), j(u(F), {
                            key: 0,
                            type: "warning",
                            title: "",
                            size: "small"
                        }, {
                            default: f((() => [x(m(u(L)("auth.log-out")), 1)])),
                            _: 1
                        })) : (n(), j(u(F), {
                            key: 1,
                            type: "success",
                            title: "",
                            size: "small"
                        }, {
                            default: f((() => [x(m(u(L)("auth.log-in")), 1)])),
                            _: 1
                        }))])),
                        _: 2
                    }, 1032, ["onConfirm"])])),
                    _: 1
                })])),
                _: 1
            }, 8, ["data"])])])])]))
        }
    }), [
        ["__scopeId", "data-v-d364630d"]
    ]),
    Ce = e({
        __name: "subaccounts",
        setup: e => (L("hiss.subaccount"), (e, s) => {
            const a = Ne;
            return n(), j(a)
        })
    });
export {
    Ce as
    default
};