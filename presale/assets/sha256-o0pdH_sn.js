function t(t) {
    if (!Number.isSafeInteger(t) || t < 0) throw new Error(`Wrong positive integer: ${t}`)
}

function e(t, ...e) {
    if (!(t instanceof Uint8Array)) throw new Error("Expected Uint8Array");
    if (e.length > 0 && !e.includes(t.length)) throw new Error(`Expected Uint8Array of length ${e}, not of length=${t.length}`)
}

function s(e) {
    if ("function" != typeof e || "function" != typeof e.create) throw new Error("Hash should be wrapped by utils.wrapConstructor");
    t(e.outputLen), t(e.blockLen)
}

function n(t, e = !0) {
    if (t.destroyed) throw new Error("Hash instance has been destroyed");
    if (e && t.finished) throw new Error("Hash#digest() has already been called")
}

function i(t, s) {
    e(t);
    const n = s.outputLen;
    if (t.length < n) throw new Error(`digestInto() expects output buffer of length at least ${n}`)
}
const r = BigInt(2 ** 32 - 1),
    o = BigInt(32);

function h(t, e = !1) {
    return e ? {
        h: Number(t & r),
        l: Number(t >> o & r)
    } : {
        h: 0 | Number(t >> o & r),
        l: 0 | Number(t & r)
    }
}

function f(t, e = !1) {
    let s = new Uint32Array(t.length),
        n = new Uint32Array(t.length);
    for (let i = 0; i < t.length; i++) {
        const {
            h: r,
            l: o
        } = h(t[i], e);
        [s[i], n[i]] = [r, o]
    }
    return [s, n]
}
const u = (t, e, s) => t << s | e >>> 32 - s,
    a = (t, e, s) => e << s | t >>> 32 - s,
    c = (t, e, s) => e << s - 32 | t >>> 64 - s,
    l = (t, e, s) => t << s - 32 | e >>> 64 - s;
const d = {
        fromBig: h,
        split: f,
        toBig: (t, e) => BigInt(t >>> 0) << o | BigInt(e >>> 0),
        shrSH: (t, e, s) => t >>> s,
        shrSL: (t, e, s) => t << 32 - s | e >>> s,
        rotrSH: (t, e, s) => t >>> s | e << 32 - s,
        rotrSL: (t, e, s) => t << 32 - s | e >>> s,
        rotrBH: (t, e, s) => t << 64 - s | e >>> s - 32,
        rotrBL: (t, e, s) => t >>> s - 32 | e << 64 - s,
        rotr32H: (t, e) => e,
        rotr32L: (t, e) => t,
        rotlSH: u,
        rotlSL: a,
        rotlBH: c,
        rotlBL: l,
        add: function(t, e, s, n) {
            const i = (e >>> 0) + (n >>> 0);
            return {
                h: t + s + (i / 2 ** 32 | 0) | 0,
                l: 0 | i
            }
        },
        add3L: (t, e, s) => (t >>> 0) + (e >>> 0) + (s >>> 0),
        add3H: (t, e, s, n) => e + s + n + (t / 2 ** 32 | 0) | 0,
        add4L: (t, e, s, n) => (t >>> 0) + (e >>> 0) + (s >>> 0) + (n >>> 0),
        add4H: (t, e, s, n, i) => e + s + n + i + (t / 2 ** 32 | 0) | 0,
        add5H: (t, e, s, n, i, r) => e + s + n + i + r + (t / 2 ** 32 | 0) | 0,
        add5L: (t, e, s, n, i) => (t >>> 0) + (e >>> 0) + (s >>> 0) + (n >>> 0) + (i >>> 0)
    },
    p = "object" == typeof globalThis && "crypto" in globalThis ? globalThis.crypto : void 0,
    g = t => t instanceof Uint8Array,
    w = t => new DataView(t.buffer, t.byteOffset, t.byteLength),
    b = (t, e) => t << 32 - e | t >>> e;
if (!(68 === new Uint8Array(new Uint32Array([287454020]).buffer)[0])) throw new Error("Non little-endian hardware is not supported");

function y(t) {
    if ("string" == typeof t && (t = function(t) {
            if ("string" != typeof t) throw new Error("utf8ToBytes expected string, got " + typeof t);
            return new Uint8Array((new TextEncoder).encode(t))
        }(t)), !g(t)) throw new Error("expected Uint8Array, got " + typeof t);
    return t
}

function L(...t) {
    const e = new Uint8Array(t.reduce(((t, e) => t + e.length), 0));
    let s = 0;
    return t.forEach((t => {
        if (!g(t)) throw new Error("Uint8Array expected");
        e.set(t, s), s += t.length
    })), e
}
class B {
    clone() {
        return this._cloneInto()
    }
}

function E(t) {
    const e = e => t().update(y(e)).digest(),
        s = t();
    return e.outputLen = s.outputLen, e.blockLen = s.blockLen, e.create = () => t(), e
}

