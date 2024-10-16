import {
    bh as t,
    H as e,
    m as r,
    dz as n,
    y as i,
    h as o,
    I as s,
    N as a,
    o as l,
    j as d,
    l as f,
    p as u,
    X as p,
    dh as c,
    dj as h,
    v as _,
    G as v,
    k as g,
    i as y,
    Y as m,
    w as x,
    P as b,
    cB as w,
    t as M
} from "./index-jdACH0Rc.js";
import {
    _ as T
} from "./_plugin-vue_export-helper-BCo6x5W8.js";
import {
    _ as D
} from "./Collapse.vue_vue_type_style_index_0_lang-KeWOc8fH.js";
var O = {
    exports: {}
};
/*!
 * vue-scrollto v2.20.0
 * (c) 2019 Randjelovic Igor
 * @license MIT
 */
const L = e(O.exports = function() {
        function t(e) {
            return (t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(e)
        }

        function e() {
            return e = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = arguments[e];
                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
                }
                return t
            }, e.apply(this, arguments)
        }
        var r = 4,
            n = .001,
            i = 1e-7,
            o = 10,
            s = 11,
            a = 1 / (s - 1),
            l = "function" == typeof Float32Array;

        function d(t, e) {
            return 1 - 3 * e + 3 * t
        }

        function f(t, e) {
            return 3 * e - 6 * t
        }

        function u(t) {
            return 3 * t
        }

        function p(t, e, r) {
            return ((d(e, r) * t + f(e, r)) * t + u(e)) * t
        }

        function c(t, e, r) {
            return 3 * d(e, r) * t * t + 2 * f(e, r) * t + u(e)
        }

        function h(t, e, r, n, s) {
            var a, l, d = 0;
            do {
                (a = p(l = e + (r - e) / 2, n, s) - t) > 0 ? r = l : e = l
            } while (Math.abs(a) > i && ++d < o);
            return l
        }

        function _(t, e, n, i) {
            for (var o = 0; o < r; ++o) {
                var s = c(e, n, i);
                if (0 === s) return e;
                e -= (p(e, n, i) - t) / s
            }
            return e
        }

        function v(t) {
            return t
        }
        var g = function(t, e, r, i) {
                if (!(0 <= t && t <= 1 && 0 <= r && r <= 1)) throw new Error("bezier x values must be in [0, 1] range");
                if (t === e && r === i) return v;
                for (var o = l ? new Float32Array(s) : new Array(s), d = 0; d < s; ++d) o[d] = p(d * a, t, r);

                function f(e) {
                    for (var i = 0, l = 1, d = s - 1; l !== d && o[l] <= e; ++l) i += a;
                    --l;
                    var f = i + (e - o[l]) / (o[l + 1] - o[l]) * a,
                        u = c(f, t, r);
                    return u >= n ? _(e, f, t, r) : 0 === u ? f : h(e, i, i + a, t, r)
                }
                return function(t) {
                    return 0 === t ? 0 : 1 === t ? 1 : p(f(t), e, i)
                }
            },
            y = {
                ease: [.25, .1, .25, 1],
                linear: [0, 0, 1, 1],
                "ease-in": [.42, 0, 1, 1],
                "ease-out": [0, 0, .58, 1],
                "ease-in-out": [.42, 0, .58, 1]
            },
            m = !1;
        try {
            var x = Object.defineProperty({}, "passive", {
                get: function() {
                    m = !0
                }
            });
            window.addEventListener("test", null, x)
        } catch (U) {}
        var b = {
                $: function(t) {
                    return "string" != typeof t ? t : document.querySelector(t)
                },
                on: function(t, e, r) {
                    var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
                        passive: !1
                    };
                    e instanceof Array || (e = [e]);
                    for (var i = 0; i < e.length; i++) t.addEventListener(e[i], r, !!m && n)
                },
                off: function(t, e, r) {
                    e instanceof Array || (e = [e]);
                    for (var n = 0; n < e.length; n++) t.removeEventListener(e[n], r)
                },
                cumulativeOffset: function(t) {
                    var e = 0,
                        r = 0;
                    do {
                        e += t.offsetTop || 0, r += t.offsetLeft || 0, t = t.offsetParent
                    } while (t);
                    return {
                        top: e,
                        left: r
                    }
                }
            },
            w = ["mousedown", "wheel", "DOMMouseScroll", "mousewheel", "keyup", "touchmove"],
            M = {
                container: "body",
                duration: 500,
                lazy: !0,
                easing: "ease",
                offset: 0,
                force: !0,
                cancelable: !0,
                onStart: !1,
                onDone: !1,
                onCancel: !1,
                x: !1,
                y: !0
            };

        function T(t) {
            M = e({}, M, t)
        }
        var D = function() {
                var e, r, n, i, o, s, a, l, d, f, u, p, c, h, _, v, m, x, T, D, O, L, I, S, X, k, C, P = function(t) {
                    l && (I = t, D = !0)
                };

                function E(t) {
                    var e = t.scrollTop;
                    return "body" === t.tagName.toLowerCase() && (e = e || document.documentElement.scrollTop), e
                }

                function U(t) {
                    var e = t.scrollLeft;
                    return "body" === t.tagName.toLowerCase() && (e = e || document.documentElement.scrollLeft), e
                }

                function A() {
                    O = b.cumulativeOffset(r), L = b.cumulativeOffset(e), p && (_ = L.left - O.left + s, x = _ - h), c && (m = L.top - O.top + s, T = m - v)
                }

                function G(t) {
                    if (D) return R();
                    X || (X = t), o || A(), k = t - X, C = Math.min(k / n, 1), C = S(C), z(r, v + T * C, h + x * C), k < n ? window.requestAnimationFrame(G) : R()
                }

                function R() {
                    D || z(r, m, _), X = !1, b.off(r, w, P), D && u && u(I, e), !D && f && f(e)
                }

                function z(t, e, r) {
                    c && (t.scrollTop = e), p && (t.scrollLeft = r), "body" === t.tagName.toLowerCase() && (c && (document.documentElement.scrollTop = e), p && (document.documentElement.scrollLeft = r))
                }

                function B(_, O) {
                    var L = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    if ("object" === t(O) ? L = O : "number" == typeof O && (L.duration = O), !(e = b.$(_))) return console.warn("[vue-scrollto warn]: Trying to scroll to an element that is not on the page: " + _);
                    if (r = b.$(L.container || M.container), n = L.hasOwnProperty("duration") ? L.duration : M.duration, o = L.hasOwnProperty("lazy") ? L.lazy : M.lazy, i = L.easing || M.easing, s = L.hasOwnProperty("offset") ? L.offset : M.offset, a = L.hasOwnProperty("force") ? !1 !== L.force : M.force, l = L.hasOwnProperty("cancelable") ? !1 !== L.cancelable : M.cancelable, d = L.onStart || M.onStart, f = L.onDone || M.onDone, u = L.onCancel || M.onCancel, p = void 0 === L.x ? M.x : L.x, c = void 0 === L.y ? M.y : L.y, "function" == typeof s && (s = s(e, r)), h = U(r), v = E(r), A(), D = !1, !a) {
                        var X = "body" === r.tagName.toLowerCase() ? document.documentElement.clientHeight || window.innerHeight : r.offsetHeight,
                            k = v,
                            C = k + X,
                            R = m - s,
                            z = R + e.offsetHeight;
                        if (R >= k && z <= C) return void(f && f(e))
                    }
                    if (d && d(e), T || x) return "string" == typeof i && (i = y[i] || y.ease), S = g.apply(g, i), b.on(r, w, P, {
                            passive: !0
                        }), window.requestAnimationFrame(G),
                        function() {
                            I = null, D = !0
                        };
                    f && f(e)
                }
                return B
            },
            O = D(),
            L = [];

        function I(t) {
            for (var e = 0; e < L.length; ++e)
                if (L[e].el === t) return L.splice(e, 1), !0;
            return !1
        }

        function S(t) {
            for (var e = 0; e < L.length; ++e)
                if (L[e].el === t) return L[e]
        }

        function X(t) {
            var e = S(t);
            return e || (L.push(e = {
                el: t,
                binding: {}
            }), e)
        }

        function k(t) {
            var e = X(this).binding;
            if (e.value) {
                if (t.preventDefault(), "string" == typeof e.value) return O(e.value);
                O(e.value.el || e.value.element, e.value)
            }
        }
        var C = {
                bind: function(t, e) {
                    X(t).binding = e, b.on(t, "click", k)
                },
                unbind: function(t) {
                    I(t), b.off(t, "click", k)
                },
                update: function(t, e) {
                    X(t).binding = e
                }
            },
            P = {
                bind: C.bind,
                unbind: C.unbind,
                update: C.update,
                beforeMount: C.bind,
                unmounted: C.unbind,
                updated: C.update,
                scrollTo: O,
                bindings: L
            },
            E = function(t, e) {
                e && T(e), t.directive("scroll-to", P), (t.config.globalProperties || t.prototype).$scrollTo = P.scrollTo
            };
        return "undefined" != typeof window && window.Vue && (window.VueScrollTo = P, window.VueScrollTo.setDefaults = T, window.VueScrollTo.scroller = D, window.Vue.use && window.Vue.use(E)), P.install = E, P
    }()),
    I = {
        class: "progress-circle svg-content",
        width: "100%",
        height: "100%",
        viewBox: "-1 -1 102 102"
    },
    S = T(r({
        __name: "BackToTop",
        setup(t) {
            const {
                y: e
            } = n(), r = L.scrollTo, _ = i(), v = o((() => e.value > 600)), g = () => {
                if (_.value) {
                    const t = _.value.getTotalLength();
                    let e = t - window.scrollY * t / (document.body.scrollHeight - window.innerHeight);
                    _.value.style.strokeDashoffset = Math.round(e).toString()
                }
            };
            return s((() => {
                if (window.addEventListener("scroll", g, {
                        passive: !0
                    }), _.value) {
                    const t = _.value.style,
                        e = _.value.getTotalLength();
                    t.transition = "none", t.strokeDasharray = `${e} ${e}`, _.value.getBoundingClientRect(), t.transition = "stroke-dashoffset 10ms linear"
                }
            })), a((() => {
                window.removeEventListener("scroll", g)
            })), (t, e) => (l(), d("div", {
                class: u(["progress-wrap", [v.value && "active-progress"]]),
                onClick: e[0] || (e[0] = t => p(r)("#app", 800, {
                    offset: -100
                })),
                onKeydown: e[1] || (e[1] = c(h((() => p(r)("#app", 800, {
                    offset: -100
                })), ["prevent"]), ["space"]))
            }, [(l(), d("svg", I, [f("path", {
                ref_key: "progressPath",
                ref: _,
                d: "M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
            }, null, 512)]))], 34))
        }
    }), [
        ["__scopeId", "data-v-d49a4b5a"]
    ]),
    X = {
        class: "py-6"
    },
    k = {
        class: "columns"
    },
    C = {
        class: "column is-5 is-offset-1"
    },
    P = {
        class: "column is-5"
    },
    E = r({
        __name: "DoubleFaqCollapse",
        props: {
            left: {
                default: () => []
            },
            right: {
                default: () => []
            },
            chevrons: {
                type: Boolean,
                default: !1
            }
        },
        setup(t) {
            const e = t;
            return (t, r) => {
                const n = D;
                return l(), d("div", X, [f("div", k, [f("div", C, [_(n, {
                    items: e.left,
                    "with-chevron": e.chevrons
                }, null, 8, ["items", "with-chevron"])]), f("div", P, [_(n, {
                    items: e.right,
                    "with-chevron": e.chevrons
                }, null, 8, ["items", "with-chevron"])])])])
            }
        }
    });

