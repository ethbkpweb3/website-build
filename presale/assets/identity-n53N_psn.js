import {
    _ as e
} from "./Collapse.vue_vue_type_style_index_0_lang-jEeEeRhV.js";
import {
    _ as t
} from "./VPlaceload-DcvQMSN9.js";
import {
    dy as a,
    dv as s,
    m as i,
    be as l,
    y as o,
    h as n,
    o as r,
    n as d,
    w as c,
    j as u,
    P as p,
    cB as f,
    p as v,
    X as m,
    dh as y,
    r as h,
    s as g,
    l as b,
    dj as k,
    v as w,
    t as x,
    ck as _,
    bx as S,
    Q as C,
    R as j,
    ez as F,
    J as R,
    B as L,
    C as E,
    L as T,
    cS as U,
    bL as $,
    bc as O,
    dm as A,
    u as P,
    Y as z,
    a as D,
    K,
    q as B,
    I as V,
    dn as q,
    dz as W
} from "./index-CQfCy4Xm.js";
import {
    _ as N
} from "./CountryInput.vue_vue_type_style_index_0_lang-EF4WwsXL.js";
import {
    C as H,
    b as M,
    d as X,
    E as I,
    V as Q,
    h as J,
    k as Y,
    c as G,
    W as Z,
    y as ee,
    _ as te,
    w as ae
} from "./index-DZwhim7i.js";
import {
    F as se
} from "./browser-Cv63Auap.js";
import {
    E as ie
} from "./index-DhHA3mFI.js";
import {
    E as le
} from "./index-5N62XIoj.js";
import {
    E as oe
} from "./index-CB5HUA9W.js";
import {
    E as ne
} from "./index-CteOOV_f.js";
import {
    t as re,
    M as de,
    k as ce
} from "./index-DWyf7GKU.js";
import {
    m as ue
} from "./typescript-CRqm1_SZ.js";
import {
    u as pe,
    g as fe,
    z as ve,
    Q as me
} from "./index-wV0BwLDn.js";
import {
    b as ye
} from "./_baseClone-CNNEnxsr.js";
import {
    _ as he
} from "./_plugin-vue_export-helper-BCo6x5W8.js";
import {
    u as ge
} from "./usePageTitle-BiOJFdog.js";
import "./all-countries-_6k8nJ5H.js";
import "./index-38aUouWI.js";
import "./use-global-config-CYuHb1FB.js";
import "./index-CreMjc0E.js";
import "./index-DYh1qtlV.js";
import "./use-dialog-CC6CVfkB.js";
import "./index-BR6qnryQ.js";
import "./_initCloneObject-DqrhPNyg.js";
import "./vue.8fc199ce-DBDcZ0BB.js";
import "./viewWrapper-yhXGfwRy.js";

function be(e) {
    return ye(e, 5)
}
const ke = Symbol("uploadContextKey");
class we extends Error {
    constructor(e, t, a, s) {
        super(e), this.name = "UploadAjaxError", this.status = t, this.method = a, this.url = s
    }
}

function xe(e, t, a) {
    let s;
    return s = a.response ? `${a.response.error||a.response}` : a.responseText ? `${a.responseText}` : `fail to ${t.method} ${e} ${a.status}`, new we(s, a.status, t.method, e)
}
const _e = ["text", "picture", "picture-card"];
let Se = 1;
const Ce = () => Date.now() + Se++,
    je = M({
        action: {
            type: String,
            default: "#"
        },
        headers: {
            type: X(Object)
        },
        method: {
            type: String,
            default: "post"
        },
        data: {
            type: X([Object, Function, Promise]),
            default: () => ue({})
        },
        multiple: Boolean,
        name: {
            type: String,
            default: "file"
        },
        drag: Boolean,
        withCredentials: Boolean,
        showFileList: {
            type: Boolean,
            default: !0
        },
        accept: {
            type: String,
            default: ""
        },
        fileList: {
            type: X(Array),
            default: () => ue([])
        },
        autoUpload: {
            type: Boolean,
            default: !0
        },
        listType: {
            type: String,
            values: _e,
            default: "text"
        },
        httpRequest: {
            type: X(Function),
            default: e => {
                "undefined" == typeof XMLHttpRequest && re("ElUpload", "XMLHttpRequest is undefined");
                const t = new XMLHttpRequest,
                    s = e.action;
                t.upload && t.upload.addEventListener("progress", (t => {
                    const a = t;
                    a.percent = t.total > 0 ? t.loaded / t.total * 100 : 0, e.onProgress(a)
                }));
                const i = new FormData;
                if (e.data)
                    for (const [o, n] of Object.entries(e.data)) a(n) && n.length ? i.append(o, ...n) : i.append(o, n);
                i.append(e.filename, e.file, e.file.name), t.addEventListener("error", (() => {
                    e.onError(xe(s, e, t))
                })), t.addEventListener("load", (() => {
                    if (t.status < 200 || t.status >= 300) return e.onError(xe(s, e, t));
                    e.onSuccess(function(e) {
                        const t = e.responseText || e.response;
                        if (!t) return t;
                        try {
                            return JSON.parse(t)
                        } catch (a) {
                            return t
                        }
                    }(t))
                })), t.open(e.method, s, !0), e.withCredentials && "withCredentials" in t && (t.withCredentials = !0);
                const l = e.headers || {};
                if (l instanceof Headers) l.forEach(((e, a) => t.setRequestHeader(a, e)));
                else
                    for (const [a, o] of Object.entries(l)) H(o) || t.setRequestHeader(a, String(o));
                return t.send(i), t
            }
        },
        disabled: Boolean,
        limit: Number
    }),
    Fe = M({ ...je,
        beforeUpload: {
            type: X(Function),
            default: s
        },
        beforeRemove: {
            type: X(Function)
        },
        onRemove: {
            type: X(Function),
            default: s
        },
        onChange: {
            type: X(Function),
            default: s
        },
        onPreview: {
            type: X(Function),
            default: s
        },
        onSuccess: {
            type: X(Function),
            default: s
        },
        onProgress: {
            type: X(Function),
            default: s
        },
        onError: {
            type: X(Function),
            default: s
        },
        onExceed: {
            type: X(Function),
            default: s
        },
        crossorigin: {
            type: X(String)
        }
    }),
    Re = M({
        files: {
            type: X(Array),
            default: () => ue([])
        },
        disabled: {
            type: Boolean,
            default: !1
        },
        handlePreview: {
            type: X(Function),
            default: s
        },
        listType: {
            type: String,
            values: _e,
            default: "text"
        },
        crossorigin: {
            type: X(String)
        }
    }),
    Le = i({
        name: "ElUploadList"
    });
