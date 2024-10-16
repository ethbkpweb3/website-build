import {m as o, h as e, o as l, j as a, l as t, p as r, s, r as n, v as d} from "./index-jdACH0Rc.js";
import {_ as i} from "./_plugin-vue_export-helper-BCo6x5W8.js";
const c = i(o({
    __name: "TongueTwo",
    props: {
        color: {
            default: "grey"
        }
    },
    setup(o) {
        const s = o
          , n = e(( () => [s.color && `tongue-${s.color}`]));
        return (o, e) => (l(),
        a("svg", {
            width: "853",
            height: "639",
            viewBox: "0 0 853 639",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            class: r(["tongue-2", n.value])
        }, e[0] || (e[0] = [t("path", {
            d: "M843,456.4C843,218.7,301.7,10,13,10c-288.7,0-440,69.6-440,307.4c0,237.8,242.1,314.1,530.9,314.1\n\tC392.6,631.5,843,694.2,843,456.4z"
        }, null, -1), t("path", {
            class: "opacity-50",
            d: "M853,446.4C853,208.7,371.4,0,114.5,0S-277,69.6-277,307.4c0,237.8,215.4,314.1,472.4,314.1\n\tC452.3,621.5,853,684.2,853,446.4z"
        }, null, -1)]), 2))
    }
}), [["__scopeId", "data-v-f8bd6dd1"]])
  , u = i(o({
    __name: "TongueOne",
    props: {
        color: {
            default: "grey"
        }
    },
    setup(o) {
        const s = o
          , n = e(( () => [s.color && `tongue-${s.color}`]));
        return (o, e) => (l(),
        a("svg", {
            width: "853",
            height: "639",
            viewBox: "0 0 853 639",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            class: r(["tongue-1", n.value])
        }, e[0] || (e[0] = [t("path", {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M749.122 631.529C1037.86 631.529 1280 555.156 1280 317.386C1280 79.6165 1128.79 10 840.046 10C551.305 10 10 218.672 10 456.442C10 694.212 460.381 631.529 749.122 631.529Z"
        }, null, -1), t("path", {
            class: "opacity-50",
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M657.644 621.529C914.556 621.529 1130 545.156 1130 307.386C1130 69.6165 995.456 0 738.545 0C481.634 0 0 208.672 0 446.442C0 684.212 400.733 621.529 657.644 621.529Z"
        }, null, -1)]), 2))
    }
}), [["__scopeId", "data-v-85fd34ed"]])
  , p = {
    class: "animated-waves"
}
  , v = ["id"]
  , w = {
    class: "parallax"
}
  , f = ["xlink:href"]
  , g = ["xlink:href"]
  , m = ["xlink:href"]
  , h = ["xlink:href"]
  , b = i(o({
    __name: "WaveTwo",
    props: {
        color: {
            default: "grey"
        },
        name: {}
    },
    setup(o) {
        const s = o
          , n = e(( () => [s.color && `wave-${s.color}`]));
        return (o, e) => (l(),
        a("div", p, [(l(),
        a("svg", {
            class: r(["waves", n.value]),
            xmlns: "http://www.w3.org/2000/svg",
            "xmlns:xlink": "http://www.w3.org/1999/xlink",
            viewBox: "0 24 150 28",
            preserveAspectRatio: "none",
            "shape-rendering": "auto"
        }, [t("defs", null, [t("path", {
            id: s.name,
            d: "M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
        }, null, 8, v)]), t("g", w, [t("use", {
            "xlink:href": `#${s.name}`,
            x: "48",
            y: "0",
            fill: "rgba(255,255,255,0.7)"
        }, null, 8, f), t("use", {
            "xlink:href": `#${s.name}`,
            x: "48",
            y: "3",
            fill: "rgba(255,255,255,0.5)"
        }, null, 8, g), t("use", {
            "xlink:href": `#${s.name}`,
            x: "48",
            y: "5",
            fill: "rgba(255,255,255,0.3)"
        }, null, 8, m), t("use", {
            "xlink:href": `#${s.name}`,
            x: "48",
            y: "7",
            fill: "#fff"
        }, null, 8, h)])], 2))]))
    }
}), [["__scopeId", "data-v-1d59ac7f"]])
  , y = {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1440 320"
}
  , x = i(o({
    __name: "WaveOne",
    props: {
        color: {
            default: "grey"
        }
    },
    setup(o) {
        const s = o
          , n = e(( () => [s.color && `wave-${s.color}`]));
        return (o, e) => (l(),
        a("svg", y, [t("path", {
            class: r(n.value),
            "fill-opacity": "1",
            d: "M0,224L60,224C120,224,240,224,360,229.3C480,235,600,245,720,234.7C840,224,960,192,1080,197.3C1200,203,1320,245,1380,266.7L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        }, null, 2)]))
    }
}), [["__scopeId", "data-v-a3ced0ff"]])
  , C = {
    key: 0,
    class: "section-overlay"
}
  , _ = {
    class: "section-content"
}
  , k = {
    key: 1,
    class: "section-wave"
}
  , B = {
    key: 2,
    class: "section-wave"
}
  , $ = {
    key: 3,
    class: "section-tongue"
}
  , M = {
    key: 4,
    class: "section-tongue"
}
  , N = i(o({
    __name: "Section",
    props: {
        size: {
            default: void 0
        },
        color: {
            default: void 0
        },
        borderedTop: {
            type: Boolean,
            default: !1
        },
        borderedBottom: {
            type: Boolean,
            default: !1
        },
        bottomSpaced: {
            type: Boolean
        },
        bottomNarrow: {
            type: Boolean,
            default: !1
        },
        topNarrow: {
            type: Boolean,
            default: !1
        },
        bottomNarrowMobile: {
            type: Boolean,
            default: !1
        },
        topNarrowMobile: {
            type: Boolean,
            default: !1
        },
        overflown: {
            type: Boolean,
            default: !1
        },
        wave: {
            default: void 0
        },
        tongue: {
            default: void 0
        },
        shapeColor: {
            default: "grey"
        },
        overlay: {
            type: Boolean,
            default: !1
        }
    },
    setup(o) {
        const i = o
          , p = e(( () => [i.size && `is-${i.size}`, i.color && `is-${i.color}`, i.borderedTop && "has-border-top", i.borderedBottom && "has-border-bottom", i.bottomSpaced && "is-bottom-spaced", i.overflown && "is-overflown", i.wave && `section-${i.wave}`, i.tongue && `section-${i.tongue}`, i.bottomNarrow && "is-bottom-narrow", i.topNarrow && "is-top-narrow", i.bottomNarrowMobile && "is-bottom-narrow-mobile", i.topNarrowMobile && "is-top-narrow-mobile"]));
        return (o, e) => {
            const v = x
              , w = b
              , f = u
              , g = c;
            return l(),
            a("div", {
                class: r(["section", p.value])
            }, [o.overlay ? (l(),
            a("div", C)) : s("", !0), n(o.$slots, "background", {}, void 0, !0), t("div", _, [n(o.$slots, "default", {}, void 0, !0)]), "wave-1" === i.wave ? (l(),
            a("div", k, [d(v, {
                color: i.shapeColor
            }, null, 8, ["color"])])) : s("", !0), "wave-2" === i.wave ? (l(),
            a("div", B, [d(w, {
                color: i.shapeColor,
                name: "a-wave-1"
            }, null, 8, ["color"])])) : s("", !0), "tongue-1" === i.tongue ? (l(),
            a("div", $, [d(f, {
                color: i.shapeColor
            }, null, 8, ["color"])])) : s("", !0), "tongue-2" === i.tongue ? (l(),
            a("div", M, [d(g, {
                color: i.shapeColor
            }, null, 8, ["color"])])) : s("", !0)], 2)
        }
    }
}), [["__scopeId", "data-v-2f2e0b0b"]]);
export {N as _};
