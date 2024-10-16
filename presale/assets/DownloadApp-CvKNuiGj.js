import {
    _ as e,
    a as o
} from "./google-play-0W6tGWt8.js";
import "./index-DZwhim7i.js";
import {
    E as a
} from "./index-5N62XIoj.js";
import {
    m as l,
    h as s,
    n as t,
    w as d,
    X as r,
    o as i,
    l as c,
    q as n
} from "./index-CQfCy4Xm.js";
import {
    _ as p
} from "./_plugin-vue_export-helper-BCo6x5W8.js";
const u = {
        class: "qr-code"
    },
    m = {
        class: "flex justify-around text-center flex-row flex-wrap mt-1"
    },
    f = {
        class: "ml-3 flex-col flex items-center justify-around"
    },
    g = p(l({
        __name: "DownloadApp",
        props: {
            modelValue: Boolean
        },
        emits: ["update:modelValue"],
        setup(l, {
            emit: p
        }) {
            const g = l,
                w = p,
                x = s({
                    get: () => g.modelValue,
                    set: e => w("update:modelValue", e)
                }),
                h = e => {
                    e ? window.open("https://play.google.com/store/apps/details?id=com.opz.dev") : window.open("https://testflight.apple.com/join/Oxsd9WMO")
                };
            return (l, s) => (i(), t(r(a), {
                modelValue: x.value,
                "onUpdate:modelValue": s[2] || (s[2] = e => x.value = e),
                "lock-scroll": "",
                class: "dialogw cdetail-small download",
                "append-to-body": "",
                "destroy-on-close": "",
                "align-center": "",
                draggable: ""
            }, {
                header: d((() => s[3] || (s[3] = [c("div", {
                    class: "flex text-gray4 head-title items-center"
                }, [c("i", {
                    class: "fas fa-cicle"
                }), n(" Continue to Mobile App ")], -1)]))),
                default: d((() => [c("div", u, [s[6] || (s[6] = c("p", {
                    class: "qr-code-title"
                }, "Secure Your Digital Assets with Our MPC Wallet", -1)), s[7] || (s[7] = c("p", {
                    class: "qr-code-text"
                }, " To access this feature, download our app today and enjoy the future of secure crypto storage: ", -1)), c("div", m, [c("div", f, [c("div", {
                    onClick: s[0] || (s[0] = e => h()),
                    class: "cursor-pointer mb-3"
                }, s[4] || (s[4] = [c("img", {
                    src: e,
                    alt: "Download OPZ Beta",
                    width: "144"
                }, null, -1)])), c("div", {
                    onClick: s[1] || (s[1] = e => h(!0)),
                    class: "cursor-pointer"
                }, s[5] || (s[5] = [c("img", {
                    src: o,
                    alt: "Download on Google Play",
                    width: "144"
                }, null, -1)]))])])])])),
                _: 1
            }, 8, ["modelValue"]))
        }
    }), [
        ["__scopeId", "data-v-6decd9b9"]
    ]);
export {
    g as D
};