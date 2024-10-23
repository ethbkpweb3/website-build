import {
    f as e,
    _ as t
} from "./index-B_Hz-fzE.js";
import {
    _ as o
} from "./Hero.vue_vue_type_style_index_0_lang-BzZhUp93.js";
import {
    _ as a
} from "./Button-BbTMX0Dh.js";
import {
    _ as r
} from "./Control-CwktQ3QA.js";
import {
    m as s,
    h as i,
    dg as l,
    d8 as n,
    o as d,
    j as p,
    p as u,
    dn as m,
    dm as c,
    F as v,
    u as f,
    a as j,
    Y as x,
    y,
    K as g,
    k as h,
    v as _,
    w as b,
    l as k,
    X as w,
    q as V,
    P as A
} from "./index-jdACH0Rc.js";
import {
    _ as S
} from "./_plugin-vue_export-helper-BCo6x5W8.js";
import {
    _ as z
} from "./PageTitle-C0-ARbcp.js";
import {
    p as B,
    u as P,
    a as C
} from "./index-B7UsHWbz.js";
import {
    _ as O
} from "./Navbar2-DVEXcHRs.js";
import {
    u as q
} from "./useSeoMeta-CRPJPIvz.js";
import {
    b as E
} from "./route-block-B_A1xBdJ.js";
import "./Subtitle-ytb6lg8s.js";
import "./ButtonGR-BF9zAU5B.js";
import "./Title-ChmnbwlA.js";
import "./AppPop-C6dVPDH2.js";
import "./index-Dwv4qbXN.js";
import "./browser-B3Bvmjnq.js";
import "./index-DPTDKB4o.js";
import "./index-D4R9Vjdp.js";
import "./index-Citk0ABi.js";
import "./index-DtPnfIe2.js";
import "./google-play-0W6tGWt8.js";
import "./VPlaceload-jGgmcTFZ.js";
import "./AvatarSimple-CfXnZ0K8.js";
import "./via-placeholder-csI6CdwS.js";
import "./user-qMNVzsWD.js";
import "./sett-Dbwu6PJ1.js";
import "./avatarSettings-Daanxsoo.js";
import "./vue3-avataaars-C_k_hIh4.js";
import "./index-cRGdv3RN.js";
import "./index-C8W9xb4z.js";
import "./index-B1yvdImc.js";
import "./index-Cg9BJciP.js";
import "./use-dialog-CmZNE833.js";
import "./use-global-config-Dm8LyY4T.js";
import "./index-BWeq1WY3.js";
import "./index-DBFvTDaE.js";
import "./typescript-CRqm1_SZ.js";
import "./logo-DqlCWKKL.js";
import "./index-DWTvrBdo.js";
import "./aria-C-hsWcn7.js";
import "./vue.8fc199ce-D3bCrqKA.js";
const F = ["model-value", "placeholder", "rows", "readonly"],
    H = S(s({
        __name: "VTextarea",
        props: {
            rows: {
                default: void 0
            },
            placeholder: {
                default: void 0
            },
            value: {
                default: void 0
            },
            modelValue: {
                default: void 0
            },
            readonly: {
                type: Boolean,
                default: !1
            },
            resize: {
                type: Boolean,
                default: !0
            }
        },
        emits: ["update:modelValue"],
        setup(e, {
            emit: t
        }) {
            const o = t,
                a = e,
                r = i((() => [!a.resize && "no-resize"])),
                s = i({
                    get: () => a.modelValue,
                    set: e => o("update:modelValue", e)
                });
            return (e, t) => l((d(), p("textarea", {
                "onUpdate:modelValue": t[0] || (t[0] = e => s.value = e),
                "model-value": e.modelValue,
                placeholder: a.placeholder,
                class: u(["textarea", r.value]),
                rows: a.rows,
                readonly: a.readonly,
                "aria-label": "textarea"
            }, null, 10, F)), [
                [n, s.value]
            ])
        }
    }), [
        ["__scopeId", "data-v-3c879a03"]
    ]),
    I = {
        class: "hero-wrapper"
    },
    L = {
        class: "columns is-vcentered"
    },
    Y = {
        class: "column is-relative"
    },
    D = {
        class: "hero-caption mx-auto max-w-6"
    },
    K = S(s({
        __name: "HeroI",
        setup(e) {
            var t;
            const s = m(),
                {
                    Api: i
                } = c();
            let l, n, u, A, S, O;
            if (!s.isAppOn) {
                null == (t = v()) || t.appContext.app.use(B, {
                    v2SiteKey: "6Lcg1HomAAAAAE-HeBkKd9kexjpOQSLZxSf57jVD"
                }), P();
                const e = C({
                    options: {
                        size: "invisible"
                    }
                });
                l = e.root, n = e.execute, u = e.onVerify, A = e.onError, S = e.reset, O = e.onExpired, u((e => {
                    U(e), S()
                })), A((() => {
                    q(!1)
                })), O((() => {
                    q(!0)
                }))
            }
            const q = e => {
                    e || F.error(K("auth.failed-quiz")), S()
                },
                E = f(),
                F = j(),
                {
                    t: K
                } = x(),
                T = y(!1),
                Z = g({
                    content: ""
                }),
                U = e => {
                    "" !== Z.content ? E.isLoggedIn ? "" !== e ? W(e) : F.error(K("auth.failed-quiz")) : F.error(K("inx.please-login")) : F.error(K("sett.message-not-empty"))
                },
                W = e => {
                    "" === Z.content && F.error(K("sett.message-not-empty"));
                    const t = new FormData;
                    t.append("content", Z.content), t.append("captcha", e), i.feedback(t).then((e => {
                        200 == e.status && 0 == e.data.code ? (F.success("success"), T.value = !1, Z.content = "") : F.error(e.data.message)
                    }))
                };
            return (e, t) => {
                const s = z,
                    i = H,
                    u = r,
                    m = a,
                    c = o;
                return d(), p("div", I, [t[5] || (t[5] = h('<div class="hero-grid" data-v-f93c5de3><div class="strip" data-v-f93c5de3></div><div class="strip" data-v-f93c5de3></div><div class="strip" data-v-f93c5de3></div><div class="strip" data-v-f93c5de3></div><div class="strip" data-v-f93c5de3></div><div class="strip" data-v-f93c5de3></div></div>', 1)), _(c, {
                    alignment: "center",
                    size: "fullheight"
                }, {
                    body: b((() => [k("div", L, [k("div", Y, [k("div", D, [_(s, {
                        title: "Your Concerns, Our Priority.",
                        subtitle: "OPZ is always here to listen. Let's enhance our community together.",
                        text: "We treat security as our number one priority and we look forward to excelling our product further by building with you into the future."
                    }, {
                        content: b((() => t[1] || (t[1] = []))),
                        _: 1
                    }), _(u, null, {
                        default: b((() => [_(i, {
                            modelValue: Z.content,
                            "onUpdate:modelValue": t[0] || (t[0] = e => Z.content = e),
                            placeholder: "Write something..."
                        }, null, 8, ["modelValue"])])),
                        _: 1
                    }), _(m, {
                        color: "primary",
                        class: "mt-4",
                        elevated: "",
                        bold: "",
                        onClick: w(n)
                    }, {
                        default: b((() => t[2] || (t[2] = [V("Submit Feedback")]))),
                        _: 1
                    }, 8, ["onClick"]), t[3] || (t[3] = k("div", {
                        class: "mt-4 items-center flex justify-center"
                    }, null, -1))])])])])),
                    footer: b((() => t[4] || (t[4] = []))),
                    _: 1
                }), k("div", {
                    ref_key: "root",
                    ref: l
                }, null, 512)])
            }
        }
    }), [
        ["__scopeId", "data-v-f93c5de3"]
    ]),
    T = s({
        __name: "feedback",
        setup(o) {
            const {
                t: a
            } = x();
            return q(a("pga.feedback") + " | Share Your Feedback", "Your opinion matters. Share your thoughts and help us improve your OPZ experience. Join our community of voices and make a difference today!"), m(), (o, a) => {
                const r = O,
                    s = K,
                    i = t;
                return d(), p(A, null, [_(r), k("div", null, [_(s), _(i, {
                    content: w(e),
                    color: "dark",
                    cta: !1
                }, null, 8, ["content"])])], 64)
            }
        }
    });
"function" == typeof E && E(T);
export {
    T as
    default
};