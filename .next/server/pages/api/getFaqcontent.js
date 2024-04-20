"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/getFaqcontent";
exports.ids = ["pages/api/getFaqcontent"];
exports.modules = {

/***/ "gray-matter":
/*!******************************!*\
  !*** external "gray-matter" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("gray-matter");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "next/dist/compiled/next-server/pages-api.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages-api.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages-api.runtime.dev.js");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2FgetFaqcontent&preferredRegion=&absolutePagePath=.%2Fpages%2Fapi%2FgetFaqcontent.js&middlewareConfigBase64=e30%3D!":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2FgetFaqcontent&preferredRegion=&absolutePagePath=.%2Fpages%2Fapi%2FgetFaqcontent.js&middlewareConfigBase64=e30%3D! ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   routeModule: () => (/* binding */ routeModule)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/pages-api/module.compiled */ \"(api)/./node_modules/next/dist/server/future/route-modules/pages-api/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(api)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/templates/helpers */ \"(api)/./node_modules/next/dist/build/templates/helpers.js\");\n/* harmony import */ var _pages_api_getFaqcontent_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/api/getFaqcontent.js */ \"(api)/./pages/api/getFaqcontent.js\");\n\n\n\n// Import the userland code.\n\n// Re-export the handler (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_getFaqcontent_js__WEBPACK_IMPORTED_MODULE_3__, \"default\"));\n// Re-export config.\nconst config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_getFaqcontent_js__WEBPACK_IMPORTED_MODULE_3__, \"config\");\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesAPIRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES_API,\n        page: \"/api/getFaqcontent\",\n        pathname: \"/api/getFaqcontent\",\n        // The following aren't used in production.\n        bundlePath: \"\",\n        filename: \"\"\n    },\n    userland: _pages_api_getFaqcontent_js__WEBPACK_IMPORTED_MODULE_3__\n});\n\n//# sourceMappingURL=pages-api.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXJvdXRlLWxvYWRlci9pbmRleC5qcz9raW5kPVBBR0VTX0FQSSZwYWdlPSUyRmFwaSUyRmdldEZhcWNvbnRlbnQmcHJlZmVycmVkUmVnaW9uPSZhYnNvbHV0ZVBhZ2VQYXRoPS4lMkZwYWdlcyUyRmFwaSUyRmdldEZhcWNvbnRlbnQuanMmbWlkZGxld2FyZUNvbmZpZ0Jhc2U2ND1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ0w7QUFDMUQ7QUFDeUQ7QUFDekQ7QUFDQSxpRUFBZSx3RUFBSyxDQUFDLHdEQUFRLFlBQVksRUFBQztBQUMxQztBQUNPLGVBQWUsd0VBQUssQ0FBQyx3REFBUTtBQUNwQztBQUNPLHdCQUF3QixnSEFBbUI7QUFDbEQ7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsWUFBWTtBQUNaLENBQUM7O0FBRUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nb3RyaXAtbmV4dC8/ZmJlOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYWdlc0FQSVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvcGFnZXMtYXBpL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IGhvaXN0IH0gZnJvbSBcIm5leHQvZGlzdC9idWlsZC90ZW1wbGF0ZXMvaGVscGVyc1wiO1xuLy8gSW1wb3J0IHRoZSB1c2VybGFuZCBjb2RlLlxuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi4vcGFnZXMvYXBpL2dldEZhcWNvbnRlbnQuanNcIjtcbi8vIFJlLWV4cG9ydCB0aGUgaGFuZGxlciAoc2hvdWxkIGJlIHRoZSBkZWZhdWx0IGV4cG9ydCkuXG5leHBvcnQgZGVmYXVsdCBob2lzdCh1c2VybGFuZCwgXCJkZWZhdWx0XCIpO1xuLy8gUmUtZXhwb3J0IGNvbmZpZy5cbmV4cG9ydCBjb25zdCBjb25maWcgPSBob2lzdCh1c2VybGFuZCwgXCJjb25maWdcIik7XG4vLyBDcmVhdGUgYW5kIGV4cG9ydCB0aGUgcm91dGUgbW9kdWxlIHRoYXQgd2lsbCBiZSBjb25zdW1lZC5cbmV4cG9ydCBjb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBQYWdlc0FQSVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5QQUdFU19BUEksXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9nZXRGYXFjb250ZW50XCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvZ2V0RmFxY29udGVudFwiLFxuICAgICAgICAvLyBUaGUgZm9sbG93aW5nIGFyZW4ndCB1c2VkIGluIHByb2R1Y3Rpb24uXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcIlwiXG4gICAgfSxcbiAgICB1c2VybGFuZFxufSk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhZ2VzLWFwaS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2FgetFaqcontent&preferredRegion=&absolutePagePath=.%2Fpages%2Fapi%2FgetFaqcontent.js&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "(api)/./i18nConfig.js":
