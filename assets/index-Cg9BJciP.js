import {dy as t, T as r} from "./index-jdACH0Rc.js";
var e = (t => (t[t.TEXT = 1] = "TEXT",
t[t.CLASS = 2] = "CLASS",
t[t.STYLE = 4] = "STYLE",
t[t.PROPS = 8] = "PROPS",
t[t.FULL_PROPS = 16] = "FULL_PROPS",
t[t.HYDRATE_EVENTS = 32] = "HYDRATE_EVENTS",
t[t.STABLE_FRAGMENT = 64] = "STABLE_FRAGMENT",
t[t.KEYED_FRAGMENT = 128] = "KEYED_FRAGMENT",
t[t.UNKEYED_FRAGMENT = 256] = "UNKEYED_FRAGMENT",
t[t.NEED_PATCH = 512] = "NEED_PATCH",
t[t.DYNAMIC_SLOTS = 1024] = "DYNAMIC_SLOTS",
t[t.HOISTED = -1] = "HOISTED",
t[t.BAIL = -2] = "BAIL",
t))(e || {});
const n = e => {
    const a = t(e) ? e : [e]
      , o = [];
    return a.forEach((e => {
        var a;
        t(e) ? o.push(...n(e)) : r(e) && t(e.children) ? o.push(...n(e.children)) : (o.push(e),
        r(e) && (null == (a = e.component) ? void 0 : a.subTree) && o.push(...n(e.component.subTree)))
    }
    )),
    o
}
;
function a(t, r) {
    (function(t) {
        return "string" == typeof t && -1 !== t.indexOf(".") && 1 === parseFloat(t)
    }
    )(t) && (t = "100%");
    var e = function(t) {
        return "string" == typeof t && -1 !== t.indexOf("%")
    }(t);
    return t = 360 === r ? t : Math.min(r, Math.max(0, parseFloat(t))),
    e && (t = parseInt(String(t * r), 10) / 100),
    Math.abs(t - r) < 1e-6 ? 1 : t = 360 === r ? (t < 0 ? t % r + r : t % r) / parseFloat(String(r)) : t % r / parseFloat(String(r))
}
function o(t) {
    return Math.min(1, Math.max(0, t))
}
function i(t) {
    return t = parseFloat(t),
    (isNaN(t) || t < 0 || t > 1) && (t = 1),
    t
}
function h(t) {
    return t <= 1 ? "".concat(100 * Number(t), "%") : t
}
function s(t) {
    return 1 === t.length ? "0" + t : String(t)
}
function f(t, r, e) {
    t = a(t, 255),
    r = a(r, 255),
    e = a(e, 255);
    var n = Math.max(t, r, e)
      , o = Math.min(t, r, e)
      , i = 0
      , h = 0
      , s = (n + o) / 2;
    if (n === o)
        h = 0,
        i = 0;
    else {
        var f = n - o;
        switch (h = s > .5 ? f / (2 - n - o) : f / (n + o),
        n) {
        case t:
            i = (r - e) / f + (r < e ? 6 : 0);
            break;
        case r:
            i = (e - t) / f + 2;
            break;
        case e:
            i = (t - r) / f + 4
        }
        i /= 6
    }
    return {
        h: i,
        s: h,
        l: s
    }
}
function c(t, r, e) {
    return e < 0 && (e += 1),
    e > 1 && (e -= 1),
    e < 1 / 6 ? t + 6 * e * (r - t) : e < .5 ? r : e < 2 / 3 ? t + (r - t) * (2 / 3 - e) * 6 : t
}
function u(t, r, e) {
    t = a(t, 255),
    r = a(r, 255),
    e = a(e, 255);
    var n = Math.max(t, r, e)
      , o = Math.min(t, r, e)
      , i = 0
      , h = n
      , s = n - o
      , f = 0 === n ? 0 : s / n;
    if (n === o)
        i = 0;
    else {
        switch (n) {
        case t:
            i = (r - e) / s + (r < e ? 6 : 0);
            break;
        case r:
            i = (e - t) / s + 2;
            break;
        case e:
            i = (t - r) / s + 4
        }
        i /= 6
    }
    return {
        h: i,
        s: f,
        v: h
    }
}
function g(t, r, e, n) {
    var a = [s(Math.round(t).toString(16)), s(Math.round(r).toString(16)), s(Math.round(e).toString(16))];
    return n && a[0].startsWith(a[0].charAt(1)) && a[1].startsWith(a[1].charAt(1)) && a[2].startsWith(a[2].charAt(1)) ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) : a.join("")
}
function d(t) {
    return l(t) / 255
}
function l(t) {
    return parseInt(t, 16)
}
var b = {
    aliceblue: "#f0f8ff",
    antiquewhite: "#faebd7",
    aqua: "#00ffff",
    aquamarine: "#7fffd4",
    azure: "#f0ffff",
    beige: "#f5f5dc",
    bisque: "#ffe4c4",
    black: "#000000",
    blanchedalmond: "#ffebcd",
    blue: "#0000ff",
    blueviolet: "#8a2be2",
    brown: "#a52a2a",
    burlywood: "#deb887",
    cadetblue: "#5f9ea0",
    chartreuse: "#7fff00",
    chocolate: "#d2691e",
    coral: "#ff7f50",
    cornflowerblue: "#6495ed",
    cornsilk: "#fff8dc",
    crimson: "#dc143c",
    cyan: "#00ffff",
    darkblue: "#00008b",
    darkcyan: "#008b8b",
    darkgoldenrod: "#b8860b",
    darkgray: "#a9a9a9",
    darkgreen: "#006400",
    darkgrey: "#a9a9a9",
    darkkhaki: "#bdb76b",
    darkmagenta: "#8b008b",
    darkolivegreen: "#556b2f",
    darkorange: "#ff8c00",
    darkorchid: "#9932cc",
    darkred: "#8b0000",
    darksalmon: "#e9967a",
    darkseagreen: "#8fbc8f",
    darkslateblue: "#483d8b",
    darkslategray: "#2f4f4f",
    darkslategrey: "#2f4f4f",
    darkturquoise: "#00ced1",
    darkviolet: "#9400d3",
    deeppink: "#ff1493",
    deepskyblue: "#00bfff",
    dimgray: "#696969",
    dimgrey: "#696969",
    dodgerblue: "#1e90ff",
    firebrick: "#b22222",
    floralwhite: "#fffaf0",
    forestgreen: "#228b22",
    fuchsia: "#ff00ff",
    gainsboro: "#dcdcdc",
    ghostwhite: "#f8f8ff",
    goldenrod: "#daa520",
    gold: "#ffd700",
    gray: "#808080",
    green: "#008000",
    greenyellow: "#adff2f",
    grey: "#808080",
    honeydew: "#f0fff0",
    hotpink: "#ff69b4",
    indianred: "#cd5c5c",
    indigo: "#4b0082",
    ivory: "#fffff0",
    khaki: "#f0e68c",
    lavenderblush: "#fff0f5",
    lavender: "#e6e6fa",
    lawngreen: "#7cfc00",
    lemonchiffon: "#fffacd",
    lightblue: "#add8e6",
    lightcoral: "#f08080",
    lightcyan: "#e0ffff",
    lightgoldenrodyellow: "#fafad2",
    lightgray: "#d3d3d3",
    lightgreen: "#90ee90",
    lightgrey: "#d3d3d3",
    lightpink: "#ffb6c1",
    lightsalmon: "#ffa07a",
    lightseagreen: "#20b2aa",
    lightskyblue: "#87cefa",
    lightslategray: "#778899",
    lightslategrey: "#778899",
    lightsteelblue: "#b0c4de",
    lightyellow: "#ffffe0",
    lime: "#00ff00",
    limegreen: "#32cd32",
    linen: "#faf0e6",
    magenta: "#ff00ff",
    maroon: "#800000",
    mediumaquamarine: "#66cdaa",
    mediumblue: "#0000cd",
    mediumorchid: "#ba55d3",
    mediumpurple: "#9370db",
    mediumseagreen: "#3cb371",
    mediumslateblue: "#7b68ee",
    mediumspringgreen: "#00fa9a",
    mediumturquoise: "#48d1cc",
    mediumvioletred: "#c71585",
    midnightblue: "#191970",
    mintcream: "#f5fffa",
    mistyrose: "#ffe4e1",
    moccasin: "#ffe4b5",
    navajowhite: "#ffdead",
    navy: "#000080",
    oldlace: "#fdf5e6",
    olive: "#808000",
    olivedrab: "#6b8e23",
    orange: "#ffa500",
    orangered: "#ff4500",
    orchid: "#da70d6",
    palegoldenrod: "#eee8aa",
    palegreen: "#98fb98",
    paleturquoise: "#afeeee",
    palevioletred: "#db7093",
    papayawhip: "#ffefd5",
    peachpuff: "#ffdab9",
    peru: "#cd853f",
    pink: "#ffc0cb",
    plum: "#dda0dd",
    powderblue: "#b0e0e6",
    purple: "#800080",
    rebeccapurple: "#663399",
    red: "#ff0000",
    rosybrown: "#bc8f8f",
    royalblue: "#4169e1",
    saddlebrown: "#8b4513",
    salmon: "#fa8072",
    sandybrown: "#f4a460",
    seagreen: "#2e8b57",
    seashell: "#fff5ee",
    sienna: "#a0522d",
    silver: "#c0c0c0",
    skyblue: "#87ceeb",
    slateblue: "#6a5acd",
    slategray: "#708090",
    slategrey: "#708090",
    snow: "#fffafa",
    springgreen: "#00ff7f",
    steelblue: "#4682b4",
    tan: "#d2b48c",
    teal: "#008080",
    thistle: "#d8bfd8",
    tomato: "#ff6347",
    turquoise: "#40e0d0",
    violet: "#ee82ee",
    wheat: "#f5deb3",
    white: "#ffffff",
    whitesmoke: "#f5f5f5",
    yellow: "#ffff00",
    yellowgreen: "#9acd32"
};
function p(t) {
    var r, e, n, o = {
        r: 0,
        g: 0,
        b: 0
    }, s = 1, f = null, u = null, g = null, p = !1, v = !1;
    return "string" == typeof t && (t = function(t) {
        if (t = t.trim().toLowerCase(),
        0 === t.length)
            return !1;
        var r = !1;
        if (b[t])
            t = b[t],
            r = !0;
        else if ("transparent" === t)
            return {
                r: 0,
                g: 0,
                b: 0,
                a: 0,
                format: "name"
            };
        var e = M.rgb.exec(t);
        if (e)
            return {
                r: e[1],
                g: e[2],
                b: e[3]
            };
        if (e = M.rgba.exec(t),
        e)
            return {
                r: e[1],
                g: e[2],
                b: e[3],
                a: e[4]
            };
        if (e = M.hsl.exec(t),
        e)
            return {
                h: e[1],
                s: e[2],
                l: e[3]
            };
        if (e = M.hsla.exec(t),
        e)
            return {
                h: e[1],
                s: e[2],
                l: e[3],
                a: e[4]
            };
        if (e = M.hsv.exec(t),
        e)
            return {
                h: e[1],
                s: e[2],
                v: e[3]
            };
        if (e = M.hsva.exec(t),
        e)
            return {
                h: e[1],
                s: e[2],
                v: e[3],
                a: e[4]
            };
        if (e = M.hex8.exec(t),
        e)
            return {
                r: l(e[1]),
                g: l(e[2]),
                b: l(e[3]),
                a: d(e[4]),
                format: r ? "name" : "hex8"
            };
        if (e = M.hex6.exec(t),
        e)
            return {
                r: l(e[1]),
                g: l(e[2]),
                b: l(e[3]),
                format: r ? "name" : "hex"
            };
        if (e = M.hex4.exec(t),
        e)
            return {
                r: l(e[1] + e[1]),
                g: l(e[2] + e[2]),
                b: l(e[3] + e[3]),
                a: d(e[4] + e[4]),
                format: r ? "name" : "hex8"
            };
        if (e = M.hex3.exec(t),
        e)
            return {
                r: l(e[1] + e[1]),
                g: l(e[2] + e[2]),
                b: l(e[3] + e[3]),
                format: r ? "name" : "hex"
            };
        return !1
    }(t)),
    "object" == typeof t && (x(t.r) && x(t.g) && x(t.b) ? (r = t.r,
    e = t.g,
    n = t.b,
    o = {
        r: 255 * a(r, 255),
        g: 255 * a(e, 255),
        b: 255 * a(n, 255)
    },
    p = !0,
    v = "%" === String(t.r).substr(-1) ? "prgb" : "rgb") : x(t.h) && x(t.s) && x(t.v) ? (f = h(t.s),
    u = h(t.v),
    o = function(t, r, e) {
        t = 6 * a(t, 360),
        r = a(r, 100),
        e = a(e, 100);
        var n = Math.floor(t)
          , o = t - n
          , i = e * (1 - r)
          , h = e * (1 - o * r)
          , s = e * (1 - (1 - o) * r)
          , f = n % 6;
        return {
            r: 255 * [e, h, i, i, s, e][f],
            g: 255 * [s, e, e, h, i, i][f],
            b: 255 * [i, i, s, e, e, h][f]
        }
    }(t.h, f, u),
    p = !0,
    v = "hsv") : x(t.h) && x(t.s) && x(t.l) && (f = h(t.s),
    g = h(t.l),
    o = function(t, r, e) {
        var n, o, i;
        if (t = a(t, 360),
        r = a(r, 100),
        e = a(e, 100),
        0 === r)
            o = e,
            i = e,
            n = e;
        else {
            var h = e < .5 ? e * (1 + r) : e + r - e * r
              , s = 2 * e - h;
            n = c(s, h, t + 1 / 3),
            o = c(s, h, t),
            i = c(s, h, t - 1 / 3)
        }
        return {
            r: 255 * n,
            g: 255 * o,
            b: 255 * i
        }
    }(t.h, f, g),
    p = !0,
    v = "hsl"),
    Object.prototype.hasOwnProperty.call(t, "a") && (s = t.a)),
    s = i(s),
    {
        ok: p,
        format: t.format || v,
        r: Math.min(255, Math.max(o.r, 0)),
        g: Math.min(255, Math.max(o.g, 0)),
        b: Math.min(255, Math.max(o.b, 0)),
        a: s
    }
}
var v = "(?:".concat("[-\\+]?\\d*\\.\\d+%?", ")|(?:").concat("[-\\+]?\\d+%?", ")")
  , m = "[\\s|\\(]+(".concat(v, ")[,|\\s]+(").concat(v, ")[,|\\s]+(").concat(v, ")\\s*\\)?")
  , y = "[\\s|\\(]+(".concat(v, ")[,|\\s]+(").concat(v, ")[,|\\s]+(").concat(v, ")[,|\\s]+(").concat(v, ")\\s*\\)?")
  , M = {
    CSS_UNIT: new RegExp(v),
    rgb: new RegExp("rgb" + m),
    rgba: new RegExp("rgba" + y),
    hsl: new RegExp("hsl" + m),
    hsla: new RegExp("hsla" + y),
    hsv: new RegExp("hsv" + m),
    hsva: new RegExp("hsva" + y),
    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function x(t) {
    return Boolean(M.CSS_UNIT.exec(String(t)))
}
var S = function() {
    function t(r, e) {
        var n;
        if (void 0 === r && (r = ""),
        void 0 === e && (e = {}),
        r instanceof t)
            return r;
        "number" == typeof r && (r = function(t) {
            return {
                r: t >> 16,
                g: (65280 & t) >> 8,
                b: 255 & t
            }
        }(r)),
        this.originalInput = r;
        var a = p(r);
        this.originalInput = r,
        this.r = a.r,
        this.g = a.g,
        this.b = a.b,
        this.a = a.a,
        this.roundA = Math.round(100 * this.a) / 100,
        this.format = null !== (n = e.format) && void 0 !== n ? n : a.format,
        this.gradientType = e.gradientType,
        this.r < 1 && (this.r = Math.round(this.r)),
        this.g < 1 && (this.g = Math.round(this.g)),
        this.b < 1 && (this.b = Math.round(this.b)),
        this.isValid = a.ok
    }
    return t.prototype.isDark = function() {
        return this.getBrightness() < 128
    }
    ,
    t.prototype.isLight = function() {
        return !this.isDark()
    }
    ,
    t.prototype.getBrightness = function() {
        var t = this.toRgb();
        return (299 * t.r + 587 * t.g + 114 * t.b) / 1e3
    }
    ,
    t.prototype.getLuminance = function() {
        var t = this.toRgb()
          , r = t.r / 255
          , e = t.g / 255
          , n = t.b / 255;
        return .2126 * (r <= .03928 ? r / 12.92 : Math.pow((r + .055) / 1.055, 2.4)) + .7152 * (e <= .03928 ? e / 12.92 : Math.pow((e + .055) / 1.055, 2.4)) + .0722 * (n <= .03928 ? n / 12.92 : Math.pow((n + .055) / 1.055, 2.4))
    }
    ,
    t.prototype.getAlpha = function() {
        return this.a
    }
    ,
    t.prototype.setAlpha = function(t) {
        return this.a = i(t),
        this.roundA = Math.round(100 * this.a) / 100,
        this
    }
    ,
    t.prototype.toHsv = function() {
        var t = u(this.r, this.g, this.b);
        return {
            h: 360 * t.h,
            s: t.s,
            v: t.v,
            a: this.a
        }
    }
    ,
    t.prototype.toHsvString = function() {
        var t = u(this.r, this.g, this.b)
          , r = Math.round(360 * t.h)
          , e = Math.round(100 * t.s)
          , n = Math.round(100 * t.v);
        return 1 === this.a ? "hsv(".concat(r, ", ").concat(e, "%, ").concat(n, "%)") : "hsva(".concat(r, ", ").concat(e, "%, ").concat(n, "%, ").concat(this.roundA, ")")
    }
    ,
    t.prototype.toHsl = function() {
        var t = f(this.r, this.g, this.b);
        return {
            h: 360 * t.h,
            s: t.s,
            l: t.l,
            a: this.a
        }
    }
    ,
    t.prototype.toHslString = function() {
        var t = f(this.r, this.g, this.b)
          , r = Math.round(360 * t.h)
          , e = Math.round(100 * t.s)
          , n = Math.round(100 * t.l);
        return 1 === this.a ? "hsl(".concat(r, ", ").concat(e, "%, ").concat(n, "%)") : "hsla(".concat(r, ", ").concat(e, "%, ").concat(n, "%, ").concat(this.roundA, ")")
    }
    ,
    t.prototype.toHex = function(t) {
        return void 0 === t && (t = !1),
        g(this.r, this.g, this.b, t)
    }
    ,
    t.prototype.toHexString = function(t) {
        return void 0 === t && (t = !1),
        "#" + this.toHex(t)
    }
    ,
    t.prototype.toHex8 = function(t) {
        return void 0 === t && (t = !1),
        function(t, r, e, n, a) {
            var o, i = [s(Math.round(t).toString(16)), s(Math.round(r).toString(16)), s(Math.round(e).toString(16)), s((o = n,
            Math.round(255 * parseFloat(o)).toString(16)))];
            return a && i[0].startsWith(i[0].charAt(1)) && i[1].startsWith(i[1].charAt(1)) && i[2].startsWith(i[2].charAt(1)) && i[3].startsWith(i[3].charAt(1)) ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) + i[3].charAt(0) : i.join("")
        }(this.r, this.g, this.b, this.a, t)
    }
    ,
    t.prototype.toHex8String = function(t) {
        return void 0 === t && (t = !1),
        "#" + this.toHex8(t)
    }
    ,
    t.prototype.toRgb = function() {
        return {
            r: Math.round(this.r),
            g: Math.round(this.g),
            b: Math.round(this.b),
            a: this.a
        }
    }
    ,
    t.prototype.toRgbString = function() {
        var t = Math.round(this.r)
          , r = Math.round(this.g)
          , e = Math.round(this.b);
        return 1 === this.a ? "rgb(".concat(t, ", ").concat(r, ", ").concat(e, ")") : "rgba(".concat(t, ", ").concat(r, ", ").concat(e, ", ").concat(this.roundA, ")")
    }
    ,
    t.prototype.toPercentageRgb = function() {
        var t = function(t) {
            return "".concat(Math.round(100 * a(t, 255)), "%")
        };
        return {
            r: t(this.r),
            g: t(this.g),
            b: t(this.b),
            a: this.a
        }
    }
    ,
    t.prototype.toPercentageRgbString = function() {
        var t = function(t) {
            return Math.round(100 * a(t, 255))
        };
        return 1 === this.a ? "rgb(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%)") : "rgba(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%, ").concat(this.roundA, ")")
    }
    ,
    t.prototype.toName = function() {
        if (0 === this.a)
            return "transparent";
        if (this.a < 1)
            return !1;
        for (var t = "#" + g(this.r, this.g, this.b, !1), r = 0, e = Object.entries(b); r < e.length; r++) {
            var n = e[r]
              , a = n[0];
            if (t === n[1])
                return a
        }
        return !1
    }
    ,
    t.prototype.toString = function(t) {
        var r = Boolean(t);
        t = null != t ? t : this.format;
        var e = !1
          , n = this.a < 1 && this.a >= 0;
        return r || !n || !t.startsWith("hex") && "name" !== t ? ("rgb" === t && (e = this.toRgbString()),
        "prgb" === t && (e = this.toPercentageRgbString()),
        "hex" !== t && "hex6" !== t || (e = this.toHexString()),
        "hex3" === t && (e = this.toHexString(!0)),
        "hex4" === t && (e = this.toHex8String(!0)),
        "hex8" === t && (e = this.toHex8String()),
        "name" === t && (e = this.toName()),
        "hsl" === t && (e = this.toHslString()),
        "hsv" === t && (e = this.toHsvString()),
        e || this.toHexString()) : "name" === t && 0 === this.a ? this.toName() : this.toRgbString()
    }
    ,
    t.prototype.toNumber = function() {
        return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b)
    }
    ,
    t.prototype.clone = function() {
        return new t(this.toString())
    }
    ,
    t.prototype.lighten = function(r) {
        void 0 === r && (r = 10);
        var e = this.toHsl();
        return e.l += r / 100,
        e.l = o(e.l),
        new t(e)
    }
    ,
    t.prototype.brighten = function(r) {
        void 0 === r && (r = 10);
        var e = this.toRgb();
        return e.r = Math.max(0, Math.min(255, e.r - Math.round(-r / 100 * 255))),
        e.g = Math.max(0, Math.min(255, e.g - Math.round(-r / 100 * 255))),
        e.b = Math.max(0, Math.min(255, e.b - Math.round(-r / 100 * 255))),
        new t(e)
    }
    ,
    t.prototype.darken = function(r) {
        void 0 === r && (r = 10);
        var e = this.toHsl();
        return e.l -= r / 100,
        e.l = o(e.l),
        new t(e)
    }
    ,
    t.prototype.tint = function(t) {
        return void 0 === t && (t = 10),
        this.mix("white", t)
    }
    ,
    t.prototype.shade = function(t) {
        return void 0 === t && (t = 10),
        this.mix("black", t)
    }
    ,
    t.prototype.desaturate = function(r) {
        void 0 === r && (r = 10);
        var e = this.toHsl();
        return e.s -= r / 100,
        e.s = o(e.s),
        new t(e)
    }
    ,
    t.prototype.saturate = function(r) {
        void 0 === r && (r = 10);
        var e = this.toHsl();
        return e.s += r / 100,
        e.s = o(e.s),
        new t(e)
    }
    ,
    t.prototype.greyscale = function() {
        return this.desaturate(100)
    }
    ,
    t.prototype.spin = function(r) {
        var e = this.toHsl()
          , n = (e.h + r) % 360;
        return e.h = n < 0 ? 360 + n : n,
        new t(e)
    }
    ,
    t.prototype.mix = function(r, e) {
        void 0 === e && (e = 50);
        var n = this.toRgb()
          , a = new t(r).toRgb()
          , o = e / 100;
        return new t({
            r: (a.r - n.r) * o + n.r,
            g: (a.g - n.g) * o + n.g,
            b: (a.b - n.b) * o + n.b,
            a: (a.a - n.a) * o + n.a
        })
    }
    ,
    t.prototype.analogous = function(r, e) {
        void 0 === r && (r = 6),
        void 0 === e && (e = 30);
        var n = this.toHsl()
          , a = 360 / e
          , o = [this];
        for (n.h = (n.h - (a * r >> 1) + 720) % 360; --r; )
            n.h = (n.h + a) % 360,
            o.push(new t(n));
        return o
    }
    ,
    t.prototype.complement = function() {
        var r = this.toHsl();
        return r.h = (r.h + 180) % 360,
        new t(r)
    }
    ,
    t.prototype.monochromatic = function(r) {
        void 0 === r && (r = 6);
        for (var e = this.toHsv(), n = e.h, a = e.s, o = e.v, i = [], h = 1 / r; r--; )
            i.push(new t({
                h: n,
                s: a,
                v: o
            })),
            o = (o + h) % 1;
        return i
    }
    ,
    t.prototype.splitcomplement = function() {
        var r = this.toHsl()
          , e = r.h;
        return [this, new t({
            h: (e + 72) % 360,
            s: r.s,
            l: r.l
        }), new t({
            h: (e + 216) % 360,
            s: r.s,
            l: r.l
        })]
    }
    ,
    t.prototype.onBackground = function(r) {
        var e = this.toRgb()
          , n = new t(r).toRgb();
        return new t({
            r: n.r + (e.r - n.r) * e.a,
            g: n.g + (e.g - n.g) * e.a,
            b: n.b + (e.b - n.b) * e.a
        })
    }
    ,
    t.prototype.triad = function() {
        return this.polyad(3)
    }
    ,
    t.prototype.tetrad = function() {
        return this.polyad(4)
    }
    ,
    t.prototype.polyad = function(r) {
        for (var e = this.toHsl(), n = e.h, a = [this], o = 360 / r, i = 1; i < r; i++)
            a.push(new t({
                h: (n + i * o) % 360,
                s: e.s,
                l: e.l
            }));
        return a
    }
    ,
    t.prototype.equals = function(r) {
        return this.toRgbString() === new t(r).toRgbString()
    }
    ,
    t
}();
export {e as P, S as T, n as f};
