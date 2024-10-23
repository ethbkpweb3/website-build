import {
    d as e
} from "./dayjs.min-BNm5Luvd.js";
import {
    bh as a,
    H as t,
    eN as l,
    dy as n,
    m as r,
    cW as o,
    be as s,
    Q as u,
    y as i,
    h as d,
    B as c,
    M as v,
    X as p,
    C as m,
    L as f,
    o as h,
    n as y,
    w as b,
    p as g,
    ck as k,
    dj as w,
    cE as D,
    s as x,
    j as S,
    l as C,
    r as M,
    t as P,
    bc as $,
    I as V,
    P as Y,
    cB as _,
    q as O,
    dg as I,
    v as A,
    bw as R,
    dh as N,
    W as B,
    cS as F,
    d9 as L,
    J as E,
    F as T,
    K as W
} from "./index-jdACH0Rc.js";
import {
    X as j,
    b as z,
    d as K,
    j as H,
    Y as U,
    Z,
    E as G,
    _ as q,
    n as Q,
    U as X,
    O as J,
    p as ee,
    m as ae,
    Q as te,
    H as le,
    I as ne,
    S as re,
    w as oe
} from "./index-Dwv4qbXN.js";
import {
    y as se,
    j as ue,
    k as ie,
    P as de,
    E as ce,
    l as ve,
    Q as pe,
    R as me,
    A as fe
} from "./index-Citk0ABi.js";
import {
    i as he,
    B as ye,
    u as be,
    b as ge,
    y as ke,
    z as we,
    d as De,
    n as xe,
    E as Se
} from "./index-D4R9Vjdp.js";
import {
    E as Ce
} from "./index-CYOIannN.js";
import {
    E as Me
} from "./index-DBFvTDaE.js";
import {
    v as Pe
} from "./index-DyCSbSlA.js";
const $e = e => e || 0 === e ? Array.isArray(e) ? e : [e] : [];
var Ve = {
    exports: {}
};
Ve.exports = function() {
    var e = {
            LTS: "h:mm:ss A",
            LT: "h:mm A",
            L: "MM/DD/YYYY",
            LL: "MMMM D, YYYY",
            LLL: "MMMM D, YYYY h:mm A",
            LLLL: "dddd, MMMM D, YYYY h:mm A"
        },
        a = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,
        t = /\d/,
        l = /\d\d/,
        n = /\d\d?/,
        r = /\d*[^-_:/,()\s\d]+/,
        o = {},
        s = function(e) {
            return (e = +e) + (e > 68 ? 1900 : 2e3)
        },
        u = function(e) {
            return function(a) {
                this[e] = +a
            }
        },
        i = [/[+-]\d\d:?(\d\d)?|Z/, function(e) {
            (this.zone || (this.zone = {})).offset = function(e) {
                if (!e) return 0;
                if ("Z" === e) return 0;
                var a = e.match(/([+-]|\d\d)/g),
                    t = 60 * a[1] + (+a[2] || 0);
                return 0 === t ? 0 : "+" === a[0] ? -t : t
            }(e)
        }],
        d = function(e) {
            var a = o[e];
            return a && (a.indexOf ? a : a.s.concat(a.f))
        },
        c = function(e, a) {
            var t, l = o.meridiem;
            if (l) {
                for (var n = 1; n <= 24; n += 1)
                    if (e.indexOf(l(n, 0, a)) > -1) {
                        t = n > 12;
                        break
                    }
            } else t = e === (a ? "pm" : "PM");
            return t
        },
        v = {
            A: [r, function(e) {
                this.afternoon = c(e, !1)
            }],
            a: [r, function(e) {
                this.afternoon = c(e, !0)
            }],
            Q: [t, function(e) {
                this.month = 3 * (e - 1) + 1
            }],
            S: [t, function(e) {
                this.milliseconds = 100 * +e
            }],
            SS: [l, function(e) {
                this.milliseconds = 10 * +e
            }],
            SSS: [/\d{3}/, function(e) {
                this.milliseconds = +e
            }],
            s: [n, u("seconds")],
            ss: [n, u("seconds")],
            m: [n, u("minutes")],
            mm: [n, u("minutes")],
            H: [n, u("hours")],
            h: [n, u("hours")],
            HH: [n, u("hours")],
            hh: [n, u("hours")],
            D: [n, u("day")],
            DD: [l, u("day")],
            Do: [r, function(e) {
                var a = o.ordinal,
                    t = e.match(/\d+/);
                if (this.day = t[0], a)
                    for (var l = 1; l <= 31; l += 1) a(l).replace(/\[|\]/g, "") === e && (this.day = l)
            }],
            w: [n, u("week")],
            ww: [l, u("week")],
            M: [n, u("month")],
            MM: [l, u("month")],
            MMM: [r, function(e) {
                var a = d("months"),
                    t = (d("monthsShort") || a.map((function(e) {
                        return e.slice(0, 3)
                    }))).indexOf(e) + 1;
                if (t < 1) throw new Error;
                this.month = t % 12 || t
            }],
            MMMM: [r, function(e) {
                var a = d("months").indexOf(e) + 1;
                if (a < 1) throw new Error;
                this.month = a % 12 || a
            }],
            Y: [/[+-]?\d+/, u("year")],
            YY: [l, function(e) {
                this.year = s(e)
            }],
            YYYY: [/\d{4}/, u("year")],
            Z: i,
            ZZ: i
        };

    function p(t) {
        var l, n;
        l = t, n = o && o.formats;
        for (var r = (t = l.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, (function(a, t, l) {
                var r = l && l.toUpperCase();
                return t || n[l] || e[l] || n[r].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, (function(e, a, t) {
                    return a || t.slice(1)
                }))
            }))).match(a), s = r.length, u = 0; u < s; u += 1) {
            var i = r[u],
                d = v[i],
                c = d && d[0],
                p = d && d[1];
            r[u] = p ? {
                regex: c,
                parser: p
            } : i.replace(/^\[|\]$/g, "")
        }
        return function(e) {
            for (var a = {}, t = 0, l = 0; t < s; t += 1) {
                var n = r[t];
                if ("string" == typeof n) l += n.length;
                else {
                    var o = n.regex,
                        u = n.parser,
                        i = e.slice(l),
                        d = o.exec(i)[0];
                    u.call(a, d), e = e.replace(d, "")
                }
            }
            return function(e) {
                var a = e.afternoon;
                if (void 0 !== a) {
                    var t = e.hours;
                    a ? t < 12 && (e.hours += 12) : 12 === t && (e.hours = 0), delete e.afternoon
                }
            }(a), a
        }
    }
    return function(e, a, t) {
        t.p.customParseFormat = !0, e && e.parseTwoDigitYear && (s = e.parseTwoDigitYear);
        var l = a.prototype,
            n = l.parse;
        l.parse = function(e) {
            var a = e.date,
                l = e.utc,
                r = e.args;
            this.$u = l;
            var s = r[1];
            if ("string" == typeof s) {
                var u = !0 === r[2],
                    i = !0 === r[3],
                    d = u || i,
                    c = r[2];
                i && (c = r[2]), o = this.$locale(), !u && c && (o = t.Ls[c]), this.$d = function(e, a, t, l) {
                    try {
                        if (["x", "X"].indexOf(a) > -1) return new Date(("X" === a ? 1e3 : 1) * e);
                        var n = p(a)(e),
                            r = n.year,
                            o = n.month,
                            s = n.day,
                            u = n.hours,
                            i = n.minutes,
                            d = n.seconds,
                            c = n.milliseconds,
                            v = n.zone,
                            m = n.week,
                            f = new Date,
                            h = s || (r || o ? 1 : f.getDate()),
                            y = r || f.getFullYear(),
                            b = 0;
                        r && !o || (b = o > 0 ? o - 1 : f.getMonth());
                        var g, k = u || 0,
                            w = i || 0,
                            D = d || 0,
                            x = c || 0;
                        return v ? new Date(Date.UTC(y, b, h, k, w, D, x + 60 * v.offset * 1e3)) : t ? new Date(Date.UTC(y, b, h, k, w, D, x)) : (g = new Date(y, b, h, k, w, D, x), m && (g = l(g).week(m).toDate()), g)
                    } catch (S) {
                        return new Date("")
                    }
                }(a, s, l, t), this.init(), c && !0 !== c && (this.$L = this.locale(c).$L), d && a != this.format(s) && (this.$d = new Date("")), o = {}
            } else if (s instanceof Array)
                for (var v = s.length, m = 1; m <= v; m += 1) {
                    r[1] = s[m - 1];
                    var f = t.apply(this, r);
                    if (f.isValid()) {
                        this.$d = f.$d, this.$L = f.$L, this.init();
                        break
                    }
                    m === v && (this.$d = new Date(""))
                } else n.call(this, e)
        }
    }
}();
const Ye = t(Ve.exports),
    _e = ["hours", "minutes", "seconds"],
    Oe = "HH:mm:ss",
    Ie = "YYYY-MM-DD",
    Ae = {
        date: Ie,
        dates: Ie,
        week: "gggg[w]ww",
        year: "YYYY",
        years: "YYYY",
        month: "YYYY-MM",
        months: "YYYY-MM",
        datetime: `${Ie} ${Oe}`,
        monthrange: "YYYY-MM",
        yearrange: "YYYY",
        daterange: Ie,
        datetimerange: `${Ie} ${Oe}`
    },
    Re = (e, a) => [e > 0 ? e - 1 : void 0, e, e < a ? e + 1 : void 0],
    Ne = e => Array.from(Array.from({
        length: e
    }).keys()),
    Be = e => e.replace(/\W?m{1,2}|\W?ZZ/g, "").replace(/\W?h{1,2}|\W?s{1,3}|\W?a/gi, "").trim(),
    Fe = e => e.replace(/\W?D{1,2}|\W?Do|\W?d{1,4}|\W?M{1,4}|\W?Y{2,4}/g, "").trim(),
    Le = function(e, a) {
        const t = l(e),
            n = l(a);
        return t && n ? e.getTime() === a.getTime() : !t && !n && e === a
    },
    Ee = function(e, a) {
        const t = n(e),
            l = n(a);
        return t && l ? e.length === a.length && e.every(((e, t) => Le(e, a[t]))) : !t && !l && Le(e, a)
    },
    Te = function(a, t, l) {
        const n = j(t) || "x" === t ? e(a).locale(l) : e(a, t).locale(l);
        return n.isValid() ? n : void 0
    },
    We = function(a, t, l) {
        return j(t) ? a : "x" === t ? +a : e(a).locale(l).format(t)
    },
    je = (e, a) => {
        var t;
        const l = [],
            n = null == a ? void 0 : a();
        for (let r = 0; r < e; r++) l.push(null != (t = null == n ? void 0 : n.includes(r)) && t);
        return l
    },
    ze = z({
        disabledHours: {
            type: K(Function)
        },
        disabledMinutes: {
            type: K(Function)
        },
        disabledSeconds: {
            type: K(Function)
        }
    }),
    Ke = z({
        visible: Boolean,
        actualVisible: {
            type: Boolean,
            default: void 0
        },
        format: {
            type: String,
            default: ""
        }
    }),
    He = z({
        id: {
            type: K([Array, String])
        },
        name: {
            type: K([Array, String]),
            default: ""
        },
        popperClass: {
            type: String,
            default: ""
        },
        format: String,
        valueFormat: String,
        dateFormat: String,
        timeFormat: String,
        type: {
            type: String,
            default: ""
        },
        clearable: {
            type: Boolean,
            default: !0
        },
        clearIcon: {
            type: K([String, Object]),
            default: H
        },
        editable: {
            type: Boolean,
            default: !0
        },
        prefixIcon: {
            type: K([String, Object]),
            default: ""
        },
        size: he,
        readonly: Boolean,
        disabled: Boolean,
        placeholder: {
            type: String,
            default: ""
        },
        popperOptions: {
            type: K(Object),
            default: () => ({})
        },
        modelValue: {
            type: K([Date, Array, String, Number]),
            default: ""
        },
        rangeSeparator: {
            type: String,
            default: "-"
        },
        startPlaceholder: String,
        endPlaceholder: String,
        defaultValue: {
            type: K([Date, Array])
        },
        defaultTime: {
            type: K([Date, Array])
        },
        isRange: Boolean,
        ...ze,
        disabledDate: {
            type: Function
        },
        cellClassName: {
            type: Function
        },
        shortcuts: {
            type: Array,
            default: () => []
        },
        arrowControl: Boolean,
        tabindex: {
            type: K([String, Number]),
            default: 0
        },
        validateEvent: {
            type: Boolean,
            default: !0
        },
        unlinkPanels: Boolean,
        placement: {
            type: K(String),
            values: se,
            default: "bottom"
        },
        fallbackPlacements: {
            type: K(Array),
            default: ["bottom", "top", "right", "left"]
        },
        ...ye,
        ...ue(["ariaLabel"])
    }),
    Ue = r({
        name: "Picker"
    }),
    Ze = r({ ...Ue,
        props: He,
        emits: ["update:modelValue", "change", "focus", "blur", "clear", "calendar-change", "panel-change", "visible-change", "keydown"],
        setup(e, {
            expose: a,
            emit: t
        }) {
            const l = e,
                r = o(),
                {
                    lang: V
                } = be(),
                Y = s("date"),
                _ = s("input"),
                O = s("range"),
                {
                    form: I,
                    formItem: A
                } = ge(),
                R = u("ElPopperOptions", {}),
                {
                    valueOnClear: N
                } = ke(l, null),
                B = i(),
                F = i(),
                L = i(!1),
                E = i(!1),
                T = i(null);
            let W = !1,
                j = !1;
            const z = d((() => [Y.b("editor"), Y.bm("editor", l.type), _.e("wrapper"), Y.is("disabled", ue.value), Y.is("active", L.value), O.b("editor"), Re ? O.bm("editor", Re.value) : "", r.class])),
                K = d((() => [_.e("icon"), O.e("close-icon"), Pe.value ? "" : O.e("close-icon--hidden")]));
            c(L, (e => {
                e ? v((() => {
                    e && (T.value = l.modelValue)
                })) : (Le.value = null, v((() => {
                    H(l.modelValue)
                })))
            }));
            const H = (e, a) => {
                    !a && Ee(e, T.value) || (t("change", e), l.validateEvent && (null == A || A.validate("change").catch((e => ie()))))
                },
                q = e => {
                    if (!Ee(l.modelValue, e)) {
                        let a;
                        n(e) ? a = e.map((e => We(e, l.valueFormat, V.value))) : e && (a = We(e, l.valueFormat, V.value)), t("update:modelValue", e ? a : e, V.value)
                    }
                },
                Q = d((() => {
                    if (F.value) {
                        const e = Ae.value ? F.value : F.value.$el;
                        return Array.from(e.querySelectorAll("input"))
                    }
                    return []
                })),
                X = (e, a, t) => {
                    const l = Q.value;
                    l.length && (t && "min" !== t ? "max" === t && (l[1].setSelectionRange(e, a), l[1].focus()) : (l[0].setSelectionRange(e, a), l[0].focus()))
                },
                J = (e = "", a = !1) => {
                    let t;
                    a || (j = !0), L.value = a, t = n(e) ? e.map((e => e.toDate())) : e ? e.toDate() : e, Le.value = null, q(t)
                },
                ee = () => {
                    E.value = !0
                },
                ae = () => {
                    t("visible-change", !0)
                },
                te = e => {
                    (null == e ? void 0 : e.key) === ve.esc && ne(!0, !0)
                },
                le = () => {
                    E.value = !1, L.value = !1, j = !1, t("visible-change", !1)
                },
                ne = (e = !0, a = !1) => {
                    j = a;
                    const [t, l] = p(Q);
                    let n = t;
                    !e && Ae.value && (n = l), n && n.focus()
                },
                re = e => {
                    l.readonly || ue.value || L.value || j || (L.value = !0, t("focus", e))
                };
            let oe;
            const se = e => {
                    const a = async () => {
                        setTimeout((() => {
                            var n;
                            oe === a && ((null == (n = B.value) ? void 0 : n.isFocusInsideContent()) && !W || 0 !== Q.value.filter((e => e.contains(document.activeElement))).length || (je(), L.value = !1, t("blur", e), l.validateEvent && (null == A || A.validate("blur").catch((e => ie())))), W = !1)
                        }), 0)
                    };
                    oe = a, a()
                },
                ue = d((() => l.disabled || (null == I ? void 0 : I.disabled))),
                pe = d((() => {
                    let e;
                    if (Ve.value ? Je.value.getDefaultValue && (e = Je.value.getDefaultValue()) : e = n(l.modelValue) ? l.modelValue.map((e => Te(e, l.valueFormat, V.value))) : Te(l.modelValue, l.valueFormat, V.value), Je.value.getRangeAvailableTime) {
                        const a = Je.value.getRangeAvailableTime(e);
                        we(a, e) || (e = a, Ve.value || q(n(e) ? e.map((e => e.toDate())) : e.toDate()))
                    }
                    return n(e) && e.some((e => !e)) && (e = []), e
                })),
                me = d((() => {
                    if (!Je.value.panelReady) return "";
                    const e = Ke(pe.value);
                    return n(Le.value) ? [Le.value[0] || e && e[0] || "", Le.value[1] || e && e[1] || ""] : null !== Le.value ? Le.value : !he.value && Ve.value || !L.value && Ve.value ? "" : e ? ye.value || xe.value || Se.value ? e.join(", ") : e : ""
                })),
                fe = d((() => l.type.includes("time"))),
                he = d((() => l.type.startsWith("time"))),
                ye = d((() => "dates" === l.type)),
                xe = d((() => "months" === l.type)),
                Se = d((() => "years" === l.type)),
                Ce = d((() => l.prefixIcon || (fe.value ? U : Z))),
                Pe = i(!1),
                $e = e => {
                    l.readonly || ue.value || (Pe.value && (e.stopPropagation(), ne(!0, !0), v((() => {
                        j = !1
                    })), Je.value.handleClear ? Je.value.handleClear() : q(N.value), H(N.value, !0), Pe.value = !1, le()), t("clear"))
                },
                Ve = d((() => {
                    const {
                        modelValue: e
                    } = l;
                    return !e || n(e) && !e.filter(Boolean).length
                })),
                Ye = async e => {
                    var a;
                    l.readonly || ue.value || ("INPUT" !== (null == (a = e.target) ? void 0 : a.tagName) || Q.value.includes(document.activeElement)) && (L.value = !0)
                },
                _e = () => {
                    l.readonly || ue.value || !Ve.value && l.clearable && (Pe.value = !0)
                },
                Oe = () => {
                    Pe.value = !1
                },
                Ie = e => {
                    var a;
                    l.readonly || ue.value || ("INPUT" !== (null == (a = e.touches[0].target) ? void 0 : a.tagName) || Q.value.includes(document.activeElement)) && (L.value = !0)
                },
                Ae = d((() => l.type.includes("range"))),
                Re = De(),
                Ne = d((() => {
                    var e, a;
                    return null == (a = null == (e = p(B)) ? void 0 : e.popperRef) ? void 0 : a.contentRef
                })),
                Be = d((() => {
                    var e;
                    return p(Ae) ? p(F) : null == (e = p(F)) ? void 0 : e.$el
                })),
                Fe = de(Be, (e => {
                    const a = p(Ne),
                        t = p(Be);
                    a && (e.target === a || e.composedPath().includes(a)) || e.target === t || e.composedPath().includes(t) || (L.value = !1)
                }));
            m((() => {
                null == Fe || Fe()
            }));
            const Le = i(null),
                je = () => {
                    if (Le.value) {
                        const e = ze(me.value);
                        e && He(e) && (q(n(e) ? e.map((e => e.toDate())) : e.toDate()), Le.value = null)
                    }
                    "" === Le.value && (q(N.value), H(N.value), Le.value = null)
                },
                ze = e => e ? Je.value.parseUserInput(e) : null,
                Ke = e => e ? Je.value.formatToString(e) : null,
                He = e => Je.value.isValidValue(e),
                Ue = async e => {
                    if (l.readonly || ue.value) return;
                    const {
                        code: a
                    } = e;
                    if (t("keydown", e), a !== ve.esc)
                        if (a === ve.down && (Je.value.handleFocusPicker && (e.preventDefault(), e.stopPropagation()), !1 === L.value && (L.value = !0, await v()), Je.value.handleFocusPicker)) Je.value.handleFocusPicker();
                        else {
                            if (a !== ve.tab) return a === ve.enter || a === ve.numpadEnter ? ((null === Le.value || "" === Le.value || He(ze(me.value))) && (je(), L.value = !1), void e.stopPropagation()) : void(Le.value ? e.stopPropagation() : Je.value.handleKeydownInput && Je.value.handleKeydownInput(e));
                            W = !0
                        }
                    else !0 === L.value && (L.value = !1, e.preventDefault(), e.stopPropagation())
                },
                Ze = e => {
                    Le.value = e, L.value || (L.value = !0)
                },
                Ge = e => {
                    const a = e.target;
                    Le.value ? Le.value = [a.value, Le.value[1]] : Le.value = [a.value, null]
                },
                qe = e => {
                    const a = e.target;
                    Le.value ? Le.value = [Le.value[0], a.value] : Le.value = [null, a.value]
                },
                Qe = () => {
                    var e;
                    const a = Le.value,
                        t = ze(a && a[0]),
                        l = p(pe);
                    if (t && t.isValid()) {
                        Le.value = [Ke(t), (null == (e = me.value) ? void 0 : e[1]) || null];
                        const a = [t, l && (l[1] || null)];
                        He(a) && (q(a), Le.value = null)
                    }
                },
                Xe = () => {
                    var e;
                    const a = p(Le),
                        t = ze(a && a[1]),
                        l = p(pe);
                    if (t && t.isValid()) {
                        Le.value = [(null == (e = p(me)) ? void 0 : e[0]) || null, Ke(t)];
                        const a = [l && l[0], t];
                        He(a) && (q(a), Le.value = null)
                    }
                },
                Je = i({}),
                ea = e => {
                    Je.value[e[0]] = e[1], Je.value.panelReady = !0
                },
                aa = e => {
                    t("calendar-change", e)
                },
                ta = (e, a, l) => {
                    t("panel-change", e, a, l)
                };
            return f("EP_PICKER_BASE", {
                props: l
            }), a({
                focus: ne,
                handleFocusInput: re,
                handleBlurInput: se,
                handleOpen: () => {
                    L.value = !0
                },
                handleClose: () => {
                    L.value = !1
                },
                onPick: J
            }), (e, a) => (h(), y(p(ce), $({
                ref_key: "refPopper",
                ref: B,
                visible: L.value,
                effect: "light",
                pure: "",
                trigger: "click"
            }, e.$attrs, {
                role: "dialog",
                teleported: "",
                transition: `${p(Y).namespace.value}-zoom-in-top`,
                "popper-class": [`${p(Y).namespace.value}-picker__popper`, e.popperClass],
                "popper-options": p(R),
                "fallback-placements": e.fallbackPlacements,
                "gpu-acceleration": !1,
                placement: e.placement,
                "stop-popper-mouse-event": !1,
                "hide-after": 0,
                persistent: "",
                onBeforeShow: ee,
                onShow: ae,
                onHide: le
            }), {
                default: b((() => [p(Ae) ? (h(), S("div", {
                    key: 1,
                    ref_key: "inputRef",
                    ref: F,
                    class: g(p(z)),
                    style: k(e.$attrs.style),
                    onClick: re,
                    onMouseenter: _e,
                    onMouseleave: Oe,
                    onTouchstartPassive: Ie,
                    onKeydown: Ue
                }, [p(Ce) ? (h(), y(p(G), {
                    key: 0,
                    class: g([p(_).e("icon"), p(O).e("icon")]),
                    onMousedown: w(Ye, ["prevent"]),
                    onTouchstartPassive: Ie
                }, {
                    default: b((() => [(h(), y(D(p(Ce))))])),
                    _: 1
                }, 8, ["class", "onMousedown"])) : x("v-if", !0), C("input", {
                    id: e.id && e.id[0],
                    autocomplete: "off",
                    name: e.name && e.name[0],
                    placeholder: e.startPlaceholder,
                    value: p(me) && p(me)[0],
                    disabled: p(ue),
                    readonly: !e.editable || e.readonly,
                    class: g(p(O).b("input")),
                    onMousedown: Ye,
                    onInput: Ge,
                    onChange: Qe,
                    onFocus: re,
                    onBlur: se
                }, null, 42, ["id", "name", "placeholder", "value", "disabled", "readonly"]), M(e.$slots, "range-separator", {}, (() => [C("span", {
                    class: g(p(O).b("separator"))
                }, P(e.rangeSeparator), 3)])), C("input", {
                    id: e.id && e.id[1],
                    autocomplete: "off",
                    name: e.name && e.name[1],
                    placeholder: e.endPlaceholder,
                    value: p(me) && p(me)[1],
                    disabled: p(ue),
                    readonly: !e.editable || e.readonly,
                    class: g(p(O).b("input")),
                    onMousedown: Ye,
                    onFocus: re,
                    onBlur: se,
                    onInput: qe,
                    onChange: Xe
                }, null, 42, ["id", "name", "placeholder", "value", "disabled", "readonly"]), e.clearIcon ? (h(), y(p(G), {
                    key: 1,
                    class: g(p(K)),
                    onClick: $e
                }, {
                    default: b((() => [(h(), y(D(e.clearIcon)))])),
                    _: 1
                }, 8, ["class"])) : x("v-if", !0)], 38)) : (h(), y(p(Me), {
                    key: 0,
                    id: e.id,
                    ref_key: "inputRef",
                    ref: F,
                    "container-role": "combobox",
                    "model-value": p(me),
                    name: e.name,
                    size: p(Re),
                    disabled: p(ue),
                    placeholder: e.placeholder,
                    class: g([p(Y).b("editor"), p(Y).bm("editor", e.type), e.$attrs.class]),
                    style: k(e.$attrs.style),
                    readonly: !e.editable || e.readonly || p(ye) || p(xe) || p(Se) || "week" === e.type,
                    "aria-label": e.ariaLabel,
                    tabindex: e.tabindex,
                    "validate-event": !1,
                    onInput: Ze,
                    onFocus: re,
                    onBlur: se,
                    onKeydown: Ue,
                    onChange: je,
                    onMousedown: Ye,
                    onMouseenter: _e,
                    onMouseleave: Oe,
                    onTouchstartPassive: Ie,
                    onClick: w((() => {}), ["stop"])
                }, {
                    prefix: b((() => [p(Ce) ? (h(), y(p(G), {
                        key: 0,
                        class: g(p(_).e("icon")),
                        onMousedown: w(Ye, ["prevent"]),
                        onTouchstartPassive: Ie
                    }, {
                        default: b((() => [(h(), y(D(p(Ce))))])),
                        _: 1
                    }, 8, ["class", "onMousedown"])) : x("v-if", !0)])),
                    suffix: b((() => [Pe.value && e.clearIcon ? (h(), y(p(G), {
                        key: 0,
                        class: g(`${p(_).e("icon")} clear-icon`),
                        onClick: w($e, ["stop"])
                    }, {
                        default: b((() => [(h(), y(D(e.clearIcon)))])),
                        _: 1
                    }, 8, ["class", "onClick"])) : x("v-if", !0)])),
                    _: 1
                }, 8, ["id", "model-value", "name", "size", "disabled", "placeholder", "class", "style", "readonly", "aria-label", "tabindex", "onKeydown", "onClick"]))])),
                content: b((() => [M(e.$slots, "default", {
                    visible: L.value,
                    actualVisible: E.value,
                    parsedValue: p(pe),
                    format: e.format,
                    dateFormat: e.dateFormat,
                    timeFormat: e.timeFormat,
                    unlinkPanels: e.unlinkPanels,
                    type: e.type,
                    defaultValue: e.defaultValue,
                    onPick: J,
                    onSelectRange: X,
                    onSetPickerOption: ea,
                    onCalendarChange: aa,
                    onPanelChange: ta,
                    onKeydown: te,
                    onMousedown: w((() => {}), ["stop"])
                })])),
                _: 3
            }, 16, ["visible", "transition", "popper-class", "popper-options", "fallback-placements", "placement"]))
        }
    });
