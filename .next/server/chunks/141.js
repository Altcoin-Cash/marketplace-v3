exports.id = 141;
exports.ids = [141];
exports.modules = {

/***/ 2572:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Container_container__WAGEk",
	"xs": "Container_xs__lmLxX",
	"sm": "Container_sm__NxnH_",
	"md": "Container_md__R9xsg",
	"lg": "Container_lg__ri4gN",
	"xl": "Container_xl__2fgyR"
};


/***/ }),

/***/ 6797:
/***/ ((module) => {

// Exports
module.exports = {
	"skeleton": "Skeleton_skeleton__2C_Ou",
	"pulse": "Skeleton_pulse__kM_6B"
};


/***/ }),

/***/ 5993:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Container)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Container_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2572);
/* harmony import */ var _Container_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Container_module_css__WEBPACK_IMPORTED_MODULE_2__);



/**
 * A container component that sets the max-width of its children, and centers them on the page.
 * @param maxWidth: The max-width of the container. Can be "sm", "md", "lg", "xl", or "2xl".
 */ function Container({ maxWidth , children  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `${(_Container_module_css__WEBPACK_IMPORTED_MODULE_2___default().container)} ${(_Container_module_css__WEBPACK_IMPORTED_MODULE_2___default())[maxWidth]}`,
        children: children
    });
}


/***/ }),

/***/ 6725:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Skeleton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Skeleton_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6797);
/* harmony import */ var _Skeleton_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Skeleton_module_css__WEBPACK_IMPORTED_MODULE_2__);



function Skeleton({ height , width  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        style: {
            width,
            height,
            borderRadius: "inherit"
        },
        className: (_Skeleton_module_css__WEBPACK_IMPORTED_MODULE_2___default().skeleton)
    });
}


/***/ }),

/***/ 5644:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IB": () => (/* binding */ NETWORK),
/* harmony export */   "YJ": () => (/* binding */ MARKETPLACE_ADDRESS),
/* harmony export */   "f2": () => (/* binding */ NFT_COLLECTION_ADDRESS),
/* harmony export */   "t0": () => (/* binding */ ETHERSCAN_URL)
/* harmony export */ });
/* harmony import */ var _thirdweb_dev_chains__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5488);
/* harmony import */ var _thirdweb_dev_chains__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_thirdweb_dev_chains__WEBPACK_IMPORTED_MODULE_0__);
/** Replace the values below with the addresses of your smart contracts. */ // 1. Set up the network your smart contracts are deployed to.
// First, import the chain from the package, then set the NETWORK variable to the chain.

const NETWORK = _thirdweb_dev_chains__WEBPACK_IMPORTED_MODULE_0__.Goerli;
// 2. The address of the marketplace V3 smart contract.
// Deploy your own: https://thirdweb.com/thirdweb.eth/MarketplaceV3
const MARKETPLACE_ADDRESS = "0x9e9cE7082E4B1308Cb2186EfD28ea0ABcFcF4187";
// 3. The address of your NFT collection smart contract.
const NFT_COLLECTION_ADDRESS = "0xe0718e419092311303ecC848152856a8f1a4d9F4";
// (Optional) Set up the URL of where users can view transactions on
// For example, below, we use Mumbai.polygonscan to view transactions on the Mumbai testnet.
const ETHERSCAN_URL = "http://expedition.altcoinchain.org";


/***/ })

};
;