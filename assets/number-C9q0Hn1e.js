import {
    a8 as e,
    eA as t,
    a9 as s,
    eB as n,
    eC as i,
    eD as o,
    eE as a,
    eF as r,
    eG as c,
    eH as u,
    eI as l,
    eJ as h,
    eK as d,
    eL as b
} from "./index-CQfCy4Xm.js";
import {
    k as f,
    s as p
} from "./sha256-o0pdH_sn.js";

function m(n, i) {
    const o = i || "hex",
        a = f(e(n, {
            strict: !1
        }) ? t(n) : n);
    return "bytes" === o ? a : s(a)
}
class g extends n {
    constructor({
        address: e
    }) {
        super(`Address "${e}" is invalid.`, {
            metaMessages: ["- Address must be a hex value of 20 bytes (40 hex characters).", "- Address must match its checksum counterpart."]
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "InvalidAddressError"
        })
    }
}
class v extends Map {
    constructor(e) {
        super(), Object.defineProperty(this, "maxSize", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }), this.maxSize = e
    }
    set(e, t) {
        return super.set(e, t), this.maxSize && this.size > this.maxSize && this.delete(this.keys().next().value), this
    }
}
const y = new v(8192);

function x(e, t) {
    if (y.has(`${e}.${t}`)) return y.get(`${e}.${t}`);
    const s = e.substring(2).toLowerCase(),
        n = m(i(s), "bytes"),
        o = s.split("");
    for (let i = 0; i < 40; i += 2) n[i >> 1] >> 4 >= 8 && o[i] && (o[i] = o[i].toUpperCase()), (15 & n[i >> 1]) >= 8 && o[i + 1] && (o[i + 1] = o[i + 1].toUpperCase());
    const a = `0x${o.join("")}`;
    return y.set(`${e}.${t}`, a), a
}
const P = /^0x[a-fA-F0-9]{40}$/,
    w = new v(8192);

function G(e, t) {
    const {
        strict: s = !0
    } = t ? ? {};
    if (w.has(e)) return w.get(e);
    const n = !(!P.test(e) || e.toLowerCase() !== e && s && x(e) !== e);
    return w.set(e, n), n
}

function I(e) {
    return "string" == typeof e[0] ? B(e) : F(e)
}

function F(e) {
    let t = 0;
    for (const i of e) t += i.length;
    const s = new Uint8Array(t);
    let n = 0;
    for (const i of e) s.set(i, n), n += i.length;
    return s
}

function B(e) {
    return `0x${e.reduce(((e,t)=>e+t.replace("0x","")),"")}`
}

function $(t, s, n, {
    strict: i
} = {}) {
    return e(t, {
        strict: !1
    }) ? O(t, s, n, {
        strict: i
    }) : j(t, s, n, {
        strict: i
    })
}

function U(e, t) {
    if ("number" == typeof t && t > 0 && t > o(e) - 1) throw new a({
        offset: t,
        position: "start",
        size: o(e)
    })
}

function T(e, t, s) {
    if ("number" == typeof t && "number" == typeof s && o(e) !== s - t) throw new a({
        offset: s,
        position: "end",
        size: o(e)
    })
}

function j(e, t, s, {
    strict: n
} = {}) {
    U(e, t);
    const i = e.slice(t, s);
    return n && T(i, t, s), i
}