var Ge = q(Ze, [
    ["__file", "picker.vue"]
]);
const qe = z({ ...Ke,
        datetimeRole: String,
        parsedValue: {
            type: K(Object)
        }
    }),
    Qe = e => e.map(((e, a) => e || a)).filter((e => !0 !== e)),
    Xe = (e, a, t) => ({
        getHoursList: (a, t) => je(24, e && (() => null == e ? void 0 : e(a, t))),
        getMinutesList: (e, t, l) => je(60, a && (() => null == a ? void 0 : a(e, t, l))),
        getSecondsList: (e, a, l, n) => je(60, t && (() => null == t ? void 0 : t(e, a, l, n)))
    });
var Je = q(r({
    __name: "basic-time-spinner",
    props: z({
        role: {
            type: String,
            required: !0
        },
        spinnerDate: {
            type: K(Object),
            required: !0
        },
        showSeconds: {
            type: Boolean,
            default: !0
        },
        arrowControl: Boolean,
        amPmMode: {
            type: K(String),
            default: ""
        },
        ...ze
    }),
    emits: ["change", "select-range", "set-option"],
    setup(e, {
        emit: a
    }) {
        const t = e,
            l = s("time"),
            {
                getHoursList: n,
                getMinutesList: r,
                getSecondsList: o
            } = Xe(t.disabledHours, t.disabledMinutes, t.disabledSeconds);
        let u = !1;
        const m = i(),
            f = {
                hours: i(),
                minutes: i(),
                seconds: i()
            },
            k = d((() => t.showSeconds ? _e : _e.slice(0, 2))),
            w = d((() => {
                const {
                    spinnerDate: e
                } = t;
                return {
                    hours: e.hour(),
                    minutes: e.minute(),
                    seconds: e.second()
                }
            })),
            D = d((() => {
                const {
                    hours: e,
                    minutes: a
                } = p(w);
                return {
                    hours: n(t.role),
                    minutes: r(e, t.role),
                    seconds: o(e, a, t.role)
                }
            })),
            M = d((() => {
                const {
                    hours: e,
                    minutes: a,
                    seconds: t
                } = p(w);
                return {
                    hours: Re(e, 23),
                    minutes: Re(a, 59),
                    seconds: Re(t, 59)
                }
            })),
            $ = xe((e => {
                u = !1, B(e)
            }), 200),
            R = e => {
                if (!!!t.amPmMode) return "";
                let a = e < 12 ? " am" : " pm";
                return "A" === t.amPmMode && (a = a.toUpperCase()), a
            },
            N = e => {
                let t;
                switch (e) {
                    case "hours":
                        t = [0, 2];
                        break;
                    case "minutes":
                        t = [3, 5];
                        break;
                    case "seconds":
                        t = [6, 8]
                }
                const [l, n] = t;
                a("select-range", l, n), m.value = e
            },
            B = e => {
                E(e, p(w)[e])
            },
            F = () => {
                B("hours"), B("minutes"), B("seconds")
            },
            L = e => e.querySelector(`.${l.namespace.value}-scrollbar__wrap`),
            E = (e, a) => {
                if (t.arrowControl) return;
                const l = p(f[e]);
                l && l.$el && (L(l.$el).scrollTop = Math.max(0, a * T(e)))
            },
            T = e => {
                const a = p(f[e]),
                    t = null == a ? void 0 : a.$el.querySelector("li");
                return t && Number.parseFloat(Q(t, "height")) || 0
            },
            W = () => {
                z(1)
            },
            j = () => {
                z(-1)
            },
            z = e => {
                m.value || N("hours");
                const a = m.value,
                    t = p(w)[a],
                    l = "hours" === m.value ? 24 : 60,
                    n = K(a, t, e, l);
                H(a, n), E(a, n), v((() => N(a)))
            },
            K = (e, a, t, l) => {
                let n = (a + t + l) % l;
                const r = p(D)[e];
                for (; r[n] && n !== a;) n = (n + t + l) % l;
                return n
            },
            H = (e, l) => {
                if (p(D)[e][l]) return;
                const {
                    hours: n,
                    minutes: r,
                    seconds: o
                } = p(w);
                let s;
                switch (e) {
                    case "hours":
                        s = t.spinnerDate.hour(l).minute(r).second(o);
                        break;
                    case "minutes":
                        s = t.spinnerDate.hour(n).minute(l).second(o);
                        break;
                    case "seconds":
                        s = t.spinnerDate.hour(n).minute(r).second(l)
                }
                a("change", s)
            },
            U = e => p(f[e]).$el.offsetHeight,
            Z = () => {
                const e = e => {
                    const a = p(f[e]);
                    a && a.$el && (L(a.$el).onscroll = () => {
                        (e => {
                            u = !0, $(e);
                            const a = Math.min(Math.round((L(p(f[e]).$el).scrollTop - (.5 * U(e) - 10) / T(e) + 3) / T(e)), "hours" === e ? 23 : 59);
                            H(e, a)
                        })(e)
                    })
                };
                e("hours"), e("minutes"), e("seconds")
            };
        V((() => {
            v((() => {
                !t.arrowControl && Z(), F(), "start" === t.role && N("hours")
            }))
        }));
        return a("set-option", [`${t.role}_scrollDown`, z]), a("set-option", [`${t.role}_emitSelectRange`, N]), c((() => t.spinnerDate), (() => {
            u || F()
        })), (e, a) => (h(), S("div", {
            class: g([p(l).b("spinner"), {
                "has-seconds": e.showSeconds
            }])
        }, [e.arrowControl ? x("v-if", !0) : (h(!0), S(Y, {
            key: 0
        }, _(p(k), (a => (h(), y(p(Se), {
            key: a,
            ref_for: !0,
            ref: e => ((e, a) => {
                f[a].value = e
            })(e, a),
            class: g(p(l).be("spinner", "wrapper")),
            "wrap-style": "max-height: inherit;",
            "view-class": p(l).be("spinner", "list"),
            noresize: "",
            tag: "ul",
            onMouseenter: e => N(a),
            onMousemove: e => B(a)
        }, {
            default: b((() => [(h(!0), S(Y, null, _(p(D)[a], ((t, n) => (h(), S("li", {
                key: n,
                class: g([p(l).be("spinner", "item"), p(l).is("active", n === p(w)[a]), p(l).is("disabled", t)]),
                onClick: e => ((e, {
                    value: a,
                    disabled: t
                }) => {
                    t || (H(e, a), N(e), E(e, a))
                })(a, {
                    value: n,
                    disabled: t
                })
            }, ["hours" === a ? (h(), S(Y, {
                key: 0
            }, [O(P(("0" + (e.amPmMode ? n % 12 || 12 : n)).slice(-2)) + P(R(n)), 1)], 64)) : (h(), S(Y, {
                key: 1
            }, [O(P(("0" + n).slice(-2)), 1)], 64))], 10, ["onClick"])))), 128))])),
            _: 2
        }, 1032, ["class", "view-class", "onMouseenter", "onMousemove"])))), 128)), e.arrowControl ? (h(!0), S(Y, {
            key: 1
        }, _(p(k), (a => (h(), S("div", {
            key: a,
            class: g([p(l).be("spinner", "wrapper"), p(l).is("arrow")]),
            onMouseenter: e => N(a)
        }, [I((h(), y(p(G), {
            class: g(["arrow-up", p(l).be("spinner", "arrow")])
        }, {
            default: b((() => [A(p(X))])),
            _: 1
        }, 8, ["class"])), [
            [p(Pe), j]
        ]), I((h(), y(p(G), {
            class: g(["arrow-down", p(l).be("spinner", "arrow")])
        }, {
            default: b((() => [A(p(J))])),
            _: 1
        }, 8, ["class"])), [
            [p(Pe), W]
        ]), C("ul", {
            class: g(p(l).be("spinner", "list"))
        }, [(h(!0), S(Y, null, _(p(M)[a], ((t, n) => (h(), S("li", {
            key: n,
            class: g([p(l).be("spinner", "item"), p(l).is("active", t === p(w)[a]), p(l).is("disabled", p(D)[a][t])])
        }, ["number" == typeof t ? (h(), S(Y, {
            key: 0
        }, ["hours" === a ? (h(), S(Y, {
            key: 0
        }, [O(P(("0" + (e.amPmMode ? t % 12 || 12 : t)).slice(-2)) + P(R(t)), 1)], 64)) : (h(), S(Y, {
            key: 1
        }, [O(P(("0" + t).slice(-2)), 1)], 64))], 64)) : x("v-if", !0)], 2)))), 128))], 2)], 42, ["onMouseenter"])))), 128)) : x("v-if", !0)], 2))
    }
}), [
    ["__file", "basic-time-spinner.vue"]
]);
const ea = r({
    __name: "panel-time-pick",
    props: qe,
    emits: ["pick", "select-range", "set-picker-option"],
    setup(a, {
        emit: t
    }) {
        const l = a,
            n = u("EP_PICKER_BASE"),
            {
                arrowControl: r,
                disabledHours: o,
                disabledMinutes: v,
                disabledSeconds: m,
                defaultValue: f
            } = n.props,
            {
                getAvailableHours: k,
                getAvailableMinutes: w,
                getAvailableSeconds: D
            } = ((e, a, t) => {
                const {
                    getHoursList: l,
                    getMinutesList: n,
                    getSecondsList: r
                } = Xe(e, a, t);
                return {
                    getAvailableHours: (e, a) => Qe(l(e, a)),
                    getAvailableMinutes: (e, a, t) => Qe(n(e, a, t)),
                    getAvailableSeconds: (e, a, t, l) => Qe(r(e, a, t, l))
                }
            })(o, v, m),
            M = s("time"),
            {
                t: $,
                lang: V
            } = be(),
            Y = i([0, 2]),
            _ = (e => {
                const a = i(e.parsedValue);
                return c((() => e.visible), (t => {
                    t || (a.value = e.parsedValue)
                })), a
            })(l),
            O = d((() => ee(l.actualVisible) ? `${M.namespace.value}-zoom-in-top` : "")),
            I = d((() => l.format.includes("ss"))),
            N = d((() => l.format.includes("A") ? "A" : l.format.includes("a") ? "a" : "")),
            B = () => {
                t("pick", _.value, !1)
            },
            F = e => {
                if (!l.visible) return;
                const a = j(e).millisecond(0);
                t("pick", a, !0)
            },
            L = (e, a) => {
                t("select-range", e, a), Y.value = [e, a]
            },
            {
                timePickerOptions: E,
                onSetOption: T,
                getAvailableTime: W
            } = (({
                getAvailableHours: e,
                getAvailableMinutes: a,
                getAvailableSeconds: t
            }) => {
                const l = {};
                return {
                    timePickerOptions: l,
                    getAvailableTime: (l, n, r, o) => {
                        const s = {
                            hour: e,
                            minute: a,
                            second: t
                        };
                        let u = l;
                        return ["hour", "minute", "second"].forEach((e => {
                            if (s[e]) {
                                let a;
                                const t = s[e];
                                switch (e) {
                                    case "minute":
                                        a = t(u.hour(), n, o);
                                        break;
                                    case "second":
                                        a = t(u.hour(), u.minute(), n, o);
                                        break;
                                    default:
                                        a = t(n, o)
                                }
                                if ((null == a ? void 0 : a.length) && !a.includes(u[e]())) {
                                    const t = r ? 0 : a.length - 1;
                                    u = u[e](a[t])
                                }
                            }
                        })), u
                    },
                    onSetOption: ([e, a]) => {
                        l[e] = a
                    }
                }
            })({
                getAvailableHours: k,
                getAvailableMinutes: w,
                getAvailableSeconds: D
            }),
            j = e => W(e, l.datetimeRole || "", !0);
        return t("set-picker-option", ["isValidValue", a => {
            const t = e(a).locale(V.value),
                l = j(t);
            return t.isSame(l)
        }]), t("set-picker-option", ["formatToString", e => e ? e.format(l.format) : null]), t("set-picker-option", ["parseUserInput", a => a ? e(a, l.format).locale(V.value) : null]), t("set-picker-option", ["handleKeydownInput", e => {
            const a = e.code,
                {
                    left: t,
                    right: l,
                    up: n,
                    down: r
                } = ve;
            if ([t, l].includes(a)) {
                return (e => {
                    const a = [0, 3].concat(I.value ? [6] : []),
                        t = ["hours", "minutes"].concat(I.value ? ["seconds"] : []),
                        l = (a.indexOf(Y.value[0]) + e + a.length) % a.length;
                    E.start_emitSelectRange(t[l])
                })(a === t ? -1 : 1), void e.preventDefault()
            }
            if ([n, r].includes(a)) {
                const t = a === n ? -1 : 1;
                return E.start_scrollDown(t), void e.preventDefault()
            }
        }]), t("set-picker-option", ["getRangeAvailableTime", j]), t("set-picker-option", ["getDefaultValue", () => e(f).locale(V.value)]), (e, a) => (h(), y(R, {
            name: p(O)
        }, {
            default: b((() => [e.actualVisible || e.visible ? (h(), S("div", {
                key: 0,
                class: g(p(M).b("panel"))
            }, [C("div", {
                class: g([p(M).be("panel", "content"), {
                    "has-seconds": p(I)
                }])
            }, [A(Je, {
                ref: "spinner",
                role: e.datetimeRole || "start",
                "arrow-control": p(r),
                "show-seconds": p(I),
                "am-pm-mode": p(N),
                "spinner-date": e.parsedValue,
                "disabled-hours": p(o),
                "disabled-minutes": p(v),
                "disabled-seconds": p(m),
                onChange: F,
                onSetOption: p(T),
                onSelectRange: L
            }, null, 8, ["role", "arrow-control", "show-seconds", "am-pm-mode", "spinner-date", "disabled-hours", "disabled-minutes", "disabled-seconds", "onSetOption"])], 2), C("div", {
                class: g(p(M).be("panel", "footer"))
            }, [C("button", {
                type: "button",
                class: g([p(M).be("panel", "btn"), "cancel"]),
                onClick: B
            }, P(p($)("el.datepicker.cancel")), 3), C("button", {
                type: "button",
                class: g([p(M).be("panel", "btn"), "confirm"]),
                onClick: e => ((e = !1, a = !1) => {
                    a || t("pick", l.parsedValue, e)
                })()
            }, P(p($)("el.datepicker.confirm")), 11, ["onClick"])], 2)], 2)) : x("v-if", !0)])),
            _: 1
        }, 8, ["name"]))
    }
});
var aa = q(ea, [
        ["__file", "panel-time-pick.vue"]
    ]),
    ta = {
        exports: {}
    };
