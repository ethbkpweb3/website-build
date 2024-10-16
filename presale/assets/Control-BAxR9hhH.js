import {
    m as a,
    h as i,
    o,
    j as l,
    r as s,
    l as e,
    s as n,
    t as d,
    p as t
} from "./index-CQfCy4Xm.js";
import {
    _ as c
} from "./_plugin-vue_export-helper-BCo6x5W8.js";
const r = {
        key: 0,
        class: "form-icon"
    },
    v = ["data-icon"],
    p = {
        key: 1,
        class: "validation-icon valid-icon"
    },
    f = {
        key: 2,
        class: "validation-icon invalid-icon"
    },
    u = {
        class: "is-block text rem-75 text-danger px-1 pt-1"
    },
    x = c(a({
        __name: "Control",
        props: {
            icon: {
                default: void 0
            },
            validation: {
                type: Boolean,
                default: !1
            },
            isValid: {
                type: Boolean,
                default: !1
            },
            error: {
                default: "Please enter a valid value"
            },
            expanded: {
                type: Boolean,
                default: !1
            }
        },
        setup(a) {
            const c = a,
                x = i((() => [c.icon && "has-icon", c.validation && "has-validation", c.isValid && "is-valid", !c.isValid && "is-invalid", c.expanded && "is-expanded"]));
            return (a, i) => (o(), l("div", {
                class: t(["control", x.value])
            }, [s(a.$slots, "default", {}, void 0, !0), c.icon ? (o(), l("div", r, [e("i", {
                class: "iconify",
                "data-icon": c.icon
            }, null, 8, v)])) : n("", !0), c.validation && c.isValid ? (o(), l("div", p, i[0] || (i[0] = [e("i", {
                class: "iconify",
                "data-icon": "feather:check"
            }, null, -1)]))) : n("", !0), c.validation && !c.isValid ? (o(), l("div", f, i[1] || (i[1] = [e("i", {
                class: "iconify",
                "data-icon": "feather:x"
            }, null, -1)]))) : n("", !0), c.validation && !c.isValid ? s(a.$slots, "error", {
                key: 3
            }, (() => [e("span", u, d(c.error), 1)]), !0) : n("", !0)], 2))
        }
    }), [
        ["__scopeId", "data-v-1adc8fea"]
    ]);
export {
    x as _
};