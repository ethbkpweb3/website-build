const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/index-D5T9bQSi.js", "assets/if-defined-Ci7BVwcO.js", "assets/browser-ZWSpNtBY.js", "assets/index-jdACH0Rc.js", "assets/index-st4cR-qp.css", "assets/index.modern-ChJ35hAh.js"]))) => i.map(i => d[i]);
import {
    _ as e
} from "./index-jdACH0Rc.js";
import {
    h as t,
    y as s
} from "./index.modern-ChJ35hAh.js";
const o = {
        BASE_URL: "/",
        DEV: !1,
        MODE: "production",
        PROD: !0,
        SSR: !1,
        VITE_API_BASE_URL: "http://localhost:1342",
        VITE_ASSETS_PATH: "https://opz.com/assets"
    },
    n = e => "object" == typeof e && null !== e,
    a = new WeakMap,
    r = new WeakSet,
    [i] = ((e = Object.is, i = (e, t) => new Proxy(e, t), l = e => n(e) && !r.has(e) && (Array.isArray(e) || !(Symbol.iterator in e)) && !(e instanceof WeakMap) && !(e instanceof WeakSet) && !(e instanceof Error) && !(e instanceof Number) && !(e instanceof Date) && !(e instanceof String) && !(e instanceof RegExp) && !(e instanceof ArrayBuffer), c = e => {
        switch (e.status) {
            case "fulfilled":
                return e.value;
            case "rejected":
                throw e.reason;
            default:
                throw e
        }
    }, d = new WeakMap, p = (e, s, o = c) => {
        const n = d.get(e);
        if ((null == n ? void 0 : n[0]) === s) return n[1];
        const i = Array.isArray(e) ? [] : Object.create(Object.getPrototypeOf(e));
        return t(i, !0), d.set(e, [s, i]), Reflect.ownKeys(e).forEach((s => {
            if (Object.getOwnPropertyDescriptor(i, s)) return;
            const n = Reflect.get(e, s),
                l = {
                    value: n,
                    enumerable: !0,
                    configurable: !0
                };
            if (r.has(n)) t(n, !1);
            else if (n instanceof Promise) delete l.value, l.get = () => o(n);
            else if (a.has(n)) {
                const [e, t] = a.get(n);
                l.value = p(e, t(), o)
            }
            Object.defineProperty(i, s, l)
        })), Object.preventExtensions(i)
    }, u = new WeakMap, m = [1, 1], h = t => {
        if (!n(t)) throw new Error("object required");
        const c = u.get(t);
        if (c) return c;
        let d = m[0];
        const g = new Set,
            f = (e, t = ++m[0]) => {
                d !== t && (d = t, g.forEach((s => s(e, t))))
            };
        let b = m[1];
        const v = e => (t, s) => {
                const o = [...t];
                o[1] = [e, ...o[1]], f(o, s)
            },
            y = new Map,
            I = e => {
                var t;
                const s = y.get(e);
                s && (y.delete(e), null == (t = s[1]) || t.call(s))
            },
            w = Array.isArray(t) ? [] : Object.create(Object.getPrototypeOf(t)),
            E = i(w, {
                deleteProperty(e, t) {
                    const s = Reflect.get(e, t);
                    I(t);
                    const o = Reflect.deleteProperty(e, t);
                    return o && f(["delete", [t], s]), o
                },
                set(t, i, c, d) {
                    const p = Reflect.has(t, i),
                        m = Reflect.get(t, i, d);
                    if (p && (e(m, c) || u.has(c) && e(m, u.get(c)))) return !0;
                    I(i), n(c) && (c = s(c) || c);
                    let b = c;
                    if (c instanceof Promise) c.then((e => {
                        c.status = "fulfilled", c.value = e, f(["resolve", [i], e])
                    })).catch((e => {
                        c.status = "rejected", c.reason = e, f(["reject", [i], e])
                    }));
                    else {
                        !a.has(c) && l(c) && (b = h(c));
                        const e = !r.has(b) && a.get(b);
                        e && ((e, t) => {
                            if ("production" !== (o ? "production" : void 0) && y.has(e)) throw new Error("prop listener already exists");
                            if (g.size) {
                                const s = t[3](v(e));
                                y.set(e, [t, s])
                            } else y.set(e, [t])
                        })(i, e)
                    }
                    return Reflect.set(t, i, b, d), f(["set", [i], c, m]), !0
                }
            });
        u.set(t, E);
        const O = [w, (e = ++m[1]) => (b === e || g.size || (b = e, y.forEach((([t]) => {
            const s = t[1](e);
            s > d && (d = s)
        }))), d), p, e => {
            g.add(e), 1 === g.size && y.forEach((([e, t], s) => {
                if ("production" !== (o ? "production" : void 0) && t) throw new Error("remove already exists");
                const n = e[3](v(s));
                y.set(s, [e, n])
            }));
            return () => {
                g.delete(e), 0 === g.size && y.forEach((([e, t], s) => {
                    t && (t(), y.set(s, [e]))
                }))
            }
        }];
        return a.set(E, O), Reflect.ownKeys(t).forEach((e => {
            const s = Object.getOwnPropertyDescriptor(t, e);
            "value" in s && (E[e] = t[e], delete s.value, delete s.writable), Object.defineProperty(w, e, s)
        })), E
    }) => [h, a, r, e, i, l, c, d, p, u, m])();

