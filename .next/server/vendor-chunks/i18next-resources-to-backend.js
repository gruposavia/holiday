"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/i18next-resources-to-backend";
exports.ids = ["vendor-chunks/i18next-resources-to-backend"];
exports.modules = {

/***/ "(ssr)/./node_modules/i18next-resources-to-backend/dist/esm/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/i18next-resources-to-backend/dist/esm/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ resourcesToBackend)\n/* harmony export */ });\nvar resourcesToBackend = function resourcesToBackend(res) {\n  return {\n    type: 'backend',\n    init: function init(services, backendOptions, i18nextOptions) {},\n    read: function read(language, namespace, callback) {\n      if (typeof res === 'function') {\n        if (res.length < 3) {\n          try {\n            var r = res(language, namespace);\n            if (r && typeof r.then === 'function') {\n              r.then(function (data) {\n                return callback(null, data && data.default || data);\n              }).catch(callback);\n            } else {\n              callback(null, r);\n            }\n          } catch (err) {\n            callback(err);\n          }\n          return;\n        }\n        res(language, namespace, callback);\n        return;\n      }\n      callback(null, res && res[language] && res[language][namespace]);\n    }\n  };\n};\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaTE4bmV4dC1yZXNvdXJjZXMtdG8tYmFja2VuZC9kaXN0L2VzbS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0Esb0VBQW9FO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2YsY0FBYztBQUNkO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFeUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nb3RyaXAtbmV4dC8uL25vZGVfbW9kdWxlcy9pMThuZXh0LXJlc291cmNlcy10by1iYWNrZW5kL2Rpc3QvZXNtL2luZGV4LmpzPzhmMWQiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlc291cmNlc1RvQmFja2VuZCA9IGZ1bmN0aW9uIHJlc291cmNlc1RvQmFja2VuZChyZXMpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnYmFja2VuZCcsXG4gICAgaW5pdDogZnVuY3Rpb24gaW5pdChzZXJ2aWNlcywgYmFja2VuZE9wdGlvbnMsIGkxOG5leHRPcHRpb25zKSB7fSxcbiAgICByZWFkOiBmdW5jdGlvbiByZWFkKGxhbmd1YWdlLCBuYW1lc3BhY2UsIGNhbGxiYWNrKSB7XG4gICAgICBpZiAodHlwZW9mIHJlcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBpZiAocmVzLmxlbmd0aCA8IDMpIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIHIgPSByZXMobGFuZ3VhZ2UsIG5hbWVzcGFjZSk7XG4gICAgICAgICAgICBpZiAociAmJiB0eXBlb2Ygci50aGVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgIHIudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhudWxsLCBkYXRhICYmIGRhdGEuZGVmYXVsdCB8fCBkYXRhKTtcbiAgICAgICAgICAgICAgfSkuY2F0Y2goY2FsbGJhY2spO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBjYWxsYmFjayhlcnIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcmVzKGxhbmd1YWdlLCBuYW1lc3BhY2UsIGNhbGxiYWNrKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY2FsbGJhY2sobnVsbCwgcmVzICYmIHJlc1tsYW5ndWFnZV0gJiYgcmVzW2xhbmd1YWdlXVtuYW1lc3BhY2VdKTtcbiAgICB9XG4gIH07XG59O1xuXG5leHBvcnQgeyByZXNvdXJjZXNUb0JhY2tlbmQgYXMgZGVmYXVsdCB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/i18next-resources-to-backend/dist/esm/index.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/i18next-resources-to-backend/dist/esm/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/i18next-resources-to-backend/dist/esm/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ resourcesToBackend)\n/* harmony export */ });\nvar resourcesToBackend = function resourcesToBackend(res) {\n    return {\n        type: \"backend\",\n        init: function init(services, backendOptions, i18nextOptions) {},\n        read: function read(language, namespace, callback) {\n            if (typeof res === \"function\") {\n                if (res.length < 3) {\n                    try {\n                        var r = res(language, namespace);\n                        if (r && typeof r.then === \"function\") {\n                            r.then(function(data) {\n                                return callback(null, data && data.default || data);\n                            }).catch(callback);\n                        } else {\n                            callback(null, r);\n                        }\n                    } catch (err) {\n                        callback(err);\n                    }\n                    return;\n                }\n                res(language, namespace, callback);\n                return;\n            }\n            callback(null, res && res[language] && res[language][namespace]);\n        }\n    };\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvaTE4bmV4dC1yZXNvdXJjZXMtdG8tYmFja2VuZC9kaXN0L2VzbS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsSUFBSUEscUJBQXFCLFNBQVNBLG1CQUFtQkMsR0FBRztJQUN0RCxPQUFPO1FBQ0xDLE1BQU07UUFDTkMsTUFBTSxTQUFTQSxLQUFLQyxRQUFRLEVBQUVDLGNBQWMsRUFBRUMsY0FBYyxHQUFHO1FBQy9EQyxNQUFNLFNBQVNBLEtBQUtDLFFBQVEsRUFBRUMsU0FBUyxFQUFFQyxRQUFRO1lBQy9DLElBQUksT0FBT1QsUUFBUSxZQUFZO2dCQUM3QixJQUFJQSxJQUFJVSxNQUFNLEdBQUcsR0FBRztvQkFDbEIsSUFBSTt3QkFDRixJQUFJQyxJQUFJWCxJQUFJTyxVQUFVQzt3QkFDdEIsSUFBSUcsS0FBSyxPQUFPQSxFQUFFQyxJQUFJLEtBQUssWUFBWTs0QkFDckNELEVBQUVDLElBQUksQ0FBQyxTQUFVQyxJQUFJO2dDQUNuQixPQUFPSixTQUFTLE1BQU1JLFFBQVFBLEtBQUtDLE9BQU8sSUFBSUQ7NEJBQ2hELEdBQUdFLEtBQUssQ0FBQ047d0JBQ1gsT0FBTzs0QkFDTEEsU0FBUyxNQUFNRTt3QkFDakI7b0JBQ0YsRUFBRSxPQUFPSyxLQUFLO3dCQUNaUCxTQUFTTztvQkFDWDtvQkFDQTtnQkFDRjtnQkFDQWhCLElBQUlPLFVBQVVDLFdBQVdDO2dCQUN6QjtZQUNGO1lBQ0FBLFNBQVMsTUFBTVQsT0FBT0EsR0FBRyxDQUFDTyxTQUFTLElBQUlQLEdBQUcsQ0FBQ08sU0FBUyxDQUFDQyxVQUFVO1FBQ2pFO0lBQ0Y7QUFDRjtBQUV5QyIsInNvdXJjZXMiOlsid2VicGFjazovL2dvdHJpcC1uZXh0Ly4vbm9kZV9tb2R1bGVzL2kxOG5leHQtcmVzb3VyY2VzLXRvLWJhY2tlbmQvZGlzdC9lc20vaW5kZXguanM/M2RkNSJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgcmVzb3VyY2VzVG9CYWNrZW5kID0gZnVuY3Rpb24gcmVzb3VyY2VzVG9CYWNrZW5kKHJlcykge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdiYWNrZW5kJyxcbiAgICBpbml0OiBmdW5jdGlvbiBpbml0KHNlcnZpY2VzLCBiYWNrZW5kT3B0aW9ucywgaTE4bmV4dE9wdGlvbnMpIHt9LFxuICAgIHJlYWQ6IGZ1bmN0aW9uIHJlYWQobGFuZ3VhZ2UsIG5hbWVzcGFjZSwgY2FsbGJhY2spIHtcbiAgICAgIGlmICh0eXBlb2YgcmVzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGlmIChyZXMubGVuZ3RoIDwgMykge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgciA9IHJlcyhsYW5ndWFnZSwgbmFtZXNwYWNlKTtcbiAgICAgICAgICAgIGlmIChyICYmIHR5cGVvZiByLnRoZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgci50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKG51bGwsIGRhdGEgJiYgZGF0YS5kZWZhdWx0IHx8IGRhdGEpO1xuICAgICAgICAgICAgICB9KS5jYXRjaChjYWxsYmFjayk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjYWxsYmFjayhudWxsLCByKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKGVycik7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICByZXMobGFuZ3VhZ2UsIG5hbWVzcGFjZSwgY2FsbGJhY2spO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjYWxsYmFjayhudWxsLCByZXMgJiYgcmVzW2xhbmd1YWdlXSAmJiByZXNbbGFuZ3VhZ2VdW25hbWVzcGFjZV0pO1xuICAgIH1cbiAgfTtcbn07XG5cbmV4cG9ydCB7IHJlc291cmNlc1RvQmFja2VuZCBhcyBkZWZhdWx0IH07XG4iXSwibmFtZXMiOlsicmVzb3VyY2VzVG9CYWNrZW5kIiwicmVzIiwidHlwZSIsImluaXQiLCJzZXJ2aWNlcyIsImJhY2tlbmRPcHRpb25zIiwiaTE4bmV4dE9wdGlvbnMiLCJyZWFkIiwibGFuZ3VhZ2UiLCJuYW1lc3BhY2UiLCJjYWxsYmFjayIsImxlbmd0aCIsInIiLCJ0aGVuIiwiZGF0YSIsImRlZmF1bHQiLCJjYXRjaCIsImVyciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/i18next-resources-to-backend/dist/esm/index.js\n");

/***/ })

};
;