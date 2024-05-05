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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ \"(app-pages-browser)/./node_modules/react-i18next/dist/es/index.js\");\n/* harmony import */ var _context_FlightsContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/context/FlightsContext */ \"(app-pages-browser)/./context/FlightsContext.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst FlyingToLocation = (param)=>{\n    let { setFlyingTo, filter } = param;\n    _s();\n    const [searchValue, setSearchValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [selectedItem, setSelectedItem] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);\n    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)();\n    const [filtered, setFiltered] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(filter);\n    const [hasOptions, setHasOptions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    console.log(\"\\uD83D\\uDE80 ~ FlyingToLocation ~ hasOptions:\", hasOptions);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setFiltered(filter);\n    }, [\n        filter\n    ]);\n    const { getAvailableDestinations, departure } = (0,_context_FlightsContext__WEBPACK_IMPORTED_MODULE_3__.useFlights)();\n    const locationSearchContent = getAvailableDestinations();\n    console.log(\"\\uD83D\\uDE80 ~ FlyingToLocation ~ locationSearchContent:\", locationSearchContent);\n    const filteredOptions = locationSearchContent.filter((item)=>item.name.toLowerCase().includes(searchValue.toLowerCase()));\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(locationSearchContent > 0);\n        if (locationSearchContent > 0) setHasOptions(true);\n    }, [\n        locationSearchContent\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const value = selectedItem && locationSearchContent.some((e)=>e.code === selectedItem.code);\n        if (!departure) setSelectedItem(undefined);\n        if (departure && !value) {\n            setSelectedItem(undefined);\n            setSearchValue(\"\");\n        }\n    }, [\n        selectedItem,\n        departure,\n        locationSearchContent\n    ]);\n    const handleOptionClick = (item)=>{\n        setSearchValue(item.name);\n        setSelectedItem(item);\n        setFlyingTo(item.code);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"searchMenu-loc px-24 lg:py-20 lg:px-0 js-form-dd js-liverSearch\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    \"data-bs-toggle\": \"dropdown\",\n                    \"data-bs-auto-close\": \"true\",\n                    \"data-bs-offset\": \"0,22\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                            className: \"text-15 fw-500 ls-2 lh-16\",\n                            children: t(\"fly-complete-search:flying-to\")\n                        }, void 0, false, {\n                            fileName: \"/Users/frmachado/savia/holiday/components/hero/hero-10/components/FlyingToLocation.jsx\",\n                            lineNumber: 57,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"text-15 text-light-1 ls-2 lh-16\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                autoComplete: \"off\",\n                                type: \"search\",\n                                placeholder: t(\"fly-complete-search:going-to\"),\n                                className: \"js-search js-dd-focus\",\n                                value: searchValue,\n                                onChange: (e)=>setSearchValue(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"/Users/frmachado/savia/holiday/components/hero/hero-10/components/FlyingToLocation.jsx\",\n                                lineNumber: 61,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/frmachado/savia/holiday/components/hero/hero-10/components/FlyingToLocation.jsx\",\n                            lineNumber: 60,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/frmachado/savia/holiday/components/hero/hero-10/components/FlyingToLocation.jsx\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"shadow-2 dropdown-menu min-width-400\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-white px-20 py-20 sm:px-0 sm:py-15 rounded-4\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"y-gap-5 js-results\",\n                            children: hasOptions ? filteredOptions.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option mb-1 \".concat(selectedItem && selectedItem.id === item.id ? \"active\" : \"\"),\n                                    role: \"button\",\n                                    onClick: ()=>handleOptionClick(item),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"d-flex\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"icon-location-2 text-light-1 text-20 pt-4\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/frmachado/savia/holiday/components/hero/hero-10/components/FlyingToLocation.jsx\",\n                                                lineNumber: 88,\n                                                columnNumber: 23\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"ml-10\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"text-15 lh-12 fw-500 js-search-option-target\",\n                                                        children: item.name + \" (\".concat(item.code, \")\")\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/frmachado/savia/holiday/components/hero/hero-10/components/FlyingToLocation.jsx\",\n                                                        lineNumber: 90,\n                                                        columnNumber: 25\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"text-14 lh-12 text-light-1 mt-5\",\n                                                        children: t(\"fly-complete-search:address-\".concat(item.code))\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/frmachado/savia/holiday/components/hero/hero-10/components/FlyingToLocation.jsx\",\n                                                        lineNumber: 93,\n                                                        columnNumber: 25\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/frmachado/savia/holiday/components/hero/hero-10/components/FlyingToLocation.jsx\",\n                                                lineNumber: 89,\n                                                columnNumber: 23\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/frmachado/savia/holiday/components/hero/hero-10/components/FlyingToLocation.jsx\",\n                                        lineNumber: 87,\n                                        columnNumber: 21\n                                    }, undefined)\n                                }, item.id, false, {\n                                    fileName: \"/Users/frmachado/savia/holiday/components/hero/hero-10/components/FlyingToLocation.jsx\",\n                                    lineNumber: 77,\n                                    columnNumber: 19\n                                }, undefined)) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"ml-10 text-15 lh-12 fw-500 js-search-option-target text-red-2\",\n                                children: t(\"fly-complete-search:select-departure\")\n                            }, void 0, false, {\n                                fileName: \"/Users/frmachado/savia/holiday/components/hero/hero-10/components/FlyingToLocation.jsx\",\n                                lineNumber: 101,\n                                columnNumber: 17\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/frmachado/savia/holiday/components/hero/hero-10/components/FlyingToLocation.jsx\",\n                            lineNumber: 74,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/frmachado/savia/holiday/components/hero/hero-10/components/FlyingToLocation.jsx\",\n                        lineNumber: 73,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/frmachado/savia/holiday/components/hero/hero-10/components/FlyingToLocation.jsx\",\n                    lineNumber: 72,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/frmachado/savia/holiday/components/hero/hero-10/components/FlyingToLocation.jsx\",\n            lineNumber: 51,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(FlyingToLocation, \"bEsQGE+xTJHOcbKDbuu7Q1bU714=\", false, function() {\n    return [\n        react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation,\n        _context_FlightsContext__WEBPACK_IMPORTED_MODULE_3__.useFlights\n    ];\n});\n_c = FlyingToLocation;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FlyingToLocation);\nvar _c;\n$RefreshReg$(_c, \"FlyingToLocation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvaGVyby9oZXJvLTEwL2NvbXBvbmVudHMvRmx5aW5nVG9Mb2NhdGlvbi5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFNEM7QUFDRztBQUNPO0FBRXRELE1BQU1JLG1CQUFtQjtRQUFDLEVBQUVDLFdBQVcsRUFBRUMsTUFBTSxFQUFFOztJQUMvQyxNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR1IsK0NBQVFBLENBQUM7SUFDL0MsTUFBTSxDQUFDUyxjQUFjQyxnQkFBZ0IsR0FBR1YsK0NBQVFBLENBQUNXO0lBQ2pELE1BQU0sRUFBRUMsQ0FBQyxFQUFFLEdBQUdWLDZEQUFjQTtJQUM1QixNQUFNLENBQUNXLFVBQVVDLFlBQVksR0FBR2QsK0NBQVFBLENBQUNNO0lBQ3pDLE1BQU0sQ0FBQ1MsWUFBWUMsY0FBYyxHQUFHaEIsK0NBQVFBLENBQUM7SUFDN0NpQixRQUFRQyxHQUFHLENBQUMsaURBQXVDSDtJQUVuRGQsZ0RBQVNBLENBQUM7UUFDUmEsWUFBWVI7SUFDZCxHQUFHO1FBQUNBO0tBQU87SUFDWCxNQUFNLEVBQUVhLHdCQUF3QixFQUFFQyxTQUFTLEVBQUUsR0FBR2pCLG1FQUFVQTtJQUMxRCxNQUFNa0Isd0JBQXdCRjtJQUM5QkYsUUFBUUMsR0FBRyxDQUNULDREQUNBRztJQUdGLE1BQU1DLGtCQUFrQkQsc0JBQXNCZixNQUFNLENBQUMsQ0FBQ2lCLE9BQ3BEQSxLQUFLQyxJQUFJLENBQUNDLFdBQVcsR0FBR0MsUUFBUSxDQUFDbkIsWUFBWWtCLFdBQVc7SUFFMUR4QixnREFBU0EsQ0FBQztRQUNSZ0IsUUFBUUMsR0FBRyxDQUFDRyx3QkFBd0I7UUFDcEMsSUFBSUEsd0JBQXdCLEdBQUdMLGNBQWM7SUFDL0MsR0FBRztRQUFDSztLQUFzQjtJQUUxQnBCLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTTBCLFFBQ0psQixnQkFDQVksc0JBQXNCTyxJQUFJLENBQUMsQ0FBQ0MsSUFBTUEsRUFBRUMsSUFBSSxLQUFLckIsYUFBYXFCLElBQUk7UUFDaEUsSUFBSSxDQUFDVixXQUFXVixnQkFBZ0JDO1FBQ2hDLElBQUlTLGFBQWEsQ0FBQ08sT0FBTztZQUN2QmpCLGdCQUFnQkM7WUFDaEJILGVBQWU7UUFDakI7SUFDRixHQUFHO1FBQUNDO1FBQWNXO1FBQVdDO0tBQXNCO0lBQ25ELE1BQU1VLG9CQUFvQixDQUFDUjtRQUN6QmYsZUFBZWUsS0FBS0MsSUFBSTtRQUN4QmQsZ0JBQWdCYTtRQUNoQmxCLFlBQVlrQixLQUFLTyxJQUFJO0lBQ3ZCO0lBRUEscUJBQ0U7a0JBQ0UsNEVBQUNFO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDRDtvQkFDQ0Usa0JBQWU7b0JBQ2ZDLHNCQUFtQjtvQkFDbkJDLGtCQUFlOztzQ0FFZiw4REFBQ0M7NEJBQUdKLFdBQVU7c0NBQ1hyQixFQUFFOzs7Ozs7c0NBRUwsOERBQUNvQjs0QkFBSUMsV0FBVTtzQ0FDYiw0RUFBQ0s7Z0NBQ0NDLGNBQWE7Z0NBQ2JDLE1BQUs7Z0NBQ0xDLGFBQWE3QixFQUFFO2dDQUNmcUIsV0FBVTtnQ0FDVk4sT0FBT3BCO2dDQUNQbUMsVUFBVSxDQUFDYixJQUFNckIsZUFBZXFCLEVBQUVjLE1BQU0sQ0FBQ2hCLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQUtwRCw4REFBQ0s7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNEO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDVzs0QkFBR1gsV0FBVTtzQ0FDWGxCLGFBQ0NPLGdCQUFnQnVCLEdBQUcsQ0FBQyxDQUFDdEIscUJBQ25CLDhEQUFDdUI7b0NBQ0NiLFdBQVcsOEVBSVYsT0FIQ3hCLGdCQUFnQkEsYUFBYXNDLEVBQUUsS0FBS3hCLEtBQUt3QixFQUFFLEdBQ3ZDLFdBQ0E7b0NBR05DLE1BQUs7b0NBQ0xDLFNBQVMsSUFBTWxCLGtCQUFrQlI7OENBRWpDLDRFQUFDUzt3Q0FBSUMsV0FBVTs7MERBQ2IsOERBQUNEO2dEQUFJQyxXQUFVOzs7Ozs7MERBQ2YsOERBQUNEO2dEQUFJQyxXQUFVOztrRUFDYiw4REFBQ0Q7d0RBQUlDLFdBQVU7a0VBQ1pWLEtBQUtDLElBQUksR0FBRyxLQUFlLE9BQVZELEtBQUtPLElBQUksRUFBQzs7Ozs7O2tFQUU5Qiw4REFBQ0U7d0RBQUlDLFdBQVU7a0VBQ1pyQixFQUFFLCtCQUF5QyxPQUFWVyxLQUFLTyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7bUNBWDVDUCxLQUFLd0IsRUFBRTs7OzsrREFrQmhCLDhEQUFDZjtnQ0FBSUMsV0FBVTswQ0FDWnJCLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTckI7R0F4R01SOztRQUdVRix5REFBY0E7UUFRb0JDLCtEQUFVQTs7O0tBWHREQztBQTBHTiwrREFBZUEsZ0JBQWdCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaGVyby9oZXJvLTEwL2NvbXBvbmVudHMvRmx5aW5nVG9Mb2NhdGlvbi5qc3g/NDRmZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tIFwicmVhY3QtaTE4bmV4dFwiO1xuaW1wb3J0IHsgdXNlRmxpZ2h0cyB9IGZyb20gXCJAL2NvbnRleHQvRmxpZ2h0c0NvbnRleHRcIjtcblxuY29uc3QgRmx5aW5nVG9Mb2NhdGlvbiA9ICh7IHNldEZseWluZ1RvLCBmaWx0ZXIgfSkgPT4ge1xuICBjb25zdCBbc2VhcmNoVmFsdWUsIHNldFNlYXJjaFZhbHVlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbc2VsZWN0ZWRJdGVtLCBzZXRTZWxlY3RlZEl0ZW1dID0gdXNlU3RhdGUodW5kZWZpbmVkKTtcbiAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbigpO1xuICBjb25zdCBbZmlsdGVyZWQsIHNldEZpbHRlcmVkXSA9IHVzZVN0YXRlKGZpbHRlcik7XG4gIGNvbnN0IFtoYXNPcHRpb25zLCBzZXRIYXNPcHRpb25zXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc29sZS5sb2coXCLwn5qAIH4gRmx5aW5nVG9Mb2NhdGlvbiB+IGhhc09wdGlvbnM6XCIsIGhhc09wdGlvbnMpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0RmlsdGVyZWQoZmlsdGVyKTtcbiAgfSwgW2ZpbHRlcl0pO1xuICBjb25zdCB7IGdldEF2YWlsYWJsZURlc3RpbmF0aW9ucywgZGVwYXJ0dXJlIH0gPSB1c2VGbGlnaHRzKCk7XG4gIGNvbnN0IGxvY2F0aW9uU2VhcmNoQ29udGVudCA9IGdldEF2YWlsYWJsZURlc3RpbmF0aW9ucygpO1xuICBjb25zb2xlLmxvZyhcbiAgICBcIvCfmoAgfiBGbHlpbmdUb0xvY2F0aW9uIH4gbG9jYXRpb25TZWFyY2hDb250ZW50OlwiLFxuICAgIGxvY2F0aW9uU2VhcmNoQ29udGVudFxuICApO1xuXG4gIGNvbnN0IGZpbHRlcmVkT3B0aW9ucyA9IGxvY2F0aW9uU2VhcmNoQ29udGVudC5maWx0ZXIoKGl0ZW0pID0+XG4gICAgaXRlbS5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoVmFsdWUudG9Mb3dlckNhc2UoKSlcbiAgKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhsb2NhdGlvblNlYXJjaENvbnRlbnQgPiAwKTtcbiAgICBpZiAobG9jYXRpb25TZWFyY2hDb250ZW50ID4gMCkgc2V0SGFzT3B0aW9ucyh0cnVlKTtcbiAgfSwgW2xvY2F0aW9uU2VhcmNoQ29udGVudF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPVxuICAgICAgc2VsZWN0ZWRJdGVtICYmXG4gICAgICBsb2NhdGlvblNlYXJjaENvbnRlbnQuc29tZSgoZSkgPT4gZS5jb2RlID09PSBzZWxlY3RlZEl0ZW0uY29kZSk7XG4gICAgaWYgKCFkZXBhcnR1cmUpIHNldFNlbGVjdGVkSXRlbSh1bmRlZmluZWQpO1xuICAgIGlmIChkZXBhcnR1cmUgJiYgIXZhbHVlKSB7XG4gICAgICBzZXRTZWxlY3RlZEl0ZW0odW5kZWZpbmVkKTtcbiAgICAgIHNldFNlYXJjaFZhbHVlKFwiXCIpO1xuICAgIH1cbiAgfSwgW3NlbGVjdGVkSXRlbSwgZGVwYXJ0dXJlLCBsb2NhdGlvblNlYXJjaENvbnRlbnRdKTtcbiAgY29uc3QgaGFuZGxlT3B0aW9uQ2xpY2sgPSAoaXRlbSkgPT4ge1xuICAgIHNldFNlYXJjaFZhbHVlKGl0ZW0ubmFtZSk7XG4gICAgc2V0U2VsZWN0ZWRJdGVtKGl0ZW0pO1xuICAgIHNldEZseWluZ1RvKGl0ZW0uY29kZSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2hNZW51LWxvYyBweC0yNCBsZzpweS0yMCBsZzpweC0wIGpzLWZvcm0tZGQganMtbGl2ZXJTZWFyY2hcIj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGRhdGEtYnMtdG9nZ2xlPVwiZHJvcGRvd25cIlxuICAgICAgICAgIGRhdGEtYnMtYXV0by1jbG9zZT1cInRydWVcIlxuICAgICAgICAgIGRhdGEtYnMtb2Zmc2V0PVwiMCwyMlwiXG4gICAgICAgID5cbiAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGV4dC0xNSBmdy01MDAgbHMtMiBsaC0xNlwiPlxuICAgICAgICAgICAge3QoXCJmbHktY29tcGxldGUtc2VhcmNoOmZseWluZy10b1wiKX1cbiAgICAgICAgICA8L2g0PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC0xNSB0ZXh0LWxpZ2h0LTEgbHMtMiBsaC0xNlwiPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgICAgIHR5cGU9XCJzZWFyY2hcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17dChcImZseS1jb21wbGV0ZS1zZWFyY2g6Z29pbmctdG9cIil9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImpzLXNlYXJjaCBqcy1kZC1mb2N1c1wiXG4gICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hWYWx1ZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTZWFyY2hWYWx1ZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYWRvdy0yIGRyb3Bkb3duLW1lbnUgbWluLXdpZHRoLTQwMFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcHgtMjAgcHktMjAgc206cHgtMCBzbTpweS0xNSByb3VuZGVkLTRcIj5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ5LWdhcC01IGpzLXJlc3VsdHNcIj5cbiAgICAgICAgICAgICAge2hhc09wdGlvbnMgPyAoXG4gICAgICAgICAgICAgICAgZmlsdGVyZWRPcHRpb25zLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YC1saW5rIGQtYmxvY2sgY29sLTEyIHRleHQtbGVmdCByb3VuZGVkLTQgcHgtMjAgcHktMTUganMtc2VhcmNoLW9wdGlvbiBtYi0xICR7XG4gICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtICYmIHNlbGVjdGVkSXRlbS5pZCA9PT0gaXRlbS5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBcImFjdGl2ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICAgIGtleT17aXRlbS5pZH1cbiAgICAgICAgICAgICAgICAgICAgcm9sZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZU9wdGlvbkNsaWNrKGl0ZW0pfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbi1sb2NhdGlvbi0yIHRleHQtbGlnaHQtMSB0ZXh0LTIwIHB0LTRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWwtMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC0xNSBsaC0xMiBmdy01MDAganMtc2VhcmNoLW9wdGlvbi10YXJnZXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ubmFtZSArIGAgKCR7aXRlbS5jb2RlfSlgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtMTQgbGgtMTIgdGV4dC1saWdodC0xIG10LTVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge3QoYGZseS1jb21wbGV0ZS1zZWFyY2g6YWRkcmVzcy0ke2l0ZW0uY29kZX1gKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLTEwIHRleHQtMTUgbGgtMTIgZnctNTAwIGpzLXNlYXJjaC1vcHRpb24tdGFyZ2V0IHRleHQtcmVkLTJcIj5cbiAgICAgICAgICAgICAgICAgIHt0KFwiZmx5LWNvbXBsZXRlLXNlYXJjaDpzZWxlY3QtZGVwYXJ0dXJlXCIpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZseWluZ1RvTG9jYXRpb247XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VUcmFuc2xhdGlvbiIsInVzZUZsaWdodHMiLCJGbHlpbmdUb0xvY2F0aW9uIiwic2V0Rmx5aW5nVG8iLCJmaWx0ZXIiLCJzZWFyY2hWYWx1ZSIsInNldFNlYXJjaFZhbHVlIiwic2VsZWN0ZWRJdGVtIiwic2V0U2VsZWN0ZWRJdGVtIiwidW5kZWZpbmVkIiwidCIsImZpbHRlcmVkIiwic2V0RmlsdGVyZWQiLCJoYXNPcHRpb25zIiwic2V0SGFzT3B0aW9ucyIsImNvbnNvbGUiLCJsb2ciLCJnZXRBdmFpbGFibGVEZXN0aW5hdGlvbnMiLCJkZXBhcnR1cmUiLCJsb2NhdGlvblNlYXJjaENvbnRlbnQiLCJmaWx0ZXJlZE9wdGlvbnMiLCJpdGVtIiwibmFtZSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJ2YWx1ZSIsInNvbWUiLCJlIiwiY29kZSIsImhhbmRsZU9wdGlvbkNsaWNrIiwiZGl2IiwiY2xhc3NOYW1lIiwiZGF0YS1icy10b2dnbGUiLCJkYXRhLWJzLWF1dG8tY2xvc2UiLCJkYXRhLWJzLW9mZnNldCIsImg0IiwiaW5wdXQiLCJhdXRvQ29tcGxldGUiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsInRhcmdldCIsInVsIiwibWFwIiwibGkiLCJpZCIsInJvbGUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/hero/hero-10/components/FlyingToLocation.jsx\n"));

/***/ })

});