import e from "./avatarEdit-QSoXd_Wk.js";
import {
    _ as a
} from "./VPlaceload-jGgmcTFZ.js";
import {
    _ as t
} from "./user-qMNVzsWD.js";
import {
    m as s,
    a as l,
    Y as o,
    y as i,
    dm as r,
    K as n,
    u as c,
    G as d,
    dA as u,
    o as m,
    j as p,
    v,
    w as f,
    q as h,
    t as g,
    X as w,
    l as y,
    n as b,
    s as x,
    P as k,
    I as _,
    dn as V,
    dh as j,
    N as C,
    dz as P,
    h as A,
    p as D,
    k as S,
    bc as O
} from "./index-jdACH0Rc.js";
import {
    M as U
} from "./index-Dwv4qbXN.js";
import {
    _ as E
} from "./lodash-Bck59wt3.js";
import {
    F as N
} from "./browser-B3Bvmjnq.js";
import {
    e as z
} from "./encrypt-BD7XOn5Z.js";
import {
    E as q
} from "./index-CYOIannN.js";
import {
    E as I
} from "./index-BoKGXuju.js";
import {
    E as F,
    a as B
} from "./index-CrBYayi3.js";
import {
    E as L
} from "./index-DBFvTDaE.js";
import {
    E as M
} from "./index-C8W9xb4z.js";
import {
    E as T
} from "./index-Y8R-DFnQ.js";
import {
    i as R
} from "./vue-qrcode.esm-BQaBru8p.js";
import {
    V as G
} from "./vue3-otp-input-WwN5-mwI.js";
import {
    E as W
} from "./index-Citk0ABi.js";
import {
    _ as K
} from "./doubleCheck.vue_vue_type_style_index_0_lang-DtYRgs-3.js";
import {
    _ as J
} from "./TelInput.vue_vue_type_style_index_0_lang-BW-J4Rxk.js";
import {
    E as $
} from "./index-CCs2guro.js";
import {
    _ as H
} from "./_plugin-vue_export-helper-BCo6x5W8.js";
import {
    a as Q
} from "./avatarSettings-Daanxsoo.js";
import {
    j as Y
} from "./vue3-avataaars-C_k_hIh4.js";
import {
    a as Z,
    E as X
} from "./index-DZsnwgZr.js";
import {
    E as ee
} from "./index-Dq1-XyVz.js";
import {
    u as ae
} from "./usePageTitle-BxNzo3__.js";
import "./index-TLDTKfLl.js";
import "./index-BFdxE0IH.js";
import "./validator-Rlal7f47.js";
import "./index-D4R9Vjdp.js";
import "./index-qJerOQq9.js";
import "./index-cRGdv3RN.js";
import "./use-global-config-Dm8LyY4T.js";
import "./index-Cg9BJciP.js";
import "./index-B1yvdImc.js";
import "./use-dialog-CmZNE833.js";
import "./index-BWeq1WY3.js";
import "./_commonjs-dynamic-modules-BHR_E30J.js";
import "./___vite-browser-external_commonjs-proxy-BKgLGdYW.js";
import "./_baseClone-mconpdQJ.js";
import "./_initCloneObject-CyvZF8uk.js";
import "./typescript-CRqm1_SZ.js";
import "./aria-C-hsWcn7.js";
import "./browser-ZWSpNtBY.js";
import "./Control-CwktQ3QA.js";
import "./all-countries-_6k8nJ5H.js";
import "./isPlainObject--3V5F7Ei.js";
import "./vue.8fc199ce-D3bCrqKA.js";
import "./viewWrapper-Dh8gOQC5.js";
const te = {
        class: "flex text-gray4 head-title items-center mb-1"
    },
    se = {
        class: "columns deposit-content"
    },
    le = {
        class: "column is-12 px-5"
    },
    oe = {
        class: "field mt-3"
    },
    ie = {
        class: "help text-medium text-left"
    },
    re = {
        class: "help text-medium mb-1 text-left"
    },
    ne = {
        class: "help nssa text-medium mb-1 text-left"
    },
    ce = {
        ref: "confirmButton",
        class: "dialog-footer"
    },
    de = s({
        __name: "changePass",
        setup(e) {
            const a = l(),
                {
                    t: t
                } = o(),
                s = i(!1);
            i(!1);
            const _ = i(!1),
                {
                    Api: V
                } = r();
            n({
                oldPassword: "",
                newPassword: "",
                confirmNewPassword: ""
            });
            const j = () => {
                    s.value || (s.value = !0)
                },
                C = e => {
                    for (var a = e.toLowerCase().split(" "), t = 0; t < a.length; t++) a[t] = a[t].charAt(0).toUpperCase() + a[t].substring(1);
                    return a.join(" ")
                };
            let P = /^(?!.* )(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30}$/;
            const A = i(),
                D = n({
                    newPass: "",
                    checkNewPass: "",
                    pass: ""
                }),
                S = n({
                    newPass: [{
                        validator: (e, a, s) => {
                            if ("" === a) s(new Error(t("auth.new-password-not-empty")));
                            else if (P.test(a)) {
                                if ("" !== D.checkNewPass) {
                                    if (!A.value) return;
                                    A.value.validateField("checkNewPass", (() => null))
                                }
                                s()
                            } else s(new Error(t("auth.atlest-8-char-pass")))
                        },
                        trigger: "blur"
                    }],
                    checkNewPass: [{
                        validator: (e, a, s) => {
                            "" === a ? s(new Error(t("auth.please-confirm-pass"))) : a !== D.newPass ? s(new Error(t("auth.password-not-match"))) : s()
                        },
                        trigger: "blur"
                    }],
                    pass: [{
                        validator: (e, a, s) => {
                            "" === a ? s(new Error(t("auth.please-enter-old-pass"))) : s()
                        },
                        trigger: "blur"
                    }]
                }),
                {
                    logoutUser: O,
                    userData: U
                } = c(),
                E = i(6 === U.commonStatus),
                R = d(),
                G = u(),
                W = e => {
                    e && e.resetFields()
                };
            return (e, s) => (m(), p(k, null, [v(w(q), {
                size: "small",
                color: "var(--primary)",
                class: "text-medium",
                style: {
                    color: "white"
                },
                onClick: s[0] || (s[0] = e => {
                    T.confirm(t("ctm.pass-not-change-site-rec"), {
                        confirmButtonText: t("sett.continue"),
                        title: t("auth.change-password"),
                        showCancelButton: !0,
                        customClass: "sasfw dsaaaa",
                        confirmButtonClass: "btn-prime-box",
                        customStyle: {
                            "background-color": "black",
                            "border-color": "#1b1b1b",
                            "--el-button-bg-color": "#fff",
                            "--el-messagebox-font-size": "14px !important"
                        },
                        type: "warning"
                    }).then((() => {
                        _.value = !0
                    })).catch((() => {}))
                })
            }, {
                default: f((() => [h(g(C(w(t)("auth.change-password"))), 1)])),
                _: 1
            }), v(w(M), {
                modelValue: _.value,
                "onUpdate:modelValue": s[6] || (s[6] = e => _.value = e),
                "lock-scroll": "",
                class: "dialogw cdetail rad2 hdrbtn-2",
                "destroy-on-close": "",
                onOpen: j
            }, {
                header: f((() => [y("div", te, [s[7] || (s[7] = y("i", {
                    class: "fas fa-cicle"
                }, null, -1)), h(" " + g(C(w(t)("auth.change-password"))), 1)])])),
                footer: f((() => [y("span", ce, [v(w(q), {
                    color: "var(--primary)",
                    style: {
                        color: "white"
                    },
                    onClick: s[4] || (s[4] = e => _.value = !1)
                }, {
                    default: f((() => [h(g(w(t)("wall.cancel")), 1)])),
                    _: 1
                }), v(w(q), {
                    type: "primary",
                    onClick: s[5] || (s[5] = e => {
                        var s;
                        (s = A.value) && s.validate((e => {
                            if (!e) return console.log("error submit!"), !1; {
                                const e = new N;
                                E.value ? (e.append("password", z(D.newPass)), V.addPass(e).then((e => {
                                    const l = e.data;
                                    0 == l.code ? (a.success(t("auth.password-reset-success")), W(s), G.update({
                                        user_id: "",
                                        user_hash: ""
                                    }), R.push({
                                        name: "index"
                                    })) : console.log(l)
                                }))) : (e.append("oldPassword", z(D.pass)), e.append("newPassword", z(D.newPass)), V.changePass(e).then((e => {
                                    const l = e.data;
                                    0 == l.code ? (a.success(t("auth.password-reset-success")), W(s), O(), G.update({
                                        user_id: "",
                                        user_hash: ""
                                    }), R.push({
                                        name: "index"
                                    })) : console.log(l)
                                })))
                            }
                        }))
                    })
                }, {
                    default: f((() => [h(g(w(t)("sett.confirm")), 1)])),
                    _: 1
                })], 512)])),
                default: f((() => [y("div", se, [y("div", le, [v(w(I), {
                    title: w(t)("ctm.pass-not-change-site-rec"),
                    type: "warning",
                    "show-icon": "",
                    closable: !1,
                    effect: "dark"
                }, null, 8, ["title"]), y("div", oe, [v(w(F), {
                    ref_key: "ruleFormRef",
                    ref: A,
                    model: D,
                    "status-icon": "",
                    rules: S,
                    "label-width": "0px",
                    class: "demo-ruleForm"
                }, {
                    default: f((() => [E.value ? x("", !0) : (m(), b(w(B), {
                        key: 0,
                        prop: "pass"
                    }, {
                        default: f((() => [y("p", ie, g(w(t)("sett.old-password")), 1), v(w(L), {
                            modelValue: D.pass,
                            "onUpdate:modelValue": s[1] || (s[1] = e => D.pass = e),
                            type: "password",
                            "show-password": "",
                            autocomplete: "off"
                        }, {
                            prefix: f((() => s[8] || (s[8] = [y("i", {
                                class: "fas fa-lock"
                            }, null, -1)]))),
                            _: 1
                        }, 8, ["modelValue"])])),
                        _: 1
                    })), v(w(B), {
                        prop: "newPass"
                    }, {
                        default: f((() => [y("p", re, g(w(t)("sett.new-password")), 1), v(w(L), {
                            modelValue: D.newPass,
                            "onUpdate:modelValue": s[2] || (s[2] = e => D.newPass = e),
                            type: "password",
                            "show-password": "",
                            autocomplete: "off"
                        }, {
                            prefix: f((() => s[9] || (s[9] = [y("i", {
                                class: "fas fa-lock"
                            }, null, -1)]))),
                            _: 1
                        }, 8, ["modelValue"])])),
                        _: 1
                    }), v(w(B), {
                        prop: "checkNewPass"
                    }, {
                        default: f((() => [y("p", ne, g(w(t)("sett.confirm-new-password")), 1), v(w(L), {
                            modelValue: D.checkNewPass,
                            "onUpdate:modelValue": s[3] || (s[3] = e => D.checkNewPass = e),
                            type: "password",
                            autocomplete: "off",
                            "show-password": ""
                        }, {
                            prefix: f((() => s[10] || (s[10] = [y("i", {
                                class: "fas fa-lock"
                            }, null, -1)]))),
                            _: 1
                        }, 8, ["modelValue"])])),
                        _: 1
                    })])),
                    _: 1
                }, 8, ["model", "rules"])])])])])),
                _: 1
            }, 8, ["modelValue"])], 64))
        }
    }),
    ue = {
        class: "flex text-gray4 head-title items-center mb-1"
    },
    me = {
        class: "columns deposit-content"
    },
    pe = {
        class: "column is-12 px-5"
    },
    ve = {
        class: "field"
    },
    fe = {
        class: "show-qrcode",
        style: {
            "text-align": "center",
            "padding-top": "5px",
            "border-radius": "10px"
        }
    },
    he = {
        class: "qrcode"
    },
    ge = {
        style: {
            width: "200px"
        }
    },
    we = {
        class: "help text-medium mb-2 mt-4 text-left"
    },
    ye = s({
        __name: "googleAuth",
        emits: ["successAddAuth"],
        setup(e, {
            emit: a
        }) {
            const {
                t: t
            } = o(), s = l(), {
                Api: c
            } = r(), d = a, u = i(!1), V = () => {
                u.value || (u.value = !0, c.getGoogle().then((e => {
                    const a = e.data;
                    0 == a.code ? (S.qrcode.secret = a.data.secret, S.qrcode.link = a.data.link) : s.error(a.message)
                })))
            }, j = () => {
                const e = new FormData;
                e.append("codes", S.code), e.append("secret", S.qrcode.secret), c.addGoogleAuth(e).then((e => {
                    const a = e.data;
                    0 == a.code ? (s.success(t("sett.google-set-success")), d("successAddAuth"), S.code = "", S.qrcode.link = "", S.qrcode.secret = "", A.value = !1) : s.error(a.message)
                }))
            }, C = i(), P = i(!1), A = i(!1), D = e => {
                S.code = e
            };
            _((() => {}));
            const S = n({
                    code: "",
                    amount: 0,
                    qrcode: {
                        size: 150,
                        page: 0,
                        link: "",
                        secret: ""
                    }
                }),
                O = () => {
                    6 != S.code.length && s.error(t("sett.invalid-google-auth")), j()
                };
            return (e, a) => (m(), p(k, null, [v(w(q), {
                size: "small",
                class: "text-medium",
                color: "var(--primary)",
                style: {
                    color: "white"
                },
                onClick: a[0] || (a[0] = e => A.value = !0)
            }, {
                default: f((() => [h(g(w(t)("sett.set-up-google")), 1)])),
                _: 1
            }), v(w(M), {
                modelValue: A.value,
                "onUpdate:modelValue": a[9] || (a[9] = e => A.value = e),
                "lock-scroll": "",
                class: "dialogw cdetail rad2 min-w",
                "destroy-on-close": "",
                onOpen: V
            }, {
                header: f((() => [y("div", ue, [a[10] || (a[10] = y("i", {
                    class: "fas fa-cicle"
                }, null, -1)), h(" " + g(w(t)("sett.set-up-google")), 1)])])),
                footer: f((() => [y("span", {
                    ref_key: "confirmButton",
                    ref: C,
                    class: "dialog-footer"
                }, [v(w(q), {
                    color: "var(--primary)",
                    style: {
                        color: "white"
                    },
                    onClick: a[8] || (a[8] = e => A.value = !1)
                }, {
                    default: f((() => [h(g(w(t)("wall.cancel")), 1)])),
                    _: 1
                }), v(w(q), {
                    type: "primary",
                    disabled: 6 != S.code.length,
                    onClick: O
                }, {
                    default: f((() => [h(g(w(t)("sett.confirm")), 1)])),
                    _: 1
                }, 8, ["disabled"])], 512)])),
                default: f((() => [y("div", me, [y("div", pe, [y("div", ve, [y("div", fe, [y("figure", he, [S.qrcode.link ? (m(), b(w(R), {
                    key: 0,
                    value: S.qrcode.link,
                    options: {
                        width: S.qrcode.size,
                        errorCorrectionLevel: "Q"
                    },
                    tag: "svg"
                }, null, 8, ["value", "options"])) : x("", !0)]), v(w(W), {
                    class: "box-item",
                    placement: "top-start",
                    effect: "customized",
                    visible: P.value,
                    "onUpdate:visible": a[3] || (a[3] = e => P.value = e)
                }, {
                    content: f((() => [y("div", ge, g(w(t)("sett.google-key-phrase-recover-caution")), 1)])),
                    default: f((() => [y("p", {
                        onMouseenter: a[1] || (a[1] = e => P.value = !0),
                        onMouseleave: a[2] || (a[2] = e => P.value = !1),
                        class: "help text-medium mb-1 text-left",
                        style: {
                            width: "fit-content",
                            "text-decoration-line": "underline"
                        }
                    }, g(w(t)("sett.key")) + ": ", 33)])),
                    _: 1
                }, 8, ["visible"]), v(w(L), {
                    modelValue: S.qrcode.secret,
                    "onUpdate:modelValue": a[5] || (a[5] = e => S.qrcode.secret = e),
                    class: "addressInput text-medium btnChain",
                    placeholder: S.qrcode.secret,
                    readonly: !0,
                    onMouseenter: a[6] || (a[6] = e => P.value = !0),
                    onMouseleave: a[7] || (a[7] = e => P.value = !1)
                }, {
                    suffix: f((() => [y("i", {
                        class: "copy-link fas fa-copy",
                        onClick: a[4] || (a[4] = e => (e => {
                            try {
                                navigator.clipboard.writeText(e), s.success(t("depwi.copied-successfully"))
                            } catch (a) {
                                s.error(t("depwi.error"))
                            }
                        })(S.qrcode.secret))
                    })])),
                    _: 1
                }, 8, ["modelValue", "placeholder"]), y("p", we, g(w(t)("sett.enter-google-auth")) + ": ", 1), v(G, {
                    ref: "otpInput",
                    "input-classes": "otp-input",
                    separator: "-",
                    "num-inputs": 6,
                    "should-auto-focus": !0,
                    "is-input-num": !0,
                    onOnChange: D,
                    onOnComplete: D
                }, null, 512)])])])])])),
                _: 1
            }, 8, ["modelValue"])], 64))
        }
    }),
    be = {
        class: "flex text-gray4 head-title items-center mb-1"
    },
    xe = {
        class: "columns deposit-content"
    },
    ke = {
        class: "column is-12 px-5"
    },
    _e = {
        class: "field"
    },
    Ve = {
        class: "show-qrcode",
        style: {
            "text-align": "center",
            "padding-top": "5px",
            "border-radius": "10px"
        }
    },
    je = {
        class: "getmobile pb-2",
        style: {
            display: "flex",
            "align-items": "center"
        }
    },
    Ce = {
        class: "",
        style: {
            width: "100%"
        }
    },
    Pe = {
        class: "flex justify-between mb-1"
    },
    Ae = {
        class: "help text-medium"
    },
    De = {
        class: "text-left"
    },
    Se = {
        class: "help text-medium mb-1 text-left"
    },
    Oe = {
        class: "flex justify-between resendClick help text-medium mb-2 mt-4"
    },
    Ue = {
        key: 1
    },
    Ee = s({
        __name: "mobileAdd",
        props: {
            isAdd: {
                type: Boolean
            }
        },
        emits: ["successAddMobile"],
        setup(e, {
            emit: a
        }) {
            const {
                t: t
            } = o(), s = e, c = l(), {
                Api: d
            } = r(), u = a, j = i(!1), C = () => {
                j.value || (j.value = !0)
            }, P = i(""), A = () => {
                const e = new FormData;
                e.append("smscode", N.code), e.append("password", P.value), e.append("isAdd", String(s.isAdd)), e.append("phone", W.value), d.bindPhone(e).then((e => {
                    const a = e.data;
                    0 == a.code ? (c.success(t("sett.mobile-modified-success")), u("successAddMobile", W.value), N.code = "", N.qrcode.link = "", N.qrcode.secret = "", S.value = !1) : c.error(a.message)
                }))
            }, D = i(), S = i(!1), O = e => {
                var a;
                N.code = e, null == (a = D.value) || a.click()
            }, E = e => {
                N.code = e
            };
            _((() => {}));
            const N = n({
                    code: "",
                    mobileNumber: "",
                    amount: 0,
                    qrcode: {
                        size: 150,
                        page: 0,
                        link: "",
                        secret: ""
                    }
                }),
                z = () => {
                    6 != N.code.length ? c.error(t("sett.incorrect-mobile-verification-code")) : W.value ? P.value ? P.value.length <= 5 ? c.error(t('sett.invalid-password-match"')) : A() : c.error(t("auth.enter-password")) : c.error(t("sett.invalid-phone"))
                };
            let F = i(!1),
                B = i(60);
            const T = () => {
                    if (!W.value) return void c.error(t("sett.invalid-phone"));
                    F.value = !0;
                    const e = new FormData;
                    e.append("phone", W.value), s.isAdd ? d.sentPhoneCode(e).then((e => {
                        const a = e.data;
                        0 == a.code ? c.success(t("sett.sms-verification-sent").replace("$$", W.value)) : c.error(a.message)
                    })) : d.sentChangePhoneCode(e).then((e => {
                        const a = e.data;
                        0 == a.code ? c.success(t("sett.sms-verification-sent").replace("$$", W.value)) : c.error(a.message)
                    }));
                    let a = 0;
                    let l = setInterval((() => {
                        a += 1, B.value = 60 - a
                    }), 1e3);
                    setTimeout((() => {
                        clearInterval(l), F.value = !1, B.value = 60
                    }), 6e4)
                },
                R = V(),
                W = i("");
            return (e, a) => {
                const l = J;
                return m(), p(k, null, [v(w(q), {
                    size: "small",
                    color: "var(--primary)",
                    style: {
                        color: "white"
                    },
                    class: "text-medium",
                    onClick: a[0] || (a[0] = e => S.value = !0)
                }, {
                    default: f((() => [h(g(s.isAdd ? w(t)("dash.add") : w(t)("sett.change-mobile")), 1)])),
                    _: 1
                }), v(w(M), {
                    modelValue: S.value,
                    "onUpdate:modelValue": a[5] || (a[5] = e => S.value = e),
                    "lock-scroll": "",
                    class: "dialogw cdetail rad2 min-w",
                    "destroy-on-close": "",
                    onOpen: C
                }, {
                    header: f((() => [y("div", be, [a[6] || (a[6] = y("i", {
                        class: "fas fa-cicle"
                    }, null, -1)), h(" " + g(s.isAdd ? w(t)("dash.add") : w(t)("sett.change-mobile")), 1)])])),
                    footer: f((() => [y("span", {
                        ref_key: "confirmButton",
                        ref: D,
                        class: "dialog-footer"
                    }, [v(w(q), {
                        color: "var(--primary)",
                        style: {
                            color: "white"
                        },
                        onClick: a[4] || (a[4] = e => S.value = !1)
                    }, {
                        default: f((() => [h(g(w(t)("wall.cancel")), 1)])),
                        _: 1
                    }), v(w(q), {
                        type: "primary",
                        disabled: 6 != N.code.length || !W.value,
                        onClick: z
                    }, {
                        default: f((() => [h(g(s.isAdd ? w(t)("dash.add") : w(t)("sett.change-mobile")), 1)])),
                        _: 1
                    }, 8, ["disabled"])], 512)])),
                    default: f((() => [y("div", xe, [y("div", ke, [y("div", _e, [s.isAdd || w(R).isAppOn ? x("", !0) : (m(), b(w(I), {
                        key: 0,
                        title: w(t)("ctm.email-not-change-site-rec"),
                        type: "warning",
                        "show-icon": "",
                        closable: !1,
                        effect: "dark"
                    }, null, 8, ["title"])), y("div", Ve, [y("div", je, [y("div", Ce, [y("div", Pe, [y("p", Ae, g(w(t)("auth.mobile")), 1), a[7] || (a[7] = y("p", {
                        class: "help text-medium"
                    }, null, -1))]), v(l, {
                        modelValue: W.value,
                        "onUpdate:modelValue": a[1] || (a[1] = e => W.value = e)
                    }, null, 8, ["modelValue"])])]), y("div", De, [y("p", Se, g(w(t)("sett.login-password")), 1), v(w(L), {
                        modelValue: P.value,
                        "onUpdate:modelValue": a[2] || (a[2] = e => P.value = e),
                        class: "passInput btnChain",
                        type: "password",
                        placeholder: w(t)("sett.login-password"),
                        "prefix-icon": w(U)
                    }, null, 8, ["modelValue", "placeholder", "prefix-icon"])]), y("div", Oe, [y("p", null, g(w(t)("sett.sms-verification-code") + (W.value ? " (" + W.value + ")" : ":")), 1), w(F) ? (m(), p("p", Ue, g(w(B)), 1)) : (m(), p("p", {
                        key: 0,
                        onClick: a[3] || (a[3] = e => {
                            T()
                        })
                    }, [v(w($), {
                        type: "primary"
                    }, {
                        default: f((() => [h(g(w(t)("sett.resend")), 1)])),
                        _: 1
                    })]))]), v(G, {
                        ref: "otpInput",
                        "input-classes": "otp-input",
                        separator: "-",
                        "num-inputs": 6,
                        "should-auto-focus": !0,
                        "is-input-num": !0,
                        onOnChange: E,
                        onOnComplete: O
                    }, null, 512)])])])])])),
                    _: 1
                }, 8, ["modelValue"])], 64)
            }
        }
    }),
    Ne = {
        class: "flex text-gray4 head-title items-center mb-1"
    },
    ze = {
        class: "columns deposit-content"
    },
    qe = {
        class: "column is-12"
    },
    Ie = {
        class: "field"
    },
    Fe = {
        class: "mb-1"
    },
    Be = {
        class: "end"
    },
    Le = {
        class: "text-left"
    },
    Me = {
        key: 1,
        class: "text-medium"
    },
    Te = {
        class: "mb-1"
    },
    Re = {
        class: "flex flex-col mt-2 text-red"
    },
    Ge = {
        style: {
            "font-family": "DINPRO-Regular",
            color: "rgb(231, 95, 97)"
        }
    },
    We = {
        style: {
            "font-family": "DINPRO-Regular",
            color: "rgb(231, 95, 97)"
        }
    },
    Ke = {
        ref: "confirmButton",
        class: "dialog-footer"
    },
    Je = H(s({
        __name: "addEmail",
        emits: ["successAction"],
        setup(e, {
            emit: a
        }) {
            const {
                t: t
            } = o(), {
                Api: s
            } = r(), c = l(), d = a;
            let u = i(60);
            const _ = i(!0);
            let V = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,30})+$/;
            const C = i(),
                P = n({
                    email: "",
                    otp: ""
                }),
                A = i(!1),
                D = n({
                    email: [{
                        validator: (e, a, s) => {
                            A.value = !1, "" === a ? s(new Error(t("auth.please-enter-email"))) : V.test(a) ? (A.value = !0, s()) : s(new Error(t("sett.email-incorrect")))
                        },
                        trigger: "blur"
                    }],
                    otp: [{
                        validator: (e, a, s) => {
                            6 != a.length ? s(new Error(t("pga.input-6-digit"))) : s()
                        },
                        trigger: "blur"
                    }]
                }),
                S = i(!1),
                O = e => {
                    S.value = !0, e && e.validate((e => {
                        if (!e) return S.value = !1, !1;
                        U(), S.value = !1
                    }))
                },
                U = () => {
                    const e = new FormData;
                    e.append("email", P.email), e.append("code", P.otp), s.bindEmail(e).then((({
                        data: e
                    }) => {
                        500 == e.code ? c.error(e.message) : 0 == e.code && (c.success(t("sett.update-email-success")), d("successAction", P.email), z.value = !1)
                    })).catch((e => {
                        c.error(e), console.log(e)
                    }))
                },
                E = i(!1),
                N = () => {
                    if (!V.test(P.email)) return void c.error(t("sett.email-incorrect"));
                    const e = new FormData;
                    e.append("email", P.email), s.bindEmailCode(e).then((({
                        data: e
                    }) => {
                        500 == e.code ? c.error(e.message) : 0 == e.code ? (c.success(t("pga.email-code-sent-success")), (() => {
                            _.value = !1;
                            let e = 0,
                                a = setInterval((() => {
                                    e += 1, u.value = 60 - e
                                }), 1e3);
                            setTimeout((() => {
                                clearInterval(a), _.value = !0, u.value = 60
                            }), 6e4)
                        })()) : 524 == e.code && (c.error(e.message), E.value = !0)
                    })).catch((e => {
                        c.error(e), console.log(e)
                    }))
                },
                z = i(!1),
                I = e => {
                    var a;
                    P.otp = e, 6 == e.length && (null == (a = C.value) || a.validateField("otp"))
                };
            return (e, a) => (m(), p(k, null, [v(w(q), {
                size: "small",
                color: "var(--primary)",
                style: {
                    color: "white"
                },
                class: "text-medium",
                onClick: a[0] || (a[0] = e => z.value = !0)
            }, {
                default: f((() => [h(g(w(t)("dash.add")), 1)])),
                _: 1
            }), v(w(M), {
                modelValue: z.value,
                "onUpdate:modelValue": a[8] || (a[8] = e => z.value = e),
                "lock-scroll": "",
                height: 200,
                class: "dialogw cdetail rad2 min-w",
                "destroy-on-close": ""
            }, {
                header: f((() => [y("div", Ne, [a[9] || (a[9] = y("i", {
                    class: "fas fa-cicle"
                }, null, -1)), h(" " + g(w(t)("sett.enable-email-verify")), 1)])])),
                footer: f((() => [y("span", Ke, [v(w(q), {
                    color: "var(--primary)",
                    style: {
                        color: "white"
                    },
                    onClick: a[6] || (a[6] = e => z.value = !1)
                }, {
                    default: f((() => [h(g(w(t)("wall.cancel")), 1)])),
                    _: 1
                }), v(w(q), {
                    type: "primary",
                    onClick: a[7] || (a[7] = e => O(C.value))
                }, {
                    default: f((() => [h(g(w(t)("dash.add")), 1)])),
                    _: 1
                })], 512)])),
                default: f((() => [y("div", ze, [y("div", qe, [y("div", Ie, [v(w(F), {
                    ref_key: "ruleFormRef",
                    ref: C,
                    model: P,
                    "status-icon": "",
                    rules: D,
                    "label-width": "0px",
                    class: "demo-ruleForm",
                    onSubmit: a[5] || (a[5] = e => O(C.value))
                }, {
                    default: f((() => [v(w(B), {
                        prop: "email"
                    }, {
                        default: f((() => [y("p", Fe, g(w(t)("auth.email")), 1), v(w(L), {
                            modelValue: P.email,
                            "onUpdate:modelValue": a[2] || (a[2] = e => P.email = e),
                            type: "email",
                            autocomplete: "false",
                            onInput: a[3] || (a[3] = e => {
                                var a;
                                return null == (a = C.value) ? void 0 : a.validateField("email")
                            }),
                            onKeyup: a[4] || (a[4] = j((e => O(C.value)), ["enter"]))
                        }, {
                            prefix: f((() => a[10] || (a[10] = [y("i", {
                                class: "gray-icon fas fa-at"
                            }, null, -1)]))),
                            suffix: f((() => [y("div", Be, [y("div", Le, [_.value ? (m(), b(w($), {
                                key: 0,
                                onClick: a[1] || (a[1] = e => N()),
                                type: "primary"
                            }, {
                                default: f((() => [h(g(w(t)("depwi.get-code")), 1)])),
                                _: 1
                            })) : (m(), p("div", Me, g(w(u)), 1))])])])),
                            _: 1
                        }, 8, ["modelValue"])])),
                        _: 1
                    }), v(w(B), {
                        prop: "otp"
                    }, {
                        default: f((() => [y("p", Te, g(w(t)("sett.email-verification-code") + (A.value ? " (" + P.email + ")" : "")), 1), v(G, {
                            ref: "otpInput",
                            class: "otp-body",
                            "input-classes": "otp-input",
                            separator: "-",
                            "num-inputs": 6,
                            "should-auto-focus": !0,
                            "is-input-num": !0,
                            onOnChange: I,
                            onOnComplete: I
                        }, null, 512)])),
                        _: 1
                    }), E.value ? (m(), b(w(B), {
                        key: 0
                    }, {
                        default: f((() => [y("div", Re, [y("p", Ge, g(w(t)("sett.delay-10-email")), 1), y("p", We, g(w(t)("sett.check-spam-email")), 1)])])),
                        _: 1
                    })) : x("", !0)])),
                    _: 1
                }, 8, ["model", "rules"])])])])])),
                _: 1
            }, 8, ["modelValue"])], 64))
        }
    }), [
        ["__scopeId", "data-v-4c035a03"]
    ]),
    $e = {
        class: "account-box is-form is-footerless"
    },
    He = {
        class: "form-head-inner"
    },
    Qe = {
        class: "left m-1 flex mt-2",
        style: {
            "align-items": "initial"
        }
    },
    Ye = {
        class: "form-body"
    },
    Ze = {
        class: "fieldset"
    },
    Xe = {
        class: "setting-list"
    },
    ea = ["data-content"],
    aa = {
        class: "flex justify-center mb-5 mt-0"
    },
    ta = {
        class: "mt-3",
        height: "6",
        viewBox: "0 0 300 6",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    },
    sa = ["width"],
    la = {
        class: "setting-item"
    },
    oa = {
        class: "flex"
    },
    ia = {
        class: "meta"
    },
    ra = {
        class: "dark-inverted"
    },
    na = {
        key: 1
    },
    ca = {
        key: 0,
        style: {
            color: "rgb(16, 203, 138)"
        }
    },
    da = {
        key: 1,
        style: {
            color: "rgb(231, 95, 97)"
        }
    },
    ua = {
        key: 0,
        class: "end"
    },
    ma = {
        key: 0,
        class: "text-light endText"
    },
    pa = {
        class: "setting-item"
    },
    va = {
        class: "flex"
    },
    fa = {
        class: "meta"
    },
    ha = {
        class: "dark-inverted"
    },
    ga = {
        key: 1
    },
    wa = {
        key: 0,
        style: {
            color: "rgb(16, 203, 138)"
        }
    },
    ya = {
        key: 1,
        style: {
            color: "rgb(231, 95, 97)"
        }
    },
    ba = {
        key: 0,
        class: "end flex sms-end"
    },
    xa = {
        key: 0,
        class: "text-light endText"
    },
    ka = {
        key: 2,
        style: {
            "border-right": "1px solid gray",
            margin: "0 9px",
            height: "25px"
        }
    },
    _a = {
        class: "setting-item pb-8"
    },
    Va = {
        class: "flex"
    },
    ja = {
        class: "meta"
    },
    Ca = {
        class: "dark-inverted"
    },
    Pa = {
        key: 1
    },
    Aa = {
        key: 0,
        style: {
            color: "rgb(16, 203, 138)"
        }
    },
    Da = {
        key: 1,
        style: {
            color: "rgb(231, 95, 97)"
        }
    },
    Sa = {
        key: 0,
        class: "end"
    },
    Oa = ["data-content"],
    Ua = {
        key: 0,
        class: "setting-item"
    },
    Ea = {
        class: "flex"
    },
    Na = {
        class: "round-icon",
        style: {
            background: "transparent"
        }
    },
    za = {
        key: 1,
        class: "round-icon"
    },
    qa = {
        key: 0,
        class: "end"
    },
    Ia = {
        key: 1,
        class: "setting-item"
    },
    Fa = {
        class: "flex"
    },
    Ba = {
        class: "meta"
    },
    La = {
        key: 1
    },
    Ma = {
        class: "end"
    },
    Ta = {
        class: "setting-item"
    },
    Ra = {
        class: "flex"
    },
    Ga = {
        class: "meta"
    },
    Wa = {
        class: "dark-inverted"
    },
    Ka = {
        key: 1
    },
    Ja = {
        key: 2,
        class: "setting-item"
    },
    $a = {
        class: "flex"
    },
    Ha = {
        class: "meta"
    },
    Qa = {
        class: "dark-inverted"
    },
    Ya = {
        class: "end"
    },
    Za = ["data-content"],
    Xa = {
        class: "mt-5"
    },
    et = H(s({
        __name: "MainSettings",
        setup(s) {
            o();
            const {
                Api: d
            } = r(), u = Q(), k = c(), j = i(!0), {
                t: U
            } = o(), N = V(), z = l(), I = i(!1), F = i(window.innerWidth <= 767);
            let B;
            _((() => {
                B = E.throttle((() => {
                    F.value = window.innerWidth <= 767
                }), 100), window.addEventListener("resize", B)
            })), C((() => {
                window.removeEventListener("resize", B)
            }));
            const L = i(1),
                M = n({
                    account: {},
                    isStarted: !1,
                    username: window.location.userName || "admin@adamonth.nl"
                }),
                R = i(0),
                G = e => {
                    switch (e) {
                        case 0:
                        default:
                            return "";
                        case 1:
                            return U("auth.log-in");
                        case 2:
                            return U("dash.withdrawal");
                        case 3:
                            return "Login Failed";
                        case 4:
                            return "Login QR code"
                    }
                };
            d.getAccountSettings().then((e => {
                const a = e.data;
                0 == a.code ? (M.account = a.data, M.isStarted = !0, M.account.emailVerified && (R.value += 25), M.account.googleVerified && (R.value += 25), M.account.accountVerified && (R.value += 25), M.account.phoneVerified && (R.value += 25)) : z.error(a.message), j.value = !1
            }));
            const {
                y: J
            } = P(), $ = A((() => J.value > 30)), H = () => {
                d.getLoginInfo().then((e => {
                    const a = e.data;
                    0 == a.code && a && (k.userData = a)
                }))
            }, ae = e => {
                const a = !!M.account.mobilePhone;
                if (M.account.phoneVerified = !0, M.account.mobilePhone = Number(e.replace("+", "")), R.value += 25, N.isAppOn) {
                    if (window.ReactNativeWebView.postMessage(JSON.stringify({
                            opzkey: "newUserData"
                        })), a) {
                        const e = new FormData;
                        e.append("ismobile", (!0).toString()), d.getUsername(e).then((({
                            data: e
                        }) => {
                            0 == e.code && (M.username = e.message, window.ReactNativeWebView.postMessage(JSON.stringify({
                                opzkey: "changeUsername",
                                value: e.message
                            })))
                        }))
                    }
                } else H()
            }, te = i(!1), se = i(!1);
            i(!1);
            const le = i([]);
            return d.getUserLogs().then((e => {
                const a = e.data;
                0 == a.code ? le.value = a.data.sort(((e, a) => new Date(a.ts).getTime() - new Date(e.ts).getTime())) : z.error(a.message)
            })), (s, l) => {
                const o = a,
                    i = e;
                return m(), p("div", $e, [y("div", {
                    class: D(["form-head stuck-header", [$.value && "is-stuck"]])
                }, [y("div", He, [y("div", Qe, [y("h3", null, [l[10] || (l[10] = y("i", {
                    "aria-hidden": "true",
                    class: "fas fa-shield-alt"
                }, null, -1)), h(" " + g(w(U)("dash.security")), 1)])]), l[11] || (l[11] = y("div", {
                    class: "right"
                }, null, -1))])], 2), y("div", Ye, [y("div", Ze, [y("div", Xe, [y("div", {
                    class: "is-divider",
                    style: {
                        margin: "0 0 0.5rem 0 !important"
                    },
                    "data-content": w(U)("sett.two-factor-authentication")
                }, null, 8, ea), y("div", aa, [(m(), p("svg", ta, [l[12] || (l[12] = y("rect", {
                    width: "300",
                    height: "6",
                    rx: "3",
                    fill: "#2D2D2D"
                }, null, -1)), y("rect", {
                    width: 4 * (R.value - (1 == M.account.accountVerified ? 25 : 0)),
                    height: "6",
                    rx: "3",
                    fill: "url(#paint0_linear)"
                }, null, 8, sa), l[13] || (l[13] = S('<rect x="100" width="2" height="6" fill="#171717" data-v-bb33807c></rect><rect x="200" width="2" height="6" fill="#171717" data-v-bb33807c></rect><defs data-v-bb33807c><linearGradient id="paint0_linear" x1="0" y1="0" x2="1" y2="0" data-v-bb33807c><stop stop-color="#472c78" data-v-bb33807c></stop><stop offset="1" stop-color="#7303fc" data-v-bb33807c></stop></linearGradient></defs>', 3))]))]), y("div", la, [y("div", oa, [l[14] || (l[14] = y("div", {
                    class: "round-icon"
                }, [y("i", {
                    "aria-hidden": "true",
                    class: "fas fa-envelope"
                })], -1)), y("div", ia, [y("span", ra, g(w(U)("sett.email-authentication")), 1), j.value ? (m(), b(o, {
                    key: 0,
                    height: "14px",
                    width: "66px",
                    class: "mt-1"
                })) : (m(), p("div", na, [M.account.emailVerified ? (m(), p("span", ca, g(w(U)("sett.verified")), 1)) : (m(), p("span", da, g(w(U)("sett.unverfied")), 1))]))])]), j.value ? x("", !0) : (m(), p("div", ua, [M.account.email ? (m(), p("div", ma, g(M.account.email), 1)) : M.isStarted ? (m(), b(Je, {
                    key: 1,
                    onSuccessAction: l[0] || (l[0] = e => {
                        return a = e, M.account.emailVerified = !0, M.account.email = a, R.value += 25, void(N.isAppOn ? window.ReactNativeWebView.postMessage(JSON.stringify({
                            opzkey: "newUserData"
                        })) : H());
                        var a
                    })
                })) : x("", !0)]))]), y("div", pa, [y("div", va, [l[15] || (l[15] = y("div", {
                    class: "round-icon"
                }, [y("i", {
                    "aria-hidden": "true",
                    class: "fas fa-mobile-alt"
                })], -1)), y("div", fa, [y("span", ha, g(w(U)("sett.sms-authentication")), 1), j.value ? (m(), b(o, {
                    key: 0,
                    height: "14px",
                    width: "66px",
                    class: "mt-1"
                })) : (m(), p("div", ga, [M.account.phoneVerified ? (m(), p("span", wa, g(w(U)("sett.verified")), 1)) : (m(), p("span", ya, g(w(U)("sett.unverfied")), 1))]))])]), j.value ? x("", !0) : (m(), p("div", ba, [M.account.mobilePhone ? (m(), p("div", xa, g(M.account.mobilePhone), 1)) : x("", !0), M.isStarted ? (m(), b(Ee, {
                    key: 1,
                    "is-add": !M.account.mobilePhone,
                    onSuccessAddMobile: ae
                }, null, 8, ["is-add"])) : x("", !0), M.account.mobilePhone && M.account.emailVerified ? (m(), p("div", ka)) : x("", !0), M.isStarted && M.account.mobilePhone && M.account.emailVerified ? (m(), b(K, {
                    key: 3,
                    modelValue: te.value,
                    "onUpdate:modelValue": l[1] || (l[1] = e => te.value = e),
                    "enable-btn": !0,
                    type: "TOKEN_DISABLE_PHONE",
                    onSuccessAction: l[2] || (l[2] = e => (() => {
                        if (M.account.mobilePhone = 0, M.account.phoneVerified = !1, R.value -= 25, N.isAppOn) {
                            const e = new FormData;
                            e.append("ismobile", (!1).toString()), d.getUsername(e).then((({
                                data: e
                            }) => {
                                0 == e.code && (M.username = e.message, window.ReactNativeWebView.postMessage(JSON.stringify({
                                    opzkey: "changeUsername",
                                    value: e.message
                                })))
                            }))
                        }
                    })())
                }, null, 8, ["modelValue"])) : x("", !0)]))]), y("div", _a, [y("div", Va, [l[16] || (l[16] = y("div", {
                    class: "round-icon"
                }, [y("i", {
                    "aria-hidden": "true",
                    class: "fas fa-key"
                })], -1)), y("div", ja, [y("span", Ca, g(w(U)("sett.google-authentication")), 1), j.value ? (m(), b(o, {
                    key: 0,
                    height: "14px",
                    width: "66px",
                    class: "mt-1"
                })) : (m(), p("div", Pa, [M.account.googleVerified ? (m(), p("span", Aa, g(w(U)("sett.verified")), 1)) : (m(), p("span", Da, g(w(U)("sett.not-set")), 1))]))])]), j.value ? x("", !0) : (m(), p("div", Sa, [M.isStarted && M.account.googleVerified ? (m(), b(K, {
                    key: 0,
                    modelValue: se.value,
                    "onUpdate:modelValue": l[3] || (l[3] = e => se.value = e),
                    "enable-btn": !0,
                    type: "TOKEN_DISABLE_GOOGLE",
                    onSuccessAction: l[4] || (l[4] = e => {
                        M.account.googleVerified = !1, R.value -= 25
                    })
                }, null, 8, ["modelValue"])) : x("", !0), M.isStarted && !M.account.googleVerified ? (m(), b(ye, {
                    key: 1,
                    onSuccessAddAuth: l[5] || (l[5] = e => {
                        M.account.googleVerified = !0, R.value += 25
                    })
                })) : x("", !0)]))]), y("div", {
                    class: "is-divider",
                    "data-content": w(U)("sett.account-information")
                }, null, 8, Oa), w(N).isAppOn ? x("", !0) : (m(), p("div", Ua, [y("div", Ea, [y("div", Na, [w(u).enabledData ? (m(), b(w(Y), O({
                    key: 0
                }, {
                    skinColor: w(u).skincolorsData,
                    clothes: w(u).clothesData,
                    eyes: w(u).eyesData,
                    accessories: w(u).accessoriesData,
                    facialHair: w(u).facialhairData,
                    eyebrows: w(u).eyebrowsData,
                    clothesColor: w(u).clothescolorData,
                    mouth: w(u).mouthsData,
                    top: w(u).topsData,
                    topColor: w(u).hatandshirtcolorsData,
                    hairColor: w(u).haircolorsData,
                    graphicShirt: w(u).graphicshirtData,
                    circleColor: w(u).circleData,
                    isCircle: w(u).circleenabledData
                }, {
                    style: {
                        height: "48px"
                    }
                }), null, 16)) : (m(), p("div", za, l[17] || (l[17] = [y("img", {
                    src: t,
                    style: {
                        width: "27px",
                        "min-width": "27px"
                    }
                }, null, -1)])))])]), j.value ? x("", !0) : (m(), p("div", qa, [v(w(q), {
                    size: "small",
                    color: "var(--primary)",
                    class: "text-medium",
                    style: {
                        color: "white"
                    },
                    onClick: l[6] || (l[6] = e => I.value = !I.value)
                }, {
                    default: f((() => [h(g(w(U)("pga.create-your-avatar")), 1)])),
                    _: 1
                })]))])), w(N).isAppOn && M.account.mobilePhone && M.account.emailVerified ? (m(), p("div", Ia, [y("div", Fa, [l[19] || (l[19] = y("div", {
                    class: "round-icon"
                }, [y("i", {
                    "aria-hidden": "true",
                    class: "fas fa-user"
                })], -1)), y("div", Ba, [l[18] || (l[18] = y("span", {
                    class: "dark-inverted"
                }, g("App Username"), -1)), j.value ? (m(), b(o, {
                    key: 0,
                    height: "14px",
                    width: "66px",
                    class: "mt-1"
                })) : (m(), p("div", La, [y("span", null, [y("span", null, g(M.username), 1)])]))])]), y("div", Ma, [v(w(q), {
                    size: "small",
                    color: "var(--primary)",
                    class: "text-medium",
                    style: {
                        color: "white"
                    },
                    onClick: l[7] || (l[7] = e => (async () => {
                        const e = !!(null == M ? void 0 : M.username.includes("@")),
                            a = e ? M.account.mobilePhone : M.account.email;
                        return await T.confirm("Change your login app username to: " + a, "Username App Login", {
                            confirmButtonText: U("sett.confirm"),
                            showCancelButton: !1,
                            showConfirmButton: !0,
                            customClass: "sasfw",
                            customStyle: {
                                "background-color": "#101217",
                                "border-color": "#1b1b1b",
                                "--el-button-bg-color": "#fff"
                            },
                            type: "info",
                            confirmButtonClass: "btn-prime-box"
                        }).then((() => {
                            const a = new FormData;
                            return a.append("ismobile", e.toString()), d.getUsername(a).then((({
                                data: e
                            }) => {
                                0 == e.code && (M.username = e.message, window.ReactNativeWebView.postMessage(JSON.stringify({
                                    opzkey: "changeUsername",
                                    value: e.message
                                })))
                            })), !0
                        })).catch((() => !1))
                    })())
                }, {
                    default: f((() => [h(g(w(U)("sett.change")), 1)])),
                    _: 1
                })])])) : x("", !0), y("div", Ta, [y("div", Ra, [l[20] || (l[20] = y("div", {
                    class: "round-icon"
                }, [y("i", {
                    "aria-hidden": "true",
                    class: "fas fa-id-card"
                })], -1)), y("div", Ga, [y("span", Wa, g(w(U)("dash.uid")), 1), j.value ? (m(), b(o, {
                    key: 0,
                    height: "14px",
                    width: "66px",
                    class: "mt-1"
                })) : (m(), p("div", Ka, [y("span", null, [y("span", null, g(M.account.id), 1)])]))])]), l[21] || (l[21] = y("div", {
                    class: "end"
                }, null, -1))]), w(N).isAppOn ? x("", !0) : (m(), p("div", Ja, [y("div", $a, [l[23] || (l[23] = y("div", {
                    class: "round-icon"
                }, [y("i", {
                    "aria-hidden": "true",
                    class: "fas fa-lock"
                })], -1)), y("div", Ha, [y("span", Qa, g(w(U)("sett.login-password")), 1), l[22] || (l[22] = y("span", null, [y("span", null, "*********")], -1))])]), y("div", Ya, [v(de)])])), y("div", {
                    class: "is-divider mb-4",
                    "data-content": w(U)("sett.account-activities")
                }, null, 8, Za), v(w(X), {
                    class: "slim-table tbl-login",
                    "tooltip-effect": "dark pt-0 mt-0",
                    style: {
                        width: "100%",
                        "font-size": "12px"
                    },
                    data: le.value.slice(10 * L.value - 10, 10 * L.value)
                }, {
                    default: f((() => [v(w(Z), {
                        label: w(U)("hiss.date-time"),
                        width: "110"
                    }, {
                        default: f((e => [h(g(new Date(e.row.ts).toLocaleDateString("en-UK")), 1), l[24] || (l[24] = y("br", null, null, -1)), h(" " + g(new Date(e.row.ts).toLocaleTimeString("en-UK")), 1)])),
                        _: 1
                    }, 8, ["label"]), v(w(Z), {
                        label: w(U)("sett.activities"),
                        width: "90"
                    }, {
                        default: f((e => [h(g(G(e.row.activities)), 1)])),
                        _: 1
                    }, 8, ["label"]), v(w(Z), {
                        label: w(U)("pga.mobile"),
                        width: "80"
                    }, {
                        default: f((e => [h(g(e.row.mobile || "OPZ APP" === e.row.browser ? w(U)("sett.yes") : w(U)("sett.no")), 1)])),
                        _: 1
                    }, 8, ["label"]), v(w(Z), {
                        label: w(U)("sett.operating-system")
                    }, {
                        default: f((e => [v(w(W), {
                            effect: "customized",
                            trigger: "click",
                            disabled: !F.value,
                            content: e.row.browser,
                            placement: "top"
                        }, {
                            default: f((() => [h(g(F.value ? e.row.browser.substring(0, 24) + (e.row.browser.length > 24 ? "..." : "") : e.row.browser), 1)])),
                            _: 2
                        }, 1032, ["disabled", "content"])])),
                        _: 1
                    }, 8, ["label"]), v(w(Z), {
                        label: w(U)("dash.ipaddress"),
                        width: "130"
                    }, {
                        default: f((e => [h(g(e.row.ip), 1)])),
                        _: 1
                    }, 8, ["label"])])),
                    _: 1
                }, 8, ["data"]), y("div", Xa, [v(w(ee), {
                    currentPage: L.value,
                    "onUpdate:currentPage": l[8] || (l[8] = e => L.value = e),
                    background: "",
                    layout: "prev, pager, next, jumper",
                    size: "small",
                    "page-size": 10,
                    total: le.value.length
                }, null, 8, ["currentPage", "total"])])])])]), I.value ? (m(), b(i, {
                    key: 0,
                    btn: !1,
                    modelValue: I.value,
                    "onUpdate:modelValue": l[9] || (l[9] = e => I.value = e)
                }, null, 8, ["modelValue"])) : x("", !0)])
            }
        }
    }), [
        ["__scopeId", "data-v-bb33807c"]
    ]),
    at = s({
        __name: "index",
        setup: e => (ae("sett.settings"), (e, a) => {
            const t = et;
            return m(), b(t)
        })
    });
export {
    at as
    default
};