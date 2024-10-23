import {
    d as t
} from "./index-BFnVcjcj.js";
import {
    dl as e,
    H as r,
    bh as n
} from "./index-jdACH0Rc.js";
import {
    c as i
} from "./_commonjs-dynamic-modules-BHR_E30J.js";
import {
    r as o
} from "./___vite-browser-external_commonjs-proxy-BKgLGdYW.js";
import {
    e as s
} from "./events-D8VlOyhg.js";
import {
    t as a
} from "./tslib.es6-D9zZKb6Q.js";
var h, u = {},
    c = {},
    f = {},
    l = {};
h = l, Object.defineProperty(h, "__esModule", {
    value: !0
}), h.mul = Math.imul || function(t, e) {
    var r = 65535 & t,
        n = 65535 & e;
    return r * n + ((t >>> 16 & 65535) * n + r * (e >>> 16 & 65535) << 16 >>> 0) | 0
}, h.add = function(t, e) {
    return t + e | 0
}, h.sub = function(t, e) {
    return t - e | 0
}, h.rotl = function(t, e) {
    return t << e | t >>> 32 - e
}, h.rotr = function(t, e) {
    return t << 32 - e | t >>> e
}, h.isInteger = Number.isInteger || function(t) {
    return "number" == typeof t && isFinite(t) && Math.floor(t) === t
}, h.MAX_SAFE_INTEGER = 9007199254740991, h.isSafeInteger = function(t) {
    return h.isInteger(t) && t >= -h.MAX_SAFE_INTEGER && t <= h.MAX_SAFE_INTEGER
}, Object.defineProperty(f, "__esModule", {
    value: !0
});
var d = l;

function p(t, e, r) {
    return void 0 === e && (e = new Uint8Array(2)), void 0 === r && (r = 0), e[r + 0] = t >>> 8, e[r + 1] = t >>> 0, e
}

function b(t, e, r) {
    return void 0 === e && (e = new Uint8Array(2)), void 0 === r && (r = 0), e[r + 0] = t >>> 0, e[r + 1] = t >>> 8, e
}

function y(t, e) {
    return void 0 === e && (e = 0), t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3]
}

function _(t, e) {
    return void 0 === e && (e = 0), (t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3]) >>> 0
}

function g(t, e) {
    return void 0 === e && (e = 0), t[e + 3] << 24 | t[e + 2] << 16 | t[e + 1] << 8 | t[e]
}

function v(t, e) {
    return void 0 === e && (e = 0), (t[e + 3] << 24 | t[e + 2] << 16 | t[e + 1] << 8 | t[e]) >>> 0
}

function w(t, e, r) {
    return void 0 === e && (e = new Uint8Array(4)), void 0 === r && (r = 0), e[r + 0] = t >>> 24, e[r + 1] = t >>> 16, e[r + 2] = t >>> 8, e[r + 3] = t >>> 0, e
}

function m(t, e, r) {
    return void 0 === e && (e = new Uint8Array(4)), void 0 === r && (r = 0), e[r + 0] = t >>> 0, e[r + 1] = t >>> 8, e[r + 2] = t >>> 16, e[r + 3] = t >>> 24, e
}

function E(t, e, r) {
    return void 0 === e && (e = new Uint8Array(8)), void 0 === r && (r = 0), w(t / 4294967296 >>> 0, e, r), w(t >>> 0, e, r + 4), e
}

function S(t, e, r) {
    return void 0 === e && (e = new Uint8Array(8)), void 0 === r && (r = 0), m(t >>> 0, e, r), m(t / 4294967296 >>> 0, e, r + 4), e
}
f.readInt16BE = function(t, e) {
    return void 0 === e && (e = 0), (t[e + 0] << 8 | t[e + 1]) << 16 >> 16
}, f.readUint16BE = function(t, e) {
    return void 0 === e && (e = 0), (t[e + 0] << 8 | t[e + 1]) >>> 0
}, f.readInt16LE = function(t, e) {
    return void 0 === e && (e = 0), (t[e + 1] << 8 | t[e]) << 16 >> 16
}, f.readUint16LE = function(t, e) {
    return void 0 === e && (e = 0), (t[e + 1] << 8 | t[e]) >>> 0
}, f.writeUint16BE = p, f.writeInt16BE = p, f.writeUint16LE = b, f.writeInt16LE = b, f.readInt32BE = y, f.readUint32BE = _, f.readInt32LE = g, f.readUint32LE = v, f.writeUint32BE = w, f.writeInt32BE = w, f.writeUint32LE = m, f.writeInt32LE = m, f.readInt64BE = function(t, e) {
    void 0 === e && (e = 0);
    var r = y(t, e),
        n = y(t, e + 4);
    return 4294967296 * r + n - 4294967296 * (n >> 31)
}, f.readUint64BE = function(t, e) {
    return void 0 === e && (e = 0), 4294967296 * _(t, e) + _(t, e + 4)
}, f.readInt64LE = function(t, e) {
    void 0 === e && (e = 0);
    var r = g(t, e);
    return 4294967296 * g(t, e + 4) + r - 4294967296 * (r >> 31)
}, f.readUint64LE = function(t, e) {
    void 0 === e && (e = 0);
    var r = v(t, e);
    return 4294967296 * v(t, e + 4) + r
}, f.writeUint64BE = E, f.writeInt64BE = E, f.writeUint64LE = S, f.writeInt64LE = S, f.readUintBE = function(t, e, r) {
    if (void 0 === r && (r = 0), t % 8 != 0) throw new Error("readUintBE supports only bitLengths divisible by 8");
    if (t / 8 > e.length - r) throw new Error("readUintBE: array is too short for the given bitLength");
    for (var n = 0, i = 1, o = t / 8 + r - 1; o >= r; o--) n += e[o] * i, i *= 256;
    return n
}, f.readUintLE = function(t, e, r) {
    if (void 0 === r && (r = 0), t % 8 != 0) throw new Error("readUintLE supports only bitLengths divisible by 8");
    if (t / 8 > e.length - r) throw new Error("readUintLE: array is too short for the given bitLength");
    for (var n = 0, i = 1, o = r; o < r + t / 8; o++) n += e[o] * i, i *= 256;
    return n
}, f.writeUintBE = function(t, e, r, n) {
    if (void 0 === r && (r = new Uint8Array(t / 8)), void 0 === n && (n = 0), t % 8 != 0) throw new Error("writeUintBE supports only bitLengths divisible by 8");
    if (!d.isSafeInteger(e)) throw new Error("writeUintBE value must be an integer");
    for (var i = 1, o = t / 8 + n - 1; o >= n; o--) r[o] = e / i & 255, i *= 256;
    return r
}, f.writeUintLE = function(t, e, r, n) {
    if (void 0 === r && (r = new Uint8Array(t / 8)), void 0 === n && (n = 0), t % 8 != 0) throw new Error("writeUintLE supports only bitLengths divisible by 8");
    if (!d.isSafeInteger(e)) throw new Error("writeUintLE value must be an integer");
    for (var i = 1, o = n; o < n + t / 8; o++) r[o] = e / i & 255, i *= 256;
    return r
}, f.readFloat32BE = function(t, e) {
    return void 0 === e && (e = 0), new DataView(t.buffer, t.byteOffset, t.byteLength).getFloat32(e)
}, f.readFloat32LE = function(t, e) {
    return void 0 === e && (e = 0), new DataView(t.buffer, t.byteOffset, t.byteLength).getFloat32(e, !0)
}, f.readFloat64BE = function(t, e) {
    return void 0 === e && (e = 0), new DataView(t.buffer, t.byteOffset, t.byteLength).getFloat64(e)
}, f.readFloat64LE = function(t, e) {
    return void 0 === e && (e = 0), new DataView(t.buffer, t.byteOffset, t.byteLength).getFloat64(e, !0)
}, f.writeFloat32BE = function(t, e, r) {
    return void 0 === e && (e = new Uint8Array(4)), void 0 === r && (r = 0), new DataView(e.buffer, e.byteOffset, e.byteLength).setFloat32(r, t), e
}, f.writeFloat32LE = function(t, e, r) {
    return void 0 === e && (e = new Uint8Array(4)), void 0 === r && (r = 0), new DataView(e.buffer, e.byteOffset, e.byteLength).setFloat32(r, t, !0), e
}, f.writeFloat64BE = function(t, e, r) {
    return void 0 === e && (e = new Uint8Array(8)), void 0 === r && (r = 0), new DataView(e.buffer, e.byteOffset, e.byteLength).setFloat64(r, t), e
}, f.writeFloat64LE = function(t, e, r) {
    return void 0 === e && (e = new Uint8Array(8)), void 0 === r && (r = 0), new DataView(e.buffer, e.byteOffset, e.byteLength).setFloat64(r, t, !0), e
};
var O = {};
Object.defineProperty(O, "__esModule", {
    value: !0
}), O.wipe = function(t) {
    for (var e = 0; e < t.length; e++) t[e] = 0;
    return t
}, Object.defineProperty(c, "__esModule", {
    value: !0
});
var A = f,
    L = O;

function U(t, e, r) {
    for (var n = 1634760805, i = 857760878, o = 2036477234, s = 1797285236, a = r[3] << 24 | r[2] << 16 | r[1] << 8 | r[0], h = r[7] << 24 | r[6] << 16 | r[5] << 8 | r[4], u = r[11] << 24 | r[10] << 16 | r[9] << 8 | r[8], c = r[15] << 24 | r[14] << 16 | r[13] << 8 | r[12], f = r[19] << 24 | r[18] << 16 | r[17] << 8 | r[16], l = r[23] << 24 | r[22] << 16 | r[21] << 8 | r[20], d = r[27] << 24 | r[26] << 16 | r[25] << 8 | r[24], p = r[31] << 24 | r[30] << 16 | r[29] << 8 | r[28], b = e[3] << 24 | e[2] << 16 | e[1] << 8 | e[0], y = e[7] << 24 | e[6] << 16 | e[5] << 8 | e[4], _ = e[11] << 24 | e[10] << 16 | e[9] << 8 | e[8], g = e[15] << 24 | e[14] << 16 | e[13] << 8 | e[12], v = n, w = i, m = o, E = s, S = a, O = h, L = u, U = c, T = f, I = l, j = d, M = p, x = b, N = y, P = _, B = g, H = 0; H < 20; H += 2) S = (S ^= T = T + (x = (x ^= v = v + S | 0) >>> 16 | x << 16) | 0) >>> 20 | S << 12, O = (O ^= I = I + (N = (N ^= w = w + O | 0) >>> 16 | N << 16) | 0) >>> 20 | O << 12, L = (L ^= j = j + (P = (P ^= m = m + L | 0) >>> 16 | P << 16) | 0) >>> 20 | L << 12, U = (U ^= M = M + (B = (B ^= E = E + U | 0) >>> 16 | B << 16) | 0) >>> 20 | U << 12, L = (L ^= j = j + (P = (P ^= m = m + L | 0) >>> 24 | P << 8) | 0) >>> 25 | L << 7, U = (U ^= M = M + (B = (B ^= E = E + U | 0) >>> 24 | B << 8) | 0) >>> 25 | U << 7, O = (O ^= I = I + (N = (N ^= w = w + O | 0) >>> 24 | N << 8) | 0) >>> 25 | O << 7, S = (S ^= T = T + (x = (x ^= v = v + S | 0) >>> 24 | x << 8) | 0) >>> 25 | S << 7, O = (O ^= j = j + (B = (B ^= v = v + O | 0) >>> 16 | B << 16) | 0) >>> 20 | O << 12, L = (L ^= M = M + (x = (x ^= w = w + L | 0) >>> 16 | x << 16) | 0) >>> 20 | L << 12, U = (U ^= T = T + (N = (N ^= m = m + U | 0) >>> 16 | N << 16) | 0) >>> 20 | U << 12, S = (S ^= I = I + (P = (P ^= E = E + S | 0) >>> 16 | P << 16) | 0) >>> 20 | S << 12, U = (U ^= T = T + (N = (N ^= m = m + U | 0) >>> 24 | N << 8) | 0) >>> 25 | U << 7, S = (S ^= I = I + (P = (P ^= E = E + S | 0) >>> 24 | P << 8) | 0) >>> 25 | S << 7, L = (L ^= M = M + (x = (x ^= w = w + L | 0) >>> 24 | x << 8) | 0) >>> 25 | L << 7, O = (O ^= j = j + (B = (B ^= v = v + O | 0) >>> 24 | B << 8) | 0) >>> 25 | O << 7;
    A.writeUint32LE(v + n | 0, t, 0), A.writeUint32LE(w + i | 0, t, 4), A.writeUint32LE(m + o | 0, t, 8), A.writeUint32LE(E + s | 0, t, 12), A.writeUint32LE(S + a | 0, t, 16), A.writeUint32LE(O + h | 0, t, 20), A.writeUint32LE(L + u | 0, t, 24), A.writeUint32LE(U + c | 0, t, 28), A.writeUint32LE(T + f | 0, t, 32), A.writeUint32LE(I + l | 0, t, 36), A.writeUint32LE(j + d | 0, t, 40), A.writeUint32LE(M + p | 0, t, 44), A.writeUint32LE(x + b | 0, t, 48), A.writeUint32LE(N + y | 0, t, 52), A.writeUint32LE(P + _ | 0, t, 56), A.writeUint32LE(B + g | 0, t, 60)
}

function T(t, e, r, n, i) {
    if (void 0 === i && (i = 0), 32 !== t.length) throw new Error("ChaCha: key size must be 32 bytes");
    if (n.length < r.length) throw new Error("ChaCha: destination is shorter than source");
    var o, s;
    if (0 === i) {
        if (8 !== e.length && 12 !== e.length) throw new Error("ChaCha nonce must be 8 or 12 bytes");
        s = (o = new Uint8Array(16)).length - e.length, o.set(e, s)
    } else {
        if (16 !== e.length) throw new Error("ChaCha nonce with counter must be 16 bytes");
        o = e, s = i
    }
    for (var a = new Uint8Array(64), h = 0; h < r.length; h += 64) {
        U(a, o, t);
        for (var u = h; u < h + 64 && u < r.length; u++) n[u] = r[u] ^ a[u - h];
        I(o, 0, s)
    }
    return L.wipe(a), 0 === i && L.wipe(o), n
}

function I(t, e, r) {
    for (var n = 1; r--;) n = n + (255 & t[e]) | 0, t[e] = 255 & n, n >>>= 8, e++;
    if (n > 0) throw new Error("ChaCha: counter overflow")
}
c.streamXOR = T, c.stream = function(t, e, r, n) {
    return void 0 === n && (n = 0), L.wipe(r), T(t, e, r, r, n)
};
var j = {},
    M = {};

function x(t, e) {
    if (t.length !== e.length) return 0;
    for (var r = 0, n = 0; n < t.length; n++) r |= t[n] ^ e[n];
    return 1 & r - 1 >>> 8
}
Object.defineProperty(M, "__esModule", {
        value: !0
    }), M.select = function(t, e, r) {
        return ~(t - 1) & e | t - 1 & r
    }, M.lessOrEqual = function(t, e) {
        return (0 | t) - (0 | e) - 1 >>> 31 & 1
    }, M.compare = x, M.equal = function(t, e) {
        return 0 !== t.length && 0 !== e.length && 0 !== x(t, e)
    },
    function(t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var e = M,
            r = O;
        t.DIGEST_LENGTH = 16;
        var n = function() {
            function e(e) {
                this.digestLength = t.DIGEST_LENGTH, this._buffer = new Uint8Array(16), this._r = new Uint16Array(10), this._h = new Uint16Array(10), this._pad = new Uint16Array(8), this._leftover = 0, this._fin = 0, this._finished = !1;
                var r = e[0] | e[1] << 8;
                this._r[0] = 8191 & r;
                var n = e[2] | e[3] << 8;
                this._r[1] = 8191 & (r >>> 13 | n << 3);
                var i = e[4] | e[5] << 8;
                this._r[2] = 7939 & (n >>> 10 | i << 6);
                var o = e[6] | e[7] << 8;
                this._r[3] = 8191 & (i >>> 7 | o << 9);
                var s = e[8] | e[9] << 8;
                this._r[4] = 255 & (o >>> 4 | s << 12), this._r[5] = s >>> 1 & 8190;
                var a = e[10] | e[11] << 8;
                this._r[6] = 8191 & (s >>> 14 | a << 2);
                var h = e[12] | e[13] << 8;
                this._r[7] = 8065 & (a >>> 11 | h << 5);
                var u = e[14] | e[15] << 8;
                this._r[8] = 8191 & (h >>> 8 | u << 8), this._r[9] = u >>> 5 & 127, this._pad[0] = e[16] | e[17] << 8, this._pad[1] = e[18] | e[19] << 8, this._pad[2] = e[20] | e[21] << 8, this._pad[3] = e[22] | e[23] << 8, this._pad[4] = e[24] | e[25] << 8, this._pad[5] = e[26] | e[27] << 8, this._pad[6] = e[28] | e[29] << 8, this._pad[7] = e[30] | e[31] << 8
            }
            return e.prototype._blocks = function(t, e, r) {
                for (var n = this._fin ? 0 : 2048, i = this._h[0], o = this._h[1], s = this._h[2], a = this._h[3], h = this._h[4], u = this._h[5], c = this._h[6], f = this._h[7], l = this._h[8], d = this._h[9], p = this._r[0], b = this._r[1], y = this._r[2], _ = this._r[3], g = this._r[4], v = this._r[5], w = this._r[6], m = this._r[7], E = this._r[8], S = this._r[9]; r >= 16;) {
                    var O = t[e + 0] | t[e + 1] << 8;
                    i += 8191 & O;
                    var A = t[e + 2] | t[e + 3] << 8;
                    o += 8191 & (O >>> 13 | A << 3);
                    var L = t[e + 4] | t[e + 5] << 8;
                    s += 8191 & (A >>> 10 | L << 6);
                    var U = t[e + 6] | t[e + 7] << 8;
                    a += 8191 & (L >>> 7 | U << 9);
                    var T = t[e + 8] | t[e + 9] << 8;
                    h += 8191 & (U >>> 4 | T << 12), u += T >>> 1 & 8191;
                    var I = t[e + 10] | t[e + 11] << 8;
                    c += 8191 & (T >>> 14 | I << 2);
                    var j = t[e + 12] | t[e + 13] << 8;
                    f += 8191 & (I >>> 11 | j << 5);
                    var M = t[e + 14] | t[e + 15] << 8,
                        x = 0,
                        N = x;
                    N += i * p, N += o * (5 * S), N += s * (5 * E), N += a * (5 * m), x = (N += h * (5 * w)) >>> 13, N &= 8191, N += u * (5 * v), N += c * (5 * g), N += f * (5 * _), N += (l += 8191 & (j >>> 8 | M << 8)) * (5 * y);
                    var P = x += (N += (d += M >>> 5 | n) * (5 * b)) >>> 13;
                    P += i * b, P += o * p, P += s * (5 * S), P += a * (5 * E), x = (P += h * (5 * m)) >>> 13, P &= 8191, P += u * (5 * w), P += c * (5 * v), P += f * (5 * g), P += l * (5 * _), x += (P += d * (5 * y)) >>> 13, P &= 8191;
                    var B = x;
                    B += i * y, B += o * b, B += s * p, B += a * (5 * S), x = (B += h * (5 * E)) >>> 13, B &= 8191, B += u * (5 * m), B += c * (5 * w), B += f * (5 * v), B += l * (5 * g);
                    var H = x += (B += d * (5 * _)) >>> 13;
                    H += i * _, H += o * y, H += s * b, H += a * p, x = (H += h * (5 * S)) >>> 13, H &= 8191, H += u * (5 * E), H += c * (5 * m), H += f * (5 * w), H += l * (5 * v);
                    var R = x += (H += d * (5 * g)) >>> 13;
                    R += i * g, R += o * _, R += s * y, R += a * b, x = (R += h * p) >>> 13, R &= 8191, R += u * (5 * S), R += c * (5 * E), R += f * (5 * m), R += l * (5 * w);
                    var C = x += (R += d * (5 * v)) >>> 13;
                    C += i * v, C += o * g, C += s * _, C += a * y, x = (C += h * b) >>> 13, C &= 8191, C += u * p, C += c * (5 * S), C += f * (5 * E), C += l * (5 * m);
                    var z = x += (C += d * (5 * w)) >>> 13;
                    z += i * w, z += o * v, z += s * g, z += a * _, x = (z += h * y) >>> 13, z &= 8191, z += u * b, z += c * p, z += f * (5 * S), z += l * (5 * E);
                    var D = x += (z += d * (5 * m)) >>> 13;
                    D += i * m, D += o * w, D += s * v, D += a * g, x = (D += h * _) >>> 13, D &= 8191, D += u * y, D += c * b, D += f * p, D += l * (5 * S);
                    var k = x += (D += d * (5 * E)) >>> 13;
                    k += i * E, k += o * m, k += s * w, k += a * v, x = (k += h * g) >>> 13, k &= 8191, k += u * _, k += c * y, k += f * b, k += l * p;
                    var K = x += (k += d * (5 * S)) >>> 13;
                    K += i * S, K += o * E, K += s * m, K += a * w, x = (K += h * v) >>> 13, K &= 8191, K += u * g, K += c * _, K += f * y, K += l * b, i = N = 8191 & (x = (x = ((x += (K += d * p) >>> 13) << 2) + x | 0) + (N &= 8191) | 0), o = P += x >>>= 13, s = B &= 8191, a = H &= 8191, h = R &= 8191, u = C &= 8191, c = z &= 8191, f = D &= 8191, l = k &= 8191, d = K &= 8191, e += 16, r -= 16
                }
                this._h[0] = i, this._h[1] = o, this._h[2] = s, this._h[3] = a, this._h[4] = h, this._h[5] = u, this._h[6] = c, this._h[7] = f, this._h[8] = l, this._h[9] = d
            }, e.prototype.finish = function(t, e) {
                void 0 === e && (e = 0);
                var r, n, i, o, s = new Uint16Array(10);
                if (this._leftover) {
                    for (o = this._leftover, this._buffer[o++] = 1; o < 16; o++) this._buffer[o] = 0;
                    this._fin = 1, this._blocks(this._buffer, 0, 16)
                }
                for (r = this._h[1] >>> 13, this._h[1] &= 8191, o = 2; o < 10; o++) this._h[o] += r, r = this._h[o] >>> 13, this._h[o] &= 8191;
                for (this._h[0] += 5 * r, r = this._h[0] >>> 13, this._h[0] &= 8191, this._h[1] += r, r = this._h[1] >>> 13, this._h[1] &= 8191, this._h[2] += r, s[0] = this._h[0] + 5, r = s[0] >>> 13, s[0] &= 8191, o = 1; o < 10; o++) s[o] = this._h[o] + r, r = s[o] >>> 13, s[o] &= 8191;
                for (s[9] -= 8192, n = (1 ^ r) - 1, o = 0; o < 10; o++) s[o] &= n;
                for (n = ~n, o = 0; o < 10; o++) this._h[o] = this._h[o] & n | s[o];
                for (this._h[0] = 65535 & (this._h[0] | this._h[1] << 13), this._h[1] = 65535 & (this._h[1] >>> 3 | this._h[2] << 10), this._h[2] = 65535 & (this._h[2] >>> 6 | this._h[3] << 7), this._h[3] = 65535 & (this._h[3] >>> 9 | this._h[4] << 4), this._h[4] = 65535 & (this._h[4] >>> 12 | this._h[5] << 1 | this._h[6] << 14), this._h[5] = 65535 & (this._h[6] >>> 2 | this._h[7] << 11), this._h[6] = 65535 & (this._h[7] >>> 5 | this._h[8] << 8), this._h[7] = 65535 & (this._h[8] >>> 8 | this._h[9] << 5), i = this._h[0] + this._pad[0], this._h[0] = 65535 & i, o = 1; o < 8; o++) i = (this._h[o] + this._pad[o] | 0) + (i >>> 16) | 0, this._h[o] = 65535 & i;
                return t[e + 0] = this._h[0] >>> 0, t[e + 1] = this._h[0] >>> 8, t[e + 2] = this._h[1] >>> 0, t[e + 3] = this._h[1] >>> 8, t[e + 4] = this._h[2] >>> 0, t[e + 5] = this._h[2] >>> 8, t[e + 6] = this._h[3] >>> 0, t[e + 7] = this._h[3] >>> 8, t[e + 8] = this._h[4] >>> 0, t[e + 9] = this._h[4] >>> 8, t[e + 10] = this._h[5] >>> 0, t[e + 11] = this._h[5] >>> 8, t[e + 12] = this._h[6] >>> 0, t[e + 13] = this._h[6] >>> 8, t[e + 14] = this._h[7] >>> 0, t[e + 15] = this._h[7] >>> 8, this._finished = !0, this
            }, e.prototype.update = function(t) {
                var e, r = 0,
                    n = t.length;
                if (this._leftover) {
                    (e = 16 - this._leftover) > n && (e = n);
                    for (var i = 0; i < e; i++) this._buffer[this._leftover + i] = t[r + i];
                    if (n -= e, r += e, this._leftover += e, this._leftover < 16) return this;
                    this._blocks(this._buffer, 0, 16), this._leftover = 0
                }
                if (n >= 16 && (e = n - n % 16, this._blocks(t, r, e), r += e, n -= e), n) {
                    for (i = 0; i < n; i++) this._buffer[this._leftover + i] = t[r + i];
                    this._leftover += n
                }
                return this
            }, e.prototype.digest = function() {
                if (this._finished) throw new Error("Poly1305 was finished");
                var t = new Uint8Array(16);
                return this.finish(t), t
            }, e.prototype.clean = function() {
                return r.wipe(this._buffer), r.wipe(this._r), r.wipe(this._h), r.wipe(this._pad), this._leftover = 0, this._fin = 0, this._finished = !0, this
            }, e
        }();
        t.Poly1305 = n, t.oneTimeAuth = function(t, e) {
            var r = new n(t);
            r.update(e);
            var i = r.digest();
            return r.clean(), i
        }, t.equal = function(r, n) {
            return r.length === t.DIGEST_LENGTH && n.length === t.DIGEST_LENGTH && e.equal(r, n)
        }
    }(j),
    function(t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var e = c,
            r = j,
            n = O,
            i = f,
            o = M;
        t.KEY_LENGTH = 32, t.NONCE_LENGTH = 12, t.TAG_LENGTH = 16;
        var s = new Uint8Array(16),
            a = function() {
                function a(e) {
                    if (this.nonceLength = t.NONCE_LENGTH, this.tagLength = t.TAG_LENGTH, e.length !== t.KEY_LENGTH) throw new Error("ChaCha20Poly1305 needs 32-byte key");
                    this._key = new Uint8Array(e)
                }
                return a.prototype.seal = function(t, r, i, o) {
                    if (t.length > 16) throw new Error("ChaCha20Poly1305: incorrect nonce length");
                    var s = new Uint8Array(16);
                    s.set(t, s.length - t.length);
                    var a = new Uint8Array(32);
                    e.stream(this._key, s, a, 4);
                    var h, u = r.length + this.tagLength;
                    if (o) {
                        if (o.length !== u) throw new Error("ChaCha20Poly1305: incorrect destination length");
                        h = o
                    } else h = new Uint8Array(u);
                    return e.streamXOR(this._key, s, r, h, 4), this._authenticate(h.subarray(h.length - this.tagLength, h.length), a, h.subarray(0, h.length - this.tagLength), i), n.wipe(s), h
                }, a.prototype.open = function(t, r, i, s) {
                    if (t.length > 16) throw new Error("ChaCha20Poly1305: incorrect nonce length");
                    if (r.length < this.tagLength) return null;
                    var a = new Uint8Array(16);
                    a.set(t, a.length - t.length);
                    var h = new Uint8Array(32);
                    e.stream(this._key, a, h, 4);
                    var u = new Uint8Array(this.tagLength);
                    if (this._authenticate(u, h, r.subarray(0, r.length - this.tagLength), i), !o.equal(u, r.subarray(r.length - this.tagLength, r.length))) return null;
                    var c, f = r.length - this.tagLength;
                    if (s) {
                        if (s.length !== f) throw new Error("ChaCha20Poly1305: incorrect destination length");
                        c = s
                    } else c = new Uint8Array(f);
                    return e.streamXOR(this._key, a, r.subarray(0, r.length - this.tagLength), c, 4), n.wipe(a), c
                }, a.prototype.clean = function() {
                    return n.wipe(this._key), this
                }, a.prototype._authenticate = function(t, e, o, a) {
                    var h = new r.Poly1305(e);
                    a && (h.update(a), a.length % 16 > 0 && h.update(s.subarray(a.length % 16))), h.update(o), o.length % 16 > 0 && h.update(s.subarray(o.length % 16));
                    var u = new Uint8Array(8);
                    a && i.writeUint64LE(a.length, u), h.update(u), i.writeUint64LE(o.length, u), h.update(u);
                    for (var c = h.digest(), f = 0; f < c.length; f++) t[f] = c[f];
                    h.clean(), n.wipe(c), n.wipe(u)
                }, a
            }();
        t.ChaCha20Poly1305 = a
    }(u);