function O(e, t, s, {
    strict: n
} = {}) {
    U(e, t);
    const i = `0x${e.replace("0x","").slice(2*(t??0),2*(s??e.length))}`;
    return n && T(i, t, s), i
}
class k extends n {
    constructor({
        offset: e
    }) {
        super(`Offset \`${e}\` cannot be negative.`), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "NegativeOffsetError"
        })
    }
}
class E extends n {
    constructor({
        length: e,
        position: t
    }) {
        super(`Position \`${t}\` is out of bounds (\`0 < position < ${e}\`).`), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "PositionOutOfBoundsError"
        })
    }
}
class L extends n {
    constructor({
        count: e,
        limit: t
    }) {
        super(`Recursive read limit of \`${t}\` exceeded (recursive read count: \`${e}\`).`), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "RecursiveReadLimitExceededError"
        })
    }
}
const N = {
    bytes: new Uint8Array,
    dataView: new DataView(new ArrayBuffer(0)),
    position: 0,
    positionReadCount: new Map,
    recursiveReadCount: 0,
    recursiveReadLimit: Number.POSITIVE_INFINITY,
    assertReadLimit() {
        if (this.recursiveReadCount >= this.recursiveReadLimit) throw new L({
            count: this.recursiveReadCount + 1,
            limit: this.recursiveReadLimit
        })
    },
    assertPosition(e) {
        if (e < 0 || e > this.bytes.length - 1) throw new E({
            length: this.bytes.length,
            position: e
        })
    },
    decrementPosition(e) {
        if (e < 0) throw new k({
            offset: e
        });
        const t = this.position - e;
        this.assertPosition(t), this.position = t
    },
    getReadCount(e) {
        return this.positionReadCount.get(e || this.position) || 0
    },
    incrementPosition(e) {
        if (e < 0) throw new k({
            offset: e
        });
        const t = this.position + e;
        this.assertPosition(t), this.position = t
    },
    inspectByte(e) {
        const t = e ? ? this.position;
        return this.assertPosition(t), this.bytes[t]
    },
    inspectBytes(e, t) {
        const s = t ? ? this.position;
        return this.assertPosition(s + e - 1), this.bytes.subarray(s, s + e)
    },
    inspectUint8(e) {
        const t = e ? ? this.position;
        return this.assertPosition(t), this.bytes[t]
    },
    inspectUint16(e) {
        const t = e ? ? this.position;
        return this.assertPosition(t + 1), this.dataView.getUint16(t)
    },
    inspectUint24(e) {
        const t = e ? ? this.position;
        return this.assertPosition(t + 2), (this.dataView.getUint16(t) << 8) + this.dataView.getUint8(t + 2)
    },
    inspectUint32(e) {
        const t = e ? ? this.position;
        return this.assertPosition(t + 3), this.dataView.getUint32(t)
    },
    pushByte(e) {
        this.assertPosition(this.position), this.bytes[this.position] = e, this.position++
    },
    pushBytes(e) {
        this.assertPosition(this.position + e.length - 1), this.bytes.set(e, this.position), this.position += e.length
    },
    pushUint8(e) {
        this.assertPosition(this.position), this.bytes[this.position] = e, this.position++
    },
    pushUint16(e) {
        this.assertPosition(this.position + 1), this.dataView.setUint16(this.position, e), this.position += 2
    },
    pushUint24(e) {
        this.assertPosition(this.position + 2), this.dataView.setUint16(this.position, e >> 8), this.dataView.setUint8(this.position + 2, 255 & e), this.position += 3
    },
    pushUint32(e) {
        this.assertPosition(this.position + 3), this.dataView.setUint32(this.position, e), this.position += 4
    },
    readByte() {
        this.assertReadLimit(), this._touch();
        const e = this.inspectByte();
        return this.position++, e
    },
    readBytes(e, t) {
        this.assertReadLimit(), this._touch();
        const s = this.inspectBytes(e);
        return this.position += t ? ? e, s
    },
    readUint8() {
        this.assertReadLimit(), this._touch();
        const e = this.inspectUint8();
        return this.position += 1, e
    },
    readUint16() {
        this.assertReadLimit(), this._touch();
        const e = this.inspectUint16();
        return this.position += 2, e
    },
    readUint24() {
        this.assertReadLimit(), this._touch();
        const e = this.inspectUint24();
        return this.position += 3, e
    },
    readUint32() {
        this.assertReadLimit(), this._touch();
        const e = this.inspectUint32();
        return this.position += 4, e
    },
    get remaining() {
        return this.bytes.length - this.position
    },
    setPosition(e) {
        const t = this.position;
        return this.assertPosition(e), this.position = e, () => this.position = t
    },
    _touch() {
        if (this.recursiveReadLimit === Number.POSITIVE_INFINITY) return;
        const e = this.getReadCount();
        this.positionReadCount.set(this.position, e + 1), e > 0 && this.recursiveReadCount++
    }
};

function C(e, {
    recursiveReadLimit: t = 8192
} = {}) {
    const s = Object.create(N);
    return s.bytes = e, s.dataView = new DataView(e.buffer, e.byteOffset, e.byteLength), s.positionReadCount = new Map, s.recursiveReadLimit = t, s
}

function z(e, t = "wei") {
    return r(e, c[t])
}

