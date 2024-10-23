import {
    eB as e,
    eD as t,
    eA as n,
    eI as a,
    eQ as r,
    eR as s,
    eS as o,
    a8 as i,
    eT as c,
    eH as u,
    eU as l,
    eL as d,
    eV as f,
    eJ as b,
    eK as m,
    eW as p,
    eX as h,
    eY as y,
    eZ as g,
    _ as v,
    eC as w,
    a9 as P
} from "./index-jdACH0Rc.js";
import {
    e$ as k,
    f0 as x,
    f2 as N,
    f1 as E,
    eE as T,
    f3 as j,
    e_ as B,
    eF as O,
    aa as I,
    eG as $,
    f5 as F,
    f6 as A,
    f4 as R,
    f7 as M,
    f8 as C,
    a7 as S,
    f9 as q
} from "./index-jdACH0Rc.js";
import {
    k as z,
    c as G,
    i as D,
    I as L,
    s as U,
    a as _,
    b as H,
    d as W,
    e as V,
    p as J,
    f as Z,
    E as K,
    F as Y,
    g as Q,
    N as X,
    h as ee,
    j as te,
    l as ne,
    m as ae,
    n as re,
    T as se,
    o as oe,
    U as ie,
    q as ce,
    r as ue,
    t as le,
    u as de,
    v as fe,
    w as be,
    x as me,
    y as pe,
    P as he,
    z as ye,
    C as ge,
    A as ve,
    B as we,
    D as Pe,
    G as ke,
    H as xe,
    W as Ne
} from "./number-8GOwVmHT.js";
import {
    K as Ee,
    L as Te,
    M as je,
    O as Be,
    _ as Oe,
    $ as Ie,
    a0 as $e,
    a1 as Fe,
    a3 as Ae,
    Q as Re,
    a4 as Me,
    R as Ce,
    V as Se,
    X as qe,
    J as ze,
    Y as Ge,
    a6 as De,
    a7 as Le,
    a5 as Ue,
    a8 as _e,
    a2 as He,
    Z as We,
    S as Ve
} from "./number-8GOwVmHT.js";
import {
    e as Je,
    s as Ze
} from "./secp256k1-LeYlzbB0.js";
import "./sha256-o0pdH_sn.js";
const Ke = /^tuple(?<array>(\[(\d*)\])*)$/;

function Ye(e) {
    let t = e.type;
    if (Ke.test(e.type) && "components" in e) {
        t = "(";
        const n = e.components.length;
        for (let r = 0; r < n; r++) {
            t += Ye(e.components[r]), r < n - 1 && (t += ", ")
        }
        const a = function(e, t) {
            const n = e.exec(t);
            return null == n ? void 0 : n.groups
        }(Ke, e.type);
        return t += `)${(null==a?void 0:a.array)??""}`, Ye({ ...e,
            type: t
        })
    }
    return "indexed" in e && e.indexed && (t = `${t} indexed`), e.name ? `${t} ${e.name}` : t
}

function Qe(e) {
    let t = "";
    const n = e.length;
    for (let a = 0; a < n; a++) {
        t += Ye(e[a]), a !== n - 1 && (t += ", ")
    }
    return t
}

function Xe(e, t, n) {
    return a => {
        var r, s;
        return (null == (r = e[t.name]) ? void 0 : r.call(e, a)) ? ? (null == (s = e[n]) ? void 0 : s.call(e, a)) ? ? t(e, a)
    }
}

function et(e, {
    includeName: t = !1
} = {}) {
    if ("function" !== e.type && "event" !== e.type && "error" !== e.type) throw new kt(e.type);
    return `${e.name}(${tt(e.inputs,{includeName:t})})`
}

function tt(e, {
    includeName: t = !1
} = {}) {
    return e ? e.map((e => function(e, {
        includeName: t
    }) {
        if (e.type.startsWith("tuple")) return `(${tt(e.components,{includeName:t})})${e.type.slice(5)}`;
        return e.type + (t && e.name ? ` ${e.name}` : "")
    }(e, {
        includeName: t
    }))).join(t ? ", " : ",") : ""
}
class nt extends e {
    constructor({
        docsPath: e
    }) {
        super(["A constructor was not found on the ABI.", "Make sure you are using the correct ABI and that the constructor exists on it."].join("\n"), {
            docsPath: e
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "AbiConstructorNotFoundError"
        })
    }
}
class at extends e {
    constructor({
        docsPath: e
    }) {
        super(["Constructor arguments were provided (`args`), but a constructor parameters (`inputs`) were not found on the ABI.", "Make sure you are using the correct ABI, and that the `inputs` attribute on the constructor exists."].join("\n"), {
            docsPath: e
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "AbiConstructorParamsNotFoundError"
        })
    }
}
class rt extends e {
    constructor({
        data: e,
        params: t,
        size: n
    }) {
        super([`Data size of ${n} bytes is too small for given parameters.`].join("\n"), {
            metaMessages: [`Params: (${tt(t,{includeName:!0})})`, `Data:   ${e} (${n} bytes)`]
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "AbiDecodingDataSizeTooSmallError"
        }), Object.defineProperty(this, "data", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, "params", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, "size", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), this.data = e, this.params = t, this.size = n
    }
}
class st extends e {
    constructor() {
        super('Cannot decode zero data ("0x") with ABI parameters.'), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "AbiDecodingZeroDataError"
        })
    }
}
class ot extends e {
    constructor({
        expectedLength: e,
        givenLength: t,
        type: n
    }) {
        super([`ABI encoding array length mismatch for type ${n}.`, `Expected length: ${e}`, `Given length: ${t}`].join("\n")), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "AbiEncodingArrayLengthMismatchError"
        })
    }
}
class it extends e {
    constructor({
        expectedSize: e,
        value: n
    }) {
        super(`Size of bytes "${n}" (bytes${t(n)}) does not match expected size (bytes${e}).`), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "AbiEncodingBytesSizeMismatchError"
        })
    }
}
class ct extends e {
    constructor({
        expectedLength: e,
        givenLength: t
    }) {
        super(["ABI encoding params/values length mismatch.", `Expected length (params): ${e}`, `Given length (values): ${t}`].join("\n")), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "AbiEncodingLengthMismatchError"
        })
    }
}
class ut extends e {
    constructor(e, {
        docsPath: t
    }) {
        super([`Encoded error signature "${e}" not found on ABI.`, "Make sure you are using the correct ABI and that the error exists on it.", `You can look up the decoded signature here: https://openchain.xyz/signatures?query=${e}.`].join("\n"), {
            docsPath: t
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "AbiErrorSignatureNotFoundError"
        }), Object.defineProperty(this, "signature", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), this.signature = e
    }
}
class lt extends e {
    constructor({
        docsPath: e
    }) {
        super("Cannot extract event signature from empty topics.", {
            docsPath: e
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "AbiEventSignatureEmptyTopicsError"
        })
    }
}
class dt extends e {
    constructor(e, {
        docsPath: t
    }) {
        super([`Encoded event signature "${e}" not found on ABI.`, "Make sure you are using the correct ABI and that the event exists on it.", `You can look up the signature here: https://openchain.xyz/signatures?query=${e}.`].join("\n"), {
            docsPath: t
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "AbiEventSignatureNotFoundError"
        })
    }
}
class ft extends e {
    constructor(e, {
        docsPath: t
    } = {}) {
        super([`Event ${e?`"${e}" `:""}not found on ABI.`, "Make sure you are using the correct ABI and that the event exists on it."].join("\n"), {
            docsPath: t
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "AbiEventNotFoundError"
        })
    }
}
class bt extends e {
    constructor(e, {
        docsPath: t
    } = {}) {
        super([`Function ${e?`"${e}" `:""}not found on ABI.`, "Make sure you are using the correct ABI and that the function exists on it."].join("\n"), {
            docsPath: t
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "AbiFunctionNotFoundError"
        })
    }
}
class mt extends e {
    constructor(e, {
        docsPath: t
    }) {
        super([`Function "${e}" does not contain any \`outputs\` on ABI.`, "Cannot decode function result without knowing what the parameter types are.", "Make sure you are using the correct ABI and that the function exists on it."].join("\n"), {
            docsPath: t
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "AbiFunctionOutputsNotFoundError"
        })
    }
}
class pt extends e {
    constructor(e, t) {
        super("Found ambiguous types in overloaded ABI items.", {
            metaMessages: [`\`${e.type}\` in \`${et(e.abiItem)}\`, and`, `\`${t.type}\` in \`${et(t.abiItem)}\``, "", "These types encode differently and cannot be distinguished at runtime.", "Remove one of the ambiguous items in the ABI."]
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "AbiItemAmbiguityError"
        })
    }
}
class ht extends e {
    constructor({
        expectedSize: e,
        givenSize: t
    }) {
        super(`Expected bytes${e}, got bytes${t}.`), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "BytesSizeMismatchError"
        })
    }
}
class yt extends e {
    constructor({
        abiItem: e,
        data: t,
        params: n,
        size: a
    }) {
        super([`Data size of ${a} bytes is too small for non-indexed event parameters.`].join("\n"), {
            metaMessages: [`Params: (${tt(n,{includeName:!0})})`, `Data:   ${t} (${a} bytes)`]
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "DecodeLogDataMismatch"
        }), Object.defineProperty(this, "abiItem", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, "data", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, "params", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, "size", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), this.abiItem = e, this.data = t, this.params = n, this.size = a
    }
}
class gt extends e {
    constructor({
        abiItem: e,
        param: t
    }) {
        super([`Expected a topic for indexed event parameter${t.name?` "${t.name}"`:""} on event "${et(e,{includeName:!0})}".`].join("\n")), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "DecodeLogTopicsMismatch"
        }), Object.defineProperty(this, "abiItem", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), this.abiItem = e
    }
}
class vt extends e {
    constructor(e, {
        docsPath: t
    }) {
        super([`Type "${e}" is not a valid encoding type.`, "Please provide a valid ABI type."].join("\n"), {
            docsPath: t
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "InvalidAbiEncodingType"
        })
    }
}
class wt extends e {
    constructor(e, {
        docsPath: t
    }) {
        super([`Type "${e}" is not a valid decoding type.`, "Please provide a valid ABI type."].join("\n"), {
            docsPath: t
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "InvalidAbiDecodingType"
        })
    }
}
class Pt extends e {
    constructor(e) {
        super([`Value "${e}" is not a valid array.`].join("\n")), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "InvalidArrayError"
        })
    }
}
class kt extends e {
    constructor(e) {
        super([`"${e}" is not a valid definition type.`, 'Valid types: "function", "event", "error"'].join("\n")), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "InvalidDefinitionTypeError"
        })
    }
}
class xt extends e {
    constructor(e) {
        super(`Filter type "${e}" is not supported.`), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "FilterTypeNotSupportedError"
        })
    }
}

function Nt(e) {
    return z(n(e))
}
const Et = t => {
    var n;
    return function(t) {
        let n = !0,
            a = "",
            r = 0,
            s = "",
            o = !1;
        for (let e = 0; e < t.length; e++) {
            const i = t[e];
            if (["(", ")", ","].includes(i) && (n = !0), "(" === i && r++, ")" === i && r--, n)
                if (0 !== r) " " !== i ? (s += i, a += i) : "," !== t[e - 1] && "," !== a && ",(" !== a && (a = "", n = !1);
                else if (" " === i && ["event", "function", ""].includes(s)) s = "";
            else if (s += i, ")" === i) {
                o = !0;
                break
            }
        }
        if (!o) throw new e("Unable to normalize signature.");
        return s
    }("string" == typeof t ? t : "function" === (n = t).type ? `function ${n.name}(${Qe(n.inputs)})${n.stateMutability&&"nonpayable"!==n.stateMutability?` ${n.stateMutability}`:""}${n.outputs.length?` returns (${Qe(n.outputs)})`:""}` : "event" === n.type ? `event ${n.name}(${Qe(n.inputs)})` : "error" === n.type ? `error ${n.name}(${Qe(n.inputs)})` : "constructor" === n.type ? `constructor(${Qe(n.inputs)})${"payable"===n.stateMutability?" payable":""}` : "fallback" === n.type ? "fallback()" : "receive() external payable")
};

function Tt(e) {
    return Nt(Et(e))
}
const jt = Tt;

function Bt(e, t) {
    if (e.length !== t.length) throw new ct({
        expectedLength: e.length,
        givenLength: t.length
    });
    const n = function({
            params: e,
            values: t
        }) {
            const n = [];
            for (let a = 0; a < e.length; a++) n.push(Ot({
                param: e[a],
                value: t[a]
            }));
            return n
        }({
            params: e,
            values: t
        }),
        a = It(n);
    return 0 === a.length ? "0x" : a
}

function Ot({
    param: n,
    value: i
}) {
    const c = $t(n.type);
    if (c) {
        const [e, t] = c;
        return function(e, {
            length: t,
            param: n
        }) {
            const r = null === t;
            if (!Array.isArray(e)) throw new Pt(e);
            if (!r && e.length !== t) throw new ot({
                expectedLength: t,
                givenLength: e.length,
                type: `${n.type}[${t}]`
            });
            let s = !1;
            const o = [];
            for (let a = 0; a < e.length; a++) {
                const t = Ot({
                    param: n,
                    value: e[a]
                });
                t.dynamic && (s = !0), o.push(t)
            }
            if (r || s) {
                const e = It(o);
                if (r) {
                    const t = a(o.length, {
                        size: 32
                    });
                    return {
                        dynamic: !0,
                        encoded: o.length > 0 ? G([t, e]) : t
                    }
                }
                if (s) return {
                    dynamic: !0,
                    encoded: e
                }
            }
            return {
                dynamic: !1,
                encoded: G(o.map((({
                    encoded: e
                }) => e)))
            }
        }(i, {
            length: e,
            param: { ...n,
                type: t
            }
        })
    }
    if ("tuple" === n.type) return function(e, {
        param: t
    }) {
        let n = !1;
        const a = [];
        for (let r = 0; r < t.components.length; r++) {
            const s = t.components[r],
                o = Ot({
                    param: s,
                    value: e[Array.isArray(e) ? r : s.name]
                });
            a.push(o), o.dynamic && (n = !0)
        }
        return {
            dynamic: n,
            encoded: n ? It(a) : G(a.map((({
                encoded: e
            }) => e)))
        }
    }(i, {
        param: n
    });
    if ("address" === n.type) return function(e) {
        if (!D(e)) throw new L({
            address: e
        });
        return {
            dynamic: !1,
            encoded: r(e.toLowerCase())
        }
    }(i);
    if ("bool" === n.type) return function(t) {
        if ("boolean" != typeof t) throw new e(`Invalid boolean value: "${t}" (type: ${typeof t}). Expected: \`true\` or \`false\`.`);
        return {
            dynamic: !1,
            encoded: r(s(t))
        }
    }(i);
    if (n.type.startsWith("uint") || n.type.startsWith("int")) {
        return function(e, {
            signed: t
        }) {
            return {
                dynamic: !1,
                encoded: a(e, {
                    size: 32,
                    signed: t
                })
            }
        }(i, {
            signed: n.type.startsWith("int")
        })
    }
    if (n.type.startsWith("bytes")) return function(e, {
        param: n
    }) {
        const [, s] = n.type.split("bytes"), o = t(e);
        if (!s) {
            let t = e;
            return o % 32 != 0 && (t = r(t, {
                dir: "right",
                size: 32 * Math.ceil((e.length - 2) / 2 / 32)
            })), {
                dynamic: !0,
                encoded: G([r(a(o, {
                    size: 32
                })), t])
            }
        }
        if (o !== Number.parseInt(s)) throw new it({
            expectedSize: Number.parseInt(s),
            value: e
        });
        return {
            dynamic: !1,
            encoded: r(e, {
                dir: "right"
            })
        }
    }(i, {
        param: n
    });
    if ("string" === n.type) return function(e) {
        const n = o(e),
            s = Math.ceil(t(n) / 32),
            i = [];
        for (let t = 0; t < s; t++) i.push(r(U(n, 32 * t, 32 * (t + 1)), {
            dir: "right"
        }));
        return {
            dynamic: !0,
            encoded: G([r(a(t(n), {
                size: 32
            })), ...i])
        }
    }(i);
    throw new vt(n.type, {
        docsPath: "/docs/contract/encodeAbiParameters"
    })
}

function It(e) {
    let n = 0;
    for (let a = 0; a < e.length; a++) {
        const {
            dynamic: r,
            encoded: s
        } = e[a];
        n += r ? 32 : t(s)
    }
    const r = [],
        s = [];
    let o = 0;
    for (let i = 0; i < e.length; i++) {
        const {
            dynamic: c,
            encoded: u
        } = e[i];
        c ? (r.push(a(n + o, {
            size: 32
        })), s.push(u), o += t(u)) : r.push(u)
    }
    return G([...r, ...s])
}

function $t(e) {
    const t = e.match(/^(.*)\[(\d+)?\]$/);
    return t ? [t[2] ? Number(t[2]) : null, t[1]] : void 0
}
const Ft = e => U(Tt(e), 0, 4);

function At(e) {
    const {
        abi: t,
        args: n = [],
        name: a
    } = e, r = i(a, {
        strict: !1
    }), s = t.filter((e => r ? "function" === e.type ? Ft(e) === a : "event" === e.type && jt(e) === a : "name" in e && e.name === a));
    if (0 === s.length) return;
    if (1 === s.length) return s[0];
    let o;
    for (const i of s) {
        if (!("inputs" in i)) continue;
        if (!n || 0 === n.length) {
            if (!i.inputs || 0 === i.inputs.length) return i;
            continue
        }
        if (!i.inputs) continue;
        if (0 === i.inputs.length) continue;
        if (i.inputs.length !== n.length) continue;
        if (n.every(((e, t) => {
                const n = "inputs" in i && i.inputs[t];
                return !!n && Rt(e, n)
            }))) {
            if (o && "inputs" in o && o.inputs) {
                const e = Mt(i.inputs, o.inputs, n);
                if (e) throw new pt({
                    abiItem: i,
                    type: e[0]
                }, {
                    abiItem: o,
                    type: e[1]
                })
            }
            o = i
        }
    }
    return o || s[0]
}

function Rt(e, t) {
    const n = typeof e,
        a = t.type;
    switch (a) {
        case "address":
            return D(e, {
                strict: !1
            });
        case "bool":
            return "boolean" === n;
        case "function":
        case "string":
            return "string" === n;
        default:
            return "tuple" === a && "components" in t ? Object.values(t.components).every(((t, n) => Rt(Object.values(e)[n], t))) : /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(a) ? "number" === n || "bigint" === n : /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(a) ? "string" === n || e instanceof Uint8Array : !!/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(a) && (Array.isArray(e) && e.every((e => Rt(e, { ...t,
                type: a.replace(/(\[[0-9]{0,}\])$/, "")
            }))))
    }
}

function Mt(e, t, n) {
    for (const a in e) {
        const r = e[a],
            s = t[a];
        if ("tuple" === r.type && "tuple" === s.type && "components" in r && "components" in s) return Mt(r.components, s.components, n[a]);
        const o = [r.type, s.type];
        if (!(!o.includes("address") || !o.includes("bytes20")) || (o.includes("address") && o.includes("string") || !(!o.includes("address") || !o.includes("bytes"))) && D(n[a], {
                strict: !1
            })) return o
    }
}
const Ct = "/docs/contract/encodeEventTopics";

