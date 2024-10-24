import {o as a} from "./via-placeholder-csI6CdwS.js";
import {m as e, h as s, o as l, j as r, r as t, l as o, X as i, s as d, p} from "./index-jdACH0Rc.js";
import {_ as c} from "./_plugin-vue_export-helper-BCo6x5W8.js";
const u = ["src"]
  , m = ["src"]
  , n = c(e({
    __name: "AvatarSimple",
    props: {
        size: {
            default: void 0
        },
        picture: {},
        squared: {
            type: Boolean,
            default: !1
        },
        badge: {
            default: void 0
        },
        smallMobile: {
            type: Boolean,
            default: !1
        }
    },
    setup(e) {
        const c = e
          , n = s(( () => [c.size && `is-${c.size}`, c.squared && "is-squared", c.smallMobile && "is-small-mobile"]));
        return (e, s) => (l(),
        r("div", {
            class: p(["avatar", n.value])
        }, [t(e.$slots, "default", {}, ( () => [o("img", {
            src: c.picture,
            class: "avatar-image",
            alt: "",
            height: "38",
            width: "38",
            onErrorOnce: s[0] || (s[0] = e => i(a)(e, "150x150"))
        }, null, 40, u), c.badge ? (l(),
        r("img", {
            key: 0,
            src: c.badge,
            class: "avatar-badge",
            alt: "Badge",
            height: "18",
            width: "18",
            onErrorOnce: s[1] || (s[1] = e => i(a)(e, "150x150"))
        }, null, 40, m)) : d("", !0)]), !0)], 2))
    }
}), [["__scopeId", "data-v-dc9a1c02"]]);
export {n as _};