function I(t = 32) {
    if (p && "function" == typeof p.getRandomValues) return p.getRandomValues(new Uint8Array(t));
    throw new Error("crypto.getRandomValues must be defined")
}
const [U, k, A] = [
    [],
    [],
    []
], x = BigInt(0), H = BigInt(1), O = BigInt(2), m = BigInt(7), F = BigInt(256), S = BigInt(113);
for (let W = 0, q = H, z = 1, J = 0; W < 24; W++) {
    [z, J] = [J, (2 * z + 3 * J) % 5], U.push(2 * (5 * J + z)), k.push((W + 1) * (W + 2) / 2 % 64);
    let t = x;
    for (let e = 0; e < 7; e++) q = (q << H ^ (q >> m) * S) % F, q & O && (t ^= H << (H << BigInt(e)) - H);
    A.push(t)
}
const [C, N] = f(A, !0), v = (t, e, s) => s > 32 ? c(t, e, s) : u(t, e, s), D = (t, e, s) => s > 32 ? l(t, e, s) : a(t, e, s);
class G extends B {
    constructor(e, s, n, i = !1, r = 24) {
        if (super(), this.blockLen = e, this.suffix = s, this.outputLen = n, this.enableXOF = i, this.rounds = r, this.pos = 0, this.posOut = 0, this.finished = !1, this.destroyed = !1, t(n), 0 >= this.blockLen || this.blockLen >= 200) throw new Error("Sha3 supports only keccak-f1600 function");
        var o;
        this.state = new Uint8Array(200), this.state32 = (o = this.state, new Uint32Array(o.buffer, o.byteOffset, Math.floor(o.byteLength / 4)))
    }
    keccak() {
        ! function(t, e = 24) {
            const s = new Uint32Array(10);
            for (let n = 24 - e; n < 24; n++) {
                for (let n = 0; n < 10; n++) s[n] = t[n] ^ t[n + 10] ^ t[n + 20] ^ t[n + 30] ^ t[n + 40];
                for (let n = 0; n < 10; n += 2) {
                    const e = (n + 8) % 10,
                        i = (n + 2) % 10,
                        r = s[i],
                        o = s[i + 1],
                        h = v(r, o, 1) ^ s[e],
                        f = D(r, o, 1) ^ s[e + 1];
                    for (let s = 0; s < 50; s += 10) t[n + s] ^= h, t[n + s + 1] ^= f
                }
                let e = t[2],
                    i = t[3];
                for (let s = 0; s < 24; s++) {
                    const n = k[s],
                        r = v(e, i, n),
                        o = D(e, i, n),
                        h = U[s];
                    e = t[h], i = t[h + 1], t[h] = r, t[h + 1] = o
                }
                for (let n = 0; n < 50; n += 10) {
                    for (let e = 0; e < 10; e++) s[e] = t[n + e];
                    for (let e = 0; e < 10; e++) t[n + e] ^= ~s[(e + 2) % 10] & s[(e + 4) % 10]
                }
                t[0] ^= C[n], t[1] ^= N[n]
            }
            s.fill(0)
        }(this.state32, this.rounds), this.posOut = 0, this.pos = 0
    }
    update(t) {
        n(this);
        const {
            blockLen: e,
            state: s
        } = this, i = (t = y(t)).length;
        for (let n = 0; n < i;) {
            const r = Math.min(e - this.pos, i - n);
            for (let e = 0; e < r; e++) s[this.pos++] ^= t[n++];
            this.pos === e && this.keccak()
        }
        return this
    }
    finish() {
        if (this.finished) return;
        this.finished = !0;
        const {
            state: t,
            suffix: e,
            pos: s,
            blockLen: n
        } = this;
        t[s] ^= e, 128 & e && s === n - 1 && this.keccak(), t[n - 1] ^= 128, this.keccak()
    }
    writeInto(t) {
        n(this, !1), e(t), this.finish();
        const s = this.state,
            {
                blockLen: i
            } = this;
        for (let e = 0, n = t.length; e < n;) {
            this.posOut >= i && this.keccak();
            const r = Math.min(i - this.posOut, n - e);
            t.set(s.subarray(this.posOut, this.posOut + r), e), this.posOut += r, e += r
        }
        return t
    }
    xofInto(t) {
        if (!this.enableXOF) throw new Error("XOF is not possible for this instance");
        return this.writeInto(t)
    }
    xof(e) {
        return t(e), this.xofInto(new Uint8Array(e))
    }
    digestInto(t) {
        if (i(t, this), this.finished) throw new Error("digest() was already called");
        return this.writeInto(t), this.destroy(), t
    }
    digest() {
        return this.digestInto(new Uint8Array(this.outputLen))
    }
    destroy() {
        this.destroyed = !0, this.state.fill(0)
    }
    _cloneInto(t) {
        const {
            blockLen: e,
            suffix: s,
            outputLen: n,
            rounds: i,
            enableXOF: r
        } = this;
        return t || (t = new G(e, s, n, r, i)), t.state32.set(this.state32), t.pos = this.pos, t.posOut = this.posOut, t.finished = this.finished, t.rounds = i, t.suffix = s, t.outputLen = n, t.enableXOF = r, t.destroyed = this.destroyed, t
    }
}
const T = ((t, e, s) => E((() => new G(e, t, s))))(1, 136, 32);
class X extends B {
    constructor(t, e, s, n) {
        super(), this.blockLen = t, this.outputLen = e, this.padOffset = s, this.isLE = n, this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.buffer = new Uint8Array(t), this.view = w(this.buffer)
    }
    update(t) {
        n(this);
        const {
            view: e,
            buffer: s,
            blockLen: i
        } = this, r = (t = y(t)).length;
        for (let n = 0; n < r;) {
            const o = Math.min(i - this.pos, r - n);
            if (o !== i) s.set(t.subarray(n, n + o), this.pos), this.pos += o, n += o, this.pos === i && (this.process(e, 0), this.pos = 0);
            else {
                const e = w(t);
                for (; i <= r - n; n += i) this.process(e, n)
            }
        }
        return this.length += t.length, this.roundClean(), this
    }
    digestInto(t) {
        n(this), i(t, this), this.finished = !0;
        const {
            buffer: e,
            view: s,
            blockLen: r,
            isLE: o
        } = this;
        let {
            pos: h
        } = this;
        e[h++] = 128, this.buffer.subarray(h).fill(0), this.padOffset > r - h && (this.process(s, 0), h = 0);
        for (let n = h; n < r; n++) e[n] = 0;
        ! function(t, e, s, n) {
            if ("function" == typeof t.setBigUint64) return t.setBigUint64(e, s, n);
            const i = BigInt(32),
                r = BigInt(4294967295),
                o = Number(s >> i & r),
                h = Number(s & r),
                f = n ? 4 : 0,
                u = n ? 0 : 4;
            t.setUint32(e + f, o, n), t.setUint32(e + u, h, n)
        }(s, r - 8, BigInt(8 * this.length), o), this.process(s, 0);
        const f = w(t),
            u = this.outputLen;
        if (u % 4) throw new Error("_sha2: outputLen should be aligned to 32bit");
        const a = u / 4,
            c = this.get();
        if (a > c.length) throw new Error("_sha2: outputLen bigger than state");
        for (let n = 0; n < a; n++) f.setUint32(4 * n, c[n], o)
    }
    digest() {
        const {
            buffer: t,
            outputLen: e
        } = this;
        this.digestInto(t);
        const s = t.slice(0, e);
        return this.destroy(), s
    }
    _cloneInto(t) {
        t || (t = new this.constructor), t.set(...this.get());
        const {
            blockLen: e,
            buffer: s,
            length: n,
            finished: i,
            destroyed: r,
            pos: o
        } = this;
        return t.length = n, t.pos = o, t.finished = i, t.destroyed = r, n % e && t.buffer.set(s), t
    }
}
const _ = (t, e, s) => t & e ^ t & s ^ e & s,
    M = new Uint32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]),
    V = new Uint32Array([1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225]),
    $ = new Uint32Array(64);