/*!***********************!*\
  !*** ./i18nConfig.js ***!
  \***********************/
/***/ ((module) => {

eval("\nconst i18nConfig = {\n    locales: [\n        \"en\",\n        \"es\"\n    ],\n    defaultLocale: \"en\"\n};\nmodule.exports = i18nConfig;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9pMThuQ29uZmlnLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxhQUFhO0lBQ2ZDLFNBQVM7UUFBQztRQUFNO0tBQUs7SUFDckJDLGVBQWU7QUFFbkI7QUFDQUMsT0FBT0MsT0FBTyxHQUFHSiIsInNvdXJjZXMiOlsid2VicGFjazovL2dvdHJpcC1uZXh0Ly4vaTE4bkNvbmZpZy5qcz9mMTBiIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGkxOG5Db25maWcgPSB7XG4gICAgbG9jYWxlczogWydlbicsICdlcyddLFxuICAgIGRlZmF1bHRMb2NhbGU6ICdlbicsXG4gICAgLy9tYXRjaGVyOiAvKCg/IWFwaXxzdGF0aWN8LipcXC4uKnxfbmV4dCkuKikvLFxufVxubW9kdWxlLmV4cG9ydHMgPSBpMThuQ29uZmlnIl0sIm5hbWVzIjpbImkxOG5Db25maWciLCJsb2NhbGVzIiwiZGVmYXVsdExvY2FsZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./i18nConfig.js\n");

/***/ }),

/***/ "(api)/./middleware/auth.js":
/*!****************************!*\
  !*** ./middleware/auth.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ authenticate)\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n\nconst secretKey = process.env.JWT_SECRET;\nfunction authenticate(req, res, next) {\n    const token = req.headers.authorization?.split(\" \")[1];\n    if (!token) {\n        return res.status(401).json({\n            error: \"Unauthorized - Token missing\"\n        });\n    }\n    try {\n        const decoded = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().verify(token, secretKey);\n        req.user = decoded;\n        next();\n    } catch (error) {\n        return res.status(401).json({\n            error: \"Unauthorized - Invalid token\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9taWRkbGV3YXJlL2F1dGguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQStCO0FBRS9CLE1BQU1DLFlBQVlDLFFBQVFDLEdBQUcsQ0FBQ0MsVUFBVTtBQUV6QixTQUFTQyxhQUFhQyxHQUFHLEVBQUVDLEdBQUcsRUFBRUMsSUFBSTtJQUNqRCxNQUFNQyxRQUFRSCxJQUFJSSxPQUFPLENBQUNDLGFBQWEsRUFBRUMsTUFBTSxJQUFJLENBQUMsRUFBRTtJQUV0RCxJQUFJLENBQUNILE9BQU87UUFDVixPQUFPRixJQUFJTSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVDLE9BQU87UUFBK0I7SUFDdEU7SUFFQSxJQUFJO1FBQ0YsTUFBTUMsVUFBVWhCLDBEQUFVLENBQUNTLE9BQU9SO1FBQ2xDSyxJQUFJWSxJQUFJLEdBQUdGO1FBQ1hSO0lBQ0YsRUFBRSxPQUFPTyxPQUFPO1FBQ2QsT0FBT1IsSUFBSU0sTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxPQUFPO1FBQStCO0lBQ3RFO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nb3RyaXAtbmV4dC8uL21pZGRsZXdhcmUvYXV0aC5qcz8xYzljIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBqd3QgZnJvbSBcImpzb253ZWJ0b2tlblwiO1xuXG5jb25zdCBzZWNyZXRLZXkgPSBwcm9jZXNzLmVudi5KV1RfU0VDUkVUO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhdXRoZW50aWNhdGUocmVxLCByZXMsIG5leHQpIHtcbiAgY29uc3QgdG9rZW4gPSByZXEuaGVhZGVycy5hdXRob3JpemF0aW9uPy5zcGxpdChcIiBcIilbMV07XG5cbiAgaWYgKCF0b2tlbikge1xuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMSkuanNvbih7IGVycm9yOiBcIlVuYXV0aG9yaXplZCAtIFRva2VuIG1pc3NpbmdcIiB9KTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgY29uc3QgZGVjb2RlZCA9IGp3dC52ZXJpZnkodG9rZW4sIHNlY3JldEtleSk7XG4gICAgcmVxLnVzZXIgPSBkZWNvZGVkO1xuICAgIG5leHQoKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDEpLmpzb24oeyBlcnJvcjogXCJVbmF1dGhvcml6ZWQgLSBJbnZhbGlkIHRva2VuXCIgfSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJqd3QiLCJzZWNyZXRLZXkiLCJwcm9jZXNzIiwiZW52IiwiSldUX1NFQ1JFVCIsImF1dGhlbnRpY2F0ZSIsInJlcSIsInJlcyIsIm5leHQiLCJ0b2tlbiIsImhlYWRlcnMiLCJhdXRob3JpemF0aW9uIiwic3BsaXQiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJkZWNvZGVkIiwidmVyaWZ5IiwidXNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./middleware/auth.js\n");

/***/ }),