var N = {},
    P = {},
    B = {};
Object.defineProperty(B, "__esModule", {
    value: !0
}), B.isSerializableHash = function(t) {
    return void 0 !== t.saveState && void 0 !== t.restoreState && void 0 !== t.cleanSavedState
}, Object.defineProperty(P, "__esModule", {
    value: !0
});
var H = B,
    R = M,
    C = O,
    z = function() {
        function t(t, e) {
            this._finished = !1, this._inner = new t, this._outer = new t, this.blockSize = this._outer.blockSize, this.digestLength = this._outer.digestLength;
            var r = new Uint8Array(this.blockSize);
            e.length > this.blockSize ? this._inner.update(e).finish(r).clean() : r.set(e);
            for (var n = 0; n < r.length; n++) r[n] ^= 54;
            this._inner.update(r);
            for (n = 0; n < r.length; n++) r[n] ^= 106;
            this._outer.update(r), H.isSerializableHash(this._inner) && H.isSerializableHash(this._outer) && (this._innerKeyedState = this._inner.saveState(), this._outerKeyedState = this._outer.saveState()), C.wipe(r)
        }
        return t.prototype.reset = function() {
            if (!H.isSerializableHash(this._inner) || !H.isSerializableHash(this._outer)) throw new Error("hmac: can't reset() because hash doesn't implement restoreState()");
            return this._inner.restoreState(this._innerKeyedState), this._outer.restoreState(this._outerKeyedState), this._finished = !1, this
        }, t.prototype.clean = function() {
            H.isSerializableHash(this._inner) && this._inner.cleanSavedState(this._innerKeyedState), H.isSerializableHash(this._outer) && this._outer.cleanSavedState(this._outerKeyedState), this._inner.clean(), this._outer.clean()
        }, t.prototype.update = function(t) {
            return this._inner.update(t), this
        }, t.prototype.finish = function(t) {
            return this._finished ? (this._outer.finish(t), this) : (this._inner.finish(t), this._outer.update(t.subarray(0, this.digestLength)).finish(t), this._finished = !0, this)
        }, t.prototype.digest = function() {
            var t = new Uint8Array(this.digestLength);
            return this.finish(t), t
        }, t.prototype.saveState = function() {
            if (!H.isSerializableHash(this._inner)) throw new Error("hmac: can't saveState() because hash doesn't implement it");
            return this._inner.saveState()
        }, t.prototype.restoreState = function(t) {
            if (!H.isSerializableHash(this._inner) || !H.isSerializableHash(this._outer)) throw new Error("hmac: can't restoreState() because hash doesn't implement it");
            return this._inner.restoreState(t), this._outer.restoreState(this._outerKeyedState), this._finished = !1, this
        }, t.prototype.cleanSavedState = function(t) {
            if (!H.isSerializableHash(this._inner)) throw new Error("hmac: can't cleanSavedState() because hash doesn't implement it");
            this._inner.cleanSavedState(t)
        }, t
    }();
P.HMAC = z, P.hmac = function(t, e, r) {
    var n = new z(t, e);
    n.update(r);
    var i = n.digest();
    return n.clean(), i
}, P.equal = R.equal, Object.defineProperty(N, "__esModule", {
    value: !0
});
var D = P,
    k = O,
    K = function() {
        function t(t, e, r, n) {
            void 0 === r && (r = new Uint8Array(0)), this._counter = new Uint8Array(1), this._hash = t, this._info = n;
            var i = D.hmac(this._hash, r, e);
            this._hmac = new D.HMAC(t, i), this._buffer = new Uint8Array(this._hmac.digestLength), this._bufpos = this._buffer.length
        }
        return t.prototype._fillBuffer = function() {
            this._counter[0]++;
            var t = this._counter[0];
            if (0 === t) throw new Error("hkdf: cannot expand more");
            this._hmac.reset(), t > 1 && this._hmac.update(this._buffer), this._info && this._hmac.update(this._info), this._hmac.update(this._counter), this._hmac.finish(this._buffer), this._bufpos = 0
        }, t.prototype.expand = function(t) {
            for (var e = new Uint8Array(t), r = 0; r < e.length; r++) this._bufpos === this._buffer.length && this._fillBuffer(), e[r] = this._buffer[this._bufpos++];
            return e
        }, t.prototype.clean = function() {
            this._hmac.clean(), k.wipe(this._buffer), k.wipe(this._counter), this._bufpos = 0
        }, t
    }(),
    F = N.HKDF = K,
    G = {},
    Y = {},
    V = {};
Object.defineProperty(V, "__esModule", {
    value: !0
}), V.BrowserRandomSource = void 0;
V.BrowserRandomSource = class {
    constructor() {
        this.isAvailable = !1, this.isInstantiated = !1;
        const t = "undefined" != typeof self ? self.crypto || self.msCrypto : null;
        t && void 0 !== t.getRandomValues && (this._crypto = t, this.isAvailable = !0, this.isInstantiated = !0)
    }
    randomBytes(t) {
        if (!this.isAvailable || !this._crypto) throw new Error("Browser random byte generator is not available.");
        const e = new Uint8Array(t);
        for (let r = 0; r < e.length; r += 65536) this._crypto.getRandomValues(e.subarray(r, r + Math.min(e.length - r, 65536)));
        return e
    }
};
var $ = {};
Object.defineProperty($, "__esModule", {
    value: !0
}), $.NodeRandomSource = void 0;
const W = O;
$.NodeRandomSource = class {
    constructor() {
        if (this.isAvailable = !1, this.isInstantiated = !1, void 0 !== i) {
            const t = o;
            t && t.randomBytes && (this._crypto = t, this.isAvailable = !0, this.isInstantiated = !0)
        }
    }
    randomBytes(t) {
        if (!this.isAvailable || !this._crypto) throw new Error("Node.js random byte generator is not available.");
        let e = this._crypto.randomBytes(t);
        if (e.length !== t) throw new Error("NodeRandomSource: got fewer bytes than requested");
        const r = new Uint8Array(t);
        for (let n = 0; n < r.length; n++) r[n] = e[n];
        return (0, W.wipe)(e), r
    }
}, Object.defineProperty(Y, "__esModule", {
    value: !0
}), Y.SystemRandomSource = void 0;
const X = V,
    q = $;
Y.SystemRandomSource = class {
        constructor() {
            return this.isAvailable = !1, this.name = "", this._source = new X.BrowserRandomSource, this._source.isAvailable ? (this.isAvailable = !0, void(this.name = "Browser")) : (this._source = new q.NodeRandomSource, this._source.isAvailable ? (this.isAvailable = !0, void(this.name = "Node")) : void 0)
        }
        randomBytes(t) {
            if (!this.isAvailable) throw new Error("System random byte generator is not available.");
            return this._source.randomBytes(t)
        }
    },
    function(t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.randomStringForEntropy = t.randomString = t.randomUint32 = t.randomBytes = t.defaultRandomSource = void 0;
        const e = Y,
            r = f,
            n = O;

        function i(e, r = t.defaultRandomSource) {
            return r.randomBytes(e)
        }
        t.defaultRandomSource = new e.SystemRandomSource, t.randomBytes = i, t.randomUint32 = function(e = t.defaultRandomSource) {
            const o = i(4, e),
                s = (0, r.readUint32LE)(o);
            return (0, n.wipe)(o), s
        };
        const o = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        function s(e, r = o, s = t.defaultRandomSource) {
            if (r.length < 2) throw new Error("randomString charset is too short");
            if (r.length > 256) throw new Error("randomString charset is too long");
            let a = "";
            const h = r.length,
                u = 256 - 256 % h;
            for (; e > 0;) {
                const t = i(Math.ceil(256 * e / u), s);
                for (let n = 0; n < t.length && e > 0; n++) {
                    const i = t[n];
                    i < u && (a += r.charAt(i % h), e--)
                }(0, n.wipe)(t)
            }
            return a
        }
        t.randomString = s, t.randomStringForEntropy = function(e, r = o, n = t.defaultRandomSource) {
            return s(Math.ceil(e / (Math.log(r.length) / Math.LN2)), r, n)
        }
    }(G);
var J = {};
! function(t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var e = f,
        r = O;
    t.DIGEST_LENGTH = 32, t.BLOCK_SIZE = 64;
    var n = function() {
        function n() {
            this.digestLength = t.DIGEST_LENGTH, this.blockSize = t.BLOCK_SIZE, this._state = new Int32Array(8), this._temp = new Int32Array(64), this._buffer = new Uint8Array(128), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this.reset()
        }
        return n.prototype._initState = function() {
            this._state[0] = 1779033703, this._state[1] = 3144134277, this._state[2] = 1013904242, this._state[3] = 2773480762, this._state[4] = 1359893119, this._state[5] = 2600822924, this._state[6] = 528734635, this._state[7] = 1541459225
        }, n.prototype.reset = function() {
            return this._initState(), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this
        }, n.prototype.clean = function() {
            r.wipe(this._buffer), r.wipe(this._temp), this.reset()
        }, n.prototype.update = function(t, e) {
            if (void 0 === e && (e = t.length), this._finished) throw new Error("SHA256: can't update because hash was finished.");
            var r = 0;
            if (this._bytesHashed += e, this._bufferLength > 0) {
                for (; this._bufferLength < this.blockSize && e > 0;) this._buffer[this._bufferLength++] = t[r++], e--;
                this._bufferLength === this.blockSize && (o(this._temp, this._state, this._buffer, 0, this.blockSize), this._bufferLength = 0)
            }
            for (e >= this.blockSize && (r = o(this._temp, this._state, t, r, e), e %= this.blockSize); e > 0;) this._buffer[this._bufferLength++] = t[r++], e--;
            return this
        }, n.prototype.finish = function(t) {
            if (!this._finished) {
                var r = this._bytesHashed,
                    n = this._bufferLength,
                    i = r / 536870912 | 0,
                    s = r << 3,
                    a = r % 64 < 56 ? 64 : 128;
                this._buffer[n] = 128;
                for (var h = n + 1; h < a - 8; h++) this._buffer[h] = 0;
                e.writeUint32BE(i, this._buffer, a - 8), e.writeUint32BE(s, this._buffer, a - 4), o(this._temp, this._state, this._buffer, 0, a), this._finished = !0
            }
            for (h = 0; h < this.digestLength / 4; h++) e.writeUint32BE(this._state[h], t, 4 * h);
            return this
        }, n.prototype.digest = function() {
            var t = new Uint8Array(this.digestLength);
            return this.finish(t), t
        }, n.prototype.saveState = function() {
            if (this._finished) throw new Error("SHA256: cannot save finished state");
            return {
                state: new Int32Array(this._state),
                buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
                bufferLength: this._bufferLength,
                bytesHashed: this._bytesHashed
            }
        }, n.prototype.restoreState = function(t) {
            return this._state.set(t.state), this._bufferLength = t.bufferLength, t.buffer && this._buffer.set(t.buffer), this._bytesHashed = t.bytesHashed, this._finished = !1, this
        }, n.prototype.cleanSavedState = function(t) {
            r.wipe(t.state), t.buffer && r.wipe(t.buffer), t.bufferLength = 0, t.bytesHashed = 0
        }, n
    }();
    t.SHA256 = n;
    var i = new Int32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]);

    function o(t, r, n, o, s) {
        for (; s >= 64;) {
            for (var a = r[0], h = r[1], u = r[2], c = r[3], f = r[4], l = r[5], d = r[6], p = r[7], b = 0; b < 16; b++) {
                var y = o + 4 * b;
                t[b] = e.readUint32BE(n, y)
            }
            for (b = 16; b < 64; b++) {
                var _ = t[b - 2],
                    g = (_ >>> 17 | _ << 15) ^ (_ >>> 19 | _ << 13) ^ _ >>> 10,
                    v = ((_ = t[b - 15]) >>> 7 | _ << 25) ^ (_ >>> 18 | _ << 14) ^ _ >>> 3;
                t[b] = (g + t[b - 7] | 0) + (v + t[b - 16] | 0)
            }
            for (b = 0; b < 64; b++) {
                g = (((f >>> 6 | f << 26) ^ (f >>> 11 | f << 21) ^ (f >>> 25 | f << 7)) + (f & l ^ ~f & d) | 0) + (p + (i[b] + t[b] | 0) | 0) | 0, v = ((a >>> 2 | a << 30) ^ (a >>> 13 | a << 19) ^ (a >>> 22 | a << 10)) + (a & h ^ a & u ^ h & u) | 0;
                p = d, d = l, l = f, f = c + g | 0, c = u, u = h, h = a, a = g + v | 0
            }
            r[0] += a, r[1] += h, r[2] += u, r[3] += c, r[4] += f, r[5] += l, r[6] += d, r[7] += p, o += 64, s -= 64
        }
        return o
    }
    t.hash = function(t) {
        var e = new n;
        e.update(t);
        var r = e.digest();
        return e.clean(), r
    }
}(J);
var Z = {};

function Q(t) {
    return null != globalThis.Buffer ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : t
}

function tt(t = 0) {
    return null != globalThis.Buffer && null != globalThis.Buffer.allocUnsafe ? Q(globalThis.Buffer.allocUnsafe(t)) : new Uint8Array(t)
}

