import {
    m as e,
    y as t,
    K as a,
    L as n,
    I as i,
    M as l,
    N as o,
    h as r,
    B as s,
    O as u,
    i as c,
    P as d,
    Q as v
} from "./index-N2rhOp93.js";
/**
 * Vue 3 Carousel 0.3.4
 * (c) 2024
 * @license MIT
 */
const m = {
        itemsToShow: 1,
        itemsToScroll: 1,
        modelValue: 0,
        transition: 300,
        autoplay: 0,
        snapAlign: "center",
        wrapAround: !1,
        throttle: 16,
        pauseAutoplayOnHover: !1,
        mouseDrag: !0,
        touchDrag: !0,
        dir: "ltr",
        breakpoints: void 0,
        i18n: {
            ariaNextSlide: "Navigate to next slide",
            ariaPreviousSlide: "Navigate to previous slide",
            ariaNavigateToSlide: "Navigate to slide {slideNumber}",
            ariaGallery: "Gallery",
            itemXofY: "Item {currentSlide} of {slidesCount}",
            iconArrowUp: "Arrow pointing upwards",
            iconArrowDown: "Arrow pointing downwards",
            iconArrowRight: "Arrow pointing to the right",
            iconArrowLeft: "Arrow pointing to the left"
        }
    },
    p = {
        itemsToShow: {
            default: m.itemsToShow,
            type: Number
        },
        itemsToScroll: {
            default: m.itemsToScroll,
            type: Number
        },
        wrapAround: {
            default: m.wrapAround,
            type: Boolean
        },
        throttle: {
            default: m.throttle,
            type: Number
        },
        snapAlign: {
            default: m.snapAlign,
            validator: e => ["start", "end", "center", "center-even", "center-odd"].includes(e)
        },
        transition: {
            default: m.transition,
            type: Number
        },
        breakpoints: {
            default: m.breakpoints,
            type: Object
        },
        autoplay: {
            default: m.autoplay,
            type: Number
        },
        pauseAutoplayOnHover: {
            default: m.pauseAutoplayOnHover,
            type: Boolean
        },
        modelValue: {
            default: void 0,
            type: Number
        },
        mouseDrag: {
            default: m.mouseDrag,
            type: Boolean
        },
        touchDrag: {
            default: m.touchDrag,
            type: Boolean
        },
        dir: {
            default: m.dir,
            validator: e => ["rtl", "ltr"].includes(e)
        },
        i18n: {
            default: m.i18n,
            type: Object
        },
        settings: {
            default: () => ({}),
            type: Object
        }
    };

function f({
    val: e,
    max: t,
    min: a
}) {
    return t < a ? e : Math.min(Math.max(e, a), t)
}

function g(e) {
    return e ? e.reduce(((e, t) => {
        var a;
        return t.type === d ? [...e, ...g(t.children)] : "CarouselSlide" === (null === (a = t.type) || void 0 === a ? void 0 : a.name) ? [...e, t] : e
    }), []) : []
}

function h({
    val: e,
    max: t,
    min: a = 0
}) {
    return e > t ? h({
        val: e - (t + 1),
        max: t,
        min: a
    }) : e < a ? h({
        val: e + (t + 1),
        max: t,
        min: a
    }) : e
}

