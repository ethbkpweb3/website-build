import {
    g as e,
    b as a,
    h as l
} from "./index-N2rhOp93.js";
const t = e("avatarSettings", (() => {
    const e = a("haircolors", ""),
        t = a("hatandshirtcolors", ""),
        s = a("skincolors", ""),
        u = a("accessories", ""),
        v = a("clothes", ""),
        o = a("clothescolor", ""),
        r = a("eyebrows", ""),
        c = a("eyes", ""),
        i = a("facialhair", ""),
        g = a("graphicshirt", ""),
        h = a("mouths", ""),
        n = a("tops", ""),
        D = a("enabled", !1),
        b = a("circleenabled", !1),
        d = a("circle", ""),
        p = l({
            get: () => D.value,
            set(e) {
                D.value = e
            }
        }),
        f = l({
            get: () => b.value,
            set(e) {
                b.value = e
            }
        }),
        m = l({
            get: () => d.value,
            set(e) {
                d.value = e
            }
        });
    return {
        clearAll: function() {
            e.value = "", t.value = "", s.value = "", u.value = "", v.value = "", o.value = "", r.value = "", c.value = "", i.value = "", g.value = "", h.value = "", n.value = "", D.value = !1, b.value = !1, d.value = ""
        },
        haircolorsData: l({
            get: () => e.value,
            set(a) {
                e.value = a
            }
        }),
        hatandshirtcolorsData: l({
            get: () => t.value,
            set(e) {
                t.value = e
            }
        }),
        skincolorsData: l({
            get: () => s.value,
            set(e) {
                s.value = e
            }
        }),
        accessoriesData: l({
            get: () => u.value,
            set(e) {
                u.value = e
            }
        }),
        clothesData: l({
            get: () => v.value,
            set(e) {
                v.value = e
            }
        }),
        clothescolorData: l({
            get: () => o.value,
            set(e) {
                o.value = e
            }
        }),
        eyebrowsData: l({
            get: () => r.value,
            set(e) {
                r.value = e
            }
        }),
        eyesData: l({
            get: () => c.value,
            set(e) {
                c.value = e
            }
        }),
        facialhairData: l({
            get: () => i.value,
            set(e) {
                i.value = e
            }
        }),
        graphicshirtData: l({
            get: () => g.value,
            set(e) {
                g.value = e
            }
        }),
        mouthsData: l({
            get: () => h.value,
            set(e) {
                h.value = e
            }
        }),
        topsData: l({
            get: () => n.value,
            set(e) {
                n.value = e
            }
        }),
        enabledData: p,
        circleenabledData: f,
        circleData: m
    }
}));
export {
    t as a
};