import {
    b as e,
    E as a,
    _ as t,
    d as n,
    Q as l,
    R as i,
    S as r,
    i as s,
    H as u,
    I as o,
    w as p
} from "./index-DZwhim7i.js";
import {
    a as d,
    k as g
} from "./index-DWyf7GKU.js";
import {
    u as c,
    c as v,
    z as b,
    i as m,
    D as f,
    a as C
} from "./index-wV0BwLDn.js";
import {
    m as x,
    h as y,
    o as z,
    j as P,
    t as h,
    n as S,
    w as k,
    cE as N,
    X as T,
    Q as B,
    be as E,
    y as _,
    B as j,
    v as M,
    P as I,
    cB as q,
    p as w,
    l as A,
    z as L,
    s as F,
    dh as U,
    F as K,
    L as O,
    i as Q
} from "./index-CQfCy4Xm.js";
import {
    a as $,
    E as D
} from "./index-38aUouWI.js";
import {
    m as H
} from "./typescript-CRqm1_SZ.js";
import {
    E as J
} from "./index-BaPl-dvV.js";
const R = Symbol("elPaginationKey"),
    V = e({
        disabled: Boolean,
        currentPage: {
            type: Number,
            default: 1
        },
        prevText: {
            type: String
        },
        prevIcon: {
            type: d
        }
    }),
    W = {
        click: e => e instanceof MouseEvent
    },
    X = x({
        name: "ElPaginationPrev"
    });
var G = t(x({ ...X,
    props: V,
    emits: W,
    setup(e) {
        const t = e,
            {
                t: n
            } = c(),
            l = y((() => t.disabled || t.currentPage <= 1));
        return (e, t) => (z(), P("button", {
            type: "button",
            class: "btn-prev",
            disabled: T(l),
            "aria-label": e.prevText || T(n)("el.pagination.prev"),
            "aria-disabled": T(l),
            onClick: a => e.$emit("click", a)
        }, [e.prevText ? (z(), P("span", {
            key: 0
        }, h(e.prevText), 1)) : (z(), S(T(a), {
            key: 1
        }, {
            default: k((() => [(z(), S(N(e.prevIcon)))])),
            _: 1
        }))], 8, ["disabled", "aria-label", "aria-disabled", "onClick"]))
    }
}), [
    ["__file", "prev.vue"]
]);
const Y = e({
        disabled: Boolean,
        currentPage: {
            type: Number,
            default: 1
        },
        pageCount: {
            type: Number,
            default: 50
        },
        nextText: {
            type: String
        },
        nextIcon: {
            type: d
        }
    }),
    Z = x({
        name: "ElPaginationNext"
    });
var ee = t(x({ ...Z,
    props: Y,
    emits: ["click"],
    setup(e) {
        const t = e,
            {
                t: n
            } = c(),
            l = y((() => t.disabled || t.currentPage === t.pageCount || 0 === t.pageCount));
        return (e, t) => (z(), P("button", {
            type: "button",
            class: "btn-next",
            disabled: T(l),
            "aria-label": e.nextText || T(n)("el.pagination.next"),
            "aria-disabled": T(l),
            onClick: a => e.$emit("click", a)
        }, [e.nextText ? (z(), P("span", {
            key: 0
        }, h(e.nextText), 1)) : (z(), S(T(a), {
            key: 1
        }, {
            default: k((() => [(z(), S(N(e.nextIcon)))])),
            _: 1
        }))], 8, ["disabled", "aria-label", "aria-disabled", "onClick"]))
    }
}), [
    ["__file", "next.vue"]
]);
const ae = () => B(R, {}),
    te = e({
        pageSize: {
            type: Number,
            required: !0
        },
        pageSizes: {
            type: n(Array),
            default: () => H([10, 20, 30, 40, 50, 100])
        },
        popperClass: {
            type: String
        },
        disabled: Boolean,
        teleported: Boolean,
        size: {
            type: String,
            values: v
        },
        appendSizeTo: String
    }),
    ne = x({
        name: "ElPaginationSizes"
    });
