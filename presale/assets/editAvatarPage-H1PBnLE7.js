import e from "./avatarEdit-DFArhysC.js";
import {
    u as t
} from "./viewWrapper-yhXGfwRy.js";
import {
    u as i
} from "./useSeoMeta-DJrBtPw8.js";
import {
    m as a,
    Y as r,
    y as s,
    B as o,
    j as p,
    v as m,
    o as n
} from "./index-CQfCy4Xm.js";
import "./_plugin-vue_export-helper-BCo6x5W8.js";
import "./index-DZwhim7i.js";
import "./browser-Cv63Auap.js";
import "./vue3-avataaars-DO56oOZp.js";
import "./avatarSettings-C1kj7zSJ.js";
import "./index-C8UagDfc.js";
import "./index-DhHA3mFI.js";
import "./index-wV0BwLDn.js";
import "./index-DWyf7GKU.js";
import "./use-global-config-CYuHb1FB.js";
import "./index-CreMjc0E.js";
import "./index-5N62XIoj.js";
import "./index-DYh1qtlV.js";
import "./use-dialog-CC6CVfkB.js";
import "./index-BR6qnryQ.js";
import "./index-DMxP6Huc.js";
import "./validator-Kt7cHrwc.js";
import "./index-CBmmRNm0.js";
import "./index-38aUouWI.js";
import "./vue.8fc199ce-DBDcZ0BB.js";
const l = {
        class: "page-content-inner"
    },
    d = a({
        __name: "editAvatarPage",
        setup(a) {
            i("Edit Your Avatar", "Customize your OPZ avatar profile picture.");
            const {
                t: d,
                locale: j
            } = r(), u = t(), v = s(!0);
            return u.setPageTitle(d("dash.wallet")), o(j, (() => {
                u.setPageTitle(d("dash.wallet"))
            })), (t, i) => {
                const a = e;
                return n(), p("div", l, [m(a, {
                    btn: !1,
                    modelValue: v.value,
                    "onUpdate:modelValue": i[0] || (i[0] = e => v.value = e)
                }, null, 8, ["modelValue"])])
            }
        }
    });
export {
    d as
    default
};