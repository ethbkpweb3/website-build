const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/index-D4VwMXpj.js", "assets/if-defined-Ci7BVwcO.js", "assets/browser-ZWSpNtBY.js", "assets/index-jdACH0Rc.js", "assets/index-st4cR-qp.css", "assets/index.modern-ChJ35hAh.js"]))) => i.map(i => d[i]);
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
    [i] = ((e = Object.is, i = (e, t) => new Proxy(e, t), l = e => n(e) && !r.has(e) && (Array.isArray(e) || !(Symbol.iterator in e)) && !(e instanceof WeakMap) && !(e instanceof WeakSet) && !(e instanceof Error) && !(e instanceof Number) && !(e instanceof Date) && !(e instanceof String) && !(e instanceof RegExp) && !(e instanceof ArrayBuffer), c = e => e.configurable && e.enumerable && e.writable, d = e => {
        switch (e.status) {
            case "fulfilled":
                return e.value;
            case "rejected":
                throw e.reason;
            default:
                throw e
        }
    }, p = new WeakMap, u = (e, s, o = d) => {
        const n = p.get(e);
        if ((null == n ? void 0 : n[0]) === s) return n[1];
        const i = Array.isArray(e) ? [] : Object.create(Object.getPrototypeOf(e));
        return t(i, !0), p.set(e, [s, i]), Reflect.ownKeys(e).forEach((s => {
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
                l.value = u(e, t(), o)
            }
            Object.defineProperty(i, s, l)
        })), Object.preventExtensions(i)
    }, f = new WeakMap, m = [1, 1], g = t => {
        if (!n(t)) throw new Error("object required");
        const d = f.get(t);
        if (d) return d;
        let p = m[0];
        const h = new Set,
            b = (e, t = ++m[0]) => {
                p !== t && (p = t, h.forEach((s => s(e, t))))
            };
        let v = m[1];
        const y = e => (t, s) => {
                const o = [...t];
                o[1] = [e, ...o[1]], b(o, s)
            },
            w = new Map,
            I = e => {
                var t;
                const s = w.get(e);
                s && (w.delete(e), null == (t = s[1]) || t.call(s))
            },
            E = Array.isArray(t) ? [] : Object.create(Object.getPrototypeOf(t)),
            O = (t, i, c, d, p) => {
                if (t && (e(i, d) || f.has(d) && e(i, f.get(d)))) return;
                I(c), n(d) && (d = s(d) || d);
                let u = d;
                if (d instanceof Promise) d.then((e => {
                    d.status = "fulfilled", d.value = e, b(["resolve", [c], e])
                })).catch((e => {
                    d.status = "rejected", d.reason = e, b(["reject", [c], e])
                }));
                else {
                    !a.has(d) && l(d) && (u = g(d));
                    const e = !r.has(u) && a.get(u);
                    e && ((e, t) => {
                        if ("production" !== (o ? "production" : void 0) && w.has(e)) throw new Error("prop listener already exists");
                        if (h.size) {
                            const s = t[3](y(e));
                            w.set(e, [t, s])
                        } else w.set(e, [t])
                    })(c, e)
                }
                p(u), b(["set", [c], d, i])
            },
            C = i(E, {
                deleteProperty(e, t) {
                    const s = Reflect.get(e, t);
                    I(t);
                    const o = Reflect.deleteProperty(e, t);
                    return o && b(["delete", [t], s]), o
                },
                set(e, t, s, o) {
                    const n = Reflect.has(e, t),
                        a = Reflect.get(e, t, o);
                    return O(n, a, t, s, (s => {
                        Reflect.set(e, t, s, o)
                    })), !0
                },
                defineProperty(e, t, s) {
                    if (c(s)) {
                        const o = Reflect.getOwnPropertyDescriptor(e, t);
                        if (!o || c(o)) return O(!!o && "value" in o, null == o ? void 0 : o.value, t, s.value, (o => {
                            Reflect.defineProperty(e, t, { ...s,
                                value: o
                            })
                        })), !0
                    }
                    return Reflect.defineProperty(e, t, s)
                }
            });
        f.set(t, C);
        const W = [E, (e = ++m[1]) => (v === e || h.size || (v = e, w.forEach((([t]) => {
            const s = t[1](e);
            s > p && (p = s)
        }))), p), u, e => {
            h.add(e), 1 === h.size && w.forEach((([e, t], s) => {
                if ("production" !== (o ? "production" : void 0) && t) throw new Error("remove already exists");
                const n = e[3](y(s));
                w.set(s, [e, n])
            }));
            return () => {
                h.delete(e), 0 === h.size && w.forEach((([e, t], s) => {
                    t && (t(), w.set(s, [e]))
                }))
            }
        }];
        return a.set(C, W), Reflect.ownKeys(t).forEach((e => {
            const s = Object.getOwnPropertyDescriptor(t, e);
            "value" in s && (C[e] = t[e], delete s.value, delete s.writable), Object.defineProperty(E, e, s)
        })), C
    }) => [g, a, r, e, i, l, c, d, p, u, f, m])();

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
                typeof localStorage < "u" && localStorage.setItem(u.WCM_VERSION, "2.6.1")
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
    f = l({
        enabled: typeof location < "u" && (location.hostname.includes("localhost") || location.protocol.includes("https")),
        userSessionId: "",
        events: [],
        connectedWalletId: void 0
    }),
    m = {
        state: f,
        subscribe: e => c(f.events, (() => e(function(e, t) {
            const s = a.get(e);
            "production" === (o ? "production" : void 0) || s || console.warn("Please use proxy object");
            const [n, r, i] = s;
            return i(n, r(), t)
        }(f.events[f.events.length - 1])))),
        initialize() {
            f.enabled && typeof(null == crypto ? void 0 : crypto.randomUUID) < "u" && (f.userSessionId = crypto.randomUUID())
        },
        setConnectedWalletId(e) {
            f.connectedWalletId = e
        },
        click(e) {
            if (f.enabled) {
                const t = {
                    type: "CLICK",
                    name: e.name,
                    userSessionId: f.userSessionId,
                    timestamp: Date.now(),
                    data: e
                };
                f.events.push(t)
            }
        },
        track(e) {
            if (f.enabled) {
                const t = {
                    type: "TRACK",
                    name: e.name,
                    userSessionId: f.userSessionId,
                    timestamp: Date.now(),
                    data: e
                };
                f.events.push(t)
            }
        },
        view(e) {
            if (f.enabled) {
                const t = {
                    type: "VIEW",
                    name: e.name,
                    userSessionId: f.userSessionId,
                    timestamp: Date.now(),
                    data: e
                };
                f.events.push(t)
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
    h = {
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
            m.initialize(), h.setChains(e.chains), h.setIsAuth(Boolean(e.enableAuthMode)), h.setIsCustomMobile(Boolean(null == (t = e.mobileWallets) ? void 0 : t.length)), h.setIsCustomDesktop(Boolean(null == (s = e.desktopWallets) ? void 0 : s.length)), u.setModalVersionInStorage(), Object.assign(b, e)
        }
    };
var y = Object.defineProperty,
    w = Object.getOwnPropertySymbols,
    I = Object.prototype.hasOwnProperty,
    E = Object.prototype.propertyIsEnumerable,
    O = (e, t, s) => t in e ? y(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: s
    }) : e[t] = s;
const C = "https://explorer-api.walletconnect.com",
    W = "wcm",
    L = "js-2.6.1";
async function j(e, t) {
    const s = ((e, t) => {
            for (var s in t || (t = {})) I.call(t, s) && O(e, s, t[s]);
            if (w)
                for (var s of w(t)) E.call(t, s) && O(e, s, t[s]);
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
    P = Object.getOwnPropertySymbols,
    U = Object.prototype.hasOwnProperty,
    D = Object.prototype.propertyIsEnumerable,
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
    R = {
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
                } = h.state, o = null == e ? void 0 : e.join(","), n = u.isArray(t), a = {
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
                    for (var s in t || (t = {})) U.call(t, s) && S(e, s, t[s]);
                    if (P)
                        for (var s of P(t)) D.call(t, s) && S(e, s, t[s]);
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
            n.length ? t.excludedIds = n.map((e => e.id)).join(",") : u.isArray(s) && (t.excludedIds = s.join(",")), u.isArray(o) && (t.excludedIds = [t.excludedIds, o].filter(Boolean).join(",")), h.state.isAuth && (t.sdks = "auth_v1");
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
    T = l({
        open: !1
    }),
    x = {
        state: T,
        subscribe: e => c(T, (() => e(T))),
        open: async e => new Promise((t => {
            const {
                isUiLoaded: s,
                isDataLoaded: o
            } = h.state;
            if (u.removeWalletConnectDeepLink(), h.setWalletConnectUri(null == e ? void 0 : e.uri), h.setChains(null == e ? void 0 : e.chains), p.reset("ConnectWallet"), s && o) T.open = !0, t();
            else {
                const e = setInterval((() => {
                    const s = h.state;
                    s.isUiLoaded && s.isDataLoaded && (clearInterval(e), T.open = !0, t())
                }), 200)
            }
        })),
        close() {
            T.open = !1
        }
    };
var N = Object.defineProperty,
    $ = Object.getOwnPropertySymbols,
    V = Object.prototype.hasOwnProperty,
    B = Object.prototype.propertyIsEnumerable,
    H = (e, t, s) => t in e ? N(e, t, {
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
            this.openModal = x.open, this.closeModal = x.close, this.subscribeModal = x.subscribe, this.setTheme = z.setThemeConfig, z.setThemeConfig(e), v.setConfig(e), this.initUi()
        }
        async initUi() {
            if (typeof window < "u") {
                await e((() =>
                    import ("./index-D4VwMXpj.js")), __vite__mapDeps([0, 1, 2, 3, 4, 5]));
                const t = document.createElement("wcm-modal");
                document.body.insertAdjacentElement("beforeend", t), h.setIsUiLoaded(!0)
            }
        }
    }
}, Symbol.toStringTag, {
    value: "Module"
}));
export {
    m as R, p as T, u as a, F as i, z as n, q as o, h as p, x as s, R as t, v as y
};