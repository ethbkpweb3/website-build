import {
    _ as e
} from "./doubleCheck.vue_vue_type_style_index_0_lang-CBr02gDU.js";
import {
    m as a,
    Y as t,
    dm as s,
    y as l,
    a as i,
    dz as r,
    h as o,
    K as d,
    o as n,
    j as c,
    l as m,
    p as u,
    t as p,
    X as v,
    dj as f,
    v as x,
    w as b,
    q as y,
    n as h,
    s as g,
    P as j
} from "./index-CQfCy4Xm.js";
import {
    v as w,
    x as _,
    y as k
} from "./index-DZwhim7i.js";
import {
    E as C
} from "./index-BaPl-dvV.js";
import {
    b as V,
    a as T,
    E as A
} from "./index-BUqPiGKl.js";
import {
    E as S
} from "./index-DhHA3mFI.js";
import {
    E as I
} from "./index-CsseI5JE.js";
import {
    E as K
} from "./index-5N62XIoj.js";
import {
    _ as D
} from "./_plugin-vue_export-helper-BCo6x5W8.js";
import {
    u as E
} from "./usePageTitle-BiOJFdog.js";
import "./Control-BAxR9hhH.js";
import "./vue3-otp-input-C7HeO7ob.js";
import "./index--1JsBO1r.js";
import "./index-wV0BwLDn.js";
import "./index-DWyf7GKU.js";
import "./index-DI0c3Das.js";
import "./_baseClone-CNNEnxsr.js";
import "./_initCloneObject-DqrhPNyg.js";
import "./index-DPclT-tF.js";
import "./index-DYh1qtlV.js";
import "./index-CreMjc0E.js";
import "./aria-C-hsWcn7.js";
import "./validator-Kt7cHrwc.js";
import "./use-global-config-CYuHb1FB.js";
import "./index-BR6qnryQ.js";
import "./typescript-CRqm1_SZ.js";
import "./isPlainObject-BkooXA2Q.js";
import "./use-dialog-CC6CVfkB.js";
import "./vue.8fc199ce-DBDcZ0BB.js";
import "./viewWrapper-yhXGfwRy.js";
const U = {
        class: "account-box is-form is-footerless"
    },
    z = {
        class: "form-head-inner"
    },
    P = {
        class: "left"
    },
    O = {
        class: "form-outer"
    },
    q = {
        class: "form-body"
    },
    B = {
        class: "form-section add-form"
    },
    F = {
        class: "form-section-inner has-padding-bottom"
    },
    G = {
        class: "has-text-centered"
    },
    L = {
        class: "columns is-multiline text-gray4 text-12 text-regular"
    },
    W = {
        class: "column is-12"
    },
    Y = {
        class: "column is-12"
    },
    M = {
        class: "column is-12"
    },
    N = {
        class: "field text-gray3 text-12 mt-0"
    },
    X = {
        class: "checkboxes"
    },
    Z = {
        style: {
            "margin-top": "9px",
            "margin-left": "10px"
        }
    },
    $ = {
        class: "column is-12 pt-0"
    },
    H = {
        class: "field"
    },
    J = {
        class: "button-wrap"
    },
    Q = {
        class: "form-section desc-form"
    },
    R = {
        class: "form-section-inner"
    },
    ee = {
        class: "has-text-centered"
    },
    ae = {
        class: "columns is-multiline"
    },
    te = {
        class: "column is-12 text-gray4 text-12 text-regular"
    },
    se = {
        class: "field"
    },
    le = {
        class: "field"
    },
    ie = {
        class: "field"
    },
    re = {
        class: "field flex flex-row text-medium"
    },
    oe = {
        class: "ml-1"
    },
    de = {
        class: "fieldset"
    },
    ne = {
        class: "columns is-multiline"
    },
    ce = {
        class: "column is-12",
        style: {
            padding: "0 40px 30px"
        }
    },
    me = ["data-content"],
    ue = {
        class: "flex text-gray4 head-title items-center mb-1"
    },
    pe = {
        class: "text-medium mt-0 mb-2"
    },
    ve = {
        class: "help text-medium mb-1"
    },
    fe = {
        class: "help text-medium mb-1"
    },
    xe = D(a({
        __name: "ApiManagement",
        setup(a) {
            const {
                t: D
            } = t(), {
                Api: E
            } = s(), xe = l(!1), be = l(!1), ye = l(!1), he = i(), {
                y: ge
            } = r(), je = l(""), we = l(""), _e = l([]), ke = l(!1), Ce = o((() => ge.value > 30));

            function Ve(e) {
                return new Intl.DateTimeFormat("en-GB", {
                    timeStyle: "medium",
                    dateStyle: "short",
                    timeZone: "UTC"
                }).format(new Date(e))
            }
            const Te = l({}),
                Ae = e => {
                    try {
                        navigator.clipboard.writeText(e), he.success(D("depwi.copied-successfully"))
                    } catch (a) {
                        he.error(D("depwi.error"))
                    }
                };
            E.getAccountSettings().then((e => {
                const a = e.data;
                0 == a.code && (Te.value = a.data)
            }));
            const Se = () => {
                E.getAllApi().then((e => {
                    const a = e.data;
                    0 == a.code ? _e.value = a.data.sort(((e, a) => new Date(a.createTime).getTime() - new Date(e.createTime).getTime())) : he.error(a.message)
                }))
            };
            Se();
            const Ie = e => {
                    const a = e.split(",");
                    Ke.apiKey = a[1], Ke.apiSecret = a[0], ke.value = !0, Se(), je.value = "", we.value = "", xe.value = !1, be.value = !1
                },
                Ke = d({
                    apiSecret: "",
                    apiKey: ""
                });
            return (a, t) => {
                const s = e;
                return n(), c(j, null, [m("div", U, [m("div", {
                    class: u(["form-head stuck-header", [Ce.value && "is-stuck"]])
                }, [m("div", z, [m("div", P, [m("h3", null, p(v(D)("sett.api-key")), 1)]), t[10] || (t[10] = m("div", {
                    class: "right"
                }, null, -1))])], 2), m("form", {
                    class: "form-layout is-separate",
                    onSubmit: t[4] || (t[4] = f((() => {}), ["prevent"]))
                }, [m("div", O, [m("div", q, [m("div", B, [m("div", F, [m("h3", G, p(v(D)("sett.create-new-key")), 1), m("div", L, [m("div", W, [m("label", null, p(v(D)("sett.name")) + "/" + p(v(D)("sett.note")), 1), x(v(C), {
                    modelValue: je.value,
                    "onUpdate:modelValue": t[0] || (t[0] = e => je.value = e),
                    class: "addressInput text-medium btnChain",
                    "prefix-icon": v(w)
                }, null, 8, ["modelValue", "prefix-icon"])]), m("div", Y, [m("label", null, p(v(D)("dash.ipaddress")), 1), x(v(C), {
                    modelValue: we.value,
                    "onUpdate:modelValue": t[1] || (t[1] = e => we.value = e),
                    class: "addressInput text-medium btnChain",
                    "prefix-icon": v(_)
                }, null, 8, ["modelValue", "prefix-icon"])]), m("div", M, [m("div", N, [m("label", null, p(v(D)("ctm.api-desc-3")), 1)])]), m("div", X, [m("div", Z, [x(v(V), {
                    modelValue: xe.value,
                    "onUpdate:modelValue": t[2] || (t[2] = e => xe.value = e),
                    label: v(D)("sett.read-only"),
                    size: "small",
                    border: "",
                    disabled: be.value
                }, null, 8, ["modelValue", "label", "disabled"])])]), m("div", $, [m("div", H, [m("div", J, [x(v(S), {
                    class: "mt-3 text-medium",
                    style: {
                        width: "100%"
                    },
                    type: "success",
                    size: "large",
                    disabled: "" == je.value,
                    onClick: t[3] || (t[3] = e => (() => {
                        if (_e.value.length >= 20) return he.error(D("sett.each-account-max-20-keys")), !1;
                        if ("" == je.value) return he.error(D("sett.please-enter-name-remark")), !1;
                        if ("" != we.value) {
                            let a = [];
                            const t = we.value.replace(/\s/g, "");
                            t.includes(",") ? a = t.split(",") : a.push(t);
                            let s = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])(\/([0-9]|[1-2][0-9]|3[0-2]))?$/;
                            var e = !0;
                            a.forEach((function(a) {
                                if (!s.test(a)) return e = !1, he.error(D("sett.wrong-ip-format")), !1;
                                e && (ye.value = !0)
                            }))
                        } else ye.value = !0
                    })())
                }, {
                    default: b((() => [y(p(v(D)("sett.create-new-key")), 1)])),
                    _: 1
                }, 8, ["disabled"])])])])])])]), m("div", Q, [m("div", R, [m("h3", ee, p(v(D)("wall.notes")), 1), m("div", ae, [m("div", te, [m("div", se, [m("label", null, " • " + p(v(D)("ctm.api-desc-1")), 1)]), m("div", le, [m("label", null, "• " + p(v(D)("sett.each-account-max-20-keys")), 1)]), m("div", ie, [m("label", null, "• " + p(v(D)("ctm.api-desc-2")), 1)]), m("div", re, [m("label", null, p(v(D)("sett.api-docs")) + ": ", 1), m("a", oe, p(v(D)("sett.under-maintenance") + ". " + v(D)("sett.try-again-later")), 1)])])])])])])])], 32), m("div", de, [m("div", ne, [m("div", ce, [m("div", {
                    class: "is-divider mb-4",
                    "data-content": v(D)("sett.my-key")
                }, null, 8, me), x(v(A), {
                    "tooltip-effect": "dark pt-0 mt-0",
                    class: "text-12 slim-table",
                    data: _e.value
                }, {
                    default: b((() => [x(v(T), {
                        label: v(D)("sett.created-time"),
                        prop: "createTime"
                    }, {
                        default: b((e => [y(p(Ve(e.row.createTime)), 1)])),
                        _: 1
                    }, 8, ["label"]), x(v(T), {
                        label: v(D)("sett.expiration-date")
                    }, {
                        default: b((e => [y(p(e.row.expireTime ? Ve(e.row.expireTime) : ""), 1)])),
                        _: 1
                    }, 8, ["label"]), x(v(T), {
                        label: v(D)("sett.name") + "/" + v(D)("sett.note")
                    }, {
                        default: b((e => [y(p(e.row.remark), 1)])),
                        _: 1
                    }, 8, ["label"]), x(v(T), {
                        label: v(D)("sett.api-key")
                    }, {
                        default: b((e => [y(p(e.row.apiKey), 1)])),
                        _: 1
                    }, 8, ["label"]), x(v(T), {
                        label: v(D)("dash.ipaddress")
                    }, {
                        default: b((e => [y(p(e.row.bindIp), 1)])),
                        _: 1
                    }, 8, ["label"]), x(v(T), {
                        label: v(D)("sett.permission")
                    }, {
                        default: b((e => [y(p("0" == e.row.powerLimit ? v(D)("sett.read-only") : "0,1,2" == e.row.powerLimit ? v(D)("sett.trade") + ", " + v(D)("dash.withdrawal") : v(D)("sett.trade")), 1)])),
                        _: 1
                    }, 8, ["label"]), x(v(T), {
                        label: "",
                        width: "40"
                    }, {
                        default: b((e => [x(v(I), {
                            title: "Are you sure to delete this?",
                            onConfirm: a => {
                                return t = e.row.id, void E.delApi(t).then((e => {
                                    const a = e.data;
                                    0 == a.code ? (he.success(D("sett.successfully-deleted")), _e.value = _e.value.filter((e => e.id !== t))) : he.error(a.message)
                                }));
                                var t
                            }
                        }, {
                            reference: b((() => [x(v(S), {
                                type: "danger",
                                icon: v(k),
                                size: "small",
                                circle: ""
                            }, null, 8, ["icon"])])),
                            _: 2
                        }, 1032, ["onConfirm"])])),
                        _: 1
                    })])),
                    _: 1
                }, 8, ["data"])])])])]), x(v(K), {
                    modelValue: ke.value,
                    "onUpdate:modelValue": t[7] || (t[7] = e => ke.value = e),
                    width: "30%",
                    class: "secretApi hdrbtn-2",
                    "append-to-body": ""
                }, {
                    header: b((() => [m("div", ue, [t[11] || (t[11] = m("i", {
                        class: "fas fa-cicle"
                    }, null, -1)), y(" " + p(v(D)("sett.api-management")), 1)])])),
                    default: b((() => [m("p", pe, p(v(D)("sett.api-key-showed-once")), 1), m("p", ve, p(v(D)("sett.api-key")) + ":", 1), x(v(C), {
                        class: "addressInput text-medium btnChain",
                        placeholder: Ke.apiKey,
                        readonly: ""
                    }, {
                        suffix: b((() => [m("i", {
                            class: "copy-link fas fa-copy",
                            onClick: t[5] || (t[5] = e => Ae(Ke.apiKey))
                        })])),
                        _: 1
                    }, 8, ["placeholder"]), m("p", fe, p(v(D)("sett.secret-key")) + ":", 1), x(v(C), {
                        class: "addressInput text-medium btnChain",
                        placeholder: Ke.apiSecret,
                        readonly: ""
                    }, {
                        suffix: b((() => [m("i", {
                            class: "copy-link fas fa-copy",
                            onClick: t[6] || (t[6] = e => Ae(Ke.apiSecret))
                        })])),
                        _: 1
                    }, 8, ["placeholder"])])),
                    _: 1
                }, 8, ["modelValue"]), ye.value ? (n(), h(s, {
                    key: 0,
                    modelValue: ye.value,
                    "onUpdate:modelValue": t[8] || (t[8] = e => ye.value = e),
                    "bind-ip": we.value,
                    "name-remark": je.value,
                    "power-limit": be.value,
                    "read-only": xe.value,
                    type: "TOKEN_ADD_API",
                    onCloseWithdraw: t[9] || (t[9] = e => ye.value = !1),
                    onSuccessAction: Ie
                }, null, 8, ["modelValue", "bind-ip", "name-remark", "power-limit", "read-only"])) : g("", !0)], 64)
            }
        }
    }), [
        ["__scopeId", "data-v-40a304fe"]
    ]),
    be = a({
        __name: "api",
        setup: e => (E("sett.api-management"), (e, a) => {
            const t = xe;
            return n(), h(t)
        })
    });
export {
    be as
    default
};