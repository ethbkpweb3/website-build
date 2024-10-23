import {
    db as e,
    Q as t,
    et as n,
    I as r,
    y as o,
    cS as a,
    cy as i,
    bM as c,
    B as s,
    bY as p,
    cq as u
} from "./index-jdACH0Rc.js";

function d(t, ...n) {
    e(`[vue-recaptcha]: ${t}`, ...n)
}

function l(e, t) {
    if (!e) throw d(t), new Error(`Invariant violation: ${t}`)
}
const v = "vue-recaptcha-context";

function f() {
    const e = t(v);
    if (!e) throw d("You may forget to `use` vue-recaptcha plugin"), new Error("useRecaptcha() is called without provider.");
    return e
}
const w = function() {
        const e = {};
        return e.promise = new Promise(((t, n) => {
            e.resolve = t, e.reject = n
        })), e
    }(),
    h = "__vueRecaptchaLoaded";

function g(e) {
    return new URLSearchParams(function(e) {
        const t = n(e, {
            onload: h,
            render: "explicit"
        });
        "onload" === t.render && (d("passing `onload` as `render` param is not allowed"), t.render = "explicit");
        t.onload !== h && (d("passing `onload` param with other value is not allowed"), t.onload = h);
        return function(e) {
            return Object.entries(e).filter((e => "string" == typeof e[1]))
        }(t)
    }(e)).toString()
}

function y() {
    if ("undefined" == typeof window) return !1;
    const e = () => {
            var e;
            return "grecaptcha" in window && ("execute" in window.grecaptcha || "execute" in ((null == (e = window.grecaptcha) ? void 0 : e.enterprise) ? ? {}))
        },
        t = setInterval((() => {
            e() && (w.resolve(), clearInterval(t))
        }), 500);
    return e()
}

function m(e, t) {
    async function n() {
        await w.promise, e.value = !0
    }
    return {
        render: async (e, r) => (await n(), t().render(e, r)),
        reset(n) {
            void 0 !== n && (l(e.value, "ReCAPTCHA is not loaded"), t().reset(n))
        },
        async execute(e, r) {
            if (void 0 !== e) return await n(), t().execute(e, r)
        }
    }
}
"undefined" != typeof window && (window[h] = () => {
    w.resolve()
});
const x = (S = e => () => {
    r((() => {
        const t = document.createElement("script");
        t.src = `${e.recaptchaApiURL}?${g(e.params)}`, t.async = !0, t.defer = !0, e.nonce && (t.nonce = e.nonce), document.head.append(t)
    }))
}, e => S(function(e) {
    return { ...e,
        recaptchaApiURL: e.recaptchaApiURL ? ? (e.useRecaptchaNet ? "https://www.recaptcha.net/recaptcha/api.js" : "https://www.google.com/recaptcha/api.js")
    }
}(e)));
var S;

function b() {
    const e = new Set,
        t = t => {
            e.delete(t)
        };
    return {
        on: n => {
            e.add(n);
            const r = () => t(n);
            return function(e) {
                !!p() && u(e)
            }(r), {
                off: r
            }
        },
        off: t,
        trigger: (...t) => Promise.all(Array.from(e).map((e => e(...t))))
    }
}
"undefined" != typeof WorkerGlobalScope && (globalThis, WorkerGlobalScope);
const R = () => {};

function j({
    root: e = o(),
    options: t = {}
}) {
    const n = function() {
            const e = f();
            return l(e.options.v2SiteKey, "Your config is not compatible with recaptcha v2, please provide v2SiteKey"), e.options.v2SiteKey
        }(),
        r = o(),
        p = f().proxy,
        u = b(),
        d = b(),
        v = b(),
        w = function(...e) {
            if (1 !== e.length) return a(...e);
            const t = e[0];
            return "function" == typeof t ? i(c((() => ({
                get: t,
                set: R
            })))) : o(t)
        }(e),
        h = o("init");
    return function(e, t, n) {
        s(e, ((e, n, r) => {
            e && t(e, n, r)
        }), { ...n,
            once: !1
        })
    }(w, (async e => {
        const o = await p.render(e, { ...t,
            sitekey: n,
            callback: u.trigger,
            "expired-callback": d.trigger,
            "error-callback": v.trigger
        });
        r.value = o
    })), u.on((() => {
        h.value = "verified"
    })), d.on((() => {
        h.value = "expired"
    })), v.on((() => {
        h.value = "error"
    })), {
        root: w,
        widgetID: r,
        execute() {
            void 0 !== r.value && p.execute(r.value)
        },
        reset() {
            h.value = "init", void 0 !== r.value && p.reset(r.value)
        },
        state: h,
        onVerify: u.on,
        onExpired: d.on,
        onError: v.on
    }
}

function A() {
    const e = f();
    e.scriptInjected ? d("`useRecaptchaProvider` is used multiple time") : (e.scriptInjected = !0, e.useScriptProvider(), r((() => {
        y()
    })))
}
const I = function(e = []) {
    const {
        getRecaptcha: t,
        scriptLoader: n
    } = Object.assign({
        scriptLoader: x,
        getRecaptcha: () => window.grecaptcha
    }, ...e);
    return {
        install(e, r) {
            const a = o(!1);
            (async function() {
                await w.promise, a.value = !0
            })().catch((e => d("fail to load reCAPTCHA script", e))), y();
            const i = (l((c = r).v2SiteKey || c.v3SiteKey, "You didn't pass v2SiteKey or v3SiteKey to plugin, which may be a mistake"), { ...c,
                loaderOptions: { ...c.loaderOptions,
                    params: { ...null == (s = c.loaderOptions) ? void 0 : s.params,
                        render: c.v3SiteKey ? ? "explicit"
                    }
                }
            });
            var c, s;
            e.provide(v, {
                isReady: a,
                scriptInjected: !1,
                proxy: m(a, t),
                useScriptProvider: n(i.loaderOptions),
                options: i
            })
        }
    }
}();
export {
    j as a, I as p, A as u
};