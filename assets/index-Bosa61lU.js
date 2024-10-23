import {l as e, a as t, t as l, E as o, m as a, A as n} from "./index-jFhAlE56.js";
import {_ as s, w as u, o as r, r as i, m as d, b as p, O as c, I as v, E as m, u as h, d as f, P as b, C as g, F as x} from "./index-DXzVhuRT.js";
import {t as y} from "./aria-C-hsWcn7.js";
import {m as M, be as I, o as C, n as S, w, r as k, bc as T, cQ as E, X as O, bw as P, h as $, Q as B, y as N, K as A, B as z, L as H, I as j, C as L, i as _, ds as W, dg as q, d9 as F, P as R, F as D, z as G, dw as Q, M as V, cS as K, cC as X, j as Z, l as J, p as U, q as Y, t as ee} from "./index-N2rhOp93.js";
import {T as te, f as le} from "./index-B_GYtH8g.js";
import {m as oe} from "./typescript-CRqm1_SZ.js";
const ae = M({
    name: "ElCollapseTransition"
});
const ne = u(s(M({
    ...ae,
    setup(e) {
        const t = I("collapse-transition")
          , l = e => {
            e.style.maxHeight = "",
            e.style.overflow = e.dataset.oldOverflow,
            e.style.paddingTop = e.dataset.oldPaddingTop,
            e.style.paddingBottom = e.dataset.oldPaddingBottom
        }
          , o = {
            beforeEnter(e) {
                e.dataset || (e.dataset = {}),
                e.dataset.oldPaddingTop = e.style.paddingTop,
                e.dataset.oldPaddingBottom = e.style.paddingBottom,
                e.style.height && (e.dataset.elExistsHeight = e.style.height),
                e.style.maxHeight = 0,
                e.style.paddingTop = 0,
                e.style.paddingBottom = 0
            },
            enter(e) {
                requestAnimationFrame(( () => {
                    e.dataset.oldOverflow = e.style.overflow,
                    e.dataset.elExistsHeight ? e.style.maxHeight = e.dataset.elExistsHeight : 0 !== e.scrollHeight ? e.style.maxHeight = `${e.scrollHeight}px` : e.style.maxHeight = 0,
                    e.style.paddingTop = e.dataset.oldPaddingTop,
                    e.style.paddingBottom = e.dataset.oldPaddingBottom,
                    e.style.overflow = "hidden"
                }
                ))
            },
            afterEnter(e) {
                e.style.maxHeight = "",
                e.style.overflow = e.dataset.oldOverflow
            },
            enterCancelled(e) {
                l(e)
            },
            beforeLeave(e) {
                e.dataset || (e.dataset = {}),
                e.dataset.oldPaddingTop = e.style.paddingTop,
                e.dataset.oldPaddingBottom = e.style.paddingBottom,
                e.dataset.oldOverflow = e.style.overflow,
                e.style.maxHeight = `${e.scrollHeight}px`,
                e.style.overflow = "hidden"
            },
            leave(e) {
                0 !== e.scrollHeight && (e.style.maxHeight = 0,
                e.style.paddingTop = 0,
                e.style.paddingBottom = 0)
            },
            afterLeave(e) {
                l(e)
            },
            leaveCancelled(e) {
                l(e)
            }
        };
        return (e, l) => (C(),
        S(P, T({
            name: O(t).b()
        }, E(o)), {
            default: w(( () => [k(e.$slots, "default")])),
            _: 3
        }, 16, ["name"]))
    }
}), [["__file", "collapse-transition.vue"]]));
let se = class {
    constructor(e, t) {
        this.parent = e,
        this.domNode = t,
        this.subIndex = 0,
        this.subIndex = 0,
        this.init()
    }
    init() {
        this.subMenuItems = this.domNode.querySelectorAll("li"),
        this.addListeners()
    }
    gotoSubIndex(e) {
        e === this.subMenuItems.length ? e = 0 : e < 0 && (e = this.subMenuItems.length - 1),
        this.subMenuItems[e].focus(),
        this.subIndex = e
    }
    addListeners() {
        const t = this.parent.domNode;
        Array.prototype.forEach.call(this.subMenuItems, (l => {
            l.addEventListener("keydown", (l => {
                let o = !1;
                switch (l.code) {
                case e.down:
                    this.gotoSubIndex(this.subIndex + 1),
                    o = !0;
                    break;
                case e.up:
                    this.gotoSubIndex(this.subIndex - 1),
                    o = !0;
                    break;
                case e.tab:
                    y(t, "mouseleave");
                    break;
                case e.enter:
                case e.space:
                    o = !0,
                    l.currentTarget.click()
                }
                return o && (l.preventDefault(),
                l.stopPropagation()),
                !1
            }
            ))
        }
        ))
    }
}
  , ue = class {
    constructor(e, t) {
        this.domNode = e,
        this.submenu = null,
        this.submenu = null,
        this.init(t)
    }
    init(e) {
        this.domNode.setAttribute("tabindex", "0");
        const t = this.domNode.querySelector(`.${e}-menu`);
        t && (this.submenu = new se(this,t)),
        this.addListeners()
    }
    addListeners() {
        this.domNode.addEventListener("keydown", (t => {
            let l = !1;
            switch (t.code) {
            case e.down:
                y(t.currentTarget, "mouseenter"),
                this.submenu && this.submenu.gotoSubIndex(0),
                l = !0;
                break;
            case e.up:
                y(t.currentTarget, "mouseenter"),
                this.submenu && this.submenu.gotoSubIndex(this.submenu.subMenuItems.length - 1),
                l = !0;
                break;
            case e.tab:
                y(t.currentTarget, "mouseleave");
                break;
            case e.enter:
            case e.space:
                l = !0,
                t.currentTarget.click()
            }
            l && t.preventDefault()
        }
        ))
    }
}
  , re = class {
    constructor(e, t) {
        this.domNode = e,
        this.init(t)
    }
    init(e) {
        const t = this.domNode.childNodes;
        Array.from(t).forEach((t => {
            1 === t.nodeType && new ue(t,e)
        }
        ))
    }
}
;
var ie = s(M({
    name: "ElMenuCollapseTransition",
    setup() {
        const e = I("menu");
        return {
            listeners: {
                onBeforeEnter: e => e.style.opacity = "0.2",
                onEnter(t, l) {
                    r(t, `${e.namespace.value}-opacity-transition`),
                    t.style.opacity = "1",
                    l()
                },
                onAfterEnter(t) {
                    i(t, `${e.namespace.value}-opacity-transition`),
                    t.style.opacity = ""
                },
                onBeforeLeave(t) {
                    t.dataset || (t.dataset = {}),
                    d(t, e.m("collapse")) ? (i(t, e.m("collapse")),
                    t.dataset.oldOverflow = t.style.overflow,
                    t.dataset.scrollWidth = t.clientWidth.toString(),
                    r(t, e.m("collapse"))) : (r(t, e.m("collapse")),
                    t.dataset.oldOverflow = t.style.overflow,
                    t.dataset.scrollWidth = t.clientWidth.toString(),
                    i(t, e.m("collapse"))),
                    t.style.width = `${t.scrollWidth}px`,
                    t.style.overflow = "hidden"
                },
                onLeave(e) {
                    r(e, "horizontal-collapse-transition"),
                    e.style.width = `${e.dataset.scrollWidth}px`
                }
            }
        }
    }
}), [["render", function(e, t, l, o, a, n) {
    return C(),
    S(P, T({
        mode: "out-in"
    }, e.listeners), {
        default: w(( () => [k(e.$slots, "default")])),
        _: 3
    }, 16)
}
], ["__file", "menu-collapse-transition.vue"]]);
function de(e, t) {
    const l = $(( () => {
        let l = e.parent;
        const o = [t.value];
        for (; "ElMenu" !== l.type.name; )
            l.props.index && o.unshift(l.props.index),
            l = l.parent;
        return o
    }
    ));
    return {
        parentMenu: $(( () => {
            let t = e.parent;
            for (; t && !["ElMenu", "ElSubMenu"].includes(t.type.name); )
                t = t.parent;
            return t
        }
        )),
        indexPath: l
    }
}
function pe(e) {
    return $(( () => {
        const t = e.backgroundColor;
        return t ? new te(t).shade(20).toString() : ""
    }
    ))
}
const ce = (e, t) => {
    const l = I("menu");
    return $(( () => l.cssVarBlock({
        "text-color": e.textColor || "",
        "hover-text-color": e.textColor || "",
        "bg-color": e.backgroundColor || "",
        "hover-bg-color": pe(e).value || "",
        "active-color": e.activeTextColor || "",
        level: `${t}`
    })))
}
  , ve = p({
    index: {
        type: String,
        required: !0
    },
    showTimeout: Number,
    hideTimeout: Number,
    popperClass: String,
    disabled: Boolean,
    teleported: {
        type: Boolean,
        default: void 0
    },
    popperOffset: Number,
    expandCloseIcon: {
        type: t
    },
    expandOpenIcon: {
        type: t
    },
    collapseCloseIcon: {
        type: t
    },
    collapseOpenIcon: {
        type: t
    }
})
  , me = "ElSubMenu";
