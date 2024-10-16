import {
    m as s,
    h as t,
    o as e,
    j as a,
    r as o,
    p as n
} from "./index-CQfCy4Xm.js";
import {
    _ as i
} from "./_plugin-vue_export-helper-BCo6x5W8.js";
const l = i(s({
    __name: "Buttons",
    props: {
        alignment: {
            type: [Boolean, String],
            default: void 0
        },
        stacked: {
            type: Boolean,
            default: !1
        }
    },
    setup(s) {
        const i = s,
            l = t((() => [i.alignment && `is-${i.alignment}`, i.stacked && "is-stacked"]));
        return (s, t) => (e(), a("div", {
            class: n(["buttons is-relative z-1", l.value])
        }, [o(s.$slots, "default", {}, void 0, !0)], 2))
    }
}), [
    ["__scopeId", "data-v-fd59672f"]
]);
export {
    l as _
};