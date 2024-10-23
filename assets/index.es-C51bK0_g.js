const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/index-CGsvcoiG.js", "assets/index-jdACH0Rc.js", "assets/index-st4cR-qp.css", "assets/index.modern-ChJ35hAh.js"]))) => i.map(i => d[i]);
import {
    dl as t,
    H as e,
    _ as r
} from "./index-jdACH0Rc.js";
import {
    e as i,
    B as n
} from "./events-D8VlOyhg.js";
import {
    s,
    d as o,
    b as a,
    c,
    a as h,
    x as u,
    r as l,
    H as f,
    e as p,
    C as d,
    I as g,
    f as m,
    g as v,
    h as y,
    i as w,
    j as b,
    k as A,
    l as _,
    m as E,
    n as I,
    o as S,
    p as M,
    q as P,
    G as x,
    E as N,
    y as C,
    t as O,
    A as R,
    u as T,
    v as q,
    w as D,
    z as k,
    W as B,
    B as U,
    D as j,
    F as z,
    J as L,
    K as F
} from "./index.es-BkijiSkd.js";
import "./index-BFnVcjcj.js";
import "./_commonjs-dynamic-modules-BHR_E30J.js";
import "./___vite-browser-external_commonjs-proxy-BKgLGdYW.js";
import "./tslib.es6-D9zZKb6Q.js";
var K = function(t, e, r) {
        if (r || 2 === arguments.length)
            for (var i, n = 0, s = e.length; n < s; n++) !i && n in e || (i || (i = Array.prototype.slice.call(e, 0, n)), i[n] = e[n]);
        return t.concat(i || Array.prototype.slice.call(e))
    },
    H = function() {
        return function(t, e, r) {
            this.name = t, this.version = e, this.os = r, this.type = "browser"
        }
    }(),
    $ = function() {
        return function(t) {
            this.version = t, this.type = "node", this.name = "node", this.os = process.platform
        }
    }(),
    V = function() {
        return function(t, e, r, i) {
            this.name = t, this.version = e, this.os = r, this.bot = i, this.type = "bot-device"
        }
    }(),
    Q = function() {
        return function() {
            this.type = "bot", this.bot = !0, this.name = "bot", this.version = null, this.os = null
        }
    }(),
    W = function() {
        return function() {
            this.type = "react-native", this.name = "react-native", this.version = null, this.os = null
        }
    }(),
    G = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,
    J = [
        ["aol", /AOLShield\/([0-9\._]+)/],
        ["edge", /Edge\/([0-9\._]+)/],
        ["edge-ios", /EdgiOS\/([0-9\._]+)/],
        ["yandexbrowser", /YaBrowser\/([0-9\._]+)/],
        ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/],
        ["samsung", /SamsungBrowser\/([0-9\.]+)/],
        ["silk", /\bSilk\/([0-9._-]+)\b/],
        ["miui", /MiuiBrowser\/([0-9\.]+)$/],
        ["beaker", /BeakerBrowser\/([0-9\.]+)/],
        ["edge-chromium", /EdgA?\/([0-9\.]+)/],
        ["chromium-webview", /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
        ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
        ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/],
        ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/],
        ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/],
        ["fxios", /FxiOS\/([0-9\.]+)/],
        ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/],
        ["opera", /Opera\/([0-9\.]+)(?:\s|$)/],
        ["opera", /OPR\/([0-9\.]+)(:?\s|$)/],
        ["pie", /^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],
        ["pie", /^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/],
        ["netfront", /^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],
        ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
        ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
        ["ie", /MSIE\s(7\.0)/],
        ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/],
        ["android", /Android\s([0-9\.]+)/],
        ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/],
        ["safari", /Version\/([0-9\._]+).*Safari/],
        ["facebook", /FB[AS]V\/([0-9\.]+)/],
        ["instagram", /Instagram\s([0-9\.]+)/],
        ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/],
        ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
        ["curl", /^curl\/([0-9\.]+)$/],
        ["searchbot", /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/]
    ],
    Y = [
        ["iOS", /iP(hone|od|ad)/],
        ["Android OS", /Android/],
        ["BlackBerry OS", /BlackBerry|BB10/],
        ["Windows Mobile", /IEMobile/],
        ["Amazon OS", /Kindle/],
        ["Windows 3.11", /Win16/],
        ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/],
        ["Windows 98", /(Windows 98)|(Win98)/],
        ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/],
        ["Windows XP", /(Windows NT 5.1)|(Windows XP)/],
        ["Windows Server 2003", /(Windows NT 5.2)/],
        ["Windows Vista", /(Windows NT 6.0)/],
        ["Windows 7", /(Windows NT 6.1)/],
        ["Windows 8", /(Windows NT 6.2)/],
        ["Windows 8.1", /(Windows NT 6.3)/],
        ["Windows 10", /(Windows NT 10.0)/],
        ["Windows ME", /Windows ME/],
        ["Windows CE", /Windows CE|WinCE|Microsoft Pocket Internet Explorer/],
        ["Open BSD", /OpenBSD/],
        ["Sun OS", /SunOS/],
        ["Chrome OS", /CrOS/],
        ["Linux", /(Linux)|(X11)/],
        ["Mac OS", /(Mac_PowerPC)|(Macintosh)/],
        ["QNX", /QNX/],
        ["BeOS", /BeOS/],
        ["OS/2", /OS\/2/]
    ];

function X(t) {
    return "undefined" == typeof document && "undefined" != typeof navigator && "ReactNative" === navigator.product ? new W : "undefined" != typeof navigator ? function(t) {
        var e = function(t) {
            return "" !== t && J.reduce((function(e, r) {
                var i = r[0],
                    n = r[1];
                if (e) return e;
                var s = n.exec(t);
                return !!s && [i, s]
            }), !1)
        }(t);
        if (!e) return null;
        var r = e[0],
            i = e[1];
        if ("searchbot" === r) return new Q;
        var n = i[1] && i[1].split(".").join("_").split("_").slice(0, 3);
        n ? n.length < 3 && (n = K(K([], n, !0), function(t) {
            for (var e = [], r = 0; r < t; r++) e.push("0");
            return e
        }(3 - n.length), !0)) : n = [];
        var s = n.join("."),
            o = function(t) {
                for (var e = 0, r = Y.length; e < r; e++) {
                    var i = Y[e],
                        n = i[0];
                    if (i[1].exec(t)) return n
                }
                return null
            }(t),
            a = G.exec(t);
        if (a && a[1]) return new V(r, s, o, a[1]);
        return new H(r, s, o)
    }(navigator.userAgent) : "undefined" != typeof process && process.version ? new $(process.version.slice(1)) : null
}
var Z = {};

function tt(t) {
    let e;
    return "undefined" != typeof window && void 0 !== window[t] && (e = window[t]), e
}

function et(t) {
    const e = tt(t);
    if (!e) throw new Error(`${t} is not defined in Window`);
    return e
}
Object.defineProperty(Z, "__esModule", {
    value: !0
}), Z.getLocalStorage = Z.getLocalStorageOrThrow = Z.getCrypto = Z.getCryptoOrThrow = nt = Z.getLocation = Z.getLocationOrThrow = it = Z.getNavigator = Z.getNavigatorOrThrow = rt = Z.getDocument = Z.getDocumentOrThrow = Z.getFromWindowOrThrow = Z.getFromWindow = void 0, Z.getFromWindow = tt, Z.getFromWindowOrThrow = et, Z.getDocumentOrThrow = function() {
    return et("document")
};
var rt = Z.getDocument = function() {
    return tt("document")
};
Z.getNavigatorOrThrow = function() {
    return et("navigator")
};
var it = Z.getNavigator = function() {
    return tt("navigator")
};
Z.getLocationOrThrow = function() {
    return et("location")
};
var nt = Z.getLocation = function() {
    return tt("location")
};
Z.getCryptoOrThrow = function() {
    return et("crypto")
}, Z.getCrypto = function() {
    return tt("crypto")
}, Z.getLocalStorageOrThrow = function() {
    return et("localStorage")
}, Z.getLocalStorage = function() {
    return tt("localStorage")
};
var st = {};
Object.defineProperty(st, "__esModule", {
    value: !0
});
var ot = st.getWindowMetadata = void 0;
const at = Z;
ot = st.getWindowMetadata = function() {
    let t, e;
    try {
        t = at.getDocumentOrThrow(), e = at.getLocationOrThrow()
    } catch (Yt) {
        return null
    }

    function r(...e) {
        const r = t.getElementsByTagName("meta");
        for (let t = 0; t < r.length; t++) {
            const i = r[t],
                n = ["itemprop", "property", "name"].map((t => i.getAttribute(t))).filter((t => !!t && e.includes(t)));
            if (n.length && n) {
                const t = i.getAttribute("content");
                if (t) return t
            }
        }
        return ""
    }
    const i = function() {
        let e = r("name", "og:site_name", "og:title", "twitter:title");
        return e || (e = t.title), e
    }();
    return {
        description: r("description", "og:description", "twitter:description", "keywords"),
        url: e.origin,
        icons: function() {
            const r = t.getElementsByTagName("link"),
                i = [];
            for (let t = 0; t < r.length; t++) {
                const n = r[t],
                    s = n.getAttribute("rel");
                if (s && s.toLowerCase().indexOf("icon") > -1) {
                    const t = n.getAttribute("href");
                    if (t)
                        if (-1 === t.toLowerCase().indexOf("https:") && -1 === t.toLowerCase().indexOf("http:") && 0 !== t.indexOf("//")) {
                            let r = e.protocol + "//" + e.host;
                            if (0 === t.indexOf("/")) r += t;
                            else {
                                const i = e.pathname.split("/");
                                i.pop();
                                r += i.join("/") + "/" + t
                            }
                            i.push(r)
                        } else if (0 === t.indexOf("//")) {
                        const r = e.protocol + t;
                        i.push(r)
                    } else i.push(t)
                }
            }
            return i
        }(),
        name: i
    }
};
var ct = {},
    ht = (t, e) => {
        if ("string" != typeof t || "string" != typeof e) throw new TypeError("Expected the arguments to be of type `string`");
        if ("" === e) return [t];
        const r = t.indexOf(e);
        return -1 === r ? [t] : [t.slice(0, r), t.slice(r + e.length)]
    },
    ut = function(t, e) {
        for (var r = {}, i = Object.keys(t), n = Array.isArray(e), s = 0; s < i.length; s++) {
            var o = i[s],
                a = t[o];
            (n ? -1 !== e.indexOf(o) : e(o, a, t)) && (r[o] = a)
        }
        return r
    };

function lt(t = 0) {
    return null != globalThis.Buffer && null != globalThis.Buffer.allocUnsafe ? globalThis.Buffer.allocUnsafe(t) : new Uint8Array(t)
}

function ft(t, e) {
    e || (e = t.reduce(((t, e) => t + e.length), 0));
    const r = lt(e);
    let i = 0;
    for (const n of t) r.set(n, i), i += n.length;
    return r
}

function pt(t, e, r, i) {
    return {
        name: t,
        prefix: e,
        encoder: {
            name: t,
            prefix: e,
            encode: r
        },
        decoder: {
            decode: i
        }
    }
}! function(t) {
    const e = s,
        r = o,
        i = ht,
        n = ut,
        a = Symbol("encodeFragmentIdentifier");

    function c(t) {
        if ("string" != typeof t || 1 !== t.length) throw new TypeError("arrayFormatSeparator must be single character string")
    }

    function h(t, r) {
        return r.encode ? r.strict ? e(t) : encodeURIComponent(t) : t
    }

    function u(t, e) {
        return e.decode ? r(t) : t
    }

    function l(t) {
        return Array.isArray(t) ? t.sort() : "object" == typeof t ? l(Object.keys(t)).sort(((t, e) => Number(t) - Number(e))).map((e => t[e])) : t
    }

    function f(t) {
        const e = t.indexOf("#");
        return -1 !== e && (t = t.slice(0, e)), t
    }

    function p(t) {
        const e = (t = f(t)).indexOf("?");
        return -1 === e ? "" : t.slice(e + 1)
    }

    function d(t, e) {
        return e.parseNumbers && !Number.isNaN(Number(t)) && "string" == typeof t && "" !== t.trim() ? t = Number(t) : !e.parseBooleans || null === t || "true" !== t.toLowerCase() && "false" !== t.toLowerCase() || (t = "true" === t.toLowerCase()), t
    }

    function g(t, e) {
        c((e = Object.assign({
            decode: !0,
            sort: !0,
            arrayFormat: "none",
            arrayFormatSeparator: ",",
            parseNumbers: !1,
            parseBooleans: !1
        }, e)).arrayFormatSeparator);
        const r = function(t) {
                let e;
                switch (t.arrayFormat) {
                    case "index":
                        return (t, r, i) => {
                            e = /\[(\d*)\]$/.exec(t), t = t.replace(/\[\d*\]$/, ""), e ? (void 0 === i[t] && (i[t] = {}), i[t][e[1]] = r) : i[t] = r
                        };
                    case "bracket":
                        return (t, r, i) => {
                            e = /(\[\])$/.exec(t), t = t.replace(/\[\]$/, ""), e ? void 0 !== i[t] ? i[t] = [].concat(i[t], r) : i[t] = [r] : i[t] = r
                        };
                    case "colon-list-separator":
                        return (t, r, i) => {
                            e = /(:list)$/.exec(t), t = t.replace(/:list$/, ""), e ? void 0 !== i[t] ? i[t] = [].concat(i[t], r) : i[t] = [r] : i[t] = r
                        };
                    case "comma":
                    case "separator":
                        return (e, r, i) => {
                            const n = "string" == typeof r && r.includes(t.arrayFormatSeparator),
                                s = "string" == typeof r && !n && u(r, t).includes(t.arrayFormatSeparator);
                            r = s ? u(r, t) : r;
                            const o = n || s ? r.split(t.arrayFormatSeparator).map((e => u(e, t))) : null === r ? r : u(r, t);
                            i[e] = o
                        };
                    case "bracket-separator":
                        return (e, r, i) => {
                            const n = /(\[\])$/.test(e);
                            if (e = e.replace(/\[\]$/, ""), !n) return void(i[e] = r ? u(r, t) : r);
                            const s = null === r ? [] : r.split(t.arrayFormatSeparator).map((e => u(e, t)));
                            void 0 !== i[e] ? i[e] = [].concat(i[e], s) : i[e] = s
                        };
                    default:
                        return (t, e, r) => {
                            void 0 !== r[t] ? r[t] = [].concat(r[t], e) : r[t] = e
                        }
                }
            }(e),
            n = Object.create(null);
        if ("string" != typeof t) return n;
        if (!(t = t.trim().replace(/^[?#&]/, ""))) return n;
        for (const s of t.split("&")) {
            if ("" === s) continue;
            let [t, o] = i(e.decode ? s.replace(/\+/g, " ") : s, "=");
            o = void 0 === o ? null : ["comma", "separator", "bracket-separator"].includes(e.arrayFormat) ? o : u(o, e), r(u(t, e), o, n)
        }
        for (const i of Object.keys(n)) {
            const t = n[i];
            if ("object" == typeof t && null !== t)
                for (const r of Object.keys(t)) t[r] = d(t[r], e);
            else n[i] = d(t, e)
        }
        return !1 === e.sort ? n : (!0 === e.sort ? Object.keys(n).sort() : Object.keys(n).sort(e.sort)).reduce(((t, e) => {
            const r = n[e];
            return Boolean(r) && "object" == typeof r && !Array.isArray(r) ? t[e] = l(r) : t[e] = r, t
        }), Object.create(null))
    }
    t.extract = p, t.parse = g, t.stringify = (t, e) => {
        if (!t) return "";
        c((e = Object.assign({
            encode: !0,
            strict: !0,
            arrayFormat: "none",
            arrayFormatSeparator: ","
        }, e)).arrayFormatSeparator);
        const r = r => e.skipNull && null == t[r] || e.skipEmptyString && "" === t[r],
            i = function(t) {
                switch (t.arrayFormat) {
                    case "index":
                        return e => (r, i) => {
                            const n = r.length;
                            return void 0 === i || t.skipNull && null === i || t.skipEmptyString && "" === i ? r : null === i ? [...r, [h(e, t), "[", n, "]"].join("")] : [...r, [h(e, t), "[", h(n, t), "]=", h(i, t)].join("")]
                        };
                    case "bracket":
                        return e => (r, i) => void 0 === i || t.skipNull && null === i || t.skipEmptyString && "" === i ? r : null === i ? [...r, [h(e, t), "[]"].join("")] : [...r, [h(e, t), "[]=", h(i, t)].join("")];
                    case "colon-list-separator":
                        return e => (r, i) => void 0 === i || t.skipNull && null === i || t.skipEmptyString && "" === i ? r : null === i ? [...r, [h(e, t), ":list="].join("")] : [...r, [h(e, t), ":list=", h(i, t)].join("")];
                    case "comma":
                    case "separator":
                    case "bracket-separator":
                        {
                            const e = "bracket-separator" === t.arrayFormat ? "[]=" : "=";
                            return r => (i, n) => void 0 === n || t.skipNull && null === n || t.skipEmptyString && "" === n ? i : (n = null === n ? "" : n, 0 === i.length ? [
                                [h(r, t), e, h(n, t)].join("")
                            ] : [
                                [i, h(n, t)].join(t.arrayFormatSeparator)
                            ])
                        }
                    default:
                        return e => (r, i) => void 0 === i || t.skipNull && null === i || t.skipEmptyString && "" === i ? r : null === i ? [...r, h(e, t)] : [...r, [h(e, t), "=", h(i, t)].join("")]
                }
            }(e),
            n = {};
        for (const o of Object.keys(t)) r(o) || (n[o] = t[o]);
        const s = Object.keys(n);
        return !1 !== e.sort && s.sort(e.sort), s.map((r => {
            const n = t[r];
            return void 0 === n ? "" : null === n ? h(r, e) : Array.isArray(n) ? 0 === n.length && "bracket-separator" === e.arrayFormat ? h(r, e) + "[]" : n.reduce(i(r), []).join("&") : h(r, e) + "=" + h(n, e)
        })).filter((t => t.length > 0)).join("&")
    }, t.parseUrl = (t, e) => {
        e = Object.assign({
            decode: !0
        }, e);
        const [r, n] = i(t, "#");
        return Object.assign({
            url: r.split("?")[0] || "",
            query: g(p(t), e)
        }, e && e.parseFragmentIdentifier && n ? {
            fragmentIdentifier: u(n, e)
        } : {})
    }, t.stringifyUrl = (e, r) => {
        r = Object.assign({
            encode: !0,
            strict: !0,
            [a]: !0
        }, r);
        const i = f(e.url).split("?")[0] || "",
            n = t.extract(e.url),
            s = t.parse(n, {
                sort: !1
            }),
            o = Object.assign(s, e.query);
        let c = t.stringify(o, r);
        c && (c = `?${c}`);
        let u = function(t) {
            let e = "";
            const r = t.indexOf("#");
            return -1 !== r && (e = t.slice(r)), e
        }(e.url);
        return e.fragmentIdentifier && (u = `#${r[a]?h(e.fragmentIdentifier,r):e.fragmentIdentifier}`), `${i}${c}${u}`
    }, t.pick = (e, r, i) => {
        i = Object.assign({
            parseFragmentIdentifier: !0,
            [a]: !1
        }, i);
        const {
            url: s,
            query: o,
            fragmentIdentifier: c
        } = t.parseUrl(e, i);
        return t.stringifyUrl({
            url: s,
            query: n(o, r),
            fragmentIdentifier: c
        }, i)
    }, t.exclude = (e, r, i) => {
        const n = Array.isArray(r) ? t => !r.includes(t) : (t, e) => !r(t, e);
        return t.pick(e, n, i)
    }
}(ct);
const dt = pt("utf8", "u", (t => "u" + new TextDecoder("utf8").decode(t)), (t => (new TextEncoder).encode(t.substring(1)))),
    gt = pt("ascii", "a", (t => {
        let e = "a";
        for (let r = 0; r < t.length; r++) e += String.fromCharCode(t[r]);
        return e
    }), (t => {
        const e = lt((t = t.substring(1)).length);
        for (let r = 0; r < t.length; r++) e[r] = t.charCodeAt(r);
        return e
    })),
    mt = {
        utf8: dt,
        "utf-8": dt,
        hex: a.base16,
        latin1: gt,
        ascii: gt,
        binary: gt,
        ...a
    };

function vt(t, e = "utf8") {
    const r = mt[e];
    if (!r) throw new Error(`Unsupported encoding "${e}"`);
    return "utf8" !== e && "utf-8" !== e || null == globalThis.Buffer || null == globalThis.Buffer.from ? r.decoder.decode(`${r.prefix}${t}`) : globalThis.Buffer.from(t, "utf8")
}

function yt(t, e = "utf8") {
    const r = mt[e];
    if (!r) throw new Error(`Unsupported encoding "${e}"`);
    return "utf8" !== e && "utf-8" !== e || null == globalThis.Buffer || null == globalThis.Buffer.from ? r.encoder.encode(t).substring(1) : globalThis.Buffer.from(t.buffer, t.byteOffset, t.byteLength).toString("utf8")
}

function wt(t) {
    const [e, r] = t.split(":");
    return {
        namespace: e,
        reference: r
    }
}

function bt(t, e = []) {
    const r = [];
    return Object.keys(t).forEach((i => {
        if (e.length && !e.includes(i)) return;
        const n = t[i];
        r.push(...n.accounts)
    })), r
}

function At(t, e) {
    return t.includes(":") ? [t] : e.chains || []
}
var _t = Object.defineProperty,
    Et = Object.getOwnPropertySymbols,
    It = Object.prototype.hasOwnProperty,
    St = Object.prototype.propertyIsEnumerable,
    Mt = (t, e, r) => e in t ? _t(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : t[e] = r,
    Pt = (t, e) => {
        for (var r in e || (e = {})) It.call(e, r) && Mt(t, r, e[r]);
        if (Et)
            for (var r of Et(e)) St.call(e, r) && Mt(t, r, e[r]);
        return t
    };
const xt = "react-native",
    Nt = "node",
    Ct = "browser",
    Ot = "unknown",
    Rt = "js";

function Tt() {
    return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u"
}

function qt() {
    return !rt() && !!it() && "ReactNative" === navigator.product
}

function Dt() {
    return !Tt() && !!it() && !!rt()
}

function kt() {
    return qt() ? xt : Tt() ? Nt : Dt() ? Ct : Ot
}

function Bt(t, e, r) {
    const i = function() {
            if (kt() === xt && typeof global < "u" && typeof(null == global ? void 0 : global.Platform) < "u") {
                const {
                    OS: t,
                    Version: e
                } = global.Platform;
                return [t, e].join("-")
            }
            const t = X();
            if (null === t) return "unknown";
            const e = t.os ? t.os.replace(" ", "").toLowerCase() : "unknown";
            return "browser" === t.type ? [e, t.name, t.version].join("-") : [e, t.version].join("-")
        }(),
        n = function() {
            var t;
            const e = kt();
            return e === Ct ? [e, (null == (t = nt()) ? void 0 : t.host) || "unknown"].join(":") : e
        }();
    return [
        [t, e].join("-"), [Rt, r].join("-"), i, n
    ].join("/")
}

function Ut({
    protocol: t,
    version: e,
    relayUrl: r,
    sdkVersion: i,
    auth: n,
    projectId: s,
    useOnCloseEvent: o,
    bundleId: a
}) {
    const c = r.split("?"),
        h = {
            auth: n,
            ua: Bt(t, e, i),
            projectId: s,
            useOnCloseEvent: o || void 0,
            origin: a || void 0
        },
        u = function(t, e) {
            let r = ct.parse(t);
            return r = Pt(Pt({}, r), e), ct.stringify(r)
        }(c[1] || "", h);
    return c[0] + "?" + u
}

function jt(t, e) {
    return t.filter((t => e.includes(t))).length === t.length
}

function zt(t) {
    return Object.fromEntries(t.entries())
}

function Lt(t) {
    return new Map(Object.entries(t))
}

function Ft(t = c.FIVE_MINUTES, e) {
    const r = c.toMiliseconds(t || c.FIVE_MINUTES);
    let i, n, s;
    return {
        resolve: t => {
            s && i && (clearTimeout(s), i(t))
        },
        reject: t => {
            s && n && (clearTimeout(s), n(t))
        },
        done: () => new Promise(((t, o) => {
            s = setTimeout((() => {
                o(new Error(e))
            }), r), i = t, n = o
        }))
    }
}

function Kt(t, e, r) {
    return new Promise((async (i, n) => {
        const s = setTimeout((() => n(new Error(r))), e);
        try {
            i(await t)
        } catch (o) {
            n(o)
        }
        clearTimeout(s)
    }))
}

function Ht(t, e) {
    if ("string" == typeof e && e.startsWith(`${t}:`)) return e;
    if ("topic" === t.toLowerCase()) {
        if ("string" != typeof e) throw new Error('Value must be "string" for expirer target type: topic');
        return `topic:${e}`
    }
    if ("id" === t.toLowerCase()) {
        if ("number" != typeof e) throw new Error('Value must be "number" for expirer target type: id');
        return `id:${e}`
    }
    throw new Error(`Unknown expirer target type: ${t}`)
}

function $t(t) {
    const [e, r] = t.split(":"), i = {
        id: void 0,
        topic: void 0
    };
    if ("topic" === e && "string" == typeof r) i.topic = r;
    else {
        if ("id" !== e || !Number.isInteger(Number(r))) throw new Error(`Invalid target, expected id:number or topic:string, got ${e}:${r}`);
        i.id = Number(r)
    }
    return i
}

function Vt(t, e) {
    return c.fromMiliseconds(Date.now() + c.toMiliseconds(t))
}

function Qt(t) {
    return Date.now() >= c.toMiliseconds(t)
}

function Wt(t, e) {
    return `${t}${e?`:${e}`:""}`
}

function Gt(t = [], e = []) {
    return [...new Set([...t, ...e])]
}
var Jt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
var Yt, Xt = {
    exports: {}
};
/**
 * [js-sha3]{@link https://github.com/emn178/js-sha3}
 *
 * @version 0.8.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2015-2018
 * @license MIT
 */
Yt = Xt,
    function() {
        var t = "input is invalid type",
            e = "object" == typeof window,
            r = e ? window : {};
        r.JS_SHA3_NO_WINDOW && (e = !1);
        var i = !e && "object" == typeof self;
        !r.JS_SHA3_NO_NODE_JS && "object" == typeof process && process.versions && process.versions.node ? r = Jt : i && (r = self);
        var n = !r.JS_SHA3_NO_COMMON_JS && Yt.exports,
            s = !r.JS_SHA3_NO_ARRAY_BUFFER && typeof ArrayBuffer < "u",
            o = "0123456789abcdef".split(""),
            a = [4, 1024, 262144, 67108864],
            c = [0, 8, 16, 24],
            h = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648],
            u = [224, 256, 384, 512],
            l = [128, 256],
            f = ["hex", "buffer", "arrayBuffer", "array", "digest"],
            p = {
                128: 168,
                256: 136
            };
        (r.JS_SHA3_NO_NODE_JS || !Array.isArray) && (Array.isArray = function(t) {
            return "[object Array]" === Object.prototype.toString.call(t)
        }), s && (r.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView) && (ArrayBuffer.isView = function(t) {
            return "object" == typeof t && t.buffer && t.buffer.constructor === ArrayBuffer
        });
        for (var d = function(t, e, r) {
                return function(i) {
                    return new N(t, e, t).update(i)[r]()
                }
            }, g = function(t, e, r) {
                return function(i, n) {
                    return new N(t, e, n).update(i)[r]()
                }
            }, m = function(t, e, r) {
                return function(e, i, n, s) {
                    return A["cshake" + t].update(e, i, n, s)[r]()
                }
            }, v = function(t, e, r) {
                return function(e, i, n, s) {
                    return A["kmac" + t].update(e, i, n, s)[r]()
                }
            }, y = function(t, e, r, i) {
                for (var n = 0; n < f.length; ++n) {
                    var s = f[n];
                    t[s] = e(r, i, s)
                }
                return t
            }, w = function(t, e) {
                var r = d(t, e, "hex");
                return r.create = function() {
                    return new N(t, e, t)
                }, r.update = function(t) {
                    return r.create().update(t)
                }, y(r, d, t, e)
            }, b = [{
                name: "keccak",
                padding: [1, 256, 65536, 16777216],
                bits: u,
                createMethod: w
            }, {
                name: "sha3",
                padding: [6, 1536, 393216, 100663296],
                bits: u,
                createMethod: w
            }, {
                name: "shake",
                padding: [31, 7936, 2031616, 520093696],
                bits: l,
                createMethod: function(t, e) {
                    var r = g(t, e, "hex");
                    return r.create = function(r) {
                        return new N(t, e, r)
                    }, r.update = function(t, e) {
                        return r.create(e).update(t)
                    }, y(r, g, t, e)
                }
            }, {
                name: "cshake",
                padding: a,
                bits: l,
                createMethod: function(t, e) {
                    var r = p[t],
                        i = m(t, 0, "hex");
                    return i.create = function(i, n, s) {
                        return n || s ? new N(t, e, i).bytepad([n, s], r) : A["shake" + t].create(i)
                    }, i.update = function(t, e, r, n) {
                        return i.create(e, r, n).update(t)
                    }, y(i, m, t, e)
                }
            }, {
                name: "kmac",
                padding: a,
                bits: l,
                createMethod: function(t, e) {
                    var r = p[t],
                        i = v(t, 0, "hex");
                    return i.create = function(i, n, s) {
                        return new C(t, e, n).bytepad(["KMAC", s], r).bytepad([i], r)
                    }, i.update = function(t, e, r, n) {
                        return i.create(t, r, n).update(e)
                    }, y(i, v, t, e)
                }
            }], A = {}, _ = [], E = 0; E < b.length; ++E)
            for (var I = b[E], S = I.bits, M = 0; M < S.length; ++M) {
                var P = I.name + "_" + S[M];
                if (_.push(P), A[P] = I.createMethod(S[M], I.padding), "sha3" !== I.name) {
                    var x = I.name + S[M];
                    _.push(x), A[x] = A[P]
                }
            }

        function N(t, e, r) {
            this.blocks = [], this.s = [], this.padding = e, this.outputBits = r, this.reset = !0, this.finalized = !1, this.block = 0, this.start = 0, this.blockCount = 1600 - (t << 1) >> 5, this.byteCount = this.blockCount << 2, this.outputBlocks = r >> 5, this.extraBytes = (31 & r) >> 3;
            for (var i = 0; i < 50; ++i) this.s[i] = 0
        }

        function C(t, e, r) {
            N.call(this, t, e, r)
        }
        N.prototype.update = function(e) {
            if (this.finalized) throw new Error("finalize already called");
            var r, i = typeof e;
            if ("string" !== i) {
                if ("object" !== i) throw new Error(t);
                if (null === e) throw new Error(t);
                if (s && e.constructor === ArrayBuffer) e = new Uint8Array(e);
                else if (!(Array.isArray(e) || s && ArrayBuffer.isView(e))) throw new Error(t);
                r = !0
            }
            for (var n, o, a = this.blocks, h = this.byteCount, u = e.length, l = this.blockCount, f = 0, p = this.s; f < u;) {
                if (this.reset)
                    for (this.reset = !1, a[0] = this.block, n = 1; n < l + 1; ++n) a[n] = 0;
                if (r)
                    for (n = this.start; f < u && n < h; ++f) a[n >> 2] |= e[f] << c[3 & n++];
                else
                    for (n = this.start; f < u && n < h; ++f)(o = e.charCodeAt(f)) < 128 ? a[n >> 2] |= o << c[3 & n++] : o < 2048 ? (a[n >> 2] |= (192 | o >> 6) << c[3 & n++], a[n >> 2] |= (128 | 63 & o) << c[3 & n++]) : o < 55296 || o >= 57344 ? (a[n >> 2] |= (224 | o >> 12) << c[3 & n++], a[n >> 2] |= (128 | o >> 6 & 63) << c[3 & n++], a[n >> 2] |= (128 | 63 & o) << c[3 & n++]) : (o = 65536 + ((1023 & o) << 10 | 1023 & e.charCodeAt(++f)), a[n >> 2] |= (240 | o >> 18) << c[3 & n++], a[n >> 2] |= (128 | o >> 12 & 63) << c[3 & n++], a[n >> 2] |= (128 | o >> 6 & 63) << c[3 & n++], a[n >> 2] |= (128 | 63 & o) << c[3 & n++]);
                if (this.lastByteIndex = n, n >= h) {
                    for (this.start = n - h, this.block = a[l], n = 0; n < l; ++n) p[n] ^= a[n];
                    O(p), this.reset = !0
                } else this.start = n
            }
            return this
        }, N.prototype.encode = function(t, e) {
            var r = 255 & t,
                i = 1,
                n = [r];
            for (r = 255 & (t >>= 8); r > 0;) n.unshift(r), r = 255 & (t >>= 8), ++i;
            return e ? n.push(i) : n.unshift(i), this.update(n), n.length
        }, N.prototype.encodeString = function(e) {
            var r, i = typeof e;
            if ("string" !== i) {
                if ("object" !== i) throw new Error(t);
                if (null === e) throw new Error(t);
                if (s && e.constructor === ArrayBuffer) e = new Uint8Array(e);
                else if (!(Array.isArray(e) || s && ArrayBuffer.isView(e))) throw new Error(t);
                r = !0
            }
            var n = 0,
                o = e.length;
            if (r) n = o;
            else
                for (var a = 0; a < e.length; ++a) {
                    var c = e.charCodeAt(a);
                    c < 128 ? n += 1 : c < 2048 ? n += 2 : c < 55296 || c >= 57344 ? n += 3 : (c = 65536 + ((1023 & c) << 10 | 1023 & e.charCodeAt(++a)), n += 4)
                }
            return n += this.encode(8 * n), this.update(e), n
        }, N.prototype.bytepad = function(t, e) {
            for (var r = this.encode(e), i = 0; i < t.length; ++i) r += this.encodeString(t[i]);
            var n = e - r % e,
                s = [];
            return s.length = n, this.update(s), this
        }, N.prototype.finalize = function() {
            if (!this.finalized) {
                this.finalized = !0;
                var t = this.blocks,
                    e = this.lastByteIndex,
                    r = this.blockCount,
                    i = this.s;
                if (t[e >> 2] |= this.padding[3 & e], this.lastByteIndex === this.byteCount)
                    for (t[0] = t[r], e = 1; e < r + 1; ++e) t[e] = 0;
                for (t[r - 1] |= 2147483648, e = 0; e < r; ++e) i[e] ^= t[e];
                O(i)
            }
        }, N.prototype.toString = N.prototype.hex = function() {
            this.finalize();
            for (var t, e = this.blockCount, r = this.s, i = this.outputBlocks, n = this.extraBytes, s = 0, a = 0, c = ""; a < i;) {
                for (s = 0; s < e && a < i; ++s, ++a) t = r[s], c += o[t >> 4 & 15] + o[15 & t] + o[t >> 12 & 15] + o[t >> 8 & 15] + o[t >> 20 & 15] + o[t >> 16 & 15] + o[t >> 28 & 15] + o[t >> 24 & 15];
                a % e == 0 && (O(r), s = 0)
            }
            return n && (t = r[s], c += o[t >> 4 & 15] + o[15 & t], n > 1 && (c += o[t >> 12 & 15] + o[t >> 8 & 15]), n > 2 && (c += o[t >> 20 & 15] + o[t >> 16 & 15])), c
        }, N.prototype.arrayBuffer = function() {
            this.finalize();
            var t, e = this.blockCount,
                r = this.s,
                i = this.outputBlocks,
                n = this.extraBytes,
                s = 0,
                o = 0,
                a = this.outputBits >> 3;
            t = n ? new ArrayBuffer(i + 1 << 2) : new ArrayBuffer(a);
            for (var c = new Uint32Array(t); o < i;) {
                for (s = 0; s < e && o < i; ++s, ++o) c[o] = r[s];
                o % e == 0 && O(r)
            }
            return n && (c[s] = r[s], t = t.slice(0, a)), t
        }, N.prototype.buffer = N.prototype.arrayBuffer, N.prototype.digest = N.prototype.array = function() {
            this.finalize();
            for (var t, e, r = this.blockCount, i = this.s, n = this.outputBlocks, s = this.extraBytes, o = 0, a = 0, c = []; a < n;) {
                for (o = 0; o < r && a < n; ++o, ++a) t = a << 2, e = i[o], c[t] = 255 & e, c[t + 1] = e >> 8 & 255, c[t + 2] = e >> 16 & 255, c[t + 3] = e >> 24 & 255;
                a % r == 0 && O(i)
            }
            return s && (t = a << 2, e = i[o], c[t] = 255 & e, s > 1 && (c[t + 1] = e >> 8 & 255), s > 2 && (c[t + 2] = e >> 16 & 255)), c
        }, C.prototype = new N, C.prototype.finalize = function() {
            return this.encode(this.outputBits, !0), N.prototype.finalize.call(this)
        };
        var O = function(t) {
            var e, r, i, n, s, o, a, c, u, l, f, p, d, g, m, v, y, w, b, A, _, E, I, S, M, P, x, N, C, O, R, T, q, D, k, B, U, j, z, L, F, K, H, $, V, Q, W, G, J, Y, X, Z, tt, et, rt, it, nt, st, ot, at, ct, ht, ut;
            for (i = 0; i < 48; i += 2) n = t[0] ^ t[10] ^ t[20] ^ t[30] ^ t[40], s = t[1] ^ t[11] ^ t[21] ^ t[31] ^ t[41], o = t[2] ^ t[12] ^ t[22] ^ t[32] ^ t[42], a = t[3] ^ t[13] ^ t[23] ^ t[33] ^ t[43], c = t[4] ^ t[14] ^ t[24] ^ t[34] ^ t[44], u = t[5] ^ t[15] ^ t[25] ^ t[35] ^ t[45], l = t[6] ^ t[16] ^ t[26] ^ t[36] ^ t[46], f = t[7] ^ t[17] ^ t[27] ^ t[37] ^ t[47], e = (p = t[8] ^ t[18] ^ t[28] ^ t[38] ^ t[48]) ^ (o << 1 | a >>> 31), r = (d = t[9] ^ t[19] ^ t[29] ^ t[39] ^ t[49]) ^ (a << 1 | o >>> 31), t[0] ^= e, t[1] ^= r, t[10] ^= e, t[11] ^= r, t[20] ^= e, t[21] ^= r, t[30] ^= e, t[31] ^= r, t[40] ^= e, t[41] ^= r, e = n ^ (c << 1 | u >>> 31), r = s ^ (u << 1 | c >>> 31), t[2] ^= e, t[3] ^= r, t[12] ^= e, t[13] ^= r, t[22] ^= e, t[23] ^= r, t[32] ^= e, t[33] ^= r, t[42] ^= e, t[43] ^= r, e = o ^ (l << 1 | f >>> 31), r = a ^ (f << 1 | l >>> 31), t[4] ^= e, t[5] ^= r, t[14] ^= e, t[15] ^= r, t[24] ^= e, t[25] ^= r, t[34] ^= e, t[35] ^= r, t[44] ^= e, t[45] ^= r, e = c ^ (p << 1 | d >>> 31), r = u ^ (d << 1 | p >>> 31), t[6] ^= e, t[7] ^= r, t[16] ^= e, t[17] ^= r, t[26] ^= e, t[27] ^= r, t[36] ^= e, t[37] ^= r, t[46] ^= e, t[47] ^= r, e = l ^ (n << 1 | s >>> 31), r = f ^ (s << 1 | n >>> 31), t[8] ^= e, t[9] ^= r, t[18] ^= e, t[19] ^= r, t[28] ^= e, t[29] ^= r, t[38] ^= e, t[39] ^= r, t[48] ^= e, t[49] ^= r, g = t[0], m = t[1], Q = t[11] << 4 | t[10] >>> 28, W = t[10] << 4 | t[11] >>> 28, N = t[20] << 3 | t[21] >>> 29, C = t[21] << 3 | t[20] >>> 29, at = t[31] << 9 | t[30] >>> 23, ct = t[30] << 9 | t[31] >>> 23, K = t[40] << 18 | t[41] >>> 14, H = t[41] << 18 | t[40] >>> 14, D = t[2] << 1 | t[3] >>> 31, k = t[3] << 1 | t[2] >>> 31, v = t[13] << 12 | t[12] >>> 20, y = t[12] << 12 | t[13] >>> 20, G = t[22] << 10 | t[23] >>> 22, J = t[23] << 10 | t[22] >>> 22, O = t[33] << 13 | t[32] >>> 19, R = t[32] << 13 | t[33] >>> 19, ht = t[42] << 2 | t[43] >>> 30, ut = t[43] << 2 | t[42] >>> 30, et = t[5] << 30 | t[4] >>> 2, rt = t[4] << 30 | t[5] >>> 2, B = t[14] << 6 | t[15] >>> 26, U = t[15] << 6 | t[14] >>> 26, w = t[25] << 11 | t[24] >>> 21, b = t[24] << 11 | t[25] >>> 21, Y = t[34] << 15 | t[35] >>> 17, X = t[35] << 15 | t[34] >>> 17, T = t[45] << 29 | t[44] >>> 3, q = t[44] << 29 | t[45] >>> 3, S = t[6] << 28 | t[7] >>> 4, M = t[7] << 28 | t[6] >>> 4, it = t[17] << 23 | t[16] >>> 9, nt = t[16] << 23 | t[17] >>> 9, j = t[26] << 25 | t[27] >>> 7, z = t[27] << 25 | t[26] >>> 7, A = t[36] << 21 | t[37] >>> 11, _ = t[37] << 21 | t[36] >>> 11, Z = t[47] << 24 | t[46] >>> 8, tt = t[46] << 24 | t[47] >>> 8, $ = t[8] << 27 | t[9] >>> 5, V = t[9] << 27 | t[8] >>> 5, P = t[18] << 20 | t[19] >>> 12, x = t[19] << 20 | t[18] >>> 12, st = t[29] << 7 | t[28] >>> 25, ot = t[28] << 7 | t[29] >>> 25, L = t[38] << 8 | t[39] >>> 24, F = t[39] << 8 | t[38] >>> 24, E = t[48] << 14 | t[49] >>> 18, I = t[49] << 14 | t[48] >>> 18, t[0] = g ^ ~v & w, t[1] = m ^ ~y & b, t[10] = S ^ ~P & N, t[11] = M ^ ~x & C, t[20] = D ^ ~B & j, t[21] = k ^ ~U & z, t[30] = $ ^ ~Q & G, t[31] = V ^ ~W & J, t[40] = et ^ ~it & st, t[41] = rt ^ ~nt & ot, t[2] = v ^ ~w & A, t[3] = y ^ ~b & _, t[12] = P ^ ~N & O, t[13] = x ^ ~C & R, t[22] = B ^ ~j & L, t[23] = U ^ ~z & F, t[32] = Q ^ ~G & Y, t[33] = W ^ ~J & X, t[42] = it ^ ~st & at, t[43] = nt ^ ~ot & ct, t[4] = w ^ ~A & E, t[5] = b ^ ~_ & I, t[14] = N ^ ~O & T, t[15] = C ^ ~R & q, t[24] = j ^ ~L & K, t[25] = z ^ ~F & H, t[34] = G ^ ~Y & Z, t[35] = J ^ ~X & tt, t[44] = st ^ ~at & ht, t[45] = ot ^ ~ct & ut, t[6] = A ^ ~E & g, t[7] = _ ^ ~I & m, t[16] = O ^ ~T & S, t[17] = R ^ ~q & M, t[26] = L ^ ~K & D, t[27] = F ^ ~H & k, t[36] = Y ^ ~Z & $, t[37] = X ^ ~tt & V, t[46] = at ^ ~ht & et, t[47] = ct ^ ~ut & rt, t[8] = E ^ ~g & v, t[9] = I ^ ~m & y, t[18] = T ^ ~S & P, t[19] = q ^ ~M & x, t[28] = K ^ ~D & B, t[29] = H ^ ~k & U, t[38] = Z ^ ~$ & Q, t[39] = tt ^ ~V & W, t[48] = ht ^ ~et & it, t[49] = ut ^ ~rt & nt, t[0] ^= h[i], t[1] ^= h[i + 1]
        };
        if (n) Yt.exports = A;
        else
            for (E = 0; E < _.length; ++E) r[_[E]] = A[_[E]]
    }();
var Zt = Xt.exports;
let te = !1,
    ee = !1;
const re = {
    debug: 1,
    default: 2,
    info: 2,
    warning: 3,
    error: 4,
    off: 5
};
let ie = re.default,
    ne = null;
const se = function() {
    try {
        const t = [];
        if (["NFD", "NFC", "NFKD", "NFKC"].forEach((e => {
                try {
                    if ("test" !== "test".normalize(e)) throw new Error("bad normalize")
                } catch {
                    t.push(e)
                }
            })), t.length) throw new Error("missing " + t.join(", "));
        if (String.fromCharCode(233).normalize("NFD") !== String.fromCharCode(101, 769)) throw new Error("broken implementation")
    } catch (Yt) {
        return Yt.message
    }
    return null
}();
var oe, ae;
! function(t) {
    t.DEBUG = "DEBUG", t.INFO = "INFO", t.WARNING = "WARNING", t.ERROR = "ERROR", t.OFF = "OFF"
}(oe || (oe = {})),
function(t) {
    t.UNKNOWN_ERROR = "UNKNOWN_ERROR", t.NOT_IMPLEMENTED = "NOT_IMPLEMENTED", t.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION", t.NETWORK_ERROR = "NETWORK_ERROR", t.SERVER_ERROR = "SERVER_ERROR", t.TIMEOUT = "TIMEOUT", t.BUFFER_OVERRUN = "BUFFER_OVERRUN", t.NUMERIC_FAULT = "NUMERIC_FAULT", t.MISSING_NEW = "MISSING_NEW", t.INVALID_ARGUMENT = "INVALID_ARGUMENT", t.MISSING_ARGUMENT = "MISSING_ARGUMENT", t.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT", t.CALL_EXCEPTION = "CALL_EXCEPTION", t.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS", t.NONCE_EXPIRED = "NONCE_EXPIRED", t.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED", t.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT", t.TRANSACTION_REPLACED = "TRANSACTION_REPLACED", t.ACTION_REJECTED = "ACTION_REJECTED"
}(ae || (ae = {}));
const ce = "0123456789abcdef";
let he = class t {
    constructor(t) {
        Object.defineProperty(this, "version", {
            enumerable: !0,
            value: t,
            writable: !1
        })
    }
    _log(t, e) {
        const r = t.toLowerCase();
        null == re[r] && this.throwArgumentError("invalid log level name", "logLevel", t), !(ie > re[r]) && console.log.apply(console, e)
    }
    debug(...e) {
        this._log(t.levels.DEBUG, e)
    }
    info(...e) {
        this._log(t.levels.INFO, e)
    }
    warn(...e) {
        this._log(t.levels.WARNING, e)
    }
    makeError(e, r, i) {
        if (ee) return this.makeError("censored error", r, {});
        r || (r = t.errors.UNKNOWN_ERROR), i || (i = {});
        const n = [];
        Object.keys(i).forEach((t => {
            const e = i[t];
            try {
                if (e instanceof Uint8Array) {
                    let r = "";
                    for (let t = 0; t < e.length; t++) r += ce[e[t] >> 4], r += ce[15 & e[t]];
                    n.push(t + "=Uint8Array(0x" + r + ")")
                } else n.push(t + "=" + JSON.stringify(e))
            } catch {
                n.push(t + "=" + JSON.stringify(i[t].toString()))
            }
        })), n.push(`code=${r}`), n.push(`version=${this.version}`);
        const s = e;
        let o = "";
        switch (r) {
            case ae.NUMERIC_FAULT:
                {
                    o = "NUMERIC_FAULT";
                    const t = e;
                    switch (t) {
                        case "overflow":
                        case "underflow":
                        case "division-by-zero":
                            o += "-" + t;
                            break;
                        case "negative-power":
                        case "negative-width":
                            o += "-unsupported";
                            break;
                        case "unbound-bitwise-result":
                            o += "-unbound-result"
                    }
                    break
                }
            case ae.CALL_EXCEPTION:
            case ae.INSUFFICIENT_FUNDS:
            case ae.MISSING_NEW:
            case ae.NONCE_EXPIRED:
            case ae.REPLACEMENT_UNDERPRICED:
            case ae.TRANSACTION_REPLACED:
            case ae.UNPREDICTABLE_GAS_LIMIT:
                o = r
        }
        o && (e += " [ See: https://links.ethers.org/v5-errors-" + o + " ]"), n.length && (e += " (" + n.join(", ") + ")");
        const a = new Error(e);
        return a.reason = s, a.code = r, Object.keys(i).forEach((function(t) {
            a[t] = i[t]
        })), a
    }
    throwError(t, e, r) {
        throw this.makeError(t, e, r)
    }
    throwArgumentError(e, r, i) {
        return this.throwError(e, t.errors.INVALID_ARGUMENT, {
            argument: r,
            value: i
        })
    }
    assert(t, e, r, i) {
        t || this.throwError(e, r, i)
    }
    assertArgument(t, e, r, i) {
        t || this.throwArgumentError(e, r, i)
    }
    checkNormalize(e) {
        se && this.throwError("platform missing String.prototype.normalize", t.errors.UNSUPPORTED_OPERATION, {
            operation: "String.prototype.normalize",
            form: se
        })
    }
    checkSafeUint53(e, r) {
        "number" == typeof e && (null == r && (r = "value not safe"), (e < 0 || e >= 9007199254740991) && this.throwError(r, t.errors.NUMERIC_FAULT, {
            operation: "checkSafeInteger",
            fault: "out-of-safe-range",
            value: e
        }), e % 1 && this.throwError(r, t.errors.NUMERIC_FAULT, {
            operation: "checkSafeInteger",
            fault: "non-integer",
            value: e
        }))
    }
    checkArgumentCount(e, r, i) {
        i = i ? ": " + i : "", e < r && this.throwError("missing argument" + i, t.errors.MISSING_ARGUMENT, {
            count: e,
            expectedCount: r
        }), e > r && this.throwError("too many arguments" + i, t.errors.UNEXPECTED_ARGUMENT, {
            count: e,
            expectedCount: r
        })
    }
    checkNew(e, r) {
        (e === Object || null == e) && this.throwError("missing new", t.errors.MISSING_NEW, {
            name: r.name
        })
    }
    checkAbstract(e, r) {
        e === r ? this.throwError("cannot instantiate abstract class " + JSON.stringify(r.name) + " directly; use a sub-class", t.errors.UNSUPPORTED_OPERATION, {
            name: e.name,
            operation: "new"
        }) : (e === Object || null == e) && this.throwError("missing new", t.errors.MISSING_NEW, {
            name: r.name
        })
    }
    static globalLogger() {
        return ne || (ne = new t("logger/5.7.0")), ne
    }
    static setCensorship(e, r) {
        if (!e && r && this.globalLogger().throwError("cannot permanently disable censorship", t.errors.UNSUPPORTED_OPERATION, {
                operation: "setCensorship"
            }), te) {
            if (!e) return;
            this.globalLogger().throwError("error censorship permanent", t.errors.UNSUPPORTED_OPERATION, {
                operation: "setCensorship"
            })
        }
        ee = !!e, te = !!r
    }
    static setLogLevel(e) {
        const r = re[e.toLowerCase()];
        null != r ? ie = r : t.globalLogger().warn("invalid log level - " + e)
    }
    static from(e) {
        return new t(e)
    }
};
he.errors = ae, he.levels = oe;
const ue = new he("bytes/5.7.0");

function le(t) {
    return !!t.toHexString
}

function fe(t) {
    return t.slice || (t.slice = function() {
        const e = Array.prototype.slice.call(arguments);
        return fe(new Uint8Array(Array.prototype.slice.apply(t, e)))
    }), t
}

function pe(t) {
    return "number" == typeof t && t == t && t % 1 == 0
}

function de(t) {
    if (null == t) return !1;
    if (t.constructor === Uint8Array) return !0;
    if ("string" == typeof t || !pe(t.length) || t.length < 0) return !1;
    for (let e = 0; e < t.length; e++) {
        const r = t[e];
        if (!pe(r) || r < 0 || r >= 256) return !1
    }
    return !0
}

function ge(t, e) {
    if (e || (e = {}), "number" == typeof t) {
        ue.checkSafeUint53(t, "invalid arrayify value");
        const e = [];
        for (; t;) e.unshift(255 & t), t = parseInt(String(t / 256));
        return 0 === e.length && e.push(0), fe(new Uint8Array(e))
    }
    if (e.allowMissingPrefix && "string" == typeof t && "0x" !== t.substring(0, 2) && (t = "0x" + t), le(t) && (t = t.toHexString()), me(t)) {
        let r = t.substring(2);
        r.length % 2 && ("left" === e.hexPad ? r = "0" + r : "right" === e.hexPad ? r += "0" : ue.throwArgumentError("hex data is odd-length", "value", t));
        const i = [];
        for (let t = 0; t < r.length; t += 2) i.push(parseInt(r.substring(t, t + 2), 16));
        return fe(new Uint8Array(i))
    }
    return de(t) ? fe(new Uint8Array(t)) : ue.throwArgumentError("invalid arrayify value", "value", t)
}

function me(t, e) {
    return !("string" != typeof t || !t.match(/^0x[0-9A-Fa-f]*$/) || e && t.length !== 2 + 2 * e)
}
const ve = "0123456789abcdef";

function ye(t, e) {
    if (e || (e = {}), "number" == typeof t) {
        ue.checkSafeUint53(t, "invalid hexlify value");
        let e = "";
        for (; t;) e = ve[15 & t] + e, t = Math.floor(t / 16);
        return e.length ? (e.length % 2 && (e = "0" + e), "0x" + e) : "0x00"
    }
    if ("bigint" == typeof t) return (t = t.toString(16)).length % 2 ? "0x0" + t : "0x" + t;
    if (e.allowMissingPrefix && "string" == typeof t && "0x" !== t.substring(0, 2) && (t = "0x" + t), le(t)) return t.toHexString();
    if (me(t)) return t.length % 2 && ("left" === e.hexPad ? t = "0x0" + t.substring(2) : "right" === e.hexPad ? t += "0" : ue.throwArgumentError("hex data is odd-length", "value", t)), t.toLowerCase();
    if (de(t)) {
        let e = "0x";
        for (let r = 0; r < t.length; r++) {
            let i = t[r];
            e += ve[(240 & i) >> 4] + ve[15 & i]
        }
        return e
    }
    return ue.throwArgumentError("invalid hexlify value", "value", t)
}

function we(t, e, r) {
    return "string" != typeof t ? t = ye(t) : (!me(t) || t.length % 2) && ue.throwArgumentError("invalid hexData", "value", t), e = 2 + 2 * e, null != r ? "0x" + t.substring(e, 2 + 2 * r) : "0x" + t.substring(e)
}

function be(t, e) {
    for ("string" != typeof t ? t = ye(t) : me(t) || ue.throwArgumentError("invalid hex string", "value", t), t.length > 2 * e + 2 && ue.throwArgumentError("value out of range", "value", arguments[1]); t.length < 2 * e + 2;) t = "0x0" + t.substring(2);
    return t
}

function Ae(t) {
    const e = {
        r: "0x",
        s: "0x",
        _vs: "0x",
        recoveryParam: 0,
        v: 0,
        yParityAndS: "0x",
        compact: "0x"
    };
    if (function(t) {
            return me(t) && !(t.length % 2) || de(t)
        }(t)) {
        let r = ge(t);
        64 === r.length ? (e.v = 27 + (r[32] >> 7), r[32] &= 127, e.r = ye(r.slice(0, 32)), e.s = ye(r.slice(32, 64))) : 65 === r.length ? (e.r = ye(r.slice(0, 32)), e.s = ye(r.slice(32, 64)), e.v = r[64]) : ue.throwArgumentError("invalid signature string", "signature", t), e.v < 27 && (0 === e.v || 1 === e.v ? e.v += 27 : ue.throwArgumentError("signature invalid v byte", "signature", t)), e.recoveryParam = 1 - e.v % 2, e.recoveryParam && (r[32] |= 128), e._vs = ye(r.slice(32, 64))
    } else {
        if (e.r = t.r, e.s = t.s, e.v = t.v, e.recoveryParam = t.recoveryParam, e._vs = t._vs, null != e._vs) {
            const r = function(t, e) {
                (t = ge(t)).length > e && ue.throwArgumentError("value out of range", "value", arguments[0]);
                const r = new Uint8Array(e);
                return r.set(t, e - t.length), fe(r)
            }(ge(e._vs), 32);
            e._vs = ye(r);
            const i = r[0] >= 128 ? 1 : 0;
            null == e.recoveryParam ? e.recoveryParam = i : e.recoveryParam !== i && ue.throwArgumentError("signature recoveryParam mismatch _vs", "signature", t), r[0] &= 127;
            const n = ye(r);
            null == e.s ? e.s = n : e.s !== n && ue.throwArgumentError("signature v mismatch _vs", "signature", t)
        }
        if (null == e.recoveryParam) null == e.v ? ue.throwArgumentError("signature missing v and recoveryParam", "signature", t) : 0 === e.v || 1 === e.v ? e.recoveryParam = e.v : e.recoveryParam = 1 - e.v % 2;
        else if (null == e.v) e.v = 27 + e.recoveryParam;
        else {
            const r = 0 === e.v || 1 === e.v ? e.v : 1 - e.v % 2;
            e.recoveryParam !== r && ue.throwArgumentError("signature recoveryParam mismatch v", "signature", t)
        }
        null != e.r && me(e.r) ? e.r = be(e.r, 32) : ue.throwArgumentError("signature missing or invalid r", "signature", t), null != e.s && me(e.s) ? e.s = be(e.s, 32) : ue.throwArgumentError("signature missing or invalid s", "signature", t);
        const r = ge(e.s);
        r[0] >= 128 && ue.throwArgumentError("signature s out of range", "signature", t), e.recoveryParam && (r[0] |= 128);
        const i = ye(r);
        e._vs && (me(e._vs) || ue.throwArgumentError("signature invalid _vs", "signature", t), e._vs = be(e._vs, 32)), null == e._vs ? e._vs = i : e._vs !== i && ue.throwArgumentError("signature _vs mismatch v and s", "signature", t)
    }
    return e.yParityAndS = e._vs, e.compact = e.r + e.yParityAndS.substring(2), e
}

function _e(t) {
    return "0x" + Zt.keccak_256(ge(t))
}
var Ee = {
        exports: {}
    },
    Ie = function(t) {
        var e = t.default;
        if ("function" == typeof e) {
            var r = function() {
                return e.apply(this, arguments)
            };
            r.prototype = e.prototype
        } else r = {};
        return Object.defineProperty(r, "__esModule", {
            value: !0
        }), Object.keys(t).forEach((function(e) {
            var i = Object.getOwnPropertyDescriptor(t, e);
            Object.defineProperty(r, e, i.get ? i : {
                enumerable: !0,
                get: function() {
                    return t[e]
                }
            })
        })), r
    }(Object.freeze({
        __proto__: null,
        default: {}
    }));
! function(t, e) {
    function r(t, e) {
        if (!t) throw new Error(e || "Assertion failed")
    }

    function i(t, e) {
        t.super_ = e;
        var r = function() {};
        r.prototype = e.prototype, t.prototype = new r, t.prototype.constructor = t
    }

    function n(t, e, r) {
        if (n.isBN(t)) return t;
        this.negative = 0, this.words = null, this.length = 0, this.red = null, null !== t && (("le" === e || "be" === e) && (r = e, e = 10), this._init(t || 0, e || 10, r || "be"))
    }
    var s;
    "object" == typeof t ? t.exports = n : e.BN = n, n.BN = n, n.wordSize = 26;
    try {
        s = typeof window < "u" && typeof window.Buffer < "u" ? window.Buffer : Ie.Buffer
    } catch {}

    function o(t, e) {
        var i = t.charCodeAt(e);
        return i >= 48 && i <= 57 ? i - 48 : i >= 65 && i <= 70 ? i - 55 : i >= 97 && i <= 102 ? i - 87 : void r(!1, "Invalid character in " + t)
    }

    function a(t, e, r) {
        var i = o(t, r);
        return r - 1 >= e && (i |= o(t, r - 1) << 4), i
    }

    function c(t, e, i, n) {
        for (var s = 0, o = 0, a = Math.min(t.length, i), c = e; c < a; c++) {
            var h = t.charCodeAt(c) - 48;
            s *= n, o = h >= 49 ? h - 49 + 10 : h >= 17 ? h - 17 + 10 : h, r(h >= 0 && o < n, "Invalid character"), s += o
        }
        return s
    }

    function h(t, e) {
        t.words = e.words, t.length = e.length, t.negative = e.negative, t.red = e.red
    }
    if (n.isBN = function(t) {
            return t instanceof n || null !== t && "object" == typeof t && t.constructor.wordSize === n.wordSize && Array.isArray(t.words)
        }, n.max = function(t, e) {
            return t.cmp(e) > 0 ? t : e
        }, n.min = function(t, e) {
            return t.cmp(e) < 0 ? t : e
        }, n.prototype._init = function(t, e, i) {
            if ("number" == typeof t) return this._initNumber(t, e, i);
            if ("object" == typeof t) return this._initArray(t, e, i);
            "hex" === e && (e = 16), r(e === (0 | e) && e >= 2 && e <= 36);
            var n = 0;
            "-" === (t = t.toString().replace(/\s+/g, ""))[0] && (n++, this.negative = 1), n < t.length && (16 === e ? this._parseHex(t, n, i) : (this._parseBase(t, e, n), "le" === i && this._initArray(this.toArray(), e, i)))
        }, n.prototype._initNumber = function(t, e, i) {
            t < 0 && (this.negative = 1, t = -t), t < 67108864 ? (this.words = [67108863 & t], this.length = 1) : t < 4503599627370496 ? (this.words = [67108863 & t, t / 67108864 & 67108863], this.length = 2) : (r(t < 9007199254740992), this.words = [67108863 & t, t / 67108864 & 67108863, 1], this.length = 3), "le" === i && this._initArray(this.toArray(), e, i)
        }, n.prototype._initArray = function(t, e, i) {
            if (r("number" == typeof t.length), t.length <= 0) return this.words = [0], this.length = 1, this;
            this.length = Math.ceil(t.length / 3), this.words = new Array(this.length);
            for (var n = 0; n < this.length; n++) this.words[n] = 0;
            var s, o, a = 0;
            if ("be" === i)
                for (n = t.length - 1, s = 0; n >= 0; n -= 3) o = t[n] | t[n - 1] << 8 | t[n - 2] << 16, this.words[s] |= o << a & 67108863, this.words[s + 1] = o >>> 26 - a & 67108863, (a += 24) >= 26 && (a -= 26, s++);
            else if ("le" === i)
                for (n = 0, s = 0; n < t.length; n += 3) o = t[n] | t[n + 1] << 8 | t[n + 2] << 16, this.words[s] |= o << a & 67108863, this.words[s + 1] = o >>> 26 - a & 67108863, (a += 24) >= 26 && (a -= 26, s++);
            return this._strip()
        }, n.prototype._parseHex = function(t, e, r) {
            this.length = Math.ceil((t.length - e) / 6), this.words = new Array(this.length);
            for (var i = 0; i < this.length; i++) this.words[i] = 0;
            var n, s = 0,
                o = 0;
            if ("be" === r)
                for (i = t.length - 1; i >= e; i -= 2) n = a(t, e, i) << s, this.words[o] |= 67108863 & n, s >= 18 ? (s -= 18, o += 1, this.words[o] |= n >>> 26) : s += 8;
            else
                for (i = (t.length - e) % 2 == 0 ? e + 1 : e; i < t.length; i += 2) n = a(t, e, i) << s, this.words[o] |= 67108863 & n, s >= 18 ? (s -= 18, o += 1, this.words[o] |= n >>> 26) : s += 8;
            this._strip()
        }, n.prototype._parseBase = function(t, e, r) {
            this.words = [0], this.length = 1;
            for (var i = 0, n = 1; n <= 67108863; n *= e) i++;
            i--, n = n / e | 0;
            for (var s = t.length - r, o = s % i, a = Math.min(s, s - o) + r, h = 0, u = r; u < a; u += i) h = c(t, u, u + i, e), this.imuln(n), this.words[0] + h < 67108864 ? this.words[0] += h : this._iaddn(h);
            if (0 !== o) {
                var l = 1;
                for (h = c(t, u, t.length, e), u = 0; u < o; u++) l *= e;
                this.imuln(l), this.words[0] + h < 67108864 ? this.words[0] += h : this._iaddn(h)
            }
            this._strip()
        }, n.prototype.copy = function(t) {
            t.words = new Array(this.length);
            for (var e = 0; e < this.length; e++) t.words[e] = this.words[e];
            t.length = this.length, t.negative = this.negative, t.red = this.red
        }, n.prototype._move = function(t) {
            h(t, this)
        }, n.prototype.clone = function() {
            var t = new n(null);
            return this.copy(t), t
        }, n.prototype._expand = function(t) {
            for (; this.length < t;) this.words[this.length++] = 0;
            return this
        }, n.prototype._strip = function() {
            for (; this.length > 1 && 0 === this.words[this.length - 1];) this.length--;
            return this._normSign()
        }, n.prototype._normSign = function() {
            return 1 === this.length && 0 === this.words[0] && (this.negative = 0), this
        }, typeof Symbol < "u" && "function" == typeof Symbol.for) try {
        n.prototype[Symbol.for("nodejs.util.inspect.custom")] = u
    } catch {
        n.prototype.inspect = u
    } else n.prototype.inspect = u;

    function u() {
        return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">"
    }
    var l = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"],
        f = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
        p = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];

    function d(t, e, r) {
        r.negative = e.negative ^ t.negative;
        var i = t.length + e.length | 0;
        r.length = i, i = i - 1 | 0;
        var n = 0 | t.words[0],
            s = 0 | e.words[0],
            o = n * s,
            a = 67108863 & o,
            c = o / 67108864 | 0;
        r.words[0] = a;
        for (var h = 1; h < i; h++) {
            for (var u = c >>> 26, l = 67108863 & c, f = Math.min(h, e.length - 1), p = Math.max(0, h - t.length + 1); p <= f; p++) {
                var d = h - p | 0;
                u += (o = (n = 0 | t.words[d]) * (s = 0 | e.words[p]) + l) / 67108864 | 0, l = 67108863 & o
            }
            r.words[h] = 0 | l, c = 0 | u
        }
        return 0 !== c ? r.words[h] = 0 | c : r.length--, r._strip()
    }
    n.prototype.toString = function(t, e) {
        var i;
        if (e = 0 | e || 1, 16 === (t = t || 10) || "hex" === t) {
            i = "";
            for (var n = 0, s = 0, o = 0; o < this.length; o++) {
                var a = this.words[o],
                    c = (16777215 & (a << n | s)).toString(16);
                s = a >>> 24 - n & 16777215, (n += 2) >= 26 && (n -= 26, o--), i = 0 !== s || o !== this.length - 1 ? l[6 - c.length] + c + i : c + i
            }
            for (0 !== s && (i = s.toString(16) + i); i.length % e != 0;) i = "0" + i;
            return 0 !== this.negative && (i = "-" + i), i
        }
        if (t === (0 | t) && t >= 2 && t <= 36) {
            var h = f[t],
                u = p[t];
            i = "";
            var d = this.clone();
            for (d.negative = 0; !d.isZero();) {
                var g = d.modrn(u).toString(t);
                i = (d = d.idivn(u)).isZero() ? g + i : l[h - g.length] + g + i
            }
            for (this.isZero() && (i = "0" + i); i.length % e != 0;) i = "0" + i;
            return 0 !== this.negative && (i = "-" + i), i
        }
        r(!1, "Base should be between 2 and 36")
    }, n.prototype.toNumber = function() {
        var t = this.words[0];
        return 2 === this.length ? t += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? t += 4503599627370496 + 67108864 * this.words[1] : this.length > 2 && r(!1, "Number can only safely store up to 53 bits"), 0 !== this.negative ? -t : t
    }, n.prototype.toJSON = function() {
        return this.toString(16, 2)
    }, s && (n.prototype.toBuffer = function(t, e) {
        return this.toArrayLike(s, t, e)
    }), n.prototype.toArray = function(t, e) {
        return this.toArrayLike(Array, t, e)
    }, n.prototype.toArrayLike = function(t, e, i) {
        this._strip();
        var n = this.byteLength(),
            s = i || Math.max(1, n);
        r(n <= s, "byte array longer than desired length"), r(s > 0, "Requested array length <= 0");
        var o = function(t, e) {
            return t.allocUnsafe ? t.allocUnsafe(e) : new t(e)
        }(t, s);
        return this["_toArrayLike" + ("le" === e ? "LE" : "BE")](o, n), o
    }, n.prototype._toArrayLikeLE = function(t, e) {
        for (var r = 0, i = 0, n = 0, s = 0; n < this.length; n++) {
            var o = this.words[n] << s | i;
            t[r++] = 255 & o, r < t.length && (t[r++] = o >> 8 & 255), r < t.length && (t[r++] = o >> 16 & 255), 6 === s ? (r < t.length && (t[r++] = o >> 24 & 255), i = 0, s = 0) : (i = o >>> 24, s += 2)
        }
        if (r < t.length)
            for (t[r++] = i; r < t.length;) t[r++] = 0
    }, n.prototype._toArrayLikeBE = function(t, e) {
        for (var r = t.length - 1, i = 0, n = 0, s = 0; n < this.length; n++) {
            var o = this.words[n] << s | i;
            t[r--] = 255 & o, r >= 0 && (t[r--] = o >> 8 & 255), r >= 0 && (t[r--] = o >> 16 & 255), 6 === s ? (r >= 0 && (t[r--] = o >> 24 & 255), i = 0, s = 0) : (i = o >>> 24, s += 2)
        }
        if (r >= 0)
            for (t[r--] = i; r >= 0;) t[r--] = 0
    }, Math.clz32 ? n.prototype._countBits = function(t) {
        return 32 - Math.clz32(t)
    } : n.prototype._countBits = function(t) {
        var e = t,
            r = 0;
        return e >= 4096 && (r += 13, e >>>= 13), e >= 64 && (r += 7, e >>>= 7), e >= 8 && (r += 4, e >>>= 4), e >= 2 && (r += 2, e >>>= 2), r + e
    }, n.prototype._zeroBits = function(t) {
        if (0 === t) return 26;
        var e = t,
            r = 0;
        return 8191 & e || (r += 13, e >>>= 13), 127 & e || (r += 7, e >>>= 7), 15 & e || (r += 4, e >>>= 4), 3 & e || (r += 2, e >>>= 2), 1 & e || r++, r
    }, n.prototype.bitLength = function() {
        var t = this.words[this.length - 1],
            e = this._countBits(t);
        return 26 * (this.length - 1) + e
    }, n.prototype.zeroBits = function() {
        if (this.isZero()) return 0;
        for (var t = 0, e = 0; e < this.length; e++) {
            var r = this._zeroBits(this.words[e]);
            if (t += r, 26 !== r) break
        }
        return t
    }, n.prototype.byteLength = function() {
        return Math.ceil(this.bitLength() / 8)
    }, n.prototype.toTwos = function(t) {
        return 0 !== this.negative ? this.abs().inotn(t).iaddn(1) : this.clone()
    }, n.prototype.fromTwos = function(t) {
        return this.testn(t - 1) ? this.notn(t).iaddn(1).ineg() : this.clone()
    }, n.prototype.isNeg = function() {
        return 0 !== this.negative
    }, n.prototype.neg = function() {
        return this.clone().ineg()
    }, n.prototype.ineg = function() {
        return this.isZero() || (this.negative ^= 1), this
    }, n.prototype.iuor = function(t) {
        for (; this.length < t.length;) this.words[this.length++] = 0;
        for (var e = 0; e < t.length; e++) this.words[e] = this.words[e] | t.words[e];
        return this._strip()
    }, n.prototype.ior = function(t) {
        return r(!(this.negative | t.negative)), this.iuor(t)
    }, n.prototype.or = function(t) {
        return this.length > t.length ? this.clone().ior(t) : t.clone().ior(this)
    }, n.prototype.uor = function(t) {
        return this.length > t.length ? this.clone().iuor(t) : t.clone().iuor(this)
    }, n.prototype.iuand = function(t) {
        var e;
        e = this.length > t.length ? t : this;
        for (var r = 0; r < e.length; r++) this.words[r] = this.words[r] & t.words[r];
        return this.length = e.length, this._strip()
    }, n.prototype.iand = function(t) {
        return r(!(this.negative | t.negative)), this.iuand(t)
    }, n.prototype.and = function(t) {
        return this.length > t.length ? this.clone().iand(t) : t.clone().iand(this)
    }, n.prototype.uand = function(t) {
        return this.length > t.length ? this.clone().iuand(t) : t.clone().iuand(this)
    }, n.prototype.iuxor = function(t) {
        var e, r;
        this.length > t.length ? (e = this, r = t) : (e = t, r = this);
        for (var i = 0; i < r.length; i++) this.words[i] = e.words[i] ^ r.words[i];
        if (this !== e)
            for (; i < e.length; i++) this.words[i] = e.words[i];
        return this.length = e.length, this._strip()
    }, n.prototype.ixor = function(t) {
        return r(!(this.negative | t.negative)), this.iuxor(t)
    }, n.prototype.xor = function(t) {
        return this.length > t.length ? this.clone().ixor(t) : t.clone().ixor(this)
    }, n.prototype.uxor = function(t) {
        return this.length > t.length ? this.clone().iuxor(t) : t.clone().iuxor(this)
    }, n.prototype.inotn = function(t) {
        r("number" == typeof t && t >= 0);
        var e = 0 | Math.ceil(t / 26),
            i = t % 26;
        this._expand(e), i > 0 && e--;
        for (var n = 0; n < e; n++) this.words[n] = 67108863 & ~this.words[n];
        return i > 0 && (this.words[n] = ~this.words[n] & 67108863 >> 26 - i), this._strip()
    }, n.prototype.notn = function(t) {
        return this.clone().inotn(t)
    }, n.prototype.setn = function(t, e) {
        r("number" == typeof t && t >= 0);
        var i = t / 26 | 0,
            n = t % 26;
        return this._expand(i + 1), this.words[i] = e ? this.words[i] | 1 << n : this.words[i] & ~(1 << n), this._strip()
    }, n.prototype.iadd = function(t) {
        var e, r, i;
        if (0 !== this.negative && 0 === t.negative) return this.negative = 0, e = this.isub(t), this.negative ^= 1, this._normSign();
        if (0 === this.negative && 0 !== t.negative) return t.negative = 0, e = this.isub(t), t.negative = 1, e._normSign();
        this.length > t.length ? (r = this, i = t) : (r = t, i = this);
        for (var n = 0, s = 0; s < i.length; s++) e = (0 | r.words[s]) + (0 | i.words[s]) + n, this.words[s] = 67108863 & e, n = e >>> 26;
        for (; 0 !== n && s < r.length; s++) e = (0 | r.words[s]) + n, this.words[s] = 67108863 & e, n = e >>> 26;
        if (this.length = r.length, 0 !== n) this.words[this.length] = n, this.length++;
        else if (r !== this)
            for (; s < r.length; s++) this.words[s] = r.words[s];
        return this
    }, n.prototype.add = function(t) {
        var e;
        return 0 !== t.negative && 0 === this.negative ? (t.negative = 0, e = this.sub(t), t.negative ^= 1, e) : 0 === t.negative && 0 !== this.negative ? (this.negative = 0, e = t.sub(this), this.negative = 1, e) : this.length > t.length ? this.clone().iadd(t) : t.clone().iadd(this)
    }, n.prototype.isub = function(t) {
        if (0 !== t.negative) {
            t.negative = 0;
            var e = this.iadd(t);
            return t.negative = 1, e._normSign()
        }
        if (0 !== this.negative) return this.negative = 0, this.iadd(t), this.negative = 1, this._normSign();
        var r, i, n = this.cmp(t);
        if (0 === n) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
        n > 0 ? (r = this, i = t) : (r = t, i = this);
        for (var s = 0, o = 0; o < i.length; o++) s = (e = (0 | r.words[o]) - (0 | i.words[o]) + s) >> 26, this.words[o] = 67108863 & e;
        for (; 0 !== s && o < r.length; o++) s = (e = (0 | r.words[o]) + s) >> 26, this.words[o] = 67108863 & e;
        if (0 === s && o < r.length && r !== this)
            for (; o < r.length; o++) this.words[o] = r.words[o];
        return this.length = Math.max(this.length, o), r !== this && (this.negative = 1), this._strip()
    }, n.prototype.sub = function(t) {
        return this.clone().isub(t)
    };
    var g = function(t, e, r) {
        var i, n, s, o = t.words,
            a = e.words,
            c = r.words,
            h = 0,
            u = 0 | o[0],
            l = 8191 & u,
            f = u >>> 13,
            p = 0 | o[1],
            d = 8191 & p,
            g = p >>> 13,
            m = 0 | o[2],
            v = 8191 & m,
            y = m >>> 13,
            w = 0 | o[3],
            b = 8191 & w,
            A = w >>> 13,
            _ = 0 | o[4],
            E = 8191 & _,
            I = _ >>> 13,
            S = 0 | o[5],
            M = 8191 & S,
            P = S >>> 13,
            x = 0 | o[6],
            N = 8191 & x,
            C = x >>> 13,
            O = 0 | o[7],
            R = 8191 & O,
            T = O >>> 13,
            q = 0 | o[8],
            D = 8191 & q,
            k = q >>> 13,
            B = 0 | o[9],
            U = 8191 & B,
            j = B >>> 13,
            z = 0 | a[0],
            L = 8191 & z,
            F = z >>> 13,
            K = 0 | a[1],
            H = 8191 & K,
            $ = K >>> 13,
            V = 0 | a[2],
            Q = 8191 & V,
            W = V >>> 13,
            G = 0 | a[3],
            J = 8191 & G,
            Y = G >>> 13,
            X = 0 | a[4],
            Z = 8191 & X,
            tt = X >>> 13,
            et = 0 | a[5],
            rt = 8191 & et,
            it = et >>> 13,
            nt = 0 | a[6],
            st = 8191 & nt,
            ot = nt >>> 13,
            at = 0 | a[7],
            ct = 8191 & at,
            ht = at >>> 13,
            ut = 0 | a[8],
            lt = 8191 & ut,
            ft = ut >>> 13,
            pt = 0 | a[9],
            dt = 8191 & pt,
            gt = pt >>> 13;
        r.negative = t.negative ^ e.negative, r.length = 19;
        var mt = (h + (i = Math.imul(l, L)) | 0) + ((8191 & (n = (n = Math.imul(l, F)) + Math.imul(f, L) | 0)) << 13) | 0;
        h = ((s = Math.imul(f, F)) + (n >>> 13) | 0) + (mt >>> 26) | 0, mt &= 67108863, i = Math.imul(d, L), n = (n = Math.imul(d, F)) + Math.imul(g, L) | 0, s = Math.imul(g, F);
        var vt = (h + (i = i + Math.imul(l, H) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(l, $) | 0) + Math.imul(f, H) | 0)) << 13) | 0;
        h = ((s = s + Math.imul(f, $) | 0) + (n >>> 13) | 0) + (vt >>> 26) | 0, vt &= 67108863, i = Math.imul(v, L), n = (n = Math.imul(v, F)) + Math.imul(y, L) | 0, s = Math.imul(y, F), i = i + Math.imul(d, H) | 0, n = (n = n + Math.imul(d, $) | 0) + Math.imul(g, H) | 0, s = s + Math.imul(g, $) | 0;
        var yt = (h + (i = i + Math.imul(l, Q) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(l, W) | 0) + Math.imul(f, Q) | 0)) << 13) | 0;
        h = ((s = s + Math.imul(f, W) | 0) + (n >>> 13) | 0) + (yt >>> 26) | 0, yt &= 67108863, i = Math.imul(b, L), n = (n = Math.imul(b, F)) + Math.imul(A, L) | 0, s = Math.imul(A, F), i = i + Math.imul(v, H) | 0, n = (n = n + Math.imul(v, $) | 0) + Math.imul(y, H) | 0, s = s + Math.imul(y, $) | 0, i = i + Math.imul(d, Q) | 0, n = (n = n + Math.imul(d, W) | 0) + Math.imul(g, Q) | 0, s = s + Math.imul(g, W) | 0;
        var wt = (h + (i = i + Math.imul(l, J) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(l, Y) | 0) + Math.imul(f, J) | 0)) << 13) | 0;
        h = ((s = s + Math.imul(f, Y) | 0) + (n >>> 13) | 0) + (wt >>> 26) | 0, wt &= 67108863, i = Math.imul(E, L), n = (n = Math.imul(E, F)) + Math.imul(I, L) | 0, s = Math.imul(I, F), i = i + Math.imul(b, H) | 0, n = (n = n + Math.imul(b, $) | 0) + Math.imul(A, H) | 0, s = s + Math.imul(A, $) | 0, i = i + Math.imul(v, Q) | 0, n = (n = n + Math.imul(v, W) | 0) + Math.imul(y, Q) | 0, s = s + Math.imul(y, W) | 0, i = i + Math.imul(d, J) | 0, n = (n = n + Math.imul(d, Y) | 0) + Math.imul(g, J) | 0, s = s + Math.imul(g, Y) | 0;
        var bt = (h + (i = i + Math.imul(l, Z) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(l, tt) | 0) + Math.imul(f, Z) | 0)) << 13) | 0;
        h = ((s = s + Math.imul(f, tt) | 0) + (n >>> 13) | 0) + (bt >>> 26) | 0, bt &= 67108863, i = Math.imul(M, L), n = (n = Math.imul(M, F)) + Math.imul(P, L) | 0, s = Math.imul(P, F), i = i + Math.imul(E, H) | 0, n = (n = n + Math.imul(E, $) | 0) + Math.imul(I, H) | 0, s = s + Math.imul(I, $) | 0, i = i + Math.imul(b, Q) | 0, n = (n = n + Math.imul(b, W) | 0) + Math.imul(A, Q) | 0, s = s + Math.imul(A, W) | 0, i = i + Math.imul(v, J) | 0, n = (n = n + Math.imul(v, Y) | 0) + Math.imul(y, J) | 0, s = s + Math.imul(y, Y) | 0, i = i + Math.imul(d, Z) | 0, n = (n = n + Math.imul(d, tt) | 0) + Math.imul(g, Z) | 0, s = s + Math.imul(g, tt) | 0;
        var At = (h + (i = i + Math.imul(l, rt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(l, it) | 0) + Math.imul(f, rt) | 0)) << 13) | 0;
        h = ((s = s + Math.imul(f, it) | 0) + (n >>> 13) | 0) + (At >>> 26) | 0, At &= 67108863, i = Math.imul(N, L), n = (n = Math.imul(N, F)) + Math.imul(C, L) | 0, s = Math.imul(C, F), i = i + Math.imul(M, H) | 0, n = (n = n + Math.imul(M, $) | 0) + Math.imul(P, H) | 0, s = s + Math.imul(P, $) | 0, i = i + Math.imul(E, Q) | 0, n = (n = n + Math.imul(E, W) | 0) + Math.imul(I, Q) | 0, s = s + Math.imul(I, W) | 0, i = i + Math.imul(b, J) | 0, n = (n = n + Math.imul(b, Y) | 0) + Math.imul(A, J) | 0, s = s + Math.imul(A, Y) | 0, i = i + Math.imul(v, Z) | 0, n = (n = n + Math.imul(v, tt) | 0) + Math.imul(y, Z) | 0, s = s + Math.imul(y, tt) | 0, i = i + Math.imul(d, rt) | 0, n = (n = n + Math.imul(d, it) | 0) + Math.imul(g, rt) | 0, s = s + Math.imul(g, it) | 0;
        var _t = (h + (i = i + Math.imul(l, st) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(l, ot) | 0) + Math.imul(f, st) | 0)) << 13) | 0;
        h = ((s = s + Math.imul(f, ot) | 0) + (n >>> 13) | 0) + (_t >>> 26) | 0, _t &= 67108863, i = Math.imul(R, L), n = (n = Math.imul(R, F)) + Math.imul(T, L) | 0, s = Math.imul(T, F), i = i + Math.imul(N, H) | 0, n = (n = n + Math.imul(N, $) | 0) + Math.imul(C, H) | 0, s = s + Math.imul(C, $) | 0, i = i + Math.imul(M, Q) | 0, n = (n = n + Math.imul(M, W) | 0) + Math.imul(P, Q) | 0, s = s + Math.imul(P, W) | 0, i = i + Math.imul(E, J) | 0, n = (n = n + Math.imul(E, Y) | 0) + Math.imul(I, J) | 0, s = s + Math.imul(I, Y) | 0, i = i + Math.imul(b, Z) | 0, n = (n = n + Math.imul(b, tt) | 0) + Math.imul(A, Z) | 0, s = s + Math.imul(A, tt) | 0, i = i + Math.imul(v, rt) | 0, n = (n = n + Math.imul(v, it) | 0) + Math.imul(y, rt) | 0, s = s + Math.imul(y, it) | 0, i = i + Math.imul(d, st) | 0, n = (n = n + Math.imul(d, ot) | 0) + Math.imul(g, st) | 0, s = s + Math.imul(g, ot) | 0;
        var Et = (h + (i = i + Math.imul(l, ct) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(l, ht) | 0) + Math.imul(f, ct) | 0)) << 13) | 0;
        h = ((s = s + Math.imul(f, ht) | 0) + (n >>> 13) | 0) + (Et >>> 26) | 0, Et &= 67108863, i = Math.imul(D, L), n = (n = Math.imul(D, F)) + Math.imul(k, L) | 0, s = Math.imul(k, F), i = i + Math.imul(R, H) | 0, n = (n = n + Math.imul(R, $) | 0) + Math.imul(T, H) | 0, s = s + Math.imul(T, $) | 0, i = i + Math.imul(N, Q) | 0, n = (n = n + Math.imul(N, W) | 0) + Math.imul(C, Q) | 0, s = s + Math.imul(C, W) | 0, i = i + Math.imul(M, J) | 0, n = (n = n + Math.imul(M, Y) | 0) + Math.imul(P, J) | 0, s = s + Math.imul(P, Y) | 0, i = i + Math.imul(E, Z) | 0, n = (n = n + Math.imul(E, tt) | 0) + Math.imul(I, Z) | 0, s = s + Math.imul(I, tt) | 0, i = i + Math.imul(b, rt) | 0, n = (n = n + Math.imul(b, it) | 0) + Math.imul(A, rt) | 0, s = s + Math.imul(A, it) | 0, i = i + Math.imul(v, st) | 0, n = (n = n + Math.imul(v, ot) | 0) + Math.imul(y, st) | 0, s = s + Math.imul(y, ot) | 0, i = i + Math.imul(d, ct) | 0, n = (n = n + Math.imul(d, ht) | 0) + Math.imul(g, ct) | 0, s = s + Math.imul(g, ht) | 0;
        var It = (h + (i = i + Math.imul(l, lt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(l, ft) | 0) + Math.imul(f, lt) | 0)) << 13) | 0;
        h = ((s = s + Math.imul(f, ft) | 0) + (n >>> 13) | 0) + (It >>> 26) | 0, It &= 67108863, i = Math.imul(U, L), n = (n = Math.imul(U, F)) + Math.imul(j, L) | 0, s = Math.imul(j, F), i = i + Math.imul(D, H) | 0, n = (n = n + Math.imul(D, $) | 0) + Math.imul(k, H) | 0, s = s + Math.imul(k, $) | 0, i = i + Math.imul(R, Q) | 0, n = (n = n + Math.imul(R, W) | 0) + Math.imul(T, Q) | 0, s = s + Math.imul(T, W) | 0, i = i + Math.imul(N, J) | 0, n = (n = n + Math.imul(N, Y) | 0) + Math.imul(C, J) | 0, s = s + Math.imul(C, Y) | 0, i = i + Math.imul(M, Z) | 0, n = (n = n + Math.imul(M, tt) | 0) + Math.imul(P, Z) | 0, s = s + Math.imul(P, tt) | 0, i = i + Math.imul(E, rt) | 0, n = (n = n + Math.imul(E, it) | 0) + Math.imul(I, rt) | 0, s = s + Math.imul(I, it) | 0, i = i + Math.imul(b, st) | 0, n = (n = n + Math.imul(b, ot) | 0) + Math.imul(A, st) | 0, s = s + Math.imul(A, ot) | 0, i = i + Math.imul(v, ct) | 0, n = (n = n + Math.imul(v, ht) | 0) + Math.imul(y, ct) | 0, s = s + Math.imul(y, ht) | 0, i = i + Math.imul(d, lt) | 0, n = (n = n + Math.imul(d, ft) | 0) + Math.imul(g, lt) | 0, s = s + Math.imul(g, ft) | 0;
        var St = (h + (i = i + Math.imul(l, dt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(l, gt) | 0) + Math.imul(f, dt) | 0)) << 13) | 0;
        h = ((s = s + Math.imul(f, gt) | 0) + (n >>> 13) | 0) + (St >>> 26) | 0, St &= 67108863, i = Math.imul(U, H), n = (n = Math.imul(U, $)) + Math.imul(j, H) | 0, s = Math.imul(j, $), i = i + Math.imul(D, Q) | 0, n = (n = n + Math.imul(D, W) | 0) + Math.imul(k, Q) | 0, s = s + Math.imul(k, W) | 0, i = i + Math.imul(R, J) | 0, n = (n = n + Math.imul(R, Y) | 0) + Math.imul(T, J) | 0, s = s + Math.imul(T, Y) | 0, i = i + Math.imul(N, Z) | 0, n = (n = n + Math.imul(N, tt) | 0) + Math.imul(C, Z) | 0, s = s + Math.imul(C, tt) | 0, i = i + Math.imul(M, rt) | 0, n = (n = n + Math.imul(M, it) | 0) + Math.imul(P, rt) | 0, s = s + Math.imul(P, it) | 0, i = i + Math.imul(E, st) | 0, n = (n = n + Math.imul(E, ot) | 0) + Math.imul(I, st) | 0, s = s + Math.imul(I, ot) | 0, i = i + Math.imul(b, ct) | 0, n = (n = n + Math.imul(b, ht) | 0) + Math.imul(A, ct) | 0, s = s + Math.imul(A, ht) | 0, i = i + Math.imul(v, lt) | 0, n = (n = n + Math.imul(v, ft) | 0) + Math.imul(y, lt) | 0, s = s + Math.imul(y, ft) | 0;
        var Mt = (h + (i = i + Math.imul(d, dt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(d, gt) | 0) + Math.imul(g, dt) | 0)) << 13) | 0;
        h = ((s = s + Math.imul(g, gt) | 0) + (n >>> 13) | 0) + (Mt >>> 26) | 0, Mt &= 67108863, i = Math.imul(U, Q), n = (n = Math.imul(U, W)) + Math.imul(j, Q) | 0, s = Math.imul(j, W), i = i + Math.imul(D, J) | 0, n = (n = n + Math.imul(D, Y) | 0) + Math.imul(k, J) | 0, s = s + Math.imul(k, Y) | 0, i = i + Math.imul(R, Z) | 0, n = (n = n + Math.imul(R, tt) | 0) + Math.imul(T, Z) | 0, s = s + Math.imul(T, tt) | 0, i = i + Math.imul(N, rt) | 0, n = (n = n + Math.imul(N, it) | 0) + Math.imul(C, rt) | 0, s = s + Math.imul(C, it) | 0, i = i + Math.imul(M, st) | 0, n = (n = n + Math.imul(M, ot) | 0) + Math.imul(P, st) | 0, s = s + Math.imul(P, ot) | 0, i = i + Math.imul(E, ct) | 0, n = (n = n + Math.imul(E, ht) | 0) + Math.imul(I, ct) | 0, s = s + Math.imul(I, ht) | 0, i = i + Math.imul(b, lt) | 0, n = (n = n + Math.imul(b, ft) | 0) + Math.imul(A, lt) | 0, s = s + Math.imul(A, ft) | 0;
        var Pt = (h + (i = i + Math.imul(v, dt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(v, gt) | 0) + Math.imul(y, dt) | 0)) << 13) | 0;
        h = ((s = s + Math.imul(y, gt) | 0) + (n >>> 13) | 0) + (Pt >>> 26) | 0, Pt &= 67108863, i = Math.imul(U, J), n = (n = Math.imul(U, Y)) + Math.imul(j, J) | 0, s = Math.imul(j, Y), i = i + Math.imul(D, Z) | 0, n = (n = n + Math.imul(D, tt) | 0) + Math.imul(k, Z) | 0, s = s + Math.imul(k, tt) | 0, i = i + Math.imul(R, rt) | 0, n = (n = n + Math.imul(R, it) | 0) + Math.imul(T, rt) | 0, s = s + Math.imul(T, it) | 0, i = i + Math.imul(N, st) | 0, n = (n = n + Math.imul(N, ot) | 0) + Math.imul(C, st) | 0, s = s + Math.imul(C, ot) | 0, i = i + Math.imul(M, ct) | 0, n = (n = n + Math.imul(M, ht) | 0) + Math.imul(P, ct) | 0, s = s + Math.imul(P, ht) | 0, i = i + Math.imul(E, lt) | 0, n = (n = n + Math.imul(E, ft) | 0) + Math.imul(I, lt) | 0, s = s + Math.imul(I, ft) | 0;
        var xt = (h + (i = i + Math.imul(b, dt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(b, gt) | 0) + Math.imul(A, dt) | 0)) << 13) | 0;
        h = ((s = s + Math.imul(A, gt) | 0) + (n >>> 13) | 0) + (xt >>> 26) | 0, xt &= 67108863, i = Math.imul(U, Z), n = (n = Math.imul(U, tt)) + Math.imul(j, Z) | 0, s = Math.imul(j, tt), i = i + Math.imul(D, rt) | 0, n = (n = n + Math.imul(D, it) | 0) + Math.imul(k, rt) | 0, s = s + Math.imul(k, it) | 0, i = i + Math.imul(R, st) | 0, n = (n = n + Math.imul(R, ot) | 0) + Math.imul(T, st) | 0, s = s + Math.imul(T, ot) | 0, i = i + Math.imul(N, ct) | 0, n = (n = n + Math.imul(N, ht) | 0) + Math.imul(C, ct) | 0, s = s + Math.imul(C, ht) | 0, i = i + Math.imul(M, lt) | 0, n = (n = n + Math.imul(M, ft) | 0) + Math.imul(P, lt) | 0, s = s + Math.imul(P, ft) | 0;
        var Nt = (h + (i = i + Math.imul(E, dt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(E, gt) | 0) + Math.imul(I, dt) | 0)) << 13) | 0;
        h = ((s = s + Math.imul(I, gt) | 0) + (n >>> 13) | 0) + (Nt >>> 26) | 0, Nt &= 67108863, i = Math.imul(U, rt), n = (n = Math.imul(U, it)) + Math.imul(j, rt) | 0, s = Math.imul(j, it), i = i + Math.imul(D, st) | 0, n = (n = n + Math.imul(D, ot) | 0) + Math.imul(k, st) | 0, s = s + Math.imul(k, ot) | 0, i = i + Math.imul(R, ct) | 0, n = (n = n + Math.imul(R, ht) | 0) + Math.imul(T, ct) | 0, s = s + Math.imul(T, ht) | 0, i = i + Math.imul(N, lt) | 0, n = (n = n + Math.imul(N, ft) | 0) + Math.imul(C, lt) | 0, s = s + Math.imul(C, ft) | 0;
        var Ct = (h + (i = i + Math.imul(M, dt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(M, gt) | 0) + Math.imul(P, dt) | 0)) << 13) | 0;
        h = ((s = s + Math.imul(P, gt) | 0) + (n >>> 13) | 0) + (Ct >>> 26) | 0, Ct &= 67108863, i = Math.imul(U, st), n = (n = Math.imul(U, ot)) + Math.imul(j, st) | 0, s = Math.imul(j, ot), i = i + Math.imul(D, ct) | 0, n = (n = n + Math.imul(D, ht) | 0) + Math.imul(k, ct) | 0, s = s + Math.imul(k, ht) | 0, i = i + Math.imul(R, lt) | 0, n = (n = n + Math.imul(R, ft) | 0) + Math.imul(T, lt) | 0, s = s + Math.imul(T, ft) | 0;
        var Ot = (h + (i = i + Math.imul(N, dt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(N, gt) | 0) + Math.imul(C, dt) | 0)) << 13) | 0;
        h = ((s = s + Math.imul(C, gt) | 0) + (n >>> 13) | 0) + (Ot >>> 26) | 0, Ot &= 67108863, i = Math.imul(U, ct), n = (n = Math.imul(U, ht)) + Math.imul(j, ct) | 0, s = Math.imul(j, ht), i = i + Math.imul(D, lt) | 0, n = (n = n + Math.imul(D, ft) | 0) + Math.imul(k, lt) | 0, s = s + Math.imul(k, ft) | 0;
        var Rt = (h + (i = i + Math.imul(R, dt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(R, gt) | 0) + Math.imul(T, dt) | 0)) << 13) | 0;
        h = ((s = s + Math.imul(T, gt) | 0) + (n >>> 13) | 0) + (Rt >>> 26) | 0, Rt &= 67108863, i = Math.imul(U, lt), n = (n = Math.imul(U, ft)) + Math.imul(j, lt) | 0, s = Math.imul(j, ft);
        var Tt = (h + (i = i + Math.imul(D, dt) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(D, gt) | 0) + Math.imul(k, dt) | 0)) << 13) | 0;
        h = ((s = s + Math.imul(k, gt) | 0) + (n >>> 13) | 0) + (Tt >>> 26) | 0, Tt &= 67108863;
        var qt = (h + (i = Math.imul(U, dt)) | 0) + ((8191 & (n = (n = Math.imul(U, gt)) + Math.imul(j, dt) | 0)) << 13) | 0;
        return h = ((s = Math.imul(j, gt)) + (n >>> 13) | 0) + (qt >>> 26) | 0, qt &= 67108863, c[0] = mt, c[1] = vt, c[2] = yt, c[3] = wt, c[4] = bt, c[5] = At, c[6] = _t, c[7] = Et, c[8] = It, c[9] = St, c[10] = Mt, c[11] = Pt, c[12] = xt, c[13] = Nt, c[14] = Ct, c[15] = Ot, c[16] = Rt, c[17] = Tt, c[18] = qt, 0 !== h && (c[19] = h, r.length++), r
    };

    function m(t, e, r) {
        r.negative = e.negative ^ t.negative, r.length = t.length + e.length;
        for (var i = 0, n = 0, s = 0; s < r.length - 1; s++) {
            var o = n;
            n = 0;
            for (var a = 67108863 & i, c = Math.min(s, e.length - 1), h = Math.max(0, s - t.length + 1); h <= c; h++) {
                var u = s - h,
                    l = (0 | t.words[u]) * (0 | e.words[h]),
                    f = 67108863 & l;
                a = 67108863 & (f = f + a | 0), n += (o = (o = o + (l / 67108864 | 0) | 0) + (f >>> 26) | 0) >>> 26, o &= 67108863
            }
            r.words[s] = a, i = o, o = n
        }
        return 0 !== i ? r.words[s] = i : r.length--, r._strip()
    }

    function v(t, e, r) {
        return m(t, e, r)
    }
    Math.imul || (g = d), n.prototype.mulTo = function(t, e) {
        var r = this.length + t.length;
        return 10 === this.length && 10 === t.length ? g(this, t, e) : r < 63 ? d(this, t, e) : r < 1024 ? m(this, t, e) : v(this, t, e)
    }, n.prototype.mul = function(t) {
        var e = new n(null);
        return e.words = new Array(this.length + t.length), this.mulTo(t, e)
    }, n.prototype.mulf = function(t) {
        var e = new n(null);
        return e.words = new Array(this.length + t.length), v(this, t, e)
    }, n.prototype.imul = function(t) {
        return this.clone().mulTo(t, this)
    }, n.prototype.imuln = function(t) {
        var e = t < 0;
        e && (t = -t), r("number" == typeof t), r(t < 67108864);
        for (var i = 0, n = 0; n < this.length; n++) {
            var s = (0 | this.words[n]) * t,
                o = (67108863 & s) + (67108863 & i);
            i >>= 26, i += s / 67108864 | 0, i += o >>> 26, this.words[n] = 67108863 & o
        }
        return 0 !== i && (this.words[n] = i, this.length++), e ? this.ineg() : this
    }, n.prototype.muln = function(t) {
        return this.clone().imuln(t)
    }, n.prototype.sqr = function() {
        return this.mul(this)
    }, n.prototype.isqr = function() {
        return this.imul(this.clone())
    }, n.prototype.pow = function(t) {
        var e = function(t) {
            for (var e = new Array(t.bitLength()), r = 0; r < e.length; r++) {
                var i = r / 26 | 0,
                    n = r % 26;
                e[r] = t.words[i] >>> n & 1
            }
            return e
        }(t);
        if (0 === e.length) return new n(1);
        for (var r = this, i = 0; i < e.length && 0 === e[i]; i++, r = r.sqr());
        if (++i < e.length)
            for (var s = r.sqr(); i < e.length; i++, s = s.sqr()) 0 !== e[i] && (r = r.mul(s));
        return r
    }, n.prototype.iushln = function(t) {
        r("number" == typeof t && t >= 0);
        var e, i = t % 26,
            n = (t - i) / 26,
            s = 67108863 >>> 26 - i << 26 - i;
        if (0 !== i) {
            var o = 0;
            for (e = 0; e < this.length; e++) {
                var a = this.words[e] & s,
                    c = (0 | this.words[e]) - a << i;
                this.words[e] = c | o, o = a >>> 26 - i
            }
            o && (this.words[e] = o, this.length++)
        }
        if (0 !== n) {
            for (e = this.length - 1; e >= 0; e--) this.words[e + n] = this.words[e];
            for (e = 0; e < n; e++) this.words[e] = 0;
            this.length += n
        }
        return this._strip()
    }, n.prototype.ishln = function(t) {
        return r(0 === this.negative), this.iushln(t)
    }, n.prototype.iushrn = function(t, e, i) {
        var n;
        r("number" == typeof t && t >= 0), n = e ? (e - e % 26) / 26 : 0;
        var s = t % 26,
            o = Math.min((t - s) / 26, this.length),
            a = 67108863 ^ 67108863 >>> s << s,
            c = i;
        if (n -= o, n = Math.max(0, n), c) {
            for (var h = 0; h < o; h++) c.words[h] = this.words[h];
            c.length = o
        }
        if (0 !== o)
            if (this.length > o)
                for (this.length -= o, h = 0; h < this.length; h++) this.words[h] = this.words[h + o];
            else this.words[0] = 0, this.length = 1;
        var u = 0;
        for (h = this.length - 1; h >= 0 && (0 !== u || h >= n); h--) {
            var l = 0 | this.words[h];
            this.words[h] = u << 26 - s | l >>> s, u = l & a
        }
        return c && 0 !== u && (c.words[c.length++] = u), 0 === this.length && (this.words[0] = 0, this.length = 1), this._strip()
    }, n.prototype.ishrn = function(t, e, i) {
        return r(0 === this.negative), this.iushrn(t, e, i)
    }, n.prototype.shln = function(t) {
        return this.clone().ishln(t)
    }, n.prototype.ushln = function(t) {
        return this.clone().iushln(t)
    }, n.prototype.shrn = function(t) {
        return this.clone().ishrn(t)
    }, n.prototype.ushrn = function(t) {
        return this.clone().iushrn(t)
    }, n.prototype.testn = function(t) {
        r("number" == typeof t && t >= 0);
        var e = t % 26,
            i = (t - e) / 26,
            n = 1 << e;
        return !(this.length <= i || !(this.words[i] & n))
    }, n.prototype.imaskn = function(t) {
        r("number" == typeof t && t >= 0);
        var e = t % 26,
            i = (t - e) / 26;
        if (r(0 === this.negative, "imaskn works only with positive numbers"), this.length <= i) return this;
        if (0 !== e && i++, this.length = Math.min(i, this.length), 0 !== e) {
            var n = 67108863 ^ 67108863 >>> e << e;
            this.words[this.length - 1] &= n
        }
        return this._strip()
    }, n.prototype.maskn = function(t) {
        return this.clone().imaskn(t)
    }, n.prototype.iaddn = function(t) {
        return r("number" == typeof t), r(t < 67108864), t < 0 ? this.isubn(-t) : 0 !== this.negative ? 1 === this.length && (0 | this.words[0]) <= t ? (this.words[0] = t - (0 | this.words[0]), this.negative = 0, this) : (this.negative = 0, this.isubn(t), this.negative = 1, this) : this._iaddn(t)
    }, n.prototype._iaddn = function(t) {
        this.words[0] += t;
        for (var e = 0; e < this.length && this.words[e] >= 67108864; e++) this.words[e] -= 67108864, e === this.length - 1 ? this.words[e + 1] = 1 : this.words[e + 1]++;
        return this.length = Math.max(this.length, e + 1), this
    }, n.prototype.isubn = function(t) {
        if (r("number" == typeof t), r(t < 67108864), t < 0) return this.iaddn(-t);
        if (0 !== this.negative) return this.negative = 0, this.iaddn(t), this.negative = 1, this;
        if (this.words[0] -= t, 1 === this.length && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1;
        else
            for (var e = 0; e < this.length && this.words[e] < 0; e++) this.words[e] += 67108864, this.words[e + 1] -= 1;
        return this._strip()
    }, n.prototype.addn = function(t) {
        return this.clone().iaddn(t)
    }, n.prototype.subn = function(t) {
        return this.clone().isubn(t)
    }, n.prototype.iabs = function() {
        return this.negative = 0, this
    }, n.prototype.abs = function() {
        return this.clone().iabs()
    }, n.prototype._ishlnsubmul = function(t, e, i) {
        var n, s = t.length + i;
        this._expand(s);
        var o, a = 0;
        for (n = 0; n < t.length; n++) {
            o = (0 | this.words[n + i]) + a;
            var c = (0 | t.words[n]) * e;
            a = ((o -= 67108863 & c) >> 26) - (c / 67108864 | 0), this.words[n + i] = 67108863 & o
        }
        for (; n < this.length - i; n++) a = (o = (0 | this.words[n + i]) + a) >> 26, this.words[n + i] = 67108863 & o;
        if (0 === a) return this._strip();
        for (r(-1 === a), a = 0, n = 0; n < this.length; n++) a = (o = -(0 | this.words[n]) + a) >> 26, this.words[n] = 67108863 & o;
        return this.negative = 1, this._strip()
    }, n.prototype._wordDiv = function(t, e) {
        var r = (this.length, t.length),
            i = this.clone(),
            s = t,
            o = 0 | s.words[s.length - 1];
        0 != (r = 26 - this._countBits(o)) && (s = s.ushln(r), i.iushln(r), o = 0 | s.words[s.length - 1]);
        var a, c = i.length - s.length;
        if ("mod" !== e) {
            (a = new n(null)).length = c + 1, a.words = new Array(a.length);
            for (var h = 0; h < a.length; h++) a.words[h] = 0
        }
        var u = i.clone()._ishlnsubmul(s, 1, c);
        0 === u.negative && (i = u, a && (a.words[c] = 1));
        for (var l = c - 1; l >= 0; l--) {
            var f = 67108864 * (0 | i.words[s.length + l]) + (0 | i.words[s.length + l - 1]);
            for (f = Math.min(f / o | 0, 67108863), i._ishlnsubmul(s, f, l); 0 !== i.negative;) f--, i.negative = 0, i._ishlnsubmul(s, 1, l), i.isZero() || (i.negative ^= 1);
            a && (a.words[l] = f)
        }
        return a && a._strip(), i._strip(), "div" !== e && 0 !== r && i.iushrn(r), {
            div: a || null,
            mod: i
        }
    }, n.prototype.divmod = function(t, e, i) {
        return r(!t.isZero()), this.isZero() ? {
            div: new n(0),
            mod: new n(0)
        } : 0 !== this.negative && 0 === t.negative ? (a = this.neg().divmod(t, e), "mod" !== e && (s = a.div.neg()), "div" !== e && (o = a.mod.neg(), i && 0 !== o.negative && o.iadd(t)), {
            div: s,
            mod: o
        }) : 0 === this.negative && 0 !== t.negative ? (a = this.divmod(t.neg(), e), "mod" !== e && (s = a.div.neg()), {
            div: s,
            mod: a.mod
        }) : this.negative & t.negative ? (a = this.neg().divmod(t.neg(), e), "div" !== e && (o = a.mod.neg(), i && 0 !== o.negative && o.isub(t)), {
            div: a.div,
            mod: o
        }) : t.length > this.length || this.cmp(t) < 0 ? {
            div: new n(0),
            mod: this
        } : 1 === t.length ? "div" === e ? {
            div: this.divn(t.words[0]),
            mod: null
        } : "mod" === e ? {
            div: null,
            mod: new n(this.modrn(t.words[0]))
        } : {
            div: this.divn(t.words[0]),
            mod: new n(this.modrn(t.words[0]))
        } : this._wordDiv(t, e);
        var s, o, a
    }, n.prototype.div = function(t) {
        return this.divmod(t, "div", !1).div
    }, n.prototype.mod = function(t) {
        return this.divmod(t, "mod", !1).mod
    }, n.prototype.umod = function(t) {
        return this.divmod(t, "mod", !0).mod
    }, n.prototype.divRound = function(t) {
        var e = this.divmod(t);
        if (e.mod.isZero()) return e.div;
        var r = 0 !== e.div.negative ? e.mod.isub(t) : e.mod,
            i = t.ushrn(1),
            n = t.andln(1),
            s = r.cmp(i);
        return s < 0 || 1 === n && 0 === s ? e.div : 0 !== e.div.negative ? e.div.isubn(1) : e.div.iaddn(1)
    }, n.prototype.modrn = function(t) {
        var e = t < 0;
        e && (t = -t), r(t <= 67108863);
        for (var i = (1 << 26) % t, n = 0, s = this.length - 1; s >= 0; s--) n = (i * n + (0 | this.words[s])) % t;
        return e ? -n : n
    }, n.prototype.modn = function(t) {
        return this.modrn(t)
    }, n.prototype.idivn = function(t) {
        var e = t < 0;
        e && (t = -t), r(t <= 67108863);
        for (var i = 0, n = this.length - 1; n >= 0; n--) {
            var s = (0 | this.words[n]) + 67108864 * i;
            this.words[n] = s / t | 0, i = s % t
        }
        return this._strip(), e ? this.ineg() : this
    }, n.prototype.divn = function(t) {
        return this.clone().idivn(t)
    }, n.prototype.egcd = function(t) {
        r(0 === t.negative), r(!t.isZero());
        var e = this,
            i = t.clone();
        e = 0 !== e.negative ? e.umod(t) : e.clone();
        for (var s = new n(1), o = new n(0), a = new n(0), c = new n(1), h = 0; e.isEven() && i.isEven();) e.iushrn(1), i.iushrn(1), ++h;
        for (var u = i.clone(), l = e.clone(); !e.isZero();) {
            for (var f = 0, p = 1; !(e.words[0] & p) && f < 26; ++f, p <<= 1);
            if (f > 0)
                for (e.iushrn(f); f-- > 0;)(s.isOdd() || o.isOdd()) && (s.iadd(u), o.isub(l)), s.iushrn(1), o.iushrn(1);
            for (var d = 0, g = 1; !(i.words[0] & g) && d < 26; ++d, g <<= 1);
            if (d > 0)
                for (i.iushrn(d); d-- > 0;)(a.isOdd() || c.isOdd()) && (a.iadd(u), c.isub(l)), a.iushrn(1), c.iushrn(1);
            e.cmp(i) >= 0 ? (e.isub(i), s.isub(a), o.isub(c)) : (i.isub(e), a.isub(s), c.isub(o))
        }
        return {
            a: a,
            b: c,
            gcd: i.iushln(h)
        }
    }, n.prototype._invmp = function(t) {
        r(0 === t.negative), r(!t.isZero());
        var e, i = this,
            s = t.clone();
        i = 0 !== i.negative ? i.umod(t) : i.clone();
        for (var o = new n(1), a = new n(0), c = s.clone(); i.cmpn(1) > 0 && s.cmpn(1) > 0;) {
            for (var h = 0, u = 1; !(i.words[0] & u) && h < 26; ++h, u <<= 1);
            if (h > 0)
                for (i.iushrn(h); h-- > 0;) o.isOdd() && o.iadd(c), o.iushrn(1);
            for (var l = 0, f = 1; !(s.words[0] & f) && l < 26; ++l, f <<= 1);
            if (l > 0)
                for (s.iushrn(l); l-- > 0;) a.isOdd() && a.iadd(c), a.iushrn(1);
            i.cmp(s) >= 0 ? (i.isub(s), o.isub(a)) : (s.isub(i), a.isub(o))
        }
        return (e = 0 === i.cmpn(1) ? o : a).cmpn(0) < 0 && e.iadd(t), e
    }, n.prototype.gcd = function(t) {
        if (this.isZero()) return t.abs();
        if (t.isZero()) return this.abs();
        var e = this.clone(),
            r = t.clone();
        e.negative = 0, r.negative = 0;
        for (var i = 0; e.isEven() && r.isEven(); i++) e.iushrn(1), r.iushrn(1);
        for (;;) {
            for (; e.isEven();) e.iushrn(1);
            for (; r.isEven();) r.iushrn(1);
            var n = e.cmp(r);
            if (n < 0) {
                var s = e;
                e = r, r = s
            } else if (0 === n || 0 === r.cmpn(1)) break;
            e.isub(r)
        }
        return r.iushln(i)
    }, n.prototype.invm = function(t) {
        return this.egcd(t).a.umod(t)
    }, n.prototype.isEven = function() {
        return !(1 & this.words[0])
    }, n.prototype.isOdd = function() {
        return !(1 & ~this.words[0])
    }, n.prototype.andln = function(t) {
        return this.words[0] & t
    }, n.prototype.bincn = function(t) {
        r("number" == typeof t);
        var e = t % 26,
            i = (t - e) / 26,
            n = 1 << e;
        if (this.length <= i) return this._expand(i + 1), this.words[i] |= n, this;
        for (var s = n, o = i; 0 !== s && o < this.length; o++) {
            var a = 0 | this.words[o];
            s = (a += s) >>> 26, a &= 67108863, this.words[o] = a
        }
        return 0 !== s && (this.words[o] = s, this.length++), this
    }, n.prototype.isZero = function() {
        return 1 === this.length && 0 === this.words[0]
    }, n.prototype.cmpn = function(t) {
        var e, i = t < 0;
        if (0 !== this.negative && !i) return -1;
        if (0 === this.negative && i) return 1;
        if (this._strip(), this.length > 1) e = 1;
        else {
            i && (t = -t), r(t <= 67108863, "Number is too big");
            var n = 0 | this.words[0];
            e = n === t ? 0 : n < t ? -1 : 1
        }
        return 0 !== this.negative ? 0 | -e : e
    }, n.prototype.cmp = function(t) {
        if (0 !== this.negative && 0 === t.negative) return -1;
        if (0 === this.negative && 0 !== t.negative) return 1;
        var e = this.ucmp(t);
        return 0 !== this.negative ? 0 | -e : e
    }, n.prototype.ucmp = function(t) {
        if (this.length > t.length) return 1;
        if (this.length < t.length) return -1;
        for (var e = 0, r = this.length - 1; r >= 0; r--) {
            var i = 0 | this.words[r],
                n = 0 | t.words[r];
            if (i !== n) {
                i < n ? e = -1 : i > n && (e = 1);
                break
            }
        }
        return e
    }, n.prototype.gtn = function(t) {
        return 1 === this.cmpn(t)
    }, n.prototype.gt = function(t) {
        return 1 === this.cmp(t)
    }, n.prototype.gten = function(t) {
        return this.cmpn(t) >= 0
    }, n.prototype.gte = function(t) {
        return this.cmp(t) >= 0
    }, n.prototype.ltn = function(t) {
        return -1 === this.cmpn(t)
    }, n.prototype.lt = function(t) {
        return -1 === this.cmp(t)
    }, n.prototype.lten = function(t) {
        return this.cmpn(t) <= 0
    }, n.prototype.lte = function(t) {
        return this.cmp(t) <= 0
    }, n.prototype.eqn = function(t) {
        return 0 === this.cmpn(t)
    }, n.prototype.eq = function(t) {
        return 0 === this.cmp(t)
    }, n.red = function(t) {
        return new I(t)
    }, n.prototype.toRed = function(t) {
        return r(!this.red, "Already a number in reduction context"), r(0 === this.negative, "red works only with positives"), t.convertTo(this)._forceRed(t)
    }, n.prototype.fromRed = function() {
        return r(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this)
    }, n.prototype._forceRed = function(t) {
        return this.red = t, this
    }, n.prototype.forceRed = function(t) {
        return r(!this.red, "Already a number in reduction context"), this._forceRed(t)
    }, n.prototype.redAdd = function(t) {
        return r(this.red, "redAdd works only with red numbers"), this.red.add(this, t)
    }, n.prototype.redIAdd = function(t) {
        return r(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, t)
    }, n.prototype.redSub = function(t) {
        return r(this.red, "redSub works only with red numbers"), this.red.sub(this, t)
    }, n.prototype.redISub = function(t) {
        return r(this.red, "redISub works only with red numbers"), this.red.isub(this, t)
    }, n.prototype.redShl = function(t) {
        return r(this.red, "redShl works only with red numbers"), this.red.shl(this, t)
    }, n.prototype.redMul = function(t) {
        return r(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.mul(this, t)
    }, n.prototype.redIMul = function(t) {
        return r(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.imul(this, t)
    }, n.prototype.redSqr = function() {
        return r(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this)
    }, n.prototype.redISqr = function() {
        return r(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this)
    }, n.prototype.redSqrt = function() {
        return r(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this)
    }, n.prototype.redInvm = function() {
        return r(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this)
    }, n.prototype.redNeg = function() {
        return r(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this)
    }, n.prototype.redPow = function(t) {
        return r(this.red && !t.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, t)
    };
    var y = {
        k256: null,
        p224: null,
        p192: null,
        p25519: null
    };

    function w(t, e) {
        this.name = t, this.p = new n(e, 16), this.n = this.p.bitLength(), this.k = new n(1).iushln(this.n).isub(this.p), this.tmp = this._tmp()
    }

    function b() {
        w.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")
    }

    function A() {
        w.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
    }

    function _() {
        w.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
    }

    function E() {
        w.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
    }

    function I(t) {
        if ("string" == typeof t) {
            var e = n._prime(t);
            this.m = e.p, this.prime = e
        } else r(t.gtn(1), "modulus must be greater than 1"), this.m = t, this.prime = null
    }

    function S(t) {
        I.call(this, t), this.shift = this.m.bitLength(), this.shift % 26 != 0 && (this.shift += 26 - this.shift % 26), this.r = new n(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv)
    }
    w.prototype._tmp = function() {
        var t = new n(null);
        return t.words = new Array(Math.ceil(this.n / 13)), t
    }, w.prototype.ireduce = function(t) {
        var e, r = t;
        do {
            this.split(r, this.tmp), e = (r = (r = this.imulK(r)).iadd(this.tmp)).bitLength()
        } while (e > this.n);
        var i = e < this.n ? -1 : r.ucmp(this.p);
        return 0 === i ? (r.words[0] = 0, r.length = 1) : i > 0 ? r.isub(this.p) : void 0 !== r.strip ? r.strip() : r._strip(), r
    }, w.prototype.split = function(t, e) {
        t.iushrn(this.n, 0, e)
    }, w.prototype.imulK = function(t) {
        return t.imul(this.k)
    }, i(b, w), b.prototype.split = function(t, e) {
        for (var r = 4194303, i = Math.min(t.length, 9), n = 0; n < i; n++) e.words[n] = t.words[n];
        if (e.length = i, t.length <= 9) return t.words[0] = 0, void(t.length = 1);
        var s = t.words[9];
        for (e.words[e.length++] = s & r, n = 10; n < t.length; n++) {
            var o = 0 | t.words[n];
            t.words[n - 10] = (o & r) << 4 | s >>> 22, s = o
        }
        s >>>= 22, t.words[n - 10] = s, 0 === s && t.length > 10 ? t.length -= 10 : t.length -= 9
    }, b.prototype.imulK = function(t) {
        t.words[t.length] = 0, t.words[t.length + 1] = 0, t.length += 2;
        for (var e = 0, r = 0; r < t.length; r++) {
            var i = 0 | t.words[r];
            e += 977 * i, t.words[r] = 67108863 & e, e = 64 * i + (e / 67108864 | 0)
        }
        return 0 === t.words[t.length - 1] && (t.length--, 0 === t.words[t.length - 1] && t.length--), t
    }, i(A, w), i(_, w), i(E, w), E.prototype.imulK = function(t) {
        for (var e = 0, r = 0; r < t.length; r++) {
            var i = 19 * (0 | t.words[r]) + e,
                n = 67108863 & i;
            i >>>= 26, t.words[r] = n, e = i
        }
        return 0 !== e && (t.words[t.length++] = e), t
    }, n._prime = function(t) {
        if (y[t]) return y[t];
        var e;
        if ("k256" === t) e = new b;
        else if ("p224" === t) e = new A;
        else if ("p192" === t) e = new _;
        else {
            if ("p25519" !== t) throw new Error("Unknown prime " + t);
            e = new E
        }
        return y[t] = e, e
    }, I.prototype._verify1 = function(t) {
        r(0 === t.negative, "red works only with positives"), r(t.red, "red works only with red numbers")
    }, I.prototype._verify2 = function(t, e) {
        r(!(t.negative | e.negative), "red works only with positives"), r(t.red && t.red === e.red, "red works only with red numbers")
    }, I.prototype.imod = function(t) {
        return this.prime ? this.prime.ireduce(t)._forceRed(this) : (h(t, t.umod(this.m)._forceRed(this)), t)
    }, I.prototype.neg = function(t) {
        return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this)
    }, I.prototype.add = function(t, e) {
        this._verify2(t, e);
        var r = t.add(e);
        return r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this)
    }, I.prototype.iadd = function(t, e) {
        this._verify2(t, e);
        var r = t.iadd(e);
        return r.cmp(this.m) >= 0 && r.isub(this.m), r
    }, I.prototype.sub = function(t, e) {
        this._verify2(t, e);
        var r = t.sub(e);
        return r.cmpn(0) < 0 && r.iadd(this.m), r._forceRed(this)
    }, I.prototype.isub = function(t, e) {
        this._verify2(t, e);
        var r = t.isub(e);
        return r.cmpn(0) < 0 && r.iadd(this.m), r
    }, I.prototype.shl = function(t, e) {
        return this._verify1(t), this.imod(t.ushln(e))
    }, I.prototype.imul = function(t, e) {
        return this._verify2(t, e), this.imod(t.imul(e))
    }, I.prototype.mul = function(t, e) {
        return this._verify2(t, e), this.imod(t.mul(e))
    }, I.prototype.isqr = function(t) {
        return this.imul(t, t.clone())
    }, I.prototype.sqr = function(t) {
        return this.mul(t, t)
    }, I.prototype.sqrt = function(t) {
        if (t.isZero()) return t.clone();
        var e = this.m.andln(3);
        if (r(e % 2 == 1), 3 === e) {
            var i = this.m.add(new n(1)).iushrn(2);
            return this.pow(t, i)
        }
        for (var s = this.m.subn(1), o = 0; !s.isZero() && 0 === s.andln(1);) o++, s.iushrn(1);
        r(!s.isZero());
        var a = new n(1).toRed(this),
            c = a.redNeg(),
            h = this.m.subn(1).iushrn(1),
            u = this.m.bitLength();
        for (u = new n(2 * u * u).toRed(this); 0 !== this.pow(u, h).cmp(c);) u.redIAdd(c);
        for (var l = this.pow(u, s), f = this.pow(t, s.addn(1).iushrn(1)), p = this.pow(t, s), d = o; 0 !== p.cmp(a);) {
            for (var g = p, m = 0; 0 !== g.cmp(a); m++) g = g.redSqr();
            r(m < d);
            var v = this.pow(l, new n(1).iushln(d - m - 1));
            f = f.redMul(v), l = v.redSqr(), p = p.redMul(l), d = m
        }
        return f
    }, I.prototype.invm = function(t) {
        var e = t._invmp(this.m);
        return 0 !== e.negative ? (e.negative = 0, this.imod(e).redNeg()) : this.imod(e)
    }, I.prototype.pow = function(t, e) {
        if (e.isZero()) return new n(1).toRed(this);
        if (0 === e.cmpn(1)) return t.clone();
        var r = new Array(16);
        r[0] = new n(1).toRed(this), r[1] = t;
        for (var i = 2; i < r.length; i++) r[i] = this.mul(r[i - 1], t);
        var s = r[0],
            o = 0,
            a = 0,
            c = e.bitLength() % 26;
        for (0 === c && (c = 26), i = e.length - 1; i >= 0; i--) {
            for (var h = e.words[i], u = c - 1; u >= 0; u--) {
                var l = h >> u & 1;
                s !== r[0] && (s = this.sqr(s)), 0 !== l || 0 !== o ? (o <<= 1, o |= l, (4 == ++a || 0 === i && 0 === u) && (s = this.mul(s, r[o]), a = 0, o = 0)) : a = 0
            }
            c = 26
        }
        return s
    }, I.prototype.convertTo = function(t) {
        var e = t.umod(this.m);
        return e === t ? e.clone() : e
    }, I.prototype.convertFrom = function(t) {
        var e = t.clone();
        return e.red = null, e
    }, n.mont = function(t) {
        return new S(t)
    }, i(S, I), S.prototype.convertTo = function(t) {
        return this.imod(t.ushln(this.shift))
    }, S.prototype.convertFrom = function(t) {
        var e = this.imod(t.mul(this.rinv));
        return e.red = null, e
    }, S.prototype.imul = function(t, e) {
        if (t.isZero() || e.isZero()) return t.words[0] = 0, t.length = 1, t;
        var r = t.imul(e),
            i = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
            n = r.isub(i).iushrn(this.shift),
            s = n;
        return n.cmp(this.m) >= 0 ? s = n.isub(this.m) : n.cmpn(0) < 0 && (s = n.iadd(this.m)), s._forceRed(this)
    }, S.prototype.mul = function(t, e) {
        if (t.isZero() || e.isZero()) return new n(0)._forceRed(this);
        var r = t.mul(e),
            i = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
            s = r.isub(i).iushrn(this.shift),
            o = s;
        return s.cmp(this.m) >= 0 ? o = s.isub(this.m) : s.cmpn(0) < 0 && (o = s.iadd(this.m)), o._forceRed(this)
    }, S.prototype.invm = function(t) {
        return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this)
    }
}(Ee, Jt);
var Se = Ee.exports;
const Me = "bignumber/5.7.0";
var Pe = Se.BN;
const xe = new he(Me),
    Ne = {},
    Ce = 9007199254740991;
let Oe = !1,
    Re = class t {
        constructor(t, e) {
            t !== Ne && xe.throwError("cannot call constructor directly; use BigNumber.from", he.errors.UNSUPPORTED_OPERATION, {
                operation: "new (BigNumber)"
            }), this._hex = e, this._isBigNumber = !0, Object.freeze(this)
        }
        fromTwos(t) {
            return qe(De(this).fromTwos(t))
        }
        toTwos(t) {
            return qe(De(this).toTwos(t))
        }
        abs() {
            return "-" === this._hex[0] ? t.from(this._hex.substring(1)) : this
        }
        add(t) {
            return qe(De(this).add(De(t)))
        }
        sub(t) {
            return qe(De(this).sub(De(t)))
        }
        div(e) {
            return t.from(e).isZero() && ke("division-by-zero", "div"), qe(De(this).div(De(e)))
        }
        mul(t) {
            return qe(De(this).mul(De(t)))
        }
        mod(t) {
            const e = De(t);
            return e.isNeg() && ke("division-by-zero", "mod"), qe(De(this).umod(e))
        }
        pow(t) {
            const e = De(t);
            return e.isNeg() && ke("negative-power", "pow"), qe(De(this).pow(e))
        }
        and(t) {
            const e = De(t);
            return (this.isNegative() || e.isNeg()) && ke("unbound-bitwise-result", "and"), qe(De(this).and(e))
        }
        or(t) {
            const e = De(t);
            return (this.isNegative() || e.isNeg()) && ke("unbound-bitwise-result", "or"), qe(De(this).or(e))
        }
        xor(t) {
            const e = De(t);
            return (this.isNegative() || e.isNeg()) && ke("unbound-bitwise-result", "xor"), qe(De(this).xor(e))
        }
        mask(t) {
            return (this.isNegative() || t < 0) && ke("negative-width", "mask"), qe(De(this).maskn(t))
        }
        shl(t) {
            return (this.isNegative() || t < 0) && ke("negative-width", "shl"), qe(De(this).shln(t))
        }
        shr(t) {
            return (this.isNegative() || t < 0) && ke("negative-width", "shr"), qe(De(this).shrn(t))
        }
        eq(t) {
            return De(this).eq(De(t))
        }
        lt(t) {
            return De(this).lt(De(t))
        }
        lte(t) {
            return De(this).lte(De(t))
        }
        gt(t) {
            return De(this).gt(De(t))
        }
        gte(t) {
            return De(this).gte(De(t))
        }
        isNegative() {
            return "-" === this._hex[0]
        }
        isZero() {
            return De(this).isZero()
        }
        toNumber() {
            try {
                return De(this).toNumber()
            } catch {
                ke("overflow", "toNumber", this.toString())
            }
            return null
        }
        toBigInt() {
            try {
                return BigInt(this.toString())
            } catch {}
            return xe.throwError("this platform does not support BigInt", he.errors.UNSUPPORTED_OPERATION, {
                value: this.toString()
            })
        }
        toString() {
            return arguments.length > 0 && (10 === arguments[0] ? Oe || (Oe = !0, xe.warn("BigNumber.toString does not accept any parameters; base-10 is assumed")) : 16 === arguments[0] ? xe.throwError("BigNumber.toString does not accept any parameters; use bigNumber.toHexString()", he.errors.UNEXPECTED_ARGUMENT, {}) : xe.throwError("BigNumber.toString does not accept parameters", he.errors.UNEXPECTED_ARGUMENT, {})), De(this).toString(10)
        }
        toHexString() {
            return this._hex
        }
        toJSON(t) {
            return {
                type: "BigNumber",
                hex: this.toHexString()
            }
        }
        static from(e) {
            if (e instanceof t) return e;
            if ("string" == typeof e) return e.match(/^-?0x[0-9a-f]+$/i) ? new t(Ne, Te(e)) : e.match(/^-?[0-9]+$/) ? new t(Ne, Te(new Pe(e))) : xe.throwArgumentError("invalid BigNumber string", "value", e);
            if ("number" == typeof e) return e % 1 && ke("underflow", "BigNumber.from", e), (e >= Ce || e <= -Ce) && ke("overflow", "BigNumber.from", e), t.from(String(e));
            const r = e;
            if ("bigint" == typeof r) return t.from(r.toString());
            if (de(r)) return t.from(ye(r));
            if (r)
                if (r.toHexString) {
                    const e = r.toHexString();
                    if ("string" == typeof e) return t.from(e)
                } else {
                    let e = r._hex;
                    if (null == e && "BigNumber" === r.type && (e = r.hex), "string" == typeof e && (me(e) || "-" === e[0] && me(e.substring(1)))) return t.from(e)
                }
            return xe.throwArgumentError("invalid BigNumber value", "value", e)
        }
        static isBigNumber(t) {
            return !(!t || !t._isBigNumber)
        }
    };

function Te(t) {
    if ("string" != typeof t) return Te(t.toString(16));
    if ("-" === t[0]) return "-" === (t = t.substring(1))[0] && xe.throwArgumentError("invalid hex", "value", t), "0x00" === (t = Te(t)) ? t : "-" + t;
    if ("0x" !== t.substring(0, 2) && (t = "0x" + t), "0x" === t) return "0x00";
    for (t.length % 2 && (t = "0x0" + t.substring(2)); t.length > 4 && "0x00" === t.substring(0, 4);) t = "0x" + t.substring(4);
    return t
}

function qe(t) {
    return Re.from(Te(t))
}

function De(t) {
    const e = Re.from(t).toHexString();
    return "-" === e[0] ? new Pe("-" + e.substring(3), 16) : new Pe(e.substring(2), 16)
}

function ke(t, e, r) {
    const i = {
        fault: t,
        operation: e
    };
    return null != r && (i.value = r), xe.throwError(t, he.errors.NUMERIC_FAULT, i)
}
const Be = new he(Me),
    Ue = {},
    je = Re.from(0),
    ze = Re.from(-1);

function Le(t, e, r, i) {
    const n = {
        fault: e,
        operation: r
    };
    return void 0 !== i && (n.value = i), Be.throwError(t, he.errors.NUMERIC_FAULT, n)
}
let Fe = "0";
for (; Fe.length < 256;) Fe += Fe;

function Ke(t) {
    if ("number" != typeof t) try {
        t = Re.from(t).toNumber()
    } catch {}
    return "number" == typeof t && t >= 0 && t <= 256 && !(t % 1) ? "1" + Fe.substring(0, t) : Be.throwArgumentError("invalid decimal size", "decimals", t)
}

function He(t, e) {
    null == e && (e = 0);
    const r = Ke(e),
        i = (t = Re.from(t)).lt(je);
    i && (t = t.mul(ze));
    let n = t.mod(r).toString();
    for (; n.length < r.length - 1;) n = "0" + n;
    n = n.match(/^([0-9]*[1-9]|0)(0*)/)[1];
    const s = t.div(r).toString();
    return t = 1 === r.length ? s : s + "." + n, i && (t = "-" + t), t
}

function $e(t, e) {
    null == e && (e = 0);
    const r = Ke(e);
    ("string" != typeof t || !t.match(/^-?[0-9.]+$/)) && Be.throwArgumentError("invalid decimal value", "value", t);
    const i = "-" === t.substring(0, 1);
    i && (t = t.substring(1)), "." === t && Be.throwArgumentError("missing value", "value", t);
    const n = t.split(".");
    n.length > 2 && Be.throwArgumentError("too many decimal points", "value", t);
    let s = n[0],
        o = n[1];
    for (s || (s = "0"), o || (o = "0");
        "0" === o[o.length - 1];) o = o.substring(0, o.length - 1);
    for (o.length > r.length - 1 && Le("fractional component exceeds decimals", "underflow", "parseFixed"), "" === o && (o = "0"); o.length < r.length - 1;) o += "0";
    const a = Re.from(s),
        c = Re.from(o);
    let h = a.mul(r).add(c);
    return i && (h = h.mul(ze)), h
}
let Ve = class t {
        constructor(t, e, r, i) {
            t !== Ue && Be.throwError("cannot use FixedFormat constructor; use FixedFormat.from", he.errors.UNSUPPORTED_OPERATION, {
                operation: "new FixedFormat"
            }), this.signed = e, this.width = r, this.decimals = i, this.name = (e ? "" : "u") + "fixed" + String(r) + "x" + String(i), this._multiplier = Ke(i), Object.freeze(this)
        }
        static from(e) {
            if (e instanceof t) return e;
            "number" == typeof e && (e = `fixed128x${e}`);
            let r = !0,
                i = 128,
                n = 18;
            if ("string" == typeof e) {
                if ("fixed" !== e)
                    if ("ufixed" === e) r = !1;
                    else {
                        const t = e.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);
                        t || Be.throwArgumentError("invalid fixed format", "format", e), r = "u" !== t[1], i = parseInt(t[2]), n = parseInt(t[3])
                    }
            } else if (e) {
                const t = (t, r, i) => null == e[t] ? i : (typeof e[t] !== r && Be.throwArgumentError("invalid fixed format (" + t + " not " + r + ")", "format." + t, e[t]), e[t]);
                r = t("signed", "boolean", r), i = t("width", "number", i), n = t("decimals", "number", n)
            }
            return i % 8 && Be.throwArgumentError("invalid fixed format width (not byte aligned)", "format.width", i), n > 80 && Be.throwArgumentError("invalid fixed format (decimals too large)", "format.decimals", n), new t(Ue, r, i, n)
        }
    },
    Qe = class t {
        constructor(t, e, r, i) {
            t !== Ue && Be.throwError("cannot use FixedNumber constructor; use FixedNumber.from", he.errors.UNSUPPORTED_OPERATION, {
                operation: "new FixedFormat"
            }), this.format = i, this._hex = e, this._value = r, this._isFixedNumber = !0, Object.freeze(this)
        }
        _checkFormat(t) {
            this.format.name !== t.format.name && Be.throwArgumentError("incompatible format; use fixedNumber.toFormat", "other", t)
        }
        addUnsafe(e) {
            this._checkFormat(e);
            const r = $e(this._value, this.format.decimals),
                i = $e(e._value, e.format.decimals);
            return t.fromValue(r.add(i), this.format.decimals, this.format)
        }
        subUnsafe(e) {
            this._checkFormat(e);
            const r = $e(this._value, this.format.decimals),
                i = $e(e._value, e.format.decimals);
            return t.fromValue(r.sub(i), this.format.decimals, this.format)
        }
        mulUnsafe(e) {
            this._checkFormat(e);
            const r = $e(this._value, this.format.decimals),
                i = $e(e._value, e.format.decimals);
            return t.fromValue(r.mul(i).div(this.format._multiplier), this.format.decimals, this.format)
        }
        divUnsafe(e) {
            this._checkFormat(e);
            const r = $e(this._value, this.format.decimals),
                i = $e(e._value, e.format.decimals);
            return t.fromValue(r.mul(this.format._multiplier).div(i), this.format.decimals, this.format)
        }
        floor() {
            const e = this.toString().split(".");
            1 === e.length && e.push("0");
            let r = t.from(e[0], this.format);
            const i = !e[1].match(/^(0*)$/);
            return this.isNegative() && i && (r = r.subUnsafe(We.toFormat(r.format))), r
        }
        ceiling() {
            const e = this.toString().split(".");
            1 === e.length && e.push("0");
            let r = t.from(e[0], this.format);
            const i = !e[1].match(/^(0*)$/);
            return !this.isNegative() && i && (r = r.addUnsafe(We.toFormat(r.format))), r
        }
        round(e) {
            null == e && (e = 0);
            const r = this.toString().split(".");
            if (1 === r.length && r.push("0"), (e < 0 || e > 80 || e % 1) && Be.throwArgumentError("invalid decimal count", "decimals", e), r[1].length <= e) return this;
            const i = t.from("1" + Fe.substring(0, e), this.format),
                n = Ge.toFormat(this.format);
            return this.mulUnsafe(i).addUnsafe(n).floor().divUnsafe(i)
        }
        isZero() {
            return "0.0" === this._value || "0" === this._value
        }
        isNegative() {
            return "-" === this._value[0]
        }
        toString() {
            return this._value
        }
        toHexString(t) {
            if (null == t) return this._hex;
            t % 8 && Be.throwArgumentError("invalid byte width", "width", t);
            return be(Re.from(this._hex).fromTwos(this.format.width).toTwos(t).toHexString(), t / 8)
        }
        toUnsafeFloat() {
            return parseFloat(this.toString())
        }
        toFormat(e) {
            return t.fromString(this._value, e)
        }
        static fromValue(e, r, i) {
            return null == i && null != r && ! function(t) {
                return null != t && (Re.isBigNumber(t) || "number" == typeof t && t % 1 == 0 || "string" == typeof t && !!t.match(/^-?[0-9]+$/) || me(t) || "bigint" == typeof t || de(t))
            }(r) && (i = r, r = null), null == r && (r = 0), null == i && (i = "fixed"), t.fromString(He(e, r), Ve.from(i))
        }
        static fromString(e, r) {
            null == r && (r = "fixed");
            const i = Ve.from(r),
                n = $e(e, i.decimals);
            !i.signed && n.lt(je) && Le("unsigned value cannot be negative", "overflow", "value", e);
            let s = null;
            i.signed ? s = n.toTwos(i.width).toHexString() : (s = n.toHexString(), s = be(s, i.width / 8));
            const o = He(n, i.decimals);
            return new t(Ue, s, o, i)
        }
        static fromBytes(e, r) {
            null == r && (r = "fixed");
            const i = Ve.from(r);
            if (ge(e).length > i.width / 8) throw new Error("overflow");
            let n = Re.from(e);
            i.signed && (n = n.fromTwos(i.width));
            const s = n.toTwos((i.signed ? 0 : 1) + i.width).toHexString(),
                o = He(n, i.decimals);
            return new t(Ue, s, o, i)
        }
        static from(e, r) {
            if ("string" == typeof e) return t.fromString(e, r);
            if (de(e)) return t.fromBytes(e, r);
            try {
                return t.fromValue(e, 0, r)
            } catch (i) {
                if (i.code !== he.errors.INVALID_ARGUMENT) throw i
            }
            return Be.throwArgumentError("invalid FixedNumber value", "value", e)
        }
        static isFixedNumber(t) {
            return !(!t || !t._isFixedNumber)
        }
    };
const We = Qe.from(1),
    Ge = Qe.from("0.5"),
    Je = new he("strings/5.7.0");
var Ye, Xe;

function Ze(t, e = Ye.current) {
    e != Ye.current && (Je.checkNormalize(), t = t.normalize(e));
    let r = [];
    for (let i = 0; i < t.length; i++) {
        const e = t.charCodeAt(i);
        if (e < 128) r.push(e);
        else if (e < 2048) r.push(e >> 6 | 192), r.push(63 & e | 128);
        else if (55296 == (64512 & e)) {
            i++;
            const n = t.charCodeAt(i);
            if (i >= t.length || 56320 != (64512 & n)) throw new Error("invalid utf-8 string");
            const s = 65536 + ((1023 & e) << 10) + (1023 & n);
            r.push(s >> 18 | 240), r.push(s >> 12 & 63 | 128), r.push(s >> 6 & 63 | 128), r.push(63 & s | 128)
        } else r.push(e >> 12 | 224), r.push(e >> 6 & 63 | 128), r.push(63 & e | 128)
    }
    return ge(r)
}

function tr(t, e) {
    e || (e = function(t) {
        return [parseInt(t, 16)]
    });
    let r = 0,
        i = {};
    return t.split(",").forEach((t => {
        let n = t.split(":");
        r += parseInt(n[0], 16), i[r] = e(n[1])
    })), i
}

function er(t) {
    let e = 0;
    return t.split(",").map((t => {
        let r = t.split("-");
        1 === r.length ? r[1] = "0" : "" === r[1] && (r[1] = "1");
        let i = e + parseInt(r[0], 16);
        return e = parseInt(r[1], 16), {
            l: i,
            h: e
        }
    }))
}

function rr(t, e) {
    null == e && (e = 1);
    const r = [],
        i = r.forEach,
        n = function(t, e) {
            i.call(t, (function(t) {
                e > 0 && Array.isArray(t) ? n(t, e - 1) : r.push(t)
            }))
        };
    return n(t, e), r
}

function ir(t) {
    return function(t) {
        let e = 0;
        return () => t[e++]
    }(function(t) {
        let e = 0;

        function r() {
            return t[e++] << 8 | t[e++]
        }
        let i = r(),
            n = 1,
            s = [0, 1];
        for (let b = 1; b < i; b++) s.push(n += r());
        let o = r(),
            a = e;
        e += o;
        let c = 0,
            h = 0;

        function u() {
            return 0 == c && (h = h << 8 | t[e++], c = 8), h >> --c & 1
        }
        const l = Math.pow(2, 31),
            f = l >>> 1,
            p = f >> 1,
            d = l - 1;
        let g = 0;
        for (let b = 0; b < 31; b++) g = g << 1 | u();
        let m = [],
            v = 0,
            y = l;
        for (;;) {
            let t = Math.floor(((g - v + 1) * n - 1) / y),
                e = 0,
                r = i;
            for (; r - e > 1;) {
                let i = e + r >>> 1;
                t < s[i] ? r = i : e = i
            }
            if (0 == e) break;
            m.push(e);
            let o = v + Math.floor(y * s[e] / n),
                a = v + Math.floor(y * s[e + 1] / n) - 1;
            for (; !((o ^ a) & f);) g = g << 1 & d | u(), o = o << 1 & d, a = a << 1 & d | 1;
            for (; o & ~a & p;) g = g & f | g << 1 & d >>> 1 | u(), o = o << 1 ^ f, a = (a ^ f) << 1 | f | 1;
            v = o, y = 1 + a - o
        }
        let w = i - 4;
        return m.map((e => {
            switch (e - w) {
                case 3:
                    return w + 65792 + (t[a++] << 16 | t[a++] << 8 | t[a++]);
                case 2:
                    return w + 256 + (t[a++] << 8 | t[a++]);
                case 1:
                    return w + t[a++];
                default:
                    return e - 1
            }
        }))
    }(t))
}

function nr(t) {
    return 1 & t ? ~t >> 1 : t >> 1
}

function sr(t, e) {
    let r = Array(t);
    for (let i = 0, n = -1; i < t; i++) r[i] = n += 1 + e();
    return r
}

function or(t, e) {
    let r = Array(t);
    for (let i = 0, n = 0; i < t; i++) r[i] = n += nr(e());
    return r
}

function ar(t, e) {
    let r = sr(t(), t),
        i = t(),
        n = sr(i, t),
        s = function(t, e) {
            let r = Array(t);
            for (let i = 0; i < t; i++) r[i] = 1 + e();
            return r
        }(i, t);
    for (let o = 0; o < i; o++)
        for (let t = 0; t < s[o]; t++) r.push(n[o] + t);
    return e ? r.map((t => e[t])) : r
}

function cr(t, e, r) {
    let i = Array(t).fill(void 0).map((() => []));
    for (let n = 0; n < e; n++) or(t, r).forEach(((t, e) => i[e].push(t)));
    return i
}

function hr(t, e) {
    let r = 1 + e(),
        i = e(),
        n = function(t) {
            let e = [];
            for (;;) {
                let r = t();
                if (0 == r) break;
                e.push(r)
            }
            return e
        }(e);
    return rr(cr(n.length, 1 + t, e).map(((t, e) => {
        const s = t[0],
            o = t.slice(1);
        return Array(n[e]).fill(void 0).map(((t, e) => {
            let n = e * i;
            return [s + e * r, o.map((t => t + n))]
        }))
    })))
}

function ur(t, e) {
    return cr(1 + e(), 1 + t, e).map((t => [t[0], t.slice(1)]))
}! function(t) {
    t.current = "", t.NFC = "NFC", t.NFD = "NFD", t.NFKC = "NFKC", t.NFKD = "NFKD"
}(Ye || (Ye = {})),
function(t) {
    t.UNEXPECTED_CONTINUE = "unexpected continuation byte", t.BAD_PREFIX = "bad codepoint prefix", t.OVERRUN = "string overrun", t.MISSING_CONTINUE = "missing continuation byte", t.OUT_OF_RANGE = "out of UTF-8 range", t.UTF16_SURROGATE = "UTF-16 surrogate", t.OVERLONG = "overlong representation"
}(Xe || (Xe = {})), er("221,13-1b,5f-,40-10,51-f,11-3,3-3,2-2,2-4,8,2,15,2d,28-8,88,48,27-,3-5,11-20,27-,8,28,3-5,12,18,b-a,1c-4,6-16,2-d,2-2,2,1b-4,17-9,8f-,10,f,1f-2,1c-34,33-14e,4,36-,13-,6-2,1a-f,4,9-,3-,17,8,2-2,5-,2,8-,3-,4-8,2-3,3,6-,16-6,2-,7-3,3-,17,8,3,3,3-,2,6-3,3-,4-a,5,2-6,10-b,4,8,2,4,17,8,3,6-,b,4,4-,2-e,2-4,b-10,4,9-,3-,17,8,3-,5-,9-2,3-,4-7,3-3,3,4-3,c-10,3,7-2,4,5-2,3,2,3-2,3-2,4-2,9,4-3,6-2,4,5-8,2-e,d-d,4,9,4,18,b,6-3,8,4,5-6,3-8,3-3,b-11,3,9,4,18,b,6-3,8,4,5-6,3-6,2,3-3,b-11,3,9,4,18,11-3,7-,4,5-8,2-7,3-3,b-11,3,13-2,19,a,2-,8-2,2-3,7,2,9-11,4-b,3b-3,1e-24,3,2-,3,2-,2-5,5,8,4,2,2-,3,e,4-,6,2,7-,b-,3-21,49,23-5,1c-3,9,25,10-,2-2f,23,6,3,8-2,5-5,1b-45,27-9,2a-,2-3,5b-4,45-4,53-5,8,40,2,5-,8,2,5-,28,2,5-,20,2,5-,8,2,5-,8,8,18,20,2,5-,8,28,14-5,1d-22,56-b,277-8,1e-2,52-e,e,8-a,18-8,15-b,e,4,3-b,5e-2,b-15,10,b-5,59-7,2b-555,9d-3,5b-5,17-,7-,27-,7-,9,2,2,2,20-,36,10,f-,7,14-,4,a,54-3,2-6,6-5,9-,1c-10,13-1d,1c-14,3c-,10-6,32-b,240-30,28-18,c-14,a0,115-,3,66-,b-76,5,5-,1d,24,2,5-2,2,8-,35-2,19,f-10,1d-3,311-37f,1b,5a-b,d7-19,d-3,41,57-,68-4,29-3,5f,29-37,2e-2,25-c,2c-2,4e-3,30,78-3,64-,20,19b7-49,51a7-59,48e-2,38-738,2ba5-5b,222f-,3c-94,8-b,6-4,1b,6,2,3,3,6d-20,16e-f,41-,37-7,2e-2,11-f,5-b,18-,b,14,5-3,6,88-,2,bf-2,7-,7-,7-,4-2,8,8-9,8-2ff,20,5-b,1c-b4,27-,27-cbb1,f7-9,28-2,b5-221,56,48,3-,2-,3-,5,d,2,5,3,42,5-,9,8,1d,5,6,2-2,8,153-3,123-3,33-27fd,a6da-5128,21f-5df,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3,2-1d,61-ff7d"), "ad,34f,1806,180b,180c,180d,200b,200c,200d,2060,feff".split(",").map((t => parseInt(t, 16))), tr("b5:3bc,c3:ff,7:73,2:253,5:254,3:256,1:257,5:259,1:25b,3:260,1:263,2:269,1:268,5:26f,1:272,2:275,7:280,3:283,5:288,3:28a,1:28b,5:292,3f:195,1:1bf,29:19e,125:3b9,8b:3b2,1:3b8,1:3c5,3:3c6,1:3c0,1a:3ba,1:3c1,1:3c3,2:3b8,1:3b5,1bc9:3b9,1c:1f76,1:1f77,f:1f7a,1:1f7b,d:1f78,1:1f79,1:1f7c,1:1f7d,107:63,5:25b,4:68,1:68,1:68,3:69,1:69,1:6c,3:6e,4:70,1:71,1:72,1:72,1:72,7:7a,2:3c9,2:7a,2:6b,1:e5,1:62,1:63,3:65,1:66,2:6d,b:3b3,1:3c0,6:64,1b574:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3"), tr("179:1,2:1,2:1,5:1,2:1,a:4f,a:1,8:1,2:1,2:1,3:1,5:1,3:1,4:1,2:1,3:1,4:1,8:2,1:1,2:2,1:1,2:2,27:2,195:26,2:25,1:25,1:25,2:40,2:3f,1:3f,33:1,11:-6,1:-9,1ac7:-3a,6d:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,b:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,c:-8,2:-8,2:-8,2:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,49:-8,1:-8,1:-4a,1:-4a,d:-56,1:-56,1:-56,1:-56,d:-8,1:-8,f:-8,1:-8,3:-7"), tr("df:00730073,51:00690307,19:02BC006E,a7:006A030C,18a:002003B9,16:03B903080301,20:03C503080301,1d7:05650582,190f:00680331,1:00740308,1:0077030A,1:0079030A,1:006102BE,b6:03C50313,2:03C503130300,2:03C503130301,2:03C503130342,2a:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,3:1F7003B9,1:03B103B9,1:03AC03B9,2:03B10342,1:03B1034203B9,5:03B103B9,6:1F7403B9,1:03B703B9,1:03AE03B9,2:03B70342,1:03B7034203B9,5:03B703B9,6:03B903080300,1:03B903080301,3:03B90342,1:03B903080342,b:03C503080300,1:03C503080301,1:03C10313,2:03C50342,1:03C503080342,b:1F7C03B9,1:03C903B9,1:03CE03B9,2:03C90342,1:03C9034203B9,5:03C903B9,ac:00720073,5b:00B00063,6:00B00066,d:006E006F,a:0073006D,1:00740065006C,1:0074006D,124f:006800700061,2:00610075,2:006F0076,b:00700061,1:006E0061,1:03BC0061,1:006D0061,1:006B0061,1:006B0062,1:006D0062,1:00670062,3:00700066,1:006E0066,1:03BC0066,4:0068007A,1:006B0068007A,1:006D0068007A,1:00670068007A,1:00740068007A,15:00700061,1:006B00700061,1:006D00700061,1:006700700061,8:00700076,1:006E0076,1:03BC0076,1:006D0076,1:006B0076,1:006D0076,1:00700077,1:006E0077,1:03BC0077,1:006D0077,1:006B0077,1:006D0077,1:006B03C9,1:006D03C9,2:00620071,3:00632215006B0067,1:0063006F002E,1:00640062,1:00670079,2:00680070,2:006B006B,1:006B006D,9:00700068,2:00700070006D,1:00700072,2:00730076,1:00770062,c723:00660066,1:00660069,1:0066006C,1:006600660069,1:00660066006C,1:00730074,1:00730074,d:05740576,1:05740565,1:0574056B,1:057E0576,1:0574056D", (function(t) {
    if (t.length % 4 != 0) throw new Error("bad data");
    let e = [];
    for (let r = 0; r < t.length; r += 4) e.push(parseInt(t.substring(r, r + 4), 16));
    return e
})), er("80-20,2a0-,39c,32,f71,18e,7f2-f,19-7,30-4,7-5,f81-b,5,a800-20ff,4d1-1f,110,fa-6,d174-7,2e84-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,2,1f-5f,ff7f-20001");
const lr = ir(function(t) {
    t = atob(t);
    const e = [];
    for (let r = 0; r < t.length; r++) e.push(t.charCodeAt(r));
    return ge(e)
}("AEQF2AO2DEsA2wIrAGsBRABxAN8AZwCcAEwAqgA0AGwAUgByADcATAAVAFYAIQAyACEAKAAYAFgAGwAjABQAMAAmADIAFAAfABQAKwATACoADgAbAA8AHQAYABoAGQAxADgALAAoADwAEwA9ABMAGgARAA4ADwAWABMAFgAIAA8AHgQXBYMA5BHJAS8JtAYoAe4AExozi0UAH21tAaMnBT8CrnIyhrMDhRgDygIBUAEHcoFHUPe8AXBjAewCjgDQR8IICIcEcQLwATXCDgzvHwBmBoHNAqsBdBcUAykgDhAMShskMgo8AY8jqAQfAUAfHw8BDw87MioGlCIPBwZCa4ELatMAAMspJVgsDl8AIhckSg8XAHdvTwBcIQEiDT4OPhUqbyECAEoAS34Aej8Ybx83JgT/Xw8gHxZ/7w8RICxPHA9vBw+Pfw8PHwAPFv+fAsAvCc8vEr8ivwD/EQ8Bol8OEBa/A78hrwAPCU8vESNvvwWfHwNfAVoDHr+ZAAED34YaAdJPAK7PLwSEgDLHAGo1Pz8Pvx9fUwMrpb8O/58VTzAPIBoXIyQJNF8hpwIVAT8YGAUADDNBaX3RAMomJCg9EhUeA29MABsZBTMNJipjOhc19gcIDR8bBwQHEggCWi6DIgLuAQYA+BAFCha3A5XiAEsqM7UFFgFLhAMjFTMYE1Klnw74nRVBG/ASCm0BYRN/BrsU3VoWy+S0vV8LQx+vN8gF2AC2AK5EAWwApgYDKmAAroQ0NDQ0AT+OCg7wAAIHRAbpNgVcBV0APTA5BfbPFgMLzcYL/QqqA82eBALKCjQCjqYCht0/k2+OAsXQAoP3ASTKDgDw6ACKAUYCMpIKJpRaAE4A5womABzZvs0REEKiACIQAd5QdAECAj4Ywg/wGqY2AVgAYADYvAoCGAEubA0gvAY2ALAAbpbvqpyEAGAEpgQAJgAG7gAgAEACmghUFwCqAMpAINQIwC4DthRAAPcycKgApoIdABwBfCisABoATwBqASIAvhnSBP8aH/ECeAKXAq40NjgDBTwFYQU6AXs3oABgAD4XNgmcCY1eCl5tIFZeUqGgyoNHABgAEQAaABNwWQAmABMATPMa3T34ADldyprmM1M2XociUQgLzvwAXT3xABgAEQAaABNwIGFAnADD8AAgAD4BBJWzaCcIAIEBFMAWwKoAAdq9BWAF5wLQpALEtQAKUSGkahR4GnJM+gsAwCgeFAiUAECQ0BQuL8AAIAAAADKeIheclvFqQAAETr4iAMxIARMgAMIoHhQIAn0E0pDQFC4HhznoAAAAIAI2C0/4lvFqQAAETgBJJwYCAy4ABgYAFAA8MBKYEH4eRhTkAjYeFcgACAYAeABsOqyQ5gRwDayqugEgaIIAtgoACgDmEABmBAWGme5OBJJA2m4cDeoAmITWAXwrMgOgAGwBCh6CBXYF1Tzg1wKAAFdiuABRAFwAXQBsAG8AdgBrAHYAbwCEAHEwfxQBVE5TEQADVFhTBwBDANILAqcCzgLTApQCrQL6vAAMAL8APLhNBKkE6glGKTAU4Dr4N2EYEwBCkABKk8rHAbYBmwIoAiU4Ajf/Aq4CowCAANIChzgaNBsCsTgeODcFXrgClQKdAqQBiQGYAqsCsjTsNHsfNPA0ixsAWTWiOAMFPDQSNCk2BDZHNow2TTZUNhk28Jk9VzI3QkEoAoICoQKwAqcAQAAxBV4FXbS9BW47YkIXP1ciUqs05DS/FwABUwJW11e6nHuYZmSh/RAYA8oMKvZ8KASoUAJYWAJ6ILAsAZSoqjpgA0ocBIhmDgDWAAawRDQoAAcuAj5iAHABZiR2AIgiHgCaAU68ACxuHAG0ygM8MiZIAlgBdF4GagJqAPZOHAMuBgoATkYAsABiAHgAMLoGDPj0HpKEBAAOJgAuALggTAHWAeAMEDbd20Uege0ADwAWADkAQgA9OHd+2MUQZBBhBgNNDkxxPxUQArEPqwvqERoM1irQ090ANK4H8ANYB/ADWANYB/AH8ANYB/ADWANYA1gDWBwP8B/YxRBkD00EcgWTBZAE2wiIJk4RhgctCNdUEnQjHEwDSgEBIypJITuYMxAlR0wRTQgIATZHbKx9PQNMMbBU+pCnA9AyVDlxBgMedhKlAC8PeCE1uk6DekxxpQpQT7NX9wBFBgASqwAS5gBJDSgAUCwGPQBI4zTYABNGAE2bAE3KAExdGABKaAbgAFBXAFCOAFBJABI2SWdObALDOq0//QomCZhvwHdTBkIQHCemEPgMNAG2ATwN7kvZBPIGPATKH34ZGg/OlZ0Ipi3eDO4m5C6igFsj9iqEBe5L9TzeC05RaQ9aC2YJ5DpkgU8DIgEOIowK3g06CG4Q9ArKbA3mEUYHOgPWSZsApgcCCxIdNhW2JhFirQsKOXgG/Br3C5AmsBMqev0F1BoiBk4BKhsAANAu6IWxWjJcHU9gBgQLJiPIFKlQIQ0mQLh4SRocBxYlqgKSQ3FKiFE3HpQh9zw+DWcuFFF9B/Y8BhlQC4I8n0asRQ8R0z6OPUkiSkwtBDaALDAnjAnQD4YMunxzAVoJIgmyDHITMhEYN8YIOgcaLpclJxYIIkaWYJsE+KAD9BPSAwwFQAlCBxQDthwuEy8VKgUOgSXYAvQ21i60ApBWgQEYBcwPJh/gEFFH4Q7qCJwCZgOEJewALhUiABginAhEZABgj9lTBi7MCMhqbSN1A2gU6GIRdAeSDlgHqBw0FcAc4nDJXgyGCSiksAlcAXYJmgFgBOQICjVcjKEgQmdUi1kYnCBiQUBd/QIyDGYVoES+h3kCjA9sEhwBNgF0BzoNAgJ4Ee4RbBCWCOyGBTW2M/k6JgRQIYQgEgooA1BszwsoJvoM+WoBpBJjAw00PnfvZ6xgtyUX/gcaMsZBYSHyC5NPzgydGsIYQ1QvGeUHwAP0GvQn60FYBgADpAQUOk4z7wS+C2oIjAlAAEoOpBgH2BhrCnKM0QEyjAG4mgNYkoQCcJAGOAcMAGgMiAV65gAeAqgIpAAGANADWAA6Aq4HngAaAIZCAT4DKDABIuYCkAOUCDLMAZYwAfQqBBzEDBYA+DhuSwLDsgKAa2ajBd5ZAo8CSjYBTiYEBk9IUgOwcuIA3ABMBhTgSAEWrEvMG+REAeBwLADIAPwABjYHBkIBzgH0bgC4AWALMgmjtLYBTuoqAIQAFmwB2AKKAN4ANgCA8gFUAE4FWvoF1AJQSgESMhksWGIBvAMgATQBDgB6BsyOpsoIIARuB9QCEBwV4gLvLwe2AgMi4BPOQsYCvd9WADIXUu5eZwqoCqdeaAC0YTQHMnM9UQAPH6k+yAdy/BZIiQImSwBQ5gBQQzSaNTFWSTYBpwGqKQK38AFtqwBI/wK37gK3rQK3sAK6280C0gK33AK3zxAAUEIAUD9SklKDArekArw5AEQAzAHCO147WTteO1k7XjtZO147WTteO1kDmChYI03AVU0oJqkKbV9GYewMpw3VRMk6ShPcYFJgMxPJLbgUwhXPJVcZPhq9JwYl5VUKDwUt1GYxCC00dhe9AEApaYNCY4ceMQpMHOhTklT5LRwAskujM7ANrRsWREEFSHXuYisWDwojAmSCAmJDXE6wXDchAqH4AmiZAmYKAp+FOBwMAmY8AmYnBG8EgAN/FAN+kzkHOXgYOYM6JCQCbB4CMjc4CwJtyAJtr/CLADRoRiwBaADfAOIASwYHmQyOAP8MwwAOtgJ3MAJ2o0ACeUxEAni7Hl3cRa9G9AJ8QAJ6yQJ9CgJ88UgBSH5kJQAsFklZSlwWGErNAtECAtDNSygDiFADh+dExpEzAvKiXQQDA69Lz0wuJgTQTU1NsAKLQAKK2cIcCB5EaAa4Ao44Ao5dQZiCAo7aAo5deVG1UzYLUtVUhgKT/AKTDQDqAB1VH1WwVdEHLBwplocy4nhnRTw6ApegAu+zWCKpAFomApaQApZ9nQCqWa1aCoJOADwClrYClk9cRVzSApnMApllXMtdCBoCnJw5wzqeApwXAp+cAp65iwAeEDIrEAKd8gKekwC2PmE1YfACntQCoG8BqgKeoCACnk+mY8lkKCYsAiewAiZ/AqD8AqBN2AKmMAKlzwKoAAB+AqfzaH1osgAESmodatICrOQCrK8CrWgCrQMCVx4CVd0CseLYAx9PbJgCsr4OArLpGGzhbWRtSWADJc4Ctl08QG6RAylGArhfArlIFgK5K3hwN3DiAr0aAy2zAzISAr6JcgMDM3ICvhtzI3NQAsPMAsMFc4N0TDZGdOEDPKgDPJsDPcACxX0CxkgCxhGKAshqUgLIRQLJUALJLwJkngLd03h6YniveSZL0QMYpGcDAmH1GfSVJXsMXpNevBICz2wCz20wTFTT9BSgAMeuAs90ASrrA04TfkwGAtwoAtuLAtJQA1JdA1NgAQIDVY2AikABzBfuYUZ2AILPg44C2sgC2d+EEYRKpz0DhqYAMANkD4ZyWvoAVgLfZgLeuXR4AuIw7RUB8zEoAfScAfLTiALr9ALpcXoAAur6AurlAPpIAboC7ooC652Wq5cEAu5AA4XhmHpw4XGiAvMEAGoDjheZlAL3FAORbwOSiAL3mQL52gL4Z5odmqy8OJsfA52EAv77ARwAOp8dn7QDBY4DpmsDptoA0sYDBmuhiaIGCgMMSgFgASACtgNGAJwEgLpoBgC8BGzAEowcggCEDC6kdjoAJAM0C5IKRoABZCgiAIzw3AYBLACkfng9ogigkgNmWAN6AEQCvrkEVqTGAwCsBRbAA+4iQkMCHR072jI2PTbUNsk2RjY5NvA23TZKNiU3EDcZN5I+RTxDRTBCJkK5VBYKFhZfwQCWygU3AJBRHpu+OytgNxa61A40GMsYjsn7BVwFXQVcBV0FaAVdBVwFXQVcBV0FXAVdBVwFXUsaCNyKAK4AAQUHBwKU7oICoW1e7jAEzgPxA+YDwgCkBFDAwADABKzAAOxFLhitA1UFTDeyPkM+bj51QkRCuwTQWWQ8X+0AWBYzsACNA8xwzAGm7EZ/QisoCTAbLDs6fnLfb8H2GccsbgFw13M1HAVkBW/Jxsm9CNRO8E8FDD0FBQw9FkcClOYCoMFegpDfADgcMiA2AJQACB8AsigKAIzIEAJKeBIApY5yPZQIAKQiHb4fvj5BKSRPQrZCOz0oXyxgOywfKAnGbgMClQaCAkILXgdeCD9IIGUgQj5fPoY+dT52Ao5CM0dAX9BTVG9SDzFwWTQAbxBzJF/lOEIQQglCCkKJIAls5AcClQICoKPMODEFxhi6KSAbiyfIRrMjtCgdWCAkPlFBIitCsEJRzAbMAV/OEyQzDg0OAQQEJ36i328/Mk9AybDJsQlq3tDRApUKAkFzXf1d/j9uALYP6hCoFgCTGD8kPsFKQiobrm0+zj0KSD8kPnVCRBwMDyJRTHFgMTJa5rwXQiQ2YfI/JD7BMEJEHGINTw4TOFlIRzwJO0icMQpyPyQ+wzJCRBv6DVgnKB01NgUKj2bwYzMqCoBkznBgEF+zYDIocwRIX+NgHj4HICNfh2C4CwdwFWpTG/lgUhYGAwRfv2Ts8mAaXzVgml/XYIJfuWC4HI1gUF9pYJZgMR6ilQHMAOwLAlDRefC0in4AXAEJA6PjCwc0IamOANMMCAECRQDFNRTZBgd+CwQlRA+r6+gLBDEFBnwUBXgKATIArwAGRAAHA3cDdAN2A3kDdwN9A3oDdQN7A30DfAN4A3oDfQAYEAAlAtYASwMAUAFsAHcKAHcAmgB3AHUAdQB2AHVu8UgAygDAAHcAdQB1AHYAdQALCgB3AAsAmgB3AAsCOwB3AAtu8UgAygDAAHgKAJoAdwB3AHUAdQB2AHUAeAB1AHUAdgB1bvFIAMoAwAALCgCaAHcACwB3AAsCOwB3AAtu8UgAygDAAH4ACwGgALcBpwC6AahdAu0COwLtbvFIAMoAwAALCgCaAu0ACwLtAAsCOwLtAAtu8UgAygDAA24ACwNvAAu0VsQAAzsAABCkjUIpAAsAUIusOggWcgMeBxVsGwL67U/2HlzmWOEeOgALASvuAAseAfpKUpnpGgYJDCIZM6YyARUE9ThqAD5iXQgnAJYJPnOzw0ZAEZxEKsIAkA4DhAHnTAIDxxUDK0lxCQlPYgIvIQVYJQBVqE1GakUAKGYiDToSBA1EtAYAXQJYAIF8GgMHRyAAIAjOe9YncekRAA0KACUrjwE7Ayc6AAYWAqaiKG4McEcqANoN3+Mg9TwCBhIkuCny+JwUQ29L008JluRxu3K+oAdqiHOqFH0AG5SUIfUJ5SxCGfxdipRzqTmT4V5Zb+r1Uo4Vm+NqSSEl2mNvR2JhIa8SpYO6ntdwFXHCWTCK8f2+Hxo7uiG3drDycAuKIMP5bhi06ACnqArH1rz4Rqg//lm6SgJGEVbF9xJHISaR6HxqxSnkw6shDnelHKNEfGUXSJRJ1GcsmtJw25xrZMDK9gXSm1/YMkdX4/6NKYOdtk/NQ3/NnDASjTc3fPjIjW/5sVfVObX2oTDWkr1dF9f3kxBsD3/3aQO8hPfRz+e0uEiJqt1161griu7gz8hDDwtpy+F+BWtefnKHZPAxcZoWbnznhJpy0e842j36bcNzGnIEusgGX0a8ZxsnjcSsPDZ09yZ36fCQbriHeQ72JRMILNl6ePPf2HWoVwgWAm1fb3V2sAY0+B6rAXqSwPBgseVmoqsBTSrm91+XasMYYySI8eeRxH3ZvHkMz3BQ5aJ3iUVbYPNM3/7emRtjlsMgv/9VyTsyt/mK+8fgWeT6SoFaclXqn42dAIsvAarF5vNNWHzKSkKQ/8Hfk5ZWK7r9yliOsooyBjRhfkHP4Q2DkWXQi6FG/9r/IwbmkV5T7JSopHKn1pJwm9tb5Ot0oyN1Z2mPpKXHTxx2nlK08fKk1hEYA8WgVVWL5lgx0iTv+KdojJeU23ZDjmiubXOxVXJKKi2Wjuh2HLZOFLiSC7Tls5SMh4f+Pj6xUSrNjFqLGehRNB8lC0QSLNmkJJx/wSG3MnjE9T1CkPwJI0wH2lfzwETIiVqUxg0dfu5q39Gt+hwdcxkhhNvQ4TyrBceof3Mhs/IxFci1HmHr4FMZgXEEczPiGCx0HRwzAqDq2j9AVm1kwN0mRVLWLylgtoPNapF5cY4Y1wJh/e0BBwZj44YgZrDNqvD/9Hv7GFYdUQeDJuQ3EWI4HaKqavU1XjC/n41kT4L79kqGq0kLhdTZvgP3TA3fS0ozVz+5piZsoOtIvBUFoMKbNcmBL6YxxaUAusHB38XrS8dQMnQwJfUUkpRoGr5AUeWicvBTzyK9g77+yCkf5PAysL7r/JjcZgrbvRpMW9iyaxZvKO6ceZN2EwIxKwVFPuvFuiEPGCoagbMo+SpydLrXqBzNCDGFCrO/rkcwa2xhokQZ5CdZ0AsU3JfSqJ6n5I14YA+P/uAgfhPU84Tlw7cEFfp7AEE8ey4sP12PTt4Cods1GRgDOB5xvyiR5m+Bx8O5nBCNctU8BevfV5A08x6RHd5jcwPTMDSZJOedIZ1cGQ704lxbAzqZOP05ZxaOghzSdvFBHYqomATARyAADK4elP8Ly3IrUZKfWh23Xy20uBUmLS4Pfagu9+oyVa2iPgqRP3F2CTUsvJ7+RYnN8fFZbU/HVvxvcFFDKkiTqV5UBZ3Gz54JAKByi9hkKMZJvuGgcSYXFmw08UyoQyVdfTD1/dMkCHXcTGAKeROgArsvmRrQTLUOXioOHGK2QkjHuoYFgXciZoTJd6Fs5q1QX1G+p/e26hYsEf7QZD1nnIyl/SFkNtYYmmBhpBrxl9WbY0YpHWRuw2Ll/tj9mD8P4snVzJl4F9J+1arVeTb9E5r2ILH04qStjxQNwn3m4YNqxmaNbLAqW2TN6LidwuJRqS+NXbtqxoeDXpxeGWmxzSkWxjkyCkX4NQRme6q5SAcC+M7+9ETfA/EwrzQajKakCwYyeunP6ZFlxU2oMEn1Pz31zeStW74G406ZJFCl1wAXIoUKkWotYEpOuXB1uVNxJ63dpJEqfxBeptwIHNrPz8BllZoIcBoXwgfJ+8VAUnVPvRvexnw0Ma/WiGYuJO5y8QTvEYBigFmhUxY5RqzE8OcywN/8m4UYrlaniJO75XQ6KSo9+tWHlu+hMi0UVdiKQp7NelnoZUzNaIyBPVeOwK6GNp+FfHuPOoyhaWuNvTYFkvxscMQWDh+zeFCFkgwbXftiV23ywJ4+uwRqmg9k3KzwIQpzppt8DBBOMbrqwQM5Gb05sEwdKzMiAqOloaA/lr0KA+1pr0/+HiWoiIjHA/wir2nIuS3PeU/ji3O6ZwoxcR1SZ9FhtLC5S0FIzFhbBWcGVP/KpxOPSiUoAdWUpqKH++6Scz507iCcxYI6rdMBICPJZea7OcmeFw5mObJSiqpjg2UoWNIs+cFhyDSt6geV5qgi3FunmwwDoGSMgerFOZGX1m0dMCYo5XOruxO063dwENK9DbnVM9wYFREzh4vyU1WYYJ/LRRp6oxgjqP/X5a8/4Af6p6NWkQferzBmXme0zY/4nwMJm/wd1tIqSwGz+E3xPEAOoZlJit3XddD7/BT1pllzOx+8bmQtANQ/S6fZexc6qi3W+Q2xcmXTUhuS5mpHQRvcxZUN0S5+PL9lXWUAaRZhEH8hTdAcuNMMCuVNKTEGtSUKNi3O6KhSaTzck8csZ2vWRZ+d7mW8c4IKwXIYd25S/zIftPkwPzufjEvOHWVD1m+FjpDVUTV0DGDuHj6QnaEwLu/dEgdLQOg9E1Sro9XHJ8ykLAwtPu+pxqKDuFexqON1sKQm7rwbE1E68UCfA/erovrTCG+DBSNg0l4goDQvZN6uNlbyLpcZAwj2UclycvLpIZMgv4yRlpb3YuMftozorbcGVHt/VeDV3+Fdf1TP0iuaCsPi2G4XeGhsyF1ubVDxkoJhmniQ0/jSg/eYML9KLfnCFgISWkp91eauR3IQvED0nAPXK+6hPCYs+n3+hCZbiskmVMG2da+0EsZPonUeIY8EbfusQXjsK/eFDaosbPjEfQS0RKG7yj5GG69M7MeO1HmiUYocgygJHL6M1qzUDDwUSmr99V7Sdr2F3JjQAJY+F0yH33Iv3+C9M38eML7gTgmNu/r2bUMiPvpYbZ6v1/IaESirBHNa7mPKn4dEmYg7v/+HQgPN1G79jBQ1+soydfDC2r+h2Bl/KIc5KjMK7OH6nb1jLsNf0EHVe2KBiE51ox636uyG6Lho0t3J34L5QY/ilE3mikaF4HKXG1mG1rCevT1Vv6GavltxoQe/bMrpZvRggnBxSEPEeEzkEdOxTnPXHVjUYdw8JYvjB/o7Eegc3Ma+NUxLLnsK0kJlinPmUHzHGtrk5+CAbVzFOBqpyy3QVUnzTDfC/0XD94/okH+OB+i7g9lolhWIjSnfIb+Eq43ZXOWmwvjyV/qqD+t0e+7mTEM74qP/Ozt8nmC7mRpyu63OB4KnUzFc074SqoyPUAgM+/TJGFo6T44EHnQU4X4z6qannVqgw/U7zCpwcmXV1AubIrvOmkKHazJAR55ePjp5tLBsN8vAqs3NAHdcEHOR2xQ0lsNAFzSUuxFQCFYvXLZJdOj9p4fNq6p0HBGUik2YzaI4xySy91KzhQ0+q1hjxvImRwPRf76tChlRkhRCi74NXZ9qUNeIwP+s5p+3m5nwPdNOHgSLD79n7O9m1n1uDHiMntq4nkYwV5OZ1ENbXxFd4PgrlvavZsyUO4MqYlqqn1O8W/I1dEZq5dXhrbETLaZIbC2Kj/Aa/QM+fqUOHdf0tXAQ1huZ3cmWECWSXy/43j35+Mvq9xws7JKseriZ1pEWKc8qlzNrGPUGcVgOa9cPJYIJsGnJTAUsEcDOEVULO5x0rXBijc1lgXEzQQKhROf8zIV82w8eswc78YX11KYLWQRcgHNJElBxfXr72lS2RBSl07qTKorO2uUDZr3sFhYsvnhLZn0A94KRzJ/7DEGIAhW5ZWFpL8gEwu1aLA9MuWZzNwl8Oze9Y+bX+v9gywRVnoB5I/8kXTXU3141yRLYrIOOz6SOnyHNy4SieqzkBXharjfjqq1q6tklaEbA8Qfm2DaIPs7OTq/nvJBjKfO2H9bH2cCMh1+5gspfycu8f/cuuRmtDjyqZ7uCIMyjdV3a+p3fqmXsRx4C8lujezIFHnQiVTXLXuI1XrwN3+siYYj2HHTvESUx8DlOTXpak9qFRK+L3mgJ1WsD7F4cu1aJoFoYQnu+wGDMOjJM3kiBQWHCcvhJ/HRdxodOQp45YZaOTA22Nb4XKCVxqkbwMYFhzYQYIAnCW8FW14uf98jhUG2zrKhQQ0q0CEq0t5nXyvUyvR8DvD69LU+g3i+HFWQMQ8PqZuHD+sNKAV0+M6EJC0szq7rEr7B5bQ8BcNHzvDMc9eqB5ZCQdTf80Obn4uzjwpYU7SISdtV0QGa9D3Wrh2BDQtpBKxaNFV+/Cy2P/Sv+8s7Ud0Fd74X4+o/TNztWgETUapy+majNQ68Lq3ee0ZO48VEbTZYiH1Co4OlfWef82RWeyUXo7woM03PyapGfikTnQinoNq5z5veLpeMV3HCAMTaZmA1oGLAn7XS3XYsz+XK7VMQsc4XKrmDXOLU/pSXVNUq8dIqTba///3x6LiLS6xs1xuCAYSfcQ3+rQgmu7uvf3THKt5Ooo97TqcbRqxx7EASizaQCBQllG/rYxVapMLgtLbZS64w1MDBMXX+PQpBKNwqUKOf2DDRDUXQf9EhOS0Qj4nTmlA8dzSLz/G1d+Ud8MTy/6ghhdiLpeerGY/UlDOfiuqFsMUU5/UYlP+BAmgRLuNpvrUaLlVkrqDievNVEAwF+4CoM1MZTmjxjJMsKJq+u8Zd7tNCUFy6LiyYXRJQ4VyvEQFFaCGKsxIwQkk7EzZ6LTJq2hUuPhvAW+gQnSG6J+MszC+7QCRHcnqDdyNRJ6T9xyS87A6MDutbzKGvGktpbXqtzWtXb9HsfK2cBMomjN9a4y+TaJLnXxAeX/HWzmf4cR4vALt/P4w4qgKY04ml4ZdLOinFYS6cup3G/1ie4+t1eOnpBNlqGqs75ilzkT4+DsZQxNvaSKJ//6zIbbk/M7LOhFmRc/1R+kBtz7JFGdZm/COotIdvQoXpTqP/1uqEUmCb/QWoGLMwO5ANcHzxdY48IGP5+J+zKOTBFZ4Pid+GTM+Wq12MV/H86xEJptBa6T+p3kgpwLedManBHC2GgNrFpoN2xnrMz9WFWX/8/ygSBkavq2Uv7FdCsLEYLu9LLIvAU0bNRDtzYl+/vXmjpIvuJFYjmI0im6QEYqnIeMsNjXG4vIutIGHijeAG/9EDBozKV5cldkHbLxHh25vT+ZEzbhXlqvpzKJwcEgfNwLAKFeo0/pvEE10XDB+EXRTXtSzJozQKFFAJhMxYkVaCW+E9AL7tMeU8acxidHqzb6lX4691UsDpy/LLRmT+epgW56+5Cw8tB4kMUv6s9lh3eRKbyGs+H/4mQMaYzPTf2OOdokEn+zzgvoD3FqNKk8QqGAXVsqcGdXrT62fSPkR2vROFi68A6se86UxRUk4cajfPyCC4G5wDhD+zNq4jodQ4u4n/m37Lr36n4LIAAsVr02dFi9AiwA81MYs2rm4eDlDNmdMRvEKRHfBwW5DdMNp0jPFZMeARqF/wL4XBfd+EMLBfMzpH5GH6NaW+1vrvMdg+VxDzatk3MXgO3ro3P/DpcC6+Mo4MySJhKJhSR01SGGGp5hPWmrrUgrv3lDnP+HhcI3nt3YqBoVAVTBAQT5iuhTg8nvPtd8ZeYj6w1x6RqGUBrSku7+N1+BaasZvjTk64RoIDlL8brpEcJx3OmY7jLoZsswdtmhfC/G21llXhITOwmvRDDeTTPbyASOa16cF5/A1fZAidJpqju3wYAy9avPR1ya6eNp9K8XYrrtuxlqi+bDKwlfrYdR0RRiKRVTLOH85+ZY7XSmzRpfZBJjaTa81VDcJHpZnZnSQLASGYW9l51ZV/h7eVzTi3Hv6hUsgc/51AqJRTkpbFVLXXszoBL8nBX0u/0jBLT8nH+fJePbrwURT58OY+UieRjd1vs04w0VG5VN2U6MoGZkQzKN/ptz0Q366dxoTGmj7i1NQGHi9GgnquXFYdrCfZBmeb7s0T6yrdlZH5cZuwHFyIJ/kAtGsTg0xH5taAAq44BAk1CPk9KVVbqQzrCUiFdF/6gtlPQ8bHHc1G1W92MXGZ5HEHftyLYs8mbD/9xYRUWkHmlM0zC2ilJlnNgV4bfALpQghxOUoZL7VTqtCHIaQSXm+YUMnpkXybnV+A6xlm2CVy8fn0Xlm2XRa0+zzOa21JWWmixfiPMSCZ7qA4rS93VN3pkpF1s5TonQjisHf7iU9ZGvUPOAKZcR1pbeVf/Ul7OhepGCaId9wOtqo7pJ7yLcBZ0pFkOF28y4zEI/kcUNmutBHaQpBdNM8vjCS6HZRokkeo88TBAjGyG7SR+6vUgTcyK9Imalj0kuxz0wmK+byQU11AiJFk/ya5dNduRClcnU64yGu/ieWSeOos1t3ep+RPIWQ2pyTYVbZltTbsb7NiwSi3AV+8KLWk7LxCnfZUetEM8ThnsSoGH38/nyAwFguJp8FjvlHtcWZuU4hPva0rHfr0UhOOJ/F6vS62FW7KzkmRll2HEc7oUq4fyi5T70Vl7YVIfsPHUCdHesf9Lk7WNVWO75JDkYbMI8TOW8JKVtLY9d6UJRITO8oKo0xS+o99Yy04iniGHAaGj88kEWgwv0OrHdY/nr76DOGNS59hXCGXzTKUvDl9iKpLSWYN1lxIeyywdNpTkhay74w2jFT6NS8qkjo5CxA1yfSYwp6AJIZNKIeEK5PJAW7ORgWgwp0VgzYpqovMrWxbu+DGZ6Lhie1RAqpzm8VUzKJOH3mCzWuTOLsN3VT/dv2eeYe9UjbR8YTBsLz7q60VN1sU51k+um1f8JxD5pPhbhSC8rRaB454tmh6YUWrJI3+GWY0qeWioj/tbkYITOkJaeuGt4JrJvHA+l0Gu7kY7XOaa05alMnRWVCXqFgLIwSY4uF59Ue5SU4QKuc/HamDxbr0x6csCetXGoP7Qn1Bk/J9DsynO/UD6iZ1Hyrz+jit0hDCwi/E9OjgKTbB3ZQKQ/0ZOvevfNHG0NK4Aj3Cp7NpRk07RT1i/S0EL93Ag8GRgKI9CfpajKyK6+Jj/PI1KO5/85VAwz2AwzP8FTBb075IxCXv6T9RVvWT2tUaqxDS92zrGUbWzUYk9mSs82pECH+fkqsDt93VW++4YsR/dHCYcQSYTO/KaBMDj9LSD/J/+z20Kq8XvZUAIHtm9hRPP3ItbuAu2Hm5lkPs92pd7kCxgRs0xOVBnZ13ccdA0aunrwv9SdqElJRC3g+oCu+nXyCgmXUs9yMjTMAIHfxZV+aPKcZeUBWt057Xo85Ks1Ir5gzEHCWqZEhrLZMuF11ziGtFQUds/EESajhagzcKsxamcSZxGth4UII+adPhQkUnx2WyN+4YWR+r3f8MnkyGFuR4zjzxJS8WsQYR5PTyRaD9ixa6Mh741nBHbzfjXHskGDq179xaRNrCIB1z1xRfWfjqw2pHc1zk9xlPpL8sQWAIuETZZhbnmL54rceXVNRvUiKrrqIkeogsl0XXb17ylNb0f4GA9Wd44vffEG8FSZGHEL2fbaTGRcSiCeA8PmA/f6Hz8HCS76fXUHwgwkzSwlI71ekZ7Fapmlk/KC+Hs8hUcw3N2LN5LhkVYyizYFl/uPeVP5lsoJHhhfWvvSWruCUW1ZcJOeuTbrDgywJ/qG07gZJplnTvLcYdNaH0KMYOYMGX+rB4NGPFmQsNaIwlWrfCezxre8zXBrsMT+edVLbLqN1BqB76JH4BvZTqUIMfGwPGEn+EnmTV86fPBaYbFL3DFEhjB45CewkXEAtJxk4/Ms2pPXnaRqdky0HOYdcUcE2zcXq4vaIvW2/v0nHFJH2XXe22ueDmq/18XGtELSq85j9X8q0tcNSSKJIX8FTuJF/Pf8j5PhqG2u+osvsLxYrvvfeVJL+4tkcXcr9JV7v0ERmj/X6fM3NC4j6dS1+9Umr2oPavqiAydTZPLMNRGY23LO9zAVDly7jD+70G5TPPLdhRIl4WxcYjLnM+SNcJ26FOrkrISUtPObIz5Zb3AG612krnpy15RMW+1cQjlnWFI6538qky9axd2oJmHIHP08KyP0ubGO+TQNOYuv2uh17yCIvR8VcStw7o1g0NM60sk+8Tq7YfIBJrtp53GkvzXH7OA0p8/n/u1satf/VJhtR1l8Wa6Gmaug7haSpaCaYQax6ta0mkutlb+eAOSG1aobM81D9A4iS1RRlzBBoVX6tU1S6WE2N9ORY6DfeLRC4l9Rvr5h95XDWB2mR1d4WFudpsgVYwiTwT31ljskD8ZyDOlm5DkGh9N/UB/0AI5Xvb8ZBmai2hQ4BWMqFwYnzxwB26YHSOv9WgY3JXnvoN+2R4rqGVh/LLDMtpFP+SpMGJNWvbIl5SOodbCczW2RKleksPoUeGEzrjtKHVdtZA+kfqO+rVx/iclCqwoopepvJpSTDjT+b9GWylGRF8EDbGlw6eUzmJM95Ovoz+kwLX3c2fTjFeYEsE7vUZm3mqdGJuKh2w9/QGSaqRHs99aScGOdDqkFcACoqdbBoQqqjamhH6Q9ng39JCg3lrGJwd50Qk9ovnqBTr8MME7Ps2wiVfygUmPoUBJJfJWX5Nda0nuncbFkA=="));
new Set(ar(lr)), new Set(ar(lr)),
    function(t) {
        let e = [];
        for (;;) {
            let r = t();
            if (0 == r) break;
            e.push(hr(r, t))
        }
        for (;;) {
            let r = t() - 1;
            if (r < 0) break;
            e.push(ur(r, t))
        }(function(t) {
            const e = {};
            for (let r = 0; r < t.length; r++) {
                const i = t[r];
                e[i[0]] = i[1]
            }
        })(rr(e))
    }(lr),
    function(t) {
        let e = ar(t).sort(((t, e) => t - e));
        (function r() {
            let i = [];
            for (;;) {
                let n = ar(t, e);
                if (0 == n.length) break;
                i.push({
                    set: new Set(n),
                    node: r()
                })
            }
            i.sort(((t, e) => e.set.size - t.set.size));
            let n = t(),
                s = n % 3;
            n = n / 3 | 0;
            let o = !!(1 & n);
            return n >>= 1, {
                branches: i,
                valid: s,
                fe0f: o,
                save: 1 == n,
                check: 2 == n
            }
        })()
    }(lr);
new Uint8Array(32).fill(0);

function fr(t) {
    return "string" == typeof t && (t = Ze(t)), _e(function(t) {
        const e = t.map((t => ge(t))),
            r = e.reduce(((t, e) => t + e.length), 0),
            i = new Uint8Array(r);
        return e.reduce(((t, e) => (i.set(e, t), t + e.length)), 0), fe(i)
    }([Ze("Ethereum Signed Message:\n"), Ze(String(t.length)), t]))
}
const pr = new he("address/5.7.0");

function dr(t) {
    me(t, 20) || pr.throwArgumentError("invalid address", "address", t);
    const e = (t = t.toLowerCase()).substring(2).split(""),
        r = new Uint8Array(40);
    for (let n = 0; n < 40; n++) r[n] = e[n].charCodeAt(0);
    const i = ge(_e(r));
    for (let n = 0; n < 40; n += 2) i[n >> 1] >> 4 >= 8 && (e[n] = e[n].toUpperCase()), (15 & i[n >> 1]) >= 8 && (e[n + 1] = e[n + 1].toUpperCase());
    return "0x" + e.join("")
}
const gr = {};
for (let cf = 0; cf < 10; cf++) gr[String(cf)] = String(cf);
for (let cf = 0; cf < 26; cf++) gr[String.fromCharCode(65 + cf)] = String(10 + cf);
const mr = Math.floor(function(t) {
    return Math.log10 ? Math.log10(t) : Math.log(t) / Math.LN10
}(9007199254740991));

function vr(t) {
    let e = null;
    if ("string" != typeof t && pr.throwArgumentError("invalid address", "address", t), t.match(/^(0x)?[0-9a-fA-F]{40}$/)) "0x" !== t.substring(0, 2) && (t = "0x" + t), e = dr(t), t.match(/([A-F].*[a-f])|([a-f].*[A-F])/) && e !== t && pr.throwArgumentError("bad address checksum", "address", t);
    else if (t.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
        for (t.substring(2, 4) !== function(t) {
                let e = (t = (t = t.toUpperCase()).substring(4) + t.substring(0, 2) + "00").split("").map((t => gr[t])).join("");
                for (; e.length >= mr;) {
                    let t = e.substring(0, mr);
                    e = parseInt(t, 10) % 97 + e.substring(t.length)
                }
                let r = String(98 - parseInt(e, 10) % 97);
                for (; r.length < 2;) r = "0" + r;
                return r
            }(t) && pr.throwArgumentError("bad icap checksum", "address", t), e = function(t) {
                return new Pe(t, 36).toString(16)
            }(t.substring(4)); e.length < 40;) e = "0" + e;
        e = dr("0x" + e)
    } else pr.throwArgumentError("invalid address", "address", t);
    return e
}

function yr(t, e, r) {
    Object.defineProperty(t, e, {
        enumerable: !0,
        value: r,
        writable: !1
    })
}
new Uint8Array(32).fill(0), Re.from(-1);
const wr = Re.from(0),
    br = Re.from(1);
Re.from("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"), be(br.toHexString(), 32), be(wr.toHexString(), 32);
var Ar = {},
    _r = {},
    Er = Ir;

function Ir(t, e) {
    if (!t) throw new Error(e || "Assertion failed")
}
Ir.equal = function(t, e, r) {
    if (t != e) throw new Error(r || "Assertion failed: " + t + " != " + e)
};
var Sr = {
    exports: {}
};
"function" == typeof Object.create ? Sr.exports = function(t, e) {
    e && (t.super_ = e, t.prototype = Object.create(e.prototype, {
        constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }))
} : Sr.exports = function(t, e) {
    if (e) {
        t.super_ = e;
        var r = function() {};
        r.prototype = e.prototype, t.prototype = new r, t.prototype.constructor = t
    }
};
var Mr = Er,
    Pr = Sr.exports;

function xr(t, e) {
    return !(55296 != (64512 & t.charCodeAt(e)) || e < 0 || e + 1 >= t.length) && 56320 == (64512 & t.charCodeAt(e + 1))
}

function Nr(t) {
    return (t >>> 24 | t >>> 8 & 65280 | t << 8 & 16711680 | (255 & t) << 24) >>> 0
}

function Cr(t) {
    return 1 === t.length ? "0" + t : t
}

function Or(t) {
    return 7 === t.length ? "0" + t : 6 === t.length ? "00" + t : 5 === t.length ? "000" + t : 4 === t.length ? "0000" + t : 3 === t.length ? "00000" + t : 2 === t.length ? "000000" + t : 1 === t.length ? "0000000" + t : t
}
_r.inherits = Pr, _r.toArray = function(t, e) {
    if (Array.isArray(t)) return t.slice();
    if (!t) return [];
    var r = [];
    if ("string" == typeof t)
        if (e) {
            if ("hex" === e)
                for ((t = t.replace(/[^a-z0-9]+/gi, "")).length % 2 != 0 && (t = "0" + t), n = 0; n < t.length; n += 2) r.push(parseInt(t[n] + t[n + 1], 16))
        } else
            for (var i = 0, n = 0; n < t.length; n++) {
                var s = t.charCodeAt(n);
                s < 128 ? r[i++] = s : s < 2048 ? (r[i++] = s >> 6 | 192, r[i++] = 63 & s | 128) : xr(t, n) ? (s = 65536 + ((1023 & s) << 10) + (1023 & t.charCodeAt(++n)), r[i++] = s >> 18 | 240, r[i++] = s >> 12 & 63 | 128, r[i++] = s >> 6 & 63 | 128, r[i++] = 63 & s | 128) : (r[i++] = s >> 12 | 224, r[i++] = s >> 6 & 63 | 128, r[i++] = 63 & s | 128)
            } else
                for (n = 0; n < t.length; n++) r[n] = 0 | t[n];
    return r
}, _r.toHex = function(t) {
    for (var e = "", r = 0; r < t.length; r++) e += Cr(t[r].toString(16));
    return e
}, _r.htonl = Nr, _r.toHex32 = function(t, e) {
    for (var r = "", i = 0; i < t.length; i++) {
        var n = t[i];
        "little" === e && (n = Nr(n)), r += Or(n.toString(16))
    }
    return r
}, _r.zero2 = Cr, _r.zero8 = Or, _r.join32 = function(t, e, r, i) {
    var n = r - e;
    Mr(n % 4 == 0);
    for (var s = new Array(n / 4), o = 0, a = e; o < s.length; o++, a += 4) {
        var c;
        c = "big" === i ? t[a] << 24 | t[a + 1] << 16 | t[a + 2] << 8 | t[a + 3] : t[a + 3] << 24 | t[a + 2] << 16 | t[a + 1] << 8 | t[a], s[o] = c >>> 0
    }
    return s
}, _r.split32 = function(t, e) {
    for (var r = new Array(4 * t.length), i = 0, n = 0; i < t.length; i++, n += 4) {
        var s = t[i];
        "big" === e ? (r[n] = s >>> 24, r[n + 1] = s >>> 16 & 255, r[n + 2] = s >>> 8 & 255, r[n + 3] = 255 & s) : (r[n + 3] = s >>> 24, r[n + 2] = s >>> 16 & 255, r[n + 1] = s >>> 8 & 255, r[n] = 255 & s)
    }
    return r
}, _r.rotr32 = function(t, e) {
    return t >>> e | t << 32 - e
}, _r.rotl32 = function(t, e) {
    return t << e | t >>> 32 - e
}, _r.sum32 = function(t, e) {
    return t + e >>> 0
}, _r.sum32_3 = function(t, e, r) {
    return t + e + r >>> 0
}, _r.sum32_4 = function(t, e, r, i) {
    return t + e + r + i >>> 0
}, _r.sum32_5 = function(t, e, r, i, n) {
    return t + e + r + i + n >>> 0
}, _r.sum64 = function(t, e, r, i) {
    var n = t[e],
        s = i + t[e + 1] >>> 0,
        o = (s < i ? 1 : 0) + r + n;
    t[e] = o >>> 0, t[e + 1] = s
}, _r.sum64_hi = function(t, e, r, i) {
    return (e + i >>> 0 < e ? 1 : 0) + t + r >>> 0
}, _r.sum64_lo = function(t, e, r, i) {
    return e + i >>> 0
}, _r.sum64_4_hi = function(t, e, r, i, n, s, o, a) {
    var c = 0,
        h = e;
    return c += (h = h + i >>> 0) < e ? 1 : 0, c += (h = h + s >>> 0) < s ? 1 : 0, t + r + n + o + (c += (h = h + a >>> 0) < a ? 1 : 0) >>> 0
}, _r.sum64_4_lo = function(t, e, r, i, n, s, o, a) {
    return e + i + s + a >>> 0
}, _r.sum64_5_hi = function(t, e, r, i, n, s, o, a, c, h) {
    var u = 0,
        l = e;
    return u += (l = l + i >>> 0) < e ? 1 : 0, u += (l = l + s >>> 0) < s ? 1 : 0, u += (l = l + a >>> 0) < a ? 1 : 0, t + r + n + o + c + (u += (l = l + h >>> 0) < h ? 1 : 0) >>> 0
}, _r.sum64_5_lo = function(t, e, r, i, n, s, o, a, c, h) {
    return e + i + s + a + h >>> 0
}, _r.rotr64_hi = function(t, e, r) {
    return (e << 32 - r | t >>> r) >>> 0
}, _r.rotr64_lo = function(t, e, r) {
    return (t << 32 - r | e >>> r) >>> 0
}, _r.shr64_hi = function(t, e, r) {
    return t >>> r
}, _r.shr64_lo = function(t, e, r) {
    return (t << 32 - r | e >>> r) >>> 0
};
var Rr = {},
    Tr = _r,
    qr = Er;

function Dr() {
    this.pending = null, this.pendingTotal = 0, this.blockSize = this.constructor.blockSize, this.outSize = this.constructor.outSize, this.hmacStrength = this.constructor.hmacStrength, this.padLength = this.constructor.padLength / 8, this.endian = "big", this._delta8 = this.blockSize / 8, this._delta32 = this.blockSize / 32
}
Rr.BlockHash = Dr, Dr.prototype.update = function(t, e) {
    if (t = Tr.toArray(t, e), this.pending ? this.pending = this.pending.concat(t) : this.pending = t, this.pendingTotal += t.length, this.pending.length >= this._delta8) {
        var r = (t = this.pending).length % this._delta8;
        this.pending = t.slice(t.length - r, t.length), 0 === this.pending.length && (this.pending = null), t = Tr.join32(t, 0, t.length - r, this.endian);
        for (var i = 0; i < t.length; i += this._delta32) this._update(t, i, i + this._delta32)
    }
    return this
}, Dr.prototype.digest = function(t) {
    return this.update(this._pad()), qr(null === this.pending), this._digest(t)
}, Dr.prototype._pad = function() {
    var t = this.pendingTotal,
        e = this._delta8,
        r = e - (t + this.padLength) % e,
        i = new Array(r + this.padLength);
    i[0] = 128;
    for (var n = 1; n < r; n++) i[n] = 0;
    if (t <<= 3, "big" === this.endian) {
        for (var s = 8; s < this.padLength; s++) i[n++] = 0;
        i[n++] = 0, i[n++] = 0, i[n++] = 0, i[n++] = 0, i[n++] = t >>> 24 & 255, i[n++] = t >>> 16 & 255, i[n++] = t >>> 8 & 255, i[n++] = 255 & t
    } else
        for (i[n++] = 255 & t, i[n++] = t >>> 8 & 255, i[n++] = t >>> 16 & 255, i[n++] = t >>> 24 & 255, i[n++] = 0, i[n++] = 0, i[n++] = 0, i[n++] = 0, s = 8; s < this.padLength; s++) i[n++] = 0;
    return i
};
var kr = {},
    Br = {},
    Ur = _r.rotr32;

function jr(t, e, r) {
    return t & e ^ ~t & r
}

function zr(t, e, r) {
    return t & e ^ t & r ^ e & r
}

function Lr(t, e, r) {
    return t ^ e ^ r
}
Br.ft_1 = function(t, e, r, i) {
    return 0 === t ? jr(e, r, i) : 1 === t || 3 === t ? Lr(e, r, i) : 2 === t ? zr(e, r, i) : void 0
}, Br.ch32 = jr, Br.maj32 = zr, Br.p32 = Lr, Br.s0_256 = function(t) {
    return Ur(t, 2) ^ Ur(t, 13) ^ Ur(t, 22)
}, Br.s1_256 = function(t) {
    return Ur(t, 6) ^ Ur(t, 11) ^ Ur(t, 25)
}, Br.g0_256 = function(t) {
    return Ur(t, 7) ^ Ur(t, 18) ^ t >>> 3
}, Br.g1_256 = function(t) {
    return Ur(t, 17) ^ Ur(t, 19) ^ t >>> 10
};
var Fr = _r,
    Kr = Rr,
    Hr = Br,
    $r = Fr.rotl32,
    Vr = Fr.sum32,
    Qr = Fr.sum32_5,
    Wr = Hr.ft_1,
    Gr = Kr.BlockHash,
    Jr = [1518500249, 1859775393, 2400959708, 3395469782];

function Yr() {
    if (!(this instanceof Yr)) return new Yr;
    Gr.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], this.W = new Array(80)
}
Fr.inherits(Yr, Gr);
var Xr = Yr;
Yr.blockSize = 512, Yr.outSize = 160, Yr.hmacStrength = 80, Yr.padLength = 64, Yr.prototype._update = function(t, e) {
    for (var r = this.W, i = 0; i < 16; i++) r[i] = t[e + i];
    for (; i < r.length; i++) r[i] = $r(r[i - 3] ^ r[i - 8] ^ r[i - 14] ^ r[i - 16], 1);
    var n = this.h[0],
        s = this.h[1],
        o = this.h[2],
        a = this.h[3],
        c = this.h[4];
    for (i = 0; i < r.length; i++) {
        var h = ~~(i / 20),
            u = Qr($r(n, 5), Wr(h, s, o, a), c, r[i], Jr[h]);
        c = a, a = o, o = $r(s, 30), s = n, n = u
    }
    this.h[0] = Vr(this.h[0], n), this.h[1] = Vr(this.h[1], s), this.h[2] = Vr(this.h[2], o), this.h[3] = Vr(this.h[3], a), this.h[4] = Vr(this.h[4], c)
}, Yr.prototype._digest = function(t) {
    return "hex" === t ? Fr.toHex32(this.h, "big") : Fr.split32(this.h, "big")
};
var Zr = _r,
    ti = Rr,
    ei = Br,
    ri = Er,
    ii = Zr.sum32,
    ni = Zr.sum32_4,
    si = Zr.sum32_5,
    oi = ei.ch32,
    ai = ei.maj32,
    ci = ei.s0_256,
    hi = ei.s1_256,
    ui = ei.g0_256,
    li = ei.g1_256,
    fi = ti.BlockHash,
    pi = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];

function di() {
    if (!(this instanceof di)) return new di;
    fi.call(this), this.h = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225], this.k = pi, this.W = new Array(64)
}
Zr.inherits(di, fi);
var gi = di;
di.blockSize = 512, di.outSize = 256, di.hmacStrength = 192, di.padLength = 64, di.prototype._update = function(t, e) {
    for (var r = this.W, i = 0; i < 16; i++) r[i] = t[e + i];
    for (; i < r.length; i++) r[i] = ni(li(r[i - 2]), r[i - 7], ui(r[i - 15]), r[i - 16]);
    var n = this.h[0],
        s = this.h[1],
        o = this.h[2],
        a = this.h[3],
        c = this.h[4],
        h = this.h[5],
        u = this.h[6],
        l = this.h[7];
    for (ri(this.k.length === r.length), i = 0; i < r.length; i++) {
        var f = si(l, hi(c), oi(c, h, u), this.k[i], r[i]),
            p = ii(ci(n), ai(n, s, o));
        l = u, u = h, h = c, c = ii(a, f), a = o, o = s, s = n, n = ii(f, p)
    }
    this.h[0] = ii(this.h[0], n), this.h[1] = ii(this.h[1], s), this.h[2] = ii(this.h[2], o), this.h[3] = ii(this.h[3], a), this.h[4] = ii(this.h[4], c), this.h[5] = ii(this.h[5], h), this.h[6] = ii(this.h[6], u), this.h[7] = ii(this.h[7], l)
}, di.prototype._digest = function(t) {
    return "hex" === t ? Zr.toHex32(this.h, "big") : Zr.split32(this.h, "big")
};
var mi = _r,
    vi = gi;

function yi() {
    if (!(this instanceof yi)) return new yi;
    vi.call(this), this.h = [3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428]
}
mi.inherits(yi, vi);
var wi = yi;
yi.blockSize = 512, yi.outSize = 224, yi.hmacStrength = 192, yi.padLength = 64, yi.prototype._digest = function(t) {
    return "hex" === t ? mi.toHex32(this.h.slice(0, 7), "big") : mi.split32(this.h.slice(0, 7), "big")
};
var bi = _r,
    Ai = Rr,
    _i = Er,
    Ei = bi.rotr64_hi,
    Ii = bi.rotr64_lo,
    Si = bi.shr64_hi,
    Mi = bi.shr64_lo,
    Pi = bi.sum64,
    xi = bi.sum64_hi,
    Ni = bi.sum64_lo,
    Ci = bi.sum64_4_hi,
    Oi = bi.sum64_4_lo,
    Ri = bi.sum64_5_hi,
    Ti = bi.sum64_5_lo,
    qi = Ai.BlockHash,
    Di = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591];

function ki() {
    if (!(this instanceof ki)) return new ki;
    qi.call(this), this.h = [1779033703, 4089235720, 3144134277, 2227873595, 1013904242, 4271175723, 2773480762, 1595750129, 1359893119, 2917565137, 2600822924, 725511199, 528734635, 4215389547, 1541459225, 327033209], this.k = Di, this.W = new Array(160)
}
bi.inherits(ki, qi);
var Bi = ki;

function Ui(t, e, r, i, n) {
    var s = t & r ^ ~t & n;
    return s < 0 && (s += 4294967296), s
}

function ji(t, e, r, i, n, s) {
    var o = e & i ^ ~e & s;
    return o < 0 && (o += 4294967296), o
}

function zi(t, e, r, i, n) {
    var s = t & r ^ t & n ^ r & n;
    return s < 0 && (s += 4294967296), s
}

function Li(t, e, r, i, n, s) {
    var o = e & i ^ e & s ^ i & s;
    return o < 0 && (o += 4294967296), o
}

function Fi(t, e) {
    var r = Ei(t, e, 28) ^ Ei(e, t, 2) ^ Ei(e, t, 7);
    return r < 0 && (r += 4294967296), r
}

function Ki(t, e) {
    var r = Ii(t, e, 28) ^ Ii(e, t, 2) ^ Ii(e, t, 7);
    return r < 0 && (r += 4294967296), r
}

function Hi(t, e) {
    var r = Ei(t, e, 14) ^ Ei(t, e, 18) ^ Ei(e, t, 9);
    return r < 0 && (r += 4294967296), r
}

function $i(t, e) {
    var r = Ii(t, e, 14) ^ Ii(t, e, 18) ^ Ii(e, t, 9);
    return r < 0 && (r += 4294967296), r
}

function Vi(t, e) {
    var r = Ei(t, e, 1) ^ Ei(t, e, 8) ^ Si(t, e, 7);
    return r < 0 && (r += 4294967296), r
}

function Qi(t, e) {
    var r = Ii(t, e, 1) ^ Ii(t, e, 8) ^ Mi(t, e, 7);
    return r < 0 && (r += 4294967296), r
}

function Wi(t, e) {
    var r = Ei(t, e, 19) ^ Ei(e, t, 29) ^ Si(t, e, 6);
    return r < 0 && (r += 4294967296), r
}

function Gi(t, e) {
    var r = Ii(t, e, 19) ^ Ii(e, t, 29) ^ Mi(t, e, 6);
    return r < 0 && (r += 4294967296), r
}
ki.blockSize = 1024, ki.outSize = 512, ki.hmacStrength = 192, ki.padLength = 128, ki.prototype._prepareBlock = function(t, e) {
    for (var r = this.W, i = 0; i < 32; i++) r[i] = t[e + i];
    for (; i < r.length; i += 2) {
        var n = Wi(r[i - 4], r[i - 3]),
            s = Gi(r[i - 4], r[i - 3]),
            o = r[i - 14],
            a = r[i - 13],
            c = Vi(r[i - 30], r[i - 29]),
            h = Qi(r[i - 30], r[i - 29]),
            u = r[i - 32],
            l = r[i - 31];
        r[i] = Ci(n, s, o, a, c, h, u, l), r[i + 1] = Oi(n, s, o, a, c, h, u, l)
    }
}, ki.prototype._update = function(t, e) {
    this._prepareBlock(t, e);
    var r = this.W,
        i = this.h[0],
        n = this.h[1],
        s = this.h[2],
        o = this.h[3],
        a = this.h[4],
        c = this.h[5],
        h = this.h[6],
        u = this.h[7],
        l = this.h[8],
        f = this.h[9],
        p = this.h[10],
        d = this.h[11],
        g = this.h[12],
        m = this.h[13],
        v = this.h[14],
        y = this.h[15];
    _i(this.k.length === r.length);
    for (var w = 0; w < r.length; w += 2) {
        var b = v,
            A = y,
            _ = Hi(l, f),
            E = $i(l, f),
            I = Ui(l, f, p, d, g),
            S = ji(l, f, p, d, g, m),
            M = this.k[w],
            P = this.k[w + 1],
            x = r[w],
            N = r[w + 1],
            C = Ri(b, A, _, E, I, S, M, P, x, N),
            O = Ti(b, A, _, E, I, S, M, P, x, N);
        b = Fi(i, n), A = Ki(i, n), _ = zi(i, n, s, o, a), E = Li(i, n, s, o, a, c);
        var R = xi(b, A, _, E),
            T = Ni(b, A, _, E);
        v = g, y = m, g = p, m = d, p = l, d = f, l = xi(h, u, C, O), f = Ni(u, u, C, O), h = a, u = c, a = s, c = o, s = i, o = n, i = xi(C, O, R, T), n = Ni(C, O, R, T)
    }
    Pi(this.h, 0, i, n), Pi(this.h, 2, s, o), Pi(this.h, 4, a, c), Pi(this.h, 6, h, u), Pi(this.h, 8, l, f), Pi(this.h, 10, p, d), Pi(this.h, 12, g, m), Pi(this.h, 14, v, y)
}, ki.prototype._digest = function(t) {
    return "hex" === t ? bi.toHex32(this.h, "big") : bi.split32(this.h, "big")
};
var Ji = _r,
    Yi = Bi;

function Xi() {
    if (!(this instanceof Xi)) return new Xi;
    Yi.call(this), this.h = [3418070365, 3238371032, 1654270250, 914150663, 2438529370, 812702999, 355462360, 4144912697, 1731405415, 4290775857, 2394180231, 1750603025, 3675008525, 1694076839, 1203062813, 3204075428]
}
Ji.inherits(Xi, Yi);
var Zi = Xi;
Xi.blockSize = 1024, Xi.outSize = 384, Xi.hmacStrength = 192, Xi.padLength = 128, Xi.prototype._digest = function(t) {
    return "hex" === t ? Ji.toHex32(this.h.slice(0, 12), "big") : Ji.split32(this.h.slice(0, 12), "big")
}, kr.sha1 = Xr, kr.sha224 = wi, kr.sha256 = gi, kr.sha384 = Zi, kr.sha512 = Bi;
var tn = {},
    en = _r,
    rn = Rr,
    nn = en.rotl32,
    sn = en.sum32,
    on = en.sum32_3,
    an = en.sum32_4,
    cn = rn.BlockHash;

function hn() {
    if (!(this instanceof hn)) return new hn;
    cn.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], this.endian = "little"
}

function un(t, e, r, i) {
    return t <= 15 ? e ^ r ^ i : t <= 31 ? e & r | ~e & i : t <= 47 ? (e | ~r) ^ i : t <= 63 ? e & i | r & ~i : e ^ (r | ~i)
}

function ln(t) {
    return t <= 15 ? 0 : t <= 31 ? 1518500249 : t <= 47 ? 1859775393 : t <= 63 ? 2400959708 : 2840853838
}

function fn(t) {
    return t <= 15 ? 1352829926 : t <= 31 ? 1548603684 : t <= 47 ? 1836072691 : t <= 63 ? 2053994217 : 0
}
en.inherits(hn, cn), tn.ripemd160 = hn, hn.blockSize = 512, hn.outSize = 160, hn.hmacStrength = 192, hn.padLength = 64, hn.prototype._update = function(t, e) {
    for (var r = this.h[0], i = this.h[1], n = this.h[2], s = this.h[3], o = this.h[4], a = r, c = i, h = n, u = s, l = o, f = 0; f < 80; f++) {
        var p = sn(nn(an(r, un(f, i, n, s), t[pn[f] + e], ln(f)), gn[f]), o);
        r = o, o = s, s = nn(n, 10), n = i, i = p, p = sn(nn(an(a, un(79 - f, c, h, u), t[dn[f] + e], fn(f)), mn[f]), l), a = l, l = u, u = nn(h, 10), h = c, c = p
    }
    p = on(this.h[1], n, u), this.h[1] = on(this.h[2], s, l), this.h[2] = on(this.h[3], o, a), this.h[3] = on(this.h[4], r, c), this.h[4] = on(this.h[0], i, h), this.h[0] = p
}, hn.prototype._digest = function(t) {
    return "hex" === t ? en.toHex32(this.h, "little") : en.split32(this.h, "little")
};
var pn = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13],
    dn = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11],
    gn = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6],
    mn = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11],
    vn = _r,
    yn = Er;

function wn(t, e, r) {
    if (!(this instanceof wn)) return new wn(t, e, r);
    this.Hash = t, this.blockSize = t.blockSize / 8, this.outSize = t.outSize / 8, this.inner = null, this.outer = null, this._init(vn.toArray(e, r))
}
var bn, An = wn;

function _n(t, e, r) {
    return t(r = {
        path: e,
        exports: {},
        require: function(t, e) {
            return function() {
                throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")
            }(e ? ? r.path)
        }
    }, r.exports), r.exports
}
wn.prototype._init = function(t) {
    t.length > this.blockSize && (t = (new this.Hash).update(t).digest()), yn(t.length <= this.blockSize);
    for (var e = t.length; e < this.blockSize; e++) t.push(0);
    for (e = 0; e < t.length; e++) t[e] ^= 54;
    for (this.inner = (new this.Hash).update(t), e = 0; e < t.length; e++) t[e] ^= 106;
    this.outer = (new this.Hash).update(t)
}, wn.prototype.update = function(t, e) {
    return this.inner.update(t, e), this
}, wn.prototype.digest = function(t) {
    return this.outer.update(this.inner.digest()), this.outer.digest(t)
}, (bn = Ar).utils = _r, bn.common = Rr, bn.sha = kr, bn.ripemd = tn, bn.hmac = An, bn.sha1 = bn.sha.sha1, bn.sha256 = bn.sha.sha256, bn.sha224 = bn.sha.sha224, bn.sha384 = bn.sha.sha384, bn.sha512 = bn.sha.sha512, bn.ripemd160 = bn.ripemd.ripemd160;
var En = In;

function In(t, e) {
    if (!t) throw new Error(e || "Assertion failed")
}
In.equal = function(t, e, r) {
    if (t != e) throw new Error(r || "Assertion failed: " + t + " != " + e)
};
var Sn = _n((function(t, e) {
        var r = e;

        function i(t) {
            return 1 === t.length ? "0" + t : t
        }

        function n(t) {
            for (var e = "", r = 0; r < t.length; r++) e += i(t[r].toString(16));
            return e
        }
        r.toArray = function(t, e) {
            if (Array.isArray(t)) return t.slice();
            if (!t) return [];
            var r = [];
            if ("string" != typeof t) {
                for (var i = 0; i < t.length; i++) r[i] = 0 | t[i];
                return r
            }
            if ("hex" === e) {
                (t = t.replace(/[^a-z0-9]+/gi, "")).length % 2 != 0 && (t = "0" + t);
                for (i = 0; i < t.length; i += 2) r.push(parseInt(t[i] + t[i + 1], 16))
            } else
                for (i = 0; i < t.length; i++) {
                    var n = t.charCodeAt(i),
                        s = n >> 8,
                        o = 255 & n;
                    s ? r.push(s, o) : r.push(o)
                }
            return r
        }, r.zero2 = i, r.toHex = n, r.encode = function(t, e) {
            return "hex" === e ? n(t) : t
        }
    })),
    Mn = _n((function(t, e) {
        var r = e;
        r.assert = En, r.toArray = Sn.toArray, r.zero2 = Sn.zero2, r.toHex = Sn.toHex, r.encode = Sn.encode, r.getNAF = function(t, e, r) {
            var i = new Array(Math.max(t.bitLength(), r) + 1);
            i.fill(0);
            for (var n = 1 << e + 1, s = t.clone(), o = 0; o < i.length; o++) {
                var a, c = s.andln(n - 1);
                s.isOdd() ? (a = c > (n >> 1) - 1 ? (n >> 1) - c : c, s.isubn(a)) : a = 0, i[o] = a, s.iushrn(1)
            }
            return i
        }, r.getJSF = function(t, e) {
            var r = [
                [],
                []
            ];
            t = t.clone(), e = e.clone();
            for (var i, n = 0, s = 0; t.cmpn(-n) > 0 || e.cmpn(-s) > 0;) {
                var o, a, c = t.andln(3) + n & 3,
                    h = e.andln(3) + s & 3;
                3 === c && (c = -1), 3 === h && (h = -1), 1 & c ? o = 3 !== (i = t.andln(7) + n & 7) && 5 !== i || 2 !== h ? c : -c : o = 0, r[0].push(o), 1 & h ? a = 3 !== (i = e.andln(7) + s & 7) && 5 !== i || 2 !== c ? h : -h : a = 0, r[1].push(a), 2 * n === o + 1 && (n = 1 - n), 2 * s === a + 1 && (s = 1 - s), t.iushrn(1), e.iushrn(1)
            }
            return r
        }, r.cachedProperty = function(t, e, r) {
            var i = "_" + e;
            t.prototype[e] = function() {
                return void 0 !== this[i] ? this[i] : this[i] = r.call(this)
            }
        }, r.parseBytes = function(t) {
            return "string" == typeof t ? r.toArray(t, "hex") : t
        }, r.intFromLE = function(t) {
            return new Se(t, "hex", "le")
        }
    })),
    Pn = Mn.getNAF,
    xn = Mn.getJSF,
    Nn = Mn.assert;

function Cn(t, e) {
    this.type = t, this.p = new Se(e.p, 16), this.red = e.prime ? Se.red(e.prime) : Se.mont(this.p), this.zero = new Se(0).toRed(this.red), this.one = new Se(1).toRed(this.red), this.two = new Se(2).toRed(this.red), this.n = e.n && new Se(e.n, 16), this.g = e.g && this.pointFromJSON(e.g, e.gRed), this._wnafT1 = new Array(4), this._wnafT2 = new Array(4), this._wnafT3 = new Array(4), this._wnafT4 = new Array(4), this._bitLength = this.n ? this.n.bitLength() : 0;
    var r = this.n && this.p.div(this.n);
    !r || r.cmpn(100) > 0 ? this.redN = null : (this._maxwellTrick = !0, this.redN = this.n.toRed(this.red))
}
var On = Cn;

function Rn(t, e) {
    this.curve = t, this.type = e, this.precomputed = null
}
Cn.prototype.point = function() {
    throw new Error("Not implemented")
}, Cn.prototype.validate = function() {
    throw new Error("Not implemented")
}, Cn.prototype._fixedNafMul = function(t, e) {
    Nn(t.precomputed);
    var r = t._getDoubles(),
        i = Pn(e, 1, this._bitLength),
        n = (1 << r.step + 1) - (r.step % 2 == 0 ? 2 : 1);
    n /= 3;
    var s, o, a = [];
    for (s = 0; s < i.length; s += r.step) {
        o = 0;
        for (var c = s + r.step - 1; c >= s; c--) o = (o << 1) + i[c];
        a.push(o)
    }
    for (var h = this.jpoint(null, null, null), u = this.jpoint(null, null, null), l = n; l > 0; l--) {
        for (s = 0; s < a.length; s++)(o = a[s]) === l ? u = u.mixedAdd(r.points[s]) : o === -l && (u = u.mixedAdd(r.points[s].neg()));
        h = h.add(u)
    }
    return h.toP()
}, Cn.prototype._wnafMul = function(t, e) {
    var r = 4,
        i = t._getNAFPoints(r);
    r = i.wnd;
    for (var n = i.points, s = Pn(e, r, this._bitLength), o = this.jpoint(null, null, null), a = s.length - 1; a >= 0; a--) {
        for (var c = 0; a >= 0 && 0 === s[a]; a--) c++;
        if (a >= 0 && c++, o = o.dblp(c), a < 0) break;
        var h = s[a];
        Nn(0 !== h), o = "affine" === t.type ? h > 0 ? o.mixedAdd(n[h - 1 >> 1]) : o.mixedAdd(n[-h - 1 >> 1].neg()) : h > 0 ? o.add(n[h - 1 >> 1]) : o.add(n[-h - 1 >> 1].neg())
    }
    return "affine" === t.type ? o.toP() : o
}, Cn.prototype._wnafMulAdd = function(t, e, r, i, n) {
    var s, o, a, c = this._wnafT1,
        h = this._wnafT2,
        u = this._wnafT3,
        l = 0;
    for (s = 0; s < i; s++) {
        var f = (a = e[s])._getNAFPoints(t);
        c[s] = f.wnd, h[s] = f.points
    }
    for (s = i - 1; s >= 1; s -= 2) {
        var p = s - 1,
            d = s;
        if (1 === c[p] && 1 === c[d]) {
            var g = [e[p], null, null, e[d]];
            0 === e[p].y.cmp(e[d].y) ? (g[1] = e[p].add(e[d]), g[2] = e[p].toJ().mixedAdd(e[d].neg())) : 0 === e[p].y.cmp(e[d].y.redNeg()) ? (g[1] = e[p].toJ().mixedAdd(e[d]), g[2] = e[p].add(e[d].neg())) : (g[1] = e[p].toJ().mixedAdd(e[d]), g[2] = e[p].toJ().mixedAdd(e[d].neg()));
            var m = [-3, -1, -5, -7, 0, 7, 5, 1, 3],
                v = xn(r[p], r[d]);
            for (l = Math.max(v[0].length, l), u[p] = new Array(l), u[d] = new Array(l), o = 0; o < l; o++) {
                var y = 0 | v[0][o],
                    w = 0 | v[1][o];
                u[p][o] = m[3 * (y + 1) + (w + 1)], u[d][o] = 0, h[p] = g
            }
        } else u[p] = Pn(r[p], c[p], this._bitLength), u[d] = Pn(r[d], c[d], this._bitLength), l = Math.max(u[p].length, l), l = Math.max(u[d].length, l)
    }
    var b = this.jpoint(null, null, null),
        A = this._wnafT4;
    for (s = l; s >= 0; s--) {
        for (var _ = 0; s >= 0;) {
            var E = !0;
            for (o = 0; o < i; o++) A[o] = 0 | u[o][s], 0 !== A[o] && (E = !1);
            if (!E) break;
            _++, s--
        }
        if (s >= 0 && _++, b = b.dblp(_), s < 0) break;
        for (o = 0; o < i; o++) {
            var I = A[o];
            0 !== I && (I > 0 ? a = h[o][I - 1 >> 1] : I < 0 && (a = h[o][-I - 1 >> 1].neg()), b = "affine" === a.type ? b.mixedAdd(a) : b.add(a))
        }
    }
    for (s = 0; s < i; s++) h[s] = null;
    return n ? b : b.toP()
}, Cn.BasePoint = Rn, Rn.prototype.eq = function() {
    throw new Error("Not implemented")
}, Rn.prototype.validate = function() {
    return this.curve.validate(this)
}, Cn.prototype.decodePoint = function(t, e) {
    t = Mn.toArray(t, e);
    var r = this.p.byteLength();
    if ((4 === t[0] || 6 === t[0] || 7 === t[0]) && t.length - 1 == 2 * r) return 6 === t[0] ? Nn(t[t.length - 1] % 2 == 0) : 7 === t[0] && Nn(t[t.length - 1] % 2 == 1), this.point(t.slice(1, 1 + r), t.slice(1 + r, 1 + 2 * r));
    if ((2 === t[0] || 3 === t[0]) && t.length - 1 === r) return this.pointFromX(t.slice(1, 1 + r), 3 === t[0]);
    throw new Error("Unknown point format")
}, Rn.prototype.encodeCompressed = function(t) {
    return this.encode(t, !0)
}, Rn.prototype._encode = function(t) {
    var e = this.curve.p.byteLength(),
        r = this.getX().toArray("be", e);
    return t ? [this.getY().isEven() ? 2 : 3].concat(r) : [4].concat(r, this.getY().toArray("be", e))
}, Rn.prototype.encode = function(t, e) {
    return Mn.encode(this._encode(e), t)
}, Rn.prototype.precompute = function(t) {
    if (this.precomputed) return this;
    var e = {
        doubles: null,
        naf: null,
        beta: null
    };
    return e.naf = this._getNAFPoints(8), e.doubles = this._getDoubles(4, t), e.beta = this._getBeta(), this.precomputed = e, this
}, Rn.prototype._hasDoubles = function(t) {
    if (!this.precomputed) return !1;
    var e = this.precomputed.doubles;
    return !!e && e.points.length >= Math.ceil((t.bitLength() + 1) / e.step)
}, Rn.prototype._getDoubles = function(t, e) {
    if (this.precomputed && this.precomputed.doubles) return this.precomputed.doubles;
    for (var r = [this], i = this, n = 0; n < e; n += t) {
        for (var s = 0; s < t; s++) i = i.dbl();
        r.push(i)
    }
    return {
        step: t,
        points: r
    }
}, Rn.prototype._getNAFPoints = function(t) {
    if (this.precomputed && this.precomputed.naf) return this.precomputed.naf;
    for (var e = [this], r = (1 << t) - 1, i = 1 === r ? null : this.dbl(), n = 1; n < r; n++) e[n] = e[n - 1].add(i);
    return {
        wnd: t,
        points: e
    }
}, Rn.prototype._getBeta = function() {
    return null
}, Rn.prototype.dblp = function(t) {
    for (var e = this, r = 0; r < t; r++) e = e.dbl();
    return e
};
var Tn = _n((function(t) {
        "function" == typeof Object.create ? t.exports = function(t, e) {
            e && (t.super_ = e, t.prototype = Object.create(e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }))
        } : t.exports = function(t, e) {
            if (e) {
                t.super_ = e;
                var r = function() {};
                r.prototype = e.prototype, t.prototype = new r, t.prototype.constructor = t
            }
        }
    })),
    qn = Mn.assert;

function Dn(t) {
    On.call(this, "short", t), this.a = new Se(t.a, 16).toRed(this.red), this.b = new Se(t.b, 16).toRed(this.red), this.tinv = this.two.redInvm(), this.zeroA = 0 === this.a.fromRed().cmpn(0), this.threeA = 0 === this.a.fromRed().sub(this.p).cmpn(-3), this.endo = this._getEndomorphism(t), this._endoWnafT1 = new Array(4), this._endoWnafT2 = new Array(4)
}
Tn(Dn, On);
var kn = Dn;

function Bn(t, e, r, i) {
    On.BasePoint.call(this, t, "affine"), null === e && null === r ? (this.x = null, this.y = null, this.inf = !0) : (this.x = new Se(e, 16), this.y = new Se(r, 16), i && (this.x.forceRed(this.curve.red), this.y.forceRed(this.curve.red)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.inf = !1)
}

function Un(t, e, r, i) {
    On.BasePoint.call(this, t, "jacobian"), null === e && null === r && null === i ? (this.x = this.curve.one, this.y = this.curve.one, this.z = new Se(0)) : (this.x = new Se(e, 16), this.y = new Se(r, 16), this.z = new Se(i, 16)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.zOne = this.z === this.curve.one
}
Dn.prototype._getEndomorphism = function(t) {
    if (this.zeroA && this.g && this.n && 1 === this.p.modn(3)) {
        var e, r;
        if (t.beta) e = new Se(t.beta, 16).toRed(this.red);
        else {
            var i = this._getEndoRoots(this.p);
            e = (e = i[0].cmp(i[1]) < 0 ? i[0] : i[1]).toRed(this.red)
        }
        if (t.lambda) r = new Se(t.lambda, 16);
        else {
            var n = this._getEndoRoots(this.n);
            0 === this.g.mul(n[0]).x.cmp(this.g.x.redMul(e)) ? r = n[0] : (r = n[1], qn(0 === this.g.mul(r).x.cmp(this.g.x.redMul(e))))
        }
        return {
            beta: e,
            lambda: r,
            basis: t.basis ? t.basis.map((function(t) {
                return {
                    a: new Se(t.a, 16),
                    b: new Se(t.b, 16)
                }
            })) : this._getEndoBasis(r)
        }
    }
}, Dn.prototype._getEndoRoots = function(t) {
    var e = t === this.p ? this.red : Se.mont(t),
        r = new Se(2).toRed(e).redInvm(),
        i = r.redNeg(),
        n = new Se(3).toRed(e).redNeg().redSqrt().redMul(r);
    return [i.redAdd(n).fromRed(), i.redSub(n).fromRed()]
}, Dn.prototype._getEndoBasis = function(t) {
    for (var e, r, i, n, s, o, a, c, h, u = this.n.ushrn(Math.floor(this.n.bitLength() / 2)), l = t, f = this.n.clone(), p = new Se(1), d = new Se(0), g = new Se(0), m = new Se(1), v = 0; 0 !== l.cmpn(0);) {
        var y = f.div(l);
        c = f.sub(y.mul(l)), h = g.sub(y.mul(p));
        var w = m.sub(y.mul(d));
        if (!i && c.cmp(u) < 0) e = a.neg(), r = p, i = c.neg(), n = h;
        else if (i && 2 == ++v) break;
        a = c, f = l, l = c, g = p, p = h, m = d, d = w
    }
    s = c.neg(), o = h;
    var b = i.sqr().add(n.sqr());
    return s.sqr().add(o.sqr()).cmp(b) >= 0 && (s = e, o = r), i.negative && (i = i.neg(), n = n.neg()), s.negative && (s = s.neg(), o = o.neg()), [{
        a: i,
        b: n
    }, {
        a: s,
        b: o
    }]
}, Dn.prototype._endoSplit = function(t) {
    var e = this.endo.basis,
        r = e[0],
        i = e[1],
        n = i.b.mul(t).divRound(this.n),
        s = r.b.neg().mul(t).divRound(this.n),
        o = n.mul(r.a),
        a = s.mul(i.a),
        c = n.mul(r.b),
        h = s.mul(i.b);
    return {
        k1: t.sub(o).sub(a),
        k2: c.add(h).neg()
    }
}, Dn.prototype.pointFromX = function(t, e) {
    (t = new Se(t, 16)).red || (t = t.toRed(this.red));
    var r = t.redSqr().redMul(t).redIAdd(t.redMul(this.a)).redIAdd(this.b),
        i = r.redSqrt();
    if (0 !== i.redSqr().redSub(r).cmp(this.zero)) throw new Error("invalid point");
    var n = i.fromRed().isOdd();
    return (e && !n || !e && n) && (i = i.redNeg()), this.point(t, i)
}, Dn.prototype.validate = function(t) {
    if (t.inf) return !0;
    var e = t.x,
        r = t.y,
        i = this.a.redMul(e),
        n = e.redSqr().redMul(e).redIAdd(i).redIAdd(this.b);
    return 0 === r.redSqr().redISub(n).cmpn(0)
}, Dn.prototype._endoWnafMulAdd = function(t, e, r) {
    for (var i = this._endoWnafT1, n = this._endoWnafT2, s = 0; s < t.length; s++) {
        var o = this._endoSplit(e[s]),
            a = t[s],
            c = a._getBeta();
        o.k1.negative && (o.k1.ineg(), a = a.neg(!0)), o.k2.negative && (o.k2.ineg(), c = c.neg(!0)), i[2 * s] = a, i[2 * s + 1] = c, n[2 * s] = o.k1, n[2 * s + 1] = o.k2
    }
    for (var h = this._wnafMulAdd(1, i, n, 2 * s, r), u = 0; u < 2 * s; u++) i[u] = null, n[u] = null;
    return h
}, Tn(Bn, On.BasePoint), Dn.prototype.point = function(t, e, r) {
    return new Bn(this, t, e, r)
}, Dn.prototype.pointFromJSON = function(t, e) {
    return Bn.fromJSON(this, t, e)
}, Bn.prototype._getBeta = function() {
    if (this.curve.endo) {
        var t = this.precomputed;
        if (t && t.beta) return t.beta;
        var e = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
        if (t) {
            var r = this.curve,
                i = function(t) {
                    return r.point(t.x.redMul(r.endo.beta), t.y)
                };
            t.beta = e, e.precomputed = {
                beta: null,
                naf: t.naf && {
                    wnd: t.naf.wnd,
                    points: t.naf.points.map(i)
                },
                doubles: t.doubles && {
                    step: t.doubles.step,
                    points: t.doubles.points.map(i)
                }
            }
        }
        return e
    }
}, Bn.prototype.toJSON = function() {
    return this.precomputed ? [this.x, this.y, this.precomputed && {
        doubles: this.precomputed.doubles && {
            step: this.precomputed.doubles.step,
            points: this.precomputed.doubles.points.slice(1)
        },
        naf: this.precomputed.naf && {
            wnd: this.precomputed.naf.wnd,
            points: this.precomputed.naf.points.slice(1)
        }
    }] : [this.x, this.y]
}, Bn.fromJSON = function(t, e, r) {
    "string" == typeof e && (e = JSON.parse(e));
    var i = t.point(e[0], e[1], r);
    if (!e[2]) return i;

    function n(e) {
        return t.point(e[0], e[1], r)
    }
    var s = e[2];
    return i.precomputed = {
        beta: null,
        doubles: s.doubles && {
            step: s.doubles.step,
            points: [i].concat(s.doubles.points.map(n))
        },
        naf: s.naf && {
            wnd: s.naf.wnd,
            points: [i].concat(s.naf.points.map(n))
        }
    }, i
}, Bn.prototype.inspect = function() {
    return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + ">"
}, Bn.prototype.isInfinity = function() {
    return this.inf
}, Bn.prototype.add = function(t) {
    if (this.inf) return t;
    if (t.inf) return this;
    if (this.eq(t)) return this.dbl();
    if (this.neg().eq(t)) return this.curve.point(null, null);
    if (0 === this.x.cmp(t.x)) return this.curve.point(null, null);
    var e = this.y.redSub(t.y);
    0 !== e.cmpn(0) && (e = e.redMul(this.x.redSub(t.x).redInvm()));
    var r = e.redSqr().redISub(this.x).redISub(t.x),
        i = e.redMul(this.x.redSub(r)).redISub(this.y);
    return this.curve.point(r, i)
}, Bn.prototype.dbl = function() {
    if (this.inf) return this;
    var t = this.y.redAdd(this.y);
    if (0 === t.cmpn(0)) return this.curve.point(null, null);
    var e = this.curve.a,
        r = this.x.redSqr(),
        i = t.redInvm(),
        n = r.redAdd(r).redIAdd(r).redIAdd(e).redMul(i),
        s = n.redSqr().redISub(this.x.redAdd(this.x)),
        o = n.redMul(this.x.redSub(s)).redISub(this.y);
    return this.curve.point(s, o)
}, Bn.prototype.getX = function() {
    return this.x.fromRed()
}, Bn.prototype.getY = function() {
    return this.y.fromRed()
}, Bn.prototype.mul = function(t) {
    return t = new Se(t, 16), this.isInfinity() ? this : this._hasDoubles(t) ? this.curve._fixedNafMul(this, t) : this.curve.endo ? this.curve._endoWnafMulAdd([this], [t]) : this.curve._wnafMul(this, t)
}, Bn.prototype.mulAdd = function(t, e, r) {
    var i = [this, e],
        n = [t, r];
    return this.curve.endo ? this.curve._endoWnafMulAdd(i, n) : this.curve._wnafMulAdd(1, i, n, 2)
}, Bn.prototype.jmulAdd = function(t, e, r) {
    var i = [this, e],
        n = [t, r];
    return this.curve.endo ? this.curve._endoWnafMulAdd(i, n, !0) : this.curve._wnafMulAdd(1, i, n, 2, !0)
}, Bn.prototype.eq = function(t) {
    return this === t || this.inf === t.inf && (this.inf || 0 === this.x.cmp(t.x) && 0 === this.y.cmp(t.y))
}, Bn.prototype.neg = function(t) {
    if (this.inf) return this;
    var e = this.curve.point(this.x, this.y.redNeg());
    if (t && this.precomputed) {
        var r = this.precomputed,
            i = function(t) {
                return t.neg()
            };
        e.precomputed = {
            naf: r.naf && {
                wnd: r.naf.wnd,
                points: r.naf.points.map(i)
            },
            doubles: r.doubles && {
                step: r.doubles.step,
                points: r.doubles.points.map(i)
            }
        }
    }
    return e
}, Bn.prototype.toJ = function() {
    return this.inf ? this.curve.jpoint(null, null, null) : this.curve.jpoint(this.x, this.y, this.curve.one)
}, Tn(Un, On.BasePoint), Dn.prototype.jpoint = function(t, e, r) {
    return new Un(this, t, e, r)
}, Un.prototype.toP = function() {
    if (this.isInfinity()) return this.curve.point(null, null);
    var t = this.z.redInvm(),
        e = t.redSqr(),
        r = this.x.redMul(e),
        i = this.y.redMul(e).redMul(t);
    return this.curve.point(r, i)
}, Un.prototype.neg = function() {
    return this.curve.jpoint(this.x, this.y.redNeg(), this.z)
}, Un.prototype.add = function(t) {
    if (this.isInfinity()) return t;
    if (t.isInfinity()) return this;
    var e = t.z.redSqr(),
        r = this.z.redSqr(),
        i = this.x.redMul(e),
        n = t.x.redMul(r),
        s = this.y.redMul(e.redMul(t.z)),
        o = t.y.redMul(r.redMul(this.z)),
        a = i.redSub(n),
        c = s.redSub(o);
    if (0 === a.cmpn(0)) return 0 !== c.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
    var h = a.redSqr(),
        u = h.redMul(a),
        l = i.redMul(h),
        f = c.redSqr().redIAdd(u).redISub(l).redISub(l),
        p = c.redMul(l.redISub(f)).redISub(s.redMul(u)),
        d = this.z.redMul(t.z).redMul(a);
    return this.curve.jpoint(f, p, d)
}, Un.prototype.mixedAdd = function(t) {
    if (this.isInfinity()) return t.toJ();
    if (t.isInfinity()) return this;
    var e = this.z.redSqr(),
        r = this.x,
        i = t.x.redMul(e),
        n = this.y,
        s = t.y.redMul(e).redMul(this.z),
        o = r.redSub(i),
        a = n.redSub(s);
    if (0 === o.cmpn(0)) return 0 !== a.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
    var c = o.redSqr(),
        h = c.redMul(o),
        u = r.redMul(c),
        l = a.redSqr().redIAdd(h).redISub(u).redISub(u),
        f = a.redMul(u.redISub(l)).redISub(n.redMul(h)),
        p = this.z.redMul(o);
    return this.curve.jpoint(l, f, p)
}, Un.prototype.dblp = function(t) {
    if (0 === t) return this;
    if (this.isInfinity()) return this;
    if (!t) return this.dbl();
    var e;
    if (this.curve.zeroA || this.curve.threeA) {
        var r = this;
        for (e = 0; e < t; e++) r = r.dbl();
        return r
    }
    var i = this.curve.a,
        n = this.curve.tinv,
        s = this.x,
        o = this.y,
        a = this.z,
        c = a.redSqr().redSqr(),
        h = o.redAdd(o);
    for (e = 0; e < t; e++) {
        var u = s.redSqr(),
            l = h.redSqr(),
            f = l.redSqr(),
            p = u.redAdd(u).redIAdd(u).redIAdd(i.redMul(c)),
            d = s.redMul(l),
            g = p.redSqr().redISub(d.redAdd(d)),
            m = d.redISub(g),
            v = p.redMul(m);
        v = v.redIAdd(v).redISub(f);
        var y = h.redMul(a);
        e + 1 < t && (c = c.redMul(f)), s = g, a = y, h = v
    }
    return this.curve.jpoint(s, h.redMul(n), a)
}, Un.prototype.dbl = function() {
    return this.isInfinity() ? this : this.curve.zeroA ? this._zeroDbl() : this.curve.threeA ? this._threeDbl() : this._dbl()
}, Un.prototype._zeroDbl = function() {
    var t, e, r;
    if (this.zOne) {
        var i = this.x.redSqr(),
            n = this.y.redSqr(),
            s = n.redSqr(),
            o = this.x.redAdd(n).redSqr().redISub(i).redISub(s);
        o = o.redIAdd(o);
        var a = i.redAdd(i).redIAdd(i),
            c = a.redSqr().redISub(o).redISub(o),
            h = s.redIAdd(s);
        h = (h = h.redIAdd(h)).redIAdd(h), t = c, e = a.redMul(o.redISub(c)).redISub(h), r = this.y.redAdd(this.y)
    } else {
        var u = this.x.redSqr(),
            l = this.y.redSqr(),
            f = l.redSqr(),
            p = this.x.redAdd(l).redSqr().redISub(u).redISub(f);
        p = p.redIAdd(p);
        var d = u.redAdd(u).redIAdd(u),
            g = d.redSqr(),
            m = f.redIAdd(f);
        m = (m = m.redIAdd(m)).redIAdd(m), t = g.redISub(p).redISub(p), e = d.redMul(p.redISub(t)).redISub(m), r = (r = this.y.redMul(this.z)).redIAdd(r)
    }
    return this.curve.jpoint(t, e, r)
}, Un.prototype._threeDbl = function() {
    var t, e, r;
    if (this.zOne) {
        var i = this.x.redSqr(),
            n = this.y.redSqr(),
            s = n.redSqr(),
            o = this.x.redAdd(n).redSqr().redISub(i).redISub(s);
        o = o.redIAdd(o);
        var a = i.redAdd(i).redIAdd(i).redIAdd(this.curve.a),
            c = a.redSqr().redISub(o).redISub(o);
        t = c;
        var h = s.redIAdd(s);
        h = (h = h.redIAdd(h)).redIAdd(h), e = a.redMul(o.redISub(c)).redISub(h), r = this.y.redAdd(this.y)
    } else {
        var u = this.z.redSqr(),
            l = this.y.redSqr(),
            f = this.x.redMul(l),
            p = this.x.redSub(u).redMul(this.x.redAdd(u));
        p = p.redAdd(p).redIAdd(p);
        var d = f.redIAdd(f),
            g = (d = d.redIAdd(d)).redAdd(d);
        t = p.redSqr().redISub(g), r = this.y.redAdd(this.z).redSqr().redISub(l).redISub(u);
        var m = l.redSqr();
        m = (m = (m = m.redIAdd(m)).redIAdd(m)).redIAdd(m), e = p.redMul(d.redISub(t)).redISub(m)
    }
    return this.curve.jpoint(t, e, r)
}, Un.prototype._dbl = function() {
    var t = this.curve.a,
        e = this.x,
        r = this.y,
        i = this.z,
        n = i.redSqr().redSqr(),
        s = e.redSqr(),
        o = r.redSqr(),
        a = s.redAdd(s).redIAdd(s).redIAdd(t.redMul(n)),
        c = e.redAdd(e),
        h = (c = c.redIAdd(c)).redMul(o),
        u = a.redSqr().redISub(h.redAdd(h)),
        l = h.redISub(u),
        f = o.redSqr();
    f = (f = (f = f.redIAdd(f)).redIAdd(f)).redIAdd(f);
    var p = a.redMul(l).redISub(f),
        d = r.redAdd(r).redMul(i);
    return this.curve.jpoint(u, p, d)
}, Un.prototype.trpl = function() {
    if (!this.curve.zeroA) return this.dbl().add(this);
    var t = this.x.redSqr(),
        e = this.y.redSqr(),
        r = this.z.redSqr(),
        i = e.redSqr(),
        n = t.redAdd(t).redIAdd(t),
        s = n.redSqr(),
        o = this.x.redAdd(e).redSqr().redISub(t).redISub(i),
        a = (o = (o = (o = o.redIAdd(o)).redAdd(o).redIAdd(o)).redISub(s)).redSqr(),
        c = i.redIAdd(i);
    c = (c = (c = c.redIAdd(c)).redIAdd(c)).redIAdd(c);
    var h = n.redIAdd(o).redSqr().redISub(s).redISub(a).redISub(c),
        u = e.redMul(h);
    u = (u = u.redIAdd(u)).redIAdd(u);
    var l = this.x.redMul(a).redISub(u);
    l = (l = l.redIAdd(l)).redIAdd(l);
    var f = this.y.redMul(h.redMul(c.redISub(h)).redISub(o.redMul(a)));
    f = (f = (f = f.redIAdd(f)).redIAdd(f)).redIAdd(f);
    var p = this.z.redAdd(o).redSqr().redISub(r).redISub(a);
    return this.curve.jpoint(l, f, p)
}, Un.prototype.mul = function(t, e) {
    return t = new Se(t, e), this.curve._wnafMul(this, t)
}, Un.prototype.eq = function(t) {
    if ("affine" === t.type) return this.eq(t.toJ());
    if (this === t) return !0;
    var e = this.z.redSqr(),
        r = t.z.redSqr();
    if (0 !== this.x.redMul(r).redISub(t.x.redMul(e)).cmpn(0)) return !1;
    var i = e.redMul(this.z),
        n = r.redMul(t.z);
    return 0 === this.y.redMul(n).redISub(t.y.redMul(i)).cmpn(0)
}, Un.prototype.eqXToP = function(t) {
    var e = this.z.redSqr(),
        r = t.toRed(this.curve.red).redMul(e);
    if (0 === this.x.cmp(r)) return !0;
    for (var i = t.clone(), n = this.curve.redN.redMul(e);;) {
        if (i.iadd(this.curve.n), i.cmp(this.curve.p) >= 0) return !1;
        if (r.redIAdd(n), 0 === this.x.cmp(r)) return !0
    }
}, Un.prototype.inspect = function() {
    return this.isInfinity() ? "<EC JPoint Infinity>" : "<EC JPoint x: " + this.x.toString(16, 2) + " y: " + this.y.toString(16, 2) + " z: " + this.z.toString(16, 2) + ">"
}, Un.prototype.isInfinity = function() {
    return 0 === this.z.cmpn(0)
};
var jn = _n((function(t, e) {
        var r = e;
        r.base = On, r.short = kn, r.mont = null, r.edwards = null
    })),
    zn = _n((function(t, e) {
        var r, i = e,
            n = Mn.assert;

        function s(t) {
            "short" === t.type ? this.curve = new jn.short(t) : "edwards" === t.type ? this.curve = new jn.edwards(t) : this.curve = new jn.mont(t), this.g = this.curve.g, this.n = this.curve.n, this.hash = t.hash, n(this.g.validate(), "Invalid curve"), n(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O")
        }

        function o(t, e) {
            Object.defineProperty(i, t, {
                configurable: !0,
                enumerable: !0,
                get: function() {
                    var r = new s(e);
                    return Object.defineProperty(i, t, {
                        configurable: !0,
                        enumerable: !0,
                        value: r
                    }), r
                }
            })
        }
        i.PresetCurve = s, o("p192", {
            type: "short",
            prime: "p192",
            p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
            a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
            b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
            n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
            hash: Ar.sha256,
            gRed: !1,
            g: ["188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012", "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"]
        }), o("p224", {
            type: "short",
            prime: "p224",
            p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
            a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",
            b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",
            n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",
            hash: Ar.sha256,
            gRed: !1,
            g: ["b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21", "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"]
        }), o("p256", {
            type: "short",
            prime: null,
            p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",
            a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",
            b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",
            n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",
            hash: Ar.sha256,
            gRed: !1,
            g: ["6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296", "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"]
        }), o("p384", {
            type: "short",
            prime: null,
            p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",
            a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",
            b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",
            n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",
            hash: Ar.sha384,
            gRed: !1,
            g: ["aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7", "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"]
        }), o("p521", {
            type: "short",
            prime: null,
            p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",
            a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",
            b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",
            n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",
            hash: Ar.sha512,
            gRed: !1,
            g: ["000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66", "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"]
        }), o("curve25519", {
            type: "mont",
            prime: "p25519",
            p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
            a: "76d06",
            b: "1",
            n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
            hash: Ar.sha256,
            gRed: !1,
            g: ["9"]
        }), o("ed25519", {
            type: "edwards",
            prime: "p25519",
            p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
            a: "-1",
            c: "1",
            d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",
            n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
            hash: Ar.sha256,
            gRed: !1,
            g: ["216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a", "6666666666666666666666666666666666666666666666666666666666666658"]
        });
        try {
            r = null.crash()
        } catch {
            r = void 0
        }
        o("secp256k1", {
            type: "short",
            prime: "k256",
            p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
            a: "0",
            b: "7",
            n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",
            h: "1",
            hash: Ar.sha256,
            beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
            lambda: "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",
            basis: [{
                a: "3086d221a7d46bcde86c90e49284eb15",
                b: "-e4437ed6010e88286f547fa90abfe4c3"
            }, {
                a: "114ca50f7a8e2f3f657c1108d9d44cfd8",
                b: "3086d221a7d46bcde86c90e49284eb15"
            }],
            gRed: !1,
            g: ["79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798", "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8", r]
        })
    }));

function Ln(t) {
    if (!(this instanceof Ln)) return new Ln(t);
    this.hash = t.hash, this.predResist = !!t.predResist, this.outLen = this.hash.outSize, this.minEntropy = t.minEntropy || this.hash.hmacStrength, this._reseed = null, this.reseedInterval = null, this.K = null, this.V = null;
    var e = Sn.toArray(t.entropy, t.entropyEnc || "hex"),
        r = Sn.toArray(t.nonce, t.nonceEnc || "hex"),
        i = Sn.toArray(t.pers, t.persEnc || "hex");
    En(e.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._init(e, r, i)
}
var Fn = Ln;
Ln.prototype._init = function(t, e, r) {
    var i = t.concat(e).concat(r);
    this.K = new Array(this.outLen / 8), this.V = new Array(this.outLen / 8);
    for (var n = 0; n < this.V.length; n++) this.K[n] = 0, this.V[n] = 1;
    this._update(i), this._reseed = 1, this.reseedInterval = 281474976710656
}, Ln.prototype._hmac = function() {
    return new Ar.hmac(this.hash, this.K)
}, Ln.prototype._update = function(t) {
    var e = this._hmac().update(this.V).update([0]);
    t && (e = e.update(t)), this.K = e.digest(), this.V = this._hmac().update(this.V).digest(), t && (this.K = this._hmac().update(this.V).update([1]).update(t).digest(), this.V = this._hmac().update(this.V).digest())
}, Ln.prototype.reseed = function(t, e, r, i) {
    "string" != typeof e && (i = r, r = e, e = null), t = Sn.toArray(t, e), r = Sn.toArray(r, i), En(t.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._update(t.concat(r || [])), this._reseed = 1
}, Ln.prototype.generate = function(t, e, r, i) {
    if (this._reseed > this.reseedInterval) throw new Error("Reseed is required");
    "string" != typeof e && (i = r, r = e, e = null), r && (r = Sn.toArray(r, i || "hex"), this._update(r));
    for (var n = []; n.length < t;) this.V = this._hmac().update(this.V).digest(), n = n.concat(this.V);
    var s = n.slice(0, t);
    return this._update(r), this._reseed++, Sn.encode(s, e)
};
var Kn = Mn.assert;

function Hn(t, e) {
    this.ec = t, this.priv = null, this.pub = null, e.priv && this._importPrivate(e.priv, e.privEnc), e.pub && this._importPublic(e.pub, e.pubEnc)
}
var $n = Hn;
Hn.fromPublic = function(t, e, r) {
    return e instanceof Hn ? e : new Hn(t, {
        pub: e,
        pubEnc: r
    })
}, Hn.fromPrivate = function(t, e, r) {
    return e instanceof Hn ? e : new Hn(t, {
        priv: e,
        privEnc: r
    })
}, Hn.prototype.validate = function() {
    var t = this.getPublic();
    return t.isInfinity() ? {
        result: !1,
        reason: "Invalid public key"
    } : t.validate() ? t.mul(this.ec.curve.n).isInfinity() ? {
        result: !0,
        reason: null
    } : {
        result: !1,
        reason: "Public key * N != O"
    } : {
        result: !1,
        reason: "Public key is not a point"
    }
}, Hn.prototype.getPublic = function(t, e) {
    return "string" == typeof t && (e = t, t = null), this.pub || (this.pub = this.ec.g.mul(this.priv)), e ? this.pub.encode(e, t) : this.pub
}, Hn.prototype.getPrivate = function(t) {
    return "hex" === t ? this.priv.toString(16, 2) : this.priv
}, Hn.prototype._importPrivate = function(t, e) {
    this.priv = new Se(t, e || 16), this.priv = this.priv.umod(this.ec.curve.n)
}, Hn.prototype._importPublic = function(t, e) {
    if (t.x || t.y) return "mont" === this.ec.curve.type ? Kn(t.x, "Need x coordinate") : ("short" === this.ec.curve.type || "edwards" === this.ec.curve.type) && Kn(t.x && t.y, "Need both x and y coordinate"), void(this.pub = this.ec.curve.point(t.x, t.y));
    this.pub = this.ec.curve.decodePoint(t, e)
}, Hn.prototype.derive = function(t) {
    return t.validate() || Kn(t.validate(), "public point not validated"), t.mul(this.priv).getX()
}, Hn.prototype.sign = function(t, e, r) {
    return this.ec.sign(t, this, e, r)
}, Hn.prototype.verify = function(t, e) {
    return this.ec.verify(t, e, this)
}, Hn.prototype.inspect = function() {
    return "<Key priv: " + (this.priv && this.priv.toString(16, 2)) + " pub: " + (this.pub && this.pub.inspect()) + " >"
};
var Vn = Mn.assert;

function Qn(t, e) {
    if (t instanceof Qn) return t;
    this._importDER(t, e) || (Vn(t.r && t.s, "Signature without r or s"), this.r = new Se(t.r, 16), this.s = new Se(t.s, 16), void 0 === t.recoveryParam ? this.recoveryParam = null : this.recoveryParam = t.recoveryParam)
}
var Wn = Qn;

function Gn() {
    this.place = 0
}

function Jn(t, e) {
    var r = t[e.place++];
    if (!(128 & r)) return r;
    var i = 15 & r;
    if (0 === i || i > 4) return !1;
    for (var n = 0, s = 0, o = e.place; s < i; s++, o++) n <<= 8, n |= t[o], n >>>= 0;
    return !(n <= 127) && (e.place = o, n)
}

function Yn(t) {
    for (var e = 0, r = t.length - 1; !t[e] && !(128 & t[e + 1]) && e < r;) e++;
    return 0 === e ? t : t.slice(e)
}

function Xn(t, e) {
    if (e < 128) t.push(e);
    else {
        var r = 1 + (Math.log(e) / Math.LN2 >>> 3);
        for (t.push(128 | r); --r;) t.push(e >>> (r << 3) & 255);
        t.push(e)
    }
}
Qn.prototype._importDER = function(t, e) {
    t = Mn.toArray(t, e);
    var r = new Gn;
    if (48 !== t[r.place++]) return !1;
    var i = Jn(t, r);
    if (!1 === i || i + r.place !== t.length || 2 !== t[r.place++]) return !1;
    var n = Jn(t, r);
    if (!1 === n) return !1;
    var s = t.slice(r.place, n + r.place);
    if (r.place += n, 2 !== t[r.place++]) return !1;
    var o = Jn(t, r);
    if (!1 === o || t.length !== o + r.place) return !1;
    var a = t.slice(r.place, o + r.place);
    if (0 === s[0]) {
        if (!(128 & s[1])) return !1;
        s = s.slice(1)
    }
    if (0 === a[0]) {
        if (!(128 & a[1])) return !1;
        a = a.slice(1)
    }
    return this.r = new Se(s), this.s = new Se(a), this.recoveryParam = null, !0
}, Qn.prototype.toDER = function(t) {
    var e = this.r.toArray(),
        r = this.s.toArray();
    for (128 & e[0] && (e = [0].concat(e)), 128 & r[0] && (r = [0].concat(r)), e = Yn(e), r = Yn(r); !(r[0] || 128 & r[1]);) r = r.slice(1);
    var i = [2];
    Xn(i, e.length), (i = i.concat(e)).push(2), Xn(i, r.length);
    var n = i.concat(r),
        s = [48];
    return Xn(s, n.length), s = s.concat(n), Mn.encode(s, t)
};
var Zn = function() {
        throw new Error("unsupported")
    },
    ts = Mn.assert;

function es(t) {
    if (!(this instanceof es)) return new es(t);
    "string" == typeof t && (ts(Object.prototype.hasOwnProperty.call(zn, t), "Unknown curve " + t), t = zn[t]), t instanceof zn.PresetCurve && (t = {
        curve: t
    }), this.curve = t.curve.curve, this.n = this.curve.n, this.nh = this.n.ushrn(1), this.g = this.curve.g, this.g = t.curve.g, this.g.precompute(t.curve.n.bitLength() + 1), this.hash = t.hash || t.curve.hash
}
var rs = es;
es.prototype.keyPair = function(t) {
    return new $n(this, t)
}, es.prototype.keyFromPrivate = function(t, e) {
    return $n.fromPrivate(this, t, e)
}, es.prototype.keyFromPublic = function(t, e) {
    return $n.fromPublic(this, t, e)
}, es.prototype.genKeyPair = function(t) {
    t || (t = {});
    for (var e = new Fn({
            hash: this.hash,
            pers: t.pers,
            persEnc: t.persEnc || "utf8",
            entropy: t.entropy || Zn(this.hash.hmacStrength),
            entropyEnc: t.entropy && t.entropyEnc || "utf8",
            nonce: this.n.toArray()
        }), r = this.n.byteLength(), i = this.n.sub(new Se(2));;) {
        var n = new Se(e.generate(r));
        if (!(n.cmp(i) > 0)) return n.iaddn(1), this.keyFromPrivate(n)
    }
}, es.prototype._truncateToN = function(t, e) {
    var r = 8 * t.byteLength() - this.n.bitLength();
    return r > 0 && (t = t.ushrn(r)), !e && t.cmp(this.n) >= 0 ? t.sub(this.n) : t
}, es.prototype.sign = function(t, e, r, i) {
    "object" == typeof r && (i = r, r = null), i || (i = {}), e = this.keyFromPrivate(e, r), t = this._truncateToN(new Se(t, 16));
    for (var n = this.n.byteLength(), s = e.getPrivate().toArray("be", n), o = t.toArray("be", n), a = new Fn({
            hash: this.hash,
            entropy: s,
            nonce: o,
            pers: i.pers,
            persEnc: i.persEnc || "utf8"
        }), c = this.n.sub(new Se(1)), h = 0;; h++) {
        var u = i.k ? i.k(h) : new Se(a.generate(this.n.byteLength()));
        if (!((u = this._truncateToN(u, !0)).cmpn(1) <= 0 || u.cmp(c) >= 0)) {
            var l = this.g.mul(u);
            if (!l.isInfinity()) {
                var f = l.getX(),
                    p = f.umod(this.n);
                if (0 !== p.cmpn(0)) {
                    var d = u.invm(this.n).mul(p.mul(e.getPrivate()).iadd(t));
                    if (0 !== (d = d.umod(this.n)).cmpn(0)) {
                        var g = (l.getY().isOdd() ? 1 : 0) | (0 !== f.cmp(p) ? 2 : 0);
                        return i.canonical && d.cmp(this.nh) > 0 && (d = this.n.sub(d), g ^= 1), new Wn({
                            r: p,
                            s: d,
                            recoveryParam: g
                        })
                    }
                }
            }
        }
    }
}, es.prototype.verify = function(t, e, r, i) {
    t = this._truncateToN(new Se(t, 16)), r = this.keyFromPublic(r, i);
    var n = (e = new Wn(e, "hex")).r,
        s = e.s;
    if (n.cmpn(1) < 0 || n.cmp(this.n) >= 0 || s.cmpn(1) < 0 || s.cmp(this.n) >= 0) return !1;
    var o, a = s.invm(this.n),
        c = a.mul(t).umod(this.n),
        h = a.mul(n).umod(this.n);
    return this.curve._maxwellTrick ? !(o = this.g.jmulAdd(c, r.getPublic(), h)).isInfinity() && o.eqXToP(n) : !(o = this.g.mulAdd(c, r.getPublic(), h)).isInfinity() && 0 === o.getX().umod(this.n).cmp(n)
}, es.prototype.recoverPubKey = function(t, e, r, i) {
    ts((3 & r) === r, "The recovery param is more than two bits"), e = new Wn(e, i);
    var n = this.n,
        s = new Se(t),
        o = e.r,
        a = e.s,
        c = 1 & r,
        h = r >> 1;
    if (o.cmp(this.curve.p.umod(this.curve.n)) >= 0 && h) throw new Error("Unable to find sencond key candinate");
    o = h ? this.curve.pointFromX(o.add(this.curve.n), c) : this.curve.pointFromX(o, c);
    var u = e.r.invm(n),
        l = n.sub(s).mul(u).umod(n),
        f = a.mul(u).umod(n);
    return this.g.mulAdd(l, o, f)
}, es.prototype.getKeyRecoveryParam = function(t, e, r, i) {
    if (null !== (e = new Wn(e, i)).recoveryParam) return e.recoveryParam;
    for (var n = 0; n < 4; n++) {
        var s;
        try {
            s = this.recoverPubKey(t, e, n)
        } catch {
            continue
        }
        if (s.eq(r)) return n
    }
    throw new Error("Unable to find valid recovery factor")
};
var is = _n((function(t, e) {
        var r = e;
        r.version = "6.5.4", r.utils = Mn, r.rand = function() {
            throw new Error("unsupported")
        }, r.curve = jn, r.curves = zn, r.ec = rs, r.eddsa = null
    })),
    ns = is.ec;
const ss = new he("signing-key/5.7.0");
let os = null;

function as() {
    return os || (os = new ns("secp256k1")), os
}
class cs {
    constructor(t) {
        yr(this, "curve", "secp256k1"), yr(this, "privateKey", ye(t)), 32 !== function(t) {
            if ("string" != typeof t) t = ye(t);
            else if (!me(t) || t.length % 2) return null;
            return (t.length - 2) / 2
        }(this.privateKey) && ss.throwArgumentError("invalid private key", "privateKey", "[[ REDACTED ]]");
        const e = as().keyFromPrivate(ge(this.privateKey));
        yr(this, "publicKey", "0x" + e.getPublic(!1, "hex")), yr(this, "compressedPublicKey", "0x" + e.getPublic(!0, "hex")), yr(this, "_isSigningKey", !0)
    }
    _addPoint(t) {
        const e = as().keyFromPublic(ge(this.publicKey)),
            r = as().keyFromPublic(ge(t));
        return "0x" + e.pub.add(r.pub).encodeCompressed("hex")
    }
    signDigest(t) {
        const e = as().keyFromPrivate(ge(this.privateKey)),
            r = ge(t);
        32 !== r.length && ss.throwArgumentError("bad digest length", "digest", t);
        const i = e.sign(r, {
            canonical: !0
        });
        return Ae({
            recoveryParam: i.recoveryParam,
            r: be("0x" + i.r.toString(16), 32),
            s: be("0x" + i.s.toString(16), 32)
        })
    }
    computeSharedSecret(t) {
        const e = as().keyFromPrivate(ge(this.privateKey)),
            r = as().keyFromPublic(ge(hs(t)));
        return be("0x" + e.derive(r.getPublic()).toString(16), 32)
    }
    static isSigningKey(t) {
        return !(!t || !t._isSigningKey)
    }
}

function hs(t, e) {
    const r = ge(t);
    if (32 === r.length) {
        return new cs(r).publicKey
    }
    return 33 === r.length ? "0x" + as().keyFromPublic(r).getPublic(!1, "hex") : 65 === r.length ? ye(r) : ss.throwArgumentError("invalid public or private key", "key", "[REDACTED]")
}
var us;

function ls(t, e) {
    return function(t) {
        return vr(we(_e(we(hs(t), 1)), 12))
    }(function(t, e) {
        const r = Ae(e),
            i = {
                r: ge(r.r),
                s: ge(r.s)
            };
        return "0x" + as().recoverPubKey(ge(t), i, r.recoveryParam).encode("hex", !1)
    }(ge(t), e))
}! function(t) {
    t[t.legacy = 0] = "legacy", t[t.eip2930 = 1] = "eip2930", t[t.eip1559 = 2] = "eip1559"
}(us || (us = {}));
const fs = "https://rpc.walletconnect.com/v1";
async function ps(t, e, r, i, n, s) {
    switch (r.t) {
        case "eip191":
            return function(t, e, r) {
                return ls(fr(e), r).toLowerCase() === t.toLowerCase()
            }(t, e, r.s);
        case "eip1271":
            return await async function(t, e, r, i, n, s) {
                try {
                    const o = "0x1626ba7e",
                        a = "0000000000000000000000000000000000000000000000000000000000000040",
                        c = "0000000000000000000000000000000000000000000000000000000000000041",
                        h = r.substring(2),
                        u = o + fr(e).substring(2) + a + c + h,
                        l = await fetch(`${s||fs}/?chainId=${i}&projectId=${n}`, {
                            method: "POST",
                            body: JSON.stringify({
                                id: ds(),
                                jsonrpc: "2.0",
                                method: "eth_call",
                                params: [{
                                    to: t,
                                    data: u
                                }, "latest"]
                            })
                        }),
                        {
                            result: f
                        } = await l.json();
                    return !!f && f.slice(0, o.length).toLowerCase() === o.toLowerCase()
                } catch (o) {
                    return console.error("isValidEip1271Signature: ", o), !1
                }
            }(t, e, r.s, i, n, s);
        default:
            throw new Error(`verifySignature failed: Attempted to verify CacaoSignature with unknown type: ${r.t}`)
    }
}

function ds() {
    return Date.now() + Math.floor(1e3 * Math.random())
}
var gs = Object.defineProperty,
    ms = Object.defineProperties,
    vs = Object.getOwnPropertyDescriptors,
    ys = Object.getOwnPropertySymbols,
    ws = Object.prototype.hasOwnProperty,
    bs = Object.prototype.propertyIsEnumerable,
    As = (t, e, r) => e in t ? gs(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : t[e] = r;
const _s = t => null == t ? void 0 : t.split(":"),
    Es = t => {
        const e = t && _s(t);
        if (e) return t.includes("did:pkh:") ? e[3] : e[1]
    },
    Is = t => {
        const e = t && _s(t);
        if (e) return e[2] + ":" + e[3]
    },
    Ss = t => {
        const e = t && _s(t);
        if (e) return e.pop()
    };
async function Ms(t) {
    const {
        cacao: e,
        projectId: r
    } = t, {
        s: i,
        p: n
    } = e, s = Ps(n, n.iss), o = Ss(n.iss);
    return await ps(o, s, i, Es(n.iss), r)
}
const Ps = (t, e) => {
    const r = `${t.domain} wants you to sign in with your Ethereum account:`,
        i = Ss(e);
    if (!t.aud && !t.uri) throw new Error("Either `aud` or `uri` is required to construct the message");
    let n = t.statement || void 0;
    const s = `URI: ${t.aud||t.uri}`,
        o = `Version: ${t.version}`,
        a = `Chain ID: ${Es(e)}`,
        c = `Nonce: ${t.nonce}`,
        h = `Issued At: ${t.iat}`,
        u = t.resources ? `Resources:${t.resources.map((t=>`\n- ${t}`)).join("")}` : void 0,
        l = ks(t.resources);
    if (l) {
        n = function(t = "", e) {
            xs(e);
            const r = "I further authorize the stated URI to perform the following actions on my behalf: ";
            if (t.includes(r)) return t;
            const i = [];
            let n = 0;
            Object.keys(e.att).forEach((t => {
                const r = Object.keys(e.att[t]).map((t => ({
                    ability: t.split("/")[0],
                    action: t.split("/")[1]
                })));
                r.sort(((t, e) => t.action.localeCompare(e.action)));
                const s = {};
                r.forEach((t => {
                    s[t.ability] || (s[t.ability] = []), s[t.ability].push(t.action)
                }));
                const o = Object.keys(s).map((e => (n++, `(${n}) '${e}': '${s[e].join("', '")}' for '${t}'.`)));
                i.push(o.join(", ").replace(".,", "."))
            }));
            const s = i.join(" "),
                o = `${r}${s}`;
            return `${t?t+" ":""}${o}`
        }(n, Os(l))
    }
    return [r, i, "", n, "", s, o, a, c, h, u].filter((t => null != t)).join("\n")
};

function xs(t) {
    if (!t) throw new Error("No recap provided, value is undefined");
    if (!t.att) throw new Error("No `att` property found");
    const e = Object.keys(t.att);
    if (null == e || !e.length) throw new Error("No resources found in `att` property");
    e.forEach((e => {
        const r = t.att[e];
        if (Array.isArray(r)) throw new Error(`Resource must be an object: ${e}`);
        if ("object" != typeof r) throw new Error(`Resource must be an object: ${e}`);
        if (!Object.keys(r).length) throw new Error(`Resource object is empty: ${e}`);
        Object.keys(r).forEach((t => {
            const e = r[t];
            if (!Array.isArray(e)) throw new Error(`Ability limits ${t} must be an array of objects, found: ${e}`);
            if (!e.length) throw new Error(`Value of ${t} is empty array, must be an array with objects`);
            e.forEach((e => {
                if ("object" != typeof e) throw new Error(`Ability limits (${t}) must be an array of objects, found: ${e}`)
            }))
        }))
    }))
}

function Ns(t, e, r = {}) {
    const i = (e = null == e ? void 0 : e.sort(((t, e) => t.localeCompare(e)))).map((e => ({
        [`${t}/${e}`]: [r]
    })));
    return Object.assign({}, ...i)
}

function Cs(t) {
    return xs(t), `urn:recap:${function(t){return Buffer.from(JSON.stringify(t)).toString("base64")}(t).replace(/=/g,"")}`
}

function Os(t) {
    const e = function(t) {
        return JSON.parse(Buffer.from(t, "base64").toString("utf-8"))
    }(t.replace("urn:recap:", ""));
    return xs(e), e
}

function Rs(t, e, r) {
    const i = function(t, e, r, i = {}) {
        return null == r || r.sort(((t, e) => t.localeCompare(e))), {
            att: {
                [t]: Ns(e, r, i)
            }
        }
    }(t, e, r);
    return Cs(i)
}

function Ts(t, e) {
    const r = function(t, e) {
        xs(t), xs(e);
        const r = Object.keys(t.att).concat(Object.keys(e.att)).sort(((t, e) => t.localeCompare(e))),
            i = {
                att: {}
            };
        return r.forEach((r => {
            var n, s;
            Object.keys((null == (n = t.att) ? void 0 : n[r]) || {}).concat(Object.keys((null == (s = e.att) ? void 0 : s[r]) || {})).sort(((t, e) => t.localeCompare(e))).forEach((n => {
                var s, o;
                i.att[r] = ((t, e) => ms(t, vs(e)))(((t, e) => {
                    for (var r in e || (e = {})) ws.call(e, r) && As(t, r, e[r]);
                    if (ys)
                        for (var r of ys(e)) bs.call(e, r) && As(t, r, e[r]);
                    return t
                })({}, i.att[r]), {
                    [n]: (null == (s = t.att[r]) ? void 0 : s[n]) || (null == (o = e.att[r]) ? void 0 : o[n])
                })
            }))
        })), i
    }(Os(t), Os(e));
    return Cs(r)
}

function qs(t) {
    var e;
    const r = Os(t);
    xs(r);
    const i = null == (e = r.att) ? void 0 : e.eip155;
    return i ? Object.keys(i).map((t => t.split("/")[1])) : []
}

function Ds(t) {
    const e = Os(t);
    xs(e);
    const r = [];
    return Object.values(e.att).forEach((t => {
        Object.values(t).forEach((t => {
            var e;
            null != (e = null == t ? void 0 : t[0]) && e.chains && r.push(t[0].chains)
        }))
    })), [...new Set(r.flat())]
}

function ks(t) {
    if (!t) return;
    const e = null == t ? void 0 : t[t.length - 1];
    return function(t) {
        return t && t.includes("urn:recap:")
    }(e) ? e : void 0
}
const Bs = "base10",
    Us = "base16",
    js = "base64pad",
    zs = "utf8";

function Ls() {
    return yt(l.randomBytes(32), Us)
}

function Fs(t) {
    return yt(h.hash(vt(t, Us)), Us)
}

function Ks(t) {
    return yt(h.hash(vt(t, zs)), Us)
}

function Hs(t) {
    return Number(yt(t, Bs))
}

function $s(t) {
    const e = function(t) {
        return vt(`${t}`, Bs)
    }(typeof t.type < "u" ? t.type : 0);
    if (1 === Hs(e) && typeof t.senderPublicKey > "u") throw new Error("Missing sender public key for type 1 envelope");
    const r = typeof t.senderPublicKey < "u" ? vt(t.senderPublicKey, Us) : void 0,
        i = typeof t.iv < "u" ? vt(t.iv, Us) : l.randomBytes(12);
    return function(t) {
        if (1 === Hs(t.type)) {
            if (typeof t.senderPublicKey > "u") throw new Error("Missing sender public key for type 1 envelope");
            return yt(ft([t.type, t.senderPublicKey, t.iv, t.sealed]), js)
        }
        return yt(ft([t.type, t.iv, t.sealed]), js)
    }({
        type: e,
        sealed: new p.ChaCha20Poly1305(vt(t.symKey, Us)).seal(i, vt(t.message, zs)),
        iv: i,
        senderPublicKey: r
    })
}

function Vs(t) {
    const e = vt(t, js),
        r = e.slice(0, 1);
    if (1 === Hs(r)) {
        const t = 33,
            i = t + 12,
            n = e.slice(1, t),
            s = e.slice(t, i);
        return {
            type: r,
            sealed: e.slice(i),
            iv: s,
            senderPublicKey: n
        }
    }
    const i = e.slice(1, 13);
    return {
        type: r,
        sealed: e.slice(13),
        iv: i
    }
}

function Qs(t) {
    const e = (null == t ? void 0 : t.type) || 0;
    if (1 === e) {
        if (typeof(null == t ? void 0 : t.senderPublicKey) > "u") throw new Error("missing sender public key");
        if (typeof(null == t ? void 0 : t.receiverPublicKey) > "u") throw new Error("missing receiver public key")
    }
    return {
        type: e,
        senderPublicKey: null == t ? void 0 : t.senderPublicKey,
        receiverPublicKey: null == t ? void 0 : t.receiverPublicKey
    }
}

function Ws(t) {
    return 1 === t.type && "string" == typeof t.senderPublicKey && "string" == typeof t.receiverPublicKey
}

function Gs(t) {
    return (null == t ? void 0 : t.relay) || {
        protocol: "irn"
    }
}

function Js(t) {
    const e = d[t];
    if (typeof e > "u") throw new Error(`Relay Protocol not supported: ${t}`);
    return e
}
var Ys = Object.defineProperty,
    Xs = Object.defineProperties,
    Zs = Object.getOwnPropertyDescriptors,
    to = Object.getOwnPropertySymbols,
    eo = Object.prototype.hasOwnProperty,
    ro = Object.prototype.propertyIsEnumerable,
    io = (t, e, r) => e in t ? Ys(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : t[e] = r,
    no = (t, e) => {
        for (var r in e || (e = {})) eo.call(e, r) && io(t, r, e[r]);
        if (to)
            for (var r of to(e)) ro.call(e, r) && io(t, r, e[r]);
        return t
    };

function so(t, e = "-") {
    const r = {},
        i = "relay" + e;
    return Object.keys(t).forEach((e => {
        if (e.startsWith(i)) {
            const n = e.replace(i, ""),
                s = t[e];
            r[n] = s
        }
    })), r
}

function oo(t) {
    const e = (t = (t = t.includes("wc://") ? t.replace("wc://", "") : t).includes("wc:") ? t.replace("wc:", "") : t).indexOf(":"),
        r = -1 !== t.indexOf("?") ? t.indexOf("?") : void 0,
        i = t.substring(0, e),
        n = t.substring(e + 1, r).split("@"),
        s = typeof r < "u" ? t.substring(r) : "",
        o = ct.parse(s),
        a = "string" == typeof o.methods ? o.methods.split(",") : void 0;
    return {
        protocol: i,
        topic: ao(n[0]),
        version: parseInt(n[1], 10),
        symKey: o.symKey,
        relay: so(o),
        methods: a,
        expiryTimestamp: o.expiryTimestamp ? parseInt(o.expiryTimestamp, 10) : void 0
    }
}

function ao(t) {
    return t.startsWith("//") ? t.substring(2) : t
}

function co(t) {
    return `${t.protocol}:${t.topic}@${t.version}?` + ct.stringify(no(((t, e) => Xs(t, Zs(e)))(no({
        symKey: t.symKey
    }, function(t, e = "-") {
        const r = {};
        return Object.keys(t).forEach((i => {
            const n = "relay" + e + i;
            t[i] && (r[n] = t[i])
        })), r
    }(t.relay)), {
        expiryTimestamp: t.expiryTimestamp
    }), t.methods ? {
        methods: t.methods.join(",")
    } : {}))
}

function ho(t) {
    const e = [];
    return t.forEach((t => {
        const [r, i] = t.split(":");
        e.push(`${r}:${i}`)
    })), e
}

function uo(t) {
    return t.includes(":")
}

function lo(t) {
    return uo(t) ? t.split(":")[0] : t
}

function fo(t, e) {
    const r = function(t) {
        const e = {};
        return null == t || t.forEach((t => {
            const [r, i] = t.split(":");
            e[r] || (e[r] = {
                accounts: [],
                chains: [],
                events: []
            }), e[r].accounts.push(t), e[r].chains.push(`${r}:${i}`)
        })), e
    }(e = e.map((t => t.replace("did:pkh:", ""))));
    for (const [i, n] of Object.entries(r)) n.methods ? n.methods = Gt(n.methods, t) : n.methods = t, n.events = ["chainChanged", "accountsChanged"];
    return r
}
const po = {
        INVALID_METHOD: {
            message: "Invalid method.",
            code: 1001
        },
        INVALID_EVENT: {
            message: "Invalid event.",
            code: 1002
        },
        INVALID_UPDATE_REQUEST: {
            message: "Invalid update request.",
            code: 1003
        },
        INVALID_EXTEND_REQUEST: {
            message: "Invalid extend request.",
            code: 1004
        },
        INVALID_SESSION_SETTLE_REQUEST: {
            message: "Invalid session settle request.",
            code: 1005
        },
        UNAUTHORIZED_METHOD: {
            message: "Unauthorized method.",
            code: 3001
        },
        UNAUTHORIZED_EVENT: {
            message: "Unauthorized event.",
            code: 3002
        },
        UNAUTHORIZED_UPDATE_REQUEST: {
            message: "Unauthorized update request.",
            code: 3003
        },
        UNAUTHORIZED_EXTEND_REQUEST: {
            message: "Unauthorized extend request.",
            code: 3004
        },
        USER_REJECTED: {
            message: "User rejected.",
            code: 5e3
        },
        USER_REJECTED_CHAINS: {
            message: "User rejected chains.",
            code: 5001
        },
        USER_REJECTED_METHODS: {
            message: "User rejected methods.",
            code: 5002
        },
        USER_REJECTED_EVENTS: {
            message: "User rejected events.",
            code: 5003
        },
        UNSUPPORTED_CHAINS: {
            message: "Unsupported chains.",
            code: 5100
        },
        UNSUPPORTED_METHODS: {
            message: "Unsupported methods.",
            code: 5101
        },
        UNSUPPORTED_EVENTS: {
            message: "Unsupported events.",
            code: 5102
        },
        UNSUPPORTED_ACCOUNTS: {
            message: "Unsupported accounts.",
            code: 5103
        },
        UNSUPPORTED_NAMESPACE_KEY: {
            message: "Unsupported namespace key.",
            code: 5104
        },
        USER_DISCONNECTED: {
            message: "User disconnected.",
            code: 6e3
        },
        SESSION_SETTLEMENT_FAILED: {
            message: "Session settlement failed.",
            code: 7e3
        },
        WC_METHOD_UNSUPPORTED: {
            message: "Unsupported wc_ method.",
            code: 10001
        }
    },
    go = {
        NOT_INITIALIZED: {
            message: "Not initialized.",
            code: 1
        },
        NO_MATCHING_KEY: {
            message: "No matching key.",
            code: 2
        },
        RESTORE_WILL_OVERRIDE: {
            message: "Restore will override.",
            code: 3
        },
        RESUBSCRIBED: {
            message: "Resubscribed.",
            code: 4
        },
        MISSING_OR_INVALID: {
            message: "Missing or invalid.",
            code: 5
        },
        EXPIRED: {
            message: "Expired.",
            code: 6
        },
        UNKNOWN_TYPE: {
            message: "Unknown type.",
            code: 7
        },
        MISMATCHED_TOPIC: {
            message: "Mismatched topic.",
            code: 8
        },
        NON_CONFORMING_NAMESPACES: {
            message: "Non conforming namespaces.",
            code: 9
        }
    };

function mo(t, e) {
    const {
        message: r,
        code: i
    } = go[t];
    return {
        message: e ? `${r} ${e}` : r,
        code: i
    }
}

function vo(t, e) {
    const {
        message: r,
        code: i
    } = po[t];
    return {
        message: e ? `${r} ${e}` : r,
        code: i
    }
}

function yo(t, e) {
    return !!Array.isArray(t)
}

function wo(t) {
    return Object.getPrototypeOf(t) === Object.prototype && Object.keys(t).length
}

function bo(t) {
    return typeof t > "u"
}

function Ao(t, e) {
    return !(!e || !bo(t)) || "string" == typeof t && !!t.trim().length
}

function _o(t, e) {
    return "number" == typeof t && !isNaN(t)
}

function Eo(t) {
    return !(!Ao(t, !1) || !t.includes(":")) && 2 === t.split(":").length
}

function Io(t) {
    let e = !0;
    return yo(t) ? t.length && (e = t.every((t => Ao(t, !1)))) : e = !1, e
}

function So(t, e, r) {
    let i = null;
    return Object.entries(t).forEach((([t, n]) => {
        if (i) return;
        const s = function(t, e, r) {
            let i = null;
            return yo(e) && e.length ? e.forEach((t => {
                i || Eo(t) || (i = vo("UNSUPPORTED_CHAINS", `${r}, chain ${t} should be a string and conform to "namespace:chainId" format`))
            })) : Eo(t) || (i = vo("UNSUPPORTED_CHAINS", `${r}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)), i
        }(t, At(t, n), `${e} ${r}`);
        s && (i = s)
    })), i
}

function Mo(t, e) {
    let r = null;
    return yo(t) ? t.forEach((t => {
        r || function(t) {
            if (Ao(t, !1) && t.includes(":")) {
                const e = t.split(":");
                if (3 === e.length) {
                    const t = e[0] + ":" + e[1];
                    return !!e[2] && Eo(t)
                }
            }
            return !1
        }(t) || (r = vo("UNSUPPORTED_ACCOUNTS", `${e}, account ${t} should be a string and conform to "namespace:chainId:address" format`))
    })) : r = vo("UNSUPPORTED_ACCOUNTS", `${e}, accounts should be an array of strings conforming to "namespace:chainId:address" format`), r
}

function Po(t, e) {
    let r = null;
    return Object.values(t).forEach((t => {
        if (r) return;
        const i = function(t, e) {
            let r = null;
            return Io(null == t ? void 0 : t.methods) ? Io(null == t ? void 0 : t.events) || (r = vo("UNSUPPORTED_EVENTS", `${e}, events should be an array of strings or empty array for no events`)) : r = vo("UNSUPPORTED_METHODS", `${e}, methods should be an array of strings or empty array for no methods`), r
        }(t, `${e}, namespace`);
        i && (r = i)
    })), r
}

function xo(t, e) {
    let r = null;
    if (t && wo(t)) {
        const i = Po(t, e);
        i && (r = i);
        const n = function(t, e) {
            let r = null;
            return Object.values(t).forEach((t => {
                if (r) return;
                const i = Mo(null == t ? void 0 : t.accounts, `${e} namespace`);
                i && (r = i)
            })), r
        }(t, e);
        n && (r = n)
    } else r = mo("MISSING_OR_INVALID", `${e}, namespaces should be an object with data`);
    return r
}

function No(t) {
    return Ao(t.protocol, !0)
}

function Co(t) {
    return typeof t < "u" && null !== typeof t
}

function Oo(t, e) {
    return !(!Eo(e) || ! function(t) {
        const e = [];
        return Object.values(t).forEach((t => {
            e.push(...ho(t.accounts))
        })), e
    }(t).includes(e))
}

function Ro(t, e, r) {
    return !!Ao(r, !1) && function(t, e) {
        const r = [];
        return Object.values(t).forEach((t => {
            ho(t.accounts).includes(e) && r.push(...t.methods)
        })), r
    }(t, e).includes(r)
}

function To(t, e, r) {
    return !!Ao(r, !1) && function(t, e) {
        const r = [];
        return Object.values(t).forEach((t => {
            ho(t.accounts).includes(e) && r.push(...t.events)
        })), r
    }(t, e).includes(r)
}

function qo(t, e, r) {
    let i = null;
    const n = function(t) {
            const e = {};
            return Object.keys(t).forEach((r => {
                var i;
                r.includes(":") ? e[r] = t[r] : null == (i = t[r].chains) || i.forEach((i => {
                    e[i] = {
                        methods: t[r].methods,
                        events: t[r].events
                    }
                }))
            })), e
        }(t),
        s = function(t) {
            const e = {};
            return Object.keys(t).forEach((r => {
                if (r.includes(":")) e[r] = t[r];
                else {
                    const i = ho(t[r].accounts);
                    null == i || i.forEach((i => {
                        e[i] = {
                            accounts: t[r].accounts.filter((t => t.includes(`${i}:`))),
                            methods: t[r].methods,
                            events: t[r].events
                        }
                    }))
                }
            })), e
        }(e),
        o = Object.keys(n),
        a = Object.keys(s),
        c = Do(Object.keys(t)),
        h = Do(Object.keys(e)),
        u = c.filter((t => !h.includes(t)));
    return u.length && (i = mo("NON_CONFORMING_NAMESPACES", `${r} namespaces keys don't satisfy requiredNamespaces.\n      Required: ${u.toString()}\n      Received: ${Object.keys(e).toString()}`)), jt(o, a) || (i = mo("NON_CONFORMING_NAMESPACES", `${r} namespaces chains don't satisfy required namespaces.\n      Required: ${o.toString()}\n      Approved: ${a.toString()}`)), Object.keys(e).forEach((t => {
        if (!t.includes(":") || i) return;
        const n = ho(e[t].accounts);
        n.includes(t) || (i = mo("NON_CONFORMING_NAMESPACES", `${r} namespaces accounts don't satisfy namespace accounts for ${t}\n        Required: ${t}\n        Approved: ${n.toString()}`))
    })), o.forEach((t => {
        i || (jt(n[t].methods, s[t].methods) ? jt(n[t].events, s[t].events) || (i = mo("NON_CONFORMING_NAMESPACES", `${r} namespaces events don't satisfy namespace events for ${t}`)) : i = mo("NON_CONFORMING_NAMESPACES", `${r} namespaces methods don't satisfy namespace methods for ${t}`))
    })), i
}

function Do(t) {
    return [...new Set(t.map((t => t.includes(":") ? t.split(":")[0] : t)))]
}

function ko() {
    const t = kt();
    return new Promise((e => {
        switch (t) {
            case Ct:
                e(Dt() && (null == navigator ? void 0 : navigator.onLine));
                break;
            case xt:
                e(async function() {
                    if (qt() && typeof global < "u" && null != global && global.NetInfo) {
                        const t = await (null == global ? void 0 : global.NetInfo.fetch());
                        return null == t ? void 0 : t.isConnected
                    }
                    return !0
                }());
                break;
            default:
                e(!0)
        }
    }))
}

function Bo(t) {
    switch (kt()) {
        case Ct:
            ! function(t) {
                !qt() && Dt() && (window.addEventListener("online", (() => t(!0))), window.addEventListener("offline", (() => t(!1))))
            }(t);
            break;
        case xt:
            ! function(t) {
                qt() && typeof global < "u" && null != global && global.NetInfo && (null == global || global.NetInfo.addEventListener((e => t(null == e ? void 0 : e.isConnected))))
            }(t)
    }
}
const Uo = {};
class jo {
    static get(t) {
        return Uo[t]
    }
    static set(t, e) {
        Uo[t] = e
    }
    static delete(t) {
        delete Uo[t]
    }
}
let zo = class extends g {
    constructor(t) {
        super()
    }
};
const Lo = c.FIVE_SECONDS,
    Fo = "heartbeat_pulse";
class Ko extends zo {
    constructor(t) {
        super(t), this.events = new i.EventEmitter, this.interval = Lo, this.interval = (null == t ? void 0 : t.interval) || Lo
    }
    static async init(t) {
        const e = new Ko(t);
        return await e.init(), e
    }
    async init() {
        await this.initialize()
    }
    stop() {
        clearInterval(this.intervalRef)
    }
    on(t, e) {
        this.events.on(t, e)
    }
    once(t, e) {
        this.events.once(t, e)
    }
    off(t, e) {
        this.events.off(t, e)
    }
    removeListener(t, e) {
        this.events.removeListener(t, e)
    }
    async initialize() {
        this.intervalRef = setInterval((() => this.pulse()), c.toMiliseconds(this.interval))
    }
    pulse() {
        this.events.emit(Fo)
    }
}
class Ho extends g {
    constructor(t) {
        super(), this.opts = t, this.protocol = "wc", this.version = 2
    }
}
let $o = class extends g {
        constructor(t, e) {
            super(), this.core = t, this.logger = e, this.records = new Map
        }
    },
    Vo = class {
        constructor(t, e) {
            this.logger = t, this.core = e
        }
    },
    Qo = class extends g {
        constructor(t, e) {
            super(), this.relayer = t, this.logger = e
        }
    },
    Wo = class extends g {
        constructor(t) {
            super()
        }
    },
    Go = class {
        constructor(t, e, r, i) {
            this.core = t, this.logger = e, this.name = r
        }
    };
class Jo extends g {
    constructor(t, e) {
        super(), this.relayer = t, this.logger = e
    }
}
let Yo = class extends g {
        constructor(t, e) {
            super(), this.core = t, this.logger = e
        }
    },
    Xo = class {
        constructor(t, e) {
            this.projectId = t, this.logger = e
        }
    },
    Zo = class {
        constructor(t, e) {
            this.projectId = t, this.logger = e
        }
    },
    ta = class {
        constructor(t) {
            this.opts = t, this.protocol = "wc", this.version = 2
        }
    },
    ea = class {
        constructor(t) {
            this.client = t
        }
    };
class ra extends m {
    constructor(t) {
        super(t), this.events = new i.EventEmitter, this.hasRegisteredEventListeners = !1, this.connection = this.setConnection(t), this.connection.connected && this.registerEventListeners()
    }
    async connect(t = this.connection) {
        await this.open(t)
    }
    async disconnect() {
        await this.close()
    }
    on(t, e) {
        this.events.on(t, e)
    }
    once(t, e) {
        this.events.once(t, e)
    }
    off(t, e) {
        this.events.off(t, e)
    }
    removeListener(t, e) {
        this.events.removeListener(t, e)
    }
    async request(t, e) {
        return this.requestStrict(v(t.method, t.params || [], t.id || y().toString()), e)
    }
    async requestStrict(t, e) {
        return new Promise((async (r, i) => {
            if (!this.connection.connected) try {
                await this.open()
            } catch (n) {
                i(n)
            }
            this.events.on(`${t.id}`, (t => {
                w(t) ? i(t.error) : r(t.result)
            }));
            try {
                await this.connection.send(t, e)
            } catch (n) {
                i(n)
            }
        }))
    }
    setConnection(t = this.connection) {
        return t
    }
    onPayload(t) {
        this.events.emit("payload", t), b(t) ? this.events.emit(`${t.id}`, t) : this.events.emit("message", {
            type: t.method,
            data: t.params
        })
    }
    onClose(t) {
        t && 3e3 === t.code && this.events.emit("error", new Error(`WebSocket connection closed abnormally with code: ${t.code} ${t.reason?`(${t.reason})`:""}`)), this.events.emit("disconnect")
    }
    async open(t = this.connection) {
        this.connection === t && this.connection.connected || (this.connection.connected && this.close(), "string" == typeof t && (await this.connection.open(t), t = this.connection), this.connection = this.setConnection(t), await this.connection.open(), this.registerEventListeners(), this.events.emit("connect"))
    }
    async close() {
        await this.connection.close()
    }
    registerEventListeners() {
        this.hasRegisteredEventListeners || (this.connection.on("payload", (t => this.onPayload(t))), this.connection.on("close", (t => this.onClose(t))), this.connection.on("error", (t => this.events.emit("error", t))), this.connection.on("register_error", (t => this.onClose())), this.hasRegisteredEventListeners = !0)
    }
}
const ia = t => t.split("?")[0],
    na = typeof WebSocket < "u" ? WebSocket : typeof global < "u" && typeof global.WebSocket < "u" ? global.WebSocket : typeof window < "u" && typeof window.WebSocket < "u" ? window.WebSocket : typeof self < "u" && typeof self.WebSocket < "u" ? self.WebSocket : require("ws");
let sa = class {
    constructor(t) {
        if (this.url = t, this.events = new i.EventEmitter, this.registering = !1, !A(t)) throw new Error(`Provided URL is not compatible with WebSocket connection: ${t}`);
        this.url = t
    }
    get connected() {
        return typeof this.socket < "u"
    }
    get connecting() {
        return this.registering
    }
    on(t, e) {
        this.events.on(t, e)
    }
    once(t, e) {
        this.events.once(t, e)
    }
    off(t, e) {
        this.events.off(t, e)
    }
    removeListener(t, e) {
        this.events.removeListener(t, e)
    }
    async open(t = this.url) {
        await this.register(t)
    }
    async close() {
        return new Promise(((t, e) => {
            typeof this.socket > "u" ? e(new Error("Connection already closed")) : (this.socket.onclose = e => {
                this.onClose(e), t()
            }, this.socket.close())
        }))
    }
    async send(t) {
        typeof this.socket > "u" && (this.socket = await this.register());
        try {
            this.socket.send(_(t))
        } catch (bn) {
            this.onError(t.id, bn)
        }
    }
    register(t = this.url) {
        if (!A(t)) throw new Error(`Provided URL is not compatible with WebSocket connection: ${t}`);
        if (this.registering) {
            const t = this.events.getMaxListeners();
            return (this.events.listenerCount("register_error") >= t || this.events.listenerCount("open") >= t) && this.events.setMaxListeners(t + 1), new Promise(((t, e) => {
                this.events.once("register_error", (t => {
                    this.resetMaxListeners(), e(t)
                })), this.events.once("open", (() => {
                    if (this.resetMaxListeners(), typeof this.socket > "u") return e(new Error("WebSocket connection is missing or invalid"));
                    t(this.socket)
                }))
            }))
        }
        return this.url = t, this.registering = !0, new Promise(((e, r) => {
            const i = new URLSearchParams(t).get("origin"),
                n = E.isReactNative() ? {
                    headers: {
                        origin: i
                    }
                } : {
                    rejectUnauthorized: !I(t)
                },
                s = new na(t, [], n);
            typeof WebSocket < "u" || typeof global < "u" && typeof global.WebSocket < "u" || typeof window < "u" && typeof window.WebSocket < "u" || typeof self < "u" && typeof self.WebSocket < "u" ? s.onerror = t => {
                const e = t;
                r(this.emitError(e.error))
            } : s.on("error", (t => {
                r(this.emitError(t))
            })), s.onopen = () => {
                this.onOpen(s), e(s)
            }
        }))
    }
    onOpen(t) {
        t.onmessage = t => this.onPayload(t), t.onclose = t => this.onClose(t), this.socket = t, this.registering = !1, this.events.emit("open")
    }
    onClose(t) {
        this.socket = void 0, this.registering = !1, this.events.emit("close", t)
    }
    onPayload(t) {
        if (typeof t.data > "u") return;
        const e = "string" == typeof t.data ? S(t.data) : t.data;
        this.events.emit("payload", e)
    }
    onError(t, e) {
        const r = this.parseError(e),
            i = r.message || r.toString(),
            n = M(t, i);
        this.events.emit("payload", n)
    }
    parseError(t, e = this.url) {
        return P(t, ia(e), "WS")
    }
    resetMaxListeners() {
        this.events.getMaxListeners() > 10 && this.events.setMaxListeners(10)
    }
    emitError(t) {
        const e = this.parseError(new Error((null == t ? void 0 : t.message) || `WebSocket connection failed for host: ${ia(this.url)}`));
        return this.events.emit("register_error", e), e
    }
};
const oa = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: function(t, e) {
            return e = e || {}, new Promise((function(r, i) {
                var n = new XMLHttpRequest,
                    s = [],
                    o = [],
                    a = {},
                    c = function() {
                        return {
                            ok: 2 == (n.status / 100 | 0),
                            statusText: n.statusText,
                            status: n.status,
                            url: n.responseURL,
                            text: function() {
                                return Promise.resolve(n.responseText)
                            },
                            json: function() {
                                return Promise.resolve(n.responseText).then(JSON.parse)
                            },
                            blob: function() {
                                return Promise.resolve(new Blob([n.response]))
                            },
                            clone: c,
                            headers: {
                                keys: function() {
                                    return s
                                },
                                entries: function() {
                                    return o
                                },
                                get: function(t) {
                                    return a[t.toLowerCase()]
                                },
                                has: function(t) {
                                    return t.toLowerCase() in a
                                }
                            }
                        }
                    };
                for (var h in n.open(e.method || "get", t, !0), n.onload = function() {
                        n.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, (function(t, e, r) {
                            s.push(e = e.toLowerCase()), o.push([e, r]), a[e] = a[e] ? a[e] + "," + r : r
                        })), r(c())
                    }, n.onerror = i, n.withCredentials = "include" == e.credentials, e.headers) n.setRequestHeader(h, e.headers[h]);
                n.send(e.body || null)
            }))
        }
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    aa = t(oa);
const ca = e(self.fetch || (self.fetch = aa.default || aa));
var ha = {};
var ua = function(t, e) {
        if (t.length >= 255) throw new TypeError("Alphabet too long");
        for (var r = new Uint8Array(256), i = 0; i < r.length; i++) r[i] = 255;
        for (var n = 0; n < t.length; n++) {
            var s = t.charAt(n),
                o = s.charCodeAt(0);
            if (255 !== r[o]) throw new TypeError(s + " is ambiguous");
            r[o] = n
        }
        var a = t.length,
            c = t.charAt(0),
            h = Math.log(a) / Math.log(256),
            u = Math.log(256) / Math.log(a);

        function l(t) {
            if ("string" != typeof t) throw new TypeError("Expected String");
            if (0 === t.length) return new Uint8Array;
            var e = 0;
            if (" " !== t[e]) {
                for (var i = 0, n = 0; t[e] === c;) i++, e++;
                for (var s = (t.length - e) * h + 1 >>> 0, o = new Uint8Array(s); t[e];) {
                    var u = r[t.charCodeAt(e)];
                    if (255 === u) return;
                    for (var l = 0, f = s - 1;
                        (0 !== u || l < n) && -1 !== f; f--, l++) u += a * o[f] >>> 0, o[f] = u % 256 >>> 0, u = u / 256 >>> 0;
                    if (0 !== u) throw new Error("Non-zero carry");
                    n = l, e++
                }
                if (" " !== t[e]) {
                    for (var p = s - n; p !== s && 0 === o[p];) p++;
                    for (var d = new Uint8Array(i + (s - p)), g = i; p !== s;) d[g++] = o[p++];
                    return d
                }
            }
        }
        return {
            encode: function(e) {
                if (e instanceof Uint8Array || (ArrayBuffer.isView(e) ? e = new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : Array.isArray(e) && (e = Uint8Array.from(e))), !(e instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
                if (0 === e.length) return "";
                for (var r = 0, i = 0, n = 0, s = e.length; n !== s && 0 === e[n];) n++, r++;
                for (var o = (s - n) * u + 1 >>> 0, h = new Uint8Array(o); n !== s;) {
                    for (var l = e[n], f = 0, p = o - 1;
                        (0 !== l || f < i) && -1 !== p; p--, f++) l += 256 * h[p] >>> 0, h[p] = l % a >>> 0, l = l / a >>> 0;
                    if (0 !== l) throw new Error("Non-zero carry");
                    i = f, n++
                }
                for (var d = o - i; d !== o && 0 === h[d];) d++;
                for (var g = c.repeat(r); d < o; ++d) g += t.charAt(h[d]);
                return g
            },
            decodeUnsafe: l,
            decode: function(t) {
                var r = l(t);
                if (r) return r;
                throw new Error(`Non-${e} character`)
            }
        }
    },
    la = ua;
const fa = t => {
    if (t instanceof Uint8Array && "Uint8Array" === t.constructor.name) return t;
    if (t instanceof ArrayBuffer) return new Uint8Array(t);
    if (ArrayBuffer.isView(t)) return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
    throw new Error("Unknown type, must be binary type")
};
class pa {
    constructor(t, e, r) {
        this.name = t, this.prefix = e, this.baseEncode = r
    }
    encode(t) {
        if (t instanceof Uint8Array) return `${this.prefix}${this.baseEncode(t)}`;
        throw Error("Unknown type, must be binary type")
    }
}
let da = class {
        constructor(t, e, r) {
            if (this.name = t, this.prefix = e, void 0 === e.codePointAt(0)) throw new Error("Invalid prefix character");
            this.prefixCodePoint = e.codePointAt(0), this.baseDecode = r
        }
        decode(t) {
            if ("string" == typeof t) {
                if (t.codePointAt(0) !== this.prefixCodePoint) throw Error(`Unable to decode multibase string ${JSON.stringify(t)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
                return this.baseDecode(t.slice(this.prefix.length))
            }
            throw Error("Can only multibase decode strings")
        }
        or(t) {
            return ma(this, t)
        }
    },
    ga = class {
        constructor(t) {
            this.decoders = t
        }
        or(t) {
            return ma(this, t)
        }
        decode(t) {
            const e = t[0],
                r = this.decoders[e];
            if (r) return r.decode(t);
            throw RangeError(`Unable to decode multibase string ${JSON.stringify(t)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)
        }
    };
const ma = (t, e) => new ga({ ...t.decoders || {
        [t.prefix]: t
    },
    ...e.decoders || {
        [e.prefix]: e
    }
});
let va = class {
    constructor(t, e, r, i) {
        this.name = t, this.prefix = e, this.baseEncode = r, this.baseDecode = i, this.encoder = new pa(t, e, r), this.decoder = new da(t, e, i)
    }
    encode(t) {
        return this.encoder.encode(t)
    }
    decode(t) {
        return this.decoder.decode(t)
    }
};
const ya = ({
        name: t,
        prefix: e,
        encode: r,
        decode: i
    }) => new va(t, e, r, i),
    wa = ({
        prefix: t,
        name: e,
        alphabet: r
    }) => {
        const {
            encode: i,
            decode: n
        } = la(r, e);
        return ya({
            prefix: t,
            name: e,
            encode: i,
            decode: t => fa(n(t))
        })
    },
    ba = ({
        name: t,
        prefix: e,
        bitsPerChar: r,
        alphabet: i
    }) => ya({
        prefix: e,
        name: t,
        encode: t => ((t, e, r) => {
            const i = "=" === e[e.length - 1],
                n = (1 << r) - 1;
            let s = "",
                o = 0,
                a = 0;
            for (let c = 0; c < t.length; ++c)
                for (a = a << 8 | t[c], o += 8; o > r;) o -= r, s += e[n & a >> o];
            if (o && (s += e[n & a << r - o]), i)
                for (; s.length * r & 7;) s += "=";
            return s
        })(t, i, r),
        decode: e => ((t, e, r, i) => {
            const n = {};
            for (let u = 0; u < e.length; ++u) n[e[u]] = u;
            let s = t.length;
            for (;
                "=" === t[s - 1];) --s;
            const o = new Uint8Array(s * r / 8 | 0);
            let a = 0,
                c = 0,
                h = 0;
            for (let u = 0; u < s; ++u) {
                const e = n[t[u]];
                if (void 0 === e) throw new SyntaxError(`Non-${i} character`);
                c = c << r | e, a += r, a >= 8 && (a -= 8, o[h++] = 255 & c >> a)
            }
            if (a >= r || 255 & c << 8 - a) throw new SyntaxError("Unexpected end of data");
            return o
        })(e, i, r, t)
    }),
    Aa = ya({
        prefix: "\0",
        name: "identity",
        encode: t => (t => (new TextDecoder).decode(t))(t),
        decode: t => (t => (new TextEncoder).encode(t))(t)
    });
var _a = Object.freeze({
    __proto__: null,
    identity: Aa
});
const Ea = ba({
    prefix: "0",
    name: "base2",
    alphabet: "01",
    bitsPerChar: 1
});
var Ia = Object.freeze({
    __proto__: null,
    base2: Ea
});
const Sa = ba({
    prefix: "7",
    name: "base8",
    alphabet: "01234567",
    bitsPerChar: 3
});
var Ma = Object.freeze({
    __proto__: null,
    base8: Sa
});
const Pa = wa({
    prefix: "9",
    name: "base10",
    alphabet: "0123456789"
});
var xa = Object.freeze({
    __proto__: null,
    base10: Pa
});
const Na = ba({
        prefix: "f",
        name: "base16",
        alphabet: "0123456789abcdef",
        bitsPerChar: 4
    }),
    Ca = ba({
        prefix: "F",
        name: "base16upper",
        alphabet: "0123456789ABCDEF",
        bitsPerChar: 4
    });
var Oa = Object.freeze({
    __proto__: null,
    base16: Na,
    base16upper: Ca
});
const Ra = ba({
        prefix: "b",
        name: "base32",
        alphabet: "abcdefghijklmnopqrstuvwxyz234567",
        bitsPerChar: 5
    }),
    Ta = ba({
        prefix: "B",
        name: "base32upper",
        alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
        bitsPerChar: 5
    }),
    qa = ba({
        prefix: "c",
        name: "base32pad",
        alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
        bitsPerChar: 5
    }),
    Da = ba({
        prefix: "C",
        name: "base32padupper",
        alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
        bitsPerChar: 5
    }),
    ka = ba({
        prefix: "v",
        name: "base32hex",
        alphabet: "0123456789abcdefghijklmnopqrstuv",
        bitsPerChar: 5
    }),
    Ba = ba({
        prefix: "V",
        name: "base32hexupper",
        alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
        bitsPerChar: 5
    }),
    Ua = ba({
        prefix: "t",
        name: "base32hexpad",
        alphabet: "0123456789abcdefghijklmnopqrstuv=",
        bitsPerChar: 5
    }),
    ja = ba({
        prefix: "T",
        name: "base32hexpadupper",
        alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
        bitsPerChar: 5
    }),
    za = ba({
        prefix: "h",
        name: "base32z",
        alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
        bitsPerChar: 5
    });
var La = Object.freeze({
    __proto__: null,
    base32: Ra,
    base32upper: Ta,
    base32pad: qa,
    base32padupper: Da,
    base32hex: ka,
    base32hexupper: Ba,
    base32hexpad: Ua,
    base32hexpadupper: ja,
    base32z: za
});
const Fa = wa({
        prefix: "k",
        name: "base36",
        alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
    }),
    Ka = wa({
        prefix: "K",
        name: "base36upper",
        alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    });
var Ha = Object.freeze({
    __proto__: null,
    base36: Fa,
    base36upper: Ka
});
const $a = wa({
        name: "base58btc",
        prefix: "z",
        alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
    }),
    Va = wa({
        name: "base58flickr",
        prefix: "Z",
        alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
    });
var Qa = Object.freeze({
    __proto__: null,
    base58btc: $a,
    base58flickr: Va
});
const Wa = ba({
        prefix: "m",
        name: "base64",
        alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        bitsPerChar: 6
    }),
    Ga = ba({
        prefix: "M",
        name: "base64pad",
        alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        bitsPerChar: 6
    }),
    Ja = ba({
        prefix: "u",
        name: "base64url",
        alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
        bitsPerChar: 6
    }),
    Ya = ba({
        prefix: "U",
        name: "base64urlpad",
        alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
        bitsPerChar: 6
    });
var Xa = Object.freeze({
    __proto__: null,
    base64: Wa,
    base64pad: Ga,
    base64url: Ja,
    base64urlpad: Ya
});
const Za = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"),
    tc = Za.reduce(((t, e, r) => (t[r] = e, t)), []),
    ec = Za.reduce(((t, e, r) => (t[e.codePointAt(0)] = r, t)), []);
const rc = ya({
    prefix: "🚀",
    name: "base256emoji",
    encode: function(t) {
        return t.reduce(((t, e) => t += tc[e]), "")
    },
    decode: function(t) {
        const e = [];
        for (const r of t) {
            const t = ec[r.codePointAt(0)];
            if (void 0 === t) throw new Error(`Non-base256emoji character: ${r}`);
            e.push(t)
        }
        return new Uint8Array(e)
    }
});
var ic = Object.freeze({
        __proto__: null,
        base256emoji: rc
    }),
    nc = function t(e, r, i) {
        r = r || [];
        for (var n = i = i || 0; e >= ac;) r[i++] = 255 & e | sc, e /= 128;
        for (; e & oc;) r[i++] = 255 & e | sc, e >>>= 7;
        return r[i] = 0 | e, t.bytes = i - n + 1, r
    },
    sc = 128,
    oc = -128,
    ac = Math.pow(2, 31);
var cc = function t(e, r) {
        var i, n = 0,
            s = 0,
            o = r = r || 0,
            a = e.length;
        do {
            if (o >= a) throw t.bytes = 0, new RangeError("Could not decode varint");
            i = e[o++], n += s < 28 ? (i & uc) << s : (i & uc) * Math.pow(2, s), s += 7
        } while (i >= hc);
        return t.bytes = o - r, n
    },
    hc = 128,
    uc = 127;
var lc = Math.pow(2, 7),
    fc = Math.pow(2, 14),
    pc = Math.pow(2, 21),
    dc = Math.pow(2, 28),
    gc = Math.pow(2, 35),
    mc = Math.pow(2, 42),
    vc = Math.pow(2, 49),
    yc = Math.pow(2, 56),
    wc = Math.pow(2, 63),
    bc = {
        encode: nc,
        decode: cc,
        encodingLength: function(t) {
            return t < lc ? 1 : t < fc ? 2 : t < pc ? 3 : t < dc ? 4 : t < gc ? 5 : t < mc ? 6 : t < vc ? 7 : t < yc ? 8 : t < wc ? 9 : 10
        }
    };
const Ac = (t, e, r = 0) => (bc.encode(t, e, r), e),
    _c = t => bc.encodingLength(t),
    Ec = (t, e) => {
        const r = e.byteLength,
            i = _c(t),
            n = i + _c(r),
            s = new Uint8Array(n + r);
        return Ac(t, s, 0), Ac(r, s, i), s.set(e, n), new Ic(t, r, e, s)
    };
class Ic {
    constructor(t, e, r, i) {
        this.code = t, this.size = e, this.digest = r, this.bytes = i
    }
}
const Sc = ({
    name: t,
    code: e,
    encode: r
}) => new Mc(t, e, r);
class Mc {
    constructor(t, e, r) {
        this.name = t, this.code = e, this.encode = r
    }
    digest(t) {
        if (t instanceof Uint8Array) {
            const e = this.encode(t);
            return e instanceof Uint8Array ? Ec(this.code, e) : e.then((t => Ec(this.code, t)))
        }
        throw Error("Unknown type, must be binary type")
    }
}
const Pc = t => async e => new Uint8Array(await crypto.subtle.digest(t, e)),
    xc = Sc({
        name: "sha2-256",
        code: 18,
        encode: Pc("SHA-256")
    }),
    Nc = Sc({
        name: "sha2-512",
        code: 19,
        encode: Pc("SHA-512")
    });
Object.freeze({
    __proto__: null,
    sha256: xc,
    sha512: Nc
});
const Cc = fa,
    Oc = {
        code: 0,
        name: "identity",
        encode: Cc,
        digest: t => Ec(0, Cc(t))
    };
Object.freeze({
    __proto__: null,
    identity: Oc
});
new TextEncoder, new TextDecoder;
const Rc = { ..._a,
    ...Ia,
    ...Ma,
    ...xa,
    ...Oa,
    ...La,
    ...Ha,
    ...Qa,
    ...Xa,
    ...ic
};

function Tc(t, e, r, i) {
    return {
        name: t,
        prefix: e,
        encoder: {
            name: t,
            prefix: e,
            encode: r
        },
        decoder: {
            decode: i
        }
    }
}
const qc = Tc("utf8", "u", (t => "u" + new TextDecoder("utf8").decode(t)), (t => (new TextEncoder).encode(t.substring(1)))),
    Dc = Tc("ascii", "a", (t => {
        let e = "a";
        for (let r = 0; r < t.length; r++) e += String.fromCharCode(t[r]);
        return e
    }), (t => {
        const e = function(t = 0) {
            return null != globalThis.Buffer && null != globalThis.Buffer.allocUnsafe ? globalThis.Buffer.allocUnsafe(t) : new Uint8Array(t)
        }((t = t.substring(1)).length);
        for (let r = 0; r < t.length; r++) e[r] = t.charCodeAt(r);
        return e
    })),
    kc = {
        utf8: qc,
        "utf-8": qc,
        hex: Rc.base16,
        latin1: Dc,
        ascii: Dc,
        binary: Dc,
        ...Rc
    };
const Bc = "core",
    Uc = `wc@2:${Bc}:`,
    jc = "error",
    zc = {
        database: ":memory:"
    },
    Lc = "client_ed25519_seed",
    Fc = c.ONE_DAY,
    Kc = c.SIX_HOURS,
    Hc = "wss://relay.walletconnect.com",
    $c = "wss://relay.walletconnect.org",
    Vc = "relayer_message",
    Qc = "relayer_message_ack",
    Wc = "relayer_connect",
    Gc = "relayer_disconnect",
    Jc = "relayer_error",
    Yc = "relayer_connection_stalled",
    Xc = "relayer_publish",
    Zc = "payload",
    th = "connect",
    eh = "disconnect",
    rh = "error",
    ih = c.ONE_SECOND,
    nh = "subscription_created",
    sh = "subscription_deleted",
    oh = "subscription_sync",
    ah = "subscription_resubscribed",
    ch = 1e3 * c.FIVE_SECONDS,
    hh = {
        wc_pairingDelete: {
            req: {
                ttl: c.ONE_DAY,
                prompt: !1,
                tag: 1e3
            },
            res: {
                ttl: c.ONE_DAY,
                prompt: !1,
                tag: 1001
            }
        },
        wc_pairingPing: {
            req: {
                ttl: c.THIRTY_SECONDS,
                prompt: !1,
                tag: 1002
            },
            res: {
                ttl: c.THIRTY_SECONDS,
                prompt: !1,
                tag: 1003
            }
        },
        unregistered_method: {
            req: {
                ttl: c.ONE_DAY,
                prompt: !1,
                tag: 0
            },
            res: {
                ttl: c.ONE_DAY,
                prompt: !1,
                tag: 0
            }
        }
    },
    uh = "pairing_create",
    lh = "pairing_expire",
    fh = "pairing_delete",
    ph = "pairing_ping",
    dh = "history_created",
    gh = "history_updated",
    mh = "history_deleted",
    vh = "history_sync",
    yh = "expirer_created",
    wh = "expirer_deleted",
    bh = "expirer_expired",
    Ah = "expirer_sync",
    _h = "verify-api",
    Eh = "https://verify.walletconnect.com",
    Ih = "https://verify.walletconnect.org",
    Sh = [Eh, Ih];
class Mh {
    constructor(t, e) {
        this.core = t, this.logger = e, this.keychain = new Map, this.name = "keychain", this.version = "0.3", this.initialized = !1, this.storagePrefix = Uc, this.init = async () => {
            if (!this.initialized) {
                const t = await this.getKeyChain();
                typeof t < "u" && (this.keychain = t), this.initialized = !0
            }
        }, this.has = t => (this.isInitialized(), this.keychain.has(t)), this.set = async (t, e) => {
            this.isInitialized(), this.keychain.set(t, e), await this.persist()
        }, this.get = t => {
            this.isInitialized();
            const e = this.keychain.get(t);
            if (typeof e > "u") {
                const {
                    message: e
                } = mo("NO_MATCHING_KEY", `${this.name}: ${t}`);
                throw new Error(e)
            }
            return e
        }, this.del = async t => {
            this.isInitialized(), this.keychain.delete(t), await this.persist()
        }, this.core = t, this.logger = N(e, this.name)
    }
    get context() {
        return C(this.logger)
    }
    get storageKey() {
        return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
    }
    async setKeyChain(t) {
        await this.core.storage.setItem(this.storageKey, zt(t))
    }
    async getKeyChain() {
        const t = await this.core.storage.getItem(this.storageKey);
        return typeof t < "u" ? Lt(t) : void 0
    }
    async persist() {
        await this.setKeyChain(this.keychain)
    }
    isInitialized() {
        if (!this.initialized) {
            const {
                message: t
            } = mo("NOT_INITIALIZED", this.name);
            throw new Error(t)
        }
    }
}
class Ph {
    constructor(t, e, r) {
        this.core = t, this.logger = e, this.name = "crypto", this.initialized = !1, this.init = async () => {
            this.initialized || (await this.keychain.init(), this.initialized = !0)
        }, this.hasKeys = t => (this.isInitialized(), this.keychain.has(t)), this.getClientId = async () => {
            this.isInitialized();
            const t = await this.getClientSeed(),
                e = q(t);
            return D(e.publicKey)
        }, this.generateKeyPair = () => {
            this.isInitialized();
            const t = function() {
                const t = u.generateKeyPair();
                return {
                    privateKey: yt(t.secretKey, Us),
                    publicKey: yt(t.publicKey, Us)
                }
            }();
            return this.setPrivateKey(t.publicKey, t.privateKey)
        }, this.signJWT = async t => {
            this.isInitialized();
            const e = await this.getClientSeed(),
                r = q(e),
                i = Ls(),
                n = Fc;
            return await k(i, t, n, r)
        }, this.generateSharedKey = (t, e, r) => {
            this.isInitialized();
            const i = function(t, e) {
                const r = u.sharedKey(vt(t, Us), vt(e, Us), !0);
                return yt(new f(h.SHA256, r).expand(32), Us)
            }(this.getPrivateKey(t), e);
            return this.setSymKey(i, r)
        }, this.setSymKey = async (t, e) => {
            this.isInitialized();
            const r = e || Fs(t);
            return await this.keychain.set(r, t), r
        }, this.deleteKeyPair = async t => {
            this.isInitialized(), await this.keychain.del(t)
        }, this.deleteSymKey = async t => {
            this.isInitialized(), await this.keychain.del(t)
        }, this.encode = async (t, e, r) => {
            this.isInitialized();
            const i = Qs(r),
                n = _(e);
            if (Ws(i)) {
                const e = i.senderPublicKey,
                    r = i.receiverPublicKey;
                t = await this.generateSharedKey(e, r)
            }
            const s = this.getSymKey(t),
                {
                    type: o,
                    senderPublicKey: a
                } = i;
            return $s({
                type: o,
                symKey: s,
                message: n,
                senderPublicKey: a
            })
        }, this.decode = async (t, e, r) => {
            this.isInitialized();
            const i = function(t, e) {
                const r = Vs(t);
                return Qs({
                    type: Hs(r.type),
                    senderPublicKey: typeof r.senderPublicKey < "u" ? yt(r.senderPublicKey, Us) : void 0,
                    receiverPublicKey: null == e ? void 0 : e.receiverPublicKey
                })
            }(e, r);
            if (Ws(i)) {
                const e = i.receiverPublicKey,
                    r = i.senderPublicKey;
                t = await this.generateSharedKey(e, r)
            }
            try {
                const r = function(t) {
                    const e = new p.ChaCha20Poly1305(vt(t.symKey, Us)),
                        {
                            sealed: r,
                            iv: i
                        } = Vs(t.encoded),
                        n = e.open(i, r);
                    if (null === n) throw new Error("Failed to decrypt");
                    return yt(n, zs)
                }({
                    symKey: this.getSymKey(t),
                    encoded: e
                });
                return S(r)
            } catch (n) {
                this.logger.error(`Failed to decode message from topic: '${t}', clientId: '${await this.getClientId()}'`), this.logger.error(n)
            }
        }, this.getPayloadType = t => Hs(Vs(t).type), this.getPayloadSenderPublicKey = t => {
            const e = Vs(t);
            return e.senderPublicKey ? yt(e.senderPublicKey, Us) : void 0
        }, this.core = t, this.logger = N(e, this.name), this.keychain = r || new Mh(this.core, this.logger)
    }
    get context() {
        return C(this.logger)
    }
    async setPrivateKey(t, e) {
        return await this.keychain.set(t, e), t
    }
    getPrivateKey(t) {
        return this.keychain.get(t)
    }
    async getClientSeed() {
        let t = "";
        try {
            t = this.keychain.get(Lc)
        } catch {
            t = Ls(), await this.keychain.set(Lc, t)
        }
        return function(t, e = "utf8") {
            const r = kc[e];
            if (!r) throw new Error(`Unsupported encoding "${e}"`);
            return "utf8" !== e && "utf-8" !== e || null == globalThis.Buffer || null == globalThis.Buffer.from ? r.decoder.decode(`${r.prefix}${t}`) : globalThis.Buffer.from(t, "utf8")
        }(t, "base16")
    }
    getSymKey(t) {
        return this.keychain.get(t)
    }
    isInitialized() {
        if (!this.initialized) {
            const {
                message: t
            } = mo("NOT_INITIALIZED", this.name);
            throw new Error(t)
        }
    }
}
class xh extends Vo {
    constructor(t, e) {
        super(t, e), this.logger = t, this.core = e, this.messages = new Map, this.name = "messages", this.version = "0.3", this.initialized = !1, this.storagePrefix = Uc, this.init = async () => {
            if (!this.initialized) {
                this.logger.trace("Initialized");
                try {
                    const t = await this.getRelayerMessages();
                    typeof t < "u" && (this.messages = t), this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({
                        type: "method",
                        method: "restore",
                        size: this.messages.size
                    })
                } catch (t) {
                    this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(t)
                } finally {
                    this.initialized = !0
                }
            }
        }, this.set = async (t, e) => {
            this.isInitialized();
            const r = Ks(e);
            let i = this.messages.get(t);
            return typeof i > "u" && (i = {}), typeof i[r] < "u" || (i[r] = e, this.messages.set(t, i), await this.persist()), r
        }, this.get = t => {
            this.isInitialized();
            let e = this.messages.get(t);
            return typeof e > "u" && (e = {}), e
        }, this.has = (t, e) => {
            this.isInitialized();
            return typeof this.get(t)[Ks(e)] < "u"
        }, this.del = async t => {
            this.isInitialized(), this.messages.delete(t), await this.persist()
        }, this.logger = N(t, this.name), this.core = e
    }
    get context() {
        return C(this.logger)
    }
    get storageKey() {
        return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
    }
    async setRelayerMessages(t) {
        await this.core.storage.setItem(this.storageKey, zt(t))
    }
    async getRelayerMessages() {
        const t = await this.core.storage.getItem(this.storageKey);
        return typeof t < "u" ? Lt(t) : void 0
    }
    async persist() {
        await this.setRelayerMessages(this.messages)
    }
    isInitialized() {
        if (!this.initialized) {
            const {
                message: t
            } = mo("NOT_INITIALIZED", this.name);
            throw new Error(t)
        }
    }
}
class Nh extends Qo {
    constructor(t, e) {
        super(t, e), this.relayer = t, this.logger = e, this.events = new i.EventEmitter, this.name = "publisher", this.queue = new Map, this.publishTimeout = c.toMiliseconds(c.ONE_MINUTE), this.failedPublishTimeout = c.toMiliseconds(c.ONE_SECOND), this.needsTransportRestart = !1, this.publish = async (t, e, r) => {
            var i;
            this.logger.debug("Publishing Payload"), this.logger.trace({
                type: "method",
                method: "publish",
                params: {
                    topic: t,
                    message: e,
                    opts: r
                }
            });
            const n = (null == r ? void 0 : r.ttl) || Kc,
                s = Gs(r),
                o = (null == r ? void 0 : r.prompt) || !1,
                a = (null == r ? void 0 : r.tag) || 0,
                c = (null == r ? void 0 : r.id) || y().toString(),
                h = {
                    topic: t,
                    message: e,
                    opts: {
                        ttl: n,
                        relay: s,
                        prompt: o,
                        tag: a,
                        id: c
                    }
                },
                u = `Failed to publish payload, please try again. id:${c} tag:${a}`,
                l = Date.now();
            let f, p = 1;
            try {
                for (; void 0 === f;) {
                    if (Date.now() - l > this.publishTimeout) throw new Error(u);
                    this.logger.trace({
                        id: c,
                        attempts: p
                    }, `publisher.publish - attempt ${p}`), f = await await Kt(this.rpcPublish(t, e, n, s, o, a, c).catch((t => this.logger.warn(t))), this.publishTimeout, u), p++, f || await new Promise((t => setTimeout(t, this.failedPublishTimeout)))
                }
                this.relayer.events.emit(Xc, h), this.logger.debug("Successfully Published Payload"), this.logger.trace({
                    type: "method",
                    method: "publish",
                    params: {
                        id: c,
                        topic: t,
                        message: e,
                        opts: r
                    }
                })
            } catch (d) {
                if (this.logger.debug("Failed to Publish Payload"), this.logger.error(d), null != (i = null == r ? void 0 : r.internal) && i.throwOnFailedPublish) throw d;
                this.queue.set(c, h)
            }
        }, this.on = (t, e) => {
            this.events.on(t, e)
        }, this.once = (t, e) => {
            this.events.once(t, e)
        }, this.off = (t, e) => {
            this.events.off(t, e)
        }, this.removeListener = (t, e) => {
            this.events.removeListener(t, e)
        }, this.relayer = t, this.logger = N(e, this.name), this.registerEventListeners()
    }
    get context() {
        return C(this.logger)
    }
    rpcPublish(t, e, r, i, n, s, o) {
        var a, c, h, u;
        const l = {
            method: Js(i.protocol).publish,
            params: {
                topic: t,
                message: e,
                ttl: r,
                prompt: n,
                tag: s
            },
            id: o
        };
        return bo(null == (a = l.params) ? void 0 : a.prompt) && (null == (c = l.params) || delete c.prompt), bo(null == (h = l.params) ? void 0 : h.tag) && (null == (u = l.params) || delete u.tag), this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
            type: "message",
            direction: "outgoing",
            request: l
        }), this.relayer.request(l)
    }
    removeRequestFromQueue(t) {
        this.queue.delete(t)
    }
    checkQueue() {
        this.queue.forEach((async t => {
            const {
                topic: e,
                message: r,
                opts: i
            } = t;
            await this.publish(e, r, i)
        }))
    }
    registerEventListeners() {
        this.relayer.core.heartbeat.on(Fo, (() => {
            if (this.needsTransportRestart) return this.needsTransportRestart = !1, void this.relayer.events.emit(Yc);
            this.checkQueue()
        })), this.relayer.on(Qc, (t => {
            this.removeRequestFromQueue(t.id.toString())
        }))
    }
}
class Ch {
    constructor() {
        this.map = new Map, this.set = (t, e) => {
            const r = this.get(t);
            this.exists(t, e) || this.map.set(t, [...r, e])
        }, this.get = t => this.map.get(t) || [], this.exists = (t, e) => this.get(t).includes(e), this.delete = (t, e) => {
            if (typeof e > "u") return void this.map.delete(t);
            if (!this.map.has(t)) return;
            const r = this.get(t);
            if (!this.exists(t, e)) return;
            const i = r.filter((t => t !== e));
            i.length ? this.map.set(t, i) : this.map.delete(t)
        }, this.clear = () => {
            this.map.clear()
        }
    }
    get topics() {
        return Array.from(this.map.keys())
    }
}
var Oh = Object.defineProperty,
    Rh = Object.defineProperties,
    Th = Object.getOwnPropertyDescriptors,
    qh = Object.getOwnPropertySymbols,
    Dh = Object.prototype.hasOwnProperty,
    kh = Object.prototype.propertyIsEnumerable,
    Bh = (t, e, r) => e in t ? Oh(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : t[e] = r,
    Uh = (t, e) => {
        for (var r in e || (e = {})) Dh.call(e, r) && Bh(t, r, e[r]);
        if (qh)
            for (var r of qh(e)) kh.call(e, r) && Bh(t, r, e[r]);
        return t
    },
    jh = (t, e) => Rh(t, Th(e));
class zh extends Jo {
    constructor(t, e) {
        super(t, e), this.relayer = t, this.logger = e, this.subscriptions = new Map, this.topicMap = new Ch, this.events = new i.EventEmitter, this.name = "subscription", this.version = "0.3", this.pending = new Map, this.cached = [], this.initialized = !1, this.pendingSubscriptionWatchLabel = "pending_sub_watch_label", this.pollingInterval = 20, this.storagePrefix = Uc, this.subscribeTimeout = c.toMiliseconds(c.ONE_MINUTE), this.restartInProgress = !1, this.batchSubscribeTopicsLimit = 500, this.pendingBatchMessages = [], this.init = async () => {
            this.initialized || (this.logger.trace("Initialized"), this.registerEventListeners(), this.clientId = await this.relayer.core.crypto.getClientId())
        }, this.subscribe = async (t, e) => {
            await this.restartToComplete(), this.isInitialized(), this.logger.debug("Subscribing Topic"), this.logger.trace({
                type: "method",
                method: "subscribe",
                params: {
                    topic: t,
                    opts: e
                }
            });
            try {
                const r = Gs(e),
                    i = {
                        topic: t,
                        relay: r
                    };
                this.pending.set(t, i);
                const n = await this.rpcSubscribe(t, r);
                return "string" == typeof n && (this.onSubscribe(n, i), this.logger.debug("Successfully Subscribed Topic"), this.logger.trace({
                    type: "method",
                    method: "subscribe",
                    params: {
                        topic: t,
                        opts: e
                    }
                })), n
            } catch (r) {
                throw this.logger.debug("Failed to Subscribe Topic"), this.logger.error(r), r
            }
        }, this.unsubscribe = async (t, e) => {
            await this.restartToComplete(), this.isInitialized(), typeof(null == e ? void 0 : e.id) < "u" ? await this.unsubscribeById(t, e.id, e) : await this.unsubscribeByTopic(t, e)
        }, this.isSubscribed = async t => {
            if (this.topics.includes(t)) return !0;
            const e = `${this.pendingSubscriptionWatchLabel}_${t}`;
            return await new Promise(((r, i) => {
                const n = new c.Watch;
                n.start(e);
                const s = setInterval((() => {
                    !this.pending.has(t) && this.topics.includes(t) && (clearInterval(s), n.stop(e), r(!0)), n.elapsed(e) >= ch && (clearInterval(s), n.stop(e), i(new Error("Subscription resolution timeout")))
                }), this.pollingInterval)
            })).catch((() => !1))
        }, this.on = (t, e) => {
            this.events.on(t, e)
        }, this.once = (t, e) => {
            this.events.once(t, e)
        }, this.off = (t, e) => {
            this.events.off(t, e)
        }, this.removeListener = (t, e) => {
            this.events.removeListener(t, e)
        }, this.start = async () => {
            await this.onConnect()
        }, this.stop = async () => {
            await this.onDisconnect()
        }, this.restart = async () => {
            this.restartInProgress = !0, await this.restore(), await this.reset(), this.restartInProgress = !1
        }, this.relayer = t, this.logger = N(e, this.name), this.clientId = ""
    }
    get context() {
        return C(this.logger)
    }
    get storageKey() {
        return this.storagePrefix + this.version + this.relayer.core.customStoragePrefix + "//" + this.name
    }
    get length() {
        return this.subscriptions.size
    }
    get ids() {
        return Array.from(this.subscriptions.keys())
    }
    get values() {
        return Array.from(this.subscriptions.values())
    }
    get topics() {
        return this.topicMap.topics
    }
    hasSubscription(t, e) {
        let r = !1;
        try {
            r = this.getSubscription(t).topic === e
        } catch {}
        return r
    }
    onEnable() {
        this.cached = [], this.initialized = !0
    }
    onDisable() {
        this.cached = this.values, this.subscriptions.clear(), this.topicMap.clear()
    }
    async unsubscribeByTopic(t, e) {
        const r = this.topicMap.get(t);
        await Promise.all(r.map((async r => await this.unsubscribeById(t, r, e))))
    }
    async unsubscribeById(t, e, r) {
        this.logger.debug("Unsubscribing Topic"), this.logger.trace({
            type: "method",
            method: "unsubscribe",
            params: {
                topic: t,
                id: e,
                opts: r
            }
        });
        try {
            const i = Gs(r);
            await this.rpcUnsubscribe(t, e, i);
            const n = vo("USER_DISCONNECTED", `${this.name}, ${t}`);
            await this.onUnsubscribe(t, e, n), this.logger.debug("Successfully Unsubscribed Topic"), this.logger.trace({
                type: "method",
                method: "unsubscribe",
                params: {
                    topic: t,
                    id: e,
                    opts: r
                }
            })
        } catch (i) {
            throw this.logger.debug("Failed to Unsubscribe Topic"), this.logger.error(i), i
        }
    }
    async rpcSubscribe(t, e) {
        const r = {
            method: Js(e.protocol).subscribe,
            params: {
                topic: t
            }
        };
        this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
            type: "payload",
            direction: "outgoing",
            request: r
        });
        try {
            return await await Kt(this.relayer.request(r).catch((t => this.logger.warn(t))), this.subscribeTimeout) ? Ks(t + this.clientId) : null
        } catch {
            this.logger.debug("Outgoing Relay Subscribe Payload stalled"), this.relayer.events.emit(Yc)
        }
        return null
    }
    async rpcBatchSubscribe(t) {
        if (!t.length) return;
        const e = {
            method: Js(t[0].relay.protocol).batchSubscribe,
            params: {
                topics: t.map((t => t.topic))
            }
        };
        this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
            type: "payload",
            direction: "outgoing",
            request: e
        });
        try {
            return await await Kt(this.relayer.request(e).catch((t => this.logger.warn(t))), this.subscribeTimeout)
        } catch {
            this.relayer.events.emit(Yc)
        }
    }
    async rpcBatchFetchMessages(t) {
        if (!t.length) return;
        const e = {
            method: Js(t[0].relay.protocol).batchFetchMessages,
            params: {
                topics: t.map((t => t.topic))
            }
        };
        let r;
        this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
            type: "payload",
            direction: "outgoing",
            request: e
        });
        try {
            r = await await Kt(this.relayer.request(e).catch((t => this.logger.warn(t))), this.subscribeTimeout)
        } catch {
            this.relayer.events.emit(Yc)
        }
        return r
    }
    rpcUnsubscribe(t, e, r) {
        const i = {
            method: Js(r.protocol).unsubscribe,
            params: {
                topic: t,
                id: e
            }
        };
        return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
            type: "payload",
            direction: "outgoing",
            request: i
        }), this.relayer.request(i)
    }
    onSubscribe(t, e) {
        this.setSubscription(t, jh(Uh({}, e), {
            id: t
        })), this.pending.delete(e.topic)
    }
    onBatchSubscribe(t) {
        t.length && t.forEach((t => {
            this.setSubscription(t.id, Uh({}, t)), this.pending.delete(t.topic)
        }))
    }
    async onUnsubscribe(t, e, r) {
        this.events.removeAllListeners(e), this.hasSubscription(e, t) && this.deleteSubscription(e, r), await this.relayer.messages.del(t)
    }
    async setRelayerSubscriptions(t) {
        await this.relayer.core.storage.setItem(this.storageKey, t)
    }
    async getRelayerSubscriptions() {
        return await this.relayer.core.storage.getItem(this.storageKey)
    }
    setSubscription(t, e) {
        this.logger.debug("Setting subscription"), this.logger.trace({
            type: "method",
            method: "setSubscription",
            id: t,
            subscription: e
        }), this.addSubscription(t, e)
    }
    addSubscription(t, e) {
        this.subscriptions.set(t, Uh({}, e)), this.topicMap.set(e.topic, t), this.events.emit(nh, e)
    }
    getSubscription(t) {
        this.logger.debug("Getting subscription"), this.logger.trace({
            type: "method",
            method: "getSubscription",
            id: t
        });
        const e = this.subscriptions.get(t);
        if (!e) {
            const {
                message: e
            } = mo("NO_MATCHING_KEY", `${this.name}: ${t}`);
            throw new Error(e)
        }
        return e
    }
    deleteSubscription(t, e) {
        this.logger.debug("Deleting subscription"), this.logger.trace({
            type: "method",
            method: "deleteSubscription",
            id: t,
            reason: e
        });
        const r = this.getSubscription(t);
        this.subscriptions.delete(t), this.topicMap.delete(r.topic, t), this.events.emit(sh, jh(Uh({}, r), {
            reason: e
        }))
    }
    async persist() {
        await this.setRelayerSubscriptions(this.values), this.events.emit(oh)
    }
    async reset() {
        if (this.cached.length) {
            const t = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
            for (let e = 0; e < t; e++) {
                const t = this.cached.splice(0, this.batchSubscribeTopicsLimit);
                await this.batchFetchMessages(t), await this.batchSubscribe(t)
            }
        }
        this.events.emit(ah)
    }
    async restore() {
        try {
            const t = await this.getRelayerSubscriptions();
            if (typeof t > "u" || !t.length) return;
            if (this.subscriptions.size) {
                const {
                    message: t
                } = mo("RESTORE_WILL_OVERRIDE", this.name);
                throw this.logger.error(t), this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`), new Error(t)
            }
            this.cached = t, this.logger.debug(`Successfully Restored subscriptions for ${this.name}`), this.logger.trace({
                type: "method",
                method: "restore",
                subscriptions: this.values
            })
        } catch (Yt) {
            this.logger.debug(`Failed to Restore subscriptions for ${this.name}`), this.logger.error(Yt)
        }
    }
    async batchSubscribe(t) {
        if (!t.length) return;
        const e = await this.rpcBatchSubscribe(t);
        yo(e) && this.onBatchSubscribe(e.map(((e, r) => jh(Uh({}, t[r]), {
            id: e
        }))))
    }
    async batchFetchMessages(t) {
        if (!t.length) return;
        this.logger.trace(`Fetching batch messages for ${t.length} subscriptions`);
        const e = await this.rpcBatchFetchMessages(t);
        e && e.messages && (this.pendingBatchMessages = this.pendingBatchMessages.concat(e.messages))
    }
    async onConnect() {
        await this.restart(), this.onEnable()
    }
    onDisconnect() {
        this.onDisable()
    }
    async checkPending() {
        if (!this.initialized || !this.relayer.connected) return;
        const t = [];
        this.pending.forEach((e => {
            t.push(e)
        })), await this.batchSubscribe(t), this.pendingBatchMessages.length && (await this.relayer.handleBatchMessageEvents(this.pendingBatchMessages), this.pendingBatchMessages = [])
    }
    registerEventListeners() {
        this.relayer.core.heartbeat.on(Fo, (async () => {
            await this.checkPending()
        })), this.events.on(nh, (async t => {
            const e = nh;
            this.logger.info(`Emitting ${e}`), this.logger.debug({
                type: "event",
                event: e,
                data: t
            }), await this.persist()
        })), this.events.on(sh, (async t => {
            const e = sh;
            this.logger.info(`Emitting ${e}`), this.logger.debug({
                type: "event",
                event: e,
                data: t
            }), await this.persist()
        }))
    }
    isInitialized() {
        if (!this.initialized) {
            const {
                message: t
            } = mo("NOT_INITIALIZED", this.name);
            throw new Error(t)
        }
    }
    async restartToComplete() {
        this.restartInProgress && await new Promise((t => {
            const e = setInterval((() => {
                this.restartInProgress || (clearInterval(e), t())
            }), this.pollingInterval)
        }))
    }
}
var Lh = Object.defineProperty,
    Fh = Object.getOwnPropertySymbols,
    Kh = Object.prototype.hasOwnProperty,
    Hh = Object.prototype.propertyIsEnumerable,
    $h = (t, e, r) => e in t ? Lh(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : t[e] = r;
class Vh extends Wo {
    constructor(t) {
        super(t), this.protocol = "wc", this.version = 2, this.events = new i.EventEmitter, this.name = "relayer", this.transportExplicitlyClosed = !1, this.initialized = !1, this.connectionAttemptInProgress = !1, this.connectionStatusPollingInterval = 20, this.staleConnectionErrors = ["socket hang up", "stalled", "interrupted"], this.hasExperiencedNetworkDisruption = !1, this.requestsInFlight = new Map, this.heartBeatTimeout = c.toMiliseconds(c.THIRTY_SECONDS + c.ONE_SECOND), this.request = async t => {
            var e, r;
            this.logger.debug("Publishing Request Payload");
            const i = t.id || y().toString();
            await this.toEstablishConnection();
            try {
                const n = this.provider.request(t);
                this.requestsInFlight.set(i, {
                    promise: n,
                    request: t
                }), this.logger.trace({
                    id: i,
                    method: t.method,
                    topic: null == (e = t.params) ? void 0 : e.topic
                }, "relayer.request - attempt to publish...");
                const s = await new Promise((async (t, e) => {
                    const r = () => {
                        e(new Error(`relayer.request - publish interrupted, id: ${i}`))
                    };
                    this.provider.on(eh, r);
                    const s = await n;
                    this.provider.off(eh, r), t(s)
                }));
                return this.logger.trace({
                    id: i,
                    method: t.method,
                    topic: null == (r = t.params) ? void 0 : r.topic
                }, "relayer.request - published"), s
            } catch (n) {
                throw this.logger.debug(`Failed to Publish Request: ${i}`), n
            } finally {
                this.requestsInFlight.delete(i)
            }
        }, this.resetPingTimeout = () => {
            if (Tt()) try {
                clearTimeout(this.pingTimeout), this.pingTimeout = setTimeout((() => {
                    var t, e, r;
                    null == (r = null == (e = null == (t = this.provider) ? void 0 : t.connection) ? void 0 : e.socket) || r.terminate()
                }), this.heartBeatTimeout)
            } catch (bn) {
                this.logger.warn(bn)
            }
        }, this.onPayloadHandler = t => {
            this.onProviderPayload(t), this.resetPingTimeout()
        }, this.onConnectHandler = () => {
            this.startPingTimeout(), this.events.emit(Wc)
        }, this.onDisconnectHandler = () => {
            this.onProviderDisconnect()
        }, this.onProviderErrorHandler = t => {
            this.logger.error(t), this.events.emit(Jc, t), this.logger.info("Fatal socket error received, closing transport"), this.transportClose()
        }, this.registerProviderListeners = () => {
            this.provider.on(Zc, this.onPayloadHandler), this.provider.on(th, this.onConnectHandler), this.provider.on(eh, this.onDisconnectHandler), this.provider.on(rh, this.onProviderErrorHandler)
        }, this.core = t.core, this.logger = typeof t.logger < "u" && "string" != typeof t.logger ? N(t.logger, this.name) : B(O({
            level: t.logger || "error"
        })), this.messages = new xh(this.logger, t.core), this.subscriber = new zh(this, this.logger), this.publisher = new Nh(this, this.logger), this.relayUrl = (null == t ? void 0 : t.relayUrl) || Hc, this.projectId = t.projectId, this.bundleId = function() {
            var t;
            try {
                return qt() && typeof global < "u" && typeof(null == global ? void 0 : global.Application) < "u" ? null == (t = global.Application) ? void 0 : t.applicationId : void 0
            } catch {
                return
            }
        }(), this.provider = {}
    }
    async init() {
        this.logger.trace("Initialized"), this.registerEventListeners(), await Promise.all([this.messages.init(), this.subscriber.init()]);
        try {
            await this.transportOpen()
        } catch {
            this.logger.warn(`Connection via ${this.relayUrl} failed, attempting to connect via failover domain ${$c}...`), await this.restartTransport($c)
        }
        this.initialized = !0, setTimeout((async () => {
            0 === this.subscriber.topics.length && 0 === this.subscriber.pending.size && (this.logger.info("No topics subscribed to after init, closing transport"), await this.transportClose(), this.transportExplicitlyClosed = !1)
        }), 1e4)
    }
    get context() {
        return C(this.logger)
    }
    get connected() {
        var t, e, r;
        return 1 === (null == (r = null == (e = null == (t = this.provider) ? void 0 : t.connection) ? void 0 : e.socket) ? void 0 : r.readyState)
    }
    get connecting() {
        var t, e, r;
        return 0 === (null == (r = null == (e = null == (t = this.provider) ? void 0 : t.connection) ? void 0 : e.socket) ? void 0 : r.readyState)
    }
    async publish(t, e, r) {
        this.isInitialized(), await this.publisher.publish(t, e, r), await this.recordMessageEvent({
            topic: t,
            message: e,
            publishedAt: Date.now()
        })
    }
    async subscribe(t, e) {
        var r;
        this.isInitialized();
        let i, n = (null == (r = this.subscriber.topicMap.get(t)) ? void 0 : r[0]) || "";
        const s = e => {
            e.topic === t && (this.subscriber.off(nh, s), i())
        };
        return await Promise.all([new Promise((t => {
            i = t, this.subscriber.on(nh, s)
        })), new Promise((async r => {
            n = await this.subscriber.subscribe(t, e) || n, r()
        }))]), n
    }
    async unsubscribe(t, e) {
        this.isInitialized(), await this.subscriber.unsubscribe(t, e)
    }
    on(t, e) {
        this.events.on(t, e)
    }
    once(t, e) {
        this.events.once(t, e)
    }
    off(t, e) {
        this.events.off(t, e)
    }
    removeListener(t, e) {
        this.events.removeListener(t, e)
    }
    async transportDisconnect() {
        if (!this.hasExperiencedNetworkDisruption && this.connected && this.requestsInFlight.size > 0) try {
            await Promise.all(Array.from(this.requestsInFlight.values()).map((t => t.promise)))
        } catch (Yt) {
            this.logger.warn(Yt)
        }
        this.hasExperiencedNetworkDisruption || this.connected ? await Kt(this.provider.disconnect(), 2e3, "provider.disconnect()").catch((() => this.onProviderDisconnect())) : this.onProviderDisconnect()
    }
    async transportClose() {
        this.transportExplicitlyClosed = !0, await this.transportDisconnect()
    }
    async transportOpen(t) {
        await this.confirmOnlineStateOrThrow(), t && t !== this.relayUrl && (this.relayUrl = t, await this.transportDisconnect()), await this.createProvider(), this.connectionAttemptInProgress = !0, this.transportExplicitlyClosed = !1;
        try {
            await new Promise((async (t, e) => {
                const r = () => {
                    this.provider.off(eh, r), e(new Error("Connection interrupted while trying to subscribe"))
                };
                this.provider.on(eh, r), await Kt(this.provider.connect(), c.toMiliseconds(c.ONE_MINUTE), `Socket stalled when trying to connect to ${this.relayUrl}`).catch((t => {
                    e(t)
                })), await this.subscriber.start(), this.hasExperiencedNetworkDisruption = !1, t()
            }))
        } catch (bn) {
            this.logger.error(bn);
            const e = bn;
            if (this.hasExperiencedNetworkDisruption = !0, !this.isConnectionStalled(e.message)) throw bn
        } finally {
            this.connectionAttemptInProgress = !1
        }
    }
    async restartTransport(t) {
        this.connectionAttemptInProgress || (this.relayUrl = t || this.relayUrl, await this.confirmOnlineStateOrThrow(), await this.transportClose(), await this.transportOpen())
    }
    async confirmOnlineStateOrThrow() {
        if (!(await ko())) throw new Error("No internet connection detected. Please restart your network and try again.")
    }
    async handleBatchMessageEvents(t) {
        if (0 === (null == t ? void 0 : t.length)) return void this.logger.trace("Batch message events is empty. Ignoring...");
        const e = t.sort(((t, e) => t.publishedAt - e.publishedAt));
        this.logger.trace(`Batch of ${e.length} message events sorted`);
        for (const i of e) try {
            await this.onMessageEvent(i)
        } catch (r) {
            this.logger.warn(r)
        }
        this.logger.trace(`Batch of ${e.length} message events processed`)
    }
    startPingTimeout() {
        var t, e, r, i, n;
        if (Tt()) try {
            null != (e = null == (t = this.provider) ? void 0 : t.connection) && e.socket && (null == (n = null == (i = null == (r = this.provider) ? void 0 : r.connection) ? void 0 : i.socket) || n.once("ping", (() => {
                this.resetPingTimeout()
            }))), this.resetPingTimeout()
        } catch (s) {
            this.logger.warn(s)
        }
    }
    isConnectionStalled(t) {
        return this.staleConnectionErrors.some((e => t.includes(e)))
    }
    async createProvider() {
        this.provider.connection && this.unregisterProviderListeners();
        const t = await this.core.crypto.signJWT(this.relayUrl);
        this.provider = new ra(new sa(Ut({
            sdkVersion: "2.13.3",
            protocol: this.protocol,
            version: this.version,
            relayUrl: this.relayUrl,
            projectId: this.projectId,
            auth: t,
            useOnCloseEvent: !0,
            bundleId: this.bundleId
        }))), this.registerProviderListeners()
    }
    async recordMessageEvent(t) {
        const {
            topic: e,
            message: r
        } = t;
        await this.messages.set(e, r)
    }
    async shouldIgnoreMessageEvent(t) {
        const {
            topic: e,
            message: r
        } = t;
        if (!r || 0 === r.length) return this.logger.debug(`Ignoring invalid/empty message: ${r}`), !0;
        if (!(await this.subscriber.isSubscribed(e))) return this.logger.debug(`Ignoring message for non-subscribed topic ${e}`), !0;
        const i = this.messages.has(e, r);
        return i && this.logger.debug(`Ignoring duplicate message: ${r}`), i
    }
    async onProviderPayload(t) {
        if (this.logger.debug("Incoming Relay Payload"), this.logger.trace({
                type: "payload",
                direction: "incoming",
                payload: t
            }), U(t)) {
            if (!t.method.endsWith("_subscription")) return;
            const e = t.params,
                {
                    topic: r,
                    message: i,
                    publishedAt: n
                } = e.data,
                s = {
                    topic: r,
                    message: i,
                    publishedAt: n
                };
            this.logger.debug("Emitting Relayer Payload"), this.logger.trace(((t, e) => {
                for (var r in e || (e = {})) Kh.call(e, r) && $h(t, r, e[r]);
                if (Fh)
                    for (var r of Fh(e)) Hh.call(e, r) && $h(t, r, e[r]);
                return t
            })({
                type: "event",
                event: e.id
            }, s)), this.events.emit(e.id, s), await this.acknowledgePayload(t), await this.onMessageEvent(s)
        } else b(t) && this.events.emit(Qc, t)
    }
    async onMessageEvent(t) {
        await this.shouldIgnoreMessageEvent(t) || (this.events.emit(Vc, t), await this.recordMessageEvent(t))
    }
    async acknowledgePayload(t) {
        const e = j(t.id, !0);
        await this.provider.connection.send(e)
    }
    unregisterProviderListeners() {
        this.provider.off(Zc, this.onPayloadHandler), this.provider.off(th, this.onConnectHandler), this.provider.off(eh, this.onDisconnectHandler), this.provider.off(rh, this.onProviderErrorHandler), clearTimeout(this.pingTimeout)
    }
    async registerEventListeners() {
        let t = await ko();
        Bo((async e => {
            t !== e && (t = e, e ? await this.restartTransport().catch((t => this.logger.error(t))) : (this.hasExperiencedNetworkDisruption = !0, await this.transportDisconnect(), this.transportExplicitlyClosed = !1))
        }))
    }
    async onProviderDisconnect() {
        await this.subscriber.stop(), this.requestsInFlight.clear(), clearTimeout(this.pingTimeout), this.events.emit(Gc), this.connectionAttemptInProgress = !1, !this.transportExplicitlyClosed && setTimeout((async () => {
            await this.transportOpen().catch((t => this.logger.error(t)))
        }), c.toMiliseconds(ih))
    }
    isInitialized() {
        if (!this.initialized) {
            const {
                message: t
            } = mo("NOT_INITIALIZED", this.name);
            throw new Error(t)
        }
    }
    async toEstablishConnection() {
        await this.confirmOnlineStateOrThrow(), !this.connected && (this.connectionAttemptInProgress && await new Promise((t => {
            const e = setInterval((() => {
                this.connected && (clearInterval(e), t())
            }), this.connectionStatusPollingInterval)
        })), await this.transportOpen())
    }
}
var Qh = Object.defineProperty,
    Wh = Object.getOwnPropertySymbols,
    Gh = Object.prototype.hasOwnProperty,
    Jh = Object.prototype.propertyIsEnumerable,
    Yh = (t, e, r) => e in t ? Qh(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : t[e] = r,
    Xh = (t, e) => {
        for (var r in e || (e = {})) Gh.call(e, r) && Yh(t, r, e[r]);
        if (Wh)
            for (var r of Wh(e)) Jh.call(e, r) && Yh(t, r, e[r]);
        return t
    };
class Zh extends Go {
    constructor(t, e, r, i = Uc, n = void 0) {
        super(t, e, r, i), this.core = t, this.logger = e, this.name = r, this.map = new Map, this.version = "0.3", this.cached = [], this.initialized = !1, this.storagePrefix = Uc, this.recentlyDeleted = [], this.recentlyDeletedLimit = 200, this.init = async () => {
            this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((t => {
                this.getKey && null !== t && !bo(t) ? this.map.set(this.getKey(t), t) : function(t) {
                    var e;
                    return null == (e = null == t ? void 0 : t.proposer) ? void 0 : e.publicKey
                }(t) ? this.map.set(t.id, t) : function(t) {
                    return null == t ? void 0 : t.topic
                }(t) && this.map.set(t.topic, t)
            })), this.cached = [], this.initialized = !0)
        }, this.set = async (t, e) => {
            this.isInitialized(), this.map.has(t) ? await this.update(t, e) : (this.logger.debug("Setting value"), this.logger.trace({
                type: "method",
                method: "set",
                key: t,
                value: e
            }), this.map.set(t, e), await this.persist())
        }, this.get = t => (this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({
            type: "method",
            method: "get",
            key: t
        }), this.getData(t)), this.getAll = t => (this.isInitialized(), t ? this.values.filter((e => Object.keys(t).every((r => x(e[r], t[r]))))) : this.values), this.update = async (t, e) => {
            this.isInitialized(), this.logger.debug("Updating value"), this.logger.trace({
                type: "method",
                method: "update",
                key: t,
                update: e
            });
            const r = Xh(Xh({}, this.getData(t)), e);
            this.map.set(t, r), await this.persist()
        }, this.delete = async (t, e) => {
            this.isInitialized(), this.map.has(t) && (this.logger.debug("Deleting value"), this.logger.trace({
                type: "method",
                method: "delete",
                key: t,
                reason: e
            }), this.map.delete(t), this.addToRecentlyDeleted(t), await this.persist())
        }, this.logger = N(e, this.name), this.storagePrefix = i, this.getKey = n
    }
    get context() {
        return C(this.logger)
    }
    get storageKey() {
        return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
    }
    get length() {
        return this.map.size
    }
    get keys() {
        return Array.from(this.map.keys())
    }
    get values() {
        return Array.from(this.map.values())
    }
    addToRecentlyDeleted(t) {
        this.recentlyDeleted.push(t), this.recentlyDeleted.length >= this.recentlyDeletedLimit && this.recentlyDeleted.splice(0, this.recentlyDeletedLimit / 2)
    }
    async setDataStore(t) {
        await this.core.storage.setItem(this.storageKey, t)
    }
    async getDataStore() {
        return await this.core.storage.getItem(this.storageKey)
    }
    getData(t) {
        const e = this.map.get(t);
        if (!e) {
            if (this.recentlyDeleted.includes(t)) {
                const {
                    message: e
                } = mo("MISSING_OR_INVALID", `Record was recently deleted - ${this.name}: ${t}`);
                throw this.logger.error(e), new Error(e)
            }
            const {
                message: e
            } = mo("NO_MATCHING_KEY", `${this.name}: ${t}`);
            throw this.logger.error(e), new Error(e)
        }
        return e
    }
    async persist() {
        await this.setDataStore(this.values)
    }
    async restore() {
        try {
            const t = await this.getDataStore();
            if (typeof t > "u" || !t.length) return;
            if (this.map.size) {
                const {
                    message: t
                } = mo("RESTORE_WILL_OVERRIDE", this.name);
                throw this.logger.error(t), new Error(t)
            }
            this.cached = t, this.logger.debug(`Successfully Restored value for ${this.name}`), this.logger.trace({
                type: "method",
                method: "restore",
                value: this.values
            })
        } catch (Yt) {
            this.logger.debug(`Failed to Restore value for ${this.name}`), this.logger.error(Yt)
        }
    }
    isInitialized() {
        if (!this.initialized) {
            const {
                message: t
            } = mo("NOT_INITIALIZED", this.name);
            throw new Error(t)
        }
    }
}
class tu {
    constructor(t, e) {
        this.core = t, this.logger = e, this.name = "pairing", this.version = "0.3", this.events = new n, this.initialized = !1, this.storagePrefix = Uc, this.ignoredPayloadTypes = [1], this.registeredMethods = [], this.init = async () => {
            this.initialized || (await this.pairings.init(), await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.initialized = !0, this.logger.trace("Initialized"))
        }, this.register = ({
            methods: t
        }) => {
            this.isInitialized(), this.registeredMethods = [...new Set([...this.registeredMethods, ...t])]
        }, this.create = async t => {
            this.isInitialized();
            const e = Ls(),
                r = await this.core.crypto.setSymKey(e),
                i = Vt(c.FIVE_MINUTES),
                n = {
                    protocol: "irn"
                },
                s = {
                    topic: r,
                    expiry: i,
                    relay: n,
                    active: !1
                },
                o = co({
                    protocol: this.core.protocol,
                    version: this.core.version,
                    topic: r,
                    symKey: e,
                    relay: n,
                    expiryTimestamp: i,
                    methods: null == t ? void 0 : t.methods
                });
            return this.core.expirer.set(r, i), await this.pairings.set(r, s), await this.core.relayer.subscribe(r), {
                topic: r,
                uri: o
            }
        }, this.pair = async t => {
            this.isInitialized(), this.isValidPair(t);
            const {
                topic: e,
                symKey: r,
                relay: i,
                expiryTimestamp: n,
                methods: s
            } = oo(t.uri);
            let o;
            if (this.pairings.keys.includes(e) && (o = this.pairings.get(e), o.active)) throw new Error(`Pairing already exists: ${e}. Please try again with a new connection URI.`);
            const a = n || Vt(c.FIVE_MINUTES),
                h = {
                    topic: e,
                    relay: i,
                    expiry: a,
                    active: !1,
                    methods: s
                };
            return this.core.expirer.set(e, a), await this.pairings.set(e, h), t.activatePairing && await this.activate({
                topic: e
            }), this.events.emit(uh, h), this.core.crypto.keychain.has(e) || await this.core.crypto.setSymKey(r, e), await this.core.relayer.subscribe(e, {
                relay: i
            }), h
        }, this.activate = async ({
            topic: t
        }) => {
            this.isInitialized();
            const e = Vt(c.THIRTY_DAYS);
            this.core.expirer.set(t, e), await this.pairings.update(t, {
                active: !0,
                expiry: e
            })
        }, this.ping = async t => {
            this.isInitialized(), await this.isValidPing(t);
            const {
                topic: e
            } = t;
            if (this.pairings.keys.includes(e)) {
                const t = await this.sendRequest(e, "wc_pairingPing", {}),
                    {
                        done: r,
                        resolve: i,
                        reject: n
                    } = Ft();
                this.events.once(Wt("pairing_ping", t), (({
                    error: t
                }) => {
                    t ? n(t) : i()
                })), await r()
            }
        }, this.updateExpiry = async ({
            topic: t,
            expiry: e
        }) => {
            this.isInitialized(), await this.pairings.update(t, {
                expiry: e
            })
        }, this.updateMetadata = async ({
            topic: t,
            metadata: e
        }) => {
            this.isInitialized(), await this.pairings.update(t, {
                peerMetadata: e
            })
        }, this.getPairings = () => (this.isInitialized(), this.pairings.values), this.disconnect = async t => {
            this.isInitialized(), await this.isValidDisconnect(t);
            const {
                topic: e
            } = t;
            this.pairings.keys.includes(e) && (await this.sendRequest(e, "wc_pairingDelete", vo("USER_DISCONNECTED")), await this.deletePairing(e))
        }, this.sendRequest = async (t, e, r) => {
            const i = v(e, r),
                n = await this.core.crypto.encode(t, i),
                s = hh[e].req;
            return this.core.history.set(t, i), this.core.relayer.publish(t, n, s), i.id
        }, this.sendResult = async (t, e, r) => {
            const i = j(t, r),
                n = await this.core.crypto.encode(e, i),
                s = await this.core.history.get(e, t),
                o = hh[s.request.method].res;
            await this.core.relayer.publish(e, n, o), await this.core.history.resolve(i)
        }, this.sendError = async (t, e, r) => {
            const i = M(t, r),
                n = await this.core.crypto.encode(e, i),
                s = await this.core.history.get(e, t),
                o = hh[s.request.method] ? hh[s.request.method].res : hh.unregistered_method.res;
            await this.core.relayer.publish(e, n, o), await this.core.history.resolve(i)
        }, this.deletePairing = async (t, e) => {
            await this.core.relayer.unsubscribe(t), await Promise.all([this.pairings.delete(t, vo("USER_DISCONNECTED")), this.core.crypto.deleteSymKey(t), e ? Promise.resolve() : this.core.expirer.del(t)])
        }, this.cleanup = async () => {
            const t = this.pairings.getAll().filter((t => Qt(t.expiry)));
            await Promise.all(t.map((t => this.deletePairing(t.topic))))
        }, this.onRelayEventRequest = t => {
            const {
                topic: e,
                payload: r
            } = t;
            switch (r.method) {
                case "wc_pairingPing":
                    return this.onPairingPingRequest(e, r);
                case "wc_pairingDelete":
                    return this.onPairingDeleteRequest(e, r);
                default:
                    return this.onUnknownRpcMethodRequest(e, r)
            }
        }, this.onRelayEventResponse = async t => {
            const {
                topic: e,
                payload: r
            } = t, i = (await this.core.history.get(e, r.id)).request.method;
            return "wc_pairingPing" === i ? this.onPairingPingResponse(e, r) : this.onUnknownRpcMethodResponse(i)
        }, this.onPairingPingRequest = async (t, e) => {
            const {
                id: r
            } = e;
            try {
                this.isValidPing({
                    topic: t
                }), await this.sendResult(r, t, !0), this.events.emit(ph, {
                    id: r,
                    topic: t
                })
            } catch (i) {
                await this.sendError(r, t, i), this.logger.error(i)
            }
        }, this.onPairingPingResponse = (t, e) => {
            const {
                id: r
            } = e;
            setTimeout((() => {
                z(e) ? this.events.emit(Wt("pairing_ping", r), {}) : w(e) && this.events.emit(Wt("pairing_ping", r), {
                    error: e.error
                })
            }), 500)
        }, this.onPairingDeleteRequest = async (t, e) => {
            const {
                id: r
            } = e;
            try {
                this.isValidDisconnect({
                    topic: t
                }), await this.deletePairing(t), this.events.emit(fh, {
                    id: r,
                    topic: t
                })
            } catch (i) {
                await this.sendError(r, t, i), this.logger.error(i)
            }
        }, this.onUnknownRpcMethodRequest = async (t, e) => {
            const {
                id: r,
                method: i
            } = e;
            try {
                if (this.registeredMethods.includes(i)) return;
                const e = vo("WC_METHOD_UNSUPPORTED", i);
                await this.sendError(r, t, e), this.logger.error(e)
            } catch (n) {
                await this.sendError(r, t, n), this.logger.error(n)
            }
        }, this.onUnknownRpcMethodResponse = t => {
            this.registeredMethods.includes(t) || this.logger.error(vo("WC_METHOD_UNSUPPORTED", t))
        }, this.isValidPair = t => {
            var e;
            if (!Co(t)) {
                const {
                    message: e
                } = mo("MISSING_OR_INVALID", `pair() params: ${t}`);
                throw new Error(e)
            }
            if (! function(t) {
                    if (Ao(t, !1)) try {
                        return typeof new URL(t) < "u"
                    } catch {
                        return !1
                    }
                    return !1
                }(t.uri)) {
                const {
                    message: e
                } = mo("MISSING_OR_INVALID", `pair() uri: ${t.uri}`);
                throw new Error(e)
            }
            const r = oo(t.uri);
            if (null == (e = null == r ? void 0 : r.relay) || !e.protocol) {
                const {
                    message: t
                } = mo("MISSING_OR_INVALID", "pair() uri#relay-protocol");
                throw new Error(t)
            }
            if (null == r || !r.symKey) {
                const {
                    message: t
                } = mo("MISSING_OR_INVALID", "pair() uri#symKey");
                throw new Error(t)
            }
            if (null != r && r.expiryTimestamp && c.toMiliseconds(null == r ? void 0 : r.expiryTimestamp) < Date.now()) {
                const {
                    message: t
                } = mo("EXPIRED", "pair() URI has expired. Please try again with a new connection URI.");
                throw new Error(t)
            }
        }, this.isValidPing = async t => {
            if (!Co(t)) {
                const {
                    message: e
                } = mo("MISSING_OR_INVALID", `ping() params: ${t}`);
                throw new Error(e)
            }
            const {
                topic: e
            } = t;
            await this.isValidPairingTopic(e)
        }, this.isValidDisconnect = async t => {
            if (!Co(t)) {
                const {
                    message: e
                } = mo("MISSING_OR_INVALID", `disconnect() params: ${t}`);
                throw new Error(e)
            }
            const {
                topic: e
            } = t;
            await this.isValidPairingTopic(e)
        }, this.isValidPairingTopic = async t => {
            if (!Ao(t, !1)) {
                const {
                    message: e
                } = mo("MISSING_OR_INVALID", `pairing topic should be a string: ${t}`);
                throw new Error(e)
            }
            if (!this.pairings.keys.includes(t)) {
                const {
                    message: e
                } = mo("NO_MATCHING_KEY", `pairing topic doesn't exist: ${t}`);
                throw new Error(e)
            }
            if (Qt(this.pairings.get(t).expiry)) {
                await this.deletePairing(t);
                const {
                    message: e
                } = mo("EXPIRED", `pairing topic: ${t}`);
                throw new Error(e)
            }
        }, this.core = t, this.logger = N(e, this.name), this.pairings = new Zh(this.core, this.logger, this.name, this.storagePrefix)
    }
    get context() {
        return C(this.logger)
    }
    isInitialized() {
        if (!this.initialized) {
            const {
                message: t
            } = mo("NOT_INITIALIZED", this.name);
            throw new Error(t)
        }
    }
    registerRelayerEvents() {
        this.core.relayer.on(Vc, (async t => {
            const {
                topic: e,
                message: r
            } = t;
            if (!this.pairings.keys.includes(e) || this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(r))) return;
            const i = await this.core.crypto.decode(e, r);
            try {
                U(i) ? (this.core.history.set(e, i), this.onRelayEventRequest({
                    topic: e,
                    payload: i
                })) : b(i) && (await this.core.history.resolve(i), await this.onRelayEventResponse({
                    topic: e,
                    payload: i
                }), this.core.history.delete(e, i.id))
            } catch (n) {
                this.logger.error(n)
            }
        }))
    }
    registerExpirerEvents() {
        this.core.expirer.on(bh, (async t => {
            const {
                topic: e
            } = $t(t.target);
            e && this.pairings.keys.includes(e) && (await this.deletePairing(e, !0), this.events.emit(lh, {
                topic: e
            }))
        }))
    }
}
class eu extends $o {
    constructor(t, e) {
        super(t, e), this.core = t, this.logger = e, this.records = new Map, this.events = new i.EventEmitter, this.name = "history", this.version = "0.3", this.cached = [], this.initialized = !1, this.storagePrefix = Uc, this.init = async () => {
            this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((t => this.records.set(t.id, t))), this.cached = [], this.registerEventListeners(), this.initialized = !0)
        }, this.set = (t, e, r) => {
            if (this.isInitialized(), this.logger.debug("Setting JSON-RPC request history record"), this.logger.trace({
                    type: "method",
                    method: "set",
                    topic: t,
                    request: e,
                    chainId: r
                }), this.records.has(e.id)) return;
            const i = {
                id: e.id,
                topic: t,
                request: {
                    method: e.method,
                    params: e.params || null
                },
                chainId: r,
                expiry: Vt(c.THIRTY_DAYS)
            };
            this.records.set(i.id, i), this.persist(), this.events.emit(dh, i)
        }, this.resolve = async t => {
            if (this.isInitialized(), this.logger.debug("Updating JSON-RPC response history record"), this.logger.trace({
                    type: "method",
                    method: "update",
                    response: t
                }), !this.records.has(t.id)) return;
            const e = await this.getRecord(t.id);
            typeof e.response > "u" && (e.response = w(t) ? {
                error: t.error
            } : {
                result: t.result
            }, this.records.set(e.id, e), this.persist(), this.events.emit(gh, e))
        }, this.get = async (t, e) => (this.isInitialized(), this.logger.debug("Getting record"), this.logger.trace({
            type: "method",
            method: "get",
            topic: t,
            id: e
        }), await this.getRecord(e)), this.delete = (t, e) => {
            this.isInitialized(), this.logger.debug("Deleting record"), this.logger.trace({
                type: "method",
                method: "delete",
                id: e
            }), this.values.forEach((r => {
                if (r.topic === t) {
                    if (typeof e < "u" && r.id !== e) return;
                    this.records.delete(r.id), this.events.emit(mh, r)
                }
            })), this.persist()
        }, this.exists = async (t, e) => (this.isInitialized(), !!this.records.has(e) && (await this.getRecord(e)).topic === t), this.on = (t, e) => {
            this.events.on(t, e)
        }, this.once = (t, e) => {
            this.events.once(t, e)
        }, this.off = (t, e) => {
            this.events.off(t, e)
        }, this.removeListener = (t, e) => {
            this.events.removeListener(t, e)
        }, this.logger = N(e, this.name)
    }
    get context() {
        return C(this.logger)
    }
    get storageKey() {
        return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
    }
    get size() {
        return this.records.size
    }
    get keys() {
        return Array.from(this.records.keys())
    }
    get values() {
        return Array.from(this.records.values())
    }
    get pending() {
        const t = [];
        return this.values.forEach((e => {
            if (typeof e.response < "u") return;
            const r = {
                topic: e.topic,
                request: v(e.request.method, e.request.params, e.id),
                chainId: e.chainId
            };
            return t.push(r)
        })), t
    }
    async setJsonRpcRecords(t) {
        await this.core.storage.setItem(this.storageKey, t)
    }
    async getJsonRpcRecords() {
        return await this.core.storage.getItem(this.storageKey)
    }
    getRecord(t) {
        this.isInitialized();
        const e = this.records.get(t);
        if (!e) {
            const {
                message: e
            } = mo("NO_MATCHING_KEY", `${this.name}: ${t}`);
            throw new Error(e)
        }
        return e
    }
    async persist() {
        await this.setJsonRpcRecords(this.values), this.events.emit(vh)
    }
    async restore() {
        try {
            const t = await this.getJsonRpcRecords();
            if (typeof t > "u" || !t.length) return;
            if (this.records.size) {
                const {
                    message: t
                } = mo("RESTORE_WILL_OVERRIDE", this.name);
                throw this.logger.error(t), new Error(t)
            }
            this.cached = t, this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({
                type: "method",
                method: "restore",
                records: this.values
            })
        } catch (Yt) {
            this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(Yt)
        }
    }
    registerEventListeners() {
        this.events.on(dh, (t => {
            const e = dh;
            this.logger.info(`Emitting ${e}`), this.logger.debug({
                type: "event",
                event: e,
                record: t
            })
        })), this.events.on(gh, (t => {
            const e = gh;
            this.logger.info(`Emitting ${e}`), this.logger.debug({
                type: "event",
                event: e,
                record: t
            })
        })), this.events.on(mh, (t => {
            const e = mh;
            this.logger.info(`Emitting ${e}`), this.logger.debug({
                type: "event",
                event: e,
                record: t
            })
        })), this.core.heartbeat.on(Fo, (() => {
            this.cleanup()
        }))
    }
    cleanup() {
        try {
            this.isInitialized();
            let t = !1;
            this.records.forEach((e => {
                c.toMiliseconds(e.expiry || 0) - Date.now() <= 0 && (this.logger.info(`Deleting expired history log: ${e.id}`), this.records.delete(e.id), this.events.emit(mh, e, !1), t = !0)
            })), t && this.persist()
        } catch (Yt) {
            this.logger.warn(Yt)
        }
    }
    isInitialized() {
        if (!this.initialized) {
            const {
                message: t
            } = mo("NOT_INITIALIZED", this.name);
            throw new Error(t)
        }
    }
}
class ru extends Yo {
    constructor(t, e) {
        super(t, e), this.core = t, this.logger = e, this.expirations = new Map, this.events = new i.EventEmitter, this.name = "expirer", this.version = "0.3", this.cached = [], this.initialized = !1, this.storagePrefix = Uc, this.init = async () => {
            this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((t => this.expirations.set(t.target, t))), this.cached = [], this.registerEventListeners(), this.initialized = !0)
        }, this.has = t => {
            try {
                const e = this.formatTarget(t);
                return typeof this.getExpiration(e) < "u"
            } catch {
                return !1
            }
        }, this.set = (t, e) => {
            this.isInitialized();
            const r = this.formatTarget(t),
                i = {
                    target: r,
                    expiry: e
                };
            this.expirations.set(r, i), this.checkExpiry(r, i), this.events.emit(yh, {
                target: r,
                expiration: i
            })
        }, this.get = t => {
            this.isInitialized();
            const e = this.formatTarget(t);
            return this.getExpiration(e)
        }, this.del = t => {
            if (this.isInitialized(), this.has(t)) {
                const e = this.formatTarget(t),
                    r = this.getExpiration(e);
                this.expirations.delete(e), this.events.emit(wh, {
                    target: e,
                    expiration: r
                })
            }
        }, this.on = (t, e) => {
            this.events.on(t, e)
        }, this.once = (t, e) => {
            this.events.once(t, e)
        }, this.off = (t, e) => {
            this.events.off(t, e)
        }, this.removeListener = (t, e) => {
            this.events.removeListener(t, e)
        }, this.logger = N(e, this.name)
    }
    get context() {
        return C(this.logger)
    }
    get storageKey() {
        return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
    }
    get length() {
        return this.expirations.size
    }
    get keys() {
        return Array.from(this.expirations.keys())
    }
    get values() {
        return Array.from(this.expirations.values())
    }
    formatTarget(t) {
        if ("string" == typeof t) return function(t) {
            return Ht("topic", t)
        }(t);
        if ("number" == typeof t) return function(t) {
            return Ht("id", t)
        }(t);
        const {
            message: e
        } = mo("UNKNOWN_TYPE", "Target type: " + typeof t);
        throw new Error(e)
    }
    async setExpirations(t) {
        await this.core.storage.setItem(this.storageKey, t)
    }
    async getExpirations() {
        return await this.core.storage.getItem(this.storageKey)
    }
    async persist() {
        await this.setExpirations(this.values), this.events.emit(Ah)
    }
    async restore() {
        try {
            const t = await this.getExpirations();
            if (typeof t > "u" || !t.length) return;
            if (this.expirations.size) {
                const {
                    message: t
                } = mo("RESTORE_WILL_OVERRIDE", this.name);
                throw this.logger.error(t), new Error(t)
            }
            this.cached = t, this.logger.debug(`Successfully Restored expirations for ${this.name}`), this.logger.trace({
                type: "method",
                method: "restore",
                expirations: this.values
            })
        } catch (Yt) {
            this.logger.debug(`Failed to Restore expirations for ${this.name}`), this.logger.error(Yt)
        }
    }
    getExpiration(t) {
        const e = this.expirations.get(t);
        if (!e) {
            const {
                message: e
            } = mo("NO_MATCHING_KEY", `${this.name}: ${t}`);
            throw this.logger.warn(e), new Error(e)
        }
        return e
    }
    checkExpiry(t, e) {
        const {
            expiry: r
        } = e;
        c.toMiliseconds(r) - Date.now() <= 0 && this.expire(t, e)
    }
    expire(t, e) {
        this.expirations.delete(t), this.events.emit(bh, {
            target: t,
            expiration: e
        })
    }
    checkExpirations() {
        this.core.relayer.connected && this.expirations.forEach(((t, e) => this.checkExpiry(e, t)))
    }
    registerEventListeners() {
        this.core.heartbeat.on(Fo, (() => this.checkExpirations())), this.events.on(yh, (t => {
            const e = yh;
            this.logger.info(`Emitting ${e}`), this.logger.debug({
                type: "event",
                event: e,
                data: t
            }), this.persist()
        })), this.events.on(bh, (t => {
            const e = bh;
            this.logger.info(`Emitting ${e}`), this.logger.debug({
                type: "event",
                event: e,
                data: t
            }), this.persist()
        })), this.events.on(wh, (t => {
            const e = wh;
            this.logger.info(`Emitting ${e}`), this.logger.debug({
                type: "event",
                event: e,
                data: t
            }), this.persist()
        }))
    }
    isInitialized() {
        if (!this.initialized) {
            const {
                message: t
            } = mo("NOT_INITIALIZED", this.name);
            throw new Error(t)
        }
    }
}
class iu extends Xo {
    constructor(t, e) {
        super(t, e), this.projectId = t, this.logger = e, this.name = _h, this.initialized = !1, this.queue = [], this.verifyDisabled = !1, this.init = async t => {
            if (this.verifyDisabled || qt() || !Dt()) return;
            const e = this.getVerifyUrl(null == t ? void 0 : t.verifyUrl);
            this.verifyUrl !== e && this.removeIframe(), this.verifyUrl = e;
            try {
                await this.createIframe()
            } catch (r) {
                this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.info(r)
            }
            if (!this.initialized) {
                this.removeIframe(), this.verifyUrl = Ih;
                try {
                    await this.createIframe()
                } catch (r) {
                    this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.info(r), this.verifyDisabled = !0
                }
            }
        }, this.register = async t => {
            this.initialized ? this.sendPost(t.attestationId) : (this.addToQueue(t.attestationId), await this.init())
        }, this.resolve = async t => {
            if (this.isDevEnv) return "";
            const e = this.getVerifyUrl(null == t ? void 0 : t.verifyUrl);
            let r;
            try {
                r = await this.fetchAttestation(t.attestationId, e)
            } catch (i) {
                this.logger.info(`failed to resolve attestation: ${t.attestationId} from url: ${e}`), this.logger.info(i), r = await this.fetchAttestation(t.attestationId, Ih)
            }
            return r
        }, this.fetchAttestation = async (t, e) => {
            this.logger.info(`resolving attestation: ${t} from url: ${e}`);
            const r = this.startAbortTimer(2 * c.ONE_SECOND),
                i = await fetch(`${e}/attestation/${t}`, {
                    signal: this.abortController.signal
                });
            return clearTimeout(r), 200 === i.status ? await i.json() : void 0
        }, this.addToQueue = t => {
            this.queue.push(t)
        }, this.processQueue = () => {
            0 !== this.queue.length && (this.queue.forEach((t => this.sendPost(t))), this.queue = [])
        }, this.sendPost = t => {
            var e;
            try {
                if (!this.iframe) return;
                null == (e = this.iframe.contentWindow) || e.postMessage(t, "*"), this.logger.info(`postMessage sent: ${t} ${this.verifyUrl}`)
            } catch {}
        }, this.createIframe = async () => {
            let t;
            const e = r => {
                "verify_ready" === r.data && (this.onInit(), window.removeEventListener("message", e), t())
            };
            await Promise.race([new Promise((r => {
                const i = document.getElementById(_h);
                if (i) return this.iframe = i, this.onInit(), r();
                window.addEventListener("message", e);
                const n = document.createElement("iframe");
                n.id = _h, n.src = `${this.verifyUrl}/${this.projectId}`, n.style.display = "none", document.body.append(n), this.iframe = n, t = r
            })), new Promise(((t, r) => setTimeout((() => {
                window.removeEventListener("message", e), r("verify iframe load timeout")
            }), c.toMiliseconds(c.FIVE_SECONDS))))])
        }, this.onInit = () => {
            this.initialized = !0, this.processQueue()
        }, this.removeIframe = () => {
            this.iframe && (this.iframe.remove(), this.iframe = void 0, this.initialized = !1)
        }, this.getVerifyUrl = t => {
            let e = t || Eh;
            return Sh.includes(e) || (this.logger.info(`verify url: ${e}, not included in trusted list, assigning default: ${Eh}`), e = Eh), e
        }, this.logger = N(e, this.name), this.verifyUrl = Eh, this.abortController = new AbortController, this.isDevEnv = Tt() && ha.IS_VITEST
    }
    get context() {
        return C(this.logger)
    }
    startAbortTimer(t) {
        return this.abortController = new AbortController, setTimeout((() => this.abortController.abort()), c.toMiliseconds(t))
    }
}
let nu = class extends Zo {
    constructor(t, e) {
        super(t, e), this.projectId = t, this.logger = e, this.context = "echo", this.registerDeviceToken = async t => {
            const {
                clientId: e,
                token: r,
                notificationType: i,
                enableEncrypted: n = !1
            } = t, s = `https://echo.walletconnect.com/${this.projectId}/clients`;
            await ca(s, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    client_id: e,
                    type: i,
                    token: r,
                    always_raw: n
                })
            })
        }, this.logger = N(e, this.context)
    }
};
var su = Object.defineProperty,
    ou = Object.getOwnPropertySymbols,
    au = Object.prototype.hasOwnProperty,
    cu = Object.prototype.propertyIsEnumerable,
    hu = (t, e, r) => e in t ? su(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : t[e] = r,
    uu = (t, e) => {
        for (var r in e || (e = {})) au.call(e, r) && hu(t, r, e[r]);
        if (ou)
            for (var r of ou(e)) cu.call(e, r) && hu(t, r, e[r]);
        return t
    };
const lu = class t extends Ho {
        constructor(t) {
            var e;
            super(t), this.protocol = "wc", this.version = 2, this.name = Bc, this.events = new i.EventEmitter, this.initialized = !1, this.on = (t, e) => this.events.on(t, e), this.once = (t, e) => this.events.once(t, e), this.off = (t, e) => this.events.off(t, e), this.removeListener = (t, e) => this.events.removeListener(t, e), this.projectId = null == t ? void 0 : t.projectId, this.relayUrl = (null == t ? void 0 : t.relayUrl) || Hc, this.customStoragePrefix = null != t && t.customStoragePrefix ? `:${t.customStoragePrefix}` : "";
            const r = O({
                    level: "string" == typeof(null == t ? void 0 : t.logger) && t.logger ? t.logger : jc
                }),
                {
                    logger: n,
                    chunkLoggerController: s
                } = R({
                    opts: r,
                    maxSizeInBytes: null == t ? void 0 : t.maxLogBlobSizeInBytes,
                    loggerOverride: null == t ? void 0 : t.logger
                });
            this.logChunkController = s, null != (e = this.logChunkController) && e.downloadLogsBlobInBrowser && (window.downloadLogsBlobInBrowser = async () => {
                var t, e;
                null != (t = this.logChunkController) && t.downloadLogsBlobInBrowser && (null == (e = this.logChunkController) || e.downloadLogsBlobInBrowser({
                    clientId: await this.crypto.getClientId()
                }))
            }), this.logger = N(n, this.name), this.heartbeat = new Ko, this.crypto = new Ph(this, this.logger, null == t ? void 0 : t.keychain), this.history = new eu(this, this.logger), this.expirer = new ru(this, this.logger), this.storage = null != t && t.storage ? t.storage : new T(uu(uu({}, zc), null == t ? void 0 : t.storageOptions)), this.relayer = new Vh({
                core: this,
                logger: this.logger,
                relayUrl: this.relayUrl,
                projectId: this.projectId
            }), this.pairing = new tu(this, this.logger), this.verify = new iu(this.projectId || "", this.logger), this.echoClient = new nu(this.projectId || "", this.logger)
        }
        static async init(e) {
            const r = new t(e);
            await r.initialize();
            const i = await r.crypto.getClientId();
            return await r.storage.setItem("WALLETCONNECT_CLIENT_ID", i), r
        }
        get context() {
            return C(this.logger)
        }
        async start() {
            this.initialized || await this.initialize()
        }
        async getLogsBlob() {
            var t;
            return null == (t = this.logChunkController) ? void 0 : t.logsToBlob({
                clientId: await this.crypto.getClientId()
            })
        }
        async initialize() {
            this.logger.trace("Initialized");
            try {
                await this.crypto.init(), await this.history.init(), await this.expirer.init(), await this.relayer.init(), await this.heartbeat.init(), await this.pairing.init(), this.initialized = !0, this.logger.info("Core Initialization Success")
            } catch (Yt) {
                throw this.logger.warn(`Core Initialization Failure at epoch ${Date.now()}`, Yt), this.logger.error(Yt.message), Yt
            }
        }
    },
    fu = "client",
    pu = `wc@2:${fu}:`,
    du = fu,
    gu = "error",
    mu = "WALLETCONNECT_DEEPLINK_CHOICE",
    vu = "Proposal expired",
    yu = c.SEVEN_DAYS,
    wu = {
        wc_sessionPropose: {
            req: {
                ttl: c.FIVE_MINUTES,
                prompt: !0,
                tag: 1100
            },
            res: {
                ttl: c.FIVE_MINUTES,
                prompt: !1,
                tag: 1101
            },
            reject: {
                ttl: c.FIVE_MINUTES,
                prompt: !1,
                tag: 1120
            },
            autoReject: {
                ttl: c.FIVE_MINUTES,
                prompt: !1,
                tag: 1121
            }
        },
        wc_sessionSettle: {
            req: {
                ttl: c.FIVE_MINUTES,
                prompt: !1,
                tag: 1102
            },
            res: {
                ttl: c.FIVE_MINUTES,
                prompt: !1,
                tag: 1103
            }
        },
        wc_sessionUpdate: {
            req: {
                ttl: c.ONE_DAY,
                prompt: !1,
                tag: 1104
            },
            res: {
                ttl: c.ONE_DAY,
                prompt: !1,
                tag: 1105
            }
        },
        wc_sessionExtend: {
            req: {
                ttl: c.ONE_DAY,
                prompt: !1,
                tag: 1106
            },
            res: {
                ttl: c.ONE_DAY,
                prompt: !1,
                tag: 1107
            }
        },
        wc_sessionRequest: {
            req: {
                ttl: c.FIVE_MINUTES,
                prompt: !0,
                tag: 1108
            },
            res: {
                ttl: c.FIVE_MINUTES,
                prompt: !1,
                tag: 1109
            }
        },
        wc_sessionEvent: {
            req: {
                ttl: c.FIVE_MINUTES,
                prompt: !0,
                tag: 1110
            },
            res: {
                ttl: c.FIVE_MINUTES,
                prompt: !1,
                tag: 1111
            }
        },
        wc_sessionDelete: {
            req: {
                ttl: c.ONE_DAY,
                prompt: !1,
                tag: 1112
            },
            res: {
                ttl: c.ONE_DAY,
                prompt: !1,
                tag: 1113
            }
        },
        wc_sessionPing: {
            req: {
                ttl: c.ONE_DAY,
                prompt: !1,
                tag: 1114
            },
            res: {
                ttl: c.ONE_DAY,
                prompt: !1,
                tag: 1115
            }
        },
        wc_sessionAuthenticate: {
            req: {
                ttl: c.ONE_HOUR,
                prompt: !0,
                tag: 1116
            },
            res: {
                ttl: c.ONE_HOUR,
                prompt: !1,
                tag: 1117
            },
            reject: {
                ttl: c.FIVE_MINUTES,
                prompt: !1,
                tag: 1118
            },
            autoReject: {
                ttl: c.FIVE_MINUTES,
                prompt: !1,
                tag: 1119
            }
        }
    },
    bu = {
        min: c.FIVE_MINUTES,
        max: c.SEVEN_DAYS
    },
    Au = "IDLE",
    _u = "ACTIVE",
    Eu = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest"],
    Iu = "wc@1.5:auth:",
    Su = `${Iu}:PUB_KEY`;
var Mu = Object.defineProperty,
    Pu = Object.defineProperties,
    xu = Object.getOwnPropertyDescriptors,
    Nu = Object.getOwnPropertySymbols,
    Cu = Object.prototype.hasOwnProperty,
    Ou = Object.prototype.propertyIsEnumerable,
    Ru = (t, e, r) => e in t ? Mu(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : t[e] = r,
    Tu = (t, e) => {
        for (var r in e || (e = {})) Cu.call(e, r) && Ru(t, r, e[r]);
        if (Nu)
            for (var r of Nu(e)) Ou.call(e, r) && Ru(t, r, e[r]);
        return t
    },
    qu = (t, e) => Pu(t, xu(e));
class Du extends ea {
    constructor(t) {
        super(t), this.name = "engine", this.events = new n, this.initialized = !1, this.requestQueue = {
            state: Au,
            queue: []
        }, this.sessionRequestQueue = {
            state: Au,
            queue: []
        }, this.requestQueueDelay = c.ONE_SECOND, this.expectedPairingMethodMap = new Map, this.recentlyDeletedMap = new Map, this.recentlyDeletedLimit = 200, this.init = async () => {
            this.initialized || (await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.registerPairingEvents(), this.client.core.pairing.register({
                methods: Object.keys(wu)
            }), this.initialized = !0, setTimeout((() => {
                this.sessionRequestQueue.queue = this.getPendingSessionRequests(), this.processSessionRequestQueue()
            }), c.toMiliseconds(this.requestQueueDelay)))
        }, this.connect = async t => {
            await this.isInitialized();
            const e = qu(Tu({}, t), {
                requiredNamespaces: t.requiredNamespaces || {},
                optionalNamespaces: t.optionalNamespaces || {}
            });
            await this.isValidConnect(e);
            const {
                pairingTopic: r,
                requiredNamespaces: i,
                optionalNamespaces: n,
                sessionProperties: s,
                relays: o
            } = e;
            let a, h = r,
                u = !1;
            try {
                h && (u = this.client.core.pairing.pairings.get(h).active)
            } catch (w) {
                throw this.client.logger.error(`connect() -> pairing.get(${h}) failed`), w
            }
            if (!h || !u) {
                const {
                    topic: t,
                    uri: e
                } = await this.client.core.pairing.create();
                h = t, a = e
            }
            if (!h) {
                const {
                    message: t
                } = mo("NO_MATCHING_KEY", `connect() pairing topic: ${h}`);
                throw new Error(t)
            }
            const l = await this.client.core.crypto.generateKeyPair(),
                f = wu.wc_sessionPropose.req.ttl || c.FIVE_MINUTES,
                p = Vt(f),
                d = Tu({
                    requiredNamespaces: i,
                    optionalNamespaces: n,
                    relays: o ? ? [{
                        protocol: "irn"
                    }],
                    proposer: {
                        publicKey: l,
                        metadata: this.client.metadata
                    },
                    expiryTimestamp: p,
                    pairingTopic: h
                }, s && {
                    sessionProperties: s
                }),
                {
                    reject: g,
                    resolve: m,
                    done: v
                } = Ft(f, vu);
            this.events.once(Wt("session_connect"), (async ({
                error: t,
                session: e
            }) => {
                if (t) g(t);
                else if (e) {
                    e.self.publicKey = l;
                    const t = qu(Tu({}, e), {
                        pairingTopic: d.pairingTopic,
                        requiredNamespaces: d.requiredNamespaces,
                        optionalNamespaces: d.optionalNamespaces
                    });
                    await this.client.session.set(e.topic, t), await this.setExpiry(e.topic, e.expiry), h && await this.client.core.pairing.updateMetadata({
                        topic: h,
                        metadata: e.peer.metadata
                    }), this.cleanupDuplicatePairings(t), m(t)
                }
            }));
            const y = await this.sendRequest({
                topic: h,
                method: "wc_sessionPropose",
                params: d,
                throwOnFailedPublish: !0
            });
            return await this.setProposal(y, Tu({
                id: y
            }, d)), {
                uri: a,
                approval: v
            }
        }, this.pair = async t => {
            await this.isInitialized();
            try {
                return await this.client.core.pairing.pair(t)
            } catch (Yt) {
                throw this.client.logger.error("pair() failed"), Yt
            }
        }, this.approve = async t => {
            await this.isInitialized();
            try {
                await this.isValidApprove(t)
            } catch (m) {
                throw this.client.logger.error("approve() -> isValidApprove() failed"), m
            }
            const {
                id: e,
                relayProtocol: r,
                namespaces: i,
                sessionProperties: n,
                sessionConfig: s
            } = t;
            let o;
            try {
                o = this.client.proposal.get(e)
            } catch (m) {
                throw this.client.logger.error(`approve() -> proposal.get(${e}) failed`), m
            }
            const {
                pairingTopic: a,
                proposer: c,
                requiredNamespaces: h,
                optionalNamespaces: u
            } = o, l = await this.client.core.crypto.generateKeyPair(), f = c.publicKey, p = await this.client.core.crypto.generateSharedKey(l, f), d = Tu(Tu({
                relay: {
                    protocol: r ? ? "irn"
                },
                namespaces: i,
                controller: {
                    publicKey: l,
                    metadata: this.client.metadata
                },
                expiry: Vt(yu)
            }, n && {
                sessionProperties: n
            }), s && {
                sessionConfig: s
            });
            await this.client.core.relayer.subscribe(p);
            const g = qu(Tu({}, d), {
                topic: p,
                requiredNamespaces: h,
                optionalNamespaces: u,
                pairingTopic: a,
                acknowledged: !1,
                self: d.controller,
                peer: {
                    publicKey: c.publicKey,
                    metadata: c.metadata
                },
                controller: l
            });
            await this.client.session.set(p, g);
            try {
                await this.sendResult({
                    id: e,
                    topic: a,
                    result: {
                        relay: {
                            protocol: r ? ? "irn"
                        },
                        responderPublicKey: l
                    },
                    throwOnFailedPublish: !0
                }), await this.sendRequest({
                    topic: p,
                    method: "wc_sessionSettle",
                    params: d,
                    throwOnFailedPublish: !0
                })
            } catch (m) {
                throw this.client.logger.error(m), this.client.session.delete(p, vo("USER_DISCONNECTED")), await this.client.core.relayer.unsubscribe(p), m
            }
            return await this.client.core.pairing.updateMetadata({
                topic: a,
                metadata: c.metadata
            }), await this.client.proposal.delete(e, vo("USER_DISCONNECTED")), await this.client.core.pairing.activate({
                topic: a
            }), await this.setExpiry(p, Vt(yu)), {
                topic: p,
                acknowledged: () => new Promise((t => setTimeout((() => t(this.client.session.get(p))), 500)))
            }
        }, this.reject = async t => {
            await this.isInitialized();
            try {
                await this.isValidReject(t)
            } catch (n) {
                throw this.client.logger.error("reject() -> isValidReject() failed"), n
            }
            const {
                id: e,
                reason: r
            } = t;
            let i;
            try {
                i = this.client.proposal.get(e).pairingTopic
            } catch (n) {
                throw this.client.logger.error(`reject() -> proposal.get(${e}) failed`), n
            }
            i && (await this.sendError({
                id: e,
                topic: i,
                error: r,
                rpcOpts: wu.wc_sessionPropose.reject
            }), await this.client.proposal.delete(e, vo("USER_DISCONNECTED")))
        }, this.update = async t => {
            await this.isInitialized();
            try {
                await this.isValidUpdate(t)
            } catch (h) {
                throw this.client.logger.error("update() -> isValidUpdate() failed"), h
            }
            const {
                topic: e,
                namespaces: r
            } = t, {
                done: i,
                resolve: n,
                reject: s
            } = Ft(), o = L(), a = y().toString(), c = this.client.session.get(e).namespaces;
            return this.events.once(Wt("session_update", o), (({
                error: t
            }) => {
                t ? s(t) : n()
            })), await this.client.session.update(e, {
                namespaces: r
            }), await this.sendRequest({
                topic: e,
                method: "wc_sessionUpdate",
                params: {
                    namespaces: r
                },
                throwOnFailedPublish: !0,
                clientRpcId: o,
                relayRpcId: a
            }).catch((t => {
                this.client.logger.error(t), this.client.session.update(e, {
                    namespaces: c
                }), s(t)
            })), {
                acknowledged: i
            }
        }, this.extend = async t => {
            await this.isInitialized();
            try {
                await this.isValidExtend(t)
            } catch (o) {
                throw this.client.logger.error("extend() -> isValidExtend() failed"), o
            }
            const {
                topic: e
            } = t, r = L(), {
                done: i,
                resolve: n,
                reject: s
            } = Ft();
            return this.events.once(Wt("session_extend", r), (({
                error: t
            }) => {
                t ? s(t) : n()
            })), await this.setExpiry(e, Vt(yu)), this.sendRequest({
                topic: e,
                method: "wc_sessionExtend",
                params: {},
                clientRpcId: r,
                throwOnFailedPublish: !0
            }).catch((t => {
                s(t)
            })), {
                acknowledged: i
            }
        }, this.request = async t => {
            await this.isInitialized();
            try {
                await this.isValidRequest(t)
            } catch (l) {
                throw this.client.logger.error("request() -> isValidRequest() failed"), l
            }
            const {
                chainId: e,
                request: r,
                topic: i,
                expiry: n = wu.wc_sessionRequest.req.ttl
            } = t, s = this.client.session.get(i), o = L(), a = y().toString(), {
                done: c,
                resolve: h,
                reject: u
            } = Ft(n, "Request expired. Please try again.");
            return this.events.once(Wt("session_request", o), (({
                error: t,
                result: e
            }) => {
                t ? u(t) : h(e)
            })), await Promise.all([new Promise((async t => {
                await this.sendRequest({
                    clientRpcId: o,
                    relayRpcId: a,
                    topic: i,
                    method: "wc_sessionRequest",
                    params: {
                        request: qu(Tu({}, r), {
                            expiryTimestamp: Vt(n)
                        }),
                        chainId: e
                    },
                    expiry: n,
                    throwOnFailedPublish: !0
                }).catch((t => u(t))), this.client.events.emit("session_request_sent", {
                    topic: i,
                    request: r,
                    chainId: e,
                    id: o
                }), t()
            })), new Promise((async t => {
                var e;
                if (null == (e = s.sessionConfig) || !e.disableDeepLink) {
                    const t = await async function(t, e) {
                        try {
                            return await t.getItem(e) || (Dt() ? localStorage.getItem(e) : void 0)
                        } catch (n) {
                            console.error(n)
                        }
                    }(this.client.core.storage, mu);
                    !async function({
                        id: t,
                        topic: e,
                        wcDeepLink: r
                    }) {
                        try {
                            if (!r) return;
                            const i = "string" == typeof r ? JSON.parse(r) : r;
                            let n = null == i ? void 0 : i.href;
                            if ("string" != typeof n) return;
                            n.endsWith("/") && (n = n.slice(0, -1));
                            const s = `${n}/wc?requestId=${t}&sessionTopic=${e}`,
                                o = kt();
                            o === Ct ? s.startsWith("https://") || s.startsWith("http://") ? window.open(s, "_blank", "noreferrer noopener") : window.open(s, "_self", "noreferrer noopener") : o === xt && typeof(null == global ? void 0 : global.Linking) < "u" && await global.Linking.openURL(s)
                        } catch (i) {
                            console.error(i)
                        }
                    }({
                        id: o,
                        topic: i,
                        wcDeepLink: t
                    })
                }
                t()
            })), c()]).then((t => t[2]))
        }, this.respond = async t => {
            await this.isInitialized(), await this.isValidRespond(t);
            const {
                topic: e,
                response: r
            } = t, {
                id: i
            } = r;
            z(r) ? await this.sendResult({
                id: i,
                topic: e,
                result: r.result,
                throwOnFailedPublish: !0
            }) : w(r) && await this.sendError({
                id: i,
                topic: e,
                error: r.error
            }), this.cleanupAfterResponse(t)
        }, this.ping = async t => {
            await this.isInitialized();
            try {
                await this.isValidPing(t)
            } catch (r) {
                throw this.client.logger.error("ping() -> isValidPing() failed"), r
            }
            const {
                topic: e
            } = t;
            if (this.client.session.keys.includes(e)) {
                const t = L(),
                    r = y().toString(),
                    {
                        done: i,
                        resolve: n,
                        reject: s
                    } = Ft();
                this.events.once(Wt("session_ping", t), (({
                    error: t
                }) => {
                    t ? s(t) : n()
                })), await Promise.all([this.sendRequest({
                    topic: e,
                    method: "wc_sessionPing",
                    params: {},
                    throwOnFailedPublish: !0,
                    clientRpcId: t,
                    relayRpcId: r
                }), i()])
            } else this.client.core.pairing.pairings.keys.includes(e) && await this.client.core.pairing.ping({
                topic: e
            })
        }, this.emit = async t => {
            await this.isInitialized(), await this.isValidEmit(t);
            const {
                topic: e,
                event: r,
                chainId: i
            } = t, n = y().toString();
            await this.sendRequest({
                topic: e,
                method: "wc_sessionEvent",
                params: {
                    event: r,
                    chainId: i
                },
                throwOnFailedPublish: !0,
                relayRpcId: n
            })
        }, this.disconnect = async t => {
            await this.isInitialized(), await this.isValidDisconnect(t);
            const {
                topic: e
            } = t;
            if (this.client.session.keys.includes(e)) await this.sendRequest({
                topic: e,
                method: "wc_sessionDelete",
                params: vo("USER_DISCONNECTED"),
                throwOnFailedPublish: !0
            }), await this.deleteSession({
                topic: e,
                emitEvent: !1
            });
            else {
                if (!this.client.core.pairing.pairings.keys.includes(e)) {
                    const {
                        message: t
                    } = mo("MISMATCHED_TOPIC", `Session or pairing topic not found: ${e}`);
                    throw new Error(t)
                }
                await this.client.core.pairing.disconnect({
                    topic: e
                })
            }
        }, this.find = t => (this.isInitialized(), this.client.session.getAll().filter((e => function(t, e) {
            const {
                requiredNamespaces: r
            } = e, i = Object.keys(t.namespaces), n = Object.keys(r);
            let s = !0;
            return !!jt(n, i) && (i.forEach((e => {
                const {
                    accounts: i,
                    methods: n,
                    events: o
                } = t.namespaces[e], a = ho(i), c = r[e];
                jt(At(e, c), a) && jt(c.methods, n) && jt(c.events, o) || (s = !1)
            })), s)
        }(e, t)))), this.getPendingSessionRequests = () => this.client.pendingRequest.getAll(), this.authenticate = async t => {
            this.isInitialized(), this.isValidAuthenticate(t);
            const {
                chains: e,
                statement: r = "",
                uri: i,
                domain: n,
                nonce: s,
                type: o,
                exp: a,
                nbf: c,
                methods: h = [],
                expiry: u
            } = t, l = [...t.resources || []], {
                topic: f,
                uri: p
            } = await this.client.core.pairing.create({
                methods: ["wc_sessionAuthenticate"]
            });
            this.client.logger.info({
                message: "Generated new pairing",
                pairing: {
                    topic: f,
                    uri: p
                }
            });
            const d = await this.client.core.crypto.generateKeyPair(),
                g = Fs(d);
            if (await Promise.all([this.client.auth.authKeys.set(Su, {
                    responseTopic: g,
                    publicKey: d
                }), this.client.auth.pairingTopics.set(g, {
                    topic: g,
                    pairingTopic: f
                })]), await this.client.core.relayer.subscribe(g), this.client.logger.info(`sending request to new pairing topic: ${f}`), h.length > 0) {
                const {
                    namespace: t
                } = wt(e[0]);
                let r = Rs(t, "request", h);
                ks(l) && (r = Ts(r, l.pop())), l.push(r)
            }
            const m = u && u > wu.wc_sessionAuthenticate.req.ttl ? u : wu.wc_sessionAuthenticate.req.ttl,
                v = {
                    authPayload: {
                        type: o ? ? "caip122",
                        chains: e,
                        statement: r,
                        aud: i,
                        domain: n,
                        version: "1",
                        nonce: s,
                        iat: (new Date).toISOString(),
                        exp: a,
                        nbf: c,
                        resources: l
                    },
                    requester: {
                        publicKey: d,
                        metadata: this.client.metadata
                    },
                    expiryTimestamp: Vt(m)
                },
                y = {
                    requiredNamespaces: {},
                    optionalNamespaces: {
                        eip155: {
                            chains: e,
                            methods: [...new Set(["personal_sign", ...h])],
                            events: ["chainChanged", "accountsChanged"]
                        }
                    },
                    relays: [{
                        protocol: "irn"
                    }],
                    pairingTopic: f,
                    proposer: {
                        publicKey: d,
                        metadata: this.client.metadata
                    },
                    expiryTimestamp: Vt(wu.wc_sessionPropose.req.ttl)
                },
                {
                    done: w,
                    resolve: b,
                    reject: A
                } = Ft(m, "Request expired"),
                _ = async ({
                    error: t,
                    session: e
                }) => {
                    if (this.events.off(Wt("session_request", I), E), t) A(t);
                    else if (e) {
                        e.self.publicKey = d, await this.client.session.set(e.topic, e), await this.setExpiry(e.topic, e.expiry), f && await this.client.core.pairing.updateMetadata({
                            topic: f,
                            metadata: e.peer.metadata
                        });
                        const t = this.client.session.get(e.topic);
                        await this.deleteProposal(S), b({
                            session: t
                        })
                    }
                },
                E = async t => {
                    if (await this.deletePendingAuthRequest(I, {
                            message: "fulfilled",
                            code: 0
                        }), t.error) {
                        const e = vo("WC_METHOD_UNSUPPORTED", "wc_sessionAuthenticate");
                        return t.error.code === e.code ? void 0 : (this.events.off(Wt("session_connect"), _), A(t.error.message))
                    }
                    await this.deleteProposal(S), this.events.off(Wt("session_connect"), _);
                    const {
                        cacaos: e,
                        responder: r
                    } = t.result, i = [], n = [];
                    for (const a of e) {
                        await Ms({
                            cacao: a,
                            projectId: this.client.core.projectId
                        }) || (this.client.logger.error(a, "Signature verification failed"), A(vo("SESSION_SETTLEMENT_FAILED", "Signature verification failed")));
                        const {
                            p: t
                        } = a, e = ks(t.resources), r = [Is(t.iss)], s = Ss(t.iss);
                        if (e) {
                            const t = qs(e),
                                n = Ds(e);
                            i.push(...t), r.push(...n)
                        }
                        for (const i of r) n.push(`${i}:${s}`)
                    }
                    const s = await this.client.core.crypto.generateSharedKey(d, r.publicKey);
                    let o;
                    i.length > 0 && (o = {
                        topic: s,
                        acknowledged: !0,
                        self: {
                            publicKey: d,
                            metadata: this.client.metadata
                        },
                        peer: r,
                        controller: r.publicKey,
                        expiry: Vt(yu),
                        requiredNamespaces: {},
                        optionalNamespaces: {},
                        relay: {
                            protocol: "irn"
                        },
                        pairingTopic: f,
                        namespaces: fo([...new Set(i)], [...new Set(n)])
                    }, await this.client.core.relayer.subscribe(s), await this.client.session.set(s, o), o = this.client.session.get(s)), b({
                        auths: e,
                        session: o
                    })
                },
                I = L(),
                S = L();
            this.events.once(Wt("session_connect"), _), this.events.once(Wt("session_request", I), E);
            try {
                await Promise.all([this.sendRequest({
                    topic: f,
                    method: "wc_sessionAuthenticate",
                    params: v,
                    expiry: t.expiry,
                    throwOnFailedPublish: !0,
                    clientRpcId: I
                }), this.sendRequest({
                    topic: f,
                    method: "wc_sessionPropose",
                    params: y,
                    expiry: wu.wc_sessionPropose.req.ttl,
                    throwOnFailedPublish: !0,
                    clientRpcId: S
                })])
            } catch (M) {
                throw this.events.off(Wt("session_connect"), _), this.events.off(Wt("session_request", I), E), M
            }
            return await this.setProposal(S, Tu({
                id: S
            }, y)), await this.setAuthRequest(I, {
                request: qu(Tu({}, v), {
                    verifyContext: {}
                }),
                pairingTopic: f
            }), {
                uri: p,
                response: w
            }
        }, this.approveSessionAuthenticate = async t => {
            this.isInitialized();
            const {
                id: e,
                auths: r
            } = t, i = this.getPendingAuthRequest(e);
            if (!i) throw new Error(`Could not find pending auth request with id ${e}`);
            const n = i.requester.publicKey,
                s = await this.client.core.crypto.generateKeyPair(),
                o = Fs(n),
                a = {
                    type: 1,
                    receiverPublicKey: n,
                    senderPublicKey: s
                },
                c = [],
                h = [];
            for (const f of r) {
                if (!(await Ms({
                        cacao: f,
                        projectId: this.client.core.projectId
                    }))) {
                    const t = vo("SESSION_SETTLEMENT_FAILED", "Signature verification failed");
                    throw await this.sendError({
                        id: e,
                        topic: o,
                        error: t,
                        encodeOpts: a
                    }), new Error(t.message)
                }
                const {
                    p: t
                } = f, r = ks(t.resources), i = [Is(t.iss)], n = Ss(t.iss);
                if (r) {
                    const t = qs(r),
                        e = Ds(r);
                    c.push(...t), i.push(...e)
                }
                for (const e of i) h.push(`${e}:${n}`)
            }
            const u = await this.client.core.crypto.generateSharedKey(s, n);
            let l;
            return (null == c ? void 0 : c.length) > 0 && (l = {
                topic: u,
                acknowledged: !0,
                self: {
                    publicKey: s,
                    metadata: this.client.metadata
                },
                peer: {
                    publicKey: n,
                    metadata: i.requester.metadata
                },
                controller: n,
                expiry: Vt(yu),
                authentication: r,
                requiredNamespaces: {},
                optionalNamespaces: {},
                relay: {
                    protocol: "irn"
                },
                pairingTopic: "",
                namespaces: fo([...new Set(c)], [...new Set(h)])
            }, await this.client.core.relayer.subscribe(u), await this.client.session.set(u, l)), await this.sendResult({
                topic: o,
                id: e,
                result: {
                    cacaos: r,
                    responder: {
                        publicKey: s,
                        metadata: this.client.metadata
                    }
                },
                encodeOpts: a,
                throwOnFailedPublish: !0
            }), await this.client.auth.requests.delete(e, {
                message: "fulfilled",
                code: 0
            }), await this.client.core.pairing.activate({
                topic: i.pairingTopic
            }), {
                session: l
            }
        }, this.rejectSessionAuthenticate = async t => {
            await this.isInitialized();
            const {
                id: e,
                reason: r
            } = t, i = this.getPendingAuthRequest(e);
            if (!i) throw new Error(`Could not find pending auth request with id ${e}`);
            const n = i.requester.publicKey,
                s = await this.client.core.crypto.generateKeyPair(),
                o = Fs(n),
                a = {
                    type: 1,
                    receiverPublicKey: n,
                    senderPublicKey: s
                };
            await this.sendError({
                id: e,
                topic: o,
                error: r,
                encodeOpts: a,
                rpcOpts: wu.wc_sessionAuthenticate.reject
            }), await this.client.auth.requests.delete(e, {
                message: "rejected",
                code: 0
            }), await this.client.proposal.delete(e, vo("USER_DISCONNECTED"))
        }, this.formatAuthMessage = t => {
            this.isInitialized();
            const {
                request: e,
                iss: r
            } = t;
            return Ps(e, r)
        }, this.cleanupDuplicatePairings = async t => {
            if (t.pairingTopic) try {
                const e = this.client.core.pairing.pairings.get(t.pairingTopic),
                    r = this.client.core.pairing.pairings.getAll().filter((r => {
                        var i, n;
                        return (null == (i = r.peerMetadata) ? void 0 : i.url) && (null == (n = r.peerMetadata) ? void 0 : n.url) === t.peer.metadata.url && r.topic && r.topic !== e.topic
                    }));
                if (0 === r.length) return;
                this.client.logger.info(`Cleaning up ${r.length} duplicate pairing(s)`), await Promise.all(r.map((t => this.client.core.pairing.disconnect({
                    topic: t.topic
                })))), this.client.logger.info("Duplicate pairings clean up finished")
            } catch (Yt) {
                this.client.logger.error(Yt)
            }
        }, this.deleteSession = async t => {
            var e;
            const {
                topic: r,
                expirerHasDeleted: i = !1,
                emitEvent: n = !0,
                id: s = 0
            } = t, {
                self: o
            } = this.client.session.get(r);
            await this.client.core.relayer.unsubscribe(r), await this.client.session.delete(r, vo("USER_DISCONNECTED")), this.addToRecentlyDeleted(r, "session"), this.client.core.crypto.keychain.has(o.publicKey) && await this.client.core.crypto.deleteKeyPair(o.publicKey), this.client.core.crypto.keychain.has(r) && await this.client.core.crypto.deleteSymKey(r), i || this.client.core.expirer.del(r), this.client.core.storage.removeItem(mu).catch((t => this.client.logger.warn(t))), this.getPendingSessionRequests().forEach((t => {
                t.topic === r && this.deletePendingSessionRequest(t.id, vo("USER_DISCONNECTED"))
            })), r === (null == (e = this.sessionRequestQueue.queue[0]) ? void 0 : e.topic) && (this.sessionRequestQueue.state = Au), n && this.client.events.emit("session_delete", {
                id: s,
                topic: r
            })
        }, this.deleteProposal = async (t, e) => {
            await Promise.all([this.client.proposal.delete(t, vo("USER_DISCONNECTED")), e ? Promise.resolve() : this.client.core.expirer.del(t)]), this.addToRecentlyDeleted(t, "proposal")
        }, this.deletePendingSessionRequest = async (t, e, r = !1) => {
            await Promise.all([this.client.pendingRequest.delete(t, e), r ? Promise.resolve() : this.client.core.expirer.del(t)]), this.addToRecentlyDeleted(t, "request"), this.sessionRequestQueue.queue = this.sessionRequestQueue.queue.filter((e => e.id !== t)), r && (this.sessionRequestQueue.state = Au, this.client.events.emit("session_request_expire", {
                id: t
            }))
        }, this.deletePendingAuthRequest = async (t, e, r = !1) => {
            await Promise.all([this.client.auth.requests.delete(t, e), r ? Promise.resolve() : this.client.core.expirer.del(t)])
        }, this.setExpiry = async (t, e) => {
            this.client.session.keys.includes(t) && (this.client.core.expirer.set(t, e), await this.client.session.update(t, {
                expiry: e
            }))
        }, this.setProposal = async (t, e) => {
            this.client.core.expirer.set(t, Vt(wu.wc_sessionPropose.req.ttl)), await this.client.proposal.set(t, e)
        }, this.setAuthRequest = async (t, e) => {
            const {
                request: r,
                pairingTopic: i
            } = e;
            this.client.core.expirer.set(t, r.expiryTimestamp), await this.client.auth.requests.set(t, {
                authPayload: r.authPayload,
                requester: r.requester,
                expiryTimestamp: r.expiryTimestamp,
                id: t,
                pairingTopic: i,
                verifyContext: r.verifyContext
            })
        }, this.setPendingSessionRequest = async t => {
            const {
                id: e,
                topic: r,
                params: i,
                verifyContext: n
            } = t, s = i.request.expiryTimestamp || Vt(wu.wc_sessionRequest.req.ttl);
            this.client.core.expirer.set(e, s), await this.client.pendingRequest.set(e, {
                id: e,
                topic: r,
                params: i,
                verifyContext: n
            })
        }, this.sendRequest = async t => {
            const {
                topic: e,
                method: r,
                params: i,
                expiry: n,
                relayRpcId: s,
                clientRpcId: o,
                throwOnFailedPublish: a
            } = t, c = v(r, i, o);
            if (Dt() && Eu.includes(r)) {
                const t = Ks(JSON.stringify(c));
                this.client.core.verify.register({
                    attestationId: t
                })
            }
            let h;
            try {
                h = await this.client.core.crypto.encode(e, c)
            } catch (l) {
                throw await this.cleanup(), this.client.logger.error(`sendRequest() -> core.crypto.encode() for topic ${e} failed`), l
            }
            const u = wu[r].req;
            return n && (u.ttl = n), s && (u.id = s), this.client.core.history.set(e, c), a ? (u.internal = qu(Tu({}, u.internal), {
                throwOnFailedPublish: !0
            }), await this.client.core.relayer.publish(e, h, u)) : this.client.core.relayer.publish(e, h, u).catch((t => this.client.logger.error(t))), c.id
        }, this.sendResult = async t => {
            const {
                id: e,
                topic: r,
                result: i,
                throwOnFailedPublish: n,
                encodeOpts: s
            } = t, o = j(e, i);
            let a, c;
            try {
                a = await this.client.core.crypto.encode(r, o, s)
            } catch (Wu) {
                throw await this.cleanup(), this.client.logger.error(`sendResult() -> core.crypto.encode() for topic ${r} failed`), Wu
            }
            try {
                c = await this.client.core.history.get(r, e)
            } catch (Wu) {
                throw this.client.logger.error(`sendResult() -> history.get(${r}, ${e}) failed`), Wu
            }
            const h = wu[c.request.method].res;
            n ? (h.internal = qu(Tu({}, h.internal), {
                throwOnFailedPublish: !0
            }), await this.client.core.relayer.publish(r, a, h)) : this.client.core.relayer.publish(r, a, h).catch((t => this.client.logger.error(t))), await this.client.core.history.resolve(o)
        }, this.sendError = async t => {
            const {
                id: e,
                topic: r,
                error: i,
                encodeOpts: n,
                rpcOpts: s
            } = t, o = M(e, i);
            let a, c;
            try {
                a = await this.client.core.crypto.encode(r, o, n)
            } catch (Wu) {
                throw await this.cleanup(), this.client.logger.error(`sendError() -> core.crypto.encode() for topic ${r} failed`), Wu
            }
            try {
                c = await this.client.core.history.get(r, e)
            } catch (Wu) {
                throw this.client.logger.error(`sendError() -> history.get(${r}, ${e}) failed`), Wu
            }
            const h = s || wu[c.request.method].res;
            this.client.core.relayer.publish(r, a, h), await this.client.core.history.resolve(o)
        }, this.cleanup = async () => {
            const t = [],
                e = [];
            this.client.session.getAll().forEach((e => {
                let r = !1;
                Qt(e.expiry) && (r = !0), this.client.core.crypto.keychain.has(e.topic) || (r = !0), r && t.push(e.topic)
            })), this.client.proposal.getAll().forEach((t => {
                Qt(t.expiryTimestamp) && e.push(t.id)
            })), await Promise.all([...t.map((t => this.deleteSession({
                topic: t
            }))), ...e.map((t => this.deleteProposal(t)))])
        }, this.onRelayEventRequest = async t => {
            this.requestQueue.queue.push(t), await this.processRequestsQueue()
        }, this.processRequestsQueue = async () => {
            if (this.requestQueue.state !== _u) {
                for (this.client.logger.info(`Request queue starting with ${this.requestQueue.queue.length} requests`); this.requestQueue.queue.length > 0;) {
                    this.requestQueue.state = _u;
                    const t = this.requestQueue.queue.shift();
                    if (t) try {
                        this.processRequest(t), await new Promise((t => setTimeout(t, 300)))
                    } catch (Yt) {
                        this.client.logger.warn(Yt)
                    }
                }
                this.requestQueue.state = Au
            } else this.client.logger.info("Request queue already active, skipping...")
        }, this.processRequest = t => {
            const {
                topic: e,
                payload: r
            } = t, i = r.method;
            if (!this.shouldIgnorePairingRequest({
                    topic: e,
                    requestMethod: i
                })) switch (i) {
                case "wc_sessionPropose":
                    return this.onSessionProposeRequest(e, r);
                case "wc_sessionSettle":
                    return this.onSessionSettleRequest(e, r);
                case "wc_sessionUpdate":
                    return this.onSessionUpdateRequest(e, r);
                case "wc_sessionExtend":
                    return this.onSessionExtendRequest(e, r);
                case "wc_sessionPing":
                    return this.onSessionPingRequest(e, r);
                case "wc_sessionDelete":
                    return this.onSessionDeleteRequest(e, r);
                case "wc_sessionRequest":
                    return this.onSessionRequest(e, r);
                case "wc_sessionEvent":
                    return this.onSessionEventRequest(e, r);
                case "wc_sessionAuthenticate":
                    return this.onSessionAuthenticateRequest(e, r);
                default:
                    return this.client.logger.info(`Unsupported request method ${i}`)
            }
        }, this.onRelayEventResponse = async t => {
            const {
                topic: e,
                payload: r
            } = t, i = (await this.client.core.history.get(e, r.id)).request.method;
            switch (i) {
                case "wc_sessionPropose":
                    return this.onSessionProposeResponse(e, r);
                case "wc_sessionSettle":
                    return this.onSessionSettleResponse(e, r);
                case "wc_sessionUpdate":
                    return this.onSessionUpdateResponse(e, r);
                case "wc_sessionExtend":
                    return this.onSessionExtendResponse(e, r);
                case "wc_sessionPing":
                    return this.onSessionPingResponse(e, r);
                case "wc_sessionRequest":
                    return this.onSessionRequestResponse(e, r);
                case "wc_sessionAuthenticate":
                    return this.onSessionAuthenticateResponse(e, r);
                default:
                    return this.client.logger.info(`Unsupported response method ${i}`)
            }
        }, this.onRelayEventUnknownPayload = t => {
            const {
                topic: e
            } = t, {
                message: r
            } = mo("MISSING_OR_INVALID", `Decoded payload on topic ${e} is not identifiable as a JSON-RPC request or a response.`);
            throw new Error(r)
        }, this.shouldIgnorePairingRequest = t => {
            const {
                topic: e,
                requestMethod: r
            } = t, i = this.expectedPairingMethodMap.get(e);
            return !(!i || i.includes(r)) && !!(i.includes("wc_sessionAuthenticate") && this.client.events.listenerCount("session_authenticate") > 0)
        }, this.onSessionProposeRequest = async (t, e) => {
            const {
                params: r,
                id: i
            } = e;
            try {
                this.isValidConnect(Tu({}, e.params));
                const n = r.expiryTimestamp || Vt(wu.wc_sessionPropose.req.ttl),
                    s = Tu({
                        id: i,
                        pairingTopic: t,
                        expiryTimestamp: n
                    }, r);
                await this.setProposal(i, s);
                const o = Ks(JSON.stringify(e)),
                    a = await this.getVerifyContext(o, s.proposer.metadata);
                this.client.events.emit("session_proposal", {
                    id: i,
                    params: s,
                    verifyContext: a
                })
            } catch (n) {
                await this.sendError({
                    id: i,
                    topic: t,
                    error: n,
                    rpcOpts: wu.wc_sessionPropose.autoReject
                }), this.client.logger.error(n)
            }
        }, this.onSessionProposeResponse = async (t, e) => {
            const {
                id: r
            } = e;
            if (z(e)) {
                const {
                    result: i
                } = e;
                this.client.logger.trace({
                    type: "method",
                    method: "onSessionProposeResponse",
                    result: i
                });
                const n = this.client.proposal.get(r);
                this.client.logger.trace({
                    type: "method",
                    method: "onSessionProposeResponse",
                    proposal: n
                });
                const s = n.proposer.publicKey;
                this.client.logger.trace({
                    type: "method",
                    method: "onSessionProposeResponse",
                    selfPublicKey: s
                });
                const o = i.responderPublicKey;
                this.client.logger.trace({
                    type: "method",
                    method: "onSessionProposeResponse",
                    peerPublicKey: o
                });
                const a = await this.client.core.crypto.generateSharedKey(s, o);
                this.client.logger.trace({
                    type: "method",
                    method: "onSessionProposeResponse",
                    sessionTopic: a
                });
                const c = await this.client.core.relayer.subscribe(a);
                this.client.logger.trace({
                    type: "method",
                    method: "onSessionProposeResponse",
                    subscriptionId: c
                }), await this.client.core.pairing.activate({
                    topic: t
                })
            } else if (w(e)) {
                await this.client.proposal.delete(r, vo("USER_DISCONNECTED"));
                const t = Wt("session_connect");
                if (0 === this.events.listenerCount(t)) throw new Error(`emitting ${t} without any listeners, 954`);
                this.events.emit(Wt("session_connect"), {
                    error: e.error
                })
            }
        }, this.onSessionSettleRequest = async (t, e) => {
            const {
                id: r,
                params: i
            } = e;
            try {
                this.isValidSessionSettleRequest(i);
                const {
                    relay: r,
                    controller: n,
                    expiry: s,
                    namespaces: o,
                    sessionProperties: a,
                    sessionConfig: c
                } = e.params, h = Tu(Tu({
                    topic: t,
                    relay: r,
                    expiry: s,
                    namespaces: o,
                    acknowledged: !0,
                    pairingTopic: "",
                    requiredNamespaces: {},
                    optionalNamespaces: {},
                    controller: n.publicKey,
                    self: {
                        publicKey: "",
                        metadata: this.client.metadata
                    },
                    peer: {
                        publicKey: n.publicKey,
                        metadata: n.metadata
                    }
                }, a && {
                    sessionProperties: a
                }), c && {
                    sessionConfig: c
                });
                await this.sendResult({
                    id: e.id,
                    topic: t,
                    result: !0,
                    throwOnFailedPublish: !0
                });
                const u = Wt("session_connect");
                if (0 === this.events.listenerCount(u)) throw new Error(`emitting ${u} without any listeners 997`);
                this.events.emit(Wt("session_connect"), {
                    session: h
                })
            } catch (n) {
                await this.sendError({
                    id: r,
                    topic: t,
                    error: n
                }), this.client.logger.error(n)
            }
        }, this.onSessionSettleResponse = async (t, e) => {
            const {
                id: r
            } = e;
            z(e) ? (await this.client.session.update(t, {
                acknowledged: !0
            }), this.events.emit(Wt("session_approve", r), {})) : w(e) && (await this.client.session.delete(t, vo("USER_DISCONNECTED")), this.events.emit(Wt("session_approve", r), {
                error: e.error
            }))
        }, this.onSessionUpdateRequest = async (t, e) => {
            const {
                params: r,
                id: i
            } = e;
            try {
                const e = `${t}_session_update`,
                    s = jo.get(e);
                if (s && this.isRequestOutOfSync(s, i)) return this.client.logger.info(`Discarding out of sync request - ${i}`), void this.sendError({
                    id: i,
                    topic: t,
                    error: vo("INVALID_UPDATE_REQUEST")
                });
                this.isValidUpdate(Tu({
                    topic: t
                }, r));
                try {
                    jo.set(e, i), await this.client.session.update(t, {
                        namespaces: r.namespaces
                    }), await this.sendResult({
                        id: i,
                        topic: t,
                        result: !0,
                        throwOnFailedPublish: !0
                    })
                } catch (n) {
                    throw jo.delete(e), n
                }
                this.client.events.emit("session_update", {
                    id: i,
                    topic: t,
                    params: r
                })
            } catch (s) {
                await this.sendError({
                    id: i,
                    topic: t,
                    error: s
                }), this.client.logger.error(s)
            }
        }, this.isRequestOutOfSync = (t, e) => parseInt(e.toString().slice(0, -3)) <= parseInt(t.toString().slice(0, -3)), this.onSessionUpdateResponse = (t, e) => {
            const {
                id: r
            } = e, i = Wt("session_update", r);
            if (0 === this.events.listenerCount(i)) throw new Error(`emitting ${i} without any listeners`);
            z(e) ? this.events.emit(Wt("session_update", r), {}) : w(e) && this.events.emit(Wt("session_update", r), {
                error: e.error
            })
        }, this.onSessionExtendRequest = async (t, e) => {
            const {
                id: r
            } = e;
            try {
                this.isValidExtend({
                    topic: t
                }), await this.setExpiry(t, Vt(yu)), await this.sendResult({
                    id: r,
                    topic: t,
                    result: !0,
                    throwOnFailedPublish: !0
                }), this.client.events.emit("session_extend", {
                    id: r,
                    topic: t
                })
            } catch (i) {
                await this.sendError({
                    id: r,
                    topic: t,
                    error: i
                }), this.client.logger.error(i)
            }
        }, this.onSessionExtendResponse = (t, e) => {
            const {
                id: r
            } = e, i = Wt("session_extend", r);
            if (0 === this.events.listenerCount(i)) throw new Error(`emitting ${i} without any listeners`);
            z(e) ? this.events.emit(Wt("session_extend", r), {}) : w(e) && this.events.emit(Wt("session_extend", r), {
                error: e.error
            })
        }, this.onSessionPingRequest = async (t, e) => {
            const {
                id: r
            } = e;
            try {
                this.isValidPing({
                    topic: t
                }), await this.sendResult({
                    id: r,
                    topic: t,
                    result: !0,
                    throwOnFailedPublish: !0
                }), this.client.events.emit("session_ping", {
                    id: r,
                    topic: t
                })
            } catch (i) {
                await this.sendError({
                    id: r,
                    topic: t,
                    error: i
                }), this.client.logger.error(i)
            }
        }, this.onSessionPingResponse = (t, e) => {
            const {
                id: r
            } = e, i = Wt("session_ping", r);
            if (0 === this.events.listenerCount(i)) throw new Error(`emitting ${i} without any listeners`);
            setTimeout((() => {
                z(e) ? this.events.emit(Wt("session_ping", r), {}) : w(e) && this.events.emit(Wt("session_ping", r), {
                    error: e.error
                })
            }), 500)
        }, this.onSessionDeleteRequest = async (t, e) => {
            const {
                id: r
            } = e;
            try {
                this.isValidDisconnect({
                    topic: t,
                    reason: e.params
                }), await Promise.all([new Promise((e => {
                    this.client.core.relayer.once(Xc, (async () => {
                        e(await this.deleteSession({
                            topic: t,
                            id: r
                        }))
                    }))
                })), this.sendResult({
                    id: r,
                    topic: t,
                    result: !0,
                    throwOnFailedPublish: !0
                }), this.cleanupPendingSentRequestsForTopic({
                    topic: t,
                    error: vo("USER_DISCONNECTED")
                })])
            } catch (i) {
                this.client.logger.error(i)
            }
        }, this.onSessionRequest = async (t, e) => {
            var r;
            const {
                id: i,
                params: n
            } = e;
            try {
                await this.isValidRequest(Tu({
                    topic: t
                }, n));
                const e = Ks(JSON.stringify(v("wc_sessionRequest", n, i))),
                    s = this.client.session.get(t),
                    o = {
                        id: i,
                        topic: t,
                        params: n,
                        verifyContext: await this.getVerifyContext(e, s.peer.metadata)
                    };
                await this.setPendingSessionRequest(o), null != (r = this.client.signConfig) && r.disableRequestQueue ? this.emitSessionRequest(o) : (this.addSessionRequestToSessionRequestQueue(o), this.processSessionRequestQueue())
            } catch (s) {
                await this.sendError({
                    id: i,
                    topic: t,
                    error: s
                }), this.client.logger.error(s)
            }
        }, this.onSessionRequestResponse = (t, e) => {
            const {
                id: r
            } = e, i = Wt("session_request", r);
            if (0 === this.events.listenerCount(i)) throw new Error(`emitting ${i} without any listeners`);
            z(e) ? this.events.emit(Wt("session_request", r), {
                result: e.result
            }) : w(e) && this.events.emit(Wt("session_request", r), {
                error: e.error
            })
        }, this.onSessionEventRequest = async (t, e) => {
            const {
                id: r,
                params: i
            } = e;
            try {
                const e = `${t}_session_event_${i.event.name}`,
                    n = jo.get(e);
                if (n && this.isRequestOutOfSync(n, r)) return void this.client.logger.info(`Discarding out of sync request - ${r}`);
                this.isValidEmit(Tu({
                    topic: t
                }, i)), this.client.events.emit("session_event", {
                    id: r,
                    topic: t,
                    params: i
                }), jo.set(e, r)
            } catch (n) {
                await this.sendError({
                    id: r,
                    topic: t,
                    error: n
                }), this.client.logger.error(n)
            }
        }, this.onSessionAuthenticateResponse = (t, e) => {
            const {
                id: r
            } = e;
            this.client.logger.trace({
                type: "method",
                method: "onSessionAuthenticateResponse",
                topic: t,
                payload: e
            }), z(e) ? this.events.emit(Wt("session_request", r), {
                result: e.result
            }) : w(e) && this.events.emit(Wt("session_request", r), {
                error: e.error
            })
        }, this.onSessionAuthenticateRequest = async (t, e) => {
            try {
                const {
                    requester: r,
                    authPayload: i,
                    expiryTimestamp: n
                } = e.params, s = Ks(JSON.stringify(e)), o = await this.getVerifyContext(s, this.client.metadata), a = {
                    requester: r,
                    pairingTopic: t,
                    id: e.id,
                    authPayload: i,
                    verifyContext: o,
                    expiryTimestamp: n
                };
                await this.setAuthRequest(e.id, {
                    request: a,
                    pairingTopic: t
                }), this.client.events.emit("session_authenticate", {
                    topic: t,
                    params: e.params,
                    id: e.id
                })
            } catch (r) {
                this.client.logger.error(r);
                const i = {
                    type: 1,
                    receiverPublicKey: e.params.requester.publicKey,
                    senderPublicKey: await this.client.core.crypto.generateKeyPair()
                };
                await this.sendError({
                    id: e.id,
                    topic: t,
                    error: r,
                    encodeOpts: i,
                    rpcOpts: wu.wc_sessionAuthenticate.autoReject
                })
            }
        }, this.addSessionRequestToSessionRequestQueue = t => {
            this.sessionRequestQueue.queue.push(t)
        }, this.cleanupAfterResponse = t => {
            this.deletePendingSessionRequest(t.response.id, {
                message: "fulfilled",
                code: 0
            }), setTimeout((() => {
                this.sessionRequestQueue.state = Au, this.processSessionRequestQueue()
            }), c.toMiliseconds(this.requestQueueDelay))
        }, this.cleanupPendingSentRequestsForTopic = ({
            topic: t,
            error: e
        }) => {
            const r = this.client.core.history.pending;
            r.length > 0 && r.filter((e => e.topic === t && "wc_sessionRequest" === e.request.method)).forEach((t => {
                const r = Wt("session_request", t.request.id);
                if (0 === this.events.listenerCount(r)) throw new Error(`emitting ${r} without any listeners`);
                this.events.emit(Wt("session_request", t.request.id), {
                    error: e
                })
            }))
        }, this.processSessionRequestQueue = () => {
            if (this.sessionRequestQueue.state === _u) return void this.client.logger.info("session request queue is already active.");
            const t = this.sessionRequestQueue.queue[0];
            if (t) try {
                this.sessionRequestQueue.state = _u, this.emitSessionRequest(t)
            } catch (Yt) {
                this.client.logger.error(Yt)
            } else this.client.logger.info("session request queue is empty.")
        }, this.emitSessionRequest = t => {
            this.client.events.emit("session_request", t)
        }, this.onPairingCreated = t => {
            if (t.methods && this.expectedPairingMethodMap.set(t.topic, t.methods), t.active) return;
            const e = this.client.proposal.getAll().find((e => e.pairingTopic === t.topic));
            e && this.onSessionProposeRequest(t.topic, v("wc_sessionPropose", {
                requiredNamespaces: e.requiredNamespaces,
                optionalNamespaces: e.optionalNamespaces,
                relays: e.relays,
                proposer: e.proposer,
                sessionProperties: e.sessionProperties
            }, e.id))
        }, this.isValidConnect = async t => {
            if (!Co(t)) {
                const {
                    message: e
                } = mo("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(t)}`);
                throw new Error(e)
            }
            const {
                pairingTopic: e,
                requiredNamespaces: r,
                optionalNamespaces: i,
                sessionProperties: n,
                relays: s
            } = t;
            if (bo(e) || await this.isValidPairingTopic(e), ! function(t) {
                    let e = !1;
                    return t ? t && yo(t) && t.length && t.forEach((t => {
                        e = No(t)
                    })) : e = !0, e
                }(s)) {
                const {
                    message: t
                } = mo("MISSING_OR_INVALID", `connect() relays: ${s}`);
                throw new Error(t)
            }!bo(r) && 0 !== wo(r) && this.validateNamespaces(r, "requiredNamespaces"), !bo(i) && 0 !== wo(i) && this.validateNamespaces(i, "optionalNamespaces"), bo(n) || this.validateSessionProps(n, "sessionProperties")
        }, this.validateNamespaces = (t, e) => {
            const r = function(t, e, r) {
                let i = null;
                if (t && wo(t)) {
                    const n = Po(t, e);
                    n && (i = n);
                    const s = So(t, e, r);
                    s && (i = s)
                } else i = mo("MISSING_OR_INVALID", `${e}, ${r} should be an object with data`);
                return i
            }(t, "connect()", e);
            if (r) throw new Error(r.message)
        }, this.isValidApprove = async t => {
            if (!Co(t)) throw new Error(mo("MISSING_OR_INVALID", `approve() params: ${t}`).message);
            const {
                id: e,
                namespaces: r,
                relayProtocol: i,
                sessionProperties: n
            } = t;
            this.checkRecentlyDeleted(e), await this.isValidProposalId(e);
            const s = this.client.proposal.get(e),
                o = xo(r, "approve()");
            if (o) throw new Error(o.message);
            const a = qo(s.requiredNamespaces, r, "approve()");
            if (a) throw new Error(a.message);
            if (!Ao(i, !0)) {
                const {
                    message: t
                } = mo("MISSING_OR_INVALID", `approve() relayProtocol: ${i}`);
                throw new Error(t)
            }
            bo(n) || this.validateSessionProps(n, "sessionProperties")
        }, this.isValidReject = async t => {
            if (!Co(t)) {
                const {
                    message: e
                } = mo("MISSING_OR_INVALID", `reject() params: ${t}`);
                throw new Error(e)
            }
            const {
                id: e,
                reason: r
            } = t;
            if (this.checkRecentlyDeleted(e), await this.isValidProposalId(e), ! function(t) {
                    return !!(t && "object" == typeof t && t.code && _o(t.code) && t.message && Ao(t.message, !1))
                }(r)) {
                const {
                    message: t
                } = mo("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(r)}`);
                throw new Error(t)
            }
        }, this.isValidSessionSettleRequest = t => {
            if (!Co(t)) {
                const {
                    message: e
                } = mo("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${t}`);
                throw new Error(e)
            }
            const {
                relay: e,
                controller: r,
                namespaces: i,
                expiry: n
            } = t;
            if (!No(e)) {
                const {
                    message: t
                } = mo("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
                throw new Error(t)
            }
            const s = function(t, e) {
                let r = null;
                return Ao(null == t ? void 0 : t.publicKey, !1) || (r = mo("MISSING_OR_INVALID", `${e} controller public key should be a string`)), r
            }(r, "onSessionSettleRequest()");
            if (s) throw new Error(s.message);
            const o = xo(i, "onSessionSettleRequest()");
            if (o) throw new Error(o.message);
            if (Qt(n)) {
                const {
                    message: t
                } = mo("EXPIRED", "onSessionSettleRequest()");
                throw new Error(t)
            }
        }, this.isValidUpdate = async t => {
            if (!Co(t)) {
                const {
                    message: e
                } = mo("MISSING_OR_INVALID", `update() params: ${t}`);
                throw new Error(e)
            }
            const {
                topic: e,
                namespaces: r
            } = t;
            this.checkRecentlyDeleted(e), await this.isValidSessionTopic(e);
            const i = this.client.session.get(e),
                n = xo(r, "update()");
            if (n) throw new Error(n.message);
            const s = qo(i.requiredNamespaces, r, "update()");
            if (s) throw new Error(s.message)
        }, this.isValidExtend = async t => {
            if (!Co(t)) {
                const {
                    message: e
                } = mo("MISSING_OR_INVALID", `extend() params: ${t}`);
                throw new Error(e)
            }
            const {
                topic: e
            } = t;
            this.checkRecentlyDeleted(e), await this.isValidSessionTopic(e)
        }, this.isValidRequest = async t => {
            if (!Co(t)) {
                const {
                    message: e
                } = mo("MISSING_OR_INVALID", `request() params: ${t}`);
                throw new Error(e)
            }
            const {
                topic: e,
                request: r,
                chainId: i,
                expiry: n
            } = t;
            this.checkRecentlyDeleted(e), await this.isValidSessionTopic(e);
            const {
                namespaces: s
            } = this.client.session.get(e);
            if (!Oo(s, i)) {
                const {
                    message: t
                } = mo("MISSING_OR_INVALID", `request() chainId: ${i}`);
                throw new Error(t)
            }
            if (! function(t) {
                    return !(bo(t) || !Ao(t.method, !1))
                }(r)) {
                const {
                    message: t
                } = mo("MISSING_OR_INVALID", `request() ${JSON.stringify(r)}`);
                throw new Error(t)
            }
            if (!Ro(s, i, r.method)) {
                const {
                    message: t
                } = mo("MISSING_OR_INVALID", `request() method: ${r.method}`);
                throw new Error(t)
            }
            if (n && ! function(t, e) {
                    return _o(t) && t <= e.max && t >= e.min
                }(n, bu)) {
                const {
                    message: t
                } = mo("MISSING_OR_INVALID", `request() expiry: ${n}. Expiry must be a number (in seconds) between ${bu.min} and ${bu.max}`);
                throw new Error(t)
            }
        }, this.isValidRespond = async t => {
            var e;
            if (!Co(t)) {
                const {
                    message: e
                } = mo("MISSING_OR_INVALID", `respond() params: ${t}`);
                throw new Error(e)
            }
            const {
                topic: r,
                response: i
            } = t;
            try {
                await this.isValidSessionTopic(r)
            } catch (n) {
                throw null != (e = null == t ? void 0 : t.response) && e.id && this.cleanupAfterResponse(t), n
            }
            if (! function(t) {
                    return !(bo(t) || bo(t.result) && bo(t.error) || !_o(t.id) || !Ao(t.jsonrpc, !1))
                }(i)) {
                const {
                    message: t
                } = mo("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(i)}`);
                throw new Error(t)
            }
        }, this.isValidPing = async t => {
            if (!Co(t)) {
                const {
                    message: e
                } = mo("MISSING_OR_INVALID", `ping() params: ${t}`);
                throw new Error(e)
            }
            const {
                topic: e
            } = t;
            await this.isValidSessionOrPairingTopic(e)
        }, this.isValidEmit = async t => {
            if (!Co(t)) {
                const {
                    message: e
                } = mo("MISSING_OR_INVALID", `emit() params: ${t}`);
                throw new Error(e)
            }
            const {
                topic: e,
                event: r,
                chainId: i
            } = t;
            await this.isValidSessionTopic(e);
            const {
                namespaces: n
            } = this.client.session.get(e);
            if (!Oo(n, i)) {
                const {
                    message: t
                } = mo("MISSING_OR_INVALID", `emit() chainId: ${i}`);
                throw new Error(t)
            }
            if (! function(t) {
                    return !(bo(t) || !Ao(t.name, !1))
                }(r)) {
                const {
                    message: t
                } = mo("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(r)}`);
                throw new Error(t)
            }
            if (!To(n, i, r.name)) {
                const {
                    message: t
                } = mo("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(r)}`);
                throw new Error(t)
            }
        }, this.isValidDisconnect = async t => {
            if (!Co(t)) {
                const {
                    message: e
                } = mo("MISSING_OR_INVALID", `disconnect() params: ${t}`);
                throw new Error(e)
            }
            const {
                topic: e
            } = t;
            await this.isValidSessionOrPairingTopic(e)
        }, this.isValidAuthenticate = t => {
            const {
                chains: e,
                uri: r,
                domain: i,
                nonce: n
            } = t;
            if (!Array.isArray(e) || 0 === e.length) throw new Error("chains is required and must be a non-empty array");
            if (!Ao(r, !1)) throw new Error("uri is required parameter");
            if (!Ao(i, !1)) throw new Error("domain is required parameter");
            if (!Ao(n, !1)) throw new Error("nonce is required parameter");
            if ([...new Set(e.map((t => wt(t).namespace)))].length > 1) throw new Error("Multi-namespace requests are not supported. Please request single namespace only.");
            const {
                namespace: s
            } = wt(e[0]);
            if ("eip155" !== s) throw new Error("Only eip155 namespace is supported for authenticated sessions. Please use .connect() for non-eip155 chains.")
        }, this.getVerifyContext = async (t, e) => {
            const r = {
                verified: {
                    verifyUrl: e.verifyUrl || Eh,
                    validation: "UNKNOWN",
                    origin: e.url || ""
                }
            };
            try {
                const i = await this.client.core.verify.resolve({
                    attestationId: t,
                    verifyUrl: e.verifyUrl
                });
                i && (r.verified.origin = i.origin, r.verified.isScam = i.isScam, r.verified.validation = i.origin === new URL(e.url).origin ? "VALID" : "INVALID")
            } catch (i) {
                this.client.logger.info(i)
            }
            return this.client.logger.info(`Verify context: ${JSON.stringify(r)}`), r
        }, this.validateSessionProps = (t, e) => {
            Object.values(t).forEach((t => {
                if (!Ao(t, !1)) {
                    const {
                        message: r
                    } = mo("MISSING_OR_INVALID", `${e} must be in Record<string, string> format. Received: ${JSON.stringify(t)}`);
                    throw new Error(r)
                }
            }))
        }, this.getPendingAuthRequest = t => {
            const e = this.client.auth.requests.get(t);
            return "object" == typeof e ? e : void 0
        }, this.addToRecentlyDeleted = (t, e) => {
            if (this.recentlyDeletedMap.set(t, e), this.recentlyDeletedMap.size >= this.recentlyDeletedLimit) {
                let t = 0;
                const e = this.recentlyDeletedLimit / 2;
                for (const r of this.recentlyDeletedMap.keys()) {
                    if (t++ >= e) break;
                    this.recentlyDeletedMap.delete(r)
                }
            }
        }, this.checkRecentlyDeleted = t => {
            const e = this.recentlyDeletedMap.get(t);
            if (e) {
                const {
                    message: r
                } = mo("MISSING_OR_INVALID", `Record was recently deleted - ${e}: ${t}`);
                throw new Error(r)
            }
        }
    }
    async isInitialized() {
        if (!this.initialized) {
            const {
                message: t
            } = mo("NOT_INITIALIZED", this.name);
            throw new Error(t)
        }
        await this.client.core.relayer.confirmOnlineStateOrThrow()
    }
    registerRelayerEvents() {
        this.client.core.relayer.on(Vc, (async t => {
            const {
                topic: e,
                message: r
            } = t, {
                publicKey: i
            } = this.client.auth.authKeys.keys.includes(Su) ? this.client.auth.authKeys.get(Su) : {
                responseTopic: void 0,
                publicKey: void 0
            }, n = await this.client.core.crypto.decode(e, r, {
                receiverPublicKey: i
            });
            try {
                U(n) ? (this.client.core.history.set(e, n), this.onRelayEventRequest({
                    topic: e,
                    payload: n
                })) : b(n) ? (await this.client.core.history.resolve(n), await this.onRelayEventResponse({
                    topic: e,
                    payload: n
                }), this.client.core.history.delete(e, n.id)) : this.onRelayEventUnknownPayload({
                    topic: e,
                    payload: n
                })
            } catch (s) {
                this.client.logger.error(s)
            }
        }))
    }
    registerExpirerEvents() {
        this.client.core.expirer.on(bh, (async t => {
            const {
                topic: e,
                id: r
            } = $t(t.target);
            return r && this.client.pendingRequest.keys.includes(r) ? await this.deletePendingSessionRequest(r, mo("EXPIRED"), !0) : r && this.client.auth.requests.keys.includes(r) ? await this.deletePendingAuthRequest(r, mo("EXPIRED"), !0) : void(e ? this.client.session.keys.includes(e) && (await this.deleteSession({
                topic: e,
                expirerHasDeleted: !0
            }), this.client.events.emit("session_expire", {
                topic: e
            })) : r && (await this.deleteProposal(r, !0), this.client.events.emit("proposal_expire", {
                id: r
            })))
        }))
    }
    registerPairingEvents() {
        this.client.core.pairing.events.on(uh, (t => this.onPairingCreated(t))), this.client.core.pairing.events.on(fh, (t => {
            this.addToRecentlyDeleted(t.topic, "pairing")
        }))
    }
    isValidPairingTopic(t) {
        if (!Ao(t, !1)) {
            const {
                message: e
            } = mo("MISSING_OR_INVALID", `pairing topic should be a string: ${t}`);
            throw new Error(e)
        }
        if (!this.client.core.pairing.pairings.keys.includes(t)) {
            const {
                message: e
            } = mo("NO_MATCHING_KEY", `pairing topic doesn't exist: ${t}`);
            throw new Error(e)
        }
        if (Qt(this.client.core.pairing.pairings.get(t).expiry)) {
            const {
                message: e
            } = mo("EXPIRED", `pairing topic: ${t}`);
            throw new Error(e)
        }
    }
    async isValidSessionTopic(t) {
        if (!Ao(t, !1)) {
            const {
                message: e
            } = mo("MISSING_OR_INVALID", `session topic should be a string: ${t}`);
            throw new Error(e)
        }
        if (this.checkRecentlyDeleted(t), !this.client.session.keys.includes(t)) {
            const {
                message: e
            } = mo("NO_MATCHING_KEY", `session topic doesn't exist: ${t}`);
            throw new Error(e)
        }
        if (Qt(this.client.session.get(t).expiry)) {
            await this.deleteSession({
                topic: t
            });
            const {
                message: e
            } = mo("EXPIRED", `session topic: ${t}`);
            throw new Error(e)
        }
        if (!this.client.core.crypto.keychain.has(t)) {
            const {
                message: e
            } = mo("MISSING_OR_INVALID", `session topic does not exist in keychain: ${t}`);
            throw await this.deleteSession({
                topic: t
            }), new Error(e)
        }
    }
    async isValidSessionOrPairingTopic(t) {
        if (this.checkRecentlyDeleted(t), this.client.session.keys.includes(t)) await this.isValidSessionTopic(t);
        else {
            if (!this.client.core.pairing.pairings.keys.includes(t)) {
                if (Ao(t, !1)) {
                    const {
                        message: e
                    } = mo("NO_MATCHING_KEY", `session or pairing topic doesn't exist: ${t}`);
                    throw new Error(e)
                } {
                    const {
                        message: e
                    } = mo("MISSING_OR_INVALID", `session or pairing topic should be a string: ${t}`);
                    throw new Error(e)
                }
            }
            this.isValidPairingTopic(t)
        }
    }
    async isValidProposalId(t) {
        if (! function(t) {
                return "number" == typeof t
            }(t)) {
            const {
                message: e
            } = mo("MISSING_OR_INVALID", `proposal id should be a number: ${t}`);
            throw new Error(e)
        }
        if (!this.client.proposal.keys.includes(t)) {
            const {
                message: e
            } = mo("NO_MATCHING_KEY", `proposal id doesn't exist: ${t}`);
            throw new Error(e)
        }
        if (Qt(this.client.proposal.get(t).expiryTimestamp)) {
            await this.deleteProposal(t);
            const {
                message: e
            } = mo("EXPIRED", `proposal id: ${t}`);
            throw new Error(e)
        }
    }
}
class ku extends Zh {
    constructor(t, e) {
        super(t, e, "proposal", pu), this.core = t, this.logger = e
    }
}
class Bu extends Zh {
    constructor(t, e) {
        super(t, e, "session", pu), this.core = t, this.logger = e
    }
}
class Uu extends Zh {
    constructor(t, e) {
        super(t, e, "request", pu, (t => t.id)), this.core = t, this.logger = e
    }
}
class ju extends Zh {
    constructor(t, e) {
        super(t, e, "authKeys", Iu, (() => Su)), this.core = t, this.logger = e
    }
}
class zu extends Zh {
    constructor(t, e) {
        super(t, e, "pairingTopics", Iu), this.core = t, this.logger = e
    }
}
class Lu extends Zh {
    constructor(t, e) {
        super(t, e, "requests", Iu, (t => t.id)), this.core = t, this.logger = e
    }
}
class Fu {
    constructor(t, e) {
        this.core = t, this.logger = e, this.authKeys = new ju(this.core, this.logger), this.pairingTopics = new zu(this.core, this.logger), this.requests = new Lu(this.core, this.logger)
    }
    async init() {
        await this.authKeys.init(), await this.pairingTopics.init(), await this.requests.init()
    }
}
class Ku extends ta {
    constructor(t) {
        super(t), this.protocol = "wc", this.version = 2, this.name = du, this.events = new i.EventEmitter, this.on = (t, e) => this.events.on(t, e), this.once = (t, e) => this.events.once(t, e), this.off = (t, e) => this.events.off(t, e), this.removeListener = (t, e) => this.events.removeListener(t, e), this.removeAllListeners = t => this.events.removeAllListeners(t), this.connect = async t => {
            try {
                return await this.engine.connect(t)
            } catch (e) {
                throw this.logger.error(e.message), e
            }
        }, this.pair = async t => {
            try {
                return await this.engine.pair(t)
            } catch (e) {
                throw this.logger.error(e.message), e
            }
        }, this.approve = async t => {
            try {
                return await this.engine.approve(t)
            } catch (e) {
                throw this.logger.error(e.message), e
            }
        }, this.reject = async t => {
            try {
                return await this.engine.reject(t)
            } catch (e) {
                throw this.logger.error(e.message), e
            }
        }, this.update = async t => {
            try {
                return await this.engine.update(t)
            } catch (e) {
                throw this.logger.error(e.message), e
            }
        }, this.extend = async t => {
            try {
                return await this.engine.extend(t)
            } catch (e) {
                throw this.logger.error(e.message), e
            }
        }, this.request = async t => {
            try {
                return await this.engine.request(t)
            } catch (e) {
                throw this.logger.error(e.message), e
            }
        }, this.respond = async t => {
            try {
                return await this.engine.respond(t)
            } catch (e) {
                throw this.logger.error(e.message), e
            }
        }, this.ping = async t => {
            try {
                return await this.engine.ping(t)
            } catch (e) {
                throw this.logger.error(e.message), e
            }
        }, this.emit = async t => {
            try {
                return await this.engine.emit(t)
            } catch (e) {
                throw this.logger.error(e.message), e
            }
        }, this.disconnect = async t => {
            try {
                return await this.engine.disconnect(t)
            } catch (e) {
                throw this.logger.error(e.message), e
            }
        }, this.find = t => {
            try {
                return this.engine.find(t)
            } catch (e) {
                throw this.logger.error(e.message), e
            }
        }, this.getPendingSessionRequests = () => {
            try {
                return this.engine.getPendingSessionRequests()
            } catch (Yt) {
                throw this.logger.error(Yt.message), Yt
            }
        }, this.authenticate = async t => {
            try {
                return await this.engine.authenticate(t)
            } catch (e) {
                throw this.logger.error(e.message), e
            }
        }, this.formatAuthMessage = t => {
            try {
                return this.engine.formatAuthMessage(t)
            } catch (e) {
                throw this.logger.error(e.message), e
            }
        }, this.approveSessionAuthenticate = async t => {
            try {
                return await this.engine.approveSessionAuthenticate(t)
            } catch (e) {
                throw this.logger.error(e.message), e
            }
        }, this.rejectSessionAuthenticate = async t => {
            try {
                return await this.engine.rejectSessionAuthenticate(t)
            } catch (e) {
                throw this.logger.error(e.message), e
            }
        }, this.name = (null == t ? void 0 : t.name) || du, this.metadata = (null == t ? void 0 : t.metadata) || ot() || {
            name: "",
            description: "",
            url: "",
            icons: [""]
        }, this.signConfig = null == t ? void 0 : t.signConfig;
        const e = typeof(null == t ? void 0 : t.logger) < "u" && "string" != typeof(null == t ? void 0 : t.logger) ? t.logger : B(O({
            level: (null == t ? void 0 : t.logger) || gu
        }));
        this.core = (null == t ? void 0 : t.core) || new lu(t), this.logger = N(e, this.name), this.session = new Bu(this.core, this.logger), this.proposal = new ku(this.core, this.logger), this.pendingRequest = new Uu(this.core, this.logger), this.engine = new Du(this), this.auth = new Fu(this.core, this.logger)
    }
    static async init(t) {
        const e = new Ku(t);
        return await e.initialize(), e
    }
    get context() {
        return C(this.logger)
    }
    get pairing() {
        return this.core.pairing.pairings
    }
    async initialize() {
        this.logger.trace("Initialized");
        try {
            await this.core.start(), await this.session.init(), await this.proposal.init(), await this.pendingRequest.init(), await this.engine.init(), await this.auth.init(), this.core.verify.init({
                verifyUrl: this.metadata.verifyUrl
            }), this.logger.info("SignClient Initialization Success")
        } catch (t) {
            throw this.logger.info("SignClient Initialization Failure"), this.logger.error(t.message), t
        }
    }
}
const Hu = "error",
    $u = "wc@2:universal_provider:",
    Vu = "default_chain_changed";
var Qu, Wu, Gu = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {},
    Ju = {
        exports: {}
    };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
Qu = Ju, Wu = Ju.exports,
    function() {
        var t, e = "Expected a function",
            r = "__lodash_hash_undefined__",
            i = "__lodash_placeholder__",
            n = 16,
            s = 32,
            o = 64,
            a = 128,
            c = 256,
            h = 1 / 0,
            u = 9007199254740991,
            l = NaN,
            f = 4294967295,
            p = f - 1,
            d = f >>> 1,
            g = [
                ["ary", a],
                ["bind", 1],
                ["bindKey", 2],
                ["curry", 8],
                ["curryRight", n],
                ["flip", 512],
                ["partial", s],
                ["partialRight", o],
                ["rearg", c]
            ],
            m = "[object Arguments]",
            v = "[object Array]",
            y = "[object Boolean]",
            w = "[object Date]",
            b = "[object Error]",
            A = "[object Function]",
            _ = "[object GeneratorFunction]",
            E = "[object Map]",
            I = "[object Number]",
            S = "[object Object]",
            M = "[object Promise]",
            P = "[object RegExp]",
            x = "[object Set]",
            N = "[object String]",
            C = "[object Symbol]",
            O = "[object WeakMap]",
            R = "[object ArrayBuffer]",
            T = "[object DataView]",
            q = "[object Float32Array]",
            D = "[object Float64Array]",
            k = "[object Int8Array]",
            B = "[object Int16Array]",
            U = "[object Int32Array]",
            j = "[object Uint8Array]",
            z = "[object Uint8ClampedArray]",
            L = "[object Uint16Array]",
            F = "[object Uint32Array]",
            K = /\b__p \+= '';/g,
            H = /\b(__p \+=) '' \+/g,
            $ = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
            V = /&(?:amp|lt|gt|quot|#39);/g,
            Q = /[&<>"']/g,
            W = RegExp(V.source),
            G = RegExp(Q.source),
            J = /<%-([\s\S]+?)%>/g,
            Y = /<%([\s\S]+?)%>/g,
            X = /<%=([\s\S]+?)%>/g,
            Z = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
            tt = /^\w*$/,
            et = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
            rt = /[\\^$.*+?()[\]{}|]/g,
            it = RegExp(rt.source),
            nt = /^\s+/,
            st = /\s/,
            ot = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
            at = /\{\n\/\* \[wrapped with (.+)\] \*/,
            ct = /,? & /,
            ht = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
            ut = /[()=,{}\[\]\/\s]/,
            lt = /\\(\\)?/g,
            ft = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
            pt = /\w*$/,
            dt = /^[-+]0x[0-9a-f]+$/i,
            gt = /^0b[01]+$/i,
            mt = /^\[object .+?Constructor\]$/,
            vt = /^0o[0-7]+$/i,
            yt = /^(?:0|[1-9]\d*)$/,
            wt = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
            bt = /($^)/,
            At = /['\n\r\u2028\u2029\\]/g,
            _t = "\\ud800-\\udfff",
            Et = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",
            It = "\\u2700-\\u27bf",
            St = "a-z\\xdf-\\xf6\\xf8-\\xff",
            Mt = "A-Z\\xc0-\\xd6\\xd8-\\xde",
            Pt = "\\ufe0e\\ufe0f",
            xt = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
            Nt = "['’]",
            Ct = "[" + _t + "]",
            Ot = "[" + xt + "]",
            Rt = "[" + Et + "]",
            Tt = "\\d+",
            qt = "[" + It + "]",
            Dt = "[" + St + "]",
            kt = "[^" + _t + xt + Tt + It + St + Mt + "]",
            Bt = "\\ud83c[\\udffb-\\udfff]",
            Ut = "[^" + _t + "]",
            jt = "(?:\\ud83c[\\udde6-\\uddff]){2}",
            zt = "[\\ud800-\\udbff][\\udc00-\\udfff]",
            Lt = "[" + Mt + "]",
            Ft = "\\u200d",
            Kt = "(?:" + Dt + "|" + kt + ")",
            Ht = "(?:" + Lt + "|" + kt + ")",
            $t = "(?:['’](?:d|ll|m|re|s|t|ve))?",
            Vt = "(?:['’](?:D|LL|M|RE|S|T|VE))?",
            Qt = "(?:" + Rt + "|" + Bt + ")?",
            Wt = "[" + Pt + "]?",
            Gt = Wt + Qt + "(?:" + Ft + "(?:" + [Ut, jt, zt].join("|") + ")" + Wt + Qt + ")*",
            Jt = "(?:" + [qt, jt, zt].join("|") + ")" + Gt,
            Xt = "(?:" + [Ut + Rt + "?", Rt, jt, zt, Ct].join("|") + ")",
            Zt = RegExp(Nt, "g"),
            te = RegExp(Rt, "g"),
            ee = RegExp(Bt + "(?=" + Bt + ")|" + Xt + Gt, "g"),
            re = RegExp([Lt + "?" + Dt + "+" + $t + "(?=" + [Ot, Lt, "$"].join("|") + ")", Ht + "+" + Vt + "(?=" + [Ot, Lt + Kt, "$"].join("|") + ")", Lt + "?" + Kt + "+" + $t, Lt + "+" + Vt, "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Tt, Jt].join("|"), "g"),
            ie = RegExp("[" + Ft + _t + Et + Pt + "]"),
            ne = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
            se = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"],
            oe = -1,
            ae = {};
        ae[q] = ae[D] = ae[k] = ae[B] = ae[U] = ae[j] = ae[z] = ae[L] = ae[F] = !0, ae[m] = ae[v] = ae[R] = ae[y] = ae[T] = ae[w] = ae[b] = ae[A] = ae[E] = ae[I] = ae[S] = ae[P] = ae[x] = ae[N] = ae[O] = !1;
        var ce = {};
        ce[m] = ce[v] = ce[R] = ce[T] = ce[y] = ce[w] = ce[q] = ce[D] = ce[k] = ce[B] = ce[U] = ce[E] = ce[I] = ce[S] = ce[P] = ce[x] = ce[N] = ce[C] = ce[j] = ce[z] = ce[L] = ce[F] = !0, ce[b] = ce[A] = ce[O] = !1;
        var he = {
                "\\": "\\",
                "'": "'",
                "\n": "n",
                "\r": "r",
                "\u2028": "u2028",
                "\u2029": "u2029"
            },
            ue = parseFloat,
            le = parseInt,
            fe = "object" == typeof Gu && Gu && Gu.Object === Object && Gu,
            pe = "object" == typeof self && self && self.Object === Object && self,
            de = fe || pe || Function("return this")(),
            ge = Wu && !Wu.nodeType && Wu,
            me = ge && Qu && !Qu.nodeType && Qu,
            ve = me && me.exports === ge,
            ye = ve && fe.process,
            we = function() {
                try {
                    return me && me.require && me.require("util").types || ye && ye.binding && ye.binding("util")
                } catch {}
            }(),
            be = we && we.isArrayBuffer,
            Ae = we && we.isDate,
            _e = we && we.isMap,
            Ee = we && we.isRegExp,
            Ie = we && we.isSet,
            Se = we && we.isTypedArray;

        function Me(t, e, r) {
            switch (r.length) {
                case 0:
                    return t.call(e);
                case 1:
                    return t.call(e, r[0]);
                case 2:
                    return t.call(e, r[0], r[1]);
                case 3:
                    return t.call(e, r[0], r[1], r[2])
            }
            return t.apply(e, r)
        }

        function Pe(t, e, r, i) {
            for (var n = -1, s = null == t ? 0 : t.length; ++n < s;) {
                var o = t[n];
                e(i, o, r(o), t)
            }
            return i
        }

        function xe(t, e) {
            for (var r = -1, i = null == t ? 0 : t.length; ++r < i && !1 !== e(t[r], r, t););
            return t
        }

        function Ne(t, e) {
            for (var r = null == t ? 0 : t.length; r-- && !1 !== e(t[r], r, t););
            return t
        }

        function Ce(t, e) {
            for (var r = -1, i = null == t ? 0 : t.length; ++r < i;)
                if (!e(t[r], r, t)) return !1;
            return !0
        }

        function Oe(t, e) {
            for (var r = -1, i = null == t ? 0 : t.length, n = 0, s = []; ++r < i;) {
                var o = t[r];
                e(o, r, t) && (s[n++] = o)
            }
            return s
        }

        function Re(t, e) {
            return !(null == t || !t.length) && Fe(t, e, 0) > -1
        }

        function Te(t, e, r) {
            for (var i = -1, n = null == t ? 0 : t.length; ++i < n;)
                if (r(e, t[i])) return !0;
            return !1
        }

        function qe(t, e) {
            for (var r = -1, i = null == t ? 0 : t.length, n = Array(i); ++r < i;) n[r] = e(t[r], r, t);
            return n
        }

        function De(t, e) {
            for (var r = -1, i = e.length, n = t.length; ++r < i;) t[n + r] = e[r];
            return t
        }

        function ke(t, e, r, i) {
            var n = -1,
                s = null == t ? 0 : t.length;
            for (i && s && (r = t[++n]); ++n < s;) r = e(r, t[n], n, t);
            return r
        }

        function Be(t, e, r, i) {
            var n = null == t ? 0 : t.length;
            for (i && n && (r = t[--n]); n--;) r = e(r, t[n], n, t);
            return r
        }

        function Ue(t, e) {
            for (var r = -1, i = null == t ? 0 : t.length; ++r < i;)
                if (e(t[r], r, t)) return !0;
            return !1
        }
        var je = Ve("length");

        function ze(t, e, r) {
            var i;
            return r(t, (function(t, r, n) {
                if (e(t, r, n)) return i = r, !1
            })), i
        }

        function Le(t, e, r, i) {
            for (var n = t.length, s = r + (i ? 1 : -1); i ? s-- : ++s < n;)
                if (e(t[s], s, t)) return s;
            return -1
        }

        function Fe(t, e, r) {
            return e == e ? function(t, e, r) {
                for (var i = r - 1, n = t.length; ++i < n;)
                    if (t[i] === e) return i;
                return -1
            }(t, e, r) : Le(t, He, r)
        }

        function Ke(t, e, r, i) {
            for (var n = r - 1, s = t.length; ++n < s;)
                if (i(t[n], e)) return n;
            return -1
        }

        function He(t) {
            return t != t
        }

        function $e(t, e) {
            var r = null == t ? 0 : t.length;
            return r ? Ge(t, e) / r : l
        }

        function Ve(e) {
            return function(r) {
                return null == r ? t : r[e]
            }
        }

        function Qe(e) {
            return function(r) {
                return null == e ? t : e[r]
            }
        }

        function We(t, e, r, i, n) {
            return n(t, (function(t, n, s) {
                r = i ? (i = !1, t) : e(r, t, n, s)
            })), r
        }

        function Ge(e, r) {
            for (var i, n = -1, s = e.length; ++n < s;) {
                var o = r(e[n]);
                o !== t && (i = i === t ? o : i + o)
            }
            return i
        }

        function Je(t, e) {
            for (var r = -1, i = Array(t); ++r < t;) i[r] = e(r);
            return i
        }

        function Ye(t) {
            return t && t.slice(0, pr(t) + 1).replace(nt, "")
        }

        function Xe(t) {
            return function(e) {
                return t(e)
            }
        }

        function Ze(t, e) {
            return qe(e, (function(e) {
                return t[e]
            }))
        }

        function tr(t, e) {
            return t.has(e)
        }

        function er(t, e) {
            for (var r = -1, i = t.length; ++r < i && Fe(e, t[r], 0) > -1;);
            return r
        }

        function rr(t, e) {
            for (var r = t.length; r-- && Fe(e, t[r], 0) > -1;);
            return r
        }
        var ir = Qe({
                "À": "A",
                "Á": "A",
                "Â": "A",
                "Ã": "A",
                "Ä": "A",
                "Å": "A",
                "à": "a",
                "á": "a",
                "â": "a",
                "ã": "a",
                "ä": "a",
                "å": "a",
                "Ç": "C",
                "ç": "c",
                "Ð": "D",
                "ð": "d",
                "È": "E",
                "É": "E",
                "Ê": "E",
                "Ë": "E",
                "è": "e",
                "é": "e",
                "ê": "e",
                "ë": "e",
                "Ì": "I",
                "Í": "I",
                "Î": "I",
                "Ï": "I",
                "ì": "i",
                "í": "i",
                "î": "i",
                "ï": "i",
                "Ñ": "N",
                "ñ": "n",
                "Ò": "O",
                "Ó": "O",
                "Ô": "O",
                "Õ": "O",
                "Ö": "O",
                "Ø": "O",
                "ò": "o",
                "ó": "o",
                "ô": "o",
                "õ": "o",
                "ö": "o",
                "ø": "o",
                "Ù": "U",
                "Ú": "U",
                "Û": "U",
                "Ü": "U",
                "ù": "u",
                "ú": "u",
                "û": "u",
                "ü": "u",
                "Ý": "Y",
                "ý": "y",
                "ÿ": "y",
                "Æ": "Ae",
                "æ": "ae",
                "Þ": "Th",
                "þ": "th",
                "ß": "ss",
                "Ā": "A",
                "Ă": "A",
                "Ą": "A",
                "ā": "a",
                "ă": "a",
                "ą": "a",
                "Ć": "C",
                "Ĉ": "C",
                "Ċ": "C",
                "Č": "C",
                "ć": "c",
                "ĉ": "c",
                "ċ": "c",
                "č": "c",
                "Ď": "D",
                "Đ": "D",
                "ď": "d",
                "đ": "d",
                "Ē": "E",
                "Ĕ": "E",
                "Ė": "E",
                "Ę": "E",
                "Ě": "E",
                "ē": "e",
                "ĕ": "e",
                "ė": "e",
                "ę": "e",
                "ě": "e",
                "Ĝ": "G",
                "Ğ": "G",
                "Ġ": "G",
                "Ģ": "G",
                "ĝ": "g",
                "ğ": "g",
                "ġ": "g",
                "ģ": "g",
                "Ĥ": "H",
                "Ħ": "H",
                "ĥ": "h",
                "ħ": "h",
                "Ĩ": "I",
                "Ī": "I",
                "Ĭ": "I",
                "Į": "I",
                "İ": "I",
                "ĩ": "i",
                "ī": "i",
                "ĭ": "i",
                "į": "i",
                "ı": "i",
                "Ĵ": "J",
                "ĵ": "j",
                "Ķ": "K",
                "ķ": "k",
                "ĸ": "k",
                "Ĺ": "L",
                "Ļ": "L",
                "Ľ": "L",
                "Ŀ": "L",
                "Ł": "L",
                "ĺ": "l",
                "ļ": "l",
                "ľ": "l",
                "ŀ": "l",
                "ł": "l",
                "Ń": "N",
                "Ņ": "N",
                "Ň": "N",
                "Ŋ": "N",
                "ń": "n",
                "ņ": "n",
                "ň": "n",
                "ŋ": "n",
                "Ō": "O",
                "Ŏ": "O",
                "Ő": "O",
                "ō": "o",
                "ŏ": "o",
                "ő": "o",
                "Ŕ": "R",
                "Ŗ": "R",
                "Ř": "R",
                "ŕ": "r",
                "ŗ": "r",
                "ř": "r",
                "Ś": "S",
                "Ŝ": "S",
                "Ş": "S",
                "Š": "S",
                "ś": "s",
                "ŝ": "s",
                "ş": "s",
                "š": "s",
                "Ţ": "T",
                "Ť": "T",
                "Ŧ": "T",
                "ţ": "t",
                "ť": "t",
                "ŧ": "t",
                "Ũ": "U",
                "Ū": "U",
                "Ŭ": "U",
                "Ů": "U",
                "Ű": "U",
                "Ų": "U",
                "ũ": "u",
                "ū": "u",
                "ŭ": "u",
                "ů": "u",
                "ű": "u",
                "ų": "u",
                "Ŵ": "W",
                "ŵ": "w",
                "Ŷ": "Y",
                "ŷ": "y",
                "Ÿ": "Y",
                "Ź": "Z",
                "Ż": "Z",
                "Ž": "Z",
                "ź": "z",
                "ż": "z",
                "ž": "z",
                "Ĳ": "IJ",
                "ĳ": "ij",
                "Œ": "Oe",
                "œ": "oe",
                "ŉ": "'n",
                "ſ": "s"
            }),
            nr = Qe({
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;"
            });

        function sr(t) {
            return "\\" + he[t]
        }

        function or(t) {
            return ie.test(t)
        }

        function ar(t) {
            var e = -1,
                r = Array(t.size);
            return t.forEach((function(t, i) {
                r[++e] = [i, t]
            })), r
        }

        function cr(t, e) {
            return function(r) {
                return t(e(r))
            }
        }

        function hr(t, e) {
            for (var r = -1, n = t.length, s = 0, o = []; ++r < n;) {
                var a = t[r];
                (a === e || a === i) && (t[r] = i, o[s++] = r)
            }
            return o
        }

        function ur(t) {
            var e = -1,
                r = Array(t.size);
            return t.forEach((function(t) {
                r[++e] = t
            })), r
        }

        function lr(t) {
            return or(t) ? function(t) {
                for (var e = ee.lastIndex = 0; ee.test(t);) ++e;
                return e
            }(t) : je(t)
        }

        function fr(t) {
            return or(t) ? function(t) {
                return t.match(ee) || []
            }(t) : function(t) {
                return t.split("")
            }(t)
        }

        function pr(t) {
            for (var e = t.length; e-- && st.test(t.charAt(e)););
            return e
        }
        var dr = Qe({
                "&amp;": "&",
                "&lt;": "<",
                "&gt;": ">",
                "&quot;": '"',
                "&#39;": "'"
            }),
            gr = function st(_t) {
                var Et, It = (_t = null == _t ? de : gr.defaults(de.Object(), _t, gr.pick(de, se))).Array,
                    St = _t.Date,
                    Mt = _t.Error,
                    Pt = _t.Function,
                    xt = _t.Math,
                    Nt = _t.Object,
                    Ct = _t.RegExp,
                    Ot = _t.String,
                    Rt = _t.TypeError,
                    Tt = It.prototype,
                    qt = Pt.prototype,
                    Dt = Nt.prototype,
                    kt = _t["__core-js_shared__"],
                    Bt = qt.toString,
                    Ut = Dt.hasOwnProperty,
                    jt = 0,
                    zt = (Et = /[^.]+$/.exec(kt && kt.keys && kt.keys.IE_PROTO || "")) ? "Symbol(src)_1." + Et : "",
                    Lt = Dt.toString,
                    Ft = Bt.call(Nt),
                    Kt = de._,
                    Ht = Ct("^" + Bt.call(Ut).replace(rt, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                    $t = ve ? _t.Buffer : t,
                    Vt = _t.Symbol,
                    Qt = _t.Uint8Array,
                    Wt = $t ? $t.allocUnsafe : t,
                    Gt = cr(Nt.getPrototypeOf, Nt),
                    Jt = Nt.create,
                    Xt = Dt.propertyIsEnumerable,
                    ee = Tt.splice,
                    ie = Vt ? Vt.isConcatSpreadable : t,
                    he = Vt ? Vt.iterator : t,
                    fe = Vt ? Vt.toStringTag : t,
                    pe = function() {
                        try {
                            var t = ds(Nt, "defineProperty");
                            return t({}, "", {}), t
                        } catch {}
                    }(),
                    ge = _t.clearTimeout !== de.clearTimeout && _t.clearTimeout,
                    me = St && St.now !== de.Date.now && St.now,
                    ye = _t.setTimeout !== de.setTimeout && _t.setTimeout,
                    we = xt.ceil,
                    je = xt.floor,
                    Qe = Nt.getOwnPropertySymbols,
                    mr = $t ? $t.isBuffer : t,
                    vr = _t.isFinite,
                    yr = Tt.join,
                    wr = cr(Nt.keys, Nt),
                    br = xt.max,
                    Ar = xt.min,
                    _r = St.now,
                    Er = _t.parseInt,
                    Ir = xt.random,
                    Sr = Tt.reverse,
                    Mr = ds(_t, "DataView"),
                    Pr = ds(_t, "Map"),
                    xr = ds(_t, "Promise"),
                    Nr = ds(_t, "Set"),
                    Cr = ds(_t, "WeakMap"),
                    Or = ds(Nt, "create"),
                    Rr = Cr && new Cr,
                    Tr = {},
                    qr = zs(Mr),
                    Dr = zs(Pr),
                    kr = zs(xr),
                    Br = zs(Nr),
                    Ur = zs(Cr),
                    jr = Vt ? Vt.prototype : t,
                    zr = jr ? jr.valueOf : t,
                    Lr = jr ? jr.toString : t;

                function Fr(t) {
                    if (na(t) && !Qo(t) && !(t instanceof Vr)) {
                        if (t instanceof $r) return t;
                        if (Ut.call(t, "__wrapped__")) return Ls(t)
                    }
                    return new $r(t)
                }
                var Kr = function() {
                    function e() {}
                    return function(r) {
                        if (!ia(r)) return {};
                        if (Jt) return Jt(r);
                        e.prototype = r;
                        var i = new e;
                        return e.prototype = t, i
                    }
                }();

                function Hr() {}

                function $r(e, r) {
                    this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!r, this.__index__ = 0, this.__values__ = t
                }

                function Vr(t) {
                    this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = f, this.__views__ = []
                }

                function Qr(t) {
                    var e = -1,
                        r = null == t ? 0 : t.length;
                    for (this.clear(); ++e < r;) {
                        var i = t[e];
                        this.set(i[0], i[1])
                    }
                }

                function Wr(t) {
                    var e = -1,
                        r = null == t ? 0 : t.length;
                    for (this.clear(); ++e < r;) {
                        var i = t[e];
                        this.set(i[0], i[1])
                    }
                }

                function Gr(t) {
                    var e = -1,
                        r = null == t ? 0 : t.length;
                    for (this.clear(); ++e < r;) {
                        var i = t[e];
                        this.set(i[0], i[1])
                    }
                }

                function Jr(t) {
                    var e = -1,
                        r = null == t ? 0 : t.length;
                    for (this.__data__ = new Gr; ++e < r;) this.add(t[e])
                }

                function Yr(t) {
                    var e = this.__data__ = new Wr(t);
                    this.size = e.size
                }

                function Xr(t, e) {
                    var r = Qo(t),
                        i = !r && Vo(t),
                        n = !r && !i && Yo(t),
                        s = !r && !i && !n && fa(t),
                        o = r || i || n || s,
                        a = o ? Je(t.length, Ot) : [],
                        c = a.length;
                    for (var h in t)(e || Ut.call(t, h)) && (!o || !("length" == h || n && ("offset" == h || "parent" == h) || s && ("buffer" == h || "byteLength" == h || "byteOffset" == h) || As(h, c))) && a.push(h);
                    return a
                }

                function Zr(e) {
                    var r = e.length;
                    return r ? e[Ji(0, r - 1)] : t
                }

                function ti(t, e) {
                    return Bs(Rn(t), hi(e, 0, t.length))
                }

                function ei(t) {
                    return Bs(Rn(t))
                }

                function ri(e, r, i) {
                    (i !== t && !Ko(e[r], i) || i === t && !(r in e)) && ai(e, r, i)
                }

                function ii(e, r, i) {
                    var n = e[r];
                    (!Ut.call(e, r) || !Ko(n, i) || i === t && !(r in e)) && ai(e, r, i)
                }

                function ni(t, e) {
                    for (var r = t.length; r--;)
                        if (Ko(t[r][0], e)) return r;
                    return -1
                }

                function si(t, e, r, i) {
                    return di(t, (function(t, n, s) {
                        e(i, t, r(t), s)
                    })), i
                }

                function oi(t, e) {
                    return t && Tn(e, qa(e), t)
                }

                function ai(t, e, r) {
                    "__proto__" == e && pe ? pe(t, e, {
                        configurable: !0,
                        enumerable: !0,
                        value: r,
                        writable: !0
                    }) : t[e] = r
                }

                function ci(e, r) {
                    for (var i = -1, n = r.length, s = It(n), o = null == e; ++i < n;) s[i] = o ? t : Na(e, r[i]);
                    return s
                }

                function hi(e, r, i) {
                    return e == e && (i !== t && (e = e <= i ? e : i), r !== t && (e = e >= r ? e : r)), e
                }

                function ui(e, r, i, n, s, o) {
                    var a, c = 1 & r,
                        h = 2 & r,
                        u = 4 & r;
                    if (i && (a = s ? i(e, n, s, o) : i(e)), a !== t) return a;
                    if (!ia(e)) return e;
                    var l = Qo(e);
                    if (l) {
                        if (a = function(t) {
                                var e = t.length,
                                    r = new t.constructor(e);
                                return e && "string" == typeof t[0] && Ut.call(t, "index") && (r.index = t.index, r.input = t.input), r
                            }(e), !c) return Rn(e, a)
                    } else {
                        var f = vs(e),
                            p = f == A || f == _;
                        if (Yo(e)) return Mn(e, c);
                        if (f == S || f == m || p && !s) {
                            if (a = h || p ? {} : ws(e), !c) return h ? function(t, e) {
                                return Tn(t, ms(t), e)
                            }(e, function(t, e) {
                                return t && Tn(e, Da(e), t)
                            }(a, e)) : function(t, e) {
                                return Tn(t, gs(t), e)
                            }(e, oi(a, e))
                        } else {
                            if (!ce[f]) return s ? e : {};
                            a = function(t, e, r) {
                                var i = t.constructor;
                                switch (e) {
                                    case R:
                                        return Pn(t);
                                    case y:
                                    case w:
                                        return new i(+t);
                                    case T:
                                        return function(t, e) {
                                            var r = e ? Pn(t.buffer) : t.buffer;
                                            return new t.constructor(r, t.byteOffset, t.byteLength)
                                        }(t, r);
                                    case q:
                                    case D:
                                    case k:
                                    case B:
                                    case U:
                                    case j:
                                    case z:
                                    case L:
                                    case F:
                                        return xn(t, r);
                                    case E:
                                        return new i;
                                    case I:
                                    case N:
                                        return new i(t);
                                    case P:
                                        return function(t) {
                                            var e = new t.constructor(t.source, pt.exec(t));
                                            return e.lastIndex = t.lastIndex, e
                                        }(t);
                                    case x:
                                        return new i;
                                    case C:
                                        return function(t) {
                                            return zr ? Nt(zr.call(t)) : {}
                                        }(t)
                                }
                            }(e, f, c)
                        }
                    }
                    o || (o = new Yr);
                    var d = o.get(e);
                    if (d) return d;
                    o.set(e, a), ha(e) ? e.forEach((function(t) {
                        a.add(ui(t, r, i, t, e, o))
                    })) : sa(e) && e.forEach((function(t, n) {
                        a.set(n, ui(t, r, i, n, e, o))
                    }));
                    var g = l ? t : (u ? h ? as : os : h ? Da : qa)(e);
                    return xe(g || e, (function(t, n) {
                        g && (t = e[n = t]), ii(a, n, ui(t, r, i, n, e, o))
                    })), a
                }

                function li(e, r, i) {
                    var n = i.length;
                    if (null == e) return !n;
                    for (e = Nt(e); n--;) {
                        var s = i[n],
                            o = r[s],
                            a = e[s];
                        if (a === t && !(s in e) || !o(a)) return !1
                    }
                    return !0
                }

                function fi(r, i, n) {
                    if ("function" != typeof r) throw new Rt(e);
                    return Ts((function() {
                        r.apply(t, n)
                    }), i)
                }

                function pi(t, e, r, i) {
                    var n = -1,
                        s = Re,
                        o = !0,
                        a = t.length,
                        c = [],
                        h = e.length;
                    if (!a) return c;
                    r && (e = qe(e, Xe(r))), i ? (s = Te, o = !1) : e.length >= 200 && (s = tr, o = !1, e = new Jr(e));
                    t: for (; ++n < a;) {
                        var u = t[n],
                            l = null == r ? u : r(u);
                        if (u = i || 0 !== u ? u : 0, o && l == l) {
                            for (var f = h; f--;)
                                if (e[f] === l) continue t;
                            c.push(u)
                        } else s(e, l, i) || c.push(u)
                    }
                    return c
                }
                Fr.templateSettings = {
                    escape: J,
                    evaluate: Y,
                    interpolate: X,
                    variable: "",
                    imports: {
                        _: Fr
                    }
                }, Fr.prototype = Hr.prototype, Fr.prototype.constructor = Fr, $r.prototype = Kr(Hr.prototype), $r.prototype.constructor = $r, Vr.prototype = Kr(Hr.prototype), Vr.prototype.constructor = Vr, Qr.prototype.clear = function() {
                    this.__data__ = Or ? Or(null) : {}, this.size = 0
                }, Qr.prototype.delete = function(t) {
                    var e = this.has(t) && delete this.__data__[t];
                    return this.size -= e ? 1 : 0, e
                }, Qr.prototype.get = function(e) {
                    var i = this.__data__;
                    if (Or) {
                        var n = i[e];
                        return n === r ? t : n
                    }
                    return Ut.call(i, e) ? i[e] : t
                }, Qr.prototype.has = function(e) {
                    var r = this.__data__;
                    return Or ? r[e] !== t : Ut.call(r, e)
                }, Qr.prototype.set = function(e, i) {
                    var n = this.__data__;
                    return this.size += this.has(e) ? 0 : 1, n[e] = Or && i === t ? r : i, this
                }, Wr.prototype.clear = function() {
                    this.__data__ = [], this.size = 0
                }, Wr.prototype.delete = function(t) {
                    var e = this.__data__,
                        r = ni(e, t);
                    return !(r < 0 || (r == e.length - 1 ? e.pop() : ee.call(e, r, 1), --this.size, 0))
                }, Wr.prototype.get = function(e) {
                    var r = this.__data__,
                        i = ni(r, e);
                    return i < 0 ? t : r[i][1]
                }, Wr.prototype.has = function(t) {
                    return ni(this.__data__, t) > -1
                }, Wr.prototype.set = function(t, e) {
                    var r = this.__data__,
                        i = ni(r, t);
                    return i < 0 ? (++this.size, r.push([t, e])) : r[i][1] = e, this
                }, Gr.prototype.clear = function() {
                    this.size = 0, this.__data__ = {
                        hash: new Qr,
                        map: new(Pr || Wr),
                        string: new Qr
                    }
                }, Gr.prototype.delete = function(t) {
                    var e = fs(this, t).delete(t);
                    return this.size -= e ? 1 : 0, e
                }, Gr.prototype.get = function(t) {
                    return fs(this, t).get(t)
                }, Gr.prototype.has = function(t) {
                    return fs(this, t).has(t)
                }, Gr.prototype.set = function(t, e) {
                    var r = fs(this, t),
                        i = r.size;
                    return r.set(t, e), this.size += r.size == i ? 0 : 1, this
                }, Jr.prototype.add = Jr.prototype.push = function(t) {
                    return this.__data__.set(t, r), this
                }, Jr.prototype.has = function(t) {
                    return this.__data__.has(t)
                }, Yr.prototype.clear = function() {
                    this.__data__ = new Wr, this.size = 0
                }, Yr.prototype.delete = function(t) {
                    var e = this.__data__,
                        r = e.delete(t);
                    return this.size = e.size, r
                }, Yr.prototype.get = function(t) {
                    return this.__data__.get(t)
                }, Yr.prototype.has = function(t) {
                    return this.__data__.has(t)
                }, Yr.prototype.set = function(t, e) {
                    var r = this.__data__;
                    if (r instanceof Wr) {
                        var i = r.__data__;
                        if (!Pr || i.length < 199) return i.push([t, e]), this.size = ++r.size, this;
                        r = this.__data__ = new Gr(i)
                    }
                    return r.set(t, e), this.size = r.size, this
                };
                var di = kn(_i),
                    gi = kn(Ei, !0);

                function mi(t, e) {
                    var r = !0;
                    return di(t, (function(t, i, n) {
                        return r = !!e(t, i, n)
                    })), r
                }

                function vi(e, r, i) {
                    for (var n = -1, s = e.length; ++n < s;) {
                        var o = e[n],
                            a = r(o);
                        if (null != a && (c === t ? a == a && !la(a) : i(a, c))) var c = a,
                            h = o
                    }
                    return h
                }

                function yi(t, e) {
                    var r = [];
                    return di(t, (function(t, i, n) {
                        e(t, i, n) && r.push(t)
                    })), r
                }

                function wi(t, e, r, i, n) {
                    var s = -1,
                        o = t.length;
                    for (r || (r = bs), n || (n = []); ++s < o;) {
                        var a = t[s];
                        e > 0 && r(a) ? e > 1 ? wi(a, e - 1, r, i, n) : De(n, a) : i || (n[n.length] = a)
                    }
                    return n
                }
                var bi = Bn(),
                    Ai = Bn(!0);

                function _i(t, e) {
                    return t && bi(t, e, qa)
                }

                function Ei(t, e) {
                    return t && Ai(t, e, qa)
                }

                function Ii(t, e) {
                    return Oe(e, (function(e) {
                        return ta(t[e])
                    }))
                }

                function Si(e, r) {
                    for (var i = 0, n = (r = _n(r, e)).length; null != e && i < n;) e = e[js(r[i++])];
                    return i && i == n ? e : t
                }

                function Mi(t, e, r) {
                    var i = e(t);
                    return Qo(t) ? i : De(i, r(t))
                }

                function Pi(e) {
                    return null == e ? e === t ? "[object Undefined]" : "[object Null]" : fe && fe in Nt(e) ? function(e) {
                        var r = Ut.call(e, fe),
                            i = e[fe];
                        try {
                            e[fe] = t;
                            var n = !0
                        } catch {}
                        var s = Lt.call(e);
                        return n && (r ? e[fe] = i : delete e[fe]), s
                    }(e) : function(t) {
                        return Lt.call(t)
                    }(e)
                }

                function xi(t, e) {
                    return t > e
                }

                function Ni(t, e) {
                    return null != t && Ut.call(t, e)
                }

                function Ci(t, e) {
                    return null != t && e in Nt(t)
                }

                function Oi(e, r, i) {
                    for (var n = i ? Te : Re, s = e[0].length, o = e.length, a = o, c = It(o), h = 1 / 0, u = []; a--;) {
                        var l = e[a];
                        a && r && (l = qe(l, Xe(r))), h = Ar(l.length, h), c[a] = !i && (r || s >= 120 && l.length >= 120) ? new Jr(a && l) : t
                    }
                    l = e[0];
                    var f = -1,
                        p = c[0];
                    t: for (; ++f < s && u.length < h;) {
                        var d = l[f],
                            g = r ? r(d) : d;
                        if (d = i || 0 !== d ? d : 0, !(p ? tr(p, g) : n(u, g, i))) {
                            for (a = o; --a;) {
                                var m = c[a];
                                if (!(m ? tr(m, g) : n(e[a], g, i))) continue t
                            }
                            p && p.push(g), u.push(d)
                        }
                    }
                    return u
                }

                function Ri(e, r, i) {
                    var n = null == (e = Cs(e, r = _n(r, e))) ? e : e[js(Xs(r))];
                    return null == n ? t : Me(n, e, i)
                }

                function Ti(t) {
                    return na(t) && Pi(t) == m
                }

                function qi(e, r, i, n, s) {
                    return e === r || (null == e || null == r || !na(e) && !na(r) ? e != e && r != r : function(e, r, i, n, s, o) {
                        var a = Qo(e),
                            c = Qo(r),
                            h = a ? v : vs(e),
                            u = c ? v : vs(r),
                            l = (h = h == m ? S : h) == S,
                            f = (u = u == m ? S : u) == S,
                            p = h == u;
                        if (p && Yo(e)) {
                            if (!Yo(r)) return !1;
                            a = !0, l = !1
                        }
                        if (p && !l) return o || (o = new Yr), a || fa(e) ? ns(e, r, i, n, s, o) : function(t, e, r, i, n, s, o) {
                            switch (r) {
                                case T:
                                    if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1;
                                    t = t.buffer, e = e.buffer;
                                case R:
                                    return !(t.byteLength != e.byteLength || !s(new Qt(t), new Qt(e)));
                                case y:
                                case w:
                                case I:
                                    return Ko(+t, +e);
                                case b:
                                    return t.name == e.name && t.message == e.message;
                                case P:
                                case N:
                                    return t == e + "";
                                case E:
                                    var a = ar;
                                case x:
                                    var c = 1 & i;
                                    if (a || (a = ur), t.size != e.size && !c) return !1;
                                    var h = o.get(t);
                                    if (h) return h == e;
                                    i |= 2, o.set(t, e);
                                    var u = ns(a(t), a(e), i, n, s, o);
                                    return o.delete(t), u;
                                case C:
                                    if (zr) return zr.call(t) == zr.call(e)
                            }
                            return !1
                        }(e, r, h, i, n, s, o);
                        if (!(1 & i)) {
                            var d = l && Ut.call(e, "__wrapped__"),
                                g = f && Ut.call(r, "__wrapped__");
                            if (d || g) {
                                var A = d ? e.value() : e,
                                    _ = g ? r.value() : r;
                                return o || (o = new Yr), s(A, _, i, n, o)
                            }
                        }
                        return !!p && (o || (o = new Yr), function(e, r, i, n, s, o) {
                            var a = 1 & i,
                                c = os(e),
                                h = c.length,
                                u = os(r),
                                l = u.length;
                            if (h != l && !a) return !1;
                            for (var f = h; f--;) {
                                var p = c[f];
                                if (!(a ? p in r : Ut.call(r, p))) return !1
                            }
                            var d = o.get(e),
                                g = o.get(r);
                            if (d && g) return d == r && g == e;
                            var m = !0;
                            o.set(e, r), o.set(r, e);
                            for (var v = a; ++f < h;) {
                                var y = e[p = c[f]],
                                    w = r[p];
                                if (n) var b = a ? n(w, y, p, r, e, o) : n(y, w, p, e, r, o);
                                if (!(b === t ? y === w || s(y, w, i, n, o) : b)) {
                                    m = !1;
                                    break
                                }
                                v || (v = "constructor" == p)
                            }
                            if (m && !v) {
                                var A = e.constructor,
                                    _ = r.constructor;
                                A != _ && "constructor" in e && "constructor" in r && !("function" == typeof A && A instanceof A && "function" == typeof _ && _ instanceof _) && (m = !1)
                            }
                            return o.delete(e), o.delete(r), m
                        }(e, r, i, n, s, o))
                    }(e, r, i, n, qi, s))
                }

                function Di(e, r, i, n) {
                    var s = i.length,
                        o = s,
                        a = !n;
                    if (null == e) return !o;
                    for (e = Nt(e); s--;) {
                        var c = i[s];
                        if (a && c[2] ? c[1] !== e[c[0]] : !(c[0] in e)) return !1
                    }
                    for (; ++s < o;) {
                        var h = (c = i[s])[0],
                            u = e[h],
                            l = c[1];
                        if (a && c[2]) {
                            if (u === t && !(h in e)) return !1
                        } else {
                            var f = new Yr;
                            if (n) var p = n(u, l, h, e, r, f);
                            if (!(p === t ? qi(l, u, 3, n, f) : p)) return !1
                        }
                    }
                    return !0
                }

                function ki(t) {
                    return !(!ia(t) || function(t) {
                        return !!zt && zt in t
                    }(t)) && (ta(t) ? Ht : mt).test(zs(t))
                }

                function Bi(t) {
                    return "function" == typeof t ? t : null == t ? oc : "object" == typeof t ? Qo(t) ? Ki(t[0], t[1]) : Fi(t) : gc(t)
                }

                function Ui(t) {
                    if (!Ms(t)) return wr(t);
                    var e = [];
                    for (var r in Nt(t)) Ut.call(t, r) && "constructor" != r && e.push(r);
                    return e
                }

                function ji(t) {
                    if (!ia(t)) return function(t) {
                        var e = [];
                        if (null != t)
                            for (var r in Nt(t)) e.push(r);
                        return e
                    }(t);
                    var e = Ms(t),
                        r = [];
                    for (var i in t) "constructor" == i && (e || !Ut.call(t, i)) || r.push(i);
                    return r
                }

                function zi(t, e) {
                    return t < e
                }

                function Li(t, e) {
                    var r = -1,
                        i = Go(t) ? It(t.length) : [];
                    return di(t, (function(t, n, s) {
                        i[++r] = e(t, n, s)
                    })), i
                }

                function Fi(t) {
                    var e = ps(t);
                    return 1 == e.length && e[0][2] ? xs(e[0][0], e[0][1]) : function(r) {
                        return r === t || Di(r, t, e)
                    }
                }

                function Ki(e, r) {
                    return Es(e) && Ps(r) ? xs(js(e), r) : function(i) {
                        var n = Na(i, e);
                        return n === t && n === r ? Ca(i, e) : qi(r, n, 3)
                    }
                }

                function Hi(e, r, i, n, s) {
                    e !== r && bi(r, (function(o, a) {
                        if (s || (s = new Yr), ia(o)) ! function(e, r, i, n, s, o, a) {
                            var c = Os(e, i),
                                h = Os(r, i),
                                u = a.get(h);
                            if (u) ri(e, i, u);
                            else {
                                var l = o ? o(c, h, i + "", e, r, a) : t,
                                    f = l === t;
                                if (f) {
                                    var p = Qo(h),
                                        d = !p && Yo(h),
                                        g = !p && !d && fa(h);
                                    l = h, p || d || g ? Qo(c) ? l = c : Jo(c) ? l = Rn(c) : d ? (f = !1, l = Mn(h, !0)) : g ? (f = !1, l = xn(h, !0)) : l = [] : aa(h) || Vo(h) ? (l = c, Vo(c) ? l = ba(c) : (!ia(c) || ta(c)) && (l = ws(h))) : f = !1
                                }
                                f && (a.set(h, l), s(l, h, n, o, a), a.delete(h)), ri(e, i, l)
                            }
                        }(e, r, a, i, Hi, n, s);
                        else {
                            var c = n ? n(Os(e, a), o, a + "", e, r, s) : t;
                            c === t && (c = o), ri(e, a, c)
                        }
                    }), Da)
                }

                function $i(e, r) {
                    var i = e.length;
                    if (i) return As(r += r < 0 ? i : 0, i) ? e[r] : t
                }

                function Vi(t, e, r) {
                    e = e.length ? qe(e, (function(t) {
                        return Qo(t) ? function(e) {
                            return Si(e, 1 === t.length ? t[0] : t)
                        } : t
                    })) : [oc];
                    var i = -1;
                    return e = qe(e, Xe(ls())),
                        function(t, e) {
                            var r = t.length;
                            for (t.sort(e); r--;) t[r] = t[r].value;
                            return t
                        }(Li(t, (function(t, r, n) {
                            return {
                                criteria: qe(e, (function(e) {
                                    return e(t)
                                })),
                                index: ++i,
                                value: t
                            }
                        })), (function(t, e) {
                            return function(t, e, r) {
                                for (var i = -1, n = t.criteria, s = e.criteria, o = n.length, a = r.length; ++i < o;) {
                                    var c = Nn(n[i], s[i]);
                                    if (c) return i >= a ? c : c * ("desc" == r[i] ? -1 : 1)
                                }
                                return t.index - e.index
                            }(t, e, r)
                        }))
                }

                function Qi(t, e, r) {
                    for (var i = -1, n = e.length, s = {}; ++i < n;) {
                        var o = e[i],
                            a = Si(t, o);
                        r(a, o) && en(s, _n(o, t), a)
                    }
                    return s
                }

                function Wi(t, e, r, i) {
                    var n = i ? Ke : Fe,
                        s = -1,
                        o = e.length,
                        a = t;
                    for (t === e && (e = Rn(e)), r && (a = qe(t, Xe(r))); ++s < o;)
                        for (var c = 0, h = e[s], u = r ? r(h) : h;
                            (c = n(a, u, c, i)) > -1;) a !== t && ee.call(a, c, 1), ee.call(t, c, 1);
                    return t
                }

                function Gi(t, e) {
                    for (var r = t ? e.length : 0, i = r - 1; r--;) {
                        var n = e[r];
                        if (r == i || n !== s) {
                            var s = n;
                            As(n) ? ee.call(t, n, 1) : dn(t, n)
                        }
                    }
                    return t
                }

                function Ji(t, e) {
                    return t + je(Ir() * (e - t + 1))
                }

                function Yi(t, e) {
                    var r = "";
                    if (!t || e < 1 || e > u) return r;
                    do {
                        e % 2 && (r += t), (e = je(e / 2)) && (t += t)
                    } while (e);
                    return r
                }

                function Xi(t, e) {
                    return qs(Ns(t, e, oc), t + "")
                }

                function Zi(t) {
                    return Zr(Ka(t))
                }

                function tn(t, e) {
                    var r = Ka(t);
                    return Bs(r, hi(e, 0, r.length))
                }

                function en(e, r, i, n) {
                    if (!ia(e)) return e;
                    for (var s = -1, o = (r = _n(r, e)).length, a = o - 1, c = e; null != c && ++s < o;) {
                        var h = js(r[s]),
                            u = i;
                        if ("__proto__" === h || "constructor" === h || "prototype" === h) return e;
                        if (s != a) {
                            var l = c[h];
                            (u = n ? n(l, h, c) : t) === t && (u = ia(l) ? l : As(r[s + 1]) ? [] : {})
                        }
                        ii(c, h, u), c = c[h]
                    }
                    return e
                }
                var rn = Rr ? function(t, e) {
                        return Rr.set(t, e), t
                    } : oc,
                    nn = pe ? function(t, e) {
                        return pe(t, "toString", {
                            configurable: !0,
                            enumerable: !1,
                            value: ic(e),
                            writable: !0
                        })
                    } : oc;

                function sn(t) {
                    return Bs(Ka(t))
                }

                function on(t, e, r) {
                    var i = -1,
                        n = t.length;
                    e < 0 && (e = -e > n ? 0 : n + e), (r = r > n ? n : r) < 0 && (r += n), n = e > r ? 0 : r - e >>> 0, e >>>= 0;
                    for (var s = It(n); ++i < n;) s[i] = t[i + e];
                    return s
                }

                function an(t, e) {
                    var r;
                    return di(t, (function(t, i, n) {
                        return !(r = e(t, i, n))
                    })), !!r
                }

                function cn(t, e, r) {
                    var i = 0,
                        n = null == t ? i : t.length;
                    if ("number" == typeof e && e == e && n <= d) {
                        for (; i < n;) {
                            var s = i + n >>> 1,
                                o = t[s];
                            null !== o && !la(o) && (r ? o <= e : o < e) ? i = s + 1 : n = s
                        }
                        return n
                    }
                    return hn(t, e, oc, r)
                }

                function hn(e, r, i, n) {
                    var s = 0,
                        o = null == e ? 0 : e.length;
                    if (0 === o) return 0;
                    for (var a = (r = i(r)) != r, c = null === r, h = la(r), u = r === t; s < o;) {
                        var l = je((s + o) / 2),
                            f = i(e[l]),
                            d = f !== t,
                            g = null === f,
                            m = f == f,
                            v = la(f);
                        if (a) var y = n || m;
                        else y = u ? m && (n || d) : c ? m && d && (n || !g) : h ? m && d && !g && (n || !v) : !g && !v && (n ? f <= r : f < r);
                        y ? s = l + 1 : o = l
                    }
                    return Ar(o, p)
                }

                function un(t, e) {
                    for (var r = -1, i = t.length, n = 0, s = []; ++r < i;) {
                        var o = t[r],
                            a = e ? e(o) : o;
                        if (!r || !Ko(a, c)) {
                            var c = a;
                            s[n++] = 0 === o ? 0 : o
                        }
                    }
                    return s
                }

                function ln(t) {
                    return "number" == typeof t ? t : la(t) ? l : +t
                }

                function fn(t) {
                    if ("string" == typeof t) return t;
                    if (Qo(t)) return qe(t, fn) + "";
                    if (la(t)) return Lr ? Lr.call(t) : "";
                    var e = t + "";
                    return "0" == e && 1 / t == -1 / 0 ? "-0" : e
                }

                function pn(t, e, r) {
                    var i = -1,
                        n = Re,
                        s = t.length,
                        o = !0,
                        a = [],
                        c = a;
                    if (r) o = !1, n = Te;
                    else if (s >= 200) {
                        var h = e ? null : Xn(t);
                        if (h) return ur(h);
                        o = !1, n = tr, c = new Jr
                    } else c = e ? [] : a;
                    t: for (; ++i < s;) {
                        var u = t[i],
                            l = e ? e(u) : u;
                        if (u = r || 0 !== u ? u : 0, o && l == l) {
                            for (var f = c.length; f--;)
                                if (c[f] === l) continue t;
                            e && c.push(l), a.push(u)
                        } else n(c, l, r) || (c !== a && c.push(l), a.push(u))
                    }
                    return a
                }

                function dn(t, e) {
                    return null == (t = Cs(t, e = _n(e, t))) || delete t[js(Xs(e))]
                }

                function gn(t, e, r, i) {
                    return en(t, e, r(Si(t, e)), i)
                }

                function mn(t, e, r, i) {
                    for (var n = t.length, s = i ? n : -1;
                        (i ? s-- : ++s < n) && e(t[s], s, t););
                    return r ? on(t, i ? 0 : s, i ? s + 1 : n) : on(t, i ? s + 1 : 0, i ? n : s)
                }

                function vn(t, e) {
                    var r = t;
                    return r instanceof Vr && (r = r.value()), ke(e, (function(t, e) {
                        return e.func.apply(e.thisArg, De([t], e.args))
                    }), r)
                }

                function yn(t, e, r) {
                    var i = t.length;
                    if (i < 2) return i ? pn(t[0]) : [];
                    for (var n = -1, s = It(i); ++n < i;)
                        for (var o = t[n], a = -1; ++a < i;) a != n && (s[n] = pi(s[n] || o, t[a], e, r));
                    return pn(wi(s, 1), e, r)
                }

                function wn(e, r, i) {
                    for (var n = -1, s = e.length, o = r.length, a = {}; ++n < s;) {
                        var c = n < o ? r[n] : t;
                        i(a, e[n], c)
                    }
                    return a
                }

                function bn(t) {
                    return Jo(t) ? t : []
                }

                function An(t) {
                    return "function" == typeof t ? t : oc
                }

                function _n(t, e) {
                    return Qo(t) ? t : Es(t, e) ? [t] : Us(Aa(t))
                }
                var En = Xi;

                function In(e, r, i) {
                    var n = e.length;
                    return i = i === t ? n : i, !r && i >= n ? e : on(e, r, i)
                }
                var Sn = ge || function(t) {
                    return de.clearTimeout(t)
                };

                function Mn(t, e) {
                    if (e) return t.slice();
                    var r = t.length,
                        i = Wt ? Wt(r) : new t.constructor(r);
                    return t.copy(i), i
                }

                function Pn(t) {
                    var e = new t.constructor(t.byteLength);
                    return new Qt(e).set(new Qt(t)), e
                }

                function xn(t, e) {
                    var r = e ? Pn(t.buffer) : t.buffer;
                    return new t.constructor(r, t.byteOffset, t.length)
                }

                function Nn(e, r) {
                    if (e !== r) {
                        var i = e !== t,
                            n = null === e,
                            s = e == e,
                            o = la(e),
                            a = r !== t,
                            c = null === r,
                            h = r == r,
                            u = la(r);
                        if (!c && !u && !o && e > r || o && a && h && !c && !u || n && a && h || !i && h || !s) return 1;
                        if (!n && !o && !u && e < r || u && i && s && !n && !o || c && i && s || !a && s || !h) return -1
                    }
                    return 0
                }

                function Cn(t, e, r, i) {
                    for (var n = -1, s = t.length, o = r.length, a = -1, c = e.length, h = br(s - o, 0), u = It(c + h), l = !i; ++a < c;) u[a] = e[a];
                    for (; ++n < o;)(l || n < s) && (u[r[n]] = t[n]);
                    for (; h--;) u[a++] = t[n++];
                    return u
                }

                function On(t, e, r, i) {
                    for (var n = -1, s = t.length, o = -1, a = r.length, c = -1, h = e.length, u = br(s - a, 0), l = It(u + h), f = !i; ++n < u;) l[n] = t[n];
                    for (var p = n; ++c < h;) l[p + c] = e[c];
                    for (; ++o < a;)(f || n < s) && (l[p + r[o]] = t[n++]);
                    return l
                }

                function Rn(t, e) {
                    var r = -1,
                        i = t.length;
                    for (e || (e = It(i)); ++r < i;) e[r] = t[r];
                    return e
                }

                function Tn(e, r, i, n) {
                    var s = !i;
                    i || (i = {});
                    for (var o = -1, a = r.length; ++o < a;) {
                        var c = r[o],
                            h = n ? n(i[c], e[c], c, i, e) : t;
                        h === t && (h = e[c]), s ? ai(i, c, h) : ii(i, c, h)
                    }
                    return i
                }

                function qn(t, e) {
                    return function(r, i) {
                        var n = Qo(r) ? Pe : si,
                            s = e ? e() : {};
                        return n(r, t, ls(i, 2), s)
                    }
                }

                function Dn(e) {
                    return Xi((function(r, i) {
                        var n = -1,
                            s = i.length,
                            o = s > 1 ? i[s - 1] : t,
                            a = s > 2 ? i[2] : t;
                        for (o = e.length > 3 && "function" == typeof o ? (s--, o) : t, a && _s(i[0], i[1], a) && (o = s < 3 ? t : o, s = 1), r = Nt(r); ++n < s;) {
                            var c = i[n];
                            c && e(r, c, n, o)
                        }
                        return r
                    }))
                }

                function kn(t, e) {
                    return function(r, i) {
                        if (null == r) return r;
                        if (!Go(r)) return t(r, i);
                        for (var n = r.length, s = e ? n : -1, o = Nt(r);
                            (e ? s-- : ++s < n) && !1 !== i(o[s], s, o););
                        return r
                    }
                }

                function Bn(t) {
                    return function(e, r, i) {
                        for (var n = -1, s = Nt(e), o = i(e), a = o.length; a--;) {
                            var c = o[t ? a : ++n];
                            if (!1 === r(s[c], c, s)) break
                        }
                        return e
                    }
                }

                function Un(e) {
                    return function(r) {
                        var i = or(r = Aa(r)) ? fr(r) : t,
                            n = i ? i[0] : r.charAt(0),
                            s = i ? In(i, 1).join("") : r.slice(1);
                        return n[e]() + s
                    }
                }

                function jn(t) {
                    return function(e) {
                        return ke(tc(Va(e).replace(Zt, "")), t, "")
                    }
                }

                function zn(t) {
                    return function() {
                        var e = arguments;
                        switch (e.length) {
                            case 0:
                                return new t;
                            case 1:
                                return new t(e[0]);
                            case 2:
                                return new t(e[0], e[1]);
                            case 3:
                                return new t(e[0], e[1], e[2]);
                            case 4:
                                return new t(e[0], e[1], e[2], e[3]);
                            case 5:
                                return new t(e[0], e[1], e[2], e[3], e[4]);
                            case 6:
                                return new t(e[0], e[1], e[2], e[3], e[4], e[5]);
                            case 7:
                                return new t(e[0], e[1], e[2], e[3], e[4], e[5], e[6])
                        }
                        var r = Kr(t.prototype),
                            i = t.apply(r, e);
                        return ia(i) ? i : r
                    }
                }

                function Ln(e) {
                    return function(r, i, n) {
                        var s = Nt(r);
                        if (!Go(r)) {
                            var o = ls(i, 3);
                            r = qa(r), i = function(t) {
                                return o(s[t], t, s)
                            }
                        }
                        var a = e(r, i, n);
                        return a > -1 ? s[o ? r[a] : a] : t
                    }
                }

                function Fn(r) {
                    return ss((function(i) {
                        var n = i.length,
                            s = n,
                            o = $r.prototype.thru;
                        for (r && i.reverse(); s--;) {
                            var a = i[s];
                            if ("function" != typeof a) throw new Rt(e);
                            if (o && !c && "wrapper" == hs(a)) var c = new $r([], !0)
                        }
                        for (s = c ? s : n; ++s < n;) {
                            var h = hs(a = i[s]),
                                u = "wrapper" == h ? cs(a) : t;
                            c = u && Is(u[0]) && 424 == u[1] && !u[4].length && 1 == u[9] ? c[hs(u[0])].apply(c, u[3]) : 1 == a.length && Is(a) ? c[h]() : c.thru(a)
                        }
                        return function() {
                            var t = arguments,
                                e = t[0];
                            if (c && 1 == t.length && Qo(e)) return c.plant(e).value();
                            for (var r = 0, s = n ? i[r].apply(this, t) : e; ++r < n;) s = i[r].call(this, s);
                            return s
                        }
                    }))
                }

                function Kn(e, r, i, n, s, o, c, h, u, l) {
                    var f = r & a,
                        p = 1 & r,
                        d = 2 & r,
                        g = 24 & r,
                        m = 512 & r,
                        v = d ? t : zn(e);
                    return function a() {
                        for (var y = arguments.length, w = It(y), b = y; b--;) w[b] = arguments[b];
                        if (g) var A = us(a),
                            _ = function(t, e) {
                                for (var r = t.length, i = 0; r--;) t[r] === e && ++i;
                                return i
                            }(w, A);
                        if (n && (w = Cn(w, n, s, g)), o && (w = On(w, o, c, g)), y -= _, g && y < l) {
                            var E = hr(w, A);
                            return Jn(e, r, Kn, a.placeholder, i, w, E, h, u, l - y)
                        }
                        var I = p ? i : this,
                            S = d ? I[e] : e;
                        return y = w.length, h ? w = function(e, r) {
                            for (var i = e.length, n = Ar(r.length, i), s = Rn(e); n--;) {
                                var o = r[n];
                                e[n] = As(o, i) ? s[o] : t
                            }
                            return e
                        }(w, h) : m && y > 1 && w.reverse(), f && u < y && (w.length = u), this && this !== de && this instanceof a && (S = v || zn(S)), S.apply(I, w)
                    }
                }

                function Hn(t, e) {
                    return function(r, i) {
                        return function(t, e, r, i) {
                            return _i(t, (function(t, n, s) {
                                e(i, r(t), n, s)
                            })), i
                        }(r, t, e(i), {})
                    }
                }

                function $n(e, r) {
                    return function(i, n) {
                        var s;
                        if (i === t && n === t) return r;
                        if (i !== t && (s = i), n !== t) {
                            if (s === t) return n;
                            "string" == typeof i || "string" == typeof n ? (i = fn(i), n = fn(n)) : (i = ln(i), n = ln(n)), s = e(i, n)
                        }
                        return s
                    }
                }

                function Vn(t) {
                    return ss((function(e) {
                        return e = qe(e, Xe(ls())), Xi((function(r) {
                            var i = this;
                            return t(e, (function(t) {
                                return Me(t, i, r)
                            }))
                        }))
                    }))
                }

                function Qn(e, r) {
                    var i = (r = r === t ? " " : fn(r)).length;
                    if (i < 2) return i ? Yi(r, e) : r;
                    var n = Yi(r, we(e / lr(r)));
                    return or(r) ? In(fr(n), 0, e).join("") : n.slice(0, e)
                }

                function Wn(e) {
                    return function(r, i, n) {
                        return n && "number" != typeof n && _s(r, i, n) && (i = n = t), r = ma(r), i === t ? (i = r, r = 0) : i = ma(i),
                            function(t, e, r, i) {
                                for (var n = -1, s = br(we((e - t) / (r || 1)), 0), o = It(s); s--;) o[i ? s : ++n] = t, t += r;
                                return o
                            }(r, i, n = n === t ? r < i ? 1 : -1 : ma(n), e)
                    }
                }

                function Gn(t) {
                    return function(e, r) {
                        return "string" == typeof e && "string" == typeof r || (e = wa(e), r = wa(r)), t(e, r)
                    }
                }

                function Jn(e, r, i, n, a, c, h, u, l, f) {
                    var p = 8 & r;
                    r |= p ? s : o, 4 & (r &= ~(p ? o : s)) || (r &= -4);
                    var d = [e, r, a, p ? c : t, p ? h : t, p ? t : c, p ? t : h, u, l, f],
                        g = i.apply(t, d);
                    return Is(e) && Rs(g, d), g.placeholder = n, Ds(g, e, r)
                }

                function Yn(t) {
                    var e = xt[t];
                    return function(t, r) {
                        if (t = wa(t), (r = null == r ? 0 : Ar(va(r), 292)) && vr(t)) {
                            var i = (Aa(t) + "e").split("e");
                            return +((i = (Aa(e(i[0] + "e" + (+i[1] + r))) + "e").split("e"))[0] + "e" + (+i[1] - r))
                        }
                        return e(t)
                    }
                }
                var Xn = Nr && 1 / ur(new Nr([, -0]))[1] == h ? function(t) {
                    return new Nr(t)
                } : lc;

                function Zn(t) {
                    return function(e) {
                        var r = vs(e);
                        return r == E ? ar(e) : r == x ? function(t) {
                            var e = -1,
                                r = Array(t.size);
                            return t.forEach((function(t) {
                                r[++e] = [t, t]
                            })), r
                        }(e) : function(t, e) {
                            return qe(e, (function(e) {
                                return [e, t[e]]
                            }))
                        }(e, t(e))
                    }
                }

                function ts(r, h, u, l, f, p, d, g) {
                    var m = 2 & h;
                    if (!m && "function" != typeof r) throw new Rt(e);
                    var v = l ? l.length : 0;
                    if (v || (h &= -97, l = f = t), d = d === t ? d : br(va(d), 0), g = g === t ? g : va(g), v -= f ? f.length : 0, h & o) {
                        var y = l,
                            w = f;
                        l = f = t
                    }
                    var b = m ? t : cs(r),
                        A = [r, h, u, l, f, y, w, p, d, g];
                    if (b && function(t, e) {
                            var r = t[1],
                                n = e[1],
                                s = r | n,
                                o = s < 131,
                                h = n == a && 8 == r || n == a && r == c && t[7].length <= e[8] || 384 == n && e[7].length <= e[8] && 8 == r;
                            if (!o && !h) return t;
                            1 & n && (t[2] = e[2], s |= 1 & r ? 0 : 4);
                            var u = e[3];
                            if (u) {
                                var l = t[3];
                                t[3] = l ? Cn(l, u, e[4]) : u, t[4] = l ? hr(t[3], i) : e[4]
                            }(u = e[5]) && (l = t[5], t[5] = l ? On(l, u, e[6]) : u, t[6] = l ? hr(t[5], i) : e[6]), (u = e[7]) && (t[7] = u), n & a && (t[8] = null == t[8] ? e[8] : Ar(t[8], e[8])), null == t[9] && (t[9] = e[9]), t[0] = e[0], t[1] = s
                        }(A, b), r = A[0], h = A[1], u = A[2], l = A[3], f = A[4], !(g = A[9] = A[9] === t ? m ? 0 : r.length : br(A[9] - v, 0)) && 24 & h && (h &= -25), h && 1 != h) _ = 8 == h || h == n ? function(e, r, i) {
                        var n = zn(e);
                        return function s() {
                            for (var o = arguments.length, a = It(o), c = o, h = us(s); c--;) a[c] = arguments[c];
                            var u = o < 3 && a[0] !== h && a[o - 1] !== h ? [] : hr(a, h);
                            return (o -= u.length) < i ? Jn(e, r, Kn, s.placeholder, t, a, u, t, t, i - o) : Me(this && this !== de && this instanceof s ? n : e, this, a)
                        }
                    }(r, h, g) : h != s && 33 != h || f.length ? Kn.apply(t, A) : function(t, e, r, i) {
                        var n = 1 & e,
                            s = zn(t);
                        return function e() {
                            for (var o = -1, a = arguments.length, c = -1, h = i.length, u = It(h + a), l = this && this !== de && this instanceof e ? s : t; ++c < h;) u[c] = i[c];
                            for (; a--;) u[c++] = arguments[++o];
                            return Me(l, n ? r : this, u)
                        }
                    }(r, h, u, l);
                    else var _ = function(t, e, r) {
                        var i = 1 & e,
                            n = zn(t);
                        return function e() {
                            return (this && this !== de && this instanceof e ? n : t).apply(i ? r : this, arguments)
                        }
                    }(r, h, u);
                    return Ds((b ? rn : Rs)(_, A), r, h)
                }

                function es(e, r, i, n) {
                    return e === t || Ko(e, Dt[i]) && !Ut.call(n, i) ? r : e
                }

                function rs(e, r, i, n, s, o) {
                    return ia(e) && ia(r) && (o.set(r, e), Hi(e, r, t, rs, o), o.delete(r)), e
                }

                function is(e) {
                    return aa(e) ? t : e
                }

                function ns(e, r, i, n, s, o) {
                    var a = 1 & i,
                        c = e.length,
                        h = r.length;
                    if (c != h && !(a && h > c)) return !1;
                    var u = o.get(e),
                        l = o.get(r);
                    if (u && l) return u == r && l == e;
                    var f = -1,
                        p = !0,
                        d = 2 & i ? new Jr : t;
                    for (o.set(e, r), o.set(r, e); ++f < c;) {
                        var g = e[f],
                            m = r[f];
                        if (n) var v = a ? n(m, g, f, r, e, o) : n(g, m, f, e, r, o);
                        if (v !== t) {
                            if (v) continue;
                            p = !1;
                            break
                        }
                        if (d) {
                            if (!Ue(r, (function(t, e) {
                                    if (!tr(d, e) && (g === t || s(g, t, i, n, o))) return d.push(e)
                                }))) {
                                p = !1;
                                break
                            }
                        } else if (g !== m && !s(g, m, i, n, o)) {
                            p = !1;
                            break
                        }
                    }
                    return o.delete(e), o.delete(r), p
                }

                function ss(e) {
                    return qs(Ns(e, t, Qs), e + "")
                }

                function os(t) {
                    return Mi(t, qa, gs)
                }

                function as(t) {
                    return Mi(t, Da, ms)
                }
                var cs = Rr ? function(t) {
                    return Rr.get(t)
                } : lc;

                function hs(t) {
                    for (var e = t.name + "", r = Tr[e], i = Ut.call(Tr, e) ? r.length : 0; i--;) {
                        var n = r[i],
                            s = n.func;
                        if (null == s || s == t) return n.name
                    }
                    return e
                }

                function us(t) {
                    return (Ut.call(Fr, "placeholder") ? Fr : t).placeholder
                }

                function ls() {
                    var t = Fr.iteratee || ac;
                    return t = t === ac ? Bi : t, arguments.length ? t(arguments[0], arguments[1]) : t
                }

                function fs(t, e) {
                    var r = t.__data__;
                    return function(t) {
                        var e = typeof t;
                        return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t
                    }(e) ? r["string" == typeof e ? "string" : "hash"] : r.map
                }

                function ps(t) {
                    for (var e = qa(t), r = e.length; r--;) {
                        var i = e[r],
                            n = t[i];
                        e[r] = [i, n, Ps(n)]
                    }
                    return e
                }

                function ds(e, r) {
                    var i = function(e, r) {
                        return null == e ? t : e[r]
                    }(e, r);
                    return ki(i) ? i : t
                }
                var gs = Qe ? function(t) {
                        return null == t ? [] : (t = Nt(t), Oe(Qe(t), (function(e) {
                            return Xt.call(t, e)
                        })))
                    } : yc,
                    ms = Qe ? function(t) {
                        for (var e = []; t;) De(e, gs(t)), t = Gt(t);
                        return e
                    } : yc,
                    vs = Pi;

                function ys(t, e, r) {
                    for (var i = -1, n = (e = _n(e, t)).length, s = !1; ++i < n;) {
                        var o = js(e[i]);
                        if (!(s = null != t && r(t, o))) break;
                        t = t[o]
                    }
                    return s || ++i != n ? s : !!(n = null == t ? 0 : t.length) && ra(n) && As(o, n) && (Qo(t) || Vo(t))
                }

                function ws(t) {
                    return "function" != typeof t.constructor || Ms(t) ? {} : Kr(Gt(t))
                }

                function bs(t) {
                    return Qo(t) || Vo(t) || !!(ie && t && t[ie])
                }

                function As(t, e) {
                    var r = typeof t;
                    return !!(e = e ? ? u) && ("number" == r || "symbol" != r && yt.test(t)) && t > -1 && t % 1 == 0 && t < e
                }

                function _s(t, e, r) {
                    if (!ia(r)) return !1;
                    var i = typeof e;
                    return !!("number" == i ? Go(r) && As(e, r.length) : "string" == i && e in r) && Ko(r[e], t)
                }

                function Es(t, e) {
                    if (Qo(t)) return !1;
                    var r = typeof t;
                    return !("number" != r && "symbol" != r && "boolean" != r && null != t && !la(t)) || tt.test(t) || !Z.test(t) || null != e && t in Nt(e)
                }

                function Is(t) {
                    var e = hs(t),
                        r = Fr[e];
                    if ("function" != typeof r || !(e in Vr.prototype)) return !1;
                    if (t === r) return !0;
                    var i = cs(r);
                    return !!i && t === i[0]
                }(Mr && vs(new Mr(new ArrayBuffer(1))) != T || Pr && vs(new Pr) != E || xr && vs(xr.resolve()) != M || Nr && vs(new Nr) != x || Cr && vs(new Cr) != O) && (vs = function(e) {
                    var r = Pi(e),
                        i = r == S ? e.constructor : t,
                        n = i ? zs(i) : "";
                    if (n) switch (n) {
                        case qr:
                            return T;
                        case Dr:
                            return E;
                        case kr:
                            return M;
                        case Br:
                            return x;
                        case Ur:
                            return O
                    }
                    return r
                });
                var Ss = kt ? ta : wc;

                function Ms(t) {
                    var e = t && t.constructor;
                    return t === ("function" == typeof e && e.prototype || Dt)
                }

                function Ps(t) {
                    return t == t && !ia(t)
                }

                function xs(e, r) {
                    return function(i) {
                        return null != i && i[e] === r && (r !== t || e in Nt(i))
                    }
                }

                function Ns(e, r, i) {
                    return r = br(r === t ? e.length - 1 : r, 0),
                        function() {
                            for (var t = arguments, n = -1, s = br(t.length - r, 0), o = It(s); ++n < s;) o[n] = t[r + n];
                            n = -1;
                            for (var a = It(r + 1); ++n < r;) a[n] = t[n];
                            return a[r] = i(o), Me(e, this, a)
                        }
                }

                function Cs(t, e) {
                    return e.length < 2 ? t : Si(t, on(e, 0, -1))
                }

                function Os(t, e) {
                    if (("constructor" !== e || "function" != typeof t[e]) && "__proto__" != e) return t[e]
                }
                var Rs = ks(rn),
                    Ts = ye || function(t, e) {
                        return de.setTimeout(t, e)
                    },
                    qs = ks(nn);

                function Ds(t, e, r) {
                    var i = e + "";
                    return qs(t, function(t, e) {
                        var r = e.length;
                        if (!r) return t;
                        var i = r - 1;
                        return e[i] = (r > 1 ? "& " : "") + e[i], e = e.join(r > 2 ? ", " : " "), t.replace(ot, "{\n/* [wrapped with " + e + "] */\n")
                    }(i, function(t, e) {
                        return xe(g, (function(r) {
                            var i = "_." + r[0];
                            e & r[1] && !Re(t, i) && t.push(i)
                        })), t.sort()
                    }(function(t) {
                        var e = t.match(at);
                        return e ? e[1].split(ct) : []
                    }(i), r)))
                }

                function ks(e) {
                    var r = 0,
                        i = 0;
                    return function() {
                        var n = _r(),
                            s = 16 - (n - i);
                        if (i = n, s > 0) {
                            if (++r >= 800) return arguments[0]
                        } else r = 0;
                        return e.apply(t, arguments)
                    }
                }

                function Bs(e, r) {
                    var i = -1,
                        n = e.length,
                        s = n - 1;
                    for (r = r === t ? n : r; ++i < r;) {
                        var o = Ji(i, s),
                            a = e[o];
                        e[o] = e[i], e[i] = a
                    }
                    return e.length = r, e
                }
                var Us = function(t) {
                    var e = Bo(t, (function(t) {
                            return 500 === r.size && r.clear(), t
                        })),
                        r = e.cache;
                    return e
                }((function(t) {
                    var e = [];
                    return 46 === t.charCodeAt(0) && e.push(""), t.replace(et, (function(t, r, i, n) {
                        e.push(i ? n.replace(lt, "$1") : r || t)
                    })), e
                }));

                function js(t) {
                    if ("string" == typeof t || la(t)) return t;
                    var e = t + "";
                    return "0" == e && 1 / t == -1 / 0 ? "-0" : e
                }

                function zs(t) {
                    if (null != t) {
                        try {
                            return Bt.call(t)
                        } catch {}
                        try {
                            return t + ""
                        } catch {}
                    }
                    return ""
                }

                function Ls(t) {
                    if (t instanceof Vr) return t.clone();
                    var e = new $r(t.__wrapped__, t.__chain__);
                    return e.__actions__ = Rn(t.__actions__), e.__index__ = t.__index__, e.__values__ = t.__values__, e
                }
                var Fs = Xi((function(t, e) {
                        return Jo(t) ? pi(t, wi(e, 1, Jo, !0)) : []
                    })),
                    Ks = Xi((function(e, r) {
                        var i = Xs(r);
                        return Jo(i) && (i = t), Jo(e) ? pi(e, wi(r, 1, Jo, !0), ls(i, 2)) : []
                    })),
                    Hs = Xi((function(e, r) {
                        var i = Xs(r);
                        return Jo(i) && (i = t), Jo(e) ? pi(e, wi(r, 1, Jo, !0), t, i) : []
                    }));

                function $s(t, e, r) {
                    var i = null == t ? 0 : t.length;
                    if (!i) return -1;
                    var n = null == r ? 0 : va(r);
                    return n < 0 && (n = br(i + n, 0)), Le(t, ls(e, 3), n)
                }

                function Vs(e, r, i) {
                    var n = null == e ? 0 : e.length;
                    if (!n) return -1;
                    var s = n - 1;
                    return i !== t && (s = va(i), s = i < 0 ? br(n + s, 0) : Ar(s, n - 1)), Le(e, ls(r, 3), s, !0)
                }

                function Qs(t) {
                    return null != t && t.length ? wi(t, 1) : []
                }

                function Ws(e) {
                    return e && e.length ? e[0] : t
                }
                var Gs = Xi((function(t) {
                        var e = qe(t, bn);
                        return e.length && e[0] === t[0] ? Oi(e) : []
                    })),
                    Js = Xi((function(e) {
                        var r = Xs(e),
                            i = qe(e, bn);
                        return r === Xs(i) ? r = t : i.pop(), i.length && i[0] === e[0] ? Oi(i, ls(r, 2)) : []
                    })),
                    Ys = Xi((function(e) {
                        var r = Xs(e),
                            i = qe(e, bn);
                        return (r = "function" == typeof r ? r : t) && i.pop(), i.length && i[0] === e[0] ? Oi(i, t, r) : []
                    }));

                function Xs(e) {
                    var r = null == e ? 0 : e.length;
                    return r ? e[r - 1] : t
                }
                var Zs = Xi(to);

                function to(t, e) {
                    return t && t.length && e && e.length ? Wi(t, e) : t
                }
                var eo = ss((function(t, e) {
                    var r = null == t ? 0 : t.length,
                        i = ci(t, e);
                    return Gi(t, qe(e, (function(t) {
                        return As(t, r) ? +t : t
                    })).sort(Nn)), i
                }));

                function ro(t) {
                    return null == t ? t : Sr.call(t)
                }
                var io = Xi((function(t) {
                        return pn(wi(t, 1, Jo, !0))
                    })),
                    no = Xi((function(e) {
                        var r = Xs(e);
                        return Jo(r) && (r = t), pn(wi(e, 1, Jo, !0), ls(r, 2))
                    })),
                    so = Xi((function(e) {
                        var r = Xs(e);
                        return r = "function" == typeof r ? r : t, pn(wi(e, 1, Jo, !0), t, r)
                    }));

                function oo(t) {
                    if (!t || !t.length) return [];
                    var e = 0;
                    return t = Oe(t, (function(t) {
                        if (Jo(t)) return e = br(t.length, e), !0
                    })), Je(e, (function(e) {
                        return qe(t, Ve(e))
                    }))
                }

                function ao(e, r) {
                    if (!e || !e.length) return [];
                    var i = oo(e);
                    return null == r ? i : qe(i, (function(e) {
                        return Me(r, t, e)
                    }))
                }
                var co = Xi((function(t, e) {
                        return Jo(t) ? pi(t, e) : []
                    })),
                    ho = Xi((function(t) {
                        return yn(Oe(t, Jo))
                    })),
                    uo = Xi((function(e) {
                        var r = Xs(e);
                        return Jo(r) && (r = t), yn(Oe(e, Jo), ls(r, 2))
                    })),
                    lo = Xi((function(e) {
                        var r = Xs(e);
                        return r = "function" == typeof r ? r : t, yn(Oe(e, Jo), t, r)
                    })),
                    fo = Xi(oo),
                    po = Xi((function(e) {
                        var r = e.length,
                            i = r > 1 ? e[r - 1] : t;
                        return i = "function" == typeof i ? (e.pop(), i) : t, ao(e, i)
                    }));

                function go(t) {
                    var e = Fr(t);
                    return e.__chain__ = !0, e
                }

                function mo(t, e) {
                    return e(t)
                }
                var vo = ss((function(e) {
                        var r = e.length,
                            i = r ? e[0] : 0,
                            n = this.__wrapped__,
                            s = function(t) {
                                return ci(t, e)
                            };
                        return !(r > 1 || this.__actions__.length) && n instanceof Vr && As(i) ? ((n = n.slice(i, +i + (r ? 1 : 0))).__actions__.push({
                            func: mo,
                            args: [s],
                            thisArg: t
                        }), new $r(n, this.__chain__).thru((function(e) {
                            return r && !e.length && e.push(t), e
                        }))) : this.thru(s)
                    })),
                    yo = qn((function(t, e, r) {
                        Ut.call(t, r) ? ++t[r] : ai(t, r, 1)
                    })),
                    wo = Ln($s),
                    bo = Ln(Vs);

                function Ao(t, e) {
                    return (Qo(t) ? xe : di)(t, ls(e, 3))
                }

                function _o(t, e) {
                    return (Qo(t) ? Ne : gi)(t, ls(e, 3))
                }
                var Eo = qn((function(t, e, r) {
                        Ut.call(t, r) ? t[r].push(e) : ai(t, r, [e])
                    })),
                    Io = Xi((function(t, e, r) {
                        var i = -1,
                            n = "function" == typeof e,
                            s = Go(t) ? It(t.length) : [];
                        return di(t, (function(t) {
                            s[++i] = n ? Me(e, t, r) : Ri(t, e, r)
                        })), s
                    })),
                    So = qn((function(t, e, r) {
                        ai(t, r, e)
                    }));

                function Mo(t, e) {
                    return (Qo(t) ? qe : Li)(t, ls(e, 3))
                }
                var Po = qn((function(t, e, r) {
                        t[r ? 0 : 1].push(e)
                    }), (function() {
                        return [
                            [],
                            []
                        ]
                    })),
                    xo = Xi((function(t, e) {
                        if (null == t) return [];
                        var r = e.length;
                        return r > 1 && _s(t, e[0], e[1]) ? e = [] : r > 2 && _s(e[0], e[1], e[2]) && (e = [e[0]]), Vi(t, wi(e, 1), [])
                    })),
                    No = me || function() {
                        return de.Date.now()
                    };

                function Co(e, r, i) {
                    return r = i ? t : r, r = e && null == r ? e.length : r, ts(e, a, t, t, t, t, r)
                }

                function Oo(r, i) {
                    var n;
                    if ("function" != typeof i) throw new Rt(e);
                    return r = va(r),
                        function() {
                            return --r > 0 && (n = i.apply(this, arguments)), r <= 1 && (i = t), n
                        }
                }
                var Ro = Xi((function(t, e, r) {
                        var i = 1;
                        if (r.length) {
                            var n = hr(r, us(Ro));
                            i |= s
                        }
                        return ts(t, i, e, r, n)
                    })),
                    To = Xi((function(t, e, r) {
                        var i = 3;
                        if (r.length) {
                            var n = hr(r, us(To));
                            i |= s
                        }
                        return ts(e, i, t, r, n)
                    }));

                function qo(r, i, n) {
                    var s, o, a, c, h, u, l = 0,
                        f = !1,
                        p = !1,
                        d = !0;
                    if ("function" != typeof r) throw new Rt(e);

                    function g(e) {
                        var i = s,
                            n = o;
                        return s = o = t, l = e, c = r.apply(n, i)
                    }

                    function m(e) {
                        var r = e - u;
                        return u === t || r >= i || r < 0 || p && e - l >= a
                    }

                    function v() {
                        var t = No();
                        if (m(t)) return y(t);
                        h = Ts(v, function(t) {
                            var e = i - (t - u);
                            return p ? Ar(e, a - (t - l)) : e
                        }(t))
                    }

                    function y(e) {
                        return h = t, d && s ? g(e) : (s = o = t, c)
                    }

                    function w() {
                        var e = No(),
                            r = m(e);
                        if (s = arguments, o = this, u = e, r) {
                            if (h === t) return function(t) {
                                return l = t, h = Ts(v, i), f ? g(t) : c
                            }(u);
                            if (p) return Sn(h), h = Ts(v, i), g(u)
                        }
                        return h === t && (h = Ts(v, i)), c
                    }
                    return i = wa(i) || 0, ia(n) && (f = !!n.leading, a = (p = "maxWait" in n) ? br(wa(n.maxWait) || 0, i) : a, d = "trailing" in n ? !!n.trailing : d), w.cancel = function() {
                        h !== t && Sn(h), l = 0, s = u = o = h = t
                    }, w.flush = function() {
                        return h === t ? c : y(No())
                    }, w
                }
                var Do = Xi((function(t, e) {
                        return fi(t, 1, e)
                    })),
                    ko = Xi((function(t, e, r) {
                        return fi(t, wa(e) || 0, r)
                    }));

                function Bo(t, r) {
                    if ("function" != typeof t || null != r && "function" != typeof r) throw new Rt(e);
                    var i = function() {
                        var e = arguments,
                            n = r ? r.apply(this, e) : e[0],
                            s = i.cache;
                        if (s.has(n)) return s.get(n);
                        var o = t.apply(this, e);
                        return i.cache = s.set(n, o) || s, o
                    };
                    return i.cache = new(Bo.Cache || Gr), i
                }

                function Uo(t) {
                    if ("function" != typeof t) throw new Rt(e);
                    return function() {
                        var e = arguments;
                        switch (e.length) {
                            case 0:
                                return !t.call(this);
                            case 1:
                                return !t.call(this, e[0]);
                            case 2:
                                return !t.call(this, e[0], e[1]);
                            case 3:
                                return !t.call(this, e[0], e[1], e[2])
                        }
                        return !t.apply(this, e)
                    }
                }
                Bo.Cache = Gr;
                var jo = En((function(t, e) {
                        var r = (e = 1 == e.length && Qo(e[0]) ? qe(e[0], Xe(ls())) : qe(wi(e, 1), Xe(ls()))).length;
                        return Xi((function(i) {
                            for (var n = -1, s = Ar(i.length, r); ++n < s;) i[n] = e[n].call(this, i[n]);
                            return Me(t, this, i)
                        }))
                    })),
                    zo = Xi((function(e, r) {
                        var i = hr(r, us(zo));
                        return ts(e, s, t, r, i)
                    })),
                    Lo = Xi((function(e, r) {
                        var i = hr(r, us(Lo));
                        return ts(e, o, t, r, i)
                    })),
                    Fo = ss((function(e, r) {
                        return ts(e, c, t, t, t, r)
                    }));

                function Ko(t, e) {
                    return t === e || t != t && e != e
                }
                var Ho = Gn(xi),
                    $o = Gn((function(t, e) {
                        return t >= e
                    })),
                    Vo = Ti(function() {
                        return arguments
                    }()) ? Ti : function(t) {
                        return na(t) && Ut.call(t, "callee") && !Xt.call(t, "callee")
                    },
                    Qo = It.isArray,
                    Wo = be ? Xe(be) : function(t) {
                        return na(t) && Pi(t) == R
                    };

                function Go(t) {
                    return null != t && ra(t.length) && !ta(t)
                }

                function Jo(t) {
                    return na(t) && Go(t)
                }
                var Yo = mr || wc,
                    Xo = Ae ? Xe(Ae) : function(t) {
                        return na(t) && Pi(t) == w
                    };

                function Zo(t) {
                    if (!na(t)) return !1;
                    var e = Pi(t);
                    return e == b || "[object DOMException]" == e || "string" == typeof t.message && "string" == typeof t.name && !aa(t)
                }

                function ta(t) {
                    if (!ia(t)) return !1;
                    var e = Pi(t);
                    return e == A || e == _ || "[object AsyncFunction]" == e || "[object Proxy]" == e
                }

                function ea(t) {
                    return "number" == typeof t && t == va(t)
                }

                function ra(t) {
                    return "number" == typeof t && t > -1 && t % 1 == 0 && t <= u
                }

                function ia(t) {
                    var e = typeof t;
                    return null != t && ("object" == e || "function" == e)
                }

                function na(t) {
                    return null != t && "object" == typeof t
                }
                var sa = _e ? Xe(_e) : function(t) {
                    return na(t) && vs(t) == E
                };

                function oa(t) {
                    return "number" == typeof t || na(t) && Pi(t) == I
                }

                function aa(t) {
                    if (!na(t) || Pi(t) != S) return !1;
                    var e = Gt(t);
                    if (null === e) return !0;
                    var r = Ut.call(e, "constructor") && e.constructor;
                    return "function" == typeof r && r instanceof r && Bt.call(r) == Ft
                }
                var ca = Ee ? Xe(Ee) : function(t) {
                        return na(t) && Pi(t) == P
                    },
                    ha = Ie ? Xe(Ie) : function(t) {
                        return na(t) && vs(t) == x
                    };

                function ua(t) {
                    return "string" == typeof t || !Qo(t) && na(t) && Pi(t) == N
                }

                function la(t) {
                    return "symbol" == typeof t || na(t) && Pi(t) == C
                }
                var fa = Se ? Xe(Se) : function(t) {
                        return na(t) && ra(t.length) && !!ae[Pi(t)]
                    },
                    pa = Gn(zi),
                    da = Gn((function(t, e) {
                        return t <= e
                    }));

                function ga(t) {
                    if (!t) return [];
                    if (Go(t)) return ua(t) ? fr(t) : Rn(t);
                    if (he && t[he]) return function(t) {
                        for (var e, r = []; !(e = t.next()).done;) r.push(e.value);
                        return r
                    }(t[he]());
                    var e = vs(t);
                    return (e == E ? ar : e == x ? ur : Ka)(t)
                }

                function ma(t) {
                    return t ? (t = wa(t)) === h || t === -1 / 0 ? 17976931348623157e292 * (t < 0 ? -1 : 1) : t == t ? t : 0 : 0 === t ? t : 0
                }

                function va(t) {
                    var e = ma(t),
                        r = e % 1;
                    return e == e ? r ? e - r : e : 0
                }

                function ya(t) {
                    return t ? hi(va(t), 0, f) : 0
                }

                function wa(t) {
                    if ("number" == typeof t) return t;
                    if (la(t)) return l;
                    if (ia(t)) {
                        var e = "function" == typeof t.valueOf ? t.valueOf() : t;
                        t = ia(e) ? e + "" : e
                    }
                    if ("string" != typeof t) return 0 === t ? t : +t;
                    t = Ye(t);
                    var r = gt.test(t);
                    return r || vt.test(t) ? le(t.slice(2), r ? 2 : 8) : dt.test(t) ? l : +t
                }

                function ba(t) {
                    return Tn(t, Da(t))
                }

                function Aa(t) {
                    return null == t ? "" : fn(t)
                }
                var _a = Dn((function(t, e) {
                        if (Ms(e) || Go(e)) Tn(e, qa(e), t);
                        else
                            for (var r in e) Ut.call(e, r) && ii(t, r, e[r])
                    })),
                    Ea = Dn((function(t, e) {
                        Tn(e, Da(e), t)
                    })),
                    Ia = Dn((function(t, e, r, i) {
                        Tn(e, Da(e), t, i)
                    })),
                    Sa = Dn((function(t, e, r, i) {
                        Tn(e, qa(e), t, i)
                    })),
                    Ma = ss(ci),
                    Pa = Xi((function(e, r) {
                        e = Nt(e);
                        var i = -1,
                            n = r.length,
                            s = n > 2 ? r[2] : t;
                        for (s && _s(r[0], r[1], s) && (n = 1); ++i < n;)
                            for (var o = r[i], a = Da(o), c = -1, h = a.length; ++c < h;) {
                                var u = a[c],
                                    l = e[u];
                                (l === t || Ko(l, Dt[u]) && !Ut.call(e, u)) && (e[u] = o[u])
                            }
                        return e
                    })),
                    xa = Xi((function(e) {
                        return e.push(t, rs), Me(Ba, t, e)
                    }));

                function Na(e, r, i) {
                    var n = null == e ? t : Si(e, r);
                    return n === t ? i : n
                }

                function Ca(t, e) {
                    return null != t && ys(t, e, Ci)
                }
                var Oa = Hn((function(t, e, r) {
                        null != e && "function" != typeof e.toString && (e = Lt.call(e)), t[e] = r
                    }), ic(oc)),
                    Ra = Hn((function(t, e, r) {
                        null != e && "function" != typeof e.toString && (e = Lt.call(e)), Ut.call(t, e) ? t[e].push(r) : t[e] = [r]
                    }), ls),
                    Ta = Xi(Ri);

                function qa(t) {
                    return Go(t) ? Xr(t) : Ui(t)
                }

                function Da(t) {
                    return Go(t) ? Xr(t, !0) : ji(t)
                }
                var ka = Dn((function(t, e, r) {
                        Hi(t, e, r)
                    })),
                    Ba = Dn((function(t, e, r, i) {
                        Hi(t, e, r, i)
                    })),
                    Ua = ss((function(t, e) {
                        var r = {};
                        if (null == t) return r;
                        var i = !1;
                        e = qe(e, (function(e) {
                            return e = _n(e, t), i || (i = e.length > 1), e
                        })), Tn(t, as(t), r), i && (r = ui(r, 7, is));
                        for (var n = e.length; n--;) dn(r, e[n]);
                        return r
                    })),
                    ja = ss((function(t, e) {
                        return null == t ? {} : function(t, e) {
                            return Qi(t, e, (function(e, r) {
                                return Ca(t, r)
                            }))
                        }(t, e)
                    }));

                function za(t, e) {
                    if (null == t) return {};
                    var r = qe(as(t), (function(t) {
                        return [t]
                    }));
                    return e = ls(e), Qi(t, r, (function(t, r) {
                        return e(t, r[0])
                    }))
                }
                var La = Zn(qa),
                    Fa = Zn(Da);

                function Ka(t) {
                    return null == t ? [] : Ze(t, qa(t))
                }
                var Ha = jn((function(t, e, r) {
                    return e = e.toLowerCase(), t + (r ? $a(e) : e)
                }));

                function $a(t) {
                    return Za(Aa(t).toLowerCase())
                }

                function Va(t) {
                    return (t = Aa(t)) && t.replace(wt, ir).replace(te, "")
                }
                var Qa = jn((function(t, e, r) {
                        return t + (r ? "-" : "") + e.toLowerCase()
                    })),
                    Wa = jn((function(t, e, r) {
                        return t + (r ? " " : "") + e.toLowerCase()
                    })),
                    Ga = Un("toLowerCase"),
                    Ja = jn((function(t, e, r) {
                        return t + (r ? "_" : "") + e.toLowerCase()
                    })),
                    Ya = jn((function(t, e, r) {
                        return t + (r ? " " : "") + Za(e)
                    })),
                    Xa = jn((function(t, e, r) {
                        return t + (r ? " " : "") + e.toUpperCase()
                    })),
                    Za = Un("toUpperCase");

                function tc(e, r, i) {
                    return e = Aa(e), (r = i ? t : r) === t ? function(t) {
                        return ne.test(t)
                    }(e) ? function(t) {
                        return t.match(re) || []
                    }(e) : function(t) {
                        return t.match(ht) || []
                    }(e) : e.match(r) || []
                }
                var ec = Xi((function(e, r) {
                        try {
                            return Me(e, t, r)
                        } catch (Yt) {
                            return Zo(Yt) ? Yt : new Mt(Yt)
                        }
                    })),
                    rc = ss((function(t, e) {
                        return xe(e, (function(e) {
                            e = js(e), ai(t, e, Ro(t[e], t))
                        })), t
                    }));

                function ic(t) {
                    return function() {
                        return t
                    }
                }
                var nc = Fn(),
                    sc = Fn(!0);

                function oc(t) {
                    return t
                }

                function ac(t) {
                    return Bi("function" == typeof t ? t : ui(t, 1))
                }
                var cc = Xi((function(t, e) {
                        return function(r) {
                            return Ri(r, t, e)
                        }
                    })),
                    hc = Xi((function(t, e) {
                        return function(r) {
                            return Ri(t, r, e)
                        }
                    }));

                function uc(t, e, r) {
                    var i = qa(e),
                        n = Ii(e, i);
                    null == r && (!ia(e) || !n.length && i.length) && (r = e, e = t, t = this, n = Ii(e, qa(e)));
                    var s = !(ia(r) && "chain" in r && !r.chain),
                        o = ta(t);
                    return xe(n, (function(r) {
                        var i = e[r];
                        t[r] = i, o && (t.prototype[r] = function() {
                            var e = this.__chain__;
                            if (s || e) {
                                var r = t(this.__wrapped__);
                                return (r.__actions__ = Rn(this.__actions__)).push({
                                    func: i,
                                    args: arguments,
                                    thisArg: t
                                }), r.__chain__ = e, r
                            }
                            return i.apply(t, De([this.value()], arguments))
                        })
                    })), t
                }

                function lc() {}
                var fc = Vn(qe),
                    pc = Vn(Ce),
                    dc = Vn(Ue);

                function gc(t) {
                    return Es(t) ? Ve(js(t)) : function(t) {
                        return function(e) {
                            return Si(e, t)
                        }
                    }(t)
                }
                var mc = Wn(),
                    vc = Wn(!0);

                function yc() {
                    return []
                }

                function wc() {
                    return !1
                }
                var bc = $n((function(t, e) {
                        return t + e
                    }), 0),
                    Ac = Yn("ceil"),
                    _c = $n((function(t, e) {
                        return t / e
                    }), 1),
                    Ec = Yn("floor"),
                    Ic = $n((function(t, e) {
                        return t * e
                    }), 1),
                    Sc = Yn("round"),
                    Mc = $n((function(t, e) {
                        return t - e
                    }), 0);
                return Fr.after = function(t, r) {
                    if ("function" != typeof r) throw new Rt(e);
                    return t = va(t),
                        function() {
                            if (--t < 1) return r.apply(this, arguments)
                        }
                }, Fr.ary = Co, Fr.assign = _a, Fr.assignIn = Ea, Fr.assignInWith = Ia, Fr.assignWith = Sa, Fr.at = Ma, Fr.before = Oo, Fr.bind = Ro, Fr.bindAll = rc, Fr.bindKey = To, Fr.castArray = function() {
                    if (!arguments.length) return [];
                    var t = arguments[0];
                    return Qo(t) ? t : [t]
                }, Fr.chain = go, Fr.chunk = function(e, r, i) {
                    r = (i ? _s(e, r, i) : r === t) ? 1 : br(va(r), 0);
                    var n = null == e ? 0 : e.length;
                    if (!n || r < 1) return [];
                    for (var s = 0, o = 0, a = It(we(n / r)); s < n;) a[o++] = on(e, s, s += r);
                    return a
                }, Fr.compact = function(t) {
                    for (var e = -1, r = null == t ? 0 : t.length, i = 0, n = []; ++e < r;) {
                        var s = t[e];
                        s && (n[i++] = s)
                    }
                    return n
                }, Fr.concat = function() {
                    var t = arguments.length;
                    if (!t) return [];
                    for (var e = It(t - 1), r = arguments[0], i = t; i--;) e[i - 1] = arguments[i];
                    return De(Qo(r) ? Rn(r) : [r], wi(e, 1))
                }, Fr.cond = function(t) {
                    var r = null == t ? 0 : t.length,
                        i = ls();
                    return t = r ? qe(t, (function(t) {
                        if ("function" != typeof t[1]) throw new Rt(e);
                        return [i(t[0]), t[1]]
                    })) : [], Xi((function(e) {
                        for (var i = -1; ++i < r;) {
                            var n = t[i];
                            if (Me(n[0], this, e)) return Me(n[1], this, e)
                        }
                    }))
                }, Fr.conforms = function(t) {
                    return function(t) {
                        var e = qa(t);
                        return function(r) {
                            return li(r, t, e)
                        }
                    }(ui(t, 1))
                }, Fr.constant = ic, Fr.countBy = yo, Fr.create = function(t, e) {
                    var r = Kr(t);
                    return null == e ? r : oi(r, e)
                }, Fr.curry = function e(r, i, n) {
                    var s = ts(r, 8, t, t, t, t, t, i = n ? t : i);
                    return s.placeholder = e.placeholder, s
                }, Fr.curryRight = function e(r, i, s) {
                    var o = ts(r, n, t, t, t, t, t, i = s ? t : i);
                    return o.placeholder = e.placeholder, o
                }, Fr.debounce = qo, Fr.defaults = Pa, Fr.defaultsDeep = xa, Fr.defer = Do, Fr.delay = ko, Fr.difference = Fs, Fr.differenceBy = Ks, Fr.differenceWith = Hs, Fr.drop = function(e, r, i) {
                    var n = null == e ? 0 : e.length;
                    return n ? on(e, (r = i || r === t ? 1 : va(r)) < 0 ? 0 : r, n) : []
                }, Fr.dropRight = function(e, r, i) {
                    var n = null == e ? 0 : e.length;
                    return n ? on(e, 0, (r = n - (r = i || r === t ? 1 : va(r))) < 0 ? 0 : r) : []
                }, Fr.dropRightWhile = function(t, e) {
                    return t && t.length ? mn(t, ls(e, 3), !0, !0) : []
                }, Fr.dropWhile = function(t, e) {
                    return t && t.length ? mn(t, ls(e, 3), !0) : []
                }, Fr.fill = function(e, r, i, n) {
                    var s = null == e ? 0 : e.length;
                    return s ? (i && "number" != typeof i && _s(e, r, i) && (i = 0, n = s), function(e, r, i, n) {
                        var s = e.length;
                        for ((i = va(i)) < 0 && (i = -i > s ? 0 : s + i), (n = n === t || n > s ? s : va(n)) < 0 && (n += s), n = i > n ? 0 : ya(n); i < n;) e[i++] = r;
                        return e
                    }(e, r, i, n)) : []
                }, Fr.filter = function(t, e) {
                    return (Qo(t) ? Oe : yi)(t, ls(e, 3))
                }, Fr.flatMap = function(t, e) {
                    return wi(Mo(t, e), 1)
                }, Fr.flatMapDeep = function(t, e) {
                    return wi(Mo(t, e), h)
                }, Fr.flatMapDepth = function(e, r, i) {
                    return i = i === t ? 1 : va(i), wi(Mo(e, r), i)
                }, Fr.flatten = Qs, Fr.flattenDeep = function(t) {
                    return null != t && t.length ? wi(t, h) : []
                }, Fr.flattenDepth = function(e, r) {
                    return null != e && e.length ? wi(e, r = r === t ? 1 : va(r)) : []
                }, Fr.flip = function(t) {
                    return ts(t, 512)
                }, Fr.flow = nc, Fr.flowRight = sc, Fr.fromPairs = function(t) {
                    for (var e = -1, r = null == t ? 0 : t.length, i = {}; ++e < r;) {
                        var n = t[e];
                        i[n[0]] = n[1]
                    }
                    return i
                }, Fr.functions = function(t) {
                    return null == t ? [] : Ii(t, qa(t))
                }, Fr.functionsIn = function(t) {
                    return null == t ? [] : Ii(t, Da(t))
                }, Fr.groupBy = Eo, Fr.initial = function(t) {
                    return null != t && t.length ? on(t, 0, -1) : []
                }, Fr.intersection = Gs, Fr.intersectionBy = Js, Fr.intersectionWith = Ys, Fr.invert = Oa, Fr.invertBy = Ra, Fr.invokeMap = Io, Fr.iteratee = ac, Fr.keyBy = So, Fr.keys = qa, Fr.keysIn = Da, Fr.map = Mo, Fr.mapKeys = function(t, e) {
                    var r = {};
                    return e = ls(e, 3), _i(t, (function(t, i, n) {
                        ai(r, e(t, i, n), t)
                    })), r
                }, Fr.mapValues = function(t, e) {
                    var r = {};
                    return e = ls(e, 3), _i(t, (function(t, i, n) {
                        ai(r, i, e(t, i, n))
                    })), r
                }, Fr.matches = function(t) {
                    return Fi(ui(t, 1))
                }, Fr.matchesProperty = function(t, e) {
                    return Ki(t, ui(e, 1))
                }, Fr.memoize = Bo, Fr.merge = ka, Fr.mergeWith = Ba, Fr.method = cc, Fr.methodOf = hc, Fr.mixin = uc, Fr.negate = Uo, Fr.nthArg = function(t) {
                    return t = va(t), Xi((function(e) {
                        return $i(e, t)
                    }))
                }, Fr.omit = Ua, Fr.omitBy = function(t, e) {
                    return za(t, Uo(ls(e)))
                }, Fr.once = function(t) {
                    return Oo(2, t)
                }, Fr.orderBy = function(e, r, i, n) {
                    return null == e ? [] : (Qo(r) || (r = null == r ? [] : [r]), Qo(i = n ? t : i) || (i = null == i ? [] : [i]), Vi(e, r, i))
                }, Fr.over = fc, Fr.overArgs = jo, Fr.overEvery = pc, Fr.overSome = dc, Fr.partial = zo, Fr.partialRight = Lo, Fr.partition = Po, Fr.pick = ja, Fr.pickBy = za, Fr.property = gc, Fr.propertyOf = function(e) {
                    return function(r) {
                        return null == e ? t : Si(e, r)
                    }
                }, Fr.pull = Zs, Fr.pullAll = to, Fr.pullAllBy = function(t, e, r) {
                    return t && t.length && e && e.length ? Wi(t, e, ls(r, 2)) : t
                }, Fr.pullAllWith = function(e, r, i) {
                    return e && e.length && r && r.length ? Wi(e, r, t, i) : e
                }, Fr.pullAt = eo, Fr.range = mc, Fr.rangeRight = vc, Fr.rearg = Fo, Fr.reject = function(t, e) {
                    return (Qo(t) ? Oe : yi)(t, Uo(ls(e, 3)))
                }, Fr.remove = function(t, e) {
                    var r = [];
                    if (!t || !t.length) return r;
                    var i = -1,
                        n = [],
                        s = t.length;
                    for (e = ls(e, 3); ++i < s;) {
                        var o = t[i];
                        e(o, i, t) && (r.push(o), n.push(i))
                    }
                    return Gi(t, n), r
                }, Fr.rest = function(r, i) {
                    if ("function" != typeof r) throw new Rt(e);
                    return Xi(r, i = i === t ? i : va(i))
                }, Fr.reverse = ro, Fr.sampleSize = function(e, r, i) {
                    return r = (i ? _s(e, r, i) : r === t) ? 1 : va(r), (Qo(e) ? ti : tn)(e, r)
                }, Fr.set = function(t, e, r) {
                    return null == t ? t : en(t, e, r)
                }, Fr.setWith = function(e, r, i, n) {
                    return n = "function" == typeof n ? n : t, null == e ? e : en(e, r, i, n)
                }, Fr.shuffle = function(t) {
                    return (Qo(t) ? ei : sn)(t)
                }, Fr.slice = function(e, r, i) {
                    var n = null == e ? 0 : e.length;
                    return n ? (i && "number" != typeof i && _s(e, r, i) ? (r = 0, i = n) : (r = null == r ? 0 : va(r), i = i === t ? n : va(i)), on(e, r, i)) : []
                }, Fr.sortBy = xo, Fr.sortedUniq = function(t) {
                    return t && t.length ? un(t) : []
                }, Fr.sortedUniqBy = function(t, e) {
                    return t && t.length ? un(t, ls(e, 2)) : []
                }, Fr.split = function(e, r, i) {
                    return i && "number" != typeof i && _s(e, r, i) && (r = i = t), (i = i === t ? f : i >>> 0) ? (e = Aa(e)) && ("string" == typeof r || null != r && !ca(r)) && !(r = fn(r)) && or(e) ? In(fr(e), 0, i) : e.split(r, i) : []
                }, Fr.spread = function(t, r) {
                    if ("function" != typeof t) throw new Rt(e);
                    return r = null == r ? 0 : br(va(r), 0), Xi((function(e) {
                        var i = e[r],
                            n = In(e, 0, r);
                        return i && De(n, i), Me(t, this, n)
                    }))
                }, Fr.tail = function(t) {
                    var e = null == t ? 0 : t.length;
                    return e ? on(t, 1, e) : []
                }, Fr.take = function(e, r, i) {
                    return e && e.length ? on(e, 0, (r = i || r === t ? 1 : va(r)) < 0 ? 0 : r) : []
                }, Fr.takeRight = function(e, r, i) {
                    var n = null == e ? 0 : e.length;
                    return n ? on(e, (r = n - (r = i || r === t ? 1 : va(r))) < 0 ? 0 : r, n) : []
                }, Fr.takeRightWhile = function(t, e) {
                    return t && t.length ? mn(t, ls(e, 3), !1, !0) : []
                }, Fr.takeWhile = function(t, e) {
                    return t && t.length ? mn(t, ls(e, 3)) : []
                }, Fr.tap = function(t, e) {
                    return e(t), t
                }, Fr.throttle = function(t, r, i) {
                    var n = !0,
                        s = !0;
                    if ("function" != typeof t) throw new Rt(e);
                    return ia(i) && (n = "leading" in i ? !!i.leading : n, s = "trailing" in i ? !!i.trailing : s), qo(t, r, {
                        leading: n,
                        maxWait: r,
                        trailing: s
                    })
                }, Fr.thru = mo, Fr.toArray = ga, Fr.toPairs = La, Fr.toPairsIn = Fa, Fr.toPath = function(t) {
                    return Qo(t) ? qe(t, js) : la(t) ? [t] : Rn(Us(Aa(t)))
                }, Fr.toPlainObject = ba, Fr.transform = function(t, e, r) {
                    var i = Qo(t),
                        n = i || Yo(t) || fa(t);
                    if (e = ls(e, 4), null == r) {
                        var s = t && t.constructor;
                        r = n ? i ? new s : [] : ia(t) && ta(s) ? Kr(Gt(t)) : {}
                    }
                    return (n ? xe : _i)(t, (function(t, i, n) {
                        return e(r, t, i, n)
                    })), r
                }, Fr.unary = function(t) {
                    return Co(t, 1)
                }, Fr.union = io, Fr.unionBy = no, Fr.unionWith = so, Fr.uniq = function(t) {
                    return t && t.length ? pn(t) : []
                }, Fr.uniqBy = function(t, e) {
                    return t && t.length ? pn(t, ls(e, 2)) : []
                }, Fr.uniqWith = function(e, r) {
                    return r = "function" == typeof r ? r : t, e && e.length ? pn(e, t, r) : []
                }, Fr.unset = function(t, e) {
                    return null == t || dn(t, e)
                }, Fr.unzip = oo, Fr.unzipWith = ao, Fr.update = function(t, e, r) {
                    return null == t ? t : gn(t, e, An(r))
                }, Fr.updateWith = function(e, r, i, n) {
                    return n = "function" == typeof n ? n : t, null == e ? e : gn(e, r, An(i), n)
                }, Fr.values = Ka, Fr.valuesIn = function(t) {
                    return null == t ? [] : Ze(t, Da(t))
                }, Fr.without = co, Fr.words = tc, Fr.wrap = function(t, e) {
                    return zo(An(e), t)
                }, Fr.xor = ho, Fr.xorBy = uo, Fr.xorWith = lo, Fr.zip = fo, Fr.zipObject = function(t, e) {
                    return wn(t || [], e || [], ii)
                }, Fr.zipObjectDeep = function(t, e) {
                    return wn(t || [], e || [], en)
                }, Fr.zipWith = po, Fr.entries = La, Fr.entriesIn = Fa, Fr.extend = Ea, Fr.extendWith = Ia, uc(Fr, Fr), Fr.add = bc, Fr.attempt = ec, Fr.camelCase = Ha, Fr.capitalize = $a, Fr.ceil = Ac, Fr.clamp = function(e, r, i) {
                    return i === t && (i = r, r = t), i !== t && (i = (i = wa(i)) == i ? i : 0), r !== t && (r = (r = wa(r)) == r ? r : 0), hi(wa(e), r, i)
                }, Fr.clone = function(t) {
                    return ui(t, 4)
                }, Fr.cloneDeep = function(t) {
                    return ui(t, 5)
                }, Fr.cloneDeepWith = function(e, r) {
                    return ui(e, 5, r = "function" == typeof r ? r : t)
                }, Fr.cloneWith = function(e, r) {
                    return ui(e, 4, r = "function" == typeof r ? r : t)
                }, Fr.conformsTo = function(t, e) {
                    return null == e || li(t, e, qa(e))
                }, Fr.deburr = Va, Fr.defaultTo = function(t, e) {
                    return null == t || t != t ? e : t
                }, Fr.divide = _c, Fr.endsWith = function(e, r, i) {
                    e = Aa(e), r = fn(r);
                    var n = e.length,
                        s = i = i === t ? n : hi(va(i), 0, n);
                    return (i -= r.length) >= 0 && e.slice(i, s) == r
                }, Fr.eq = Ko, Fr.escape = function(t) {
                    return (t = Aa(t)) && G.test(t) ? t.replace(Q, nr) : t
                }, Fr.escapeRegExp = function(t) {
                    return (t = Aa(t)) && it.test(t) ? t.replace(rt, "\\$&") : t
                }, Fr.every = function(e, r, i) {
                    var n = Qo(e) ? Ce : mi;
                    return i && _s(e, r, i) && (r = t), n(e, ls(r, 3))
                }, Fr.find = wo, Fr.findIndex = $s, Fr.findKey = function(t, e) {
                    return ze(t, ls(e, 3), _i)
                }, Fr.findLast = bo, Fr.findLastIndex = Vs, Fr.findLastKey = function(t, e) {
                    return ze(t, ls(e, 3), Ei)
                }, Fr.floor = Ec, Fr.forEach = Ao, Fr.forEachRight = _o, Fr.forIn = function(t, e) {
                    return null == t ? t : bi(t, ls(e, 3), Da)
                }, Fr.forInRight = function(t, e) {
                    return null == t ? t : Ai(t, ls(e, 3), Da)
                }, Fr.forOwn = function(t, e) {
                    return t && _i(t, ls(e, 3))
                }, Fr.forOwnRight = function(t, e) {
                    return t && Ei(t, ls(e, 3))
                }, Fr.get = Na, Fr.gt = Ho, Fr.gte = $o, Fr.has = function(t, e) {
                    return null != t && ys(t, e, Ni)
                }, Fr.hasIn = Ca, Fr.head = Ws, Fr.identity = oc, Fr.includes = function(t, e, r, i) {
                    t = Go(t) ? t : Ka(t), r = r && !i ? va(r) : 0;
                    var n = t.length;
                    return r < 0 && (r = br(n + r, 0)), ua(t) ? r <= n && t.indexOf(e, r) > -1 : !!n && Fe(t, e, r) > -1
                }, Fr.indexOf = function(t, e, r) {
                    var i = null == t ? 0 : t.length;
                    if (!i) return -1;
                    var n = null == r ? 0 : va(r);
                    return n < 0 && (n = br(i + n, 0)), Fe(t, e, n)
                }, Fr.inRange = function(e, r, i) {
                    return r = ma(r), i === t ? (i = r, r = 0) : i = ma(i),
                        function(t, e, r) {
                            return t >= Ar(e, r) && t < br(e, r)
                        }(e = wa(e), r, i)
                }, Fr.invoke = Ta, Fr.isArguments = Vo, Fr.isArray = Qo, Fr.isArrayBuffer = Wo, Fr.isArrayLike = Go, Fr.isArrayLikeObject = Jo, Fr.isBoolean = function(t) {
                    return !0 === t || !1 === t || na(t) && Pi(t) == y
                }, Fr.isBuffer = Yo, Fr.isDate = Xo, Fr.isElement = function(t) {
                    return na(t) && 1 === t.nodeType && !aa(t)
                }, Fr.isEmpty = function(t) {
                    if (null == t) return !0;
                    if (Go(t) && (Qo(t) || "string" == typeof t || "function" == typeof t.splice || Yo(t) || fa(t) || Vo(t))) return !t.length;
                    var e = vs(t);
                    if (e == E || e == x) return !t.size;
                    if (Ms(t)) return !Ui(t).length;
                    for (var r in t)
                        if (Ut.call(t, r)) return !1;
                    return !0
                }, Fr.isEqual = function(t, e) {
                    return qi(t, e)
                }, Fr.isEqualWith = function(e, r, i) {
                    var n = (i = "function" == typeof i ? i : t) ? i(e, r) : t;
                    return n === t ? qi(e, r, t, i) : !!n
                }, Fr.isError = Zo, Fr.isFinite = function(t) {
                    return "number" == typeof t && vr(t)
                }, Fr.isFunction = ta, Fr.isInteger = ea, Fr.isLength = ra, Fr.isMap = sa, Fr.isMatch = function(t, e) {
                    return t === e || Di(t, e, ps(e))
                }, Fr.isMatchWith = function(e, r, i) {
                    return i = "function" == typeof i ? i : t, Di(e, r, ps(r), i)
                }, Fr.isNaN = function(t) {
                    return oa(t) && t != +t
                }, Fr.isNative = function(t) {
                    if (Ss(t)) throw new Mt("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");
                    return ki(t)
                }, Fr.isNil = function(t) {
                    return null == t
                }, Fr.isNull = function(t) {
                    return null === t
                }, Fr.isNumber = oa, Fr.isObject = ia, Fr.isObjectLike = na, Fr.isPlainObject = aa, Fr.isRegExp = ca, Fr.isSafeInteger = function(t) {
                    return ea(t) && t >= -u && t <= u
                }, Fr.isSet = ha, Fr.isString = ua, Fr.isSymbol = la, Fr.isTypedArray = fa, Fr.isUndefined = function(e) {
                    return e === t
                }, Fr.isWeakMap = function(t) {
                    return na(t) && vs(t) == O
                }, Fr.isWeakSet = function(t) {
                    return na(t) && "[object WeakSet]" == Pi(t)
                }, Fr.join = function(t, e) {
                    return null == t ? "" : yr.call(t, e)
                }, Fr.kebabCase = Qa, Fr.last = Xs, Fr.lastIndexOf = function(e, r, i) {
                    var n = null == e ? 0 : e.length;
                    if (!n) return -1;
                    var s = n;
                    return i !== t && (s = (s = va(i)) < 0 ? br(n + s, 0) : Ar(s, n - 1)), r == r ? function(t, e, r) {
                        for (var i = r + 1; i--;)
                            if (t[i] === e) return i;
                        return i
                    }(e, r, s) : Le(e, He, s, !0)
                }, Fr.lowerCase = Wa, Fr.lowerFirst = Ga, Fr.lt = pa, Fr.lte = da, Fr.max = function(e) {
                    return e && e.length ? vi(e, oc, xi) : t
                }, Fr.maxBy = function(e, r) {
                    return e && e.length ? vi(e, ls(r, 2), xi) : t
                }, Fr.mean = function(t) {
                    return $e(t, oc)
                }, Fr.meanBy = function(t, e) {
                    return $e(t, ls(e, 2))
                }, Fr.min = function(e) {
                    return e && e.length ? vi(e, oc, zi) : t
                }, Fr.minBy = function(e, r) {
                    return e && e.length ? vi(e, ls(r, 2), zi) : t
                }, Fr.stubArray = yc, Fr.stubFalse = wc, Fr.stubObject = function() {
                    return {}
                }, Fr.stubString = function() {
                    return ""
                }, Fr.stubTrue = function() {
                    return !0
                }, Fr.multiply = Ic, Fr.nth = function(e, r) {
                    return e && e.length ? $i(e, va(r)) : t
                }, Fr.noConflict = function() {
                    return de._ === this && (de._ = Kt), this
                }, Fr.noop = lc, Fr.now = No, Fr.pad = function(t, e, r) {
                    t = Aa(t);
                    var i = (e = va(e)) ? lr(t) : 0;
                    if (!e || i >= e) return t;
                    var n = (e - i) / 2;
                    return Qn(je(n), r) + t + Qn(we(n), r)
                }, Fr.padEnd = function(t, e, r) {
                    t = Aa(t);
                    var i = (e = va(e)) ? lr(t) : 0;
                    return e && i < e ? t + Qn(e - i, r) : t
                }, Fr.padStart = function(t, e, r) {
                    t = Aa(t);
                    var i = (e = va(e)) ? lr(t) : 0;
                    return e && i < e ? Qn(e - i, r) + t : t
                }, Fr.parseInt = function(t, e, r) {
                    return r || null == e ? e = 0 : e && (e = +e), Er(Aa(t).replace(nt, ""), e || 0)
                }, Fr.random = function(e, r, i) {
                    if (i && "boolean" != typeof i && _s(e, r, i) && (r = i = t), i === t && ("boolean" == typeof r ? (i = r, r = t) : "boolean" == typeof e && (i = e, e = t)), e === t && r === t ? (e = 0, r = 1) : (e = ma(e), r === t ? (r = e, e = 0) : r = ma(r)), e > r) {
                        var n = e;
                        e = r, r = n
                    }
                    if (i || e % 1 || r % 1) {
                        var s = Ir();
                        return Ar(e + s * (r - e + ue("1e-" + ((s + "").length - 1))), r)
                    }
                    return Ji(e, r)
                }, Fr.reduce = function(t, e, r) {
                    var i = Qo(t) ? ke : We,
                        n = arguments.length < 3;
                    return i(t, ls(e, 4), r, n, di)
                }, Fr.reduceRight = function(t, e, r) {
                    var i = Qo(t) ? Be : We,
                        n = arguments.length < 3;
                    return i(t, ls(e, 4), r, n, gi)
                }, Fr.repeat = function(e, r, i) {
                    return r = (i ? _s(e, r, i) : r === t) ? 1 : va(r), Yi(Aa(e), r)
                }, Fr.replace = function() {
                    var t = arguments,
                        e = Aa(t[0]);
                    return t.length < 3 ? e : e.replace(t[1], t[2])
                }, Fr.result = function(e, r, i) {
                    var n = -1,
                        s = (r = _n(r, e)).length;
                    for (s || (s = 1, e = t); ++n < s;) {
                        var o = null == e ? t : e[js(r[n])];
                        o === t && (n = s, o = i), e = ta(o) ? o.call(e) : o
                    }
                    return e
                }, Fr.round = Sc, Fr.runInContext = st, Fr.sample = function(t) {
                    return (Qo(t) ? Zr : Zi)(t)
                }, Fr.size = function(t) {
                    if (null == t) return 0;
                    if (Go(t)) return ua(t) ? lr(t) : t.length;
                    var e = vs(t);
                    return e == E || e == x ? t.size : Ui(t).length
                }, Fr.snakeCase = Ja, Fr.some = function(e, r, i) {
                    var n = Qo(e) ? Ue : an;
                    return i && _s(e, r, i) && (r = t), n(e, ls(r, 3))
                }, Fr.sortedIndex = function(t, e) {
                    return cn(t, e)
                }, Fr.sortedIndexBy = function(t, e, r) {
                    return hn(t, e, ls(r, 2))
                }, Fr.sortedIndexOf = function(t, e) {
                    var r = null == t ? 0 : t.length;
                    if (r) {
                        var i = cn(t, e);
                        if (i < r && Ko(t[i], e)) return i
                    }
                    return -1
                }, Fr.sortedLastIndex = function(t, e) {
                    return cn(t, e, !0)
                }, Fr.sortedLastIndexBy = function(t, e, r) {
                    return hn(t, e, ls(r, 2), !0)
                }, Fr.sortedLastIndexOf = function(t, e) {
                    if (null != t && t.length) {
                        var r = cn(t, e, !0) - 1;
                        if (Ko(t[r], e)) return r
                    }
                    return -1
                }, Fr.startCase = Ya, Fr.startsWith = function(t, e, r) {
                    return t = Aa(t), r = null == r ? 0 : hi(va(r), 0, t.length), e = fn(e), t.slice(r, r + e.length) == e
                }, Fr.subtract = Mc, Fr.sum = function(t) {
                    return t && t.length ? Ge(t, oc) : 0
                }, Fr.sumBy = function(t, e) {
                    return t && t.length ? Ge(t, ls(e, 2)) : 0
                }, Fr.template = function(e, r, i) {
                    var n = Fr.templateSettings;
                    i && _s(e, r, i) && (r = t), e = Aa(e), r = Ia({}, r, n, es);
                    var s, o, a = Ia({}, r.imports, n.imports, es),
                        c = qa(a),
                        h = Ze(a, c),
                        u = 0,
                        l = r.interpolate || bt,
                        f = "__p += '",
                        p = Ct((r.escape || bt).source + "|" + l.source + "|" + (l === X ? ft : bt).source + "|" + (r.evaluate || bt).source + "|$", "g"),
                        d = "//# sourceURL=" + (Ut.call(r, "sourceURL") ? (r.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++oe + "]") + "\n";
                    e.replace(p, (function(t, r, i, n, a, c) {
                        return i || (i = n), f += e.slice(u, c).replace(At, sr), r && (s = !0, f += "' +\n__e(" + r + ") +\n'"), a && (o = !0, f += "';\n" + a + ";\n__p += '"), i && (f += "' +\n((__t = (" + i + ")) == null ? '' : __t) +\n'"), u = c + t.length, t
                    })), f += "';\n";
                    var g = Ut.call(r, "variable") && r.variable;
                    if (g) {
                        if (ut.test(g)) throw new Mt("Invalid `variable` option passed into `_.template`")
                    } else f = "with (obj) {\n" + f + "\n}\n";
                    f = (o ? f.replace(K, "") : f).replace(H, "$1").replace($, "$1;"), f = "function(" + (g || "obj") + ") {\n" + (g ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (s ? ", __e = _.escape" : "") + (o ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + f + "return __p\n}";
                    var m = ec((function() {
                        return Pt(c, d + "return " + f).apply(t, h)
                    }));
                    if (m.source = f, Zo(m)) throw m;
                    return m
                }, Fr.times = function(t, e) {
                    if ((t = va(t)) < 1 || t > u) return [];
                    var r = f,
                        i = Ar(t, f);
                    e = ls(e), t -= f;
                    for (var n = Je(i, e); ++r < t;) e(r);
                    return n
                }, Fr.toFinite = ma, Fr.toInteger = va, Fr.toLength = ya, Fr.toLower = function(t) {
                    return Aa(t).toLowerCase()
                }, Fr.toNumber = wa, Fr.toSafeInteger = function(t) {
                    return t ? hi(va(t), -u, u) : 0 === t ? t : 0
                }, Fr.toString = Aa, Fr.toUpper = function(t) {
                    return Aa(t).toUpperCase()
                }, Fr.trim = function(e, r, i) {
                    if ((e = Aa(e)) && (i || r === t)) return Ye(e);
                    if (!e || !(r = fn(r))) return e;
                    var n = fr(e),
                        s = fr(r);
                    return In(n, er(n, s), rr(n, s) + 1).join("")
                }, Fr.trimEnd = function(e, r, i) {
                    if ((e = Aa(e)) && (i || r === t)) return e.slice(0, pr(e) + 1);
                    if (!e || !(r = fn(r))) return e;
                    var n = fr(e);
                    return In(n, 0, rr(n, fr(r)) + 1).join("")
                }, Fr.trimStart = function(e, r, i) {
                    if ((e = Aa(e)) && (i || r === t)) return e.replace(nt, "");
                    if (!e || !(r = fn(r))) return e;
                    var n = fr(e);
                    return In(n, er(n, fr(r))).join("")
                }, Fr.truncate = function(e, r) {
                    var i = 30,
                        n = "...";
                    if (ia(r)) {
                        var s = "separator" in r ? r.separator : s;
                        i = "length" in r ? va(r.length) : i, n = "omission" in r ? fn(r.omission) : n
                    }
                    var o = (e = Aa(e)).length;
                    if (or(e)) {
                        var a = fr(e);
                        o = a.length
                    }
                    if (i >= o) return e;
                    var c = i - lr(n);
                    if (c < 1) return n;
                    var h = a ? In(a, 0, c).join("") : e.slice(0, c);
                    if (s === t) return h + n;
                    if (a && (c += h.length - c), ca(s)) {
                        if (e.slice(c).search(s)) {
                            var u, l = h;
                            for (s.global || (s = Ct(s.source, Aa(pt.exec(s)) + "g")), s.lastIndex = 0; u = s.exec(l);) var f = u.index;
                            h = h.slice(0, f === t ? c : f)
                        }
                    } else if (e.indexOf(fn(s), c) != c) {
                        var p = h.lastIndexOf(s);
                        p > -1 && (h = h.slice(0, p))
                    }
                    return h + n
                }, Fr.unescape = function(t) {
                    return (t = Aa(t)) && W.test(t) ? t.replace(V, dr) : t
                }, Fr.uniqueId = function(t) {
                    var e = ++jt;
                    return Aa(t) + e
                }, Fr.upperCase = Xa, Fr.upperFirst = Za, Fr.each = Ao, Fr.eachRight = _o, Fr.first = Ws, uc(Fr, function() {
                    var t = {};
                    return _i(Fr, (function(e, r) {
                        Ut.call(Fr.prototype, r) || (t[r] = e)
                    })), t
                }(), {
                    chain: !1
                }), Fr.VERSION = "4.17.21", xe(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], (function(t) {
                    Fr[t].placeholder = Fr
                })), xe(["drop", "take"], (function(e, r) {
                    Vr.prototype[e] = function(i) {
                        i = i === t ? 1 : br(va(i), 0);
                        var n = this.__filtered__ && !r ? new Vr(this) : this.clone();
                        return n.__filtered__ ? n.__takeCount__ = Ar(i, n.__takeCount__) : n.__views__.push({
                            size: Ar(i, f),
                            type: e + (n.__dir__ < 0 ? "Right" : "")
                        }), n
                    }, Vr.prototype[e + "Right"] = function(t) {
                        return this.reverse()[e](t).reverse()
                    }
                })), xe(["filter", "map", "takeWhile"], (function(t, e) {
                    var r = e + 1,
                        i = 1 == r || 3 == r;
                    Vr.prototype[t] = function(t) {
                        var e = this.clone();
                        return e.__iteratees__.push({
                            iteratee: ls(t, 3),
                            type: r
                        }), e.__filtered__ = e.__filtered__ || i, e
                    }
                })), xe(["head", "last"], (function(t, e) {
                    var r = "take" + (e ? "Right" : "");
                    Vr.prototype[t] = function() {
                        return this[r](1).value()[0]
                    }
                })), xe(["initial", "tail"], (function(t, e) {
                    var r = "drop" + (e ? "" : "Right");
                    Vr.prototype[t] = function() {
                        return this.__filtered__ ? new Vr(this) : this[r](1)
                    }
                })), Vr.prototype.compact = function() {
                    return this.filter(oc)
                }, Vr.prototype.find = function(t) {
                    return this.filter(t).head()
                }, Vr.prototype.findLast = function(t) {
                    return this.reverse().find(t)
                }, Vr.prototype.invokeMap = Xi((function(t, e) {
                    return "function" == typeof t ? new Vr(this) : this.map((function(r) {
                        return Ri(r, t, e)
                    }))
                })), Vr.prototype.reject = function(t) {
                    return this.filter(Uo(ls(t)))
                }, Vr.prototype.slice = function(e, r) {
                    e = va(e);
                    var i = this;
                    return i.__filtered__ && (e > 0 || r < 0) ? new Vr(i) : (e < 0 ? i = i.takeRight(-e) : e && (i = i.drop(e)), r !== t && (i = (r = va(r)) < 0 ? i.dropRight(-r) : i.take(r - e)), i)
                }, Vr.prototype.takeRightWhile = function(t) {
                    return this.reverse().takeWhile(t).reverse()
                }, Vr.prototype.toArray = function() {
                    return this.take(f)
                }, _i(Vr.prototype, (function(e, r) {
                    var i = /^(?:filter|find|map|reject)|While$/.test(r),
                        n = /^(?:head|last)$/.test(r),
                        s = Fr[n ? "take" + ("last" == r ? "Right" : "") : r],
                        o = n || /^find/.test(r);
                    s && (Fr.prototype[r] = function() {
                        var r = this.__wrapped__,
                            a = n ? [1] : arguments,
                            c = r instanceof Vr,
                            h = a[0],
                            u = c || Qo(r),
                            l = function(t) {
                                var e = s.apply(Fr, De([t], a));
                                return n && f ? e[0] : e
                            };
                        u && i && "function" == typeof h && 1 != h.length && (c = u = !1);
                        var f = this.__chain__,
                            p = !!this.__actions__.length,
                            d = o && !f,
                            g = c && !p;
                        if (!o && u) {
                            r = g ? r : new Vr(this);
                            var m = e.apply(r, a);
                            return m.__actions__.push({
                                func: mo,
                                args: [l],
                                thisArg: t
                            }), new $r(m, f)
                        }
                        return d && g ? e.apply(this, a) : (m = this.thru(l), d ? n ? m.value()[0] : m.value() : m)
                    })
                })), xe(["pop", "push", "shift", "sort", "splice", "unshift"], (function(t) {
                    var e = Tt[t],
                        r = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru",
                        i = /^(?:pop|shift)$/.test(t);
                    Fr.prototype[t] = function() {
                        var t = arguments;
                        if (i && !this.__chain__) {
                            var n = this.value();
                            return e.apply(Qo(n) ? n : [], t)
                        }
                        return this[r]((function(r) {
                            return e.apply(Qo(r) ? r : [], t)
                        }))
                    }
                })), _i(Vr.prototype, (function(t, e) {
                    var r = Fr[e];
                    if (r) {
                        var i = r.name + "";
                        Ut.call(Tr, i) || (Tr[i] = []), Tr[i].push({
                            name: e,
                            func: r
                        })
                    }
                })), Tr[Kn(t, 2).name] = [{
                    name: "wrapper",
                    func: t
                }], Vr.prototype.clone = function() {
                    var t = new Vr(this.__wrapped__);
                    return t.__actions__ = Rn(this.__actions__), t.__dir__ = this.__dir__, t.__filtered__ = this.__filtered__, t.__iteratees__ = Rn(this.__iteratees__), t.__takeCount__ = this.__takeCount__, t.__views__ = Rn(this.__views__), t
                }, Vr.prototype.reverse = function() {
                    if (this.__filtered__) {
                        var t = new Vr(this);
                        t.__dir__ = -1, t.__filtered__ = !0
                    } else(t = this.clone()).__dir__ *= -1;
                    return t
                }, Vr.prototype.value = function() {
                    var t = this.__wrapped__.value(),
                        e = this.__dir__,
                        r = Qo(t),
                        i = e < 0,
                        n = r ? t.length : 0,
                        s = function(t, e, r) {
                            for (var i = -1, n = r.length; ++i < n;) {
                                var s = r[i],
                                    o = s.size;
                                switch (s.type) {
                                    case "drop":
                                        t += o;
                                        break;
                                    case "dropRight":
                                        e -= o;
                                        break;
                                    case "take":
                                        e = Ar(e, t + o);
                                        break;
                                    case "takeRight":
                                        t = br(t, e - o)
                                }
                            }
                            return {
                                start: t,
                                end: e
                            }
                        }(0, n, this.__views__),
                        o = s.start,
                        a = s.end,
                        c = a - o,
                        h = i ? a : o - 1,
                        u = this.__iteratees__,
                        l = u.length,
                        f = 0,
                        p = Ar(c, this.__takeCount__);
                    if (!r || !i && n == c && p == c) return vn(t, this.__actions__);
                    var d = [];
                    t: for (; c-- && f < p;) {
                        for (var g = -1, m = t[h += e]; ++g < l;) {
                            var v = u[g],
                                y = v.iteratee,
                                w = v.type,
                                b = y(m);
                            if (2 == w) m = b;
                            else if (!b) {
                                if (1 == w) continue t;
                                break t
                            }
                        }
                        d[f++] = m
                    }
                    return d
                }, Fr.prototype.at = vo, Fr.prototype.chain = function() {
                    return go(this)
                }, Fr.prototype.commit = function() {
                    return new $r(this.value(), this.__chain__)
                }, Fr.prototype.next = function() {
                    this.__values__ === t && (this.__values__ = ga(this.value()));
                    var e = this.__index__ >= this.__values__.length;
                    return {
                        done: e,
                        value: e ? t : this.__values__[this.__index__++]
                    }
                }, Fr.prototype.plant = function(e) {
                    for (var r, i = this; i instanceof Hr;) {
                        var n = Ls(i);
                        n.__index__ = 0, n.__values__ = t, r ? s.__wrapped__ = n : r = n;
                        var s = n;
                        i = i.__wrapped__
                    }
                    return s.__wrapped__ = e, r
                }, Fr.prototype.reverse = function() {
                    var e = this.__wrapped__;
                    if (e instanceof Vr) {
                        var r = e;
                        return this.__actions__.length && (r = new Vr(this)), (r = r.reverse()).__actions__.push({
                            func: mo,
                            args: [ro],
                            thisArg: t
                        }), new $r(r, this.__chain__)
                    }
                    return this.thru(ro)
                }, Fr.prototype.toJSON = Fr.prototype.valueOf = Fr.prototype.value = function() {
                    return vn(this.__wrapped__, this.__actions__)
                }, Fr.prototype.first = Fr.prototype.head, he && (Fr.prototype[he] = function() {
                    return this
                }), Fr
            }();
        me ? ((me.exports = gr)._ = gr, ge._ = gr) : de._ = gr
    }.call(Gu);
var Yu = Object.defineProperty,
    Xu = Object.defineProperties,
    Zu = Object.getOwnPropertyDescriptors,
    tl = Object.getOwnPropertySymbols,
    el = Object.prototype.hasOwnProperty,
    rl = Object.prototype.propertyIsEnumerable,
    il = (t, e, r) => e in t ? Yu(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : t[e] = r,
    nl = (t, e) => {
        for (var r in e || (e = {})) el.call(e, r) && il(t, r, e[r]);
        if (tl)
            for (var r of tl(e)) rl.call(e, r) && il(t, r, e[r]);
        return t
    },
    sl = (t, e) => Xu(t, Zu(e));

function ol(t, e, r) {
    var i;
    const n = wt(t);
    return (null == (i = e.rpcMap) ? void 0 : i[n.reference]) || `https://rpc.walletconnect.com/v1/?chainId=${n.namespace}:${n.reference}&projectId=${r}`
}

function al(t) {
    return t.includes(":") ? t.split(":")[1] : t
}

function cl(t) {
    return t.map((t => `${t.split(":")[0]}:${t.split(":")[1]}`))
}

function hl(t = {}, e = {}) {
    const r = ul(t),
        i = ul(e);
    return Ju.exports.merge(r, i)
}

function ul(t) {
    var e, r, i, n;
    const s = {};
    if (!wo(t)) return s;
    for (const [o, a] of Object.entries(t)) {
        const t = uo(o) ? [o] : a.chains,
            c = a.methods || [],
            h = a.events || [],
            u = a.rpcMap || {},
            l = lo(o);
        s[l] = sl(nl(nl({}, s[l]), a), {
            chains: Gt(t, null == (e = s[l]) ? void 0 : e.chains),
            methods: Gt(c, null == (r = s[l]) ? void 0 : r.methods),
            events: Gt(h, null == (i = s[l]) ? void 0 : i.events),
            rpcMap: nl(nl({}, u), null == (n = s[l]) ? void 0 : n.rpcMap)
        })
    }
    return s
}

function ll(t) {
    return t.includes(":") ? t.split(":")[2] : t
}

function fl(t) {
    const e = {};
    for (const [r, i] of Object.entries(t)) {
        const t = i.methods || [],
            n = i.events || [],
            s = i.accounts || [],
            o = uo(r) ? [r] : i.chains ? i.chains : cl(i.accounts);
        e[r] = {
            chains: o,
            methods: t,
            events: n,
            accounts: s
        }
    }
    return e
}

function pl(t) {
    return "number" == typeof t ? t : t.includes("0x") ? parseInt(t, 16) : (t = t.includes(":") ? t.split(":")[1] : t, isNaN(Number(t)) ? t : Number(t))
}
const dl = {},
    gl = t => dl[t],
    ml = (t, e) => {
        dl[t] = e
    };
class vl {
    constructor(t) {
        this.name = "polkadot", this.namespace = t.namespace, this.events = gl("events"), this.client = gl("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
    }
    updateNamespace(t) {
        this.namespace = Object.assign(this.namespace, t)
    }
    requestAccounts() {
        return this.getAccounts()
    }
    getDefaultChain() {
        if (this.chainId) return this.chainId;
        if (this.namespace.defaultChain) return this.namespace.defaultChain;
        const t = this.namespace.chains[0];
        if (!t) throw new Error("ChainId not found");
        return t.split(":")[1]
    }
    request(t) {
        return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request)
    }
    setDefaultChain(t, e) {
        this.httpProviders[t] || this.setHttpProvider(t, e), this.chainId = t, this.events.emit(Vu, `${this.name}:${t}`)
    }
    getAccounts() {
        const t = this.namespace.accounts;
        return t && t.filter((t => t.split(":")[1] === this.chainId.toString())).map((t => t.split(":")[2])) || []
    }
    createHttpProviders() {
        const t = {};
        return this.namespace.chains.forEach((e => {
            var r;
            const i = al(e);
            t[i] = this.createHttpProvider(i, null == (r = this.namespace.rpcMap) ? void 0 : r[e])
        })), t
    }
    getHttpProvider() {
        const t = `${this.name}:${this.chainId}`,
            e = this.httpProviders[t];
        if (typeof e > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
        return e
    }
    setHttpProvider(t, e) {
        const r = this.createHttpProvider(t, e);
        r && (this.httpProviders[t] = r)
    }
    createHttpProvider(t, e) {
        const r = e || ol(t, this.namespace, this.client.core.projectId);
        if (!r) throw new Error(`No RPC url provided for chainId: ${t}`);
        return new ra(new F(r, gl("disableProviderPing")))
    }
}
var yl = Object.defineProperty,
    wl = Object.defineProperties,
    bl = Object.getOwnPropertyDescriptors,
    Al = Object.getOwnPropertySymbols,
    _l = Object.prototype.hasOwnProperty,
    El = Object.prototype.propertyIsEnumerable,
    Il = (t, e, r) => e in t ? yl(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : t[e] = r,
    Sl = (t, e) => {
        for (var r in e || (e = {})) _l.call(e, r) && Il(t, r, e[r]);
        if (Al)
            for (var r of Al(e)) El.call(e, r) && Il(t, r, e[r]);
        return t
    },
    Ml = (t, e) => wl(t, bl(e));
class Pl {
    constructor(t) {
        this.name = "eip155", this.namespace = t.namespace, this.events = gl("events"), this.client = gl("client"), this.httpProviders = this.createHttpProviders(), this.chainId = parseInt(this.getDefaultChain())
    }
    async request(t) {
        switch (t.request.method) {
            case "eth_requestAccounts":
            case "eth_accounts":
                return this.getAccounts();
            case "wallet_switchEthereumChain":
                return await this.handleSwitchChain(t);
            case "eth_chainId":
                return parseInt(this.getDefaultChain());
            case "wallet_getCapabilities":
                return await this.getCapabilities(t)
        }
        return this.namespace.methods.includes(t.request.method) ? await this.client.request(t) : this.getHttpProvider().request(t.request)
    }
    updateNamespace(t) {
        this.namespace = Object.assign(this.namespace, t)
    }
    setDefaultChain(t, e) {
        this.httpProviders[t] || this.setHttpProvider(parseInt(t), e), this.chainId = parseInt(t), this.events.emit(Vu, `${this.name}:${t}`)
    }
    requestAccounts() {
        return this.getAccounts()
    }
    getDefaultChain() {
        if (this.chainId) return this.chainId.toString();
        if (this.namespace.defaultChain) return this.namespace.defaultChain;
        const t = this.namespace.chains[0];
        if (!t) throw new Error("ChainId not found");
        return t.split(":")[1]
    }
    createHttpProvider(t, e) {
        const r = e || ol(`${this.name}:${t}`, this.namespace, this.client.core.projectId);
        if (!r) throw new Error(`No RPC url provided for chainId: ${t}`);
        return new ra(new F(r, gl("disableProviderPing")))
    }
    setHttpProvider(t, e) {
        const r = this.createHttpProvider(t, e);
        r && (this.httpProviders[t] = r)
    }
    createHttpProviders() {
        const t = {};
        return this.namespace.chains.forEach((e => {
            var r;
            const i = parseInt(al(e));
            t[i] = this.createHttpProvider(i, null == (r = this.namespace.rpcMap) ? void 0 : r[e])
        })), t
    }
    getAccounts() {
        const t = this.namespace.accounts;
        return t ? [...new Set(t.filter((t => t.split(":")[1] === this.chainId.toString())).map((t => t.split(":")[2])))] : []
    }
    getHttpProvider() {
        const t = this.chainId,
            e = this.httpProviders[t];
        if (typeof e > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
        return e
    }
    async handleSwitchChain(t) {
        var e, r;
        let i = t.request.params ? null == (e = t.request.params[0]) ? void 0 : e.chainId : "0x0";
        i = i.startsWith("0x") ? i : `0x${i}`;
        const n = parseInt(i, 16);
        if (this.isChainApproved(n)) this.setDefaultChain(`${n}`);
        else {
            if (!this.namespace.methods.includes("wallet_switchEthereumChain")) throw new Error(`Failed to switch to chain 'eip155:${n}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`);
            await this.client.request({
                topic: t.topic,
                request: {
                    method: t.request.method,
                    params: [{
                        chainId: i
                    }]
                },
                chainId: null == (r = this.namespace.chains) ? void 0 : r[0]
            }), this.setDefaultChain(`${n}`)
        }
        return null
    }
    isChainApproved(t) {
        return this.namespace.chains.includes(`${this.name}:${t}`)
    }
    async getCapabilities(t) {
        var e, r, i;
        const n = null == (r = null == (e = t.request) ? void 0 : e.params) ? void 0 : r[0];
        if (!n) throw new Error("Missing address parameter in `wallet_getCapabilities` request");
        const s = this.client.session.get(t.topic),
            o = (null == (i = null == s ? void 0 : s.sessionProperties) ? void 0 : i.capabilities) || {};
        if (null != o && o[n]) return null == o ? void 0 : o[n];
        const a = await this.client.request(t);
        try {
            await this.client.session.update(t.topic, {
                sessionProperties: Ml(Sl({}, s.sessionProperties || {}), {
                    capabilities: Ml(Sl({}, o || {}), {
                        [n]: a
                    })
                })
            })
        } catch (c) {
            console.warn("Failed to update session with capabilities", c)
        }
        return a
    }
}
class xl {
    constructor(t) {
        this.name = "solana", this.namespace = t.namespace, this.events = gl("events"), this.client = gl("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
    }
    updateNamespace(t) {
        this.namespace = Object.assign(this.namespace, t)
    }
    requestAccounts() {
        return this.getAccounts()
    }
    request(t) {
        return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request)
    }
    setDefaultChain(t, e) {
        this.httpProviders[t] || this.setHttpProvider(t, e), this.chainId = t, this.events.emit(Vu, `${this.name}:${t}`)
    }
    getDefaultChain() {
        if (this.chainId) return this.chainId;
        if (this.namespace.defaultChain) return this.namespace.defaultChain;
        const t = this.namespace.chains[0];
        if (!t) throw new Error("ChainId not found");
        return t.split(":")[1]
    }
    getAccounts() {
        const t = this.namespace.accounts;
        return t ? [...new Set(t.filter((t => t.split(":")[1] === this.chainId.toString())).map((t => t.split(":")[2])))] : []
    }
    createHttpProviders() {
        const t = {};
        return this.namespace.chains.forEach((e => {
            var r;
            const i = al(e);
            t[i] = this.createHttpProvider(i, null == (r = this.namespace.rpcMap) ? void 0 : r[e])
        })), t
    }
    getHttpProvider() {
        const t = `${this.name}:${this.chainId}`,
            e = this.httpProviders[t];
        if (typeof e > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
        return e
    }
    setHttpProvider(t, e) {
        const r = this.createHttpProvider(t, e);
        r && (this.httpProviders[t] = r)
    }
    createHttpProvider(t, e) {
        const r = e || ol(t, this.namespace, this.client.core.projectId);
        if (!r) throw new Error(`No RPC url provided for chainId: ${t}`);
        return new ra(new F(r, gl("disableProviderPing")))
    }
}
class Nl {
    constructor(t) {
        this.name = "cosmos", this.namespace = t.namespace, this.events = gl("events"), this.client = gl("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
    }
    updateNamespace(t) {
        this.namespace = Object.assign(this.namespace, t)
    }
    requestAccounts() {
        return this.getAccounts()
    }
    getDefaultChain() {
        if (this.chainId) return this.chainId;
        if (this.namespace.defaultChain) return this.namespace.defaultChain;
        const t = this.namespace.chains[0];
        if (!t) throw new Error("ChainId not found");
        return t.split(":")[1]
    }
    request(t) {
        return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request)
    }
    setDefaultChain(t, e) {
        this.httpProviders[t] || this.setHttpProvider(t, e), this.chainId = t, this.events.emit(Vu, `${this.name}:${this.chainId}`)
    }
    getAccounts() {
        const t = this.namespace.accounts;
        return t ? [...new Set(t.filter((t => t.split(":")[1] === this.chainId.toString())).map((t => t.split(":")[2])))] : []
    }
    createHttpProviders() {
        const t = {};
        return this.namespace.chains.forEach((e => {
            var r;
            const i = al(e);
            t[i] = this.createHttpProvider(i, null == (r = this.namespace.rpcMap) ? void 0 : r[e])
        })), t
    }
    getHttpProvider() {
        const t = `${this.name}:${this.chainId}`,
            e = this.httpProviders[t];
        if (typeof e > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
        return e
    }
    setHttpProvider(t, e) {
        const r = this.createHttpProvider(t, e);
        r && (this.httpProviders[t] = r)
    }
    createHttpProvider(t, e) {
        const r = e || ol(t, this.namespace, this.client.core.projectId);
        if (!r) throw new Error(`No RPC url provided for chainId: ${t}`);
        return new ra(new F(r, gl("disableProviderPing")))
    }
}
class Cl {
    constructor(t) {
        this.name = "cip34", this.namespace = t.namespace, this.events = gl("events"), this.client = gl("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
    }
    updateNamespace(t) {
        this.namespace = Object.assign(this.namespace, t)
    }
    requestAccounts() {
        return this.getAccounts()
    }
    getDefaultChain() {
        if (this.chainId) return this.chainId;
        if (this.namespace.defaultChain) return this.namespace.defaultChain;
        const t = this.namespace.chains[0];
        if (!t) throw new Error("ChainId not found");
        return t.split(":")[1]
    }
    request(t) {
        return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request)
    }
    setDefaultChain(t, e) {
        this.httpProviders[t] || this.setHttpProvider(t, e), this.chainId = t, this.events.emit(Vu, `${this.name}:${this.chainId}`)
    }
    getAccounts() {
        const t = this.namespace.accounts;
        return t ? [...new Set(t.filter((t => t.split(":")[1] === this.chainId.toString())).map((t => t.split(":")[2])))] : []
    }
    createHttpProviders() {
        const t = {};
        return this.namespace.chains.forEach((e => {
            const r = this.getCardanoRPCUrl(e),
                i = al(e);
            t[i] = this.createHttpProvider(i, r)
        })), t
    }
    getHttpProvider() {
        const t = `${this.name}:${this.chainId}`,
            e = this.httpProviders[t];
        if (typeof e > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
        return e
    }
    getCardanoRPCUrl(t) {
        const e = this.namespace.rpcMap;
        if (e) return e[t]
    }
    setHttpProvider(t, e) {
        const r = this.createHttpProvider(t, e);
        r && (this.httpProviders[t] = r)
    }
    createHttpProvider(t, e) {
        const r = e || this.getCardanoRPCUrl(t);
        if (!r) throw new Error(`No RPC url provided for chainId: ${t}`);
        return new ra(new F(r, gl("disableProviderPing")))
    }
}
class Ol {
    constructor(t) {
        this.name = "elrond", this.namespace = t.namespace, this.events = gl("events"), this.client = gl("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
    }
    updateNamespace(t) {
        this.namespace = Object.assign(this.namespace, t)
    }
    requestAccounts() {
        return this.getAccounts()
    }
    request(t) {
        return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request)
    }
    setDefaultChain(t, e) {
        this.httpProviders[t] || this.setHttpProvider(t, e), this.chainId = t, this.events.emit(Vu, `${this.name}:${t}`)
    }
    getDefaultChain() {
        if (this.chainId) return this.chainId;
        if (this.namespace.defaultChain) return this.namespace.defaultChain;
        const t = this.namespace.chains[0];
        if (!t) throw new Error("ChainId not found");
        return t.split(":")[1]
    }
    getAccounts() {
        const t = this.namespace.accounts;
        return t ? [...new Set(t.filter((t => t.split(":")[1] === this.chainId.toString())).map((t => t.split(":")[2])))] : []
    }
    createHttpProviders() {
        const t = {};
        return this.namespace.chains.forEach((e => {
            var r;
            const i = al(e);
            t[i] = this.createHttpProvider(i, null == (r = this.namespace.rpcMap) ? void 0 : r[e])
        })), t
    }
    getHttpProvider() {
        const t = `${this.name}:${this.chainId}`,
            e = this.httpProviders[t];
        if (typeof e > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
        return e
    }
    setHttpProvider(t, e) {
        const r = this.createHttpProvider(t, e);
        r && (this.httpProviders[t] = r)
    }
    createHttpProvider(t, e) {
        const r = e || ol(t, this.namespace, this.client.core.projectId);
        if (!r) throw new Error(`No RPC url provided for chainId: ${t}`);
        return new ra(new F(r, gl("disableProviderPing")))
    }
}
class Rl {
    constructor(t) {
        this.name = "multiversx", this.namespace = t.namespace, this.events = gl("events"), this.client = gl("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
    }
    updateNamespace(t) {
        this.namespace = Object.assign(this.namespace, t)
    }
    requestAccounts() {
        return this.getAccounts()
    }
    request(t) {
        return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request)
    }
    setDefaultChain(t, e) {
        this.httpProviders[t] || this.setHttpProvider(t, e), this.chainId = t, this.events.emit(Vu, `${this.name}:${t}`)
    }
    getDefaultChain() {
        if (this.chainId) return this.chainId;
        if (this.namespace.defaultChain) return this.namespace.defaultChain;
        const t = this.namespace.chains[0];
        if (!t) throw new Error("ChainId not found");
        return t.split(":")[1]
    }
    getAccounts() {
        const t = this.namespace.accounts;
        return t ? [...new Set(t.filter((t => t.split(":")[1] === this.chainId.toString())).map((t => t.split(":")[2])))] : []
    }
    createHttpProviders() {
        const t = {};
        return this.namespace.chains.forEach((e => {
            var r;
            const i = al(e);
            t[i] = this.createHttpProvider(i, null == (r = this.namespace.rpcMap) ? void 0 : r[e])
        })), t
    }
    getHttpProvider() {
        const t = `${this.name}:${this.chainId}`,
            e = this.httpProviders[t];
        if (typeof e > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
        return e
    }
    setHttpProvider(t, e) {
        const r = this.createHttpProvider(t, e);
        r && (this.httpProviders[t] = r)
    }
    createHttpProvider(t, e) {
        const r = e || ol(t, this.namespace, this.client.core.projectId);
        if (!r) throw new Error(`No RPC url provided for chainId: ${t}`);
        return new ra(new F(r, gl("disableProviderPing")))
    }
}
class Tl {
    constructor(t) {
        this.name = "near", this.namespace = t.namespace, this.events = gl("events"), this.client = gl("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
    }
    updateNamespace(t) {
        this.namespace = Object.assign(this.namespace, t)
    }
    requestAccounts() {
        return this.getAccounts()
    }
    getDefaultChain() {
        if (this.chainId) return this.chainId;
        if (this.namespace.defaultChain) return this.namespace.defaultChain;
        const t = this.namespace.chains[0];
        if (!t) throw new Error("ChainId not found");
        return t.split(":")[1]
    }
    request(t) {
        return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request)
    }
    setDefaultChain(t, e) {
        if (this.chainId = t, !this.httpProviders[t]) {
            const r = e || ol(`${this.name}:${t}`, this.namespace);
            if (!r) throw new Error(`No RPC url provided for chainId: ${t}`);
            this.setHttpProvider(t, r)
        }
        this.events.emit(Vu, `${this.name}:${this.chainId}`)
    }
    getAccounts() {
        const t = this.namespace.accounts;
        return t && t.filter((t => t.split(":")[1] === this.chainId.toString())).map((t => t.split(":")[2])) || []
    }
    createHttpProviders() {
        const t = {};
        return this.namespace.chains.forEach((e => {
            var r;
            t[e] = this.createHttpProvider(e, null == (r = this.namespace.rpcMap) ? void 0 : r[e])
        })), t
    }
    getHttpProvider() {
        const t = `${this.name}:${this.chainId}`,
            e = this.httpProviders[t];
        if (typeof e > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
        return e
    }
    setHttpProvider(t, e) {
        const r = this.createHttpProvider(t, e);
        r && (this.httpProviders[t] = r)
    }
    createHttpProvider(t, e) {
        const r = e || ol(t, this.namespace);
        return typeof r > "u" ? void 0 : new ra(new F(r, gl("disableProviderPing")))
    }
}
var ql = Object.defineProperty,
    Dl = Object.defineProperties,
    kl = Object.getOwnPropertyDescriptors,
    Bl = Object.getOwnPropertySymbols,
    Ul = Object.prototype.hasOwnProperty,
    jl = Object.prototype.propertyIsEnumerable,
    zl = (t, e, r) => e in t ? ql(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : t[e] = r,
    Ll = (t, e) => {
        for (var r in e || (e = {})) Ul.call(e, r) && zl(t, r, e[r]);
        if (Bl)
            for (var r of Bl(e)) jl.call(e, r) && zl(t, r, e[r]);
        return t
    },
    Fl = (t, e) => Dl(t, kl(e));
class Kl {
    constructor(t) {
        this.events = new n, this.rpcProviders = {}, this.shouldAbortPairingAttempt = !1, this.maxPairingAttempts = 10, this.disableProviderPing = !1, this.providerOpts = t, this.logger = typeof(null == t ? void 0 : t.logger) < "u" && "string" != typeof(null == t ? void 0 : t.logger) ? t.logger : B(O({
            level: (null == t ? void 0 : t.logger) || Hu
        })), this.disableProviderPing = (null == t ? void 0 : t.disableProviderPing) || !1
    }
    static async init(t) {
        const e = new Kl(t);
        return await e.initialize(), e
    }
    async request(t, e, r) {
        const [i, n] = this.validateChain(e);
        if (!this.session) throw new Error("Please call connect() before request()");
        return await this.getProvider(i).request({
            request: Ll({}, t),
            chainId: `${i}:${n}`,
            topic: this.session.topic,
            expiry: r
        })
    }
    sendAsync(t, e, r, i) {
        const n = (new Date).getTime();
        this.request(t, r, i).then((t => e(null, j(n, t)))).catch((t => e(t, void 0)))
    }
    async enable() {
        if (!this.client) throw new Error("Sign Client not initialized");
        return this.session || await this.connect({
            namespaces: this.namespaces,
            optionalNamespaces: this.optionalNamespaces,
            sessionProperties: this.sessionProperties
        }), await this.requestAccounts()
    }
    async disconnect() {
        var t;
        if (!this.session) throw new Error("Please call connect() before enable()");
        await this.client.disconnect({
            topic: null == (t = this.session) ? void 0 : t.topic,
            reason: vo("USER_DISCONNECTED")
        }), await this.cleanup()
    }
    async connect(t) {
        if (!this.client) throw new Error("Sign Client not initialized");
        if (this.setNamespaces(t), await this.cleanupPendingPairings(), !t.skipPairing) return await this.pair(t.pairingTopic)
    }
    async authenticate(t) {
        if (!this.client) throw new Error("Sign Client not initialized");
        this.setNamespaces(t), await this.cleanupPendingPairings();
        const {
            uri: e,
            response: r
        } = await this.client.authenticate(t);
        e && (this.uri = e, this.events.emit("display_uri", e));
        const i = await r();
        if (this.session = i.session, this.session) {
            const t = fl(this.session.namespaces);
            this.namespaces = hl(this.namespaces, t), this.persist("namespaces", this.namespaces), this.onConnect()
        }
        return i
    }
    on(t, e) {
        this.events.on(t, e)
    }
    once(t, e) {
        this.events.once(t, e)
    }
    removeListener(t, e) {
        this.events.removeListener(t, e)
    }
    off(t, e) {
        this.events.off(t, e)
    }
    get isWalletConnect() {
        return !0
    }
    async pair(t) {
        this.shouldAbortPairingAttempt = !1;
        let e = 0;
        do {
            if (this.shouldAbortPairingAttempt) throw new Error("Pairing aborted");
            if (e >= this.maxPairingAttempts) throw new Error("Max auto pairing attempts reached");
            const {
                uri: r,
                approval: i
            } = await this.client.connect({
                pairingTopic: t,
                requiredNamespaces: this.namespaces,
                optionalNamespaces: this.optionalNamespaces,
                sessionProperties: this.sessionProperties
            });
            r && (this.uri = r, this.events.emit("display_uri", r)), await i().then((t => {
                this.session = t;
                const e = fl(t.namespaces);
                this.namespaces = hl(this.namespaces, e), this.persist("namespaces", this.namespaces)
            })).catch((t => {
                if (t.message !== vu) throw t;
                e++
            }))
        } while (!this.session);
        return this.onConnect(), this.session
    }
    setDefaultChain(t, e) {
        try {
            if (!this.session) return;
            const [r, i] = this.validateChain(t);
            this.getProvider(r).setDefaultChain(i, e)
        } catch (r) {
            if (!/Please call connect/.test(r.message)) throw r
        }
    }
    async cleanupPendingPairings(t = {}) {
        this.logger.info("Cleaning up inactive pairings...");
        const e = this.client.pairing.getAll();
        if (yo(e)) {
            for (const r of e) t.deletePairings ? this.client.core.expirer.set(r.topic, 0) : await this.client.core.relayer.subscriber.unsubscribe(r.topic);
            this.logger.info(`Inactive pairings cleared: ${e.length}`)
        }
    }
    abortPairingAttempt() {
        this.shouldAbortPairingAttempt = !0
    }
    async checkStorage() {
        if (this.namespaces = await this.getFromStore("namespaces"), this.optionalNamespaces = await this.getFromStore("optionalNamespaces") || {}, this.client.session.length) {
            const t = this.client.session.keys.length - 1;
            this.session = this.client.session.get(this.client.session.keys[t]), this.createProviders()
        }
    }
    async initialize() {
        this.logger.trace("Initialized"), await this.createClient(), await this.checkStorage(), this.registerEventListeners()
    }
    async createClient() {
        this.client = this.providerOpts.client || await Ku.init({
            logger: this.providerOpts.logger || Hu,
            relayUrl: this.providerOpts.relayUrl || "wss://relay.walletconnect.com",
            projectId: this.providerOpts.projectId,
            metadata: this.providerOpts.metadata,
            storageOptions: this.providerOpts.storageOptions,
            storage: this.providerOpts.storage,
            name: this.providerOpts.name
        }), this.logger.trace("SignClient Initialized")
    }
    createProviders() {
        if (!this.client) throw new Error("Sign Client not initialized");
        if (!this.session) throw new Error("Session not initialized. Please call connect() before enable()");
        const t = [...new Set(Object.keys(this.session.namespaces).map((t => lo(t))))];
        ml("client", this.client), ml("events", this.events), ml("disableProviderPing", this.disableProviderPing), t.forEach((t => {
            if (!this.session) return;
            const e = function(t, e) {
                    const r = Object.keys(e.namespaces).filter((e => e.includes(t)));
                    if (!r.length) return [];
                    const i = [];
                    return r.forEach((t => {
                        const r = e.namespaces[t].accounts;
                        i.push(...r)
                    })), i
                }(t, this.session),
                r = cl(e),
                i = hl(this.namespaces, this.optionalNamespaces),
                n = Fl(Ll({}, i[t]), {
                    accounts: e,
                    chains: r
                });
            switch (t) {
                case "eip155":
                    this.rpcProviders[t] = new Pl({
                        namespace: n
                    });
                    break;
                case "solana":
                    this.rpcProviders[t] = new xl({
                        namespace: n
                    });
                    break;
                case "cosmos":
                    this.rpcProviders[t] = new Nl({
                        namespace: n
                    });
                    break;
                case "polkadot":
                    this.rpcProviders[t] = new vl({
                        namespace: n
                    });
                    break;
                case "cip34":
                    this.rpcProviders[t] = new Cl({
                        namespace: n
                    });
                    break;
                case "elrond":
                    this.rpcProviders[t] = new Ol({
                        namespace: n
                    });
                    break;
                case "multiversx":
                    this.rpcProviders[t] = new Rl({
                        namespace: n
                    });
                    break;
                case "near":
                    this.rpcProviders[t] = new Tl({
                        namespace: n
                    })
            }
        }))
    }
    registerEventListeners() {
        if (typeof this.client > "u") throw new Error("Sign Client is not initialized");
        this.client.on("session_ping", (t => {
            this.events.emit("session_ping", t)
        })), this.client.on("session_event", (t => {
            const {
                params: e
            } = t, {
                event: r
            } = e;
            if ("accountsChanged" === r.name) {
                const t = r.data;
                t && yo(t) && this.events.emit("accountsChanged", t.map(ll))
            } else if ("chainChanged" === r.name) {
                const t = e.chainId,
                    r = e.event.data,
                    i = lo(t),
                    n = pl(t) !== pl(r) ? `${i}:${pl(r)}` : t;
                this.onChainChanged(n)
            } else this.events.emit(r.name, r.data);
            this.events.emit("session_event", t)
        })), this.client.on("session_update", (({
            topic: t,
            params: e
        }) => {
            var r;
            const {
                namespaces: i
            } = e, n = null == (r = this.client) ? void 0 : r.session.get(t);
            this.session = Fl(Ll({}, n), {
                namespaces: i
            }), this.onSessionUpdate(), this.events.emit("session_update", {
                topic: t,
                params: e
            })
        })), this.client.on("session_delete", (async t => {
            await this.cleanup(), this.events.emit("session_delete", t), this.events.emit("disconnect", Fl(Ll({}, vo("USER_DISCONNECTED")), {
                data: t.topic
            }))
        })), this.on(Vu, (t => {
            this.onChainChanged(t, !0)
        }))
    }
    getProvider(t) {
        if (!this.rpcProviders[t]) throw new Error(`Provider not found: ${t}`);
        return this.rpcProviders[t]
    }
    onSessionUpdate() {
        Object.keys(this.rpcProviders).forEach((t => {
            var e;
            this.getProvider(t).updateNamespace(null == (e = this.session) ? void 0 : e.namespaces[t])
        }))
    }
    setNamespaces(t) {
        const {
            namespaces: e,
            optionalNamespaces: r,
            sessionProperties: i
        } = t;
        e && Object.keys(e).length && (this.namespaces = e), r && Object.keys(r).length && (this.optionalNamespaces = r), this.sessionProperties = i, this.persist("namespaces", e), this.persist("optionalNamespaces", r)
    }
    validateChain(t) {
        const [e, r] = (null == t ? void 0 : t.split(":")) || ["", ""];
        if (!this.namespaces || !Object.keys(this.namespaces).length) return [e, r];
        if (e && !Object.keys(this.namespaces || {}).map((t => lo(t))).includes(e)) throw new Error(`Namespace '${e}' is not configured. Please call connect() first with namespace config.`);
        if (e && r) return [e, r];
        const i = lo(Object.keys(this.namespaces)[0]);
        return [i, this.rpcProviders[i].getDefaultChain()]
    }
    async requestAccounts() {
        const [t] = this.validateChain();
        return await this.getProvider(t).requestAccounts()
    }
    onChainChanged(t, e = !1) {
        if (!this.namespaces) return;
        const [r, i] = this.validateChain(t);
        i && (e || this.getProvider(r).setDefaultChain(i), this.namespaces[r] ? this.namespaces[r].defaultChain = i : this.namespaces[`${r}:${i}`] ? this.namespaces[`${r}:${i}`].defaultChain = i : this.namespaces[`${r}:${i}`] = {
            defaultChain: i
        }, this.persist("namespaces", this.namespaces), this.events.emit("chainChanged", i))
    }
    onConnect() {
        this.createProviders(), this.events.emit("connect", {
            session: this.session
        })
    }
    async cleanup() {
        this.session = void 0, this.namespaces = void 0, this.optionalNamespaces = void 0, this.sessionProperties = void 0, this.persist("namespaces", void 0), this.persist("optionalNamespaces", void 0), this.persist("sessionProperties", void 0), await this.cleanupPendingPairings({
            deletePairings: !0
        })
    }
    persist(t, e) {
        this.client.core.storage.setItem(`${$u}/${t}`, e)
    }
    async getFromStore(t) {
        return await this.client.core.storage.getItem(`${$u}/${t}`)
    }
}
const Hl = Kl,
    $l = ["eth_sendTransaction", "personal_sign"],
    Vl = ["eth_accounts", "eth_requestAccounts", "eth_sendRawTransaction", "eth_sign", "eth_signTransaction", "eth_signTypedData", "eth_signTypedData_v3", "eth_signTypedData_v4", "eth_sendTransaction", "personal_sign", "wallet_switchEthereumChain", "wallet_addEthereumChain", "wallet_getPermissions", "wallet_requestPermissions", "wallet_registerOnboarding", "wallet_watchAsset", "wallet_scanQRCode", "wallet_sendCalls", "wallet_getCapabilities", "wallet_getCallsStatus", "wallet_showCallsStatus"],
    Ql = ["chainChanged", "accountsChanged"],
    Wl = ["chainChanged", "accountsChanged", "message", "disconnect", "connect"];
var Gl = Object.defineProperty,
    Jl = Object.defineProperties,
    Yl = Object.getOwnPropertyDescriptors,
    Xl = Object.getOwnPropertySymbols,
    Zl = Object.prototype.hasOwnProperty,
    tf = Object.prototype.propertyIsEnumerable,
    ef = (t, e, r) => e in t ? Gl(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : t[e] = r,
    rf = (t, e) => {
        for (var r in e || (e = {})) Zl.call(e, r) && ef(t, r, e[r]);
        if (Xl)
            for (var r of Xl(e)) tf.call(e, r) && ef(t, r, e[r]);
        return t
    },
    nf = (t, e) => Jl(t, Yl(e));

function sf(t) {
    return Number(t[0].split(":")[1])
}

function of (t) {
    return `0x${t.toString(16)}`
}
class af {
    constructor() {
        this.events = new i.EventEmitter, this.namespace = "eip155", this.accounts = [], this.chainId = 1, this.STORAGE_KEY = "wc@2:ethereum_provider:", this.on = (t, e) => (this.events.on(t, e), this), this.once = (t, e) => (this.events.once(t, e), this), this.removeListener = (t, e) => (this.events.removeListener(t, e), this), this.off = (t, e) => (this.events.off(t, e), this), this.parseAccount = t => this.isCompatibleChainId(t) ? this.parseAccountId(t).address : t, this.signer = {}, this.rpc = {}
    }
    static async init(t) {
        const e = new af;
        return await e.initialize(t), e
    }
    async request(t, e) {
        return await this.signer.request(t, this.formatChainId(this.chainId), e)
    }
    sendAsync(t, e, r) {
        this.signer.sendAsync(t, e, this.formatChainId(this.chainId), r)
    }
    get connected() {
        return !!this.signer.client && this.signer.client.core.relayer.connected
    }
    get connecting() {
        return !!this.signer.client && this.signer.client.core.relayer.connecting
    }
    async enable() {
        return this.session || await this.connect(), await this.request({
            method: "eth_requestAccounts"
        })
    }
    async connect(t) {
        if (!this.signer.client) throw new Error("Provider not initialized. Call init() first");
        this.loadConnectOpts(t);
        const {
            required: e,
            optional: r
        } = function(t) {
            const {
                chains: e,
                optionalChains: r,
                methods: i,
                optionalMethods: n,
                events: s,
                optionalEvents: o,
                rpcMap: a
            } = t;
            if (!yo(e)) throw new Error("Invalid chains");
            const c = {
                    chains: e,
                    methods: i || $l,
                    events: s || Ql,
                    rpcMap: rf({}, e.length ? {
                        [sf(e)]: a[sf(e)]
                    } : {})
                },
                h = null == s ? void 0 : s.filter((t => !Ql.includes(t))),
                u = null == i ? void 0 : i.filter((t => !$l.includes(t)));
            if (!(r || o || n || null != h && h.length || null != u && u.length)) return {
                required: e.length ? c : void 0
            };
            const l = (null == h ? void 0 : h.length) && (null == u ? void 0 : u.length) || !r,
                f = {
                    chains: [...new Set(l ? c.chains.concat(r || []) : r)],
                    methods: [...new Set(c.methods.concat(null != n && n.length ? n : Vl))],
                    events: [...new Set(c.events.concat(null != o && o.length ? o : Wl))],
                    rpcMap: a
                };
            return {
                required: e.length ? c : void 0,
                optional: r.length ? f : void 0
            }
        }(this.rpc);
        try {
            const i = await new Promise((async (i, n) => {
                var s;
                this.rpc.showQrModal && (null == (s = this.modal) || s.subscribeModal((t => {
                    !t.open && !this.signer.session && (this.signer.abortPairingAttempt(), n(new Error("Connection request reset. Please try again.")))
                }))), await this.signer.connect(nf(rf({
                    namespaces: rf({}, e && {
                        [this.namespace]: e
                    })
                }, r && {
                    optionalNamespaces: {
                        [this.namespace]: r
                    }
                }), {
                    pairingTopic: null == t ? void 0 : t.pairingTopic
                })).then((t => {
                    i(t)
                })).catch((t => {
                    n(new Error(t.message))
                }))
            }));
            if (!i) return;
            const n = bt(i.namespaces, [this.namespace]);
            this.setChainIds(this.rpc.chains.length ? this.rpc.chains : n), this.setAccounts(n), this.events.emit("connect", {
                chainId: of (this.chainId)
            })
        } catch (Yt) {
            throw this.signer.logger.error(Yt), Yt
        } finally {
            this.modal && this.modal.closeModal()
        }
    }
    async authenticate(t) {
        if (!this.signer.client) throw new Error("Provider not initialized. Call init() first");
        this.loadConnectOpts({
            chains: null == t ? void 0 : t.chains
        });
        try {
            const e = await new Promise((async (e, r) => {
                    var i;
                    this.rpc.showQrModal && (null == (i = this.modal) || i.subscribeModal((t => {
                        !t.open && !this.signer.session && (this.signer.abortPairingAttempt(), r(new Error("Connection request reset. Please try again.")))
                    }))), await this.signer.authenticate(nf(rf({}, t), {
                        chains: this.rpc.chains
                    })).then((t => {
                        e(t)
                    })).catch((t => {
                        r(new Error(t.message))
                    }))
                })),
                r = e.session;
            if (r) {
                const t = bt(r.namespaces, [this.namespace]);
                this.setChainIds(this.rpc.chains.length ? this.rpc.chains : t), this.setAccounts(t), this.events.emit("connect", {
                    chainId: of (this.chainId)
                })
            }
            return e
        } catch (e) {
            throw this.signer.logger.error(e), e
        } finally {
            this.modal && this.modal.closeModal()
        }
    }
    async disconnect() {
        this.session && await this.signer.disconnect(), this.reset()
    }
    get isWalletConnect() {
        return !0
    }
    get session() {
        return this.signer.session
    }
    registerEventListeners() {
        this.signer.on("session_event", (t => {
            const {
                params: e
            } = t, {
                event: r
            } = e;
            "accountsChanged" === r.name ? (this.accounts = this.parseAccounts(r.data), this.events.emit("accountsChanged", this.accounts)) : "chainChanged" === r.name ? this.setChainId(this.formatChainId(r.data)) : this.events.emit(r.name, r.data), this.events.emit("session_event", t)
        })), this.signer.on("chainChanged", (t => {
            const e = parseInt(t);
            this.chainId = e, this.events.emit("chainChanged", of (this.chainId)), this.persist()
        })), this.signer.on("session_update", (t => {
            this.events.emit("session_update", t)
        })), this.signer.on("session_delete", (t => {
            this.reset(), this.events.emit("session_delete", t), this.events.emit("disconnect", nf(rf({}, vo("USER_DISCONNECTED")), {
                data: t.topic,
                name: "USER_DISCONNECTED"
            }))
        })), this.signer.on("display_uri", (t => {
            var e, r;
            this.rpc.showQrModal && (null == (e = this.modal) || e.closeModal(), null == (r = this.modal) || r.openModal({
                uri: t
            })), this.events.emit("display_uri", t)
        }))
    }
    switchEthereumChain(t) {
        this.request({
            method: "wallet_switchEthereumChain",
            params: [{
                chainId: t.toString(16)
            }]
        })
    }
    isCompatibleChainId(t) {
        return "string" == typeof t && t.startsWith(`${this.namespace}:`)
    }
    formatChainId(t) {
        return `${this.namespace}:${t}`
    }
    parseChainId(t) {
        return Number(t.split(":")[1])
    }
    setChainIds(t) {
        const e = t.filter((t => this.isCompatibleChainId(t))).map((t => this.parseChainId(t)));
        e.length && (this.chainId = e[0], this.events.emit("chainChanged", of (this.chainId)), this.persist())
    }
    setChainId(t) {
        if (this.isCompatibleChainId(t)) {
            const e = this.parseChainId(t);
            this.chainId = e, this.switchEthereumChain(e)
        }
    }
    parseAccountId(t) {
        const [e, r, i] = t.split(":");
        return {
            chainId: `${e}:${r}`,
            address: i
        }
    }
    setAccounts(t) {
        this.accounts = t.filter((t => this.parseChainId(this.parseAccountId(t).chainId) === this.chainId)).map((t => this.parseAccountId(t).address)), this.events.emit("accountsChanged", this.accounts)
    }
    getRpcConfig(t) {
        var e, r;
        const i = null != (e = null == t ? void 0 : t.chains) ? e : [],
            n = null != (r = null == t ? void 0 : t.optionalChains) ? r : [],
            s = i.concat(n);
        if (!s.length) throw new Error("No chains specified in either `chains` or `optionalChains`");
        const o = i.length ? (null == t ? void 0 : t.methods) || $l : [],
            a = i.length ? (null == t ? void 0 : t.events) || Ql : [],
            c = (null == t ? void 0 : t.optionalMethods) || [],
            h = (null == t ? void 0 : t.optionalEvents) || [],
            u = (null == t ? void 0 : t.rpcMap) || this.buildRpcMap(s, t.projectId),
            l = (null == t ? void 0 : t.qrModalOptions) || void 0;
        return {
            chains: null == i ? void 0 : i.map((t => this.formatChainId(t))),
            optionalChains: n.map((t => this.formatChainId(t))),
            methods: o,
            events: a,
            optionalMethods: c,
            optionalEvents: h,
            rpcMap: u,
            showQrModal: !(null == t || !t.showQrModal),
            qrModalOptions: l,
            projectId: t.projectId,
            metadata: t.metadata
        }
    }
    buildRpcMap(t, e) {
        const r = {};
        return t.forEach((t => {
            r[t] = this.getRpcUrl(t, e)
        })), r
    }
    async initialize(t) {
        if (this.rpc = this.getRpcConfig(t), this.chainId = this.rpc.chains.length ? sf(this.rpc.chains) : sf(this.rpc.optionalChains), this.signer = await Hl.init({
                projectId: this.rpc.projectId,
                metadata: this.rpc.metadata,
                disableProviderPing: t.disableProviderPing,
                relayUrl: t.relayUrl,
                storageOptions: t.storageOptions
            }), this.registerEventListeners(), await this.loadPersistedSession(), this.rpc.showQrModal) {
            let t;
            try {
                const {
                    WalletConnectModal: e
                } = await r((() =>
                    import ("./index-CGsvcoiG.js").then((t => t.i))), __vite__mapDeps([0, 1, 2, 3]));
                t = e
            } catch {
                throw new Error("To use QR modal, please install @walletconnect/modal package")
            }
            if (t) try {
                this.modal = new t(rf({
                    projectId: this.rpc.projectId
                }, this.rpc.qrModalOptions))
            } catch (e) {
                throw this.signer.logger.error(e), new Error("Could not generate WalletConnectModal Instance")
            }
        }
    }
    loadConnectOpts(t) {
        if (!t) return;
        const {
            chains: e,
            optionalChains: r,
            rpcMap: i
        } = t;
        e && yo(e) && (this.rpc.chains = e.map((t => this.formatChainId(t))), e.forEach((t => {
            this.rpc.rpcMap[t] = (null == i ? void 0 : i[t]) || this.getRpcUrl(t)
        }))), r && yo(r) && (this.rpc.optionalChains = [], this.rpc.optionalChains = null == r ? void 0 : r.map((t => this.formatChainId(t))), r.forEach((t => {
            this.rpc.rpcMap[t] = (null == i ? void 0 : i[t]) || this.getRpcUrl(t)
        })))
    }
    getRpcUrl(t, e) {
        var r;
        return (null == (r = this.rpc.rpcMap) ? void 0 : r[t]) || `https://rpc.walletconnect.com/v1/?chainId=eip155:${t}&projectId=${e||this.rpc.projectId}`
    }
    async loadPersistedSession() {
        if (this.session) try {
            const t = await this.signer.client.core.storage.getItem(`${this.STORAGE_KEY}/chainId`),
                e = this.session.namespaces[`${this.namespace}:${t}`] ? this.session.namespaces[`${this.namespace}:${t}`] : this.session.namespaces[this.namespace];
            this.setChainIds(t ? [this.formatChainId(t)] : null == e ? void 0 : e.accounts), this.setAccounts(null == e ? void 0 : e.accounts)
        } catch (bn) {
            this.signer.logger.error("Failed to load persisted session, clearing state..."), this.signer.logger.error(bn), await this.disconnect().catch((t => this.signer.logger.warn(t)))
        }
    }
    reset() {
        this.chainId = 1, this.accounts = []
    }
    persist() {
        this.session && this.signer.client.core.storage.setItem(`${this.STORAGE_KEY}/chainId`, this.chainId)
    }
    parseAccounts(t) {
        return "string" == typeof t || t instanceof String ? [this.parseAccount(t)] : t.map((t => this.parseAccount(t)))
    }
}
export {
    Wl as OPTIONAL_EVENTS, Vl as OPTIONAL_METHODS, Ql as REQUIRED_EVENTS, $l as REQUIRED_METHODS, af as
    default
};