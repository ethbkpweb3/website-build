import {m as a, Y as e, dn as s, dm as l, b as t, c as n, B as o, o as r, n as i, w as c, l as d, X as p, t as u, v as g, j as m, cB as v, dg as h, d6 as y, cd as f, P as x, p as w} from "./index-jdACH0Rc.js";
import "./index-Dwv4qbXN.js";
import {F as b} from "./browser-B3Bvmjnq.js";
import {a as _} from "./index-DPTDKB4o.js";
import {E as j} from "./index-D4R9Vjdp.js";
import {E as k} from "./index-DtPnfIe2.js";
import {_ as S, a as D} from "./google-play-0W6tGWt8.js";
import {_ as U} from "./_plugin-vue_export-helper-BCo6x5W8.js";
const C = "/assets/logo/logowhite.svg"
  , R = {
    class: "toolbar-link right-panel-trigger cursor-pointer"
}
  , B = ["src"]
  , F = {
    class: "p-2 flex flex-row text-regular justify-between"
}
  , P = {
    style: {
        "border-right": "1px solid var(--gray-01)",
        "padding-right": "9px"
    }
}
  , z = {
    class: "text-head"
}
  , A = {
    style: {
        width: "170px"
    }
}
  , N = {
    class: "language-box"
}
  , O = {
    class: "language-option"
}
  , q = ["value"]
  , E = {
    class: "language-option-inner"
}
  , T = ["src"]
  , V = {
    class: "ml-2"
}
  , G = {
    class: "ml-4"
}
  , I = {
    class: "text-head"
}
  , L = {
    style: {
        width: "150px"
    }
}
  , M = {
    class: "language-box"
}
  , W = {
    class: "language-option"
}
  , X = ["value", "onChange"]
  , Y = {
    class: "language-option-inner"
}
  , Z = {
    class: "ml-2"
}
  , H = a({
    __name: "LangCur",
    props: {
        ismobile: {
            type: Boolean,
            default: !1
        }
    },
    setup(a) {
        var S;
        const {t: D, locale: U} = e()
          , C = s()
          , H = a
          , {Api: J} = l()
          , K = t("locale", (null == (S = n.find((a => a.lang === (null == navigator ? void 0 : navigator.language)))) ? void 0 : S.lang) || "en-US")
          , Q = a => {
            if ("USD" == a)
                return void (C.currencyRate = "1");
            const e = new b;
            e.append("name", a),
            J.getCurrencyRate(e).then((a => {
                if (200 == a.status) {
                    const e = a.data;
                    0 == e.code && e.data && (a => {
                        let e = "number" == typeof a ? a : parseFloat(a);
                        return !isNaN(e) && e > 0
                    }
                    )(e.data) ? (C.currencyRate = e.data,
                    C.currencyRateTime = Date.now().toString()) : C.currency = "USD"
                } else
                    C.currency = "USD"
            }
            ))
        }
        ;
        return "USD" != C.currencyRate && Date.now() > Number(C.currencyRateTime.toString()) + 1e4 && Q(C.currency.toString()),
        o(U, ( () => {
            K.value = U.value
        }
        )),
        (a, e) => (r(),
        i(p(k), {
            placement: H.ismobile ? "top" : "bottom",
            trigger: "click",
            "popper-class": "popFee lang-scroll",
            "show-after": 150,
            persistent: !0,
            width: 369
        }, {
            reference: c(( () => [d("span", R, [d("img", {
                src: "/images/icons/countries/1x1/" + p(K) + ".svg",
                alt: ""
            }, null, 8, B)])])),
            default: c(( () => [d("div", F, [d("div", P, [d("span", z, u(p(D)("pga.language")) + ":", 1), g(p(j), {
                height: "312px",
                always: "",
                class: "mt-1"
            }, {
                default: c(( () => [d("div", A, [(r(!0),
                m(x, null, v(p(n), ( (a, s) => (r(),
                m("div", {
                    key: s,
                    class: "item-cur-lang"
                }, [d("div", N, [d("div", O, [h(d("input", {
                    "onUpdate:modelValue": e[0] || (e[0] = a => f(U) ? U.value = a : null),
                    type: "radio",
                    name: "language_selection",
                    value: a.lang
                }, null, 8, q), [[y, p(U)]]), d("div", E, [d("img", {
                    src: "/images/icons/countries/1x1/" + a.lang + ".svg",
                    alt: ""
                }, null, 8, T), e[2] || (e[2] = d("div", {
                    class: "indicator"
                }, [d("i", {
                    "aria-hidden": "true",
                    class: "iconify",
                    "data-icon": "feather:check"
                })], -1))])]), d("div", V, u(a.name), 1)])])))), 128))])])),
                _: 1
            })]), d("div", G, [d("span", I, u(p(D)("pga.currency")) + ":", 1), g(p(j), {
                height: "312px",
                always: "",
                class: "mt-1"
            }, {
                default: c(( () => [d("div", L, [(r(!0),
                m(x, null, v(p(_), ( (a, s) => {
                    var l;
                    return r(),
                    m("div", {
                        key: s,
                        class: "item-cur-lang"
                    }, [d("div", M, [d("div", W, [h(d("input", {
                        "onUpdate:modelValue": e[1] || (e[1] = a => p(C).currency = a),
                        type: "radio",
                        name: "currency_selection",
                        value: a.name,
                        onChange: () => Q(a.name)
                    }, null, 40, X), [[y, p(C).currency]]), d("div", Y, [d("span", {
                        class: w(["b-input-cur-img img-cur-left", (null == (l = a.value) ? void 0 : l.toString().length) > 3 && "cur-left-small"]),
                        style: {
                            "background-color": "transparent"
                        }
                    }, u(a.value), 3), e[3] || (e[3] = d("div", {
                        class: "indicator"
                    }, [d("i", {
                        "aria-hidden": "true",
                        class: "iconify",
                        "data-icon": "feather:check"
                    })], -1))])]), d("div", Z, u(a.name), 1)])])
                }
                )), 128))])])),
                _: 1
            })])])])),
            _: 1
        }, 8, ["placement"]))
    }
})
  , J = {
    class: "download"
}
  , K = {
    class: "qr-code"
}
  , Q = {
    class: "qr-code-data"
}
  , $ = {
    class: "flex justify-center text-center flex-col mx-auto items-center"
}
  , aa = U(a({
    __name: "AppPop",
    props: {
        ismobile: {
            type: Boolean,
            default: !1
        }
    },
    setup(a) {
        var g;
        const {t: m, locale: v} = e();
        l(),
        s();
        const h = t("locale", (null == (g = n.find((a => a.lang === (null == navigator ? void 0 : navigator.language)))) ? void 0 : g.lang) || "en-US");
        o(v, ( () => {
            h.value = v.value
        }
        ));
        const y = a => {
            a ? window.open("https://play.google.com/store/apps/details?id=com.opz.dev") : window.open("https://testflight.apple.com/join/Oxsd9WMO")
        }
        ;
        return (a, e) => (r(),
        i(p(k), {
            placement: "bottom",
            trigger: "click",
            "popper-class": "popFee lang-scroll",
            "show-after": 150,
            persistent: !0,
            width: 180
        }, {
            reference: c(( () => e[2] || (e[2] = [d("span", {
                class: "toolbar-link right-panel-trigger cursor-pointer"
            }, [d("img", {
                src: "/images/icons/download.svg",
                style: {
                    "border-radius": "0",
                    height: "18px",
                    width: "18px"
                },
                alt: ""
            })], -1)]))),
            default: c(( () => [d("div", J, [d("div", K, [d("p", Q, u(p(m)("pga.download-app")), 1)]), d("div", $, [d("div", {
                onClick: e[0] || (e[0] = a => y()),
                class: "cursor-pointer"
            }, e[3] || (e[3] = [d("img", {
                class: "mb-1",
                src: S,
                alt: "Download OPZ Beta",
                width: "130"
            }, null, -1)])), d("div", {
                onClick: e[1] || (e[1] = a => y(!0)),
                class: "cursor-pointer"
            }, e[4] || (e[4] = [d("img", {
                src: D,
                alt: "Download on Google Play",
                width: "130"
            }, null, -1)]))])])])),
            _: 1
        }))
    }
}), [["__scopeId", "data-v-2aa90ae7"]]);
export {aa as A, C as _, H as a};
