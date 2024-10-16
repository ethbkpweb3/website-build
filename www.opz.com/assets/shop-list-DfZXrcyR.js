import {
    f as e,
    _ as l
} from "./index-B_Hz-fzE.js";
import {
    _ as a
} from "./Section-fdq8wkjz.js";
import {
    _ as t
} from "./Button-BbTMX0Dh.js";
import {
    _ as s
} from "./Title-ChmnbwlA.js";
import {
    _ as r
} from "./AvatarSimple-CfXnZ0K8.js";
import "./index-Dwv4qbXN.js";
import {
    a as i,
    E as o
} from "./index-cRGdv3RN.js";
import {
    m as d,
    K as n,
    Y as u,
    y as m,
    B as p,
    o as c,
    j as g,
    v,
    w as f,
    s as h,
    P as b,
    cB as y,
    n as C,
    X as w,
    l as x,
    t as _,
    p as j,
    u as P,
    dm as V,
    h as k,
    a as O,
    G as S,
    dp as Z,
    dn as z,
    cC as M,
    q as B,
    ck as N,
    r as T,
    bx as U,
    I as q,
    cD as F,
    dg as I
} from "./index-jdACH0Rc.js";
import {
    _ as A
} from "./CountryInput.vue_vue_type_style_index_0_lang-B3TRUMWS.js";
import {
    C as D,
    S as L
} from "./carousel.es-cLcmNbI1.js";
import {
    F as E
} from "./browser-B3Bvmjnq.js";
import {
    E as W
} from "./index-DtPnfIe2.js";
import {
    E as G,
    a as R
} from "./index-CrBYayi3.js";
import {
    a as H,
    E as Q
} from "./index-Bv0EmDBg.js";
import {
    E as $
} from "./index-DBFvTDaE.js";
import {
    E as K
} from "./index-CYOIannN.js";
import {
    E as Y
} from "./index-C8W9xb4z.js";
import {
    E as X
} from "./index-Y8R-DFnQ.js";
import {
    _ as J
} from "./_plugin-vue_export-helper-BCo6x5W8.js";
import {
    u as ee
} from "./useSeoMeta-CRPJPIvz.js";
import {
    E as le
} from "./index-Dq1-XyVz.js";
import {
    _ as ae
} from "./Control-CwktQ3QA.js";
import {
    _ as te
} from "./VInput-C8HKODxn.js";
import {
    l as se
} from "./loadingSvg-B2DNNGSL.js";
import {
    m as re
} from "./index-DgEpRd73.js";
import {
    a as ie,
    E as oe
} from "./index-DZsnwgZr.js";
import {
    _ as de
} from "./Navbar2-DVEXcHRs.js";
import "./Subtitle-ytb6lg8s.js";
import "./ButtonGR-BF9zAU5B.js";
import "./AppPop-C6dVPDH2.js";
import "./index-DPTDKB4o.js";
import "./index-D4R9Vjdp.js";
import "./index-Citk0ABi.js";
import "./google-play-0W6tGWt8.js";
import "./via-placeholder-csI6CdwS.js";
import "./all-countries-_6k8nJ5H.js";
import "./_baseClone-mconpdQJ.js";
import "./_initCloneObject-CyvZF8uk.js";
import "./typescript-CRqm1_SZ.js";
import "./use-global-config-Dm8LyY4T.js";
import "./index-Cg9BJciP.js";
import "./index-B1yvdImc.js";
import "./use-dialog-CmZNE833.js";
import "./index-BWeq1WY3.js";
import "./aria-C-hsWcn7.js";
import "./validator-Rlal7f47.js";
import "./vue.8fc199ce-D3bCrqKA.js";
import "./isPlainObject--3V5F7Ei.js";
import "./VPlaceload-jGgmcTFZ.js";
import "./user-qMNVzsWD.js";
import "./sett-Dbwu6PJ1.js";
import "./avatarSettings-Daanxsoo.js";
import "./vue3-avataaars-C_k_hIh4.js";
import "./logo-DqlCWKKL.js";
import "./index-DWTvrBdo.js";
const ne = {
        class: "flex tel-input"
    },
    ue = ["src"],
    me = {
        class: "flex items-center"
    },
    pe = ["src"],
    ce = d({
        __name: "CardBuyInput",
        props: {
            modelValue: {
                default: void 0
            }
        },
        emits: ["update:modelValue"],
        setup(e, {
            emit: l
        }) {
            const a = e,
                t = l,
                s = n({
                    allCards: [],
                    filteredOptions: []
                }),
                {
                    t: r
                } = u();
            s.allCards.push({
                name: "OPZ Card",
                price: "25",
                img: "/images/illustrations/MPC-Card.png"
            }), s.allCards.push({
                name: "OPZ Steel Card",
                price: "50",
                img: "/images/illustrations/MPC-Card-Black.png"
            }), s.filteredOptions = s.allCards;
            const d = m(a.modelValue || void 0);
            p((() => a.modelValue), (e => {
                d.value = e
            }));
            const P = () => {
                    d.value = void 0, t("update:modelValue", "")
                },
                V = e => {
                    d.value = e, t("update:modelValue", e)
                },
                k = e => {
                    s.filteredOptions = s.allCards.filter((l => l.name.toLowerCase().includes(e.toLowerCase())))
                };
            return (e, l) => (c(), g("div", ne, [v(w(o), {
                modelValue: d.value,
                "onUpdate:modelValue": l[0] || (l[0] = e => d.value = e),
                filterable: "",
                clearable: "",
                class: j(d.value && "greenBorderSelect"),
                "default-first-option": "",
                "filter-method": k,
                onClear: P,
                onChange: V,
                placeholder: w(r)("wall.please-select"),
                style: {
                    width: "100%"
                }
            }, {
                prefix: f((() => {
                    var e;
                    return [d.value ? (c(), g("img", {
                        key: 0,
                        src: null == (e = s.allCards.find((e => e.name === d.value))) ? void 0 : e.img,
                        width: "20",
                        class: "ml-1 mr-2"
                    }, null, 8, ue)) : h("", !0)]
                })),
                default: f((() => [(c(!0), g(b, null, y(s.filteredOptions, (e => (c(), C(w(i), {
                    key: e.name,
                    label: e.name,
                    class: "vti__dropdown-item",
                    value: e.name
                }, {
                    default: f((() => [x("div", me, [x("img", {
                        src: e.img,
                        width: "20",
                        class: "mr-2"
                    }, null, 8, pe), x("span", null, _(e.name), 1)])])),
                    _: 2
                }, 1032, ["label", "value"])))), 128))])),
                _: 1
            }, 8, ["modelValue", "class", "placeholder"])]))
        }
    }),
    ge = {
        class: "flex text-gray4 head-title items-center mb-1"
    },
    ve = {
        class: "title-input"
    },
    fe = {
        key: 0,
        class: "title-input mt-3"
    },
    he = {
        key: 2
    },
    be = {
        role: "row",
        class: "order-buy mt-3 mb-2"
    },
    ye = {
        role: "cell",
        class: "order-buy-cell justify-start"
    },
    Ce = {
        class: "img-data"
    },
    we = ["src", "alt"],
    xe = ["src"],
    _e = ["src"],
    je = {
        role: "cell",
        class: "order-buy-cell justify-center text-mid"
    },
    Pe = {
        class: "pl-3"
    },
    Ve = {
        role: "cell",
        class: "order-buy-cell justify-center text-end"
    },
    ke = {
        class: "pl-1 flex items-center",
        style: {
            "margin-bottom": "3px",
            "justify-content": "inherit"
        }
    },
    Oe = {
        role: "row",
        class: "order-buy mb-3 mt-0"
    },
    Se = {
        role: "cell",
        class: "order-buy-cell justify-center text-mid"
    },
    Ze = {
        class: "pl-3 text-regular"
    },
    ze = {
        key: 0,
        class: "pl-3 text-regular"
    },
    Me = {
        key: 1,
        class: "pl-3 text-regular"
    },
    Be = {
        role: "row",
        class: "order-buy my-3"
    },
    Ne = {
        role: "cell",
        class: "order-buy-cell justify-center text-mid"
    },
    Te = {
        class: "pl-3"
    },
    Ue = {
        role: "cell",
        class: "order-buy-cell justify-center text-end"
    },
    qe = {
        class: "pl-3 flex"
    },
    Fe = {
        role: "row",
        class: "order-buy my-3"
    },
    Ie = {
        role: "cell",
        class: "order-buy-cell justify-center text-mid"
    },
    Ae = {
        class: "pl-3"
    },
    De = {
        role: "cell",
        class: "order-buy-cell justify-center text-end"
    },
    Le = {
        class: "pl-3 flex"
    },
    Ee = {
        role: "row",
        class: "order-buy mt-0 mb-3"
    },
    We = {
        role: "cell",
        class: "order-buy-cell justify-center text-end"
    },
    Ge = {
        class: "pl-3 flex"
    },
    Re = {
        key: 1,
        role: "row",
        class: "order-buy my-3"
    },
    He = {
        key: 2,
        role: "row",
        class: "order-buy my-3"
    },
    Qe = {
        key: 3,
        role: "row",
        class: "order-buy my-3"
    },
    $e = {
        role: "cell",
        class: "order-buy-cell justify-center text-mid"
    },
    Ke = {
        class: "pl-3 text-red"
    },
    Ye = J(d({
        __name: "BuyShopModal",
        props: {
            btn: {
                type: Boolean,
                default: !1
            },
            modelValue: {
                type: Boolean,
                default: !0
            },
            item: {}
        },
        emits: ["update:modelValue", "close", "successPurchase"],
        setup(e, {
            emit: l
        }) {
            const a = P(),
                {
                    t: t
                } = u(),
                {
                    Api: s
                } = V(),
                r = m(),
                d = l,
                p = e,
                N = k({
                    get: () => p.modelValue,
                    set: e => d("update:modelValue", e)
                }),
                T = m(1),
                U = n({
                    allCards: []
                });
            U.allCards.push({
                name: "OPZ Card",
                price: 64,
                img: "/images/illustrations/MPC-Card.png",
                img2: "/images/illustrations/MPC-Card2.png"
            }), U.allCards.push({
                name: "OPZ Steel Card",
                price: 120,
                img: "/images/illustrations/MPC-Card-Black.png",
                img2: "/images/illustrations/MPC-Card-Metallic.png"
            });
            const q = n({
                    address: "",
                    apartment: "",
                    firstName: "",
                    lastName: "",
                    city: "",
                    postal: "",
                    phone: ""
                }),
                F = O(),
                I = m(""),
                J = m(120 == p.item.price ? "OPZ Steel Card" : "OPZ Card"),
                ee = () => {
                    I.value = "", J.value = 120 == p.item.price ? "OPZ Steel Card" : "OPZ Card", d("update:modelValue", !1)
                };
            S(), Z();
            z();
            const le = async () => {
                var e, l, a, i, o;
                return await X.confirm("Are you sure you want to place this order? " + ((((null == (e = p.item) ? void 0 : e.isCard) ? null == (a = null == (l = U.allCards) ? void 0 : l.find((e => e.name == J.value))) ? void 0 : a.price : null == (i = p.item) ? void 0 : i.price) * T.value + (null == (o = p.item) ? void 0 : o.shippingPrice)) / .04).toFixed(0) + " OPZ tokens will be deducted from your allocation and are non-refundable.", "Order Confirmation", {
                    confirmButtonText: t("sett.confirm"),
                    cancelButtonText: t("wall.cancel"),
                    type: "warning",
                    customClass: "msg-dark sasfw"
                }).then((() => {
                    var e;
                    return (e = r.value) && e.validate((l => {
                        if (!l) return !1; {
                            const l = new E;
                            l.append("country", I.value), l.append("address", q.address), q.apartment && l.append("apartment", q.apartment), l.append("firstName", q.firstName), l.append("lastName", q.lastName), p.item.isCard ? l.append("itemId", "OPZ Steel Card" === J.value ? 2 : 1) : l.append("itemId", p.item.id), l.append("quantity", T.value), l.append("city", q.city), l.append("postal", q.postal), l.append("phone", q.phone), s.addShopOrder(l).then((({
                                data: l
                            }) => {
                                500 == l.code ? F.error(l.message) : 0 == l.code && (d("update:modelValue", !1), e.resetFields(), F.success(t("inx.submitted-successfully")), d("successPurchase"))
                            }))
                        }
                    })), !0
                })).catch((() => !1))
            };
            return (e, l) => {
                const s = A,
                    n = ce,
                    u = M("RouterLink");
                return c(), C(w(Y), {
                    modelValue: N.value,
                    "onUpdate:modelValue": l[11] || (l[11] = e => N.value = e),
                    "append-to-body": "",
                    class: "dialogw cdetail buy-card-pop heads2",
                    "destroy-on-close": "",
                    onClose: ee,
                    onOpen: l[12] || (l[12] = e => (() => {
                        d("update:modelValue", !0);
                        const e = `${window.location.pathname}`;
                        window.history.replaceState({}, "", e)
                    })())
                }, {
                    header: f((() => [x("div", ge, [l[13] || (l[13] = x("i", {
                        class: "fas fa-cicle"
                    }, null, -1)), B(" " + _("Preorder " + p.item.name), 1)])])),
                    default: f((() => {
                        var e, d, m, P, V, k, O, S, Z, z, M;
                        return [x("div", null, [x("p", ve, _(w(t)("pga.select-country")), 1), v(s, {
                            modelValue: I.value,
                            "onUpdate:modelValue": l[0] || (l[0] = e => I.value = e)
                        }, null, 8, ["modelValue"]), I.value && p.item.isCard ? (c(), g("p", fe, "Type Card")) : h("", !0), I.value && p.item.isCard ? (c(), C(n, {
                            key: 1,
                            modelValue: J.value,
                            "onUpdate:modelValue": l[1] || (l[1] = e => J.value = e)
                        }, null, 8, ["modelValue"])) : h("", !0), I.value && (J.value || !1 === p.item.isCard) ? (c(), g("div", he, [l[25] || (l[25] = x("hr", {
                            class: "mt-4 mb-0 line-hz"
                        }, null, -1)), x("div", be, [x("div", ye, [x("div", {
                            class: j(["img-start", [p.item.whiteBg && "w-back"]])
                        }, [x("div", Ce, [v(w(W), {
                            placement: "bottom",
                            width: 300,
                            trigger: "click"
                        }, {
                            reference: f((() => {
                                var e;
                                return [x("img", {
                                    src: p.item.isCard ? null == (e = U.allCards.find((e => e.name == J.value))) ? void 0 : e.img : p.item.image,
                                    alt: J.value,
                                    class: "img-data"
                                }, null, 8, we)]
                            })),
                            default: f((() => [v(w(D), {
                                "items-to-show": 1,
                                autoplay: 2e3,
                                wrapAround: p.item.isCard,
                                pauseAutoplayOnHover: ""
                            }, {
                                default: f((() => [(c(), C(w(L), {
                                    key: 1,
                                    class: j(["slide-1", [p.item.roundBg && "w-back"]])
                                }, {
                                    default: f((() => {
                                        var e;
                                        return [x("img", {
                                            src: p.item.isCard ? null == (e = U.allCards.find((e => e.name == J.value))) ? void 0 : e.img : p.item.image,
                                            style: {
                                                "border-radius": "9px"
                                            },
                                            alt: ""
                                        }, null, 8, xe)]
                                    })),
                                    _: 1
                                }, 8, ["class"])), p.item.isCard ? (c(), C(w(L), {
                                    key: 2
                                }, {
                                    default: f((() => {
                                        var e;
                                        return [x("img", {
                                            src: null == (e = U.allCards.find((e => e.name == J.value))) ? void 0 : e.img2,
                                            alt: ""
                                        }, null, 8, _e)]
                                    })),
                                    _: 1
                                })) : h("", !0)])),
                                _: 1
                            }, 8, ["wrapAround"])])),
                            _: 1
                        })])], 2)]), x("div", je, [x("p", Pe, _(p.item.isCard ? J.value : p.item.name), 1)]), x("div", Ve, [x("p", ke, [B(_(p.item.isCard ? null == (e = U.allCards.find((e => e.name == J.value))) ? void 0 : e.price : p.item.price) + " ", 1), l[14] || (l[14] = x("p", {
                            class: "ml-1 qt-item"
                        }, " USDT", -1))]), v(w(o), {
                            modelValue: T.value,
                            "onUpdate:modelValue": l[2] || (l[2] = e => T.value = e),
                            placeholder: "Quantity",
                            size: "small",
                            style: {
                                width: "59px"
                            }
                        }, {
                            default: f((() => [(c(), g(b, null, y(9, (e => v(w(i), {
                                key: e,
                                label: e + " Qt.",
                                value: Number(e)
                            }, null, 8, ["label", "value"]))), 64))])),
                            _: 1
                        }, 8, ["modelValue"])])]), x("div", Oe, [x("div", Se, [x("p", Ze, _(p.item.description), 1), p.item.isCard ? (c(), g("p", ze, [B(_(w(t)("sett.learn-more")) + ": ", 1), l[15] || (l[15] = x("a", {
                            href: "https://whitepaper.opz.com/opz/opz-nfc/opz-card",
                            target: "_blank"
                        }, "OPZ-NFC Card Whitepaper", -1))])) : h("", !0), p.item.name.includes("Micro Wallet") ? (c(), g("p", Me, " Size: 5mm x 5mm ")) : h("", !0)])]), l[26] || (l[26] = x("hr", {
                            class: "mt-0 mb-2 line-hz"
                        }, null, -1)), x("div", Be, [x("div", Ne, [x("p", Te, " Shipping (" + _(p.item.shipping) + ") ", 1)]), x("div", Ue, [x("span", qe, [B(_(p.item.shippingPrice) + " ", 1), l[16] || (l[16] = x("p", {
                            class: "ml-1 qt-item"
                        }, " USDT", -1))])])]), l[27] || (l[27] = x("hr", {
                            class: "mt-0 mb-2 line-hz"
                        }, null, -1)), x("div", Fe, [x("div", Ie, [x("p", Ae, _(w(t)("pga.total-amount")) + " (USDT) ", 1)]), x("div", De, [x("span", Le, [B(_(((null == (d = p.item) ? void 0 : d.isCard) ? null == (P = null == (m = U.allCards) ? void 0 : m.find((e => e.name == J.value))) ? void 0 : P.price : null == (V = p.item) ? void 0 : V.price) * T.value + (null == (k = p.item) ? void 0 : k.shippingPrice)) + " ", 1), l[17] || (l[17] = x("p", {
                            class: "ml-1 qt-item"
                        }, " USDT", -1))])])]), x("div", Ee, [l[19] || (l[19] = x("div", {
                            role: "cell",
                            class: "order-buy-cell justify-center text-mid"
                        }, null, -1)), x("div", We, [x("p", Ge, [B(" ≈ " + _(((((null == (O = p.item) ? void 0 : O.isCard) ? null == (Z = null == (S = U.allCards) ? void 0 : S.find((e => e.name == J.value))) ? void 0 : Z.price : null == (z = p.item) ? void 0 : z.price) * T.value + (null == (M = p.item) ? void 0 : M.shippingPrice)) / .04).toFixed(0)) + " ", 1), l[18] || (l[18] = x("p", {
                            class: "ml-1 qt-item"
                        }, " OPZ", -1))])])]), l[28] || (l[28] = x("hr", {
                            class: "mt-2 mb-5 line-hz",
                            "data-v-7ab4fc0e": ""
                        }, null, -1)), p.item.isCard && "OPZ Steel Card" == J.value || p.item.comingSoon ? p.item.comingSoon ? (c(), g("div", Re, l[20] || (l[20] = [x("div", {
                            role: "cell",
                            class: "order-buy-cell justify-center text-mid"
                        }, [x("p", {
                            class: "pl-3 text-red"
                        }, " Coming soon! Please follow our social media for the release date. ")], -1)]))) : (c(), g("div", He, l[21] || (l[21] = [x("div", {
                            role: "cell",
                            class: "order-buy-cell justify-center text-mid"
                        }, [x("p", {
                            class: "pl-3 text-red"
                        }, " We apologize for the inconvenience, but the Steel cards are currently unavailable. Please visit us again later to place an order. ")], -1)]))) : (c(), C(w(G), {
                            key: 0,
                            "label-position": "left",
                            "label-width": "150px",
                            style: {
                                "max-width": "460px"
                            },
                            model: q,
                            ref_key: "formRef",
                            ref: r,
                            class: "form-buy-card"
                        }, {
                            default: f((() => [v(w(R), {
                                label: w(t)("sett.name"),
                                required: ""
                            }, {
                                default: f((() => [v(w(H), {
                                    gutter: 20
                                }, {
                                    default: f((() => [v(w(Q), {
                                        span: 12
                                    }, {
                                        default: f((() => [v(w(R), {
                                            prop: "firstName",
                                            rules: {
                                                required: !0,
                                                trigger: "blur",
                                                min: 2,
                                                max: 30,
                                                message: "Min 2 characters"
                                            }
                                        }, {
                                            default: f((() => [v(w($), {
                                                modelValue: q.firstName,
                                                "onUpdate:modelValue": l[3] || (l[3] = e => q.firstName = e),
                                                label: w(t)("pga.first-name"),
                                                placeholder: w(t)("pga.first-name")
                                            }, null, 8, ["modelValue", "label", "placeholder"])])),
                                            _: 1
                                        })])),
                                        _: 1
                                    }), v(w(Q), {
                                        span: 12
                                    }, {
                                        default: f((() => [v(w(R), {
                                            prop: "lastName",
                                            rules: {
                                                required: !0,
                                                trigger: "blur",
                                                min: 2,
                                                max: 30,
                                                message: "Min 2 characters"
                                            }
                                        }, {
                                            default: f((() => [v(w($), {
                                                modelValue: q.lastName,
                                                "onUpdate:modelValue": l[4] || (l[4] = e => q.lastName = e),
                                                label: w(t)("pga.last-name"),
                                                placeholder: w(t)("pga.last-name")
                                            }, null, 8, ["modelValue", "label", "placeholder"])])),
                                            _: 1
                                        })])),
                                        _: 1
                                    })])),
                                    _: 1
                                })])),
                                _: 1
                            }, 8, ["label"]), v(w(R), {
                                label: w(t)("pga.address-home"),
                                prop: "address",
                                rules: {
                                    required: !0,
                                    trigger: "blur",
                                    min: 5,
                                    max: 50,
                                    message: "Must be between 5 to 50 characters"
                                }
                            }, {
                                default: f((() => [v(w($), {
                                    placeholder: w(t)("pga.address-home"),
                                    modelValue: q.address,
                                    "onUpdate:modelValue": l[5] || (l[5] = e => q.address = e)
                                }, null, 8, ["placeholder", "modelValue"])])),
                                _: 1
                            }, 8, ["label"]), v(w(R), {
                                label: "Apartment, suite, etc.",
                                prop: "apartment",
                                rules: {
                                    required: !1
                                }
                            }, {
                                default: f((() => [v(w($), {
                                    modelValue: q.apartment,
                                    "onUpdate:modelValue": l[6] || (l[6] = e => q.apartment = e),
                                    placeholder: "Apartment, suite, etc."
                                }, null, 8, ["modelValue"])])),
                                _: 1
                            }), v(w(R), {
                                label: w(t)("pga.city"),
                                required: ""
                            }, {
                                default: f((() => [v(w(H), {
                                    gutter: 20
                                }, {
                                    default: f((() => [v(w(Q), {
                                        span: 12
                                    }, {
                                        default: f((() => [v(w(R), {
                                            prop: "city",
                                            rules: {
                                                required: !0,
                                                trigger: "blur",
                                                pattern: /^[a-zA-Z\s]*$/,
                                                message: "Wrong format"
                                            }
                                        }, {
                                            default: f((() => [v(w($), {
                                                modelValue: q.city,
                                                "onUpdate:modelValue": l[7] || (l[7] = e => q.city = e),
                                                label: w(t)("pga.city"),
                                                placeholder: w(t)("pga.city")
                                            }, null, 8, ["modelValue", "label", "placeholder"])])),
                                            _: 1
                                        })])),
                                        _: 1
                                    }), v(w(Q), {
                                        span: 12
                                    }, {
                                        default: f((() => [v(w(R), {
                                            prop: "postal",
                                            rules: [{
                                                required: !0,
                                                message: w(t)("pga.field-is-required"),
                                                trigger: "blur"
                                            }]
                                        }, {
                                            default: f((() => [v(w($), {
                                                modelValue: q.postal,
                                                "onUpdate:modelValue": l[8] || (l[8] = e => q.postal = e),
                                                label: w(t)("pga.zip") + "/" + w(t)("pga.postal-code"),
                                                placeholder: w(t)("pga.zip") + "/" + w(t)("pga.postal-code")
                                            }, null, 8, ["modelValue", "label", "placeholder"])])),
                                            _: 1
                                        }, 8, ["rules"])])),
                                        _: 1
                                    })])),
                                    _: 1
                                })])),
                                _: 1
                            }, 8, ["label"]), v(w(R), {
                                label: w(t)("pga.phone"),
                                prop: "phone",
                                rules: {
                                    required: !0,
                                    trigger: "blur",
                                    pattern: /^[0-9\-\+]{7,15}$/,
                                    message: "Must be 9 to 15 digits and can contain + or -"
                                }
                            }, {
                                default: f((() => [v(w($), {
                                    placeholder: w(t)("pga.phone"),
                                    modelValue: q.phone,
                                    "onUpdate:modelValue": l[9] || (l[9] = e => q.phone = e)
                                }, null, 8, ["placeholder", "modelValue"])])),
                                _: 1
                            }, 8, ["label"]), v(w(R), null, {
                                default: f((() => [v(w(K), {
                                    type: "primary",
                                    disabled: !w(a).isLoggedIn,
                                    onClick: le
                                }, {
                                    default: f((() => [B(_(w(a).isLoggedIn ? w(t)("inx.order") : w(t)("inx.please-login")), 1)])),
                                    _: 1
                                }, 8, ["disabled"]), v(w(K), {
                                    onClick: l[10] || (l[10] = e => {
                                        var l;
                                        (l = r.value) && l.resetFields()
                                    })
                                }, {
                                    default: f((() => [B(_(w(t)("wall.reset")), 1)])),
                                    _: 1
                                })])),
                                _: 1
                            })])),
                            _: 1
                        }, 8, ["model"])), w(a).isLoggedIn ? h("", !0) : (c(), g("div", Qe, [x("div", $e, [x("p", Ke, [l[23] || (l[23] = B(" Please ")), v(u, {
                            style: {
                                "text-decoration": "underline"
                            },
                            to: {
                                name: "auth"
                            }
                        }, {
                            default: f((() => l[22] || (l[22] = [B("login")]))),
                            _: 1
                        }), l[24] || (l[24] = B(" to place an order. "))])])]))])) : h("", !0)])]
                    })),
                    _: 1
                }, 8, ["modelValue"])
            }
        }
    }), [
        ["__scopeId", "data-v-117f4ddd"]
    ]),
    Xe = {
        class: "card-image"
    },
    Je = {
        class: "img-data"
    },
    el = ["src", "alt"],
    ll = {
        class: "likes"
    },
    al = {
        class: "card-head"
    },
    tl = {
        class: "card-foot"
    },
    sl = {
        class: "bid"
    },
    rl = {
        class: "bid-label"
    },
    il = {
        class: "bid-value"
    },
    ol = {
        class: "bid-action"
    },
    dl = J(d({
        __name: "ShopCard",
        props: {
            content: {},
            flat: {
                type: Boolean,
                default: !1
            }
        },
        emits: ["successPurchase"],
        setup(e, {
            emit: l
        }) {
            const a = e,
                i = l,
                o = k((() => [a.flat && "is-flat"])),
                d = m(!1),
                n = 6e4,
                p = 36e5,
                h = 24 * p,
                y = m(0),
                C = m(0),
                P = m(0),
                V = m(0),
                O = Math.floor(11 * Math.random()),
                S = new Date(Date.now() + 864e5 * O).getTime(),
                Z = setInterval((() => {
                    const e = (new Date).getTime(),
                        l = S - e;
                    V.value = Math.floor(l / h), P.value = Math.floor(l % h / p), C.value = Math.floor(l % p / n), y.value = Math.floor(l % n / 1e3), l < 0 && clearInterval(Z)
                }), 0),
                {
                    t: z
                } = u();
            return (e, l) => {
                const n = r,
                    u = s,
                    m = t;
                return c(), g(b, null, [x("div", {
                    class: j(["nft-card", o.value])
                }, [x("div", Xe, [x("div", {
                    class: j(["img-start", [a.content.whiteBg && "w-back"]])
                }, [x("div", Je, [x("img", {
                    src: a.content.image,
                    alt: a.content.name,
                    class: j(["img-data", [a.content.roundBg && "w-round"]]),
                    width: "600"
                }, null, 10, el)])], 2), x("div", ll, [l[6] || (l[6] = x("i", {
                    class: "rem-80 text-danger"
                }, null, -1)), x("span", {
                    style: N((a.content.soldout || a.content.comingSoon) && "color:gray;")
                }, _(a.content.soldout ? "Sold out" : a.content.comingSoon ? "Coming soon" : w(z)("exh.available")), 5)]), x("a", {
                    onClick: l[0] || (l[0] = e => d.value = !0),
                    class: "details"
                }, l[7] || (l[7] = [x("i", {
                    class: "rem-70 fas fa-basket-shopping"
                }, null, -1)]))]), x("div", al, [x("a", {
                    onClick: l[1] || (l[1] = e => d.value = !0)
                }, [v(n, {
                    picture: "/images/opz/opz.png",
                    style: {
                        border: "1px solid var(--card-border-color)",
                        "border-radius": "100%"
                    }
                })]), x("a", {
                    onClick: l[2] || (l[2] = e => d.value = !0)
                }, [v(u, {
                    tag: "h3",
                    size: 6,
                    weight: "semi"
                }, {
                    default: f((() => [B(_(a.content.name), 1)])),
                    _: 1
                })])]), x("div", tl, [x("div", sl, [x("span", rl, _(w(z)("exh.price")) + ":", 1), x("span", il, [B(_(a.content.price) + " ", 1), l[8] || (l[8] = x("p", {
                    class: "ml-1 bid-item"
                }, "USDT", -1))]), x("span", ol, [v(m, {
                    color: "primary",
                    raised: "",
                    onClick: l[3] || (l[3] = e => d.value = !0)
                }, {
                    default: f((() => [B(_(a.content.soldout ? "Sold out" : a.content.comingSoon ? "Coming soon" : w(z)("exh.buy")), 1)])),
                    _: 1
                })])])])], 2), v(Ye, {
                    item: e.content,
                    modelValue: d.value,
                    "onUpdate:modelValue": l[4] || (l[4] = e => d.value = e),
                    btn: !0,
                    onSuccessPurchase: l[5] || (l[5] = e => i("successPurchase"))
                }, null, 8, ["item", "modelValue"])], 64)
            }
        }
    }), [
        ["__scopeId", "data-v-279a786b"]
    ]),
    nl = {
        class: "py-5"
    },
    ul = {
        class: "grid-inner"
    },
    ml = J(d({
        __name: "ShopCardGrid",
        props: {
            items: {
                default: () => []
            },
            pulled: {
                type: Boolean,
                default: !1
            },
            sideGrid: {
                type: Boolean,
                default: !1
            }
        },
        emits: ["successPurchase"],
        setup(e, {
            emit: l
        }) {
            const a = l,
                t = e;
            u(), ee("OPZ Shop", "Buy secure crypto hardware wallets powered by OPZ-NFC. Advanced protection for managing digital assets safely.");
            const s = m(1),
                r = m(12),
                i = k((() => [t.sideGrid && "is-side-grid"])),
                o = k((() => [t.sideGrid ? "is-3" : "is-2"]));
            return (e, l) => {
                const d = dl;
                return c(), g("div", nl, [x("div", {
                    class: j(["nft-grid", i.value])
                }, [T(e.$slots, "title", {}, void 0, !0), x("div", ul, [v(U, {
                    name: "list",
                    tag: "div",
                    class: "columns is-multiline b-columns-half-tablet-p b-columns-third-tablet-l"
                }, {
                    default: f((() => [(c(!0), g(b, null, y(t.items.slice(s.value * r.value - r.value, r.value * s.value), ((e, t) => (c(), g("div", {
                        key: t,
                        class: j(["column", o.value])
                    }, [v(d, {
                        onSuccessPurchase: l[0] || (l[0] = e => {
                            a("successPurchase")
                        }),
                        content: e,
                        flat: ""
                    }, null, 8, ["content"])], 2)))), 128))])),
                    _: 1
                })])], 2), v(w(le), {
                    currentPage: s.value,
                    "onUpdate:currentPage": l[1] || (l[1] = e => s.value = e),
                    "page-size": r.value,
                    "onUpdate:pageSize": l[2] || (l[2] = e => r.value = e),
                    class: "mt-5",
                    background: "",
                    "page-sizes": [12, 25, 50, 100],
                    "hide-on-single-page": "",
                    layout: "sizes, prev, pager, next, jumper",
                    total: t.items.length
                }, null, 8, ["currentPage", "page-size", "total"])])
            }
        }
    }), [
        ["__scopeId", "data-v-58079c14"]
    ]),
    pl = [{
        id: 4,
        name: "OPZ-NFC Micro Wallet Tag",
        image: "/images/nfc-b.png",
        description: "Introducing the OPZ-NFC Micro Wallet Tag, the world’s smallest hardware wallet solution. Measuring just 5mm by 5mm, this ultra-compact wallet is compatible with the OPZ Wallet and built to protect your assets in a portable form factor. Designed for reliability, it operates in a working temperature range of -25℃ to +75℃, offering a powerful storage solution in a wallet smaller than your fingertip.",
        price: 30,
        subtitle: "OPZ-NFC",
        slug: "opz-nfc-micro-wallet",
        shipping: "4-6 weeks",
        soldout: !1,
        isCard: !1,
        roundBg: !0,
        shippingPrice: 12,
        whiteBg: !1
    }, {
        id: 1,
        name: "OPZ-NFC Basic Card",
        image: "/images/illustrations/MPC-Card.png",
        description: "The OPZ-NFC Card securely stores MPC keys, allowing quick access to your OPZ wallet or dApps with a tap. ",
        price: 64,
        subtitle: "pga.nfc",
        isCard: !0,
        soldout: !1,
        slug: "opz-nfc-basic",
        shipping: "4-6 weeks",
        shippingPrice: 12
    }, {
        id: 2,
        name: "OPZ-NFC Steel Card",
        image: "/images/illustrations/MPC-Card-Black.png",
        description: "The OPZ-NFC Card securely stores MPC keys, allowing quick access to your OPZ wallet or dApps with a tap. ",
        price: 120,
        subtitle: "OPZ-NFC",
        isCard: !0,
        soldout: !0,
        slug: "opz-nfc-steel",
        shipping: "4-6 weeks",
        shippingPrice: 12
    }, {
        id: 3,
        name: "OPZ-NFC UltraResist Tag",
        image: "/images/nfc-trans.png",
        description: "The OPZ-NFC UltraResist Tag is the worlds strongest wallet storage solution compatible with the OPZ Wallet, designed to perform reliably in extreme conditions with a working temperature range of -45℃ to +240℃.",
        price: 52,
        subtitle: "OPZ-NFC",
        slug: "opz-nfc-ultaresist",
        shipping: "1-2 weeks",
        soldout: !1,
        shippingPrice: 12,
        comingSoon: !0,
        roundBg: !0
    }],
    cl = {
        class: "mt-6"
    },
    gl = {
        class: "flex-form is-relative z-1"
    },
    vl = {
        class: "flex items-center"
    },
    fl = {
        class: "columns mt-0"
    },
    hl = {
        class: "column is-12"
    },
    bl = {
        key: 0,
        class: "flex t-dapp mt-0 justify-between mb-3"
    },
    yl = {
        class: "flex"
    },
    Cl = {
        class: "title-white"
    },
    wl = {
        key: 1,
        id: "HistoryTable"
    },
    xl = {
        key: 0,
        class: "text-gray2"
    },
    _l = J(d({
        __name: "ShopFilterList",
        setup(e) {
            const l = P(),
                a = m(pl);
            m([{}]).value = [];
            const t = m("");
            m("All"), m("All");
            const r = k((() => a.value.filter((e => !t.value || e.name.toLowerCase().includes(t.value.toLowerCase()))))),
                i = n({
                    allOrders: []
                }),
                o = m(!0),
                {
                    Api: d
                } = V(),
                p = () => {
                    d.getShopOrders().then((({
                        data: e
                    }) => {
                        500 == e.code || 0 == e.code && (i.allOrders = e.data), o.value = !1
                    }))
                },
                b = () => {
                    p()
                },
                {
                    t: y
                } = u();
            return q((() => {
                l.isLoggedIn && p()
            })), (e, a) => {
                var d, n;
                const u = s,
                    m = te,
                    p = ae,
                    j = ml,
                    P = F("loading");
                return c(), g("div", null, [x("form", cl, [x("div", gl, [x("div", null, [x("div", vl, [v(u, {
                    tag: "h1",
                    size: 3,
                    weight: "bold",
                    narrow: ""
                }, {
                    default: f((() => a[1] || (a[1] = [x("span", null, "Shop", -1)]))),
                    _: 1
                })])]), v(p, {
                    icon: "feather:search",
                    expanded: ""
                }, {
                    default: f((() => [v(m, {
                        modelValue: t.value,
                        "onUpdate:modelValue": a[0] || (a[0] = e => t.value = e),
                        placeholder: "Search..."
                    }, null, 8, ["modelValue"])])),
                    _: 1
                })])]), x("div", fl, [x("div", hl, [v(j, {
                    items: r.value,
                    onSuccessPurchase: b,
                    "side-grid": ""
                }, null, 8, ["items"])])]), w(l).isLoggedIn && (null == (d = i.allOrders) ? void 0 : d.length) > 0 ? (c(), g("div", bl, [x("div", yl, [a[2] || (a[2] = x("div", {
                    class: "block-title"
                }, null, -1)), x("div", Cl, _(w(y)("wall.order-history")), 1)])])) : h("", !0), w(l).isLoggedIn && (null == (n = i.allOrders) ? void 0 : n.length) > 0 ? (c(), g("div", wl, [I((c(), C(w(oe), {
                    data: i.allOrders,
                    "table-layout": "fixed",
                    style: {
                        width: "100%"
                    },
                    "class-name": "ordersTable shopTable",
                    "max-height": "266",
                    "element-loading-background": "rgba(0, 0, 0, 0.3)",
                    "element-loading-text": w(y)("pga.loading"),
                    "element-loading-spinner": w(se),
                    "element-loading-svg-view-box": "-10, -10, 50, 50"
                }, {
                    default: f((() => [v(w(ie), {
                        label: w(y)("wall.order-time"),
                        width: "140",
                        "class-name": "timeColumn",
                        prop: "dateTime"
                    }, {
                        default: f((e => [B(_(w(re)(e.row.dateTime).format("D MMM HH:mm:ss")), 1)])),
                        _: 1
                    }, 8, ["label"]), v(w(ie), {
                        prop: "item",
                        label: w(y)("pga.product"),
                        width: "160"
                    }, null, 8, ["label"]), v(w(ie), {
                        align: "right",
                        prop: "quantity",
                        label: w(y)("pga.quantity")
                    }, {
                        default: f((e => [B(_(w(y)("pga.qty").replace(":orderUnit", e.row.quantity)), 1)])),
                        _: 1
                    }, 8, ["label"]), v(w(ie), {
                        align: "right",
                        width: "120",
                        label: w(y)("pga.total-amount")
                    }, {
                        default: f((e => [B(_(e.row.costOPZ) + " ", 1), a[3] || (a[3] = x("span", {
                            class: "text-gray2"
                        }, _("OPZ"), -1))])),
                        _: 1
                    }, 8, ["label"]), v(w(ie), {
                        label: w(y)("wall.status"),
                        align: "right",
                        width: "200"
                    }, {
                        default: f((e => [B(_(2 == e.row.status ? w(y)("hiss.completed") : 3 == e.row.status ? w(y)("exh.canceled") : 1 == e.row.status ? "Shipped" : "Payed") + " ", 1), 0 == e.row.status ? (c(), g("span", xl, _("(Pending shipment)"))) : h("", !0)])),
                        _: 1
                    }, 8, ["label"])])),
                    _: 1
                }, 8, ["data", "element-loading-text", "element-loading-spinner"])), [
                    [P, o.value]
                ])])) : h("", !0)])
            }
        }
    }), [
        ["__scopeId", "data-v-54dd9896"]
    ]),
    jl = {
        class: "container"
    },
    Pl = d({
        __name: "shop-list",
        setup: t => (t, s) => {
            const r = de,
                i = _l,
                o = a,
                d = l;
            return c(), g(b, null, [v(r), x("div", null, [v(o, {
                color: "grey",
                overflown: ""
            }, {
                default: f((() => [x("div", jl, [v(i)])])),
                _: 1
            }), v(d, {
                content: w(e),
                color: "dark",
                cta: !1
            }, null, 8, ["content"])])], 64)
        }
    });
export {
    Pl as
    default
};