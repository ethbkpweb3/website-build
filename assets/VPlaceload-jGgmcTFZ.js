import {m as e, cY as l, X as a, o as i, j as t, p as d} from "./index-jdACH0Rc.js";
import {_ as o} from "./_plugin-vue_export-helper-BCo6x5W8.js";
const h = /(\d*\.?\d+)\s?(cm|mm|in|px|pt|pc|em|ex|ch|rem|vw|vh|vmin|vmax|%)/
  , n = o(e({
    __name: "VPlaceload",
    props: {
        width: {
            default: "100%"
        },
        height: {
            default: "10px"
        },
        mobileWidth: {
            default: void 0
        },
        mobileHeight: {
            default: void 0
        },
        disabled: {
            type: Boolean
        },
        centered: {
            type: Boolean
        },
        light: {
            type: Boolean
        }
    },
    setup(e) {
        l((e => ({
            "78dc0927": o.width,
            ee53bc34: o.height,
            "3c9e98e4": a(n),
            c95cb6b2: a(s)
        })));
        const o = e
          , n = o.mobileWidth ?? o.width
          , s = o.mobileHeight ?? o.height;
        return null === o.width.match(h) && console.warn(`VPlaceload: invalid "${o.width}" width. Should be a valid css unit value.`),
        null === o.height.match(h) && console.warn(`VPlaceload: invalid "${o.height}" height. Should be a valid css unit value.`),
        null === n.match(h) && console.warn(`VPlaceload: invalid "${n}" mobileWidth. Should be a valid css unit value.`),
        null === s.match(h) && console.warn(`VPlaceload: invalid "${s}" mobileHeight. Should be a valid css unit value.`),
        (e, l) => (i(),
        t("div", {
            class: d(["content-shape", [o.centered && "is-centered", !o.disabled && "loads", o.light && "light"]])
        }, null, 2))
    }
}), [["__scopeId", "data-v-0975dd37"]]);
export {n as _};