function St(e) {
    var t;
    const {
        abi: n,
        eventName: a,
        args: r
    } = e;
    let s = n[0];
    if (a) {
        const e = At({
            abi: n,
            name: a
        });
        if (!e) throw new ft(a, {
            docsPath: Ct
        });
        s = e
    }
    if ("event" !== s.type) throw new ft(void 0, {
        docsPath: Ct
    });
    const o = et(s),
        i = jt(o);
    let c = [];
    if (r && "inputs" in s) {
        const e = null == (t = s.inputs) ? void 0 : t.filter((e => "indexed" in e && e.indexed)),
            n = Array.isArray(r) ? r : Object.values(r).length > 0 ? (null == e ? void 0 : e.map((e => r[e.name]))) ? ? [] : [];
        n.length > 0 && (c = (null == e ? void 0 : e.map(((e, t) => Array.isArray(n[t]) ? n[t].map(((a, r) => qt({
            param: e,
            value: n[t][r]
        }))) : n[t] ? qt({
            param: e,
            value: n[t]
        }) : null))) ? ? [])
    }
    return [i, ...c]
}

function qt({
    param: e,
    value: t
}) {
    if ("string" === e.type || "bytes" === e.type) return z(n(t));
    if ("tuple" === e.type || e.type.match(/^(.*)\[(\d+)?\]$/)) throw new xt(e.type);
    return Bt([e], [t])
}

function zt(e, {
    method: t
}) {
    var n, a;
    const r = {};
    return "fallback" === e.transport.type && (null == (a = (n = e.transport).onResponse) || a.call(n, (({
        method: e,
        response: n,
        status: a,
        transport: s
    }) => {
        "success" === a && t === e && (r[n] = s.request)
    }))), t => r[t] || e.request
}
async function Gt(e, t) {
    const {
        address: n,
        abi: r,
        args: s,
        eventName: o,
        fromBlock: i,
        strict: c,
        toBlock: u
    } = t, l = zt(e, {
        method: "eth_newFilter"
    }), d = o ? St({
        abi: r,
        args: s,
        eventName: o
    }) : void 0, f = await e.request({
        method: "eth_newFilter",
        params: [{
            address: n,
            fromBlock: "bigint" == typeof i ? a(i) : i,
            toBlock: "bigint" == typeof u ? a(u) : u,
            topics: d
        }]
    });
    return {
        abi: r,
        args: s,
        eventName: o,
        id: f,
        request: l(f),
        strict: Boolean(c),
        type: "event"
    }
}

function Dt(e) {
    return "string" == typeof e ? {
        address: e,
        type: "json-rpc"
    } : e
}
const Lt = "/docs/contract/encodeFunctionData";

function Ut(e) {
    const {
        abi: t,
        args: n,
        functionName: a
    } = e;
    let r = t[0];
    if (a) {
        const e = At({
            abi: t,
            args: n,
            name: a
        });
        if (!e) throw new bt(a, {
            docsPath: Lt
        });
        r = e
    }
    if ("function" !== r.type) throw new bt(void 0, {
        docsPath: Lt
    });
    return {
        abi: [r],
        functionName: Ft(et(r))
    }
}

function _t(e) {
    const {
        args: t
    } = e, {
        abi: n,
        functionName: a
    } = 1 === e.abi.length && (null == (r = e.functionName) ? void 0 : r.startsWith("0x")) ? e : Ut(e);
    var r;
    const s = n[0],
        o = a,
        i = "inputs" in s && s.inputs ? Bt(s.inputs, t ? ? []) : void 0;
    return _([o, i ? ? "0x"])
}
const Ht = {
        1: "An `assert` condition failed.",
        17: "Arithmetic operation resulted in underflow or overflow.",
        18: "Division or modulo by zero (e.g. `5 / 0` or `23 % 0`).",
        33: "Attempted to convert to an invalid type.",
        34: "Attempted to access a storage byte array that is incorrectly encoded.",
        49: "Performed `.pop()` on an empty array",
        50: "Array index is out of bounds.",
        65: "Allocated too much memory or created an array which is too large.",
        81: "Attempted to call a zero-initialized variable of internal function type."
    },
    Wt = {
        inputs: [{
            name: "message",
            type: "string"
        }],
        name: "Error",
        type: "error"
    },
    Vt = {
        inputs: [{
            name: "reason",
            type: "uint256"
        }],
        name: "Panic",
        type: "error"
    };

function Jt(e, t = {}) {
    void 0 !== t.size && c(e, {
        size: t.size
    });
    const n = u(e, t);
    return l(n, t)
}

function Zt(e, t = {}) {
    let n = e;
    if (void 0 !== t.size && (c(n, {
            size: t.size
        }), n = d(n)), n.length > 1 || n[0] > 1) throw new f(n);
    return Boolean(n[0])
}

function Kt(e, t = {}) {
    void 0 !== t.size && c(e, {
        size: t.size
    });
    const n = u(e, t);
    return b(n, t)
}

function Yt(e, t = {}) {
    let n = e;
    return void 0 !== t.size && (c(n, {
        size: t.size
    }), n = d(n, {
        dir: "right"
    })), (new TextDecoder).decode(n)
}

function Qt(e, n) {
    const a = "string" == typeof n ? m(n) : n,
        r = H(a);
    if (0 === t(a) && e.length > 0) throw new st;
    if (t(n) && t(n) < 32) throw new rt({
        data: "string" == typeof n ? n : u(n),
        params: e,
        size: t(n)
    });
    let s = 0;
    const o = [];
    for (let t = 0; t < e.length; ++t) {
        const n = e[t];
        r.setPosition(s);
        const [a, i] = Xt(r, n, {
            staticPosition: 0
        });
        s += i, o.push(a)
    }
    return o
}

function Xt(e, t, {
    staticPosition: n
}) {
    const a = $t(t.type);
    if (a) {
        const [r, s] = a;
        return function(e, t, {
            length: n,
            staticPosition: a
        }) {
            if (!n) {
                const n = a + Kt(e.readBytes(tn)),
                    r = n + en;
                e.setPosition(n);
                const s = Kt(e.readBytes(en)),
                    o = nn(t);
                let i = 0;
                const c = [];
                for (let a = 0; a < s; ++a) {
                    e.setPosition(r + (o ? 32 * a : i));
                    const [n, s] = Xt(e, t, {
                        staticPosition: r
                    });
                    i += s, c.push(n)
                }
                return e.setPosition(a + 32), [c, 32]
            }
            if (nn(t)) {
                const r = a + Kt(e.readBytes(tn)),
                    s = [];
                for (let a = 0; a < n; ++a) {
                    e.setPosition(r + 32 * a);
                    const [n] = Xt(e, t, {
                        staticPosition: r
                    });
                    s.push(n)
                }
                return e.setPosition(a + 32), [s, 32]
            }
            let r = 0;
            const s = [];
            for (let o = 0; o < n; ++o) {
                const [n, o] = Xt(e, t, {
                    staticPosition: a + r
                });
                r += o, s.push(n)
            }
            return [s, r]
        }(e, { ...t,
            type: s
        }, {
            length: r,
            staticPosition: n
        })
    }
    if ("tuple" === t.type) return function(e, t, {
        staticPosition: n
    }) {
        const a = 0 === t.components.length || t.components.some((({
                name: e
            }) => !e)),
            r = a ? [] : {};
        let s = 0;
        if (nn(t)) {
            const o = n + Kt(e.readBytes(tn));
            for (let n = 0; n < t.components.length; ++n) {
                const i = t.components[n];
                e.setPosition(o + s);
                const [c, u] = Xt(e, i, {
                    staticPosition: o
                });
                s += u, r[a ? n : null == i ? void 0 : i.name] = c
            }
            return e.setPosition(n + 32), [r, 32]
        }
        for (let o = 0; o < t.components.length; ++o) {
            const i = t.components[o],
                [c, u] = Xt(e, i, {
                    staticPosition: n
                });
            r[a ? o : null == i ? void 0 : i.name] = c, s += u
        }
        return [r, s]
    }(e, t, {
        staticPosition: n
    });
    if ("address" === t.type) return function(e) {
        const t = e.readBytes(32);
        return [W(u(V(t, -20))), 32]
    }(e);
    if ("bool" === t.type) return function(e) {
        return [Zt(e.readBytes(32), {
            size: 32
        }), 32]
    }(e);
    if (t.type.startsWith("bytes")) return function(e, t, {
        staticPosition: n
    }) {
        const [a, r] = t.type.split("bytes");
        if (!r) {
            const t = Kt(e.readBytes(32));
            e.setPosition(n + t);
            const a = Kt(e.readBytes(32));
            if (0 === a) return e.setPosition(n + 32), ["0x", 32];
            const r = e.readBytes(a);
            return e.setPosition(n + 32), [u(r), 32]
        }
        const s = u(e.readBytes(Number.parseInt(r), 32));
        return [s, 32]
    }(e, t, {
        staticPosition: n
    });
    if (t.type.startsWith("uint") || t.type.startsWith("int")) return function(e, t) {
        const n = t.type.startsWith("int"),
            a = Number.parseInt(t.type.split("int")[1] || "256"),
            r = e.readBytes(32);
        return [a > 48 ? Jt(r, {
            signed: n
        }) : Kt(r, {
            signed: n
        }), 32]
    }(e, t);
    if ("string" === t.type) return function(e, {
        staticPosition: t
    }) {
        const n = Kt(e.readBytes(32)),
            a = t + n;
        e.setPosition(a);
        const r = Kt(e.readBytes(32));
        if (0 === r) return e.setPosition(t + 32), ["", 32];
        const s = e.readBytes(r, 32),
            o = Yt(d(s));
        return e.setPosition(t + 32), [o, 32]
    }(e, {
        staticPosition: n
    });
    throw new wt(t.type, {
        docsPath: "/docs/contract/decodeAbiParameters"
    })
}
const en = 32,
    tn = 32;

function nn(e) {
    var t;
    const {
        type: n
    } = e;
    if ("string" === n) return !0;
    if ("bytes" === n) return !0;
    if (n.endsWith("[]")) return !0;
    if ("tuple" === n) return null == (t = e.components) ? void 0 : t.some(nn);
    const a = $t(e.type);
    return !(!a || !nn({ ...e,
        type: a[1]
    }))
}

function an(e) {
    const {
        abi: t,
        data: n
    } = e, a = U(n, 0, 4);
    if ("0x" === a) throw new st;
    const r = [...t || [], Wt, Vt].find((e => "error" === e.type && a === Ft(et(e))));
    if (!r) throw new ut(a, {
        docsPath: "/docs/contract/decodeErrorResult"
    });
    return {
        abiItem: r,
        args: "inputs" in r && r.inputs && r.inputs.length > 0 ? Qt(r.inputs, U(n, 4)) : void 0,
        errorName: r.name
    }
}
const rn = (e, t, n) => JSON.stringify(e, ((e, t) => "bigint" == typeof t ? t.toString() : t), n);

function sn({
    abiItem: e,
    args: t,
    includeFunctionName: n = !0,
    includeName: a = !1
}) {
    if ("name" in e && "inputs" in e && e.inputs) return `${n?e.name:""}(${e.inputs.map(((e,n)=>`${a&&e.name?`${e.name}: `:""}${"object"==typeof t[n]?rn(t[n]):t[n]}`)).join(", ")})`
}
class on extends e {
    constructor({
        address: e
    }) {
        super(`State for account "${e}" is set multiple times.`), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "AccountStateConflictError"
        })
    }
}
class cn extends e {
    constructor() {
        super("state and stateDiff are set on the same account."), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "StateAssignmentConflictError"
        })
    }
}

function un(e) {
    return e.reduce(((e, {
        slot: t,
        value: n
    }) => `${e}        ${t}: ${n}\n`), "")
}
class ln extends e {
    constructor(e, {
        account: t,
        docsPath: n,
        chain: a,
        data: r,
        gas: s,
        gasPrice: o,
        maxFeePerGas: i,
        maxPriorityFeePerGas: c,
        nonce: u,
        to: l,
        value: d,
        stateOverride: f
    }) {
        var b;
        const m = t ? Dt(t) : void 0;
        let h = J({
            from: null == m ? void 0 : m.address,
            to: l,
            value: void 0 !== d && `${p(d)} ${(null==(b=null==a?void 0:a.nativeCurrency)?void 0:b.symbol)||"ETH"}`,
            data: r,
            gas: s,
            gasPrice: void 0 !== o && `${Z(o)} gwei`,
            maxFeePerGas: void 0 !== i && `${Z(i)} gwei`,
            maxPriorityFeePerGas: void 0 !== c && `${Z(c)} gwei`,
            nonce: u
        });
        f && (h += `\n${function(e){return e.reduce(((e,{address:t,...n})=>{let a=`
            $ {
                e
            }
            $ {
                t
            }: \n `;return n.nonce&&(a+=`
            nonce: $ {
                n.nonce
            }\
            n `),n.balance&&(a+=`
            balance: $ {
                n.balance
            }\
            n `),n.code&&(a+=`
            code: $ {
                n.code
            }\
            n `),n.state&&(a+="      state:\n",a+=un(n.state)),n.stateDiff&&(a+="      stateDiff:\n",a+=un(n.stateDiff)),a}),"  State Override:\n").slice(0,-1)}(f)}`), super(e.shortMessage, {
            cause: e,
            docsPath: n,
            metaMessages: [...e.metaMessages ? [...e.metaMessages, " "] : [], "Raw Call Arguments:", h].filter(Boolean)
        }), Object.defineProperty(this, "cause", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "CallExecutionError"
        }), this.cause = e
    }
}
class dn extends e {
    constructor(e, {
        abi: t,
        args: n,
        contractAddress: a,
        docsPath: r,
        functionName: s,
        sender: o
    }) {
        const i = At({
                abi: t,
                args: n,
                name: s
            }),
            c = i ? sn({
                abiItem: i,
                args: n,
                includeFunctionName: !1,
                includeName: !1
            }) : void 0,
            u = i ? et(i, {
                includeName: !0
            }) : void 0,
            l = J({
                address: a && h(a),
                function: u,
                args: c && "()" !== c && `${[...Array((null==s?void 0:s.length)??0).keys()].map((()=>" ")).join("")}${c}`,
                sender: o
            });
        super(e.shortMessage || `An unknown error occurred while executing the contract function "${s}".`, {
            cause: e,
            docsPath: r,
            metaMessages: [...e.metaMessages ? [...e.metaMessages, " "] : [], "Contract Call:", l].filter(Boolean)
        }), Object.defineProperty(this, "abi", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, "args", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, "cause", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, "contractAddress", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, "formattedArgs", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, "functionName", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, "sender", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "ContractFunctionExecutionError"
        }), this.abi = t, this.args = n, this.cause = e, this.contractAddress = a, this.functionName = s, this.sender = o
    }
}
class fn extends e {
    constructor({
        abi: e,
        data: t,
        functionName: n,
        message: a
    }) {
        let r, s, o, i, c;
        if (t && "0x" !== t) try {
            s = an({
                abi: e,
                data: t
            });
            const {
                abiItem: n,
                errorName: a,
                args: r
            } = s;
            if ("Error" === a) i = r[0];
            else if ("Panic" === a) {
                const [e] = r;
                i = Ht[e]
            } else {
                const e = n ? et(n, {
                        includeName: !0
                    }) : void 0,
                    t = n && r ? sn({
                        abiItem: n,
                        args: r,
                        includeFunctionName: !1,
                        includeName: !1
                    }) : void 0;
                o = [e ? `Error: ${e}` : "", t && "()" !== t ? `       ${[...Array((null==a?void 0:a.length)??0).keys()].map((()=>" ")).join("")}${t}` : ""]
            }
        } catch (u) {
            r = u
        } else a && (i = a);
        r instanceof ut && (c = r.signature, o = [`Unable to decode signature "${c}" as it was not found on the provided ABI.`, "Make sure you are using the correct ABI and that the error exists on it.", `You can look up the decoded signature here: https://openchain.xyz/signatures?query=${c}.`]), super(i && "execution reverted" !== i || c ? [`The contract function "${n}" reverted with the following ${c?"signature":"reason"}:`, i || c].join("\n") : `The contract function "${n}" reverted.`, {
            cause: r,
            metaMessages: o
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "ContractFunctionRevertedError"
        }), Object.defineProperty(this, "data", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, "reason", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, "signature", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), this.data = s, this.reason = i, this.signature = c
    }
}
class bn extends e {
    constructor({
        functionName: e
    }) {
        super(`The contract function "${e}" returned no data ("0x").`, {
            metaMessages: ["This could be due to any of the following:", `  - The contract does not have the function "${e}",`, "  - The parameters passed to the contract function may be invalid, or", "  - The address is not a contract."]
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "ContractFunctionZeroDataError"
        })
    }
}
class mn extends e {
    constructor({
        data: e,
        message: t
    }) {
        super(t || ""), Object.defineProperty(this, "code", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: 3
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "RawContractError"
        }), Object.defineProperty(this, "data", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), this.data = e
    }
}
class pn extends e {
    constructor({
        body: e,
        details: t,
        headers: n,
        status: a,
        url: r
    }) {
        super("HTTP request failed.", {
            details: t,
            metaMessages: [a && `Status: ${a}`, `URL: ${y(r)}`, e && `Request body: ${rn(e)}`].filter(Boolean)
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "HttpRequestError"
        }), Object.defineProperty(this, "body", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, "headers", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, "status", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, "url", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), this.body = e, this.headers = n, this.status = a, this.url = r
    }
}
class hn extends e {
    constructor({
        body: e,
        error: t,
        url: n
    }) {
        super("RPC Request failed.", {
            cause: t,
            details: t.message,
            metaMessages: [`URL: ${y(n)}`, `Request body: ${rn(e)}`]
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "RpcRequestError"
        }), Object.defineProperty(this, "code", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), this.code = t.code
    }
}
class yn extends e {
    constructor({
        body: e,
        url: t
    }) {
        super("The request took too long to respond.", {
            details: "The request timed out.",
            metaMessages: [`URL: ${y(t)}`, `Request body: ${rn(e)}`]
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "TimeoutError"
        })
    }
}
class gn extends e {
    constructor(e, {
        code: t,
        docsPath: n,
        metaMessages: a,
        shortMessage: r
    }) {
        super(r, {
            cause: e,
            docsPath: n,
            metaMessages: a || (null == e ? void 0 : e.metaMessages)
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "RpcError"
        }), Object.defineProperty(this, "code", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), this.name = e.name, this.code = e instanceof hn ? e.code : t ? ? -1
    }
}
class vn extends gn {
    constructor(e, t) {
        super(e, t), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "ProviderRpcError"
        }), Object.defineProperty(this, "data", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), this.data = t.data
    }
}
class wn extends gn {
    constructor(e) {
        super(e, {
            code: wn.code,
            shortMessage: "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "ParseRpcError"
        })
    }
}
Object.defineProperty(wn, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: -32700
});
class Pn extends gn {
    constructor(e) {
        super(e, {
            code: Pn.code,
            shortMessage: "JSON is not a valid request object."
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "InvalidRequestRpcError"
        })
    }
}
Object.defineProperty(Pn, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: -32600
});
class kn extends gn {
    constructor(e) {
        super(e, {
            code: kn.code,
            shortMessage: "The method does not exist / is not available."
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "MethodNotFoundRpcError"
        })
    }
}
Object.defineProperty(kn, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: -32601
});
class xn extends gn {
    constructor(e) {
        super(e, {
            code: xn.code,
            shortMessage: ["Invalid parameters were provided to the RPC method.", "Double check you have provided the correct parameters."].join("\n")
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "InvalidParamsRpcError"
        })
    }
}
Object.defineProperty(xn, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: -32602
});
class Nn extends gn {
    constructor(e) {
        super(e, {
            code: Nn.code,
            shortMessage: "An internal error was received."
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "InternalRpcError"
        })
    }
}
Object.defineProperty(Nn, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: -32603
});
class En extends gn {
    constructor(e) {
        super(e, {
            code: En.code,
            shortMessage: ["Missing or invalid parameters.", "Double check you have provided the correct parameters."].join("\n")
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "InvalidInputRpcError"
        })
    }
}
Object.defineProperty(En, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: -32e3
});
class Tn extends gn {
    constructor(e) {
        super(e, {
            code: Tn.code,
            shortMessage: "Requested resource not found."
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "ResourceNotFoundRpcError"
        })
    }
}
Object.defineProperty(Tn, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: -32001
});
class jn extends gn {
    constructor(e) {
        super(e, {
            code: jn.code,
            shortMessage: "Requested resource not available."
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "ResourceUnavailableRpcError"
        })
    }
}
Object.defineProperty(jn, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: -32002
});
class Bn extends gn {
    constructor(e) {
        super(e, {
            code: Bn.code,
            shortMessage: "Transaction creation failed."
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "TransactionRejectedRpcError"
        })
    }
}
Object.defineProperty(Bn, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: -32003
});
class On extends gn {
    constructor(e) {
        super(e, {
            code: On.code,
            shortMessage: "Method is not implemented."
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "MethodNotSupportedRpcError"
        })
    }
}
Object.defineProperty(On, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: -32004
});
class In extends gn {
    constructor(e) {
        super(e, {
            code: In.code,
            shortMessage: "Request exceeds defined limit."
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "LimitExceededRpcError"
        })
    }
}
Object.defineProperty(In, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: -32005
});
class $n extends gn {
    constructor(e) {
        super(e, {
            code: $n.code,
            shortMessage: "Version of JSON-RPC protocol is not supported."
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "JsonRpcVersionUnsupportedError"
        })
    }
}
Object.defineProperty($n, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: -32006
});
class Fn extends vn {
    constructor(e) {
        super(e, {
            code: Fn.code,
            shortMessage: "User rejected the request."
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "UserRejectedRequestError"
        })
    }
}
Object.defineProperty(Fn, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: 4001
});
class An extends vn {
    constructor(e) {
        super(e, {
            code: An.code,
            shortMessage: "The requested method and/or account has not been authorized by the user."
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "UnauthorizedProviderError"
        })
    }
}
Object.defineProperty(An, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: 4100
});
class Rn extends vn {
    constructor(e) {
        super(e, {
            code: Rn.code,
            shortMessage: "The Provider does not support the requested method."
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "UnsupportedProviderMethodError"
        })
    }
}
Object.defineProperty(Rn, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: 4200
});
class Mn extends vn {
    constructor(e) {
        super(e, {
            code: Mn.code,
            shortMessage: "The Provider is disconnected from all chains."
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "ProviderDisconnectedError"
        })
    }
}
Object.defineProperty(Mn, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: 4900
});
class Cn extends vn {
    constructor(e) {
        super(e, {
            code: Cn.code,
            shortMessage: "The Provider is not connected to the requested chain."
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "ChainDisconnectedError"
        })
    }
}
Object.defineProperty(Cn, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: 4901
});
class Sn extends vn {
    constructor(e) {
        super(e, {
            code: Sn.code,
            shortMessage: "An error occurred when attempting to switch chain."
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "SwitchChainError"
        })
    }
}
Object.defineProperty(Sn, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: 4902
});
class qn extends gn {
    constructor(e) {
        super(e, {
            shortMessage: "An unknown RPC error occurred."
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "UnknownRpcError"
        })
    }
}
const zn = 3;

