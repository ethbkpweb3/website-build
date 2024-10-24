import {m as e, h as a, j as t, bc as s, r as l, s as i, P as o, o as r} from "./index-jdACH0Rc.js";
import {_ as d} from "./_plugin-vue_export-helper-BCo6x5W8.js";
const u = d(e({
    __name: "Title",
    props: {
        size: {
            default: void 0
        },
        weight: {
            default: void 0
        },
        inverted: {
            type: Boolean,
            default: !1
        },
        narrow: {
            type: Boolean,
            default: !1
        },
        leading: {
            type: Boolean,
            default: !1
        },
        uppercase: {
            type: Boolean,
            default: !1
        },
        tag: {
            default: "h2"
        }
    },
    setup(e) {
        const d = e
          , u = a(( () => [d.size && `is-${d.size}`, d.weight && `is-${d.weight}`, d.inverted && "is-inverted", d.narrow && "is-narrow", d.leading && "is-leading", d.uppercase && "is-uppercase"]));
        return (e, a) => (r(),
        t(o, null, ["h1" == e.tag ? (r(),
        t("h1", s({
            key: 0
        }, e.$attrs, {
            class: ["title", u.value]
        }), [l(e.$slots, "default", {}, void 0, !0)], 16)) : i("", !0), "h2" == e.tag ? (r(),
        t("h2", s({
            key: 1
        }, e.$attrs, {
            class: ["title", u.value]
        }), [l(e.$slots, "default", {}, void 0, !0)], 16)) : i("", !0), "h3" == e.tag ? (r(),
        t("h3", s({
            key: 2
        }, e.$attrs, {
            class: ["title", u.value]
        }), [l(e.$slots, "default", {}, void 0, !0)], 16)) : i("", !0)], 64))
    }
}), [["__scopeId", "data-v-19950984"]]);
export {u as _};
