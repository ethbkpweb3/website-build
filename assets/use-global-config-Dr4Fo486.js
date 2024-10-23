import {
    y as e,
    F as a,
    Q as l,
    h as n,
    be as u,
    bf as s,
    X as r,
    bg as o,
    L as v
} from "./index-N2rhOp93.js";
import {
    u as t,
    l as i,
    S as d,
    e as c,
    k as m
} from "./index-B6QNixY4.js";
import {
    u as f,
    d as p,
    z
} from "./index-jFhAlE56.js";
const x = Symbol(),
    b = e();

function y(e, u = void 0) {
    const s = a() ? l(x, b) : b;
    return e ? n((() => {
        var a, l;
        return null != (l = null == (a = s.value) ? void 0 : a[e]) ? l : u
    })) : s
}

function j(e, a) {
    const l = y(),
        o = u(e, n((() => {
            var e;
            return (null == (e = l.value) ? void 0 : e.namespace) || s
        }))),
        v = t(n((() => {
            var e;
            return null == (e = l.value) ? void 0 : e.locale
        }))),
        i = f(n((() => {
            var e;
            return (null == (e = l.value) ? void 0 : e.zIndex) || p
        }))),
        d = n((() => {
            var e;
            return r(a) || (null == (e = l.value) ? void 0 : e.size) || ""
        }));
    return I(n((() => r(l) || {}))), {
        ns: o,
        locale: v,
        zIndex: i,
        size: d
    }
}
const I = (e, l, u = !1) => {
        const s = !!a(),
            t = s ? y() : void 0,
            m = null != void 0 ? undefined : s ? v : void 0;
        if (!m) return;
        const f = n((() => {
            const a = r(e);
            return (null == t ? void 0 : t.value) ? S(t.value, a) : a
        }));
        return m(x, f), m(i, n((() => f.value.locale))), m(o, n((() => f.value.namespace))), m(z, n((() => f.value.zIndex))), m(d, {
            size: n((() => f.value.size || ""))
        }), m(c, n((() => ({
            emptyValues: f.value.emptyValues,
            valueOnClear: f.value.valueOnClear
        })))), !u && b.value || (b.value = f.value), f
    },
    S = (e, a) => {
        const l = [...new Set([...m(e), ...m(a)])],
            n = {};
        for (const u of l) n[u] = void 0 !== a[u] ? a[u] : e[u];
        return n
    };
export {
    j as a, y as u
};