import {
    u as e
} from "./viewWrapper-yhXGfwRy.js";
import {
    m as s,
    o as a,
    j as t,
    r as l,
    p as n,
    X as i,
    G as o,
    y as c,
    cD as r,
    l as d,
    dg as p,
    h as u,
    cC as m,
    v,
    w as h,
    dn as g,
    Y as w,
    dp as f,
    dc as x,
    B as y,
    P as b,
    dh as z,
    dj as j,
    t as _,
    n as k,
    s as B,
    I as V,
    N as C,
    bw as P,
    cE as O
} from "./index-CQfCy4Xm.js";
import {
    _ as S,
    a as E
} from "./VPageContent-BIuP73X_.js";
import {
    _ as A
} from "./_plugin-vue_export-helper-BCo6x5W8.js";
import {
    W as K,
    D as L,
    _ as D
} from "./Navbar2-Cx1AKm6v.js";
import "./index-DZwhim7i.js";
import "./AppPop-DXr7YMXx.js";
import "./browser-Cv63Auap.js";
import "./index-DPTDKB4o.js";
import "./index-wV0BwLDn.js";
import "./index-DWyf7GKU.js";
import "./index-CB5HUA9W.js";
import "./google-play-0W6tGWt8.js";
import "./VPlaceload-DcvQMSN9.js";
import "./Button-C_PMcYdl.js";
import "./AvatarSimple-DIs6U3iF.js";
import "./via-placeholder-csI6CdwS.js";
import "./user-qMNVzsWD.js";
import "./sett-Dbwu6PJ1.js";
import "./avatarSettings-C1kj7zSJ.js";
import "./vue3-avataaars-DO56oOZp.js";
import "./index-38aUouWI.js";
import "./ButtonGR-CCzD27Qk.js";
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
const $ = s({
        __name: "VViewWrapper",
        props: {
            topNav: {
                type: Boolean
            },
            full: {
                type: Boolean
            }
        },
        setup(s) {
            const o = e(),
                c = s;
            return (e, s) => (a(), t("div", {
                class: n(["view-wrapper", [c.topNav && "has-top-nav", c.full && "view-wrapper-full", i(o).isPushed && "is-pushed-full", i(o).isPushedBlock && "is-pushed-block"]])
            }, [l(e.$slots, "default")], 2))
        }
    }),
    I = {
        initial: {
            opacity: 0
        },
        enter: {
            opacity: 1
        },
        delay: 180,
        class: "cls-4",
        x: "363.0795",
        y: "187.6683",
        width: "165.0475",
        height: "299.798",
        style: {
            "transform-origin": "50% 50%",
            transform: "rotate(-45deg)"
        }
    },
    N = A(s({
        __name: "AnimatedLogo",
        props: {
            light: {
                type: Boolean
            }
        },
        setup(e) {
            const s = e,
                l = o(),
                i = c(!1);
            l.beforeEach((() => {
                i.value = !0
            })), l.afterEach((() => {
                setTimeout((() => {
                    i.value = !1
                }), 2e3)
            }));
            const u = {
                opacity: 1,
                y: 0,
                x: 0,
                transition: {
                    type: "spring",
                    stiffness: 90,
                    damping: 9,
                    delay: 150
                }
            };
            return (e, l) => {
                const o = r("motion");
                return a(), t("svg", {
                    id: "OBJECTS",
                    x: "0px",
                    y: "0px",
                    xmlns: "http://www.w3.org/2000/svg",
                    "xmlns:xlink": "http://www.w3.org/1999/xlink",
                    "xml:space": "preserve",
                    style: {
                        "enable-background": "new 0 0 891.1383 675.0004"
                    },
                    viewBox: "0 0 891.1383 675.0004",
                    class: n([s.light && "is-light"])
                }, [d("g", {
                    id: "Layer_1-2",
                    class: n([i.value && "is-roll"])
                }, [d("g", null, [p(d("polygon", {
                    initial: {
                        opacity: 0,
                        y: 60,
                        x: -60
                    },
                    delay: 300,
                    enter: u,
                    class: "cls-1",
                    points: "0 342 224.9992 342.0008 558 675 333.0847 675.0004 0 342"
                }, null, 512), [
                    [o]
                ]), p(d("polygon", {
                    initial: {
                        opacity: 0,
                        y: 60,
                        x: 60
                    },
                    delay: 210,
                    enter: u,
                    class: "cls-3",
                    points: "891 342 666 342 499.4047 508.083 724.4025 508.083 891 342"
                }, null, 512), [
                    [o]
                ]), p(d("polygon", {
                    initial: {
                        opacity: 0,
                        y: -60,
                        x: -60
                    },
                    delay: 210,
                    enter: u,
                    class: "cls-3",
                    points: "391.5953 166.917 166.5954 166.917 0 333 224.9979 333 391.5953 166.917"
                }, null, 512), [
                    [o]
                ]), p(d("polygon", {
                    initial: {
                        opacity: 0,
                        y: -60,
                        x: 60
                    },
                    delay: 300,
                    enter: u,
                    class: "cls-2",
                    points: "332.8617 0 557.8481 0 891.1383 333 665.9468 333 332.8617 0"
                }, null, 512), [
                    [o]
                ]), p(d("rect", I, null, 512), [
                    [o]
                ])])], 2)], 2)
            }
        }
    }), [
        ["__scopeId", "data-v-ec1df873"]
    ]),
    R = {
        class: "sidebar-brand"
    },
    T = {
        class: "sidebar-inner"
    },
    W = {
        class: "icon-menu overflow-hidden"
    },
    U = {
        class: "bottom-menu"
    },
    G = s({
        __name: "Sidebar",
        props: {
            theme: {
                default: "default"
            },
            isOpen: {
                type: Boolean
            }
        },
        setup(e) {
            const s = e,
                i = u((() => {
                    switch (s.theme) {
                        case "color":
                            return "is-colored";
                        case "labels":
                            return "has-labels";
                        case "labels-hover":
                            return "has-labels has-hover-labels";
                        case "float":
                            return s.isOpen ? "is-float is-bordered" : "is-float";
                        case "curved":
                            return s.isOpen ? "" : "is-curved";
                        case "color-curved":
                            return s.isOpen ? "is-colored" : "is-colored is-curved";
                        default:
                            return ""
                    }
                }));
            return (e, s) => {
                const o = N,
                    c = m("RouterLink");
                return a(), t("div", {
                    class: n(["main-sidebar", [i.value]])
                }, [d("div", R, [v(c, {
                    to: {
                        name: "index"
                    }
                }, {
                    default: h((() => [v(o, {
                        width: "36px"
                    })])),
                    _: 1
                })]), d("div", T, [s[0] || (s[0] = d("div", {
                    class: "naver"
                }, null, -1)), d("ul", W, [l(e.$slots, "links")]), d("ul", U, [l(e.$slots, "bottom-links")])])], 2)
            }
        }
    }),
    M = {
        class: ""
    },
    H = {
        class: "text-11 text-medium mt-1 text-center text-menu"
    },
    J = {
        class: "sidebar-svg",
        version: "1.1",
        width: "512",
        height: "512",
        x: "0",
        y: "0",
        viewBox: "0 0 24 24",
        style: {
            "enable-background": "new 0 0 512 512"
        },
        "xml:space": "preserve"
    },
    X = {
        class: "text-11 text-medium mt-1 text-center text-menu"
    },
    Y = {
        class: "sidebar-svg",
        version: "1.1",
        width: "512",
        height: "512",
        x: "0",
        y: "0",
        viewBox: "0 0 24 24",
        style: {
            "enable-background": "new 0 0 512 512"
        },
        "xml:space": "preserve"
    },
    q = {
        class: "text-11 text-medium mt-1 text-center text-menu"
    },
    F = {
        class: "is-hidden-touch"
    },
    Q = {
        class: "sidebar-svg",
        version: "1.1",
        width: "512",
        height: "512",
        x: "0",
        y: "0",
        viewBox: "0 0 32 32",
        style: {
            "enable-background": "new 0 0 512 512"
        },
        "xml:space": "preserve"
    },
    Z = {
        class: "page-title has-text-centered"
    },
    ee = {
        class: "title-wrap"
    },
    se = {
        class: "title is-4"
    },
    ae = {
        key: 0,
        class: "desktop-toolbar ml-auto flex"
    },
    te = s({
        __name: "SidebarLayout",
        props: {
            theme: {
                default: "default"
            },
            defaultSidebar: {
                default: "dashboard"
            },
            closeOnChange: {
                type: Boolean
            },
            openOnMounted: {
                type: Boolean
            },
            nowrap: {
                type: Boolean
            }
        },
        setup(s) {
            const o = c(!1);
            g();
            const {
                t: r,
                locale: p
            } = w(), u = s, V = c(!1), C = e(), P = f(), O = c(!1), A = c(u.openOnMounted), D = c(u.defaultSidebar);
            return c("Wallet"), x((() => {
                C.setPushed(A.value ? ? !1)
            })), y((() => P.fullPath), (() => {
                O.value = !1, u.closeOnChange && A.value && (A.value = !1)
            })), (e, s) => {
                const c = m("RouterLink"),
                    p = G,
                    g = S,
                    w = E,
                    f = $;
                return a(), t(b, null, [d("div", M, [s[22] || (s[22] = d("div", {
                    class: "app-overlay"
                }, null, -1)), v(p, {
                    theme: u.theme,
                    "is-open": A.value
                }, {
                    links: h((() => [d("li", null, [v(c, {
                        id: "open-settings",
                        class: n(["ai" === D.value && "is-active"]),
                        tabindex: "0",
                        to: {
                            name: "user-center-dashboard-ai"
                        },
                        "data-content": "Dashboards",
                        "aria-label": "View dashboards",
                        onKeydown: s[0] || (s[0] = z(j((e => "ai" == D.value), ["prevent"]), ["space"])),
                        onClick: s[1] || (s[1] = e => D.value = "ai")
                    }, {
                        default: h((() => s[14] || (s[14] = [d("svg", {
                            id: "fi_3372511",
                            "enable-background": "new 0 0 502.018 502.018",
                            height: "512",
                            viewBox: "0 0 502.018 502.018",
                            width: "512",
                            xmlns: "http://www.w3.org/2000/svg",
                            class: "sidebar-svg"
                        }, [d("g", {
                            fill: "#fff",
                            class: "svg-menu"
                        }, [d("path", {
                            d: "m495.953 186.058-236.301-171.678c-5.154-3.745-12.136-3.745-17.289 0l-236.299 171.678c-5.155 3.746-7.313 10.385-5.343 16.444l90.272 277.781c1.97 6.059 7.617 10.162 13.988 10.162h292.057c6.371 0 12.018-4.102 13.988-10.162l90.272-277.781c1.967-6.059-.19-12.698-5.345-16.444zm-40.642 6.832-37.64 12.23-151.955-72.19v-77.786zm-189.595-27.395 111.247 52.851-111.247 36.145zm-38.503 116.971-60.878 83.798v-103.577zm-48.324-46.628 57.411-57.895v76.549zm72.119 63.92 47.065 64.785-111.845 24.383zm23.796-17.292 108.592-35.283-61.258 100.437zm-38.503-227.322v81.024l-88.742 89.49-100.853-32.769zm-198.684 165.72 99.301 32.264v153.624l-26.873 36.988zm96.227 240.167 26.396-36.335 156.715-34.165 51.218 70.499h-234.329zm258.126-17.29-51.102-70.34 85.498-140.179 38.035-12.358z"
                        })])], -1), d("span", {
                            class: "text-11 text-medium mt-1 text-center text-menu"
                        }, _("TradeScan"), -1)]))),
                        _: 1
                    }, 8, ["class"])]), s[19] || (s[19] = d("div", {
                        style: {
                            "align-items": "center",
                            display: "flex",
                            "justify-content": "center"
                        }
                    }, [d("div", {
                        style: {
                            "border-top": "1px solid #2d2d2d",
                            width: "60px"
                        }
                    })], -1)), d("li", null, [v(c, {
                        id: "open-wallet",
                        class: n(["wallet" === D.value && "is-active"]),
                        tabindex: "0",
                        to: {
                            name: "user-center-dashboard-wallet"
                        },
                        "data-content": "Layouts",
                        "aria-label": "View layouts",
                        onKeydown: s[2] || (s[2] = z(j((e => "wallet" == D.value), ["prevent"]), ["space"])),
                        onClick: s[3] || (s[3] = e => D.value = "wallet")
                    }, {
                        default: h((() => [s[15] || (s[15] = d("svg", {
                            id: "fi_3987671",
                            "enable-background": "new 0 0 512 512",
                            height: "512",
                            viewBox: "0 0 512 512",
                            width: "512",
                            xmlns: "http://www.w3.org/2000/svg",
                            class: "sidebar-svg"
                        }, [d("g", {
                            fill: "#fff",
                            class: "svg-menu"
                        }, [d("path", {
                            d: "m512 211h-32v-90h-60v-60h-375c-24.813 0-45 20.187-45 45v270c0 41.355 33.645 75 75 75h405v-90h32zm-467-120h345v30h-345c-8.271 0-15-6.729-15-15s6.729-15 15-15zm405 330h-375c-24.813 0-45-20.187-45-45v-227.58c4.695 1.665 9.741 2.58 15 2.58h375 30v60h-75c-41.355 0-75 33.645-75 75s33.645 75 75 75h75zm32-90h-2-30-75c-24.813 0-45-20.187-45-45s20.187-45 45-45h75 30 2z"
                        }), d("path", {
                            d: "m360 271h30v30h-30z"
                        })])], -1)), d("span", H, _(i(r)("dash.wallet")), 1)])),
                        _: 1
                    }, 8, ["class"])]), d("li", null, [v(c, {
                        id: "open-wallet",
                        class: n(["orders" === D.value && "is-active"]),
                        tabindex: "0",
                        to: {
                            name: "user-center-dashboard-orders"
                        },
                        "data-content": "Elements",
                        "aria-label": "View elements",
                        onKeydown: s[4] || (s[4] = z(j((e => "orders" == D.value), ["prevent"]), ["space"])),
                        onClick: s[5] || (s[5] = e => D.value = "orders")
                    }, {
                        default: h((() => [(a(), t("svg", J, s[16] || (s[16] = [d("g", {
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "#fff",
                            class: "svg-menu"
                        }, [d("path", {
                            d: "m15.5 15.75c-.18 0-.38-.01-.57-.02-.37-.02-.67-.32-.7-.69-.22-2.79-2.49-5.05001-5.27001-5.27001-.37-.03-.67-.32998-.69-.69998-.01-.19-.01999-.38001-.01999-.57001 0-4 3.25-7.25 7.25-7.25s7.25 3.25 7.25 7.25-3.25 7.25-7.25 7.25zm-5.75-7.39001c2.98.52 5.37 2.91001 5.89 5.89001 3.11-.08 5.61-2.62 5.61-5.75 0-3.17-2.58-5.75-5.75-5.75-3.12 0-5.67 2.49999-5.75 5.60999z",
                            "data-original": "#000000"
                        }), d("path", {
                            d: "m8.5 22.75c-4 0-7.25-3.25-7.25-7.25s3.25-7.25 7.25-7.25c.18 0 .38001.00999.57001.01999 3.52999.28 6.38999 3.14001 6.65999 6.65001.01.2.02.39.02.58 0 4-3.25 7.25-7.25 7.25zm0-13c-3.17 0-5.75 2.58-5.75 5.75s2.58 5.75 5.75 5.75 5.75-2.58 5.75-5.75c0-.16-.01-.32-.02-.47-.22-2.77-2.48-5.04001-5.27001-5.26001-.14-.01-.29999-.01999-.45999-.01999z",
                            "data-original": "#000000"
                        }), d("path", {
                            d: "m3 7.34c-.23 0-.45001-.04001-.67001-.13001-.66-.27-1.07999-.90999-1.07999-1.61999v-2.59c0-.96.79-1.75 1.75-1.75h2.59c.71 0 1.33999.41999 1.61999 1.07999.27.66.12 1.41-.38 1.91l-2.59 2.59c-.34.33-.77999.51001-1.23999.51001zm0-4.59c-.14 0-.25.11-.25.25v2.59c0 .15.09999.21001.14999.23001.06.02.17002.04998.27002-.05002l2.59-2.59c.1-.1.07999-.20999.04999-.26999s-.09001-.14999-.23001-.14999h-2.57999z",
                            "data-original": "#000000"
                        }), d("path", {
                            d: "m20.9998 22.75h-2.59c-.71 0-1.34-.42-1.62-1.08-.27-.66-.12-1.41.38-1.91l2.59-2.59c.5-.5 1.25-.65 1.91-.38s1.08.91 1.08 1.62v2.59c0 .96-.79 1.75-1.75 1.75zm-.01-4.59c-.05 0-.11.02-.17.08l-2.59 2.59c-.1.1-.08.21-.05.27s.09.15.23.15h2.59c.14 0 .25-.11.25-.25v-2.59c0-.15-.1-.21-.15-.23-.03-.01-.07-.02-.11-.02z",
                            "data-original": "#000000"
                        })], -1)]))), d("span", X, _(i(r)("dash.orders")), 1)])),
                        _: 1
                    }, 8, ["class"])]), d("li", null, [v(c, {
                        id: "open-wallet",
                        class: n(["history" === D.value && "is-active"]),
                        tabindex: "0",
                        to: {
                            name: "user-center-dashboard-history"
                        },
                        "data-content": "History",
                        "aria-label": "View history",
                        onKeydown: s[6] || (s[6] = z(j((e => "history" == D.value), ["prevent"]), ["space"])),
                        onClick: s[7] || (s[7] = e => D.value = "history")
                    }, {
                        default: h((() => [(a(), t("svg", Y, s[17] || (s[17] = [d("g", {
                            xmlns: "http://www.w3.org/2000/svg",
                            id: "Icon",
                            fill: "#fff",
                            class: "svg-menu"
                        }, [d("path", {
                            d: "m22.535 14.149c.141-.694.215-1.413.215-2.149 0-5.933-4.817-10.75-10.75-10.75s-10.75 4.817-10.75 10.75 4.817 10.75 10.75 10.75c.736 0 1.455-.074 2.149-.215.406-.083.668-.479.586-.885-.083-.405-.479-.668-.884-.585-.598.121-1.217.185-1.851.185-5.105 0-9.25-4.145-9.25-9.25s4.145-9.25 9.25-9.25 9.25 4.145 9.25 9.25c0 .634-.064 1.253-.185 1.851-.083.405.18.801.585.884.406.082.802-.18.885-.586z",
                            "data-original": "#000000"
                        }), d("path", {
                            d: "m11.75 6.5v4.689s-3.78 3.781-3.78 3.781c-.293.292-.293.768 0 1.06.292.293.768.293 1.06 0l4-4c.141-.14.22-.331.22-.53v-5c0-.414-.336-.75-.75-.75s-.75.336-.75.75z",
                            "data-original": "#000000"
                        }), d("path", {
                            d: "m17 13.25c-2.07 0-3.75 1.68-3.75 3.75s1.68 3.75 3.75 3.75 3.75-1.68 3.75-3.75-1.68-3.75-3.75-3.75zm0 1.5c1.242 0 2.25 1.008 2.25 2.25s-1.008 2.25-2.25 2.25-2.25-1.008-2.25-2.25 1.008-2.25 2.25-2.25z",
                            "data-original": "#000000"
                        }), d("path", {
                            d: "m22.53 21.47-2.5-2.5c-.292-.293-.768-.293-1.06 0-.293.292-.293.768 0 1.06l2.5 2.5c.292.293.768.293 1.06 0 .293-.292.293-.768 0-1.06z",
                            "data-original": "#000000"
                        })], -1)]))), d("span", q, _(i(r)("hiss.history")), 1)])),
                        _: 1
                    }, 8, ["class"])]), s[20] || (s[20] = d("div", {
                        style: {
                            "align-items": "center",
                            display: "flex",
                            "justify-content": "center"
                        }
                    }, [d("div", {
                        style: {
                            "border-top": "1px solid #2d2d2d",
                            width: "60px"
                        }
                    })], -1)), d("li", null, [d("a", {
                        id: "open-settings",
                        class: n(["ais" === D.value && "is-active"]),
                        tabindex: "0",
                        "data-content": "Dashboards",
                        "aria-label": "View dashboards",
                        onKeydown: s[8] || (s[8] = z(j((e => o.value = !0), ["prevent"]), ["space"])),
                        onClick: s[9] || (s[9] = e => o.value = !0)
                    }, s[18] || (s[18] = [d("svg", {
                        id: "fi_8943394",
                        "enable-background": "new 0 0 512 512",
                        height: "512",
                        viewBox: "0 0 512 512",
                        width: "512",
                        xmlns: "http://www.w3.org/2000/svg",
                        class: "sidebar-svg"
                    }, [d("g", {
                        fill: "#fff",
                        class: "svg-menu"
                    }, [d("path", {
                        d: "m467 161.221h-15.001v-86.744c0-8.284-6.716-15-15-15s-15 6.716-15 15v50.733c-7.783-12.207-17.001-23.615-27.578-34.01-36.876-36.241-86.034-56.2-138.421-56.2-52.425 0-101.6 19.961-138.463 56.207-10.56 10.382-19.764 21.776-27.537 33.969v-50.699c0-8.284-6.716-15-15-15s-15 6.716-15 15v86.744h-15c-24.813 0-45 20.187-45 45v61c0 24.813 20.187 45 45 45h31.213c17.709 26.948 48.204 44.779 82.79 44.779h193.994c34.586 0 65.081-17.831 82.791-44.779h31.212c5.259 0 10.305-.915 15-2.58v46.856c0 33.338-28.856 61.503-63.014 61.503h-42.228c-5.901-17.977-22.833-31-42.759-31h-33c-24.813 0-45 20.187-45 45s20.187 45 45 45h33c19.179 0 35.585-12.065 42.05-29h42.936c50.42 0 93.015-41.903 93.015-91.503v-150.276c0-24.813-20.187-45-45-45zm-133 285.779h-33c-8.271 0-15-6.729-15-15s6.729-15 15-15h33c8.271 0 15 6.729 15 15s-6.729 15-15 15zm-289-164.779c-8.271 0-15-6.729-15-15v-61c0-8.271 6.729-15 15-15h15v66.776c0 8.355 1.045 16.469 3.003 24.224zm307.997 44.779h-193.994c-26.254 0-49.125-14.741-60.785-36.378-5.226-9.786-8.222-20.814-8.218-32.625v-29.034c.021-91.945 72.929-163.963 166-163.963 91.508 0 165.957 73.53 165.999 163.927l.001 29.07c0 38.048-30.954 69.003-69.003 69.003zm114.003-44.779h-18.003c1.958-7.755 3.003-15.87 3.003-24.224l-.001-66.776h15.001c8.271 0 15 6.729 15 15v61c0 8.271-6.729 15-15 15z"
                    }), d("path", {
                        d: "m197.836 202c-8.284 0-15 6.716-15 15v11c0 8.284 6.716 15 15 15s15-6.716 15-15v-11c0-8.285-6.715-15-15-15z"
                    }), d("path", {
                        d: "m314.163 202c-8.284 0-15 6.716-15 15v11c0 8.284 6.716 15 15 15s15-6.716 15-15v-11c0-8.285-6.716-15-15-15z"
                    }), d("path", {
                        d: "m317.5 148h-123c-41.079 0-74.5 33.42-74.5 74.5 0 41.079 33.42 74.5 74.5 74.5h123c41.079 0 74.5-33.42 74.5-74.5s-33.421-74.5-74.5-74.5zm0 118.999h-123c-24.537 0-44.5-19.962-44.5-44.5 0-24.537 19.962-44.5 44.5-44.5h123c24.537 0 44.5 19.962 44.5 44.5s-19.963 44.5-44.5 44.5z"
                    })])], -1), d("span", {
                        class: "text-11 text-medium mt-1 text-center text-menu"
                    }, _("ChatBot"), -1)]), 34)])])),
                    "bottom-links": h((() => [d("li", F, [v(c, {
                        id: "open-settings",
                        to: {
                            name: "user-center-dashboard-settings"
                        },
                        "data-content": "Settings",
                        onKeydown: s[10] || (s[10] = z(j((e => "settings" == D.value), ["prevent"]), ["space"])),
                        onClick: s[11] || (s[11] = e => D.value = "settings")
                    }, {
                        default: h((() => [(a(), t("svg", Q, s[21] || (s[21] = [d("g", null, [d("path", {
                            d: "m21.5 29.989h-11c-1.446 0-3.144-.98-3.866-2.232l-5.5-9.524c-.734-1.272-.734-3.192 0-4.465l5.501-9.524c.722-1.252 2.42-2.232 3.866-2.232h10.999c1.446 0 3.144.98 3.866 2.232l5.5 9.524c.734 1.272.734 3.192 0 4.465l-5.501 9.524c-.721 1.252-2.42 2.232-3.865 2.232zm-11-25.978c-.745 0-1.762.587-2.134 1.232l-5.501 9.524c-.372.645-.372 1.82 0 2.465l5.5 9.524c.373.646 1.39 1.232 2.134 1.232h11.001c.745 0 1.762-.587 2.134-1.232l5.501-9.524c.372-.645.372-1.82 0-2.465l-5.5-9.524c-.373-.646-1.39-1.232-2.134-1.232zm5.5 17.905c-3.263 0-5.917-2.654-5.917-5.916s2.654-5.916 5.917-5.916 5.917 2.654 5.917 5.916-2.654 5.916-5.917 5.916zm0-9.832c-2.16 0-3.917 1.757-3.917 3.916s1.757 3.916 3.917 3.916 3.917-1.757 3.917-3.916-1.757-3.916-3.917-3.916z",
                            fill: "#fff",
                            class: "svg-menu",
                            "data-original": "#000000"
                        })], -1)])))])),
                        _: 1
                    })])])),
                    _: 1
                }, 8, ["theme", "is-open"]), v(f, null, {
                    default: h((() => [v(w, null, {
                        default: h((() => [u.nowrap ? l(e.$slots, "default", {
                            key: 0
                        }) : (a(), k(g, {
                            key: 1,
                            class: "is-relative"
                        }, {
                            default: h((() => [d("div", Z, [d("div", ee, [d("h1", se, _(i(C).pageTitle), 1)]), i(P).fullPath.includes("/user-center/dashboard/wallet") ? (a(), t("div", ae)) : B("", !0)]), l(e.$slots, "default")])),
                            _: 3
                        }))])),
                        _: 3
                    })])),
                    _: 3
                })]), v(K, {
                    modelValue: V.value,
                    "onUpdate:modelValue": s[12] || (s[12] = e => V.value = e),
                    btn: !1
                }, null, 8, ["modelValue"]), v(L, {
                    modelValue: o.value,
                    "onUpdate:modelValue": s[13] || (s[13] = e => o.value = e)
                }, null, 8, ["modelValue"])], 64)
            }
        }
    }),
    le = A(s({
        __name: "dashboard",
        setup(e) {
            const s = g(),
                l = f();
            return V((() => {
                document.documentElement.style.setProperty("--account-center-z-index", "-10")
            })), C((() => {
                document.documentElement.style.removeProperty("--account-center-z-index")
            })), (e, n) => {
                const o = D,
                    c = m("RouterView"),
                    r = te;
                return a(), t(b, null, [i(s).isAppOn ? B("", !0) : (a(), k(o, {
                    key: 0,
                    notfixed: !0,
                    full: !0,
                    dashboard: !0
                })), v(r, {
                    nowrap: i(s).isAppOn && !0
                }, {
                    default: h((() => [v(c, null, {
                        default: h((({
                            Component: e
                        }) => [v(P, {
                            name: "fade-fast",
                            mode: "out-in"
                        }, {
                            default: h((() => [(a(), k(O(e), {
                                key: i(l).fullPath
                            }))])),
                            _: 2
                        }, 1024)])),
                        _: 1
                    })])),
                    _: 1
                }, 8, ["nowrap"])], 64)
            }
        }
    }), [
        ["__scopeId", "data-v-b4cb8fcc"]
    ]);
export {
    le as
    default
};