/***/ "(api)/./pages/api/getFaqcontent.js":
/*!************************************!*\
  !*** ./pages/api/getFaqcontent.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gray-matter */ \"gray-matter\");\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _i18nConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/i18nConfig */ \"(api)/./i18nConfig.js\");\n/* harmony import */ var _i18nConfig__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_i18nConfig__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _middleware_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/middleware/auth */ \"(api)/./middleware/auth.js\");\n\n\n\n\n\nconst baseDirectory = process.cwd();\nconst faqDirectory = path__WEBPACK_IMPORTED_MODULE_2___default().join(baseDirectory, \"mdx\", \"faq\");\nasync function handler(req, res) {\n    const { section, locale = _i18nConfig__WEBPACK_IMPORTED_MODULE_3__.defaultLocale } = req.query;\n    (0,_middleware_auth__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(req, res, async ()=>{\n        try {\n            const fullPath = path__WEBPACK_IMPORTED_MODULE_2___default().join(faqDirectory, `${section}.${locale}.md`);\n            const fileContents = await fs__WEBPACK_IMPORTED_MODULE_0__.promises.readFile(fullPath, \"utf8\");\n            const matterResult = gray_matter__WEBPACK_IMPORTED_MODULE_1___default()(fileContents);\n            res.status(200).json({\n                faqContent: matterResult.content\n            });\n        } catch (error) {\n            console.error(`Error reading FAQ content for section ${section} and locale ${locale}:`, error.message);\n            res.status(500).json({\n                error: \"Internal Server Error\"\n            });\n        }\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0RmFxY29udGVudC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQTRDO0FBQ1g7QUFDVDtBQUNxQjtBQUNBO0FBRTdDLE1BQU1NLGdCQUFnQkMsUUFBUUMsR0FBRztBQUNqQyxNQUFNQyxlQUFlTixnREFBUyxDQUFDRyxlQUFlLE9BQU87QUFFdEMsZUFBZUssUUFBUUMsR0FBRyxFQUFFQyxHQUFHO0lBQzVDLE1BQU0sRUFBRUMsT0FBTyxFQUFFQyxTQUFTWCxzREFBYSxFQUFFLEdBQUdRLElBQUlJLEtBQUs7SUFDckRYLDREQUFZQSxDQUFDTyxLQUFLQyxLQUFLO1FBQ3JCLElBQUk7WUFDRixNQUFNSSxXQUFXZCxnREFBUyxDQUFDTSxjQUFjLENBQUMsRUFBRUssUUFBUSxDQUFDLEVBQUVDLE9BQU8sR0FBRyxDQUFDO1lBQ2xFLE1BQU1HLGVBQWUsTUFBTWpCLHdDQUFVQSxDQUFDa0IsUUFBUSxDQUFDRixVQUFVO1lBQ3pELE1BQU1HLGVBQWVsQixrREFBTUEsQ0FBQ2dCO1lBRTVCTCxJQUFJUSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUFFQyxZQUFZSCxhQUFhSSxPQUFPO1lBQUM7UUFDMUQsRUFBRSxPQUFPQyxPQUFPO1lBQ2RDLFFBQVFELEtBQUssQ0FDWCxDQUFDLHNDQUFzQyxFQUFFWCxRQUFRLFlBQVksRUFBRUMsT0FBTyxDQUFDLENBQUMsRUFDeEVVLE1BQU1FLE9BQU87WUFFZmQsSUFBSVEsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRUcsT0FBTztZQUF3QjtRQUN4RDtJQUNGO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nb3RyaXAtbmV4dC8uL3BhZ2VzL2FwaS9nZXRGYXFjb250ZW50LmpzPzUwMzEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcHJvbWlzZXMgYXMgZnNQcm9taXNlcyB9IGZyb20gXCJmc1wiO1xuaW1wb3J0IG1hdHRlciBmcm9tIFwiZ3JheS1tYXR0ZXJcIjtcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgeyBkZWZhdWx0TG9jYWxlIH0gZnJvbSBcIkAvaTE4bkNvbmZpZ1wiO1xuaW1wb3J0IGF1dGhlbnRpY2F0ZSBmcm9tIFwiQC9taWRkbGV3YXJlL2F1dGhcIjtcblxuY29uc3QgYmFzZURpcmVjdG9yeSA9IHByb2Nlc3MuY3dkKCk7XG5jb25zdCBmYXFEaXJlY3RvcnkgPSBwYXRoLmpvaW4oYmFzZURpcmVjdG9yeSwgXCJtZHhcIiwgXCJmYXFcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgY29uc3QgeyBzZWN0aW9uLCBsb2NhbGUgPSBkZWZhdWx0TG9jYWxlIH0gPSByZXEucXVlcnk7XG4gIGF1dGhlbnRpY2F0ZShyZXEsIHJlcywgYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBmdWxsUGF0aCA9IHBhdGguam9pbihmYXFEaXJlY3RvcnksIGAke3NlY3Rpb259LiR7bG9jYWxlfS5tZGApO1xuICAgICAgY29uc3QgZmlsZUNvbnRlbnRzID0gYXdhaXQgZnNQcm9taXNlcy5yZWFkRmlsZShmdWxsUGF0aCwgXCJ1dGY4XCIpO1xuICAgICAgY29uc3QgbWF0dGVyUmVzdWx0ID0gbWF0dGVyKGZpbGVDb250ZW50cyk7XG5cbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgZmFxQ29udGVudDogbWF0dGVyUmVzdWx0LmNvbnRlbnQgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgIGBFcnJvciByZWFkaW5nIEZBUSBjb250ZW50IGZvciBzZWN0aW9uICR7c2VjdGlvbn0gYW5kIGxvY2FsZSAke2xvY2FsZX06YCxcbiAgICAgICAgZXJyb3IubWVzc2FnZVxuICAgICAgKTtcbiAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6IFwiSW50ZXJuYWwgU2VydmVyIEVycm9yXCIgfSk7XG4gICAgfVxuICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJwcm9taXNlcyIsImZzUHJvbWlzZXMiLCJtYXR0ZXIiLCJwYXRoIiwiZGVmYXVsdExvY2FsZSIsImF1dGhlbnRpY2F0ZSIsImJhc2VEaXJlY3RvcnkiLCJwcm9jZXNzIiwiY3dkIiwiZmFxRGlyZWN0b3J5Iiwiam9pbiIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJzZWN0aW9uIiwibG9jYWxlIiwicXVlcnkiLCJmdWxsUGF0aCIsImZpbGVDb250ZW50cyIsInJlYWRGaWxlIiwibWF0dGVyUmVzdWx0Iiwic3RhdHVzIiwianNvbiIsImZhcUNvbnRlbnQiLCJjb250ZW50IiwiZXJyb3IiLCJjb25zb2xlIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/getFaqcontent.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2FgetFaqcontent&preferredRegion=&absolutePagePath=.%2Fpages%2Fapi%2FgetFaqcontent.js&middlewareConfigBase64=e30%3D!")));
module.exports = __webpack_exports__;

})();