var t, i, e, s, n, r, l, a, o, u, h = Object.defineProperty, c = t => {
    throw TypeError(t)
}
, f = (t, i, e) => ( (t, i, e) => i in t ? h(t, i, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: e
}) : t[i] = e)(t, "symbol" != typeof i ? i + "" : i, e), d = (t, i, e) => i.has(t) || c("Cannot " + e), m = (t, i, e) => (d(t, i, "read from private field"),
e ? e.call(t) : i.get(t)), g = (t, i, e) => i.has(t) ? c("Cannot add the same private member more than once") : i instanceof WeakSet ? i.add(t) : i.set(t, e), v = (t, i, e, s) => (d(t, i, "write to private field"),
s ? s.call(t, e) : i.set(t, e),
e), p = (t, i, e) => (d(t, i, "access private method"),
e);
import {a as b, d as w, b as U, c as S, g as y, e as x, t as I, f as F, h as N, m as M} from "./provider-browser-D4UahRA7.js";
const _ = BigInt(-1)
  , C = BigInt(0)
  , B = BigInt(1)
  , E = BigInt(5)
  , T = {};
let A = "0000";
for (; A.length < 80; )
    A += A;
function L(t) {
    let i = A;
    for (; i.length < t; )
        i += i;
    return BigInt("1" + i.substring(0, t))
}
function R(t, i, e) {
    const s = BigInt(i.width);
    if (i.signed) {
        const i = B << s - B;
        S(null == e || t >= -i && t < i, "overflow", "NUMERIC_FAULT", {
            operation: e,
            fault: "overflow",
            value: t
        }),
        t = t > C ? N(M(t, s), s) : -N(M(-t, s), s)
    } else {
        const i = B << s;
        S(null == e || t >= 0 && t < i, "overflow", "NUMERIC_FAULT", {
            operation: e,
            fault: "overflow",
            value: t
        }),
        t = (t % i + i) % i & i - B
    }
    return t
}
function k(t) {
    "number" == typeof t && (t = `fixed128x${t}`);
    let i = !0
      , e = 128
      , s = 18;
    if ("string" == typeof t)
        if ("fixed" === t)
            ;
        else if ("ufixed" === t)
            i = !1;
        else {
            const n = t.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);
            U(n, "invalid fixed format", "format", t),
            i = "u" !== n[1],
            e = parseInt(n[2]),
            s = parseInt(n[3])
        }
    else if (t) {
        const n = t
          , r = (t, i, e) => null == n[t] ? e : (U(typeof n[t] === i, "invalid fixed format (" + t + " not " + i + ")", "format." + t, n[t]),
        n[t]);
        i = r("signed", "boolean", i),
        e = r("width", "number", e),
        s = r("decimals", "number", s)
    }
    U(e % 8 == 0, "invalid FixedNumber width (not byte aligned)", "format.width", e),
    U(s <= 80, "invalid FixedNumber decimals (too large)", "format.decimals", s);
    return {
        signed: i,
        width: e,
        decimals: s,
        name: (i ? "" : "u") + "fixed" + String(e) + "x" + String(s)
    }
}
const z = class h {
    constructor(n, r, l) {
        g(this, s),
        f(this, "format"),
        g(this, t),
        g(this, i),
        g(this, e),
        f(this, "_value"),
        b(n, T, "FixedNumber"),
        v(this, i, r),
        v(this, t, l);
        const a = function(t, i) {
            let e = "";
            t < C && (e = "-",
            t *= _);
            let s = t.toString();
            if (0 === i)
                return e + s;
            for (; s.length <= i; )
                s = A + s;
            const n = s.length - i;
            for (s = s.substring(0, n) + "." + s.substring(n); "0" === s[0] && "." !== s[1]; )
                s = s.substring(1);
            for (; "0" === s[s.length - 1] && "." !== s[s.length - 2]; )
                s = s.substring(0, s.length - 1);
            return e + s
        }(r, l.decimals);
        w(this, {
            format: l.name,
            _value: a
        }),
        v(this, e, L(l.decimals))
    }
    get signed() {
        return m(this, t).signed
    }
    get width() {
        return m(this, t).width
    }
    get decimals() {
        return m(this, t).decimals
    }
    get value() {
        return m(this, i)
    }
    addUnsafe(t) {
        return p(this, s, l).call(this, t)
    }
    add(t) {
        return p(this, s, l).call(this, t, "add")
    }
    subUnsafe(t) {
        return p(this, s, a).call(this, t)
    }
    sub(t) {
        return p(this, s, a).call(this, t, "sub")
    }
    mulUnsafe(t) {
        return p(this, s, o).call(this, t)
    }
    mul(t) {
        return p(this, s, o).call(this, t, "mul")
    }
    mulSignal(t) {
        p(this, s, n).call(this, t);
        const l = m(this, i) * m(t, i);
        return S(l % m(this, e) === C, "precision lost during signalling mul", "NUMERIC_FAULT", {
            operation: "mulSignal",
            fault: "underflow",
            value: this
        }),
        p(this, s, r).call(this, l / m(this, e), "mulSignal")
    }
    divUnsafe(t) {
        return p(this, s, u).call(this, t)
    }
    div(t) {
        return p(this, s, u).call(this, t, "div")
    }
    divSignal(t) {
        S(m(t, i) !== C, "division by zero", "NUMERIC_FAULT", {
            operation: "div",
            fault: "divide-by-zero",
            value: this
        }),
        p(this, s, n).call(this, t);
        const l = m(this, i) * m(this, e);
        return S(l % m(t, i) === C, "precision lost during signalling div", "NUMERIC_FAULT", {
            operation: "divSignal",
            fault: "underflow",
            value: this
        }),
        p(this, s, r).call(this, l / m(t, i), "divSignal")
    }
    cmp(t) {
        let i = this.value
          , e = t.value;
        const s = this.decimals - t.decimals;
        return s > 0 ? e *= L(s) : s < 0 && (i *= L(-s)),
        i < e ? -1 : i > e ? 1 : 0
    }
    eq(t) {
        return 0 === this.cmp(t)
    }
    lt(t) {
        return this.cmp(t) < 0
    }
    lte(t) {
        return this.cmp(t) <= 0
    }
    gt(t) {
        return this.cmp(t) > 0
    }
    gte(t) {
        return this.cmp(t) >= 0
    }
    floor() {
        let t = m(this, i);
        return m(this, i) < C && (t -= m(this, e) - B),
        t = m(this, i) / m(this, e) * m(this, e),
        p(this, s, r).call(this, t, "floor")
    }
    ceiling() {
        let t = m(this, i);
        return m(this, i) > C && (t += m(this, e) - B),
        t = m(this, i) / m(this, e) * m(this, e),
        p(this, s, r).call(this, t, "ceiling")
    }
    round(i) {
        if (null == i && (i = 0),
        i >= this.decimals)
            return this;
        const e = this.decimals - i
          , s = E * L(e - 1);
        let n = this.value + s;
        const r = L(e);
        return n = n / r * r,
        R(n, m(this, t), "round"),
        new h(T,n,m(this, t))
    }
    isZero() {
        return m(this, i) === C
    }
    isNegative() {
        return m(this, i) < C
    }
    toString() {
        return this._value
    }
    toUnsafeFloat() {
        return parseFloat(this.toString())
    }
    toFormat(t) {
        return h.fromString(this.toString(), t)
    }
    static fromValue(t, i, e) {
        const s = null == i ? 0 : y(i)
          , n = k(e);
        let r = x(t, "value");
        const l = s - n.decimals;
        if (l > 0) {
            const i = L(l);
            S(r % i === C, "value loses precision for format", "NUMERIC_FAULT", {
                operation: "fromValue",
                fault: "underflow",
                value: t
            }),
            r /= i
        } else
            l < 0 && (r *= L(-l));
        return R(r, n, "fromValue"),
        new h(T,r,n)
    }
    static fromString(t, i) {
        const e = t.match(/^(-?)([0-9]*)\.?([0-9]*)$/);
        U(e && e[2].length + e[3].length > 0, "invalid FixedNumber string value", "value", t);
        const s = k(i);
        let n = e[2] || "0"
          , r = e[3] || "";
        for (; r.length < s.decimals; )
            r += A;
        S(r.substring(s.decimals).match(/^0*$/), "too many decimals for format", "NUMERIC_FAULT", {
            operation: "fromString",
            fault: "underflow",
            value: t
        }),
        r = r.substring(0, s.decimals);
        const l = BigInt(e[1] + n + r);
        return R(l, s, "fromString"),
        new h(T,l,s)
    }
    static fromBytes(t, i) {
        let e = I(F(t, "value"));
        const s = k(i);
        return s.signed && (e = N(e, s.width)),
        R(e, s, "fromBytes"),
        new h(T,e,s)
    }
}
;
t = new WeakMap,
i = new WeakMap,
e = new WeakMap,
s = new WeakSet,
n = function(t) {
    U(this.format === t.format, "incompatible format; use fixedNumber.toFormat", "other", t)
}
,
r = function(i, e) {
    return i = R(i, m(this, t), e),
    new z(T,i,m(this, t))
}
,
l = function(t, e) {
    return p(this, s, n).call(this, t),
    p(this, s, r).call(this, m(this, i) + m(t, i), e)
}
,
a = function(t, e) {
    return p(this, s, n).call(this, t),
    p(this, s, r).call(this, m(this, i) - m(t, i), e)
}
,
o = function(t, l) {
    return p(this, s, n).call(this, t),
    p(this, s, r).call(this, m(this, i) * m(t, i) / m(this, e), l)
}
,
u = function(t, l) {
    return S(m(t, i) !== C, "division by zero", "NUMERIC_FAULT", {
        operation: "div",
        fault: "divide-by-zero",
        value: this
    }),
    p(this, s, n).call(this, t),
    p(this, s, r).call(this, m(this, i) * m(this, e) / m(t, i), l)
}
;
let W = z;
const $ = ["wei", "kwei", "mwei", "gwei", "szabo", "finney", "ether"];
function V(t, i) {
    U("string" == typeof t, "value must be a string", "value", t);
    let e = 18;
    if ("string" == typeof i) {
        const t = $.indexOf(i);
        U(t >= 0, "invalid unit", "unit", i),
        e = 3 * t
    } else
        null != i && (e = y(i, "unit"));
    return W.fromString(t, {
        decimals: e,
        width: 512
    }).value
}
export {V as p};
