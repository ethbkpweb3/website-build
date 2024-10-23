import {
    f as t,
    _ as s
} from "./index-B_Hz-fzE.js";
import {
    _ as o
} from "./Hero.vue_vue_type_style_index_0_lang-BzZhUp93.js";
import {
    _ as e
} from "./PageTitle-C0-ARbcp.js";
import {
    _ as a
} from "./Button-BbTMX0Dh.js";
import {
    _ as i
} from "./Navbar2-DVEXcHRs.js";
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
} from "./index-jdACH0Rc.js";
import {
    u as y
} from "./vue.8fc199ce-D3bCrqKA.js";
import {
    u as b
} from "./useSeoMeta-CRPJPIvz.js";
import {
    E as w
} from "./index-BoKGXuju.js";
import {
    _ as C
} from "./_plugin-vue_export-helper-BCo6x5W8.js";
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