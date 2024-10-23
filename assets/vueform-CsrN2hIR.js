const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/slider-ZNWajzpX.js", "assets/index-CQfCy4Xm.js", "assets/index-st4cR-qp.css"]))) => i.map(i => d[i]);
import {
    d as e,
    f as s,
    _ as a
} from "./index-CQfCy4Xm.js";
const d = e((({
    app: e
}) => {
    e.component("Slider", s({
        loader: () => a((() =>
            import ("./slider-ZNWajzpX.js")), __vite__mapDeps([0, 1, 2])).then((e => e.default)),
        delay: 0,
        suspensible: !1
    }))
}));
export {
    d as
    default
};