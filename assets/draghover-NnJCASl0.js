import {d as t} from "./index-jdACH0Rc.js";
function e(t) {
    return -1 !== t.type.indexOf("mouse") ? t.clientX : t.touches[0].clientX
}
function o(t) {
    return -1 !== t.type.indexOf("mouse") ? t.clientY : t.touches[0].clientY
}
var s = function() {
    var t = !1;
    try {
        var e = Object.defineProperty({}, "passive", {
            get: function() {
                t = !0
            }
        });
        window.addEventListener("test", null, e)
    } catch (o) {}
    return t
}()
  , i = {
    install: function(t, i) {
        var n = Object.assign({}, {
            disableClick: !1,
            tapTolerance: 10,
            swipeTolerance: 30,
            touchHoldTolerance: 400,
            longTapTimeInterval: 400,
            touchClass: "",
            dragFrequency: 100,
            rollOverFrequency: 100,
            namespace: "touch"
        }, i);
        function a(t) {
            var s = this.$$touchObj
              , i = t.type.indexOf("touch") >= 0
              , n = t.type.indexOf("mouse") >= 0
              , a = this;
            i && (s.lastTouchStartTime = t.timeStamp),
            n && s.lastTouchStartTime && t.timeStamp - s.lastTouchStartTime < 350 || s.touchStarted || (p(this),
            s.touchStarted = !0,
            s.touchMoved = !1,
            s.swipeOutBounded = !1,
            s.startX = e(t),
            s.startY = o(t),
            s.currentX = 0,
            s.currentY = 0,
            s.touchStartTime = t.timeStamp,
            s.hasSwipe = d(this, "swipe") || d(this, "swipe.left") || d(this, "swipe.right") || d(this, "swipe.top") || d(this, "swipe.bottom"),
            d(this, "hold") && (s.touchHoldTimer = setTimeout((function() {
                s.touchHoldTimer = null,
                v(t, a, "hold")
            }
            ), s.options.touchHoldTolerance)),
            v(t, this, "press"))
        }
        function r(t) {
            var s = this.$$touchObj
              , i = e(t)
              , n = o(t)
              , a = s.currentX != i || s.currentY != n;
            if (s.currentX = i,
            s.currentY = n,
            s.touchMoved) {
                if (s.hasSwipe && !s.swipeOutBounded) {
                    var r = s.options.swipeTolerance;
                    s.swipeOutBounded = Math.abs(s.startX - s.currentX) > r && Math.abs(s.startY - s.currentY) > r
                }
            } else {
                var c = s.options.tapTolerance;
                s.touchMoved = Math.abs(s.startX - s.currentX) > c || Math.abs(s.startY - s.currentY) > c,
                s.touchMoved && (f(s),
                v(t, this, "drag.once"))
            }
            if (d(this, "rollover") && a) {
                var u = t.timeStamp
                  , l = s.options.rollOverFrequency;
                (null == s.touchRollTime || u > s.touchRollTime + l) && (s.touchRollTime = u,
                v(t, this, "rollover"))
            }
            if (d(this, "drag") && s.touchStarted && s.touchMoved && a) {
                u = t.timeStamp,
                l = s.options.dragFrequency;
                (null == s.touchDragTime || u > s.touchDragTime + l) && (s.touchDragTime = u,
                v(t, this, "drag"))
            }
        }
        function c() {
            var t = this.$$touchObj;
            f(t),
            m(this),
            t.touchStarted = t.touchMoved = !1,
            t.startX = t.startY = 0
        }
        function u(t) {
            var e = this.$$touchObj
              , o = t.type.indexOf("touch") >= 0
              , s = t.type.indexOf("mouse") >= 0;
            o && (e.lastTouchEndTime = t.timeStamp);
            var i = o && !e.touchHoldTimer;
            if (f(e),
            e.touchStarted = !1,
            m(this),
            !(s && e.lastTouchEndTime && t.timeStamp - e.lastTouchEndTime < 350))
                if (v(t, this, "release"),
                e.touchMoved) {
                    if (e.hasSwipe && !e.swipeOutBounded) {
                        var n, a = e.options.swipeTolerance, r = Math.abs(e.startY - e.currentY), c = Math.abs(e.startX - e.currentX);
                        (r > a || c > a) && (d(this, "swipe." + (n = r > c ? e.startY > e.currentY ? "top" : "bottom" : e.startX > e.currentX ? "left" : "right")) ? v(t, this, "swipe." + n, n) : v(t, this, "swipe", n))
                    }
                } else if (d(this, "longtap") && t.timeStamp - e.touchStartTime > e.options.longTapTimeInterval)
                    t.cancelable && t.preventDefault(),
                    v(t, this, "longtap");
                else {
                    if (d(this, "hold") && i)
                        return void (t.cancelable && t.preventDefault());
                    v(t, this, "tap")
                }
        }
        function l() {
            p(this)
        }
        function h() {
            m(this)
        }
        function d(t, e) {
            var o = t.$$touchObj.callbacks[e];
            return null != o && o.length > 0
        }
        function v(t, e, o, s) {
            var i = e.$$touchObj.callbacks[o];
            if (null == i || 0 === i.length)
                return null;
            for (var n = 0; n < i.length; n++) {
                var a = i[n];
                a.modifiers.stop && t.stopPropagation(),
                a.modifiers.prevent && t.preventDefault(),
                a.modifiers.self && t.target !== t.currentTarget || "function" == typeof a.value && (s ? a.value(s, t) : a.value(t))
            }
        }
        function p(t) {
            var e = t.$$touchObj.options.touchClass;
            e && t.classList.add(e)
        }
        function m(t) {
            var e = t.$$touchObj.options.touchClass;
            e && t.classList.remove(e)
        }
        function f(t) {
            t && t.touchHoldTimer && (clearTimeout(t.touchHoldTimer),
            t.touchHoldTimer = null)
        }
        function b(t, e) {
            var o = t.$$touchObj || {
                callbacks: {},
                hasBindTouchEvents: !1,
                options: n
            };
            return e && (o.options = Object.assign({}, o.options, e)),
            t.$$touchObj = o,
            t.$$touchObj
        }
        t.directive(n.namespace, {
            beforeMount: function(t, e) {
                var o = b(t)
                  , i = !!s && {
                    passive: !0
                }
                  , n = e.arg || "tap";
                switch (n) {
                case "swipe":
                    var d = e.modifiers;
                    if (d.left || d.right || d.top || d.bottom) {
                        for (var v in e.modifiers)
                            if (["left", "right", "top", "bottom"].indexOf(v) >= 0) {
                                var p = "swipe." + v;
                                o.callbacks[p] = o.callbacks[p] || [],
                                o.callbacks[p].push(e)
                            }
                    } else
                        o.callbacks.swipe = o.callbacks.swipe || [],
                        o.callbacks.swipe.push(e);
                    break;
                case "press":
                case "drag":
                    e.modifiers.disablePassive && (i = !1);
                default:
                    o.callbacks[n] = o.callbacks[n] || [],
                    o.callbacks[n].push(e)
                }
                o.hasBindTouchEvents || (t.addEventListener("touchstart", a, i),
                t.addEventListener("touchmove", r, i),
                t.addEventListener("touchcancel", c),
                t.addEventListener("touchend", u),
                o.options.disableClick || (t.addEventListener("mousedown", a),
                t.addEventListener("mousemove", r),
                t.addEventListener("mouseup", u),
                t.addEventListener("mouseenter", l),
                t.addEventListener("mouseleave", h)),
                o.hasBindTouchEvents = !0)
            },
            unmounted: function(t) {
                f(t.$$touchObj),
                t.removeEventListener("touchstart", a),
                t.removeEventListener("touchmove", r),
                t.removeEventListener("touchcancel", c),
                t.removeEventListener("touchend", u),
                t.$$touchObj && !t.$$touchObj.options.disableClick && (t.removeEventListener("mousedown", a),
                t.removeEventListener("mousemove", r),
                t.removeEventListener("mouseup", u),
                t.removeEventListener("mouseenter", l),
                t.removeEventListener("mouseleave", h)),
                delete t.$$touchObj
            }
        }),
        t.directive(`${n.namespace}-class`, {
            beforeMount: function(t, e) {
                b(t, {
                    touchClass: e.value
                })
            }
        }),
        t.directive(`${n.namespace}-options`, {
            beforeMount: function(t, e) {
                b(t, e.value)
            }
        })
    }
};
const n = t(( ({app: t}) => {
    t.use(i)
}
));
export {n as default};
