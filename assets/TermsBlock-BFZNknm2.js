import {
    _ as e
} from "./Section-fdq8wkjz.js";
import {
    _ as a
} from "./Hero.vue_vue_type_style_index_0_lang-BzZhUp93.js";
import {
    _ as t
} from "./Subtitle-ytb6lg8s.js";
import {
    _ as s
} from "./Title-ChmnbwlA.js";
import "./index-Dwv4qbXN.js";
import {
    m as i,
    dp as l,
    G as r,
    dn as d,
    Y as m,
    y as u,
    o,
    n,
    w as c,
    l as p,
    v as g,
    t as h,
    q as _,
    p as v,
    X as k,
    j as f,
    s as b
} from "./index-jdACH0Rc.js";
import {
    E as x,
    a as y
} from "./index-DWTvrBdo.js";
import {
    _ as j
} from "./_plugin-vue_export-helper-BCo6x5W8.js";
import {
    M as w
} from "./vue3-markdown-it.umd.min--TOU0B4Y.js";
const H = {
        class: "column is-relative"
    },
    I = {
        class: "mx-auto max-w-6 mb-4"
    },
    P = {
        class: "paragraph"
    },
    W = {
        key: 0,
        class: "mx-auto"
    },
    z = j(i({
        __name: "TermsHeader",
        props: {
            title: {},
            subtitle: {},
            updated: {},
            image: {},
            darkImage: {},
            imageWidth: {},
            imageHeight: {}
        },
        setup(e) {
            const i = l(),
                j = r(),
                w = d(),
                {
                    t: z
                } = m(),
                S = i.fullPath.includes("token-risk"),
                T = u("0");
            i.fullPath.includes("privacy") ? T.value = "2" : i.fullPath.includes("token-risk") ? T.value = "4" : i.fullPath.includes("risk") ? T.value = "3" : T.value = "1";
            const q = e => {
                    let a = "";
                    switch (e) {
                        case "1":
                            a = "help-desk-terms";
                            break;
                        case "2":
                            a = "help-desk-terms-privacy-policy";
                            break;
                        case "3":
                            a = "help-desk-terms-risk";
                            break;
                        case "4":
                            a = "token-risk";
                            break;
                        default:
                            return
                    }
                    j.push({
                        name: a
                    })
                },
                E = e;
            return (e, i) => {
                const l = s,
                    r = t,
                    d = a;
                return o(), n(d, {
                    alignment: "center",
                    color: "grey"
                }, {
                    body: c((() => [p("div", {
                        class: v(["columns is-vcentered mt-12", k(w).isAppOn && "mt-0"])
                    }, [p("div", H, [p("div", I, [g(l, {
                        tag: "h1",
                        size: 1,
                        weight: "bold"
                    }, {
                        default: c((() => [p("span", null, h(E.title), 1)])),
                        _: 1
                    }), g(r, {
                        tag: "p",
                        size: 5,
                        weight: "thin",
                        class: "mx-auto max-w-6 b-centered-tablet-p pt-2"
                    }, {
                        default: c((() => [_(h(E.subtitle), 1)])),
                        _: 1
                    }), p("p", P, "Last updated: " + h(E.updated), 1)])])], 2)])),
                    footer: c((() => [k(S) ? b("", !0) : (o(), f("div", W, [p("div", null, [g(k(y), {
                        "default-active": T.value,
                        mode: "horizontal",
                        collapse: !1,
                        effect: "dark",
                        onSelect: q
                    }, {
                        default: c((() => [g(k(x), {
                            index: "1"
                        }, {
                            default: c((() => [_(h(k(z)("inx.terms-conditions")), 1)])),
                            _: 1
                        }), g(k(x), {
                            index: "2"
                        }, {
                            default: c((() => [_(h(k(z)("auth.privacy-policy")), 1)])),
                            _: 1
                        }), g(k(x), {
                            index: "3"
                        }, {
                            default: c((() => [_(h(k(z)("pga.risk-disclaimer")), 1)])),
                            _: 1
                        })])),
                        _: 1
                    }, 8, ["default-active"])])]))])),
                    _: 1
                })
            }
        }
    }), [
        ["__scopeId", "data-v-755d6aec"]
    ]),
    S = {
        class: "terms-block"
    },
    T = {
        class: "container"
    },
    q = {
        class: "content"
    },
    E = {
        class: "terms-content"
    },
    A = j(i({
        __name: "TermsBlock",
        props: {
            terms: {},
            title: {},
            subtitle: {},
            updated: {},
            image: {},
            darkImage: {},
            imageWidth: {},
            imageHeight: {}
        },
        setup(a) {
            const t = a;
            return (a, s) => {
                const i = z,
                    l = e;
                return o(), f("div", S, [g(i, {
                    title: t.title,
                    subtitle: t.subtitle,
                    updated: t.updated,
                    image: t.image,
                    "dark-image": t.darkImage,
                    "image-width": t.imageWidth,
                    "image-height": t.imageHeight
                }, null, 8, ["title", "subtitle", "updated", "image", "dark-image", "image-width", "image-height"]), g(l, null, {
                    default: c((() => [p("div", T, [p("div", q, [p("div", E, [g(k(w), {
                        source: t.terms,
                        breaks: !0
                    }, null, 8, ["source"])])])])])),
                    _: 1
                })])
            }
        }
    }), [
        ["__scopeId", "data-v-45239b71"]
    ]);
export {
    A as _
};