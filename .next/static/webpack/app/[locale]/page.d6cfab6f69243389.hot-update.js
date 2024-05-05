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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   FlightsProvider: function() { return /* binding */ FlightsProvider; },\n/* harmony export */   useFlights: function() { return /* binding */ useFlights; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ FlightsProvider,useFlights auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\nconst flightsData = [\n    {\n        id: 1,\n        name: \"Miami\",\n        code: \"MIA\",\n        destinations: [\n            \"EZE\",\n            \"PUJ\"\n        ]\n    },\n    {\n        id: 2,\n        name: \"Orlando\",\n        code: \"MCO\",\n        destinations: [\n            \"EZE\",\n            \"PUJ\"\n        ]\n    },\n    {\n        id: 3,\n        name: \"Buenos Aires\",\n        code: \"EZE\",\n        destinations: [\n            \"MIA\",\n            \"MCO\"\n        ]\n    },\n    {\n        id: 4,\n        name: \"Punta Cana\",\n        code: \"PUJ\",\n        destinations: [\n            \"MIA\",\n            \"MCO\"\n        ]\n    }\n];\nconst FlightsContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst FlightsProvider = (param)=>{\n    let { children } = param;\n    _s();\n    const [departure, setDeparture] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);\n    const setDepartureLocation = (location)=>{\n        setDeparture(location);\n    };\n    const getAvailableDestinations = ()=>{\n        console.log(\"JKGFLKJFDSAHLJKFDHSALAJKDFSHFDLKJASH\", departure);\n        const selectedFlight = departure && flightsData.find((flight)=>flight.code === departure.code);\n        return selectedFlight ? selectedFlight.destinations : [];\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FlightsContext.Provider, {\n        value: {\n            departure,\n            setDepartureLocation,\n            getAvailableDestinations,\n            flightsData\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/frmachado/savia/holiday/context/FlightsContext.jsx\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, undefined);\n};\n_s(FlightsProvider, \"V6XiC7DodRn3tvJ4Xi0X5R82KPs=\");\n_c = FlightsProvider;\nconst useFlights = ()=>{\n    _s1();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(FlightsContext);\n};\n_s1(useFlights, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"FlightsProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbnRleHQvRmxpZ2h0c0NvbnRleHQuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFbUU7QUFFbkUsTUFBTUksY0FBYztJQUNsQjtRQUNFQyxJQUFJO1FBQ0pDLE1BQU07UUFDTkMsTUFBTTtRQUNOQyxjQUFjO1lBQUM7WUFBTztTQUFNO0lBQzlCO0lBQ0E7UUFDRUgsSUFBSTtRQUNKQyxNQUFNO1FBQ05DLE1BQU07UUFDTkMsY0FBYztZQUFDO1lBQU87U0FBTTtJQUM5QjtJQUNBO1FBQ0VILElBQUk7UUFDSkMsTUFBTTtRQUNOQyxNQUFNO1FBQ05DLGNBQWM7WUFBQztZQUFPO1NBQU07SUFDOUI7SUFDQTtRQUNFSCxJQUFJO1FBQ0pDLE1BQU07UUFDTkMsTUFBTTtRQUNOQyxjQUFjO1lBQUM7WUFBTztTQUFNO0lBQzlCO0NBQ0Q7QUFFRCxNQUFNQywrQkFBaUJSLG9EQUFhQTtBQUU3QixNQUFNUyxrQkFBa0I7UUFBQyxFQUFFQyxRQUFRLEVBQUU7O0lBQzFDLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHViwrQ0FBUUEsQ0FBQ1c7SUFFM0MsTUFBTUMsdUJBQXVCLENBQUNDO1FBQzVCSCxhQUFhRztJQUNmO0lBRUEsTUFBTUMsMkJBQTJCO1FBQy9CQyxRQUFRQyxHQUFHLENBQUMsd0NBQXdDUDtRQUNwRCxNQUFNUSxpQkFDSlIsYUFBYVIsWUFBWWlCLElBQUksQ0FBQyxDQUFDQyxTQUFXQSxPQUFPZixJQUFJLEtBQUtLLFVBQVVMLElBQUk7UUFDMUUsT0FBT2EsaUJBQWlCQSxlQUFlWixZQUFZLEdBQUcsRUFBRTtJQUMxRDtJQUVBLHFCQUNFLDhEQUFDQyxlQUFlYyxRQUFRO1FBQ3RCQyxPQUFPO1lBQ0xaO1lBQ0FHO1lBQ0FFO1lBQ0FiO1FBQ0Y7a0JBRUNPOzs7Ozs7QUFHUCxFQUFFO0dBMUJXRDtLQUFBQTtBQTRCTixNQUFNZSxhQUFhOztJQUN4QixPQUFPdkIsaURBQVVBLENBQUNPO0FBQ3BCLEVBQUU7SUFGV2dCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbnRleHQvRmxpZ2h0c0NvbnRleHQuanN4P2VkM2QiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBmbGlnaHRzRGF0YSA9IFtcbiAge1xuICAgIGlkOiAxLFxuICAgIG5hbWU6IFwiTWlhbWlcIixcbiAgICBjb2RlOiBcIk1JQVwiLFxuICAgIGRlc3RpbmF0aW9uczogW1wiRVpFXCIsIFwiUFVKXCJdLFxuICB9LFxuICB7XG4gICAgaWQ6IDIsXG4gICAgbmFtZTogXCJPcmxhbmRvXCIsXG4gICAgY29kZTogXCJNQ09cIixcbiAgICBkZXN0aW5hdGlvbnM6IFtcIkVaRVwiLCBcIlBVSlwiXSxcbiAgfSxcbiAge1xuICAgIGlkOiAzLFxuICAgIG5hbWU6IFwiQnVlbm9zIEFpcmVzXCIsXG4gICAgY29kZTogXCJFWkVcIixcbiAgICBkZXN0aW5hdGlvbnM6IFtcIk1JQVwiLCBcIk1DT1wiXSxcbiAgfSxcbiAge1xuICAgIGlkOiA0LFxuICAgIG5hbWU6IFwiUHVudGEgQ2FuYVwiLFxuICAgIGNvZGU6IFwiUFVKXCIsXG4gICAgZGVzdGluYXRpb25zOiBbXCJNSUFcIiwgXCJNQ09cIl0sXG4gIH0sXG5dO1xuXG5jb25zdCBGbGlnaHRzQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcblxuZXhwb3J0IGNvbnN0IEZsaWdodHNQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgW2RlcGFydHVyZSwgc2V0RGVwYXJ0dXJlXSA9IHVzZVN0YXRlKHVuZGVmaW5lZCk7XG5cbiAgY29uc3Qgc2V0RGVwYXJ0dXJlTG9jYXRpb24gPSAobG9jYXRpb24pID0+IHtcbiAgICBzZXREZXBhcnR1cmUobG9jYXRpb24pO1xuICB9O1xuXG4gIGNvbnN0IGdldEF2YWlsYWJsZURlc3RpbmF0aW9ucyA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIkpLR0ZMS0pGRFNBSExKS0ZESFNBTEFKS0RGU0hGRExLSkFTSFwiLCBkZXBhcnR1cmUpO1xuICAgIGNvbnN0IHNlbGVjdGVkRmxpZ2h0ID1cbiAgICAgIGRlcGFydHVyZSAmJiBmbGlnaHRzRGF0YS5maW5kKChmbGlnaHQpID0+IGZsaWdodC5jb2RlID09PSBkZXBhcnR1cmUuY29kZSk7XG4gICAgcmV0dXJuIHNlbGVjdGVkRmxpZ2h0ID8gc2VsZWN0ZWRGbGlnaHQuZGVzdGluYXRpb25zIDogW107XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8RmxpZ2h0c0NvbnRleHQuUHJvdmlkZXJcbiAgICAgIHZhbHVlPXt7XG4gICAgICAgIGRlcGFydHVyZSxcbiAgICAgICAgc2V0RGVwYXJ0dXJlTG9jYXRpb24sXG4gICAgICAgIGdldEF2YWlsYWJsZURlc3RpbmF0aW9ucyxcbiAgICAgICAgZmxpZ2h0c0RhdGEsXG4gICAgICB9fVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0ZsaWdodHNDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IHVzZUZsaWdodHMgPSAoKSA9PiB7XG4gIHJldHVybiB1c2VDb250ZXh0KEZsaWdodHNDb250ZXh0KTtcbn07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwiZmxpZ2h0c0RhdGEiLCJpZCIsIm5hbWUiLCJjb2RlIiwiZGVzdGluYXRpb25zIiwiRmxpZ2h0c0NvbnRleHQiLCJGbGlnaHRzUHJvdmlkZXIiLCJjaGlsZHJlbiIsImRlcGFydHVyZSIsInNldERlcGFydHVyZSIsInVuZGVmaW5lZCIsInNldERlcGFydHVyZUxvY2F0aW9uIiwibG9jYXRpb24iLCJnZXRBdmFpbGFibGVEZXN0aW5hdGlvbnMiLCJjb25zb2xlIiwibG9nIiwic2VsZWN0ZWRGbGlnaHQiLCJmaW5kIiwiZmxpZ2h0IiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInVzZUZsaWdodHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./context/FlightsContext.jsx\n"));

/***/ })

});