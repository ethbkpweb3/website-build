const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/index-C6qopx2I.js", "assets/index-jdACH0Rc.js", "assets/index-st4cR-qp.css", "assets/index.modern-ChJ35hAh.js"]))) => i.map(i => d[i]);
import {
    dl as e,
    _ as t
} from "./index-jdACH0Rc.js";
import {
    e as r,
    B as n
} from "./events-D8VlOyhg.js";
import {
    s as i,
    d as s,
    I as o,
    L as a,
    c,
    a as u,
    M as h,
    N as l,
    x as p,
    r as d,
    H as f,
    e as g,
    O as y,
    C as m,
    f as v,
    g as w,
    h as b,
    i as _,
    j as E,
    k as I,
    l as S,
    m as P,
    n as O,
    o as N,
    p as R,
    q as T,
    G as x,
    E as C,
    y as A,
    W as j,
    t as D,
    u as U,
    v as k,
    w as $,
    z as q,
    B as M,
    D as L,
    F as z,
    K as V
} from "./index.es-BkijiSkd.js";
import "./index-BFnVcjcj.js";
import "./_commonjs-dynamic-modules-BHR_E30J.js";
import "./___vite-browser-external_commonjs-proxy-BKgLGdYW.js";
import "./tslib.es6-D9zZKb6Q.js";
var K = {};

function H(e) {
    let t;
    return "undefined" != typeof window && void 0 !== window[e] && (t = window[e]), t
}

function W(e) {
    const t = H(e);
    if (!t) throw new Error(`${e} is not defined in Window`);
    return t
}
Object.defineProperty(K, "__esModule", {
    value: !0
}), K.getLocalStorage = K.getLocalStorageOrThrow = K.getCrypto = K.getCryptoOrThrow = K.getLocation = K.getLocationOrThrow = K.getNavigator = K.getNavigatorOrThrow = K.getDocument = K.getDocumentOrThrow = K.getFromWindowOrThrow = K.getFromWindow = void 0, K.getFromWindow = H, K.getFromWindowOrThrow = W, K.getDocumentOrThrow = function() {
    return W("document")
}, K.getDocument = function() {
    return H("document")
}, K.getNavigatorOrThrow = function() {
    return W("navigator")
}, K.getNavigator = function() {
    return H("navigator")
}, K.getLocationOrThrow = function() {
    return W("location")
}, K.getLocation = function() {
    return H("location")
}, K.getCryptoOrThrow = function() {
    return W("crypto")
}, K.getCrypto = function() {
    return H("crypto")
}, K.getLocalStorageOrThrow = function() {
    return W("localStorage")
}, K.getLocalStorage = function() {
    return H("localStorage")
};
var F = {};
Object.defineProperty(F, "__esModule", {
    value: !0
}), F.getWindowMetadata = void 0;
const B = K;
F.getWindowMetadata = function() {
    let e, t;
    try {
        e = B.getDocumentOrThrow(), t = B.getLocationOrThrow()
    } catch (i) {
        return null
    }

    function r(...t) {
        const r = e.getElementsByTagName("meta");
        for (let e = 0; e < r.length; e++) {
            const n = r[e],
                i = ["itemprop", "property", "name"].map((e => n.getAttribute(e))).filter((e => !!e && t.includes(e)));
            if (i.length && i) {
                const e = n.getAttribute("content");
                if (e) return e
            }
        }
        return ""
    }
    const n = function() {
        let t = r("name", "og:site_name", "og:title", "twitter:title");
        return t || (t = e.title), t
    }();
    return {
        description: r("description", "og:description", "twitter:description", "keywords"),
        url: t.origin,
        icons: function() {
            const r = e.getElementsByTagName("link"),
                n = [];
            for (let e = 0; e < r.length; e++) {
                const i = r[e],
                    s = i.getAttribute("rel");
                if (s && s.toLowerCase().indexOf("icon") > -1) {
                    const e = i.getAttribute("href");
                    if (e)
                        if (-1 === e.toLowerCase().indexOf("https:") && -1 === e.toLowerCase().indexOf("http:") && 0 !== e.indexOf("//")) {
                            let r = t.protocol + "//" + t.host;
                            if (0 === e.indexOf("/")) r += e;
                            else {
                                const n = t.pathname.split("/");
                                n.pop();
                                r += n.join("/") + "/" + e
                            }
                            n.push(r)
                        } else if (0 === e.indexOf("//")) {
                        const r = t.protocol + e;
                        n.push(r)
                    } else n.push(e)
                }
            }
            return n
        }(),
        name: n
    }
};
var G = (e, t) => {
        if ("string" != typeof e || "string" != typeof t) throw new TypeError("Expected the arguments to be of type `string`");
        if ("" === t) return [e];
        const r = e.indexOf(t);
        return -1 === r ? [e] : [e.slice(0, r), e.slice(r + t.length)]
    },
    J = function(e, t) {
        for (var r = {}, n = Object.keys(e), i = Array.isArray(t), s = 0; s < n.length; s++) {
            var o = n[s],
                a = e[o];
            (i ? -1 !== t.indexOf(o) : t(o, a, e)) && (r[o] = a)
        }
        return r
    };
! function(e) {
    const t = i,
        r = s,
        n = G,
        o = J,
        a = Symbol("encodeFragmentIdentifier");

    function c(e) {
        if ("string" != typeof e || 1 !== e.length) throw new TypeError("arrayFormatSeparator must be single character string")
    }

    function u(e, r) {
        return r.encode ? r.strict ? t(e) : encodeURIComponent(e) : e
    }

    function h(e, t) {
        return t.decode ? r(e) : e
    }

    function l(e) {
        return Array.isArray(e) ? e.sort() : "object" == typeof e ? l(Object.keys(e)).sort(((e, t) => Number(e) - Number(t))).map((t => e[t])) : e
    }

    function p(e) {
        const t = e.indexOf("#");
        return -1 !== t && (e = e.slice(0, t)), e
    }

    function d(e) {
        const t = (e = p(e)).indexOf("?");
        return -1 === t ? "" : e.slice(t + 1)
    }

    function f(e, t) {
        return t.parseNumbers && !Number.isNaN(Number(e)) && "string" == typeof e && "" !== e.trim() ? e = Number(e) : !t.parseBooleans || null === e || "true" !== e.toLowerCase() && "false" !== e.toLowerCase() || (e = "true" === e.toLowerCase()), e
    }

    function g(e, t) {
        c((t = Object.assign({
            decode: !0,
            sort: !0,
            arrayFormat: "none",
            arrayFormatSeparator: ",",
            parseNumbers: !1,
            parseBooleans: !1
        }, t)).arrayFormatSeparator);
        const r = function(e) {
                let t;
                switch (e.arrayFormat) {
                    case "index":
                        return (e, r, n) => {
                            t = /\[(\d*)\]$/.exec(e), e = e.replace(/\[\d*\]$/, ""), t ? (void 0 === n[e] && (n[e] = {}), n[e][t[1]] = r) : n[e] = r
                        };
                    case "bracket":
                        return (e, r, n) => {
                            t = /(\[\])$/.exec(e), e = e.replace(/\[\]$/, ""), t ? void 0 !== n[e] ? n[e] = [].concat(n[e], r) : n[e] = [r] : n[e] = r
                        };
                    case "colon-list-separator":
                        return (e, r, n) => {
                            t = /(:list)$/.exec(e), e = e.replace(/:list$/, ""), t ? void 0 !== n[e] ? n[e] = [].concat(n[e], r) : n[e] = [r] : n[e] = r
                        };
                    case "comma":
                    case "separator":
                        return (t, r, n) => {
                            const i = "string" == typeof r && r.includes(e.arrayFormatSeparator),
                                s = "string" == typeof r && !i && h(r, e).includes(e.arrayFormatSeparator);
                            r = s ? h(r, e) : r;
                            const o = i || s ? r.split(e.arrayFormatSeparator).map((t => h(t, e))) : null === r ? r : h(r, e);
                            n[t] = o
                        };
                    case "bracket-separator":
                        return (t, r, n) => {
                            const i = /(\[\])$/.test(t);
                            if (t = t.replace(/\[\]$/, ""), !i) return void(n[t] = r ? h(r, e) : r);
                            const s = null === r ? [] : r.split(e.arrayFormatSeparator).map((t => h(t, e)));
                            void 0 !== n[t] ? n[t] = [].concat(n[t], s) : n[t] = s
                        };
                    default:
                        return (e, t, r) => {
                            void 0 !== r[e] ? r[e] = [].concat(r[e], t) : r[e] = t
                        }
                }
            }(t),
            i = Object.create(null);
        if ("string" != typeof e) return i;
        if (!(e = e.trim().replace(/^[?#&]/, ""))) return i;
        for (const s of e.split("&")) {
            if ("" === s) continue;
            let [e, o] = n(t.decode ? s.replace(/\+/g, " ") : s, "=");
            o = void 0 === o ? null : ["comma", "separator", "bracket-separator"].includes(t.arrayFormat) ? o : h(o, t), r(h(e, t), o, i)
        }
        for (const n of Object.keys(i)) {
            const e = i[n];
            if ("object" == typeof e && null !== e)
                for (const r of Object.keys(e)) e[r] = f(e[r], t);
            else i[n] = f(e, t)
        }
        return !1 === t.sort ? i : (!0 === t.sort ? Object.keys(i).sort() : Object.keys(i).sort(t.sort)).reduce(((e, t) => {
            const r = i[t];
            return Boolean(r) && "object" == typeof r && !Array.isArray(r) ? e[t] = l(r) : e[t] = r, e
        }), Object.create(null))
    }
    e.extract = d, e.parse = g, e.stringify = (e, t) => {
        if (!e) return "";
        c((t = Object.assign({
            encode: !0,
            strict: !0,
            arrayFormat: "none",
            arrayFormatSeparator: ","
        }, t)).arrayFormatSeparator);
        const r = r => t.skipNull && null == e[r] || t.skipEmptyString && "" === e[r],
            n = function(e) {
                switch (e.arrayFormat) {
                    case "index":
                        return t => (r, n) => {
                            const i = r.length;
                            return void 0 === n || e.skipNull && null === n || e.skipEmptyString && "" === n ? r : null === n ? [...r, [u(t, e), "[", i, "]"].join("")] : [...r, [u(t, e), "[", u(i, e), "]=", u(n, e)].join("")]
                        };
                    case "bracket":
                        return t => (r, n) => void 0 === n || e.skipNull && null === n || e.skipEmptyString && "" === n ? r : null === n ? [...r, [u(t, e), "[]"].join("")] : [...r, [u(t, e), "[]=", u(n, e)].join("")];
                    case "colon-list-separator":
                        return t => (r, n) => void 0 === n || e.skipNull && null === n || e.skipEmptyString && "" === n ? r : null === n ? [...r, [u(t, e), ":list="].join("")] : [...r, [u(t, e), ":list=", u(n, e)].join("")];
                    case "comma":
                    case "separator":
                    case "bracket-separator":
                        {
                            const t = "bracket-separator" === e.arrayFormat ? "[]=" : "=";
                            return r => (n, i) => void 0 === i || e.skipNull && null === i || e.skipEmptyString && "" === i ? n : (i = null === i ? "" : i, 0 === n.length ? [
                                [u(r, e), t, u(i, e)].join("")
                            ] : [
                                [n, u(i, e)].join(e.arrayFormatSeparator)
                            ])
                        }
                    default:
                        return t => (r, n) => void 0 === n || e.skipNull && null === n || e.skipEmptyString && "" === n ? r : null === n ? [...r, u(t, e)] : [...r, [u(t, e), "=", u(n, e)].join("")]
                }
            }(t),
            i = {};
        for (const o of Object.keys(e)) r(o) || (i[o] = e[o]);
        const s = Object.keys(i);
        return !1 !== t.sort && s.sort(t.sort), s.map((r => {
            const i = e[r];
            return void 0 === i ? "" : null === i ? u(r, t) : Array.isArray(i) ? 0 === i.length && "bracket-separator" === t.arrayFormat ? u(r, t) + "[]" : i.reduce(n(r), []).join("&") : u(r, t) + "=" + u(i, t)
        })).filter((e => e.length > 0)).join("&")
    }, e.parseUrl = (e, t) => {
        t = Object.assign({
            decode: !0
        }, t);
        const [r, i] = n(e, "#");
        return Object.assign({
            url: r.split("?")[0] || "",
            query: g(d(e), t)
        }, t && t.parseFragmentIdentifier && i ? {
            fragmentIdentifier: h(i, t)
        } : {})
    }, e.stringifyUrl = (t, r) => {
        r = Object.assign({
            encode: !0,
            strict: !0,
            [a]: !0
        }, r);
        const n = p(t.url).split("?")[0] || "",
            i = e.extract(t.url),
            s = e.parse(i, {
                sort: !1
            }),
            o = Object.assign(s, t.query);
        let c = e.stringify(o, r);
        c && (c = `?${c}`);
        let h = function(e) {
            let t = "";
            const r = e.indexOf("#");
            return -1 !== r && (t = e.slice(r)), t
        }(t.url);
        return t.fragmentIdentifier && (h = `#${r[a]?u(t.fragmentIdentifier,r):t.fragmentIdentifier}`), `${n}${c}${h}`
    }, e.pick = (t, r, n) => {
        n = Object.assign({
            parseFragmentIdentifier: !0,
            [a]: !1
        }, n);
        const {
            url: i,
            query: s,
            fragmentIdentifier: c
        } = e.parseUrl(t, n);
        return e.stringifyUrl({
            url: i,
            query: o(s, r),
            fragmentIdentifier: c
        }, n)
    }, e.exclude = (t, r, n) => {
        const i = Array.isArray(r) ? e => !r.includes(e) : (e, t) => !r(e, t);
        return e.pick(t, i, n)
    }
}({});
const Q = {
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
};

function Y(e, t) {
    return !!Array.isArray(e)
}
var Z = {},
    X = {},
    ee = {},
    te = {};
const re = e(Object.freeze(Object.defineProperty({
    __proto__: null,
    IEvents: o
}, Symbol.toStringTag, {
    value: "Module"
})));
var ne, ie;

function se() {
    return ie || (ie = 1, function(e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        a.__exportStar(function() {
            if (ne) return te;
            ne = 1, Object.defineProperty(te, "__esModule", {
                value: !0
            }), te.IHeartBeat = void 0;
            const e = re;
            class t extends e.IEvents {
                constructor(e) {
                    super()
                }
            }
            return te.IHeartBeat = t, te
        }(), e)
    }(ee)), ee
}
var oe, ae, ce, ue = {},
    he = {};

function le() {
    return ae || (ae = 1, function(e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        a.__exportStar(function() {
            if (oe) return he;
            oe = 1, Object.defineProperty(he, "__esModule", {
                value: !0
            }), he.HEARTBEAT_EVENTS = he.HEARTBEAT_INTERVAL = void 0;
            const e = c;
            return he.HEARTBEAT_INTERVAL = e.FIVE_SECONDS, he.HEARTBEAT_EVENTS = {
                pulse: "heartbeat_pulse"
            }, he
        }(), e)
    }(ue)), ue
}! function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    const t = a;
    t.__exportStar(function() {
        if (ce) return X;
        ce = 1, Object.defineProperty(X, "__esModule", {
            value: !0
        }), X.HeartBeat = void 0;
        const e = a,
            t = r,
            n = c,
            i = se(),
            s = le();
        class o extends i.IHeartBeat {
            constructor(e) {
                super(e), this.events = new t.EventEmitter, this.interval = s.HEARTBEAT_INTERVAL, this.interval = (null == e ? void 0 : e.interval) || s.HEARTBEAT_INTERVAL
            }
            static init(t) {
                return e.__awaiter(this, void 0, void 0, (function*() {
                    const e = new o(t);
                    return yield e.init(), e
                }))
            }
            init() {
                return e.__awaiter(this, void 0, void 0, (function*() {
                    yield this.initialize()
                }))
            }
            stop() {
                clearInterval(this.intervalRef)
            }
            on(e, t) {
                this.events.on(e, t)
            }
            once(e, t) {
                this.events.once(e, t)
            }
            off(e, t) {
                this.events.off(e, t)
            }
            removeListener(e, t) {
                this.events.removeListener(e, t)
            }
            initialize() {
                return e.__awaiter(this, void 0, void 0, (function*() {
                    this.intervalRef = setInterval((() => this.pulse()), n.toMiliseconds(this.interval))
                }))
            }
            pulse() {
                this.events.emit(s.HEARTBEAT_EVENTS.pulse)
            }
        }
        return X.HeartBeat = o, X
    }(), e), t.__exportStar(se(), e), t.__exportStar(le(), e)
}(Z);
class pe extends o {
    constructor(e) {
        super(), this.opts = e, this.protocol = "wc", this.version = 2
    }
}
class de extends o {
    constructor(e, t) {
        super(), this.core = e, this.logger = t, this.records = new Map
    }
}
class fe {
    constructor(e, t) {
        this.logger = e, this.core = t
    }
}
let ge = class extends o {
        constructor(e, t) {
            super(), this.relayer = e, this.logger = t
        }
    },
    ye = class extends o {
        constructor(e) {
            super()
        }
    },
    me = class {
        constructor(e, t, r, n) {
            this.core = e, this.logger = t, this.name = r
        }
    };
class ve extends o {
    constructor(e, t) {
        super(), this.relayer = e, this.logger = t
    }
}
let we = class extends o {
        constructor(e, t) {
            super(), this.core = e, this.logger = t
        }
    },
    be = class {
        constructor(e, t) {
            this.projectId = e, this.logger = t
        }
    },
    _e = class {
        constructor(e) {
            this.opts = e, this.protocol = "wc", this.version = 2
        }
    },
    Ee = class {
        constructor(e) {
            this.client = e
        }
    };
var Ie = function(e, t, r) {
        if (r || 2 === arguments.length)
            for (var n, i = 0, s = t.length; i < s; i++) !n && i in t || (n || (n = Array.prototype.slice.call(t, 0, i)), n[i] = t[i]);
        return e.concat(n || Array.prototype.slice.call(t))
    },
    Se = function() {
        return function(e, t, r) {
            this.name = e, this.version = t, this.os = r, this.type = "browser"
        }
    }(),
    Pe = function() {
        return function(e) {
            this.version = e, this.type = "node", this.name = "node", this.os = process.platform
        }
    }(),
    Oe = function() {
        return function(e, t, r, n) {
            this.name = e, this.version = t, this.os = r, this.bot = n, this.type = "bot-device"
        }
    }(),
    Ne = function() {
        return function() {
            this.type = "bot", this.bot = !0, this.name = "bot", this.version = null, this.os = null
        }
    }(),
    Re = function() {
        return function() {
            this.type = "react-native", this.name = "react-native", this.version = null, this.os = null
        }
    }(),
    Te = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,
    xe = [
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
    Ce = [
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

function Ae(e) {
    return "undefined" == typeof document && "undefined" != typeof navigator && "ReactNative" === navigator.product ? new Re : "undefined" != typeof navigator ? function(e) {
        var t = function(e) {
            return "" !== e && xe.reduce((function(t, r) {
                var n = r[0],
                    i = r[1];
                if (t) return t;
                var s = i.exec(e);
                return !!s && [n, s]
            }), !1)
        }(e);
        if (!t) return null;
        var r = t[0],
            n = t[1];
        if ("searchbot" === r) return new Ne;
        var i = n[1] && n[1].split(".").join("_").split("_").slice(0, 3);
        i ? i.length < 3 && (i = Ie(Ie([], i, !0), function(e) {
            for (var t = [], r = 0; r < e; r++) t.push("0");
            return t
        }(3 - i.length), !0)) : i = [];
        var s = i.join("."),
            o = function(e) {
                for (var t = 0, r = Ce.length; t < r; t++) {
                    var n = Ce[t],
                        i = n[0];
                    if (n[1].exec(e)) return i
                }
                return null
            }(e),
            a = Te.exec(e);
        if (a && a[1]) return new Oe(r, s, o, a[1]);
        return new Se(r, s, o)
    }(navigator.userAgent) : "undefined" != typeof process && process.version ? new Pe(process.version.slice(1)) : null
}
var je = {};

function De(e) {
    let t;
    return "undefined" != typeof window && void 0 !== window[e] && (t = window[e]), t
}

function Ue(e) {
    const t = De(e);
    if (!t) throw new Error(`${e} is not defined in Window`);
    return t
}
Object.defineProperty(je, "__esModule", {
    value: !0
}), je.getLocalStorage = je.getLocalStorageOrThrow = je.getCrypto = je.getCryptoOrThrow = qe = je.getLocation = je.getLocationOrThrow = $e = je.getNavigator = je.getNavigatorOrThrow = ke = je.getDocument = je.getDocumentOrThrow = je.getFromWindowOrThrow = je.getFromWindow = void 0, je.getFromWindow = De, je.getFromWindowOrThrow = Ue, je.getDocumentOrThrow = function() {
    return Ue("document")
};
var ke = je.getDocument = function() {
    return De("document")
};
je.getNavigatorOrThrow = function() {
    return Ue("navigator")
};
var $e = je.getNavigator = function() {
    return De("navigator")
};
je.getLocationOrThrow = function() {
    return Ue("location")
};
var qe = je.getLocation = function() {
    return De("location")
};
je.getCryptoOrThrow = function() {
    return Ue("crypto")
}, je.getCrypto = function() {
    return De("crypto")
}, je.getLocalStorageOrThrow = function() {
    return Ue("localStorage")
}, je.getLocalStorage = function() {
    return De("localStorage")
};
var Me = {};
Object.defineProperty(Me, "__esModule", {
    value: !0
});
var Le = Me.getWindowMetadata = void 0;
const ze = je;
Le = Me.getWindowMetadata = function() {
    let e, t;
    try {
        e = ze.getDocumentOrThrow(), t = ze.getLocationOrThrow()
    } catch (i) {
        return null
    }

    function r(...t) {
        const r = e.getElementsByTagName("meta");
        for (let e = 0; e < r.length; e++) {
            const n = r[e],
                i = ["itemprop", "property", "name"].map((e => n.getAttribute(e))).filter((e => !!e && t.includes(e)));
            if (i.length && i) {
                const e = n.getAttribute("content");
                if (e) return e
            }
        }
        return ""
    }
    const n = function() {
        let t = r("name", "og:site_name", "og:title", "twitter:title");
        return t || (t = e.title), t
    }();
    return {
        description: r("description", "og:description", "twitter:description", "keywords"),
        url: t.origin,
        icons: function() {
            const r = e.getElementsByTagName("link"),
                n = [];
            for (let e = 0; e < r.length; e++) {
                const i = r[e],
                    s = i.getAttribute("rel");
                if (s && s.toLowerCase().indexOf("icon") > -1) {
                    const e = i.getAttribute("href");
                    if (e)
                        if (-1 === e.toLowerCase().indexOf("https:") && -1 === e.toLowerCase().indexOf("http:") && 0 !== e.indexOf("//")) {
                            let r = t.protocol + "//" + t.host;
                            if (0 === e.indexOf("/")) r += e;
                            else {
                                const n = t.pathname.split("/");
                                n.pop();
                                r += n.join("/") + "/" + e
                            }
                            n.push(r)
                        } else if (0 === e.indexOf("//")) {
                        const r = t.protocol + e;
                        n.push(r)
                    } else n.push(e)
                }
            }
            return n
        }(),
        name: n
    }
};
var Ve = {},
    Ke = (e, t) => {
        if ("string" != typeof e || "string" != typeof t) throw new TypeError("Expected the arguments to be of type `string`");
        if ("" === t) return [e];
        const r = e.indexOf(t);
        return -1 === r ? [e] : [e.slice(0, r), e.slice(r + t.length)]
    },
    He = function(e, t) {
        for (var r = {}, n = Object.keys(e), i = Array.isArray(t), s = 0; s < n.length; s++) {
            var o = n[s],
                a = e[o];
            (i ? -1 !== t.indexOf(o) : t(o, a, e)) && (r[o] = a)
        }
        return r
    };

function We(e, t) {
    return e.includes(":") ? [e] : t.chains || []
}! function(e) {
    const t = i,
        r = s,
        n = Ke,
        o = He,
        a = Symbol("encodeFragmentIdentifier");

    function c(e) {
        if ("string" != typeof e || 1 !== e.length) throw new TypeError("arrayFormatSeparator must be single character string")
    }

    function u(e, r) {
        return r.encode ? r.strict ? t(e) : encodeURIComponent(e) : e
    }

    function h(e, t) {
        return t.decode ? r(e) : e
    }

    function l(e) {
        return Array.isArray(e) ? e.sort() : "object" == typeof e ? l(Object.keys(e)).sort(((e, t) => Number(e) - Number(t))).map((t => e[t])) : e
    }

    function p(e) {
        const t = e.indexOf("#");
        return -1 !== t && (e = e.slice(0, t)), e
    }

    function d(e) {
        const t = (e = p(e)).indexOf("?");
        return -1 === t ? "" : e.slice(t + 1)
    }

    function f(e, t) {
        return t.parseNumbers && !Number.isNaN(Number(e)) && "string" == typeof e && "" !== e.trim() ? e = Number(e) : !t.parseBooleans || null === e || "true" !== e.toLowerCase() && "false" !== e.toLowerCase() || (e = "true" === e.toLowerCase()), e
    }

    function g(e, t) {
        c((t = Object.assign({
            decode: !0,
            sort: !0,
            arrayFormat: "none",
            arrayFormatSeparator: ",",
            parseNumbers: !1,
            parseBooleans: !1
        }, t)).arrayFormatSeparator);
        const r = function(e) {
                let t;
                switch (e.arrayFormat) {
                    case "index":
                        return (e, r, n) => {
                            t = /\[(\d*)\]$/.exec(e), e = e.replace(/\[\d*\]$/, ""), t ? (void 0 === n[e] && (n[e] = {}), n[e][t[1]] = r) : n[e] = r
                        };
                    case "bracket":
                        return (e, r, n) => {
                            t = /(\[\])$/.exec(e), e = e.replace(/\[\]$/, ""), t ? void 0 !== n[e] ? n[e] = [].concat(n[e], r) : n[e] = [r] : n[e] = r
                        };
                    case "colon-list-separator":
                        return (e, r, n) => {
                            t = /(:list)$/.exec(e), e = e.replace(/:list$/, ""), t ? void 0 !== n[e] ? n[e] = [].concat(n[e], r) : n[e] = [r] : n[e] = r
                        };
                    case "comma":
                    case "separator":
                        return (t, r, n) => {
                            const i = "string" == typeof r && r.includes(e.arrayFormatSeparator),
                                s = "string" == typeof r && !i && h(r, e).includes(e.arrayFormatSeparator);
                            r = s ? h(r, e) : r;
                            const o = i || s ? r.split(e.arrayFormatSeparator).map((t => h(t, e))) : null === r ? r : h(r, e);
                            n[t] = o
                        };
                    case "bracket-separator":
                        return (t, r, n) => {
                            const i = /(\[\])$/.test(t);
                            if (t = t.replace(/\[\]$/, ""), !i) return void(n[t] = r ? h(r, e) : r);
                            const s = null === r ? [] : r.split(e.arrayFormatSeparator).map((t => h(t, e)));
                            void 0 !== n[t] ? n[t] = [].concat(n[t], s) : n[t] = s
                        };
                    default:
                        return (e, t, r) => {
                            void 0 !== r[e] ? r[e] = [].concat(r[e], t) : r[e] = t
                        }
                }
            }(t),
            i = Object.create(null);
        if ("string" != typeof e) return i;
        if (!(e = e.trim().replace(/^[?#&]/, ""))) return i;
        for (const s of e.split("&")) {
            if ("" === s) continue;
            let [e, o] = n(t.decode ? s.replace(/\+/g, " ") : s, "=");
            o = void 0 === o ? null : ["comma", "separator", "bracket-separator"].includes(t.arrayFormat) ? o : h(o, t), r(h(e, t), o, i)
        }
        for (const n of Object.keys(i)) {
            const e = i[n];
            if ("object" == typeof e && null !== e)
                for (const r of Object.keys(e)) e[r] = f(e[r], t);
            else i[n] = f(e, t)
        }
        return !1 === t.sort ? i : (!0 === t.sort ? Object.keys(i).sort() : Object.keys(i).sort(t.sort)).reduce(((e, t) => {
            const r = i[t];
            return Boolean(r) && "object" == typeof r && !Array.isArray(r) ? e[t] = l(r) : e[t] = r, e
        }), Object.create(null))
    }
    e.extract = d, e.parse = g, e.stringify = (e, t) => {
        if (!e) return "";
        c((t = Object.assign({
            encode: !0,
            strict: !0,
            arrayFormat: "none",
            arrayFormatSeparator: ","
        }, t)).arrayFormatSeparator);
        const r = r => t.skipNull && null == e[r] || t.skipEmptyString && "" === e[r],
            n = function(e) {
                switch (e.arrayFormat) {
                    case "index":
                        return t => (r, n) => {
                            const i = r.length;
                            return void 0 === n || e.skipNull && null === n || e.skipEmptyString && "" === n ? r : null === n ? [...r, [u(t, e), "[", i, "]"].join("")] : [...r, [u(t, e), "[", u(i, e), "]=", u(n, e)].join("")]
                        };
                    case "bracket":
                        return t => (r, n) => void 0 === n || e.skipNull && null === n || e.skipEmptyString && "" === n ? r : null === n ? [...r, [u(t, e), "[]"].join("")] : [...r, [u(t, e), "[]=", u(n, e)].join("")];
                    case "colon-list-separator":
                        return t => (r, n) => void 0 === n || e.skipNull && null === n || e.skipEmptyString && "" === n ? r : null === n ? [...r, [u(t, e), ":list="].join("")] : [...r, [u(t, e), ":list=", u(n, e)].join("")];
                    case "comma":
                    case "separator":
                    case "bracket-separator":
                        {
                            const t = "bracket-separator" === e.arrayFormat ? "[]=" : "=";
                            return r => (n, i) => void 0 === i || e.skipNull && null === i || e.skipEmptyString && "" === i ? n : (i = null === i ? "" : i, 0 === n.length ? [
                                [u(r, e), t, u(i, e)].join("")
                            ] : [
                                [n, u(i, e)].join(e.arrayFormatSeparator)
                            ])
                        }
                    default:
                        return t => (r, n) => void 0 === n || e.skipNull && null === n || e.skipEmptyString && "" === n ? r : null === n ? [...r, u(t, e)] : [...r, [u(t, e), "=", u(n, e)].join("")]
                }
            }(t),
            i = {};
        for (const o of Object.keys(e)) r(o) || (i[o] = e[o]);
        const s = Object.keys(i);
        return !1 !== t.sort && s.sort(t.sort), s.map((r => {
            const i = e[r];
            return void 0 === i ? "" : null === i ? u(r, t) : Array.isArray(i) ? 0 === i.length && "bracket-separator" === t.arrayFormat ? u(r, t) + "[]" : i.reduce(n(r), []).join("&") : u(r, t) + "=" + u(i, t)
        })).filter((e => e.length > 0)).join("&")
    }, e.parseUrl = (e, t) => {
        t = Object.assign({
            decode: !0
        }, t);
        const [r, i] = n(e, "#");
        return Object.assign({
            url: r.split("?")[0] || "",
            query: g(d(e), t)
        }, t && t.parseFragmentIdentifier && i ? {
            fragmentIdentifier: h(i, t)
        } : {})
    }, e.stringifyUrl = (t, r) => {
        r = Object.assign({
            encode: !0,
            strict: !0,
            [a]: !0
        }, r);
        const n = p(t.url).split("?")[0] || "",
            i = e.extract(t.url),
            s = e.parse(i, {
                sort: !1
            }),
            o = Object.assign(s, t.query);
        let c = e.stringify(o, r);
        c && (c = `?${c}`);
        let h = function(e) {
            let t = "";
            const r = e.indexOf("#");
            return -1 !== r && (t = e.slice(r)), t
        }(t.url);
        return t.fragmentIdentifier && (h = `#${r[a]?u(t.fragmentIdentifier,r):t.fragmentIdentifier}`), `${n}${c}${h}`
    }, e.pick = (t, r, n) => {
        n = Object.assign({
            parseFragmentIdentifier: !0,
            [a]: !1
        }, n);
        const {
            url: i,
            query: s,
            fragmentIdentifier: c
        } = e.parseUrl(t, n);
        return e.stringifyUrl({
            url: i,
            query: o(s, r),
            fragmentIdentifier: c
        }, n)
    }, e.exclude = (t, r, n) => {
        const i = Array.isArray(r) ? e => !r.includes(e) : (e, t) => !r(e, t);
        return e.pick(t, i, n)
    }
}(Ve);
const Fe = "base10",
    Be = "base16",
    Ge = "base64pad",
    Je = "utf8";

function Qe() {
    const e = d.randomBytes(32);
    return l(e, Be)
}

function Ye(e) {
    const t = u.hash(h(e, Je));
    return l(t, Be)
}

function Ze(e) {
    return Number(l(e, Fe))
}

function Xe(e) {
    const t = function(e) {
        return h(`${e}`, Fe)
    }(typeof e.type < "u" ? e.type : 0);
    if (1 === Ze(t) && typeof e.senderPublicKey > "u") throw new Error("Missing sender public key for type 1 envelope");
    const r = typeof e.senderPublicKey < "u" ? h(e.senderPublicKey, Be) : void 0,
        n = typeof e.iv < "u" ? h(e.iv, Be) : d.randomBytes(12);
    return function(e) {
        if (1 === Ze(e.type)) {
            if (typeof e.senderPublicKey > "u") throw new Error("Missing sender public key for type 1 envelope");
            return l(y([e.type, e.senderPublicKey, e.iv, e.sealed]), Ge)
        }
        return l(y([e.type, e.iv, e.sealed]), Ge)
    }({
        type: t,
        sealed: new g.ChaCha20Poly1305(h(e.symKey, Be)).seal(n, h(e.message, Je)),
        iv: n,
        senderPublicKey: r
    })
}

function et(e) {
    const t = h(e, Ge),
        r = t.slice(0, 1);
    if (1 === Ze(r)) {
        const e = 33,
            n = e + 12,
            i = t.slice(1, e),
            s = t.slice(e, n);
        return {
            type: r,
            sealed: t.slice(n),
            iv: s,
            senderPublicKey: i
        }
    }
    const n = t.slice(1, 13);
    return {
        type: r,
        sealed: t.slice(13),
        iv: n
    }
}

function tt(e) {
    const t = (null == e ? void 0 : e.type) || 0;
    if (1 === t) {
        if (typeof(null == e ? void 0 : e.senderPublicKey) > "u") throw new Error("missing sender public key");
        if (typeof(null == e ? void 0 : e.receiverPublicKey) > "u") throw new Error("missing receiver public key")
    }
    return {
        type: t,
        senderPublicKey: null == e ? void 0 : e.senderPublicKey,
        receiverPublicKey: null == e ? void 0 : e.receiverPublicKey
    }
}

function rt(e) {
    return 1 === e.type && "string" == typeof e.senderPublicKey && "string" == typeof e.receiverPublicKey
}
var nt = Object.defineProperty,
    it = Object.getOwnPropertySymbols,
    st = Object.prototype.hasOwnProperty,
    ot = Object.prototype.propertyIsEnumerable,
    at = (e, t, r) => t in e ? nt(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : e[t] = r,
    ct = (e, t) => {
        for (var r in t || (t = {})) st.call(t, r) && at(e, r, t[r]);
        if (it)
            for (var r of it(t)) ot.call(t, r) && at(e, r, t[r]);
        return e
    };
const ut = "react-native",
    ht = "node",
    lt = "browser",
    pt = "unknown",
    dt = "js";

function ft() {
    return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u"
}

function gt() {
    return !ke() && !!$e() && "ReactNative" === navigator.product
}

function yt() {
    return !ft() && !!$e()
}

function mt() {
    return gt() ? ut : ft() ? ht : yt() ? lt : pt
}

function vt(e, t, r) {
    const n = function() {
            if (mt() === ut && typeof global < "u" && typeof(null == global ? void 0 : global.Platform) < "u") {
                const {
                    OS: e,
                    Version: t
                } = global.Platform;
                return [e, t].join("-")
            }
            const e = Ae();
            if (null === e) return "unknown";
            const t = e.os ? e.os.replace(" ", "").toLowerCase() : "unknown";
            return "browser" === e.type ? [t, e.name, e.version].join("-") : [t, e.version].join("-")
        }(),
        i = function() {
            var e;
            const t = mt();
            return t === lt ? [t, (null == (e = qe()) ? void 0 : e.host) || "unknown"].join(":") : t
        }();
    return [
        [e, t].join("-"), [dt, r].join("-"), n, i
    ].join("/")
}

function wt({
    protocol: e,
    version: t,
    relayUrl: r,
    sdkVersion: n,
    auth: i,
    projectId: s,
    useOnCloseEvent: o
}) {
    const a = r.split("?"),
        c = {
            auth: i,
            ua: vt(e, t, n),
            projectId: s,
            useOnCloseEvent: o || void 0
        },
        u = function(e, t) {
            let r = Ve.parse(e);
            return r = ct(ct({}, r), t), Ve.stringify(r)
        }(a[1] || "", c);
    return a[0] + "?" + u
}

function bt(e, t) {
    return e.filter((e => t.includes(e))).length === e.length
}

function _t(e) {
    return Object.fromEntries(e.entries())
}

function Et(e) {
    return new Map(Object.entries(e))
}

function It(e = c.FIVE_MINUTES, t) {
    const r = c.toMiliseconds(e || c.FIVE_MINUTES);
    let n, i, s;
    return {
        resolve: e => {
            s && n && (clearTimeout(s), n(e))
        },
        reject: e => {
            s && i && (clearTimeout(s), i(e))
        },
        done: () => new Promise(((e, o) => {
            s = setTimeout((() => {
                o(new Error(t))
            }), r), n = e, i = o
        }))
    }
}

function St(e, t, r) {
    return new Promise((async (n, i) => {
        const s = setTimeout((() => i(new Error(r))), t);
        try {
            n(await e)
        } catch (o) {
            i(o)
        }
        clearTimeout(s)
    }))
}

function Pt(e, t) {
    if ("string" == typeof t && t.startsWith(`${e}:`)) return t;
    if ("topic" === e.toLowerCase()) {
        if ("string" != typeof t) throw new Error('Value must be "string" for expirer target type: topic');
        return `topic:${t}`
    }
    if ("id" === e.toLowerCase()) {
        if ("number" != typeof t) throw new Error('Value must be "number" for expirer target type: id');
        return `id:${t}`
    }
    throw new Error(`Unknown expirer target type: ${e}`)
}

function Ot(e) {
    const [t, r] = e.split(":"), n = {
        id: void 0,
        topic: void 0
    };
    if ("topic" === t && "string" == typeof r) n.topic = r;
    else {
        if ("id" !== t || !Number.isInteger(Number(r))) throw new Error(`Invalid target, expected id:number or topic:string, got ${t}:${r}`);
        n.id = Number(r)
    }
    return n
}

function Nt(e, t) {
    return c.fromMiliseconds(Date.now() + c.toMiliseconds(e))
}

function Rt(e) {
    return Date.now() >= c.toMiliseconds(e)
}

function Tt(e, t) {
    return `${e}${t?`:${t}`:""}`
}

function xt(e) {
    return (null == e ? void 0 : e.relay) || {
        protocol: "irn"
    }
}

function Ct(e) {
    const t = m[e];
    if (typeof t > "u") throw new Error(`Relay Protocol not supported: ${e}`);
    return t
}
var At = Object.defineProperty,
    jt = Object.getOwnPropertySymbols,
    Dt = Object.prototype.hasOwnProperty,
    Ut = Object.prototype.propertyIsEnumerable,
    kt = (e, t, r) => t in e ? At(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : e[t] = r;

function $t(e, t = "-") {
    const r = {},
        n = "relay" + t;
    return Object.keys(e).forEach((t => {
        if (t.startsWith(n)) {
            const i = t.replace(n, ""),
                s = e[t];
            r[i] = s
        }
    })), r
}

function qt(e) {
    return e.startsWith("//") ? e.substring(2) : e
}

function Mt(e) {
    return `${e.protocol}:${e.topic}@${e.version}?` + Ve.stringify(((e, t) => {
        for (var r in t || (t = {})) Dt.call(t, r) && kt(e, r, t[r]);
        if (jt)
            for (var r of jt(t)) Ut.call(t, r) && kt(e, r, t[r]);
        return e
    })({
        symKey: e.symKey
    }, function(e, t = "-") {
        const r = {};
        return Object.keys(e).forEach((n => {
            const i = "relay" + t + n;
            e[n] && (r[i] = e[n])
        })), r
    }(e.relay)))
}

function Lt(e) {
    const t = [];
    return e.forEach((e => {
        const [r, n] = e.split(":");
        t.push(`${r}:${n}`)
    })), t
}
const zt = {
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
    Vt = {
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

function Kt(e, t) {
    const {
        message: r,
        code: n
    } = Vt[e];
    return {
        message: t ? `${r} ${t}` : r,
        code: n
    }
}

function Ht(e, t) {
    const {
        message: r,
        code: n
    } = zt[e];
    return {
        message: t ? `${r} ${t}` : r,
        code: n
    }
}

function Wt(e, t) {
    return !!Array.isArray(e)
}

function Ft(e) {
    return Object.getPrototypeOf(e) === Object.prototype && Object.keys(e).length
}

function Bt(e) {
    return typeof e > "u"
}

function Gt(e, t) {
    return !(!t || !Bt(e)) || "string" == typeof e && !!e.trim().length
}

function Jt(e, t) {
    return "number" == typeof e && !isNaN(e)
}

function Qt(e) {
    return !(!Gt(e, !1) || !e.includes(":")) && 2 === e.split(":").length
}

function Yt(e) {
    let t = !0;
    return Wt(e) ? e.length && (t = e.every((e => Gt(e, !1)))) : t = !1, t
}

function Zt(e, t, r) {
    let n = null;
    return Object.entries(e).forEach((([e, i]) => {
        if (n) return;
        const s = function(e, t, r) {
            let n = null;
            return Wt(t) && t.length ? t.forEach((e => {
                n || Qt(e) || (n = Ht("UNSUPPORTED_CHAINS", `${r}, chain ${e} should be a string and conform to "namespace:chainId" format`))
            })) : Qt(e) || (n = Ht("UNSUPPORTED_CHAINS", `${r}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)), n
        }(e, We(e, i), `${t} ${r}`);
        s && (n = s)
    })), n
}

function Xt(e, t) {
    let r = null;
    return Wt(e) ? e.forEach((e => {
        r || function(e) {
            if (Gt(e, !1) && e.includes(":")) {
                const t = e.split(":");
                if (3 === t.length) {
                    const e = t[0] + ":" + t[1];
                    return !!t[2] && Qt(e)
                }
            }
            return !1
        }(e) || (r = Ht("UNSUPPORTED_ACCOUNTS", `${t}, account ${e} should be a string and conform to "namespace:chainId:address" format`))
    })) : r = Ht("UNSUPPORTED_ACCOUNTS", `${t}, accounts should be an array of strings conforming to "namespace:chainId:address" format`), r
}

function er(e, t) {
    let r = null;
    return Object.values(e).forEach((e => {
        if (r) return;
        const n = function(e, t) {
            let r = null;
            return Yt(null == e ? void 0 : e.methods) ? Yt(null == e ? void 0 : e.events) || (r = Ht("UNSUPPORTED_EVENTS", `${t}, events should be an array of strings or empty array for no events`)) : r = Ht("UNSUPPORTED_METHODS", `${t}, methods should be an array of strings or empty array for no methods`), r
        }(e, `${t}, namespace`);
        n && (r = n)
    })), r
}

function tr(e, t) {
    let r = null;
    if (e && Ft(e)) {
        const n = er(e, t);
        n && (r = n);
        const i = function(e, t) {
            let r = null;
            return Object.values(e).forEach((e => {
                if (r) return;
                const n = Xt(null == e ? void 0 : e.accounts, `${t} namespace`);
                n && (r = n)
            })), r
        }(e, t);
        i && (r = i)
    } else r = Kt("MISSING_OR_INVALID", `${t}, namespaces should be an object with data`);
    return r
}

function rr(e) {
    return Gt(e.protocol, !0)
}

function nr(e) {
    return typeof e < "u" && null !== typeof e
}

function ir(e, t) {
    return !(!Qt(t) || ! function(e) {
        const t = [];
        return Object.values(e).forEach((e => {
            t.push(...Lt(e.accounts))
        })), t
    }(e).includes(t))
}

function sr(e, t, r) {
    return !!Gt(r, !1) && function(e, t) {
        const r = [];
        return Object.values(e).forEach((e => {
            Lt(e.accounts).includes(t) && r.push(...e.methods)
        })), r
    }(e, t).includes(r)
}

function or(e, t, r) {
    return !!Gt(r, !1) && function(e, t) {
        const r = [];
        return Object.values(e).forEach((e => {
            Lt(e.accounts).includes(t) && r.push(...e.events)
        })), r
    }(e, t).includes(r)
}

function ar(e, t, r) {
    let n = null;
    const i = function(e) {
            const t = {};
            return Object.keys(e).forEach((r => {
                var n;
                r.includes(":") ? t[r] = e[r] : null == (n = e[r].chains) || n.forEach((n => {
                    t[n] = {
                        methods: e[r].methods,
                        events: e[r].events
                    }
                }))
            })), t
        }(e),
        s = function(e) {
            const t = {};
            return Object.keys(e).forEach((r => {
                if (r.includes(":")) t[r] = e[r];
                else {
                    const n = Lt(e[r].accounts);
                    null == n || n.forEach((n => {
                        t[n] = {
                            accounts: e[r].accounts.filter((e => e.includes(`${n}:`))),
                            methods: e[r].methods,
                            events: e[r].events
                        }
                    }))
                }
            })), t
        }(t),
        o = Object.keys(i),
        a = Object.keys(s),
        c = cr(Object.keys(e)),
        u = cr(Object.keys(t)),
        h = c.filter((e => !u.includes(e)));
    return h.length && (n = Kt("NON_CONFORMING_NAMESPACES", `${r} namespaces keys don't satisfy requiredNamespaces.\n      Required: ${h.toString()}\n      Received: ${Object.keys(t).toString()}`)), bt(o, a) || (n = Kt("NON_CONFORMING_NAMESPACES", `${r} namespaces chains don't satisfy required namespaces.\n      Required: ${o.toString()}\n      Approved: ${a.toString()}`)), Object.keys(t).forEach((e => {
        if (!e.includes(":") || n) return;
        const i = Lt(t[e].accounts);
        i.includes(e) || (n = Kt("NON_CONFORMING_NAMESPACES", `${r} namespaces accounts don't satisfy namespace accounts for ${e}\n        Required: ${e}\n        Approved: ${i.toString()}`))
    })), o.forEach((e => {
        n || (bt(i[e].methods, s[e].methods) ? bt(i[e].events, s[e].events) || (n = Kt("NON_CONFORMING_NAMESPACES", `${r} namespaces events don't satisfy namespace events for ${e}`)) : n = Kt("NON_CONFORMING_NAMESPACES", `${r} namespaces methods don't satisfy namespace methods for ${e}`))
    })), n
}

function cr(e) {
    return [...new Set(e.map((e => e.includes(":") ? e.split(":")[0] : e)))]
}
class ur extends v {
    constructor(e) {
        super(e), this.events = new r.EventEmitter, this.hasRegisteredEventListeners = !1, this.connection = this.setConnection(e), this.connection.connected && this.registerEventListeners()
    }
    async connect(e = this.connection) {
        await this.open(e)
    }
    async disconnect() {
        await this.close()
    }
    on(e, t) {
        this.events.on(e, t)
    }
    once(e, t) {
        this.events.once(e, t)
    }
    off(e, t) {
        this.events.off(e, t)
    }
    removeListener(e, t) {
        this.events.removeListener(e, t)
    }
    async request(e, t) {
        return this.requestStrict(w(e.method, e.params || [], e.id || b().toString()), t)
    }
    async requestStrict(e, t) {
        return new Promise((async (r, n) => {
            if (!this.connection.connected) try {
                await this.open()
            } catch (i) {
                n(i)
            }
            this.events.on(`${e.id}`, (e => {
                _(e) ? n(e.error) : r(e.result)
            }));
            try {
                await this.connection.send(e, t)
            } catch (i) {
                n(i)
            }
        }))
    }
    setConnection(e = this.connection) {
        return e
    }
    onPayload(e) {
        this.events.emit("payload", e), E(e) ? this.events.emit(`${e.id}`, e) : this.events.emit("message", {
            type: e.method,
            data: e.params
        })
    }
    onClose(e) {
        e && 3e3 === e.code && this.events.emit("error", new Error(`WebSocket connection closed abnormally with code: ${e.code} ${e.reason?`(${e.reason})`:""}`)), this.events.emit("disconnect")
    }
    async open(e = this.connection) {
        this.connection === e && this.connection.connected || (this.connection.connected && this.close(), "string" == typeof e && (await this.connection.open(e), e = this.connection), this.connection = this.setConnection(e), await this.connection.open(), this.registerEventListeners(), this.events.emit("connect"))
    }
    async close() {
        await this.connection.close()
    }
    registerEventListeners() {
        this.hasRegisteredEventListeners || (this.connection.on("payload", (e => this.onPayload(e))), this.connection.on("close", (e => this.onClose(e))), this.connection.on("error", (e => this.events.emit("error", e))), this.connection.on("register_error", (e => this.onClose())), this.hasRegisteredEventListeners = !0)
    }
}
const hr = e => e.split("?")[0],
    lr = "undefined" != typeof WebSocket ? WebSocket : "undefined" != typeof global && void 0 !== global.WebSocket ? global.WebSocket : "undefined" != typeof window && void 0 !== window.WebSocket ? window.WebSocket : "undefined" != typeof self && void 0 !== self.WebSocket ? self.WebSocket : require("ws");
class pr {
    constructor(e) {
        if (this.url = e, this.events = new r.EventEmitter, this.registering = !1, !I(e)) throw new Error(`Provided URL is not compatible with WebSocket connection: ${e}`);
        this.url = e
    }
    get connected() {
        return void 0 !== this.socket
    }
    get connecting() {
        return this.registering
    }
    on(e, t) {
        this.events.on(e, t)
    }
    once(e, t) {
        this.events.once(e, t)
    }
    off(e, t) {
        this.events.off(e, t)
    }
    removeListener(e, t) {
        this.events.removeListener(e, t)
    }
    async open(e = this.url) {
        await this.register(e)
    }
    async close() {
        return new Promise(((e, t) => {
            void 0 !== this.socket ? (this.socket.onclose = t => {
                this.onClose(t), e()
            }, this.socket.close()) : t(new Error("Connection already closed"))
        }))
    }
    async send(e, t) {
        void 0 === this.socket && (this.socket = await this.register());
        try {
            this.socket.send(S(e))
        } catch (r) {
            this.onError(e.id, r)
        }
    }
    register(e = this.url) {
        if (!I(e)) throw new Error(`Provided URL is not compatible with WebSocket connection: ${e}`);
        if (this.registering) {
            const e = this.events.getMaxListeners();
            return (this.events.listenerCount("register_error") >= e || this.events.listenerCount("open") >= e) && this.events.setMaxListeners(e + 1), new Promise(((e, t) => {
                this.events.once("register_error", (e => {
                    this.resetMaxListeners(), t(e)
                })), this.events.once("open", (() => {
                    if (this.resetMaxListeners(), void 0 === this.socket) return t(new Error("WebSocket connection is missing or invalid"));
                    e(this.socket)
                }))
            }))
        }
        return this.url = e, this.registering = !0, new Promise(((t, r) => {
            const n = P.isReactNative() ? void 0 : {
                    rejectUnauthorized: !O(e)
                },
                i = new lr(e, [], n);
            "undefined" != typeof WebSocket || "undefined" != typeof global && void 0 !== global.WebSocket || "undefined" != typeof window && void 0 !== window.WebSocket || "undefined" != typeof self && void 0 !== self.WebSocket ? i.onerror = e => {
                const t = e;
                r(this.emitError(t.error))
            } : i.on("error", (e => {
                r(this.emitError(e))
            })), i.onopen = () => {
                this.onOpen(i), t(i)
            }
        }))
    }
    onOpen(e) {
        e.onmessage = e => this.onPayload(e), e.onclose = e => this.onClose(e), this.socket = e, this.registering = !1, this.events.emit("open")
    }
    onClose(e) {
        this.socket = void 0, this.registering = !1, this.events.emit("close", e)
    }
    onPayload(e) {
        if (void 0 === e.data) return;
        const t = "string" == typeof e.data ? N(e.data) : e.data;
        this.events.emit("payload", t)
    }
    onError(e, t) {
        const r = this.parseError(t),
            n = r.message || r.toString(),
            i = R(e, n);
        this.events.emit("payload", i)
    }
    parseError(e, t = this.url) {
        return T(e, hr(t), "WS")
    }
    resetMaxListeners() {
        this.events.getMaxListeners() > 10 && this.events.setMaxListeners(10)
    }
    emitError(e) {
        const t = this.parseError(new Error((null == e ? void 0 : e.message) || `WebSocket connection failed for host: ${hr(this.url)}`));
        return this.events.emit("register_error", t), t
    }
}
var dr = {};
var fr = function(e, t) {
        if (e.length >= 255) throw new TypeError("Alphabet too long");
        for (var r = new Uint8Array(256), n = 0; n < r.length; n++) r[n] = 255;
        for (var i = 0; i < e.length; i++) {
            var s = e.charAt(i),
                o = s.charCodeAt(0);
            if (255 !== r[o]) throw new TypeError(s + " is ambiguous");
            r[o] = i
        }
        var a = e.length,
            c = e.charAt(0),
            u = Math.log(a) / Math.log(256),
            h = Math.log(256) / Math.log(a);

        function l(e) {
            if ("string" != typeof e) throw new TypeError("Expected String");
            if (0 === e.length) return new Uint8Array;
            var t = 0;
            if (" " !== e[t]) {
                for (var n = 0, i = 0; e[t] === c;) n++, t++;
                for (var s = (e.length - t) * u + 1 >>> 0, o = new Uint8Array(s); e[t];) {
                    var h = r[e.charCodeAt(t)];
                    if (255 === h) return;
                    for (var l = 0, p = s - 1;
                        (0 !== h || l < i) && -1 !== p; p--, l++) h += a * o[p] >>> 0, o[p] = h % 256 >>> 0, h = h / 256 >>> 0;
                    if (0 !== h) throw new Error("Non-zero carry");
                    i = l, t++
                }
                if (" " !== e[t]) {
                    for (var d = s - i; d !== s && 0 === o[d];) d++;
                    for (var f = new Uint8Array(n + (s - d)), g = n; d !== s;) f[g++] = o[d++];
                    return f
                }
            }
        }
        return {
            encode: function(t) {
                if (t instanceof Uint8Array || (ArrayBuffer.isView(t) ? t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : Array.isArray(t) && (t = Uint8Array.from(t))), !(t instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
                if (0 === t.length) return "";
                for (var r = 0, n = 0, i = 0, s = t.length; i !== s && 0 === t[i];) i++, r++;
                for (var o = (s - i) * h + 1 >>> 0, u = new Uint8Array(o); i !== s;) {
                    for (var l = t[i], p = 0, d = o - 1;
                        (0 !== l || p < n) && -1 !== d; d--, p++) l += 256 * u[d] >>> 0, u[d] = l % a >>> 0, l = l / a >>> 0;
                    if (0 !== l) throw new Error("Non-zero carry");
                    n = p, i++
                }
                for (var f = o - n; f !== o && 0 === u[f];) f++;
                for (var g = c.repeat(r); f < o; ++f) g += e.charAt(u[f]);
                return g
            },
            decodeUnsafe: l,
            decode: function(e) {
                var r = l(e);
                if (r) return r;
                throw new Error(`Non-${t} character`)
            }
        }
    },
    gr = fr;
const yr = e => {
    if (e instanceof Uint8Array && "Uint8Array" === e.constructor.name) return e;
    if (e instanceof ArrayBuffer) return new Uint8Array(e);
    if (ArrayBuffer.isView(e)) return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
    throw new Error("Unknown type, must be binary type")
};
class mr {
    constructor(e, t, r) {
        this.name = e, this.prefix = t, this.baseEncode = r
    }
    encode(e) {
        if (e instanceof Uint8Array) return `${this.prefix}${this.baseEncode(e)}`;
        throw Error("Unknown type, must be binary type")
    }
}
class vr {
    constructor(e, t, r) {
        if (this.name = e, this.prefix = t, void 0 === t.codePointAt(0)) throw new Error("Invalid prefix character");
        this.prefixCodePoint = t.codePointAt(0), this.baseDecode = r
    }
    decode(e) {
        if ("string" == typeof e) {
            if (e.codePointAt(0) !== this.prefixCodePoint) throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
            return this.baseDecode(e.slice(this.prefix.length))
        }
        throw Error("Can only multibase decode strings")
    }
    or(e) {
        return br(this, e)
    }
}
class wr {
    constructor(e) {
        this.decoders = e
    }
    or(e) {
        return br(this, e)
    }
    decode(e) {
        const t = e[0],
            r = this.decoders[t];
        if (r) return r.decode(e);
        throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)
    }
}
const br = (e, t) => new wr({ ...e.decoders || {
        [e.prefix]: e
    },
    ...t.decoders || {
        [t.prefix]: t
    }
});
class _r {
    constructor(e, t, r, n) {
        this.name = e, this.prefix = t, this.baseEncode = r, this.baseDecode = n, this.encoder = new mr(e, t, r), this.decoder = new vr(e, t, n)
    }
    encode(e) {
        return this.encoder.encode(e)
    }
    decode(e) {
        return this.decoder.decode(e)
    }
}
const Er = ({
        name: e,
        prefix: t,
        encode: r,
        decode: n
    }) => new _r(e, t, r, n),
    Ir = ({
        prefix: e,
        name: t,
        alphabet: r
    }) => {
        const {
            encode: n,
            decode: i
        } = gr(r, t);
        return Er({
            prefix: e,
            name: t,
            encode: n,
            decode: e => yr(i(e))
        })
    },
    Sr = ({
        name: e,
        prefix: t,
        bitsPerChar: r,
        alphabet: n
    }) => Er({
        prefix: t,
        name: e,
        encode: e => ((e, t, r) => {
            const n = "=" === t[t.length - 1],
                i = (1 << r) - 1;
            let s = "",
                o = 0,
                a = 0;
            for (let c = 0; c < e.length; ++c)
                for (a = a << 8 | e[c], o += 8; o > r;) o -= r, s += t[i & a >> o];
            if (o && (s += t[i & a << r - o]), n)
                for (; s.length * r & 7;) s += "=";
            return s
        })(e, n, r),
        decode: t => ((e, t, r, n) => {
            const i = {};
            for (let h = 0; h < t.length; ++h) i[t[h]] = h;
            let s = e.length;
            for (;
                "=" === e[s - 1];) --s;
            const o = new Uint8Array(s * r / 8 | 0);
            let a = 0,
                c = 0,
                u = 0;
            for (let h = 0; h < s; ++h) {
                const t = i[e[h]];
                if (void 0 === t) throw new SyntaxError(`Non-${n} character`);
                c = c << r | t, a += r, a >= 8 && (a -= 8, o[u++] = 255 & c >> a)
            }
            if (a >= r || 255 & c << 8 - a) throw new SyntaxError("Unexpected end of data");
            return o
        })(t, n, r, e)
    }),
    Pr = Er({
        prefix: "\0",
        name: "identity",
        encode: e => (e => (new TextDecoder).decode(e))(e),
        decode: e => (e => (new TextEncoder).encode(e))(e)
    });
var Or = Object.freeze({
    __proto__: null,
    identity: Pr
});
const Nr = Sr({
    prefix: "0",
    name: "base2",
    alphabet: "01",
    bitsPerChar: 1
});
var Rr = Object.freeze({
    __proto__: null,
    base2: Nr
});
const Tr = Sr({
    prefix: "7",
    name: "base8",
    alphabet: "01234567",
    bitsPerChar: 3
});
var xr = Object.freeze({
    __proto__: null,
    base8: Tr
});
const Cr = Ir({
    prefix: "9",
    name: "base10",
    alphabet: "0123456789"
});
var Ar = Object.freeze({
    __proto__: null,
    base10: Cr
});
const jr = Sr({
        prefix: "f",
        name: "base16",
        alphabet: "0123456789abcdef",
        bitsPerChar: 4
    }),
    Dr = Sr({
        prefix: "F",
        name: "base16upper",
        alphabet: "0123456789ABCDEF",
        bitsPerChar: 4
    });
var Ur = Object.freeze({
    __proto__: null,
    base16: jr,
    base16upper: Dr
});
const kr = Sr({
        prefix: "b",
        name: "base32",
        alphabet: "abcdefghijklmnopqrstuvwxyz234567",
        bitsPerChar: 5
    }),
    $r = Sr({
        prefix: "B",
        name: "base32upper",
        alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
        bitsPerChar: 5
    }),
    qr = Sr({
        prefix: "c",
        name: "base32pad",
        alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
        bitsPerChar: 5
    }),
    Mr = Sr({
        prefix: "C",
        name: "base32padupper",
        alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
        bitsPerChar: 5
    }),
    Lr = Sr({
        prefix: "v",
        name: "base32hex",
        alphabet: "0123456789abcdefghijklmnopqrstuv",
        bitsPerChar: 5
    }),
    zr = Sr({
        prefix: "V",
        name: "base32hexupper",
        alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
        bitsPerChar: 5
    }),
    Vr = Sr({
        prefix: "t",
        name: "base32hexpad",
        alphabet: "0123456789abcdefghijklmnopqrstuv=",
        bitsPerChar: 5
    }),
    Kr = Sr({
        prefix: "T",
        name: "base32hexpadupper",
        alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
        bitsPerChar: 5
    }),
    Hr = Sr({
        prefix: "h",
        name: "base32z",
        alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
        bitsPerChar: 5
    });
var Wr = Object.freeze({
    __proto__: null,
    base32: kr,
    base32upper: $r,
    base32pad: qr,
    base32padupper: Mr,
    base32hex: Lr,
    base32hexupper: zr,
    base32hexpad: Vr,
    base32hexpadupper: Kr,
    base32z: Hr
});
const Fr = Ir({
        prefix: "k",
        name: "base36",
        alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
    }),
    Br = Ir({
        prefix: "K",
        name: "base36upper",
        alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    });
var Gr = Object.freeze({
    __proto__: null,
    base36: Fr,
    base36upper: Br
});
const Jr = Ir({
        name: "base58btc",
        prefix: "z",
        alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
    }),
    Qr = Ir({
        name: "base58flickr",
        prefix: "Z",
        alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
    });
var Yr = Object.freeze({
    __proto__: null,
    base58btc: Jr,
    base58flickr: Qr
});
const Zr = Sr({
        prefix: "m",
        name: "base64",
        alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        bitsPerChar: 6
    }),
    Xr = Sr({
        prefix: "M",
        name: "base64pad",
        alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        bitsPerChar: 6
    }),
    en = Sr({
        prefix: "u",
        name: "base64url",
        alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
        bitsPerChar: 6
    }),
    tn = Sr({
        prefix: "U",
        name: "base64urlpad",
        alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
        bitsPerChar: 6
    });
var rn = Object.freeze({
    __proto__: null,
    base64: Zr,
    base64pad: Xr,
    base64url: en,
    base64urlpad: tn
});
const nn = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"),
    sn = nn.reduce(((e, t, r) => (e[r] = t, e)), []),
    on = nn.reduce(((e, t, r) => (e[t.codePointAt(0)] = r, e)), []);
const an = Er({
    prefix: "🚀",
    name: "base256emoji",
    encode: function(e) {
        return e.reduce(((e, t) => e += sn[t]), "")
    },
    decode: function(e) {
        const t = [];
        for (const r of e) {
            const e = on[r.codePointAt(0)];
            if (void 0 === e) throw new Error(`Non-base256emoji character: ${r}`);
            t.push(e)
        }
        return new Uint8Array(t)
    }
});
var cn = Object.freeze({
        __proto__: null,
        base256emoji: an
    }),
    un = function e(t, r, n) {
        r = r || [];
        for (var i = n = n || 0; t >= pn;) r[n++] = 255 & t | hn, t /= 128;
        for (; t & ln;) r[n++] = 255 & t | hn, t >>>= 7;
        return r[n] = 0 | t, e.bytes = n - i + 1, r
    },
    hn = 128,
    ln = -128,
    pn = Math.pow(2, 31);
var dn = function e(t, r) {
        var n, i = 0,
            s = 0,
            o = r = r || 0,
            a = t.length;
        do {
            if (o >= a) throw e.bytes = 0, new RangeError("Could not decode varint");
            n = t[o++], i += s < 28 ? (n & gn) << s : (n & gn) * Math.pow(2, s), s += 7
        } while (n >= fn);
        return e.bytes = o - r, i
    },
    fn = 128,
    gn = 127;
var yn = Math.pow(2, 7),
    mn = Math.pow(2, 14),
    vn = Math.pow(2, 21),
    wn = Math.pow(2, 28),
    bn = Math.pow(2, 35),
    _n = Math.pow(2, 42),
    En = Math.pow(2, 49),
    In = Math.pow(2, 56),
    Sn = Math.pow(2, 63),
    Pn = {
        encode: un,
        decode: dn,
        encodingLength: function(e) {
            return e < yn ? 1 : e < mn ? 2 : e < vn ? 3 : e < wn ? 4 : e < bn ? 5 : e < _n ? 6 : e < En ? 7 : e < In ? 8 : e < Sn ? 9 : 10
        }
    };
const On = (e, t, r = 0) => (Pn.encode(e, t, r), t),
    Nn = e => Pn.encodingLength(e),
    Rn = (e, t) => {
        const r = t.byteLength,
            n = Nn(e),
            i = n + Nn(r),
            s = new Uint8Array(i + r);
        return On(e, s, 0), On(r, s, n), s.set(t, i), new Tn(e, r, t, s)
    };
class Tn {
    constructor(e, t, r, n) {
        this.code = e, this.size = t, this.digest = r, this.bytes = n
    }
}
const xn = ({
    name: e,
    code: t,
    encode: r
}) => new Cn(e, t, r);
class Cn {
    constructor(e, t, r) {
        this.name = e, this.code = t, this.encode = r
    }
    digest(e) {
        if (e instanceof Uint8Array) {
            const t = this.encode(e);
            return t instanceof Uint8Array ? Rn(this.code, t) : t.then((e => Rn(this.code, e)))
        }
        throw Error("Unknown type, must be binary type")
    }
}
const An = e => async t => new Uint8Array(await crypto.subtle.digest(e, t)),
    jn = xn({
        name: "sha2-256",
        code: 18,
        encode: An("SHA-256")
    }),
    Dn = xn({
        name: "sha2-512",
        code: 19,
        encode: An("SHA-512")
    });
Object.freeze({
    __proto__: null,
    sha256: jn,
    sha512: Dn
});
const Un = yr,
    kn = {
        code: 0,
        name: "identity",
        encode: Un,
        digest: e => Rn(0, Un(e))
    };
Object.freeze({
    __proto__: null,
    identity: kn
});
new TextEncoder, new TextDecoder;
const $n = { ...Or,
    ...Rr,
    ...xr,
    ...Ar,
    ...Ur,
    ...Wr,
    ...Gr,
    ...Yr,
    ...rn,
    ...cn
};

function qn(e) {
    return null != globalThis.Buffer ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : e
}

function Mn(e, t, r, n) {
    return {
        name: e,
        prefix: t,
        encoder: {
            name: e,
            prefix: t,
            encode: r
        },
        decoder: {
            decode: n
        }
    }
}
const Ln = Mn("utf8", "u", (e => "u" + new TextDecoder("utf8").decode(e)), (e => (new TextEncoder).encode(e.substring(1)))),
    zn = Mn("ascii", "a", (e => {
        let t = "a";
        for (let r = 0; r < e.length; r++) t += String.fromCharCode(e[r]);
        return t
    }), (e => {
        const t = function(e = 0) {
            return null != globalThis.Buffer && null != globalThis.Buffer.allocUnsafe ? qn(globalThis.Buffer.allocUnsafe(e)) : new Uint8Array(e)
        }((e = e.substring(1)).length);
        for (let r = 0; r < e.length; r++) t[r] = e.charCodeAt(r);
        return t
    })),
    Vn = {
        utf8: Ln,
        "utf-8": Ln,
        hex: $n.base16,
        latin1: zn,
        ascii: zn,
        binary: zn,
        ...$n
    };
const Kn = "core",
    Hn = `wc@2:${Kn}:`,
    Wn = "error",
    Fn = {
        database: ":memory:"
    },
    Bn = "client_ed25519_seed",
    Gn = c.ONE_DAY,
    Jn = c.SIX_HOURS,
    Qn = "wss://relay.walletconnect.com",
    Yn = "wss://relay.walletconnect.org",
    Zn = "relayer_message",
    Xn = "relayer_message_ack",
    ei = "relayer_connect",
    ti = "relayer_disconnect",
    ri = "relayer_error",
    ni = "relayer_connection_stalled",
    ii = "relayer_transport_closed",
    si = "relayer_publish",
    oi = "payload",
    ai = "connect",
    ci = "disconnect",
    ui = "error",
    hi = c.ONE_SECOND / 2,
    li = "subscription_created",
    pi = "subscription_deleted",
    di = "subscription_sync",
    fi = "subscription_resubscribed",
    gi = 1e3 * c.FIVE_SECONDS,
    yi = {
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
    mi = "history_created",
    vi = "history_updated",
    wi = "history_deleted",
    bi = "history_sync",
    _i = "expirer_created",
    Ei = "expirer_deleted",
    Ii = "expirer_expired",
    Si = "expirer_sync",
    Pi = "verify-api",
    Oi = "https://verify.walletconnect.com";
class Ni {
    constructor(e, t) {
        this.core = e, this.logger = t, this.keychain = new Map, this.name = "keychain", this.version = "0.3", this.initialized = !1, this.storagePrefix = Hn, this.init = async () => {
            if (!this.initialized) {
                const e = await this.getKeyChain();
                typeof e < "u" && (this.keychain = e), this.initialized = !0
            }
        }, this.has = e => (this.isInitialized(), this.keychain.has(e)), this.set = async (e, t) => {
            this.isInitialized(), this.keychain.set(e, t), await this.persist()
        }, this.get = e => {
            this.isInitialized();
            const t = this.keychain.get(e);
            if (typeof t > "u") {
                const {
                    message: t
                } = Kt("NO_MATCHING_KEY", `${this.name}: ${e}`);
                throw new Error(t)
            }
            return t
        }, this.del = async e => {
            this.isInitialized(), this.keychain.delete(e), await this.persist()
        }, this.core = e, this.logger = C(t, this.name)
    }
    get context() {
        return A(this.logger)
    }
    get storageKey() {
        return this.storagePrefix + this.version + "//" + this.name
    }
    async setKeyChain(e) {
        await this.core.storage.setItem(this.storageKey, _t(e))
    }
    async getKeyChain() {
        const e = await this.core.storage.getItem(this.storageKey);
        return typeof e < "u" ? Et(e) : void 0
    }
    async persist() {
        await this.setKeyChain(this.keychain)
    }
    isInitialized() {
        if (!this.initialized) {
            const {
                message: e
            } = Kt("NOT_INITIALIZED", this.name);
            throw new Error(e)
        }
    }
}
class Ri {
    constructor(e, t, r) {
        this.core = e, this.logger = t, this.name = "crypto", this.initialized = !1, this.init = async () => {
            this.initialized || (await this.keychain.init(), this.initialized = !0)
        }, this.hasKeys = e => (this.isInitialized(), this.keychain.has(e)), this.getClientId = async () => {
            this.isInitialized();
            const e = await this.getClientSeed(),
                t = k(e);
            return $(t.publicKey)
        }, this.generateKeyPair = () => {
            this.isInitialized();
            const e = function() {
                const e = p.generateKeyPair();
                return {
                    privateKey: l(e.secretKey, Be),
                    publicKey: l(e.publicKey, Be)
                }
            }();
            return this.setPrivateKey(e.publicKey, e.privateKey)
        }, this.signJWT = async e => {
            this.isInitialized();
            const t = await this.getClientSeed(),
                r = k(t),
                n = Qe(),
                i = Gn;
            return await q(n, e, i, r)
        }, this.generateSharedKey = (e, t, r) => {
            this.isInitialized();
            const n = function(e, t) {
                const r = p.sharedKey(h(e, Be), h(t, Be)),
                    n = new f(u.SHA256, r).expand(32);
                return l(n, Be)
            }(this.getPrivateKey(e), t);
            return this.setSymKey(n, r)
        }, this.setSymKey = async (e, t) => {
            this.isInitialized();
            const r = t || function(e) {
                const t = u.hash(h(e, Be));
                return l(t, Be)
            }(e);
            return await this.keychain.set(r, e), r
        }, this.deleteKeyPair = async e => {
            this.isInitialized(), await this.keychain.del(e)
        }, this.deleteSymKey = async e => {
            this.isInitialized(), await this.keychain.del(e)
        }, this.encode = async (e, t, r) => {
            this.isInitialized();
            const n = tt(r),
                i = S(t);
            if (rt(n)) {
                const t = n.senderPublicKey,
                    r = n.receiverPublicKey;
                e = await this.generateSharedKey(t, r)
            }
            const s = this.getSymKey(e),
                {
                    type: o,
                    senderPublicKey: a
                } = n;
            return Xe({
                type: o,
                symKey: s,
                message: i,
                senderPublicKey: a
            })
        }, this.decode = async (e, t, r) => {
            this.isInitialized();
            const n = function(e, t) {
                const r = et(e);
                return tt({
                    type: Ze(r.type),
                    senderPublicKey: typeof r.senderPublicKey < "u" ? l(r.senderPublicKey, Be) : void 0,
                    receiverPublicKey: null == t ? void 0 : t.receiverPublicKey
                })
            }(t, r);
            if (rt(n)) {
                const t = n.receiverPublicKey,
                    r = n.senderPublicKey;
                e = await this.generateSharedKey(t, r)
            }
            try {
                const r = function(e) {
                    const t = new g.ChaCha20Poly1305(h(e.symKey, Be)),
                        {
                            sealed: r,
                            iv: n
                        } = et(e.encoded),
                        i = t.open(n, r);
                    if (null === i) throw new Error("Failed to decrypt");
                    return l(i, Je)
                }({
                    symKey: this.getSymKey(e),
                    encoded: t
                });
                return N(r)
            } catch (i) {
                this.logger.error(`Failed to decode message from topic: '${e}', clientId: '${await this.getClientId()}'`), this.logger.error(i)
            }
        }, this.getPayloadType = e => Ze(et(e).type), this.getPayloadSenderPublicKey = e => {
            const t = et(e);
            return t.senderPublicKey ? l(t.senderPublicKey, Be) : void 0
        }, this.core = e, this.logger = C(t, this.name), this.keychain = r || new Ni(this.core, this.logger)
    }
    get context() {
        return A(this.logger)
    }
    async setPrivateKey(e, t) {
        return await this.keychain.set(e, t), e
    }
    getPrivateKey(e) {
        return this.keychain.get(e)
    }
    async getClientSeed() {
        let e = "";
        try {
            e = this.keychain.get(Bn)
        } catch {
            e = Qe(), await this.keychain.set(Bn, e)
        }
        return function(e, t = "utf8") {
            const r = Vn[t];
            if (!r) throw new Error(`Unsupported encoding "${t}"`);
            return "utf8" !== t && "utf-8" !== t || null == globalThis.Buffer || null == globalThis.Buffer.from ? r.decoder.decode(`${r.prefix}${e}`) : qn(globalThis.Buffer.from(e, "utf-8"))
        }(e, "base16")
    }
    getSymKey(e) {
        return this.keychain.get(e)
    }
    isInitialized() {
        if (!this.initialized) {
            const {
                message: e
            } = Kt("NOT_INITIALIZED", this.name);
            throw new Error(e)
        }
    }
}
class Ti extends fe {
    constructor(e, t) {
        super(e, t), this.logger = e, this.core = t, this.messages = new Map, this.name = "messages", this.version = "0.3", this.initialized = !1, this.storagePrefix = Hn, this.init = async () => {
            if (!this.initialized) {
                this.logger.trace("Initialized");
                try {
                    const e = await this.getRelayerMessages();
                    typeof e < "u" && (this.messages = e), this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({
                        type: "method",
                        method: "restore",
                        size: this.messages.size
                    })
                } catch (e) {
                    this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(e)
                } finally {
                    this.initialized = !0
                }
            }
        }, this.set = async (e, t) => {
            this.isInitialized();
            const r = Ye(t);
            let n = this.messages.get(e);
            return typeof n > "u" && (n = {}), typeof n[r] < "u" || (n[r] = t, this.messages.set(e, n), await this.persist()), r
        }, this.get = e => {
            this.isInitialized();
            let t = this.messages.get(e);
            return typeof t > "u" && (t = {}), t
        }, this.has = (e, t) => {
            this.isInitialized();
            return typeof this.get(e)[Ye(t)] < "u"
        }, this.del = async e => {
            this.isInitialized(), this.messages.delete(e), await this.persist()
        }, this.logger = C(e, this.name), this.core = t
    }
    get context() {
        return A(this.logger)
    }
    get storageKey() {
        return this.storagePrefix + this.version + "//" + this.name
    }
    async setRelayerMessages(e) {
        await this.core.storage.setItem(this.storageKey, _t(e))
    }
    async getRelayerMessages() {
        const e = await this.core.storage.getItem(this.storageKey);
        return typeof e < "u" ? Et(e) : void 0
    }
    async persist() {
        await this.setRelayerMessages(this.messages)
    }
    isInitialized() {
        if (!this.initialized) {
            const {
                message: e
            } = Kt("NOT_INITIALIZED", this.name);
            throw new Error(e)
        }
    }
}
class xi extends ge {
    constructor(e, t) {
        super(e, t), this.relayer = e, this.logger = t, this.events = new r.EventEmitter, this.name = "publisher", this.queue = new Map, this.publishTimeout = c.toMiliseconds(c.TEN_SECONDS), this.queueTimeout = c.toMiliseconds(c.FIVE_SECONDS), this.needsTransportRestart = !1, this.publish = async (e, t, r) => {
            this.logger.debug("Publishing Payload"), this.logger.trace({
                type: "method",
                method: "publish",
                params: {
                    topic: e,
                    message: t,
                    opts: r
                }
            });
            try {
                const n = (null == r ? void 0 : r.ttl) || Jn,
                    i = xt(r),
                    s = (null == r ? void 0 : r.prompt) || !1,
                    o = (null == r ? void 0 : r.tag) || 0,
                    a = (null == r ? void 0 : r.id) || b().toString(),
                    c = {
                        topic: e,
                        message: t,
                        opts: {
                            ttl: n,
                            relay: i,
                            prompt: s,
                            tag: o,
                            id: a
                        }
                    },
                    u = setTimeout((() => this.queue.set(a, c)), this.queueTimeout);
                try {
                    await await St(this.rpcPublish(e, t, n, i, s, o, a), this.publishTimeout), clearTimeout(u), this.relayer.events.emit(si, c)
                } catch {
                    return this.logger.debug("Publishing Payload stalled"), void(this.needsTransportRestart = !0)
                }
                this.logger.debug("Successfully Published Payload"), this.logger.trace({
                    type: "method",
                    method: "publish",
                    params: {
                        topic: e,
                        message: t,
                        opts: r
                    }
                })
            } catch (n) {
                throw this.logger.debug("Failed to Publish Payload"), this.logger.error(n), n
            }
        }, this.on = (e, t) => {
            this.events.on(e, t)
        }, this.once = (e, t) => {
            this.events.once(e, t)
        }, this.off = (e, t) => {
            this.events.off(e, t)
        }, this.removeListener = (e, t) => {
            this.events.removeListener(e, t)
        }, this.relayer = e, this.logger = C(t, this.name), this.registerEventListeners()
    }
    get context() {
        return A(this.logger)
    }
    rpcPublish(e, t, r, n, i, s, o) {
        var a, c, u, h;
        const l = {
            method: Ct(n.protocol).publish,
            params: {
                topic: e,
                message: t,
                ttl: r,
                prompt: i,
                tag: s
            },
            id: o
        };
        return Bt(null == (a = l.params) ? void 0 : a.prompt) && (null == (c = l.params) || delete c.prompt), Bt(null == (u = l.params) ? void 0 : u.tag) && (null == (h = l.params) || delete h.tag), this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
            type: "message",
            direction: "outgoing",
            request: l
        }), this.relayer.request(l)
    }
    onPublish(e) {
        this.queue.delete(e)
    }
    checkQueue() {
        this.queue.forEach((async e => {
            const {
                topic: t,
                message: r,
                opts: n
            } = e;
            await this.publish(t, r, n)
        }))
    }
    registerEventListeners() {
        this.relayer.core.heartbeat.on(Z.HEARTBEAT_EVENTS.pulse, (() => {
            if (this.needsTransportRestart) return this.needsTransportRestart = !1, void this.relayer.events.emit(ni);
            this.checkQueue()
        })), this.relayer.on(Xn, (e => {
            this.onPublish(e.id.toString())
        }))
    }
}
class Ci {
    constructor() {
        this.map = new Map, this.set = (e, t) => {
            const r = this.get(e);
            this.exists(e, t) || this.map.set(e, [...r, t])
        }, this.get = e => this.map.get(e) || [], this.exists = (e, t) => this.get(e).includes(t), this.delete = (e, t) => {
            if (typeof t > "u") return void this.map.delete(e);
            if (!this.map.has(e)) return;
            const r = this.get(e);
            if (!this.exists(e, t)) return;
            const n = r.filter((e => e !== t));
            n.length ? this.map.set(e, n) : this.map.delete(e)
        }, this.clear = () => {
            this.map.clear()
        }
    }
    get topics() {
        return Array.from(this.map.keys())
    }
}
var Ai = Object.defineProperty,
    ji = Object.defineProperties,
    Di = Object.getOwnPropertyDescriptors,
    Ui = Object.getOwnPropertySymbols,
    ki = Object.prototype.hasOwnProperty,
    $i = Object.prototype.propertyIsEnumerable,
    qi = (e, t, r) => t in e ? Ai(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : e[t] = r,
    Mi = (e, t) => {
        for (var r in t || (t = {})) ki.call(t, r) && qi(e, r, t[r]);
        if (Ui)
            for (var r of Ui(t)) $i.call(t, r) && qi(e, r, t[r]);
        return e
    },
    Li = (e, t) => ji(e, Di(t));
class zi extends ve {
    constructor(e, t) {
        super(e, t), this.relayer = e, this.logger = t, this.subscriptions = new Map, this.topicMap = new Ci, this.events = new r.EventEmitter, this.name = "subscription", this.version = "0.3", this.pending = new Map, this.cached = [], this.initialized = !1, this.pendingSubscriptionWatchLabel = "pending_sub_watch_label", this.pollingInterval = 20, this.storagePrefix = Hn, this.subscribeTimeout = 1e4, this.restartInProgress = !1, this.batchSubscribeTopicsLimit = 500, this.init = async () => {
            this.initialized || (this.logger.trace("Initialized"), await this.restart(), this.registerEventListeners(), this.onEnable(), this.clientId = await this.relayer.core.crypto.getClientId())
        }, this.subscribe = async (e, t) => {
            await this.restartToComplete(), this.isInitialized(), this.logger.debug("Subscribing Topic"), this.logger.trace({
                type: "method",
                method: "subscribe",
                params: {
                    topic: e,
                    opts: t
                }
            });
            try {
                const r = xt(t),
                    n = {
                        topic: e,
                        relay: r
                    };
                this.pending.set(e, n);
                const i = await this.rpcSubscribe(e, r);
                return this.onSubscribe(i, n), this.logger.debug("Successfully Subscribed Topic"), this.logger.trace({
                    type: "method",
                    method: "subscribe",
                    params: {
                        topic: e,
                        opts: t
                    }
                }), i
            } catch (r) {
                throw this.logger.debug("Failed to Subscribe Topic"), this.logger.error(r), r
            }
        }, this.unsubscribe = async (e, t) => {
            await this.restartToComplete(), this.isInitialized(), typeof(null == t ? void 0 : t.id) < "u" ? await this.unsubscribeById(e, t.id, t) : await this.unsubscribeByTopic(e, t)
        }, this.isSubscribed = async e => !!this.topics.includes(e) || await new Promise(((t, r) => {
            const n = new c.Watch;
            n.start(this.pendingSubscriptionWatchLabel);
            const i = setInterval((() => {
                !this.pending.has(e) && this.topics.includes(e) && (clearInterval(i), n.stop(this.pendingSubscriptionWatchLabel), t(!0)), n.elapsed(this.pendingSubscriptionWatchLabel) >= gi && (clearInterval(i), n.stop(this.pendingSubscriptionWatchLabel), r(new Error("Subscription resolution timeout")))
            }), this.pollingInterval)
        })).catch((() => !1)), this.on = (e, t) => {
            this.events.on(e, t)
        }, this.once = (e, t) => {
            this.events.once(e, t)
        }, this.off = (e, t) => {
            this.events.off(e, t)
        }, this.removeListener = (e, t) => {
            this.events.removeListener(e, t)
        }, this.restart = async () => {
            this.restartInProgress = !0, await this.restore(), await this.reset(), this.restartInProgress = !1
        }, this.relayer = e, this.logger = C(t, this.name), this.clientId = ""
    }
    get context() {
        return A(this.logger)
    }
    get storageKey() {
        return this.storagePrefix + this.version + "//" + this.name
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
    hasSubscription(e, t) {
        let r = !1;
        try {
            r = this.getSubscription(e).topic === t
        } catch {}
        return r
    }
    onEnable() {
        this.cached = [], this.initialized = !0
    }
    onDisable() {
        this.cached = this.values, this.subscriptions.clear(), this.topicMap.clear()
    }
    async unsubscribeByTopic(e, t) {
        const r = this.topicMap.get(e);
        await Promise.all(r.map((async r => await this.unsubscribeById(e, r, t))))
    }
    async unsubscribeById(e, t, r) {
        this.logger.debug("Unsubscribing Topic"), this.logger.trace({
            type: "method",
            method: "unsubscribe",
            params: {
                topic: e,
                id: t,
                opts: r
            }
        });
        try {
            const n = xt(r);
            await this.rpcUnsubscribe(e, t, n);
            const i = Ht("USER_DISCONNECTED", `${this.name}, ${e}`);
            await this.onUnsubscribe(e, t, i), this.logger.debug("Successfully Unsubscribed Topic"), this.logger.trace({
                type: "method",
                method: "unsubscribe",
                params: {
                    topic: e,
                    id: t,
                    opts: r
                }
            })
        } catch (n) {
            throw this.logger.debug("Failed to Unsubscribe Topic"), this.logger.error(n), n
        }
    }
    async rpcSubscribe(e, t) {
        const r = {
            method: Ct(t.protocol).subscribe,
            params: {
                topic: e
            }
        };
        this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
            type: "payload",
            direction: "outgoing",
            request: r
        });
        try {
            await await St(this.relayer.request(r), this.subscribeTimeout)
        } catch {
            this.logger.debug("Outgoing Relay Subscribe Payload stalled"), this.relayer.events.emit(ni)
        }
        return Ye(e + this.clientId)
    }
    async rpcBatchSubscribe(e) {
        if (!e.length) return;
        const t = {
            method: Ct(e[0].relay.protocol).batchSubscribe,
            params: {
                topics: e.map((e => e.topic))
            }
        };
        this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
            type: "payload",
            direction: "outgoing",
            request: t
        });
        try {
            return await await St(this.relayer.request(t), this.subscribeTimeout)
        } catch {
            this.logger.debug("Outgoing Relay Payload stalled"), this.relayer.events.emit(ni)
        }
    }
    rpcUnsubscribe(e, t, r) {
        const n = {
            method: Ct(r.protocol).unsubscribe,
            params: {
                topic: e,
                id: t
            }
        };
        return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
            type: "payload",
            direction: "outgoing",
            request: n
        }), this.relayer.request(n)
    }
    onSubscribe(e, t) {
        this.setSubscription(e, Li(Mi({}, t), {
            id: e
        })), this.pending.delete(t.topic)
    }
    onBatchSubscribe(e) {
        e.length && e.forEach((e => {
            this.setSubscription(e.id, Mi({}, e)), this.pending.delete(e.topic)
        }))
    }
    async onUnsubscribe(e, t, r) {
        this.events.removeAllListeners(t), this.hasSubscription(t, e) && this.deleteSubscription(t, r), await this.relayer.messages.del(e)
    }
    async setRelayerSubscriptions(e) {
        await this.relayer.core.storage.setItem(this.storageKey, e)
    }
    async getRelayerSubscriptions() {
        return await this.relayer.core.storage.getItem(this.storageKey)
    }
    setSubscription(e, t) {
        this.subscriptions.has(e) || (this.logger.debug("Setting subscription"), this.logger.trace({
            type: "method",
            method: "setSubscription",
            id: e,
            subscription: t
        }), this.addSubscription(e, t))
    }
    addSubscription(e, t) {
        this.subscriptions.set(e, Mi({}, t)), this.topicMap.set(t.topic, e), this.events.emit(li, t)
    }
    getSubscription(e) {
        this.logger.debug("Getting subscription"), this.logger.trace({
            type: "method",
            method: "getSubscription",
            id: e
        });
        const t = this.subscriptions.get(e);
        if (!t) {
            const {
                message: t
            } = Kt("NO_MATCHING_KEY", `${this.name}: ${e}`);
            throw new Error(t)
        }
        return t
    }
    deleteSubscription(e, t) {
        this.logger.debug("Deleting subscription"), this.logger.trace({
            type: "method",
            method: "deleteSubscription",
            id: e,
            reason: t
        });
        const r = this.getSubscription(e);
        this.subscriptions.delete(e), this.topicMap.delete(r.topic, e), this.events.emit(pi, Li(Mi({}, r), {
            reason: t
        }))
    }
    async persist() {
        await this.setRelayerSubscriptions(this.values), this.events.emit(di)
    }
    async reset() {
        if (this.cached.length) {
            const e = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
            for (let t = 0; t < e; t++) {
                const e = this.cached.splice(0, this.batchSubscribeTopicsLimit);
                await this.batchSubscribe(e)
            }
        }
        this.events.emit(fi)
    }
    async restore() {
        try {
            const e = await this.getRelayerSubscriptions();
            if (typeof e > "u" || !e.length) return;
            if (this.subscriptions.size) {
                const {
                    message: e
                } = Kt("RESTORE_WILL_OVERRIDE", this.name);
                throw this.logger.error(e), this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`), new Error(e)
            }
            this.cached = e, this.logger.debug(`Successfully Restored subscriptions for ${this.name}`), this.logger.trace({
                type: "method",
                method: "restore",
                subscriptions: this.values
            })
        } catch (e) {
            this.logger.debug(`Failed to Restore subscriptions for ${this.name}`), this.logger.error(e)
        }
    }
    async batchSubscribe(e) {
        if (!e.length) return;
        const t = await this.rpcBatchSubscribe(e);
        Wt(t) && this.onBatchSubscribe(t.map(((t, r) => Li(Mi({}, e[r]), {
            id: t
        }))))
    }
    async onConnect() {
        this.restartInProgress || (await this.restart(), this.onEnable())
    }
    onDisconnect() {
        this.onDisable()
    }
    async checkPending() {
        if (this.relayer.transportExplicitlyClosed) return;
        const e = [];
        this.pending.forEach((t => {
            e.push(t)
        })), await this.batchSubscribe(e)
    }
    registerEventListeners() {
        this.relayer.core.heartbeat.on(Z.HEARTBEAT_EVENTS.pulse, (async () => {
            await this.checkPending()
        })), this.relayer.on(ei, (async () => {
            await this.onConnect()
        })), this.relayer.on(ti, (() => {
            this.onDisconnect()
        })), this.events.on(li, (async e => {
            const t = li;
            this.logger.info(`Emitting ${t}`), this.logger.debug({
                type: "event",
                event: t,
                data: e
            }), await this.persist()
        })), this.events.on(pi, (async e => {
            const t = pi;
            this.logger.info(`Emitting ${t}`), this.logger.debug({
                type: "event",
                event: t,
                data: e
            }), await this.persist()
        }))
    }
    isInitialized() {
        if (!this.initialized) {
            const {
                message: e
            } = Kt("NOT_INITIALIZED", this.name);
            throw new Error(e)
        }
    }
    async restartToComplete() {
        this.restartInProgress && await new Promise((e => {
            const t = setInterval((() => {
                this.restartInProgress || (clearInterval(t), e())
            }), this.pollingInterval)
        }))
    }
}
var Vi = Object.defineProperty,
    Ki = Object.getOwnPropertySymbols,
    Hi = Object.prototype.hasOwnProperty,
    Wi = Object.prototype.propertyIsEnumerable,
    Fi = (e, t, r) => t in e ? Vi(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : e[t] = r;
class Bi extends ye {
    constructor(e) {
        super(e), this.protocol = "wc", this.version = 2, this.events = new r.EventEmitter, this.name = "relayer", this.transportExplicitlyClosed = !1, this.initialized = !1, this.reconnecting = !1, this.connectionStatusPollingInterval = 20, this.staleConnectionErrors = ["socket hang up", "socket stalled"], this.request = async e => {
            this.logger.debug("Publishing Request Payload");
            try {
                return await this.toEstablishConnection(), await this.provider.request(e)
            } catch (t) {
                throw this.logger.debug("Failed to Publish Request"), this.logger.error(t), t
            }
        }, this.core = e.core, this.logger = typeof e.logger < "u" && "string" != typeof e.logger ? C(e.logger, this.name) : j(D({
            level: e.logger || "error"
        })), this.messages = new Ti(this.logger, e.core), this.subscriber = new zi(this, this.logger), this.publisher = new xi(this, this.logger), this.relayUrl = (null == e ? void 0 : e.relayUrl) || Qn, this.projectId = e.projectId, this.provider = {}
    }
    async init() {
        this.logger.trace("Initialized"), await this.createProvider(), await Promise.all([this.messages.init(), this.subscriber.init()]);
        try {
            await this.transportOpen()
        } catch {
            this.logger.warn(`Connection via ${this.relayUrl} failed, attempting to connect via failover domain ${Yn}...`), await this.restartTransport(Yn)
        }
        this.registerEventListeners(), this.initialized = !0, setTimeout((async () => {
            0 === this.subscriber.topics.length && (this.logger.info("No topics subscribed to after init, closing transport"), await this.transportClose(), this.transportExplicitlyClosed = !1)
        }), 1e4)
    }
    get context() {
        return A(this.logger)
    }
    get connected() {
        return this.provider.connection.connected
    }
    get connecting() {
        return this.provider.connection.connecting
    }
    async publish(e, t, r) {
        this.isInitialized(), await this.publisher.publish(e, t, r), await this.recordMessageEvent({
            topic: e,
            message: t,
            publishedAt: Date.now()
        })
    }
    async subscribe(e, t) {
        var r;
        this.isInitialized();
        let n = (null == (r = this.subscriber.topicMap.get(e)) ? void 0 : r[0]) || "";
        return n || (await Promise.all([new Promise((t => {
            this.subscriber.once(li, (r => {
                r.topic === e && t()
            }))
        })), new Promise((async r => {
            n = await this.subscriber.subscribe(e, t), r()
        }))]), n)
    }
    async unsubscribe(e, t) {
        this.isInitialized(), await this.subscriber.unsubscribe(e, t)
    }
    on(e, t) {
        this.events.on(e, t)
    }
    once(e, t) {
        this.events.once(e, t)
    }
    off(e, t) {
        this.events.off(e, t)
    }
    removeListener(e, t) {
        this.events.removeListener(e, t)
    }
    async transportClose() {
        this.transportExplicitlyClosed = !0, this.connected && (await this.provider.disconnect(), this.events.emit(ii))
    }
    async transportOpen(e) {
        if (this.transportExplicitlyClosed = !1, !this.reconnecting) {
            this.relayUrl = e || this.relayUrl, this.reconnecting = !0;
            try {
                await Promise.all([new Promise((e => {
                    this.initialized || e(), this.subscriber.once(fi, (() => {
                        e()
                    }))
                })), await Promise.race([new Promise((async (e, t) => {
                    await St(this.provider.connect(), 1e4, `Socket stalled when trying to connect to ${this.relayUrl}`).catch((e => t(e))).then((() => e())).finally((() => this.removeListener(ii, this.rejectTransportOpen)))
                })), new Promise((e => this.once(ii, this.rejectTransportOpen)))])])
            } catch (t) {
                this.logger.error(t);
                const e = t;
                if (!this.isConnectionStalled(e.message)) throw t;
                this.events.emit(ii)
            } finally {
                this.reconnecting = !1
            }
        }
    }
    async restartTransport(e) {
        this.transportExplicitlyClosed || this.reconnecting || (this.relayUrl = e || this.relayUrl, this.connected && await Promise.all([new Promise((e => {
            this.provider.once(ci, (() => {
                e()
            }))
        })), this.transportClose()]), await this.createProvider(), await this.transportOpen())
    }
    isConnectionStalled(e) {
        return this.staleConnectionErrors.some((t => e.includes(t)))
    }
    rejectTransportOpen() {
        throw new Error("Attempt to connect to relay via `transportOpen` has stalled. Retrying...")
    }
    async createProvider() {
        const e = await this.core.crypto.signJWT(this.relayUrl);
        this.provider = new ur(new pr(wt({
            sdkVersion: "2.9.1",
            protocol: this.protocol,
            version: this.version,
            relayUrl: this.relayUrl,
            projectId: this.projectId,
            auth: e,
            useOnCloseEvent: !0
        }))), this.registerProviderListeners()
    }
    async recordMessageEvent(e) {
        const {
            topic: t,
            message: r
        } = e;
        await this.messages.set(t, r)
    }
    async shouldIgnoreMessageEvent(e) {
        const {
            topic: t,
            message: r
        } = e;
        if (!r || 0 === r.length) return this.logger.debug(`Ignoring invalid/empty message: ${r}`), !0;
        if (!(await this.subscriber.isSubscribed(t))) return this.logger.debug(`Ignoring message for non-subscribed topic ${t}`), !0;
        const n = this.messages.has(t, r);
        return n && this.logger.debug(`Ignoring duplicate message: ${r}`), n
    }
    async onProviderPayload(e) {
        if (this.logger.debug("Incoming Relay Payload"), this.logger.trace({
                type: "payload",
                direction: "incoming",
                payload: e
            }), M(e)) {
            if (!e.method.endsWith("_subscription")) return;
            const t = e.params,
                {
                    topic: r,
                    message: n,
                    publishedAt: i
                } = t.data,
                s = {
                    topic: r,
                    message: n,
                    publishedAt: i
                };
            this.logger.debug("Emitting Relayer Payload"), this.logger.trace(((e, t) => {
                for (var r in t || (t = {})) Hi.call(t, r) && Fi(e, r, t[r]);
                if (Ki)
                    for (var r of Ki(t)) Wi.call(t, r) && Fi(e, r, t[r]);
                return e
            })({
                type: "event",
                event: t.id
            }, s)), this.events.emit(t.id, s), await this.acknowledgePayload(e), await this.onMessageEvent(s)
        } else E(e) && this.events.emit(Xn, e)
    }
    async onMessageEvent(e) {
        await this.shouldIgnoreMessageEvent(e) || (this.events.emit(Zn, e), await this.recordMessageEvent(e))
    }
    async acknowledgePayload(e) {
        const t = L(e.id, !0);
        await this.provider.connection.send(t)
    }
    registerProviderListeners() {
        this.provider.on(oi, (e => this.onProviderPayload(e))), this.provider.on(ai, (() => {
            this.events.emit(ei)
        })), this.provider.on(ci, (() => {
            this.onProviderDisconnect()
        })), this.provider.on(ui, (e => {
            this.logger.error(e), this.events.emit(ri, e)
        }))
    }
    registerEventListeners() {
        this.events.on(ni, (async () => {
            await this.restartTransport()
        }))
    }
    onProviderDisconnect() {
        this.events.emit(ti), this.attemptToReconnect()
    }
    attemptToReconnect() {
        this.transportExplicitlyClosed || setTimeout((async () => {
            await this.restartTransport()
        }), c.toMiliseconds(hi))
    }
    isInitialized() {
        if (!this.initialized) {
            const {
                message: e
            } = Kt("NOT_INITIALIZED", this.name);
            throw new Error(e)
        }
    }
    async toEstablishConnection() {
        if (!this.connected) {
            if (this.connecting) return await new Promise((e => {
                const t = setInterval((() => {
                    this.connected && (clearInterval(t), e())
                }), this.connectionStatusPollingInterval)
            }));
            await this.restartTransport()
        }
    }
}
var Gi = Object.defineProperty,
    Ji = Object.getOwnPropertySymbols,
    Qi = Object.prototype.hasOwnProperty,
    Yi = Object.prototype.propertyIsEnumerable,
    Zi = (e, t, r) => t in e ? Gi(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : e[t] = r,
    Xi = (e, t) => {
        for (var r in t || (t = {})) Qi.call(t, r) && Zi(e, r, t[r]);
        if (Ji)
            for (var r of Ji(t)) Yi.call(t, r) && Zi(e, r, t[r]);
        return e
    };
class es extends me {
    constructor(e, t, r, n = Hn, i = void 0) {
        super(e, t, r, n), this.core = e, this.logger = t, this.name = r, this.map = new Map, this.version = "0.3", this.cached = [], this.initialized = !1, this.storagePrefix = Hn, this.init = async () => {
            this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((e => {
                this.getKey && null !== e && !Bt(e) ? this.map.set(this.getKey(e), e) : function(e) {
                    var t;
                    return null == (t = null == e ? void 0 : e.proposer) ? void 0 : t.publicKey
                }(e) ? this.map.set(e.id, e) : function(e) {
                    return null == e ? void 0 : e.topic
                }(e) && this.map.set(e.topic, e)
            })), this.cached = [], this.initialized = !0)
        }, this.set = async (e, t) => {
            this.isInitialized(), this.map.has(e) ? await this.update(e, t) : (this.logger.debug("Setting value"), this.logger.trace({
                type: "method",
                method: "set",
                key: e,
                value: t
            }), this.map.set(e, t), await this.persist())
        }, this.get = e => (this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({
            type: "method",
            method: "get",
            key: e
        }), this.getData(e)), this.getAll = e => (this.isInitialized(), e ? this.values.filter((t => Object.keys(e).every((r => x(t[r], e[r]))))) : this.values), this.update = async (e, t) => {
            this.isInitialized(), this.logger.debug("Updating value"), this.logger.trace({
                type: "method",
                method: "update",
                key: e,
                update: t
            });
            const r = Xi(Xi({}, this.getData(e)), t);
            this.map.set(e, r), await this.persist()
        }, this.delete = async (e, t) => {
            this.isInitialized(), this.map.has(e) && (this.logger.debug("Deleting value"), this.logger.trace({
                type: "method",
                method: "delete",
                key: e,
                reason: t
            }), this.map.delete(e), await this.persist())
        }, this.logger = C(t, this.name), this.storagePrefix = n, this.getKey = i
    }
    get context() {
        return A(this.logger)
    }
    get storageKey() {
        return this.storagePrefix + this.version + "//" + this.name
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
    async setDataStore(e) {
        await this.core.storage.setItem(this.storageKey, e)
    }
    async getDataStore() {
        return await this.core.storage.getItem(this.storageKey)
    }
    getData(e) {
        const t = this.map.get(e);
        if (!t) {
            const {
                message: t
            } = Kt("NO_MATCHING_KEY", `${this.name}: ${e}`);
            throw this.logger.error(t), new Error(t)
        }
        return t
    }
    async persist() {
        await this.setDataStore(this.values)
    }
    async restore() {
        try {
            const e = await this.getDataStore();
            if (typeof e > "u" || !e.length) return;
            if (this.map.size) {
                const {
                    message: e
                } = Kt("RESTORE_WILL_OVERRIDE", this.name);
                throw this.logger.error(e), new Error(e)
            }
            this.cached = e, this.logger.debug(`Successfully Restored value for ${this.name}`), this.logger.trace({
                type: "method",
                method: "restore",
                value: this.values
            })
        } catch (e) {
            this.logger.debug(`Failed to Restore value for ${this.name}`), this.logger.error(e)
        }
    }
    isInitialized() {
        if (!this.initialized) {
            const {
                message: e
            } = Kt("NOT_INITIALIZED", this.name);
            throw new Error(e)
        }
    }
}
class ts {
    constructor(e, t) {
        this.core = e, this.logger = t, this.name = "pairing", this.version = "0.3", this.events = new n, this.initialized = !1, this.storagePrefix = Hn, this.ignoredPayloadTypes = [1], this.registeredMethods = [], this.init = async () => {
            this.initialized || (await this.pairings.init(), await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.initialized = !0, this.logger.trace("Initialized"))
        }, this.register = ({
            methods: e
        }) => {
            this.isInitialized(), this.registeredMethods = [...new Set([...this.registeredMethods, ...e])]
        }, this.create = async () => {
            this.isInitialized();
            const e = Qe(),
                t = await this.core.crypto.setSymKey(e),
                r = Nt(c.FIVE_MINUTES),
                n = {
                    protocol: "irn"
                },
                i = {
                    topic: t,
                    expiry: r,
                    relay: n,
                    active: !1
                },
                s = Mt({
                    protocol: this.core.protocol,
                    version: this.core.version,
                    topic: t,
                    symKey: e,
                    relay: n
                });
            return await this.pairings.set(t, i), await this.core.relayer.subscribe(t), this.core.expirer.set(t, r), {
                topic: t,
                uri: s
            }
        }, this.pair = async e => {
            this.isInitialized(), this.isValidPair(e);
            const {
                topic: t,
                symKey: r,
                relay: n
            } = function(e) {
                const t = e.indexOf(":"),
                    r = -1 !== e.indexOf("?") ? e.indexOf("?") : void 0,
                    n = e.substring(0, t),
                    i = e.substring(t + 1, r).split("@"),
                    s = typeof r < "u" ? e.substring(r) : "",
                    o = Ve.parse(s);
                return {
                    protocol: n,
                    topic: qt(i[0]),
                    version: parseInt(i[1], 10),
                    symKey: o.symKey,
                    relay: $t(o)
                }
            }(e.uri);
            if (this.pairings.keys.includes(t)) throw new Error(`Pairing already exists: ${t}`);
            if (this.core.crypto.hasKeys(t)) throw new Error(`Keychain already exists: ${t}`);
            const i = Nt(c.FIVE_MINUTES),
                s = {
                    topic: t,
                    relay: n,
                    expiry: i,
                    active: !1
                };
            return await this.pairings.set(t, s), await this.core.crypto.setSymKey(r, t), await this.core.relayer.subscribe(t, {
                relay: n
            }), this.core.expirer.set(t, i), e.activatePairing && await this.activate({
                topic: t
            }), s
        }, this.activate = async ({
            topic: e
        }) => {
            this.isInitialized();
            const t = Nt(c.THIRTY_DAYS);
            await this.pairings.update(e, {
                active: !0,
                expiry: t
            }), this.core.expirer.set(e, t)
        }, this.ping = async e => {
            this.isInitialized(), await this.isValidPing(e);
            const {
                topic: t
            } = e;
            if (this.pairings.keys.includes(t)) {
                const e = await this.sendRequest(t, "wc_pairingPing", {}),
                    {
                        done: r,
                        resolve: n,
                        reject: i
                    } = It();
                this.events.once(Tt("pairing_ping", e), (({
                    error: e
                }) => {
                    e ? i(e) : n()
                })), await r()
            }
        }, this.updateExpiry = async ({
            topic: e,
            expiry: t
        }) => {
            this.isInitialized(), await this.pairings.update(e, {
                expiry: t
            })
        }, this.updateMetadata = async ({
            topic: e,
            metadata: t
        }) => {
            this.isInitialized(), await this.pairings.update(e, {
                peerMetadata: t
            })
        }, this.getPairings = () => (this.isInitialized(), this.pairings.values), this.disconnect = async e => {
            this.isInitialized(), await this.isValidDisconnect(e);
            const {
                topic: t
            } = e;
            this.pairings.keys.includes(t) && (await this.sendRequest(t, "wc_pairingDelete", Ht("USER_DISCONNECTED")), await this.deletePairing(t))
        }, this.sendRequest = async (e, t, r) => {
            const n = w(t, r),
                i = await this.core.crypto.encode(e, n),
                s = yi[t].req;
            return this.core.history.set(e, n), this.core.relayer.publish(e, i, s), n.id
        }, this.sendResult = async (e, t, r) => {
            const n = L(e, r),
                i = await this.core.crypto.encode(t, n),
                s = await this.core.history.get(t, e),
                o = yi[s.request.method].res;
            await this.core.relayer.publish(t, i, o), await this.core.history.resolve(n)
        }, this.sendError = async (e, t, r) => {
            const n = R(e, r),
                i = await this.core.crypto.encode(t, n),
                s = await this.core.history.get(t, e),
                o = yi[s.request.method] ? yi[s.request.method].res : yi.unregistered_method.res;
            await this.core.relayer.publish(t, i, o), await this.core.history.resolve(n)
        }, this.deletePairing = async (e, t) => {
            await this.core.relayer.unsubscribe(e), await Promise.all([this.pairings.delete(e, Ht("USER_DISCONNECTED")), this.core.crypto.deleteSymKey(e), t ? Promise.resolve() : this.core.expirer.del(e)])
        }, this.cleanup = async () => {
            const e = this.pairings.getAll().filter((e => Rt(e.expiry)));
            await Promise.all(e.map((e => this.deletePairing(e.topic))))
        }, this.onRelayEventRequest = e => {
            const {
                topic: t,
                payload: r
            } = e;
            switch (r.method) {
                case "wc_pairingPing":
                    return this.onPairingPingRequest(t, r);
                case "wc_pairingDelete":
                    return this.onPairingDeleteRequest(t, r);
                default:
                    return this.onUnknownRpcMethodRequest(t, r)
            }
        }, this.onRelayEventResponse = async e => {
            const {
                topic: t,
                payload: r
            } = e, n = (await this.core.history.get(t, r.id)).request.method;
            return "wc_pairingPing" === n ? this.onPairingPingResponse(t, r) : this.onUnknownRpcMethodResponse(n)
        }, this.onPairingPingRequest = async (e, t) => {
            const {
                id: r
            } = t;
            try {
                this.isValidPing({
                    topic: e
                }), await this.sendResult(r, e, !0), this.events.emit("pairing_ping", {
                    id: r,
                    topic: e
                })
            } catch (n) {
                await this.sendError(r, e, n), this.logger.error(n)
            }
        }, this.onPairingPingResponse = (e, t) => {
            const {
                id: r
            } = t;
            setTimeout((() => {
                z(t) ? this.events.emit(Tt("pairing_ping", r), {}) : _(t) && this.events.emit(Tt("pairing_ping", r), {
                    error: t.error
                })
            }), 500)
        }, this.onPairingDeleteRequest = async (e, t) => {
            const {
                id: r
            } = t;
            try {
                this.isValidDisconnect({
                    topic: e
                }), await this.deletePairing(e), this.events.emit("pairing_delete", {
                    id: r,
                    topic: e
                })
            } catch (n) {
                await this.sendError(r, e, n), this.logger.error(n)
            }
        }, this.onUnknownRpcMethodRequest = async (e, t) => {
            const {
                id: r,
                method: n
            } = t;
            try {
                if (this.registeredMethods.includes(n)) return;
                const t = Ht("WC_METHOD_UNSUPPORTED", n);
                await this.sendError(r, e, t), this.logger.error(t)
            } catch (i) {
                await this.sendError(r, e, i), this.logger.error(i)
            }
        }, this.onUnknownRpcMethodResponse = e => {
            this.registeredMethods.includes(e) || this.logger.error(Ht("WC_METHOD_UNSUPPORTED", e))
        }, this.isValidPair = e => {
            if (!nr(e)) {
                const {
                    message: t
                } = Kt("MISSING_OR_INVALID", `pair() params: ${e}`);
                throw new Error(t)
            }
            if (! function(e) {
                    if (Gt(e, !1)) try {
                        return typeof new URL(e) < "u"
                    } catch {
                        return !1
                    }
                    return !1
                }(e.uri)) {
                const {
                    message: t
                } = Kt("MISSING_OR_INVALID", `pair() uri: ${e.uri}`);
                throw new Error(t)
            }
        }, this.isValidPing = async e => {
            if (!nr(e)) {
                const {
                    message: t
                } = Kt("MISSING_OR_INVALID", `ping() params: ${e}`);
                throw new Error(t)
            }
            const {
                topic: t
            } = e;
            await this.isValidPairingTopic(t)
        }, this.isValidDisconnect = async e => {
            if (!nr(e)) {
                const {
                    message: t
                } = Kt("MISSING_OR_INVALID", `disconnect() params: ${e}`);
                throw new Error(t)
            }
            const {
                topic: t
            } = e;
            await this.isValidPairingTopic(t)
        }, this.isValidPairingTopic = async e => {
            if (!Gt(e, !1)) {
                const {
                    message: t
                } = Kt("MISSING_OR_INVALID", `pairing topic should be a string: ${e}`);
                throw new Error(t)
            }
            if (!this.pairings.keys.includes(e)) {
                const {
                    message: t
                } = Kt("NO_MATCHING_KEY", `pairing topic doesn't exist: ${e}`);
                throw new Error(t)
            }
            if (Rt(this.pairings.get(e).expiry)) {
                await this.deletePairing(e);
                const {
                    message: t
                } = Kt("EXPIRED", `pairing topic: ${e}`);
                throw new Error(t)
            }
        }, this.core = e, this.logger = C(t, this.name), this.pairings = new es(this.core, this.logger, this.name, this.storagePrefix)
    }
    get context() {
        return A(this.logger)
    }
    isInitialized() {
        if (!this.initialized) {
            const {
                message: e
            } = Kt("NOT_INITIALIZED", this.name);
            throw new Error(e)
        }
    }
    registerRelayerEvents() {
        this.core.relayer.on(Zn, (async e => {
            const {
                topic: t,
                message: r
            } = e;
            if (!this.pairings.keys.includes(t) || this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(r))) return;
            const n = await this.core.crypto.decode(t, r);
            M(n) ? (this.core.history.set(t, n), this.onRelayEventRequest({
                topic: t,
                payload: n
            })) : E(n) && (await this.core.history.resolve(n), await this.onRelayEventResponse({
                topic: t,
                payload: n
            }), this.core.history.delete(t, n.id))
        }))
    }
    registerExpirerEvents() {
        this.core.expirer.on(Ii, (async e => {
            const {
                topic: t
            } = Ot(e.target);
            t && this.pairings.keys.includes(t) && (await this.deletePairing(t, !0), this.events.emit("pairing_expire", {
                topic: t
            }))
        }))
    }
}
class rs extends de {
    constructor(e, t) {
        super(e, t), this.core = e, this.logger = t, this.records = new Map, this.events = new r.EventEmitter, this.name = "history", this.version = "0.3", this.cached = [], this.initialized = !1, this.storagePrefix = Hn, this.init = async () => {
            this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((e => this.records.set(e.id, e))), this.cached = [], this.registerEventListeners(), this.initialized = !0)
        }, this.set = (e, t, r) => {
            if (this.isInitialized(), this.logger.debug("Setting JSON-RPC request history record"), this.logger.trace({
                    type: "method",
                    method: "set",
                    topic: e,
                    request: t,
                    chainId: r
                }), this.records.has(t.id)) return;
            const n = {
                id: t.id,
                topic: e,
                request: {
                    method: t.method,
                    params: t.params || null
                },
                chainId: r,
                expiry: Nt(c.THIRTY_DAYS)
            };
            this.records.set(n.id, n), this.events.emit(mi, n)
        }, this.resolve = async e => {
            if (this.isInitialized(), this.logger.debug("Updating JSON-RPC response history record"), this.logger.trace({
                    type: "method",
                    method: "update",
                    response: e
                }), !this.records.has(e.id)) return;
            const t = await this.getRecord(e.id);
            typeof t.response > "u" && (t.response = _(e) ? {
                error: e.error
            } : {
                result: e.result
            }, this.records.set(t.id, t), this.events.emit(vi, t))
        }, this.get = async (e, t) => (this.isInitialized(), this.logger.debug("Getting record"), this.logger.trace({
            type: "method",
            method: "get",
            topic: e,
            id: t
        }), await this.getRecord(t)), this.delete = (e, t) => {
            this.isInitialized(), this.logger.debug("Deleting record"), this.logger.trace({
                type: "method",
                method: "delete",
                id: t
            }), this.values.forEach((r => {
                if (r.topic === e) {
                    if (typeof t < "u" && r.id !== t) return;
                    this.records.delete(r.id), this.events.emit(wi, r)
                }
            }))
        }, this.exists = async (e, t) => (this.isInitialized(), !!this.records.has(t) && (await this.getRecord(t)).topic === e), this.on = (e, t) => {
            this.events.on(e, t)
        }, this.once = (e, t) => {
            this.events.once(e, t)
        }, this.off = (e, t) => {
            this.events.off(e, t)
        }, this.removeListener = (e, t) => {
            this.events.removeListener(e, t)
        }, this.logger = C(t, this.name)
    }
    get context() {
        return A(this.logger)
    }
    get storageKey() {
        return this.storagePrefix + this.version + "//" + this.name
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
        const e = [];
        return this.values.forEach((t => {
            if (typeof t.response < "u") return;
            const r = {
                topic: t.topic,
                request: w(t.request.method, t.request.params, t.id),
                chainId: t.chainId
            };
            return e.push(r)
        })), e
    }
    async setJsonRpcRecords(e) {
        await this.core.storage.setItem(this.storageKey, e)
    }
    async getJsonRpcRecords() {
        return await this.core.storage.getItem(this.storageKey)
    }
    getRecord(e) {
        this.isInitialized();
        const t = this.records.get(e);
        if (!t) {
            const {
                message: t
            } = Kt("NO_MATCHING_KEY", `${this.name}: ${e}`);
            throw new Error(t)
        }
        return t
    }
    async persist() {
        await this.setJsonRpcRecords(this.values), this.events.emit(bi)
    }
    async restore() {
        try {
            const e = await this.getJsonRpcRecords();
            if (typeof e > "u" || !e.length) return;
            if (this.records.size) {
                const {
                    message: e
                } = Kt("RESTORE_WILL_OVERRIDE", this.name);
                throw this.logger.error(e), new Error(e)
            }
            this.cached = e, this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({
                type: "method",
                method: "restore",
                records: this.values
            })
        } catch (e) {
            this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(e)
        }
    }
    registerEventListeners() {
        this.events.on(mi, (e => {
            const t = mi;
            this.logger.info(`Emitting ${t}`), this.logger.debug({
                type: "event",
                event: t,
                record: e
            }), this.persist()
        })), this.events.on(vi, (e => {
            const t = vi;
            this.logger.info(`Emitting ${t}`), this.logger.debug({
                type: "event",
                event: t,
                record: e
            }), this.persist()
        })), this.events.on(wi, (e => {
            const t = wi;
            this.logger.info(`Emitting ${t}`), this.logger.debug({
                type: "event",
                event: t,
                record: e
            }), this.persist()
        })), this.core.heartbeat.on(Z.HEARTBEAT_EVENTS.pulse, (() => {
            this.cleanup()
        }))
    }
    cleanup() {
        try {
            this.records.forEach((e => {
                c.toMiliseconds(e.expiry || 0) - Date.now() <= 0 && (this.logger.info(`Deleting expired history log: ${e.id}`), this.delete(e.topic, e.id))
            }))
        } catch (e) {
            this.logger.warn(e)
        }
    }
    isInitialized() {
        if (!this.initialized) {
            const {
                message: e
            } = Kt("NOT_INITIALIZED", this.name);
            throw new Error(e)
        }
    }
}
class ns extends we {
    constructor(e, t) {
        super(e, t), this.core = e, this.logger = t, this.expirations = new Map, this.events = new r.EventEmitter, this.name = "expirer", this.version = "0.3", this.cached = [], this.initialized = !1, this.storagePrefix = Hn, this.init = async () => {
            this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((e => this.expirations.set(e.target, e))), this.cached = [], this.registerEventListeners(), this.initialized = !0)
        }, this.has = e => {
            try {
                const t = this.formatTarget(e);
                return typeof this.getExpiration(t) < "u"
            } catch {
                return !1
            }
        }, this.set = (e, t) => {
            this.isInitialized();
            const r = this.formatTarget(e),
                n = {
                    target: r,
                    expiry: t
                };
            this.expirations.set(r, n), this.checkExpiry(r, n), this.events.emit(_i, {
                target: r,
                expiration: n
            })
        }, this.get = e => {
            this.isInitialized();
            const t = this.formatTarget(e);
            return this.getExpiration(t)
        }, this.del = e => {
            if (this.isInitialized(), this.has(e)) {
                const t = this.formatTarget(e),
                    r = this.getExpiration(t);
                this.expirations.delete(t), this.events.emit(Ei, {
                    target: t,
                    expiration: r
                })
            }
        }, this.on = (e, t) => {
            this.events.on(e, t)
        }, this.once = (e, t) => {
            this.events.once(e, t)
        }, this.off = (e, t) => {
            this.events.off(e, t)
        }, this.removeListener = (e, t) => {
            this.events.removeListener(e, t)
        }, this.logger = C(t, this.name)
    }
    get context() {
        return A(this.logger)
    }
    get storageKey() {
        return this.storagePrefix + this.version + "//" + this.name
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
    formatTarget(e) {
        if ("string" == typeof e) return function(e) {
            return Pt("topic", e)
        }(e);
        if ("number" == typeof e) return function(e) {
            return Pt("id", e)
        }(e);
        const {
            message: t
        } = Kt("UNKNOWN_TYPE", "Target type: " + typeof e);
        throw new Error(t)
    }
    async setExpirations(e) {
        await this.core.storage.setItem(this.storageKey, e)
    }
    async getExpirations() {
        return await this.core.storage.getItem(this.storageKey)
    }
    async persist() {
        await this.setExpirations(this.values), this.events.emit(Si)
    }
    async restore() {
        try {
            const e = await this.getExpirations();
            if (typeof e > "u" || !e.length) return;
            if (this.expirations.size) {
                const {
                    message: e
                } = Kt("RESTORE_WILL_OVERRIDE", this.name);
                throw this.logger.error(e), new Error(e)
            }
            this.cached = e, this.logger.debug(`Successfully Restored expirations for ${this.name}`), this.logger.trace({
                type: "method",
                method: "restore",
                expirations: this.values
            })
        } catch (e) {
            this.logger.debug(`Failed to Restore expirations for ${this.name}`), this.logger.error(e)
        }
    }
    getExpiration(e) {
        const t = this.expirations.get(e);
        if (!t) {
            const {
                message: t
            } = Kt("NO_MATCHING_KEY", `${this.name}: ${e}`);
            throw this.logger.error(t), new Error(t)
        }
        return t
    }
    checkExpiry(e, t) {
        const {
            expiry: r
        } = t;
        c.toMiliseconds(r) - Date.now() <= 0 && this.expire(e, t)
    }
    expire(e, t) {
        this.expirations.delete(e), this.events.emit(Ii, {
            target: e,
            expiration: t
        })
    }
    checkExpirations() {
        this.core.relayer.connected && this.expirations.forEach(((e, t) => this.checkExpiry(t, e)))
    }
    registerEventListeners() {
        this.core.heartbeat.on(Z.HEARTBEAT_EVENTS.pulse, (() => this.checkExpirations())), this.events.on(_i, (e => {
            const t = _i;
            this.logger.info(`Emitting ${t}`), this.logger.debug({
                type: "event",
                event: t,
                data: e
            }), this.persist()
        })), this.events.on(Ii, (e => {
            const t = Ii;
            this.logger.info(`Emitting ${t}`), this.logger.debug({
                type: "event",
                event: t,
                data: e
            }), this.persist()
        })), this.events.on(Ei, (e => {
            const t = Ei;
            this.logger.info(`Emitting ${t}`), this.logger.debug({
                type: "event",
                event: t,
                data: e
            }), this.persist()
        }))
    }
    isInitialized() {
        if (!this.initialized) {
            const {
                message: e
            } = Kt("NOT_INITIALIZED", this.name);
            throw new Error(e)
        }
    }
}
class is extends be {
    constructor(e, t) {
        super(e, t), this.projectId = e, this.logger = t, this.name = Pi, this.initialized = !1, this.init = async e => {
            gt() || !yt() || (this.verifyUrl = (null == e ? void 0 : e.verifyUrl) || Oi, await this.createIframe())
        }, this.register = async e => {
            var t;
            if (this.initialized || await this.init(), this.iframe) try {
                null == (t = this.iframe.contentWindow) || t.postMessage(e.attestationId, this.verifyUrl), this.logger.info(`postMessage sent: ${e.attestationId} ${this.verifyUrl}`)
            } catch {}
        }, this.resolve = async e => {
            var t;
            if (this.isDevEnv) return "";
            this.logger.info(`resolving attestation: ${e.attestationId}`);
            const r = this.startAbortTimer(c.FIVE_SECONDS),
                n = await fetch(`${this.verifyUrl}/attestation/${e.attestationId}`, {
                    signal: this.abortController.signal
                });
            return clearTimeout(r), 200 === n.status ? null == (t = await n.json()) ? void 0 : t.origin : ""
        }, this.createIframe = async () => {
            try {
                await Promise.race([new Promise(((e, t) => {
                    if (document.getElementById(Pi)) return e();
                    const r = document.createElement("iframe");
                    r.setAttribute("id", Pi), r.setAttribute("src", `${this.verifyUrl}/${this.projectId}`), r.style.display = "none", r.addEventListener("load", (() => {
                        this.initialized = !0, e()
                    })), r.addEventListener("error", (e => {
                        t(e)
                    })), document.body.append(r), this.iframe = r
                })), new Promise((e => {
                    setTimeout((() => e("iframe load timeout")), c.toMiliseconds(c.ONE_SECOND / 2))
                }))])
            } catch (e) {
                this.logger.error(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.error(e)
            }
        }, this.logger = C(t, this.name), this.verifyUrl = Oi, this.abortController = new AbortController, this.isDevEnv = ft() && dr.IS_VITEST
    }
    get context() {
        return A(this.logger)
    }
    startAbortTimer(e) {
        return setTimeout((() => this.abortController.abort()), c.toMiliseconds(e))
    }
}
var ss = Object.defineProperty,
    os = Object.getOwnPropertySymbols,
    as = Object.prototype.hasOwnProperty,
    cs = Object.prototype.propertyIsEnumerable,
    us = (e, t, r) => t in e ? ss(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : e[t] = r,
    hs = (e, t) => {
        for (var r in t || (t = {})) as.call(t, r) && us(e, r, t[r]);
        if (os)
            for (var r of os(t)) cs.call(t, r) && us(e, r, t[r]);
        return e
    };
class ls extends pe {
    constructor(e) {
        super(e), this.protocol = "wc", this.version = 2, this.name = Kn, this.events = new r.EventEmitter, this.initialized = !1, this.on = (e, t) => this.events.on(e, t), this.once = (e, t) => this.events.once(e, t), this.off = (e, t) => this.events.off(e, t), this.removeListener = (e, t) => this.events.removeListener(e, t), this.projectId = null == e ? void 0 : e.projectId, this.relayUrl = (null == e ? void 0 : e.relayUrl) || Qn;
        const t = typeof(null == e ? void 0 : e.logger) < "u" && "string" != typeof(null == e ? void 0 : e.logger) ? e.logger : j(D({
            level: (null == e ? void 0 : e.logger) || Wn
        }));
        this.logger = C(t, this.name), this.heartbeat = new Z.HeartBeat, this.crypto = new Ri(this, this.logger, null == e ? void 0 : e.keychain), this.history = new rs(this, this.logger), this.expirer = new ns(this, this.logger), this.storage = null != e && e.storage ? e.storage : new U(hs(hs({}, Fn), null == e ? void 0 : e.storageOptions)), this.relayer = new Bi({
            core: this,
            logger: this.logger,
            relayUrl: this.relayUrl,
            projectId: this.projectId
        }), this.pairing = new ts(this, this.logger), this.verify = new is(this.projectId || "", this.logger)
    }
    static async init(e) {
        const t = new ls(e);
        await t.initialize();
        const r = await t.crypto.getClientId();
        return await t.storage.setItem("WALLETCONNECT_CLIENT_ID", r), t
    }
    get context() {
        return A(this.logger)
    }
    async start() {
        this.initialized || await this.initialize()
    }
    async initialize() {
        this.logger.trace("Initialized");
        try {
            await this.crypto.init(), await this.history.init(), await this.expirer.init(), await this.relayer.init(), await this.heartbeat.init(), await this.pairing.init(), this.initialized = !0, this.logger.info("Core Initialization Success")
        } catch (e) {
            throw this.logger.warn(`Core Initialization Failure at epoch ${Date.now()}`, e), this.logger.error(e.message), e
        }
    }
}
const ps = ls,
    ds = "client",
    fs = `wc@2:${ds}:`,
    gs = ds,
    ys = "error",
    ms = "Proposal expired",
    vs = c.SEVEN_DAYS,
    ws = {
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
                ttl: c.THIRTY_SECONDS,
                prompt: !1,
                tag: 1114
            },
            res: {
                ttl: c.THIRTY_SECONDS,
                prompt: !1,
                tag: 1115
            }
        }
    },
    bs = {
        min: c.FIVE_MINUTES,
        max: c.SEVEN_DAYS
    },
    _s = "idle",
    Es = "active",
    Is = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest"];
var Ss = Object.defineProperty,
    Ps = Object.defineProperties,
    Os = Object.getOwnPropertyDescriptors,
    Ns = Object.getOwnPropertySymbols,
    Rs = Object.prototype.hasOwnProperty,
    Ts = Object.prototype.propertyIsEnumerable,
    xs = (e, t, r) => t in e ? Ss(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : e[t] = r,
    Cs = (e, t) => {
        for (var r in t || (t = {})) Rs.call(t, r) && xs(e, r, t[r]);
        if (Ns)
            for (var r of Ns(t)) Ts.call(t, r) && xs(e, r, t[r]);
        return e
    },
    As = (e, t) => Ps(e, Os(t));
class js extends Ee {
    constructor(e) {
        super(e), this.name = "engine", this.events = new n, this.initialized = !1, this.ignoredPayloadTypes = [1], this.requestQueue = {
            state: _s,
            requests: []
        }, this.requestQueueDelay = c.ONE_SECOND, this.init = async () => {
            this.initialized || (await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.client.core.pairing.register({
                methods: Object.keys(ws)
            }), this.initialized = !0, setTimeout((() => {
                this.requestQueue.requests = this.getPendingSessionRequests(), this.processRequestQueue()
            }), c.toMiliseconds(this.requestQueueDelay)))
        }, this.connect = async e => {
            this.isInitialized();
            const t = As(Cs({}, e), {
                requiredNamespaces: e.requiredNamespaces || {},
                optionalNamespaces: e.optionalNamespaces || {}
            });
            await this.isValidConnect(t);
            const {
                pairingTopic: r,
                requiredNamespaces: n,
                optionalNamespaces: i,
                sessionProperties: s,
                relays: o
            } = t;
            let a, u = r,
                h = !1;
            if (u && (h = this.client.core.pairing.pairings.get(u).active), !u || !h) {
                const {
                    topic: e,
                    uri: t
                } = await this.client.core.pairing.create();
                u = e, a = t
            }
            const l = await this.client.core.crypto.generateKeyPair(),
                p = Cs({
                    requiredNamespaces: n,
                    optionalNamespaces: i,
                    relays: o ? ? [{
                        protocol: "irn"
                    }],
                    proposer: {
                        publicKey: l,
                        metadata: this.client.metadata
                    }
                }, s && {
                    sessionProperties: s
                }),
                {
                    reject: d,
                    resolve: f,
                    done: g
                } = It(c.FIVE_MINUTES, ms);
            if (this.events.once(Tt("session_connect"), (async ({
                    error: e,
                    session: t
                }) => {
                    if (e) d(e);
                    else if (t) {
                        t.self.publicKey = l;
                        const e = As(Cs({}, t), {
                            requiredNamespaces: t.requiredNamespaces,
                            optionalNamespaces: t.optionalNamespaces
                        });
                        await this.client.session.set(t.topic, e), await this.setExpiry(t.topic, t.expiry), u && await this.client.core.pairing.updateMetadata({
                            topic: u,
                            metadata: t.peer.metadata
                        }), f(e)
                    }
                })), !u) {
                const {
                    message: e
                } = Kt("NO_MATCHING_KEY", `connect() pairing topic: ${u}`);
                throw new Error(e)
            }
            const y = await this.sendRequest(u, "wc_sessionPropose", p),
                m = Nt(c.FIVE_MINUTES);
            return await this.setProposal(y, Cs({
                id: y,
                expiry: m
            }, p)), {
                uri: a,
                approval: g
            }
        }, this.pair = async e => (this.isInitialized(), await this.client.core.pairing.pair(e)), this.approve = async e => {
            this.isInitialized(), await this.isValidApprove(e);
            const {
                id: t,
                relayProtocol: r,
                namespaces: n,
                sessionProperties: i
            } = e, s = this.client.proposal.get(t);
            let {
                pairingTopic: o,
                proposer: a,
                requiredNamespaces: c,
                optionalNamespaces: u
            } = s;
            o = o || "", Ft(c) || (c = function(e, t) {
                const r = tr(e, t);
                if (r) throw new Error(r.message);
                const n = {};
                for (const [i, s] of Object.entries(e)) n[i] = {
                    methods: s.methods,
                    events: s.events,
                    chains: s.accounts.map((e => `${e.split(":")[0]}:${e.split(":")[1]}`))
                };
                return n
            }(n, "approve()"));
            const h = await this.client.core.crypto.generateKeyPair(),
                l = a.publicKey,
                p = await this.client.core.crypto.generateSharedKey(h, l);
            o && t && (await this.client.core.pairing.updateMetadata({
                topic: o,
                metadata: a.metadata
            }), await this.sendResult(t, o, {
                relay: {
                    protocol: r ? ? "irn"
                },
                responderPublicKey: h
            }), await this.client.proposal.delete(t, Ht("USER_DISCONNECTED")), await this.client.core.pairing.activate({
                topic: o
            }));
            const d = Cs({
                relay: {
                    protocol: r ? ? "irn"
                },
                namespaces: n,
                requiredNamespaces: c,
                optionalNamespaces: u,
                pairingTopic: o,
                controller: {
                    publicKey: h,
                    metadata: this.client.metadata
                },
                expiry: Nt(vs)
            }, i && {
                sessionProperties: i
            });
            await this.client.core.relayer.subscribe(p), await this.sendRequest(p, "wc_sessionSettle", d);
            const f = As(Cs({}, d), {
                topic: p,
                pairingTopic: o,
                acknowledged: !1,
                self: d.controller,
                peer: {
                    publicKey: a.publicKey,
                    metadata: a.metadata
                },
                controller: h
            });
            return await this.client.session.set(p, f), await this.setExpiry(p, Nt(vs)), {
                topic: p,
                acknowledged: () => new Promise((e => setTimeout((() => e(this.client.session.get(p))), 500)))
            }
        }, this.reject = async e => {
            this.isInitialized(), await this.isValidReject(e);
            const {
                id: t,
                reason: r
            } = e, {
                pairingTopic: n
            } = this.client.proposal.get(t);
            n && (await this.sendError(t, n, r), await this.client.proposal.delete(t, Ht("USER_DISCONNECTED")))
        }, this.update = async e => {
            this.isInitialized(), await this.isValidUpdate(e);
            const {
                topic: t,
                namespaces: r
            } = e, n = await this.sendRequest(t, "wc_sessionUpdate", {
                namespaces: r
            }), {
                done: i,
                resolve: s,
                reject: o
            } = It();
            return this.events.once(Tt("session_update", n), (({
                error: e
            }) => {
                e ? o(e) : s()
            })), await this.client.session.update(t, {
                namespaces: r
            }), {
                acknowledged: i
            }
        }, this.extend = async e => {
            this.isInitialized(), await this.isValidExtend(e);
            const {
                topic: t
            } = e, r = await this.sendRequest(t, "wc_sessionExtend", {}), {
                done: n,
                resolve: i,
                reject: s
            } = It();
            return this.events.once(Tt("session_extend", r), (({
                error: e
            }) => {
                e ? s(e) : i()
            })), await this.setExpiry(t, Nt(vs)), {
                acknowledged: n
            }
        }, this.request = async t => {
            this.isInitialized(), await this.isValidRequest(t);
            const {
                chainId: r,
                request: n,
                topic: i,
                expiry: s
            } = t, o = await this.sendRequest(i, "wc_sessionRequest", {
                request: n,
                chainId: r
            }, s), {
                done: a,
                resolve: c,
                reject: u
            } = It(s);
            this.events.once(Tt("session_request", o), (({
                error: e,
                result: t
            }) => {
                e ? u(e) : c(t)
            })), this.client.events.emit("session_request_sent", {
                topic: i,
                request: n,
                chainId: r,
                id: o
            });
            return async function({
                id: t,
                topic: r,
                wcDeepLink: n
            }) {
                try {
                    if (!n) return;
                    const e = "string" == typeof n ? JSON.parse(n) : n;
                    let i = null == e ? void 0 : e.href;
                    if ("string" != typeof i) return;
                    i.endsWith("/") && (i = i.slice(0, -1));
                    const s = `${i}/wc?requestId=${t}&sessionTopic=${r}`,
                        o = mt();
                    o === lt ? s.startsWith("https://") ? window.open(s, "_blank", "noreferrer noopener") : window.open(s, "_self", "noreferrer noopener") : o === ut && typeof(null == global ? void 0 : global.Linking) < "u" && await global.Linking.openURL(s)
                } catch (e) {
                    console.error(e)
                }
            }({
                id: o,
                topic: i,
                wcDeepLink: await this.client.core.storage.getItem("WALLETCONNECT_DEEPLINK_CHOICE")
            }), await a()
        }, this.respond = async e => {
            this.isInitialized(), await this.isValidRespond(e);
            const {
                topic: t,
                response: r
            } = e, {
                id: n
            } = r;
            z(r) ? await this.sendResult(n, t, r.result) : _(r) && await this.sendError(n, t, r.error), this.cleanupAfterResponse(e)
        }, this.ping = async e => {
            this.isInitialized(), await this.isValidPing(e);
            const {
                topic: t
            } = e;
            if (this.client.session.keys.includes(t)) {
                const e = await this.sendRequest(t, "wc_sessionPing", {}),
                    {
                        done: r,
                        resolve: n,
                        reject: i
                    } = It();
                this.events.once(Tt("session_ping", e), (({
                    error: e
                }) => {
                    e ? i(e) : n()
                })), await r()
            } else this.client.core.pairing.pairings.keys.includes(t) && await this.client.core.pairing.ping({
                topic: t
            })
        }, this.emit = async e => {
            this.isInitialized(), await this.isValidEmit(e);
            const {
                topic: t,
                event: r,
                chainId: n
            } = e;
            await this.sendRequest(t, "wc_sessionEvent", {
                event: r,
                chainId: n
            })
        }, this.disconnect = async e => {
            this.isInitialized(), await this.isValidDisconnect(e);
            const {
                topic: t
            } = e;
            if (this.client.session.keys.includes(t)) {
                const e = b().toString();
                let r;
                const n = t => {
                    (null == t ? void 0 : t.id.toString()) === e && (this.client.core.relayer.events.removeListener(Xn, n), r())
                };
                await Promise.all([new Promise((e => {
                    r = e, this.client.core.relayer.on(Xn, n)
                })), this.sendRequest(t, "wc_sessionDelete", Ht("USER_DISCONNECTED"), void 0, e)]), await this.deleteSession(t)
            } else await this.client.core.pairing.disconnect({
                topic: t
            })
        }, this.find = e => (this.isInitialized(), this.client.session.getAll().filter((t => function(e, t) {
            const {
                requiredNamespaces: r
            } = t, n = Object.keys(e.namespaces), i = Object.keys(r);
            let s = !0;
            return !!bt(i, n) && (n.forEach((t => {
                const {
                    accounts: n,
                    methods: i,
                    events: o
                } = e.namespaces[t], a = Lt(n), c = r[t];
                bt(We(t, c), a) && bt(c.methods, i) && bt(c.events, o) || (s = !1)
            })), s)
        }(t, e)))), this.getPendingSessionRequests = () => (this.isInitialized(), this.client.pendingRequest.getAll()), this.cleanupDuplicatePairings = async e => {
            if (e.pairingTopic) try {
                const t = this.client.core.pairing.pairings.get(e.pairingTopic),
                    r = this.client.core.pairing.pairings.getAll().filter((r => {
                        var n, i;
                        return (null == (n = r.peerMetadata) ? void 0 : n.url) && (null == (i = r.peerMetadata) ? void 0 : i.url) === e.peer.metadata.url && r.topic && r.topic !== t.topic
                    }));
                if (0 === r.length) return;
                this.client.logger.info(`Cleaning up ${r.length} duplicate pairing(s)`), await Promise.all(r.map((e => this.client.core.pairing.disconnect({
                    topic: e.topic
                })))), this.client.logger.info("Duplicate pairings clean up finished")
            } catch (t) {
                this.client.logger.error(t)
            }
        }, this.deleteSession = async (e, t) => {
            const {
                self: r
            } = this.client.session.get(e);
            await this.client.core.relayer.unsubscribe(e), this.client.session.delete(e, Ht("USER_DISCONNECTED")), this.client.core.crypto.keychain.has(r.publicKey) && await this.client.core.crypto.deleteKeyPair(r.publicKey), this.client.core.crypto.keychain.has(e) && await this.client.core.crypto.deleteSymKey(e), t || this.client.core.expirer.del(e)
        }, this.deleteProposal = async (e, t) => {
            await Promise.all([this.client.proposal.delete(e, Ht("USER_DISCONNECTED")), t ? Promise.resolve() : this.client.core.expirer.del(e)])
        }, this.deletePendingSessionRequest = async (e, t, r = !1) => {
            await Promise.all([this.client.pendingRequest.delete(e, t), r ? Promise.resolve() : this.client.core.expirer.del(e)]), this.requestQueue.requests = this.requestQueue.requests.filter((t => t.id !== e)), r && (this.requestQueue.state = _s)
        }, this.setExpiry = async (e, t) => {
            this.client.session.keys.includes(e) && await this.client.session.update(e, {
                expiry: t
            }), this.client.core.expirer.set(e, t)
        }, this.setProposal = async (e, t) => {
            await this.client.proposal.set(e, t), this.client.core.expirer.set(e, t.expiry)
        }, this.setPendingSessionRequest = async e => {
            const t = ws.wc_sessionRequest.req.ttl,
                {
                    id: r,
                    topic: n,
                    params: i
                } = e;
            await this.client.pendingRequest.set(r, {
                id: r,
                topic: n,
                params: i
            }), t && this.client.core.expirer.set(r, Nt(t))
        }, this.sendRequest = async (e, t, r, n, i) => {
            const s = w(t, r);
            if (yt() && Is.includes(t)) {
                const e = Ye(JSON.stringify(s));
                await this.client.core.verify.register({
                    attestationId: e
                })
            }
            const o = await this.client.core.crypto.encode(e, s),
                a = ws[t].req;
            return n && (a.ttl = n), i && (a.id = i), this.client.core.history.set(e, s), this.client.core.relayer.publish(e, o, a), s.id
        }, this.sendResult = async (e, t, r) => {
            const n = L(e, r),
                i = await this.client.core.crypto.encode(t, n),
                s = await this.client.core.history.get(t, e),
                o = ws[s.request.method].res;
            this.client.core.relayer.publish(t, i, o), await this.client.core.history.resolve(n)
        }, this.sendError = async (e, t, r) => {
            const n = R(e, r),
                i = await this.client.core.crypto.encode(t, n),
                s = await this.client.core.history.get(t, e),
                o = ws[s.request.method].res;
            this.client.core.relayer.publish(t, i, o), await this.client.core.history.resolve(n)
        }, this.cleanup = async () => {
            const e = [],
                t = [];
            this.client.session.getAll().forEach((t => {
                Rt(t.expiry) && e.push(t.topic)
            })), this.client.proposal.getAll().forEach((e => {
                Rt(e.expiry) && t.push(e.id)
            })), await Promise.all([...e.map((e => this.deleteSession(e))), ...t.map((e => this.deleteProposal(e)))])
        }, this.onRelayEventRequest = e => {
            const {
                topic: t,
                payload: r
            } = e, n = r.method;
            switch (n) {
                case "wc_sessionPropose":
                    return this.onSessionProposeRequest(t, r);
                case "wc_sessionSettle":
                    return this.onSessionSettleRequest(t, r);
                case "wc_sessionUpdate":
                    return this.onSessionUpdateRequest(t, r);
                case "wc_sessionExtend":
                    return this.onSessionExtendRequest(t, r);
                case "wc_sessionPing":
                    return this.onSessionPingRequest(t, r);
                case "wc_sessionDelete":
                    return this.onSessionDeleteRequest(t, r);
                case "wc_sessionRequest":
                    return this.onSessionRequest(t, r);
                case "wc_sessionEvent":
                    return this.onSessionEventRequest(t, r);
                default:
                    return this.client.logger.info(`Unsupported request method ${n}`)
            }
        }, this.onRelayEventResponse = async e => {
            const {
                topic: t,
                payload: r
            } = e, n = (await this.client.core.history.get(t, r.id)).request.method;
            switch (n) {
                case "wc_sessionPropose":
                    return this.onSessionProposeResponse(t, r);
                case "wc_sessionSettle":
                    return this.onSessionSettleResponse(t, r);
                case "wc_sessionUpdate":
                    return this.onSessionUpdateResponse(t, r);
                case "wc_sessionExtend":
                    return this.onSessionExtendResponse(t, r);
                case "wc_sessionPing":
                    return this.onSessionPingResponse(t, r);
                case "wc_sessionRequest":
                    return this.onSessionRequestResponse(t, r);
                default:
                    return this.client.logger.info(`Unsupported response method ${n}`)
            }
        }, this.onRelayEventUnknownPayload = e => {
            const {
                topic: t
            } = e, {
                message: r
            } = Kt("MISSING_OR_INVALID", `Decoded payload on topic ${t} is not identifiable as a JSON-RPC request or a response.`);
            throw new Error(r)
        }, this.onSessionProposeRequest = async (e, t) => {
            const {
                params: r,
                id: n
            } = t;
            try {
                this.isValidConnect(Cs({}, t.params));
                const i = Nt(c.FIVE_MINUTES),
                    s = Cs({
                        id: n,
                        pairingTopic: e,
                        expiry: i
                    }, r);
                await this.setProposal(n, s);
                const o = Ye(JSON.stringify(t)),
                    a = await this.getVerifyContext(o, s.proposer.metadata);
                this.client.events.emit("session_proposal", {
                    id: n,
                    params: s,
                    verifyContext: a
                })
            } catch (i) {
                await this.sendError(n, e, i), this.client.logger.error(i)
            }
        }, this.onSessionProposeResponse = async (e, t) => {
            const {
                id: r
            } = t;
            if (z(t)) {
                const {
                    result: n
                } = t;
                this.client.logger.trace({
                    type: "method",
                    method: "onSessionProposeResponse",
                    result: n
                });
                const i = this.client.proposal.get(r);
                this.client.logger.trace({
                    type: "method",
                    method: "onSessionProposeResponse",
                    proposal: i
                });
                const s = i.proposer.publicKey;
                this.client.logger.trace({
                    type: "method",
                    method: "onSessionProposeResponse",
                    selfPublicKey: s
                });
                const o = n.responderPublicKey;
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
                    topic: e
                })
            } else _(t) && (await this.client.proposal.delete(r, Ht("USER_DISCONNECTED")), this.events.emit(Tt("session_connect"), {
                error: t.error
            }))
        }, this.onSessionSettleRequest = async (e, t) => {
            const {
                id: r,
                params: n
            } = t;
            try {
                this.isValidSessionSettleRequest(n);
                const {
                    relay: r,
                    controller: i,
                    expiry: s,
                    namespaces: o,
                    requiredNamespaces: a,
                    optionalNamespaces: c,
                    sessionProperties: u,
                    pairingTopic: h
                } = t.params, l = Cs({
                    topic: e,
                    relay: r,
                    expiry: s,
                    namespaces: o,
                    acknowledged: !0,
                    pairingTopic: h,
                    requiredNamespaces: a,
                    optionalNamespaces: c,
                    controller: i.publicKey,
                    self: {
                        publicKey: "",
                        metadata: this.client.metadata
                    },
                    peer: {
                        publicKey: i.publicKey,
                        metadata: i.metadata
                    }
                }, u && {
                    sessionProperties: u
                });
                await this.sendResult(t.id, e, !0), this.events.emit(Tt("session_connect"), {
                    session: l
                }), this.cleanupDuplicatePairings(l)
            } catch (i) {
                await this.sendError(r, e, i), this.client.logger.error(i)
            }
        }, this.onSessionSettleResponse = async (e, t) => {
            const {
                id: r
            } = t;
            z(t) ? (await this.client.session.update(e, {
                acknowledged: !0
            }), this.events.emit(Tt("session_approve", r), {})) : _(t) && (await this.client.session.delete(e, Ht("USER_DISCONNECTED")), this.events.emit(Tt("session_approve", r), {
                error: t.error
            }))
        }, this.onSessionUpdateRequest = async (e, t) => {
            const {
                params: r,
                id: n
            } = t;
            try {
                this.isValidUpdate(Cs({
                    topic: e
                }, r)), await this.client.session.update(e, {
                    namespaces: r.namespaces
                }), await this.sendResult(n, e, !0), this.client.events.emit("session_update", {
                    id: n,
                    topic: e,
                    params: r
                })
            } catch (i) {
                await this.sendError(n, e, i), this.client.logger.error(i)
            }
        }, this.onSessionUpdateResponse = (e, t) => {
            const {
                id: r
            } = t;
            z(t) ? this.events.emit(Tt("session_update", r), {}) : _(t) && this.events.emit(Tt("session_update", r), {
                error: t.error
            })
        }, this.onSessionExtendRequest = async (e, t) => {
            const {
                id: r
            } = t;
            try {
                this.isValidExtend({
                    topic: e
                }), await this.setExpiry(e, Nt(vs)), await this.sendResult(r, e, !0), this.client.events.emit("session_extend", {
                    id: r,
                    topic: e
                })
            } catch (n) {
                await this.sendError(r, e, n), this.client.logger.error(n)
            }
        }, this.onSessionExtendResponse = (e, t) => {
            const {
                id: r
            } = t;
            z(t) ? this.events.emit(Tt("session_extend", r), {}) : _(t) && this.events.emit(Tt("session_extend", r), {
                error: t.error
            })
        }, this.onSessionPingRequest = async (e, t) => {
            const {
                id: r
            } = t;
            try {
                this.isValidPing({
                    topic: e
                }), await this.sendResult(r, e, !0), this.client.events.emit("session_ping", {
                    id: r,
                    topic: e
                })
            } catch (n) {
                await this.sendError(r, e, n), this.client.logger.error(n)
            }
        }, this.onSessionPingResponse = (e, t) => {
            const {
                id: r
            } = t;
            setTimeout((() => {
                z(t) ? this.events.emit(Tt("session_ping", r), {}) : _(t) && this.events.emit(Tt("session_ping", r), {
                    error: t.error
                })
            }), 500)
        }, this.onSessionDeleteRequest = async (e, t) => {
            const {
                id: r
            } = t;
            try {
                this.isValidDisconnect({
                    topic: e,
                    reason: t.params
                }), await Promise.all([new Promise((t => {
                    this.client.core.relayer.once(si, (async () => {
                        t(await this.deleteSession(e))
                    }))
                })), this.sendResult(r, e, !0)]), this.client.events.emit("session_delete", {
                    id: r,
                    topic: e
                })
            } catch (n) {
                this.client.logger.error(n)
            }
        }, this.onSessionRequest = async (e, t) => {
            const {
                id: r,
                params: n
            } = t;
            try {
                this.isValidRequest(Cs({
                    topic: e
                }, n)), await this.setPendingSessionRequest({
                    id: r,
                    topic: e,
                    params: n
                }), this.addRequestToQueue({
                    id: r,
                    topic: e,
                    params: n
                }), await this.processRequestQueue()
            } catch (i) {
                await this.sendError(r, e, i), this.client.logger.error(i)
            }
        }, this.onSessionRequestResponse = (e, t) => {
            const {
                id: r
            } = t;
            z(t) ? this.events.emit(Tt("session_request", r), {
                result: t.result
            }) : _(t) && this.events.emit(Tt("session_request", r), {
                error: t.error
            })
        }, this.onSessionEventRequest = async (e, t) => {
            const {
                id: r,
                params: n
            } = t;
            try {
                this.isValidEmit(Cs({
                    topic: e
                }, n)), this.client.events.emit("session_event", {
                    id: r,
                    topic: e,
                    params: n
                })
            } catch (i) {
                await this.sendError(r, e, i), this.client.logger.error(i)
            }
        }, this.addRequestToQueue = e => {
            this.requestQueue.requests.push(e)
        }, this.cleanupAfterResponse = e => {
            this.deletePendingSessionRequest(e.response.id, {
                message: "fulfilled",
                code: 0
            }), setTimeout((() => {
                this.requestQueue.state = _s, this.processRequestQueue()
            }), c.toMiliseconds(this.requestQueueDelay))
        }, this.processRequestQueue = async () => {
            if (this.requestQueue.state === Es) return void this.client.logger.info("session request queue is already active.");
            const e = this.requestQueue.requests[0];
            if (e) try {
                const {
                    id: t,
                    topic: r,
                    params: n
                } = e, i = Ye(JSON.stringify({
                    id: t,
                    params: n
                })), s = this.client.session.get(r), o = await this.getVerifyContext(i, s.peer.metadata);
                this.requestQueue.state = Es, this.client.events.emit("session_request", {
                    id: t,
                    topic: r,
                    params: n,
                    verifyContext: o
                })
            } catch (t) {
                this.client.logger.error(t)
            } else this.client.logger.info("session request queue is empty.")
        }, this.isValidConnect = async e => {
            if (!nr(e)) {
                const {
                    message: t
                } = Kt("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(e)}`);
                throw new Error(t)
            }
            const {
                pairingTopic: t,
                requiredNamespaces: r,
                optionalNamespaces: n,
                sessionProperties: i,
                relays: s
            } = e;
            if (Bt(t) || await this.isValidPairingTopic(t), ! function(e) {
                    let t = !1;
                    return e ? e && Wt(e) && e.length && e.forEach((e => {
                        t = rr(e)
                    })) : t = !0, t
                }(s)) {
                const {
                    message: e
                } = Kt("MISSING_OR_INVALID", `connect() relays: ${s}`);
                throw new Error(e)
            }!Bt(r) && 0 !== Ft(r) && this.validateNamespaces(r, "requiredNamespaces"), !Bt(n) && 0 !== Ft(n) && this.validateNamespaces(n, "optionalNamespaces"), Bt(i) || this.validateSessionProps(i, "sessionProperties")
        }, this.validateNamespaces = (e, t) => {
            const r = function(e, t, r) {
                let n = null;
                if (e && Ft(e)) {
                    const i = er(e, t);
                    i && (n = i);
                    const s = Zt(e, t, r);
                    s && (n = s)
                } else n = Kt("MISSING_OR_INVALID", `${t}, ${r} should be an object with data`);
                return n
            }(e, "connect()", t);
            if (r) throw new Error(r.message)
        }, this.isValidApprove = async e => {
            if (!nr(e)) throw new Error(Kt("MISSING_OR_INVALID", `approve() params: ${e}`).message);
            const {
                id: t,
                namespaces: r,
                relayProtocol: n,
                sessionProperties: i
            } = e;
            await this.isValidProposalId(t);
            const s = this.client.proposal.get(t),
                o = tr(r, "approve()");
            if (o) throw new Error(o.message);
            const a = ar(s.requiredNamespaces, r, "approve()");
            if (a) throw new Error(a.message);
            if (!Gt(n, !0)) {
                const {
                    message: e
                } = Kt("MISSING_OR_INVALID", `approve() relayProtocol: ${n}`);
                throw new Error(e)
            }
            Bt(i) || this.validateSessionProps(i, "sessionProperties")
        }, this.isValidReject = async e => {
            if (!nr(e)) {
                const {
                    message: t
                } = Kt("MISSING_OR_INVALID", `reject() params: ${e}`);
                throw new Error(t)
            }
            const {
                id: t,
                reason: r
            } = e;
            if (await this.isValidProposalId(t), ! function(e) {
                    return !!(e && "object" == typeof e && e.code && Jt(e.code) && e.message && Gt(e.message, !1))
                }(r)) {
                const {
                    message: e
                } = Kt("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(r)}`);
                throw new Error(e)
            }
        }, this.isValidSessionSettleRequest = e => {
            if (!nr(e)) {
                const {
                    message: t
                } = Kt("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${e}`);
                throw new Error(t)
            }
            const {
                relay: t,
                controller: r,
                namespaces: n,
                expiry: i
            } = e;
            if (!rr(t)) {
                const {
                    message: e
                } = Kt("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
                throw new Error(e)
            }
            const s = function(e, t) {
                let r = null;
                return Gt(null == e ? void 0 : e.publicKey, !1) || (r = Kt("MISSING_OR_INVALID", `${t} controller public key should be a string`)), r
            }(r, "onSessionSettleRequest()");
            if (s) throw new Error(s.message);
            const o = tr(n, "onSessionSettleRequest()");
            if (o) throw new Error(o.message);
            if (Rt(i)) {
                const {
                    message: e
                } = Kt("EXPIRED", "onSessionSettleRequest()");
                throw new Error(e)
            }
        }, this.isValidUpdate = async e => {
            if (!nr(e)) {
                const {
                    message: t
                } = Kt("MISSING_OR_INVALID", `update() params: ${e}`);
                throw new Error(t)
            }
            const {
                topic: t,
                namespaces: r
            } = e;
            await this.isValidSessionTopic(t);
            const n = this.client.session.get(t),
                i = tr(r, "update()");
            if (i) throw new Error(i.message);
            const s = ar(n.requiredNamespaces, r, "update()");
            if (s) throw new Error(s.message)
        }, this.isValidExtend = async e => {
            if (!nr(e)) {
                const {
                    message: t
                } = Kt("MISSING_OR_INVALID", `extend() params: ${e}`);
                throw new Error(t)
            }
            const {
                topic: t
            } = e;
            await this.isValidSessionTopic(t)
        }, this.isValidRequest = async e => {
            if (!nr(e)) {
                const {
                    message: t
                } = Kt("MISSING_OR_INVALID", `request() params: ${e}`);
                throw new Error(t)
            }
            const {
                topic: t,
                request: r,
                chainId: n,
                expiry: i
            } = e;
            await this.isValidSessionTopic(t);
            const {
                namespaces: s
            } = this.client.session.get(t);
            if (!ir(s, n)) {
                const {
                    message: e
                } = Kt("MISSING_OR_INVALID", `request() chainId: ${n}`);
                throw new Error(e)
            }
            if (! function(e) {
                    return !(Bt(e) || !Gt(e.method, !1))
                }(r)) {
                const {
                    message: e
                } = Kt("MISSING_OR_INVALID", `request() ${JSON.stringify(r)}`);
                throw new Error(e)
            }
            if (!sr(s, n, r.method)) {
                const {
                    message: e
                } = Kt("MISSING_OR_INVALID", `request() method: ${r.method}`);
                throw new Error(e)
            }
            if (i && ! function(e, t) {
                    return Jt(e) && e <= t.max && e >= t.min
                }(i, bs)) {
                const {
                    message: e
                } = Kt("MISSING_OR_INVALID", `request() expiry: ${i}. Expiry must be a number (in seconds) between ${bs.min} and ${bs.max}`);
                throw new Error(e)
            }
        }, this.isValidRespond = async e => {
            if (!nr(e)) {
                const {
                    message: t
                } = Kt("MISSING_OR_INVALID", `respond() params: ${e}`);
                throw new Error(t)
            }
            const {
                topic: t,
                response: r
            } = e;
            if (await this.isValidSessionTopic(t), ! function(e) {
                    return !(Bt(e) || Bt(e.result) && Bt(e.error) || !Jt(e.id) || !Gt(e.jsonrpc, !1))
                }(r)) {
                const {
                    message: e
                } = Kt("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(r)}`);
                throw new Error(e)
            }
        }, this.isValidPing = async e => {
            if (!nr(e)) {
                const {
                    message: t
                } = Kt("MISSING_OR_INVALID", `ping() params: ${e}`);
                throw new Error(t)
            }
            const {
                topic: t
            } = e;
            await this.isValidSessionOrPairingTopic(t)
        }, this.isValidEmit = async e => {
            if (!nr(e)) {
                const {
                    message: t
                } = Kt("MISSING_OR_INVALID", `emit() params: ${e}`);
                throw new Error(t)
            }
            const {
                topic: t,
                event: r,
                chainId: n
            } = e;
            await this.isValidSessionTopic(t);
            const {
                namespaces: i
            } = this.client.session.get(t);
            if (!ir(i, n)) {
                const {
                    message: e
                } = Kt("MISSING_OR_INVALID", `emit() chainId: ${n}`);
                throw new Error(e)
            }
            if (! function(e) {
                    return !(Bt(e) || !Gt(e.name, !1))
                }(r)) {
                const {
                    message: e
                } = Kt("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(r)}`);
                throw new Error(e)
            }
            if (!or(i, n, r.name)) {
                const {
                    message: e
                } = Kt("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(r)}`);
                throw new Error(e)
            }
        }, this.isValidDisconnect = async e => {
            if (!nr(e)) {
                const {
                    message: t
                } = Kt("MISSING_OR_INVALID", `disconnect() params: ${e}`);
                throw new Error(t)
            }
            const {
                topic: t
            } = e;
            await this.isValidSessionOrPairingTopic(t)
        }, this.getVerifyContext = async (e, t) => {
            const r = {
                verified: {
                    verifyUrl: t.verifyUrl || "",
                    validation: "UNKNOWN",
                    origin: t.url || ""
                }
            };
            try {
                const n = await this.client.core.verify.resolve({
                    attestationId: e,
                    verifyUrl: t.verifyUrl
                });
                n && (r.verified.origin = n, r.verified.validation = n === t.url ? "VALID" : "INVALID")
            } catch (n) {
                this.client.logger.error(n)
            }
            return this.client.logger.info(`Verify context: ${JSON.stringify(r)}`), r
        }, this.validateSessionProps = (e, t) => {
            Object.values(e).forEach((e => {
                if (!Gt(e, !1)) {
                    const {
                        message: r
                    } = Kt("MISSING_OR_INVALID", `${t} must be in Record<string, string> format. Received: ${JSON.stringify(e)}`);
                    throw new Error(r)
                }
            }))
        }
    }
    isInitialized() {
        if (!this.initialized) {
            const {
                message: e
            } = Kt("NOT_INITIALIZED", this.name);
            throw new Error(e)
        }
    }
    registerRelayerEvents() {
        this.client.core.relayer.on(Zn, (async e => {
            const {
                topic: t,
                message: r
            } = e;
            if (this.ignoredPayloadTypes.includes(this.client.core.crypto.getPayloadType(r))) return;
            const n = await this.client.core.crypto.decode(t, r);
            M(n) ? (this.client.core.history.set(t, n), this.onRelayEventRequest({
                topic: t,
                payload: n
            })) : E(n) ? (await this.client.core.history.resolve(n), await this.onRelayEventResponse({
                topic: t,
                payload: n
            }), this.client.core.history.delete(t, n.id)) : this.onRelayEventUnknownPayload({
                topic: t,
                payload: n
            })
        }))
    }
    registerExpirerEvents() {
        this.client.core.expirer.on(Ii, (async e => {
            const {
                topic: t,
                id: r
            } = Ot(e.target);
            if (r && this.client.pendingRequest.keys.includes(r)) return await this.deletePendingSessionRequest(r, Kt("EXPIRED"), !0);
            t ? this.client.session.keys.includes(t) && (await this.deleteSession(t, !0), this.client.events.emit("session_expire", {
                topic: t
            })) : r && (await this.deleteProposal(r, !0), this.client.events.emit("proposal_expire", {
                id: r
            }))
        }))
    }
    isValidPairingTopic(e) {
        if (!Gt(e, !1)) {
            const {
                message: t
            } = Kt("MISSING_OR_INVALID", `pairing topic should be a string: ${e}`);
            throw new Error(t)
        }
        if (!this.client.core.pairing.pairings.keys.includes(e)) {
            const {
                message: t
            } = Kt("NO_MATCHING_KEY", `pairing topic doesn't exist: ${e}`);
            throw new Error(t)
        }
        if (Rt(this.client.core.pairing.pairings.get(e).expiry)) {
            const {
                message: t
            } = Kt("EXPIRED", `pairing topic: ${e}`);
            throw new Error(t)
        }
    }
    async isValidSessionTopic(e) {
        if (!Gt(e, !1)) {
            const {
                message: t
            } = Kt("MISSING_OR_INVALID", `session topic should be a string: ${e}`);
            throw new Error(t)
        }
        if (!this.client.session.keys.includes(e)) {
            const {
                message: t
            } = Kt("NO_MATCHING_KEY", `session topic doesn't exist: ${e}`);
            throw new Error(t)
        }
        if (Rt(this.client.session.get(e).expiry)) {
            await this.deleteSession(e);
            const {
                message: t
            } = Kt("EXPIRED", `session topic: ${e}`);
            throw new Error(t)
        }
    }
    async isValidSessionOrPairingTopic(e) {
        if (this.client.session.keys.includes(e)) await this.isValidSessionTopic(e);
        else {
            if (!this.client.core.pairing.pairings.keys.includes(e)) {
                if (Gt(e, !1)) {
                    const {
                        message: t
                    } = Kt("NO_MATCHING_KEY", `session or pairing topic doesn't exist: ${e}`);
                    throw new Error(t)
                } {
                    const {
                        message: t
                    } = Kt("MISSING_OR_INVALID", `session or pairing topic should be a string: ${e}`);
                    throw new Error(t)
                }
            }
            this.isValidPairingTopic(e)
        }
    }
    async isValidProposalId(e) {
        if ("number" != typeof e) {
            const {
                message: t
            } = Kt("MISSING_OR_INVALID", `proposal id should be a number: ${e}`);
            throw new Error(t)
        }
        if (!this.client.proposal.keys.includes(e)) {
            const {
                message: t
            } = Kt("NO_MATCHING_KEY", `proposal id doesn't exist: ${e}`);
            throw new Error(t)
        }
        if (Rt(this.client.proposal.get(e).expiry)) {
            await this.deleteProposal(e);
            const {
                message: t
            } = Kt("EXPIRED", `proposal id: ${e}`);
            throw new Error(t)
        }
    }
}
class Ds extends es {
    constructor(e, t) {
        super(e, t, "proposal", fs), this.core = e, this.logger = t
    }
}
class Us extends es {
    constructor(e, t) {
        super(e, t, "session", fs), this.core = e, this.logger = t
    }
}
class ks extends es {
    constructor(e, t) {
        super(e, t, "request", fs, (e => e.id)), this.core = e, this.logger = t
    }
}
let $s = class e extends _e {
    constructor(e) {
        super(e), this.protocol = "wc", this.version = 2, this.name = gs, this.events = new r.EventEmitter, this.on = (e, t) => this.events.on(e, t), this.once = (e, t) => this.events.once(e, t), this.off = (e, t) => this.events.off(e, t), this.removeListener = (e, t) => this.events.removeListener(e, t), this.removeAllListeners = e => this.events.removeAllListeners(e), this.connect = async e => {
            try {
                return await this.engine.connect(e)
            } catch (t) {
                throw this.logger.error(t.message), t
            }
        }, this.pair = async e => {
            try {
                return await this.engine.pair(e)
            } catch (t) {
                throw this.logger.error(t.message), t
            }
        }, this.approve = async e => {
            try {
                return await this.engine.approve(e)
            } catch (t) {
                throw this.logger.error(t.message), t
            }
        }, this.reject = async e => {
            try {
                return await this.engine.reject(e)
            } catch (t) {
                throw this.logger.error(t.message), t
            }
        }, this.update = async e => {
            try {
                return await this.engine.update(e)
            } catch (t) {
                throw this.logger.error(t.message), t
            }
        }, this.extend = async e => {
            try {
                return await this.engine.extend(e)
            } catch (t) {
                throw this.logger.error(t.message), t
            }
        }, this.request = async e => {
            try {
                return await this.engine.request(e)
            } catch (t) {
                throw this.logger.error(t.message), t
            }
        }, this.respond = async e => {
            try {
                return await this.engine.respond(e)
            } catch (t) {
                throw this.logger.error(t.message), t
            }
        }, this.ping = async e => {
            try {
                return await this.engine.ping(e)
            } catch (t) {
                throw this.logger.error(t.message), t
            }
        }, this.emit = async e => {
            try {
                return await this.engine.emit(e)
            } catch (t) {
                throw this.logger.error(t.message), t
            }
        }, this.disconnect = async e => {
            try {
                return await this.engine.disconnect(e)
            } catch (t) {
                throw this.logger.error(t.message), t
            }
        }, this.find = e => {
            try {
                return this.engine.find(e)
            } catch (t) {
                throw this.logger.error(t.message), t
            }
        }, this.getPendingSessionRequests = () => {
            try {
                return this.engine.getPendingSessionRequests()
            } catch (e) {
                throw this.logger.error(e.message), e
            }
        }, this.name = (null == e ? void 0 : e.name) || gs, this.metadata = (null == e ? void 0 : e.metadata) || Le() || {
            name: "",
            description: "",
            url: "",
            icons: [""]
        };
        const t = typeof(null == e ? void 0 : e.logger) < "u" && "string" != typeof(null == e ? void 0 : e.logger) ? e.logger : j(D({
            level: (null == e ? void 0 : e.logger) || ys
        }));
        this.core = (null == e ? void 0 : e.core) || new ps(e), this.logger = C(t, this.name), this.session = new Us(this.core, this.logger), this.proposal = new Ds(this.core, this.logger), this.pendingRequest = new ks(this.core, this.logger), this.engine = new js(this)
    }
    static async init(t) {
        const r = new e(t);
        return await r.initialize(), r
    }
    get context() {
        return A(this.logger)
    }
    get pairing() {
        return this.core.pairing.pairings
    }
    async initialize() {
        this.logger.trace("Initialized");
        try {
            await this.core.start(), await this.session.init(), await this.proposal.init(), await this.pendingRequest.init(), await this.engine.init(), this.core.verify.init({
                verifyUrl: this.metadata.verifyUrl
            }), this.logger.info("SignClient Initialization Success")
        } catch (e) {
            throw this.logger.info("SignClient Initialization Failure"), this.logger.error(e.message), e
        }
    }
};
var qs = {};

function Ms(e) {
    let t;
    return "undefined" != typeof window && void 0 !== window[e] && (t = window[e]), t
}

function Ls(e) {
    const t = Ms(e);
    if (!t) throw new Error(`${e} is not defined in Window`);
    return t
}
Object.defineProperty(qs, "__esModule", {
    value: !0
}), qs.getLocalStorage = qs.getLocalStorageOrThrow = qs.getCrypto = qs.getCryptoOrThrow = qs.getLocation = qs.getLocationOrThrow = qs.getNavigator = qs.getNavigatorOrThrow = qs.getDocument = qs.getDocumentOrThrow = qs.getFromWindowOrThrow = qs.getFromWindow = void 0, qs.getFromWindow = Ms, qs.getFromWindowOrThrow = Ls, qs.getDocumentOrThrow = function() {
    return Ls("document")
}, qs.getDocument = function() {
    return Ms("document")
}, qs.getNavigatorOrThrow = function() {
    return Ls("navigator")
}, qs.getNavigator = function() {
    return Ms("navigator")
}, qs.getLocationOrThrow = function() {
    return Ls("location")
}, qs.getLocation = function() {
    return Ms("location")
}, qs.getCryptoOrThrow = function() {
    return Ls("crypto")
}, qs.getCrypto = function() {
    return Ms("crypto")
}, qs.getLocalStorageOrThrow = function() {
    return Ls("localStorage")
}, qs.getLocalStorage = function() {
    return Ms("localStorage")
};
var zs = {};
Object.defineProperty(zs, "__esModule", {
    value: !0
}), zs.getWindowMetadata = void 0;
const Vs = qs;
zs.getWindowMetadata = function() {
    let e, t;
    try {
        e = Vs.getDocumentOrThrow(), t = Vs.getLocationOrThrow()
    } catch (i) {
        return null
    }

    function r(...t) {
        const r = e.getElementsByTagName("meta");
        for (let e = 0; e < r.length; e++) {
            const n = r[e],
                i = ["itemprop", "property", "name"].map((e => n.getAttribute(e))).filter((e => !!e && t.includes(e)));
            if (i.length && i) {
                const e = n.getAttribute("content");
                if (e) return e
            }
        }
        return ""
    }
    const n = function() {
        let t = r("name", "og:site_name", "og:title", "twitter:title");
        return t || (t = e.title), t
    }();
    return {
        description: r("description", "og:description", "twitter:description", "keywords"),
        url: t.origin,
        icons: function() {
            const r = e.getElementsByTagName("link"),
                n = [];
            for (let e = 0; e < r.length; e++) {
                const i = r[e],
                    s = i.getAttribute("rel");
                if (s && s.toLowerCase().indexOf("icon") > -1) {
                    const e = i.getAttribute("href");
                    if (e)
                        if (-1 === e.toLowerCase().indexOf("https:") && -1 === e.toLowerCase().indexOf("http:") && 0 !== e.indexOf("//")) {
                            let r = t.protocol + "//" + t.host;
                            if (0 === e.indexOf("/")) r += e;
                            else {
                                const n = t.pathname.split("/");
                                n.pop();
                                r += n.join("/") + "/" + e
                            }
                            n.push(r)
                        } else if (0 === e.indexOf("//")) {
                        const r = t.protocol + e;
                        n.push(r)
                    } else n.push(e)
                }
            }
            return n
        }(),
        name: n
    }
};
var Ks = (e, t) => {
        if ("string" != typeof e || "string" != typeof t) throw new TypeError("Expected the arguments to be of type `string`");
        if ("" === t) return [e];
        const r = e.indexOf(t);
        return -1 === r ? [e] : [e.slice(0, r), e.slice(r + t.length)]
    },
    Hs = function(e, t) {
        for (var r = {}, n = Object.keys(e), i = Array.isArray(t), s = 0; s < n.length; s++) {
            var o = n[s],
                a = e[o];
            (i ? -1 !== t.indexOf(o) : t(o, a, e)) && (r[o] = a)
        }
        return r
    };

function Ws(e = [], t = []) {
    return [...new Set([...e, ...t])]
}

function Fs(e) {
    return e.includes(":")
}

function Bs(e) {
    return Fs(e) ? e.split(":")[0] : e
}! function(e) {
    const t = i,
        r = s,
        n = Ks,
        o = Hs,
        a = Symbol("encodeFragmentIdentifier");

    function c(e) {
        if ("string" != typeof e || 1 !== e.length) throw new TypeError("arrayFormatSeparator must be single character string")
    }

    function u(e, r) {
        return r.encode ? r.strict ? t(e) : encodeURIComponent(e) : e
    }

    function h(e, t) {
        return t.decode ? r(e) : e
    }

    function l(e) {
        return Array.isArray(e) ? e.sort() : "object" == typeof e ? l(Object.keys(e)).sort(((e, t) => Number(e) - Number(t))).map((t => e[t])) : e
    }

    function p(e) {
        const t = e.indexOf("#");
        return -1 !== t && (e = e.slice(0, t)), e
    }

    function d(e) {
        const t = (e = p(e)).indexOf("?");
        return -1 === t ? "" : e.slice(t + 1)
    }

    function f(e, t) {
        return t.parseNumbers && !Number.isNaN(Number(e)) && "string" == typeof e && "" !== e.trim() ? e = Number(e) : !t.parseBooleans || null === e || "true" !== e.toLowerCase() && "false" !== e.toLowerCase() || (e = "true" === e.toLowerCase()), e
    }

    function g(e, t) {
        c((t = Object.assign({
            decode: !0,
            sort: !0,
            arrayFormat: "none",
            arrayFormatSeparator: ",",
            parseNumbers: !1,
            parseBooleans: !1
        }, t)).arrayFormatSeparator);
        const r = function(e) {
                let t;
                switch (e.arrayFormat) {
                    case "index":
                        return (e, r, n) => {
                            t = /\[(\d*)\]$/.exec(e), e = e.replace(/\[\d*\]$/, ""), t ? (void 0 === n[e] && (n[e] = {}), n[e][t[1]] = r) : n[e] = r
                        };
                    case "bracket":
                        return (e, r, n) => {
                            t = /(\[\])$/.exec(e), e = e.replace(/\[\]$/, ""), t ? void 0 !== n[e] ? n[e] = [].concat(n[e], r) : n[e] = [r] : n[e] = r
                        };
                    case "colon-list-separator":
                        return (e, r, n) => {
                            t = /(:list)$/.exec(e), e = e.replace(/:list$/, ""), t ? void 0 !== n[e] ? n[e] = [].concat(n[e], r) : n[e] = [r] : n[e] = r
                        };
                    case "comma":
                    case "separator":
                        return (t, r, n) => {
                            const i = "string" == typeof r && r.includes(e.arrayFormatSeparator),
                                s = "string" == typeof r && !i && h(r, e).includes(e.arrayFormatSeparator);
                            r = s ? h(r, e) : r;
                            const o = i || s ? r.split(e.arrayFormatSeparator).map((t => h(t, e))) : null === r ? r : h(r, e);
                            n[t] = o
                        };
                    case "bracket-separator":
                        return (t, r, n) => {
                            const i = /(\[\])$/.test(t);
                            if (t = t.replace(/\[\]$/, ""), !i) return void(n[t] = r ? h(r, e) : r);
                            const s = null === r ? [] : r.split(e.arrayFormatSeparator).map((t => h(t, e)));
                            void 0 !== n[t] ? n[t] = [].concat(n[t], s) : n[t] = s
                        };
                    default:
                        return (e, t, r) => {
                            void 0 !== r[e] ? r[e] = [].concat(r[e], t) : r[e] = t
                        }
                }
            }(t),
            i = Object.create(null);
        if ("string" != typeof e) return i;
        if (!(e = e.trim().replace(/^[?#&]/, ""))) return i;
        for (const s of e.split("&")) {
            if ("" === s) continue;
            let [e, o] = n(t.decode ? s.replace(/\+/g, " ") : s, "=");
            o = void 0 === o ? null : ["comma", "separator", "bracket-separator"].includes(t.arrayFormat) ? o : h(o, t), r(h(e, t), o, i)
        }
        for (const n of Object.keys(i)) {
            const e = i[n];
            if ("object" == typeof e && null !== e)
                for (const r of Object.keys(e)) e[r] = f(e[r], t);
            else i[n] = f(e, t)
        }
        return !1 === t.sort ? i : (!0 === t.sort ? Object.keys(i).sort() : Object.keys(i).sort(t.sort)).reduce(((e, t) => {
            const r = i[t];
            return Boolean(r) && "object" == typeof r && !Array.isArray(r) ? e[t] = l(r) : e[t] = r, e
        }), Object.create(null))
    }
    e.extract = d, e.parse = g, e.stringify = (e, t) => {
        if (!e) return "";
        c((t = Object.assign({
            encode: !0,
            strict: !0,
            arrayFormat: "none",
            arrayFormatSeparator: ","
        }, t)).arrayFormatSeparator);
        const r = r => t.skipNull && null == e[r] || t.skipEmptyString && "" === e[r],
            n = function(e) {
                switch (e.arrayFormat) {
                    case "index":
                        return t => (r, n) => {
                            const i = r.length;
                            return void 0 === n || e.skipNull && null === n || e.skipEmptyString && "" === n ? r : null === n ? [...r, [u(t, e), "[", i, "]"].join("")] : [...r, [u(t, e), "[", u(i, e), "]=", u(n, e)].join("")]
                        };
                    case "bracket":
                        return t => (r, n) => void 0 === n || e.skipNull && null === n || e.skipEmptyString && "" === n ? r : null === n ? [...r, [u(t, e), "[]"].join("")] : [...r, [u(t, e), "[]=", u(n, e)].join("")];
                    case "colon-list-separator":
                        return t => (r, n) => void 0 === n || e.skipNull && null === n || e.skipEmptyString && "" === n ? r : null === n ? [...r, [u(t, e), ":list="].join("")] : [...r, [u(t, e), ":list=", u(n, e)].join("")];
                    case "comma":
                    case "separator":
                    case "bracket-separator":
                        {
                            const t = "bracket-separator" === e.arrayFormat ? "[]=" : "=";
                            return r => (n, i) => void 0 === i || e.skipNull && null === i || e.skipEmptyString && "" === i ? n : (i = null === i ? "" : i, 0 === n.length ? [
                                [u(r, e), t, u(i, e)].join("")
                            ] : [
                                [n, u(i, e)].join(e.arrayFormatSeparator)
                            ])
                        }
                    default:
                        return t => (r, n) => void 0 === n || e.skipNull && null === n || e.skipEmptyString && "" === n ? r : null === n ? [...r, u(t, e)] : [...r, [u(t, e), "=", u(n, e)].join("")]
                }
            }(t),
            i = {};
        for (const o of Object.keys(e)) r(o) || (i[o] = e[o]);
        const s = Object.keys(i);
        return !1 !== t.sort && s.sort(t.sort), s.map((r => {
            const i = e[r];
            return void 0 === i ? "" : null === i ? u(r, t) : Array.isArray(i) ? 0 === i.length && "bracket-separator" === t.arrayFormat ? u(r, t) + "[]" : i.reduce(n(r), []).join("&") : u(r, t) + "=" + u(i, t)
        })).filter((e => e.length > 0)).join("&")
    }, e.parseUrl = (e, t) => {
        t = Object.assign({
            decode: !0
        }, t);
        const [r, i] = n(e, "#");
        return Object.assign({
            url: r.split("?")[0] || "",
            query: g(d(e), t)
        }, t && t.parseFragmentIdentifier && i ? {
            fragmentIdentifier: h(i, t)
        } : {})
    }, e.stringifyUrl = (t, r) => {
        r = Object.assign({
            encode: !0,
            strict: !0,
            [a]: !0
        }, r);
        const n = p(t.url).split("?")[0] || "",
            i = e.extract(t.url),
            s = e.parse(i, {
                sort: !1
            }),
            o = Object.assign(s, t.query);
        let c = e.stringify(o, r);
        c && (c = `?${c}`);
        let h = function(e) {
            let t = "";
            const r = e.indexOf("#");
            return -1 !== r && (t = e.slice(r)), t
        }(t.url);
        return t.fragmentIdentifier && (h = `#${r[a]?u(t.fragmentIdentifier,r):t.fragmentIdentifier}`), `${n}${c}${h}`
    }, e.pick = (t, r, n) => {
        n = Object.assign({
            parseFragmentIdentifier: !0,
            [a]: !1
        }, n);
        const {
            url: i,
            query: s,
            fragmentIdentifier: c
        } = e.parseUrl(t, n);
        return e.stringifyUrl({
            url: i,
            query: o(s, r),
            fragmentIdentifier: c
        }, n)
    }, e.exclude = (t, r, n) => {
        const i = Array.isArray(r) ? e => !r.includes(e) : (e, t) => !r(e, t);
        return e.pick(t, i, n)
    }
}({});
const Gs = {
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
};

function Js(e, t) {
    const {
        message: r,
        code: n
    } = Gs[e];
    return {
        message: t ? `${r} ${t}` : r,
        code: n
    }
}

function Qs(e, t) {
    return !!Array.isArray(e)
}
const Ys = "error",
    Zs = "wc@2:universal_provider:",
    Xs = "default_chain_changed";
var eo, to, ro = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {},
    no = {
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
eo = no, to = no.exports,
    function() {
        var e, t = "Expected a function",
            r = "__lodash_hash_undefined__",
            n = "__lodash_placeholder__",
            i = 16,
            s = 32,
            o = 64,
            a = 128,
            c = 256,
            u = 1 / 0,
            h = 9007199254740991,
            l = NaN,
            p = 4294967295,
            d = p - 1,
            f = p >>> 1,
            g = [
                ["ary", a],
                ["bind", 1],
                ["bindKey", 2],
                ["curry", 8],
                ["curryRight", i],
                ["flip", 512],
                ["partial", s],
                ["partialRight", o],
                ["rearg", c]
            ],
            y = "[object Arguments]",
            m = "[object Array]",
            v = "[object Boolean]",
            w = "[object Date]",
            b = "[object Error]",
            _ = "[object Function]",
            E = "[object GeneratorFunction]",
            I = "[object Map]",
            S = "[object Number]",
            P = "[object Object]",
            O = "[object Promise]",
            N = "[object RegExp]",
            R = "[object Set]",
            T = "[object String]",
            x = "[object Symbol]",
            C = "[object WeakMap]",
            A = "[object ArrayBuffer]",
            j = "[object DataView]",
            D = "[object Float32Array]",
            U = "[object Float64Array]",
            k = "[object Int8Array]",
            $ = "[object Int16Array]",
            q = "[object Int32Array]",
            M = "[object Uint8Array]",
            L = "[object Uint8ClampedArray]",
            z = "[object Uint16Array]",
            V = "[object Uint32Array]",
            K = /\b__p \+= '';/g,
            H = /\b(__p \+=) '' \+/g,
            W = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
            F = /&(?:amp|lt|gt|quot|#39);/g,
            B = /[&<>"']/g,
            G = RegExp(F.source),
            J = RegExp(B.source),
            Q = /<%-([\s\S]+?)%>/g,
            Y = /<%([\s\S]+?)%>/g,
            Z = /<%=([\s\S]+?)%>/g,
            X = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
            ee = /^\w*$/,
            te = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
            re = /[\\^$.*+?()[\]{}|]/g,
            ne = RegExp(re.source),
            ie = /^\s+/,
            se = /\s/,
            oe = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
            ae = /\{\n\/\* \[wrapped with (.+)\] \*/,
            ce = /,? & /,
            ue = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
            he = /[()=,{}\[\]\/\s]/,
            le = /\\(\\)?/g,
            pe = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
            de = /\w*$/,
            fe = /^[-+]0x[0-9a-f]+$/i,
            ge = /^0b[01]+$/i,
            ye = /^\[object .+?Constructor\]$/,
            me = /^0o[0-7]+$/i,
            ve = /^(?:0|[1-9]\d*)$/,
            we = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
            be = /($^)/,
            _e = /['\n\r\u2028\u2029\\]/g,
            Ee = "\\ud800-\\udfff",
            Ie = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",
            Se = "\\u2700-\\u27bf",
            Pe = "a-z\\xdf-\\xf6\\xf8-\\xff",
            Oe = "A-Z\\xc0-\\xd6\\xd8-\\xde",
            Ne = "\\ufe0e\\ufe0f",
            Re = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
            Te = "['’]",
            xe = "[" + Ee + "]",
            Ce = "[" + Re + "]",
            Ae = "[" + Ie + "]",
            je = "\\d+",
            De = "[" + Se + "]",
            Ue = "[" + Pe + "]",
            ke = "[^" + Ee + Re + je + Se + Pe + Oe + "]",
            $e = "\\ud83c[\\udffb-\\udfff]",
            qe = "[^" + Ee + "]",
            Me = "(?:\\ud83c[\\udde6-\\uddff]){2}",
            Le = "[\\ud800-\\udbff][\\udc00-\\udfff]",
            ze = "[" + Oe + "]",
            Ve = "\\u200d",
            Ke = "(?:" + Ue + "|" + ke + ")",
            He = "(?:" + ze + "|" + ke + ")",
            We = "(?:['’](?:d|ll|m|re|s|t|ve))?",
            Fe = "(?:['’](?:D|LL|M|RE|S|T|VE))?",
            Be = "(?:" + Ae + "|" + $e + ")?",
            Ge = "[" + Ne + "]?",
            Je = Ge + Be + "(?:" + Ve + "(?:" + [qe, Me, Le].join("|") + ")" + Ge + Be + ")*",
            Qe = "(?:" + [De, Me, Le].join("|") + ")" + Je,
            Ye = "(?:" + [qe + Ae + "?", Ae, Me, Le, xe].join("|") + ")",
            Ze = RegExp(Te, "g"),
            Xe = RegExp(Ae, "g"),
            et = RegExp($e + "(?=" + $e + ")|" + Ye + Je, "g"),
            tt = RegExp([ze + "?" + Ue + "+" + We + "(?=" + [Ce, ze, "$"].join("|") + ")", He + "+" + Fe + "(?=" + [Ce, ze + Ke, "$"].join("|") + ")", ze + "?" + Ke + "+" + We, ze + "+" + Fe, "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", je, Qe].join("|"), "g"),
            rt = RegExp("[" + Ve + Ee + Ie + Ne + "]"),
            nt = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
            it = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"],
            st = -1,
            ot = {};
        ot[D] = ot[U] = ot[k] = ot[$] = ot[q] = ot[M] = ot[L] = ot[z] = ot[V] = !0, ot[y] = ot[m] = ot[A] = ot[v] = ot[j] = ot[w] = ot[b] = ot[_] = ot[I] = ot[S] = ot[P] = ot[N] = ot[R] = ot[T] = ot[C] = !1;
        var at = {};
        at[y] = at[m] = at[A] = at[j] = at[v] = at[w] = at[D] = at[U] = at[k] = at[$] = at[q] = at[I] = at[S] = at[P] = at[N] = at[R] = at[T] = at[x] = at[M] = at[L] = at[z] = at[V] = !0, at[b] = at[_] = at[C] = !1;
        var ct = {
                "\\": "\\",
                "'": "'",
                "\n": "n",
                "\r": "r",
                "\u2028": "u2028",
                "\u2029": "u2029"
            },
            ut = parseFloat,
            ht = parseInt,
            lt = "object" == typeof ro && ro && ro.Object === Object && ro,
            pt = "object" == typeof self && self && self.Object === Object && self,
            dt = lt || pt || Function("return this")(),
            ft = to && !to.nodeType && to,
            gt = ft && eo && !eo.nodeType && eo,
            yt = gt && gt.exports === ft,
            mt = yt && lt.process,
            vt = function() {
                try {
                    return gt && gt.require && gt.require("util").types || mt && mt.binding && mt.binding("util")
                } catch {}
            }(),
            wt = vt && vt.isArrayBuffer,
            bt = vt && vt.isDate,
            _t = vt && vt.isMap,
            Et = vt && vt.isRegExp,
            It = vt && vt.isSet,
            St = vt && vt.isTypedArray;

        function Pt(e, t, r) {
            switch (r.length) {
                case 0:
                    return e.call(t);
                case 1:
                    return e.call(t, r[0]);
                case 2:
                    return e.call(t, r[0], r[1]);
                case 3:
                    return e.call(t, r[0], r[1], r[2])
            }
            return e.apply(t, r)
        }

        function Ot(e, t, r, n) {
            for (var i = -1, s = null == e ? 0 : e.length; ++i < s;) {
                var o = e[i];
                t(n, o, r(o), e)
            }
            return n
        }

        function Nt(e, t) {
            for (var r = -1, n = null == e ? 0 : e.length; ++r < n && !1 !== t(e[r], r, e););
            return e
        }

        function Rt(e, t) {
            for (var r = null == e ? 0 : e.length; r-- && !1 !== t(e[r], r, e););
            return e
        }

        function Tt(e, t) {
            for (var r = -1, n = null == e ? 0 : e.length; ++r < n;)
                if (!t(e[r], r, e)) return !1;
            return !0
        }

        function xt(e, t) {
            for (var r = -1, n = null == e ? 0 : e.length, i = 0, s = []; ++r < n;) {
                var o = e[r];
                t(o, r, e) && (s[i++] = o)
            }
            return s
        }

        function Ct(e, t) {
            return !(null == e || !e.length) && zt(e, t, 0) > -1
        }

        function At(e, t, r) {
            for (var n = -1, i = null == e ? 0 : e.length; ++n < i;)
                if (r(t, e[n])) return !0;
            return !1
        }

        function jt(e, t) {
            for (var r = -1, n = null == e ? 0 : e.length, i = Array(n); ++r < n;) i[r] = t(e[r], r, e);
            return i
        }

        function Dt(e, t) {
            for (var r = -1, n = t.length, i = e.length; ++r < n;) e[i + r] = t[r];
            return e
        }

        function Ut(e, t, r, n) {
            var i = -1,
                s = null == e ? 0 : e.length;
            for (n && s && (r = e[++i]); ++i < s;) r = t(r, e[i], i, e);
            return r
        }

        function kt(e, t, r, n) {
            var i = null == e ? 0 : e.length;
            for (n && i && (r = e[--i]); i--;) r = t(r, e[i], i, e);
            return r
        }

        function $t(e, t) {
            for (var r = -1, n = null == e ? 0 : e.length; ++r < n;)
                if (t(e[r], r, e)) return !0;
            return !1
        }
        var qt = Wt("length");

        function Mt(e, t, r) {
            var n;
            return r(e, (function(e, r, i) {
                if (t(e, r, i)) return n = r, !1
            })), n
        }

        function Lt(e, t, r, n) {
            for (var i = e.length, s = r + (n ? 1 : -1); n ? s-- : ++s < i;)
                if (t(e[s], s, e)) return s;
            return -1
        }

        function zt(e, t, r) {
            return t == t ? function(e, t, r) {
                for (var n = r - 1, i = e.length; ++n < i;)
                    if (e[n] === t) return n;
                return -1
            }(e, t, r) : Lt(e, Kt, r)
        }

        function Vt(e, t, r, n) {
            for (var i = r - 1, s = e.length; ++i < s;)
                if (n(e[i], t)) return i;
            return -1
        }

        function Kt(e) {
            return e != e
        }

        function Ht(e, t) {
            var r = null == e ? 0 : e.length;
            return r ? Gt(e, t) / r : l
        }

        function Wt(t) {
            return function(r) {
                return null == r ? e : r[t]
            }
        }

        function Ft(t) {
            return function(r) {
                return null == t ? e : t[r]
            }
        }

        function Bt(e, t, r, n, i) {
            return i(e, (function(e, i, s) {
                r = n ? (n = !1, e) : t(r, e, i, s)
            })), r
        }

        function Gt(t, r) {
            for (var n, i = -1, s = t.length; ++i < s;) {
                var o = r(t[i]);
                o !== e && (n = n === e ? o : n + o)
            }
            return n
        }

        function Jt(e, t) {
            for (var r = -1, n = Array(e); ++r < e;) n[r] = t(r);
            return n
        }

        function Qt(e) {
            return e && e.slice(0, pr(e) + 1).replace(ie, "")
        }

        function Yt(e) {
            return function(t) {
                return e(t)
            }
        }

        function Zt(e, t) {
            return jt(t, (function(t) {
                return e[t]
            }))
        }

        function Xt(e, t) {
            return e.has(t)
        }

        function er(e, t) {
            for (var r = -1, n = e.length; ++r < n && zt(t, e[r], 0) > -1;);
            return r
        }

        function tr(e, t) {
            for (var r = e.length; r-- && zt(t, e[r], 0) > -1;);
            return r
        }
        var rr = Ft({
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
            nr = Ft({
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;"
            });

        function ir(e) {
            return "\\" + ct[e]
        }

        function sr(e) {
            return rt.test(e)
        }

        function or(e) {
            var t = -1,
                r = Array(e.size);
            return e.forEach((function(e, n) {
                r[++t] = [n, e]
            })), r
        }

        function ar(e, t) {
            return function(r) {
                return e(t(r))
            }
        }

        function cr(e, t) {
            for (var r = -1, i = e.length, s = 0, o = []; ++r < i;) {
                var a = e[r];
                (a === t || a === n) && (e[r] = n, o[s++] = r)
            }
            return o
        }

        function ur(e) {
            var t = -1,
                r = Array(e.size);
            return e.forEach((function(e) {
                r[++t] = e
            })), r
        }

        function hr(e) {
            return sr(e) ? function(e) {
                for (var t = et.lastIndex = 0; et.test(e);) ++t;
                return t
            }(e) : qt(e)
        }

        function lr(e) {
            return sr(e) ? function(e) {
                return e.match(et) || []
            }(e) : function(e) {
                return e.split("")
            }(e)
        }

        function pr(e) {
            for (var t = e.length; t-- && se.test(e.charAt(t)););
            return t
        }
        var dr = Ft({
                "&amp;": "&",
                "&lt;": "<",
                "&gt;": ">",
                "&quot;": '"',
                "&#39;": "'"
            }),
            fr = function se(Ee) {
                var Ie, Se = (Ee = null == Ee ? dt : fr.defaults(dt.Object(), Ee, fr.pick(dt, it))).Array,
                    Pe = Ee.Date,
                    Oe = Ee.Error,
                    Ne = Ee.Function,
                    Re = Ee.Math,
                    Te = Ee.Object,
                    xe = Ee.RegExp,
                    Ce = Ee.String,
                    Ae = Ee.TypeError,
                    je = Se.prototype,
                    De = Ne.prototype,
                    Ue = Te.prototype,
                    ke = Ee["__core-js_shared__"],
                    $e = De.toString,
                    qe = Ue.hasOwnProperty,
                    Me = 0,
                    Le = (Ie = /[^.]+$/.exec(ke && ke.keys && ke.keys.IE_PROTO || "")) ? "Symbol(src)_1." + Ie : "",
                    ze = Ue.toString,
                    Ve = $e.call(Te),
                    Ke = dt._,
                    He = xe("^" + $e.call(qe).replace(re, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                    We = yt ? Ee.Buffer : e,
                    Fe = Ee.Symbol,
                    Be = Ee.Uint8Array,
                    Ge = We ? We.allocUnsafe : e,
                    Je = ar(Te.getPrototypeOf, Te),
                    Qe = Te.create,
                    Ye = Ue.propertyIsEnumerable,
                    et = je.splice,
                    rt = Fe ? Fe.isConcatSpreadable : e,
                    ct = Fe ? Fe.iterator : e,
                    lt = Fe ? Fe.toStringTag : e,
                    pt = function() {
                        try {
                            var e = ds(Te, "defineProperty");
                            return e({}, "", {}), e
                        } catch {}
                    }(),
                    ft = Ee.clearTimeout !== dt.clearTimeout && Ee.clearTimeout,
                    gt = Pe && Pe.now !== dt.Date.now && Pe.now,
                    mt = Ee.setTimeout !== dt.setTimeout && Ee.setTimeout,
                    vt = Re.ceil,
                    qt = Re.floor,
                    Ft = Te.getOwnPropertySymbols,
                    gr = We ? We.isBuffer : e,
                    yr = Ee.isFinite,
                    mr = je.join,
                    vr = ar(Te.keys, Te),
                    wr = Re.max,
                    br = Re.min,
                    _r = Pe.now,
                    Er = Ee.parseInt,
                    Ir = Re.random,
                    Sr = je.reverse,
                    Pr = ds(Ee, "DataView"),
                    Or = ds(Ee, "Map"),
                    Nr = ds(Ee, "Promise"),
                    Rr = ds(Ee, "Set"),
                    Tr = ds(Ee, "WeakMap"),
                    xr = ds(Te, "create"),
                    Cr = Tr && new Tr,
                    Ar = {},
                    jr = Ms(Pr),
                    Dr = Ms(Or),
                    Ur = Ms(Nr),
                    kr = Ms(Rr),
                    $r = Ms(Tr),
                    qr = Fe ? Fe.prototype : e,
                    Mr = qr ? qr.valueOf : e,
                    Lr = qr ? qr.toString : e;

                function zr(e) {
                    if (na(e) && !Fo(e) && !(e instanceof Wr)) {
                        if (e instanceof Hr) return e;
                        if (qe.call(e, "__wrapped__")) return Ls(e)
                    }
                    return new Hr(e)
                }
                var Vr = function() {
                    function t() {}
                    return function(r) {
                        if (!ra(r)) return {};
                        if (Qe) return Qe(r);
                        t.prototype = r;
                        var n = new t;
                        return t.prototype = e, n
                    }
                }();

                function Kr() {}

                function Hr(t, r) {
                    this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !!r, this.__index__ = 0, this.__values__ = e
                }

                function Wr(e) {
                    this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = p, this.__views__ = []
                }

                function Fr(e) {
                    var t = -1,
                        r = null == e ? 0 : e.length;
                    for (this.clear(); ++t < r;) {
                        var n = e[t];
                        this.set(n[0], n[1])
                    }
                }

                function Br(e) {
                    var t = -1,
                        r = null == e ? 0 : e.length;
                    for (this.clear(); ++t < r;) {
                        var n = e[t];
                        this.set(n[0], n[1])
                    }
                }

                function Gr(e) {
                    var t = -1,
                        r = null == e ? 0 : e.length;
                    for (this.clear(); ++t < r;) {
                        var n = e[t];
                        this.set(n[0], n[1])
                    }
                }

                function Jr(e) {
                    var t = -1,
                        r = null == e ? 0 : e.length;
                    for (this.__data__ = new Gr; ++t < r;) this.add(e[t])
                }

                function Qr(e) {
                    var t = this.__data__ = new Br(e);
                    this.size = t.size
                }

                function Yr(e, t) {
                    var r = Fo(e),
                        n = !r && Wo(e),
                        i = !r && !n && Qo(e),
                        s = !r && !n && !i && la(e),
                        o = r || n || i || s,
                        a = o ? Jt(e.length, Ce) : [],
                        c = a.length;
                    for (var u in e)(t || qe.call(e, u)) && (!o || !("length" == u || i && ("offset" == u || "parent" == u) || s && ("buffer" == u || "byteLength" == u || "byteOffset" == u) || bs(u, c))) && a.push(u);
                    return a
                }

                function Zr(t) {
                    var r = t.length;
                    return r ? t[Qn(0, r - 1)] : e
                }

                function Xr(e, t) {
                    return ks(Ci(e), un(t, 0, e.length))
                }

                function en(e) {
                    return ks(Ci(e))
                }

                function tn(t, r, n) {
                    (n !== e && !Vo(t[r], n) || n === e && !(r in t)) && an(t, r, n)
                }

                function rn(t, r, n) {
                    var i = t[r];
                    (!qe.call(t, r) || !Vo(i, n) || n === e && !(r in t)) && an(t, r, n)
                }

                function nn(e, t) {
                    for (var r = e.length; r--;)
                        if (Vo(e[r][0], t)) return r;
                    return -1
                }

                function sn(e, t, r, n) {
                    return fn(e, (function(e, i, s) {
                        t(n, e, r(e), s)
                    })), n
                }

                function on(e, t) {
                    return e && Ai(t, ja(t), e)
                }

                function an(e, t, r) {
                    "__proto__" == t && pt ? pt(e, t, {
                        configurable: !0,
                        enumerable: !0,
                        value: r,
                        writable: !0
                    }) : e[t] = r
                }

                function cn(t, r) {
                    for (var n = -1, i = r.length, s = Se(i), o = null == t; ++n < i;) s[n] = o ? e : Ra(t, r[n]);
                    return s
                }

                function un(t, r, n) {
                    return t == t && (n !== e && (t = t <= n ? t : n), r !== e && (t = t >= r ? t : r)), t
                }

                function hn(t, r, n, i, s, o) {
                    var a, c = 1 & r,
                        u = 2 & r,
                        h = 4 & r;
                    if (n && (a = s ? n(t, i, s, o) : n(t)), a !== e) return a;
                    if (!ra(t)) return t;
                    var l = Fo(t);
                    if (l) {
                        if (a = function(e) {
                                var t = e.length,
                                    r = new e.constructor(t);
                                return t && "string" == typeof e[0] && qe.call(e, "index") && (r.index = e.index, r.input = e.input), r
                            }(t), !c) return Ci(t, a)
                    } else {
                        var p = ys(t),
                            d = p == _ || p == E;
                        if (Qo(t)) return Pi(t, c);
                        if (p == P || p == y || d && !s) {
                            if (a = u || d ? {} : vs(t), !c) return u ? function(e, t) {
                                return Ai(e, gs(e), t)
                            }(t, function(e, t) {
                                return e && Ai(t, Da(t), e)
                            }(a, t)) : function(e, t) {
                                return Ai(e, fs(e), t)
                            }(t, on(a, t))
                        } else {
                            if (!at[p]) return s ? t : {};
                            a = function(e, t, r) {
                                var n = e.constructor;
                                switch (t) {
                                    case A:
                                        return Oi(e);
                                    case v:
                                    case w:
                                        return new n(+e);
                                    case j:
                                        return function(e, t) {
                                            var r = t ? Oi(e.buffer) : e.buffer;
                                            return new e.constructor(r, e.byteOffset, e.byteLength)
                                        }(e, r);
                                    case D:
                                    case U:
                                    case k:
                                    case $:
                                    case q:
                                    case M:
                                    case L:
                                    case z:
                                    case V:
                                        return Ni(e, r);
                                    case I:
                                        return new n;
                                    case S:
                                    case T:
                                        return new n(e);
                                    case N:
                                        return function(e) {
                                            var t = new e.constructor(e.source, de.exec(e));
                                            return t.lastIndex = e.lastIndex, t
                                        }(e);
                                    case R:
                                        return new n;
                                    case x:
                                        return function(e) {
                                            return Mr ? Te(Mr.call(e)) : {}
                                        }(e)
                                }
                            }(t, p, c)
                        }
                    }
                    o || (o = new Qr);
                    var f = o.get(t);
                    if (f) return f;
                    o.set(t, a), ca(t) ? t.forEach((function(e) {
                        a.add(hn(e, r, n, e, t, o))
                    })) : ia(t) && t.forEach((function(e, i) {
                        a.set(i, hn(e, r, n, i, t, o))
                    }));
                    var g = l ? e : (h ? u ? os : ss : u ? Da : ja)(t);
                    return Nt(g || t, (function(e, i) {
                        g && (e = t[i = e]), rn(a, i, hn(e, r, n, i, t, o))
                    })), a
                }

                function ln(t, r, n) {
                    var i = n.length;
                    if (null == t) return !i;
                    for (t = Te(t); i--;) {
                        var s = n[i],
                            o = r[s],
                            a = t[s];
                        if (a === e && !(s in t) || !o(a)) return !1
                    }
                    return !0
                }

                function pn(r, n, i) {
                    if ("function" != typeof r) throw new Ae(t);
                    return As((function() {
                        r.apply(e, i)
                    }), n)
                }

                function dn(e, t, r, n) {
                    var i = -1,
                        s = Ct,
                        o = !0,
                        a = e.length,
                        c = [],
                        u = t.length;
                    if (!a) return c;
                    r && (t = jt(t, Yt(r))), n ? (s = At, o = !1) : t.length >= 200 && (s = Xt, o = !1, t = new Jr(t));
                    e: for (; ++i < a;) {
                        var h = e[i],
                            l = null == r ? h : r(h);
                        if (h = n || 0 !== h ? h : 0, o && l == l) {
                            for (var p = u; p--;)
                                if (t[p] === l) continue e;
                            c.push(h)
                        } else s(t, l, n) || c.push(h)
                    }
                    return c
                }
                zr.templateSettings = {
                    escape: Q,
                    evaluate: Y,
                    interpolate: Z,
                    variable: "",
                    imports: {
                        _: zr
                    }
                }, zr.prototype = Kr.prototype, zr.prototype.constructor = zr, Hr.prototype = Vr(Kr.prototype), Hr.prototype.constructor = Hr, Wr.prototype = Vr(Kr.prototype), Wr.prototype.constructor = Wr, Fr.prototype.clear = function() {
                    this.__data__ = xr ? xr(null) : {}, this.size = 0
                }, Fr.prototype.delete = function(e) {
                    var t = this.has(e) && delete this.__data__[e];
                    return this.size -= t ? 1 : 0, t
                }, Fr.prototype.get = function(t) {
                    var n = this.__data__;
                    if (xr) {
                        var i = n[t];
                        return i === r ? e : i
                    }
                    return qe.call(n, t) ? n[t] : e
                }, Fr.prototype.has = function(t) {
                    var r = this.__data__;
                    return xr ? r[t] !== e : qe.call(r, t)
                }, Fr.prototype.set = function(t, n) {
                    var i = this.__data__;
                    return this.size += this.has(t) ? 0 : 1, i[t] = xr && n === e ? r : n, this
                }, Br.prototype.clear = function() {
                    this.__data__ = [], this.size = 0
                }, Br.prototype.delete = function(e) {
                    var t = this.__data__,
                        r = nn(t, e);
                    return !(r < 0 || (r == t.length - 1 ? t.pop() : et.call(t, r, 1), --this.size, 0))
                }, Br.prototype.get = function(t) {
                    var r = this.__data__,
                        n = nn(r, t);
                    return n < 0 ? e : r[n][1]
                }, Br.prototype.has = function(e) {
                    return nn(this.__data__, e) > -1
                }, Br.prototype.set = function(e, t) {
                    var r = this.__data__,
                        n = nn(r, e);
                    return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this
                }, Gr.prototype.clear = function() {
                    this.size = 0, this.__data__ = {
                        hash: new Fr,
                        map: new(Or || Br),
                        string: new Fr
                    }
                }, Gr.prototype.delete = function(e) {
                    var t = ls(this, e).delete(e);
                    return this.size -= t ? 1 : 0, t
                }, Gr.prototype.get = function(e) {
                    return ls(this, e).get(e)
                }, Gr.prototype.has = function(e) {
                    return ls(this, e).has(e)
                }, Gr.prototype.set = function(e, t) {
                    var r = ls(this, e),
                        n = r.size;
                    return r.set(e, t), this.size += r.size == n ? 0 : 1, this
                }, Jr.prototype.add = Jr.prototype.push = function(e) {
                    return this.__data__.set(e, r), this
                }, Jr.prototype.has = function(e) {
                    return this.__data__.has(e)
                }, Qr.prototype.clear = function() {
                    this.__data__ = new Br, this.size = 0
                }, Qr.prototype.delete = function(e) {
                    var t = this.__data__,
                        r = t.delete(e);
                    return this.size = t.size, r
                }, Qr.prototype.get = function(e) {
                    return this.__data__.get(e)
                }, Qr.prototype.has = function(e) {
                    return this.__data__.has(e)
                }, Qr.prototype.set = function(e, t) {
                    var r = this.__data__;
                    if (r instanceof Br) {
                        var n = r.__data__;
                        if (!Or || n.length < 199) return n.push([e, t]), this.size = ++r.size, this;
                        r = this.__data__ = new Gr(n)
                    }
                    return r.set(e, t), this.size = r.size, this
                };
                var fn = Ui(En),
                    gn = Ui(In, !0);

                function yn(e, t) {
                    var r = !0;
                    return fn(e, (function(e, n, i) {
                        return r = !!t(e, n, i)
                    })), r
                }

                function mn(t, r, n) {
                    for (var i = -1, s = t.length; ++i < s;) {
                        var o = t[i],
                            a = r(o);
                        if (null != a && (c === e ? a == a && !ha(a) : n(a, c))) var c = a,
                            u = o
                    }
                    return u
                }

                function vn(e, t) {
                    var r = [];
                    return fn(e, (function(e, n, i) {
                        t(e, n, i) && r.push(e)
                    })), r
                }

                function wn(e, t, r, n, i) {
                    var s = -1,
                        o = e.length;
                    for (r || (r = ws), i || (i = []); ++s < o;) {
                        var a = e[s];
                        t > 0 && r(a) ? t > 1 ? wn(a, t - 1, r, n, i) : Dt(i, a) : n || (i[i.length] = a)
                    }
                    return i
                }
                var bn = ki(),
                    _n = ki(!0);

                function En(e, t) {
                    return e && bn(e, t, ja)
                }

                function In(e, t) {
                    return e && _n(e, t, ja)
                }

                function Sn(e, t) {
                    return xt(t, (function(t) {
                        return Xo(e[t])
                    }))
                }

                function Pn(t, r) {
                    for (var n = 0, i = (r = _i(r, t)).length; null != t && n < i;) t = t[qs(r[n++])];
                    return n && n == i ? t : e
                }

                function On(e, t, r) {
                    var n = t(e);
                    return Fo(e) ? n : Dt(n, r(e))
                }

                function Nn(t) {
                    return null == t ? t === e ? "[object Undefined]" : "[object Null]" : lt && lt in Te(t) ? function(t) {
                        var r = qe.call(t, lt),
                            n = t[lt];
                        try {
                            t[lt] = e;
                            var i = !0
                        } catch {}
                        var s = ze.call(t);
                        return i && (r ? t[lt] = n : delete t[lt]), s
                    }(t) : function(e) {
                        return ze.call(e)
                    }(t)
                }

                function Rn(e, t) {
                    return e > t
                }

                function Tn(e, t) {
                    return null != e && qe.call(e, t)
                }

                function xn(e, t) {
                    return null != e && t in Te(e)
                }

                function Cn(t, r, n) {
                    for (var i = n ? At : Ct, s = t[0].length, o = t.length, a = o, c = Se(o), u = 1 / 0, h = []; a--;) {
                        var l = t[a];
                        a && r && (l = jt(l, Yt(r))), u = br(l.length, u), c[a] = !n && (r || s >= 120 && l.length >= 120) ? new Jr(a && l) : e
                    }
                    l = t[0];
                    var p = -1,
                        d = c[0];
                    e: for (; ++p < s && h.length < u;) {
                        var f = l[p],
                            g = r ? r(f) : f;
                        if (f = n || 0 !== f ? f : 0, !(d ? Xt(d, g) : i(h, g, n))) {
                            for (a = o; --a;) {
                                var y = c[a];
                                if (!(y ? Xt(y, g) : i(t[a], g, n))) continue e
                            }
                            d && d.push(g), h.push(f)
                        }
                    }
                    return h
                }

                function An(t, r, n) {
                    var i = null == (t = Ts(t, r = _i(r, t))) ? t : t[qs(Ys(r))];
                    return null == i ? e : Pt(i, t, n)
                }

                function jn(e) {
                    return na(e) && Nn(e) == y
                }

                function Dn(t, r, n, i, s) {
                    return t === r || (null == t || null == r || !na(t) && !na(r) ? t != t && r != r : function(t, r, n, i, s, o) {
                        var a = Fo(t),
                            c = Fo(r),
                            u = a ? m : ys(t),
                            h = c ? m : ys(r),
                            l = (u = u == y ? P : u) == P,
                            p = (h = h == y ? P : h) == P,
                            d = u == h;
                        if (d && Qo(t)) {
                            if (!Qo(r)) return !1;
                            a = !0, l = !1
                        }
                        if (d && !l) return o || (o = new Qr), a || la(t) ? ns(t, r, n, i, s, o) : function(e, t, r, n, i, s, o) {
                            switch (r) {
                                case j:
                                    if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
                                    e = e.buffer, t = t.buffer;
                                case A:
                                    return !(e.byteLength != t.byteLength || !s(new Be(e), new Be(t)));
                                case v:
                                case w:
                                case S:
                                    return Vo(+e, +t);
                                case b:
                                    return e.name == t.name && e.message == t.message;
                                case N:
                                case T:
                                    return e == t + "";
                                case I:
                                    var a = or;
                                case R:
                                    var c = 1 & n;
                                    if (a || (a = ur), e.size != t.size && !c) return !1;
                                    var u = o.get(e);
                                    if (u) return u == t;
                                    n |= 2, o.set(e, t);
                                    var h = ns(a(e), a(t), n, i, s, o);
                                    return o.delete(e), h;
                                case x:
                                    if (Mr) return Mr.call(e) == Mr.call(t)
                            }
                            return !1
                        }(t, r, u, n, i, s, o);
                        if (!(1 & n)) {
                            var f = l && qe.call(t, "__wrapped__"),
                                g = p && qe.call(r, "__wrapped__");
                            if (f || g) {
                                var _ = f ? t.value() : t,
                                    E = g ? r.value() : r;
                                return o || (o = new Qr), s(_, E, n, i, o)
                            }
                        }
                        return !!d && (o || (o = new Qr), function(t, r, n, i, s, o) {
                            var a = 1 & n,
                                c = ss(t),
                                u = c.length,
                                h = ss(r),
                                l = h.length;
                            if (u != l && !a) return !1;
                            for (var p = u; p--;) {
                                var d = c[p];
                                if (!(a ? d in r : qe.call(r, d))) return !1
                            }
                            var f = o.get(t),
                                g = o.get(r);
                            if (f && g) return f == r && g == t;
                            var y = !0;
                            o.set(t, r), o.set(r, t);
                            for (var m = a; ++p < u;) {
                                var v = t[d = c[p]],
                                    w = r[d];
                                if (i) var b = a ? i(w, v, d, r, t, o) : i(v, w, d, t, r, o);
                                if (!(b === e ? v === w || s(v, w, n, i, o) : b)) {
                                    y = !1;
                                    break
                                }
                                m || (m = "constructor" == d)
                            }
                            if (y && !m) {
                                var _ = t.constructor,
                                    E = r.constructor;
                                _ != E && "constructor" in t && "constructor" in r && !("function" == typeof _ && _ instanceof _ && "function" == typeof E && E instanceof E) && (y = !1)
                            }
                            return o.delete(t), o.delete(r), y
                        }(t, r, n, i, s, o))
                    }(t, r, n, i, Dn, s))
                }

                function Un(t, r, n, i) {
                    var s = n.length,
                        o = s,
                        a = !i;
                    if (null == t) return !o;
                    for (t = Te(t); s--;) {
                        var c = n[s];
                        if (a && c[2] ? c[1] !== t[c[0]] : !(c[0] in t)) return !1
                    }
                    for (; ++s < o;) {
                        var u = (c = n[s])[0],
                            h = t[u],
                            l = c[1];
                        if (a && c[2]) {
                            if (h === e && !(u in t)) return !1
                        } else {
                            var p = new Qr;
                            if (i) var d = i(h, l, u, t, r, p);
                            if (!(d === e ? Dn(l, h, 3, i, p) : d)) return !1
                        }
                    }
                    return !0
                }

                function kn(e) {
                    return !(!ra(e) || function(e) {
                        return !!Le && Le in e
                    }(e)) && (Xo(e) ? He : ye).test(Ms(e))
                }

                function $n(e) {
                    return "function" == typeof e ? e : null == e ? sc : "object" == typeof e ? Fo(e) ? Kn(e[0], e[1]) : Vn(e) : fc(e)
                }

                function qn(e) {
                    if (!Ps(e)) return vr(e);
                    var t = [];
                    for (var r in Te(e)) qe.call(e, r) && "constructor" != r && t.push(r);
                    return t
                }

                function Mn(e) {
                    if (!ra(e)) return function(e) {
                        var t = [];
                        if (null != e)
                            for (var r in Te(e)) t.push(r);
                        return t
                    }(e);
                    var t = Ps(e),
                        r = [];
                    for (var n in e) "constructor" == n && (t || !qe.call(e, n)) || r.push(n);
                    return r
                }

                function Ln(e, t) {
                    return e < t
                }

                function zn(e, t) {
                    var r = -1,
                        n = Go(e) ? Se(e.length) : [];
                    return fn(e, (function(e, i, s) {
                        n[++r] = t(e, i, s)
                    })), n
                }

                function Vn(e) {
                    var t = ps(e);
                    return 1 == t.length && t[0][2] ? Ns(t[0][0], t[0][1]) : function(r) {
                        return r === e || Un(r, e, t)
                    }
                }

                function Kn(t, r) {
                    return Es(t) && Os(r) ? Ns(qs(t), r) : function(n) {
                        var i = Ra(n, t);
                        return i === e && i === r ? Ta(n, t) : Dn(r, i, 3)
                    }
                }

                function Hn(t, r, n, i, s) {
                    t !== r && bn(r, (function(o, a) {
                        if (s || (s = new Qr), ra(o)) ! function(t, r, n, i, s, o, a) {
                            var c = xs(t, n),
                                u = xs(r, n),
                                h = a.get(u);
                            if (h) tn(t, n, h);
                            else {
                                var l = o ? o(c, u, n + "", t, r, a) : e,
                                    p = l === e;
                                if (p) {
                                    var d = Fo(u),
                                        f = !d && Qo(u),
                                        g = !d && !f && la(u);
                                    l = u, d || f || g ? Fo(c) ? l = c : Jo(c) ? l = Ci(c) : f ? (p = !1, l = Pi(u, !0)) : g ? (p = !1, l = Ni(u, !0)) : l = [] : oa(u) || Wo(u) ? (l = c, Wo(c) ? l = wa(c) : (!ra(c) || Xo(c)) && (l = vs(u))) : p = !1
                                }
                                p && (a.set(u, l), s(l, u, i, o, a), a.delete(u)), tn(t, n, l)
                            }
                        }(t, r, a, n, Hn, i, s);
                        else {
                            var c = i ? i(xs(t, a), o, a + "", t, r, s) : e;
                            c === e && (c = o), tn(t, a, c)
                        }
                    }), Da)
                }

                function Wn(t, r) {
                    var n = t.length;
                    if (n) return bs(r += r < 0 ? n : 0, n) ? t[r] : e
                }

                function Fn(e, t, r) {
                    t = t.length ? jt(t, (function(e) {
                        return Fo(e) ? function(t) {
                            return Pn(t, 1 === e.length ? e[0] : e)
                        } : e
                    })) : [sc];
                    var n = -1;
                    return t = jt(t, Yt(hs())),
                        function(e, t) {
                            var r = e.length;
                            for (e.sort(t); r--;) e[r] = e[r].value;
                            return e
                        }(zn(e, (function(e, r, i) {
                            return {
                                criteria: jt(t, (function(t) {
                                    return t(e)
                                })),
                                index: ++n,
                                value: e
                            }
                        })), (function(e, t) {
                            return function(e, t, r) {
                                for (var n = -1, i = e.criteria, s = t.criteria, o = i.length, a = r.length; ++n < o;) {
                                    var c = Ri(i[n], s[n]);
                                    if (c) return n >= a ? c : c * ("desc" == r[n] ? -1 : 1)
                                }
                                return e.index - t.index
                            }(e, t, r)
                        }))
                }

                function Bn(e, t, r) {
                    for (var n = -1, i = t.length, s = {}; ++n < i;) {
                        var o = t[n],
                            a = Pn(e, o);
                        r(a, o) && ti(s, _i(o, e), a)
                    }
                    return s
                }

                function Gn(e, t, r, n) {
                    var i = n ? Vt : zt,
                        s = -1,
                        o = t.length,
                        a = e;
                    for (e === t && (t = Ci(t)), r && (a = jt(e, Yt(r))); ++s < o;)
                        for (var c = 0, u = t[s], h = r ? r(u) : u;
                            (c = i(a, h, c, n)) > -1;) a !== e && et.call(a, c, 1), et.call(e, c, 1);
                    return e
                }

                function Jn(e, t) {
                    for (var r = e ? t.length : 0, n = r - 1; r--;) {
                        var i = t[r];
                        if (r == n || i !== s) {
                            var s = i;
                            bs(i) ? et.call(e, i, 1) : di(e, i)
                        }
                    }
                    return e
                }

                function Qn(e, t) {
                    return e + qt(Ir() * (t - e + 1))
                }

                function Yn(e, t) {
                    var r = "";
                    if (!e || t < 1 || t > h) return r;
                    do {
                        t % 2 && (r += e), (t = qt(t / 2)) && (e += e)
                    } while (t);
                    return r
                }

                function Zn(e, t) {
                    return js(Rs(e, t, sc), e + "")
                }

                function Xn(e) {
                    return Zr(Va(e))
                }

                function ei(e, t) {
                    var r = Va(e);
                    return ks(r, un(t, 0, r.length))
                }

                function ti(t, r, n, i) {
                    if (!ra(t)) return t;
                    for (var s = -1, o = (r = _i(r, t)).length, a = o - 1, c = t; null != c && ++s < o;) {
                        var u = qs(r[s]),
                            h = n;
                        if ("__proto__" === u || "constructor" === u || "prototype" === u) return t;
                        if (s != a) {
                            var l = c[u];
                            (h = i ? i(l, u, c) : e) === e && (h = ra(l) ? l : bs(r[s + 1]) ? [] : {})
                        }
                        rn(c, u, h), c = c[u]
                    }
                    return t
                }
                var ri = Cr ? function(e, t) {
                        return Cr.set(e, t), e
                    } : sc,
                    ni = pt ? function(e, t) {
                        return pt(e, "toString", {
                            configurable: !0,
                            enumerable: !1,
                            value: rc(t),
                            writable: !0
                        })
                    } : sc;

                function ii(e) {
                    return ks(Va(e))
                }

                function si(e, t, r) {
                    var n = -1,
                        i = e.length;
                    t < 0 && (t = -t > i ? 0 : i + t), (r = r > i ? i : r) < 0 && (r += i), i = t > r ? 0 : r - t >>> 0, t >>>= 0;
                    for (var s = Se(i); ++n < i;) s[n] = e[n + t];
                    return s
                }

                function oi(e, t) {
                    var r;
                    return fn(e, (function(e, n, i) {
                        return !(r = t(e, n, i))
                    })), !!r
                }

                function ai(e, t, r) {
                    var n = 0,
                        i = null == e ? n : e.length;
                    if ("number" == typeof t && t == t && i <= f) {
                        for (; n < i;) {
                            var s = n + i >>> 1,
                                o = e[s];
                            null !== o && !ha(o) && (r ? o <= t : o < t) ? n = s + 1 : i = s
                        }
                        return i
                    }
                    return ci(e, t, sc, r)
                }

                function ci(t, r, n, i) {
                    var s = 0,
                        o = null == t ? 0 : t.length;
                    if (0 === o) return 0;
                    for (var a = (r = n(r)) != r, c = null === r, u = ha(r), h = r === e; s < o;) {
                        var l = qt((s + o) / 2),
                            p = n(t[l]),
                            f = p !== e,
                            g = null === p,
                            y = p == p,
                            m = ha(p);
                        if (a) var v = i || y;
                        else v = h ? y && (i || f) : c ? y && f && (i || !g) : u ? y && f && !g && (i || !m) : !g && !m && (i ? p <= r : p < r);
                        v ? s = l + 1 : o = l
                    }
                    return br(o, d)
                }

                function ui(e, t) {
                    for (var r = -1, n = e.length, i = 0, s = []; ++r < n;) {
                        var o = e[r],
                            a = t ? t(o) : o;
                        if (!r || !Vo(a, c)) {
                            var c = a;
                            s[i++] = 0 === o ? 0 : o
                        }
                    }
                    return s
                }

                function hi(e) {
                    return "number" == typeof e ? e : ha(e) ? l : +e
                }

                function li(e) {
                    if ("string" == typeof e) return e;
                    if (Fo(e)) return jt(e, li) + "";
                    if (ha(e)) return Lr ? Lr.call(e) : "";
                    var t = e + "";
                    return "0" == t && 1 / e == -1 / 0 ? "-0" : t
                }

                function pi(e, t, r) {
                    var n = -1,
                        i = Ct,
                        s = e.length,
                        o = !0,
                        a = [],
                        c = a;
                    if (r) o = !1, i = At;
                    else if (s >= 200) {
                        var u = t ? null : Yi(e);
                        if (u) return ur(u);
                        o = !1, i = Xt, c = new Jr
                    } else c = t ? [] : a;
                    e: for (; ++n < s;) {
                        var h = e[n],
                            l = t ? t(h) : h;
                        if (h = r || 0 !== h ? h : 0, o && l == l) {
                            for (var p = c.length; p--;)
                                if (c[p] === l) continue e;
                            t && c.push(l), a.push(h)
                        } else i(c, l, r) || (c !== a && c.push(l), a.push(h))
                    }
                    return a
                }

                function di(e, t) {
                    return null == (e = Ts(e, t = _i(t, e))) || delete e[qs(Ys(t))]
                }

                function fi(e, t, r, n) {
                    return ti(e, t, r(Pn(e, t)), n)
                }

                function gi(e, t, r, n) {
                    for (var i = e.length, s = n ? i : -1;
                        (n ? s-- : ++s < i) && t(e[s], s, e););
                    return r ? si(e, n ? 0 : s, n ? s + 1 : i) : si(e, n ? s + 1 : 0, n ? i : s)
                }

                function yi(e, t) {
                    var r = e;
                    return r instanceof Wr && (r = r.value()), Ut(t, (function(e, t) {
                        return t.func.apply(t.thisArg, Dt([e], t.args))
                    }), r)
                }

                function mi(e, t, r) {
                    var n = e.length;
                    if (n < 2) return n ? pi(e[0]) : [];
                    for (var i = -1, s = Se(n); ++i < n;)
                        for (var o = e[i], a = -1; ++a < n;) a != i && (s[i] = dn(s[i] || o, e[a], t, r));
                    return pi(wn(s, 1), t, r)
                }

                function vi(t, r, n) {
                    for (var i = -1, s = t.length, o = r.length, a = {}; ++i < s;) {
                        var c = i < o ? r[i] : e;
                        n(a, t[i], c)
                    }
                    return a
                }

                function wi(e) {
                    return Jo(e) ? e : []
                }

                function bi(e) {
                    return "function" == typeof e ? e : sc
                }

                function _i(e, t) {
                    return Fo(e) ? e : Es(e, t) ? [e] : $s(ba(e))
                }
                var Ei = Zn;

                function Ii(t, r, n) {
                    var i = t.length;
                    return n = n === e ? i : n, !r && n >= i ? t : si(t, r, n)
                }
                var Si = ft || function(e) {
                    return dt.clearTimeout(e)
                };

                function Pi(e, t) {
                    if (t) return e.slice();
                    var r = e.length,
                        n = Ge ? Ge(r) : new e.constructor(r);
                    return e.copy(n), n
                }

                function Oi(e) {
                    var t = new e.constructor(e.byteLength);
                    return new Be(t).set(new Be(e)), t
                }

                function Ni(e, t) {
                    var r = t ? Oi(e.buffer) : e.buffer;
                    return new e.constructor(r, e.byteOffset, e.length)
                }

                function Ri(t, r) {
                    if (t !== r) {
                        var n = t !== e,
                            i = null === t,
                            s = t == t,
                            o = ha(t),
                            a = r !== e,
                            c = null === r,
                            u = r == r,
                            h = ha(r);
                        if (!c && !h && !o && t > r || o && a && u && !c && !h || i && a && u || !n && u || !s) return 1;
                        if (!i && !o && !h && t < r || h && n && s && !i && !o || c && n && s || !a && s || !u) return -1
                    }
                    return 0
                }

                function Ti(e, t, r, n) {
                    for (var i = -1, s = e.length, o = r.length, a = -1, c = t.length, u = wr(s - o, 0), h = Se(c + u), l = !n; ++a < c;) h[a] = t[a];
                    for (; ++i < o;)(l || i < s) && (h[r[i]] = e[i]);
                    for (; u--;) h[a++] = e[i++];
                    return h
                }

                function xi(e, t, r, n) {
                    for (var i = -1, s = e.length, o = -1, a = r.length, c = -1, u = t.length, h = wr(s - a, 0), l = Se(h + u), p = !n; ++i < h;) l[i] = e[i];
                    for (var d = i; ++c < u;) l[d + c] = t[c];
                    for (; ++o < a;)(p || i < s) && (l[d + r[o]] = e[i++]);
                    return l
                }

                function Ci(e, t) {
                    var r = -1,
                        n = e.length;
                    for (t || (t = Se(n)); ++r < n;) t[r] = e[r];
                    return t
                }

                function Ai(t, r, n, i) {
                    var s = !n;
                    n || (n = {});
                    for (var o = -1, a = r.length; ++o < a;) {
                        var c = r[o],
                            u = i ? i(n[c], t[c], c, n, t) : e;
                        u === e && (u = t[c]), s ? an(n, c, u) : rn(n, c, u)
                    }
                    return n
                }

                function ji(e, t) {
                    return function(r, n) {
                        var i = Fo(r) ? Ot : sn,
                            s = t ? t() : {};
                        return i(r, e, hs(n, 2), s)
                    }
                }

                function Di(t) {
                    return Zn((function(r, n) {
                        var i = -1,
                            s = n.length,
                            o = s > 1 ? n[s - 1] : e,
                            a = s > 2 ? n[2] : e;
                        for (o = t.length > 3 && "function" == typeof o ? (s--, o) : e, a && _s(n[0], n[1], a) && (o = s < 3 ? e : o, s = 1), r = Te(r); ++i < s;) {
                            var c = n[i];
                            c && t(r, c, i, o)
                        }
                        return r
                    }))
                }

                function Ui(e, t) {
                    return function(r, n) {
                        if (null == r) return r;
                        if (!Go(r)) return e(r, n);
                        for (var i = r.length, s = t ? i : -1, o = Te(r);
                            (t ? s-- : ++s < i) && !1 !== n(o[s], s, o););
                        return r
                    }
                }

                function ki(e) {
                    return function(t, r, n) {
                        for (var i = -1, s = Te(t), o = n(t), a = o.length; a--;) {
                            var c = o[e ? a : ++i];
                            if (!1 === r(s[c], c, s)) break
                        }
                        return t
                    }
                }

                function $i(t) {
                    return function(r) {
                        var n = sr(r = ba(r)) ? lr(r) : e,
                            i = n ? n[0] : r.charAt(0),
                            s = n ? Ii(n, 1).join("") : r.slice(1);
                        return i[t]() + s
                    }
                }

                function qi(e) {
                    return function(t) {
                        return Ut(Xa(Wa(t).replace(Ze, "")), e, "")
                    }
                }

                function Mi(e) {
                    return function() {
                        var t = arguments;
                        switch (t.length) {
                            case 0:
                                return new e;
                            case 1:
                                return new e(t[0]);
                            case 2:
                                return new e(t[0], t[1]);
                            case 3:
                                return new e(t[0], t[1], t[2]);
                            case 4:
                                return new e(t[0], t[1], t[2], t[3]);
                            case 5:
                                return new e(t[0], t[1], t[2], t[3], t[4]);
                            case 6:
                                return new e(t[0], t[1], t[2], t[3], t[4], t[5]);
                            case 7:
                                return new e(t[0], t[1], t[2], t[3], t[4], t[5], t[6])
                        }
                        var r = Vr(e.prototype),
                            n = e.apply(r, t);
                        return ra(n) ? n : r
                    }
                }

                function Li(t) {
                    return function(r, n, i) {
                        var s = Te(r);
                        if (!Go(r)) {
                            var o = hs(n, 3);
                            r = ja(r), n = function(e) {
                                return o(s[e], e, s)
                            }
                        }
                        var a = t(r, n, i);
                        return a > -1 ? s[o ? r[a] : a] : e
                    }
                }

                function zi(r) {
                    return is((function(n) {
                        var i = n.length,
                            s = i,
                            o = Hr.prototype.thru;
                        for (r && n.reverse(); s--;) {
                            var a = n[s];
                            if ("function" != typeof a) throw new Ae(t);
                            if (o && !c && "wrapper" == cs(a)) var c = new Hr([], !0)
                        }
                        for (s = c ? s : i; ++s < i;) {
                            var u = cs(a = n[s]),
                                h = "wrapper" == u ? as(a) : e;
                            c = h && Is(h[0]) && 424 == h[1] && !h[4].length && 1 == h[9] ? c[cs(h[0])].apply(c, h[3]) : 1 == a.length && Is(a) ? c[u]() : c.thru(a)
                        }
                        return function() {
                            var e = arguments,
                                t = e[0];
                            if (c && 1 == e.length && Fo(t)) return c.plant(t).value();
                            for (var r = 0, s = i ? n[r].apply(this, e) : t; ++r < i;) s = n[r].call(this, s);
                            return s
                        }
                    }))
                }

                function Vi(t, r, n, i, s, o, c, u, h, l) {
                    var p = r & a,
                        d = 1 & r,
                        f = 2 & r,
                        g = 24 & r,
                        y = 512 & r,
                        m = f ? e : Mi(t);
                    return function a() {
                        for (var v = arguments.length, w = Se(v), b = v; b--;) w[b] = arguments[b];
                        if (g) var _ = us(a),
                            E = function(e, t) {
                                for (var r = e.length, n = 0; r--;) e[r] === t && ++n;
                                return n
                            }(w, _);
                        if (i && (w = Ti(w, i, s, g)), o && (w = xi(w, o, c, g)), v -= E, g && v < l) {
                            var I = cr(w, _);
                            return Ji(t, r, Vi, a.placeholder, n, w, I, u, h, l - v)
                        }
                        var S = d ? n : this,
                            P = f ? S[t] : t;
                        return v = w.length, u ? w = function(t, r) {
                            for (var n = t.length, i = br(r.length, n), s = Ci(t); i--;) {
                                var o = r[i];
                                t[i] = bs(o, n) ? s[o] : e
                            }
                            return t
                        }(w, u) : y && v > 1 && w.reverse(), p && h < v && (w.length = h), this && this !== dt && this instanceof a && (P = m || Mi(P)), P.apply(S, w)
                    }
                }

                function Ki(e, t) {
                    return function(r, n) {
                        return function(e, t, r, n) {
                            return En(e, (function(e, i, s) {
                                t(n, r(e), i, s)
                            })), n
                        }(r, e, t(n), {})
                    }
                }

                function Hi(t, r) {
                    return function(n, i) {
                        var s;
                        if (n === e && i === e) return r;
                        if (n !== e && (s = n), i !== e) {
                            if (s === e) return i;
                            "string" == typeof n || "string" == typeof i ? (n = li(n), i = li(i)) : (n = hi(n), i = hi(i)), s = t(n, i)
                        }
                        return s
                    }
                }

                function Wi(e) {
                    return is((function(t) {
                        return t = jt(t, Yt(hs())), Zn((function(r) {
                            var n = this;
                            return e(t, (function(e) {
                                return Pt(e, n, r)
                            }))
                        }))
                    }))
                }

                function Fi(t, r) {
                    var n = (r = r === e ? " " : li(r)).length;
                    if (n < 2) return n ? Yn(r, t) : r;
                    var i = Yn(r, vt(t / hr(r)));
                    return sr(r) ? Ii(lr(i), 0, t).join("") : i.slice(0, t)
                }

                function Bi(t) {
                    return function(r, n, i) {
                        return i && "number" != typeof i && _s(r, n, i) && (n = i = e), r = ga(r), n === e ? (n = r, r = 0) : n = ga(n),
                            function(e, t, r, n) {
                                for (var i = -1, s = wr(vt((t - e) / (r || 1)), 0), o = Se(s); s--;) o[n ? s : ++i] = e, e += r;
                                return o
                            }(r, n, i = i === e ? r < n ? 1 : -1 : ga(i), t)
                    }
                }

                function Gi(e) {
                    return function(t, r) {
                        return "string" == typeof t && "string" == typeof r || (t = va(t), r = va(r)), e(t, r)
                    }
                }

                function Ji(t, r, n, i, a, c, u, h, l, p) {
                    var d = 8 & r;
                    r |= d ? s : o, 4 & (r &= ~(d ? o : s)) || (r &= -4);
                    var f = [t, r, a, d ? c : e, d ? u : e, d ? e : c, d ? e : u, h, l, p],
                        g = n.apply(e, f);
                    return Is(t) && Cs(g, f), g.placeholder = i, Ds(g, t, r)
                }

                function Qi(e) {
                    var t = Re[e];
                    return function(e, r) {
                        if (e = va(e), (r = null == r ? 0 : br(ya(r), 292)) && yr(e)) {
                            var n = (ba(e) + "e").split("e");
                            return +((n = (ba(t(n[0] + "e" + (+n[1] + r))) + "e").split("e"))[0] + "e" + (+n[1] - r))
                        }
                        return t(e)
                    }
                }
                var Yi = Rr && 1 / ur(new Rr([, -0]))[1] == u ? function(e) {
                    return new Rr(e)
                } : hc;

                function Zi(e) {
                    return function(t) {
                        var r = ys(t);
                        return r == I ? or(t) : r == R ? function(e) {
                            var t = -1,
                                r = Array(e.size);
                            return e.forEach((function(e) {
                                r[++t] = [e, e]
                            })), r
                        }(t) : function(e, t) {
                            return jt(t, (function(t) {
                                return [t, e[t]]
                            }))
                        }(t, e(t))
                    }
                }

                function Xi(r, u, h, l, p, d, f, g) {
                    var y = 2 & u;
                    if (!y && "function" != typeof r) throw new Ae(t);
                    var m = l ? l.length : 0;
                    if (m || (u &= -97, l = p = e), f = f === e ? f : wr(ya(f), 0), g = g === e ? g : ya(g), m -= p ? p.length : 0, u & o) {
                        var v = l,
                            w = p;
                        l = p = e
                    }
                    var b = y ? e : as(r),
                        _ = [r, u, h, l, p, v, w, d, f, g];
                    if (b && function(e, t) {
                            var r = e[1],
                                i = t[1],
                                s = r | i,
                                o = s < 131,
                                u = i == a && 8 == r || i == a && r == c && e[7].length <= t[8] || 384 == i && t[7].length <= t[8] && 8 == r;
                            if (!o && !u) return e;
                            1 & i && (e[2] = t[2], s |= 1 & r ? 0 : 4);
                            var h = t[3];
                            if (h) {
                                var l = e[3];
                                e[3] = l ? Ti(l, h, t[4]) : h, e[4] = l ? cr(e[3], n) : t[4]
                            }(h = t[5]) && (l = e[5], e[5] = l ? xi(l, h, t[6]) : h, e[6] = l ? cr(e[5], n) : t[6]), (h = t[7]) && (e[7] = h), i & a && (e[8] = null == e[8] ? t[8] : br(e[8], t[8])), null == e[9] && (e[9] = t[9]), e[0] = t[0], e[1] = s
                        }(_, b), r = _[0], u = _[1], h = _[2], l = _[3], p = _[4], !(g = _[9] = _[9] === e ? y ? 0 : r.length : wr(_[9] - m, 0)) && 24 & u && (u &= -25), u && 1 != u) E = 8 == u || u == i ? function(t, r, n) {
                        var i = Mi(t);
                        return function s() {
                            for (var o = arguments.length, a = Se(o), c = o, u = us(s); c--;) a[c] = arguments[c];
                            var h = o < 3 && a[0] !== u && a[o - 1] !== u ? [] : cr(a, u);
                            return (o -= h.length) < n ? Ji(t, r, Vi, s.placeholder, e, a, h, e, e, n - o) : Pt(this && this !== dt && this instanceof s ? i : t, this, a)
                        }
                    }(r, u, g) : u != s && 33 != u || p.length ? Vi.apply(e, _) : function(e, t, r, n) {
                        var i = 1 & t,
                            s = Mi(e);
                        return function t() {
                            for (var o = -1, a = arguments.length, c = -1, u = n.length, h = Se(u + a), l = this && this !== dt && this instanceof t ? s : e; ++c < u;) h[c] = n[c];
                            for (; a--;) h[c++] = arguments[++o];
                            return Pt(l, i ? r : this, h)
                        }
                    }(r, u, h, l);
                    else var E = function(e, t, r) {
                        var n = 1 & t,
                            i = Mi(e);
                        return function t() {
                            return (this && this !== dt && this instanceof t ? i : e).apply(n ? r : this, arguments)
                        }
                    }(r, u, h);
                    return Ds((b ? ri : Cs)(E, _), r, u)
                }

                function es(t, r, n, i) {
                    return t === e || Vo(t, Ue[n]) && !qe.call(i, n) ? r : t
                }

                function ts(t, r, n, i, s, o) {
                    return ra(t) && ra(r) && (o.set(r, t), Hn(t, r, e, ts, o), o.delete(r)), t
                }

                function rs(t) {
                    return oa(t) ? e : t
                }

                function ns(t, r, n, i, s, o) {
                    var a = 1 & n,
                        c = t.length,
                        u = r.length;
                    if (c != u && !(a && u > c)) return !1;
                    var h = o.get(t),
                        l = o.get(r);
                    if (h && l) return h == r && l == t;
                    var p = -1,
                        d = !0,
                        f = 2 & n ? new Jr : e;
                    for (o.set(t, r), o.set(r, t); ++p < c;) {
                        var g = t[p],
                            y = r[p];
                        if (i) var m = a ? i(y, g, p, r, t, o) : i(g, y, p, t, r, o);
                        if (m !== e) {
                            if (m) continue;
                            d = !1;
                            break
                        }
                        if (f) {
                            if (!$t(r, (function(e, t) {
                                    if (!Xt(f, t) && (g === e || s(g, e, n, i, o))) return f.push(t)
                                }))) {
                                d = !1;
                                break
                            }
                        } else if (g !== y && !s(g, y, n, i, o)) {
                            d = !1;
                            break
                        }
                    }
                    return o.delete(t), o.delete(r), d
                }

                function is(t) {
                    return js(Rs(t, e, Fs), t + "")
                }

                function ss(e) {
                    return On(e, ja, fs)
                }

                function os(e) {
                    return On(e, Da, gs)
                }
                var as = Cr ? function(e) {
                    return Cr.get(e)
                } : hc;

                function cs(e) {
                    for (var t = e.name + "", r = Ar[t], n = qe.call(Ar, t) ? r.length : 0; n--;) {
                        var i = r[n],
                            s = i.func;
                        if (null == s || s == e) return i.name
                    }
                    return t
                }

                function us(e) {
                    return (qe.call(zr, "placeholder") ? zr : e).placeholder
                }

                function hs() {
                    var e = zr.iteratee || oc;
                    return e = e === oc ? $n : e, arguments.length ? e(arguments[0], arguments[1]) : e
                }

                function ls(e, t) {
                    var r = e.__data__;
                    return function(e) {
                        var t = typeof e;
                        return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
                    }(t) ? r["string" == typeof t ? "string" : "hash"] : r.map
                }

                function ps(e) {
                    for (var t = ja(e), r = t.length; r--;) {
                        var n = t[r],
                            i = e[n];
                        t[r] = [n, i, Os(i)]
                    }
                    return t
                }

                function ds(t, r) {
                    var n = function(t, r) {
                        return null == t ? e : t[r]
                    }(t, r);
                    return kn(n) ? n : e
                }
                var fs = Ft ? function(e) {
                        return null == e ? [] : (e = Te(e), xt(Ft(e), (function(t) {
                            return Ye.call(e, t)
                        })))
                    } : mc,
                    gs = Ft ? function(e) {
                        for (var t = []; e;) Dt(t, fs(e)), e = Je(e);
                        return t
                    } : mc,
                    ys = Nn;

                function ms(e, t, r) {
                    for (var n = -1, i = (t = _i(t, e)).length, s = !1; ++n < i;) {
                        var o = qs(t[n]);
                        if (!(s = null != e && r(e, o))) break;
                        e = e[o]
                    }
                    return s || ++n != i ? s : !!(i = null == e ? 0 : e.length) && ta(i) && bs(o, i) && (Fo(e) || Wo(e))
                }

                function vs(e) {
                    return "function" != typeof e.constructor || Ps(e) ? {} : Vr(Je(e))
                }

                function ws(e) {
                    return Fo(e) || Wo(e) || !!(rt && e && e[rt])
                }

                function bs(e, t) {
                    var r = typeof e;
                    return !!(t = t ? ? h) && ("number" == r || "symbol" != r && ve.test(e)) && e > -1 && e % 1 == 0 && e < t
                }

                function _s(e, t, r) {
                    if (!ra(r)) return !1;
                    var n = typeof t;
                    return !!("number" == n ? Go(r) && bs(t, r.length) : "string" == n && t in r) && Vo(r[t], e)
                }

                function Es(e, t) {
                    if (Fo(e)) return !1;
                    var r = typeof e;
                    return !("number" != r && "symbol" != r && "boolean" != r && null != e && !ha(e)) || ee.test(e) || !X.test(e) || null != t && e in Te(t)
                }

                function Is(e) {
                    var t = cs(e),
                        r = zr[t];
                    if ("function" != typeof r || !(t in Wr.prototype)) return !1;
                    if (e === r) return !0;
                    var n = as(r);
                    return !!n && e === n[0]
                }(Pr && ys(new Pr(new ArrayBuffer(1))) != j || Or && ys(new Or) != I || Nr && ys(Nr.resolve()) != O || Rr && ys(new Rr) != R || Tr && ys(new Tr) != C) && (ys = function(t) {
                    var r = Nn(t),
                        n = r == P ? t.constructor : e,
                        i = n ? Ms(n) : "";
                    if (i) switch (i) {
                        case jr:
                            return j;
                        case Dr:
                            return I;
                        case Ur:
                            return O;
                        case kr:
                            return R;
                        case $r:
                            return C
                    }
                    return r
                });
                var Ss = ke ? Xo : vc;

                function Ps(e) {
                    var t = e && e.constructor;
                    return e === ("function" == typeof t && t.prototype || Ue)
                }

                function Os(e) {
                    return e == e && !ra(e)
                }

                function Ns(t, r) {
                    return function(n) {
                        return null != n && n[t] === r && (r !== e || t in Te(n))
                    }
                }

                function Rs(t, r, n) {
                    return r = wr(r === e ? t.length - 1 : r, 0),
                        function() {
                            for (var e = arguments, i = -1, s = wr(e.length - r, 0), o = Se(s); ++i < s;) o[i] = e[r + i];
                            i = -1;
                            for (var a = Se(r + 1); ++i < r;) a[i] = e[i];
                            return a[r] = n(o), Pt(t, this, a)
                        }
                }

                function Ts(e, t) {
                    return t.length < 2 ? e : Pn(e, si(t, 0, -1))
                }

                function xs(e, t) {
                    if (("constructor" !== t || "function" != typeof e[t]) && "__proto__" != t) return e[t]
                }
                var Cs = Us(ri),
                    As = mt || function(e, t) {
                        return dt.setTimeout(e, t)
                    },
                    js = Us(ni);

                function Ds(e, t, r) {
                    var n = t + "";
                    return js(e, function(e, t) {
                        var r = t.length;
                        if (!r) return e;
                        var n = r - 1;
                        return t[n] = (r > 1 ? "& " : "") + t[n], t = t.join(r > 2 ? ", " : " "), e.replace(oe, "{\n/* [wrapped with " + t + "] */\n")
                    }(n, function(e, t) {
                        return Nt(g, (function(r) {
                            var n = "_." + r[0];
                            t & r[1] && !Ct(e, n) && e.push(n)
                        })), e.sort()
                    }(function(e) {
                        var t = e.match(ae);
                        return t ? t[1].split(ce) : []
                    }(n), r)))
                }

                function Us(t) {
                    var r = 0,
                        n = 0;
                    return function() {
                        var i = _r(),
                            s = 16 - (i - n);
                        if (n = i, s > 0) {
                            if (++r >= 800) return arguments[0]
                        } else r = 0;
                        return t.apply(e, arguments)
                    }
                }

                function ks(t, r) {
                    var n = -1,
                        i = t.length,
                        s = i - 1;
                    for (r = r === e ? i : r; ++n < r;) {
                        var o = Qn(n, s),
                            a = t[o];
                        t[o] = t[n], t[n] = a
                    }
                    return t.length = r, t
                }
                var $s = function(e) {
                    var t = ko(e, (function(e) {
                            return 500 === r.size && r.clear(), e
                        })),
                        r = t.cache;
                    return t
                }((function(e) {
                    var t = [];
                    return 46 === e.charCodeAt(0) && t.push(""), e.replace(te, (function(e, r, n, i) {
                        t.push(n ? i.replace(le, "$1") : r || e)
                    })), t
                }));

                function qs(e) {
                    if ("string" == typeof e || ha(e)) return e;
                    var t = e + "";
                    return "0" == t && 1 / e == -1 / 0 ? "-0" : t
                }

                function Ms(e) {
                    if (null != e) {
                        try {
                            return $e.call(e)
                        } catch {}
                        try {
                            return e + ""
                        } catch {}
                    }
                    return ""
                }

                function Ls(e) {
                    if (e instanceof Wr) return e.clone();
                    var t = new Hr(e.__wrapped__, e.__chain__);
                    return t.__actions__ = Ci(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t
                }
                var zs = Zn((function(e, t) {
                        return Jo(e) ? dn(e, wn(t, 1, Jo, !0)) : []
                    })),
                    Vs = Zn((function(t, r) {
                        var n = Ys(r);
                        return Jo(n) && (n = e), Jo(t) ? dn(t, wn(r, 1, Jo, !0), hs(n, 2)) : []
                    })),
                    Ks = Zn((function(t, r) {
                        var n = Ys(r);
                        return Jo(n) && (n = e), Jo(t) ? dn(t, wn(r, 1, Jo, !0), e, n) : []
                    }));

                function Hs(e, t, r) {
                    var n = null == e ? 0 : e.length;
                    if (!n) return -1;
                    var i = null == r ? 0 : ya(r);
                    return i < 0 && (i = wr(n + i, 0)), Lt(e, hs(t, 3), i)
                }

                function Ws(t, r, n) {
                    var i = null == t ? 0 : t.length;
                    if (!i) return -1;
                    var s = i - 1;
                    return n !== e && (s = ya(n), s = n < 0 ? wr(i + s, 0) : br(s, i - 1)), Lt(t, hs(r, 3), s, !0)
                }

                function Fs(e) {
                    return null != e && e.length ? wn(e, 1) : []
                }

                function Bs(t) {
                    return t && t.length ? t[0] : e
                }
                var Gs = Zn((function(e) {
                        var t = jt(e, wi);
                        return t.length && t[0] === e[0] ? Cn(t) : []
                    })),
                    Js = Zn((function(t) {
                        var r = Ys(t),
                            n = jt(t, wi);
                        return r === Ys(n) ? r = e : n.pop(), n.length && n[0] === t[0] ? Cn(n, hs(r, 2)) : []
                    })),
                    Qs = Zn((function(t) {
                        var r = Ys(t),
                            n = jt(t, wi);
                        return (r = "function" == typeof r ? r : e) && n.pop(), n.length && n[0] === t[0] ? Cn(n, e, r) : []
                    }));

                function Ys(t) {
                    var r = null == t ? 0 : t.length;
                    return r ? t[r - 1] : e
                }
                var Zs = Zn(Xs);

                function Xs(e, t) {
                    return e && e.length && t && t.length ? Gn(e, t) : e
                }
                var eo = is((function(e, t) {
                    var r = null == e ? 0 : e.length,
                        n = cn(e, t);
                    return Jn(e, jt(t, (function(e) {
                        return bs(e, r) ? +e : e
                    })).sort(Ri)), n
                }));

                function to(e) {
                    return null == e ? e : Sr.call(e)
                }
                var ro = Zn((function(e) {
                        return pi(wn(e, 1, Jo, !0))
                    })),
                    no = Zn((function(t) {
                        var r = Ys(t);
                        return Jo(r) && (r = e), pi(wn(t, 1, Jo, !0), hs(r, 2))
                    })),
                    io = Zn((function(t) {
                        var r = Ys(t);
                        return r = "function" == typeof r ? r : e, pi(wn(t, 1, Jo, !0), e, r)
                    }));

                function so(e) {
                    if (!e || !e.length) return [];
                    var t = 0;
                    return e = xt(e, (function(e) {
                        if (Jo(e)) return t = wr(e.length, t), !0
                    })), Jt(t, (function(t) {
                        return jt(e, Wt(t))
                    }))
                }

                function oo(t, r) {
                    if (!t || !t.length) return [];
                    var n = so(t);
                    return null == r ? n : jt(n, (function(t) {
                        return Pt(r, e, t)
                    }))
                }
                var ao = Zn((function(e, t) {
                        return Jo(e) ? dn(e, t) : []
                    })),
                    co = Zn((function(e) {
                        return mi(xt(e, Jo))
                    })),
                    uo = Zn((function(t) {
                        var r = Ys(t);
                        return Jo(r) && (r = e), mi(xt(t, Jo), hs(r, 2))
                    })),
                    ho = Zn((function(t) {
                        var r = Ys(t);
                        return r = "function" == typeof r ? r : e, mi(xt(t, Jo), e, r)
                    })),
                    lo = Zn(so),
                    po = Zn((function(t) {
                        var r = t.length,
                            n = r > 1 ? t[r - 1] : e;
                        return n = "function" == typeof n ? (t.pop(), n) : e, oo(t, n)
                    }));

                function fo(e) {
                    var t = zr(e);
                    return t.__chain__ = !0, t
                }

                function go(e, t) {
                    return t(e)
                }
                var yo = is((function(t) {
                        var r = t.length,
                            n = r ? t[0] : 0,
                            i = this.__wrapped__,
                            s = function(e) {
                                return cn(e, t)
                            };
                        return !(r > 1 || this.__actions__.length) && i instanceof Wr && bs(n) ? ((i = i.slice(n, +n + (r ? 1 : 0))).__actions__.push({
                            func: go,
                            args: [s],
                            thisArg: e
                        }), new Hr(i, this.__chain__).thru((function(t) {
                            return r && !t.length && t.push(e), t
                        }))) : this.thru(s)
                    })),
                    mo = ji((function(e, t, r) {
                        qe.call(e, r) ? ++e[r] : an(e, r, 1)
                    })),
                    vo = Li(Hs),
                    wo = Li(Ws);

                function bo(e, t) {
                    return (Fo(e) ? Nt : fn)(e, hs(t, 3))
                }

                function _o(e, t) {
                    return (Fo(e) ? Rt : gn)(e, hs(t, 3))
                }
                var Eo = ji((function(e, t, r) {
                        qe.call(e, r) ? e[r].push(t) : an(e, r, [t])
                    })),
                    Io = Zn((function(e, t, r) {
                        var n = -1,
                            i = "function" == typeof t,
                            s = Go(e) ? Se(e.length) : [];
                        return fn(e, (function(e) {
                            s[++n] = i ? Pt(t, e, r) : An(e, t, r)
                        })), s
                    })),
                    So = ji((function(e, t, r) {
                        an(e, r, t)
                    }));

                function Po(e, t) {
                    return (Fo(e) ? jt : zn)(e, hs(t, 3))
                }
                var Oo = ji((function(e, t, r) {
                        e[r ? 0 : 1].push(t)
                    }), (function() {
                        return [
                            [],
                            []
                        ]
                    })),
                    No = Zn((function(e, t) {
                        if (null == e) return [];
                        var r = t.length;
                        return r > 1 && _s(e, t[0], t[1]) ? t = [] : r > 2 && _s(t[0], t[1], t[2]) && (t = [t[0]]), Fn(e, wn(t, 1), [])
                    })),
                    Ro = gt || function() {
                        return dt.Date.now()
                    };

                function To(t, r, n) {
                    return r = n ? e : r, r = t && null == r ? t.length : r, Xi(t, a, e, e, e, e, r)
                }

                function xo(r, n) {
                    var i;
                    if ("function" != typeof n) throw new Ae(t);
                    return r = ya(r),
                        function() {
                            return --r > 0 && (i = n.apply(this, arguments)), r <= 1 && (n = e), i
                        }
                }
                var Co = Zn((function(e, t, r) {
                        var n = 1;
                        if (r.length) {
                            var i = cr(r, us(Co));
                            n |= s
                        }
                        return Xi(e, n, t, r, i)
                    })),
                    Ao = Zn((function(e, t, r) {
                        var n = 3;
                        if (r.length) {
                            var i = cr(r, us(Ao));
                            n |= s
                        }
                        return Xi(t, n, e, r, i)
                    }));

                function jo(r, n, i) {
                    var s, o, a, c, u, h, l = 0,
                        p = !1,
                        d = !1,
                        f = !0;
                    if ("function" != typeof r) throw new Ae(t);

                    function g(t) {
                        var n = s,
                            i = o;
                        return s = o = e, l = t, c = r.apply(i, n)
                    }

                    function y(t) {
                        var r = t - h;
                        return h === e || r >= n || r < 0 || d && t - l >= a
                    }

                    function m() {
                        var e = Ro();
                        if (y(e)) return v(e);
                        u = As(m, function(e) {
                            var t = n - (e - h);
                            return d ? br(t, a - (e - l)) : t
                        }(e))
                    }

                    function v(t) {
                        return u = e, f && s ? g(t) : (s = o = e, c)
                    }

                    function w() {
                        var t = Ro(),
                            r = y(t);
                        if (s = arguments, o = this, h = t, r) {
                            if (u === e) return function(e) {
                                return l = e, u = As(m, n), p ? g(e) : c
                            }(h);
                            if (d) return Si(u), u = As(m, n), g(h)
                        }
                        return u === e && (u = As(m, n)), c
                    }
                    return n = va(n) || 0, ra(i) && (p = !!i.leading, a = (d = "maxWait" in i) ? wr(va(i.maxWait) || 0, n) : a, f = "trailing" in i ? !!i.trailing : f), w.cancel = function() {
                        u !== e && Si(u), l = 0, s = h = o = u = e
                    }, w.flush = function() {
                        return u === e ? c : v(Ro())
                    }, w
                }
                var Do = Zn((function(e, t) {
                        return pn(e, 1, t)
                    })),
                    Uo = Zn((function(e, t, r) {
                        return pn(e, va(t) || 0, r)
                    }));

                function ko(e, r) {
                    if ("function" != typeof e || null != r && "function" != typeof r) throw new Ae(t);
                    var n = function() {
                        var t = arguments,
                            i = r ? r.apply(this, t) : t[0],
                            s = n.cache;
                        if (s.has(i)) return s.get(i);
                        var o = e.apply(this, t);
                        return n.cache = s.set(i, o) || s, o
                    };
                    return n.cache = new(ko.Cache || Gr), n
                }

                function $o(e) {
                    if ("function" != typeof e) throw new Ae(t);
                    return function() {
                        var t = arguments;
                        switch (t.length) {
                            case 0:
                                return !e.call(this);
                            case 1:
                                return !e.call(this, t[0]);
                            case 2:
                                return !e.call(this, t[0], t[1]);
                            case 3:
                                return !e.call(this, t[0], t[1], t[2])
                        }
                        return !e.apply(this, t)
                    }
                }
                ko.Cache = Gr;
                var qo = Ei((function(e, t) {
                        var r = (t = 1 == t.length && Fo(t[0]) ? jt(t[0], Yt(hs())) : jt(wn(t, 1), Yt(hs()))).length;
                        return Zn((function(n) {
                            for (var i = -1, s = br(n.length, r); ++i < s;) n[i] = t[i].call(this, n[i]);
                            return Pt(e, this, n)
                        }))
                    })),
                    Mo = Zn((function(t, r) {
                        var n = cr(r, us(Mo));
                        return Xi(t, s, e, r, n)
                    })),
                    Lo = Zn((function(t, r) {
                        var n = cr(r, us(Lo));
                        return Xi(t, o, e, r, n)
                    })),
                    zo = is((function(t, r) {
                        return Xi(t, c, e, e, e, r)
                    }));

                function Vo(e, t) {
                    return e === t || e != e && t != t
                }
                var Ko = Gi(Rn),
                    Ho = Gi((function(e, t) {
                        return e >= t
                    })),
                    Wo = jn(function() {
                        return arguments
                    }()) ? jn : function(e) {
                        return na(e) && qe.call(e, "callee") && !Ye.call(e, "callee")
                    },
                    Fo = Se.isArray,
                    Bo = wt ? Yt(wt) : function(e) {
                        return na(e) && Nn(e) == A
                    };

                function Go(e) {
                    return null != e && ta(e.length) && !Xo(e)
                }

                function Jo(e) {
                    return na(e) && Go(e)
                }
                var Qo = gr || vc,
                    Yo = bt ? Yt(bt) : function(e) {
                        return na(e) && Nn(e) == w
                    };

                function Zo(e) {
                    if (!na(e)) return !1;
                    var t = Nn(e);
                    return t == b || "[object DOMException]" == t || "string" == typeof e.message && "string" == typeof e.name && !oa(e)
                }

                function Xo(e) {
                    if (!ra(e)) return !1;
                    var t = Nn(e);
                    return t == _ || t == E || "[object AsyncFunction]" == t || "[object Proxy]" == t
                }

                function ea(e) {
                    return "number" == typeof e && e == ya(e)
                }

                function ta(e) {
                    return "number" == typeof e && e > -1 && e % 1 == 0 && e <= h
                }

                function ra(e) {
                    var t = typeof e;
                    return null != e && ("object" == t || "function" == t)
                }

                function na(e) {
                    return null != e && "object" == typeof e
                }
                var ia = _t ? Yt(_t) : function(e) {
                    return na(e) && ys(e) == I
                };

                function sa(e) {
                    return "number" == typeof e || na(e) && Nn(e) == S
                }

                function oa(e) {
                    if (!na(e) || Nn(e) != P) return !1;
                    var t = Je(e);
                    if (null === t) return !0;
                    var r = qe.call(t, "constructor") && t.constructor;
                    return "function" == typeof r && r instanceof r && $e.call(r) == Ve
                }
                var aa = Et ? Yt(Et) : function(e) {
                        return na(e) && Nn(e) == N
                    },
                    ca = It ? Yt(It) : function(e) {
                        return na(e) && ys(e) == R
                    };

                function ua(e) {
                    return "string" == typeof e || !Fo(e) && na(e) && Nn(e) == T
                }

                function ha(e) {
                    return "symbol" == typeof e || na(e) && Nn(e) == x
                }
                var la = St ? Yt(St) : function(e) {
                        return na(e) && ta(e.length) && !!ot[Nn(e)]
                    },
                    pa = Gi(Ln),
                    da = Gi((function(e, t) {
                        return e <= t
                    }));

                function fa(e) {
                    if (!e) return [];
                    if (Go(e)) return ua(e) ? lr(e) : Ci(e);
                    if (ct && e[ct]) return function(e) {
                        for (var t, r = []; !(t = e.next()).done;) r.push(t.value);
                        return r
                    }(e[ct]());
                    var t = ys(e);
                    return (t == I ? or : t == R ? ur : Va)(e)
                }

                function ga(e) {
                    return e ? (e = va(e)) === u || e === -1 / 0 ? 17976931348623157e292 * (e < 0 ? -1 : 1) : e == e ? e : 0 : 0 === e ? e : 0
                }

                function ya(e) {
                    var t = ga(e),
                        r = t % 1;
                    return t == t ? r ? t - r : t : 0
                }

                function ma(e) {
                    return e ? un(ya(e), 0, p) : 0
                }

                function va(e) {
                    if ("number" == typeof e) return e;
                    if (ha(e)) return l;
                    if (ra(e)) {
                        var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                        e = ra(t) ? t + "" : t
                    }
                    if ("string" != typeof e) return 0 === e ? e : +e;
                    e = Qt(e);
                    var r = ge.test(e);
                    return r || me.test(e) ? ht(e.slice(2), r ? 2 : 8) : fe.test(e) ? l : +e
                }

                function wa(e) {
                    return Ai(e, Da(e))
                }

                function ba(e) {
                    return null == e ? "" : li(e)
                }
                var _a = Di((function(e, t) {
                        if (Ps(t) || Go(t)) Ai(t, ja(t), e);
                        else
                            for (var r in t) qe.call(t, r) && rn(e, r, t[r])
                    })),
                    Ea = Di((function(e, t) {
                        Ai(t, Da(t), e)
                    })),
                    Ia = Di((function(e, t, r, n) {
                        Ai(t, Da(t), e, n)
                    })),
                    Sa = Di((function(e, t, r, n) {
                        Ai(t, ja(t), e, n)
                    })),
                    Pa = is(cn),
                    Oa = Zn((function(t, r) {
                        t = Te(t);
                        var n = -1,
                            i = r.length,
                            s = i > 2 ? r[2] : e;
                        for (s && _s(r[0], r[1], s) && (i = 1); ++n < i;)
                            for (var o = r[n], a = Da(o), c = -1, u = a.length; ++c < u;) {
                                var h = a[c],
                                    l = t[h];
                                (l === e || Vo(l, Ue[h]) && !qe.call(t, h)) && (t[h] = o[h])
                            }
                        return t
                    })),
                    Na = Zn((function(t) {
                        return t.push(e, ts), Pt(ka, e, t)
                    }));

                function Ra(t, r, n) {
                    var i = null == t ? e : Pn(t, r);
                    return i === e ? n : i
                }

                function Ta(e, t) {
                    return null != e && ms(e, t, xn)
                }
                var xa = Ki((function(e, t, r) {
                        null != t && "function" != typeof t.toString && (t = ze.call(t)), e[t] = r
                    }), rc(sc)),
                    Ca = Ki((function(e, t, r) {
                        null != t && "function" != typeof t.toString && (t = ze.call(t)), qe.call(e, t) ? e[t].push(r) : e[t] = [r]
                    }), hs),
                    Aa = Zn(An);

                function ja(e) {
                    return Go(e) ? Yr(e) : qn(e)
                }

                function Da(e) {
                    return Go(e) ? Yr(e, !0) : Mn(e)
                }
                var Ua = Di((function(e, t, r) {
                        Hn(e, t, r)
                    })),
                    ka = Di((function(e, t, r, n) {
                        Hn(e, t, r, n)
                    })),
                    $a = is((function(e, t) {
                        var r = {};
                        if (null == e) return r;
                        var n = !1;
                        t = jt(t, (function(t) {
                            return t = _i(t, e), n || (n = t.length > 1), t
                        })), Ai(e, os(e), r), n && (r = hn(r, 7, rs));
                        for (var i = t.length; i--;) di(r, t[i]);
                        return r
                    })),
                    qa = is((function(e, t) {
                        return null == e ? {} : function(e, t) {
                            return Bn(e, t, (function(t, r) {
                                return Ta(e, r)
                            }))
                        }(e, t)
                    }));

                function Ma(e, t) {
                    if (null == e) return {};
                    var r = jt(os(e), (function(e) {
                        return [e]
                    }));
                    return t = hs(t), Bn(e, r, (function(e, r) {
                        return t(e, r[0])
                    }))
                }
                var La = Zi(ja),
                    za = Zi(Da);

                function Va(e) {
                    return null == e ? [] : Zt(e, ja(e))
                }
                var Ka = qi((function(e, t, r) {
                    return t = t.toLowerCase(), e + (r ? Ha(t) : t)
                }));

                function Ha(e) {
                    return Za(ba(e).toLowerCase())
                }

                function Wa(e) {
                    return (e = ba(e)) && e.replace(we, rr).replace(Xe, "")
                }
                var Fa = qi((function(e, t, r) {
                        return e + (r ? "-" : "") + t.toLowerCase()
                    })),
                    Ba = qi((function(e, t, r) {
                        return e + (r ? " " : "") + t.toLowerCase()
                    })),
                    Ga = $i("toLowerCase"),
                    Ja = qi((function(e, t, r) {
                        return e + (r ? "_" : "") + t.toLowerCase()
                    })),
                    Qa = qi((function(e, t, r) {
                        return e + (r ? " " : "") + Za(t)
                    })),
                    Ya = qi((function(e, t, r) {
                        return e + (r ? " " : "") + t.toUpperCase()
                    })),
                    Za = $i("toUpperCase");

                function Xa(t, r, n) {
                    return t = ba(t), (r = n ? e : r) === e ? function(e) {
                        return nt.test(e)
                    }(t) ? function(e) {
                        return e.match(tt) || []
                    }(t) : function(e) {
                        return e.match(ue) || []
                    }(t) : t.match(r) || []
                }
                var ec = Zn((function(t, r) {
                        try {
                            return Pt(t, e, r)
                        } catch (n) {
                            return Zo(n) ? n : new Oe(n)
                        }
                    })),
                    tc = is((function(e, t) {
                        return Nt(t, (function(t) {
                            t = qs(t), an(e, t, Co(e[t], e))
                        })), e
                    }));

                function rc(e) {
                    return function() {
                        return e
                    }
                }
                var nc = zi(),
                    ic = zi(!0);

                function sc(e) {
                    return e
                }

                function oc(e) {
                    return $n("function" == typeof e ? e : hn(e, 1))
                }
                var ac = Zn((function(e, t) {
                        return function(r) {
                            return An(r, e, t)
                        }
                    })),
                    cc = Zn((function(e, t) {
                        return function(r) {
                            return An(e, r, t)
                        }
                    }));

                function uc(e, t, r) {
                    var n = ja(t),
                        i = Sn(t, n);
                    null == r && (!ra(t) || !i.length && n.length) && (r = t, t = e, e = this, i = Sn(t, ja(t)));
                    var s = !(ra(r) && "chain" in r && !r.chain),
                        o = Xo(e);
                    return Nt(i, (function(r) {
                        var n = t[r];
                        e[r] = n, o && (e.prototype[r] = function() {
                            var t = this.__chain__;
                            if (s || t) {
                                var r = e(this.__wrapped__);
                                return (r.__actions__ = Ci(this.__actions__)).push({
                                    func: n,
                                    args: arguments,
                                    thisArg: e
                                }), r.__chain__ = t, r
                            }
                            return n.apply(e, Dt([this.value()], arguments))
                        })
                    })), e
                }

                function hc() {}
                var lc = Wi(jt),
                    pc = Wi(Tt),
                    dc = Wi($t);

                function fc(e) {
                    return Es(e) ? Wt(qs(e)) : function(e) {
                        return function(t) {
                            return Pn(t, e)
                        }
                    }(e)
                }
                var gc = Bi(),
                    yc = Bi(!0);

                function mc() {
                    return []
                }

                function vc() {
                    return !1
                }
                var wc = Hi((function(e, t) {
                        return e + t
                    }), 0),
                    bc = Qi("ceil"),
                    _c = Hi((function(e, t) {
                        return e / t
                    }), 1),
                    Ec = Qi("floor"),
                    Ic = Hi((function(e, t) {
                        return e * t
                    }), 1),
                    Sc = Qi("round"),
                    Pc = Hi((function(e, t) {
                        return e - t
                    }), 0);
                return zr.after = function(e, r) {
                    if ("function" != typeof r) throw new Ae(t);
                    return e = ya(e),
                        function() {
                            if (--e < 1) return r.apply(this, arguments)
                        }
                }, zr.ary = To, zr.assign = _a, zr.assignIn = Ea, zr.assignInWith = Ia, zr.assignWith = Sa, zr.at = Pa, zr.before = xo, zr.bind = Co, zr.bindAll = tc, zr.bindKey = Ao, zr.castArray = function() {
                    if (!arguments.length) return [];
                    var e = arguments[0];
                    return Fo(e) ? e : [e]
                }, zr.chain = fo, zr.chunk = function(t, r, n) {
                    r = (n ? _s(t, r, n) : r === e) ? 1 : wr(ya(r), 0);
                    var i = null == t ? 0 : t.length;
                    if (!i || r < 1) return [];
                    for (var s = 0, o = 0, a = Se(vt(i / r)); s < i;) a[o++] = si(t, s, s += r);
                    return a
                }, zr.compact = function(e) {
                    for (var t = -1, r = null == e ? 0 : e.length, n = 0, i = []; ++t < r;) {
                        var s = e[t];
                        s && (i[n++] = s)
                    }
                    return i
                }, zr.concat = function() {
                    var e = arguments.length;
                    if (!e) return [];
                    for (var t = Se(e - 1), r = arguments[0], n = e; n--;) t[n - 1] = arguments[n];
                    return Dt(Fo(r) ? Ci(r) : [r], wn(t, 1))
                }, zr.cond = function(e) {
                    var r = null == e ? 0 : e.length,
                        n = hs();
                    return e = r ? jt(e, (function(e) {
                        if ("function" != typeof e[1]) throw new Ae(t);
                        return [n(e[0]), e[1]]
                    })) : [], Zn((function(t) {
                        for (var n = -1; ++n < r;) {
                            var i = e[n];
                            if (Pt(i[0], this, t)) return Pt(i[1], this, t)
                        }
                    }))
                }, zr.conforms = function(e) {
                    return function(e) {
                        var t = ja(e);
                        return function(r) {
                            return ln(r, e, t)
                        }
                    }(hn(e, 1))
                }, zr.constant = rc, zr.countBy = mo, zr.create = function(e, t) {
                    var r = Vr(e);
                    return null == t ? r : on(r, t)
                }, zr.curry = function t(r, n, i) {
                    var s = Xi(r, 8, e, e, e, e, e, n = i ? e : n);
                    return s.placeholder = t.placeholder, s
                }, zr.curryRight = function t(r, n, s) {
                    var o = Xi(r, i, e, e, e, e, e, n = s ? e : n);
                    return o.placeholder = t.placeholder, o
                }, zr.debounce = jo, zr.defaults = Oa, zr.defaultsDeep = Na, zr.defer = Do, zr.delay = Uo, zr.difference = zs, zr.differenceBy = Vs, zr.differenceWith = Ks, zr.drop = function(t, r, n) {
                    var i = null == t ? 0 : t.length;
                    return i ? si(t, (r = n || r === e ? 1 : ya(r)) < 0 ? 0 : r, i) : []
                }, zr.dropRight = function(t, r, n) {
                    var i = null == t ? 0 : t.length;
                    return i ? si(t, 0, (r = i - (r = n || r === e ? 1 : ya(r))) < 0 ? 0 : r) : []
                }, zr.dropRightWhile = function(e, t) {
                    return e && e.length ? gi(e, hs(t, 3), !0, !0) : []
                }, zr.dropWhile = function(e, t) {
                    return e && e.length ? gi(e, hs(t, 3), !0) : []
                }, zr.fill = function(t, r, n, i) {
                    var s = null == t ? 0 : t.length;
                    return s ? (n && "number" != typeof n && _s(t, r, n) && (n = 0, i = s), function(t, r, n, i) {
                        var s = t.length;
                        for ((n = ya(n)) < 0 && (n = -n > s ? 0 : s + n), (i = i === e || i > s ? s : ya(i)) < 0 && (i += s), i = n > i ? 0 : ma(i); n < i;) t[n++] = r;
                        return t
                    }(t, r, n, i)) : []
                }, zr.filter = function(e, t) {
                    return (Fo(e) ? xt : vn)(e, hs(t, 3))
                }, zr.flatMap = function(e, t) {
                    return wn(Po(e, t), 1)
                }, zr.flatMapDeep = function(e, t) {
                    return wn(Po(e, t), u)
                }, zr.flatMapDepth = function(t, r, n) {
                    return n = n === e ? 1 : ya(n), wn(Po(t, r), n)
                }, zr.flatten = Fs, zr.flattenDeep = function(e) {
                    return null != e && e.length ? wn(e, u) : []
                }, zr.flattenDepth = function(t, r) {
                    return null != t && t.length ? wn(t, r = r === e ? 1 : ya(r)) : []
                }, zr.flip = function(e) {
                    return Xi(e, 512)
                }, zr.flow = nc, zr.flowRight = ic, zr.fromPairs = function(e) {
                    for (var t = -1, r = null == e ? 0 : e.length, n = {}; ++t < r;) {
                        var i = e[t];
                        n[i[0]] = i[1]
                    }
                    return n
                }, zr.functions = function(e) {
                    return null == e ? [] : Sn(e, ja(e))
                }, zr.functionsIn = function(e) {
                    return null == e ? [] : Sn(e, Da(e))
                }, zr.groupBy = Eo, zr.initial = function(e) {
                    return null != e && e.length ? si(e, 0, -1) : []
                }, zr.intersection = Gs, zr.intersectionBy = Js, zr.intersectionWith = Qs, zr.invert = xa, zr.invertBy = Ca, zr.invokeMap = Io, zr.iteratee = oc, zr.keyBy = So, zr.keys = ja, zr.keysIn = Da, zr.map = Po, zr.mapKeys = function(e, t) {
                    var r = {};
                    return t = hs(t, 3), En(e, (function(e, n, i) {
                        an(r, t(e, n, i), e)
                    })), r
                }, zr.mapValues = function(e, t) {
                    var r = {};
                    return t = hs(t, 3), En(e, (function(e, n, i) {
                        an(r, n, t(e, n, i))
                    })), r
                }, zr.matches = function(e) {
                    return Vn(hn(e, 1))
                }, zr.matchesProperty = function(e, t) {
                    return Kn(e, hn(t, 1))
                }, zr.memoize = ko, zr.merge = Ua, zr.mergeWith = ka, zr.method = ac, zr.methodOf = cc, zr.mixin = uc, zr.negate = $o, zr.nthArg = function(e) {
                    return e = ya(e), Zn((function(t) {
                        return Wn(t, e)
                    }))
                }, zr.omit = $a, zr.omitBy = function(e, t) {
                    return Ma(e, $o(hs(t)))
                }, zr.once = function(e) {
                    return xo(2, e)
                }, zr.orderBy = function(t, r, n, i) {
                    return null == t ? [] : (Fo(r) || (r = null == r ? [] : [r]), Fo(n = i ? e : n) || (n = null == n ? [] : [n]), Fn(t, r, n))
                }, zr.over = lc, zr.overArgs = qo, zr.overEvery = pc, zr.overSome = dc, zr.partial = Mo, zr.partialRight = Lo, zr.partition = Oo, zr.pick = qa, zr.pickBy = Ma, zr.property = fc, zr.propertyOf = function(t) {
                    return function(r) {
                        return null == t ? e : Pn(t, r)
                    }
                }, zr.pull = Zs, zr.pullAll = Xs, zr.pullAllBy = function(e, t, r) {
                    return e && e.length && t && t.length ? Gn(e, t, hs(r, 2)) : e
                }, zr.pullAllWith = function(t, r, n) {
                    return t && t.length && r && r.length ? Gn(t, r, e, n) : t
                }, zr.pullAt = eo, zr.range = gc, zr.rangeRight = yc, zr.rearg = zo, zr.reject = function(e, t) {
                    return (Fo(e) ? xt : vn)(e, $o(hs(t, 3)))
                }, zr.remove = function(e, t) {
                    var r = [];
                    if (!e || !e.length) return r;
                    var n = -1,
                        i = [],
                        s = e.length;
                    for (t = hs(t, 3); ++n < s;) {
                        var o = e[n];
                        t(o, n, e) && (r.push(o), i.push(n))
                    }
                    return Jn(e, i), r
                }, zr.rest = function(r, n) {
                    if ("function" != typeof r) throw new Ae(t);
                    return Zn(r, n = n === e ? n : ya(n))
                }, zr.reverse = to, zr.sampleSize = function(t, r, n) {
                    return r = (n ? _s(t, r, n) : r === e) ? 1 : ya(r), (Fo(t) ? Xr : ei)(t, r)
                }, zr.set = function(e, t, r) {
                    return null == e ? e : ti(e, t, r)
                }, zr.setWith = function(t, r, n, i) {
                    return i = "function" == typeof i ? i : e, null == t ? t : ti(t, r, n, i)
                }, zr.shuffle = function(e) {
                    return (Fo(e) ? en : ii)(e)
                }, zr.slice = function(t, r, n) {
                    var i = null == t ? 0 : t.length;
                    return i ? (n && "number" != typeof n && _s(t, r, n) ? (r = 0, n = i) : (r = null == r ? 0 : ya(r), n = n === e ? i : ya(n)), si(t, r, n)) : []
                }, zr.sortBy = No, zr.sortedUniq = function(e) {
                    return e && e.length ? ui(e) : []
                }, zr.sortedUniqBy = function(e, t) {
                    return e && e.length ? ui(e, hs(t, 2)) : []
                }, zr.split = function(t, r, n) {
                    return n && "number" != typeof n && _s(t, r, n) && (r = n = e), (n = n === e ? p : n >>> 0) ? (t = ba(t)) && ("string" == typeof r || null != r && !aa(r)) && !(r = li(r)) && sr(t) ? Ii(lr(t), 0, n) : t.split(r, n) : []
                }, zr.spread = function(e, r) {
                    if ("function" != typeof e) throw new Ae(t);
                    return r = null == r ? 0 : wr(ya(r), 0), Zn((function(t) {
                        var n = t[r],
                            i = Ii(t, 0, r);
                        return n && Dt(i, n), Pt(e, this, i)
                    }))
                }, zr.tail = function(e) {
                    var t = null == e ? 0 : e.length;
                    return t ? si(e, 1, t) : []
                }, zr.take = function(t, r, n) {
                    return t && t.length ? si(t, 0, (r = n || r === e ? 1 : ya(r)) < 0 ? 0 : r) : []
                }, zr.takeRight = function(t, r, n) {
                    var i = null == t ? 0 : t.length;
                    return i ? si(t, (r = i - (r = n || r === e ? 1 : ya(r))) < 0 ? 0 : r, i) : []
                }, zr.takeRightWhile = function(e, t) {
                    return e && e.length ? gi(e, hs(t, 3), !1, !0) : []
                }, zr.takeWhile = function(e, t) {
                    return e && e.length ? gi(e, hs(t, 3)) : []
                }, zr.tap = function(e, t) {
                    return t(e), e
                }, zr.throttle = function(e, r, n) {
                    var i = !0,
                        s = !0;
                    if ("function" != typeof e) throw new Ae(t);
                    return ra(n) && (i = "leading" in n ? !!n.leading : i, s = "trailing" in n ? !!n.trailing : s), jo(e, r, {
                        leading: i,
                        maxWait: r,
                        trailing: s
                    })
                }, zr.thru = go, zr.toArray = fa, zr.toPairs = La, zr.toPairsIn = za, zr.toPath = function(e) {
                    return Fo(e) ? jt(e, qs) : ha(e) ? [e] : Ci($s(ba(e)))
                }, zr.toPlainObject = wa, zr.transform = function(e, t, r) {
                    var n = Fo(e),
                        i = n || Qo(e) || la(e);
                    if (t = hs(t, 4), null == r) {
                        var s = e && e.constructor;
                        r = i ? n ? new s : [] : ra(e) && Xo(s) ? Vr(Je(e)) : {}
                    }
                    return (i ? Nt : En)(e, (function(e, n, i) {
                        return t(r, e, n, i)
                    })), r
                }, zr.unary = function(e) {
                    return To(e, 1)
                }, zr.union = ro, zr.unionBy = no, zr.unionWith = io, zr.uniq = function(e) {
                    return e && e.length ? pi(e) : []
                }, zr.uniqBy = function(e, t) {
                    return e && e.length ? pi(e, hs(t, 2)) : []
                }, zr.uniqWith = function(t, r) {
                    return r = "function" == typeof r ? r : e, t && t.length ? pi(t, e, r) : []
                }, zr.unset = function(e, t) {
                    return null == e || di(e, t)
                }, zr.unzip = so, zr.unzipWith = oo, zr.update = function(e, t, r) {
                    return null == e ? e : fi(e, t, bi(r))
                }, zr.updateWith = function(t, r, n, i) {
                    return i = "function" == typeof i ? i : e, null == t ? t : fi(t, r, bi(n), i)
                }, zr.values = Va, zr.valuesIn = function(e) {
                    return null == e ? [] : Zt(e, Da(e))
                }, zr.without = ao, zr.words = Xa, zr.wrap = function(e, t) {
                    return Mo(bi(t), e)
                }, zr.xor = co, zr.xorBy = uo, zr.xorWith = ho, zr.zip = lo, zr.zipObject = function(e, t) {
                    return vi(e || [], t || [], rn)
                }, zr.zipObjectDeep = function(e, t) {
                    return vi(e || [], t || [], ti)
                }, zr.zipWith = po, zr.entries = La, zr.entriesIn = za, zr.extend = Ea, zr.extendWith = Ia, uc(zr, zr), zr.add = wc, zr.attempt = ec, zr.camelCase = Ka, zr.capitalize = Ha, zr.ceil = bc, zr.clamp = function(t, r, n) {
                    return n === e && (n = r, r = e), n !== e && (n = (n = va(n)) == n ? n : 0), r !== e && (r = (r = va(r)) == r ? r : 0), un(va(t), r, n)
                }, zr.clone = function(e) {
                    return hn(e, 4)
                }, zr.cloneDeep = function(e) {
                    return hn(e, 5)
                }, zr.cloneDeepWith = function(t, r) {
                    return hn(t, 5, r = "function" == typeof r ? r : e)
                }, zr.cloneWith = function(t, r) {
                    return hn(t, 4, r = "function" == typeof r ? r : e)
                }, zr.conformsTo = function(e, t) {
                    return null == t || ln(e, t, ja(t))
                }, zr.deburr = Wa, zr.defaultTo = function(e, t) {
                    return null == e || e != e ? t : e
                }, zr.divide = _c, zr.endsWith = function(t, r, n) {
                    t = ba(t), r = li(r);
                    var i = t.length,
                        s = n = n === e ? i : un(ya(n), 0, i);
                    return (n -= r.length) >= 0 && t.slice(n, s) == r
                }, zr.eq = Vo, zr.escape = function(e) {
                    return (e = ba(e)) && J.test(e) ? e.replace(B, nr) : e
                }, zr.escapeRegExp = function(e) {
                    return (e = ba(e)) && ne.test(e) ? e.replace(re, "\\$&") : e
                }, zr.every = function(t, r, n) {
                    var i = Fo(t) ? Tt : yn;
                    return n && _s(t, r, n) && (r = e), i(t, hs(r, 3))
                }, zr.find = vo, zr.findIndex = Hs, zr.findKey = function(e, t) {
                    return Mt(e, hs(t, 3), En)
                }, zr.findLast = wo, zr.findLastIndex = Ws, zr.findLastKey = function(e, t) {
                    return Mt(e, hs(t, 3), In)
                }, zr.floor = Ec, zr.forEach = bo, zr.forEachRight = _o, zr.forIn = function(e, t) {
                    return null == e ? e : bn(e, hs(t, 3), Da)
                }, zr.forInRight = function(e, t) {
                    return null == e ? e : _n(e, hs(t, 3), Da)
                }, zr.forOwn = function(e, t) {
                    return e && En(e, hs(t, 3))
                }, zr.forOwnRight = function(e, t) {
                    return e && In(e, hs(t, 3))
                }, zr.get = Ra, zr.gt = Ko, zr.gte = Ho, zr.has = function(e, t) {
                    return null != e && ms(e, t, Tn)
                }, zr.hasIn = Ta, zr.head = Bs, zr.identity = sc, zr.includes = function(e, t, r, n) {
                    e = Go(e) ? e : Va(e), r = r && !n ? ya(r) : 0;
                    var i = e.length;
                    return r < 0 && (r = wr(i + r, 0)), ua(e) ? r <= i && e.indexOf(t, r) > -1 : !!i && zt(e, t, r) > -1
                }, zr.indexOf = function(e, t, r) {
                    var n = null == e ? 0 : e.length;
                    if (!n) return -1;
                    var i = null == r ? 0 : ya(r);
                    return i < 0 && (i = wr(n + i, 0)), zt(e, t, i)
                }, zr.inRange = function(t, r, n) {
                    return r = ga(r), n === e ? (n = r, r = 0) : n = ga(n),
                        function(e, t, r) {
                            return e >= br(t, r) && e < wr(t, r)
                        }(t = va(t), r, n)
                }, zr.invoke = Aa, zr.isArguments = Wo, zr.isArray = Fo, zr.isArrayBuffer = Bo, zr.isArrayLike = Go, zr.isArrayLikeObject = Jo, zr.isBoolean = function(e) {
                    return !0 === e || !1 === e || na(e) && Nn(e) == v
                }, zr.isBuffer = Qo, zr.isDate = Yo, zr.isElement = function(e) {
                    return na(e) && 1 === e.nodeType && !oa(e)
                }, zr.isEmpty = function(e) {
                    if (null == e) return !0;
                    if (Go(e) && (Fo(e) || "string" == typeof e || "function" == typeof e.splice || Qo(e) || la(e) || Wo(e))) return !e.length;
                    var t = ys(e);
                    if (t == I || t == R) return !e.size;
                    if (Ps(e)) return !qn(e).length;
                    for (var r in e)
                        if (qe.call(e, r)) return !1;
                    return !0
                }, zr.isEqual = function(e, t) {
                    return Dn(e, t)
                }, zr.isEqualWith = function(t, r, n) {
                    var i = (n = "function" == typeof n ? n : e) ? n(t, r) : e;
                    return i === e ? Dn(t, r, e, n) : !!i
                }, zr.isError = Zo, zr.isFinite = function(e) {
                    return "number" == typeof e && yr(e)
                }, zr.isFunction = Xo, zr.isInteger = ea, zr.isLength = ta, zr.isMap = ia, zr.isMatch = function(e, t) {
                    return e === t || Un(e, t, ps(t))
                }, zr.isMatchWith = function(t, r, n) {
                    return n = "function" == typeof n ? n : e, Un(t, r, ps(r), n)
                }, zr.isNaN = function(e) {
                    return sa(e) && e != +e
                }, zr.isNative = function(e) {
                    if (Ss(e)) throw new Oe("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");
                    return kn(e)
                }, zr.isNil = function(e) {
                    return null == e
                }, zr.isNull = function(e) {
                    return null === e
                }, zr.isNumber = sa, zr.isObject = ra, zr.isObjectLike = na, zr.isPlainObject = oa, zr.isRegExp = aa, zr.isSafeInteger = function(e) {
                    return ea(e) && e >= -h && e <= h
                }, zr.isSet = ca, zr.isString = ua, zr.isSymbol = ha, zr.isTypedArray = la, zr.isUndefined = function(t) {
                    return t === e
                }, zr.isWeakMap = function(e) {
                    return na(e) && ys(e) == C
                }, zr.isWeakSet = function(e) {
                    return na(e) && "[object WeakSet]" == Nn(e)
                }, zr.join = function(e, t) {
                    return null == e ? "" : mr.call(e, t)
                }, zr.kebabCase = Fa, zr.last = Ys, zr.lastIndexOf = function(t, r, n) {
                    var i = null == t ? 0 : t.length;
                    if (!i) return -1;
                    var s = i;
                    return n !== e && (s = (s = ya(n)) < 0 ? wr(i + s, 0) : br(s, i - 1)), r == r ? function(e, t, r) {
                        for (var n = r + 1; n--;)
                            if (e[n] === t) return n;
                        return n
                    }(t, r, s) : Lt(t, Kt, s, !0)
                }, zr.lowerCase = Ba, zr.lowerFirst = Ga, zr.lt = pa, zr.lte = da, zr.max = function(t) {
                    return t && t.length ? mn(t, sc, Rn) : e
                }, zr.maxBy = function(t, r) {
                    return t && t.length ? mn(t, hs(r, 2), Rn) : e
                }, zr.mean = function(e) {
                    return Ht(e, sc)
                }, zr.meanBy = function(e, t) {
                    return Ht(e, hs(t, 2))
                }, zr.min = function(t) {
                    return t && t.length ? mn(t, sc, Ln) : e
                }, zr.minBy = function(t, r) {
                    return t && t.length ? mn(t, hs(r, 2), Ln) : e
                }, zr.stubArray = mc, zr.stubFalse = vc, zr.stubObject = function() {
                    return {}
                }, zr.stubString = function() {
                    return ""
                }, zr.stubTrue = function() {
                    return !0
                }, zr.multiply = Ic, zr.nth = function(t, r) {
                    return t && t.length ? Wn(t, ya(r)) : e
                }, zr.noConflict = function() {
                    return dt._ === this && (dt._ = Ke), this
                }, zr.noop = hc, zr.now = Ro, zr.pad = function(e, t, r) {
                    e = ba(e);
                    var n = (t = ya(t)) ? hr(e) : 0;
                    if (!t || n >= t) return e;
                    var i = (t - n) / 2;
                    return Fi(qt(i), r) + e + Fi(vt(i), r)
                }, zr.padEnd = function(e, t, r) {
                    e = ba(e);
                    var n = (t = ya(t)) ? hr(e) : 0;
                    return t && n < t ? e + Fi(t - n, r) : e
                }, zr.padStart = function(e, t, r) {
                    e = ba(e);
                    var n = (t = ya(t)) ? hr(e) : 0;
                    return t && n < t ? Fi(t - n, r) + e : e
                }, zr.parseInt = function(e, t, r) {
                    return r || null == t ? t = 0 : t && (t = +t), Er(ba(e).replace(ie, ""), t || 0)
                }, zr.random = function(t, r, n) {
                    if (n && "boolean" != typeof n && _s(t, r, n) && (r = n = e), n === e && ("boolean" == typeof r ? (n = r, r = e) : "boolean" == typeof t && (n = t, t = e)), t === e && r === e ? (t = 0, r = 1) : (t = ga(t), r === e ? (r = t, t = 0) : r = ga(r)), t > r) {
                        var i = t;
                        t = r, r = i
                    }
                    if (n || t % 1 || r % 1) {
                        var s = Ir();
                        return br(t + s * (r - t + ut("1e-" + ((s + "").length - 1))), r)
                    }
                    return Qn(t, r)
                }, zr.reduce = function(e, t, r) {
                    var n = Fo(e) ? Ut : Bt,
                        i = arguments.length < 3;
                    return n(e, hs(t, 4), r, i, fn)
                }, zr.reduceRight = function(e, t, r) {
                    var n = Fo(e) ? kt : Bt,
                        i = arguments.length < 3;
                    return n(e, hs(t, 4), r, i, gn)
                }, zr.repeat = function(t, r, n) {
                    return r = (n ? _s(t, r, n) : r === e) ? 1 : ya(r), Yn(ba(t), r)
                }, zr.replace = function() {
                    var e = arguments,
                        t = ba(e[0]);
                    return e.length < 3 ? t : t.replace(e[1], e[2])
                }, zr.result = function(t, r, n) {
                    var i = -1,
                        s = (r = _i(r, t)).length;
                    for (s || (s = 1, t = e); ++i < s;) {
                        var o = null == t ? e : t[qs(r[i])];
                        o === e && (i = s, o = n), t = Xo(o) ? o.call(t) : o
                    }
                    return t
                }, zr.round = Sc, zr.runInContext = se, zr.sample = function(e) {
                    return (Fo(e) ? Zr : Xn)(e)
                }, zr.size = function(e) {
                    if (null == e) return 0;
                    if (Go(e)) return ua(e) ? hr(e) : e.length;
                    var t = ys(e);
                    return t == I || t == R ? e.size : qn(e).length
                }, zr.snakeCase = Ja, zr.some = function(t, r, n) {
                    var i = Fo(t) ? $t : oi;
                    return n && _s(t, r, n) && (r = e), i(t, hs(r, 3))
                }, zr.sortedIndex = function(e, t) {
                    return ai(e, t)
                }, zr.sortedIndexBy = function(e, t, r) {
                    return ci(e, t, hs(r, 2))
                }, zr.sortedIndexOf = function(e, t) {
                    var r = null == e ? 0 : e.length;
                    if (r) {
                        var n = ai(e, t);
                        if (n < r && Vo(e[n], t)) return n
                    }
                    return -1
                }, zr.sortedLastIndex = function(e, t) {
                    return ai(e, t, !0)
                }, zr.sortedLastIndexBy = function(e, t, r) {
                    return ci(e, t, hs(r, 2), !0)
                }, zr.sortedLastIndexOf = function(e, t) {
                    if (null != e && e.length) {
                        var r = ai(e, t, !0) - 1;
                        if (Vo(e[r], t)) return r
                    }
                    return -1
                }, zr.startCase = Qa, zr.startsWith = function(e, t, r) {
                    return e = ba(e), r = null == r ? 0 : un(ya(r), 0, e.length), t = li(t), e.slice(r, r + t.length) == t
                }, zr.subtract = Pc, zr.sum = function(e) {
                    return e && e.length ? Gt(e, sc) : 0
                }, zr.sumBy = function(e, t) {
                    return e && e.length ? Gt(e, hs(t, 2)) : 0
                }, zr.template = function(t, r, n) {
                    var i = zr.templateSettings;
                    n && _s(t, r, n) && (r = e), t = ba(t), r = Ia({}, r, i, es);
                    var s, o, a = Ia({}, r.imports, i.imports, es),
                        c = ja(a),
                        u = Zt(a, c),
                        h = 0,
                        l = r.interpolate || be,
                        p = "__p += '",
                        d = xe((r.escape || be).source + "|" + l.source + "|" + (l === Z ? pe : be).source + "|" + (r.evaluate || be).source + "|$", "g"),
                        f = "//# sourceURL=" + (qe.call(r, "sourceURL") ? (r.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++st + "]") + "\n";
                    t.replace(d, (function(e, r, n, i, a, c) {
                        return n || (n = i), p += t.slice(h, c).replace(_e, ir), r && (s = !0, p += "' +\n__e(" + r + ") +\n'"), a && (o = !0, p += "';\n" + a + ";\n__p += '"), n && (p += "' +\n((__t = (" + n + ")) == null ? '' : __t) +\n'"), h = c + e.length, e
                    })), p += "';\n";
                    var g = qe.call(r, "variable") && r.variable;
                    if (g) {
                        if (he.test(g)) throw new Oe("Invalid `variable` option passed into `_.template`")
                    } else p = "with (obj) {\n" + p + "\n}\n";
                    p = (o ? p.replace(K, "") : p).replace(H, "$1").replace(W, "$1;"), p = "function(" + (g || "obj") + ") {\n" + (g ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (s ? ", __e = _.escape" : "") + (o ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + p + "return __p\n}";
                    var y = ec((function() {
                        return Ne(c, f + "return " + p).apply(e, u)
                    }));
                    if (y.source = p, Zo(y)) throw y;
                    return y
                }, zr.times = function(e, t) {
                    if ((e = ya(e)) < 1 || e > h) return [];
                    var r = p,
                        n = br(e, p);
                    t = hs(t), e -= p;
                    for (var i = Jt(n, t); ++r < e;) t(r);
                    return i
                }, zr.toFinite = ga, zr.toInteger = ya, zr.toLength = ma, zr.toLower = function(e) {
                    return ba(e).toLowerCase()
                }, zr.toNumber = va, zr.toSafeInteger = function(e) {
                    return e ? un(ya(e), -h, h) : 0 === e ? e : 0
                }, zr.toString = ba, zr.toUpper = function(e) {
                    return ba(e).toUpperCase()
                }, zr.trim = function(t, r, n) {
                    if ((t = ba(t)) && (n || r === e)) return Qt(t);
                    if (!t || !(r = li(r))) return t;
                    var i = lr(t),
                        s = lr(r);
                    return Ii(i, er(i, s), tr(i, s) + 1).join("")
                }, zr.trimEnd = function(t, r, n) {
                    if ((t = ba(t)) && (n || r === e)) return t.slice(0, pr(t) + 1);
                    if (!t || !(r = li(r))) return t;
                    var i = lr(t);
                    return Ii(i, 0, tr(i, lr(r)) + 1).join("")
                }, zr.trimStart = function(t, r, n) {
                    if ((t = ba(t)) && (n || r === e)) return t.replace(ie, "");
                    if (!t || !(r = li(r))) return t;
                    var i = lr(t);
                    return Ii(i, er(i, lr(r))).join("")
                }, zr.truncate = function(t, r) {
                    var n = 30,
                        i = "...";
                    if (ra(r)) {
                        var s = "separator" in r ? r.separator : s;
                        n = "length" in r ? ya(r.length) : n, i = "omission" in r ? li(r.omission) : i
                    }
                    var o = (t = ba(t)).length;
                    if (sr(t)) {
                        var a = lr(t);
                        o = a.length
                    }
                    if (n >= o) return t;
                    var c = n - hr(i);
                    if (c < 1) return i;
                    var u = a ? Ii(a, 0, c).join("") : t.slice(0, c);
                    if (s === e) return u + i;
                    if (a && (c += u.length - c), aa(s)) {
                        if (t.slice(c).search(s)) {
                            var h, l = u;
                            for (s.global || (s = xe(s.source, ba(de.exec(s)) + "g")), s.lastIndex = 0; h = s.exec(l);) var p = h.index;
                            u = u.slice(0, p === e ? c : p)
                        }
                    } else if (t.indexOf(li(s), c) != c) {
                        var d = u.lastIndexOf(s);
                        d > -1 && (u = u.slice(0, d))
                    }
                    return u + i
                }, zr.unescape = function(e) {
                    return (e = ba(e)) && G.test(e) ? e.replace(F, dr) : e
                }, zr.uniqueId = function(e) {
                    var t = ++Me;
                    return ba(e) + t
                }, zr.upperCase = Ya, zr.upperFirst = Za, zr.each = bo, zr.eachRight = _o, zr.first = Bs, uc(zr, function() {
                    var e = {};
                    return En(zr, (function(t, r) {
                        qe.call(zr.prototype, r) || (e[r] = t)
                    })), e
                }(), {
                    chain: !1
                }), zr.VERSION = "4.17.21", Nt(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], (function(e) {
                    zr[e].placeholder = zr
                })), Nt(["drop", "take"], (function(t, r) {
                    Wr.prototype[t] = function(n) {
                        n = n === e ? 1 : wr(ya(n), 0);
                        var i = this.__filtered__ && !r ? new Wr(this) : this.clone();
                        return i.__filtered__ ? i.__takeCount__ = br(n, i.__takeCount__) : i.__views__.push({
                            size: br(n, p),
                            type: t + (i.__dir__ < 0 ? "Right" : "")
                        }), i
                    }, Wr.prototype[t + "Right"] = function(e) {
                        return this.reverse()[t](e).reverse()
                    }
                })), Nt(["filter", "map", "takeWhile"], (function(e, t) {
                    var r = t + 1,
                        n = 1 == r || 3 == r;
                    Wr.prototype[e] = function(e) {
                        var t = this.clone();
                        return t.__iteratees__.push({
                            iteratee: hs(e, 3),
                            type: r
                        }), t.__filtered__ = t.__filtered__ || n, t
                    }
                })), Nt(["head", "last"], (function(e, t) {
                    var r = "take" + (t ? "Right" : "");
                    Wr.prototype[e] = function() {
                        return this[r](1).value()[0]
                    }
                })), Nt(["initial", "tail"], (function(e, t) {
                    var r = "drop" + (t ? "" : "Right");
                    Wr.prototype[e] = function() {
                        return this.__filtered__ ? new Wr(this) : this[r](1)
                    }
                })), Wr.prototype.compact = function() {
                    return this.filter(sc)
                }, Wr.prototype.find = function(e) {
                    return this.filter(e).head()
                }, Wr.prototype.findLast = function(e) {
                    return this.reverse().find(e)
                }, Wr.prototype.invokeMap = Zn((function(e, t) {
                    return "function" == typeof e ? new Wr(this) : this.map((function(r) {
                        return An(r, e, t)
                    }))
                })), Wr.prototype.reject = function(e) {
                    return this.filter($o(hs(e)))
                }, Wr.prototype.slice = function(t, r) {
                    t = ya(t);
                    var n = this;
                    return n.__filtered__ && (t > 0 || r < 0) ? new Wr(n) : (t < 0 ? n = n.takeRight(-t) : t && (n = n.drop(t)), r !== e && (n = (r = ya(r)) < 0 ? n.dropRight(-r) : n.take(r - t)), n)
                }, Wr.prototype.takeRightWhile = function(e) {
                    return this.reverse().takeWhile(e).reverse()
                }, Wr.prototype.toArray = function() {
                    return this.take(p)
                }, En(Wr.prototype, (function(t, r) {
                    var n = /^(?:filter|find|map|reject)|While$/.test(r),
                        i = /^(?:head|last)$/.test(r),
                        s = zr[i ? "take" + ("last" == r ? "Right" : "") : r],
                        o = i || /^find/.test(r);
                    s && (zr.prototype[r] = function() {
                        var r = this.__wrapped__,
                            a = i ? [1] : arguments,
                            c = r instanceof Wr,
                            u = a[0],
                            h = c || Fo(r),
                            l = function(e) {
                                var t = s.apply(zr, Dt([e], a));
                                return i && p ? t[0] : t
                            };
                        h && n && "function" == typeof u && 1 != u.length && (c = h = !1);
                        var p = this.__chain__,
                            d = !!this.__actions__.length,
                            f = o && !p,
                            g = c && !d;
                        if (!o && h) {
                            r = g ? r : new Wr(this);
                            var y = t.apply(r, a);
                            return y.__actions__.push({
                                func: go,
                                args: [l],
                                thisArg: e
                            }), new Hr(y, p)
                        }
                        return f && g ? t.apply(this, a) : (y = this.thru(l), f ? i ? y.value()[0] : y.value() : y)
                    })
                })), Nt(["pop", "push", "shift", "sort", "splice", "unshift"], (function(e) {
                    var t = je[e],
                        r = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru",
                        n = /^(?:pop|shift)$/.test(e);
                    zr.prototype[e] = function() {
                        var e = arguments;
                        if (n && !this.__chain__) {
                            var i = this.value();
                            return t.apply(Fo(i) ? i : [], e)
                        }
                        return this[r]((function(r) {
                            return t.apply(Fo(r) ? r : [], e)
                        }))
                    }
                })), En(Wr.prototype, (function(e, t) {
                    var r = zr[t];
                    if (r) {
                        var n = r.name + "";
                        qe.call(Ar, n) || (Ar[n] = []), Ar[n].push({
                            name: t,
                            func: r
                        })
                    }
                })), Ar[Vi(e, 2).name] = [{
                    name: "wrapper",
                    func: e
                }], Wr.prototype.clone = function() {
                    var e = new Wr(this.__wrapped__);
                    return e.__actions__ = Ci(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = Ci(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = Ci(this.__views__), e
                }, Wr.prototype.reverse = function() {
                    if (this.__filtered__) {
                        var e = new Wr(this);
                        e.__dir__ = -1, e.__filtered__ = !0
                    } else(e = this.clone()).__dir__ *= -1;
                    return e
                }, Wr.prototype.value = function() {
                    var e = this.__wrapped__.value(),
                        t = this.__dir__,
                        r = Fo(e),
                        n = t < 0,
                        i = r ? e.length : 0,
                        s = function(e, t, r) {
                            for (var n = -1, i = r.length; ++n < i;) {
                                var s = r[n],
                                    o = s.size;
                                switch (s.type) {
                                    case "drop":
                                        e += o;
                                        break;
                                    case "dropRight":
                                        t -= o;
                                        break;
                                    case "take":
                                        t = br(t, e + o);
                                        break;
                                    case "takeRight":
                                        e = wr(e, t - o)
                                }
                            }
                            return {
                                start: e,
                                end: t
                            }
                        }(0, i, this.__views__),
                        o = s.start,
                        a = s.end,
                        c = a - o,
                        u = n ? a : o - 1,
                        h = this.__iteratees__,
                        l = h.length,
                        p = 0,
                        d = br(c, this.__takeCount__);
                    if (!r || !n && i == c && d == c) return yi(e, this.__actions__);
                    var f = [];
                    e: for (; c-- && p < d;) {
                        for (var g = -1, y = e[u += t]; ++g < l;) {
                            var m = h[g],
                                v = m.iteratee,
                                w = m.type,
                                b = v(y);
                            if (2 == w) y = b;
                            else if (!b) {
                                if (1 == w) continue e;
                                break e
                            }
                        }
                        f[p++] = y
                    }
                    return f
                }, zr.prototype.at = yo, zr.prototype.chain = function() {
                    return fo(this)
                }, zr.prototype.commit = function() {
                    return new Hr(this.value(), this.__chain__)
                }, zr.prototype.next = function() {
                    this.__values__ === e && (this.__values__ = fa(this.value()));
                    var t = this.__index__ >= this.__values__.length;
                    return {
                        done: t,
                        value: t ? e : this.__values__[this.__index__++]
                    }
                }, zr.prototype.plant = function(t) {
                    for (var r, n = this; n instanceof Kr;) {
                        var i = Ls(n);
                        i.__index__ = 0, i.__values__ = e, r ? s.__wrapped__ = i : r = i;
                        var s = i;
                        n = n.__wrapped__
                    }
                    return s.__wrapped__ = t, r
                }, zr.prototype.reverse = function() {
                    var t = this.__wrapped__;
                    if (t instanceof Wr) {
                        var r = t;
                        return this.__actions__.length && (r = new Wr(this)), (r = r.reverse()).__actions__.push({
                            func: go,
                            args: [to],
                            thisArg: e
                        }), new Hr(r, this.__chain__)
                    }
                    return this.thru(to)
                }, zr.prototype.toJSON = zr.prototype.valueOf = zr.prototype.value = function() {
                    return yi(this.__wrapped__, this.__actions__)
                }, zr.prototype.first = zr.prototype.head, ct && (zr.prototype[ct] = function() {
                    return this
                }), zr
            }();
        gt ? ((gt.exports = fr)._ = fr, ft._ = fr) : dt._ = fr
    }.call(ro);
var io = Object.defineProperty,
    so = Object.defineProperties,
    oo = Object.getOwnPropertyDescriptors,
    ao = Object.getOwnPropertySymbols,
    co = Object.prototype.hasOwnProperty,
    uo = Object.prototype.propertyIsEnumerable,
    ho = (e, t, r) => t in e ? io(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : e[t] = r,
    lo = (e, t) => {
        for (var r in t || (t = {})) co.call(t, r) && ho(e, r, t[r]);
        if (ao)
            for (var r of ao(t)) uo.call(t, r) && ho(e, r, t[r]);
        return e
    },
    po = (e, t) => so(e, oo(t));

function fo(e, t, r) {
    let n;
    const i = go(e);
    return t.rpcMap && (n = t.rpcMap[i]), n || (n = `https://rpc.walletconnect.com/v1?chainId=eip155:${i}&projectId=${r}`), n
}

function go(e) {
    return e.includes("eip155") ? Number(e.split(":")[1]) : Number(e)
}

function yo(e) {
    return e.map((e => `${e.split(":")[0]}:${e.split(":")[1]}`))
}

function mo(e) {
    var t, r, n, i;
    const s = {};
    if (o = e, Object.getPrototypeOf(o) !== Object.prototype || !Object.keys(o).length) return s;
    var o;
    for (const [a, c] of Object.entries(e)) {
        const e = Fs(a) ? [a] : c.chains,
            o = c.methods || [],
            u = c.events || [],
            h = c.rpcMap || {},
            l = Bs(a);
        s[l] = po(lo(lo({}, s[l]), c), {
            chains: Ws(e, null == (t = s[l]) ? void 0 : t.chains),
            methods: Ws(o, null == (r = s[l]) ? void 0 : r.methods),
            events: Ws(u, null == (n = s[l]) ? void 0 : n.events),
            rpcMap: lo(lo({}, h), null == (i = s[l]) ? void 0 : i.rpcMap)
        })
    }
    return s
}

function vo(e) {
    return e.includes(":") ? e.split(":")[2] : e
}

function wo(e) {
    const t = {};
    for (const [r, n] of Object.entries(e)) {
        const e = n.methods || [],
            i = n.events || [],
            s = n.accounts || [],
            o = Fs(r) ? [r] : n.chains ? n.chains : yo(n.accounts);
        t[r] = {
            chains: o,
            methods: e,
            events: i,
            accounts: s
        }
    }
    return t
}
const bo = {},
    _o = e => bo[e],
    Eo = (e, t) => {
        bo[e] = t
    };
class Io {
    constructor(e) {
        this.name = "polkadot", this.namespace = e.namespace, this.events = _o("events"), this.client = _o("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
    }
    updateNamespace(e) {
        this.namespace = Object.assign(this.namespace, e)
    }
    requestAccounts() {
        return this.getAccounts()
    }
    getDefaultChain() {
        if (this.chainId) return this.chainId;
        if (this.namespace.defaultChain) return this.namespace.defaultChain;
        const e = this.namespace.chains[0];
        if (!e) throw new Error("ChainId not found");
        return e.split(":")[1]
    }
    request(e) {
        return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
    }
    setDefaultChain(e, t) {
        if (this.chainId = e, !this.httpProviders[e]) {
            const r = t || fo(`${this.name}:${e}`, this.namespace);
            if (!r) throw new Error(`No RPC url provided for chainId: ${e}`);
            this.setHttpProvider(e, r)
        }
        this.events.emit(Xs, `${this.name}:${this.chainId}`)
    }
    getAccounts() {
        const e = this.namespace.accounts;
        return e && e.filter((e => e.split(":")[1] === this.chainId.toString())).map((e => e.split(":")[2])) || []
    }
    createHttpProviders() {
        const e = {};
        return this.namespace.chains.forEach((t => {
            var r;
            e[t] = this.createHttpProvider(t, null == (r = this.namespace.rpcMap) ? void 0 : r[t])
        })), e
    }
    getHttpProvider() {
        const e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
        if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
        return t
    }
    setHttpProvider(e, t) {
        const r = this.createHttpProvider(e, t);
        r && (this.httpProviders[e] = r)
    }
    createHttpProvider(e, t) {
        const r = t || fo(e, this.namespace);
        return typeof r > "u" ? void 0 : new ur(new V(r, _o("disableProviderPing")))
    }
}
class So {
    constructor(e) {
        this.name = "eip155", this.namespace = e.namespace, this.events = _o("events"), this.client = _o("client"), this.httpProviders = this.createHttpProviders(), this.chainId = parseInt(this.getDefaultChain())
    }
    async request(e) {
        switch (e.request.method) {
            case "eth_requestAccounts":
            case "eth_accounts":
                return this.getAccounts();
            case "wallet_switchEthereumChain":
                return await this.handleSwitchChain(e);
            case "eth_chainId":
                return parseInt(this.getDefaultChain())
        }
        return this.namespace.methods.includes(e.request.method) ? await this.client.request(e) : this.getHttpProvider().request(e.request)
    }
    updateNamespace(e) {
        this.namespace = Object.assign(this.namespace, e)
    }
    setDefaultChain(e, t) {
        const r = go(e);
        if (!this.httpProviders[r]) {
            const e = t || fo(`${this.name}:${r}`, this.namespace, this.client.core.projectId);
            if (!e) throw new Error(`No RPC url provided for chainId: ${r}`);
            this.setHttpProvider(r, e)
        }
        this.chainId = r, this.events.emit(Xs, `${this.name}:${r}`)
    }
    requestAccounts() {
        return this.getAccounts()
    }
    getDefaultChain() {
        if (this.chainId) return this.chainId.toString();
        if (this.namespace.defaultChain) return this.namespace.defaultChain;
        const e = this.namespace.chains[0];
        if (!e) throw new Error("ChainId not found");
        return e.split(":")[1]
    }
    createHttpProvider(e, t) {
        const r = t || fo(`${this.name}:${e}`, this.namespace, this.client.core.projectId);
        return typeof r > "u" ? void 0 : new ur(new V(r, _o("disableProviderPing")))
    }
    setHttpProvider(e, t) {
        const r = this.createHttpProvider(e, t);
        r && (this.httpProviders[e] = r)
    }
    createHttpProviders() {
        const e = {};
        return this.namespace.chains.forEach((t => {
            var r;
            const n = go(t);
            e[n] = this.createHttpProvider(n, null == (r = this.namespace.rpcMap) ? void 0 : r[t])
        })), e
    }
    getAccounts() {
        const e = this.namespace.accounts;
        return e ? [...new Set(e.filter((e => e.split(":")[1] === this.chainId.toString())).map((e => e.split(":")[2])))] : []
    }
    getHttpProvider() {
        const e = this.chainId,
            t = this.httpProviders[e];
        if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
        return t
    }
    async handleSwitchChain(e) {
        var t, r;
        let n = e.request.params ? null == (t = e.request.params[0]) ? void 0 : t.chainId : "0x0";
        n = n.startsWith("0x") ? n : `0x${n}`;
        const i = parseInt(n, 16);
        if (this.isChainApproved(i)) this.setDefaultChain(`${i}`);
        else {
            if (!this.namespace.methods.includes("wallet_switchEthereumChain")) throw new Error(`Failed to switch to chain 'eip155:${i}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`);
            await this.client.request({
                topic: e.topic,
                request: {
                    method: e.request.method,
                    params: [{
                        chainId: n
                    }]
                },
                chainId: null == (r = this.namespace.chains) ? void 0 : r[0]
            }), this.setDefaultChain(`${i}`)
        }
        return null
    }
    isChainApproved(e) {
        return this.namespace.chains.includes(`${this.name}:${e}`)
    }
}
class Po {
    constructor(e) {
        this.name = "solana", this.namespace = e.namespace, this.events = _o("events"), this.client = _o("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
    }
    updateNamespace(e) {
        this.namespace = Object.assign(this.namespace, e)
    }
    requestAccounts() {
        return this.getAccounts()
    }
    request(e) {
        return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
    }
    setDefaultChain(e, t) {
        if (!this.httpProviders[e]) {
            const r = t || fo(`${this.name}:${e}`, this.namespace, this.client.core.projectId);
            if (!r) throw new Error(`No RPC url provided for chainId: ${e}`);
            this.setHttpProvider(e, r)
        }
        this.chainId = e, this.events.emit(Xs, `${this.name}:${this.chainId}`)
    }
    getDefaultChain() {
        if (this.chainId) return this.chainId;
        if (this.namespace.defaultChain) return this.namespace.defaultChain;
        const e = this.namespace.chains[0];
        if (!e) throw new Error("ChainId not found");
        return e.split(":")[1]
    }
    getAccounts() {
        const e = this.namespace.accounts;
        return e ? [...new Set(e.filter((e => e.split(":")[1] === this.chainId.toString())).map((e => e.split(":")[2])))] : []
    }
    createHttpProviders() {
        const e = {};
        return this.namespace.chains.forEach((t => {
            var r;
            e[t] = this.createHttpProvider(t, null == (r = this.namespace.rpcMap) ? void 0 : r[t])
        })), e
    }
    getHttpProvider() {
        const e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
        if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
        return t
    }
    setHttpProvider(e, t) {
        const r = this.createHttpProvider(e, t);
        r && (this.httpProviders[e] = r)
    }
    createHttpProvider(e, t) {
        const r = t || fo(e, this.namespace, this.client.core.projectId);
        return typeof r > "u" ? void 0 : new ur(new V(r, _o("disableProviderPing")))
    }
}
class Oo {
    constructor(e) {
        this.name = "cosmos", this.namespace = e.namespace, this.events = _o("events"), this.client = _o("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
    }
    updateNamespace(e) {
        this.namespace = Object.assign(this.namespace, e)
    }
    requestAccounts() {
        return this.getAccounts()
    }
    getDefaultChain() {
        if (this.chainId) return this.chainId;
        if (this.namespace.defaultChain) return this.namespace.defaultChain;
        const e = this.namespace.chains[0];
        if (!e) throw new Error("ChainId not found");
        return e.split(":")[1]
    }
    request(e) {
        return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
    }
    setDefaultChain(e, t) {
        if (this.chainId = e, !this.httpProviders[e]) {
            const r = t || fo(`${this.name}:${e}`, this.namespace, this.client.core.projectId);
            if (!r) throw new Error(`No RPC url provided for chainId: ${e}`);
            this.setHttpProvider(e, r)
        }
        this.events.emit(Xs, `${this.name}:${this.chainId}`)
    }
    getAccounts() {
        const e = this.namespace.accounts;
        return e ? [...new Set(e.filter((e => e.split(":")[1] === this.chainId.toString())).map((e => e.split(":")[2])))] : []
    }
    createHttpProviders() {
        const e = {};
        return this.namespace.chains.forEach((t => {
            var r;
            e[t] = this.createHttpProvider(t, null == (r = this.namespace.rpcMap) ? void 0 : r[t])
        })), e
    }
    getHttpProvider() {
        const e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
        if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
        return t
    }
    setHttpProvider(e, t) {
        const r = this.createHttpProvider(e, t);
        r && (this.httpProviders[e] = r)
    }
    createHttpProvider(e, t) {
        const r = t || fo(e, this.namespace, this.client.core.projectId);
        return typeof r > "u" ? void 0 : new ur(new V(r, _o("disableProviderPing")))
    }
}
class No {
    constructor(e) {
        this.name = "cip34", this.namespace = e.namespace, this.events = _o("events"), this.client = _o("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
    }
    updateNamespace(e) {
        this.namespace = Object.assign(this.namespace, e)
    }
    requestAccounts() {
        return this.getAccounts()
    }
    getDefaultChain() {
        if (this.chainId) return this.chainId;
        if (this.namespace.defaultChain) return this.namespace.defaultChain;
        const e = this.namespace.chains[0];
        if (!e) throw new Error("ChainId not found");
        return e.split(":")[1]
    }
    request(e) {
        return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
    }
    setDefaultChain(e, t) {
        if (this.chainId = e, !this.httpProviders[e]) {
            const r = t || this.getCardanoRPCUrl(e);
            if (!r) throw new Error(`No RPC url provided for chainId: ${e}`);
            this.setHttpProvider(e, r)
        }
        this.events.emit(Xs, `${this.name}:${this.chainId}`)
    }
    getAccounts() {
        const e = this.namespace.accounts;
        return e ? [...new Set(e.filter((e => e.split(":")[1] === this.chainId.toString())).map((e => e.split(":")[2])))] : []
    }
    createHttpProviders() {
        const e = {};
        return this.namespace.chains.forEach((t => {
            const r = this.getCardanoRPCUrl(t);
            e[t] = this.createHttpProvider(t, r)
        })), e
    }
    getHttpProvider() {
        const e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
        if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
        return t
    }
    getCardanoRPCUrl(e) {
        const t = this.namespace.rpcMap;
        if (t) return t[e]
    }
    setHttpProvider(e, t) {
        const r = this.createHttpProvider(e, t);
        r && (this.httpProviders[e] = r)
    }
    createHttpProvider(e, t) {
        const r = t || this.getCardanoRPCUrl(e);
        return typeof r > "u" ? void 0 : new ur(new V(r, _o("disableProviderPing")))
    }
}
class Ro {
    constructor(e) {
        this.name = "elrond", this.namespace = e.namespace, this.events = _o("events"), this.client = _o("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
    }
    updateNamespace(e) {
        this.namespace = Object.assign(this.namespace, e)
    }
    requestAccounts() {
        return this.getAccounts()
    }
    request(e) {
        return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
    }
    setDefaultChain(e, t) {
        if (!this.httpProviders[e]) {
            const r = t || fo(`${this.name}:${e}`, this.namespace, this.client.core.projectId);
            if (!r) throw new Error(`No RPC url provided for chainId: ${e}`);
            this.setHttpProvider(e, r)
        }
        this.chainId = e, this.events.emit(Xs, `${this.name}:${this.chainId}`)
    }
    getDefaultChain() {
        if (this.chainId) return this.chainId;
        if (this.namespace.defaultChain) return this.namespace.defaultChain;
        const e = this.namespace.chains[0];
        if (!e) throw new Error("ChainId not found");
        return e.split(":")[1]
    }
    getAccounts() {
        const e = this.namespace.accounts;
        return e ? [...new Set(e.filter((e => e.split(":")[1] === this.chainId.toString())).map((e => e.split(":")[2])))] : []
    }
    createHttpProviders() {
        const e = {};
        return this.namespace.chains.forEach((t => {
            var r;
            e[t] = this.createHttpProvider(t, null == (r = this.namespace.rpcMap) ? void 0 : r[t])
        })), e
    }
    getHttpProvider() {
        const e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
        if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
        return t
    }
    setHttpProvider(e, t) {
        const r = this.createHttpProvider(e, t);
        r && (this.httpProviders[e] = r)
    }
    createHttpProvider(e, t) {
        const r = t || fo(e, this.namespace, this.client.core.projectId);
        return typeof r > "u" ? void 0 : new ur(new V(r, _o("disableProviderPing")))
    }
}
class To {
    constructor(e) {
        this.name = "multiversx", this.namespace = e.namespace, this.events = _o("events"), this.client = _o("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
    }
    updateNamespace(e) {
        this.namespace = Object.assign(this.namespace, e)
    }
    requestAccounts() {
        return this.getAccounts()
    }
    request(e) {
        return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
    }
    setDefaultChain(e, t) {
        if (!this.httpProviders[e]) {
            const r = t || fo(`${this.name}:${e}`, this.namespace, this.client.core.projectId);
            if (!r) throw new Error(`No RPC url provided for chainId: ${e}`);
            this.setHttpProvider(e, r)
        }
        this.chainId = e, this.events.emit(Xs, `${this.name}:${this.chainId}`)
    }
    getDefaultChain() {
        if (this.chainId) return this.chainId;
        if (this.namespace.defaultChain) return this.namespace.defaultChain;
        const e = this.namespace.chains[0];
        if (!e) throw new Error("ChainId not found");
        return e.split(":")[1]
    }
    getAccounts() {
        const e = this.namespace.accounts;
        return e ? [...new Set(e.filter((e => e.split(":")[1] === this.chainId.toString())).map((e => e.split(":")[2])))] : []
    }
    createHttpProviders() {
        const e = {};
        return this.namespace.chains.forEach((t => {
            var r;
            e[t] = this.createHttpProvider(t, null == (r = this.namespace.rpcMap) ? void 0 : r[t])
        })), e
    }
    getHttpProvider() {
        const e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
        if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
        return t
    }
    setHttpProvider(e, t) {
        const r = this.createHttpProvider(e, t);
        r && (this.httpProviders[e] = r)
    }
    createHttpProvider(e, t) {
        const r = t || fo(e, this.namespace, this.client.core.projectId);
        return typeof r > "u" ? void 0 : new ur(new V(r, _o("disableProviderPing")))
    }
}
var xo = Object.defineProperty,
    Co = Object.defineProperties,
    Ao = Object.getOwnPropertyDescriptors,
    jo = Object.getOwnPropertySymbols,
    Do = Object.prototype.hasOwnProperty,
    Uo = Object.prototype.propertyIsEnumerable,
    ko = (e, t, r) => t in e ? xo(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : e[t] = r,
    $o = (e, t) => {
        for (var r in t || (t = {})) Do.call(t, r) && ko(e, r, t[r]);
        if (jo)
            for (var r of jo(t)) Uo.call(t, r) && ko(e, r, t[r]);
        return e
    },
    qo = (e, t) => Co(e, Ao(t));
class Mo {
    constructor(e) {
        this.events = new n, this.rpcProviders = {}, this.shouldAbortPairingAttempt = !1, this.maxPairingAttempts = 10, this.disableProviderPing = !1, this.providerOpts = e, this.logger = typeof(null == e ? void 0 : e.logger) < "u" && "string" != typeof(null == e ? void 0 : e.logger) ? e.logger : j(D({
            level: (null == e ? void 0 : e.logger) || Ys
        })), this.disableProviderPing = (null == e ? void 0 : e.disableProviderPing) || !1
    }
    static async init(e) {
        const t = new Mo(e);
        return await t.initialize(), t
    }
    async request(e, t) {
        const [r, n] = this.validateChain(t);
        if (!this.session) throw new Error("Please call connect() before request()");
        return await this.getProvider(r).request({
            request: $o({}, e),
            chainId: `${r}:${n}`,
            topic: this.session.topic
        })
    }
    sendAsync(e, t, r) {
        this.request(e, r).then((e => t(null, e))).catch((e => t(e, void 0)))
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
        var e;
        if (!this.session) throw new Error("Please call connect() before enable()");
        await this.client.disconnect({
            topic: null == (e = this.session) ? void 0 : e.topic,
            reason: Js("USER_DISCONNECTED")
        }), await this.cleanup()
    }
    async connect(e) {
        if (!this.client) throw new Error("Sign Client not initialized");
        if (this.setNamespaces(e), await this.cleanupPendingPairings(), !e.skipPairing) return await this.pair(e.pairingTopic)
    }
    on(e, t) {
        this.events.on(e, t)
    }
    once(e, t) {
        this.events.once(e, t)
    }
    removeListener(e, t) {
        this.events.removeListener(e, t)
    }
    off(e, t) {
        this.events.off(e, t)
    }
    get isWalletConnect() {
        return !0
    }
    async pair(e) {
        this.shouldAbortPairingAttempt = !1;
        let t = 0;
        do {
            if (this.shouldAbortPairingAttempt) throw new Error("Pairing aborted");
            if (t >= this.maxPairingAttempts) throw new Error("Max auto pairing attempts reached");
            const {
                uri: r,
                approval: n
            } = await this.client.connect({
                pairingTopic: e,
                requiredNamespaces: this.namespaces,
                optionalNamespaces: this.optionalNamespaces,
                sessionProperties: this.sessionProperties
            });
            r && (this.uri = r, this.events.emit("display_uri", r)), await n().then((e => {
                this.session = e, this.namespaces || (this.namespaces = wo(e.namespaces), this.persist("namespaces", this.namespaces))
            })).catch((e => {
                if (e.message !== ms) throw e;
                t++
            }))
        } while (!this.session);
        return this.onConnect(), this.session
    }
    setDefaultChain(e, t) {
        try {
            if (!this.session) return;
            const [r, n] = this.validateChain(e);
            this.getProvider(r).setDefaultChain(n, t)
        } catch (r) {
            if (!/Please call connect/.test(r.message)) throw r
        }
    }
    async cleanupPendingPairings(e = {}) {
        this.logger.info("Cleaning up inactive pairings...");
        const t = this.client.pairing.getAll();
        if (Qs(t)) {
            for (const r of t) e.deletePairings ? this.client.core.expirer.set(r.topic, 0) : await this.client.core.relayer.subscriber.unsubscribe(r.topic);
            this.logger.info(`Inactive pairings cleared: ${t.length}`)
        }
    }
    abortPairingAttempt() {
        this.shouldAbortPairingAttempt = !0
    }
    async checkStorage() {
        if (this.namespaces = await this.getFromStore("namespaces"), this.optionalNamespaces = await this.getFromStore("optionalNamespaces") || {}, this.client.session.length) {
            const e = this.client.session.keys.length - 1;
            this.session = this.client.session.get(this.client.session.keys[e]), this.createProviders()
        }
    }
    async initialize() {
        this.logger.trace("Initialized"), await this.createClient(), await this.checkStorage(), this.registerEventListeners()
    }
    async createClient() {
        this.client = this.providerOpts.client || await $s.init({
            logger: this.providerOpts.logger || Ys,
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
        const e = [...new Set(Object.keys(this.session.namespaces).map((e => Bs(e))))];
        Eo("client", this.client), Eo("events", this.events), Eo("disableProviderPing", this.disableProviderPing), e.forEach((e => {
            if (!this.session) return;
            const t = function(e, t) {
                    const r = Object.keys(t.namespaces).filter((t => t.includes(e)));
                    if (!r.length) return [];
                    const n = [];
                    return r.forEach((e => {
                        const r = t.namespaces[e].accounts;
                        n.push(...r)
                    })), n
                }(e, this.session),
                r = yo(t),
                n = function(e = {}, t = {}) {
                    const r = mo(e),
                        n = mo(t);
                    return no.exports.merge(r, n)
                }(this.namespaces, this.optionalNamespaces),
                i = qo($o({}, n[e]), {
                    accounts: t,
                    chains: r
                });
            switch (e) {
                case "eip155":
                    this.rpcProviders[e] = new So({
                        namespace: i
                    });
                    break;
                case "solana":
                    this.rpcProviders[e] = new Po({
                        namespace: i
                    });
                    break;
                case "cosmos":
                    this.rpcProviders[e] = new Oo({
                        namespace: i
                    });
                    break;
                case "polkadot":
                    this.rpcProviders[e] = new Io({
                        namespace: i
                    });
                    break;
                case "cip34":
                    this.rpcProviders[e] = new No({
                        namespace: i
                    });
                    break;
                case "elrond":
                    this.rpcProviders[e] = new Ro({
                        namespace: i
                    });
                    break;
                case "multiversx":
                    this.rpcProviders[e] = new To({
                        namespace: i
                    })
            }
        }))
    }
    registerEventListeners() {
        if (typeof this.client > "u") throw new Error("Sign Client is not initialized");
        this.client.on("session_ping", (e => {
            this.events.emit("session_ping", e)
        })), this.client.on("session_event", (e => {
            const {
                params: t
            } = e, {
                event: r
            } = t;
            if ("accountsChanged" === r.name) {
                const e = r.data;
                e && Qs(e) && this.events.emit("accountsChanged", e.map(vo))
            } else "chainChanged" === r.name ? this.onChainChanged(t.chainId) : this.events.emit(r.name, r.data);
            this.events.emit("session_event", e)
        })), this.client.on("session_update", (({
            topic: e,
            params: t
        }) => {
            var r;
            const {
                namespaces: n
            } = t, i = null == (r = this.client) ? void 0 : r.session.get(e);
            this.session = qo($o({}, i), {
                namespaces: n
            }), this.onSessionUpdate(), this.events.emit("session_update", {
                topic: e,
                params: t
            })
        })), this.client.on("session_delete", (async e => {
            await this.cleanup(), this.events.emit("session_delete", e), this.events.emit("disconnect", qo($o({}, Js("USER_DISCONNECTED")), {
                data: e.topic
            }))
        })), this.on(Xs, (e => {
            this.onChainChanged(e, !0)
        }))
    }
    getProvider(e) {
        if (!this.rpcProviders[e]) throw new Error(`Provider not found: ${e}`);
        return this.rpcProviders[e]
    }
    onSessionUpdate() {
        Object.keys(this.rpcProviders).forEach((e => {
            var t;
            this.getProvider(e).updateNamespace(null == (t = this.session) ? void 0 : t.namespaces[e])
        }))
    }
    setNamespaces(e) {
        const {
            namespaces: t,
            optionalNamespaces: r,
            sessionProperties: n
        } = e;
        t && Object.keys(t).length && (this.namespaces = t), r && Object.keys(r).length && (this.optionalNamespaces = r), this.sessionProperties = n, this.persist("namespaces", t), this.persist("optionalNamespaces", r)
    }
    validateChain(e) {
        const [t, r] = (null == e ? void 0 : e.split(":")) || ["", ""];
        if (!this.namespaces || !Object.keys(this.namespaces).length) return [t, r];
        if (t && !Object.keys(this.namespaces || {}).map((e => Bs(e))).includes(t)) throw new Error(`Namespace '${t}' is not configured. Please call connect() first with namespace config.`);
        if (t && r) return [t, r];
        const n = Bs(Object.keys(this.namespaces)[0]);
        return [n, this.rpcProviders[n].getDefaultChain()]
    }
    async requestAccounts() {
        const [e] = this.validateChain();
        return await this.getProvider(e).requestAccounts()
    }
    onChainChanged(e, t = !1) {
        var r;
        if (!this.namespaces) return;
        const [n, i] = this.validateChain(e);
        t || this.getProvider(n).setDefaultChain(i), (null != (r = this.namespaces[n]) ? r : this.namespaces[`${n}:${i}`]).defaultChain = i, this.persist("namespaces", this.namespaces), this.events.emit("chainChanged", i)
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
    persist(e, t) {
        this.client.core.storage.setItem(`${Zs}/${e}`, t)
    }
    async getFromStore(e) {
        return await this.client.core.storage.getItem(`${Zs}/${e}`)
    }
}
const Lo = Mo,
    zo = ["eth_sendTransaction", "personal_sign"],
    Vo = ["eth_accounts", "eth_requestAccounts", "eth_sendRawTransaction", "eth_sign", "eth_signTransaction", "eth_signTypedData", "eth_signTypedData_v3", "eth_signTypedData_v4", "wallet_switchEthereumChain", "wallet_addEthereumChain", "wallet_getPermissions", "wallet_requestPermissions", "wallet_registerOnboarding", "wallet_watchAsset", "wallet_scanQRCode"],
    Ko = ["chainChanged", "accountsChanged"],
    Ho = ["message", "disconnect", "connect"];
var Wo = Object.defineProperty,
    Fo = Object.defineProperties,
    Bo = Object.getOwnPropertyDescriptors,
    Go = Object.getOwnPropertySymbols,
    Jo = Object.prototype.hasOwnProperty,
    Qo = Object.prototype.propertyIsEnumerable,
    Yo = (e, t, r) => t in e ? Wo(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : e[t] = r,
    Zo = (e, t) => {
        for (var r in t || (t = {})) Jo.call(t, r) && Yo(e, r, t[r]);
        if (Go)
            for (var r of Go(t)) Qo.call(t, r) && Yo(e, r, t[r]);
        return e
    },
    Xo = (e, t) => Fo(e, Bo(t));

function ea(e) {
    return Number(e[0].split(":")[1])
}

function ta(e) {
    return `0x${e.toString(16)}`
}
class ra {
    constructor() {
        this.events = new r.EventEmitter, this.namespace = "eip155", this.accounts = [], this.chainId = 1, this.STORAGE_KEY = "wc@2:ethereum_provider:", this.on = (e, t) => (this.events.on(e, t), this), this.once = (e, t) => (this.events.once(e, t), this), this.removeListener = (e, t) => (this.events.removeListener(e, t), this), this.off = (e, t) => (this.events.off(e, t), this), this.parseAccount = e => this.isCompatibleChainId(e) ? this.parseAccountId(e).address : e, this.signer = {}, this.rpc = {}
    }
    static async init(e) {
        const t = new ra;
        return await t.initialize(e), t
    }
    async request(e) {
        return await this.signer.request(e, this.formatChainId(this.chainId))
    }
    sendAsync(e, t) {
        this.signer.sendAsync(e, t, this.formatChainId(this.chainId))
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
    async connect(e) {
        if (!this.signer.client) throw new Error("Provider not initialized. Call init() first");
        this.loadConnectOpts(e);
        const {
            required: t,
            optional: r
        } = function(e) {
            const {
                chains: t,
                optionalChains: r,
                methods: n,
                optionalMethods: i,
                events: s,
                optionalEvents: o,
                rpcMap: a
            } = e;
            if (!Y(t)) throw new Error("Invalid chains");
            const c = {
                    chains: t,
                    methods: n || zo,
                    events: s || Ko,
                    rpcMap: Zo({}, t.length ? {
                        [ea(t)]: a[ea(t)]
                    } : {})
                },
                u = null == s ? void 0 : s.filter((e => !Ko.includes(e))),
                h = null == n ? void 0 : n.filter((e => !zo.includes(e)));
            if (!(r || o || i || null != u && u.length || null != h && h.length)) return {
                required: t.length ? c : void 0
            };
            const l = (null == u ? void 0 : u.length) && (null == h ? void 0 : h.length) || !r,
                p = {
                    chains: [...new Set(l ? c.chains.concat(r || []) : r)],
                    methods: [...new Set(c.methods.concat(null != i && i.length ? i : Vo))],
                    events: [...new Set(c.events.concat(o || Ho))],
                    rpcMap: a
                };
            return {
                required: t.length ? c : void 0,
                optional: r.length ? p : void 0
            }
        }(this.rpc);
        try {
            const n = await new Promise((async (n, i) => {
                var s;
                this.rpc.showQrModal && (null == (s = this.modal) || s.subscribeModal((e => {
                    !e.open && !this.signer.session && (this.signer.abortPairingAttempt(), i(new Error("Connection request reset. Please try again.")))
                }))), await this.signer.connect(Xo(Zo({
                    namespaces: Zo({}, t && {
                        [this.namespace]: t
                    })
                }, r && {
                    optionalNamespaces: {
                        [this.namespace]: r
                    }
                }), {
                    pairingTopic: null == e ? void 0 : e.pairingTopic
                })).then((e => {
                    n(e)
                })).catch((e => {
                    i(new Error(e.message))
                }))
            }));
            if (!n) return;
            this.setChainIds(this.rpc.chains);
            const i = function(e, t = []) {
                const r = [];
                return Object.keys(e).forEach((n => {
                    if (t.length && !t.includes(n)) return;
                    const i = e[n];
                    r.push(...i.accounts)
                })), r
            }(n.namespaces, [this.namespace]);
            this.setAccounts(i), this.events.emit("connect", {
                chainId: ta(this.chainId)
            })
        } catch (n) {
            throw this.signer.logger.error(n), n
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
        this.signer.on("session_event", (e => {
            const {
                params: t
            } = e, {
                event: r
            } = t;
            "accountsChanged" === r.name ? (this.accounts = this.parseAccounts(r.data), this.events.emit("accountsChanged", this.accounts)) : "chainChanged" === r.name ? this.setChainId(this.formatChainId(r.data)) : this.events.emit(r.name, r.data), this.events.emit("session_event", e)
        })), this.signer.on("chainChanged", (e => {
            const t = parseInt(e);
            this.chainId = t, this.events.emit("chainChanged", ta(this.chainId)), this.persist()
        })), this.signer.on("session_update", (e => {
            this.events.emit("session_update", e)
        })), this.signer.on("session_delete", (e => {
            this.reset(), this.events.emit("session_delete", e), this.events.emit("disconnect", Xo(Zo({}, function(e) {
                const {
                    message: t,
                    code: r
                } = Q[e];
                return {
                    message: t,
                    code: r
                }
            }("USER_DISCONNECTED")), {
                data: e.topic,
                name: "USER_DISCONNECTED"
            }))
        })), this.signer.on("display_uri", (e => {
            var t, r;
            this.rpc.showQrModal && (null == (t = this.modal) || t.closeModal(), null == (r = this.modal) || r.openModal({
                uri: e
            })), this.events.emit("display_uri", e)
        }))
    }
    switchEthereumChain(e) {
        this.request({
            method: "wallet_switchEthereumChain",
            params: [{
                chainId: e.toString(16)
            }]
        })
    }
    isCompatibleChainId(e) {
        return "string" == typeof e && e.startsWith(`${this.namespace}:`)
    }
    formatChainId(e) {
        return `${this.namespace}:${e}`
    }
    parseChainId(e) {
        return Number(e.split(":")[1])
    }
    setChainIds(e) {
        const t = e.filter((e => this.isCompatibleChainId(e))).map((e => this.parseChainId(e)));
        t.length && (this.chainId = t[0], this.events.emit("chainChanged", ta(this.chainId)), this.persist())
    }
    setChainId(e) {
        if (this.isCompatibleChainId(e)) {
            const t = this.parseChainId(e);
            this.chainId = t, this.switchEthereumChain(t)
        }
    }
    parseAccountId(e) {
        const [t, r, n] = e.split(":");
        return {
            chainId: `${t}:${r}`,
            address: n
        }
    }
    setAccounts(e) {
        this.accounts = e.filter((e => this.parseChainId(this.parseAccountId(e).chainId) === this.chainId)).map((e => this.parseAccountId(e).address)), this.events.emit("accountsChanged", this.accounts)
    }
    getRpcConfig(e) {
        var t, r;
        const n = null != (t = null == e ? void 0 : e.chains) ? t : [],
            i = null != (r = null == e ? void 0 : e.optionalChains) ? r : [],
            s = n.concat(i);
        if (!s.length) throw new Error("No chains specified in either `chains` or `optionalChains`");
        const o = n.length ? (null == e ? void 0 : e.methods) || zo : [],
            a = n.length ? (null == e ? void 0 : e.events) || Ko : [],
            c = (null == e ? void 0 : e.optionalMethods) || [],
            u = (null == e ? void 0 : e.optionalEvents) || [],
            h = (null == e ? void 0 : e.rpcMap) || this.buildRpcMap(s, e.projectId),
            l = (null == e ? void 0 : e.qrModalOptions) || void 0;
        return {
            chains: null == n ? void 0 : n.map((e => this.formatChainId(e))),
            optionalChains: i.map((e => this.formatChainId(e))),
            methods: o,
            events: a,
            optionalMethods: c,
            optionalEvents: u,
            rpcMap: h,
            showQrModal: !(null == e || !e.showQrModal),
            qrModalOptions: l,
            projectId: e.projectId,
            metadata: e.metadata
        }
    }
    buildRpcMap(e, t) {
        const r = {};
        return e.forEach((e => {
            r[e] = this.getRpcUrl(e, t)
        })), r
    }
    async initialize(e) {
        if (this.rpc = this.getRpcConfig(e), this.chainId = this.rpc.chains.length ? ea(this.rpc.chains) : ea(this.rpc.optionalChains), this.signer = await Lo.init({
                projectId: this.rpc.projectId,
                metadata: this.rpc.metadata,
                disableProviderPing: e.disableProviderPing,
                relayUrl: e.relayUrl,
                storageOptions: e.storageOptions
            }), this.registerEventListeners(), await this.loadPersistedSession(), this.rpc.showQrModal) {
            let e;
            try {
                const {
                    WalletConnectModal: r
                } = await t((() =>
                    import ("./index-C6qopx2I.js").then((e => e.i))), __vite__mapDeps([0, 1, 2, 3]));
                e = r
            } catch {
                throw new Error("To use QR modal, please install @walletconnect/modal package")
            }
            if (e) try {
                this.modal = new e(Zo({
                    walletConnectVersion: 2,
                    projectId: this.rpc.projectId,
                    standaloneChains: this.rpc.chains
                }, this.rpc.qrModalOptions))
            } catch (r) {
                throw this.signer.logger.error(r), new Error("Could not generate WalletConnectModal Instance")
            }
        }
    }
    loadConnectOpts(e) {
        if (!e) return;
        const {
            chains: t,
            optionalChains: r,
            rpcMap: n
        } = e;
        t && Y(t) && (this.rpc.chains = t.map((e => this.formatChainId(e))), t.forEach((e => {
            this.rpc.rpcMap[e] = (null == n ? void 0 : n[e]) || this.getRpcUrl(e)
        }))), r && Y(r) && (this.rpc.optionalChains = [], this.rpc.optionalChains = null == r ? void 0 : r.map((e => this.formatChainId(e))), r.forEach((e => {
            this.rpc.rpcMap[e] = (null == n ? void 0 : n[e]) || this.getRpcUrl(e)
        })))
    }
    getRpcUrl(e, t) {
        var r;
        return (null == (r = this.rpc.rpcMap) ? void 0 : r[e]) || `https://rpc.walletconnect.com/v1/?chainId=eip155:${e}&projectId=${t||this.rpc.projectId}`
    }
    async loadPersistedSession() {
        if (!this.session) return;
        const e = await this.signer.client.core.storage.getItem(`${this.STORAGE_KEY}/chainId`),
            t = this.session.namespaces[`${this.namespace}:${e}`] ? this.session.namespaces[`${this.namespace}:${e}`] : this.session.namespaces[this.namespace];
        this.setChainIds(e ? [this.formatChainId(e)] : null == t ? void 0 : t.accounts), this.setAccounts(null == t ? void 0 : t.accounts)
    }
    reset() {
        this.chainId = 1, this.accounts = []
    }
    persist() {
        this.session && this.signer.client.core.storage.setItem(`${this.STORAGE_KEY}/chainId`, this.chainId)
    }
    parseAccounts(e) {
        return "string" == typeof e || e instanceof String ? [this.parseAccount(e)] : e.map((e => this.parseAccount(e)))
    }
}
export {
    Ho as OPTIONAL_EVENTS, Vo as OPTIONAL_METHODS, Ko as REQUIRED_EVENTS, zo as REQUIRED_METHODS, ra as
    default
};