function R(e) {
    const t = Object.entries(e).map((([e, t]) => void 0 === t || !1 === t ? null : [e, t])).filter(Boolean),
        s = t.reduce(((e, [t]) => Math.max(e, t.length)), 0);
    return t.map((([e, t]) => `  ${`${e}:`.padEnd(s+1)}  ${t}`)).join("\n")
}
class V extends n {
    constructor() {
        super(["Cannot specify both a `gasPrice` and a `maxFeePerGas`/`maxPriorityFeePerGas`.", "Use `maxFeePerGas`/`maxPriorityFeePerGas` for EIP-1559 compatible networks, and `gasPrice` for others."].join("\n")), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "FeeConflictError"
        })
    }
}
class M extends n {
    constructor({
        v: e
    }) {
        super(`Invalid \`v\` value "${e}". Expected 27 or 28.`), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "InvalidLegacyVError"
        })
    }
}
class H extends n {
    constructor({
        transaction: e
    }) {
        super("Cannot infer a transaction type from provided transaction.", {
            metaMessages: ["Provided Transaction:", "{", R(e), "}", "", "To infer the type, either provide:", "- a `type` to the Transaction, or", "- an EIP-1559 Transaction with `maxFeePerGas`, or", "- an EIP-2930 Transaction with `gasPrice` & `accessList`, or", "- an EIP-4844 Transaction with `blobs`, `blobVersionedHashes`, `sidecars`, or", "- a Legacy Transaction with `gasPrice`"]
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "InvalidSerializableTransactionError"
        })
    }
}
class A extends n {
    constructor({
        storageKey: e
    }) {
        super(`Size for storage key "${e}" is invalid. Expected 32 bytes. Got ${Math.floor((e.length-2)/2)} bytes.`), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "InvalidStorageKeySizeError"
        })
    }
}
class S extends n {
    constructor({
        blockHash: e,
        blockNumber: t,
        blockTag: s,
        hash: n,
        index: i
    }) {
        let o = "Transaction";
        s && void 0 !== i && (o = `Transaction at block time "${s}" at index "${i}"`), e && void 0 !== i && (o = `Transaction at block hash "${e}" at index "${i}"`), t && void 0 !== i && (o = `Transaction at block number "${t}" at index "${i}"`), n && (o = `Transaction with hash "${n}"`), super(`${o} could not be found.`), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "TransactionNotFoundError"
        })
    }
}
class D extends n {
    constructor({
        hash: e
    }) {
        super(`Transaction receipt with hash "${e}" could not be found. The Transaction may not be processed on a block yet.`), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "TransactionReceiptNotFoundError"
        })
    }
}
class _ extends n {
    constructor({
        hash: e
    }) {
        super(`Timed out while waiting for transaction with hash "${e}" to be confirmed.`), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "WaitForTransactionReceiptTimeoutError"
        })
    }
}
class K extends n {
    constructor({
        cause: e,
        message: t
    } = {}) {
        var s;
        const n = null == (s = null == t ? void 0 : t.replace("execution reverted: ", "")) ? void 0 : s.replace("execution reverted", "");
        super(`Execution reverted ${n?`with reason: ${n}`:"for an unknown reason"}.`, {
            cause: e
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "ExecutionRevertedError"
        })
    }
}
Object.defineProperty(K, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: 3
}), Object.defineProperty(K, "nodeMessage", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: /execution reverted/
});
class Y extends n {
    constructor({
        cause: e,
        maxFeePerGas: t
    } = {}) {
        super(`The fee cap (\`maxFeePerGas\`${t?` = ${z(t)} gwei`:""}) cannot be higher than the maximum allowed value (2^256-1).`, {
            cause: e
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "FeeCapTooHigh"
        })
    }
}
Object.defineProperty(Y, "nodeMessage", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: /max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/
});
class q extends n {
    constructor({
        cause: e,
        maxFeePerGas: t
    } = {}) {
        super(`The fee cap (\`maxFeePerGas\`${t?` = ${z(t)}`:""} gwei) cannot be lower than the block base fee.`, {
            cause: e
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "FeeCapTooLow"
        })
    }
}
Object.defineProperty(q, "nodeMessage", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: /max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/
});
class J extends n {
    constructor({
        cause: e,
        nonce: t
    } = {}) {
        super(`Nonce provided for the transaction ${t?`(${t}) `:""}is higher than the next one expected.`, {
            cause: e
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "NonceTooHighError"
        })
    }
}
Object.defineProperty(J, "nodeMessage", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: /nonce too high/
});
class W extends n {
    constructor({
        cause: e,
        nonce: t
    } = {}) {
        super([`Nonce provided for the transaction ${t?`(${t}) `:""}is lower than the current nonce of the account.`, "Try increasing the nonce or find the latest nonce with `getTransactionCount`."].join("\n"), {
            cause: e
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "NonceTooLowError"
        })
    }
}
Object.defineProperty(W, "nodeMessage", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: /nonce too low|transaction already imported|already known/
});
class Q extends n {
    constructor({
        cause: e,
        nonce: t
    } = {}) {
        super(`Nonce provided for the transaction ${t?`(${t}) `:""}exceeds the maximum allowed nonce.`, {
            cause: e
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "NonceMaxValueError"
        })
    }
}
Object.defineProperty(Q, "nodeMessage", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: /nonce has max value/
});
class X extends n {
    constructor({
        cause: e
    } = {}) {
        super(["The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account."].join("\n"), {
            cause: e,
            metaMessages: ["This error could arise when the account does not have enough funds to:", " - pay for the total gas fee,", " - pay for the value to send.", " ", "The cost of the transaction is calculated as `gas * gas fee + value`, where:", " - `gas` is the amount of gas needed for transaction to execute,", " - `gas fee` is the gas fee,", " - `value` is the amount of ether to send to the recipient."]
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "InsufficientFundsError"
        })
    }
}
Object.defineProperty(X, "nodeMessage", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: /insufficient funds/
});
class Z extends n {
    constructor({
        cause: e,
        gas: t
    } = {}) {
        super(`The amount of gas ${t?`(${t}) `:""}provided for the transaction exceeds the limit allowed for the block.`, {
            cause: e
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "IntrinsicGasTooHighError"
        })
    }
}
Object.defineProperty(Z, "nodeMessage", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: /intrinsic gas too high|gas limit reached/
});
class ee extends n {
    constructor({
        cause: e,
        gas: t
    } = {}) {
        super(`The amount of gas ${t?`(${t}) `:""}provided for the transaction is too low.`, {
            cause: e
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "IntrinsicGasTooLowError"
        })
    }
}
Object.defineProperty(ee, "nodeMessage", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: /intrinsic gas too low/
});
class te extends n {
    constructor({
        cause: e
    }) {
        super("The transaction type is not supported for this chain.", {
            cause: e
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "TransactionTypeNotSupportedError"
        })
    }
}
Object.defineProperty(te, "nodeMessage", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: /transaction type not valid/
});
class se extends n {
    constructor({
        cause: e,
        maxPriorityFeePerGas: t,
        maxFeePerGas: s
    } = {}) {
        super([`The provided tip (\`maxPriorityFeePerGas\`${t?` = ${z(t)} gwei`:""}) cannot be higher than the fee cap (\`maxFeePerGas\`${s?` = ${z(s)} gwei`:""}).`].join("\n"), {
            cause: e
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "TipAboveFeeCapError"
        })
    }
}
Object.defineProperty(se, "nodeMessage", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: /max priority fee per gas higher than max fee per gas|tip higher than fee cap/
});
class ne extends n {
    constructor({
        cause: e
    }) {
        super(`An error occurred while executing: ${null==e?void 0:e.shortMessage}`, {
            cause: e
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "UnknownNodeError"
        })
    }
}

