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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\nconst evaluateErrors = (flyingFrom, flyingTo, departDate, returnDate, today)=>{\n    let errors = {\n        flyingFrom: false,\n        flyingTo: false,\n        returnBeforeDepart: false,\n        equalLocations: false\n    };\n    if (!flyingFrom) {\n        errors.flyingFrom = true;\n    }\n    if (!flyingTo) {\n        errors.flyingTo = true;\n    }\n    if (returnDate.toDate() < departDate.toDate()) {\n        errors.returnBeforeDepart = true;\n    }\n    if (flyingFrom !== \"\" && flyingTo !== \"\" && flyingFrom !== flyingTo) {\n        console.log(flyingFrom !== \"\", flyingTo !== \"\" && flyingFrom !== flyingTo);\n        errors.equalLocations = true;\n    }\n    // if (departDate.toDate() < today.toDate()) {\n    //   errors.departDatePast = true;\n    // }\n    // if (returnDate.toDate() < today.toDate()) {\n    //   errors.returnDatePast = true;\n    // }\n    const hasErrors = Object.values(errors).some((error)=>error);\n    return {\n        errors,\n        hasErrors\n    };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (evaluateErrors);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3V0aWxzL2ZseVNlYXJjaEVycm9ycy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEsTUFBTUEsaUJBQWlCLENBQ3JCQyxZQUNBQyxVQUNBQyxZQUNBQyxZQUNBQztJQUVBLElBQUlDLFNBQVM7UUFDWEwsWUFBWTtRQUNaQyxVQUFVO1FBQ1ZLLG9CQUFvQjtRQUNwQkMsZ0JBQWdCO0lBR2xCO0lBRUEsSUFBSSxDQUFDUCxZQUFZO1FBQ2ZLLE9BQU9MLFVBQVUsR0FBRztJQUN0QjtJQUVBLElBQUksQ0FBQ0MsVUFBVTtRQUNiSSxPQUFPSixRQUFRLEdBQUc7SUFDcEI7SUFFQSxJQUFJRSxXQUFXSyxNQUFNLEtBQUtOLFdBQVdNLE1BQU0sSUFBSTtRQUM3Q0gsT0FBT0Msa0JBQWtCLEdBQUc7SUFDOUI7SUFFQSxJQUFJTixlQUFlLE1BQU1DLGFBQWEsTUFBTUQsZUFBZUMsVUFBVTtRQUNuRVEsUUFBUUMsR0FBRyxDQUFFVixlQUFlLElBQUtDLGFBQWEsTUFBTUQsZUFBZUM7UUFDbkVJLE9BQU9FLGNBQWMsR0FBRztJQUMxQjtJQUNBLDhDQUE4QztJQUM5QyxrQ0FBa0M7SUFDbEMsSUFBSTtJQUVKLDhDQUE4QztJQUM5QyxrQ0FBa0M7SUFDbEMsSUFBSTtJQUNKLE1BQU1JLFlBQVlDLE9BQU9DLE1BQU0sQ0FBQ1IsUUFBUVMsSUFBSSxDQUFDLENBQUNDLFFBQVVBO0lBRXhELE9BQU87UUFDTFY7UUFDQU07SUFDRjtBQUNGO0FBQ0EsK0RBQWVaLGNBQWNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvZmx5U2VhcmNoRXJyb3JzLmpzPzc5MDMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZXZhbHVhdGVFcnJvcnMgPSAoXG4gIGZseWluZ0Zyb20sXG4gIGZseWluZ1RvLFxuICBkZXBhcnREYXRlLFxuICByZXR1cm5EYXRlLFxuICB0b2RheVxuKSA9PiB7XG4gIGxldCBlcnJvcnMgPSB7XG4gICAgZmx5aW5nRnJvbTogZmFsc2UsXG4gICAgZmx5aW5nVG86IGZhbHNlLFxuICAgIHJldHVybkJlZm9yZURlcGFydDogZmFsc2UsXG4gICAgZXF1YWxMb2NhdGlvbnM6IGZhbHNlLFxuICAgIC8vIGRlcGFydERhdGVQYXN0OiBmYWxzZSxcbiAgICAvLyByZXR1cm5EYXRlUGFzdDogZmFsc2UsXG4gIH07XG5cbiAgaWYgKCFmbHlpbmdGcm9tKSB7XG4gICAgZXJyb3JzLmZseWluZ0Zyb20gPSB0cnVlO1xuICB9XG5cbiAgaWYgKCFmbHlpbmdUbykge1xuICAgIGVycm9ycy5mbHlpbmdUbyA9IHRydWU7XG4gIH1cblxuICBpZiAocmV0dXJuRGF0ZS50b0RhdGUoKSA8IGRlcGFydERhdGUudG9EYXRlKCkpIHtcbiAgICBlcnJvcnMucmV0dXJuQmVmb3JlRGVwYXJ0ID0gdHJ1ZTtcbiAgfVxuXG4gIGlmIChmbHlpbmdGcm9tICE9PSBcIlwiICYmIGZseWluZ1RvICE9PSBcIlwiICYmIGZseWluZ0Zyb20gIT09IGZseWluZ1RvKSB7XG4gICAgY29uc29sZS5sb2coIGZseWluZ0Zyb20gIT09IFwiXCIgLCBmbHlpbmdUbyAhPT0gXCJcIiAmJiBmbHlpbmdGcm9tICE9PSBmbHlpbmdUbylcbiAgICBlcnJvcnMuZXF1YWxMb2NhdGlvbnMgPSB0cnVlO1xuICB9XG4gIC8vIGlmIChkZXBhcnREYXRlLnRvRGF0ZSgpIDwgdG9kYXkudG9EYXRlKCkpIHtcbiAgLy8gICBlcnJvcnMuZGVwYXJ0RGF0ZVBhc3QgPSB0cnVlO1xuICAvLyB9XG5cbiAgLy8gaWYgKHJldHVybkRhdGUudG9EYXRlKCkgPCB0b2RheS50b0RhdGUoKSkge1xuICAvLyAgIGVycm9ycy5yZXR1cm5EYXRlUGFzdCA9IHRydWU7XG4gIC8vIH1cbiAgY29uc3QgaGFzRXJyb3JzID0gT2JqZWN0LnZhbHVlcyhlcnJvcnMpLnNvbWUoKGVycm9yKSA9PiBlcnJvcik7XG5cbiAgcmV0dXJuIHtcbiAgICBlcnJvcnMsXG4gICAgaGFzRXJyb3JzLFxuICB9O1xufTtcbmV4cG9ydCBkZWZhdWx0IGV2YWx1YXRlRXJyb3JzO1xuIl0sIm5hbWVzIjpbImV2YWx1YXRlRXJyb3JzIiwiZmx5aW5nRnJvbSIsImZseWluZ1RvIiwiZGVwYXJ0RGF0ZSIsInJldHVybkRhdGUiLCJ0b2RheSIsImVycm9ycyIsInJldHVybkJlZm9yZURlcGFydCIsImVxdWFsTG9jYXRpb25zIiwidG9EYXRlIiwiY29uc29sZSIsImxvZyIsImhhc0Vycm9ycyIsIk9iamVjdCIsInZhbHVlcyIsInNvbWUiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./utils/flySearchErrors.js\n"));

/***/ })

});