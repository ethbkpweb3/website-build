import {cd as e, be as o, h as t, B as s, cq as n, dv as a, m as d, v as u, r, i as c} from "./index-N2rhOp93.js";
import {t as l} from "./index-jFhAlE56.js";
import {f as i, m, n as p, o as y, r as v, b as f, d as b} from "./index-DXzVhuRT.js";
import {h as x} from "./index-B6QNixY4.js";
import {P as M} from "./index-B_GYtH8g.js";
const k = (a, d={}) => {
    e(a) || l("[useLockscreen]", "You need to pass a ref param to this function");
    const u = d.ns || o("popup")
      , r = t(( () => u.bm("parent", "hidden")));
    if (!i || m(document.body, r.value))
        return;
    let c = 0
      , f = !1
      , b = "0";
    const M = () => {
        setTimeout(( () => {
            v(null == document ? void 0 : document.body, r.value),
            f && document && (document.body.style.width = b)
        }
        ), 200)
    }
    ;
    s(a, (e => {
        if (!e)
            return void M();
        f = !m(document.body, r.value),
        f && (b = document.body.style.width),
        c = x(u.namespace.value);
        const o = document.documentElement.clientHeight < document.body.scrollHeight
          , t = p(document.body, "overflowY");
        c > 0 && (o || "scroll" === t) && f && (document.body.style.width = `calc(100% - ${c}px)`),
        y(document.body, r.value)
    }
    )),
    n(( () => M()))
}
  , g = e => {
    if (!e)
        return {
            onClick: a,
            onMousedown: a,
            onMouseup: a
        };
    let o = !1
      , t = !1;
    return {
        onClick: s => {
            o && t && e(s),
            o = t = !1
        }
        ,
        onMousedown: e => {
            o = e.target === e.currentTarget
        }
        ,
        onMouseup: e => {
            t = e.target === e.currentTarget
        }
    }
}
  , h = f({
    mask: {
        type: Boolean,
        default: !0
    },
    customMaskEvent: Boolean,
    overlayClass: {
        type: b([String, Array, Object])
    },
    zIndex: {
        type: b([String, Number])
    }
});
const w = d({
    name: "ElOverlay",
    props: h,
    emits: {
        click: e => e instanceof MouseEvent
    },
    setup(e, {slots: t, emit: s}) {
        const n = o("overlay")
          , {onClick: a, onMousedown: d, onMouseup: l} = g(e.customMaskEvent ? void 0 : e => {
            s("click", e)
        }
        );
        return () => e.mask ? u("div", {
            class: [n.b(), e.overlayClass],
            style: {
                zIndex: e.zIndex
            },
            onClick: a,
            onMousedown: d,
            onMouseup: l
        }, [r(t, "default")], M.STYLE | M.CLASS | M.PROPS, ["onClick", "onMouseup", "onMousedown"]) : c("div", {
            class: e.overlayClass,
            style: {
                zIndex: e.zIndex,
                position: "fixed",
                top: "0px",
                right: "0px",
                bottom: "0px",
                left: "0px"
            }
        }, [r(t, "default")])
    }
});
export {w as E, g as a, k as u};
