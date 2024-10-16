import {t as e, a as t, b as s} from "./browser-ZWSpNtBY.js";
import {m as i, i as a} from "./index-jdACH0Rc.js";
/*! vue-qrcode v2.0.0 | (c) 2018-present Chen Fengyuan | MIT */
const r = "ready";
var o = i({
    name: "VueQrcode",
    props: {
        value: {
            type: String,
            default: void 0
        },
        options: {
            type: Object,
            default: void 0
        },
        tag: {
            type: String,
            default: "canvas"
        }
    },
    emits: [r],
    watch: {
        $props: {
            deep: !0,
            immediate: !0,
            handler() {
                this.$el && this.generate()
            }
        }
    },
    mounted() {
        this.generate()
    },
    methods: {
        generate() {
            const i = this.options || {}
              , a = String(this.value)
              , o = () => {
                this.$emit(r, this.$el)
            }
            ;
            switch (this.tag) {
            case "canvas":
                s(this.$el, a, i, (e => {
                    if (e)
                        throw e;
                    o()
                }
                ));
                break;
            case "img":
                t(a, i, ( (e, t) => {
                    if (e)
                        throw e;
                    this.$el.src = t,
                    this.$el.onload = o
                }
                ));
                break;
            case "svg":
                e(a, i, ( (e, t) => {
                    if (e)
                        throw e;
                    const s = document.createElement("div");
                    s.innerHTML = t;
                    const i = s.querySelector("svg");
                    if (i) {
                        const {attributes: e, childNodes: t} = i;
                        Object.keys(e).forEach((t => {
                            const s = e[Number(t)];
                            this.$el.setAttribute(s.name, s.value)
                        }
                        )),
                        Object.keys(t).forEach((e => {
                            const s = t[Number(e)];
                            this.$el.appendChild(s.cloneNode(!0))
                        }
                        )),
                        o()
                    }
                }
                ))
            }
        }
    },
    render() {
        return a(this.tag, this.$slots.default)
    }
});
export {o as i};
