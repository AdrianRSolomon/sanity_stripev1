"use strict";
exports.id = 105;
exports.ids = [105];
exports.modules = {

/***/ 8289:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1097);
/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sanity_client__WEBPACK_IMPORTED_MODULE_0__);

const client = _sanity_client__WEBPACK_IMPORTED_MODULE_0___default()({
    projectId: "5pcp0w96",
    dataset: "production",
    apiVersion: "2022-10-14",
    token: "skCdLyYGAtpmAJZlgrHr1IZVSRRmpyAptJwNamCSgPCqyXeQwBO8xLeDpDeS9T29Vlcdh9RFCV4GvDqiR4haOZGOeVUvgSv0vER17PARkjE0poWK4IQb4VppEQUYQhaoSwMDsiDP9J0EnwoCeDuyiOcBMwHJUV1AQSUvCSnxIYypBr94SeKb",
    useCdn: false // `false` if you want to ensure fresh data
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (client);


/***/ }),

/***/ 8105:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ urlFor)
/* harmony export */ });
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8289);
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1791);
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_1__);


const builder = _sanity_image_url__WEBPACK_IMPORTED_MODULE_1___default()(_client__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);
function urlFor(source) {
    return builder.image(source);
}


/***/ })

};
;