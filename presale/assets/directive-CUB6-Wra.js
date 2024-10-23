import {
    b as e,
    d as t,
    _ as a,
    E as l,
    H as s,
    I as n,
    c as o,
    K as r,
    p as i,
    i as u,
    L as d,
    w as c,
    F as v,
    r as b,
    f as p,
    n as m,
    o as f
} from "./index-DZwhim7i.js";
import {
    t as g,
    m as y,
    w as h,
    x,
    l as C
} from "./index-DWyf7GKU.js";
import {
    m as w
} from "./typescript-CRqm1_SZ.js";
import {
    m as $,
    Q as k,
    be as P,
    y as B,
    B as T,
    M as A,
    C as L,
    o as N,
    j as E,
    p as S,
    X as R,
    ck as V,
    F as j,
    h as I,
    I as F,
    cs as _,
    v as z,
    L as K,
    r as O,
    ds as M,
    W as q,
    K as H,
    N as W,
    dg as X,
    d9 as G,
    s as Q,
    bG as U,
    bb as Y,
    i as Z,
    w as D,
    bw as J,
    dw as ee,
    cd as te,
    eu as ae
} from "./index-CQfCy4Xm.js";
import {
    c as le
} from "./index-38aUouWI.js";
import {
    U as se
} from "./index-wV0BwLDn.js";
import {
    u as ne
} from "./index-Czea63rc.js";
import {
    a as oe
} from "./use-global-config-CYuHb1FB.js";
const re = Symbol("tabsRootContextKey"),
    ie = e({
        tabs: {
            type: t(Array),
            default: () => w([])
        }
    }),
    ue = "ElTabBar",
    de = $({
        name: ue
    });
