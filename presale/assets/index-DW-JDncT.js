import {
    f as e,
    _ as t
} from "./index-BPv_7EZ9.js";
import {
    _ as s
} from "./Section-DPQWt_EU.js";
import {
    _ as a
} from "./FeatureBlockT-9M0q3Tg6.js";
import {
    _ as o
} from "./Control-BAxR9hhH.js";
import {
    m as l,
    dm as i,
    dn as r,
    F as n,
    a as m,
    Y as p,
    dp as c,
    K as u,
    o as d,
    j as f,
    l as j,
    v as g,
    w as v,
    X as x,
    s as y,
    t as _,
    p as V,
    P as w
} from "./index-CQfCy4Xm.js";
import {
    F as k
} from "./browser-Cv63Auap.js";
import "./index-DZwhim7i.js";
import {
    p as b,
    u as h,
    a as A
} from "./index-DYFBo1-I.js";
import {
    u as S
} from "./useNotyfLong-unFWQDox.js";
import {
    E as C
} from "./index-BaPl-dvV.js";
import {
    E as z
} from "./index-DhHA3mFI.js";
import {
    _ as B
} from "./_plugin-vue_export-helper-BCo6x5W8.js";
import {
    _ as E
} from "./PageTitle-ChfDSLUN.js";
import {
    _ as O
} from "./Navbar2-Cx1AKm6v.js";
import {
    f as P
} from "./index-BSBG2tux.js";
import {
    u as U
} from "./useSeoMeta-DJrBtPw8.js";
import "./Subtitle-C6oUzL5I.js";
import "./ButtonGR-CCzD27Qk.js";
import "./Title-B_xB6icS.js";
import "./AppPop-DXr7YMXx.js";
import "./index-DPTDKB4o.js";
import "./index-wV0BwLDn.js";
import "./index-DWyf7GKU.js";
import "./index-CB5HUA9W.js";
import "./google-play-0W6tGWt8.js";
import "./vue.8fc199ce-DBDcZ0BB.js";
import "./typescript-CRqm1_SZ.js";
import "./use-global-config-CYuHb1FB.js";
import "./index-CreMjc0E.js";
import "./VPlaceload-DcvQMSN9.js";
import "./Button-C_PMcYdl.js";
import "./AvatarSimple-DIs6U3iF.js";
import "./via-placeholder-csI6CdwS.js";
import "./user-qMNVzsWD.js";
import "./sett-Dbwu6PJ1.js";
import "./avatarSettings-C1kj7zSJ.js";
import "./vue3-avataaars-DO56oOZp.js";
import "./index-38aUouWI.js";
import "./index-5N62XIoj.js";
import "./index-DYh1qtlV.js";
import "./use-dialog-CC6CVfkB.js";
import "./index-BR6qnryQ.js";
import "./logo-DqlCWKKL.js";
import "./index-D21_sbBM.js";
import "./aria-C-hsWcn7.js";
const q = {
        class: "contact-form"
    },
    F = {
        class: "columns is-multiline cont-form"
    },
    L = {
        key: 0,
        class: "column is-12"
    },
    K = {
        key: 1,
        class: "column is-12"
    },
    T = {
        class: "flex"
    },
    Z = {
        class: "small-txt"
    },
    D = {
        class: "column is-12"
    },
    H = {
        class: "flex"
    },
    I = {
        key: 0,
        class: "small-txt"
    },
    N = {
        key: 2,
        class: "column is-12"
    },
    X = {
        class: "column is-12"
    },
    Y = {
        class: "column is-12 mt-2"
    },
    G = B(l({
        __name: "ContactForm",
        setup(e) {
            var t;
            const {
                Api: s
            } = i();
            let a, l, V, w, B, E;
            if (!r().isAppOn) {
                null == (t = n()) || t.appContext.app.use(b, {
                    v2SiteKey: "6Lcg1HomAAAAAE-HeBkKd9kexjpOQSLZxSf57jVD"
                }), h();
                const e = A({
                    options: {
                        size: "invisible"
                    }
                });
                a = e.root, l = e.execute, V = e.onVerify, w = e.onError, B = e.reset, E = e.onExpired, V((e => {
                    $(e), B()
                })), w((() => {
                    O(!1)
                })), E((() => {
                    O(!0)
                }))
            }
            const O = e => {
                    e || P.error(G("auth.failed-quiz")), B()
                },
                P = m(),
                U = S(),
                {
                    t: G
                } = p(),
                M = c(),
                Q = u({
                    email: "",
                    uid: "",
                    message: "",
                    name: "",
                    title: ""
                }),
                R = M.query.title;
            R && (Q.title = G("pga." + R));
            let W = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,30})+$/;
            const $ = e => {
                if ("delete-account" === R) {
                    if ("" === Q.uid || "" === Q.message) return void P.error(G("auth.invalid-details-submitted"))
                } else {
                    if ("" === Q.message) return void P.error(G("sett.message-not-empty"));
                    if (!W.test(Q.email)) return void P.error(G("sett.email-incorrect"))
                }(e => {
                    const t = new k;
                    t.append("captcha", e), t.append("email", "delete-account" !== R ? Q.email : "info@opz.com"), t.append("content", (Q.title ? Q.title + " " : "") + Q.message), t.append("name", Q.name), t.append("uid", Q.uid), s.support(t).then((e => {
                        200 == e.status && 0 == e.data.code ? (U.success(G("delete-account" !== R ? "sett.received-message" : "pga.customer-service-contact-you")), Q.email = "", Q.message = "", Q.uid = "", Q.name = "") : P.error(e.data.message)
                    }))
                })(e)
            };
            return (e, t) => {
                const s = o;
                return d(), f("div", q, [j("form", null, [j("div", F, [Q.title ? (d(), f("div", L, [g(x(C), {
                    disabled: "",
                    modelValue: Q.title,
                    "onUpdate:modelValue": t[0] || (t[0] = e => Q.title = e),
                    type: "email",
                    autocomplete: "false",
                    class: "input-form-message desc-cont"
                }, {
                    prefix: v((() => t[5] || (t[5] = [j("i", {
                        class: "text-gray1 fas fa-angle-double-right"
                    }, null, -1)]))),
                    _: 1
                }, 8, ["modelValue"])])) : y("", !0), "delete-account" !== x(R) ? (d(), f("div", K, [j("div", T, [j("p", null, _(x(G)("sett.name")), 1), j("p", Z, _(x(G)("sett.optional")), 1)]), g(x(C), {
                    modelValue: Q.name,
                    "onUpdate:modelValue": t[1] || (t[1] = e => Q.name = e),
                    type: "text",
                    autocomplete: "false",
                    class: "input-form-message"
                }, {
                    prefix: v((() => t[6] || (t[6] = [j("i", {
                        class: "text-gray1 fas fa-user"
                    }, null, -1)]))),
                    _: 1
                }, 8, ["modelValue"])])) : y("", !0), j("div", D, [j("div", H, [j("p", null, _(x(G)("dash.uid")), 1), "delete-account" !== x(R) ? (d(), f("p", I, _(x(G)("sett.optional")), 1)) : y("", !0)]), g(x(C), {
                    modelValue: Q.uid,
                    "onUpdate:modelValue": t[2] || (t[2] = e => Q.uid = e),
                    type: "text",
                    autocomplete: "false",
                    class: "input-form-message"
                }, {
                    prefix: v((() => t[7] || (t[7] = [j("i", {
                        class: "text-gray1 fas fa-address-card"
                    }, null, -1)]))),
                    _: 1
                }, 8, ["modelValue"])]), "delete-account" !== x(R) ? (d(), f("div", N, [j("p", null, _(x(G)("auth.email")), 1), g(x(C), {
                    modelValue: Q.email,
                    "onUpdate:modelValue": t[3] || (t[3] = e => Q.email = e),
                    type: "email",
                    autocomplete: "false",
                    class: "input-form-message"
                }, {
                    prefix: v((() => t[8] || (t[8] = [j("i", {
                        class: "text-gray1 fas fa-at"
                    }, null, -1)]))),
                    _: 1
                }, 8, ["modelValue"])])) : y("", !0), j("div", X, [j("p", null, _(Q.title ? x(G)("pga.more-details") : x(G)("sett.message")), 1), g(x(C), {
                    modelValue: Q.message,
                    "onUpdate:modelValue": t[4] || (t[4] = e => Q.message = e),
                    type: "textarea",
                    rows: 3,
                    class: "input-form-message",
                    placeholder: x(G)("delete-account" !== x(R) ? "sett.leave-in-detail" : "ctm.full-or-part-delete"),
                    autocomplete: "false"
                }, {
                    prefix: v((() => t[9] || (t[9] = [j("i", {
                        class: "text-gray1 fas fa-at"
                    }, null, -1)]))),
                    _: 1
                }, 8, ["modelValue", "placeholder"])]), j("div", Y, [g(s, null, {
                    default: v((() => [g(x(z), {
                        type: "primary",
                        class: "btn-send",
                        onClick: x(l)
                    }, {
                        default: v((() => [j("span", null, _(x(G)("delete-account" !== x(R) ? "sett.send-message" : "pga.submit-application")), 1)])),
                        _: 1
                    }, 8, ["onClick"])])),
                    _: 1
                })])])]), j("div", {
                    ref_key: "root",
                    ref: a
                }, null, 512)])
            }
        }
    }), [
        ["__scopeId", "data-v-79a58f24"]
    ]),
    M = {
        class: "side-contact"
    },
    Q = {
        class: "side-contact-inner"
    },
    R = {
        class: "columns"
    },
    W = {
        class: "column is-12"
    },
    $ = {
        class: "contact-card"
    };
