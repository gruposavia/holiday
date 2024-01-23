"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/[locale]/(others)/terms/page",{

/***/ "(app-pages-browser)/./components/common/TermsContent.jsx":
/*!********************************************!*\
  !*** ./components/common/TermsContent.jsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-tabs */ \"(app-pages-browser)/./node_modules/react-tabs/esm/index.js\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-markdown */ \"(app-pages-browser)/./node_modules/react-markdown/lib/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst TermsContent = (param)=>{\n    let { locale } = param;\n    _s();\n    const [privacyTerms, setPrivacyTerms] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const getContent = async ()=>{\n        const fetchPrivacyTerms = async ()=>{\n            try {\n                const response = await fetch(\"/api/getPrivacyTerms?locale=\".concat(locale));\n                const data = await response.json();\n                setPrivacyTerms(data.content);\n            } catch (error) {\n                console.error(\"Error fetching privacy terms:\", error);\n            }\n        };\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_tabs__WEBPACK_IMPORTED_MODULE_2__.Tabs, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"row y-gap-30\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"col-lg-3\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"px-30 py-30 rounded-4 border-light\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_tabs__WEBPACK_IMPORTED_MODULE_2__.TabList, {\n                            className: \"tabs__controls row y-gap-10 js-tabs-controls\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_tabs__WEBPACK_IMPORTED_MODULE_2__.Tab, {\n                                    className: \"col-12 tabs__button js-tabs-button\",\n                                    children: \"General Terms of Use\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/frmachado/savia/holiday/components/common/TermsContent.jsx\",\n                                    lineNumber: 27,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_tabs__WEBPACK_IMPORTED_MODULE_2__.Tab, {\n                                    className: \"col-12 tabs__button js-tabs-button\",\n                                    children: \"Privacy policy\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/frmachado/savia/holiday/components/common/TermsContent.jsx\",\n                                    lineNumber: 30,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/frmachado/savia/holiday/components/common/TermsContent.jsx\",\n                            lineNumber: 26,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/frmachado/savia/holiday/components/common/TermsContent.jsx\",\n                        lineNumber: 25,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/frmachado/savia/holiday/components/common/TermsContent.jsx\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"col-lg-9\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_tabs__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"tabs__content js-tabs-content\",\n                                \"data-aos\": \"fade\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"text-30 fw-600 mb-15\",\n                                    children: \"General Terms of Use\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/frmachado/savia/holiday/components/common/TermsContent.jsx\",\n                                    lineNumber: 41,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/frmachado/savia/holiday/components/common/TermsContent.jsx\",\n                                lineNumber: 40,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/frmachado/savia/holiday/components/common/TermsContent.jsx\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_tabs__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"tabs__content js-tabs-content\",\n                                \"data-aos\": \"fade\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_markdown__WEBPACK_IMPORTED_MODULE_3__.Markdown, {}, void 0, false, {\n                                    fileName: \"/Users/frmachado/savia/holiday/components/common/TermsContent.jsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/frmachado/savia/holiday/components/common/TermsContent.jsx\",\n                                lineNumber: 48,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/frmachado/savia/holiday/components/common/TermsContent.jsx\",\n                            lineNumber: 47,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/frmachado/savia/holiday/components/common/TermsContent.jsx\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/frmachado/savia/holiday/components/common/TermsContent.jsx\",\n            lineNumber: 23,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/frmachado/savia/holiday/components/common/TermsContent.jsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, undefined);\n};\n_s(TermsContent, \"QqjYLHwPaDtyOP7V0mijynrmCnY=\");\n_c = TermsContent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TermsContent);\nvar _c;\n$RefreshReg$(_c, \"TermsContent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvY29tbW9uL1Rlcm1zQ29udGVudC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFbUQ7QUFDTztBQUVmO0FBRTNDLE1BQU1RLGVBQWU7UUFBQyxFQUFDQyxNQUFNLEVBQUM7O0lBQzVCLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdULCtDQUFRQSxDQUFDO0lBQ2pELE1BQU1VLGFBQWE7UUFDakIsTUFBTUMsb0JBQW9CO1lBQ3hCLElBQUk7Z0JBQ0YsTUFBTUMsV0FBVyxNQUFNQyxNQUFNLCtCQUFzQyxPQUFQTjtnQkFDNUQsTUFBTU8sT0FBTyxNQUFNRixTQUFTRyxJQUFJO2dCQUNoQ04sZ0JBQWdCSyxLQUFLRSxPQUFPO1lBQzlCLEVBQUUsT0FBT0MsT0FBTztnQkFDZEMsUUFBUUQsS0FBSyxDQUFDLGlDQUFpQ0E7WUFDakQ7UUFDRjtJQUNGO0lBQ0EscUJBQ0UsOERBQUNmLDRDQUFJQTtrQkFDSCw0RUFBQ2lCO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDRDtvQkFBSUMsV0FBVTs4QkFDYiw0RUFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUNqQiwrQ0FBT0E7NEJBQUNpQixXQUFVOzs4Q0FDakIsOERBQUNuQiwyQ0FBR0E7b0NBQUNtQixXQUFVOzhDQUFxQzs7Ozs7OzhDQUdwRCw4REFBQ25CLDJDQUFHQTtvQ0FBQ21CLFdBQVU7OENBQXFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQVExRCw4REFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDaEIsZ0RBQVFBO3NDQUNQLDRFQUFDZTtnQ0FBSUMsV0FBVTtnQ0FBZ0NDLFlBQVM7MENBQ3RELDRFQUFDQztvQ0FBR0YsV0FBVTs4Q0FBdUI7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBTXpDLDhEQUFDaEIsZ0RBQVFBO3NDQUNQLDRFQUFDZTtnQ0FBSUMsV0FBVTtnQ0FBZ0NDLFlBQVM7MENBRXRELDRFQUFDaEIsb0RBQWFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVU1QjtHQXBETUM7S0FBQUE7QUFzRE4sK0RBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tb24vVGVybXNDb250ZW50LmpzeD85NzhhIl0sInNvdXJjZXNDb250ZW50IjpbIlxuJ3VzZSBjbGllbnQnXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFRhYiwgVGFicywgVGFiTGlzdCwgVGFiUGFuZWwgfSBmcm9tIFwicmVhY3QtdGFic1wiO1xuXG5pbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tICdyZWFjdC1tYXJrZG93bic7XG5cbmNvbnN0IFRlcm1zQ29udGVudCA9ICh7bG9jYWxlfSkgPT4ge1xuICBjb25zdCBbcHJpdmFjeVRlcm1zLCBzZXRQcml2YWN5VGVybXNdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBnZXRDb250ZW50ID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoUHJpdmFjeVRlcm1zID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgL2FwaS9nZXRQcml2YWN5VGVybXM/bG9jYWxlPSR7bG9jYWxlfWApO1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBzZXRQcml2YWN5VGVybXMoZGF0YS5jb250ZW50KTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHByaXZhY3kgdGVybXM6JywgZXJyb3IpO1xuICAgICAgfVxuICAgIH07XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8VGFicz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHktZ2FwLTMwXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTNcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTMwIHB5LTMwIHJvdW5kZWQtNCBib3JkZXItbGlnaHRcIj5cbiAgICAgICAgICAgIDxUYWJMaXN0IGNsYXNzTmFtZT1cInRhYnNfX2NvbnRyb2xzIHJvdyB5LWdhcC0xMCBqcy10YWJzLWNvbnRyb2xzXCI+XG4gICAgICAgICAgICAgIDxUYWIgY2xhc3NOYW1lPVwiY29sLTEyIHRhYnNfX2J1dHRvbiBqcy10YWJzLWJ1dHRvblwiPlxuICAgICAgICAgICAgICAgIEdlbmVyYWwgVGVybXMgb2YgVXNlXG4gICAgICAgICAgICAgIDwvVGFiPlxuICAgICAgICAgICAgICA8VGFiIGNsYXNzTmFtZT1cImNvbC0xMiB0YWJzX19idXR0b24ganMtdGFicy1idXR0b25cIj5cbiAgICAgICAgICAgICAgICBQcml2YWN5IHBvbGljeVxuICAgICAgICAgICAgICA8L1RhYj5cbiAgICAgICAgICAgIDwvVGFiTGlzdD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHsvKiBFbmQgLmNvbC1sZy0zICovfVxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTlcIj5cbiAgICAgICAgICA8VGFiUGFuZWw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYnNfX2NvbnRlbnQganMtdGFicy1jb250ZW50XCIgZGF0YS1hb3M9XCJmYWRlXCI+XG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTMwIGZ3LTYwMCBtYi0xNVwiPkdlbmVyYWwgVGVybXMgb2YgVXNlPC9oMT5cbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9UYWJQYW5lbD5cbiAgICAgICAgICB7LyogRW5kICBHZW5lcmFsIFRlcm1zIG9mIFVzZSAqL31cblxuICAgICAgICAgIDxUYWJQYW5lbD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFic19fY29udGVudCBqcy10YWJzLWNvbnRlbnRcIiBkYXRhLWFvcz1cImZhZGVcIj5cblxuICAgICAgICAgICAgICA8UmVhY3RNYXJrZG93bj57fTwvUmVhY3RNYXJrZG93bj5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9UYWJQYW5lbD5cbiAgICAgICAgICB7LyogRW5kICBQcml2YWN5IHBvbGljeSAqL31cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHsvKiBFbmQgY29sLWxnLTkgKi99XG4gICAgICA8L2Rpdj5cbiAgICA8L1RhYnM+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUZXJtc0NvbnRlbnQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlRhYiIsIlRhYnMiLCJUYWJMaXN0IiwiVGFiUGFuZWwiLCJSZWFjdE1hcmtkb3duIiwiVGVybXNDb250ZW50IiwibG9jYWxlIiwicHJpdmFjeVRlcm1zIiwic2V0UHJpdmFjeVRlcm1zIiwiZ2V0Q29udGVudCIsImZldGNoUHJpdmFjeVRlcm1zIiwicmVzcG9uc2UiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwiY29udGVudCIsImVycm9yIiwiY29uc29sZSIsImRpdiIsImNsYXNzTmFtZSIsImRhdGEtYW9zIiwiaDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/common/TermsContent.jsx\n"));

/***/ })

});