var he = M({
    name: me,
    props: ve,
    setup(e, {slots: t, expose: a}) {
        const n = D()
          , {indexPath: s, parentMenu: u} = de(n, $(( () => e.index)))
          , r = I("menu")
          , i = I("sub-menu")
          , d = B("rootMenu");
        d || l(me, "can not inject root menu");
        const p = B(`subMenu:${u.value.uid}`);
        p || l(me, "can not inject sub menu");
        const f = N({})
          , b = N({});
        let g;
        const x = N(!1)
          , y = N()
          , M = N(null)
          , C = $(( () => "horizontal" === G.value && w.value ? "bottom-start" : "right-start"))
          , S = $(( () => "horizontal" === G.value && w.value || "vertical" === G.value && !d.props.collapse ? e.expandCloseIcon && e.expandOpenIcon ? O.value ? e.expandOpenIcon : e.expandCloseIcon : c : e.collapseCloseIcon && e.collapseOpenIcon ? O.value ? e.collapseOpenIcon : e.collapseCloseIcon : v))
          , w = $(( () => 0 === p.level))
          , k = $(( () => {
            const t = e.teleported;
            return void 0 === t ? w.value : t
        }
        ))
          , T = $(( () => d.props.collapse ? `${r.namespace.value}-zoom-in-left` : `${r.namespace.value}-zoom-in-top`))
          , E = $(( () => "horizontal" === G.value && w.value ? ["bottom-start", "bottom-end", "top-start", "top-end", "right-start", "left-start"] : ["right-start", "right", "right-end", "left-start", "bottom-start", "bottom-end", "top-start", "top-end"]))
          , O = $(( () => d.openedMenus.includes(e.index)))
          , P = $(( () => {
            let e = !1;
            return Object.values(f.value).forEach((t => {
                t.active && (e = !0)
            }
            )),
            Object.values(b.value).forEach((t => {
                t.active && (e = !0)
            }
            )),
            e
        }
        ))
          , G = $(( () => d.props.mode))
          , Q = A({
            index: e.index,
            indexPath: s,
            active: P
        })
          , V = ce(d.props, p.level + 1)
          , K = $(( () => {
            var t;
            return null != (t = e.popperOffset) ? t : d.props.popperOffset
        }
        ))
          , X = $(( () => {
            var t;
            return null != (t = e.popperClass) ? t : d.props.popperClass
        }
        ))
          , Z = $(( () => {
            var t;
            return null != (t = e.showTimeout) ? t : d.props.showTimeout
        }
        ))
          , J = $(( () => {
            var t;
            return null != (t = e.hideTimeout) ? t : d.props.hideTimeout
        }
        ))
          , U = e => {
            var t, l, o;
            e || null == (o = null == (l = null == (t = M.value) ? void 0 : t.popperRef) ? void 0 : l.popperInstanceRef) || o.destroy()
        }
          , Y = () => {
            "hover" === d.props.menuTrigger && "horizontal" === d.props.mode || d.props.collapse && "vertical" === d.props.mode || e.disabled || d.handleSubMenuClick({
                index: e.index,
                indexPath: s.value,
                active: P.value
            })
        }
          , ee = (t, l=Z.value) => {
            var o;
            "focus" !== t.type && ("click" === d.props.menuTrigger && "horizontal" === d.props.mode || !d.props.collapse && "vertical" === d.props.mode || e.disabled ? p.mouseInChild.value = !0 : (p.mouseInChild.value = !0,
            null == g || g(),
            ({stop: g} = h(( () => {
                d.openMenu(e.index, s.value)
            }
            ), l)),
            k.value && (null == (o = u.value.vnode.el) || o.dispatchEvent(new MouseEvent("mouseenter")))))
        }
          , te = (t=!1) => {
            var l;
            "click" === d.props.menuTrigger && "horizontal" === d.props.mode || !d.props.collapse && "vertical" === d.props.mode ? p.mouseInChild.value = !1 : (null == g || g(),
            p.mouseInChild.value = !1,
            ({stop: g} = h(( () => !x.value && d.closeMenu(e.index, s.value)), J.value)),
            k.value && t && (null == (l = p.handleMouseleave) || l.call(p, !0)))
        }
        ;
        z(( () => d.props.collapse), (e => U(Boolean(e))));
        {
            const e = e => {
                b.value[e.index] = e
            }
              , t = e => {
                delete b.value[e.index]
            }
            ;
            H(`subMenu:${n.uid}`, {
                addSubMenu: e,
                removeSubMenu: t,
                handleMouseleave: te,
                mouseInChild: x,
                level: p.level + 1
            })
        }
        return a({
            opened: O
        }),
        j(( () => {
            d.addSubMenu(Q),
            p.addSubMenu(Q)
        }
        )),
        L(( () => {
            p.removeSubMenu(Q),
            d.removeSubMenu(Q)
        }
        )),
        () => {
            var l;
            const a = [null == (l = t.title) ? void 0 : l.call(t), _(m, {
                class: i.e("icon-arrow"),
                style: {
                    transform: O.value ? e.expandCloseIcon && e.expandOpenIcon || e.collapseCloseIcon && e.collapseOpenIcon && d.props.collapse ? "none" : "rotateZ(180deg)" : "none"
                }
            }, {
                default: () => W(S.value) ? _(n.appContext.components[S.value]) : _(S.value)
            })]
              , s = d.isMenuPopup ? _(o, {
                ref: M,
                visible: O.value,
                effect: "light",
                pure: !0,
                offset: K.value,
                showArrow: !1,
                persistent: !0,
                popperClass: X.value,
                placement: C.value,
                teleported: k.value,
                fallbackPlacements: E.value,
                transition: T.value,
                gpuAcceleration: !1
            }, {
                content: () => {
                    var e;
                    return _("div", {
                        class: [r.m(G.value), r.m("popup-container"), X.value],
                        onMouseenter: e => ee(e, 100),
                        onMouseleave: () => te(!0),
                        onFocus: e => ee(e, 100)
                    }, [_("ul", {
                        class: [r.b(), r.m("popup"), r.m(`popup-${C.value}`)],
                        style: V.value
                    }, [null == (e = t.default) ? void 0 : e.call(t)])])
                }
                ,
                default: () => _("div", {
                    class: i.e("title"),
                    onClick: Y
                }, a)
            }) : _(R, {}, [_("div", {
                class: i.e("title"),
                ref: y,
                onClick: Y
            }, a), _(ne, {}, {
                default: () => {
                    var e;
                    return q(_("ul", {
                        role: "menu",
                        class: [r.b(), r.m("inline")],
                        style: V.value
                    }, [null == (e = t.default) ? void 0 : e.call(t)]), [[F, O.value]])
                }
            })]);
            return _("li", {
                class: [i.b(), i.is("active", P.value), i.is("opened", O.value), i.is("disabled", e.disabled)],
                role: "menuitem",
                ariaHaspopup: !0,
                ariaExpanded: O.value,
                onMouseenter: ee,
                onMouseleave: () => te(),
                onFocus: ee
            }, [s])
        }
    }
});
const fe = p({
    mode: {
        type: String,
        values: ["horizontal", "vertical"],
        default: "vertical"
    },
    defaultActive: {
        type: String,
        default: ""
    },
    defaultOpeneds: {
        type: f(Array),
        default: () => oe([])
    },
    uniqueOpened: Boolean,
    router: Boolean,
    menuTrigger: {
        type: String,
        values: ["hover", "click"],
        default: "hover"
    },
    collapse: Boolean,
    backgroundColor: String,
    textColor: String,
    activeTextColor: String,
    closeOnClickOutside: Boolean,
    collapseTransition: {
        type: Boolean,
        default: !0
    },
    ellipsis: {
        type: Boolean,
        default: !0
    },
    popperOffset: {
        type: Number,
        default: 6
    },
    ellipsisIcon: {
        type: t,
        default: () => b
    },
    popperEffect: {
        type: f(String),
        default: "dark"
    },
    popperClass: String,
    showTimeout: {
        type: Number,
        default: 300
    },
    hideTimeout: {
        type: Number,
        default: 300
    }
})
  , be = e => Array.isArray(e) && e.every((e => W(e)));
