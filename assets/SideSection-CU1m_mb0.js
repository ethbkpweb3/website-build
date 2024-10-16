import {
    _ as e
} from "./DarkImage-DNnWbY93.js";
import {
    _ as t
} from "./Blob-CB8vXQ6U.js";
import {
    _ as a
} from "./ButtonGR-BF9zAU5B.js";
import {
    _ as s
} from "./Title-ChmnbwlA.js";
import {
    _ as i
} from "./Subtitle-ytb6lg8s.js";
import {
    m as l,
    h as o,
    o as r,
    j as d,
    l as n,
    v as c,
    w as m,
    t as p,
    q as v,
    p as u,
    n as g,
    s as f,
    r as h,
    ck as b
} from "./index-jdACH0Rc.js";
import {
    _
} from "./_plugin-vue_export-helper-BCo6x5W8.js";
const y = {
        class: "columns is-vcentered"
    },
    k = {
        class: "column is-5"
    },
    j = {
        class: "text-gradient"
    },
    x = {
        class: "flex"
    },
    w = {
        class: "action-link pl-4 flex items-center"
    },
    B = {
        class: "column is-6 has-text-centered is-relative is-offset-1"
    },
    z = _(l({
        __name: "SideSection",
        props: {
            title: {},
            subtitle: {},
            content: {},
            to: {
                default: void 0
            },
            cta: {
                default: void 0
            },
            image: {},
            darkImage: {
                default: void 0
            },
            imageWidth: {
                default: "800"
            },
            imageHeight: {
                default: "600"
            },
            legend: {
                default: void 0
            },
            bordered: {
                type: Boolean,
                default: !1
            },
            inverted: {
                type: Boolean,
                default: !1
            },
            blob: {
                type: Boolean,
                default: !1
            },
            reverse: {
                type: Boolean,
                default: !1
            },
            opacity: {}
        },
        setup(l) {
            const _ = l,
                z = o((() => [_.bordered && "is-bordered", _.inverted && "is-inverted", _.reverse && "is-reverse"])),
                I = o((() => [_.inverted && "is-inverted"]));
            return (l, o) => {
                const S = i,
                    q = s,
                    D = a,
                    H = t,
                    R = e;
                return r(), d("div", {
                    class: u(["side-section mobile:py-0 small:py-6 z-1", z.value])
                }, [n("div", y, [n("div", k, [c(S, {
                    tag: "h3",
                    size: 6,
                    weight: "bold",
                    class: "pb-4",
                    leading: ""
                }, {
                    default: m((() => [n("span", j, p(l.subtitle), 1)])),
                    _: 1
                }), c(q, {
                    tag: "h2",
                    size: 2,
                    weight: "bold",
                    inverted: _.inverted
                }, {
                    default: m((() => [v(p(l.title), 1)])),
                    _: 1
                }, 8, ["inverted"]), n("p", {
                    class: u(["paragraph rem-115 mb-4", I.value])
                }, p(_.content), 3), n("div", x, [l.cta ? (r(), g(D, {
                    key: 0,
                    to: _.to
                }, {
                    default: m((() => [n("span", w, [v(p(_.cta) + " ", 1), o[0] || (o[0] = n("i", {
                        class: "fas fa-arrow-right pl-2 text-12"
                    }, null, -1))])])),
                    _: 1
                }, 8, ["to"])) : f("", !0)]), h(l.$slots, "content", {}, void 0, !0)]), n("div", B, [_.blob ? (r(), g(H, {
                    key: 0
                })) : f("", !0), _.legend ? (r(), g(q, {
                    key: 1,
                    tag: "h3",
                    size: 5,
                    weight: "bold",
                    inverted: _.inverted
                }, {
                    default: m((() => [v(p(_.legend), 1)])),
                    _: 1
                }, 8, ["inverted"])) : f("", !0), c(R, {
                    class: "is-relative ml-auto mr-auto",
                    src: _.image,
                    "src-dark": _.darkImage,
                    alt: "side section image",
                    width: _.imageWidth,
                    height: _.imageHeight,
                    style: b(l.opacity && "opacity:" + l.opacity)
                }, null, 8, ["src", "src-dark", "width", "height", "style"])])])], 2)
            }
        }
    }), [
        ["__scopeId", "data-v-34b075ce"]
    ]);
export {
    z as _
};