class R extends X {
    constructor() {
        super(64, 32, 8, !1), this.A = 0 | V[0], this.B = 0 | V[1], this.C = 0 | V[2], this.D = 0 | V[3], this.E = 0 | V[4], this.F = 0 | V[5], this.G = 0 | V[6], this.H = 0 | V[7]
    }
    get() {
        const {
            A: t,
            B: e,
            C: s,
            D: n,
            E: i,
            F: r,
            G: o,
            H: h
        } = this;
        return [t, e, s, n, i, r, o, h]
    }
    set(t, e, s, n, i, r, o, h) {
        this.A = 0 | t, this.B = 0 | e, this.C = 0 | s, this.D = 0 | n, this.E = 0 | i, this.F = 0 | r, this.G = 0 | o, this.H = 0 | h
    }
    process(t, e) {
        for (let c = 0; c < 16; c++, e += 4) $[c] = t.getUint32(e, !1);
        for (let c = 16; c < 64; c++) {
            const t = $[c - 15],
                e = $[c - 2],
                s = b(t, 7) ^ b(t, 18) ^ t >>> 3,
                n = b(e, 17) ^ b(e, 19) ^ e >>> 10;
            $[c] = n + $[c - 7] + s + $[c - 16] | 0
        }
        let {
            A: s,
            B: n,
            C: i,
            D: r,
            E: o,
            F: h,
            G: f,
            H: u
        } = this;
        for (let c = 0; c < 64; c++) {
            const t = u + (b(o, 6) ^ b(o, 11) ^ b(o, 25)) + ((a = o) & h ^ ~a & f) + M[c] + $[c] | 0,
                e = (b(s, 2) ^ b(s, 13) ^ b(s, 22)) + _(s, n, i) | 0;
            u = f, f = h, h = o, o = r + t | 0, r = i, i = n, n = s, s = t + e | 0
        }
        var a;
        s = s + this.A | 0, n = n + this.B | 0, i = i + this.C | 0, r = r + this.D | 0, o = o + this.E | 0, h = h + this.F | 0, f = f + this.G | 0, u = u + this.H | 0, this.set(s, n, i, r, o, h, f, u)
    }
    roundClean() {
        $.fill(0)
    }
    destroy() {
        this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0)
    }
}
const j = E((() => new R));
export {
    B as H, X as S, e as b, L as c, n as e, s as h, T as k, I as r, j as s, y as t, d as u, E as w
};