var ge = M({
    name: "ElMenu",
    props: fe,
    emits: {
        close: (e, t) => W(e) && be(t),
        open: (e, t) => W(e) && be(t),
        select: (e, t, l, o) => W(e) && be(t) && Q(l) && (void 0 === o || o instanceof Promise)
    },
    setup(e, {emit: t, slots: l, expose: o}) {
        const s = D()
          , u = s.appContext.config.globalProperties.$router
          , r = N()
          , i = I("menu")
          , d = I("sub-menu")
          , p = N(-1)
          , c = N(e.defaultOpeneds && !e.collapse ? e.defaultOpeneds.slice(0) : [])
          , v = N(e.defaultActive)
          , h = N({})
          , f = N({})
          , b = $(( () => "horizontal" === e.mode || "vertical" === e.mode && e.collapse))
          , x = (l, o) => {
            c.value.includes(l) || (e.uniqueOpened && (c.value = c.value.filter((e => o.includes(e)))),
            c.value.push(l),
            t("open", l, o))
        }
          , y = e => {
            const t = c.value.indexOf(e);
            -1 !== t && c.value.splice(t, 1)
        }
          , M = (e, l) => {
            y(e),
            t("close", e, l)
        }
          , C = ({index: e, indexPath: t}) => {
            c.value.includes(e) ? M(e, t) : x(e, t)
        }
          , S = l => {
            ("horizontal" === e.mode || e.collapse) && (c.value = []);
            const {index: o, indexPath: a} = l;
            if (!g(o) && !g(a))
                if (e.router && u) {
                    const e = l.route || o
                      , n = u.push(e).then((e => (e || (v.value = o),
                    e)));
                    t("select", o, a, {
                        index: o,
                        indexPath: a,
                        route: e
                    }, n)
                } else
                    v.value = o,
                    t("select", o, a, {
                        index: o,
                        indexPath: a
                    })
        }
          , w = () => {
            var e, t;
            if (!r.value)
                return -1;
            const l = Array.from(null != (t = null == (e = r.value) ? void 0 : e.childNodes) ? t : []).filter((e => "#comment" !== e.nodeName && ("#text" !== e.nodeName || e.nodeValue)))
              , o = getComputedStyle(r.value)
              , a = Number.parseInt(o.paddingLeft, 10)
              , n = Number.parseInt(o.paddingRight, 10)
              , s = r.value.clientWidth - a - n;
            let u = 0
              , i = 0;
            return l.forEach(( (e, t) => {
                u += (e => {
                    const t = getComputedStyle(e)
                      , l = Number.parseInt(t.marginLeft, 10)
                      , o = Number.parseInt(t.marginRight, 10);
                    return e.offsetWidth + l + o || 0
                }
                )(e),
                u <= s - 64 && (i = t + 1)
            }
            )),
            i === l.length ? -1 : i
        }
        ;
        let k = !0;
        const T = () => {
            if (p.value === w())
                return;
            const e = () => {
                p.value = -1,
                V(( () => {
                    p.value = w()
                }
                ))
            }
            ;
            k ? e() : ( (e, t=33.34) => {
                let l;
                return () => {
                    l && clearTimeout(l),
                    l = setTimeout(( () => {
                        e()
                    }
                    ), t)
                }
            }
            )(e)(),
            k = !1
        }
        ;
        let E;
        z(( () => e.defaultActive), (t => {
            h.value[t] || (v.value = ""),
            (t => {
                const l = h.value
                  , o = l[t] || v.value && l[v.value] || l[e.defaultActive];
                v.value = o ? o.index : t
            }
            )(t)
        }
        )),
        z(( () => e.collapse), (e => {
            e && (c.value = [])
        }
        )),
        z(h.value, ( () => {
            const t = v.value && h.value[v.value];
            if (!t || "horizontal" === e.mode || e.collapse)
                return;
            t.indexPath.forEach((e => {
                const t = f.value[e];
                t && x(e, t.indexPath)
            }
            ))
        }
        )),
        G(( () => {
            "horizontal" === e.mode && e.ellipsis ? E = a(r, T).stop : null == E || E()
        }
        ));
        const O = N(!1);
        {
            const t = e => {
                f.value[e.index] = e
            }
              , l = e => {
                delete f.value[e.index]
            }
              , o = e => {
                h.value[e.index] = e
            }
              , a = e => {
                delete h.value[e.index]
            }
            ;
            H("rootMenu", A({
                props: e,
                openedMenus: c,
                items: h,
                subMenus: f,
                activeIndex: v,
                isMenuPopup: b,
                addMenuItem: o,
                removeMenuItem: a,
                addSubMenu: t,
                removeSubMenu: l,
                openMenu: x,
                closeMenu: M,
                handleMenuItemClick: S,
                handleSubMenuClick: C
            })),
            H(`subMenu:${s.uid}`, {
                addSubMenu: t,
                removeSubMenu: l,
                mouseInChild: O,
                level: 0
            })
        }
        j(( () => {
            "horizontal" === e.mode && new re(s.vnode.el,i.namespace.value)
        }
        ));
        o({
            open: e => {
                const {indexPath: t} = f.value[e];
                t.forEach((e => x(e, t)))
            }
            ,
            close: y,
            handleResize: T
        });
        const P = ce(e, 0);
        return () => {
            var o, a;
            let s = null != (a = null == (o = l.default) ? void 0 : o.call(l)) ? a : [];
            const u = [];
            if ("horizontal" === e.mode && r.value) {
                const t = le(s)
                  , l = -1 === p.value ? t : t.slice(0, p.value)
                  , o = -1 === p.value ? [] : t.slice(p.value);
                (null == o ? void 0 : o.length) && e.ellipsis && (s = l,
                u.push(_(he, {
                    index: "sub-menu-more",
                    class: d.e("hide-arrow"),
                    popperOffset: e.popperOffset
                }, {
                    title: () => _(m, {
                        class: d.e("icon-more")
                    }, {
                        default: () => _(e.ellipsisIcon)
                    }),
                    default: () => o
                })))
            }
            const v = e.closeOnClickOutside ? [[n, () => {
                c.value.length && (O.value || (c.value.forEach((e => {
                    return t("close", e, (l = e,
                    f.value[l].indexPath));
                    var l
                }
                )),
                c.value = []))
            }
            ]] : []
              , h = q(_("ul", {
                key: String(e.collapse),
                role: "menubar",
                ref: r,
                style: P.value,
                class: {
                    [i.b()]: !0,
                    [i.m(e.mode)]: !0,
                    [i.m("collapse")]: e.collapse
                }
            }, [...s, ...u]), v);
            return e.collapseTransition && "vertical" === e.mode ? _(ie, ( () => h)) : h
        }
    }
});
const xe = p({
    index: {
        type: f([String, null]),
        default: null
    },
    route: {
        type: f([String, Object])
    },
    disabled: Boolean
})
  , ye = "ElMenuItem";
