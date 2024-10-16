import {
    a as e
} from "./index-Dwv4qbXN.js";
import {
    I as t,
    z as n,
    C as o
} from "./index-jdACH0Rc.js";
const s = (s, u, a, m) => {
    let l = {
        offsetX: 0,
        offsetY: 0
    };
    const i = t => {
            const n = t.clientX,
                o = t.clientY,
                {
                    offsetX: u,
                    offsetY: a
                } = l,
                i = s.value.getBoundingClientRect(),
                v = i.left,
                d = i.top,
                r = i.width,
                f = i.height,
                c = document.documentElement.clientWidth,
                h = document.documentElement.clientHeight,
                E = -v + u,
                p = -d + a,
                L = c - v - r + u,
                X = h - d - f + a,
                Y = t => {
                    let i = u + t.clientX - n,
                        v = a + t.clientY - o;
                    (null == m ? void 0 : m.value) || (i = Math.min(Math.max(i, E), L), v = Math.min(Math.max(v, p), X)), l = {
                        offsetX: i,
                        offsetY: v
                    }, s.value && (s.value.style.transform = `translate(${e(i)}, ${e(v)})`)
                },
                x = () => {
                    document.removeEventListener("mousemove", Y), document.removeEventListener("mouseup", x)
                };
            document.addEventListener("mousemove", Y), document.addEventListener("mouseup", x)
        },
        v = () => {
            u.value && s.value && u.value.removeEventListener("mousedown", i)
        };
    return t((() => {
        n((() => {
            a.value ? u.value && s.value && u.value.addEventListener("mousedown", i) : v()
        }))
    })), o((() => {
        v()
    })), {
        resetPosition: () => {
            l = {
                offsetX: 0,
                offsetY: 0
            }, s.value && (s.value.style.transform = "none")
        }
    }
};
export {
    s as u
};