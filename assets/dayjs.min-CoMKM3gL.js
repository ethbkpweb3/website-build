import {
    bh as t,
    H as e
} from "./index-CQfCy4Xm.js";
var r = {
    exports: {}
};
const n = e(r.exports = function() {
    var t = 1e3,
        e = 6e4,
        r = 36e5,
        n = "millisecond",
        s = "second",
        i = "minute",
        u = "hour",
        a = "day",
        o = "week",
        c = "month",
        f = "quarter",
        h = "year",
        d = "date",
        $ = "Invalid Date",
        l = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
        M = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
        m = {
            name: "en",
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            ordinal: function(t) {
                var e = ["th", "st", "nd", "rd"],
                    r = t % 100;
                return "[" + t + (e[(r - 20) % 10] || e[r] || e[0]) + "]"
            }
        },
        v = function(t, e, r) {
            var n = String(t);
            return !n || n.length >= e ? t : "" + Array(e + 1 - n.length).join(r) + t
        },
        y = {
            s: v,
            z: function(t) {
                var e = -t.utcOffset(),
                    r = Math.abs(e),
                    n = Math.floor(r / 60),
                    s = r % 60;
                return (e <= 0 ? "+" : "-") + v(n, 2, "0") + ":" + v(s, 2, "0")
            },
            m: function t(e, r) {
                if (e.date() < r.date()) return -t(r, e);
                var n = 12 * (r.year() - e.year()) + (r.month() - e.month()),
                    s = e.clone().add(n, c),
                    i = r - s < 0,
                    u = e.clone().add(n + (i ? -1 : 1), c);
                return +(-(n + (r - s) / (i ? s - u : u - s)) || 0)
            },
            a: function(t) {
                return t < 0 ? Math.ceil(t) || 0 : Math.floor(t)
            },
            p: function(t) {
                return {
                    M: c,
                    y: h,
                    w: o,
                    d: a,
                    D: d,
                    h: u,
                    m: i,
                    s: s,
                    ms: n,
                    Q: f
                }[t] || String(t || "").toLowerCase().replace(/s$/, "")
            },
            u: function(t) {
                return void 0 === t
            }
        },
        D = "en",
        g = {};
    g[D] = m;
    var S = "$isDayjsObject",
        p = function(t) {
            return t instanceof _ || !(!t || !t[S])
        },
        w = function t(e, r, n) {
            var s;
            if (!e) return D;
            if ("string" == typeof e) {
                var i = e.toLowerCase();
                g[i] && (s = i), r && (g[i] = r, s = i);
                var u = e.split("-");
                if (!s && u.length > 1) return t(u[0])
            } else {
                var a = e.name;
                g[a] = e, s = a
            }
            return !n && s && (D = s), s || !n && D
        },
        O = function(t, e) {
            if (p(t)) return t.clone();
            var r = "object" == typeof e ? e : {};
            return r.date = t, r.args = arguments, new _(r)
        },
        b = y;
    b.l = w, b.i = p, b.w = function(t, e) {
        return O(t, {
            locale: e.$L,
            utc: e.$u,
            x: e.$x,
            $offset: e.$offset
        })
    };
    var _ = function() {
            function m(t) {
                this.$L = w(t.locale, null, !0), this.parse(t), this.$x = this.$x || t.x || {}, this[S] = !0
            }
            var v = m.prototype;
            return v.parse = function(t) {
                this.$d = function(t) {
                    var e = t.date,
                        r = t.utc;
                    if (null === e) return new Date(NaN);
                    if (b.u(e)) return new Date;
                    if (e instanceof Date) return new Date(e);
                    if ("string" == typeof e && !/Z$/i.test(e)) {
                        var n = e.match(l);
                        if (n) {
                            var s = n[2] - 1 || 0,
                                i = (n[7] || "0").substring(0, 3);
                            return r ? new Date(Date.UTC(n[1], s, n[3] || 1, n[4] || 0, n[5] || 0, n[6] || 0, i)) : new Date(n[1], s, n[3] || 1, n[4] || 0, n[5] || 0, n[6] || 0, i)
                        }
                    }
                    return new Date(e)
                }(t), this.init()
            }, v.init = function() {
                var t = this.$d;
                this.$y = t.getFullYear(), this.$M = t.getMonth(), this.$D = t.getDate(), this.$W = t.getDay(), this.$H = t.getHours(), this.$m = t.getMinutes(), this.$s = t.getSeconds(), this.$ms = t.getMilliseconds()
            }, v.$utils = function() {
                return b
            }, v.isValid = function() {
                return !(this.$d.toString() === $)
            }, v.isSame = function(t, e) {
                var r = O(t);
                return this.startOf(e) <= r && r <= this.endOf(e)
            }, v.isAfter = function(t, e) {
                return O(t) < this.startOf(e)
            }, v.isBefore = function(t, e) {
                return this.endOf(e) < O(t)
            }, v.$g = function(t, e, r) {
                return b.u(t) ? this[e] : this.set(r, t)
            }, v.unix = function() {
                return Math.floor(this.valueOf() / 1e3)
            }, v.valueOf = function() {
                return this.$d.getTime()
            }, v.startOf = function(t, e) {
                var r = this,
                    n = !!b.u(e) || e,
                    f = b.p(t),
                    $ = function(t, e) {
                        var s = b.w(r.$u ? Date.UTC(r.$y, e, t) : new Date(r.$y, e, t), r);
                        return n ? s : s.endOf(a)
                    },
                    l = function(t, e) {
                        return b.w(r.toDate()[t].apply(r.toDate("s"), (n ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e)), r)
                    },
                    M = this.$W,
                    m = this.$M,
                    v = this.$D,
                    y = "set" + (this.$u ? "UTC" : "");
                switch (f) {
                    case h:
                        return n ? $(1, 0) : $(31, 11);
                    case c:
                        return n ? $(1, m) : $(0, m + 1);
                    case o:
                        var D = this.$locale().weekStart || 0,
                            g = (M < D ? M + 7 : M) - D;
                        return $(n ? v - g : v + (6 - g), m);
                    case a:
                    case d:
                        return l(y + "Hours", 0);
                    case u:
                        return l(y + "Minutes", 1);
                    case i:
                        return l(y + "Seconds", 2);
                    case s:
                        return l(y + "Milliseconds", 3);
                    default:
                        return this.clone()
                }
            }, v.endOf = function(t) {
                return this.startOf(t, !1)
            }, v.$set = function(t, e) {
                var r, o = b.p(t),
                    f = "set" + (this.$u ? "UTC" : ""),
                    $ = (r = {}, r[a] = f + "Date", r[d] = f + "Date", r[c] = f + "Month", r[h] = f + "FullYear", r[u] = f + "Hours", r[i] = f + "Minutes", r[s] = f + "Seconds", r[n] = f + "Milliseconds", r)[o],
                    l = o === a ? this.$D + (e - this.$W) : e;
                if (o === c || o === h) {
                    var M = this.clone().set(d, 1);
                    M.$d[$](l), M.init(), this.$d = M.set(d, Math.min(this.$D, M.daysInMonth())).$d
                } else $ && this.$d[$](l);
                return this.init(), this
            }, v.set = function(t, e) {
                return this.clone().$set(t, e)
            }, v.get = function(t) {
                return this[b.p(t)]()
            }, v.add = function(n, f) {
                var d, $ = this;
                n = Number(n);
                var l = b.p(f),
                    M = function(t) {
                        var e = O($);
                        return b.w(e.date(e.date() + Math.round(t * n)), $)
                    };
                if (l === c) return this.set(c, this.$M + n);
                if (l === h) return this.set(h, this.$y + n);
                if (l === a) return M(1);
                if (l === o) return M(7);
                var m = (d = {}, d[i] = e, d[u] = r, d[s] = t, d)[l] || 1,
                    v = this.$d.getTime() + n * m;
                return b.w(v, this)
            }, v.subtract = function(t, e) {
                return this.add(-1 * t, e)
            }, v.format = function(t) {
                var e = this,
                    r = this.$locale();
                if (!this.isValid()) return r.invalidDate || $;
                var n = t || "YYYY-MM-DDTHH:mm:ssZ",
                    s = b.z(this),
                    i = this.$H,
                    u = this.$m,
                    a = this.$M,
                    o = r.weekdays,
                    c = r.months,
                    f = r.meridiem,
                    h = function(t, r, s, i) {
                        return t && (t[r] || t(e, n)) || s[r].slice(0, i)
                    },
                    d = function(t) {
                        return b.s(i % 12 || 12, t, "0")
                    },
                    l = f || function(t, e, r) {
                        var n = t < 12 ? "AM" : "PM";
                        return r ? n.toLowerCase() : n
                    };
                return n.replace(M, (function(t, n) {
                    return n || function(t) {
                        switch (t) {
                            case "YY":
                                return String(e.$y).slice(-2);
                            case "YYYY":
                                return b.s(e.$y, 4, "0");
                            case "M":
                                return a + 1;
                            case "MM":
                                return b.s(a + 1, 2, "0");
                            case "MMM":
                                return h(r.monthsShort, a, c, 3);
                            case "MMMM":
                                return h(c, a);
                            case "D":
                                return e.$D;
                            case "DD":
                                return b.s(e.$D, 2, "0");
                            case "d":
                                return String(e.$W);
                            case "dd":
                                return h(r.weekdaysMin, e.$W, o, 2);
                            case "ddd":
                                return h(r.weekdaysShort, e.$W, o, 3);
                            case "dddd":
                                return o[e.$W];
                            case "H":
                                return String(i);
                            case "HH":
                                return b.s(i, 2, "0");
                            case "h":
                                return d(1);
                            case "hh":
                                return d(2);
                            case "a":
                                return l(i, u, !0);
                            case "A":
                                return l(i, u, !1);
                            case "m":
                                return String(u);
                            case "mm":
                                return b.s(u, 2, "0");
                            case "s":
                                return String(e.$s);
                            case "ss":
                                return b.s(e.$s, 2, "0");
                            case "SSS":
                                return b.s(e.$ms, 3, "0");
                            case "Z":
                                return s
                        }
                        return null
                    }(t) || s.replace(":", "")
                }))
            }, v.utcOffset = function() {
                return 15 * -Math.round(this.$d.getTimezoneOffset() / 15)
            }, v.diff = function(n, d, $) {
                var l, M = this,
                    m = b.p(d),
                    v = O(n),
                    y = (v.utcOffset() - this.utcOffset()) * e,
                    D = this - v,
                    g = function() {
                        return b.m(M, v)
                    };
                switch (m) {
                    case h:
                        l = g() / 12;
                        break;
                    case c:
                        l = g();
                        break;
                    case f:
                        l = g() / 3;
                        break;
                    case o:
                        l = (D - y) / 6048e5;
                        break;
                    case a:
                        l = (D - y) / 864e5;
                        break;
                    case u:
                        l = D / r;
                        break;
                    case i:
                        l = D / e;
                        break;
                    case s:
                        l = D / t;
                        break;
                    default:
                        l = D
                }
                return $ ? l : b.a(l)
            }, v.daysInMonth = function() {
                return this.endOf(c).$D
            }, v.$locale = function() {
                return g[this.$L]
            }, v.locale = function(t, e) {
                if (!t) return this.$L;
                var r = this.clone(),
                    n = w(t, e, !0);
                return n && (r.$L = n), r
            }, v.clone = function() {
                return b.w(this.$d, this)
            }, v.toDate = function() {
                return new Date(this.valueOf())
            }, v.toJSON = function() {
                return this.isValid() ? this.toISOString() : null
            }, v.toISOString = function() {
                return this.$d.toISOString()
            }, v.toString = function() {
                return this.$d.toUTCString()
            }, m
        }(),
        k = _.prototype;
    return O.prototype = k, [
        ["$ms", n],
        ["$s", s],
        ["$m", i],
        ["$H", u],
        ["$W", a],
        ["$M", c],
        ["$y", h],
        ["$D", d]
    ].forEach((function(t) {
        k[t[1]] = function(e) {
            return this.$g(e, t[0], t[1])
        }
    })), O.extend = function(t, e) {
        return t.$i || (t(e, _, O), t.$i = !0), O
    }, O.locale = w, O.isDayjs = p, O.unix = function(t) {
        return O(1e3 * t)
    }, O.en = g[D], O.Ls = g, O.p = {}, O
}());
export {
    n as d
};