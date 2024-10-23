import {
    m as e,
    y as n,
    B as a,
    I as t,
    o as l,
    j as u,
    dg as s,
    d5 as o,
    l as i,
    p,
    s as d,
    P as r,
    cB as c,
    n as h
} from "./index-CQfCy4Xm.js";
import {
    _ as v
} from "./_plugin-vue_export-helper-BCo6x5W8.js";
const y = e({
        name: "SingleOtpInput",
        props: {
            inputType: {
                type: String,
                default: "tel"
            },
            inputmode: {
                type: String,
                default: "numeric"
            },
            value: {
                type: [String, Number]
            },
            separator: {
                type: String
            },
            focus: {
                type: Boolean
            },
            inputClasses: {
                type: [String, Array]
            },
            conditionalClass: {
                type: String
            },
            shouldAutoFocus: {
                type: Boolean
            },
            isLastChild: {
                type: Boolean
            },
            placeholder: {
                type: String
            },
            isDisabled: {
                type: Boolean
            }
        },
        emits: ["on-change", "on-keydown", "on-paste", "on-focus", "on-blur"],
        setup(e, {
            emit: l
        }) {
            const u = n(e.value || ""),
                s = n(null);
            return a((() => e.value), ((e, n) => {
                e !== n && (u.value = e)
            })), a((() => e.focus), ((n, a) => {
                a !== n && s.value && e.focus && (s.value.focus(), s.value.select())
            })), t((() => {
                s.value && e.focus && e.shouldAutoFocus && (s.value.focus(), s.value.select())
            })), {
                handleOnChange: () => (u.value = u.value.toString(), u.value.length > 1 && (u.value = u.value.slice(0, 1)), l("on-change", u.value)),
                handleOnKeyDown: n => {
                    e.isDisabled && n.preventDefault();
                    const a = n || window.event,
                        t = a.which ? a.which : a.keyCode;
                    (e => e >= 48 && e <= 57 || e >= 96 && e <= 105)(t) || [8, 9, 13, 37, 39, 46, 86].includes(t) ? l("on-keydown", n) : a.preventDefault()
                },
                handleOnPaste: e => l("on-paste", e),
                handleOnFocus: () => (s.value.select(), l("on-focus")),
                handleOnBlur: () => l("on-blur"),
                input: s,
                model: u
            }
        }
    }),
    m = {
        style: {
            display: "flex",
            "align-items": "center"
        }
    },
    f = ["type", "inputmode", "placeholder", "disabled"],
    O = {
        key: 0
    },
    g = ["innerHTML"];
