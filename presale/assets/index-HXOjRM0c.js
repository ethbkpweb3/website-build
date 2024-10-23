import {
    W as e,
    y as a,
    h as t,
    X as l,
    B as n,
    R as o,
    I as i,
    C as r,
    L as s,
    ds as u,
    T as v,
    F as c,
    m as d,
    be as f,
    o as h,
    j as p,
    n as m,
    w as g,
    dg as y,
    d9 as I,
    l as w,
    v as b,
    p as C,
    dj as k,
    bw as x,
    s as S,
    r as M,
    ck as T,
    P as B,
    cB as E,
    t as H,
    Q as N,
    K as _,
    N as L
} from "./index-CQfCy4Xm.js";
import {
    b as j,
    i as A,
    H as $,
    E as V,
    I as P,
    _ as D,
    p as G,
    w as O,
    F as R
} from "./index-DZwhim7i.js";
import {
    o as W,
    m as z
} from "./index-DWyf7GKU.js";
import {
    u as K
} from "./index-Czea63rc.js";
import {
    f as F
} from "./index-CreMjc0E.js";
import {
    n as X,
    u as Q
} from "./index-wV0BwLDn.js";

function Y(e, a, t) {
    var l = !0,
        n = !0;
    if ("function" != typeof e) throw new TypeError("Expected a function");
    return W(t) && (l = "leading" in t ? !!t.leading : l, n = "trailing" in t ? !!t.trailing : n), X(e, a, {
        leading: l,
        maxWait: a,
        trailing: n
    })
}
const q = j({
        initialIndex: {
            type: Number,
            default: 0
        },
        height: {
            type: String,
            default: ""
        },
        trigger: {
            type: String,
            values: ["hover", "click"],
            default: "hover"
        },
        autoplay: {
            type: Boolean,
            default: !0
        },
        interval: {
            type: Number,
            default: 3e3
        },
        indicatorPosition: {
            type: String,
            values: ["", "none", "outside"],
            default: ""
        },
        arrow: {
            type: String,
            values: ["always", "hover", "never"],
            default: "hover"
        },
        type: {
            type: String,
            values: ["", "card"],
            default: ""
        },
        cardScale: {
            type: Number,
            default: .83
        },
        loop: {
            type: Boolean,
            default: !0
        },
        direction: {
            type: String,
            values: ["horizontal", "vertical"],
            default: "horizontal"
        },
        pauseOnHover: {
            type: Boolean,
            default: !0
        },
        motionBlur: Boolean
    }),
    J = {
        change: (e, a) => [e, a].every(A)
    },
    U = Symbol("carouselContextKey"),
    Z = "ElCarouselItem",
    ee = (d, f, h) => {
        const {
            children: p,
            addChild: m,
            removeChild: g
        } = K(c(), Z), y = e(), I = a(-1), w = a(null), b = a(!1), C = a(), k = a(0), x = a(!0), S = a(!0), M = a(!1), T = t((() => "never" !== d.arrow && !l(H))), B = t((() => p.value.some((e => e.props.label.toString().length > 0)))), E = t((() => "card" === d.type)), H = t((() => "vertical" === d.direction)), N = t((() => "auto" !== d.height ? {
            height: d.height
        } : {
            height: `${k.value}px`,
            overflow: "hidden"
        })), _ = Y((e => {
            V(e)
        }), 300, {
            trailing: !0
        }), L = Y((e => {
            ! function(e) {
                "hover" === d.trigger && e !== I.value && (I.value = e, S.value || (M.value = !0))
            }(e)
        }), 300);

        function j() {
            w.value && (clearInterval(w.value), w.value = null)
        }

        function A() {
            d.interval <= 0 || !d.autoplay || w.value || (w.value = setInterval((() => $()), d.interval))
        }
        const $ = () => {
            S.value || (M.value = !0), S.value = !1, I.value < p.value.length - 1 ? I.value = I.value + 1 : d.loop ? I.value = 0 : M.value = !1
        };

        function V(e) {
            if (S.value || (M.value = !0), S.value = !1, u(e)) {
                const a = p.value.filter((a => a.props.name === e));
                a.length > 0 && (e = p.value.indexOf(a[0]))
            }
            if (e = Number(e), Number.isNaN(e) || e !== Math.floor(e)) return;
            const a = p.value.length,
                t = I.value;
            I.value = e < 0 ? d.loop ? a - 1 : 0 : e >= a ? d.loop ? 0 : a - 1 : e, t === I.value && P(t), D()
        }

        function P(e) {
            p.value.forEach(((a, t) => {
                a.translateItem(t, I.value, e)
            }))
        }

        function D() {
            j(), d.pauseOnHover || A()
        }
        n((() => I.value), ((e, a) => {
            P(a), x.value && (e %= 2, a %= 2), a > -1 && f("change", e, a)
        })), n((() => d.autoplay), (e => {
            e ? A() : j()
        })), n((() => d.loop), (() => {
            V(I.value)
        })), n((() => d.interval), (() => {
            D()
        }));
        const G = o();
        return i((() => {
            n((() => p.value), (() => {
                p.value.length > 0 && V(d.initialIndex)
            }), {
                immediate: !0
            }), G.value = z(C.value, (() => {
                P()
            })), A()
        })), r((() => {
            j(), C.value && G.value && G.value.stop()
        })), s(U, {
            root: C,
            isCardType: E,
            isVertical: H,
            items: p,
            loop: d.loop,
            cardScale: d.cardScale,
            addItem: m,
            removeItem: g,
            setActiveItem: V,
            setContainerHeight: function(e) {
                "auto" === d.height && (k.value = e)
            }
        }), {
            root: C,
            activeIndex: I,
            arrowDisplay: T,
            hasLabel: B,
            hover: b,
            isCardType: E,
            isTransitioning: M,
            items: p,
            isVertical: H,
            containerStyle: N,
            isItemsTwoLength: x,
            handleButtonEnter: function(e) {
                l(H) || p.value.forEach(((a, t) => {
                    e === function(e, a) {
                        var t, n, o, i;
                        const r = l(p),
                            s = r.length;
                        if (0 === s || !e.states.inStage) return !1;
                        const u = a + 1,
                            v = a - 1,
                            c = s - 1,
                            d = r[c].states.active,
                            f = r[0].states.active,
                            h = null == (n = null == (t = r[u]) ? void 0 : t.states) ? void 0 : n.active,
                            m = null == (i = null == (o = r[v]) ? void 0 : o.states) ? void 0 : i.active;
                        return a === c && f || h ? "left" : !!(0 === a && d || m) && "right"
                    }(a, t) && (a.states.hover = !0)
                }))
            },
            handleTransitionEnd: function() {
                M.value = !1
            },
            handleButtonLeave: function() {
                l(H) || p.value.forEach((e => {
                    e.states.hover = !1
                }))
            },
            handleIndicatorClick: function(e) {
                e !== I.value && (S.value || (M.value = !0)), I.value = e
            },
            handleMouseEnter: function() {
                b.value = !0, d.pauseOnHover && j()
            },
            handleMouseLeave: function() {
                b.value = !1, A()
            },
            setActiveItem: V,
            prev: function() {
                V(I.value - 1)
            },
            next: function() {
                V(I.value + 1)
            },
            PlaceholderItem: function() {
                var e;
                const a = null == (e = y.default) ? void 0 : e.call(y);
                if (!a) return null;
                const t = F(a).filter((e => v(e) && e.type.name === Z));
                return 2 === (null == t ? void 0 : t.length) && d.loop && !E.value ? (x.value = !0, t) : (x.value = !1, null)
            },
            isTwoLengthShow: e => !x.value || (I.value <= 1 ? e <= 1 : e > 1),
            throttledArrowClick: _,
            throttledIndicatorHover: L
        }
    },
    ae = d({
        name: "ElCarousel"
    });
