const __vite__mapDeps = (i, m=__vite__mapDeps, d=(m.f || (m.f = ["assets/slider-BfGxCQAP.js", "assets/index-N2rhOp93.js", "assets/index-st4cR-qp.css"]))) => i.map(i => d[i]);
import {d as e, f as s, _ as a} from "./index-N2rhOp93.js";
const d = e(( ({app: e}) => {
    e.component("Slider", s({
        loader: () => a(( () => import("./slider-BfGxCQAP.js")), __vite__mapDeps([0, 1, 2])).then((e => e.default)),
        delay: 0,
        suspensible: !1
    }))
}
));
export {d as default};