ta.exports = function(e, a, t) {
    var l = a.prototype,
        n = function(e) {
            return e && (e.indexOf ? e : e.s)
        },
        r = function(e, a, t, l, r) {
            var o = e.name ? e : e.$locale(),
                s = n(o[a]),
                u = n(o[t]),
                i = s || u.map((function(e) {
                    return e.slice(0, l)
                }));
            if (!r) return i;
            var d = o.weekStart;
            return i.map((function(e, a) {
                return i[(a + (d || 0)) % 7]
            }))
        },
        o = function() {
            return t.Ls[t.locale()]
        },
        s = function(e, a) {
            return e.formats[a] || e.formats[a.toUpperCase()].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, (function(e, a, t) {
                return a || t.slice(1)
            }))
        },
        u = function() {
            var e = this;
            return {
                months: function(a) {
                    return a ? a.format("MMMM") : r(e, "months")
                },
                monthsShort: function(a) {
                    return a ? a.format("MMM") : r(e, "monthsShort", "months", 3)
                },
                firstDayOfWeek: function() {
                    return e.$locale().weekStart || 0
                },
                weekdays: function(a) {
                    return a ? a.format("dddd") : r(e, "weekdays")
                },
                weekdaysMin: function(a) {
                    return a ? a.format("dd") : r(e, "weekdaysMin", "weekdays", 2)
                },
                weekdaysShort: function(a) {
                    return a ? a.format("ddd") : r(e, "weekdaysShort", "weekdays", 3)
                },
                longDateFormat: function(a) {
                    return s(e.$locale(), a)
                },
                meridiem: this.$locale().meridiem,
                ordinal: this.$locale().ordinal
            }
        };
    l.localeData = function() {
        return u.bind(this)()
    }, t.localeData = function() {
        var e = o();
        return {
            firstDayOfWeek: function() {
                return e.weekStart || 0
            },
            weekdays: function() {
                return t.weekdays()
            },
            weekdaysShort: function() {
                return t.weekdaysShort()
            },
            weekdaysMin: function() {
                return t.weekdaysMin()
            },
            months: function() {
                return t.months()
            },
            monthsShort: function() {
                return t.monthsShort()
            },
            longDateFormat: function(a) {
                return s(e, a)
            },
            meridiem: e.meridiem,
            ordinal: e.ordinal
        }
    }, t.months = function() {
        return r(o(), "months")
    }, t.monthsShort = function() {
        return r(o(), "monthsShort", "months", 3)
    }, t.weekdays = function(e) {
        return r(o(), "weekdays", null, null, e)
    }, t.weekdaysShort = function(e) {
        return r(o(), "weekdaysShort", "weekdays", 3, e)
    }, t.weekdaysMin = function(e) {
        return r(o(), "weekdaysMin", "weekdays", 2, e)
    }
};
const la = t(ta.exports);
var na = {
    exports: {}
};
na.exports = function(e, a) {
    var t = a.prototype,
        l = t.format;
    t.format = function(e) {
        var a = this,
            t = this.$locale();
        if (!this.isValid()) return l.bind(this)(e);
        var n = this.$utils(),
            r = (e || "YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g, (function(e) {
                switch (e) {
                    case "Q":
                        return Math.ceil((a.$M + 1) / 3);
                    case "Do":
                        return t.ordinal(a.$D);
                    case "gggg":
                        return a.weekYear();
                    case "GGGG":
                        return a.isoWeekYear();
                    case "wo":
                        return t.ordinal(a.week(), "W");
                    case "w":
                    case "ww":
                        return n.s(a.week(), "w" === e ? 1 : 2, "0");
                    case "W":
                    case "WW":
                        return n.s(a.isoWeek(), "W" === e ? 1 : 2, "0");
                    case "k":
                    case "kk":
                        return n.s(String(0 === a.$H ? 24 : a.$H), "k" === e ? 1 : 2, "0");
                    case "X":
                        return Math.floor(a.$d.getTime() / 1e3);
                    case "x":
                        return a.$d.getTime();
                    case "z":
                        return "[" + a.offsetName() + "]";
                    case "zzz":
                        return "[" + a.offsetName("long") + "]";
                    default:
                        return e
                }
            }));
        return l.bind(this)(r)
    }
};
const ra = t(na.exports);
var oa, sa, ua = {
    exports: {}
};
const ia = t(ua.exports = (oa = "week", sa = "year", function(e, a, t) {
    var l = a.prototype;
    l.week = function(e) {
        if (void 0 === e && (e = null), null !== e) return this.add(7 * (e - this.week()), "day");
        var a = this.$locale().yearStart || 1;
        if (11 === this.month() && this.date() > 25) {
            var l = t(this).startOf(sa).add(1, sa).date(a),
                n = t(this).endOf(oa);
            if (l.isBefore(n)) return 1
        }
        var r = t(this).startOf(sa).date(a).startOf(oa).subtract(1, "millisecond"),
            o = this.diff(r, oa, !0);
        return o < 0 ? t(this).startOf("week").week() : Math.ceil(o)
    }, l.weeks = function(e) {
        return void 0 === e && (e = null), this.week(e)
    }
}));
var da = {
    exports: {}
};
da.exports = function(e, a) {
    a.prototype.weekYear = function() {
        var e = this.month(),
            a = this.week(),
            t = this.year();
        return 1 === a && 11 === e ? t + 1 : 0 === e && a >= 52 ? t - 1 : t
    }
};
const ca = t(da.exports);
var va = {
    exports: {}
};
va.exports = function(e, a, t) {
    a.prototype.dayOfYear = function(e) {
        var a = Math.round((t(this).startOf("day") - t(this).startOf("year")) / 864e5) + 1;
        return null == e ? a : this.add(e - a, "day")
    }
};
const pa = t(va.exports);
var ma = {
    exports: {}
};
ma.exports = function(e, a) {
    a.prototype.isSameOrAfter = function(e, a) {
        return this.isSame(e, a) || this.isAfter(e, a)
    }
};
const fa = t(ma.exports);
var ha = {
    exports: {}
};
const ya = t(ha.exports = function(e, a) {
        a.prototype.isSameOrBefore = function(e, a) {
            return this.isSame(e, a) || this.isBefore(e, a)
        }
    }),
    ba = Symbol(),
    ga = z({ ...He,
        type: {
            type: K(String),
            default: "date"
        }
    }),
    ka = ["date", "dates", "year", "years", "month", "months", "week", "range"],
    wa = z({
        disabledDate: {
            type: K(Function)
        },
        date: {
            type: K(Object),
            required: !0
        },
        minDate: {
            type: K(Object)
        },
        maxDate: {
            type: K(Object)
        },
        parsedValue: {
            type: K([Object, Array])
        },
        rangeState: {
            type: K(Object),
            default: () => ({
                endDate: null,
                selecting: !1
            })
        }
    }),
    Da = z({
        type: {
            type: K(String),
            required: !0,
            values: ["year", "years", "month", "months", "date", "dates", "week", "datetime", "datetimerange", "daterange", "monthrange", "yearrange"]
        },
        dateFormat: String,
        timeFormat: String
    }),
    xa = z({
        unlinkPanels: Boolean,
        parsedValue: {
            type: K(Array)
        }
    }),
    Sa = e => ({
        type: String,
        values: ka,
        default: e
    }),
    Ca = z({ ...Da,
        parsedValue: {
            type: K([Object, Array])
        },
        visible: {
            type: Boolean
        },
        format: {
            type: String,
            default: ""
        }
    }),
    Ma = a => {
        if (!n(a)) return !1;
        const [t, l] = a;
        return e.isDayjs(t) && e.isDayjs(l) && t.isSameOrBefore(l)
    },
    Pa = (a, {
        lang: t,
        unit: l,
        unlinkPanels: r
    }) => {
        let o;
        if (n(a)) {
            let [n, o] = a.map((a => e(a).locale(t)));
            return r || (o = n.add(1, l)), [n, o]
        }
        return o = a ? e(a) : e(), o = o.locale(t), [o, o.add(1, l)]
    },
    $a = (a, t, l) => {
        const n = e().locale(l).startOf("month").month(t).year(a),
            r = n.daysInMonth();
        return Ne(r).map((e => n.add(e, "day").toDate()))
    },
    Va = (a, t, l, n) => {
        const r = e().year(a).month(t).startOf("month"),
            o = $a(a, t, l).find((e => !(null == n ? void 0 : n(e))));
        return o ? e(o).locale(l) : r.locale(l)
    },
    Ya = (e, a, t) => {
        const l = e.year();
        if (!(null == t ? void 0 : t(e.toDate()))) return e.locale(a);
        const n = e.month();
        if (!$a(l, n, a).every(t)) return Va(l, n, a, t);
        for (let r = 0; r < 12; r++)
            if (!$a(l, r, a).every(t)) return Va(l, r, a, t);
        return e
    },
    _a = z({ ...wa,
        cellClassName: {
            type: K(Function)
        },
        showWeekNumber: Boolean,
        selectionMode: Sa("date")
    }),
    Oa = (e = "") => ["normal", "today"].includes(e),
    Ia = (a, t) => {
        const {
            lang: l
        } = be(), n = i(), r = i(), o = i(), s = i(), u = i([
            [],
            [],
            [],
            [],
            [],
            []
        ]);
        let m = !1;
        const f = a.date.$locale().weekStart || 7,
            h = a.date.locale("en").localeData().weekdaysShort().map((e => e.toLowerCase())),
            y = d((() => f > 3 ? 7 - f : -f)),
            b = d((() => {
                const e = a.date.startOf("month");
                return e.subtract(e.day() || 7, "day")
            })),
            g = d((() => h.concat(h).slice(f, f + 7))),
            k = d((() => pe(p(C)).some((e => e.isCurrent)))),
            w = d((() => {
                const e = a.date.startOf("month");
                return {
                    startOfMonthDay: e.day() || 7,
                    dateCountOfMonth: e.daysInMonth(),
                    dateCountOfLastMonth: e.subtract(1, "month").daysInMonth()
                }
            })),
            D = d((() => "dates" === a.selectionMode ? $e(a.parsedValue) : [])),
            x = (e, {
                columnIndex: t,
                rowIndex: l
            }, n) => {
                const {
                    disabledDate: r,
                    cellClassName: o
                } = a, s = p(D), u = ((e, {
                    count: a,
                    rowIndex: t,
                    columnIndex: l
                }) => {
                    const {
                        startOfMonthDay: n,
                        dateCountOfMonth: r,
                        dateCountOfLastMonth: o
                    } = p(w), s = p(y);
                    if (!(t >= 0 && t <= 1)) return a <= r ? e.text = a : (e.text = a - r, e.type = "next-month"), !0; {
                        const r = n + s < 0 ? 7 + n + s : n + s;
                        if (l + 7 * t >= r) return e.text = a, !0;
                        e.text = o - (r - l % 7) + 1 + 7 * t, e.type = "prev-month"
                    }
                    return !1
                })(e, {
                    count: n,
                    rowIndex: l,
                    columnIndex: t
                }), i = e.dayjs.toDate();
                return e.selected = s.find((a => a.isSame(e.dayjs, "day"))), e.isSelected = !!e.selected, e.isCurrent = P(e), e.disabled = null == r ? void 0 : r(i), e.customClass = null == o ? void 0 : o(i), u
            },
            S = e => {
                if ("week" === a.selectionMode) {
                    const [t, l] = a.showWeekNumber ? [1, 7] : [0, 6], n = _(e[t + 1]);
                    e[t].inRange = n, e[t].start = n, e[l].inRange = n, e[l].end = n
                }
            },
            C = d((() => {
                const {
                    minDate: t,
                    maxDate: n,
                    rangeState: r,
                    showWeekNumber: o
                } = a, s = p(y), i = p(u), d = "day";
                let c = 1;
                if (o)
                    for (let e = 0; e < 6; e++) i[e][0] || (i[e][0] = {
                        type: "week",
                        text: p(b).add(7 * e + 1, d).week()
                    });
                return ((e, a, {
                    columnIndexOffset: t,
                    startDate: l,
                    nextEndDate: n,
                    now: r,
                    unit: o,
                    relativeDateGetter: s,
                    setCellMetadata: u,
                    setRowMetadata: i
                }) => {
                    for (let d = 0; d < e.row; d++) {
                        const c = a[d];
                        for (let a = 0; a < e.column; a++) {
                            let i = c[a + t];
                            i || (i = {
                                row: d,
                                column: a,
                                type: "normal",
                                inRange: !1,
                                start: !1,
                                end: !1
                            });
                            const v = s(d * e.column + a);
                            i.dayjs = v, i.date = v.toDate(), i.timestamp = v.valueOf(), i.type = "normal", i.inRange = !!(l && v.isSameOrAfter(l, o) && n && v.isSameOrBefore(n, o)) || !!(l && v.isSameOrBefore(l, o) && n && v.isSameOrAfter(n, o)), (null == l ? void 0 : l.isSameOrAfter(n)) ? (i.start = !!n && v.isSame(n, o), i.end = l && v.isSame(l, o)) : (i.start = !!l && v.isSame(l, o), i.end = !!n && v.isSame(n, o)), v.isSame(r, o) && (i.type = "today"), null == u || u(i, {
                                rowIndex: d,
                                columnIndex: a
                            }), c[a + t] = i
                        }
                        null == i || i(c)
                    }
                })({
                    row: 6,
                    column: 7
                }, i, {
                    startDate: t,
                    columnIndexOffset: o ? 1 : 0,
                    nextEndDate: r.endDate || n || r.selecting && t || null,
                    now: e().locale(p(l)).startOf(d),
                    unit: d,
                    relativeDateGetter: e => p(b).add(e - s, d),
                    setCellMetadata: (...e) => {
                        x(...e, c) && (c += 1)
                    },
                    setRowMetadata: S
                }), i
            }));
        c((() => a.date), (async () => {
            var e;
            (null == (e = p(n)) ? void 0 : e.contains(document.activeElement)) && (await v(), await M())
        }));
        const M = async () => {
                var e;
                return null == (e = p(r)) ? void 0 : e.focus()
            },
            P = e => "date" === a.selectionMode && Oa(e.type) && $(e, a.parsedValue),
            $ = (t, n) => !!n && e(n).locale(p(l)).isSame(a.date.date(Number(t.text)), "day"),
            V = (e, t) => {
                const l = 7 * e + (t - (a.showWeekNumber ? 1 : 0)) - p(y);
                return p(b).add(l, "day")
            },
            Y = (e, l = !1) => {
                const n = e.target.closest("td");
                if (!n) return;
                const r = n.parentNode.rowIndex - 1,
                    o = n.cellIndex,
                    s = p(C)[r][o];
                if (s.disabled || "week" === s.type) return;
                const u = V(r, o);
                switch (a.selectionMode) {
                    case "range":
                        (e => {
                            a.rangeState.selecting && a.minDate ? (e >= a.minDate ? t("pick", {
                                minDate: a.minDate,
                                maxDate: e
                            }) : t("pick", {
                                minDate: e,
                                maxDate: a.minDate
                            }), t("select", !1)) : (t("pick", {
                                minDate: e,
                                maxDate: null
                            }), t("select", !0))
                        })(u);
                        break;
                    case "date":
                        t("pick", u, l);
                        break;
                    case "week":
                        (e => {
                            const a = e.week(),
                                l = `${e.year()}w${a}`;
                            t("pick", {
                                year: e.year(),
                                week: a,
                                value: l,
                                date: e.startOf("week")
                            })
                        })(u);
                        break;
                    case "dates":
                        ((e, l) => {
                            const n = l ? $e(a.parsedValue).filter((a => (null == a ? void 0 : a.valueOf()) !== e.valueOf())) : $e(a.parsedValue).concat([e]);
                            t("pick", n)
                        })(u, !!s.selected)
                }
            },
            _ = e => {
                if ("week" !== a.selectionMode) return !1;
                let t = a.date.startOf("day");
                if ("prev-month" === e.type && (t = t.subtract(1, "month")), "next-month" === e.type && (t = t.add(1, "month")), t = t.date(Number.parseInt(e.text, 10)), a.parsedValue && !Array.isArray(a.parsedValue)) {
                    const e = (a.parsedValue.day() - f + 7) % 7 - 1;
                    return a.parsedValue.subtract(e, "day").isSame(t, "day")
                }
                return !1
            };
        return {
            WEEKS: g,
            rows: C,
            tbodyRef: n,
            currentCellRef: r,
            focus: M,
            isCurrent: P,
            isWeekActive: _,
            isSelectedCell: e => !p(k) && 1 === (null == e ? void 0 : e.text) && "normal" === e.type || e.isCurrent,
            handlePickDate: Y,
            handleMouseUp: e => {
                e.target.closest("td") && (m = !1)
            },
            handleMouseDown: e => {
                e.target.closest("td") && (m = !0)
            },
            handleMouseMove: e => {
                var l;
                if (!a.rangeState.selecting) return;
                let n = e.target;
                if ("SPAN" === n.tagName && (n = null == (l = n.parentNode) ? void 0 : l.parentNode), "DIV" === n.tagName && (n = n.parentNode), "TD" !== n.tagName) return;
                const r = n.parentNode.rowIndex - 1,
                    u = n.cellIndex;
                p(C)[r][u].disabled || r === p(o) && u === p(s) || (o.value = r, s.value = u, t("changerange", {
                    selecting: !0,
                    endDate: V(r, u)
                }))
            },
            handleFocus: e => {
                m || p(k) || "date" !== a.selectionMode || Y(e, !0)
            }
        }
    };