var le = t(x({ ...ne,
    props: te,
    emits: ["page-size-change"],
    setup(e, {
        emit: a
    }) {
        const t = e,
            {
                t: n
            } = c(),
            l = E("pagination"),
            i = ae(),
            r = _(t.pageSize);
        j((() => t.pageSizes), ((e, n) => {
            if (!b(e, n) && Array.isArray(e)) {
                const n = e.includes(t.pageSize) ? t.pageSize : t.pageSizes[0];
                a("page-size-change", n)
            }
        })), j((() => t.pageSize), (e => {
            r.value = e
        }));
        const s = y((() => t.pageSizes));

        function u(e) {
            var a;
            e !== r.value && (r.value = e, null == (a = i.handleSizeChange) || a.call(i, Number(e)))
        }
        return (e, a) => (z(), P("span", {
            class: w(T(l).e("sizes"))
        }, [M(T(D), {
            "model-value": r.value,
            disabled: e.disabled,
            "popper-class": e.popperClass,
            size: e.size,
            teleported: e.teleported,
            "validate-event": !1,
            "append-to": e.appendSizeTo,
            onChange: u
        }, {
            default: k((() => [(z(!0), P(I, null, q(T(s), (e => (z(), S(T($), {
                key: e,
                value: e,
                label: e + T(n)("el.pagination.pagesize")
            }, null, 8, ["value", "label"])))), 128))])),
            _: 1
        }, 8, ["model-value", "disabled", "popper-class", "size", "teleported", "append-to"])], 2))
    }
}), [
    ["__file", "sizes.vue"]
]);
const ie = e({
        size: {
            type: String,
            values: v
        }
    }),
    re = x({
        name: "ElPaginationJumper"
    });
var se = t(x({ ...re,
    props: ie,
    setup(e) {
        const {
            t: a
        } = c(), t = E("pagination"), {
            pageCount: n,
            disabled: l,
            currentPage: i,
            changeEvent: r
        } = ae(), s = _(), u = y((() => {
            var e;
            return null != (e = s.value) ? e : null == i ? void 0 : i.value
        }));

        function o(e) {
            s.value = e ? +e : ""
        }

        function p(e) {
            e = Math.trunc(+e), null == r || r(e), s.value = void 0
        }
        return (e, i) => (z(), P("span", {
            class: w(T(t).e("jump")),
            disabled: T(l)
        }, [A("span", {
            class: w([T(t).e("goto")])
        }, h(T(a)("el.pagination.goto")), 3), M(T(J), {
            size: e.size,
            class: w([T(t).e("editor"), T(t).is("in-pagination")]),
            min: 1,
            max: T(n),
            disabled: T(l),
            "model-value": T(u),
            "validate-event": !1,
            "aria-label": T(a)("el.pagination.page"),
            type: "number",
            "onUpdate:modelValue": o,
            onChange: p
        }, null, 8, ["size", "class", "max", "disabled", "model-value", "aria-label"]), A("span", {
            class: w([T(t).e("classifier")])
        }, h(T(a)("el.pagination.pageClassifier")), 3)], 10, ["disabled"]))
    }
}), [
    ["__file", "jumper.vue"]
]);
const ue = e({
        total: {
            type: Number,
            default: 1e3
        }
    }),
    oe = x({
        name: "ElPaginationTotal"
    });
var pe = t(x({ ...oe,
    props: ue,
    setup(e) {
        const {
            t: a
        } = c(), t = E("pagination"), {
            disabled: n
        } = ae();
        return (e, l) => (z(), P("span", {
            class: w(T(t).e("total")),
            disabled: T(n)
        }, h(T(a)("el.pagination.total", {
            total: e.total
        })), 11, ["disabled"]))
    }
}), [
    ["__file", "total.vue"]
]);
const de = e({
        currentPage: {
            type: Number,
            default: 1
        },
        pageCount: {
            type: Number,
            required: !0
        },
        pagerCount: {
            type: Number,
            default: 7
        },
        disabled: Boolean
    }),
    ge = x({
        name: "ElPaginationPager"
    });