function U(t, e, r) {
    return e && function(t, e) {
        for (var r = 0; r < e.length; r++) {
            var n = e[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }(t.prototype, e), t
}
/*!
 * Observer 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
var A, G, R, z, B, F, Y, N, q, H, V, W, j, $ = function() {
        return A || "undefined" != typeof window && (A = window.gsap) && A.registerPlugin && A
    },
    Q = 1,
    Z = [],
    K = [],
    J = [],
    tt = Date.now,
    et = function(t, e) {
        return e
    },
    rt = function(t, e) {
        return ~J.indexOf(t) && J[J.indexOf(t) + 1][e]
    },
    nt = function(t) {
        return !!~H.indexOf(t)
    },
    it = function(t, e, r, n, i) {
        return t.addEventListener(e, r, {
            passive: !1 !== n,
            capture: !!i
        })
    },
    ot = function(t, e, r, n) {
        return t.removeEventListener(e, r, !!n)
    },
    st = "scrollLeft",
    at = "scrollTop",
    lt = function() {
        return V && V.isPressed || K.cache++
    },
    dt = function(t, e) {
        var r = function r(n) {
            if (n || 0 === n) {
                Q && (R.history.scrollRestoration = "manual");
                var i = V && V.isPressed;
                n = r.v = Math.round(n) || (V && V.iOS ? 1 : 0), t(n), r.cacheID = K.cache, i && et("ss", n)
            } else(e || K.cache !== r.cacheID || et("ref")) && (r.cacheID = K.cache, r.v = t());
            return r.v + r.offset
        };
        return r.offset = 0, t && r
    },
    ft = {
        s: st,
        p: "left",
        p2: "Left",
        os: "right",
        os2: "Right",
        d: "width",
        d2: "Width",
        a: "x",
        sc: dt((function(t) {
            return arguments.length ? R.scrollTo(t, ut.sc()) : R.pageXOffset || z[st] || B[st] || F[st] || 0
        }))
    },
    ut = {
        s: at,
        p: "top",
        p2: "Top",
        os: "bottom",
        os2: "Bottom",
        d: "height",
        d2: "Height",
        a: "y",
        op: ft,
        sc: dt((function(t) {
            return arguments.length ? R.scrollTo(ft.sc(), t) : R.pageYOffset || z[at] || B[at] || F[at] || 0
        }))
    },
    pt = function(t, e) {
        return (e && e._ctx && e._ctx.selector || A.utils.toArray)(t)[0] || ("string" == typeof t && !1 !== A.config().nullTargetWarn ? console.warn("Element not found:", t) : null)
    },
    ct = function(t, e) {
        var r = e.s,
            n = e.sc;
        nt(t) && (t = z.scrollingElement || B);
        var i = K.indexOf(t),
            o = n === ut.sc ? 1 : 2;
        !~i && (i = K.push(t) - 1), K[i + o] || it(t, "scroll", lt);
        var s = K[i + o],
            a = s || (K[i + o] = dt(rt(t, r), !0) || (nt(t) ? n : dt((function(e) {
                return arguments.length ? t[r] = e : t[r]
            }))));
        return a.target = t, s || (a.smooth = "smooth" === A.getProperty(t, "scrollBehavior")), a
    },
    ht = function(t, e, r) {
        var n = t,
            i = t,
            o = tt(),
            s = o,
            a = e || 50,
            l = Math.max(500, 3 * a),
            d = function(t, e) {
                var l = tt();
                e || l - o > a ? (i = n, n = t, s = o, o = l) : r ? n += t : n = i + (t - i) / (l - s) * (o - s)
            };
        return {
            update: d,
            reset: function() {
                i = n = r ? 0 : n, s = o = 0
            },
            getVelocity: function(t) {
                var e = s,
                    a = i,
                    f = tt();
                return (t || 0 === t) && t !== n && d(t), o === s || f - s > l ? 0 : (n + (r ? a : -a)) / ((r ? f : o) - e) * 1e3
            }
        }
    },
    _t = function(t, e) {
        return e && !t._gsapAllow && t.preventDefault(), t.changedTouches ? t.changedTouches[0] : t
    },
    vt = function(t) {
        var e = Math.max.apply(Math, t),
            r = Math.min.apply(Math, t);
        return Math.abs(e) >= Math.abs(r) ? e : r
    },
    gt = function() {
        var t, e, r, n;
        (q = A.core.globals().ScrollTrigger) && q.core && (t = q.core, e = t.bridge || {}, r = t._scrollers, n = t._proxies, r.push.apply(r, K), n.push.apply(n, J), K = r, J = n, et = function(t, r) {
            return e[t](r)
        })
    },
    yt = function(t) {
        return A = t || $(), !G && A && "undefined" != typeof document && document.body && (R = window, z = document, B = z.documentElement, F = z.body, H = [R, z, B, F], A.utils.clamp, j = A.core.context || function() {}, N = "onpointerenter" in F ? "pointer" : "mouse", Y = mt.isTouch = R.matchMedia && R.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in R || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, W = mt.eventTypes = ("ontouchstart" in B ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in B ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout((function() {
            return Q = 0
        }), 500), gt(), G = 1), G
    };
ft.op = ut, K.cache = 0;
var mt = function() {
    function t(t) {
        this.init(t)
    }
    return t.prototype.init = function(t) {
        G || yt(A) || console.warn("Please gsap.registerPlugin(Observer)"), q || gt();
        var e = t.tolerance,
            r = t.dragMinimum,
            n = t.type,
            i = t.target,
            o = t.lineHeight,
            s = t.debounce,
            a = t.preventDefault,
            l = t.onStop,
            d = t.onStopDelay,
            f = t.ignore,
            u = t.wheelSpeed,
            p = t.event,
            c = t.onDragStart,
            h = t.onDragEnd,
            _ = t.onDrag,
            v = t.onPress,
            g = t.onRelease,
            y = t.onRight,
            m = t.onLeft,
            x = t.onUp,
            b = t.onDown,
            w = t.onChangeX,
            M = t.onChangeY,
            T = t.onChange,
            D = t.onToggleX,
            O = t.onToggleY,
            L = t.onHover,
            I = t.onHoverEnd,
            S = t.onMove,
            X = t.ignoreCheck,
            k = t.isNormalizer,
            C = t.onGestureStart,
            P = t.onGestureEnd,
            E = t.onWheel,
            U = t.onEnable,
            H = t.onDisable,
            $ = t.onClick,
            Q = t.scrollSpeed,
            K = t.capture,
            J = t.allowClicks,
            et = t.lockAxis,
            rt = t.onLockAxis;
        this.target = i = pt(i) || B, this.vars = t, f && (f = A.utils.toArray(f)), e = e || 1e-9, r = r || 0, u = u || 1, Q = Q || 1, n = n || "wheel,touch,pointer", s = !1 !== s, o || (o = parseFloat(R.getComputedStyle(F).lineHeight) || 22);
        var st, at, dt, mt, xt, bt, wt, Mt = this,
            Tt = 0,
            Dt = 0,
            Ot = t.passive || !a,
            Lt = ct(i, ft),
            It = ct(i, ut),
            St = Lt(),
            Xt = It(),
            kt = ~n.indexOf("touch") && !~n.indexOf("pointer") && "pointerdown" === W[0],
            Ct = nt(i),
            Pt = i.ownerDocument || z,
            Et = [0, 0, 0],
            Ut = [0, 0, 0],
            At = 0,
            Gt = function() {
                return At = tt()
            },
            Rt = function(t, e) {
                return (Mt.event = t) && f && ~f.indexOf(t.target) || e && kt && "touch" !== t.pointerType || X && X(t, e)
            },
            zt = function() {
                var t = Mt.deltaX = vt(Et),
                    r = Mt.deltaY = vt(Ut),
                    n = Math.abs(t) >= e,
                    i = Math.abs(r) >= e;
                T && (n || i) && T(Mt, t, r, Et, Ut), n && (y && Mt.deltaX > 0 && y(Mt), m && Mt.deltaX < 0 && m(Mt), w && w(Mt), D && Mt.deltaX < 0 != Tt < 0 && D(Mt), Tt = Mt.deltaX, Et[0] = Et[1] = Et[2] = 0), i && (b && Mt.deltaY > 0 && b(Mt), x && Mt.deltaY < 0 && x(Mt), M && M(Mt), O && Mt.deltaY < 0 != Dt < 0 && O(Mt), Dt = Mt.deltaY, Ut[0] = Ut[1] = Ut[2] = 0), (mt || dt) && (S && S(Mt), dt && (_(Mt), dt = !1), mt = !1), bt && !(bt = !1) && rt && rt(Mt), xt && (E(Mt), xt = !1), st = 0
            },
            Bt = function(t, e, r) {
                Et[r] += t, Ut[r] += e, Mt._vx.update(t), Mt._vy.update(e), s ? st || (st = requestAnimationFrame(zt)) : zt()
            },
            Ft = function(t, e) {
                et && !wt && (Mt.axis = wt = Math.abs(t) > Math.abs(e) ? "x" : "y", bt = !0), "y" !== wt && (Et[2] += t, Mt._vx.update(t, !0)), "x" !== wt && (Ut[2] += e, Mt._vy.update(e, !0)), s ? st || (st = requestAnimationFrame(zt)) : zt()
            },
            Yt = function(t) {
                if (!Rt(t, 1)) {
                    var e = (t = _t(t, a)).clientX,
                        n = t.clientY,
                        i = e - Mt.x,
                        o = n - Mt.y,
                        s = Mt.isDragging;
                    Mt.x = e, Mt.y = n, (s || Math.abs(Mt.startX - e) >= r || Math.abs(Mt.startY - n) >= r) && (_ && (dt = !0), s || (Mt.isDragging = !0), Ft(i, o), s || c && c(Mt))
                }
            },
            Nt = Mt.onPress = function(t) {
                Rt(t, 1) || t && t.button || (Mt.axis = wt = null, at.pause(), Mt.isPressed = !0, t = _t(t), Tt = Dt = 0, Mt.startX = Mt.x = t.clientX, Mt.startY = Mt.y = t.clientY, Mt._vx.reset(), Mt._vy.reset(), it(k ? i : Pt, W[1], Yt, Ot, !0), Mt.deltaX = Mt.deltaY = 0, v && v(Mt))
            },
            qt = Mt.onRelease = function(t) {
                if (!Rt(t, 1)) {
                    ot(k ? i : Pt, W[1], Yt, !0);
                    var e = !isNaN(Mt.y - Mt.startY),
                        r = Mt.isDragging,
                        n = r && (Math.abs(Mt.x - Mt.startX) > 3 || Math.abs(Mt.y - Mt.startY) > 3),
                        o = _t(t);
                    !n && e && (Mt._vx.reset(), Mt._vy.reset(), a && J && A.delayedCall(.08, (function() {
                        if (tt() - At > 300 && !t.defaultPrevented)
                            if (t.target.click) t.target.click();
                            else if (Pt.createEvent) {
                            var e = Pt.createEvent("MouseEvents");
                            e.initMouseEvent("click", !0, !0, R, 1, o.screenX, o.screenY, o.clientX, o.clientY, !1, !1, !1, !1, 0, null), t.target.dispatchEvent(e)
                        }
                    }))), Mt.isDragging = Mt.isGesturing = Mt.isPressed = !1, l && r && !k && at.restart(!0), h && r && h(Mt), g && g(Mt, n)
                }
            },
            Ht = function(t) {
                return t.touches && t.touches.length > 1 && (Mt.isGesturing = !0) && C(t, Mt.isDragging)
            },
            Vt = function() {
                return (Mt.isGesturing = !1) || P(Mt)
            },
            Wt = function(t) {
                if (!Rt(t)) {
                    var e = Lt(),
                        r = It();
                    Bt((e - St) * Q, (r - Xt) * Q, 1), St = e, Xt = r, l && at.restart(!0)
                }
            },
            jt = function(t) {
                if (!Rt(t)) {
                    t = _t(t, a), E && (xt = !0);
                    var e = (1 === t.deltaMode ? o : 2 === t.deltaMode ? R.innerHeight : 1) * u;
                    Bt(t.deltaX * e, t.deltaY * e, 0), l && !k && at.restart(!0)
                }
            },
            $t = function(t) {
                if (!Rt(t)) {
                    var e = t.clientX,
                        r = t.clientY,
                        n = e - Mt.x,
                        i = r - Mt.y;
                    Mt.x = e, Mt.y = r, mt = !0, l && at.restart(!0), (n || i) && Ft(n, i)
                }
            },
            Qt = function(t) {
                Mt.event = t, L(Mt)
            },
            Zt = function(t) {
                Mt.event = t, I(Mt)
            },
            Kt = function(t) {
                return Rt(t) || _t(t, a) && $(Mt)
            };
        at = Mt._dc = A.delayedCall(d || .25, (function() {
            Mt._vx.reset(), Mt._vy.reset(), at.pause(), l && l(Mt)
        })).pause(), Mt.deltaX = Mt.deltaY = 0, Mt._vx = ht(0, 50, !0), Mt._vy = ht(0, 50, !0), Mt.scrollX = Lt, Mt.scrollY = It, Mt.isDragging = Mt.isGesturing = Mt.isPressed = !1, j(this), Mt.enable = function(t) {
            return Mt.isEnabled || (it(Ct ? Pt : i, "scroll", lt), n.indexOf("scroll") >= 0 && it(Ct ? Pt : i, "scroll", Wt, Ot, K), n.indexOf("wheel") >= 0 && it(i, "wheel", jt, Ot, K), (n.indexOf("touch") >= 0 && Y || n.indexOf("pointer") >= 0) && (it(i, W[0], Nt, Ot, K), it(Pt, W[2], qt), it(Pt, W[3], qt), J && it(i, "click", Gt, !0, !0), $ && it(i, "click", Kt), C && it(Pt, "gesturestart", Ht), P && it(Pt, "gestureend", Vt), L && it(i, N + "enter", Qt), I && it(i, N + "leave", Zt), S && it(i, N + "move", $t)), Mt.isEnabled = !0, t && t.type && Nt(t), U && U(Mt)), Mt
        }, Mt.disable = function() {
            Mt.isEnabled && (Z.filter((function(t) {
                return t !== Mt && nt(t.target)
            })).length || ot(Ct ? Pt : i, "scroll", lt), Mt.isPressed && (Mt._vx.reset(), Mt._vy.reset(), ot(k ? i : Pt, W[1], Yt, !0)), ot(Ct ? Pt : i, "scroll", Wt, K), ot(i, "wheel", jt, K), ot(i, W[0], Nt, K), ot(Pt, W[2], qt), ot(Pt, W[3], qt), ot(i, "click", Gt, !0), ot(i, "click", Kt), ot(Pt, "gesturestart", Ht), ot(Pt, "gestureend", Vt), ot(i, N + "enter", Qt), ot(i, N + "leave", Zt), ot(i, N + "move", $t), Mt.isEnabled = Mt.isPressed = Mt.isDragging = !1, H && H(Mt))
        }, Mt.kill = Mt.revert = function() {
            Mt.disable();
            var t = Z.indexOf(Mt);
            t >= 0 && Z.splice(t, 1), V === Mt && (V = 0)
        }, Z.push(Mt), k && nt(i) && (V = Mt), Mt.enable(p)
    }, U(t, [{
        key: "velocityX",
        get: function() {
            return this._vx.getVelocity()
        }
    }, {
        key: "velocityY",
        get: function() {
            return this._vy.getVelocity()
        }
    }]), t
}();
mt.version = "3.12.5", mt.create = function(t) {
    return new mt(t)
}, mt.register = yt, mt.getAll = function() {
    return Z.slice()
}, mt.getById = function(t) {
    return Z.filter((function(e) {
        return e.vars.id === t
    }))[0]
}, $() && A.registerPlugin(mt);
/*!
 * ScrollTrigger 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
var xt, bt, wt, Mt, Tt, Dt, Ot, Lt, It, St, Xt, kt, Ct, Pt, Et, Ut, At, Gt, Rt, zt, Bt, Ft, Yt, Nt, qt, Ht, Vt, Wt, jt, $t, Qt, Zt, Kt, Jt, te, ee, re, ne, ie = 1,
    oe = Date.now,
    se = oe(),
    ae = 0,
    le = 0,
    de = function(t, e, r) {
        var n = Me(t) && ("clamp(" === t.substr(0, 6) || t.indexOf("max") > -1);
        return r["_" + e + "Clamp"] = n, n ? t.substr(6, t.length - 7) : t
    },
    fe = function(t, e) {
        return !e || Me(t) && "clamp(" === t.substr(0, 6) ? t : "clamp(" + t + ")"
    },
    ue = function t() {
        return le && requestAnimationFrame(t)
    },
    pe = function() {
        return Pt = 1
    },
    ce = function() {
        return Pt = 0
    },
    he = function(t) {
        return t
    },
    _e = function(t) {
        return Math.round(1e5 * t) / 1e5 || 0
    },
    ve = function() {
        return "undefined" != typeof window
    },
    ge = function() {
        return xt || ve() && (xt = window.gsap) && xt.registerPlugin && xt
    },
    ye = function(t) {
        return !!~Ot.indexOf(t)
    },
    me = function(t) {
        return ("Height" === t ? Qt : wt["inner" + t]) || Tt["client" + t] || Dt["client" + t]
    },
    xe = function(t) {
        return rt(t, "getBoundingClientRect") || (ye(t) ? function() {
            return Pr.width = wt.innerWidth, Pr.height = Qt, Pr
        } : function() {
            return Ve(t)
        })
    },
    be = function(t, e) {
        var r = e.s,
            n = e.d2,
            i = e.d,
            o = e.a;
        return Math.max(0, (r = "scroll" + n) && (o = rt(t, r)) ? o() - xe(t)()[i] : ye(t) ? (Tt[r] || Dt[r]) - me(n) : t[r] - t["offset" + n])
    },
    we = function(t, e) {
        for (var r = 0; r < Rt.length; r += 3)(!e || ~e.indexOf(Rt[r + 1])) && t(Rt[r], Rt[r + 1], Rt[r + 2])
    },
    Me = function(t) {
        return "string" == typeof t
    },
    Te = function(t) {
        return "function" == typeof t
    },
    De = function(t) {
        return "number" == typeof t
    },
    Oe = function(t) {
        return "object" == typeof t
    },
    Le = function(t, e, r) {
        return t && t.progress(e ? 0 : 1) && r && t.pause()
    },
    Ie = function(t, e) {
        if (t.enabled) {
            var r = t._ctx ? t._ctx.add((function() {
                return e(t)
            })) : e(t);
            r && r.totalTime && (t.callbackAnimation = r)
        }
    },
    Se = Math.abs,
    Xe = "left",
    ke = "right",
    Ce = "bottom",
    Pe = "width",
    Ee = "height",
    Ue = "Right",
    Ae = "Left",
    Ge = "Top",
    Re = "Bottom",
    ze = "padding",
    Be = "margin",
    Fe = "Width",
    Ye = "Height",
    Ne = "px",
    qe = function(t) {
        return wt.getComputedStyle(t)
    },
    He = function(t, e) {
        for (var r in e) r in t || (t[r] = e[r]);
        return t
    },
    Ve = function(t, e) {
        var r = e && "matrix(1, 0, 0, 1, 0, 0)" !== qe(t)[Et] && xt.to(t, {
                x: 0,
                y: 0,
                xPercent: 0,
                yPercent: 0,
                rotation: 0,
                rotationX: 0,
                rotationY: 0,
                scale: 1,
                skewX: 0,
                skewY: 0
            }).progress(1),
            n = t.getBoundingClientRect();
        return r && r.progress(0).kill(), n
    },
    We = function(t, e) {
        var r = e.d2;
        return t["offset" + r] || t["client" + r] || 0
    },
    je = function(t) {
        var e, r = [],
            n = t.labels,
            i = t.duration();
        for (e in n) r.push(n[e] / i);
        return r
    },
    $e = function(t) {
        var e = xt.utils.snap(t),
            r = Array.isArray(t) && t.slice(0).sort((function(t, e) {
                return t - e
            }));
        return r ? function(t, n, i) {
            var o;
            if (void 0 === i && (i = .001), !n) return e(t);
            if (n > 0) {
                for (t -= i, o = 0; o < r.length; o++)
                    if (r[o] >= t) return r[o];
                return r[o - 1]
            }
            for (o = r.length, t += i; o--;)
                if (r[o] <= t) return r[o];
            return r[0]
        } : function(r, n, i) {
            void 0 === i && (i = .001);
            var o = e(r);
            return !n || Math.abs(o - r) < i || o - r < 0 == n < 0 ? o : e(n < 0 ? r - t : r + t)
        }
    },
    Qe = function(t, e, r, n) {
        return r.split(",").forEach((function(r) {
            return t(e, r, n)
        }))
    },
    Ze = function(t, e, r, n, i) {
        return t.addEventListener(e, r, {
            passive: !n,
            capture: !!i
        })
    },
    Ke = function(t, e, r, n) {
        return t.removeEventListener(e, r, !!n)
    },
    Je = function(t, e, r) {
        (r = r && r.wheelHandler) && (t(e, "wheel", r), t(e, "touchmove", r))
    },
    tr = {
        startColor: "green",
        endColor: "red",
        indent: 0,
        fontSize: "16px",
        fontWeight: "normal"
    },
    er = {
        toggleActions: "play",
        anticipatePin: 0
    },
    rr = {
        top: 0,
        left: 0,
        center: .5,
        bottom: 1,
        right: 1
    },
    nr = function(t, e) {
        if (Me(t)) {
            var r = t.indexOf("="),
                n = ~r ? +(t.charAt(r - 1) + 1) * parseFloat(t.substr(r + 1)) : 0;
            ~r && (t.indexOf("%") > r && (n *= e / 100), t = t.substr(0, r - 1)), t = n + (t in rr ? rr[t] * e : ~t.indexOf("%") ? parseFloat(t) * e / 100 : parseFloat(t) || 0)
        }
        return t
    },
    ir = function(t, e, r, n, i, o, s, a) {
        var l = i.startColor,
            d = i.endColor,
            f = i.fontSize,
            u = i.indent,
            p = i.fontWeight,
            c = Mt.createElement("div"),
            h = ye(r) || "fixed" === rt(r, "pinType"),
            _ = -1 !== t.indexOf("scroller"),
            v = h ? Dt : r,
            g = -1 !== t.indexOf("start"),
            y = g ? l : d,
            m = "border-color:" + y + ";font-size:" + f + ";color:" + y + ";font-weight:" + p + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
        return m += "position:" + ((_ || a) && h ? "fixed;" : "absolute;"), (_ || a || !h) && (m += (n === ut ? ke : Ce) + ":" + (o + parseFloat(u)) + "px;"), s && (m += "box-sizing:border-box;text-align:left;width:" + s.offsetWidth + "px;"), c._isStart = g, c.setAttribute("class", "gsap-marker-" + t + (e ? " marker-" + e : "")), c.style.cssText = m, c.innerText = e || 0 === e ? t + "-" + e : t, v.children[0] ? v.insertBefore(c, v.children[0]) : v.appendChild(c), c._offset = c["offset" + n.op.d2], or(c, 0, n, g), c
    },
    or = function(t, e, r, n) {
        var i = {
                display: "block"
            },
            o = r[n ? "os2" : "p2"],
            s = r[n ? "p2" : "os2"];
        t._isFlipped = n, i[r.a + "Percent"] = n ? -100 : 0, i[r.a] = n ? "1px" : 0, i["border" + o + Fe] = 1, i["border" + s + Fe] = 0, i[r.p] = e + "px", xt.set(t, i)
    },
    sr = [],
    ar = {},
    lr = function() {
        return oe() - ae > 34 && (te || (te = requestAnimationFrame(Or)))
    },
    dr = function() {
        (!Yt || !Yt.isPressed || Yt.startX > Dt.clientWidth) && (K.cache++, Yt ? te || (te = requestAnimationFrame(Or)) : Or(), ae || _r("scrollStart"), ae = oe())
    },
    fr = function() {
        Ht = wt.innerWidth, qt = wt.innerHeight
    },
    ur = function() {
        K.cache++, !Ct && !Ft && !Mt.fullscreenElement && !Mt.webkitFullscreenElement && (!Nt || Ht !== wt.innerWidth || Math.abs(wt.innerHeight - qt) > .25 * wt.innerHeight) && Lt.restart(!0)
    },
    pr = {},
    cr = [],
    hr = function t() {
        return Ke(Br, "scrollEnd", t) || Mr(!0)
    },
    _r = function(t) {
        return pr[t] && pr[t].map((function(t) {
            return t()
        })) || cr
    },
    vr = [],
    gr = function(t) {
        for (var e = 0; e < vr.length; e += 5)(!t || vr[e + 4] && vr[e + 4].query === t) && (vr[e].style.cssText = vr[e + 1], vr[e].getBBox && vr[e].setAttribute("transform", vr[e + 2] || ""), vr[e + 3].uncache = 1)
    },
    yr = function(t, e) {
        var r;
        for (Ut = 0; Ut < sr.length; Ut++) !(r = sr[Ut]) || e && r._ctx !== e || (t ? r.kill(1) : r.revert(!0, !0));
        Zt = !0, e && gr(e), e || _r("revert")
    },
    mr = function(t, e) {
        K.cache++, (e || !ee) && K.forEach((function(t) {
            return Te(t) && t.cacheID++ && (t.rec = 0)
        })), Me(t) && (wt.history.scrollRestoration = jt = t)
    },
    xr = 0,
    br = function() {
        Dt.appendChild($t), Qt = !Yt && $t.offsetHeight || wt.innerHeight, Dt.removeChild($t)
    },
    wr = function(t) {
        return It(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach((function(e) {
            return e.style.display = t ? "none" : "block"
        }))
    },
    Mr = function(t, e) {
        if (!ae || t || Zt) {
            br(), ee = Br.isRefreshing = !0, K.forEach((function(t) {
                return Te(t) && ++t.cacheID && (t.rec = t())
            }));
            var r = _r("refreshInit");
            zt && Br.sort(), e || yr(), K.forEach((function(t) {
                Te(t) && (t.smooth && (t.target.style.scrollBehavior = "auto"), t(0))
            })), sr.slice(0).forEach((function(t) {
                return t.refresh()
            })), Zt = !1, sr.forEach((function(t) {
                if (t._subPinOffset && t.pin) {
                    var e = t.vars.horizontal ? "offsetWidth" : "offsetHeight",
                        r = t.pin[e];
                    t.revert(!0, 1), t.adjustPinSpacing(t.pin[e] - r), t.refresh()
                }
            })), Kt = 1, wr(!0), sr.forEach((function(t) {
                var e = be(t.scroller, t._dir),
                    r = "max" === t.vars.end || t._endClamp && t.end > e,
                    n = t._startClamp && t.start >= e;
                (r || n) && t.setPositions(n ? e - 1 : t.start, r ? Math.max(n ? e : t.start + 1, e) : t.end, !0)
            })), wr(!1), Kt = 0, r.forEach((function(t) {
                return t && t.render && t.render(-1)
            })), K.forEach((function(t) {
                Te(t) && (t.smooth && requestAnimationFrame((function() {
                    return t.target.style.scrollBehavior = "smooth"
                })), t.rec && t(t.rec))
            })), mr(jt, 1), Lt.pause(), xr++, ee = 2, Or(2), sr.forEach((function(t) {
                return Te(t.vars.onRefresh) && t.vars.onRefresh(t)
            })), ee = Br.isRefreshing = !1, _r("refresh")
        } else Ze(Br, "scrollEnd", hr)
    },
    Tr = 0,
    Dr = 1,
    Or = function(t) {
        if (2 === t || !ee && !Zt) {
            Br.isUpdating = !0, ne && ne.update(0);
            var e = sr.length,
                r = oe(),
                n = r - se >= 50,
                i = e && sr[0].scroll();
            if (Dr = Tr > i ? -1 : 1, ee || (Tr = i), n && (ae && !Pt && r - ae > 200 && (ae = 0, _r("scrollEnd")), Xt = se, se = r), Dr < 0) {
                for (Ut = e; Ut-- > 0;) sr[Ut] && sr[Ut].update(0, n);
                Dr = 1
            } else
                for (Ut = 0; Ut < e; Ut++) sr[Ut] && sr[Ut].update(0, n);
            Br.isUpdating = !1
        }
        te = 0
    },
    Lr = [Xe, "top", Ce, ke, Be + Re, Be + Ue, Be + Ge, Be + Ae, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"],
    Ir = Lr.concat([Pe, Ee, "boxSizing", "max" + Fe, "max" + Ye, "position", Be, ze, ze + Ge, ze + Ue, ze + Re, ze + Ae]),
    Sr = function(t, e, r, n) {
        if (!t._gsap.swappedIn) {
            for (var i, o = Lr.length, s = e.style, a = t.style; o--;) s[i = Lr[o]] = r[i];
            s.position = "absolute" === r.position ? "absolute" : "relative", "inline" === r.display && (s.display = "inline-block"), a[Ce] = a[ke] = "auto", s.flexBasis = r.flexBasis || "auto", s.overflow = "visible", s.boxSizing = "border-box", s[Pe] = We(t, ft) + Ne, s[Ee] = We(t, ut) + Ne, s[ze] = a[Be] = a.top = a[Xe] = "0", kr(n), a[Pe] = a["max" + Fe] = r[Pe], a[Ee] = a["max" + Ye] = r[Ee], a[ze] = r[ze], t.parentNode !== e && (t.parentNode.insertBefore(e, t), e.appendChild(t)), t._gsap.swappedIn = !0
        }
    },
    Xr = /([A-Z])/g,
    kr = function(t) {
        if (t) {
            var e, r, n = t.t.style,
                i = t.length,
                o = 0;
            for ((t.t._gsap || xt.core.getCache(t.t)).uncache = 1; o < i; o += 2) r = t[o + 1], e = t[o], r ? n[e] = r : n[e] && n.removeProperty(e.replace(Xr, "-$1").toLowerCase())
        }
    },
    Cr = function(t) {
        for (var e = Ir.length, r = t.style, n = [], i = 0; i < e; i++) n.push(Ir[i], r[Ir[i]]);
        return n.t = t, n
    },
    Pr = {
        left: 0,
        top: 0
    },
    Er = function(t, e, r, n, i, o, s, a, l, d, f, u, p, c) {
        Te(t) && (t = t(a)), Me(t) && "max" === t.substr(0, 3) && (t = u + ("=" === t.charAt(4) ? nr("0" + t.substr(3), r) : 0));
        var h, _, v, g = p ? p.time() : 0;
        if (p && p.seek(0), isNaN(t) || (t = +t), De(t)) p && (t = xt.utils.mapRange(p.scrollTrigger.start, p.scrollTrigger.end, 0, u, t)), s && or(s, r, n, !0);
        else {
            Te(e) && (e = e(a));
            var y, m, x, b, w = (t || "0").split(" ");
            v = pt(e, a) || Dt, (y = Ve(v) || {}) && (y.left || y.top) || "none" !== qe(v).display || (b = v.style.display, v.style.display = "block", y = Ve(v), b ? v.style.display = b : v.style.removeProperty("display")), m = nr(w[0], y[n.d]), x = nr(w[1] || "0", r), t = y[n.p] - l[n.p] - d + m + i - x, s && or(s, x, n, r - x < 20 || s._isStart && x > 20), r -= r - x
        }
        if (c && (a[c] = t || -.001, t < 0 && (t = 0)), o) {
            var M = t + r,
                T = o._isStart;
            h = "scroll" + n.d2, or(o, M, n, T && M > 20 || !T && (f ? Math.max(Dt[h], Tt[h]) : o.parentNode[h]) <= M + 1), f && (l = Ve(s), f && (o.style[n.op.p] = l[n.op.p] - n.op.m - o._offset + Ne))
        }
        return p && v && (h = Ve(v), p.seek(u), _ = Ve(v), p._caScrollDist = h[n.p] - _[n.p], t = t / p._caScrollDist * u), p && p.seek(g), p ? t : Math.round(t)
    },
    Ur = /(webkit|moz|length|cssText|inset)/i,
    Ar = function(t, e, r, n) {
        if (t.parentNode !== e) {
            var i, o, s = t.style;
            if (e === Dt) {
                for (i in t._stOrig = s.cssText, o = qe(t)) + i || Ur.test(i) || !o[i] || "string" != typeof s[i] || "0" === i || (s[i] = o[i]);
                s.top = r, s.left = n
            } else s.cssText = t._stOrig;
            xt.core.getCache(t).uncache = 1, e.appendChild(t)
        }
    },
    Gr = function(t, e, r) {
        var n = e,
            i = n;
        return function(e) {
            var o = Math.round(t());
            return o !== n && o !== i && Math.abs(o - n) > 3 && Math.abs(o - i) > 3 && (e = o, r && r()), i = n, n = e, e
        }
    },
    Rr = function(t, e, r) {
        var n = {};
        n[e.p] = "+=" + r, xt.set(t, n)
    },
    zr = function(t, e) {
        var r = ct(t, e),
            n = "_scroll" + e.p2,
            i = function e(i, o, s, a, l) {
                var d = e.tween,
                    f = o.onComplete,
                    u = {};
                s = s || r();
                var p = Gr(r, s, (function() {
                    d.kill(), e.tween = 0
                }));
                return l = a && l || 0, a = a || i - s, d && d.kill(), o[n] = i, o.inherit = !1, o.modifiers = u, u[n] = function() {
                    return p(s + a * d.ratio + l * d.ratio * d.ratio)
                }, o.onUpdate = function() {
                    K.cache++, e.tween && Or()
                }, o.onComplete = function() {
                    e.tween = 0, f && f.call(d)
                }, d = e.tween = xt.to(t, o)
            };
        return t[n] = r, r.wheelHandler = function() {
            return i.tween && i.tween.kill() && (i.tween = 0)
        }, Ze(t, "wheel", r.wheelHandler), Br.isTouch && Ze(t, "touchmove", r.wheelHandler), i
    },
    Br = function() {
        function t(e, r) {
            bt || t.register(xt) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), Wt(this), this.init(e, r)
        }
        return t.prototype.init = function(e, r) {
            if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), le) {
                var n, i, o, s, a, l, d, f, u, p, c, h, _, v, g, y, m, x, b, w, M, T, D, O, L, I, S, X, k, C, P, E, U, A, G, R, z, B, F, Y, N, q, H = e = He(Me(e) || De(e) || e.nodeType ? {
                        trigger: e
                    } : e, er),
                    V = H.onUpdate,
                    W = H.toggleClass,
                    j = H.id,
                    $ = H.onToggle,
                    Q = H.onRefresh,
                    Z = H.scrub,
                    tt = H.trigger,
                    et = H.pin,
                    nt = H.pinSpacing,
                    it = H.invalidateOnRefresh,
                    ot = H.anticipatePin,
                    st = H.onScrubComplete,
                    at = H.onSnapComplete,
                    lt = H.once,
                    dt = H.snap,
                    ht = H.pinReparent,
                    _t = H.pinSpacer,
                    vt = H.containerAnimation,
                    gt = H.fastScrollEnd,
                    yt = H.preventOverlaps,
                    mt = e.horizontal || e.containerAnimation && !1 !== e.horizontal ? ft : ut,
                    bt = !Z && 0 !== Z,
                    Ot = pt(e.scroller || wt),
                    Lt = xt.core.getCache(Ot),
                    kt = ye(Ot),
                    Et = "fixed" === ("pinType" in e ? e.pinType : rt(Ot, "pinType") || kt && "fixed"),
                    At = [e.onEnter, e.onLeave, e.onEnterBack, e.onLeaveBack],
                    Gt = bt && e.toggleActions.split(" "),
                    Rt = "markers" in e ? e.markers : er.markers,
                    Ft = kt ? 0 : parseFloat(qe(Ot)["border" + mt.p2 + Fe]) || 0,
                    Yt = this,
                    Nt = e.onRefreshInit && function() {
                        return e.onRefreshInit(Yt)
                    },
                    qt = function(t, e, r) {
                        var n = r.d,
                            i = r.d2,
                            o = r.a;
                        return (o = rt(t, "getBoundingClientRect")) ? function() {
                            return o()[n]
                        } : function() {
                            return (e ? me(i) : t["client" + i]) || 0
                        }
                    }(Ot, kt, mt),
                    Ht = function(t, e) {
                        return !e || ~J.indexOf(t) ? xe(t) : function() {
                            return Pr
                        }
                    }(Ot, kt),
                    Vt = 0,
                    Wt = 0,
                    jt = 0,
                    $t = ct(Ot, mt);
                if (Yt._startClamp = Yt._endClamp = !1, Yt._dir = mt, ot *= 45, Yt.scroller = Ot, Yt.scroll = vt ? vt.time.bind(vt) : $t, s = $t(), Yt.vars = e, r = r || e.animation, "refreshPriority" in e && (zt = 1, -9999 === e.refreshPriority && (ne = Yt)), Lt.tweenScroll = Lt.tweenScroll || {
                        top: zr(Ot, ut),
                        left: zr(Ot, ft)
                    }, Yt.tweenTo = n = Lt.tweenScroll[mt.p], Yt.scrubDuration = function(t) {
                        (U = De(t) && t) ? E ? E.duration(t) : E = xt.to(r, {
                            ease: "expo",
                            totalProgress: "+=0",
                            inherit: !1,
                            duration: U,
                            paused: !0,
                            onComplete: function() {
                                return st && st(Yt)
                            }
                        }): (E && E.progress(1).kill(), E = 0)
                    }, r && (r.vars.lazy = !1, r._initted && !Yt.isReverted || !1 !== r.vars.immediateRender && !1 !== e.immediateRender && r.duration() && r.render(0, !0, !0), Yt.animation = r.pause(), r.scrollTrigger = Yt, Yt.scrubDuration(Z), C = 0, j || (j = r.vars.id)), dt && (Oe(dt) && !dt.push || (dt = {
                        snapTo: dt
                    }), "scrollBehavior" in Dt.style && xt.set(kt ? [Dt, Tt] : Ot, {
                        scrollBehavior: "auto"
                    }), K.forEach((function(t) {
                        return Te(t) && t.target === (kt ? Mt.scrollingElement || Tt : Ot) && (t.smooth = !1)
                    })), o = Te(dt.snapTo) ? dt.snapTo : "labels" === dt.snapTo ? function(t) {
                        return function(e) {
                            return xt.utils.snap(je(t), e)
                        }
                    }(r) : "labelsDirectional" === dt.snapTo ? (Y = r, function(t, e) {
                        return $e(je(Y))(t, e.direction)
                    }) : !1 !== dt.directional ? function(t, e) {
                        return $e(dt.snapTo)(t, oe() - Wt < 500 ? 0 : e.direction)
                    } : xt.utils.snap(dt.snapTo), A = dt.duration || {
                        min: .1,
                        max: 2
                    }, A = Oe(A) ? St(A.min, A.max) : St(A, A), G = xt.delayedCall(dt.delay || U / 2 || .1, (function() {
                        var t = $t(),
                            e = oe() - Wt < 500,
                            i = n.tween;
                        if (!(e || Math.abs(Yt.getVelocity()) < 10) || i || Pt || Vt === t) Yt.isActive && Vt !== t && G.restart(!0);
                        else {
                            var s, a, f = (t - l) / v,
                                u = r && !bt ? r.totalProgress() : f,
                                p = e ? 0 : (u - P) / (oe() - Xt) * 1e3 || 0,
                                c = xt.utils.clamp(-f, 1 - f, Se(p / 2) * p / .185),
                                h = f + (!1 === dt.inertia ? 0 : c),
                                _ = dt,
                                g = _.onStart,
                                y = _.onInterrupt,
                                m = _.onComplete;
                            if (s = o(h, Yt), De(s) || (s = h), a = Math.round(l + s * v), t <= d && t >= l && a !== t) {
                                if (i && !i._initted && i.data <= Se(a - t)) return;
                                !1 === dt.inertia && (c = s - f), n(a, {
                                    duration: A(Se(.185 * Math.max(Se(h - u), Se(s - u)) / p / .05 || 0)),
                                    ease: dt.ease || "power3",
                                    data: Se(a - t),
                                    onInterrupt: function() {
                                        return G.restart(!0) && y && y(Yt)
                                    },
                                    onComplete: function() {
                                        Yt.update(), Vt = $t(), r && (E ? E.resetTo("totalProgress", s, r._tTime / r._tDur) : r.progress(s)), C = P = r && !bt ? r.totalProgress() : Yt.progress, at && at(Yt), m && m(Yt)
                                    }
                                }, t, c * v, a - t - c * v), g && g(Yt, n.tween)
                            }
                        }
                    })).pause()), j && (ar[j] = Yt), (F = (tt = Yt.trigger = pt(tt || !0 !== et && et)) && tt._gsap && tt._gsap.stRevert) && (F = F(Yt)), et = !0 === et ? tt : pt(et), Me(W) && (W = {
                        targets: tt,
                        className: W
                    }), et && (!1 === nt || nt === Be || (nt = !(!nt && et.parentNode && et.parentNode.style && "flex" === qe(et.parentNode).display) && ze), Yt.pin = et, (i = xt.core.getCache(et)).spacer ? g = i.pinState : (_t && ((_t = pt(_t)) && !_t.nodeType && (_t = _t.current || _t.nativeElement), i.spacerIsNative = !!_t, _t && (i.spacerState = Cr(_t))), i.spacer = x = _t || Mt.createElement("div"), x.classList.add("pin-spacer"), j && x.classList.add("pin-spacer-" + j), i.pinState = g = Cr(et)), !1 !== e.force3D && xt.set(et, {
                        force3D: !0
                    }), Yt.spacer = x = i.spacer, k = qe(et), O = k[nt + mt.os2], w = xt.getProperty(et), M = xt.quickSetter(et, mt.a, Ne), Sr(et, x, k), m = Cr(et)), Rt) {
                    h = Oe(Rt) ? He(Rt, tr) : tr, p = ir("scroller-start", j, Ot, mt, h, 0), c = ir("scroller-end", j, Ot, mt, h, 0, p), b = p["offset" + mt.op.d2];
                    var Qt = pt(rt(Ot, "content") || Ot);
                    f = this.markerStart = ir("start", j, Qt, mt, h, b, 0, vt), u = this.markerEnd = ir("end", j, Qt, mt, h, b, 0, vt), vt && (B = xt.quickSetter([f, u], mt.a, Ne)), Et || J.length && !0 === rt(Ot, "fixedMarkers") || (q = qe(N = kt ? Dt : Ot).position, N.style.position = "absolute" === q || "fixed" === q ? q : "relative", xt.set([p, c], {
                        force3D: !0
                    }), I = xt.quickSetter(p, mt.a, Ne), X = xt.quickSetter(c, mt.a, Ne))
                }
                if (vt) {
                    var Zt = vt.vars.onUpdate,
                        te = vt.vars.onUpdateParams;
                    vt.eventCallback("onUpdate", (function() {
                        Yt.update(0, 0, 1), Zt && Zt.apply(vt, te || [])
                    }))
                }
                if (Yt.previous = function() {
                        return sr[sr.indexOf(Yt) - 1]
                    }, Yt.next = function() {
                        return sr[sr.indexOf(Yt) + 1]
                    }, Yt.revert = function(t, e) {
                        if (!e) return Yt.kill(!0);
                        var n = !1 !== t || !Yt.enabled,
                            i = Ct;
                        n !== Yt.isReverted && (n && (R = Math.max($t(), Yt.scroll.rec || 0), jt = Yt.progress, z = r && r.progress()), f && [f, u, p, c].forEach((function(t) {
                            return t.style.display = n ? "none" : "block"
                        })), n && (Ct = Yt, Yt.update(n)), !et || ht && Yt.isActive || (n ? function(t, e, r) {
                            kr(r);
                            var n = t._gsap;
                            if (n.spacerIsNative) kr(n.spacerState);
                            else if (t._gsap.swappedIn) {
                                var i = e.parentNode;
                                i && (i.insertBefore(t, e), i.removeChild(e))
                            }
                            t._gsap.swappedIn = !1
                        }(et, x, g) : Sr(et, x, qe(et), L)), n || Yt.update(n), Ct = i, Yt.isReverted = n)
                    }, Yt.refresh = function(i, o, h, b) {
                        if (!Ct && Yt.enabled || o)
                            if (et && i && ae) Ze(t, "scrollEnd", hr);
                            else {
                                !ee && Nt && Nt(Yt), Ct = Yt, n.tween && !h && (n.tween.kill(), n.tween = 0), E && E.pause(), it && r && r.revert({
                                    kill: !1
                                }).invalidate(), Yt.isReverted || Yt.revert(!0, !0), Yt._subPinOffset = !1;
                                var M, O, I, X, k, C, P, U, A, B, F, Y, N, q = qt(),
                                    H = Ht(),
                                    V = vt ? vt.duration() : be(Ot, mt),
                                    W = v <= .01,
                                    j = 0,
                                    $ = b || 0,
                                    Z = Oe(h) ? h.end : e.end,
                                    K = e.endTrigger || tt,
                                    J = Oe(h) ? h.start : e.start || (0 !== e.start && tt ? et ? "0 0" : "0 100%" : 0),
                                    rt = Yt.pinnedContainer = e.pinnedContainer && pt(e.pinnedContainer, Yt),
                                    ot = tt && Math.max(0, sr.indexOf(Yt)) || 0,
                                    st = ot;
                                for (Rt && Oe(h) && (Y = xt.getProperty(p, mt.p), N = xt.getProperty(c, mt.p)); st--;)(C = sr[st]).end || C.refresh(0, 1) || (Ct = Yt), !(P = C.pin) || P !== tt && P !== et && P !== rt || C.isReverted || (B || (B = []), B.unshift(C), C.revert(!0, !0)), C !== sr[st] && (ot--, st--);
                                for (Te(J) && (J = J(Yt)), J = de(J, "start", Yt), l = Er(J, tt, q, mt, $t(), f, p, Yt, H, Ft, Et, V, vt, Yt._startClamp && "_startClamp") || (et ? -.001 : 0), Te(Z) && (Z = Z(Yt)), Me(Z) && !Z.indexOf("+=") && (~Z.indexOf(" ") ? Z = (Me(J) ? J.split(" ")[0] : "") + Z : (j = nr(Z.substr(2), q), Z = Me(J) ? J : (vt ? xt.utils.mapRange(0, vt.duration(), vt.scrollTrigger.start, vt.scrollTrigger.end, l) : l) + j, K = tt)), Z = de(Z, "end", Yt), d = Math.max(l, Er(Z || (K ? "100% 0" : V), K, q, mt, $t() + j, u, c, Yt, H, Ft, Et, V, vt, Yt._endClamp && "_endClamp")) || -.001, j = 0, st = ot; st--;)(P = (C = sr[st]).pin) && C.start - C._pinPush <= l && !vt && C.end > 0 && (M = C.end - (Yt._startClamp ? Math.max(0, C.start) : C.start), (P === tt && C.start - C._pinPush < l || P === rt) && isNaN(J) && (j += M * (1 - C.progress)), P === et && ($ += M));
                                if (l += j, d += j, Yt._startClamp && (Yt._startClamp += j), Yt._endClamp && !ee && (Yt._endClamp = d || -.001, d = Math.min(d, be(Ot, mt))), v = d - l || (l -= .01) && .001, W && (jt = xt.utils.clamp(0, 1, xt.utils.normalize(l, d, R))), Yt._pinPush = $, f && j && ((M = {})[mt.a] = "+=" + j, rt && (M[mt.p] = "-=" + $t()), xt.set([f, u], M)), !et || Kt && Yt.end >= be(Ot, mt)) {
                                    if (tt && $t() && !vt)
                                        for (O = tt.parentNode; O && O !== Dt;) O._pinOffset && (l -= O._pinOffset, d -= O._pinOffset), O = O.parentNode
                                } else M = qe(et), X = mt === ut, I = $t(), T = parseFloat(w(mt.a)) + $, !V && d > 1 && (F = {
                                    style: F = (kt ? Mt.scrollingElement || Tt : Ot).style,
                                    value: F["overflow" + mt.a.toUpperCase()]
                                }, kt && "scroll" !== qe(Dt)["overflow" + mt.a.toUpperCase()] && (F.style["overflow" + mt.a.toUpperCase()] = "scroll")), Sr(et, x, M), m = Cr(et), O = Ve(et, !0), U = Et && ct(Ot, X ? ft : ut)(), nt ? ((L = [nt + mt.os2, v + $ + Ne]).t = x, (st = nt === ze ? We(et, mt) + v + $ : 0) && (L.push(mt.d, st + Ne), "auto" !== x.style.flexBasis && (x.style.flexBasis = st + Ne)), kr(L), rt && sr.forEach((function(t) {
                                    t.pin === rt && !1 !== t.vars.pinSpacing && (t._subPinOffset = !0)
                                })), Et && $t(R)) : (st = We(et, mt)) && "auto" !== x.style.flexBasis && (x.style.flexBasis = st + Ne), Et && ((k = {
                                    top: O.top + (X ? I - l : U) + Ne,
                                    left: O.left + (X ? U : I - l) + Ne,
                                    boxSizing: "border-box",
                                    position: "fixed"
                                })[Pe] = k["max" + Fe] = Math.ceil(O.width) + Ne, k[Ee] = k["max" + Ye] = Math.ceil(O.height) + Ne, k[Be] = k[Be + Ge] = k[Be + Ue] = k[Be + Re] = k[Be + Ae] = "0", k[ze] = M[ze], k[ze + Ge] = M[ze + Ge], k[ze + Ue] = M[ze + Ue], k[ze + Re] = M[ze + Re], k[ze + Ae] = M[ze + Ae], y = function(t, e, r) {
                                    for (var n, i = [], o = t.length, s = r ? 8 : 0; s < o; s += 2) n = t[s], i.push(n, n in e ? e[n] : t[s + 1]);
                                    return i.t = t.t, i
                                }(g, k, ht), ee && $t(0)), r ? (A = r._initted, Bt(1), r.render(r.duration(), !0, !0), D = w(mt.a) - T + v + $, S = Math.abs(v - D) > 1, Et && S && y.splice(y.length - 2, 2), r.render(0, !0, !0), A || r.invalidate(!0), r.parent || r.totalTime(r.totalTime()), Bt(0)) : D = v, F && (F.value ? F.style["overflow" + mt.a.toUpperCase()] = F.value : F.style.removeProperty("overflow-" + mt.a));
                                B && B.forEach((function(t) {
                                    return t.revert(!1, !0)
                                })), Yt.start = l, Yt.end = d, s = a = ee ? R : $t(), vt || ee || (s < R && $t(R), Yt.scroll.rec = 0), Yt.revert(!1, !0), Wt = oe(), G && (Vt = -1, G.restart(!0)), Ct = 0, r && bt && (r._initted || z) && r.progress() !== z && r.progress(z || 0, !0).render(r.time(), !0, !0), (W || jt !== Yt.progress || vt || it) && (r && !bt && r.totalProgress(vt && l < -.001 && !jt ? xt.utils.normalize(l, d, 0) : jt, !0), Yt.progress = W || (s - l) / v === jt ? 0 : jt), et && nt && (x._pinOffset = Math.round(Yt.progress * D)), E && E.invalidate(), isNaN(Y) || (Y -= xt.getProperty(p, mt.p), N -= xt.getProperty(c, mt.p), Rr(p, mt, Y), Rr(f, mt, Y - (b || 0)), Rr(c, mt, N), Rr(u, mt, N - (b || 0))), W && !ee && Yt.update(), !Q || ee || _ || (_ = !0, Q(Yt), _ = !1)
                            }
                    }, Yt.getVelocity = function() {
                        return ($t() - a) / (oe() - Xt) * 1e3 || 0
                    }, Yt.endAnimation = function() {
                        Le(Yt.callbackAnimation), r && (E ? E.progress(1) : r.paused() ? bt || Le(r, Yt.direction < 0, 1) : Le(r, r.reversed()))
                    }, Yt.labelToScroll = function(t) {
                        return r && r.labels && (l || Yt.refresh() || l) + r.labels[t] / r.duration() * v || 0
                    }, Yt.getTrailing = function(t) {
                        var e = sr.indexOf(Yt),
                            r = Yt.direction > 0 ? sr.slice(0, e).reverse() : sr.slice(e + 1);
                        return (Me(t) ? r.filter((function(e) {
                            return e.vars.preventOverlaps === t
                        })) : r).filter((function(t) {
                            return Yt.direction > 0 ? t.end <= l : t.start >= d
                        }))
                    }, Yt.update = function(t, e, i) {
                        if (!vt || i || t) {
                            var o, f, u, c, h, _, g, b = !0 === ee ? R : Yt.scroll(),
                                w = t ? 0 : (b - l) / v,
                                L = w < 0 ? 0 : w > 1 ? 1 : w || 0,
                                k = Yt.progress;
                            if (e && (a = s, s = vt ? $t() : b, dt && (P = C, C = r && !bt ? r.totalProgress() : L)), ot && et && !Ct && !ie && ae && (!L && l < b + (b - a) / (oe() - Xt) * ot ? L = 1e-4 : 1 === L && d > b + (b - a) / (oe() - Xt) * ot && (L = .9999)), L !== k && Yt.enabled) {
                                if (c = (h = (o = Yt.isActive = !!L && L < 1) !== (!!k && k < 1)) || !!L != !!k, Yt.direction = L > k ? 1 : -1, Yt.progress = L, c && !Ct && (f = L && !k ? 0 : 1 === L ? 1 : 1 === k ? 2 : 3, bt && (u = !h && "none" !== Gt[f + 1] && Gt[f + 1] || Gt[f], g = r && ("complete" === u || "reset" === u || u in r))), yt && (h || g) && (g || Z || !r) && (Te(yt) ? yt(Yt) : Yt.getTrailing(yt).forEach((function(t) {
                                        return t.endAnimation()
                                    }))), bt || (!E || Ct || ie ? r && r.totalProgress(L, !(!Ct || !Wt && !t)) : (E._dp._time - E._start !== E._time && E.render(E._dp._time - E._start), E.resetTo ? E.resetTo("totalProgress", L, r._tTime / r._tDur) : (E.vars.totalProgress = L, E.invalidate().restart()))), et)
                                    if (t && nt && (x.style[nt + mt.os2] = O), Et) {
                                        if (c) {
                                            if (_ = !t && L > k && d + 1 > b && b + 1 >= be(Ot, mt), ht)
                                                if (t || !o && !_) Ar(et, x);
                                                else {
                                                    var U = Ve(et, !0),
                                                        A = b - l;
                                                    Ar(et, Dt, U.top + (mt === ut ? A : 0) + Ne, U.left + (mt === ut ? 0 : A) + Ne)
                                                }
                                            kr(o || _ ? y : m), S && L < 1 && o || M(T + (1 !== L || _ ? 0 : D))
                                        }
                                    } else M(_e(T + D * L));
                                dt && !n.tween && !Ct && !ie && G.restart(!0), W && (h || lt && L && (L < 1 || !Jt)) && It(W.targets).forEach((function(t) {
                                    return t.classList[o || lt ? "add" : "remove"](W.className)
                                })), V && !bt && !t && V(Yt), c && !Ct ? (bt && (g && ("complete" === u ? r.pause().totalProgress(1) : "reset" === u ? r.restart(!0).pause() : "restart" === u ? r.restart(!0) : r[u]()), V && V(Yt)), !h && Jt || ($ && h && Ie(Yt, $), At[f] && Ie(Yt, At[f]), lt && (1 === L ? Yt.kill(!1, 1) : At[f] = 0), h || At[f = 1 === L ? 1 : 3] && Ie(Yt, At[f])), gt && !o && Math.abs(Yt.getVelocity()) > (De(gt) ? gt : 2500) && (Le(Yt.callbackAnimation), E ? E.progress(1) : Le(r, "reverse" === u ? 1 : !L, 1))) : bt && V && !Ct && V(Yt)
                            }
                            if (X) {
                                var z = vt ? b / vt.duration() * (vt._caScrollDist || 0) : b;
                                I(z + (p._isFlipped ? 1 : 0)), X(z)
                            }
                            B && B(-b / vt.duration() * (vt._caScrollDist || 0))
                        }
                    }, Yt.enable = function(e, r) {
                        Yt.enabled || (Yt.enabled = !0, Ze(Ot, "resize", ur), kt || Ze(Ot, "scroll", dr), Nt && Ze(t, "refreshInit", Nt), !1 !== e && (Yt.progress = jt = 0, s = a = Vt = $t()), !1 !== r && Yt.refresh())
                    }, Yt.getTween = function(t) {
                        return t && n ? n.tween : E
                    }, Yt.setPositions = function(t, e, r, n) {
                        if (vt) {
                            var i = vt.scrollTrigger,
                                o = vt.duration(),
                                s = i.end - i.start;
                            t = i.start + s * t / o, e = i.start + s * e / o
                        }
                        Yt.refresh(!1, !1, {
                            start: fe(t, r && !!Yt._startClamp),
                            end: fe(e, r && !!Yt._endClamp)
                        }, n), Yt.update()
                    }, Yt.adjustPinSpacing = function(t) {
                        if (L && t) {
                            var e = L.indexOf(mt.d) + 1;
                            L[e] = parseFloat(L[e]) + t + Ne, L[1] = parseFloat(L[1]) + t + Ne, kr(L)
                        }
                    }, Yt.disable = function(e, r) {
                        if (Yt.enabled && (!1 !== e && Yt.revert(!0, !0), Yt.enabled = Yt.isActive = !1, r || E && E.pause(), R = 0, i && (i.uncache = 1), Nt && Ke(t, "refreshInit", Nt), G && (G.pause(), n.tween && n.tween.kill() && (n.tween = 0)), !kt)) {
                            for (var o = sr.length; o--;)
                                if (sr[o].scroller === Ot && sr[o] !== Yt) return;
                            Ke(Ot, "resize", ur), kt || Ke(Ot, "scroll", dr)
                        }
                    }, Yt.kill = function(t, n) {
                        Yt.disable(t, n), E && !n && E.kill(), j && delete ar[j];
                        var o = sr.indexOf(Yt);
                        o >= 0 && sr.splice(o, 1), o === Ut && Dr > 0 && Ut--, o = 0, sr.forEach((function(t) {
                            return t.scroller === Yt.scroller && (o = 1)
                        })), o || ee || (Yt.scroll.rec = 0), r && (r.scrollTrigger = null, t && r.revert({
                            kill: !1
                        }), n || r.kill()), f && [f, u, p, c].forEach((function(t) {
                            return t.parentNode && t.parentNode.removeChild(t)
                        })), ne === Yt && (ne = 0), et && (i && (i.uncache = 1), o = 0, sr.forEach((function(t) {
                            return t.pin === et && o++
                        })), o || (i.spacer = 0)), e.onKill && e.onKill(Yt)
                    }, sr.push(Yt), Yt.enable(!1, !1), F && F(Yt), r && r.add && !v) {
                    var se = Yt.update;
                    Yt.update = function() {
                        Yt.update = se, l || d || Yt.refresh()
                    }, xt.delayedCall(.01, Yt.update), v = .01, l = d = 0
                } else Yt.refresh();
                et && function() {
                    if (re !== xr) {
                        var t = re = xr;
                        requestAnimationFrame((function() {
                            return t === xr && Mr(!0)
                        }))
                    }
                }()
            } else this.update = this.refresh = this.kill = he
        }, t.register = function(e) {
            return bt || (xt = e || ge(), ve() && window.document && t.enable(), bt = le), bt
        }, t.defaults = function(t) {
            if (t)
                for (var e in t) er[e] = t[e];
            return er
        }, t.disable = function(t, e) {
            le = 0, sr.forEach((function(r) {
                return r[e ? "kill" : "disable"](t)
            })), Ke(wt, "wheel", dr), Ke(Mt, "scroll", dr), clearInterval(kt), Ke(Mt, "touchcancel", he), Ke(Dt, "touchstart", he), Qe(Ke, Mt, "pointerdown,touchstart,mousedown", pe), Qe(Ke, Mt, "pointerup,touchend,mouseup", ce), Lt.kill(), we(Ke);
            for (var r = 0; r < K.length; r += 3) Je(Ke, K[r], K[r + 1]), Je(Ke, K[r], K[r + 2])
        }, t.enable = function() {
            if (wt = window, Mt = document, Tt = Mt.documentElement, Dt = Mt.body, xt && (It = xt.utils.toArray, St = xt.utils.clamp, Wt = xt.core.context || he, Bt = xt.core.suppressOverwrites || he, jt = wt.history.scrollRestoration || "auto", Tr = wt.pageYOffset, xt.core.globals("ScrollTrigger", t), Dt)) {
                le = 1, ($t = document.createElement("div")).style.height = "100vh", $t.style.position = "absolute", br(), ue(), mt.register(xt), t.isTouch = mt.isTouch, Vt = mt.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), Nt = 1 === mt.isTouch, Ze(wt, "wheel", dr), Ot = [wt, Mt, Tt, Dt], xt.matchMedia ? (t.matchMedia = function(t) {
                    var e, r = xt.matchMedia();
                    for (e in t) r.add(e, t[e]);
                    return r
                }, xt.addEventListener("matchMediaInit", (function() {
                    return yr()
                })), xt.addEventListener("matchMediaRevert", (function() {
                    return gr()
                })), xt.addEventListener("matchMedia", (function() {
                    Mr(0, 1), _r("matchMedia")
                })), xt.matchMedia("(orientation: portrait)", (function() {
                    return fr(), fr
                }))) : console.warn("Requires GSAP 3.11.0 or later"), fr(), Ze(Mt, "scroll", dr);
                var e, r, n = Dt.style,
                    i = n.borderTopStyle,
                    o = xt.core.Animation.prototype;
                for (o.revert || Object.defineProperty(o, "revert", {
                        value: function() {
                            return this.time(-.01, !0)
                        }
                    }), n.borderTopStyle = "solid", e = Ve(Dt), ut.m = Math.round(e.top + ut.sc()) || 0, ft.m = Math.round(e.left + ft.sc()) || 0, i ? n.borderTopStyle = i : n.removeProperty("border-top-style"), kt = setInterval(lr, 250), xt.delayedCall(.5, (function() {
                        return ie = 0
                    })), Ze(Mt, "touchcancel", he), Ze(Dt, "touchstart", he), Qe(Ze, Mt, "pointerdown,touchstart,mousedown", pe), Qe(Ze, Mt, "pointerup,touchend,mouseup", ce), Et = xt.utils.checkPrefix("transform"), Ir.push(Et), bt = oe(), Lt = xt.delayedCall(.2, Mr).pause(), Rt = [Mt, "visibilitychange", function() {
                        var t = wt.innerWidth,
                            e = wt.innerHeight;
                        Mt.hidden ? (At = t, Gt = e) : At === t && Gt === e || ur()
                    }, Mt, "DOMContentLoaded", Mr, wt, "load", Mr, wt, "resize", ur], we(Ze), sr.forEach((function(t) {
                        return t.enable(0, 1)
                    })), r = 0; r < K.length; r += 3) Je(Ke, K[r], K[r + 1]), Je(Ke, K[r], K[r + 2])
            }
        }, t.config = function(e) {
            "limitCallbacks" in e && (Jt = !!e.limitCallbacks);
            var r = e.syncInterval;
            r && clearInterval(kt) || (kt = r) && setInterval(lr, r), "ignoreMobileResize" in e && (Nt = 1 === t.isTouch && e.ignoreMobileResize), "autoRefreshEvents" in e && (we(Ke) || we(Ze, e.autoRefreshEvents || "none"), Ft = -1 === (e.autoRefreshEvents + "").indexOf("resize"))
        }, t.scrollerProxy = function(t, e) {
            var r = pt(t),
                n = K.indexOf(r),
                i = ye(r);
            ~n && K.splice(n, i ? 6 : 2), e && (i ? J.unshift(wt, e, Dt, e, Tt, e) : J.unshift(r, e))
        }, t.clearMatchMedia = function(t) {
            sr.forEach((function(e) {
                return e._ctx && e._ctx.query === t && e._ctx.kill(!0, !0)
            }))
        }, t.isInViewport = function(t, e, r) {
            var n = (Me(t) ? pt(t) : t).getBoundingClientRect(),
                i = n[r ? Pe : Ee] * e || 0;
            return r ? n.right - i > 0 && n.left + i < wt.innerWidth : n.bottom - i > 0 && n.top + i < wt.innerHeight
        }, t.positionInViewport = function(t, e, r) {
            Me(t) && (t = pt(t));
            var n = t.getBoundingClientRect(),
                i = n[r ? Pe : Ee],
                o = null == e ? i / 2 : e in rr ? rr[e] * i : ~e.indexOf("%") ? parseFloat(e) * i / 100 : parseFloat(e) || 0;
            return r ? (n.left + o) / wt.innerWidth : (n.top + o) / wt.innerHeight
        }, t.killAll = function(t) {
            if (sr.slice(0).forEach((function(t) {
                    return "ScrollSmoother" !== t.vars.id && t.kill()
                })), !0 !== t) {
                var e = pr.killAll || [];
                pr = {}, e.forEach((function(t) {
                    return t()
                }))
            }
        }, t
    }();
Br.version = "3.12.5", Br.saveStyles = function(t) {
    return t ? It(t).forEach((function(t) {
        if (t && t.style) {
            var e = vr.indexOf(t);
            e >= 0 && vr.splice(e, 5), vr.push(t, t.style.cssText, t.getBBox && t.getAttribute("transform"), xt.core.getCache(t), Wt())
        }
    })) : vr
}, Br.revert = function(t, e) {
    return yr(!t, e)
}, Br.create = function(t, e) {
    return new Br(t, e)
}, Br.refresh = function(t) {
    return t ? ur() : (bt || Br.register()) && Mr(!0)
}, Br.update = function(t) {
    return ++K.cache && Or(!0 === t ? 2 : 0)
}, Br.clearScrollMemory = mr, Br.maxScroll = function(t, e) {
    return be(t, e ? ft : ut)
}, Br.getScrollFunc = function(t, e) {
    return ct(pt(t), e ? ft : ut)
}, Br.getById = function(t) {
    return ar[t]
}, Br.getAll = function() {
    return sr.filter((function(t) {
        return "ScrollSmoother" !== t.vars.id
    }))
}, Br.isScrolling = function() {
    return !!ae
}, Br.snapDirectional = $e, Br.addEventListener = function(t, e) {
    var r = pr[t] || (pr[t] = []);
    ~r.indexOf(e) || r.push(e)
}, Br.removeEventListener = function(t, e) {
    var r = pr[t],
        n = r && r.indexOf(e);
    n >= 0 && r.splice(n, 1)
}, Br.batch = function(t, e) {
    var r, n = [],
        i = {},
        o = e.interval || .016,
        s = e.batchMax || 1e9,
        a = function(t, e) {
            var r = [],
                n = [],
                i = xt.delayedCall(o, (function() {
                    e(r, n), r = [], n = []
                })).pause();
            return function(t) {
                r.length || i.restart(!0), r.push(t.trigger), n.push(t), s <= r.length && i.progress(1)
            }
        };
    for (r in e) i[r] = "on" === r.substr(0, 2) && Te(e[r]) && "onRefreshInit" !== r ? a(0, e[r]) : e[r];
    return Te(s) && (s = s(), Ze(Br, "refresh", (function() {
        return s = e.batchMax()
    }))), It(t).forEach((function(t) {
        var e = {};
        for (r in i) e[r] = i[r];
        e.trigger = t, n.push(Br.create(e))
    })), n
};
var Fr, Yr = function(t, e, r, n) {
        return e > n ? t(n) : e < 0 && t(0), r > n ? (n - e) / (r - e) : r < 0 ? e / (e - r) : 1
    },
    Nr = function t(e, r) {
        !0 === r ? e.style.removeProperty("touch-action") : e.style.touchAction = !0 === r ? "auto" : r ? "pan-" + r + (mt.isTouch ? " pinch-zoom" : "") : "none", e === Tt && t(Dt, r)
    },
    qr = {
        auto: 1,
        scroll: 1
    },
    Hr = function(t) {
        var e, r = t.event,
            n = t.target,
            i = t.axis,
            o = (r.changedTouches ? r.changedTouches[0] : r).target,
            s = o._gsap || xt.core.getCache(o),
            a = oe();
        if (!s._isScrollT || a - s._isScrollT > 2e3) {
            for (; o && o !== Dt && (o.scrollHeight <= o.clientHeight && o.scrollWidth <= o.clientWidth || !qr[(e = qe(o)).overflowY] && !qr[e.overflowX]);) o = o.parentNode;
            s._isScroll = o && o !== n && !ye(o) && (qr[(e = qe(o)).overflowY] || qr[e.overflowX]), s._isScrollT = a
        }(s._isScroll || "x" === i) && (r.stopPropagation(), r._gsapAllow = !0)
    },
    Vr = function(t, e, r, n) {
        return mt.create({
            target: t,
            capture: !0,
            debounce: !1,
            lockAxis: !0,
            type: e,
            onWheel: n = n && Hr,
            onPress: n,
            onDrag: n,
            onScroll: n,
            onEnable: function() {
                return r && Ze(Mt, mt.eventTypes[0], jr, !1, !0)
            },
            onDisable: function() {
                return Ke(Mt, mt.eventTypes[0], jr, !0)
            }
        })
    },
    Wr = /(input|label|select|textarea)/i,
    jr = function(t) {
        var e = Wr.test(t.target.tagName);
        (e || Fr) && (t._gsapAllow = !0, Fr = e)
    },
    $r = function(t) {
        Oe(t) || (t = {}), t.preventDefault = t.isNormalizer = t.allowClicks = !0, t.type || (t.type = "wheel,touch"), t.debounce = !!t.debounce, t.id = t.id || "normalizer";
        var e, r, n, i, o, s, a, l, d = t,
            f = d.normalizeScrollX,
            u = d.momentum,
            p = d.allowNestedScroll,
            c = d.onRelease,
            h = pt(t.target) || Tt,
            _ = xt.core.globals().ScrollSmoother,
            v = _ && _.get(),
            g = Vt && (t.content && pt(t.content) || v && !1 !== t.content && !v.smooth() && v.content()),
            y = ct(h, ut),
            m = ct(h, ft),
            x = 1,
            b = (mt.isTouch && wt.visualViewport ? wt.visualViewport.scale * wt.visualViewport.width : wt.outerWidth) / wt.innerWidth,
            w = 0,
            M = Te(u) ? function() {
                return u(e)
            } : function() {
                return u || 2.8
            },
            T = Vr(h, t.type, !0, p),
            D = function() {
                return i = !1
            },
            O = he,
            L = he,
            I = function() {
                r = be(h, ut), L = St(Vt ? 1 : 0, r), f && (O = St(0, be(h, ft))), n = xr
            },
            S = function() {
                g._gsap.y = _e(parseFloat(g._gsap.y) + y.offset) + "px", g.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(g._gsap.y) + ", 0, 1)", y.offset = y.cacheID = 0
            },
            X = function() {
                I(), o.isActive() && o.vars.scrollY > r && (y() > r ? o.progress(1) && y(r) : o.resetTo("scrollY", r))
            };
        return g && xt.set(g, {
            y: "+=0"
        }), t.ignoreCheck = function(t) {
            return Vt && "touchmove" === t.type && function() {
                if (i) {
                    requestAnimationFrame(D);
                    var t = _e(e.deltaY / 2),
                        r = L(y.v - t);
                    if (g && r !== y.v + y.offset) {
                        y.offset = r - y.v;
                        var n = _e((parseFloat(g && g._gsap.y) || 0) - y.offset);
                        g.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + n + ", 0, 1)", g._gsap.y = n + "px", y.cacheID = K.cache, Or()
                    }
                    return !0
                }
                y.offset && S(), i = !0
            }() || x > 1.05 && "touchstart" !== t.type || e.isGesturing || t.touches && t.touches.length > 1
        }, t.onPress = function() {
            i = !1;
            var t = x;
            x = _e((wt.visualViewport && wt.visualViewport.scale || 1) / b), o.pause(), t !== x && Nr(h, x > 1.01 || !f && "x"), s = m(), a = y(), I(), n = xr
        }, t.onRelease = t.onGestureStart = function(t, e) {
            if (y.offset && S(), e) {
                K.cache++;
                var n, i, s = M();
                f && (i = (n = m()) + .05 * s * -t.velocityX / .227, s *= Yr(m, n, i, be(h, ft)), o.vars.scrollX = O(i)), i = (n = y()) + .05 * s * -t.velocityY / .227, s *= Yr(y, n, i, be(h, ut)), o.vars.scrollY = L(i), o.invalidate().duration(s).play(.01), (Vt && o.vars.scrollY >= r || n >= r - 1) && xt.to({}, {
                    onUpdate: X,
                    duration: s
                })
            } else l.restart(!0);
            c && c(t)
        }, t.onWheel = function() {
            o._ts && o.pause(), oe() - w > 1e3 && (n = 0, w = oe())
        }, t.onChange = function(t, e, r, i, o) {
            if (xr !== n && I(), e && f && m(O(i[2] === e ? s + (t.startX - t.x) : m() + e - i[1])), r) {
                y.offset && S();
                var l = o[2] === r,
                    d = l ? a + t.startY - t.y : y() + r - o[1],
                    u = L(d);
                l && d !== u && (a += u - d), y(u)
            }(r || e) && Or()
        }, t.onEnable = function() {
            Nr(h, !f && "x"), Br.addEventListener("refresh", X), Ze(wt, "resize", X), y.smooth && (y.target.style.scrollBehavior = "auto", y.smooth = m.smooth = !1), T.enable()
        }, t.onDisable = function() {
            Nr(h, !0), Ke(wt, "resize", X), Br.removeEventListener("refresh", X), T.kill()
        }, t.lockAxis = !1 !== t.lockAxis, (e = new mt(t)).iOS = Vt, Vt && !y() && y(1), Vt && xt.ticker.add(he), l = e._dc, o = xt.to(e, {
            ease: "power4",
            paused: !0,
            inherit: !1,
            scrollX: f ? "+=0.1" : "+=0",
            scrollY: "+=0.1",
            modifiers: {
                scrollY: Gr(y, y(), (function() {
                    return o.pause()
                }))
            },
            onUpdate: Or,
            onComplete: l.vars.onComplete
        }), e
    };

function Qr(t) {
    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t
}

function Zr(t, e) {
    t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
}
/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
Br.sort = function(t) {
    return sr.sort(t || function(t, e) {
        return -1e6 * (t.vars.refreshPriority || 0) + t.start - (e.start + -1e6 * (e.vars.refreshPriority || 0))
    })
}, Br.observe = function(t) {
    return new mt(t)
}, Br.normalizeScroll = function(t) {
    if (void 0 === t) return Yt;
    if (!0 === t && Yt) return Yt.enable();
    if (!1 === t) return Yt && Yt.kill(), void(Yt = t);
    var e = t instanceof mt ? t : $r(t);
    return Yt && Yt.target === e.target && Yt.kill(), ye(e.target) && (Yt = e), e
}, Br.core = {
    _getVelocityProp: ht,
    _inputObserver: Vr,
    _scrollers: K,
    _proxies: J,
    bridge: {
        ss: function() {
            ae || _r("scrollStart"), ae = oe()
        },
        ref: function() {
            return Ct
        }
    }
}, ge() && xt.registerPlugin(Br);
var Kr, Jr, tn, en, rn, nn, on, sn, an, ln, dn, fn, un, pn, cn, hn, _n, vn, gn, yn, mn, xn, bn, wn, Mn, Tn, Dn, On, Ln, In, Sn, Xn, kn = {
        autoSleep: 120,
        force3D: "auto",
        nullTargetWarn: 1,
        units: {
            lineHeight: ""
        }
    },
    Cn = {
        duration: .5,
        overwrite: !1,
        delay: 0
    },
    Pn = 1e8,
    En = 1e-8,
    Un = 2 * Math.PI,
    An = Un / 4,
    Gn = 0,
    Rn = Math.sqrt,
    zn = Math.cos,
    Bn = Math.sin,
    Fn = function(t) {
        return "string" == typeof t
    },
    Yn = function(t) {
        return "function" == typeof t
    },
    Nn = function(t) {
        return "number" == typeof t
    },
    qn = function(t) {
        return void 0 === t
    },
    Hn = function(t) {
        return "object" == typeof t
    },
    Vn = function(t) {
        return !1 !== t
    },
    Wn = function() {
        return "undefined" != typeof window
    },
    jn = function(t) {
        return Yn(t) || Fn(t)
    },
    $n = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function() {},
    Qn = Array.isArray,
    Zn = /(?:-?\.?\d|\.)+/gi,
    Kn = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    Jn = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    ti = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    ei = /[+-]=-?[.\d]+/,
    ri = /[^,'"\[\]\s]+/gi,
    ni = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
    ii = {},
    oi = {},
    si = function(t) {
        return (oi = Ui(t, ii)) && As
    },
    ai = function(t, e) {
        return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()")
    },
    li = function(t, e) {
        return !e && console.warn(t)
    },
    di = function(t, e) {
        return t && (ii[t] = e) && oi && (oi[t] = e) || ii
    },
    fi = function() {
        return 0
    },
    ui = {
        suppressEvents: !0,
        isStart: !0,
        kill: !1
    },
    pi = {
        suppressEvents: !0,
        kill: !1
    },
    ci = {
        suppressEvents: !0
    },
    hi = {},
    _i = [],
    vi = {},
    gi = {},
    yi = {},
    mi = 30,
    xi = [],
    bi = "",
    wi = function(t) {
        var e, r, n = t[0];
        if (Hn(n) || Yn(n) || (t = [t]), !(e = (n._gsap || {}).harness)) {
            for (r = xi.length; r-- && !xi[r].targetTest(n););
            e = xi[r]
        }
        for (r = t.length; r--;) t[r] && (t[r]._gsap || (t[r]._gsap = new Qo(t[r], e))) || t.splice(r, 1);
        return t
    },
    Mi = function(t) {
        return t._gsap || wi(co(t))[0]._gsap
    },
    Ti = function(t, e, r) {
        return (r = t[e]) && Yn(r) ? t[e]() : qn(r) && t.getAttribute && t.getAttribute(e) || r
    },
    Di = function(t, e) {
        return (t = t.split(",")).forEach(e) || t
    },
    Oi = function(t) {
        return Math.round(1e5 * t) / 1e5 || 0
    },
    Li = function(t) {
        return Math.round(1e7 * t) / 1e7 || 0
    },
    Ii = function(t, e) {
        var r = e.charAt(0),
            n = parseFloat(e.substr(2));
        return t = parseFloat(t), "+" === r ? t + n : "-" === r ? t - n : "*" === r ? t * n : t / n
    },
    Si = function(t, e) {
        for (var r = e.length, n = 0; t.indexOf(e[n]) < 0 && ++n < r;);
        return n < r
    },
    Xi = function() {
        var t, e, r = _i.length,
            n = _i.slice(0);
        for (vi = {}, _i.length = 0, t = 0; t < r; t++)(e = n[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
    },
    ki = function(t, e, r, n) {
        _i.length && !Jr && Xi(), t.render(e, r, Jr && e < 0 && (t._initted || t._startAt)), _i.length && !Jr && Xi()
    },
    Ci = function(t) {
        var e = parseFloat(t);
        return (e || 0 === e) && (t + "").match(ri).length < 2 ? e : Fn(t) ? t.trim() : t
    },
    Pi = function(t) {
        return t
    },
    Ei = function(t, e) {
        for (var r in e) r in t || (t[r] = e[r]);
        return t
    },
    Ui = function(t, e) {
        for (var r in e) t[r] = e[r];
        return t
    },
    Ai = function t(e, r) {
        for (var n in r) "__proto__" !== n && "constructor" !== n && "prototype" !== n && (e[n] = Hn(r[n]) ? t(e[n] || (e[n] = {}), r[n]) : r[n]);
        return e
    },
    Gi = function(t, e) {
        var r, n = {};
        for (r in t) r in e || (n[r] = t[r]);
        return n
    },
    Ri = function(t) {
        var e, r = t.parent || en,
            n = t.keyframes ? (e = Qn(t.keyframes), function(t, r) {
                for (var n in r) n in t || "duration" === n && e || "ease" === n || (t[n] = r[n])
            }) : Ei;
        if (Vn(t.inherit))
            for (; r;) n(t, r.vars.defaults), r = r.parent || r._dp;
        return t
    },
    zi = function(t, e, r, n, i) {
        var o, s = t[n];
        if (i)
            for (o = e[i]; s && s[i] > o;) s = s._prev;
        return s ? (e._next = s._next, s._next = e) : (e._next = t[r], t[r] = e), e._next ? e._next._prev = e : t[n] = e, e._prev = s, e.parent = e._dp = t, e
    },
    Bi = function(t, e, r, n) {
        void 0 === r && (r = "_first"), void 0 === n && (n = "_last");
        var i = e._prev,
            o = e._next;
        i ? i._next = o : t[r] === e && (t[r] = o), o ? o._prev = i : t[n] === e && (t[n] = i), e._next = e._prev = e.parent = null
    },
    Fi = function(t, e) {
        t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove && t.parent.remove(t), t._act = 0
    },
    Yi = function(t, e) {
        if (t && (!e || e._end > t._dur || e._start < 0))
            for (var r = t; r;) r._dirty = 1, r = r.parent;
        return t
    },
    Ni = function(t, e, r, n) {
        return t._startAt && (Jr ? t._startAt.revert(pi) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(e, !0, n))
    },
    qi = function t(e) {
        return !e || e._ts && t(e.parent)
    },
    Hi = function(t) {
        return t._repeat ? Vi(t._tTime, t = t.duration() + t._rDelay) * t : 0
    },
    Vi = function(t, e) {
        var r = Math.floor(t /= e);
        return t && r === t ? r - 1 : r
    },
    Wi = function(t, e) {
        return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
    },
    ji = function(t) {
        return t._end = Li(t._start + (t._tDur / Math.abs(t._ts || t._rts || En) || 0))
    },
    $i = function(t, e) {
        var r = t._dp;
        return r && r.smoothChildTiming && t._ts && (t._start = Li(r._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), ji(t), r._dirty || Yi(r, t)), t
    },
    Qi = function(t, e) {
        var r;
        if ((e._time || !e._dur && e._initted || e._start < t._time && (e._dur || !e.add)) && (r = Wi(t.rawTime(), e), (!e._dur || lo(0, e.totalDuration(), r) - e._tTime > En) && e.render(r, !0)), Yi(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
            if (t._dur < t.duration())
                for (r = t; r._dp;) r.rawTime() >= 0 && r.totalTime(r._tTime), r = r._dp;
            t._zTime = -1e-8
        }
    },
    Zi = function(t, e, r, n) {
        return e.parent && Fi(e), e._start = Li((Nn(r) ? r : r || t !== en ? oo(t, r, e) : t._time) + e._delay), e._end = Li(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)), zi(t, e, "_first", "_last", t._sort ? "_start" : 0), eo(e) || (t._recent = e), n || Qi(t, e), t._ts < 0 && $i(t, t._tTime), t
    },
    Ki = function(t, e) {
        return (ii.ScrollTrigger || ai("scrollTrigger", e)) && ii.ScrollTrigger.create(e, t)
    },
    Ji = function(t, e, r, n, i) {
        return is(t, e, i), t._initted ? !r && t._pt && !Jr && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && an !== Go.frame ? (_i.push(t), t._lazy = [i, n], 1) : void 0 : 1
    },
    to = function t(e) {
        var r = e.parent;
        return r && r._ts && r._initted && !r._lock && (r.rawTime() < 0 || t(r))
    },
    eo = function(t) {
        var e = t.data;
        return "isFromStart" === e || "isStart" === e
    },
    ro = function(t, e, r, n) {
        var i = t._repeat,
            o = Li(e) || 0,
            s = t._tTime / t._tDur;
        return s && !n && (t._time *= o / t._dur), t._dur = o, t._tDur = i ? i < 0 ? 1e10 : Li(o * (i + 1) + t._rDelay * i) : o, s > 0 && !n && $i(t, t._tTime = t._tDur * s), t.parent && ji(t), r || Yi(t.parent, t), t
    },
    no = function(t) {
        return t instanceof Ko ? Yi(t) : ro(t, t._dur)
    },
    io = {
        _start: 0,
        endTime: fi,
        totalDuration: fi
    },
    oo = function t(e, r, n) {
        var i, o, s, a = e.labels,
            l = e._recent || io,
            d = e.duration() >= Pn ? l.endTime(!1) : e._dur;
        return Fn(r) && (isNaN(r) || r in a) ? (o = r.charAt(0), s = "%" === r.substr(-1), i = r.indexOf("="), "<" === o || ">" === o ? (i >= 0 && (r = r.replace(/=/, "")), ("<" === o ? l._start : l.endTime(l._repeat >= 0)) + (parseFloat(r.substr(1)) || 0) * (s ? (i < 0 ? l : n).totalDuration() / 100 : 1)) : i < 0 ? (r in a || (a[r] = d), a[r]) : (o = parseFloat(r.charAt(i - 1) + r.substr(i + 1)), s && n && (o = o / 100 * (Qn(n) ? n[0] : n).totalDuration()), i > 1 ? t(e, r.substr(0, i - 1), n) + o : d + o)) : null == r ? d : +r
    },
    so = function(t, e, r) {
        var n, i, o = Nn(e[1]),
            s = (o ? 2 : 1) + (t < 2 ? 0 : 1),
            a = e[s];
        if (o && (a.duration = e[1]), a.parent = r, t) {
            for (n = a, i = r; i && !("immediateRender" in n);) n = i.vars.defaults || {}, i = Vn(i.vars.inherit) && i.parent;
            a.immediateRender = Vn(n.immediateRender), t < 2 ? a.runBackwards = 1 : a.startAt = e[s - 1]
        }
        return new ds(e[0], a, e[s + 1])
    },
    ao = function(t, e) {
        return t || 0 === t ? e(t) : e
    },
    lo = function(t, e, r) {
        return r < t ? t : r > e ? e : r
    },
    fo = function(t, e) {
        return Fn(t) && (e = ni.exec(t)) ? e[1] : ""
    },
    uo = [].slice,
    po = function(t, e) {
        return t && Hn(t) && "length" in t && (!e && !t.length || t.length - 1 in t && Hn(t[0])) && !t.nodeType && t !== rn
    },
    co = function(t, e, r) {
        return tn && !e && tn.selector ? tn.selector(t) : !Fn(t) || r || !nn && Ro() ? Qn(t) ? function(t, e, r) {
            return void 0 === r && (r = []), t.forEach((function(t) {
                var n;
                return Fn(t) && !e || po(t, 1) ? (n = r).push.apply(n, co(t)) : r.push(t)
            })) || r
        }(t, r) : po(t) ? uo.call(t, 0) : t ? [t] : [] : uo.call((e || on).querySelectorAll(t), 0)
    },
    ho = function(t) {
        return t = co(t)[0] || li("Invalid scope") || {},
            function(e) {
                var r = t.current || t.nativeElement || t;
                return co(e, r.querySelectorAll ? r : r === t ? li("Invalid scope") || on.createElement("div") : t)
            }
    },
    _o = function(t) {
        return t.sort((function() {
            return .5 - Math.random()
        }))
    },
    vo = function(t) {
        if (Yn(t)) return t;
        var e = Hn(t) ? t : {
                each: t
            },
            r = Ho(e.ease),
            n = e.from || 0,
            i = parseFloat(e.base) || 0,
            o = {},
            s = n > 0 && n < 1,
            a = isNaN(n) || s,
            l = e.axis,
            d = n,
            f = n;
        return Fn(n) ? d = f = {
                center: .5,
                edges: .5,
                end: 1
            }[n] || 0 : !s && a && (d = n[0], f = n[1]),
            function(t, s, u) {
                var p, c, h, _, v, g, y, m, x, b = (u || e).length,
                    w = o[b];
                if (!w) {
                    if (!(x = "auto" === e.grid ? 0 : (e.grid || [1, Pn])[1])) {
                        for (y = -1e8; y < (y = u[x++].getBoundingClientRect().left) && x < b;);
                        x < b && x--
                    }
                    for (w = o[b] = [], p = a ? Math.min(x, b) * d - .5 : n % x, c = x === Pn ? 0 : a ? b * f / x - .5 : n / x | 0, y = 0, m = Pn, g = 0; g < b; g++) h = g % x - p, _ = c - (g / x | 0), w[g] = v = l ? Math.abs("y" === l ? _ : h) : Rn(h * h + _ * _), v > y && (y = v), v < m && (m = v);
                    "random" === n && _o(w), w.max = y - m, w.min = m, w.v = b = (parseFloat(e.amount) || parseFloat(e.each) * (x > b ? b - 1 : l ? "y" === l ? b / x : x : Math.max(x, b / x)) || 0) * ("edges" === n ? -1 : 1), w.b = b < 0 ? i - b : i, w.u = fo(e.amount || e.each) || 0, r = r && b < 0 ? No(r) : r
                }
                return b = (w[t] - w.min) / w.max || 0, Li(w.b + (r ? r(b) : b) * w.v) + w.u
            }
    },
    go = function(t) {
        var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
        return function(r) {
            var n = Li(Math.round(parseFloat(r) / t) * t * e);
            return (n - n % 1) / e + (Nn(r) ? 0 : fo(r))
        }
    },
    yo = function(t, e) {
        var r, n, i = Qn(t);
        return !i && Hn(t) && (r = i = t.radius || Pn, t.values ? (t = co(t.values), (n = !Nn(t[0])) && (r *= r)) : t = go(t.increment)), ao(e, i ? Yn(t) ? function(e) {
            return n = t(e), Math.abs(n - e) <= r ? n : e
        } : function(e) {
            for (var i, o, s = parseFloat(n ? e.x : e), a = parseFloat(n ? e.y : 0), l = Pn, d = 0, f = t.length; f--;)(i = n ? (i = t[f].x - s) * i + (o = t[f].y - a) * o : Math.abs(t[f] - s)) < l && (l = i, d = f);
            return d = !r || l <= r ? t[d] : e, n || d === e || Nn(e) ? d : d + fo(e)
        } : go(t))
    },
    mo = function(t, e, r, n) {
        return ao(Qn(t) ? !e : !0 === r ? !!(r = 0) : !n, (function() {
            return Qn(t) ? t[~~(Math.random() * t.length)] : (r = r || 1e-5) && (n = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((t - r / 2 + Math.random() * (e - t + .99 * r)) / r) * r * n) / n
        }))
    },
    xo = function(t, e, r) {
        return ao(r, (function(r) {
            return t[~~e(r)]
        }))
    },
    bo = function(t) {
        for (var e, r, n, i, o = 0, s = ""; ~(e = t.indexOf("random(", o));) n = t.indexOf(")", e), i = "[" === t.charAt(e + 7), r = t.substr(e + 7, n - e - 7).match(i ? ri : Zn), s += t.substr(o, e - o) + mo(i ? r : +r[0], i ? 0 : +r[1], +r[2] || 1e-5), o = n + 1;
        return s + t.substr(o, t.length - o)
    },
    wo = function(t, e, r, n, i) {
        var o = e - t,
            s = n - r;
        return ao(i, (function(e) {
            return r + ((e - t) / o * s || 0)
        }))
    },
    Mo = function(t, e, r) {
        var n, i, o, s = t.labels,
            a = Pn;
        for (n in s)(i = s[n] - e) < 0 == !!r && i && a > (i = Math.abs(i)) && (o = n, a = i);
        return o
    },
    To = function(t, e, r) {
        var n, i, o, s = t.vars,
            a = s[e],
            l = tn,
            d = t._ctx;
        if (a) return n = s[e + "Params"], i = s.callbackScope || t, r && _i.length && Xi(), d && (tn = d), o = n ? a.apply(i, n) : a.call(i), tn = l, o
    },
    Do = function(t) {
        return Fi(t), t.scrollTrigger && t.scrollTrigger.kill(!!Jr), t.progress() < 1 && To(t, "onInterrupt"), t
    },
    Oo = [],
    Lo = function(t) {
        if (t)
            if (t = !t.name && t.default || t, Wn() || t.headless) {
                var e = t.name,
                    r = Yn(t),
                    n = e && !r && t.init ? function() {
                        this._props = []
                    } : t,
                    i = {
                        init: fi,
                        render: ys,
                        add: rs,
                        kill: xs,
                        modifier: ms,
                        rawVars: 0
                    },
                    o = {
                        targetTest: 0,
                        get: 0,
                        getSetter: hs,
                        aliases: {},
                        register: 0
                    };
                if (Ro(), t !== n) {
                    if (gi[e]) return;
                    Ei(n, Ei(Gi(t, i), o)), Ui(n.prototype, Ui(i, Gi(t, o))), gi[n.prop = e] = n, t.targetTest && (xi.push(n), hi[e] = 1), e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
                }
                di(e, n), t.register && t.register(As, n, Ms)
            } else Oo.push(t)
    },
    Io = 255,
    So = {
        aqua: [0, Io, Io],
        lime: [0, Io, 0],
        silver: [192, 192, 192],
        black: [0, 0, 0],
        maroon: [128, 0, 0],
        teal: [0, 128, 128],
        blue: [0, 0, Io],
        navy: [0, 0, 128],
        white: [Io, Io, Io],
        olive: [128, 128, 0],
        yellow: [Io, Io, 0],
        orange: [Io, 165, 0],
        gray: [128, 128, 128],
        purple: [128, 0, 128],
        green: [0, 128, 0],
        red: [Io, 0, 0],
        pink: [Io, 192, 203],
        cyan: [0, Io, Io],
        transparent: [Io, Io, Io, 0]
    },
    Xo = function(t, e, r) {
        return (6 * (t += t < 0 ? 1 : t > 1 ? -1 : 0) < 1 ? e + (r - e) * t * 6 : t < .5 ? r : 3 * t < 2 ? e + (r - e) * (2 / 3 - t) * 6 : e) * Io + .5 | 0
    },
    ko = function(t, e, r) {
        var n, i, o, s, a, l, d, f, u, p, c = t ? Nn(t) ? [t >> 16, t >> 8 & Io, t & Io] : 0 : So.black;
        if (!c) {
            if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), So[t]) c = So[t];
            else if ("#" === t.charAt(0)) {
                if (t.length < 6 && (n = t.charAt(1), i = t.charAt(2), o = t.charAt(3), t = "#" + n + n + i + i + o + o + (5 === t.length ? t.charAt(4) + t.charAt(4) : "")), 9 === t.length) return [(c = parseInt(t.substr(1, 6), 16)) >> 16, c >> 8 & Io, c & Io, parseInt(t.substr(7), 16) / 255];
                c = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & Io, t & Io]
            } else if ("hsl" === t.substr(0, 3))
                if (c = p = t.match(Zn), e) {
                    if (~t.indexOf("=")) return c = t.match(Kn), r && c.length < 4 && (c[3] = 1), c
                } else s = +c[0] % 360 / 360, a = +c[1] / 100, n = 2 * (l = +c[2] / 100) - (i = l <= .5 ? l * (a + 1) : l + a - l * a), c.length > 3 && (c[3] *= 1), c[0] = Xo(s + 1 / 3, n, i), c[1] = Xo(s, n, i), c[2] = Xo(s - 1 / 3, n, i);
            else c = t.match(Zn) || So.transparent;
            c = c.map(Number)
        }
        return e && !p && (n = c[0] / Io, i = c[1] / Io, o = c[2] / Io, l = ((d = Math.max(n, i, o)) + (f = Math.min(n, i, o))) / 2, d === f ? s = a = 0 : (u = d - f, a = l > .5 ? u / (2 - d - f) : u / (d + f), s = d === n ? (i - o) / u + (i < o ? 6 : 0) : d === i ? (o - n) / u + 2 : (n - i) / u + 4, s *= 60), c[0] = ~~(s + .5), c[1] = ~~(100 * a + .5), c[2] = ~~(100 * l + .5)), r && c.length < 4 && (c[3] = 1), c
    },
    Co = function(t) {
        var e = [],
            r = [],
            n = -1;
        return t.split(Eo).forEach((function(t) {
            var i = t.match(Jn) || [];
            e.push.apply(e, i), r.push(n += i.length + 1)
        })), e.c = r, e
    },
    Po = function(t, e, r) {
        var n, i, o, s, a = "",
            l = (t + a).match(Eo),
            d = e ? "hsla(" : "rgba(",
            f = 0;
        if (!l) return t;
        if (l = l.map((function(t) {
                return (t = ko(t, e, 1)) && d + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")"
            })), r && (o = Co(t), (n = r.c).join(a) !== o.c.join(a)))
            for (s = (i = t.replace(Eo, "1").split(Jn)).length - 1; f < s; f++) a += i[f] + (~n.indexOf(f) ? l.shift() || d + "0,0,0,0)" : (o.length ? o : l.length ? l : r).shift());
        if (!i)
            for (s = (i = t.split(Eo)).length - 1; f < s; f++) a += i[f] + l[f];
        return a + i[s]
    },
    Eo = function() {
        var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
        for (t in So) e += "|" + t + "\\b";
        return new RegExp(e + ")", "gi")
    }(),
    Uo = /hsl[a]?\(/,
    Ao = function(t) {
        var e, r = t.join(" ");
        if (Eo.lastIndex = 0, Eo.test(r)) return e = Uo.test(r), t[1] = Po(t[1], e), t[0] = Po(t[0], e, Co(t[1])), !0
    },
    Go = (vn = Date.now, gn = 500, yn = 33, mn = vn(), xn = mn, wn = bn = 1e3 / 240, Tn = function t(e) {
        var r, n, i, o, s = vn() - xn,
            a = !0 === e;
        if ((s > gn || s < 0) && (mn += s - yn), ((r = (i = (xn += s) - mn) - wn) > 0 || a) && (o = ++cn.frame, hn = i - 1e3 * cn.time, cn.time = i /= 1e3, wn += r + (r >= bn ? 4 : bn - r), n = 1), a || (fn = un(t)), n)
            for (_n = 0; _n < Mn.length; _n++) Mn[_n](i, hn, o, e)
    }, cn = {
        time: 0,
        frame: 0,
        tick: function() {
            Tn(!0)
        },
        deltaRatio: function(t) {
            return hn / (1e3 / (t || 60))
        },
        wake: function() {
            sn && (!nn && Wn() && (rn = nn = window, on = rn.document || {}, ii.gsap = As, (rn.gsapVersions || (rn.gsapVersions = [])).push(As.version), si(oi || rn.GreenSockGlobals || !rn.gsap && rn || {}), Oo.forEach(Lo)), pn = "undefined" != typeof requestAnimationFrame && requestAnimationFrame, fn && cn.sleep(), un = pn || function(t) {
                return setTimeout(t, wn - 1e3 * cn.time + 1 | 0)
            }, dn = 1, Tn(2))
        },
        sleep: function() {
            (pn ? cancelAnimationFrame : clearTimeout)(fn), dn = 0, un = fi
        },
        lagSmoothing: function(t, e) {
            gn = t || 1 / 0, yn = Math.min(e || 33, gn)
        },
        fps: function(t) {
            bn = 1e3 / (t || 240), wn = 1e3 * cn.time + bn
        },
        add: function(t, e, r) {
            var n = e ? function(e, r, i, o) {
                t(e, r, i, o), cn.remove(n)
            } : t;
            return cn.remove(t), Mn[r ? "unshift" : "push"](n), Ro(), n
        },
        remove: function(t, e) {
            ~(e = Mn.indexOf(t)) && Mn.splice(e, 1) && _n >= e && _n--
        },
        _listeners: Mn = []
    }),
    Ro = function() {
        return !dn && Go.wake()
    },
    zo = {},
    Bo = /^[\d.\-M][\d.\-,\s]/,
    Fo = /["']/g,
    Yo = function(t) {
        for (var e, r, n, i = {}, o = t.substr(1, t.length - 3).split(":"), s = o[0], a = 1, l = o.length; a < l; a++) r = o[a], e = a !== l - 1 ? r.lastIndexOf(",") : r.length, n = r.substr(0, e), i[s] = isNaN(n) ? n.replace(Fo, "").trim() : +n, s = r.substr(e + 1).trim();
        return i
    },
    No = function(t) {
        return function(e) {
            return 1 - t(1 - e)
        }
    },
    qo = function t(e, r) {
        for (var n, i = e._first; i;) i instanceof Ko ? t(i, r) : !i.vars.yoyoEase || i._yoyo && i._repeat || i._yoyo === r || (i.timeline ? t(i.timeline, r) : (n = i._ease, i._ease = i._yEase, i._yEase = n, i._yoyo = r)), i = i._next
    },
    Ho = function(t, e) {
        return t && (Yn(t) ? t : zo[t] || function(t) {
            var e, r, n, i, o = (t + "").split("("),
                s = zo[o[0]];
            return s && o.length > 1 && s.config ? s.config.apply(null, ~t.indexOf("{") ? [Yo(o[1])] : (e = t, r = e.indexOf("(") + 1, n = e.indexOf(")"), i = e.indexOf("(", r), e.substring(r, ~i && i < n ? e.indexOf(")", n + 1) : n)).split(",").map(Ci)) : zo._CE && Bo.test(t) ? zo._CE("", t) : s
        }(t)) || e
    },
    Vo = function(t, e, r, n) {
        void 0 === r && (r = function(t) {
            return 1 - e(1 - t)
        }), void 0 === n && (n = function(t) {
            return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2
        });
        var i, o = {
            easeIn: e,
            easeOut: r,
            easeInOut: n
        };
        return Di(t, (function(t) {
            for (var e in zo[t] = ii[t] = o, zo[i = t.toLowerCase()] = r, o) zo[i + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = zo[t + "." + e] = o[e]
        })), o
    },
    Wo = function(t) {
        return function(e) {
            return e < .5 ? (1 - t(1 - 2 * e)) / 2 : .5 + t(2 * (e - .5)) / 2
        }
    },
    jo = function t(e, r, n) {
        var i = r >= 1 ? r : 1,
            o = (n || (e ? .3 : .45)) / (r < 1 ? r : 1),
            s = o / Un * (Math.asin(1 / i) || 0),
            a = function(t) {
                return 1 === t ? 1 : i * Math.pow(2, -10 * t) * Bn((t - s) * o) + 1
            },
            l = "out" === e ? a : "in" === e ? function(t) {
                return 1 - a(1 - t)
            } : Wo(a);
        return o = Un / o, l.config = function(r, n) {
            return t(e, r, n)
        }, l
    },
    $o = function t(e, r) {
        void 0 === r && (r = 1.70158);
        var n = function(t) {
                return t ? --t * t * ((r + 1) * t + r) + 1 : 0
            },
            i = "out" === e ? n : "in" === e ? function(t) {
                return 1 - n(1 - t)
            } : Wo(n);
        return i.config = function(r) {
            return t(e, r)
        }, i
    };
Di("Linear,Quad,Cubic,Quart,Quint,Strong", (function(t, e) {
    var r = e < 5 ? e + 1 : e;
    Vo(t + ",Power" + (r - 1), e ? function(t) {
        return Math.pow(t, r)
    } : function(t) {
        return t
    }, (function(t) {
        return 1 - Math.pow(1 - t, r)
    }), (function(t) {
        return t < .5 ? Math.pow(2 * t, r) / 2 : 1 - Math.pow(2 * (1 - t), r) / 2
    }))
})), zo.Linear.easeNone = zo.none = zo.Linear.easeIn, Vo("Elastic", jo("in"), jo("out"), jo()), Dn = 7.5625, In = 2 * (Ln = 1 / (On = 2.75)), Sn = 2.5 * Ln, Vo("Bounce", (function(t) {
    return 1 - Xn(1 - t)
}), Xn = function(t) {
    return t < Ln ? Dn * t * t : t < In ? Dn * Math.pow(t - 1.5 / On, 2) + .75 : t < Sn ? Dn * (t -= 2.25 / On) * t + .9375 : Dn * Math.pow(t - 2.625 / On, 2) + .984375
}), Vo("Expo", (function(t) {
    return t ? Math.pow(2, 10 * (t - 1)) : 0
})), Vo("Circ", (function(t) {
    return -(Rn(1 - t * t) - 1)
})), Vo("Sine", (function(t) {
    return 1 === t ? 1 : 1 - zn(t * An)
})), Vo("Back", $o("in"), $o("out"), $o()), zo.SteppedEase = zo.steps = ii.SteppedEase = {
    config: function(t, e) {
        void 0 === t && (t = 1);
        var r = 1 / t,
            n = t + (e ? 0 : 1),
            i = e ? 1 : 0;
        return function(t) {
            return ((n * lo(0, .99999999, t) | 0) + i) * r
        }
    }
}, Cn.ease = zo["quad.out"], Di("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", (function(t) {
    return bi += t + "," + t + "Params,"
}));
var Qo = function(t, e) {
        this.id = Gn++, t._gsap = this, this.target = t, this.harness = e, this.get = e ? e.get : Ti, this.set = e ? e.getSetter : hs
    },
    Zo = function() {
        function t(t) {
            this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, ro(this, +t.duration, 1, 1), this.data = t.data, tn && (this._ctx = tn, tn.data.push(this)), dn || Go.wake()
        }
        var e = t.prototype;
        return e.delay = function(t) {
            return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), this._delay = t, this) : this._delay
        }, e.duration = function(t) {
            return arguments.length ? this.totalDuration(this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur
        }, e.totalDuration = function(t) {
            return arguments.length ? (this._dirty = 0, ro(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
        }, e.totalTime = function(t, e) {
            if (Ro(), !arguments.length) return this._tTime;
            var r = this._dp;
            if (r && r.smoothChildTiming && this._ts) {
                for ($i(this, t), !r._dp || r.parent || Qi(r, this); r && r.parent;) r.parent._time !== r._start + (r._ts >= 0 ? r._tTime / r._ts : (r.totalDuration() - r._tTime) / -r._ts) && r.totalTime(r._tTime, !0), r = r.parent;
                !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && t < this._tDur || this._ts < 0 && t > 0 || !this._tDur && !t) && Zi(this._dp, this, this._start - this._delay)
            }
            return (this._tTime !== t || !this._dur && !e || this._initted && Math.abs(this._zTime) === En || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t), ki(this, t, e)), this
        }, e.time = function(t, e) {
            return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + Hi(this)) % (this._dur + this._rDelay) || (t ? this._dur : 0), e) : this._time
        }, e.totalProgress = function(t, e) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() > 0 ? 1 : 0
        }, e.progress = function(t, e) {
            return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + Hi(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0
        }, e.iteration = function(t, e) {
            var r = this.duration() + this._rDelay;
            return arguments.length ? this.totalTime(this._time + (t - 1) * r, e) : this._repeat ? Vi(this._tTime, r) + 1 : 1
        }, e.timeScale = function(t, e) {
            if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
            if (this._rts === t) return this;
            var r = this.parent && this._ts ? Wi(this.parent._time, this) : this._tTime;
            return this._rts = +t || 0, this._ts = this._ps || -1e-8 === t ? 0 : this._rts, this.totalTime(lo(-Math.abs(this._delay), this._tDur, r), !1 !== e), ji(this),
                function(t) {
                    for (var e = t.parent; e && e.parent;) e._dirty = 1, e.totalDuration(), e = e.parent;
                    return t
                }(this)
        }, e.paused = function(t) {
            return arguments.length ? (this._ps !== t && (this._ps = t, t ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Ro(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && Math.abs(this._zTime) !== En && (this._tTime -= En)))), this) : this._ps
        }, e.startTime = function(t) {
            if (arguments.length) {
                this._start = t;
                var e = this.parent || this._dp;
                return e && (e._sort || !this.parent) && Zi(e, this, t - this._delay), this
            }
            return this._start
        }, e.endTime = function(t) {
            return this._start + (Vn(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
        }, e.rawTime = function(t) {
            var e = this.parent || this._dp;
            return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Wi(e.rawTime(t), this) : this._tTime : this._tTime
        }, e.revert = function(t) {
            void 0 === t && (t = ci);
            var e = Jr;
            return Jr = t, (this._initted || this._startAt) && (this.timeline && this.timeline.revert(t), this.totalTime(-.01, t.suppressEvents)), "nested" !== this.data && !1 !== t.kill && this.kill(), Jr = e, this
        }, e.globalTime = function(t) {
            for (var e = this, r = arguments.length ? t : e.rawTime(); e;) r = e._start + r / (Math.abs(e._ts) || 1), e = e._dp;
            return !this.parent && this._sat ? this._sat.globalTime(t) : r
        }, e.repeat = function(t) {
            return arguments.length ? (this._repeat = t === 1 / 0 ? -2 : t, no(this)) : -2 === this._repeat ? 1 / 0 : this._repeat
        }, e.repeatDelay = function(t) {
            if (arguments.length) {
                var e = this._time;
                return this._rDelay = t, no(this), e ? this.time(e) : this
            }
            return this._rDelay
        }, e.yoyo = function(t) {
            return arguments.length ? (this._yoyo = t, this) : this._yoyo
        }, e.seek = function(t, e) {
            return this.totalTime(oo(this, t), Vn(e))
        }, e.restart = function(t, e) {
            return this.play().totalTime(t ? -this._delay : 0, Vn(e))
        }, e.play = function(t, e) {
            return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
        }, e.reverse = function(t, e) {
            return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
        }, e.pause = function(t, e) {
            return null != t && this.seek(t, e), this.paused(!0)
        }, e.resume = function() {
            return this.paused(!1)
        }, e.reversed = function(t) {
            return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -1e-8 : 0)), this) : this._rts < 0
        }, e.invalidate = function() {
            return this._initted = this._act = 0, this._zTime = -1e-8, this
        }, e.isActive = function() {
            var t, e = this.parent || this._dp,
                r = this._start;
            return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= r && t < this.endTime(!0) - En))
        }, e.eventCallback = function(t, e, r) {
            var n = this.vars;
            return arguments.length > 1 ? (e ? (n[t] = e, r && (n[t + "Params"] = r), "onUpdate" === t && (this._onUpdate = e)) : delete n[t], this) : n[t]
        }, e.then = function(t) {
            var e = this;
            return new Promise((function(r) {
                var n = Yn(t) ? t : Pi,
                    i = function() {
                        var t = e.then;
                        e.then = null, Yn(n) && (n = n(e)) && (n.then || n === e) && (e.then = t), r(n), e.then = t
                    };
                e._initted && 1 === e.totalProgress() && e._ts >= 0 || !e._tTime && e._ts < 0 ? i() : e._prom = i
            }))
        }, e.kill = function() {
            Do(this)
        }, t
    }();
Ei(Zo.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -1e-8,
    _prom: 0,
    _ps: !1,
    _rts: 1
});
var Ko = function(t) {
    function e(e, r) {
        var n;
        return void 0 === e && (e = {}), (n = t.call(this, e) || this).labels = {}, n.smoothChildTiming = !!e.smoothChildTiming, n.autoRemoveChildren = !!e.autoRemoveChildren, n._sort = Vn(e.sortChildren), en && Zi(e.parent || en, Qr(n), r), e.reversed && n.reverse(), e.paused && n.paused(!0), e.scrollTrigger && Ki(Qr(n), e.scrollTrigger), n
    }
    Zr(e, t);
    var r = e.prototype;
    return r.to = function(t, e, r) {
        return so(0, arguments, this), this
    }, r.from = function(t, e, r) {
        return so(1, arguments, this), this
    }, r.fromTo = function(t, e, r, n) {
        return so(2, arguments, this), this
    }, r.set = function(t, e, r) {
        return e.duration = 0, e.parent = this, Ri(e).repeatDelay || (e.repeat = 0), e.immediateRender = !!e.immediateRender, new ds(t, e, oo(this, r), 1), this
    }, r.call = function(t, e, r) {
        return Zi(this, ds.delayedCall(0, t, e), r)
    }, r.staggerTo = function(t, e, r, n, i, o, s) {
        return r.duration = e, r.stagger = r.stagger || n, r.onComplete = o, r.onCompleteParams = s, r.parent = this, new ds(t, r, oo(this, i)), this
    }, r.staggerFrom = function(t, e, r, n, i, o, s) {
        return r.runBackwards = 1, Ri(r).immediateRender = Vn(r.immediateRender), this.staggerTo(t, e, r, n, i, o, s)
    }, r.staggerFromTo = function(t, e, r, n, i, o, s, a) {
        return n.startAt = r, Ri(n).immediateRender = Vn(n.immediateRender), this.staggerTo(t, e, n, i, o, s, a)
    }, r.render = function(t, e, r) {
        var n, i, o, s, a, l, d, f, u, p, c, h, _ = this._time,
            v = this._dirty ? this.totalDuration() : this._tDur,
            g = this._dur,
            y = t <= 0 ? 0 : Li(t),
            m = this._zTime < 0 != t < 0 && (this._initted || !g);
        if (this !== en && y > v && t >= 0 && (y = v), y !== this._tTime || r || m) {
            if (_ !== this._time && g && (y += this._time - _, t += this._time - _), n = y, u = this._start, l = !(f = this._ts), m && (g || (_ = this._zTime), (t || !e) && (this._zTime = t)), this._repeat) {
                if (c = this._yoyo, a = g + this._rDelay, this._repeat < -1 && t < 0) return this.totalTime(100 * a + t, e, r);
                if (n = Li(y % a), y === v ? (s = this._repeat, n = g) : ((s = ~~(y / a)) && s === y / a && (n = g, s--), n > g && (n = g)), p = Vi(this._tTime, a), !_ && this._tTime && p !== s && this._tTime - p * a - this._dur <= 0 && (p = s), c && 1 & s && (n = g - n, h = 1), s !== p && !this._lock) {
                    var x = c && 1 & p,
                        b = x === (c && 1 & s);
                    if (s < p && (x = !x), _ = x ? 0 : y % g ? g : y, this._lock = 1, this.render(_ || (h ? 0 : Li(s * a)), e, !g)._lock = 0, this._tTime = y, !e && this.parent && To(this, "onRepeat"), this.vars.repeatRefresh && !h && (this.invalidate()._lock = 1), _ && _ !== this._time || l !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
                    if (g = this._dur, v = this._tDur, b && (this._lock = 2, _ = x ? g : -1e-4, this.render(_, !0), this.vars.repeatRefresh && !h && this.invalidate()), this._lock = 0, !this._ts && !l) return this;
                    qo(this, h)
                }
            }
            if (this._hasPause && !this._forcing && this._lock < 2 && (d = function(t, e, r) {
                    var n;
                    if (r > e)
                        for (n = t._first; n && n._start <= r;) {
                            if ("isPause" === n.data && n._start > e) return n;
                            n = n._next
                        } else
                            for (n = t._last; n && n._start >= r;) {
                                if ("isPause" === n.data && n._start < e) return n;
                                n = n._prev
                            }
                }(this, Li(_), Li(n)), d && (y -= n - (n = d._start))), this._tTime = y, this._time = n, this._act = !f, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = t, _ = 0), !_ && n && !e && !s && (To(this, "onStart"), this._tTime !== y)) return this;
            if (n >= _ && t >= 0)
                for (i = this._first; i;) {
                    if (o = i._next, (i._act || n >= i._start) && i._ts && d !== i) {
                        if (i.parent !== this) return this.render(t, e, r);
                        if (i.render(i._ts > 0 ? (n - i._start) * i._ts : (i._dirty ? i.totalDuration() : i._tDur) + (n - i._start) * i._ts, e, r), n !== this._time || !this._ts && !l) {
                            d = 0, o && (y += this._zTime = -1e-8);
                            break
                        }
                    }
                    i = o
                } else {
                    i = this._last;
                    for (var w = t < 0 ? t : n; i;) {
                        if (o = i._prev, (i._act || w <= i._end) && i._ts && d !== i) {
                            if (i.parent !== this) return this.render(t, e, r);
                            if (i.render(i._ts > 0 ? (w - i._start) * i._ts : (i._dirty ? i.totalDuration() : i._tDur) + (w - i._start) * i._ts, e, r || Jr && (i._initted || i._startAt)), n !== this._time || !this._ts && !l) {
                                d = 0, o && (y += this._zTime = w ? -1e-8 : En);
                                break
                            }
                        }
                        i = o
                    }
                }
            if (d && !e && (this.pause(), d.render(n >= _ ? 0 : -1e-8)._zTime = n >= _ ? 1 : -1, this._ts)) return this._start = u, ji(this), this.render(t, e, r);
            this._onUpdate && !e && To(this, "onUpdate", !0), (y === v && this._tTime >= this.totalDuration() || !y && _) && (u !== this._start && Math.abs(f) === Math.abs(this._ts) || this._lock || ((t || !g) && (y === v && this._ts > 0 || !y && this._ts < 0) && Fi(this, 1), e || t < 0 && !_ || !y && !_ && v || (To(this, y === v && t >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(y < v && this.timeScale() > 0) && this._prom())))
        }
        return this
    }, r.add = function(t, e) {
        var r = this;
        if (Nn(e) || (e = oo(this, e, t)), !(t instanceof Zo)) {
            if (Qn(t)) return t.forEach((function(t) {
                return r.add(t, e)
            })), this;
            if (Fn(t)) return this.addLabel(t, e);
            if (!Yn(t)) return this;
            t = ds.delayedCall(0, t)
        }
        return this !== t ? Zi(this, t, e) : this
    }, r.getChildren = function(t, e, r, n) {
        void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === r && (r = !0), void 0 === n && (n = -1e8);
        for (var i = [], o = this._first; o;) o._start >= n && (o instanceof ds ? e && i.push(o) : (r && i.push(o), t && i.push.apply(i, o.getChildren(!0, e, r)))), o = o._next;
        return i
    }, r.getById = function(t) {
        for (var e = this.getChildren(1, 1, 1), r = e.length; r--;)
            if (e[r].vars.id === t) return e[r]
    }, r.remove = function(t) {
        return Fn(t) ? this.removeLabel(t) : Yn(t) ? this.killTweensOf(t) : (Bi(this, t), t === this._recent && (this._recent = this._last), Yi(this))
    }, r.totalTime = function(e, r) {
        return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = Li(Go.time - (this._ts > 0 ? e / this._ts : (this.totalDuration() - e) / -this._ts))), t.prototype.totalTime.call(this, e, r), this._forcing = 0, this) : this._tTime
    }, r.addLabel = function(t, e) {
        return this.labels[t] = oo(this, e), this
    }, r.removeLabel = function(t) {
        return delete this.labels[t], this
    }, r.addPause = function(t, e, r) {
        var n = ds.delayedCall(0, e || fi, r);
        return n.data = "isPause", this._hasPause = 1, Zi(this, n, oo(this, t))
    }, r.removePause = function(t) {
        var e = this._first;
        for (t = oo(this, t); e;) e._start === t && "isPause" === e.data && Fi(e), e = e._next
    }, r.killTweensOf = function(t, e, r) {
        for (var n = this.getTweensOf(t, r), i = n.length; i--;) Jo !== n[i] && n[i].kill(t, e);
        return this
    }, r.getTweensOf = function(t, e) {
        for (var r, n = [], i = co(t), o = this._first, s = Nn(e); o;) o instanceof ds ? Si(o._targets, i) && (s ? (!Jo || o._initted && o._ts) && o.globalTime(0) <= e && o.globalTime(o.totalDuration()) > e : !e || o.isActive()) && n.push(o) : (r = o.getTweensOf(i, e)).length && n.push.apply(n, r), o = o._next;
        return n
    }, r.tweenTo = function(t, e) {
        e = e || {};
        var r, n = this,
            i = oo(n, t),
            o = e,
            s = o.startAt,
            a = o.onStart,
            l = o.onStartParams,
            d = o.immediateRender,
            f = ds.to(n, Ei({
                ease: e.ease || "none",
                lazy: !1,
                immediateRender: !1,
                time: i,
                overwrite: "auto",
                duration: e.duration || Math.abs((i - (s && "time" in s ? s.time : n._time)) / n.timeScale()) || En,
                onStart: function() {
                    if (n.pause(), !r) {
                        var t = e.duration || Math.abs((i - (s && "time" in s ? s.time : n._time)) / n.timeScale());
                        f._dur !== t && ro(f, t, 0, 1).render(f._time, !0, !0), r = 1
                    }
                    a && a.apply(f, l || [])
                }
            }, e));
        return d ? f.render(0) : f
    }, r.tweenFromTo = function(t, e, r) {
        return this.tweenTo(e, Ei({
            startAt: {
                time: oo(this, t)
            }
        }, r))
    }, r.recent = function() {
        return this._recent
    }, r.nextLabel = function(t) {
        return void 0 === t && (t = this._time), Mo(this, oo(this, t))
    }, r.previousLabel = function(t) {
        return void 0 === t && (t = this._time), Mo(this, oo(this, t), 1)
    }, r.currentLabel = function(t) {
        return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + En)
    }, r.shiftChildren = function(t, e, r) {
        void 0 === r && (r = 0);
        for (var n, i = this._first, o = this.labels; i;) i._start >= r && (i._start += t, i._end += t), i = i._next;
        if (e)
            for (n in o) o[n] >= r && (o[n] += t);
        return Yi(this)
    }, r.invalidate = function(e) {
        var r = this._first;
        for (this._lock = 0; r;) r.invalidate(e), r = r._next;
        return t.prototype.invalidate.call(this, e)
    }, r.clear = function(t) {
        void 0 === t && (t = !0);
        for (var e, r = this._first; r;) e = r._next, this.remove(r), r = e;
        return this._dp && (this._time = this._tTime = this._pTime = 0), t && (this.labels = {}), Yi(this)
    }, r.totalDuration = function(t) {
        var e, r, n, i = 0,
            o = this,
            s = o._last,
            a = Pn;
        if (arguments.length) return o.timeScale((o._repeat < 0 ? o.duration() : o.totalDuration()) / (o.reversed() ? -t : t));
        if (o._dirty) {
            for (n = o.parent; s;) e = s._prev, s._dirty && s.totalDuration(), (r = s._start) > a && o._sort && s._ts && !o._lock ? (o._lock = 1, Zi(o, s, r - s._delay, 1)._lock = 0) : a = r, r < 0 && s._ts && (i -= r, (!n && !o._dp || n && n.smoothChildTiming) && (o._start += r / o._ts, o._time -= r, o._tTime -= r), o.shiftChildren(-r, !1, -1 / 0), a = 0), s._end > i && s._ts && (i = s._end), s = e;
            ro(o, o === en && o._time > i ? o._time : i, 1, 1), o._dirty = 0
        }
        return o._tDur
    }, e.updateRoot = function(t) {
        if (en._ts && (ki(en, Wi(t, en)), an = Go.frame), Go.frame >= mi) {
            mi += kn.autoSleep || 120;
            var e = en._first;
            if ((!e || !e._ts) && kn.autoSleep && Go._listeners.length < 2) {
                for (; e && !e._ts;) e = e._next;
                e || Go.sleep()
            }
        }
    }, e
}(Zo);
Ei(Ko.prototype, {
    _lock: 0,
    _hasPause: 0,
    _forcing: 0
});
var Jo, ts, es = function(t, e, r, n, i, o, s) {
        var a, l, d, f, u, p, c, h, _ = new Ms(this._pt, t, e, 0, 1, gs, null, i),
            v = 0,
            g = 0;
        for (_.b = r, _.e = n, r += "", (c = ~(n += "").indexOf("random(")) && (n = bo(n)), o && (o(h = [r, n], t, e), r = h[0], n = h[1]), l = r.match(ti) || []; a = ti.exec(n);) f = a[0], u = n.substring(v, a.index), d ? d = (d + 1) % 5 : "rgba(" === u.substr(-5) && (d = 1), f !== l[g++] && (p = parseFloat(l[g - 1]) || 0, _._pt = {
            _next: _._pt,
            p: u || 1 === g ? u : ",",
            s: p,
            c: "=" === f.charAt(1) ? Ii(p, f) - p : parseFloat(f) - p,
            m: d && d < 4 ? Math.round : 0
        }, v = ti.lastIndex);
        return _.c = v < n.length ? n.substring(v, n.length) : "", _.fp = s, (ei.test(n) || c) && (_.e = 0), this._pt = _, _
    },
    rs = function(t, e, r, n, i, o, s, a, l, d) {
        Yn(n) && (n = n(i || 0, t, o));
        var f, u = t[e],
            p = "get" !== r ? r : Yn(u) ? l ? t[e.indexOf("set") || !Yn(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](l) : t[e]() : u,
            c = Yn(u) ? l ? ps : us : fs;
        if (Fn(n) && (~n.indexOf("random(") && (n = bo(n)), "=" === n.charAt(1) && ((f = Ii(p, n) + (fo(p) || 0)) || 0 === f) && (n = f)), !d || p !== n || ts) return isNaN(p * n) || "" === n ? (!u && !(e in t) && ai(e, n), es.call(this, t, e, p, n, c, a || kn.stringFilter, l)) : (f = new Ms(this._pt, t, e, +p || 0, n - (p || 0), "boolean" == typeof u ? vs : _s, 0, c), l && (f.fp = l), s && f.modifier(s, this, t), this._pt = f)
    },
    ns = function(t, e, r, n, i, o) {
        var s, a, l, d;
        if (gi[t] && !1 !== (s = new gi[t]).init(i, s.rawVars ? e[t] : function(t, e, r, n, i) {
                if (Yn(t) && (t = ss(t, i, e, r, n)), !Hn(t) || t.style && t.nodeType || Qn(t) || $n(t)) return Fn(t) ? ss(t, i, e, r, n) : t;
                var o, s = {};
                for (o in t) s[o] = ss(t[o], i, e, r, n);
                return s
            }(e[t], n, i, o, r), r, n, o) && (r._pt = a = new Ms(r._pt, i, t, 0, 1, s.render, s, 0, s.priority), r !== ln))
            for (l = r._ptLookup[r._targets.indexOf(i)], d = s._props.length; d--;) l[s._props[d]] = a;
        return s
    },
    is = function t(e, r, n) {
        var i, o, s, a, l, d, f, u, p, c, h, _, v, g = e.vars,
            y = g.ease,
            m = g.startAt,
            x = g.immediateRender,
            b = g.lazy,
            w = g.onUpdate,
            M = g.runBackwards,
            T = g.yoyoEase,
            D = g.keyframes,
            O = g.autoRevert,
            L = e._dur,
            I = e._startAt,
            S = e._targets,
            X = e.parent,
            k = X && "nested" === X.data ? X.vars.targets : S,
            C = "auto" === e._overwrite && !Kr,
            P = e.timeline;
        if (P && (!D || !y) && (y = "none"), e._ease = Ho(y, Cn.ease), e._yEase = T ? No(Ho(!0 === T ? y : T, Cn.ease)) : 0, T && e._yoyo && !e._repeat && (T = e._yEase, e._yEase = e._ease, e._ease = T), e._from = !P && !!g.runBackwards, !P || D && !g.stagger) {
            if (_ = (u = S[0] ? Mi(S[0]).harness : 0) && g[u.prop], i = Gi(g, hi), I && (I._zTime < 0 && I.progress(1), r < 0 && M && x && !O ? I.render(-1, !0) : I.revert(M && L ? pi : ui), I._lazy = 0), m) {
                if (Fi(e._startAt = ds.set(S, Ei({
                        data: "isStart",
                        overwrite: !1,
                        parent: X,
                        immediateRender: !0,
                        lazy: !I && Vn(b),
                        startAt: null,
                        delay: 0,
                        onUpdate: w && function() {
                            return To(e, "onUpdate")
                        },
                        stagger: 0
                    }, m))), e._startAt._dp = 0, e._startAt._sat = e, r < 0 && (Jr || !x && !O) && e._startAt.revert(pi), x && L && r <= 0 && n <= 0) return void(r && (e._zTime = r))
            } else if (M && L && !I)
                if (r && (x = !1), s = Ei({
                        overwrite: !1,
                        data: "isFromStart",
                        lazy: x && !I && Vn(b),
                        immediateRender: x,
                        stagger: 0,
                        parent: X
                    }, i), _ && (s[u.prop] = _), Fi(e._startAt = ds.set(S, s)), e._startAt._dp = 0, e._startAt._sat = e, r < 0 && (Jr ? e._startAt.revert(pi) : e._startAt.render(-1, !0)), e._zTime = r, x) {
                    if (!r) return
                } else t(e._startAt, En, En);
            for (e._pt = e._ptCache = 0, b = L && Vn(b) || b && !L, o = 0; o < S.length; o++) {
                if (f = (l = S[o])._gsap || wi(S)[o]._gsap, e._ptLookup[o] = c = {}, vi[f.id] && _i.length && Xi(), h = k === S ? o : k.indexOf(l), u && !1 !== (p = new u).init(l, _ || i, e, h, k) && (e._pt = a = new Ms(e._pt, l, p.name, 0, 1, p.render, p, 0, p.priority), p._props.forEach((function(t) {
                        c[t] = a
                    })), p.priority && (d = 1)), !u || _)
                    for (s in i) gi[s] && (p = ns(s, i, e, h, l, k)) ? p.priority && (d = 1) : c[s] = a = rs.call(e, l, s, "get", i[s], h, k, 0, g.stringFilter);
                e._op && e._op[o] && e.kill(l, e._op[o]), C && e._pt && (Jo = e, en.killTweensOf(l, c, e.globalTime(r)), v = !e.parent, Jo = 0), e._pt && b && (vi[f.id] = 1)
            }
            d && ws(e), e._onInit && e._onInit(e)
        }
        e._onUpdate = w, e._initted = (!e._op || e._pt) && !v, D && r <= 0 && P.render(Pn, !0, !0)
    },
    os = function(t, e, r, n) {
        var i, o, s = e.ease || n || "power1.inOut";
        if (Qn(e)) o = r[t] || (r[t] = []), e.forEach((function(t, r) {
            return o.push({
                t: r / (e.length - 1) * 100,
                v: t,
                e: s
            })
        }));
        else
            for (i in e) o = r[i] || (r[i] = []), "ease" === i || o.push({
                t: parseFloat(t),
                v: e[i],
                e: s
            })
    },
    ss = function(t, e, r, n, i) {
        return Yn(t) ? t.call(e, r, n, i) : Fn(t) && ~t.indexOf("random(") ? bo(t) : t
    },
    as = bi + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
    ls = {};
Di(as + ",id,stagger,delay,duration,paused,scrollTrigger", (function(t) {
    return ls[t] = 1
}));
var ds = function(t) {
    function e(e, r, n, i) {
        var o;
        "number" == typeof r && (n.duration = r, r = n, n = null);
        var s, a, l, d, f, u, p, c, h = (o = t.call(this, i ? r : Ri(r)) || this).vars,
            _ = h.duration,
            v = h.delay,
            g = h.immediateRender,
            y = h.stagger,
            m = h.overwrite,
            x = h.keyframes,
            b = h.defaults,
            w = h.scrollTrigger,
            M = h.yoyoEase,
            T = r.parent || en,
            D = (Qn(e) || $n(e) ? Nn(e[0]) : "length" in r) ? [e] : co(e);
        if (o._targets = D.length ? wi(D) : li("GSAP target " + e + " not found. https://gsap.com", !kn.nullTargetWarn) || [], o._ptLookup = [], o._overwrite = m, x || y || jn(_) || jn(v)) {
            if (r = o.vars, (s = o.timeline = new Ko({
                    data: "nested",
                    defaults: b || {},
                    targets: T && "nested" === T.data ? T.vars.targets : D
                })).kill(), s.parent = s._dp = Qr(o), s._start = 0, y || jn(_) || jn(v)) {
                if (d = D.length, p = y && vo(y), Hn(y))
                    for (f in y) ~as.indexOf(f) && (c || (c = {}), c[f] = y[f]);
                for (a = 0; a < d; a++)(l = Gi(r, ls)).stagger = 0, M && (l.yoyoEase = M), c && Ui(l, c), u = D[a], l.duration = +ss(_, Qr(o), a, u, D), l.delay = (+ss(v, Qr(o), a, u, D) || 0) - o._delay, !y && 1 === d && l.delay && (o._delay = v = l.delay, o._start += v, l.delay = 0), s.to(u, l, p ? p(a, u, D) : 0), s._ease = zo.none;
                s.duration() ? _ = v = 0 : o.timeline = 0
            } else if (x) {
                Ri(Ei(s.vars.defaults, {
                    ease: "none"
                })), s._ease = Ho(x.ease || r.ease || "none");
                var O, L, I, S = 0;
                if (Qn(x)) x.forEach((function(t) {
                    return s.to(D, t, ">")
                })), s.duration();
                else {
                    for (f in l = {}, x) "ease" === f || "easeEach" === f || os(f, x[f], l, x.easeEach);
                    for (f in l)
                        for (O = l[f].sort((function(t, e) {
                                return t.t - e.t
                            })), S = 0, a = 0; a < O.length; a++)(I = {
                            ease: (L = O[a]).e,
                            duration: (L.t - (a ? O[a - 1].t : 0)) / 100 * _
                        })[f] = L.v, s.to(D, I, S), S += I.duration;
                    s.duration() < _ && s.to({}, {
                        duration: _ - s.duration()
                    })
                }
            }
            _ || o.duration(_ = s.duration())
        } else o.timeline = 0;
        return !0 !== m || Kr || (Jo = Qr(o), en.killTweensOf(D), Jo = 0), Zi(T, Qr(o), n), r.reversed && o.reverse(), r.paused && o.paused(!0), (g || !_ && !x && o._start === Li(T._time) && Vn(g) && qi(Qr(o)) && "nested" !== T.data) && (o._tTime = -1e-8, o.render(Math.max(0, -v) || 0)), w && Ki(Qr(o), w), o
    }
    Zr(e, t);
    var r = e.prototype;
    return r.render = function(t, e, r) {
        var n, i, o, s, a, l, d, f, u, p = this._time,
            c = this._tDur,
            h = this._dur,
            _ = t < 0,
            v = t > c - En && !_ ? c : t < En ? 0 : t;
        if (h) {
            if (v !== this._tTime || !t || r || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== _) {
                if (n = v, f = this.timeline, this._repeat) {
                    if (s = h + this._rDelay, this._repeat < -1 && _) return this.totalTime(100 * s + t, e, r);
                    if (n = Li(v % s), v === c ? (o = this._repeat, n = h) : ((o = ~~(v / s)) && o === Li(v / s) && (n = h, o--), n > h && (n = h)), (l = this._yoyo && 1 & o) && (u = this._yEase, n = h - n), a = Vi(this._tTime, s), n === p && !r && this._initted && o === a) return this._tTime = v, this;
                    o !== a && (f && this._yEase && qo(f, l), this.vars.repeatRefresh && !l && !this._lock && this._time !== s && this._initted && (this._lock = r = 1, this.render(Li(s * o), !0).invalidate()._lock = 0))
                }
                if (!this._initted) {
                    if (Ji(this, _ ? t : n, r, e, v)) return this._tTime = 0, this;
                    if (!(p === this._time || r && this.vars.repeatRefresh && o !== a)) return this;
                    if (h !== this._dur) return this.render(t, e, r)
                }
                if (this._tTime = v, this._time = n, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = d = (u || this._ease)(n / h), this._from && (this.ratio = d = 1 - d), n && !p && !e && !o && (To(this, "onStart"), this._tTime !== v)) return this;
                for (i = this._pt; i;) i.r(d, i.d), i = i._next;
                f && f.render(t < 0 ? t : f._dur * f._ease(n / this._dur), e, r) || this._startAt && (this._zTime = t), this._onUpdate && !e && (_ && Ni(this, t, 0, r), To(this, "onUpdate")), this._repeat && o !== a && this.vars.onRepeat && !e && this.parent && To(this, "onRepeat"), v !== this._tDur && v || this._tTime !== v || (_ && !this._onUpdate && Ni(this, t, 0, !0), (t || !h) && (v === this._tDur && this._ts > 0 || !v && this._ts < 0) && Fi(this, 1), e || _ && !p || !(v || p || l) || (To(this, v === c ? "onComplete" : "onReverseComplete", !0), this._prom && !(v < c && this.timeScale() > 0) && this._prom()))
            }
        } else ! function(t, e, r, n) {
            var i, o, s, a = t.ratio,
                l = e < 0 || !e && (!t._start && to(t) && (t._initted || !eo(t)) || (t._ts < 0 || t._dp._ts < 0) && !eo(t)) ? 0 : 1,
                d = t._rDelay,
                f = 0;
            if (d && t._repeat && (f = lo(0, t._tDur, e), o = Vi(f, d), t._yoyo && 1 & o && (l = 1 - l), o !== Vi(t._tTime, d) && (a = 1 - l, t.vars.repeatRefresh && t._initted && t.invalidate())), l !== a || Jr || n || t._zTime === En || !e && t._zTime) {
                if (!t._initted && Ji(t, e, n, r, f)) return;
                for (s = t._zTime, t._zTime = e || (r ? En : 0), r || (r = e && !s), t.ratio = l, t._from && (l = 1 - l), t._time = 0, t._tTime = f, i = t._pt; i;) i.r(l, i.d), i = i._next;
                e < 0 && Ni(t, e, 0, !0), t._onUpdate && !r && To(t, "onUpdate"), f && t._repeat && !r && t.parent && To(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === l && (l && Fi(t, 1), r || Jr || (To(t, l ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()))
            } else t._zTime || (t._zTime = e)
        }(this, t, e, r);
        return this
    }, r.targets = function() {
        return this._targets
    }, r.invalidate = function(e) {
        return (!e || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(e), t.prototype.invalidate.call(this, e)
    }, r.resetTo = function(t, e, r, n, i) {
        dn || Go.wake(), this._ts || this.play();
        var o = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
        return this._initted || is(this, o),
            function(t, e, r, n, i, o, s, a) {
                var l, d, f, u, p = (t._pt && t._ptCache || (t._ptCache = {}))[e];
                if (!p)
                    for (p = t._ptCache[e] = [], f = t._ptLookup, u = t._targets.length; u--;) {
                        if ((l = f[u][e]) && l.d && l.d._pt)
                            for (l = l.d._pt; l && l.p !== e && l.fp !== e;) l = l._next;
                        if (!l) return ts = 1, t.vars[e] = "+=0", is(t, s), ts = 0, a ? li(e + " not eligible for reset") : 1;
                        p.push(l)
                    }
                for (u = p.length; u--;)(l = (d = p[u])._pt || d).s = !n && 0 !== n || i ? l.s + (n || 0) + o * l.c : n, l.c = r - l.s, d.e && (d.e = Oi(r) + fo(d.e)), d.b && (d.b = l.s + fo(d.b))
            }(this, t, e, r, n, this._ease(o / this._dur), o, i) ? this.resetTo(t, e, r, n, 1) : ($i(this, 0), this.parent || zi(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0))
    }, r.kill = function(t, e) {
        if (void 0 === e && (e = "all"), !(t || e && "all" !== e)) return this._lazy = this._pt = 0, this.parent ? Do(this) : this;
        if (this.timeline) {
            var r = this.timeline.totalDuration();
            return this.timeline.killTweensOf(t, e, Jo && !0 !== Jo.vars.overwrite)._first || Do(this), this.parent && r !== this.timeline.totalDuration() && ro(this, this._dur * this.timeline._tDur / r, 0, 1), this
        }
        var n, i, o, s, a, l, d, f = this._targets,
            u = t ? co(t) : f,
            p = this._ptLookup,
            c = this._pt;
        if ((!e || "all" === e) && function(t, e) {
                for (var r = t.length, n = r === e.length; n && r-- && t[r] === e[r];);
                return r < 0
            }(f, u)) return "all" === e && (this._pt = 0), Do(this);
        for (n = this._op = this._op || [], "all" !== e && (Fn(e) && (a = {}, Di(e, (function(t) {
                return a[t] = 1
            })), e = a), e = function(t, e) {
                var r, n, i, o, s = t[0] ? Mi(t[0]).harness : 0,
                    a = s && s.aliases;
                if (!a) return e;
                for (n in r = Ui({}, e), a)
                    if (n in r)
                        for (i = (o = a[n].split(",")).length; i--;) r[o[i]] = r[n];
                return r
            }(f, e)), d = f.length; d--;)
            if (~u.indexOf(f[d]))
                for (a in i = p[d], "all" === e ? (n[d] = e, s = i, o = {}) : (o = n[d] = n[d] || {}, s = e), s)(l = i && i[a]) && ("kill" in l.d && !0 !== l.d.kill(a) || Bi(this, l, "_pt"), delete i[a]), "all" !== o && (o[a] = 1);
        return this._initted && !this._pt && c && Do(this), this
    }, e.to = function(t, r) {
        return new e(t, r, arguments[2])
    }, e.from = function(t, e) {
        return so(1, arguments)
    }, e.delayedCall = function(t, r, n, i) {
        return new e(r, 0, {
            immediateRender: !1,
            lazy: !1,
            overwrite: !1,
            delay: t,
            onComplete: r,
            onReverseComplete: r,
            onCompleteParams: n,
            onReverseCompleteParams: n,
            callbackScope: i
        })
    }, e.fromTo = function(t, e, r) {
        return so(2, arguments)
    }, e.set = function(t, r) {
        return r.duration = 0, r.repeatDelay || (r.repeat = 0), new e(t, r)
    }, e.killTweensOf = function(t, e, r) {
        return en.killTweensOf(t, e, r)
    }, e
}(Zo);
Ei(ds.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0
}), Di("staggerTo,staggerFrom,staggerFromTo", (function(t) {
    ds[t] = function() {
        var e = new Ko,
            r = uo.call(arguments, 0);
        return r.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, r)
    }
}));
var fs = function(t, e, r) {
        return t[e] = r
    },
    us = function(t, e, r) {
        return t[e](r)
    },
    ps = function(t, e, r, n) {
        return t[e](n.fp, r)
    },
    cs = function(t, e, r) {
        return t.setAttribute(e, r)
    },
    hs = function(t, e) {
        return Yn(t[e]) ? us : qn(t[e]) && t.setAttribute ? cs : fs
    },
    _s = function(t, e) {
        return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e)
    },
    vs = function(t, e) {
        return e.set(e.t, e.p, !!(e.s + e.c * t), e)
    },
    gs = function(t, e) {
        var r = e._pt,
            n = "";
        if (!t && e.b) n = e.b;
        else if (1 === t && e.e) n = e.e;
        else {
            for (; r;) n = r.p + (r.m ? r.m(r.s + r.c * t) : Math.round(1e4 * (r.s + r.c * t)) / 1e4) + n, r = r._next;
            n += e.c
        }
        e.set(e.t, e.p, n, e)
    },
    ys = function(t, e) {
        for (var r = e._pt; r;) r.r(t, r.d), r = r._next
    },
    ms = function(t, e, r, n) {
        for (var i, o = this._pt; o;) i = o._next, o.p === n && o.modifier(t, e, r), o = i
    },
    xs = function(t) {
        for (var e, r, n = this._pt; n;) r = n._next, n.p === t && !n.op || n.op === t ? Bi(this, n, "_pt") : n.dep || (e = 1), n = r;
        return !e
    },
    bs = function(t, e, r, n) {
        n.mSet(t, e, n.m.call(n.tween, r, n.mt), n)
    },
    ws = function(t) {
        for (var e, r, n, i, o = t._pt; o;) {
            for (e = o._next, r = n; r && r.pr > o.pr;) r = r._next;
            (o._prev = r ? r._prev : i) ? o._prev._next = o: n = o, (o._next = r) ? r._prev = o : i = o, o = e
        }
        t._pt = n
    },
    Ms = function() {
        function t(t, e, r, n, i, o, s, a, l) {
            this.t = e, this.s = n, this.c = i, this.p = r, this.r = o || _s, this.d = s || this, this.set = a || fs, this.pr = l || 0, this._next = t, t && (t._prev = this)
        }
        return t.prototype.modifier = function(t, e, r) {
            this.mSet = this.mSet || this.set, this.set = bs, this.m = t, this.mt = r, this.tween = e
        }, t
    }();
Di(bi + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", (function(t) {
    return hi[t] = 1
})), ii.TweenMax = ii.TweenLite = ds, ii.TimelineLite = ii.TimelineMax = Ko, en = new Ko({
    sortChildren: !1,
    defaults: Cn,
    autoRemoveChildren: !0,
    id: "root",
    smoothChildTiming: !0
}), kn.stringFilter = Ao;
var Ts = [],
    Ds = {},
    Os = [],
    Ls = 0,
    Is = 0,
    Ss = function(t) {
        return (Ds[t] || Os).map((function(t) {
            return t()
        }))
    },
    Xs = function() {
        var t = Date.now(),
            e = [];
        t - Ls > 2 && (Ss("matchMediaInit"), Ts.forEach((function(t) {
            var r, n, i, o, s = t.queries,
                a = t.conditions;
            for (n in s)(r = rn.matchMedia(s[n]).matches) && (i = 1), r !== a[n] && (a[n] = r, o = 1);
            o && (t.revert(), i && e.push(t))
        })), Ss("matchMediaRevert"), e.forEach((function(t) {
            return t.onMatch(t, (function(e) {
                return t.add(null, e)
            }))
        })), Ls = t, Ss("matchMedia"))
    },
    ks = function() {
        function t(t, e) {
            this.selector = e && ho(e), this.data = [], this._r = [], this.isReverted = !1, this.id = Is++, t && this.add(t)
        }
        var e = t.prototype;
        return e.add = function(t, e, r) {
            Yn(t) && (r = e, e = t, t = Yn);
            var n = this,
                i = function() {
                    var t, i = tn,
                        o = n.selector;
                    return i && i !== n && i.data.push(n), r && (n.selector = ho(r)), tn = n, t = e.apply(n, arguments), Yn(t) && n._r.push(t), tn = i, n.selector = o, n.isReverted = !1, t
                };
            return n.last = i, t === Yn ? i(n, (function(t) {
                return n.add(null, t)
            })) : t ? n[t] = i : i
        }, e.ignore = function(t) {
            var e = tn;
            tn = null, t(this), tn = e
        }, e.getTweens = function() {
            var e = [];
            return this.data.forEach((function(r) {
                return r instanceof t ? e.push.apply(e, r.getTweens()) : r instanceof ds && !(r.parent && "nested" === r.parent.data) && e.push(r)
            })), e
        }, e.clear = function() {
            this._r.length = this.data.length = 0
        }, e.kill = function(t, e) {
            var r = this;
            if (t ? function() {
                    for (var e, n = r.getTweens(), i = r.data.length; i--;) "isFlip" === (e = r.data[i]).data && (e.revert(), e.getChildren(!0, !0, !1).forEach((function(t) {
                        return n.splice(n.indexOf(t), 1)
                    })));
                    for (n.map((function(t) {
                            return {
                                g: t._dur || t._delay || t._sat && !t._sat.vars.immediateRender ? t.globalTime(0) : -1 / 0,
                                t: t
                            }
                        })).sort((function(t, e) {
                            return e.g - t.g || -1 / 0
                        })).forEach((function(e) {
                            return e.t.revert(t)
                        })), i = r.data.length; i--;)(e = r.data[i]) instanceof Ko ? "nested" !== e.data && (e.scrollTrigger && e.scrollTrigger.revert(), e.kill()) : !(e instanceof ds) && e.revert && e.revert(t);
                    r._r.forEach((function(e) {
                        return e(t, r)
                    })), r.isReverted = !0
                }() : this.data.forEach((function(t) {
                    return t.kill && t.kill()
                })), this.clear(), e)
                for (var n = Ts.length; n--;) Ts[n].id === this.id && Ts.splice(n, 1)
        }, e.revert = function(t) {
            this.kill(t || {})
        }, t
    }(),
    Cs = function() {
        function t(t) {
            this.contexts = [], this.scope = t, tn && tn.data.push(this)
        }
        var e = t.prototype;
        return e.add = function(t, e, r) {
            Hn(t) || (t = {
                matches: t
            });
            var n, i, o, s = new ks(0, r || this.scope),
                a = s.conditions = {};
            for (i in tn && !s.selector && (s.selector = tn.selector), this.contexts.push(s), e = s.add("onMatch", e), s.queries = t, t) "all" === i ? o = 1 : (n = rn.matchMedia(t[i])) && (Ts.indexOf(s) < 0 && Ts.push(s), (a[i] = n.matches) && (o = 1), n.addListener ? n.addListener(Xs) : n.addEventListener("change", Xs));
            return o && e(s, (function(t) {
                return s.add(null, t)
            })), this
        }, e.revert = function(t) {
            this.kill(t || {})
        }, e.kill = function(t) {
            this.contexts.forEach((function(e) {
                return e.kill(t, !0)
            }))
        }, t
    }(),
    Ps = {
        registerPlugin: function() {
            for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
            e.forEach((function(t) {
                return Lo(t)
            }))
        },
        timeline: function(t) {
            return new Ko(t)
        },
        getTweensOf: function(t, e) {
            return en.getTweensOf(t, e)
        },
        getProperty: function(t, e, r, n) {
            Fn(t) && (t = co(t)[0]);
            var i = Mi(t || {}).get,
                o = r ? Pi : Ci;
            return "native" === r && (r = ""), t ? e ? o((gi[e] && gi[e].get || i)(t, e, r, n)) : function(e, r, n) {
                return o((gi[e] && gi[e].get || i)(t, e, r, n))
            } : t
        },
        quickSetter: function(t, e, r) {
            if ((t = co(t)).length > 1) {
                var n = t.map((function(t) {
                        return As.quickSetter(t, e, r)
                    })),
                    i = n.length;
                return function(t) {
                    for (var e = i; e--;) n[e](t)
                }
            }
            t = t[0] || {};
            var o = gi[e],
                s = Mi(t),
                a = s.harness && (s.harness.aliases || {})[e] || e,
                l = o ? function(e) {
                    var n = new o;
                    ln._pt = 0, n.init(t, r ? e + r : e, ln, 0, [t]), n.render(1, n), ln._pt && ys(1, ln)
                } : s.set(t, a);
            return o ? l : function(e) {
                return l(t, a, r ? e + r : e, s, 1)
            }
        },
        quickTo: function(t, e, r) {
            var n, i = As.to(t, Ui(((n = {})[e] = "+=0.1", n.paused = !0, n), r || {})),
                o = function(t, r, n) {
                    return i.resetTo(e, t, r, n)
                };
            return o.tween = i, o
        },
        isTweening: function(t) {
            return en.getTweensOf(t, !0).length > 0
        },
        defaults: function(t) {
            return t && t.ease && (t.ease = Ho(t.ease, Cn.ease)), Ai(Cn, t || {})
        },
        config: function(t) {
            return Ai(kn, t || {})
        },
        registerEffect: function(t) {
            var e = t.name,
                r = t.effect,
                n = t.plugins,
                i = t.defaults,
                o = t.extendTimeline;
            (n || "").split(",").forEach((function(t) {
                return t && !gi[t] && !ii[t] && li(e + " effect requires " + t + " plugin.")
            })), yi[e] = function(t, e, n) {
                return r(co(t), Ei(e || {}, i), n)
            }, o && (Ko.prototype[e] = function(t, r, n) {
                return this.add(yi[e](t, Hn(r) ? r : (n = r) && {}, this), n)
            })
        },
        registerEase: function(t, e) {
            zo[t] = Ho(e)
        },
        parseEase: function(t, e) {
            return arguments.length ? Ho(t, e) : zo
        },
        getById: function(t) {
            return en.getById(t)
        },
        exportRoot: function(t, e) {
            void 0 === t && (t = {});
            var r, n, i = new Ko(t);
            for (i.smoothChildTiming = Vn(t.smoothChildTiming), en.remove(i), i._dp = 0, i._time = i._tTime = en._time, r = en._first; r;) n = r._next, !e && !r._dur && r instanceof ds && r.vars.onComplete === r._targets[0] || Zi(i, r, r._start - r._delay), r = n;
            return Zi(en, i, 0), i
        },
        context: function(t, e) {
            return t ? new ks(t, e) : tn
        },
        matchMedia: function(t) {
            return new Cs(t)
        },
        matchMediaRefresh: function() {
            return Ts.forEach((function(t) {
                var e, r, n = t.conditions;
                for (r in n) n[r] && (n[r] = !1, e = 1);
                e && t.revert()
            })) || Xs()
        },
        addEventListener: function(t, e) {
            var r = Ds[t] || (Ds[t] = []);
            ~r.indexOf(e) || r.push(e)
        },
        removeEventListener: function(t, e) {
            var r = Ds[t],
                n = r && r.indexOf(e);
            n >= 0 && r.splice(n, 1)
        },
        utils: {
            wrap: function t(e, r, n) {
                var i = r - e;
                return Qn(e) ? xo(e, t(0, e.length), r) : ao(n, (function(t) {
                    return (i + (t - e) % i) % i + e
                }))
            },
            wrapYoyo: function t(e, r, n) {
                var i = r - e,
                    o = 2 * i;
                return Qn(e) ? xo(e, t(0, e.length - 1), r) : ao(n, (function(t) {
                    return e + ((t = (o + (t - e) % o) % o || 0) > i ? o - t : t)
                }))
            },
            distribute: vo,
            random: mo,
            snap: yo,
            normalize: function(t, e, r) {
                return wo(t, e, 0, 1, r)
            },
            getUnit: fo,
            clamp: function(t, e, r) {
                return ao(r, (function(r) {
                    return lo(t, e, r)
                }))
            },
            splitColor: ko,
            toArray: co,
            selector: ho,
            mapRange: wo,
            pipe: function() {
                for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                return function(t) {
                    return e.reduce((function(t, e) {
                        return e(t)
                    }), t)
                }
            },
            unitize: function(t, e) {
                return function(r) {
                    return t(parseFloat(r)) + (e || fo(r))
                }
            },
            interpolate: function t(e, r, n, i) {
                var o = isNaN(e + r) ? 0 : function(t) {
                    return (1 - t) * e + t * r
                };
                if (!o) {
                    var s, a, l, d, f, u = Fn(e),
                        p = {};
                    if (!0 === n && (i = 1) && (n = null), u) e = {
                        p: e
                    }, r = {
                        p: r
                    };
                    else if (Qn(e) && !Qn(r)) {
                        for (l = [], d = e.length, f = d - 2, a = 1; a < d; a++) l.push(t(e[a - 1], e[a]));
                        d--, o = function(t) {
                            t *= d;
                            var e = Math.min(f, ~~t);
                            return l[e](t - e)
                        }, n = r
                    } else i || (e = Ui(Qn(e) ? [] : {}, e));
                    if (!l) {
                        for (s in r) rs.call(p, e, s, "get", r[s]);
                        o = function(t) {
                            return ys(t, p) || (u ? e.p : e)
                        }
                    }
                }
                return ao(n, o)
            },
            shuffle: _o
        },
        install: si,
        effects: yi,
        ticker: Go,
        updateRoot: Ko.updateRoot,
        plugins: gi,
        globalTimeline: en,
        core: {
            PropTween: Ms,
            globals: di,
            Tween: ds,
            Timeline: Ko,
            Animation: Zo,
            getCache: Mi,
            _removeLinkedListItem: Bi,
            reverting: function() {
                return Jr
            },
            context: function(t) {
                return t && tn && (tn.data.push(t), t._ctx = tn), tn
            },
            suppressOverwrites: function(t) {
                return Kr = t
            }
        }
    };
Di("to,from,fromTo,delayedCall,set,killTweensOf", (function(t) {
    return Ps[t] = ds[t]
})), Go.add(Ko.updateRoot), ln = Ps.to({}, {
    duration: 0
});
var Es = function(t, e) {
        for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e;) r = r._next;
        return r
    },
    Us = function(t, e) {
        return {
            name: t,
            rawVars: 1,
            init: function(t, r, n) {
                n._onInit = function(t) {
                    var n, i;
                    if (Fn(r) && (n = {}, Di(r, (function(t) {
                            return n[t] = 1
                        })), r = n), e) {
                        for (i in n = {}, r) n[i] = e(r[i]);
                        r = n
                    }! function(t, e) {
                        var r, n, i, o = t._targets;
                        for (r in e)
                            for (n = o.length; n--;)(i = t._ptLookup[n][r]) && (i = i.d) && (i._pt && (i = Es(i, r)), i && i.modifier && i.modifier(e[r], t, o[n], r))
                    }(t, r)
                }
            }
        }
    },
    As = Ps.registerPlugin({
        name: "attr",
        init: function(t, e, r, n, i) {
            var o, s, a;
            for (o in this.tween = r, e) a = t.getAttribute(o) || "", (s = this.add(t, "setAttribute", (a || 0) + "", e[o], n, i, 0, 0, o)).op = o, s.b = a, this._props.push(o)
        },
        render: function(t, e) {
            for (var r = e._pt; r;) Jr ? r.set(r.t, r.p, r.b, r) : r.r(t, r.d), r = r._next
        }
    }, {
        name: "endArray",
        init: function(t, e) {
            for (var r = e.length; r--;) this.add(t, r, t[r] || 0, e[r], 0, 0, 0, 0, 0, 1)
        }
    }, Us("roundProps", go), Us("modifiers"), Us("snap", yo)) || Ps;
ds.version = Ko.version = As.version = "3.12.5", sn = 1, Wn() && Ro(), zo.Power0, zo.Power1, zo.Power2, zo.Power3, zo.Power4, zo.Linear, zo.Quad, zo.Cubic, zo.Quart, zo.Quint, zo.Strong, zo.Elastic, zo.Back, zo.SteppedEase, zo.Bounce, zo.Sine, zo.Expo, zo.Circ;
/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
var Gs, Rs, zs, Bs, Fs, Ys, Ns, qs, Hs = {},
    Vs = 180 / Math.PI,
    Ws = Math.PI / 180,
    js = Math.atan2,
    $s = /([A-Z])/g,
    Qs = /(left|right|width|margin|padding|x)/i,
    Zs = /[\s,\(]\S/,
    Ks = {
        autoAlpha: "opacity,visibility",
        scale: "scaleX,scaleY",
        alpha: "opacity"
    },
    Js = function(t, e) {
        return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
    },
    ta = function(t, e) {
        return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
    },
    ea = function(t, e) {
        return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e)
    },
    ra = function(t, e) {
        var r = e.s + e.c * t;
        e.set(e.t, e.p, ~~(r + (r < 0 ? -.5 : .5)) + e.u, e)
    },
    na = function(t, e) {
        return e.set(e.t, e.p, t ? e.e : e.b, e)
    },
    ia = function(t, e) {
        return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e)
    },
    oa = function(t, e, r) {
        return t.style[e] = r
    },
    sa = function(t, e, r) {
        return t.style.setProperty(e, r)
    },
    aa = function(t, e, r) {
        return t._gsap[e] = r
    },
    la = function(t, e, r) {
        return t._gsap.scaleX = t._gsap.scaleY = r
    },
    da = function(t, e, r, n, i) {
        var o = t._gsap;
        o.scaleX = o.scaleY = r, o.renderTransform(i, o)
    },
    fa = function(t, e, r, n, i) {
        var o = t._gsap;
        o[e] = r, o.renderTransform(i, o)
    },
    ua = "transform",
    pa = ua + "Origin",
    ca = function t(e, r) {
        var n = this,
            i = this.target,
            o = i.style,
            s = i._gsap;
        if (e in Hs && o) {
            if (this.tfm = this.tfm || {}, "transform" === e) return Ks.transform.split(",").forEach((function(e) {
                return t.call(n, e, r)
            }));
            if (~(e = Ks[e] || e).indexOf(",") ? e.split(",").forEach((function(t) {
                    return n.tfm[t] = ka(i, t)
                })) : this.tfm[e] = s.x ? s[e] : ka(i, e), e === pa && (this.tfm.zOrigin = s.zOrigin), this.props.indexOf(ua) >= 0) return;
            s.svg && (this.svgo = i.getAttribute("data-svg-origin"), this.props.push(pa, r, "")), e = ua
        }(o || r) && this.props.push(e, r, o[e])
    },
    ha = function(t) {
        t.translate && (t.removeProperty("translate"), t.removeProperty("scale"), t.removeProperty("rotate"))
    },
    _a = function() {
        var t, e, r = this.props,
            n = this.target,
            i = n.style,
            o = n._gsap;
        for (t = 0; t < r.length; t += 3) r[t + 1] ? n[r[t]] = r[t + 2] : r[t + 2] ? i[r[t]] = r[t + 2] : i.removeProperty("--" === r[t].substr(0, 2) ? r[t] : r[t].replace($s, "-$1").toLowerCase());
        if (this.tfm) {
            for (e in this.tfm) o[e] = this.tfm[e];
            o.svg && (o.renderTransform(), n.setAttribute("data-svg-origin", this.svgo || "")), (t = Ns()) && t.isStart || i[ua] || (ha(i), o.zOrigin && i[pa] && (i[pa] += " " + o.zOrigin + "px", o.zOrigin = 0, o.renderTransform()), o.uncache = 1)
        }
    },
    va = function(t, e) {
        var r = {
            target: t,
            props: [],
            revert: _a,
            save: ca
        };
        return t._gsap || As.core.getCache(t), e && e.split(",").forEach((function(t) {
            return r.save(t)
        })), r
    },
    ga = function(t, e) {
        var r = Rs.createElementNS ? Rs.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : Rs.createElement(t);
        return r && r.style ? r : Rs.createElement(t)
    },
    ya = function t(e, r, n) {
        var i = getComputedStyle(e);
        return i[r] || i.getPropertyValue(r.replace($s, "-$1").toLowerCase()) || i.getPropertyValue(r) || !n && t(e, xa(r) || r, 1) || ""
    },
    ma = "O,Moz,ms,Ms,Webkit".split(","),
    xa = function(t, e, r) {
        var n = (e || Fs).style,
            i = 5;
        if (t in n && !r) return t;
        for (t = t.charAt(0).toUpperCase() + t.substr(1); i-- && !(ma[i] + t in n););
        return i < 0 ? null : (3 === i ? "ms" : i >= 0 ? ma[i] : "") + t
    },
    ba = function() {
        "undefined" != typeof window && window.document && (Gs = window, Rs = Gs.document, zs = Rs.documentElement, Fs = ga("div") || {
            style: {}
        }, ga("div"), ua = xa(ua), pa = ua + "Origin", Fs.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", qs = !!xa("perspective"), Ns = As.core.reverting, Bs = 1)
    },
    wa = function t(e) {
        var r, n = ga("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
            i = this.parentNode,
            o = this.nextSibling,
            s = this.style.cssText;
        if (zs.appendChild(n), n.appendChild(this), this.style.display = "block", e) try {
            r = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = t
        } catch (a) {} else this._gsapBBox && (r = this._gsapBBox());
        return i && (o ? i.insertBefore(this, o) : i.appendChild(this)), zs.removeChild(n), this.style.cssText = s, r
    },
    Ma = function(t, e) {
        for (var r = e.length; r--;)
            if (t.hasAttribute(e[r])) return t.getAttribute(e[r])
    },
    Ta = function(t) {
        var e;
        try {
            e = t.getBBox()
        } catch (r) {
            e = wa.call(t, !0)
        }
        return e && (e.width || e.height) || t.getBBox === wa || (e = wa.call(t, !0)), !e || e.width || e.x || e.y ? e : {
            x: +Ma(t, ["x", "cx", "x1"]) || 0,
            y: +Ma(t, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0
        }
    },
    Da = function(t) {
        return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !Ta(t))
    },
    Oa = function(t, e) {
        if (e) {
            var r, n = t.style;
            e in Hs && e !== pa && (e = ua), n.removeProperty ? ("ms" !== (r = e.substr(0, 2)) && "webkit" !== e.substr(0, 6) || (e = "-" + e), n.removeProperty("--" === r ? e : e.replace($s, "-$1").toLowerCase())) : n.removeAttribute(e)
        }
    },
    La = function(t, e, r, n, i, o) {
        var s = new Ms(t._pt, e, r, 0, 1, o ? ia : na);
        return t._pt = s, s.b = n, s.e = i, t._props.push(r), s
    },
    Ia = {
        deg: 1,
        rad: 1,
        turn: 1
    },
    Sa = {
        grid: 1,
        flex: 1
    },
    Xa = function t(e, r, n, i) {
        var o, s, a, l, d = parseFloat(n) || 0,
            f = (n + "").trim().substr((d + "").length) || "px",
            u = Fs.style,
            p = Qs.test(r),
            c = "svg" === e.tagName.toLowerCase(),
            h = (c ? "client" : "offset") + (p ? "Width" : "Height"),
            _ = 100,
            v = "px" === i,
            g = "%" === i;
        if (i === f || !d || Ia[i] || Ia[f]) return d;
        if ("px" !== f && !v && (d = t(e, r, n, "px")), l = e.getCTM && Da(e), (g || "%" === f) && (Hs[r] || ~r.indexOf("adius"))) return o = l ? e.getBBox()[p ? "width" : "height"] : e[h], Oi(g ? d / o * _ : d / 100 * o);
        if (u[p ? "width" : "height"] = _ + (v ? f : i), s = ~r.indexOf("adius") || "em" === i && e.appendChild && !c ? e : e.parentNode, l && (s = (e.ownerSVGElement || {}).parentNode), s && s !== Rs && s.appendChild || (s = Rs.body), (a = s._gsap) && g && a.width && p && a.time === Go.time && !a.uncache) return Oi(d / a.width * _);
        if (!g || "height" !== r && "width" !== r)(g || "%" === f) && !Sa[ya(s, "display")] && (u.position = ya(e, "position")), s === e && (u.position = "static"), s.appendChild(Fs), o = Fs[h], s.removeChild(Fs), u.position = "absolute";
        else {
            var y = e.style[r];
            e.style[r] = _ + i, o = e[h], y ? e.style[r] = y : Oa(e, r)
        }
        return p && g && ((a = Mi(s)).time = Go.time, a.width = s[h]), Oi(v ? o * d / _ : o && d ? _ / o * d : 0)
    },
    ka = function(t, e, r, n) {
        var i;
        return Bs || ba(), e in Ks && "transform" !== e && ~(e = Ks[e]).indexOf(",") && (e = e.split(",")[0]), Hs[e] && "transform" !== e ? (i = Ya(t, n), i = "transformOrigin" !== e ? i[e] : i.svg ? i.origin : Na(ya(t, pa)) + " " + i.zOrigin + "px") : (!(i = t.style[e]) || "auto" === i || n || ~(i + "").indexOf("calc(")) && (i = Ua[e] && Ua[e](t, e, r) || ya(t, e) || Ti(t, e) || ("opacity" === e ? 1 : 0)), r && !~(i + "").trim().indexOf(" ") ? Xa(t, e, i, r) + r : i
    },
    Ca = function(t, e, r, n) {
        if (!r || "none" === r) {
            var i = xa(e, t, 1),
                o = i && ya(t, i, 1);
            o && o !== r ? (e = i, r = o) : "borderColor" === e && (r = ya(t, "borderTopColor"))
        }
        var s, a, l, d, f, u, p, c, h, _, v, g = new Ms(this._pt, t.style, e, 0, 1, gs),
            y = 0,
            m = 0;
        if (g.b = r, g.e = n, r += "", "auto" === (n += "") && (u = t.style[e], t.style[e] = n, n = ya(t, e) || n, u ? t.style[e] = u : Oa(t, e)), Ao(s = [r, n]), n = s[1], l = (r = s[0]).match(Jn) || [], (n.match(Jn) || []).length) {
            for (; a = Jn.exec(n);) p = a[0], h = n.substring(y, a.index), f ? f = (f + 1) % 5 : "rgba(" !== h.substr(-5) && "hsla(" !== h.substr(-5) || (f = 1), p !== (u = l[m++] || "") && (d = parseFloat(u) || 0, v = u.substr((d + "").length), "=" === p.charAt(1) && (p = Ii(d, p) + v), c = parseFloat(p), _ = p.substr((c + "").length), y = Jn.lastIndex - _.length, _ || (_ = _ || kn.units[e] || v, y === n.length && (n += _, g.e += _)), v !== _ && (d = Xa(t, e, u, _) || 0), g._pt = {
                _next: g._pt,
                p: h || 1 === m ? h : ",",
                s: d,
                c: c - d,
                m: f && f < 4 || "zIndex" === e ? Math.round : 0
            });
            g.c = y < n.length ? n.substring(y, n.length) : ""
        } else g.r = "display" === e && "none" === n ? ia : na;
        return ei.test(n) && (g.e = 0), this._pt = g, g
    },
    Pa = {
        top: "0%",
        bottom: "100%",
        left: "0%",
        right: "100%",
        center: "50%"
    },
    Ea = function(t, e) {
        if (e.tween && e.tween._time === e.tween._dur) {
            var r, n, i, o = e.t,
                s = o.style,
                a = e.u,
                l = o._gsap;
            if ("all" === a || !0 === a) s.cssText = "", n = 1;
            else
                for (i = (a = a.split(",")).length; --i > -1;) r = a[i], Hs[r] && (n = 1, r = "transformOrigin" === r ? pa : ua), Oa(o, r);
            n && (Oa(o, ua), l && (l.svg && o.removeAttribute("transform"), Ya(o, 1), l.uncache = 1, ha(s)))
        }
    },
    Ua = {
        clearProps: function(t, e, r, n, i) {
            if ("isFromStart" !== i.data) {
                var o = t._pt = new Ms(t._pt, e, r, 0, 0, Ea);
                return o.u = n, o.pr = -10, o.tween = i, t._props.push(r), 1
            }
        }
    },
    Aa = [1, 0, 0, 1, 0, 0],
    Ga = {},
    Ra = function(t) {
        return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t
    },
    za = function(t) {
        var e = ya(t, ua);
        return Ra(e) ? Aa : e.substr(7).match(Kn).map(Oi)
    },
    Ba = function(t, e) {
        var r, n, i, o, s = t._gsap || Mi(t),
            a = t.style,
            l = za(t);
        return s.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (l = [(i = t.transform.baseVal.consolidate().matrix).a, i.b, i.c, i.d, i.e, i.f]).join(",") ? Aa : l : (l !== Aa || t.offsetParent || t === zs || s.svg || (i = a.display, a.display = "block", (r = t.parentNode) && t.offsetParent || (o = 1, n = t.nextElementSibling, zs.appendChild(t)), l = za(t), i ? a.display = i : Oa(t, "display"), o && (n ? r.insertBefore(t, n) : r ? r.appendChild(t) : zs.removeChild(t))), e && l.length > 6 ? [l[0], l[1], l[4], l[5], l[12], l[13]] : l)
    },
    Fa = function(t, e, r, n, i, o) {
        var s, a, l, d = t._gsap,
            f = i || Ba(t, !0),
            u = d.xOrigin || 0,
            p = d.yOrigin || 0,
            c = d.xOffset || 0,
            h = d.yOffset || 0,
            _ = f[0],
            v = f[1],
            g = f[2],
            y = f[3],
            m = f[4],
            x = f[5],
            b = e.split(" "),
            w = parseFloat(b[0]) || 0,
            M = parseFloat(b[1]) || 0;
        r ? f !== Aa && (a = _ * y - v * g) && (l = w * (-v / a) + M * (_ / a) - (_ * x - v * m) / a, w = w * (y / a) + M * (-g / a) + (g * x - y * m) / a, M = l) : (w = (s = Ta(t)).x + (~b[0].indexOf("%") ? w / 100 * s.width : w), M = s.y + (~(b[1] || b[0]).indexOf("%") ? M / 100 * s.height : M)), n || !1 !== n && d.smooth ? (m = w - u, x = M - p, d.xOffset = c + (m * _ + x * g) - m, d.yOffset = h + (m * v + x * y) - x) : d.xOffset = d.yOffset = 0, d.xOrigin = w, d.yOrigin = M, d.smooth = !!n, d.origin = e, d.originIsAbsolute = !!r, t.style[pa] = "0px 0px", o && (La(o, d, "xOrigin", u, w), La(o, d, "yOrigin", p, M), La(o, d, "xOffset", c, d.xOffset), La(o, d, "yOffset", h, d.yOffset)), t.setAttribute("data-svg-origin", w + " " + M)
    },
    Ya = function(t, e) {
        var r = t._gsap || new Qo(t);
        if ("x" in r && !e && !r.uncache) return r;
        var n, i, o, s, a, l, d, f, u, p, c, h, _, v, g, y, m, x, b, w, M, T, D, O, L, I, S, X, k, C, P, E, U = t.style,
            A = r.scaleX < 0,
            G = "px",
            R = "deg",
            z = getComputedStyle(t),
            B = ya(t, pa) || "0";
        return n = i = o = l = d = f = u = p = c = 0, s = a = 1, r.svg = !(!t.getCTM || !Da(t)), z.translate && ("none" === z.translate && "none" === z.scale && "none" === z.rotate || (U[ua] = ("none" !== z.translate ? "translate3d(" + (z.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + ("none" !== z.rotate ? "rotate(" + z.rotate + ") " : "") + ("none" !== z.scale ? "scale(" + z.scale.split(" ").join(",") + ") " : "") + ("none" !== z[ua] ? z[ua] : "")), U.scale = U.rotate = U.translate = "none"), v = Ba(t, r.svg), r.svg && (r.uncache ? (L = t.getBBox(), B = r.xOrigin - L.x + "px " + (r.yOrigin - L.y) + "px", O = "") : O = !e && t.getAttribute("data-svg-origin"), Fa(t, O || B, !!O || r.originIsAbsolute, !1 !== r.smooth, v)), h = r.xOrigin || 0, _ = r.yOrigin || 0, v !== Aa && (x = v[0], b = v[1], w = v[2], M = v[3], n = T = v[4], i = D = v[5], 6 === v.length ? (s = Math.sqrt(x * x + b * b), a = Math.sqrt(M * M + w * w), l = x || b ? js(b, x) * Vs : 0, (u = w || M ? js(w, M) * Vs + l : 0) && (a *= Math.abs(Math.cos(u * Ws))), r.svg && (n -= h - (h * x + _ * w), i -= _ - (h * b + _ * M))) : (E = v[6], C = v[7], S = v[8], X = v[9], k = v[10], P = v[11], n = v[12], i = v[13], o = v[14], d = (g = js(E, k)) * Vs, g && (O = T * (y = Math.cos(-g)) + S * (m = Math.sin(-g)), L = D * y + X * m, I = E * y + k * m, S = T * -m + S * y, X = D * -m + X * y, k = E * -m + k * y, P = C * -m + P * y, T = O, D = L, E = I), f = (g = js(-w, k)) * Vs, g && (y = Math.cos(-g), P = M * (m = Math.sin(-g)) + P * y, x = O = x * y - S * m, b = L = b * y - X * m, w = I = w * y - k * m), l = (g = js(b, x)) * Vs, g && (O = x * (y = Math.cos(g)) + b * (m = Math.sin(g)), L = T * y + D * m, b = b * y - x * m, D = D * y - T * m, x = O, T = L), d && Math.abs(d) + Math.abs(l) > 359.9 && (d = l = 0, f = 180 - f), s = Oi(Math.sqrt(x * x + b * b + w * w)), a = Oi(Math.sqrt(D * D + E * E)), g = js(T, D), u = Math.abs(g) > 2e-4 ? g * Vs : 0, c = P ? 1 / (P < 0 ? -P : P) : 0), r.svg && (O = t.getAttribute("transform"), r.forceCSS = t.setAttribute("transform", "") || !Ra(ya(t, ua)), O && t.setAttribute("transform", O))), Math.abs(u) > 90 && Math.abs(u) < 270 && (A ? (s *= -1, u += l <= 0 ? 180 : -180, l += l <= 0 ? 180 : -180) : (a *= -1, u += u <= 0 ? 180 : -180)), e = e || r.uncache, r.x = n - ((r.xPercent = n && (!e && r.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-n) ? -50 : 0))) ? t.offsetWidth * r.xPercent / 100 : 0) + G, r.y = i - ((r.yPercent = i && (!e && r.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-i) ? -50 : 0))) ? t.offsetHeight * r.yPercent / 100 : 0) + G, r.z = o + G, r.scaleX = Oi(s), r.scaleY = Oi(a), r.rotation = Oi(l) + R, r.rotationX = Oi(d) + R, r.rotationY = Oi(f) + R, r.skewX = u + R, r.skewY = p + R, r.transformPerspective = c + G, (r.zOrigin = parseFloat(B.split(" ")[2]) || !e && r.zOrigin || 0) && (U[pa] = Na(B)), r.xOffset = r.yOffset = 0, r.force3D = kn.force3D, r.renderTransform = r.svg ? Qa : qs ? $a : Ha, r.uncache = 0, r
    },
    Na = function(t) {
        return (t = t.split(" "))[0] + " " + t[1]
    },
    qa = function(t, e, r) {
        var n = fo(e);
        return Oi(parseFloat(e) + parseFloat(Xa(t, "x", r + "px", n))) + n
    },
    Ha = function(t, e) {
        e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, $a(t, e)
    },
    Va = "0deg",
    Wa = "0px",
    ja = ") ",
    $a = function(t, e) {
        var r = e || this,
            n = r.xPercent,
            i = r.yPercent,
            o = r.x,
            s = r.y,
            a = r.z,
            l = r.rotation,
            d = r.rotationY,
            f = r.rotationX,
            u = r.skewX,
            p = r.skewY,
            c = r.scaleX,
            h = r.scaleY,
            _ = r.transformPerspective,
            v = r.force3D,
            g = r.target,
            y = r.zOrigin,
            m = "",
            x = "auto" === v && t && 1 !== t || !0 === v;
        if (y && (f !== Va || d !== Va)) {
            var b, w = parseFloat(d) * Ws,
                M = Math.sin(w),
                T = Math.cos(w);
            w = parseFloat(f) * Ws, b = Math.cos(w), o = qa(g, o, M * b * -y), s = qa(g, s, -Math.sin(w) * -y), a = qa(g, a, T * b * -y + y)
        }
        _ !== Wa && (m += "perspective(" + _ + ja), (n || i) && (m += "translate(" + n + "%, " + i + "%) "), (x || o !== Wa || s !== Wa || a !== Wa) && (m += a !== Wa || x ? "translate3d(" + o + ", " + s + ", " + a + ") " : "translate(" + o + ", " + s + ja), l !== Va && (m += "rotate(" + l + ja), d !== Va && (m += "rotateY(" + d + ja), f !== Va && (m += "rotateX(" + f + ja), u === Va && p === Va || (m += "skew(" + u + ", " + p + ja), 1 === c && 1 === h || (m += "scale(" + c + ", " + h + ja), g.style[ua] = m || "translate(0, 0)"
    },
    Qa = function(t, e) {
        var r, n, i, o, s, a = e || this,
            l = a.xPercent,
            d = a.yPercent,
            f = a.x,
            u = a.y,
            p = a.rotation,
            c = a.skewX,
            h = a.skewY,
            _ = a.scaleX,
            v = a.scaleY,
            g = a.target,
            y = a.xOrigin,
            m = a.yOrigin,
            x = a.xOffset,
            b = a.yOffset,
            w = a.forceCSS,
            M = parseFloat(f),
            T = parseFloat(u);
        p = parseFloat(p), c = parseFloat(c), (h = parseFloat(h)) && (c += h = parseFloat(h), p += h), p || c ? (p *= Ws, c *= Ws, r = Math.cos(p) * _, n = Math.sin(p) * _, i = Math.sin(p - c) * -v, o = Math.cos(p - c) * v, c && (h *= Ws, s = Math.tan(c - h), i *= s = Math.sqrt(1 + s * s), o *= s, h && (s = Math.tan(h), r *= s = Math.sqrt(1 + s * s), n *= s)), r = Oi(r), n = Oi(n), i = Oi(i), o = Oi(o)) : (r = _, o = v, n = i = 0), (M && !~(f + "").indexOf("px") || T && !~(u + "").indexOf("px")) && (M = Xa(g, "x", f, "px"), T = Xa(g, "y", u, "px")), (y || m || x || b) && (M = Oi(M + y - (y * r + m * i) + x), T = Oi(T + m - (y * n + m * o) + b)), (l || d) && (s = g.getBBox(), M = Oi(M + l / 100 * s.width), T = Oi(T + d / 100 * s.height)), s = "matrix(" + r + "," + n + "," + i + "," + o + "," + M + "," + T + ")", g.setAttribute("transform", s), w && (g.style[ua] = s)
    },
    Za = function(t, e, r, n, i) {
        var o, s, a = 360,
            l = Fn(i),
            d = parseFloat(i) * (l && ~i.indexOf("rad") ? Vs : 1) - n,
            f = n + d + "deg";
        return l && ("short" === (o = i.split("_")[1]) && (d %= a) !== d % 180 && (d += d < 0 ? a : -360), "cw" === o && d < 0 ? d = (d + 36e9) % a - ~~(d / a) * a : "ccw" === o && d > 0 && (d = (d - 36e9) % a - ~~(d / a) * a)), t._pt = s = new Ms(t._pt, e, r, n, d, ta), s.e = f, s.u = "deg", t._props.push(r), s
    },
    Ka = function(t, e) {
        for (var r in e) t[r] = e[r];
        return t
    },
    Ja = function(t, e, r) {
        var n, i, o, s, a, l, d, f = Ka({}, r._gsap),
            u = r.style;
        for (i in f.svg ? (o = r.getAttribute("transform"), r.setAttribute("transform", ""), u[ua] = e, n = Ya(r, 1), Oa(r, ua), r.setAttribute("transform", o)) : (o = getComputedStyle(r)[ua], u[ua] = e, n = Ya(r, 1), u[ua] = o), Hs)(o = f[i]) !== (s = n[i]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(i) < 0 && (a = fo(o) !== (d = fo(s)) ? Xa(r, i, o, d) : parseFloat(o), l = parseFloat(s), t._pt = new Ms(t._pt, n, i, a, l - a, Js), t._pt.u = d || 0, t._props.push(i));
        Ka(n, f)
    };
Di("padding,margin,Width,Radius", (function(t, e) {
    var r = "Top",
        n = "Right",
        i = "Bottom",
        o = "Left",
        s = (e < 3 ? [r, n, i, o] : [r + o, r + n, i + n, i + o]).map((function(r) {
            return e < 2 ? t + r : "border" + r + t
        }));
    Ua[e > 1 ? "border" + t : t] = function(t, e, r, n, i) {
        var o, a;
        if (arguments.length < 4) return o = s.map((function(e) {
            return ka(t, e, r)
        })), 5 === (a = o.join(" ")).split(o[0]).length ? o[0] : a;
        o = (n + "").split(" "), a = {}, s.forEach((function(t, e) {
            return a[t] = o[e] = o[e] || o[(e - 1) / 2 | 0]
        })), t.init(e, a, i)
    }
}));
var tl, el, rl, nl = {
    name: "css",
    register: ba,
    targetTest: function(t) {
        return t.style && t.nodeType
    },
    init: function(t, e, r, n, i) {
        var o, s, a, l, d, f, u, p, c, h, _, v, g, y, m, x, b, w, M, T, D = this._props,
            O = t.style,
            L = r.vars.startAt;
        for (u in Bs || ba(), this.styles = this.styles || va(t), x = this.styles.props, this.tween = r, e)
            if ("autoRound" !== u && (s = e[u], !gi[u] || !ns(u, e, r, n, t, i)))
                if (d = typeof s, f = Ua[u], "function" === d && (d = typeof(s = s.call(r, n, t, i))), "string" === d && ~s.indexOf("random(") && (s = bo(s)), f) f(this, t, u, s, r) && (m = 1);
                else if ("--" === u.substr(0, 2)) o = (getComputedStyle(t).getPropertyValue(u) + "").trim(), s += "", Eo.lastIndex = 0, Eo.test(o) || (p = fo(o), c = fo(s)), c ? p !== c && (o = Xa(t, u, o, c) + c) : p && (s += p), this.add(O, "setProperty", o, s, n, i, 0, 0, u), D.push(u), x.push(u, 0, O[u]);
        else if ("undefined" !== d) {
            if (L && u in L ? (o = "function" == typeof L[u] ? L[u].call(r, n, t, i) : L[u], Fn(o) && ~o.indexOf("random(") && (o = bo(o)), fo(o + "") || "auto" === o || (o += kn.units[u] || fo(ka(t, u)) || ""), "=" === (o + "").charAt(1) && (o = ka(t, u))) : o = ka(t, u), l = parseFloat(o), (h = "string" === d && "=" === s.charAt(1) && s.substr(0, 2)) && (s = s.substr(2)), a = parseFloat(s), u in Ks && ("autoAlpha" === u && (1 === l && "hidden" === ka(t, "visibility") && a && (l = 0), x.push("visibility", 0, O.visibility), La(this, O, "visibility", l ? "inherit" : "hidden", a ? "inherit" : "hidden", !a)), "scale" !== u && "transform" !== u && ~(u = Ks[u]).indexOf(",") && (u = u.split(",")[0])), _ = u in Hs)
                if (this.styles.save(u), v || ((g = t._gsap).renderTransform && !e.parseTransform || Ya(t, e.parseTransform), y = !1 !== e.smoothOrigin && g.smooth, (v = this._pt = new Ms(this._pt, O, ua, 0, 1, g.renderTransform, g, 0, -1)).dep = 1), "scale" === u) this._pt = new Ms(this._pt, g, "scaleY", g.scaleY, (h ? Ii(g.scaleY, h + a) : a) - g.scaleY || 0, Js), this._pt.u = 0, D.push("scaleY", u), u += "X";
                else {
                    if ("transformOrigin" === u) {
                        x.push(pa, 0, O[pa]), w = void 0, M = void 0, T = void 0, w = (b = s).split(" "), M = w[0], T = w[1] || "50%", "top" !== M && "bottom" !== M && "left" !== T && "right" !== T || (b = M, M = T, T = b), w[0] = Pa[M] || M, w[1] = Pa[T] || T, s = w.join(" "), g.svg ? Fa(t, s, 0, y, 0, this) : ((c = parseFloat(s.split(" ")[2]) || 0) !== g.zOrigin && La(this, g, "zOrigin", g.zOrigin, c), La(this, O, u, Na(o), Na(s)));
                        continue
                    }
                    if ("svgOrigin" === u) {
                        Fa(t, s, 1, y, 0, this);
                        continue
                    }
                    if (u in Ga) {
                        Za(this, g, u, l, h ? Ii(l, h + s) : s);
                        continue
                    }
                    if ("smoothOrigin" === u) {
                        La(this, g, "smooth", g.smooth, s);
                        continue
                    }
                    if ("force3D" === u) {
                        g[u] = s;
                        continue
                    }
                    if ("transform" === u) {
                        Ja(this, s, t);
                        continue
                    }
                }
            else u in O || (u = xa(u) || u);
            if (_ || (a || 0 === a) && (l || 0 === l) && !Zs.test(s) && u in O) a || (a = 0), (p = (o + "").substr((l + "").length)) !== (c = fo(s) || (u in kn.units ? kn.units[u] : p)) && (l = Xa(t, u, o, c)), this._pt = new Ms(this._pt, _ ? g : O, u, l, (h ? Ii(l, h + a) : a) - l, _ || "px" !== c && "zIndex" !== u || !1 === e.autoRound ? Js : ra), this._pt.u = c || 0, p !== c && "%" !== c && (this._pt.b = o, this._pt.r = ea);
            else if (u in O) Ca.call(this, t, u, o, h ? h + s : s);
            else if (u in t) this.add(t, u, o || t[u], h ? h + s : s, n, i);
            else if ("parseTransform" !== u) {
                ai(u, s);
                continue
            }
            _ || (u in O ? x.push(u, 0, O[u]) : x.push(u, 1, o || t[u])), D.push(u)
        }
        m && ws(this)
    },
    render: function(t, e) {
        if (e.tween._time || !Ns())
            for (var r = e._pt; r;) r.r(t, r.d), r = r._next;
        else e.styles.revert()
    },
    get: ka,
    aliases: Ks,
    getSetter: function(t, e, r) {
        var n = Ks[e];
        return n && n.indexOf(",") < 0 && (e = n), e in Hs && e !== pa && (t._gsap.x || ka(t, "x")) ? r && Ys === r ? "scale" === e ? la : aa : (Ys = r || {}) && ("scale" === e ? da : fa) : t.style && !qn(t.style[e]) ? oa : ~e.indexOf("-") ? sa : hs(t, e)
    },
    core: {
        _removeProperty: Oa,
        _getMatrix: Ba
    }
};
As.utils.checkPrefix = xa, As.core.getStyleSaver = va, rl = Di((tl = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") + "," + (el = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", (function(t) {
    Hs[t] = 1
})), Di(el, (function(t) {
    kn.units[t] = "deg", Ga[t] = 1
})), Ks[rl[13]] = tl + "," + el, Di("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", (function(t) {
    var e = t.split(":");
    Ks[e[1]] = rl[e[0]]
})), Di("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", (function(t) {
    kn.units[t] = "px"
})), As.registerPlugin(nl);
var il = As.registerPlugin(nl) || As;
il.core.Tween;
const ol = T(r({
        __name: "Anim2",
        setup(t) {
            const e = i(),
                r = v(),
                n = i(!1);
            return r.beforeEach((() => {
                n.value = !0
            })), r.afterEach((() => {
                setTimeout((() => {
                    n.value = !1
                }), 2e3)
            })), s((() => {
                ((t, e) => {
                    var r;
                    il.registerPlugin(Br);
                    const n = () => {
                            il.from("#group-1", {
                                xPercent: 50,
                                delay: .5,
                                opacity: 0
                            }), il.from("#group-2", {
                                yPercent: 50,
                                delay: .5,
                                opacity: 0
                            }), il.from("#group-4", {
                                yPercent: 20,
                                delay: .5,
                                opacity: 0
                            }), il.from("#group-5", {
                                yPercent: -20,
                                delay: .5,
                                opacity: 0
                            }), il.from("#group-6", {
                                scale: 0,
                                transformOrigin: "center",
                                delay: .8
                            }), il.from("#group-7", {
                                yPercent: -20,
                                delay: .5,
                                opacity: 0
                            }), il.from("#group-8", {
                                xPercent: -50,
                                delay: .5,
                                opacity: 0
                            }), il.from("#group-9", {
                                xPercent: -30,
                                delay: .5,
                                opacity: 0
                            }), il.from("#group-10", {
                                scale: 0,
                                delay: .6,
                                transformOrigin: "center",
                                duration: .3
                            }), il.from("#group-11", {
                                scale: 0,
                                delay: 1,
                                transformOrigin: "center",
                                duration: .3
                            }), il.from("#group-12", {
                                opacity: 0,
                                delay: 1,
                                duration: .3
                            }), il.from("#group-13", {
                                opacity: 0,
                                delay: 1,
                                duration: .3
                            }), il.from("#group-14", {
                                opacity: 0,
                                delay: 1,
                                duration: .3
                            }), il.from("#circle-1", {
                                opacity: 0,
                                delay: 1.5,
                                duration: .3
                            }), il.from("#circle-2", {
                                opacity: 0,
                                delay: 1,
                                duration: .3
                            }), il.from("#circle-3", {
                                opacity: 0,
                                delay: 1.5,
                                duration: .3
                            }), il.from("#circle-4", {
                                opacity: 0,
                                delay: 1,
                                duration: .3
                            })
                        },
                        i = il.matchMedia();
                    i.add("all", n);
                    const o = t.value;
                    Br.refresh(!0), Br.saveStyles(o);
                    let s = null;
                    const a = () => {
                        s = il.timeline({
                            scrollTrigger: {
                                trigger: o,
                                scrub: 1,
                                start: "top+=10 top",
                                end: "bottom center",
                                markers: !1,
                                toggleActions: "play pause resume reset"
                            }
                        }), s.to("#group-10", {
                            scale: 0,
                            transformOrigin: "center",
                            duration: .1
                        }, 0), s.to("#group-11", {
                            scale: 0,
                            transformOrigin: "center",
                            duration: .1
                        }, 0), s.to("#group-12", {
                            opacity: 0,
                            duration: .1
                        }, 0), s.to("#group-13", {
                            scale: 0,
                            transformOrigin: "center",
                            duration: .1
                        }, 0), s.to("#group-14", {
                            opacity: 0,
                            duration: .1
                        }, 0), s.to("#circle-1", {
                            opacity: 0,
                            duration: .1
                        }, 0), s.to("#circle-2", {
                            opacity: 0,
                            duration: .1
                        }, 0), s.to("#circle-3", {
                            opacity: 0,
                            duration: .1
                        }, 0), s.to("#circle-4", {
                            opacity: 0,
                            duration: .1
                        }, 0), s.to("#group-6", {
                            scale: 0,
                            opacity: 0,
                            transformOrigin: "center"
                        }, 0), s.to("#group-4", {
                            yPercent: 5
                        }, 0), s.to("#group-5", {
                            yPercent: 5
                        }, 0), s.to("#group-8", {
                            yPercent: 9
                        }, 0), s.to("#group-10", {
                            yPercent: 15
                        }, 0), s.to("#group-9", {
                            yPercent: 9
                        }, 0), s.to("#group-3", {
                            yPercent: 15
                        }, 0), s.to("#group-2", {
                            yPercent: 15
                        }, 0)
                    };
                    o && i.add("all", a), null == (r = Br.getById(e)) || r.kill(!0)
                })(e, "main-page")
            })), (t, r) => (l(), d("div", {
                ref_key: "Player",
                ref: e,
                class: "player-svg"
            }, r[0] || (r[0] = [g('<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1920 1100" enable-background="new 0 0 1920 1100" xml:space="preserve" preserveAspectRatio="none" data-v-e020d835><g id="XMLID_00000032607261491304598240000009568165030599083690_" data-v-e020d835><radialGradient id="XMLID_00000180348372446561771770000003556704898460324030_" cx="-3242.324" cy="2352.1758" r="1" gradientTransform="matrix(-873.4995 163.5026 285.3858 1524.6505 -3502020.75 -3055663.5)" gradientUnits="userSpaceOnUse" data-v-e020d835><stop offset="0" style="stop-color:#7303fc;" data-v-e020d835></stop><stop offset="0.9955" style="stop-color:#07070e83;" data-v-e020d835></stop></radialGradient><rect id="XMLID_00000072974845627974784430000016405516928524835253_" fill="url(#XMLID_00000180348372446561771770000003556704898460324030_)" width="1920" height="1100" data-v-e020d835></rect><g id="group-1" opacity="6.000000e-02" data-v-e020d835><linearGradient id="XMLID_00000126301260790913617590000008711341894688691882_" gradientUnits="userSpaceOnUse" x1="937.4261" y1="109.6882" x2="1295.4608" y2="109.6882" data-v-e020d835><stop offset="0" style="stop-color:#edeff1;" data-v-e020d835></stop><stop offset="1" style="stop-color:#edeff1;stop-opacity:0;" data-v-e020d835></stop></linearGradient><polygon id="XMLID_00000168100742377453731800000004542449147097249453_" fill-rule="evenodd" clip-rule="evenodd" fill="url(#XMLID_00000126301260790913617590000008711341894688691882_)" points="\r\n\t\t\t937.4,2.9 1081.8,2.9 1295.5,216.5 1151.1,216.5 \t\t" data-v-e020d835></polygon><linearGradient id="XMLID_00000093856856934620894710000016928757758583358874_" gradientUnits="userSpaceOnUse" x1="1257.8638" y1="56.1378" x2="1509.1267" y2="56.1378" data-v-e020d835><stop offset="0" style="stop-color:#edeff1;" data-v-e020d835></stop><stop offset="1" style="stop-color:#edeff1;stop-opacity:0;" data-v-e020d835></stop></linearGradient><polygon id="XMLID_00000181083128628715086360000015333439952294249626_" fill-rule="evenodd" clip-rule="evenodd" fill="url(#XMLID_00000093856856934620894710000016928757758583358874_)" points="\r\n\t\t\t1509.1,2.9 1364.8,2.9 1257.9,109.4 1402.2,109.4 \t\t" data-v-e020d835></polygon><linearGradient id="XMLID_00000083088946918025241700000017889096220362987186_" gradientUnits="userSpaceOnUse" x1="1063.0576" y1="-109.485" x2="1063.0576" y2="-2.9196" data-v-e020d835><stop offset="0" style="stop-color:#edeff1;" data-v-e020d835></stop><stop offset="1" style="stop-color:#edeff1;stop-opacity:0;" data-v-e020d835></stop></linearGradient><polygon id="XMLID_00000178175837347965215380000007528136701275344562_" fill-rule="evenodd" clip-rule="evenodd" fill="url(#XMLID_00000083088946918025241700000017889096220362987186_)" points="\r\n\t\t\t1188.7,-109.5 1044.3,-109.5 937.4,-2.9 1081.8,-2.9 \t\t" data-v-e020d835></polygon><linearGradient id="XMLID_00000026143155551476912510000011532708938654465719_" gradientUnits="userSpaceOnUse" x1="1151.0033" y1="-109.6884" x2="1509.2155" y2="-109.6884" data-v-e020d835><stop offset="0" style="stop-color:#edeff1;" data-v-e020d835></stop><stop offset="1" style="stop-color:#edeff1;stop-opacity:0;" data-v-e020d835></stop></linearGradient><polygon id="XMLID_00000137823905358464196030000009377837407948994746_" fill-rule="evenodd" clip-rule="evenodd" fill="url(#XMLID_00000026143155551476912510000011532708938654465719_)" points="\r\n\t\t\t1151,-216.5 1295.4,-216.5 1509.2,-2.9 1364.7,-2.9 \t\t" data-v-e020d835></polygon><linearGradient id="XMLID_00000019656011758042774030000010069252383678811268_" gradientUnits="userSpaceOnUse" x1="1223.3427" y1="-105.441" x2="1223.3427" y2="105.4629" data-v-e020d835><stop offset="0" style="stop-color:#edeff1;" data-v-e020d835></stop><stop offset="1" style="stop-color:#edeff1;stop-opacity:0;" data-v-e020d835></stop></linearGradient><polygon id="XMLID_00000098207597354521328110000014027663396355090307_" fill="url(#XMLID_00000019656011758042774030000010069252383678811268_)" points="\r\n\t\t\t1328.8,30.6 1253.9,105.5 1117.9,-30.6 1192.8,-105.4 \t\t" data-v-e020d835></polygon></g><g id="group-2" opacity="0.3" data-v-e020d835><linearGradient id="XMLID_00000111182045548575760770000016990516188618692264_" gradientUnits="userSpaceOnUse" x1="1020.2727" y1="1213.0519" x2="1873.9229" y2="1213.0519" data-v-e020d835><stop offset="0" style="stop-color:#edeff1;" data-v-e020d835></stop><stop offset="1" style="stop-color:#edeff1;stop-opacity:0;" data-v-e020d835></stop></linearGradient><polygon id="XMLID_00000065049750079866717190000005978136949517886141_" fill-rule="evenodd" clip-rule="evenodd" fill="url(#XMLID_00000111182045548575760770000016990516188618692264_)" points="\r\n\t\t\t1020.3,958.3 1364.5,958.3 1873.9,1467.8 1529.8,1467.8 \t\t" data-v-e020d835></polygon><linearGradient id="XMLID_00000147181056530438076690000015526718712672338049_" gradientUnits="userSpaceOnUse" x1="1784.2814" y1="1085.3735" x2="2383.3591" y2="1085.3735" data-v-e020d835><stop offset="0" style="stop-color:#edeff1;" data-v-e020d835></stop><stop offset="1" style="stop-color:#edeff1;stop-opacity:0;" data-v-e020d835></stop></linearGradient><polygon id="XMLID_00000027580538029166730900000011456063381720705966_" fill-rule="evenodd" clip-rule="evenodd" fill="url(#XMLID_00000147181056530438076690000015526718712672338049_)" points="\r\n\t\t\t2383.4,958.3 2039.1,958.3 1784.3,1212.4 2128.5,1212.4 \t\t" data-v-e020d835></polygon><linearGradient id="XMLID_00000160896688999021377010000006561928036473996433_" gradientUnits="userSpaceOnUse" x1="1319.8116" y1="690.4846" x2="1319.8116" y2="944.5649" data-v-e020d835><stop offset="0" style="stop-color:#edeff1;" data-v-e020d835></stop><stop offset="1" style="stop-color:#edeff1;stop-opacity:0;" data-v-e020d835></stop></linearGradient><polygon id="XMLID_00000146462899184094162410000003120704024845239180_" fill-rule="evenodd" clip-rule="evenodd" fill="url(#XMLID_00000160896688999021377010000006561928036473996433_)" points="\r\n\t\t\t1619.4,690.5 1275.1,690.5 1020.3,944.6 1364.5,944.6 \t\t" data-v-e020d835></polygon><linearGradient id="XMLID_00000164500619718493538880000016974354922217637781_" gradientUnits="userSpaceOnUse" x1="1529.4976" y1="689.9997" x2="2383.5708" y2="689.9997" data-v-e020d835><stop offset="0" style="stop-color:#edeff1;" data-v-e020d835></stop><stop offset="1" style="stop-color:#edeff1;stop-opacity:0;" data-v-e020d835></stop></linearGradient><polygon id="XMLID_00000073693728895887404610000011495551560944151227_" fill-rule="evenodd" clip-rule="evenodd" fill="url(#XMLID_00000164500619718493538880000016974354922217637781_)" points="\r\n\t\t\t1529.5,435.3 1873.7,435.3 2383.6,944.7 2039.1,944.7 \t\t" data-v-e020d835></polygon><linearGradient id="XMLID_00000087414704476984372450000003631101114780829371_" gradientUnits="userSpaceOnUse" x1="1701.9739" y1="700.1266" x2="1701.9739" y2="1202.9777" data-v-e020d835><stop offset="0" style="stop-color:#edeff1;" data-v-e020d835></stop><stop offset="1" style="stop-color:#edeff1;stop-opacity:0;" data-v-e020d835></stop></linearGradient><polygon id="XMLID_00000116916558973389646080000004307540998265580728_" fill="url(#XMLID_00000087414704476984372450000003631101114780829371_)" points="\r\n\t\t\t1953.4,1024.4 1774.9,1203 1450.5,878.7 1629.1,700.1 \t\t" data-v-e020d835></polygon></g><g id="group-3" opacity="0.15" data-v-e020d835><linearGradient id="XMLID_00000008833197106524772250000014332359265245084314_" gradientUnits="userSpaceOnUse" x1="1.1926" y1="268.9164" x2="359.2273" y2="268.9164" data-v-e020d835><stop offset="0" style="stop-color:#edeff1;" data-v-e020d835></stop><stop offset="1" style="stop-color:#edeff1;stop-opacity:0;" data-v-e020d835></stop></linearGradient><polygon id="XMLID_00000182526220337923192560000009419585291470230439_" fill-rule="evenodd" clip-rule="evenodd" fill="url(#XMLID_00000008833197106524772250000014332359265245084314_)" points="\r\n\t\t\t1.2,162.1 145.6,162.1 359.2,375.7 214.9,375.7 \t\t" data-v-e020d835></polygon><linearGradient id="XMLID_00000173125283740625895690000002627515035757521333_" gradientUnits="userSpaceOnUse" x1="321.6302" y1="215.366" x2="572.8932" y2="215.366" data-v-e020d835><stop offset="0" style="stop-color:#edeff1;" data-v-e020d835></stop><stop offset="1" style="stop-color:#edeff1;stop-opacity:0;" data-v-e020d835></stop></linearGradient><polygon id="XMLID_00000140716527013112138450000005687270139942904214_" fill-rule="evenodd" clip-rule="evenodd" fill="url(#XMLID_00000173125283740625895690000002627515035757521333_)" points="\r\n\t\t\t572.9,162.1 428.5,162.1 321.6,268.6 466,268.6 \t\t" data-v-e020d835></polygon><linearGradient id="XMLID_00000061438559913137586490000009992808527311135363_" gradientUnits="userSpaceOnUse" x1="126.8241" y1="49.7432" x2="126.8241" y2="156.3086" data-v-e020d835><stop offset="0" style="stop-color:#edeff1;" data-v-e020d835></stop><stop offset="1" style="stop-color:#edeff1;stop-opacity:0;" data-v-e020d835></stop></linearGradient><polygon id="XMLID_00000082335563997479016110000006790493161529391246_" fill-rule="evenodd" clip-rule="evenodd" fill="url(#XMLID_00000061438559913137586490000009992808527311135363_)" points="\r\n\t\t\t252.5,49.7 108.1,49.7 1.2,156.3 145.6,156.3 \t\t" data-v-e020d835></polygon><linearGradient id="XMLID_00000039855217783013955030000014538444961904235448_" gradientUnits="userSpaceOnUse" x1="214.7698" y1="49.5398" x2="572.9819" y2="49.5398" data-v-e020d835><stop offset="0" style="stop-color:#edeff1;" data-v-e020d835></stop><stop offset="1" style="stop-color:#edeff1;stop-opacity:0;" data-v-e020d835></stop></linearGradient><polygon id="XMLID_00000111909639365042788080000013504560785765879429_" fill-rule="evenodd" clip-rule="evenodd" fill="url(#XMLID_00000039855217783013955030000014538444961904235448_)" points="\r\n\t\t\t214.8,-57.3 359.1,-57.3 573,156.4 428.5,156.4 \t\t" data-v-e020d835></polygon><linearGradient id="XMLID_00000172405826543555359760000004858634647530495679_" gradientUnits="userSpaceOnUse" x1="287.1091" y1="53.7872" x2="287.1091" y2="264.6911" data-v-e020d835><stop offset="0" style="stop-color:#edeff1;" data-v-e020d835></stop><stop offset="1" style="stop-color:#edeff1;stop-opacity:0;" data-v-e020d835></stop></linearGradient><polygon id="XMLID_00000164484551111072465730000011099414021769624724_" fill="url(#XMLID_00000172405826543555359760000004858634647530495679_)" points="\r\n\t\t\t392.6,189.8 317.7,264.7 181.7,128.7 256.5,53.8 \t\t" data-v-e020d835></polygon></g><g id="group-4" opacity="0.3" data-v-e020d835><linearGradient id="XMLID_00000018942010275390543730000014281523573897275322_" gradientUnits="userSpaceOnUse" x1="626.5342" y1="1160.1365" x2="870.5688" y2="1160.1365" data-v-e020d835><stop offset="0" style="stop-color:#edeff1;" data-v-e020d835></stop><stop offset="1" style="stop-color:#edeff1;stop-opacity:0;" data-v-e020d835></stop></linearGradient><polygon id="XMLID_00000018216169712274057440000009232338033321286795_" fill-rule="evenodd" clip-rule="evenodd" fill="url(#XMLID_00000018942010275390543730000014281523573897275322_)" points="\r\n\t\t\t626.5,1087.3 724.9,1087.3 870.6,1233 772.2,1233 \t\t" data-v-e020d835></polygon><linearGradient id="XMLID_00000158731079325420127390000004017565977364854960_" gradientUnits="userSpaceOnUse" x1="844.9428" y1="1123.6368" x2="1016.2023" y2="1123.6368" data-v-e020d835><stop offset="0" style="stop-color:#edeff1;" data-v-e020d835></stop><stop offset="1" style="stop-color:#edeff1;stop-opacity:0;" data-v-e020d835></stop></linearGradient><polygon id="XMLID_00000047771803885568834650000006212626215072287881_" fill-rule="evenodd" clip-rule="evenodd" fill="url(#XMLID_00000158731079325420127390000004017565977364854960_)" points="\r\n\t\t\t1016.2,1087.3 917.8,1087.3 844.9,1160 943.3,1160 \t\t" data-v-e020d835></polygon><linearGradient id="XMLID_00000153693581854045064050000001051077716867501468_" gradientUnits="userSpaceOnUse" x1="712.1639" y1="1010.7492" x2="712.1639" y2="1083.3835" data-v-e020d835><stop offset="0" style="stop-color:#edeff1;" data-v-e020d835></stop><stop offset="1" style="stop-color:#edeff1;stop-opacity:0;" data-v-e020d835></stop></linearGradient><polygon id="XMLID_00000124862742625372963680000007348213192917088658_" fill-rule="evenodd" clip-rule="evenodd" fill="url(#XMLID_00000153693581854045064050000001051077716867501468_)" points="\r\n\t\t\t797.8,1010.7 699.4,1010.7 626.5,1083.4 724.9,1083.4 \t\t" data-v-e020d835></polygon><linearGradient id="XMLID_00000051382020214091563710000000255335371740468115_" gradientUnits="userSpaceOnUse" x1="772.1072" y1="1010.6105" x2="1016.2628" y2="1010.6105" data-v-e020d835><stop offset="0" style="stop-color:#edeff1;" data-v-e020d835></stop><stop offset="1" style="stop-color:#edeff1;stop-opacity:0;" data-v-e020d835></stop></linearGradient><polygon id="XMLID_00000099641476807205476130000000102393290911823026_" fill-rule="evenodd" clip-rule="evenodd" fill="url(#XMLID_00000051382020214091563710000000255335371740468115_)" points="\r\n\t\t\t772.1,937.8 870.5,937.8 1016.3,1083.4 917.8,1083.4 \t\t" data-v-e020d835></polygon><linearGradient id="XMLID_00000121266557543686215350000018165249774686370968_" gradientUnits="userSpaceOnUse" x1="821.4134" y1="1013.5056" x2="821.4134" y2="1157.2566" data-v-e020d835><stop offset="0" style="stop-color:#edeff1;" data-v-e020d835></stop><stop offset="1" style="stop-color:#edeff1;stop-opacity:0;" data-v-e020d835></stop></linearGradient><polygon id="XMLID_00000119092348285467334430000005439908520807648436_" fill="url(#XMLID_00000121266557543686215350000018165249774686370968_)" points="\r\n\t\t\t893.3,1106.2 842.2,1157.3 749.5,1064.5 800.6,1013.5 \t\t" data-v-e020d835></polygon></g><g id="group-5" opacity="0.15" data-v-e020d835><linearGradient id="XMLID_00000099631005275055284260000011555495869345276327_" gradientUnits="userSpaceOnUse" x1="1488.3446" y1="238.5499" x2="1846.3793" y2="238.5499" data-v-e020d835><stop offset="0" style="stop-color:#edeff1;" data-v-e020d835></stop><stop offset="1" style="stop-color:#edeff1;stop-opacity:0;" data-v-e020d835></stop></linearGradient><polygon id="XMLID_00000034792343764099036180000017987212993724998588_" fill-rule="evenodd" clip-rule="evenodd" fill="url(#XMLID_00000099631005275055284260000011555495869345276327_)" points="\r\n\t\t\t1488.3,131.7 1632.7,131.7 1846.4,345.4 1702.1,345.4 \t\t" data-v-e020d835></polygon><linearGradient id="XMLID_00000021105887040320773130000015923999661763688359_" gradientUnits="userSpaceOnUse" x1="1808.7822" y1="184.9995" x2="2060.0452" y2="184.9995" data-v-e020d835><stop offset="0" style="stop-color:#edeff1;" data-v-e020d835></stop><stop offset="1" style="stop-color:#edeff1;stop-opacity:0;" data-v-e020d835></stop></linearGradient><polygon id="XMLID_00000007399643757045456510000015923463768797571461_" fill-rule="evenodd" clip-rule="evenodd" fill="url(#XMLID_00000021105887040320773130000015923999661763688359_)" points="\r\n\t\t\t2060,131.7 1915.7,131.7 1808.8,238.3 1953.1,238.3 \t\t" data-v-e020d835></polygon><linearGradient id="XMLID_00000100346149227851949260000007105878397703281304_" gradientUnits="userSpaceOnUse" x1="1613.9761" y1="19.3767" x2="1613.9761" y2="125.9421" data-v-e020d835><stop offset="0" style="stop-color:#edeff1;" data-v-e020d835></stop><stop offset="1" style="stop-color:#edeff1;stop-opacity:0;" data-v-e020d835></stop></linearGradient><polygon id="XMLID_00000124848790018274972940000018129864827855503497_" fill-rule="evenodd" clip-rule="evenodd" fill="url(#XMLID_00000100346149227851949260000007105878397703281304_)" points="\r\n\t\t\t1739.6,19.4 1595.2,19.4 1488.3,125.9 1632.7,125.9 \t\t" data-v-e020d835></polygon><linearGradient id="XMLID_00000067937910939673954430000013501287504096468379_" gradientUnits="userSpaceOnUse" x1="1701.9218" y1="19.1733" x2="2060.1338" y2="19.1733" data-v-e020d835><stop offset="0" style="stop-color:#edeff1;" data-v-e020d835></stop><stop offset="1" style="stop-color:#edeff1;stop-opacity:0;" data-v-e020d835></stop></linearGradient><polygon id="XMLID_00000122713690196900368000000006419511051209817504_" fill-rule="evenodd" clip-rule="evenodd" fill="url(#XMLID_00000067937910939673954430000013501287504096468379_)" points="\r\n\t\t\t1701.9,-87.7 1846.3,-87.7 2060.1,126 1915.6,126 \t\t" data-v-e020d835></polygon><linearGradient id="XMLID_00000119823382385089200810000018062291553773526677_" gradientUnits="userSpaceOnUse" x1="1774.2611" y1="23.4207" x2="1774.2611" y2="234.3246" data-v-e020d835><stop offset="0" style="stop-color:#edeff1;" data-v-e020d835></stop><stop offset="1" style="stop-color:#edeff1;stop-opacity:0;" data-v-e020d835></stop></linearGradient><polygon id="XMLID_00000070798838486893675080000016025829989529902983_" fill="url(#XMLID_00000119823382385089200810000018062291553773526677_)" points="\r\n\t\t\t1879.7,159.4 1804.8,234.3 1668.8,98.3 1743.7,23.4 \t\t" data-v-e020d835></polygon></g><g id="group-6" opacity="0.2" data-v-e020d835><linearGradient id="XMLID_00000098203074841092270500000009147312926124595097_" gradientUnits="userSpaceOnUse" x1="553.8801" y1="701.978" x2="1049.9532" y2="701.978" data-v-e020d835><stop offset="0" style="stop-color:#edeff1;" data-v-e020d835></stop><stop offset="1" style="stop-color:#edeff1;stop-opacity:0;" data-v-e020d835></stop></linearGradient><polygon id="XMLID_00000126324328298493318050000003634198904705462656_" fill-rule="evenodd" clip-rule="evenodd" fill="url(#XMLID_00000098203074841092270500000009147312926124595097_)" points="\r\n\t\t\t553.9,554 753.9,554 1050,850 850,850 \t\t" data-v-e020d835></polygon><linearGradient id="XMLID_00000155866937644854228540000001391206530247070640_" gradientUnits="userSpaceOnUse" x1="997.8608" y1="627.7815" x2="1345.9969" y2="627.7815" data-v-e020d835><stop offset="0" style="stop-color:#edeff1;" data-v-e020d835></stop><stop offset="1" style="stop-color:#edeff1;stop-opacity:0;" data-v-e020d835></stop></linearGradient><polygon id="XMLID_00000054971710720330992160000014220815734697762999_" fill-rule="evenodd" clip-rule="evenodd" fill="url(#XMLID_00000155866937644854228540000001391206530247070640_)" points="\r\n\t\t\t1346,554 1146,554 997.9,701.6 1197.9,701.6 \t\t" data-v-e020d835></polygon><linearGradient id="XMLID_00000174582589269978320420000001669442050960128393_" gradientUnits="userSpaceOnUse" x1="553.8801" y1="472.1292" x2="902.0162" y2="472.1292" data-v-e020d835><stop offset="0" style="stop-color:#edeff1;" data-v-e020d835></stop><stop offset="1" style="stop-color:#edeff1;stop-opacity:0;" data-v-e020d835></stop></linearGradient><polygon id="XMLID_00000089564741431117686050000016652827462057169058_" fill-rule="evenodd" clip-rule="evenodd" fill="url(#XMLID_00000174582589269978320420000001669442050960128393_)" points="\r\n\t\t\t902,398.3 702,398.3 553.9,546 753.9,546 \t\t" data-v-e020d835></polygon><linearGradient id="XMLID_00000004538692262989283720000011654896732593209508_" gradientUnits="userSpaceOnUse" x1="849.8008" y1="398.0219" x2="1346.1199" y2="398.0219" data-v-e020d835><stop offset="0" style="stop-color:#edeff1;" data-v-e020d835></stop><stop offset="1" style="stop-color:#edeff1;stop-opacity:0;" data-v-e020d835></stop></linearGradient><polygon id="XMLID_00000132807848600322054170000016668253150862821025_" fill-rule="evenodd" clip-rule="evenodd" fill="url(#XMLID_00000004538692262989283720000011654896732593209508_)" points="\r\n\t\t\t849.8,250 1049.8,250 1346.1,546 1145.9,546 \t\t" data-v-e020d835></polygon><linearGradient id="XMLID_00000093890225925393301180000001203627283103125127_" gradientUnits="userSpaceOnUse" x1="950.0303" y1="403.9068" x2="950.0303" y2="696.1236" data-v-e020d835><stop offset="0" style="stop-color:#edeff1;" data-v-e020d835></stop><stop offset="1" style="stop-color:#edeff1;stop-opacity:0;" data-v-e020d835></stop></linearGradient><polygon id="XMLID_00000093856149413409397600000006598707471598936971_" fill="url(#XMLID_00000093890225925393301180000001203627283103125127_)" points="\r\n\t\t\t1096.1,592.4 992.4,696.1 803.9,507.7 907.7,403.9 \t\t" data-v-e020d835></polygon></g><g id="group-7" opacity="5.000000e-02" data-v-e020d835><linearGradient id="XMLID_00000062183541601061220700000002125714095847125175_" gradientUnits="userSpaceOnUse" x1="517.3601" y1="112.1827" x2="761.3947" y2="112.1827" data-v-e020d835><stop offset="0" style="stop-color:#edeff1;" data-v-e020d835></stop><stop offset="1" style="stop-color:#edeff1;stop-opacity:0;" data-v-e020d835></stop></linearGradient><polygon id="XMLID_00000083077375338299564590000008593050819497985976_" fill-rule="evenodd" clip-rule="evenodd" fill="url(#XMLID_00000062183541601061220700000002125714095847125175_)" points="\r\n\t\t\t517.4,39.4 615.8,39.4 761.4,185 663,185 \t\t" data-v-e020d835></polygon><linearGradient id="XMLID_00000031918652320615939450000014318217054935553162_" gradientUnits="userSpaceOnUse" x1="735.7687" y1="75.683" x2="907.0283" y2="75.683" data-v-e020d835><stop offset="0" style="stop-color:#edeff1;" data-v-e020d835></stop><stop offset="1" style="stop-color:#edeff1;stop-opacity:0;" data-v-e020d835></stop></linearGradient><polygon id="XMLID_00000155867376549270030020000017888921148528928691_" fill-rule="evenodd" clip-rule="evenodd" fill="url(#XMLID_00000031918652320615939450000014318217054935553162_)" points="\r\n\t\t\t907,39.4 808.6,39.4 735.8,112 834.2,112 \t\t" data-v-e020d835></polygon><linearGradient id="XMLID_00000067231329411584382920000014080746865127237007_" gradientUnits="userSpaceOnUse" x1="602.9899" y1="-37.2046" x2="602.9899" y2="35.4298" data-v-e020d835><stop offset="0" style="stop-color:#edeff1;" data-v-e020d835></stop><stop offset="1" style="stop-color:#edeff1;stop-opacity:0;" data-v-e020d835></stop></linearGradient><polygon id="XMLID_00000055686979398630212190000001700684774292637630_" fill-rule="evenodd" clip-rule="evenodd" fill="url(#XMLID_00000067231329411584382920000014080746865127237007_)" points="\r\n\t\t\t688.6,-37.2 590.2,-37.2 517.4,35.4 615.8,35.4 \t\t" data-v-e020d835></polygon><linearGradient id="XMLID_00000067939255548187124990000009237000281955827606_" gradientUnits="userSpaceOnUse" x1="662.9332" y1="-37.3433" x2="907.0887" y2="-37.3433" data-v-e020d835><stop offset="0" style="stop-color:#edeff1;" data-v-e020d835></stop><stop offset="1" style="stop-color:#edeff1;stop-opacity:0;" data-v-e020d835></stop></linearGradient><polygon id="XMLID_00000127020708784994057640000009144797599559637159_" fill-rule="evenodd" clip-rule="evenodd" fill="url(#XMLID_00000067939255548187124990000009237000281955827606_)" points="\r\n\t\t\t662.9,-110.2 761.3,-110.2 907.1,35.5 808.6,35.5 \t\t" data-v-e020d835></polygon><linearGradient id="XMLID_00000117675378825826112910000002178618672173812135_" gradientUnits="userSpaceOnUse" x1="712.2393" y1="-34.4483" x2="712.2393" y2="109.3027" data-v-e020d835><stop offset="0" style="stop-color:#edeff1;" data-v-e020d835></stop><stop offset="1" style="stop-color:#edeff1;stop-opacity:0;" data-v-e020d835></stop></linearGradient><polygon id="XMLID_00000141425652078702061220000005417372378441403582_" fill="url(#XMLID_00000117675378825826112910000002178618672173812135_)" points="\r\n\t\t\t784.1,58.3 733.1,109.3 640.4,16.6 691.4,-34.4 \t\t" data-v-e020d835></polygon></g><g id="group-8" opacity="0.2" data-v-e020d835><linearGradient id="XMLID_00000163069786254201692840000011388050211044281000_" gradientUnits="userSpaceOnUse" x1="129.82" y1="620.7177" x2="373.8546" y2="620.7177" data-v-e020d835><stop offset="0" style="stop-color:#edeff1;" data-v-e020d835></stop><stop offset="1" style="stop-color:#edeff1;stop-opacity:0;" data-v-e020d835></stop></linearGradient><polygon id="XMLID_00000049927199801021888250000011594494048976712090_" fill-rule="evenodd" clip-rule="evenodd" fill="url(#XMLID_00000163069786254201692840000011388050211044281000_)" points="\r\n\t\t\t129.8,547.9 228.2,547.9 373.9,693.5 275.5,693.5 \t\t" data-v-e020d835></polygon><linearGradient id="XMLID_00000155839972333438072050000013622454470099556238_" gradientUnits="userSpaceOnUse" x1="348.2286" y1="584.218" x2="519.4882" y2="584.218" data-v-e020d835><stop offset="0" style="stop-color:#edeff1;" data-v-e020d835></stop><stop offset="1" style="stop-color:#edeff1;stop-opacity:0;" data-v-e020d835></stop></linearGradient><polygon id="XMLID_00000109739915430264493850000001247454232283392446_" fill-rule="evenodd" clip-rule="evenodd" fill="url(#XMLID_00000155839972333438072050000013622454470099556238_)" points="\r\n\t\t\t519.5,547.9 421.1,547.9 348.2,620.5 446.6,620.5 \t\t" data-v-e020d835></polygon><linearGradient id="XMLID_00000016781545403372051290000014986795790295635135_" gradientUnits="userSpaceOnUse" x1="215.4498" y1="471.3304" x2="215.4498" y2="543.9648" data-v-e020d835><stop offset="0" style="stop-color:#edeff1;" data-v-e020d835></stop><stop offset="1" style="stop-color:#edeff1;stop-opacity:0;" data-v-e020d835></stop></linearGradient><polygon id="XMLID_00000132081975717963860080000009176346584034061489_" fill-rule="evenodd" clip-rule="evenodd" fill="url(#XMLID_00000016781545403372051290000014986795790295635135_)" points="\r\n\t\t\t301.1,471.3 202.7,471.3 129.8,544 228.2,544 \t\t" data-v-e020d835></polygon><linearGradient id="XMLID_00000155861017682698257260000016315562569056577172_" gradientUnits="userSpaceOnUse" x1="275.3931" y1="471.1918" x2="519.5486" y2="471.1918" data-v-e020d835><stop offset="0" style="stop-color:#edeff1;" data-v-e020d835></stop><stop offset="1" style="stop-color:#edeff1;stop-opacity:0;" data-v-e020d835></stop></linearGradient><polygon id="XMLID_00000104685493851242742560000005302852795891435429_" fill-rule="evenodd" clip-rule="evenodd" fill="url(#XMLID_00000155861017682698257260000016315562569056577172_)" points="\r\n\t\t\t275.4,398.4 373.8,398.4 519.5,544 421.1,544 \t\t" data-v-e020d835></polygon><linearGradient id="XMLID_00000142154345384548823250000011430618479556891520_" gradientUnits="userSpaceOnUse" x1="324.6992" y1="474.0868" x2="324.6992" y2="617.8378" data-v-e020d835><stop offset="0" style="stop-color:#edeff1;" data-v-e020d835></stop><stop offset="1" style="stop-color:#edeff1;stop-opacity:0;" data-v-e020d835></stop></linearGradient><polygon id="XMLID_00000176754498579115746440000012734299081219821228_" fill="url(#XMLID_00000142154345384548823250000011430618479556891520_)" points="\r\n\t\t\t396.6,566.8 345.5,617.8 252.8,525.1 303.9,474.1 \t\t" data-v-e020d835></polygon></g><g id="group-9" opacity="0.2" data-v-e020d835><linearGradient id="XMLID_00000064338204050682043170000011469310174449424778_" gradientUnits="userSpaceOnUse" x1="-531.0922" y1="1280.208" x2="159.2343" y2="1280.208" data-v-e020d835><stop offset="0" style="stop-color:#edeff1;" data-v-e020d835></stop><stop offset="1" style="stop-color:#edeff1;stop-opacity:0;" data-v-e020d835></stop></linearGradient><polygon id="XMLID_00000089551336767721580420000001264661079180065953_" fill-rule="evenodd" clip-rule="evenodd" fill="url(#XMLID_00000064338204050682043170000011469310174449424778_)" points="\r\n\t\t\t-531.1,1074.2 -252.7,1074.2 159.2,1486.2 -119,1486.2 \t\t" data-v-e020d835></polygon><linearGradient id="XMLID_00000164479356510143470270000016321880485921708691_" gradientUnits="userSpaceOnUse" x1="86.7434" y1="1176.9576" x2="571.2033" y2="1176.9576" data-v-e020d835><stop offset="0" style="stop-color:#edeff1;" data-v-e020d835></stop><stop offset="1" style="stop-color:#edeff1;stop-opacity:0;" data-v-e020d835></stop></linearGradient><polygon id="XMLID_00000071537796649379680660000004886625431107111329_" fill-rule="evenodd" clip-rule="evenodd" fill="url(#XMLID_00000164479356510143470270000016321880485921708691_)" points="\r\n\t\t\t571.2,1074.2 292.8,1074.2 86.7,1279.7 365.1,1279.7 \t\t" data-v-e020d835></polygon><linearGradient id="XMLID_00000151536844675546270220000013217810485461701306_" gradientUnits="userSpaceOnUse" x1="-288.8622" y1="857.6204" x2="-288.8622" y2="1063.089" data-v-e020d835><stop offset="0" style="stop-color:#edeff1;" data-v-e020d835></stop><stop offset="1" style="stop-color:#edeff1;stop-opacity:0;" data-v-e020d835></stop></linearGradient><polygon id="XMLID_00000083769815614435686600000004045953085755326642_" fill-rule="evenodd" clip-rule="evenodd" fill="url(#XMLID_00000151536844675546270220000013217810485461701306_)" points="\r\n\t\t\t-46.6,857.6 -325,857.6 -531.1,1063.1 -252.7,1063.1 \t\t" data-v-e020d835></polygon><linearGradient id="XMLID_00000106862008662406114350000007088313538152524200_" gradientUnits="userSpaceOnUse" x1="-119.2943" y1="857.2281" x2="571.3744" y2="857.2281" data-v-e020d835><stop offset="0" style="stop-color:#edeff1;" data-v-e020d835></stop><stop offset="1" style="stop-color:#edeff1;stop-opacity:0;" data-v-e020d835></stop></linearGradient><polygon id="XMLID_00000088120283904898521670000002002676981637309631_" fill-rule="evenodd" clip-rule="evenodd" fill="url(#XMLID_00000106862008662406114350000007088313538152524200_)" points="\r\n\t\t\t-119.3,651.2 159,651.2 571.4,1063.2 292.8,1063.2 \t\t" data-v-e020d835></polygon><linearGradient id="XMLID_00000145033582005260557620000008332347921245611920_" gradientUnits="userSpaceOnUse" x1="20.1832" y1="865.4175" x2="20.1832" y2="1272.0612" data-v-e020d835><stop offset="0" style="stop-color:#edeff1;" data-v-e020d835></stop><stop offset="1" style="stop-color:#edeff1;stop-opacity:0;" data-v-e020d835></stop></linearGradient><polygon id="XMLID_00000044157024783982556290000011639489909247611276_" fill="url(#XMLID_00000145033582005260557620000008332347921245611920_)" points="\r\n\t\t\t223.5,1127.7 79.1,1272.1 -183.1,1009.8 -38.8,865.4 \t\t" data-v-e020d835></polygon></g><g id="group-10" opacity="0.1" data-v-e020d835><linearGradient id="XMLID_00000076581337347585542740000006309152563689153170_" gradientUnits="userSpaceOnUse" x1="-531.0922" y1="866.295" x2="5.2569" y2="866.295" data-v-e020d835><stop offset="0" style="stop-color:#edeff1;" data-v-e020d835></stop><stop offset="1" style="stop-color:#edeff1;stop-opacity:0;" data-v-e020d835></stop></linearGradient><polygon id="XMLID_00000082366427920315174380000014522425310982044805_" fill-rule="evenodd" clip-rule="evenodd" fill="url(#XMLID_00000076581337347585542740000006309152563689153170_)" points="\r\n\t\t\t-531.1,706.3 -314.8,706.3 5.3,1026.3 -210.9,1026.3 \t\t" data-v-e020d835></polygon><linearGradient id="XMLID_00000183962635686504315120000001400413329608427394_" gradientUnits="userSpaceOnUse" x1="-51.0649" y1="786.0745" x2="325.3362" y2="786.0745" data-v-e020d835><stop offset="0" style="stop-color:#edeff1;" data-v-e020d835></stop><stop offset="1" style="stop-color:#edeff1;stop-opacity:0;" data-v-e020d835></stop></linearGradient><polygon id="XMLID_00000148628997369516774050000007560484591957388972_" fill-rule="evenodd" clip-rule="evenodd" fill="url(#XMLID_00000183962635686504315120000001400413329608427394_)" points="\r\n\t\t\t325.3,706.3 109.1,706.3 -51.1,865.9 165.2,865.9 \t\t" data-v-e020d835></polygon><linearGradient id="XMLID_00000111877088303381072980000009791280175997981351_" gradientUnits="userSpaceOnUse" x1="-342.8917" y1="537.9655" x2="-342.8917" y2="697.6043" data-v-e020d835><stop offset="0" style="stop-color:#edeff1;" data-v-e020d835></stop><stop offset="1" style="stop-color:#edeff1;stop-opacity:0;" data-v-e020d835></stop></linearGradient><polygon id="XMLID_00000136395095940109348480000014580609115617437077_" fill-rule="evenodd" clip-rule="evenodd" fill="url(#XMLID_00000111877088303381072980000009791280175997981351_)" points="\r\n\t\t\t-154.7,538 -371,538 -531.1,697.6 -314.8,697.6 \t\t" data-v-e020d835></polygon><linearGradient id="XMLID_00000181082081243094007180000004946738011009001860_" gradientUnits="userSpaceOnUse" x1="-211.1458" y1="537.6608" x2="325.4691" y2="537.6608" data-v-e020d835><stop offset="0" style="stop-color:#edeff1;" data-v-e020d835></stop><stop offset="1" style="stop-color:#edeff1;stop-opacity:0;" data-v-e020d835></stop></linearGradient><polygon id="XMLID_00000096773405576008544710000013063663554326049950_" fill-rule="evenodd" clip-rule="evenodd" fill="url(#XMLID_00000181082081243094007180000004946738011009001860_)" points="\r\n\t\t\t-211.1,377.6 5.1,377.6 325.5,697.7 109,697.7 \t\t" data-v-e020d835></polygon><linearGradient id="XMLID_00000148629378456490188510000014285847129033162158_" gradientUnits="userSpaceOnUse" x1="-102.7788" y1="544.0236" x2="-102.7788" y2="859.9653" data-v-e020d835><stop offset="0" style="stop-color:#edeff1;" data-v-e020d835></stop><stop offset="1" style="stop-color:#edeff1;stop-opacity:0;" data-v-e020d835></stop></linearGradient><polygon id="XMLID_00000124159932364594617950000012526891119346718397_" fill="url(#XMLID_00000148629378456490188510000014285847129033162158_)" points="\r\n\t\t\t55.2,747.8 -57,860 -260.7,656.2 -148.6,544 \t\t" data-v-e020d835></polygon></g><g id="XMLID_00000181071975265899450660000015261891620527509675_" data-v-e020d835><g id="group-10" data-v-e020d835><radialGradient id="XMLID_00000073709345930166596690000000526190024701590676_" cx="1058.3802" cy="130.3793" r="184.8454" gradientTransform="matrix(-0.9962 8.715492e-02 -8.715492e-02 -0.9962 2115.6694 286.511)" gradientUnits="userSpaceOnUse" data-v-e020d835><stop offset="0" style="stop-color:#ffffff;" data-v-e020d835></stop><stop offset="0.3646" style="stop-color:#f8fffe;stop-opacity:0.36;" data-v-e020d835></stop><stop offset="0.7552" style="stop-color:#ffffff;stop-opacity:5e-2;" data-v-e020d835></stop><stop offset="1" style="stop-color:#ffffff;stop-opacity:0;" data-v-e020d835></stop></radialGradient><linearGradient id="XMLID_00000008131256284385898800000013839297401897029304_" gradientUnits="userSpaceOnUse" x1="992.4894" y1="1171.7101" x2="991.8195" y2="671.8884" gradientTransform="matrix(3.464102e-07 -1 -1 -3.464102e-07 1964.1373 1241.0227)" data-v-e020d835><stop offset="0" style="stop-color:#ffffff;stop-opacity:0;" data-v-e020d835></stop><stop offset="0.2604" style="stop-color:#ffffff;" data-v-e020d835></stop><stop offset="0.7656" style="stop-color:#ffffff;" data-v-e020d835></stop><stop offset="0.9896" style="stop-color:#ffffff;stop-opacity:0;" data-v-e020d835></stop></linearGradient><path id="XMLID_00000080888348487790041790000010575135291153230248_" fill="url(#XMLID_00000073709345930166596690000000526190024701590676_)" stroke="url(#XMLID_00000008131256284385898800000013839297401897029304_)" stroke-width="2" d="M1311.4,248.9l-522.8,0" data-v-e020d835></path></g><g id="group-11" data-v-e020d835><linearGradient id="XMLID_00000069383011425168908360000009988817017542455177_" gradientUnits="userSpaceOnUse" x1="880.3902" y1="945.0798" x2="1231.7882" y2="742.0069" gradientTransform="matrix(1 0 0 -1 0 1102)" data-v-e020d835><stop offset="0" style="stop-color:#ffffff;stop-opacity:0;" data-v-e020d835></stop><stop offset="0.2604" style="stop-color:#ffffff;" data-v-e020d835></stop><stop offset="0.7656" style="stop-color:#ffffff;" data-v-e020d835></stop><stop offset="0.9896" style="stop-color:#ffffff;stop-opacity:0;" data-v-e020d835></stop></linearGradient><path id="XMLID_00000114786411902456559590000015329374155508460718_" fill="none" stroke="url(#XMLID_00000069383011425168908360000009988817017542455177_)" stroke-width="2.2059" d="\r\n\t\t\t\tM1215.9,418L907,105.1" data-v-e020d835></path></g><g id="group-12" opacity="0.5" data-v-e020d835><radialGradient id="XMLID_00000013905526147606688550000010505638337715994259_" cx="-3228.0088" cy="2346.7998" r="0.9997" gradientTransform="matrix(277.915 0 0 -277.915 898163.6875 652460.3125)" gradientUnits="userSpaceOnUse" data-v-e020d835><stop offset="0" style="stop-color:#ffffff;" data-v-e020d835></stop><stop offset="0.3646" style="stop-color:#f8fffe;stop-opacity:0.36;" data-v-e020d835></stop><stop offset="0.7552" style="stop-color:#ffffff;stop-opacity:5e-2;" data-v-e020d835></stop><stop offset="1" style="stop-color:#ffffff;stop-opacity:0;" data-v-e020d835></stop></radialGradient><path id="XMLID_00000046325050654765062720000005097807034521901966_" fill="url(#XMLID_00000013905526147606688550000010505638337715994259_)" d="\r\n\t\t\t\tM1051.6,527.3c153.4,0,277.8-124.4,277.8-277.8c0-153.4-124.4-277.8-277.8-277.8C898.2-28.4,773.8,96,773.8,249.5\r\n\t\t\t\tC773.8,402.9,898.2,527.3,1051.6,527.3z" data-v-e020d835></path></g><radialGradient id="circle-1_00000065052901498154880610000001699213235648045215_" cx="-2984.5432" cy="2253.9114" r="0.9997" gradientTransform="matrix(12.004 0 0 -12.004 36877.6445 27303.6465)" gradientUnits="userSpaceOnUse" data-v-e020d835><stop offset="0" style="stop-color:#ffffff;" data-v-e020d835></stop><stop offset="7.291670e-02" style="stop-color:#f8fffe;stop-opacity:0.5965;" data-v-e020d835></stop><stop offset="0.4115" style="stop-color:#ffffff;stop-opacity:0.2;" data-v-e020d835></stop><stop offset="0.7292" style="stop-color:#ffffff;stop-opacity:5e-2;" data-v-e020d835></stop><stop offset="1" style="stop-color:#ffffff;stop-opacity:0;" data-v-e020d835></stop></radialGradient><path id="circle-1" fill="url(#circle-1_00000065052901498154880610000001699213235648045215_)" d="M1051.2,259.7\r\n\t\t\tc6.6,0,12-5.4,12-12c0-6.6-5.4-12-12-12c-6.6,0-12,5.4-12,12C1039.2,254.3,1044.6,259.7,1051.2,259.7z" data-v-e020d835></path><radialGradient id="circle-2_00000089551638250747174780000016809838631242188218_" cx="-2984.6462" cy="2253.7649" r="0.9997" gradientTransform="matrix(12.004 0 0 -12.004 36877.6445 27303.6465)" gradientUnits="userSpaceOnUse" data-v-e020d835><stop offset="0" style="stop-color:#ffffff;" data-v-e020d835></stop><stop offset="7.291670e-02" style="stop-color:#f8fffe;stop-opacity:0.5965;" data-v-e020d835></stop><stop offset="0.4115" style="stop-color:#ffffff;stop-opacity:0.2;" data-v-e020d835></stop><stop offset="0.7292" style="stop-color:#ffffff;stop-opacity:5e-2;" data-v-e020d835></stop><stop offset="1" style="stop-color:#ffffff;stop-opacity:0;" data-v-e020d835></stop></radialGradient><path id="circle-2" fill="url(#circle-2_00000089551638250747174780000016809838631242188218_)" d="M1050,261.5\r\n\t\t\tc6.6,0,12-5.4,12-12c0-6.6-5.4-12-12-12c-6.6,0-12,5.4-12,12C1038,256.1,1043.3,261.5,1050,261.5z" data-v-e020d835></path></g><g id="XMLID_00000052825573392463702100000008704166316593115035_" opacity="0.5" data-v-e020d835><g id="group-13" data-v-e020d835><linearGradient id="XMLID_00000027603007475938057290000007974235698517877945_" gradientUnits="userSpaceOnUse" x1="1522.9216" y1="873.5208" x2="1522.4116" y2="490.0429" gradientTransform="matrix(0.7071 -0.7071 -0.7071 -0.7071 926.825 1985.1779)" data-v-e020d835><stop offset="0" style="stop-color:#ffffff;stop-opacity:0;" data-v-e020d835></stop><stop offset="0.2604" style="stop-color:#ffffff;" data-v-e020d835></stop><stop offset="0.7656" style="stop-color:#ffffff;" data-v-e020d835></stop><stop offset="0.9896" style="stop-color:#ffffff;stop-opacity:0;" data-v-e020d835></stop></linearGradient><path id="XMLID_00000037665716166144107830000008078214427489279669_" fill="none" stroke="url(#XMLID_00000027603007475938057290000007974235698517877945_)" stroke-width="1.5345" d="\r\n\t\t\t\tM1667.4,572.4l-283.6-283.7" data-v-e020d835></path></g><g id="group-14" data-v-e020d835><linearGradient id="XMLID_00000140011449164903679600000014220284044741677448_" gradientUnits="userSpaceOnUse" x1="1435.9215" y1="731.296" x2="1652.7925" y2="605.9634" gradientTransform="matrix(1 0 0 -1 0 1102)" data-v-e020d835><stop offset="0" style="stop-color:#ffffff;stop-opacity:0;" data-v-e020d835></stop><stop offset="0.2604" style="stop-color:#ffffff;" data-v-e020d835></stop><stop offset="0.7656" style="stop-color:#ffffff;" data-v-e020d835></stop><stop offset="0.9896" style="stop-color:#ffffff;stop-opacity:0;" data-v-e020d835></stop></linearGradient><path id="XMLID_00000144336234267190230750000007475216498668224656_" fill="none" stroke="url(#XMLID_00000140011449164903679600000014220284044741677448_)" stroke-width="1.5345" d="\r\n\t\t\t\tM1698.5,435.3h-301.7" data-v-e020d835></path></g><g id="group-14" opacity="0.5" data-v-e020d835><radialGradient id="XMLID_00000039123234944912782270000008811517381895292579_" cx="-3224.7751" cy="2346.2061" r="0.9997" gradientTransform="matrix(213.225 0 0 -213.225 689132.1875 500703.8125)" gradientUnits="userSpaceOnUse" data-v-e020d835><stop offset="0" style="stop-color:#ffffff;" data-v-e020d835></stop><stop offset="0.3646" style="stop-color:#f8fffe;stop-opacity:0.36;" data-v-e020d835></stop><stop offset="0.7552" style="stop-color:#ffffff;stop-opacity:5e-2;" data-v-e020d835></stop><stop offset="1" style="stop-color:#ffffff;stop-opacity:0;" data-v-e020d835></stop></radialGradient><path id="XMLID_00000170260419864938231050000015357198546088091020_" fill="url(#XMLID_00000039123234944912782270000008811517381895292579_)" d="\r\n\t\t\t\tM1480.7,641.8c155.6,34.5,291.1-101,256.6-256.6c-17.6-79.2-79.7-141.3-158.9-158.9c-155.6-34.5-291.1,101-256.6,256.6\r\n\t\t\t\tC1339.4,562,1401.5,624.2,1480.7,641.8z" data-v-e020d835></path></g><radialGradient id="XMLID_00000181780430780631315120000005820666517672010643_" cx="-2909.6787" cy="2240.0208" r="0.9998" gradientTransform="matrix(9.2099 0 0 -9.2099 28326.9258 21064.2949)" gradientUnits="userSpaceOnUse" data-v-e020d835><stop offset="0" style="stop-color:#ffffff;" data-v-e020d835></stop><stop offset="7.291670e-02" style="stop-color:#f8fffe;stop-opacity:0.5965;" data-v-e020d835></stop><stop offset="0.4115" style="stop-color:#ffffff;stop-opacity:0.2;" data-v-e020d835></stop><stop offset="0.7292" style="stop-color:#ffffff;stop-opacity:5e-2;" data-v-e020d835></stop><stop offset="1" style="stop-color:#ffffff;stop-opacity:0;" data-v-e020d835></stop></radialGradient><path id="circle-3" fill="url(#XMLID_00000181780430780631315120000005820666517672010643_)" d="\r\n\t\t\tM1527.6,443.1c6.3,1.1,11.7-4.3,10.7-10.6c-0.6-3.8-3.7-6.9-7.5-7.5c-6.3-1-11.6,4.3-10.6,10.6\r\n\t\t\tC1520.7,439.4,1523.8,442.4,1527.6,443.1z" data-v-e020d835></path><radialGradient id="XMLID_00000061468386741082716910000007340080277821619627_" cx="-2909.6787" cy="2240.0208" r="0.9998" gradientTransform="matrix(9.2099 0 0 -9.2099 28326.9258 21064.2949)" gradientUnits="userSpaceOnUse" data-v-e020d835><stop offset="0" style="stop-color:#ffffff;" data-v-e020d835></stop><stop offset="7.291670e-02" style="stop-color:#f8fffe;stop-opacity:0.5965;" data-v-e020d835></stop><stop offset="0.4115" style="stop-color:#ffffff;stop-opacity:0.2;" data-v-e020d835></stop><stop offset="0.7292" style="stop-color:#ffffff;stop-opacity:5e-2;" data-v-e020d835></stop><stop offset="1" style="stop-color:#ffffff;stop-opacity:0;" data-v-e020d835></stop></radialGradient><path id="circle-4" fill="url(#XMLID_00000061468386741082716910000007340080277821619627_)" d="\r\n\t\t\tM1527.6,443.1c6.3,1.1,11.7-4.3,10.7-10.6c-0.6-3.8-3.7-6.9-7.5-7.5c-6.3-1-11.6,4.3-10.6,10.6\r\n\t\t\tC1520.7,439.4,1523.8,442.4,1527.6,443.1z" data-v-e020d835></path></g><radialGradient id="XMLID_00000097463323563623969470000009482612551357561217_" cx="1376.3191" cy="1615.8511" r="1929.3065" gradientUnits="userSpaceOnUse" data-v-e020d835><stop offset="0.1027" style="stop-color:#07070e;stop-opacity:0.6425;" data-v-e020d835></stop><stop offset="0.4128" style="stop-color:#7303fc;stop-opacity:0.2;" data-v-e020d835></stop><stop offset="0.7971" style="stop-color:#07070e;stop-opacity:0.6;" data-v-e020d835></stop><stop offset="0.8883" style="stop-color:#07070e;" data-v-e020d835></stop></radialGradient><rect id="XMLID_00000056413954275378518860000006757944290713882047_" fill="url(#XMLID_00000097463323563623969470000009482612551357561217_)" width="1920" height="1100" data-v-e020d835></rect></g></svg>', 1)]), 512))
        }
    }), [
        ["__scopeId", "data-v-e020d835"]
    ]),
    sl = T(r({
        name: "MarqueeText",
        props: {
            duration: {
                type: Number,
                default: 15
            },
            repeat: {
                type: Number,
                default: 2
            },
            paused: {
                type: Boolean,
                default: !1
            },
            reverse: {
                type: Boolean,
                default: !1
            }
        },
        setup: (t, {
            slots: e
        }) => () => {
            var r;
            return y("div", {
                class: "wrap"
            }, [y("div", {
                class: [t.paused ? "paused" : void 0, "content"]
            }, Array(t.repeat).fill(y("div", {
                class: "text",
                style: {
                    animationDuration: `${t.duration}s`,
                    animationDirection: t.reverse ? "reverse" : void 0
                }
            }, null == (r = e.default) ? void 0 : r.call(e))))])
        }
    }), [
        ["__scopeId", "data-v-c1f201c1"]
    ]),
    al = {
        class: "staking-dash ai-ts"
    },
    ll = {
        class: "logo-marquee stdash-bottom ai-zs"
    },
    dl = {
        class: "track sdash-4252"
    },
    fl = {
        class: "marquee-logos stads-4342 stadsg-4325 trade-ai scrollbar-flex-content scrollable-containe"
    },
    ul = {
        class: "stdasdh-3242"
    },
    pl = {
        class: "stdash-img-s21 flex items-center"
    },
    cl = {
        class: "flex items-center"
    },
    hl = ["src"],
    _l = {
        class: "mr-1"
    },
    vl = {
        class: "item-ai-trade"
    },
    gl = {
        class: "text-gray5 text-medium text-12"
    },
    yl = ["title"],
    ml = {
        class: "item-ai-trade"
    },
    xl = {
        class: "text-medium text-12 mb-1 text-green-darken"
    },
    bl = {
        class: "item-ai-trade"
    },
    wl = {
        class: "text-gray-darken text-medium text-12 mb-1"
    },
    Ml = {
        class: "text-gray5 text-medium text-12 mb-1"
    },
    Tl = T(r({
        __name: "AiTradeItems2",
        props: {
            maxItems: Number
        },
        setup(t) {
            const e = [{
                    id: 1,
                    coin: "btc",
                    symbol: "BTC/USDT",
                    pnl: "9.6%",
                    amountPnl: "0.02213 BTC",
                    dateOpenString: "16 Sep 2024 06:15:36"
                }, {
                    id: 1,
                    coin: "eth",
                    symbol: "ETH/USDT",
                    pnl: "5.2%",
                    amountPnl: "0.15732 ETH",
                    dateOpenString: "15 Sep 2024 02:15:36"
                }, {
                    id: 1,
                    coin: "btc",
                    symbol: "BTC/USDT",
                    pnl: "8.3%",
                    amountPnl: "0.06323 BTC",
                    dateOpenString: "15 Sep 2024 16:24:14"
                }, {
                    id: 1,
                    coin: "eth",
                    symbol: "ETH/USDT",
                    pnl: "7.4%",
                    amountPnl: "0.73223 ETH",
                    dateOpenString: "14 Sep 2024 22:41:12"
                }, {
                    id: 1,
                    coin: "btc",
                    symbol: "BTC/USDT",
                    pnl: "12.1%",
                    amountPnl: "0.32421 BTC",
                    dateOpenString: "14 Sep 2024 09:14:47"
                }],
                r = t,
                {
                    t: n
                } = m();
            return (t, i) => {
                const o = sl;
                return l(), d("div", al, [f("div", ll, [f("div", dl, [_(o, {
                    repeat: 10,
                    duration: 40
                }, {
                    default: x((() => [f("div", fl, [(l(!0), d(b, null, w(e.slice(0, r.maxItems), (t => (l(), d("div", {
                        class: "scrollbar-ai-item",
                        key: t.id
                    }, [f("div", ul, [f("div", null, [f("div", pl, [f("div", cl, [f("img", {
                        src: `/images/icons/coin/${t.coin}.svg`,
                        width: "18",
                        class: "mr-1",
                        style: {
                            "padding-top": "2px"
                        }
                    }, null, 8, hl), f("h4", _l, M(t.symbol), 1), i[0] || (i[0] = f("p", {
                        class: "text-gray3"
                    }, "|", -1)), i[1] || (i[1] = f("p", {
                        class: "ml-1 help text-gray-darken"
                    }, "OPZ-AI", -1))]), i[2] || (i[2] = f("div", {
                        class: "flex items-center"
                    }, [f("div", {
                        class: "ml-2 stdash-if2"
                    }, [f("i", {
                        class: "fas fa-crosshairs sdash-img"
                    })])], -1))])]), f("div", null, [f("div", vl, [i[3] || (i[3] = f("p", {
                        class: "text-gray-darken text-medium text-12"
                    }, "PNL (%)", -1)), f("p", gl, [f("output", {
                        title: t.pnl,
                        class: "sdash-b13s stdash-21314 text-green-darken"
                    }, M(t.pnl), 9, yl)])]), f("div", ml, [i[4] || (i[4] = f("p", {
                        class: "text-gray-darken text-medium text-12 mb-1"
                    }, "PNL", -1)), f("p", xl, M(t.amountPnl), 1)]), f("div", bl, [f("p", wl, M(p(n)("hiss.date-time")), 1), f("p", Ml, M(t.dateOpenString), 1)])])])])))), 128))])])),
                    _: 1
                })])])])
            }
        }
    }), [
        ["__scopeId", "data-v-0b1981c8"]
    ]);
export {
    Tl as A, sl as _, ol as a, E as b, S as c
};