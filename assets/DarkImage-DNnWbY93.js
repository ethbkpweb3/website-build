import {m as a, dq as e, h as t, o as r, j as s, p as i, X as l} from "./index-jdACH0Rc.js";
import {o} from "./via-placeholder-csI6CdwS.js";
import {_ as h} from "./_plugin-vue_export-helper-BCo6x5W8.js";
const d = ["src", "alt", "width", "height"]
  , n = h(a({
    __name: "DarkImage",
    props: {
        src: {},
        srcDark: {
            default: void 0
        },
        alt: {
            default: void 0
        },
        width: {
            default: "800"
        },
        height: {
            default: "600"
        },
        inline: {
            type: Boolean
        }
    },
    setup(a) {
        const h = a
          , n = e()
          , c = t(( () => h.inline ? "inline" : "block"))
          , p = t(( () => n.isDark && h.srcDark ? h.srcDark : h.src));
        return (a, e) => (r(),
        s("img", {
            class: i(c.value),
            src: p.value,
            alt: h.alt,
            width: h.width,
            height: h.height,
            loading: "lazy",
            onErrorOnce: e[0] || (e[0] = a => l(o)(a, `${h.width}x${h.height}`))
        }, null, 42, d))
    }
}), [["__scopeId", "data-v-ff03be70"]]);
export {n as _};
