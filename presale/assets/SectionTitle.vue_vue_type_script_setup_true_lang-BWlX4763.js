import {_ as t} from "./Title-ChmnbwlA.js";
import {_ as e} from "./Subtitle-ytb6lg8s.js";
import {m as s, h as a, o as l, j as i, n as o, w as d, l as n, p as r, r as u, q as p, t as c, s as v, v as f} from "./index-jdACH0Rc.js";
const m = s({
    __name: "SectionTitle",
    props: {
        title: {
            default: void 0
        },
        subtitle: {
            default: void 0
        },
        inverted: {
            type: Boolean,
            default: !1
        },
        spaced: {
            type: Boolean,
            default: !1
        }
    },
    setup(s) {
        const m = s
          , b = a(( () => [m.inverted && "is-inverted"]))
          , h = a(( () => [m.spaced && "mb-16"]))
          , _ = a(( () => [m.inverted ? "text-white" : "text-gradient"]));
        return (s, a) => {
            const g = e
              , x = t;
            return l(),
            i("div", {
                class: r(["has-text-centered", h.value])
            }, [m.subtitle ? (l(),
            o(g, {
                key: 0,
                tag: "h3",
                size: 5,
                weight: "bold"
            }, {
                default: d(( () => [n("span", {
                    class: r(_.value)
                }, [u(s.$slots, "subtitle", {}, ( () => [p(c(m.subtitle), 1)]))], 2)])),
                _: 3
            })) : v("", !0), f(x, {
                tag: "h2",
                size: 3,
                weight: "bold",
                class: r(b.value)
            }, {
                default: d(( () => [n("span", null, [u(s.$slots, "default", {}, ( () => [p(c(m.title), 1)]))])])),
                _: 3
            }, 8, ["class"])], 2)
        }
    }
});
export {m as _};