function l(e = {}) {
    return i(e)
}

function c(e, t, s) {
    const n = a.get(e);
    let r;
    "production" === (o ? "production" : void 0) || n || console.warn("Please use proxy object");
    const i = [],
        l = n[3];
    let c = !1;
    const d = l((e => {
        i.push(e), r || (r = Promise.resolve().then((() => {
            r = void 0, c && t(i.splice(0))
        })))
    }));
    return c = !0, () => {
        c = !1, d()
    }
}
const d = l({
        history: ["ConnectWallet"],
        view: "ConnectWallet",
        data: void 0
    }),
    p = {
        state: d,
        subscribe: e => c(d, (() => e(d))),
        push(e, t) {
            e !== d.view && (d.view = e, t && (d.data = t), d.history.push(e))
        },
        reset(e) {
            d.view = e, d.history = [e]
        },
        replace(e) {
            d.history.length > 1 && (d.history[d.history.length - 1] = e, d.view = e)
        },
        goBack() {
            if (d.history.length > 1) {
                d.history.pop();
                const [e] = d.history.slice(-1);
                d.view = e
            }
        },
        setData(e) {
            d.data = e
        }
    },
    u = {
        WALLETCONNECT_DEEPLINK_CHOICE: "WALLETCONNECT_DEEPLINK_CHOICE",
        WCM_VERSION: "WCM_VERSION",
        RECOMMENDED_WALLET_AMOUNT: 9,
        isMobile: () => typeof window < "u" && Boolean(window.matchMedia("(pointer:coarse)").matches || /Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)),
        isAndroid: () => u.isMobile() && navigator.userAgent.toLowerCase().includes("android"),
        isIos() {
            const e = navigator.userAgent.toLowerCase();
            return u.isMobile() && (e.includes("iphone") || e.includes("ipad"))
        },
        isHttpUrl: e => e.startsWith("http://") || e.startsWith("https://"),
        isArray: e => Array.isArray(e) && e.length > 0,
        formatNativeUrl(e, t, s) {
            if (u.isHttpUrl(e)) return this.formatUniversalUrl(e, t, s);
            let o = e;
            o.includes("://") || (o = e.replaceAll("/", "").replaceAll(":", ""), o = `${o}://`), o.endsWith("/") || (o = `${o}/`), this.setWalletConnectDeepLink(o, s);
            return `${o}wc?uri=${encodeURIComponent(t)}`
        },
        formatUniversalUrl(e, t, s) {
            if (!u.isHttpUrl(e)) return this.formatNativeUrl(e, t, s);
            let o = e;
            o.endsWith("/") || (o = `${o}/`), this.setWalletConnectDeepLink(o, s);
            return `${o}wc?uri=${encodeURIComponent(t)}`
        },
        wait: async e => new Promise((t => {
            setTimeout(t, e)
        })),
        openHref(e, t) {
            window.open(e, t, "noreferrer noopener")
        },
        setWalletConnectDeepLink(e, t) {
            try {
                localStorage.setItem(u.WALLETCONNECT_DEEPLINK_CHOICE, JSON.stringify({
                    href: e,
                    name: t
                }))
            } catch {
                console.info("Unable to set WalletConnect deep link")
            }
        },
        setWalletConnectAndroidDeepLink(e) {
            try {
                const [t] = e.split("?");
                localStorage.setItem(u.WALLETCONNECT_DEEPLINK_CHOICE, JSON.stringify({
                    href: t,
                    name: "Android"
                }))
            } catch {
                console.info("Unable to set WalletConnect android deep link")
            }
        },
        removeWalletConnectDeepLink() {
            try {
                localStorage.removeItem(u.WALLETCONNECT_DEEPLINK_CHOICE)
            } catch {
                console.info("Unable to remove WalletConnect deep link")
            }
        },
        setModalVersionInStorage() {
            try {
                typeof localStorage < "u" && localStorage.setItem(u.WCM_VERSION, "2.6.2")
            } catch {
                console.info("Unable to set Web3Modal version in storage")
            }
        },
        getWalletRouterData() {
            var e;
            const t = null == (e = p.state.data) ? void 0 : e.Wallet;
            if (!t) throw new Error('Missing "Wallet" view data');
            return t
        }
    },
    m = l({
        enabled: typeof location < "u" && (location.hostname.includes("localhost") || location.protocol.includes("https")),
        userSessionId: "",
        events: [],
        connectedWalletId: void 0
    }),
    h = {
        state: m,
        subscribe: e => c(m.events, (() => e(function(e, t) {
            const s = a.get(e);
            "production" === (o ? "production" : void 0) || s || console.warn("Please use proxy object");
            const [n, r, i] = s;
            return i(n, r(), t)
        }(m.events[m.events.length - 1])))),
        initialize() {
            m.enabled && typeof(null == crypto ? void 0 : crypto.randomUUID) < "u" && (m.userSessionId = crypto.randomUUID())
        },
        setConnectedWalletId(e) {
            m.connectedWalletId = e
        },
        click(e) {
            if (m.enabled) {
                const t = {
                    type: "CLICK",
                    name: e.name,
                    userSessionId: m.userSessionId,
                    timestamp: Date.now(),
                    data: e
                };
                m.events.push(t)
            }
        },
        track(e) {
            if (m.enabled) {
                const t = {
                    type: "TRACK",
                    name: e.name,
                    userSessionId: m.userSessionId,
                    timestamp: Date.now(),
                    data: e
                };
                m.events.push(t)
            }
        },
        view(e) {
            if (m.enabled) {
                const t = {
                    type: "VIEW",
                    name: e.name,
                    userSessionId: m.userSessionId,
                    timestamp: Date.now(),
                    data: e
                };
                m.events.push(t)
            }
        }
    },
    g = l({
        chains: void 0,
        walletConnectUri: void 0,
        isAuth: !1,
        isCustomDesktop: !1,
        isCustomMobile: !1,
        isDataLoaded: !1,
        isUiLoaded: !1
    }),
    f = {
        state: g,
        subscribe: e => c(g, (() => e(g))),
        setChains(e) {
            g.chains = e
        },
        setWalletConnectUri(e) {
            g.walletConnectUri = e
        },
        setIsCustomDesktop(e) {
            g.isCustomDesktop = e
        },
        setIsCustomMobile(e) {
            g.isCustomMobile = e
        },
        setIsDataLoaded(e) {
            g.isDataLoaded = e
        },
        setIsUiLoaded(e) {
            g.isUiLoaded = e
        },
        setIsAuth(e) {
            g.isAuth = e
        }
    },
    b = l({
        projectId: "",
        mobileWallets: void 0,
        desktopWallets: void 0,
        walletImages: void 0,
        chains: void 0,
        enableAuthMode: !1,
        enableExplorer: !0,
        explorerExcludedWalletIds: void 0,
        explorerRecommendedWalletIds: void 0,
        termsOfServiceUrl: void 0,
        privacyPolicyUrl: void 0
    }),
    v = {
        state: b,
        subscribe: e => c(b, (() => e(b))),
        setConfig(e) {
            var t, s;
            h.initialize(), f.setChains(e.chains), f.setIsAuth(Boolean(e.enableAuthMode)), f.setIsCustomMobile(Boolean(null == (t = e.mobileWallets) ? void 0 : t.length)), f.setIsCustomDesktop(Boolean(null == (s = e.desktopWallets) ? void 0 : s.length)), u.setModalVersionInStorage(), Object.assign(b, e)
        }
    };
