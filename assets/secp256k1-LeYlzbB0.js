import {H as t, h as e, t as r, e as n, b as i, c as o, r as s, s as f} from "./sha256-o0pdH_sn.js";
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const a = BigInt(0)
  , u = BigInt(1)
  , c = BigInt(2)
  , l = t => t instanceof Uint8Array
  , h = Array.from({
    length: 256
}, ( (t, e) => e.toString(16).padStart(2, "0")));
function d(t) {
    if (!l(t))
        throw new Error("Uint8Array expected");
    let e = "";
    for (let r = 0; r < t.length; r++)
        e += h[t[r]];
    return e
}
function g(t) {
    const e = t.toString(16);
    return 1 & e.length ? `0${e}` : e
}
function w(t) {
    if ("string" != typeof t)
        throw new Error("hex string expected, got " + typeof t);
    return BigInt("" === t ? "0" : `0x${t}`)
}
function p(t) {
    if ("string" != typeof t)
        throw new Error("hex string expected, got " + typeof t);
    const e = t.length;
    if (e % 2)
        throw new Error("padded hex string expected, got unpadded hex of length " + e);
    const r = new Uint8Array(e / 2);
    for (let n = 0; n < r.length; n++) {
        const e = 2 * n
          , i = t.slice(e, e + 2)
          , o = Number.parseInt(i, 16);
        if (Number.isNaN(o) || o < 0)
            throw new Error("Invalid byte sequence");
        r[n] = o
    }
    return r
}
function y(t) {
    return w(d(t))
}
function m(t) {
    if (!l(t))
        throw new Error("Uint8Array expected");
    return w(d(Uint8Array.from(t).reverse()))
}
function E(t, e) {
    return p(t.toString(16).padStart(2 * e, "0"))
}
function b(t, e) {
    return E(t, e).reverse()
}
function B(t, e, r) {
    let n;
    if ("string" == typeof e)
        try {
            n = p(e)
        } catch (o) {
            throw new Error(`${t} must be valid hex string, got "${e}". Cause: ${o}`)
        }
    else {
        if (!l(e))
            throw new Error(`${t} must be hex string or Uint8Array`);
        n = Uint8Array.from(e)
    }
    const i = n.length;
    if ("number" == typeof r && i !== r)
        throw new Error(`${t} expected ${r} bytes, got ${i}`);
    return n
}
function x(...t) {
    const e = new Uint8Array(t.reduce(( (t, e) => t + e.length), 0));
    let r = 0;
    return t.forEach((t => {
        if (!l(t))
            throw new Error("Uint8Array expected");
        e.set(t, r),
        r += t.length
    }
    )),
    e
}
function I(t, e) {
    if (t.length !== e.length)
        return !1;
    for (let r = 0; r < t.length; r++)
        if (t[r] !== e[r])
            return !1;
    return !0
}
const v = t => (c << BigInt(t - 1)) - u
  , S = t => new Uint8Array(t)
  , A = t => Uint8Array.from(t);
