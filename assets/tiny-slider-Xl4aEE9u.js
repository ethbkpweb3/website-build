import {
    m as t,
    y as e,
    I as n,
    h as i,
    cD as a,
    dg as o,
    o as r,
    j as u,
    l as s,
    ck as l,
    r as c,
    p as d,
    X as f,
    dn as v,
    n as p,
    w as m,
    t as h
} from "./index-jdACH0Rc.js";
import {
    _ as g
} from "./_plugin-vue_export-helper-BCo6x5W8.js";
const y = {
        class: "card-info"
    },
    b = g(t({
        __name: "NCard",
        props: {
            radius: {},
            dataImage: {}
        },
        setup(t) {
            const v = t;

            function p(t) {
                return !(!/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t) && !/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4)))
            }
            const m = e(!1);
            (p(navigator.userAgent) || p(navigator.vendor) || window && (null == window ? void 0 : window.opera) && p(window.opera)) && (m.value = !0);
            let h = v.dataImage,
                g = e(0),
                b = e(0),
                x = e(0),
                w = e(0),
                C = e();
            const M = e(null);
            n((() => {
                g.value = M.value.offsetWidth, b.value = M.value.offsetHeight
            }));
            let T = 1500;

            function k() {
                T = 1500
            }

            function E() {
                C.value = setTimeout((() => {
                    x.value = 0, w.value = 0
                }), T)
            }
            const B = m.value ? 1.2 : 1;

            function N(t) {
                let e = 0,
                    n = 0;
                "touchmove" == t.type ? (e = t.touches[0].pageX, n = t.touches[0].pageY) : (e = t.pageX * B, n = t.pageY * B), T += 50, x.value = e - (M.value.getBoundingClientRect().left + window.scrollX) - g.value / 2, w.value = n - (M.value.getBoundingClientRect().top + window.scrollY) - b.value / 2
            }

            function A(t) {}

            function L() {
                clearTimeout(C.value)
            }

            function S() {
                C.value = setTimeout((() => {
                    x.value = 0, w.value = 0
                }), 400)
            }
            const H = i((() => x.value / g.value)),
                D = i((() => w.value / b.value)),
                I = i((() => ({
                    transform: `rotateY(${21*H.value}deg) rotateX(${-21*D.value}deg)`
                }))),
                O = i((() => ({
                    transform: `translateX(${-21*H.value}px) translateY(${-21*D.value}px)`
                }))),
                R = i((() => ({
                    backgroundImage: `url(${h})`
                })));
            return (t, e) => {
                const n = a("touch");
                return o((r(), u("div", {
                    ref_key: "card",
                    ref: M,
                    class: d(["card-wrap", m.value && (0 != f(x) || 0 != f(w)) && "isHover"]),
                    onMousemove: A,
                    onMouseenter: L,
                    onMouseleave: S
                }, [s("div", {
                    class: d(["card-c", m.value && (0 != f(x) || 0 != f(w)) && "isHover"]),
                    style: l([I.value])
                }, [s("div", {
                    class: "card-bg",
                    style: l([O.value, R.value])
                }, null, 4), s("div", y, [c(t.$slots, "header", {}, void 0, !0), c(t.$slots, "content", {}, void 0, !0)])], 6)], 34)), [
                    [n, N, "rollover"],
                    [n, E, "release"],
                    [n, k, "tap"]
                ])
            }
        }
    }), [
        ["__scopeId", "data-v-a5feb66a"]
    ]);
var x = (t => (t[t.Binance = 0] = "Binance", t[t.OKX = 1] = "OKX", t[t.Coinbase = 2] = "Coinbase", t[t.ByBit = 3] = "ByBit", t[t.Deribit = 4] = "Deribit", t[t.KuCoin = 5] = "KuCoin", t[t.UPBIT = 6] = "UPBIT", t[t.Huobi = 7] = "Huobi", t))(x || {});

function w(t) {
    return t in x ? x[t] : void 0
}
const C = [{
    value: 80,
    color: "#28c92b",
    name: "Extreme Greed",
    status: "success"
}, {
    value: 60,
    color: "#a2e838",
    name: "Greed",
    status: "success"
}, {
    value: 40,
    color: "#dbdb1a",
    name: "Neutral",
    status: "warning"
}, {
    value: 20,
    color: "#FF6256",
    name: "Fear",
    status: "warning"
}, {
    value: 0,
    color: "#c90e00",
    name: "Extreme Fear",
    status: "exception"
}];

function M(t) {
    for (const e of C)
        if (t >= e.value) return e.color;
    return "#c90e00"
}

function T(t) {
    for (const e of C)
        if (t >= e.value) return e.status;
    return ""
}

function k(t, e) {
    const n = e - t,
        i = Math.floor(n / 1e3),
        a = Math.floor(n / 6e4),
        o = Math.floor(n / 36e5);
    if (i < 1) return "1s";
    if (i < 60) return `${i}s`;
    if (a < 60) return `${a}m`;
    if (o < 24) return `${o}h`; {
        const e = {
            year: "numeric",
            month: "long",
            day: "numeric"
        };
        return new Date(t).toLocaleDateString(void 0, e)
    }
}
const E = {
        id: "appNCard",
        class: "containerNCard"
    },
    B = {
        key: 0
    },
    N = {
        key: 1
    },
    A = {
        style: {
            "text-decoration": "underline"
        }
    },
    L = t({
        __name: "NCards",
        props: {
            radius: {},
            exchange: {},
            name: {},
            apiKey: {},
            idExchange: {},
            activeExchange: {}
        },
        setup(t) {
            const i = v(),
                a = t;
            n((() => {
                console.log("s" + a.radius)
            }));
            const o = e(w(a.exchange));
            return (t, e) => (r(), u("div", E, [(r(), p(b, {
                key: a.idExchange,
                class: d({
                    "is-selected": (a.activeExchange ? a.activeExchange : f(i).tradeWalletId) === a.idExchange
                }),
                radius: a.radius,
                "data-image": "/images/icons/exchanges/banner/" + o.value.toLowerCase() + ".png"
            }, {
                header: m((() => [s("h1", null, h((f(i).tradeWalletId > 1 ? "" : "+ ") + o.value), 1)])),
                content: m((() => [a.name ? (r(), u("div", B, [s("p", null, "Name: " + h(a.name), 1), s("p", null, " Key: " + h(a.apiKey.substring(0, 12) + (a.apiKey.length > 12 ? "..." : "")), 1)])) : (r(), u("div", N, [s("p", A, "Add " + h(o.value) + " Exchange", 1)]))])),
                _: 1
            }, 8, ["class", "radius", "data-image"]))]))
        }
    });
var S = window,
    H = S.requestAnimationFrame || S.webkitRequestAnimationFrame || S.mozRequestAnimationFrame || S.msRequestAnimationFrame || function(t) {
        return setTimeout(t, 16)
    },
    D = window,
    I = D.cancelAnimationFrame || D.mozCancelAnimationFrame || function(t) {
        clearTimeout(t)
    };

function O() {
    for (var t, e, n, i = arguments[0] || {}, a = 1, o = arguments.length; a < o; a++)
        if (null !== (t = arguments[a]))
            for (e in t) i !== (n = t[e]) && void 0 !== n && (i[e] = n);
    return i
}

function R(t) {
    return ["true", "false"].indexOf(t) >= 0 ? JSON.parse(t) : t
}

function P(t, e, n, i) {
    if (i) try {
        t.setItem(e, n)
    } catch (a) {}
    return n
}

function z() {
    var t = document,
        e = t.body;
    return e || ((e = t.createElement("body")).fake = !0), e
}
var W = document.documentElement;

function j(t) {
    var e = "";
    return t.fake && (e = W.style.overflow, t.style.background = "", t.style.overflow = W.style.overflow = "hidden", W.appendChild(t)), e
}

function q(t, e) {
    t.fake && (t.remove(), W.style.overflow = e, W.offsetHeight)
}

function F(t, e, n, i) {
    "insertRule" in t ? t.insertRule(e + "{" + n + "}", i) : t.addRule(e, n, i)
}

function _(t) {
    return ("insertRule" in t ? t.cssRules : t.rules).length
}

