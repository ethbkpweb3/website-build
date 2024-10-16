import {
    m as c,
    h as a,
    o as r,
    j as e,
    k as d,
    p as s
} from "./index-jdACH0Rc.js";
import {
    _ as o
} from "./_plugin-vue_export-helper-BCo6x5W8.js";
const i = o(c({
    __name: "Blob",
    props: {
        size: {
            default: 300
        },
        color: {
            default: void 0
        }
    },
    setup(c) {
        const o = c,
            i = a((() => [o.color && `is-${o.color}`]));
        return (c, a) => (r(), e("div", {
            class: s(["morphing-blob-wrapper", i.value])
        }, a[0] || (a[0] = [d('<div class="blob-inner levitate" data-v-b80ddc37><svg class="organic-blob" width="300" height="300" xmlns="http://www.w3.org/2000/svg" data-v-b80ddc37><defs data-v-b80ddc37><filter class="goo" data-v-b80ddc37><feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" data-v-b80ddc37></feGaussianBlur><feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" data-v-b80ddc37></feColorMatrix><feComposite in="SourceGraphic" in2="goo" operator="atop" data-v-b80ddc37></feComposite></filter></defs><circle class="circle-1" cx="150" cy="145" r="100" data-v-b80ddc37></circle><circle class="circle-2" cx="150" cy="155" r="100" data-v-b80ddc37></circle><circle class="circle-3" cx="145" cy="150" r="100" data-v-b80ddc37></circle><circle class="circle-4" cx="155" cy="150" r="100" data-v-b80ddc37></circle></svg></div>', 1)]), 2))
    }
}), [
    ["__scopeId", "data-v-b80ddc37"]
]);
export {
    i as _
};