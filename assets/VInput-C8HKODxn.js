import {
    m as e,
    h as a,
    o as l,
    j as t,
    p as o
} from "./index-jdACH0Rc.js";
import {
    _ as d
} from "./_plugin-vue_export-helper-BCo6x5W8.js";
const u = ["value", "type", "placeholder", "readonly"],
    p = d(e({
        __name: "VInput",
        props: {
            type: {
                default: "text"
            },
            placeholder: {
                default: void 0
            },
            value: {
                default: void 0
            },
            modelValue: {
                default: void 0
            },
            readonly: {
                type: Boolean,
                default: !1
            },
            rounded: {
                type: Boolean,
                default: !1
            },
            inverted: {
                type: Boolean,
                default: !1
            }
        },
        emits: ["update:modelValue"],
        setup(e, {
            emit: d
        }) {
            const p = d,
                n = e,
                r = a((() => [n.rounded && "is-rounded", n.inverted && "is-inverted"]));
            return (e, a) => (l(), t("input", {
                value: e.modelValue,
                type: n.type,
                placeholder: n.placeholder,
                readonly: n.readonly,
                "aria-label": "input",
                class: o(["input", r.value]),
                onKeyup: a[0] || (a[0] = e => function(e) {
                    const a = e.target.value;
                    p("update:modelValue", a)
                }(e))
            }, null, 42, u))
        }
    }), [
        ["__scopeId", "data-v-d82626ab"]
    ]);
export {
    p as _
};