function X(t, e, n) {
    for (var i = 0, a = t.length; i < a; i++) e.call(n, t[i], i)
}
var K = "classList" in document.createElement("_"),
    $ = K ? function(t, e) {
        return t.classList.contains(e)
    } : function(t, e) {
        return t.className.indexOf(e) >= 0
    },
    Y = K ? function(t, e) {
        $(t, e) || t.classList.add(e)
    } : function(t, e) {
        $(t, e) || (t.className += " " + e)
    },
    G = K ? function(t, e) {
        $(t, e) && t.classList.remove(e)
    } : function(t, e) {
        $(t, e) && (t.className = t.className.replace(e, ""))
    };

function V(t, e) {
    return t.hasAttribute(e)
}

function Q(t, e) {
    return t.getAttribute(e)
}

function U(t) {
    return void 0 !== t.item
}

function J(t, e) {
    if (t = U(t) || t instanceof Array ? t : [t], "[object Object]" === Object.prototype.toString.call(e))
        for (var n = t.length; n--;)
            for (var i in e) t[n].setAttribute(i, e[i])
}

function Z(t, e) {
    t = U(t) || t instanceof Array ? t : [t];
    for (var n = (e = e instanceof Array ? e : [e]).length, i = t.length; i--;)
        for (var a = n; a--;) t[i].removeAttribute(e[a])
}

function tt(t) {
    for (var e = [], n = 0, i = t.length; n < i; n++) e.push(t[n]);
    return e
}

function et(t, e) {
    "none" !== t.style.display && (t.style.display = "none")
}

function nt(t, e) {
    "none" === t.style.display && (t.style.display = "")
}

function it(t) {
    return "none" !== window.getComputedStyle(t).display
}

function at(t) {
    if ("string" == typeof t) {
        var e = [t],
            n = t.charAt(0).toUpperCase() + t.substr(1);
        ["Webkit", "Moz", "ms", "O"].forEach((function(i) {
            "ms" === i && "transform" !== t || e.push(i + n)
        })), t = e
    }
    var i = document.createElement("fakeelement");
    t.length;
    for (var a = 0; a < t.length; a++) {
        var o = t[a];
        if (void 0 !== i.style[o]) return o
    }
    return !1
}

function ot(t, e) {
    var n = !1;
    return /^Webkit/.test(t) ? n = "webkit" + e + "End" : /^O/.test(t) ? n = "o" + e + "End" : t && (n = e.toLowerCase() + "end"), n
}
var rt = !1;
try {
    var ut = Object.defineProperty({}, "passive", {
        get: function() {
            rt = !0
        }
    });
    window.addEventListener("test", null, ut)
} catch (vt) {}
var st = !!rt && {
    passive: !0
};

function lt(t, e, n) {
    for (var i in e) {
        var a = ["touchstart", "touchmove"].indexOf(i) >= 0 && !n && st;
        t.addEventListener(i, e[i], a)
    }
}

function ct(t, e) {
    for (var n in e) {
        var i = ["touchstart", "touchmove"].indexOf(n) >= 0 && st;
        t.removeEventListener(n, e[n], i)
    }
}

