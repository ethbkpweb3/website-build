import e from "./avatarEdit-QSoXd_Wk.js";
import {
    u as t
} from "./viewWrapper-Dh8gOQC5.js";
import {
    u as i
} from "./useSeoMeta-CRPJPIvz.js";
import {
    m as a,
    Y as r,
    y as s,
    B as o,
    j as p,
    v as m,
    o as n
} from "./index-jdACH0Rc.js";
import "./_plugin-vue_export-helper-BCo6x5W8.js";
import "./index-Dwv4qbXN.js";
import "./browser-B3Bvmjnq.js";
import "./vue3-avataaars-C_k_hIh4.js";
import "./avatarSettings-Daanxsoo.js";
import "./index-TLDTKfLl.js";
import "./index-CYOIannN.js";
import "./index-D4R9Vjdp.js";
import "./index-Citk0ABi.js";
import "./use-global-config-Dm8LyY4T.js";
import "./index-Cg9BJciP.js";
import "./index-C8W9xb4z.js";
import "./index-B1yvdImc.js";
import "./use-dialog-CmZNE833.js";
import "./index-BWeq1WY3.js";
import "./index-BFdxE0IH.js";
import "./validator-Rlal7f47.js";
import "./index-qJerOQq9.js";
import "./index-cRGdv3RN.js";
import "./vue.8fc199ce-D3bCrqKA.js";
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