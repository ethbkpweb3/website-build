import {
    f as s,
    _ as i
} from "./index-B_Hz-fzE.js";
import {
    _ as a
} from "./Section-fdq8wkjz.js";
import {
    _ as t
} from "./VPlaceload-jGgmcTFZ.js";
import {
    _ as l
} from "./SectionTitle.vue_vue_type_script_setup_true_lang-BWlX4763.js";
import {
    _ as e
} from "./Navbar2-DVEXcHRs.js";
import {
    _ as o,
    a as n
} from "./google-play-BbEUCb8h.js";
import "./index-Dwv4qbXN.js";
import {
    m as r,
    Y as d,
    dm as c,
    y as p,
    dn as m,
    G as u,
    h as v,
    cD as g,
    j as b,
    v as y,
    l as j,
    w as f,
    X as h,
    P as w,
    o as k,
    s as x,
    cB as _,
    p as A,
    dg as O,
    ck as z,
    t as C
} from "./index-jdACH0Rc.js";
import {
    D
} from "./DownloadApp-BhDQDlHL.js";
import {
    u as P
} from "./useSeoMeta-CRPJPIvz.js";
import {
    E as L
} from "./index-DBFvTDaE.js";
import {
    _ as V
} from "./_plugin-vue_export-helper-BCo6x5W8.js";
import "./Subtitle-ytb6lg8s.js";
import "./ButtonGR-BF9zAU5B.js";
import "./Title-ChmnbwlA.js";
import "./AppPop-C6dVPDH2.js";
import "./browser-B3Bvmjnq.js";
import "./index-DPTDKB4o.js";
import "./index-D4R9Vjdp.js";
import "./index-Citk0ABi.js";
import "./index-DtPnfIe2.js";
import "./google-play-0W6tGWt8.js";
import "./Button-BbTMX0Dh.js";
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
import "./logo-DqlCWKKL.js";
import "./index-DWTvrBdo.js";
import "./aria-C-hsWcn7.js";
import "./typescript-CRqm1_SZ.js";
import "./vue.8fc199ce-D3bCrqKA.js";
const B = {
        class: "title-apps"
    },
    E = {
        key: 0,
        class: "buttons is-relative z-1 btn-lnd mt-5"
    },
    G = {
        class: "btn-app-tri"
    },
    S = {
        key: 0,
        class: "buttons is-relative z-1 btn-lnd mt-5"
    },
    T = {
        class: "btn-app-tri"
    },
    W = {
        key: 1,
        class: "container list-img big-img"
    },
    Y = {
        class: "image-body is-big"
    },
    M = {
        class: "card-ovl is-big"
    },
    Z = ["visibleOnce"],
    F = {
        class: "card-ovl is-big"
    },
    I = {
        class: "title-z is-big"
    },
    K = {
        class: "button-z2 is-big"
    },
    N = ["onClick"],
    U = {
        class: "container list-img",
        initial: {
            y: -60,
            opacity: 0
        },
        visibleOnce: {
            y: -0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 150,
                damping: 12,
                delay: 600
            }
        }
    },
    q = {
        class: "flex mt-4 t-dapp"
    },
    R = {
        class: "title-dark"
    },
    X = {
        class: "image-body"
    },
    H = {
        class: "card-ovl"
    },
    J = ["onClick"],
    Q = {
        class: "title-z"
    },
    $ = V(r({
        __name: "index",
        setup(r) {
            const {
                t: V
            } = d();
            P("Apps Dashboard | KeyFusion Technology", "The safest way to connect to dApps with the power of the KeyFusion. Discover the ultimate in security and convenience with our cryptocurrency wallet app.");
            const {
                Api: $
            } = c(), ss = p(!1), is = p(""), as = m(), ts = p("");
            u();
            const ls = p([]),
                es = p(),
                os = v((() => ls.value.filter((s => !ts.value || s.name.toLowerCase().includes(ts.value.toLowerCase()))))),
                ns = async s => {
                    as.isApp ? window.open(s.url) : ss.value = !0
                },
                rs = s => {
                    let i = new Map;
                    os.value.forEach((s => {
                        i.has(s.category) ? i.get(s.category).push(s) : i.set(s.category, [s])
                    })), es.value = i
                };
            $.getAllDapps().then((s => {
                const i = s.data;
                0 == i.code && (ls.value = i.data, rs())
            }));
            const ds = s => {
                    s ? window.open("https://play.google.com/store/apps/details?id=com.opz.dev") : window.open("https://testflight.apple.com/join/Oxsd9WMO")
                },
                cs = window.innerWidth <= 500;
            return (r, d) => {
                const c = e,
                    p = l,
                    m = t,
                    u = a,
                    v = i,
                    P = g("motion");
                return k(), b(w, null, [y(c), j("div", null, [y(u, {
                    color: "grey",
                    overflown: ""
                }, {
                    default: f((() => [j("div", B, [y(p, {
                        subtitle: "OPZ Web3 Browser",
                        title: "The Only Web3 Wallet You'll Ever Need"
                    }), cs ? (k(), b("div", E, [j("div", G, [j("div", {
                        onClick: d[0] || (d[0] = s => ds()),
                        class: "btn-left btn-add1"
                    }, d[7] || (d[7] = [j("div", {
                        class: "btn-left-body"
                    }, [j("img", {
                        width: "20",
                        class: "mr-2",
                        src: o,
                        alt: "Apple Store Download Link"
                    }), j("div", {
                        class: "btn-txt"
                    }, "OPZ BETA")], -1)])), j("div", {
                        onClick: d[1] || (d[1] = s => ds(!0)),
                        class: "btn-right btn-add1"
                    }, d[8] || (d[8] = [j("div", {
                        class: "btn-right-body"
                    }, [j("img", {
                        width: "20",
                        class: "mr-2",
                        src: n,
                        alt: "Google Play Download Link"
                    }), j("div", {
                        class: "btn-txt"
                    }, "GOOGLE PLAY")], -1)]))])])) : x("", !0), d[10] || (d[10] = j("div", {
                        class: "image-container"
                    }, [j("img", {
                        src: "/images/illustrations/dapps1.png",
                        class: "responsive-image"
                    }), j("img", {
                        src: "/images/illustrations/dapps3.png",
                        class: "responsive-image"
                    })], -1)), y(h(L), {
                        modelValue: ts.value,
                        "onUpdate:modelValue": d[3] || (d[3] = s => ts.value = s),
                        onInput: rs,
                        placeholder: h(V)("dash.search") + " dApps",
                        class: "input-symbols zewa"
                    }, {
                        prefix: f((() => d[9] || (d[9] = [j("i", {
                            class: "el-input__icon fas fa-search"
                        }, null, -1)]))),
                        suffix: f((() => ["" != ts.value ? (k(), b("i", {
                            key: 0,
                            class: "cursor-pointer el-input__icon fas fa-burn clsbtn",
                            onClick: d[2] || (d[2] = s => {
                                ts.value = "", rs()
                            })
                        })) : x("", !0)])),
                        _: 1
                    }, 8, ["modelValue", "placeholder"])]), cs ? x("", !0) : (k(), b("div", S, [j("div", T, [j("div", {
                        onClick: d[4] || (d[4] = s => ds()),
                        class: "btn-left btn-add1"
                    }, d[11] || (d[11] = [j("div", {
                        class: "btn-left-body"
                    }, [j("img", {
                        width: "20",
                        class: "mr-2",
                        src: o,
                        alt: "Apple Store Download Link"
                    }), j("div", {
                        class: "btn-txt"
                    }, "OPZ BETA")], -1)])), j("div", {
                        onClick: d[5] || (d[5] = s => ds(!0)),
                        class: "btn-right btn-add1"
                    }, d[12] || (d[12] = [j("div", {
                        class: "btn-right-body"
                    }, [j("img", {
                        width: "20",
                        class: "mr-2",
                        src: n,
                        alt: "Google Play Download Link"
                    }), j("div", {
                        class: "btn-txt"
                    }, "GOOGLE PLAY")], -1)]))])])), ts.value ? x("", !0) : (k(), b("div", W, [d[14] || (d[14] = j("div", {
                        class: "flex mt-2 t-dapp"
                    }, [j("div", {
                        class: "block-title"
                    }), j("div", {
                        class: "title-dark"
                    }, "Popular")], -1)), 0 == ls.value.length ? (k(), b(w, {
                        key: 0
                    }, _([{}, {}, {}, {}, {}], (s => j("div", Y, [j("div", {
                        class: A(["image-card is-big", is.value])
                    }, [j("div", M, [y(m, {
                        width: "100%",
                        height: "100%"
                    })])], 2)]))), 64)) : (k(!0), b(w, {
                        key: 1
                    }, _(ls.value.slice(0, 5), ((s, i) => O((k(), b("div", {
                        initial: {
                            y: -60,
                            opacity: 0
                        },
                        visibleOnce: {
                            y: -0,
                            opacity: 1,
                            transition: {
                                type: "spring",
                                stiffness: 150,
                                damping: 12,
                                delay: 300 + 200 * i
                            }
                        },
                        class: "image-body is-big"
                    }, [j("div", {
                        class: A(["image-card is-big", is.value]),
                        style: z("background-image: url(" + s.logo + ")")
                    }, null, 6), j("div", F, [j("p", I, C(s.name), 1), d[13] || (d[13] = j("div", {
                        class: "overlay-z is-big"
                    }, null, -1)), j("div", K, [j("a", {
                        class: "is-big",
                        onClick: i => ns(s)
                    }, "Visit", 8, N)])])], 8, Z)), [
                        [P]
                    ]))), 256))])), (k(!0), b(w, null, _(es.value, ((s, i) => O((k(), b("div", U, [j("div", q, [d[15] || (d[15] = j("div", {
                        class: "block-title"
                    }, null, -1)), j("div", R, C(s[0]), 1)]), (k(!0), b(w, null, _(s[1], ((s, i) => (k(), b("div", X, [j("div", {
                        class: A(["image-card", is.value]),
                        style: z("background-image: url(" + s.logo + ")")
                    }, null, 6), j("div", H, [j("a", {
                        onClick: i => ns(s)
                    }, [j("p", Q, C(s.name), 1), d[16] || (d[16] = j("div", {
                        class: "overlay-z"
                    }, null, -1)), d[17] || (d[17] = j("div", {
                        class: "button-z2"
                    }, [j("span", null, "Visit")], -1))], 8, J)])])))), 256))])), [
                        [P]
                    ]))), 256))])),
                    _: 1
                }), y(D, {
                    modelValue: ss.value,
                    "onUpdate:modelValue": d[6] || (d[6] = s => ss.value = s)
                }, null, 8, ["modelValue"]), y(v, {
                    content: h(s),
                    color: "dark",
                    cta: !1
                }, null, 8, ["content"])])], 64)
            }
        }
    }), [
        ["__scopeId", "data-v-02af4949"]
    ]);
export {
    $ as
    default
};