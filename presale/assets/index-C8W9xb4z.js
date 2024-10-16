import {J as e, m as o, Q as s, h as a, o as l, j as t, l as r, r as n, p as i, X as d, t as c, v as f, w as u, n as p, cE as v, s as b, ck as g, W as m, be as y, y as h, L as C, dg as k, d9 as w, bc as R, bL as x, bw as $} from "./index-jdACH0Rc.js";
import {E as _, a as A} from "./index-B1yvdImc.js";
import {F as j, C as E, g as F, h as L} from "./index-Citk0ABi.js";
import {E as I, _ as M, w as P} from "./index-Dwv4qbXN.js";
import {b as T, c as q, d as z, a as B, u as D} from "./use-dialog-CmZNE833.js";
import {u as S, a as J} from "./index-D4R9Vjdp.js";
import {u as K} from "./index-BWeq1WY3.js";
const O = Symbol("dialogInjectionKey")
  , Q = o({
    name: "ElDialogContent"
});
var U = M(o({
    ...Q,
    props: T,
    emits: q,
    setup(o, {expose: m}) {
        const y = o
          , {t: h} = S()
          , {Close: C} = E
          , {dialogRef: k, headerRef: w, bodyId: R, ns: x, style: $} = s(O)
          , {focusTrapRef: _} = s(j)
          , A = a(( () => [x.b(), x.is("fullscreen", y.fullscreen), x.is("draggable", y.draggable), x.is("align-center", y.alignCenter), {
            [x.m("center")]: y.center
        }]))
          , F = ( (...o) => s => {
            o.forEach((o => {
                e(o) ? o(s) : o.value = s
            }
            ))
        }
        )(_, k)
          , L = a(( () => y.draggable))
          , M = a(( () => y.overflow))
          , {resetPosition: P} = K(k, w, L, M);
        return m({
            resetPosition: P
        }),
        (e, o) => (l(),
        t("div", {
            ref: d(F),
            class: i(d(A)),
            style: g(d($)),
            tabindex: "-1"
        }, [r("header", {
            ref_key: "headerRef",
            ref: w,
            class: i([d(x).e("header"), {
                "show-close": e.showClose
            }])
        }, [n(e.$slots, "header", {}, ( () => [r("span", {
            role: "heading",
            "aria-level": e.ariaLevel,
            class: i(d(x).e("title"))
        }, c(e.title), 11, ["aria-level"])])), e.showClose ? (l(),
        t("button", {
            key: 0,
            "aria-label": d(h)("el.dialog.close"),
            class: i(d(x).e("headerbtn")),
            type: "button",
            onClick: o => e.$emit("close")
        }, [f(d(I), {
            class: i(d(x).e("close"))
        }, {
            default: u(( () => [(l(),
            p(v(e.closeIcon || d(C))))])),
            _: 1
        }, 8, ["class"])], 10, ["aria-label", "onClick"])) : b("v-if", !0)], 2), r("div", {
            id: d(R),
            class: i(d(x).e("body"))
        }, [n(e.$slots, "default")], 10, ["id"]), e.$slots.footer ? (l(),
        t("footer", {
            key: 0,
            class: i(d(x).e("footer"))
        }, [n(e.$slots, "footer")], 2)) : b("v-if", !0)], 6))
    }
}), [["__file", "dialog-content.vue"]]);
const W = o({
    name: "ElDialog",
    inheritAttrs: !1
});
const X = P(M(o({
    ...W,
    props: z,
    emits: B,
    setup(e, {expose: o}) {
        const s = e
          , t = m();
        J({
            scope: "el-dialog",
            from: "the title slot",
            replacement: "the header slot",
            version: "3.0.0",
            ref: "https://element-plus.org/en-US/component/dialog.html#slots"
        }, a(( () => !!t.title)));
        const c = y("dialog")
          , v = h()
          , j = h()
          , E = h()
          , {visible: I, titleId: M, bodyId: P, style: T, overlayDialogStyle: q, rendered: z, zIndex: B, afterEnter: S, afterLeave: K, beforeLeave: Q, handleClose: W, onModalClick: X, onOpenAutoFocus: G, onCloseAutoFocus: H, onCloseRequested: N, onFocusoutPrevented: V} = D(s, v);
        C(O, {
            dialogRef: v,
            headerRef: j,
            bodyId: P,
            ns: c,
            rendered: z,
            style: T
        });
        const Y = A(X)
          , Z = a(( () => s.draggable && !s.fullscreen));
        return o({
            visible: I,
            dialogContentRef: E,
            resetPosition: () => {
                var e;
                null == (e = E.value) || e.resetPosition()
            }
        }),
        (e, o) => (l(),
        p(d(L), {
            to: e.appendTo,
            disabled: "body" === e.appendTo && !e.appendToBody
        }, {
            default: u(( () => [f($, {
                name: "dialog-fade",
                onAfterEnter: d(S),
                onAfterLeave: d(K),
                onBeforeLeave: d(Q),
                persisted: ""
            }, {
                default: u(( () => [k(f(d(_), {
                    "custom-mask-event": "",
                    mask: e.modal,
                    "overlay-class": e.modalClass,
                    "z-index": d(B)
                }, {
                    default: u(( () => [r("div", {
                        role: "dialog",
                        "aria-modal": "true",
                        "aria-label": e.title || void 0,
                        "aria-labelledby": e.title ? void 0 : d(M),
                        "aria-describedby": d(P),
                        class: i(`${d(c).namespace.value}-overlay-dialog`),
                        style: g(d(q)),
                        onClick: d(Y).onClick,
                        onMousedown: d(Y).onMousedown,
                        onMouseup: d(Y).onMouseup
                    }, [f(d(F), {
                        loop: "",
                        trapped: d(I),
                        "focus-start-el": "container",
                        onFocusAfterTrapped: d(G),
                        onFocusAfterReleased: d(H),
                        onFocusoutPrevented: d(V),
                        onReleaseRequested: d(N)
                    }, {
                        default: u(( () => [d(z) ? (l(),
                        p(U, R({
                            key: 0,
                            ref_key: "dialogContentRef",
                            ref: E
                        }, e.$attrs, {
                            center: e.center,
                            "align-center": e.alignCenter,
                            "close-icon": e.closeIcon,
                            draggable: d(Z),
                            overflow: e.overflow,
                            fullscreen: e.fullscreen,
                            "show-close": e.showClose,
                            title: e.title,
                            "aria-level": e.headerAriaLevel,
                            onClose: d(W)
                        }), x({
                            header: u(( () => [e.$slots.title ? n(e.$slots, "title", {
                                key: 1
                            }) : n(e.$slots, "header", {
                                key: 0,
                                close: d(W),
                                titleId: d(M),
                                titleClass: d(c).e("title")
                            })])),
                            default: u(( () => [n(e.$slots, "default")])),
                            _: 2
                        }, [e.$slots.footer ? {
                            name: "footer",
                            fn: u(( () => [n(e.$slots, "footer")]))
                        } : void 0]), 1040, ["center", "align-center", "close-icon", "draggable", "overflow", "fullscreen", "show-close", "title", "aria-level", "onClose"])) : b("v-if", !0)])),
                        _: 3
                    }, 8, ["trapped", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusoutPrevented", "onReleaseRequested"])], 46, ["aria-label", "aria-labelledby", "aria-describedby", "onClick", "onMousedown", "onMouseup"])])),
                    _: 3
                }, 8, ["mask", "overlay-class", "z-index"]), [[w, d(I)]])])),
                _: 3
            }, 8, ["onAfterEnter", "onAfterLeave", "onBeforeLeave"])])),
            _: 3
        }, 8, ["to", "disabled"]))
    }
}), [["__file", "dialog.vue"]]));
export {X as E};
