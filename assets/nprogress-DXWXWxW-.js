import {
    bh as n,
    H as e,
    d as t
} from "./index-CQfCy4Xm.js";
var r = {
    exports: {}
};
/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */
const i = e(r.exports = function() {
        var n, e, t = {
                version: "0.2.0"
            },
            r = t.settings = {
                minimum: .08,
                easing: "ease",
                positionUsing: "",
                speed: 200,
                trickle: !0,
                trickleRate: .02,
                trickleSpeed: 800,
                showSpinner: !0,
                barSelector: '[role="bar"]',
                spinnerSelector: '[role="spinner"]',
                parent: "body",
                template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
            };

        function i(n, e, t) {
            return n < e ? e : n > t ? t : n
        }

        function s(n) {
            return 100 * (-1 + n)
        }

        function o(n, e, t) {
            var i;
            return (i = "translate3d" === r.positionUsing ? {
                transform: "translate3d(" + s(n) + "%,0,0)"
            } : "translate" === r.positionUsing ? {
                transform: "translate(" + s(n) + "%,0)"
            } : {
                "margin-left": s(n) + "%"
            }).transition = "all " + e + "ms " + t, i
        }
        t.configure = function(n) {
            var e, t;
            for (e in n) void 0 !== (t = n[e]) && n.hasOwnProperty(e) && (r[e] = t);
            return this
        }, t.status = null, t.set = function(n) {
            var e = t.isStarted();
            n = i(n, r.minimum, 1), t.status = 1 === n ? null : n;
            var s = t.render(!e),
                c = s.querySelector(r.barSelector),
                l = r.speed,
                f = r.easing;
            return s.offsetWidth, a((function(e) {
                "" === r.positionUsing && (r.positionUsing = t.getPositioningCSS()), u(c, o(n, l, f)), 1 === n ? (u(s, {
                    transition: "none",
                    opacity: 1
                }), s.offsetWidth, setTimeout((function() {
                    u(s, {
                        transition: "all " + l + "ms linear",
                        opacity: 0
                    }), setTimeout((function() {
                        t.remove(), e()
                    }), l)
                }), l)) : setTimeout(e, l)
            })), this
        }, t.isStarted = function() {
            return "number" == typeof t.status
        }, t.start = function() {
            t.status || t.set(0);
            var n = function() {
                setTimeout((function() {
                    t.status && (t.trickle(), n())
                }), r.trickleSpeed)
            };
            return r.trickle && n(), this
        }, t.done = function(n) {
            return n || t.status ? t.inc(.3 + .5 * Math.random()).set(1) : this
        }, t.inc = function(n) {
            var e = t.status;
            return e ? ("number" != typeof n && (n = (1 - e) * i(Math.random() * e, .1, .95)), e = i(e + n, 0, .994), t.set(e)) : t.start()
        }, t.trickle = function() {
            return t.inc(Math.random() * r.trickleRate)
        }, n = 0, e = 0, t.promise = function(r) {
            return r && "resolved" !== r.state() ? (0 === e && t.start(), n++, e++, r.always((function() {
                0 == --e ? (n = 0, t.done()) : t.set((n - e) / n)
            })), this) : this
        }, t.render = function(n) {
            if (t.isRendered()) return document.getElementById("nprogress");
            l(document.documentElement, "nprogress-busy");
            var e = document.createElement("div");
            e.id = "nprogress", e.innerHTML = r.template;
            var i, o = e.querySelector(r.barSelector),
                a = n ? "-100" : s(t.status || 0),
                c = document.querySelector(r.parent);
            return u(o, {
                transition: "all 0 linear",
                transform: "translate3d(" + a + "%,0,0)"
            }), r.showSpinner || (i = e.querySelector(r.spinnerSelector)) && m(i), c != document.body && l(c, "nprogress-custom-parent"), c.appendChild(e), e
        }, t.remove = function() {
            f(document.documentElement, "nprogress-busy"), f(document.querySelector(r.parent), "nprogress-custom-parent");
            var n = document.getElementById("nprogress");
            n && m(n)
        }, t.isRendered = function() {
            return !!document.getElementById("nprogress")
        }, t.getPositioningCSS = function() {
            var n = document.body.style,
                e = "WebkitTransform" in n ? "Webkit" : "MozTransform" in n ? "Moz" : "msTransform" in n ? "ms" : "OTransform" in n ? "O" : "";
            return e + "Perspective" in n ? "translate3d" : e + "Transform" in n ? "translate" : "margin"
        };
        var a = function() {
                var n = [];

                function e() {
                    var t = n.shift();
                    t && t(e)
                }
                return function(t) {
                    n.push(t), 1 == n.length && e()
                }
            }(),
            u = function() {
                var n = ["Webkit", "O", "Moz", "ms"],
                    e = {};

                function t(n) {
                    return n.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, (function(n, e) {
                        return e.toUpperCase()
                    }))
                }

                function r(e) {
                    var t = document.body.style;
                    if (e in t) return e;
                    for (var r, i = n.length, s = e.charAt(0).toUpperCase() + e.slice(1); i--;)
                        if ((r = n[i] + s) in t) return r;
                    return e
                }

                function i(n) {
                    return n = t(n), e[n] || (e[n] = r(n))
                }

                function s(n, e, t) {
                    e = i(e), n.style[e] = t
                }
                return function(n, e) {
                    var t, r, i = arguments;
                    if (2 == i.length)
                        for (t in e) void 0 !== (r = e[t]) && e.hasOwnProperty(t) && s(n, t, r);
                    else s(n, i[1], i[2])
                }
            }();

        function c(n, e) {
            return ("string" == typeof n ? n : d(n)).indexOf(" " + e + " ") >= 0
        }

        function l(n, e) {
            var t = d(n),
                r = t + e;
            c(t, e) || (n.className = r.substring(1))
        }

        function f(n, e) {
            var t, r = d(n);
            c(n, e) && (t = r.replace(" " + e + " ", " "), n.className = t.substring(1, t.length - 1))
        }

        function d(n) {
            return (" " + (n.className || "") + " ").replace(/\s+/gi, " ")
        }

        function m(n) {
            n && n.parentNode && n.parentNode.removeChild(n)
        }
        return t
    }()),
    s = t((({
        router: n
    }) => {
        i.configure({
            showSpinner: !1
        }), n.beforeEach((() => {
            i.start()
        })), n.afterEach((() => {
            i.done()
        }))
    }));
export {
    s as
    default
};