var Ee = te(i({ ...Le,
    props: Re,
    emits: {
        remove: e => !!e
    },
    setup(e, {
        emit: t
    }) {
        const a = e,
            {
                t: s
            } = pe(),
            i = l("upload"),
            C = l("icon"),
            j = l("list"),
            F = fe(),
            R = o(!1),
            L = n((() => [i.b("list"), i.bm("list", a.listType), i.is("disabled", a.disabled)])),
            E = e => {
                t("remove", e)
            };
        return (e, t) => (r(), d(S, {
            tag: "ul",
            class: v(m(L)),
            name: m(j).b()
        }, {
            default: c((() => [(r(!0), u(p, null, f(e.files, ((t, a) => (r(), u("li", {
                key: t.uid || t.name,
                class: v([m(i).be("list", "item"), m(i).is(t.status), {
                    focusing: R.value
                }]),
                tabindex: "0",
                onKeydown: y((e => !m(F) && E(t)), ["delete"]),
                onFocus: e => R.value = !0,
                onBlur: e => R.value = !1,
                onClick: e => R.value = !1
            }, [h(e.$slots, "default", {
                file: t,
                index: a
            }, (() => ["picture" === e.listType || "uploading" !== t.status && "picture-card" === e.listType ? (r(), u("img", {
                key: 0,
                class: v(m(i).be("list", "item-thumbnail")),
                src: t.url,
                crossorigin: e.crossorigin,
                alt: ""
            }, null, 10, ["src", "crossorigin"])) : g("v-if", !0), "uploading" === t.status || "picture-card" !== e.listType ? (r(), u("div", {
                key: 1,
                class: v(m(i).be("list", "item-info"))
            }, [b("a", {
                class: v(m(i).be("list", "item-name")),
                onClick: k((a => e.handlePreview(t)), ["prevent"])
            }, [w(m(I), {
                class: v(m(C).m("document"))
            }, {
                default: c((() => [w(m(Q))])),
                _: 1
            }, 8, ["class"]), b("span", {
                class: v(m(i).be("list", "item-file-name")),
                title: t.name
            }, x(t.name), 11, ["title"])], 10, ["onClick"]), "uploading" === t.status ? (r(), d(m(ne), {
                key: 0,
                type: "picture-card" === e.listType ? "circle" : "line",
                "stroke-width": "picture-card" === e.listType ? 6 : 2,
                percentage: Number(t.percentage),
                style: _("picture-card" === e.listType ? "" : "margin-top: 0.5rem")
            }, null, 8, ["type", "stroke-width", "percentage", "style"])) : g("v-if", !0)], 2)) : g("v-if", !0), b("label", {
                class: v(m(i).be("list", "item-status-label"))
            }, ["text" === e.listType ? (r(), d(m(I), {
                key: 0,
                class: v([m(C).m("upload-success"), m(C).m("circle-check")])
            }, {
                default: c((() => [w(m(J))])),
                _: 1
            }, 8, ["class"])) : ["picture-card", "picture"].includes(e.listType) ? (r(), d(m(I), {
                key: 1,
                class: v([m(C).m("upload-success"), m(C).m("check")])
            }, {
                default: c((() => [w(m(Y))])),
                _: 1
            }, 8, ["class"])) : g("v-if", !0)], 2), m(F) ? g("v-if", !0) : (r(), d(m(I), {
                key: 2,
                class: v(m(C).m("close")),
                onClick: e => E(t)
            }, {
                default: c((() => [w(m(G))])),
                _: 2
            }, 1032, ["class", "onClick"])), g(" Due to close btn only appears when li gets focused disappears after li gets blurred, thus keyboard navigation can never reach close btn"), g(" This is a bug which needs to be fixed "), g(" TODO: Fix the incorrect navigation interaction "), m(F) ? g("v-if", !0) : (r(), u("i", {
                key: 3,
                class: v(m(C).m("close-tip"))
            }, x(m(s)("el.upload.deleteTip")), 3)), "picture-card" === e.listType ? (r(), u("span", {
                key: 4,
                class: v(m(i).be("list", "item-actions"))
            }, [b("span", {
                class: v(m(i).be("list", "item-preview")),
                onClick: a => e.handlePreview(t)
            }, [w(m(I), {
                class: v(m(C).m("zoom-in"))
            }, {
                default: c((() => [w(m(Z))])),
                _: 1
            }, 8, ["class"])], 10, ["onClick"]), m(F) ? g("v-if", !0) : (r(), u("span", {
                key: 0,
                class: v(m(i).be("list", "item-delete")),
                onClick: e => E(t)
            }, [w(m(I), {
                class: v(m(C).m("delete"))
            }, {
                default: c((() => [w(m(ee))])),
                _: 1
            }, 8, ["class"])], 10, ["onClick"]))], 2)) : g("v-if", !0)]))], 42, ["onKeydown", "onFocus", "onBlur", "onClick"])))), 128)), h(e.$slots, "append")])),
            _: 3
        }, 8, ["class", "name"]))
    }
}), [
    ["__file", "upload-list.vue"]
]);
const Te = M({
        disabled: {
            type: Boolean,
            default: !1
        }
    }),
    Ue = {
        file: e => a(e)
    },
    $e = "ElUploadDrag",
    Oe = i({
        name: $e
    });