function ie(e, t) {
    return ({
        exclude: s,
        format: n
    }) => ({
        exclude: s,
        format: e => {
            const i = t(e);
            if (s)
                for (const t of s) delete i[t];
            return { ...i,
                ...n(e)
            }
        },
        type: e
    })
}
const oe = {
    legacy: "0x0",
    eip2930: "0x1",
    eip1559: "0x2",
    eip4844: "0x3"
};

function ae(e) {
    const t = {};
    return void 0 !== e.accessList && (t.accessList = e.accessList), void 0 !== e.blobVersionedHashes && (t.blobVersionedHashes = e.blobVersionedHashes), void 0 !== e.blobs && ("string" != typeof e.blobs[0] ? t.blobs = e.blobs.map((e => u(e))) : t.blobs = e.blobs), void 0 !== e.data && (t.data = e.data), void 0 !== e.from && (t.from = e.from), void 0 !== e.gas && (t.gas = l(e.gas)), void 0 !== e.gasPrice && (t.gasPrice = l(e.gasPrice)), void 0 !== e.maxFeePerBlobGas && (t.maxFeePerBlobGas = l(e.maxFeePerBlobGas)), void 0 !== e.maxFeePerGas && (t.maxFeePerGas = l(e.maxFeePerGas)), void 0 !== e.maxPriorityFeePerGas && (t.maxPriorityFeePerGas = l(e.maxPriorityFeePerGas)), void 0 !== e.nonce && (t.nonce = l(e.nonce)), void 0 !== e.to && (t.to = e.to), void 0 !== e.type && (t.type = oe[e.type]), void 0 !== e.value && (t.value = l(e.value)), t
}
const re = ie("transactionRequest", ae),
    ce = {
        "0x0": "legacy",
        "0x1": "eip2930",
        "0x2": "eip1559",
        "0x3": "eip4844"
    };