function Gn(t, {
    abi: n,
    address: a,
    args: r,
    docsPath: s,
    functionName: o,
    sender: i
}) {
    const {
        code: c,
        data: u,
        message: l,
        shortMessage: d
    } = t instanceof mn ? t : t instanceof e ? t.walk((e => "data" in e)) || t.walk() : {}, f = t instanceof st ? new bn({
        functionName: o
    }) : [zn, Nn.code].includes(c) && (u || l || d) ? new fn({
        abi: n,
        data: "object" == typeof u ? u.data : u,
        functionName: o,
        message: d ? ? l
    }) : t;
    return new dn(f, {
        abi: n,
        args: r,
        contractAddress: a,
        docsPath: s,
        functionName: o,
        sender: i
    })
}
class Dn extends e {
    constructor(e, {
        account: t,
        docsPath: n,
        chain: a,
        data: r,
        gas: s,
        gasPrice: o,
        maxFeePerGas: i,
        maxPriorityFeePerGas: c,
        nonce: u,
        to: l,
        value: d
    }) {
        var f;
        const b = J({
            from: null == t ? void 0 : t.address,
            to: l,
            value: void 0 !== d && `${p(d)} ${(null==(f=null==a?void 0:a.nativeCurrency)?void 0:f.symbol)||"ETH"}`,
            data: r,
            gas: s,
            gasPrice: void 0 !== o && `${Z(o)} gwei`,
            maxFeePerGas: void 0 !== i && `${Z(i)} gwei`,
            maxPriorityFeePerGas: void 0 !== c && `${Z(c)} gwei`,
            nonce: u
        });
        super(e.shortMessage, {
            cause: e,
            docsPath: n,
            metaMessages: [...e.metaMessages ? [...e.metaMessages, " "] : [], "Estimate Gas Arguments:", b].filter(Boolean)
        }), Object.defineProperty(this, "cause", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "EstimateGasExecutionError"
        }), this.cause = e
    }
}

function Ln(t, n) {
    const a = (t.details || "").toLowerCase(),
        r = t instanceof e ? t.walk((e => e.code === K.code)) : t;
    return r instanceof e ? new K({
        cause: t,
        message: r.details
    }) : K.nodeMessage.test(a) ? new K({
        cause: t,
        message: t.details
    }) : Y.nodeMessage.test(a) ? new Y({
        cause: t,
        maxFeePerGas: null == n ? void 0 : n.maxFeePerGas
    }) : Q.nodeMessage.test(a) ? new Q({
        cause: t,
        maxFeePerGas: null == n ? void 0 : n.maxFeePerGas
    }) : X.nodeMessage.test(a) ? new X({
        cause: t,
        nonce: null == n ? void 0 : n.nonce
    }) : ee.nodeMessage.test(a) ? new ee({
        cause: t,
        nonce: null == n ? void 0 : n.nonce
    }) : te.nodeMessage.test(a) ? new te({
        cause: t,
        nonce: null == n ? void 0 : n.nonce
    }) : ne.nodeMessage.test(a) ? new ne({
        cause: t
    }) : ae.nodeMessage.test(a) ? new ae({
        cause: t,
        gas: null == n ? void 0 : n.gas
    }) : re.nodeMessage.test(a) ? new re({
        cause: t,
        gas: null == n ? void 0 : n.gas
    }) : se.nodeMessage.test(a) ? new se({
        cause: t
    }) : oe.nodeMessage.test(a) ? new oe({
        cause: t,
        maxFeePerGas: null == n ? void 0 : n.maxFeePerGas,
        maxPriorityFeePerGas: null == n ? void 0 : n.maxPriorityFeePerGas
    }) : new ie({
        cause: t
    })
}

function Un(e, {
    format: t
}) {
    if (!t) return {};
    const n = {};
    return function t(a) {
        const r = Object.keys(a);
        for (const s of r) s in e && (n[s] = e[s]), a[s] && "object" == typeof a[s] && !Array.isArray(a[s]) && t(a[s])
    }(t(e || {})), n
}

function _n(e) {
    if (e && 0 !== e.length) return e.reduce(((e, {
        slot: t,
        value: n
    }) => {
        if (66 !== t.length) throw new g({
            size: t.length,
            targetSize: 66,
            type: "hex"
        });
        if (66 !== n.length) throw new g({
            size: n.length,
            targetSize: 66,
            type: "hex"
        });
        return e[t] = n, e
    }), {})
}

function Hn(e) {
    const {
        balance: t,
        nonce: n,
        state: r,
        stateDiff: s,
        code: o
    } = e, i = {};
    if (void 0 !== o && (i.code = o), void 0 !== t && (i.balance = a(t)), void 0 !== n && (i.nonce = a(n)), void 0 !== r && (i.state = _n(r)), void 0 !== s) {
        if (i.state) throw new cn;
        i.stateDiff = _n(s)
    }
    return i
}

function Wn(e) {
    if (!e) return;
    const t = {};
    for (const {
            address: n,
            ...a
        } of e) {
        if (!D(n, {
                strict: !1
            })) throw new L({
            address: n
        });
        if (t[n]) throw new on({
            address: n
        });
        t[n] = Hn(a)
    }
    return t
}

function Vn(e) {
    const {
        account: t,
        gasPrice: n,
        maxFeePerGas: a,
        maxPriorityFeePerGas: r,
        to: s
    } = e, o = t ? Dt(t) : void 0;
    if (o && !D(o.address)) throw new L({
        address: o.address
    });
    if (s && !D(s)) throw new L({
        address: s
    });
    if (void 0 !== n && (void 0 !== a || void 0 !== r)) throw new ce;
    if (a && a > 2 n ** 256 n - 1 n) throw new Y({
        maxFeePerGas: a
    });
    if (r && a && r > a) throw new oe({
        maxFeePerGas: a,
        maxPriorityFeePerGas: r
    })
}
class Jn extends e {
    constructor() {
        super("`baseFeeMultiplier` must be greater than 1."), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "BaseFeeScalarError"
        })
    }
}
class Zn extends e {
    constructor() {
        super("Chain does not support EIP-1559 fees."), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Eip1559FeesNotSupportedError"
        })
    }
}
class Kn extends e {
    constructor({
        maxPriorityFeePerGas: e
    }) {
        super(`\`maxFeePerGas\` cannot be less than the \`maxPriorityFeePerGas\` (${Z(e)} gwei).`), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "MaxFeePerGasTooLowError"
        })
    }
}
class Yn extends e {
    constructor({
        blockHash: e,
        blockNumber: t
    }) {
        let n = "Block";
        e && (n = `Block at hash "${e}"`), t && (n = `Block at number "${t}"`), super(`${n} could not be found.`), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "BlockNotFoundError"
        })
    }
}
async function Qn(e, {
    blockHash: t,
    blockNumber: n,
    blockTag: r,
    includeTransactions: s
} = {}) {
    var o, i, c;
    const u = r ? ? "latest",
        l = s ? ? !1,
        d = void 0 !== n ? a(n) : void 0;
    let f = null;
    if (f = t ? await e.request({
            method: "eth_getBlockByHash",
            params: [t, l]
        }) : await e.request({
            method: "eth_getBlockByNumber",
            params: [d || u, l]
        }), !f) throw new Yn({
        blockHash: t,
        blockNumber: n
    });
    return ((null == (c = null == (i = null == (o = e.chain) ? void 0 : o.formatters) ? void 0 : i.block) ? void 0 : c.format) || ue)(f)
}
async function Xn(e) {
    const t = await e.request({
        method: "eth_gasPrice"
    });
    return BigInt(t)
}
async function ea(e, t) {
    var n, a, r;
    const {
        block: s,
        chain: o = e.chain,
        request: i
    } = t || {};
    if ("function" == typeof(null == (n = null == o ? void 0 : o.fees) ? void 0 : n.defaultPriorityFee)) {
        const t = s || await Xe(e, Qn, "getBlock")({});
        return o.fees.defaultPriorityFee({
            block: t,
            client: e,
            request: i
        })
    }
    if (void 0 !== (null == (a = null == o ? void 0 : o.fees) ? void 0 : a.defaultPriorityFee)) return null == (r = null == o ? void 0 : o.fees) ? void 0 : r.defaultPriorityFee;
    try {
        const t = await e.request({
            method: "eth_maxPriorityFeePerGas"
        });
        return l(t)
    } catch {
        const [t, n] = await Promise.all([s ? Promise.resolve(s) : Xe(e, Qn, "getBlock")({}), Xe(e, Xn, "getGasPrice")({})]);
        if ("bigint" != typeof t.baseFeePerGas) throw new Zn;
        const a = n - t.baseFeePerGas;
        return a < 0 n ? 0 n : a
    }
}
async function ta(e, t) {
    var n, a;
    const {
        block: r,
        chain: s = e.chain,
        request: o,
        type: i = "eip1559"
    } = t || {}, c = await (async () => {
        var t, n;
        return "function" == typeof(null == (t = null == s ? void 0 : s.fees) ? void 0 : t.baseFeeMultiplier) ? s.fees.baseFeeMultiplier({
            block: r,
            client: e,
            request: o
        }) : (null == (n = null == s ? void 0 : s.fees) ? void 0 : n.baseFeeMultiplier) ? ? 1.2
    })();
    if (c < 1) throw new Jn;
    const u = 10 ** ((null == (n = c.toString().split(".")[1]) ? void 0 : n.length) ? ? 0),
        l = e => e * BigInt(Math.ceil(c * u)) / BigInt(u),
        d = r || await Xe(e, Qn, "getBlock")({});
    if ("function" == typeof(null == (a = null == s ? void 0 : s.fees) ? void 0 : a.estimateFeesPerGas)) {
        const t = await s.fees.estimateFeesPerGas({
            block: r,
            client: e,
            multiply: l,
            request: o,
            type: i
        });
        if (null !== t) return t
    }
    if ("eip1559" === i) {
        if ("bigint" != typeof d.baseFeePerGas) throw new Zn;
        const t = "bigint" == typeof(null == o ? void 0 : o.maxPriorityFeePerGas) ? o.maxPriorityFeePerGas : await ea(e, {
                block: d,
                chain: s,
                request: o
            }),
            n = l(d.baseFeePerGas);
        return {
            maxFeePerGas: (null == o ? void 0 : o.maxFeePerGas) ? ? n + t,
            maxPriorityFeePerGas: t
        }
    }
    return {
        gasPrice: (null == o ? void 0 : o.gasPrice) ? ? l(await Xe(e, Xn, "getGasPrice")({}))
    }
}
async function na(e, {
    address: t,
    blockTag: n = "latest",
    blockNumber: r
}) {
    const s = await e.request({
        method: "eth_getTransactionCount",
        params: [t, r ? a(r) : n]
    });
    return b(s)
}
async function aa(e) {
    const t = await e.request({
        method: "eth_chainId"
    });
    return b(t)
}
const ra = ["blobVersionedHashes", "chainId", "fees", "gas", "nonce", "type"];
async function sa(e, t) {
    const {
        account: n = e.account,
        blobs: a,
        chain: r,
        chainId: s,
        gas: o,
        kzg: i,
        nonce: c,
        parameters: u = ra,
        type: l
    } = t, d = n ? Dt(n) : void 0, f = { ...t,
        ...d ? {
            from: null == d ? void 0 : d.address
        } : {}
    };
    let b;
    async function m() {
        return b || (b = await Xe(e, Qn, "getBlock")({
            blockTag: "latest"
        }), b)
    }
    if ((u.includes("blobVersionedHashes") || u.includes("sidecars")) && a && i) {
        const e = le({
            blobs: a,
            kzg: i
        });
        if (u.includes("blobVersionedHashes")) {
            const t = de({
                commitments: e,
                to: "hex"
            });
            f.blobVersionedHashes = t
        }
        if (u.includes("sidecars")) {
            const t = fe({
                    blobs: a,
                    commitments: e,
                    kzg: i
                }),
                n = be({
                    blobs: a,
                    commitments: e,
                    proofs: t,
                    to: "hex"
                });
            f.sidecars = n
        }
    }
    if (u.includes("chainId") && (f.chainId = r ? r.id : void 0 !== s ? s : await Xe(e, aa, "getChainId")({})), u.includes("nonce") && void 0 === c && d && (f.nonce = await Xe(e, na, "getTransactionCount")({
            address: d.address,
            blockTag: "pending"
        })), (u.includes("fees") || u.includes("type")) && void 0 === l) try {
        f.type = me(f)
    } catch {
        const e = await m();
        f.type = "bigint" == typeof(null == e ? void 0 : e.baseFeePerGas) ? "eip1559" : "legacy"
    }
    if (u.includes("fees"))
        if ("legacy" !== f.type && "eip2930" !== f.type) {
            if (void 0 === f.maxFeePerGas || void 0 === f.maxPriorityFeePerGas) {
                const n = await m(),
                    {
                        maxFeePerGas: a,
                        maxPriorityFeePerGas: s
                    } = await ta(e, {
                        block: n,
                        chain: r,
                        request: f
                    });
                if (void 0 === t.maxPriorityFeePerGas && t.maxFeePerGas && t.maxFeePerGas < s) throw new Kn({
                    maxPriorityFeePerGas: s
                });
                f.maxPriorityFeePerGas = s, f.maxFeePerGas = a
            }
        } else {
            if (void 0 !== t.maxFeePerGas || void 0 !== t.maxPriorityFeePerGas) throw new Zn;
            const n = await m(),
                {
                    gasPrice: a
                } = await ta(e, {
                    block: n,
                    chain: r,
                    request: f,
                    type: "legacy"
                });
            f.gasPrice = a
        }
    return u.includes("gas") && void 0 === o && (f.gas = await Xe(e, oa, "estimateGas")({ ...f,
        account: d ? {
            address: d.address,
            type: "json-rpc"
        } : void 0
    })), Vn(f), delete f.parameters, f
}
async function oa(e, t) {
    var n, r, s;
    const o = t.account ? ? e.account,
        i = o ? Dt(o) : void 0;
    try {
        const {
            accessList: o,
            blobs: c,
            blobVersionedHashes: u,
            blockNumber: l,
            blockTag: d,
            data: f,
            gas: b,
            gasPrice: m,
            maxFeePerBlobGas: p,
            maxFeePerGas: h,
            maxPriorityFeePerGas: y,
            nonce: g,
            to: v,
            value: w,
            stateOverride: P,
            ...k
        } = await sa(e, { ...t,
            parameters: "local" === (null == i ? void 0 : i.type) ? void 0 : ["blobVersionedHashes"]
        }), x = (l ? a(l) : void 0) || d, N = Wn(P);
        Vn(t);
        const E = null == (s = null == (r = null == (n = e.chain) ? void 0 : n.formatters) ? void 0 : r.transactionRequest) ? void 0 : s.format,
            T = (E || pe)({ ...Un(k, {
                    format: E
                }),
                from: null == i ? void 0 : i.address,
                accessList: o,
                blobs: c,
                blobVersionedHashes: u,
                data: f,
                gas: b,
                gasPrice: m,
                maxFeePerBlobGas: p,
                maxFeePerGas: h,
                maxPriorityFeePerGas: y,
                nonce: g,
                to: v,
                value: w
            }),
            j = await e.request({
                method: "eth_estimateGas",
                params: N ? [T, x ? ? "latest", N] : x ? [T, x] : [T]
            });
        return BigInt(j)
    } catch (c) {
        throw function(e, {
            docsPath: t,
            ...n
        }) {
            const a = (() => {
                const t = Ln(e, n);
                return t instanceof ie ? e : t
            })();
            return new Dn(a, {
                docsPath: t,
                ...n
            })
        }(c, { ...t,
            account: i,
            chain: e.chain
        })
    }
}
const ia = "/docs/contract/decodeEventLog";