var ce = a($({ ...de,
    props: ie,
    setup(e, {
        expose: t
    }) {
        const a = e,
            l = j(),
            s = k(re);
        s || g(ue, "<el-tabs><el-tab-bar /></el-tabs>");
        const n = P("tabs"),
            o = B(),
            r = B(),
            i = () => r.value = (() => {
                let e = 0,
                    t = 0;
                const n = ["top", "bottom"].includes(s.props.tabPosition) ? "width" : "height",
                    o = "width" === n ? "x" : "y",
                    r = "x" === o ? "left" : "top";
                return a.tabs.every((a => {
                    var s, o;
                    const i = null == (o = null == (s = l.parent) ? void 0 : s.refs) ? void 0 : o[`tab-${a.uid}`];
                    if (!i) return !1;
                    if (!a.active) return !0;
                    e = i[`offset${le(r)}`], t = i[`client${le(n)}`];
                    const u = window.getComputedStyle(i);
                    return "width" === n && (t -= Number.parseFloat(u.paddingLeft) + Number.parseFloat(u.paddingRight), e += Number.parseFloat(u.paddingLeft)), !1
                })), {
                    [n]: `${t}px`,
                    transform: `translate${le(o)}(${e}px)`
                }
            })(),
            u = [];
        T((() => a.tabs), (async () => {
            await A(), i(), (() => {
                var e;
                u.forEach((e => e.stop())), u.length = 0;
                const t = null == (e = l.parent) ? void 0 : e.refs;
                if (t)
                    for (const a in t)
                        if (a.startsWith("tab-")) {
                            const e = t[a];
                            e && u.push(y(e, i))
                        }
            })()
        }), {
            immediate: !0
        });
        const d = y(o, (() => i()));
        return L((() => {
            u.forEach((e => e.stop())), u.length = 0, d.stop()
        })), t({
            ref: o,
            update: i
        }), (e, t) => (N(), E("div", {
            ref_key: "barRef",
            ref: o,
            class: S([R(n).e("active-bar"), R(n).is(R(s).props.tabPosition)]),
            style: V(r.value)
        }, null, 6))
    }
}), [
    ["__file", "tab-bar.vue"]
]);
const ve = e({
        panes: {
            type: t(Array),
            default: () => w([])
        },
        currentName: {
            type: [String, Number],
            default: ""
        },
        editable: Boolean,
        type: {
            type: String,
            values: ["card", "border-card", ""],
            default: ""
        },
        stretch: Boolean
    }),
    be = "ElTabNav",
    pe = $({
        name: be,
        props: ve,
        emits: {
            tabClick: (e, t, a) => a instanceof Event,
            tabRemove: (e, t) => t instanceof Event
        },
        setup(e, {
            expose: t,
            emit: a
        }) {
            const r = k(re);
            r || g(be, "<el-tabs><tab-nav /></el-tabs>");
            const i = P("tabs"),
                u = h(),
                d = x(),
                c = B(),
                v = B(),
                b = B(),
                p = B(),
                m = B(!1),
                f = B(0),
                w = B(!1),
                $ = B(!0),
                L = I((() => ["top", "bottom"].includes(r.props.tabPosition) ? "width" : "height")),
                N = I((() => ({
                    transform: `translate${"width"===L.value?"X":"Y"}(-${f.value}px)`
                }))),
                E = () => {
                    if (!c.value) return;
                    const e = c.value[`offset${le(L.value)}`],
                        t = f.value;
                    if (!t) return;
                    const a = t > e ? t - e : 0;
                    f.value = a
                },
                S = () => {
                    if (!c.value || !v.value) return;
                    const e = v.value[`offset${le(L.value)}`],
                        t = c.value[`offset${le(L.value)}`],
                        a = f.value;
                    if (e - a <= t) return;
                    const l = e - a > 2 * t ? a + t : e - t;
                    f.value = l
                },
                R = async () => {
                    const e = v.value;
                    if (!(m.value && b.value && c.value && e)) return;
                    await A();
                    const t = b.value.querySelector(".is-active");
                    if (!t) return;
                    const a = c.value,
                        l = ["top", "bottom"].includes(r.props.tabPosition),
                        s = t.getBoundingClientRect(),
                        n = a.getBoundingClientRect(),
                        o = l ? e.offsetWidth - n.width : e.offsetHeight - n.height,
                        i = f.value;
                    let u = i;
                    l ? (s.left < n.left && (u = i - (n.left - s.left)), s.right > n.right && (u = i + s.right - n.right)) : (s.top < n.top && (u = i - (n.top - s.top)), s.bottom > n.bottom && (u = i + (s.bottom - n.bottom))), u = Math.max(u, 0), f.value = Math.min(u, o)
                },
                V = () => {
                    var t;
                    if (!v.value || !c.value) return;
                    e.stretch && (null == (t = p.value) || t.update());
                    const a = v.value[`offset${le(L.value)}`],
                        l = c.value[`offset${le(L.value)}`],
                        s = f.value;
                    l < a ? (m.value = m.value || {}, m.value.prev = s, m.value.next = s + l < a, a - s < l && (f.value = a - l)) : (m.value = !1, s > 0 && (f.value = 0))
                },
                j = e => {
                    const t = e.code,
                        {
                            up: a,
                            down: l,
                            left: s,
                            right: n
                        } = C;
                    if (![a, l, s, n].includes(t)) return;
                    const o = Array.from(e.currentTarget.querySelectorAll("[role=tab]:not(.is-disabled)")),
                        r = o.indexOf(e.target);
                    let i;
                    i = t === s || t === a ? 0 === r ? o.length - 1 : r - 1 : r < o.length - 1 ? r + 1 : 0, o[i].focus({
                        preventScroll: !0
                    }), o[i].click(), K()
                },
                K = () => {
                    $.value && (w.value = !0)
                },
                O = () => w.value = !1;
            return T(u, (e => {
                "hidden" === e ? $.value = !1 : "visible" === e && setTimeout((() => $.value = !0), 50)
            })), T(d, (e => {
                e ? setTimeout((() => $.value = !0), 50) : $.value = !1
            })), y(b, V), F((() => setTimeout((() => R()), 0))), _((() => V())), t({
                scrollToActiveTab: R,
                removeFocus: O
            }), () => {
                const t = m.value ? [z("span", {
                        class: [i.e("nav-prev"), i.is("disabled", !m.value.prev)],
                        onClick: E
                    }, [z(l, null, {
                        default: () => [z(s, null, null)]
                    })]), z("span", {
                        class: [i.e("nav-next"), i.is("disabled", !m.value.next)],
                        onClick: S
                    }, [z(l, null, {
                        default: () => [z(n, null, null)]
                    })])] : null,
                    u = e.panes.map(((t, s) => {
                        var n, u, d, c;
                        const v = t.uid,
                            b = t.props.disabled,
                            p = null != (u = null != (n = t.props.name) ? n : t.index) ? u : `${s}`,
                            m = !b && (t.isClosable || e.editable);
                        t.index = `${s}`;
                        const f = m ? z(l, {
                                class: "is-icon-close",
                                onClick: e => a("tabRemove", t, e)
                            }, {
                                default: () => [z(o, null, null)]
                            }) : null,
                            g = (null == (c = (d = t.slots).label) ? void 0 : c.call(d)) || t.props.label,
                            y = !b && t.active ? 0 : -1;
                        return z("div", {
                            ref: `tab-${v}`,
                            class: [i.e("item"), i.is(r.props.tabPosition), i.is("active", t.active), i.is("disabled", b), i.is("closable", m), i.is("focus", w.value)],
                            id: `tab-${p}`,
                            key: `tab-${v}`,
                            "aria-controls": `pane-${p}`,
                            role: "tab",
                            "aria-selected": t.active,
                            tabindex: y,
                            onFocus: () => K(),
                            onBlur: () => O(),
                            onClick: e => {
                                O(), a("tabClick", t, p, e)
                            },
                            onKeydown: e => {
                                !m || e.code !== C.delete && e.code !== C.backspace || a("tabRemove", t, e)
                            }
                        }, [g, f])
                    }));
                return z("div", {
                    ref: b,
                    class: [i.e("nav-wrap"), i.is("scrollable", !!m.value), i.is(r.props.tabPosition)]
                }, [t, z("div", {
                    class: i.e("nav-scroll"),
                    ref: c
                }, [z("div", {
                    class: [i.e("nav"), i.is(r.props.tabPosition), i.is("stretch", e.stretch && ["top", "bottom"].includes(r.props.tabPosition))],
                    ref: v,
                    style: N.value,
                    role: "tablist",
                    onKeydown: j
                }, [e.type ? null : z(ce, {
                    ref: p,
                    tabs: [...e.panes]
                }, null), u])])])
            }
        }
    }),
    me = e({
        type: {
            type: String,
            values: ["card", "border-card", ""],
            default: ""
        },
        closable: Boolean,
        addable: Boolean,
        modelValue: {
            type: [String, Number]
        },
        editable: Boolean,
        tabPosition: {
            type: String,
            values: ["top", "right", "bottom", "left"],
            default: "top"
        },
        beforeLeave: {
            type: t(Function),
            default: () => !0
        },
        stretch: Boolean
    }),
    fe = e => M(e) || u(e),
    ge = $({
        name: "ElTabs",
        props: me,
        emits: {
            [se]: e => fe(e),
            tabClick: (e, t) => t instanceof Event,
            tabChange: e => fe(e),
            edit: (e, t) => ["remove", "add"].includes(t),
            tabRemove: e => fe(e),
            tabAdd: () => !0
        },
        setup(e, {
            emit: t,
            slots: a,
            expose: s
        }) {
            var n;
            const o = P("tabs"),
                u = I((() => ["left", "right"].includes(e.tabPosition))),
                {
                    children: d,
                    addChild: c,
                    removeChild: v
                } = ne(j(), "ElTabPane"),
                b = B(),
                p = B(null != (n = e.modelValue) ? n : "0"),
                m = async (a, l = !1) => {
                    var s, n, o;
                    if (p.value !== a && !i(a)) try {
                        !1 !== await (null == (s = e.beforeLeave) ? void 0 : s.call(e, a, p.value)) && (p.value = a, l && (t(se, a), t("tabChange", a)), null == (o = null == (n = b.value) ? void 0 : n.removeFocus) || o.call(n))
                    } catch (r) {}
                },
                f = (e, a, l) => {
                    e.props.disabled || (m(a, !0), t("tabClick", e, l))
                },
                g = (e, a) => {
                    e.props.disabled || i(e.props.name) || (a.stopPropagation(), t("edit", e.props.name, "remove"), t("tabRemove", e.props.name))
                },
                y = () => {
                    t("edit", void 0, "add"), t("tabAdd")
                };
            T((() => e.modelValue), (e => m(e))), T(p, (async () => {
                var e;
                await A(), null == (e = b.value) || e.scrollToActiveTab()
            })), K(re, {
                props: e,
                currentName: p,
                registerPane: e => {
                    d.value.push(e)
                },
                sortPane: c,
                unregisterPane: v
            }), s({
                currentName: p
            });
            const h = ({
                render: e
            }) => e();
            return () => {
                const t = a["add-icon"],
                    s = e.editable || e.addable ? z("div", {
                        class: [o.e("new-tab"), u.value && o.e("new-tab-vertical")],
                        tabindex: "0",
                        onClick: y,
                        onKeydown: e => {
                            e.code === C.enter && y()
                        }
                    }, [t ? O(a, "add-icon") : z(l, {
                        class: o.is("icon-plus")
                    }, {
                        default: () => [z(r, null, null)]
                    })]) : null,
                    n = z("div", {
                        class: [o.e("header"), u.value && o.e("header-vertical"), o.is(e.tabPosition)]
                    }, [z(h, {
                        render: () => {
                            const t = d.value.some((e => e.slots.label));
                            return z(pe, {
                                ref: b,
                                currentName: p.value,
                                editable: e.editable,
                                type: e.type,
                                panes: d.value,
                                stretch: e.stretch,
                                onTabClick: f,
                                onTabRemove: g
                            }, {
                                $stable: !t
                            })
                        }
                    }, null), s]),
                    i = z("div", {
                        class: o.e("content")
                    }, [O(a, "default")]);
                return z("div", {
                    class: [o.b(), o.m(e.tabPosition), {
                        [o.m("card")]: "card" === e.type,
                        [o.m("border-card")]: "border-card" === e.type
                    }]
                }, [i, n])
            }
        }
    }),
    ye = e({
        label: {
            type: String,
            default: ""
        },
        name: {
            type: [String, Number]
        },
        closable: Boolean,
        disabled: Boolean,
        lazy: Boolean
    }),
    he = "ElTabPane",
    xe = $({
        name: he
    });
