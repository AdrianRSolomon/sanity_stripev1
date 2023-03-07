"use strict";
(() => {
var exports = {};
exports.id = 915;
exports.ids = [915];
exports.modules = {

/***/ 2260:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const CartContext = react__WEBPACK_IMPORTED_MODULE_0___default().createContext({
    dispatch: ()=>null,
    cart: []
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CartContext);


/***/ }),

/***/ 310:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const CartVisibilityContext = react__WEBPACK_IMPORTED_MODULE_0___default().createContext({
    cartVisibility: false,
    toggleCartVisibility: ()=>null
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CartVisibilityContext);


/***/ }),

/***/ 2562:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1360);
/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(groq__WEBPACK_IMPORTED_MODULE_0__);

const productQuery = (groq__WEBPACK_IMPORTED_MODULE_0___default())`
  *[_type == "product" && slug.current == $slug][0]{
    _id,
    name,
    "slug": slug.current,
    description,
    featured_image,
    price,
    on_sale,
    sale_price,
    "categories": categories[]->{
      title,
      'slug': slug.current
    },
    sku
  }
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (productQuery);


/***/ }),

/***/ 7032:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1360);
/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(groq__WEBPACK_IMPORTED_MODULE_0__);

const productsSlugsQuery = (groq__WEBPACK_IMPORTED_MODULE_0___default())`
  *[_type == "product"]{
    "slug": slug.current
  }
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (productsSlugsQuery);


/***/ }),

/***/ 4145:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var contexts_cartItemsContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2260);
/* harmony import */ var reducers_cart_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(276);
/* harmony import */ var _portabletext_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5711);
/* harmony import */ var lib_sanity_queries_products_slugs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7032);
/* harmony import */ var lib_sanity_queries_product__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2562);
/* harmony import */ var lib_sanity_urlFor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8105);
/* harmony import */ var lib_sanity_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8289);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var components_MetaHead__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5763);
/* harmony import */ var contexts_cartVisibilityContext__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(310);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_portabletext_react__WEBPACK_IMPORTED_MODULE_6__]);
_portabletext_react__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];














const Product = ({ product  })=>{
    const { toggleCartVisibility  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(contexts_cartVisibilityContext__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z);
    const { dispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(contexts_cartItemsContext__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z);
    const addToCart = ()=>{
        dispatch({
            type: reducers_cart_types__WEBPACK_IMPORTED_MODULE_5__/* ["default"].addToCart */ .Z.addToCart,
            payload: {
                ...product
            }
        });
        toggleCartVisibility();
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            product?.name && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_MetaHead__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                title: product.name,
                description: (0,_portabletext_react__WEBPACK_IMPORTED_MODULE_6__.toPlainText)(product.description)
            }),
            product?.categories && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex sm:flex-row flex-col justify-between w-full max-w-2xl mx-auto sm:mt-0 mb-9 ",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                    href: `/category/${product.categories[0].slug}`,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                        children: [
                            "\xab ",
                            product.categories[0].title
                        ]
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex sm:flex-row flex-col justify-between w-full max-w-2xl mx-auto sm:mt-8 mt-3",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "overflow-hidden relative sm:w-2/5 w-full sm:mb-0 mb-5 h-80",
                        children: product?.featured_image && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                            src: (0,lib_sanity_urlFor__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(product.featured_image).url(),
                            layout: "fill",
                            quality: 100,
                            className: "object-cover",
                            alt: product.name
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "sm:w-3/5 w-full sm:pl-6 sm:pr-0 pl-5 pr-5 ",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: "text-4xl text-left font-bold text-gray-900 sm:truncate mb-8",
                                children: product?.name
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                className: "mb-6",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text-xl text-gray-900 mr-2",
                                        children: "Price: "
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        className: classnames__WEBPACK_IMPORTED_MODULE_11___default()("text-2xl mb-1", {
                                            "line-through text-gray-400 mr-3": product?.on_sale,
                                            "text-gray-900": !product?.on_sale
                                        }),
                                        children: [
                                            "$",
                                            product?.price
                                        ]
                                    }),
                                    product?.on_sale && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        className: "text-red-600 text-2xl ",
                                        children: [
                                            "NOW $",
                                            product?.sale_price
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                className: "text-xl text-gray-900 mr-2",
                                children: "Description:"
                            }),
                            product?.description && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "text-gray-600 text-sm mb-5",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_portabletext_react__WEBPACK_IMPORTED_MODULE_6__.PortableText, {
                                    value: product?.description
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                onClick: addToCart,
                                className: "bg-black px-6 py-3 text-white text-xs uppercase hover:bg-white hover:text-black border-black border-2 transition-colors duration-500",
                                children: "Add To Cart"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
const getStaticProps = async ({ params  })=>{
    const product = await lib_sanity_client__WEBPACK_IMPORTED_MODULE_10__/* ["default"].fetch */ .Z.fetch(lib_sanity_queries_product__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        slug: params?.slug
    });
    if (!product) {
        throw Error("Sorry, something went wrong.");
    }
    return {
        props: {
            product
        },
        revalidate: 100
    };
};
const getStaticPaths = async ()=>{
    const slugs = await lib_sanity_client__WEBPACK_IMPORTED_MODULE_10__/* ["default"].fetch */ .Z.fetch(lib_sanity_queries_products_slugs__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z);
    const paths = slugs.map((item)=>({
            params: {
                slug: item.slug
            }
        }));
    return {
        paths,
        fallback: true
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Product);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 276:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Types;
(function(Types) {
    Types["bulkAdd"] = "BULKADD";
    Types["addToCart"] = "ADDTOCART";
    Types["removeSingleItem"] = "REMOVESINGLEITEM";
    Types["removeWholeProduct"] = "REMOVEWHOLEPRODUCT";
    Types["removeAllItems"] = "REMOVEALLITEMS";
})(Types || (Types = {}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Types);


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

/***/ }),

/***/ 5711:
/***/ ((module) => {

module.exports = import("@portabletext/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,61,105,763], () => (__webpack_exec__(4145)));
module.exports = __webpack_exports__;

})();