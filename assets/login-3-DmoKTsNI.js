import {
    _ as e
} from "./FooterB-Blg-ttBc.js";
import {
    _ as a
} from "./SectionTitle.vue_vue_type_script_setup_true_lang-BWlX4763.js";
import {
    _ as t
} from "./Button-BbTMX0Dh.js";
import {
    _ as l
} from "./VPlaceload-jGgmcTFZ.js";
import {
    _ as s
} from "./Control-CwktQ3QA.js";
import {
    _ as o
} from "./TelInput.vue_vue_type_style_index_0_lang-BW-J4Rxk.js";
import {
    m as r,
    dm as i,
    y as n,
    dn as u,
    F as d,
    u as c,
    Y as p,
    a as m,
    G as v,
    dp as h,
    K as g,
    dA as f,
    o as y,
    j as _,
    X as k,
    v as b,
    w as j,
    q as w,
    l as x,
    s as I,
    n as A,
    t as E,
    dh as S,
    p as V,
    P as q,
    I as C,
    B as P,
    C as D,
    cC as $,
    ck as F
} from "./index-jdACH0Rc.js";
import "./index-Dwv4qbXN.js";
import {
    F as L
} from "./browser-B3Bvmjnq.js";
import {
    V as W
} from "./vue3-otp-input-WwN5-mwI.js";
import {
    a as T
} from "./avatarSettings-Daanxsoo.js";
import {
    M
} from "./index-TLDTKfLl.js";
import {
    p as z,
    u as K,
    a as O
} from "./index-B7UsHWbz.js";
import {
    e as B
} from "./encrypt-BD7XOn5Z.js";
import {
    E as G
} from "./index-BoKGXuju.js";
import {
    E as U
} from "./index-CCs2guro.js";
import {
    a as R,
    E as N
} from "./index-qJerOQq9.js";
import {
    a as Q,
    E as H
} from "./index-CrBYayi3.js";
import {
    E as Z
} from "./index-DBFvTDaE.js";
import {
    _ as J
} from "./Title-ChmnbwlA.js";
import {
    _ as X
} from "./logo-DqlCWKKL.js";
import {
    i as Y
} from "./vue-qrcode.esm-BQaBru8p.js";
import {
    y as ee
} from "./index.esm-D0uMNszy.js";
import {
    A as ae,
    a as te
} from "./AppPop-C6dVPDH2.js";
import {
    _ as le
} from "./_plugin-vue_export-helper-BCo6x5W8.js";
import {
    u as se
} from "./useSeoMeta-CRPJPIvz.js";
import {
    b as oe
} from "./route-block-B_A1xBdJ.js";
import "./Subtitle-ytb6lg8s.js";
import "./all-countries-_6k8nJ5H.js";
import "./index-cRGdv3RN.js";
import "./index-Citk0ABi.js";
import "./index-D4R9Vjdp.js";
import "./vue3-avataaars-C_k_hIh4.js";
import "./_commonjs-dynamic-modules-BHR_E30J.js";
import "./___vite-browser-external_commonjs-proxy-BKgLGdYW.js";
import "./_baseClone-mconpdQJ.js";
import "./_initCloneObject-CyvZF8uk.js";
import "./typescript-CRqm1_SZ.js";
import "./browser-ZWSpNtBY.js";
import "./index-DPTDKB4o.js";
import "./index-DtPnfIe2.js";
import "./google-play-0W6tGWt8.js";
import "./vue.8fc199ce-D3bCrqKA.js";
const re = {
        key: 0,
        class: "flex flex-col",
        style: {
            "align-items": "start"
        }
    },
    ie = {
        key: 2,
        class: "title-otp"
    },
    ne = r({
        __name: "LoginForm",
        setup(e) {
            var a;
            const {
                Api: t
            } = i(), l = n(""), r = u();
            let C, P, D, $, F, J; {
                null == (a = d()) || a.appContext.app.use(z, {
                    v2SiteKey: "6Lcg1HomAAAAAE-HeBkKd9kexjpOQSLZxSf57jVD"
                }), K();
                const e = O({
                    options: {
                        size: "invisible"
                    }
                });
                C = e.root, P = e.execute, D = e.onVerify, $ = e.onError, F = e.reset, J = e.onExpired, D((e => {
                    xe(e), F()
                })), $((() => {
                    X(!1)
                })), J((() => {
                    X(!0)
                }))
            }
            const X = e => {
                e || se.error(te("auth.failed-quiz")), l.value = "", F()
            };
            T();
            const Y = c(),
                ee = n("Email"),
                ae = n("EmailAuth"),
                {
                    t: te
                } = p(),
                le = n(""),
                se = m(),
                oe = v(),
                ne = h(),
                ue = n(!1),
                de = n(""),
                ce = n(""),
                pe = n(!1),
                me = ne.query.redirect;
            let ve = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,30})+$/;
            const he = n(),
                ge = e => {
                    var a;
                    fe.otp = e, 6 == e.length && (null == (a = he.value) || a.validateField("otp"))
                },
                fe = g({
                    email: "",
                    pass: "",
                    otp: ""
                }),
                ye = g({
                    email: [{
                        validator: (e, a, t) => {
                            "" === a ? t(new Error(te("auth.please-enter-email"))) : ve.test(a) ? t() : t(new Error(te("depwi.incorrect-format-try-again")))
                        },
                        trigger: "blur"
                    }],
                    pass: [{
                        validator: (e, a, t) => {
                            "" === a ? t(new Error(te("auth.enter-password"))) : t()
                        },
                        trigger: "blur"
                    }],
                    otp: [{
                        validator: (e, a, t) => {
                            6 != a.length ? t(new Error(te("pga.input-6-digit"))) : t()
                        },
                        trigger: "blur"
                    }]
                }),
                _e = e => {
                    e && e.validate((e => {
                        if (!e) return !1;
                        l.value ? xe() : P()
                    }))
                },
                ke = n(0),
                be = n(!1),
                je = () => {
                    be.value = !1;
                    let e = 0;
                    let a = setInterval((() => {
                        e += 1, ke.value = 10 - e
                    }), 1e3);
                    setTimeout((() => {
                        clearInterval(a), be.value = !0, ke.value = 10
                    }), 1e4)
                },
                we = f(),
                xe = async e => {
                    if ("Mobile" != ee.value || "" != le.value) {
                        if ("" != fe.pass) {
                            const a = new L;
                            a.append("username", "Mobile" == ee.value ? le.value : fe.email), l.value && a.append("token", l.value), e && a.append("captcha", e), ue.value && a.append("code", fe.otp), a.append("password", B(fe.pass)), pe.value = !0, t.login(a).then((async ({
                                data: e
                            }) => {
                                500 == e.code ? se.error(e.message) : 0 == e.code && ("mb" == e.message ? (ae.value = "PhoneAuth", ce.value = e.data[0], l.value = e.data[1], de.value = te("auth.please-enter-sms-code").replace(":mobile:", e.data[0]), ue.value = !0, je()) : "em" == e.message ? (ae.value = "EmailAuth", ce.value = e.data[0], l.value = e.data[1], de.value = te("auth.please-enter-email-code").replace(":email:", e.data[0]), ue.value = !0, je()) : "au" == e.message ? (ae.value = "GoogleAuth", ue.value = !0, de.value = te("sett.enter-google-auth"), l.value = e.data) : (Y.tokenData = e.data.token, Y.userData = e.data, r.tradeWalletId = e.data.subAccountId, M.setAvatar(e.data), we.update({
                                    user_id: e.data.id.toString(),
                                    user_hash: e.data.accIdMob.toString().split(",")[0]
                                }), se.dismissAll(), se.success(te("auth.success")), l.value = "", me ? "mpc" === me ? oe.push({
                                    name: "mpc",
                                    query: {
                                        open: "true"
                                    }
                                }) : me.startsWith("http") ? window.location.href = `${me}?userId=${Y.userData.id}&userToken=${Y.token}` : me.startsWith("/") ? oe.push(me) : oe.push({
                                    name: me
                                }) : oe.push({
                                    name: "index"
                                })))
                            })).catch((e => {
                                se.error(e)
                            })).finally((() => {
                                pe.value = !1
                            }))
                        }
                    } else se.error(te("auth.please-enter-mobile"))
                };
            return (e, a) => {
                const t = o,
                    i = s;
                return y(), _(q, null, [k(r).isAppOn ? (y(), _("div", re, [b(k(G), {
                    title: "Login through app is unavailable; please use your mobile browser instead. For Staking or Presale, connect your wallet directly without logging in.",
                    type: "info",
                    "show-icon": "",
                    closable: !0,
                    effect: "dark"
                }), b(k(U), {
                    class: "mb-1 mt-2",
                    onClick: a[0] || (a[0] = e => k(oe).push({
                        name: "presale"
                    }))
                }, {
                    default: j((() => a[13] || (a[13] = [w("Visit Presale "), x("i", {
                        class: "iconify ml-1",
                        "data-icon": "feather:external-link",
                        "data-inline": "false"
                    }, null, -1)]))),
                    _: 1
                }), b(k(U), {
                    class: "mb-3",
                    onClick: a[1] || (a[1] = e => k(oe).push({
                        name: "staking"
                    }))
                }, {
                    default: j((() => a[14] || (a[14] = [w("Visit Staking "), x("i", {
                        class: "iconify ml-1",
                        "data-icon": "feather:external-link",
                        "data-inline": "false"
                    }, null, -1)]))),
                    _: 1
                })])) : I("", !0), ue.value ? I("", !0) : (y(), A(k(N), {
                    key: 1,
                    modelValue: ee.value,
                    "onUpdate:modelValue": a[2] || (a[2] = e => ee.value = e),
                    class: "auth-radio mb-4",
                    size: "large"
                }, {
                    default: j((() => [b(k(R), {
                        value: "Email",
                        label: "Email"
                    }), b(k(R), {
                        value: "Mobile",
                        label: "Mobile"
                    })])),
                    _: 1
                }, 8, ["modelValue"])), ue.value ? (y(), _("div", ie, [w(E(de.value) + " ", 1), a[15] || (a[15] = x("br", null, null, -1)), be.value ? (y(), _("span", {
                    key: 0,
                    onClick: a[3] || (a[3] = e => {
                        l.value ? xe() : P()
                    })
                }, [b(k(U), {
                    type: "primary"
                }, {
                    default: j((() => [w(E(k(te)("sett.resend")), 1)])),
                    _: 1
                })])) : I("", !0)])) : I("", !0), b(k(H), {
                    ref_key: "ruleFormRef",
                    ref: he,
                    model: fe,
                    "status-icon": "",
                    rules: ye,
                    "label-width": "0px",
                    class: "auth-form",
                    onSubmit: a[12] || (a[12] = e => _e(he.value))
                }, {
                    default: j((() => [ue.value || "Mobile" != ee.value ? ue.value ? I("", !0) : (y(), A(k(Q), {
                        key: 1,
                        prop: "email"
                    }, {
                        default: j((() => [x("p", null, E(k(te)("auth.email")), 1), b(k(Z), {
                            modelValue: fe.email,
                            "onUpdate:modelValue": a[5] || (a[5] = e => fe.email = e),
                            type: "email",
                            autocomplete: "false",
                            onInput: a[6] || (a[6] = e => {
                                var a;
                                return null == (a = he.value) ? void 0 : a.validateField("email")
                            }),
                            onKeyup: a[7] || (a[7] = S((e => _e(he.value)), ["enter"]))
                        }, {
                            prefix: j((() => a[16] || (a[16] = [x("i", {
                                class: "text-gray1 fas fa-at"
                            }, null, -1)]))),
                            _: 1
                        }, 8, ["modelValue"])])),
                        _: 1
                    })) : (y(), A(k(Q), {
                        key: 0
                    }, {
                        default: j((() => [x("p", null, E(k(te)("auth.mobile")), 1), b(t, {
                            modelValue: le.value,
                            "onUpdate:modelValue": a[4] || (a[4] = e => le.value = e)
                        }, null, 8, ["modelValue"])])),
                        _: 1
                    })), ue.value ? I("", !0) : (y(), A(k(Q), {
                        key: 2,
                        prop: "pass"
                    }, {
                        default: j((() => [x("p", null, E(k(te)("auth.password")), 1), b(k(Z), {
                            modelValue: fe.pass,
                            "onUpdate:modelValue": a[8] || (a[8] = e => fe.pass = e),
                            type: "password",
                            onInput: a[9] || (a[9] = e => {
                                var a;
                                return null == (a = he.value) ? void 0 : a.validateField("pass")
                            }),
                            autocomplete: "false",
                            onKeyup: a[10] || (a[10] = S((e => _e(he.value)), ["enter"])),
                            "show-password": ""
                        }, {
                            prefix: j((() => a[17] || (a[17] = [x("i", {
                                class: "text-gray1 fas fa-lock"
                            }, null, -1)]))),
                            _: 1
                        }, 8, ["modelValue"])])),
                        _: 1
                    })), ue.value ? (y(), A(k(Q), {
                        key: 3,
                        prop: "otp"
                    }, {
                        default: j((() => [b(W, {
                            ref: "otpInput",
                            class: "otp-body",
                            "input-classes": "otp-input",
                            separator: "-",
                            "num-inputs": 6,
                            "should-auto-focus": !0,
                            "is-input-num": !0,
                            onOnChange: ge,
                            onOnComplete: ge
                        }, null, 512)])),
                        _: 1
                    })) : I("", !0), b(i, {
                        class: "mt-5"
                    }, {
                        default: j((() => [x("a", {
                            "aria-current": "page",
                            onClick: a[11] || (a[11] = e => _e(he.value)),
                            class: V(["router-link-active router-link-exact-active button is-primary is-bold is-fullwidth", {
                                "is-loading": pe.value
                            }])
                        }, E(k(te)("auth.log-in")), 3)])),
                        _: 1
                    })])),
                    _: 1
                }, 8, ["model", "rules"]), x("div", {
                    ref_key: "root",
                    ref: C
                }, null, 512)], 64)
            }
        }
    }),
    ue = {
        class: "auth-nav"
    },
    de = {
        class: "center"
    },
    ce = {
        class: "right mr-3"
    },
    pe = {
        class: "auth-wrapper"
    },
    me = {
        class: "container"
    },
    ve = {
        class: "columns is-vcentered"
    },
    he = {
        class: "column is-5"
    },
    ge = {
        class: "form-card"
    },
    fe = {
        class: "auth-head"
    },
    ye = {
        class: "forgot-link has-text-centered mt-4 social-logins"
    },
    _e = {
        class: "forgot-link has-text-centered"
    },
    ke = {
        class: "reg-link has-text-centered"
    },
    be = {
        class: "column is-6 pt-0 is-hidden-mobile flex justify-center flex-col"
    },
    je = {
        class: "flex justify-center"
    },
    we = {
        class: "qrcode"
    },
    xe = {
        key: 2,
        class: "qrcode__image",
        src: "/assets/logo/logo1.svg",
        alt: "Bitcoin"
    },
    Ie = le(r({
        __name: "LoginIllustration",
        setup(e) {
            const {
                Api: s
            } = i(), o = h().query.redirect, r = u();
            T();
            const d = c(),
                g = m(),
                {
                    t: S
                } = p(),
                V = v(),
                q = f(),
                L = n(""),
                W = n(""),
                z = n(!1),
                K = () => {
                    s.generateLogin().then((({
                        data: e
                    }) => {
                        500 == e.code ? W.value = "" : 0 == e.code && (W.value = "opzlogin" + e.data)
                    }))
                },
                O = {
                    clientId: "988455522192-39ikcvmelh42kvj67b55gjim2rlcj80b.apps.googleusercontent.com",
                    context: "signin"
                };
            C((async () => {
                var e, a;
                await new Promise((e => setTimeout(e, 1e3))), L.value = localStorage.getItem("referral") ? ? "", d.token && (null == (e = d.userData) ? void 0 : e.id) && (null == (a = null == o ? void 0 : o.startsWith) ? void 0 : a.call(o, "http")) && s.getUserFeeLevel().then((({
                    data: e
                }) => {
                    200 === (null == e ? void 0 : e.errCode) && (window.location.href = `${o}?userId=${d.userData.id}&userToken=${d.token}`)
                })).catch(console.error)
            })), K();
            const B = e => {
                const a = new FormData;
                a.append("idToken", e), a.append("isGoogle", "true"), a.append("password", ""), a.append("auth", ""), s.loginSocial(a).then((({
                    data: e
                }) => {
                    0 == e.code && e.data ? (d.tokenData = e.data.token, d.userData = e.data, r.tradeWalletId = e.data.subAccountId, q.update({
                        user_id: e.data.id.toString(),
                        user_hash: e.data.accIdMob.toString().split(",")[0]
                    }), M.setAvatar(e.data), g.dismissAll(), g.success(S("auth.success")), o ? "mpc" === o ? V.push({
                        name: "mpc",
                        query: {
                            open: "true"
                        }
                    }) : o.startsWith("http") ? window.location.href = `${o}?userId=${d.userData.id}&userToken=${d.token}` : o.startsWith("/") ? V.push(o) : V.push({
                        name: o
                    }) : V.push({
                        name: "index"
                    })) : e.message.startsWith("LINK-") ? g.error("Please use our App to link your account.") : g.error(e.message)
                })).catch((e => {
                    g.error(e), console.log(e)
                }))
            };
            let G = null;
            const U = () => {
                W.value && s.checkKeyLogin(W.value.replace("opzlogin", "")).then((({
                    data: e
                }) => {
                    0 == e.code && e.data && (null !== G && clearInterval(G), d.tokenData = e.data.token, d.userData = e.data, r.tradeWalletId = e.data.subAccountId, M.setAvatar(e.data), q.update({
                        user_id: e.data.id.toString(),
                        user_hash: e.data.accIdMob.toString().split(",")[0]
                    }), g.dismissAll(), g.success(S("auth.success")), o ? "mpc" === o ? V.push({
                        name: "mpc",
                        query: {
                            open: "true"
                        }
                    }) : o.startsWith("http") ? window.location.href = `${o}?userId=${d.userData.id}&userToken=${d.token}` : o.startsWith("/") ? V.push(o) : V.push({
                        name: o
                    }) : V.push({
                        name: "index"
                    }))
                }))
            };
            P(z, ((e, a) => {
                e ? null !== G && (clearInterval(G), G = null) : G = setInterval(U, 5e3)
            }), {
                immediate: !0
            });
            const R = () => {
                    z.value = !1, setTimeout((() => {
                        z.value = !0, U()
                    }), 6e4)
                },
                N = () => {
                    K(), R()
                };
            R(), D((() => {
                null !== G && clearInterval(G)
            })), C((() => {
                ee(O).then((e => {
                    (null == e ? void 0 : e.credential) ? B(e.credential): g.error("Error occured. Please try again later.")
                })).catch((e => {
                    g.error("Error occured. Please try again later.")
                }))
            }));
            const Q = e => {
                    const {
                        credential: a
                    } = e;
                    a ? B(a) : g.error("Error occured. Please try again later.")
                },
                H = () => {
                    console.error("Signin Failed")
                };
            return (e, s) => {
                const r = $("RouterLink"),
                    i = J,
                    n = ne,
                    u = $("GoogleSignInButton"),
                    d = l,
                    c = t,
                    p = a;
                return y(), _("div", null, [x("div", ue, [x("div", de, [b(r, {
                    to: "/",
                    class: "header-item"
                }, {
                    default: j((() => s[0] || (s[0] = [x("img", {
                        src: X,
                        alt: "logo"
                    }, null, -1)]))),
                    _: 1
                })]), x("div", ce, [b(ae), b(te)])]), x("div", pe, [x("div", me, [x("div", ve, [x("div", he, [x("div", ge, [x("div", fe, [b(i, {
                    tag: "h2",
                    size: 3,
                    weight: "thin",
                    narrow: ""
                }, {
                    default: j((() => [w(E(k(S)("auth.log-in")), 1)])),
                    _: 1
                })]), b(n)]), x("div", ye, [s[1] || (s[1] = x("a", null, [x("i", {
                    class: "iconify fa-brands:google",
                    alt: "Google Register",
                    "data-icon": "fa-brands:google",
                    "data-inline": "false"
                })], -1)), b(u, {
                    style: {
                        opacity: "0",
                        width: "40px",
                        position: "absolute",
                        overflow: "hidden"
                    },
                    onSuccess: Q,
                    onError: H
                })]), x("div", _e, [b(r, {
                    to: {
                        name: "reset-password"
                    }
                }, {
                    default: j((() => [w(E(k(S)("auth.forgot-password")), 1)])),
                    _: 1
                })]), x("div", ke, [b(r, {
                    to: {
                        name: "register",
                        query: {
                            redirect: k(o)
                        }
                    }
                }, {
                    default: j((() => [w(E(k(S)("auth.create-your-opz-acc")), 1)])),
                    _: 1
                }, 8, ["to"])])]), x("div", be, [x("div", je, [x("figure", we, [W.value ? (y(), A(k(Y), {
                    key: 1,
                    style: F(z.value && "opacity:0.15"),
                    value: W.value,
                    options: {
                        width: 147,
                        errorCorrectionLevel: "Q"
                    },
                    tag: "svg"
                }, null, 8, ["style", "value"])) : (y(), A(d, {
                    key: 0,
                    width: "147px",
                    height: "147px",
                    style: {
                        "border-radius": "15px"
                    }
                })), !z.value && W.value ? (y(), _("img", xe)) : W.value ? (y(), A(c, {
                    key: 3,
                    class: "qrcode__image",
                    style: {
                        "min-height": "30px"
                    },
                    color: "primary",
                    long: 1,
                    bold: "",
                    onClick: N
                }, {
                    default: j((() => [w(E(k(S)("wall.reset")), 1)])),
                    _: 1
                })) : I("", !0)])]), b(p, {
                    class: "mt-4",
                    title: k(S)("auth.scan-to-login-securely"),
                    subtitle: k(S)("auth.log-in-with-qr")
                }, null, 8, ["title", "subtitle"])])])])])])
            }
        }
    }), [
        ["__scopeId", "data-v-aa223219"]
    ]),
    Ae = {
        class: "inline-block px-2"
    },
    Ee = {
        class: "inline-block px-2"
    },
    Se = r({
        __name: "login-3",
        setup(a) {
            const {
                t: t
            } = p();
            return se(t("auth.log-in"), "Securely access your OPZ account. Enter the future of Web3 with us. Unlock limitless cryptocurrency opportunities safely."), (a, l) => {
                const s = Ie,
                    o = $("RouterLink"),
                    r = e;
                return y(), _(q, null, [x("div", null, [b(s)]), b(r, null, {
                    links: j((() => [x("li", Ae, [b(o, {
                        to: {
                            name: "index"
                        },
                        class: "footer-link"
                    }, {
                        default: j((() => [w(E(k(t)("pga.home")), 1)])),
                        _: 1
                    })]), x("li", Ee, [b(o, {
                        to: {
                            name: "help-desk-center"
                        },
                        class: "footer-link"
                    }, {
                        default: j((() => [w(E(k(t)("pga.help-center")), 1)])),
                        _: 1
                    })])])),
                    _: 1
                })], 64)
            }
        }
    });
"function" == typeof oe && oe(Se);
export {
    Se as
    default
};