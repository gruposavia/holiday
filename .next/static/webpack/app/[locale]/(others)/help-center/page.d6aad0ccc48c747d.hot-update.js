"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/[locale]/(others)/help-center/page",{

/***/ "(app-pages-browser)/./components/header/ContactInfo.jsx":
/*!*******************************************!*\
  !*** ./components/header/ContactInfo.jsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n\nconst ContactInfo = (param)=>{\n    let { t } = param;\n    const contactContent = [\n        {\n            id: 1,\n            title: t(\"footer:contact-phone\"),\n            action: \"tel:(+1)786-673-0640\",\n            text: \"(+1)786-673-0640\"\n        },\n        {\n            id: 2,\n            title: \"t('footer:need-assistance')\",\n            action: \"mailto:xyz@abc.com\",\n            text: \"hi@gotrip.com\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: contactContent.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-20\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-14\",\n                        children: item.title\n                    }, void 0, false, {\n                        fileName: \"/Users/frmachado/savia/holiday/components/header/ContactInfo.jsx\",\n                        lineNumber: 20,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: item.action,\n                        className: \"text-18 fw-500 text-dark-1 mt-5\",\n                        children: item.text\n                    }, void 0, false, {\n                        fileName: \"/Users/frmachado/savia/holiday/components/header/ContactInfo.jsx\",\n                        lineNumber: 21,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, item.id, true, {\n                fileName: \"/Users/frmachado/savia/holiday/components/header/ContactInfo.jsx\",\n                lineNumber: 19,\n                columnNumber: 9\n            }, undefined))\n    }, void 0, false);\n};\n_c = ContactInfo;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContactInfo);\nvar _c;\n$RefreshReg$(_c, \"ContactInfo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvaGVhZGVyL0NvbnRhY3RJbmZvLmpzeCIsIm1hcHBpbmdzIjoiOzs7QUFBQSxNQUFNQSxjQUFjO1FBQUMsRUFBQ0MsQ0FBQyxFQUFDO0lBQ3RCLE1BQU1DLGlCQUFpQjtRQUNyQjtZQUNFQyxJQUFJO1lBQ0pDLE9BQU9ILEVBQUU7WUFDVEksUUFBUTtZQUNSQyxNQUFNO1FBQ1I7UUFDQTtZQUNFSCxJQUFJO1lBQ0pDLE9BQU87WUFDUEMsUUFBUTtZQUNSQyxNQUFNO1FBQ1I7S0FDRDtJQUNELHFCQUNFO2tCQUNHSixlQUFlSyxHQUFHLENBQUMsQ0FBQ0MscUJBQ25CLDhEQUFDQztnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNEO3dCQUFJQyxXQUFXO2tDQUFZRixLQUFLSixLQUFLOzs7Ozs7a0NBQ3RDLDhEQUFDTzt3QkFBRUMsTUFBTUosS0FBS0gsTUFBTTt3QkFBRUssV0FBVTtrQ0FDN0JGLEtBQUtGLElBQUk7Ozs7Ozs7ZUFIY0UsS0FBS0wsRUFBRTs7Ozs7O0FBUzNDO0tBM0JNSDtBQTZCTiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2hlYWRlci9Db250YWN0SW5mby5qc3g/YWMxMSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBDb250YWN0SW5mbyA9ICh7dH0pID0+IHtcbiAgY29uc3QgY29udGFjdENvbnRlbnQgPSBbXG4gICAge1xuICAgICAgaWQ6IDEsXG4gICAgICB0aXRsZTogdCgnZm9vdGVyOmNvbnRhY3QtcGhvbmUnKSxcbiAgICAgIGFjdGlvbjogXCJ0ZWw6KCsxKTc4Ni02NzMtMDY0MFwiLFxuICAgICAgdGV4dDogXCIoKzEpNzg2LTY3My0wNjQwXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogMixcbiAgICAgIHRpdGxlOiBcInQoJ2Zvb3RlcjpuZWVkLWFzc2lzdGFuY2UnKVwiLFxuICAgICAgYWN0aW9uOiBcIm1haWx0bzp4eXpAYWJjLmNvbVwiLFxuICAgICAgdGV4dDogXCJoaUBnb3RyaXAuY29tXCIsXG4gICAgfSxcbiAgXTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge2NvbnRhY3RDb250ZW50Lm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTIwXCIga2V5PXtpdGVtLmlkfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJ0ZXh0LTE0XCJ9PntpdGVtLnRpdGxlfTwvZGl2PlxuICAgICAgICAgIDxhIGhyZWY9e2l0ZW0uYWN0aW9ufSBjbGFzc05hbWU9XCJ0ZXh0LTE4IGZ3LTUwMCB0ZXh0LWRhcmstMSBtdC01XCI+XG4gICAgICAgICAgICB7aXRlbS50ZXh0fVxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICApKX1cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhY3RJbmZvO1xuIl0sIm5hbWVzIjpbIkNvbnRhY3RJbmZvIiwidCIsImNvbnRhY3RDb250ZW50IiwiaWQiLCJ0aXRsZSIsImFjdGlvbiIsInRleHQiLCJtYXAiLCJpdGVtIiwiZGl2IiwiY2xhc3NOYW1lIiwiYSIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/header/ContactInfo.jsx\n"));

/***/ })

});