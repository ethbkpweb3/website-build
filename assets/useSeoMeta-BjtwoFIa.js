import {
    G as t
} from "./index-N2rhOp93.js";
import {
    u as e
} from "./vue.8fc199ce-QgmHmpog.js";

function o(o, r, n, p) {
    t();
    let i = [{
        name: "description",
        content: r
    }, {
        property: "og:description",
        content: r
    }, {
        property: "og:title",
        content: o
    }];
    if (p && i.push({
            property: "og:image",
            content: p
        }), n) {
        const t = [{
            property: "twitter:title",
            content: o
        }, {
            property: "twitter:description",
            content: r
        }];
        p && t.push({
            property: "twitter:image",
            content: p
        }), i = [...i, ...t]
    }
    e({
        title: o,
        meta: [...i]
    })
}
export {
    o as u
};