var Ce = a($({ ...xe,
    props: ye,
    setup(e) {
        const t = e,
            a = j(),
            l = q(),
            s = k(re);
        s || g(he, "usage: <el-tabs><el-tab-pane /></el-tabs/>");
        const n = P("tab-pane"),
            o = B(),
            r = I((() => t.closable || s.props.closable)),
            i = d((() => {
                var e;
                return s.currentName.value === (null != (e = t.name) ? e : o.value)
            })),
            u = B(i.value),
            c = I((() => {
                var e;
                return null != (e = t.name) ? e : o.value
            })),
            v = d((() => !t.lazy || u.value || i.value));
        T(i, (e => {
            e && (u.value = !0)
        }));
        const b = H({
            uid: a.uid,
            slots: l,
            props: t,
            paneName: c,
            active: i,
            index: o,
            isClosable: r
        });
        return s.registerPane(b), F((() => {
            s.sortPane(b)
        })), W((() => {
            s.unregisterPane(b.uid)
        })), (e, t) => R(v) ? X((N(), E("div", {
            key: 0,
            id: `pane-${R(c)}`,
            class: S(R(n).b()),
            role: "tabpanel",
            "aria-hidden": !R(i),
            "aria-labelledby": `tab-${R(c)}`
        }, [O(e.$slots, "default")], 10, ["id", "aria-hidden", "aria-labelledby"])), [
            [G, R(i)]
        ]) : Q("v-if", !0)
    }
}), [
    ["__file", "tab-pane.vue"]
]);
const we = c(ge, {
        TabPane: Ce
    }),
    $e = v(Ce);

