import {x as s, y as a, z as u, A as e, B as n, C as t, D as o, E as r, F as c} from "./index-jdACH0Rc.js";
function i(i, p={}) {
    const l = p.head || s();
    if (l)
        return l.ssr ? l.push(i, p) : function(s, i, p={}) {
            const l = a(!1)
              , v = a({});
            u(( () => {
                v.value = l.value ? {} : e(i)
            }
            ));
            const f = s.push(v.value, p);
            n(v, (s => {
                f.patch(s)
            }
            ));
            c() && (t(( () => {
                f.dispose()
            }
            )),
            o(( () => {
                l.value = !0
            }
            )),
            r(( () => {
                l.value = !1
            }
            )));
            return f
        }(l, i, p)
}
export {i as u};
