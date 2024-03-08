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

/***/ "(app-pages-browser)/./context/NotificationContext.jsx":
/*!*****************************************!*\
  !*** ./context/NotificationContext.jsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   NotificationProvider: function() { return /* binding */ NotificationProvider; },\n/* harmony export */   useNotification: function() { return /* binding */ useNotification; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var sonner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sonner */ \"(app-pages-browser)/./node_modules/sonner/dist/index.mjs\");\n/* harmony import */ var Faker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Faker */ \"(app-pages-browser)/./node_modules/Faker/index.js\");\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ \"(app-pages-browser)/./node_modules/react-i18next/dist/es/index.js\");\n/* harmony import */ var _utils_getRandomRoutes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/getRandomRoutes */ \"(app-pages-browser)/./utils/getRandomRoutes.js\");\n/* __next_internal_client_entry_do_not_use__ NotificationProvider,useNotification auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\n\nconst NotificationContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst NotificationProvider = (param)=>{\n    let { children } = param;\n    _s();\n    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)();\n    const [notification, setNotification] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const hideNotification = ()=>{\n        setNotification(false);\n    };\n    const routes = (0,_utils_getRandomRoutes__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n    const showNotification = (messageType)=>{\n        const passengerName = \"\".concat(Faker__WEBPACK_IMPORTED_MODULE_3__.Name.firstName(), \" \").concat(Faker__WEBPACK_IMPORTED_MODULE_3__.Name.lastName());\n        let message;\n        let description;\n        const membershipType = \"\";\n        switch(messageType){\n            case \"fly-sell\":\n                message = t(\"common:fly-sell-title\", {\n                    passengerName,\n                    route1: routes[0],\n                    route2: routes[1]\n                });\n                description = t(\"common:fly-sell-description\");\n                break;\n            case \"membership-purchase\":\n                message = t(\"common:membership-purchase-title\", {\n                    passengerName,\n                    membershipType\n                });\n                description = t(\"common:membership-purchase-description\");\n                break;\n            default:\n                return;\n        }\n        sonner__WEBPACK_IMPORTED_MODULE_2__.toast.message(message, {\n            description,\n            duration: 5000,\n            position: \"bottom-left\"\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const interval = setInterval(()=>{\n            showNotification(\"membership-purchase\");\n        }, 2000);\n        return ()=>{\n            clearInterval(interval);\n        };\n    }, []);\n    const showSuccessNotification = ()=>{\n        sonner__WEBPACK_IMPORTED_MODULE_2__.toast.success(t(\"common:sent-success\"), {\n            duration: 7000,\n            position: \"top-right\"\n        });\n    };\n    const showErrorNotification = ()=>{\n        sonner__WEBPACK_IMPORTED_MODULE_2__.toast.error(t(\"common:sent-error\"), {\n            duration: 7000,\n            position: \"top-right\"\n        });\n    };\n    const contextValue = {\n        notification,\n        showNotification,\n        hideNotification,\n        showErrorNotification,\n        showSuccessNotification\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NotificationContext.Provider, {\n        value: contextValue,\n        children: [\n            children,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(sonner__WEBPACK_IMPORTED_MODULE_2__.Toaster, {\n                richColors: true\n            }, void 0, false, {\n                fileName: \"/Users/frmachado/savia/holiday/context/NotificationContext.jsx\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/frmachado/savia/holiday/context/NotificationContext.jsx\",\n        lineNumber: 86,\n        columnNumber: 5\n    }, undefined);\n};\n_s(NotificationProvider, \"/NJr7nmxW8/tImrknLs53yhnwKQ=\", false, function() {\n    return [\n        react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation\n    ];\n});\n_c = NotificationProvider;\nconst useNotification = ()=>{\n    _s1();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(NotificationContext);\n};\n_s1(useNotification, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"NotificationProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbnRleHQvTm90aWZpY2F0aW9uQ29udGV4dC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDa0M7QUFDMEI7QUFDcEI7QUFDZDtBQUNxQjtBQUNPO0FBRXRELE1BQU1TLG9DQUFzQlIsb0RBQWFBO0FBRWxDLE1BQU1TLHVCQUF1QjtRQUFDLEVBQUVDLFFBQVEsRUFBRTs7SUFDL0MsTUFBTSxFQUFFQyxDQUFDLEVBQUUsR0FBR0wsNkRBQWNBO0lBRTVCLE1BQU0sQ0FBQ00sY0FBY0MsZ0JBQWdCLEdBQUdYLCtDQUFRQSxDQUFDO0lBRWpELE1BQU1ZLG1CQUFtQjtRQUN2QkQsZ0JBQWdCO0lBQ2xCO0lBRUEsTUFBTUUsU0FBU1Isa0VBQWVBO0lBRTlCLE1BQU1TLG1CQUFtQixDQUFDQztRQUN4QixNQUFNQyxnQkFBZ0IsR0FBNkJiLE9BQTFCQSxpREFBb0IsSUFBRyxLQUF5QixPQUF0QkEsZ0RBQW1CO1FBQ3RFLElBQUlpQjtRQUNKLElBQUlDO1FBQ0osTUFBTUMsaUJBQWlCO1FBRXZCLE9BQVFQO1lBQ04sS0FBSztnQkFDSEssVUFBVVgsRUFBRSx5QkFBeUI7b0JBQ25DTztvQkFDQU8sUUFBUVYsTUFBTSxDQUFDLEVBQUU7b0JBQ2pCVyxRQUFRWCxNQUFNLENBQUMsRUFBRTtnQkFDbkI7Z0JBQ0FRLGNBQWNaLEVBQUU7Z0JBQ2hCO1lBRUYsS0FBSztnQkFDSFcsVUFBVVgsRUFBRSxvQ0FBb0M7b0JBQzlDTztvQkFDQU07Z0JBQ0Y7Z0JBQ0FELGNBQWNaLEVBQUU7Z0JBQ2hCO1lBRUY7Z0JBQ0U7UUFDSjtRQUNBUCx5Q0FBS0EsQ0FBQ2tCLE9BQU8sQ0FBQ0EsU0FBUztZQUNyQkM7WUFDQUksVUFBVTtZQUNWQyxVQUFVO1FBQ1o7SUFDRjtJQUVBN0IsZ0RBQVNBLENBQUM7UUFDUixNQUFNOEIsV0FBV0MsWUFBWTtZQUMzQmQsaUJBQWlCO1FBQ25CLEdBQUc7UUFDSCxPQUFPO1lBQ0xlLGNBQWNGO1FBQ2hCO0lBQ0YsR0FBRyxFQUFFO0lBRUwsTUFBTUcsMEJBQTBCO1FBQzlCNUIseUNBQUtBLENBQUM2QixPQUFPLENBQUN0QixFQUFFLHdCQUF3QjtZQUN0Q2dCLFVBQVU7WUFDVkMsVUFBVTtRQUNaO0lBQ0Y7SUFDQSxNQUFNTSx3QkFBd0I7UUFDNUI5Qix5Q0FBS0EsQ0FBQytCLEtBQUssQ0FBQ3hCLEVBQUUsc0JBQXNCO1lBQ2xDZ0IsVUFBVTtZQUNWQyxVQUFVO1FBQ1o7SUFDRjtJQUVBLE1BQU1RLGVBQWU7UUFDbkJ4QjtRQUNBSTtRQUNBRjtRQUNBb0I7UUFDQUY7SUFDRjtJQUNBLHFCQUNFLDhEQUFDeEIsb0JBQW9CNkIsUUFBUTtRQUFDQyxPQUFPRjs7WUFDbEMxQjswQkFDRCw4REFBQ1AsMkNBQU9BO2dCQUFDb0MsVUFBVTs7Ozs7Ozs7Ozs7O0FBR3pCLEVBQUU7R0FoRlc5Qjs7UUFDR0gseURBQWNBOzs7S0FEakJHO0FBa0ZOLE1BQU0rQixrQkFBa0I7O0lBQzdCLE9BQU92QyxpREFBVUEsQ0FBQ087QUFDcEIsRUFBRTtJQUZXZ0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dC9Ob3RpZmljYXRpb25Db250ZXh0LmpzeD9lNzFiIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVG9hc3RlciwgdG9hc3QgfSBmcm9tIFwic29ubmVyXCI7XG5pbXBvcnQgZmFrZXIgZnJvbSBcIkZha2VyXCI7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gXCJyZWFjdC1pMThuZXh0XCI7XG5pbXBvcnQgZ2V0UmFuZG9tUm91dGVzIGZyb20gXCJAL3V0aWxzL2dldFJhbmRvbVJvdXRlc1wiO1xuXG5jb25zdCBOb3RpZmljYXRpb25Db250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuXG5leHBvcnQgY29uc3QgTm90aWZpY2F0aW9uUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oKTtcblxuICBjb25zdCBbbm90aWZpY2F0aW9uLCBzZXROb3RpZmljYXRpb25dID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgY29uc3QgaGlkZU5vdGlmaWNhdGlvbiA9ICgpID0+IHtcbiAgICBzZXROb3RpZmljYXRpb24oZmFsc2UpO1xuICB9O1xuXG4gIGNvbnN0IHJvdXRlcyA9IGdldFJhbmRvbVJvdXRlcygpO1xuXG4gIGNvbnN0IHNob3dOb3RpZmljYXRpb24gPSAobWVzc2FnZVR5cGUpID0+IHtcbiAgICBjb25zdCBwYXNzZW5nZXJOYW1lID0gYCR7ZmFrZXIuTmFtZS5maXJzdE5hbWUoKX0gJHtmYWtlci5OYW1lLmxhc3ROYW1lKCl9YDtcbiAgICBsZXQgbWVzc2FnZTtcbiAgICBsZXQgZGVzY3JpcHRpb247XG4gICAgY29uc3QgbWVtYmVyc2hpcFR5cGUgPSBcIlwiO1xuXG4gICAgc3dpdGNoIChtZXNzYWdlVHlwZSkge1xuICAgICAgY2FzZSBcImZseS1zZWxsXCI6XG4gICAgICAgIG1lc3NhZ2UgPSB0KFwiY29tbW9uOmZseS1zZWxsLXRpdGxlXCIsIHtcbiAgICAgICAgICBwYXNzZW5nZXJOYW1lLFxuICAgICAgICAgIHJvdXRlMTogcm91dGVzWzBdLFxuICAgICAgICAgIHJvdXRlMjogcm91dGVzWzFdLFxuICAgICAgICB9KTtcbiAgICAgICAgZGVzY3JpcHRpb24gPSB0KFwiY29tbW9uOmZseS1zZWxsLWRlc2NyaXB0aW9uXCIpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBcIm1lbWJlcnNoaXAtcHVyY2hhc2VcIjpcbiAgICAgICAgbWVzc2FnZSA9IHQoXCJjb21tb246bWVtYmVyc2hpcC1wdXJjaGFzZS10aXRsZVwiLCB7XG4gICAgICAgICAgcGFzc2VuZ2VyTmFtZSxcbiAgICAgICAgICBtZW1iZXJzaGlwVHlwZSxcbiAgICAgICAgfSk7XG4gICAgICAgIGRlc2NyaXB0aW9uID0gdChcImNvbW1vbjptZW1iZXJzaGlwLXB1cmNoYXNlLWRlc2NyaXB0aW9uXCIpO1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0b2FzdC5tZXNzYWdlKG1lc3NhZ2UsIHtcbiAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgZHVyYXRpb246IDUwMDAsXG4gICAgICBwb3NpdGlvbjogXCJib3R0b20tbGVmdFwiLFxuICAgIH0pO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBzaG93Tm90aWZpY2F0aW9uKFwibWVtYmVyc2hpcC1wdXJjaGFzZVwiKTtcbiAgICB9LCAyMDAwKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IHNob3dTdWNjZXNzTm90aWZpY2F0aW9uID0gKCkgPT4ge1xuICAgIHRvYXN0LnN1Y2Nlc3ModChcImNvbW1vbjpzZW50LXN1Y2Nlc3NcIiksIHtcbiAgICAgIGR1cmF0aW9uOiA3MDAwLFxuICAgICAgcG9zaXRpb246IFwidG9wLXJpZ2h0XCIsXG4gICAgfSk7XG4gIH07XG4gIGNvbnN0IHNob3dFcnJvck5vdGlmaWNhdGlvbiA9ICgpID0+IHtcbiAgICB0b2FzdC5lcnJvcih0KFwiY29tbW9uOnNlbnQtZXJyb3JcIiksIHtcbiAgICAgIGR1cmF0aW9uOiA3MDAwLFxuICAgICAgcG9zaXRpb246IFwidG9wLXJpZ2h0XCIsXG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgY29udGV4dFZhbHVlID0ge1xuICAgIG5vdGlmaWNhdGlvbixcbiAgICBzaG93Tm90aWZpY2F0aW9uLFxuICAgIGhpZGVOb3RpZmljYXRpb24sXG4gICAgc2hvd0Vycm9yTm90aWZpY2F0aW9uLFxuICAgIHNob3dTdWNjZXNzTm90aWZpY2F0aW9uLFxuICB9O1xuICByZXR1cm4gKFxuICAgIDxOb3RpZmljYXRpb25Db250ZXh0LlByb3ZpZGVyIHZhbHVlPXtjb250ZXh0VmFsdWV9PlxuICAgICAge2NoaWxkcmVufVxuICAgICAgPFRvYXN0ZXIgcmljaENvbG9ycyAvPlxuICAgIDwvTm90aWZpY2F0aW9uQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VOb3RpZmljYXRpb24gPSAoKSA9PiB7XG4gIHJldHVybiB1c2VDb250ZXh0KE5vdGlmaWNhdGlvbkNvbnRleHQpO1xufTtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwiVG9hc3RlciIsInRvYXN0IiwiZmFrZXIiLCJ1c2VUcmFuc2xhdGlvbiIsImdldFJhbmRvbVJvdXRlcyIsIk5vdGlmaWNhdGlvbkNvbnRleHQiLCJOb3RpZmljYXRpb25Qcm92aWRlciIsImNoaWxkcmVuIiwidCIsIm5vdGlmaWNhdGlvbiIsInNldE5vdGlmaWNhdGlvbiIsImhpZGVOb3RpZmljYXRpb24iLCJyb3V0ZXMiLCJzaG93Tm90aWZpY2F0aW9uIiwibWVzc2FnZVR5cGUiLCJwYXNzZW5nZXJOYW1lIiwiTmFtZSIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwibWVzc2FnZSIsImRlc2NyaXB0aW9uIiwibWVtYmVyc2hpcFR5cGUiLCJyb3V0ZTEiLCJyb3V0ZTIiLCJkdXJhdGlvbiIsInBvc2l0aW9uIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJzaG93U3VjY2Vzc05vdGlmaWNhdGlvbiIsInN1Y2Nlc3MiLCJzaG93RXJyb3JOb3RpZmljYXRpb24iLCJlcnJvciIsImNvbnRleHRWYWx1ZSIsIlByb3ZpZGVyIiwidmFsdWUiLCJyaWNoQ29sb3JzIiwidXNlTm90aWZpY2F0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./context/NotificationContext.jsx\n"));

/***/ })

});