var te = D(d({ ...ae,
    props: q,
    emits: J,
    setup(e, {
        expose: a,
        emit: n
    }) {
        const o = e,
            {
                root: i,
                activeIndex: r,
                arrowDisplay: s,
                hasLabel: u,
                hover: v,
                isCardType: c,
                items: d,
                isVertical: N,
                containerStyle: _,
                handleButtonEnter: L,
                handleButtonLeave: j,
                isTransitioning: A,
                handleIndicatorClick: D,
                handleMouseEnter: G,
                handleMouseLeave: O,
                handleTransitionEnd: R,
                setActiveItem: W,
                prev: z,
                next: K,
                PlaceholderItem: F,
                isTwoLengthShow: X,
                throttledArrowClick: Y,
                throttledIndicatorHover: q
            } = ee(o, n),
            J = f("carousel"),
            {
                t: U
            } = Q(),
            Z = t((() => {
                const e = [J.b(), J.m(o.direction)];
                return l(c) && e.push(J.m("card")), e
            })),
            ae = t((() => {
                const e = [J.e("container")];
                return o.motionBlur && l(A) && d.value.length > 1 && e.push(l(N) ? `${J.namespace.value}-transitioning-vertical` : `${J.namespace.value}-transitioning`), e
            })),
            te = t((() => {
                const e = [J.e("indicators"), J.em("indicators", o.direction)];
                return l(u) && e.push(J.em("indicators", "labels")), "outside" === o.indicatorPosition && e.push(J.em("indicators", "outside")), l(N) && e.push(J.em("indicators", "right")), e
            }));
        return a({
            activeIndex: r,
            setActiveItem: W,
            prev: z,
            next: K
        }), (e, a) => (h(), p("div", {
            ref_key: "root",
            ref: i,
            class: C(l(Z)),
            onMouseenter: k(l(G), ["stop"]),
            onMouseleave: k(l(O), ["stop"])
        }, [l(s) ? (h(), m(x, {
            key: 0,
            name: "carousel-arrow-left",
            persisted: ""
        }, {
            default: g((() => [y(w("button", {
                type: "button",
                class: C([l(J).e("arrow"), l(J).em("arrow", "left")]),
                "aria-label": l(U)("el.carousel.leftArrow"),
                onMouseenter: e => l(L)("left"),
                onMouseleave: l(j),
                onClick: k((e => l(Y)(l(r) - 1)), ["stop"])
            }, [b(l(V), null, {
                default: g((() => [b(l($))])),
                _: 1
            })], 42, ["aria-label", "onMouseenter", "onMouseleave", "onClick"]), [
                [I, ("always" === e.arrow || l(v)) && (o.loop || l(r) > 0)]
            ])])),
            _: 1
        })) : S("v-if", !0), l(s) ? (h(), m(x, {
            key: 1,
            name: "carousel-arrow-right",
            persisted: ""
        }, {
            default: g((() => [y(w("button", {
                type: "button",
                class: C([l(J).e("arrow"), l(J).em("arrow", "right")]),
                "aria-label": l(U)("el.carousel.rightArrow"),
                onMouseenter: e => l(L)("right"),
                onMouseleave: l(j),
                onClick: k((e => l(Y)(l(r) + 1)), ["stop"])
            }, [b(l(V), null, {
                default: g((() => [b(l(P))])),
                _: 1
            })], 42, ["aria-label", "onMouseenter", "onMouseleave", "onClick"]), [
                [I, ("always" === e.arrow || l(v)) && (o.loop || l(r) < l(d).length - 1)]
            ])])),
            _: 1
        })) : S("v-if", !0), w("div", {
            class: C(l(ae)),
            style: T(l(_)),
            onTransitionend: l(R)
        }, [b(l(F)), M(e.$slots, "default")], 46, ["onTransitionend"]), "none" !== e.indicatorPosition ? (h(), p("ul", {
            key: 2,
            class: C(l(te))
        }, [(h(!0), p(B, null, E(l(d), ((a, t) => y((h(), p("li", {
            key: t,
            class: C([l(J).e("indicator"), l(J).em("indicator", e.direction), l(J).is("active", t === l(r))]),
            onMouseenter: e => l(q)(t),
            onClick: k((e => l(D)(t)), ["stop"])
        }, [w("button", {
            class: C(l(J).e("button")),
            "aria-label": l(U)("el.carousel.indicator", {
                index: t + 1
            })
        }, [l(u) ? (h(), p("span", {
            key: 0
        }, H(a.props.label), 1)) : S("v-if", !0)], 10, ["aria-label"])], 42, ["onMouseenter", "onClick"])), [
            [I, l(X)(t)]
        ]))), 128))], 2)) : S("v-if", !0), o.motionBlur ? (h(), p("svg", {
            key: 3,
            xmlns: "http://www.w3.org/2000/svg",
            version: "1.1",
            style: {
                display: "none"
            }
        }, [w("defs", null, [w("filter", {
            id: "elCarouselHorizontal"
        }, [w("feGaussianBlur", { in: "SourceGraphic",
            stdDeviation: "12,0"
        })]), w("filter", {
            id: "elCarouselVertical"
        }, [w("feGaussianBlur", { in: "SourceGraphic",
            stdDeviation: "0,10"
        })])])])) : S("v-if", !0)], 42, ["onMouseenter", "onMouseleave"]))
    }
}), [
    ["__file", "carousel.vue"]
]);
const le = j({
        name: {
            type: String,
            default: ""
        },
        label: {
            type: [String, Number],
            default: ""
        }
    }),
    ne = e => {
        const t = N(U),
            n = c(),
            o = a(),
            r = a(!1),
            s = a(0),
            u = a(1),
            v = a(!1),
            d = a(!1),
            f = a(!1),
            h = a(!1),
            {
                isCardType: p,
                isVertical: m,
                cardScale: g
            } = t;
        const y = (e, a, n) => {
            var i;
            const r = l(p),
                c = null != (i = t.items.value.length) ? i : Number.NaN,
                y = e === a;
            r || G(n) || (h.value = y || e === n), !y && c > 2 && t.loop && (e = function(e, a, t) {
                const l = t - 1,
                    n = t / 2;
                return 0 === a && e === l ? -1 : a === l && 0 === e ? t : e < a - 1 && a - e >= n ? t + 1 : e > a + 1 && e - a >= n ? -2 : e
            }(e, a, c));
            const I = l(m);
            v.value = y, r ? (f.value = Math.round(Math.abs(e - a)) <= 1, s.value = function(e, a) {
                var n, o;
                const i = l(m) ? (null == (n = t.root.value) ? void 0 : n.offsetHeight) || 0 : (null == (o = t.root.value) ? void 0 : o.offsetWidth) || 0;
                return f.value ? i * ((2 - g) * (e - a) + 1) / 4 : e < a ? -(1 + g) * i / 4 : (3 + g) * i / 4
            }(e, a), u.value = l(v) ? 1 : g) : s.value = function(e, a, l) {
                const n = t.root.value;
                return n ? ((l ? n.offsetHeight : n.offsetWidth) || 0) * (e - a) : 0
            }(e, a, I), d.value = !0, y && o.value && t.setContainerHeight(o.value.offsetHeight)
        };
        return i((() => {
            t.addItem({
                props: e,
                states: _({
                    hover: r,
                    translate: s,
                    scale: u,
                    active: v,
                    ready: d,
                    inStage: f,
                    animating: h
                }),
                uid: n.uid,
                translateItem: y
            })
        })), L((() => {
            t.removeItem(n.uid)
        })), {
            carouselItemRef: o,
            active: v,
            animating: h,
            hover: r,
            inStage: f,
            isVertical: m,
            translate: s,
            isCardType: p,
            scale: u,
            ready: d,
            handleItemClick: function() {
                if (t && l(p)) {
                    const e = t.items.value.findIndex((({
                        uid: e
                    }) => e === n.uid));
                    t.setActiveItem(e)
                }
            }
        }
    },
    oe = d({
        name: Z
    });
