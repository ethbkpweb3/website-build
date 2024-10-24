import {
    M as e,
    m as n,
    h as o,
    y as t,
    K as a,
    cg as s,
    dr as l,
    B as r,
    I as i,
    C as c,
    bb as u,
    cC as d,
    o as p,
    n as f,
    w as m,
    dg as g,
    v,
    l as h,
    p as y,
    ck as b,
    dj as C,
    j as x,
    cE as E,
    s as w,
    t as B,
    dh as k,
    r as M,
    q as I,
    d9 as T,
    bw as L,
    ds as S,
    T as j,
    dw as A,
    cA as R,
    dx as _,
    J as z
} from "./index-CQfCy4Xm.js";
import {
    E as P
} from "./index-DhHA3mFI.js";
import {
    E as V
} from "./index-BaPl-dvV.js";
import {
    E as $,
    u as O,
    a as K
} from "./index-DYh1qtlV.js";
import {
    _ as H,
    E as D,
    l as q,
    f as U,
    p as F,
    s as J
} from "./index-DZwhim7i.js";
import {
    l as W,
    g as Z,
    e as G,
    T as N
} from "./index-DWyf7GKU.js";
import {
    o as Q
} from "./aria-C-hsWcn7.js";
import {
    i as X
} from "./validator-Kt7cHrwc.js";
import {
    a as Y
} from "./use-global-config-CYuHb1FB.js";
import {
    u as ee
} from "./index-BR6qnryQ.js";
const ne = "_trap-focus-children",
    oe = [],
    te = e => {
        if (0 === oe.length) return;
        const n = oe[oe.length - 1][ne];
        if (n.length > 0 && e.code === W.tab) {
            if (1 === n.length) return e.preventDefault(), void(document.activeElement !== n[0] && n[0].focus());
            const o = e.shiftKey,
                t = e.target === n[0],
                a = e.target === n[n.length - 1];
            t && o && (e.preventDefault(), n[n.length - 1].focus()), a && !o && (e.preventDefault(), n[0].focus())
        }
    };