var Aa = r({
    name: "ElDatePickerCell",
    props: z({
        cell: {
            type: K(Object)
        }
    }),
    setup(e) {
        const a = s("date-table-cell"),
            {
                slots: t
            } = u(ba);
        return () => {
            const {
                cell: l
            } = e;
            return M(t, "default", { ...l
            }, (() => {
                var e;
                return [A("div", {
                    class: a.b()
                }, [A("span", {
                    class: a.e("text")
                }, [null != (e = null == l ? void 0 : l.renderText) ? e : null == l ? void 0 : l.text])])]
            }))
        }
    }
});
const Ra = r({
    __name: "basic-date-table",
    props: _a,
    emits: ["changerange", "pick", "select"],
    setup(e, {
        expose: a,
        emit: t
    }) {
        const l = e,
            {
                WEEKS: n,
                rows: r,
                tbodyRef: o,
                currentCellRef: u,
                focus: i,
                isCurrent: c,
                isWeekActive: v,
                isSelectedCell: m,
                handlePickDate: f,
                handleMouseUp: y,
                handleMouseDown: b,
                handleMouseMove: k,
                handleFocus: D
            } = Ia(l, t),
            {
                tableLabel: M,
                tableKls: $,
                weekLabel: V,
                getCellClasses: O,
                getRowKls: I,
                t: R
            } = ((e, {
                isCurrent: a,
                isWeekActive: t
            }) => {
                const l = s("date-table"),
                    {
                        t: n
                    } = be();
                return {
                    tableKls: d((() => [l.b(), {
                        "is-week-mode": "week" === e.selectionMode
                    }])),
                    tableLabel: d((() => n("el.datepicker.dateTablePrompt"))),
                    weekLabel: d((() => n("el.datepicker.week"))),
                    getCellClasses: t => {
                        const l = [];
                        return Oa(t.type) && !t.disabled ? (l.push("available"), "today" === t.type && l.push("today")) : l.push(t.type), a(t) && l.push("current"), t.inRange && (Oa(t.type) || "week" === e.selectionMode) && (l.push("in-range"), t.start && l.push("start-date"), t.end && l.push("end-date")), t.disabled && l.push("disabled"), t.selected && l.push("selected"), t.customClass && l.push(t.customClass), l.join(" ")
                    },
                    getRowKls: e => [l.e("row"), {
                        current: t(e)
                    }],
                    t: n
                }
            })(l, {
                isCurrent: c,
                isWeekActive: v
            });
        return a({
            focus: i
        }), (e, a) => (h(), S("table", {
            "aria-label": p(M),
            class: g(p($)),
            cellspacing: "0",
            cellpadding: "0",
            role: "grid",
            onClick: p(f),
            onMousemove: p(k),
            onMousedown: w(p(b), ["prevent"]),
            onMouseup: p(y)
        }, [C("tbody", {
            ref_key: "tbodyRef",
            ref: o
        }, [C("tr", null, [e.showWeekNumber ? (h(), S("th", {
            key: 0,
            scope: "col"
        }, P(p(V)), 1)) : x("v-if", !0), (h(!0), S(Y, null, _(p(n), ((e, a) => (h(), S("th", {
            key: a,
            "aria-label": p(R)("el.datepicker.weeksFull." + e),
            scope: "col"
        }, P(p(R)("el.datepicker.weeks." + e)), 9, ["aria-label"])))), 128))]), (h(!0), S(Y, null, _(p(r), ((e, a) => (h(), S("tr", {
            key: a,
            class: g(p(I)(e[1]))
        }, [(h(!0), S(Y, null, _(e, ((e, t) => (h(), S("td", {
            key: `${a}.${t}`,
            ref_for: !0,
            ref: a => p(m)(e) && (u.value = a),
            class: g(p(O)(e)),
            "aria-current": e.isCurrent ? "date" : void 0,
            "aria-selected": e.isCurrent,
            tabindex: p(m)(e) ? 0 : -1,
            onFocus: p(D)
        }, [A(p(Aa), {
            cell: e
        }, null, 8, ["cell"])], 42, ["aria-current", "aria-selected", "tabindex", "onFocus"])))), 128))], 2)))), 128))], 512)], 42, ["aria-label", "onClick", "onMousemove", "onMousedown", "onMouseup"]))
    }
});
var Na = q(Ra, [
    ["__file", "basic-date-table.vue"]
]);
const Ba = r({
    __name: "basic-month-table",
    props: z({ ...wa,
        selectionMode: Sa("month")
    }),
    emits: ["changerange", "pick", "select"],
    setup(a, {
        expose: t,
        emit: l
    }) {
        const n = a,
            r = s("month-table"),
            {
                t: o,
                lang: u
            } = be(),
            m = i(),
            f = i(),
            y = i(n.date.locale("en").localeData().monthsShort().map((e => e.toLowerCase()))),
            b = i([
                [],
                [],
                []
            ]),
            k = i(),
            D = i(),
            x = d((() => {
                var a, t;
                const l = b.value,
                    r = e().locale(u.value).startOf("month");
                for (let e = 0; e < 3; e++) {
                    const o = l[e];
                    for (let l = 0; l < 4; l++) {
                        const s = o[l] || (o[l] = {
                            row: e,
                            column: l,
                            type: "normal",
                            inRange: !1,
                            start: !1,
                            end: !1,
                            text: -1,
                            disabled: !1
                        });
                        s.type = "normal";
                        const u = 4 * e + l,
                            i = n.date.startOf("year").month(u),
                            d = n.rangeState.endDate || n.maxDate || n.rangeState.selecting && n.minDate || null;
                        s.inRange = !!(n.minDate && i.isSameOrAfter(n.minDate, "month") && d && i.isSameOrBefore(d, "month")) || !!(n.minDate && i.isSameOrBefore(n.minDate, "month") && d && i.isSameOrAfter(d, "month")), (null == (a = n.minDate) ? void 0 : a.isSameOrAfter(d)) ? (s.start = !(!d || !i.isSame(d, "month")), s.end = n.minDate && i.isSame(n.minDate, "month")) : (s.start = !(!n.minDate || !i.isSame(n.minDate, "month")), s.end = !(!d || !i.isSame(d, "month")));
                        r.isSame(i) && (s.type = "today"), s.text = u, s.disabled = (null == (t = n.disabledDate) ? void 0 : t.call(n, i.toDate())) || !1
                    }
                }
                return l
            })),
            M = a => {
                const t = {},
                    l = n.date.year(),
                    r = new Date,
                    o = a.text;
                return t.disabled = !!n.disabledDate && $a(l, o, u.value).every(n.disabledDate), t.current = $e(n.parsedValue).findIndex((a => e.isDayjs(a) && a.year() === l && a.month() === o)) >= 0, t.today = r.getFullYear() === l && r.getMonth() === o, a.inRange && (t["in-range"] = !0, a.start && (t["start-date"] = !0), a.end && (t["end-date"] = !0)), t
            },
            P = e => {
                const a = n.date.year(),
                    t = e.text;
                return $e(n.date).findIndex((e => e.year() === a && e.month() === t)) >= 0
            },
            $ = e => {
                var a;
                if (!n.rangeState.selecting) return;
                let t = e.target;
                if ("SPAN" === t.tagName && (t = null == (a = t.parentNode) ? void 0 : a.parentNode), "DIV" === t.tagName && (t = t.parentNode), "TD" !== t.tagName) return;
                const r = t.parentNode.rowIndex,
                    o = t.cellIndex;
                x.value[r][o].disabled || r === k.value && o === D.value || (k.value = r, D.value = o, l("changerange", {
                    selecting: !0,
                    endDate: n.date.startOf("year").month(4 * r + o)
                }))
            },
            V = a => {
                var t;
                const r = null == (t = a.target) ? void 0 : t.closest("td");
                if ("TD" !== (null == r ? void 0 : r.tagName)) return;
                if (ae(r, "disabled")) return;
                const o = r.cellIndex,
                    s = 4 * r.parentNode.rowIndex + o,
                    i = n.date.startOf("year").month(s);
                if ("months" === n.selectionMode) {
                    if ("keydown" === a.type) return void l("pick", $e(n.parsedValue), !1);
                    const t = Va(n.date.year(), s, u.value, n.disabledDate),
                        o = ae(r, "current") ? $e(n.parsedValue).filter((e => (null == e ? void 0 : e.month()) !== t.month())) : $e(n.parsedValue).concat([e(t)]);
                    l("pick", o)
                } else "range" === n.selectionMode ? n.rangeState.selecting ? (n.minDate && i >= n.minDate ? l("pick", {
                    minDate: n.minDate,
                    maxDate: i
                }) : l("pick", {
                    minDate: i,
                    maxDate: n.minDate
                }), l("select", !1)) : (l("pick", {
                    minDate: i,
                    maxDate: null
                }), l("select", !0)) : l("pick", s)
            };
        return c((() => n.date), (async () => {
            var e, a;
            (null == (e = m.value) ? void 0 : e.contains(document.activeElement)) && (await v(), null == (a = f.value) || a.focus())
        })), t({
            focus: () => {
                var e;
                null == (e = f.value) || e.focus()
            }
        }), (e, a) => (h(), S("table", {
            role: "grid",
            "aria-label": p(o)("el.datepicker.monthTablePrompt"),
            class: g(p(r).b()),
            onClick: V,
            onMousemove: $
        }, [C("tbody", {
            ref_key: "tbodyRef",
            ref: m
        }, [(h(!0), S(Y, null, _(p(x), ((e, a) => (h(), S("tr", {
            key: a
        }, [(h(!0), S(Y, null, _(e, ((e, a) => (h(), S("td", {
            key: a,
            ref_for: !0,
            ref: a => P(e) && (f.value = a),
            class: g(M(e)),
            "aria-selected": `${P(e)}`,
            "aria-label": p(o)("el.datepicker.month" + (+e.text + 1)),
            tabindex: P(e) ? 0 : -1,
            onKeydown: [N(w(V, ["prevent", "stop"]), ["space"]), N(w(V, ["prevent", "stop"]), ["enter"])]
        }, [A(p(Aa), {
            cell: { ...e,
                renderText: p(o)("el.datepicker.months." + y.value[e.text])
            }
        }, null, 8, ["cell"])], 42, ["aria-selected", "aria-label", "tabindex", "onKeydown"])))), 128))])))), 128))], 512)], 42, ["aria-label"]))
    }
});
var Fa = q(Ba, [
    ["__file", "basic-month-table.vue"]
]);
const La = r({
    __name: "basic-year-table",
    props: z({ ...wa,
        selectionMode: Sa("year")
    }),
    emits: ["changerange", "pick", "select"],
    setup(a, {
        expose: t,
        emit: l
    }) {
        const n = a,
            r = s("year-table"),
            {
                t: o,
                lang: u
            } = be(),
            m = i(),
            f = i(),
            y = d((() => 10 * Math.floor(n.date.year() / 10))),
            b = i([
                [],
                [],
                []
            ]),
            k = i(),
            D = i(),
            x = d((() => {
                var a;
                const t = b.value,
                    l = e().locale(u.value).startOf("year");
                for (let r = 0; r < 3; r++) {
                    const o = t[r];
                    for (let t = 0; t < 4 && !(4 * r + t >= 10); t++) {
                        let s = o[t];
                        s || (s = {
                            row: r,
                            column: t,
                            type: "normal",
                            inRange: !1,
                            start: !1,
                            end: !1,
                            text: -1,
                            disabled: !1
                        }), s.type = "normal";
                        const u = 4 * r + t + y.value,
                            i = e().year(u),
                            d = n.rangeState.endDate || n.maxDate || n.rangeState.selecting && n.minDate || null;
                        s.inRange = !!(n.minDate && i.isSameOrAfter(n.minDate, "year") && d && i.isSameOrBefore(d, "year")) || !!(n.minDate && i.isSameOrBefore(n.minDate, "year") && d && i.isSameOrAfter(d, "year")), (null == (a = n.minDate) ? void 0 : a.isSameOrAfter(d)) ? (s.start = !(!d || !i.isSame(d, "year")), s.end = !(!n.minDate || !i.isSame(n.minDate, "year"))) : (s.start = !(!n.minDate || !i.isSame(n.minDate, "year")), s.end = !(!d || !i.isSame(d, "year")));
                        l.isSame(i) && (s.type = "today"), s.text = u;
                        const c = i.toDate();
                        s.disabled = n.disabledDate && n.disabledDate(c) || !1, o[t] = s
                    }
                }
                return t
            })),
            M = a => {
                const t = {},
                    l = e().locale(u.value),
                    r = a.text;
                return t.disabled = !!n.disabledDate && ((a, t) => {
                    const l = e(String(a)).locale(t).startOf("year"),
                        n = l.endOf("year").dayOfYear();
                    return Ne(n).map((e => l.add(e, "day").toDate()))
                })(r, u.value).every(n.disabledDate), t.today = l.year() === r, t.current = $e(n.parsedValue).findIndex((e => e.year() === r)) >= 0, a.inRange && (t["in-range"] = !0, a.start && (t["start-date"] = !0), a.end && (t["end-date"] = !0)), t
            },
            P = e => {
                const a = e.text;
                return $e(n.date).findIndex((e => e.year() === a)) >= 0
            },
            $ = a => {
                var t;
                const r = null == (t = a.target) ? void 0 : t.closest("td");
                if (!r || !r.textContent || ae(r, "disabled")) return;
                const o = r.cellIndex,
                    s = 4 * r.parentNode.rowIndex + o + y.value,
                    i = e().year(s);
                if ("range" === n.selectionMode) n.rangeState.selecting ? (n.minDate && i >= n.minDate ? l("pick", {
                    minDate: n.minDate,
                    maxDate: i
                }) : l("pick", {
                    minDate: i,
                    maxDate: n.minDate
                }), l("select", !1)) : (l("pick", {
                    minDate: i,
                    maxDate: null
                }), l("select", !0));
                else if ("years" === n.selectionMode) {
                    if ("keydown" === a.type) return void l("pick", $e(n.parsedValue), !1);
                    const e = Ya(i.startOf("year"), u.value, n.disabledDate),
                        t = ae(r, "current") ? $e(n.parsedValue).filter((e => (null == e ? void 0 : e.year()) !== s)) : $e(n.parsedValue).concat([e]);
                    l("pick", t)
                } else l("pick", s)
            },
            V = a => {
                var t;
                if (!n.rangeState.selecting) return;
                const r = null == (t = a.target) ? void 0 : t.closest("td");
                if (!r) return;
                const o = r.parentNode.rowIndex,
                    s = r.cellIndex;
                x.value[o][s].disabled || o === k.value && s === D.value || (k.value = o, D.value = s, l("changerange", {
                    selecting: !0,
                    endDate: e().year(y.value).add(4 * o + s, "year")
                }))
            };
        return c((() => n.date), (async () => {
            var e, a;
            (null == (e = m.value) ? void 0 : e.contains(document.activeElement)) && (await v(), null == (a = f.value) || a.focus())
        })), t({
            focus: () => {
                var e;
                null == (e = f.value) || e.focus()
            }
        }), (e, a) => (h(), S("table", {
            role: "grid",
            "aria-label": p(o)("el.datepicker.yearTablePrompt"),
            class: g(p(r).b()),
            onClick: $,
            onMousemove: V
        }, [C("tbody", {
            ref_key: "tbodyRef",
            ref: m
        }, [(h(!0), S(Y, null, _(p(x), ((e, a) => (h(), S("tr", {
            key: a
        }, [(h(!0), S(Y, null, _(e, ((e, t) => (h(), S("td", {
            key: `${a}_${t}`,
            ref_for: !0,
            ref: a => P(e) && (f.value = a),
            class: g(["available", M(e)]),
            "aria-selected": P(e),
            "aria-label": String(e.text),
            tabindex: P(e) ? 0 : -1,
            onKeydown: [N(w($, ["prevent", "stop"]), ["space"]), N(w($, ["prevent", "stop"]), ["enter"])]
        }, [A(p(Aa), {
            cell: e
        }, null, 8, ["cell"])], 42, ["aria-selected", "aria-label", "tabindex", "onKeydown"])))), 128))])))), 128))], 512)], 42, ["aria-label"]))
    }
});
var Ea = q(La, [
    ["__file", "basic-year-table.vue"]
]);
const Ta = r({
    __name: "panel-date-pick",
    props: Ca,
    emits: ["pick", "set-picker-option", "panel-change"],
    setup(a, {
        emit: t
    }) {
        const l = a,
            r = s("picker-panel"),
            m = s("date-picker"),
            f = o(),
            k = B(),
            {
                t: w,
                lang: D
            } = be(),
            $ = u("EP_PICKER_BASE"),
            V = u(me),
            {
                shortcuts: R,
                disabledDate: T,
                cellClassName: W,
                defaultTime: j
            } = $.props,
            z = F($.props, "defaultValue"),
            K = i(),
            H = i(e().locale(D.value)),
            U = i(!1);
        let Z = !1;
        const q = d((() => e(j).locale(D.value))),
            Q = d((() => H.value.month())),
            X = d((() => H.value.year())),
            J = i([]),
            ee = i(null),
            ae = i(null),
            oe = e => !(J.value.length > 0) || (J.value, l.format, !0),
            se = e => !j || Re.value || U.value || Z ? Pe.value ? e.millisecond(0) : e.startOf("day") : q.value.year(e.year()).month(e.month()).date(e.date()),
            ue = (e, ...a) => {
                if (e)
                    if (n(e)) {
                        const l = e.map(se);
                        t("pick", l, ...a)
                    } else t("pick", se(e), ...a);
                else t("pick", e, ...a);
                ee.value = null, ae.value = null, U.value = !1, Z = !1
            },
            ie = async (e, a) => {
                if ("date" === ye.value) {
                    let t = l.parsedValue ? l.parsedValue.year(e.year()).month(e.month()).date(e.date()) : e;
                    oe() || (t = J.value[0][0].year(e.year()).month(e.month()).date(e.date())), H.value = t, ue(t, Pe.value || a), "datetime" === l.type && (await v(), Ue())
                } else "week" === ye.value ? ue(e.date) : "dates" === ye.value && ue(e, !0)
            },
            de = e => {
                const a = e ? "add" : "subtract";
                H.value = H.value[a](1, "month"), qe("month")
            },
            ce = e => {
                const a = H.value,
                    t = e ? "add" : "subtract";
                H.value = "year" === pe.value ? a[t](10, "year") : a[t](1, "year"), qe("year")
            },
            pe = i("date"),
            he = d((() => {
                const e = w("el.datepicker.year");
                if ("year" === pe.value) {
                    const a = 10 * Math.floor(X.value / 10);
                    return e ? `${a} ${e} - ${a+9} ${e}` : `${a} - ${a+9}`
                }
                return `${X.value} ${e}`
            })),
            ye = d((() => {
                const {
                    type: e
                } = l;
                return ["week", "month", "months", "year", "years", "dates"].includes(e) ? e : "date"
            })),
            ge = d((() => "dates" === ye.value || "months" === ye.value || "years" === ye.value)),
            ke = d((() => "date" === ye.value ? pe.value : ye.value)),
            we = d((() => !!R.length)),
            De = async (e, a) => {
                "month" === ye.value ? (H.value = Va(H.value.year(), e, D.value, T), ue(H.value, !1)) : "months" === ye.value ? ue(e, null == a || a) : (H.value = Va(H.value.year(), e, D.value, T), pe.value = "date", ["month", "year", "date", "week"].includes(ye.value) && (ue(H.value, !0), await v(), Ue())), qe("month")
            },
            xe = async (e, a) => {
                if ("year" === ye.value) {
                    const a = H.value.startOf("year").year(e);
                    H.value = Ya(a, D.value, T), ue(H.value, !1)
                } else if ("years" === ye.value) ue(e, null == a || a);
                else {
                    const a = H.value.year(e);
                    H.value = Ya(a, D.value, T), pe.value = "month", ["month", "year", "date", "week"].includes(ye.value) && (ue(H.value, !0), await v(), Ue())
                }
                qe("year")
            },
            Se = async e => {
                pe.value = e, await v(), Ue()
            },
            Pe = d((() => "datetime" === l.type || "datetimerange" === l.type)),
            $e = d((() => {
                const e = Pe.value || "dates" === ye.value,
                    a = "years" === ye.value,
                    t = "months" === ye.value,
                    l = "date" === pe.value,
                    n = "year" === pe.value,
                    r = "month" === pe.value;
                return e && l || a && n || t && r
            })),
            Ve = d((() => !!T && (!l.parsedValue || (n(l.parsedValue) ? T(l.parsedValue[0].toDate()) : T(l.parsedValue.toDate()))))),
            Ye = () => {
                if (ge.value) ue(l.parsedValue);
                else {
                    let a = l.parsedValue;
                    if (!a) {
                        const t = e(j).locale(D.value),
                            l = He();
                        a = t.year(l.year()).month(l.month()).date(l.date())
                    }
                    H.value = a, ue(a)
                }
            },
            _e = d((() => !!T && T(e().locale(D.value).toDate()))),
            Oe = () => {
                const a = e().locale(D.value).toDate();
                U.value = !0, T && T(a) || !oe() || (H.value = e().locale(D.value), ue(H.value))
            },
            Ie = d((() => l.timeFormat || Fe(l.format))),
            Ae = d((() => l.dateFormat || Be(l.format))),
            Re = d((() => ae.value ? ae.value : l.parsedValue || z.value ? (l.parsedValue || H.value).format(Ie.value) : void 0)),
            Ne = d((() => ee.value ? ee.value : l.parsedValue || z.value ? (l.parsedValue || H.value).format(Ae.value) : void 0)),
            Le = i(!1),
            Ee = () => {
                Le.value = !0
            },
            Te = () => {
                Le.value = !1
            },
            We = e => ({
                hour: e.hour(),
                minute: e.minute(),
                second: e.second(),
                year: e.year(),
                month: e.month(),
                date: e.date()
            }),
            je = (e, a, t) => {
                const {
                    hour: n,
                    minute: r,
                    second: o
                } = We(e), s = l.parsedValue ? l.parsedValue.hour(n).minute(r).second(o) : e;
                H.value = s, ue(H.value, !0), t || (Le.value = a)
            },
            ze = a => {
                const t = e(a, Ie.value).locale(D.value);
                if (t.isValid() && oe()) {
                    const {
                        year: e,
                        month: a,
                        date: l
                    } = We(H.value);
                    H.value = t.year(e).month(a).date(l), ae.value = null, Le.value = !1, ue(H.value, !0)
                }
            },
            Ke = a => {
                const t = e(a, Ae.value).locale(D.value);
                if (t.isValid()) {
                    if (T && T(t.toDate())) return;
                    const {
                        hour: e,
                        minute: a,
                        second: l
                    } = We(H.value);
                    H.value = t.hour(e).minute(a).second(l), ee.value = null, ue(H.value, !0)
                }
            },
            He = () => {
                const a = e(z.value).locale(D.value);
                if (!z.value) {
                    const a = q.value;
                    return e().hour(a.hour()).minute(a.minute()).second(a.second()).locale(D.value)
                }
                return a
            },
            Ue = async () => {
                var e;
                ["week", "month", "year", "date"].includes(ye.value) && (null == (e = K.value) || e.focus(), "week" === ye.value && Ge(ve.down))
            },
            Ze = e => {
                const {
                    code: a
                } = e;
                [ve.up, ve.down, ve.left, ve.right, ve.home, ve.end, ve.pageUp, ve.pageDown].includes(a) && (Ge(a), e.stopPropagation(), e.preventDefault()), [ve.enter, ve.space, ve.numpadEnter].includes(a) && null === ee.value && null === ae.value && (e.preventDefault(), ue(H.value, !1))
            },
            Ge = a => {
                var l;
                const {
                    up: n,
                    down: r,
                    left: o,
                    right: s,
                    home: u,
                    end: i,
                    pageUp: d,
                    pageDown: c
                } = ve, v = {
                    year: {
                        [n]: -4,
                        [r]: 4,
                        [o]: -1,
                        [s]: 1,
                        offset: (e, a) => e.setFullYear(e.getFullYear() + a)
                    },
                    month: {
                        [n]: -4,
                        [r]: 4,
                        [o]: -1,
                        [s]: 1,
                        offset: (e, a) => e.setMonth(e.getMonth() + a)
                    },
                    week: {
                        [n]: -1,
                        [r]: 1,
                        [o]: -1,
                        [s]: 1,
                        offset: (e, a) => e.setDate(e.getDate() + 7 * a)
                    },
                    date: {
                        [n]: -7,
                        [r]: 7,
                        [o]: -1,
                        [s]: 1,
                        [u]: e => -e.getDay(),
                        [i]: e => 6 - e.getDay(),
                        [d]: e => -new Date(e.getFullYear(), e.getMonth(), 0).getDate(),
                        [c]: e => new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate(),
                        offset: (e, a) => e.setDate(e.getDate() + a)
                    }
                }, p = H.value.toDate();
                for (; Math.abs(H.value.diff(p, "year", !0)) < 1;) {
                    const n = v[ke.value];
                    if (!n) return;
                    if (n.offset(p, E(n[a]) ? n[a](p) : null != (l = n[a]) ? l : 0), T && T(p)) break;
                    const r = e(p).locale(D.value);
                    H.value = r, t("pick", r, !0);
                    break
                }
            },
            qe = e => {
                t("panel-change", H.value.toDate(), e, pe.value)
            };
        return c((() => ye.value), (e => {
            ["month", "year"].includes(e) ? pe.value = e : pe.value = "years" !== e ? "months" !== e ? "date" : "month" : "year"
        }), {
            immediate: !0
        }), c((() => pe.value), (() => {
            null == V || V.updatePopper()
        })), c((() => z.value), (e => {
            e && (H.value = He())
        }), {
            immediate: !0
        }), c((() => l.parsedValue), (e => {
            if (e) {
                if (ge.value) return;
                if (Array.isArray(e)) return;
                H.value = e
            } else H.value = He()
        }), {
            immediate: !0
        }), t("set-picker-option", ["isValidValue", a => e.isDayjs(a) && a.isValid() && (!T || !T(a.toDate()))]), t("set-picker-option", ["formatToString", e => n(e) ? e.map((e => e.format(l.format))) : e.format(l.format)]), t("set-picker-option", ["parseUserInput", a => e(a, l.format).locale(D.value)]), t("set-picker-option", ["handleFocusPicker", Ue]), (a, l) => (h(), S("div", {
            class: g([p(r).b(), p(m).b(), {
                "has-sidebar": a.$slots.sidebar || p(we),
                "has-time": p(Pe)
            }])
        }, [C("div", {
            class: g(p(r).e("body-wrapper"))
        }, [M(a.$slots, "sidebar", {
            class: g(p(r).e("sidebar"))
        }), p(we) ? (h(), S("div", {
            key: 0,
            class: g(p(r).e("sidebar"))
        }, [(h(!0), S(Y, null, _(p(R), ((a, l) => (h(), S("button", {
            key: l,
            type: "button",
            class: g(p(r).e("shortcut")),
            onClick: l => (a => {
                const l = E(a.value) ? a.value() : a.value;
                if (l) return Z = !0, void ue(e(l).locale(D.value));
                a.onClick && a.onClick({
                    attrs: f,
                    slots: k,
                    emit: t
                })
            })(a)
        }, P(a.text), 11, ["onClick"])))), 128))], 2)) : x("v-if", !0), C("div", {
            class: g(p(r).e("body"))
        }, [p(Pe) ? (h(), S("div", {
            key: 0,
            class: g(p(m).e("time-header"))
        }, [C("span", {
            class: g(p(m).e("editor-wrap"))
        }, [A(p(Me), {
            placeholder: p(w)("el.datepicker.selectDate"),
            "model-value": p(Ne),
            size: "small",
            "validate-event": !1,
            onInput: e => ee.value = e,
            onChange: Ke
        }, null, 8, ["placeholder", "model-value", "onInput"])], 2), I((h(), S("span", {
            class: g(p(m).e("editor-wrap"))
        }, [A(p(Me), {
            placeholder: p(w)("el.datepicker.selectTime"),
            "model-value": p(Re),
            size: "small",
            "validate-event": !1,
            onFocus: Ee,
            onInput: e => ae.value = e,
            onChange: ze
        }, null, 8, ["placeholder", "model-value", "onInput"]), A(p(aa), {
            visible: Le.value,
            format: p(Ie),
            "parsed-value": H.value,
            onPick: je
        }, null, 8, ["visible", "format", "parsed-value"])], 2)), [
            [p(fe), Te]
        ])], 2)) : x("v-if", !0), I(C("div", {
            class: g([p(m).e("header"), ("year" === pe.value || "month" === pe.value) && p(m).e("header--bordered")])
        }, [C("span", {
            class: g(p(m).e("prev-btn"))
        }, [C("button", {
            type: "button",
            "aria-label": p(w)("el.datepicker.prevYear"),
            class: g(["d-arrow-left", p(r).e("icon-btn")]),
            onClick: e => ce(!1)
        }, [M(a.$slots, "prev-year", {}, (() => [A(p(G), null, {
            default: b((() => [A(p(te))])),
            _: 1
        })]))], 10, ["aria-label", "onClick"]), I(C("button", {
            type: "button",
            "aria-label": p(w)("el.datepicker.prevMonth"),
            class: g([p(r).e("icon-btn"), "arrow-left"]),
            onClick: e => de(!1)
        }, [M(a.$slots, "prev-month", {}, (() => [A(p(G), null, {
            default: b((() => [A(p(le))])),
            _: 1
        })]))], 10, ["aria-label", "onClick"]), [
            [L, "date" === pe.value]
        ])], 2), C("span", {
            role: "button",
            class: g(p(m).e("header-label")),
            "aria-live": "polite",
            tabindex: "0",
            onKeydown: N((e => Se("year")), ["enter"]),
            onClick: e => Se("year")
        }, P(p(he)), 43, ["onKeydown", "onClick"]), I(C("span", {
            role: "button",
            "aria-live": "polite",
            tabindex: "0",
            class: g([p(m).e("header-label"), {
                active: "month" === pe.value
            }]),
            onKeydown: N((e => Se("month")), ["enter"]),
            onClick: e => Se("month")
        }, P(p(w)(`el.datepicker.month${p(Q)+1}`)), 43, ["onKeydown", "onClick"]), [
            [L, "date" === pe.value]
        ]), C("span", {
            class: g(p(m).e("next-btn"))
        }, [I(C("button", {
            type: "button",
            "aria-label": p(w)("el.datepicker.nextMonth"),
            class: g([p(r).e("icon-btn"), "arrow-right"]),
            onClick: e => de(!0)
        }, [M(a.$slots, "next-month", {}, (() => [A(p(G), null, {
            default: b((() => [A(p(ne))])),
            _: 1
        })]))], 10, ["aria-label", "onClick"]), [
            [L, "date" === pe.value]
        ]), C("button", {
            type: "button",
            "aria-label": p(w)("el.datepicker.nextYear"),
            class: g([p(r).e("icon-btn"), "d-arrow-right"]),
            onClick: e => ce(!0)
        }, [M(a.$slots, "next-year", {}, (() => [A(p(G), null, {
            default: b((() => [A(p(re))])),
            _: 1
        })]))], 10, ["aria-label", "onClick"])], 2)], 2), [
            [L, "time" !== pe.value]
        ]), C("div", {
            class: g(p(r).e("content")),
            onKeydown: Ze
        }, ["date" === pe.value ? (h(), y(Na, {
            key: 0,
            ref_key: "currentViewRef",
            ref: K,
            "selection-mode": p(ye),
            date: H.value,
            "parsed-value": a.parsedValue,
            "disabled-date": p(T),
            "cell-class-name": p(W),
            onPick: ie
        }, null, 8, ["selection-mode", "date", "parsed-value", "disabled-date", "cell-class-name"])) : x("v-if", !0), "year" === pe.value ? (h(), y(Ea, {
            key: 1,
            ref_key: "currentViewRef",
            ref: K,
            "selection-mode": p(ye),
            date: H.value,
            "disabled-date": p(T),
            "parsed-value": a.parsedValue,
            onPick: xe
        }, null, 8, ["selection-mode", "date", "disabled-date", "parsed-value"])) : x("v-if", !0), "month" === pe.value ? (h(), y(Fa, {
            key: 2,
            ref_key: "currentViewRef",
            ref: K,
            "selection-mode": p(ye),
            date: H.value,
            "parsed-value": a.parsedValue,
            "disabled-date": p(T),
            onPick: De
        }, null, 8, ["selection-mode", "date", "parsed-value", "disabled-date"])) : x("v-if", !0)], 34)], 2)], 2), I(C("div", {
            class: g(p(r).e("footer"))
        }, [I(A(p(Ce), {
            text: "",
            size: "small",
            class: g(p(r).e("link-btn")),
            disabled: p(_e),
            onClick: Oe
        }, {
            default: b((() => [O(P(p(w)("el.datepicker.now")), 1)])),
            _: 1
        }, 8, ["class", "disabled"]), [
            [L, !p(ge)]
        ]), A(p(Ce), {
            plain: "",
            size: "small",
            class: g(p(r).e("link-btn")),
            disabled: p(Ve),
            onClick: Ye
        }, {
            default: b((() => [O(P(p(w)("el.datepicker.confirm")), 1)])),
            _: 1
        }, 8, ["class", "disabled"])], 2), [
            [L, p($e)]
        ])], 2))
    }
});
var Wa = q(Ta, [
    ["__file", "panel-date-pick.vue"]
]);
const ja = z({ ...Da,
        ...xa,
        visible: Boolean
    }),
    za = a => {
        const {
            emit: t
        } = T(), l = o(), n = B();
        return r => {
            const o = E(r.value) ? r.value() : r.value;
            o ? t("pick", [e(o[0]).locale(a.value), e(o[1]).locale(a.value)]) : r.onClick && r.onClick({
                attrs: l,
                slots: n,
                emit: t
            })
        }
    },
    Ka = (e, {
        defaultValue: a,
        leftDate: t,
        rightDate: l,
        unit: r,
        onParsedValueChanged: o
    }) => {
        const {
            emit: d
        } = T(), {
            pickerNs: v
        } = u(ba), m = s("date-range-picker"), {
            t: f,
            lang: h
        } = be(), y = za(h), b = i(), g = i(), k = i({
            endDate: null,
            selecting: !1
        }), w = e => {
            if (n(e) && 2 === e.length) {
                const [a, l] = e;
                b.value = a, t.value = a, g.value = l, o(p(b), p(g))
            } else D()
        }, D = () => {
            const [n, o] = Pa(p(a), {
                lang: p(h),
                unit: r,
                unlinkPanels: e.unlinkPanels
            });
            b.value = void 0, g.value = void 0, t.value = n, l.value = o
        };
        return c(a, (e => {
            e && D()
        }), {
            immediate: !0
        }), c((() => e.parsedValue), w, {
            immediate: !0
        }), {
            minDate: b,
            maxDate: g,
            rangeState: k,
            lang: h,
            ppNs: v,
            drpNs: m,
            handleChangeRange: e => {
                k.value = e
            },
            handleRangeConfirm: (e = !1) => {
                const a = p(b),
                    t = p(g);
                Ma([a, t]) && d("pick", [a, t], e)
            },
            handleShortcutClick: y,
            onSelect: e => {
                k.value.selecting = e, e || (k.value.endDate = null)
            },
            onReset: w,
            t: f
        }
    },
    Ha = "month",
    Ua = r({
        __name: "panel-date-range",
        props: ja,
        emits: ["pick", "set-picker-option", "calendar-change", "panel-change"],
        setup(a, {
            emit: t
        }) {
            const l = a,
                r = u("EP_PICKER_BASE"),
                {
                    disabledDate: o,
                    cellClassName: s,
                    defaultTime: v,
                    clearable: m
                } = r.props,
                f = F(r.props, "format"),
                k = F(r.props, "shortcuts"),
                w = F(r.props, "defaultValue"),
                {
                    lang: D
                } = be(),
                $ = i(e().locale(D.value)),
                V = i(e().locale(D.value).add(1, Ha)),
                {
                    minDate: R,
                    maxDate: N,
                    rangeState: B,
                    ppNs: L,
                    drpNs: E,
                    handleChangeRange: T,
                    handleRangeConfirm: W,
                    handleShortcutClick: j,
                    onSelect: z,
                    onReset: K,
                    t: H
                } = Ka(l, {
                    defaultValue: w,
                    leftDate: $,
                    rightDate: V,
                    unit: Ha,
                    onParsedValueChanged: function(e, a) {
                        if (l.unlinkPanels && a) {
                            const t = (null == e ? void 0 : e.year()) || 0,
                                l = (null == e ? void 0 : e.month()) || 0,
                                n = a.year(),
                                r = a.month();
                            V.value = t === n && l === r ? a.add(1, Ha) : a
                        } else V.value = $.value.add(1, Ha), a && (V.value = V.value.hour(a.hour()).minute(a.minute()).second(a.second()))
                    }
                });
            c((() => l.visible), (e => {
                !e && B.value.selecting && (K(l.parsedValue), z(!1))
            }));
            const U = i({
                    min: null,
                    max: null
                }),
                Z = i({
                    min: null,
                    max: null
                }),
                q = d((() => `${$.value.year()} ${H("el.datepicker.year")} ${H(`el.datepicker.month${$.value.month()+1}`)}`)),
                Q = d((() => `${V.value.year()} ${H("el.datepicker.year")} ${H(`el.datepicker.month${V.value.month()+1}`)}`)),
                X = d((() => $.value.year())),
                J = d((() => $.value.month())),
                ee = d((() => V.value.year())),
                ae = d((() => V.value.month())),
                oe = d((() => !!k.value.length)),
                se = d((() => null !== U.value.min ? U.value.min : R.value ? R.value.format(ve.value) : "")),
                ue = d((() => null !== U.value.max ? U.value.max : N.value || R.value ? (N.value || R.value).format(ve.value) : "")),
                ie = d((() => null !== Z.value.min ? Z.value.min : R.value ? R.value.format(ce.value) : "")),
                de = d((() => null !== Z.value.max ? Z.value.max : N.value || R.value ? (N.value || R.value).format(ce.value) : "")),
                ce = d((() => l.timeFormat || Fe(f.value))),
                ve = d((() => l.dateFormat || Be(f.value))),
                pe = () => {
                    $.value = $.value.subtract(1, "year"), l.unlinkPanels || (V.value = $.value.add(1, "month")), xe("year")
                },
                me = () => {
                    $.value = $.value.subtract(1, "month"), l.unlinkPanels || (V.value = $.value.add(1, "month")), xe("month")
                },
                he = () => {
                    l.unlinkPanels ? V.value = V.value.add(1, "year") : ($.value = $.value.add(1, "year"), V.value = $.value.add(1, "month")), xe("year")
                },
                ye = () => {
                    l.unlinkPanels ? V.value = V.value.add(1, "month") : ($.value = $.value.add(1, "month"), V.value = $.value.add(1, "month")), xe("month")
                },
                ge = () => {
                    $.value = $.value.add(1, "year"), xe("year")
                },
                ke = () => {
                    $.value = $.value.add(1, "month"), xe("month")
                },
                we = () => {
                    V.value = V.value.subtract(1, "year"), xe("year")
                },
                De = () => {
                    V.value = V.value.subtract(1, "month"), xe("month")
                },
                xe = e => {
                    t("panel-change", [$.value.toDate(), V.value.toDate()], e)
                },
                Se = d((() => {
                    const e = (J.value + 1) % 12,
                        a = J.value + 1 >= 12 ? 1 : 0;
                    return l.unlinkPanels && new Date(X.value + a, e) < new Date(ee.value, ae.value)
                })),
                Pe = d((() => l.unlinkPanels && 12 * ee.value + ae.value - (12 * X.value + J.value + 1) >= 12)),
                $e = d((() => !(R.value && N.value && !B.value.selecting && Ma([R.value, N.value])))),
                Ve = d((() => "datetime" === l.type || "datetimerange" === l.type)),
                Ye = (a, t) => {
                    if (a) {
                        if (v) {
                            return e(v[t] || v).locale(D.value).year(a.year()).month(a.month()).date(a.date())
                        }
                        return a
                    }
                },
                _e = (e, a = !0) => {
                    const l = e.minDate,
                        n = e.maxDate,
                        r = Ye(l, 0),
                        o = Ye(n, 1);
                    N.value === o && R.value === r || (t("calendar-change", [l.toDate(), n && n.toDate()]), N.value = o, R.value = r, a && !Ve.value && W())
                },
                Oe = i(!1),
                Ie = i(!1),
                Ae = () => {
                    Oe.value = !1
                },
                Re = () => {
                    Ie.value = !1
                },
                Ne = (a, t) => {
                    U.value[t] = a;
                    const n = e(a, ve.value).locale(D.value);
                    if (n.isValid()) {
                        if (o && o(n.toDate())) return;
                        "min" === t ? ($.value = n, R.value = (R.value || $.value).year(n.year()).month(n.month()).date(n.date()), l.unlinkPanels || N.value && !N.value.isBefore(R.value) || (V.value = n.add(1, "month"), N.value = R.value.add(1, "month"))) : (V.value = n, N.value = (N.value || V.value).year(n.year()).month(n.month()).date(n.date()), l.unlinkPanels || R.value && !R.value.isAfter(N.value) || ($.value = n.subtract(1, "month"), R.value = N.value.subtract(1, "month")))
                    }
                },
                Le = (e, a) => {
                    U.value[a] = null
                },
                Ee = (a, t) => {
                    Z.value[t] = a;
                    const l = e(a, ce.value).locale(D.value);
                    l.isValid() && ("min" === t ? (Oe.value = !0, R.value = (R.value || $.value).hour(l.hour()).minute(l.minute()).second(l.second())) : (Ie.value = !0, N.value = (N.value || V.value).hour(l.hour()).minute(l.minute()).second(l.second()), V.value = N.value))
                },
                Te = (e, a) => {
                    Z.value[a] = null, "min" === a ? ($.value = R.value, Oe.value = !1, N.value && !N.value.isBefore(R.value) || (N.value = R.value)) : (V.value = N.value, Ie.value = !1, N.value && N.value.isBefore(R.value) && (R.value = N.value))
                },
                We = (e, a, t) => {
                    Z.value.min || (e && ($.value = e, R.value = (R.value || $.value).hour(e.hour()).minute(e.minute()).second(e.second())), t || (Oe.value = a), N.value && !N.value.isBefore(R.value) || (N.value = R.value, V.value = e))
                },
                je = (e, a, t) => {
                    Z.value.max || (e && (V.value = e, N.value = (N.value || V.value).hour(e.hour()).minute(e.minute()).second(e.second())), t || (Ie.value = a), N.value && N.value.isBefore(R.value) && (R.value = N.value))
                },
                ze = () => {
                    $.value = Pa(p(w), {
                        lang: p(D),
                        unit: "month",
                        unlinkPanels: l.unlinkPanels
                    })[0], V.value = $.value.add(1, "month"), N.value = void 0, R.value = void 0, t("pick", null)
                };
            return t("set-picker-option", ["isValidValue", e => Ma(e) && (!o || !o(e[0].toDate()) && !o(e[1].toDate()))]), t("set-picker-option", ["parseUserInput", a => n(a) ? a.map((a => e(a, f.value).locale(D.value))) : e(a, f.value).locale(D.value)]), t("set-picker-option", ["formatToString", e => n(e) ? e.map((e => e.format(f.value))) : e.format(f.value)]), t("set-picker-option", ["handleClear", ze]), (e, a) => (h(), S("div", {
                class: g([p(L).b(), p(E).b(), {
                    "has-sidebar": e.$slots.sidebar || p(oe),
                    "has-time": p(Ve)
                }])
            }, [C("div", {
                class: g(p(L).e("body-wrapper"))
            }, [M(e.$slots, "sidebar", {
                class: g(p(L).e("sidebar"))
            }), p(oe) ? (h(), S("div", {
                key: 0,
                class: g(p(L).e("sidebar"))
            }, [(h(!0), S(Y, null, _(p(k), ((e, a) => (h(), S("button", {
                key: a,
                type: "button",
                class: g(p(L).e("shortcut")),
                onClick: a => p(j)(e)
            }, P(e.text), 11, ["onClick"])))), 128))], 2)) : x("v-if", !0), C("div", {
                class: g(p(L).e("body"))
            }, [p(Ve) ? (h(), S("div", {
                key: 0,
                class: g(p(E).e("time-header"))
            }, [C("span", {
                class: g(p(E).e("editors-wrap"))
            }, [C("span", {
                class: g(p(E).e("time-picker-wrap"))
            }, [A(p(Me), {
                size: "small",
                disabled: p(B).selecting,
                placeholder: p(H)("el.datepicker.startDate"),
                class: g(p(E).e("editor")),
                "model-value": p(se),
                "validate-event": !1,
                onInput: e => Ne(e, "min"),
                onChange: e => Le(0, "min")
            }, null, 8, ["disabled", "placeholder", "class", "model-value", "onInput", "onChange"])], 2), I((h(), S("span", {
                class: g(p(E).e("time-picker-wrap"))
            }, [A(p(Me), {
                size: "small",
                class: g(p(E).e("editor")),
                disabled: p(B).selecting,
                placeholder: p(H)("el.datepicker.startTime"),
                "model-value": p(ie),
                "validate-event": !1,
                onFocus: e => Oe.value = !0,
                onInput: e => Ee(e, "min"),
                onChange: e => Te(0, "min")
            }, null, 8, ["class", "disabled", "placeholder", "model-value", "onFocus", "onInput", "onChange"]), A(p(aa), {
                visible: Oe.value,
                format: p(ce),
                "datetime-role": "start",
                "parsed-value": $.value,
                onPick: We
            }, null, 8, ["visible", "format", "parsed-value"])], 2)), [
                [p(fe), Ae]
            ])], 2), C("span", null, [A(p(G), null, {
                default: b((() => [A(p(ne))])),
                _: 1
            })]), C("span", {
                class: g([p(E).e("editors-wrap"), "is-right"])
            }, [C("span", {
                class: g(p(E).e("time-picker-wrap"))
            }, [A(p(Me), {
                size: "small",
                class: g(p(E).e("editor")),
                disabled: p(B).selecting,
                placeholder: p(H)("el.datepicker.endDate"),
                "model-value": p(ue),
                readonly: !p(R),
                "validate-event": !1,
                onInput: e => Ne(e, "max"),
                onChange: e => Le(0, "max")
            }, null, 8, ["class", "disabled", "placeholder", "model-value", "readonly", "onInput", "onChange"])], 2), I((h(), S("span", {
                class: g(p(E).e("time-picker-wrap"))
            }, [A(p(Me), {
                size: "small",
                class: g(p(E).e("editor")),
                disabled: p(B).selecting,
                placeholder: p(H)("el.datepicker.endTime"),
                "model-value": p(de),
                readonly: !p(R),
                "validate-event": !1,
                onFocus: e => p(R) && (Ie.value = !0),
                onInput: e => Ee(e, "max"),
                onChange: e => Te(0, "max")
            }, null, 8, ["class", "disabled", "placeholder", "model-value", "readonly", "onFocus", "onInput", "onChange"]), A(p(aa), {
                "datetime-role": "end",
                visible: Ie.value,
                format: p(ce),
                "parsed-value": V.value,
                onPick: je
            }, null, 8, ["visible", "format", "parsed-value"])], 2)), [
                [p(fe), Re]
            ])], 2)], 2)) : x("v-if", !0), C("div", {
                class: g([
                    [p(L).e("content"), p(E).e("content")], "is-left"
                ])
            }, [C("div", {
                class: g(p(E).e("header"))
            }, [C("button", {
                type: "button",
                class: g([p(L).e("icon-btn"), "d-arrow-left"]),
                "aria-label": p(H)("el.datepicker.prevYear"),
                onClick: pe
            }, [M(e.$slots, "prev-year", {}, (() => [A(p(G), null, {
                default: b((() => [A(p(te))])),
                _: 1
            })]))], 10, ["aria-label"]), C("button", {
                type: "button",
                class: g([p(L).e("icon-btn"), "arrow-left"]),
                "aria-label": p(H)("el.datepicker.prevMonth"),
                onClick: me
            }, [M(e.$slots, "prev-month", {}, (() => [A(p(G), null, {
                default: b((() => [A(p(le))])),
                _: 1
            })]))], 10, ["aria-label"]), e.unlinkPanels ? (h(), S("button", {
                key: 0,
                type: "button",
                disabled: !p(Pe),
                class: g([
                    [p(L).e("icon-btn"), {
                        "is-disabled": !p(Pe)
                    }], "d-arrow-right"
                ]),
                "aria-label": p(H)("el.datepicker.nextYear"),
                onClick: ge
            }, [M(e.$slots, "next-year", {}, (() => [A(p(G), null, {
                default: b((() => [A(p(re))])),
                _: 1
            })]))], 10, ["disabled", "aria-label"])) : x("v-if", !0), e.unlinkPanels ? (h(), S("button", {
                key: 1,
                type: "button",
                disabled: !p(Se),
                class: g([
                    [p(L).e("icon-btn"), {
                        "is-disabled": !p(Se)
                    }], "arrow-right"
                ]),
                "aria-label": p(H)("el.datepicker.nextMonth"),
                onClick: ke
            }, [M(e.$slots, "next-month", {}, (() => [A(p(G), null, {
                default: b((() => [A(p(ne))])),
                _: 1
            })]))], 10, ["disabled", "aria-label"])) : x("v-if", !0), C("div", null, P(p(q)), 1)], 2), A(Na, {
                "selection-mode": "range",
                date: $.value,
                "min-date": p(R),
                "max-date": p(N),
                "range-state": p(B),
                "disabled-date": p(o),
                "cell-class-name": p(s),
                onChangerange: p(T),
                onPick: _e,
                onSelect: p(z)
            }, null, 8, ["date", "min-date", "max-date", "range-state", "disabled-date", "cell-class-name", "onChangerange", "onSelect"])], 2), C("div", {
                class: g([
                    [p(L).e("content"), p(E).e("content")], "is-right"
                ])
            }, [C("div", {
                class: g(p(E).e("header"))
            }, [e.unlinkPanels ? (h(), S("button", {
                key: 0,
                type: "button",
                disabled: !p(Pe),
                class: g([
                    [p(L).e("icon-btn"), {
                        "is-disabled": !p(Pe)
                    }], "d-arrow-left"
                ]),
                "aria-label": p(H)("el.datepicker.prevYear"),
                onClick: we
            }, [M(e.$slots, "prev-year", {}, (() => [A(p(G), null, {
                default: b((() => [A(p(te))])),
                _: 1
            })]))], 10, ["disabled", "aria-label"])) : x("v-if", !0), e.unlinkPanels ? (h(), S("button", {
                key: 1,
                type: "button",
                disabled: !p(Se),
                class: g([
                    [p(L).e("icon-btn"), {
                        "is-disabled": !p(Se)
                    }], "arrow-left"
                ]),
                "aria-label": p(H)("el.datepicker.prevMonth"),
                onClick: De
            }, [M(e.$slots, "prev-month", {}, (() => [A(p(G), null, {
                default: b((() => [A(p(le))])),
                _: 1
            })]))], 10, ["disabled", "aria-label"])) : x("v-if", !0), C("button", {
                type: "button",
                "aria-label": p(H)("el.datepicker.nextYear"),
                class: g([p(L).e("icon-btn"), "d-arrow-right"]),
                onClick: he
            }, [M(e.$slots, "next-year", {}, (() => [A(p(G), null, {
                default: b((() => [A(p(re))])),
                _: 1
            })]))], 10, ["aria-label"]), C("button", {
                type: "button",
                class: g([p(L).e("icon-btn"), "arrow-right"]),
                "aria-label": p(H)("el.datepicker.nextMonth"),
                onClick: ye
            }, [M(e.$slots, "next-month", {}, (() => [A(p(G), null, {
                default: b((() => [A(p(ne))])),
                _: 1
            })]))], 10, ["aria-label"]), C("div", null, P(p(Q)), 1)], 2), A(Na, {
                "selection-mode": "range",
                date: V.value,
                "min-date": p(R),
                "max-date": p(N),
                "range-state": p(B),
                "disabled-date": p(o),
                "cell-class-name": p(s),
                onChangerange: p(T),
                onPick: _e,
                onSelect: p(z)
            }, null, 8, ["date", "min-date", "max-date", "range-state", "disabled-date", "cell-class-name", "onChangerange", "onSelect"])], 2)], 2)], 2), p(Ve) ? (h(), S("div", {
                key: 0,
                class: g(p(L).e("footer"))
            }, [p(m) ? (h(), y(p(Ce), {
                key: 0,
                text: "",
                size: "small",
                class: g(p(L).e("link-btn")),
                onClick: ze
            }, {
                default: b((() => [O(P(p(H)("el.datepicker.clear")), 1)])),
                _: 1
            }, 8, ["class"])) : x("v-if", !0), A(p(Ce), {
                plain: "",
                size: "small",
                class: g(p(L).e("link-btn")),
                disabled: p($e),
                onClick: e => p(W)(!1)
            }, {
                default: b((() => [O(P(p(H)("el.datepicker.confirm")), 1)])),
                _: 1
            }, 8, ["class", "disabled", "onClick"])], 2)) : x("v-if", !0)], 2))
        }
    });