function w(e = "", t = {}) {
    return Object.entries(t).reduce(((e, [t, a]) => e.replace(`{${t}}`, String(a))), e)
}
var b, x, y = e({
        name: "ARIA",
        setup() {
            const e = v("config", a(Object.assign({}, m))),
                n = v("currentSlide", t(0)),
                i = v("slidesCount", t(0));
            return () => c("div", {
                class: ["carousel__liveregion", "carousel__sr-only"],
                "aria-live": "polite",
                "aria-atomic": "true"
            }, w(e.i18n.itemXofY, {
                currentSlide: n.value + 1,
                slidesCount: i.value
            }))
        }
    }),
    S = e({
        name: "Carousel",
        props: p,
        setup(e, {
            slots: d,
            emit: v,
            expose: w
        }) {
            var b;
            const x = t(null),
                S = t([]),
                T = t(0),
                A = t(0),
                C = a(Object.assign({}, m));
            let _, O = Object.assign({}, m);
            const k = t(null !== (b = e.modelValue) && void 0 !== b ? b : 0),
                j = t(0),
                N = t(0),
                M = t(0),
                E = t(0);
            let D, I;

            function L() {
                _ = Object.assign({}, e.breakpoints), O = Object.assign(Object.assign(Object.assign({}, O), e), {
                    i18n: Object.assign(Object.assign({}, O.i18n), e.i18n),
                    breakpoints: void 0
                }), X(O)
            }

            function B() {
                if (!_ || !Object.keys(_).length) return;
                const e = Object.keys(_).map((e => Number(e))).sort(((e, t) => +t - +e));
                let t = Object.assign({}, O);
                e.some((e => {
                    const a = window.matchMedia(`(min-width: ${e}px)`).matches;
                    return a && (t = Object.assign(Object.assign({}, t), _[e])), a
                })), X(t)
            }

            function X(e) {
                Object.entries(e).forEach((([e, t]) => C[e] = t))
            }
            n("config", C), n("slidesCount", A), n("currentSlide", k), n("maxSlide", M), n("minSlide", E), n("slideWidth", T);
            const V = function(e, t) {
                let a;
                return function(...n) {
                    a && clearTimeout(a), a = setTimeout((() => {
                        e(...n), a = null
                    }), t)
                }
            }((() => {
                B(), P(), $()
            }), 16);

            function $() {
                if (!x.value) return;
                const e = x.value.getBoundingClientRect();
                T.value = e.width / C.itemsToShow
            }

            function P() {
                A.value <= 0 || (N.value = Math.ceil((A.value - 1) / 2), M.value = function({
                    config: e,
                    slidesCount: t
                }) {
                    const {
                        snapAlign: a,
                        wrapAround: n,
                        itemsToShow: i = 1
                    } = e;
                    if (n) return Math.max(t - 1, 0);
                    let l;
                    switch (a) {
                        case "start":
                            l = t - i;
                            break;
                        case "end":
                            l = t - 1;
                            break;
                        case "center":
                        case "center-odd":
                            l = t - Math.ceil((i - .5) / 2);
                            break;
                        case "center-even":
                            l = t - Math.ceil(i / 2);
                            break;
                        default:
                            l = 0
                    }
                    return Math.max(l, 0)
                }({
                    config: C,
                    slidesCount: A.value
                }), E.value = function({
                    config: e,
                    slidesCount: t
                }) {
                    const {
                        wrapAround: a,
                        snapAlign: n,
                        itemsToShow: i = 1
                    } = e;
                    let l = 0;
                    if (a || i > t) return l;
                    switch (n) {
                        case "start":
                        default:
                            l = 0;
                            break;
                        case "end":
                            l = i - 1;
                            break;
                        case "center":
                        case "center-odd":
                            l = Math.floor((i - 1) / 2);
                            break;
                        case "center-even":
                            l = Math.floor((i - 2) / 2)
                    }
                    return l
                }({
                    config: C,
                    slidesCount: A.value
                }), C.wrapAround || (k.value = f({
                    val: k.value,
                    max: M.value,
                    min: E.value
                })))
            }
            i((() => {
                l((() => $())), setTimeout((() => $()), 1e3), B(), J(), window.addEventListener("resize", V, {
                    passive: !0
                }), v("init")
            })), o((() => {
                I && clearTimeout(I), D && clearInterval(D), window.removeEventListener("resize", V, {
                    passive: !0
                })
            }));
            let R = !1;
            const Y = {
                    x: 0,
                    y: 0
                },
                H = {
                    x: 0,
                    y: 0
                },
                U = a({
                    x: 0,
                    y: 0
                }),
                G = t(!1),
                W = t(!1),
                z = () => {
                    G.value = !0
                },
                K = () => {
                    G.value = !1
                };

            function Q(e) {
                ["INPUT", "TEXTAREA", "SELECT"].includes(e.target.tagName) || (R = "touchstart" === e.type, R || e.preventDefault(), !R && 0 !== e.button || ee.value || (Y.x = R ? e.touches[0].clientX : e.clientX, Y.y = R ? e.touches[0].clientY : e.clientY, document.addEventListener(R ? "touchmove" : "mousemove", q, !0), document.addEventListener(R ? "touchend" : "mouseup", F, !0)))
            }
            const q = function(e, t) {
                let a;
                return t ? function(...n) {
                    const i = this;
                    a || (e.apply(i, n), a = !0, setTimeout((() => a = !1), t))
                } : e
            }((e => {
                W.value = !0, H.x = R ? e.touches[0].clientX : e.clientX, H.y = R ? e.touches[0].clientY : e.clientY;
                const t = H.x - Y.x,
                    a = H.y - Y.y;
                U.y = a, U.x = t
            }), C.throttle);

            function F() {
                const e = "rtl" === C.dir ? -1 : 1,
                    t = .4 * Math.sign(U.x),
                    a = Math.round(U.x / T.value + t) * e;
                if (a && !R) {
                    const e = t => {
                        window.removeEventListener("click", e, !0)
                    };
                    window.addEventListener("click", e, !0)
                }
                te(k.value - a), U.x = 0, U.y = 0, W.value = !1, document.removeEventListener(R ? "touchmove" : "mousemove", q, !0), document.removeEventListener(R ? "touchend" : "mouseup", F, !0)
            }

            function J() {
                !C.autoplay || C.autoplay <= 0 || (D = setInterval((() => {
                    C.pauseAutoplayOnHover && G.value || ae()
                }), C.autoplay))
            }

            function Z() {
                D && (clearInterval(D), D = null), J()
            }
            const ee = t(!1);

            function te(e) {
                const t = C.wrapAround ? e : f({
                    val: e,
                    max: M.value,
                    min: E.value
                });
                k.value === t || ee.value || (v("slide-start", {
                    slidingToIndex: e,
                    currentSlideIndex: k.value,
                    prevSlideIndex: j.value,
                    slidesCount: A.value
                }), ee.value = !0, j.value = k.value, k.value = t, I = setTimeout((() => {
                    if (C.wrapAround) {
                        const a = h({
                            val: t,
                            max: M.value,
                            min: 0
                        });
                        a !== k.value && (k.value = a, v("loop", {
                            currentSlideIndex: k.value,
                            slidingToIndex: e
                        }))
                    }
                    v("update:modelValue", k.value), v("slide-end", {
                        currentSlideIndex: k.value,
                        prevSlideIndex: j.value,
                        slidesCount: A.value
                    }), ee.value = !1, Z()
                }), C.transition))
            }

            function ae() {
                te(k.value + C.itemsToScroll)
            }

            function ne() {
                te(k.value - C.itemsToScroll)
            }
            const ie = {
                slideTo: te,
                next: ae,
                prev: ne
            };
            n("nav", ie), n("isSliding", ee);
            const le = r((() => function({
                config: e,
                currentSlide: t,
                slidesCount: a
            }) {
                const {
                    snapAlign: n,
                    wrapAround: i,
                    itemsToShow: l = 1
                } = e;
                let o = t;
                switch (n) {
                    case "center":
                    case "center-odd":
                        o -= (l - 1) / 2;
                        break;
                    case "center-even":
                        o -= (l - 2) / 2;
                        break;
                    case "end":
                        o -= l - 1
                }
                return i ? o : f({
                    val: o,
                    max: a - l,
                    min: 0
                })
            }({
                config: C,
                currentSlide: k.value,
                slidesCount: A.value
            })));
            n("slidesToScroll", le);
            const oe = r((() => {
                const e = "rtl" === C.dir ? -1 : 1,
                    t = le.value * T.value * e;
                return {
                    transform: `translateX(${U.x-t}px)`,
                    transition: `${ee.value?C.transition:0}ms`,
                    margin: C.wrapAround ? `0 -${A.value*T.value}px` : "",
                    width: "100%"
                }
            }));

            function re() {
                L(), B(), P(), $(), Z()
            }
            Object.keys(p).forEach((t => {
                ["modelValue"].includes(t) || s((() => e[t]), re)
            })), s((() => e.modelValue), (e => {
                e !== k.value && te(Number(e))
            })), s(A, P), v("before-init"), L();
            const se = {
                config: C,
                slidesCount: A,
                slideWidth: T,
                next: ae,
                prev: ne,
                slideTo: te,
                currentSlide: k,
                maxSlide: M,
                minSlide: E,
                middleSlide: N
            };
            w({
                updateBreakpointsConfigs: B,
                updateSlidesData: P,
                updateSlideWidth: $,
                initDefaultConfigs: L,
                restartCarousel: re,
                slideTo: te,
                next: ae,
                prev: ne,
                nav: ie,
                data: se
            });
            const ue = d.default || d.slides,
                ce = d.addons,
                de = a(se);
            return () => {
                const e = g(null == ue ? void 0 : ue(de)),
                    t = (null == ce ? void 0 : ce(de)) || [];
                e.forEach(((e, t) => e.props.index = t));
                let a = e;
                if (C.wrapAround) {
                    const t = e.map(((t, a) => u(t, {
                            index: -e.length + a,
                            isClone: !0,
                            key: `clone-before-${a}`
                        }))),
                        n = e.map(((t, a) => u(t, {
                            index: e.length + a,
                            isClone: !0,
                            key: `clone-after-${a}`
                        })));
                    a = [...t, ...e, ...n]
                }
                S.value = e, A.value = Math.max(e.length, 1);
                const n = c("ol", {
                        class: "carousel__track",
                        style: oe.value,
                        onMousedownCapture: C.mouseDrag ? Q : null,
                        onTouchstartPassiveCapture: C.touchDrag ? Q : null
                    }, a),
                    i = c("div", {
                        class: "carousel__viewport"
                    }, n);
                return c("section", {
                    ref: x,
                    class: {
                        carousel: !0, "is-sliding": ee.value, "is-dragging": W.value, "is-hover": G.value, "carousel--rtl": "rtl" === C.dir
                    },
                    dir: C.dir,
                    "aria-label": C.i18n.ariaGallery,
                    tabindex: "0",
                    onMouseenter: z,
                    onMouseleave: K
                }, [i, t, c(y)])
            }
        }
    });
