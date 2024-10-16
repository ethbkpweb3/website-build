const __vite__mapDeps = (i, m=__vite__mapDeps, d=(m.f || (m.f = ["assets/index-jdACH0Rc.js", "assets/index-st4cR-qp.css"]))) => i.map(i => d[i]);
import {d as e, e as a, _ as n} from "./index-jdACH0Rc.js";
const t = Symbol("notyf");
const s = e((async ({app: e}) => {
    const s = await async function() {
        const e = a();
        let t;
        {
            const {Notyf: a} = await n((async () => {
                const {Notyf: e} = await import("./index-jdACH0Rc.js").then((e => e.fa));
                return {
                    Notyf: e
                }
            }
            ), __vite__mapDeps([0, 1]));
            t = new a({
                duration: 2e3,
                position: {
                    x: "right",
                    y: "bottom"
                },
                types: [{
                    type: "warning",
                    background: e.warning,
                    icon: {
                        className: "fas fa-hand-paper",
                        tagName: "i",
                        text: ""
                    }
                }, {
                    type: "info",
                    background: e.info,
                    icon: {
                        className: "fas fa-info-circle",
                        tagName: "i",
                        text: ""
                    }
                }, {
                    type: "primary",
                    background: e.primary,
                    icon: {
                        className: "fas fa-car-crash",
                        tagName: "i",
                        text: ""
                    }
                }, {
                    type: "accent",
                    background: e.accent,
                    icon: {
                        className: "fas fa-car-crash",
                        tagName: "i",
                        text: ""
                    }
                }, {
                    type: "purple",
                    background: e.purple,
                    icon: {
                        className: "fas fa-check",
                        tagName: "i",
                        text: ""
                    }
                }, {
                    type: "blue",
                    background: e.blue,
                    icon: {
                        className: "fas fa-check",
                        tagName: "i",
                        text: ""
                    }
                }, {
                    type: "green",
                    background: e.green,
                    icon: {
                        className: "fas fa-check",
                        tagName: "i",
                        text: ""
                    }
                }, {
                    type: "orange",
                    background: e.orange,
                    icon: {
                        className: "fas fa-check",
                        tagName: "i",
                        text: ""
                    }
                }]
            })
        }
        return {
            dismiss: e => {
                null == t || t.dismiss(e)
            }
            ,
            dismissAll: () => {
                null == t || t.dismissAll()
            }
            ,
            success: e => null == t ? void 0 : t.success(e),
            error: e => null == t ? void 0 : t.error(e),
            info: e => {
                const a = {
                    type: "info"
                };
                return "string" == typeof e ? a.message = e : Object.assign(a, e),
                null == t ? void 0 : t.open(a)
            }
            ,
            warning: e => {
                const a = {
                    type: "warning"
                };
                return "string" == typeof e ? a.message = e : Object.assign(a, e),
                null == t ? void 0 : t.open(a)
            }
            ,
            primary: e => {
                const a = {
                    type: "primary"
                };
                return "string" == typeof e ? a.message = e : Object.assign(a, e),
                null == t ? void 0 : t.open(a)
            }
            ,
            purple: e => {
                const a = {
                    type: "purple"
                };
                return "string" == typeof e ? a.message = e : Object.assign(a, e),
                null == t ? void 0 : t.open(a)
            }
            ,
            blue: e => {
                const a = {
                    type: "blue"
                };
                return "string" == typeof e ? a.message = e : Object.assign(a, e),
                null == t ? void 0 : t.open(a)
            }
            ,
            green: e => {
                const a = {
                    type: "green"
                };
                return "string" == typeof e ? a.message = e : Object.assign(a, e),
                null == t ? void 0 : t.open(a)
            }
            ,
            orange: e => {
                const a = {
                    type: "orange"
                };
                return "string" == typeof e ? a.message = e : Object.assign(a, e),
                null == t ? void 0 : t.open(a)
            }
        }
    }();
    e.provide(t, s)
}
));
export {s as default, t as notyfSymbol};