var ae = H(n({
    name: "ElMessageBox",
    directives: {
        TrapFocus: {
            beforeMount(e) {
                e[ne] = Q(e), oe.push(e), oe.length <= 1 && document.addEventListener("keydown", te)
            },
            updated(n) {
                e((() => {
                    n[ne] = Q(n)
                }))
            },
            unmounted() {
                oe.shift(), 0 === oe.length && document.removeEventListener("keydown", te)
            }
        }
    },
    components: {
        ElButton: P,
        ElFocusTrap: Z,
        ElInput: V,
        ElOverlay: $,
        ElIcon: D,
        ...G
    },
    inheritAttrs: !1,
    props: {
        buttonSize: {
            type: String,
            validator: X
        },
        modal: {
            type: Boolean,
            default: !0
        },
        lockScroll: {
            type: Boolean,
            default: !0
        },
        showClose: {
            type: Boolean,
            default: !0
        },
        closeOnClickModal: {
            type: Boolean,
            default: !0
        },
        closeOnPressEscape: {
            type: Boolean,
            default: !0
        },
        closeOnHashChange: {
            type: Boolean,
            default: !0
        },
        center: Boolean,
        draggable: Boolean,
        overflow: Boolean,
        roundButton: {
            default: !1,
            type: Boolean
        },
        container: {
            type: String,
            default: "body"
        },
        boxType: {
            type: String,
            default: ""
        }
    },
    emits: ["vanish", "action"],
    setup(n, {
        emit: d
    }) {
        const {
            locale: p,
            zIndex: f,
            ns: m,
            size: g
        } = Y("message-box", o((() => n.buttonSize))), {
            t: v
        } = p, {
            nextZIndex: h
        } = f, y = t(!1), b = a({
            autofocus: !0,
            beforeClose: null,
            callback: null,
            cancelButtonText: "",
            cancelButtonClass: "",
            confirmButtonText: "",
            confirmButtonClass: "",
            customClass: "",
            customStyle: {},
            dangerouslyUseHTMLString: !1,
            distinguishCancelAndClose: !1,
            icon: "",
            inputPattern: null,
            inputPlaceholder: "",
            inputType: "text",
            inputValue: null,
            inputValidator: null,
            inputErrorMessage: "",
            message: null,
            modalFade: !0,
            modalClass: "",
            showCancelButton: !1,
            showConfirmButton: !0,
            type: "",
            title: void 0,
            showInput: !1,
            action: "",
            confirmButtonLoading: !1,
            cancelButtonLoading: !1,
            confirmButtonLoadingIcon: s(q),
            cancelButtonLoadingIcon: s(q),
            confirmButtonDisabled: !1,
            editorErrorMessage: "",
            validateError: !1,
            zIndex: h()
        }), C = o((() => {
            const e = b.type;
            return {
                [m.bm("icon", e)]: e && N[e]
            }
        })), x = l(), E = l(), w = o((() => b.icon || N[b.type] || "")), B = o((() => !!b.message)), k = t(), M = t(), I = t(), T = t(), L = t(), S = o((() => b.confirmButtonClass));
        r((() => b.inputValue), (async o => {
            await e(), "prompt" === n.boxType && null !== o && V()
        }), {
            immediate: !0
        }), r((() => y.value), (o => {
            var t, a;
            o && ("prompt" !== n.boxType && (b.autofocus ? I.value = null != (a = null == (t = L.value) ? void 0 : t.$el) ? a : k.value : I.value = k.value), b.zIndex = h()), "prompt" === n.boxType && (o ? e().then((() => {
                var e;
                T.value && T.value.$el && (b.autofocus ? I.value = null != (e = $()) ? e : k.value : I.value = k.value)
            })) : (b.editorErrorMessage = "", b.validateError = !1))
        }));
        const j = o((() => n.draggable)),
            A = o((() => n.overflow));

        function R() {
            y.value && (y.value = !1, e((() => {
                b.action && d("action", b.action)
            })))
        }
        ee(k, M, j, A), i((async () => {
            await e(), n.closeOnHashChange && window.addEventListener("hashchange", R)
        })), c((() => {
            n.closeOnHashChange && window.removeEventListener("hashchange", R)
        }));
        const _ = () => {
                n.closeOnClickModal && P(b.distinguishCancelAndClose ? "close" : "cancel")
            },
            z = K(_),
            P = e => {
                var o;
                ("prompt" !== n.boxType || "confirm" !== e || V()) && (b.action = e, b.beforeClose ? null == (o = b.beforeClose) || o.call(b, e, b, R) : R())
            },
            V = () => {
                if ("prompt" === n.boxType) {
                    const e = b.inputPattern;
                    if (e && !e.test(b.inputValue || "")) return b.editorErrorMessage = b.inputErrorMessage || v("el.messagebox.error"), b.validateError = !0, !1;
                    const n = b.inputValidator;
                    if ("function" == typeof n) {
                        const e = n(b.inputValue);
                        if (!1 === e) return b.editorErrorMessage = b.inputErrorMessage || v("el.messagebox.error"), b.validateError = !0, !1;
                        if ("string" == typeof e) return b.editorErrorMessage = e, b.validateError = !0, !1
                    }
                }
                return b.editorErrorMessage = "", b.validateError = !1, !0
            },
            $ = () => {
                const e = T.value.$refs;
                return e.input || e.textarea
            },
            H = () => {
                P("close")
            };
        return n.lockScroll && O(y), { ...u(b),
            ns: m,
            overlayEvent: z,
            visible: y,
            hasMessage: B,
            typeClass: C,
            contentId: x,
            inputId: E,
            btnSize: g,
            iconComponent: w,
            confirmButtonClasses: S,
            rootRef: k,
            focusStartRef: I,
            headerRef: M,
            inputRef: T,
            confirmRef: L,
            doClose: R,
            handleClose: H,
            onCloseRequested: () => {
                n.closeOnPressEscape && H()
            },
            handleWrapperClick: _,
            handleInputEnter: e => {
                if ("textarea" !== b.inputType) return e.preventDefault(), P("confirm")
            },
            handleAction: P,
            t: v
        }
    }
}), [
    ["render", function(e, n, o, t, a, s) {
        const l = d("el-icon"),
            r = d("close"),
            i = d("el-input"),
            c = d("el-button"),
            u = d("el-focus-trap"),
            S = d("el-overlay");
        return p(), f(L, {
            name: "fade-in-linear",
            onAfterLeave: n => e.$emit("vanish"),
            persisted: ""
        }, {
            default: m((() => [g(v(S, {
                "z-index": e.zIndex,
                "overlay-class": [e.ns.is("message-box"), e.modalClass],
                mask: e.modal
            }, {
                default: m((() => [h("div", {
                    role: "dialog",
                    "aria-label": e.title,
                    "aria-modal": "true",
                    "aria-describedby": e.showInput ? void 0 : e.contentId,
                    class: y(`${e.ns.namespace.value}-overlay-message-box`),
                    onClick: e.overlayEvent.onClick,
                    onMousedown: e.overlayEvent.onMousedown,
                    onMouseup: e.overlayEvent.onMouseup
                }, [v(u, {
                    loop: "",
                    trapped: e.visible,
                    "focus-trap-el": e.rootRef,
                    "focus-start-el": e.focusStartRef,
                    onReleaseRequested: e.onCloseRequested
                }, {
                    default: m((() => [h("div", {
                        ref: "rootRef",
                        class: y([e.ns.b(), e.customClass, e.ns.is("draggable", e.draggable), {
                            [e.ns.m("center")]: e.center
                        }]),
                        style: b(e.customStyle),
                        tabindex: "-1",
                        onClick: C((() => {}), ["stop"])
                    }, [null !== e.title && void 0 !== e.title ? (p(), x("div", {
                        key: 0,
                        ref: "headerRef",
                        class: y([e.ns.e("header"), {
                            "show-close": e.showClose
                        }])
                    }, [h("div", {
                        class: y(e.ns.e("title"))
                    }, [e.iconComponent && e.center ? (p(), f(l, {
                        key: 0,
                        class: y([e.ns.e("status"), e.typeClass])
                    }, {
                        default: m((() => [(p(), f(E(e.iconComponent)))])),
                        _: 1
                    }, 8, ["class"])) : w("v-if", !0), h("span", null, B(e.title), 1)], 2), e.showClose ? (p(), x("button", {
                        key: 0,
                        type: "button",
                        class: y(e.ns.e("headerbtn")),
                        "aria-label": e.t("el.messagebox.close"),
                        onClick: n => e.handleAction(e.distinguishCancelAndClose ? "close" : "cancel"),
                        onKeydown: k(C((n => e.handleAction(e.distinguishCancelAndClose ? "close" : "cancel")), ["prevent"]), ["enter"])
                    }, [v(l, {
                        class: y(e.ns.e("close"))
                    }, {
                        default: m((() => [v(r)])),
                        _: 1
                    }, 8, ["class"])], 42, ["aria-label", "onClick", "onKeydown"])) : w("v-if", !0)], 2)) : w("v-if", !0), h("div", {
                        id: e.contentId,
                        class: y(e.ns.e("content"))
                    }, [h("div", {
                        class: y(e.ns.e("container"))
                    }, [e.iconComponent && !e.center && e.hasMessage ? (p(), f(l, {
                        key: 0,
                        class: y([e.ns.e("status"), e.typeClass])
                    }, {
                        default: m((() => [(p(), f(E(e.iconComponent)))])),
                        _: 1
                    }, 8, ["class"])) : w("v-if", !0), e.hasMessage ? (p(), x("div", {
                        key: 1,
                        class: y(e.ns.e("message"))
                    }, [M(e.$slots, "default", {}, (() => [e.dangerouslyUseHTMLString ? (p(), f(E(e.showInput ? "label" : "p"), {
                        key: 1,
                        for: e.showInput ? e.inputId : void 0,
                        innerHTML: e.message
                    }, null, 8, ["for", "innerHTML"])) : (p(), f(E(e.showInput ? "label" : "p"), {
                        key: 0,
                        for: e.showInput ? e.inputId : void 0
                    }, {
                        default: m((() => [I(B(e.dangerouslyUseHTMLString ? "" : e.message), 1)])),
                        _: 1
                    }, 8, ["for"]))]))], 2)) : w("v-if", !0)], 2), g(h("div", {
                        class: y(e.ns.e("input"))
                    }, [v(i, {
                        id: e.inputId,
                        ref: "inputRef",
                        modelValue: e.inputValue,
                        "onUpdate:modelValue": n => e.inputValue = n,
                        type: e.inputType,
                        placeholder: e.inputPlaceholder,
                        "aria-invalid": e.validateError,
                        class: y({
                            invalid: e.validateError
                        }),
                        onKeydown: k(e.handleInputEnter, ["enter"])
                    }, null, 8, ["id", "modelValue", "onUpdate:modelValue", "type", "placeholder", "aria-invalid", "class", "onKeydown"]), h("div", {
                        class: y(e.ns.e("errormsg")),
                        style: b({
                            visibility: e.editorErrorMessage ? "visible" : "hidden"
                        })
                    }, B(e.editorErrorMessage), 7)], 2), [
                        [T, e.showInput]
                    ])], 10, ["id"]), h("div", {
                        class: y(e.ns.e("btns"))
                    }, [e.showCancelButton ? (p(), f(c, {
                        key: 0,
                        loading: e.cancelButtonLoading,
                        "loading-icon": e.cancelButtonLoadingIcon,
                        class: y([e.cancelButtonClass]),
                        round: e.roundButton,
                        size: e.btnSize,
                        onClick: n => e.handleAction("cancel"),
                        onKeydown: k(C((n => e.handleAction("cancel")), ["prevent"]), ["enter"])
                    }, {
                        default: m((() => [I(B(e.cancelButtonText || e.t("el.messagebox.cancel")), 1)])),
                        _: 1
                    }, 8, ["loading", "loading-icon", "class", "round", "size", "onClick", "onKeydown"])) : w("v-if", !0), g(v(c, {
                        ref: "confirmRef",
                        type: "primary",
                        loading: e.confirmButtonLoading,
                        "loading-icon": e.confirmButtonLoadingIcon,
                        class: y([e.confirmButtonClasses]),
                        round: e.roundButton,
                        disabled: e.confirmButtonDisabled,
                        size: e.btnSize,
                        onClick: n => e.handleAction("confirm"),
                        onKeydown: k(C((n => e.handleAction("confirm")), ["prevent"]), ["enter"])
                    }, {
                        default: m((() => [I(B(e.confirmButtonText || e.t("el.messagebox.confirm")), 1)])),
                        _: 1
                    }, 8, ["loading", "loading-icon", "class", "round", "disabled", "size", "onClick", "onKeydown"]), [
                        [T, e.showConfirmButton]
                    ])], 2)], 14, ["onClick"])])),
                    _: 3
                }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onReleaseRequested"])], 42, ["aria-label", "aria-describedby", "onClick", "onMousedown", "onMouseup"])])),
                _: 3
            }, 8, ["z-index", "overlay-class", "mask"]), [
                [T, e.visible]
            ])])),
            _: 3
        }, 8, ["onAfterLeave"])
    }],
    ["__file", "index.vue"]
]);
const se = new Map,
    le = (e, n, o = null) => {
        const t = v(ae, e, z(e.message) || j(e.message) ? {
            default: z(e.message) ? e.message : () => e.message
        } : null);
        return t.appContext = o, R(t, n), (e => {
            let n = document.body;
            return e.appendTo && (S(e.appendTo) && (n = document.querySelector(e.appendTo)), J(e.appendTo) && (n = e.appendTo), J(n) || (n = document.body)), n
        })(e).appendChild(n.firstElementChild), t.component
    },
    re = (e, n) => {
        const o = document.createElement("div");
        e.onVanish = () => {
            R(null, o), se.delete(a)
        }, e.onAction = n => {
            const o = se.get(a);
            let s;
            s = e.showInput ? {
                value: a.inputValue,
                action: n
            } : n, e.callback ? e.callback(s, t.proxy) : "cancel" === n || "close" === n ? e.distinguishCancelAndClose && "cancel" !== n ? o.reject("close") : o.reject("cancel") : o.resolve(s)
        };
        const t = le(e, o, n),
            a = t.proxy;
        for (const s in e) _(e, s) && !_(a.$props, s) && (a[s] = e[s]);
        return a.visible = !0, a
    };

function ie(e, n = null) {
    if (!U) return Promise.reject();
    let o;
    return S(e) || j(e) ? e = {
        message: e
    } : o = e.callback, new Promise(((t, a) => {
        const s = re(e, null != n ? n : ie._context);
        se.set(s, {
            options: e,
            callback: o,
            resolve: t,
            reject: a
        })
    }))
}
const ce = {
    alert: {
        closeOnPressEscape: !1,
        closeOnClickModal: !1
    },
    confirm: {
        showCancelButton: !0
    },
    prompt: {
        showCancelButton: !0,
        showInput: !0
    }
};
["alert", "confirm", "prompt"].forEach((e => {
    ie[e] = function(e) {
        return (n, o, t, a) => {
            let s = "";
            return A(o) ? (t = o, s = "") : s = F(o) ? "" : o, ie(Object.assign({
                title: s,
                message: n,
                type: "",
                ...ce[e]
            }, t, {
                boxType: e
            }), a)
        }
    }(e)
})), ie.close = () => {
    se.forEach(((e, n) => {
        n.doClose()
    })), se.clear()
}, ie._context = null;
const ue = ie;
ue.install = e => {
    ue._context = e._context, e.config.globalProperties.$msgbox = ue, e.config.globalProperties.$messageBox = ue, e.config.globalProperties.$alert = ue.alert, e.config.globalProperties.$confirm = ue.confirm, e.config.globalProperties.$prompt = ue.prompt
};
const de = ue;
export {
    de as E
};