var ie = D(d({ ...oe,
    props: le,
    setup(e) {
        const a = e,
            n = f("carousel"),
            {
                carouselItemRef: o,
                active: i,
                animating: r,
                hover: s,
                inStage: u,
                isVertical: v,
                translate: c,
                isCardType: d,
                scale: m,
                ready: g,
                handleItemClick: w
            } = ne(a),
            b = t((() => [n.e("item"), n.is("active", i.value), n.is("in-stage", u.value), n.is("hover", s.value), n.is("animating", r.value), {
                [n.em("item", "card")]: d.value,
                [n.em("item", "card-vertical")]: d.value && v.value
            }])),
            k = t((() => ({
                transform: [`${"translate"+(l(v)?"Y":"X")}(${l(c)}px)`, `scale(${l(m)})`].join(" ")
            })));
        return (e, a) => y((h(), p("div", {
            ref_key: "carouselItemRef",
            ref: o,
            class: C(l(b)),
            style: T(l(k)),
            onClick: l(w)
        }, [l(d) ? y((h(), p("div", {
            key: 0,
            class: C(l(n).e("mask"))
        }, null, 2)), [
            [I, !l(i)]
        ]) : S("v-if", !0), M(e.$slots, "default")], 14, ["onClick"])), [
            [I, l(g)]
        ])
    }
}), [
    ["__file", "carousel-item.vue"]
]);
const re = O(te, {
        CarouselItem: ie
    }),
    se = R(ie);
export {
    re as E, se as a
};