function ca(e) {
    const {
        abi: n,
        data: a,
        strict: r,
        topics: s
    } = e, o = r ? ? !0, [i, ...c] = s;
    if (!i) throw new lt({
        docsPath: ia
    });
    const u = n.find((e => "event" === e.type && i === jt(et(e))));
    if (!u || !("name" in u) || "event" !== u.type) throw new dt(i, {
        docsPath: ia
    });
    const {
        name: l,
        inputs: d
    } = u, f = null == d ? void 0 : d.some((e => !("name" in e && e.name)));
    let b = f ? [] : {};
    const m = d.filter((e => "indexed" in e && e.indexed));
    for (let t = 0; t < m.length; t++) {
        const e = m[t],
            n = c[t];
        if (!n) throw new gt({
            abiItem: u,
            param: e
        });
        b[f ? t : e.name || t] = ua({
            param: e,
            value: n
        })
    }
    const p = d.filter((e => !("indexed" in e && e.indexed)));
    if (p.length > 0)
        if (a && "0x" !== a) try {
            const e = Qt(p, a);
            if (e)
                if (f) b = [...b, ...e];
                else
                    for (let t = 0; t < p.length; t++) b[p[t].name] = e[t]
        } catch (h) {
            if (o) {
                if (h instanceof rt || h instanceof he) throw new yt({
                    abiItem: u,
                    data: a,
                    params: p,
                    size: t(a)
                });
                throw h
            }
        } else if (o) throw new yt({
            abiItem: u,
            data: "0x",
            params: p,
            size: 0
        });
    return {
        eventName: l,
        args: Object.values(b).length > 0 ? b : void 0
    }
}

function ua({
    param: e,
    value: t
}) {
    if ("string" === e.type || "bytes" === e.type || "tuple" === e.type || e.type.match(/^(.*)\[(\d+)?\]$/)) return t;
    return (Qt([e], t) || [])[0]
}

function la({
    abi: e,
    eventName: t,
    logs: n,
    strict: a = !0
}) {
    return n.map((n => {
        var r;
        try {
            const r = ca({ ...n,
                abi: e,
                strict: a
            });
            return t && !t.includes(r.eventName) ? null : { ...r,
                ...n
            }
        } catch (s) {
            let e, t;
            if (s instanceof dt) return null;
            if (s instanceof yt || s instanceof gt) {
                if (a) return null;
                e = s.abiItem.name, t = null == (r = s.abiItem.inputs) ? void 0 : r.some((e => !("name" in e && e.name)))
            }
            return { ...n,
                args: t ? [] : {},
                eventName: e
            }
        }
    })).filter(Boolean)
}
async function da(e, {
    address: t,
    blockHash: n,
    fromBlock: r,
    toBlock: s,
    event: o,
    events: i,
    args: c,
    strict: u
} = {}) {
    const l = u ? ? !1,
        d = i ? ? (o ? [o] : void 0);
    let f, b = [];
    d && (b = [d.flatMap((e => St({
        abi: [e],
        eventName: e.name,
        args: c
    })))], o && (b = b[0])), f = n ? await e.request({
        method: "eth_getLogs",
        params: [{
            address: t,
            topics: b,
            blockHash: n
        }]
    }) : await e.request({
        method: "eth_getLogs",
        params: [{
            address: t,
            topics: b,
            fromBlock: "bigint" == typeof r ? a(r) : r,
            toBlock: "bigint" == typeof s ? a(s) : s
        }]
    });
    const m = f.map((e => ye(e)));
    return d ? la({
        abi: d,
        logs: m,
        strict: l
    }) : m
}
async function fa(e, t) {
    const {
        abi: n,
        address: a,
        args: r,
        blockHash: s,
        eventName: o,
        fromBlock: i,
        toBlock: c,
        strict: u
    } = t, l = o ? At({
        abi: n,
        name: o
    }) : void 0, d = l ? void 0 : n.filter((e => "event" === e.type));
    return Xe(e, da, "getLogs")({
        address: a,
        args: r,
        blockHash: s,
        event: l,
        events: d,
        fromBlock: i,
        toBlock: c,
        strict: u
    })
}
const ba = "/docs/contract/decodeFunctionResult";

function ma(e) {
    const {
        abi: t,
        args: n,
        functionName: a,
        data: r
    } = e;
    let s = t[0];
    if (a) {
        const e = At({
            abi: t,
            args: n,
            name: a
        });
        if (!e) throw new bt(a, {
            docsPath: ba
        });
        s = e
    }
    if ("function" !== s.type) throw new bt(void 0, {
        docsPath: ba
    });
    if (!s.outputs) throw new mt(s.name, {
        docsPath: ba
    });
    const o = Qt(s.outputs, r);
    return o && o.length > 1 ? o : o && 1 === o.length ? o[0] : void 0
}
const pa = [{
        inputs: [{
            components: [{
                name: "target",
                type: "address"
            }, {
                name: "allowFailure",
                type: "bool"
            }, {
                name: "callData",
                type: "bytes"
            }],
            name: "calls",
            type: "tuple[]"
        }],
        name: "aggregate3",
        outputs: [{
            components: [{
                name: "success",
                type: "bool"
            }, {
                name: "returnData",
                type: "bytes"
            }],
            name: "returnData",
            type: "tuple[]"
        }],
        stateMutability: "view",
        type: "function"
    }],
    ha = [{
        inputs: [],
        name: "ResolverNotFound",
        type: "error"
    }, {
        inputs: [],
        name: "ResolverWildcardNotSupported",
        type: "error"
    }, {
        inputs: [],
        name: "ResolverNotContract",
        type: "error"
    }, {
        inputs: [{
            name: "returnData",
            type: "bytes"
        }],
        name: "ResolverError",
        type: "error"
    }, {
        inputs: [{
            components: [{
                name: "status",
                type: "uint16"
            }, {
                name: "message",
                type: "string"
            }],
            name: "errors",
            type: "tuple[]"
        }],
        name: "HttpError",
        type: "error"
    }],
    ya = [...ha, {
        name: "resolve",
        type: "function",
        stateMutability: "view",
        inputs: [{
            name: "name",
            type: "bytes"
        }, {
            name: "data",
            type: "bytes"
        }],
        outputs: [{
            name: "",
            type: "bytes"
        }, {
            name: "address",
            type: "address"
        }]
    }, {
        name: "resolve",
        type: "function",
        stateMutability: "view",
        inputs: [{
            name: "name",
            type: "bytes"
        }, {
            name: "data",
            type: "bytes"
        }, {
            name: "gateways",
            type: "string[]"
        }],
        outputs: [{
            name: "",
            type: "bytes"
        }, {
            name: "address",
            type: "address"
        }]
    }],
    ga = [...ha, {
        name: "reverse",
        type: "function",
        stateMutability: "view",
        inputs: [{
            type: "bytes",
            name: "reverseName"
        }],
        outputs: [{
            type: "string",
            name: "resolvedName"
        }, {
            type: "address",
            name: "resolvedAddress"
        }, {
            type: "address",
            name: "reverseResolver"
        }, {
            type: "address",
            name: "resolver"
        }]
    }, {
        name: "reverse",
        type: "function",
        stateMutability: "view",
        inputs: [{
            type: "bytes",
            name: "reverseName"
        }, {
            type: "string[]",
            name: "gateways"
        }],
        outputs: [{
            type: "string",
            name: "resolvedName"
        }, {
            type: "address",
            name: "resolvedAddress"
        }, {
            type: "address",
            name: "reverseResolver"
        }, {
            type: "address",
            name: "resolver"
        }]
    }],
    va = [{
        name: "text",
        type: "function",
        stateMutability: "view",
        inputs: [{
            name: "name",
            type: "bytes32"
        }, {
            name: "key",
            type: "string"
        }],
        outputs: [{
            name: "",
            type: "string"
        }]
    }],
    wa = [{
        name: "addr",
        type: "function",
        stateMutability: "view",
        inputs: [{
            name: "name",
            type: "bytes32"
        }],
        outputs: [{
            name: "",
            type: "address"
        }]
    }, {
        name: "addr",
        type: "function",
        stateMutability: "view",
        inputs: [{
            name: "name",
            type: "bytes32"
        }, {
            name: "coinType",
            type: "uint256"
        }],
        outputs: [{
            name: "",
            type: "bytes"
        }]
    }],
    Pa = [{
        inputs: [{
            internalType: "address",
            name: "_signer",
            type: "address"
        }, {
            internalType: "bytes32",
            name: "_hash",
            type: "bytes32"
        }, {
            internalType: "bytes",
            name: "_signature",
            type: "bytes"
        }],
        stateMutability: "nonpayable",
        type: "constructor"
    }],
    ka = "0x82ad56cb";

function xa({
    blockNumber: e,
    chain: t,
    contract: n
}) {
    var a;
    const r = null == (a = null == t ? void 0 : t.contracts) ? void 0 : a[n];
    if (!r) throw new ge({
        chain: t,
        contract: {
            name: n
        }
    });
    if (e && r.blockCreated && r.blockCreated > e) throw new ge({
        blockNumber: e,
        chain: t,
        contract: {
            name: n,
            blockCreated: r.blockCreated
        }
    });
    return r.address
}
const Na = new Map;

function Ea({
    fn: e,
    id: t,
    shouldSplitBatch: n,
    wait: a = 0,
    sort: r
}) {
    const s = async () => {
            const t = i();
            o();
            const n = t.map((({
                args: e
            }) => e));
            0 !== n.length && e(n).then((e => {
                var n;
                r && Array.isArray(e) && e.sort(r);
                for (let a = 0; a < t.length; a++) {
                    const {
                        pendingPromise: r
                    } = t[a];
                    null == (n = r.resolve) || n.call(r, [e[a], e])
                }
            })).catch((e => {
                var n;
                for (let a = 0; a < t.length; a++) {
                    const {
                        pendingPromise: r
                    } = t[a];
                    null == (n = r.reject) || n.call(r, e)
                }
            }))
        },
        o = () => Na.delete(t),
        i = () => Na.get(t) || [],
        c = e => Na.set(t, [...i(), e]);
    return {
        flush: o,
        async schedule(e) {
            const t = {},
                r = new Promise(((e, n) => {
                    t.resolve = e, t.reject = n
                }));
            (null == n ? void 0 : n([...i().map((({
                args: e
            }) => e)), e])) && s();
            return i().length > 0 ? (c({
                args: e,
                pendingPromise: t
            }), r) : (c({
                args: e,
                pendingPromise: t
            }), setTimeout(s, a), r)
        }
    }
}
async function Ta(t, n) {
    var r, s, o, i;
    const {
        account: c = t.account,
        batch: u = Boolean(null == (r = t.batch) ? void 0 : r.multicall),
        blockNumber: l,
        blockTag: d = "latest",
        accessList: f,
        blobs: b,
        data: m,
        gas: p,
        gasPrice: h,
        maxFeePerBlobGas: y,
        maxFeePerGas: g,
        maxPriorityFeePerGas: w,
        nonce: P,
        to: k,
        value: x,
        stateOverride: N,
        ...E
    } = n, T = c ? Dt(c) : void 0;
    try {
        Vn(n);
        const e = (l ? a(l) : void 0) || d,
            r = Wn(N),
            c = null == (i = null == (o = null == (s = t.chain) ? void 0 : s.formatters) ? void 0 : o.transactionRequest) ? void 0 : i.format,
            v = (c || pe)({ ...Un(E, {
                    format: c
                }),
                from: null == T ? void 0 : T.address,
                accessList: f,
                blobs: b,
                data: m,
                gas: p,
                gasPrice: h,
                maxFeePerBlobGas: y,
                maxFeePerGas: g,
                maxPriorityFeePerGas: w,
                nonce: P,
                to: k,
                value: x
            });
        if (u && function({
                request: e
            }) {
                const {
                    data: t,
                    to: n,
                    ...a
                } = e;
                return !!t && (!t.startsWith(ka) && (!!n && !(Object.values(a).filter((e => void 0 !== e)).length > 0)))
            }({
                request: v
            }) && !r) try {
            return await async function(e, t) {
                var n;
                const {
                    batchSize: r = 1024,
                    wait: s = 0
                } = "object" == typeof(null == (n = e.batch) ? void 0 : n.multicall) ? e.batch.multicall: {}, {
                    blockNumber: o,
                    blockTag: i = "latest",
                    data: c,
                    multicallAddress: u,
                    to: l
                } = t;
                let d = u;
                if (!d) {
                    if (!e.chain) throw new ve;
                    d = xa({
                        blockNumber: o,
                        chain: e.chain,
                        contract: "multicall3"
                    })
                }
                const f = o ? a(o) : void 0,
                    b = f || i,
                    {
                        schedule: m
                    } = Ea({
                        id: `${e.uid}.${b}`,
                        wait: s,
                        shouldSplitBatch: e => e.reduce(((e, {
                            data: t
                        }) => e + (t.length - 2)), 0) > 2 * r,
                        fn: async t => {
                            const n = t.map((e => ({
                                    allowFailure: !0,
                                    callData: e.data,
                                    target: e.to
                                }))),
                                a = _t({
                                    abi: pa,
                                    args: [n],
                                    functionName: "aggregate3"
                                }),
                                r = await e.request({
                                    method: "eth_call",
                                    params: [{
                                        data: a,
                                        to: d
                                    }, b]
                                });
                            return ma({
                                abi: pa,
                                args: [n],
                                functionName: "aggregate3",
                                data: r || "0x"
                            })
                        }
                    }),
                    [{
                        returnData: p,
                        success: h
                    }] = await m({
                        data: c,
                        to: l
                    });
                if (!h) throw new mn({
                    data: p
                });
                return "0x" === p ? {
                    data: void 0
                } : {
                    data: p
                }
            }(t, { ...v,
                blockNumber: l,
                blockTag: d
            })
        } catch (j) {
            if (!(j instanceof ve || j instanceof ge)) throw j
        }
        const B = await t.request({
            method: "eth_call",
            params: r ? [v, e, r] : [v, e]
        });
        return "0x" === B ? {
            data: void 0
        } : {
            data: B
        }
    } catch (j) {
        const a = function(t) {
                var n;
                if (!(t instanceof e)) return;
                const a = t.walk();
                return "object" == typeof(null == a ? void 0 : a.data) ? null == (n = a.data) ? void 0 : n.data : a.data
            }(j),
            {
                offchainLookup: r,
                offchainLookupSignature: s
            } = await v((async () => {
                const {
                    offchainLookup: e,
                    offchainLookupSignature: t
                } = await Promise.resolve().then((() => Br));
                return {
                    offchainLookup: e,
                    offchainLookupSignature: t
                }
            }), void 0);
        if (!1 !== t.ccipRead && (null == a ? void 0 : a.slice(0, 10)) === s && k) return {
            data: await r(t, {
                data: a,
                to: k
            })
        };
        throw function(e, {
            docsPath: t,
            ...n
        }) {
            const a = (() => {
                const t = Ln(e, n);
                return t instanceof ie ? e : t
            })();
            return new ln(a, {
                docsPath: t,
                ...n
            })
        }(j, { ...n,
            account: T,
            chain: t.chain
        })
    }
}
async function ja(e, t) {
    const {
        abi: n,
        address: a,
        args: r,
        functionName: s,
        ...o
    } = t, i = _t({
        abi: n,
        args: r,
        functionName: s
    });
    try {
        const {
            data: t
        } = await Xe(e, Ta, "call")({ ...o,
            data: i,
            to: a
        });
        return ma({
            abi: n,
            args: r,
            functionName: s,
            data: t || "0x"
        })
    } catch (c) {
        throw Gn(c, {
            abi: n,
            address: a,
            args: r,
            docsPath: "/docs/contract/readContract",
            functionName: s
        })
    }
}
const Ba = new Map,
    Oa = new Map;
let Ia = 0;

function $a(e, t, n) {
    const a = ++Ia,
        r = () => Ba.get(e) || [],
        s = () => {
            const t = Oa.get(e);
            1 === r().length && t && t(), (() => {
                const t = r();
                Ba.set(e, t.filter((e => e.id !== a)))
            })()
        },
        o = r();
    if (Ba.set(e, [...o, {
            id: a,
            fns: t
        }]), o && o.length > 0) return s;
    const i = {};
    for (const u in t) i[u] = (...e) => {
        var t, n;
        const a = r();
        if (0 !== a.length)
            for (const r of a) null == (n = (t = r.fns)[u]) || n.call(t, ...e)
    };
    const c = n(i);
    return "function" == typeof c && Oa.set(e, c), s
}
async function Fa(e) {
    return new Promise((t => setTimeout(t, e)))
}

function Aa(e, {
    emitOnBegin: t,
    initialWaitTime: n,
    interval: a
}) {
    let r = !0;
    const s = () => r = !1;
    return (async () => {
        let o;
        t && (o = await e({
            unpoll: s
        }));
        const i = await (null == n ? void 0 : n(o)) ? ? a;
        await Fa(i);
        const c = async () => {
            r && (await e({
                unpoll: s
            }), await Fa(a), c())
        };
        c()
    })(), s
}
const Ra = new Map,
    Ma = new Map;
async function Ca(e, {
    cacheKey: t,
    cacheTime: n = Number.POSITIVE_INFINITY
}) {
    const a = function(e) {
            const t = (e, t) => ({
                    clear: () => t.delete(e),
                    get: () => t.get(e),
                    set: n => t.set(e, n)
                }),
                n = t(e, Ra),
                a = t(e, Ma);
            return {
                clear: () => {
                    n.clear(), a.clear()
                },
                promise: n,
                response: a
            }
        }(t),
        r = a.response.get();
    if (r && n > 0) {
        if ((new Date).getTime() - r.created.getTime() < n) return r.data
    }
    let s = a.promise.get();
    s || (s = e(), a.promise.set(s));
    try {
        const e = await s;
        return a.response.set({
            created: new Date,
            data: e
        }), e
    } finally {
        a.promise.clear()
    }
}
async function Sa(e, {
    cacheTime: t = e.cacheTime
} = {}) {
    const n = await Ca((() => e.request({
        method: "eth_blockNumber"
    })), {
        cacheKey: (a = e.uid, `blockNumber.${a}`),
        cacheTime: t
    });
    var a;
    return BigInt(n)
}
async function qa(e, {
    filter: t
}) {
    const n = "strict" in t && t.strict,
        a = await t.request({
            method: "eth_getFilterChanges",
            params: [t.id]
        });
    if ("string" == typeof a[0]) return a;
    const r = a.map((e => ye(e)));
    return "abi" in t && t.abi ? la({
        abi: t.abi,
        logs: r,
        strict: n
    }) : r
}
async function za(e, {
    filter: t
}) {
    return t.request({
        method: "eth_uninstallFilter",
        params: [t.id]
    })
}
let Ga, Da = 256;

function La(e = 11) {
    if (!Ga || Da + e > 512) {
        Ga = "", Da = 0;
        for (let e = 0; e < 256; e++) Ga += (256 + 256 * Math.random() | 0).toString(16).substring(1)
    }
    return Ga.substring(Da, Da++ + e)
}

