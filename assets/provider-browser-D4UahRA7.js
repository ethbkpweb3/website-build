var t, e, n, r, s, i, a, o, c, l, u, h, f, p, d, g, m, y, w, A, b, v, E, k, P, x, N, C, O, R, B, T, I, M, F, D, S, U, L, G, Q, H, j, W, J, V, z, K, Y, Z, q, X, _, $, tt, et, nt, rt, st, it, at, ot, ct, lt, ut, ht, ft, pt, dt, gt, mt, yt, wt, At, bt, vt, Et, kt, Pt, xt, Nt, Ct, Ot, Rt, Bt, Tt, It, Mt, Ft, Dt, St, Ut, Lt, Gt, Qt, Ht, jt, Wt, Jt, Vt, zt, Kt, Yt, Zt, qt, Xt, _t, $t, te, ee, ne, re, se, ie, ae, oe, ce, le, ue, he, fe, pe, de, ge, me, ye, we, Ae, be, ve, Ee, ke, Pe, xe, Ne, Ce, Oe, Re, Be, Te, Ie, Me, Fe, De, Se, Ue, Le, Ge, Qe, He, je, We, Je, Ve, ze, Ke, Ye, Ze, qe, Xe, _e, $e, tn = Object.defineProperty,
    en = t => {
        throw TypeError(t)
    },
    nn = (t, e, n) => ((t, e, n) => e in t ? tn(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : t[e] = n)(t, "symbol" != typeof e ? e + "" : e, n),
    rn = (t, e, n) => e.has(t) || en("Cannot " + n),
    sn = (t, e, n) => (rn(t, e, "read from private field"), n ? n.call(t) : e.get(t)),
    an = (t, e, n) => e.has(t) ? en("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n),
    on = (t, e, n, r) => (rn(t, e, "write to private field"), r ? r.call(t, n) : e.set(t, n), n),
    cn = (t, e, n) => (rn(t, e, "access private method"), n),
    ln = (t, e, n, r) => ({
        set _(r) {
            on(t, e, r, n)
        },
        get _() {
            return sn(t, e, r)
        }
    });
import {
    w as un,
    S as hn,
    u as fn,
    s as pn,
    k as dn
} from "./sha256-o0pdH_sn.js";
import {
    s as gn
} from "./secp256k1-LeYlzbB0.js";

function mn(t, e, n) {
    const r = e.split("|").map((t => t.trim()));
    for (let i = 0; i < r.length; i++) switch (e) {
        case "any":
            return;
        case "bigint":
        case "boolean":
        case "number":
        case "string":
            if (typeof t === e) return
    }
    const s = new Error(`invalid value for type ${e}`);
    throw s.code = "INVALID_ARGUMENT", s.argument = `value.${n}`, s.value = t, s
}
async function yn(t) {
    const e = Object.keys(t);
    return (await Promise.all(e.map((e => Promise.resolve(t[e]))))).reduce(((t, n, r) => (t[e[r]] = n, t)), {})
}

function wn(t, e, n) {
    for (let r in e) {
        let s = e[r];
        const i = n ? n[r] : null;
        i && mn(s, i, r), Object.defineProperty(t, r, {
            enumerable: !0,
            value: s,
            writable: !1
        })
    }
}

function An(t) {
    if (null == t) return "null";
    if (Array.isArray(t)) return "[ " + t.map(An).join(", ") + " ]";
    if (t instanceof Uint8Array) {
        const e = "0123456789abcdef";
        let n = "0x";
        for (let r = 0; r < t.length; r++) n += e[t[r] >> 4], n += e[15 & t[r]];
        return n
    }
    if ("object" == typeof t && "function" == typeof t.toJSON) return An(t.toJSON());
    switch (typeof t) {
        case "boolean":
        case "symbol":
        case "number":
            return t.toString();
        case "bigint":
            return BigInt(t).toString();
        case "string":
            return JSON.stringify(t);
        case "object":
            {
                const e = Object.keys(t);
                return e.sort(),
                "{ " + e.map((e => `${An(e)}: ${An(t[e])}`)).join(", ") + " }"
            }
    }
    return "[ COULD NOT SERIALIZE ]"
}

function bn(t, e) {
    return t && t.code === e
}

function vn(t) {
    return bn(t, "CALL_EXCEPTION")
}

function En(t, e, n) {
    let r, s = t; {
        const r = [];
        if (n) {
            if ("message" in n || "code" in n || "name" in n) throw new Error(`value will overwrite populated values: ${An(n)}`);
            for (const t in n) {
                if ("shortMessage" === t) continue;
                const e = n[t];
                r.push(t + "=" + An(e))
            }
        }
        r.push(`code=${e}`), r.push("version=6.13.3"), r.length && (t += " (" + r.join(", ") + ")")
    }
    switch (e) {
        case "INVALID_ARGUMENT":
            r = new TypeError(t);
            break;
        case "NUMERIC_FAULT":
        case "BUFFER_OVERRUN":
            r = new RangeError(t);
            break;
        default:
            r = new Error(t)
    }
    return wn(r, {
        code: e
    }), n && Object.assign(r, n), null == r.shortMessage && wn(r, {
        shortMessage: s
    }), r
}

function kn(t, e, n, r) {
    if (!t) throw En(e, n, r)
}

function Pn(t, e, n, r) {
    kn(t, e, "INVALID_ARGUMENT", {
        argument: n,
        value: r
    })
}

function xn(t, e, n) {
    null == n && (n = ""), n && (n = ": " + n), kn(t >= e, "missing arguemnt" + n, "MISSING_ARGUMENT", {
        count: t,
        expectedCount: e
    }), kn(t <= e, "too many arguments" + n, "UNEXPECTED_ARGUMENT", {
        count: t,
        expectedCount: e
    })
}

function Nn(t, e, n) {
    if (null == n && (n = ""), t !== e) {
        let t = n,
            e = "new";
        n && (t += ".", e += " " + n), kn(!1, `private constructor; use ${t}from* methods`, "UNSUPPORTED_OPERATION", {
            operation: e
        })
    }
}

function Cn(t, e, n) {
    if (t instanceof Uint8Array) return n ? new Uint8Array(t) : t;
    if ("string" == typeof t && t.match(/^0x(?:[0-9a-f][0-9a-f])*$/i)) {
        const e = new Uint8Array((t.length - 2) / 2);
        let n = 2;
        for (let r = 0; r < e.length; r++) e[r] = parseInt(t.substring(n, n + 2), 16), n += 2;
        return e
    }
    Pn(!1, "invalid BytesLike value", e || "value", t)
}

function On(t, e) {
    return Cn(t, e, !1)
}

function Rn(t, e) {
    return Cn(t, e, !0)
}

function Bn(t, e) {
    return !("string" != typeof t || !t.match(/^0x[0-9A-Fa-f]*$/)) && (("number" != typeof e || t.length === 2 + 2 * e) && (!0 !== e || t.length % 2 == 0))
}

function Tn(t) {
    return Bn(t, !0) || t instanceof Uint8Array
}["NFD", "NFC", "NFKD", "NFKC"].reduce(((t, e) => {
    try {
        if ("test" !== "test".normalize(e)) throw new Error("bad");
        if ("NFD" === e) {
            const t = String.fromCharCode(233).normalize("NFD");
            if (t !== String.fromCharCode(101, 769)) throw new Error("broken")
        }
        t.push(e)
    } catch (n) {}
    return t
}), []);
const In = "0123456789abcdef";

function Mn(t) {
    const e = On(t);
    let n = "0x";
    for (let r = 0; r < e.length; r++) {
        const t = e[r];
        n += In[(240 & t) >> 4] + In[15 & t]
    }
    return n
}

function Fn(t) {
    return "0x" + t.map((t => Mn(t).substring(2))).join("")
}

function Dn(t) {
    return Bn(t, !0) ? (t.length - 2) / 2 : On(t).length
}

function Sn(t, e, n) {
    const r = On(t);
    return null != n && n > r.length && kn(!1, "cannot slice beyond data bounds", "BUFFER_OVERRUN", {
        buffer: r,
        length: r.length,
        offset: n
    }), Mn(r.slice(null == e ? 0 : e, null == n ? r.length : n))
}

function Un(t, e, n) {
    const r = On(t);
    kn(e >= r.length, "padding exceeds data length", "BUFFER_OVERRUN", {
        buffer: new Uint8Array(r),
        length: e,
        offset: e + 1
    });
    const s = new Uint8Array(e);
    return s.fill(0), n ? s.set(r, e - r.length) : s.set(r, 0), Mn(s)
}

function Ln(t, e) {
    return Un(t, e, !0)
}
const Gn = BigInt(0),
    Qn = BigInt(1),
    Hn = 9007199254740991;

function jn(t, e) {
    const n = zn(t, "value"),
        r = BigInt(Zn(e, "width"));
    if (kn(n >> r === Gn, "overflow", "NUMERIC_FAULT", {
            operation: "fromTwos",
            fault: "overflow",
            value: t
        }), n >> r - Qn) {
        return -((~n & (Qn << r) - Qn) + Qn)
    }
    return n
}

function Wn(t, e) {
    let n = Vn(t, "value");
    const r = BigInt(Zn(e, "width")),
        s = Qn << r - Qn;
    if (n < Gn) {
        n = -n, kn(n <= s, "too low", "NUMERIC_FAULT", {
            operation: "toTwos",
            fault: "overflow",
            value: t
        });
        return (~n & (Qn << r) - Qn) + Qn
    }
    return kn(n < s, "too high", "NUMERIC_FAULT", {
        operation: "toTwos",
        fault: "overflow",
        value: t
    }), n
}

function Jn(t, e) {
    const n = zn(t, "value"),
        r = BigInt(Zn(e, "bits"));
    return n & (Qn << r) - Qn
}

function Vn(t, e) {
    switch (typeof t) {
        case "bigint":
            return t;
        case "number":
            return Pn(Number.isInteger(t), "underflow", e || "value", t), Pn(t >= -Hn && t <= Hn, "overflow", e || "value", t), BigInt(t);
        case "string":
            try {
                if ("" === t) throw new Error("empty string");
                return "-" === t[0] && "-" !== t[1] ? -BigInt(t.substring(1)) : BigInt(t)
            } catch (n) {
                Pn(!1, `invalid BigNumberish string: ${n.message}`, e || "value", t)
            }
    }
    Pn(!1, "invalid BigNumberish value", e || "value", t)
}

function zn(t, e) {
    const n = Vn(t, e);
    return kn(n >= Gn, "unsigned value cannot be negative", "NUMERIC_FAULT", {
        fault: "overflow",
        operation: "getUint",
        value: t
    }), n
}
const Kn = "0123456789abcdef";

function Yn(t) {
    if (t instanceof Uint8Array) {
        let e = "0x0";
        for (const n of t) e += Kn[n >> 4], e += Kn[15 & n];
        return BigInt(e)
    }
    return Vn(t)
}

function Zn(t, e) {
    switch (typeof t) {
        case "bigint":
            return Pn(t >= -Hn && t <= Hn, "overflow", e || "value", t), Number(t);
        case "number":
            return Pn(Number.isInteger(t), "underflow", e || "value", t), Pn(t >= -Hn && t <= Hn, "overflow", e || "value", t), t;
        case "string":
            try {
                if ("" === t) throw new Error("empty string");
                return Zn(BigInt(t), e)
            } catch (n) {
                Pn(!1, `invalid numeric string: ${n.message}`, e || "value", t)
            }
    }
    Pn(!1, "invalid numeric value", e || "value", t)
}

function qn(t, e) {
    let n = zn(t, "value").toString(16);
    if (null == e) n.length % 2 && (n = "0" + n);
    else {
        const r = Zn(e, "width");
        for (kn(2 * r >= n.length, `value exceeds width (${r} bytes)`, "NUMERIC_FAULT", {
                operation: "toBeHex",
                fault: "overflow",
                value: t
            }); n.length < 2 * r;) n = "0" + n
    }
    return "0x" + n
}

function Xn(t) {
    const e = zn(t, "value");
    if (e === Gn) return new Uint8Array([]);
    let n = e.toString(16);
    n.length % 2 && (n = "0" + n);
    const r = new Uint8Array(n.length / 2);
    for (let s = 0; s < r.length; s++) {
        const t = 2 * s;
        r[s] = parseInt(n.substring(t, t + 2), 16)
    }
    return r
}

function _n(t) {
    let e = Mn(Tn(t) ? t : Xn(t)).substring(2);
    for (; e.startsWith("0");) e = e.substring(1);
    return "" === e && (e = "0"), "0x" + e
}
const $n = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
BigInt(0);
const tr = BigInt(58);
class er {
    constructor(e, n, r) {
        nn(this, "filter"), nn(this, "emitter"), an(this, t), on(this, t, n), wn(this, {
            emitter: e,
            filter: r
        })
    }
    async removeListener() {
        null != sn(this, t) && await this.emitter.off(this.filter, sn(this, t))
    }
}

function nr(t, e, n, r, s) {
    if ("BAD_PREFIX" === t || "UNEXPECTED_CONTINUE" === t) {
        let t = 0;
        for (let r = e + 1; r < n.length && n[r] >> 6 == 2; r++) t++;
        return t
    }
    return "OVERRUN" === t ? n.length - e - 1 : 0
}
t = new WeakMap;
const rr = Object.freeze({
    error: function(t, e, n, r, s) {
        Pn(!1, `invalid codepoint at offset ${e}; ${t}`, "bytes", n)
    },
    ignore: nr,
    replace: function(t, e, n, r, s) {
        return "OVERLONG" === t ? (Pn("number" == typeof s, "invalid bad code point for replacement", "badCodepoint", s), r.push(s), 0) : (r.push(65533), nr(t, e, n))
    }
});

function sr(t, e) {
    Pn("string" == typeof t, "invalid string value", "str", t);
    let n = [];
    for (let r = 0; r < t.length; r++) {
        const e = t.charCodeAt(r);
        if (e < 128) n.push(e);
        else if (e < 2048) n.push(e >> 6 | 192), n.push(63 & e | 128);
        else if (55296 == (64512 & e)) {
            r++;
            const s = t.charCodeAt(r);
            Pn(r < t.length && 56320 == (64512 & s), "invalid surrogate pair", "str", t);
            const i = 65536 + ((1023 & e) << 10) + (1023 & s);
            n.push(i >> 18 | 240), n.push(i >> 12 & 63 | 128), n.push(i >> 6 & 63 | 128), n.push(63 & i | 128)
        } else n.push(e >> 12 | 224), n.push(e >> 6 & 63 | 128), n.push(63 & e | 128)
    }
    return new Uint8Array(n)
}

function ir(t, e) {
    return n = function(t, e) {
        null == e && (e = rr.error);
        const n = On(t, "bytes"),
            r = [];
        let s = 0;
        for (; s < n.length;) {
            const t = n[s++];
            if (!(t >> 7)) {
                r.push(t);
                continue
            }
            let i = null,
                a = null;
            if (192 == (224 & t)) i = 1, a = 127;
            else if (224 == (240 & t)) i = 2, a = 2047;
            else {
                if (240 != (248 & t)) {
                    s += e(128 == (192 & t) ? "UNEXPECTED_CONTINUE" : "BAD_PREFIX", s - 1, n, r);
                    continue
                }
                i = 3, a = 65535
            }
            if (s - 1 + i >= n.length) {
                s += e("OVERRUN", s - 1, n, r);
                continue
            }
            let o = t & (1 << 8 - i - 1) - 1;
            for (let c = 0; c < i; c++) {
                let t = n[s];
                if (128 != (192 & t)) {
                    s += e("MISSING_CONTINUE", s, n, r), o = null;
                    break
                }
                o = o << 6 | 63 & t, s++
            }
            null !== o && (o > 1114111 ? s += e("OUT_OF_RANGE", s - 1 - i, n, r, o) : o >= 55296 && o <= 57343 ? s += e("UTF16_SURROGATE", s - 1 - i, n, r, o) : o <= a ? s += e("OVERLONG", s - 1 - i, n, r, o) : r.push(o))
        }
        return r
    }(t, e), n.map((t => t <= 65535 ? String.fromCharCode(t) : (t -= 65536, String.fromCharCode(55296 + (t >> 10 & 1023), 56320 + (1023 & t))))).join("");
    var n
}

function ar(t) {
    return async function(t, e) {
        kn(null == e || !e.cancelled, "request cancelled before sending", "CANCELLED");
        const n = t.url.split(":")[0].toLowerCase();
        kn("http" === n || "https" === n, `unsupported protocol ${n}`, "UNSUPPORTED_OPERATION", {
            info: {
                protocol: n
            },
            operation: "request"
        }), kn("https" === n || !t.credentials || t.allowInsecureAuthentication, "insecure authorized connections unsupported", "UNSUPPORTED_OPERATION", {
            operation: "request"
        });
        let r = null;
        const s = new AbortController,
            i = setTimeout((() => {
                r = En("request timeout", "TIMEOUT"), s.abort()
            }), t.timeout);
        e && e.addListener((() => {
            r = En("request cancelled", "CANCELLED"), s.abort()
        }));
        const a = {
            method: t.method,
            headers: new Headers(Array.from(t)),
            body: t.body || void 0,
            signal: s.signal
        };
        let o;
        try {
            o = await fetch(t.url, a)
        } catch (h) {
            if (clearTimeout(i), r) throw r;
            throw h
        }
        clearTimeout(i);
        const c = {};
        o.headers.forEach(((t, e) => {
            c[e.toLowerCase()] = t
        }));
        const l = await o.arrayBuffer(),
            u = null == l ? null : new Uint8Array(l);
        return {
            statusCode: o.status,
            statusMessage: o.statusText,
            headers: c,
            body: u
        }
    }
}
let or = ar();
const cr = new RegExp("^data:([^;:]*)?(;base64)?,(.*)$", "i"),
    lr = new RegExp("^ipfs://(ipfs/)?(.*)$", "i");
let ur = !1;
async function hr(t, e) {
    try {
        const e = t.match(cr);
        if (!e) throw new Error("invalid data");
        return new br(200, "OK", {
            "content-type": e[1] || "text/plain"
        }, e[2] ? function(t) {
            t = atob(t);
            const e = new Uint8Array(t.length);
            for (let n = 0; n < t.length; n++) e[n] = t.charCodeAt(n);
            return On(e)
        }(e[3]) : sr(e[3].replace(/%([0-9a-f][0-9a-f])/gi, ((t, e) => String.fromCharCode(parseInt(e, 16))))))
    } catch (n) {
        return new br(599, "BAD REQUEST (invalid data: URI)", {}, null, new wr(t))
    }
}

function fr(t) {
    return async function(e, n) {
        try {
            const n = e.match(lr);
            if (!n) throw new Error("invalid link");
            return new wr(`${t}${n[2]}`)
        } catch (r) {
            return new br(599, "BAD REQUEST (invalid IPFS URI)", {}, null, new wr(e))
        }
    }
}
const pr = {
        data: hr,
        ipfs: fr("https://gateway.ipfs.io/ipfs/")
    },
    dr = new WeakMap;
class gr {
    constructor(t) {
        an(this, e), an(this, n), on(this, e, []), on(this, n, !1), dr.set(t, (() => {
            if (!sn(this, n)) {
                on(this, n, !0);
                for (const t of sn(this, e)) setTimeout((() => {
                    t()
                }), 0);
                on(this, e, [])
            }
        }))
    }
    addListener(t) {
        kn(!sn(this, n), "singal already cancelled", "UNSUPPORTED_OPERATION", {
            operation: "fetchCancelSignal.addCancelListener"
        }), sn(this, e).push(t)
    }
    get cancelled() {
        return sn(this, n)
    }
    checkSignal() {
        kn(!this.cancelled, "cancelled", "CANCELLED", {})
    }
}

function mr(t) {
    if (null == t) throw new Error("missing signal; should not happen");
    return t.checkSignal(), t
}
e = new WeakMap, n = new WeakMap;
const yr = class t {
    constructor(t) {
        an(this, w), an(this, r), an(this, s), an(this, i), an(this, a), an(this, o), an(this, c), an(this, l), an(this, u), an(this, h), an(this, f), an(this, p), an(this, d), an(this, g), an(this, m), an(this, y), on(this, c, String(t)), on(this, r, !1), on(this, s, !0), on(this, i, {}), on(this, a, ""), on(this, o, 3e5), on(this, m, {
            slotInterval: 250,
            maxAttempts: 12
        }), on(this, y, null)
    }
    get url() {
        return sn(this, c)
    }
    set url(t) {
        on(this, c, String(t))
    }
    get body() {
        return null == sn(this, l) ? null : new Uint8Array(sn(this, l))
    }
    set body(t) {
        if (null == t) on(this, l, void 0), on(this, u, void 0);
        else if ("string" == typeof t) on(this, l, sr(t)), on(this, u, "text/plain");
        else if (t instanceof Uint8Array) on(this, l, t), on(this, u, "application/octet-stream");
        else {
            if ("object" != typeof t) throw new Error("invalid body");
            on(this, l, sr(JSON.stringify(t))), on(this, u, "application/json")
        }
    }
    hasBody() {
        return null != sn(this, l)
    }
    get method() {
        return sn(this, a) ? sn(this, a) : this.hasBody() ? "POST" : "GET"
    }
    set method(t) {
        null == t && (t = ""), on(this, a, String(t).toUpperCase())
    }
    get headers() {
        const t = Object.assign({}, sn(this, i));
        return sn(this, h) && (t.authorization = `Basic ${function(t){const e=On(t);let n="";for(let r=0;r<e.length;r++)n+=String.fromCharCode(e[r]);return btoa(n)}(sr(sn(this,h)))}`), this.allowGzip && (t["accept-encoding"] = "gzip"), null == t["content-type"] && sn(this, u) && (t["content-type"] = sn(this, u)), this.body && (t["content-length"] = String(this.body.length)), t
    }
    getHeader(t) {
        return this.headers[t.toLowerCase()]
    }
    setHeader(t, e) {
        sn(this, i)[String(t).toLowerCase()] = String(e)
    }
    clearHeaders() {
        on(this, i, {})
    }[Symbol.iterator]() {
        const t = this.headers,
            e = Object.keys(t);
        let n = 0;
        return {
            next: () => {
                if (n < e.length) {
                    const r = e[n++];
                    return {
                        value: [r, t[r]],
                        done: !1
                    }
                }
                return {
                    value: void 0,
                    done: !0
                }
            }
        }
    }
    get credentials() {
        return sn(this, h) || null
    }
    setCredentials(t, e) {
        Pn(!t.match(/:/), "invalid basic authentication username", "username", "[REDACTED]"), on(this, h, `${t}:${e}`)
    }
    get allowGzip() {
        return sn(this, s)
    }
    set allowGzip(t) {
        on(this, s, !!t)
    }
    get allowInsecureAuthentication() {
        return !!sn(this, r)
    }
    set allowInsecureAuthentication(t) {
        on(this, r, !!t)
    }
    get timeout() {
        return sn(this, o)
    }
    set timeout(t) {
        Pn(t >= 0, "timeout must be non-zero", "timeout", t), on(this, o, t)
    }
    get preflightFunc() {
        return sn(this, f) || null
    }
    set preflightFunc(t) {
        on(this, f, t)
    }
    get processFunc() {
        return sn(this, p) || null
    }
    set processFunc(t) {
        on(this, p, t)
    }
    get retryFunc() {
        return sn(this, d) || null
    }
    set retryFunc(t) {
        on(this, d, t)
    }
    get getUrlFunc() {
        return sn(this, y) || or
    }
    set getUrlFunc(t) {
        on(this, y, t)
    }
    toString() {
        return `<FetchRequest method=${JSON.stringify(this.method)} url=${JSON.stringify(this.url)} headers=${JSON.stringify(this.headers)} body=${sn(this,l)?Mn(sn(this,l)):"null"}>`
    }
    setThrottleParams(t) {
        null != t.slotInterval && (sn(this, m).slotInterval = t.slotInterval), null != t.maxAttempts && (sn(this, m).maxAttempts = t.maxAttempts)
    }
    send() {
        return kn(null == sn(this, g), "request already sent", "UNSUPPORTED_OPERATION", {
            operation: "fetchRequest.send"
        }), on(this, g, new gr(this)), cn(this, w, A).call(this, 0, vr() + this.timeout, 0, this, new br(0, "", {}, null, this))
    }
    cancel() {
        kn(null != sn(this, g), "request has not been sent", "UNSUPPORTED_OPERATION", {
            operation: "fetchRequest.cancel"
        });
        const t = dr.get(this);
        if (!t) throw new Error("missing signal; should not happen");
        t()
    }
    redirect(e) {
        const n = this.url.split(":")[0].toLowerCase(),
            r = e.split(":")[0].toLowerCase();
        kn("GET" === this.method && ("https" !== n || "http" !== r) && e.match(/^https?:/), "unsupported redirect", "UNSUPPORTED_OPERATION", {
            operation: `redirect(${this.method} ${JSON.stringify(this.url)} => ${JSON.stringify(e)})`
        });
        const s = new t(e);
        return s.method = "GET", s.allowGzip = this.allowGzip, s.timeout = this.timeout, on(s, i, Object.assign({}, sn(this, i))), sn(this, l) && on(s, l, new Uint8Array(sn(this, l))), on(s, u, sn(this, u)), s
    }
    clone() {
        const e = new t(this.url);
        return on(e, a, sn(this, a)), sn(this, l) && on(e, l, sn(this, l)), on(e, u, sn(this, u)), on(e, i, Object.assign({}, sn(this, i))), on(e, h, sn(this, h)), this.allowGzip && (e.allowGzip = !0), e.timeout = this.timeout, this.allowInsecureAuthentication && (e.allowInsecureAuthentication = !0), on(e, f, sn(this, f)), on(e, p, sn(this, p)), on(e, d, sn(this, d)), on(e, m, Object.assign({}, sn(this, m))), on(e, y, sn(this, y)), e
    }
    static lockConfig() {
        ur = !0
    }
    static getGateway(t) {
        return pr[t.toLowerCase()] || null
    }
    static registerGateway(t, e) {
        if ("http" === (t = t.toLowerCase()) || "https" === t) throw new Error(`cannot intercept ${t}; use registerGetUrl`);
        if (ur) throw new Error("gateways locked");
        pr[t] = e
    }
    static registerGetUrl(t) {
        if (ur) throw new Error("gateways locked");
        or = t
    }
    static createGetUrlFunc(t) {
        return ar()
    }
    static createDataGateway() {
        return hr
    }
    static createIpfsGatewayFunc(t) {
        return fr(t)
    }
};
r = new WeakMap, s = new WeakMap, i = new WeakMap, a = new WeakMap, o = new WeakMap, c = new WeakMap, l = new WeakMap, u = new WeakMap, h = new WeakMap, f = new WeakMap, p = new WeakMap, d = new WeakMap, g = new WeakMap, m = new WeakMap, y = new WeakMap, w = new WeakSet, A = async function(t, e, n, r, s) {
    var i, a, o;
    if (t >= sn(this, m).maxAttempts) return s.makeServerError("exceeded maximum retry limit");
    kn(vr() <= e, "timeout", "TIMEOUT", {
        operation: "request.send",
        reason: "timeout",
        request: r
    }), n > 0 && await
    function(t) {
        return new Promise((e => setTimeout(e, t)))
    }(n);
    let c = this.clone();
    const l = (c.url.split(":")[0] || "").toLowerCase();
    if (l in pr) {
        const t = await pr[l](c.url, mr(sn(r, g)));
        if (t instanceof br) {
            let e = t;
            if (this.processFunc) {
                mr(sn(r, g));
                try {
                    e = await this.processFunc(c, e)
                } catch (f) {
                    null != f.throttle && "number" == typeof f.stall || e.makeServerError("error in post-processing function", f).assertOk()
                }
            }
            return e
        }
        c = t
    }
    this.preflightFunc && (c = await this.preflightFunc(c));
    const u = await this.getUrlFunc(c, mr(sn(r, g)));
    let h = new br(u.statusCode, u.statusMessage, u.headers, u.body, r);
    if (301 === h.statusCode || 302 === h.statusCode) {
        try {
            const n = h.headers.location || "";
            return cn(i = c.redirect(n), w, A).call(i, t + 1, e, 0, r, h)
        } catch (f) {}
        return h
    }
    if (429 === h.statusCode && (null == this.retryFunc || await this.retryFunc(c, h, t))) {
        const n = h.headers["retry-after"];
        let s = sn(this, m).slotInterval * Math.trunc(Math.random() * Math.pow(2, t));
        return "string" == typeof n && n.match(/^[1-9][0-9]*$/) && (s = parseInt(n)), cn(a = c.clone(), w, A).call(a, t + 1, e, s, r, h)
    }
    if (this.processFunc) {
        mr(sn(r, g));
        try {
            h = await this.processFunc(c, h)
        } catch (f) {
            null != f.throttle && "number" == typeof f.stall || h.makeServerError("error in post-processing function", f).assertOk();
            let n = sn(this, m).slotInterval * Math.trunc(Math.random() * Math.pow(2, t));
            return f.stall >= 0 && (n = f.stall), cn(o = c.clone(), w, A).call(o, t + 1, e, n, r, h)
        }
    }
    return h
};
let wr = yr;
const Ar = class t {
    constructor(t, e, n, r, s) {
        an(this, b), an(this, v), an(this, E), an(this, k), an(this, P), an(this, x), on(this, b, t), on(this, v, e), on(this, E, Object.keys(n).reduce(((t, e) => (t[e.toLowerCase()] = String(n[e]), t)), {})), on(this, k, null == r ? null : new Uint8Array(r)), on(this, P, s || null), on(this, x, {
            message: ""
        })
    }
    toString() {
        return `<FetchResponse status=${this.statusCode} body=${sn(this,k)?Mn(sn(this,k)):"null"}>`
    }
    get statusCode() {
        return sn(this, b)
    }
    get statusMessage() {
        return sn(this, v)
    }
    get headers() {
        return Object.assign({}, sn(this, E))
    }
    get body() {
        return null == sn(this, k) ? null : new Uint8Array(sn(this, k))
    }
    get bodyText() {
        try {
            return null == sn(this, k) ? "" : ir(sn(this, k))
        } catch (t) {
            kn(!1, "response body is not valid UTF-8 data", "UNSUPPORTED_OPERATION", {
                operation: "bodyText",
                info: {
                    response: this
                }
            })
        }
    }
    get bodyJson() {
        try {
            return JSON.parse(this.bodyText)
        } catch (t) {
            kn(!1, "response body is not valid JSON", "UNSUPPORTED_OPERATION", {
                operation: "bodyJson",
                info: {
                    response: this
                }
            })
        }
    }[Symbol.iterator]() {
        const t = this.headers,
            e = Object.keys(t);
        let n = 0;
        return {
            next: () => {
                if (n < e.length) {
                    const r = e[n++];
                    return {
                        value: [r, t[r]],
                        done: !1
                    }
                }
                return {
                    value: void 0,
                    done: !0
                }
            }
        }
    }
    makeServerError(e, n) {
        let r;
        r = e ? `CLIENT ESCALATED SERVER ERROR (${this.statusCode} ${this.statusMessage}; ${e})` : `CLIENT ESCALATED SERVER ERROR (${e=`${this.statusCode} ${this.statusMessage}`})`;
        const s = new t(599, r, this.headers, this.body, sn(this, P) || void 0);
        return on(s, x, {
            message: e,
            error: n
        }), s
    }
    throwThrottleError(t, e) {
        null == e ? e = -1 : Pn(Number.isInteger(e) && e >= 0, "invalid stall timeout", "stall", e);
        const n = new Error(t || "throttling requests");
        throw wn(n, {
            stall: e,
            throttle: !0
        }), n
    }
    getHeader(t) {
        return this.headers[t.toLowerCase()]
    }
    hasBody() {
        return null != sn(this, k)
    }
    get request() {
        return sn(this, P)
    }
    ok() {
        return "" === sn(this, x).message && this.statusCode >= 200 && this.statusCode < 300
    }
    assertOk() {
        if (this.ok()) return;
        let {
            message: t,
            error: e
        } = sn(this, x);
        "" === t && (t = `server response ${this.statusCode} ${this.statusMessage}`);
        let n = null;
        this.request && (n = this.request.url);
        let r = null;
        try {
            sn(this, k) && (r = ir(sn(this, k)))
        } catch (s) {}
        kn(!1, t, "SERVER_ERROR", {
            request: this.request || "unknown request",
            response: this,
            error: e,
            info: {
                requestUrl: n,
                responseBody: r,
                responseStatus: `${this.statusCode} ${this.statusMessage}`
            }
        })
    }
};
b = new WeakMap, v = new WeakMap, E = new WeakMap, k = new WeakMap, P = new WeakMap, x = new WeakMap;
let br = Ar;

function vr() {
    return (new Date).getTime()
}

function Er(t) {
    let e = t.toString(16);
    for (; e.length < 2;) e = "0" + e;
    return "0x" + e
}

function kr(t, e, n) {
    let r = 0;
    for (let s = 0; s < n; s++) r = 256 * r + t[e + s];
    return r
}

function Pr(t, e, n, r) {
    const s = [];
    for (; n < e + 1 + r;) {
        const i = xr(t, n);
        s.push(i.result), kn((n += i.consumed) <= e + 1 + r, "child data too short", "BUFFER_OVERRUN", {
            buffer: t,
            length: r,
            offset: e
        })
    }
    return {
        consumed: 1 + r,
        result: s
    }
}

function xr(t, e) {
    kn(0 !== t.length, "data too short", "BUFFER_OVERRUN", {
        buffer: t,
        length: 0,
        offset: 1
    });
    const n = e => {
        kn(e <= t.length, "data short segment too short", "BUFFER_OVERRUN", {
            buffer: t,
            length: t.length,
            offset: e
        })
    };
    if (t[e] >= 248) {
        const r = t[e] - 247;
        n(e + 1 + r);
        const s = kr(t, e + 1, r);
        return n(e + 1 + r + s), Pr(t, e, e + 1 + r, r + s)
    }
    if (t[e] >= 192) {
        const r = t[e] - 192;
        return n(e + 1 + r), Pr(t, e, e + 1, r)
    }
    if (t[e] >= 184) {
        const r = t[e] - 183;
        n(e + 1 + r);
        const s = kr(t, e + 1, r);
        n(e + 1 + r + s);
        return {
            consumed: 1 + r + s,
            result: Mn(t.slice(e + 1 + r, e + 1 + r + s))
        }
    }
    if (t[e] >= 128) {
        const r = t[e] - 128;
        n(e + 1 + r);
        return {
            consumed: 1 + r,
            result: Mn(t.slice(e + 1, e + 1 + r))
        }
    }
    return {
        consumed: 1,
        result: Er(t[e])
    }
}

function Nr(t) {
    const e = On(t, "data"),
        n = xr(e, 0);
    return Pn(n.consumed === e.length, "unexpected junk after rlp payload", "data", t), n.result
}

function Cr(t) {
    const e = [];
    for (; t;) e.unshift(255 & t), t >>= 8;
    return e
}

function Or(t) {
    if (Array.isArray(t)) {
        let e = [];
        if (t.forEach((function(t) {
                e = e.concat(Or(t))
            })), e.length <= 55) return e.unshift(192 + e.length), e;
        const n = Cr(e.length);
        return n.unshift(247 + n.length), n.concat(e)
    }
    const e = Array.prototype.slice.call(On(t, "object"));
    if (1 === e.length && e[0] <= 127) return e;
    if (e.length <= 55) return e.unshift(128 + e.length), e;
    const n = Cr(e.length);
    return n.unshift(183 + n.length), n.concat(e)
}
const Rr = "0123456789abcdef";

function Br(t) {
    let e = "0x";
    for (const n of Or(t)) e += Rr[n >> 4], e += Rr[15 & n];
    return e
}
const Tr = 32,
    Ir = new Uint8Array(Tr),
    Mr = ["then"],
    Fr = {},
    Dr = new WeakMap;

function Sr(t) {
    return Dr.get(t)
}

function Ur(t, e) {
    Dr.set(t, e)
}

function Lr(t, e) {
    const n = new Error(`deferred error during ABI decoding triggered accessing ${t}`);
    throw n.error = e, n
}

function Gr(t, e, n) {
    return t.indexOf(null) >= 0 ? e.map(((t, e) => t instanceof Qr ? Gr(Sr(t), t, n) : t)) : t.reduce(((t, r, s) => {
        let i = e.getValue(r);
        return r in t || (n && i instanceof Qr && (i = Gr(Sr(i), i, n)), t[r] = i), t
    }), {})
}
N = new WeakMap;
let Qr = class t extends Array {
    constructor(...t) {
        const e = t[0];
        let n = t[1],
            r = (t[2] || []).slice(),
            s = !0;
        e !== Fr && (n = t, r = [], s = !1), super(n.length), an(this, N), n.forEach(((t, e) => {
            this[e] = t
        }));
        const i = r.reduce(((t, e) => ("string" == typeof e && t.set(e, (t.get(e) || 0) + 1), t)), new Map);
        if (Ur(this, Object.freeze(n.map(((t, e) => {
                const n = r[e];
                return null != n && 1 === i.get(n) ? n : null
            })))), on(this, N, []), null == sn(this, N) && sn(this, N), !s) return;
        Object.freeze(this);
        const a = new Proxy(this, {
            get: (t, e, n) => {
                if ("string" == typeof e) {
                    if (e.match(/^[0-9]+$/)) {
                        const n = Zn(e, "%index");
                        if (n < 0 || n >= this.length) throw new RangeError("out of result range");
                        const r = t[n];
                        return r instanceof Error && Lr(`index ${n}`, r), r
                    }
                    if (Mr.indexOf(e) >= 0) return Reflect.get(t, e, n);
                    const r = t[e];
                    if (r instanceof Function) return function(...e) {
                        return r.apply(this === n ? t : this, e)
                    };
                    if (!(e in t)) return t.getValue.apply(this === n ? t : this, [e])
                }
                return Reflect.get(t, e, n)
            }
        });
        return Ur(a, Sr(this)), a
    }
    toArray(e) {
        const n = [];
        return this.forEach(((r, s) => {
            r instanceof Error && Lr(`index ${s}`, r), e && r instanceof t && (r = r.toArray(e)), n.push(r)
        })), n
    }
    toObject(t) {
        const e = Sr(this);
        return e.reduce(((n, r, s) => (kn(null != r, `value at index ${s} unnamed`, "UNSUPPORTED_OPERATION", {
            operation: "toObject()"
        }), Gr(e, this, t))), {})
    }
    slice(e, n) {
        null == e && (e = 0), e < 0 && (e += this.length) < 0 && (e = 0), null == n && (n = this.length), n < 0 && (n += this.length) < 0 && (n = 0), n > this.length && (n = this.length);
        const r = Sr(this),
            s = [],
            i = [];
        for (let t = e; t < n; t++) s.push(this[t]), i.push(r[t]);
        return new t(Fr, s, i)
    }
    filter(e, n) {
        const r = Sr(this),
            s = [],
            i = [];
        for (let t = 0; t < this.length; t++) {
            const a = this[t];
            a instanceof Error && Lr(`index ${t}`, a), e.call(n, a, t, this) && (s.push(a), i.push(r[t]))
        }
        return new t(Fr, s, i)
    }
    map(t, e) {
        const n = [];
        for (let r = 0; r < this.length; r++) {
            const s = this[r];
            s instanceof Error && Lr(`index ${r}`, s), n.push(t.call(e, s, r, this))
        }
        return n
    }
    getValue(t) {
        const e = Sr(this).indexOf(t);
        if (-1 === e) return;
        const n = this[e];
        return n instanceof Error && Lr(`property ${JSON.stringify(t)}`, n.error), n
    }
    static fromItems(e, n) {
        return new t(Fr, e, n)
    }
};

function Hr(t) {
    let e = Xn(t);
    return kn(e.length <= Tr, "value out-of-bounds", "BUFFER_OVERRUN", {
        buffer: e,
        length: Tr,
        offset: e.length
    }), e.length !== Tr && (e = Rn(Fn([Ir.slice(e.length % Tr), e]))), e
}
class jr {
    constructor(t, e, n, r) {
        nn(this, "name"), nn(this, "type"), nn(this, "localName"), nn(this, "dynamic"), wn(this, {
            name: t,
            type: e,
            localName: n,
            dynamic: r
        }, {
            name: "string",
            type: "string",
            localName: "string",
            dynamic: "boolean"
        })
    }
    _throwError(t, e) {
        Pn(!1, t, this.localName, e)
    }
}
class Wr {
    constructor() {
        an(this, R), an(this, C), an(this, O), on(this, C, []), on(this, O, 0)
    }
    get data() {
        return Fn(sn(this, C))
    }
    get length() {
        return sn(this, O)
    }
    appendWriter(t) {
        return cn(this, R, B).call(this, Rn(t.data))
    }
    writeBytes(t) {
        let e = Rn(t);
        const n = e.length % Tr;
        return n && (e = Rn(Fn([e, Ir.slice(n)]))), cn(this, R, B).call(this, e)
    }
    writeValue(t) {
        return cn(this, R, B).call(this, Hr(t))
    }
    writeUpdatableValue() {
        const t = sn(this, C).length;
        return sn(this, C).push(Ir), on(this, O, sn(this, O) + Tr), e => {
            sn(this, C)[t] = Hr(e)
        }
    }
}
C = new WeakMap, O = new WeakMap, R = new WeakSet, B = function(t) {
    return sn(this, C).push(t), on(this, O, sn(this, O) + t.length), t.length
};
T = new WeakMap, I = new WeakMap, M = new WeakMap, F = new WeakMap, D = new WeakMap, S = new WeakSet, U = function(t) {
    var e;
    if (sn(this, F)) return cn(e = sn(this, F), S, U).call(e, t);
    on(this, M, sn(this, M) + t), kn(sn(this, D) < 1 || sn(this, M) <= sn(this, D) * this.dataLength, `compressed ABI data exceeds inflation ratio of ${sn(this,D)} ( see: https://github.com/ethers-io/ethers.js/issues/4537 )`, "BUFFER_OVERRUN", {
        buffer: Rn(sn(this, T)),
        offset: sn(this, I),
        length: t,
        info: {
            bytesRead: sn(this, M),
            dataLength: this.dataLength
        }
    })
}, L = function(t, e, n) {
    let r = Math.ceil(e / Tr) * Tr;
    return sn(this, I) + r > sn(this, T).length && (this.allowLoose && n && sn(this, I) + e <= sn(this, T).length ? r = e : kn(!1, "data out-of-bounds", "BUFFER_OVERRUN", {
        buffer: Rn(sn(this, T)),
        length: sn(this, T).length,
        offset: sn(this, I) + r
    })), sn(this, T).slice(sn(this, I), sn(this, I) + r)
};
let Jr = class t {
    constructor(t, e, n) {
        an(this, S), nn(this, "allowLoose"), an(this, T), an(this, I), an(this, M), an(this, F), an(this, D), wn(this, {
            allowLoose: !!e
        }), on(this, T, Rn(t)), on(this, M, 0), on(this, F, null), on(this, D, null != n ? n : 1024), on(this, I, 0)
    }
    get data() {
        return Mn(sn(this, T))
    }
    get dataLength() {
        return sn(this, T).length
    }
    get consumed() {
        return sn(this, I)
    }
    get bytes() {
        return new Uint8Array(sn(this, T))
    }
    subReader(e) {
        const n = new t(sn(this, T).slice(sn(this, I) + e), this.allowLoose, sn(this, D));
        return on(n, F, this), n
    }
    readBytes(t, e) {
        let n = cn(this, S, L).call(this, 0, t, !!e);
        return cn(this, S, U).call(this, t), on(this, I, sn(this, I) + n.length), n.slice(0, t)
    }
    readValue() {
        return Yn(this.readBytes(Tr))
    }
    readIndex() {
        return Zn(Yn(this.readBytes(Tr)))
    }
};
const [Vr, zr] = (() => fn.split(["0x428a2f98d728ae22", "0x7137449123ef65cd", "0xb5c0fbcfec4d3b2f", "0xe9b5dba58189dbbc", "0x3956c25bf348b538", "0x59f111f1b605d019", "0x923f82a4af194f9b", "0xab1c5ed5da6d8118", "0xd807aa98a3030242", "0x12835b0145706fbe", "0x243185be4ee4b28c", "0x550c7dc3d5ffb4e2", "0x72be5d74f27b896f", "0x80deb1fe3b1696b1", "0x9bdc06a725c71235", "0xc19bf174cf692694", "0xe49b69c19ef14ad2", "0xefbe4786384f25e3", "0x0fc19dc68b8cd5b5", "0x240ca1cc77ac9c65", "0x2de92c6f592b0275", "0x4a7484aa6ea6e483", "0x5cb0a9dcbd41fbd4", "0x76f988da831153b5", "0x983e5152ee66dfab", "0xa831c66d2db43210", "0xb00327c898fb213f", "0xbf597fc7beef0ee4", "0xc6e00bf33da88fc2", "0xd5a79147930aa725", "0x06ca6351e003826f", "0x142929670a0e6e70", "0x27b70a8546d22ffc", "0x2e1b21385c26c926", "0x4d2c6dfc5ac42aed", "0x53380d139d95b3df", "0x650a73548baf63de", "0x766a0abb3c77b2a8", "0x81c2c92e47edaee6", "0x92722c851482353b", "0xa2bfe8a14cf10364", "0xa81a664bbc423001", "0xc24b8b70d0f89791", "0xc76c51a30654be30", "0xd192e819d6ef5218", "0xd69906245565a910", "0xf40e35855771202a", "0x106aa07032bbd1b8", "0x19a4c116b8d2d0c8", "0x1e376c085141ab53", "0x2748774cdf8eeb99", "0x34b0bcb5e19b48a8", "0x391c0cb3c5c95a63", "0x4ed8aa4ae3418acb", "0x5b9cca4f7763e373", "0x682e6ff3d6b2b8a3", "0x748f82ee5defb2fc", "0x78a5636f43172f60", "0x84c87814a1f0ab72", "0x8cc702081a6439ec", "0x90befffa23631e28", "0xa4506cebde82bde9", "0xbef9a3f7b2c67915", "0xc67178f2e372532b", "0xca273eceea26619c", "0xd186b8c721c0c207", "0xeada7dd6cde0eb1e", "0xf57d4f7fee6ed178", "0x06f067aa72176fba", "0x0a637dc5a2c898a6", "0x113f9804bef90dae", "0x1b710b35131c471b", "0x28db77f523047d84", "0x32caab7b40c72493", "0x3c9ebe0a15c9bebc", "0x431d67c49c100d4c", "0x4cc5d4becb3e42b6", "0x597f299cfc657e2a", "0x5fcb6fab3ad6faec", "0x6c44198c4a475817"].map((t => BigInt(t)))))(), Kr = new Uint32Array(80), Yr = new Uint32Array(80);
class Zr extends hn {
    constructor() {
        super(128, 64, 16, !1), this.Ah = 1779033703, this.Al = -205731576, this.Bh = -1150833019, this.Bl = -2067093701, this.Ch = 1013904242, this.Cl = -23791573, this.Dh = -1521486534, this.Dl = 1595750129, this.Eh = 1359893119, this.El = -1377402159, this.Fh = -1694144372, this.Fl = 725511199, this.Gh = 528734635, this.Gl = -79577749, this.Hh = 1541459225, this.Hl = 327033209
    }
    get() {
        const {
            Ah: t,
            Al: e,
            Bh: n,
            Bl: r,
            Ch: s,
            Cl: i,
            Dh: a,
            Dl: o,
            Eh: c,
            El: l,
            Fh: u,
            Fl: h,
            Gh: f,
            Gl: p,
            Hh: d,
            Hl: g
        } = this;
        return [t, e, n, r, s, i, a, o, c, l, u, h, f, p, d, g]
    }
    set(t, e, n, r, s, i, a, o, c, l, u, h, f, p, d, g) {
        this.Ah = 0 | t, this.Al = 0 | e, this.Bh = 0 | n, this.Bl = 0 | r, this.Ch = 0 | s, this.Cl = 0 | i, this.Dh = 0 | a, this.Dl = 0 | o, this.Eh = 0 | c, this.El = 0 | l, this.Fh = 0 | u, this.Fl = 0 | h, this.Gh = 0 | f, this.Gl = 0 | p, this.Hh = 0 | d, this.Hl = 0 | g
    }
    process(t, e) {
        for (let w = 0; w < 16; w++, e += 4) Kr[w] = t.getUint32(e), Yr[w] = t.getUint32(e += 4);
        for (let w = 16; w < 80; w++) {
            const t = 0 | Kr[w - 15],
                e = 0 | Yr[w - 15],
                n = fn.rotrSH(t, e, 1) ^ fn.rotrSH(t, e, 8) ^ fn.shrSH(t, e, 7),
                r = fn.rotrSL(t, e, 1) ^ fn.rotrSL(t, e, 8) ^ fn.shrSL(t, e, 7),
                s = 0 | Kr[w - 2],
                i = 0 | Yr[w - 2],
                a = fn.rotrSH(s, i, 19) ^ fn.rotrBH(s, i, 61) ^ fn.shrSH(s, i, 6),
                o = fn.rotrSL(s, i, 19) ^ fn.rotrBL(s, i, 61) ^ fn.shrSL(s, i, 6),
                c = fn.add4L(r, o, Yr[w - 7], Yr[w - 16]),
                l = fn.add4H(c, n, a, Kr[w - 7], Kr[w - 16]);
            Kr[w] = 0 | l, Yr[w] = 0 | c
        }
        let {
            Ah: n,
            Al: r,
            Bh: s,
            Bl: i,
            Ch: a,
            Cl: o,
            Dh: c,
            Dl: l,
            Eh: u,
            El: h,
            Fh: f,
            Fl: p,
            Gh: d,
            Gl: g,
            Hh: m,
            Hl: y
        } = this;
        for (let w = 0; w < 80; w++) {
            const t = fn.rotrSH(u, h, 14) ^ fn.rotrSH(u, h, 18) ^ fn.rotrBH(u, h, 41),
                e = fn.rotrSL(u, h, 14) ^ fn.rotrSL(u, h, 18) ^ fn.rotrBL(u, h, 41),
                A = u & f ^ ~u & d,
                b = h & p ^ ~h & g,
                v = fn.add5L(y, e, b, zr[w], Yr[w]),
                E = fn.add5H(v, m, t, A, Vr[w], Kr[w]),
                k = 0 | v,
                P = fn.rotrSH(n, r, 28) ^ fn.rotrBH(n, r, 34) ^ fn.rotrBH(n, r, 39),
                x = fn.rotrSL(n, r, 28) ^ fn.rotrBL(n, r, 34) ^ fn.rotrBL(n, r, 39),
                N = n & s ^ n & a ^ s & a,
                C = r & i ^ r & o ^ i & o;
            m = 0 | d, y = 0 | g, d = 0 | f, g = 0 | p, f = 0 | u, p = 0 | h, ({
                h: u,
                l: h
            } = fn.add(0 | c, 0 | l, 0 | E, 0 | k)), c = 0 | a, l = 0 | o, a = 0 | s, o = 0 | i, s = 0 | n, i = 0 | r;
            const O = fn.add3L(k, x, C);
            n = fn.add3H(O, E, P, N), r = 0 | O
        }({
            h: n,
            l: r
        } = fn.add(0 | this.Ah, 0 | this.Al, 0 | n, 0 | r)), ({
            h: s,
            l: i
        } = fn.add(0 | this.Bh, 0 | this.Bl, 0 | s, 0 | i)), ({
            h: a,
            l: o
        } = fn.add(0 | this.Ch, 0 | this.Cl, 0 | a, 0 | o)), ({
            h: c,
            l: l
        } = fn.add(0 | this.Dh, 0 | this.Dl, 0 | c, 0 | l)), ({
            h: u,
            l: h
        } = fn.add(0 | this.Eh, 0 | this.El, 0 | u, 0 | h)), ({
            h: f,
            l: p
        } = fn.add(0 | this.Fh, 0 | this.Fl, 0 | f, 0 | p)), ({
            h: d,
            l: g
        } = fn.add(0 | this.Gh, 0 | this.Gl, 0 | d, 0 | g)), ({
            h: m,
            l: y
        } = fn.add(0 | this.Hh, 0 | this.Hl, 0 | m, 0 | y)), this.set(n, r, s, i, a, o, c, l, u, h, f, p, d, g, m, y)
    }
    roundClean() {
        Kr.fill(0), Yr.fill(0)
    }
    destroy() {
        this.buffer.fill(0), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
    }
}
const qr = un((() => new Zr));
const Xr = function() {
    if ("undefined" != typeof self) return self;
    if ("undefined" != typeof window) return window;
    if ("undefined" != typeof global) return global;
    throw new Error("unable to locate global object")
}();
Xr.crypto || Xr.msCrypto;
let _r = !1;
const $r = function(t) {
    return dn(t)
};
let ts = $r;

function es(t) {
    const e = On(t, "data");
    return Mn(ts(e))
}
es._ = $r, es.lock = function() {
    _r = !0
}, es.register = function(t) {
    if (_r) throw new TypeError("keccak256 is locked");
    ts = t
}, Object.freeze(es);
const ns = function(t) {
    return function(t) {
        switch (t) {
            case "sha256":
                return pn.create();
            case "sha512":
                return qr.create()
        }
        Pn(!1, "invalid hashing algorithm name", "algorithm", t)
    }("sha256").update(t).digest()
};
let rs = ns,
    ss = !1;

function is(t) {
    const e = On(t, "data");
    return Mn(rs(e))
}
is._ = ns, is.lock = function() {
    ss = !0
}, is.register = function(t) {
    if (ss) throw new Error("sha256 is locked");
    rs = t
}, Object.freeze(is), Object.freeze(is);
const as = "0x0000000000000000000000000000000000000000",
    os = "0x0000000000000000000000000000000000000000000000000000000000000000",
    cs = BigInt(0),
    ls = BigInt(1),
    us = BigInt(2),
    hs = BigInt(27),
    fs = BigInt(28),
    ps = BigInt(35),
    ds = {};

function gs(t) {
    return Ln(Xn(t), 32)
}
const ms = class t {
    constructor(t, e, n, r) {
        an(this, G), an(this, Q), an(this, H), an(this, j), Nn(t, ds, "Signature"), on(this, G, e), on(this, Q, n), on(this, H, r), on(this, j, null)
    }
    get r() {
        return sn(this, G)
    }
    set r(t) {
        Pn(32 === Dn(t), "invalid r", "value", t), on(this, G, Mn(t))
    }
    get s() {
        return sn(this, Q)
    }
    set s(t) {
        Pn(32 === Dn(t), "invalid s", "value", t);
        const e = Mn(t);
        Pn(parseInt(e.substring(0, 3)) < 8, "non-canonical s", "value", e), on(this, Q, e)
    }
    get v() {
        return sn(this, H)
    }
    set v(t) {
        const e = Zn(t, "value");
        Pn(27 === e || 28 === e, "invalid v", "v", t), on(this, H, e)
    }
    get networkV() {
        return sn(this, j)
    }
    get legacyChainId() {
        const e = this.networkV;
        return null == e ? null : t.getChainId(e)
    }
    get yParity() {
        return 27 === this.v ? 0 : 1
    }
    get yParityAndS() {
        const t = On(this.s);
        return this.yParity && (t[0] |= 128), Mn(t)
    }
    get compactSerialized() {
        return Fn([this.r, this.yParityAndS])
    }
    get serialized() {
        return Fn([this.r, this.s, this.yParity ? "0x1c" : "0x1b"])
    }[Symbol.for("nodejs.util.inspect.custom")]() {
        return `Signature { r: "${this.r}", s: "${this.s}", yParity: ${this.yParity}, networkV: ${this.networkV} }`
    }
    clone() {
        const e = new t(ds, this.r, this.s, this.v);
        return this.networkV && on(e, j, this.networkV), e
    }
    toJSON() {
        const t = this.networkV;
        return {
            _type: "signature",
            networkV: null != t ? t.toString() : null,
            r: this.r,
            s: this.s,
            v: this.v
        }
    }
    static getChainId(t) {
        const e = Vn(t, "v");
        return e == hs || e == fs ? cs : (Pn(e >= ps, "invalid EIP-155 v", "v", t), (e - ps) / us)
    }
    static getChainIdV(t, e) {
        return Vn(t) * us + BigInt(35 + e - 27)
    }
    static getNormalizedV(t) {
        const e = Vn(t);
        return e === cs || e === hs ? 27 : e === ls || e === fs ? 28 : (Pn(e >= ps, "invalid v", "v", t), e & ls ? 27 : 28)
    }
    static from(e) {
        function n(t, n) {
            Pn(t, n, "signature", e)
        }
        if (null == e) return new t(ds, os, os, 27);
        if ("string" == typeof e) {
            const r = On(e, "signature");
            if (64 === r.length) {
                const e = Mn(r.slice(0, 32)),
                    n = r.slice(32, 64),
                    s = 128 & n[0] ? 28 : 27;
                return n[0] &= 127, new t(ds, e, Mn(n), s)
            }
            if (65 === r.length) {
                const e = Mn(r.slice(0, 32)),
                    s = r.slice(32, 64);
                n(!(128 & s[0]), "non-canonical s");
                const i = t.getNormalizedV(r[64]);
                return new t(ds, e, Mn(s), i)
            }
            n(!1, "invalid raw signature length")
        }
        if (e instanceof t) return e.clone();
        const r = e.r;
        n(null != r, "missing r");
        const s = gs(r),
            i = function(t, e) {
                if (null != t) return gs(t);
                if (null != e) {
                    n(Bn(e, 32), "invalid yParityAndS");
                    const t = On(e);
                    return t[0] &= 127, Mn(t)
                }
                n(!1, "missing s")
            }(e.s, e.yParityAndS);
        n(!(128 & On(i)[0]), "non-canonical s");
        const {
            networkV: a,
            v: o
        } = function(e, r, s) {
            if (null != e) {
                const n = Vn(e);
                return {
                    networkV: n >= ps ? n : void 0,
                    v: t.getNormalizedV(n)
                }
            }
            if (null != r) return n(Bn(r, 32), "invalid yParityAndS"), {
                v: 128 & On(r)[0] ? 28 : 27
            };
            if (null != s) {
                switch (Zn(s, "sig.yParity")) {
                    case 0:
                        return {
                            v: 27
                        };
                    case 1:
                        return {
                            v: 28
                        }
                }
                n(!1, "invalid yParity")
            }
            n(!1, "missing v")
        }(e.v, e.yParityAndS, e.yParity), c = new t(ds, s, i, o);
        return a && on(c, j, a), n(null == e.yParity || Zn(e.yParity, "sig.yParity") === c.yParity, "yParity mismatch"), n(null == e.yParityAndS || e.yParityAndS === c.yParityAndS, "yParityAndS mismatch"), c
    }
};
G = new WeakMap, Q = new WeakMap, H = new WeakMap, j = new WeakMap;
let ys = ms;
W = new WeakMap;
let ws = class t {
    constructor(t) {
        an(this, W), Pn(32 === Dn(t), "invalid private key", "privateKey", "[REDACTED]"), on(this, W, Mn(t))
    }
    get privateKey() {
        return sn(this, W)
    }
    get publicKey() {
        return t.computePublicKey(sn(this, W))
    }
    get compressedPublicKey() {
        return t.computePublicKey(sn(this, W), !0)
    }
    sign(t) {
        Pn(32 === Dn(t), "invalid digest length", "digest", t);
        const e = gn.sign(Rn(t), Rn(sn(this, W)), {
            lowS: !0
        });
        return ys.from({
            r: qn(e.r, 32),
            s: qn(e.s, 32),
            v: e.recovery ? 28 : 27
        })
    }
    computeSharedSecret(e) {
        const n = t.computePublicKey(e);
        return Mn(gn.getSharedSecret(Rn(sn(this, W)), On(n), !1))
    }
    static computePublicKey(t, e) {
        let n = On(t, "key");
        if (32 === n.length) {
            return Mn(gn.getPublicKey(n, !!e))
        }
        if (64 === n.length) {
            const t = new Uint8Array(65);
            t[0] = 4, t.set(n, 1), n = t
        }
        return Mn(gn.ProjectivePoint.fromHex(n).toRawBytes(e))
    }
    static recoverPublicKey(t, e) {
        Pn(32 === Dn(t), "invalid digest length", "digest", t);
        const n = ys.from(e);
        let r = gn.Signature.fromCompact(Rn(Fn([n.r, n.s])));
        r = r.addRecoveryBit(n.yParity);
        const s = r.recoverPublicKey(Rn(t));
        return Pn(null != s, "invalid signautre for digest", "signature", e), "0x" + s.toHex(!1)
    }
    static addPoints(e, n, r) {
        const s = gn.ProjectivePoint.fromHex(t.computePublicKey(e).substring(2)),
            i = gn.ProjectivePoint.fromHex(t.computePublicKey(n).substring(2));
        return "0x" + s.add(i).toHex(!!r)
    }
};
const As = BigInt(0),
    bs = BigInt(36);

function vs(t) {
    const e = (t = t.toLowerCase()).substring(2).split(""),
        n = new Uint8Array(40);
    for (let s = 0; s < 40; s++) n[s] = e[s].charCodeAt(0);
    const r = On(es(n));
    for (let s = 0; s < 40; s += 2) r[s >> 1] >> 4 >= 8 && (e[s] = e[s].toUpperCase()), (15 & r[s >> 1]) >= 8 && (e[s + 1] = e[s + 1].toUpperCase());
    return "0x" + e.join("")
}
const Es = {};
for (let Vl = 0; Vl < 10; Vl++) Es[String(Vl)] = String(Vl);
for (let Vl = 0; Vl < 26; Vl++) Es[String.fromCharCode(65 + Vl)] = String(10 + Vl);
const ks = function() {
    const t = {};
    for (let e = 0; e < 36; e++) {
        t["0123456789abcdefghijklmnopqrstuvwxyz" [e]] = BigInt(e)
    }
    return t
}();

function Ps(t) {
    if (Pn("string" == typeof t, "invalid address", "address", t), t.match(/^(0x)?[0-9a-fA-F]{40}$/)) {
        t.startsWith("0x") || (t = "0x" + t);
        const e = vs(t);
        return Pn(!t.match(/([A-F].*[a-f])|([a-f].*[A-F])/) || e === t, "bad address checksum", "address", t), e
    }
    if (t.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
        Pn(t.substring(2, 4) === function(t) {
            let e = (t = (t = t.toUpperCase()).substring(4) + t.substring(0, 2) + "00").split("").map((t => Es[t])).join("");
            for (; e.length >= 15;) {
                let t = e.substring(0, 15);
                e = parseInt(t, 10) % 97 + e.substring(t.length)
            }
            let n = String(98 - parseInt(e, 10) % 97);
            for (; n.length < 2;) n = "0" + n;
            return n
        }(t), "bad icap checksum", "address", t);
        let e = function(t) {
            t = t.toLowerCase();
            let e = As;
            for (let n = 0; n < t.length; n++) e = e * bs + ks[t[n]];
            return e
        }(t.substring(4)).toString(16);
        for (; e.length < 40;) e = "0" + e;
        return vs("0x" + e)
    }
    Pn(!1, "invalid address", "address", t)
}

function xs(t) {
    return t && "function" == typeof t.getAddress
}
async function Ns(t, e) {
    const n = await e;
    return null != n && "0x0000000000000000000000000000000000000000" !== n || (kn("string" != typeof t, "unconfigured name", "UNCONFIGURED_NAME", {
        value: t
    }), Pn(!1, "invalid AddressLike value; did not resolve to a value address", "target", t)), Ps(n)
}

function Cs(t, e) {
    return "string" == typeof t ? t.match(/^0x[0-9a-f]{40}$/i) ? Ps(t) : (kn(null != e, "ENS resolution requires a provider", "UNSUPPORTED_OPERATION", {
        operation: "resolveName"
    }), Ns(t, e.resolveName(t))) : xs(t) ? Ns(t, t.getAddress()) : t && "function" == typeof t.then ? Ns(t, t) : void Pn(!1, "unsupported addressable value", "target", t)
}
const Os = {};

function Rs(t, e) {
    let n = !1;
    return e < 0 && (n = !0, e *= -1), new Is(Os, `${n?"":"u"}int${e}`, t, {
        signed: n,
        width: e
    })
}

function Bs(t, e) {
    return new Is(Os, `bytes${e||""}`, t, {
        size: e
    })
}
const Ts = Symbol.for("_ethers_typed");
J = new WeakMap;
let Is = class t {
    constructor(t, e, n, r) {
        nn(this, "type"), nn(this, "value"), an(this, J), nn(this, "_typedSymbol"), null == r && (r = null), Nn(Os, t, "Typed"), wn(this, {
            _typedSymbol: Ts,
            type: e,
            value: n
        }), on(this, J, r), this.format()
    }
    format() {
        if ("array" === this.type) throw new Error("");
        if ("dynamicArray" === this.type) throw new Error("");
        return "tuple" === this.type ? `tuple(${this.value.map((t=>t.format())).join(",")})` : this.type
    }
    defaultValue() {
        return 0
    }
    minValue() {
        return 0
    }
    maxValue() {
        return 0
    }
    isBigInt() {
        return !!this.type.match(/^u?int[0-9]+$/)
    }
    isData() {
        return this.type.startsWith("bytes")
    }
    isString() {
        return "string" === this.type
    }
    get tupleName() {
        if ("tuple" !== this.type) throw TypeError("not a tuple");
        return sn(this, J)
    }
    get arrayLength() {
        if ("array" !== this.type) throw TypeError("not an array");
        return !0 === sn(this, J) ? -1 : !1 === sn(this, J) ? this.value.length : null
    }
    static from(e, n) {
        return new t(Os, e, n)
    }
    static uint8(t) {
        return Rs(t, 8)
    }
    static uint16(t) {
        return Rs(t, 16)
    }
    static uint24(t) {
        return Rs(t, 24)
    }
    static uint32(t) {
        return Rs(t, 32)
    }
    static uint40(t) {
        return Rs(t, 40)
    }
    static uint48(t) {
        return Rs(t, 48)
    }
    static uint56(t) {
        return Rs(t, 56)
    }
    static uint64(t) {
        return Rs(t, 64)
    }
    static uint72(t) {
        return Rs(t, 72)
    }
    static uint80(t) {
        return Rs(t, 80)
    }
    static uint88(t) {
        return Rs(t, 88)
    }
    static uint96(t) {
        return Rs(t, 96)
    }
    static uint104(t) {
        return Rs(t, 104)
    }
    static uint112(t) {
        return Rs(t, 112)
    }
    static uint120(t) {
        return Rs(t, 120)
    }
    static uint128(t) {
        return Rs(t, 128)
    }
    static uint136(t) {
        return Rs(t, 136)
    }
    static uint144(t) {
        return Rs(t, 144)
    }
    static uint152(t) {
        return Rs(t, 152)
    }
    static uint160(t) {
        return Rs(t, 160)
    }
    static uint168(t) {
        return Rs(t, 168)
    }
    static uint176(t) {
        return Rs(t, 176)
    }
    static uint184(t) {
        return Rs(t, 184)
    }
    static uint192(t) {
        return Rs(t, 192)
    }
    static uint200(t) {
        return Rs(t, 200)
    }
    static uint208(t) {
        return Rs(t, 208)
    }
    static uint216(t) {
        return Rs(t, 216)
    }
    static uint224(t) {
        return Rs(t, 224)
    }
    static uint232(t) {
        return Rs(t, 232)
    }
    static uint240(t) {
        return Rs(t, 240)
    }
    static uint248(t) {
        return Rs(t, 248)
    }
    static uint256(t) {
        return Rs(t, 256)
    }
    static uint(t) {
        return Rs(t, 256)
    }
    static int8(t) {
        return Rs(t, -8)
    }
    static int16(t) {
        return Rs(t, -16)
    }
    static int24(t) {
        return Rs(t, -24)
    }
    static int32(t) {
        return Rs(t, -32)
    }
    static int40(t) {
        return Rs(t, -40)
    }
    static int48(t) {
        return Rs(t, -48)
    }
    static int56(t) {
        return Rs(t, -56)
    }
    static int64(t) {
        return Rs(t, -64)
    }
    static int72(t) {
        return Rs(t, -72)
    }
    static int80(t) {
        return Rs(t, -80)
    }
    static int88(t) {
        return Rs(t, -88)
    }
    static int96(t) {
        return Rs(t, -96)
    }
    static int104(t) {
        return Rs(t, -104)
    }
    static int112(t) {
        return Rs(t, -112)
    }
    static int120(t) {
        return Rs(t, -120)
    }
    static int128(t) {
        return Rs(t, -128)
    }
    static int136(t) {
        return Rs(t, -136)
    }
    static int144(t) {
        return Rs(t, -144)
    }
    static int152(t) {
        return Rs(t, -152)
    }
    static int160(t) {
        return Rs(t, -160)
    }
    static int168(t) {
        return Rs(t, -168)
    }
    static int176(t) {
        return Rs(t, -176)
    }
    static int184(t) {
        return Rs(t, -184)
    }
    static int192(t) {
        return Rs(t, -192)
    }
    static int200(t) {
        return Rs(t, -200)
    }
    static int208(t) {
        return Rs(t, -208)
    }
    static int216(t) {
        return Rs(t, -216)
    }
    static int224(t) {
        return Rs(t, -224)
    }
    static int232(t) {
        return Rs(t, -232)
    }
    static int240(t) {
        return Rs(t, -240)
    }
    static int248(t) {
        return Rs(t, -248)
    }
    static int256(t) {
        return Rs(t, -256)
    }
    static int(t) {
        return Rs(t, -256)
    }
    static bytes1(t) {
        return Bs(t, 1)
    }
    static bytes2(t) {
        return Bs(t, 2)
    }
    static bytes3(t) {
        return Bs(t, 3)
    }
    static bytes4(t) {
        return Bs(t, 4)
    }
    static bytes5(t) {
        return Bs(t, 5)
    }
    static bytes6(t) {
        return Bs(t, 6)
    }
    static bytes7(t) {
        return Bs(t, 7)
    }
    static bytes8(t) {
        return Bs(t, 8)
    }
    static bytes9(t) {
        return Bs(t, 9)
    }
    static bytes10(t) {
        return Bs(t, 10)
    }
    static bytes11(t) {
        return Bs(t, 11)
    }
    static bytes12(t) {
        return Bs(t, 12)
    }
    static bytes13(t) {
        return Bs(t, 13)
    }
    static bytes14(t) {
        return Bs(t, 14)
    }
    static bytes15(t) {
        return Bs(t, 15)
    }
    static bytes16(t) {
        return Bs(t, 16)
    }
    static bytes17(t) {
        return Bs(t, 17)
    }
    static bytes18(t) {
        return Bs(t, 18)
    }
    static bytes19(t) {
        return Bs(t, 19)
    }
    static bytes20(t) {
        return Bs(t, 20)
    }
    static bytes21(t) {
        return Bs(t, 21)
    }
    static bytes22(t) {
        return Bs(t, 22)
    }
    static bytes23(t) {
        return Bs(t, 23)
    }
    static bytes24(t) {
        return Bs(t, 24)
    }
    static bytes25(t) {
        return Bs(t, 25)
    }
    static bytes26(t) {
        return Bs(t, 26)
    }
    static bytes27(t) {
        return Bs(t, 27)
    }
    static bytes28(t) {
        return Bs(t, 28)
    }
    static bytes29(t) {
        return Bs(t, 29)
    }
    static bytes30(t) {
        return Bs(t, 30)
    }
    static bytes31(t) {
        return Bs(t, 31)
    }
    static bytes32(t) {
        return Bs(t, 32)
    }
    static address(e) {
        return new t(Os, "address", e)
    }
    static bool(e) {
        return new t(Os, "bool", !!e)
    }
    static bytes(e) {
        return new t(Os, "bytes", e)
    }
    static string(e) {
        return new t(Os, "string", e)
    }
    static array(t, e) {
        throw new Error("not implemented yet")
    }
    static tuple(t, e) {
        throw new Error("not implemented yet")
    }
    static overrides(e) {
        return new t(Os, "overrides", Object.assign({}, e))
    }
    static isTyped(t) {
        return t && "object" == typeof t && "_typedSymbol" in t && t._typedSymbol === Ts
    }
    static dereference(e, n) {
        if (t.isTyped(e)) {
            if (e.type !== n) throw new Error(`invalid type: expecetd ${n}, got ${e.type}`);
            return e.value
        }
        return e
    }
};
class Ms extends jr {
    constructor(t) {
        super("address", "address", t, !1)
    }
    defaultValue() {
        return "0x0000000000000000000000000000000000000000"
    }
    encode(t, e) {
        let n = Is.dereference(e, "string");
        try {
            n = Ps(n)
        } catch (r) {
            return this._throwError(r.message, e)
        }
        return t.writeValue(n)
    }
    decode(t) {
        return Ps(qn(t.readValue(), 20))
    }
}
class Fs extends jr {
    constructor(t) {
        super(t.name, t.type, "_", t.dynamic), nn(this, "coder"), this.coder = t
    }
    defaultValue() {
        return this.coder.defaultValue()
    }
    encode(t, e) {
        return this.coder.encode(t, e)
    }
    decode(t) {
        return this.coder.decode(t)
    }
}

function Ds(t, e, n) {
    let r = [];
    if (Array.isArray(n)) r = n;
    else if (n && "object" == typeof n) {
        let t = {};
        r = e.map((e => {
            const r = e.localName;
            return kn(r, "cannot encode object for signature with missing names", "INVALID_ARGUMENT", {
                argument: "values",
                info: {
                    coder: e
                },
                value: n
            }), kn(!t[r], "cannot encode object for signature with duplicate names", "INVALID_ARGUMENT", {
                argument: "values",
                info: {
                    coder: e
                },
                value: n
            }), t[r] = !0, n[r]
        }))
    } else Pn(!1, "invalid tuple value", "tuple", n);
    Pn(e.length === r.length, "types/value length mismatch", "tuple", n);
    let s = new Wr,
        i = new Wr,
        a = [];
    e.forEach(((t, e) => {
        let n = r[e];
        if (t.dynamic) {
            let e = i.length;
            t.encode(i, n);
            let r = s.writeUpdatableValue();
            a.push((t => {
                r(t + e)
            }))
        } else t.encode(s, n)
    })), a.forEach((t => {
        t(s.length)
    }));
    let o = t.appendWriter(s);
    return o += t.appendWriter(i), o
}

function Ss(t, e) {
    let n = [],
        r = [],
        s = t.subReader(0);
    return e.forEach((e => {
        let i = null;
        if (e.dynamic) {
            let n = t.readIndex(),
                r = s.subReader(n);
            try {
                i = e.decode(r)
            } catch (a) {
                if (bn(a, "BUFFER_OVERRUN")) throw a;
                i = a, i.baseType = e.name, i.name = e.localName, i.type = e.type
            }
        } else try {
            i = e.decode(t)
        } catch (a) {
            if (bn(a, "BUFFER_OVERRUN")) throw a;
            i = a, i.baseType = e.name, i.name = e.localName, i.type = e.type
        }
        if (null == i) throw new Error("investigate");
        n.push(i), r.push(e.localName || null)
    })), Qr.fromItems(n, r)
}
class Us extends jr {
    constructor(t, e, n) {
        super("array", t.type + "[" + (e >= 0 ? e : "") + "]", n, -1 === e || t.dynamic), nn(this, "coder"), nn(this, "length"), wn(this, {
            coder: t,
            length: e
        })
    }
    defaultValue() {
        const t = this.coder.defaultValue(),
            e = [];
        for (let n = 0; n < this.length; n++) e.push(t);
        return e
    }
    encode(t, e) {
        const n = Is.dereference(e, "array");
        Array.isArray(n) || this._throwError("expected array value", n);
        let r = this.length; - 1 === r && (r = n.length, t.writeValue(n.length)), xn(n.length, r, "coder array" + (this.localName ? " " + this.localName : ""));
        let s = [];
        for (let i = 0; i < n.length; i++) s.push(this.coder);
        return Ds(t, s, n)
    }
    decode(t) {
        let e = this.length; - 1 === e && (e = t.readIndex(), kn(e * Tr <= t.dataLength, "insufficient data length", "BUFFER_OVERRUN", {
            buffer: t.bytes,
            offset: e * Tr,
            length: t.dataLength
        }));
        let n = [];
        for (let r = 0; r < e; r++) n.push(new Fs(this.coder));
        return Ss(t, n)
    }
}
class Ls extends jr {
    constructor(t) {
        super("bool", "bool", t, !1)
    }
    defaultValue() {
        return !1
    }
    encode(t, e) {
        const n = Is.dereference(e, "bool");
        return t.writeValue(n ? 1 : 0)
    }
    decode(t) {
        return !!t.readValue()
    }
}
class Gs extends jr {
    constructor(t, e) {
        super(t, t, e, !0)
    }
    defaultValue() {
        return "0x"
    }
    encode(t, e) {
        e = Rn(e);
        let n = t.writeValue(e.length);
        return n += t.writeBytes(e), n
    }
    decode(t) {
        return t.readBytes(t.readIndex(), !0)
    }
}
class Qs extends Gs {
    constructor(t) {
        super("bytes", t)
    }
    decode(t) {
        return Mn(super.decode(t))
    }
}
class Hs extends jr {
    constructor(t, e) {
        let n = "bytes" + String(t);
        super(n, n, e, !1), nn(this, "size"), wn(this, {
            size: t
        }, {
            size: "number"
        })
    }
    defaultValue() {
        return "0x0000000000000000000000000000000000000000000000000000000000000000".substring(0, 2 + 2 * this.size)
    }
    encode(t, e) {
        let n = Rn(Is.dereference(e, this.type));
        return n.length !== this.size && this._throwError("incorrect data length", e), t.writeBytes(n)
    }
    decode(t) {
        return Mn(t.readBytes(this.size))
    }
}
const js = new Uint8Array([]);
class Ws extends jr {
    constructor(t) {
        super("null", "", t, !1)
    }
    defaultValue() {
        return null
    }
    encode(t, e) {
        return null != e && this._throwError("not null", e), t.writeBytes(js)
    }
    decode(t) {
        return t.readBytes(0), null
    }
}
const Js = BigInt(0),
    Vs = BigInt(1),
    zs = BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
class Ks extends jr {
    constructor(t, e, n) {
        const r = (e ? "int" : "uint") + 8 * t;
        super(r, r, n, !1), nn(this, "size"), nn(this, "signed"), wn(this, {
            size: t,
            signed: e
        }, {
            size: "number",
            signed: "boolean"
        })
    }
    defaultValue() {
        return 0
    }
    encode(t, e) {
        let n = Vn(Is.dereference(e, this.type)),
            r = Jn(zs, 256);
        if (this.signed) {
            let t = Jn(r, 8 * this.size - 1);
            (n > t || n < -(t + Vs)) && this._throwError("value out-of-bounds", e), n = Wn(n, 256)
        } else(n < Js || n > Jn(r, 8 * this.size)) && this._throwError("value out-of-bounds", e);
        return t.writeValue(n)
    }
    decode(t) {
        let e = Jn(t.readValue(), 8 * this.size);
        return this.signed && (e = jn(e, 8 * this.size)), e
    }
}
class Ys extends Gs {
    constructor(t) {
        super("string", t)
    }
    defaultValue() {
        return ""
    }
    encode(t, e) {
        return super.encode(t, sr(Is.dereference(e, "string")))
    }
    decode(t) {
        return ir(super.decode(t))
    }
}
class Zs extends jr {
    constructor(t, e) {
        let n = !1;
        const r = [];
        t.forEach((t => {
            t.dynamic && (n = !0), r.push(t.type)
        }));
        super("tuple", "tuple(" + r.join(",") + ")", e, n), nn(this, "coders"), wn(this, {
            coders: Object.freeze(t.slice())
        })
    }
    defaultValue() {
        const t = [];
        this.coders.forEach((e => {
            t.push(e.defaultValue())
        }));
        const e = this.coders.reduce(((t, e) => {
            const n = e.localName;
            return n && (t[n] || (t[n] = 0), t[n]++), t
        }), {});
        return this.coders.forEach(((n, r) => {
            let s = n.localName;
            s && 1 === e[s] && ("length" === s && (s = "_length"), null == t[s] && (t[s] = t[r]))
        })), Object.freeze(t)
    }
    encode(t, e) {
        const n = Is.dereference(e, "tuple");
        return Ds(t, this.coders, n)
    }
    decode(t) {
        return Ss(t, this.coders)
    }
}

function qs(t) {
    return es(sr(t))
}
const Xs = new Map([
    [8217, "apostrophe"],
    [8260, "fraction slash"],
    [12539, "middle dot"]
]);

function _s(t) {
    return function(t) {
        let e = 0;
        return () => t[e++]
    }(function(t) {
        let e = 0;

        function n() {
            return t[e++] << 8 | t[e++]
        }
        let r = n(),
            s = 1,
            i = [0, 1];
        for (let b = 1; b < r; b++) i.push(s += n());
        let a = n(),
            o = e;
        e += a;
        let c = 0,
            l = 0;

        function u() {
            return 0 == c && (l = l << 8 | t[e++], c = 8), l >> --c & 1
        }
        const h = 2 ** 31,
            f = h >>> 1,
            p = f >> 1,
            d = h - 1;
        let g = 0;
        for (let b = 0; b < 31; b++) g = g << 1 | u();
        let m = [],
            y = 0,
            w = h;
        for (;;) {
            let t = Math.floor(((g - y + 1) * s - 1) / w),
                e = 0,
                n = r;
            for (; n - e > 1;) {
                let r = e + n >>> 1;
                t < i[r] ? n = r : e = r
            }
            if (0 == e) break;
            m.push(e);
            let a = y + Math.floor(w * i[e] / s),
                o = y + Math.floor(w * i[e + 1] / s) - 1;
            for (; !((a ^ o) & f);) g = g << 1 & d | u(), a = a << 1 & d, o = o << 1 & d | 1;
            for (; a & ~o & p;) g = g & f | g << 1 & d >>> 1 | u(), a = a << 1 ^ f, o = (o ^ f) << 1 | f | 1;
            y = a, w = 1 + o - a
        }
        let A = r - 4;
        return m.map((e => {
            switch (e - A) {
                case 3:
                    return A + 65792 + (t[o++] << 16 | t[o++] << 8 | t[o++]);
                case 2:
                    return A + 256 + (t[o++] << 8 | t[o++]);
                case 1:
                    return A + t[o++];
                default:
                    return e - 1
            }
        }))
    }(function(t) {
        let e = [];
        [..."ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"].forEach(((t, n) => e[t.charCodeAt(0)] = n));
        let n = t.length,
            r = new Uint8Array(6 * n >> 3);
        for (let s = 0, i = 0, a = 0, o = 0; s < n; s++) o = o << 6 | e[t.charCodeAt(s)], a += 6, a >= 8 && (r[i++] = o >> (a -= 8));
        return r
    }(t)))
}

function $s(t) {
    return 1 & t ? ~t >> 1 : t >> 1
}

function ti(t, e) {
    let n = Array(t);
    for (let r = 0, s = 0; r < t; r++) n[r] = s += $s(e());
    return n
}

function ei(t, e = 0) {
    let n = [];
    for (;;) {
        let r = t(),
            s = t();
        if (!s) break;
        e += r;
        for (let t = 0; t < s; t++) n.push(e + t);
        e += s + 1
    }
    return n
}

function ni(t) {
    return si((() => {
        let e = ei(t);
        if (e.length) return e
    }))
}

function ri(t) {
    let e = [];
    for (;;) {
        let n = t();
        if (0 == n) break;
        e.push(ai(n, t))
    }
    for (;;) {
        let n = t() - 1;
        if (n < 0) break;
        e.push(oi(n, t))
    }
    return e.flat()
}

function si(t) {
    let e = [];
    for (;;) {
        let n = t(e.length);
        if (!n) break;
        e.push(n)
    }
    return e
}

function ii(t, e, n) {
    let r = Array(t).fill().map((() => []));
    for (let s = 0; s < e; s++) ti(t, n).forEach(((t, e) => r[e].push(t)));
    return r
}

function ai(t, e) {
    let n = 1 + e(),
        r = e(),
        s = si(e);
    return ii(s.length, 1 + t, e).flatMap(((t, e) => {
        let [i, ...a] = t;
        return Array(s[e]).fill().map(((t, e) => {
            let s = e * r;
            return [i + e * n, a.map((t => t + s))]
        }))
    }))
}

function oi(t, e) {
    return ii(1 + e(), 1 + t, e).map((t => [t[0], t.slice(1)]))
}

function ci(t) {
    return `{${function(t){return t.toString(16).toUpperCase().padStart(2,"0")}(t)}}`
}

function li(t) {
    let e = t.length;
    if (e < 4096) return String.fromCodePoint(...t);
    let n = [];
    for (let r = 0; r < e;) n.push(String.fromCodePoint(...t.slice(r, r += 4096)));
    return n.join("")
}

function ui(t, e) {
    let n = t.length,
        r = n - e.length;
    for (let s = 0; 0 == r && s < n; s++) r = t[s] - e[s];
    return r
}
const hi = 44032,
    fi = 4352,
    pi = 4449,
    di = 4519,
    gi = 28,
    mi = 588;

function yi(t) {
    return t >> 24 & 255
}

function wi(t) {
    return 16777215 & t
}
let Ai, bi, vi, Ei;

function ki(t) {
    return t >= hi && t < 55204
}

function Pi(t, e) {
    if (t >= fi && t < 4371 && e >= pi && e < 4470) return hi + (t - fi) * mi + (e - pi) * gi;
    if (ki(t) && e > di && e < 4547 && (t - hi) % gi == 0) return t + (e - di); {
        let n = Ei.get(t);
        return n && (n = n.get(e), n) ? n : -1
    }
}

function xi(t) {
    Ai || function() {
        let t = _s("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");
        Ai = new Map(ni(t).flatMap(((t, e) => t.map((t => [t, e + 1 << 24]))))), bi = new Set(ei(t)), vi = new Map, Ei = new Map;
        for (let [e, n] of ri(t)) {
            if (!bi.has(e) && 2 == n.length) {
                let [t, r] = n, s = Ei.get(t);
                s || (s = new Map, Ei.set(t, s)), s.set(r, e)
            }
            vi.set(e, n.reverse())
        }
    }();
    let e = [],
        n = [],
        r = !1;

    function s(t) {
        let n = Ai.get(t);
        n && (r = !0, t |= n), e.push(t)
    }
    for (let i of t)
        for (;;) {
            if (i < 128) e.push(i);
            else if (ki(i)) {
                let t = i - hi,
                    e = t % mi / gi | 0,
                    n = t % gi;
                s(fi + (t / mi | 0)), s(pi + e), n > 0 && s(di + n)
            } else {
                let t = vi.get(i);
                t ? n.push(...t) : s(i)
            }
            if (!n.length) break;
            i = n.pop()
        }
    if (r && e.length > 1) {
        let t = yi(e[0]);
        for (let n = 1; n < e.length; n++) {
            let r = yi(e[n]);
            if (0 == r || t <= r) {
                t = r;
                continue
            }
            let s = n - 1;
            for (;;) {
                let n = e[s + 1];
                if (e[s + 1] = e[s], e[s] = n, !s) break;
                if (t = yi(e[--s]), t <= r) break
            }
            t = yi(e[n])
        }
    }
    return e
}

function Ni(t) {
    return xi(t).map(wi)
}

function Ci(t) {
    return function(t) {
        let e = [],
            n = [],
            r = -1,
            s = 0;
        for (let i of t) {
            let t = yi(i),
                a = wi(i);
            if (-1 == r) 0 == t ? r = a : e.push(a);
            else if (s > 0 && s >= t) 0 == t ? (e.push(r, ...n), n.length = 0, r = a) : n.push(a), s = t;
            else {
                let i = Pi(r, a);
                i >= 0 ? r = i : 0 == s && 0 == t ? (e.push(r), r = a) : (n.push(a), s = t)
            }
        }
        return r >= 0 && e.push(r, ...n), e
    }(xi(t))
}
const Oi = ".",
    Ri = t => Array.from(t);

function Bi(t, e) {
    return t.P.has(e) || t.Q.has(e)
}
class Ti extends Array {
    get is_emoji() {
        return !0
    }
}
let Ii, Mi, Fi, Di, Si, Ui, Li, Gi, Qi, Hi, ji;

function Wi() {
    if (Ii) return;
    let t = _s("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");
    const e = () => ei(t),
        n = () => new Set(e()),
        r = (t, e) => e.forEach((e => t.add(e)));
    Ii = new Map(ri(t)), Mi = n(), Fi = e(), Di = new Set(e().map((t => Fi[t]))), Fi = new Set(Fi), Si = n(), n();
    let s = ni(t),
        i = t();
    const a = () => {
        let t = new Set;
        return e().forEach((e => r(t, s[e]))), r(t, e()), t
    };
    Ui = si((e => {
        let n = si(t).map((t => t + 96));
        if (n.length) {
            let r = e >= i;
            return n[0] -= 32, n = li(n), r && (n = `Restricted[${n}]`), {
                N: n,
                P: a(),
                Q: a(),
                M: !t(),
                R: r
            }
        }
    })), Li = n(), Gi = new Map;
    let o = e().concat(Ri(Li)).sort(((t, e) => t - e));
    o.forEach(((e, n) => {
        let r = t(),
            s = o[n] = r ? o[n - r] : {
                V: [],
                M: new Map
            };
        s.V.push(e), Li.has(e) || Gi.set(e, s)
    }));
    for (let {
            V: u,
            M: h
        } of new Set(Gi.values())) {
        let t = [];
        for (let n of u) {
            let e = Ui.filter((t => Bi(t, n))),
                s = t.find((({
                    G: t
                }) => e.some((e => t.has(e)))));
            s || (s = {
                G: new Set,
                V: []
            }, t.push(s)), s.V.push(n), r(s.G, e)
        }
        let e = t.flatMap((t => Ri(t.G)));
        for (let {
                G: n,
                V: r
            } of t) {
            let t = new Set(e.filter((t => !n.has(t))));
            for (let e of r) h.set(e, t)
        }
    }
    Qi = new Set;
    let c = new Set;
    const l = t => Qi.has(t) ? c.add(t) : Qi.add(t);
    for (let u of Ui) {
        for (let t of u.P) l(t);
        for (let t of u.Q) l(t)
    }
    for (let u of Qi) Gi.has(u) || c.has(u) || Gi.set(u, 1);
    r(Qi, Ni(Qi)), Hi = function(t) {
        let e = [],
            n = ei(t);
        return function t({
            S: n,
            B: r
        }, s, i) {
            if (!(4 & n && i === s[s.length - 1])) {
                2 & n && (i = s[s.length - 1]), 1 & n && e.push(s);
                for (let e of r)
                    for (let n of e.Q) t(e, [...s, n], i)
            }
        }(function e(r) {
            return {
                S: t(),
                B: si((() => {
                    let r = ei(t).map((t => n[t]));
                    if (r.length) return e(r)
                })),
                Q: r
            }
        }([]), []), e
    }(t).map((t => Ti.from(t))).sort(ui), ji = new Map;
    for (let u of Hi) {
        let t = [ji];
        for (let e of u) {
            let n = t.map((t => {
                let n = t.get(e);
                return n || (n = new Map, t.set(e, n)), n
            }));
            65039 === e ? t.push(...n) : t = n
        }
        for (let e of t) e.V = u
    }
}

function Ji(t) {
    return (Ki(t) ? "" : `${Vi(zi([t]))} `) + ci(t)
}

function Vi(t) {
    return `"${t}"‎`
}

function zi(t, e = 1 / 0, n = ci) {
    let r = [];
    var s;
    s = t[0], Wi(), Fi.has(s) && r.push("◌"), t.length > e && (e >>= 1, t = [...t.slice(0, e), 8230, ...t.slice(-e)]);
    let i = 0,
        a = t.length;
    for (let o = 0; o < a; o++) {
        let e = t[o];
        Ki(e) && (r.push(li(t.slice(i, o))), r.push(n(e)), i = o + 1)
    }
    return r.push(li(t.slice(i, a))), r.join("")
}

function Ki(t) {
    return Wi(), Si.has(t)
}

function Yi(t) {
    return e = function(t, e, n) {
        if (!t) return [];
        Wi();
        let r = 0;
        return t.split(Oi).map((t => {
            let s = function(t) {
                    let e = [];
                    for (let n = 0, r = t.length; n < r;) {
                        let r = t.codePointAt(n);
                        n += r < 65536 ? 1 : 2, e.push(r)
                    }
                    return e
                }(t),
                i = {
                    input: s,
                    offset: r
                };
            r += s.length + 1;
            try {
                let t, r = i.tokens = function(t, e, n) {
                        let r = [],
                            s = [];
                        for (t = t.slice().reverse(); t.length;) {
                            let i = $i(t);
                            if (i) s.length && (r.push(e(s)), s = []), r.push(n(i));
                            else {
                                let e = t.pop();
                                if (Qi.has(e)) s.push(e);
                                else {
                                    let t = Ii.get(e);
                                    if (t) s.push(...t);
                                    else if (!Mi.has(e)) throw Zi(e)
                                }
                            }
                        }
                        return s.length && r.push(e(s)), r
                    }(s, e, n),
                    a = r.length;
                if (!a) throw new Error("empty label");
                let o = i.output = r.flat();
                if (function(t) {
                        for (let e = t.lastIndexOf(95); e > 0;)
                            if (95 !== t[--e]) throw new Error("underscore allowed only at start")
                    }(o), !(i.emoji = a > 1 || r[0].is_emoji) && o.every((t => t < 128))) ! function(t) {
                    if (t.length >= 4 && 45 == t[2] && 45 == t[3]) throw new Error(`invalid label extension: "${li(t.slice(0,4))}"`)
                }(o), t = "ASCII";
                else {
                    let e = r.flatMap((t => t.is_emoji ? [] : t));
                    if (e.length) {
                        if (Fi.has(o[0])) throw Xi("leading combining mark");
                        for (let t = 1; t < a; t++) {
                            let e = r[t];
                            if (!e.is_emoji && Fi.has(e[0])) throw Xi(`emoji + combining mark: "${li(r[t-1])} + ${zi([e[0]])}"`)
                        }! function(t) {
                            let e = t[0],
                                n = Xs.get(e);
                            if (n) throw Xi(`leading ${n}`);
                            let r = t.length,
                                s = -1;
                            for (let i = 1; i < r; i++) {
                                e = t[i];
                                let r = Xs.get(e);
                                if (r) {
                                    if (s == i) throw Xi(`${n} + ${r}`);
                                    s = i + 1, n = r
                                }
                            }
                            if (s == r) throw Xi(`trailing ${n}`)
                        }(o);
                        let n = Ri(new Set(e)),
                            [s] = function(t) {
                                let e = Ui;
                                for (let n of t) {
                                    let t = e.filter((t => Bi(t, n)));
                                    if (!t.length) throw Ui.some((t => Bi(t, n))) ? qi(e[0], n) : Zi(n);
                                    if (e = t, 1 == t.length) break
                                }
                                return e
                            }(n);
                        ! function(t, e) {
                            for (let n of e)
                                if (!Bi(t, n)) throw qi(t, n);
                            if (t.M) {
                                let t = Ni(e);
                                for (let e = 1, n = t.length; e < n; e++)
                                    if (Di.has(t[e])) {
                                        let r = e + 1;
                                        for (let s; r < n && Di.has(s = t[r]); r++)
                                            for (let n = e; n < r; n++)
                                                if (t[n] == s) throw new Error(`duplicate non-spacing marks: ${Ji(s)}`);
                                        if (r - e > 4) throw new Error(`excessive non-spacing marks: ${Vi(zi(t.slice(e-1,r)))} (${r-e}/4)`);
                                        e = r
                                    }
                            }
                        }(s, e),
                        function(t, e) {
                            let n, r = [];
                            for (let s of e) {
                                let t = Gi.get(s);
                                if (1 === t) return;
                                if (t) {
                                    let e = t.M.get(s);
                                    if (n = n ? n.filter((t => e.has(t))) : Ri(e), !n.length) return
                                } else r.push(s)
                            }
                            if (n)
                                for (let s of n)
                                    if (r.every((t => Bi(s, t)))) throw new Error(`whole-script confusable: ${t.N}/${s.N}`)
                        }(s, n), t = s.N
                    } else t = "Emoji"
                }
                i.type = t
            } catch (a) {
                i.error = a
            }
            return i
        }))
    }(t, Ci, _i), e.map((({
        input: t,
        error: n,
        output: r
    }) => {
        if (n) {
            let r = n.message;
            throw new Error(1 == e.length ? r : `Invalid label ${Vi(zi(t,63))}: ${r}`)
        }
        return li(r)
    })).join(Oi);
    var e
}

function Zi(t) {
    return new Error(`disallowed character: ${Ji(t)}`)
}

function qi(t, e) {
    let n = Ji(e),
        r = Ui.find((t => t.P.has(e)));
    return r && (n = `${r.N} ${n}`), new Error(`illegal mixture: ${t.N} + ${n}`)
}

function Xi(t) {
    return new Error(`illegal placement: ${t}`)
}

function _i(t) {
    return t.filter((t => 65039 != t))
}

function $i(t, e) {
    let n, r = ji,
        s = t.length;
    for (; s && (r = r.get(t[--s]), r);) {
        let {
            V: e
        } = r;
        e && (n = e, t.length = s)
    }
    return n
}
const ta = new Uint8Array(32);

function ea(t) {
    return Pn(0 !== t.length, "invalid ENS name; empty component", "comp", t), t
}

function na(t) {
    const e = sr(function(t) {
            try {
                if (0 === t.length) throw new Error("empty label");
                return Yi(t)
            } catch (e) {
                Pn(!1, `invalid ENS name (${e.message})`, "name", t)
            }
        }(t)),
        n = [];
    if (0 === t.length) return n;
    let r = 0;
    for (let s = 0; s < e.length; s++) {
        46 === e[s] && (n.push(ea(e.slice(r, s))), r = s + 1)
    }
    return Pn(r < e.length, "invalid ENS name; empty component", "name", t), n.push(ea(e.slice(r))), n
}

function ra(t) {
    Pn("string" == typeof t, "invalid ENS name; not a string", "name", t), Pn(t.length, "invalid ENS name (empty label)", "name", t);
    let e = ta;
    const n = na(t);
    for (; n.length;) e = es(Fn([e, es(n.pop())]));
    return Mn(e)
}

function sa(t, e) {
    const n = e;
    return Pn(n <= 255, "DNS encoded label cannot exceed 255", "length", n), Mn(Fn(na(t).map((e => {
        Pn(e.length <= n, `label ${JSON.stringify(t)} exceeds ${n} bytes`, "name", t);
        const r = new Uint8Array(e.length + 1);
        return r.set(e, 1), r[0] = r.length - 1, r
    })))) + "00"
}

function ia(t, e) {
    return {
        address: Ps(t),
        storageKeys: e.map(((t, e) => (Pn(Bn(t, 32), "invalid slot", `storageKeys[${e}]`, t), t.toLowerCase())))
    }
}

function aa(t) {
    if (Array.isArray(t)) return t.map(((e, n) => Array.isArray(e) ? (Pn(2 === e.length, "invalid slot set", `value[${n}]`, e), ia(e[0], e[1])) : (Pn(null != e && "object" == typeof e, "invalid address-slot set", "value", t), ia(e.address, e.storageKeys))));
    Pn(null != t && "object" == typeof t, "invalid access list", "value", t);
    const e = Object.keys(t).map((e => {
        const n = t[e].reduce(((t, e) => (t[e] = !0, t)), {});
        return ia(e, Object.keys(n).sort())
    }));
    return e.sort(((t, e) => t.address.localeCompare(e.address))), e
}

function oa(t, e) {
    return function(t) {
        let e;
        return e = "string" == typeof t ? ws.computePublicKey(t, !1) : t.publicKey, Ps(es("0x" + e.substring(4)).substring(26))
    }(ws.recoverPublicKey(t, e))
}
ta.fill(0);
const ca = BigInt(0),
    la = BigInt(2),
    ua = BigInt(27),
    ha = BigInt(28),
    fa = BigInt(35),
    pa = BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"),
    da = 131072;

function ga(t, e) {
    let n = t.toString(16);
    for (; n.length < 2;) n = "0" + n;
    return n += is(e).substring(4), "0x" + n
}

function ma(t) {
    return "0x" === t ? null : Ps(t)
}

function ya(t, e) {
    try {
        return aa(t)
    } catch (n) {
        Pn(!1, n.message, e, t)
    }
}

function wa(t, e) {
    return "0x" === t ? 0 : Zn(t, e)
}

function Aa(t, e) {
    if ("0x" === t) return ca;
    const n = Vn(t, e);
    return Pn(n <= pa, "value exceeds uint size", e, n), n
}

function ba(t, e) {
    const n = Vn(t, "value"),
        r = Xn(n);
    return Pn(r.length <= 32, "value too large", `tx.${e}`, n), r
}

function va(t) {
    return aa(t).map((t => [t.address, t.storageKeys]))
}

function Ea(t, e) {
    Pn(Array.isArray(t), `invalid ${e}`, "value", t);
    for (let n = 0; n < t.length; n++) Pn(Bn(t[n], 32), "invalid ${ param } hash", `value[${n}]`, t[n]);
    return t
}

function ka(t, e) {
    let n;
    try {
        if (n = wa(e[0], "yParity"), 0 !== n && 1 !== n) throw new Error("bad yParity")
    } catch (a) {
        Pn(!1, "invalid yParity", "yParity", e[0])
    }
    const r = Ln(e[1], 32),
        s = Ln(e[2], 32),
        i = ys.from({
            r: r,
            s: s,
            yParity: n
        });
    t.signature = i
}
V = new WeakMap, z = new WeakMap, K = new WeakMap, Y = new WeakMap, Z = new WeakMap, q = new WeakMap, X = new WeakMap, _ = new WeakMap, $ = new WeakMap, tt = new WeakMap, et = new WeakMap, nt = new WeakMap, rt = new WeakMap, st = new WeakMap, it = new WeakMap, at = new WeakMap, ot = new WeakSet, ct = function(t, e) {
    kn(!t || null != this.signature, "cannot serialize unsigned transaction; maybe you meant .unsignedSerialized", "UNSUPPORTED_OPERATION", {
        operation: ".serialized"
    });
    const n = t ? this.signature : null;
    switch (this.inferType()) {
        case 0:
            return function(t, e) {
                const n = [ba(t.nonce, "nonce"), ba(t.gasPrice || 0, "gasPrice"), ba(t.gasLimit, "gasLimit"), t.to || "0x", ba(t.value, "value"), t.data];
                let r = ca;
                if (t.chainId != ca) r = Vn(t.chainId, "tx.chainId"), Pn(!e || null == e.networkV || e.legacyChainId === r, "tx.chainId/sig.v mismatch", "sig", e);
                else if (t.signature) {
                    const e = t.signature.legacyChainId;
                    null != e && (r = e)
                }
                if (!e) return r !== ca && (n.push(Xn(r)), n.push("0x"), n.push("0x")), Br(n);
                let s = BigInt(27 + e.yParity);
                return r !== ca ? s = ys.getChainIdV(r, e.v) : BigInt(e.v) !== s && Pn(!1, "tx.chainId/sig.v mismatch", "sig", e), n.push(Xn(s)), n.push(Xn(e.r)), n.push(Xn(e.s)), Br(n)
            }(this, n);
        case 1:
            return function(t, e) {
                const n = [ba(t.chainId, "chainId"), ba(t.nonce, "nonce"), ba(t.gasPrice || 0, "gasPrice"), ba(t.gasLimit, "gasLimit"), t.to || "0x", ba(t.value, "value"), t.data, va(t.accessList || [])];
                return e && (n.push(ba(e.yParity, "recoveryParam")), n.push(Xn(e.r)), n.push(Xn(e.s))), Fn(["0x01", Br(n)])
            }(this, n);
        case 2:
            return function(t, e) {
                const n = [ba(t.chainId, "chainId"), ba(t.nonce, "nonce"), ba(t.maxPriorityFeePerGas || 0, "maxPriorityFeePerGas"), ba(t.maxFeePerGas || 0, "maxFeePerGas"), ba(t.gasLimit, "gasLimit"), t.to || "0x", ba(t.value, "value"), t.data, va(t.accessList || [])];
                return e && (n.push(ba(e.yParity, "yParity")), n.push(Xn(e.r)), n.push(Xn(e.s))), Fn(["0x02", Br(n)])
            }(this, n);
        case 3:
            return function(t, e, n) {
                const r = [ba(t.chainId, "chainId"), ba(t.nonce, "nonce"), ba(t.maxPriorityFeePerGas || 0, "maxPriorityFeePerGas"), ba(t.maxFeePerGas || 0, "maxFeePerGas"), ba(t.gasLimit, "gasLimit"), t.to || as, ba(t.value, "value"), t.data, va(t.accessList || []), ba(t.maxFeePerBlobGas || 0, "maxFeePerBlobGas"), Ea(t.blobVersionedHashes || [], "blobVersionedHashes")];
                return e && (r.push(ba(e.yParity, "yParity")), r.push(Xn(e.r)), r.push(Xn(e.s)), n) ? Fn(["0x03", Br([r, n.map((t => t.data)), n.map((t => t.commitment)), n.map((t => t.proof))])]) : Fn(["0x03", Br(r)])
            }(this, n, e ? this.blobs : null)
    }
    kn(!1, "unsupported transaction type", "UNSUPPORTED_OPERATION", {
        operation: ".serialized"
    })
};
let Pa = class t {
    constructor() {
        an(this, ot), an(this, V), an(this, z), an(this, K), an(this, Y), an(this, Z), an(this, q), an(this, X), an(this, _), an(this, $), an(this, tt), an(this, et), an(this, nt), an(this, rt), an(this, st), an(this, it), an(this, at), on(this, V, null), on(this, z, null), on(this, Y, 0), on(this, Z, ca), on(this, q, null), on(this, X, null), on(this, _, null), on(this, K, "0x"), on(this, $, ca), on(this, tt, ca), on(this, et, null), on(this, nt, null), on(this, rt, null), on(this, st, null), on(this, at, null), on(this, it, null)
    }
    get type() {
        return sn(this, V)
    }
    set type(t) {
        switch (t) {
            case null:
                on(this, V, null);
                break;
            case 0:
            case "legacy":
                on(this, V, 0);
                break;
            case 1:
            case "berlin":
            case "eip-2930":
                on(this, V, 1);
                break;
            case 2:
            case "london":
            case "eip-1559":
                on(this, V, 2);
                break;
            case 3:
            case "cancun":
            case "eip-4844":
                on(this, V, 3);
                break;
            default:
                Pn(!1, "unsupported transaction type", "type", t)
        }
    }
    get typeName() {
        switch (this.type) {
            case 0:
                return "legacy";
            case 1:
                return "eip-2930";
            case 2:
                return "eip-1559";
            case 3:
                return "eip-4844"
        }
        return null
    }
    get to() {
        const t = sn(this, z);
        return null == t && 3 === this.type ? as : t
    }
    set to(t) {
        on(this, z, null == t ? null : Ps(t))
    }
    get nonce() {
        return sn(this, Y)
    }
    set nonce(t) {
        on(this, Y, Zn(t, "value"))
    }
    get gasLimit() {
        return sn(this, Z)
    }
    set gasLimit(t) {
        on(this, Z, Vn(t))
    }
    get gasPrice() {
        const t = sn(this, q);
        return null != t || 0 !== this.type && 1 !== this.type ? t : ca
    }
    set gasPrice(t) {
        on(this, q, null == t ? null : Vn(t, "gasPrice"))
    }
    get maxPriorityFeePerGas() {
        const t = sn(this, X);
        return null == t ? 2 === this.type || 3 === this.type ? ca : null : t
    }
    set maxPriorityFeePerGas(t) {
        on(this, X, null == t ? null : Vn(t, "maxPriorityFeePerGas"))
    }
    get maxFeePerGas() {
        const t = sn(this, _);
        return null == t ? 2 === this.type || 3 === this.type ? ca : null : t
    }
    set maxFeePerGas(t) {
        on(this, _, null == t ? null : Vn(t, "maxFeePerGas"))
    }
    get data() {
        return sn(this, K)
    }
    set data(t) {
        on(this, K, Mn(t))
    }
    get value() {
        return sn(this, $)
    }
    set value(t) {
        on(this, $, Vn(t, "value"))
    }
    get chainId() {
        return sn(this, tt)
    }
    set chainId(t) {
        on(this, tt, Vn(t))
    }
    get signature() {
        return sn(this, et) || null
    }
    set signature(t) {
        on(this, et, null == t ? null : ys.from(t))
    }
    get accessList() {
        const t = sn(this, nt) || null;
        return null == t ? 1 === this.type || 2 === this.type || 3 === this.type ? [] : null : t
    }
    set accessList(t) {
        on(this, nt, null == t ? null : aa(t))
    }
    get maxFeePerBlobGas() {
        const t = sn(this, rt);
        return null == t && 3 === this.type ? ca : t
    }
    set maxFeePerBlobGas(t) {
        on(this, rt, null == t ? null : Vn(t, "maxFeePerBlobGas"))
    }
    get blobVersionedHashes() {
        let t = sn(this, st);
        return null == t && 3 === this.type ? [] : t
    }
    set blobVersionedHashes(t) {
        if (null != t) {
            Pn(Array.isArray(t), "blobVersionedHashes must be an Array", "value", t), t = t.slice();
            for (let e = 0; e < t.length; e++) Pn(Bn(t[e], 32), "invalid blobVersionedHash", `value[${e}]`, t[e])
        }
        on(this, st, t)
    }
    get blobs() {
        return null == sn(this, at) ? null : sn(this, at).map((t => Object.assign({}, t)))
    }
    set blobs(t) {
        if (null == t) return void on(this, at, null);
        const e = [],
            n = [];
        for (let r = 0; r < t.length; r++) {
            const s = t[r];
            if (Tn(s)) {
                kn(sn(this, it), "adding a raw blob requires a KZG library", "UNSUPPORTED_OPERATION", {
                    operation: "set blobs()"
                });
                let t = On(s);
                if (Pn(t.length <= da, "blob is too large", `blobs[${r}]`, s), t.length !== da) {
                    const e = new Uint8Array(da);
                    e.set(t), t = e
                }
                const i = sn(this, it).blobToKzgCommitment(t),
                    a = Mn(sn(this, it).computeBlobKzgProof(t, i));
                e.push({
                    data: Mn(t),
                    commitment: Mn(i),
                    proof: a
                }), n.push(ga(1, i))
            } else {
                const t = Mn(s.commitment);
                e.push({
                    data: Mn(s.data),
                    commitment: t,
                    proof: Mn(s.proof)
                }), n.push(ga(1, t))
            }
        }
        on(this, at, e), on(this, st, n)
    }
    get kzg() {
        return sn(this, it)
    }
    set kzg(t) {
        on(this, it, t)
    }
    get hash() {
        return null == this.signature ? null : es(cn(this, ot, ct).call(this, !0, !1))
    }
    get unsignedHash() {
        return es(this.unsignedSerialized)
    }
    get from() {
        return null == this.signature ? null : oa(this.unsignedHash, this.signature)
    }
    get fromPublicKey() {
        return null == this.signature ? null : ws.recoverPublicKey(this.unsignedHash, this.signature)
    }
    isSigned() {
        return null != this.signature
    }
    get serialized() {
        return cn(this, ot, ct).call(this, !0, !0)
    }
    get unsignedSerialized() {
        return cn(this, ot, ct).call(this, !1, !1)
    }
    inferType() {
        const t = this.inferTypes();
        return t.indexOf(2) >= 0 ? 2 : t.pop()
    }
    inferTypes() {
        const t = null != this.gasPrice,
            e = null != this.maxFeePerGas || null != this.maxPriorityFeePerGas,
            n = null != this.accessList,
            r = null != sn(this, rt) || sn(this, st);
        null != this.maxFeePerGas && null != this.maxPriorityFeePerGas && kn(this.maxFeePerGas >= this.maxPriorityFeePerGas, "priorityFee cannot be more than maxFee", "BAD_DATA", {
            value: this
        }), kn(!e || 0 !== this.type && 1 !== this.type, "transaction type cannot have maxFeePerGas or maxPriorityFeePerGas", "BAD_DATA", {
            value: this
        }), kn(0 !== this.type || !n, "legacy transaction cannot have accessList", "BAD_DATA", {
            value: this
        });
        const s = [];
        return null != this.type ? s.push(this.type) : e ? s.push(2) : t ? (s.push(1), n || s.push(0)) : n ? (s.push(1), s.push(2)) : (r && this.to || (s.push(0), s.push(1), s.push(2)), s.push(3)), s.sort(), s
    }
    isLegacy() {
        return 0 === this.type
    }
    isBerlin() {
        return 1 === this.type
    }
    isLondon() {
        return 2 === this.type
    }
    isCancun() {
        return 3 === this.type
    }
    clone() {
        return t.from(this)
    }
    toJSON() {
        const t = t => null == t ? null : t.toString();
        return {
            type: this.type,
            to: this.to,
            data: this.data,
            nonce: this.nonce,
            gasLimit: t(this.gasLimit),
            gasPrice: t(this.gasPrice),
            maxPriorityFeePerGas: t(this.maxPriorityFeePerGas),
            maxFeePerGas: t(this.maxFeePerGas),
            value: t(this.value),
            chainId: t(this.chainId),
            sig: this.signature ? this.signature.toJSON() : null,
            accessList: this.accessList
        }
    }
    static from(e) {
        if (null == e) return new t;
        if ("string" == typeof e) {
            const n = On(e);
            if (n[0] >= 127) return t.from(function(t) {
                const e = Nr(t);
                Pn(Array.isArray(e) && (9 === e.length || 6 === e.length), "invalid field count for legacy transaction", "data", t);
                const n = {
                    type: 0,
                    nonce: wa(e[0], "nonce"),
                    gasPrice: Aa(e[1], "gasPrice"),
                    gasLimit: Aa(e[2], "gasLimit"),
                    to: ma(e[3]),
                    value: Aa(e[4], "value"),
                    data: Mn(e[5]),
                    chainId: ca
                };
                if (6 === e.length) return n;
                const r = Aa(e[6], "v"),
                    s = Aa(e[7], "r"),
                    i = Aa(e[8], "s");
                if (s === ca && i === ca) n.chainId = r;
                else {
                    let t = (r - fa) / la;
                    t < ca && (t = ca), n.chainId = t, Pn(t !== ca || r === ua || r === ha, "non-canonical legacy v", "v", e[6]), n.signature = ys.from({
                        r: Ln(e[7], 32),
                        s: Ln(e[8], 32),
                        v: r
                    })
                }
                return n
            }(n));
            switch (n[0]) {
                case 1:
                    return t.from(function(t) {
                        const e = Nr(On(t).slice(1));
                        Pn(Array.isArray(e) && (8 === e.length || 11 === e.length), "invalid field count for transaction type: 1", "data", Mn(t));
                        const n = {
                            type: 1,
                            chainId: Aa(e[0], "chainId"),
                            nonce: wa(e[1], "nonce"),
                            gasPrice: Aa(e[2], "gasPrice"),
                            gasLimit: Aa(e[3], "gasLimit"),
                            to: ma(e[4]),
                            value: Aa(e[5], "value"),
                            data: Mn(e[6]),
                            accessList: ya(e[7], "accessList")
                        };
                        return 8 === e.length || ka(n, e.slice(8)), n
                    }(n));
                case 2:
                    return t.from(function(t) {
                        const e = Nr(On(t).slice(1));
                        Pn(Array.isArray(e) && (9 === e.length || 12 === e.length), "invalid field count for transaction type: 2", "data", Mn(t));
                        const n = {
                            type: 2,
                            chainId: Aa(e[0], "chainId"),
                            nonce: wa(e[1], "nonce"),
                            maxPriorityFeePerGas: Aa(e[2], "maxPriorityFeePerGas"),
                            maxFeePerGas: Aa(e[3], "maxFeePerGas"),
                            gasPrice: null,
                            gasLimit: Aa(e[4], "gasLimit"),
                            to: ma(e[5]),
                            value: Aa(e[6], "value"),
                            data: Mn(e[7]),
                            accessList: ya(e[8], "accessList")
                        };
                        return 9 === e.length || ka(n, e.slice(9)), n
                    }(n));
                case 3:
                    return t.from(function(t) {
                        let e = Nr(On(t).slice(1)),
                            n = "3",
                            r = null;
                        if (4 === e.length && Array.isArray(e[0])) {
                            n = "3 (network format)";
                            const t = e[1],
                                s = e[2],
                                i = e[3];
                            Pn(Array.isArray(t), "invalid network format: blobs not an array", "fields[1]", t), Pn(Array.isArray(s), "invalid network format: commitments not an array", "fields[2]", s), Pn(Array.isArray(i), "invalid network format: proofs not an array", "fields[3]", i), Pn(t.length === s.length, "invalid network format: blobs/commitments length mismatch", "fields", e), Pn(t.length === i.length, "invalid network format: blobs/proofs length mismatch", "fields", e), r = [];
                            for (let n = 0; n < e[1].length; n++) r.push({
                                data: t[n],
                                commitment: s[n],
                                proof: i[n]
                            });
                            e = e[0]
                        }
                        Pn(Array.isArray(e) && (11 === e.length || 14 === e.length), `invalid field count for transaction type: ${n}`, "data", Mn(t));
                        const s = {
                            type: 3,
                            chainId: Aa(e[0], "chainId"),
                            nonce: wa(e[1], "nonce"),
                            maxPriorityFeePerGas: Aa(e[2], "maxPriorityFeePerGas"),
                            maxFeePerGas: Aa(e[3], "maxFeePerGas"),
                            gasPrice: null,
                            gasLimit: Aa(e[4], "gasLimit"),
                            to: ma(e[5]),
                            value: Aa(e[6], "value"),
                            data: Mn(e[7]),
                            accessList: ya(e[8], "accessList"),
                            maxFeePerBlobGas: Aa(e[9], "maxFeePerBlobGas"),
                            blobVersionedHashes: e[10]
                        };
                        r && (s.blobs = r), Pn(null != s.to, `invalid address for transaction type: ${n}`, "data", t), Pn(Array.isArray(s.blobVersionedHashes), "invalid blobVersionedHashes: must be an array", "data", t);
                        for (let i = 0; i < s.blobVersionedHashes.length; i++) Pn(Bn(s.blobVersionedHashes[i], 32), `invalid blobVersionedHash at index ${i}: must be length 32`, "data", t);
                        return 11 === e.length || ka(s, e.slice(11)), s
                    }(n))
            }
            kn(!1, "unsupported transaction type", "UNSUPPORTED_OPERATION", {
                operation: "from"
            })
        }
        const n = new t;
        return null != e.type && (n.type = e.type), null != e.to && (n.to = e.to), null != e.nonce && (n.nonce = e.nonce), null != e.gasLimit && (n.gasLimit = e.gasLimit), null != e.gasPrice && (n.gasPrice = e.gasPrice), null != e.maxPriorityFeePerGas && (n.maxPriorityFeePerGas = e.maxPriorityFeePerGas), null != e.maxFeePerGas && (n.maxFeePerGas = e.maxFeePerGas), null != e.maxFeePerBlobGas && (n.maxFeePerBlobGas = e.maxFeePerBlobGas), null != e.data && (n.data = e.data), null != e.value && (n.value = e.value), null != e.chainId && (n.chainId = e.chainId), null != e.signature && (n.signature = ys.from(e.signature)), null != e.accessList && (n.accessList = e.accessList), null != e.blobVersionedHashes && (n.blobVersionedHashes = e.blobVersionedHashes), null != e.kzg && (n.kzg = e.kzg), null != e.blobs && (n.blobs = e.blobs), null != e.hash && (Pn(n.isSigned(), "unsigned transaction cannot define '.hash'", "tx", e), Pn(n.hash === e.hash, "hash mismatch", "tx", e)), null != e.from && (Pn(n.isSigned(), "unsigned transaction cannot define '.from'", "tx", e), Pn(n.from.toLowerCase() === (e.from || "").toLowerCase(), "from mismatch", "tx", e)), n
    }
};
const xa = new Uint8Array(32);
xa.fill(0);
const Na = BigInt(-1),
    Ca = BigInt(0),
    Oa = BigInt(1),
    Ra = BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
const Ba = qn(Oa, 32),
    Ta = qn(Ca, 32),
    Ia = {
        name: "string",
        version: "string",
        chainId: "uint256",
        verifyingContract: "address",
        salt: "bytes32"
    },
    Ma = ["name", "version", "chainId", "verifyingContract", "salt"];

function Fa(t) {
    return function(e) {
        return Pn("string" == typeof e, `invalid domain value for ${JSON.stringify(t)}`, `domain.${t}`, e), e
    }
}
const Da = {
    name: Fa("name"),
    version: Fa("version"),
    chainId: function(t) {
        const e = Vn(t, "domain.chainId");
        return Pn(e >= 0, "invalid chain ID", "domain.chainId", t), Number.isSafeInteger(e) ? Number(e) : _n(e)
    },
    verifyingContract: function(t) {
        try {
            return Ps(t).toLowerCase()
        } catch (e) {}
        Pn(!1, 'invalid domain value "verifyingContract"', "domain.verifyingContract", t)
    },
    salt: function(t) {
        const e = On(t, "domain.salt");
        return Pn(32 === e.length, 'invalid domain value "salt"', "domain.salt", t), Mn(e)
    }
};

function Sa(t) {
    {
        const e = t.match(/^(u?)int(\d+)$/);
        if (e) {
            const n = "" === e[1],
                r = parseInt(e[2]);
            Pn(r % 8 == 0 && 0 !== r && r <= 256 && e[2] === String(r), "invalid numeric width", "type", t);
            const s = Jn(Ra, n ? r - 1 : r),
                i = n ? (s + Oa) * Na : Ca;
            return function(e) {
                const r = Vn(e, "value");
                return Pn(r >= i && r <= s, `value out-of-bounds for ${t}`, "value", r), qn(n ? Wn(r, 256) : r, 32)
            }
        }
    } {
        const e = t.match(/^bytes(\d+)$/);
        if (e) {
            const n = parseInt(e[1]);
            return Pn(0 !== n && n <= 32 && e[1] === String(n), "invalid bytes width", "type", t),
                function(e) {
                    return Pn(On(e).length === n, `invalid length for ${t}`, "value", e),
                        function(t) {
                            const e = On(t),
                                n = e.length % 32;
                            return n ? Fn([e, xa.slice(n)]) : Mn(e)
                        }(e)
                }
        }
    }
    switch (t) {
        case "address":
            return function(t) {
                return Ln(Ps(t), 32)
            };
        case "bool":
            return function(t) {
                return t ? Ba : Ta
            };
        case "bytes":
            return function(t) {
                return es(t)
            };
        case "string":
            return function(t) {
                return qs(t)
            }
    }
    return null
}

function Ua(t, e) {
    return `${t}(${e.map((({name:t,type:e})=>e+" "+t)).join(",")})`
}

function La(t) {
    const e = t.match(/^([^\x5b]*)((\x5b\d*\x5d)*)(\x5b(\d*)\x5d)$/);
    return e ? {
        base: e[1],
        index: e[2] + e[4],
        array: {
            base: e[1],
            prefix: e[1] + e[2],
            count: e[5] ? parseInt(e[5]) : -1
        }
    } : {
        base: t
    }
}
lt = new WeakMap, ut = new WeakMap, ht = new WeakMap, ft = new WeakSet, pt = function(t) {
    {
        const e = Sa(t);
        if (e) return e
    }
    const e = La(t).array;
    if (e) {
        const t = e.prefix,
            n = this.getEncoder(t);
        return r => {
            Pn(-1 === e.count || e.count === r.length, `array length mismatch; expected length ${e.count}`, "value", r);
            let s = r.map(n);
            return sn(this, ut).has(t) && (s = s.map(es)), es(Fn(s))
        }
    }
    const n = this.types[t];
    if (n) {
        const e = qs(sn(this, ut).get(t));
        return t => {
            const r = n.map((({
                name: e,
                type: n
            }) => {
                const r = this.getEncoder(n)(t[e]);
                return sn(this, ut).has(n) ? es(r) : r
            }));
            return r.unshift(e), Fn(r)
        }
    }
    Pn(!1, `unknown type: ${t}`, "type", t)
};
let Ga = class t {
    constructor(t) {
        an(this, ft), nn(this, "primaryType"), an(this, lt), an(this, ut), an(this, ht), on(this, ut, new Map), on(this, ht, new Map);
        const e = new Map,
            n = new Map,
            r = new Map,
            s = {};
        Object.keys(t).forEach((i => {
            s[i] = t[i].map((({
                name: e,
                type: n
            }) => {
                let {
                    base: r,
                    index: s
                } = La(n);
                return "int" !== r || t.int || (r = "int256"), "uint" !== r || t.uint || (r = "uint256"), {
                    name: e,
                    type: r + (s || "")
                }
            })), e.set(i, new Set), n.set(i, []), r.set(i, new Set)
        })), on(this, lt, JSON.stringify(s));
        for (const a in s) {
            const r = new Set;
            for (const i of s[a]) {
                Pn(!r.has(i.name), `duplicate variable name ${JSON.stringify(i.name)} in ${JSON.stringify(a)}`, "types", t), r.add(i.name);
                const s = La(i.type).base;
                Pn(s !== a, `circular type reference to ${JSON.stringify(s)}`, "types", t);
                Sa(s) || (Pn(n.has(s), `unknown type ${JSON.stringify(s)}`, "types", t), n.get(s).push(a), e.get(a).add(s))
            }
        }
        const i = Array.from(n.keys()).filter((t => 0 === n.get(t).length));
        Pn(0 !== i.length, "missing primary type", "types", t), Pn(1 === i.length, `ambiguous primary types or unused types: ${i.map((t=>JSON.stringify(t))).join(", ")}`, "types", t), wn(this, {
                primaryType: i[0]
            }),
            function s(i, a) {
                Pn(!a.has(i), `circular type reference to ${JSON.stringify(i)}`, "types", t), a.add(i);
                for (const t of e.get(i))
                    if (n.has(t)) {
                        s(t, a);
                        for (const e of a) r.get(e).add(t)
                    }
                a.delete(i)
            }(this.primaryType, new Set);
        for (const [a, o] of r) {
            const t = Array.from(o);
            t.sort(), sn(this, ut).set(a, Ua(a, s[a]) + t.map((t => Ua(t, s[t]))).join(""))
        }
    }
    get types() {
        return JSON.parse(sn(this, lt))
    }
    getEncoder(t) {
        let e = sn(this, ht).get(t);
        return e || (e = cn(this, ft, pt).call(this, t), sn(this, ht).set(t, e)), e
    }
    encodeType(t) {
        const e = sn(this, ut).get(t);
        return Pn(e, `unknown type: ${JSON.stringify(t)}`, "name", t), e
    }
    encodeData(t, e) {
        return this.getEncoder(t)(e)
    }
    hashStruct(t, e) {
        return es(this.encodeData(t, e))
    }
    encode(t) {
        return this.encodeData(this.primaryType, t)
    }
    hash(t) {
        return this.hashStruct(this.primaryType, t)
    }
    _visit(t, e, n) {
        if (Sa(t)) return n(t, e);
        const r = La(t).array;
        if (r) return Pn(-1 === r.count || r.count === e.length, `array length mismatch; expected length ${r.count}`, "value", e), e.map((t => this._visit(r.prefix, t, n)));
        const s = this.types[t];
        if (s) return s.reduce(((t, {
            name: r,
            type: s
        }) => (t[r] = this._visit(s, e[r], n), t)), {});
        Pn(!1, `unknown type: ${t}`, "type", t)
    }
    visit(t, e) {
        return this._visit(this.primaryType, t, e)
    }
    static from(e) {
        return new t(e)
    }
    static getPrimaryType(e) {
        return t.from(e).primaryType
    }
    static hashStruct(e, n, r) {
        return t.from(n).hashStruct(e, r)
    }
    static hashDomain(e) {
        const n = [];
        for (const t in e) {
            if (null == e[t]) continue;
            const r = Ia[t];
            Pn(r, `invalid typed-data domain key: ${JSON.stringify(t)}`, "domain", e), n.push({
                name: t,
                type: r
            })
        }
        return n.sort(((t, e) => Ma.indexOf(t.name) - Ma.indexOf(e.name))), t.hashStruct("EIP712Domain", {
            EIP712Domain: n
        }, e)
    }
    static encode(e, n, r) {
        return Fn(["0x1901", t.hashDomain(e), t.from(n).hash(r)])
    }
    static hash(e, n, r) {
        return es(t.encode(e, n, r))
    }
    static async resolveNames(e, n, r, s) {
        e = Object.assign({}, e);
        for (const t in e) null == e[t] && delete e[t];
        const i = {};
        e.verifyingContract && !Bn(e.verifyingContract, 20) && (i[e.verifyingContract] = "0x");
        const a = t.from(n);
        a.visit(r, ((t, e) => ("address" !== t || Bn(e, 20) || (i[e] = "0x"), e)));
        for (const t in i) i[t] = await s(t);
        return e.verifyingContract && i[e.verifyingContract] && (e.verifyingContract = i[e.verifyingContract]), {
            domain: e,
            value: r = a.visit(r, ((t, e) => "address" === t && i[e] ? i[e] : e))
        }
    }
    static getPayload(e, n, r) {
        t.hashDomain(e);
        const s = {},
            i = [];
        Ma.forEach((t => {
            const n = e[t];
            null != n && (s[t] = Da[t](n), i.push({
                name: t,
                type: Ia[t]
            }))
        }));
        const a = t.from(n);
        n = a.types;
        const o = Object.assign({}, n);
        return Pn(null == o.EIP712Domain, "types must not contain EIP712Domain type", "types.EIP712Domain", n), o.EIP712Domain = i, a.encode(r), {
            types: o,
            domain: s,
            primaryType: a.primaryType,
            message: a.visit(r, ((t, e) => {
                if (t.match(/^bytes(\d*)/)) return Mn(On(e));
                if (t.match(/^u?int/)) return Vn(e).toString();
                switch (t) {
                    case "address":
                        return e.toLowerCase();
                    case "bool":
                        return !!e;
                    case "string":
                        return Pn("string" == typeof e, "invalid string", "value", e), e
                }
                Pn(!1, "unsupported type", "type", t)
            }))
        }
    }
};

function Qa(t) {
    const e = new Set;
    return t.forEach((t => e.add(t))), Object.freeze(e)
}
const Ha = Qa("external public payable override".split(" ")),
    ja = "constant external internal payable private public pure view override",
    Wa = Qa(ja.split(" ")),
    Ja = "constructor error event fallback function receive struct",
    Va = Qa(Ja.split(" ")),
    za = "calldata memory storage payable indexed",
    Ka = Qa(za.split(" ")),
    Ya = Qa([Ja, za, "tuple returns", ja].join(" ").split(" ")),
    Za = {
        "(": "OPEN_PAREN",
        ")": "CLOSE_PAREN",
        "[": "OPEN_BRACKET",
        "]": "CLOSE_BRACKET",
        ",": "COMMA",
        "@": "AT"
    },
    qa = new RegExp("^(\\s*)"),
    Xa = new RegExp("^([0-9]+)"),
    _a = new RegExp("^([a-zA-Z$_][a-zA-Z0-9$_]*)"),
    $a = new RegExp("^([a-zA-Z$_][a-zA-Z0-9$_]*)$"),
    to = new RegExp("^(address|bool|bytes([0-9]*)|string|u?int([0-9]*))$"),
    eo = class t {
        constructor(t) {
            an(this, mt), an(this, dt), an(this, gt), on(this, dt, 0), on(this, gt, t.slice())
        }
        get offset() {
            return sn(this, dt)
        }
        get length() {
            return sn(this, gt).length - sn(this, dt)
        }
        clone() {
            return new t(sn(this, gt))
        }
        reset() {
            on(this, dt, 0)
        }
        popKeyword(t) {
            const e = this.peek();
            if ("KEYWORD" !== e.type || !t.has(e.text)) throw new Error(`expected keyword ${e.text}`);
            return this.pop().text
        }
        popType(t) {
            if (this.peek().type !== t) {
                const e = this.peek();
                throw new Error(`expected ${t}; got ${e.type} ${JSON.stringify(e.text)}`)
            }
            return this.pop().text
        }
        popParen() {
            const t = this.peek();
            if ("OPEN_PAREN" !== t.type) throw new Error("bad start");
            const e = cn(this, mt, yt).call(this, sn(this, dt) + 1, t.match + 1);
            return on(this, dt, t.match + 1), e
        }
        popParams() {
            const t = this.peek();
            if ("OPEN_PAREN" !== t.type) throw new Error("bad start");
            const e = [];
            for (; sn(this, dt) < t.match - 1;) {
                const t = this.peek().linkNext;
                e.push(cn(this, mt, yt).call(this, sn(this, dt) + 1, t)), on(this, dt, t)
            }
            return on(this, dt, t.match + 1), e
        }
        peek() {
            if (sn(this, dt) >= sn(this, gt).length) throw new Error("out-of-bounds");
            return sn(this, gt)[sn(this, dt)]
        }
        peekKeyword(t) {
            const e = this.peekType("KEYWORD");
            return null != e && t.has(e) ? e : null
        }
        peekType(t) {
            if (0 === this.length) return null;
            const e = this.peek();
            return e.type === t ? e.text : null
        }
        pop() {
            const t = this.peek();
            return ln(this, dt)._++, t
        }
        toString() {
            const t = [];
            for (let e = sn(this, dt); e < sn(this, gt).length; e++) {
                const n = sn(this, gt)[e];
                t.push(`${n.type}:${n.text}`)
            }
            return `<TokenString ${t.join(" ")}>`
        }
    };
dt = new WeakMap, gt = new WeakMap, mt = new WeakSet, yt = function(t = 0, e = 0) {
    return new eo(sn(this, gt).slice(t, e).map((e => Object.freeze(Object.assign({}, e, {
        match: e.match - t,
        linkBack: e.linkBack - t,
        linkNext: e.linkNext - t
    })))))
};
let no = eo;

function ro(t) {
    const e = [],
        n = e => {
            const n = i < t.length ? JSON.stringify(t[i]) : "$EOI";
            throw new Error(`invalid token ${n} at ${i}: ${e}`)
        };
    let r = [],
        s = [],
        i = 0;
    for (; i < t.length;) {
        let a = t.substring(i),
            o = a.match(qa);
        o && (i += o[1].length, a = t.substring(i));
        const c = {
            depth: r.length,
            linkBack: -1,
            linkNext: -1,
            match: -1,
            type: "",
            text: "",
            offset: i,
            value: -1
        };
        e.push(c);
        let l = Za[a[0]] || "";
        if (l) {
            if (c.type = l, c.text = a[0], i++, "OPEN_PAREN" === l) r.push(e.length - 1), s.push(e.length - 1);
            else if ("CLOSE_PAREN" == l) 0 === r.length && n("no matching open bracket"), c.match = r.pop(), e[c.match].match = e.length - 1, c.depth--, c.linkBack = s.pop(), e[c.linkBack].linkNext = e.length - 1;
            else if ("COMMA" === l) c.linkBack = s.pop(), e[c.linkBack].linkNext = e.length - 1, s.push(e.length - 1);
            else if ("OPEN_BRACKET" === l) c.type = "BRACKET";
            else if ("CLOSE_BRACKET" === l) {
                let t = e.pop().text;
                if (e.length > 0 && "NUMBER" === e[e.length - 1].type) {
                    const n = e.pop().text;
                    t = n + t, e[e.length - 1].value = Zn(n)
                }
                if (0 === e.length || "BRACKET" !== e[e.length - 1].type) throw new Error("missing opening bracket");
                e[e.length - 1].text += t
            }
        } else if (o = a.match(_a), o) {
            if (c.text = o[1], i += c.text.length, Ya.has(c.text)) {
                c.type = "KEYWORD";
                continue
            }
            if (c.text.match(to)) {
                c.type = "TYPE";
                continue
            }
            c.type = "ID"
        } else {
            if (o = a.match(Xa), !o) throw new Error(`unexpected token ${JSON.stringify(a[0])} at position ${i}`);
            c.text = o[1], c.type = "NUMBER", i += c.text.length
        }
    }
    return new no(e.map((t => Object.freeze(t))))
}

function so(t, e) {
    let n = [];
    for (const r in e.keys()) t.has(r) && n.push(r);
    if (n.length > 1) throw new Error(`conflicting types: ${n.join(", ")}`)
}

function io(t, e) {
    if (e.peekKeyword(Va)) {
        const n = e.pop().text;
        if (n !== t) throw new Error(`expected ${t}, got ${n}`)
    }
    return e.popType("ID")
}

function ao(t, e) {
    const n = new Set;
    for (;;) {
        const r = t.peekType("KEYWORD");
        if (null == r || e && !e.has(r)) break;
        if (t.pop(), n.has(r)) throw new Error(`duplicate keywords: ${JSON.stringify(r)}`);
        n.add(r)
    }
    return Object.freeze(n)
}

function oo(t) {
    let e = ao(t, Wa);
    return so(e, Qa("constant payable nonpayable".split(" "))), so(e, Qa("pure view payable nonpayable".split(" "))), e.has("view") ? "view" : e.has("pure") ? "pure" : e.has("payable") ? "payable" : e.has("nonpayable") ? "nonpayable" : e.has("constant") ? "view" : "nonpayable"
}

function co(t, e) {
    return t.popParams().map((t => ko.from(t, e)))
}

function lo(t) {
    if (t.peekType("AT")) {
        if (t.pop(), t.peekType("NUMBER")) return Vn(t.pop().text);
        throw new Error("invalid gas")
    }
    return null
}

function uo(t) {
    if (t.length) throw new Error(`unexpected tokens at offset ${t.offset}: ${t.toString()}`)
}
const ho = new RegExp(/^(.*)\[([0-9]*)\]$/);

function fo(t) {
    const e = t.match(to);
    if (Pn(e, "invalid type", "type", t), "uint" === t) return "uint256";
    if ("int" === t) return "int256";
    if (e[2]) {
        const n = parseInt(e[2]);
        Pn(0 !== n && n <= 32, "invalid bytes length", "type", t)
    } else if (e[3]) {
        const n = parseInt(e[3]);
        Pn(0 !== n && n <= 256 && n % 8 == 0, "invalid numeric width", "type", t)
    }
    return t
}
const po = {},
    go = Symbol.for("_ethers_internal"),
    mo = "_ParamTypeInternal",
    yo = "_ErrorInternal",
    wo = "_EventInternal",
    Ao = "_ConstructorInternal",
    bo = "_FallbackInternal",
    vo = "_FunctionInternal",
    Eo = "_StructInternal";
wt = new WeakSet, At = function(t, e, n, r) {
    if (this.isArray()) {
        if (!Array.isArray(e)) throw new Error("invalid array value");
        if (-1 !== this.arrayLength && e.length !== this.arrayLength) throw new Error("array is wrong length");
        const s = this.arrayChildren,
            i = e.slice();
        return i.forEach(((e, r) => {
            var a;
            cn(a = s, wt, At).call(a, t, e, n, (t => {
                i[r] = t
            }))
        })), void r(i)
    }
    if (this.isTuple()) {
        const s = this.components;
        let i;
        if (Array.isArray(e)) i = e.slice();
        else {
            if (null == e || "object" != typeof e) throw new Error("invalid tuple value");
            i = s.map((t => {
                if (!t.name) throw new Error("cannot use object value with unnamed components");
                if (!(t.name in e)) throw new Error(`missing value for component ${t.name}`);
                return e[t.name]
            }))
        }
        if (i.length !== this.components.length) throw new Error("array is wrong length");
        return i.forEach(((e, r) => {
            var a;
            cn(a = s[r], wt, At).call(a, t, e, n, (t => {
                i[r] = t
            }))
        })), void r(i)
    }
    const s = n(this.type, e);
    s.then ? t.push(async function() {
        r(await s)
    }()) : r(s)
};
let ko = class t {
    constructor(t, e, n, r, s, i, a, o) {
        if (an(this, wt), nn(this, "name"), nn(this, "type"), nn(this, "baseType"), nn(this, "indexed"), nn(this, "components"), nn(this, "arrayLength"), nn(this, "arrayChildren"), Nn(t, po, "ParamType"), Object.defineProperty(this, go, {
                value: mo
            }), i && (i = Object.freeze(i.slice())), "array" === r) {
            if (null == a || null == o) throw new Error("")
        } else if (null != a || null != o) throw new Error("");
        if ("tuple" === r) {
            if (null == i) throw new Error("")
        } else if (null != i) throw new Error("");
        wn(this, {
            name: e,
            type: n,
            baseType: r,
            indexed: s,
            components: i,
            arrayLength: a,
            arrayChildren: o
        })
    }
    format(t) {
        if (null == t && (t = "sighash"), "json" === t) {
            const e = this.name || "";
            if (this.isArray()) {
                const t = JSON.parse(this.arrayChildren.format("json"));
                return t.name = e, t.type += `[${this.arrayLength<0?"":String(this.arrayLength)}]`, JSON.stringify(t)
            }
            const n = {
                type: "tuple" === this.baseType ? "tuple" : this.type,
                name: e
            };
            return "boolean" == typeof this.indexed && (n.indexed = this.indexed), this.isTuple() && (n.components = this.components.map((e => JSON.parse(e.format(t))))), JSON.stringify(n)
        }
        let e = "";
        return this.isArray() ? (e += this.arrayChildren.format(t), e += `[${this.arrayLength<0?"":String(this.arrayLength)}]`) : this.isTuple() ? e += "(" + this.components.map((e => e.format(t))).join("full" === t ? ", " : ",") + ")" : e += this.type, "sighash" !== t && (!0 === this.indexed && (e += " indexed"), "full" === t && this.name && (e += " " + this.name)), e
    }
    isArray() {
        return "array" === this.baseType
    }
    isTuple() {
        return "tuple" === this.baseType
    }
    isIndexable() {
        return null != this.indexed
    }
    walk(t, e) {
        if (this.isArray()) {
            if (!Array.isArray(t)) throw new Error("invalid array value");
            if (-1 !== this.arrayLength && t.length !== this.arrayLength) throw new Error("array is wrong length");
            const n = this;
            return t.map((t => n.arrayChildren.walk(t, e)))
        }
        if (this.isTuple()) {
            if (!Array.isArray(t)) throw new Error("invalid tuple value");
            if (t.length !== this.components.length) throw new Error("array is wrong length");
            const n = this;
            return t.map(((t, r) => n.components[r].walk(t, e)))
        }
        return e(this.type, t)
    }
    async walkAsync(t, e) {
        const n = [],
            r = [t];
        return cn(this, wt, At).call(this, n, t, e, (t => {
            r[0] = t
        })), n.length && await Promise.all(n), r[0]
    }
    static from(e, n) {
        if (t.isParamType(e)) return e;
        if ("string" == typeof e) try {
            return t.from(ro(e), n)
        } catch (o) {
            Pn(!1, "invalid param type", "obj", e)
        } else if (e instanceof no) {
            let r = "",
                s = "",
                i = null;
            ao(e, Qa(["tuple"])).has("tuple") || e.peekType("OPEN_PAREN") ? (s = "tuple", i = e.popParams().map((e => t.from(e))), r = `tuple(${i.map((t=>t.format())).join(",")})`) : (r = fo(e.popType("TYPE")), s = r);
            let a = null,
                o = null;
            for (; e.length && e.peekType("BRACKET");) {
                const n = e.pop();
                a = new t(po, "", r, s, null, i, o, a), o = n.value, r += n.text, s = "array", i = null
            }
            let c = null;
            if (ao(e, Ka).has("indexed")) {
                if (!n) throw new Error("");
                c = !0
            }
            const l = e.peekType("ID") ? e.pop().text : "";
            if (e.length) throw new Error("leftover tokens");
            return new t(po, l, r, s, c, i, o, a)
        }
        const r = e.name;
        Pn(!r || "string" == typeof r && r.match($a), "invalid name", "obj.name", r);
        let s = e.indexed;
        null != s && (Pn(n, "parameter cannot be indexed", "obj.indexed", e.indexed), s = !!s);
        let i = e.type,
            a = i.match(ho);
        if (a) {
            const n = parseInt(a[2] || "-1"),
                o = t.from({
                    type: a[1],
                    components: e.components
                });
            return new t(po, r || "", i, "array", s, null, n, o)
        }
        if ("tuple" === i || i.startsWith("tuple(") || i.startsWith("(")) {
            const n = null != e.components ? e.components.map((e => t.from(e))) : null;
            return new t(po, r || "", i, "tuple", s, n, null, null)
        }
        return i = fo(e.type), new t(po, r || "", i, i, s, null, null, null)
    }
    static isParamType(t) {
        return t && t[go] === mo
    }
};
class Po {
    constructor(t, e, n) {
        nn(this, "type"), nn(this, "inputs"), Nn(t, po, "Fragment"), wn(this, {
            type: e,
            inputs: n = Object.freeze(n.slice())
        })
    }
    static from(t) {
        if ("string" == typeof t) {
            try {
                Po.from(JSON.parse(t))
            } catch (e) {}
            return Po.from(ro(t))
        }
        if (t instanceof no) {
            switch (t.peekKeyword(Va)) {
                case "constructor":
                    return Ro.from(t);
                case "error":
                    return Co.from(t);
                case "event":
                    return Oo.from(t);
                case "fallback":
                case "receive":
                    return Bo.from(t);
                case "function":
                    return To.from(t);
                case "struct":
                    return Io.from(t)
            }
        } else if ("object" == typeof t) {
            switch (t.type) {
                case "constructor":
                    return Ro.from(t);
                case "error":
                    return Co.from(t);
                case "event":
                    return Oo.from(t);
                case "fallback":
                case "receive":
                    return Bo.from(t);
                case "function":
                    return To.from(t);
                case "struct":
                    return Io.from(t)
            }
            kn(!1, `unsupported type: ${t.type}`, "UNSUPPORTED_OPERATION", {
                operation: "Fragment.from"
            })
        }
        Pn(!1, "unsupported frgament object", "obj", t)
    }
    static isConstructor(t) {
        return Ro.isFragment(t)
    }
    static isError(t) {
        return Co.isFragment(t)
    }
    static isEvent(t) {
        return Oo.isFragment(t)
    }
    static isFunction(t) {
        return To.isFragment(t)
    }
    static isStruct(t) {
        return Io.isFragment(t)
    }
}
class xo extends Po {
    constructor(t, e, n, r) {
        super(t, e, r), nn(this, "name"), Pn("string" == typeof n && n.match($a), "invalid identifier", "name", n), r = Object.freeze(r.slice()), wn(this, {
            name: n
        })
    }
}

function No(t, e) {
    return "(" + e.map((e => e.format(t))).join("full" === t ? ", " : ",") + ")"
}
class Co extends xo {
    constructor(t, e, n) {
        super(t, "error", e, n), Object.defineProperty(this, go, {
            value: yo
        })
    }
    get selector() {
        return qs(this.format("sighash")).substring(0, 10)
    }
    format(t) {
        if (null == t && (t = "sighash"), "json" === t) return JSON.stringify({
            type: "error",
            name: this.name,
            inputs: this.inputs.map((e => JSON.parse(e.format(t))))
        });
        const e = [];
        return "sighash" !== t && e.push("error"), e.push(this.name + No(t, this.inputs)), e.join(" ")
    }
    static from(t) {
        if (Co.isFragment(t)) return t;
        if ("string" == typeof t) return Co.from(ro(t));
        if (t instanceof no) {
            const e = io("error", t),
                n = co(t);
            return uo(t), new Co(po, e, n)
        }
        return new Co(po, t.name, t.inputs ? t.inputs.map(ko.from) : [])
    }
    static isFragment(t) {
        return t && t[go] === yo
    }
}
class Oo extends xo {
    constructor(t, e, n, r) {
        super(t, "event", e, n), nn(this, "anonymous"), Object.defineProperty(this, go, {
            value: wo
        }), wn(this, {
            anonymous: r
        })
    }
    get topicHash() {
        return qs(this.format("sighash"))
    }
    format(t) {
        if (null == t && (t = "sighash"), "json" === t) return JSON.stringify({
            type: "event",
            anonymous: this.anonymous,
            name: this.name,
            inputs: this.inputs.map((e => JSON.parse(e.format(t))))
        });
        const e = [];
        return "sighash" !== t && e.push("event"), e.push(this.name + No(t, this.inputs)), "sighash" !== t && this.anonymous && e.push("anonymous"), e.join(" ")
    }
    static getTopicHash(t, e) {
        e = (e || []).map((t => ko.from(t)));
        return new Oo(po, t, e, !1).topicHash
    }
    static from(t) {
        if (Oo.isFragment(t)) return t;
        if ("string" == typeof t) try {
            return Oo.from(ro(t))
        } catch (e) {
            Pn(!1, "invalid event fragment", "obj", t)
        } else if (t instanceof no) {
            const e = io("event", t),
                n = co(t, !0),
                r = !!ao(t, Qa(["anonymous"])).has("anonymous");
            return uo(t), new Oo(po, e, n, r)
        }
        return new Oo(po, t.name, t.inputs ? t.inputs.map((t => ko.from(t, !0))) : [], !!t.anonymous)
    }
    static isFragment(t) {
        return t && t[go] === wo
    }
}
class Ro extends Po {
    constructor(t, e, n, r, s) {
        super(t, e, n), nn(this, "payable"), nn(this, "gas"), Object.defineProperty(this, go, {
            value: Ao
        }), wn(this, {
            payable: r,
            gas: s
        })
    }
    format(t) {
        if (kn(null != t && "sighash" !== t, "cannot format a constructor for sighash", "UNSUPPORTED_OPERATION", {
                operation: "format(sighash)"
            }), "json" === t) return JSON.stringify({
            type: "constructor",
            stateMutability: this.payable ? "payable" : "undefined",
            payable: this.payable,
            gas: null != this.gas ? this.gas : void 0,
            inputs: this.inputs.map((e => JSON.parse(e.format(t))))
        });
        const e = [`constructor${No(t,this.inputs)}`];
        return this.payable && e.push("payable"), null != this.gas && e.push(`@${this.gas.toString()}`), e.join(" ")
    }
    static from(t) {
        if (Ro.isFragment(t)) return t;
        if ("string" == typeof t) try {
            return Ro.from(ro(t))
        } catch (e) {
            Pn(!1, "invalid constuctor fragment", "obj", t)
        } else if (t instanceof no) {
            ao(t, Qa(["constructor"]));
            const e = co(t),
                n = !!ao(t, Ha).has("payable"),
                r = lo(t);
            return uo(t), new Ro(po, "constructor", e, n, r)
        }
        return new Ro(po, "constructor", t.inputs ? t.inputs.map(ko.from) : [], !!t.payable, null != t.gas ? t.gas : null)
    }
    static isFragment(t) {
        return t && t[go] === Ao
    }
}
class Bo extends Po {
    constructor(t, e, n) {
        super(t, "fallback", e), nn(this, "payable"), Object.defineProperty(this, go, {
            value: bo
        }), wn(this, {
            payable: n
        })
    }
    format(t) {
        const e = 0 === this.inputs.length ? "receive" : "fallback";
        if ("json" === t) {
            const t = this.payable ? "payable" : "nonpayable";
            return JSON.stringify({
                type: e,
                stateMutability: t
            })
        }
        return `${e}()${this.payable?" payable":""}`
    }
    static from(t) {
        if (Bo.isFragment(t)) return t;
        if ("string" == typeof t) try {
            return Bo.from(ro(t))
        } catch (e) {
            Pn(!1, "invalid fallback fragment", "obj", t)
        } else if (t instanceof no) {
            const e = t.toString();
            Pn(t.peekKeyword(Qa(["fallback", "receive"])), "type must be fallback or receive", "obj", e);
            if ("receive" === t.popKeyword(Qa(["fallback", "receive"]))) {
                const e = co(t);
                return Pn(0 === e.length, "receive cannot have arguments", "obj.inputs", e), ao(t, Qa(["payable"])), uo(t), new Bo(po, [], !0)
            }
            let n = co(t);
            n.length ? Pn(1 === n.length && "bytes" === n[0].type, "invalid fallback inputs", "obj.inputs", n.map((t => t.format("minimal"))).join(", ")) : n = [ko.from("bytes")];
            const r = oo(t);
            if (Pn("nonpayable" === r || "payable" === r, "fallback cannot be constants", "obj.stateMutability", r), ao(t, Qa(["returns"])).has("returns")) {
                const e = co(t);
                Pn(1 === e.length && "bytes" === e[0].type, "invalid fallback outputs", "obj.outputs", e.map((t => t.format("minimal"))).join(", "))
            }
            return uo(t), new Bo(po, n, "payable" === r)
        }
        if ("receive" === t.type) return new Bo(po, [], !0);
        if ("fallback" === t.type) {
            const e = [ko.from("bytes")],
                n = "payable" === t.stateMutability;
            return new Bo(po, e, n)
        }
        Pn(!1, "invalid fallback description", "obj", t)
    }
    static isFragment(t) {
        return t && t[go] === bo
    }
}
class To extends xo {
    constructor(t, e, n, r, s, i) {
        super(t, "function", e, r), nn(this, "constant"), nn(this, "outputs"), nn(this, "stateMutability"), nn(this, "payable"), nn(this, "gas"), Object.defineProperty(this, go, {
            value: vo
        });
        wn(this, {
            constant: "view" === n || "pure" === n,
            gas: i,
            outputs: s = Object.freeze(s.slice()),
            payable: "payable" === n,
            stateMutability: n
        })
    }
    get selector() {
        return qs(this.format("sighash")).substring(0, 10)
    }
    format(t) {
        if (null == t && (t = "sighash"), "json" === t) return JSON.stringify({
            type: "function",
            name: this.name,
            constant: this.constant,
            stateMutability: "nonpayable" !== this.stateMutability ? this.stateMutability : void 0,
            payable: this.payable,
            gas: null != this.gas ? this.gas : void 0,
            inputs: this.inputs.map((e => JSON.parse(e.format(t)))),
            outputs: this.outputs.map((e => JSON.parse(e.format(t))))
        });
        const e = [];
        return "sighash" !== t && e.push("function"), e.push(this.name + No(t, this.inputs)), "sighash" !== t && ("nonpayable" !== this.stateMutability && e.push(this.stateMutability), this.outputs && this.outputs.length && (e.push("returns"), e.push(No(t, this.outputs))), null != this.gas && e.push(`@${this.gas.toString()}`)), e.join(" ")
    }
    static getSelector(t, e) {
        e = (e || []).map((t => ko.from(t)));
        return new To(po, t, "view", e, [], null).selector
    }
    static from(t) {
        if (To.isFragment(t)) return t;
        if ("string" == typeof t) try {
            return To.from(ro(t))
        } catch (n) {
            Pn(!1, "invalid function fragment", "obj", t)
        } else if (t instanceof no) {
            const e = io("function", t),
                n = co(t),
                r = oo(t);
            let s = [];
            ao(t, Qa(["returns"])).has("returns") && (s = co(t));
            const i = lo(t);
            return uo(t), new To(po, e, r, n, s, i)
        }
        let e = t.stateMutability;
        return null == e && (e = "payable", "boolean" == typeof t.constant ? (e = "view", t.constant || (e = "payable", "boolean" != typeof t.payable || t.payable || (e = "nonpayable"))) : "boolean" != typeof t.payable || t.payable || (e = "nonpayable")), new To(po, t.name, e, t.inputs ? t.inputs.map(ko.from) : [], t.outputs ? t.outputs.map(ko.from) : [], null != t.gas ? t.gas : null)
    }
    static isFragment(t) {
        return t && t[go] === vo
    }
}
class Io extends xo {
    constructor(t, e, n) {
        super(t, "struct", e, n), Object.defineProperty(this, go, {
            value: Eo
        })
    }
    format() {
        throw new Error("@TODO")
    }
    static from(t) {
        if ("string" == typeof t) try {
            return Io.from(ro(t))
        } catch (e) {
            Pn(!1, "invalid struct fragment", "obj", t)
        } else if (t instanceof no) {
            const e = io("struct", t),
                n = co(t);
            return uo(t), new Io(po, e, n)
        }
        return new Io(po, t.name, t.inputs ? t.inputs.map(ko.from) : [])
    }
    static isFragment(t) {
        return t && t[go] === Eo
    }
}
const Mo = new Map;
Mo.set(0, "GENERIC_PANIC"), Mo.set(1, "ASSERT_FALSE"), Mo.set(17, "OVERFLOW"), Mo.set(18, "DIVIDE_BY_ZERO"), Mo.set(33, "ENUM_RANGE_ERROR"), Mo.set(34, "BAD_STORAGE_DATA"), Mo.set(49, "STACK_UNDERFLOW"), Mo.set(50, "ARRAY_RANGE_ERROR"), Mo.set(65, "OUT_OF_MEMORY"), Mo.set(81, "UNINITIALIZED_FUNCTION_CALL");
const Fo = new RegExp(/^bytes([0-9]*)$/),
    Do = new RegExp(/^(u?int)([0-9]*)$/);
let So = null,
    Uo = 1024;
bt = new WeakSet, vt = function(t) {
    if (t.isArray()) return new Us(cn(this, bt, vt).call(this, t.arrayChildren), t.arrayLength, t.name);
    if (t.isTuple()) return new Zs(t.components.map((t => cn(this, bt, vt).call(this, t))), t.name);
    switch (t.baseType) {
        case "address":
            return new Ms(t.name);
        case "bool":
            return new Ls(t.name);
        case "string":
            return new Ys(t.name);
        case "bytes":
            return new Qs(t.name);
        case "":
            return new Ws(t.name)
    }
    let e = t.type.match(Do);
    if (e) {
        let n = parseInt(e[2] || "256");
        return Pn(0 !== n && n <= 256 && n % 8 == 0, "invalid " + e[1] + " bit length", "param", t), new Ks(n / 8, "int" === e[1], t.name)
    }
    if (e = t.type.match(Fo), e) {
        let n = parseInt(e[1]);
        return Pn(0 !== n && n <= 32, "invalid bytes length", "param", t), new Hs(n, t.name)
    }
    Pn(!1, "invalid type", "type", t.type)
};
let Lo = class t {
    constructor() {
        an(this, bt)
    }
    getDefaultValue(t) {
        const e = t.map((t => cn(this, bt, vt).call(this, ko.from(t))));
        return new Zs(e, "_").defaultValue()
    }
    encode(t, e) {
        xn(e.length, t.length, "types/values length mismatch");
        const n = t.map((t => cn(this, bt, vt).call(this, ko.from(t)))),
            r = new Zs(n, "_"),
            s = new Wr;
        return r.encode(s, e), s.data
    }
    decode(t, e, n) {
        const r = t.map((t => cn(this, bt, vt).call(this, ko.from(t))));
        return new Zs(r, "_").decode(new Jr(e, n, Uo))
    }
    static _setDefaultMaxInflation(t) {
        Pn("number" == typeof t && Number.isInteger(t), "invalid defaultMaxInflation factor", "value", t), Uo = t
    }
    static defaultAbiCoder() {
        return null == So && (So = new t), So
    }
    static getBuiltinCallException(e, n, r) {
        return function(t, e, n, r) {
            let s = "missing revert data",
                i = null,
                a = null;
            if (n) {
                s = "execution reverted";
                const t = On(n);
                if (n = Mn(n), 0 === t.length) s += " (no data present; likely require(false) occurred", i = "require(false)";
                else if (t.length % 32 != 4) s += " (could not decode reason; invalid data length)";
                else if ("0x08c379a0" === Mn(t.slice(0, 4))) try {
                    i = r.decode(["string"], t.slice(4))[0], a = {
                        signature: "Error(string)",
                        name: "Error",
                        args: [i]
                    }, s += `: ${JSON.stringify(i)}`
                } catch (c) {
                    s += " (could not decode reason; invalid string data)"
                } else if ("0x4e487b71" === Mn(t.slice(0, 4))) try {
                    const e = Number(r.decode(["uint256"], t.slice(4))[0]);
                    a = {
                        signature: "Panic(uint256)",
                        name: "Panic",
                        args: [e]
                    }, i = `Panic due to ${Mo.get(e)||"UNKNOWN"}(${e})`, s += `: ${i}`
                } catch (c) {
                    s += " (could not decode panic code)"
                } else s += " (unknown custom error)"
            }
            const o = {
                to: e.to ? Ps(e.to) : null,
                data: e.data || "0x"
            };
            return e.from && (o.from = Ps(e.from)), En(s, "CALL_EXCEPTION", {
                action: t,
                data: n,
                reason: i,
                transaction: o,
                invocation: null,
                revert: a
            })
        }(e, n, r, t.defaultAbiCoder())
    }
};
class Go {
    constructor(t, e, n) {
        nn(this, "fragment"), nn(this, "name"), nn(this, "signature"), nn(this, "topic"), nn(this, "args");
        const r = t.name,
            s = t.format();
        wn(this, {
            fragment: t,
            name: r,
            signature: s,
            topic: e,
            args: n
        })
    }
}
class Qo {
    constructor(t, e, n, r) {
        nn(this, "fragment"), nn(this, "name"), nn(this, "args"), nn(this, "signature"), nn(this, "selector"), nn(this, "value");
        const s = t.name,
            i = t.format();
        wn(this, {
            fragment: t,
            name: s,
            args: n,
            signature: i,
            selector: e,
            value: r
        })
    }
}
class Ho {
    constructor(t, e, n) {
        nn(this, "fragment"), nn(this, "name"), nn(this, "args"), nn(this, "signature"), nn(this, "selector");
        const r = t.name,
            s = t.format();
        wn(this, {
            fragment: t,
            name: r,
            args: n,
            signature: s,
            selector: e
        })
    }
}
class jo {
    constructor(t) {
        nn(this, "hash"), nn(this, "_isIndexed"), wn(this, {
            hash: t,
            _isIndexed: !0
        })
    }
    static isIndexed(t) {
        return !(!t || !t._isIndexed)
    }
}
const Wo = {
        0: "generic panic",
        1: "assert(false)",
        17: "arithmetic overflow",
        18: "division or modulo by zero",
        33: "enum overflow",
        34: "invalid encoded storage byte array accessed",
        49: "out-of-bounds array access; popping on an empty array",
        50: "out-of-bounds access of an array or bytesN",
        65: "out of memory",
        81: "uninitialized function"
    },
    Jo = {
        "0x08c379a0": {
            signature: "Error(string)",
            name: "Error",
            inputs: ["string"],
            reason: t => `reverted with reason string ${JSON.stringify(t)}`
        },
        "0x4e487b71": {
            signature: "Panic(uint256)",
            name: "Panic",
            inputs: ["uint256"],
            reason: t => {
                let e = "unknown panic code";
                return t >= 0 && t <= 255 && Wo[t.toString()] && (e = Wo[t.toString()]), `reverted with panic code 0x${t.toString(16)} (${e})`
            }
        }
    };
Et = new WeakMap, kt = new WeakMap, Pt = new WeakMap, xt = new WeakMap, Nt = new WeakSet, Ct = function(t, e, n) {
    if (Bn(t)) {
        const e = t.toLowerCase();
        for (const t of sn(this, Pt).values())
            if (e === t.selector) return t;
        return null
    }
    if (-1 === t.indexOf("(")) {
        const r = [];
        for (const [e, n] of sn(this, Pt)) e.split("(")[0] === t && r.push(n);
        if (e) {
            const t = e.length > 0 ? e[e.length - 1] : null;
            let n = e.length,
                s = !0;
            Is.isTyped(t) && "overrides" === t.type && (s = !1, n--);
            for (let e = r.length - 1; e >= 0; e--) {
                const t = r[e].inputs.length;
                t === n || s && t === n - 1 || r.splice(e, 1)
            }
            for (let i = r.length - 1; i >= 0; i--) {
                const t = r[i].inputs;
                for (let n = 0; n < e.length; n++)
                    if (Is.isTyped(e[n])) {
                        if (n >= t.length) {
                            if ("overrides" === e[n].type) continue;
                            r.splice(i, 1);
                            break
                        }
                        if (e[n].type !== t[n].baseType) {
                            r.splice(i, 1);
                            break
                        }
                    }
            }
        }
        if (1 === r.length && e && e.length !== r[0].inputs.length) {
            const t = e[e.length - 1];
            (null == t || Array.isArray(t) || "object" != typeof t) && r.splice(0, 1)
        }
        if (0 === r.length) return null;
        if (r.length > 1 && n) {
            Pn(!1, `ambiguous function description (i.e. matches ${r.map((t=>JSON.stringify(t.format()))).join(", ")})`, "key", t)
        }
        return r[0]
    }
    const r = sn(this, Pt).get(To.from(t).format());
    return r || null
}, Ot = function(t, e, n) {
    if (Bn(t)) {
        const e = t.toLowerCase();
        for (const t of sn(this, kt).values())
            if (e === t.topicHash) return t;
        return null
    }
    if (-1 === t.indexOf("(")) {
        const r = [];
        for (const [e, n] of sn(this, kt)) e.split("(")[0] === t && r.push(n);
        if (e) {
            for (let t = r.length - 1; t >= 0; t--) r[t].inputs.length < e.length && r.splice(t, 1);
            for (let t = r.length - 1; t >= 0; t--) {
                const n = r[t].inputs;
                for (let s = 0; s < e.length; s++)
                    if (Is.isTyped(e[s]) && e[s].type !== n[s].baseType) {
                        r.splice(t, 1);
                        break
                    }
            }
        }
        if (0 === r.length) return null;
        if (r.length > 1 && n) {
            Pn(!1, `ambiguous event description (i.e. matches ${r.map((t=>JSON.stringify(t.format()))).join(", ")})`, "key", t)
        }
        return r[0]
    }
    const r = sn(this, kt).get(Oo.from(t).format());
    return r || null
};
let Vo = class t {
    constructor(t) {
        an(this, Nt), nn(this, "fragments"), nn(this, "deploy"), nn(this, "fallback"), nn(this, "receive"), an(this, Et), an(this, kt), an(this, Pt), an(this, xt);
        let e = [];
        e = "string" == typeof t ? JSON.parse(t) : t, on(this, Pt, new Map), on(this, Et, new Map), on(this, kt, new Map);
        const n = [];
        for (const a of e) try {
            n.push(Po.from(a))
        } catch (i) {
            console.log(`[Warning] Invalid Fragment ${JSON.stringify(a)}:`, i.message)
        }
        wn(this, {
            fragments: Object.freeze(n)
        });
        let r = null,
            s = !1;
        on(this, xt, this.getAbiCoder()), this.fragments.forEach(((t, e) => {
            let n;
            switch (t.type) {
                case "constructor":
                    return this.deploy ? void console.log("duplicate definition - constructor") : void wn(this, {
                        deploy: t
                    });
                case "fallback":
                    return void(0 === t.inputs.length ? s = !0 : (Pn(!r || t.payable !== r.payable, "conflicting fallback fragments", `fragments[${e}]`, t), r = t, s = r.payable));
                case "function":
                    n = sn(this, Pt);
                    break;
                case "event":
                    n = sn(this, kt);
                    break;
                case "error":
                    n = sn(this, Et);
                    break;
                default:
                    return
            }
            const i = t.format();
            n.has(i) || n.set(i, t)
        })), this.deploy || wn(this, {
            deploy: Ro.from("constructor()")
        }), wn(this, {
            fallback: r,
            receive: s
        })
    }
    format(t) {
        const e = t ? "minimal" : "full";
        return this.fragments.map((t => t.format(e)))
    }
    formatJson() {
        const t = this.fragments.map((t => t.format("json")));
        return JSON.stringify(t.map((t => JSON.parse(t))))
    }
    getAbiCoder() {
        return Lo.defaultAbiCoder()
    }
    getFunctionName(t) {
        const e = cn(this, Nt, Ct).call(this, t, null, !1);
        return Pn(e, "no matching function", "key", t), e.name
    }
    hasFunction(t) {
        return !!cn(this, Nt, Ct).call(this, t, null, !1)
    }
    getFunction(t, e) {
        return cn(this, Nt, Ct).call(this, t, e || null, !0)
    }
    forEachFunction(t) {
        const e = Array.from(sn(this, Pt).keys());
        e.sort(((t, e) => t.localeCompare(e)));
        for (let n = 0; n < e.length; n++) {
            const r = e[n];
            t(sn(this, Pt).get(r), n)
        }
    }
    getEventName(t) {
        const e = cn(this, Nt, Ot).call(this, t, null, !1);
        return Pn(e, "no matching event", "key", t), e.name
    }
    hasEvent(t) {
        return !!cn(this, Nt, Ot).call(this, t, null, !1)
    }
    getEvent(t, e) {
        return cn(this, Nt, Ot).call(this, t, e || null, !0)
    }
    forEachEvent(t) {
        const e = Array.from(sn(this, kt).keys());
        e.sort(((t, e) => t.localeCompare(e)));
        for (let n = 0; n < e.length; n++) {
            const r = e[n];
            t(sn(this, kt).get(r), n)
        }
    }
    getError(t, e) {
        if (Bn(t)) {
            const e = t.toLowerCase();
            if (Jo[e]) return Co.from(Jo[e].signature);
            for (const t of sn(this, Et).values())
                if (e === t.selector) return t;
            return null
        }
        if (-1 === t.indexOf("(")) {
            const e = [];
            for (const [n, r] of sn(this, Et)) n.split("(")[0] === t && e.push(r);
            if (0 === e.length) return "Error" === t ? Co.from("error Error(string)") : "Panic" === t ? Co.from("error Panic(uint256)") : null;
            if (e.length > 1) {
                Pn(!1, `ambiguous error description (i.e. ${e.map((t=>JSON.stringify(t.format()))).join(", ")})`, "name", t)
            }
            return e[0]
        }
        if ("Error(string)" === (t = Co.from(t).format())) return Co.from("error Error(string)");
        if ("Panic(uint256)" === t) return Co.from("error Panic(uint256)");
        const n = sn(this, Et).get(t);
        return n || null
    }
    forEachError(t) {
        const e = Array.from(sn(this, Et).keys());
        e.sort(((t, e) => t.localeCompare(e)));
        for (let n = 0; n < e.length; n++) {
            const r = e[n];
            t(sn(this, Et).get(r), n)
        }
    }
    _decodeParams(t, e) {
        return sn(this, xt).decode(t, e)
    }
    _encodeParams(t, e) {
        return sn(this, xt).encode(t, e)
    }
    encodeDeploy(t) {
        return this._encodeParams(this.deploy.inputs, t || [])
    }
    decodeErrorResult(t, e) {
        if ("string" == typeof t) {
            const e = this.getError(t);
            Pn(e, "unknown error", "fragment", t), t = e
        }
        return Pn(Sn(e, 0, 4) === t.selector, `data signature does not match error ${t.name}.`, "data", e), this._decodeParams(t.inputs, Sn(e, 4))
    }
    encodeErrorResult(t, e) {
        if ("string" == typeof t) {
            const e = this.getError(t);
            Pn(e, "unknown error", "fragment", t), t = e
        }
        return Fn([t.selector, this._encodeParams(t.inputs, e || [])])
    }
    decodeFunctionData(t, e) {
        if ("string" == typeof t) {
            const e = this.getFunction(t);
            Pn(e, "unknown function", "fragment", t), t = e
        }
        return Pn(Sn(e, 0, 4) === t.selector, `data signature does not match function ${t.name}.`, "data", e), this._decodeParams(t.inputs, Sn(e, 4))
    }
    encodeFunctionData(t, e) {
        if ("string" == typeof t) {
            const e = this.getFunction(t);
            Pn(e, "unknown function", "fragment", t), t = e
        }
        return Fn([t.selector, this._encodeParams(t.inputs, e || [])])
    }
    decodeFunctionResult(t, e) {
        if ("string" == typeof t) {
            const e = this.getFunction(t);
            Pn(e, "unknown function", "fragment", t), t = e
        }
        let n = "invalid length for result data";
        const r = Rn(e);
        if (r.length % 32 == 0) try {
            return sn(this, xt).decode(t.outputs, r)
        } catch (s) {
            n = "could not decode result data"
        }
        kn(!1, n, "BAD_DATA", {
            value: Mn(r),
            info: {
                method: t.name,
                signature: t.format()
            }
        })
    }
    makeError(t, e) {
        const n = On(t, "data"),
            r = Lo.getBuiltinCallException("call", e, n);
        if (r.message.startsWith("execution reverted (unknown custom error)")) {
            const t = Mn(n.slice(0, 4)),
                e = this.getError(t);
            if (e) try {
                const t = sn(this, xt).decode(e.inputs, n.slice(4));
                r.revert = {
                    name: e.name,
                    signature: e.format(),
                    args: t
                }, r.reason = r.revert.signature, r.message = `execution reverted: ${r.reason}`
            } catch (i) {
                r.message = "execution reverted (coult not decode custom error)"
            }
        }
        const s = this.parseTransaction(e);
        return s && (r.invocation = {
            method: s.name,
            signature: s.signature,
            args: s.args
        }), r
    }
    encodeFunctionResult(t, e) {
        if ("string" == typeof t) {
            const e = this.getFunction(t);
            Pn(e, "unknown function", "fragment", t), t = e
        }
        return Mn(sn(this, xt).encode(t.outputs, e || []))
    }
    encodeFilterTopics(t, e) {
        if ("string" == typeof t) {
            const e = this.getEvent(t);
            Pn(e, "unknown event", "eventFragment", t), t = e
        }
        kn(e.length <= t.inputs.length, `too many arguments for ${t.format()}`, "UNEXPECTED_ARGUMENT", {
            count: e.length,
            expectedCount: t.inputs.length
        });
        const n = [];
        t.anonymous || n.push(t.topicHash);
        const r = (t, e) => "string" === t.type ? qs(e) : "bytes" === t.type ? es(Mn(e)) : ("bool" === t.type && "boolean" == typeof e ? e = e ? "0x01" : "0x00" : t.type.match(/^u?int/) ? e = qn(e) : t.type.match(/^bytes/) ? e = Un(e, 32, !1) : "address" === t.type && sn(this, xt).encode(["address"], [e]), Ln(Mn(e), 32));
        for (e.forEach(((e, s) => {
                const i = t.inputs[s];
                i.indexed ? null == e ? n.push(null) : "array" === i.baseType || "tuple" === i.baseType ? Pn(!1, "filtering with tuples or arrays not supported", "contract." + i.name, e) : Array.isArray(e) ? n.push(e.map((t => r(i, t)))) : n.push(r(i, e)) : Pn(null == e, "cannot filter non-indexed parameters; must be null", "contract." + i.name, e)
            })); n.length && null === n[n.length - 1];) n.pop();
        return n
    }
    encodeEventLog(t, e) {
        if ("string" == typeof t) {
            const e = this.getEvent(t);
            Pn(e, "unknown event", "eventFragment", t), t = e
        }
        const n = [],
            r = [],
            s = [];
        return t.anonymous || n.push(t.topicHash), Pn(e.length === t.inputs.length, "event arguments/values mismatch", "values", e), t.inputs.forEach(((t, i) => {
            const a = e[i];
            if (t.indexed)
                if ("string" === t.type) n.push(qs(a));
                else if ("bytes" === t.type) n.push(es(a));
            else {
                if ("tuple" === t.baseType || "array" === t.baseType) throw new Error("not implemented");
                n.push(sn(this, xt).encode([t.type], [a]))
            } else r.push(t), s.push(a)
        })), {
            data: sn(this, xt).encode(r, s),
            topics: n
        }
    }
    decodeEventLog(t, e, n) {
        if ("string" == typeof t) {
            const e = this.getEvent(t);
            Pn(e, "unknown event", "eventFragment", t), t = e
        }
        if (null != n && !t.anonymous) {
            const e = t.topicHash;
            Pn(Bn(n[0], 32) && n[0].toLowerCase() === e, "fragment/topic mismatch", "topics[0]", n[0]), n = n.slice(1)
        }
        const r = [],
            s = [],
            i = [];
        t.inputs.forEach(((t, e) => {
            t.indexed ? "string" === t.type || "bytes" === t.type || "tuple" === t.baseType || "array" === t.baseType ? (r.push(ko.from({
                type: "bytes32",
                name: t.name
            })), i.push(!0)) : (r.push(t), i.push(!1)) : (s.push(t), i.push(!1))
        }));
        const a = null != n ? sn(this, xt).decode(r, Fn(n)) : null,
            o = sn(this, xt).decode(s, e, !0),
            c = [],
            l = [];
        let u = 0,
            h = 0;
        return t.inputs.forEach(((t, e) => {
            let n = null;
            if (t.indexed)
                if (null == a) n = new jo(null);
                else if (i[e]) n = new jo(a[h++]);
            else try {
                n = a[h++]
            } catch (r) {
                n = r
            } else try {
                n = o[u++]
            } catch (r) {
                n = r
            }
            c.push(n), l.push(t.name || null)
        })), Qr.fromItems(c, l)
    }
    parseTransaction(t) {
        const e = On(t.data, "tx.data"),
            n = Vn(null != t.value ? t.value : 0, "tx.value"),
            r = this.getFunction(Mn(e.slice(0, 4)));
        if (!r) return null;
        const s = sn(this, xt).decode(r.inputs, e.slice(4));
        return new Qo(r, r.selector, s, n)
    }
    parseCallResult(t) {
        throw new Error("@TODO")
    }
    parseLog(t) {
        const e = this.getEvent(t.topics[0]);
        return !e || e.anonymous ? null : new Go(e, e.topicHash, this.decodeEventLog(e, t.data, t.topics))
    }
    parseError(t) {
        const e = Mn(t),
            n = this.getError(Sn(e, 0, 4));
        if (!n) return null;
        const r = sn(this, xt).decode(n.inputs, Sn(e, 4));
        return new Ho(n, n.selector, r)
    }
    static from(e) {
        return e instanceof t ? e : "string" == typeof e ? new t(JSON.parse(e)) : "function" == typeof e.formatJson ? new t(e.formatJson()) : "function" == typeof e.format ? new t(e.format("json")) : new t(e)
    }
};
const zo = BigInt(0);

function Ko(t) {
    return null == t ? null : t
}

function Yo(t) {
    return null == t ? null : t.toString()
}
class Zo {
    constructor(t, e, n) {
        nn(this, "gasPrice"), nn(this, "maxFeePerGas"), nn(this, "maxPriorityFeePerGas"), wn(this, {
            gasPrice: Ko(t),
            maxFeePerGas: Ko(e),
            maxPriorityFeePerGas: Ko(n)
        })
    }
    toJSON() {
        const {
            gasPrice: t,
            maxFeePerGas: e,
            maxPriorityFeePerGas: n
        } = this;
        return {
            _type: "FeeData",
            gasPrice: Yo(t),
            maxFeePerGas: Yo(e),
            maxPriorityFeePerGas: Yo(n)
        }
    }
}

function qo(t) {
    const e = {};
    t.to && (e.to = t.to), t.from && (e.from = t.from), t.data && (e.data = Mn(t.data));
    const n = "chainId,gasLimit,gasPrice,maxFeePerBlobGas,maxFeePerGas,maxPriorityFeePerGas,value".split(/,/);
    for (const s of n) s in t && null != t[s] && (e[s] = Vn(t[s], `request.${s}`));
    const r = "type,nonce".split(/,/);
    for (const s of r) s in t && null != t[s] && (e[s] = Zn(t[s], `request.${s}`));
    return t.accessList && (e.accessList = aa(t.accessList)), "blockTag" in t && (e.blockTag = t.blockTag), "enableCcipRead" in t && (e.enableCcipRead = !!t.enableCcipRead), "customData" in t && (e.customData = t.customData), "blobVersionedHashes" in t && t.blobVersionedHashes && (e.blobVersionedHashes = t.blobVersionedHashes.slice()), "kzg" in t && (e.kzg = t.kzg), "blobs" in t && t.blobs && (e.blobs = t.blobs.map((t => Tn(t) ? Mn(t) : Object.assign({}, t)))), e
}
class Xo {
    constructor(t, e) {
        nn(this, "provider"), nn(this, "number"), nn(this, "hash"), nn(this, "timestamp"), nn(this, "parentHash"), nn(this, "parentBeaconBlockRoot"), nn(this, "nonce"), nn(this, "difficulty"), nn(this, "gasLimit"), nn(this, "gasUsed"), nn(this, "stateRoot"), nn(this, "receiptsRoot"), nn(this, "blobGasUsed"), nn(this, "excessBlobGas"), nn(this, "miner"), nn(this, "prevRandao"), nn(this, "extraData"), nn(this, "baseFeePerGas"), an(this, Rt), on(this, Rt, t.transactions.map((t => "string" != typeof t ? new tc(t, e) : t))), wn(this, {
            provider: e,
            hash: Ko(t.hash),
            number: t.number,
            timestamp: t.timestamp,
            parentHash: t.parentHash,
            parentBeaconBlockRoot: t.parentBeaconBlockRoot,
            nonce: t.nonce,
            difficulty: t.difficulty,
            gasLimit: t.gasLimit,
            gasUsed: t.gasUsed,
            blobGasUsed: t.blobGasUsed,
            excessBlobGas: t.excessBlobGas,
            miner: t.miner,
            prevRandao: Ko(t.prevRandao),
            extraData: t.extraData,
            baseFeePerGas: Ko(t.baseFeePerGas),
            stateRoot: t.stateRoot,
            receiptsRoot: t.receiptsRoot
        })
    }
    get transactions() {
        return sn(this, Rt).map((t => "string" == typeof t ? t : t.hash))
    }
    get prefetchedTransactions() {
        const t = sn(this, Rt).slice();
        return 0 === t.length ? [] : (kn("object" == typeof t[0], "transactions were not prefetched with block request", "UNSUPPORTED_OPERATION", {
            operation: "transactionResponses()"
        }), t)
    }
    toJSON() {
        const {
            baseFeePerGas: t,
            difficulty: e,
            extraData: n,
            gasLimit: r,
            gasUsed: s,
            hash: i,
            miner: a,
            prevRandao: o,
            nonce: c,
            number: l,
            parentHash: u,
            parentBeaconBlockRoot: h,
            stateRoot: f,
            receiptsRoot: p,
            timestamp: d,
            transactions: g
        } = this;
        return {
            _type: "Block",
            baseFeePerGas: Yo(t),
            difficulty: Yo(e),
            extraData: n,
            gasLimit: Yo(r),
            gasUsed: Yo(s),
            blobGasUsed: Yo(this.blobGasUsed),
            excessBlobGas: Yo(this.excessBlobGas),
            hash: i,
            miner: a,
            prevRandao: o,
            nonce: c,
            number: l,
            parentHash: u,
            timestamp: d,
            parentBeaconBlockRoot: h,
            stateRoot: f,
            receiptsRoot: p,
            transactions: g
        }
    }[Symbol.iterator]() {
        let t = 0;
        const e = this.transactions;
        return {
            next: () => t < this.length ? {
                value: e[t++],
                done: !1
            } : {
                value: void 0,
                done: !0
            }
        }
    }
    get length() {
        return sn(this, Rt).length
    }
    get date() {
        return null == this.timestamp ? null : new Date(1e3 * this.timestamp)
    }
    async getTransaction(t) {
        let e;
        if ("number" == typeof t) e = sn(this, Rt)[t];
        else {
            const n = t.toLowerCase();
            for (const t of sn(this, Rt)) {
                if ("string" == typeof t) {
                    if (t !== n) continue;
                    e = t;
                    break
                }
                if (t.hash !== n) {
                    e = t;
                    break
                }
            }
        }
        if (null == e) throw new Error("no such tx");
        return "string" == typeof e ? await this.provider.getTransaction(e) : e
    }
    getPrefetchedTransaction(t) {
        const e = this.prefetchedTransactions;
        if ("number" == typeof t) return e[t];
        t = t.toLowerCase();
        for (const n of e)
            if (n.hash === t) return n;
        Pn(!1, "no matching transaction", "indexOrHash", t)
    }
    isMined() {
        return !!this.hash
    }
    isLondon() {
        return !!this.baseFeePerGas
    }
    orphanedEvent() {
        if (!this.isMined()) throw new Error("");
        return {
            orphan: "drop-block",
            hash: (t = this).hash,
            number: t.number
        };
        var t
    }
}
Rt = new WeakMap;
class _o {
    constructor(t, e) {
        nn(this, "provider"), nn(this, "transactionHash"), nn(this, "blockHash"), nn(this, "blockNumber"), nn(this, "removed"), nn(this, "address"), nn(this, "data"), nn(this, "topics"), nn(this, "index"), nn(this, "transactionIndex"), this.provider = e;
        const n = Object.freeze(t.topics.slice());
        wn(this, {
            transactionHash: t.transactionHash,
            blockHash: t.blockHash,
            blockNumber: t.blockNumber,
            removed: t.removed,
            address: t.address,
            data: t.data,
            topics: n,
            index: t.index,
            transactionIndex: t.transactionIndex
        })
    }
    toJSON() {
        const {
            address: t,
            blockHash: e,
            blockNumber: n,
            data: r,
            index: s,
            removed: i,
            topics: a,
            transactionHash: o,
            transactionIndex: c
        } = this;
        return {
            _type: "log",
            address: t,
            blockHash: e,
            blockNumber: n,
            data: r,
            index: s,
            removed: i,
            topics: a,
            transactionHash: o,
            transactionIndex: c
        }
    }
    async getBlock() {
        const t = await this.provider.getBlock(this.blockHash);
        return kn(!!t, "failed to find transaction", "UNKNOWN_ERROR", {}), t
    }
    async getTransaction() {
        const t = await this.provider.getTransaction(this.transactionHash);
        return kn(!!t, "failed to find transaction", "UNKNOWN_ERROR", {}), t
    }
    async getTransactionReceipt() {
        const t = await this.provider.getTransactionReceipt(this.transactionHash);
        return kn(!!t, "failed to find transaction receipt", "UNKNOWN_ERROR", {}), t
    }
    removedEvent() {
        return {
            orphan: "drop-log",
            log: {
                transactionHash: (t = this).transactionHash,
                blockHash: t.blockHash,
                blockNumber: t.blockNumber,
                address: t.address,
                data: t.data,
                topics: Object.freeze(t.topics.slice()),
                index: t.index
            }
        };
        var t
    }
}
class $o {
    constructor(t, e) {
        nn(this, "provider"), nn(this, "to"), nn(this, "from"), nn(this, "contractAddress"), nn(this, "hash"), nn(this, "index"), nn(this, "blockHash"), nn(this, "blockNumber"), nn(this, "logsBloom"), nn(this, "gasUsed"), nn(this, "blobGasUsed"), nn(this, "cumulativeGasUsed"), nn(this, "gasPrice"), nn(this, "blobGasPrice"), nn(this, "type"), nn(this, "status"), nn(this, "root"), an(this, Bt), on(this, Bt, Object.freeze(t.logs.map((t => new _o(t, e)))));
        let n = zo;
        null != t.effectiveGasPrice ? n = t.effectiveGasPrice : null != t.gasPrice && (n = t.gasPrice), wn(this, {
            provider: e,
            to: t.to,
            from: t.from,
            contractAddress: t.contractAddress,
            hash: t.hash,
            index: t.index,
            blockHash: t.blockHash,
            blockNumber: t.blockNumber,
            logsBloom: t.logsBloom,
            gasUsed: t.gasUsed,
            cumulativeGasUsed: t.cumulativeGasUsed,
            blobGasUsed: t.blobGasUsed,
            gasPrice: n,
            blobGasPrice: t.blobGasPrice,
            type: t.type,
            status: t.status,
            root: t.root
        })
    }
    get logs() {
        return sn(this, Bt)
    }
    toJSON() {
        const {
            to: t,
            from: e,
            contractAddress: n,
            hash: r,
            index: s,
            blockHash: i,
            blockNumber: a,
            logsBloom: o,
            logs: c,
            status: l,
            root: u
        } = this;
        return {
            _type: "TransactionReceipt",
            blockHash: i,
            blockNumber: a,
            contractAddress: n,
            cumulativeGasUsed: Yo(this.cumulativeGasUsed),
            from: e,
            gasPrice: Yo(this.gasPrice),
            blobGasUsed: Yo(this.blobGasUsed),
            blobGasPrice: Yo(this.blobGasPrice),
            gasUsed: Yo(this.gasUsed),
            hash: r,
            index: s,
            logs: c,
            logsBloom: o,
            root: u,
            status: l,
            to: t
        }
    }
    get length() {
        return this.logs.length
    }[Symbol.iterator]() {
        let t = 0;
        return {
            next: () => t < this.length ? {
                value: this.logs[t++],
                done: !1
            } : {
                value: void 0,
                done: !0
            }
        }
    }
    get fee() {
        return this.gasUsed * this.gasPrice
    }
    async getBlock() {
        const t = await this.provider.getBlock(this.blockHash);
        if (null == t) throw new Error("TODO");
        return t
    }
    async getTransaction() {
        const t = await this.provider.getTransaction(this.hash);
        if (null == t) throw new Error("TODO");
        return t
    }
    async getResult() {
        return await this.provider.getTransactionResult(this.hash)
    }
    async confirmations() {
        return await this.provider.getBlockNumber() - this.blockNumber + 1
    }
    removedEvent() {
        return nc(this)
    }
    reorderedEvent(t) {
        return kn(!t || t.isMined(), "unmined 'other' transction cannot be orphaned", "UNSUPPORTED_OPERATION", {
            operation: "reorderedEvent(other)"
        }), ec(this, t)
    }
}
Bt = new WeakMap;
Tt = new WeakMap;
let tc = class t {
    constructor(t, e) {
        nn(this, "provider"), nn(this, "blockNumber"), nn(this, "blockHash"), nn(this, "index"), nn(this, "hash"), nn(this, "type"), nn(this, "to"), nn(this, "from"), nn(this, "nonce"), nn(this, "gasLimit"), nn(this, "gasPrice"), nn(this, "maxPriorityFeePerGas"), nn(this, "maxFeePerGas"), nn(this, "maxFeePerBlobGas"), nn(this, "data"), nn(this, "value"), nn(this, "chainId"), nn(this, "signature"), nn(this, "accessList"), nn(this, "blobVersionedHashes"), an(this, Tt), this.provider = e, this.blockNumber = null != t.blockNumber ? t.blockNumber : null, this.blockHash = null != t.blockHash ? t.blockHash : null, this.hash = t.hash, this.index = t.index, this.type = t.type, this.from = t.from, this.to = t.to || null, this.gasLimit = t.gasLimit, this.nonce = t.nonce, this.data = t.data, this.value = t.value, this.gasPrice = t.gasPrice, this.maxPriorityFeePerGas = null != t.maxPriorityFeePerGas ? t.maxPriorityFeePerGas : null, this.maxFeePerGas = null != t.maxFeePerGas ? t.maxFeePerGas : null, this.maxFeePerBlobGas = null != t.maxFeePerBlobGas ? t.maxFeePerBlobGas : null, this.chainId = t.chainId, this.signature = t.signature, this.accessList = null != t.accessList ? t.accessList : null, this.blobVersionedHashes = null != t.blobVersionedHashes ? t.blobVersionedHashes : null, on(this, Tt, -1)
    }
    toJSON() {
        const {
            blockNumber: t,
            blockHash: e,
            index: n,
            hash: r,
            type: s,
            to: i,
            from: a,
            nonce: o,
            data: c,
            signature: l,
            accessList: u,
            blobVersionedHashes: h
        } = this;
        return {
            _type: "TransactionResponse",
            accessList: u,
            blockNumber: t,
            blockHash: e,
            blobVersionedHashes: h,
            chainId: Yo(this.chainId),
            data: c,
            from: a,
            gasLimit: Yo(this.gasLimit),
            gasPrice: Yo(this.gasPrice),
            hash: r,
            maxFeePerGas: Yo(this.maxFeePerGas),
            maxPriorityFeePerGas: Yo(this.maxPriorityFeePerGas),
            maxFeePerBlobGas: Yo(this.maxFeePerBlobGas),
            nonce: o,
            signature: l,
            to: i,
            index: n,
            type: s,
            value: Yo(this.value)
        }
    }
    async getBlock() {
        let t = this.blockNumber;
        if (null == t) {
            const e = await this.getTransaction();
            e && (t = e.blockNumber)
        }
        if (null == t) return null;
        const e = this.provider.getBlock(t);
        if (null == e) throw new Error("TODO");
        return e
    }
    async getTransaction() {
        return this.provider.getTransaction(this.hash)
    }
    async confirmations() {
        if (null == this.blockNumber) {
            const {
                tx: t,
                blockNumber: e
            } = await yn({
                tx: this.getTransaction(),
                blockNumber: this.provider.getBlockNumber()
            });
            return null == t || null == t.blockNumber ? 0 : e - t.blockNumber + 1
        }
        return await this.provider.getBlockNumber() - this.blockNumber + 1
    }
    async wait(t, e) {
        const n = null == t ? 1 : t,
            r = null == e ? 0 : e;
        let s = sn(this, Tt),
            i = -1,
            a = -1 === s;
        const o = async () => {
                if (a) return null;
                const {
                    blockNumber: t,
                    nonce: e
                } = await yn({
                    blockNumber: this.provider.getBlockNumber(),
                    nonce: this.provider.getTransactionCount(this.from)
                });
                if (e < this.nonce) return void(s = t);
                if (a) return null;
                const r = await this.getTransaction();
                if (!r || null == r.blockNumber)
                    for (-1 === i && (i = s - 3, i < sn(this, Tt) && (i = sn(this, Tt))); i <= t;) {
                        if (a) return null;
                        const e = await this.provider.getBlock(i, !0);
                        if (null == e) return;
                        for (const t of e)
                            if (t === this.hash) return;
                        for (let r = 0; r < e.length; r++) {
                            const i = await e.getTransaction(r);
                            if (i.from === this.from && i.nonce === this.nonce) {
                                if (a) return null;
                                const e = await this.provider.getTransactionReceipt(i.hash);
                                if (null == e) return;
                                if (t - e.blockNumber + 1 < n) return;
                                let r = "replaced";
                                i.data === this.data && i.to === this.to && i.value === this.value ? r = "repriced" : "0x" === i.data && i.from === i.to && i.value === zo && (r = "cancelled"), kn(!1, "transaction was replaced", "TRANSACTION_REPLACED", {
                                    cancelled: "replaced" === r || "cancelled" === r,
                                    reason: r,
                                    replacement: i.replaceableTransaction(s),
                                    hash: i.hash,
                                    receipt: e
                                })
                            }
                        }
                        i++
                    }
            },
            c = t => {
                if (null == t || 0 !== t.status) return t;
                kn(!1, "transaction execution reverted", "CALL_EXCEPTION", {
                    action: "sendTransaction",
                    data: null,
                    reason: null,
                    invocation: null,
                    revert: null,
                    transaction: {
                        to: t.to,
                        from: t.from,
                        data: ""
                    },
                    receipt: t
                })
            },
            l = await this.provider.getTransactionReceipt(this.hash);
        if (0 === n) return c(l);
        if (l) {
            if (await l.confirmations() >= n) return c(l)
        } else if (await o(), 0 === n) return null;
        const u = new Promise(((t, e) => {
            const i = [],
                l = () => {
                    i.forEach((t => t()))
                };
            if (i.push((() => {
                    a = !0
                })), r > 0) {
                const t = setTimeout((() => {
                    l(), e(En("wait for transaction timeout", "TIMEOUT"))
                }), r);
                i.push((() => {
                    clearTimeout(t)
                }))
            }
            const u = async r => {
                if (await r.confirmations() >= n) {
                    l();
                    try {
                        t(c(r))
                    } catch (s) {
                        e(s)
                    }
                }
            };
            if (i.push((() => {
                    this.provider.off(this.hash, u)
                })), this.provider.on(this.hash, u), s >= 0) {
                const t = async () => {
                    try {
                        await o()
                    } catch (n) {
                        if (bn(n, "TRANSACTION_REPLACED")) return l(), void e(n)
                    }
                    a || this.provider.once("block", t)
                };
                i.push((() => {
                    this.provider.off("block", t)
                })), this.provider.once("block", t)
            }
        }));
        return await u
    }
    isMined() {
        return null != this.blockHash
    }
    isLegacy() {
        return 0 === this.type
    }
    isBerlin() {
        return 1 === this.type
    }
    isLondon() {
        return 2 === this.type
    }
    isCancun() {
        return 3 === this.type
    }
    removedEvent() {
        return kn(this.isMined(), "unmined transaction canot be orphaned", "UNSUPPORTED_OPERATION", {
            operation: "removeEvent()"
        }), nc(this)
    }
    reorderedEvent(t) {
        return kn(this.isMined(), "unmined transaction canot be orphaned", "UNSUPPORTED_OPERATION", {
            operation: "removeEvent()"
        }), kn(!t || t.isMined(), "unmined 'other' transaction canot be orphaned", "UNSUPPORTED_OPERATION", {
            operation: "removeEvent()"
        }), ec(this, t)
    }
    replaceableTransaction(e) {
        Pn(Number.isInteger(e) && e >= 0, "invalid startBlock", "startBlock", e);
        const n = new t(this, this.provider);
        return on(n, Tt, e), n
    }
};

function ec(t, e) {
    return {
        orphan: "reorder-transaction",
        tx: t,
        other: e
    }
}

function nc(t) {
    return {
        orphan: "drop-transaction",
        tx: t
    }
}
class rc extends _o {
    constructor(t, e, n) {
        super(t, t.provider), nn(this, "interface"), nn(this, "fragment"), nn(this, "args");
        wn(this, {
            args: e.decodeEventLog(n, t.data, t.topics),
            fragment: n,
            interface: e
        })
    }
    get eventName() {
        return this.fragment.name
    }
    get eventSignature() {
        return this.fragment.format()
    }
}
class sc extends _o {
    constructor(t, e) {
        super(t, t.provider), nn(this, "error"), wn(this, {
            error: e
        })
    }
}
class ic extends $o {
    constructor(t, e, n) {
        super(n, e), an(this, It), on(this, It, t)
    }
    get logs() {
        return super.logs.map((t => {
            const e = t.topics.length ? sn(this, It).getEvent(t.topics[0]) : null;
            if (e) try {
                return new rc(t, sn(this, It), e)
            } catch (n) {
                return new sc(t, n)
            }
            return t
        }))
    }
}
It = new WeakMap;
class ac extends tc {
    constructor(t, e, n) {
        super(n, e), an(this, Mt), on(this, Mt, t)
    }
    async wait(t, e) {
        const n = await super.wait(t, e);
        return null == n ? null : new ic(sn(this, Mt), this.provider, n)
    }
}
Mt = new WeakMap;
class oc extends er {
    constructor(t, e, n, r) {
        super(t, e, n), nn(this, "log"), wn(this, {
            log: r
        })
    }
    async getBlock() {
        return await this.log.getBlock()
    }
    async getTransaction() {
        return await this.log.getTransaction()
    }
    async getTransactionReceipt() {
        return await this.log.getTransactionReceipt()
    }
}
class cc extends oc {
    constructor(t, e, n, r, s) {
        super(t, e, n, new rc(s, t.interface, r));
        wn(this, {
            args: t.interface.decodeEventLog(r, this.log.data, this.log.topics),
            fragment: r
        })
    }
    get eventName() {
        return this.fragment.name
    }
    get eventSignature() {
        return this.fragment.format()
    }
}
const lc = BigInt(0);

function uc(t) {
    return t && "function" == typeof t.call
}

function hc(t) {
    return t && "function" == typeof t.estimateGas
}

function fc(t) {
    return t && "function" == typeof t.resolveName
}

function pc(t) {
    return t && "function" == typeof t.sendTransaction
}

function dc(t) {
    if (null != t) {
        if (fc(t)) return t;
        if (t.provider) return t.provider
    }
}
class gc {
    constructor(t, e, n) {
        if (an(this, Ft), nn(this, "fragment"), wn(this, {
                fragment: e
            }), e.inputs.length < n.length) throw new Error("too many arguments");
        const r = mc(t.runner, "resolveName"),
            s = fc(r) ? r : null;
        on(this, Ft, async function() {
            const r = await Promise.all(e.inputs.map(((t, e) => null == n[e] ? null : t.walkAsync(n[e], ((t, e) => "address" === t ? Array.isArray(e) ? Promise.all(e.map((t => Cs(t, s)))) : Cs(e, s) : e)))));
            return t.interface.encodeFilterTopics(e, r)
        }())
    }
    getTopicFilter() {
        return sn(this, Ft)
    }
}

function mc(t, e) {
    return null == t ? null : "function" == typeof t[e] ? t : t.provider && "function" == typeof t.provider[e] ? t.provider : null
}

function yc(t) {
    return null == t ? null : t.provider || null
}
async function wc(t, e) {
    const n = Is.dereference(t, "overrides");
    Pn("object" == typeof n, "invalid overrides parameter", "overrides", t);
    const r = qo(n);
    return Pn(null == r.to || (e || []).indexOf("to") >= 0, "cannot override to", "overrides.to", r.to), Pn(null == r.data || (e || []).indexOf("data") >= 0, "cannot override data", "overrides.data", r.data), r.from && (r.from = r.from), r
}

function Ac(t) {
    const e = async function(e) {
            const n = await wc(e, ["data"]);
            n.to = await t.getAddress(), n.from && (n.from = await Cs(n.from, dc(t.runner)));
            const r = t.interface,
                s = Vn(n.value || lc, "overrides.value") === lc,
                i = "0x" === (n.data || "0x");
            !r.fallback || r.fallback.payable || !r.receive || i || s || Pn(!1, "cannot send data to receive or send value to non-payable fallback", "overrides", e), Pn(r.fallback || i, "cannot send data to receive-only contract", "overrides.data", n.data);
            return Pn(r.receive || r.fallback && r.fallback.payable || s, "cannot send value to non-payable fallback", "overrides.value", n.value), Pn(r.fallback || i, "cannot send data to receive-only contract", "overrides.data", n.data), n
        },
        n = async function(n) {
            const r = t.runner;
            kn(pc(r), "contract runner does not support sending transactions", "UNSUPPORTED_OPERATION", {
                operation: "sendTransaction"
            });
            const s = await r.sendTransaction(await e(n)),
                i = yc(t.runner);
            return new ac(t.interface, i, s)
        },
        r = async t => await n(t);
    return wn(r, {
        _contract: t,
        estimateGas: async function(n) {
            const r = mc(t.runner, "estimateGas");
            return kn(hc(r), "contract runner does not support gas estimation", "UNSUPPORTED_OPERATION", {
                operation: "estimateGas"
            }), await r.estimateGas(await e(n))
        },
        populateTransaction: e,
        send: n,
        staticCall: async function(n) {
            const r = mc(t.runner, "call");
            kn(uc(r), "contract runner does not support calling", "UNSUPPORTED_OPERATION", {
                operation: "call"
            });
            const s = await e(n);
            try {
                return await r.call(s)
            } catch (i) {
                if (vn(i) && i.data) throw t.interface.makeError(i.data, s);
                throw i
            }
        }
    }), r
}

function bc(t, e) {
    const n = function(...n) {
            const r = t.interface.getFunction(e, n);
            return kn(r, "no matching fragment", "UNSUPPORTED_OPERATION", {
                operation: "fragment",
                info: {
                    key: e,
                    args: n
                }
            }), r
        },
        r = async function(...e) {
            const r = n(...e);
            let s = {};
            if (r.inputs.length + 1 === e.length && (s = await wc(e.pop()), s.from && (s.from = await Cs(s.from, dc(t.runner)))), r.inputs.length !== e.length) throw new Error("internal error: fragment inputs doesn't match arguments; should not happen");
            const i = await async function(t, e, n) {
                const r = mc(t, "resolveName"),
                    s = fc(r) ? r : null;
                return await Promise.all(e.map(((t, e) => t.walkAsync(n[e], ((t, e) => (e = Is.dereference(e, t), "address" === t ? Cs(e, s) : e))))))
            }(t.runner, r.inputs, e);
            return Object.assign({}, s, await yn({
                to: t.getAddress(),
                data: t.interface.encodeFunctionData(r, i)
            }))
        },
        s = async function(...t) {
            const e = await a(...t);
            return 1 === e.length ? e[0] : e
        },
        i = async function(...e) {
            const n = t.runner;
            kn(pc(n), "contract runner does not support sending transactions", "UNSUPPORTED_OPERATION", {
                operation: "sendTransaction"
            });
            const s = await n.sendTransaction(await r(...e)),
                i = yc(t.runner);
            return new ac(t.interface, i, s)
        },
        a = async function(...e) {
            const s = mc(t.runner, "call");
            kn(uc(s), "contract runner does not support calling", "UNSUPPORTED_OPERATION", {
                operation: "call"
            });
            const i = await r(...e);
            let a = "0x";
            try {
                a = await s.call(i)
            } catch (c) {
                if (vn(c) && c.data) throw t.interface.makeError(c.data, i);
                throw c
            }
            const o = n(...e);
            return t.interface.decodeFunctionResult(o, a)
        },
        o = async (...t) => n(...t).constant ? await s(...t) : await i(...t);
    return wn(o, {
        name: t.interface.getFunctionName(e),
        _contract: t,
        _key: e,
        getFragment: n,
        estimateGas: async function(...e) {
            const n = mc(t.runner, "estimateGas");
            return kn(hc(n), "contract runner does not support gas estimation", "UNSUPPORTED_OPERATION", {
                operation: "estimateGas"
            }), await n.estimateGas(await r(...e))
        },
        populateTransaction: r,
        send: i,
        staticCall: s,
        staticCallResult: a
    }), Object.defineProperty(o, "fragment", {
        configurable: !1,
        enumerable: !0,
        get: () => {
            const n = t.interface.getFunction(e);
            return kn(n, "no matching fragment", "UNSUPPORTED_OPERATION", {
                operation: "fragment",
                info: {
                    key: e
                }
            }), n
        }
    }), o
}
Ft = new WeakMap;
const vc = Symbol.for("_ethersInternal_contract"),
    Ec = new WeakMap;

function kc(t) {
    return Ec.get(t[vc])
}
async function Pc(t, e) {
    let n, r = null;
    if (Array.isArray(e)) {
        const r = function(e) {
            if (Bn(e, 32)) return e;
            const n = t.interface.getEvent(e);
            return Pn(n, "unknown fragment", "name", e), n.topicHash
        };
        n = e.map((t => null == t ? null : Array.isArray(t) ? t.map(r) : r(t)))
    } else "*" === e ? n = [null] : "string" == typeof e ? Bn(e, 32) ? n = [e] : (r = t.interface.getEvent(e), Pn(r, "unknown fragment", "event", e), n = [r.topicHash]) : (s = e) && "object" == typeof s && "getTopicFilter" in s && "function" == typeof s.getTopicFilter && s.fragment ? n = await e.getTopicFilter() : "fragment" in e ? (r = e.fragment, n = [r.topicHash]) : Pn(!1, "unknown event name", "event", e);
    var s;
    n = n.map((t => {
        if (null == t) return null;
        if (Array.isArray(t)) {
            const e = Array.from(new Set(t.map((t => t.toLowerCase()))).values());
            return 1 === e.length ? e[0] : (e.sort(), e)
        }
        return t.toLowerCase()
    }));
    return {
        fragment: r,
        tag: n.map((t => null == t ? "null" : Array.isArray(t) ? t.join("|") : t)).join("&"),
        topics: n
    }
}
async function xc(t, e) {
    const {
        subs: n
    } = kc(t);
    return n.get((await Pc(t, e)).tag) || null
}
async function Nc(t, e, n) {
    const r = yc(t.runner);
    kn(r, "contract runner does not support subscribing", "UNSUPPORTED_OPERATION", {
        operation: e
    });
    const {
        fragment: s,
        tag: i,
        topics: a
    } = await Pc(t, n), {
        addr: o,
        subs: c
    } = kc(t);
    let l = c.get(i);
    if (!l) {
        const e = {
                address: o || t,
                topics: a
            },
            u = e => {
                let r = s;
                if (null == r) try {
                    r = t.interface.getEvent(e.topics[0])
                } catch (i) {}
                if (r) {
                    const i = r,
                        a = s ? t.interface.decodeEventLog(s, e.data, e.topics) : [];
                    Oc(t, n, a, (r => new cc(t, r, n, i, e)))
                } else Oc(t, n, [], (r => new oc(t, r, n, e)))
            };
        let h = [];
        l = {
            tag: i,
            listeners: [],
            start: () => {
                h.length || h.push(r.on(e, u))
            },
            stop: async () => {
                if (0 == h.length) return;
                let t = h;
                h = [], await Promise.all(t), r.off(e, u)
            }
        }, c.set(i, l)
    }
    return l
}
let Cc = Promise.resolve();
async function Oc(t, e, n, r) {
    try {
        await Cc
    } catch (i) {}
    const s = async function(t, e, n, r) {
        await Cc;
        const s = await xc(t, e);
        if (!s) return !1;
        const a = s.listeners.length;
        return s.listeners = s.listeners.filter((({
            listener: e,
            once: s
        }) => {
            const a = Array.from(n);
            r && a.push(r(s ? null : e));
            try {
                e.call(t, ...a)
            } catch (i) {}
            return !s
        })), 0 === s.listeners.length && (s.stop(), kc(t).subs.delete(s.tag)), a > 0
    }(t, e, n, r);
    return Cc = s, await s
}
const Rc = ["then"];
Dt = vc;
let Bc = class t {
    constructor(t, e, n, r) {
        nn(this, "target"), nn(this, "interface"), nn(this, "runner"), nn(this, "filters"), nn(this, Dt), nn(this, "fallback"), Pn("string" == typeof t || xs(t), "invalid value for Contract target", "target", t), null == n && (n = null);
        const s = Vo.from(e);
        let i;
        wn(this, {
            target: t,
            runner: n,
            interface: s
        }), Object.defineProperty(this, vc, {
            value: {}
        });
        let a = null,
            o = null;
        if (r) {
            const t = yc(n);
            o = new ac(this.interface, t, r)
        }
        let c = new Map;
        if ("string" == typeof t)
            if (Bn(t)) a = t, i = Promise.resolve(t);
            else {
                const e = mc(n, "resolveName");
                if (!fc(e)) throw En("contract runner does not support name resolution", "UNSUPPORTED_OPERATION", {
                    operation: "resolveName"
                });
                i = e.resolveName(t).then((e => {
                    if (null == e) throw En("an ENS name used for a contract target must be correctly configured", "UNCONFIGURED_NAME", {
                        value: t
                    });
                    return kc(this).addr = e, e
                }))
            }
        else i = t.getAddress().then((t => {
            if (null == t) throw new Error("TODO");
            return kc(this).addr = t, t
        }));
        var l, u;
        l = this, u = {
            addrPromise: i,
            addr: a,
            deployTx: o,
            subs: c
        }, Ec.set(l[vc], u);
        return wn(this, {
            filters: new Proxy({}, {
                get: (t, e, n) => {
                    if ("symbol" == typeof e || Rc.indexOf(e) >= 0) return Reflect.get(t, e, n);
                    try {
                        return this.getEvent(e)
                    } catch (r) {
                        if (!bn(r, "INVALID_ARGUMENT") || "key" !== r.argument) throw r
                    }
                },
                has: (t, e) => Rc.indexOf(e) >= 0 ? Reflect.has(t, e) : Reflect.has(t, e) || this.interface.hasEvent(String(e))
            })
        }), wn(this, {
            fallback: s.receive || s.fallback ? Ac(this) : null
        }), new Proxy(this, {
            get: (t, e, n) => {
                if ("symbol" == typeof e || e in t || Rc.indexOf(e) >= 0) return Reflect.get(t, e, n);
                try {
                    return t.getFunction(e)
                } catch (r) {
                    if (!bn(r, "INVALID_ARGUMENT") || "key" !== r.argument) throw r
                }
            },
            has: (t, e) => "symbol" == typeof e || e in t || Rc.indexOf(e) >= 0 ? Reflect.has(t, e) : t.interface.hasFunction(e)
        })
    }
    connect(e) {
        return new t(this.target, this.interface, e)
    }
    attach(e) {
        return new t(e, this.interface, this.runner)
    }
    async getAddress() {
        return await kc(this).addrPromise
    }
    async getDeployedCode() {
        const t = yc(this.runner);
        kn(t, "runner does not support .provider", "UNSUPPORTED_OPERATION", {
            operation: "getDeployedCode"
        });
        const e = await t.getCode(await this.getAddress());
        return "0x" === e ? null : e
    }
    async waitForDeployment() {
        const t = this.deploymentTransaction();
        if (t) return await t.wait(), this;
        if (null != await this.getDeployedCode()) return this;
        const e = yc(this.runner);
        return kn(null != e, "contract runner does not support .provider", "UNSUPPORTED_OPERATION", {
            operation: "waitForDeployment"
        }), new Promise(((t, n) => {
            const r = async () => {
                try {
                    if (null != await this.getDeployedCode()) return t(this);
                    e.once("block", r)
                } catch (s) {
                    n(s)
                }
            };
            r()
        }))
    }
    deploymentTransaction() {
        return kc(this).deployTx
    }
    getFunction(t) {
        "string" != typeof t && (t = t.format());
        return bc(this, t)
    }
    getEvent(t) {
        return "string" != typeof t && (t = t.format()),
            function(t, e) {
                const n = function(...n) {
                        const r = t.interface.getEvent(e, n);
                        return kn(r, "no matching fragment", "UNSUPPORTED_OPERATION", {
                            operation: "fragment",
                            info: {
                                key: e,
                                args: n
                            }
                        }), r
                    },
                    r = function(...e) {
                        return new gc(t, n(...e), e)
                    };
                return wn(r, {
                    name: t.interface.getEventName(e),
                    _contract: t,
                    _key: e,
                    getFragment: n
                }), Object.defineProperty(r, "fragment", {
                    configurable: !1,
                    enumerable: !0,
                    get: () => {
                        const n = t.interface.getEvent(e);
                        return kn(n, "no matching fragment", "UNSUPPORTED_OPERATION", {
                            operation: "fragment",
                            info: {
                                key: e
                            }
                        }), n
                    }
                }), r
            }(this, t)
    }
    async queryTransaction(t) {
        throw new Error("@TODO")
    }
    async queryFilter(t, e, n) {
        null == e && (e = 0), null == n && (n = "latest");
        const {
            addr: r,
            addrPromise: s
        } = kc(this), i = r || await s, {
            fragment: a,
            topics: o
        } = await Pc(this, t), c = {
            address: i,
            topics: o,
            fromBlock: e,
            toBlock: n
        }, l = yc(this.runner);
        return kn(l, "contract runner does not have a provider", "UNSUPPORTED_OPERATION", {
            operation: "queryFilter"
        }), (await l.getLogs(c)).map((t => {
            let e = a;
            if (null == e) try {
                e = this.interface.getEvent(t.topics[0])
            } catch (n) {}
            if (e) try {
                return new rc(t, this.interface, e)
            } catch (n) {
                return new sc(t, n)
            }
            return new _o(t, l)
        }))
    }
    async on(t, e) {
        const n = await Nc(this, "on", t);
        return n.listeners.push({
            listener: e,
            once: !1
        }), n.start(), this
    }
    async once(t, e) {
        const n = await Nc(this, "once", t);
        return n.listeners.push({
            listener: e,
            once: !0
        }), n.start(), this
    }
    async emit(t, ...e) {
        return await Oc(this, t, e, null)
    }
    async listenerCount(t) {
        if (t) {
            const e = await xc(this, t);
            return e ? e.listeners.length : 0
        }
        const {
            subs: e
        } = kc(this);
        let n = 0;
        for (const {
                listeners: r
            } of e.values()) n += r.length;
        return n
    }
    async listeners(t) {
        if (t) {
            const e = await xc(this, t);
            return e ? e.listeners.map((({
                listener: t
            }) => t)) : []
        }
        const {
            subs: e
        } = kc(this);
        let n = [];
        for (const {
                listeners: r
            } of e.values()) n = n.concat(r.map((({
            listener: t
        }) => t)));
        return n
    }
    async off(t, e) {
        const n = await xc(this, t);
        if (!n) return this;
        if (e) {
            const t = n.listeners.map((({
                listener: t
            }) => t)).indexOf(e);
            t >= 0 && n.listeners.splice(t, 1)
        }
        return null != e && 0 !== n.listeners.length || (n.stop(), kc(this).subs.delete(n.tag)), this
    }
    async removeAllListeners(t) {
        if (t) {
            const e = await xc(this, t);
            if (!e) return this;
            e.stop(), kc(this).subs.delete(e.tag)
        } else {
            const {
                subs: t
            } = kc(this);
            for (const {
                    tag: e,
                    stop: n
                } of t.values()) n(), t.delete(e)
        }
        return this
    }
    async addListener(t, e) {
        return await this.on(t, e)
    }
    async removeListener(t, e) {
        return await this.off(t, e)
    }
    static buildClass(e) {
        return class extends t {
            constructor(t, n = null) {
                super(t, e, n)
            }
        }
    }
    static from(t, e, n) {
        null == n && (n = null);
        return new this(t, e, n)
    }
};
class Tc extends(function() {
    return Bc
}()) {}

function Ic(t) {
    return t.match(/^ipfs:\/\/ipfs\//i) ? t = t.substring(12) : t.match(/^ipfs:\/\//i) ? t = t.substring(7) : Pn(!1, "unsupported IPFS format", "link", t), `https://gateway.ipfs.io/ipfs/${t}`
}
class Mc {
    constructor(t) {
        nn(this, "name"), wn(this, {
            name: t
        })
    }
    connect(t) {
        return this
    }
    supportsCoinType(t) {
        return !1
    }
    async encodeAddress(t, e) {
        throw new Error("unsupported coin")
    }
    async decodeAddress(t, e) {
        throw new Error("unsupported coin")
    }
}
const Fc = new RegExp("^(ipfs)://(.*)$", "i"),
    Dc = [new RegExp("^(https)://(.*)$", "i"), new RegExp("^(data):(.*)$", "i"), Fc, new RegExp("^eip155:[0-9]+/(erc[0-9]+):(.*)$", "i")],
    Sc = class t {
        constructor(t, e, n) {
            an(this, Lt), nn(this, "provider"), nn(this, "address"), nn(this, "name"), an(this, St), an(this, Ut), wn(this, {
                provider: t,
                address: e,
                name: n
            }), on(this, St, null), on(this, Ut, new Tc(e, ["function supportsInterface(bytes4) view returns (bool)", "function resolve(bytes, bytes) view returns (bytes)", "function addr(bytes32) view returns (address)", "function addr(bytes32, uint) view returns (bytes)", "function text(bytes32, string) view returns (string)", "function contenthash(bytes32) view returns (bytes)"], t))
        }
        async supportsWildcard() {
            return null == sn(this, St) && on(this, St, (async () => {
                try {
                    return await sn(this, Ut).supportsInterface("0x9061b923")
                } catch (t) {
                    if (bn(t, "CALL_EXCEPTION")) return !1;
                    throw on(this, St, null), t
                }
            })()), await sn(this, St)
        }
        async getAddress(t) {
            if (null == t && (t = 60), 60 === t) try {
                const t = await cn(this, Lt, Gt).call(this, "addr(bytes32)");
                return null == t || t === as ? null : t
            } catch (s) {
                if (bn(s, "CALL_EXCEPTION")) return null;
                throw s
            }
            if (t >= 0 && t < 2147483648) {
                let e = t + 2147483648;
                const n = await cn(this, Lt, Gt).call(this, "addr(bytes32,uint)", [e]);
                if (Bn(n, 20)) return Ps(n)
            }
            let e = null;
            for (const i of this.provider.plugins)
                if (i instanceof Mc && i.supportsCoinType(t)) {
                    e = i;
                    break
                }
            if (null == e) return null;
            const n = await cn(this, Lt, Gt).call(this, "addr(bytes32,uint)", [t]);
            if (null == n || "0x" === n) return null;
            const r = await e.decodeAddress(t, n);
            if (null != r) return r;
            kn(!1, "invalid coin data", "UNSUPPORTED_OPERATION", {
                operation: `getAddress(${t})`,
                info: {
                    coinType: t,
                    data: n
                }
            })
        }
        async getText(t) {
            const e = await cn(this, Lt, Gt).call(this, "text(bytes32,string)", [t]);
            return null == e || "0x" === e ? null : e
        }
        async getContentHash() {
            const t = await cn(this, Lt, Gt).call(this, "contenthash(bytes32)");
            if (null == t || "0x" === t) return null;
            const e = t.match(/^0x(e3010170|e5010172)(([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f]*))$/);
            if (e) {
                const t = "e3010170" === e[1] ? "ipfs" : "ipns",
                    n = parseInt(e[4], 16);
                if (e[5].length === 2 * n) return `${t}://${function(t){const e=On(t);let n=Yn(e),r="";for(;n;)r=$n[Number(n%tr)]+r,n/=tr;for(let s=0;s<e.length&&!e[s];s++)r=$n[0]+r;return r}("0x"+e[2])}`
            }
            const n = t.match(/^0xe40101fa011b20([0-9a-f]*)$/);
            if (n && 64 === n[1].length) return `bzz://${n[1]}`;
            kn(!1, "invalid or unsupported content hash data", "UNSUPPORTED_OPERATION", {
                operation: "getContentHash()",
                info: {
                    data: t
                }
            })
        }
        async getAvatar() {
            return (await this._getAvatar()).url
        }
        async _getAvatar() {
            const t = [{
                type: "name",
                value: this.name
            }];
            try {
                const r = await this.getText("avatar");
                if (null == r) return t.push({
                    type: "!avatar",
                    value: ""
                }), {
                    url: null,
                    linkage: t
                };
                t.push({
                    type: "avatar",
                    value: r
                });
                for (let s = 0; s < Dc.length; s++) {
                    const i = r.match(Dc[s]);
                    if (null == i) continue;
                    const a = i[1].toLowerCase();
                    switch (a) {
                        case "https":
                        case "data":
                            return t.push({
                                type: "url",
                                value: r
                            }), {
                                linkage: t,
                                url: r
                            };
                        case "ipfs":
                            {
                                const e = Ic(r);
                                return t.push({
                                    type: "ipfs",
                                    value: r
                                }),
                                t.push({
                                    type: "url",
                                    value: e
                                }),
                                {
                                    linkage: t,
                                    url: e
                                }
                            }
                        case "erc721":
                        case "erc1155":
                            {
                                const s = "erc721" === a ? "tokenURI(uint256)" : "uri(uint256)";t.push({
                                    type: a,
                                    value: r
                                });
                                const o = await this.getAddress();
                                if (null == o) return t.push({
                                    type: "!owner",
                                    value: ""
                                }), {
                                    url: null,
                                    linkage: t
                                };
                                const c = (i[2] || "").split("/");
                                if (2 !== c.length) return t.push({
                                    type: `!${a}caip`,
                                    value: i[2] || ""
                                }), {
                                    url: null,
                                    linkage: t
                                };
                                const l = c[1],
                                    u = new Tc(c[0], ["function tokenURI(uint) view returns (string)", "function ownerOf(uint) view returns (address)", "function uri(uint) view returns (string)", "function balanceOf(address, uint256) view returns (uint)"], this.provider);
                                if ("erc721" === a) {
                                    const e = await u.ownerOf(l);
                                    if (o !== e) return t.push({
                                        type: "!owner",
                                        value: e
                                    }), {
                                        url: null,
                                        linkage: t
                                    };
                                    t.push({
                                        type: "owner",
                                        value: e
                                    })
                                } else if ("erc1155" === a) {
                                    const e = await u.balanceOf(o, l);
                                    if (!e) return t.push({
                                        type: "!balance",
                                        value: "0"
                                    }), {
                                        url: null,
                                        linkage: t
                                    };
                                    t.push({
                                        type: "balance",
                                        value: e.toString()
                                    })
                                }
                                let h = await u[s](l);
                                if (null == h || "0x" === h) return t.push({
                                    type: "!metadata-url",
                                    value: ""
                                }), {
                                    url: null,
                                    linkage: t
                                };t.push({
                                    type: "metadata-url-base",
                                    value: h
                                }),
                                "erc1155" === a && (h = h.replace("{id}", qn(l, 32).substring(2)), t.push({
                                    type: "metadata-url-expanded",
                                    value: h
                                })),
                                h.match(/^ipfs:/i) && (h = Ic(h)),
                                t.push({
                                    type: "metadata-url",
                                    value: h
                                });
                                let f = {};
                                const p = await new wr(h).send();p.assertOk();
                                try {
                                    f = p.bodyJson
                                } catch (e) {
                                    try {
                                        t.push({
                                            type: "!metadata",
                                            value: p.bodyText
                                        })
                                    } catch (n) {
                                        const e = p.body;
                                        return e && t.push({
                                            type: "!metadata",
                                            value: Mn(e)
                                        }), {
                                            url: null,
                                            linkage: t
                                        }
                                    }
                                    return {
                                        url: null,
                                        linkage: t
                                    }
                                }
                                if (!f) return t.push({
                                    type: "!metadata",
                                    value: ""
                                }), {
                                    url: null,
                                    linkage: t
                                };t.push({
                                    type: "metadata",
                                    value: JSON.stringify(f)
                                });
                                let d = f.image;
                                if ("string" != typeof d) return t.push({
                                    type: "!imageUrl",
                                    value: ""
                                }), {
                                    url: null,
                                    linkage: t
                                };
                                if (d.match(/^(https:\/\/|data:)/i));
                                else {
                                    if (null == d.match(Fc)) return t.push({
                                        type: "!imageUrl-ipfs",
                                        value: d
                                    }), {
                                        url: null,
                                        linkage: t
                                    };
                                    t.push({
                                        type: "imageUrl-ipfs",
                                        value: d
                                    }), d = Ic(d)
                                }
                                return t.push({
                                    type: "url",
                                    value: d
                                }),
                                {
                                    linkage: t,
                                    url: d
                                }
                            }
                    }
                }
            } catch (e) {}
            return {
                linkage: t,
                url: null
            }
        }
        static async getEnsAddress(t) {
            const e = await t.getNetwork(),
                n = e.getPlugin("org.ethers.plugins.network.Ens");
            return kn(n, "network does not support ENS", "UNSUPPORTED_OPERATION", {
                operation: "getEnsAddress",
                info: {
                    network: e
                }
            }), n.address
        }
        static async fromName(e, n) {
            var r;
            let s = n;
            for (;;) {
                if ("" === s || "." === s) return null;
                if ("eth" !== n && "eth" === s) return null;
                const i = await cn(r = t, Qt, Ht).call(r, e, s);
                if (null != i) {
                    const r = new t(e, i, n);
                    return s === n || await r.supportsWildcard() ? r : null
                }
                s = s.split(".").slice(1).join(".")
            }
        }
    };
St = new WeakMap, Ut = new WeakMap, Lt = new WeakSet, Gt = async function(t, e) {
    e = (e || []).slice();
    const n = sn(this, Ut).interface;
    e.unshift(ra(this.name));
    let r = null;
    await this.supportsWildcard() && (r = n.getFunction(t), kn(r, "missing fragment", "UNKNOWN_ERROR", {
        info: {
            funcName: t
        }
    }), e = [sa(this.name, 255), n.encodeFunctionData(r, e)], t = "resolve(bytes,bytes)"), e.push({
        enableCcipRead: !0
    });
    try {
        const s = await sn(this, Ut)[t](...e);
        return r ? n.decodeFunctionResult(r, s)[0] : s
    } catch (s) {
        if (!bn(s, "CALL_EXCEPTION")) throw s
    }
    return null
}, Qt = new WeakSet, Ht = async function(t, e) {
    const n = await Sc.getEnsAddress(t);
    try {
        const r = new Tc(n, ["function resolver(bytes32) view returns (address)"], t),
            s = await r.resolver(ra(e), {
                enableCcipRead: !0
            });
        return s === as ? null : s
    } catch (r) {
        throw r
    }
    return null
}, an(Sc, Qt);
let Uc = Sc;
const Lc = BigInt(0);

function Gc(t, e) {
    return function(n) {
        return null == n ? e : t(n)
    }
}

function Qc(t, e) {
    return n => {
        if (e && null == n) return null;
        if (!Array.isArray(n)) throw new Error("not an array");
        return n.map((e => t(e)))
    }
}

function Hc(t, e) {
    return n => {
        const r = {};
        for (const i in t) {
            let a = i;
            if (e && i in e && !(a in n))
                for (const t of e[i])
                    if (t in n) {
                        a = t;
                        break
                    }
            try {
                const e = t[i](n[a]);
                void 0 !== e && (r[i] = e)
            } catch (s) {
                kn(!1, `invalid value for value.${i} (${s instanceof Error?s.message:"not-an-error"})`, "BAD_DATA", {
                    value: n
                })
            }
        }
        return r
    }
}

function jc(t) {
    return Pn(Bn(t, !0), "invalid data", "value", t), t
}

function Wc(t) {
    return Pn(Bn(t, 32), "invalid hash", "value", t), t
}
const Jc = Hc({
    address: Ps,
    blockHash: Wc,
    blockNumber: Zn,
    data: jc,
    index: Zn,
    removed: Gc((function(t) {
        switch (t) {
            case !0:
            case "true":
                return !0;
            case !1:
            case "false":
                return !1
        }
        Pn(!1, `invalid boolean; ${JSON.stringify(t)}`, "value", t)
    }), !1),
    topics: Qc(Wc),
    transactionHash: Wc,
    transactionIndex: Zn
}, {
    index: ["logIndex"]
});
const Vc = Hc({
    hash: Gc(Wc),
    parentHash: Wc,
    parentBeaconBlockRoot: Gc(Wc, null),
    number: Zn,
    timestamp: Zn,
    nonce: Gc(jc),
    difficulty: Vn,
    gasLimit: Vn,
    gasUsed: Vn,
    stateRoot: Gc(Wc, null),
    receiptsRoot: Gc(Wc, null),
    blobGasUsed: Gc(Vn, null),
    excessBlobGas: Gc(Vn, null),
    miner: Gc(Ps),
    prevRandao: Gc(Wc, null),
    extraData: jc,
    baseFeePerGas: Gc(Vn)
}, {
    prevRandao: ["mixHash"]
});
const zc = Hc({
    transactionIndex: Zn,
    blockNumber: Zn,
    transactionHash: Wc,
    address: Ps,
    topics: Qc(Wc),
    data: jc,
    index: Zn,
    blockHash: Wc
}, {
    index: ["logIndex"]
});
const Kc = Hc({
    to: Gc(Ps, null),
    from: Gc(Ps, null),
    contractAddress: Gc(Ps, null),
    index: Zn,
    root: Gc(Mn),
    gasUsed: Vn,
    blobGasUsed: Gc(Vn, null),
    logsBloom: Gc(jc),
    blockHash: Wc,
    hash: Wc,
    logs: Qc((function(t) {
        return zc(t)
    })),
    blockNumber: Zn,
    cumulativeGasUsed: Vn,
    effectiveGasPrice: Gc(Vn),
    blobGasPrice: Gc(Vn, null),
    status: Gc(Zn),
    type: Gc(Zn, 0)
}, {
    effectiveGasPrice: ["gasPrice"],
    hash: ["transactionHash"],
    index: ["transactionIndex"]
});

function Yc(t) {
    t.to && Vn(t.to) === Lc && (t.to = "0x0000000000000000000000000000000000000000");
    const e = Hc({
        hash: Wc,
        index: Gc(Zn, void 0),
        type: t => "0x" === t || null == t ? 0 : Zn(t),
        accessList: Gc(aa, null),
        blobVersionedHashes: Gc(Qc(Wc, !0), null),
        blockHash: Gc(Wc, null),
        blockNumber: Gc(Zn, null),
        transactionIndex: Gc(Zn, null),
        from: Ps,
        gasPrice: Gc(Vn),
        maxPriorityFeePerGas: Gc(Vn),
        maxFeePerGas: Gc(Vn),
        maxFeePerBlobGas: Gc(Vn, null),
        gasLimit: Vn,
        to: Gc(Ps, null),
        value: Vn,
        nonce: Zn,
        data: jc,
        creates: Gc(Ps, null),
        chainId: Gc(Vn, null)
    }, {
        data: ["input"],
        gasLimit: ["gas"],
        index: ["transactionIndex"]
    })(t);
    if (null == e.to && null == e.creates && (e.creates = function(t) {
            const e = Ps(t.from);
            let n = Vn(t.nonce, "tx.nonce").toString(16);
            return n = "0" === n ? "0x" : n.length % 2 ? "0x0" + n : "0x" + n, Ps(Sn(es(Br([e, n])), 12))
        }(e)), 1 !== t.type && 2 !== t.type || null != t.accessList || (e.accessList = []), t.signature ? e.signature = ys.from(t.signature) : e.signature = ys.from(t), null == e.chainId) {
        const t = e.signature.legacyChainId;
        null != t && (e.chainId = t)
    }
    return e.blockHash && Vn(e.blockHash) === Lc && (e.blockHash = null), e
}
class Zc {
    constructor(t) {
        nn(this, "name"), wn(this, {
            name: t
        })
    }
    clone() {
        return new Zc(this.name)
    }
}
class qc extends Zc {
    constructor(t, e) {
        null == t && (t = 0), super(`org.ethers.network.plugins.GasCost#${t||0}`), nn(this, "effectiveBlock"), nn(this, "txBase"), nn(this, "txCreate"), nn(this, "txDataZero"), nn(this, "txDataNonzero"), nn(this, "txAccessListStorageKey"), nn(this, "txAccessListAddress");
        const n = {
            effectiveBlock: t
        };

        function r(t, r) {
            let s = (e || {})[t];
            null == s && (s = r), Pn("number" == typeof s, `invalud value for ${t}`, "costs", e), n[t] = s
        }
        r("txBase", 21e3), r("txCreate", 32e3), r("txDataZero", 4), r("txDataNonzero", 16), r("txAccessListStorageKey", 1900), r("txAccessListAddress", 2400), wn(this, n)
    }
    clone() {
        return new qc(this.effectiveBlock, this)
    }
}
class Xc extends Zc {
    constructor(t, e) {
        super("org.ethers.plugins.network.Ens"), nn(this, "address"), nn(this, "targetNetwork"), wn(this, {
            address: t || "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
            targetNetwork: null == e ? 1 : e
        })
    }
    clone() {
        return new Xc(this.address, this.targetNetwork)
    }
}
class _c extends Zc {
    constructor(t, e) {
        super("org.ethers.plugins.network.FetchUrlFeeDataPlugin"), an(this, jt), an(this, Wt), on(this, jt, t), on(this, Wt, e)
    }
    get url() {
        return sn(this, jt)
    }
    get processFunc() {
        return sn(this, Wt)
    }
    clone() {
        return this
    }
}
jt = new WeakMap, Wt = new WeakMap;
const $c = new Map;
Jt = new WeakMap, Vt = new WeakMap, zt = new WeakMap;
let tl = class t {
    constructor(t, e) {
        an(this, Jt), an(this, Vt), an(this, zt), on(this, Jt, t), on(this, Vt, Vn(e)), on(this, zt, new Map)
    }
    toJSON() {
        return {
            name: this.name,
            chainId: String(this.chainId)
        }
    }
    get name() {
        return sn(this, Jt)
    }
    set name(t) {
        on(this, Jt, t)
    }
    get chainId() {
        return sn(this, Vt)
    }
    set chainId(t) {
        on(this, Vt, Vn(t, "chainId"))
    }
    matches(t) {
        if (null == t) return !1;
        if ("string" == typeof t) {
            try {
                return this.chainId === Vn(t)
            } catch (e) {}
            return this.name === t
        }
        if ("number" == typeof t || "bigint" == typeof t) {
            try {
                return this.chainId === Vn(t)
            } catch (e) {}
            return !1
        }
        if ("object" == typeof t) {
            if (null != t.chainId) {
                try {
                    return this.chainId === Vn(t.chainId)
                } catch (e) {}
                return !1
            }
            return null != t.name && this.name === t.name
        }
        return !1
    }
    get plugins() {
        return Array.from(sn(this, zt).values())
    }
    attachPlugin(t) {
        if (sn(this, zt).get(t.name)) throw new Error(`cannot replace existing plugin: ${t.name} `);
        return sn(this, zt).set(t.name, t.clone()), this
    }
    getPlugin(t) {
        return sn(this, zt).get(t) || null
    }
    getPlugins(t) {
        return this.plugins.filter((e => e.name.split("#")[0] === t))
    }
    clone() {
        const e = new t(this.name, this.chainId);
        return this.plugins.forEach((t => {
            e.attachPlugin(t.clone())
        })), e
    }
    computeIntrinsicGas(t) {
        const e = this.getPlugin("org.ethers.plugins.network.GasCost") || new qc;
        let n = e.txBase;
        if (null == t.to && (n += e.txCreate), t.data)
            for (let r = 2; r < t.data.length; r += 2) "00" === t.data.substring(r, r + 2) ? n += e.txDataZero : n += e.txDataNonzero;
        if (t.accessList) {
            const r = aa(t.accessList);
            for (const t in r) n += e.txAccessListAddress + e.txAccessListStorageKey * r[t].storageKeys.length
        }
        return n
    }
    static from(e) {
        if (function() {
                if (rl) return;

                function t(t, e, n) {
                    const r = function() {
                        const r = new tl(t, e);
                        return null != n.ensNetwork && r.attachPlugin(new Xc(null, n.ensNetwork)), r.attachPlugin(new qc), (n.plugins || []).forEach((t => {
                            r.attachPlugin(t)
                        })), r
                    };
                    tl.register(t, r), tl.register(e, r), n.altNames && n.altNames.forEach((t => {
                        tl.register(t, r)
                    }))
                }
                rl = !0, t("mainnet", 1, {
                    ensNetwork: 1,
                    altNames: ["homestead"]
                }), t("ropsten", 3, {
                    ensNetwork: 3
                }), t("rinkeby", 4, {
                    ensNetwork: 4
                }), t("goerli", 5, {
                    ensNetwork: 5
                }), t("kovan", 42, {
                    ensNetwork: 42
                }), t("sepolia", 11155111, {
                    ensNetwork: 11155111
                }), t("holesky", 17e3, {
                    ensNetwork: 17e3
                }), t("classic", 61, {}), t("classicKotti", 6, {}), t("arbitrum", 42161, {
                    ensNetwork: 1
                }), t("arbitrum-goerli", 421613, {}), t("arbitrum-sepolia", 421614, {}), t("base", 8453, {
                    ensNetwork: 1
                }), t("base-goerli", 84531, {}), t("base-sepolia", 84532, {}), t("bnb", 56, {
                    ensNetwork: 1
                }), t("bnbt", 97, {}), t("linea", 59144, {
                    ensNetwork: 1
                }), t("linea-goerli", 59140, {}), t("linea-sepolia", 59141, {}), t("matic", 137, {
                    ensNetwork: 1,
                    plugins: [nl("https://gasstation.polygon.technology/v2")]
                }), t("matic-amoy", 80002, {}), t("matic-mumbai", 80001, {
                    altNames: ["maticMumbai", "maticmum"],
                    plugins: [nl("https://gasstation-testnet.polygon.technology/v2")]
                }), t("optimism", 10, {
                    ensNetwork: 1,
                    plugins: []
                }), t("optimism-goerli", 420, {}), t("optimism-sepolia", 11155420, {}), t("xdai", 100, {
                    ensNetwork: 1
                })
            }(), null == e) return t.from("mainnet");
        if ("number" == typeof e && (e = BigInt(e)), "string" == typeof e || "bigint" == typeof e) {
            const n = $c.get(e);
            if (n) return n();
            if ("bigint" == typeof e) return new t("unknown", e);
            Pn(!1, "unknown network", "network", e)
        }
        if ("function" == typeof e.clone) {
            return e.clone()
        }
        if ("object" == typeof e) {
            Pn("string" == typeof e.name && "number" == typeof e.chainId, "invalid network object name or chainId", "network", e);
            const n = new t(e.name, e.chainId);
            return (e.ensAddress || null != e.ensNetwork) && n.attachPlugin(new Xc(e.ensAddress, e.ensNetwork)), n
        }
        Pn(!1, "invalid network", "network", e)
    }
    static register(t, e) {
        "number" == typeof t && (t = BigInt(t));
        const n = $c.get(t);
        n && Pn(!1, `conflicting network for ${JSON.stringify(n.name)}`, "nameOrChainId", t), $c.set(t, e)
    }
};

function el(t, e) {
    const n = String(t);
    if (!n.match(/^[0-9.]+$/)) throw new Error(`invalid gwei value: ${t}`);
    const r = n.split(".");
    if (1 === r.length && r.push(""), 2 !== r.length) throw new Error(`invalid gwei value: ${t}`);
    for (; r[1].length < e;) r[1] += "0";
    if (r[1].length > 9) {
        let t = BigInt(r[1].substring(0, 9));
        r[1].substring(9).match(/^0+$/) || t++, r[1] = t.toString()
    }
    return BigInt(r[0] + r[1])
}

function nl(t) {
    return new _c(t, (async (t, e, n) => {
        let r;
        n.setHeader("User-Agent", "ethers");
        try {
            const [e, s] = await Promise.all([n.send(), t()]);
            r = e;
            const i = r.bodyJson.standard;
            return {
                gasPrice: s.gasPrice,
                maxFeePerGas: el(i.maxFee, 9),
                maxPriorityFeePerGas: el(i.maxPriorityFee, 9)
            }
        } catch (s) {
            kn(!1, `error encountered with polygon gas station (${JSON.stringify(n.url)})`, "SERVER_ERROR", {
                request: n,
                response: r,
                error: s
            })
        }
    }))
}
let rl = !1;

function sl(t) {
    return JSON.parse(JSON.stringify(t))
}
class il {
    constructor(t) {
        an(this, Xt), an(this, Kt), an(this, Yt), an(this, Zt), an(this, qt), on(this, Kt, t), on(this, Yt, null), on(this, Zt, 4e3), on(this, qt, -2)
    }
    get pollingInterval() {
        return sn(this, Zt)
    }
    set pollingInterval(t) {
        on(this, Zt, t)
    }
    start() {
        sn(this, Yt) || (on(this, Yt, sn(this, Kt)._setTimeout(cn(this, Xt, _t).bind(this), sn(this, Zt))), cn(this, Xt, _t).call(this))
    }
    stop() {
        sn(this, Yt) && (sn(this, Kt)._clearTimeout(sn(this, Yt)), on(this, Yt, null))
    }
    pause(t) {
        this.stop(), t && on(this, qt, -2)
    }
    resume() {
        this.start()
    }
}
Kt = new WeakMap, Yt = new WeakMap, Zt = new WeakMap, qt = new WeakMap, Xt = new WeakSet, _t = async function() {
    try {
        const t = await sn(this, Kt).getBlockNumber();
        if (-2 === sn(this, qt)) return void on(this, qt, t);
        if (t !== sn(this, qt)) {
            for (let e = sn(this, qt) + 1; e <= t; e++) {
                if (null == sn(this, Yt)) return;
                await sn(this, Kt).emit("block", e)
            }
            on(this, qt, t)
        }
    } catch (t) {}
    null != sn(this, Yt) && on(this, Yt, sn(this, Kt)._setTimeout(cn(this, Xt, _t).bind(this), sn(this, Zt)))
};
class al {
    constructor(t) {
        an(this, $t), an(this, te), an(this, ee), on(this, $t, t), on(this, ee, !1), on(this, te, (t => {
            this._poll(t, sn(this, $t))
        }))
    }
    async _poll(t, e) {
        throw new Error("sub-classes must override this")
    }
    start() {
        sn(this, ee) || (on(this, ee, !0), sn(this, te).call(this, -2), sn(this, $t).on("block", sn(this, te)))
    }
    stop() {
        sn(this, ee) && (on(this, ee, !1), sn(this, $t).off("block", sn(this, te)))
    }
    pause(t) {
        this.stop()
    }
    resume() {
        this.start()
    }
}
$t = new WeakMap, te = new WeakMap, ee = new WeakMap;
class ol extends al {
    constructor(t, e) {
        super(t), an(this, ne), an(this, re), on(this, ne, e), on(this, re, -2)
    }
    pause(t) {
        t && on(this, re, -2), super.pause(t)
    }
    async _poll(t, e) {
        const n = await e.getBlock(sn(this, ne));
        null != n && (-2 === sn(this, re) ? on(this, re, n.number) : n.number > sn(this, re) && (e.emit(sn(this, ne), n.number), on(this, re, n.number)))
    }
}
ne = new WeakMap, re = new WeakMap;
class cl extends al {
    constructor(t, e) {
        super(t), an(this, se), on(this, se, sl(e))
    }
    async _poll(t, e) {
        throw new Error("@TODO")
    }
}
se = new WeakMap;
class ll extends al {
    constructor(t, e) {
        super(t), an(this, ie), on(this, ie, e)
    }
    async _poll(t, e) {
        const n = await e.getTransactionReceipt(sn(this, ie));
        n && e.emit(sn(this, ie), n)
    }
}
ie = new WeakMap;
class ul {
    constructor(t, e) {
        an(this, he), an(this, ae), an(this, oe), an(this, ce), an(this, le), an(this, ue), on(this, ae, t), on(this, oe, sl(e)), on(this, ce, cn(this, he, fe).bind(this)), on(this, le, !1), on(this, ue, -2)
    }
    start() {
        sn(this, le) || (on(this, le, !0), -2 === sn(this, ue) && sn(this, ae).getBlockNumber().then((t => {
            on(this, ue, t)
        })), sn(this, ae).on("block", sn(this, ce)))
    }
    stop() {
        sn(this, le) && (on(this, le, !1), sn(this, ae).off("block", sn(this, ce)))
    }
    pause(t) {
        this.stop(), t && on(this, ue, -2)
    }
    resume() {
        this.start()
    }
}
ae = new WeakMap, oe = new WeakMap, ce = new WeakMap, le = new WeakMap, ue = new WeakMap, he = new WeakSet, fe = async function(t) {
    if (-2 === sn(this, ue)) return;
    const e = sl(sn(this, oe));
    e.fromBlock = sn(this, ue) + 1, e.toBlock = t;
    const n = await sn(this, ae).getLogs(e);
    if (0 !== n.length)
        for (const r of n) sn(this, ae).emit(sn(this, oe), r), on(this, ue, r.blockNumber);
    else sn(this, ue) < t - 60 && on(this, ue, t - 60)
};
const hl = BigInt(2);

function fl(t) {
    return t && "function" == typeof t.then
}

function pl(t, e) {
    return t + ":" + JSON.stringify(e, ((t, e) => {
        if (null == e) return "null";
        if ("bigint" == typeof e) return `bigint:${e.toString()}`;
        if ("string" == typeof e) return e.toLowerCase();
        if ("object" == typeof e && !Array.isArray(e)) {
            const t = Object.keys(e);
            return t.sort(), t.reduce(((t, n) => (t[n] = e[n], t)), {})
        }
        return e
    }))
}
class dl {
    constructor(t) {
        nn(this, "name"), wn(this, {
            name: t
        })
    }
    start() {}
    stop() {}
    pause(t) {}
    resume() {}
}

function gl(t) {
    return (t = Array.from(new Set(t).values())).sort(), t
}
async function ml(t, e) {
    if (null == t) throw new Error("invalid event");
    if (Array.isArray(t) && (t = {
            topics: t
        }), "string" == typeof t) switch (t) {
        case "block":
        case "debug":
        case "error":
        case "finalized":
        case "network":
        case "pending":
        case "safe":
            return {
                type: t,
                tag: t
            }
    }
    if (Bn(t, 32)) {
        const e = t.toLowerCase();
        return {
            type: "transaction",
            tag: pl("tx", {
                hash: e
            }),
            hash: e
        }
    }
    if (t.orphan) {
        const e = t;
        return {
            type: "orphan",
            tag: pl("orphan", e),
            filter: (n = e, JSON.parse(JSON.stringify(n)))
        }
    }
    var n;
    if (t.address || t.topics) {
        const n = t,
            r = {
                topics: (n.topics || []).map((t => null == t ? null : Array.isArray(t) ? gl(t.map((t => t.toLowerCase()))) : t.toLowerCase()))
            };
        if (n.address) {
            const t = [],
                s = [],
                i = n => {
                    Bn(n) ? t.push(n) : s.push((async () => {
                        t.push(await Cs(n, e))
                    })())
                };
            Array.isArray(n.address) ? n.address.forEach(i) : i(n.address), s.length && await Promise.all(s), r.address = gl(t.map((t => t.toLowerCase())))
        }
        return {
            filter: r,
            tag: pl("event", r),
            type: "event"
        }
    }
    Pn(!1, "unknown ProviderEvent", "event", t)
}

function yl() {
    return (new Date).getTime()
}
const wl = {
    cacheTimeout: 250,
    pollingInterval: 4e3
};
class Al {
    constructor(t, e) {
        if (an(this, xe), an(this, pe), an(this, de), an(this, ge), an(this, me), an(this, ye), an(this, we), an(this, Ae), an(this, be), an(this, ve), an(this, Ee), an(this, ke), an(this, Pe), on(this, Pe, Object.assign({}, wl, e || {})), "any" === t) on(this, we, !0), on(this, ye, null);
        else if (t) {
            const e = tl.from(t);
            on(this, we, !1), on(this, ye, Promise.resolve(e)), setTimeout((() => {
                this.emit("network", e, null)
            }), 0)
        } else on(this, we, !1), on(this, ye, null);
        on(this, be, -1), on(this, Ae, new Map), on(this, pe, new Map), on(this, de, new Map), on(this, ge, null), on(this, me, !1), on(this, ve, 1), on(this, Ee, new Map), on(this, ke, !1)
    }
    get pollingInterval() {
        return sn(this, Pe).pollingInterval
    }
    get provider() {
        return this
    }
    get plugins() {
        return Array.from(sn(this, de).values())
    }
    attachPlugin(t) {
        if (sn(this, de).get(t.name)) throw new Error(`cannot replace existing plugin: ${t.name} `);
        return sn(this, de).set(t.name, t.connect(this)), this
    }
    getPlugin(t) {
        return sn(this, de).get(t) || null
    }
    get disableCcipRead() {
        return sn(this, ke)
    }
    set disableCcipRead(t) {
        on(this, ke, !!t)
    }
    async ccipReadFetch(t, e, n) {
        if (this.disableCcipRead || 0 === n.length || null == t.to) return null;
        const r = t.to.toLowerCase(),
            s = e.toLowerCase(),
            i = [];
        for (let o = 0; o < n.length; o++) {
            const e = n[o],
                c = e.replace("{sender}", r).replace("{data}", s),
                l = new wr(c); - 1 === e.indexOf("{data}") && (l.body = {
                data: s,
                sender: r
            }), this.emit("debug", {
                action: "sendCcipReadFetchRequest",
                request: l,
                index: o,
                urls: n
            });
            let u, h = "unknown error";
            try {
                u = await l.send()
            } catch (a) {
                i.push(a.message), this.emit("debug", {
                    action: "receiveCcipReadFetchError",
                    request: l,
                    result: {
                        error: a
                    }
                });
                continue
            }
            try {
                const t = u.bodyJson;
                if (t.data) return this.emit("debug", {
                    action: "receiveCcipReadFetchResult",
                    request: l,
                    result: t
                }), t.data;
                t.message && (h = t.message), this.emit("debug", {
                    action: "receiveCcipReadFetchError",
                    request: l,
                    result: t
                })
            } catch (a) {}
            kn(u.statusCode < 400 || u.statusCode >= 500, `response not found during CCIP fetch: ${h}`, "OFFCHAIN_FAULT", {
                reason: "404_MISSING_RESOURCE",
                transaction: t,
                info: {
                    url: e,
                    errorMessage: h
                }
            }), i.push(h)
        }
        kn(!1, `error encountered during CCIP fetch: ${i.map((t=>JSON.stringify(t))).join(", ")}`, "OFFCHAIN_FAULT", {
            reason: "500_SERVER_ERROR",
            transaction: t,
            info: {
                urls: n,
                errorMessages: i
            }
        })
    }
    _wrapBlock(t, e) {
        return new Xo(function(t) {
            const e = Vc(t);
            return e.transactions = t.transactions.map((t => "string" == typeof t ? t : Yc(t))), e
        }(t), this)
    }
    _wrapLog(t, e) {
        return new _o(function(t) {
            return Jc(t)
        }(t), this)
    }
    _wrapTransactionReceipt(t, e) {
        return new $o(function(t) {
            return Kc(t)
        }(t), this)
    }
    _wrapTransactionResponse(t, e) {
        return new tc(Yc(t), this)
    }
    _detectNetwork() {
        kn(!1, "sub-classes must implement this", "UNSUPPORTED_OPERATION", {
            operation: "_detectNetwork"
        })
    }
    async _perform(t) {
        kn(!1, `unsupported method: ${t.method}`, "UNSUPPORTED_OPERATION", {
            operation: t.method,
            info: t
        })
    }
    async getBlockNumber() {
        const t = Zn(await cn(this, xe, Ne).call(this, {
            method: "getBlockNumber"
        }), "%response");
        return sn(this, be) >= 0 && on(this, be, t), t
    }
    _getAddress(t) {
        return Cs(t, this)
    }
    _getBlockTag(t) {
        if (null == t) return "latest";
        switch (t) {
            case "earliest":
                return "0x0";
            case "finalized":
            case "latest":
            case "pending":
            case "safe":
                return t
        }
        return Bn(t) ? Bn(t, 32) ? t : _n(t) : ("bigint" == typeof t && (t = Zn(t, "blockTag")), "number" == typeof t ? t >= 0 ? _n(t) : sn(this, be) >= 0 ? _n(sn(this, be) + t) : this.getBlockNumber().then((e => _n(e + t))) : void Pn(!1, "invalid blockTag", "blockTag", t))
    }
    _getFilter(t) {
        const e = (t.topics || []).map((t => null == t ? null : Array.isArray(t) ? gl(t.map((t => t.toLowerCase()))) : t.toLowerCase())),
            n = "blockHash" in t ? t.blockHash : void 0,
            r = (t, r, s) => {
                let i;
                switch (t.length) {
                    case 0:
                        break;
                    case 1:
                        i = t[0];
                        break;
                    default:
                        t.sort(), i = t
                }
                if (n && (null != r || null != s)) throw new Error("invalid filter");
                const a = {};
                return i && (a.address = i), e.length && (a.topics = e), r && (a.fromBlock = r), s && (a.toBlock = s), n && (a.blockHash = n), a
            };
        let s, i, a = [];
        if (t.address)
            if (Array.isArray(t.address))
                for (const o of t.address) a.push(this._getAddress(o));
            else a.push(this._getAddress(t.address));
        return "fromBlock" in t && (s = this._getBlockTag(t.fromBlock)), "toBlock" in t && (i = this._getBlockTag(t.toBlock)), a.filter((t => "string" != typeof t)).length || null != s && "string" != typeof s || null != i && "string" != typeof i ? Promise.all([Promise.all(a), s, i]).then((t => r(t[0], t[1], t[2]))) : r(a, s, i)
    }
    _getTransactionRequest(t) {
        const e = qo(t),
            n = [];
        if (["to", "from"].forEach((t => {
                if (null == e[t]) return;
                const r = Cs(e[t], this);
                fl(r) ? n.push(async function() {
                    e[t] = await r
                }()) : e[t] = r
            })), null != e.blockTag) {
            const t = this._getBlockTag(e.blockTag);
            fl(t) ? n.push(async function() {
                e.blockTag = await t
            }()) : e.blockTag = t
        }
        return n.length ? async function() {
            return await Promise.all(n), e
        }() : e
    }
    async getNetwork() {
        if (null == sn(this, ye)) {
            const t = (async () => {
                try {
                    const t = await this._detectNetwork();
                    return this.emit("network", t, null), t
                } catch (e) {
                    throw sn(this, ye) === t && on(this, ye, null), e
                }
            })();
            return on(this, ye, t), (await t).clone()
        }
        const t = sn(this, ye),
            [e, n] = await Promise.all([t, this._detectNetwork()]);
        return e.chainId !== n.chainId && (sn(this, we) ? (this.emit("network", n, e), sn(this, ye) === t && on(this, ye, Promise.resolve(n))) : kn(!1, `network changed: ${e.chainId} => ${n.chainId} `, "NETWORK_ERROR", {
            event: "changed"
        })), e.clone()
    }
    async getFeeData() {
        const t = await this.getNetwork(),
            e = async () => {
                const {
                    _block: e,
                    gasPrice: n,
                    priorityFee: r
                } = await yn({
                    _block: cn(this, xe, Be).call(this, "latest", !1),
                    gasPrice: (async () => {
                        try {
                            return Vn(await cn(this, xe, Ne).call(this, {
                                method: "getGasPrice"
                            }), "%response")
                        } catch (t) {}
                        return null
                    })(),
                    priorityFee: (async () => {
                        try {
                            return Vn(await cn(this, xe, Ne).call(this, {
                                method: "getPriorityFee"
                            }), "%response")
                        } catch (t) {}
                        return null
                    })()
                });
                let s = null,
                    i = null;
                const a = this._wrapBlock(e, t);
                return a && a.baseFeePerGas && (i = null != r ? r : BigInt("1000000000"), s = a.baseFeePerGas * hl + i), new Zo(n, s, i)
            },
            n = t.getPlugin("org.ethers.plugins.network.FetchUrlFeeDataPlugin");
        if (n) {
            const t = new wr(n.url),
                r = await n.processFunc(e, this, t);
            return new Zo(r.gasPrice, r.maxFeePerGas, r.maxPriorityFeePerGas)
        }
        return await e()
    }
    async estimateGas(t) {
        let e = this._getTransactionRequest(t);
        return fl(e) && (e = await e), Vn(await cn(this, xe, Ne).call(this, {
            method: "estimateGas",
            transaction: e
        }), "%response")
    }
    async call(t) {
        const {
            tx: e,
            blockTag: n
        } = await yn({
            tx: this._getTransactionRequest(t),
            blockTag: this._getBlockTag(t.blockTag)
        });
        return await cn(this, xe, Oe).call(this, cn(this, xe, Ce).call(this, e, n, t.enableCcipRead ? 0 : -1))
    }
    async getBalance(t, e) {
        return Vn(await cn(this, xe, Re).call(this, {
            method: "getBalance"
        }, t, e), "%response")
    }
    async getTransactionCount(t, e) {
        return Zn(await cn(this, xe, Re).call(this, {
            method: "getTransactionCount"
        }, t, e), "%response")
    }
    async getCode(t, e) {
        return Mn(await cn(this, xe, Re).call(this, {
            method: "getCode"
        }, t, e))
    }
    async getStorage(t, e, n) {
        const r = Vn(e, "position");
        return Mn(await cn(this, xe, Re).call(this, {
            method: "getStorage",
            position: r
        }, t, n))
    }
    async broadcastTransaction(t) {
        const {
            blockNumber: e,
            hash: n,
            network: r
        } = await yn({
            blockNumber: this.getBlockNumber(),
            hash: this._perform({
                method: "broadcastTransaction",
                signedTransaction: t
            }),
            network: this.getNetwork()
        }), s = Pa.from(t);
        if (s.hash !== n) throw new Error("@TODO: the returned hash did not match");
        return this._wrapTransactionResponse(s, r).replaceableTransaction(e)
    }
    async getBlock(t, e) {
        const {
            network: n,
            params: r
        } = await yn({
            network: this.getNetwork(),
            params: cn(this, xe, Be).call(this, t, !!e)
        });
        return null == r ? null : this._wrapBlock(r, n)
    }
    async getTransaction(t) {
        const {
            network: e,
            params: n
        } = await yn({
            network: this.getNetwork(),
            params: cn(this, xe, Ne).call(this, {
                method: "getTransaction",
                hash: t
            })
        });
        return null == n ? null : this._wrapTransactionResponse(n, e)
    }
    async getTransactionReceipt(t) {
        const {
            network: e,
            params: n
        } = await yn({
            network: this.getNetwork(),
            params: cn(this, xe, Ne).call(this, {
                method: "getTransactionReceipt",
                hash: t
            })
        });
        if (null == n) return null;
        if (null == n.gasPrice && null == n.effectiveGasPrice) {
            const e = await cn(this, xe, Ne).call(this, {
                method: "getTransaction",
                hash: t
            });
            if (null == e) throw new Error("report this; could not find tx or effectiveGasPrice");
            n.effectiveGasPrice = e.gasPrice
        }
        return this._wrapTransactionReceipt(n, e)
    }
    async getTransactionResult(t) {
        const {
            result: e
        } = await yn({
            network: this.getNetwork(),
            result: cn(this, xe, Ne).call(this, {
                method: "getTransactionResult",
                hash: t
            })
        });
        return null == e ? null : Mn(e)
    }
    async getLogs(t) {
        let e = this._getFilter(t);
        fl(e) && (e = await e);
        const {
            network: n,
            params: r
        } = await yn({
            network: this.getNetwork(),
            params: cn(this, xe, Ne).call(this, {
                method: "getLogs",
                filter: e
            })
        });
        return r.map((t => this._wrapLog(t, n)))
    }
    _getProvider(t) {
        kn(!1, "provider cannot connect to target network", "UNSUPPORTED_OPERATION", {
            operation: "_getProvider()"
        })
    }
    async getResolver(t) {
        return await Uc.fromName(this, t)
    }
    async getAvatar(t) {
        const e = await this.getResolver(t);
        return e ? await e.getAvatar() : null
    }
    async resolveName(t) {
        const e = await this.getResolver(t);
        return e ? await e.getAddress() : null
    }
    async lookupAddress(t) {
        const e = ra((t = Ps(t)).substring(2).toLowerCase() + ".addr.reverse");
        try {
            const n = await Uc.getEnsAddress(this),
                r = new Tc(n, ["function resolver(bytes32) view returns (address)"], this),
                s = await r.resolver(e);
            if (null == s || s === as) return null;
            const i = new Tc(s, ["function name(bytes32) view returns (string)"], this),
                a = await i.name(e);
            return await this.resolveName(a) !== t ? null : a
        } catch (n) {
            if (bn(n, "BAD_DATA") && "0x" === n.value) return null;
            if (bn(n, "CALL_EXCEPTION")) return null;
            throw n
        }
        return null
    }
    async waitForTransaction(t, e, n) {
        const r = null != e ? e : 1;
        return 0 === r ? this.getTransactionReceipt(t) : new Promise((async (e, s) => {
            let i = null;
            const a = async n => {
                try {
                    const s = await this.getTransactionReceipt(t);
                    if (null != s && n - s.blockNumber + 1 >= r) return e(s), void(i && (clearTimeout(i), i = null))
                } catch (s) {
                    console.log("EEE", s)
                }
                this.once("block", a)
            };
            null != n && (i = setTimeout((() => {
                null != i && (i = null, this.off("block", a), s(En("timeout", "TIMEOUT", {
                    reason: "timeout"
                })))
            }), n)), a(await this.getBlockNumber())
        }))
    }
    async waitForBlock(t) {
        kn(!1, "not implemented yet", "NOT_IMPLEMENTED", {
            operation: "waitForBlock"
        })
    }
    _clearTimeout(t) {
        const e = sn(this, Ee).get(t);
        e && (e.timer && clearTimeout(e.timer), sn(this, Ee).delete(t))
    }
    _setTimeout(t, e) {
        null == e && (e = 0);
        const n = ln(this, ve)._++,
            r = () => {
                sn(this, Ee).delete(n), t()
            };
        if (this.paused) sn(this, Ee).set(n, {
            timer: null,
            func: r,
            time: e
        });
        else {
            const t = setTimeout(r, e);
            sn(this, Ee).set(n, {
                timer: t,
                func: r,
                time: yl()
            })
        }
        return n
    }
    _forEachSubscriber(t) {
        for (const e of sn(this, pe).values()) t(e.subscriber)
    }
    _getSubscriber(t) {
        switch (t.type) {
            case "debug":
            case "error":
            case "network":
                return new dl(t.type);
            case "block":
                {
                    const t = new il(this);
                    return t.pollingInterval = this.pollingInterval,
                    t
                }
            case "safe":
            case "finalized":
                return new ol(this, t.type);
            case "event":
                return new ul(this, t.filter);
            case "transaction":
                return new ll(this, t.hash);
            case "orphan":
                return new cl(this, t.filter)
        }
        throw new Error(`unsupported event: ${t.type}`)
    }
    _recoverSubscriber(t, e) {
        for (const n of sn(this, pe).values())
            if (n.subscriber === t) {
                n.started && n.subscriber.stop(), n.subscriber = e, n.started && e.start(), null != sn(this, ge) && e.pause(sn(this, ge));
                break
            }
    }
    async on(t, e) {
        const n = await cn(this, xe, Ie).call(this, t);
        return n.listeners.push({
            listener: e,
            once: !1
        }), n.started || (n.subscriber.start(), n.started = !0, null != sn(this, ge) && n.subscriber.pause(sn(this, ge))), this
    }
    async once(t, e) {
        const n = await cn(this, xe, Ie).call(this, t);
        return n.listeners.push({
            listener: e,
            once: !0
        }), n.started || (n.subscriber.start(), n.started = !0, null != sn(this, ge) && n.subscriber.pause(sn(this, ge))), this
    }
    async emit(t, ...e) {
        const n = await cn(this, xe, Te).call(this, t, e);
        if (!n || 0 === n.listeners.length) return !1;
        const r = n.listeners.length;
        return n.listeners = n.listeners.filter((({
            listener: n,
            once: r
        }) => {
            const s = new er(this, r ? null : n, t);
            try {
                n.call(this, ...e, s)
            } catch (i) {}
            return !r
        })), 0 === n.listeners.length && (n.started && n.subscriber.stop(), sn(this, pe).delete(n.tag)), r > 0
    }
    async listenerCount(t) {
        if (t) {
            const e = await cn(this, xe, Te).call(this, t);
            return e ? e.listeners.length : 0
        }
        let e = 0;
        for (const {
                listeners: n
            } of sn(this, pe).values()) e += n.length;
        return e
    }
    async listeners(t) {
        if (t) {
            const e = await cn(this, xe, Te).call(this, t);
            return e ? e.listeners.map((({
                listener: t
            }) => t)) : []
        }
        let e = [];
        for (const {
                listeners: n
            } of sn(this, pe).values()) e = e.concat(n.map((({
            listener: t
        }) => t)));
        return e
    }
    async off(t, e) {
        const n = await cn(this, xe, Te).call(this, t);
        if (!n) return this;
        if (e) {
            const t = n.listeners.map((({
                listener: t
            }) => t)).indexOf(e);
            t >= 0 && n.listeners.splice(t, 1)
        }
        return e && 0 !== n.listeners.length || (n.started && n.subscriber.stop(), sn(this, pe).delete(n.tag)), this
    }
    async removeAllListeners(t) {
        if (t) {
            const {
                tag: e,
                started: n,
                subscriber: r
            } = await cn(this, xe, Ie).call(this, t);
            n && r.stop(), sn(this, pe).delete(e)
        } else
            for (const [e, {
                    started: n,
                    subscriber: r
                }] of sn(this, pe)) n && r.stop(), sn(this, pe).delete(e);
        return this
    }
    async addListener(t, e) {
        return await this.on(t, e)
    }
    async removeListener(t, e) {
        return this.off(t, e)
    }
    get destroyed() {
        return sn(this, me)
    }
    destroy() {
        this.removeAllListeners();
        for (const t of sn(this, Ee).keys()) this._clearTimeout(t);
        on(this, me, !0)
    }
    get paused() {
        return null != sn(this, ge)
    }
    set paused(t) {
        !!t !== this.paused && (this.paused ? this.resume() : this.pause(!1))
    }
    pause(t) {
        if (on(this, be, -1), null != sn(this, ge)) {
            if (sn(this, ge) == !!t) return;
            kn(!1, "cannot change pause type; resume first", "UNSUPPORTED_OPERATION", {
                operation: "pause"
            })
        }
        this._forEachSubscriber((e => e.pause(t))), on(this, ge, !!t);
        for (const e of sn(this, Ee).values()) e.timer && clearTimeout(e.timer), e.time = yl() - e.time
    }
    resume() {
        if (null != sn(this, ge)) {
            this._forEachSubscriber((t => t.resume())), on(this, ge, null);
            for (const t of sn(this, Ee).values()) {
                let e = t.time;
                e < 0 && (e = 0), t.time = yl(), setTimeout(t.func, e)
            }
        }
    }
}

function bl(t, e) {
    try {
        const n = vl(t, e);
        if (n) return ir(n)
    } catch (n) {}
    return null
}

function vl(t, e) {
    if ("0x" === t) return null;
    try {
        const n = Zn(Sn(t, e, e + 32)),
            r = Zn(Sn(t, n, n + 32));
        return Sn(t, n + 32, n + 32 + r)
    } catch (n) {}
    return null
}

function El(t) {
    const e = Xn(t);
    if (e.length > 32) throw new Error("internal; should not happen");
    const n = new Uint8Array(32);
    return n.set(e, 32 - e.length), n
}

function kl(t) {
    if (t.length % 32 == 0) return t;
    const e = new Uint8Array(32 * Math.ceil(t.length / 32));
    return e.set(t), e
}
pe = new WeakMap, de = new WeakMap, ge = new WeakMap, me = new WeakMap, ye = new WeakMap, we = new WeakMap, Ae = new WeakMap, be = new WeakMap, ve = new WeakMap, Ee = new WeakMap, ke = new WeakMap, Pe = new WeakMap, xe = new WeakSet, Ne = async function(t) {
    const e = sn(this, Pe).cacheTimeout;
    if (e < 0) return await this._perform(t);
    const n = pl(t.method, t);
    let r = sn(this, Ae).get(n);
    return r || (r = this._perform(t), sn(this, Ae).set(n, r), setTimeout((() => {
        sn(this, Ae).get(n) === r && sn(this, Ae).delete(n)
    }), e)), await r
}, Ce = async function(t, e, n) {
    kn(n < 10, "CCIP read exceeded maximum redirections", "OFFCHAIN_FAULT", {
        reason: "TOO_MANY_REDIRECTS",
        transaction: Object.assign({}, t, {
            blockTag: e,
            enableCcipRead: !0
        })
    });
    const r = qo(t);
    try {
        return Mn(await this._perform({
            method: "call",
            transaction: r,
            blockTag: e
        }))
    } catch (s) {
        if (!this.disableCcipRead && vn(s) && s.data && n >= 0 && "latest" === e && null != r.to && "0x556f1830" === Sn(s.data, 0, 4)) {
            const t = s.data,
                a = await Cs(r.to, this);
            let o;
            try {
                o = function(t) {
                    const e = {
                        sender: "",
                        urls: [],
                        calldata: "",
                        selector: "",
                        extraData: "",
                        errorArgs: []
                    };
                    kn(Dn(t) >= 160, "insufficient OffchainLookup data", "OFFCHAIN_FAULT", {
                        reason: "insufficient OffchainLookup data"
                    });
                    const n = Sn(t, 0, 32);
                    kn(Sn(n, 0, 12) === Sn(Nl, 0, 12), "corrupt OffchainLookup sender", "OFFCHAIN_FAULT", {
                        reason: "corrupt OffchainLookup sender"
                    }), e.sender = Sn(n, 12);
                    try {
                        const n = [],
                            r = Zn(Sn(t, 32, 64)),
                            s = Zn(Sn(t, r, r + 32)),
                            i = Sn(t, r + 32);
                        for (let t = 0; t < s; t++) {
                            const e = bl(i, 32 * t);
                            if (null == e) throw new Error("abort");
                            n.push(e)
                        }
                        e.urls = n
                    } catch (s) {
                        kn(!1, "corrupt OffchainLookup urls", "OFFCHAIN_FAULT", {
                            reason: "corrupt OffchainLookup urls"
                        })
                    }
                    try {
                        const n = vl(t, 64);
                        if (null == n) throw new Error("abort");
                        e.calldata = n
                    } catch (s) {
                        kn(!1, "corrupt OffchainLookup calldata", "OFFCHAIN_FAULT", {
                            reason: "corrupt OffchainLookup calldata"
                        })
                    }
                    kn(Sn(t, 100, 128) === Sn(Nl, 0, 28), "corrupt OffchainLookup callbaackSelector", "OFFCHAIN_FAULT", {
                        reason: "corrupt OffchainLookup callbaackSelector"
                    }), e.selector = Sn(t, 96, 100);
                    try {
                        const n = vl(t, 128);
                        if (null == n) throw new Error("abort");
                        e.extraData = n
                    } catch (s) {
                        kn(!1, "corrupt OffchainLookup extraData", "OFFCHAIN_FAULT", {
                            reason: "corrupt OffchainLookup extraData"
                        })
                    }
                    return e.errorArgs = "sender,urls,calldata,selector,extraData".split(/,/).map((t => e[t])), e
                }(Sn(s.data, 4))
            } catch (i) {
                kn(!1, i.message, "OFFCHAIN_FAULT", {
                    reason: "BAD_DATA",
                    transaction: r,
                    info: {
                        data: t
                    }
                })
            }
            kn(o.sender.toLowerCase() === a.toLowerCase(), "CCIP Read sender mismatch", "CALL_EXCEPTION", {
                action: "call",
                data: t,
                reason: "OffchainLookup",
                transaction: r,
                invocation: null,
                revert: {
                    signature: "OffchainLookup(address,string[],bytes,bytes4,bytes)",
                    name: "OffchainLookup",
                    args: o.errorArgs
                }
            });
            const c = await this.ccipReadFetch(r, o.calldata, o.urls);
            kn(null != c, "CCIP Read failed to fetch data", "OFFCHAIN_FAULT", {
                reason: "FETCH_FAILED",
                transaction: r,
                info: {
                    data: s.data,
                    errorArgs: o.errorArgs
                }
            });
            const l = {
                to: a,
                data: Fn([o.selector, xl([c, o.extraData])])
            };
            this.emit("debug", {
                action: "sendCcipReadCall",
                transaction: l
            });
            try {
                const t = await cn(this, xe, Ce).call(this, l, e, n + 1);
                return this.emit("debug", {
                    action: "receiveCcipReadCallResult",
                    transaction: Object.assign({}, l),
                    result: t
                }), t
            } catch (i) {
                throw this.emit("debug", {
                    action: "receiveCcipReadCallError",
                    transaction: Object.assign({}, l),
                    error: i
                }), i
            }
        }
        throw s
    }
}, Oe = async function(t) {
    const {
        value: e
    } = await yn({
        network: this.getNetwork(),
        value: t
    });
    return e
}, Re = async function(t, e, n) {
    let r = this._getAddress(e),
        s = this._getBlockTag(n);
    return "string" == typeof r && "string" == typeof s || ([r, s] = await Promise.all([r, s])), await cn(this, xe, Oe).call(this, cn(this, xe, Ne).call(this, Object.assign(t, {
        address: r,
        blockTag: s
    })))
}, Be = async function(t, e) {
    if (Bn(t, 32)) return await cn(this, xe, Ne).call(this, {
        method: "getBlock",
        blockHash: t,
        includeTransactions: e
    });
    let n = this._getBlockTag(t);
    return "string" != typeof n && (n = await n), await cn(this, xe, Ne).call(this, {
        method: "getBlock",
        blockTag: n,
        includeTransactions: e
    })
}, Te = async function(t, e) {
    let n = await ml(t, this);
    return "event" === n.type && e && e.length > 0 && !0 === e[0].removed && (n = await ml({
        orphan: "drop-log",
        log: e[0]
    }, this)), sn(this, pe).get(n.tag) || null
}, Ie = async function(t) {
    const e = await ml(t, this),
        n = e.tag;
    let r = sn(this, pe).get(n);
    if (!r) {
        r = {
            subscriber: this._getSubscriber(e),
            tag: n,
            addressableMap: new WeakMap,
            nameMap: new Map,
            started: !1,
            listeners: []
        }, sn(this, pe).set(n, r)
    }
    return r
};
const Pl = new Uint8Array([]);

function xl(t) {
    const e = [];
    let n = 0;
    for (let r = 0; r < t.length; r++) e.push(Pl), n += 32;
    for (let r = 0; r < t.length; r++) {
        const s = On(t[r]);
        e[r] = El(n), e.push(El(s.length)), e.push(kl(s)), n += 32 + 32 * Math.ceil(s.length / 32)
    }
    return Fn(e)
}
const Nl = "0x0000000000000000000000000000000000000000000000000000000000000000";

function Cl(t, e) {
    if (t.provider) return t.provider;
    kn(!1, "missing provider", "UNSUPPORTED_OPERATION", {
        operation: e
    })
}
async function Ol(t, e) {
    let n = qo(e);
    if (null != n.to && (n.to = Cs(n.to, t)), null != n.from) {
        const e = n.from;
        n.from = Promise.all([t.getAddress(), Cs(e, t)]).then((([t, e]) => (Pn(t.toLowerCase() === e.toLowerCase(), "transaction from mismatch", "tx.from", e), t)))
    } else n.from = t.getAddress();
    return await yn(n)
}
class Rl {
    constructor(t) {
        nn(this, "provider"), wn(this, {
            provider: t || null
        })
    }
    async getNonce(t) {
        return Cl(this, "getTransactionCount").getTransactionCount(await this.getAddress(), t)
    }
    async populateCall(t) {
        return await Ol(this, t)
    }
    async populateTransaction(t) {
        const e = Cl(this, "populateTransaction"),
            n = await Ol(this, t);
        null == n.nonce && (n.nonce = await this.getNonce("pending")), null == n.gasLimit && (n.gasLimit = await this.estimateGas(n));
        const r = await this.provider.getNetwork();
        if (null != n.chainId) {
            Pn(Vn(n.chainId) === r.chainId, "transaction chainId mismatch", "tx.chainId", t.chainId)
        } else n.chainId = r.chainId;
        const s = null != n.maxFeePerGas || null != n.maxPriorityFeePerGas;
        if (null == n.gasPrice || 2 !== n.type && !s ? 0 !== n.type && 1 !== n.type || !s || Pn(!1, "pre-eip-1559 transaction do not support maxFeePerGas/maxPriorityFeePerGas", "tx", t) : Pn(!1, "eip-1559 transaction do not support gasPrice", "tx", t), 2 !== n.type && null != n.type || null == n.maxFeePerGas || null == n.maxPriorityFeePerGas)
            if (0 === n.type || 1 === n.type) {
                const t = await e.getFeeData();
                kn(null != t.gasPrice, "network does not support gasPrice", "UNSUPPORTED_OPERATION", {
                    operation: "getGasPrice"
                }), null == n.gasPrice && (n.gasPrice = t.gasPrice)
            } else {
                const t = await e.getFeeData();
                if (null == n.type)
                    if (null != t.maxFeePerGas && null != t.maxPriorityFeePerGas)
                        if (n.type = 2, null != n.gasPrice) {
                            const t = n.gasPrice;
                            delete n.gasPrice, n.maxFeePerGas = t, n.maxPriorityFeePerGas = t
                        } else null == n.maxFeePerGas && (n.maxFeePerGas = t.maxFeePerGas), null == n.maxPriorityFeePerGas && (n.maxPriorityFeePerGas = t.maxPriorityFeePerGas);
                else null != t.gasPrice ? (kn(!s, "network does not support EIP-1559", "UNSUPPORTED_OPERATION", {
                    operation: "populateTransaction"
                }), null == n.gasPrice && (n.gasPrice = t.gasPrice), n.type = 0) : kn(!1, "failed to get consistent fee data", "UNSUPPORTED_OPERATION", {
                    operation: "signer.getFeeData"
                });
                else 2 !== n.type && 3 !== n.type || (null == n.maxFeePerGas && (n.maxFeePerGas = t.maxFeePerGas), null == n.maxPriorityFeePerGas && (n.maxPriorityFeePerGas = t.maxPriorityFeePerGas))
            }
        else n.type = 2;
        return await yn(n)
    }
    async estimateGas(t) {
        return Cl(this, "estimateGas").estimateGas(await this.populateCall(t))
    }
    async call(t) {
        return Cl(this, "call").call(await this.populateCall(t))
    }
    async resolveName(t) {
        const e = Cl(this, "resolveName");
        return await e.resolveName(t)
    }
    async sendTransaction(t) {
        const e = Cl(this, "sendTransaction"),
            n = await this.populateTransaction(t);
        delete n.from;
        const r = Pa.from(n);
        return await e.broadcastTransaction(await this.signTransaction(r))
    }
}
class Bl {
    constructor(t) {
        an(this, Ge), an(this, Me), an(this, Fe), an(this, De), an(this, Se), an(this, Ue), an(this, Le), on(this, Me, t), on(this, Fe, null), on(this, De, cn(this, Ge, Qe).bind(this)), on(this, Se, !1), on(this, Ue, null), on(this, Le, !1)
    }
    _subscribe(t) {
        throw new Error("subclasses must override this")
    }
    _emitResults(t, e) {
        throw new Error("subclasses must override this")
    }
    _recover(t) {
        throw new Error("subclasses must override this")
    }
    start() {
        sn(this, Se) || (on(this, Se, !0), cn(this, Ge, Qe).call(this, -2))
    }
    stop() {
        sn(this, Se) && (on(this, Se, !1), on(this, Le, !0), cn(this, Ge, He).call(this), sn(this, Me).off("block", sn(this, De)))
    }
    pause(t) {
        t && cn(this, Ge, He).call(this), sn(this, Me).off("block", sn(this, De))
    }
    resume() {
        this.start()
    }
}
Me = new WeakMap, Fe = new WeakMap, De = new WeakMap, Se = new WeakMap, Ue = new WeakMap, Le = new WeakMap, Ge = new WeakSet, Qe = async function(t) {
    try {
        null == sn(this, Fe) && on(this, Fe, this._subscribe(sn(this, Me)));
        let t = null;
        try {
            t = await sn(this, Fe)
        } catch (e) {
            if (!bn(e, "UNSUPPORTED_OPERATION") || "eth_newFilter" !== e.operation) throw e
        }
        if (null == t) return on(this, Fe, null), void sn(this, Me)._recoverSubscriber(this, this._recover(sn(this, Me)));
        const n = await sn(this, Me).getNetwork();
        if (sn(this, Ue) || on(this, Ue, n), sn(this, Ue).chainId !== n.chainId) throw new Error("chaid changed");
        if (sn(this, Le)) return;
        const r = await sn(this, Me).send("eth_getFilterChanges", [t]);
        await this._emitResults(sn(this, Me), r)
    } catch (e) {
        console.log("@TODO", e)
    }
    sn(this, Me).once("block", sn(this, De))
}, He = function() {
    const t = sn(this, Fe);
    t && (on(this, Fe, null), t.then((t => {
        sn(this, Me).destroyed || sn(this, Me).send("eth_uninstallFilter", [t])
    })))
};
class Tl extends Bl {
    constructor(t, e) {
        var n;
        super(t), an(this, je), on(this, je, (n = e, JSON.parse(JSON.stringify(n))))
    }
    _recover(t) {
        return new ul(t, sn(this, je))
    }
    async _subscribe(t) {
        return await t.send("eth_newFilter", [sn(this, je)])
    }
    async _emitResults(t, e) {
        for (const n of e) t.emit(sn(this, je), t._wrapLog(n, t._network))
    }
}
je = new WeakMap;
class Il extends Bl {
    async _subscribe(t) {
        return await t.send("eth_newPendingTransactionFilter", [])
    }
    async _emitResults(t, e) {
        for (const n of e) t.emit("pending", n)
    }
}
const Ml = "bigint,boolean,function,number,string,symbol".split(/,/g);

function Fl(t) {
    if (null == t || Ml.indexOf(typeof t) >= 0) return t;
    if ("function" == typeof t.getAddress) return t;
    if (Array.isArray(t)) return t.map(Fl);
    if ("object" == typeof t) return Object.keys(t).reduce(((e, n) => (e[n] = t[n], e)), {});
    throw new Error(`should not happen: ${t} (${typeof t})`)
}

function Dl(t) {
    return new Promise((e => {
        setTimeout(e, t)
    }))
}

function Sl(t) {
    return t ? t.toLowerCase() : t
}

function Ul(t) {
    return t && "number" == typeof t.pollingInterval
}
const Ll = {
    polling: !1,
    staticNetwork: null,
    batchStallTime: 10,
    batchMaxSize: 1 << 20,
    batchMaxCount: 100,
    cacheTimeout: 250,
    pollingInterval: 4e3
};
class Gl extends Rl {
    constructor(t, e) {
        super(t), nn(this, "address"), wn(this, {
            address: e = Ps(e)
        })
    }
    connect(t) {
        kn(!1, "cannot reconnect JsonRpcSigner", "UNSUPPORTED_OPERATION", {
            operation: "signer.connect"
        })
    }
    async getAddress() {
        return this.address
    }
    async populateTransaction(t) {
        return await this.populateCall(t)
    }
    async sendUncheckedTransaction(t) {
        const e = Fl(t),
            n = [];
        if (e.from) {
            const r = e.from;
            n.push((async () => {
                const n = await Cs(r, this.provider);
                Pn(null != n && n.toLowerCase() === this.address.toLowerCase(), "from address mismatch", "transaction", t), e.from = n
            })())
        } else e.from = this.address;
        if (null == e.gasLimit && n.push((async () => {
                e.gasLimit = await this.provider.estimateGas({ ...e,
                    from: this.address
                })
            })()), null != e.to) {
            const t = e.to;
            n.push((async () => {
                e.to = await Cs(t, this.provider)
            })())
        }
        n.length && await Promise.all(n);
        const r = this.provider.getRpcTransaction(e);
        return this.provider.send("eth_sendTransaction", [r])
    }
    async sendTransaction(t) {
        const e = await this.provider.getBlockNumber(),
            n = await this.sendUncheckedTransaction(t);
        return await new Promise(((t, r) => {
            const s = [1e3, 100];
            let i = 0;
            const a = async () => {
                try {
                    const r = await this.provider.getTransaction(n);
                    if (null != r) return void t(r.replaceableTransaction(e))
                } catch (o) {
                    if (bn(o, "CANCELLED") || bn(o, "BAD_DATA") || bn(o, "NETWORK_ERROR")) return null == o.info && (o.info = {}), o.info.sendTransactionHash = n, void r(o);
                    if (bn(o, "INVALID_ARGUMENT") && (i++, null == o.info && (o.info = {}), o.info.sendTransactionHash = n, i > 10)) return void r(o);
                    this.provider.emit("error", En("failed to fetch transation after sending (will try again)", "UNKNOWN_ERROR", {
                        error: o
                    }))
                }
                this.provider._setTimeout((() => {
                    a()
                }), s.pop() || 4e3)
            };
            a()
        }))
    }
    async signTransaction(t) {
        const e = Fl(t);
        if (e.from) {
            const n = await Cs(e.from, this.provider);
            Pn(null != n && n.toLowerCase() === this.address.toLowerCase(), "from address mismatch", "transaction", t), e.from = n
        } else e.from = this.address;
        const n = this.provider.getRpcTransaction(e);
        return await this.provider.send("eth_signTransaction", [n])
    }
    async signMessage(t) {
        const e = "string" == typeof t ? sr(t) : t;
        return await this.provider.send("personal_sign", [Mn(e), this.address.toLowerCase()])
    }
    async signTypedData(t, e, n) {
        const r = Fl(n),
            s = await Ga.resolveNames(t, e, r, (async t => {
                const e = await Cs(t);
                return Pn(null != e, "TypedData does not support null address", "value", t), e
            }));
        return await this.provider.send("eth_signTypedData_v4", [this.address.toLowerCase(), JSON.stringify(Ga.getPayload(s.domain, e, s.value))])
    }
    async unlock(t) {
        return this.provider.send("personal_unlockAccount", [this.address.toLowerCase(), t, null])
    }
    async _legacySignMessage(t) {
        const e = "string" == typeof t ? sr(t) : t;
        return await this.provider.send("eth_sign", [this.address.toLowerCase(), Mn(e)])
    }
}
class Ql extends Al {
    constructor(t, e) {
        super(t, e), an(this, qe), an(this, We), an(this, Je), an(this, Ve), an(this, ze), an(this, Ke), an(this, Ye), an(this, Ze), on(this, Je, 1), on(this, We, Object.assign({}, Ll, e || {})), on(this, Ve, []), on(this, ze, null), on(this, Ye, null), on(this, Ze, null); {
            let t = null;
            const e = new Promise((e => {
                t = e
            }));
            on(this, Ke, {
                promise: e,
                resolve: t
            })
        }
        const n = this._getOption("staticNetwork");
        "boolean" == typeof n ? (Pn(!n || "any" !== t, "staticNetwork cannot be used on special network 'any'", "options", e), n && null != t && on(this, Ye, tl.from(t))) : n && (Pn(null == t || n.matches(t), "staticNetwork MUST match network object", "options", e), on(this, Ye, n))
    }
    _getOption(t) {
        return sn(this, We)[t]
    }
    get _network() {
        return kn(sn(this, Ye), "network is not available yet", "NETWORK_ERROR"), sn(this, Ye)
    }
    async _perform(t) {
        if ("call" === t.method || "estimateGas" === t.method) {
            let e = t.transaction;
            if (e && null != e.type && Vn(e.type) && null == e.maxFeePerGas && null == e.maxPriorityFeePerGas) {
                const n = await this.getFeeData();
                null == n.maxFeePerGas && null == n.maxPriorityFeePerGas && (t = Object.assign({}, t, {
                    transaction: Object.assign({}, e, {
                        type: void 0
                    })
                }))
            }
        }
        const e = this.getRpcRequest(t);
        return null != e ? await this.send(e.method, e.args) : super._perform(t)
    }
    async _detectNetwork() {
        const t = this._getOption("staticNetwork");
        if (t) {
            if (!0 !== t) return t;
            if (sn(this, Ye)) return sn(this, Ye)
        }
        return sn(this, Ze) ? await sn(this, Ze) : this.ready ? (on(this, Ze, (async () => {
            try {
                const t = tl.from(Vn(await this.send("eth_chainId", [])));
                return on(this, Ze, null), t
            } catch (t) {
                throw on(this, Ze, null), t
            }
        })()), await sn(this, Ze)) : (on(this, Ze, (async () => {
            const t = {
                id: ln(this, Je)._++,
                method: "eth_chainId",
                params: [],
                jsonrpc: "2.0"
            };
            let e;
            this.emit("debug", {
                action: "sendRpcPayload",
                payload: t
            });
            try {
                e = (await this._send(t))[0], on(this, Ze, null)
            } catch (n) {
                throw on(this, Ze, null), this.emit("debug", {
                    action: "receiveRpcError",
                    error: n
                }), n
            }
            if (this.emit("debug", {
                    action: "receiveRpcResult",
                    result: e
                }), "result" in e) return tl.from(Vn(e.result));
            throw this.getRpcError(t, e)
        })()), await sn(this, Ze))
    }
    _start() {
        null != sn(this, Ke) && null != sn(this, Ke).resolve && (sn(this, Ke).resolve(), on(this, Ke, null), (async () => {
            for (; null == sn(this, Ye) && !this.destroyed;) try {
                on(this, Ye, await this._detectNetwork())
            } catch (t) {
                if (this.destroyed) break;
                console.log("JsonRpcProvider failed to detect network and cannot start up; retry in 1s (perhaps the URL is wrong or the node is not started)"), this.emit("error", En("failed to bootstrap network detection", "NETWORK_ERROR", {
                    event: "initial-network-discovery",
                    info: {
                        error: t
                    }
                })), await Dl(1e3)
            }
            cn(this, qe, Xe).call(this)
        })())
    }
    async _waitUntilReady() {
        if (null != sn(this, Ke)) return await sn(this, Ke).promise
    }
    _getSubscriber(t) {
        return "pending" === t.type ? new Il(this) : "event" === t.type ? this._getOption("polling") ? new ul(this, t.filter) : new Tl(this, t.filter) : "orphan" === t.type && "drop-log" === t.filter.orphan ? new dl("orphan") : super._getSubscriber(t)
    }
    get ready() {
        return null == sn(this, Ke)
    }
    getRpcTransaction(t) {
        const e = {};
        return ["chainId", "gasLimit", "gasPrice", "type", "maxFeePerGas", "maxPriorityFeePerGas", "nonce", "value"].forEach((n => {
            if (null == t[n]) return;
            let r = n;
            "gasLimit" === n && (r = "gas"), e[r] = _n(Vn(t[n], `tx.${n}`))
        })), ["from", "to", "data"].forEach((n => {
            null != t[n] && (e[n] = Mn(t[n]))
        })), t.accessList && (e.accessList = aa(t.accessList)), t.blobVersionedHashes && (e.blobVersionedHashes = t.blobVersionedHashes.map((t => t.toLowerCase()))), e
    }
    getRpcRequest(t) {
        switch (t.method) {
            case "chainId":
                return {
                    method: "eth_chainId",
                    args: []
                };
            case "getBlockNumber":
                return {
                    method: "eth_blockNumber",
                    args: []
                };
            case "getGasPrice":
                return {
                    method: "eth_gasPrice",
                    args: []
                };
            case "getPriorityFee":
                return {
                    method: "eth_maxPriorityFeePerGas",
                    args: []
                };
            case "getBalance":
                return {
                    method: "eth_getBalance",
                    args: [Sl(t.address), t.blockTag]
                };
            case "getTransactionCount":
                return {
                    method: "eth_getTransactionCount",
                    args: [Sl(t.address), t.blockTag]
                };
            case "getCode":
                return {
                    method: "eth_getCode",
                    args: [Sl(t.address), t.blockTag]
                };
            case "getStorage":
                return {
                    method: "eth_getStorageAt",
                    args: [Sl(t.address), "0x" + t.position.toString(16), t.blockTag]
                };
            case "broadcastTransaction":
                return {
                    method: "eth_sendRawTransaction",
                    args: [t.signedTransaction]
                };
            case "getBlock":
                if ("blockTag" in t) return {
                    method: "eth_getBlockByNumber",
                    args: [t.blockTag, !!t.includeTransactions]
                };
                if ("blockHash" in t) return {
                    method: "eth_getBlockByHash",
                    args: [t.blockHash, !!t.includeTransactions]
                };
                break;
            case "getTransaction":
                return {
                    method: "eth_getTransactionByHash",
                    args: [t.hash]
                };
            case "getTransactionReceipt":
                return {
                    method: "eth_getTransactionReceipt",
                    args: [t.hash]
                };
            case "call":
                return {
                    method: "eth_call",
                    args: [this.getRpcTransaction(t.transaction), t.blockTag]
                };
            case "estimateGas":
                return {
                    method: "eth_estimateGas",
                    args: [this.getRpcTransaction(t.transaction)]
                };
            case "getLogs":
                return t.filter && null != t.filter.address && (Array.isArray(t.filter.address) ? t.filter.address = t.filter.address.map(Sl) : t.filter.address = Sl(t.filter.address)), {
                    method: "eth_getLogs",
                    args: [t.filter]
                }
        }
        return null
    }
    getRpcError(t, e) {
        const {
            method: n
        } = t, {
            error: r
        } = e;
        if ("eth_estimateGas" === n && r.message) {
            const e = r.message;
            if (!e.match(/revert/i) && e.match(/insufficient funds/i)) return En("insufficient funds", "INSUFFICIENT_FUNDS", {
                transaction: t.params[0],
                info: {
                    payload: t,
                    error: r
                }
            })
        }
        if ("eth_call" === n || "eth_estimateGas" === n) {
            const e = jl(r),
                s = Lo.getBuiltinCallException("eth_call" === n ? "call" : "estimateGas", t.params[0], e ? e.data : null);
            return s.info = {
                error: r,
                payload: t
            }, s
        }
        const s = JSON.stringify(function(t) {
            const e = [];
            return Wl(t, e), e
        }(r));
        if ("string" == typeof r.message && r.message.match(/user denied|ethers-user-denied/i)) {
            return En("user rejected action", "ACTION_REJECTED", {
                action: {
                    eth_sign: "signMessage",
                    personal_sign: "signMessage",
                    eth_signTypedData_v4: "signTypedData",
                    eth_signTransaction: "signTransaction",
                    eth_sendTransaction: "sendTransaction",
                    eth_requestAccounts: "requestAccess",
                    wallet_requestAccounts: "requestAccess"
                }[n] || "unknown",
                reason: "rejected",
                info: {
                    payload: t,
                    error: r
                }
            })
        }
        if ("eth_sendRawTransaction" === n || "eth_sendTransaction" === n) {
            const e = t.params[0];
            if (s.match(/insufficient funds|base fee exceeds gas limit/i)) return En("insufficient funds for intrinsic transaction cost", "INSUFFICIENT_FUNDS", {
                transaction: e,
                info: {
                    error: r
                }
            });
            if (s.match(/nonce/i) && s.match(/too low/i)) return En("nonce has already been used", "NONCE_EXPIRED", {
                transaction: e,
                info: {
                    error: r
                }
            });
            if (s.match(/replacement transaction/i) && s.match(/underpriced/i)) return En("replacement fee too low", "REPLACEMENT_UNDERPRICED", {
                transaction: e,
                info: {
                    error: r
                }
            });
            if (s.match(/only replay-protected/i)) return En("legacy pre-eip-155 transactions not supported", "UNSUPPORTED_OPERATION", {
                operation: n,
                info: {
                    transaction: e,
                    info: {
                        error: r
                    }
                }
            })
        }
        let i = !!s.match(/the method .* does not exist/i);
        return i || r && r.details && r.details.startsWith("Unauthorized method:") && (i = !0), i ? En("unsupported operation", "UNSUPPORTED_OPERATION", {
            operation: t.method,
            info: {
                error: r,
                payload: t
            }
        }) : En("could not coalesce error", "UNKNOWN_ERROR", {
            error: r,
            payload: t
        })
    }
    send(t, e) {
        if (this.destroyed) return Promise.reject(En("provider destroyed; cancelled request", "UNSUPPORTED_OPERATION", {
            operation: t
        }));
        const n = ln(this, Je)._++,
            r = new Promise(((r, s) => {
                sn(this, Ve).push({
                    resolve: r,
                    reject: s,
                    payload: {
                        method: t,
                        params: e,
                        id: n,
                        jsonrpc: "2.0"
                    }
                })
            }));
        return cn(this, qe, Xe).call(this), r
    }
    async getSigner(t) {
        null == t && (t = 0);
        const e = this.send("eth_accounts", []);
        if ("number" == typeof t) {
            const n = await e;
            if (t >= n.length) throw new Error("no such account");
            return new Gl(this, n[t])
        }
        const {
            accounts: n
        } = await yn({
            network: this.getNetwork(),
            accounts: e
        });
        t = Ps(t);
        for (const r of n)
            if (Ps(r) === t) return new Gl(this, t);
        throw new Error("invalid account")
    }
    async listAccounts() {
        return (await this.send("eth_accounts", [])).map((t => new Gl(this, t)))
    }
    destroy() {
        sn(this, ze) && (clearTimeout(sn(this, ze)), on(this, ze, null));
        for (const {
                payload: t,
                reject: e
            } of sn(this, Ve)) e(En("provider destroyed; cancelled request", "UNSUPPORTED_OPERATION", {
            operation: t.method
        }));
        on(this, Ve, []), super.destroy()
    }
}
We = new WeakMap, Je = new WeakMap, Ve = new WeakMap, ze = new WeakMap, Ke = new WeakMap, Ye = new WeakMap, Ze = new WeakMap, qe = new WeakSet, Xe = function() {
    if (sn(this, ze)) return;
    const t = 1 === this._getOption("batchMaxCount") ? 0 : this._getOption("batchStallTime");
    on(this, ze, setTimeout((() => {
        on(this, ze, null);
        const t = sn(this, Ve);
        for (on(this, Ve, []); t.length;) {
            const e = [t.shift()];
            for (; t.length && e.length !== sn(this, We).batchMaxCount;) {
                e.push(t.shift());
                if (JSON.stringify(e.map((t => t.payload))).length > sn(this, We).batchMaxSize) {
                    t.unshift(e.pop());
                    break
                }
            }(async () => {
                const t = 1 === e.length ? e[0].payload : e.map((t => t.payload));
                this.emit("debug", {
                    action: "sendRpcPayload",
                    payload: t
                });
                try {
                    const n = await this._send(t);
                    this.emit("debug", {
                        action: "receiveRpcResult",
                        result: n
                    });
                    for (const {
                            resolve: t,
                            reject: r,
                            payload: s
                        } of e) {
                        if (this.destroyed) {
                            r(En("provider destroyed; cancelled request", "UNSUPPORTED_OPERATION", {
                                operation: s.method
                            }));
                            continue
                        }
                        const e = n.filter((t => t.id === s.id))[0];
                        if (null != e) "error" in e ? r(this.getRpcError(s, e)) : t(e.result);
                        else {
                            const t = En("missing response for request", "BAD_DATA", {
                                value: n,
                                info: {
                                    payload: s
                                }
                            });
                            this.emit("error", t), r(t)
                        }
                    }
                } catch (n) {
                    this.emit("debug", {
                        action: "receiveRpcError",
                        error: n
                    });
                    for (const {
                            reject: t
                        } of e) t(n)
                }
            })()
        }
    }), t))
};
class Hl extends Ql {
    constructor(t, e) {
        super(t, e), an(this, _e);
        let n = this._getOption("pollingInterval");
        null == n && (n = Ll.pollingInterval), on(this, _e, n)
    }
    _getSubscriber(t) {
        const e = super._getSubscriber(t);
        return Ul(e) && (e.pollingInterval = sn(this, _e)), e
    }
    get pollingInterval() {
        return sn(this, _e)
    }
    set pollingInterval(t) {
        if (!Number.isInteger(t) || t < 0) throw new Error("invalid interval");
        on(this, _e, t), this._forEachSubscriber((t => {
            Ul(t) && (t.pollingInterval = sn(this, _e))
        }))
    }
}

function jl(t) {
    if (null == t) return null;
    if ("string" == typeof t.message && t.message.match(/revert/i) && Bn(t.data)) return {
        message: t.message,
        data: t.data
    };
    if ("object" == typeof t) {
        for (const e in t) {
            const n = jl(t[e]);
            if (n) return n
        }
        return null
    }
    if ("string" == typeof t) try {
        return jl(JSON.parse(t))
    } catch (e) {}
    return null
}

function Wl(t, e) {
    if (null != t) {
        if ("string" == typeof t.message && e.push(t.message), "object" == typeof t)
            for (const n in t) Wl(t[n], e);
        if ("string" == typeof t) try {
            return Wl(JSON.parse(t), e)
        } catch (n) {}
    }
}
_e = new WeakMap;
class Jl extends Hl {
    constructor(t, e, n) {
        const r = Object.assign({}, null != n ? n : {}, {
            batchMaxCount: 1
        });
        Pn(t && t.request, "invalid EIP-1193 provider", "ethereum", t), super(e, r), an(this, $e), on(this, $e, (async (e, n) => {
            const r = {
                method: e,
                params: n
            };
            this.emit("debug", {
                action: "sendEip1193Request",
                payload: r
            });
            try {
                const e = await t.request(r);
                return this.emit("debug", {
                    action: "receiveEip1193Result",
                    result: e
                }), e
            } catch (s) {
                const t = new Error(s.message);
                throw t.code = s.code, t.data = s.data, t.payload = r, this.emit("debug", {
                    action: "receiveEip1193Error",
                    error: t
                }), t
            }
        }))
    }
    async send(t, e) {
        return await this._start(), await super.send(t, e)
    }
    async _send(t) {
        Pn(!Array.isArray(t), "EIP-1193 does not support batch request", "payload", t);
        try {
            const e = await sn(this, $e).call(this, t.method, t.params || []);
            return [{
                id: t.id,
                result: e
            }]
        } catch (e) {
            return [{
                id: t.id,
                error: {
                    code: e.code,
                    data: e.data,
                    message: e.message
                }
            }]
        }
    }
    getRpcError(t, e) {
        switch ((e = JSON.parse(JSON.stringify(e))).error.code || -1) {
            case 4001:
                e.error.message = `ethers-user-denied: ${e.error.message}`;
                break;
            case 4200:
                e.error.message = `ethers-unsupported: ${e.error.message}`
        }
        return super.getRpcError(t, e)
    }
    async hasSigner(t) {
        null == t && (t = 0);
        const e = await this.send("eth_accounts", []);
        return "number" == typeof t ? e.length > t : (t = t.toLowerCase(), 0 !== e.filter((e => e.toLowerCase() === t)).length)
    }
    async getSigner(t) {
        if (null == t && (t = 0), !(await this.hasSigner(t))) try {
            await sn(this, $e).call(this, "eth_requestAccounts", [])
        } catch (e) {
            const t = e.payload;
            throw this.getRpcError(t, {
                id: t.id,
                error: e
            })
        }
        return await super.getSigner(t)
    }
}
$e = new WeakMap;
export {
    Jl as B, Tc as C, Nn as a, Pn as b, kn as c, wn as d, Vn as e, On as f, Zn as g, jn as h, Jn as m, Yn as t
};