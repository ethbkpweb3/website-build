import {
    _ as e
} from "./VPlaceload-DcvQMSN9.js";
import {
    m as t,
    Y as n,
    dm as i,
    y as s,
    a as o,
    h as r,
    K as a,
    z as c,
    j as l,
    n as h,
    w as u,
    X as d,
    s as p,
    v as f,
    P as m,
    o as b,
    q as v,
    t as g,
    l as y,
    dC as w,
    bh as _,
    H as x
} from "./index-CQfCy4Xm.js";
import "./index-DZwhim7i.js";
import {
    E
} from "./index-DhHA3mFI.js";
import {
    E as S
} from "./index-5N62XIoj.js";
import {
    E as C
} from "./index-DWyf7GKU.js";
import {
    _ as k
} from "./_plugin-vue_export-helper-BCo6x5W8.js";
import {
    c as T
} from "./_commonjs-dynamic-modules-BHR_E30J.js";
const O = {
        key: 0,
        class: "flex text-gray4 head-title items-center"
    },
    N = ["src"],
    I = {
        key: 0,
        class: "m-3"
    },
    A = {
        class: "flex flex-row justify-between align-center mb-3"
    },
    j = {
        class: "ml-4"
    },
    L = {
        class: "mr-4 text-gray4"
    },
    B = {
        key: 0,
        class: "flex flex-row justify-between align-center mt-1 mb-3"
    },
    R = {
        class: "ml-4"
    },
    H = {
        class: "mr-4 text-gray4"
    },
    U = {
        key: 1
    },
    W = {
        class: "flex flex-row justify-between align-center mt-1 mb-3"
    },
    D = {
        class: "ml-4"
    },
    V = {
        class: "mr-4 text-gray4"
    },
    P = {
        key: 2
    },
    F = {
        class: "flex flex-row justify-between align-center mt-1 mb-3"
    },
    M = {
        class: "ml-4"
    },
    $ = {
        class: "mr-4 text-gray4"
    },
    q = {
        class: "flex flex-row justify-between align-center mt-1 mb-3"
    },
    G = {
        class: "ml-4"
    },
    z = {
        class: "mr-4 text-gray4"
    },
    J = {
        class: "flex flex-row justify-between align-center mt-1 mb-5"
    },
    K = {
        class: "ml-4"
    },
    X = {
        class: "mr-4 text-gray4"
    },
    Q = {
        class: "flex flex-row justify-between align-center mt-1"
    },
    Z = {
        class: "mx-4 text-gray4 coin-desc"
    },
    Y = {
        key: 1
    },
    ee = {
        class: "mt-3"
    },
    te = k(t({
        __name: "coindetail",
        props: {
            coinname: {},
            modelValue: {
                type: Boolean
            },
            single: {
                type: Boolean
            }
        },
        emits: ["update:modelValue"],
        setup(t, {
            emit: _
        }) {
            const {
                t: x,
                locale: k
            } = n();
            i();
            const T = t,
                te = s(!1),
                ne = e => {
                    try {
                        navigator.clipboard.writeText(e), ie.success(x("depwi.copied-successfully"))
                    } catch (t) {
                        ie.error(x("depwi.error"))
                    }
                },
                ie = o(),
                se = _,
                oe = r({
                    get: () => T.modelValue,
                    set: e => se("update:modelValue", e)
                }),
                re = a({
                    coinDesc: {}
                }),
                ae = () => {
                    se("update:modelValue", !1)
                };
            return c((() => (async () => {
                try {
                    const e = (await w.get(`https://www.opz.com/assets/coin_info/${T.coinname}.json`)).data,
                        t = {
                            name: e.name,
                            releaseTime: e.releaseTime || 0,
                            releaseAmount: e.releaseAmount || 0,
                            circulatingAmount: e.circulatingAmount || 0,
                            burnedAmount: e.burnedAmount || 0,
                            wp: "",
                            wp2: "",
                            website: e.website.substring(0, 38) + (e.website.length > 38 ? "..." : ""),
                            website2: e.website,
                            desc: e.description
                        };
                    e.links && e.links.forEach((e => {
                        "whitepaper" === e.name && (t.wp = e.url.substring(0, 38) + (e.url.length > 38 ? "..." : ""), t.wp2 = e.url)
                    })), re.coinDesc = t, te.value = !0
                } catch (e) {
                    console.error(`${T.coinname} cannot be loaded!`, e)
                }
            })())), (t, n) => {
                const i = e;
                return b(), l(m, null, [T.single ? (b(), h(d(E), {
                    key: 0,
                    size: "small",
                    color: "var(--primary)",
                    style: {
                        color: "white"
                    },
                    onClick: n[0] || (n[0] = e => se("update:modelValue", !0))
                }, {
                    default: u((() => [v(g(d(x)("dash.deposit")), 1)])),
                    _: 1
                })) : p("", !0), f(d(S), {
                    modelValue: oe.value,
                    "onUpdate:modelValue": n[3] || (n[3] = e => oe.value = e),
                    "lock-scroll": "",
                    class: "dialogw cdetail",
                    "destroy-on-close": "",
                    onClose: ae,
                    onOpen: n[4] || (n[4] = e => {})
                }, {
                    header: u((() => {
                        var e;
                        return [te.value ? (b(), l("div", O, [y("img", {
                            class: "mr-1",
                            width: "21",
                            height: "21",
                            alt: "",
                            src: "/images/icons/coin/" + T.coinname.toLowerCase() + ".svg"
                        }, null, 8, N), v(" " + g((null == (e = re.coinDesc) ? void 0 : e.name) + " (" + T.coinname + ")") + " ", 1), f(d(C), {
                            placement: "top-start",
                            effect: "customized"
                        }, {
                            content: u((() => [v(g(d(x)("pga.last-update-time").replace(":time", new Date(1664806208e3).toLocaleDateString(d(k)))), 1)])),
                            default: u((() => [n[5] || (n[5] = y("div", {
                                class: "b-box-price-right"
                            }, [y("i", {
                                class: "fas fa-info-circle"
                            })], -1))])),
                            _: 1
                        })])) : p("", !0)]
                    })),
                    default: u((() => {
                        var e, t, s, o, r, a, c, h;
                        return [te.value ? (b(), l("div", I, [y("div", A, [y("span", j, g(d(x)("exh.release-date")) + ":", 1), y("span", L, g(new Date(null == (e = re.coinDesc) ? void 0 : e.releaseTime).toLocaleDateString(d(k))), 1)]), 0 != (null == (t = re.coinDesc) ? void 0 : t.releaseAmount) ? (b(), l("div", B, [y("span", R, g(d(x)("exh.supply-limit")) + ":", 1), y("span", H, g(null == (s = re.coinDesc.releaseAmount) ? void 0 : s.toLocaleString()), 1)])) : p("", !0), 0 != (null == (o = re.coinDesc) ? void 0 : o.circulatingAmount) ? (b(), l("div", U, [y("div", W, [y("span", D, g(d(x)("exh.circulating-supply")) + ":", 1), y("span", V, g(null == (r = re.coinDesc.circulatingAmount) ? void 0 : r.toLocaleString()), 1)])])) : p("", !0), 0 != (null == (a = re.coinDesc) ? void 0 : a.burnedAmount) ? (b(), l("div", P, [y("div", F, [y("span", M, g(d(x)("ctm.burned-supply")) + ":", 1), y("span", $, g(null == (h = null == (c = re.coinDesc) ? void 0 : c.burnedAmount) ? void 0 : h.toLocaleString()), 1)])])) : p("", !0), y("div", q, [y("span", G, g(d(x)("exh.website")) + ":", 1), y("span", z, [v(g(re.coinDesc.website) + " ", 1), y("i", {
                            class: "ml-1 copy-link fas fa-copy",
                            title: "copy",
                            onClick: n[1] || (n[1] = e => ne(re.coinDesc.website2))
                        })])]), y("div", J, [y("span", K, g(d(x)("exh.white-paper")) + ":", 1), y("span", X, [v(g(re.coinDesc.wp) + " ", 1), y("i", {
                            class: "ml-1 copy-link fas fa-copy",
                            title: "copy",
                            onClick: n[2] || (n[2] = e => ne(re.coinDesc.wp2))
                        })])]), y("div", Q, [y("span", Z, g(re.coinDesc.desc), 1)])])) : (b(), l("div", Y, [y("div", ee, [f(i, {
                            height: "225px"
                        })])]))]
                    })),
                    _: 1
                }, 8, ["modelValue"])], 64)
            }
        }
    }), [
        ["__scopeId", "data-v-e8f4e29e"]
    ]),
    ne = "\n",
    ie = "\0";
