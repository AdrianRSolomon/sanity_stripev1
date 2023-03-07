"use strict";
(() => {
var exports = {};
exports.id = 24;
exports.ids = [24];
exports.modules = {

/***/ 4602:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _slug_),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/lib/sanity/client.ts
var client = __webpack_require__(8289);
// EXTERNAL MODULE: external "groq"
var external_groq_ = __webpack_require__(1360);
var external_groq_default = /*#__PURE__*/__webpack_require__.n(external_groq_);
;// CONCATENATED MODULE: ./src/lib/sanity/queries/category.ts

const categoryQuery = (external_groq_default())`
  *[_type == "category" && slug.current == $slug][0]{
    _id,
    title,
    "slug": slug.current,
    description,
    featured_image
  }
`;
/* harmony default export */ const queries_category = (categoryQuery);

;// CONCATENATED MODULE: ./src/lib/sanity/queries/categories_slugs.ts

const categoriesSlugsQuery = (external_groq_default())`
  *[_type == "category"]{
    "slug": slug.current
  }
`;
/* harmony default export */ const categories_slugs = (categoriesSlugsQuery);

;// CONCATENATED MODULE: ./src/lib/sanity/queries/category_products.ts

const categoryProductsQuery = (external_groq_default())`
  *[_type == "product" && $slug in categories[]->slug.current ]{
    _id,
    name,
    "slug": slug.current,
    description,
    featured_image,
    price,
    on_sale,
    sale_price,
    sku
  }
`;
/* harmony default export */ const category_products = (categoryProductsQuery);

// EXTERNAL MODULE: ./src/components/ProductList/ProductList.tsx + 1 modules
var ProductList = __webpack_require__(7163);
// EXTERNAL MODULE: ./src/components/MetaHead.tsx
var MetaHead = __webpack_require__(5763);
;// CONCATENATED MODULE: ./src/pages/category/[slug].tsx







const Category = ({ products , category  })=>{
    const { title , description  } = category;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            title && /*#__PURE__*/ jsx_runtime_.jsx(MetaHead/* default */.Z, {
                title: `NextJS Sanity Stripe eCommerce | ${title}`,
                description: description
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: "page-heading capitalize",
                        children: category.title
                    }),
                    category.description && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "paragraph",
                        children: category.description
                    }),
                    products.length > 0 ? /*#__PURE__*/ jsx_runtime_.jsx(ProductList/* default */.Z, {
                        products: products
                    }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        className: "font-semibold",
                        children: [
                            "Awww! All ",
                            title,
                            " products are sold out!"
                        ]
                    })
                ]
            })
        ]
    });
};
const getStaticProps = async ({ params  })=>{
    const products = await client/* default.fetch */.Z.fetch(category_products, {
        slug: params?.slug
    });
    const category = await client/* default.fetch */.Z.fetch(queries_category, {
        slug: params?.slug
    });
    if (!products || !category) {
        throw Error("Sorry, something went wrong.");
    }
    return {
        props: {
            products,
            category
        },
        revalidate: 100
    };
};
const getStaticPaths = async ()=>{
    const slugs = await client/* default.fetch */.Z.fetch(categories_slugs);
    const paths = slugs.map((item)=>({
            params: {
                slug: item.slug
            }
        }));
    return {
        paths,
        fallback: "blocking"
    };
};
/* harmony default export */ const _slug_ = (Category);


/***/ }),

/***/ 1097:
/***/ ((module) => {

module.exports = require("@sanity/client");

/***/ }),

/***/ 1791:
/***/ ((module) => {

module.exports = require("@sanity/image-url");

/***/ }),

/***/ 9003:
/***/ ((module) => {

module.exports = require("classnames");

/***/ }),

/***/ 1360:
/***/ ((module) => {

module.exports = require("groq");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,61,105,763,163], () => (__webpack_exec__(4602)));
module.exports = __webpack_exports__;

})();