function Ua(e) {
    const {
        batch: t,
        cacheTime: n = e.pollingInterval ? ? 4e3,
        ccipRead: a,
        key: r = "base",
        name: s = "Base Client",
        pollingInterval: o = 4e3,
        type: i = "base"
    } = e, c = e.chain, u = e.account ? Dt(e.account) : void 0, {
        config: l,
        request: d,
        value: f
    } = e.transport({
        chain: c,
        pollingInterval: o
    }), b = {
        account: u,
        batch: t,
        cacheTime: n,
        ccipRead: a,
        chain: c,
        key: r,
        name: s,
        pollingInterval: o,
        request: d,
        transport: { ...l,
            ...f
        },
        type: i,
        uid: La()
    };
    return Object.assign(b, {
        extend: function e(t) {
            return n => {
                const a = n(t);
                for (const e in b) delete a[e];
                const r = { ...t,
                    ...a
                };
                return Object.assign(r, {
                    extend: e(r)
                })
            }
        }(b)
    })
}

function _a(e, {
    delay: t = 100,
    retryCount: n = 2,
    shouldRetry: a = () => !0
} = {}) {
    return new Promise(((r, s) => {
        const o = async ({
            count: i = 0
        } = {}) => {
            try {
                const t = await e();
                r(t)
            } catch (c) {
                if (i < n && await a({
                        count: i,
                        error: c
                    })) return (async ({
                    error: e
                }) => {
                    const n = "function" == typeof t ? t({
                        count: i,
                        error: e
                    }) : t;
                    n && await Fa(n), o({
                        count: i + 1
                    })
                })({
                    error: c
                });
                s(c)
            }
        };
        o()
    }))
}

function Ha(t, n = {}) {
    return async (a, r = {}) => {
        const {
            retryDelay: s = 150,
            retryCount: o = 3
        } = { ...n,
            ...r
        };
        return _a((async () => {
            try {
                return await t(a)
            } catch (n) {
                const t = n;
                switch (t.code) {
                    case wn.code:
                        throw new wn(t);
                    case Pn.code:
                        throw new Pn(t);
                    case kn.code:
                        throw new kn(t);
                    case xn.code:
                        throw new xn(t);
                    case Nn.code:
                        throw new Nn(t);
                    case En.code:
                        throw new En(t);
                    case Tn.code:
                        throw new Tn(t);
                    case jn.code:
                        throw new jn(t);
                    case Bn.code:
                        throw new Bn(t);
                    case On.code:
                        throw new On(t);
                    case In.code:
                        throw new In(t);
                    case $n.code:
                        throw new $n(t);
                    case Fn.code:
                        throw new Fn(t);
                    case An.code:
                        throw new An(t);
                    case Rn.code:
                        throw new Rn(t);
                    case Mn.code:
                        throw new Mn(t);
                    case Cn.code:
                        throw new Cn(t);
                    case Sn.code:
                        throw new Sn(t);
                    case 5e3:
                        throw new Fn(t);
                    default:
                        if (n instanceof e) throw n;
                        throw new qn(t)
                }
            }
        }), {
            delay: ({
                count: e,
                error: t
            }) => {
                var n;
                if (t && t instanceof pn) {
                    const e = null == (n = null == t ? void 0 : t.headers) ? void 0 : n.get("Retry-After");
                    if (null == e ? void 0 : e.match(/\d/)) return 1e3 * Number.parseInt(e)
                }
                return (1 << e) * s
            },
            retryCount: o,
            shouldRetry: ({
                error: e
            }) => function(e) {
                if ("code" in e && "number" == typeof e.code) return -1 === e.code || (e.code === In.code || e.code === Nn.code);
                if (e instanceof pn && e.status) return 403 === e.status || (408 === e.status || (413 === e.status || (429 === e.status || (500 === e.status || (502 === e.status || (503 === e.status || 504 === e.status))))));
                return !0
            }(e)
        })
    }
}

function Wa({
    key: e,
    name: t,
    request: n,
    retryCount: a = 3,
    retryDelay: r = 150,
    timeout: s,
    type: o
}, i) {
    return {
        config: {
            key: e,
            name: t,
            request: n,
            retryCount: a,
            retryDelay: r,
            timeout: s,
            type: o
        },
        request: Ha(n, {
            retryCount: a,
            retryDelay: r
        }),
        value: i
    }
}
class Va extends e {
    constructor() {
        super("No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.", {
            docsPath: "/docs/clients/intro"
        })
    }
}

function Ja(e, {
    errorInstance: t = new Error("timed out"),
    timeout: n,
    signal: a
}) {
    return new Promise(((r, s) => {
        (async () => {
            let o;
            try {
                const i = new AbortController;
                n > 0 && (o = setTimeout((() => {
                    a ? i.abort() : s(t)
                }), n)), r(await e({
                    signal: (null == i ? void 0 : i.signal) || null
                }))
            } catch (i) {
                "AbortError" === i.name && s(t), s(i)
            } finally {
                clearTimeout(o)
            }
        })()
    }))
}

function Za() {
    return {
        current: 0,
        take() {
            return this.current++
        },
        reset() {
            this.current = 0
        }
    }
}
const Ka = Za();

function Ya(e, t = {}) {
    const {
        batch: n,
        fetchOptions: a,
        key: r = "http",
        name: s = "HTTP JSON-RPC",
        onFetchRequest: o,
        onFetchResponse: i,
        retryDelay: c
    } = t;
    return ({
        chain: u,
        retryCount: l,
        timeout: d
    }) => {
        const {
            batchSize: f = 1e3,
            wait: b = 0
        } = "object" == typeof n ? n : {}, m = t.retryCount ? ? l, p = d ? ? t.timeout ? ? 1e4, h = e || (null == u ? void 0 : u.rpcUrls.default.http[0]);
        if (!h) throw new Va;
        const y = function(e, t = {}) {
            return {
                async request(n) {
                    var a;
                    const {
                        body: r,
                        onRequest: s = t.onRequest,
                        onResponse: o = t.onResponse,
                        timeout: i = t.timeout ? ? 1e4
                    } = n, c = { ...t.fetchOptions ? ? {},
                        ...n.fetchOptions ? ? {}
                    }, {
                        headers: u,
                        method: l,
                        signal: d
                    } = c;
                    try {
                        const t = await Ja((async ({
                            signal: t
                        }) => {
                            const n = { ...c,
                                    body: Array.isArray(r) ? rn(r.map((e => ({
                                        jsonrpc: "2.0",
                                        id: e.id ? ? Ka.take(),
                                        ...e
                                    })))) : rn({
                                        jsonrpc: "2.0",
                                        id: r.id ? ? Ka.take(),
                                        ...r
                                    }),
                                    headers: { ...u,
                                        "Content-Type": "application/json"
                                    },
                                    method: l || "POST",
                                    signal: d || (i > 0 ? t : null)
                                },
                                a = new Request(e, n);
                            return s && await s(a), await fetch(e, n)
                        }), {
                            errorInstance: new yn({
                                body: r,
                                url: e
                            }),
                            timeout: i,
                            signal: !0
                        });
                        let n;
                        if (o && await o(t), (null == (a = t.headers.get("Content-Type")) ? void 0 : a.startsWith("application/json")) ? n = await t.json() : (n = await t.text(), n = JSON.parse(n || "{}")), !t.ok) throw new pn({
                            body: r,
                            details: rn(n.error) || t.statusText,
                            headers: t.headers,
                            status: t.status,
                            url: e
                        });
                        return n
                    } catch (f) {
                        if (f instanceof pn) throw f;
                        if (f instanceof yn) throw f;
                        throw new pn({
                            body: r,
                            details: f.message,
                            url: e
                        })
                    }
                }
            }
        }(h, {
            fetchOptions: a,
            onRequest: o,
            onResponse: i,
            timeout: p
        });
        return Wa({
            key: r,
            name: s,
            async request({
                method: e,
                params: t
            }) {
                const a = {
                        method: e,
                        params: t
                    },
                    {
                        schedule: r
                    } = Ea({
                        id: h,
                        wait: b,
                        shouldSplitBatch: e => e.length > f,
                        fn: e => y.request({
                            body: e
                        }),
                        sort: (e, t) => e.id - t.id
                    }),
                    [{
                        error: s,
                        result: o
                    }] = await (async e => n ? r(e) : [await y.request({
                        body: e
                    })])(a);
                if (s) throw new hn({
                    body: a,
                    error: s,
                    url: h
                });
                return o
            },
            retryCount: m,
            retryDelay: c,
            timeout: p,
            type: "http"
        }, {
            fetchOptions: a,
            url: h
        })
    }
}

function Qa(t, n) {
    var a, r, s, o, i, c;
    if (!(t instanceof e)) return !1;
    const u = t.walk((e => e instanceof fn));
    return u instanceof fn && ("ResolverNotFound" === (null == (a = u.data) ? void 0 : a.errorName) || ("ResolverWildcardNotSupported" === (null == (r = u.data) ? void 0 : r.errorName) || ("ResolverNotContract" === (null == (s = u.data) ? void 0 : s.errorName) || ("ResolverError" === (null == (o = u.data) ? void 0 : o.errorName) || ("HttpError" === (null == (i = u.data) ? void 0 : i.errorName) || (!!(null == (c = u.reason) ? void 0 : c.includes("Wildcard on non-extended resolvers is not supported")) || "reverse" === n && u.reason === Ht[50]))))))
}

function Xa(e) {
    if (66 !== e.length) return null;
    if (0 !== e.indexOf("[")) return null;
    if (65 !== e.indexOf("]")) return null;
    const t = `0x${e.slice(1,65)}`;
    return i(t) ? t : null
}

function er(e) {
    let t = new Uint8Array(32).fill(0);
    if (!e) return u(t);
    const a = e.split(".");
    for (let r = a.length - 1; r >= 0; r -= 1) {
        const e = Xa(a[r]),
            s = e ? n(e) : z(w(a[r]), "bytes");
        t = z(G([t, s]), "bytes")
    }
    return u(t)
}

function tr(e) {
    const t = new Uint8Array(32).fill(0);
    return e ? Xa(e) || z(w(e)) : u(t)
}

