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

/***/ "(app-pages-browser)/./utils/flySearchErrors.js":
/*!**********************************!*\
  !*** ./utils/flySearchErrors.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\nconst evaluateErrors = (flyingFrom, flyingTo, departDate, returnDate, today)=>{\n    let errors = {\n        flyingFrom: false,\n        flyingTo: false,\n        returnBeforeDepart: false,\n        equalLocations: false\n    };\n    if (!flyingFrom) {\n        errors.flyingFrom = true;\n    }\n    if (!flyingTo) {\n        errors.flyingTo = true;\n    }\n    if (returnDate.toDate() < departDate.toDate()) {\n        errors.returnBeforeDepart = true;\n    }\n    if (flyingFrom !== \"\" === flyingTo !== \"\") {\n        errors.equalLocations = true;\n    }\n    // if (departDate.toDate() < today.toDate()) {\n    //   errors.departDatePast = true;\n    // }\n    // if (returnDate.toDate() < today.toDate()) {\n    //   errors.returnDatePast = true;\n    // }\n    const hasErrors = Object.values(errors).some((error)=>error);\n    return {\n        errors,\n        hasErrors\n    };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (evaluateErrors);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3V0aWxzL2ZseVNlYXJjaEVycm9ycy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEsTUFBTUEsaUJBQWlCLENBQ3JCQyxZQUNBQyxVQUNBQyxZQUNBQyxZQUNBQztJQUVBLElBQUlDLFNBQVM7UUFDWEwsWUFBWTtRQUNaQyxVQUFVO1FBQ1ZLLG9CQUFvQjtRQUNwQkMsZ0JBQWdCO0lBR2xCO0lBRUEsSUFBSSxDQUFDUCxZQUFZO1FBQ2ZLLE9BQU9MLFVBQVUsR0FBRztJQUN0QjtJQUVBLElBQUksQ0FBQ0MsVUFBVTtRQUNiSSxPQUFPSixRQUFRLEdBQUc7SUFDcEI7SUFFQSxJQUFJRSxXQUFXSyxNQUFNLEtBQUtOLFdBQVdNLE1BQU0sSUFBSTtRQUM3Q0gsT0FBT0Msa0JBQWtCLEdBQUc7SUFDOUI7SUFFQSxJQUFJLGVBQWdCLE9BQVFMLGFBQVksSUFBSTtRQUMxQ0ksT0FBT0UsY0FBYyxHQUFHO0lBQzFCO0lBQ0EsOENBQThDO0lBQzlDLGtDQUFrQztJQUNsQyxJQUFJO0lBRUosOENBQThDO0lBQzlDLGtDQUFrQztJQUNsQyxJQUFJO0lBQ0osTUFBTUUsWUFBWUMsT0FBT0MsTUFBTSxDQUFDTixRQUFRTyxJQUFJLENBQUMsQ0FBQ0MsUUFBVUE7SUFFeEQsT0FBTztRQUNMUjtRQUNBSTtJQUNGO0FBQ0Y7QUFDQSwrREFBZVYsY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi91dGlscy9mbHlTZWFyY2hFcnJvcnMuanM/NzkwMyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBldmFsdWF0ZUVycm9ycyA9IChcbiAgZmx5aW5nRnJvbSxcbiAgZmx5aW5nVG8sXG4gIGRlcGFydERhdGUsXG4gIHJldHVybkRhdGUsXG4gIHRvZGF5XG4pID0+IHtcbiAgbGV0IGVycm9ycyA9IHtcbiAgICBmbHlpbmdGcm9tOiBmYWxzZSxcbiAgICBmbHlpbmdUbzogZmFsc2UsXG4gICAgcmV0dXJuQmVmb3JlRGVwYXJ0OiBmYWxzZSxcbiAgICBlcXVhbExvY2F0aW9uczogZmFsc2UsXG4gICAgLy8gZGVwYXJ0RGF0ZVBhc3Q6IGZhbHNlLFxuICAgIC8vIHJldHVybkRhdGVQYXN0OiBmYWxzZSxcbiAgfTtcblxuICBpZiAoIWZseWluZ0Zyb20pIHtcbiAgICBlcnJvcnMuZmx5aW5nRnJvbSA9IHRydWU7XG4gIH1cblxuICBpZiAoIWZseWluZ1RvKSB7XG4gICAgZXJyb3JzLmZseWluZ1RvID0gdHJ1ZTtcbiAgfVxuXG4gIGlmIChyZXR1cm5EYXRlLnRvRGF0ZSgpIDwgZGVwYXJ0RGF0ZS50b0RhdGUoKSkge1xuICAgIGVycm9ycy5yZXR1cm5CZWZvcmVEZXBhcnQgPSB0cnVlO1xuICB9XG5cbiAgaWYgKChmbHlpbmdGcm9tICE9PSAnJykgPT09IGZseWluZ1RvIT09ICcnKSB7XG4gICAgZXJyb3JzLmVxdWFsTG9jYXRpb25zID0gdHJ1ZTtcbiAgfVxuICAvLyBpZiAoZGVwYXJ0RGF0ZS50b0RhdGUoKSA8IHRvZGF5LnRvRGF0ZSgpKSB7XG4gIC8vICAgZXJyb3JzLmRlcGFydERhdGVQYXN0ID0gdHJ1ZTtcbiAgLy8gfVxuXG4gIC8vIGlmIChyZXR1cm5EYXRlLnRvRGF0ZSgpIDwgdG9kYXkudG9EYXRlKCkpIHtcbiAgLy8gICBlcnJvcnMucmV0dXJuRGF0ZVBhc3QgPSB0cnVlO1xuICAvLyB9XG4gIGNvbnN0IGhhc0Vycm9ycyA9IE9iamVjdC52YWx1ZXMoZXJyb3JzKS5zb21lKChlcnJvcikgPT4gZXJyb3IpO1xuXG4gIHJldHVybiB7XG4gICAgZXJyb3JzLFxuICAgIGhhc0Vycm9ycyxcbiAgfTtcbn07XG5leHBvcnQgZGVmYXVsdCBldmFsdWF0ZUVycm9ycztcbiJdLCJuYW1lcyI6WyJldmFsdWF0ZUVycm9ycyIsImZseWluZ0Zyb20iLCJmbHlpbmdUbyIsImRlcGFydERhdGUiLCJyZXR1cm5EYXRlIiwidG9kYXkiLCJlcnJvcnMiLCJyZXR1cm5CZWZvcmVEZXBhcnQiLCJlcXVhbExvY2F0aW9ucyIsInRvRGF0ZSIsImhhc0Vycm9ycyIsIk9iamVjdCIsInZhbHVlcyIsInNvbWUiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./utils/flySearchErrors.js\n"));

/***/ })

});