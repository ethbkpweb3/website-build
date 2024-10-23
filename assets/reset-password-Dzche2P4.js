import {
    _ as e
} from "./FooterB-DIvyuXCZ.js";
import {
    _ as a
} from "./Control-BAxR9hhH.js";
import {
    _ as t
} from "./Button-C_PMcYdl.js";
import {
    _ as s
} from "./TelInput.vue_vue_type_style_index_0_lang-ClWsfgLD.js";
import {
    m as o,
    dm as l,
    u as r,
    y as i,
    Y as n,
    a as u,
    G as p,
    K as m,
    o as d,
    j as c,
    n as v,
    w as f,
    v as g,
    X as h,
    s as y,
    l as w,
    t as b,
    q as _,
    dj as j,
    P as k,
    cC as x,
    ck as C,
    dp as E,
    dn as S,
    I as A
} from "./index-CQfCy4Xm.js";
import "./index-DZwhim7i.js";
import {
    V as O
} from "./vue3-otp-input-C7HeO7ob.js";
import {
    e as V
} from "./encrypt-CxsJCXOk.js";
import {
    F as B
} from "./browser-Cv63Auap.js";
import {
    a as F,
    E as P
} from "./index-CBmmRNm0.js";
import {
    E as R
} from "./index--1JsBO1r.js";
import {
    a as T,
    E as M
} from "./index-DI0c3Das.js";
import {
    E as q
} from "./index-BaPl-dvV.js";
import {
    E as I
} from "./index-DxHJyswS.js";
import {
    E as z
} from "./index-DPclT-tF.js";
import {
    _ as K
} from "./_plugin-vue_export-helper-BCo6x5W8.js";
import {
    _ as U
} from "./Title-B_xB6icS.js";
import {
    _ as D
} from "./logo-DqlCWKKL.js";
import {
    A as G,
    a as L
} from "./AppPop-DXr7YMXx.js";
import {
    u as N
} from "./useSeoMeta-DJrBtPw8.js";
import {
    b as W
} from "./route-block-B_A1xBdJ.js";
import "./all-countries-_6k8nJ5H.js";
import "./index-38aUouWI.js";
import "./index-DWyf7GKU.js";
import "./index-wV0BwLDn.js";
import "./_commonjs-dynamic-modules-BHR_E30J.js";
import "./___vite-browser-external_commonjs-proxy-CX5ghsV-.js";
import "./_baseClone-CNNEnxsr.js";
import "./_initCloneObject-DqrhPNyg.js";
import "./typescript-CRqm1_SZ.js";
import "./index-DhHA3mFI.js";
import "./use-global-config-CYuHb1FB.js";
import "./index-CreMjc0E.js";
import "./index-DYh1qtlV.js";
import "./aria-C-hsWcn7.js";
import "./validator-Kt7cHrwc.js";
import "./index-BR6qnryQ.js";
import "./index-DPTDKB4o.js";
import "./index-CB5HUA9W.js";
import "./google-play-0W6tGWt8.js";
import "./vue.8fc199ce-DBDcZ0BB.js";
const Z = {
        class: "flex justify-between resendClick"
    },
    J = {
        class: "flex justify-between resendClick"
    },
    Q = K(o({
        __name: "ResetForm",
        setup(e) {
            const {
                Api: o
            } = l();
            r();
            const x = i("Email"),
                C = i(!1);
            i(!1);
            const E = i(!1),
                S = i(""),
                A = i(""),
                {
                    t: K
                } = n(),
                U = i(""),
                D = u(),
                G = p();
            let L = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,30})+$/;
            const N = i(),
                W = (e, a, t) => {
                    6 != a.length ? t(new Error(K("pga.input-6-digit"))) : t()
                },
                Q = m({
                    email: "",
                    pass: "",
                    otpSms: "",
                    otpAuth: "",
                    otpEmail: ""
                }),
                X = m({
                    email: [{
                        validator: (e, a, t) => {
                            "" === a ? t(new Error(K("auth.please-enter-email"))) : L.test(a) ? t() : t(new Error(K("depwi.incorrect-format-try-again")))
                        },
                        trigger: "blur"
                    }],
                    pass: [{
                        validator: (e, a, t) => {
                            "" === a ? t(new Error(K("auth.new-password-not-empty"))) : t()
                        },
                        trigger: "blur"
                    }],
                    otpSms: [{
                        validator: W,
                        trigger: "blur"
                    }],
                    otpEmail: [{
                        validator: W,
                        trigger: "blur"
                    }],
                    otpAuth: [{
                        validator: W,
                        trigger: "blur"
                    }]
                }),
                Y = (e, a) => {
                    E.value = !0, a && a.validate((async e => {
                        if (!e) return E.value = !1, !1;
                        await ie(), E.value = !1
                    }))
                },
                $ = i(!1),
                H = i(!1),
                ee = i(!1),
                ae = i(!1),
                te = i(!0),
                se = i(!0),
                oe = e => {
                    var a;
                    Q.otpSms = e, 6 == e.length && (null == (a = N.value) || a.validateField("otpSms"))
                },
                le = e => {
                    var a;
                    Q.otpEmail = e, 6 == e.length && (null == (a = N.value) || a.validateField("otpEmail"))
                },
                re = e => {
                    var a;
                    Q.otpAuth = e, 6 == e.length && (null == (a = N.value) || a.validateField("otpAuth"))
                },
                ie = async () => {
                    if ("Mobile" == x.value && "" == S.value) return void D.error(K("auth.please-enter-mobile"));
                    const e = new B,
                        a = new B,
                        t = "Mobile" == x.value ? S.value : Q.email;
                    if (C.value) "" == U.value ? (a.append("type", "TOKEN_RESET_PASSWORD"), a.append("account", t), a.append("emailCode", Q.otpEmail), a.append("phoneCode", Q.otpSms), a.append("googleCode", Q.otpAuth), await o.regCheck(a).then((({
                        data: e
                    }) => {
                        500 == e.code ? D.error(e.message) : 0 == e.code && (U.value = e.message, H.value = !1, ee.value = !1, $.value = !1, ae.value = !0)
                    })).catch((e => {
                        D.error(e)
                    }))) : U.value && (e.append("type", "TOKEN_RESET_PASSWORD"), e.append("password", V(Q.pass)), e.append("token", U.value), e.append("account", t), o.resetLoginPassword(e).then((({
                        data: e
                    }) => {
                        500 == e.code ? D.error(e.message) : 0 == e.code ? (D.dismissAll(), D.success(K("inx.submitted-successfully")), G.push({
                            name: "index"
                        })) : 403 == e.code && D.error(K("pga.request-expired-try-again"))
                    })).catch((e => {
                        D.error(e)
                    })));
                    else {
                        const e = new B;
                        e.append("account", "Mobile" == x.value ? S.value : Q.email), o.checkAuthStatus(e).then((({
                            data: e
                        }) => {
                            500 == e.code ? D.error(e.message) : 0 == e.code && (e.data[3] ? ne() : (H.value = e.data[0], ee.value = e.data[1], $.value = e.data[2], C.value = !0))
                        })).catch((e => {
                            D.error(e)
                        }))
                    }
                },
                ne = async () => await z.confirm(K("pga.confirm-is-correct"), K("pga.account-not-exsits"), {
                    confirmButtonText: K("pga.ok"),
                    showCancelButton: !1,
                    showConfirmButton: !0,
                    type: "warning",
                    customClass: "auth-msg sasfw"
                }).then((() => !0)).catch((() => !1)),
                ue = (e, a) => {
                    const t = new B;
                    t.append("account", "Mobile" == x.value ? S.value : Q.email), t.append("email", e.toString()), t.append("phone", a.toString()), o.resetPasswordCode(t).then((({
                        data: a
                    }) => {
                        500 == a.code ? D.error(a.message) : 0 == a.code && (e ? (D.success(K("pga.email-code-sent-success")), te.value = !1, setTimeout((() => {
                            te.value = !0
                        }), 3e4)) : (D.success(K("pga.phone-code-sent-success")), se.value = !1, setTimeout((() => {
                            se.value = !0
                        }), 3e4)))
                    })).catch((e => {
                        D.error(e)
                    }))
                };
            return (e, o) => {
                const l = s,
                    r = t,
                    i = a;
                return d(), c(k, null, [C.value ? y("", !0) : (d(), v(h(P), {
                    key: 0,
                    class: "auth-radio mb-4",
                    modelValue: x.value,
                    "onUpdate:modelValue": o[0] || (o[0] = e => x.value = e),
                    size: "large"
                }, {
                    default: f((() => [g(h(F), {
                        value: "Email",
                        label: "Email"
                    }), g(h(F), {
                        value: "Mobile",
                        label: "Mobile"
                    })])),
                    _: 1
                }, 8, ["modelValue"])), g(h(R), {
                    title: h(K)("ctm.pass-not-reset-site-rec"),
                    type: "warning",
                    "show-icon": "",
                    closable: !1,
                    effect: "dark"
                }, null, 8, ["title"]), g(h(M), {
                    ref_key: "ruleFormRef",
                    ref: N,
                    model: Q,
                    "status-icon": "",
                    rules: X,
                    "label-width": "0px",
                    class: "auth-form mt-2",
                    onSubmit: o[9] || (o[9] = j((e => Y(0, N.value)), ["prevent"]))
                }, {
                    default: f((() => [C.value || "Mobile" != x.value ? C.value ? y("", !0) : (d(), v(h(T), {
                        key: 1,
                        prop: "email"
                    }, {
                        default: f((() => [w("p", null, b(h(K)("auth.email")), 1), g(h(q), {
                            modelValue: Q.email,
                            "onUpdate:modelValue": o[2] || (o[2] = e => Q.email = e),
                            type: "email",
                            autocomplete: "false",
                            onInput: o[3] || (o[3] = e => {
                                var a;
                                return null == (a = N.value) ? void 0 : a.validateField("email")
                            })
                        }, {
                            prefix: f((() => o[10] || (o[10] = [w("i", {
                                class: "text-gray1 fas fa-at"
                            }, null, -1)]))),
                            _: 1
                        }, 8, ["modelValue"])])),
                        _: 1
                    })) : (d(), v(h(T), {
                        key: 0
                    }, {
                        default: f((() => [w("p", null, b(h(K)("auth.mobile")), 1), g(l, {
                            modelValue: S.value,
                            "onUpdate:modelValue": o[1] || (o[1] = e => S.value = e)
                        }, null, 8, ["modelValue"])])),
                        _: 1
                    })), C.value && ae.value ? (d(), v(h(T), {
                        key: 2,
                        prop: "pass"
                    }, {
                        default: f((() => [w("p", null, b(h(K)("sett.new-password")), 1), g(h(q), {
                            modelValue: Q.pass,
                            "onUpdate:modelValue": o[4] || (o[4] = e => Q.pass = e),
                            type: "password",
                            onInput: o[5] || (o[5] = e => {
                                var a;
                                return null == (a = N.value) ? void 0 : a.validateField("pass")
                            }),
                            autocomplete: "false",
                            "show-password": ""
                        }, {
                            prefix: f((() => o[11] || (o[11] = [w("i", {
                                class: "text-gray1 fas fa-lock"
                            }, null, -1)]))),
                            _: 1
                        }, 8, ["modelValue"])])),
                        _: 1
                    })) : y("", !0), C.value && H.value ? (d(), v(h(T), {
                        key: 3,
                        prop: "otpSms"
                    }, {
                        default: f((() => [w("div", Z, [w("p", null, b(h(K)("sett.sms-verification-code")), 1), se.value ? (d(), c("p", {
                            key: 0,
                            onClick: o[6] || (o[6] = e => {
                                ue(!1, !0)
                            })
                        }, [g(h(I), {
                            class: "auth-link",
                            type: "primary"
                        }, {
                            default: f((() => [_(b(h(K)("sett.resend")), 1)])),
                            _: 1
                        })])) : y("", !0)]), g(O, {
                            class: "otp-body",
                            "input-classes": "otp-input",
                            separator: "-",
                            "num-inputs": 6,
                            "should-auto-focus": !0,
                            "is-input-num": !0,
                            onOnChange: oe,
                            onOnComplete: oe
                        })])),
                        _: 1
                    })) : y("", !0), C.value && ee.value ? (d(), v(h(T), {
                        key: 4,
                        prop: "otpEmail"
                    }, {
                        default: f((() => [w("div", J, [w("p", null, b(h(K)("sett.email-verification-code")), 1), te.value ? (d(), c("p", {
                            key: 0,
                            onClick: o[7] || (o[7] = e => {
                                ue(!0, !1)
                            })
                        }, [g(h(I), {
                            class: "auth-link",
                            type: "primary"
                        }, {
                            default: f((() => [_(b(h(K)("sett.resend")), 1)])),
                            _: 1
                        })])) : y("", !0)]), g(O, {
                            class: "otp-body",
                            "input-classes": "otp-input",
                            separator: "-",
                            "num-inputs": 6,
                            "should-auto-focus": !0,
                            "is-input-num": !0,
                            onOnChange: le,
                            onOnComplete: le
                        })])),
                        _: 1
                    })) : y("", !0), C.value && $.value ? (d(), v(h(T), {
                        key: 5,
                        prop: "otpAuth"
                    }, {
                        default: f((() => [w("p", null, b(h(K)("sett.google-verification-code")), 1), g(O, {
                            class: "otp-body",
                            "input-classes": "otp-input",
                            separator: "-",
                            "num-inputs": 6,
                            "should-auto-focus": !0,
                            "is-input-num": !0,
                            onOnChange: re,
                            onOnComplete: re
                        })])),
                        _: 1
                    })) : y("", !0), g(i, {
                        class: "mt-5"
                    }, {
                        default: f((() => [g(r, {
                            type: "submit",
                            color: "primary",
                            to: {
                                name: "reset-password"
                            },
                            fullwidth: "",
                            loading: E.value,
                            bold: "",
                            onClick: o[8] || (o[8] = e => {
                                return a = N.value, void z.confirm(K("ctm.pass-not-reset-site-rec"), {
                                    confirmButtonText: K("sett.continue"),
                                    title: K("pga.reset-password"),
                                    showCancelButton: !0,
                                    confirmButtonClass: "btn-prime-box",
                                    customStyle: {
                                        "background-color": "black",
                                        "border-color": "#1b1b1b",
                                        "--el-button-bg-color": "#fff"
                                    },
                                    type: "warning"
                                }).then((() => {
                                    Y(0, a)
                                })).catch((() => {}));
                                var a
                            })
                        }, {
                            default: f((() => [_(b(h(K)("pga.reset-password")), 1)])),
                            _: 1
                        }, 8, ["loading"]), _(" " + b(A.value && A.value), 1)])),
                        _: 1
                    })])),
                    _: 1
                }, 8, ["model", "rules"])], 64)
            }
        }
    }), [
        ["__scopeId", "data-v-cf8fa9d5"]
    ]),
    X = {
        class: "auth-wrapper is-single"
    },
    Y = {
        key: 0,
        class: "auth-nav"
    },
    $ = {
        class: "center"
    },
    H = {
        class: "right mr-3"
    },
    ee = {
        class: "inner-wrap"
    },
    ae = {
        class: "auth-head"
    },
    te = {
        class: "form-card"
    },
    se = {
        key: 0,
        class: "forgot-link has-text-centered"
    },
    oe = K(o({
        __name: "ResetPassword",
        props: {
            mobile: {
                type: Boolean
            }
        },
        setup(e) {
            const a = e,
                {
                    t: t
                } = n();
            return (e, s) => {
                const o = x("RouterLink"),
                    l = U,
                    r = Q;
                return d(), c("div", X, [a.mobile ? y("", !0) : (d(), c("div", Y, [w("div", $, [g(o, {
                    to: "/",
                    class: "header-item"
                }, {
                    default: f((() => s[0] || (s[0] = [w("img", {
                        src: D,
                        alt: "logo"
                    }, null, -1)]))),
                    _: 1
                })]), w("div", H, [g(G), g(L)])])), w("div", {
                    class: "single-form-wrap",
                    style: C(a.mobile ? "min-height: 0; padding:0; margin:0;" : "")
                }, [w("div", ee, [w("div", ae, [g(l, {
                    tag: "h2",
                    size: 3,
                    weight: "thin",
                    narrow: ""
                }, {
                    default: f((() => [_(b(h(t)("pga.reset-password")), 1)])),
                    _: 1
                }), g(o, {
                    to: {
                        name: "help-desk-contact"
                    }
                }, {
                    default: f((() => [_(b(h(t)("pga.contact-customer-support")), 1)])),
                    _: 1
                })]), w("div", te, [g(r)]), a.mobile ? y("", !0) : (d(), c("div", se, [g(o, {
                    to: {
                        name: "register"
                    }
                }, {
                    default: f((() => [_(b(h(t)("auth.register-now")), 1)])),
                    _: 1
                })]))])], 4)])
            }
        }
    }), [
        ["__scopeId", "data-v-4afd3127"]
    ]),
    le = {
        class: "inline-block px-2"
    },
    re = {
        class: "inline-block px-2"
    },
    ie = o({
        __name: "reset-password",
        setup(a) {
            const t = E(),
                {
                    t: s
                } = n(),
                o = S();
            return N(s("pga.reset-password"), "Forgot your OPZ password? Securely reset your OPZ account password. Get back to managing your assets safely and effortlessly."), A((() => {
                t.query.mobile && (o.isApp = !0)
            })), (a, l) => {
                const r = x("RouterLink"),
                    i = e;
                return d(), c(k, null, [w("div", null, [g(oe, {
                    mobile: null != h(t).query.mobile || !0 === h(o).isApp
                }, null, 8, ["mobile"])]), h(t).query.mobile ? y("", !0) : (d(), v(i, {
                    key: 0
                }, {
                    links: f((() => [w("li", le, [g(r, {
                        to: {
                            name: "index"
                        },
                        class: "footer-link"
                    }, {
                        default: f((() => [_(b(h(s)("pga.home")), 1)])),
                        _: 1
                    })]), w("li", re, [g(r, {
                        to: {
                            name: "help-desk-center"
                        },
                        class: "footer-link"
                    }, {
                        default: f((() => [_(b(h(s)("pga.help-center")), 1)])),
                        _: 1
                    })])])),
                    _: 1
                }))], 64)
            }
        }
    });
"function" == typeof W && W(ie);
export {
    ie as
    default
};