var y = Object.defineProperty,
    I = Object.getOwnPropertySymbols,
    w = Object.prototype.hasOwnProperty,
    E = Object.prototype.propertyIsEnumerable,
    O = (e, t, s) => t in e ? y(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: s
    }) : e[t] = s;
const C = "https://explorer-api.walletconnect.com",
    W = "wcm",
    L = "js-2.6.2";
async function j(e, t) {
    const s = ((e, t) => {
            for (var s in t || (t = {})) w.call(t, s) && O(e, s, t[s]);
            if (I)
                for (var s of I(t)) E.call(t, s) && O(e, s, t[s]);
            return e
        })({
            sdkType: W,
            sdkVersion: L
        }, t),
        o = new URL(e, C);
    return o.searchParams.append("projectId", v.state.projectId), Object.entries(s).forEach((([e, t]) => {
        t && o.searchParams.append(e, String(t))
    })), (await fetch(o)).json()
}
const A = {
    getDesktopListings: async e => j("/w3m/v1/getDesktopListings", e),
    getMobileListings: async e => j("/w3m/v1/getMobileListings", e),
    getInjectedListings: async e => j("/w3m/v1/getInjectedListings", e),
    getAllListings: async e => j("/w3m/v1/getAllListings", e),
    getWalletImageUrl: e => `${C}/w3m/v1/getWalletImage/${e}?projectId=${v.state.projectId}&sdkType=${W}&sdkVersion=${L}`,
    getAssetImageUrl: e => `${C}/w3m/v1/getAssetImage/${e}?projectId=${v.state.projectId}&sdkType=${W}&sdkVersion=${L}`
};
var M = Object.defineProperty,
    U = Object.getOwnPropertySymbols,
    D = Object.prototype.hasOwnProperty,
    P = Object.prototype.propertyIsEnumerable,
    S = (e, t, s) => t in e ? M(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: s
    }) : e[t] = s;