var Me = s(M({
    name: ye,
    components: {
        ElTooltip: o
    },
    props: xe,
    emits: {
        click: e => W(e.index) && Array.isArray(e.indexPath)
    },
    setup(e, {emit: t}) {
        const o = D()
          , a = B("rootMenu")
          , n = I("menu")
          , s = I("menu-item");
        a || l(ye, "can not inject root menu");
        const {parentMenu: u, indexPath: r} = de(o, K(e, "index"))
          , i = B(`subMenu:${u.value.uid}`);
        i || l(ye, "can not inject sub menu");
        const d = $(( () => e.index === a.activeIndex))
          , p = A({
            index: e.index,
            indexPath: r,
            active: d
        });
        return j(( () => {
            i.addSubMenu(p),
            a.addMenuItem(p)
        }
        )),
        L(( () => {
            i.removeSubMenu(p),
            a.removeMenuItem(p)
        }
        )),
        {
            parentMenu: u,
            rootMenu: a,
            active: d,
            nsMenu: n,
            nsMenuItem: s,
            handleClick: () => {
                e.disabled || (a.handleMenuItemClick({
                    index: e.index,
                    indexPath: r.value,
                    route: e.route
                }),
                t("click", p))
            }
        }
    }
}), [["render", function(e, t, l, o, a, n) {
    const s = X("el-tooltip");
    return C(),
    Z("li", {
        class: U([e.nsMenuItem.b(), e.nsMenuItem.is("active", e.active), e.nsMenuItem.is("disabled", e.disabled)]),
        role: "menuitem",
        tabindex: "-1",
        onClick: e.handleClick
    }, ["ElMenu" === e.parentMenu.type.name && e.rootMenu.props.collapse && e.$slots.title ? (C(),
    S(s, {
        key: 0,
        effect: e.rootMenu.props.popperEffect,
        placement: "right",
        "fallback-placements": ["left"],
        persistent: ""
    }, {
        content: w(( () => [k(e.$slots, "title")])),
        default: w(( () => [J("div", {
            class: U(e.nsMenu.be("tooltip", "trigger"))
        }, [k(e.$slots, "default")], 2)])),
        _: 3
    }, 8, ["effect"])) : (C(),
    Z(R, {
        key: 1
    }, [k(e.$slots, "default"), k(e.$slots, "title")], 64))], 10, ["onClick"])
}
], ["__file", "menu-item.vue"]]);
var Ie = s(M({
    name: "ElMenuItemGroup",
    props: {
        title: String
    },
    setup: () => ({
        ns: I("menu-item-group")
    })
}), [["render", function(e, t, l, o, a, n) {
    return C(),
    Z("li", {
        class: U(e.ns.b())
    }, [J("div", {
        class: U(e.ns.e("title"))
    }, [e.$slots.title ? k(e.$slots, "title", {
        key: 1
    }) : (C(),
    Z(R, {
        key: 0
    }, [Y(ee(e.title), 1)], 64))], 2), J("ul", null, [k(e.$slots, "default")])], 2)
}
], ["__file", "menu-item-group.vue"]]);
const Ce = u(ge, {
    MenuItem: Me,
    MenuItemGroup: Ie,
    SubMenu: he
})
  , Se = x(Me);
x(Ie),
x(he);
export {Se as E, Ce as a, ne as b};
