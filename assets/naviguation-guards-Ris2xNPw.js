import {d as e, u as o, a, S as i, b as n, c as l} from "./index-N2rhOp93.js";
import {M as t} from "./index-rDRHbR9Y.js";
import "./avatarSettings-w9PeV2PM.js";
import "./vue3-avataaars-DUipYaYR.js";
const r = e(( ({router: e, api: r, pinia: s}) => {
    e.beforeEach((async (e, r) => {
        var u, c, d, g, w, f;
        const v = o(s)
          , m = a();
        if (r === i && v.isLoggedIn)
            try {
                if (null == (u = window.location) ? void 0 : u.mobile) {
                    const e = JSON.parse(window.location.user);
                    t.setUser(e);
                    n("locale", (null == (c = l.find((e => e.lang === (null == navigator ? void 0 : navigator.language)))) ? void 0 : c.lang) || "en-US").value = window.location.locale || "en-US"
                }
            } catch (p) {
                if (v.logoutUser(),
                m.error("Please Login"),
                (null == (d = window.location) ? void 0 : d.mobile) && e.fullPath.toLowerCase().includes("user-center"))
                    window.ReactNativeWebView.postMessage(JSON.stringify({
                        opzkey: "checkLogin"
                    }));
                else if (e.meta.requiresAuth)
                    return {
                        name: "auth",
                        query: {
                            redirect: e.fullPath
                        }
                    }
            }
        else if (null == (g = window.location) ? void 0 : g.mobile) {
            const e = JSON.parse(window.location.user);
            t.setUser(e);
            n("locale", (null == (w = l.find((e => e.lang === (null == navigator ? void 0 : navigator.language)))) ? void 0 : w.lang) || "en-US").value = window.location.locale || "en-US"
        } else if (e.meta.requiresAuth && !v.isLoggedIn) {
            if (m.error("Please Login"),
            "undefined" == typeof window || !(null == (f = window.location) ? void 0 : f.mobile) || !e.fullPath.toLowerCase().includes("user-center"))
                return {
                    name: "auth",
                    query: {
                        redirect: e.fullPath
                    }
                };
            window.ReactNativeWebView.postMessage(JSON.stringify({
                opzkey: "checkLogin"
            }))
        }
    }
    ))
}
));
export {r as default};
