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

/***/ "(app-pages-browser)/./context/FlightsContext.jsx":
/*!************************************!*\
  !*** ./context/FlightsContext.jsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   FlightsProvider: function() { return /* binding */ FlightsProvider; },\n/* harmony export */   useFlights: function() { return /* binding */ useFlights; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ FlightsProvider,useFlights auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\nconst flightsData = [\n    {\n        id: 1,\n        name: \"Miami\",\n        code: \"MIA\",\n        destinations: [\n            \"EZE\",\n            \"PUJ\"\n        ]\n    },\n    {\n        id: 2,\n        name: \"Orlando\",\n        code: \"MCO\",\n        destinations: [\n            \"EZE\",\n            \"PUJ\"\n        ]\n    },\n    {\n        id: 3,\n        name: \"Buenos Aires\",\n        code: \"EZE\",\n        destinations: [\n            \"MIA\",\n            \"MCO\"\n        ]\n    },\n    {\n        id: 4,\n        name: \"Punta Cana\",\n        code: \"PUJ\",\n        destinations: [\n            \"MIA\",\n            \"MCO\"\n        ]\n    }\n];\nconst FlightsContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst FlightsProvider = (param)=>{\n    let { children } = param;\n    _s();\n    const [departure, setDeparture] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);\n    const setDepartureLocation = (location)=>{\n        setDeparture(location);\n    };\n    const getAvailableDestinations = ()=>{\n        const selectedFlight = flightsData.find((flight)=>flight.code === departure);\n        return flightsData.find((flight)=>flight.code === departure);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FlightsContext.Provider, {\n        value: {\n            departure,\n            setDepartureLocation,\n            getAvailableDestinations,\n            flightsData\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/frmachado/savia/holiday/context/FlightsContext.jsx\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, undefined);\n};\n_s(FlightsProvider, \"V6XiC7DodRn3tvJ4Xi0X5R82KPs=\");\n_c = FlightsProvider;\nconst useFlights = ()=>{\n    _s1();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(FlightsContext);\n};\n_s1(useFlights, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"FlightsProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbnRleHQvRmxpZ2h0c0NvbnRleHQuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFbUU7QUFFbkUsTUFBTUksY0FBYztJQUNsQjtRQUNFQyxJQUFJO1FBQ0pDLE1BQU07UUFDTkMsTUFBTTtRQUNOQyxjQUFjO1lBQUM7WUFBTztTQUFNO0lBQzlCO0lBQ0E7UUFDRUgsSUFBSTtRQUNKQyxNQUFNO1FBQ05DLE1BQU07UUFDTkMsY0FBYztZQUFDO1lBQU87U0FBTTtJQUM5QjtJQUNBO1FBQ0VILElBQUk7UUFDSkMsTUFBTTtRQUNOQyxNQUFNO1FBQ05DLGNBQWM7WUFBQztZQUFPO1NBQU07SUFDOUI7SUFDQTtRQUNFSCxJQUFJO1FBQ0pDLE1BQU07UUFDTkMsTUFBTTtRQUNOQyxjQUFjO1lBQUM7WUFBTztTQUFNO0lBQzlCO0NBQ0Q7QUFFRCxNQUFNQywrQkFBaUJSLG9EQUFhQTtBQUU3QixNQUFNUyxrQkFBa0I7UUFBQyxFQUFFQyxRQUFRLEVBQUU7O0lBQzFDLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHViwrQ0FBUUEsQ0FBQ1c7SUFHM0MsTUFBTUMsdUJBQXVCLENBQUNDO1FBQzVCSCxhQUFhRztJQUNmO0lBRUEsTUFBTUMsMkJBQTJCO1FBQy9CLE1BQU1DLGlCQUFpQmQsWUFBWWUsSUFBSSxDQUNyQyxDQUFDQyxTQUFXQSxPQUFPYixJQUFJLEtBQUtLO1FBRTlCLE9BQU9SLFlBQVllLElBQUksQ0FBQyxDQUFDQyxTQUFXQSxPQUFPYixJQUFJLEtBQUtLO0lBQ3REO0lBRUEscUJBQ0UsOERBQUNILGVBQWVZLFFBQVE7UUFDdEJDLE9BQU87WUFDTFY7WUFDQUc7WUFDQUU7WUFDQWI7UUFDRjtrQkFFQ087Ozs7OztBQUdQLEVBQUU7R0EzQldEO0tBQUFBO0FBNkJOLE1BQU1hLGFBQWE7O0lBQ3hCLE9BQU9yQixpREFBVUEsQ0FBQ087QUFDcEIsRUFBRTtJQUZXYyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb250ZXh0L0ZsaWdodHNDb250ZXh0LmpzeD9lZDNkIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgZmxpZ2h0c0RhdGEgPSBbXG4gIHtcbiAgICBpZDogMSxcbiAgICBuYW1lOiBcIk1pYW1pXCIsXG4gICAgY29kZTogXCJNSUFcIixcbiAgICBkZXN0aW5hdGlvbnM6IFtcIkVaRVwiLCBcIlBVSlwiXSxcbiAgfSxcbiAge1xuICAgIGlkOiAyLFxuICAgIG5hbWU6IFwiT3JsYW5kb1wiLFxuICAgIGNvZGU6IFwiTUNPXCIsXG4gICAgZGVzdGluYXRpb25zOiBbXCJFWkVcIiwgXCJQVUpcIl0sXG4gIH0sXG4gIHtcbiAgICBpZDogMyxcbiAgICBuYW1lOiBcIkJ1ZW5vcyBBaXJlc1wiLFxuICAgIGNvZGU6IFwiRVpFXCIsXG4gICAgZGVzdGluYXRpb25zOiBbXCJNSUFcIiwgXCJNQ09cIl0sXG4gIH0sXG4gIHtcbiAgICBpZDogNCxcbiAgICBuYW1lOiBcIlB1bnRhIENhbmFcIixcbiAgICBjb2RlOiBcIlBVSlwiLFxuICAgIGRlc3RpbmF0aW9uczogW1wiTUlBXCIsIFwiTUNPXCJdLFxuICB9LFxuXTtcblxuY29uc3QgRmxpZ2h0c0NvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XG5cbmV4cG9ydCBjb25zdCBGbGlnaHRzUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IFtkZXBhcnR1cmUsIHNldERlcGFydHVyZV0gPSB1c2VTdGF0ZSh1bmRlZmluZWQpO1xuXG5cbiAgY29uc3Qgc2V0RGVwYXJ0dXJlTG9jYXRpb24gPSAobG9jYXRpb24pID0+IHtcbiAgICBzZXREZXBhcnR1cmUobG9jYXRpb24pO1xuICB9O1xuXG4gIGNvbnN0IGdldEF2YWlsYWJsZURlc3RpbmF0aW9ucyA9ICgpID0+IHtcbiAgICBjb25zdCBzZWxlY3RlZEZsaWdodCA9IGZsaWdodHNEYXRhLmZpbmQoXG4gICAgICAoZmxpZ2h0KSA9PiBmbGlnaHQuY29kZSA9PT0gZGVwYXJ0dXJlXG4gICAgKTtcbiAgICByZXR1cm4gZmxpZ2h0c0RhdGEuZmluZCgoZmxpZ2h0KSA9PiBmbGlnaHQuY29kZSA9PT0gZGVwYXJ0dXJlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxGbGlnaHRzQ29udGV4dC5Qcm92aWRlclxuICAgICAgdmFsdWU9e3tcbiAgICAgICAgZGVwYXJ0dXJlLFxuICAgICAgICBzZXREZXBhcnR1cmVMb2NhdGlvbixcbiAgICAgICAgZ2V0QXZhaWxhYmxlRGVzdGluYXRpb25zLFxuICAgICAgICBmbGlnaHRzRGF0YSxcbiAgICAgIH19XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvRmxpZ2h0c0NvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgdXNlRmxpZ2h0cyA9ICgpID0+IHtcbiAgcmV0dXJuIHVzZUNvbnRleHQoRmxpZ2h0c0NvbnRleHQpO1xufTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJmbGlnaHRzRGF0YSIsImlkIiwibmFtZSIsImNvZGUiLCJkZXN0aW5hdGlvbnMiLCJGbGlnaHRzQ29udGV4dCIsIkZsaWdodHNQcm92aWRlciIsImNoaWxkcmVuIiwiZGVwYXJ0dXJlIiwic2V0RGVwYXJ0dXJlIiwidW5kZWZpbmVkIiwic2V0RGVwYXJ0dXJlTG9jYXRpb24iLCJsb2NhdGlvbiIsImdldEF2YWlsYWJsZURlc3RpbmF0aW9ucyIsInNlbGVjdGVkRmxpZ2h0IiwiZmluZCIsImZsaWdodCIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VGbGlnaHRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./context/FlightsContext.jsx\n"));

/***/ })

});