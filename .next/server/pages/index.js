(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 2685:
/***/ ((module) => {

// Exports
module.exports = {
	"categoryItem": "CategoryItem_categoryItem__oSoE0"
};


/***/ }),

/***/ 7361:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/lib/sanity/client.ts
var client = __webpack_require__(8289);
// EXTERNAL MODULE: external "groq"
var external_groq_ = __webpack_require__(1360);
var external_groq_default = /*#__PURE__*/__webpack_require__.n(external_groq_);
;// CONCATENATED MODULE: ./src/lib/sanity/queries/categories.ts

const categoriesQuery = (external_groq_default())`
  *[_type == "category"]{
    _id,
    title,
    "slug": slug.current,
    description,
    featured_image
  }
`;
/* harmony default export */ const queries_categories = (categoriesQuery);

;// CONCATENATED MODULE: ./src/lib/sanity/queries/on_sale_products.ts

const onSaleProductsQuery = (external_groq_default())`
  *[_type == "product" && on_sale == true][0..7]{
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
/* harmony default export */ const on_sale_products = (onSaleProductsQuery);

// EXTERNAL MODULE: ./src/components/MetaHead.tsx
var MetaHead = __webpack_require__(5763);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/styles/components/CategoryList/CategoryItem.module.scss
var CategoryItem_module = __webpack_require__(2685);
var CategoryItem_module_default = /*#__PURE__*/__webpack_require__.n(CategoryItem_module);
// EXTERNAL MODULE: ./src/lib/sanity/urlFor.ts
var urlFor = __webpack_require__(8105);
;// CONCATENATED MODULE: ./src/components/CategoryList/CategoryItem.tsx




const CategoryItem = ({ category  })=>{
    const { featured_image , slug , title , description  } = category;
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (CategoryItem_module_default()).categoryItem,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container mx-auto py-9 md:py-12 px-4 md:px-6",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex items-strech justify-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                    href: `/category/${slug}`,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex flex-col md:flex-row items-strech justify-between py-6 px-6 md:py-12 lg:px-12 md:w-8/12 lg:w-7/12 xl:w-8/12 2xl:w-9/12",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "flex flex-col justify-center md:w-1/2",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "text-base lg:text-xl mt-2",
                                        children: title
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: (0,urlFor/* default */.Z)(featured_image).url(),
                                        alt: title,
                                        quality: 100,
                                        layout: "fill",
                                        className: "clickable-img"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "bg-gray-50 py-6 px-6 md:py-0 md:px-4 lg:px-6 flex flex-col justify-center relative",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex flex-col justify-center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                        className: "text-3xl lg:text-4xl font-semibold text-gray-800",
                                        children: title
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "text-base lg:text-xl text-gray-800",
                                        children: description && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "text-xs",
                                            children: description
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const CategoryList_CategoryItem = (CategoryItem);

;// CONCATENATED MODULE: ./src/components/CategoryList/CategoryList.tsx


const CategoryList = ({ categories  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "flex flex-row flex-wrap justify-between mb-20",
        children: categories.map((category)=>/*#__PURE__*/ jsx_runtime_.jsx(CategoryList_CategoryItem, {
                category: category
            }, category.slug))
    });
};
/* harmony default export */ const CategoryList_CategoryList = (CategoryList);

// EXTERNAL MODULE: ./src/components/ProductList/ProductList.tsx + 1 modules
var ProductList = __webpack_require__(7163);
;// CONCATENATED MODULE: ./src/pages/index.tsx







const Home = ({ categories , products  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(MetaHead/* default */.Z, {
                description: "An eCommerce app that is built by NextJS, Sanity and Stripe."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: "main-heading text-center",
                children: "Shop all you want!"
            }),
            categories && /*#__PURE__*/ jsx_runtime_.jsx(CategoryList_CategoryList, {
                categories: categories
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: "main-heading text-center",
                children: "On Sale!"
            }),
            products && /*#__PURE__*/ jsx_runtime_.jsx(ProductList/* default */.Z, {
                products: products
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: "bg-white dark:bg-gray-900 my-6",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "mx-auto max-w-screen-sm text-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: "mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white",
                                children: "Sale Starts Today"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "mb-6 text-gray-100 md:text-lg",
                                children: "Don't miss out on our exclusive deals and promotions! Sign up for our newsletter to stay up-to-date on the latest sales and discounts. Plus, enjoy fast and reliable shipping to get your new tech in your hands as soon as possible."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: "px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80",
                                children: "Shop Now"
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: "bg-white dark:bg-gray-100",
                id: "contact",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "px-4 mx-auto",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "lg:flex lg:items-center lg:-mx-6",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "lg:w-1/2 lg:mx-6",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                                        className: "text-2xl font-semibold text-gray-800 capitalize lg:text-3xl",
                                        children: [
                                            "Contact us for ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                            " more info"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "mt-6 space-y-8 md:mt-8",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                className: "flex items-start -mx-2",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        className: "w-6 h-6 mx-2 text-blue-500 dark:text-blue-400",
                                                        fill: "none",
                                                        viewBox: "0 0 24 24",
                                                        stroke: "currentColor",
                                                        strokeWidth: 2,
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                d: "M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "mx-2 text-gray-700 truncate w-72 dark:text-gray-400",
                                                        children: "Cecilia Chapman 711-2880 Nulla St. Mankato Mississippi 96522"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                className: "flex items-start -mx-2",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        className: "w-6 h-6 mx-2 text-blue-500 dark:text-blue-400",
                                                        fill: "none",
                                                        viewBox: "0 0 24 24",
                                                        stroke: "currentColor",
                                                        strokeWidth: 2,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            d: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "mx-2 text-gray-700 truncate w-72 dark:text-gray-400",
                                                        children: "(257) 563-7401"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                className: "flex items-start -mx-2",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        className: "w-6 h-6 mx-2 text-blue-500 dark:text-blue-400",
                                                        fill: "none",
                                                        viewBox: "0 0 24 24",
                                                        stroke: "currentColor",
                                                        strokeWidth: 2,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "mx-2 text-gray-700 truncate w-72 dark:text-gray-400",
                                                        children: "acb@example.com"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "mt-6 w-80 md:mt-8",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                className: "text-gray-600 ",
                                                children: "Follow us"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "flex mt-4 -mx-1.5 ",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "mx-1.5 dark:hover:text-blue-400 text-gray-400 transition-colors duration-300 transform hover:text-blue-500",
                                                        href: "#",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                            className: "w-10 h-10 fill-current",
                                                            viewBox: "0 0 24 24",
                                                            fill: "none",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                d: "M18.6668 6.67334C18.0002 7.00001 17.3468 7.13268 16.6668 7.33334C15.9195 6.49001 14.8115 6.44334 13.7468 6.84201C12.6822 7.24068 11.9848 8.21534 12.0002 9.33334V10C9.83683 10.0553 7.91016 9.07001 6.66683 7.33334C6.66683 7.33334 3.87883 12.2887 9.3335 14.6667C8.0855 15.498 6.84083 16.0587 5.3335 16C7.53883 17.202 9.94216 17.6153 12.0228 17.0113C14.4095 16.318 16.3708 14.5293 17.1235 11.85C17.348 11.0351 17.4595 10.1932 17.4548 9.34801C17.4535 9.18201 18.4615 7.50001 18.6668 6.67268V6.67334Z"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "mx-1.5 dark:hover:text-blue-400 text-gray-400 transition-colors duration-300 transform hover:text-blue-500",
                                                        href: "#",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                                            className: "w-8 h-8",
                                                            viewBox: "0 0 24 24",
                                                            fill: "none",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                    d: "M15.2 8.80005C16.4731 8.80005 17.694 9.30576 18.5941 10.2059C19.4943 11.1061 20 12.327 20 13.6V19.2H16.8V13.6C16.8 13.1757 16.6315 12.7687 16.3314 12.4687C16.0313 12.1686 15.6244 12 15.2 12C14.7757 12 14.3687 12.1686 14.0687 12.4687C13.7686 12.7687 13.6 13.1757 13.6 13.6V19.2H10.4V13.6C10.4 12.327 10.9057 11.1061 11.8059 10.2059C12.7061 9.30576 13.927 8.80005 15.2 8.80005Z",
                                                                    fill: "currentColor"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                    d: "M7.2 9.6001H4V19.2001H7.2V9.6001Z",
                                                                    fill: "currentColor"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                    d: "M5.6 7.2C6.48366 7.2 7.2 6.48366 7.2 5.6C7.2 4.71634 6.48366 4 5.6 4C4.71634 4 4 4.71634 4 5.6C4 6.48366 4.71634 7.2 5.6 7.2Z",
                                                                    fill: "currentColor"
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "mx-1.5 dark:hover:text-blue-400 text-gray-400 transition-colors duration-300 transform hover:text-blue-500",
                                                        href: "#",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                            className: "w-8 h-8",
                                                            viewBox: "0 0 24 24",
                                                            fill: "none",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                d: "M7 10.2222V13.7778H9.66667V20H13.2222V13.7778H15.8889L16.7778 10.2222H13.2222V8.44444C13.2222 8.2087 13.3159 7.9826 13.4826 7.81591C13.6493 7.64921 13.8754 7.55556 14.1111 7.55556H16.7778V4H14.1111C12.9324 4 11.8019 4.46825 10.9684 5.30175C10.1349 6.13524 9.66667 7.2657 9.66667 8.44444V10.2222H7Z",
                                                                fill: "currentColor"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "mx-1.5 dark:hover:text-blue-400 text-gray-400 transition-colors duration-300 transform hover:text-blue-500",
                                                        href: "#",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                            className: "w-8 h-8",
                                                            viewBox: "0 0 24 24",
                                                            fill: "none",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                d: "M11.9294 7.72275C9.65868 7.72275 7.82715 9.55428 7.82715 11.825C7.82715 14.0956 9.65868 15.9271 11.9294 15.9271C14.2 15.9271 16.0316 14.0956 16.0316 11.825C16.0316 9.55428 14.2 7.72275 11.9294 7.72275ZM11.9294 14.4919C10.462 14.4919 9.26239 13.2959 9.26239 11.825C9.26239 10.354 10.4584 9.15799 11.9294 9.15799C13.4003 9.15799 14.5963 10.354 14.5963 11.825C14.5963 13.2959 13.3967 14.4919 11.9294 14.4919ZM17.1562 7.55495C17.1562 8.08692 16.7277 8.51178 16.1994 8.51178C15.6674 8.51178 15.2425 8.08335 15.2425 7.55495C15.2425 7.02656 15.671 6.59813 16.1994 6.59813C16.7277 6.59813 17.1562 7.02656 17.1562 7.55495ZM19.8731 8.52606C19.8124 7.24434 19.5197 6.10901 18.5807 5.17361C17.6453 4.23821 16.51 3.94545 15.2282 3.88118C13.9073 3.80621 9.94787 3.80621 8.62689 3.88118C7.34874 3.94188 6.21341 4.23464 5.27444 5.17004C4.33547 6.10544 4.04628 7.24077 3.98201 8.52249C3.90704 9.84347 3.90704 13.8029 3.98201 15.1238C4.04271 16.4056 4.33547 17.5409 5.27444 18.4763C6.21341 19.4117 7.34517 19.7045 8.62689 19.7687C9.94787 19.8437 13.9073 19.8437 15.2282 19.7687C16.51 19.708 17.6453 19.4153 18.5807 18.4763C19.5161 17.5409 19.8089 16.4056 19.8731 15.1238C19.9481 13.8029 19.9481 9.84704 19.8731 8.52606ZM18.1665 16.5412C17.8881 17.241 17.349 17.7801 16.6456 18.0621C15.5924 18.4799 13.0932 18.3835 11.9294 18.3835C10.7655 18.3835 8.26272 18.4763 7.21307 18.0621C6.51331 17.7837 5.9742 17.2446 5.69215 16.5412C5.27444 15.488 5.37083 12.9888 5.37083 11.825C5.37083 10.6611 5.27801 8.15832 5.69215 7.10867C5.97063 6.40891 6.50974 5.8698 7.21307 5.58775C8.26629 5.17004 10.7655 5.26643 11.9294 5.26643C13.0932 5.26643 15.596 5.17361 16.6456 5.58775C17.3454 5.86623 17.8845 6.40534 18.1665 7.10867C18.5843 8.16189 18.4879 10.6611 18.4879 11.825C18.4879 12.9888 18.5843 15.4916 18.1665 16.5412Z",
                                                                fill: "currentColor"
                                                            })
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "mt-8 lg:w-1/2 lg:mx-6",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "w-full px-8 py-10 mx-auto overflow-hidden bg-white rounded-lg shadow-2xl dark:bg-gray-900 lg:max-w-xl shadow-gray-300/50 dark:shadow-black/50",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                            className: "text-lg font-medium text-gray-700",
                                            children: "What do you want to ask"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                            className: "mt-6",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "flex-1",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                            className: "block mb-2 text-sm text-gray-600 dark:text-gray-200",
                                                            children: "Full Name"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                            type: "text",
                                                            placeholder: "John Doe",
                                                            className: "block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "flex-1 mt-6",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                            className: "block mb-2 text-sm text-gray-600 dark:text-gray-200",
                                                            children: "Email address"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                            type: "email",
                                                            placeholder: "johndoe@example.com",
                                                            className: "block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "w-full mt-6",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                            className: "block mb-2 text-sm text-gray-600 dark:text-gray-200",
                                                            children: "Message"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                                                            className: "block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40",
                                                            placeholder: "Message",
                                                            defaultValue: ""
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                    className: "w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50",
                                                    children: "get in touch"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: "bg-white",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "container px-6 py-10 mx-auto",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "text-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    className: "text-3xl font-semibold text-gray-800 capitalize",
                                    children: "From the blog"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "max-w-lg mx-auto mt-4 text-gray-500",
                                    children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis sint autem nesciunt, laudantium quia tempore delect"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            className: "relative z-10 object-cover w-full rounded-md h-96",
                                            src: "/Samsung_Galaxy_Buds.jpg",
                                            alt: ""
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#",
                                                    className: "font-semibold text-gray-800 hover:underline dark:text-white md:text-xl",
                                                    children: "Samsung Galaxy Buds"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: "mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm",
                                                    children: "Samsung has been making waves in the tech industry with their latest release - the Galaxy Buds."
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: "mt-3 text-sm text-blue-500",
                                                    children: "21 August 2021"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            className: "relative z-10 object-cover w-full rounded-md h-96",
                                            src: "/iphone-14.png",
                                            alt: ""
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#",
                                                    className: "font-semibold text-gray-800 hover:underline dark:text-white md:text-xl",
                                                    children: "iPhone 14 Pro"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: "mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm",
                                                    children: "The release of the iPhone 14 is highly anticipated by Apple fans all around the world. Rumors and leaks have been swirling around about what new features and upgrades we can expect from the upcoming device."
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: "mt-3 text-sm text-blue-500",
                                                    children: "20 October 2022"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
const getStaticProps = async ()=>{
    const categories = await client/* default.fetch */.Z.fetch(queries_categories);
    const onSaleProducts = await client/* default.fetch */.Z.fetch(on_sale_products);
    if (!categories || !onSaleProducts) {
        throw Error("Sorry, something went wrong.");
    }
    return {
        props: {
            categories,
            products: onSaleProducts
        },
        revalidate: 60
    };
};
/* harmony default export */ const pages = (Home);


/***/ }),

/***/ 1097:
/***/ ((module) => {

"use strict";
module.exports = require("@sanity/client");

/***/ }),

/***/ 1791:
/***/ ((module) => {

"use strict";
module.exports = require("@sanity/image-url");

/***/ }),

/***/ 9003:
/***/ ((module) => {

"use strict";
module.exports = require("classnames");

/***/ }),

/***/ 1360:
/***/ ((module) => {

"use strict";
module.exports = require("groq");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,61,105,763,163], () => (__webpack_exec__(7361)));
module.exports = __webpack_exports__;

})();