function ue(e) {
    const t = { ...e,
        blockHash: e.blockHash ? e.blockHash : null,
        blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
        chainId: e.chainId ? h(e.chainId) : void 0,
        gas: e.gas ? BigInt(e.gas) : void 0,
        gasPrice: e.gasPrice ? BigInt(e.gasPrice) : void 0,
        maxFeePerBlobGas: e.maxFeePerBlobGas ? BigInt(e.maxFeePerBlobGas) : void 0,
        maxFeePerGas: e.maxFeePerGas ? BigInt(e.maxFeePerGas) : void 0,
        maxPriorityFeePerGas: e.maxPriorityFeePerGas ? BigInt(e.maxPriorityFeePerGas) : void 0,
        nonce: e.nonce ? h(e.nonce) : void 0,
        to: e.to ? e.to : null,
        transactionIndex: e.transactionIndex ? Number(e.transactionIndex) : null,
        type: e.type ? ce[e.type] : void 0,
        typeHex: e.type ? e.type : void 0,
        value: e.value ? BigInt(e.value) : void 0,
        v: e.v ? BigInt(e.v) : void 0
    };
    return t.yParity = (() => {
        if (e.yParity) return Number(e.yParity);
        if ("bigint" == typeof t.v) {
            if (0 n === t.v || 27 n === t.v) return 0;
            if (1 n === t.v || 28 n === t.v) return 1;
            if (t.v >= 35 n) return t.v % 2 n === 0 n ? 1 : 0
        }
    })(), "legacy" === t.type && (delete t.accessList, delete t.maxFeePerBlobGas, delete t.maxFeePerGas, delete t.maxPriorityFeePerGas, delete t.yParity), "eip2930" === t.type && (delete t.maxFeePerBlobGas, delete t.maxFeePerGas, delete t.maxPriorityFeePerGas), "eip1559" === t.type && delete t.maxFeePerBlobGas, t
}
const le = ie("transaction", ue);

function he(e) {
    var t;
    const s = null == (t = e.transactions) ? void 0 : t.map((e => "string" == typeof e ? e : ue(e)));
    return { ...e,
        baseFeePerGas: e.baseFeePerGas ? BigInt(e.baseFeePerGas) : null,
        blobGasUsed: e.blobGasUsed ? BigInt(e.blobGasUsed) : void 0,
        difficulty: e.difficulty ? BigInt(e.difficulty) : void 0,
        excessBlobGas: e.excessBlobGas ? BigInt(e.excessBlobGas) : void 0,
        gasLimit: e.gasLimit ? BigInt(e.gasLimit) : void 0,
        gasUsed: e.gasUsed ? BigInt(e.gasUsed) : void 0,
        hash: e.hash ? e.hash : null,
        logsBloom: e.logsBloom ? e.logsBloom : null,
        nonce: e.nonce ? e.nonce : null,
        number: e.number ? BigInt(e.number) : null,
        size: e.size ? BigInt(e.size) : void 0,
        timestamp: e.timestamp ? BigInt(e.timestamp) : void 0,
        transactions: s,
        totalDifficulty: e.totalDifficulty ? BigInt(e.totalDifficulty) : null
    }
}
const de = ie("block", he);

function be(e) {
    const {
        kzg: t
    } = e, s = e.to ? ? ("string" == typeof e.blobs[0] ? "hex" : "bytes"), n = "string" == typeof e.blobs[0] ? e.blobs.map((e => d(e))) : e.blobs, i = [];
    for (const o of n) i.push(Uint8Array.from(t.blobToKzgCommitment(o)));
    return "bytes" === s ? i : i.map((e => u(e)))
}

function fe(e) {
    const {
        kzg: t
    } = e, s = e.to ? ? ("string" == typeof e.blobs[0] ? "hex" : "bytes"), n = "string" == typeof e.blobs[0] ? e.blobs.map((e => d(e))) : e.blobs, i = "string" == typeof e.commitments[0] ? e.commitments.map((e => d(e))) : e.commitments, o = [];
    for (let a = 0; a < n.length; a++) {
        const e = n[a],
            s = i[a];
        o.push(Uint8Array.from(t.computeBlobKzgProof(e, s)))
    }
    return "bytes" === s ? o : o.map((e => u(e)))
}

function pe(n, i) {
    const o = i || "hex",
        a = p(e(n, {
            strict: !1
        }) ? t(n) : n);
    return "bytes" === o ? a : s(a)
}

function me(e) {
    const {
        commitment: t,
        version: s = 1
    } = e, n = e.to ? ? ("string" == typeof t ? "hex" : "bytes"), i = pe(t, "bytes");
    return i.set([s], 0), "bytes" === n ? i : u(i)
}

function ge(e) {
    const {
        commitments: t,
        version: s
    } = e, n = e.to ? ? ("string" == typeof t[0] ? "hex" : "bytes"), i = [];
    for (const o of t) i.push(me({
        commitment: o,
        to: n,
        version: s
    }));
    return i
}
const ve = 4096,
    ye = 131072,
    xe = 761855;
class Pe extends n {
    constructor({
        maxSize: e,
        size: t
    }) {
        super("Blob size is too large.", {
            metaMessages: [`Max: ${e} bytes`, `Given: ${t} bytes`]
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "BlobSizeTooLargeError"
        })
    }
}
class we extends n {
    constructor() {
        super("Blob data must not be empty."), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "EmptyBlobError"
        })
    }
}
class Ge extends n {
    constructor({
        hash: e,
        size: t
    }) {
        super(`Versioned hash "${e}" size is invalid.`, {
            metaMessages: ["Expected: 32", `Received: ${t}`]
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "InvalidVersionedHashSizeError"
        })
    }
}
class Ie extends n {
    constructor({
        hash: e,
        version: t
    }) {
        super(`Versioned hash "${e}" version is invalid.`, {
            metaMessages: ["Expected: 1", `Received: ${t}`]
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "InvalidVersionedHashVersionError"
        })
    }
}

