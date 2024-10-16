import {
    a as e
} from "./all-countries-_6k8nJ5H.js";
import "./index-DZwhim7i.js";
import {
    a as l,
    E as a
} from "./index-38aUouWI.js";
import {
    m as s,
    K as t,
    Y as o,
    y as i,
    B as n,
    o as r,
    j as d,
    v as u,
    w as p,
    p as f,
    ck as m,
    s as v,
    P as c,
    cB as C,
    n as _,
    X as w,
    l as y,
    t as x
} from "./index-CQfCy4Xm.js";
const V = {
        class: "flex tel-input"
    },
    O = {
        class: "flex items-center"
    },
    b = {
        style: {
            float: "left"
        }
    },
    h = s({
        __name: "CountryInput",
        props: {
            default: {
                default: void 0
            },
            modelValue: {
                default: void 0
            }
        },
        emits: ["update:modelValue"],
        setup(s, {
            emit: h
        }) {
            const j = h,
                L = t({
                    allCountries: [],
                    filteredOptions: []
                }),
                {
                    t: g
                } = o();
            L.allCountries = e, L.filteredOptions = L.allCountries;
            const k = i("");
            n(L.allCountries, (e => {
                L.filteredOptions = [...e]
            }));
            const B = e => {
                    L.filteredOptions = L.allCountries, j("update:modelValue", "")
                },
                E = e => {
                    j("update:modelValue", e)
                },
                I = e => {
                    L.filteredOptions = L.allCountries.filter((l => {
                        var a;
                        return null == (a = null == l ? void 0 : l.name) ? void 0 : a.toLowerCase().includes(e.toLowerCase())
                    })).sort(((e, l) => e.dialCode - l.dialCode))
                };
            return (e, s) => (r(), d("div", V, [u(w(a), {
                modelValue: k.value,
                "onUpdate:modelValue": s[0] || (s[0] = e => k.value = e),
                filterable: "",
                clearable: "",
                class: f(k.value && "greenBorderSelect"),
                "default-first-option": "",
                "filter-method": I,
                onClear: B,
                onChange: E,
                placeholder: w(g)("wall.please-select"),
                style: {
                    width: "100%"
                }
            }, {
                prefix: p((() => {
                    var e, l;
                    return [k.value ? (r(), d("span", {
                        key: 0,
                        class: f(["vti__flag", null == (e = k.value) ? void 0 : e.toLowerCase()]),
                        style: m(!(null == (l = k.value) ? void 0 : l.toLowerCase()) && "display: none")
                    }, null, 6)) : v("", !0)]
                })),
                default: p((() => [(r(!0), d(c, null, C(L.filteredOptions, (e => (r(), _(w(l), {
                    key: e.name,
                    label: e.name,
                    class: "vti__dropdown-item",
                    value: e.iso2
                }, {
                    default: p((() => [y("div", O, [y("span", {
                        class: f(["vti__flag", e.iso2.toLowerCase()])
                    }, null, 2), y("span", b, x(e.name), 1)])])),
                    _: 2
                }, 1032, ["label", "value"])))), 128))])),
                _: 1
            }, 8, ["modelValue", "class", "placeholder"])]))
        }
    });
export {
    h as _
};