var Za = q(Ua, [
    ["__file", "panel-date-range.vue"]
]);
const Ga = z({ ...xa
    }),
    qa = "year",
    Qa = r({
        name: "DatePickerMonthRange"
    }),
    Xa = r({ ...Qa,
        props: Ga,
        emits: ["pick", "set-picker-option", "calendar-change"],
        setup(a, {
            emit: t
        }) {
            const l = a,
                {
                    lang: r
                } = be(),
                o = u("EP_PICKER_BASE"),
                {
                    shortcuts: s,
                    disabledDate: c
                } = o.props,
                v = F(o.props, "format"),
                m = F(o.props, "defaultValue"),
                f = i(e().locale(r.value)),
                y = i(e().locale(r.value).add(1, qa)),
                {
                    minDate: k,
                    maxDate: w,
                    rangeState: D,
                    ppNs: $,
                    drpNs: V,
                    handleChangeRange: O,
                    handleRangeConfirm: I,
                    handleShortcutClick: R,
                    onSelect: N
                } = Ka(l, {
                    defaultValue: m,
                    leftDate: f,
                    rightDate: y,
                    unit: qa,
                    onParsedValueChanged: function(e, a) {
                        if (l.unlinkPanels && a) {
                            const t = (null == e ? void 0 : e.year()) || 0,
                                l = a.year();
                            y.value = t === l ? a.add(1, qa) : a
                        } else y.value = f.value.add(1, qa)
                    }
                }),
                B = d((() => !!s.length)),
                {
                    leftPrevYear: L,
                    rightNextYear: E,
                    leftNextYear: T,
                    rightPrevYear: W,
                    leftLabel: j,
                    rightLabel: z,
                    leftYear: K,
                    rightYear: H
                } = (({
                    unlinkPanels: e,
                    leftDate: a,
                    rightDate: t
                }) => {
                    const {
                        t: l
                    } = be();
                    return {
                        leftPrevYear: () => {
                            a.value = a.value.subtract(1, "year"), e.value || (t.value = t.value.subtract(1, "year"))
                        },
                        rightNextYear: () => {
                            e.value || (a.value = a.value.add(1, "year")), t.value = t.value.add(1, "year")
                        },
                        leftNextYear: () => {
                            a.value = a.value.add(1, "year")
                        },
                        rightPrevYear: () => {
                            t.value = t.value.subtract(1, "year")
                        },
                        leftLabel: d((() => `${a.value.year()} ${l("el.datepicker.year")}`)),
                        rightLabel: d((() => `${t.value.year()} ${l("el.datepicker.year")}`)),
                        leftYear: d((() => a.value.year())),
                        rightYear: d((() => t.value.year() === a.value.year() ? a.value.year() + 1 : t.value.year()))
                    }
                })({
                    unlinkPanels: F(l, "unlinkPanels"),
                    leftDate: f,
                    rightDate: y
                }),
                U = d((() => l.unlinkPanels && H.value > K.value + 1)),
                Z = (e, a = !0) => {
                    const l = e.minDate,
                        n = e.maxDate;
                    w.value === n && k.value === l || (t("calendar-change", [l.toDate(), n && n.toDate()]), w.value = n, k.value = l, a && I())
                };
            return t("set-picker-option", ["isValidValue", Ma]), t("set-picker-option", ["formatToString", e => n(e) ? e.map((e => e.format(v.value))) : e.format(v.value)]), t("set-picker-option", ["parseUserInput", a => n(a) ? a.map((a => e(a, v.value).locale(r.value))) : e(a, v.value).locale(r.value)]), t("set-picker-option", ["handleClear", () => {
                f.value = Pa(p(m), {
                    lang: p(r),
                    unit: "year",
                    unlinkPanels: l.unlinkPanels
                })[0], y.value = f.value.add(1, "year"), t("pick", null)
            }]), (e, a) => (h(), S("div", {
                class: g([p($).b(), p(V).b(), {
                    "has-sidebar": Boolean(e.$slots.sidebar) || p(B)
                }])
            }, [C("div", {
                class: g(p($).e("body-wrapper"))
            }, [M(e.$slots, "sidebar", {
                class: g(p($).e("sidebar"))
            }), p(B) ? (h(), S("div", {
                key: 0,
                class: g(p($).e("sidebar"))
            }, [(h(!0), S(Y, null, _(p(s), ((e, a) => (h(), S("button", {
                key: a,
                type: "button",
                class: g(p($).e("shortcut")),
                onClick: a => p(R)(e)
            }, P(e.text), 11, ["onClick"])))), 128))], 2)) : x("v-if", !0), C("div", {
                class: g(p($).e("body"))
            }, [C("div", {
                class: g([
                    [p($).e("content"), p(V).e("content")], "is-left"
                ])
            }, [C("div", {
                class: g(p(V).e("header"))
            }, [C("button", {
                type: "button",
                class: g([p($).e("icon-btn"), "d-arrow-left"]),
                onClick: p(L)
            }, [M(e.$slots, "prev-year", {}, (() => [A(p(G), null, {
                default: b((() => [A(p(te))])),
                _: 1
            })]))], 10, ["onClick"]), e.unlinkPanels ? (h(), S("button", {
                key: 0,
                type: "button",
                disabled: !p(U),
                class: g([
                    [p($).e("icon-btn"), {
                        [p($).is("disabled")]: !p(U)
                    }], "d-arrow-right"
                ]),
                onClick: p(T)
            }, [M(e.$slots, "next-year", {}, (() => [A(p(G), null, {
                default: b((() => [A(p(re))])),
                _: 1
            })]))], 10, ["disabled", "onClick"])) : x("v-if", !0), C("div", null, P(p(j)), 1)], 2), A(Fa, {
                "selection-mode": "range",
                date: f.value,
                "min-date": p(k),
                "max-date": p(w),
                "range-state": p(D),
                "disabled-date": p(c),
                onChangerange: p(O),
                onPick: Z,
                onSelect: p(N)
            }, null, 8, ["date", "min-date", "max-date", "range-state", "disabled-date", "onChangerange", "onSelect"])], 2), C("div", {
                class: g([
                    [p($).e("content"), p(V).e("content")], "is-right"
                ])
            }, [C("div", {
                class: g(p(V).e("header"))
            }, [e.unlinkPanels ? (h(), S("button", {
                key: 0,
                type: "button",
                disabled: !p(U),
                class: g([
                    [p($).e("icon-btn"), {
                        "is-disabled": !p(U)
                    }], "d-arrow-left"
                ]),
                onClick: p(W)
            }, [M(e.$slots, "prev-year", {}, (() => [A(p(G), null, {
                default: b((() => [A(p(te))])),
                _: 1
            })]))], 10, ["disabled", "onClick"])) : x("v-if", !0), C("button", {
                type: "button",
                class: g([p($).e("icon-btn"), "d-arrow-right"]),
                onClick: p(E)
            }, [M(e.$slots, "next-year", {}, (() => [A(p(G), null, {
                default: b((() => [A(p(re))])),
                _: 1
            })]))], 10, ["onClick"]), C("div", null, P(p(z)), 1)], 2), A(Fa, {
                "selection-mode": "range",
                date: y.value,
                "min-date": p(k),
                "max-date": p(w),
                "range-state": p(D),
                "disabled-date": p(c),
                onChangerange: p(O),
                onPick: Z,
                onSelect: p(N)
            }, null, 8, ["date", "min-date", "max-date", "range-state", "disabled-date", "onChangerange", "onSelect"])], 2)], 2)], 2)], 2))
        }
    });
