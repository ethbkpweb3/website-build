import {i as t, b as r} from "./index-Citk0ABi.js";
import {g as o} from "./_initCloneObject-CyvZF8uk.js";
var n = Function.prototype
  , e = Object.prototype
  , c = n.toString
  , i = e.hasOwnProperty
  , a = c.call(Object);
function s(n) {
    if (!t(n) || "[object Object]" != r(n))
        return !1;
    var e = o(n);
    if (null === e)
        return !0;
    var s = i.call(e, "constructor") && e.constructor;
    return "function" == typeof s && s instanceof s && c.call(s) == a
}
export {s as i};