function Fe(e) {
    const t = e.to ? ? ("string" == typeof e.data ? "hex" : "bytes"),
        s = "string" == typeof e.data ? d(e.data) : e.data,
        n = o(s);
    if (!n) throw new we;
    if (n > xe) throw new Pe({
        maxSize: xe,
        size: n
    });
    const i = [];
    let a = !0,
        r = 0;
    for (; a;) {
        const e = C(new Uint8Array(ye));
        let t = 0;
        for (; t < ve;) {
            const n = s.slice(r, r + 31);
            if (e.pushByte(0), e.pushBytes(n), n.length < 31) {
                e.pushByte(128), a = !1;
                break
            }
            t++, r += 31
        }
        i.push(e)
    }
    return "bytes" === t ? i.map((e => e.bytes)) : i.map((e => u(e.bytes)))
}

function Be(e) {
    const {
        data: t,
        kzg: s,
        to: n
    } = e, i = e.blobs ? ? Fe({
        data: t,
        to: n
    }), o = e.commitments ? ? be({
        blobs: i,
        kzg: s,
        to: n
    }), a = e.proofs ? ? fe({
        blobs: i,
        commitments: o,
        kzg: s,
        to: n
    }), r = [];
    for (let c = 0; c < i.length; c++) r.push({
        blob: i[c],
        commitment: o[c],
        proof: a[c]
    });
    return r
}

function $e(e) {
    if (e.type) return e.type;
    if (void 0 !== e.blobs || void 0 !== e.blobVersionedHashes || void 0 !== e.maxFeePerBlobGas || void 0 !== e.sidecars) return "eip4844";
    if (void 0 !== e.maxFeePerGas || void 0 !== e.maxPriorityFeePerGas) return "eip1559";
    if (void 0 !== e.gasPrice) return void 0 !== e.accessList ? "eip2930" : "legacy";
    throw new H({
        transaction: e
    })
}

function Ue(e, {
    args: t,
    eventName: s
} = {}) {
    return { ...e,
        blockHash: e.blockHash ? e.blockHash : null,
        blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
        logIndex: e.logIndex ? Number(e.logIndex) : null,
        transactionHash: e.transactionHash ? e.transactionHash : null,
        transactionIndex: e.transactionIndex ? Number(e.transactionIndex) : null,
        ...s ? {
            args: t,
            eventName: s
        } : {}
    }
}
class Te extends n {
    constructor({
        blockNumber: e,
        chain: t,
        contract: s
    }) {
        super(`Chain "${t.name}" does not support contract "${s.name}".`, {
            metaMessages: ["This could be due to any of the following:", ...e && s.blockCreated && s.blockCreated > e ? [`- The contract "${s.name}" was not deployed until block ${s.blockCreated} (current block ${e}).`] : [`- The chain does not have the contract "${s.name}" configured.`]]
        }), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "ChainDoesNotSupportContract"
        })
    }
}
class je extends n {
    constructor() {
        super("No chain was provided to the Client."), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "ClientChainNotConfiguredError"
        })
    }
}
class Oe extends n {
    constructor({
        chainId: e
    }) {
        super("number" == typeof e ? `Chain ID "${e}" is invalid.` : "Chain ID is invalid."), Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "InvalidChainIdError"
        })
    }
}

function ke(e) {
    return {
        formatters: void 0,
        fees: void 0,
        serializers: void 0,
        ...e
    }
}

function Ee(e, t = "hex") {
    const s = Le(e),
        n = C(new Uint8Array(s.length));
    return s.encode(n), "hex" === t ? u(n.bytes) : n.bytes
}

function Le(e) {
    return Array.isArray(e) ? function(e) {
        const t = e.reduce(((e, t) => e + t.length), 0),
            s = Ne(t);
        return {
            length: t <= 55 ? 1 + t : 1 + s + t,
            encode(n) {
                t <= 55 ? n.pushByte(192 + t) : (n.pushByte(247 + s), 1 === s ? n.pushUint8(t) : 2 === s ? n.pushUint16(t) : 3 === s ? n.pushUint24(t) : n.pushUint32(t));
                for (const {
                        encode: t
                    } of e) t(n)
            }
        }
    }(e.map((e => Le(e)))) : function(e) {
        const t = "string" == typeof e ? d(e) : e,
            s = Ne(t.length),
            n = 1 === t.length && t[0] < 128 ? 1 : t.length <= 55 ? 1 + t.length : 1 + s + t.length;
        return {
            length: n,
            encode(e) {
                1 === t.length && t[0] < 128 ? e.pushBytes(t) : t.length <= 55 ? (e.pushByte(128 + t.length), e.pushBytes(t)) : (e.pushByte(183 + s), 1 === s ? e.pushUint8(t.length) : 2 === s ? e.pushUint16(t.length) : 3 === s ? e.pushUint24(t.length) : e.pushUint32(t.length), e.pushBytes(t))
            }
        }
    }(e)
}

