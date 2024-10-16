import {
    m as a,
    dn as s,
    y as e,
    K as t,
    dm as n,
    u as c,
    Y as i,
    cC as l,
    j as r,
    l as u,
    X as o,
    v as d,
    w as m,
    t as p,
    s as f,
    o as g,
    bw as v,
    n as h,
    cE as _
} from "./index-jdACH0Rc.js";
import {
    _ as y,
    a as b
} from "./sett-Dbwu6PJ1.js";
import "./index-Dwv4qbXN.js";
import {
    E as x
} from "./index-BFAH_eUP.js";
import {
    _ as S
} from "./_plugin-vue_export-helper-BCo6x5W8.js";
const w = {
        class: "page-content-inner"
    },
    j = {
        class: "account-wrapper"
    },
    V = {
        class: "columns"
    },
    k = {
        key: 0,
        class: "column is-3"
    },
    A = {
        class: "account-box is-navigation"
    },
    D = {
        class: "media-flex-center"
    },
    C = {
        class: "percentage-value"
    },
    E = {
        class: "flex-meta"
    },
    R = {
        class: "account-menu"
    },
    H = {
        class: "column is-9 ss"
    },
    I = S(a({
        __name: "settings",
        setup(a) {
            const S = s(),
                I = e(0),
                K = t({
                    accountSecurity: {}
                }),
                {
                    Api: L
                } = n(),
                N = c();
            L.getAccountSecShort().then((a => {
                const s = a.data;
                0 == s.code && (K.accountSecurity = s.data, K.accountSecurity.emailVerified && (I.value += 34), K.accountSecurity.authVerified && (I.value += 33), K.accountSecurity.kycVerified && (I.value += 25), K.accountSecurity.mobileVerified && (I.value += 33))
            }));
            const {
                t: O
            } = i();
            return e("ggHello"), (a, s) => {
                const e = l("RouterLink"),
                    t = l("RouterView");
                return g(), r("div", w, [u("div", j, [u("div", V, [o(S).isAppOn ? f("", !0) : (g(), r("div", k, [u("div", A, [u("div", D, [d(o(x), {
                    type: "dashboard",
                    percentage: I.value,
                    color: "#7303fc",
                    width: 60
                }, {
                    default: m((({
                        percentage: a
                    }) => [u("span", C, p(a) + "%", 1), s[0] || (s[0] = u("span", {
                        class: "percentage-label"
                    }, [u("i", {
                        class: "fas fa-shield-alt"
                    })], -1))])),
                    _: 1
                }, 8, ["percentage"]), u("div", E, [u("span", null, p(o(N).userData.realName), 1), u("span", null, p(o(N).userData.email), 1), u("span", null, p(o(N).userData.mobile), 1)])]), u("div", R, [d(e, {
                    to: {
                        name: "user-center-dashboard-settings"
                    },
                    class: "account-menu-item"
                }, {
                    default: m((() => [s[1] || (s[1] = u("img", {
                        class: "svg-item",
                        src: y,
                        alt: ""
                    }, null, -1)), u("span", null, p(o(O)("sett.settings")), 1), s[2] || (s[2] = u("span", {
                        class: "end"
                    }, [u("i", {
                        "aria-hidden": "true",
                        class: "fas fa-arrow-right"
                    })], -1))])),
                    _: 1
                }), d(e, {
                    to: {
                        name: "user-center-dashboard-settings-api"
                    },
                    class: "account-menu-item"
                }, {
                    default: m((() => [s[3] || (s[3] = u("img", {
                        class: "svg-item",
                        src: b,
                        alt: ""
                    }, null, -1)), u("span", null, p(o(O)("sett.api-management")), 1), s[4] || (s[4] = u("span", {
                        class: "end"
                    }, [u("i", {
                        "aria-hidden": "true",
                        class: "fas fa-arrow-right"
                    })], -1))])),
                    _: 1
                })])])])), u("div", H, [d(t, null, {
                    default: m((({
                        Component: a
                    }) => [d(v, {
                        name: "translate-page-y",
                        mode: "in-out"
                    }, {
                        default: m((() => [(g(), h(_(a)))])),
                        _: 2
                    }, 1024)])),
                    _: 1
                })])])])])
            }
        }
    }), [
        ["__scopeId", "data-v-475f8780"]
    ]);
export {
    I as
    default
};