import {
    U as t,
    e as o,
    V as s
} from "./index-jdACH0Rc.js";
const e = t((() => {
    const t = o(),
        e = /iPad|iPhone|iPod/.test(navigator.userAgent) || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1 ? "top" : "bottom",
        i = new s({
            duration: 9e3,
            dismissible: !0,
            position: {
                x: "right",
                y: e
            },
            types: [{
                type: "info",
                background: t.primary,
                icon: {
                    className: "fas fa-info-circle",
                    tagName: "i",
                    text: ""
                }
            }]
        });
    return {
        success: t => i.success(t),
        error: t => i.error(t),
        info: t => {
            const o = {
                type: "info"
            };
            return "string" == typeof t ? o.message = t : Object.assign(o, t), i.open(o)
        }
    }
}));
export {
    e as u
};