function Ne(e) {
    if (e < 256) return 1;
    if (e < 65536) return 2;
    if (e < 2 ** 24) return 3;
    if (e < 2 ** 32) return 4;
    throw new n("Length is too large.")
}
const Ce = {
    "0x0": "reverted",
    "0x1": "success"
};

function ze(e) {
    const t = { ...e,
        blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
        contractAddress: e.contractAddress ? e.contractAddress : null,
        cumulativeGasUsed: e.cumulativeGasUsed ? BigInt(e.cumulativeGasUsed) : null,
        effectiveGasPrice: e.effectiveGasPrice ? BigInt(e.effectiveGasPrice) : null,
        gasUsed: e.gasUsed ? BigInt(e.gasUsed) : null,
        logs: e.logs ? e.logs.map((e => Ue(e))) : null,
        to: e.to ? e.to : null,
        transactionIndex: e.transactionIndex ? h(e.transactionIndex) : null,
        status: e.status ? Ce[e.status] : null,
        type: e.type ? ce[e.type] || e.type : null
    };
    return e.blobGasPrice && (t.blobGasPrice = BigInt(e.blobGasPrice)), e.blobGasUsed && (t.blobGasUsed = BigInt(e.blobGasUsed)), t
}
const Re = ie("transactionReceipt", ze);

function Ve(e) {
    const {
        chainId: t,
        maxPriorityFeePerGas: s,
        maxFeePerGas: n,
        to: i
    } = e;
    if (t <= 0) throw new Oe({
        chainId: t
    });
    if (i && !G(i)) throw new g({
        address: i
    });
    if (n && n > 2 n ** 256 n - 1 n) throw new Y({
        maxFeePerGas: n
    });
    if (s && n && s > n) throw new se({
        maxFeePerGas: n,
        maxPriorityFeePerGas: s
    })
}

function Me(e) {
    const {
        chainId: t,
        maxPriorityFeePerGas: s,
        gasPrice: i,
        maxFeePerGas: o,
        to: a
    } = e;
    if (t <= 0) throw new Oe({
        chainId: t
    });
    if (a && !G(a)) throw new g({
        address: a
    });
    if (s || o) throw new n("`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid EIP-2930 Transaction attribute.");
    if (i && i > 2 n ** 256 n - 1 n) throw new Y({
        maxFeePerGas: i
    })
}

function He(e) {
    const {
        chainId: t,
        maxPriorityFeePerGas: s,
        gasPrice: i,
        maxFeePerGas: o,
        to: a,
        accessList: r
    } = e;
    if (a && !G(a)) throw new g({
        address: a
    });
    if (void 0 !== t && t <= 0) throw new Oe({
        chainId: t
    });
    if (s || o) throw new n("`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid Legacy Transaction attribute.");
    if (i && i > 2 n ** 256 n - 1 n) throw new Y({
        maxFeePerGas: i
    });
    if (r) throw new n("`accessList` is not a valid Legacy Transaction attribute.")
}

function Ae(e) {
    if (!e || 0 === e.length) return [];
    const t = [];
    for (let s = 0; s < e.length; s++) {
        const {
            address: n,
            storageKeys: i
        } = e[s];
        for (let e = 0; e < i.length; e++)
            if (i[e].length - 2 != 64) throw new A({
                storageKey: i[e]
            });
        if (!G(n, {
                strict: !1
            })) throw new g({
            address: n
        });
        t.push([n, i])
    }
    return t
}