var ce = t(x({ ...ge,
    props: de,
    emits: ["change"],
    setup(e, {
        emit: a
    }) {
        const t = e,
            n = E("pager"),
            s = E("icon"),
            {
                t: u
            } = c(),
            o = _(!1),
            p = _(!1),
            d = _(!1),
            g = _(!1),
            v = _(!1),
            b = _(!1),
            m = y((() => {
                const e = t.pagerCount,
                    a = (e - 1) / 2,
                    n = Number(t.currentPage),
                    l = Number(t.pageCount);
                let i = !1,
                    r = !1;
                l > e && (n > e - a && (i = !0), n < l - a && (r = !0));
                const s = [];
                if (i && !r) {
                    for (let a = l - (e - 2); a < l; a++) s.push(a)
                } else if (!i && r)
                    for (let t = 2; t < e; t++) s.push(t);
                else if (i && r) {
                    const a = Math.floor(e / 2) - 1;
                    for (let e = n - a; e <= n + a; e++) s.push(e)
                } else
                    for (let t = 2; t < l; t++) s.push(t);
                return s
            })),
            f = y((() => ["more", "btn-quickprev", s.b(), n.is("disabled", t.disabled)])),
            C = y((() => ["more", "btn-quicknext", s.b(), n.is("disabled", t.disabled)])),
            x = y((() => t.disabled ? -1 : 0));

        function k(e = !1) {
            t.disabled || (e ? d.value = !0 : g.value = !0)
        }

        function N(e = !1) {
            e ? v.value = !0 : b.value = !0
        }

        function B(e) {
            const n = e.target;
            if ("li" === n.tagName.toLowerCase() && Array.from(n.classList).includes("number")) {
                const e = Number(n.textContent);
                e !== t.currentPage && a("change", e)
            } else "li" === n.tagName.toLowerCase() && Array.from(n.classList).includes("more") && j(e)
        }

        function j(e) {
            const n = e.target;
            if ("ul" === n.tagName.toLowerCase() || t.disabled) return;
            let l = Number(n.textContent);
            const i = t.pageCount,
                r = t.currentPage,
                s = t.pagerCount - 2;
            n.className.includes("more") && (n.className.includes("quickprev") ? l = r - s : n.className.includes("quicknext") && (l = r + s)), Number.isNaN(+l) || (l < 1 && (l = 1), l > i && (l = i)), l !== r && a("change", l)
        }
        return L((() => {
            const e = (t.pagerCount - 1) / 2;
            o.value = !1, p.value = !1, t.pageCount > t.pagerCount && (t.currentPage > t.pagerCount - e && (o.value = !0), t.currentPage < t.pageCount - e && (p.value = !0))
        })), (e, a) => (z(), P("ul", {
            class: w(T(n).b()),
            onClick: j,
            onKeyup: U(B, ["enter"])
        }, [e.pageCount > 0 ? (z(), P("li", {
            key: 0,
            class: w([
                [T(n).is("active", 1 === e.currentPage), T(n).is("disabled", e.disabled)], "number"
            ]),
            "aria-current": 1 === e.currentPage,
            "aria-label": T(u)("el.pagination.currentPage", {
                pager: 1
            }),
            tabindex: T(x)
        }, " 1 ", 10, ["aria-current", "aria-label", "tabindex"])) : F("v-if", !0), o.value ? (z(), P("li", {
            key: 1,
            class: w(T(f)),
            tabindex: T(x),
            "aria-label": T(u)("el.pagination.prevPages", {
                pager: e.pagerCount - 2
            }),
            onMouseenter: e => k(!0),
            onMouseleave: e => d.value = !1,
            onFocus: e => N(!0),
            onBlur: e => v.value = !1
        }, [!d.value && !v.value || e.disabled ? (z(), S(T(i), {
            key: 1
        })) : (z(), S(T(l), {
            key: 0
        }))], 42, ["tabindex", "aria-label", "onMouseenter", "onMouseleave", "onFocus", "onBlur"])) : F("v-if", !0), (z(!0), P(I, null, q(T(m), (a => (z(), P("li", {
            key: a,
            class: w([
                [T(n).is("active", e.currentPage === a), T(n).is("disabled", e.disabled)], "number"
            ]),
            "aria-current": e.currentPage === a,
            "aria-label": T(u)("el.pagination.currentPage", {
                pager: a
            }),
            tabindex: T(x)
        }, h(a), 11, ["aria-current", "aria-label", "tabindex"])))), 128)), p.value ? (z(), P("li", {
            key: 2,
            class: w(T(C)),
            tabindex: T(x),
            "aria-label": T(u)("el.pagination.nextPages", {
                pager: e.pagerCount - 2
            }),
            onMouseenter: e => k(),
            onMouseleave: e => g.value = !1,
            onFocus: e => N(),
            onBlur: e => b.value = !1
        }, [!g.value && !b.value || e.disabled ? (z(), S(T(i), {
            key: 1
        })) : (z(), S(T(r), {
            key: 0
        }))], 42, ["tabindex", "aria-label", "onMouseenter", "onMouseleave", "onFocus", "onBlur"])) : F("v-if", !0), e.pageCount > 1 ? (z(), P("li", {
            key: 3,
            class: w([
                [T(n).is("active", e.currentPage === e.pageCount), T(n).is("disabled", e.disabled)], "number"
            ]),
            "aria-current": e.currentPage === e.pageCount,
            "aria-label": T(u)("el.pagination.currentPage", {
                pager: e.pageCount
            }),
            tabindex: T(x)
        }, h(e.pageCount), 11, ["aria-current", "aria-label", "tabindex"])) : F("v-if", !0)], 42, ["onKeyup"]))
    }
}), [
    ["__file", "pager.vue"]
]);
const ve = e => "number" != typeof e,
    be = e({
        pageSize: Number,
        defaultPageSize: Number,
        total: Number,
        pageCount: Number,
        pagerCount: {
            type: Number,
            validator: e => s(e) && Math.trunc(e) === e && e > 4 && e < 22 && e % 2 == 1,
            default: 7
        },
        currentPage: Number,
        defaultCurrentPage: Number,
        layout: {
            type: String,
            default: ["prev", "pager", "next", "jumper", "->", "total"].join(", ")
        },
        pageSizes: {
            type: n(Array),
            default: () => H([10, 20, 30, 40, 50, 100])
        },
        popperClass: {
            type: String,
            default: ""
        },
        prevText: {
            type: String,
            default: ""
        },
        prevIcon: {
            type: d,
            default: () => u
        },
        nextText: {
            type: String,
            default: ""
        },
        nextIcon: {
            type: d,
            default: () => o
        },
        teleported: {
            type: Boolean,
            default: !0
        },
        small: Boolean,
        size: m,
        background: Boolean,
        disabled: Boolean,
        hideOnSinglePage: Boolean,
        appendSizeTo: String
    }),
    me = "ElPagination";
