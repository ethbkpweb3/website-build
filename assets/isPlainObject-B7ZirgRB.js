import {i as t, b as r} from "./index-jFhAlE56.js";
import {g as o} from "./_initCloneObject-CjiI1zRU.js";
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
