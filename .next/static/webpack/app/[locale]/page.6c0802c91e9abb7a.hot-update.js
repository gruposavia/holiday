"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/[locale]/page",{

/***/ "(app-pages-browser)/./components/hero/hero-10/components/FlyingToLocation.jsx":
/*!*****************************************************************!*\
  !*** ./components/hero/hero-10/components/FlyingToLocation.jsx ***!
  \*****************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ \"(app-pages-browser)/./node_modules/react-i18next/dist/es/index.js\");\n/* harmony import */ var _context_FlightsContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/context/FlightsContext */ \"(app-pages-browser)/./context/FlightsContext.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst FlyingToLocation = (param)=>{\n    let { setFlyingTo, filter } = param;\n    _s();\n    const [searchValue, setSearchValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [selectedItem, setSelectedItem] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);\n    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)();\n    const [filtered, setFiltered] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(filter);\n    const [hasOptions, setHasOptions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    console.log(\"\\uD83D\\uDE80 ~ FlyingToLocation ~ hasOptions:\", hasOptions);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setFiltered(filter);\n    }, [\n        filter\n    ]);\n    const { getAvailableDestinations, departure } = (0,_context_FlightsContext__WEBPACK_IMPORTED_MODULE_3__.useFlights)();\n    const locationSearchContent = getAvailableDestinations();\n    console.log(\"\\uD83D\\uDE80 ~ FlyingToLocation ~ locationSearchContent:\", locationSearchContent);\n    const filteredOptions = locationSearchContent.filter((item)=>item.name.toLowerCase().includes(searchValue.toLowerCase()));\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log();\n        if (locationSearchContent > 0) setHasOptions(true);\n    }, [\n        locationSearchContent\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const value = selectedItem && locationSearchContent.some((e)=>e.code === selectedItem.code);\n        if (!departure) setSelectedItem(undefined);\n        if (departure && !value) {\n            setSelectedItem(undefined);\n            setSearchValue(\"\");\n        }\n    }, [\n        selectedItem,\n        departure,\n        locationSearchContent\n    ]);\n    const handleOptionClick = (item)=>{\n        setSearchValue(item.name);\n        setSelectedItem(item);\n        setFlyingTo(item.code);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"searchMenu-loc px-24 lg:py-20 lg:px-0 js-form-dd js-liverSearch\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    \"data-bs-toggle\": \"dropdown\",\n                    \"data-bs-auto-close\": \"true\",\n                    \"data-bs-offset\": \"0,22\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                            className: \"text-15 fw-500 ls-2 lh-16\",\n                            children: t(\"fly-complete-search:flying-to\")\n                        }, void 0, false, {\n                            fileName: \"/Users/frmachado/savia/holiday/components/hero/hero-10/components/FlyingToLocation.jsx\",\n                            lineNumber: 57,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"text-15 text-light-1 ls-2 lh-16\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                autoComplete: \"off\",\n                                type: \"search\",\n                                placeholder: t(\"fly-complete-search:going-to\"),\n                                className: \"js-search js-dd-focus\",\n                                value: searchValue,\n                                onChange: (e)=>setSearchValue(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"/Users/frmachado/savia/holiday/components/hero/hero-10/components/FlyingToLocation.jsx\",\n                                lineNumber: 61,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/frmachado/savia/holiday/components/hero/hero-10/components/FlyingToLocation.jsx\",\n                            lineNumber: 60,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/frmachado/savia/holiday/components/hero/hero-10/components/FlyingToLocation.jsx\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"shadow-2 dropdown-menu min-width-400\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-white px-20 py-20 sm:px-0 sm:py-15 rounded-4\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"y-gap-5 js-results\",\n                            children: hasOptions ? filteredOptions.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option mb-1 \".concat(selectedItem && selectedItem.id === item.id ? \"active\" : \"\"),\n                                    role: \"button\",\n                                    onClick: ()=>handleOptionClick(item),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"d-flex\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"icon-location-2 text-light-1 text-20 pt-4\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/frmachado/savia/holiday/components/hero/hero-10/components/FlyingToLocation.jsx\",\n                                                lineNumber: 88,\n                                                columnNumber: 23\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"ml-10\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"text-15 lh-12 fw-500 js-search-option-target\",\n                                                        children: item.name + \" (\".concat(item.code, \")\")\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/frmachado/savia/holiday/components/hero/hero-10/components/FlyingToLocation.jsx\",\n                                                        lineNumber: 90,\n                                                        columnNumber: 25\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"text-14 lh-12 text-light-1 mt-5\",\n                                                        children: t(\"fly-complete-search:address-\".concat(item.code))\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/frmachado/savia/holiday/components/hero/hero-10/components/FlyingToLocation.jsx\",\n                                                        lineNumber: 93,\n                                                        columnNumber: 25\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/frmachado/savia/holiday/components/hero/hero-10/components/FlyingToLocation.jsx\",\n                                                lineNumber: 89,\n                                                columnNumber: 23\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/frmachado/savia/holiday/components/hero/hero-10/components/FlyingToLocation.jsx\",\n                                        lineNumber: 87,\n                                        columnNumber: 21\n                                    }, undefined)\n                                }, item.id, false, {\n                                    fileName: \"/Users/frmachado/savia/holiday/components/hero/hero-10/components/FlyingToLocation.jsx\",\n                                    lineNumber: 77,\n                                    columnNumber: 19\n                                }, undefined)) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"ml-10 text-15 lh-12 fw-500 js-search-option-target text-red-2\",\n                                children: t(\"fly-complete-search:select-departure\")\n                            }, void 0, false, {\n                                fileName: \"/Users/frmachado/savia/holiday/components/hero/hero-10/components/FlyingToLocation.jsx\",\n                                lineNumber: 101,\n                                columnNumber: 17\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/frmachado/savia/holiday/components/hero/hero-10/components/FlyingToLocation.jsx\",\n                            lineNumber: 74,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/frmachado/savia/holiday/components/hero/hero-10/components/FlyingToLocation.jsx\",\n                        lineNumber: 73,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/frmachado/savia/holiday/components/hero/hero-10/components/FlyingToLocation.jsx\",\n                    lineNumber: 72,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/frmachado/savia/holiday/components/hero/hero-10/components/FlyingToLocation.jsx\",\n            lineNumber: 51,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(FlyingToLocation, \"bEsQGE+xTJHOcbKDbuu7Q1bU714=\", false, function() {\n    return [\n        react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation,\n        _context_FlightsContext__WEBPACK_IMPORTED_MODULE_3__.useFlights\n    ];\n});\n_c = FlyingToLocation;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FlyingToLocation);\nvar _c;\n$RefreshReg$(_c, \"FlyingToLocation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvaGVyby9oZXJvLTEwL2NvbXBvbmVudHMvRmx5aW5nVG9Mb2NhdGlvbi5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFNEM7QUFDRztBQUNPO0FBRXRELE1BQU1JLG1CQUFtQjtRQUFDLEVBQUVDLFdBQVcsRUFBRUMsTUFBTSxFQUFFOztJQUMvQyxNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR1IsK0NBQVFBLENBQUM7SUFDL0MsTUFBTSxDQUFDUyxjQUFjQyxnQkFBZ0IsR0FBR1YsK0NBQVFBLENBQUNXO0lBQ2pELE1BQU0sRUFBRUMsQ0FBQyxFQUFFLEdBQUdWLDZEQUFjQTtJQUM1QixNQUFNLENBQUNXLFVBQVVDLFlBQVksR0FBR2QsK0NBQVFBLENBQUNNO0lBQ3pDLE1BQU0sQ0FBQ1MsWUFBWUMsY0FBYyxHQUFHaEIsK0NBQVFBLENBQUM7SUFDN0NpQixRQUFRQyxHQUFHLENBQUMsaURBQXVDSDtJQUVuRGQsZ0RBQVNBLENBQUM7UUFDUmEsWUFBWVI7SUFDZCxHQUFHO1FBQUNBO0tBQU87SUFDWCxNQUFNLEVBQUVhLHdCQUF3QixFQUFFQyxTQUFTLEVBQUUsR0FBR2pCLG1FQUFVQTtJQUMxRCxNQUFNa0Isd0JBQXdCRjtJQUM5QkYsUUFBUUMsR0FBRyxDQUNULDREQUNBRztJQUdGLE1BQU1DLGtCQUFrQkQsc0JBQXNCZixNQUFNLENBQUMsQ0FBQ2lCLE9BQ3BEQSxLQUFLQyxJQUFJLENBQUNDLFdBQVcsR0FBR0MsUUFBUSxDQUFDbkIsWUFBWWtCLFdBQVc7SUFFMUR4QixnREFBU0EsQ0FBQztRQUNSZ0IsUUFBUUMsR0FBRztRQUNYLElBQUlHLHdCQUF3QixHQUFHTCxjQUFjO0lBQy9DLEdBQUc7UUFBQ0s7S0FBc0I7SUFFMUJwQixnREFBU0EsQ0FBQztRQUNSLE1BQU0wQixRQUNKbEIsZ0JBQ0FZLHNCQUFzQk8sSUFBSSxDQUFDLENBQUNDLElBQU1BLEVBQUVDLElBQUksS0FBS3JCLGFBQWFxQixJQUFJO1FBQ2hFLElBQUksQ0FBQ1YsV0FBV1YsZ0JBQWdCQztRQUNoQyxJQUFJUyxhQUFhLENBQUNPLE9BQU87WUFDdkJqQixnQkFBZ0JDO1lBQ2hCSCxlQUFlO1FBQ2pCO0lBQ0YsR0FBRztRQUFDQztRQUFjVztRQUFXQztLQUFzQjtJQUNuRCxNQUFNVSxvQkFBb0IsQ0FBQ1I7UUFDekJmLGVBQWVlLEtBQUtDLElBQUk7UUFDeEJkLGdCQUFnQmE7UUFDaEJsQixZQUFZa0IsS0FBS08sSUFBSTtJQUN2QjtJQUVBLHFCQUNFO2tCQUNFLDRFQUFDRTtZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ0Q7b0JBQ0NFLGtCQUFlO29CQUNmQyxzQkFBbUI7b0JBQ25CQyxrQkFBZTs7c0NBRWYsOERBQUNDOzRCQUFHSixXQUFVO3NDQUNYckIsRUFBRTs7Ozs7O3NDQUVMLDhEQUFDb0I7NEJBQUlDLFdBQVU7c0NBQ2IsNEVBQUNLO2dDQUNDQyxjQUFhO2dDQUNiQyxNQUFLO2dDQUNMQyxhQUFhN0IsRUFBRTtnQ0FDZnFCLFdBQVU7Z0NBQ1ZOLE9BQU9wQjtnQ0FDUG1DLFVBQVUsQ0FBQ2IsSUFBTXJCLGVBQWVxQixFQUFFYyxNQUFNLENBQUNoQixLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFLcEQsOERBQUNLO29CQUFJQyxXQUFVOzhCQUNiLDRFQUFDRDt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQ1c7NEJBQUdYLFdBQVU7c0NBQ1hsQixhQUNDTyxnQkFBZ0J1QixHQUFHLENBQUMsQ0FBQ3RCLHFCQUNuQiw4REFBQ3VCO29DQUNDYixXQUFXLDhFQUlWLE9BSEN4QixnQkFBZ0JBLGFBQWFzQyxFQUFFLEtBQUt4QixLQUFLd0IsRUFBRSxHQUN2QyxXQUNBO29DQUdOQyxNQUFLO29DQUNMQyxTQUFTLElBQU1sQixrQkFBa0JSOzhDQUVqQyw0RUFBQ1M7d0NBQUlDLFdBQVU7OzBEQUNiLDhEQUFDRDtnREFBSUMsV0FBVTs7Ozs7OzBEQUNmLDhEQUFDRDtnREFBSUMsV0FBVTs7a0VBQ2IsOERBQUNEO3dEQUFJQyxXQUFVO2tFQUNaVixLQUFLQyxJQUFJLEdBQUcsS0FBZSxPQUFWRCxLQUFLTyxJQUFJLEVBQUM7Ozs7OztrRUFFOUIsOERBQUNFO3dEQUFJQyxXQUFVO2tFQUNackIsRUFBRSwrQkFBeUMsT0FBVlcsS0FBS08sSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7O21DQVg1Q1AsS0FBS3dCLEVBQUU7Ozs7K0RBa0JoQiw4REFBQ2Y7Z0NBQUlDLFdBQVU7MENBQ1pyQixFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU3JCO0dBeEdNUjs7UUFHVUYseURBQWNBO1FBUW9CQywrREFBVUE7OztLQVh0REM7QUEwR04sK0RBQWVBLGdCQUFnQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2hlcm8vaGVyby0xMC9jb21wb25lbnRzL0ZseWluZ1RvTG9jYXRpb24uanN4PzQ0ZmUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSBcInJlYWN0LWkxOG5leHRcIjtcbmltcG9ydCB7IHVzZUZsaWdodHMgfSBmcm9tIFwiQC9jb250ZXh0L0ZsaWdodHNDb250ZXh0XCI7XG5cbmNvbnN0IEZseWluZ1RvTG9jYXRpb24gPSAoeyBzZXRGbHlpbmdUbywgZmlsdGVyIH0pID0+IHtcbiAgY29uc3QgW3NlYXJjaFZhbHVlLCBzZXRTZWFyY2hWYWx1ZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3NlbGVjdGVkSXRlbSwgc2V0U2VsZWN0ZWRJdGVtXSA9IHVzZVN0YXRlKHVuZGVmaW5lZCk7XG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oKTtcbiAgY29uc3QgW2ZpbHRlcmVkLCBzZXRGaWx0ZXJlZF0gPSB1c2VTdGF0ZShmaWx0ZXIpO1xuICBjb25zdCBbaGFzT3B0aW9ucywgc2V0SGFzT3B0aW9uc10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnNvbGUubG9nKFwi8J+agCB+IEZseWluZ1RvTG9jYXRpb24gfiBoYXNPcHRpb25zOlwiLCBoYXNPcHRpb25zKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldEZpbHRlcmVkKGZpbHRlcik7XG4gIH0sIFtmaWx0ZXJdKTtcbiAgY29uc3QgeyBnZXRBdmFpbGFibGVEZXN0aW5hdGlvbnMsIGRlcGFydHVyZSB9ID0gdXNlRmxpZ2h0cygpO1xuICBjb25zdCBsb2NhdGlvblNlYXJjaENvbnRlbnQgPSBnZXRBdmFpbGFibGVEZXN0aW5hdGlvbnMoKTtcbiAgY29uc29sZS5sb2coXG4gICAgXCLwn5qAIH4gRmx5aW5nVG9Mb2NhdGlvbiB+IGxvY2F0aW9uU2VhcmNoQ29udGVudDpcIixcbiAgICBsb2NhdGlvblNlYXJjaENvbnRlbnRcbiAgKTtcblxuICBjb25zdCBmaWx0ZXJlZE9wdGlvbnMgPSBsb2NhdGlvblNlYXJjaENvbnRlbnQuZmlsdGVyKChpdGVtKSA9PlxuICAgIGl0ZW0ubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFZhbHVlLnRvTG93ZXJDYXNlKCkpXG4gICk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2coKVxuICAgIGlmIChsb2NhdGlvblNlYXJjaENvbnRlbnQgPiAwKSBzZXRIYXNPcHRpb25zKHRydWUpO1xuICB9LCBbbG9jYXRpb25TZWFyY2hDb250ZW50XSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9XG4gICAgICBzZWxlY3RlZEl0ZW0gJiZcbiAgICAgIGxvY2F0aW9uU2VhcmNoQ29udGVudC5zb21lKChlKSA9PiBlLmNvZGUgPT09IHNlbGVjdGVkSXRlbS5jb2RlKTtcbiAgICBpZiAoIWRlcGFydHVyZSkgc2V0U2VsZWN0ZWRJdGVtKHVuZGVmaW5lZCk7XG4gICAgaWYgKGRlcGFydHVyZSAmJiAhdmFsdWUpIHtcbiAgICAgIHNldFNlbGVjdGVkSXRlbSh1bmRlZmluZWQpO1xuICAgICAgc2V0U2VhcmNoVmFsdWUoXCJcIik7XG4gICAgfVxuICB9LCBbc2VsZWN0ZWRJdGVtLCBkZXBhcnR1cmUsIGxvY2F0aW9uU2VhcmNoQ29udGVudF0pO1xuICBjb25zdCBoYW5kbGVPcHRpb25DbGljayA9IChpdGVtKSA9PiB7XG4gICAgc2V0U2VhcmNoVmFsdWUoaXRlbS5uYW1lKTtcbiAgICBzZXRTZWxlY3RlZEl0ZW0oaXRlbSk7XG4gICAgc2V0Rmx5aW5nVG8oaXRlbS5jb2RlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaE1lbnUtbG9jIHB4LTI0IGxnOnB5LTIwIGxnOnB4LTAganMtZm9ybS1kZCBqcy1saXZlclNlYXJjaFwiPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgZGF0YS1icy10b2dnbGU9XCJkcm9wZG93blwiXG4gICAgICAgICAgZGF0YS1icy1hdXRvLWNsb3NlPVwidHJ1ZVwiXG4gICAgICAgICAgZGF0YS1icy1vZmZzZXQ9XCIwLDIyXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LTE1IGZ3LTUwMCBscy0yIGxoLTE2XCI+XG4gICAgICAgICAgICB7dChcImZseS1jb21wbGV0ZS1zZWFyY2g6Zmx5aW5nLXRvXCIpfVxuICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LTE1IHRleHQtbGlnaHQtMSBscy0yIGxoLTE2XCI+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAgICAgdHlwZT1cInNlYXJjaFwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt0KFwiZmx5LWNvbXBsZXRlLXNlYXJjaDpnb2luZy10b1wiKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwianMtc2VhcmNoIGpzLWRkLWZvY3VzXCJcbiAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaFZhbHVlfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNlYXJjaFZhbHVlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhZG93LTIgZHJvcGRvd24tbWVudSBtaW4td2lkdGgtNDAwXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBweC0yMCBweS0yMCBzbTpweC0wIHNtOnB5LTE1IHJvdW5kZWQtNFwiPlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInktZ2FwLTUganMtcmVzdWx0c1wiPlxuICAgICAgICAgICAgICB7aGFzT3B0aW9ucyA/IChcbiAgICAgICAgICAgICAgICBmaWx0ZXJlZE9wdGlvbnMubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgLWxpbmsgZC1ibG9jayBjb2wtMTIgdGV4dC1sZWZ0IHJvdW5kZWQtNCBweC0yMCBweS0xNSBqcy1zZWFyY2gtb3B0aW9uIG1iLTEgJHtcbiAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW0gJiYgc2VsZWN0ZWRJdGVtLmlkID09PSBpdGVtLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFwiYWN0aXZlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxuICAgICAgICAgICAgICAgICAgICByb2xlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlT3B0aW9uQ2xpY2soaXRlbSl9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uLWxvY2F0aW9uLTIgdGV4dC1saWdodC0xIHRleHQtMjAgcHQtNFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC0xMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LTE1IGxoLTEyIGZ3LTUwMCBqcy1zZWFyY2gtb3B0aW9uLXRhcmdldFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5uYW1lICsgYCAoJHtpdGVtLmNvZGV9KWB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC0xNCBsaC0xMiB0ZXh0LWxpZ2h0LTEgbXQtNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7dChgZmx5LWNvbXBsZXRlLXNlYXJjaDphZGRyZXNzLSR7aXRlbS5jb2RlfWApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWwtMTAgdGV4dC0xNSBsaC0xMiBmdy01MDAganMtc2VhcmNoLW9wdGlvbi10YXJnZXQgdGV4dC1yZWQtMlwiPlxuICAgICAgICAgICAgICAgICAge3QoXCJmbHktY29tcGxldGUtc2VhcmNoOnNlbGVjdC1kZXBhcnR1cmVcIil9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRmx5aW5nVG9Mb2NhdGlvbjtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVRyYW5zbGF0aW9uIiwidXNlRmxpZ2h0cyIsIkZseWluZ1RvTG9jYXRpb24iLCJzZXRGbHlpbmdUbyIsImZpbHRlciIsInNlYXJjaFZhbHVlIiwic2V0U2VhcmNoVmFsdWUiLCJzZWxlY3RlZEl0ZW0iLCJzZXRTZWxlY3RlZEl0ZW0iLCJ1bmRlZmluZWQiLCJ0IiwiZmlsdGVyZWQiLCJzZXRGaWx0ZXJlZCIsImhhc09wdGlvbnMiLCJzZXRIYXNPcHRpb25zIiwiY29uc29sZSIsImxvZyIsImdldEF2YWlsYWJsZURlc3RpbmF0aW9ucyIsImRlcGFydHVyZSIsImxvY2F0aW9uU2VhcmNoQ29udGVudCIsImZpbHRlcmVkT3B0aW9ucyIsIml0ZW0iLCJuYW1lIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsInZhbHVlIiwic29tZSIsImUiLCJjb2RlIiwiaGFuZGxlT3B0aW9uQ2xpY2siLCJkaXYiLCJjbGFzc05hbWUiLCJkYXRhLWJzLXRvZ2dsZSIsImRhdGEtYnMtYXV0by1jbG9zZSIsImRhdGEtYnMtb2Zmc2V0IiwiaDQiLCJpbnB1dCIsImF1dG9Db21wbGV0ZSIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwidWwiLCJtYXAiLCJsaSIsImlkIiwicm9sZSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/hero/hero-10/components/FlyingToLocation.jsx\n"));

/***/ })

});