class se {
    constructor(e) {
        const {
            command: t,
            headers: n,
            body: i,
            binaryBody: s,
            escapeHeaderValues: o,
            skipContentLengthHeader: r
        } = e;
        this.command = t, this.headers = Object.assign({}, n || {}), s ? (this._binaryBody = s, this.isBinaryBody = !0) : (this._body = i || "", this.isBinaryBody = !1), this.escapeHeaderValues = o || !1, this.skipContentLengthHeader = r || !1
    }
    get body() {
        return !this._body && this.isBinaryBody && (this._body = (new TextDecoder).decode(this._binaryBody)), this._body || ""
    }
    get binaryBody() {
        return this._binaryBody || this.isBinaryBody || (this._binaryBody = (new TextEncoder).encode(this._body)), this._binaryBody
    }
    static fromRawFrame(e, t) {
        const n = {},
            i = e => e.replace(/^\s+|\s+$/g, "");
        for (const s of e.headers.reverse()) {
            s.indexOf(":");
            const o = i(s[0]);
            let r = i(s[1]);
            t && "CONNECT" !== e.command && "CONNECTED" !== e.command && (r = se.hdrValueUnEscape(r)), n[o] = r
        }
        return new se({
            command: e.command,
            headers: n,
            binaryBody: e.binaryBody,
            escapeHeaderValues: t
        })
    }
    toString() {
        return this.serializeCmdAndHeaders()
    }
    serialize() {
        const e = this.serializeCmdAndHeaders();
        return this.isBinaryBody ? se.toUnit8Array(e, this._binaryBody).buffer : e + this._body + ie
    }
    serializeCmdAndHeaders() {
        const e = [this.command];
        this.skipContentLengthHeader && delete this.headers["content-length"];
        for (const t of Object.keys(this.headers || {})) {
            const n = this.headers[t];
            this.escapeHeaderValues && "CONNECT" !== this.command && "CONNECTED" !== this.command ? e.push(`${t}:${se.hdrValueEscape(`${n}`)}`) : e.push(`${t}:${n}`)
        }
        return (this.isBinaryBody || !this.isBodyEmpty() && !this.skipContentLengthHeader) && e.push(`content-length:${this.bodyLength()}`), e.join(ne) + ne + ne
    }
    isBodyEmpty() {
        return 0 === this.bodyLength()
    }
    bodyLength() {
        const e = this.binaryBody;
        return e ? e.length : 0
    }
    static sizeOfUTF8(e) {
        return e ? (new TextEncoder).encode(e).length : 0
    }
    static toUnit8Array(e, t) {
        const n = (new TextEncoder).encode(e),
            i = new Uint8Array([0]),
            s = new Uint8Array(n.length + t.length + i.length);
        return s.set(n), s.set(t, n.length), s.set(i, n.length + t.length), s
    }
    static marshall(e) {
        return new se(e).serialize()
    }
    static hdrValueEscape(e) {
        return e.replace(/\\/g, "\\\\").replace(/\r/g, "\\r").replace(/\n/g, "\\n").replace(/:/g, "\\c")
    }
    static hdrValueUnEscape(e) {
        return e.replace(/\\r/g, "\r").replace(/\\n/g, "\n").replace(/\\c/g, ":").replace(/\\\\/g, "\\")
    }
}
class oe {
    constructor(e, t) {
        this.onFrame = e, this.onIncomingPing = t, this._encoder = new TextEncoder, this._decoder = new TextDecoder, this._token = [], this._initState()
    }
    parseChunk(e, t = !1) {
        let n;
        if (n = "string" == typeof e ? this._encoder.encode(e) : new Uint8Array(e), t && 0 !== n[n.length - 1]) {
            const e = new Uint8Array(n.length + 1);
            e.set(n, 0), e[n.length] = 0, n = e
        }
        for (let i = 0; i < n.length; i++) {
            const e = n[i];
            this._onByte(e)
        }
    }
    _collectFrame(e) {
        0 !== e && 13 !== e && (10 !== e ? (this._onByte = this._collectCommand, this._reinjectByte(e)) : this.onIncomingPing())
    }
    _collectCommand(e) {
        if (13 !== e) return 10 === e ? (this._results.command = this._consumeTokenAsUTF8(), void(this._onByte = this._collectHeaders)) : void this._consumeByte(e)
    }
    _collectHeaders(e) {
        13 !== e && (10 !== e ? (this._onByte = this._collectHeaderKey, this._reinjectByte(e)) : this._setupCollectBody())
    }
    _reinjectByte(e) {
        this._onByte(e)
    }
    _collectHeaderKey(e) {
        if (58 === e) return this._headerKey = this._consumeTokenAsUTF8(), void(this._onByte = this._collectHeaderValue);
        this._consumeByte(e)
    }
    _collectHeaderValue(e) {
        if (13 !== e) return 10 === e ? (this._results.headers.push([this._headerKey, this._consumeTokenAsUTF8()]), this._headerKey = void 0, void(this._onByte = this._collectHeaders)) : void this._consumeByte(e)
    }
    _setupCollectBody() {
        const e = this._results.headers.filter((e => "content-length" === e[0]))[0];
        e ? (this._bodyBytesRemaining = parseInt(e[1], 10), this._onByte = this._collectBodyFixedSize) : this._onByte = this._collectBodyNullTerminated
    }
    _collectBodyNullTerminated(e) {
        0 !== e ? this._consumeByte(e) : this._retrievedBody()
    }
    _collectBodyFixedSize(e) {
        0 != this._bodyBytesRemaining-- ? this._consumeByte(e) : this._retrievedBody()
    }
    _retrievedBody() {
        this._results.binaryBody = this._consumeTokenAsRaw();
        try {
            this.onFrame(this._results)
        } catch (e) {
            console.log("Ignoring an exception thrown by a frame handler. Original exception: ", e)
        }
        this._initState()
    }
    _consumeByte(e) {
        this._token.push(e)
    }
    _consumeTokenAsUTF8() {
        return this._decoder.decode(this._consumeTokenAsRaw())
    }
    _consumeTokenAsRaw() {
        const e = new Uint8Array(this._token);
        return this._token = [], e
    }
    _initState() {
        this._results = {
            command: void 0,
            headers: [],
            binaryBody: void 0
        }, this._token = [], this._headerKey = void 0, this._onByte = this._collectFrame
    }
}
var re, ae, ce, le;
(ae = re = re || (re = {}))[ae.CONNECTING = 0] = "CONNECTING", ae[ae.OPEN = 1] = "OPEN", ae[ae.CLOSING = 2] = "CLOSING", ae[ae.CLOSED = 3] = "CLOSED", (le = ce = ce || (ce = {}))[le.ACTIVE = 0] = "ACTIVE", le[le.DEACTIVATING = 1] = "DEACTIVATING", le[le.INACTIVE = 2] = "INACTIVE";
class he {
    constructor(e) {
        this.versions = e
    }
    supportedVersions() {
        return this.versions.join(",")
    }
    protocolVersions() {
        return this.versions.map((e => `v${e.replace(".","")}.stomp`))
    }
}
he.V1_0 = "1.0", he.V1_1 = "1.1", he.V1_2 = "1.2", he.default = new he([he.V1_2, he.V1_1, he.V1_0]);
class ue {
    constructor(e, t, n) {
        this._client = e, this._webSocket = t, this._connected = !1, this._serverFrameHandlers = {
            CONNECTED: e => {
                this.debug(`connected to server ${e.headers.server}`), this._connected = !0, this._connectedVersion = e.headers.version, this._connectedVersion === he.V1_2 && (this._escapeHeaderValues = !0), this._setupHeartbeat(e.headers), this.onConnect(e)
            },
            MESSAGE: e => {
                const t = e.headers.subscription,
                    n = this._subscriptions[t] || this.onUnhandledMessage,
                    i = e,
                    s = this,
                    o = this._connectedVersion === he.V1_2 ? i.headers.ack : i.headers["message-id"];
                i.ack = (e = {}) => s.ack(o, t, e), i.nack = (e = {}) => s.nack(o, t, e), n(i)
            },
            RECEIPT: e => {
                const t = this._receiptWatchers[e.headers["receipt-id"]];
                t ? (t(e), delete this._receiptWatchers[e.headers["receipt-id"]]) : this.onUnhandledReceipt(e)
            },
            ERROR: e => {
                this.onStompError(e)
            }
        }, this._counter = 0, this._subscriptions = {}, this._receiptWatchers = {}, this._partialData = "", this._escapeHeaderValues = !1, this._lastServerActivityTS = Date.now(), this.debug = n.debug, this.stompVersions = n.stompVersions, this.connectHeaders = n.connectHeaders, this.disconnectHeaders = n.disconnectHeaders, this.heartbeatIncoming = n.heartbeatIncoming, this.heartbeatOutgoing = n.heartbeatOutgoing, this.splitLargeFrames = n.splitLargeFrames, this.maxWebSocketChunkSize = n.maxWebSocketChunkSize, this.forceBinaryWSFrames = n.forceBinaryWSFrames, this.logRawCommunication = n.logRawCommunication, this.appendMissingNULLonIncoming = n.appendMissingNULLonIncoming, this.discardWebsocketOnCommFailure = n.discardWebsocketOnCommFailure, this.onConnect = n.onConnect, this.onDisconnect = n.onDisconnect, this.onStompError = n.onStompError, this.onWebSocketClose = n.onWebSocketClose, this.onWebSocketError = n.onWebSocketError, this.onUnhandledMessage = n.onUnhandledMessage, this.onUnhandledReceipt = n.onUnhandledReceipt, this.onUnhandledFrame = n.onUnhandledFrame
    }
    get connectedVersion() {
        return this._connectedVersion
    }
    get connected() {
        return this._connected
    }
    start() {
        const e = new oe((e => {
            const t = se.fromRawFrame(e, this._escapeHeaderValues);
            this.logRawCommunication || this.debug(`<<< ${t}`);
            (this._serverFrameHandlers[t.command] || this.onUnhandledFrame)(t)
        }), (() => {
            this.debug("<<< PONG")
        }));
        this._webSocket.onmessage = t => {
            if (this.debug("Received data"), this._lastServerActivityTS = Date.now(), this.logRawCommunication) {
                const e = t.data instanceof ArrayBuffer ? (new TextDecoder).decode(t.data) : t.data;
                this.debug(`<<< ${e}`)
            }
            e.parseChunk(t.data, this.appendMissingNULLonIncoming)
        }, this._webSocket.onclose = e => {
            this.debug(`Connection closed to ${this._webSocket.url}`), this._cleanUp(), this.onWebSocketClose(e)
        }, this._webSocket.onerror = e => {
            this.onWebSocketError(e)
        }, this._webSocket.onopen = () => {
            const e = Object.assign({}, this.connectHeaders);
            this.debug("Web Socket Opened..."), e["accept-version"] = this.stompVersions.supportedVersions(), e["heart-beat"] = [this.heartbeatOutgoing, this.heartbeatIncoming].join(","), this._transmit({
                command: "CONNECT",
                headers: e
            })
        }
    }
    _setupHeartbeat(e) {
        if (e.version !== he.V1_1 && e.version !== he.V1_2) return;
        if (!e["heart-beat"]) return;
        const [t, n] = e["heart-beat"].split(",").map((e => parseInt(e, 10)));
        if (0 !== this.heartbeatOutgoing && 0 !== n) {
            const e = Math.max(this.heartbeatOutgoing, n);
            this.debug(`send PING every ${e}ms`), this._pinger = setInterval((() => {
                this._webSocket.readyState === re.OPEN && (this._webSocket.send(ne), this.debug(">>> PING"))
            }), e)
        }
        if (0 !== this.heartbeatIncoming && 0 !== t) {
            const e = Math.max(this.heartbeatIncoming, t);
            this.debug(`check PONG every ${e}ms`), this._ponger = setInterval((() => {
                const t = Date.now() - this._lastServerActivityTS;
                t > 2 * e && (this.debug(`did not receive server activity for the last ${t}ms`), this._closeOrDiscardWebsocket())
            }), e)
        }
    }
    _closeOrDiscardWebsocket() {
        this.discardWebsocketOnCommFailure ? (this.debug("Discarding websocket, the underlying socket may linger for a while"), this.discardWebsocket()) : (this.debug("Issuing close on the websocket"), this._closeWebsocket())
    }
    forceDisconnect() {
        this._webSocket && (this._webSocket.readyState !== re.CONNECTING && this._webSocket.readyState !== re.OPEN || this._closeOrDiscardWebsocket())
    }
    _closeWebsocket() {
        this._webSocket.onmessage = () => {}, this._webSocket.close()
    }
    discardWebsocket() {
        var e, t;
        "function" != typeof this._webSocket.terminate && (e = this._webSocket, t = e => this.debug(e), e.terminate = function() {
            const n = () => {};
            this.onerror = n, this.onmessage = n, this.onopen = n;
            const i = new Date,
                s = Math.random().toString().substring(2, 8),
                o = this.onclose;
            this.onclose = e => {
                const n = (new Date).getTime() - i.getTime();
                t(`Discarded socket (#${s})  closed after ${n}ms, with code/reason: ${e.code}/${e.reason}`)
            }, this.close(), null == o || o.call(e, {
                code: 4001,
                reason: `Quick discarding socket (#${s}) without waiting for the shutdown sequence.`,
                wasClean: !1
            })
        }), this._webSocket.terminate()
    }
    _transmit(e) {
        const {
            command: t,
            headers: n,
            body: i,
            binaryBody: s,
            skipContentLengthHeader: o
        } = e, r = new se({
            command: t,
            headers: n,
            body: i,
            binaryBody: s,
            escapeHeaderValues: this._escapeHeaderValues,
            skipContentLengthHeader: o
        });
        let a = r.serialize();
        if (this.logRawCommunication ? this.debug(`>>> ${a}`) : this.debug(`>>> ${r}`), this.forceBinaryWSFrames && "string" == typeof a && (a = (new TextEncoder).encode(a)), "string" == typeof a && this.splitLargeFrames) {
            let e = a;
            for (; e.length > 0;) {
                const t = e.substring(0, this.maxWebSocketChunkSize);
                e = e.substring(this.maxWebSocketChunkSize), this._webSocket.send(t), this.debug(`chunk sent = ${t.length}, remaining = ${e.length}`)
            }
        } else this._webSocket.send(a)
    }
    dispose() {
        if (this.connected) try {
            const e = Object.assign({}, this.disconnectHeaders);
            e.receipt || (e.receipt = "close-" + this._counter++), this.watchForReceipt(e.receipt, (e => {
                this._closeWebsocket(), this._cleanUp(), this.onDisconnect(e)
            })), this._transmit({
                command: "DISCONNECT",
                headers: e
            })
        } catch (e) {
            this.debug(`Ignoring error during disconnect ${e}`)
        } else this._webSocket.readyState !== re.CONNECTING && this._webSocket.readyState !== re.OPEN || this._closeWebsocket()
    }
    _cleanUp() {
        this._connected = !1, this._pinger && (clearInterval(this._pinger), this._pinger = void 0), this._ponger && (clearInterval(this._ponger), this._ponger = void 0)
    }
    publish(e) {
        const {
            destination: t,
            headers: n,
            body: i,
            binaryBody: s,
            skipContentLengthHeader: o
        } = e, r = Object.assign({
            destination: t
        }, n);
        this._transmit({
            command: "SEND",
            headers: r,
            body: i,
            binaryBody: s,
            skipContentLengthHeader: o
        })
    }
    watchForReceipt(e, t) {
        this._receiptWatchers[e] = t
    }
    subscribe(e, t, n = {}) {
        (n = Object.assign({}, n)).id || (n.id = "sub-" + this._counter++), n.destination = e, this._subscriptions[n.id] = t, this._transmit({
            command: "SUBSCRIBE",
            headers: n
        });
        const i = this;
        return {
            id: n.id,
            unsubscribe: e => i.unsubscribe(n.id, e)
        }
    }
    unsubscribe(e, t = {}) {
        t = Object.assign({}, t), delete this._subscriptions[e], t.id = e, this._transmit({
            command: "UNSUBSCRIBE",
            headers: t
        })
    }
    begin(e) {
        const t = e || "tx-" + this._counter++;
        this._transmit({
            command: "BEGIN",
            headers: {
                transaction: t
            }
        });
        const n = this;
        return {
            id: t,
            commit() {
                n.commit(t)
            },
            abort() {
                n.abort(t)
            }
        }
    }
    commit(e) {
        this._transmit({
            command: "COMMIT",
            headers: {
                transaction: e
            }
        })
    }
    abort(e) {
        this._transmit({
            command: "ABORT",
            headers: {
                transaction: e
            }
        })
    }
    ack(e, t, n = {}) {
        n = Object.assign({}, n), this._connectedVersion === he.V1_2 ? n.id = e : n["message-id"] = e, n.subscription = t, this._transmit({
            command: "ACK",
            headers: n
        })
    }
    nack(e, t, n = {}) {
        return n = Object.assign({}, n), this._connectedVersion === he.V1_2 ? n.id = e : n["message-id"] = e, n.subscription = t, this._transmit({
            command: "NACK",
            headers: n
        })
    }
}
class de {
    constructor(e = {}) {
        this.stompVersions = he.default, this.connectionTimeout = 0, this.reconnectDelay = 5e3, this.heartbeatIncoming = 1e4, this.heartbeatOutgoing = 1e4, this.splitLargeFrames = !1, this.maxWebSocketChunkSize = 8192, this.forceBinaryWSFrames = !1, this.appendMissingNULLonIncoming = !1, this.discardWebsocketOnCommFailure = !1, this.state = ce.INACTIVE;
        const t = () => {};
        this.debug = t, this.beforeConnect = t, this.onConnect = t, this.onDisconnect = t, this.onUnhandledMessage = t, this.onUnhandledReceipt = t, this.onUnhandledFrame = t, this.onStompError = t, this.onWebSocketClose = t, this.onWebSocketError = t, this.logRawCommunication = !1, this.onChangeState = t, this.connectHeaders = {}, this._disconnectHeaders = {}, this.configure(e)
    }
    get webSocket() {
        var e;
        return null == (e = this._stompHandler) ? void 0 : e._webSocket
    }
    get disconnectHeaders() {
        return this._disconnectHeaders
    }
    set disconnectHeaders(e) {
        this._disconnectHeaders = e, this._stompHandler && (this._stompHandler.disconnectHeaders = this._disconnectHeaders)
    }
    get connected() {
        return !!this._stompHandler && this._stompHandler.connected
    }
    get connectedVersion() {
        return this._stompHandler ? this._stompHandler.connectedVersion : void 0
    }
    get active() {
        return this.state === ce.ACTIVE
    }
    _changeState(e) {
        this.state = e, this.onChangeState(e)
    }
    configure(e) {
        Object.assign(this, e)
    }
    activate() {
        const e = () => {
            this.active ? this.debug("Already ACTIVE, ignoring request to activate") : (this._changeState(ce.ACTIVE), this._connect())
        };
        this.state === ce.DEACTIVATING ? (this.debug("Waiting for deactivation to finish before activating"), this.deactivate().then((() => {
            e()
        }))) : e()
    }
    async _connect() {
        if (await this.beforeConnect(), this._stompHandler) return void this.debug("There is already a stompHandler, skipping the call to connect");
        if (!this.active) return void this.debug("Client has been marked inactive, will not attempt to connect");
        this.connectionTimeout > 0 && (this._connectionWatcher && clearTimeout(this._connectionWatcher), this._connectionWatcher = setTimeout((() => {
            this.connected || (this.debug(`Connection not established in ${this.connectionTimeout}ms, closing socket`), this.forceDisconnect())
        }), this.connectionTimeout)), this.debug("Opening Web Socket...");
        const e = this._createWebSocket();
        this._stompHandler = new ue(this, e, {
            debug: this.debug,
            stompVersions: this.stompVersions,
            connectHeaders: this.connectHeaders,
            disconnectHeaders: this._disconnectHeaders,
            heartbeatIncoming: this.heartbeatIncoming,
            heartbeatOutgoing: this.heartbeatOutgoing,
            splitLargeFrames: this.splitLargeFrames,
            maxWebSocketChunkSize: this.maxWebSocketChunkSize,
            forceBinaryWSFrames: this.forceBinaryWSFrames,
            logRawCommunication: this.logRawCommunication,
            appendMissingNULLonIncoming: this.appendMissingNULLonIncoming,
            discardWebsocketOnCommFailure: this.discardWebsocketOnCommFailure,
            onConnect: e => {
                if (this._connectionWatcher && (clearTimeout(this._connectionWatcher), this._connectionWatcher = void 0), !this.active) return this.debug("STOMP got connected while deactivate was issued, will disconnect now"), void this._disposeStompHandler();
                this.onConnect(e)
            },
            onDisconnect: e => {
                this.onDisconnect(e)
            },
            onStompError: e => {
                this.onStompError(e)
            },
            onWebSocketClose: e => {
                this._stompHandler = void 0, this.state === ce.DEACTIVATING && this._changeState(ce.INACTIVE), this.onWebSocketClose(e), this.active && this._schedule_reconnect()
            },
            onWebSocketError: e => {
                this.onWebSocketError(e)
            },
            onUnhandledMessage: e => {
                this.onUnhandledMessage(e)
            },
            onUnhandledReceipt: e => {
                this.onUnhandledReceipt(e)
            },
            onUnhandledFrame: e => {
                this.onUnhandledFrame(e)
            }
        }), this._stompHandler.start()
    }
    _createWebSocket() {
        let e;
        if (this.webSocketFactory) e = this.webSocketFactory();
        else {
            if (!this.brokerURL) throw new Error("Either brokerURL or webSocketFactory must be provided");
            e = new WebSocket(this.brokerURL, this.stompVersions.protocolVersions())
        }
        return e.binaryType = "arraybuffer", e
    }
    _schedule_reconnect() {
        this.reconnectDelay > 0 && (this.debug(`STOMP: scheduling reconnection in ${this.reconnectDelay}ms`), this._reconnector = setTimeout((() => {
            this._connect()
        }), this.reconnectDelay))
    }
    async deactivate(e = {}) {
        var t;
        const n = e.force || !1,
            i = this.active;
        let s;
        if (this.state === ce.INACTIVE) return this.debug("Already INACTIVE, nothing more to do"), Promise.resolve();
        if (this._changeState(ce.DEACTIVATING), this._reconnector && (clearTimeout(this._reconnector), this._reconnector = void 0), !this._stompHandler || this.webSocket.readyState === re.CLOSED) return this._changeState(ce.INACTIVE), Promise.resolve(); {
            const e = this._stompHandler.onWebSocketClose;
            s = new Promise(((t, n) => {
                this._stompHandler.onWebSocketClose = n => {
                    e(n), t()
                }
            }))
        }
        return n ? null == (t = this._stompHandler) || t.discardWebsocket() : i && this._disposeStompHandler(), s
    }
    forceDisconnect() {
        this._stompHandler && this._stompHandler.forceDisconnect()
    }
    _disposeStompHandler() {
        this._stompHandler && this._stompHandler.dispose()
    }
    publish(e) {
        this._checkConnection(), this._stompHandler.publish(e)
    }
    _checkConnection() {
        if (!this.connected) throw new TypeError("There is no underlying STOMP connection")
    }
    watchForReceipt(e, t) {
        this._checkConnection(), this._stompHandler.watchForReceipt(e, t)
    }
    subscribe(e, t, n = {}) {
        return this._checkConnection(), this._stompHandler.subscribe(e, t, n)
    }
    unsubscribe(e, t = {}) {
        this._checkConnection(), this._stompHandler.unsubscribe(e, t)
    }
    begin(e) {
        return this._checkConnection(), this._stompHandler.begin(e)
    }
    commit(e) {
        this._checkConnection(), this._stompHandler.commit(e)
    }
    abort(e) {
        this._checkConnection(), this._stompHandler.abort(e)
    }
    ack(e, t, n = {}) {
        this._checkConnection(), this._stompHandler.ack(e, t, n)
    }
    nack(e, t, n = {}) {
        this._checkConnection(), this._stompHandler.nack(e, t, n)
    }
}
var pe = {
    exports: {}
};
const fe = x(pe.exports = function e(t, n, i) {
    function s(r, a) {
        if (!n[r]) {
            if (!t[r]) {
                var c = "function" == typeof T && T;
                if (!a && c) return c(r, !0);
                if (o) return o(r, !0);
                var l = new Error("Cannot find module '" + r + "'");
                throw l.code = "MODULE_NOT_FOUND", l
            }
            var h = n[r] = {
                exports: {}
            };
            t[r][0].call(h.exports, (function(e) {
                return s(t[r][1][e] || e)
            }), h, h.exports, e, t, n, i)
        }
        return n[r].exports
    }
    for (var o = "function" == typeof T && T, r = 0; r < i.length; r++) s(i[r]);
    return s
}({
    1: [function(e, t, n) {
        (function(n) {
            (function() {
                var i = e("./transport-list");
                t.exports = e("./main")(i), "_sockjs_onload" in n && setTimeout(n._sockjs_onload, 1)
            }).call(this)
        }).call(this, void 0 !== _ ? _ : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "./main": 14,
        "./transport-list": 16
    }],
    2: [function(e, t, n) {
        var i = e("inherits"),
            s = e("./event");

        function o() {
            s.call(this), this.initEvent("close", !1, !1), this.wasClean = !1, this.code = 0, this.reason = ""
        }
        i(o, s), t.exports = o
    }, {
        "./event": 4,
        inherits: 54
    }],
    3: [function(e, t, n) {
        var i = e("inherits"),
            s = e("./eventtarget");

        function o() {
            s.call(this)
        }
        i(o, s), o.prototype.removeAllListeners = function(e) {
            e ? delete this._listeners[e] : this._listeners = {}
        }, o.prototype.once = function(e, t) {
            var n = this,
                i = !1;
            this.on(e, (function s() {
                n.removeListener(e, s), i || (i = !0, t.apply(this, arguments))
            }))
        }, o.prototype.emit = function() {
            var e = arguments[0],
                t = this._listeners[e];
            if (t) {
                for (var n = arguments.length, i = new Array(n - 1), s = 1; s < n; s++) i[s - 1] = arguments[s];
                for (var o = 0; o < t.length; o++) t[o].apply(this, i)
            }
        }, o.prototype.on = o.prototype.addListener = s.prototype.addEventListener, o.prototype.removeListener = s.prototype.removeEventListener, t.exports.EventEmitter = o
    }, {
        "./eventtarget": 5,
        inherits: 54
    }],
    4: [function(e, t, n) {
        function i(e) {
            this.type = e
        }
        i.prototype.initEvent = function(e, t, n) {
            return this.type = e, this.bubbles = t, this.cancelable = n, this.timeStamp = +new Date, this
        }, i.prototype.stopPropagation = function() {}, i.prototype.preventDefault = function() {}, i.CAPTURING_PHASE = 1, i.AT_TARGET = 2, i.BUBBLING_PHASE = 3, t.exports = i
    }, {}],
    5: [function(e, t, n) {
        function i() {
            this._listeners = {}
        }
        i.prototype.addEventListener = function(e, t) {
            e in this._listeners || (this._listeners[e] = []);
            var n = this._listeners[e]; - 1 === n.indexOf(t) && (n = n.concat([t])), this._listeners[e] = n
        }, i.prototype.removeEventListener = function(e, t) {
            var n = this._listeners[e];
            if (n) {
                var i = n.indexOf(t); - 1 === i || (1 < n.length ? this._listeners[e] = n.slice(0, i).concat(n.slice(i + 1)) : delete this._listeners[e])
            }
        }, i.prototype.dispatchEvent = function() {
            var e = arguments[0],
                t = e.type,
                n = 1 === arguments.length ? [e] : Array.apply(null, arguments);
            if (this["on" + t] && this["on" + t].apply(this, n), t in this._listeners)
                for (var i = this._listeners[t], s = 0; s < i.length; s++) i[s].apply(this, n)
        }, t.exports = i
    }, {}],
    6: [function(e, t, n) {
        var i = e("inherits"),
            s = e("./event");

        function o(e) {
            s.call(this), this.initEvent("message", !1, !1), this.data = e
        }
        i(o, s), t.exports = o
    }, {
        "./event": 4,
        inherits: 54
    }],
    7: [function(e, t, n) {
        var i = e("./utils/iframe");

        function s(e) {
            (this._transport = e).on("message", this._transportMessage.bind(this)), e.on("close", this._transportClose.bind(this))
        }
        s.prototype._transportClose = function(e, t) {
            i.postMessage("c", JSON.stringify([e, t]))
        }, s.prototype._transportMessage = function(e) {
            i.postMessage("t", e)
        }, s.prototype._send = function(e) {
            this._transport.send(e)
        }, s.prototype._close = function() {
            this._transport.close(), this._transport.removeAllListeners()
        }, t.exports = s
    }, {
        "./utils/iframe": 47
    }],
    8: [function(e, t, n) {
        var i = e("./utils/url"),
            s = e("./utils/event"),
            o = e("./facade"),
            r = e("./info-iframe-receiver"),
            a = e("./utils/iframe"),
            c = e("./location"),
            l = function() {};
        t.exports = function(e, t) {
            var n, h = {};
            t.forEach((function(e) {
                e.facadeTransport && (h[e.facadeTransport.transportName] = e.facadeTransport)
            })), h[r.transportName] = r, e.bootstrap_iframe = function() {
                var t;
                a.currentWindowId = c.hash.slice(1), s.attachEvent("message", (function(s) {
                    if (s.source === parent && (void 0 === n && (n = s.origin), s.origin === n)) {
                        var r;
                        try {
                            r = JSON.parse(s.data)
                        } catch (b) {
                            return void l("bad json", s.data)
                        }
                        if (r.windowId === a.currentWindowId) switch (r.type) {
                            case "s":
                                var u;
                                try {
                                    u = JSON.parse(r.data)
                                } catch (b) {
                                    l("bad json", r.data);
                                    break
                                }
                                var d = u[0],
                                    p = u[1],
                                    f = u[2],
                                    m = u[3];
                                if (d !== e.version) throw new Error('Incompatible SockJS! Main site uses: "' + d + '", the iframe: "' + e.version + '".');
                                if (!i.isOriginEqual(f, c.href) || !i.isOriginEqual(m, c.href)) throw new Error("Can't connect to different domain from within an iframe. (" + c.href + ", " + f + ", " + m + ")");
                                t = new o(new h[p](f, m));
                                break;
                            case "m":
                                t._send(r.data);
                                break;
                            case "c":
                                t && t._close(), t = null
                        }
                    }
                })), a.postMessage("s")
            }
        }
    }, {
        "./facade": 7,
        "./info-iframe-receiver": 10,
        "./location": 13,
        "./utils/event": 46,
        "./utils/iframe": 47,
        "./utils/url": 52,
        debug: void 0
    }],
    9: [function(e, t, n) {
        var i = e("events").EventEmitter,
            s = e("inherits"),
            o = e("./utils/object");

        function r(e, t) {
            i.call(this);
            var n = this,
                s = +new Date;
            this.xo = new t("GET", e), this.xo.once("finish", (function(e, t) {
                var i, r;
                if (200 === e) {
                    if (r = +new Date - s, t) try {
                        i = JSON.parse(t)
                    } catch (a) {}
                    o.isObject(i) || (i = {})
                }
                n.emit("finish", i, r), n.removeAllListeners()
            }))
        }
        s(r, i), r.prototype.close = function() {
            this.removeAllListeners(), this.xo.close()
        }, t.exports = r
    }, {
        "./utils/object": 49,
        debug: void 0,
        events: 3,
        inherits: 54
    }],
    10: [function(e, t, n) {
        var i = e("inherits"),
            s = e("events").EventEmitter,
            o = e("./transport/sender/xhr-local"),
            r = e("./info-ajax");

        function a(e) {
            var t = this;
            s.call(this), this.ir = new r(e, o), this.ir.once("finish", (function(e, n) {
                t.ir = null, t.emit("message", JSON.stringify([e, n]))
            }))
        }
        i(a, s), a.transportName = "iframe-info-receiver", a.prototype.close = function() {
            this.ir && (this.ir.close(), this.ir = null), this.removeAllListeners()
        }, t.exports = a
    }, {
        "./info-ajax": 9,
        "./transport/sender/xhr-local": 37,
        events: 3,
        inherits: 54
    }],
    11: [function(e, t, n) {
        (function(n) {
            (function() {
                var i = e("events").EventEmitter,
                    s = e("inherits"),
                    o = e("./utils/event"),
                    r = e("./transport/iframe"),
                    a = e("./info-iframe-receiver");

                function c(e, t) {
                    var s = this;

                    function c() {
                        var n = s.ifr = new r(a.transportName, t, e);
                        n.once("message", (function(e) {
                            if (e) {
                                var t;
                                try {
                                    t = JSON.parse(e)
                                } catch (o) {
                                    return s.emit("finish"), void s.close()
                                }
                                var n = t[0],
                                    i = t[1];
                                s.emit("finish", n, i)
                            }
                            s.close()
                        })), n.once("close", (function() {
                            s.emit("finish"), s.close()
                        }))
                    }
                    i.call(this), n.document.body ? c() : o.attachEvent("load", c)
                }
                s(c, i), c.enabled = function() {
                    return r.enabled()
                }, c.prototype.close = function() {
                    this.ifr && this.ifr.close(), this.removeAllListeners(), this.ifr = null
                }, t.exports = c
            }).call(this)
        }).call(this, void 0 !== _ ? _ : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "./info-iframe-receiver": 10,
        "./transport/iframe": 22,
        "./utils/event": 46,
        debug: void 0,
        events: 3,
        inherits: 54
    }],
    12: [function(e, t, n) {
        var i = e("events").EventEmitter,
            s = e("inherits"),
            o = e("./utils/url"),
            r = e("./transport/sender/xdr"),
            a = e("./transport/sender/xhr-cors"),
            c = e("./transport/sender/xhr-local"),
            l = e("./transport/sender/xhr-fake"),
            h = e("./info-iframe"),
            u = e("./info-ajax");

        function d(e, t) {
            var n = this;
            i.call(this), setTimeout((function() {
                n.doXhr(e, t)
            }), 0)
        }
        s(d, i), d._getReceiver = function(e, t, n) {
            return n.sameOrigin ? new u(t, c) : a.enabled ? new u(t, a) : r.enabled && n.sameScheme ? new u(t, r) : h.enabled() ? new h(e, t) : new u(t, l)
        }, d.prototype.doXhr = function(e, t) {
            var n = this,
                i = o.addPath(e, "/info");
            this.xo = d._getReceiver(e, i, t), this.timeoutRef = setTimeout((function() {
                n._cleanup(!1), n.emit("finish")
            }), d.timeout), this.xo.once("finish", (function(e, t) {
                n._cleanup(!0), n.emit("finish", e, t)
            }))
        }, d.prototype._cleanup = function(e) {
            clearTimeout(this.timeoutRef), this.timeoutRef = null, !e && this.xo && this.xo.close(), this.xo = null
        }, d.prototype.close = function() {
            this.removeAllListeners(), this._cleanup(!1)
        }, d.timeout = 8e3, t.exports = d
    }, {
        "./info-ajax": 9,
        "./info-iframe": 11,
        "./transport/sender/xdr": 34,
        "./transport/sender/xhr-cors": 35,
        "./transport/sender/xhr-fake": 36,
        "./transport/sender/xhr-local": 37,
        "./utils/url": 52,
        debug: void 0,
        events: 3,
        inherits: 54
    }],
    13: [function(e, t, n) {
        (function(e) {
            (function() {
                t.exports = e.location || {
                    origin: "http://localhost:80",
                    protocol: "http:",
                    host: "localhost",
                    port: 80,
                    href: "http://localhost/",
                    hash: ""
                }
            }).call(this)
        }).call(this, void 0 !== _ ? _ : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}],
    14: [function(e, t, n) {
        (function(n) {
            (function() {
                e("./shims");
                var i, s = e("url-parse"),
                    o = e("inherits"),
                    r = e("./utils/random"),
                    a = e("./utils/escape"),
                    c = e("./utils/url"),
                    l = e("./utils/event"),
                    h = e("./utils/transport"),
                    u = e("./utils/object"),
                    d = e("./utils/browser"),
                    p = e("./utils/log"),
                    f = e("./event/event"),
                    m = e("./event/eventtarget"),
                    b = e("./location"),
                    v = e("./event/close"),
                    g = e("./event/trans-message"),
                    y = e("./info-receiver"),
                    w = function() {};

                function _(e, t, n) {
                    if (!(this instanceof _)) return new _(e, t, n);
                    if (arguments.length < 1) throw new TypeError("Failed to construct 'SockJS: 1 argument required, but only 0 present");
                    m.call(this), this.readyState = _.CONNECTING, this.extensions = "", this.protocol = "", (n = n || {}).protocols_whitelist && p.warn("'protocols_whitelist' is DEPRECATED. Use 'transports' instead."), this._transportsWhitelist = n.transports, this._transportOptions = n.transportOptions || {}, this._timeout = n.timeout || 0;
                    var i = n.sessionId || 8;
                    if ("function" == typeof i) this._generateSessionId = i;
                    else {
                        if ("number" != typeof i) throw new TypeError("If sessionId is used in the options, it needs to be a number or a function.");
                        this._generateSessionId = function() {
                            return r.string(i)
                        }
                    }
                    this._server = n.server || r.numberString(1e3);
                    var o = new s(e);
                    if (!o.host || !o.protocol) throw new SyntaxError("The URL '" + e + "' is invalid");
                    if (o.hash) throw new SyntaxError("The URL must not contain a fragment");
                    if ("http:" !== o.protocol && "https:" !== o.protocol) throw new SyntaxError("The URL's scheme must be either 'http:' or 'https:'. '" + o.protocol + "' is not allowed.");
                    var a = "https:" === o.protocol;
                    if ("https:" === b.protocol && !a && !c.isLoopbackAddr(o.hostname)) throw new Error("SecurityError: An insecure SockJS connection may not be initiated from a page loaded over HTTPS");
                    t ? Array.isArray(t) || (t = [t]) : t = [];
                    var l = t.sort();
                    l.forEach((function(e, t) {
                        if (!e) throw new SyntaxError("The protocols entry '" + e + "' is invalid.");
                        if (t < l.length - 1 && e === l[t + 1]) throw new SyntaxError("The protocols entry '" + e + "' is duplicated.")
                    }));
                    var h = c.getOrigin(b.href);
                    this._origin = h ? h.toLowerCase() : null, o.set("pathname", o.pathname.replace(/\/+$/, "")), this.url = o.href, w("using url", this.url), this._urlInfo = {
                        nullOrigin: !d.hasDomain(),
                        sameOrigin: c.isOriginEqual(this.url, b.href),
                        sameScheme: c.isSchemeEqual(this.url, b.href)
                    }, this._ir = new y(this.url, this._urlInfo), this._ir.once("finish", this._receiveInfo.bind(this))
                }

                function x(e) {
                    return 1e3 === e || 3e3 <= e && e <= 4999
                }
                o(_, m), _.prototype.close = function(e, t) {
                    if (e && !x(e)) throw new Error("InvalidAccessError: Invalid code");
                    if (t && 123 < t.length) throw new SyntaxError("reason argument has an invalid length");
                    this.readyState !== _.CLOSING && this.readyState !== _.CLOSED && this._close(e || 1e3, t || "Normal closure", !0)
                }, _.prototype.send = function(e) {
                    if ("string" != typeof e && (e = "" + e), this.readyState === _.CONNECTING) throw new Error("InvalidStateError: The connection has not been established yet");
                    this.readyState === _.OPEN && this._transport.send(a.quote(e))
                }, _.version = e("./version"), _.CONNECTING = 0, _.OPEN = 1, _.CLOSING = 2, _.CLOSED = 3, _.prototype._receiveInfo = function(e, t) {
                    if (this._ir = null, e) {
                        this._rto = this.countRTO(t), this._transUrl = e.base_url ? e.base_url : this.url, e = u.extend(e, this._urlInfo);
                        var n = i.filterToEnabled(this._transportsWhitelist, e);
                        this._transports = n.main, w(this._transports.length + " enabled transports"), this._connect()
                    } else this._close(1002, "Cannot connect to server")
                }, _.prototype._connect = function() {
                    for (var e = this._transports.shift(); e; e = this._transports.shift()) {
                        if (w("attempt", e.transportName), e.needBody && (!n.document.body || void 0 !== n.document.readyState && "complete" !== n.document.readyState && "interactive" !== n.document.readyState)) return this._transports.unshift(e), void l.attachEvent("load", this._connect.bind(this));
                        var t = Math.max(this._timeout, this._rto * e.roundTrips || 5e3);
                        this._transportTimeoutId = setTimeout(this._transportTimeout.bind(this), t);
                        var i = c.addPath(this._transUrl, "/" + this._server + "/" + this._generateSessionId()),
                            s = this._transportOptions[e.transportName],
                            o = new e(i, this._transUrl, s);
                        return o.on("message", this._transportMessage.bind(this)), o.once("close", this._transportClose.bind(this)), o.transportName = e.transportName, void(this._transport = o)
                    }
                    this._close(2e3, "All transports failed", !1)
                }, _.prototype._transportTimeout = function() {
                    this.readyState === _.CONNECTING && (this._transport && this._transport.close(), this._transportClose(2007, "Transport timed out"))
                }, _.prototype._transportMessage = function(e) {
                    var t, n = this,
                        i = e.slice(0, 1),
                        s = e.slice(1);
                    switch (i) {
                        case "o":
                            return void this._open();
                        case "h":
                            return this.dispatchEvent(new f("heartbeat")), void w("heartbeat", this.transport)
                    }
                    if (s) try {
                        t = JSON.parse(s)
                    } catch (o) {}
                    if (void 0 !== t) switch (i) {
                        case "a":
                            Array.isArray(t) && t.forEach((function(e) {
                                w("message", n.transport), n.dispatchEvent(new g(e))
                            }));
                            break;
                        case "m":
                            w("message", this.transport), this.dispatchEvent(new g(t));
                            break;
                        case "c":
                            Array.isArray(t) && 2 === t.length && this._close(t[0], t[1], !0)
                    }
                }, _.prototype._transportClose = function(e, t) {
                    w("_transportClose", this.transport), this._transport && (this._transport.removeAllListeners(), this._transport = null, this.transport = null), x(e) || 2e3 === e || this.readyState !== _.CONNECTING ? this._close(e, t) : this._connect()
                }, _.prototype._open = function() {
                    w("_open", this._transport && this._transport.transportName, this.readyState), this.readyState === _.CONNECTING ? (this._transportTimeoutId && (clearTimeout(this._transportTimeoutId), this._transportTimeoutId = null), this.readyState = _.OPEN, this.transport = this._transport.transportName, this.dispatchEvent(new f("open")), w("connected", this.transport)) : this._close(1006, "Server lost session")
                }, _.prototype._close = function(e, t, n) {
                    w("_close", this.transport, e, t, n, this.readyState);
                    var i = !1;
                    if (this._ir && (i = !0, this._ir.close(), this._ir = null), this._transport && (this._transport.close(), this._transport = null, this.transport = null), this.readyState === _.CLOSED) throw new Error("InvalidStateError: SockJS has already been closed");
                    this.readyState = _.CLOSING, setTimeout(function() {
                        this.readyState = _.CLOSED, i && this.dispatchEvent(new f("error"));
                        var s = new v("close");
                        s.wasClean = n || !1, s.code = e || 1e3, s.reason = t, this.dispatchEvent(s), this.onmessage = this.onclose = this.onerror = null
                    }.bind(this), 0)
                }, _.prototype.countRTO = function(e) {
                    return 100 < e ? 4 * e : 300 + e
                }, t.exports = function(t) {
                    return i = h(t), e("./iframe-bootstrap")(_, t), _
                }
            }).call(this)
        }).call(this, void 0 !== _ ? _ : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "./event/close": 2,
        "./event/event": 4,
        "./event/eventtarget": 5,
        "./event/trans-message": 6,
        "./iframe-bootstrap": 8,
        "./info-receiver": 12,
        "./location": 13,
        "./shims": 15,
        "./utils/browser": 44,
        "./utils/escape": 45,
        "./utils/event": 46,
        "./utils/log": 48,
        "./utils/object": 49,
        "./utils/random": 50,
        "./utils/transport": 51,
        "./utils/url": 52,
        "./version": 53,
        debug: void 0,
        inherits: 54,
        "url-parse": 57
    }],
    15: [function(e, t, n) {
        function i(e) {
            return "[object Function]" === a.toString.call(e)
        }

        function s(e) {
            return "[object String]" === u.call(e)
        }
        var o, r = Array.prototype,
            a = Object.prototype,
            c = Function.prototype,
            l = String.prototype,
            h = r.slice,
            u = a.toString,
            d = Object.defineProperty && function() {
                try {
                    return Object.defineProperty({}, "x", {}), !0
                } catch (e) {
                    return !1
                }
            }();

        function p(e, t, n) {
            for (var i in t) a.hasOwnProperty.call(t, i) && o(e, i, t[i], n)
        }

        function f(e) {
            if (null == e) throw new TypeError("can't convert " + e + " to object");
            return Object(e)
        }

        function m() {}
        o = d ? function(e, t, n, i) {
            !i && t in e || Object.defineProperty(e, t, {
                configurable: !0,
                enumerable: !1,
                writable: !0,
                value: n
            })
        } : function(e, t, n, i) {
            !i && t in e || (e[t] = n)
        }, p(c, {
            bind: function(e) {
                var t = this;
                if (!i(t)) throw new TypeError("Function.prototype.bind called on incompatible " + t);
                for (var n = h.call(arguments, 1), s = Math.max(0, t.length - n.length), o = [], r = 0; r < s; r++) o.push("$" + r);
                var a = Function("binder", "return function (" + o.join(",") + "){ return binder.apply(this, arguments); }")((function() {
                    if (this instanceof a) {
                        var i = t.apply(this, n.concat(h.call(arguments)));
                        return Object(i) === i ? i : this
                    }
                    return t.apply(e, n.concat(h.call(arguments)))
                }));
                return t.prototype && (m.prototype = t.prototype, a.prototype = new m, m.prototype = null), a
            }
        }), p(Array, {
            isArray: function(e) {
                return "[object Array]" === u.call(e)
            }
        });
        var b, v, g, y = Object("a"),
            w = "a" !== y[0] || !(0 in y);
        p(r, {
            forEach: function(e, t) {
                var n = f(this),
                    o = w && s(this) ? this.split("") : n,
                    r = t,
                    a = -1,
                    c = o.length >>> 0;
                if (!i(e)) throw new TypeError;
                for (; ++a < c;) a in o && e.call(r, o[a], a, n)
            }
        }, (b = r.forEach, g = v = !0, b && (b.call("foo", (function(e, t, n) {
            "object" != typeof n && (v = !1)
        })), b.call([1], (function() {
            g = "string" == typeof this
        }), "x")), !(b && v && g)));
        var _ = Array.prototype.indexOf && -1 !== [0, 1].indexOf(1, 2);
        p(r, {
            indexOf: function(e, t) {
                var n = w && s(this) ? this.split("") : f(this),
                    i = n.length >>> 0;
                if (!i) return -1;
                var o, r = 0;
                for (1 < arguments.length && (o = void 0, (o = +t) != o ? o = 0 : 0 !== o && o !== 1 / 0 && o !== -1 / 0 && (o = (0 < o || -1) * Math.floor(Math.abs(o))), r = o), r = 0 <= r ? r : Math.max(0, i + r); r < i; r++)
                    if (r in n && n[r] === e) return r;
                return -1
            }
        }, _);
        var x, E = l.split;
        2 !== "ab".split(/(?:ab)*/).length || 4 !== ".".split(/(.?)(.?)/).length || "t" === "tesst".split(/(s)*/)[1] || 4 !== "test".split(/(?:)/, -1).length || "".split(/.?/).length || 1 < ".".split(/()()/).length ? (x = void 0 === /()??/.exec("")[1], l.split = function(e, t) {
            var n = this;
            if (void 0 === e && 0 === t) return [];
            if ("[object RegExp]" !== u.call(e)) return E.call(this, e, t);
            var i, s, o, a, c = [],
                l = (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.extended ? "x" : "") + (e.sticky ? "y" : ""),
                h = 0;
            for (e = new RegExp(e.source, l + "g"), n += "", x || (i = new RegExp("^" + e.source + "$(?!\\s)", l)), t = void 0 === t ? -1 >>> 0 : t >>> 0;
                (s = e.exec(n)) && !(h < (o = s.index + s[0].length) && (c.push(n.slice(h, s.index)), !x && 1 < s.length && s[0].replace(i, (function() {
                    for (var e = 1; e < arguments.length - 2; e++) void 0 === arguments[e] && (s[e] = void 0)
                })), 1 < s.length && s.index < n.length && r.push.apply(c, s.slice(1)), a = s[0].length, h = o, c.length >= t));) e.lastIndex === s.index && e.lastIndex++;
            return h === n.length ? !a && e.test("") || c.push("") : c.push(n.slice(h)), c.length > t ? c.slice(0, t) : c
        }) : "0".split(void 0, 0).length && (l.split = function(e, t) {
            return void 0 === e && 0 === t ? [] : E.call(this, e, t)
        });
        var S = l.substr;
        p(l, {
            substr: function(e, t) {
                return S.call(this, e < 0 && (e = this.length + e) < 0 ? 0 : e, t)
            }
        }, "".substr && "b" !== "0b".substr(-1))
    }, {}],
    16: [function(e, t, n) {
        t.exports = [e("./transport/websocket"), e("./transport/xhr-streaming"), e("./transport/xdr-streaming"), e("./transport/eventsource"), e("./transport/lib/iframe-wrap")(e("./transport/eventsource")), e("./transport/htmlfile"), e("./transport/lib/iframe-wrap")(e("./transport/htmlfile")), e("./transport/xhr-polling"), e("./transport/xdr-polling"), e("./transport/lib/iframe-wrap")(e("./transport/xhr-polling")), e("./transport/jsonp-polling")]
    }, {
        "./transport/eventsource": 20,
        "./transport/htmlfile": 21,
        "./transport/jsonp-polling": 23,
        "./transport/lib/iframe-wrap": 26,
        "./transport/websocket": 38,
        "./transport/xdr-polling": 39,
        "./transport/xdr-streaming": 40,
        "./transport/xhr-polling": 41,
        "./transport/xhr-streaming": 42
    }],
    17: [function(e, t, n) {
        (function(n) {
            (function() {
                var i = e("events").EventEmitter,
                    s = e("inherits"),
                    o = e("../../utils/event"),
                    r = e("../../utils/url"),
                    a = n.XMLHttpRequest,
                    c = function() {};

                function l(e, t, n, s) {
                    var o = this;
                    i.call(this), setTimeout((function() {
                        o._start(e, t, n, s)
                    }), 0)
                }
                s(l, i), l.prototype._start = function(e, t, n, i) {
                    var s = this;
                    try {
                        this.xhr = new a
                    } catch (u) {}
                    if (!this.xhr) return this.emit("finish", 0, "no xhr support"), void this._cleanup();
                    t = r.addQuery(t, "t=" + +new Date), this.unloadRef = o.unloadAdd((function() {
                        s._cleanup(!0)
                    }));
                    try {
                        this.xhr.open(e, t, !0), this.timeout && "timeout" in this.xhr && (this.xhr.timeout = this.timeout, this.xhr.ontimeout = function() {
                            c("xhr timeout"), s.emit("finish", 0, ""), s._cleanup(!1)
                        })
                    } catch (u) {
                        return this.emit("finish", 0, ""), void this._cleanup(!1)
                    }
                    if (i && i.noCredentials || !l.supportsCORS || (this.xhr.withCredentials = !0), i && i.headers)
                        for (var h in i.headers) this.xhr.setRequestHeader(h, i.headers[h]);
                    this.xhr.onreadystatechange = function() {
                        if (s.xhr) {
                            var e, t, n = s.xhr;
                            switch (c("readyState", n.readyState), n.readyState) {
                                case 3:
                                    try {
                                        t = n.status, e = n.responseText
                                    } catch (i) {}
                                    1223 === t && (t = 204), 200 === t && e && 0 < e.length && s.emit("chunk", t, e);
                                    break;
                                case 4:
                                    1223 === (t = n.status) && (t = 204), 12005 !== t && 12029 !== t || (t = 0), c("finish", t, n.responseText), s.emit("finish", t, n.responseText), s._cleanup(!1)
                            }
                        }
                    };
                    try {
                        s.xhr.send(n)
                    } catch (u) {
                        s.emit("finish", 0, ""), s._cleanup(!1)
                    }
                }, l.prototype._cleanup = function(e) {
                    if (this.xhr) {
                        if (this.removeAllListeners(), o.unloadDel(this.unloadRef), this.xhr.onreadystatechange = function() {}, this.xhr.ontimeout && (this.xhr.ontimeout = null), e) try {
                            this.xhr.abort()
                        } catch (t) {}
                        this.unloadRef = this.xhr = null
                    }
                }, l.prototype.close = function() {
                    this._cleanup(!0)
                }, l.enabled = !!a;
                var h = ["Active"].concat("Object").join("X");
                !l.enabled && h in n && (l.enabled = !!new(a = function() {
                    try {
                        return new n[h]("Microsoft.XMLHTTP")
                    } catch (e) {
                        return null
                    }
                }));
                var u = !1;
                try {
                    u = "withCredentials" in new a
                } catch (d) {}
                l.supportsCORS = u, t.exports = l
            }).call(this)
        }).call(this, void 0 !== _ ? _ : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "../../utils/event": 46,
        "../../utils/url": 52,
        debug: void 0,
        events: 3,
        inherits: 54
    }],
    18: [function(e, t, n) {
        (function(e) {
            (function() {
                t.exports = e.EventSource
            }).call(this)
        }).call(this, void 0 !== _ ? _ : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}],
    19: [function(e, t, n) {
        (function(e) {
            (function() {
                var n = e.WebSocket || e.MozWebSocket;
                t.exports = n ? function(e) {
                    return new n(e)
                } : void 0
            }).call(this)
        }).call(this, void 0 !== _ ? _ : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}],
    20: [function(e, t, n) {
        var i = e("inherits"),
            s = e("./lib/ajax-based"),
            o = e("./receiver/eventsource"),
            r = e("./sender/xhr-cors"),
            a = e("eventsource");

        function c(e) {
            if (!c.enabled()) throw new Error("Transport created when disabled");
            s.call(this, e, "/eventsource", o, r)
        }
        i(c, s), c.enabled = function() {
            return !!a
        }, c.transportName = "eventsource", c.roundTrips = 2, t.exports = c
    }, {
        "./lib/ajax-based": 24,
        "./receiver/eventsource": 29,
        "./sender/xhr-cors": 35,
        eventsource: 18,
        inherits: 54
    }],
    21: [function(e, t, n) {
        var i = e("inherits"),
            s = e("./receiver/htmlfile"),
            o = e("./sender/xhr-local"),
            r = e("./lib/ajax-based");

        function a(e) {
            if (!s.enabled) throw new Error("Transport created when disabled");
            r.call(this, e, "/htmlfile", s, o)
        }
        i(a, r), a.enabled = function(e) {
            return s.enabled && e.sameOrigin
        }, a.transportName = "htmlfile", a.roundTrips = 2, t.exports = a
    }, {
        "./lib/ajax-based": 24,
        "./receiver/htmlfile": 30,
        "./sender/xhr-local": 37,
        inherits: 54
    }],
    22: [function(e, t, n) {
        var i = e("inherits"),
            s = e("events").EventEmitter,
            o = e("../version"),
            r = e("../utils/url"),
            a = e("../utils/iframe"),
            c = e("../utils/event"),
            l = e("../utils/random"),
            h = function() {};

        function u(e, t, n) {
            if (!u.enabled()) throw new Error("Transport created when disabled");
            s.call(this);
            var i = this;
            this.origin = r.getOrigin(n), this.baseUrl = n, this.transUrl = t, this.transport = e, this.windowId = l.string(8);
            var o = r.addPath(n, "/iframe.html") + "#" + this.windowId;
            this.iframeObj = a.createIframe(o, (function(e) {
                i.emit("close", 1006, "Unable to load an iframe (" + e + ")"), i.close()
            })), this.onmessageCallback = this._message.bind(this), c.attachEvent("message", this.onmessageCallback)
        }
        i(u, s), u.prototype.close = function() {
            if (this.removeAllListeners(), this.iframeObj) {
                c.detachEvent("message", this.onmessageCallback);
                try {
                    this.postMessage("c")
                } catch (e) {}
                this.iframeObj.cleanup(), this.iframeObj = null, this.onmessageCallback = this.iframeObj = null
            }
        }, u.prototype._message = function(e) {
            if (h("message", e.data), r.isOriginEqual(e.origin, this.origin)) {
                var t;
                try {
                    t = JSON.parse(e.data)
                } catch (i) {
                    return void h("bad json", e.data)
                }
                if (t.windowId === this.windowId) switch (t.type) {
                    case "s":
                        this.iframeObj.loaded(), this.postMessage("s", JSON.stringify([o, this.transport, this.transUrl, this.baseUrl]));
                        break;
                    case "t":
                        this.emit("message", t.data);
                        break;
                    case "c":
                        var n;
                        try {
                            n = JSON.parse(t.data)
                        } catch (i) {
                            return void h("bad json", t.data)
                        }
                        this.emit("close", n[0], n[1]), this.close()
                } else h("mismatched window id", t.windowId, this.windowId)
            } else h("not same origin", e.origin, this.origin)
        }, u.prototype.postMessage = function(e, t) {
            this.iframeObj.post(JSON.stringify({
                windowId: this.windowId,
                type: e,
                data: t || ""
            }), this.origin)
        }, u.prototype.send = function(e) {
            this.postMessage("m", e)
        }, u.enabled = function() {
            return a.iframeEnabled
        }, u.transportName = "iframe", u.roundTrips = 2, t.exports = u
    }, {
        "../utils/event": 46,
        "../utils/iframe": 47,
        "../utils/random": 50,
        "../utils/url": 52,
        "../version": 53,
        debug: void 0,
        events: 3,
        inherits: 54
    }],
    23: [function(e, t, n) {
        (function(n) {
            (function() {
                var i = e("inherits"),
                    s = e("./lib/sender-receiver"),
                    o = e("./receiver/jsonp"),
                    r = e("./sender/jsonp");

                function a(e) {
                    if (!a.enabled()) throw new Error("Transport created when disabled");
                    s.call(this, e, "/jsonp", r, o)
                }
                i(a, s), a.enabled = function() {
                    return !!n.document
                }, a.transportName = "jsonp-polling", a.roundTrips = 1, a.needBody = !0, t.exports = a
            }).call(this)
        }).call(this, void 0 !== _ ? _ : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "./lib/sender-receiver": 28,
        "./receiver/jsonp": 31,
        "./sender/jsonp": 33,
        inherits: 54
    }],
    24: [function(e, t, n) {
        var i = e("inherits"),
            s = e("../../utils/url"),
            o = e("./sender-receiver");

        function r(e, t, n, i) {
            o.call(this, e, t, function(e) {
                return function(t, n, i) {
                    var o = {};
                    "string" == typeof n && (o.headers = {
                        "Content-type": "text/plain"
                    });
                    var r = s.addPath(t, "/xhr_send"),
                        a = new e("POST", r, n, o);
                    return a.once("finish", (function(e) {
                            if (a = null, 200 !== e && 204 !== e) return i(new Error("http status " + e));
                            i()
                        })),
                        function() {
                            a.close(), a = null;
                            var e = new Error("Aborted");
                            e.code = 1e3, i(e)
                        }
                }
            }(i), n, i)
        }
        i(r, o), t.exports = r
    }, {
        "../../utils/url": 52,
        "./sender-receiver": 28,
        debug: void 0,
        inherits: 54
    }],
    25: [function(e, t, n) {
        var i = e("inherits"),
            s = e("events").EventEmitter,
            o = function() {};

        function r(e, t) {
            s.call(this), this.sendBuffer = [], this.sender = t, this.url = e
        }
        i(r, s), r.prototype.send = function(e) {
            this.sendBuffer.push(e), this.sendStop || this.sendSchedule()
        }, r.prototype.sendScheduleWait = function() {
            var e, t = this;
            this.sendStop = function() {
                t.sendStop = null, clearTimeout(e)
            }, e = setTimeout((function() {
                t.sendStop = null, t.sendSchedule()
            }), 25)
        }, r.prototype.sendSchedule = function() {
            o("sendSchedule", this.sendBuffer.length);
            var e = this;
            if (0 < this.sendBuffer.length) {
                var t = "[" + this.sendBuffer.join(",") + "]";
                this.sendStop = this.sender(this.url, t, (function(t) {
                    e.sendStop = null, t ? (e.emit("close", t.code || 1006, "Sending error: " + t), e.close()) : e.sendScheduleWait()
                })), this.sendBuffer = []
            }
        }, r.prototype._cleanup = function() {
            this.removeAllListeners()
        }, r.prototype.close = function() {
            this._cleanup(), this.sendStop && (this.sendStop(), this.sendStop = null)
        }, t.exports = r
    }, {
        debug: void 0,
        events: 3,
        inherits: 54
    }],
    26: [function(e, t, n) {
        (function(n) {
            (function() {
                var i = e("inherits"),
                    s = e("../iframe"),
                    o = e("../../utils/object");
                t.exports = function(e) {
                    function t(t, n) {
                        s.call(this, e.transportName, t, n)
                    }
                    return i(t, s), t.enabled = function(t, i) {
                        if (!n.document) return !1;
                        var r = o.extend({}, i);
                        return r.sameOrigin = !0, e.enabled(r) && s.enabled()
                    }, t.transportName = "iframe-" + e.transportName, t.needBody = !0, t.roundTrips = s.roundTrips + e.roundTrips - 1, t.facadeTransport = e, t
                }
            }).call(this)
        }).call(this, void 0 !== _ ? _ : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "../../utils/object": 49,
        "../iframe": 22,
        inherits: 54
    }],
    27: [function(e, t, n) {
        var i = e("inherits"),
            s = e("events").EventEmitter,
            o = function() {};

        function r(e, t, n) {
            s.call(this), this.Receiver = e, this.receiveUrl = t, this.AjaxObject = n, this._scheduleReceiver()
        }
        i(r, s), r.prototype._scheduleReceiver = function() {
            var e = this,
                t = this.poll = new this.Receiver(this.receiveUrl, this.AjaxObject);
            t.on("message", (function(t) {
                e.emit("message", t)
            })), t.once("close", (function(n, i) {
                o("close", n, i, e.pollIsClosing), e.poll = t = null, e.pollIsClosing || ("network" === i ? e._scheduleReceiver() : (e.emit("close", n || 1006, i), e.removeAllListeners()))
            }))
        }, r.prototype.abort = function() {
            this.removeAllListeners(), this.pollIsClosing = !0, this.poll && this.poll.abort()
        }, t.exports = r
    }, {
        debug: void 0,
        events: 3,
        inherits: 54
    }],
    28: [function(e, t, n) {
        var i = e("inherits"),
            s = e("../../utils/url"),
            o = e("./buffered-sender"),
            r = e("./polling");

        function a(e, t, n, i, a) {
            var c = s.addPath(e, t),
                l = this;
            o.call(this, e, n), this.poll = new r(i, c, a), this.poll.on("message", (function(e) {
                l.emit("message", e)
            })), this.poll.once("close", (function(e, t) {
                l.poll = null, l.emit("close", e, t), l.close()
            }))
        }
        i(a, o), a.prototype.close = function() {
            o.prototype.close.call(this), this.removeAllListeners(), this.poll && (this.poll.abort(), this.poll = null)
        }, t.exports = a
    }, {
        "../../utils/url": 52,
        "./buffered-sender": 25,
        "./polling": 27,
        debug: void 0,
        inherits: 54
    }],
    29: [function(e, t, n) {
        var i = e("inherits"),
            s = e("events").EventEmitter,
            o = e("eventsource"),
            r = function() {};

        function a(e) {
            s.call(this);
            var t = this,
                n = this.es = new o(e);
            n.onmessage = function(e) {
                r("message", e.data), t.emit("message", decodeURI(e.data))
            }, n.onerror = function(e) {
                r("error", n.readyState);
                var i = 2 !== n.readyState ? "network" : "permanent";
                t._cleanup(), t._close(i)
            }
        }
        i(a, s), a.prototype.abort = function() {
            this._cleanup(), this._close("user")
        }, a.prototype._cleanup = function() {
            var e = this.es;
            e && (e.onmessage = e.onerror = null, e.close(), this.es = null)
        }, a.prototype._close = function(e) {
            var t = this;
            setTimeout((function() {
                t.emit("close", null, e), t.removeAllListeners()
            }), 200)
        }, t.exports = a
    }, {
        debug: void 0,
        events: 3,
        eventsource: 18,
        inherits: 54
    }],
    30: [function(e, t, n) {
        (function(n) {
            (function() {
                var i = e("inherits"),
                    s = e("../../utils/iframe"),
                    o = e("../../utils/url"),
                    r = e("events").EventEmitter,
                    a = e("../../utils/random"),
                    c = function() {};

                function l(e) {
                    r.call(this);
                    var t = this;
                    s.polluteGlobalNamespace(), this.id = "a" + a.string(6), e = o.addQuery(e, "c=" + decodeURIComponent(s.WPrefix + "." + this.id)), c("using htmlfile", l.htmlfileEnabled);
                    var i = l.htmlfileEnabled ? s.createHtmlfile : s.createIframe;
                    n[s.WPrefix][this.id] = {
                        start: function() {
                            t.iframeObj.loaded()
                        },
                        message: function(e) {
                            t.emit("message", e)
                        },
                        stop: function() {
                            t._cleanup(), t._close("network")
                        }
                    }, this.iframeObj = i(e, (function() {
                        t._cleanup(), t._close("permanent")
                    }))
                }
                i(l, r), l.prototype.abort = function() {
                    this._cleanup(), this._close("user")
                }, l.prototype._cleanup = function() {
                    this.iframeObj && (this.iframeObj.cleanup(), this.iframeObj = null), delete n[s.WPrefix][this.id]
                }, l.prototype._close = function(e) {
                    this.emit("close", null, e), this.removeAllListeners()
                }, l.htmlfileEnabled = !1;
                var h = ["Active"].concat("Object").join("X");
                if (h in n) try {
                    l.htmlfileEnabled = !!new n[h]("htmlfile")
                } catch (u) {}
                l.enabled = l.htmlfileEnabled || s.iframeEnabled, t.exports = l
            }).call(this)
        }).call(this, void 0 !== _ ? _ : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "../../utils/iframe": 47,
        "../../utils/random": 50,
        "../../utils/url": 52,
        debug: void 0,
        events: 3,
        inherits: 54
    }],
    31: [function(e, t, n) {
        (function(n) {
            (function() {
                var i = e("../../utils/iframe"),
                    s = e("../../utils/random"),
                    o = e("../../utils/browser"),
                    r = e("../../utils/url"),
                    a = e("inherits"),
                    c = e("events").EventEmitter,
                    l = function() {};

                function h(e) {
                    var t = this;
                    c.call(this), i.polluteGlobalNamespace(), this.id = "a" + s.string(6);
                    var o = r.addQuery(e, "c=" + encodeURIComponent(i.WPrefix + "." + this.id));
                    n[i.WPrefix][this.id] = this._callback.bind(this), this._createScript(o), this.timeoutId = setTimeout((function() {
                        t._abort(new Error("JSONP script loaded abnormally (timeout)"))
                    }), h.timeout)
                }
                a(h, c), h.prototype.abort = function() {
                    if (n[i.WPrefix][this.id]) {
                        var e = new Error("JSONP user aborted read");
                        e.code = 1e3, this._abort(e)
                    }
                }, h.timeout = 35e3, h.scriptErrorTimeout = 1e3, h.prototype._callback = function(e) {
                    this._cleanup(), this.aborting || (e && this.emit("message", e), this.emit("close", null, "network"), this.removeAllListeners())
                }, h.prototype._abort = function(e) {
                    this._cleanup(), this.aborting = !0, this.emit("close", e.code, e.message), this.removeAllListeners()
                }, h.prototype._cleanup = function() {
                    if (clearTimeout(this.timeoutId), this.script2 && (this.script2.parentNode.removeChild(this.script2), this.script2 = null), this.script) {
                        var e = this.script;
                        e.parentNode.removeChild(e), e.onreadystatechange = e.onerror = e.onload = e.onclick = null, this.script = null
                    }
                    delete n[i.WPrefix][this.id]
                }, h.prototype._scriptError = function() {
                    var e = this;
                    this.errorTimer || (this.errorTimer = setTimeout((function() {
                        e.loadedOkay || e._abort(new Error("JSONP script loaded abnormally (onerror)"))
                    }), h.scriptErrorTimeout))
                }, h.prototype._createScript = function(e) {
                    var t, i = this,
                        r = this.script = n.document.createElement("script");
                    if (r.id = "a" + s.string(8), r.src = e, r.type = "text/javascript", r.charset = "UTF-8", r.onerror = this._scriptError.bind(this), r.onload = function() {
                            i._abort(new Error("JSONP script loaded abnormally (onload)"))
                        }, r.onreadystatechange = function() {
                            if (l("onreadystatechange", r.readyState), /loaded|closed/.test(r.readyState)) {
                                if (r && r.htmlFor && r.onclick) {
                                    i.loadedOkay = !0;
                                    try {
                                        r.onclick()
                                    } catch (e) {}
                                }
                                r && i._abort(new Error("JSONP script loaded abnormally (onreadystatechange)"))
                            }
                        }, void 0 === r.async && n.document.attachEvent)
                        if (o.isOpera())(t = this.script2 = n.document.createElement("script")).text = "try{var a = document.getElementById('" + r.id + "'); if(a)a.onerror();}catch(x){};", r.async = t.async = !1;
                        else {
                            try {
                                r.htmlFor = r.id, r.event = "onclick"
                            } catch (c) {}
                            r.async = !0
                        }
                    void 0 !== r.async && (r.async = !0);
                    var a = n.document.getElementsByTagName("head")[0];
                    a.insertBefore(r, a.firstChild), t && a.insertBefore(t, a.firstChild)
                }, t.exports = h
            }).call(this)
        }).call(this, void 0 !== _ ? _ : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "../../utils/browser": 44,
        "../../utils/iframe": 47,
        "../../utils/random": 50,
        "../../utils/url": 52,
        debug: void 0,
        events: 3,
        inherits: 54
    }],
    32: [function(e, t, n) {
        var i = e("inherits"),
            s = e("events").EventEmitter;

        function o(e, t) {
            s.call(this);
            var n = this;
            this.bufferPosition = 0, this.xo = new t("POST", e, null), this.xo.on("chunk", this._chunkHandler.bind(this)), this.xo.once("finish", (function(e, t) {
                n._chunkHandler(e, t), n.xo = null;
                var i = 200 === e ? "network" : "permanent";
                n.emit("close", null, i), n._cleanup()
            }))
        }
        i(o, s), o.prototype._chunkHandler = function(e, t) {
            if (200 === e && t)
                for (var n = -1;; this.bufferPosition += n + 1) {
                    var i = t.slice(this.bufferPosition);
                    if (-1 === (n = i.indexOf("\n"))) break;
                    var s = i.slice(0, n);
                    s && this.emit("message", s)
                }
        }, o.prototype._cleanup = function() {
            this.removeAllListeners()
        }, o.prototype.abort = function() {
            this.xo && (this.xo.close(), this.emit("close", null, "user"), this.xo = null), this._cleanup()
        }, t.exports = o
    }, {
        debug: void 0,
        events: 3,
        inherits: 54
    }],
    33: [function(e, t, n) {
        (function(n) {
            (function() {
                var i, s, o = e("../../utils/random"),
                    r = e("../../utils/url"),
                    a = function() {};
                t.exports = function(e, t, c) {
                    i || ((i = n.document.createElement("form")).style.display = "none", i.style.position = "absolute", i.method = "POST", i.enctype = "application/x-www-form-urlencoded", i.acceptCharset = "UTF-8", (s = n.document.createElement("textarea")).name = "d", i.appendChild(s), n.document.body.appendChild(i));
                    var l = "a" + o.string(8);
                    i.target = l, i.action = r.addQuery(r.addPath(e, "/jsonp_send"), "i=" + l);
                    var h = function(e) {
                        try {
                            return n.document.createElement('<iframe name="' + e + '">')
                        } catch (i) {
                            var t = n.document.createElement("iframe");
                            return t.name = e, t
                        }
                    }(l);
                    h.id = l, h.style.display = "none", i.appendChild(h);
                    try {
                        s.value = t
                    } catch (d) {}

                    function u(e) {
                        h.onerror && (h.onreadystatechange = h.onerror = h.onload = null, setTimeout((function() {
                            h.parentNode.removeChild(h), h = null
                        }), 500), s.value = "", c(e))
                    }
                    return i.submit(), h.onerror = function() {
                            u()
                        }, h.onload = function() {
                            u()
                        }, h.onreadystatechange = function(e) {
                            a("onreadystatechange", l, h.readyState), "complete" === h.readyState && u()
                        },
                        function() {
                            u(new Error("Aborted"))
                        }
                }
            }).call(this)
        }).call(this, void 0 !== _ ? _ : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "../../utils/random": 50,
        "../../utils/url": 52,
        debug: void 0
    }],
    34: [function(e, t, n) {
        (function(n) {
            (function() {
                var i = e("events").EventEmitter,
                    s = e("inherits"),
                    o = e("../../utils/event"),
                    r = e("../../utils/browser"),
                    a = e("../../utils/url"),
                    c = function() {};

                function l(e, t, n) {
                    var s = this;
                    i.call(this), setTimeout((function() {
                        s._start(e, t, n)
                    }), 0)
                }
                s(l, i), l.prototype._start = function(e, t, i) {
                    var s = this,
                        r = new n.XDomainRequest;
                    t = a.addQuery(t, "t=" + +new Date), r.onerror = function() {
                        s._error()
                    }, r.ontimeout = function() {
                        s._error()
                    }, r.onprogress = function() {
                        c("progress", r.responseText), s.emit("chunk", 200, r.responseText)
                    }, r.onload = function() {
                        s.emit("finish", 200, r.responseText), s._cleanup(!1)
                    }, this.xdr = r, this.unloadRef = o.unloadAdd((function() {
                        s._cleanup(!0)
                    }));
                    try {
                        this.xdr.open(e, t), this.timeout && (this.xdr.timeout = this.timeout), this.xdr.send(i)
                    } catch (l) {
                        this._error()
                    }
                }, l.prototype._error = function() {
                    this.emit("finish", 0, ""), this._cleanup(!1)
                }, l.prototype._cleanup = function(e) {
                    if (this.xdr) {
                        if (this.removeAllListeners(), o.unloadDel(this.unloadRef), this.xdr.ontimeout = this.xdr.onerror = this.xdr.onprogress = this.xdr.onload = null, e) try {
                            this.xdr.abort()
                        } catch (t) {}
                        this.unloadRef = this.xdr = null
                    }
                }, l.prototype.close = function() {
                    this._cleanup(!0)
                }, l.enabled = !(!n.XDomainRequest || !r.hasDomain()), t.exports = l
            }).call(this)
        }).call(this, void 0 !== _ ? _ : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "../../utils/browser": 44,
        "../../utils/event": 46,
        "../../utils/url": 52,
        debug: void 0,
        events: 3,
        inherits: 54
    }],
    35: [function(e, t, n) {
        var i = e("inherits"),
            s = e("../driver/xhr");

        function o(e, t, n, i) {
            s.call(this, e, t, n, i)
        }
        i(o, s), o.enabled = s.enabled && s.supportsCORS, t.exports = o
    }, {
        "../driver/xhr": 17,
        inherits: 54
    }],
    36: [function(e, t, n) {
        var i = e("events").EventEmitter;

        function s() {
            var e = this;
            i.call(this), this.to = setTimeout((function() {
                e.emit("finish", 200, "{}")
            }), s.timeout)
        }
        e("inherits")(s, i), s.prototype.close = function() {
            clearTimeout(this.to)
        }, s.timeout = 2e3, t.exports = s
    }, {
        events: 3,
        inherits: 54
    }],
    37: [function(e, t, n) {
        var i = e("inherits"),
            s = e("../driver/xhr");

        function o(e, t, n) {
            s.call(this, e, t, n, {
                noCredentials: !0
            })
        }
        i(o, s), o.enabled = s.enabled, t.exports = o
    }, {
        "../driver/xhr": 17,
        inherits: 54
    }],
    38: [function(e, t, n) {
        var i = e("../utils/event"),
            s = e("../utils/url"),
            o = e("inherits"),
            r = e("events").EventEmitter,
            a = e("./driver/websocket"),
            c = function() {};

        function l(e, t, n) {
            if (!l.enabled()) throw new Error("Transport created when disabled");
            r.call(this);
            var o = this,
                h = s.addPath(e, "/websocket");
            h = "https" === h.slice(0, 5) ? "wss" + h.slice(5) : "ws" + h.slice(4), this.url = h, this.ws = new a(this.url, [], n), this.ws.onmessage = function(e) {
                c("message event", e.data), o.emit("message", e.data)
            }, this.unloadRef = i.unloadAdd((function() {
                o.ws.close()
            })), this.ws.onclose = function(e) {
                c("close event", e.code, e.reason), o.emit("close", e.code, e.reason), o._cleanup()
            }, this.ws.onerror = function(e) {
                o.emit("close", 1006, "WebSocket connection broken"), o._cleanup()
            }
        }
        o(l, r), l.prototype.send = function(e) {
            var t = "[" + e + "]";
            this.ws.send(t)
        }, l.prototype.close = function() {
            var e = this.ws;
            this._cleanup(), e && e.close()
        }, l.prototype._cleanup = function() {
            var e = this.ws;
            e && (e.onmessage = e.onclose = e.onerror = null), i.unloadDel(this.unloadRef), this.unloadRef = this.ws = null, this.removeAllListeners()
        }, l.enabled = function() {
            return !!a
        }, l.transportName = "websocket", l.roundTrips = 2, t.exports = l
    }, {
        "../utils/event": 46,
        "../utils/url": 52,
        "./driver/websocket": 19,
        debug: void 0,
        events: 3,
        inherits: 54
    }],
    39: [function(e, t, n) {
        var i = e("inherits"),
            s = e("./lib/ajax-based"),
            o = e("./xdr-streaming"),
            r = e("./receiver/xhr"),
            a = e("./sender/xdr");

        function c(e) {
            if (!a.enabled) throw new Error("Transport created when disabled");
            s.call(this, e, "/xhr", r, a)
        }
        i(c, s), c.enabled = o.enabled, c.transportName = "xdr-polling", c.roundTrips = 2, t.exports = c
    }, {
        "./lib/ajax-based": 24,
        "./receiver/xhr": 32,
        "./sender/xdr": 34,
        "./xdr-streaming": 40,
        inherits: 54
    }],
    40: [function(e, t, n) {
        var i = e("inherits"),
            s = e("./lib/ajax-based"),
            o = e("./receiver/xhr"),
            r = e("./sender/xdr");

        function a(e) {
            if (!r.enabled) throw new Error("Transport created when disabled");
            s.call(this, e, "/xhr_streaming", o, r)
        }
        i(a, s), a.enabled = function(e) {
            return !e.cookie_needed && !e.nullOrigin && r.enabled && e.sameScheme
        }, a.transportName = "xdr-streaming", a.roundTrips = 2, t.exports = a
    }, {
        "./lib/ajax-based": 24,
        "./receiver/xhr": 32,
        "./sender/xdr": 34,
        inherits: 54
    }],
    41: [function(e, t, n) {
        var i = e("inherits"),
            s = e("./lib/ajax-based"),
            o = e("./receiver/xhr"),
            r = e("./sender/xhr-cors"),
            a = e("./sender/xhr-local");

        function c(e) {
            if (!a.enabled && !r.enabled) throw new Error("Transport created when disabled");
            s.call(this, e, "/xhr", o, r)
        }
        i(c, s), c.enabled = function(e) {
            return !e.nullOrigin && (!(!a.enabled || !e.sameOrigin) || r.enabled)
        }, c.transportName = "xhr-polling", c.roundTrips = 2, t.exports = c
    }, {
        "./lib/ajax-based": 24,
        "./receiver/xhr": 32,
        "./sender/xhr-cors": 35,
        "./sender/xhr-local": 37,
        inherits: 54
    }],
    42: [function(e, t, n) {
        (function(n) {
            (function() {
                var i = e("inherits"),
                    s = e("./lib/ajax-based"),
                    o = e("./receiver/xhr"),
                    r = e("./sender/xhr-cors"),
                    a = e("./sender/xhr-local"),
                    c = e("../utils/browser");

                function l(e) {
                    if (!a.enabled && !r.enabled) throw new Error("Transport created when disabled");
                    s.call(this, e, "/xhr_streaming", o, r)
                }
                i(l, s), l.enabled = function(e) {
                    return !e.nullOrigin && !c.isOpera() && r.enabled
                }, l.transportName = "xhr-streaming", l.roundTrips = 2, l.needBody = !!n.document, t.exports = l
            }).call(this)
        }).call(this, void 0 !== _ ? _ : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "../utils/browser": 44,
        "./lib/ajax-based": 24,
        "./receiver/xhr": 32,
        "./sender/xhr-cors": 35,
        "./sender/xhr-local": 37,
        inherits: 54
    }],
    43: [function(e, t, n) {
        (function(e) {
            (function() {
                e.crypto && e.crypto.getRandomValues ? t.exports.randomBytes = function(t) {
                    var n = new Uint8Array(t);
                    return e.crypto.getRandomValues(n), n
                } : t.exports.randomBytes = function(e) {
                    for (var t = new Array(e), n = 0; n < e; n++) t[n] = Math.floor(256 * Math.random());
                    return t
                }
            }).call(this)
        }).call(this, void 0 !== _ ? _ : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}],
    44: [function(e, t, n) {
        (function(e) {
            (function() {
                t.exports = {
                    isOpera: function() {
                        return e.navigator && /opera/i.test(e.navigator.userAgent)
                    },
                    isKonqueror: function() {
                        return e.navigator && /konqueror/i.test(e.navigator.userAgent)
                    },
                    hasDomain: function() {
                        if (!e.document) return !0;
                        try {
                            return !!e.document.domain
                        } catch (t) {
                            return !1
                        }
                    }
                }
            }).call(this)
        }).call(this, void 0 !== _ ? _ : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}],
    45: [function(e, t, n) {
        var i, s = /[\x00-\x1f\ud800-\udfff\ufffe\uffff\u0300-\u0333\u033d-\u0346\u034a-\u034c\u0350-\u0352\u0357-\u0358\u035c-\u0362\u0374\u037e\u0387\u0591-\u05af\u05c4\u0610-\u0617\u0653-\u0654\u0657-\u065b\u065d-\u065e\u06df-\u06e2\u06eb-\u06ec\u0730\u0732-\u0733\u0735-\u0736\u073a\u073d\u073f-\u0741\u0743\u0745\u0747\u07eb-\u07f1\u0951\u0958-\u095f\u09dc-\u09dd\u09df\u0a33\u0a36\u0a59-\u0a5b\u0a5e\u0b5c-\u0b5d\u0e38-\u0e39\u0f43\u0f4d\u0f52\u0f57\u0f5c\u0f69\u0f72-\u0f76\u0f78\u0f80-\u0f83\u0f93\u0f9d\u0fa2\u0fa7\u0fac\u0fb9\u1939-\u193a\u1a17\u1b6b\u1cda-\u1cdb\u1dc0-\u1dcf\u1dfc\u1dfe\u1f71\u1f73\u1f75\u1f77\u1f79\u1f7b\u1f7d\u1fbb\u1fbe\u1fc9\u1fcb\u1fd3\u1fdb\u1fe3\u1feb\u1fee-\u1fef\u1ff9\u1ffb\u1ffd\u2000-\u2001\u20d0-\u20d1\u20d4-\u20d7\u20e7-\u20e9\u2126\u212a-\u212b\u2329-\u232a\u2adc\u302b-\u302c\uaab2-\uaab3\uf900-\ufa0d\ufa10\ufa12\ufa15-\ufa1e\ufa20\ufa22\ufa25-\ufa26\ufa2a-\ufa2d\ufa30-\ufa6d\ufa70-\ufad9\ufb1d\ufb1f\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufb4e\ufff0-\uffff]/g;
        t.exports = {
            quote: function(e) {
                var t = JSON.stringify(e);
                return s.lastIndex = 0, s.test(t) ? (i = i || function(e) {
                    var t, n = {},
                        i = [];
                    for (t = 0; t < 65536; t++) i.push(String.fromCharCode(t));
                    return e.lastIndex = 0, i.join("").replace(e, (function(e) {
                        return n[e] = "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4), ""
                    })), e.lastIndex = 0, n
                }(s), t.replace(s, (function(e) {
                    return i[e]
                }))) : t
            }
        }
    }, {}],
    46: [function(e, t, n) {
        (function(n) {
            (function() {
                var i = e("./random"),
                    s = {},
                    o = !1,
                    r = n.chrome && n.chrome.app && n.chrome.app.runtime;
                t.exports = {
                    attachEvent: function(e, t) {
                        void 0 !== n.addEventListener ? n.addEventListener(e, t, !1) : n.document && n.attachEvent && (n.document.attachEvent("on" + e, t), n.attachEvent("on" + e, t))
                    },
                    detachEvent: function(e, t) {
                        void 0 !== n.addEventListener ? n.removeEventListener(e, t, !1) : n.document && n.detachEvent && (n.document.detachEvent("on" + e, t), n.detachEvent("on" + e, t))
                    },
                    unloadAdd: function(e) {
                        if (r) return null;
                        var t = i.string(8);
                        return s[t] = e, o && setTimeout(this.triggerUnloadCallbacks, 0), t
                    },
                    unloadDel: function(e) {
                        e in s && delete s[e]
                    },
                    triggerUnloadCallbacks: function() {
                        for (var e in s) s[e](), delete s[e]
                    }
                }, r || t.exports.attachEvent("unload", (function() {
                    o || (o = !0, t.exports.triggerUnloadCallbacks())
                }))
            }).call(this)
        }).call(this, void 0 !== _ ? _ : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "./random": 50
    }],
    47: [function(e, t, n) {
        (function(n) {
            (function() {
                var i = e("./event"),
                    s = e("./browser"),
                    o = function() {};
                t.exports = {
                    WPrefix: "_jp",
                    currentWindowId: null,
                    polluteGlobalNamespace: function() {
                        t.exports.WPrefix in n || (n[t.exports.WPrefix] = {})
                    },
                    postMessage: function(e, i) {
                        n.parent !== n ? n.parent.postMessage(JSON.stringify({
                            windowId: t.exports.currentWindowId,
                            type: e,
                            data: i || ""
                        }), "*") : o()
                    },
                    createIframe: function(e, t) {
                        function s() {
                            clearTimeout(a);
                            try {
                                l.onload = null
                            } catch (e) {}
                            l.onerror = null
                        }

                        function o() {
                            l && (s(), setTimeout((function() {
                                l && l.parentNode.removeChild(l), l = null
                            }), 0), i.unloadDel(c))
                        }

                        function r(e) {
                            l && (o(), t(e))
                        }
                        var a, c, l = n.document.createElement("iframe");
                        return l.src = e, l.style.display = "none", l.style.position = "absolute", l.onerror = function() {
                            r("onerror")
                        }, l.onload = function() {
                            clearTimeout(a), a = setTimeout((function() {
                                r("onload timeout")
                            }), 2e3)
                        }, n.document.body.appendChild(l), a = setTimeout((function() {
                            r("timeout")
                        }), 15e3), c = i.unloadAdd(o), {
                            post: function(e, t) {
                                setTimeout((function() {
                                    try {
                                        l && l.contentWindow && l.contentWindow.postMessage(e, t)
                                    } catch (n) {}
                                }), 0)
                            },
                            cleanup: o,
                            loaded: s
                        }
                    },
                    createHtmlfile: function(e, s) {
                        function o() {
                            clearTimeout(c), h.onerror = null
                        }

                        function r() {
                            d && (o(), i.unloadDel(l), h.parentNode.removeChild(h), h = d = null, CollectGarbage())
                        }

                        function a(e) {
                            d && (r(), s(e))
                        }
                        var c, l, h, u = ["Active"].concat("Object").join("X"),
                            d = new n[u]("htmlfile");
                        d.open(), d.write('<html><script>document.domain="' + n.document.domain + '";<\/script></html>'), d.close(), d.parentWindow[t.exports.WPrefix] = n[t.exports.WPrefix];
                        var p = d.createElement("div");
                        return d.body.appendChild(p), h = d.createElement("iframe"), p.appendChild(h), h.src = e, h.onerror = function() {
                            a("onerror")
                        }, c = setTimeout((function() {
                            a("timeout")
                        }), 15e3), l = i.unloadAdd(r), {
                            post: function(e, t) {
                                try {
                                    setTimeout((function() {
                                        h && h.contentWindow && h.contentWindow.postMessage(e, t)
                                    }), 0)
                                } catch (n) {}
                            },
                            cleanup: r,
                            loaded: o
                        }
                    }
                }, t.exports.iframeEnabled = !1, n.document && (t.exports.iframeEnabled = ("function" == typeof n.postMessage || "object" == typeof n.postMessage) && !s.isKonqueror())
            }).call(this)
        }).call(this, void 0 !== _ ? _ : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "./browser": 44,
        "./event": 46,
        debug: void 0
    }],
    48: [function(e, t, n) {
        (function(e) {
            (function() {
                var n = {};
                ["log", "debug", "warn"].forEach((function(t) {
                    var i;
                    try {
                        i = e.console && e.console[t] && e.console[t].apply
                    } catch (s) {}
                    n[t] = i ? function() {
                        return e.console[t].apply(e.console, arguments)
                    } : "log" === t ? function() {} : n.log
                })), t.exports = n
            }).call(this)
        }).call(this, void 0 !== _ ? _ : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}],
    49: [function(e, t, n) {
        t.exports = {
            isObject: function(e) {
                var t = typeof e;
                return "function" == t || "object" == t && !!e
            },
            extend: function(e) {
                if (!this.isObject(e)) return e;
                for (var t, n, i = 1, s = arguments.length; i < s; i++)
                    for (n in t = arguments[i]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                return e
            }
        }
    }, {}],
    50: [function(e, t, n) {
        var i = e("crypto"),
            s = "abcdefghijklmnopqrstuvwxyz012345";
        t.exports = {
            string: function(e) {
                for (var t = s.length, n = i.randomBytes(e), o = [], r = 0; r < e; r++) o.push(s.substr(n[r] % t, 1));
                return o.join("")
            },
            number: function(e) {
                return Math.floor(Math.random() * e)
            },
            numberString: function(e) {
                var t = ("" + (e - 1)).length;
                return (new Array(t + 1).join("0") + this.number(e)).slice(-t)
            }
        }
    }, {
        crypto: 43
    }],
    51: [function(e, t, n) {
        var i = function() {};
        t.exports = function(e) {
            return {
                filterToEnabled: function(t, n) {
                    var s = {
                        main: [],
                        facade: []
                    };
                    return t ? "string" == typeof t && (t = [t]) : t = [], e.forEach((function(e) {
                        e && ("websocket" !== e.transportName || !1 !== n.websocket ? t.length && -1 === t.indexOf(e.transportName) ? i("not in whitelist", e.transportName) : e.enabled(n) ? (i("enabled", e.transportName), s.main.push(e), e.facadeTransport && s.facade.push(e.facadeTransport)) : i("disabled", e.transportName) : i())
                    })), s
                }
            }
        }
    }, {
        debug: void 0
    }],
    52: [function(e, t, n) {
        var i = e("url-parse");
        t.exports = {
            getOrigin: function(e) {
                if (!e) return null;
                var t = new i(e);
                if ("file:" === t.protocol) return null;
                var n = t.port;
                return n = n || ("https:" === t.protocol ? "443" : "80"), t.protocol + "//" + t.hostname + ":" + n
            },
            isOriginEqual: function(e, t) {
                return this.getOrigin(e) === this.getOrigin(t)
            },
            isSchemeEqual: function(e, t) {
                return e.split(":")[0] === t.split(":")[0]
            },
            addPath: function(e, t) {
                var n = e.split("?");
                return n[0] + t + (n[1] ? "?" + n[1] : "")
            },
            addQuery: function(e, t) {
                return e + (-1 === e.indexOf("?") ? "?" + t : "&" + t)
            },
            isLoopbackAddr: function(e) {
                return /^127\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})$/i.test(e) || /^\[::1\]$/.test(e)
            }
        }
    }, {
        debug: void 0,
        "url-parse": 57
    }],
    53: [function(e, t, n) {
        t.exports = "1.6.1"
    }, {}],
    54: [function(e, t, n) {
        "function" == typeof Object.create ? t.exports = function(e, t) {
            t && (e.super_ = t, e.prototype = Object.create(t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }))
        } : t.exports = function(e, t) {
            if (t) {
                let n = function() {};
                e.super_ = t, n.prototype = t.prototype, e.prototype = new n, e.prototype.constructor = e
            }
        }
    }, {}],
    55: [function(e, t, n) {
        var i = Object.prototype.hasOwnProperty;

        function s(e) {
            try {
                return decodeURIComponent(e.replace(/\+/g, " "))
            } catch (t) {
                return null
            }
        }
        n.stringify = function(e, t) {
            t = t || "";
            var n, s, o = [];
            for (s in "string" != typeof t && (t = "?"), e)
                if (i.call(e, s)) {
                    if ((n = e[s]) || null != n && !isNaN(n) || (n = ""), s = encodeURIComponent(s), n = encodeURIComponent(n), null === s || null === n) continue;
                    o.push(s + "=" + n)
                }
            return o.length ? t + o.join("&") : ""
        }, n.parse = function(e) {
            for (var t, n = /([^=?&]+)=?([^&]*)/g, i = {}; t = n.exec(e);) {
                var o = s(t[1]),
                    r = s(t[2]);
                null === o || null === r || o in i || (i[o] = r)
            }
            return i
        }
    }, {}],
    56: [function(e, t, n) {
        t.exports = function(e, t) {
            if (t = t.split(":")[0], !(e = +e)) return !1;
            switch (t) {
                case "http":
                case "ws":
                    return 80 !== e;
                case "https":
                case "wss":
                    return 443 !== e;
                case "ftp":
                    return 21 !== e;
                case "gopher":
                    return 70 !== e;
                case "file":
                    return !1
            }
            return 0 !== e
        }
    }, {}],
    57: [function(e, t, n) {
        (function(n) {
            (function() {
                var i = e("requires-port"),
                    s = e("querystringify"),
                    o = /^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/,
                    r = /[\n\r\t]/g,
                    a = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//,
                    c = /:\d+$/,
                    l = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,
                    h = /^[a-zA-Z]:/;

                function u(e) {
                    return (e || "").toString().replace(o, "")
                }
                var d = [
                        ["#", "hash"],
                        ["?", "query"],
                        function(e, t) {
                            return m(t.protocol) ? e.replace(/\\/g, "/") : e
                        },
                        ["/", "pathname"],
                        ["@", "auth", 1],
                        [NaN, "host", void 0, 1, 1],
                        [/:(\d*)$/, "port", void 0, 1],
                        [NaN, "hostname", void 0, 1, 1]
                    ],
                    p = {
                        hash: 1,
                        query: 1
                    };

                function f(e) {
                    var t, i = ("undefined" != typeof window ? window : void 0 !== n ? n : "undefined" != typeof self ? self : {}).location || {},
                        s = {},
                        o = typeof(e = e || i);
                    if ("blob:" === e.protocol) s = new v(unescape(e.pathname), {});
                    else if ("string" == o)
                        for (t in s = new v(e, {}), p) delete s[t];
                    else if ("object" == o) {
                        for (t in e) t in p || (s[t] = e[t]);
                        void 0 === s.slashes && (s.slashes = a.test(e.href))
                    }
                    return s
                }

                function m(e) {
                    return "file:" === e || "ftp:" === e || "http:" === e || "https:" === e || "ws:" === e || "wss:" === e
                }

                function b(e, t) {
                    e = (e = u(e)).replace(r, ""), t = t || {};
                    var n, i = l.exec(e),
                        s = i[1] ? i[1].toLowerCase() : "",
                        o = !!i[2],
                        a = !!i[3],
                        c = 0;
                    return o ? c = a ? (n = i[2] + i[3] + i[4], i[2].length + i[3].length) : (n = i[2] + i[4], i[2].length) : a ? (n = i[3] + i[4], c = i[3].length) : n = i[4], "file:" === s ? 2 <= c && (n = n.slice(2)) : m(s) ? n = i[4] : s ? o && (n = n.slice(2)) : 2 <= c && m(t.protocol) && (n = i[4]), {
                        protocol: s,
                        slashes: o || m(s),
                        slashesCount: c,
                        rest: n
                    }
                }

                function v(e, t, n) {
                    if (e = (e = u(e)).replace(r, ""), !(this instanceof v)) return new v(e, t, n);
                    var o, a, c, l, p, g, y = d.slice(),
                        w = typeof t,
                        _ = this,
                        x = 0;
                    for ("object" != w && "string" != w && (n = t, t = null), n && "function" != typeof n && (n = s.parse), o = !(a = b(e || "", t = f(t))).protocol && !a.slashes, _.slashes = a.slashes || o && t.slashes, _.protocol = a.protocol || t.protocol || "", e = a.rest, ("file:" === a.protocol && (2 !== a.slashesCount || h.test(e)) || !a.slashes && (a.protocol || a.slashesCount < 2 || !m(_.protocol))) && (y[3] = [/(.*)/, "pathname"]); x < y.length; x++) "function" != typeof(l = y[x]) ? (c = l[0], g = l[1], c != c ? _[g] = e : "string" == typeof c ? ~(p = "@" === c ? e.lastIndexOf(c) : e.indexOf(c)) && (e = "number" == typeof l[2] ? (_[g] = e.slice(0, p), e.slice(p + l[2])) : (_[g] = e.slice(p), e.slice(0, p))) : (p = c.exec(e)) && (_[g] = p[1], e = e.slice(0, p.index)), _[g] = _[g] || o && l[3] && t[g] || "", l[4] && (_[g] = _[g].toLowerCase())) : e = l(e, _);
                    n && (_.query = n(_.query)), o && t.slashes && "/" !== _.pathname.charAt(0) && ("" !== _.pathname || "" !== t.pathname) && (_.pathname = function(e, t) {
                        if ("" === e) return t;
                        for (var n = (t || "/").split("/").slice(0, -1).concat(e.split("/")), i = n.length, s = n[i - 1], o = !1, r = 0; i--;) "." === n[i] ? n.splice(i, 1) : ".." === n[i] ? (n.splice(i, 1), r++) : r && (0 === i && (o = !0), n.splice(i, 1), r--);
                        return o && n.unshift(""), "." !== s && ".." !== s || n.push(""), n.join("/")
                    }(_.pathname, t.pathname)), "/" !== _.pathname.charAt(0) && m(_.protocol) && (_.pathname = "/" + _.pathname), i(_.port, _.protocol) || (_.host = _.hostname, _.port = ""), _.username = _.password = "", _.auth && (~(p = _.auth.indexOf(":")) ? (_.username = _.auth.slice(0, p), _.username = encodeURIComponent(decodeURIComponent(_.username)), _.password = _.auth.slice(p + 1), _.password = encodeURIComponent(decodeURIComponent(_.password))) : _.username = encodeURIComponent(decodeURIComponent(_.auth)), _.auth = _.password ? _.username + ":" + _.password : _.username), _.origin = "file:" !== _.protocol && m(_.protocol) && _.host ? _.protocol + "//" + _.host : "null", _.href = _.toString()
                }
                v.prototype = {
                    set: function(e, t, n) {
                        var o = this;
                        switch (e) {
                            case "query":
                                "string" == typeof t && t.length && (t = (n || s.parse)(t)), o[e] = t;
                                break;
                            case "port":
                                o[e] = t, i(t, o.protocol) ? t && (o.host = o.hostname + ":" + t) : (o.host = o.hostname, o[e] = "");
                                break;
                            case "hostname":
                                o[e] = t, o.port && (t += ":" + o.port), o.host = t;
                                break;
                            case "host":
                                o[e] = t, c.test(t) ? (t = t.split(":"), o.port = t.pop(), o.hostname = t.join(":")) : (o.hostname = t, o.port = "");
                                break;
                            case "protocol":
                                o.protocol = t.toLowerCase(), o.slashes = !n;
                                break;
                            case "pathname":
                            case "hash":
                                if (t) {
                                    var r = "pathname" === e ? "/" : "#";
                                    o[e] = t.charAt(0) !== r ? r + t : t
                                } else o[e] = t;
                                break;
                            case "username":
                            case "password":
                                o[e] = encodeURIComponent(t);
                                break;
                            case "auth":
                                var a = t.indexOf(":");
                                ~a ? (o.username = t.slice(0, a), o.username = encodeURIComponent(decodeURIComponent(o.username)), o.password = t.slice(a + 1), o.password = encodeURIComponent(decodeURIComponent(o.password))) : o.username = encodeURIComponent(decodeURIComponent(t))
                        }
                        for (var l = 0; l < d.length; l++) {
                            var h = d[l];
                            h[4] && (o[h[1]] = o[h[1]].toLowerCase())
                        }
                        return o.auth = o.password ? o.username + ":" + o.password : o.username, o.origin = "file:" !== o.protocol && m(o.protocol) && o.host ? o.protocol + "//" + o.host : "null", o.href = o.toString(), o
                    },
                    toString: function(e) {
                        e && "function" == typeof e || (e = s.stringify);
                        var t, n = this,
                            i = n.host,
                            o = n.protocol;
                        o && ":" !== o.charAt(o.length - 1) && (o += ":");
                        var r = o + (n.protocol && n.slashes || m(n.protocol) ? "//" : "");
                        return n.username ? (r += n.username, n.password && (r += ":" + n.password), r += "@") : n.password ? (r += ":" + n.password, r += "@") : "file:" !== n.protocol && m(n.protocol) && !i && "/" !== n.pathname && (r += "@"), (":" === i[i.length - 1] || c.test(n.hostname) && !n.port) && (i += ":"), r += i + n.pathname, (t = "object" == typeof n.query ? e(n.query) : n.query) && (r += "?" !== t.charAt(0) ? "?" + t : t), n.hash && (r += n.hash), r
                    }
                }, v.extractProtocol = b, v.location = f, v.trimLeft = u, v.qs = s, t.exports = v
            }).call(this)
        }).call(this, void 0 !== _ ? _ : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        querystringify: 55,
        "requires-port": 56
    }]
}, {}, [1])(1));
export {
    de as C, fe as S, te as _
};