const k = u.isMobile(),
    _ = l({
        wallets: {
            listings: [],
            total: 0,
            page: 1
        },
        search: {
            listings: [],
            total: 0,
            page: 1
        },
        recomendedWallets: []
    }),
    T = {
        state: _,
        async getRecomendedWallets() {
            const {
                explorerRecommendedWalletIds: e,
                explorerExcludedWalletIds: t
            } = v.state;
            if ("NONE" === e || "ALL" === t && !e) return _.recomendedWallets;
            if (u.isArray(e)) {
                const t = {
                        recommendedIds: e.join(",")
                    },
                    {
                        listings: s
                    } = await A.getAllListings(t),
                    o = Object.values(s);
                o.sort(((t, s) => e.indexOf(t.id) - e.indexOf(s.id))), _.recomendedWallets = o
            } else {
                const {
                    chains: e,
                    isAuth: s
                } = f.state, o = null == e ? void 0 : e.join(","), n = u.isArray(t), a = {
                    page: 1,
                    sdks: s ? "auth_v1" : void 0,
                    entries: u.RECOMMENDED_WALLET_AMOUNT,
                    chains: o,
                    version: 2,
                    excludedIds: n ? t.join(",") : void 0
                }, {
                    listings: r
                } = k ? await A.getMobileListings(a) : await A.getDesktopListings(a);
                _.recomendedWallets = Object.values(r)
            }
            return _.recomendedWallets
        },
        async getWallets(e) {
            const t = ((e, t) => {
                    for (var s in t || (t = {})) D.call(t, s) && S(e, s, t[s]);
                    if (U)
                        for (var s of U(t)) P.call(t, s) && S(e, s, t[s]);
                    return e
                })({}, e),
                {
                    explorerRecommendedWalletIds: s,
                    explorerExcludedWalletIds: o
                } = v.state,
                {
                    recomendedWallets: n
                } = _;
            if ("ALL" === o) return _.wallets;
            n.length ? t.excludedIds = n.map((e => e.id)).join(",") : u.isArray(s) && (t.excludedIds = s.join(",")), u.isArray(o) && (t.excludedIds = [t.excludedIds, o].filter(Boolean).join(",")), f.state.isAuth && (t.sdks = "auth_v1");
            const {
                page: a,
                search: r
            } = e, {
                listings: i,
                total: l
            } = k ? await A.getMobileListings(t) : await A.getDesktopListings(t), c = Object.values(i), d = r ? "search" : "wallets";
            return _[d] = {
                listings: [..._[d].listings, ...c],
                total: l,
                page: a ? ? 1
            }, {
                listings: c,
                total: l
            }
        },
        getWalletImageUrl: e => A.getWalletImageUrl(e),
        getAssetImageUrl: e => A.getAssetImageUrl(e),
        resetSearch() {
            _.search = {
                listings: [],
                total: 0,
                page: 1
            }
        }
    },
    x = l({
        open: !1
    }),
    N = {
        state: x,
        subscribe: e => c(x, (() => e(x))),
        open: async e => new Promise((t => {
            const {
                isUiLoaded: s,
                isDataLoaded: o
            } = f.state;
            if (u.removeWalletConnectDeepLink(), f.setWalletConnectUri(null == e ? void 0 : e.uri), f.setChains(null == e ? void 0 : e.chains), p.reset("ConnectWallet"), s && o) x.open = !0, t();
            else {
                const e = setInterval((() => {
                    const s = f.state;
                    s.isUiLoaded && s.isDataLoaded && (clearInterval(e), x.open = !0, t())
                }), 200)
            }
        })),
        close() {
            x.open = !1
        }
    };
