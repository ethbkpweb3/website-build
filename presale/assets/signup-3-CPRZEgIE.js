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
    m as l,
    h as s,
    o as r,
    j as o,
    l as n,
    t as i,
    s as u,
    p as d,
    dD as p,
    dm as c,
    Y as m,
    dn as v,
    u as h,
    y as f,
    a as g,
    G as y,
    dp as _,
    K as b,
    dA as w,
    I as k,
    n as x,
    w as j,
    v as E,
    X as I,
    q as S,
    dh as V,
    dg as A,
    d9 as R,
    P as T,
    cC as C,
    ev as O
} from "./index-CQfCy4Xm.js";
import {
    _ as P
} from "./_plugin-vue_export-helper-BCo6x5W8.js";
import {
    _ as M
} from "./TelInput.vue_vue_type_style_index_0_lang-ClWsfgLD.js";
import "./index-DZwhim7i.js";
import {
    F as $
} from "./browser-Cv63Auap.js";
import {
    V as D
} from "./vue3-otp-input-C7HeO7ob.js";
import {
    a as F
} from "./avatarSettings-C1kj7zSJ.js";
import {
    e as G
} from "./encrypt-CxsJCXOk.js";
import {
    a as K,
    E as N
} from "./index-CBmmRNm0.js";
import {
    E as W
} from "./index-DxHJyswS.js";
import {
    a as q,
    E as z
} from "./index-DI0c3Das.js";
import {
    E as U
} from "./index-BaPl-dvV.js";
import {
    _ as B
} from "./Subtitle-C6oUzL5I.js";
import {
    _ as L
} from "./Title-B_xB6icS.js";
import {
    _ as Z
} from "./logo-DqlCWKKL.js";
import {
    A as H,
    a as J
} from "./AppPop-DXr7YMXx.js";
import {
    y as Q
} from "./index.esm-CiciK8Oe.js";
import {
    u as X
} from "./useSeoMeta-DJrBtPw8.js";
import {
    b as Y
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
import "./index-DPTDKB4o.js";
import "./index-CB5HUA9W.js";
import "./google-play-0W6tGWt8.js";
import "./vue.8fc199ce-DBDcZ0BB.js";
const ee = ["for"],
    ae = {
        class: "checkbox-inner"
    },
    te = ["id", "value", "checked"],
    le = {
        key: 0,
        class: "checkbox-label"
    },
    se = P(l({
        __name: "Checkbox",
        props: {
            name: {},
            color: {
                default: "primary"
            },
            value: {
                default: void 0
            },
            modelValue: {
                default: () => []
            },
            disabled: {
                type: Boolean,
                default: !1
            },
            rounded: {
                type: Boolean,
                default: !1
            },
            label: {
                default: void 0
            }
        },
        emits: ["update:modelValue"],
        setup(e, {
            emit: a
        }) {
            const t = a,
                l = e,
                p = s((() => l.modelValue.includes(l.value)));

            function c() {
                const e = [...l.modelValue];
                p.value ? e.splice(e.indexOf(l.value), 1) : e.push(l.value), t("update:modelValue", e)
            }
            const m = s((() => [l.color && `is-${l.color}`, l.rounded && "is-rounded"]));
            return (e, a) => (r(), o("div", {
                class: d(["checkbox", m.value])
            }, [n("label", {
                for: `checkbox-${l.name}`,
                class: "checkbox-inner-wrap"
            }, [n("span", ae, [n("input", {
                id: `checkbox-${l.name}`,
                value: l.value,
                checked: p.value,
                type: "checkbox",
                onChange: c
            }, null, 40, te), a[0] || (a[0] = n("i", {
                class: "iconify rem-70",
                "data-icon": "feather:check"
            }, null, -1)), a[1] || (a[1] = n("span", {
                class: "inner-overlay"
            }, null, -1))]), l.label ? (r(), o("span", le, i(l.label), 1)) : u("", !0)], 8, ee)], 2))
        }
    }), [
        ["__scopeId", "data-v-704373fd"]
    ]),
    re = {
        key: 1,
        class: "title-otp"
    },
    oe = {
        class: "mt-3"
    },
    ne = {
        class: "terms-ref"
    },
    ie = {
        class: "ml-2 chechbox-terms"
    },
    ue = {
        href: "/help-desk/terms",
        target: "_blank"
    },
    de = {
        href: "/help-desk/terms/privacy-policy",
        target: "_blank"
    },
    pe = P(l({
        __name: "SignupForm",
        setup(e) {
            const l = p(),
                {
                    Api: s
                } = c(),
                {
                    t: C
                } = m(),
                O = v(),
                P = h(),
                B = f("Email"),
                L = f(!1),
                Z = f(!1),
                H = f(!1),
                J = f(!1),
                Q = f(""),
                X = f(""),
                Y = f(""),
                ee = g(),
                ae = y(),
                te = _(),
                le = te.query.redirect;
            let pe = /^(?!.* )(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30}$/,
                ce = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,30})+$/;
            const me = f(),
                ve = () => {
                    B.value = "Email", L.value = !1, Z.value = !1, H.value = !1, J.value = !1, he.pass = "", he.email = "", he.referral = "", he.otp = "", he.terms = [1], me.value && me.value.resetFields()
                },
                he = b({
                    email: "",
                    pass: "",
                    terms: [1],
                    otp: "",
                    referral: ""
                }),
                fe = b({
                    email: [{
                        validator: (e, a, t) => {
                            "" === a ? t(new Error(C("auth.please-enter-email"))) : ce.test(a) ? t() : t(new Error(C("depwi.incorrect-format-try-again")))
                        },
                        trigger: "blur"
                    }],
                    pass: [{
                        validator: (e, a, t) => {
                            "" === a ? t(new Error(C("auth.enter-password"))) : pe.test(a) ? t() : t(new Error(C("auth.atlest-8-char-pass")))
                        },
                        trigger: "blur"
                    }],
                    terms: [{
                        validator: (e, a, t) => {
                            0 == a.length ? t(new Error(C("auth.enter-password"))) : t()
                        },
                        trigger: "blur"
                    }],
                    otp: [{
                        validator: (e, a, t) => {
                            6 != a.length ? t(new Error(C("pga.input-6-digit"))) : t()
                        },
                        trigger: "blur"
                    }]
                }),
                ge = e => {
                    J.value = !0, e && e.validate((e => {
                        if (!e) return J.value = !1, !1;
                        J.value = !1, je()
                    }))
                },
                ye = f(0),
                _e = f(!1),
                be = () => {
                    _e.value = !1;
                    let e = 0;
                    let a = setInterval((() => {
                        e += 1, ye.value = 60 - e
                    }), 1e3);
                    setTimeout((() => {
                        clearInterval(a), _e.value = !0, ye.value = 60
                    }), 3e4)
                },
                we = e => {
                    var a;
                    he.otp = e, 6 == e.length && (null == (a = me.value) || a.validateField("otp"))
                },
                ke = F(),
                xe = w(),
                je = async () => {
                    if ("Mobile" != B.value || "" != Q.value)
                        if ("" != he.pass) {
                            const e = new $,
                                a = new $;
                            Z.value ? ("" == Y.value && ("Email" == B.value ? (a.append("type", "TOKEN_REGISTER_MAIL"), a.append("emailCode", he.otp), a.append("account", he.email)) : (a.append("type", "TOKEN_REGISTER_PHONE"), a.append("phoneCode", he.otp), a.append("account", Q.value)), await s.regCheck(a).then((({
                                data: e
                            }) => {
                                500 == e.code ? ee.error(e.message) : 0 == e.code && (Y.value = e.message)
                            })).catch((e => {
                                ee.error(e), console.log(e)
                            }))), e.append("password", G(he.pass)), he.referral && he.referral.length > 3 && he.referral.length < 12 && e.append("promotion", he.referral), e.append("code", he.otp), e.append("token", Y.value), "Email" == B.value ? (e.append("type", "TOKEN_REGISTER_MAIL"), e.append("email", he.email), s.registerEmail(e).then((({
                                data: e
                            }) => {
                                500 == e.code ? (ee.error(e.message), null != e.total && 1 == e.total && (ve(), X.value = e.message)) : 0 == e.code && (P.tokenData = e.data.token, P.userData = e.data, O.tradeWalletId = e.data.subAccountId, xe.update({
                                    user_id: e.data.id.toString(),
                                    user_hash: e.data.accIdMob.toString().split(",")[0]
                                }), ke.clearAll(), ee.dismissAll(), ee.success(C("auth.registration-successful")), l.event("RegisterAccount"), window.fbq2opz("trackCustom", "RegisterAccount"), le ? "mpc" === le ? ae.push({
                                    name: "mpc",
                                    query: {
                                        open: "true"
                                    }
                                }) : le.startsWith("http") ? window.location.href = `${le}?userId=${P.userData.id}&userToken=${P.token}` : le.startsWith("/") ? ae.push(le) : ae.push({
                                    name: le
                                }) : ae.push({
                                    name: "index"
                                }))
                            })).catch((e => {
                                ee.error(e), console.log(e)
                            }))) : (e.append("type", "TOKEN_REGISTER_PHONE"), e.append("phone", Q.value), s.registerPhone(e).then((({
                                data: e
                            }) => {
                                500 == e.code ? (ee.error(e.message), null != e.total && 1 == e.total && (ve(), X.value = e.message)) : 0 == e.code && (P.tokenData = e.data.token, P.userData = e.data, O.tradeWalletId = e.data.subAccountId, ke.clearAll(), ee.dismissAll(), ee.success(C("auth.registration-successful")), le ? "mpc" === le ? ae.push({
                                    name: "mpc",
                                    query: {
                                        open: "true"
                                    }
                                }) : le.startsWith("http") ? window.location.href = `${le}?userId=${P.userData.id}&userToken=${P.token}` : le.startsWith("/") ? ae.push(le) : ae.push({
                                    name: le
                                }) : ae.push({
                                    name: "index"
                                }))
                            })).catch((e => {
                                ee.error(e), console.log(e)
                            })))) : "Mobile" == B.value ? Ee() : Ie()
                        } else ee.error("nopass");
                    else ee.error(C("auth.please-enter-mobile"))
                },
                Ee = () => {
                    const e = new $;
                    e.append("type", "TOKEN_REGISTER_PHONE"), e.append("phone", Q.value), s.sentRegisterSmsCode(e).then((({
                        data: e
                    }) => {
                        500 == e.code || 400 == e.code ? ee.error(e.message) : 0 == e.code && (ee.dismissAll(), ee.success(C("auth.sms-verification-code")), Z.value = !0, be())
                    })).catch((e => {
                        ee.error(e), console.log(e)
                    }))
                },
                Ie = () => {
                    const e = new $;
                    e.append("type", "TOKEN_REGISTER_MAIL"), e.append("email", he.email), s.sentRegisterEmailCode(e).then((({
                        data: e
                    }) => {
                        500 == e.code ? ee.error(e.message) : 0 == e.code && (ee.dismissAll(), ee.success(C("auth.email-code-sent")), Z.value = !0, be())
                    })).catch((e => {
                        ee.error(e), console.log(e)
                    }))
                };
            return f([1]), k((async () => {
                const e = f(te.params.slug);
                if (e.value) {
                    if (e.value.includes("@")) he.email = e.value;
                    else {
                        if (!/\d/.test(e.value)) return;
                        B.value = "Mobile", Q.value = e.value.toString()
                    }
                    ge(me.value)
                } else e.value = ""
            })), k((async () => {
                await new Promise((e => setTimeout(e, 1e3))), he.referral = localStorage.getItem("referral") ? ? ""
            })), (e, l) => {
                const s = M,
                    p = se,
                    c = t,
                    m = a;
                return r(), o(T, null, [Z.value ? u("", !0) : (r(), x(I(N), {
                    key: 0,
                    modelValue: B.value,
                    "onUpdate:modelValue": l[0] || (l[0] = e => B.value = e),
                    class: "auth-radio mb-4",
                    size: "large"
                }, {
                    default: j((() => [E(I(K), {
                        value: "Email",
                        label: "Email"
                    }), E(I(K), {
                        value: "Mobile",
                        label: "Mobile"
                    })])),
                    _: 1
                }, 8, ["modelValue"])), Z.value ? (r(), o("div", re, [S(i("Mobile" == B.value ? I(C)("auth.please-enter-sms-code").replace(":mobile:", Q.value) : I(C)("auth.please-enter-email-code").replace(":email:", he.email)) + " ", 1), l[14] || (l[14] = n("br", null, null, -1)), _e.value ? (r(), o("span", {
                    key: 0,
                    onClick: l[1] || (l[1] = e => {
                        "Mobile" == B.value ? Ee() : Ie()
                    })
                }, [E(I(W), {
                    class: "auth-link",
                    type: "primary"
                }, {
                    default: j((() => [S(i(I(C)("sett.resend")), 1)])),
                    _: 1
                })])) : u("", !0)])) : u("", !0), E(I(z), {
                    ref_key: "ruleFormRef",
                    ref: me,
                    model: he,
                    "status-icon": "",
                    rules: fe,
                    "label-width": "0px",
                    class: "auth-form",
                    onSubmit: l[13] || (l[13] = e => ge(me.value))
                }, {
                    default: j((() => [Z.value || "Mobile" != B.value ? Z.value ? u("", !0) : (r(), x(I(q), {
                        key: 1,
                        prop: "email"
                    }, {
                        default: j((() => [n("p", null, i(I(C)("auth.email")), 1), E(I(U), {
                            modelValue: he.email,
                            "onUpdate:modelValue": l[3] || (l[3] = e => he.email = e),
                            type: "email",
                            autocomplete: "false",
                            onInput: l[4] || (l[4] = e => {
                                var a;
                                return null == (a = me.value) ? void 0 : a.validateField("email")
                            }),
                            onKeyup: l[5] || (l[5] = V((e => ge(me.value)), ["enter"]))
                        }, {
                            prefix: j((() => l[15] || (l[15] = [n("i", {
                                class: "text-gray1 fas fa-at"
                            }, null, -1)]))),
                            _: 1
                        }, 8, ["modelValue"])])),
                        _: 1
                    })) : (r(), x(I(q), {
                        key: 0
                    }, {
                        default: j((() => [n("p", null, i(I(C)("auth.mobile")), 1), E(s, {
                            modelValue: Q.value,
                            "onUpdate:modelValue": l[2] || (l[2] = e => Q.value = e)
                        }, null, 8, ["modelValue"])])),
                        _: 1
                    })), Z.value ? u("", !0) : (r(), x(I(q), {
                        key: 2,
                        prop: "pass"
                    }, {
                        default: j((() => [n("p", null, i(I(C)("auth.password")), 1), E(I(U), {
                            modelValue: he.pass,
                            "onUpdate:modelValue": l[6] || (l[6] = e => he.pass = e),
                            type: "password",
                            autocomplete: "false",
                            "show-password": "",
                            onInput: l[7] || (l[7] = e => {
                                var a;
                                return null == (a = me.value) ? void 0 : a.validateField("pass")
                            }),
                            onKeyup: l[8] || (l[8] = V((e => ge(me.value)), ["enter"]))
                        }, {
                            prefix: j((() => l[16] || (l[16] = [n("i", {
                                class: "text-gray1 fas fa-lock"
                            }, null, -1)]))),
                            _: 1
                        }, 8, ["modelValue"])])),
                        _: 1
                    })), Z.value ? u("", !0) : (r(), x(I(q), {
                        key: 3
                    }, {
                        default: j((() => [n("p", {
                            class: "referral-title",
                            onClick: l[9] || (l[9] = e => H.value = !H.value)
                        }, [S(i(I(C)("auth.referral-code-optional")) + " ", 1), n("i", {
                            class: d(["text-white ml-1 fas", H.value ? "fa-angle-down" : "fa-angle-up"])
                        }, null, 2)]), A(E(I(U), {
                            modelValue: he.referral,
                            "onUpdate:modelValue": l[10] || (l[10] = e => he.referral = e),
                            autocomplete: "false"
                        }, {
                            prefix: j((() => l[17] || (l[17] = [n("i", {
                                class: "text-gray1 fas fa-user"
                            }, null, -1)]))),
                            _: 1
                        }, 8, ["modelValue"]), [
                            [R, H.value]
                        ])])),
                        _: 1
                    })), Z.value ? (r(), x(I(q), {
                        key: 4,
                        prop: "otp"
                    }, {
                        default: j((() => [E(D, {
                            ref: "otpInput",
                            class: "otp-body",
                            "input-classes": "otp-input",
                            separator: "-",
                            "num-inputs": 6,
                            "should-auto-focus": !0,
                            "is-input-num": !0,
                            onOnChange: we,
                            onOnComplete: we
                        }, null, 512)])),
                        _: 1
                    })) : u("", !0), Z.value ? u("", !0) : (r(), x(I(q), {
                        key: 5,
                        prop: "terms"
                    }, {
                        default: j((() => [n("div", oe, [E(p, {
                            modelValue: he.terms,
                            "onUpdate:modelValue": l[11] || (l[11] = e => he.terms = e),
                            color: "primary",
                            name: "terms",
                            value: 1
                        }, null, 8, ["modelValue"]), n("span", ne, [n("span", ie, [S(i(I(C)("auth.i-agree-to-the")) + " ", 1), n("a", ue, i(I(C)("auth.terms-of-service")), 1), S(" " + i(I(C)("auth.and")) + " ", 1), n("a", de, i(I(C)("auth.privacy-policy")), 1)])])])])),
                        _: 1
                    })), E(m, {
                        class: "mt-5"
                    }, {
                        default: j((() => [E(c, {
                            color: "primary",
                            to: {
                                name: "register"
                            },
                            fullwidth: "",
                            loading: J.value,
                            bold: "",
                            onClick: l[12] || (l[12] = e => {
                                ge(me.value)
                            })
                        }, {
                            default: j((() => [S(i(I(C)("auth.register")), 1)])),
                            _: 1
                        }, 8, ["loading"]), S(" " + i(X.value && X.value), 1)])),
                        _: 1
                    })])),
                    _: 1
                }, 8, ["model", "rules"])], 64)
            }
        }
    }), [
        ["__scopeId", "data-v-4bcdcd8b"]
    ]),
    ce = {
        class: "auth-nav"
    },
    me = {
        class: "center"
    },
    ve = {
        class: "right mr-3"
    },
    he = {
        class: "auth-wrapper"
    },
    fe = {
        class: "container"
    },
    ge = {
        class: "card-wrapper"
    },
    ye = {
        class: "columns is-vcentered col-reg"
    },
    _e = {
        class: "column is-7 is-hidden-mobile justify-center items-center flex flex-col py-5"
    },
    be = {
        class: "flex flex-col text-center pl-5"
    },
    we = {
        class: "column is-5"
    },
    ke = {
        class: "form-card"
    },
    xe = {
        class: "auth-head"
    },
    je = {
        class: "forgot-link has-text-centered mt-4 social-logins"
    },
    Ee = {
        class: "forgot-link has-text-centered mt-4"
    },
    Ie = P(l({
        __name: "SignupIllustration",
        setup(e) {
            const {
                Api: a
            } = c(), t = F(), l = w(), s = y(), u = _(), d = v(), p = g(), b = u.query.redirect, x = f(""), V = h(), A = {
                clientId: "988455522192-39ikcvmelh42kvj67b55gjim2rlcj80b.apps.googleusercontent.com",
                context: "signup"
            };
            k((async () => {
                await new Promise((e => setTimeout(e, 1e3))), x.value = localStorage.getItem("referral") ? ? ""
            }));
            const R = e => {
                    const r = new FormData;
                    r.append("idToken", e), r.append("isGoogle", "true"), r.append("ref", x.value), a.registerSocial(r).then((({
                        data: e
                    }) => {
                        500 == e.code ? p.error(e.message) : 0 == e.code && e.data ? (V.tokenData = e.data.token, V.userData = e.data, d.tradeWalletId = e.data.subAccountId, l.update({
                            user_id: e.data.id.toString(),
                            user_hash: e.data.accIdMob.toString().split(",")[0]
                        }), t.clearAll(), p.dismissAll(), p.success(T("auth.registration-successful")), b ? "mpc" === b ? s.push({
                            name: "mpc",
                            query: {
                                open: "true"
                            }
                        }) : b.startsWith("http") ? window.location.href = `${b}?userId=${V.userData.id}&userToken=${V.token}` : b.startsWith("/") ? s.push(b) : s.push({
                            name: b
                        }) : s.push({
                            name: "index"
                        })) : p.error(e.message)
                    })).catch((e => {
                        p.error(e), console.log(e)
                    }))
                },
                {
                    t: T
                } = m();
            k((() => {
                P()
            }));
            const P = () => {
                    Q(A).then((e => {
                        (null == e ? void 0 : e.credential) ? R(e.credential): p.error("Error occured. Please try again later.")
                    })).catch((e => {
                        p.error("Error occured. Please try again later.")
                    }))
                },
                M = e => {
                    const {
                        credential: a
                    } = e;
                    a ? R(a) : p.error("Error occured. Please try again later.")
                },
                $ = () => {
                    console.error("Signin Failed")
                };
            return (e, a) => {
                const t = C("RouterLink"),
                    l = L,
                    s = B,
                    u = pe;
                return r(), o("div", null, [n("div", ce, [n("div", me, [E(t, {
                    to: "/",
                    class: "header-item"
                }, {
                    default: j((() => a[0] || (a[0] = [n("img", {
                        src: Z,
                        alt: "logo"
                    }, null, -1)]))),
                    _: 1
                })]), n("div", ve, [E(H), E(J)])]), n("div", he, [n("div", fe, [n("div", ge, [n("div", ye, [n("div", _e, [a[3] || (a[3] = n("img", {
                    class: "pl-3",
                    src: "/images/illustrations/img-register2.png",
                    width: "400"
                }, null, -1)), n("div", be, [E(l, {
                    tag: "h3",
                    size: 4,
                    weight: "bold"
                }, {
                    default: j((() => a[1] || (a[1] = [n("span", {
                        class: "text-gradient"
                    }, "Register and claim your rewards!", -1)]))),
                    _: 1
                }), E(s, {
                    tag: "p",
                    size: 5,
                    weight: "thin",
                    class: "mx-auto max-w-6 b-centered-tablet-p pt-2 pb-0 mb-2"
                }, {
                    default: j((() => a[2] || (a[2] = [S(" Go through the registration steps to claim your rewards and begin your crypto journey with us! ")]))),
                    _: 1
                })])]), n("div", we, [n("div", ke, [n("div", xe, [E(l, {
                    tag: "h2",
                    size: 3,
                    weight: "thin",
                    narrow: ""
                }, {
                    default: j((() => [S(i(I(T)("auth.welcome-to")), 1)])),
                    _: 1
                })]), E(u), n("div", je, [a[4] || (a[4] = n("a", null, [n("i", {
                    class: "iconify fa-brands:google",
                    alt: "Google Register",
                    "data-icon": "fa-brands:google",
                    "data-inline": "false"
                })], -1)), E(I(O), {
                    style: {
                        opacity: "0",
                        width: "40px",
                        position: "absolute",
                        overflow: "hidden"
                    },
                    onSuccess: M,
                    onError: $
                })]), n("div", Ee, [E(t, {
                    to: {
                        name: "auth"
                    }
                }, {
                    default: j((() => [S(i(I(T)("pga.already-registered")), 1)])),
                    _: 1
                })])])])])])])])])
            }
        }
    }), [
        ["__scopeId", "data-v-b6796a9c"]
    ]),
    Se = {
        class: "inline-block px-2"
    },
    Ve = {
        class: "inline-block px-2"
    },
    Ae = l({
        __name: "signup-3",
        setup(a) {
            const {
                t: t
            } = m();
            return X(t("auth.welcome-to") + " | Discover the power of the KeyFusion", "Start your journey with OPZ today and unlock the full potential of OPZ. Access our innovative features and exclusive offers. Download The OPZ app now!"), (a, l) => {
                const s = Ie,
                    u = C("RouterLink"),
                    d = e;
                return r(), o(T, null, [n("div", null, [E(s)]), E(d, null, {
                    links: j((() => [n("li", Se, [E(u, {
                        to: {
                            name: "index"
                        },
                        class: "footer-link"
                    }, {
                        default: j((() => [S(i(I(t)("pga.home")), 1)])),
                        _: 1
                    })]), n("li", Ve, [E(u, {
                        to: {
                            name: "help-desk-center"
                        },
                        class: "footer-link"
                    }, {
                        default: j((() => [S(i(I(t)("pga.help-center")), 1)])),
                        _: 1
                    })])])),
                    _: 1
                })], 64)
            }
        }
    });
"function" == typeof Y && Y(Ae);
export {
    Ae as
    default
};