const fe = p(x({
    name: me,
    props: be,
    emits: {
        "update:current-page": e => s(e),
        "update:page-size": e => s(e),
        "size-change": e => s(e),
        change: (e, a) => s(e) && s(a),
        "current-change": e => s(e),
        "prev-click": e => s(e),
        "next-click": e => s(e)
    },
    setup(e, {
        emit: a,
        slots: t
    }) {
        const {
            t: n
        } = c(), l = E("pagination"), i = K().vnode.props || {}, r = f(), s = y((() => {
            var a;
            return e.small ? "small" : null != (a = e.size) ? a : r.value
        }));
        C({
            from: "small",
            replacement: "size",
            version: "3.0.0",
            scope: "el-pagination",
            ref: "https://element-plus.org/zh-CN/component/pagination.html"
        }, y((() => !!e.small)));
        const u = "onUpdate:currentPage" in i || "onUpdate:current-page" in i || "onCurrentChange" in i,
            o = "onUpdate:pageSize" in i || "onUpdate:page-size" in i || "onSizeChange" in i,
            p = y((() => {
                if (ve(e.total) && ve(e.pageCount)) return !1;
                if (!ve(e.currentPage) && !u) return !1;
                if (e.layout.includes("sizes"))
                    if (ve(e.pageCount)) {
                        if (!ve(e.total) && !ve(e.pageSize) && !o) return !1
                    } else if (!o) return !1;
                return !0
            })),
            d = _(ve(e.defaultPageSize) ? 10 : e.defaultPageSize),
            v = _(ve(e.defaultCurrentPage) ? 1 : e.defaultCurrentPage),
            b = y({
                get: () => ve(e.pageSize) ? d.value : e.pageSize,
                set(t) {
                    ve(e.pageSize) && (d.value = t), o && (a("update:page-size", t), a("size-change", t))
                }
            }),
            m = y((() => {
                let a = 0;
                return ve(e.pageCount) ? ve(e.total) || (a = Math.max(1, Math.ceil(e.total / b.value))) : a = e.pageCount, a
            })),
            x = y({
                get: () => ve(e.currentPage) ? v.value : e.currentPage,
                set(t) {
                    let n = t;
                    t < 1 ? n = 1 : t > m.value && (n = m.value), ve(e.currentPage) && (v.value = n), u && (a("update:current-page", n), a("current-change", n))
                }
            });

        function z(e) {
            x.value = e
        }

        function P() {
            e.disabled || (x.value -= 1, a("prev-click", x.value))
        }

        function h() {
            e.disabled || (x.value += 1, a("next-click", x.value))
        }

        function S(e, a) {
            e && (e.props || (e.props = {}), e.props.class = [e.props.class, a].join(" "))
        }
        return j(m, (e => {
            x.value > e && (x.value = e)
        })), j([x, b], (e => {
            a("change", ...e)
        }), {
            flush: "post"
        }), O(R, {
            pageCount: m,
            disabled: y((() => e.disabled)),
            currentPage: x,
            changeEvent: z,
            handleSizeChange: function(e) {
                b.value = e;
                const a = m.value;
                x.value > a && (x.value = a)
            }
        }), () => {
            var a, i;
            if (!p.value) return g(me, n("el.pagination.deprecationWarning")), null;
            if (!e.layout) return null;
            if (e.hideOnSinglePage && m.value <= 1) return null;
            const r = [],
                u = [],
                o = Q("div", {
                    class: l.e("rightwrapper")
                }, u),
                d = {
                    prev: Q(G, {
                        disabled: e.disabled,
                        currentPage: x.value,
                        prevText: e.prevText,
                        prevIcon: e.prevIcon,
                        onClick: P
                    }),
                    jumper: Q(se, {
                        size: s.value
                    }),
                    pager: Q(ce, {
                        currentPage: x.value,
                        pageCount: m.value,
                        pagerCount: e.pagerCount,
                        onChange: z,
                        disabled: e.disabled
                    }),
                    next: Q(ee, {
                        disabled: e.disabled,
                        currentPage: x.value,
                        pageCount: m.value,
                        nextText: e.nextText,
                        nextIcon: e.nextIcon,
                        onClick: h
                    }),
                    sizes: Q(le, {
                        pageSize: b.value,
                        pageSizes: e.pageSizes,
                        popperClass: e.popperClass,
                        disabled: e.disabled,
                        teleported: e.teleported,
                        size: s.value,
                        appendSizeTo: e.appendSizeTo
                    }),
                    slot: null != (i = null == (a = null == t ? void 0 : t.default) ? void 0 : a.call(t)) ? i : null,
                    total: Q(pe, {
                        total: ve(e.total) ? 0 : e.total
                    })
                },
                c = e.layout.split(",").map((e => e.trim()));
            let v = !1;
            return c.forEach((e => {
                "->" !== e ? v ? u.push(d[e]) : r.push(d[e]) : v = !0
            })), S(r[0], l.is("first")), S(r[r.length - 1], l.is("last")), v && u.length > 0 && (S(u[0], l.is("first")), S(u[u.length - 1], l.is("last")), r.push(o)), Q("div", {
                class: [l.b(), l.is("background", e.background), l.m(s.value)]
            }, r)
        }
    }
}));
export {
    fe as E
};