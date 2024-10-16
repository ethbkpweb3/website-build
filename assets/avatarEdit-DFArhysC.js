import {
    _ as a
} from "./_plugin-vue_export-helper-BCo6x5W8.js";
import {
    o as e,
    j as l,
    m as t,
    dm as s,
    dn as r,
    dp as o,
    y as i,
    u as c,
    Y as n,
    a as p,
    K as d,
    B as u,
    z as v,
    h as m,
    X as f,
    n as h,
    w as g,
    s as y,
    v as x,
    p as b,
    P as w,
    q as C,
    t as V,
    l as k,
    bc as U,
    cB as j,
    ck as S
} from "./index-CQfCy4Xm.js";
import {
    k as _,
    c as D
} from "./index-DZwhim7i.js";
import {
    F as H
} from "./browser-Cv63Auap.js";
import {
    j as A,
    U as O,
    I as E
} from "./vue3-avataaars-DO56oOZp.js";
import {
    a as z
} from "./avatarSettings-C1kj7zSJ.js";
import {
    M as $
} from "./index-C8UagDfc.js";
import {
    E as M
} from "./index-DhHA3mFI.js";
import {
    E as N
} from "./index-5N62XIoj.js";
import {
    E as B
} from "./index-DMxP6Huc.js";
import {
    E as Z,
    b as T
} from "./index-CBmmRNm0.js";
import {
    E as F,
    a as G
} from "./index-38aUouWI.js";
import "./index-wV0BwLDn.js";
import "./index-DWyf7GKU.js";
import "./use-global-config-CYuHb1FB.js";
import "./index-CreMjc0E.js";
import "./index-DYh1qtlV.js";
import "./use-dialog-CC6CVfkB.js";
import "./index-BR6qnryQ.js";
import "./validator-Kt7cHrwc.js";
const I = {
        data: () => ({
            svgContent: ""
        }),
        props: {
            svgUrl: {
                type: String,
                default: !1
            },
            color: {
                type: String,
                default: "#000000"
            },
            transformOff: {
                type: Boolean,
                default: !1
            },
            transformAll: {
                type: Boolean,
                default: !1
            }
        },
        async created() {
            try {
                const a = await fetch(this.svgUrl);
                let e = await a.text();
                "#000000" != this.color && (e = e.replace(/fill="[^"]*"/g, `fill="${this.color}"`), e = e.replace(/class="CustomColor"/g, `style="fill:${this.color}"`));
                const l = (new DOMParser).parseFromString(e, "image/svg+xml");
                if (!this.transformOff)
                    if (this.transformAll) {
                        l.querySelectorAll("g").forEach((a => {
                            a.removeAttribute("transform")
                        }))
                    } else {
                        const a = l.querySelector("g");
                        a && a.removeAttribute("transform")
                    }
                const t = new XMLSerializer;
                this.svgContent = t.serializeToString(l.documentElement)
            } catch (a) {
                console.error("Error fetching SVG:", a)
            }
        }
    },
    J = ["innerHTML"];
const q = a(I, [
        ["render", function(a, t, s, r, o, i) {
            return e(), l("div", {
                innerHTML: o.svgContent
            }, null, 8, J)
        }]
    ]),
    L = {
        class: "flex text-gray4 head-title items-center justify-center mt-3"
    },
    P = {
        key: 1,
        src: "/images/svg/user2.svg",
        style: {
            width: "120px",
            "min-height": "132px"
        }
    },
    R = {
        class: "m-3 avatar-design"
    },
    W = {
        class: "flex flex-row justify-between align-center mb-3"
    },
    X = {
        class: "ml-4"
    },
    K = {
        class: "mr-4 text-gray4"
    },
    Y = {
        key: 0
    },
    Q = {
        class: "flex flex-row justify-between align-center mt-1 mb-3"
    },
    aa = {
        class: "mr-4 text-gray4"
    },
    ea = {
        class: "flex flex-row justify-between align-center mt-1 mb-3"
    },
    la = {
        class: "mr-4 text-gray4"
    },
    ta = {
        style: {
            float: "left"
        }
    },
    sa = {
        style: {
            position: "absolute",
            right: "10px"
        }
    },
    ra = {
        class: "flex flex-row justify-between align-center mt-1 mb-3"
    },
    oa = {
        class: "mr-4 text-gray4"
    },
    ia = {
        style: {
            float: "left"
        }
    },
    ca = {
        style: {
            position: "absolute",
            right: "15px"
        }
    },
    na = {
        class: "flex flex-row justify-between align-center mt-1 mb-3"
    },
    pa = {
        class: "mr-4 text-gray4"
    },
    da = {
        style: {
            float: "left"
        }
    },
    ua = {
        style: {
            position: "absolute",
            right: "0px"
        }
    },
    va = {
        class: "flex flex-row justify-between align-center mt-1 mb-3"
    },
    ma = {
        class: "mr-4 text-gray4"
    },
    fa = {
        style: {
            float: "left",
            width: "160px"
        }
    },
    ha = {
        style: {
            position: "absolute",
            right: "3px"
        }
    },
    ga = {
        class: "flex flex-row justify-between align-center mt-1 mb-3"
    },
    ya = {
        class: "mr-4 text-gray4"
    },
    xa = {
        style: {
            float: "left",
            width: "160px"
        }
    },
    ba = {
        style: {
            position: "absolute",
            right: "0px"
        }
    },
    wa = {
        class: "flex flex-row justify-between align-center mt-1 mb-3"
    },
    Ca = {
        class: "mr-4 text-gray4"
    },
    Va = {
        style: {
            float: "left",
            width: "160px"
        }
    },
    ka = {
        style: {
            position: "absolute",
            right: "25px"
        }
    },
    Ua = {
        key: 0,
        class: "flex flex-row justify-between align-center mt-1 mb-3"
    },
    ja = {
        class: "mr-4 text-gray4"
    },
    Sa = {
        class: "flex flex-row justify-between align-center mt-1 mb-3"
    },
    _a = {
        class: "mr-4 text-gray4"
    },
    Da = {
        class: "flex flex-row justify-between align-center mt-1 mb-3"
    },
    Ha = {
        class: "mr-4 text-gray4"
    },
    Aa = {
        style: {
            float: "left",
            width: "160px"
        }
    },
    Oa = {
        style: {
            position: "absolute",
            right: "42px"
        }
    },
    Ea = {
        class: "flex flex-row justify-between align-center mt-1 mb-3"
    },
    za = {
        class: "mr-4 text-gray4"
    },
    $a = {
        key: 1,
        class: "flex flex-row justify-between align-center mt-1 mb-3"
    },
    Ma = {
        class: "mr-4 text-gray4"
    },
    Na = {
        style: {
            float: "left",
            width: "160px"
        }
    },
    Ba = {
        style: {
            position: "absolute",
            right: "42px"
        }
    },
    Za = {
        class: "flex flex-row justify-between align-center mt-1 mb-3"
    },
    Ta = {
        class: "mr-4 text-gray4"
    },
    Fa = {
        key: 2,
        class: "flex flex-row justify-between align-center mt-1 mb-3"
    },
    Ga = {
        class: "mr-4 text-gray4"
    },
    Ia = {
        class: "dialog-footer"
    },
    Ja = a(t({
        __name: "avatarEdit",
        props: {
            btn: {
                type: Boolean,
                default: !1
            },
            modelValue: {
                type: Boolean,
                default: !0
            }
        },
        emits: ["update:modelValue"],
        setup(a, {
            emit: t
        }) {
            const {
                Api: I
            } = s(), J = r();
            o();
            const Ja = i([]),
                qa = i(!1),
                La = () => (Ja.value = [], se.avatar.skinColor || Ja.value.push("skinColor"), se.avatar.clothes || Ja.value.push("clothes"), se.avatar.eyes || Ja.value.push("eyes"), se.avatar.accessories || Ja.value.push("accessories"), se.avatar.facialHair || Ja.value.push("facialHair"), se.avatar.eyebrows || Ja.value.push("eyebrows"), se.avatar.clothesColor || Ja.value.push("clothesColor"), se.avatar.mouth || Ja.value.push("mouth"), se.avatar.top || Ja.value.push("top"), se.avatar.hairColor || Ja.value.push("hairColor"), se.avatar.isCircle && !se.avatar.circleColor && Ja.value.push("circleColor"), 0 === Ja.value.length),
                Pa = a => qa.value && Ja.value.includes(a) ? "text-red" : "",
                Ra = i(window.location.hash),
                Wa = z(),
                Xa = c();
            if (window.location.user) {
                const a = JSON.parse(window.location.user);
                Xa.tokenData = a.token, Xa.userData = a, $.setAvatar(a)
            }
            const Ka = () => {
                window.ReactNativeWebView.postMessage(JSON.stringify({
                    opzkey: "avatar",
                    value: ""
                }))
            };

            function Ya(a) {
                const e = a.match(/^(\D*?)(\d+)/);
                if (!e) return a;
                const l = e[1],
                    t = Number(e[2]),
                    s = a.slice(e[0].length).trim(),
                    r = t.toString().replace(/^0+/, "");
                return `${l}${l.length>0&&isNaN(parseInt(l[l.length-1]))?" ":""}${r}${s?` ${s}`:""}`
            }
            const {
                t: Qa,
                locale: ae
            } = n(), ee = a, le = t, te = p(), se = d({
                coinDesc: {},
                enabled: Wa.enabledData,
                avatar: {
                    skinColor: Wa.skincolorsData,
                    clothes: Wa.clothesData,
                    eyes: Wa.eyesData,
                    accessories: Wa.accessoriesData,
                    facialHair: Wa.facialhairData,
                    eyebrows: Wa.eyebrowsData,
                    mouth: Wa.mouthsData,
                    top: Wa.topsData,
                    topColor: Wa.hatandshirtcolorsData,
                    hairColor: Wa.haircolorsData,
                    graphicShirt: Wa.graphicshirtData,
                    circleColor: Wa.circleData,
                    isCircle: Wa.circleenabledData,
                    clothesColor: Wa.clothescolorData
                }
            }), re = () => {
                le("update:modelValue", !1)
            }, oe = a => a || -1 == a ? String.fromCharCode(97 + a) : "a";
            ["skinColor", "clothes", "eyes", "accessories", "facialHair", "eyebrows", "clothesColor", "mouth", "top", "hairColor", "circleColor", "isCircle"].forEach((a => {
                u((() => se.avatar[a]), La)
            }));
            const ie = () => {
                if (La()) {
                    Wa.skincolorsData = se.avatar.skinColor, Wa.clothesData = se.avatar.clothes, Wa.eyesData = se.avatar.eyes, Wa.accessoriesData = se.avatar.accessories, Wa.facialhairData = se.avatar.facialHair, Wa.eyebrowsData = se.avatar.eyebrows, Wa.mouthsData = se.avatar.mouth, Wa.topsData = se.avatar.top, Wa.hatandshirtcolorsData = se.avatar.topColor, Wa.haircolorsData = se.avatar.hairColor, Wa.graphicshirtData = se.avatar.graphicShirt, Wa.circleData = se.avatar.circleColor, Wa.circleenabledData = se.avatar.isCircle, Wa.enabledData = se.enabled, Wa.clothescolorData = se.avatar.clothesColor;
                    let e = 0,
                        l = !1,
                        t = "";
                    for (var a in O.SkinColors) {
                        if (se.avatar.skinColor == O.SkinColors[a]) {
                            t += oe(e), l = !0;
                            break
                        }
                        e++
                    }
                    for (var a in l || (t += "a"), t += oe(E.Clothes.indexOf(se.avatar.clothes)), t += oe(E.Eyes.indexOf(se.avatar.eyes)), t += oe(E.Accessories.indexOf(se.avatar.accessories)), t += oe(E.FacialHair.indexOf(se.avatar.facialHair)), t += oe(E.Eyebrows.indexOf(se.avatar.eyebrows)), t += oe(E.Mouths.indexOf(se.avatar.mouth)), t += oe(E.Tops.indexOf(se.avatar.top)), e = 0, l = !1, O.HatAndShirtColors) {
                        if (se.avatar.topColor == O.HatAndShirtColors[a]) {
                            t += oe(e), l = !0;
                            break
                        }
                        e++
                    }
                    for (var a in l || (t += "a"), e = 0, l = !1, O.HairColors) {
                        if (se.avatar.hairColor == O.HairColors[a]) {
                            t += oe(e), l = !0;
                            break
                        }
                        e++
                    }
                    for (var a in l || (t += "a"), t += oe(E.GraphicShirt.indexOf(se.avatar.graphicShirt)), e = 0, l = !1, O.HatAndShirtColors) {
                        if (se.avatar.circleColor == O.HatAndShirtColors[a]) {
                            t += oe(e), l = !0;
                            break
                        }
                        e++
                    }
                    for (var a in l || (t += "z"), t += se.avatar.isCircle ? "b" : "a", t += se.enabled ? "b" : "a", e = 0, l = !1, O.HatAndShirtColors) {
                        if (se.avatar.clothesColor == O.HatAndShirtColors[a]) {
                            t += oe(e), l = !0;
                            break
                        }
                        e++
                    }
                    l || (t += "a");
                    const s = new H;
                    s.append("avatar", t), I.changeAvatar(s).then((({
                        data: a
                    }) => {
                        500 == a.code ? te.error(a.message) : 0 == a.code && (J.isAppOn ? window.ReactNativeWebView.postMessage(JSON.stringify({
                            opzkey: "avatar",
                            value: t
                        })) : le("update:modelValue", !1), te.success(Qa("pga.success-saved")))
                    }))
                } else qa.value = !0, te.error(Qa("pga.field-not-empty"))
            };
            v((() => (async () => {
                ee.modelValue
            })()));
            const ce = m({
                get: () => ee.modelValue,
                set: a => le("update:modelValue", a)
            });
            return i(3), (a, t) => {
                const s = q;
                return e(), l(w, null, [ee.btn && !f(J).isAppOn ? (e(), h(f(M), {
                    key: 0,
                    size: "small",
                    color: "var(--primary)",
                    style: {
                        color: "white"
                    },
                    onClick: t[0] || (t[0] = a => le("update:modelValue", !0))
                }, {
                    default: g((() => [C(V(f(Qa)("dash.deposit")), 1)])),
                    _: 1
                })) : y("", !0), x(f(N), {
                    modelValue: ce.value,
                    "onUpdate:modelValue": t[16] || (t[16] = a => ce.value = a),
                    "lock-scroll": "",
                    class: b(["dialogw cdetail", f(J).isAppOn && "isapp"]),
                    "destroy-on-close": "",
                    onClose: re,
                    onOpen: t[17] || (t[17] = a => {})
                }, {
                    header: g((() => [k("div", L, [se.enabled ? (e(), h(f(A), U({
                        key: 0
                    }, se.avatar, {
                        style: {
                            width: "124px"
                        },
                        onClick: Ka
                    }), null, 16)) : (e(), l("img", P))]), C(" " + V(Ra.value), 1)])),
                    footer: g((() => [k("span", Ia, [x(f(M), {
                        type: "primary",
                        onClick: ie
                    }, {
                        default: g((() => t[22] || (t[22] = [C("Save")]))),
                        _: 1
                    })])])),
                    default: g((() => {
                        var r, o, i, c, n;
                        return [k("div", R, [k("div", W, [k("span", X, V("Custom Avatar") + ":" + V(a.mess), 1), k("span", K, [x(f(B), {
                            modelValue: se.enabled,
                            "onUpdate:modelValue": t[1] || (t[1] = a => se.enabled = a),
                            "active-icon": f(_),
                            "inactive-icon": f(D)
                        }, null, 8, ["modelValue", "active-icon", "inactive-icon"])])]), se.enabled ? (e(), l("div", Y, [k("div", Q, [k("span", {
                            class: b(["ml-4", Pa("skinColor")])
                        }, V("Skin Color") + ":", 2), k("span", aa, [x(f(Z), {
                            modelValue: se.avatar.skinColor,
                            "onUpdate:modelValue": t[2] || (t[2] = a => se.avatar.skinColor = a),
                            class: "radio-group-color"
                        }, {
                            default: g((() => [(e(!0), l(w, null, j(f(O).SkinColors, ((a, l) => (e(), h(f(T), {
                                class: "radio-color",
                                label: a
                            }, {
                                default: g((() => [k("div", {
                                    class: "color-item",
                                    style: S("background-color: " + a)
                                }, null, 4)])),
                                _: 2
                            }, 1032, ["label"])))), 256))])),
                            _: 1
                        }, 8, ["modelValue"])])]), k("div", ea, [k("span", {
                            class: b(["ml-4", Pa("accessories")])
                        }, V("Accessories") + ":", 2), k("span", la, [x(f(F), {
                            modelValue: se.avatar.accessories,
                            "onUpdate:modelValue": t[3] || (t[3] = a => se.avatar.accessories = a),
                            class: "mx-1 select-av",
                            "popper-class": "av-popper",
                            size: "small",
                            style: {
                                width: "120px"
                            },
                            placeholder: f(Qa)("wall.please-select").toUpperCase()
                        }, {
                            default: g((() => [(e(!0), l(w, null, j(f(E).Accessories, (a => (e(), h(f(G), {
                                key: a,
                                label: Ya(a),
                                value: a,
                                class: "item-avatar"
                            }, {
                                default: g((() => [k("span", ta, V(a), 1), k("div", sa, [x(s, {
                                    style: {
                                        width: "120px",
                                        height: "50px",
                                        "padding-top": "24px",
                                        transform: "scale(0.33)",
                                        "transform-origin": "top right"
                                    },
                                    svgUrl: "/images/avatar/parts/accessories/" + a.replace(" ", "") + ".svg"
                                }, null, 8, ["svgUrl"])])])),
                                _: 2
                            }, 1032, ["label", "value"])))), 128))])),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])])]), k("div", ra, [k("span", {
                            class: b(["ml-4", Pa("facialHair")])
                        }, V("Facial Hair") + ":", 2), k("span", oa, [x(f(F), {
                            modelValue: se.avatar.facialHair,
                            "onUpdate:modelValue": t[4] || (t[4] = a => se.avatar.facialHair = a),
                            class: "mx-1 select-av",
                            "popper-class": "av-popper",
                            size: "small",
                            style: {
                                width: "120px"
                            },
                            placeholder: f(Qa)("wall.please-select").toUpperCase()
                        }, {
                            default: g((() => [(e(!0), l(w, null, j(f(E).FacialHair, (a => (e(), h(f(G), {
                                key: a,
                                label: a.replace(/([A-Z])/g, " $1").trim(),
                                value: a
                            }, {
                                default: g((() => [k("span", ia, V(a), 1), k("div", ca, [x(s, {
                                    style: {
                                        width: "120px",
                                        transform: "scale(0.21)",
                                        "transform-origin": "top right"
                                    },
                                    color: "var(--gray-04)",
                                    svgUrl: "/images/avatar/parts/facialHair/" + a.replace(" ", "") + ".svg"
                                }, null, 8, ["svgUrl"])])])),
                                _: 2
                            }, 1032, ["label", "value"])))), 128))])),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])])]), k("div", na, [k("span", {
                            class: b(["ml-4", Pa("eyes")])
                        }, V("Eyes") + ":", 2), k("span", pa, [x(f(F), {
                            modelValue: se.avatar.eyes,
                            "onUpdate:modelValue": t[5] || (t[5] = a => se.avatar.eyes = a),
                            class: "mx-1 select-av",
                            size: "small",
                            style: {
                                width: "120px"
                            },
                            "popper-class": "av-pop av-popper",
                            placeholder: f(Qa)("wall.please-select").toUpperCase()
                        }, {
                            default: g((() => [(e(!0), l(w, null, j(f(E).Eyes, (a => (e(), h(f(G), {
                                key: a,
                                label: a.replace(/([A-Z])/g, " $1").trim(),
                                value: a
                            }, {
                                default: g((() => [k("span", da, V(a), 1), k("div", ua, [x(s, {
                                    style: {
                                        width: "120px",
                                        "padding-top": "10px",
                                        transform: "scale(0.44)",
                                        "transform-origin": "top right"
                                    },
                                    svgUrl: "/images/avatar/parts/eyes/" + a.replace(" ", "") + ".svg"
                                }, null, 8, ["svgUrl"])])])),
                                _: 2
                            }, 1032, ["label", "value"])))), 128))])),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])])]), k("div", va, [k("span", {
                            class: b(["ml-4", Pa("eyebrows")])
                        }, V("Eyebrows") + ":", 2), k("span", ma, [x(f(F), {
                            modelValue: se.avatar.eyebrows,
                            "onUpdate:modelValue": t[6] || (t[6] = a => se.avatar.eyebrows = a),
                            class: "mx-1 select-av",
                            style: {
                                width: "120px"
                            },
                            "popper-class": "av-popper",
                            size: "small",
                            placeholder: f(Qa)("wall.please-select").toUpperCase()
                        }, {
                            default: g((() => [(e(!0), l(w, null, j(f(E).Eyebrows, (a => (e(), h(f(G), {
                                key: a,
                                label: a.replace(/([A-Z])/g, " $1").trim(),
                                value: a
                            }, {
                                default: g((() => [k("span", fa, V(a), 1), k("div", ha, [x(s, {
                                    style: {
                                        width: "110px",
                                        "padding-top": "10px",
                                        transform: "scale(0.5)",
                                        "transform-origin": "top right"
                                    },
                                    color: "var(--gray-04)",
                                    svgUrl: "/images/avatar/parts/eyebrows/" + a.replace(" ", "") + ".svg"
                                }, null, 8, ["svgUrl"])])])),
                                _: 2
                            }, 1032, ["label", "value"])))), 128))])),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])])]), k("div", ga, [k("span", {
                            class: b(["ml-4", Pa("mouth")])
                        }, V("Mouth") + ":", 2), k("span", ya, [x(f(F), {
                            modelValue: se.avatar.mouth,
                            "onUpdate:modelValue": t[7] || (t[7] = a => se.avatar.mouth = a),
                            class: "mx-1 select-av",
                            style: {
                                width: "120px"
                            },
                            size: "small",
                            placeholder: f(Qa)("wall.please-select").toUpperCase(),
                            "popper-class": "av-pop av-popper"
                        }, {
                            default: g((() => [(e(!0), l(w, null, j(f(E).Mouths, (a => (e(), h(f(G), {
                                key: a,
                                label: a.replace(/([A-Z])/g, " $1").trim(),
                                value: a
                            }, {
                                default: g((() => [k("span", xa, V(a), 1), k("div", ba, [x(s, {
                                    style: {
                                        width: "110px",
                                        "padding-top": "10px",
                                        transform: "scale(0.5)",
                                        "transform-origin": "top right"
                                    },
                                    transformAll: "",
                                    svgUrl: "/images/avatar/parts/mouth/" + a.replace(" ", "") + ".svg"
                                }, null, 8, ["svgUrl"])])])),
                                _: 2
                            }, 1032, ["label", "value"])))), 128))])),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])])]), k("div", wa, [k("span", {
                            class: b(["ml-4", Pa("top")])
                        }, V("Hair/Hat") + ":", 2), k("span", Ca, [x(f(F), {
                            modelValue: se.avatar.top,
                            "onUpdate:modelValue": t[8] || (t[8] = a => se.avatar.top = a),
                            class: "mx-1 select-av",
                            size: "small",
                            style: {
                                width: "120px"
                            },
                            "popper-class": "av-pop av-popper",
                            placeholder: f(Qa)("wall.please-select").toUpperCase()
                        }, {
                            default: g((() => [(e(!0), l(w, null, j(f(E).Tops, (a => (e(), h(f(G), {
                                key: a,
                                label: Ya(a.replace(/([A-Z])/g, " $1").trim()),
                                value: a
                            }, {
                                default: g((() => [k("span", Va, V(a), 1), k("div", ka, [x(s, {
                                    style: {
                                        width: "100px",
                                        "padding-top": "20px",
                                        transform: "scale(0.13)",
                                        "transform-origin": "top right"
                                    },
                                    transformOff: "",
                                    svgUrl: "/images/avatar/parts/tops/" + a.replace(" ", "") + ".svg"
                                }, null, 8, ["svgUrl"])])])),
                                _: 2
                            }, 1032, ["label", "value"])))), 128))])),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])])]), (null == (o = null == (r = se.avatar) ? void 0 : r.top) ? void 0 : o.includes("Hat")) || "Turban" == (null == (i = se.avatar) ? void 0 : i.top) || "Hijab" == (null == (c = se.avatar) ? void 0 : c.top) ? (e(), l("div", Ua, [t[18] || (t[18] = k("span", {
                            class: "ml-4"
                        }, V("Hat Color") + ":", -1)), k("span", ja, [x(f(Z), {
                            modelValue: se.avatar.topColor,
                            "onUpdate:modelValue": t[9] || (t[9] = a => se.avatar.topColor = a),
                            class: "radio-group-color"
                        }, {
                            default: g((() => [(e(!0), l(w, null, j(f(O).HatAndShirtColors, ((a, l) => (e(), h(f(T), {
                                class: "radio-color",
                                label: a
                            }, {
                                default: g((() => [k("div", {
                                    class: "color-item",
                                    style: S("background-color: " + a)
                                }, null, 4)])),
                                _: 2
                            }, 1032, ["label"])))), 256))])),
                            _: 1
                        }, 8, ["modelValue"])])])) : y("", !0), k("div", Sa, [k("span", {
                            class: b(["ml-4", Pa("hairColor")])
                        }, V("Hair Colors") + ":", 2), k("span", _a, [x(f(Z), {
                            modelValue: se.avatar.hairColor,
                            "onUpdate:modelValue": t[10] || (t[10] = a => se.avatar.hairColor = a),
                            class: "radio-group-color"
                        }, {
                            default: g((() => [(e(!0), l(w, null, j(f(O).HairColors, ((a, l) => (e(), h(f(T), {
                                class: "radio-color",
                                label: a
                            }, {
                                default: g((() => [k("div", {
                                    class: "color-item",
                                    style: S("background-color: " + a)
                                }, null, 4)])),
                                _: 2
                            }, 1032, ["label"])))), 256))])),
                            _: 1
                        }, 8, ["modelValue"])])]), k("div", Da, [k("span", {
                            class: b(["ml-4", Pa("clothes")])
                        }, V("Clothes") + ":", 2), k("span", Ha, [x(f(F), {
                            modelValue: se.avatar.clothes,
                            "onUpdate:modelValue": t[11] || (t[11] = a => se.avatar.clothes = a),
                            class: "mx-1 select-av",
                            size: "small",
                            style: {
                                width: "120px"
                            },
                            "popper-class": "av-pop av-popper",
                            placeholder: f(Qa)("wall.please-select").toUpperCase()
                        }, {
                            default: g((() => [(e(!0), l(w, null, j(f(E).Clothes, (a => (e(), h(f(G), {
                                key: a,
                                label: a.replace(/([A-Z])/g, " $1").trim(),
                                value: a
                            }, {
                                default: g((() => [k("span", Aa, V(a), 1), k("div", Oa, [x(s, {
                                    style: {
                                        width: "100px",
                                        "padding-top": "10px",
                                        transform: "scale(0.25)",
                                        "transform-origin": "top right"
                                    },
                                    svgUrl: "/images/avatar/parts/clothes/" + a.replace(" ", "") + ".svg"
                                }, null, 8, ["svgUrl"])])])),
                                _: 2
                            }, 1032, ["label", "value"])))), 128))])),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])])]), k("div", Ea, [k("span", {
                            class: b(["ml-4", Pa("clothesColor")])
                        }, V("Clothes Color") + ":", 2), k("span", za, [x(f(Z), {
                            modelValue: se.avatar.clothesColor,
                            "onUpdate:modelValue": t[12] || (t[12] = a => se.avatar.clothesColor = a),
                            class: "radio-group-color"
                        }, {
                            default: g((() => [(e(!0), l(w, null, j(f(O).HatAndShirtColors, ((a, l) => (e(), h(f(T), {
                                class: "radio-color",
                                label: a
                            }, {
                                default: g((() => [k("div", {
                                    class: "color-item",
                                    style: S("background-color: " + a)
                                }, null, 4)])),
                                _: 2
                            }, 1032, ["label"])))), 256))])),
                            _: 1
                        }, 8, ["modelValue"])])]), "GraphicShirt" == se.avatar.clothes ? (e(), l("div", $a, [t[19] || (t[19] = k("span", {
                            class: "ml-4"
                        }, V("Graphic Shirt") + ":", -1)), k("span", Ma, [x(f(F), {
                            "popper-class": "av-popper",
                            modelValue: se.avatar.graphicShirt,
                            "onUpdate:modelValue": t[13] || (t[13] = a => se.avatar.graphicShirt = a),
                            size: "small",
                            style: {
                                width: "120px"
                            },
                            class: "mx-1 select-av",
                            placeholder: f(Qa)("wall.please-select").toUpperCase()
                        }, {
                            default: g((() => [(e(!0), l(w, null, j(f(E).GraphicShirt, (a => (e(), h(f(G), {
                                key: a,
                                label: a.replace(/([A-Z])/g, " $1").trim(),
                                value: a
                            }, {
                                default: g((() => [k("span", Na, V(a), 1), k("div", Ba, [x(s, {
                                    style: {
                                        width: "100px",
                                        "padding-top": "10px",
                                        transform: "scale(0.25)",
                                        "transform-origin": "top right"
                                    },
                                    svgUrl: "/images/avatar/parts/graphicShirt/" + a.replace(" ", "") + ".svg"
                                }, null, 8, ["svgUrl"])])])),
                                _: 2
                            }, 1032, ["label", "value"])))), 128))])),
                            _: 1
                        }, 8, ["modelValue", "placeholder"])])])) : y("", !0), k("div", Za, [t[20] || (t[20] = k("span", {
                            class: "ml-4"
                        }, V("Circle") + ":", -1)), k("span", Ta, [x(f(B), {
                            modelValue: se.avatar.isCircle,
                            "onUpdate:modelValue": t[14] || (t[14] = a => se.avatar.isCircle = a),
                            "active-text": "✓",
                            "active-icon": f(_),
                            "inactive-icon": f(D)
                        }, null, 8, ["modelValue", "active-icon", "inactive-icon"])])]), (null == (n = se.avatar) ? void 0 : n.isCircle) ? (e(), l("div", Fa, [k("span", {
                            class: b(["ml-4", Pa("circleColor")])
                        }, V("Circle Background") + ":", 2), k("span", Ga, [x(f(Z), {
                            modelValue: se.avatar.circleColor,
                            "onUpdate:modelValue": t[15] || (t[15] = a => se.avatar.circleColor = a),
                            class: "radio-group-color"
                        }, {
                            default: g((() => [x(f(T), {
                                class: "radio-color",
                                label: "#7303fc",
                                value: "#7303fc"
                            }, {
                                default: g((() => t[21] || (t[21] = [k("div", {
                                    class: "color-item",
                                    style: "background-color: #7303fc"
                                }, null, -1)]))),
                                _: 1
                            }), (e(!0), l(w, null, j(f(O).HatAndShirtColors, ((a, l) => (e(), h(f(T), {
                                class: "radio-color",
                                label: a
                            }, {
                                default: g((() => [k("div", {
                                    class: "color-item",
                                    style: S("background-color: " + a)
                                }, null, 4)])),
                                _: 2
                            }, 1032, ["label"])))), 256))])),
                            _: 1
                        }, 8, ["modelValue"])])])) : y("", !0)])) : y("", !0)])]
                    })),
                    _: 1
                }, 8, ["modelValue", "class"])], 64)
            }
        }
    }), [
        ["__scopeId", "data-v-7e46261a"]
    ]);
export {
    Ja as
    default
};