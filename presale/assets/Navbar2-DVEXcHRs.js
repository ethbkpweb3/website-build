import "./index-Dwv4qbXN.js";
import {g as e, b as a, m as s, dm as l, Y as t, K as n, G as i, o, n as r, w as d, l as c, t as u, X as p, j as m, P as v, cB as g, v as h, s as f, dn as b, dq as y, r as w, h as x, cC as k, cD as _, dg as A, p as D, u as C, dA as I, dp as S, a as T, bc as P, q as B, y as L, i as j, bw as z, ck as O, dh as V, dj as M, I as U, d6 as F, dz as E, eM as W, B as R} from "./index-jdACH0Rc.js";
import {A as H, a as q, _ as Z} from "./AppPop-C6dVPDH2.js";
import {_ as N} from "./VPlaceload-jGgmcTFZ.js";
import {F as $} from "./browser-B3Bvmjnq.js";
import {E as G} from "./index-DtPnfIe2.js";
import {_ as K} from "./_plugin-vue_export-helper-BCo6x5W8.js";
import {_ as J} from "./Button-BbTMX0Dh.js";
import {_ as Y} from "./AvatarSimple-CfXnZ0K8.js";
import {_ as X} from "./user-qMNVzsWD.js";
import {a as Q, _ as ee} from "./sett-Dbwu6PJ1.js";
import {a as ae} from "./avatarSettings-Daanxsoo.js";
import {j as se} from "./vue3-avataaars-C_k_hIh4.js";
import {a as le, E as te} from "./index-cRGdv3RN.js";
import {_ as ne} from "./ButtonGR-BF9zAU5B.js";
import {_ as ie, a as oe} from "./google-play-0W6tGWt8.js";
import {E as re} from "./index-C8W9xb4z.js";
import {E as de} from "./index-DBFvTDaE.js";
import {_ as ce} from "./logo-DqlCWKKL.js";
import {E as ue, a as pe} from "./index-DWTvrBdo.js";
import {E as me} from "./index-Citk0ABi.js";
import {E as ve} from "./index-D4R9Vjdp.js";
const ge = e("panels", ( () => {
    const e = a("active-panel", "none");
    return {
        active: e,
        setActive: function(a) {
            e.value = a
        },
        close: function() {
            e.value = "none"
        }
    }
}
))
  , he = "/images/svg/bell.svg";