function Se(e, t) {
    const n = $e(e);
    return "eip1559" === n ? function(e, t) {
        const {
            chainId: n,
            gas: i,
            nonce: o,
            to: a,
            value: r,
            maxFeePerGas: c,
            maxPriorityFeePerGas: u,
            accessList: l,
            data: h
        } = e;
        Ve(e);
        const d = Ae(l),
            b = [s(n), o ? s(o) : "0x", u ? s(u) : "0x", c ? s(c) : "0x", i ? s(i) : "0x", a ? ? "0x", r ? s(r) : "0x", h ? ? "0x", d, ...De(e, t)];
        return B(["0x02", Ee(b)])
    }(e, t) : "eip2930" === n ? function(e, t) {
        const {
            chainId: n,
            gas: i,
            data: o,
            nonce: a,
            to: r,
            value: c,
            accessList: u,
            gasPrice: l
        } = e;
        Me(e);
        const h = Ae(u),
            d = [s(n), a ? s(a) : "0x", l ? s(l) : "0x", i ? s(i) : "0x", r ? ? "0x", c ? s(c) : "0x", o ? ? "0x", h, ...De(e, t)];
        return B(["0x01", Ee(d)])
    }(e, t) : "eip4844" === n ? function(e, t) {
        const {
            chainId: n,
            gas: i,
            nonce: a,
            to: r,
            value: c,
            maxFeePerBlobGas: l,
            maxFeePerGas: d,
            maxPriorityFeePerGas: b,
            accessList: f,
            data: p
        } = e;
        ! function(e) {
            const {
                blobVersionedHashes: t
            } = e;
            if (t) {
                if (0 === t.length) throw new we;
                for (const e of t) {
                    const t = o(e),
                        s = h($(e, 0, 1));
                    if (32 !== t) throw new Ge({
                        hash: e,
                        size: t
                    });
                    if (1 !== s) throw new Ie({
                        hash: e,
                        version: s
                    })
                }
            }
            Ve(e)
        }(e);
        let m = e.blobVersionedHashes,
            g = e.sidecars;
        if (e.blobs && (void 0 === m || void 0 === g)) {
            const t = "string" == typeof e.blobs[0] ? e.blobs : e.blobs.map((e => u(e))),
                s = e.kzg,
                n = be({
                    blobs: t,
                    kzg: s
                });
            if (void 0 === m && (m = ge({
                    commitments: n
                })), void 0 === g) {
                g = Be({
                    blobs: t,
                    commitments: n,
                    proofs: fe({
                        blobs: t,
                        commitments: n,
                        kzg: s
                    })
                })
            }
        }
        const v = Ae(f),
            y = [s(n), a ? s(a) : "0x", b ? s(b) : "0x", d ? s(d) : "0x", i ? s(i) : "0x", r ? ? "0x", c ? s(c) : "0x", p ? ? "0x", v, l ? s(l) : "0x", m ? ? [], ...De(e, t)],
            x = [],
            P = [],
            w = [];
        if (g)
            for (let s = 0; s < g.length; s++) {
                const {
                    blob: e,
                    commitment: t,
                    proof: n
                } = g[s];
                x.push(e), P.push(t), w.push(n)
            }
        return B(["0x03", Ee(g ? [y, x, P, w] : y)])
    }(e, t) : function(e, t) {
        const {
            chainId: n = 0,
            gas: i,
            data: o,
            nonce: a,
            to: r,
            value: c,
            gasPrice: u
        } = e;
        He(e);
        let l = [a ? s(a) : "0x", u ? s(u) : "0x", i ? s(i) : "0x", r ? ? "0x", c ? s(c) : "0x", o ? ? "0x"];
        if (t) {
            const e = (() => {
                if (t.v >= 35 n) {
                    return (t.v - 35 n) / 2 n > 0 ? t.v : 27 n + (35 n === t.v ? 0 n : 1 n)
                }
                if (n > 0) return BigInt(2 * n) + BigInt(35 n + t.v - 27 n);
                const e = 27 n + (27 n === t.v ? 0 n : 1 n);
                if (t.v !== e) throw new M({
                    v: t.v
                });
                return e
            })();
            l = [...l, s(e), t.r, t.s]
        } else n > 0 && (l = [...l, s(n), "0x", "0x"]);
        return Ee(l)
    }(e, t)
}

function De(e, t) {
    const {
        r: n,
        s: i,
        v: o,
        yParity: a
    } = t ? ? e;
    if (void 0 === n) return [];
    if (void 0 === i) return [];
    if (void 0 === o && void 0 === a) return [];
    return ["number" == typeof a ? a ? s(1) : "0x" : 0 n === o ? "0x" : 1 n === o ? s(1) : 27 n === o ? "0x" : s(1), b(n), b(i)]
}
const _e = 65535 n;
export {
    Me as $, je as A, S as B, Te as C, ue as D, K as E, Y as F, D as G, ze as H, g as I, _e as J, Oe as K, M as L, H as M, J as N, A as O, E as P, de as Q, le as R, ce as S, te as T, ne as U, Re as V, _ as W, re as X, oe as Y, Ee as Z, Ve as _, B as a, He as a0, me as a1, Fe as a2, F as a3, ke as a4, pe as a5, Ae as a6, Se as a7, O as a8, De as a9, C as b, I as c, x as d, j as e, z as f, q as g, W as h, G as i, Q as j, m as k, X as l, Z as m, ee as n, se as o, R as p, V as q, he as r, $ as s, be as t, ge as u, fe as v, Be as w, $e as x, ae as y, Ue as z
};