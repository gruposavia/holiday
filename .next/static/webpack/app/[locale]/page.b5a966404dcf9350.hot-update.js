/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/[locale]/page",{

/***/ "(app-pages-browser)/./locales lazy recursive ^\\.\\/.*\\.json$":
/*!*******************************************************!*\
  !*** ./locales/ lazy ^\.\/.*\.json$ namespace object ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./en/hero.json": [
		"(app-pages-browser)/./locales/en/hero.json",
		"_app-pages-browser_locales_en_hero_json"
	],
	"./en/main-filter-search.json": [
		"(app-pages-browser)/./locales/en/main-filter-search.json",
		"_app-pages-browser_locales_en_main-filter-search_json"
	],
	"./en/main-menu.json": [
		"(app-pages-browser)/./locales/en/main-menu.json",
		"_app-pages-browser_locales_en_main-menu_json"
	],
	"./es/hero.json": [
		"(app-pages-browser)/./locales/es/hero.json",
		"_app-pages-browser_locales_es_hero_json"
	],
	"./es/main-filter-search.json": [
		"(app-pages-browser)/./locales/es/main-filter-search.json",
		"_app-pages-browser_locales_es_main-filter-search_json"
	],
	"./es/main-menu.json": [
		"(app-pages-browser)/./locales/es/main-menu.json",
		"_app-pages-browser_locales_es_main-menu_json"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__.t(id, 3 | 16);
	});
}
webpackAsyncContext.keys = function() { return Object.keys(map); };
webpackAsyncContext.id = "(app-pages-browser)/./locales lazy recursive ^\\.\\/.*\\.json$";
module.exports = webpackAsyncContext;

/***/ })

});