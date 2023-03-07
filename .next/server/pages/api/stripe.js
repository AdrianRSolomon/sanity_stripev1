"use strict";
(() => {
var exports = {};
exports.id = 475;
exports.ids = [475];
exports.modules = {

/***/ 3632:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: external "@sanity/client"
const client_namespaceObject = require("@sanity/client");
var client_default = /*#__PURE__*/__webpack_require__.n(client_namespaceObject);
;// CONCATENATED MODULE: ./src/lib/sanity/client.ts

const client = client_default()({
    projectId: "5pcp0w96",
    dataset: "production",
    apiVersion: "2022-10-14",
    token: "skCdLyYGAtpmAJZlgrHr1IZVSRRmpyAptJwNamCSgPCqyXeQwBO8xLeDpDeS9T29Vlcdh9RFCV4GvDqiR4haOZGOeVUvgSv0vER17PARkjE0poWK4IQb4VppEQUYQhaoSwMDsiDP9J0EnwoCeDuyiOcBMwHJUV1AQSUvCSnxIYypBr94SeKb",
    useCdn: false // `false` if you want to ensure fresh data
});
/* harmony default export */ const sanity_client = (client);

;// CONCATENATED MODULE: external "@sanity/image-url"
const image_url_namespaceObject = require("@sanity/image-url");
var image_url_default = /*#__PURE__*/__webpack_require__.n(image_url_namespaceObject);
;// CONCATENATED MODULE: ./src/lib/sanity/urlFor.ts


const builder = image_url_default()(sanity_client);
function urlFor(source) {
    return builder.image(source);
}

;// CONCATENATED MODULE: external "stripe"
const external_stripe_namespaceObject = require("stripe");
var external_stripe_default = /*#__PURE__*/__webpack_require__.n(external_stripe_namespaceObject);
;// CONCATENATED MODULE: ./src/pages/api/stripe.ts


const stripe = new (external_stripe_default())(process.env.STRIPE_SECRET_KEY ?? "", {
    apiVersion: "2022-08-01"
});
async function handler(req, res) {
    if (req.method === "POST") {
        try {
            console.log("req.body.items", req.body.items);
            const session = await stripe.checkout.sessions.create({
                submit_type: "pay",
                payment_method_types: [
                    "card"
                ],
                billing_address_collection: "auto",
                shipping_options: [
                    {
                        shipping_rate: "shr_1LwIjtHs6qS0xDzPhMIPdvAd"
                    },
                    {
                        shipping_rate: "shr_1LwIkrHs6qS0xDzP3qphYXpq"
                    }
                ],
                line_items: req.body.items.map((item)=>{
                    const imgUrl = urlFor(item.featured_image).url();
                    return {
                        price_data: {
                            currency: "USD",
                            product_data: {
                                name: item.name,
                                images: [
                                    imgUrl
                                ]
                            },
                            unit_amount: (item.on_sale ? item.sale_price : item.price) * 100
                        },
                        adjustable_quantity: {
                            enabled: true,
                            minimum: 1
                        },
                        quantity: item.quantity ? item.quantity : 1
                    };
                }),
                mode: "payment",
                success_url: `${req.headers.origin}/success`,
                cancel_url: `${req.headers.origin}`
            });
            res.status(200).json(session);
        } catch (error) {
            res.status(500).json({
                message: error instanceof Error ? error.message : null
            });
        }
    } else {
        res.setHeader("Allow", "POST");
        res.status(405).end("Method Not Allowed");
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3632));
module.exports = __webpack_exports__;

})();