const I = v(y, [
        ["render", function(e, n, a, t, r, c) {
            return l(), u("div", m, [s(i("input", {
                type: e.inputType,
                inputmode: e.inputmode,
                placeholder: e.placeholder,
                disabled: e.isDisabled,
                ref: "input",
                min: "0",
                max: "9",
                maxlength: "1",
                pattern: "[0-9]",
                "onUpdate:modelValue": n[0] || (n[0] = n => e.model = n),
                class: p([e.inputClasses, e.conditionalClass, {
                    "is-complete": e.model
                }]),
                onInput: n[1] || (n[1] = (...n) => e.handleOnChange && e.handleOnChange(...n)),
                onKeydown: n[2] || (n[2] = (...n) => e.handleOnKeyDown && e.handleOnKeyDown(...n)),
                onPaste: n[3] || (n[3] = (...n) => e.handleOnPaste && e.handleOnPaste(...n)),
                onFocus: n[4] || (n[4] = (...n) => e.handleOnFocus && e.handleOnFocus(...n)),
                onBlur: n[5] || (n[5] = (...n) => e.handleOnBlur && e.handleOnBlur(...n))
            }, null, 42, f), [
                [o, e.model]
            ]), !e.isLastChild && e.separator ? (l(), u("span", O, [i("span", {
                innerHTML: e.separator
            }, null, 8, g)])) : d("", !0)])
        }]
    ]),
    b = e({
        name: "Vue3OtpInput",
        components: {
            SingleOtpInput: I
        },
        props: {
            numInputs: {
                default: 4
            },
            separator: {
                type: String,
                default: "**"
            },
            inputClasses: {
                type: [String, Array]
            },
            conditionalClass: {
                type: Array,
                default: []
            },
            inputType: {
                type: String,
                validator: e => ["number", "tel", "password"].includes(e)
            },
            inputmode: {
                type: String,
                validator: e => ["numeric", "text", "tel", "none"].includes(e),
                default: "numeric"
            },
            shouldAutoFocus: {
                type: Boolean,
                default: !1
            },
            placeholder: {
                type: Array,
                default: []
            },
            isDisabled: {
                type: Boolean,
                default: !1
            }
        },
        setup(e, {
            emit: a
        }) {
            const t = n(0),
                l = n([]),
                u = n([]),
                s = () => l.value.join("").length === e.numInputs ? a("on-complete", l.value.join("")) : "Wait until the user enters the required number of characters",
                o = n => {
                    t.value = Math.max(Math.min(e.numInputs - 1, n), 0)
                },
                i = () => {
                    o(t.value + 1)
                },
                p = () => {
                    o(t.value - 1)
                },
                d = e => {
                    u.value = Object.assign([], l.value), l.value[t.value] = e, u.value.join("") !== l.value.join("") && (a("on-change", l.value.join("")), s())
                };
            return {
                activeInput: t,
                otp: l,
                oldOtp: u,
                clearInput: () => {
                    l.value.length > 0 && a("on-change", ""), l.value = [], t.value = 0
                },
                handleOnPaste: n => {
                    n.preventDefault();
                    const a = n.clipboardData.getData("text/plain").slice(0, e.numInputs - t.value).split("");
                    if ("number" === e.inputType && !a.join("").match(/^\d+$/)) return "Invalid pasted data";
                    const u = l.value.slice(0, t.value).concat(a);
                    return u.slice(0, e.numInputs).forEach((function(e, n) {
                        l.value[n] = e
                    })), o(u.slice(0, e.numInputs).length), s()
                },
                handleOnKeyDown: e => {
                    switch (e.keyCode) {
                        case 8:
                            e.preventDefault(), d(""), p();
                            break;
                        case 46:
                            e.preventDefault(), d("");
                            break;
                        case 37:
                            e.preventDefault(), p();
                            break;
                        case 39:
                            e.preventDefault(), i()
                    }
                },
                handleOnBlur: () => {
                    t.value = -1
                },
                changeCodeAtFocus: d,
                focusInput: o,
                focusNextInput: i,
                focusPrevInput: p,
                handleOnFocus: e => {
                    t.value = e
                },
                checkFilledAllInputs: s,
                handleOnChange: e => {
                    d(e), i()
                }
            }
        }
    }),
    C = {
        style: {
            display: "flex",
            "justify-content": "center"
        }
    },
    D = {
        key: 0,
        autocomplete: "off",
        name: "hidden",
        type: "text",
        style: {
            display: "none"
        }
    };
const w = v(b, [
    ["render", function(e, n, a, t, s, o) {
        const i = I;
        return l(), u("div", C, ["password" === e.inputType ? (l(), u("input", D)) : d("", !0), (l(!0), u(r, null, c(e.numInputs, ((n, a) => (l(), h(i, {
            key: a,
            focus: e.activeInput === a,
            value: e.otp[a],
            separator: e.separator,
            "input-type": e.inputType,
            inputmode: e.inputmode,
            "input-classes": e.inputClasses,
            "conditional-class": e.conditionalClass[a],
            "is-last-child": a === e.numInputs - 1,
            "should-auto-focus": e.shouldAutoFocus,
            placeholder: e.placeholder[a],
            "is-disabled": e.isDisabled,
            onOnChange: e.handleOnChange,
            onOnKeydown: e.handleOnKeyDown,
            onOnPaste: e.handleOnPaste,
            onOnFocus: n => e.handleOnFocus(a),
            onOnBlur: e.handleOnBlur
        }, null, 8, ["focus", "value", "separator", "input-type", "inputmode", "input-classes", "conditional-class", "is-last-child", "should-auto-focus", "placeholder", "is-disabled", "onOnChange", "onOnKeydown", "onOnPaste", "onOnFocus", "onOnBlur"])))), 128))])
    }]
]);
export {
    w as V
};