const J = B({}, [
        ["render", function(e, t) {
            const s = G;
            return d(), f("div", M, [j("div", Q, [j("div", R, [j("div", W, [j("div", $, [g(s)])])])])])
        }],
        ["__scopeId", "data-v-dc5a1405"]
    ]),
    ee = {
        class: "container"
    },
    te = l({
        __name: "index",
        setup(o) {
            const {
                t: l
            } = p();
            U(l("pga.contact-us") + " | OPZ Support", "At OPZ we aim to provide great customer service. You've got questions, we've got answers. Contact us today!");
            const i = r();
            return (o, r) => {
                const n = O,
                    m = E,
                    p = J,
                    c = a,
                    u = s,
                    y = t;
                return d(), f(w, null, [g(n), j("div", null, [g(u, {
                    wave: "wave-2",
                    "shape-color": "grey",
                    class: V(x(i).isAppOn && "pt-0")
                }, {
                    default: v((() => [j("div", ee, [g(m, {
                        title: x(l)("pga.contact-us"),
                        subtitle: x(l)("sett.let-us-know"),
                        leading: ""
                    }, null, 8, ["title", "subtitle"]), g(p), g(c, {
                        features: x(P),
                        limit: 8,
                        size: "small",
                        links: "",
                        animated: ""
                    }, null, 8, ["features"])])])),
                    _: 1
                }, 8, ["class"]), g(y, {
                    content: x(e),
                    color: "dark",
                    cta: !1
                }, null, 8, ["content"])])], 64)
            }
        }
    });
export {
    te as
    default
};