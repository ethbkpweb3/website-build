import {
    f as e
} from "./index-Cg9BJciP.js";
import {
    R as r,
    T as i
} from "./index-jdACH0Rc.js";
const t = (t, n) => {
    const o = {},
        a = r([]);
    return {
        children: a,
        addChild: r => {
            o[r.uid] = r, a.value = ((r, t, n) => e(r.subTree).filter((e => {
                var r;
                return i(e) && (null == (r = e.type) ? void 0 : r.name) === t && !!e.component
            })).map((e => e.component.uid)).map((e => n[e])).filter((e => !!e)))(t, n, o)
        },
        removeChild: e => {
            delete o[e], a.value = a.value.filter((r => r.uid !== e))
        }
    }
};
export {
    t as u
};