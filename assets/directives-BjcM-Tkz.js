import {
    d as e
} from "./index-CQfCy4Xm.js";
const t = new WeakMap,
    n = new Set,
    o = {
        getSSRProps: () => ({}),
        created: e => {
            const o = function() {
                const t = (e.href ? ? "").split("#")[0];
                if (!t || n.has(t)) return void e.removeEventListener("mouseenter", o);
                const r = document.createElement("link");
                r.rel = "prefetch", r.href = t, document.head.appendChild(r), n.add(t), e.removeEventListener("mouseenter", o)
            };
            t.set(e, o)
        },
        beforeMount() {
            const e = window.location.toString().split("#")[0];
            e && !n.has(e) && n.add(e)
        },
        mounted: e => {
            e.addEventListener("mouseenter", t.get(e), {
                passive: !0
            })
        },
        unmounted: e => {
            e.removeEventListener("mouseenter", t.get(e))
        }
    },
    r = (e, t) => {
        const n = t.value.src,
            o = t.value.placeholder;
        if (n) {
            const t = new Image;
            o && (t.onerror = () => {
                t.onerror = null, e.style.backgroundImage = `url(${o})`
            }), t.onload = () => {
                t.onload = null, e.style.backgroundImage = `url(${n})`
            }, t.src = n
        }
    },
    d = {
        getSSRProps: () => ({}),
        updated: r,
        mounted: r
    },
    s = e((({
        app: e
    }) => {
        e.directive("preload-link", o), e.directive("background", d)
    }));
export {
    s as
    default
};