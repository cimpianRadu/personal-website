webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/TechStack/TechStack.js":
false,

/***/ "./components/TechStackCardAnimated/TechStackCardAnimated.js":
false,

/***/ "./components/TechStackCardAnimated/TechStackCardAnimated.module.css":
false,

/***/ "./components/index.js":
/*!*****************************!*\
  !*** ./components/index.js ***!
  \*****************************/
/*! exports provided: Navigation, Header, Footer, SwithWithIcons, Carousel, BulletItem, TimeInterval, BottomExpandableCard, TimeLine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Navigation_Navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navigation/Navigation */ \"./components/Navigation/Navigation.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Navigation\", function() { return _Navigation_Navigation__WEBPACK_IMPORTED_MODULE_0__[\"Navigation\"]; });\n\n/* harmony import */ var _Header_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header/Header */ \"./components/Header/Header.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Header\", function() { return _Header_Header__WEBPACK_IMPORTED_MODULE_1__[\"Header\"]; });\n\n/* harmony import */ var _Footer_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer/Footer */ \"./components/Footer/Footer.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Footer\", function() { return _Footer_Footer__WEBPACK_IMPORTED_MODULE_2__[\"Footer\"]; });\n\n/* harmony import */ var _SwitchWithIcons_SwitchWithIcons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SwitchWithIcons/SwitchWithIcons */ \"./components/SwitchWithIcons/SwitchWithIcons.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"SwithWithIcons\", function() { return _SwitchWithIcons_SwitchWithIcons__WEBPACK_IMPORTED_MODULE_3__[\"SwithWithIcons\"]; });\n\n/* harmony import */ var _Carousel_Carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Carousel/Carousel */ \"./components/Carousel/Carousel.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Carousel\", function() { return _Carousel_Carousel__WEBPACK_IMPORTED_MODULE_4__[\"Carousel\"]; });\n\n/* harmony import */ var _BulletItem_BulletItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BulletItem/BulletItem */ \"./components/BulletItem/BulletItem.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"BulletItem\", function() { return _BulletItem_BulletItem__WEBPACK_IMPORTED_MODULE_5__[\"BulletItem\"]; });\n\n/* harmony import */ var _TimeInterval_TimeInterval__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TimeInterval/TimeInterval */ \"./components/TimeInterval/TimeInterval.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"TimeInterval\", function() { return _TimeInterval_TimeInterval__WEBPACK_IMPORTED_MODULE_6__[\"TimeInterval\"]; });\n\n/* harmony import */ var _BottomExpandableCard_BottomExpandableCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./BottomExpandableCard/BottomExpandableCard */ \"./components/BottomExpandableCard/BottomExpandableCard.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"BottomExpandableCard\", function() { return _BottomExpandableCard_BottomExpandableCard__WEBPACK_IMPORTED_MODULE_7__[\"BottomExpandableCard\"]; });\n\n/* harmony import */ var _TimeLine_TimeLine__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./TimeLine/TimeLine */ \"./components/TimeLine/TimeLine.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"TimeLine\", function() { return _TimeLine_TimeLine__WEBPACK_IMPORTED_MODULE_8__[\"TimeLine\"]; });\n\n\n\n\n\n\n\n\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pbmRleC5qcz83YmU3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gXCIuL05hdmlnYXRpb24vTmF2aWdhdGlvblwiO1xuZXhwb3J0ICogZnJvbSBcIi4vSGVhZGVyL0hlYWRlclwiO1xuZXhwb3J0ICogZnJvbSBcIi4vRm9vdGVyL0Zvb3RlclwiO1xuZXhwb3J0ICogZnJvbSBcIi4vU3dpdGNoV2l0aEljb25zL1N3aXRjaFdpdGhJY29uc1wiO1xuZXhwb3J0ICogZnJvbSBcIi4vQ2Fyb3VzZWwvQ2Fyb3VzZWxcIjtcbmV4cG9ydCAqIGZyb20gXCIuL0J1bGxldEl0ZW0vQnVsbGV0SXRlbVwiO1xuZXhwb3J0ICogZnJvbSBcIi4vVGltZUludGVydmFsL1RpbWVJbnRlcnZhbFwiO1xuZXhwb3J0ICogZnJvbSBcIi4vQm90dG9tRXhwYW5kYWJsZUNhcmQvQm90dG9tRXhwYW5kYWJsZUNhcmRcIjtcbmV4cG9ydCAqIGZyb20gXCIuL1RpbWVMaW5lL1RpbWVMaW5lXCI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/index.js\n");

/***/ }),

/***/ "./node_modules/@react-spring/animated/index.js":
false,

/***/ "./node_modules/@react-spring/core/index.js":
false,

/***/ "./node_modules/@react-spring/shared/index.js":
false,

/***/ "./node_modules/@react-spring/types/animated.js":
false,

/***/ "./node_modules/@react-spring/types/interpolation.js":
false,

/***/ "./node_modules/@react-spring/web/index.js":
false,

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/TechStackCardAnimated/TechStackCardAnimated.module.css":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
false,

/***/ "./node_modules/rafz/dist/raf.mjs":
false,

/***/ "./node_modules/react-spring/web.js":
false

})