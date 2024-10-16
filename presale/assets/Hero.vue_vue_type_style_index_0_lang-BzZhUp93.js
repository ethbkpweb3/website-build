import {m as a, h as o, o as s, j as l, l as e, p as t, W as r, P as n, cB as i, s as c, v, r as d, X as p} from "./index-jdACH0Rc.js";
import {_ as u} from "./_plugin-vue_export-helper-BCo6x5W8.js";
const h = {
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    viewBox: "0 0 587.3 359.4"
}
  , m = u(a({
    __name: "HeroSlantMask",
    props: {
        color: {
            default: "white"
        }
    },
    setup(a) {
        const r = a
          , n = o(( () => [r.color && `mask-${r.color}`]));
        return (a, o) => (s(),
        l("svg", h, [o[0] || (o[0] = e("defs", null, [e("path", {
            id: "a-slant-mask",
            d: "M0 0h587.3v359.4H0z"
        })], -1)), o[1] || (o[1] = e("clipPath", {
            id: "b-slant-mask"
        }, [e("use", {
            "xlink:href": "#a-slant-mask",
            overflow: "visible"
        })], -1)), e("path", {
            "clip-path": "url(#b-slant-mask)",
            class: t(n.value),
            d: "M65.6 375.3L602.5 99.1l320.2 111.5 139.2 264.9L617 629.9 6.1 465.8z"
        }, null, 2)]))
    }
}), [["__scopeId", "data-v-15509a0e"]])
  , f = {
    "data-name": "Calque 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1920 1186.8"
}
  , k = u(a({
    __name: "HeroWaveMask",
    props: {
        color: {
            default: "white"
        }
    },
    setup(a) {
        const r = a
          , n = o(( () => [r.color && `mask-${r.color}`]));
        return (a, o) => (s(),
        l("svg", f, [e("path", {
            d: "M1755.5 78.3a863.94 863.94 0 00-120.4 65.5c-65.5 34-100.5 149-100.5 149-17 71-78.5 156-78.5 156s-99 140-346 168c-189.9 21.5-234.4 124-244.8 170.2-5.2 22.3-16.9 36.8-21.1 41.3-28.7 30.2-53.1 41.6-59.4 44.2-61.6 24.1-145 38.6-204.7 88.3-95.3 79.3-288 83.3-288 83.3C82.8 1045.5 0 1186.8 0 1186.8h1920V.3c-74-4.5-97.5 48.5-164.5 78z",
            class: t(n.value)
        }, null, 2)]))
    }
}), [["__scopeId", "data-v-bba9cbbb"]])
  , w = {
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    x: "0",
    y: "0",
    viewBox: "0 0 1440 440",
    "xml:space": "preserve"
}
  , _ = {
    id: "XMLID_29_"
}
  , g = u(a({
    __name: "HeroCircleMask",
    props: {
        color: {
            default: "white"
        }
    },
    setup(a) {
        const r = a
          , n = o(( () => [r.color && `mask-${r.color}`]));
        return (a, o) => (s(),
        l("svg", w, [e("g", _, [e("path", {
            id: "XMLID_30_",
            class: t(n.value),
            d: "M-15 442.5h707.4c-261.2 0-504.3-77.7-707.4-211.2v211.2z"
        }, null, 2), e("path", {
            id: "XMLID_31_",
            class: t(n.value),
            d: "M692.4 442.5H1455V192.9c-213.6 156.9-477.2 249.6-762.6 249.6z"
        }, null, 2)])]))
    }
}), [["__scopeId", "data-v-f2232343"]])
  , y = {
    key: 0,
    class: "starfall"
}
  , b = {
    key: 1,
    class: "hero-mask-circle"
}
  , x = {
    key: 2,
    class: "hero-mask-wave"
}
  , M = {
    key: 3,
    class: "hero-mask-slant"
}
  , $ = {
    key: 4,
    class: "hero-overlay"
}
  , z = {
    key: 5,
    class: "hero-body"
}
  , B = {
    class: "container con-2"
}
  , H = {
    key: 6,
    class: "hero-foot"
}
  , I = a({
    __name: "Hero",
    props: {
        size: {
            default: void 0
        },
        alignment: {
            default: void 0
        },
        color: {
            default: void 0
        },
        shape: {
            default: void 0
        },
        shapeOrientation: {
            default: void 0
        },
        overlay: {
            type: Boolean,
            default: !1
        },
        overflow: {
            type: Boolean,
            default: !1
        },
        overflowX: {
            type: Boolean,
            default: !1
        },
        starfall: {
            type: Boolean,
            default: !1
        },
        mask: {
            default: void 0
        }
    },
    setup(a) {
        const u = r()
          , h = a
          , f = o(( () => [h.shape && "has-top-bg", h.shapeOrientation && `top-bg-${h.shapeOrientation}`, h.size && `is-${h.size}`, h.alignment && `is-${h.alignment}`, h.color && `is-${h.color}`, h.mask && "has-mask", h.overflow && "overflow-visible", h.overflowX && "overflow-x-visible"]));
        return (a, o) => {
            const r = k
              , w = m;
            return s(),
            l("section", {
                class: t(["hero", f.value])
            }, [h.starfall ? (s(),
            l("div", y, [(s(),
            l(n, null, i(40, (a => e("div", {
                key: a,
                class: "falling-star"
            }))), 64))])) : c("", !0), "circle" === h.mask ? (s(),
            l("div", b, [v(g, {
                color: h.color
            }, null, 8, ["color"])])) : c("", !0), "wave" === h.mask ? (s(),
            l("div", x, [v(r, {
                color: h.color
            }, null, 8, ["color"])])) : c("", !0), "slant" === h.mask ? (s(),
            l("div", M, [v(w, {
                color: h.color
            }, null, 8, ["color"])])) : c("", !0), h.overlay ? (s(),
            l("div", $)) : c("", !0), d(a.$slots, "background"), "body"in p(u) ? (s(),
            l("div", z, [e("div", B, [d(a.$slots, "body")])])) : c("", !0), "footer"in p(u) ? (s(),
            l("div", H, [d(a.$slots, "footer")])) : c("", !0)], 2)
        }
    }
});
export {I as _};
