import {
    f as t,
    _ as s
} from "./index-BPv_7EZ9.js";
import {
    _ as o
} from "./Hero.vue_vue_type_style_index_0_lang-DHspTRKr.js";
import {
    _ as e
} from "./PageTitle-ChfDSLUN.js";
import {
    _ as a
} from "./Button-C_PMcYdl.js";
import {
    _ as i
} from "./Navbar2-Cx1AKm6v.js";
import {
    _ as r,
    a as n
} from "./walletconnect-opz-Ugfc9rjM.js";
import {
    m as l,
    Y as m,
    a as c,
    dn as p,
    du as d,
    j as u,
    v as j,
    l as x,
    w as v,
    X as f,
    P as h,
    o as _,
    q as g
} from "./index-CQfCy4Xm.js";
import {
    u as y
} from "./vue.8fc199ce-DBDcZ0BB.js";
import {
    u as b
} from "./useSeoMeta-DJrBtPw8.js";
import {
    E as w
} from "./index--1JsBO1r.js";
import {
    _ as C
} from "./_plugin-vue_export-helper-BCo6x5W8.js";
import "./Subtitle-C6oUzL5I.js";
import "./ButtonGR-CCzD27Qk.js";
import "./Title-B_xB6icS.js";
import "./AppPop-DXr7YMXx.js";
import "./index-DZwhim7i.js";
import "./browser-Cv63Auap.js";
import "./index-DPTDKB4o.js";
import "./index-wV0BwLDn.js";
import "./index-DWyf7GKU.js";
import "./index-CB5HUA9W.js";
import "./google-play-0W6tGWt8.js";
import "./VPlaceload-DcvQMSN9.js";
import "./AvatarSimple-DIs6U3iF.js";
import "./via-placeholder-csI6CdwS.js";
import "./user-qMNVzsWD.js";
import "./sett-Dbwu6PJ1.js";
import "./avatarSettings-C1kj7zSJ.js";
import "./vue3-avataaars-DO56oOZp.js";
import "./index-38aUouWI.js";
import "./index-5N62XIoj.js";
import "./index-DYh1qtlV.js";
import "./index-CreMjc0E.js";
import "./use-dialog-CC6CVfkB.js";
import "./use-global-config-CYuHb1FB.js";
import "./index-BR6qnryQ.js";
import "./index-BaPl-dvV.js";
import "./typescript-CRqm1_SZ.js";
import "./logo-DqlCWKKL.js";
import "./index-D21_sbBM.js";
import "./aria-C-hsWcn7.js";
const k = {
        class: "columns is-vcentered"
    },
    A = {
        class: "column is-relative"
    },
    I = {
        key: 0,
        class: "hero-caption mx-auto max-w-6"
    },
    P = {
        class: "flex items-center justify-around p-3 mt-12 mx-auto al-hero"
    },
    T = {
        key: 1,
        class: "hero-caption mx-auto max-w-6"
    },
    W = C(l({
        __name: "investors",
        setup(l) {
            m();
            const C = c();
            b("Investors Dashbaord", "OPZ"), y({
                meta: [{
                    name: "robots",
                    content: "noindex"
                }]
            }), p();
            const {
                wallets: W,
                connectWallet: z,
                disconnectConnectedWallet: B,
                connectedWallet: E
            } = d(), S = async () => {
                E.value || await z(), E.value && C.info("Investor Account Not Found")
            };
            return (l, m) => {
                const c = i,
                    p = a,
                    d = e,
                    y = o,
                    b = s;
                return _(), u(h, null, [j(c), x("div", null, [j(y, {
                    alignment: "center",
                    size: "fullheight"
                }, {
                    body: v((() => [x("div", k, [x("div", A, [f(E) ? (_(), u("div", I, [x("div", P, [j(f(w), {
                        center: "",
                        title: "Investor Account Not Found",
                        description: "This address (" + f(E).accounts[0].address + ") does not belong to Investor Account",
                        type: "info",
                        closable: !0,
                        onClose: f(B),
                        effect: "dark"
                    }, null, 8, ["description", "onClose"])])])) : (_(), u("div", T, [x("div", {
                        class: "flex items-center justify-around p-3 mt-12 mx-auto text-center al-hero"
                    }, [x("div", {
                        class: "flex"
                    }, [x("div", {
                        class: "m-3 flex-1"
                    }, [x("img", {
                        onClick: S,
                        src: r,
                        class: "mx-auto cursor-pointer",
                        style: {
                            width: "100px",
                            height: "100px"
                        }
                    })]), x("div", {
                        class: "m-3 flex-1"
                    }, [x("img", {
                        onClick: S,
                        src: n,
                        class: "mx-auto cursor-pointer",
                        style: {
                            width: "100px",
                            height: "100px"
                        }
                    })])])]), j(d, {
                        class: "inv-page",
                        title: "This is an official OPZ investor dashboard",
                        subtitle: "WELCOME",
                        text: "To use the Investor dashboard, please connect your wallet",
                        headsmall: ""
                    }, {
                        content: v((() => [j(p, {
                            color: "primary",
                            class: "mt-4",
                            elevated: "",
                            bold: "",
                            onClick: S
                        }, {
                            default: v((() => m[0] || (m[0] = [g("Connect to a Wallet")]))),
                            _: 1
                        })])),
                        _: 1
                    })]))])])])),
                    footer: v((() => m[1] || (m[1] = []))),
                    _: 1
                }), j(b, {
                    content: f(t),
                    color: "dark",
                    cta: !1
                }, null, 8, ["content"])])], 64)
            }
        }
    }), [
        ["__scopeId", "data-v-1ac9d72c"]
    ]);
export {
    W as
    default
};