var Ja = q(Xa, [
    ["__file", "panel-month-range.vue"]
]);
const et = z({ ...xa
    }),
    at = "year",
    tt = r({
        name: "DatePickerYearRange"
    });
var lt = q(r({ ...tt,
    props: et,
    emits: ["pick", "set-picker-option", "calendar-change"],
    setup(a, {
        emit: t
    }) {
        const l = a,
            {
                lang: r
            } = be(),
            o = i(e().locale(r.value)),
            v = i(o.value.add(10, "year")),
            {
                pickerNs: m
            } = u(ba),
            f = s("date-range-picker"),
            y = d((() => !!X.length)),
            k = d((() => [m.b(), f.b(), {
                "has-sidebar": Boolean(B().sidebar) || y.value
            }])),
            w = d((() => ({
                content: [m.e("content"), f.e("content"), "is-left"],
                arrowLeftBtn: [m.e("icon-btn"), "d-arrow-left"],
                arrowRightBtn: [m.e("icon-btn"), {
                    [m.is("disabled")]: !W.value
                }, "d-arrow-right"]
            }))),
            D = d((() => ({
                content: [m.e("content"), f.e("content"), "is-right"],
                arrowLeftBtn: [m.e("icon-btn"), {
                    "is-disabled": !W.value
                }, "d-arrow-left"],
                arrowRightBtn: [m.e("icon-btn"), "d-arrow-right"]
            }))),
            $ = za(r),
            {
                leftPrevYear: V,
                rightNextYear: O,
                leftNextYear: I,
                rightPrevYear: R,
                leftLabel: N,
                rightLabel: L,
                leftYear: E,
                rightYear: T
            } = (({
                unlinkPanels: e,
                leftDate: a,
                rightDate: t
            }) => ({
                leftPrevYear: () => {
                    a.value = a.value.subtract(10, "year"), e.value || (t.value = t.value.subtract(10, "year"))
                },
                rightNextYear: () => {
                    e.value || (a.value = a.value.add(10, "year")), t.value = t.value.add(10, "year")
                },
                leftNextYear: () => {
                    a.value = a.value.add(10, "year")
                },
                rightPrevYear: () => {
                    t.value = t.value.subtract(10, "year")
                },
                leftLabel: d((() => {
                    const e = 10 * Math.floor(a.value.year() / 10);
                    return `${e}-${e+9}`
                })),
                rightLabel: d((() => {
                    const e = 10 * Math.floor(t.value.year() / 10);
                    return `${e}-${e+9}`
                })),
                leftYear: d((() => 10 * Math.floor(a.value.year() / 10) + 9)),
                rightYear: d((() => 10 * Math.floor(t.value.year() / 10)))
            }))({
                unlinkPanels: F(l, "unlinkPanels"),
                leftDate: o,
                rightDate: v
            }),
            W = d((() => l.unlinkPanels && T.value > E.value + 1)),
            j = i(),
            z = i(),
            K = i({
                endDate: null,
                selecting: !1
            }),
            H = e => {
                K.value = e
            },
            U = (e, a = !0) => {
                const l = e.minDate,
                    n = e.maxDate;
                z.value === n && j.value === l || (t("calendar-change", [l.toDate(), n && n.toDate()]), z.value = n, j.value = l, a && Z())
            },
            Z = (e = !1) => {
                Ma([j.value, z.value]) && t("pick", [j.value, z.value], e)
            },
            q = e => {
                K.value.selecting = e, e || (K.value.endDate = null)
            },
            Q = u("EP_PICKER_BASE"),
            {
                shortcuts: X,
                disabledDate: J
            } = Q.props,
            ee = F(Q.props, "format"),
            ae = F(Q.props, "defaultValue"),
            le = () => {
                let a;
                if (n(ae.value)) {
                    const a = e(ae.value[0]);
                    let t = e(ae.value[1]);
                    return l.unlinkPanels || (t = a.add(10, at)), [a, t]
                }
                return a = ae.value ? e(ae.value) : e(), a = a.locale(r.value), [a, a.add(10, at)]
            };
        c((() => ae.value), (e => {
            if (e) {
                const e = le();
                o.value = e[0], v.value = e[1]
            }
        }), {
            immediate: !0
        }), c((() => l.parsedValue), (e => {
            if (e && 2 === e.length)
                if (j.value = e[0], z.value = e[1], o.value = j.value, l.unlinkPanels && z.value) {
                    const e = j.value.year(),
                        a = z.value.year();
                    v.value = e === a ? z.value.add(10, "year") : z.value
                } else v.value = o.value.add(10, "year");
            else {
                const e = le();
                j.value = void 0, z.value = void 0, o.value = e[0], v.value = e[1]
            }
        }), {
            immediate: !0
        });
        return t("set-picker-option", ["isValidValue", e => Ma(e) && (!J || !J(e[0].toDate()) && !J(e[1].toDate()))]), t("set-picker-option", ["parseUserInput", a => n(a) ? a.map((a => e(a, ee.value).locale(r.value))) : e(a, ee.value).locale(r.value)]), t("set-picker-option", ["formatToString", e => n(e) ? e.map((e => e.format(ee.value))) : e.format(ee.value)]), t("set-picker-option", ["handleClear", () => {
            const e = le();
            o.value = e[0], v.value = e[1], z.value = void 0, j.value = void 0, t("pick", null)
        }]), (e, a) => (h(), S("div", {
            class: g(p(k))
        }, [C("div", {
            class: g(p(m).e("body-wrapper"))
        }, [M(e.$slots, "sidebar", {
            class: g(p(m).e("sidebar"))
        }), p(y) ? (h(), S("div", {
            key: 0,
            class: g(p(m).e("sidebar"))
        }, [(h(!0), S(Y, null, _(p(X), ((e, a) => (h(), S("button", {
            key: a,
            type: "button",
            class: g(p(m).e("shortcut")),
            onClick: a => p($)(e)
        }, P(e.text), 11, ["onClick"])))), 128))], 2)) : x("v-if", !0), C("div", {
            class: g(p(m).e("body"))
        }, [C("div", {
            class: g(p(w).content)
        }, [C("div", {
            class: g(p(f).e("header"))
        }, [C("button", {
            type: "button",
            class: g(p(w).arrowLeftBtn),
            onClick: p(V)
        }, [M(e.$slots, "prev-year", {}, (() => [A(p(G), null, {
            default: b((() => [A(p(te))])),
            _: 1
        })]))], 10, ["onClick"]), e.unlinkPanels ? (h(), S("button", {
            key: 0,
            type: "button",
            disabled: !p(W),
            class: g(p(w).arrowRightBtn),
            onClick: p(I)
        }, [M(e.$slots, "next-year", {}, (() => [A(p(G), null, {
            default: b((() => [A(p(re))])),
            _: 1
        })]))], 10, ["disabled", "onClick"])) : x("v-if", !0), C("div", null, P(p(N)), 1)], 2), A(Ea, {
            "selection-mode": "range",
            date: o.value,
            "min-date": j.value,
            "max-date": z.value,
            "range-state": K.value,
            "disabled-date": p(J),
            onChangerange: H,
            onPick: U,
            onSelect: q
        }, null, 8, ["date", "min-date", "max-date", "range-state", "disabled-date"])], 2), C("div", {
            class: g(p(D).content)
        }, [C("div", {
            class: g(p(f).e("header"))
        }, [e.unlinkPanels ? (h(), S("button", {
            key: 0,
            type: "button",
            disabled: !p(W),
            class: g(p(D).arrowLeftBtn),
            onClick: p(R)
        }, [M(e.$slots, "prev-year", {}, (() => [A(p(G), null, {
            default: b((() => [A(p(te))])),
            _: 1
        })]))], 10, ["disabled", "onClick"])) : x("v-if", !0), C("button", {
            type: "button",
            class: g(p(D).arrowRightBtn),
            onClick: p(O)
        }, [M(e.$slots, "next-year", {}, (() => [A(p(G), null, {
            default: b((() => [A(p(re))])),
            _: 1
        })]))], 10, ["onClick"]), C("div", null, P(p(L)), 1)], 2), A(Ea, {
            "selection-mode": "range",
            date: v.value,
            "min-date": j.value,
            "max-date": z.value,
            "range-state": K.value,
            "disabled-date": p(J),
            onChangerange: H,
            onPick: U,
            onSelect: q
        }, null, 8, ["date", "min-date", "max-date", "range-state", "disabled-date"])], 2)], 2)], 2)], 2))
    }
}), [
    ["__file", "panel-year-range.vue"]
]);
e.extend(la), e.extend(ra), e.extend(Ye), e.extend(ia), e.extend(ca), e.extend(pa), e.extend(fa), e.extend(ya);
const nt = oe(r({
    name: "ElDatePicker",
    install: null,
    props: ga,
    emits: ["update:modelValue"],
    setup(e, {
        expose: a,
        emit: t,
        slots: l
    }) {
        const n = s("picker-panel");
        f("ElPopperOptions", W(F(e, "popperOptions"))), f(ba, {
            slots: l,
            pickerNs: n
        });
        const r = i();
        a({
            focus: (e = !0) => {
                var a;
                null == (a = r.value) || a.focus(e)
            },
            handleOpen: () => {
                var e;
                null == (e = r.value) || e.handleOpen()
            },
            handleClose: () => {
                var e;
                null == (e = r.value) || e.handleClose()
            }
        });
        const o = e => {
            t("update:modelValue", e)
        };
        return () => {
            var a;
            const t = null != (a = e.format) ? a : Ae[e.type] || Ie,
                n = function(e) {
                    switch (e) {
                        case "daterange":
                        case "datetimerange":
                            return Za;
                        case "monthrange":
                            return Ja;
                        case "yearrange":
                            return lt;
                        default:
                            return Wa
                    }
                }(e.type);
            return A(Ge, $(e, {
                format: t,
                type: e.type,
                ref: r,
                "onUpdate:modelValue": o
            }), {
                default: e => A(n, e, {
                    "prev-month": l["prev-month"],
                    "next-month": l["next-month"],
                    "prev-year": l["prev-year"],
                    "next-year": l["next-year"]
                }),
                "range-separator": l["range-separator"]
            })
        }
    }
}));
export {
    nt as E
};