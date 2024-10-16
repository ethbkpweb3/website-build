import {
    db as e,
    Q as t,
    et as r,
    y as n,
    cS as o,
    cy as a,
    bM as c,
    B as i,
    bY as s,
    cq as p,
    I as u
} from "./index-CQfCy4Xm.js";
import {
    u as l
} from "./vue.8fc199ce-DBDcZ0BB.js";

function d(t, ...r) {
    e(`[vue-recaptcha]: ${t}`, ...r)
}

function f(e, t) {
    if (!e) throw d(t), new Error(`Invariant violation: ${t}`)
}
const v = "vue-recaptcha-context";

function w() {
    const e = t(v);
    if (!e) throw d("You may forget to `use` vue-recaptcha plugin"), new Error("useRecaptcha() is called without provider.");
    return e
}
const h = function() {
        const e = {};
        return e.promise = new Promise(((t, r) => {
            e.resolve = t, e.reject = r
        })), e
    }(),
    g = "__vueRecaptchaLoaded";

function y(e) {
    return new URLSearchParams(function(e) {
        const t = r(e, {
            onload: g,
            render: "explicit"
        });
        "onload" === t.render && (d("passing `onload` as `render` param is not allowed"), t.render = "explicit");
        t.onload !== g && (d("passing `onload` param with other value is not allowed"), t.onload = g);
        return function(e) {
            return Object.entries(e).filter((e => "string" == typeof e[1]))
        }(t)
    }(e)).toString()
}

function m() {
    if ("undefined" == typeof window) return !1;
    const e = Object.hasOwn(window, "grecaptcha") && Object.hasOwn(window.grecaptcha, "execute");
    return e && h.resolve(), e
}

function x(e, t) {
    async function r() {
        await h.promise, e.value = !0
    }
    return {
        render: async (e, n) => (await r(), t().render(e, n)),
        reset(r) {
            void 0 !== r && (f(e.value, "ReCAPTCHA is not loaded"), t().reset(r))
        },
        async execute(e, n) {
            if (void 0 !== e) return await r(), t().execute(e, n)
        }
    }
}
"undefined" != typeof window && (window[g] = () => {
    h.resolve()
});
const S = (R = e => () => {
    l({
        link: [{
            key: "vue-recaptcha-google",
            rel: "preconnect",
            href: e.useRecaptchaNet ? "https://www.recaptcha.net" : "https://www.google.com"
        }, {
            key: "vue-recaptcha-gstatic",
            rel: "preconnect",
            href: "https://www.gstatic.com",
            crossorigin: ""
        }],
        script: [{
            key: "vue-recaptcha",
            src: `${e.recaptchaApiURL}?${y(e.params)}`,
            async: !0,
            defer: !0,
            nonce: e.nonce
        }]
    })
}, e => R(function(e) {
    return { ...e,
        recaptchaApiURL: e.recaptchaApiURL ? ? (e.useRecaptchaNet ? "https://www.recaptcha.net/recaptcha/api.js" : "https://www.google.com/recaptcha/api.js")
    }
}(e)));
var R;

function b() {
    const e = new Set,
        t = t => {
            e.delete(t)
        };
    return {
        on: r => {
            e.add(r);
            const n = () => t(r);
            return function(e) {
                !!s() && p(e)
            }(n), {
                off: n
            }
        },
        off: t,
        trigger: t => Promise.all(Array.from(e).map((e => e(t))))
    }
}
const j = () => {};

function k({
    root: e = n(),
    options: t = {}
}) {
    const r = function() {
            const e = w();
            return f(e.options.v2SiteKey, "Your config is not compatible with recaptcha v2, please provide v2SiteKey"), e.options.v2SiteKey
        }(),
        s = n(),
        p = w().proxy,
        u = b(),
        l = b(),
        d = b(),
        v = function(...e) {
            if (1 !== e.length) return o(...e);
            const t = e[0];
            return "function" == typeof t ? a(c((() => ({
                get: t,
                set: j
            })))) : n(t)
        }(e),
        h = n("init");
    return function(e, t, r) {
        i(e, ((e, r, n) => {
            e && t(e, r, n)
        }), r)
    }(v, (async e => {
        const n = await p.render(e, { ...t,
            sitekey: r,
            callback: u.trigger,
            "expired-callback": l.trigger,
            "error-callback": d.trigger
        });
        s.value = n
    })), u.on((() => {
        h.value = "verified"
    })), l.on((() => {
        h.value = "expired"
    })), d.on((() => {
        h.value = "error"
    })), {
        root: v,
        widgetID: s,
        execute() {
            void 0 !== s.value && p.execute(s.value)
        },
        reset() {
            h.value = "init", void 0 !== s.value && p.reset(s.value)
        },
        state: h,
        onVerify: u.on,
        onExpired: l.on,
        onError: d.on
    }
}

function O() {
    const e = w();
    e.scriptInjected ? d("`useRecaptchaProvider` is used multiple time") : (e.scriptInjected = !0, e.useScriptProvider(), u((() => {
        m()
    })))
}
const A = function(e, {
    getRecaptcha: t = () => window.grecaptcha
} = {}) {
    return {
        install(r, o) {
            const a = n(!1);
            (async function() {
                await h.promise, a.value = !0
            })().catch((e => d("fail to load reCAPTCHA script", e))), m();
            const c = (f((i = o).v2SiteKey || i.v3SiteKey, "You didn't pass v2SiteKey or v3SiteKey to plugin, which may be a mistake"), { ...i,
                loaderOptions: { ...i.loaderOptions,
                    params: { ...null == (s = i.loaderOptions) ? void 0 : s.params,
                        render: i.v3SiteKey ? ? "explicit"
                    }
                }
            });
            var i, s;
            r.provide(v, {
                isReady: a,
                scriptInjected: !1,
                proxy: x(a, t),
                useScriptProvider: e(c.loaderOptions),
                options: c
            })
        }
    }
}(S);
export {
    k as a, A as p, O as u
};