(x = b || (b = {})).arrowUp = "arrowUp", x.arrowDown = "arrowDown", x.arrowRight = "arrowRight", x.arrowLeft = "arrowLeft";
const T = () => {
    const e = v("config", a(Object.assign({}, m))),
        n = v("maxSlide", t(1)),
        i = v("minSlide", t(1)),
        l = v("currentSlide", t(1)),
        o = v("nav", {}),
        r = e => h({
            val: l.value,
            max: n.value,
            min: 0
        }) === e,
        s = [];
    for (let t = i.value; t < n.value + 1; t++) {
        const a = c("button", {
                type: "button",
                class: {
                    "carousel__pagination-button": !0, "carousel__pagination-button--active": r(t)
                },
                "aria-label": w(e.i18n.ariaNavigateToSlide, {
                    slideNumber: t + 1
                }),
                onClick: () => o.slideTo(t)
            }),
            n = c("li", {
                class: "carousel__pagination-item",
                key: t
            }, a);
        s.push(n)
    }
    return c("ol", {
        class: "carousel__pagination"
    }, s)
};
var A = e({
    name: "CarouselSlide",
    props: {
        index: {
            type: Number,
            default: 1
        },
        isClone: {
            type: Boolean,
            default: !1
        }
    },
    setup(e, {
        slots: n
    }) {
        const i = v("config", a(Object.assign({}, m))),
            l = v("currentSlide", t(0)),
            o = v("slidesToScroll", t(0)),
            s = v("isSliding", t(!1)),
            u = r((() => e.index === l.value)),
            d = r((() => e.index === l.value - 1)),
            p = r((() => e.index === l.value + 1)),
            f = r((() => {
                const t = Math.floor(o.value),
                    a = Math.ceil(o.value + i.itemsToShow - 1);
                return e.index >= t && e.index <= a
            }));
        return () => {
            var t;
            return c("li", {
                style: {
                    width: 100 / i.itemsToShow + "%"
                },
                class: {
                    carousel__slide: !0, "carousel__slide--clone": e.isClone, "carousel__slide--visible": f.value, "carousel__slide--active": u.value, "carousel__slide--prev": d.value, "carousel__slide--next": p.value, "carousel__slide--sliding": s.value
                },
                "aria-hidden": !f.value
            }, null === (t = n.default) || void 0 === t ? void 0 : t.call(n, {
                isActive: u.value,
                isClone: e.isClone,
                isPrev: d.value,
                isNext: p.value,
                isSliding: s.value,
                isVisible: f.value
            }))
        }
    }
});
export {
    S as C, T as P, A as S
};