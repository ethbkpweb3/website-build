import {
    _ as r
} from "./Hero.vue_vue_type_style_index_0_lang-DHspTRKr.js";
import {
    m as o,
    h as a,
    o as e,
    n as s,
    w as t,
    r as n,
    p as l,
    cC as i,
    j as d,
    l as c,
    v as p,
    q as u,
    dj as m,
    dh as f
} from "./index-CQfCy4Xm.js";
import {
    _
} from "./_plugin-vue_export-helper-BCo6x5W8.js";
import {
    _ as g
} from "./Buttons-CiRbhFtL.js";
import {
    _ as v
} from "./Button-C_PMcYdl.js";
import {
    _ as b
} from "./Title-B_xB6icS.js";
import {
    _ as h
} from "./DarkImage-CKYmncsD.js";
import {
    _ as j
} from "./logo-DqlCWKKL.js";
import {
    b as y
} from "./route-block-B_A1xBdJ.js";
import "./via-placeholder-csI6CdwS.js";
const w = _(o({
        __name: "ErrorHero",
        props: {
            color: {
                default: "grey"
            },
            pattern: {
                type: Boolean,
                default: !1
            }
        },
        setup(o) {
            const i = o,
                d = a((() => [i.color && `is-${i.color}`, i.pattern && ""]));
            return (o, a) => {
                const i = r;
                return e(), s(i, {
                    class: l(["error-hero", d.value]),
                    size: "fullheight"
                }, {
                    body: t((() => [n(o.$slots, "error", {}, void 0, !0)])),
                    _: 3
                }, 8, ["class"])
            }
        }
    }), [
        ["__scopeId", "data-v-b9646caf"]
    ]),
    k = {
        class: "error-nav"
    },
    x = {
        class: "container"
    },
    B = {
        class: "error-nav-inner"
    },
    $ = {
        class: "left"
    },
    H = {
        class: "error-wrapper"
    },
    I = {
        class: "error-wrapper-inner"
    },
    q = {
        class: "error-image"
    },
    z = {
        class: "error-content"
    };
const C = _({}, [
        ["render", function(r, o) {
            const a = i("RouterLink"),
                s = h,
                n = b,
                l = v,
                _ = g;
            return e(), d("div", null, [c("div", k, [c("div", x, [c("div", B, [c("div", $, [p(a, {
                to: {
                    name: "index"
                }
            }, {
                default: t((() => o[2] || (o[2] = [c("img", {
                    class: "navbar-logo",
                    src: j,
                    alt: "logo"
                }, null, -1)]))),
                _: 1
            })])])])]), c("div", H, [c("div", I, [c("div", q, [p(s, {
                src: "/assets/illustrations/not-found.svg",
                "src-dark": "/assets/illustrations/not-found.svg",
                alt: "Error image"
            })]), c("div", z, [p(n, {
                tag: "h2",
                size: 3,
                weight: "bold",
                leading: ""
            }, {
                default: t((() => o[3] || (o[3] = [c("span", null, "Page Not Found", -1)]))),
                _: 1
            }), o[6] || (o[6] = c("p", {
                class: "paragraph rem-115 mx-auto max-w-4 mb-4"
            }, " Oops, something went wrong and we couldn't find that page. Please try again later. ", -1)), p(_, {
                alignment: "centered"
            }, {
                default: t((() => [p(l, {
                    to: "/",
                    long: 3,
                    color: "primary",
                    raised: "",
                    bold: ""
                }, {
                    default: t((() => o[4] || (o[4] = [u(" Homepage ")]))),
                    _: 1
                }), p(l, {
                    long: 3,
                    color: "primary",
                    outlined: "",
                    bold: "",
                    onClick: o[0] || (o[0] = m((o => r.$router.back()), ["prevent"])),
                    onKeydown: o[1] || (o[1] = f(m((() => r.$router.back()), ["prevent"]), ["space"]))
                }, {
                    default: t((() => o[5] || (o[5] = [u(" Back ")]))),
                    _: 1
                })])),
                _: 1
            })])])])])
        }],
        ["__scopeId", "data-v-749f0f17"]
    ]),
    E = {};
"function" == typeof y && y(E);
const P = _(E, [
    ["render", function(r, o) {
        const a = C,
            s = w;
        return e(), d("div", null, [p(s, {
            color: "grey",
            pattern: ""
        }, {
            error: t((() => [p(a)])),
            _: 1
        })])
    }]
]);
export {
    P as
    default
};