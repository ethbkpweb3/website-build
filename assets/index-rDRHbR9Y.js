import {
    a
} from "./avatarSettings-w9PeV2PM.js";
import {
    U as s,
    I as t
} from "./vue3-avataaars-DUipYaYR.js";
import {
    dn as r,
    u as o
} from "./index-N2rhOp93.js";
const l = a => a.charCodeAt(0) - 97;
class c {
    constructor() {}
    setUser(s) {
        const t = r(),
            l = a(),
            c = o(),
            i = s;
        console.log("sssssssssssssssssssssssssssssssssssssssssssss"), c.tokenData = i.token, c.userData = i, t.isApp = !0, t.isAppOn = !0, l || this.setAvatar(s)
    }
    setAvatar(r) {
        const o = a(),
            c = r.avatar;
        if (c) {
            let a = 0;
            for (const t in s.SkinColors) {
                if (l(c.charAt(0)) == a) {
                    o.skincolorsData = s.SkinColors[t];
                    break
                }
                a++
            }
            if (o.clothesData = t.Clothes[l(c.charAt(1))], o.eyesData = t.Eyes[l(c.charAt(2))], o.accessoriesData = t.Accessories[l(c.charAt(3))], o.facialhairData = t.FacialHair[l(c.charAt(4))], o.eyebrowsData = t.Eyebrows[l(c.charAt(5))], o.mouthsData = t.Mouths[l(c.charAt(6))], o.topsData = t.Tops[l(c.charAt(7))], "z" == c.charAt(8)) o.hatandshirtcolorsData = "#7303fc";
            else {
                a = 0;
                for (const t in s.HatAndShirtColors) {
                    if (l(c.charAt(8)) == a) {
                        o.hatandshirtcolorsData = s.HatAndShirtColors[t];
                        break
                    }
                    a++
                }
            }
            a = 0;
            for (const t in s.HairColors) {
                if (l(c.charAt(9)) == a) {
                    o.haircolorsData = s.HairColors[t];
                    break
                }
                a++
            }
            o.graphicshirtData = t.GraphicShirt[l(c.charAt(10))], a = 0;
            for (const t in s.HatAndShirtColors) {
                if (l(c.charAt(11)) == a) {
                    o.circleData = s.HatAndShirtColors[t];
                    break
                }
                a++
            }
            o.circleenabledData = "b" == c.charAt(12), o.enabledData = "b" == c.charAt(13), a = 0;
            for (const t in s.HatAndShirtColors) {
                if (l(c.charAt(14)) == a) {
                    o.clothescolorData = s.HatAndShirtColors[t];
                    break
                }
                a++
            }
        } else o.skincolorsData = null, o.clothesData = null, o.eyesData = null, o.accessoriesData = null, o.facialhairData = null, o.eyebrowsData = null, o.mouthsData = null, o.topsData = null, o.hatandshirtcolorsData = null, o.haircolorsData = null, o.graphicshirtData = null, o.circleData = null, o.circleenabledData = !1, o.enabledData = !1, o.clothescolorData = null
    }
}
const {
    MLogin: i
} = {
    MLogin: new c
};
export {
    i as M
};