function dt() {
    return {
        topics: {},
        on: function(t, e) {
            this.topics[t] = this.topics[t] || [], this.topics[t].push(e)
        },
        off: function(t, e) {
            if (this.topics[t])
                for (var n = 0; n < this.topics[t].length; n++)
                    if (this.topics[t][n] === e) {
                        this.topics[t].splice(n, 1);
                        break
                    }
        },
        emit: function(t, e) {
            e.type = t, this.topics[t] && this.topics[t].forEach((function(n) {
                n(e, t)
            }))
        }
    }
}
Object.keys || (Object.keys = function(t) {
    var e = [];
    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.push(n);
    return e
}), "remove" in Element.prototype || (Element.prototype.remove = function() {
    this.parentNode && this.parentNode.removeChild(this)
});
var ft = function(t) {
    t = O({
        container: ".slider",
        mode: "carousel",
        axis: "horizontal",
        items: 1,
        gutter: 0,
        edgePadding: 0,
        fixedWidth: !1,
        autoWidth: !1,
        viewportMax: !1,
        slideBy: 1,
        center: !1,
        controls: !0,
        controlsPosition: "top",
        controlsText: ["prev", "next"],
        controlsContainer: !1,
        prevButton: !1,
        nextButton: !1,
        nav: !0,
        navPosition: "top",
        navContainer: !1,
        navAsThumbnails: !1,
        arrowKeys: !1,
        speed: 300,
        autoplay: !1,
        autoplayPosition: "top",
        autoplayTimeout: 5e3,
        autoplayDirection: "forward",
        autoplayText: ["start", "stop"],
        autoplayHoverPause: !1,
        autoplayButton: !1,
        autoplayButtonOutput: !0,
        autoplayResetOnVisibility: !0,
        animateIn: "tns-fadeIn",
        animateOut: "tns-fadeOut",
        animateNormal: "tns-normal",
        animateDelay: !1,
        loop: !0,
        rewind: !1,
        autoHeight: !1,
        responsive: !1,
        lazyload: !1,
        lazyloadSelector: ".tns-lazy-img",
        touch: !0,
        mouseDrag: !1,
        swipeAngle: 15,
        nested: !1,
        preventActionWhenRunning: !1,
        preventScrollOnTouch: !1,
        freezable: !0,
        onInit: !1,
        useLocalStorage: !0,
        nonce: !1
    }, t || {});
    var e = document,
        n = window,
        i = {
            ENTER: 13,
            SPACE: 32,
            LEFT: 37,
            RIGHT: 39
        },
        a = {},
        o = t.useLocalStorage;
    if (o) {
        var r = navigator.userAgent,
            u = new Date;
        try {
            (a = n.localStorage) ? (a.setItem(u, u), o = a.getItem(u) == u, a.removeItem(u)) : o = !1, o || (a = {})
        } catch (vt) {
            o = !1
        }
        o && (a.tnsApp && a.tnsApp !== r && ["tC", "tPL", "tMQ", "tTf", "t3D", "tTDu", "tTDe", "tADu", "tADe", "tTE", "tAE"].forEach((function(t) {
            a.removeItem(t)
        })), localStorage.tnsApp = r)
    }
    var s = a.tC ? R(a.tC) : P(a, "tC", function() {
            var t = document,
                e = z(),
                n = j(e),
                i = t.createElement("div"),
                a = !1;
            e.appendChild(i);
            try {
                for (var o, r = "(10px * 10)", u = ["calc" + r, "-moz-calc" + r, "-webkit-calc" + r], s = 0; s < 3; s++)
                    if (o = u[s], i.style.width = o, 100 === i.offsetWidth) {
                        a = o.replace(r, "");
                        break
                    }
            } catch (vt) {}
            return e.fake ? q(e, n) : i.remove(), a
        }(), o),
        l = a.tPL ? R(a.tPL) : P(a, "tPL", function() {
            var t, e = document,
                n = z(),
                i = j(n),
                a = e.createElement("div"),
                o = e.createElement("div"),
                r = "";
            a.className = "tns-t-subp2", o.className = "tns-t-ct";
            for (var u = 0; u < 70; u++) r += "<div></div>";
            return o.innerHTML = r, a.appendChild(o), n.appendChild(a), t = Math.abs(a.getBoundingClientRect().left - o.children[67].getBoundingClientRect().left) < 2, n.fake ? q(n, i) : a.remove(), t
        }(), o),
        c = a.tMQ ? R(a.tMQ) : P(a, "tMQ", function() {
            if (window.matchMedia || window.msMatchMedia) return !0;
            var t, e = document,
                n = z(),
                i = j(n),
                a = e.createElement("div"),
                o = e.createElement("style"),
                r = "@media all and (min-width:1px){.tns-mq-test{position:absolute}}";
            return o.type = "text/css", a.className = "tns-mq-test", n.appendChild(o), n.appendChild(a), o.styleSheet ? o.styleSheet.cssText = r : o.appendChild(e.createTextNode(r)), t = window.getComputedStyle ? window.getComputedStyle(a).position : a.currentStyle.position, n.fake ? q(n, i) : a.remove(), "absolute" === t
        }(), o),
        d = a.tTf ? R(a.tTf) : P(a, "tTf", at("transform"), o),
        f = a.t3D ? R(a.t3D) : P(a, "t3D", function(t) {
            if (!t) return !1;
            if (!window.getComputedStyle) return !1;
            var e, n = document,
                i = z(),
                a = j(i),
                o = n.createElement("p"),
                r = t.length > 9 ? "-" + t.slice(0, -9).toLowerCase() + "-" : "";
            return r += "transform", i.insertBefore(o, null), o.style[t] = "translate3d(1px,1px,1px)", e = window.getComputedStyle(o).getPropertyValue(r), i.fake ? q(i, a) : o.remove(), void 0 !== e && e.length > 0 && "none" !== e
        }(d), o),
        v = a.tTDu ? R(a.tTDu) : P(a, "tTDu", at("transitionDuration"), o),
        p = a.tTDe ? R(a.tTDe) : P(a, "tTDe", at("transitionDelay"), o),
        m = a.tADu ? R(a.tADu) : P(a, "tADu", at("animationDuration"), o),
        h = a.tADe ? R(a.tADe) : P(a, "tADe", at("animationDelay"), o),
        g = a.tTE ? R(a.tTE) : P(a, "tTE", ot(v, "Transition"), o),
        y = a.tAE ? R(a.tAE) : P(a, "tAE", ot(m, "Animation"), o),
        b = n.console && "function" == typeof n.console.warn,
        x = ["container", "controlsContainer", "prevButton", "nextButton", "navContainer", "autoplayButton"],
        w = {};
    if (x.forEach((function(n) {
            if ("string" == typeof t[n]) {
                var i = t[n],
                    a = e.querySelector(i);
                if (w[n] = i, !a || !a.nodeName) return void(b && console.warn("Can't find", t[n]));
                t[n] = a
            }
        })), !(t.container.children.length < 1)) {
        var C = t.responsive,
            M = t.nested,
            T = "carousel" === t.mode;
        if (C) {
            0 in C && (t = O(t, C[0]), delete C[0]);
            var k = {};
            for (var E in C) {
                var B = C[E];
                B = "number" == typeof B ? {
                    items: B
                } : B, k[E] = B
            }
            C = k, k = null
        }
        if (T || function t(e) {
                for (var n in e) T || ("slideBy" === n && (e[n] = "page"), "edgePadding" === n && (e[n] = !1), "autoHeight" === n && (e[n] = !1)), "responsive" === n && t(e[n])
            }(t), !T) {
            t.axis = "horizontal", t.slideBy = "page", t.edgePadding = !1;
            var N = t.animateIn,
                A = t.animateOut,
                L = t.animateDelay,
                S = t.animateNormal
        }
        var D, W, K = "horizontal" === t.axis,
            U = e.createElement("div"),
            rt = e.createElement("div"),
            ut = t.container,
            st = ut.parentNode,
            pt = ut.outerHTML,
            mt = ut.children,
            ht = mt.length,
            gt = Dn(),
            yt = !1;
        C && ti(), T && (ut.className += " tns-vpfix");
        var bt, xt, wt, Ct, Mt, Tt = t.autoWidth,
            kt = zn("fixedWidth"),
            Et = zn("edgePadding"),
            Bt = zn("gutter"),
            Nt = Rn(),
            At = zn("center"),
            Lt = Tt ? 1 : Math.floor(zn("items")),
            St = zn("slideBy"),
            Ht = t.viewportMax || t.fixedWidthViewportWidth,
            Dt = zn("arrowKeys"),
            It = zn("speed"),
            Ot = t.rewind,
            Rt = !Ot && t.loop,
            Pt = zn("autoHeight"),
            zt = zn("controls"),
            Wt = zn("controlsText"),
            jt = zn("nav"),
            qt = zn("touch"),
            Ft = zn("mouseDrag"),
            _t = zn("autoplay"),
            Xt = zn("autoplayTimeout"),
            Kt = zn("autoplayText"),
            $t = zn("autoplayHoverPause"),
            Yt = zn("autoplayResetOnVisibility"),
            Gt = (Ct = zn("nonce"), Mt = document.createElement("style"), Ct && Mt.setAttribute("nonce", Ct), document.querySelector("head").appendChild(Mt), Mt.sheet ? Mt.sheet : Mt.styleSheet),
            Vt = t.lazyload,
            Qt = t.lazyloadSelector,
            Ut = [],
            Jt = Rt ? (xt = function() {
                if (Tt || kt && !Ht) return ht - 1;
                var e = kt ? "fixedWidth" : "items",
                    n = [];
                if ((kt || t[e] < ht) && n.push(t[e]), C)
                    for (var i in C) {
                        var a = C[i][e];
                        a && (kt || a < ht) && n.push(a)
                    }
                return n.length || n.push(0), Math.ceil(kt ? Ht / Math.min.apply(null, n) : Math.max.apply(null, n))
            }(), wt = T ? Math.ceil((5 * xt - ht) / 2) : 4 * xt - ht, wt = Math.max(xt, wt), Pn("edgePadding") ? wt + 1 : wt) : 0,
            Zt = T ? ht + 2 * Jt : ht + Jt,
            te = !(!kt && !Tt || Rt),
            ee = kt ? Ei() : null,
            ne = !T || !Rt,
            ie = K ? "left" : "top",
            ae = "",
            oe = "",
            re = kt ? function() {
                return At && !Rt ? ht - 1 : Math.ceil(-ee / (kt + Bt))
            } : Tt ? function() {
                for (var t = 0; t < Zt; t++)
                    if (bt[t] >= -ee) return t
            } : function() {
                return At && T && !Rt ? ht - 1 : Rt || T ? Math.max(0, Zt - Math.ceil(Lt)) : Zt - 1
            },
            ue = Ln(zn("startIndex")),
            se = ue;
        An();
        var le, ce, de, fe = 0,
            ve = Tt ? null : re(),
            pe = t.preventActionWhenRunning,
            me = t.swipeAngle,
            he = !me || "?",
            ge = !1,
            ye = t.onInit,
            be = new dt,
            xe = " tns-slider tns-" + t.mode,
            we = ut.id || (de = window.tnsId, window.tnsId = de ? de + 1 : 1, "tns" + window.tnsId),
            Ce = zn("disable"),
            Me = !1,
            Te = t.freezable,
            ke = !(!Te || Tt) && Zn(),
            Ee = !1,
            Be = {
                click: Oi,
                keydown: function(t) {
                    t = _i(t);
                    var e = [i.LEFT, i.RIGHT].indexOf(t.keyCode);
                    e >= 0 && (0 === e ? Ve.disabled || Oi(t, -1) : Qe.disabled || Oi(t, 1))
                }
            },
            Ne = {
                click: function(t) {
                    if (ge) {
                        if (pe) return;
                        Di()
                    }
                    var e = Xi(t = _i(t));
                    for (; e !== tn && !V(e, "data-nav");) e = e.parentNode;
                    if (V(e, "data-nav")) {
                        var n = on = Number(Q(e, "data-nav")),
                            i = kt || Tt ? n * ht / nn : n * Lt;
                        Ii(Re ? n : Math.min(Math.ceil(i), ht - 1), t), rn === n && (fn && ji(), on = -1)
                    }
                },
                keydown: function(t) {
                    t = _i(t);
                    var n = e.activeElement;
                    if (!V(n, "data-nav")) return;
                    var a = [i.LEFT, i.RIGHT, i.ENTER, i.SPACE].indexOf(t.keyCode),
                        o = Number(Q(n, "data-nav"));
                    a >= 0 && (0 === a ? o > 0 && Fi(Ze[o - 1]) : 1 === a ? o < nn - 1 && Fi(Ze[o + 1]) : (on = o, Ii(o, t)))
                }
            },
            Ae = {
                mouseover: function() {
                    fn && (Pi(), vn = !0)
                },
                mouseout: function() {
                    vn && (Ri(), vn = !1)
                }
            },
            Le = {
                visibilitychange: function() {
                    e.hidden ? fn && (Pi(), mn = !0) : mn && (Ri(), mn = !1)
                }
            },
            Se = {
                keydown: function(t) {
                    t = _i(t);
                    var e = [i.LEFT, i.RIGHT].indexOf(t.keyCode);
                    e >= 0 && Oi(t, 0 === e ? -1 : 1)
                }
            },
            He = {
                touchstart: Gi,
                touchmove: Vi,
                touchend: Ui,
                touchcancel: Ui
            },
            De = {
                mousedown: Gi,
                mousemove: Vi,
                mouseup: Ui,
                mouseleave: Ui
            },
            Ie = Pn("controls"),
            Oe = Pn("nav"),
            Re = !!Tt || t.navAsThumbnails,
            Pe = Pn("autoplay"),
            ze = Pn("touch"),
            We = Pn("mouseDrag"),
            je = "tns-slide-active",
            qe = "tns-slide-cloned",
            Fe = "tns-complete",
            _e = {
                load: function(t) {
                    li(Xi(t))
                },
                error: function(t) {
                    e = Xi(t), Y(e, "failed"), ci(e);
                    var e
                }
            },
            Xe = "force" === t.preventScrollOnTouch;
        if (Ie) var Ke, $e, Ye = t.controlsContainer,
            Ge = t.controlsContainer ? t.controlsContainer.outerHTML : "",
            Ve = t.prevButton,
            Qe = t.nextButton,
            Ue = t.prevButton ? t.prevButton.outerHTML : "",
            Je = t.nextButton ? t.nextButton.outerHTML : "";
        if (Oe) var Ze, tn = t.navContainer,
            en = t.navContainer ? t.navContainer.outerHTML : "",
            nn = Tt ? ht : Zi(),
            an = 0,
            on = -1,
            rn = Hn(),
            un = rn,
            sn = "tns-nav-active",
            ln = "Carousel Page ",
            cn = " (Current Slide)";
        if (Pe) var dn, fn, vn, pn, mn, hn = "forward" === t.autoplayDirection ? 1 : -1,
            gn = t.autoplayButton,
            yn = t.autoplayButton ? t.autoplayButton.outerHTML : "",
            bn = ["<span class='tns-visually-hidden'>", " animation</span>"];
        if (ze || We) var xn, wn, Cn = {},
            Mn = {},
            Tn = !1,
            kn = K ? function(t, e) {
                return t.x - e.x
            } : function(t, e) {
                return t.y - e.y
            };
        Tt || Nn(Ce || ke), d && (ie = d, ae = "translate", f ? (ae += K ? "3d(" : "3d(0px, ", oe = K ? ", 0px, 0px)" : ", 0px)") : (ae += K ? "X(" : "Y(", oe = ")")), T && (ut.className = ut.className.replace("tns-vpfix", "")),
            function() {
                Pn("gutter"), U.className = "tns-outer", rt.className = "tns-inner", U.id = we + "-ow", rt.id = we + "-iw", "" === ut.id && (ut.id = we);
                xe += l || Tt ? " tns-subpixel" : " tns-no-subpixel", xe += s ? " tns-calc" : " tns-no-calc", Tt && (xe += " tns-autowidth");
                xe += " tns-" + t.axis, ut.className += xe, T ? ((D = e.createElement("div")).id = we + "-mw", D.className = "tns-ovh", U.appendChild(D), D.appendChild(rt)) : U.appendChild(rt);
                if (Pt) {
                    (D || rt).className += " tns-ah"
                }
                if (st.insertBefore(U, ut), rt.appendChild(ut), X(mt, (function(t, e) {
                        Y(t, "tns-item"), t.id || (t.id = we + "-item" + e), !T && S && Y(t, S), J(t, {
                            "aria-hidden": "true",
                            tabindex: "-1"
                        })
                    })), Jt) {
                    for (var n = e.createDocumentFragment(), i = e.createDocumentFragment(), a = Jt; a--;) {
                        var o = a % ht,
                            r = mt[o].cloneNode(!0);
                        if (Y(r, qe), Z(r, "id"), i.insertBefore(r, i.firstChild), T) {
                            var u = mt[ht - 1 - o].cloneNode(!0);
                            Y(u, qe), Z(u, "id"), n.appendChild(u)
                        }
                    }
                    ut.insertBefore(n, ut.firstChild), ut.appendChild(i), mt = ut.children
                }
            }(),
            function() {
                if (!T)
                    for (var e = ue, i = ue + Math.min(ht, Lt); e < i; e++) {
                        var a = mt[e];
                        a.style.left = 100 * (e - ue) / Lt + "%", Y(a, N), G(a, S)
                    }
                K && (l || Tt ? (F(Gt, "#" + we + " > .tns-item", "font-size:" + n.getComputedStyle(mt[0]).fontSize + ";", _(Gt)), F(Gt, "#" + we, "font-size:0;", _(Gt))) : T && X(mt, (function(t, e) {
                    t.style.marginLeft = function(t) {
                        return s ? s + "(" + 100 * t + "% / " + Zt + ")" : 100 * t / Zt + "%"
                    }(e)
                })));
                if (c) {
                    if (v) {
                        var o = D && t.autoHeight ? Xn(t.speed) : "";
                        F(Gt, "#" + we + "-mw", o, _(Gt))
                    }
                    o = Wn(t.edgePadding, t.gutter, t.fixedWidth, t.speed, t.autoHeight), F(Gt, "#" + we + "-iw", o, _(Gt)), T && (o = K && !Tt ? "width:" + jn(t.fixedWidth, t.gutter, t.items) + ";" : "", v && (o += Xn(It)), F(Gt, "#" + we, o, _(Gt))), o = K && !Tt ? qn(t.fixedWidth, t.gutter, t.items) : "", t.gutter && (o += Fn(t.gutter)), T || (v && (o += Xn(It)), m && (o += Kn(It))), o && F(Gt, "#" + we + " > .tns-item", o, _(Gt))
                } else {
                    T && Pt && (D.style[v] = It / 1e3 + "s"), rt.style.cssText = Wn(Et, Bt, kt, Pt), T && K && !Tt && (ut.style.width = jn(kt, Bt, Lt));
                    o = K && !Tt ? qn(kt, Bt, Lt) : "";
                    Bt && (o += Fn(Bt)), o && F(Gt, "#" + we + " > .tns-item", o, _(Gt))
                }
                if (C && c)
                    for (var r in C) {
                        r = parseInt(r);
                        var u = C[r],
                            d = (o = "", ""),
                            f = "",
                            p = "",
                            h = "",
                            g = Tt ? null : zn("items", r),
                            y = zn("fixedWidth", r),
                            b = zn("speed", r),
                            x = zn("edgePadding", r),
                            w = zn("autoHeight", r),
                            M = zn("gutter", r);
                        v && D && zn("autoHeight", r) && "speed" in u && (d = "#" + we + "-mw{" + Xn(b) + "}"), ("edgePadding" in u || "gutter" in u) && (f = "#" + we + "-iw{" + Wn(x, M, y, b, w) + "}"), T && K && !Tt && ("fixedWidth" in u || "items" in u || kt && "gutter" in u) && (p = "width:" + jn(y, M, g) + ";"), v && "speed" in u && (p += Xn(b)), p && (p = "#" + we + "{" + p + "}"), ("fixedWidth" in u || kt && "gutter" in u || !T && "items" in u) && (h += qn(y, M, g)), "gutter" in u && (h += Fn(M)), !T && "speed" in u && (v && (h += Xn(b)), m && (h += Kn(b))), h && (h = "#" + we + " > .tns-item{" + h + "}"), (o = d + f + p + h) && Gt.insertRule("@media (min-width: " + r / 16 + "em) {" + o + "}", Gt.cssRules.length)
                    }
            }(), $n();
        var En = function() {
                return Rt ? T ? function() {
                    var t = fe,
                        e = ve;
                    t += St, e -= St, Et ? (t += 1, e -= 1) : kt && (Nt + Bt) % (kt + Bt) && (e -= 1), Jt && (ue > e ? ue -= ht : ue < t && (ue += ht))
                } : function() {
                    if (ue > ve)
                        for (; ue >= fe + ht;) ue -= ht;
                    else if (ue < fe)
                        for (; ue <= ve - ht;) ue += ht
                } : function() {
                    ue = Math.max(fe, Math.min(ve, ue))
                }
            }(),
            Bn = function() {
                return T ? function() {
                    var t, e, n, i, a, o, r, u, s, l, c;
                    Ti(ut, ""), v || !It ? (Ai(), It && it(ut) || Di()) : (t = ut, e = ie, n = ae, i = oe, a = Bi(), o = It, r = Di, u = Math.min(o, 10), s = a.indexOf("%") >= 0 ? "%" : "px", a = a.replace(s, ""), l = Number(t.style[e].replace(n, "").replace(i, "").replace(s, "")), c = (a - l) / o * u, setTimeout((function a() {
                        o -= u, l += c, t.style[e] = n + l + s + i, o > 0 ? setTimeout(a, u) : r()
                    }), u)), K || Ji()
                } : function() {
                    Ut = [];
                    var t = {};
                    t[g] = t[y] = Di, ct(mt[se], t), lt(mt[ue], t), Li(se, N, A, !0), Li(ue, S, N), g && y && It && it(ut) || Di()
                }
            }();
        return {
            version: "2.9.4",
            getInfo: ea,
            events: be,
            goTo: Ii,
            play: function() {
                _t && !fn && (Wi(), pn = !1)
            },
            pause: function() {
                fn && (ji(), pn = !0)
            },
            isOn: yt,
            updateSliderHeight: hi,
            refresh: $n,
            destroy: function() {
                if (Gt.disabled = !0, Gt.ownerNode && Gt.ownerNode.remove(), ct(n, {
                        resize: Un
                    }), Dt && ct(e, Se), Ye && ct(Ye, Be), tn && ct(tn, Ne), ct(ut, Ae), ct(ut, Le), gn && ct(gn, {
                        click: qi
                    }), _t && clearInterval(dn), T && g) {
                    var i = {};
                    i[g] = Di, ct(ut, i)
                }
                qt && ct(ut, He), Ft && ct(ut, De);
                var a = [pt, Ge, Ue, Je, en, yn];
                for (var o in x.forEach((function(e, n) {
                        var i = "container" === e ? U : t[e];
                        if ("object" == typeof i && i) {
                            var o = !!i.previousElementSibling && i.previousElementSibling,
                                r = i.parentNode;
                            i.outerHTML = a[n], t[e] = o ? o.nextElementSibling : r.firstElementChild
                        }
                    })), x = N = A = L = S = K = U = rt = ut = st = pt = mt = ht = W = gt = Tt = kt = Et = Bt = Nt = Lt = St = Ht = Dt = It = Ot = Rt = Pt = Gt = Vt = bt = Ut = Jt = Zt = te = ee = ne = ie = ae = oe = re = ue = se = fe = ve = me = he = ge = ye = be = xe = we = Ce = Me = Te = ke = Ee = Be = Ne = Ae = Le = Se = He = De = Ie = Oe = Re = Pe = ze = We = je = Fe = _e = le = zt = Wt = Ye = Ge = Ve = Qe = Ke = $e = jt = tn = en = Ze = nn = an = on = rn = un = sn = ln = cn = _t = Xt = hn = Kt = $t = gn = yn = Yt = bn = dn = fn = vn = pn = mn = Cn = Mn = xn = Tn = wn = kn = qt = Ft = null, this) "rebuild" !== o && (this[o] = null);
                yt = !1
            },
            rebuild: function() {
                return ft(O(t, w))
            }
        }
    }

    function Nn(t) {
        t && (zt = jt = qt = Ft = Dt = _t = $t = Yt = !1)
    }

    function An() {
        for (var t = T ? ue - Jt : ue; t < 0;) t += ht;
        return t % ht + 1
    }

    function Ln(t) {
        return t = t ? Math.max(0, Math.min(Rt ? ht - 1 : ht - Lt, t)) : 0, T ? t + Jt : t
    }

    function Sn(t) {
        for (null == t && (t = ue), T && (t -= Jt); t < 0;) t += ht;
        return Math.floor(t % ht)
    }

    function Hn() {
        var t, e = Sn();
        return t = Re ? e : kt || Tt ? Math.ceil((e + 1) * nn / ht - 1) : Math.floor(e / Lt), !Rt && T && ue === ve && (t = nn - 1), t
    }

    function Dn() {
        return n.innerWidth || e.documentElement.clientWidth || e.body.clientWidth
    }

    function In(t) {
        return "top" === t ? "afterbegin" : "beforeend"
    }

    function On(t) {
        if (null != t) {
            var n, i, a = e.createElement("div");
            return t.appendChild(a), i = (n = a.getBoundingClientRect()).right - n.left, a.remove(), i || On(t.parentNode)
        }
    }

    function Rn() {
        var t = Et ? 2 * Et - Bt : 0;
        return On(st) - t
    }

    function Pn(e) {
        if (t[e]) return !0;
        if (C)
            for (var n in C)
                if (C[n][e]) return !0;
        return !1
    }

    function zn(e, n) {
        if (null == n && (n = gt), "items" === e && kt) return Math.floor((Nt + Bt) / (kt + Bt)) || 1;
        var i = t[e];
        if (C)
            for (var a in C) n >= parseInt(a) && e in C[a] && (i = C[a][e]);
        return "slideBy" === e && "page" === i && (i = zn("items")), T || "slideBy" !== e && "items" !== e || (i = Math.floor(i)), i
    }

    function Wn(t, e, n, i, a) {
        var o = "";
        if (void 0 !== t) {
            var r = t;
            e && (r -= e), o = K ? "margin: 0 " + r + "px 0 " + t + "px;" : "margin: " + t + "px 0 " + r + "px 0;"
        } else if (e && !n) {
            var u = "-" + e + "px";
            o = "margin: 0 " + (K ? u + " 0 0" : "0 " + u + " 0") + ";"
        }
        return !T && a && v && i && (o += Xn(i)), o
    }

    function jn(t, e, n) {
        return t ? (t + e) * Zt + "px" : s ? s + "(" + 100 * Zt + "% / " + n + ")" : 100 * Zt / n + "%"
    }

    function qn(t, e, n) {
        var i;
        if (t) i = t + e + "px";
        else {
            T || (n = Math.floor(n));
            var a = T ? Zt : n;
            i = s ? s + "(100% / " + a + ")" : 100 / a + "%"
        }
        return i = "width:" + i, "inner" !== M ? i + ";" : i + " !important;"
    }

    function Fn(t) {
        var e = "";
        !1 !== t && (e = (K ? "padding-" : "margin-") + (K ? "right" : "bottom") + ": " + t + "px;");
        return e
    }

    function _n(t, e) {
        var n = t.substring(0, t.length - e).toLowerCase();
        return n && (n = "-" + n + "-"), n
    }

    function Xn(t) {
        return _n(v, 18) + "transition-duration:" + t / 1e3 + "s;"
    }

    function Kn(t) {
        return _n(m, 17) + "animation-duration:" + t / 1e3 + "s;"
    }

    function $n() {
        if (Pn("autoHeight") || Tt || !K) {
            var t = ut.querySelectorAll("img");
            X(t, (function(t) {
                var e = t.src;
                Vt || (e && e.indexOf("data:image") < 0 ? (t.src = "", lt(t, _e), Y(t, "loading"), t.src = e) : li(t))
            })), H((function() {
                vi(tt(t), (function() {
                    le = !0
                }))
            })), Pn("autoHeight") && (t = di(ue, Math.min(ue + Lt - 1, Zt - 1))), Vt ? Yn() : H((function() {
                vi(tt(t), Yn)
            }))
        } else T && Ni(), Vn(), Qn()
    }

    function Yn() {
        if (Tt && ht > 1) {
            var t = Rt ? ue : ht - 1;
            ! function e() {
                var n = mt[t].getBoundingClientRect().left,
                    i = mt[t - 1].getBoundingClientRect().right;
                Math.abs(n - i) <= 1 ? Gn() : setTimeout((function() {
                    e()
                }), 16)
            }()
        } else Gn()
    }

    function Gn() {
        K && !Tt || (gi(), Tt ? (ee = Ei(), Te && (ke = Zn()), ve = re(), Nn(Ce || ke)) : Ji()), T && Ni(), Vn(), Qn()
    }

    function Vn() {
        if (yi(), U.insertAdjacentHTML("afterbegin", '<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">' + ri() + "</span>  of " + ht + "</div>"), ce = U.querySelector(".tns-liveregion .current"), Pe) {
            var e = _t ? "stop" : "start";
            gn ? J(gn, {
                "data-action": e
            }) : t.autoplayButtonOutput && (U.insertAdjacentHTML(In(t.autoplayPosition), '<button type="button" data-action="' + e + '">' + bn[0] + e + bn[1] + Kt[0] + "</button>"), gn = U.querySelector("[data-action]")), gn && lt(gn, {
                click: qi
            }), _t && (Wi(), $t && lt(ut, Ae), Yt && lt(ut, Le))
        }
        if (Oe) {
            if (tn) J(tn, {
                "aria-label": "Carousel Pagination"
            }), X(Ze = tn.children, (function(t, e) {
                J(t, {
                    "data-nav": e,
                    tabindex: "-1",
                    "aria-label": ln + (e + 1),
                    "aria-controls": we
                })
            }));
            else {
                for (var n = "", i = Re ? "" : 'style="display:none"', a = 0; a < ht; a++) n += '<button type="button" data-nav="' + a + '" tabindex="-1" aria-controls="' + we + '" ' + i + ' aria-label="' + ln + (a + 1) + '"></button>';
                n = '<div class="tns-nav" aria-label="Carousel Pagination">' + n + "</div>", U.insertAdjacentHTML(In(t.navPosition), n), tn = U.querySelector(".tns-nav"), Ze = tn.children
            }
            if (ta(), v) {
                var o = v.substring(0, v.length - 18).toLowerCase(),
                    r = "transition: all " + It / 1e3 + "s";
                o && (r = "-" + o + "-" + r), F(Gt, "[aria-controls^=" + we + "-item]", r, _(Gt))
            }
            J(Ze[rn], {
                "aria-label": ln + (rn + 1) + cn
            }), Z(Ze[rn], "tabindex"), Y(Ze[rn], sn), lt(tn, Ne)
        }
        Ie && (Ye || Ve && Qe || (U.insertAdjacentHTML(In(t.controlsPosition), '<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button type="button" data-controls="prev" tabindex="-1" aria-controls="' + we + '">' + Wt[0] + '</button><button type="button" data-controls="next" tabindex="-1" aria-controls="' + we + '">' + Wt[1] + "</button></div>"), Ye = U.querySelector(".tns-controls")), Ve && Qe || (Ve = Ye.children[0], Qe = Ye.children[1]), t.controlsContainer && J(Ye, {
            "aria-label": "Carousel Navigation",
            tabindex: "0"
        }), (t.controlsContainer || t.prevButton && t.nextButton) && J([Ve, Qe], {
            "aria-controls": we,
            tabindex: "-1"
        }), (t.controlsContainer || t.prevButton && t.nextButton) && (J(Ve, {
            "data-controls": "prev"
        }), J(Qe, {
            "data-controls": "next"
        })), Ke = xi(Ve), $e = xi(Qe), Mi(), Ye ? lt(Ye, Be) : (lt(Ve, Be), lt(Qe, Be))), ei()
    }

    function Qn() {
        if (T && g) {
            var i = {};
            i[g] = Di, lt(ut, i)
        }
        qt && lt(ut, He, t.preventScrollOnTouch), Ft && lt(ut, De), Dt && lt(e, Se), "inner" === M ? be.on("outerResized", (function() {
            Jn(), be.emit("innerLoaded", ea())
        })) : (C || kt || Tt || Pt || !K) && lt(n, {
            resize: Un
        }), Pt && ("outer" === M ? be.on("innerLoaded", fi) : Ce || fi()), si(), Ce ? ai() : ke && ii(), be.on("indexChanged", pi), "inner" === M && be.emit("innerLoaded", ea()), "function" == typeof ye && ye(ea()), yt = !0
    }

    function Un(t) {
        H((function() {
            Jn(_i(t))
        }))
    }

    function Jn(n) {
        if (yt) {
            "outer" === M && be.emit("outerResized", ea(n)), gt = Dn();
            var i, a = W,
                o = !1;
            C && (ti(), (i = a !== W) && be.emit("newBreakpointStart", ea(n)));
            var r, u, s = Lt,
                l = Ce,
                d = ke,
                f = Dt,
                v = zt,
                p = jt,
                m = qt,
                h = Ft,
                g = _t,
                y = $t,
                b = Yt,
                x = ue;
            if (i) {
                var w = kt,
                    k = Pt,
                    E = Wt,
                    B = At,
                    L = Kt;
                if (!c) var H = Bt,
                    D = Et
            }
            if (Dt = zn("arrowKeys"), zt = zn("controls"), jt = zn("nav"), qt = zn("touch"), At = zn("center"), Ft = zn("mouseDrag"), _t = zn("autoplay"), $t = zn("autoplayHoverPause"), Yt = zn("autoplayResetOnVisibility"), i && (Ce = zn("disable"), kt = zn("fixedWidth"), It = zn("speed"), Pt = zn("autoHeight"), Wt = zn("controlsText"), Kt = zn("autoplayText"), Xt = zn("autoplayTimeout"), c || (Et = zn("edgePadding"), Bt = zn("gutter"))), Nn(Ce), Nt = Rn(), K && !Tt || Ce || (gi(), K || (Ji(), o = !0)), (kt || Tt) && (ee = Ei(), ve = re()), (i || kt) && (Lt = zn("items"), St = zn("slideBy"), (u = Lt !== s) && (kt || Tt || (ve = re()), En())), i && Ce !== l && (Ce ? ai() : function() {
                    if (!Me) return;
                    if (Gt.disabled = !1, ut.className += xe, Ni(), Rt)
                        for (var t = Jt; t--;) T && nt(mt[t]), nt(mt[Zt - t - 1]);
                    if (!T)
                        for (var e = ue, n = ue + ht; e < n; e++) {
                            var i = mt[e],
                                a = e < ue + Lt ? N : S;
                            i.style.left = 100 * (e - ue) / Lt + "%", Y(i, a)
                        }
                    ni(), Me = !1
                }()), Te && (i || kt || Tt) && (ke = Zn()) !== d && (ke ? (Ai(Bi(Ln(0))), ii()) : (! function() {
                    if (!Ee) return;
                    Et && c && (rt.style.margin = "");
                    if (Jt)
                        for (var t = "tns-transparent", e = Jt; e--;) T && G(mt[e], t), G(mt[Zt - e - 1], t);
                    ni(), Ee = !1
                }(), o = !0)), Nn(Ce || ke), _t || ($t = Yt = !1), Dt !== f && (Dt ? lt(e, Se) : ct(e, Se)), zt !== v && (zt ? Ye ? nt(Ye) : (Ve && nt(Ve), Qe && nt(Qe)) : Ye ? et(Ye) : (Ve && et(Ve), Qe && et(Qe))), jt !== p && (jt ? (nt(tn), ta()) : et(tn)), qt !== m && (qt ? lt(ut, He, t.preventScrollOnTouch) : ct(ut, He)), Ft !== h && (Ft ? lt(ut, De) : ct(ut, De)), _t !== g && (_t ? (gn && nt(gn), fn || pn || Wi()) : (gn && et(gn), fn && ji())), $t !== y && ($t ? lt(ut, Ae) : ct(ut, Ae)), Yt !== b && (Yt ? lt(e, Le) : ct(e, Le)), i) {
                if (kt === w && At === B || (o = !0), Pt !== k && (Pt || (rt.style.height = "")), zt && Wt !== E && (Ve.innerHTML = Wt[0], Qe.innerHTML = Wt[1]), gn && Kt !== L) {
                    var I = _t ? 1 : 0,
                        O = gn.innerHTML,
                        R = O.length - L[I].length;
                    O.substring(R) === L[I] && (gn.innerHTML = O.substring(0, R) + Kt[I])
                }
            } else At && (kt || Tt) && (o = !0);
            if ((u || kt && !Tt) && (nn = Zi(), ta()), (r = ue !== x) ? (be.emit("indexChanged", ea()), o = !0) : u ? r || pi() : (kt || Tt) && (si(), yi(), oi()), u && !T && function() {
                    for (var t = ue + Math.min(ht, Lt), e = Zt; e--;) {
                        var n = mt[e];
                        e >= ue && e < t ? (Y(n, "tns-moving"), n.style.left = 100 * (e - ue) / Lt + "%", Y(n, N), G(n, S)) : n.style.left && (n.style.left = "", Y(n, S), G(n, N)), G(n, A)
                    }
                    setTimeout((function() {
                        X(mt, (function(t) {
                            G(t, "tns-moving")
                        }))
                    }), 300)
                }(), !Ce && !ke) {
                if (i && !c && (Et === D && Bt === H || (rt.style.cssText = Wn(Et, Bt, kt, It, Pt)), K)) {
                    T && (ut.style.width = jn(kt, Bt, Lt));
                    var P = qn(kt, Bt, Lt) + Fn(Bt);
                    ! function(t, e) {
                        "deleteRule" in t ? t.deleteRule(e) : t.removeRule(e)
                    }(Gt, _(Gt) - 1), F(Gt, "#" + we + " > .tns-item", P, _(Gt))
                }
                Pt && fi(), o && (Ni(), se = ue)
            }
            i && be.emit("newBreakpointEnd", ea(n))
        }
    }

    function Zn() {
        if (!kt && !Tt) return ht <= (At ? Lt - (Lt - 1) / 2 : Lt);
        var t = kt ? (kt + Bt) * ht : bt[ht],
            e = Et ? Nt + 2 * Et : Nt + Bt;
        return At && (e -= kt ? (Nt - kt) / 2 : (Nt - (bt[ue + 1] - bt[ue] - Bt)) / 2), t <= e
    }

    function ti() {
        for (var t in W = 0, C) t = parseInt(t), gt >= t && (W = t)
    }

    function ei() {
        !_t && gn && et(gn), !jt && tn && et(tn), zt || (Ye ? et(Ye) : (Ve && et(Ve), Qe && et(Qe)))
    }

    function ni() {
        _t && gn && nt(gn), jt && tn && nt(tn), zt && (Ye ? nt(Ye) : (Ve && nt(Ve), Qe && nt(Qe)))
    }

    function ii() {
        if (!Ee) {
            if (Et && (rt.style.margin = "0px"), Jt)
                for (var t = "tns-transparent", e = Jt; e--;) T && Y(mt[e], t), Y(mt[Zt - e - 1], t);
            ei(), Ee = !0
        }
    }

    function ai() {
        if (!Me) {
            if (Gt.disabled = !0, ut.className = ut.className.replace(xe.substring(1), ""), Z(ut, ["style"]), Rt)
                for (var t = Jt; t--;) T && et(mt[t]), et(mt[Zt - t - 1]);
            if (K && T || Z(rt, ["style"]), !T)
                for (var e = ue, n = ue + ht; e < n; e++) {
                    var i = mt[e];
                    Z(i, ["style"]), G(i, N), G(i, S)
                }
            ei(), Me = !0
        }
    }

    function oi() {
        var t = ri();
        ce.innerHTML !== t && (ce.innerHTML = t)
    }

    function ri() {
        var t = ui(),
            e = t[0] + 1,
            n = t[1] + 1;
        return e === n ? e + "" : e + " to " + n
    }

    function ui(t) {
        null == t && (t = Bi());
        var e, n, i, a = ue;
        if (At || Et ? (Tt || kt) && (n = -(parseFloat(t) + Et), i = n + Nt + 2 * Et) : Tt && (n = bt[ue], i = n + Nt), Tt) bt.forEach((function(t, o) {
            o < Zt && ((At || Et) && t <= n + .5 && (a = o), i - t >= .5 && (e = o))
        }));
        else {
            if (kt) {
                var o = kt + Bt;
                At || Et ? (a = Math.floor(n / o), e = Math.ceil(i / o - 1)) : e = a + Math.ceil(Nt / o) - 1
            } else if (At || Et) {
                var r = Lt - 1;
                if (At ? (a -= r / 2, e = ue + r / 2) : e = ue + r, Et) {
                    var u = Et * Lt / Nt;
                    a -= u, e += u
                }
                a = Math.floor(a), e = Math.ceil(e)
            } else e = a + Lt - 1;
            a = Math.max(a, 0), e = Math.min(e, Zt - 1)
        }
        return [a, e]
    }

    function si() {
        if (Vt && !Ce) {
            var t = ui();
            t.push(Qt), di.apply(null, t).forEach((function(t) {
                if (!$(t, Fe)) {
                    var e = {};
                    e[g] = function(t) {
                        t.stopPropagation()
                    }, lt(t, e), lt(t, _e), t.src = Q(t, "data-src");
                    var n = Q(t, "data-srcset");
                    n && (t.srcset = n), Y(t, "loading")
                }
            }))
        }
    }

    function li(t) {
        Y(t, "loaded"), ci(t)
    }

    function ci(t) {
        Y(t, Fe), G(t, "loading"), ct(t, _e)
    }

    function di(t, e, n) {
        var i = [];
        for (n || (n = "img"); t <= e;) X(mt[t].querySelectorAll(n), (function(t) {
            i.push(t)
        })), t++;
        return i
    }

    function fi() {
        var t = di.apply(null, ui());
        H((function() {
            vi(t, hi)
        }))
    }

    function vi(t, e) {
        return le ? e() : (t.forEach((function(e, n) {
            !Vt && e.complete && ci(e), $(e, Fe) && t.splice(n, 1)
        })), t.length ? void H((function() {
            vi(t, e)
        })) : e())
    }

    function pi() {
        si(), yi(), oi(), Mi(),
            function() {
                if (jt && (rn = on >= 0 ? on : Hn(), on = -1, rn !== un)) {
                    var t = Ze[un],
                        e = Ze[rn];
                    J(t, {
                        tabindex: "-1",
                        "aria-label": ln + (un + 1)
                    }), G(t, sn), J(e, {
                        "aria-label": ln + (rn + 1) + cn
                    }), Z(e, "tabindex"), Y(e, sn), un = rn
                }
            }()
    }

    function mi(t, e) {
        for (var n = [], i = t, a = Math.min(t + e, Zt); i < a; i++) n.push(mt[i].offsetHeight);
        return Math.max.apply(null, n)
    }

    function hi() {
        var t = Pt ? mi(ue, Lt) : mi(Jt, ht),
            e = D || rt;
        e.style.height !== t && (e.style.height = t + "px")
    }

    function gi() {
        bt = [0];
        var t = K ? "left" : "top",
            e = K ? "right" : "bottom",
            n = mt[0].getBoundingClientRect()[t];
        X(mt, (function(i, a) {
            a && bt.push(i.getBoundingClientRect()[t] - n), a === Zt - 1 && bt.push(i.getBoundingClientRect()[e] - n)
        }))
    }

    function yi() {
        var t = ui(),
            e = t[0],
            n = t[1];
        X(mt, (function(t, i) {
            i >= e && i <= n ? V(t, "aria-hidden") && (Z(t, ["aria-hidden", "tabindex"]), Y(t, je)) : V(t, "aria-hidden") || (J(t, {
                "aria-hidden": "true",
                tabindex: "-1"
            }), G(t, je))
        }))
    }

    function bi(t) {
        return t.nodeName.toLowerCase()
    }

    function xi(t) {
        return "button" === bi(t)
    }

    function wi(t) {
        return "true" === t.getAttribute("aria-disabled")
    }

    function Ci(t, e, n) {
        t ? e.disabled = n : e.setAttribute("aria-disabled", n.toString())
    }

    function Mi() {
        if (zt && !Ot && !Rt) {
            var t = Ke ? Ve.disabled : wi(Ve),
                e = $e ? Qe.disabled : wi(Qe),
                n = ue <= fe,
                i = !Ot && ue >= ve;
            n && !t && Ci(Ke, Ve, !0), !n && t && Ci(Ke, Ve, !1), i && !e && Ci($e, Qe, !0), !i && e && Ci($e, Qe, !1)
        }
    }

    function Ti(t, e) {
        v && (t.style[v] = e)
    }

    function ki(t) {
        return null == t && (t = ue), Tt ? (Nt - (Et ? Bt : 0) - (bt[t + 1] - bt[t] - Bt)) / 2 : kt ? (Nt - kt) / 2 : (Lt - 1) / 2
    }

    function Ei() {
        var t = Nt + (Et ? Bt : 0) - (kt ? (kt + Bt) * Zt : bt[Zt]);
        return At && !Rt && (t = kt ? -(kt + Bt) * (Zt - 1) - ki() : ki(Zt - 1) - bt[Zt - 1]), t > 0 && (t = 0), t
    }

    function Bi(t) {
        var e;
        if (null == t && (t = ue), K && !Tt)
            if (kt) e = -(kt + Bt) * t, At && (e += ki());
            else {
                var n = d ? Zt : Lt;
                At && (t -= ki()), e = 100 * -t / n
            }
        else e = -bt[t], At && Tt && (e += ki());
        return te && (e = Math.max(e, ee)), e += !K || Tt || kt ? "px" : "%"
    }

    function Ni(t) {
        Ti(ut, "0s"), Ai(t)
    }

    function Ai(t) {
        null == t && (t = Bi()), ut.style[ie] = ae + t + oe
    }

    function Li(t, e, n, i) {
        var a = t + Lt;
        Rt || (a = Math.min(a, Zt));
        for (var o = t; o < a; o++) {
            var r = mt[o];
            i || (r.style.left = 100 * (o - ue) / Lt + "%"), L && p && (r.style[p] = r.style[h] = L * (o - t) / 1e3 + "s"), G(r, e), Y(r, n), i && Ut.push(r)
        }
    }

    function Si(t, e) {
        ne && En(), (ue !== se || e) && (be.emit("indexChanged", ea()), be.emit("transitionStart", ea()), Pt && fi(), fn && t && ["click", "keydown"].indexOf(t.type) >= 0 && ji(), ge = !0, Bn())
    }

    function Hi(t) {
        return t.toLowerCase().replace(/-/g, "")
    }

    function Di(t) {
        if (T || ge) {
            if (be.emit("transitionEnd", ea(t)), !T && Ut.length > 0)
                for (var e = 0; e < Ut.length; e++) {
                    var n = Ut[e];
                    n.style.left = "", h && p && (n.style[h] = "", n.style[p] = ""), G(n, A), Y(n, S)
                }
            if (!t || !T && t.target.parentNode === ut || t.target === ut && Hi(t.propertyName) === Hi(ie)) {
                if (!ne) {
                    var i = ue;
                    En(), ue !== i && (be.emit("indexChanged", ea()), Ni())
                }
                "inner" === M && be.emit("innerLoaded", ea()), ge = !1, se = ue
            }
        }
    }

    function Ii(t, e) {
        if (!ke)
            if ("prev" === t) Oi(e, -1);
            else if ("next" === t) Oi(e, 1);
        else {
            if (ge) {
                if (pe) return;
                Di()
            }
            var n = Sn(),
                i = 0;
            if ("first" === t ? i = -n : "last" === t ? i = T ? ht - Lt - n : ht - 1 - n : ("number" != typeof t && (t = parseInt(t)), isNaN(t) || (e || (t = Math.max(0, Math.min(ht - 1, t))), i = t - n)), !T && i && Math.abs(i) < Lt) {
                var a = i > 0 ? 1 : -1;
                i += ue + i - ht >= fe ? ht * a : 2 * ht * a * -1
            }
            ue += i, T && Rt && (ue < fe && (ue += ht), ue > ve && (ue -= ht)), Sn(ue) !== Sn(se) && Si(e)
        }
    }

    function Oi(t, e) {
        if (ge) {
            if (pe) return;
            Di()
        }
        var n;
        if (!e) {
            for (var i = Xi(t = _i(t)); i !== Ye && [Ve, Qe].indexOf(i) < 0;) i = i.parentNode;
            var a = [Ve, Qe].indexOf(i);
            a >= 0 && (n = !0, e = 0 === a ? -1 : 1)
        }
        if (Ot) {
            if (ue === fe && -1 === e) return void Ii("last", t);
            if (ue === ve && 1 === e) return void Ii("first", t)
        }
        e && (ue += St * e, Tt && (ue = Math.floor(ue)), Si(n || t && "keydown" === t.type ? t : null))
    }

    function Ri() {
        dn = setInterval((function() {
            Oi(null, hn)
        }), Xt), fn = !0
    }

    function Pi() {
        clearInterval(dn), fn = !1
    }

    function zi(t, e) {
        J(gn, {
            "data-action": t
        }), gn.innerHTML = bn[0] + t + bn[1] + e
    }

    function Wi() {
        Ri(), gn && zi("stop", Kt[1])
    }

    function ji() {
        Pi(), gn && zi("start", Kt[0])
    }

    function qi() {
        fn ? (ji(), pn = !0) : (Wi(), pn = !1)
    }

    function Fi(t) {
        t.focus()
    }

    function _i(t) {
        return Ki(t = t || n.event) ? t.changedTouches[0] : t
    }

    function Xi(t) {
        return t.target || n.event.srcElement
    }

    function Ki(t) {
        return t.type.indexOf("touch") >= 0
    }

    function $i(t) {
        t.preventDefault ? t.preventDefault() : t.returnValue = !1
    }

    function Yi() {
        return o = Mn.y - Cn.y, r = Mn.x - Cn.x, e = Math.atan2(o, r) * (180 / Math.PI), n = me, i = !1, (a = Math.abs(90 - Math.abs(e))) >= 90 - n ? i = "horizontal" : a <= n && (i = "vertical"), i === t.axis;
        var e, n, i, a, o, r
    }

    function Gi(t) {
        if (ge) {
            if (pe) return;
            Di()
        }
        _t && fn && Pi(), Tn = !0, wn && (I(wn), wn = null);
        var e = _i(t);
        be.emit(Ki(t) ? "touchStart" : "dragStart", ea(t)), !Ki(t) && ["img", "a"].indexOf(bi(Xi(t))) >= 0 && $i(t), Mn.x = Cn.x = e.clientX, Mn.y = Cn.y = e.clientY, T && (xn = parseFloat(ut.style[ie].replace(ae, "")), Ti(ut, "0s"))
    }

    function Vi(t) {
        if (Tn) {
            var e = _i(t);
            Mn.x = e.clientX, Mn.y = e.clientY, T ? wn || (wn = H((function() {
                Qi(t)
            }))) : ("?" === he && (he = Yi()), he && (Xe = !0)), ("boolean" != typeof t.cancelable || t.cancelable) && Xe && t.preventDefault()
        }
    }

    function Qi(t) {
        if (he) {
            if (I(wn), Tn && (wn = H((function() {
                    Qi(t)
                }))), "?" === he && (he = Yi()), he) {
                !Xe && Ki(t) && (Xe = !0);
                try {
                    t.type && be.emit(Ki(t) ? "touchMove" : "dragMove", ea(t))
                } catch (i) {}
                var e = xn,
                    n = kn(Mn, Cn);
                if (!K || kt || Tt) e += n, e += "px";
                else e += d ? n * Lt * 100 / ((Nt + Bt) * Zt) : 100 * n / (Nt + Bt), e += "%";
                ut.style[ie] = ae + e + oe
            }
        } else Tn = !1
    }

    function Ui(e) {
        if (Tn) {
            wn && (I(wn), wn = null), T && Ti(ut, ""), Tn = !1;
            var n = _i(e);
            Mn.x = n.clientX, Mn.y = n.clientY;
            var i = kn(Mn, Cn);
            if (Math.abs(i)) {
                if (!Ki(e)) {
                    var a = Xi(e);
                    lt(a, {
                        click: function t(e) {
                            $i(e), ct(a, {
                                click: t
                            })
                        }
                    })
                }
                T ? wn = H((function() {
                    if (K && !Tt) {
                        var t = -i * Lt / (Nt + Bt);
                        t = i > 0 ? Math.floor(t) : Math.ceil(t), ue += t
                    } else {
                        var n = -(xn + i);
                        if (n <= 0) ue = fe;
                        else if (n >= bt[Zt - 1]) ue = ve;
                        else
                            for (var a = 0; a < Zt && n >= bt[a];) ue = a, n > bt[a] && i < 0 && (ue += 1), a++
                    }
                    Si(e, i), be.emit(Ki(e) ? "touchEnd" : "dragEnd", ea(e))
                })) : he && Oi(e, i > 0 ? -1 : 1)
            }
        }
        "auto" === t.preventScrollOnTouch && (Xe = !1), me && (he = "?"), _t && !fn && Ri()
    }

    function Ji() {
        (D || rt).style.height = bt[ue + Lt] - bt[ue] + "px"
    }

    function Zi() {
        var t = kt ? (kt + Bt) * ht / Nt : ht / Lt;
        return Math.min(Math.ceil(t), ht)
    }

    function ta() {
        if (jt && !Re && nn !== an) {
            var t = an,
                e = nn,
                n = nt;
            for (an > nn && (t = nn, e = an, n = et); t < e;) n(Ze[t]), t++;
            an = nn
        }
    }

    function ea(t) {
        return {
            container: ut,
            slideItems: mt,
            navContainer: tn,
            navItems: Ze,
            controlsContainer: Ye,
            hasControls: Ie,
            prevButton: Ve,
            nextButton: Qe,
            items: Lt,
            slideBy: St,
            cloneCount: Jt,
            slideCount: ht,
            slideCountNew: Zt,
            index: ue,
            indexCached: se,
            displayIndex: An(),
            navCurrentIndex: rn,
            navCurrentIndexCached: un,
            pages: nn,
            pagesCached: an,
            sheet: Gt,
            isOn: yt,
            event: t || {}
        }
    }
    b && console.warn("No slides found in", t.container)
};
export {
    L as _, M as c, k as f, w as g, T as s, ft as t
};