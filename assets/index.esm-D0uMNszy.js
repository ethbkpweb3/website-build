import {
    K as e,
    m as t,
    W as i,
    y as n,
    I as o,
    o as r,
    j as l,
    X as a,
    s as c,
    r as d,
    B as s
} from "./index-jdACH0Rc.js";
var u = {
    library: "https://accounts.google.com/gsi/client",
    defaultButtonConfig: {
        theme: "outline",
        size: "large"
    },
    scopes: "email profile openid",
    ssrError: "vue3-google-login cannot be executed on the server side. See here for more info https://devbaji.github.io/vue3-google-login/#no-ssr-support"
};
const p = e({
        clientId: null,
        popupType: "CODE",
        prompt: !1,
        autoLogin: !1,
        idConfiguration: null,
        buttonConfig: u.defaultButtonConfig,
        callback: () => {},
        error: null
    }),
    g = e({
        apiLoaded: !1,
        apiLoadIntitited: !1
    }),
    f = e => {
        g.apiLoadIntitited ? g.apiLoaded ? e(window.google) : s((() => g.apiLoaded), (t => {
            t && e(window.google)
        })) : new Promise(((e, t) => {
            if ("undefined" != typeof window) {
                if (!g.apiLoadIntitited) {
                    const i = document.createElement("script");
                    g.apiLoadIntitited = !0, i.addEventListener("load", (() => {
                        g.apiLoaded = !0, e(window.google)
                    })), i.addEventListener("error", (() => {
                        t("Failed to load the Google 3P Authorization JavaScript Library.")
                    })), i.src = u.library, i.async = !0, i.defer = !0, document.head.appendChild(i)
                }
            } else t(u.ssrError)
        })).then((t => {
            e(t)
        }))
    },
    h = e => {
        if (!e && (e = {}), !e.clientId && !p.clientId) throw new Error("clientId is required");
        const t = {
            use_fedcm_for_prompt: !0
        };
        return e.clientId && (t.client_id = e.clientId), !e.clientId && p.clientId && (t.client_id = p.clientId), e.context && (t.context = e.context), null != e.autoLogin && (t.auto_select = e.autoLogin), null != e.cancelOnTapOutside && (t.cancel_on_tap_outside = e.cancelOnTapOutside), new Promise(((i, n) => {
            t.callback = t => {
                e && e.callback && e.callback(t), t.credential ? i(t) : n(t)
            }, f((e => {
                e.accounts.id.initialize(t), e.accounts.id.prompt()
            }))
        }))
    };
var b = t({
    __name: "GoogleLogin",
    props: {
        clientId: {
            type: String,
            required: !1
        },
        prompt: {
            type: Boolean,
            required: !1,
            default: !1
        },
        autoLogin: {
            type: Boolean,
            required: !1,
            default: !1
        },
        popupType: {
            type: String,
            required: !1
        },
        idConfiguration: {
            type: Object,
            required: !1
        },
        buttonConfig: {
            type: Object,
            required: !1
        },
        callback: {
            type: Function,
            required: !1
        },
        error: {
            type: Function,
            required: !1
        }
    },
    setup(e) {
        if ("undefined" == typeof window) throw new Error(u.ssrError);
        const t = !!i().default,
            s = e,
            g = ((e, t) => {
                const i = { ...p
                };
                for (const n in t) void 0 !== t[n] && null !== t[n] && (i[n] = t[n]);
                return i
            })(0, s),
            b = {
                client_id: g.clientId || null,
                auto_select: g.autoLogin || !1,
                callback: g.callback,
                ...g.idConfiguration
            },
            w = n();
        return o((() => {
            ((e, t, i, n) => {
                if (!e.client_id) throw new Error("Prop client id required since plugin is not initialized with a client id");
                f((() => {
                    ((e, t, i, n, o) => {
                        if (o) {
                            const t = e.callback;
                            e.callback = e => {
                                e.credential ? t && t(e) : o(e)
                            }
                        }
                        window.google.accounts.id.initialize(e);
                        const r = t.value;
                        r && !n && window.google.accounts.id.renderButton(r, i)
                    })(e, t, i.buttonConfig, n, i.error), i.prompt && h({
                        clientId: i.clientId,
                        callback: i.callback,
                        error: i.error,
                        autoLogin: i.autoLogin
                    })
                }))
            })(b, w, g, t), s.popupType && !t && console.warn("Option 'popupType' is ignored since a slot which act as a custom login button was not found!!!")
        })), (e, i) => (r(), l("div", {
            class: "g-btn-wrapper",
            onClick: i[0] || (i[0] = e => a(t) && void("TOKEN" === a(g).popupType ? (e => new Promise(((t, i) => {
                f((n => {
                    if (!(e && e.clientId || p.clientId)) throw new Error("clientId is required since the plugin is not initialized with a Client Id");
                    n.accounts.oauth2.initTokenClient({
                        client_id: e && e.clientId || p.clientId || "",
                        scope: u.scopes,
                        callback: e => {
                            e.access_token ? t(e) : i(e)
                        },
                        error_callback: e => {
                            i(e)
                        }
                    }).requestAccessToken()
                }))
            })))({
                clientId: g.clientId
            }).then((e => {
                g.callback && g.callback(e)
            })).catch((e => {
                g.error && g.error(e)
            })) : (e => new Promise(((t, i) => {
                f((n => {
                    if (!(e && e.clientId || p.clientId)) throw new Error("clientId is required since the plugin is not initialized with a Client Id");
                    n.accounts.oauth2.initCodeClient({
                        client_id: e && e.clientId || p.clientId || "",
                        scope: u.scopes,
                        ux_mode: "popup",
                        callback: e => {
                            e.code ? t(e) : i(e)
                        },
                        error_callback: e => {
                            i(e)
                        }
                    }).requestCode()
                }))
            })))({
                clientId: g.clientId
            }).then((e => {
                g.callback && g.callback(e)
            })).catch((e => {
                g.error && g.error(e)
            }))))
        }, [a(t) ? c("v-if", !0) : (r(), l("span", {
            key: 0,
            ref_key: "buttonRef",
            ref: w,
            class: "g-btn"
        }, null, 512)), d(e.$slots, "default")]))
    }
});
! function(e, t) {
    void 0 === t && (t = {});
    var i = t.insertAt;
    if ("undefined" != typeof document) {
        var n = document.head || document.getElementsByTagName("head")[0],
            o = document.createElement("style");
        o.type = "text/css", "top" === i && n.firstChild ? n.insertBefore(o, n.firstChild) : n.appendChild(o), o.styleSheet ? o.styleSheet.cssText = e : o.appendChild(document.createTextNode(e))
    }
}("\n.g-btn-wrapper[data-v-5e610566] {\n  display: inline-block;\n}\n"), b.__scopeId = "data-v-5e610566", b.__file = "src/plugin/GoogleLogin.vue";
export {
    h as y
};