var R = Object.defineProperty,
    $ = Object.getOwnPropertySymbols,
    V = Object.prototype.hasOwnProperty,
    B = Object.prototype.propertyIsEnumerable,
    H = (e, t, s) => t in e ? R(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: s
    }) : e[t] = s;
const K = l({
        themeMode: typeof matchMedia < "u" && matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
    }),
    z = {
        state: K,
        subscribe: e => c(K, (() => e(K))),
        setThemeConfig(e) {
            const {
                themeMode: t,
                themeVariables: s
            } = e;
            t && (K.themeMode = t), s && (K.themeVariables = ((e, t) => {
                for (var s in t || (t = {})) V.call(t, s) && H(e, s, t[s]);
                if ($)
                    for (var s of $(t)) B.call(t, s) && H(e, s, t[s]);
                return e
            })({}, s))
        }
    },
    J = l({
        open: !1,
        message: "",
        variant: "success"
    }),
    q = {
        state: J,
        subscribe: e => c(J, (() => e(J))),
        openToast(e, t) {
            J.open = !0, J.message = e, J.variant = t
        },
        closeToast() {
            J.open = !1
        }
    };
const F = Object.freeze(Object.defineProperty({
    __proto__: null,
    WalletConnectModal: class {
        constructor(e) {
            this.openModal = N.open, this.closeModal = N.close, this.subscribeModal = N.subscribe, this.setTheme = z.setThemeConfig, z.setThemeConfig(e), v.setConfig(e), this.initUi()
        }
        async initUi() {
            if (typeof window < "u") {
                await e((() =>
                    import ("./index-D5T9bQSi.js")), __vite__mapDeps([0, 1, 2, 3, 4, 5]));
                const t = document.createElement("wcm-modal");
                document.body.insertAdjacentElement("beforeend", t), f.setIsUiLoaded(!0)
            }
        }
    }
}, Symbol.toStringTag, {
    value: "Module"
}));
export {
    h as R, p as T, u as a, F as i, z as n, q as o, f as p, N as s, T as t, v as y
};