function ke(e) {
    let t;
    const a = B(!1),
        l = H({ ...e,
            originalPosition: "",
            originalOverflow: "",
            visible: !1
        });

    function s() {
        var e, t;
        null == (t = null == (e = i.$el) ? void 0 : e.parentNode) || t.removeChild(i.$el)
    }

    function n() {
        if (!a.value) return;
        const e = l.parent;
        a.value = !1, e.vLoadingAddClassList = void 0,
            function() {
                const e = l.parent,
                    t = i.ns;
                if (!e.vLoadingAddClassList) {
                    let a = e.getAttribute("loading-number");
                    a = Number.parseInt(a) - 1, a ? e.setAttribute("loading-number", a.toString()) : (b(e, t.bm("parent", "relative")), e.removeAttribute("loading-number")), b(e, t.bm("parent", "hidden"))
                }
                s(), r.unmount()
            }()
    }
    const o = $({
            name: "ElLoading",
            setup(e, {
                expose: t
            }) {
                const {
                    ns: a,
                    zIndex: s
                } = oe("loading");
                return t({
                    ns: a,
                    zIndex: s
                }), () => {
                    const e = l.spinner || l.svg,
                        t = Z("svg", {
                            class: "circular",
                            viewBox: l.svgViewBox ? l.svgViewBox : "0 0 50 50",
                            ...e ? {
                                innerHTML: e
                            } : {}
                        }, [Z("circle", {
                            class: "path",
                            cx: "25",
                            cy: "25",
                            r: "20",
                            fill: "none"
                        })]),
                        s = l.text ? Z("p", {
                            class: a.b("text")
                        }, [l.text]) : void 0;
                    return Z(J, {
                        name: a.b("fade"),
                        onAfterLeave: n
                    }, {
                        default: D((() => [X(z("div", {
                            style: {
                                backgroundColor: l.background || ""
                            },
                            class: [a.b("mask"), l.customClass, l.fullscreen ? "is-fullscreen" : ""]
                        }, [Z("div", {
                            class: a.b("spinner")
                        }, [t, s])]), [
                            [G, l.visible]
                        ])]))
                    })
                }
            }
        }),
        r = U(o),
        i = r.mount(document.createElement("div"));
    return { ...Y(l),
        setText: function(e) {
            l.text = e
        },
        removeElLoadingChild: s,
        close: function() {
            var s;
            e.beforeClose && !e.beforeClose() || (a.value = !0, clearTimeout(t), t = setTimeout(n, 400), l.visible = !1, null == (s = e.closed) || s.call(e))
        },
        handleAfterLeave: n,
        vm: i,
        get $el() {
            return i.$el
        }
    }
}
let Pe;
const Be = function(e = {}) {
        if (!p) return;
        const t = Te(e);
        if (t.fullscreen && Pe) return Pe;
        const a = ke({ ...t,
            closed: () => {
                var e;
                null == (e = t.closed) || e.call(t), t.fullscreen && (Pe = void 0)
            }
        });
        Ae(t, t.parent, a), Le(t, t.parent, a), t.parent.vLoadingAddClassList = () => Le(t, t.parent, a);
        let l = t.parent.getAttribute("loading-number");
        return l = l ? `${Number.parseInt(l)+1}` : "1", t.parent.setAttribute("loading-number", l), t.parent.appendChild(a.$el), A((() => a.visible.value = t.visible)), t.fullscreen && (Pe = a), a
    },
    Te = e => {
        var t, a, l, s;
        let n;
        return n = M(e.target) ? null != (t = document.querySelector(e.target)) ? t : document.body : e.target || document.body, {
            parent: n === document.body || e.body ? document.body : n,
            background: e.background || "",
            svg: e.svg || "",
            svgViewBox: e.svgViewBox || "",
            spinner: e.spinner || !1,
            text: e.text || "",
            fullscreen: n === document.body && (null == (a = e.fullscreen) || a),
            lock: null != (l = e.lock) && l,
            customClass: e.customClass || "",
            visible: null == (s = e.visible) || s,
            beforeClose: e.beforeClose,
            closed: e.closed,
            target: n
        }
    },
    Ae = async (e, t, a) => {
        const {
            nextZIndex: l
        } = a.vm.zIndex || a.vm._.exposed.zIndex, s = {};
        if (e.fullscreen) a.originalPosition.value = m(document.body, "position"), a.originalOverflow.value = m(document.body, "overflow"), s.zIndex = l();
        else if (e.parent === document.body) {
            a.originalPosition.value = m(document.body, "position"), await A();
            for (const t of ["top", "left"]) {
                const a = "top" === t ? "scrollTop" : "scrollLeft";
                s[t] = e.target.getBoundingClientRect()[t] + document.body[a] + document.documentElement[a] - Number.parseInt(m(document.body, `margin-${t}`), 10) + "px"
            }
            for (const t of ["height", "width"]) s[t] = `${e.target.getBoundingClientRect()[t]}px`
        } else a.originalPosition.value = m(t, "position");
        for (const [n, o] of Object.entries(s)) a.$el.style[n] = o
    },
    Le = (e, t, a) => {
        const l = a.vm.ns || a.vm._.exposed.ns;
        ["absolute", "fixed", "sticky"].includes(a.originalPosition.value) ? b(t, l.bm("parent", "relative")) : f(t, l.bm("parent", "relative")), e.fullscreen && e.lock ? f(t, l.bm("parent", "hidden")) : b(t, l.bm("parent", "hidden"))
    },
    Ne = Symbol("ElLoading"),
    Ee = (e, t) => {
        var a, l, s, n;
        const o = t.instance,
            r = e => ee(t.value) ? t.value[e] : void 0,
            i = t => (e => {
                const t = M(e) && (null == o ? void 0 : o[e]) || e;
                return t ? B(t) : t
            })(r(t) || e.getAttribute(`element-loading-${ae(t)}`)),
            u = null != (a = r("fullscreen")) ? a : t.modifiers.fullscreen,
            d = {
                text: i("text"),
                svg: i("svg"),
                svgViewBox: i("svgViewBox"),
                spinner: i("spinner"),
                background: i("background"),
                customClass: i("customClass"),
                fullscreen: u,
                target: null != (l = r("target")) ? l : u ? void 0 : e,
                body: null != (s = r("body")) ? s : t.modifiers.body,
                lock: null != (n = r("lock")) ? n : t.modifiers.lock
            };
        e[Ne] = {
            options: d,
            instance: Be(d)
        }
    },
    Se = {
        mounted(e, t) {
            t.value && Ee(e, t)
        },
        updated(e, t) {
            const a = e[Ne];
            t.oldValue !== t.value && (t.value && !t.oldValue ? Ee(e, t) : t.value && t.oldValue ? ee(t.value) && ((e, t) => {
                for (const a of Object.keys(t)) te(t[a]) && (t[a].value = e[a])
            })(t.value, a.options) : null == a || a.instance.close())
        },
        unmounted(e) {
            var t;
            null == (t = e[Ne]) || t.instance.close(), e[Ne] = null
        }
    };
export {
    we as E, $e as a, Se as v
};