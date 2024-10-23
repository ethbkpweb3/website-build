import {
    _ as e
} from "./Control-BAxR9hhH.js";
import {
    m as a,
    Y as t,
    u as l,
    dn as s,
    dm as o,
    y as n,
    h as r,
    a as u,
    K as d,
    o as i,
    j as p,
    n as c,
    w as m,
    q as v,
    t as f,
    X as y,
    s as h,
    v as g,
    l as k,
    P as b
} from "./index-CQfCy4Xm.js";
import {
    c as w
} from "./index-DZwhim7i.js";
import {
    V as _
} from "./vue3-otp-input-C7HeO7ob.js";
import {
    E
} from "./index-DhHA3mFI.js";
import {
    E as O
} from "./index--1JsBO1r.js";
import {
    E as A,
    a as x
} from "./index-DI0c3Das.js";
import {
    E as I
} from "./index-5N62XIoj.js";
import {
    E as C
} from "./index-DPclT-tF.js";
const D = {
        class: "columns"
    },
    S = {
        class: ""
    },
    T = {
        class: "container"
    },
    V = {
        class: "title-dialog"
    },
    B = {
        class: "flex justify-center resendClick"
    },
    j = {
        class: "textInfo"
    },
    F = {
        key: 0,
        class: "text-medium"
    },
    N = {
        key: 1,
        class: "text-medium"
    },
    L = {
        class: "flex justify-center resendClick mt-2"
    },
    K = {
        class: "textInfo"
    },
    W = {
        key: 0,
        class: "text-medium"
    },
    H = {
        key: 1,
        class: "text-medium"
    },
    P = {
        class: "flex justify-center resendClick mt-2"
    },
    G = {
        class: "textInfo"
    },
    R = a({
        __name: "doubleCheck",
        props: {
            amount: {
                default: 0
            },
            modelValue: {
                type: Boolean
            },
            chain: {
                default: ""
            },
            unit: {
                default: ""
            },
            address: {
                default: ""
            },
            memo: {
                default: ""
            },
            type: {},
            enableBtn: {
                type: Boolean
            },
            powerLimit: {
                type: Boolean
            },
            readOnly: {
                type: Boolean
            },
            nameRemark: {
                default: ""
            },
            bindIp: {
                default: ""
            },
            boolOn: {
                type: Boolean
            },
            message: {
                default: ""
            }
        },
        emits: ["successAction", "closeWithdraw", "update:modelValue"],
        setup(a, {
            emit: R
        }) {
            const {
                t: $
            } = t(), q = l().userData, U = s(), {
                Api: z
            } = o(), X = n(), Y = n(!1), J = R, M = n(!0), Q = n(!0), Z = n(!0), ee = n(null), ae = n(null), te = n(null), le = n(""), se = a, oe = r({
                get: () => se.modelValue,
                set: e => J("update:modelValue", e)
            });
            "TOKEN_WITHDRAW_AUTH" == se.type ? le.value = $("dash.withdraw") : "TOKEN_DISABLE_PHONE" == se.type || "TOKEN_DISABLE_GOOGLE" == se.type ? le.value = $("sett.disable") : "TOKEN_ADD_API" == se.type && (le.value = $("sett.create-new-key"));
            const ne = u(),
                re = (e, a, t) => {
                    6 != a.length ? t(new Error($("pga.input-6-digit"))) : t()
                },
                ue = d({
                    otpSms: "",
                    otpAuth: "",
                    otpEmail: ""
                }),
                de = d({
                    otpSms: [{
                        validator: re,
                        trigger: "blur"
                    }],
                    otpEmail: [{
                        validator: re,
                        trigger: "blur"
                    }],
                    otpAuth: [{
                        validator: re,
                        trigger: "blur"
                    }]
                });
            z.checkSecureStatus().then((({
                data: e
            }) => {
                500 == e.code ? ne.error(e.message) : 0 == e.code && (Q.value = e.data[0], Z.value = e.data[1], M.value = e.data[2], Q.value || Z.value || M.value || (J("closeWithdraw"), ne.error($("pga.2fa-required")), J("update:modelValue", !1)))
            })).catch((e => {
                ne.error(e), console.log(e)
            }));
            const ie = e => {
                    Y.value = !0, e && e.validate((async e => {
                        if (!e) return console.log("error submit!"), Y.value = !1, !1;
                        await pe(), Y.value = !1
                    }))
                },
                pe = async () => {
                    let e = "";
                    const a = new FormData;
                    a.append("type", se.type), a.append("emailCode", ue.otpEmail), a.append("phoneCode", ue.otpSms), a.append("googleCode", ue.otpAuth), await z.checkVerify(a).then((({
                        data: a
                    }) => {
                        500 == a.code ? ne.error(a.message) : 0 == a.code && (e = a.message)
                    })).catch((e => {
                        ne.error(e), console.log(e)
                    })), e && ("TOKEN_WITHDRAW_AUTH" == se.type ? fe(e) : "TOKEN_DISABLE_PHONE" == se.type ? ve(e) : "TOKEN_DISABLE_GOOGLE" == se.type ? me(e) : "TOKEN_ADD_API" == se.type && ce(e))
                },
                ce = e => {
                    const a = new FormData;
                    a.append("token", e), se.readOnly ? a.append("powerLimit", "0") : a.append("powerLimit", se.powerLimit ? "0,1,2" : "0,2"), a.append("bindIp", se.bindIp), a.append("remark", se.nameRemark), z.codeSaveApi(a).then((e => {
                        const a = e.data;
                        0 == a.code ? (ne.success($("sett.key-successfully-added")), ke(a.data)) : ne.error(a.message)
                    }))
                },
                me = e => {
                    const a = new FormData;
                    a.append("token", e), z.disableGoogle(a).then((e => {
                        const a = e.data;
                        0 == a.code ? (ne.success($("sett.turn-off-auth-google-successfully")), ke("")) : ne.error(a.message)
                    }))
                },
                ve = e => {
                    const a = new FormData;
                    a.append("token", e), z.deletePhone(a).then((e => {
                        const a = e.data;
                        0 == a.code ? (ne.success($("sett.successfully-off")), ke("")) : ne.error(a.message)
                    }))
                },
                fe = e => {
                    const a = new FormData;
                    a.append("unit", se.unit), a.append("remark", ""), a.append("memo", se.memo), a.append("address", se.address), a.append("chain", se.chain), a.append("amount", se.amount.toString()), a.append("token", e), z.sentWithdraw(a).then((e => {
                        const a = e.data;
                        0 == a.code ? (ne.success($("depwi.withdrawal-submitted-success")), ke("")) : ne.error(a.message)
                    }))
                },
                ye = e => {
                    var a;
                    ue.otpSms = e, 6 == e.length && (null == (a = X.value) || a.validateField("otpSms"))
                },
                he = e => {
                    var a;
                    ue.otpEmail = e, 6 == e.length && (null == (a = X.value) || a.validateField("otpEmail"))
                },
                ge = e => {
                    var a;
                    ue.otpAuth = e, 6 == e.length && (null == (a = X.value) || a.validateField("otpAuth"))
                },
                ke = e => {
                    Z.value && ae.value.clearInput(), Q.value && te.value.clearInput(), M.value && ee.value.clearInput(), J("successAction", e), J("update:modelValue", !1)
                };
            let be = n(60),
                we = n(60);
            const _e = n(!0),
                Ee = n(!0),
                Oe = () => {
                    _e.value = !1;
                    let e = 0;
                    let a = setInterval((() => {
                        e += 1, we.value = 60 - e
                    }), 1e3);
                    setTimeout((() => {
                        clearInterval(a), _e.value = !0, we.value = 60
                    }), 6e4)
                },
                Ae = () => {
                    Ee.value = !1;
                    let e = 0;
                    let a = setInterval((() => {
                        e += 1, be.value = 60 - e
                    }), 1e3);
                    setTimeout((() => {
                        clearInterval(a), Ee.value = !0, be.value = 60
                    }), 6e4)
                },
                xe = () => {
                    se.message && (async () => {
                        await C.confirm(se.message, le.value, {
                            confirmButtonText: $("sett.yes"),
                            cancelButtonText: $("wall.cancel"),
                            customClass: "sasfw",
                            type: "warning"
                        }).then((() => !0)).catch((() => (J("update:modelValue", !1), !1)))
                    })()
                };
            return (a, t) => {
                const l = e;
                return i(), p(b, null, [se.enableBtn ? (i(), c(y(E), {
                    key: 0,
                    size: "small",
                    class: "text-medium",
                    color: "var(--primary)",
                    style: {
                        color: "white"
                    },
                    onClick: t[0] || (t[0] = e => J("update:modelValue", !0))
                }, {
                    default: m((() => [v(f(le.value), 1)])),
                    _: 1
                })) : h("", !0), g(y(I), {
                    modelValue: oe.value,
                    "onUpdate:modelValue": t[6] || (t[6] = e => oe.value = e),
                    "lock-scroll": "",
                    "show-close": !1,
                    class: "dialogw cdetail dialogAuth doubleCheck",
                    "append-to-body": "",
                    "destroy-on-close": "",
                    onClose: t[7] || (t[7] = e => [J("closeWithdraw"), J("update:modelValue", !1)]),
                    onOpen: xe
                }, {
                    default: m((() => [k("div", D, [k("div", S, [k("div", T, [g(y(E), {
                        icon: y(w),
                        style: {
                            position: "absolute",
                            right: "15px",
                            top: "10px",
                            "border-color": "transparent"
                        },
                        circle: "",
                        onClick: t[1] || (t[1] = e => J("update:modelValue", !1))
                    }, null, 8, ["icon"]), k("h1", V, f(y($)("sett.security-verification")), 1), t[8] || (t[8] = k("div", {
                        class: "lineBreak"
                    }, null, -1)), y(U).isAppOn || "TOKEN_DISABLE_PHONE" != se.type ? h("", !0) : (i(), c(y(O), {
                        key: 0,
                        title: y($)("ctm.email-not-change-site-rec"),
                        type: "warning",
                        "show-icon": "",
                        closable: !1,
                        effect: "dark"
                    }, null, 8, ["title"])), g(y(A), {
                        ref_key: "ruleFormRef",
                        ref: X,
                        model: ue,
                        "status-icon": "",
                        rules: de,
                        "label-width": "0px",
                        class: "demo-ruleForm mt-2 text-center",
                        onSubmit: t[5] || (t[5] = e => ie(X.value))
                    }, {
                        default: m((() => [Q.value && y(q).mobile ? (i(), c(y(x), {
                            key: 0,
                            prop: "otpSms"
                        }, {
                            default: m((() => [k("div", B, [k("label", j, f(y($)("sett.sms-verification-sent").replace("$$", y(q).mobile)), 1), g(y(E), {
                                class: "btn-get",
                                style: {
                                    background: "transparent"
                                },
                                disabled: !Ee.value,
                                onClick: t[2] || (t[2] = e => (() => {
                                    const e = new FormData;
                                    e.append("type", se.type), z.sentVerifySms(e).then((({
                                        data: e
                                    }) => {
                                        500 == e.code ? ne.error(e.message) : 0 == e.code && Ae()
                                    })).catch((e => {
                                        ne.error(e), console.log(e)
                                    }))
                                })())
                            }, {
                                default: m((() => [Ee.value ? (i(), p("span", F, f(y($)("depwi.get-code")), 1)) : (i(), p("div", N, f(y(we)), 1))])),
                                _: 1
                            }, 8, ["disabled"])]), g(_, {
                                ref_key: "otpSmsInput",
                                ref: te,
                                class: "otp-body",
                                "input-classes": "otp-input",
                                separator: "-",
                                "num-inputs": 6,
                                "should-auto-focus": !0,
                                "is-input-num": !0,
                                onOnChange: ye,
                                onOnComplete: ye
                            }, null, 512)])),
                            _: 1
                        })) : h("", !0), Z.value && y(q).email ? (i(), c(y(x), {
                            key: 1,
                            prop: "otpEmail"
                        }, {
                            default: m((() => [k("div", L, [k("label", K, f(y($)("sett.email-verification-sent").replace("$$", y(q).email)), 1), g(y(E), {
                                class: "btn-get",
                                style: {
                                    background: "transparent"
                                },
                                disabled: !_e.value,
                                onClick: t[3] || (t[3] = e => (() => {
                                    const e = new FormData;
                                    e.append("type", se.type), z.sentVerifyEmail(e).then((({
                                        data: e
                                    }) => {
                                        500 == e.code ? ne.error(e.message) : 0 == e.code && Oe()
                                    })).catch((e => {
                                        ne.error(e), console.log(e)
                                    }))
                                })())
                            }, {
                                default: m((() => [_e.value ? (i(), p("span", W, f(y($)("depwi.get-code")), 1)) : (i(), p("div", H, f(y(we)), 1))])),
                                _: 1
                            }, 8, ["disabled"])]), g(_, {
                                ref_key: "otpEmailInput",
                                ref: ae,
                                class: "otp-body",
                                "input-classes": "otp-input",
                                separator: "-",
                                "num-inputs": 6,
                                "should-auto-focus": !0,
                                "is-input-num": !0,
                                onOnChange: he,
                                onOnComplete: he
                            }, null, 512)])),
                            _: 1
                        })) : h("", !0), M.value ? (i(), c(y(x), {
                            key: 2,
                            prop: "otpAuth"
                        }, {
                            default: m((() => [k("div", P, [k("label", G, f(y($)("sett.two-factor-authentication")), 1)]), g(_, {
                                ref_key: "otpAuthInput",
                                ref: ee,
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
                        })) : h("", !0), g(l, {
                            class: "mt-5"
                        }, {
                            default: m((() => [g(y(E), {
                                size: "large",
                                type: "primary",
                                onClick: t[4] || (t[4] = e => {
                                    ie(X.value)
                                })
                            }, {
                                default: m((() => [v(f(le.value), 1)])),
                                _: 1
                            })])),
                            _: 1
                        })])),
                        _: 1
                    }, 8, ["model", "rules"])])])])])),
                    _: 1
                }, 8, ["modelValue"])], 64)
            }
        }
    });
export {
    R as _
};