import {
    _ as e
} from "./Hero.vue_vue_type_style_index_0_lang-BzZhUp93.js";
import {
    _ as a
} from "./Button-BbTMX0Dh.js";
import {
    _ as o
} from "./Navbar2-DVEXcHRs.js";
import {
    _ as t,
    a as l
} from "./walletconnect-opz-Ugfc9rjM.js";
import {
    m as s,
    Y as n,
    a as i,
    dn as c,
    y as r,
    du as d,
    B as u,
    j as m,
    v as p,
    l as v,
    w as f,
    P as x,
    o as j,
    X as b,
    q as g,
    t as h
} from "./index-jdACH0Rc.js";
import {
    u as y
} from "./vue.8fc199ce-D3bCrqKA.js";
import {
    u as C
} from "./useSeoMeta-CRPJPIvz.js";
import {
    E as _,
    a as w
} from "./index-qJerOQq9.js";
import {
    B as E,
    C as S
} from "./provider-browser-D4UahRA7.js";
import {
    p as T
} from "./units-DFlkXKBd.js";
import {
    _ as D
} from "./_plugin-vue_export-helper-BCo6x5W8.js";
import "./index-Dwv4qbXN.js";
import "./AppPop-C6dVPDH2.js";
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
import "./ButtonGR-BF9zAU5B.js";
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
import "./sha256-o0pdH_sn.js";
import "./secp256k1-LeYlzbB0.js";
const B = {
        class: "columns is-vcentered"
    },
    U = {
        class: "column is-relative"
    },
    N = {
        class: "hero-caption mx-auto max-w-6"
    },
    I = {
        style: {
            "margin-top": "20px"
        }
    },
    k = {
        style: {
            "margin-top": "20px"
        }
    },
    A = D(s({
        __name: "web3presale",
        setup(s) {
            n();
            const D = i();
            C("Investors Dashbaord", "OPZ"), y({
                meta: [{
                    name: "robots",
                    content: "noindex"
                }]
            }), c();
            const A = r("NATIVE"),
                V = r("0x7b12e10a404ea8f748755f56f9d570fbe89ddbd1");
            r(0), r(0);
            const W = r("0");
            r({
                ethereum: ["ETH", "USDC", "USDT"],
                bsc: ["BNB", "USDC", "USDT"]
            });
            const {
                wallets: P,
                connectWallet: H,
                disconnectConnectedWallet: z,
                connectedWallet: F,
                setChain: O,
                connectedChain: J
            } = d(), L = r("0x1"), M = r("0x1");
            u(P, (e => {
                console.log("newWallet:", e);
                const a = "0x1" === L.value ? "ETH" : "BNB";
                if (e && e[0].accounts && e[0].accounts[0] && e[0].accounts[0].balance && a in e[0].accounts[0].balance) {
                    const o = e[0].accounts[0].balance[a];
                    console.log(`${a} balance:`, o), W.value = o
                } else void 0 === e[0].accounts[0].balance || (W.value = "0"), console.log(`${a} balance not found`)
            })), u(F, (e => {
                console.log("connectWallet:", e), e && e.accounts && e.accounts[0] && e.accounts[0].address && (console.log("connectWallet:", e.accounts[0].address), V.value = e.accounts[0].address)
            }), {
                deep: !0
            }), u(J, (e => {
                console.log("newChain:", e), (null == e ? void 0 : e.id) && (L.value = null == e ? void 0 : e.id, M.value = null == e ? void 0 : e.id, console.log("connectedChain:", P.value))
            }));
            const R = [{
                    constant: !1,
                    inputs: [{
                        name: "to",
                        type: "address"
                    }, {
                        name: "tokens",
                        type: "uint256"
                    }],
                    name: "transfer",
                    outputs: [{
                        name: "success",
                        type: "bool"
                    }],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }],
                Z = async () => {
                    var e, a, o, t;
                    if (F.value || await H(), F.value)
                        if ("0x38" === (null == (e = null == J ? void 0 : J.value) ? void 0 : e.id) || "0x1" === (null == (a = null == J ? void 0 : J.value) ? void 0 : a.id)) try {
                            const e = new E(F.value.provider, "any"),
                                a = await e.getSigner();
                            if (console.log(A.value), "NATIVE" === A.value) {
                                const e = {
                                        to: V.value,
                                        value: T("0.000001", "ether")
                                    },
                                    o = await a.sendTransaction(e);
                                await o.wait(), console.log("Transaction successful:", o)
                            } else {
                                let e = 0,
                                    l = "";
                                switch (A.value) {
                                    case "USDT":
                                        "0x1" === (null == (o = null == J ? void 0 : J.value) ? void 0 : o.id) ? (l = "0xdac17f958d2ee523a2206206994597c13d831ec7", e = 6) : (l = "0x55d398326f99059ff775485246999027b3197955", e = 18);
                                        break;
                                    case "USDC":
                                        "0x1" === (null == (t = null == J ? void 0 : J.value) ? void 0 : t.id) ? (l = "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48", e = 6) : (l = "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d", e = 18)
                                }
                                const s = new S(l, R, a),
                                    n = await s.transfer("0x7b12e10a404ea8f748755f56f9d570fbe89ddbd1", T("0.5", e));
                                n.wait(), console.log("Transaction successful:", n)
                            }
                        } catch (l) {
                            const e = null == l ? void 0 : l.code;
                            console.log("Error:", l), console.log("Error:", e), e && ("INSUFFICIENT_FUNDS" === (null == l ? void 0 : l.code) ? D.error("Insufficient funds for transaction.") : "CANCELLED" === (null == l ? void 0 : l.code) || "ACTION_REJECTED" === (null == l ? void 0 : l.code) || D.error(null == l ? void 0 : l.reason))
                        } else D.error("Please connect to Ethereum or BSC network")
                },
                $ = async () => {
                    F.value || await H(), F.value && D.info("Investor Account Not Found")
                };
            return (s, n) => {
                const i = o,
                    c = a,
                    r = e;
                return j(), m(x, null, [p(i), v("div", null, [p(r, {
                    alignment: "center",
                    size: "fullheight"
                }, {
                    body: f((() => [v("div", B, [v("div", U, [v("div", N, [v("div", {
                        class: "flex items-center justify-around p-3 mt-12 mx-auto text-center al-hero"
                    }, [v("div", {
                        class: "flex"
                    }, [v("div", {
                        class: "m-3 flex-1"
                    }, [v("img", {
                        onClick: $,
                        src: t,
                        class: "mx-auto cursor-pointer",
                        style: {
                            width: "100px",
                            height: "100px"
                        }
                    })]), v("div", {
                        class: "m-3 flex-1"
                    }, [v("img", {
                        onClick: $,
                        src: l,
                        class: "mx-auto cursor-pointer",
                        style: {
                            width: "100px",
                            height: "100px"
                        }
                    })])])]), v("div", I, [p(b(_), {
                        modelValue: L.value,
                        "onUpdate:modelValue": n[0] || (n[0] = e => L.value = e),
                        onChange: n[1] || (n[1] = e => (async e => {
                            L.value = M.value;
                            try {
                                await O({
                                    chainId: e
                                })
                            } catch (a) {
                                console.log("Error2:", a)
                            }
                        })(e))
                    }, {
                        default: f((() => [p(b(w), {
                            value: "0x1"
                        }, {
                            default: f((() => n[3] || (n[3] = [g("ETH")]))),
                            _: 1
                        }), p(b(w), {
                            value: "0x38"
                        }, {
                            default: f((() => n[4] || (n[4] = [g("BSC")]))),
                            _: 1
                        })])),
                        _: 1
                    }, 8, ["modelValue"])]), v("div", k, [p(b(_), {
                        modelValue: A.value,
                        "onUpdate:modelValue": n[2] || (n[2] = e => A.value = e)
                    }, {
                        default: f((() => [p(b(w), {
                            value: "NATIVE"
                        }, {
                            default: f((() => [g(h("0x1" === L.value ? "ETH" : "BNB"), 1)])),
                            _: 1
                        }), p(b(w), {
                            value: "USDT",
                            label: "USDT"
                        }), p(b(w), {
                            value: "USDC",
                            label: "USDC"
                        })])),
                        _: 1
                    }, 8, ["modelValue"])]), p(c, {
                        color: "primary",
                        class: "mt-4",
                        elevated: "",
                        bold: "",
                        onClick: s.switchChain
                    }, {
                        default: f((() => n[5] || (n[5] = [g("Switch Chain")]))),
                        _: 1
                    }, 8, ["onClick"]), p(c, {
                        color: "primary",
                        class: "mt-4",
                        elevated: "",
                        bold: "",
                        onClick: $
                    }, {
                        default: f((() => n[6] || (n[6] = [g("Connect to a Wallet")]))),
                        _: 1
                    }), p(c, {
                        color: "primary",
                        class: "mt-4",
                        elevated: "",
                        bold: "",
                        onClick: Z
                    }, {
                        default: f((() => n[7] || (n[7] = [g("buy OPZ")]))),
                        _: 1
                    })])])])])),
                    footer: f((() => n[8] || (n[8] = []))),
                    _: 1
                })])], 64)
            }
        }
    }), [
        ["__scopeId", "data-v-79f4efb4"]
    ]);
export {
    A as
    default
};