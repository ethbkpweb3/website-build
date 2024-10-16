import {
    b as e,
    d as o,
    e as l,
    a,
    u as n,
    f as t
} from "./index-Dwv4qbXN.js";
import {
    a as s,
    u,
    c as r
} from "./index-Citk0ABi.js";
import {
    U as c
} from "./index-D4R9Vjdp.js";
import {
    dr as d,
    y as i,
    h as p,
    B as f,
    M as y,
    I as v,
    F as m,
    bf as b
} from "./index-jdACH0Rc.js";
import {
    u as g
} from "./use-global-config-Dm8LyY4T.js";
import {
    u as B
} from "./index-B1yvdImc.js";
const C = e({
        center: Boolean,
        alignCenter: Boolean,
        closeIcon: {
            type: s
        },
        draggable: Boolean,
        overflow: Boolean,
        fullscreen: Boolean,
        showClose: {
            type: Boolean,
            default: !0
        },
        title: {
            type: String,
            default: ""
        },
        ariaLevel: {
            type: String,
            default: "2"
        }
    }),
    x = {
        close: () => !0
    },
    D = e({ ...C,
        appendToBody: Boolean,
        appendTo: {
            type: o([String, Object]),
            default: "body"
        },
        beforeClose: {
            type: o(Function)
        },
        destroyOnClose: Boolean,
        closeOnClickModal: {
            type: Boolean,
            default: !0
        },
        closeOnPressEscape: {
            type: Boolean,
            default: !0
        },
        lockScroll: {
            type: Boolean,
            default: !0
        },
        modal: {
            type: Boolean,
            default: !0
        },
        openDelay: {
            type: Number,
            default: 0
        },
        closeDelay: {
            type: Number,
            default: 0
        },
        top: {
            type: String
        },
        modelValue: Boolean,
        modalClass: String,
        width: {
            type: [String, Number]
        },
        zIndex: {
            type: Number
        },
        trapFocus: Boolean,
        headerAriaLevel: {
            type: String,
            default: "2"
        }
    }),
    F = {
        open: () => !0,
        opened: () => !0,
        close: () => !0,
        closed: () => !0,
        [c]: e => l(e),
        openAutoFocus: () => !0,
        closeAutoFocus: () => !0
    },
    S = (e, o) => {
        var l;
        const s = m().emit,
            {
                nextZIndex: C
            } = u();
        let x = "";
        const D = d(),
            F = d(),
            S = i(!1),
            I = i(!1),
            h = i(!1),
            O = i(null != (l = e.zIndex) ? l : C());
        let j, A;
        const w = g("namespace", b),
            k = p((() => {
                const o = {},
                    l = `--${w.value}-dialog`;
                return e.fullscreen || (e.top && (o[`${l}-margin-top`] = e.top), e.width && (o[`${l}-width`] = a(e.width))), o
            })),
            z = p((() => e.alignCenter ? {
                display: "flex"
            } : {}));

        function L() {
            null == A || A(), null == j || j(), e.openDelay && e.openDelay > 0 ? ({
                stop: j
            } = n((() => E()), e.openDelay)) : E()
        }

        function M() {
            null == j || j(), null == A || A(), e.closeDelay && e.closeDelay > 0 ? ({
                stop: A
            } = n((() => P()), e.closeDelay)) : P()
        }

        function N() {
            e.beforeClose ? e.beforeClose((function(e) {
                e || (I.value = !0, S.value = !1)
            })) : M()
        }

        function E() {
            t && (S.value = !0)
        }

        function P() {
            S.value = !1
        }
        return e.lockScroll && B(S), f((() => e.modelValue), (l => {
            l ? (I.value = !1, L(), h.value = !0, O.value = r(e.zIndex) ? C() : O.value++, y((() => {
                s("open"), o.value && (o.value.scrollTop = 0)
            }))) : S.value && M()
        })), f((() => e.fullscreen), (e => {
            o.value && (e ? (x = o.value.style.transform, o.value.style.transform = "") : o.value.style.transform = x)
        })), v((() => {
            e.modelValue && (S.value = !0, h.value = !0, L())
        })), {
            afterEnter: function() {
                s("opened")
            },
            afterLeave: function() {
                s("closed"), s(c, !1), e.destroyOnClose && (h.value = !1)
            },
            beforeLeave: function() {
                s("close")
            },
            handleClose: N,
            onModalClick: function() {
                e.closeOnClickModal && N()
            },
            close: M,
            doClose: P,
            onOpenAutoFocus: function() {
                s("openAutoFocus")
            },
            onCloseAutoFocus: function() {
                s("closeAutoFocus")
            },
            onCloseRequested: function() {
                e.closeOnPressEscape && N()
            },
            onFocusoutPrevented: function(e) {
                var o;
                "pointer" === (null == (o = e.detail) ? void 0 : o.focusReason) && e.preventDefault()
            },
            titleId: D,
            bodyId: F,
            closed: I,
            style: k,
            overlayDialogStyle: z,
            rendered: h,
            visible: S,
            zIndex: O
        }
    };
export {
    F as a, C as b, x as c, D as d, S as u
};