var Ae = te(i({ ...Oe,
    props: Te,
    emits: Ue,
    setup(e, {
        emit: t
    }) {
        C(ke) || re($e, "usage: <el-upload><el-upload-dragger /></el-upload>");
        const a = l("upload"),
            s = o(!1),
            i = fe(),
            n = e => {
                if (i.value) return;
                s.value = !1, e.stopPropagation();
                const a = Array.from(e.dataTransfer.files);
                t("file", a)
            },
            d = () => {
                i.value || (s.value = !0)
            };
        return (e, t) => (r(), u("div", {
            class: v([m(a).b("dragger"), m(a).is("dragover", s.value)]),
            onDrop: k(n, ["prevent"]),
            onDragover: k(d, ["prevent"]),
            onDragleave: k((e => s.value = !1), ["prevent"])
        }, [h(e.$slots, "default")], 42, ["onDrop", "onDragover", "onDragleave"]))
    }
}), [
    ["__file", "upload-dragger.vue"]
]);
const Pe = M({ ...je,
        beforeUpload: {
            type: X(Function),
            default: s
        },
        onRemove: {
            type: X(Function),
            default: s
        },
        onStart: {
            type: X(Function),
            default: s
        },
        onSuccess: {
            type: X(Function),
            default: s
        },
        onProgress: {
            type: X(Function),
            default: s
        },
        onError: {
            type: X(Function),
            default: s
        },
        onExceed: {
            type: X(Function),
            default: s
        }
    }),
    ze = i({
        name: "ElUploadContent",
        inheritAttrs: !1
    });
var De = te(i({ ...ze,
    props: Pe,
    setup(e, {
        expose: t
    }) {
        const a = e,
            s = l("upload"),
            i = fe(),
            o = j({}),
            n = j(),
            p = e => {
                if (0 === e.length) return;
                const {
                    autoUpload: t,
                    limit: s,
                    fileList: i,
                    multiple: l,
                    onStart: o,
                    onExceed: n
                } = a;
                if (s && i.length + e.length > s) n(e, i);
                else {
                    l || (e = e.slice(0, 1));
                    for (const a of e) {
                        const e = a;
                        e.uid = Ce(), o(e), t && f(e)
                    }
                }
            },
            f = async e => {
                if (n.value.value = "", !a.beforeUpload) return g(e);
                let t, s = {};
                try {
                    const i = a.data,
                        l = a.beforeUpload(e);
                    s = F(a.data) ? be(a.data) : a.data, t = await l, F(a.data) && ve(i, s) && (s = be(a.data))
                } catch (l) {
                    t = !1
                }
                if (!1 === t) return void a.onRemove(e);
                let i = e;
                t instanceof Blob && (i = t instanceof File ? t : new File([t], e.name, {
                    type: e.type
                })), g(Object.assign(i, {
                    uid: e.uid
                }), s)
            },
            g = async (e, t) => {
                const {
                    headers: s,
                    data: i,
                    method: l,
                    withCredentials: n,
                    name: r,
                    action: d,
                    onProgress: c,
                    onSuccess: u,
                    onError: p,
                    httpRequest: f
                } = a;
                try {
                    t = await (async (e, t) => R(e) ? e(t) : e)(null != t ? t : i, e)
                } catch (h) {
                    return void a.onRemove(e)
                }
                const {
                    uid: v
                } = e, m = {
                    headers: s || {},
                    withCredentials: n,
                    file: e,
                    data: t,
                    method: l,
                    filename: r,
                    action: d,
                    onProgress: t => {
                        c(t, e)
                    },
                    onSuccess: t => {
                        u(t, e), delete o.value[v]
                    },
                    onError: t => {
                        p(t, e), delete o.value[v]
                    }
                }, y = f(m);
                o.value[v] = y, y instanceof Promise && y.then(m.onSuccess, m.onError)
            },
            w = e => {
                const t = e.target.files;
                t && p(Array.from(t))
            },
            x = () => {
                i.value || (n.value.value = "", n.value.click())
            },
            _ = () => {
                x()
            };
        return t({
            abort: e => {
                me(o.value).filter(e ? ([t]) => String(e.uid) === t : () => !0).forEach((([e, t]) => {
                    t instanceof XMLHttpRequest && t.abort(), delete o.value[e]
                }))
            },
            upload: f
        }), (e, t) => (r(), u("div", {
            class: v([m(s).b(), m(s).m(e.listType), m(s).is("drag", e.drag), m(s).is("disabled", m(i))]),
            tabindex: m(i) ? "-1" : "0",
            onClick: x,
            onKeydown: y(k(_, ["self"]), ["enter", "space"])
        }, [e.drag ? (r(), d(Ae, {
            key: 0,
            disabled: m(i),
            onFile: p
        }, {
            default: c((() => [h(e.$slots, "default")])),
            _: 3
        }, 8, ["disabled"])) : h(e.$slots, "default", {
            key: 1
        }), b("input", {
            ref_key: "inputRef",
            ref: n,
            class: v(m(s).e("input")),
            name: e.name,
            disabled: m(i),
            multiple: e.multiple,
            accept: e.accept,
            type: "file",
            onChange: w,
            onClick: k((() => {}), ["stop"])
        }, null, 42, ["name", "disabled", "multiple", "accept", "onClick"])], 42, ["tabindex", "onKeydown"]))
    }
}), [
    ["__file", "upload-content.vue"]
]);
const Ke = "ElUpload",
    Be = e => {
        var t;
        (null == (t = e.url) ? void 0 : t.startsWith("blob:")) && URL.revokeObjectURL(e.url)
    },
    Ve = i({
        name: "ElUpload"
    });