function et(t, e) {
    e || (e = t.reduce(((t, e) => t + e.length), 0));
    const r = tt(e);
    let n = 0;
    for (const i of t) r.set(i, n), n += i.length;
    return Q(r)
}! function(t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.sharedKey = t.generateKeyPair = t.generateKeyPairFromSeed = t.scalarMultBase = t.scalarMult = t.SHARED_KEY_LENGTH = t.SECRET_KEY_LENGTH = t.PUBLIC_KEY_LENGTH = void 0;
    const e = G,
        r = O;

    function n(t) {
        const e = new Float64Array(16);
        if (t)
            for (let r = 0; r < t.length; r++) e[r] = t[r];
        return e
    }
    t.PUBLIC_KEY_LENGTH = 32, t.SECRET_KEY_LENGTH = 32, t.SHARED_KEY_LENGTH = 32;
    const i = new Uint8Array(32);
    i[0] = 9;
    const o = n([56129, 1]);

    function s(t) {
        let e = 1;
        for (let r = 0; r < 16; r++) {
            let n = t[r] + e + 65535;
            e = Math.floor(n / 65536), t[r] = n - 65536 * e
        }
        t[0] += e - 1 + 37 * (e - 1)
    }

    function a(t, e, r) {
        const n = ~(r - 1);
        for (let i = 0; i < 16; i++) {
            const r = n & (t[i] ^ e[i]);
            t[i] ^= r, e[i] ^= r
        }
    }

    function h(t, e, r) {
        for (let n = 0; n < 16; n++) t[n] = e[n] + r[n]
    }

    function u(t, e, r) {
        for (let n = 0; n < 16; n++) t[n] = e[n] - r[n]
    }

    function c(t, e, r) {
        let n, i, o = 0,
            s = 0,
            a = 0,
            h = 0,
            u = 0,
            c = 0,
            f = 0,
            l = 0,
            d = 0,
            p = 0,
            b = 0,
            y = 0,
            _ = 0,
            g = 0,
            v = 0,
            w = 0,
            m = 0,
            E = 0,
            S = 0,
            O = 0,
            A = 0,
            L = 0,
            U = 0,
            T = 0,
            I = 0,
            j = 0,
            M = 0,
            x = 0,
            N = 0,
            P = 0,
            B = 0,
            H = r[0],
            R = r[1],
            C = r[2],
            z = r[3],
            D = r[4],
            k = r[5],
            K = r[6],
            F = r[7],
            G = r[8],
            Y = r[9],
            V = r[10],
            $ = r[11],
            W = r[12],
            X = r[13],
            q = r[14],
            J = r[15];
        n = e[0], o += n * H, s += n * R, a += n * C, h += n * z, u += n * D, c += n * k, f += n * K, l += n * F, d += n * G, p += n * Y, b += n * V, y += n * $, _ += n * W, g += n * X, v += n * q, w += n * J, n = e[1], s += n * H, a += n * R, h += n * C, u += n * z, c += n * D, f += n * k, l += n * K, d += n * F, p += n * G, b += n * Y, y += n * V, _ += n * $, g += n * W, v += n * X, w += n * q, m += n * J, n = e[2], a += n * H, h += n * R, u += n * C, c += n * z, f += n * D, l += n * k, d += n * K, p += n * F, b += n * G, y += n * Y, _ += n * V, g += n * $, v += n * W, w += n * X, m += n * q, E += n * J, n = e[3], h += n * H, u += n * R, c += n * C, f += n * z, l += n * D, d += n * k, p += n * K, b += n * F, y += n * G, _ += n * Y, g += n * V, v += n * $, w += n * W, m += n * X, E += n * q, S += n * J, n = e[4], u += n * H, c += n * R, f += n * C, l += n * z, d += n * D, p += n * k, b += n * K, y += n * F, _ += n * G, g += n * Y, v += n * V, w += n * $, m += n * W, E += n * X, S += n * q, O += n * J, n = e[5], c += n * H, f += n * R, l += n * C, d += n * z, p += n * D, b += n * k, y += n * K, _ += n * F, g += n * G, v += n * Y, w += n * V, m += n * $, E += n * W, S += n * X, O += n * q, A += n * J, n = e[6], f += n * H, l += n * R, d += n * C, p += n * z, b += n * D, y += n * k, _ += n * K, g += n * F, v += n * G, w += n * Y, m += n * V, E += n * $, S += n * W, O += n * X, A += n * q, L += n * J, n = e[7], l += n * H, d += n * R, p += n * C, b += n * z, y += n * D, _ += n * k, g += n * K, v += n * F, w += n * G, m += n * Y, E += n * V, S += n * $, O += n * W, A += n * X, L += n * q, U += n * J, n = e[8], d += n * H, p += n * R, b += n * C, y += n * z, _ += n * D, g += n * k, v += n * K, w += n * F, m += n * G, E += n * Y, S += n * V, O += n * $, A += n * W, L += n * X, U += n * q, T += n * J, n = e[9], p += n * H, b += n * R, y += n * C, _ += n * z, g += n * D, v += n * k, w += n * K, m += n * F, E += n * G, S += n * Y, O += n * V, A += n * $, L += n * W, U += n * X, T += n * q, I += n * J, n = e[10], b += n * H, y += n * R, _ += n * C, g += n * z, v += n * D, w += n * k, m += n * K, E += n * F, S += n * G, O += n * Y, A += n * V, L += n * $, U += n * W, T += n * X, I += n * q, j += n * J, n = e[11], y += n * H, _ += n * R, g += n * C, v += n * z, w += n * D, m += n * k, E += n * K, S += n * F, O += n * G, A += n * Y, L += n * V, U += n * $, T += n * W, I += n * X, j += n * q, M += n * J, n = e[12], _ += n * H, g += n * R, v += n * C, w += n * z, m += n * D, E += n * k, S += n * K, O += n * F, A += n * G, L += n * Y, U += n * V, T += n * $, I += n * W, j += n * X, M += n * q, x += n * J, n = e[13], g += n * H, v += n * R, w += n * C, m += n * z, E += n * D, S += n * k, O += n * K, A += n * F, L += n * G, U += n * Y, T += n * V, I += n * $, j += n * W, M += n * X, x += n * q, N += n * J, n = e[14], v += n * H, w += n * R, m += n * C, E += n * z, S += n * D, O += n * k, A += n * K, L += n * F, U += n * G, T += n * Y, I += n * V, j += n * $, M += n * W, x += n * X, N += n * q, P += n * J, n = e[15], w += n * H, m += n * R, E += n * C, S += n * z, O += n * D, A += n * k, L += n * K, U += n * F, T += n * G, I += n * Y, j += n * V, M += n * $, x += n * W, N += n * X, P += n * q, B += n * J, o += 38 * m, s += 38 * E, a += 38 * S, h += 38 * O, u += 38 * A, c += 38 * L, f += 38 * U, l += 38 * T, d += 38 * I, p += 38 * j, b += 38 * M, y += 38 * x, _ += 38 * N, g += 38 * P, v += 38 * B, i = 1, n = o + i + 65535, i = Math.floor(n / 65536), o = n - 65536 * i, n = s + i + 65535, i = Math.floor(n / 65536), s = n - 65536 * i, n = a + i + 65535, i = Math.floor(n / 65536), a = n - 65536 * i, n = h + i + 65535, i = Math.floor(n / 65536), h = n - 65536 * i, n = u + i + 65535, i = Math.floor(n / 65536), u = n - 65536 * i, n = c + i + 65535, i = Math.floor(n / 65536), c = n - 65536 * i, n = f + i + 65535, i = Math.floor(n / 65536), f = n - 65536 * i, n = l + i + 65535, i = Math.floor(n / 65536), l = n - 65536 * i, n = d + i + 65535, i = Math.floor(n / 65536), d = n - 65536 * i, n = p + i + 65535, i = Math.floor(n / 65536), p = n - 65536 * i, n = b + i + 65535, i = Math.floor(n / 65536), b = n - 65536 * i, n = y + i + 65535, i = Math.floor(n / 65536), y = n - 65536 * i, n = _ + i + 65535, i = Math.floor(n / 65536), _ = n - 65536 * i, n = g + i + 65535, i = Math.floor(n / 65536), g = n - 65536 * i, n = v + i + 65535, i = Math.floor(n / 65536), v = n - 65536 * i, n = w + i + 65535, i = Math.floor(n / 65536), w = n - 65536 * i, o += i - 1 + 37 * (i - 1), i = 1, n = o + i + 65535, i = Math.floor(n / 65536), o = n - 65536 * i, n = s + i + 65535, i = Math.floor(n / 65536), s = n - 65536 * i, n = a + i + 65535, i = Math.floor(n / 65536), a = n - 65536 * i, n = h + i + 65535, i = Math.floor(n / 65536), h = n - 65536 * i, n = u + i + 65535, i = Math.floor(n / 65536), u = n - 65536 * i, n = c + i + 65535, i = Math.floor(n / 65536), c = n - 65536 * i, n = f + i + 65535, i = Math.floor(n / 65536), f = n - 65536 * i, n = l + i + 65535, i = Math.floor(n / 65536), l = n - 65536 * i, n = d + i + 65535, i = Math.floor(n / 65536), d = n - 65536 * i, n = p + i + 65535, i = Math.floor(n / 65536), p = n - 65536 * i, n = b + i + 65535, i = Math.floor(n / 65536), b = n - 65536 * i, n = y + i + 65535, i = Math.floor(n / 65536), y = n - 65536 * i, n = _ + i + 65535, i = Math.floor(n / 65536), _ = n - 65536 * i, n = g + i + 65535, i = Math.floor(n / 65536), g = n - 65536 * i, n = v + i + 65535, i = Math.floor(n / 65536), v = n - 65536 * i, n = w + i + 65535, i = Math.floor(n / 65536), w = n - 65536 * i, o += i - 1 + 37 * (i - 1), t[0] = o, t[1] = s, t[2] = a, t[3] = h, t[4] = u, t[5] = c, t[6] = f, t[7] = l, t[8] = d, t[9] = p, t[10] = b, t[11] = y, t[12] = _, t[13] = g, t[14] = v, t[15] = w
    }

    function f(t, e) {
        c(t, e, e)
    }

    function l(t, e) {
        const r = new Uint8Array(32),
            i = new Float64Array(80),
            l = n(),
            d = n(),
            p = n(),
            b = n(),
            y = n(),
            _ = n();
        for (let n = 0; n < 31; n++) r[n] = t[n];
        r[31] = 127 & t[31] | 64, r[0] &= 248,
            function(t, e) {
                for (let r = 0; r < 16; r++) t[r] = e[2 * r] + (e[2 * r + 1] << 8);
                t[15] &= 32767
            }(i, e);
        for (let n = 0; n < 16; n++) d[n] = i[n];
        l[0] = b[0] = 1;
        for (let n = 254; n >= 0; --n) {
            const t = r[n >>> 3] >>> (7 & n) & 1;
            a(l, d, t), a(p, b, t), h(y, l, p), u(l, l, p), h(p, d, b), u(d, d, b), f(b, y), f(_, l), c(l, p, l), c(p, d, y), h(y, l, p), u(l, l, p), f(d, l), u(p, b, _), c(l, p, o), h(l, l, b), c(p, p, l), c(l, b, _), c(b, d, i), f(d, y), a(l, d, t), a(p, b, t)
        }
        for (let n = 0; n < 16; n++) i[n + 16] = l[n], i[n + 32] = p[n], i[n + 48] = d[n], i[n + 64] = b[n];
        const g = i.subarray(32),
            v = i.subarray(16);
        ! function(t, e) {
            const r = n();
            for (let n = 0; n < 16; n++) r[n] = e[n];
            for (let n = 253; n >= 0; n--) f(r, r), 2 !== n && 4 !== n && c(r, r, e);
            for (let n = 0; n < 16; n++) t[n] = r[n]
        }(g, g), c(v, v, g);
        const w = new Uint8Array(32);
        return function(t, e) {
            const r = n(),
                i = n();
            for (let n = 0; n < 16; n++) i[n] = e[n];
            s(i), s(i), s(i);
            for (let n = 0; n < 2; n++) {
                r[0] = i[0] - 65517;
                for (let e = 1; e < 15; e++) r[e] = i[e] - 65535 - (r[e - 1] >> 16 & 1), r[e - 1] &= 65535;
                r[15] = i[15] - 32767 - (r[14] >> 16 & 1);
                const t = r[15] >> 16 & 1;
                r[14] &= 65535, a(i, r, 1 - t)
            }
            for (let n = 0; n < 16; n++) t[2 * n] = 255 & i[n], t[2 * n + 1] = i[n] >> 8
        }(w, v), w
    }

    function d(t) {
        return l(t, i)
    }

    function p(e) {
        if (e.length !== t.SECRET_KEY_LENGTH) throw new Error(`x25519: seed must be ${t.SECRET_KEY_LENGTH} bytes`);
        const r = new Uint8Array(e);
        return {
            publicKey: d(r),
            secretKey: r
        }
    }
    t.scalarMult = l, t.scalarMultBase = d, t.generateKeyPairFromSeed = p, t.generateKeyPair = function(t) {
        const n = (0, e.randomBytes)(32, t),
            i = p(n);
        return (0, r.wipe)(n), i
    }, t.sharedKey = function(e, r, n = !1) {
        if (e.length !== t.PUBLIC_KEY_LENGTH) throw new Error("X25519: incorrect secret key length");
        if (r.length !== t.PUBLIC_KEY_LENGTH) throw new Error("X25519: incorrect public key length");
        const i = l(e, r);
        if (n) {
            let t = 0;
            for (let e = 0; e < i.length; e++) t |= i[e];
            if (0 === t) throw new Error("X25519: invalid shared key")
        }
        return i
    }
}(Z);
var rt = function(t, e) {
    if (t.length >= 255) throw new TypeError("Alphabet too long");
    for (var r = new Uint8Array(256), n = 0; n < r.length; n++) r[n] = 255;
    for (var i = 0; i < t.length; i++) {
        var o = t.charAt(i),
            s = o.charCodeAt(0);
        if (255 !== r[s]) throw new TypeError(o + " is ambiguous");
        r[s] = i
    }
    var a = t.length,
        h = t.charAt(0),
        u = Math.log(a) / Math.log(256),
        c = Math.log(256) / Math.log(a);

    function f(t) {
        if ("string" != typeof t) throw new TypeError("Expected String");
        if (0 === t.length) return new Uint8Array;
        var e = 0;
        if (" " !== t[e]) {
            for (var n = 0, i = 0; t[e] === h;) n++, e++;
            for (var o = (t.length - e) * u + 1 >>> 0, s = new Uint8Array(o); t[e];) {
                var c = r[t.charCodeAt(e)];
                if (255 === c) return;
                for (var f = 0, l = o - 1;
                    (0 !== c || f < i) && -1 !== l; l--, f++) c += a * s[l] >>> 0, s[l] = c % 256 >>> 0, c = c / 256 >>> 0;
                if (0 !== c) throw new Error("Non-zero carry");
                i = f, e++
            }
            if (" " !== t[e]) {
                for (var d = o - i; d !== o && 0 === s[d];) d++;
                for (var p = new Uint8Array(n + (o - d)), b = n; d !== o;) p[b++] = s[d++];
                return p
            }
        }
    }
    return {
        encode: function(e) {
            if (e instanceof Uint8Array || (ArrayBuffer.isView(e) ? e = new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : Array.isArray(e) && (e = Uint8Array.from(e))), !(e instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
            if (0 === e.length) return "";
            for (var r = 0, n = 0, i = 0, o = e.length; i !== o && 0 === e[i];) i++, r++;
            for (var s = (o - i) * c + 1 >>> 0, u = new Uint8Array(s); i !== o;) {
                for (var f = e[i], l = 0, d = s - 1;
                    (0 !== f || l < n) && -1 !== d; d--, l++) f += 256 * u[d] >>> 0, u[d] = f % a >>> 0, f = f / a >>> 0;
                if (0 !== f) throw new Error("Non-zero carry");
                n = l, i++
            }
            for (var p = s - n; p !== s && 0 === u[p];) p++;
            for (var b = h.repeat(r); p < s; ++p) b += t.charAt(u[p]);
            return b
        },
        decodeUnsafe: f,
        decode: function(t) {
            var r = f(t);
            if (r) return r;
            throw new Error(`Non-${e} character`)
        }
    }
};
class nt {
    constructor(t, e, r) {
        this.name = t, this.prefix = e, this.baseEncode = r
    }
    encode(t) {
        if (t instanceof Uint8Array) return `${this.prefix}${this.baseEncode(t)}`;
        throw Error("Unknown type, must be binary type")
    }
}
class it {
    constructor(t, e, r) {
        if (this.name = t, this.prefix = e, void 0 === e.codePointAt(0)) throw new Error("Invalid prefix character");
        this.prefixCodePoint = e.codePointAt(0), this.baseDecode = r
    }
    decode(t) {
        if ("string" == typeof t) {
            if (t.codePointAt(0) !== this.prefixCodePoint) throw Error(`Unable to decode multibase string ${JSON.stringify(t)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
            return this.baseDecode(t.slice(this.prefix.length))
        }
        throw Error("Can only multibase decode strings")
    }
    or(t) {
        return st(this, t)
    }
}
class ot {
    constructor(t) {
        this.decoders = t
    }
    or(t) {
        return st(this, t)
    }
    decode(t) {
        const e = t[0],
            r = this.decoders[e];
        if (r) return r.decode(t);
        throw RangeError(`Unable to decode multibase string ${JSON.stringify(t)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)
    }
}
const st = (t, e) => new ot({ ...t.decoders || {
        [t.prefix]: t
    },
    ...e.decoders || {
        [e.prefix]: e
    }
});
class at {
    constructor(t, e, r, n) {
        this.name = t, this.prefix = e, this.baseEncode = r, this.baseDecode = n, this.encoder = new nt(t, e, r), this.decoder = new it(t, e, n)
    }
    encode(t) {
        return this.encoder.encode(t)
    }
    decode(t) {
        return this.decoder.decode(t)
    }
}
const ht = ({
        name: t,
        prefix: e,
        encode: r,
        decode: n
    }) => new at(t, e, r, n),
    ut = ({
        prefix: t,
        name: e,
        alphabet: r
    }) => {
        const {
            encode: n,
            decode: i
        } = rt(r, e);
        return ht({
            prefix: t,
            name: e,
            encode: n,
            decode: t => (t => {
                if (t instanceof Uint8Array && "Uint8Array" === t.constructor.name) return t;
                if (t instanceof ArrayBuffer) return new Uint8Array(t);
                if (ArrayBuffer.isView(t)) return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
                throw new Error("Unknown type, must be binary type")
            })(i(t))
        })
    },
    ct = ({
        name: t,
        prefix: e,
        bitsPerChar: r,
        alphabet: n
    }) => ht({
        prefix: e,
        name: t,
        encode: t => ((t, e, r) => {
            const n = "=" === e[e.length - 1],
                i = (1 << r) - 1;
            let o = "",
                s = 0,
                a = 0;
            for (let h = 0; h < t.length; ++h)
                for (a = a << 8 | t[h], s += 8; s > r;) s -= r, o += e[i & a >> s];
            if (s && (o += e[i & a << r - s]), n)
                for (; o.length * r & 7;) o += "=";
            return o
        })(t, n, r),
        decode: e => ((t, e, r, n) => {
            const i = {};
            for (let c = 0; c < e.length; ++c) i[e[c]] = c;
            let o = t.length;
            for (;
                "=" === t[o - 1];) --o;
            const s = new Uint8Array(o * r / 8 | 0);
            let a = 0,
                h = 0,
                u = 0;
            for (let c = 0; c < o; ++c) {
                const e = i[t[c]];
                if (void 0 === e) throw new SyntaxError(`Non-${n} character`);
                h = h << r | e, a += r, a >= 8 && (a -= 8, s[u++] = 255 & h >> a)
            }
            if (a >= r || 255 & h << 8 - a) throw new SyntaxError("Unexpected end of data");
            return s
        })(e, n, r, t)
    }),
    ft = ht({
        prefix: "\0",
        name: "identity",
        encode: t => {
            return e = t, (new TextDecoder).decode(e);
            var e
        },
        decode: t => (t => (new TextEncoder).encode(t))(t)
    }),
    lt = Object.freeze(Object.defineProperty({
        __proto__: null,
        identity: ft
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    dt = ct({
        prefix: "0",
        name: "base2",
        alphabet: "01",
        bitsPerChar: 1
    }),
    pt = Object.freeze(Object.defineProperty({
        __proto__: null,
        base2: dt
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    bt = ct({
        prefix: "7",
        name: "base8",
        alphabet: "01234567",
        bitsPerChar: 3
    }),
    yt = Object.freeze(Object.defineProperty({
        __proto__: null,
        base8: bt
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    _t = ut({
        prefix: "9",
        name: "base10",
        alphabet: "0123456789"
    }),
    gt = Object.freeze(Object.defineProperty({
        __proto__: null,
        base10: _t
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    vt = ct({
        prefix: "f",
        name: "base16",
        alphabet: "0123456789abcdef",
        bitsPerChar: 4
    }),
    wt = ct({
        prefix: "F",
        name: "base16upper",
        alphabet: "0123456789ABCDEF",
        bitsPerChar: 4
    }),
    mt = Object.freeze(Object.defineProperty({
        __proto__: null,
        base16: vt,
        base16upper: wt
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Et = ct({
        prefix: "b",
        name: "base32",
        alphabet: "abcdefghijklmnopqrstuvwxyz234567",
        bitsPerChar: 5
    }),
    St = ct({
        prefix: "B",
        name: "base32upper",
        alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
        bitsPerChar: 5
    }),
    Ot = ct({
        prefix: "c",
        name: "base32pad",
        alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
        bitsPerChar: 5
    }),
    At = ct({
        prefix: "C",
        name: "base32padupper",
        alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
        bitsPerChar: 5
    }),
    Lt = ct({
        prefix: "v",
        name: "base32hex",
        alphabet: "0123456789abcdefghijklmnopqrstuv",
        bitsPerChar: 5
    }),
    Ut = ct({
        prefix: "V",
        name: "base32hexupper",
        alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
        bitsPerChar: 5
    }),
    Tt = ct({
        prefix: "t",
        name: "base32hexpad",
        alphabet: "0123456789abcdefghijklmnopqrstuv=",
        bitsPerChar: 5
    }),
    It = ct({
        prefix: "T",
        name: "base32hexpadupper",
        alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
        bitsPerChar: 5
    }),
    jt = ct({
        prefix: "h",
        name: "base32z",
        alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
        bitsPerChar: 5
    }),
    Mt = Object.freeze(Object.defineProperty({
        __proto__: null,
        base32: Et,
        base32hex: Lt,
        base32hexpad: Tt,
        base32hexpadupper: It,
        base32hexupper: Ut,
        base32pad: Ot,
        base32padupper: At,
        base32upper: St,
        base32z: jt
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    xt = ut({
        prefix: "k",
        name: "base36",
        alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
    }),
    Nt = ut({
        prefix: "K",
        name: "base36upper",
        alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }),
    Pt = Object.freeze(Object.defineProperty({
        __proto__: null,
        base36: xt,
        base36upper: Nt
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Bt = ut({
        name: "base58btc",
        prefix: "z",
        alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
    }),
    Ht = ut({
        name: "base58flickr",
        prefix: "Z",
        alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
    }),
    Rt = Object.freeze(Object.defineProperty({
        __proto__: null,
        base58btc: Bt,
        base58flickr: Ht
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Ct = ct({
        prefix: "m",
        name: "base64",
        alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        bitsPerChar: 6
    }),
    zt = ct({
        prefix: "M",
        name: "base64pad",
        alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        bitsPerChar: 6
    }),
    Dt = ct({
        prefix: "u",
        name: "base64url",
        alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
        bitsPerChar: 6
    }),
    kt = ct({
        prefix: "U",
        name: "base64urlpad",
        alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
        bitsPerChar: 6
    }),
    Kt = Object.freeze(Object.defineProperty({
        __proto__: null,
        base64: Ct,
        base64pad: zt,
        base64url: Dt,
        base64urlpad: kt
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Ft = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"),
    Gt = Ft.reduce(((t, e, r) => (t[r] = e, t)), []),
    Yt = Ft.reduce(((t, e, r) => (t[e.codePointAt(0)] = r, t)), []);
const Vt = ht({
        prefix: "🚀",
        name: "base256emoji",
        encode: function(t) {
            return t.reduce(((t, e) => t += Gt[e]), "")
        },
        decode: function(t) {
            const e = [];
            for (const r of t) {
                const t = Yt[r.codePointAt(0)];
                if (void 0 === t) throw new Error(`Non-base256emoji character: ${r}`);
                e.push(t)
            }
            return new Uint8Array(e)
        }
    }),
    $t = Object.freeze(Object.defineProperty({
        __proto__: null,
        base256emoji: Vt
    }, Symbol.toStringTag, {
        value: "Module"
    }));
new TextEncoder, new TextDecoder;
const Wt = { ...lt,
    ...pt,
    ...yt,
    ...gt,
    ...mt,
    ...Mt,
    ...Pt,
    ...Rt,
    ...Kt,
    ...$t
};

function Xt(t, e, r, n) {
    return {
        name: t,
        prefix: e,
        encoder: {
            name: t,
            prefix: e,
            encode: r
        },
        decoder: {
            decode: n
        }
    }
}
const qt = Xt("utf8", "u", (t => "u" + new TextDecoder("utf8").decode(t)), (t => (new TextEncoder).encode(t.substring(1)))),
    Jt = Xt("ascii", "a", (t => {
        let e = "a";
        for (let r = 0; r < t.length; r++) e += String.fromCharCode(t[r]);
        return e
    }), (t => {
        const e = tt((t = t.substring(1)).length);
        for (let r = 0; r < t.length; r++) e[r] = t.charCodeAt(r);
        return e
    })),
    Zt = {
        utf8: qt,
        "utf-8": qt,
        hex: Wt.base16,
        latin1: Jt,
        ascii: Jt,
        binary: Jt,
        ...Wt
    };

function Qt(t, e = "utf8") {
    const r = Zt[e];
    if (!r) throw new Error(`Unsupported encoding "${e}"`);
    return "utf8" !== e && "utf-8" !== e || null == globalThis.Buffer || null == globalThis.Buffer.from ? r.decoder.decode(`${r.prefix}${t}`) : Q(globalThis.Buffer.from(t, "utf-8"))
}

function te(t, e = "utf8") {
    const r = Zt[e];
    if (!r) throw new Error(`Unsupported encoding "${e}"`);
    return "utf8" !== e && "utf-8" !== e || null == globalThis.Buffer || null == globalThis.Buffer.from ? r.encoder.encode(t).substring(1) : globalThis.Buffer.from(t.buffer, t.byteOffset, t.byteLength).toString("utf8")
}
var ee = {};
const re = e(a);
var ne, ie = {},
    oe = {};
var se, ae = {},
    he = {},
    ue = {};
var ce, fe, le, de, pe = {};

function be() {
    return fe || (fe = 1, function(t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        const e = re;
        e.__exportStar((se || (se = 1, Object.defineProperty(ue, "__esModule", {
            value: !0
        }), ue.ONE_THOUSAND = ue.ONE_HUNDRED = void 0, ue.ONE_HUNDRED = 100, ue.ONE_THOUSAND = 1e3), ue), t), e.__exportStar((ce || (ce = 1, function(t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ONE_YEAR = t.FOUR_WEEKS = t.THREE_WEEKS = t.TWO_WEEKS = t.ONE_WEEK = t.THIRTY_DAYS = t.SEVEN_DAYS = t.FIVE_DAYS = t.THREE_DAYS = t.ONE_DAY = t.TWENTY_FOUR_HOURS = t.TWELVE_HOURS = t.SIX_HOURS = t.THREE_HOURS = t.ONE_HOUR = t.SIXTY_MINUTES = t.THIRTY_MINUTES = t.TEN_MINUTES = t.FIVE_MINUTES = t.ONE_MINUTE = t.SIXTY_SECONDS = t.THIRTY_SECONDS = t.TEN_SECONDS = t.FIVE_SECONDS = t.ONE_SECOND = void 0, t.ONE_SECOND = 1, t.FIVE_SECONDS = 5, t.TEN_SECONDS = 10, t.THIRTY_SECONDS = 30, t.SIXTY_SECONDS = 60, t.ONE_MINUTE = t.SIXTY_SECONDS, t.FIVE_MINUTES = 5 * t.ONE_MINUTE, t.TEN_MINUTES = 10 * t.ONE_MINUTE, t.THIRTY_MINUTES = 30 * t.ONE_MINUTE, t.SIXTY_MINUTES = 60 * t.ONE_MINUTE, t.ONE_HOUR = t.SIXTY_MINUTES, t.THREE_HOURS = 3 * t.ONE_HOUR, t.SIX_HOURS = 6 * t.ONE_HOUR, t.TWELVE_HOURS = 12 * t.ONE_HOUR, t.TWENTY_FOUR_HOURS = 24 * t.ONE_HOUR, t.ONE_DAY = t.TWENTY_FOUR_HOURS, t.THREE_DAYS = 3 * t.ONE_DAY, t.FIVE_DAYS = 5 * t.ONE_DAY, t.SEVEN_DAYS = 7 * t.ONE_DAY, t.THIRTY_DAYS = 30 * t.ONE_DAY, t.ONE_WEEK = t.SEVEN_DAYS, t.TWO_WEEKS = 2 * t.ONE_WEEK, t.THREE_WEEKS = 3 * t.ONE_WEEK, t.FOUR_WEEKS = 4 * t.ONE_WEEK, t.ONE_YEAR = 365 * t.ONE_DAY
        }(pe)), pe), t)
    }(he)), he
}

function ye() {
    return de || (de = 1, function(t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        const e = re;
        e.__exportStar((ne || (ne = 1, Object.defineProperty(oe, "__esModule", {
            value: !0
        }), oe.delay = void 0, oe.delay = function(t) {
            return new Promise((e => {
                setTimeout((() => {
                    e(!0)
                }), t)
            }))
        }), oe), t), e.__exportStar(function() {
            if (le) return ae;
            le = 1, Object.defineProperty(ae, "__esModule", {
                value: !0
            }), ae.fromMiliseconds = ae.toMiliseconds = void 0;
            const t = be();
            return ae.toMiliseconds = function(e) {
                return e * t.ONE_THOUSAND
            }, ae.fromMiliseconds = function(e) {
                return Math.floor(e / t.ONE_THOUSAND)
            }, ae
        }(), t)
    }(ie)), ie
}
var _e, ge = {};
var ve, we, me = {},
    Ee = {};

function Se() {
    return we || (we = 1, function(t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        re.__exportStar((ve || (ve = 1, Object.defineProperty(Ee, "__esModule", {
            value: !0
        }), Ee.IWatch = void 0, Ee.IWatch = class {}), Ee), t)
    }(me)), me
}! function(t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const e = re;
    e.__exportStar(ye(), t), e.__exportStar(function() {
        if (_e) return ge;
        _e = 1, Object.defineProperty(ge, "__esModule", {
            value: !0
        }), ge.Watch = void 0;
        class t {
            constructor() {
                this.timestamps = new Map
            }
            start(t) {
                if (this.timestamps.has(t)) throw new Error(`Watch already started for label: ${t}`);
                this.timestamps.set(t, {
                    started: Date.now()
                })
            }
            stop(t) {
                const e = this.get(t);
                if (void 0 !== e.elapsed) throw new Error(`Watch already stopped for label: ${t}`);
                const r = Date.now() - e.started;
                this.timestamps.set(t, {
                    started: e.started,
                    elapsed: r
                })
            }
            get(t) {
                const e = this.timestamps.get(t);
                if (void 0 === e) throw new Error(`No timestamp found for label: ${t}`);
                return e
            }
            elapsed(t) {
                const e = this.get(t);
                return e.elapsed || Date.now() - e.started
            }
        }
        return ge.Watch = t, ge.default = t, ge
    }(), t), e.__exportStar(Se(), t), e.__exportStar(be(), t)
}(ee);
var Oe = t => encodeURIComponent(t).replace(/[!'()*]/g, (t => `%${t.charCodeAt(0).toString(16).toUpperCase()}`)),
    Ae = "%[a-f0-9]{2}",
    Le = new RegExp("(" + Ae + ")|([^%]+?)", "gi"),
    Ue = new RegExp("(" + Ae + ")+", "gi");

function Te(t, e) {
    try {
        return [decodeURIComponent(t.join(""))]
    } catch (i) {}
    if (1 === t.length) return t;
    e = e || 1;
    var r = t.slice(0, e),
        n = t.slice(e);
    return Array.prototype.concat.call([], Te(r), Te(n))
}

function Ie(t) {
    try {
        return decodeURIComponent(t)
    } catch (n) {
        for (var e = t.match(Le) || [], r = 1; r < e.length; r++) e = (t = Te(e, r).join("")).match(Le) || [];
        return t
    }
}
var je = function(t) {
    if ("string" != typeof t) throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof t + "`");
    try {
        return t = t.replace(/\+/g, " "), decodeURIComponent(t)
    } catch (e) {
        return function(t) {
            for (var r = {
                    "%FE%FF": "��",
                    "%FF%FE": "��"
                }, n = Ue.exec(t); n;) {
                try {
                    r[n[0]] = decodeURIComponent(n[0])
                } catch (e) {
                    var i = Ie(n[0]);
                    i !== n[0] && (r[n[0]] = i)
                }
                n = Ue.exec(t)
            }
            r["%C2"] = "�";
            for (var o = Object.keys(r), s = 0; s < o.length; s++) {
                var a = o[s];
                t = t.replace(new RegExp(a, "g"), r[a])
            }
            return t
        }(t)
    }
};
const Me = {
    waku: {
        publish: "waku_publish",
        batchPublish: "waku_batchPublish",
        subscribe: "waku_subscribe",
        batchSubscribe: "waku_batchSubscribe",
        subscription: "waku_subscription",
        unsubscribe: "waku_unsubscribe",
        batchUnsubscribe: "waku_batchUnsubscribe",
        batchFetchMessages: "waku_batchFetchMessages"
    },
    irn: {
        publish: "irn_publish",
        batchPublish: "irn_batchPublish",
        subscribe: "irn_subscribe",
        batchSubscribe: "irn_batchSubscribe",
        subscription: "irn_subscription",
        unsubscribe: "irn_unsubscribe",
        batchUnsubscribe: "irn_batchUnsubscribe",
        batchFetchMessages: "irn_batchFetchMessages"
    },
    iridium: {
        publish: "iridium_publish",
        batchPublish: "iridium_batchPublish",
        subscribe: "iridium_subscribe",
        batchSubscribe: "iridium_batchSubscribe",
        subscription: "iridium_subscription",
        unsubscribe: "iridium_unsubscribe",
        batchUnsubscribe: "iridium_batchUnsubscribe",
        batchFetchMessages: "iridium_batchFetchMessages"
    }
};

function xe(t, ...e) {
    try {
        return (r = t(...e)) && "function" == typeof r.then ? r : Promise.resolve(r)
    } catch (n) {
        return Promise.reject(n)
    }
    var r
}

function Ne(t) {
    if (function(t) {
            const e = typeof t;
            return null === t || "object" !== e && "function" !== e
        }(t)) return String(t);
    if (function(t) {
            const e = Object.getPrototypeOf(t);
            return !e || e.isPrototypeOf(Object)
        }(t) || Array.isArray(t)) return JSON.stringify(t);
    if ("function" == typeof t.toJSON) return Ne(t.toJSON());
    throw new Error("[unstorage] Cannot stringify value!")
}

function Pe() {
    if (void 0 === typeof Buffer) throw new TypeError("[unstorage] Buffer is not supported!")
}
const Be = "base64:";

function He(t) {
    return t ? t.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") : ""
}

function Re(...t) {
    return He(t.join(":"))
}

function Ce(t) {
    return (t = He(t)) ? t + ":" : ""
}
const ze = () => {
    const t = new Map;
    return {
        name: "memory",
        options: {},
        hasItem: e => t.has(e),
        getItem: e => t.get(e) ? ? null,
        getItemRaw: e => t.get(e) ? ? null,
        setItem(e, r) {
            t.set(e, r)
        },
        setItemRaw(e, r) {
            t.set(e, r)
        },
        removeItem(e) {
            t.delete(e)
        },
        getKeys: () => Array.from(t.keys()),
        clear() {
            t.clear()
        },
        dispose() {
            t.clear()
        }
    }
};

function De(e = {}) {
    const r = {
            mounts: {
                "": e.driver || ze()
            },
            mountpoints: [""],
            watching: !1,
            watchListeners: [],
            unwatch: {}
        },
        n = t => {
            for (const e of r.mountpoints)
                if (t.startsWith(e)) return {
                    base: e,
                    relativeKey: t.slice(e.length),
                    driver: r.mounts[e]
                };
            return {
                base: "",
                relativeKey: t,
                driver: r.mounts[""]
            }
        },
        i = (t, e) => r.mountpoints.filter((r => r.startsWith(t) || e && t.startsWith(r))).map((e => ({
            relativeBase: t.length > e.length ? t.slice(e.length) : void 0,
            mountpoint: e,
            driver: r.mounts[e]
        }))),
        o = (t, e) => {
            if (r.watching) {
                e = He(e);
                for (const n of r.watchListeners) n(t, e)
            }
        },
        s = async () => {
            if (r.watching) {
                for (const t in r.unwatch) await r.unwatch[t]();
                r.unwatch = {}, r.watching = !1
            }
        },
        a = (t, e, r) => {
            const i = new Map,
                o = t => {
                    let e = i.get(t.base);
                    return e || (e = {
                        driver: t.driver,
                        base: t.base,
                        items: []
                    }, i.set(t.base, e)), e
                };
            for (const s of t) {
                const t = "string" == typeof s,
                    r = He(t ? s : s.key),
                    i = t ? void 0 : s.value,
                    a = t || !s.options ? e : { ...e,
                        ...s.options
                    },
                    h = n(r);
                o(h).items.push({
                    key: r,
                    value: i,
                    relativeKey: h.relativeKey,
                    options: a
                })
            }
            return Promise.all([...i.values()].map((t => r(t)))).then((t => t.flat()))
        },
        h = {
            hasItem(t, e = {}) {
                t = He(t);
                const {
                    relativeKey: r,
                    driver: i
                } = n(t);
                return xe(i.hasItem, r, e)
            },
            getItem(e, r = {}) {
                e = He(e);
                const {
                    relativeKey: i,
                    driver: o
                } = n(e);
                return xe(o.getItem, i, r).then((e => t(e)))
            },
            getItems: (e, r) => a(e, r, (e => e.driver.getItems ? xe(e.driver.getItems, e.items.map((t => ({
                key: t.relativeKey,
                options: t.options
            }))), r).then((r => r.map((r => ({
                key: Re(e.base, r.key),
                value: t(r.value)
            }))))) : Promise.all(e.items.map((r => xe(e.driver.getItem, r.relativeKey, r.options).then((e => ({
                key: r.key,
                value: t(e)
            })))))))),
            getItemRaw(t, e = {}) {
                t = He(t);
                const {
                    relativeKey: r,
                    driver: i
                } = n(t);
                return i.getItemRaw ? xe(i.getItemRaw, r, e) : xe(i.getItem, r, e).then((t => function(t) {
                    return "string" != typeof t ? t : t.startsWith(Be) ? (Pe(), Buffer.from(t.slice(7), "base64")) : t
                }(t)))
            },
            async setItem(t, e, r = {}) {
                if (void 0 === e) return h.removeItem(t);
                t = He(t);
                const {
                    relativeKey: i,
                    driver: s
                } = n(t);
                s.setItem && (await xe(s.setItem, i, Ne(e), r), s.watch || o("update", t))
            },
            async setItems(t, e) {
                await a(t, e, (async t => {
                    t.driver.setItems && await xe(t.driver.setItems, t.items.map((t => ({
                        key: t.relativeKey,
                        value: Ne(t.value),
                        options: t.options
                    }))), e), t.driver.setItem && await Promise.all(t.items.map((e => xe(t.driver.setItem, e.relativeKey, Ne(e.value), e.options))))
                }))
            },
            async setItemRaw(t, e, r = {}) {
                if (void 0 === e) return h.removeItem(t, r);
                t = He(t);
                const {
                    relativeKey: i,
                    driver: s
                } = n(t);
                if (s.setItemRaw) await xe(s.setItemRaw, i, e, r);
                else {
                    if (!s.setItem) return;
                    await xe(s.setItem, i, function(t) {
                        if ("string" == typeof t) return t;
                        Pe();
                        const e = Buffer.from(t).toString("base64");
                        return Be + e
                    }(e), r)
                }
                s.watch || o("update", t)
            },
            async removeItem(t, e = {}) {
                "boolean" == typeof e && (e = {
                    removeMeta: e
                }), t = He(t);
                const {
                    relativeKey: r,
                    driver: i
                } = n(t);
                i.removeItem && (await xe(i.removeItem, r, e), (e.removeMeta || e.removeMata) && await xe(i.removeItem, r + "$", e), i.watch || o("remove", t))
            },
            async getMeta(e, r = {}) {
                "boolean" == typeof r && (r = {
                    nativeOnly: r
                }), e = He(e);
                const {
                    relativeKey: i,
                    driver: o
                } = n(e), s = Object.create(null);
                if (o.getMeta && Object.assign(s, await xe(o.getMeta, i, r)), !r.nativeOnly) {
                    const e = await xe(o.getItem, i + "$", r).then((e => t(e)));
                    e && "object" == typeof e && ("string" == typeof e.atime && (e.atime = new Date(e.atime)), "string" == typeof e.mtime && (e.mtime = new Date(e.mtime)), Object.assign(s, e))
                }
                return s
            },
            setMeta(t, e, r = {}) {
                return this.setItem(t + "$", e, r)
            },
            removeMeta(t, e = {}) {
                return this.removeItem(t + "$", e)
            },
            async getKeys(t, e = {}) {
                t = Ce(t);
                const r = i(t, !0);
                let n = [];
                const o = [];
                for (const i of r) {
                    const t = (await xe(i.driver.getKeys, i.relativeBase, e)).map((t => i.mountpoint + He(t))).filter((t => !n.some((e => t.startsWith(e)))));
                    o.push(...t), n = [i.mountpoint, ...n.filter((t => !t.startsWith(i.mountpoint)))]
                }
                return t ? o.filter((e => e.startsWith(t) && !e.endsWith("$"))) : o.filter((t => !t.endsWith("$")))
            },
            async clear(t, e = {}) {
                t = Ce(t), await Promise.all(i(t, !1).map((async t => {
                    if (t.driver.clear) return xe(t.driver.clear, t.relativeBase, e);
                    if (t.driver.removeItem) {
                        const r = await t.driver.getKeys(t.relativeBase || "", e);
                        return Promise.all(r.map((r => t.driver.removeItem(r, e))))
                    }
                })))
            },
            async dispose() {
                await Promise.all(Object.values(r.mounts).map((t => Ke(t))))
            },
            watch: async t => (await (async () => {
                if (!r.watching) {
                    r.watching = !0;
                    for (const t in r.mounts) r.unwatch[t] = await ke(r.mounts[t], o, t)
                }
            })(), r.watchListeners.push(t), async () => {
                r.watchListeners = r.watchListeners.filter((e => e !== t)), 0 === r.watchListeners.length && await s()
            }),
            async unwatch() {
                r.watchListeners = [], await s()
            },
            mount(t, e) {
                if ((t = Ce(t)) && r.mounts[t]) throw new Error(`already mounted at ${t}`);
                return t && (r.mountpoints.push(t), r.mountpoints.sort(((t, e) => e.length - t.length))), r.mounts[t] = e, r.watching && Promise.resolve(ke(e, o, t)).then((e => {
                    r.unwatch[t] = e
                })).catch(console.error), h
            },
            async unmount(t, e = !0) {
                (t = Ce(t)) && r.mounts[t] && (r.watching && t in r.unwatch && (r.unwatch[t](), delete r.unwatch[t]), e && await Ke(r.mounts[t]), r.mountpoints = r.mountpoints.filter((e => e !== t)), delete r.mounts[t])
            },
            getMount(t = "") {
                t = He(t) + ":";
                const e = n(t);
                return {
                    driver: e.driver,
                    base: e.base
                }
            },
            getMounts(t = "", e = {}) {
                t = He(t);
                return i(t, e.parents).map((t => ({
                    driver: t.driver,
                    base: t.mountpoint
                })))
            }
        };
    return h
}

function ke(t, e, r) {
    return t.watch ? t.watch(((t, n) => e(t, r + n))) : () => {}
}
async function Ke(t) {
    "function" == typeof t.dispose && await xe(t.dispose)
}

function Fe(t) {
    return new Promise(((e, r) => {
        t.oncomplete = t.onsuccess = () => e(t.result), t.onabort = t.onerror = () => r(t.error)
    }))
}

function Ge(t, e) {
    const r = indexedDB.open(t);
    r.onupgradeneeded = () => r.result.createObjectStore(e);
    const n = Fe(r);
    return (t, r) => n.then((n => r(n.transaction(e, t).objectStore(e))))
}
let Ye;

function Ve() {
    return Ye || (Ye = Ge("keyval-store", "keyval")), Ye
}

function $e(t, e = Ve()) {
    return e("readonly", (e => Fe(e.get(t))))
}

function We(t = Ve()) {
    return t("readonly", (t => {
        if (t.getAllKeys) return Fe(t.getAllKeys());
        const e = [];
        return function(t, e) {
            return t.openCursor().onsuccess = function() {
                this.result && (e(this.result), this.result.continue())
            }, Fe(t.transaction)
        }(t, (t => e.push(t.key))).then((() => e))
    }))
}

function Xe(t) {
    if ("string" != typeof t) throw new Error("Cannot safe json parse value of type " + typeof t);
    try {
        return (t => {
            const e = t.replace(/([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g, '$1"$2n"$3');
            return JSON.parse(e, ((t, e) => "string" == typeof e && e.match(/^\d+n$/) ? BigInt(e.substring(0, e.length - 1)) : e))
        })(t)
    } catch (e) {
        return t
    }
}

function qe(t) {
    return "string" == typeof t ? t : (e = t, JSON.stringify(e, ((t, e) => "bigint" == typeof e ? e.toString() + "n" : e)) || "");
    var e
}
var Je = (t = {}) => {
    const e = t.base && t.base.length > 0 ? `${t.base}:` : "",
        r = t => e + t;
    let n;
    return t.dbName && t.storeName && (n = Ge(t.dbName, t.storeName)), {
        name: "idb-keyval",
        options: t,
        hasItem: async t => !(typeof(await $e(r(t), n)) > "u"),
        getItem: async t => await $e(r(t), n) ? ? null,
        setItem: (t, e) => function(t, e, r = Ve()) {
            return r("readwrite", (r => (r.put(e, t), Fe(r.transaction))))
        }(r(t), e, n),
        removeItem: t => function(t, e = Ve()) {
            return e("readwrite", (e => (e.delete(t), Fe(e.transaction))))
        }(r(t), n),
        getKeys: () => We(n),
        clear: () => function(t = Ve()) {
            return t("readwrite", (t => (t.clear(), Fe(t.transaction))))
        }(n)
    }
};
let Ze = class {
    constructor() {
        this.indexedDb = De({
            driver: Je({
                dbName: "WALLET_CONNECT_V2_INDEXED_DB",
                storeName: "keyvaluestorage"
            })
        })
    }
    async getKeys() {
        return this.indexedDb.getKeys()
    }
    async getEntries() {
        return (await this.indexedDb.getItems(await this.indexedDb.getKeys())).map((t => [t.key, t.value]))
    }
    async getItem(t) {
        const e = await this.indexedDb.getItem(t);
        if (null !== e) return e
    }
    async setItem(t, e) {
        await this.indexedDb.setItem(t, qe(e))
    }
    async removeItem(t) {
        await this.indexedDb.removeItem(t)
    }
};
var Qe = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {},
    tr = {
        exports: {}
    };

function er(t) {
    var e;
    return [t[0], Xe(null != (e = t[1]) ? e : "")]
}! function() {
    let t;

    function e() {}
    t = e, t.prototype.getItem = function(t) {
        return this.hasOwnProperty(t) ? String(this[t]) : null
    }, t.prototype.setItem = function(t, e) {
        this[t] = String(e)
    }, t.prototype.removeItem = function(t) {
        delete this[t]
    }, t.prototype.clear = function() {
        const t = this;
        Object.keys(t).forEach((function(e) {
            t[e] = void 0, delete t[e]
        }))
    }, t.prototype.key = function(t) {
        return t = t || 0, Object.keys(this)[t]
    }, t.prototype.__defineGetter__("length", (function() {
        return Object.keys(this).length
    })), typeof Qe < "u" && Qe.localStorage ? tr.exports = Qe.localStorage : typeof window < "u" && window.localStorage ? tr.exports = window.localStorage : tr.exports = new e
}();
class rr {
    constructor() {
        this.localStorage = tr.exports
    }
    async getKeys() {
        return Object.keys(this.localStorage)
    }
    async getEntries() {
        return Object.entries(this.localStorage).map(er)
    }
    async getItem(t) {
        const e = this.localStorage.getItem(t);
        if (null !== e) return Xe(e)
    }
    async setItem(t, e) {
        this.localStorage.setItem(t, qe(e))
    }
    async removeItem(t) {
        this.localStorage.removeItem(t)
    }
}
const nr = async (t, e) => {
    e.length && e.forEach((async e => {
        await t.removeItem(e)
    }))
};
class ir {
    constructor() {
        this.initialized = !1, this.setInitialized = t => {
            this.storage = t, this.initialized = !0
        };
        const t = new rr;
        this.storage = t;
        try {
            (async (t, e, r) => {
                const n = "wc_storage_version",
                    i = await e.getItem(n);
                if (i && i >= 1) return void r(e);
                const o = await t.getKeys();
                if (!o.length) return void r(e);
                const s = [];
                for (; o.length;) {
                    const r = o.shift();
                    if (!r) continue;
                    const n = r.toLowerCase();
                    if (n.includes("wc@") || n.includes("walletconnect") || n.includes("wc_") || n.includes("wallet_connect")) {
                        const n = await t.getItem(r);
                        await e.setItem(r, n), s.push(r)
                    }
                }
                await e.setItem(n, 1), r(e), nr(t, s)
            })(t, new Ze, this.setInitialized)
        } catch {
            this.initialized = !0
        }
    }
    async getKeys() {
        return await this.initialize(), this.storage.getKeys()
    }
    async getEntries() {
        return await this.initialize(), this.storage.getEntries()
    }
    async getItem(t) {
        return await this.initialize(), this.storage.getItem(t)
    }
    async setItem(t, e) {
        return await this.initialize(), this.storage.setItem(t, e)
    }
    async removeItem(t) {
        return await this.initialize(), this.storage.removeItem(t)
    }
    async initialize() {
        this.initialized || await new Promise((t => {
            const e = setInterval((() => {
                this.initialized && (clearInterval(e), t())
            }), 20)
        }))
    }
}
let or = class {};

function sr(t) {
    try {
        return JSON.stringify(t)
    } catch (e) {
        return '"[Circular]"'
    }
}
const ar = function(t, e, r) {
    var n = r && r.stringify || sr;
    if ("object" == typeof t && null !== t) {
        var i = e.length + 1;
        if (1 === i) return t;
        var o = new Array(i);
        o[0] = n(t);
        for (var s = 1; s < i; s++) o[s] = n(e[s]);
        return o.join(" ")
    }
    if ("string" != typeof t) return t;
    var a = e.length;
    if (0 === a) return t;
    for (var h = "", u = 0, c = -1, f = t && t.length || 0, l = 0; l < f;) {
        if (37 === t.charCodeAt(l) && l + 1 < f) {
            switch (c = c > -1 ? c : 0, t.charCodeAt(l + 1)) {
                case 100:
                case 102:
                    if (u >= a) break;
                    if (null == e[u]) break;
                    c < l && (h += t.slice(c, l)), h += Number(e[u]), c = l + 2, l++;
                    break;
                case 105:
                    if (u >= a) break;
                    if (null == e[u]) break;
                    c < l && (h += t.slice(c, l)), h += Math.floor(Number(e[u])), c = l + 2, l++;
                    break;
                case 79:
                case 111:
                case 106:
                    if (u >= a) break;
                    if (void 0 === e[u]) break;
                    c < l && (h += t.slice(c, l));
                    var d = typeof e[u];
                    if ("string" === d) {
                        h += "'" + e[u] + "'", c = l + 2, l++;
                        break
                    }
                    if ("function" === d) {
                        h += e[u].name || "<anonymous>", c = l + 2, l++;
                        break
                    }
                    h += n(e[u]), c = l + 2, l++;
                    break;
                case 115:
                    if (u >= a) break;
                    c < l && (h += t.slice(c, l)), h += String(e[u]), c = l + 2, l++;
                    break;
                case 37:
                    c < l && (h += t.slice(c, l)), h += "%", c = l + 2, l++, u--
            }++u
        }++l
    }
    if (-1 === c) return t;
    c < f && (h += t.slice(c));
    return h
};
var hr = fr;
const ur = function() {
        function t(t) {
            return void 0 !== t && t
        }
        try {
            return "undefined" != typeof globalThis || Object.defineProperty(Object.prototype, "globalThis", {
                get: function() {
                    return delete Object.prototype.globalThis, this.globalThis = this
                },
                configurable: !0
            }), globalThis
        } catch (e) {
            return t(self) || t(window) || t(this) || {}
        }
    }().console || {},
    cr = {
        mapHttpRequest: _r,
        mapHttpResponse: _r,
        wrapRequestSerializer: gr,
        wrapResponseSerializer: gr,
        wrapErrorSerializer: gr,
        req: _r,
        res: _r,
        err: function(t) {
            const e = {
                type: t.constructor.name,
                msg: t.message,
                stack: t.stack
            };
            for (const r in t) void 0 === e[r] && (e[r] = t[r]);
            return e
        }
    };

function fr(t) {
    (t = t || {}).browser = t.browser || {};
    const e = t.browser.transmit;
    if (e && "function" != typeof e.send) throw Error("pino: transmit option must have a send function");
    const r = t.browser.write || ur;
    t.browser.write && (t.browser.asObject = !0);
    const n = t.serializers || {},
        i = function(t, e) {
            if (Array.isArray(t)) return t.filter((function(t) {
                return "!stdSerializers.err" !== t
            }));
            return !0 === t && Object.keys(e)
        }(t.browser.serialize, n);
    let o = t.browser.serialize;
    Array.isArray(t.browser.serialize) && t.browser.serialize.indexOf("!stdSerializers.err") > -1 && (o = !1);
    "function" == typeof r && (r.error = r.fatal = r.warn = r.info = r.debug = r.trace = r), !1 === t.enabled && (t.level = "silent");
    const s = t.level || "info",
        a = Object.create(r);
    a.log || (a.log = vr), Object.defineProperty(a, "levelVal", {
        get: function() {
            return "silent" === this.level ? 1 / 0 : this.levels.values[this.level]
        }
    }), Object.defineProperty(a, "level", {
        get: function() {
            return this._level
        },
        set: function(t) {
            if ("silent" !== t && !this.levels.values[t]) throw Error("unknown level " + t);
            this._level = t, lr(h, a, "error", "log"), lr(h, a, "fatal", "error"), lr(h, a, "warn", "error"), lr(h, a, "info", "log"), lr(h, a, "debug", "log"), lr(h, a, "trace", "log")
        }
    });
    const h = {
        transmit: e,
        serialize: i,
        asObject: t.browser.asObject,
        levels: ["error", "fatal", "warn", "info", "debug", "trace"],
        timestamp: yr(t)
    };
    return a.levels = fr.levels, a.level = s, a.setMaxListeners = a.getMaxListeners = a.emit = a.addListener = a.on = a.prependListener = a.once = a.prependOnceListener = a.removeListener = a.removeAllListeners = a.listeners = a.listenerCount = a.eventNames = a.write = a.flush = vr, a.serializers = n, a._serialize = i, a._stdErrSerialize = o, a.child = function(r, o) {
        if (!r) throw new Error("missing bindings for child Pino");
        o = o || {}, i && r.serializers && (o.serializers = r.serializers);
        const s = o.serializers;
        if (i && s) {
            var a = Object.assign({}, n, s),
                h = !0 === t.browser.serialize ? Object.keys(a) : i;
            delete r.serializers, dr([r], h, a, this._stdErrSerialize)
        }

        function u(t) {
            this._childLevel = 1 + (0 | t._childLevel), this.error = pr(t, r, "error"), this.fatal = pr(t, r, "fatal"), this.warn = pr(t, r, "warn"), this.info = pr(t, r, "info"), this.debug = pr(t, r, "debug"), this.trace = pr(t, r, "trace"), a && (this.serializers = a, this._serialize = h), e && (this._logEvent = br([].concat(t._logEvent.bindings, r)))
        }
        return u.prototype = this, new u(this)
    }, e && (a._logEvent = br()), a
}

function lr(t, e, r, n) {
    const i = Object.getPrototypeOf(e);
    e[r] = e.levelVal > e.levels.values[r] ? vr : i[r] ? i[r] : ur[r] || ur[n] || vr,
        function(t, e, r) {
            if (!t.transmit && e[r] === vr) return;
            e[r] = function(n) {
                return function() {
                    const i = t.timestamp(),
                        o = new Array(arguments.length),
                        s = Object.getPrototypeOf && Object.getPrototypeOf(this) === ur ? ur : this;
                    for (var a = 0; a < o.length; a++) o[a] = arguments[a];
                    if (t.serialize && !t.asObject && dr(o, this._serialize, this.serializers, this._stdErrSerialize), t.asObject ? n.call(s, function(t, e, r, n) {
                            t._serialize && dr(r, t._serialize, t.serializers, t._stdErrSerialize);
                            const i = r.slice();
                            let o = i[0];
                            const s = {};
                            n && (s.time = n);
                            s.level = fr.levels.values[e];
                            let a = 1 + (0 | t._childLevel);
                            a < 1 && (a = 1);
                            if (null !== o && "object" == typeof o) {
                                for (; a-- && "object" == typeof i[0];) Object.assign(s, i.shift());
                                o = i.length ? ar(i.shift(), i) : void 0
                            } else "string" == typeof o && (o = ar(i.shift(), i));
                            void 0 !== o && (s.msg = o);
                            return s
                        }(this, r, o, i)) : n.apply(s, o), t.transmit) {
                        const n = t.transmit.level || e.level,
                            s = fr.levels.values[n],
                            a = fr.levels.values[r];
                        if (a < s) return;
                        ! function(t, e, r) {
                            const n = e.send,
                                i = e.ts,
                                o = e.methodLevel,
                                s = e.methodValue,
                                a = e.val,
                                h = t._logEvent.bindings;
                            dr(r, t._serialize || Object.keys(t.serializers), t.serializers, void 0 === t._stdErrSerialize || t._stdErrSerialize), t._logEvent.ts = i, t._logEvent.messages = r.filter((function(t) {
                                return -1 === h.indexOf(t)
                            })), t._logEvent.level.label = o, t._logEvent.level.value = s, n(o, t._logEvent, a), t._logEvent = br(h)
                        }(this, {
                            ts: i,
                            methodLevel: r,
                            methodValue: a,
                            transmitLevel: n,
                            transmitValue: fr.levels.values[t.transmit.level || e.level],
                            send: t.transmit.send,
                            val: e.levelVal
                        }, o)
                    }
                }
            }(e[r])
        }(t, e, r)
}

function dr(t, e, r, n) {
    for (const i in t)
        if (n && t[i] instanceof Error) t[i] = fr.stdSerializers.err(t[i]);
        else if ("object" == typeof t[i] && !Array.isArray(t[i]))
        for (const n in t[i]) e && e.indexOf(n) > -1 && n in r && (t[i][n] = r[n](t[i][n]))
}

function pr(t, e, r) {
    return function() {
        const n = new Array(1 + arguments.length);
        n[0] = e;
        for (var i = 1; i < n.length; i++) n[i] = arguments[i - 1];
        return t[r].apply(this, n)
    }
}

function br(t) {
    return {
        ts: 0,
        messages: [],
        bindings: t || [],
        level: {
            label: "",
            value: 0
        }
    }
}

function yr(t) {
    return "function" == typeof t.timestamp ? t.timestamp : !1 === t.timestamp ? wr : mr
}

function _r() {
    return {}
}

function gr(t) {
    return t
}

function vr() {}

function wr() {
    return !1
}

function mr() {
    return Date.now()
}
fr.levels = {
    values: {
        fatal: 60,
        error: 50,
        warn: 40,
        info: 30,
        debug: 20,
        trace: 10
    },
    labels: {
        10: "trace",
        20: "debug",
        30: "info",
        40: "warn",
        50: "error",
        60: "fatal"
    }
}, fr.stdSerializers = cr, fr.stdTimeFunctions = Object.assign({}, {
    nullTime: wr,
    epochTime: mr,
    unixTime: function() {
        return Math.round(Date.now() / 1e3)
    },
    isoTime: function() {
        return new Date(Date.now()).toISOString()
    }
});
const Er = r(hr),
    Sr = "info",
    Or = "custom_context",
    Ar = 1024e3;
let Lr = class {
        constructor(t) {
            this.nodeValue = t, this.sizeInBytes = (new TextEncoder).encode(this.nodeValue).length, this.next = null
        }
        get value() {
            return this.nodeValue
        }
        get size() {
            return this.sizeInBytes
        }
    },
    Ur = class {
        constructor(t) {
            this.head = null, this.tail = null, this.lengthInNodes = 0, this.maxSizeInBytes = t, this.sizeInBytes = 0
        }
        append(t) {
            const e = new Lr(t);
            if (e.size > this.maxSizeInBytes) throw new Error(`[LinkedList] Value too big to insert into list: ${t} with size ${e.size}`);
            for (; this.size + e.size > this.maxSizeInBytes;) this.shift();
            this.head ? (this.tail && (this.tail.next = e), this.tail = e) : (this.head = e, this.tail = e), this.lengthInNodes++, this.sizeInBytes += e.size
        }
        shift() {
            if (!this.head) return;
            const t = this.head;
            this.head = this.head.next, this.head || (this.tail = null), this.lengthInNodes--, this.sizeInBytes -= t.size
        }
        toArray() {
            const t = [];
            let e = this.head;
            for (; null !== e;) t.push(e.value), e = e.next;
            return t
        }
        get length() {
            return this.lengthInNodes
        }
        get size() {
            return this.sizeInBytes
        }
        toOrderedArray() {
            return Array.from(this)
        }[Symbol.iterator]() {
            let t = this.head;
            return {
                next: () => {
                    if (!t) return {
                        done: !0,
                        value: null
                    };
                    const e = t.value;
                    return t = t.next, {
                        done: !1,
                        value: e
                    }
                }
            }
        }
    },
    Tr = class {
        constructor(t, e = Ar) {
            this.level = t ? ? "error", this.levelValue = hr.levels.values[this.level], this.MAX_LOG_SIZE_IN_BYTES = e, this.logs = new Ur(this.MAX_LOG_SIZE_IN_BYTES)
        }
        forwardToConsole(t, e) {
            e === hr.levels.values.error ? console.error(t) : e === hr.levels.values.warn ? console.warn(t) : e === hr.levels.values.debug ? console.debug(t) : e === hr.levels.values.trace ? console.trace(t) : console.log(t)
        }
        appendToLogs(t) {
            this.logs.append(qe({
                timestamp: (new Date).toISOString(),
                log: t
            }));
            const e = "string" == typeof t ? JSON.parse(t).level : t.level;
            e >= this.levelValue && this.forwardToConsole(t, e)
        }
        getLogs() {
            return this.logs
        }
        clearLogs() {
            this.logs = new Ur(this.MAX_LOG_SIZE_IN_BYTES)
        }
        getLogArray() {
            return Array.from(this.logs)
        }
        logsToBlob(t) {
            const e = this.getLogArray();
            return e.push(qe({
                extraMetadata: t
            })), new Blob(e, {
                type: "application/json"
            })
        }
    };
class Ir {
    constructor(t, e = Ar) {
        this.baseChunkLogger = new Tr(t, e)
    }
    write(t) {
        this.baseChunkLogger.appendToLogs(t)
    }
    getLogs() {
        return this.baseChunkLogger.getLogs()
    }
    clearLogs() {
        this.baseChunkLogger.clearLogs()
    }
    getLogArray() {
        return this.baseChunkLogger.getLogArray()
    }
    logsToBlob(t) {
        return this.baseChunkLogger.logsToBlob(t)
    }
    downloadLogsBlobInBrowser(t) {
        const e = URL.createObjectURL(this.logsToBlob(t)),
            r = document.createElement("a");
        r.href = e, r.download = `walletconnect-logs-${(new Date).toISOString()}.txt`, document.body.appendChild(r), r.click(), document.body.removeChild(r), URL.revokeObjectURL(e)
    }
}
class jr {
    constructor(t, e = Ar) {
        this.baseChunkLogger = new Tr(t, e)
    }
    write(t) {
        this.baseChunkLogger.appendToLogs(t)
    }
    getLogs() {
        return this.baseChunkLogger.getLogs()
    }
    clearLogs() {
        this.baseChunkLogger.clearLogs()
    }
    getLogArray() {
        return this.baseChunkLogger.getLogArray()
    }
    logsToBlob(t) {
        return this.baseChunkLogger.logsToBlob(t)
    }
}
var Mr = Object.defineProperty,
    xr = Object.defineProperties,
    Nr = Object.getOwnPropertyDescriptors,
    Pr = Object.getOwnPropertySymbols,
    Br = Object.prototype.hasOwnProperty,
    Hr = Object.prototype.propertyIsEnumerable,
    Rr = (t, e, r) => e in t ? Mr(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : t[e] = r,
    Cr = (t, e) => {
        for (var r in e || (e = {})) Br.call(e, r) && Rr(t, r, e[r]);
        if (Pr)
            for (var r of Pr(e)) Hr.call(e, r) && Rr(t, r, e[r]);
        return t
    },
    zr = (t, e) => xr(t, Nr(e));

function Dr(t) {
    return zr(Cr({}, t), {
        level: (null == t ? void 0 : t.level) || Sr
    })
}

function kr(t, e = Or) {
    let r = "";
    return r = typeof t.bindings > "u" ? function(t, e = Or) {
        return t[e] || ""
    }(t, e) : t.bindings().context || "", r
}

function Kr(t, e, r = Or) {
    const n = function(t, e, r = Or) {
        const n = kr(t, r);
        return n.trim() ? `${n}/${e}` : e
    }(t, e, r);
    return function(t, e, r = Or) {
        return t[r] = e, t
    }(t.child({
        context: n
    }), n, r)
}

function Fr(t) {
    return typeof t.loggerOverride < "u" && "string" != typeof t.loggerOverride ? {
        logger: t.loggerOverride,
        chunkLoggerController: null
    } : typeof window < "u" ? function(t) {
        var e, r;
        const n = new Ir(null == (e = t.opts) ? void 0 : e.level, t.maxSizeInBytes);
        return {
            logger: Er(zr(Cr({}, t.opts), {
                level: "trace",
                browser: zr(Cr({}, null == (r = t.opts) ? void 0 : r.browser), {
                    write: t => n.write(t)
                })
            })),
            chunkLoggerController: n
        }
    }(t) : function(t) {
        var e;
        const r = new jr(null == (e = t.opts) ? void 0 : e.level, t.maxSizeInBytes);
        return {
            logger: Er(zr(Cr({}, t.opts), {
                level: "trace"
            }), r),
            chunkLoggerController: r
        }
    }(t)
}
var Gr = {},
    Yr = {};
! function(t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var e = f,
        r = O;
    t.DIGEST_LENGTH = 64, t.BLOCK_SIZE = 128;
    var n = function() {
        function n() {
            this.digestLength = t.DIGEST_LENGTH, this.blockSize = t.BLOCK_SIZE, this._stateHi = new Int32Array(8), this._stateLo = new Int32Array(8), this._tempHi = new Int32Array(16), this._tempLo = new Int32Array(16), this._buffer = new Uint8Array(256), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this.reset()
        }
        return n.prototype._initState = function() {
            this._stateHi[0] = 1779033703, this._stateHi[1] = 3144134277, this._stateHi[2] = 1013904242, this._stateHi[3] = 2773480762, this._stateHi[4] = 1359893119, this._stateHi[5] = 2600822924, this._stateHi[6] = 528734635, this._stateHi[7] = 1541459225, this._stateLo[0] = 4089235720, this._stateLo[1] = 2227873595, this._stateLo[2] = 4271175723, this._stateLo[3] = 1595750129, this._stateLo[4] = 2917565137, this._stateLo[5] = 725511199, this._stateLo[6] = 4215389547, this._stateLo[7] = 327033209
        }, n.prototype.reset = function() {
            return this._initState(), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this
        }, n.prototype.clean = function() {
            r.wipe(this._buffer), r.wipe(this._tempHi), r.wipe(this._tempLo), this.reset()
        }, n.prototype.update = function(e, r) {
            if (void 0 === r && (r = e.length), this._finished) throw new Error("SHA512: can't update because hash was finished.");
            var n = 0;
            if (this._bytesHashed += r, this._bufferLength > 0) {
                for (; this._bufferLength < t.BLOCK_SIZE && r > 0;) this._buffer[this._bufferLength++] = e[n++], r--;
                this._bufferLength === this.blockSize && (o(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, this.blockSize), this._bufferLength = 0)
            }
            for (r >= this.blockSize && (n = o(this._tempHi, this._tempLo, this._stateHi, this._stateLo, e, n, r), r %= this.blockSize); r > 0;) this._buffer[this._bufferLength++] = e[n++], r--;
            return this
        }, n.prototype.finish = function(t) {
            if (!this._finished) {
                var r = this._bytesHashed,
                    n = this._bufferLength,
                    i = r / 536870912 | 0,
                    s = r << 3,
                    a = r % 128 < 112 ? 128 : 256;
                this._buffer[n] = 128;
                for (var h = n + 1; h < a - 8; h++) this._buffer[h] = 0;
                e.writeUint32BE(i, this._buffer, a - 8), e.writeUint32BE(s, this._buffer, a - 4), o(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, a), this._finished = !0
            }
            for (h = 0; h < this.digestLength / 8; h++) e.writeUint32BE(this._stateHi[h], t, 8 * h), e.writeUint32BE(this._stateLo[h], t, 8 * h + 4);
            return this
        }, n.prototype.digest = function() {
            var t = new Uint8Array(this.digestLength);
            return this.finish(t), t
        }, n.prototype.saveState = function() {
            if (this._finished) throw new Error("SHA256: cannot save finished state");
            return {
                stateHi: new Int32Array(this._stateHi),
                stateLo: new Int32Array(this._stateLo),
                buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
                bufferLength: this._bufferLength,
                bytesHashed: this._bytesHashed
            }
        }, n.prototype.restoreState = function(t) {
            return this._stateHi.set(t.stateHi), this._stateLo.set(t.stateLo), this._bufferLength = t.bufferLength, t.buffer && this._buffer.set(t.buffer), this._bytesHashed = t.bytesHashed, this._finished = !1, this
        }, n.prototype.cleanSavedState = function(t) {
            r.wipe(t.stateHi), r.wipe(t.stateLo), t.buffer && r.wipe(t.buffer), t.bufferLength = 0, t.bytesHashed = 0
        }, n
    }();
    t.SHA512 = n;
    var i = new Int32Array([1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591]);

    function o(t, r, n, o, s, a, h) {
        for (var u, c, f, l, d, p, b, y, _ = n[0], g = n[1], v = n[2], w = n[3], m = n[4], E = n[5], S = n[6], O = n[7], A = o[0], L = o[1], U = o[2], T = o[3], I = o[4], j = o[5], M = o[6], x = o[7]; h >= 128;) {
            for (var N = 0; N < 16; N++) {
                var P = 8 * N + a;
                t[N] = e.readUint32BE(s, P), r[N] = e.readUint32BE(s, P + 4)
            }
            for (N = 0; N < 80; N++) {
                var B, H, R = _,
                    C = g,
                    z = v,
                    D = w,
                    k = m,
                    K = E,
                    F = S,
                    G = A,
                    Y = L,
                    V = U,
                    $ = T,
                    W = I,
                    X = j,
                    q = M;
                if (d = 65535 & (c = x), p = c >>> 16, b = 65535 & (u = O), y = u >>> 16, d += 65535 & (c = (I >>> 14 | m << 18) ^ (I >>> 18 | m << 14) ^ (m >>> 9 | I << 23)), p += c >>> 16, b += 65535 & (u = (m >>> 14 | I << 18) ^ (m >>> 18 | I << 14) ^ (I >>> 9 | m << 23)), y += u >>> 16, d += 65535 & (c = I & j ^ ~I & M), p += c >>> 16, b += 65535 & (u = m & E ^ ~m & S), y += u >>> 16, u = i[2 * N], d += 65535 & (c = i[2 * N + 1]), p += c >>> 16, b += 65535 & u, y += u >>> 16, u = t[N % 16], p += (c = r[N % 16]) >>> 16, b += 65535 & u, y += u >>> 16, b += (p += (d += 65535 & c) >>> 16) >>> 16, d = 65535 & (c = l = 65535 & d | p << 16), p = c >>> 16, b = 65535 & (u = f = 65535 & b | (y += b >>> 16) << 16), y = u >>> 16, d += 65535 & (c = (A >>> 28 | _ << 4) ^ (_ >>> 2 | A << 30) ^ (_ >>> 7 | A << 25)), p += c >>> 16, b += 65535 & (u = (_ >>> 28 | A << 4) ^ (A >>> 2 | _ << 30) ^ (A >>> 7 | _ << 25)), y += u >>> 16, p += (c = A & L ^ A & U ^ L & U) >>> 16, b += 65535 & (u = _ & g ^ _ & v ^ g & v), y += u >>> 16, B = 65535 & (b += (p += (d += 65535 & c) >>> 16) >>> 16) | (y += b >>> 16) << 16, H = 65535 & d | p << 16, d = 65535 & (c = $), p = c >>> 16, b = 65535 & (u = D), y = u >>> 16, p += (c = l) >>> 16, b += 65535 & (u = f), y += u >>> 16, g = R, v = C, w = z, m = D = 65535 & (b += (p += (d += 65535 & c) >>> 16) >>> 16) | (y += b >>> 16) << 16, E = k, S = K, O = F, _ = B, L = G, U = Y, T = V, I = $ = 65535 & d | p << 16, j = W, M = X, x = q, A = H, N % 16 == 15)
                    for (P = 0; P < 16; P++) u = t[P], d = 65535 & (c = r[P]), p = c >>> 16, b = 65535 & u, y = u >>> 16, u = t[(P + 9) % 16], d += 65535 & (c = r[(P + 9) % 16]), p += c >>> 16, b += 65535 & u, y += u >>> 16, f = t[(P + 1) % 16], d += 65535 & (c = ((l = r[(P + 1) % 16]) >>> 1 | f << 31) ^ (l >>> 8 | f << 24) ^ (l >>> 7 | f << 25)), p += c >>> 16, b += 65535 & (u = (f >>> 1 | l << 31) ^ (f >>> 8 | l << 24) ^ f >>> 7), y += u >>> 16, f = t[(P + 14) % 16], p += (c = ((l = r[(P + 14) % 16]) >>> 19 | f << 13) ^ (f >>> 29 | l << 3) ^ (l >>> 6 | f << 26)) >>> 16, b += 65535 & (u = (f >>> 19 | l << 13) ^ (l >>> 29 | f << 3) ^ f >>> 6), y += u >>> 16, y += (b += (p += (d += 65535 & c) >>> 16) >>> 16) >>> 16, t[P] = 65535 & b | y << 16, r[P] = 65535 & d | p << 16
            }
            d = 65535 & (c = A), p = c >>> 16, b = 65535 & (u = _), y = u >>> 16, u = n[0], p += (c = o[0]) >>> 16, b += 65535 & u, y += u >>> 16, y += (b += (p += (d += 65535 & c) >>> 16) >>> 16) >>> 16, n[0] = _ = 65535 & b | y << 16, o[0] = A = 65535 & d | p << 16, d = 65535 & (c = L), p = c >>> 16, b = 65535 & (u = g), y = u >>> 16, u = n[1], p += (c = o[1]) >>> 16, b += 65535 & u, y += u >>> 16, y += (b += (p += (d += 65535 & c) >>> 16) >>> 16) >>> 16, n[1] = g = 65535 & b | y << 16, o[1] = L = 65535 & d | p << 16, d = 65535 & (c = U), p = c >>> 16, b = 65535 & (u = v), y = u >>> 16, u = n[2], p += (c = o[2]) >>> 16, b += 65535 & u, y += u >>> 16, y += (b += (p += (d += 65535 & c) >>> 16) >>> 16) >>> 16, n[2] = v = 65535 & b | y << 16, o[2] = U = 65535 & d | p << 16, d = 65535 & (c = T), p = c >>> 16, b = 65535 & (u = w), y = u >>> 16, u = n[3], p += (c = o[3]) >>> 16, b += 65535 & u, y += u >>> 16, y += (b += (p += (d += 65535 & c) >>> 16) >>> 16) >>> 16, n[3] = w = 65535 & b | y << 16, o[3] = T = 65535 & d | p << 16, d = 65535 & (c = I), p = c >>> 16, b = 65535 & (u = m), y = u >>> 16, u = n[4], p += (c = o[4]) >>> 16, b += 65535 & u, y += u >>> 16, y += (b += (p += (d += 65535 & c) >>> 16) >>> 16) >>> 16, n[4] = m = 65535 & b | y << 16, o[4] = I = 65535 & d | p << 16, d = 65535 & (c = j), p = c >>> 16, b = 65535 & (u = E), y = u >>> 16, u = n[5], p += (c = o[5]) >>> 16, b += 65535 & u, y += u >>> 16, y += (b += (p += (d += 65535 & c) >>> 16) >>> 16) >>> 16, n[5] = E = 65535 & b | y << 16, o[5] = j = 65535 & d | p << 16, d = 65535 & (c = M), p = c >>> 16, b = 65535 & (u = S), y = u >>> 16, u = n[6], p += (c = o[6]) >>> 16, b += 65535 & u, y += u >>> 16, y += (b += (p += (d += 65535 & c) >>> 16) >>> 16) >>> 16, n[6] = S = 65535 & b | y << 16, o[6] = M = 65535 & d | p << 16, d = 65535 & (c = x), p = c >>> 16, b = 65535 & (u = O), y = u >>> 16, u = n[7], p += (c = o[7]) >>> 16, b += 65535 & u, y += u >>> 16, y += (b += (p += (d += 65535 & c) >>> 16) >>> 16) >>> 16, n[7] = O = 65535 & b | y << 16, o[7] = x = 65535 & d | p << 16, a += 128, h -= 128
        }
        return a
    }
    t.hash = function(t) {
        var e = new n;
        e.update(t);
        var r = e.digest();
        return e.clean(), r
    }
}(Yr),
function(t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.convertSecretKeyToX25519 = t.convertPublicKeyToX25519 = t.verify = t.sign = t.extractPublicKeyFromSecretKey = t.generateKeyPair = t.generateKeyPairFromSeed = t.SEED_LENGTH = t.SECRET_KEY_LENGTH = t.PUBLIC_KEY_LENGTH = t.SIGNATURE_LENGTH = void 0;
    const e = G,
        r = Yr,
        n = O;

    function i(t) {
        const e = new Float64Array(16);
        if (t)
            for (let r = 0; r < t.length; r++) e[r] = t[r];
        return e
    }
    t.SIGNATURE_LENGTH = 64, t.PUBLIC_KEY_LENGTH = 32, t.SECRET_KEY_LENGTH = 64, t.SEED_LENGTH = 32;
    new Uint8Array(32)[0] = 9;
    const o = i(),
        s = i([1]),
        a = i([30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505, 36039, 65139, 11119, 27886, 20995]),
        h = i([61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010, 6542, 64743, 22239, 55772, 9222]),
        u = i([54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982, 57905, 49316, 21502, 52590, 14035, 8553]),
        c = i([26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214]),
        f = i([41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153, 11085, 57099, 20417, 9344, 11139]);

    function l(t, e) {
        for (let r = 0; r < 16; r++) t[r] = 0 | e[r]
    }

    function d(t) {
        let e = 1;
        for (let r = 0; r < 16; r++) {
            let n = t[r] + e + 65535;
            e = Math.floor(n / 65536), t[r] = n - 65536 * e
        }
        t[0] += e - 1 + 37 * (e - 1)
    }

    function p(t, e, r) {
        const n = ~(r - 1);
        for (let i = 0; i < 16; i++) {
            const r = n & (t[i] ^ e[i]);
            t[i] ^= r, e[i] ^= r
        }
    }

    function b(t, e) {
        const r = i(),
            n = i();
        for (let i = 0; i < 16; i++) n[i] = e[i];
        d(n), d(n), d(n);
        for (let i = 0; i < 2; i++) {
            r[0] = n[0] - 65517;
            for (let e = 1; e < 15; e++) r[e] = n[e] - 65535 - (r[e - 1] >> 16 & 1), r[e - 1] &= 65535;
            r[15] = n[15] - 32767 - (r[14] >> 16 & 1);
            const t = r[15] >> 16 & 1;
            r[14] &= 65535, p(n, r, 1 - t)
        }
        for (let i = 0; i < 16; i++) t[2 * i] = 255 & n[i], t[2 * i + 1] = n[i] >> 8
    }

    function y(t, e) {
        let r = 0;
        for (let n = 0; n < 32; n++) r |= t[n] ^ e[n];
        return (1 & r - 1 >>> 8) - 1
    }

    function _(t, e) {
        const r = new Uint8Array(32),
            n = new Uint8Array(32);
        return b(r, t), b(n, e), y(r, n)
    }

    function g(t) {
        const e = new Uint8Array(32);
        return b(e, t), 1 & e[0]
    }

    function v(t, e, r) {
        for (let n = 0; n < 16; n++) t[n] = e[n] + r[n]
    }

    function w(t, e, r) {
        for (let n = 0; n < 16; n++) t[n] = e[n] - r[n]
    }

    function m(t, e, r) {
        let n, i, o = 0,
            s = 0,
            a = 0,
            h = 0,
            u = 0,
            c = 0,
            f = 0,
            l = 0,
            d = 0,
            p = 0,
            b = 0,
            y = 0,
            _ = 0,
            g = 0,
            v = 0,
            w = 0,
            m = 0,
            E = 0,
            S = 0,
            O = 0,
            A = 0,
            L = 0,
            U = 0,
            T = 0,
            I = 0,
            j = 0,
            M = 0,
            x = 0,
            N = 0,
            P = 0,
            B = 0,
            H = r[0],
            R = r[1],
            C = r[2],
            z = r[3],
            D = r[4],
            k = r[5],
            K = r[6],
            F = r[7],
            G = r[8],
            Y = r[9],
            V = r[10],
            $ = r[11],
            W = r[12],
            X = r[13],
            q = r[14],
            J = r[15];
        n = e[0], o += n * H, s += n * R, a += n * C, h += n * z, u += n * D, c += n * k, f += n * K, l += n * F, d += n * G, p += n * Y, b += n * V, y += n * $, _ += n * W, g += n * X, v += n * q, w += n * J, n = e[1], s += n * H, a += n * R, h += n * C, u += n * z, c += n * D, f += n * k, l += n * K, d += n * F, p += n * G, b += n * Y, y += n * V, _ += n * $, g += n * W, v += n * X, w += n * q, m += n * J, n = e[2], a += n * H, h += n * R, u += n * C, c += n * z, f += n * D, l += n * k, d += n * K, p += n * F, b += n * G, y += n * Y, _ += n * V, g += n * $, v += n * W, w += n * X, m += n * q, E += n * J, n = e[3], h += n * H, u += n * R, c += n * C, f += n * z, l += n * D, d += n * k, p += n * K, b += n * F, y += n * G, _ += n * Y, g += n * V, v += n * $, w += n * W, m += n * X, E += n * q, S += n * J, n = e[4], u += n * H, c += n * R, f += n * C, l += n * z, d += n * D, p += n * k, b += n * K, y += n * F, _ += n * G, g += n * Y, v += n * V, w += n * $, m += n * W, E += n * X, S += n * q, O += n * J, n = e[5], c += n * H, f += n * R, l += n * C, d += n * z, p += n * D, b += n * k, y += n * K, _ += n * F, g += n * G, v += n * Y, w += n * V, m += n * $, E += n * W, S += n * X, O += n * q, A += n * J, n = e[6], f += n * H, l += n * R, d += n * C, p += n * z, b += n * D, y += n * k, _ += n * K, g += n * F, v += n * G, w += n * Y, m += n * V, E += n * $, S += n * W, O += n * X, A += n * q, L += n * J, n = e[7], l += n * H, d += n * R, p += n * C, b += n * z, y += n * D, _ += n * k, g += n * K, v += n * F, w += n * G, m += n * Y, E += n * V, S += n * $, O += n * W, A += n * X, L += n * q, U += n * J, n = e[8], d += n * H, p += n * R, b += n * C, y += n * z, _ += n * D, g += n * k, v += n * K, w += n * F, m += n * G, E += n * Y, S += n * V, O += n * $, A += n * W, L += n * X, U += n * q, T += n * J, n = e[9], p += n * H, b += n * R, y += n * C, _ += n * z, g += n * D, v += n * k, w += n * K, m += n * F, E += n * G, S += n * Y, O += n * V, A += n * $, L += n * W, U += n * X, T += n * q, I += n * J, n = e[10], b += n * H, y += n * R, _ += n * C, g += n * z, v += n * D, w += n * k, m += n * K, E += n * F, S += n * G, O += n * Y, A += n * V, L += n * $, U += n * W, T += n * X, I += n * q, j += n * J, n = e[11], y += n * H, _ += n * R, g += n * C, v += n * z, w += n * D, m += n * k, E += n * K, S += n * F, O += n * G, A += n * Y, L += n * V, U += n * $, T += n * W, I += n * X, j += n * q, M += n * J, n = e[12], _ += n * H, g += n * R, v += n * C, w += n * z, m += n * D, E += n * k, S += n * K, O += n * F, A += n * G, L += n * Y, U += n * V, T += n * $, I += n * W, j += n * X, M += n * q, x += n * J, n = e[13], g += n * H, v += n * R, w += n * C, m += n * z, E += n * D, S += n * k, O += n * K, A += n * F, L += n * G, U += n * Y, T += n * V, I += n * $, j += n * W, M += n * X, x += n * q, N += n * J, n = e[14], v += n * H, w += n * R, m += n * C, E += n * z, S += n * D, O += n * k, A += n * K, L += n * F, U += n * G, T += n * Y, I += n * V, j += n * $, M += n * W, x += n * X, N += n * q, P += n * J, n = e[15], w += n * H, m += n * R, E += n * C, S += n * z, O += n * D, A += n * k, L += n * K, U += n * F, T += n * G, I += n * Y, j += n * V, M += n * $, x += n * W, N += n * X, P += n * q, B += n * J, o += 38 * m, s += 38 * E, a += 38 * S, h += 38 * O, u += 38 * A, c += 38 * L, f += 38 * U, l += 38 * T, d += 38 * I, p += 38 * j, b += 38 * M, y += 38 * x, _ += 38 * N, g += 38 * P, v += 38 * B, i = 1, n = o + i + 65535, i = Math.floor(n / 65536), o = n - 65536 * i, n = s + i + 65535, i = Math.floor(n / 65536), s = n - 65536 * i, n = a + i + 65535, i = Math.floor(n / 65536), a = n - 65536 * i, n = h + i + 65535, i = Math.floor(n / 65536), h = n - 65536 * i, n = u + i + 65535, i = Math.floor(n / 65536), u = n - 65536 * i, n = c + i + 65535, i = Math.floor(n / 65536), c = n - 65536 * i, n = f + i + 65535, i = Math.floor(n / 65536), f = n - 65536 * i, n = l + i + 65535, i = Math.floor(n / 65536), l = n - 65536 * i, n = d + i + 65535, i = Math.floor(n / 65536), d = n - 65536 * i, n = p + i + 65535, i = Math.floor(n / 65536), p = n - 65536 * i, n = b + i + 65535, i = Math.floor(n / 65536), b = n - 65536 * i, n = y + i + 65535, i = Math.floor(n / 65536), y = n - 65536 * i, n = _ + i + 65535, i = Math.floor(n / 65536), _ = n - 65536 * i, n = g + i + 65535, i = Math.floor(n / 65536), g = n - 65536 * i, n = v + i + 65535, i = Math.floor(n / 65536), v = n - 65536 * i, n = w + i + 65535, i = Math.floor(n / 65536), w = n - 65536 * i, o += i - 1 + 37 * (i - 1), i = 1, n = o + i + 65535, i = Math.floor(n / 65536), o = n - 65536 * i, n = s + i + 65535, i = Math.floor(n / 65536), s = n - 65536 * i, n = a + i + 65535, i = Math.floor(n / 65536), a = n - 65536 * i, n = h + i + 65535, i = Math.floor(n / 65536), h = n - 65536 * i, n = u + i + 65535, i = Math.floor(n / 65536), u = n - 65536 * i, n = c + i + 65535, i = Math.floor(n / 65536), c = n - 65536 * i, n = f + i + 65535, i = Math.floor(n / 65536), f = n - 65536 * i, n = l + i + 65535, i = Math.floor(n / 65536), l = n - 65536 * i, n = d + i + 65535, i = Math.floor(n / 65536), d = n - 65536 * i, n = p + i + 65535, i = Math.floor(n / 65536), p = n - 65536 * i, n = b + i + 65535, i = Math.floor(n / 65536), b = n - 65536 * i, n = y + i + 65535, i = Math.floor(n / 65536), y = n - 65536 * i, n = _ + i + 65535, i = Math.floor(n / 65536), _ = n - 65536 * i, n = g + i + 65535, i = Math.floor(n / 65536), g = n - 65536 * i, n = v + i + 65535, i = Math.floor(n / 65536), v = n - 65536 * i, n = w + i + 65535, i = Math.floor(n / 65536), w = n - 65536 * i, o += i - 1 + 37 * (i - 1), t[0] = o, t[1] = s, t[2] = a, t[3] = h, t[4] = u, t[5] = c, t[6] = f, t[7] = l, t[8] = d, t[9] = p, t[10] = b, t[11] = y, t[12] = _, t[13] = g, t[14] = v, t[15] = w
    }

    function E(t, e) {
        m(t, e, e)
    }

    function S(t, e) {
        const r = i();
        let n;
        for (n = 0; n < 16; n++) r[n] = e[n];
        for (n = 253; n >= 0; n--) E(r, r), 2 !== n && 4 !== n && m(r, r, e);
        for (n = 0; n < 16; n++) t[n] = r[n]
    }

    function A(t, e) {
        const r = i(),
            n = i(),
            o = i(),
            s = i(),
            a = i(),
            u = i(),
            c = i(),
            f = i(),
            l = i();
        w(r, t[1], t[0]), w(l, e[1], e[0]), m(r, r, l), v(n, t[0], t[1]), v(l, e[0], e[1]), m(n, n, l), m(o, t[3], e[3]), m(o, o, h), m(s, t[2], e[2]), v(s, s, s), w(a, n, r), w(u, s, o), v(c, s, o), v(f, n, r), m(t[0], a, u), m(t[1], f, c), m(t[2], c, u), m(t[3], a, f)
    }

    function L(t, e, r) {
        for (let n = 0; n < 4; n++) p(t[n], e[n], r)
    }

    function U(t, e) {
        const r = i(),
            n = i(),
            o = i();
        S(o, e[2]), m(r, e[0], o), m(n, e[1], o), b(t, n), t[31] ^= g(r) << 7
    }

    function T(t, e, r) {
        l(t[0], o), l(t[1], s), l(t[2], s), l(t[3], o);
        for (let n = 255; n >= 0; --n) {
            const i = r[n / 8 | 0] >> (7 & n) & 1;
            L(t, e, i), A(e, t), A(t, t), L(t, e, i)
        }
    }

    function I(t, e) {
        const r = [i(), i(), i(), i()];
        l(r[0], u), l(r[1], c), l(r[2], s), m(r[3], u, c), T(t, r, e)
    }

    function j(e) {
        if (e.length !== t.SEED_LENGTH) throw new Error(`ed25519: seed must be ${t.SEED_LENGTH} bytes`);
        const n = (0, r.hash)(e);
        n[0] &= 248, n[31] &= 127, n[31] |= 64;
        const o = new Uint8Array(32),
            s = [i(), i(), i(), i()];
        I(s, n), U(o, s);
        const a = new Uint8Array(64);
        return a.set(e), a.set(o, 32), {
            publicKey: o,
            secretKey: a
        }
    }
    t.generateKeyPairFromSeed = j, t.generateKeyPair = function(t) {
        const r = (0, e.randomBytes)(32, t),
            i = j(r);
        return (0, n.wipe)(r), i
    }, t.extractPublicKeyFromSecretKey = function(e) {
        if (e.length !== t.SECRET_KEY_LENGTH) throw new Error(`ed25519: secret key must be ${t.SECRET_KEY_LENGTH} bytes`);
        return new Uint8Array(e.subarray(32))
    };
    const M = new Float64Array([237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16]);

    function x(t, e) {
        let r, n, i, o;
        for (n = 63; n >= 32; --n) {
            for (r = 0, i = n - 32, o = n - 12; i < o; ++i) e[i] += r - 16 * e[n] * M[i - (n - 32)], r = Math.floor((e[i] + 128) / 256), e[i] -= 256 * r;
            e[i] += r, e[n] = 0
        }
        for (r = 0, i = 0; i < 32; i++) e[i] += r - (e[31] >> 4) * M[i], r = e[i] >> 8, e[i] &= 255;
        for (i = 0; i < 32; i++) e[i] -= r * M[i];
        for (n = 0; n < 32; n++) e[n + 1] += e[n] >> 8, t[n] = 255 & e[n]
    }

    function N(t) {
        const e = new Float64Array(64);
        for (let r = 0; r < 64; r++) e[r] = t[r];
        for (let r = 0; r < 64; r++) t[r] = 0;
        x(t, e)
    }

    function P(t, e) {
        const r = i(),
            n = i(),
            h = i(),
            u = i(),
            c = i(),
            d = i(),
            p = i();
        return l(t[2], s),
            function(t, e) {
                for (let r = 0; r < 16; r++) t[r] = e[2 * r] + (e[2 * r + 1] << 8);
                t[15] &= 32767
            }(t[1], e), E(h, t[1]), m(u, h, a), w(h, h, t[2]), v(u, t[2], u), E(c, u), E(d, c), m(p, d, c), m(r, p, h), m(r, r, u),
            function(t, e) {
                const r = i();
                let n;
                for (n = 0; n < 16; n++) r[n] = e[n];
                for (n = 250; n >= 0; n--) E(r, r), 1 !== n && m(r, r, e);
                for (n = 0; n < 16; n++) t[n] = r[n]
            }(r, r), m(r, r, h), m(r, r, u), m(r, r, u), m(t[0], r, u), E(n, t[0]), m(n, n, u), _(n, h) && m(t[0], t[0], f), E(n, t[0]), m(n, n, u), _(n, h) ? -1 : (g(t[0]) === e[31] >> 7 && w(t[0], o, t[0]), m(t[3], t[0], t[1]), 0)
    }
    t.sign = function(t, e) {
        const n = new Float64Array(64),
            o = [i(), i(), i(), i()],
            s = (0, r.hash)(t.subarray(0, 32));
        s[0] &= 248, s[31] &= 127, s[31] |= 64;
        const a = new Uint8Array(64);
        a.set(s.subarray(32), 32);
        const h = new r.SHA512;
        h.update(a.subarray(32)), h.update(e);
        const u = h.digest();
        h.clean(), N(u), I(o, u), U(a, o), h.reset(), h.update(a.subarray(0, 32)), h.update(t.subarray(32)), h.update(e);
        const c = h.digest();
        N(c);
        for (let r = 0; r < 32; r++) n[r] = u[r];
        for (let r = 0; r < 32; r++)
            for (let t = 0; t < 32; t++) n[r + t] += c[r] * s[t];
        return x(a.subarray(32), n), a
    }, t.verify = function(e, n, o) {
        const s = new Uint8Array(32),
            a = [i(), i(), i(), i()],
            h = [i(), i(), i(), i()];
        if (o.length !== t.SIGNATURE_LENGTH) throw new Error(`ed25519: signature must be ${t.SIGNATURE_LENGTH} bytes`);
        if (P(h, e)) return !1;
        const u = new r.SHA512;
        u.update(o.subarray(0, 32)), u.update(e), u.update(n);
        const c = u.digest();
        return N(c), T(a, h, c), I(h, o.subarray(32)), A(a, h), U(s, a), !y(o, s)
    }, t.convertPublicKeyToX25519 = function(t) {
        let e = [i(), i(), i(), i()];
        if (P(e, t)) throw new Error("Ed25519: invalid public key");
        let r = i(),
            n = i(),
            o = e[1];
        v(r, s, o), w(n, s, o), S(n, n), m(r, r, n);
        let a = new Uint8Array(32);
        return b(a, r), a
    }, t.convertSecretKeyToX25519 = function(t) {
        const e = (0, r.hash)(t.subarray(0, 32));
        e[0] &= 248, e[31] &= 127, e[31] |= 64;
        const i = new Uint8Array(e.subarray(0, 32));
        return (0, n.wipe)(e), i
    }
}(Gr);
const Vr = "base64url",
    $r = "did",
    Wr = "key",
    Xr = "base58btc";

function qr(t) {
    return te(Qt(qe(t), "utf8"), Vr)
}

function Jr(t) {
    const e = "z" + te(et([Qt("K36", Xr), t]), Xr);
    return [$r, Wr, e].join(":")
}

function Zr(t = G.randomBytes(32)) {
    return Gr.generateKeyPairFromSeed(t)
}
async function Qr(t, e, r, n, i = ee.fromMiliseconds(Date.now())) {
    const o = {
            alg: "EdDSA",
            typ: "JWT"
        },
        s = {
            iss: Jr(n.publicKey),
            sub: t,
            aud: e,
            iat: i,
            exp: i + r
        },
        a = Qt([qr((h = {
            header: o,
            payload: s
        }).header), qr(h.payload)].join("."), "utf8");
    var h;
    return function(t) {
        return [qr(t.header), qr(t.payload), (e = t.signature, te(e, Vr))].join(".");
        var e
    }({
        header: o,
        payload: s,
        signature: Gr.sign(n.secretKey, a)
    })
}
const tn = "PARSE_ERROR",
    en = "INVALID_REQUEST",
    rn = "METHOD_NOT_FOUND",
    nn = "INVALID_PARAMS",
    on = "INTERNAL_ERROR",
    sn = "SERVER_ERROR",
    an = [-32700, -32600, -32601, -32602, -32603],
    hn = {
        [tn]: {
            code: -32700,
            message: "Parse error"
        },
        [en]: {
            code: -32600,
            message: "Invalid Request"
        },
        [rn]: {
            code: -32601,
            message: "Method not found"
        },
        [nn]: {
            code: -32602,
            message: "Invalid params"
        },
        [on]: {
            code: -32603,
            message: "Internal error"
        },
        [sn]: {
            code: -32e3,
            message: "Server error"
        }
    },
    un = sn;

function cn(t) {
    return Object.keys(hn).includes(t) ? hn[t] : hn[un]
}

function fn(t, e, r) {
    return t.message.includes("getaddrinfo ENOTFOUND") || t.message.includes("connect ECONNREFUSED") ? new Error(`Unavailable ${r} RPC url at ${e}`) : t
}
var ln, dn = {},
    pn = {};
var bn, yn = {};

function _n(t = 3) {
    return Date.now() * Math.pow(10, t) + Math.floor(Math.random() * Math.pow(10, t))
}

function gn(t = 6) {
    return BigInt(_n(t))
}

function vn(t, e, r) {
    return {
        id: r || _n(),
        jsonrpc: "2.0",
        method: t,
        params: e
    }
}

function wn(t, e) {
    return {
        id: t,
        jsonrpc: "2.0",
        result: e
    }
}

function mn(t, e, r) {
    return {
        id: t,
        jsonrpc: "2.0",
        error: En(e)
    }
}

function En(t, e) {
    return void 0 === t ? cn(on) : ("string" == typeof t && (t = Object.assign(Object.assign({}, cn(sn)), {
        message: t
    })), r = t.code, an.includes(r) && (t = function(t) {
        const e = Object.values(hn).find((e => e.code === t));
        return e || hn[un]
    }(t.code)), t);
    var r
}! function(t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const e = re;
    e.__exportStar(function() {
        if (ln) return pn;

        function t() {
            return (null == n ? void 0 : n.crypto) || (null == n ? void 0 : n.msCrypto) || {}
        }

        function e() {
            const e = t();
            return e.subtle || e.webkitSubtle
        }
        return ln = 1, Object.defineProperty(pn, "__esModule", {
            value: !0
        }), pn.isBrowserCryptoAvailable = pn.getSubtleCrypto = pn.getBrowerCrypto = void 0, pn.getBrowerCrypto = t, pn.getSubtleCrypto = e, pn.isBrowserCryptoAvailable = function() {
            return !!t() && !!e()
        }, pn
    }(), t), e.__exportStar(function() {
        if (bn) return yn;

        function t() {
            return "undefined" == typeof document && "undefined" != typeof navigator && "ReactNative" === navigator.product
        }

        function e() {
            return "undefined" != typeof process && void 0 !== process.versions && void 0 !== process.versions.node
        }
        return bn = 1, Object.defineProperty(yn, "__esModule", {
            value: !0
        }), yn.isBrowser = yn.isNode = yn.isReactNative = void 0, yn.isReactNative = t, yn.isNode = e, yn.isBrowser = function() {
            return !t() && !e()
        }, yn
    }(), t)
}(dn);
class Sn {}
class On extends Sn {
    constructor() {
        super()
    }
}
class An extends On {
    constructor(t) {
        super()
    }
}

function Ln(t, e) {
    const r = function(t) {
        const e = t.match(new RegExp(/^\w+:/, "gi"));
        if (e && e.length) return e[0]
    }(t);
    return void 0 !== r && new RegExp(e).test(r)
}

function Un(t) {
    return Ln(t, "^https?:")
}

function Tn(t) {
    return Ln(t, "^wss?:")
}

function In(t) {
    return new RegExp("wss?://localhost(:d{2,5})?").test(t)
}

function jn(t) {
    return "object" == typeof t && "id" in t && "jsonrpc" in t && "2.0" === t.jsonrpc
}

function Mn(t) {
    return jn(t) && "method" in t
}

function xn(t) {
    return jn(t) && (Nn(t) || Pn(t))
}

function Nn(t) {
    return "result" in t
}

function Pn(t) {
    return "error" in t
}
var Bn = {
    exports: {}
};
! function(t, e) {
    var r = "__lodash_hash_undefined__",
        i = 9007199254740991,
        o = "[object Arguments]",
        s = "[object Array]",
        a = "[object Boolean]",
        h = "[object Date]",
        u = "[object Error]",
        c = "[object Function]",
        f = "[object Map]",
        l = "[object Number]",
        d = "[object Object]",
        p = "[object Promise]",
        b = "[object RegExp]",
        y = "[object Set]",
        _ = "[object String]",
        g = "[object Symbol]",
        v = "[object WeakMap]",
        w = "[object ArrayBuffer]",
        m = "[object DataView]",
        E = /^\[object .+?Constructor\]$/,
        S = /^(?:0|[1-9]\d*)$/,
        O = {};
    O["[object Float32Array]"] = O["[object Float64Array]"] = O["[object Int8Array]"] = O["[object Int16Array]"] = O["[object Int32Array]"] = O["[object Uint8Array]"] = O["[object Uint8ClampedArray]"] = O["[object Uint16Array]"] = O["[object Uint32Array]"] = !0, O[o] = O[s] = O[w] = O[a] = O[m] = O[h] = O[u] = O[c] = O[f] = O[l] = O[d] = O[b] = O[y] = O[_] = O[v] = !1;
    var A = "object" == typeof n && n && n.Object === Object && n,
        L = "object" == typeof self && self && self.Object === Object && self,
        U = A || L || Function("return this")(),
        T = e && !e.nodeType && e,
        I = T && t && !t.nodeType && t,
        j = I && I.exports === T,
        M = j && A.process,
        x = function() {
            try {
                return M && M.binding && M.binding("util")
            } catch (t) {}
        }(),
        N = x && x.isTypedArray;

    function P(t, e) {
        for (var r = -1, n = null == t ? 0 : t.length; ++r < n;)
            if (e(t[r], r, t)) return !0;
        return !1
    }

    function B(t) {
        var e = -1,
            r = Array(t.size);
        return t.forEach((function(t, n) {
            r[++e] = [n, t]
        })), r
    }

    function H(t) {
        var e = -1,
            r = Array(t.size);
        return t.forEach((function(t) {
            r[++e] = t
        })), r
    }
    var R, C, z, D = Array.prototype,
        k = Function.prototype,
        K = Object.prototype,
        F = U["__core-js_shared__"],
        G = k.toString,
        Y = K.hasOwnProperty,
        V = (R = /[^.]+$/.exec(F && F.keys && F.keys.IE_PROTO || "")) ? "Symbol(src)_1." + R : "",
        $ = K.toString,
        W = RegExp("^" + G.call(Y).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
        X = j ? U.Buffer : void 0,
        q = U.Symbol,
        J = U.Uint8Array,
        Z = K.propertyIsEnumerable,
        Q = D.splice,
        tt = q ? q.toStringTag : void 0,
        et = Object.getOwnPropertySymbols,
        rt = X ? X.isBuffer : void 0,
        nt = (C = Object.keys, z = Object, function(t) {
            return C(z(t))
        }),
        it = xt(U, "DataView"),
        ot = xt(U, "Map"),
        st = xt(U, "Promise"),
        at = xt(U, "Set"),
        ht = xt(U, "WeakMap"),
        ut = xt(Object, "create"),
        ct = Ht(it),
        ft = Ht(ot),
        lt = Ht(st),
        dt = Ht(at),
        pt = Ht(ht),
        bt = q ? q.prototype : void 0,
        yt = bt ? bt.valueOf : void 0;

    function _t(t) {
        var e = -1,
            r = null == t ? 0 : t.length;
        for (this.clear(); ++e < r;) {
            var n = t[e];
            this.set(n[0], n[1])
        }
    }

    function gt(t) {
        var e = -1,
            r = null == t ? 0 : t.length;
        for (this.clear(); ++e < r;) {
            var n = t[e];
            this.set(n[0], n[1])
        }
    }

    function vt(t) {
        var e = -1,
            r = null == t ? 0 : t.length;
        for (this.clear(); ++e < r;) {
            var n = t[e];
            this.set(n[0], n[1])
        }
    }

    function wt(t) {
        var e = -1,
            r = null == t ? 0 : t.length;
        for (this.__data__ = new vt; ++e < r;) this.add(t[e])
    }

    function mt(t) {
        var e = this.__data__ = new gt(t);
        this.size = e.size
    }

    function Et(t, e) {
        var r = zt(t),
            n = !r && Ct(t),
            i = !r && !n && Dt(t),
            o = !r && !n && !i && Yt(t),
            s = r || n || i || o,
            a = s ? function(t, e) {
                for (var r = -1, n = Array(t); ++r < t;) n[r] = e(r);
                return n
            }(t.length, String) : [],
            h = a.length;
        for (var u in t) !Y.call(t, u) || s && ("length" == u || i && ("offset" == u || "parent" == u) || o && ("buffer" == u || "byteLength" == u || "byteOffset" == u) || Bt(u, h)) || a.push(u);
        return a
    }

    function St(t, e) {
        for (var r = t.length; r--;)
            if (Rt(t[r][0], e)) return r;
        return -1
    }

    function Ot(t) {
        return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : tt && tt in Object(t) ? function(t) {
            var e = Y.call(t, tt),
                r = t[tt];
            try {
                t[tt] = void 0;
                var n = !0
            } catch (o) {}
            var i = $.call(t);
            n && (e ? t[tt] = r : delete t[tt]);
            return i
        }(t) : function(t) {
            return $.call(t)
        }(t)
    }

    function At(t) {
        return Gt(t) && Ot(t) == o
    }

    function Lt(t, e, r, n, i) {
        return t === e || (null == t || null == e || !Gt(t) && !Gt(e) ? t != t && e != e : function(t, e, r, n, i, c) {
            var p = zt(t),
                v = zt(e),
                E = p ? s : Pt(t),
                S = v ? s : Pt(e),
                O = (E = E == o ? d : E) == d,
                A = (S = S == o ? d : S) == d,
                L = E == S;
            if (L && Dt(t)) {
                if (!Dt(e)) return !1;
                p = !0, O = !1
            }
            if (L && !O) return c || (c = new mt), p || Yt(t) ? It(t, e, r, n, i, c) : function(t, e, r, n, i, o, s) {
                switch (r) {
                    case m:
                        if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1;
                        t = t.buffer, e = e.buffer;
                    case w:
                        return !(t.byteLength != e.byteLength || !o(new J(t), new J(e)));
                    case a:
                    case h:
                    case l:
                        return Rt(+t, +e);
                    case u:
                        return t.name == e.name && t.message == e.message;
                    case b:
                    case _:
                        return t == e + "";
                    case f:
                        var c = B;
                    case y:
                        var d = 1 & n;
                        if (c || (c = H), t.size != e.size && !d) return !1;
                        var p = s.get(t);
                        if (p) return p == e;
                        n |= 2, s.set(t, e);
                        var v = It(c(t), c(e), n, i, o, s);
                        return s.delete(t), v;
                    case g:
                        if (yt) return yt.call(t) == yt.call(e)
                }
                return !1
            }(t, e, E, r, n, i, c);
            if (!(1 & r)) {
                var U = O && Y.call(t, "__wrapped__"),
                    T = A && Y.call(e, "__wrapped__");
                if (U || T) {
                    var I = U ? t.value() : t,
                        j = T ? e.value() : e;
                    return c || (c = new mt), i(I, j, r, n, c)
                }
            }
            if (!L) return !1;
            return c || (c = new mt),
                function(t, e, r, n, i, o) {
                    var s = 1 & r,
                        a = jt(t),
                        h = a.length,
                        u = jt(e),
                        c = u.length;
                    if (h != c && !s) return !1;
                    var f = h;
                    for (; f--;) {
                        var l = a[f];
                        if (!(s ? l in e : Y.call(e, l))) return !1
                    }
                    var d = o.get(t);
                    if (d && o.get(e)) return d == e;
                    var p = !0;
                    o.set(t, e), o.set(e, t);
                    var b = s;
                    for (; ++f < h;) {
                        var y = t[l = a[f]],
                            _ = e[l];
                        if (n) var g = s ? n(_, y, l, e, t, o) : n(y, _, l, t, e, o);
                        if (!(void 0 === g ? y === _ || i(y, _, r, n, o) : g)) {
                            p = !1;
                            break
                        }
                        b || (b = "constructor" == l)
                    }
                    if (p && !b) {
                        var v = t.constructor,
                            w = e.constructor;
                        v == w || !("constructor" in t) || !("constructor" in e) || "function" == typeof v && v instanceof v && "function" == typeof w && w instanceof w || (p = !1)
                    }
                    return o.delete(t), o.delete(e), p
                }(t, e, r, n, i, c)
        }(t, e, r, n, Lt, i))
    }

    function Ut(t) {
        return !(!Ft(t) || function(t) {
            return !!V && V in t
        }(t)) && (kt(t) ? W : E).test(Ht(t))
    }

    function Tt(t) {
        if (r = (e = t) && e.constructor, n = "function" == typeof r && r.prototype || K, e !== n) return nt(t);
        var e, r, n, i = [];
        for (var o in Object(t)) Y.call(t, o) && "constructor" != o && i.push(o);
        return i
    }

    function It(t, e, r, n, i, o) {
        var s = 1 & r,
            a = t.length,
            h = e.length;
        if (a != h && !(s && h > a)) return !1;
        var u = o.get(t);
        if (u && o.get(e)) return u == e;
        var c = -1,
            f = !0,
            l = 2 & r ? new wt : void 0;
        for (o.set(t, e), o.set(e, t); ++c < a;) {
            var d = t[c],
                p = e[c];
            if (n) var b = s ? n(p, d, c, e, t, o) : n(d, p, c, t, e, o);
            if (void 0 !== b) {
                if (b) continue;
                f = !1;
                break
            }
            if (l) {
                if (!P(e, (function(t, e) {
                        if (s = e, !l.has(s) && (d === t || i(d, t, r, n, o))) return l.push(e);
                        var s
                    }))) {
                    f = !1;
                    break
                }
            } else if (d !== p && !i(d, p, r, n, o)) {
                f = !1;
                break
            }
        }
        return o.delete(t), o.delete(e), f
    }

    function jt(t) {
        return function(t, e, r) {
            var n = e(t);
            return zt(t) ? n : function(t, e) {
                for (var r = -1, n = e.length, i = t.length; ++r < n;) t[i + r] = e[r];
                return t
            }(n, r(t))
        }(t, Vt, Nt)
    }

    function Mt(t, e) {
        var r, n, i = t.__data__;
        return ("string" == (n = typeof(r = e)) || "number" == n || "symbol" == n || "boolean" == n ? "__proto__" !== r : null === r) ? i["string" == typeof e ? "string" : "hash"] : i.map
    }

    function xt(t, e) {
        var r = function(t, e) {
            return null == t ? void 0 : t[e]
        }(t, e);
        return Ut(r) ? r : void 0
    }
    _t.prototype.clear = function() {
        this.__data__ = ut ? ut(null) : {}, this.size = 0
    }, _t.prototype.delete = function(t) {
        var e = this.has(t) && delete this.__data__[t];
        return this.size -= e ? 1 : 0, e
    }, _t.prototype.get = function(t) {
        var e = this.__data__;
        if (ut) {
            var n = e[t];
            return n === r ? void 0 : n
        }
        return Y.call(e, t) ? e[t] : void 0
    }, _t.prototype.has = function(t) {
        var e = this.__data__;
        return ut ? void 0 !== e[t] : Y.call(e, t)
    }, _t.prototype.set = function(t, e) {
        var n = this.__data__;
        return this.size += this.has(t) ? 0 : 1, n[t] = ut && void 0 === e ? r : e, this
    }, gt.prototype.clear = function() {
        this.__data__ = [], this.size = 0
    }, gt.prototype.delete = function(t) {
        var e = this.__data__,
            r = St(e, t);
        return !(r < 0) && (r == e.length - 1 ? e.pop() : Q.call(e, r, 1), --this.size, !0)
    }, gt.prototype.get = function(t) {
        var e = this.__data__,
            r = St(e, t);
        return r < 0 ? void 0 : e[r][1]
    }, gt.prototype.has = function(t) {
        return St(this.__data__, t) > -1
    }, gt.prototype.set = function(t, e) {
        var r = this.__data__,
            n = St(r, t);
        return n < 0 ? (++this.size, r.push([t, e])) : r[n][1] = e, this
    }, vt.prototype.clear = function() {
        this.size = 0, this.__data__ = {
            hash: new _t,
            map: new(ot || gt),
            string: new _t
        }
    }, vt.prototype.delete = function(t) {
        var e = Mt(this, t).delete(t);
        return this.size -= e ? 1 : 0, e
    }, vt.prototype.get = function(t) {
        return Mt(this, t).get(t)
    }, vt.prototype.has = function(t) {
        return Mt(this, t).has(t)
    }, vt.prototype.set = function(t, e) {
        var r = Mt(this, t),
            n = r.size;
        return r.set(t, e), this.size += r.size == n ? 0 : 1, this
    }, wt.prototype.add = wt.prototype.push = function(t) {
        return this.__data__.set(t, r), this
    }, wt.prototype.has = function(t) {
        return this.__data__.has(t)
    }, mt.prototype.clear = function() {
        this.__data__ = new gt, this.size = 0
    }, mt.prototype.delete = function(t) {
        var e = this.__data__,
            r = e.delete(t);
        return this.size = e.size, r
    }, mt.prototype.get = function(t) {
        return this.__data__.get(t)
    }, mt.prototype.has = function(t) {
        return this.__data__.has(t)
    }, mt.prototype.set = function(t, e) {
        var r = this.__data__;
        if (r instanceof gt) {
            var n = r.__data__;
            if (!ot || n.length < 199) return n.push([t, e]), this.size = ++r.size, this;
            r = this.__data__ = new vt(n)
        }
        return r.set(t, e), this.size = r.size, this
    };
    var Nt = et ? function(t) {
            return null == t ? [] : (t = Object(t), function(t, e) {
                for (var r = -1, n = null == t ? 0 : t.length, i = 0, o = []; ++r < n;) {
                    var s = t[r];
                    e(s, r, t) && (o[i++] = s)
                }
                return o
            }(et(t), (function(e) {
                return Z.call(t, e)
            })))
        } : function() {
            return []
        },
        Pt = Ot;

    function Bt(t, e) {
        return !!(e = null == e ? i : e) && ("number" == typeof t || S.test(t)) && t > -1 && t % 1 == 0 && t < e
    }

    function Ht(t) {
        if (null != t) {
            try {
                return G.call(t)
            } catch (e) {}
            try {
                return t + ""
            } catch (e) {}
        }
        return ""
    }

    function Rt(t, e) {
        return t === e || t != t && e != e
    }(it && Pt(new it(new ArrayBuffer(1))) != m || ot && Pt(new ot) != f || st && Pt(st.resolve()) != p || at && Pt(new at) != y || ht && Pt(new ht) != v) && (Pt = function(t) {
        var e = Ot(t),
            r = e == d ? t.constructor : void 0,
            n = r ? Ht(r) : "";
        if (n) switch (n) {
            case ct:
                return m;
            case ft:
                return f;
            case lt:
                return p;
            case dt:
                return y;
            case pt:
                return v
        }
        return e
    });
    var Ct = At(function() {
            return arguments
        }()) ? At : function(t) {
            return Gt(t) && Y.call(t, "callee") && !Z.call(t, "callee")
        },
        zt = Array.isArray;
    var Dt = rt || function() {
        return !1
    };

    function kt(t) {
        if (!Ft(t)) return !1;
        var e = Ot(t);
        return e == c || "[object GeneratorFunction]" == e || "[object AsyncFunction]" == e || "[object Proxy]" == e
    }

    function Kt(t) {
        return "number" == typeof t && t > -1 && t % 1 == 0 && t <= i
    }

    function Ft(t) {
        var e = typeof t;
        return null != t && ("object" == e || "function" == e)
    }

    function Gt(t) {
        return null != t && "object" == typeof t
    }
    var Yt = N ? function(t) {
        return function(e) {
            return t(e)
        }
    }(N) : function(t) {
        return Gt(t) && Kt(t.length) && !!O[Ot(t)]
    };

    function Vt(t) {
        return null != (e = t) && Kt(e.length) && !kt(e) ? Et(t) : Tt(t);
        var e
    }
    t.exports = function(t, e) {
        return Lt(t, e)
    }
}(Bn, Bn.exports);
const Hn = r(Bn.exports);
var Rn = {
    exports: {}
};
! function(t, e) {
    var r, i = "undefined" != typeof self ? self : n,
        o = function() {
            function t() {
                this.fetch = !1, this.DOMException = i.DOMException
            }
            return t.prototype = i, new t
        }();
    r = o,
        function(t) {
            var e = "URLSearchParams" in r,
                n = "Symbol" in r && "iterator" in Symbol,
                i = "FileReader" in r && "Blob" in r && function() {
                    try {
                        return new Blob, !0
                    } catch (t) {
                        return !1
                    }
                }(),
                o = "FormData" in r,
                s = "ArrayBuffer" in r;
            if (s) var a = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                h = ArrayBuffer.isView || function(t) {
                    return t && a.indexOf(Object.prototype.toString.call(t)) > -1
                };

            function u(t) {
                if ("string" != typeof t && (t = String(t)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t)) throw new TypeError("Invalid character in header field name");
                return t.toLowerCase()
            }

            function c(t) {
                return "string" != typeof t && (t = String(t)), t
            }

            function f(t) {
                var e = {
                    next: function() {
                        var e = t.shift();
                        return {
                            done: void 0 === e,
                            value: e
                        }
                    }
                };
                return n && (e[Symbol.iterator] = function() {
                    return e
                }), e
            }

            function l(t) {
                this.map = {}, t instanceof l ? t.forEach((function(t, e) {
                    this.append(e, t)
                }), this) : Array.isArray(t) ? t.forEach((function(t) {
                    this.append(t[0], t[1])
                }), this) : t && Object.getOwnPropertyNames(t).forEach((function(e) {
                    this.append(e, t[e])
                }), this)
            }

            function d(t) {
                if (t.bodyUsed) return Promise.reject(new TypeError("Already read"));
                t.bodyUsed = !0
            }

            function p(t) {
                return new Promise((function(e, r) {
                    t.onload = function() {
                        e(t.result)
                    }, t.onerror = function() {
                        r(t.error)
                    }
                }))
            }

            function b(t) {
                var e = new FileReader,
                    r = p(e);
                return e.readAsArrayBuffer(t), r
            }

            function y(t) {
                if (t.slice) return t.slice(0);
                var e = new Uint8Array(t.byteLength);
                return e.set(new Uint8Array(t)), e.buffer
            }

            function _() {
                return this.bodyUsed = !1, this._initBody = function(t) {
                    var r;
                    this._bodyInit = t, t ? "string" == typeof t ? this._bodyText = t : i && Blob.prototype.isPrototypeOf(t) ? this._bodyBlob = t : o && FormData.prototype.isPrototypeOf(t) ? this._bodyFormData = t : e && URLSearchParams.prototype.isPrototypeOf(t) ? this._bodyText = t.toString() : s && i && (r = t) && DataView.prototype.isPrototypeOf(r) ? (this._bodyArrayBuffer = y(t.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : s && (ArrayBuffer.prototype.isPrototypeOf(t) || h(t)) ? this._bodyArrayBuffer = y(t) : this._bodyText = t = Object.prototype.toString.call(t) : this._bodyText = "", this.headers.get("content-type") || ("string" == typeof t ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : e && URLSearchParams.prototype.isPrototypeOf(t) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                }, i && (this.blob = function() {
                    var t = d(this);
                    if (t) return t;
                    if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                    if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                    if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                    return Promise.resolve(new Blob([this._bodyText]))
                }, this.arrayBuffer = function() {
                    return this._bodyArrayBuffer ? d(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(b)
                }), this.text = function() {
                    var t, e, r, n = d(this);
                    if (n) return n;
                    if (this._bodyBlob) return t = this._bodyBlob, e = new FileReader, r = p(e), e.readAsText(t), r;
                    if (this._bodyArrayBuffer) return Promise.resolve(function(t) {
                        for (var e = new Uint8Array(t), r = new Array(e.length), n = 0; n < e.length; n++) r[n] = String.fromCharCode(e[n]);
                        return r.join("")
                    }(this._bodyArrayBuffer));
                    if (this._bodyFormData) throw new Error("could not read FormData body as text");
                    return Promise.resolve(this._bodyText)
                }, o && (this.formData = function() {
                    return this.text().then(w)
                }), this.json = function() {
                    return this.text().then(JSON.parse)
                }, this
            }
            l.prototype.append = function(t, e) {
                t = u(t), e = c(e);
                var r = this.map[t];
                this.map[t] = r ? r + ", " + e : e
            }, l.prototype.delete = function(t) {
                delete this.map[u(t)]
            }, l.prototype.get = function(t) {
                return t = u(t), this.has(t) ? this.map[t] : null
            }, l.prototype.has = function(t) {
                return this.map.hasOwnProperty(u(t))
            }, l.prototype.set = function(t, e) {
                this.map[u(t)] = c(e)
            }, l.prototype.forEach = function(t, e) {
                for (var r in this.map) this.map.hasOwnProperty(r) && t.call(e, this.map[r], r, this)
            }, l.prototype.keys = function() {
                var t = [];
                return this.forEach((function(e, r) {
                    t.push(r)
                })), f(t)
            }, l.prototype.values = function() {
                var t = [];
                return this.forEach((function(e) {
                    t.push(e)
                })), f(t)
            }, l.prototype.entries = function() {
                var t = [];
                return this.forEach((function(e, r) {
                    t.push([r, e])
                })), f(t)
            }, n && (l.prototype[Symbol.iterator] = l.prototype.entries);
            var g = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

            function v(t, e) {
                var r, n, i = (e = e || {}).body;
                if (t instanceof v) {
                    if (t.bodyUsed) throw new TypeError("Already read");
                    this.url = t.url, this.credentials = t.credentials, e.headers || (this.headers = new l(t.headers)), this.method = t.method, this.mode = t.mode, this.signal = t.signal, i || null == t._bodyInit || (i = t._bodyInit, t.bodyUsed = !0)
                } else this.url = String(t);
                if (this.credentials = e.credentials || this.credentials || "same-origin", !e.headers && this.headers || (this.headers = new l(e.headers)), this.method = (r = e.method || this.method || "GET", n = r.toUpperCase(), g.indexOf(n) > -1 ? n : r), this.mode = e.mode || this.mode || null, this.signal = e.signal || this.signal, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && i) throw new TypeError("Body not allowed for GET or HEAD requests");
                this._initBody(i)
            }

            function w(t) {
                var e = new FormData;
                return t.trim().split("&").forEach((function(t) {
                    if (t) {
                        var r = t.split("="),
                            n = r.shift().replace(/\+/g, " "),
                            i = r.join("=").replace(/\+/g, " ");
                        e.append(decodeURIComponent(n), decodeURIComponent(i))
                    }
                })), e
            }

            function m(t, e) {
                e || (e = {}), this.type = "default", this.status = void 0 === e.status ? 200 : e.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in e ? e.statusText : "OK", this.headers = new l(e.headers), this.url = e.url || "", this._initBody(t)
            }
            v.prototype.clone = function() {
                return new v(this, {
                    body: this._bodyInit
                })
            }, _.call(v.prototype), _.call(m.prototype), m.prototype.clone = function() {
                return new m(this._bodyInit, {
                    status: this.status,
                    statusText: this.statusText,
                    headers: new l(this.headers),
                    url: this.url
                })
            }, m.error = function() {
                var t = new m(null, {
                    status: 0,
                    statusText: ""
                });
                return t.type = "error", t
            };
            var E = [301, 302, 303, 307, 308];
            m.redirect = function(t, e) {
                if (-1 === E.indexOf(e)) throw new RangeError("Invalid status code");
                return new m(null, {
                    status: e,
                    headers: {
                        location: t
                    }
                })
            }, t.DOMException = r.DOMException;
            try {
                new t.DOMException
            } catch (O) {
                t.DOMException = function(t, e) {
                    this.message = t, this.name = e;
                    var r = Error(t);
                    this.stack = r.stack
                }, t.DOMException.prototype = Object.create(Error.prototype), t.DOMException.prototype.constructor = t.DOMException
            }

            function S(e, r) {
                return new Promise((function(n, o) {
                    var s = new v(e, r);
                    if (s.signal && s.signal.aborted) return o(new t.DOMException("Aborted", "AbortError"));
                    var a = new XMLHttpRequest;

                    function h() {
                        a.abort()
                    }
                    a.onload = function() {
                        var t, e, r = {
                            status: a.status,
                            statusText: a.statusText,
                            headers: (t = a.getAllResponseHeaders() || "", e = new l, t.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach((function(t) {
                                var r = t.split(":"),
                                    n = r.shift().trim();
                                if (n) {
                                    var i = r.join(":").trim();
                                    e.append(n, i)
                                }
                            })), e)
                        };
                        r.url = "responseURL" in a ? a.responseURL : r.headers.get("X-Request-URL");
                        var i = "response" in a ? a.response : a.responseText;
                        n(new m(i, r))
                    }, a.onerror = function() {
                        o(new TypeError("Network request failed"))
                    }, a.ontimeout = function() {
                        o(new TypeError("Network request failed"))
                    }, a.onabort = function() {
                        o(new t.DOMException("Aborted", "AbortError"))
                    }, a.open(s.method, s.url, !0), "include" === s.credentials ? a.withCredentials = !0 : "omit" === s.credentials && (a.withCredentials = !1), "responseType" in a && i && (a.responseType = "blob"), s.headers.forEach((function(t, e) {
                        a.setRequestHeader(e, t)
                    })), s.signal && (s.signal.addEventListener("abort", h), a.onreadystatechange = function() {
                        4 === a.readyState && s.signal.removeEventListener("abort", h)
                    }), a.send(void 0 === s._bodyInit ? null : s._bodyInit)
                }))
            }
            S.polyfill = !0, r.fetch || (r.fetch = S, r.Headers = l, r.Request = v, r.Response = m), t.Headers = l, t.Request = v, t.Response = m, t.fetch = S, Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }({}), o.fetch.ponyfill = !0, delete o.fetch.polyfill;
    var s = o;
    (e = s.fetch).default = s.fetch, e.fetch = s.fetch, e.Headers = s.Headers, e.Request = s.Request, e.Response = s.Response, t.exports = e
}(Rn, Rn.exports);
const Cn = r(Rn.exports);
var zn = Object.defineProperty,
    Dn = Object.defineProperties,
    kn = Object.getOwnPropertyDescriptors,
    Kn = Object.getOwnPropertySymbols,
    Fn = Object.prototype.hasOwnProperty,
    Gn = Object.prototype.propertyIsEnumerable,
    Yn = (t, e, r) => e in t ? zn(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : t[e] = r,
    Vn = (t, e) => {
        for (var r in e || (e = {})) Fn.call(e, r) && Yn(t, r, e[r]);
        if (Kn)
            for (var r of Kn(e)) Gn.call(e, r) && Yn(t, r, e[r]);
        return t
    },
    $n = (t, e) => Dn(t, kn(e));
const Wn = {
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
    },
    method: "POST"
};
class Xn {
    constructor(t, e = !1) {
        if (this.url = t, this.disableProviderPing = e, this.events = new s.EventEmitter, this.isAvailable = !1, this.registering = !1, !Un(t)) throw new Error(`Provided URL is not compatible with HTTP connection: ${t}`);
        this.url = t, this.disableProviderPing = e
    }
    get connected() {
        return this.isAvailable
    }
    get connecting() {
        return this.registering
    }
    on(t, e) {
        this.events.on(t, e)
    }
    once(t, e) {
        this.events.once(t, e)
    }
    off(t, e) {
        this.events.off(t, e)
    }
    removeListener(t, e) {
        this.events.removeListener(t, e)
    }
    async open(t = this.url) {
        await this.register(t)
    }
    async close() {
        if (!this.isAvailable) throw new Error("Connection already closed");
        this.onClose()
    }
    async send(t) {
        this.isAvailable || await this.register();
        try {
            const e = qe(t),
                r = await (await Cn(this.url, $n(Vn({}, Wn), {
                    body: e
                }))).json();
            this.onPayload({
                data: r
            })
        } catch (e) {
            this.onError(t.id, e)
        }
    }
    async register(t = this.url) {
        if (!Un(t)) throw new Error(`Provided URL is not compatible with HTTP connection: ${t}`);
        if (this.registering) {
            const t = this.events.getMaxListeners();
            return (this.events.listenerCount("register_error") >= t || this.events.listenerCount("open") >= t) && this.events.setMaxListeners(t + 1), new Promise(((t, e) => {
                this.events.once("register_error", (t => {
                    this.resetMaxListeners(), e(t)
                })), this.events.once("open", (() => {
                    if (this.resetMaxListeners(), typeof this.isAvailable > "u") return e(new Error("HTTP connection is missing or invalid"));
                    t()
                }))
            }))
        }
        this.url = t, this.registering = !0;
        try {
            if (!this.disableProviderPing) {
                const e = qe({
                    id: 1,
                    jsonrpc: "2.0",
                    method: "test",
                    params: []
                });
                await Cn(t, $n(Vn({}, Wn), {
                    body: e
                }))
            }
            this.onOpen()
        } catch (e) {
            const t = this.parseError(e);
            throw this.events.emit("register_error", t), this.onClose(), t
        }
    }
    onOpen() {
        this.isAvailable = !0, this.registering = !1, this.events.emit("open")
    }
    onClose() {
        this.isAvailable = !1, this.registering = !1, this.events.emit("close")
    }
    onPayload(t) {
        if (typeof t.data > "u") return;
        const e = "string" == typeof t.data ? Xe(t.data) : t.data;
        this.events.emit("payload", e)
    }
    onError(t, e) {
        const r = this.parseError(e),
            n = mn(t, r.message || r.toString());
        this.events.emit("payload", n)
    }
    parseError(t, e = this.url) {
        return fn(t, e, "HTTP")
    }
    resetMaxListeners() {
        this.events.getMaxListeners() > 10 && this.events.setMaxListeners(10)
    }
}
export {
    Fr as A, Mn as B, Me as C, wn as D, Kr as E, Nn as F, Hn as G, F as H, or as I, _n as J, Xn as K, re as L, Qt as M, te as N, et as O, Er as W, J as a, Wt as b, ee as c, je as d, u as e, An as f, vn as g, gn as h, Pn as i, xn as j, Tn as k, qe as l, dn as m, In as n, Xe as o, mn as p, fn as q, G as r, Oe as s, Dr as t, ir as u, Zr as v, Jr as w, Z as x, kr as y, Qr as z
};