function O(t, e, r) {
    if ("number" != typeof t || t < 2)
        throw new Error("hashLen must be a number");
    if ("number" != typeof e || e < 2)
        throw new Error("qByteLen must be a number");
    if ("function" != typeof r)
        throw new Error("hmacFn must be a function");
    let n = S(t)
      , i = S(t)
      , o = 0;
    const s = () => {
        n.fill(1),
        i.fill(0),
        o = 0
    }
      , f = (...t) => r(i, n, ...t)
      , a = (t=S()) => {
        i = f(A([0]), t),
        n = f(),
        0 !== t.length && (i = f(A([1]), t),
        n = f())
    }
      , u = () => {
        if (o++ >= 1e3)
            throw new Error("drbg: tried 1000 values");
        let t = 0;
        const r = [];
        for (; t < e; ) {
            n = f();
            const e = n.slice();
            r.push(e),
            t += n.length
        }
        return x(...r)
    }
    ;
    return (t, e) => {
        let r;
        for (s(),
        a(t); !(r = e(u())); )
            a();
        return s(),
        r
    }
}
const q = {
    bigint: t => "bigint" == typeof t,
    function: t => "function" == typeof t,
    boolean: t => "boolean" == typeof t,
    string: t => "string" == typeof t,
    stringOrUint8Array: t => "string" == typeof t || t instanceof Uint8Array,
    isSafeInteger: t => Number.isSafeInteger(t),
    array: t => Array.isArray(t),
    field: (t, e) => e.Fp.isValid(t),
    hash: t => "function" == typeof t && Number.isSafeInteger(t.outputLen)
};
function R(t, e, r={}) {
    const n = (e, r, n) => {
        const i = q[r];
        if ("function" != typeof i)
            throw new Error(`Invalid validator "${r}", expected function`);
        const o = t[e];
        if (!(n && void 0 === o || i(o, t)))
            throw new Error(`Invalid param ${String(e)}=${o} (${typeof o}), expected ${r}`)
    }
    ;
    for (const [i,o] of Object.entries(e))
        n(i, o, !1);
    for (const [i,o] of Object.entries(r))
        n(i, o, !0);
    return t
}
const N = Object.freeze(Object.defineProperty({
    __proto__: null,
    bitGet: function(t, e) {
        return t >> BigInt(e) & u
    },
    bitLen: function(t) {
        let e;
        for (e = 0; t > a; t >>= u,
        e += 1)
            ;
        return e
    },
    bitMask: v,
    bitSet: (t, e, r) => t | (r ? u : a) << BigInt(e),
    bytesToHex: d,
    bytesToNumberBE: y,
    bytesToNumberLE: m,
    concatBytes: x,
    createHmacDrbg: O,
    ensureBytes: B,
    equalBytes: I,
    hexToBytes: p,
    hexToNumber: w,
    numberToBytesBE: E,
    numberToBytesLE: b,
    numberToHexUnpadded: g,
    numberToVarBytesBE: function(t) {
        return p(g(t))
    },
    utf8ToBytes: function(t) {
        if ("string" != typeof t)
            throw new Error("utf8ToBytes expected string, got " + typeof t);
        return new Uint8Array((new TextEncoder).encode(t))
    },
    validateObject: R
}, Symbol.toStringTag, {
    value: "Module"
}))
  , H = BigInt(0)
  , T = BigInt(1)
  , L = BigInt(2)
  , U = BigInt(3)
  , $ = BigInt(4)
  , z = BigInt(5)
  , P = BigInt(8);
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function F(t, e) {
    const r = t % e;
    return r >= H ? r : e + r
}
function Z(t, e, r) {
    if (r <= H || e < H)
        throw new Error("Expected power/modulo > 0");
    if (r === T)
        return H;
    let n = T;
    for (; e > H; )
        e & T && (n = n * t % r),
        t = t * t % r,
        e >>= T;
    return n
}
function k(t, e, r) {
    let n = t;
    for (; e-- > H; )
        n *= n,
        n %= r;
    return n
}
function j(t, e) {
    if (t === H || e <= H)
        throw new Error(`invert: expected positive integers, got n=${t} mod=${e}`);
    let r = F(t, e)
      , n = e
      , i = H
      , o = T;
    for (; r !== H; ) {
        const t = n % r
          , e = i - o * (n / r);
        n = r,
        r = t,
        i = o,
        o = e
    }
    if (n !== T)
        throw new Error("invert: does not exist");
    return F(i, e)
}
function C(t) {
    if (t % $ === U) {
        const e = (t + T) / $;
        return function(t, r) {
            const n = t.pow(r, e);
            if (!t.eql(t.sqr(n), r))
                throw new Error("Cannot find square root");
            return n
        }
    }
    if (t % P === z) {
        const e = (t - z) / P;
        return function(t, r) {
            const n = t.mul(r, L)
              , i = t.pow(n, e)
              , o = t.mul(r, i)
              , s = t.mul(t.mul(o, L), i)
              , f = t.mul(o, t.sub(s, t.ONE));
            if (!t.eql(t.sqr(f), r))
                throw new Error("Cannot find square root");
            return f
        }
    }
    return function(t) {
        const e = (t - T) / L;
        let r, n, i;
        for (r = t - T,
        n = 0; r % L === H; r /= L,
        n++)
            ;
        for (i = L; i < t && Z(i, e, t) !== t - T; i++)
            ;
        if (1 === n) {
            const e = (t + T) / $;
            return function(t, r) {
                const n = t.pow(r, e);
                if (!t.eql(t.sqr(n), r))
                    throw new Error("Cannot find square root");
                return n
            }
        }
        const o = (r + T) / L;
        return function(t, s) {
            if (t.pow(s, e) === t.neg(t.ONE))
                throw new Error("Cannot find square root");
            let f = n
              , a = t.pow(t.mul(t.ONE, i), r)
              , u = t.pow(s, o)
              , c = t.pow(s, r);
            for (; !t.eql(c, t.ONE); ) {
                if (t.eql(c, t.ZERO))
                    return t.ZERO;
                let e = 1;
                for (let n = t.sqr(c); e < f && !t.eql(n, t.ONE); e++)
                    n = t.sqr(n);
                const r = t.pow(a, T << BigInt(f - e - 1));
                a = t.sqr(r),
                u = t.mul(u, r),
                c = t.mul(c, a),
                f = e
            }
            return u
        }
    }(t)
}
BigInt(9),
BigInt(16);
const V = ["create", "isValid", "is0", "neg", "inv", "sqrt", "sqr", "eql", "add", "sub", "mul", "pow", "div", "addN", "subN", "mulN", "sqrN"];
function _(t, e) {
    const r = void 0 !== e ? e : t.toString(2).length;
    return {
        nBitLength: r,
        nByteLength: Math.ceil(r / 8)
    }
}
function K(t) {
    if ("bigint" != typeof t)
        throw new Error("field order must be bigint");
    const e = t.toString(2).length;
    return Math.ceil(e / 8)
}
function D(t) {
    const e = K(t);
    return e + Math.ceil(e / 2)
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const Y = BigInt(0)
  , M = BigInt(1);
function W(t) {
    return R(t.Fp, V.reduce(( (t, e) => (t[e] = "function",
    t)), {
        ORDER: "bigint",
        MASK: "bigint",
        BYTES: "isSafeInteger",
        BITS: "isSafeInteger"
    })),
    R(t, {
        n: "bigint",
        h: "bigint",
        Gx: "field",
        Gy: "field"
    }, {
        nBitLength: "isSafeInteger",
        nByteLength: "isSafeInteger"
    }),
    Object.freeze({
        ..._(t.n, t.nBitLength),
        ...t,
        p: t.Fp.ORDER
    })
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const {bytesToNumberBE: G, hexToBytes: J} = N
  , Q = {
    Err: class extends Error {
        constructor(t="") {
            super(t)
        }
    }
    ,
    _parseInt(t) {
        const {Err: e} = Q;
        if (t.length < 2 || 2 !== t[0])
            throw new e("Invalid signature integer tag");
        const r = t[1]
          , n = t.subarray(2, r + 2);
        if (!r || n.length !== r)
            throw new e("Invalid signature integer: wrong length");
        if (128 & n[0])
            throw new e("Invalid signature integer: negative");
        if (0 === n[0] && !(128 & n[1]))
            throw new e("Invalid signature integer: unnecessary leading zero");
        return {
            d: G(n),
            l: t.subarray(r + 2)
        }
    },
    toSig(t) {
        const {Err: e} = Q
          , r = "string" == typeof t ? J(t) : t;
        if (!(r instanceof Uint8Array))
            throw new Error("ui8a expected");
        let n = r.length;
        if (n < 2 || 48 != r[0])
            throw new e("Invalid signature tag");
        if (r[1] !== n - 2)
            throw new e("Invalid signature: incorrect length");
        const {d: i, l: o} = Q._parseInt(r.subarray(2))
          , {d: s, l: f} = Q._parseInt(o);
        if (f.length)
            throw new e("Invalid signature: left bytes after parsing");
        return {
            r: i,
            s: s
        }
    },
    hexFromSig(t) {
        const e = t => 8 & Number.parseInt(t[0], 16) ? "00" + t : t
          , r = t => {
            const e = t.toString(16);
            return 1 & e.length ? `0${e}` : e
        }
          , n = e(r(t.s))
          , i = e(r(t.r))
          , o = n.length / 2
          , s = i.length / 2
          , f = r(o)
          , a = r(s);
        return `30${r(s + o + 4)}02${a}${i}02${f}${n}`
    }
}
  , X = BigInt(0)
  , tt = BigInt(1);
BigInt(2);
const et = BigInt(3);
function rt(t) {
    const e = function(t) {
        const e = W(t);
        R(e, {
            a: "field",
            b: "field"
        }, {
            allowedPrivateKeyLengths: "array",
            wrapPrivateKey: "boolean",
            isTorsionFree: "function",
            clearCofactor: "function",
            allowInfinityPoint: "boolean",
            fromBytes: "function",
            toBytes: "function"
        });
        const {endo: r, Fp: n, a: i} = e;
        if (r) {
            if (!n.eql(i, n.ZERO))
                throw new Error("Endomorphism can only be defined for Koblitz curves that have a=0");
            if ("object" != typeof r || "bigint" != typeof r.beta || "function" != typeof r.splitScalar)
                throw new Error("Expected endomorphism with beta: bigint and splitScalar: function")
        }
        return Object.freeze({
            ...e
        })
    }(t)
      , {Fp: r} = e
      , n = e.toBytes || ( (t, e, n) => {
        const i = e.toAffine();
        return x(Uint8Array.from([4]), r.toBytes(i.x), r.toBytes(i.y))
    }
    )
      , i = e.fromBytes || (t => {
        const e = t.subarray(1);
        return {
            x: r.fromBytes(e.subarray(0, r.BYTES)),
            y: r.fromBytes(e.subarray(r.BYTES, 2 * r.BYTES))
        }
    }
    );
    function o(t) {
        const {a: n, b: i} = e
          , o = r.sqr(t)
          , s = r.mul(o, t);
        return r.add(r.add(s, r.mul(t, n)), i)
    }
    if (!r.eql(r.sqr(e.Gy), o(e.Gx)))
        throw new Error("bad generator point: equation left != right");
    function s(t) {
        return "bigint" == typeof t && X < t && t < e.n
    }
    function f(t) {
        if (!s(t))
            throw new Error("Expected valid bigint: 0 < bigint < curve.n")
    }
    function a(t) {
        const {allowedPrivateKeyLengths: r, nByteLength: n, wrapPrivateKey: i, n: o} = e;
        if (r && "bigint" != typeof t) {
            if (t instanceof Uint8Array && (t = d(t)),
            "string" != typeof t || !r.includes(t.length))
                throw new Error("Invalid key");
            t = t.padStart(2 * n, "0")
        }
        let s;
        try {
            s = "bigint" == typeof t ? t : y(B("private key", t, n))
        } catch (a) {
            throw new Error(`private key must be ${n} bytes, hex or bigint, not ${typeof t}`)
        }
        return i && (s = F(s, o)),
        f(s),
        s
    }
    const u = new Map;
    function c(t) {
        if (!(t instanceof l))
            throw new Error("ProjectivePoint expected")
    }
    class l {
        constructor(t, e, n) {
            if (this.px = t,
            this.py = e,
            this.pz = n,
            null == t || !r.isValid(t))
                throw new Error("x required");
            if (null == e || !r.isValid(e))
                throw new Error("y required");
            if (null == n || !r.isValid(n))
                throw new Error("z required")
        }
        static fromAffine(t) {
            const {x: e, y: n} = t || {};
            if (!t || !r.isValid(e) || !r.isValid(n))
                throw new Error("invalid affine point");
            if (t instanceof l)
                throw new Error("projective point not allowed");
            const i = t => r.eql(t, r.ZERO);
            return i(e) && i(n) ? l.ZERO : new l(e,n,r.ONE)
        }
        get x() {
            return this.toAffine().x
        }
        get y() {
            return this.toAffine().y
        }
        static normalizeZ(t) {
            const e = r.invertBatch(t.map((t => t.pz)));
            return t.map(( (t, r) => t.toAffine(e[r]))).map(l.fromAffine)
        }
        static fromHex(t) {
            const e = l.fromAffine(i(B("pointHex", t)));
            return e.assertValidity(),
            e
        }
        static fromPrivateKey(t) {
            return l.BASE.multiply(a(t))
        }
        _setWindowSize(t) {
            this._WINDOW_SIZE = t,
            u.delete(this)
        }
        assertValidity() {
            if (this.is0()) {
                if (e.allowInfinityPoint && !r.is0(this.py))
                    return;
                throw new Error("bad point: ZERO")
            }
            const {x: t, y: n} = this.toAffine();
            if (!r.isValid(t) || !r.isValid(n))
                throw new Error("bad point: x or y not FE");
            const i = r.sqr(n)
              , s = o(t);
            if (!r.eql(i, s))
                throw new Error("bad point: equation left != right");
            if (!this.isTorsionFree())
                throw new Error("bad point: not in prime-order subgroup")
        }
        hasEvenY() {
            const {y: t} = this.toAffine();
            if (r.isOdd)
                return !r.isOdd(t);
            throw new Error("Field doesn't support isOdd")
        }
        equals(t) {
            c(t);
            const {px: e, py: n, pz: i} = this
              , {px: o, py: s, pz: f} = t
              , a = r.eql(r.mul(e, f), r.mul(o, i))
              , u = r.eql(r.mul(n, f), r.mul(s, i));
            return a && u
        }
        negate() {
            return new l(this.px,r.neg(this.py),this.pz)
        }
        double() {
            const {a: t, b: n} = e
              , i = r.mul(n, et)
              , {px: o, py: s, pz: f} = this;
            let a = r.ZERO
              , u = r.ZERO
              , c = r.ZERO
              , h = r.mul(o, o)
              , d = r.mul(s, s)
              , g = r.mul(f, f)
              , w = r.mul(o, s);
            return w = r.add(w, w),
            c = r.mul(o, f),
            c = r.add(c, c),
            a = r.mul(t, c),
            u = r.mul(i, g),
            u = r.add(a, u),
            a = r.sub(d, u),
            u = r.add(d, u),
            u = r.mul(a, u),
            a = r.mul(w, a),
            c = r.mul(i, c),
            g = r.mul(t, g),
            w = r.sub(h, g),
            w = r.mul(t, w),
            w = r.add(w, c),
            c = r.add(h, h),
            h = r.add(c, h),
            h = r.add(h, g),
            h = r.mul(h, w),
            u = r.add(u, h),
            g = r.mul(s, f),
            g = r.add(g, g),
            h = r.mul(g, w),
            a = r.sub(a, h),
            c = r.mul(g, d),
            c = r.add(c, c),
            c = r.add(c, c),
            new l(a,u,c)
        }
        add(t) {
            c(t);
            const {px: n, py: i, pz: o} = this
              , {px: s, py: f, pz: a} = t;
            let u = r.ZERO
              , h = r.ZERO
              , d = r.ZERO;
            const g = e.a
              , w = r.mul(e.b, et);
            let p = r.mul(n, s)
              , y = r.mul(i, f)
              , m = r.mul(o, a)
              , E = r.add(n, i)
              , b = r.add(s, f);
            E = r.mul(E, b),
            b = r.add(p, y),
            E = r.sub(E, b),
            b = r.add(n, o);
            let B = r.add(s, a);
            return b = r.mul(b, B),
            B = r.add(p, m),
            b = r.sub(b, B),
            B = r.add(i, o),
            u = r.add(f, a),
            B = r.mul(B, u),
            u = r.add(y, m),
            B = r.sub(B, u),
            d = r.mul(g, b),
            u = r.mul(w, m),
            d = r.add(u, d),
            u = r.sub(y, d),
            d = r.add(y, d),
            h = r.mul(u, d),
            y = r.add(p, p),
            y = r.add(y, p),
            m = r.mul(g, m),
            b = r.mul(w, b),
            y = r.add(y, m),
            m = r.sub(p, m),
            m = r.mul(g, m),
            b = r.add(b, m),
            p = r.mul(y, b),
            h = r.add(h, p),
            p = r.mul(B, b),
            u = r.mul(E, u),
            u = r.sub(u, p),
            p = r.mul(E, y),
            d = r.mul(B, d),
            d = r.add(d, p),
            new l(u,h,d)
        }
        subtract(t) {
            return this.add(t.negate())
        }
        is0() {
            return this.equals(l.ZERO)
        }
        wNAF(t) {
            return g.wNAFCached(this, u, t, (t => {
                const e = r.invertBatch(t.map((t => t.pz)));
                return t.map(( (t, r) => t.toAffine(e[r]))).map(l.fromAffine)
            }
            ))
        }
        multiplyUnsafe(t) {
            const n = l.ZERO;
            if (t === X)
                return n;
            if (f(t),
            t === tt)
                return this;
            const {endo: i} = e;
            if (!i)
                return g.unsafeLadder(this, t);
            let {k1neg: o, k1: s, k2neg: a, k2: u} = i.splitScalar(t)
              , c = n
              , h = n
              , d = this;
            for (; s > X || u > X; )
                s & tt && (c = c.add(d)),
                u & tt && (h = h.add(d)),
                d = d.double(),
                s >>= tt,
                u >>= tt;
            return o && (c = c.negate()),
            a && (h = h.negate()),
            h = new l(r.mul(h.px, i.beta),h.py,h.pz),
            c.add(h)
        }
        multiply(t) {
            f(t);
            let n, i, o = t;
            const {endo: s} = e;
            if (s) {
                const {k1neg: t, k1: e, k2neg: f, k2: a} = s.splitScalar(o);
                let {p: u, f: c} = this.wNAF(e)
                  , {p: h, f: d} = this.wNAF(a);
                u = g.constTimeNegate(t, u),
                h = g.constTimeNegate(f, h),
                h = new l(r.mul(h.px, s.beta),h.py,h.pz),
                n = u.add(h),
                i = c.add(d)
            } else {
                const {p: t, f: e} = this.wNAF(o);
                n = t,
                i = e
            }
            return l.normalizeZ([n, i])[0]
        }
        multiplyAndAddUnsafe(t, e, r) {
            const n = l.BASE
              , i = (t, e) => e !== X && e !== tt && t.equals(n) ? t.multiply(e) : t.multiplyUnsafe(e)
              , o = i(this, e).add(i(t, r));
            return o.is0() ? void 0 : o
        }
        toAffine(t) {
            const {px: e, py: n, pz: i} = this
              , o = this.is0();
            null == t && (t = o ? r.ONE : r.inv(i));
            const s = r.mul(e, t)
              , f = r.mul(n, t)
              , a = r.mul(i, t);
            if (o)
                return {
                    x: r.ZERO,
                    y: r.ZERO
                };
            if (!r.eql(a, r.ONE))
                throw new Error("invZ was invalid");
            return {
                x: s,
                y: f
            }
        }
        isTorsionFree() {
            const {h: t, isTorsionFree: r} = e;
            if (t === tt)
                return !0;
            if (r)
                return r(l, this);
            throw new Error("isTorsionFree() has not been declared for the elliptic curve")
        }
        clearCofactor() {
            const {h: t, clearCofactor: r} = e;
            return t === tt ? this : r ? r(l, this) : this.multiplyUnsafe(e.h)
        }
        toRawBytes(t=!0) {
            return this.assertValidity(),
            n(l, this, t)
        }
        toHex(t=!0) {
            return d(this.toRawBytes(t))
        }
    }
    l.BASE = new l(e.Gx,e.Gy,r.ONE),
    l.ZERO = new l(r.ZERO,r.ONE,r.ZERO);
    const h = e.nBitLength
      , g = function(t, e) {
        const r = (t, e) => {
            const r = e.negate();
            return t ? r : e
        }
          , n = t => ({
            windows: Math.ceil(e / t) + 1,
            windowSize: 2 ** (t - 1)
        });
        return {
            constTimeNegate: r,
            unsafeLadder(e, r) {
                let n = t.ZERO
                  , i = e;
                for (; r > Y; )
                    r & M && (n = n.add(i)),
                    i = i.double(),
                    r >>= M;
                return n
            },
            precomputeWindow(t, e) {
                const {windows: r, windowSize: i} = n(e)
                  , o = [];
                let s = t
                  , f = s;
                for (let n = 0; n < r; n++) {
                    f = s,
                    o.push(f);
                    for (let t = 1; t < i; t++)
                        f = f.add(s),
                        o.push(f);
                    s = f.double()
                }
                return o
            },
            wNAF(e, i, o) {
                const {windows: s, windowSize: f} = n(e);
                let a = t.ZERO
                  , u = t.BASE;
                const c = BigInt(2 ** e - 1)
                  , l = 2 ** e
                  , h = BigInt(e);
                for (let t = 0; t < s; t++) {
                    const e = t * f;
                    let n = Number(o & c);
                    o >>= h,
                    n > f && (n -= l,
                    o += M);
                    const s = e
                      , d = e + Math.abs(n) - 1
                      , g = t % 2 != 0
                      , w = n < 0;
                    0 === n ? u = u.add(r(g, i[s])) : a = a.add(r(w, i[d]))
                }
                return {
                    p: a,
                    f: u
                }
            },
            wNAFCached(t, e, r, n) {
                const i = t._WINDOW_SIZE || 1;
                let o = e.get(t);
                return o || (o = this.precomputeWindow(t, i),
                1 !== i && e.set(t, n(o))),
                this.wNAF(i, o, r)
            }
        }
    }(l, e.endo ? Math.ceil(h / 2) : h);
    return {
        CURVE: e,
        ProjectivePoint: l,
        normPrivateKeyToScalar: a,
        weierstrassEquation: o,
        isWithinCurveOrder: s
    }
}
function nt(t) {
    const e = function(t) {
        const e = W(t);
        return R(e, {
            hash: "hash",
            hmac: "function",
            randomBytes: "function"
        }, {
            bits2int: "function",
            bits2int_modN: "function",
            lowS: "boolean"
        }),
        Object.freeze({
            lowS: !0,
            ...e
        })
    }(t)
      , {Fp: r, n: n} = e
      , i = r.BYTES + 1
      , o = 2 * r.BYTES + 1;
    function s(t) {
        return F(t, n)
    }
    function f(t) {
        return j(t, n)
    }
    const {ProjectivePoint: a, normPrivateKeyToScalar: u, weierstrassEquation: c, isWithinCurveOrder: l} = rt({
        ...e,
        toBytes(t, e, n) {
            const i = e.toAffine()
              , o = r.toBytes(i.x)
              , s = x;
            return n ? s(Uint8Array.from([e.hasEvenY() ? 2 : 3]), o) : s(Uint8Array.from([4]), o, r.toBytes(i.y))
        },
        fromBytes(t) {
            const e = t.length
              , n = t[0]
              , s = t.subarray(1);
            if (e !== i || 2 !== n && 3 !== n) {
                if (e === o && 4 === n) {
                    return {
                        x: r.fromBytes(s.subarray(0, r.BYTES)),
                        y: r.fromBytes(s.subarray(r.BYTES, 2 * r.BYTES))
                    }
                }
                throw new Error(`Point of length ${e} was invalid. Expected ${i} compressed bytes or ${o} uncompressed bytes`)
            }
            {
                const t = y(s);
                if (!(X < (f = t) && f < r.ORDER))
                    throw new Error("Point is not on curve");
                const e = c(t);
                let i = r.sqrt(e);
                return !(1 & ~n) !== ((i & tt) === tt) && (i = r.neg(i)),
                {
                    x: t,
                    y: i
                }
            }
            var f
        }
    })
      , h = t => d(E(t, e.nByteLength));
    function g(t) {
        return t > n >> tt
    }
    const w = (t, e, r) => y(t.slice(e, r));
    class I {
        constructor(t, e, r) {
            this.r = t,
            this.s = e,
            this.recovery = r,
            this.assertValidity()
        }
        static fromCompact(t) {
            const r = e.nByteLength;
            return t = B("compactSignature", t, 2 * r),
            new I(w(t, 0, r),w(t, r, 2 * r))
        }
        static fromDER(t) {
            const {r: e, s: r} = Q.toSig(B("DER", t));
            return new I(e,r)
        }
        assertValidity() {
            if (!l(this.r))
                throw new Error("r must be 0 < r < CURVE.n");
            if (!l(this.s))
                throw new Error("s must be 0 < s < CURVE.n")
        }
        addRecoveryBit(t) {
            return new I(this.r,this.s,t)
        }
        recoverPublicKey(t) {
            const {r: n, s: i, recovery: o} = this
              , u = N(B("msgHash", t));
            if (null == o || ![0, 1, 2, 3].includes(o))
                throw new Error("recovery id invalid");
            const c = 2 === o || 3 === o ? n + e.n : n;
            if (c >= r.ORDER)
                throw new Error("recovery id 2 or 3 invalid");
            const l = 1 & o ? "03" : "02"
              , d = a.fromHex(l + h(c))
              , g = f(c)
              , w = s(-u * g)
              , p = s(i * g)
              , y = a.BASE.multiplyAndAddUnsafe(d, w, p);
            if (!y)
                throw new Error("point at infinify");
            return y.assertValidity(),
            y
        }
        hasHighS() {
            return g(this.s)
        }
        normalizeS() {
            return this.hasHighS() ? new I(this.r,s(-this.s),this.recovery) : this
        }
        toDERRawBytes() {
            return p(this.toDERHex())
        }
        toDERHex() {
            return Q.hexFromSig({
                r: this.r,
                s: this.s
            })
        }
        toCompactRawBytes() {
            return p(this.toCompactHex())
        }
        toCompactHex() {
            return h(this.r) + h(this.s)
        }
    }
    const S = {
        isValidPrivateKey(t) {
            try {
                return u(t),
                !0
            } catch (e) {
                return !1
            }
        },
        normPrivateKeyToScalar: u,
        randomPrivateKey: () => {
            const t = D(e.n);
            return function(t, e, r=!1) {
                const n = t.length
                  , i = K(e)
                  , o = D(e);
                if (n < 16 || n < o || n > 1024)
                    throw new Error(`expected ${o}-1024 bytes of input, got ${n}`);
                const s = F(r ? y(t) : m(t), e - T) + T;
                return r ? b(s, i) : E(s, i)
            }(e.randomBytes(t), e.n)
        }
        ,
        precompute: (t=8, e=a.BASE) => (e._setWindowSize(t),
        e.multiply(BigInt(3)),
        e)
    };
    function A(t) {
        const e = t instanceof Uint8Array
          , r = "string" == typeof t
          , n = (e || r) && t.length;
        return e ? n === i || n === o : r ? n === 2 * i || n === 2 * o : t instanceof a
    }
    const q = e.bits2int || function(t) {
        const r = y(t)
          , n = 8 * t.length - e.nBitLength;
        return n > 0 ? r >> BigInt(n) : r
    }
      , N = e.bits2int_modN || function(t) {
        return s(q(t))
    }
      , H = v(e.nBitLength);
    function L(t) {
        if ("bigint" != typeof t)
            throw new Error("bigint expected");
        if (!(X <= t && t < H))
            throw new Error(`bigint expected < 2^${e.nBitLength}`);
        return E(t, e.nByteLength)
    }
    function U(t, n, i=$) {
        if (["recovered", "canonical"].some((t => t in i)))
            throw new Error("sign() legacy options not supported");
        const {hash: o, randomBytes: c} = e;
        let {lowS: h, prehash: d, extraEntropy: w} = i;
        null == h && (h = !0),
        t = B("msgHash", t),
        d && (t = B("prehashed msgHash", o(t)));
        const p = N(t)
          , y = u(n)
          , m = [L(y), L(p)];
        if (null != w) {
            const t = !0 === w ? c(r.BYTES) : w;
            m.push(B("extraEntropy", t))
        }
        const E = x(...m)
          , b = p;
        return {
            seed: E,
            k2sig: function(t) {
                const e = q(t);
                if (!l(e))
                    return;
                const r = f(e)
                  , n = a.BASE.multiply(e).toAffine()
                  , i = s(n.x);
                if (i === X)
                    return;
                const o = s(r * s(b + i * y));
                if (o === X)
                    return;
                let u = (n.x === i ? 0 : 2) | Number(n.y & tt)
                  , c = o;
                return h && g(o) && (c = function(t) {
                    return g(t) ? s(-t) : t
                }(o),
                u ^= 1),
                new I(i,c,u)
            }
        }
    }
    const $ = {
        lowS: e.lowS,
        prehash: !1
    }
      , z = {
        lowS: e.lowS,
        prehash: !1
    };
    return a.BASE._setWindowSize(8),
    {
        CURVE: e,
        getPublicKey: function(t, e=!0) {
            return a.fromPrivateKey(t).toRawBytes(e)
        },
        getSharedSecret: function(t, e, r=!0) {
            if (A(t))
                throw new Error("first arg must be private key");
            if (!A(e))
                throw new Error("second arg must be public key");
            return a.fromHex(e).multiply(u(t)).toRawBytes(r)
        },
        sign: function(t, r, n=$) {
            const {seed: i, k2sig: o} = U(t, r, n)
              , s = e;
            return O(s.hash.outputLen, s.nByteLength, s.hmac)(i, o)
        },
        verify: function(t, r, n, i=z) {
            var o;
            const u = t;
            if (r = B("msgHash", r),
            n = B("publicKey", n),
            "strict"in i)
                throw new Error("options.strict was renamed to lowS");
            const {lowS: c, prehash: l} = i;
            let h, d;
            try {
                if ("string" == typeof u || u instanceof Uint8Array)
                    try {
                        h = I.fromDER(u)
                    } catch (x) {
                        if (!(x instanceof Q.Err))
                            throw x;
                        h = I.fromCompact(u)
                    }
                else {
                    if ("object" != typeof u || "bigint" != typeof u.r || "bigint" != typeof u.s)
                        throw new Error("PARSE");
                    {
                        const {r: t, s: e} = u;
                        h = new I(t,e)
                    }
                }
                d = a.fromHex(n)
            } catch (v) {
                if ("PARSE" === v.message)
                    throw new Error("signature must be Signature instance, Uint8Array or hex string");
                return !1
            }
            if (c && h.hasHighS())
                return !1;
            l && (r = e.hash(r));
            const {r: g, s: w} = h
              , p = N(r)
              , y = f(w)
              , m = s(p * y)
              , E = s(g * y)
              , b = null == (o = a.BASE.multiplyAndAddUnsafe(d, m, E)) ? void 0 : o.toAffine();
            return !!b && s(b.x) === g
        },
        ProjectivePoint: a,
        Signature: I,
        utils: S
    }
}
BigInt(4);
class it extends t {
    constructor(t, n) {
        super(),
        this.finished = !1,
        this.destroyed = !1,
        e(t);
        const i = r(n);
        if (this.iHash = t.create(),
        "function" != typeof this.iHash.update)
            throw new Error("Expected instance of class which extends utils.Hash");
        this.blockLen = this.iHash.blockLen,
        this.outputLen = this.iHash.outputLen;
        const o = this.blockLen
          , s = new Uint8Array(o);
        s.set(i.length > o ? t.create().update(i).digest() : i);
        for (let e = 0; e < s.length; e++)
            s[e] ^= 54;
        this.iHash.update(s),
        this.oHash = t.create();
        for (let e = 0; e < s.length; e++)
            s[e] ^= 106;
        this.oHash.update(s),
        s.fill(0)
    }
    update(t) {
        return n(this),
        this.iHash.update(t),
        this
    }
    digestInto(t) {
        n(this),
        i(t, this.outputLen),
        this.finished = !0,
        this.iHash.digestInto(t),
        this.oHash.update(t),
        this.oHash.digestInto(t),
        this.destroy()
    }
    digest() {
        const t = new Uint8Array(this.oHash.outputLen);
        return this.digestInto(t),
        t
    }
    _cloneInto(t) {
        t || (t = Object.create(Object.getPrototypeOf(this), {}));
        const {oHash: e, iHash: r, finished: n, destroyed: i, blockLen: o, outputLen: s} = this;
        return t.finished = n,
        t.destroyed = i,
        t.blockLen = o,
        t.outputLen = s,
        t.oHash = e._cloneInto(t.oHash),
        t.iHash = r._cloneInto(t.iHash),
        t
    }
    destroy() {
        this.destroyed = !0,
        this.oHash.destroy(),
        this.iHash.destroy()
    }
}
const ot = (t, e, r) => new it(t,e).update(r).digest();
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function st(t) {
    return {
        hash: t,
        hmac: (e, ...r) => ot(t, e, o(...r)),
        randomBytes: s
    }
}
ot.create = (t, e) => new it(t,e);
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const ft = BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f")
  , at = BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141")
  , ut = BigInt(1)
  , ct = BigInt(2)
  , lt = (t, e) => (t + e / ct) / e;
const ht = function(t, e, r=!1, n={}) {
    if (t <= H)
        throw new Error(`Expected Field ORDER > 0, got ${t}`);
    const {nBitLength: i, nByteLength: o} = _(t, e);
    if (o > 2048)
        throw new Error("Field lengths over 2048 bytes are not supported");
    const s = C(t)
      , f = Object.freeze({
        ORDER: t,
        BITS: i,
        BYTES: o,
        MASK: v(i),
        ZERO: H,
        ONE: T,
        create: e => F(e, t),
        isValid: e => {
            if ("bigint" != typeof e)
                throw new Error("Invalid field element: expected bigint, got " + typeof e);
            return H <= e && e < t
        }
        ,
        is0: t => t === H,
        isOdd: t => (t & T) === T,
        neg: e => F(-e, t),
        eql: (t, e) => t === e,
        sqr: e => F(e * e, t),
        add: (e, r) => F(e + r, t),
        sub: (e, r) => F(e - r, t),
        mul: (e, r) => F(e * r, t),
        pow: (t, e) => function(t, e, r) {
            if (r < H)
                throw new Error("Expected power > 0");
            if (r === H)
                return t.ONE;
            if (r === T)
                return e;
            let n = t.ONE
              , i = e;
            for (; r > H; )
                r & T && (n = t.mul(n, i)),
                i = t.sqr(i),
                r >>= T;
            return n
        }(f, t, e),
        div: (e, r) => F(e * j(r, t), t),
        sqrN: t => t * t,
        addN: (t, e) => t + e,
        subN: (t, e) => t - e,
        mulN: (t, e) => t * e,
        inv: e => j(e, t),
        sqrt: n.sqrt || (t => s(f, t)),
        invertBatch: t => function(t, e) {
            const r = new Array(e.length)
              , n = e.reduce(( (e, n, i) => t.is0(n) ? e : (r[i] = e,
            t.mul(e, n))), t.ONE)
              , i = t.inv(n);
            return e.reduceRight(( (e, n, i) => t.is0(n) ? e : (r[i] = t.mul(e, r[i]),
            t.mul(e, n))), i),
            r
        }(f, t),
        cmov: (t, e, r) => r ? e : t,
        toBytes: t => r ? b(t, o) : E(t, o),
        fromBytes: t => {
            if (t.length !== o)
                throw new Error(`Fp.fromBytes: expected ${o}, got ${t.length}`);
            return r ? m(t) : y(t)
        }
    });
    return Object.freeze(f)
}(ft, void 0, void 0, {
    sqrt: function(t) {
        const e = ft
          , r = BigInt(3)
          , n = BigInt(6)
          , i = BigInt(11)
          , o = BigInt(22)
          , s = BigInt(23)
          , f = BigInt(44)
          , a = BigInt(88)
          , u = t * t * t % e
          , c = u * u * t % e
          , l = k(c, r, e) * c % e
          , h = k(l, r, e) * c % e
          , d = k(h, ct, e) * u % e
          , g = k(d, i, e) * d % e
          , w = k(g, o, e) * g % e
          , p = k(w, f, e) * w % e
          , y = k(p, a, e) * p % e
          , m = k(y, f, e) * w % e
          , E = k(m, r, e) * c % e
          , b = k(E, s, e) * g % e
          , B = k(b, n, e) * u % e
          , x = k(B, ct, e);
        if (!ht.eql(ht.sqr(x), t))
            throw new Error("Cannot find square root");
        return x
    }
})
  , dt = function(t, e) {
    const r = e => nt({
        ...t,
        ...st(e)
    });
    return Object.freeze({
        ...r(e),
        create: r
    })
}({
    a: BigInt(0),
    b: BigInt(7),
    Fp: ht,
    n: at,
    Gx: BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),
    Gy: BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),
    h: BigInt(1),
    lowS: !0,
    endo: {
        beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),
        splitScalar: t => {
            const e = at
              , r = BigInt("0x3086d221a7d46bcde86c90e49284eb15")
              , n = -ut * BigInt("0xe4437ed6010e88286f547fa90abfe4c3")
              , i = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8")
              , o = r
              , s = BigInt("0x100000000000000000000000000000000")
              , f = lt(o * t, e)
              , a = lt(-n * t, e);
            let u = F(t - f * r - a * i, e)
              , c = F(-f * n - a * o, e);
            const l = u > s
              , h = c > s;
            if (l && (u = e - u),
            h && (c = e - c),
            u > s || c > s)
                throw new Error("splitScalar: Endomorphism failed, k=" + t);
            return {
                k1neg: l,
                k1: u,
                k2neg: h,
                k2: c
            }
        }
    }
}, f);
BigInt(0),
dt.ProjectivePoint;
export {I as e, dt as s};
