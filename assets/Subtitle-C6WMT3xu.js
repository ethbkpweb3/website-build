import {
    m as e,
    h as t,
    j as a,
    bc as s,
    r as l,
    s as i,
    P as o,
    o as u
} from "./index-N2rhOp93.js";
import {
    _ as d
} from "./_plugin-vue_export-helper-BCo6x5W8.js";
const r = d(e({
    __name: "Subtitle",
    props: {
        size: {
            default: void 0
        },
        weight: {
            default: void 0
        },
        tag: {
            default: "h3"
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
        }
    },
    setup(e) {
        const d = e,
            r = t((() => [d.size && `is-${d.size}`, d.weight && `is-${d.weight}`, d.narrow && "is-narrow", d.leading && "is-leading", d.inverted && "is-inverted", d.uppercase && "is-uppercase"]));
        return (e, t) => (u(), a(o, null, ["h2" == e.tag ? (u(), a("h2", s({
            key: 0
        }, e.$attrs, {
            class: ["subtitle", r.value]
        }), [l(e.$slots, "default", {}, void 0, !0)], 16)) : i("", !0), "h3" == e.tag ? (u(), a("h3", s({
            key: 1
        }, e.$attrs, {
            class: ["subtitle", r.value]
        }), [l(e.$slots, "default", {}, void 0, !0)], 16)) : i("", !0), "h4" == e.tag ? (u(), a("h4", s({
            key: 2
        }, e.$attrs, {
            class: ["subtitle", r.value]
        }), [l(e.$slots, "default", {}, void 0, !0)], 16)) : i("", !0), "p" == e.tag ? (u(), a("p", s({
            key: 3
        }, e.$attrs, {
            class: ["subtitle", r.value]
        }), [l(e.$slots, "default", {}, void 0, !0)], 16)) : i("", !0)], 64))
    }
}), [
    ["__scopeId", "data-v-e52eebfd"]
]);
export {
    r as _
};