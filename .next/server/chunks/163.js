exports.id = 163;
exports.ids = [163];
exports.modules = {

/***/ 9235:
/***/ ((module) => {

// Exports
module.exports = {
	"productItem": "ProductItem_productItem__IkTpn"
};


/***/ }),

/***/ 7163:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ ProductList_ProductList)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/styles/components/ProductList/ProductItem.module.scss
var ProductItem_module = __webpack_require__(9235);
var ProductItem_module_default = /*#__PURE__*/__webpack_require__.n(ProductItem_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/lib/sanity/urlFor.ts
var urlFor = __webpack_require__(8105);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
;// CONCATENATED MODULE: ./src/components/ProductList/ProductItem.tsx






const ProductItem = ({ product  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (ProductItem_module_default()).productItem,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: `/product/${product.slug}`,
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    className: "relative w-full h-full",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "w-full h-96 md:mb-4 mb-2 overflow-hidden relative",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: (0,urlFor/* default */.Z)(product.featured_image).url(),
                            quality: 100,
                            layout: "fill",
                            className: "clickable-img",
                            alt: product.name
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: `/product/${product.slug}`,
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    className: "relative w-full h-full",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "w-full px-1 flex flex-col items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                className: "text-lg uppercase font-medium text-center mb-3",
                                children: product.name
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex items-center flex-col",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        className: external_classnames_default()("text-base mb-1", {
                                            "line-through text-gray-400": product.on_sale,
                                            "mr-3 text-gray-900": !product.on_sale
                                        }),
                                        children: [
                                            "$",
                                            product.price
                                        ]
                                    }),
                                    product.on_sale && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        className: "text-base text-red-600",
                                        children: [
                                            "NOW $",
                                            product.sale_price
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const ProductList_ProductItem = (ProductItem);

;// CONCATENATED MODULE: ./src/components/ProductList/ProductList.tsx


const ProductList = ({ products  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "grid gap-x-1 md:gap-y-14 gap-y-10 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1",
        children: products.map((product)=>/*#__PURE__*/ jsx_runtime_.jsx(ProductList_ProductItem, {
                product: product
            }, product._id))
    });
};
/* harmony default export */ const ProductList_ProductList = (ProductList);


/***/ })

};
;