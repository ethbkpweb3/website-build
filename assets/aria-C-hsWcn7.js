const e = e => Array.from(e.querySelectorAll('a[href],button:not([disabled]),button:not([hidden]),:not([tabindex="-1"]),input:not([disabled]),input:not([type="hidden"]),select:not([disabled]),textarea:not([disabled])')).filter((e => t(e) && (e => "fixed" !== getComputedStyle(e).position && null !== e.offsetParent)(e)))
  , t = e => {
    if (e.tabIndex > 0 || 0 === e.tabIndex && null !== e.getAttribute("tabIndex"))
        return !0;
    if (e.disabled)
        return !1;
    switch (e.nodeName) {
    case "A":
        return !!e.href && "ignore" !== e.rel;
    case "INPUT":
        return !("hidden" === e.type || "file" === e.type);
    case "BUTTON":
    case "SELECT":
    case "TEXTAREA":
        return !0;
    default:
        return !1
    }
}
  , n = function(e, t, ...n) {
    let d;
    d = t.includes("mouse") || t.includes("click") ? "MouseEvents" : t.includes("key") ? "KeyboardEvent" : "HTMLEvents";
    const r = document.createEvent(d);
    return r.initEvent(t, ...n),
    e.dispatchEvent(r),
    e
};
export {e as o, n as t};