const qe = ae(te(i({ ...Ve,
        props: Fe,
        setup(e, {
            expose: t
        }) {
            const a = e,
                s = fe(),
                i = j(),
                {
                    abort: l,
                    submit: o,
                    clearFiles: p,
                    uploadFiles: f,
                    handleStart: v,
                    handleError: y,
                    handleRemove: b,
                    handleSuccess: k,
                    handleProgress: x,
                    revokeFileObjectURL: _
                } = ((e, t) => {
                    const a = de(e, "fileList", void 0, {
                            passive: !0
                        }),
                        s = e => a.value.find((t => t.uid === e.uid));

                    function i(e) {
                        var a;
                        null == (a = t.value) || a.abort(e)
                    }

                    function l(e) {
                        a.value = a.value.filter((t => t !== e))
                    }
                    return L((() => e.listType), (t => {
                        "picture-card" !== t && "picture" !== t || (a.value = a.value.map((t => {
                            const {
                                raw: s,
                                url: i
                            } = t;
                            if (!i && s) try {
                                t.url = URL.createObjectURL(s)
                            } catch (l) {
                                e.onError(l, t, a.value)
                            }
                            return t
                        })))
                    })), L(a, (e => {
                        for (const t of e) t.uid || (t.uid = Ce()), t.status || (t.status = "success")
                    }), {
                        immediate: !0,
                        deep: !0
                    }), {
                        uploadFiles: a,
                        abort: i,
                        clearFiles: function(e = ["ready", "uploading", "success", "fail"]) {
                            a.value = a.value.filter((t => !e.includes(t.status)))
                        },
                        handleError: (t, i) => {
                            const o = s(i);
                            o && (console.error(t), o.status = "fail", l(o), e.onError(t, o, a.value), e.onChange(o, a.value))
                        },
                        handleProgress: (t, i) => {
                            const l = s(i);
                            l && (e.onProgress(t, l, a.value), l.status = "uploading", l.percentage = Math.round(t.percent))
                        },
                        handleStart: t => {
                            H(t.uid) && (t.uid = Ce());
                            const s = {
                                name: t.name,
                                percentage: 0,
                                status: "ready",
                                size: t.size,
                                raw: t,
                                uid: t.uid
                            };
                            if ("picture-card" === e.listType || "picture" === e.listType) try {
                                s.url = URL.createObjectURL(t)
                            } catch (i) {
                                ce(Ke, i.message), e.onError(i, s, a.value)
                            }
                            a.value = [...a.value, s], e.onChange(s, a.value)
                        },
                        handleSuccess: (t, i) => {
                            const l = s(i);
                            l && (l.status = "success", l.response = t, e.onSuccess(t, l, a.value), e.onChange(l, a.value))
                        },
                        handleRemove: async t => {
                            const o = t instanceof File ? s(t) : t;
                            o || re(Ke, "file to be removed not found");
                            const n = t => {
                                i(t), l(t), e.onRemove(t, a.value), Be(t)
                            };
                            e.beforeRemove ? !1 !== await e.beforeRemove(o, a.value) && n(o) : n(o)
                        },
                        submit: function() {
                            a.value.filter((({
                                status: e
                            }) => "ready" === e)).forEach((({
                                raw: e
                            }) => {
                                var a;
                                return e && (null == (a = t.value) ? void 0 : a.upload(e))
                            }))
                        },
                        revokeFileObjectURL: Be
                    }
                })(a, i),
                S = n((() => "picture-card" === a.listType)),
                C = n((() => ({ ...a,
                    fileList: f.value,
                    onStart: v,
                    onProgress: x,
                    onSuccess: k,
                    onError: y,
                    onRemove: b
                })));
            return E((() => {
                f.value.forEach(_)
            })), T(ke, {
                accept: U(a, "accept")
            }), t({
                abort: l,
                submit: o,
                clearFiles: p,
                handleStart: v,
                handleRemove: b
            }), (e, t) => (r(), u("div", null, [m(S) && e.showFileList ? (r(), d(Ee, {
                key: 0,
                disabled: m(s),
                "list-type": e.listType,
                files: m(f),
                crossorigin: e.crossorigin,
                "handle-preview": e.onPreview,
                onRemove: m(b)
            }, $({
                append: c((() => [w(De, O({
                    ref_key: "uploadRef",
                    ref: i
                }, m(C)), {
                    default: c((() => [e.$slots.trigger ? h(e.$slots, "trigger", {
                        key: 0
                    }) : g("v-if", !0), !e.$slots.trigger && e.$slots.default ? h(e.$slots, "default", {
                        key: 1
                    }) : g("v-if", !0)])),
                    _: 3
                }, 16)])),
                _: 2
            }, [e.$slots.file ? {
                name: "default",
                fn: c((({
                    file: t,
                    index: a
                }) => [h(e.$slots, "file", {
                    file: t,
                    index: a
                })]))
            } : void 0]), 1032, ["disabled", "list-type", "files", "crossorigin", "handle-preview", "onRemove"])) : g("v-if", !0), !m(S) || m(S) && !e.showFileList ? (r(), d(De, O({
                key: 1,
                ref_key: "uploadRef",
                ref: i
            }, m(C)), {
                default: c((() => [e.$slots.trigger ? h(e.$slots, "trigger", {
                    key: 0
                }) : g("v-if", !0), !e.$slots.trigger && e.$slots.default ? h(e.$slots, "default", {
                    key: 1
                }) : g("v-if", !0)])),
                _: 3
            }, 16)) : g("v-if", !0), e.$slots.trigger ? h(e.$slots, "default", {
                key: 2
            }) : g("v-if", !0), h(e.$slots, "tip"), !m(S) && e.showFileList ? (r(), d(Ee, {
                key: 3,
                disabled: m(s),
                "list-type": e.listType,
                files: m(f),
                crossorigin: e.crossorigin,
                "handle-preview": e.onPreview,
                onRemove: m(b)
            }, $({
                _: 2
            }, [e.$slots.file ? {
                name: "default",
                fn: c((({
                    file: t,
                    index: a
                }) => [h(e.$slots, "file", {
                    file: t,
                    index: a
                })]))
            } : void 0]), 1032, ["disabled", "list-type", "files", "crossorigin", "handle-preview", "onRemove"])) : g("v-if", !0)]))
        }
    }), [
        ["__file", "upload.vue"]
    ])),
    We = {
        class: "flex text-gray4 head-title items-center"
    },
    Ne = {
        class: "title-input"
    },
    He = {
        class: "dialog-footer"
    },
    Me = i({
        __name: "UserQuestions",
        props: {
            type: {}
        },
        emits: ["close"],
        setup(e, {
            emit: t
        }) {
            const {
                Api: a
            } = A(), s = P(), {
                t: i,
                locale: l
            } = z(), n = t, u = D(), p = o(!0), f = o("");
            K({
                coinDesc: {}
            });
            const v = () => {
                    p.value = !1, n("close")
                },
                y = () => {
                    if (f.value) {
                        const e = new se;
                        e.append("country", f.value), a.changeCountry(e).then((({
                            data: e
                        }) => {
                            500 == e.code ? (u.error(e.message), null != e.total && 1 == e.total && (p.value = !1, s.userData.commonStatus = 1)) : 0 == e.code && (p.value = !1, u.success(i("key-successfully-added")))
                        }))
                    } else u.error(i("enter-coutry"));
                    V((() => {
                        p.value = !0
                    }))
                };
            return (e, t) => {
                const a = N;
                return r(), d(m(le), {
                    modelValue: p.value,
                    "onUpdate:modelValue": t[1] || (t[1] = e => p.value = e),
                    "lock-scroll": "",
                    class: "dialogw",
                    "destroy-on-close": "",
                    onClose: v,
                    onOpen: t[2] || (t[2] = e => {})
                }, {
                    header: c((() => [b("div", We, [t[3] || (t[3] = b("i", {
                        class: "fas fa-cicle"
                    }, null, -1)), B(" " + x(m(i)("pga.country")), 1)])])),
                    footer: c((() => [b("span", He, [w(m(ie), {
                        type: "primary",
                        disabled: "" == f.value,
                        onClick: y
                    }, {
                        default: c((() => [B(x(m(i)("sett.confirm")), 1)])),
                        _: 1
                    }, 8, ["disabled"])])])),
                    default: c((() => [b("div", null, [b("p", Ne, x(m(i)("pga.select-country")), 1), w(a, {
                        modelValue: f.value,
                        "onUpdate:modelValue": t[0] || (t[0] = e => f.value = e)
                    }, null, 8, ["modelValue"])])])),
                    _: 1
                }, 8, ["modelValue"])
            }
        }
    }),
    Xe = {
        class: "account-box is-form is-footerless"
    },
    Ie = {
        class: "form-head-inner"
    },
    Qe = {
        class: "left mt-2"
    },
    Je = {
        key: 1,
        class: "verify-info-card"
    },
    Ye = {
        class: "info-title flex"
    },
    Ge = {
        class: "flex"
    },
    Ze = {
        key: 0,
        src: "/images/icons/dashboard/insurance.svg",
        height: "24",
        width: "24",
        class: "mr-1",
        alt: "Verified"
    },
    et = {
        key: 1,
        src: "/images/icons/dashboard/attention.svg",
        height: "24",
        width: "24",
        class: "mr-1",
        alt: "Unverified"
    },
    tt = {
        class: "card-box"
    },
    at = {
        key: 0,
        class: "info-box first-info"
    },
    st = {
        class: "label"
    },
    it = {
        class: "value"
    },
    lt = {
        class: "label text-center"
    },
    ot = {
        key: 0,
        class: "value text-center"
    },
    nt = {
        key: 1,
        class: "value"
    },
    rt = {
        key: 2,
        class: "info-box"
    },
    dt = {
        class: "label"
    },
    ct = {
        class: "value"
    },
    ut = {
        key: 2,
        class: "hoverCards flex mt-5"
    },
    pt = {
        key: 3,
        class: "hoverCards flex mt-5"
    },
    ft = {
        class: "card card-1"
    },
    vt = {
        class: "btn1S mt-4"
    },
    mt = {
        class: "flex"
    },
    yt = {
        key: 0,
        class: "btn1S mt-4"
    },
    ht = {
        key: 1,
        class: "mt-4"
    },
    gt = {
        class: "colCards"
    },
    bt = {
        class: "flex"
    },
    kt = {
        key: 0,
        class: "btn1S mt-4"
    },
    wt = {
        key: 1,
        class: "mt-4"
    },
    xt = {
        key: 0,
        style: {
            "margin-top": "17px",
            "justify-content": "flex-end"
        },
        class: "flex hoverCards"
    },
    _t = {
        class: "colCards",
        style: {
            width: "400px"
        }
    },
    St = {
        key: 0,
        class: "el-upload__tip text-medium"
    },
    Ct = {
        key: 1,
        style: {
            color: "rgba(146, 203, 90)"
        },
        class: "el-upload__tip"
    },
    jt = {
        style: {
            margin: "17px"
        }
    },
    Ft = he(i({
        __name: "IdentityVerification",
        setup(a) {
            const {
                t: s
            } = z(), i = D(), l = o(!0), {
                Api: f
            } = A(), y = K({
                KycLevels: [{}],
                data: {},
                isStarted: !1,
                withdrawalLimit: 0,
                status: "",
                coin: ""
            }), h = q();
            f.findAllKYCLevels().then((e => {
                const t = e.data;
                0 == t.code && (y.KycLevels = t.data), k()
            }));
            const k = () => {
                    f.getAccountSettings().then((e => {
                        const t = e.data;
                        if (0 == t.code) {
                            y.data = t.data;
                            const e = y.KycLevels.find((e => e.kycStatus == y.data.kycStatus));
                            switch (y.withdrawalLimit = null == e ? void 0 : e.maxWithdraw, y.coin = null == e ? void 0 : e.maxWithdrawCoin, y.data.kycStatus = 2, y.data.kycStatus) {
                                case 0:
                                    y.status = s("sett.unverfied");
                                    break;
                                case 1:
                                    y.status = s("sett.under-review");
                                    break;
                                case 2:
                                    y.status = s("sett.verification-failed"), y.data.kycStatus = 0;
                                    break;
                                case 3:
                                case 6:
                                    y.status = s("sett.successfully-verified");
                                    break;
                                case 4:
                                    y.status = s("depwi.address") + ": " + s("sett.under-review");
                                    break;
                                case 5:
                                    y.status = s("depwi.address") + ": " + s("sett.verification-failed"), y.data.kycStatus = 3
                            }
                            y.isStarted = !0
                        } else i.error(t.message);
                        l.value = !1
                    }))
                },
                {
                    y: _
                } = W(),
                S = o(!1),
                C = o(!1),
                j = o(!1),
                F = n((() => _.value > 30)),
                R = () => {
                    C.value = !0
                },
                L = () => {
                    f.getAccessToken().then((e => {
                        const t = e.data;
                        0 == t.code ? h.isAppOn ? window.ReactNativeWebView.postMessage(JSON.stringify({
                            opzkey: "goToUrl",
                            value: "https://www.opz.com/identity/check.html?token=" + t.data,
                            title: s("sett.identity-verification")
                        })) : window.open("/identity/check.html?token=" + t.data) : i.error(t.message)
                    }))
                },
                E = o(),
                T = () => {
                    E.value.submit()
                },
                U = () => {
                    j.value = !0
                },
                $ = () => {
                    i.error(s("kyc.upload-failed"))
                },
                O = e => e.size > 5e6 || e.size < 1e4 ? (i.error(s("ctm.size-file-must-be")), !1) : ["image/png", "image/jpeg", "application/pdf", "application/vnd.ms-excel", "application/msword"].find((t => t.includes(e.type))) ? void 0 : (i.error(s("ctm.size-file-must-be")), !1),
                P = e => {
                    const t = new FormData;
                    t.append("file", e.file), f.uploadLocation(t).then((e => {
                        var t;
                        const a = e.data;
                        0 == a.code ? (j.value = !0, null == (t = E.value) || t.clearFiles(), y.status = s("depwi.address") + ": " + s("sett.under-review"), y.data.kycStatus = 4) : i.error(a.message)
                    }))
                };
            return (a, i) => {
                var o, n;
                const f = t,
                    k = e;
                return r(), u(p, null, [b("div", Xe, [b("div", {
                    class: v(["form-head stuck-header", [F.value && "is-stuck"]])
                }, [b("div", Ie, [b("div", Qe, [b("h3", null, [i[2] || (i[2] = b("i", {
                    "aria-hidden": "true",
                    class: "fas fa-user-shield"
                }, null, -1)), B(" " + x(m(s)("kyc.kyc")), 1)])])])], 2), b("div", null, [l.value ? (r(), d(f, {
                    key: 0,
                    class: "mx-5 mt-5",
                    height: "85px",
                    width: "10",
                    "mobile-width": "10"
                })) : (r(), u("div", Je, [b("div", Ye, [b("div", Ge, [y.data.kycStatus > 2 ? (r(), u("img", Ze)) : (r(), u("img", et)), B(" " + x(y.status), 1)]), b("div", {
                    class: v(["btn1S ml-3", m(h).isAppOn && "mt-4 mb-4"])
                }, [b("span", null, x(m(s)("sett.24h-withdrawal-limit") + ": " + y.withdrawalLimit + " " + y.coin), 1)], 2)]), b("div", tt, [y.data.realName ? (r(), u("div", at, [b("div", st, x(m(s)("sett.full-name")), 1), b("div", it, x(y.data.realName), 1)])) : g("", !0), y.data.country ? (r(), u("div", {
                    key: 1,
                    class: v(["info-box", !y.data.realName && "first-info"])
                }, [b("div", lt, x(m(s)("sett.country-region")), 1), y.data.country ? (r(), u("div", ot, x(y.data.country), 1)) : (r(), u("div", nt, [w(m(ie), {
                    type: "default",
                    size: "small",
                    round: "",
                    onClick: i[0] || (i[0] = e => {
                        S.value = !0
                    })
                }, {
                    default: c((() => [B(x(m(s)("pga.select-country")), 1)])),
                    _: 1
                })]))], 2)) : g("", !0), y.data.idCard ? (r(), u("div", rt, [b("div", dt, x(m(s)("kyc.id-number")), 1), b("div", ct, x(y.data.idCard), 1)])) : g("", !0)])])), l.value ? (r(), u("div", ut, [b("div", {
                    class: v(["colCards", m(h).isAppOn && "isapp mb-3"])
                }, [w(f, {
                    height: "142px"
                })], 2), b("div", {
                    class: v(["colCards", m(h).isAppOn && "isapp mb-3"])
                }, [w(f, {
                    height: "142px"
                })], 2), b("div", {
                    class: v(["colCards", m(h).isAppOn && "isapp mb-3"])
                }, [w(f, {
                    height: "142px"
                })], 2)])) : (r(), u("div", pt, [b("div", {
                    class: v(["colCards", m(h).isAppOn && "isapp mb-3"])
                }, [b("div", ft, [b("h3", null, x(m(s)("kyc.basic")), 1), b("p", null, [B(x(m(s)("sett.24h-withdrawal-limit") + ": "), 1), b("b", null, x((null == (o = y.KycLevels.find((e => 0 == e.kycStatus))) ? void 0 : o.maxWithdraw) + " " + y.coin), 1)]), i[4] || (i[4] = b("div", {
                    class: "flex"
                }, [b("img", {
                    src: "/images/icons/dashboard/avatar.svg",
                    height: "18",
                    width: "18",
                    class: "mr-1",
                    alt: "Face Recognition"
                }), B(" Personal information ")], -1)), b("div", vt, [b("span", null, [i[3] || (i[3] = b("i", {
                    "aria-hidden": "true",
                    class: "fas fa-check mr-1"
                }, null, -1)), B(x(m(s)("sett.verified")), 1)])])])], 2), b("div", {
                    class: v(["colCards", m(h).isAppOn && "isapp mb-3"])
                }, [b("div", {
                    class: v(["card card-2", [0 == y.data.kycStatus && "start", m(h).isAppOn && "isapp"]])
                }, [b("h3", null, x(m(s)("sett.identity-verification")), 1), b("p", null, [B(x(m(s)("sett.24h-withdrawal-limit") + ": "), 1), b("b", null, x((null == (n = y.KycLevels.find((e => 3 == e.kycStatus))) ? void 0 : n.maxWithdraw) + " " + y.coin), 1)]), b("div", mt, [i[5] || (i[5] = b("img", {
                    src: "/images/icons/dashboard/face-recognition.svg",
                    height: "18",
                    width: "18",
                    class: "mr-1",
                    alt: "Face Recognition"
                }, null, -1)), B(x(m(s)("kyc.face-verification")), 1)]), y.data.kycStatus > 2 ? (r(), u("div", yt, [b("span", null, [i[6] || (i[6] = b("i", {
                    "aria-hidden": "true",
                    class: "fas fa-check mr-1"
                }, null, -1)), B(x(m(s)("sett.verified")), 1)])])) : (r(), u("p", ht, [w(m(ie), {
                    type: "primary",
                    size: "small",
                    round: "",
                    disabled: 0 != y.data.kycStatus,
                    onClick: L
                }, {
                    default: c((() => [B(x(m(s)("kyc.verify-now")), 1)])),
                    _: 1
                }, 8, ["disabled"])]))], 2)], 2), w(m(oe), {
                    placement: "bottom",
                    width: 200,
                    trigger: "hover",
                    "popper-class": "iden-popper",
                    content: m(s)("ctm2.id-verification-first"),
                    disabled: y.data.kycStatus >= 3
                }, {
                    reference: c((() => {
                        var e;
                        return [b("div", gt, [b("div", {
                            class: v(["card card-3", [0 == y.data.kycStatus && "start", m(h).isAppOn && "isapp"]])
                        }, [b("h3", null, x(m(s)("ctm2.advanced")), 1), b("p", null, [B(x(m(s)("sett.24h-withdrawal-limit") + ": "), 1), b("b", null, x((null == (e = y.KycLevels.find((e => 6 == e.kycStatus))) ? void 0 : e.maxWithdraw) + " " + y.coin), 1)]), b("div", bt, [i[7] || (i[7] = b("img", {
                            src: "/images/icons/dashboard/address.svg",
                            height: "18",
                            width: "18",
                            class: "mr-1",
                            alt: "Face Recognition"
                        }, null, -1)), B(" " + x(m(s)("kyc.proof-of-address")), 1)]), y.data.kycStatus > 5 ? (r(), u("div", kt, [b("span", null, [i[8] || (i[8] = b("i", {
                            "aria-hidden": "true",
                            class: "fas fa-check mr-1"
                        }, null, -1)), B(x(m(s)("sett.verified")), 1)])])) : (r(), u("p", wt, [w(m(ie), {
                            type: "primary",
                            size: "small",
                            round: "",
                            disabled: 3 != y.data.kycStatus,
                            onClick: R
                        }, {
                            default: c((() => [B(x(m(s)("kyc.verify-now")), 1)])),
                            _: 1
                        }, 8, ["disabled"])]))], 2)])]
                    })),
                    _: 1
                }, 8, ["content", "disabled"])]))]), C.value ? (r(), u("div", xt, [b("div", _t, [b("div", {
                    class: v(["card card-3", [m(h).isAppOn && "isapp"]]),
                    style: {
                        "background-position-x": "313px"
                    }
                }, [w(m(qe), {
                    ref_key: "uploadRef",
                    ref: E,
                    class: "upload-demo",
                    "thumbnail-mode": "",
                    limit: 3,
                    "before-upload": O,
                    "on-success": U,
                    "on-error": $,
                    accept: "image/png, image/jpeg, application/pdf, application/vnd.ms-excel, application/msword",
                    action: "",
                    "http-request": P,
                    "auto-upload": !1
                }, {
                    trigger: c((() => [w(m(ie), {
                        type: "primary",
                        disabled: y.data.kycStatus > 3
                    }, {
                        default: c((() => [B(x(m(s)("ctm2.select-file")), 1)])),
                        _: 1
                    }, 8, ["disabled"])])),
                    tip: c((() => [j.value ? g("", !0) : (r(), u("div", St, x(m(s)("kyc.proof-of-address")), 1)), j.value ? (r(), u("div", Ct, x(m(s)("kyc.succesfully-uploaded")) + ", " + x(m(s)("kyc.complete-processing-in-days").replace(":days", "1")), 1)) : g("", !0)])),
                    default: c((() => [w(m(ie), {
                        class: "ml-3",
                        type: "success",
                        disabled: y.data.kycStatus > 3,
                        onClick: T
                    }, {
                        default: c((() => [B(x(m(s)("ctm2.upload")), 1)])),
                        _: 1
                    }, 8, ["disabled"])])),
                    _: 1
                }, 512)], 2)])])) : g("", !0), b("div", jt, [w(k, {
                    items: [{
                        title: m(s)("ctm.why-personal-info"),
                        content: m(s)("ctm.why-collect-personal-info")
                    }]
                }, null, 8, ["items"])])]), S.value ? (r(), d(Me, {
                    key: 0,
                    onClose: i[1] || (i[1] = e => {
                        S.value = !1
                    })
                })) : g("", !0)], 64)
            }
        }
    }), [
        ["__scopeId", "data-v-33e476a0"]
    ]),
    Rt = i({
        __name: "identity",
        setup: e => (ge("sett.identity-verification"), (e, t) => {
            const a = Ft;
            return r(), d(a)
        })
    });
export {
    Rt as
    default
};