function fe(e) {
    const a = new Date(e);
    return `${["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][a.getMonth()]} ${a.getDate()}, ${a.getFullYear()}`
}
const be = {
    class: "notify-box"
}
  , ye = {
    class: "notify-header"
}
  , we = {
    class: "notify-header-content"
}
  , xe = {
    class: "notify-head-txt"
}
  , ke = {
    class: "notify-head-link"
}
  , _e = {
    href: "/announcements",
    target: "_blank"
}
  , Ae = {
    class: "notify-body"
}
  , De = {
    class: "notify-item"
}
  , Ce = {
    class: "notify-circle"
}
  , Ie = {
    class: "notify-link"
}
  , Se = {
    class: "notify-item-header mb-2"
}
  , Te = {
    class: "notify-date mb-1"
}
  , Pe = {
    class: "notify-item-body"
}
  , Be = ["onClick"]
  , Le = {
    class: "notify-item-header"
}
  , je = {
    class: "notify-date"
}
  , ze = {
    class: "notify-item-body"
}
  , Oe = K(s({
    __name: "AnnounceBar",
    props: {
        ismobile: {
            type: Boolean,
            default: !1
        }
    },
    setup(e) {
        const {Api: a} = l()
          , {t: s} = t()
          , b = n({
            allAnnouncement: []
        })
          , y = e
          , w = i()
          , x = () => {
            if (0 != b.allAnnouncement.length)
                return;
            const e = new $;
            e.append("pageNo", "1"),
            e.append("pageSize", "10"),
            a.getAnnouncement(e).then((e => {
                const a = e.data;
                if (0 == a.code) {
                    const e = a.data.content.sort(( (e, a) => new Date(a.createTime) - new Date(e.createTime)));
                    b.allAnnouncement = e
                }
            }
            ))
        }
        ;
        return (e, a) => {
            const l = N;
            return o(),
            r(p(G), {
                placement: y.ismobile ? "top" : "bottom",
                trigger: "click",
                "popper-class": "popFee lang-scroll",
                "show-after": 150,
                persistent: !1,
                width: 439,
                height: 539,
                onShow: x
            }, {
                reference: d(( () => a[0] || (a[0] = [c("span", {
                    class: "toolbar-link right-panel-trigger cursor-pointer"
                }, [c("img", {
                    src: he,
                    alt: ""
                })], -1)]))),
                default: d(( () => [c("div", be, [c("div", ye, [c("div", we, [a[1] || (a[1] = c("img", {
                    class: "notify-head-icon",
                    width: "18",
                    src: he,
                    alt: ""
                }, null, -1)), c("span", xe, u(p(s)("pga.notifications")), 1)]), c("div", ke, [c("a", _e, u(p(s)("pga.view-more")), 1)])]), c("div", Ae, [0 == b.allAnnouncement ? (o(),
                m(v, {
                    key: 0
                }, g([{}, {}], (e => c("div", De, [c("div", Ce, [h(l, {
                    width: "100%",
                    height: "100%"
                })]), c("div", Ie, [c("div", Se, [h(l, {
                    width: "100%",
                    height: "18px"
                })]), c("div", Te, [h(l, {
                    width: "30%",
                    height: "16px"
                })]), c("div", Pe, [h(l, {
                    width: "90%",
                    height: "16px"
                })])])]))), 64)) : f("", !0), (o(!0),
                m(v, null, g(b.allAnnouncement, ( (e, s) => (o(),
                m("div", {
                    key: s,
                    class: "notify-item"
                }, [a[2] || (a[2] = c("span", {
                    class: "notify-circle"
                }, null, -1)), c("a", {
                    onClick: a => {
                        return s = e.type,
                        void ((l = e.url) ? window.open(l) : w.push({
                            name: "announcements",
                            params: {
                                tp: s
                            }
                        }));
                        var s, l
                    }
                    ,
                    class: "notify-link"
                }, [c("span", Le, u(e.title.substring(0, 51) + (e.title.length > 51 ? "..." : "")), 1), c("span", je, u(p(fe)(e.createTime)), 1), c("p", ze, u(e.content.substring(0, 57) + (e.content.length > 57 ? "..." : "")), 1)], 8, Be)])))), 128))])])])),
                _: 1
            }, 8, ["placement"])
        }
    }
}), [["__scopeId", "data-v-eb701854"]])
  , Ve = {
    class: "toolbar"
}
  , Me = s({
    __name: "Toolbar",
    setup: e => (l(),
    b(),
    y(),
    t(),
    ge(),
    n({
        allAnnouncement: []
    }),
    (e, a) => (o(),
    m("div", Ve, [h(H), h(q), h(Oe), w(e.$slots, "default")])))
})
  , Ue = ["href"]
  , Fe = {
    class: "has-naver"
}
  , Ee = {
    class: "has-naver"
}
  , We = K(s({
    __name: "NavbarDropdown",
    props: {
        label: {},
        boxed: {
            type: Boolean,
            default: !1
        },
        active: {
            type: Boolean
        },
        rightend: {
            type: Boolean
        },
        url: {
            default: ""
        },
        isRawUrl: {
            type: Boolean,
            default: !1
        }
    },
    setup(e) {
        const a = e
          , s = x(( () => [a.boxed && "is-boxed", a.rightend && "is-rightend"]));
        return (e, l) => {
            const t = k("RouterLink")
              , n = _("preload-link");
            return o(),
            m("div", {
                class: D(["navbar-item has-dropdown is-hoverable", e.active && "active"])
            }, [a.isRawUrl ? (o(),
            m("a", {
                key: 0,
                href: a.url,
                target: "_blank",
                class: "navbar-link is-arrowless has-naver",
                tabindex: "0"
            }, [c("span", Fe, u(a.label), 1), l[0] || (l[0] = c("i", {
                class: "iconify",
                "data-icon": "feather:chevron-down"
            }, null, -1))], 8, Ue)) : A((o(),
            r(t, {
                key: 1,
                to: a.url,
                class: "navbar-link is-arrowless has-naver",
                tabindex: "0"
            }, {
                default: d(( () => [c("span", Ee, u(a.label), 1), l[1] || (l[1] = c("i", {
                    class: "iconify",
                    "data-icon": "feather:chevron-down"
                }, null, -1))])),
                _: 1
            }, 8, ["to"])), [[n]]), c("div", {
                class: D(["navbar-dropdown", s.value])
            }, [w(e.$slots, "default", {}, void 0, !0)], 2)], 2)
        }
    }
}), [["__scopeId", "data-v-c472cf0d"]])
  , Re = K(s({
    __name: "Hamburger",
    props: {
        style: {
            default: 1
        },
        open: {
            type: Boolean,
            default: !1
        }
    },
    setup(e) {
        const a = e
          , s = x(( () => [a.style && `style-${a.style}`, a.open && "open"]));
        return (e, a) => (o(),
        m("button", {
            class: D(["hamburger", s.value])
        }, a[0] || (a[0] = [c("span", null, null, -1)]), 2))
    }
}), [["__scopeId", "data-v-db7d0afb"]])
  , He = "/images/svg/airadar3.svg"
  , qe = {
    "data-level": "0",
    "data-type": "1",
    class: "user-dropdown"
}
  , Ze = {
    class: "user-dropdown-header"
}
  , Ne = {
    class: "user-dropdown-icon"
}
  , $e = {
    class: "user-dropdown-title"
}
  , Ge = {
    class: "user-dropdown-id"
}
  , Ke = {
    class: "last-item"
}
  , Je = s({
    __name: "UserProfileDropdown",
    setup(e) {
        const a = ae()
          , {Api: s} = l()
          , {logoutUser: n, userData: m, token: v} = C()
          , g = I()
          , f = S()
          , b = i()
          , y = T()
          , {t: w} = t()
          , x = () => {
            s.logout().then(( () => {
                n(),
                g.update({
                    user_id: "",
                    user_hash: ""
                }),
                y.success("Log Out"),
                f.meta.requiresAuth && b.push({
                    name: "index"
                })
            }
            )).catch((e => {
                console.log(e)
            }
            ))
        }
          , _ = () => {}
        ;
        return (e, s) => {
            const l = Y
              , t = k("RouterLink")
              , n = J;
            return o(),
            r(p(G), {
                placement: "bottom",
                trigger: "click",
                effect: "dark",
                "popper-class": "user-dropdown-pop",
                "show-after": 150,
                persistent: !1,
                onShow: _,
                width: 240
            }, {
                reference: d(( () => s[0] || (s[0] = [c("div", {
                    class: "avatar-menu"
                }, [c("img", {
                    src: X,
                    alt: "",
                    width: "21"
                })], -1)]))),
                default: d(( () => {
                    var e, i, v;
                    return [c("div", qe, [c("div", Ze, [c("div", Ne, [p(a).enabledData ? (o(),
                    r(p(se), P({
                        key: 0
                    }, {
                        skinColor: p(a).skincolorsData,
                        clothes: p(a).clothesData,
                        eyes: p(a).eyesData,
                        accessories: p(a).accessoriesData,
                        facialHair: p(a).facialhairData,
                        eyebrows: p(a).eyebrowsData,
                        clothesColor: p(a).clothescolorData,
                        mouth: p(a).mouthsData,
                        top: p(a).topsData,
                        topColor: p(a).hatandshirtcolorsData,
                        hairColor: p(a).haircolorsData,
                        graphicShirt: p(a).graphicshirtData,
                        circleColor: p(a).circleData,
                        isCircle: p(a).circleenabledData
                    }, {
                        style: {
                            height: "33px"
                        }
                    }), null, 16)) : (o(),
                    r(l, {
                        key: 1,
                        picture: "/images/svg/user2.svg",
                        size: "small"
                    }))]), c("span", $e, u((v = p(m).realName,
                    (v && (v.trim().indexOf(" ") >= 0 ? v.trim().substring(0, v.trim().indexOf(" ")) : v.trim())) ?? p(m).email ? p(m).email.substring(0, 20) + (p(m).email.length > 20 ? "..." : "") : (null == (e = p(m)) ? void 0 : e.mobile) ?? "")), 1), c("span", Ge, "UID:" + u(null == (i = p(m)) ? void 0 : i.id), 1)]), h(t, {
                        to: {
                            name: "user-center-dashboard-ai"
                        },
                        "data-content": "Dashboard"
                    }, {
                        default: d(( () => [s[1] || (s[1] = c("img", {
                            class: "user-dropdown-item",
                            src: He,
                            alt: ""
                        }, null, -1)), c("span", null, u(p(w)("ctm2.dashboard")), 1)])),
                        _: 1
                    }), h(t, {
                        to: {
                            name: "user-center-dashboard-settings"
                        },
                        "data-content": "Settings"
                    }, {
                        default: d(( () => [s[2] || (s[2] = c("img", {
                            class: "user-dropdown-item",
                            src: "/images/icons/menus/security-acc.svg",
                            alt: ""
                        }, null, -1)), c("span", null, u(p(w)("pga.account") + " " + p(w)("pga.and") + " " + p(w)("dash.security")), 1)])),
                        _: 1
                    }), h(t, {
                        to: {
                            name: "user-center-dashboard-settings-api"
                        },
                        "data-content": "Api"
                    }, {
                        default: d(( () => [s[3] || (s[3] = c("img", {
                            class: "user-dropdown-item",
                            src: Q,
                            alt: ""
                        }, null, -1)), c("span", null, u(p(w)("pga.api")), 1)])),
                        _: 1
                    }), h(t, {
                        to: {
                            name: "referral"
                        },
                        "data-content": "Affiliate"
                    }, {
                        default: d(( () => [s[4] || (s[4] = c("img", {
                            class: "user-dropdown-item",
                            src: "/images/icons/menus/referral.svg",
                            alt: ""
                        }, null, -1)), c("span", null, u(p(w)("pga.referrals")), 1)])),
                        _: 1
                    }), h(t, {
                        to: {
                            name: "staking"
                        },
                        "data-content": "Staking"
                    }, {
                        default: d(( () => [s[5] || (s[5] = c("img", {
                            class: "user-dropdown-item",
                            src: Z,
                            alt: ""
                        }, null, -1)), c("span", null, u(p(w)("stk.staking")), 1)])),
                        _: 1
                    }), c("a", Ke, [h(n, {
                        class: "logout-button",
                        "icon-left": "feather:log-out",
                        onClick: x,
                        raised: "",
                        color: "primary",
                        fullwidth: "",
                        elevated: ""
                    }, {
                        default: d(( () => [B(u(p(w)("auth.log-out")), 1)])),
                        _: 1
                    })])])]
                }
                )),
                _: 1
            })
        }
    }
})
  , Ye = K(s({
    props: {
        open: {
            type: [Boolean, String],
            default: void 0
        },
        collapseId: {
            type: String,
            default: void 0
        }
    },
    emits: ["update:open"],
    setup(e, {slots: a, emit: s}) {
        var l, t;
        const n = S()
          , i = L(!0 === e.open)
          , o = L(!1)
          , r = x({
            get: () => void 0 === e.collapseId ? i.value : e.collapseId === e.open,
            set: a => {
                void 0 === e.collapseId && (i.value = a),
                e.collapseId === e.open ? s("update:open") : s("update:open", e.collapseId)
            }
        });
        function d() {
            r.value = !r.value
        }
        const c = null == (l = a.header) ? void 0 : l.call(a)
          , u = (null == (t = a.default) ? void 0 : t.call(a)) ?? []
          , p = n.name
          , m = u.map((e => {
            var a, s;
            return (null == (s = null == (a = e.props) ? void 0 : a.to) ? void 0 : s.name) && p === e.props.to.name && (o.value = !0),
            j("li", {}, e)
        }
        ));
        return () => {
            const e = j("a", {
                tabindex: 0,
                class: "parent-link",
                onClick: e => {
                    e.preventDefault(),
                    d()
                }
                ,
                onKeydown(e) {
                    "Space" === e.code && (e.preventDefault(),
                    e.stopPropagation(),
                    d())
                }
            }, c)
              , a = j("div", {
                class: "collapse-wrap"
            }, e)
              , s = o.value || r.value ? j("ul", {}, m) : void 0;
            return j("li", {
                class: ["collapse-links has-children", (o.value || r.value) && "active"]
            }, [a, j(z, {
                name: "collapse-links-transition",
                mode: "out-in",
                class: "collapse-content"
            }, {
                default: () => s
            })])
        }
    }
}), [["__scopeId", "data-v-6852e46b"]])
  , Xe = "/images/svg/aitrade.svg"
  , Qe = "/images/landing/chart2.svg"
  , ea = "/images/svg/ai-dash.svg"
  , aa = "/images/coinsnew/btc.png"
  , sa = "/images/coinsnew/eth.png"
  , la = "/images/svg/aichat.svg"
  , ta = "/images/landing/referral.svg"
  , na = {
    class: "flex flex-row align-center mt-1 translateTop"
}
  , ia = {
    class: "imgParent"
}
  , oa = ["src"]
  , ra = {
    style: {
        display: "flex",
        "flex-direction": "column",
        "text-align": "left",
        "line-height": "16px",
        width: "60px",
        "margin-top": "4px",
        "margin-right": "12px"
    }
}
  , da = {
    class: "text-gray4"
}
  , ca = K(s({
    __name: "SearchSelect",
    setup(e) {
        const {t: a} = t()
          , s = L("")
          , h = L(!1)
          , f = i()
          , b = n({
            coinList: []
        })
          , {Api: y} = l();
        return (e, l) => (o(),
        r(p(te), {
            modelValue: s.value,
            "onUpdate:modelValue": l[0] || (l[0] = e => s.value = e),
            class: "cstm",
            style: {
                "font-size": "10px !important"
            },
            persistent: !1,
            "popper-class": "coin-menu-search pop-dark",
            placeholder: p(a)("dash.search"),
            filterable: "",
            loading: h.value,
            onFocus: l[1] || (l[1] = e => {
                0 == b.coinList.length && (h.value = !0,
                y.getSymbol().then((e => {
                    b.coinList = e.data,
                    h.value = !1
                }
                )))
            }
            ),
            onChange: l[2] || (l[2] = e => {
                s.value && (f.push({
                    name: "trade-slug",
                    params: {
                        slug: s.value.replace("/", "-")
                    }
                }),
                s.value = "")
            }
            )
        }, {
            prefix: d(( () => l[3] || (l[3] = [c("i", {
                class: "fas fa-search",
                style: {
                    "font-size": "15px",
                    color: "#424242"
                }
            }, null, -1)]))),
            default: d(( () => [(o(!0),
            m(v, null, g(b.coinList, (e => (o(),
            r(p(le), {
                key: e.symbol,
                label: e.symbol,
                value: e.symbol
            }, {
                default: d(( () => {
                    var a;
                    return [c("div", na, [c("span", ia, [c("img", {
                        class: "imgSelect",
                        height: "27px",
                        width: "27px",
                        src: "/images/icons/coin/" + (null == (a = e.symbol.split("/")[0]) ? void 0 : a.toLowerCase()) + ".svg",
                        alt: ""
                    }, null, 8, oa)]), c("div", ra, [c("span", da, u(e.symbol), 1), l[4] || (l[4] = c("span", {
                        class: "text-regular"
                    }, "Spot", -1))]), c("span", {
                        class: D(e.chg > 0 ? "up text-green" : "down text-red"),
                        style: {
                            float: "right",
                            "font-size": "13px",
                            "margin-left": "auto",
                            "font-family": "DINPRO-Regular",
                            "margin-top": "4px"
                        }
                    }, u(e.chg > 0 ? "+" + (100 * e.chg).toFixed(2) + "%" : (100 * e.chg).toFixed(2) + "%"), 3)])]
                }
                )),
                _: 2
            }, 1032, ["label", "value"])))), 128))])),
            _: 1
        }, 8, ["modelValue", "placeholder", "loading"]))
    }
}), [["__scopeId", "data-v-52742a2a"]])
  , ua = {
    class: "qr-code"
}
  , pa = {
    class: "flex justify-around text-center flex-row flex-wrap mt-1"
}
  , ma = {
    class: "flex-col flex items-center justify-around"
}
  , va = {
    class: "flex flex-col items-center"
}
  , ga = K(s({
    __name: "AiPopup",
    props: {
        modelValue: Boolean
    },
    emits: ["update:modelValue"],
    setup(e, {emit: a}) {
        const s = e
          , l = a
          , t = x({
            get: () => s.modelValue,
            set: e => l("update:modelValue", e)
        })
          , n = e => {
            e ? window.open("https://play.google.com/store/apps/details?id=com.opz.dev") : window.open("https://testflight.apple.com/join/Oxsd9WMO")
        }
          , i = () => {
            window.open("https://www.app.opz.com")
        }
        ;
        return (e, a) => {
            const s = ne;
            return o(),
            r(p(re), {
                modelValue: t.value,
                "onUpdate:modelValue": a[2] || (a[2] = e => t.value = e),
                "lock-scroll": "",
                class: "dialogw cdetail-small download",
                "append-to-body": "",
                "destroy-on-close": "",
                "align-center": "",
                draggable: ""
            }, {
                header: d(( () => a[3] || (a[3] = [c("div", {
                    class: "flex text-gray4 head-title items-center"
                }, [c("i", {
                    class: "fas fa-cicle"
                }), B(" AI Meets Crypto ")], -1)]))),
                default: d(( () => [c("div", ua, [a[7] || (a[7] = c("p", {
                    class: "qr-code-title"
                }, "Experience our Secure Wallet Powered by AI:", -1)), a[8] || (a[8] = c("p", {
                    class: "qr-code-text"
                }, " You can either download our app for the full mobile experience or access our features directly through the web: ", -1)), c("div", pa, [c("div", ma, [c("div", {
                    onClick: a[0] || (a[0] = e => n()),
                    class: "cursor-pointer mb-3"
                }, a[4] || (a[4] = [c("img", {
                    src: ie,
                    alt: "Download OPZ Beta",
                    width: "144"
                }, null, -1)])), c("div", {
                    onClick: a[1] || (a[1] = e => n(!0)),
                    class: "cursor-pointer"
                }, a[5] || (a[5] = [c("img", {
                    src: oe,
                    alt: "Download on Google Play",
                    width: "144"
                }, null, -1)]))])]), a[9] || (a[9] = c("div", {
                    class: "divider mt-4 mb-4",
                    style: {
                        "border-top": "1px solid #ccc",
                        opacity: "0.2",
                        width: "100%"
                    }
                }, null, -1)), c("div", va, [h(s, {
                    size: "medium",
                    onClick: i,
                    class: "web-button mt-2",
                    style: {
                        width: "144px"
                    }
                }, {
                    default: d(( () => a[6] || (a[6] = [B("Visit Web App")]))),
                    _: 1
                })])])])),
                _: 1
            }, 8, ["modelValue"])
        }
    }
}), [["__scopeId", "data-v-eed00ab8"]])
  , ha = "/images/opz/opz.png"
  , fa = {
    id: "seed-sale",
    class: "flex flex-col items-center justify-center token-detail-card relative mb-8 pb-0 pt-0 px-2 space-y-8 bg-card-light"
}
  , ba = {
    id: "",
    class: "flex flex-col items-center justify-normal z-20 space-y-4",
    style: {
        "z-index": "11111"
    }
}
  , ya = {
    key: 1
}
  , wa = {
    key: 2,
    style: {
        width: "100%"
    }
}
  , xa = {
    class: "form-control-wrap flex justify-between flex-col mt-1"
}
  , ka = {
    key: 3
}
  , _a = {
    class: "flex justify-center text-center mx-auto items-center mt-3",
    style: {
        position: "relative",
        "z-index": "11111111"
    }
}
  , Aa = K(s({
    __name: "WaitingListAI",
    props: {
        btn: {
            type: Boolean,
            default: !1
        },
        modelValue: {
            type: Boolean,
            default: !0
        }
    },
    emits: ["update:modelValue", "close"],
    setup(e, {emit: a}) {
        const s = C()
          , {t: n} = t()
          , {Api: g} = l();
        L();
        const y = a
          , w = e
          , k = x({
            get: () => w.modelValue,
            set: e => y("update:modelValue", e)
        })
          , _ = T()
          , A = L("")
          , D = L("")
          , I = () => {
            A.value = "",
            D.value = "",
            y("update:modelValue", !1)
        }
          , P = i();
        S();
        const j = () => {
            E(),
            y("update:modelValue", !0);
            const e = `${window.location.pathname}`;
            window.history.replaceState({}, "", e)
        }
          , z = L(s.isLoggedIn ? "https://www.opz.com/?ref=" + s.userData.id : n("inx.please-login"))
          , O = L(!1)
          , V = L(!1)
          , M = L(!0)
          , U = L(!s.isLoggedIn)
          , F = () => {
            s.isLoggedIn && g.setAiWait().then(( ({data: e}) => {
                V.value = !0
            }
            ))
        }
          , E = () => {
            s.isLoggedIn ? (g.getAiWAit().then(( ({data: e}) => {
                0 == e.code && !0 === e.data && (V.value = !0),
                M.value = !1
            }
            )),
            O.value = !0,
            U.value = !1) : (O.value = !1,
            U.value = !1)
        }
          , W = e => {
            e ? window.open("https://play.google.com/store/apps/details?id=com.opz.dev") : window.open("https://testflight.apple.com/join/Oxsd9WMO")
        }
        ;
        return b(),
        (e, a) => {
            const l = ne
              , t = N;
            return o(),
            m(v, null, [w.btn ? (o(),
            r(l, {
                key: 0,
                class: "btn-buy-card",
                onClick: a[0] || (a[0] = e => j())
            }, {
                default: d(( () => a[8] || (a[8] = [B("Join Waitinglist")]))),
                _: 1
            })) : f("", !0), h(p(re), {
                modelValue: k.value,
                "onUpdate:modelValue": a[6] || (a[6] = e => k.value = e),
                "append-to": "#app",
                class: "dialogw cdetail buy-card-pop heads2 rass",
                "destroy-on-close": "",
                onClose: I,
                onOpen: a[7] || (a[7] = e => j())
            }, {
                header: d(( () => a[9] || (a[9] = []))),
                default: d(( () => [c("div", null, [c("div", fa, [a[19] || (a[19] = c("div", {
                    class: "pattern left"
                }, null, -1)), c("div", ba, [a[16] || (a[16] = c("p", {
                    class: "mt-3 head-title"
                }, "Feature at Full Capacity", -1)), a[17] || (a[17] = c("p", {
                    class: "mt-3 title-nw text-regular mb-4",
                    style: {
                        "font-family": "DINPRO-Regular"
                    }
                }, " Our Automated AI Trading feature is at full capacity. New spots will be available soon. To secure your spot, join our exclusive waitlist on a first-come, first-served basis. ", -1)), O.value ? (o(),
                r(l, {
                    key: 0,
                    disabled: M.value || V.value,
                    onClick: F,
                    size: "small"
                }, {
                    default: d(( () => [B(u(M.value ? "..." : V.value ? p(n)("pga.joined") : p(n)("pga.join-now")), 1)])),
                    _: 1
                }, 8, ["disabled"])) : f("", !0), a[18] || (a[18] = c("img", {
                    alt: "OPZ LOGO",
                    draggable: "false",
                    loading: "lazy",
                    width: "74",
                    height: "74",
                    class: "max-w-full h-auto my-4",
                    src: ha,
                    style: {
                        color: "transparent",
                        "box-shadow": "0 0 0.5rem rgba(115, 3, 252, 0.3)"
                    }
                }, null, -1)), !0 === U.value ? (o(),
                m("div", ya, [h(t, {
                    width: "330px",
                    height: "120px"
                })])) : p(s).isLoggedIn && O.value ? (o(),
                m("div", wa, [c("div", xa, [a[11] || (a[11] = c("p", {
                    class: "help mb-2"
                }, "Share your referral link to boost your position on the waitlist.", -1)), h(p(de), {
                    modelValue: z.value,
                    "onUpdate:modelValue": a[2] || (a[2] = e => z.value = e),
                    class: "addressInput text-medium btnChain mb-3",
                    placeholder: z.value,
                    readonly: !0
                }, {
                    prefix: d(( () => a[10] || (a[10] = [c("i", {
                        class: "fas fa-link"
                    }, null, -1)]))),
                    suffix: d(( () => [c("i", {
                        class: "copy-link fas fa-copy",
                        onClick: a[1] || (a[1] = e => (e => {
                            try {
                                navigator.clipboard.writeText(e),
                                _.success(n("depwi.copied-successfully"))
                            } catch (a) {
                                _.error(n("depwi.error"))
                            }
                        }
                        )(z.value))
                    })])),
                    _: 1
                }, 8, ["modelValue", "placeholder"]), h(l, {
                    onClick: a[3] || (a[3] = e => p(P).push({
                        name: "referral"
                    })),
                    size: "small"
                }, {
                    default: d(( () => [B(u(p(n)("pga.referrals")), 1)])),
                    _: 1
                })])])) : (o(),
                m("div", ka, [a[14] || (a[14] = c("p", {
                    class: "title-nw mt-2",
                    style: {
                        color: "white"
                    }
                }, "JOIN THE WAITINGLIST", -1)), c("div", _a, [c("div", {
                    onClick: a[4] || (a[4] = e => W()),
                    class: "cursor-pointer mr-2"
                }, a[12] || (a[12] = [c("img", {
                    src: ie,
                    alt: "Download OPZ Beta",
                    width: "120"
                }, null, -1)])), c("div", {
                    onClick: a[5] || (a[5] = e => W(!0)),
                    class: "cursor-pointer"
                }, a[13] || (a[13] = [c("img", {
                    src: oe,
                    alt: "Download on Google Play",
                    width: "120"
                }, null, -1)]))]), a[15] || (a[15] = c("p", {
                    class: "mt-2 title-nw"
                }, [B(" Download the app, create your MPC wallet,"), c("br"), B(" and then you can join the waiting list. ")], -1))]))]), a[20] || (a[20] = c("div", {
                    class: "pattern right"
                }, null, -1))])])])),
                _: 1
            }, 8, ["modelValue"])], 64)
        }
    }
}), [["__scopeId", "data-v-6051c256"]])
  , Da = {
    class: "mobile-subsidebar"
}
  , Ca = {
    class: "inner"
}
  , Ia = {
    class: "submenu",
    "data-simplebar": ""
}
  , Sa = {
    key: 0
}
  , Ta = {
    class: "has-naver mr-1"
}
  , Pa = ["alt"]
  , Ba = ["alt"]
  , La = ["alt"]
  , ja = {
    key: 2,
    class: "flex items-center"
}
  , za = {
    class: "flex items-center"
}
  , Oa = {
    class: "flex items-center"
}
  , Va = ["alt"]
  , Ma = ["alt"]
  , Ua = ["alt"]
  , Fa = ["alt"]
  , Ea = {
    key: 4
}
  , Wa = {
    class: "flex justify-center items-center"
}
  , Ra = {
    key: 5
}
  , Ha = {
    class: "has-naver mr-1"
}
  , qa = {
    key: 6
}
  , Za = {
    class: "has-naver mr-1"
}
  , Na = {
    target: "_blank",
    href: "https://whitepaper.opz.com/"
}
  , $a = {
    class: "has-naver mr-1"
}
  , Ga = K(s({
    __name: "DashboardsMobileSubsidebar",
    emits: ["closeDash"],
    setup(e, {emit: a}) {
        const s = L(!1)
          , {t: l} = t()
          , n = L(!1)
          , i = S()
          , g = b()
          , y = C()
          , w = L(!1)
          , x = a
          , I = () => {
            g.onChange(!1, 7),
            x("closeDash")
        }
          , T = () => {
            g.onChange(!0, 7),
            x("closeDash")
        }
        ;
        return (e, a) => {
            const t = J
              , b = k("RouterLink")
              , x = Ye
              , C = _("preload-link");
            return o(),
            m(v, null, [c("div", Da, [c("div", Ca, [c("ul", Ia, [p(y).isLoggedIn ? f("", !0) : (o(),
            m("li", Sa, [h(t, {
                to: "/auth",
                color: "primary",
                fullwidth: "",
                bold: "",
                outlined: ""
            }, {
                default: d(( () => [B(u(p(l)("auth.log-in")), 1)])),
                _: 1
            }), h(t, {
                to: "/auth",
                color: "light",
                fullwidth: "",
                bold: "",
                outlined: "",
                class: "my-2"
            }, {
                default: d(( () => [B(u(p(l)("auth.register")), 1)])),
                _: 1
            })])), c("li", null, [A((o(),
            r(b, {
                to: {
                    name: "index"
                },
                tabindex: "0"
            }, {
                default: d(( () => [c("span", Ta, u(p(l)("pga.home")), 1)])),
                _: 1
            })), [[C]])]), c("li", null, [A((o(),
            r(b, {
                to: {
                    name: "presale"
                },
                tabindex: "0"
            }, {
                default: d(( () => a[3] || (a[3] = [c("span", {
                    class: "has-naver mr-1"
                }, "Presale", -1)]))),
                _: 1
            })), [[C]])]), h(x, null, {
                header: d(( () => [B(u(p(l)("sett.trade")) + " ", 1), a[4] || (a[4] = c("i", {
                    "aria-hidden": "true",
                    class: "iconify",
                    "data-icon": "feather:chevron-right"
                }, null, -1))])),
                default: d(( () => {
                    var e, a;
                    return [h(b, {
                        to: {
                            name: "trade-slug",
                            params: {
                                slug: "BTC-USDT"
                            }
                        },
                        class: "is-submenu",
                        onClick: T,
                        style: O(!(null == (e = p(g)) ? void 0 : e.isTradeAiMode) && {
                            color: "var(--light-text)"
                        })
                    }, {
                        default: d(( () => [c("img", {
                            src: Xe,
                            width: "14",
                            alt: p(l)("exh.spot")
                        }, null, 8, Pa), c("span", null, u(p(l)("exh.spot")) + " | AI", 1)])),
                        _: 1
                    }, 8, ["style"]), h(b, {
                        to: {
                            name: "trade-slug",
                            params: {
                                slug: "BTC-USDT"
                            }
                        },
                        class: "is-submenu",
                        onClick: I,
                        style: O((null == (a = p(g)) ? void 0 : a.isTradeAiMode) && {
                            color: "var(--light-text)"
                        })
                    }, {
                        default: d(( () => [c("img", {
                            src: Qe,
                            width: "14",
                            alt: p(l)("exh.spot")
                        }, null, 8, Ba), c("span", null, u(p(l)("exh.spot")) + " | Manual", 1)])),
                        _: 1
                    }, 8, ["style"])]
                }
                )),
                _: 1
            }), a[18] || (a[18] = c("li", {
                class: "divider"
            }, null, -1)), h(x, null, {
                header: d(( () => a[5] || (a[5] = [B(" OPZ-AI "), c("i", {
                    "aria-hidden": "true",
                    class: "iconify",
                    "data-icon": "feather:chevron-right"
                }, null, -1)]))),
                default: d(( () => [a[9] || (a[9] = c("a", {
                    href: "https://app.opz.com",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    class: "is-submenu no-active"
                }, [c("img", {
                    src: ea,
                    width: "14",
                    alt: "AI Dashboard"
                }), c("span", null, [B(" AI Dashboard "), c("i", {
                    class: "fas fa-external-link ml-1",
                    style: {
                        "font-size": "11px"
                    }
                })])], -1)), h(b, {
                    to: {
                        name: "trade-slug",
                        params: {
                            slug: "BTC-USDT"
                        },
                        query: {
                            btc: "true"
                        }
                    },
                    onClick: T,
                    class: "is-submenu no-active"
                }, {
                    default: d(( () => [a[6] || (a[6] = c("img", {
                        src: aa,
                        width: "14",
                        alt: "BTC-GPT"
                    }, null, -1)), c("span", {
                        class: D(p(i).fullPath.startsWith("/ai/BTC") && "active-menu")
                    }, "BTC/USDT", 2)])),
                    _: 1
                }), h(b, {
                    to: {
                        name: "trade-slug",
                        params: {
                            slug: "ETH-USDT"
                        },
                        query: {
                            btc: "true"
                        }
                    },
                    onClick: T,
                    class: "is-submenu no-active"
                }, {
                    default: d(( () => [a[7] || (a[7] = c("img", {
                        src: sa,
                        width: "14"
                    }, null, -1)), c("span", {
                        class: D(p(i).fullPath.startsWith("/ai/ETH") && "active-menu")
                    }, "ETH/USDT", 2)])),
                    _: 1
                }), h(b, {
                    to: {
                        name: "user-center-dashboard-ai"
                    },
                    class: "is-submenu no-active"
                }, {
                    default: d(( () => [a[8] || (a[8] = c("img", {
                        src: He,
                        width: "14",
                        alt: "TradeScan AI"
                    }, null, -1)), c("span", {
                        class: D(p(i).fullPath.startsWith("/ai/ETH") && "active-menu")
                    }, "TradeScan AI", 2)])),
                    _: 1
                })])),
                _: 1
            }), n.value ? (o(),
            r(x, {
                key: 1
            }, {
                header: d(( () => a[10] || (a[10] = [B(u("Apps") + " "), c("i", {
                    "aria-hidden": "true",
                    class: "iconify",
                    "data-icon": "feather:chevron-right"
                }, null, -1)]))),
                default: d(( () => [h(b, {
                    to: {
                        name: "apps"
                    },
                    class: "is-submenu"
                }, {
                    default: d(( () => a[11] || (a[11] = [c("img", {
                        src: "/images/icons/menus/apps.svg",
                        width: "14",
                        alt: "Apps Dashboard"
                    }, null, -1), c("span", null, u("Apps Dashboard"), -1)]))),
                    _: 1
                }), h(b, {
                    to: {
                        name: "apps-charity"
                    },
                    class: "is-submenu"
                }, {
                    default: d(( () => [c("img", {
                        src: "/images/icons/menus/globe.svg",
                        width: "14",
                        alt: p(l)("dash.charity")
                    }, null, 8, La), c("span", null, u(p(l)("dash.charity")), 1)])),
                    _: 1
                })])),
                _: 1
            })) : f("", !0), p(y).isLoggedIn ? (o(),
            m("li", ja, [c("a", {
                onClick: a[0] || (a[0] = e => s.value = !0),
                class: "is-submenu",
                style: {
                    display: "flex",
                    "align-items": "center",
                    "font-size": "0.95rem"
                }
            }, a[12] || (a[12] = [c("img", {
                src: la,
                class: "mr-2",
                width: "14",
                alt: "OPZ-AI ChatBot"
            }, null, -1), c("span", null, u("OPZ-AI ChatBot"), -1)]))])) : f("", !0), a[19] || (a[19] = c("li", {
                class: "divider"
            }, null, -1)), c("li", za, [h(b, {
                to: {
                    name: "staking"
                },
                class: "is-submenu",
                style: {
                    display: "flex",
                    "align-items": "center",
                    "font-size": "0.95rem"
                }
            }, {
                default: d(( () => [a[13] || (a[13] = c("img", {
                    src: Z,
                    class: "mr-2",
                    width: "14",
                    alt: "Staking"
                }, null, -1)), c("span", null, u(p(l)("stk.staking")), 1)])),
                _: 1
            })]), c("li", Oa, [h(b, {
                to: {
                    name: "referral"
                },
                class: "is-submenu",
                style: {
                    display: "flex",
                    "align-items": "center",
                    "font-size": "0.95rem"
                }
            }, {
                default: d(( () => [c("img", {
                    src: ta,
                    class: "mr-2",
                    width: "14",
                    alt: p(l)("pga.referral")
                }, null, 8, Va), c("span", null, u(p(l)("pga.referral")), 1)])),
                _: 1
            })]), p(y).isLoggedIn ? (o(),
            r(x, {
                key: 3
            }, {
                header: d(( () => [B(u(p(l)("wall.orders")) + " ", 1), a[14] || (a[14] = c("i", {
                    "aria-hidden": "true",
                    class: "iconify",
                    "data-icon": "feather:chevron-right"
                }, null, -1))])),
                default: d(( () => [h(b, {
                    to: {
                        name: "user-center-dashboard-orders",
                        query: {
                            page: "open"
                        }
                    },
                    class: "is-submenu no-active"
                }, {
                    default: d(( () => [c("img", {
                        src: "/images/icons/menus/coins.svg",
                        width: "14",
                        alt: p(l)("wall.open-orders")
                    }, null, 8, Ma), c("span", {
                        class: D("/user-center/dashboard/orders?page=open" == p(i).fullPath && "active-menu")
                    }, u(p(l)("wall.open-orders")), 3)])),
                    _: 1
                }), h(b, {
                    to: {
                        name: "user-center-dashboard-orders",
                        query: {
                            page: "order"
                        }
                    },
                    class: "is-submenu no-active"
                }, {
                    default: d(( () => [c("img", {
                        src: "/images/landing/list.svg",
                        width: "14",
                        alt: p(l)("wall.order-history")
                    }, null, 8, Ua), c("span", {
                        class: D("/user-center/dashboard/orders?page=order" == p(i).fullPath && "active-menu")
                    }, u(p(l)("wall.order-history")), 3)])),
                    _: 1
                }), h(b, {
                    to: {
                        name: "user-center-dashboard-orders",
                        query: {
                            page: "trade"
                        }
                    },
                    class: "is-submenu no-active"
                }, {
                    default: d(( () => [c("img", {
                        src: "/images/landing/history2.svg",
                        width: "14",
                        alt: p(l)("wall.trade-history")
                    }, null, 8, Fa), c("span", {
                        class: D("/user-center/dashboard/orders?page=trade" == p(i).fullPath && "active-menu")
                    }, u(p(l)("wall.trade-history")), 3)])),
                    _: 1
                })])),
                _: 1
            })) : f("", !0), a[20] || (a[20] = c("li", {
                class: "divider"
            }, null, -1)), n.value ? (o(),
            m("li", Ea, [c("div", Wa, [h(ca)])])) : f("", !0), c("li", null, [A((o(),
            r(b, {
                to: {
                    name: "shop"
                },
                tabindex: "0"
            }, {
                default: d(( () => a[15] || (a[15] = [c("span", {
                    class: "has-naver mr-1"
                }, u("Shop"), -1)]))),
                _: 1
            })), [[C]])]), c("li", null, [A((o(),
            r(b, {
                to: {
                    name: "apps"
                },
                tabindex: "0"
            }, {
                default: d(( () => a[16] || (a[16] = [c("span", {
                    class: "has-naver mr-1"
                }, u("Apps"), -1)]))),
                _: 1
            })), [[C]])]), n.value ? f("", !0) : (o(),
            m("li", Ra, [A((o(),
            r(b, {
                to: {
                    name: "about-us"
                },
                tabindex: "0"
            }, {
                default: d(( () => [c("span", Ha, u(p(l)("pga.about-us")), 1)])),
                _: 1
            })), [[C]])])), n.value ? f("", !0) : (o(),
            m("li", qa, [A((o(),
            r(b, {
                to: {
                    name: "help-desk-center"
                },
                tabindex: "0"
            }, {
                default: d(( () => [c("span", Za, u(p(l)("pga.help-center")), 1)])),
                _: 1
            })), [[C]])])), a[21] || (a[21] = c("li", {
                class: "divider"
            }, null, -1)), c("li", null, [A((o(),
            r(b, {
                to: {
                    name: "trade-slug",
                    params: {
                        slug: "BTC-USDT"
                    }
                },
                tabindex: "0"
            }, {
                default: d(( () => a[17] || (a[17] = [c("span", {
                    class: "has-naver mr-1"
                }, "Spot Trading", -1)]))),
                _: 1
            })), [[C]])]), c("li", null, [c("a", Na, [c("span", $a, u(p(l)("exh.white-paper")), 1)])])])])]), h(Aa, {
                modelValue: w.value,
                "onUpdate:modelValue": a[1] || (a[1] = e => w.value = e),
                btn: !1
            }, null, 8, ["modelValue"]), h(ga, {
                modelValue: s.value,
                "onUpdate:modelValue": a[2] || (a[2] = e => s.value = e)
            }, null, 8, ["modelValue"])], 64)
        }
    }
}), [["__scopeId", "data-v-5824c76e"]])
  , Ka = {
    class: "mobile-subsidebar"
}
  , Ja = {
    class: "inner"
}
  , Ya = {
    class: "sidebar-title"
}
  , Xa = {
    class: "submenu"
}
  , Qa = {
    class: "has-naver mr-1"
}
  , es = {
    class: "has-naver mr-1"
}
  , as = {
    class: "has-naver mr-1"
}
  , ss = {
    class: "has-naver mr-1"
}
  , ls = s({
    __name: "LayoutsMobileSubsidebar",
    setup(e) {
        const {t: a} = t();
        return (e, s) => {
            const l = k("RouterLink")
              , t = _("preload-link");
            return o(),
            m("div", Ka, [c("div", Ja, [c("div", Ya, [A((o(),
            r(l, {
                to: {
                    name: "user-center-dashboard"
                },
                tabindex: "0"
            }, {
                default: d(( () => [c("h3", null, u(p(a)("pga.my-dashboard")), 1)])),
                _: 1
            })), [[t]])]), c("ul", Xa, [c("li", null, [A((o(),
            r(l, {
                to: {
                    name: "user-center-dashboard-wallet"
                },
                tabindex: "0"
            }, {
                default: d(( () => [c("span", Qa, u(p(a)("dash.wallet")), 1)])),
                _: 1
            })), [[t]])]), c("li", null, [A((o(),
            r(l, {
                to: {
                    name: "user-center-dashboard-orders"
                },
                tabindex: "0"
            }, {
                default: d(( () => [c("span", es, u(p(a)("dash.orders")), 1)])),
                _: 1
            })), [[t]])]), c("li", null, [A((o(),
            r(l, {
                to: {
                    name: "user-center-dashboard-history"
                },
                tabindex: "0"
            }, {
                default: d(( () => [c("span", as, u(p(a)("hiss.history")), 1)])),
                _: 1
            })), [[t]])]), s[0] || (s[0] = c("li", {
                class: "divider"
            }, null, -1)), c("li", null, [A((o(),
            r(l, {
                to: {
                    name: "user-center-dashboard-settings-api"
                },
                tabindex: "0"
            }, {
                default: d(( () => [c("span", ss, u(p(a)("sett.api-management")), 1)])),
                _: 1
            })), [[t]])])])])])
        }
    }
})
  , ts = {
    class: "inner"
}
  , ns = {
    class: "icon-side-menu"
}
  , is = {
    class: "bottom-icon-side-menu"
}
  , os = s({
    __name: "MobileSidebar",
    props: {
        isOpen: {
            type: Boolean
        }
    },
    emits: ["toggle"],
    setup(e, {emit: a}) {
        const s = a
          , l = e;
        return (e, a) => (o(),
        m(v, null, [c("div", {
            class: D([[l.isOpen && "is-active"], "mobile-main-sidebar"])
        }, [c("div", ts, [c("ul", ns, [w(e.$slots, "links", {}, ( () => [a[2] || (a[2] = c("li", null, [c("a", {
            "aria-label": "Back to homepage",
            href: "/"
        }, [c("i", {
            "aria-hidden": "true",
            class: "iconify",
            "data-icon": "feather:activity"
        })])], -1))]))]), c("ul", is, [w(e.$slots, "bottom-links")])])], 2), l.isOpen ? (o(),
        m("div", {
            key: 0,
            class: "mobile-overlay",
            tabindex: "0",
            onKeydown: a[0] || (a[0] = V(M((e => s("toggle")), ["prevent"]), ["space"])),
            onClick: a[1] || (a[1] = e => s("toggle"))
        }, null, 32)) : f("", !0)], 64))
    }
})
  , rs = {
    key: 0,
    class: "btn-ai-select"
}
  , ds = {
    class: "ai-img ai-img-l"
}
  , cs = ["src", "alt"]
  , us = {
    key: 1,
    style: {
        width: "33px",
        height: "34px"
    }
}
  , ps = {
    class: "ai-t2"
}
  , ms = {
    "data-level": "0",
    "data-type": "1",
    class: "ai-dropdown"
}
  , vs = {
    class: "ai-dropdown-header"
}
  , gs = {
    class: "ai-dropdown-name"
}
  , hs = {
    key: 0,
    class: "ai-dropdown-subscribers"
}
  , fs = {
    key: 0,
    "data-level": "0",
    "data-type": "1",
    class: "ai-dropdown"
}
  , bs = {
    class: "ai-box items-center"
}
  , ys = {
    class: "ai-option"
}
  , ws = ["value", "onChange"]
  , xs = {
    class: "ai-option-inner"
}
  , ks = ["src", "alt"]
  , _s = ["onClick"]
  , As = ["onClick"]
  , Ds = {
    key: 0,
    class: "ml-2 ai-subs"
}
  , Cs = {
    class: "last-item flex"
}
  , Is = K(s({
    __name: "AiSelect2",
    props: {
        alwaysLarge: Boolean
    },
    setup(e) {
        ae();
        const {Api: a} = l()
          , {logoutUser: s, userData: y, token: w, isLoggedIn: x} = C();
        I(),
        S(),
        i();
        const k = T()
          , {t: _} = t()
          , P = n({
            allAi: []
        })
          , j = e
          , z = {
            enabled: !0,
            id: 0,
            logo: "/images/opz/Logo-Only.png",
            alt: "OPZ-AI",
            memberId: 0,
            name: "OPZ-AI",
            subscribers: 0,
            ts: 0,
            usageCount: 0
        }
          , O = L(!1)
          , V = b()
          , M = L(!0)
          , E = e => {
            if (M.value = !0,
            !O.value || e) {
                O.value = !0;
                const e = new FormData;
                e.append("pageNo", "1"),
                e.append("pageSize", "2" == $.value ? "20" : "10"),
                0 != V.selectedAiData.id && e.append("botId", V.selectedAiData.id.toString()),
                "2" == $.value && e.append("memberId", y.id.toString()),
                P.allAi = [],
                a.getAllAi(e).then((e => {
                    if (200 == e.status) {
                        const s = e.data;
                        if (0 == s.code && s.data) {
                            s.data.content.push(z);
                            const e = s.data.content;
                            if (0 != V.selectedAiData.id && -1 == e.findIndex((e => e.id == V.selectedAiData.id))) {
                                const s = new FormData;
                                s.append("botId", V.selectedAiData.id.toString());
                                let l = !1;
                                a.itemAi(s).then((a => {
                                    if (200 == a.status) {
                                        const s = a.data;
                                        0 == s.code && 200 == s.errCode && s.data && (e.push(s.data),
                                        V.updateSelectedAiHistory(s.data),
                                        l = !0)
                                    }
                                    l || (V.selectedAiData = z,
                                    W.value = 0)
                                }
                                ))
                            }
                            P.allAi = R(e)
                        }
                    }
                    M.value = !1
                }
                ))
            } else
                M.value = !1
        }
          , W = L(0)
          , R = e => {
            let a = null;
            const s = e.filter((e => e.id !== W.value || (a = e,
            !1)));
            return s.sort(( (e, a) => a.subscribers - e.subscribers)),
            a ? [a, ...s] : s
        }
          , H = (e, s) => {
            if (!x)
                return V.selectedAiData = z,
                void k.error(_("inx.please-login"));
            W.value = e;
            const l = new FormData;
            l.append("botId", e.toString()),
            a.subscribeAi(l).then((a => {
                if (200 == a.status) {
                    const l = a.data;
                    if (0 == l.code && 200 == l.errCode) {
                        const a = P.allAi.find((a => a.id == e));
                        V.selectedAiData = a,
                        V.updateSelectedAiHistory(a),
                        Z(s, !1),
                        Z(e, !0)
                    }
                }
            }
            ))
        }
          , q = e => {
            $.value = e,
            "0" == e || "2" == e ? E(!0) : P.allAi = R(V.selectedAiHistoryData)
        }
          , Z = (e, a) => {
            const s = P.allAi.find((a => a.id === e));
            s ? a ? s.subscribers += 1 : s.subscribers -= 1 : console.error("AI with the specified ID not found"),
            P.allAi = [...P.allAi]
        }
        ;
        U(( () => {
            var e;
            (null == (e = null == V ? void 0 : V.selectedAiData) ? void 0 : e.id) || (V.selectedAiData = z,
            W.value = 0),
            V.selectedAi ? 0 == V.selectedAiData.id ? W.value = 0 : (W.value = V.selectedAiData.id,
            P.allAi.push(z)) : (V.selectedAiData = z,
            W.value = z.id)
        }
        )),
        L(!1);
        const $ = L("0");
        return (e, a) => {
            const s = N
              , l = ne;
            return o(),
            r(p(G), {
                placement: "bottom",
                trigger: "click",
                effect: "dark",
                "popper-class": "ai-dropdown-pop",
                "show-after": 150,
                persistent: !1,
                onShow: E,
                onHide: a[1] || (a[1] = e => {
                    M.value = !0,
                    $.value = "0"
                }
                ),
                width: 240
            }, {
                reference: d(( () => {
                    var e, s, l, t;
                    return [(null == (s = null == (e = p(V)) ? void 0 : e.selectedAiData) ? void 0 : s.name) ? (o(),
                    m("div", rs, [c("div", ds, [(null == (t = null == (l = p(V)) ? void 0 : l.selectedAiData) ? void 0 : t.logo) ? (o(),
                    m("img", {
                        key: 0,
                        src: p(V).selectedAiData.logo,
                        alt: p(V).selectedAiData.alt,
                        style: {
                            width: "34px",
                            height: "33px",
                            "border-radius": "50%",
                            "max-height": "100%",
                            padding: "3px",
                            "padding-top": "4px",
                            "border-top": "2px solid rgb(19, 19, 19)",
                            "border-bottom": "2px solid rgb(19, 19, 19)",
                            "border-left": "2px solid rgb(255, 255, 255)",
                            "border-right": "2px solid rgb(255, 255, 255)",
                            background: "rgb(19, 19, 19)"
                        }
                    }, null, 8, cs)) : (o(),
                    m("div", us))]), c("div", {
                        class: D(["ai-txt", j.alwaysLarge && "anjas"])
                    }, [c("div", ps, u(p(V).selectedAiData.name), 1)], 2), a[2] || (a[2] = c("svg", {
                        viewBox: "0 0 24 24",
                        color: "text",
                        width: "24px",
                        xmlns: "http://www.w3.org/2000/svg",
                        class: "ai-txt-r"
                    }, [c("path", {
                        d: "M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z"
                    })], -1))])) : f("", !0)]
                }
                )),
                default: d(( () => [c("div", ms, [c("div", vs, [c("span", gs, [h(p(pe), {
                    "default-active": $.value,
                    class: "ai-menu",
                    style: {
                        "min-width": "200px"
                    },
                    mode: "horizontal",
                    "text-color": "white",
                    onSelect: q
                }, {
                    default: d(( () => [h(p(ue), {
                        index: "0",
                        class: "ai-menu-item",
                        disabled: M.value
                    }, {
                        default: d(( () => [h(p(me), {
                            effect: "light",
                            placement: "top",
                            content: p(_)("ctm.popular")
                        }, {
                            default: d(( () => a[3] || (a[3] = [c("span", null, [c("i", {
                                class: "fas fa-fire"
                            })], -1)]))),
                            _: 1
                        }, 8, ["content"])])),
                        _: 1
                    }, 8, ["disabled"]), h(p(ue), {
                        index: "1",
                        class: "ai-menu-item",
                        disabled: M.value
                    }, {
                        default: d(( () => [h(p(me), {
                            effect: "light",
                            placement: "top",
                            content: p(_)("hiss.history")
                        }, {
                            default: d(( () => a[4] || (a[4] = [c("i", {
                                class: "fas fa-clock"
                            }, null, -1)]))),
                            _: 1
                        }, 8, ["content"])])),
                        _: 1
                    }, 8, ["disabled"]), h(p(ue), {
                        index: "2",
                        class: "ai-menu-item",
                        disabled: !p(x) || M.value
                    }, {
                        default: d(( () => [h(p(me), {
                            effect: "light",
                            placement: "top",
                            content: "My AI"
                        }, {
                            default: d(( () => a[5] || (a[5] = [c("i", {
                                class: "fas fa-user"
                            }, null, -1)]))),
                            _: 1
                        })])),
                        _: 1
                    }, 8, ["disabled"])])),
                    _: 1
                }, 8, ["default-active"])]), "1" != $.value ? (o(),
                m("span", hs, u("Subscribers"))) : f("", !0)]), M.value ? (o(),
                m("div", fs, [h(s, {
                    class: "mt-1",
                    width: "240px",
                    height: "210px",
                    style: {
                        "border-radius": "3px"
                    }
                })])) : (o(),
                r(p(ve), {
                    key: 1,
                    height: "210px",
                    always: "",
                    class: "mt-1"
                }, {
                    default: d(( () => [c("div", null, [(o(!0),
                    m(v, null, g(P.allAi, ( (e, s) => (o(),
                    m("div", {
                        key: s,
                        class: "item-ai"
                    }, [c("div", bs, [c("div", ys, [A(c("input", {
                        "onUpdate:modelValue": a[0] || (a[0] = e => W.value = e),
                        type: "radio",
                        name: "language_selection",
                        value: e.id,
                        onChange: () => H(e.id, p(V).selectedAiData.id)
                    }, null, 40, ws), [[F, W.value]]), c("div", xs, [c("img", {
                        src: e.logo,
                        alt: e.logo
                    }, null, 8, ks), a[6] || (a[6] = c("div", {
                        class: "indicator"
                    }, [c("i", {
                        "aria-hidden": "true",
                        class: "iconify",
                        "data-icon": "feather:check"
                    })], -1))])]), c("div", {
                        class: "ml-2 text-hover",
                        onClick: a => H(e.id, p(V).selectedAiData.id)
                    }, u(e.name), 9, _s), c("div", {
                        class: "ml-2",
                        onClick: a => {
                            return s = e.id,
                            void window.open("https://www.app.opz.com/agents/" + s + "?coin=bitcoin");
                            var s
                        }
                    }, a[7] || (a[7] = [c("i", {
                        class: "help fas fa-external-link"
                    }, null, -1)]), 8, As)]), 0 != e.id && "1" != $.value ? (o(),
                    m("div", Ds, u(e.subscribers), 1)) : f("", !0)])))), 128))])])),
                    _: 1
                })), c("div", Cs, [h(l, {
                    size: "small",
                    href: "https://www.app.opz.com/agents-all",
                    style: {
                        "padding-right": "3px"
                    },
                    class: "ai-button",
                    blank: ""
                }, {
                    default: d(( () => [B(u(p(_)("inx.create")), 1)])),
                    _: 1
                }), h(l, {
                    size: "small",
                    href: "https://www.app.opz.com/agents-all",
                    class: "ai-button",
                    style: {
                        "padding-left": "3px"
                    },
                    blank: ""
                }, {
                    default: d(( () => [B(u(p(_)("inx.more")), 1)])),
                    _: 1
                })])])])),
                _: 1
            })
        }
    }
}), [["__scopeId", "data-v-30d29ebc"]])
  , Ss = {
    key: 0
}
  , Ts = {
    key: 1
}
  , Ps = {
    key: 0
}
  , Bs = {
    class: "navbar-brand"
}
  , Ls = {
    class: "flex"
}
  , js = {
    key: 0,
    class: "mobuserdrop"
}
  , zs = {
    class: "navbar-start",
    style: {
        "padding-inline-start": "12px"
    }
}
  , Os = {
    class: "has-naver mr-1"
}
  , Vs = {
    class: "nav-item-inner",
    key: "1"
}
  , Ms = {
    class: "nav-item-title"
}
  , Us = {
    class: "nav-item-inner"
}
  , Fs = {
    class: "nav-item-title"
}
  , Es = {
    class: "nav-item-content"
}
  , Ws = {
    class: "nav-item-desc"
}
  , Rs = {
    class: "has-naver mr-1"
}
  , Hs = {
    class: "nav-item-inner"
}
  , qs = {
    class: "nav-item-title"
}
  , Zs = {
    class: "nav-item-inner"
}
  , Ns = {
    class: "nav-item-title"
}
  , $s = {
    class: "has-naver mr-1"
}
  , Gs = {
    class: "has-naver mr-1"
}
  , Ks = {
    class: "has-naver mr-1"
}
  , Js = {
    key: 5,
    class: "coinSearchNav"
}
  , Ys = {
    class: "navbar-end"
}
  , Xs = {
    class: "navbar-item"
}
  , Qs = {
    key: 0,
    class: "login-register toolbar"
}
  , el = K(s({
    __name: "Navbar2",
    props: {
        inverted: {
            type: Boolean,
            default: !1
        },
        full: {
            type: Boolean,
            default: !1
        },
        solid: {
            type: Boolean,
            default: !1
        },
        notfixed: {
            type: Boolean,
            default: !1
        },
        dashboard: {
            type: Boolean,
            default: !1
        }
    },
    setup(e) {
        const {t: a} = t()
          , s = C()
          , l = b()
          , v = e
          , g = L(!1)
          , y = L("")
          , w = S()
          , I = i()
          , T = L(null)
          , {y: P} = E()
          , j = x(( () => P.value > 60))
          , O = (e="") => {
            y.value = e
        }
          , U = () => {
            l.onChange(!1, 7)
        }
          , F = () => {
            l.onChange(!0, 7)
        }
        ;
        W(T, ( () => {
            O()
        }
        )),
        R(( () => w.fullPath), ( () => {
            g.value = !1,
            O()
        }
        ));
        const H = L(!1)
          , Z = L("dashboard")
          , N = L(!1)
          , $ = n({
            initial: {
                opacity: 0,
                y: 30
            },
            enter: {
                opacity: 1,
                y: 0,
                transition: {
                    type: "spring",
                    stiffness: 25,
                    damping: 10,
                    mass: 1,
                    delay: 0
                }
            }
        });
        R(( () => w.fullPath), ( () => {
            H.value = !1
        }
        ));
        const G = L(window.innerWidth <= 767);
        return (e, l) => {
            var t;
            const n = k("RouterLink")
              , i = os
              , b = ls
              , y = Ga
              , x = Je
              , C = Re
              , S = We
              , P = Me
              , L = _("preload-link")
              , E = _("motion");
            return o(),
            m("nav", {
                ref_key: "navbar",
                ref: T,
                class: D(["navbar is-transparent is-fixed-top is-fade", [j.value && "is-scrolled", g.value && "is-solid", v.inverted && "is-inverted", v.solid && "is-solid", v.notfixed && "is-notfixed", H.value && "is-mobopen", v.dashboard && "is-dash"]]),
                role: "navigation",
                "aria-label": "main navigation",
                onMouseleave: l[26] || (l[26] = () => O()),
                onFocusout: l[27] || (l[27] = () => O())
            }, [h(i, {
                "is-open": H.value,
                onToggle: l[6] || (l[6] = e => H.value = !H.value)
            }, {
                links: d(( () => [c("li", null, [c("div", {
                    class: D("/" === p(w).path.toString() && "is-active"),
                    tabindex: "0",
                    onKeydown: l[0] || (l[0] = V(M((e => p(I).push({
                        name: "index"
                    })), ["prevent"]), ["space"])),
                    onClick: l[1] || (l[1] = e => p(I).push({
                        name: "index"
                    }))
                }, l[28] || (l[28] = [c("span", {
                    class: "toolbar-link right-panel-trigger cursor-pointer"
                }, [c("img", {
                    src: "/images/svg/home.svg",
                    alt: "Home"
                })], -1)]), 34)]), p(s).isLoggedIn ? (o(),
                m("li", Ss, [c("div", {
                    class: D(p(w).path.toString().includes("user-center/dashboard/ai") && "is-active"),
                    tabindex: "0",
                    onKeydown: l[2] || (l[2] = V(M((e => p(I).push({
                        name: "user-center-dashboard-ai"
                    })), ["prevent"]), ["space"])),
                    onClick: l[3] || (l[3] = e => p(I).push({
                        name: "user-center-dashboard-ai"
                    }))
                }, l[29] || (l[29] = [c("span", {
                    class: "toolbar-link right-panel-trigger cursor-pointer"
                }, [c("img", {
                    src: He,
                    alt: "AI Radar"
                })], -1)]), 34)])) : f("", !0), p(s).isLoggedIn ? (o(),
                m("li", Ts, [c("div", {
                    class: D(p(w).path.toString().includes("user-center/dashboard/wallet") && "is-active"),
                    tabindex: "0",
                    onKeydown: l[4] || (l[4] = V(M((e => p(I).push({
                        name: "user-center-dashboard-wallet"
                    })), ["prevent"]), ["space"])),
                    onClick: l[5] || (l[5] = e => p(I).push({
                        name: "user-center-dashboard-wallet"
                    }))
                }, l[30] || (l[30] = [c("span", {
                    class: "toolbar-link right-panel-trigger cursor-pointer"
                }, [c("img", {
                    src: "/images/icons/menus/wallet.svg",
                    alt: "Wallet"
                })], -1)]), 34)])) : f("", !0)])),
                "bottom-links": d(( () => [c("li", null, [h(Oe, {
                    ismobile: !0
                })]), c("li", null, [h(q, {
                    ismobile: !0
                })]), p(s).isLoggedIn ? (o(),
                m("li", Ps, [h(n, {
                    to: {
                        name: "user-center-dashboard-settings"
                    },
                    "data-content": "Settings"
                }, {
                    default: d(( () => l[31] || (l[31] = [c("span", {
                        class: "toolbar-link right-panel-trigger cursor-pointer"
                    }, [c("img", {
                        src: ee,
                        alt: "Settings"
                    })], -1)]))),
                    _: 1
                })])) : f("", !0)])),
                _: 1
            }, 8, ["is-open"]), h(z, {
                name: "slide-x"
            }, {
                default: d(( () => [p(s).isLoggedIn && H.value && "layouts" === Z.value ? (o(),
                r(b, {
                    key: 0
                })) : H.value && "dashboard" === Z.value ? (o(),
                r(y, {
                    key: 1,
                    onCloseDash: l[7] || (l[7] = e => H.value = !1)
                })) : f("", !0)])),
                _: 1
            }), A((o(),
            m("div", {
                class: D(["container-nav", v.full && "container-max"])
            }, [c("div", Bs, [A((o(),
            r(n, {
                class: "navbar-item",
                to: "/"
            }, {
                default: d(( () => l[32] || (l[32] = [c("img", {
                    class: "navbar-logo",
                    src: ce,
                    alt: "logo",
                    width: "90",
                    height: "32"
                }, null, -1)]))),
                _: 1
            })), [[L]]), c("div", Ls, [c("div", {
                class: D(["aiuserdrop", p(s).isLoggedIn ? "pr-3" : "pr-0"])
            }, [h(Is, {
                ismobile: !0
            })], 2), p(s).isLoggedIn ? (o(),
            m("div", js, [h(x)])) : f("", !0), c("div", {
                class: "navbar-burger",
                onClick: l[8] || (l[8] = M((e => H.value = !H.value), ["prevent"])),
                onKeydown: l[9] || (l[9] = V(M((e => H.value = !H.value), ["prevent"]), ["space"]))
            }, [h(C, {
                open: H.value
            }, null, 8, ["open"])], 32)])]), c("div", {
                class: D(["navbar-menu b-centered-mobile b-centered-tablet-p", [g.value && "is-active"]])
            }, [c("div", zs, [N.value ? A((o(),
            r(n, {
                key: 0,
                to: {
                    name: "markets"
                },
                class: "navbar-item",
                tabindex: "0",
                onMouseover: l[10] || (l[10] = e => O()),
                onFocusin: l[11] || (l[11] = e => O())
            }, {
                default: d(( () => [c("span", Os, u(p(a)("inx.markets")), 1)])),
                _: 1
            })), [[L]]) : f("", !0), N.value ? (o(),
            r(S, {
                label: p(a)("pga.earn"),
                boxed: !0,
                key: "1",
                active: "/referral" == p(w).fullPath || "/nft/dashboard" == p(w).fullPath || "/staking" == p(w).fullPath
            }, {
                default: d(( () => [h(n, {
                    to: {
                        name: "staking"
                    },
                    class: "navbar-item flex nav-item-box"
                }, {
                    default: d(( () => [l[34] || (l[34] = c("img", {
                        src: "/images/icons/menus/grow.svg",
                        alt: "Earn income",
                        class: "nav-item-icon",
                        width: "28"
                    }, null, -1)), c("div", Vs, [c("p", Ms, u(p(a)("stk.staking")), 1), l[33] || (l[33] = c("div", {
                        class: "nav-item-content"
                    }, [c("p", {
                        class: "nav-item-desc"
                    }, "Earn income on your crypto")], -1))])])),
                    _: 1
                }), h(n, {
                    to: {
                        name: "referral"
                    },
                    class: "navbar-item nav-item-box"
                }, {
                    default: d(( () => [l[35] || (l[35] = c("img", {
                        src: ta,
                        alt: "Referral",
                        class: "nav-item-icon",
                        width: "28"
                    }, null, -1)), c("div", Us, [c("p", Fs, u(p(a)("pga.referral")), 1), c("div", Es, [c("p", Ws, u(p(a)("aff.referral-program")), 1)])])])),
                    _: 1
                })])),
                _: 1
            }, 8, ["label", "active"])) : f("", !0), A((o(),
            r(n, {
                to: {
                    name: "presale"
                },
                class: "navbar-item",
                tabindex: "0",
                onMouseover: l[12] || (l[12] = e => O()),
                onFocusin: l[13] || (l[13] = e => O())
            }, {
                default: d(( () => l[36] || (l[36] = [c("span", {
                    class: "has-naver mr-1"
                }, " Presale ", -1)]))),
                _: 1
            })), [[L]]), A((o(),
            r(n, {
                to: {
                    name: "staking"
                },
                class: "navbar-item",
                tabindex: "0",
                onMouseover: l[14] || (l[14] = e => O()),
                onFocusin: l[15] || (l[15] = e => O())
            }, {
                default: d(( () => [c("span", Rs, u(p(a)("stk.staking")), 1)])),
                _: 1
            })), [[L]]), h(S, {
                label: "OPZ-AI",
                url: "https://app.opz.com",
                boxed: !0,
                key: "1",
                active: p(w).fullPath.includes("/ai/"),
                isRawUrl: !0
            }, {
                default: d(( () => [l[40] || (l[40] = c("a", {
                    href: "https://app.opz.com",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    class: "navbar-item flex nav-item-box"
                }, [c("img", {
                    src: ea,
                    alt: "BTC",
                    class: "nav-item-icon",
                    width: "28"
                }), c("div", {
                    class: "nav-item-inner",
                    key: "1"
                }, [c("p", {
                    class: "nav-item-title"
                }, "AI Dashboard"), c("div", {
                    class: "nav-item-content"
                }, [c("p", {
                    class: "nav-item-desc"
                }, "APP.OPZ.COM")])])], -1)), l[41] || (l[41] = c("hr", {
                    class: "navbar-divider",
                    style: {
                        height: "1px !important"
                    }
                }, null, -1)), h(n, {
                    to: {
                        name: "trade-slug",
                        params: {
                            slug: "BTC-USDT"
                        },
                        query: {
                            btc: "true"
                        }
                    },
                    class: "navbar-item flex nav-item-box",
                    onClick: F
                }, {
                    default: d(( () => l[37] || (l[37] = [c("img", {
                        src: aa,
                        alt: "BTC",
                        class: "nav-item-icon",
                        width: "28"
                    }, null, -1), c("div", {
                        class: "nav-item-inner",
                        key: "1"
                    }, [c("p", {
                        class: "nav-item-title"
                    }, u("BTC/USDT")), c("div", {
                        class: "nav-item-content"
                    }, [c("p", {
                        class: "nav-item-desc"
                    }, "OPZ-AI")])], -1)]))),
                    _: 1
                }), h(n, {
                    to: {
                        name: "trade-slug",
                        params: {
                            slug: "ETH-USDT"
                        },
                        query: {
                            eth: "true"
                        }
                    },
                    class: "navbar-item flex nav-item-box",
                    onClick: F
                }, {
                    default: d(( () => l[38] || (l[38] = [c("img", {
                        src: sa,
                        alt: "Ethereum",
                        class: "nav-item-icon",
                        width: "28"
                    }, null, -1), c("div", {
                        class: "nav-item-inner",
                        key: "1"
                    }, [c("p", {
                        class: "nav-item-title"
                    }, u("ETH/USDT")), c("div", {
                        class: "nav-item-content"
                    }, [c("p", {
                        class: "nav-item-desc"
                    }, "OPZ-AI")])], -1)]))),
                    _: 1
                }), l[42] || (l[42] = c("hr", {
                    class: "navbar-divider",
                    style: {
                        height: "1px !important"
                    }
                }, null, -1)), h(n, {
                    to: {
                        name: "user-center-dashboard-ai"
                    },
                    class: "navbar-item flex nav-item-box",
                    disabled: ""
                }, {
                    default: d(( () => l[39] || (l[39] = [c("img", {
                        src: He,
                        alt: "TradeScan AI",
                        class: "nav-item-icon",
                        width: "28"
                    }, null, -1), c("div", {
                        class: "nav-item-inner",
                        key: "1"
                    }, [c("p", {
                        class: "nav-item-title"
                    }, u("TradeScan AI")), c("div", {
                        class: "nav-item-content"
                    }, [c("p", {
                        class: "nav-item-desc"
                    }, "AI-Powered Trade Analysis")])], -1)]))),
                    _: 1
                })])),
                _: 1
            }, 8, ["active"]), h(S, {
                label: p(a)("sett.trade"),
                boxed: !0,
                url: {
                    name: "trade-slug",
                    params: {
                        slug: "BTC-USDT"
                    }
                },
                key: "1",
                active: p(w).fullPath.includes("/trade/")
            }, {
                default: d(( () => [h(n, {
                    to: {
                        name: "trade-slug",
                        params: {
                            slug: "BTC-USDT"
                        }
                    },
                    onClick: F,
                    class: "navbar-item nav-item-box"
                }, {
                    default: d(( () => [l[44] || (l[44] = c("img", {
                        src: Xe,
                        alt: "Advanced Tools",
                        class: "nav-item-icon",
                        width: "28"
                    }, null, -1)), c("div", Hs, [c("p", qs, u(p(a)("exh.spot")) + " | AI ", 1), l[43] || (l[43] = c("div", {
                        class: "nav-item-content"
                    }, [c("p", {
                        class: "nav-item-desc"
                    }, "Buy & Sell with Advanced AI Tools")], -1))])])),
                    _: 1
                }), h(n, {
                    to: {
                        name: "trade-slug",
                        params: {
                            slug: "BTC-USDT"
                        }
                    },
                    class: "navbar-item nav-item-box",
                    onClick: U
                }, {
                    default: d(( () => [l[46] || (l[46] = c("img", {
                        src: Qe,
                        alt: "Advanced Tools",
                        class: "nav-item-icon",
                        width: "28"
                    }, null, -1)), c("div", Zs, [c("p", Ns, u(p(a)("exh.spot")) + " | Manual ", 1), l[45] || (l[45] = c("div", {
                        class: "nav-item-content"
                    }, [c("p", {
                        class: "nav-item-desc"
                    }, "Manual Trading Made")], -1))])])),
                    _: 1
                })])),
                _: 1
            }, 8, ["label", "active"]), A((o(),
            r(n, {
                to: {
                    name: "shop"
                },
                class: "navbar-item",
                tabindex: "0",
                onMouseover: l[16] || (l[16] = e => O()),
                onFocusin: l[17] || (l[17] = e => O())
            }, {
                default: d(( () => l[47] || (l[47] = [c("span", {
                    class: "has-naver mr-1"
                }, u("Shop"), -1)]))),
                _: 1
            })), [[L]]), A((o(),
            r(n, {
                to: {
                    name: "apps"
                },
                class: "navbar-item",
                tabindex: "0",
                onMouseover: l[18] || (l[18] = e => O()),
                onFocusin: l[19] || (l[19] = e => O())
            }, {
                default: d(( () => l[48] || (l[48] = [c("span", {
                    class: "has-naver mr-1"
                }, u("Apps"), -1)]))),
                _: 1
            })), [[L]]), N.value ? f("", !0) : A((o(),
            r(n, {
                key: 2,
                to: {
                    name: "referral"
                },
                class: "navbar-item",
                tabindex: "0",
                onMouseover: l[20] || (l[20] = e => O()),
                onFocusin: l[21] || (l[21] = e => O())
            }, {
                default: d(( () => [c("span", $s, u(p(a)("pga.referral")), 1)])),
                _: 1
            })), [[L]]), N.value ? f("", !0) : A((o(),
            r(n, {
                key: 3,
                to: {
                    name: "about-us"
                },
                class: "navbar-item",
                tabindex: "0",
                onMouseover: l[22] || (l[22] = e => O()),
                onFocusin: l[23] || (l[23] = e => O())
            }, {
                default: d(( () => [c("span", Gs, u(p(a)("pga.about-us")), 1)])),
                _: 1
            })), [[L]]), N.value ? f("", !0) : A((o(),
            r(n, {
                key: 4,
                to: {
                    name: "help-desk-center"
                },
                class: "navbar-item",
                tabindex: "0",
                onMouseover: l[24] || (l[24] = e => O()),
                onFocusin: l[25] || (l[25] = e => O())
            }, {
                default: d(( () => [c("span", Ks, u(p(a)("pga.help-center")), 1)])),
                _: 1
            })), [[L]]), N.value ? (o(),
            m("div", Js, [h(ca)])) : f("", !0)]), c("div", Ys, [c("div", Xs, [p(s).isLoggedIn ? f("", !0) : (o(),
            m("div", Qs, [h(n, {
                to: {
                    name: "auth"
                },
                class: "login-button"
            }, {
                default: d(( () => [B(u(p(a)("auth.log-in")), 1)])),
                _: 1
            }), h(n, {
                to: {
                    name: "register"
                },
                class: "register-button"
            }, {
                default: d(( () => [B(u(p(a)("auth.register")), 1)])),
                _: 1
            })])), G.value || !(null == (t = p(w).fullPath) ? void 0 : t.startsWith("/trade")) ? (o(),
            m("div", {
                key: 1,
                class: D(p(s).isLoggedIn ? "pr-2" : "pl-2 pr-1")
            }, [h(Is, {
                ismobile: !0
            })], 2)) : f("", !0), p(s).isLoggedIn ? (o(),
            r(x, {
                key: 2,
                right: ""
            })) : f("", !0), h(P, {
                class: "desktop-toolbar"
            })])])], 2)], 2)), [[E, "/" === p(w).path && $]])], 34)
        }
    }
}), [["__scopeId", "data-v-e9609c1d"]]);
export {Is as A, ga as D, Aa as W, el as _, ha as a, la as b, He as c, Xe as d, ea as e, fe as f};