function nr(e) {
    const t = e.replace(/^\.|\.$/gm, "");
    if (0 === t.length) return new Uint8Array(1);
    const n = new Uint8Array(w(t).byteLength + 2);
    let a = 0;
    const r = t.split(".");
    for (let s = 0; s < r.length; s++) {
        let e = w(r[s]);
        e.byteLength > 255 && (e = w(`[${tr(r[s]).slice(2)}]`)), n[a] = e.length, n.set(e, a + 1), a += e.length + 1
    }
    return n.byteLength !== a + 1 ? n.slice(0, a + 1) : n
}
class ar extends e {
    constructor({
        data: e
    }) {
        super("Unable to extract image from metadata. The metadata may be malformed or invalid.", {
            metaMessages: ["- Metadata must be a JSON object with at least an `image`, `image_url` or `image_data` property.", "", `Provided data: ${JSON.stringify(e)}`]
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "EnsAvatarInvalidMetadataError"
        })
    }
}
class rr extends e {
    constructor({
        reason: e
    }) {
        super(`ENS NFT avatar URI is invalid. ${e}`), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "EnsAvatarInvalidNftUriError"
        })
    }
}
class sr extends e {
    constructor({
        uri: e
    }) {
        super(`Unable to resolve ENS avatar URI "${e}". The URI may be malformed, invalid, or does not respond with a valid image.`), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "EnsAvatarUriResolutionError"
        })
    }
}
class or extends e {
    constructor({
        namespace: e
    }) {
        super(`ENS NFT avatar namespace "${e}" is not supported. Must be "erc721" or "erc1155".`), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "EnsAvatarUnsupportedNamespaceError"
        })
    }
}
const ir = /(?<protocol>https?:\/\/[^\/]*|ipfs:\/|ipns:\/|ar:\/)?(?<root>\/)?(?<subpath>ipfs\/|ipns\/)?(?<target>[\w\-.]+)(?<subtarget>\/.*)?/,
    cr = /^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\/(?<target>[\w\-.]+))?(?<subtarget>\/.*)?$/,
    ur = /^data:([a-zA-Z\-/+]*);base64,([^"].*)/,
    lr = /^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/;

function dr(e, t) {
    return e ? e.endsWith("/") ? e.slice(0, -1) : e : t
}

function fr({
    uri: e,
    gatewayUrls: t
}) {
    const n = ur.test(e);
    if (n) return {
        uri: e,
        isOnChain: !0,
        isEncoded: n
    };
    const a = dr(null == t ? void 0 : t.ipfs, "https://ipfs.io"),
        r = dr(null == t ? void 0 : t.arweave, "https://arweave.net"),
        s = e.match(ir),
        {
            protocol: o,
            subpath: i,
            target: c,
            subtarget: u = ""
        } = (null == s ? void 0 : s.groups) || {},
        l = "ipns:/" === o || "ipns/" === i,
        d = "ipfs:/" === o || "ipfs/" === i || cr.test(e);
    if (e.startsWith("http") && !l && !d) {
        let n = e;
        return (null == t ? void 0 : t.arweave) && (n = e.replace(/https:\/\/arweave.net/g, null == t ? void 0 : t.arweave)), {
            uri: n,
            isOnChain: !1,
            isEncoded: !1
        }
    }
    if ((l || d) && c) return {
        uri: `${a}/${l?"ipns":"ipfs"}/${c}${u}`,
        isOnChain: !1,
        isEncoded: !1
    };
    if ("ar:/" === o && c) return {
        uri: `${r}/${c}${u||""}`,
        isOnChain: !1,
        isEncoded: !1
    };
    let f = e.replace(lr, "");
    if (f.startsWith("<svg") && (f = `data:image/svg+xml;base64,${btoa(f)}`), f.startsWith("data:") || f.startsWith("{")) return {
        uri: f,
        isOnChain: !0,
        isEncoded: !1
    };
    throw new sr({
        uri: e
    })
}

function br(e) {
    if ("object" != typeof e || !("image" in e) && !("image_url" in e) && !("image_data" in e)) throw new ar({
        data: e
    });
    return e.image || e.image_url || e.image_data
}
async function mr({
    gatewayUrls: e,
    uri: t
}) {
    const {
        uri: n,
        isOnChain: a
    } = fr({
        uri: t,
        gatewayUrls: e
    });
    if (a) return n;
    const r = await async function(e) {
        try {
            const t = await fetch(e, {
                method: "HEAD"
            });
            if (200 === t.status) {
                const e = t.headers.get("content-type");
                return null == e ? void 0 : e.startsWith("image/")
            }
            return !1
        } catch (t) {
            return ("object" != typeof t || void 0 === t.response) && !!globalThis.hasOwnProperty("Image") && new Promise((t => {
                const n = new Image;
                n.onload = () => {
                    t(!0)
                }, n.onerror = () => {
                    t(!1)
                }, n.src = e
            }))
        }
    }(n);
    if (r) return n;
    throw new sr({
        uri: t
    })
}
async function pr(e, {
    gatewayUrls: t,
    record: n
}) {
    return /eip155:/i.test(n) ? async function(e, {
        gatewayUrls: t,
        record: n
    }) {
        const a = function(e) {
                let t = e;
                t.startsWith("did:nft:") && (t = t.replace("did:nft:", "").replace(/_/g, "/"));
                const [n, a, r] = t.split("/"), [s, o] = n.split(":"), [i, c] = a.split(":");
                if (!s || "eip155" !== s.toLowerCase()) throw new rr({
                    reason: "Only EIP-155 supported"
                });
                if (!o) throw new rr({
                    reason: "Chain ID not found"
                });
                if (!c) throw new rr({
                    reason: "Contract address not found"
                });
                if (!r) throw new rr({
                    reason: "Token ID not found"
                });
                if (!i) throw new rr({
                    reason: "ERC namespace not found"
                });
                return {
                    chainID: Number.parseInt(o),
                    namespace: i.toLowerCase(),
                    contractAddress: c,
                    tokenID: r
                }
            }(n),
            r = await async function(e, {
                nft: t
            }) {
                if ("erc721" === t.namespace) return ja(e, {
                    address: t.contractAddress,
                    abi: [{
                        name: "tokenURI",
                        type: "function",
                        stateMutability: "view",
                        inputs: [{
                            name: "tokenId",
                            type: "uint256"
                        }],
                        outputs: [{
                            name: "",
                            type: "string"
                        }]
                    }],
                    functionName: "tokenURI",
                    args: [BigInt(t.tokenID)]
                });
                if ("erc1155" === t.namespace) return ja(e, {
                    address: t.contractAddress,
                    abi: [{
                        name: "uri",
                        type: "function",
                        stateMutability: "view",
                        inputs: [{
                            name: "_id",
                            type: "uint256"
                        }],
                        outputs: [{
                            name: "",
                            type: "string"
                        }]
                    }],
                    functionName: "uri",
                    args: [BigInt(t.tokenID)]
                });
                throw new or({
                    namespace: t.namespace
                })
            }(e, {
                nft: a
            }),
            {
                uri: s,
                isOnChain: o,
                isEncoded: i
            } = fr({
                uri: r,
                gatewayUrls: t
            });
        if (o && (s.includes("data:application/json;base64,") || s.startsWith("{"))) {
            const e = i ? atob(s.replace("data:application/json;base64,", "")) : s;
            return mr({
                uri: br(JSON.parse(e)),
                gatewayUrls: t
            })
        }
        let c = a.tokenID;
        "erc1155" === a.namespace && (c = c.replace("0x", "").padStart(64, "0"));
        return async function({
            gatewayUrls: e,
            uri: t
        }) {
            try {
                const n = await fetch(t).then((e => e.json()));
                return await mr({
                    gatewayUrls: e,
                    uri: br(n)
                })
            } catch {
                throw new sr({
                    uri: t
                })
            }
        }({
            gatewayUrls: t,
            uri: s.replace(/(?:0x)?{id}/, c)
        })
    }(e, {
        gatewayUrls: t,
        record: n
    }) : mr({
        uri: n,
        gatewayUrls: t
    })
}
async function hr(e, {
    blockNumber: t,
    blockTag: n,
    name: a,
    key: r,
    gatewayUrls: s,
    strict: o,
    universalResolverAddress: i
}) {
    let c = i;
    if (!c) {
        if (!e.chain) throw new Error("client chain not configured. universalResolverAddress is required.");
        c = xa({
            blockNumber: t,
            chain: e.chain,
            contract: "ensUniversalResolver"
        })
    }
    try {
        const o = {
                address: c,
                abi: ya,
                functionName: "resolve",
                args: [P(nr(a)), _t({
                    abi: va,
                    functionName: "text",
                    args: [er(a), r]
                })],
                blockNumber: t,
                blockTag: n
            },
            i = Xe(e, ja, "readContract"),
            u = s ? await i({ ...o,
                args: [...o.args, s]
            }) : await i(o);
        if ("0x" === u[0]) return null;
        const l = ma({
            abi: va,
            functionName: "text",
            data: u[0]
        });
        return "" === l ? null : l
    } catch (u) {
        if (o) throw u;
        if (Qa(u, "resolve")) return null;
        throw u
    }
}
async function yr(e, {
    address: t,
    args: n,
    event: r,
    events: s,
    fromBlock: o,
    strict: i,
    toBlock: c
} = {}) {
    const u = s ? ? (r ? [r] : void 0),
        l = zt(e, {
            method: "eth_newFilter"
        });
    let d = [];
    u && (d = [u.flatMap((e => St({
        abi: [e],
        eventName: e.name,
        args: n
    })))], r && (d = d[0]));
    const f = await e.request({
        method: "eth_newFilter",
        params: [{
            address: t,
            fromBlock: "bigint" == typeof o ? a(o) : o,
            toBlock: "bigint" == typeof c ? a(c) : c,
            ...d.length ? {
                topics: d
            } : {}
        }]
    });
    return {
        abi: u,
        args: n,
        eventName: r ? r.name : void 0,
        fromBlock: o,
        id: f,
        request: l(f),
        strict: Boolean(i),
        toBlock: c,
        type: "event"
    }
}
async function gr(e) {
    const t = zt(e, {
            method: "eth_newPendingTransactionFilter"
        }),
        n = await e.request({
            method: "eth_newPendingTransactionFilter"
        });
    return {
        id: n,
        request: t(n),
        type: "transaction"
    }
}
async function vr(e, {
    blockCount: t,
    blockNumber: n,
    blockTag: r = "latest",
    rewardPercentiles: s
}) {
    const o = n ? a(n) : void 0;
    return function(e) {
        var t;
        return {
            baseFeePerGas: e.baseFeePerGas.map((e => BigInt(e))),
            gasUsedRatio: e.gasUsedRatio,
            oldestBlock: BigInt(e.oldestBlock),
            reward: null == (t = e.reward) ? void 0 : t.map((e => e.map((e => BigInt(e)))))
        }
    }(await e.request({
        method: "eth_feeHistory",
        params: [a(t), o || r, s]
    }))
}
class wr extends e {
    constructor({
        callbackSelector: e,
        cause: t,
        data: n,
        extraData: a,
        sender: r,
        urls: s
    }) {
        var o;
        super(t.shortMessage || "An error occurred while fetching for an offchain result.", {
            cause: t,
            metaMessages: [...t.metaMessages || [], (null == (o = t.metaMessages) ? void 0 : o.length) ? "" : [], "Offchain Gateway Call:", s && ["  Gateway URL(s):", ...s.map((e => `    ${y(e)}`))], `  Sender: ${r}`, `  Data: ${n}`, `  Callback selector: ${e}`, `  Extra data: ${a}`].flat()
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "OffchainLookupError"
        })
    }
}
class Pr extends e {
    constructor({
        result: e,
        url: t
    }) {
        super("Offchain gateway response is malformed. Response data must be a hex value.", {
            metaMessages: [`Gateway URL: ${y(t)}`, `Response: ${rn(e)}`]
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "OffchainLookupResponseMalformedError"
        })
    }
}
class kr extends e {
    constructor({
        sender: e,
        to: t
    }) {
        super("Reverted sender address does not match target contract address (`to`).", {
            metaMessages: [`Contract address: ${t}`, `OffchainLookup sender address: ${e}`]
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "OffchainLookupSenderMismatchError"
        })
    }
}

function xr(e, t) {
    if (!D(e, {
            strict: !1
        })) throw new L({
        address: e
    });
    if (!D(t, {
            strict: !1
        })) throw new L({
        address: t
    });
    return e.toLowerCase() === t.toLowerCase()
}
const Nr = "0x556f1830",
    Er = {
        name: "OffchainLookup",
        type: "error",
        inputs: [{
            name: "sender",
            type: "address"
        }, {
            name: "urls",
            type: "string[]"
        }, {
            name: "callData",
            type: "bytes"
        }, {
            name: "callbackFunction",
            type: "bytes4"
        }, {
            name: "extraData",
            type: "bytes"
        }]
    };
async function Tr(e, {
    blockNumber: t,
    blockTag: n,
    data: a,
    to: r
}) {
    const {
        args: s
    } = an({
        data: a,
        abi: [Er]
    }), [o, i, c, u, l] = s, {
        ccipRead: d
    } = e, f = d && "function" == typeof(null == d ? void 0 : d.request) ? d.request : jr;
    try {
        if (!xr(r, o)) throw new kr({
            sender: o,
            to: r
        });
        const a = await f({
                data: c,
                sender: o,
                urls: i
            }),
            {
                data: s
            } = await Ta(e, {
                blockNumber: t,
                blockTag: n,
                data: G([u, Bt([{
                    type: "bytes"
                }, {
                    type: "bytes"
                }], [a, l])]),
                to: r
            });
        return s
    } catch (b) {
        throw new wr({
            callbackSelector: u,
            cause: b,
            data: a,
            extraData: l,
            sender: o,
            urls: i
        })
    }
}
async function jr({
    data: e,
    sender: t,
    urls: n
}) {
    var a;
    let r = new Error("An unknown error occurred.");
    for (let o = 0; o < n.length; o++) {
        const c = n[o],
            u = c.includes("{data}") ? "GET" : "POST",
            l = "POST" === u ? {
                data: e,
                sender: t
            } : void 0;
        try {
            const n = await fetch(c.replace("{sender}", t).replace("{data}", e), {
                body: JSON.stringify(l),
                method: u
            });
            let s;
            if (s = (null == (a = n.headers.get("Content-Type")) ? void 0 : a.startsWith("application/json")) ? (await n.json()).data : await n.text(), !n.ok) {
                r = new pn({
                    body: l,
                    details: (null == s ? void 0 : s.error) ? rn(s.error) : n.statusText,
                    headers: n.headers,
                    status: n.status,
                    url: c
                });
                continue
            }
            if (!i(s)) {
                r = new Pr({
                    result: s,
                    url: c
                });
                continue
            }
            return s
        } catch (s) {
            r = new pn({
                body: l,
                details: s.message,
                url: c
            })
        }
    }
    throw r
}
const Br = Object.freeze(Object.defineProperty({
    __proto__: null,
    ccipRequest: jr,
    offchainLookup: Tr,
    offchainLookupAbiItem: Er,
    offchainLookupSignature: Nr
}, Symbol.toStringTag, {
    value: "Module"
}));

function Or({
    chains: e,
    id: t
}) {
    return e.find((e => e.id === t))
}
const Ir = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,
    $r = /^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;

function Fr(e) {
    const {
        domain: t = {},
        message: n,
        primaryType: a
    } = e, r = {
        EIP712Domain: Gr({
            domain: t
        }),
        ...e.types
    };
    zr({
        domain: t,
        message: n,
        primaryType: a,
        types: r
    });
    const s = ["0x1901"];
    return t && s.push(Ar({
        domain: t,
        types: r
    })), "EIP712Domain" !== a && s.push(Rr({
        data: n,
        primaryType: a,
        types: r
    })), z(G(s))
}

function Ar({
    domain: e,
    types: t
}) {
    return Rr({
        data: e,
        primaryType: "EIP712Domain",
        types: t
    })
}

function Rr({
    data: e,
    primaryType: t,
    types: n
}) {
    const a = Mr({
        data: e,
        primaryType: t,
        types: n
    });
    return z(a)
}

function Mr({
    data: e,
    primaryType: t,
    types: n
}) {
    const a = [{
            type: "bytes32"
        }],
        r = [Cr({
            primaryType: t,
            types: n
        })];
    for (const s of n[t]) {
        const [t, o] = qr({
            types: n,
            name: s.name,
            type: s.type,
            value: e[s.name]
        });
        a.push(t), r.push(o)
    }
    return Bt(a, r)
}

function Cr({
    primaryType: e,
    types: t
}) {
    const n = P(function({
        primaryType: e,
        types: t
    }) {
        let n = "";
        const a = Sr({
            primaryType: e,
            types: t
        });
        a.delete(e);
        const r = [e, ...Array.from(a).sort()];
        for (const s of r) n += `${s}(${t[s].map((({name:e,type:t})=>`
        $ {
            t
        }
        $ {
            e
        }
        `)).join(",")})`;
        return n
    }({
        primaryType: e,
        types: t
    }));
    return z(n)
}

function Sr({
    primaryType: e,
    types: t
}, n = new Set) {
    const a = e.match(/^\w*/u),
        r = null == a ? void 0 : a[0];
    if (n.has(r) || void 0 === t[r]) return n;
    n.add(r);
    for (const s of t[r]) Sr({
        primaryType: s.type,
        types: t
    }, n);
    return n
}

function qr({
    types: e,
    name: t,
    type: n,
    value: a
}) {
    if (void 0 !== e[n]) return [{
        type: "bytes32"
    }, z(Mr({
        data: a,
        primaryType: n,
        types: e
    }))];
    if ("bytes" === n) {
        return a = `0x${(a.length%2?"0":"")+a.slice(2)}`, [{
            type: "bytes32"
        }, z(a)]
    }
    if ("string" === n) return [{
        type: "bytes32"
    }, z(P(a))];
    if (n.lastIndexOf("]") === n.length - 1) {
        const r = n.slice(0, n.lastIndexOf("[")),
            s = a.map((n => qr({
                name: t,
                type: r,
                types: e,
                value: n
            })));
        return [{
            type: "bytes32"
        }, z(Bt(s.map((([e]) => e)), s.map((([, e]) => e))))]
    }
    return [{
        type: n
    }, a]
}

function zr(e) {
    const {
        domain: n,
        message: r,
        primaryType: s,
        types: o
    } = e, i = (e, n) => {
        for (const r of e) {
            const {
                name: e,
                type: s
            } = r, c = n[e], u = s.match($r);
            if (u && ("number" == typeof c || "bigint" == typeof c)) {
                const [e, t, n] = u;
                a(c, {
                    signed: "int" === t,
                    size: Number.parseInt(n) / 8
                })
            }
            if ("address" === s && "string" == typeof c && !D(c)) throw new L({
                address: c
            });
            const l = s.match(Ir);
            if (l) {
                const [e, n] = l;
                if (n && t(c) !== Number.parseInt(n)) throw new ht({
                    expectedSize: Number.parseInt(n),
                    givenSize: t(c)
                })
            }
            const d = o[s];
            d && i(d, c)
        }
    };
    if (o.EIP712Domain && n && i(o.EIP712Domain, n), "EIP712Domain" !== s) {
        const e = o[s];
        i(e, r)
    }
}

function Gr({
    domain: e
}) {
    return ["string" == typeof(null == e ? void 0 : e.name) && {
        name: "name",
        type: "string"
    }, (null == e ? void 0 : e.version) && {
        name: "version",
        type: "string"
    }, "number" == typeof(null == e ? void 0 : e.chainId) && {
        name: "chainId",
        type: "uint256"
    }, (null == e ? void 0 : e.verifyingContract) && {
        name: "verifyingContract",
        type: "address"
    }, (null == e ? void 0 : e.salt) && {
        name: "salt",
        type: "bytes32"
    }].filter(Boolean)
}
const Dr = "/docs/contract/encodeDeployData";

function Lr(e) {
    const {
        abi: t,
        args: n,
        bytecode: a
    } = e;
    if (!n || 0 === n.length) return a;
    const r = t.find((e => "type" in e && "constructor" === e.type));
    if (!r) throw new nt({
        docsPath: Dr
    });
    if (!("inputs" in r)) throw new at({
        docsPath: Dr
    });
    if (!r.inputs || 0 === r.inputs.length) throw new at({
        docsPath: Dr
    });
    const s = Bt(r.inputs, n);
    return _([a, s])
}
const Ur = "Ethereum Signed Message:\n";

function _r(e, t) {
    const a = "string" == typeof e ? w(e) : e.raw instanceof Uint8Array ? e.raw : n(e.raw),
        r = w(`${Ur}${a.length}`);
    return z(G([r, a]), t)
}
async function Hr(e, {
    address: t,
    blockNumber: n,
    blockTag: r,
    storageKeys: s
}) {
    const o = r ? ? "latest",
        i = void 0 !== n ? a(n) : void 0;
    return function(e) {
        return { ...e,
            balance: e.balance ? BigInt(e.balance) : void 0,
            nonce: e.nonce ? b(e.nonce) : void 0,
            storageProof: e.storageProof ? (t = e.storageProof, t.map((e => ({ ...e,
                value: BigInt(e.value)
            })))) : void 0
        };
        var t
    }(await e.request({
        method: "eth_getProof",
        params: [t, s, i || o]
    }))
}
async function Wr(e, {
    blockHash: t,
    blockNumber: n,
    blockTag: r,
    hash: s,
    index: o
}) {
    var i, c, u;
    const l = r || "latest",
        d = void 0 !== n ? a(n) : void 0;
    let f = null;
    if (s ? f = await e.request({
            method: "eth_getTransactionByHash",
            params: [s]
        }) : t ? f = await e.request({
            method: "eth_getTransactionByBlockHashAndIndex",
            params: [t, a(o)]
        }) : (d || l) && (f = await e.request({
            method: "eth_getTransactionByBlockNumberAndIndex",
            params: [d || l, a(o)]
        })), !f) throw new we({
        blockHash: t,
        blockNumber: n,
        blockTag: l,
        hash: s,
        index: o
    });
    return ((null == (u = null == (c = null == (i = e.chain) ? void 0 : i.formatters) ? void 0 : c.transaction) ? void 0 : u.format) || Pe)(f)
}
async function Vr(e, {
    hash: t
}) {
    var n, a, r;
    const s = await e.request({
        method: "eth_getTransactionReceipt",
        params: [t]
    });
    if (!s) throw new ke({
        hash: t
    });
    return ((null == (r = null == (a = null == (n = e.chain) ? void 0 : n.formatters) ? void 0 : a.transactionReceipt) ? void 0 : r.format) || xe)(s)
}

function Jr({
    r: e,
    s: t,
    v: n,
    yParity: a
}) {
    const r = (() => {
        if (0 === a || 1 === a) return a;
        if (n && (27 n === n || 28 n === n || n >= 35 n)) return n % 2 n === 0 n ? 1 : 0;
        throw new Error("Invalid `v` or `yParity` value")
    })();
    return `0x${new Ze.Signature(l(e),l(t)).toCompactHex()}${0===r?"1b":"1c"}`
}
async function Zr(e, {
    address: t,
    hash: a,
    signature: r,
    ...s
}) {
    const o = i(r) ? r : "object" == typeof r && "r" in r && "s" in r ? Jr(r) : u(r);
    try {
        const {
            data: r
        } = await Xe(e, Ta, "call")({
            data: Lr({
                abi: Pa,
                args: [t, a, o],
                bytecode: "0x60806040523480156200001157600080fd5b50604051620007003803806200070083398101604081905262000034916200056f565b6000620000438484846200004f565b9050806000526001601ff35b600080846001600160a01b0316803b806020016040519081016040528181526000908060200190933c90507f6492649264926492649264926492649264926492649264926492649264926492620000a68462000451565b036200021f57600060608085806020019051810190620000c79190620005ce565b8651929550909350915060000362000192576000836001600160a01b031683604051620000f5919062000643565b6000604051808303816000865af19150503d806000811462000134576040519150601f19603f3d011682016040523d82523d6000602084013e62000139565b606091505b5050905080620001905760405162461bcd60e51b815260206004820152601e60248201527f5369676e617475726556616c696461746f723a206465706c6f796d656e74000060448201526064015b60405180910390fd5b505b604051630b135d3f60e11b808252906001600160a01b038a1690631626ba7e90620001c4908b90869060040162000661565b602060405180830381865afa158015620001e2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200020891906200069d565b6001600160e01b031916149450505050506200044a565b805115620002b157604051630b135d3f60e11b808252906001600160a01b03871690631626ba7e9062000259908890889060040162000661565b602060405180830381865afa15801562000277573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200029d91906200069d565b6001600160e01b031916149150506200044a565b8251604114620003195760405162461bcd60e51b815260206004820152603a6024820152600080516020620006e083398151915260448201527f3a20696e76616c6964207369676e6174757265206c656e677468000000000000606482015260840162000187565b620003236200046b565b506020830151604080850151855186939260009185919081106200034b576200034b620006c9565b016020015160f81c9050601b81148015906200036b57508060ff16601c14155b15620003cf5760405162461bcd60e51b815260206004820152603b6024820152600080516020620006e083398151915260448201527f3a20696e76616c6964207369676e617475726520762076616c75650000000000606482015260840162000187565b6040805160008152602081018083528a905260ff83169181019190915260608101849052608081018390526001600160a01b038a169060019060a0016020604051602081039080840390855afa1580156200042e573d6000803e3d6000fd5b505050602060405103516001600160a01b031614955050505050505b9392505050565b60006020825110156200046357600080fd5b508051015190565b60405180606001604052806003906020820280368337509192915050565b6001600160a01b03811681146200049f57600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620004d5578181015183820152602001620004bb565b50506000910152565b600082601f830112620004f057600080fd5b81516001600160401b03808211156200050d576200050d620004a2565b604051601f8301601f19908116603f01168101908282118183101715620005385762000538620004a2565b816040528381528660208588010111156200055257600080fd5b62000565846020830160208901620004b8565b9695505050505050565b6000806000606084860312156200058557600080fd5b8351620005928162000489565b6020850151604086015191945092506001600160401b03811115620005b657600080fd5b620005c486828701620004de565b9150509250925092565b600080600060608486031215620005e457600080fd5b8351620005f18162000489565b60208501519093506001600160401b03808211156200060f57600080fd5b6200061d87838801620004de565b935060408601519150808211156200063457600080fd5b50620005c486828701620004de565b6000825162000657818460208701620004b8565b9190910192915050565b828152604060208201526000825180604084015262000688816060850160208701620004b8565b601f01601f1916919091016060019392505050565b600060208284031215620006b057600080fd5b81516001600160e01b0319811681146200044a57600080fd5b634e487b7160e01b600052603260045260246000fdfe5369676e617475726556616c696461746f72237265636f7665725369676e6572"
            }),
            ...s
        });
        return function(e, t) {
            const a = i(e) ? n(e) : e,
                r = i(t) ? n(t) : t;
            return Je(a, r)
        }(r ? ? "0x0", "0x1")
    } catch (c) {
        if (c instanceof ln) return !1;
        throw c
    }
}

function Kr(e, {
    emitOnBegin: t = !1,
    emitMissed: n = !1,
    onBlockNumber: a,
    onError: r,
    poll: s,
    pollingInterval: o = e.pollingInterval
}) {
    let i;
    return (void 0 !== s ? s : "webSocket" !== e.transport.type && ("fallback" !== e.transport.type || "webSocket" !== e.transport.transports[0].config.type)) ? $a(rn(["watchBlockNumber", e.uid, t, n, o]), {
        onBlockNumber: a,
        onError: r
    }, (a => Aa((async () => {
        var t;
        try {
            const t = await Xe(e, Sa, "getBlockNumber")({
                cacheTime: 0
            });
            if (i) {
                if (t === i) return;
                if (t - i > 1 && n)
                    for (let e = i + 1 n; e < t; e++) a.onBlockNumber(e, i), i = e
            }(!i || t > i) && (a.onBlockNumber(t, i), i = t)
        } catch (r) {
            null == (t = a.onError) || t.call(a, r)
        }
    }), {
        emitOnBegin: t,
        interval: o
    }))) : $a(rn(["watchBlockNumber", e.uid, t, n]), {
        onBlockNumber: a,
        onError: r
    }, (t => {
        let n = !0,
            a = () => n = !1;
        return (async () => {
            try {
                const r = (() => {
                        if ("fallback" === e.transport.type) {
                            const t = e.transport.transports.find((e => "webSocket" === e.config.type));
                            return t ? t.value : e.transport
                        }
                        return e.transport
                    })(),
                    {
                        unsubscribe: s
                    } = await r.subscribe({
                        params: ["newHeads"],
                        onData(e) {
                            var a;
                            if (!n) return;
                            const r = l(null == (a = e.result) ? void 0 : a.number);
                            t.onBlockNumber(r, i), i = r
                        },
                        onError(e) {
                            var n;
                            null == (n = t.onError) || n.call(t, e)
                        }
                    });
                a = s, n || a()
            } catch (s) {
                null == r || r(s)
            }
        })(), () => a()
    }))
}
const Yr = /^(?:(?<scheme>[a-zA-Z][a-zA-Z0-9+-.]*):\/\/)?(?<domain>[a-zA-Z0-9+-.]*) (?:wants you to sign in with your Ethereum account:\n)(?<address>0x[a-fA-F0-9]{40})\n\n(?:(?<statement>.*)\n\n)?/,
    Qr = /(?:URI: (?<uri>.+))\n(?:Version: (?<version>.+))\n(?:Chain ID: (?<chainId>\d+))\n(?:Nonce: (?<nonce>[a-zA-Z0-9]+))\n(?:Issued At: (?<issuedAt>.+))(?:\nExpiration Time: (?<expirationTime>.+))?(?:\nNot Before: (?<notBefore>.+))?(?:\nRequest ID: (?<requestId>.+))?/;
async function Xr(e, t) {
    const {
        address: n,
        domain: a,
        message: r,
        nonce: s,
        scheme: o,
        signature: i,
        time: c = new Date,
        ...u
    } = t, l = function(e) {
        var t, n, a;
        const {
            scheme: r,
            statement: s,
            ...o
        } = (null == (t = e.match(Yr)) ? void 0 : t.groups) ? ? {}, {
            chainId: i,
            expirationTime: c,
            issuedAt: u,
            notBefore: l,
            requestId: d,
            ...f
        } = (null == (n = e.match(Qr)) ? void 0 : n.groups) ? ? {}, b = null == (a = e.split("Resources:")[1]) ? void 0 : a.split("\n- ").slice(1);
        return { ...o,
            ...f,
            ...i ? {
                chainId: Number(i)
            } : {},
            ...c ? {
                expirationTime: new Date(c)
            } : {},
            ...u ? {
                issuedAt: new Date(u)
            } : {},
            ...l ? {
                notBefore: new Date(l)
            } : {},
            ...d ? {
                requestId: d
            } : {},
            ...b ? {
                resources: b
            } : {},
            ...r ? {
                scheme: r
            } : {},
            ...s ? {
                statement: s
            } : {}
        }
    }(r);
    if (!l.address) return !1;
    const d = function(e) {
        const {
            address: t,
            domain: n,
            message: a,
            nonce: r,
            scheme: s,
            time: o = new Date
        } = e;
        if (n && a.domain !== n) return !1;
        if (r && a.nonce !== r) return !1;
        if (s && a.scheme !== s) return !1;
        if (a.expirationTime && o >= a.expirationTime) return !1;
        if (a.notBefore && o < a.notBefore) return !1;
        try {
            if (!a.address) return !1;
            if (t && !xr(a.address, t)) return !1
        } catch {
            return !1
        }
        return !0
    }({
        address: n,
        domain: a,
        message: l,
        nonce: s,
        scheme: o,
        time: c
    });
    if (!d) return !1;
    const f = _r(r);
    return Zr(e, {
        address: l.address,
        hash: f,
        signature: i,
        ...u
    })
}

function es(t) {
    return {
        call: e => Ta(t, e),
        createBlockFilter: () => async function(e) {
            const t = zt(e, {
                    method: "eth_newBlockFilter"
                }),
                n = await e.request({
                    method: "eth_newBlockFilter"
                });
            return {
                id: n,
                request: t(n),
                type: "block"
            }
        }(t),
        createContractEventFilter: e => Gt(t, e),
        createEventFilter: e => yr(t, e),
        createPendingTransactionFilter: () => gr(t),
        estimateContractGas: e => async function(e, t) {
            const {
                abi: n,
                address: a,
                args: r,
                functionName: s,
                ...o
            } = t, i = _t({
                abi: n,
                args: r,
                functionName: s
            });
            try {
                return await Xe(e, oa, "estimateGas")({
                    data: i,
                    to: a,
                    ...o
                })
            } catch (c) {
                const e = o.account ? Dt(o.account) : void 0;
                throw Gn(c, {
                    abi: n,
                    address: a,
                    args: r,
                    docsPath: "/docs/contract/estimateContractGas",
                    functionName: s,
                    sender: null == e ? void 0 : e.address
                })
            }
        }(t, e),
        estimateGas: e => oa(t, e),
        getBalance: e => async function(e, {
            address: t,
            blockNumber: n,
            blockTag: r = "latest"
        }) {
            const s = n ? a(n) : void 0,
                o = await e.request({
                    method: "eth_getBalance",
                    params: [t, s || r]
                });
            return BigInt(o)
        }(t, e),
        getBlobBaseFee: () => async function(e) {
            const t = await e.request({
                method: "eth_blobBaseFee"
            });
            return BigInt(t)
        }(t),
        getBlock: e => Qn(t, e),
        getBlockNumber: e => Sa(t, e),
        getBlockTransactionCount: e => async function(e, {
            blockHash: t,
            blockNumber: n,
            blockTag: r = "latest"
        } = {}) {
            const s = void 0 !== n ? a(n) : void 0;
            let o;
            return o = t ? await e.request({
                method: "eth_getBlockTransactionCountByHash",
                params: [t]
            }) : await e.request({
                method: "eth_getBlockTransactionCountByNumber",
                params: [s || r]
            }), b(o)
        }(t, e),
        getBytecode: e => async function(e, {
            address: t,
            blockNumber: n,
            blockTag: r = "latest"
        }) {
            const s = void 0 !== n ? a(n) : void 0,
                o = await e.request({
                    method: "eth_getCode",
                    params: [t, s || r]
                });
            if ("0x" !== o) return o
        }(t, e),
        getChainId: () => aa(t),
        getContractEvents: e => fa(t, e),
        getEnsAddress: e => async function(e, {
            blockNumber: t,
            blockTag: n,
            coinType: a,
            name: r,
            gatewayUrls: s,
            strict: o,
            universalResolverAddress: i
        }) {
            let c = i;
            if (!c) {
                if (!e.chain) throw new Error("client chain not configured. universalResolverAddress is required.");
                c = xa({
                    blockNumber: t,
                    chain: e.chain,
                    contract: "ensUniversalResolver"
                })
            }
            try {
                const o = _t({
                        abi: wa,
                        functionName: "addr",
                        ...null != a ? {
                            args: [er(r), BigInt(a)]
                        } : {
                            args: [er(r)]
                        }
                    }),
                    i = {
                        address: c,
                        abi: ya,
                        functionName: "resolve",
                        args: [P(nr(r)), o],
                        blockNumber: t,
                        blockTag: n
                    },
                    u = Xe(e, ja, "readContract"),
                    l = s ? await u({ ...i,
                        args: [...i.args, s]
                    }) : await u(i);
                if ("0x" === l[0]) return null;
                const f = ma({
                    abi: wa,
                    args: null != a ? [er(r), BigInt(a)] : void 0,
                    functionName: "addr",
                    data: l[0]
                });
                return "0x" === f || "0x00" === d(f) ? null : f
            } catch (u) {
                if (o) throw u;
                if (Qa(u, "resolve")) return null;
                throw u
            }
        }(t, e),
        getEnsAvatar: e => async function(e, {
            blockNumber: t,
            blockTag: n,
            assetGatewayUrls: a,
            name: r,
            gatewayUrls: s,
            strict: o,
            universalResolverAddress: i
        }) {
            const c = await Xe(e, hr, "getEnsText")({
                blockNumber: t,
                blockTag: n,
                key: "avatar",
                name: r,
                universalResolverAddress: i,
                gatewayUrls: s,
                strict: o
            });
            if (!c) return null;
            try {
                return await pr(e, {
                    record: c,
                    gatewayUrls: a
                })
            } catch {
                return null
            }
        }(t, e),
        getEnsName: e => async function(e, {
            address: t,
            blockNumber: n,
            blockTag: a,
            gatewayUrls: r,
            strict: s,
            universalResolverAddress: o
        }) {
            let i = o;
            if (!i) {
                if (!e.chain) throw new Error("client chain not configured. universalResolverAddress is required.");
                i = xa({
                    blockNumber: n,
                    chain: e.chain,
                    contract: "ensUniversalResolver"
                })
            }
            const c = `${t.toLowerCase().substring(2)}.addr.reverse`;
            try {
                const s = {
                        address: i,
                        abi: ga,
                        functionName: "reverse",
                        args: [P(nr(c))],
                        blockNumber: n,
                        blockTag: a
                    },
                    o = Xe(e, ja, "readContract"),
                    [u, l] = r ? await o({ ...s,
                        args: [...s.args, r]
                    }) : await o(s);
                return t.toLowerCase() !== l.toLowerCase() ? null : u
            } catch (u) {
                if (s) throw u;
                if (Qa(u, "reverse")) return null;
                throw u
            }
        }(t, e),
        getEnsResolver: e => async function(e, {
            blockNumber: t,
            blockTag: n,
            name: a,
            universalResolverAddress: r
        }) {
            let s = r;
            if (!s) {
                if (!e.chain) throw new Error("client chain not configured. universalResolverAddress is required.");
                s = xa({
                    blockNumber: t,
                    chain: e.chain,
                    contract: "ensUniversalResolver"
                })
            }
            const [o] = await Xe(e, ja, "readContract")({
                address: s,
                abi: [{
                    inputs: [{
                        type: "bytes"
                    }],
                    name: "findResolver",
                    outputs: [{
                        type: "address"
                    }, {
                        type: "bytes32"
                    }],
                    stateMutability: "view",
                    type: "function"
                }],
                functionName: "findResolver",
                args: [P(nr(a))],
                blockNumber: t,
                blockTag: n
            });
            return o
        }(t, e),
        getEnsText: e => hr(t, e),
        getFeeHistory: e => vr(t, e),
        estimateFeesPerGas: e => async function(e, t) {
            return ta(e, t)
        }(t, e),
        getFilterChanges: e => qa(0, e),
        getFilterLogs: e => async function(e, {
            filter: t
        }) {
            const n = t.strict ? ? !1,
                a = (await t.request({
                    method: "eth_getFilterLogs",
                    params: [t.id]
                })).map((e => ye(e)));
            return t.abi ? la({
                abi: t.abi,
                logs: a,
                strict: n
            }) : a
        }(0, e),
        getGasPrice: () => Xn(t),
        getLogs: e => da(t, e),
        getProof: e => Hr(t, e),
        estimateMaxPriorityFeePerGas: e => async function(e, t) {
            return ea(e, t)
        }(t, e),
        getStorageAt: e => async function(e, {
            address: t,
            blockNumber: n,
            blockTag: r = "latest",
            slot: s
        }) {
            const o = void 0 !== n ? a(n) : void 0;
            return await e.request({
                method: "eth_getStorageAt",
                params: [t, s, o || r]
            })
        }(t, e),
        getTransaction: e => Wr(t, e),
        getTransactionConfirmations: e => async function(e, {
            hash: t,
            transactionReceipt: n
        }) {
            const [a, r] = await Promise.all([Xe(e, Sa, "getBlockNumber")({}), t ? Xe(e, Wr, "getBlockNumber")({
                hash: t
            }) : void 0]), s = (null == n ? void 0 : n.blockNumber) || (null == r ? void 0 : r.blockNumber);
            return s ? a - s + 1 n : 0 n
        }(t, e),
        getTransactionCount: e => na(t, e),
        getTransactionReceipt: e => Vr(t, e),
        multicall: n => async function(t, n) {
            var a;
            const {
                allowFailure: r = !0,
                batchSize: s,
                blockNumber: o,
                blockTag: i,
                multicallAddress: c,
                stateOverride: u
            } = n, l = n.contracts, d = s ? ? ("object" == typeof(null == (a = t.batch) ? void 0 : a.multicall) && t.batch.multicall.batchSize || 1024);
            let f = c;
            if (!f) {
                if (!t.chain) throw new Error("client chain not configured. multicallAddress is required.");
                f = xa({
                    blockNumber: o,
                    chain: t.chain,
                    contract: "multicall3"
                })
            }
            const b = [
                []
            ];
            let m = 0,
                p = 0;
            for (let e = 0; e < l.length; e++) {
                const {
                    abi: t,
                    address: n,
                    args: a,
                    functionName: s
                } = l[e];
                try {
                    const e = _t({
                        abi: t,
                        args: a,
                        functionName: s
                    });
                    p += (e.length - 2) / 2, d > 0 && p > d && b[m].length > 0 && (m++, p = (e.length - 2) / 2, b[m] = []), b[m] = [...b[m], {
                        allowFailure: !0,
                        callData: e,
                        target: n
                    }]
                } catch (g) {
                    const e = Gn(g, {
                        abi: t,
                        address: n,
                        args: a,
                        docsPath: "/docs/contract/multicall",
                        functionName: s
                    });
                    if (!r) throw e;
                    b[m] = [...b[m], {
                        allowFailure: !0,
                        callData: "0x",
                        target: n
                    }]
                }
            }
            const h = await Promise.allSettled(b.map((e => Xe(t, ja, "readContract")({
                    abi: pa,
                    address: f,
                    args: [e],
                    blockNumber: o,
                    blockTag: i,
                    functionName: "aggregate3",
                    stateOverride: u
                })))),
                y = [];
            for (let e = 0; e < h.length; e++) {
                const t = h[e];
                if ("rejected" === t.status) {
                    if (!r) throw t.reason;
                    for (let n = 0; n < b[e].length; n++) y.push({
                        status: "failure",
                        error: t.reason,
                        result: void 0
                    });
                    continue
                }
                const n = t.value;
                for (let a = 0; a < n.length; a++) {
                    const {
                        returnData: t,
                        success: s
                    } = n[a], {
                        callData: o
                    } = b[e][a], {
                        abi: i,
                        address: c,
                        functionName: u,
                        args: d
                    } = l[y.length];
                    try {
                        if ("0x" === o) throw new st;
                        if (!s) throw new mn({
                            data: t
                        });
                        const e = ma({
                            abi: i,
                            args: d,
                            data: t,
                            functionName: u
                        });
                        y.push(r ? {
                            result: e,
                            status: "success"
                        } : e)
                    } catch (g) {
                        const e = Gn(g, {
                            abi: i,
                            address: c,
                            args: d,
                            docsPath: "/docs/contract/multicall",
                            functionName: u
                        });
                        if (!r) throw e;
                        y.push({
                            error: e,
                            result: void 0,
                            status: "failure"
                        })
                    }
                }
            }
            if (y.length !== l.length) throw new e("multicall results mismatch");
            return y
        }(t, n),
        prepareTransactionRequest: e => sa(t, e),
        readContract: e => ja(t, e),
        sendRawTransaction: e => async function(e, {
            serializedTransaction: t
        }) {
            return e.request({
                method: "eth_sendRawTransaction",
                params: [t]
            }, {
                retryCount: 0
            })
        }(t, e),
        simulateContract: e => async function(e, t) {
            const {
                abi: n,
                address: a,
                args: r,
                dataSuffix: s,
                functionName: o,
                ...i
            } = t, c = i.account ? Dt(i.account) : e.account, u = _t({
                abi: n,
                args: r,
                functionName: o
            });
            try {
                const {
                    data: l
                } = await Xe(e, Ta, "call")({
                    batch: !1,
                    data: `${u}${s?s.replace("0x",""):""}`,
                    to: a,
                    ...i,
                    account: c
                });
                return {
                    result: ma({
                        abi: n,
                        args: r,
                        functionName: o,
                        data: l || "0x"
                    }),
                    request: {
                        abi: n.filter((e => "name" in e && e.name === t.functionName)),
                        address: a,
                        args: r,
                        dataSuffix: s,
                        functionName: o,
                        ...i,
                        account: c
                    }
                }
            } catch (l) {
                throw Gn(l, {
                    abi: n,
                    address: a,
                    args: r,
                    docsPath: "/docs/contract/simulateContract",
                    functionName: o,
                    sender: null == c ? void 0 : c.address
                })
            }
        }(t, e),
        verifyMessage: e => async function(e, {
            address: t,
            message: n,
            signature: a,
            ...r
        }) {
            return Zr(e, {
                address: t,
                hash: _r(n),
                signature: a,
                ...r
            })
        }(t, e),
        verifySiweMessage: e => Xr(t, e),
        verifyTypedData: e => async function(e, t) {
            const {
                address: n,
                signature: a,
                message: r,
                primaryType: s,
                types: o,
                domain: i,
                ...c
            } = t;
            return Zr(e, {
                address: n,
                hash: Fr({
                    message: r,
                    primaryType: s,
                    types: o,
                    domain: i
                }),
                signature: a,
                ...c
            })
        }(t, e),
        uninstallFilter: e => za(0, e),
        waitForTransactionReceipt: e => async function(e, {
            confirmations: t = 1,
            hash: n,
            onReplaced: a,
            pollingInterval: r = e.pollingInterval,
            retryCount: s = 6,
            retryDelay: o = ({
                count: e
            }) => 200 * (1 << e),
            timeout: i
        }) {
            const c = rn(["waitForTransactionReceipt", e.uid, n]);
            let u, l, d, f = 0,
                b = !1;
            return new Promise(((m, p) => {
                i && setTimeout((() => p(new Ne({
                    hash: n
                }))), i);
                const h = $a(c, {
                    onReplaced: a,
                    resolve: m,
                    reject: p
                }, (a => {
                    const i = Xe(e, Kr, "watchBlockNumber")({
                        emitMissed: !0,
                        emitOnBegin: !0,
                        poll: !0,
                        pollingInterval: r,
                        async onBlockNumber(r) {
                            const c = e => {
                                i(), e(), h()
                            };
                            let m = r;
                            if (!b) {
                                f > s && c((() => a.reject(new Ne({
                                    hash: n
                                }))));
                                try {
                                    if (d) {
                                        if (t > 1 && (!d.blockNumber || m - d.blockNumber + 1 n < t)) return;
                                        return void c((() => a.resolve(d)))
                                    }
                                    if (u || (b = !0, await _a((async () => {
                                            u = await Xe(e, Wr, "getTransaction")({
                                                hash: n
                                            }), u.blockNumber && (m = u.blockNumber)
                                        }), {
                                            delay: o,
                                            retryCount: s
                                        }), b = !1), d = await Xe(e, Vr, "getTransactionReceipt")({
                                            hash: n
                                        }), t > 1 && (!d.blockNumber || m - d.blockNumber + 1 n < t)) return;
                                    c((() => a.resolve(d)))
                                } catch (p) {
                                    if (p instanceof we || p instanceof ke) {
                                        if (!u) return void(b = !1);
                                        try {
                                            l = u, b = !0;
                                            const n = await _a((() => Xe(e, Qn, "getBlock")({
                                                blockNumber: m,
                                                includeTransactions: !0
                                            })), {
                                                delay: o,
                                                retryCount: s,
                                                shouldRetry: ({
                                                    error: e
                                                }) => e instanceof Yn
                                            });
                                            b = !1;
                                            const r = n.transactions.find((({
                                                from: e,
                                                nonce: t
                                            }) => e === l.from && t === l.nonce));
                                            if (!r) return;
                                            if (d = await Xe(e, Vr, "getTransactionReceipt")({
                                                    hash: r.hash
                                                }), t > 1 && (!d.blockNumber || m - d.blockNumber + 1 n < t)) return;
                                            let i = "replaced";
                                            r.to === l.to && r.value === l.value ? i = "repriced" : r.from === r.to && 0 n === r.value && (i = "cancelled"), c((() => {
                                                var e;
                                                null == (e = a.onReplaced) || e.call(a, {
                                                    reason: i,
                                                    replacedTransaction: l,
                                                    transaction: r,
                                                    transactionReceipt: d
                                                }), a.resolve(d)
                                            }))
                                        } catch (y) {
                                            c((() => a.reject(y)))
                                        }
                                    } else c((() => a.reject(p)))
                                } finally {
                                    f++
                                }
                            }
                        }
                    })
                }))
            }))
        }(t, e),
        watchBlocks: e => function(e, {
            blockTag: t = "latest",
            emitMissed: n = !1,
            emitOnBegin: a = !1,
            onBlock: r,
            onError: s,
            includeTransactions: o,
            poll: i,
            pollingInterval: c = e.pollingInterval
        }) {
            const u = void 0 !== i ? i : "webSocket" !== e.transport.type && ("fallback" !== e.transport.type || "webSocket" !== e.transport.transports[0].config.type),
                l = o ? ? !1;
            let d;
            return u ? $a(rn(["watchBlocks", e.uid, t, n, a, l, c]), {
                onBlock: r,
                onError: s
            }, (r => Aa((async () => {
                var a;
                try {
                    const a = await Xe(e, Qn, "getBlock")({
                        blockTag: t,
                        includeTransactions: l
                    });
                    if (a.number && (null == d ? void 0 : d.number)) {
                        if (a.number === d.number) return;
                        if (a.number - d.number > 1 && n)
                            for (let t = (null == d ? void 0 : d.number) + 1 n; t < a.number; t++) {
                                const n = await Xe(e, Qn, "getBlock")({
                                    blockNumber: t,
                                    includeTransactions: l
                                });
                                r.onBlock(n, d), d = n
                            }
                    }(!(null == d ? void 0 : d.number) || "pending" === t && !(null == a ? void 0 : a.number) || a.number && a.number > d.number) && (r.onBlock(a, d), d = a)
                } catch (s) {
                    null == (a = r.onError) || a.call(r, s)
                }
            }), {
                emitOnBegin: a,
                interval: c
            }))) : (() => {
                let t = !0,
                    n = () => t = !1;
                return (async () => {
                    try {
                        const a = (() => {
                                if ("fallback" === e.transport.type) {
                                    const t = e.transport.transports.find((e => "webSocket" === e.config.type));
                                    return t ? t.value : e.transport
                                }
                                return e.transport
                            })(),
                            {
                                unsubscribe: o
                            } = await a.subscribe({
                                params: ["newHeads"],
                                onData(n) {
                                    var a, s, o;
                                    if (!t) return;
                                    const i = ((null == (o = null == (s = null == (a = e.chain) ? void 0 : a.formatters) ? void 0 : s.block) ? void 0 : o.format) || ue)(n.result);
                                    r(i, d), d = i
                                },
                                onError(e) {
                                    null == s || s(e)
                                }
                            });
                        n = o, t || n()
                    } catch (a) {
                        null == s || s(a)
                    }
                })(), () => n()
            })()
        }(t, e),
        watchBlockNumber: e => Kr(t, e),
        watchContractEvent: e => function(e, t) {
            const {
                abi: n,
                address: a,
                args: r,
                batch: s = !0,
                eventName: o,
                fromBlock: i,
                onError: c,
                onLogs: u,
                poll: l,
                pollingInterval: d = e.pollingInterval,
                strict: f
            } = t;
            return (void 0 !== l ? l : "bigint" == typeof i || "webSocket" !== e.transport.type && ("fallback" !== e.transport.type || "webSocket" !== e.transport.transports[0].config.type)) ? (() => {
                const t = f ? ? !1;
                return $a(rn(["watchContractEvent", a, r, s, e.uid, o, d, t, i]), {
                    onLogs: u,
                    onError: c
                }, (c => {
                    let u, l;
                    void 0 !== i && (u = i - 1 n);
                    let f = !1;
                    const b = Aa((async () => {
                        var d;
                        if (f) try {
                            let i;
                            if (l) i = await Xe(e, qa, "getFilterChanges")({
                                filter: l
                            });
                            else {
                                const s = await Xe(e, Sa, "getBlockNumber")({});
                                i = u && u !== s ? await Xe(e, fa, "getContractEvents")({
                                    abi: n,
                                    address: a,
                                    args: r,
                                    eventName: o,
                                    fromBlock: u + 1 n,
                                    toBlock: s,
                                    strict: t
                                }) : [], u = s
                            }
                            if (0 === i.length) return;
                            if (s) c.onLogs(i);
                            else
                                for (const e of i) c.onLogs([e])
                        } catch (b) {
                            l && b instanceof En && (f = !1), null == (d = c.onError) || d.call(c, b)
                        } else {
                            try {
                                l = await Xe(e, Gt, "createContractEventFilter")({
                                    abi: n,
                                    address: a,
                                    args: r,
                                    eventName: o,
                                    strict: t,
                                    fromBlock: i
                                })
                            } catch {}
                            f = !0
                        }
                    }), {
                        emitOnBegin: !0,
                        interval: d
                    });
                    return async () => {
                        l && await Xe(e, za, "uninstallFilter")({
                            filter: l
                        }), b()
                    }
                }))
            })() : (() => {
                const t = f ? ? !1,
                    i = rn(["watchContractEvent", a, r, s, e.uid, o, d, t]);
                let l = !0,
                    b = () => l = !1;
                return $a(i, {
                    onLogs: u,
                    onError: c
                }, (t => ((async () => {
                    try {
                        const s = (() => {
                                if ("fallback" === e.transport.type) {
                                    const t = e.transport.transports.find((e => "webSocket" === e.config.type));
                                    return t ? t.value : e.transport
                                }
                                return e.transport
                            })(),
                            i = o ? St({
                                abi: n,
                                eventName: o,
                                args: r
                            }) : [],
                            {
                                unsubscribe: c
                            } = await s.subscribe({
                                params: ["logs", {
                                    address: a,
                                    topics: i
                                }],
                                onData(e) {
                                    var a;
                                    if (!l) return;
                                    const r = e.result;
                                    try {
                                        const {
                                            eventName: e,
                                            args: a
                                        } = ca({
                                            abi: n,
                                            data: r.data,
                                            topics: r.topics,
                                            strict: f
                                        }), s = ye(r, {
                                            args: a,
                                            eventName: e
                                        });
                                        t.onLogs([s])
                                    } catch (s) {
                                        let e, n;
                                        if (s instanceof yt || s instanceof gt) {
                                            if (f) return;
                                            e = s.abiItem.name, n = null == (a = s.abiItem.inputs) ? void 0 : a.some((e => !("name" in e && e.name)))
                                        }
                                        const o = ye(r, {
                                            args: n ? [] : {},
                                            eventName: e
                                        });
                                        t.onLogs([o])
                                    }
                                },
                                onError(e) {
                                    var n;
                                    null == (n = t.onError) || n.call(t, e)
                                }
                            });
                        b = c, l || b()
                    } catch (s) {
                        null == c || c(s)
                    }
                })(), () => b())))
            })()
        }(t, e),
        watchEvent: e => function(e, {
            address: t,
            args: n,
            batch: a = !0,
            event: r,
            events: s,
            fromBlock: o,
            onError: i,
            onLogs: c,
            poll: u,
            pollingInterval: l = e.pollingInterval,
            strict: d
        }) {
            const f = void 0 !== u ? u : "bigint" == typeof o || "webSocket" !== e.transport.type && ("fallback" !== e.transport.type || "webSocket" !== e.transport.transports[0].config.type),
                b = d ? ? !1;
            return f ? $a(rn(["watchEvent", t, n, a, e.uid, r, l, o]), {
                onLogs: c,
                onError: i
            }, (i => {
                let c, u;
                void 0 !== o && (c = o - 1 n);
                let d = !1;
                const f = Aa((async () => {
                    var l;
                    if (d) try {
                        let o;
                        if (u) o = await Xe(e, qa, "getFilterChanges")({
                            filter: u
                        });
                        else {
                            const a = await Xe(e, Sa, "getBlockNumber")({});
                            o = c && c !== a ? await Xe(e, da, "getLogs")({
                                address: t,
                                args: n,
                                event: r,
                                events: s,
                                fromBlock: c + 1 n,
                                toBlock: a
                            }) : [], c = a
                        }
                        if (0 === o.length) return;
                        if (a) i.onLogs(o);
                        else
                            for (const e of o) i.onLogs([e])
                    } catch (f) {
                        u && f instanceof En && (d = !1), null == (l = i.onError) || l.call(i, f)
                    } else {
                        try {
                            u = await Xe(e, yr, "createEventFilter")({
                                address: t,
                                args: n,
                                event: r,
                                events: s,
                                strict: b,
                                fromBlock: o
                            })
                        } catch {}
                        d = !0
                    }
                }), {
                    emitOnBegin: !0,
                    interval: l
                });
                return async () => {
                    u && await Xe(e, za, "uninstallFilter")({
                        filter: u
                    }), f()
                }
            })) : (() => {
                let a = !0,
                    o = () => a = !1;
                return (async () => {
                    try {
                        const u = (() => {
                                if ("fallback" === e.transport.type) {
                                    const t = e.transport.transports.find((e => "webSocket" === e.config.type));
                                    return t ? t.value : e.transport
                                }
                                return e.transport
                            })(),
                            l = s ? ? (r ? [r] : void 0);
                        let f = [];
                        l && (f = [l.flatMap((e => St({
                            abi: [e],
                            eventName: e.name,
                            args: n
                        })))], r && (f = f[0]));
                        const {
                            unsubscribe: m
                        } = await u.subscribe({
                            params: ["logs", {
                                address: t,
                                topics: f
                            }],
                            onData(e) {
                                var t;
                                if (!a) return;
                                const n = e.result;
                                try {
                                    const {
                                        eventName: e,
                                        args: t
                                    } = ca({
                                        abi: l ? ? [],
                                        data: n.data,
                                        topics: n.topics,
                                        strict: b
                                    }), a = ye(n, {
                                        args: t,
                                        eventName: e
                                    });
                                    c([a])
                                } catch (r) {
                                    let e, a;
                                    if (r instanceof yt || r instanceof gt) {
                                        if (d) return;
                                        e = r.abiItem.name, a = null == (t = r.abiItem.inputs) ? void 0 : t.some((e => !("name" in e && e.name)))
                                    }
                                    const s = ye(n, {
                                        args: a ? [] : {},
                                        eventName: e
                                    });
                                    c([s])
                                }
                            },
                            onError(e) {
                                null == i || i(e)
                            }
                        });
                        o = m, a || o()
                    } catch (u) {
                        null == i || i(u)
                    }
                })(), () => o()
            })()
        }(t, e),
        watchPendingTransactions: e => function(e, {
            batch: t = !0,
            onError: n,
            onTransactions: a,
            poll: r,
            pollingInterval: s = e.pollingInterval
        }) {
            return (void 0 !== r ? r : "webSocket" !== e.transport.type) ? $a(rn(["watchPendingTransactions", e.uid, t, s]), {
                onTransactions: a,
                onError: n
            }, (n => {
                let a;
                const r = Aa((async () => {
                    var s;
                    try {
                        if (!a) try {
                            return void(a = await Xe(e, gr, "createPendingTransactionFilter")({}))
                        } catch (o) {
                            throw r(), o
                        }
                        const s = await Xe(e, qa, "getFilterChanges")({
                            filter: a
                        });
                        if (0 === s.length) return;
                        if (t) n.onTransactions(s);
                        else
                            for (const e of s) n.onTransactions([e])
                    } catch (o) {
                        null == (s = n.onError) || s.call(n, o)
                    }
                }), {
                    emitOnBegin: !0,
                    interval: s
                });
                return async () => {
                    a && await Xe(e, za, "uninstallFilter")({
                        filter: a
                    }), r()
                }
            })) : (() => {
                let t = !0,
                    r = () => t = !1;
                return (async () => {
                    try {
                        const {
                            unsubscribe: s
                        } = await e.transport.subscribe({
                            params: ["newPendingTransactions"],
                            onData(e) {
                                if (!t) return;
                                const n = e.result;
                                a([n])
                            },
                            onError(e) {
                                null == n || n(e)
                            }
                        });
                        r = s, t || r()
                    } catch (s) {
                        null == n || n(s)
                    }
                })(), () => r()
            })()
        }(t, e)
    }
}

function ts(e) {
    const {
        key: t = "public",
        name: n = "Public Client"
    } = e;
    return Ua({ ...e,
        key: t,
        name: n,
        type: "publicClient"
    }).extend(es)
}
export {
    nt as AbiConstructorNotFoundError, at as AbiConstructorParamsNotFoundError, rt as AbiDecodingDataSizeTooSmallError, st as AbiDecodingZeroDataError, ot as AbiEncodingArrayLengthMismatchError, it as AbiEncodingBytesSizeMismatchError, ct as AbiEncodingLengthMismatchError, ut as AbiErrorSignatureNotFoundError, ft as AbiEventNotFoundError, lt as AbiEventSignatureEmptyTopicsError, dt as AbiEventSignatureNotFoundError, bt as AbiFunctionNotFoundError, mt as AbiFunctionOutputsNotFoundError, on as AccountStateConflictError, e as BaseError, Jn as BaseFeeScalarError, Yn as BlockNotFoundError, ht as BytesSizeMismatchError, ln as CallExecutionError, Cn as ChainDisconnectedError, ge as ChainDoesNotSupportContract, ve as ClientChainNotConfiguredError, dn as ContractFunctionExecutionError, fn as ContractFunctionRevertedError, bn as ContractFunctionZeroDataError, yt as DecodeLogDataMismatch, gt as DecodeLogTopicsMismatch, Zn as Eip1559FeesNotSupportedError, rr as EnsAvatarInvalidNftUriError, or as EnsAvatarUnsupportedNamespaceError, sr as EnsAvatarUriResolutionError, Dn as EstimateGasExecutionError, K as ExecutionRevertedError, Y as FeeCapTooHighError, Q as FeeCapTooLowError, ce as FeeConflictError, xt as FilterTypeNotSupportedError, pn as HttpRequestError, ne as InsufficientFundsError, k as IntegerOutOfRangeError, Nn as InternalRpcError, ae as IntrinsicGasTooHighError, re as IntrinsicGasTooLowError, wt as InvalidAbiDecodingTypeError, vt as InvalidAbiEncodingTypeError, L as InvalidAddressError, Pt as InvalidArrayError, f as InvalidBytesBooleanError, Ee as InvalidChainIdError, kt as InvalidDefinitionTypeError, x as InvalidHexBooleanError, En as InvalidInputRpcError, Te as InvalidLegacyVError, xn as InvalidParamsRpcError, Pn as InvalidRequestRpcError, je as InvalidSerializableTransactionError, Be as InvalidStorageKeySizeError, $n as JsonRpcVersionUnsupportedError, In as LimitExceededRpcError, Kn as MaxFeePerGasTooLowError, kn as MethodNotFoundRpcError, On as MethodNotSupportedRpcError, te as NonceMaxValueError, X as NonceTooHighError, ee as NonceTooLowError, wn as ParseRpcError, Mn as ProviderDisconnectedError, vn as ProviderRpcError, mn as RawContractError, Tn as ResourceNotFoundRpcError, jn as ResourceUnavailableRpcError, gn as RpcError, hn as RpcRequestError, N as SizeExceedsPaddingSizeError, E as SizeOverflowError, T as SliceOffsetOutOfBoundsError, cn as StateAssignmentConflictError, Sn as SwitchChainError, yn as TimeoutError, oe as TipAboveFeeCapError, we as TransactionNotFoundError, ke as TransactionReceiptNotFoundError, Bn as TransactionRejectedRpcError, se as TransactionTypeNotSupportedError, An as UnauthorizedProviderError, ie as UnknownNodeError, qn as UnknownRpcError, Rn as UnsupportedProviderMethodError, Va as UrlRequiredError, Fn as UserRejectedRequestError, Ne as WaitForTransactionReceiptTimeoutError, Vn as assertRequest, Oe as assertTransactionEIP1559, Ie as assertTransactionEIP2930, $e as assertTransactionLegacy, le as blobsToCommitments, fe as blobsToProofs, j as boolToBytes, s as boolToHex, Jt as bytesToBigInt, Zt as bytesToBool, u as bytesToHex, Kt as bytesToNumber, Yt as bytesToString, jr as ccipFetch, jr as ccipRequest, W as checksumAddress, Fe as commitmentToVersionedHash, de as commitmentsToVersionedHashes, G as concat, Ae as concatBytes, _ as concatHex, Ua as createClient, ts as createPublicClient, Wa as createTransport, Qt as decodeAbiParameters, an as decodeErrorResult, ca as decodeEventLog, ma as decodeFunctionResult, Re as defineBlock, Me as defineChain, Ce as defineTransaction, Se as defineTransactionReceipt, qe as defineTransactionRequest, Bt as encodeAbiParameters, Lr as encodeDeployData, St as encodeEventTopics, _t as encodeFunctionData, B as etherUnits, Or as extractChain, ue as formatBlock, p as formatEther, Z as formatGwei, ye as formatLog, Pe as formatTransaction, xe as formatTransactionReceipt, pe as formatTransactionRequest, O as formatUnits, I as fromHex, At as getAbiItem, xa as getChainContractAddress, Gn as getContractError, jt as getEventSelector, Et as getEventSignature, Ft as getFunctionSelector, Et as getFunctionSignature, me as getTransactionType, Gr as getTypesForEIP712Domain, $ as gweiUnits, Ar as hashDomain, _r as hashMessage, Fr as hashTypedData, l as hexToBigInt, F as hexToBool, m as hexToBytes, b as hexToNumber, A as hexToString, Ya as http, D as isAddress, xr as isAddressEqual, i as isHex, z as keccak256, tr as labelhash, ze as maxUint16, pa as multicall3Abi, er as namehash, R as numberToBytes, a as numberToHex, Tr as offchainLookup, Er as offchainLookupAbiItem, Nr as offchainLookupSignature, M as pad, C as padBytes, r as padHex, S as parseEther, la as parseEventLogs, q as parseUnits, Ut as prepareEncodeFunctionData, Ur as presignMessagePrefix, es as publicActions, Ge as rpcTransactionType, De as serializeAccessList, Jr as serializeSignature, Le as serializeTransaction, Ue as sha256, Jr as signatureToHex, t as size, U as slice, V as sliceBytes, _e as sliceHex, w as stringToBytes, o as stringToHex, rn as stringify, be as toBlobSidecars, He as toBlobs, n as toBytes, Tt as toEventHash, jt as toEventSelector, Et as toEventSignature, Tt as toFunctionHash, Ft as toFunctionSelector, Et as toFunctionSignature, P as toHex, We as toRlp, Ve as transactionType, d as trim, zr as validateTypedData, _a as withRetry, Ja as withTimeout
};