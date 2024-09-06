"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/login/page",{

/***/ "(app-client)/./app/login/page.tsx":
/*!****************************!*\
  !*** ./app/login/page.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Login; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ \"(app-client)/./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../firebase/config */ \"(app-client)/./app/firebase/config.ts\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"(app-client)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/image */ \"(app-client)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _background_webp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./background.webp */ \"(app-client)/./app/login/background.webp\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Login() {\n    _s();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        try {\n            await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.signInWithEmailAndPassword)(_firebase_config__WEBPACK_IMPORTED_MODULE_3__.auth, email, password);\n            router.push(\"/dashboard\");\n        } catch (error) {\n            console.error(\"Error signing in:\", error);\n        // Handle error (e.g., show error message to user)\n        }\n    };\n    const handleGoogleSignIn = async ()=>{\n        const provider = new firebase_auth__WEBPACK_IMPORTED_MODULE_2__.GoogleAuthProvider();\n        try {\n            await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.signInWithPopup)(_firebase_config__WEBPACK_IMPORTED_MODULE_3__.auth, provider);\n            router.push(\"/dashboard\");\n        } catch (error) {\n            console.error(\"Error signing in with Google:\", error);\n        // Handle error (e.g., show error message to user)\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-1 flex items-center justify-center bg-orange-950\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"max-w-md w-full p-6\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-xl font-bold mb-6 text-left text-orange-100\",\n                            children: \"Login\"\n                        }, void 0, false, {\n                            fileName: \"/Users/robertblaga/MyApps/Fever/app/login/page.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            onSubmit: handleSubmit,\n                            className: \"space-y-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"email\",\n                                    placeholder: \"Email\",\n                                    value: email,\n                                    onChange: (e)=>setEmail(e.target.value),\n                                    className: \"w-full p-4 border-none rounded bg-orange-100 text-orange-950\",\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"/Users/robertblaga/MyApps/Fever/app/login/page.tsx\",\n                                    lineNumber: 45,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"password\",\n                                    placeholder: \"Password\",\n                                    value: password,\n                                    onChange: (e)=>setPassword(e.target.value),\n                                    className: \"w-full p-4 border-none rounded bg-orange-100 text-orange-950\",\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"/Users/robertblaga/MyApps/Fever/app/login/page.tsx\",\n                                    lineNumber: 53,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    type: \"submit\",\n                                    className: \"w-full bg-orange-700 text-white p-2 rounded hover:bg-orange-900\",\n                                    children: \"Login\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/robertblaga/MyApps/Fever/app/login/page.tsx\",\n                                    lineNumber: 61,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/robertblaga/MyApps/Fever/app/login/page.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: handleGoogleSignIn,\n                            className: \"w-full mt-4 bg-red-500 text-white p-2 rounded hover:bg-red-600\",\n                            children: \"Sign in with Google\"\n                        }, void 0, false, {\n                            fileName: \"/Users/robertblaga/MyApps/Fever/app/login/page.tsx\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"mt-4 text-sm text-center text-orange-950\",\n                            children: [\n                                \"Don't have an account? \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                    href: \"/signup\",\n                                    className: \"text-orange-700 hover:text-orange-900\",\n                                    children: \"Sign up\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/robertblaga/MyApps/Fever/app/login/page.tsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 36\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/robertblaga/MyApps/Fever/app/login/page.tsx\",\n                            lineNumber: 71,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/robertblaga/MyApps/Fever/app/login/page.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/robertblaga/MyApps/Fever/app/login/page.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"hidden md:flex md:flex-[2] relative\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {\n                    src: _background_webp__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n                    alt: \"Login background\",\n                    layout: \"fill\",\n                    objectFit: \"cover\"\n                }, void 0, false, {\n                    fileName: \"/Users/robertblaga/MyApps/Fever/app/login/page.tsx\",\n                    lineNumber: 79,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/robertblaga/MyApps/Fever/app/login/page.tsx\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/robertblaga/MyApps/Fever/app/login/page.tsx\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, this);\n}\n_s(Login, \"lnLPsXulL3oMypKJCpB5abnr2gw=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Login;\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2xvZ2luL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVnQztBQUMrRDtBQUN0RDtBQUNFO0FBQ2Y7QUFDRTtBQUNpQjtBQUVoQyxTQUFTUzs7SUFDdEIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdYLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ1ksVUFBVUMsWUFBWSxHQUFHYiwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNYyxTQUFTVCwwREFBU0E7SUFFeEIsTUFBTVUsZUFBZSxPQUFPQztRQUMxQkEsRUFBRUM7UUFDRixJQUFJO1lBQ0YsTUFBTWhCLHlFQUEwQkEsQ0FBQ0csa0RBQUlBLEVBQUVNLE9BQU9FO1lBQzlDRSxPQUFPSSxLQUFLO1FBQ2QsRUFBRSxPQUFPQyxPQUFPO1lBQ2RDLFFBQVFELE1BQU0scUJBQXFCQTtRQUNuQyxrREFBa0Q7UUFDcEQ7SUFDRjtJQUVBLE1BQU1FLHFCQUFxQjtRQUN6QixNQUFNQyxXQUFXLElBQUluQiw2REFBa0JBO1FBQ3ZDLElBQUk7WUFDRixNQUFNRCw4REFBZUEsQ0FBQ0Usa0RBQUlBLEVBQUVrQjtZQUM1QlIsT0FBT0ksS0FBSztRQUNkLEVBQUUsT0FBT0MsT0FBTztZQUNkQyxRQUFRRCxNQUFNLGlDQUFpQ0E7UUFDL0Msa0RBQWtEO1FBQ3BEO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ0k7UUFBSUMsV0FBVTs7MEJBRWIsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNDOzRCQUFHRCxXQUFVO3NDQUFtRDs7Ozs7O3NDQUNqRSw4REFBQ0U7NEJBQUtDLFVBQVVaOzRCQUFjUyxXQUFVOzs4Q0FDdEMsOERBQUNJO29DQUNDQyxNQUFLO29DQUNMQyxhQUFZO29DQUNaQyxPQUFPckI7b0NBQ1BzQixVQUFVLENBQUNoQixJQUFNTCxTQUFTSyxFQUFFaUIsT0FBT0Y7b0NBQ25DUCxXQUFVO29DQUNWVSxRQUFROzs7Ozs7OENBRVYsOERBQUNOO29DQUNDQyxNQUFLO29DQUNMQyxhQUFZO29DQUNaQyxPQUFPbkI7b0NBQ1BvQixVQUFVLENBQUNoQixJQUFNSCxZQUFZRyxFQUFFaUIsT0FBT0Y7b0NBQ3RDUCxXQUFVO29DQUNWVSxRQUFROzs7Ozs7OENBRVYsOERBQUNDO29DQUFPTixNQUFLO29DQUFTTCxXQUFVOzhDQUFrRTs7Ozs7Ozs7Ozs7O3NDQUlwRyw4REFBQ1c7NEJBQ0NDLFNBQVNmOzRCQUNURyxXQUFVO3NDQUNYOzs7Ozs7c0NBR0QsOERBQUNhOzRCQUFFYixXQUFVOztnQ0FBMkM7OENBQy9CLDhEQUFDbEIsa0RBQUlBO29DQUFDZ0MsTUFBSztvQ0FBVWQsV0FBVTs4Q0FBd0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQU1wRyw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNqQixtREFBS0E7b0JBQ0pnQyxLQUFLL0Isd0RBQWVBO29CQUNwQmdDLEtBQUk7b0JBQ0pDLFFBQU87b0JBQ1BDLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3BCO0dBN0V3QmpDOztRQUdQSixzREFBU0E7OztLQUhGSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvbG9naW4vcGFnZS50c3g/NDkwYSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcblxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkLCBzaWduSW5XaXRoUG9wdXAsIEdvb2dsZUF1dGhQcm92aWRlciB9IGZyb20gJ2ZpcmViYXNlL2F1dGgnXG5pbXBvcnQgeyBhdXRoIH0gZnJvbSAnLi4vZmlyZWJhc2UvY29uZmlnJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgYmFja2dyb3VuZEltYWdlIGZyb20gJy4vYmFja2dyb3VuZC53ZWJwJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbigpIHtcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZTogUmVhY3QuRm9ybUV2ZW50KSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKGF1dGgsIGVtYWlsLCBwYXNzd29yZClcbiAgICAgIHJvdXRlci5wdXNoKCcvZGFzaGJvYXJkJylcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3Igc2lnbmluZyBpbjonLCBlcnJvcilcbiAgICAgIC8vIEhhbmRsZSBlcnJvciAoZS5nLiwgc2hvdyBlcnJvciBtZXNzYWdlIHRvIHVzZXIpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgaGFuZGxlR29vZ2xlU2lnbkluID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IEdvb2dsZUF1dGhQcm92aWRlcigpXG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHNpZ25JbldpdGhQb3B1cChhdXRoLCBwcm92aWRlcilcbiAgICAgIHJvdXRlci5wdXNoKCcvZGFzaGJvYXJkJylcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3Igc2lnbmluZyBpbiB3aXRoIEdvb2dsZTonLCBlcnJvcilcbiAgICAgIC8vIEhhbmRsZSBlcnJvciAoZS5nLiwgc2hvdyBlcnJvciBtZXNzYWdlIHRvIHVzZXIpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaC1zY3JlZW5cIj5cbiAgICAgIHsvKiBMZWZ0IHNpZGUgLSBMb2dpbiBGb3JtICgxLzMgd2lkdGgpICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYmctb3JhbmdlLTk1MFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LW1kIHctZnVsbCBwLTZcIj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGQgbWItNiB0ZXh0LWxlZnQgdGV4dC1vcmFuZ2UtMTAwXCI+TG9naW48L2gxPlxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cInNwYWNlLXktNFwiPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWxcIlxuICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcC00IGJvcmRlci1ub25lIHJvdW5kZWQgYmctb3JhbmdlLTEwMCB0ZXh0LW9yYW5nZS05NTBcIlxuICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHAtNCBib3JkZXItbm9uZSByb3VuZGVkIGJnLW9yYW5nZS0xMDAgdGV4dC1vcmFuZ2UtOTUwXCJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctb3JhbmdlLTcwMCB0ZXh0LXdoaXRlIHAtMiByb3VuZGVkIGhvdmVyOmJnLW9yYW5nZS05MDBcIj5cbiAgICAgICAgICAgICAgTG9naW5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVHb29nbGVTaWduSW59XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgbXQtNCBiZy1yZWQtNTAwIHRleHQtd2hpdGUgcC0yIHJvdW5kZWQgaG92ZXI6YmctcmVkLTYwMFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgU2lnbiBpbiB3aXRoIEdvb2dsZVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTQgdGV4dC1zbSB0ZXh0LWNlbnRlciB0ZXh0LW9yYW5nZS05NTBcIj5cbiAgICAgICAgICAgIERvbid0IGhhdmUgYW4gYWNjb3VudD8gPExpbmsgaHJlZj1cIi9zaWdudXBcIiBjbGFzc05hbWU9XCJ0ZXh0LW9yYW5nZS03MDAgaG92ZXI6dGV4dC1vcmFuZ2UtOTAwXCI+U2lnbiB1cDwvTGluaz5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiBSaWdodCBzaWRlIC0gQmFja2dyb3VuZCBJbWFnZSAoMi8zIHdpZHRoKSAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIG1kOmZsZXggbWQ6ZmxleC1bMl0gcmVsYXRpdmVcIj5cbiAgICAgICAgPEltYWdlXG4gICAgICAgICAgc3JjPXtiYWNrZ3JvdW5kSW1hZ2V9XG4gICAgICAgICAgYWx0PVwiTG9naW4gYmFja2dyb3VuZFwiXG4gICAgICAgICAgbGF5b3V0PVwiZmlsbFwiXG4gICAgICAgICAgb2JqZWN0Rml0PVwiY292ZXJcIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn0iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCIsInNpZ25JbldpdGhQb3B1cCIsIkdvb2dsZUF1dGhQcm92aWRlciIsImF1dGgiLCJ1c2VSb3V0ZXIiLCJMaW5rIiwiSW1hZ2UiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJMb2dpbiIsImVtYWlsIiwic2V0RW1haWwiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwicm91dGVyIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwicHVzaCIsImVycm9yIiwiY29uc29sZSIsImhhbmRsZUdvb2dsZVNpZ25JbiIsInByb3ZpZGVyIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJmb3JtIiwib25TdWJtaXQiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJyZXF1aXJlZCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJwIiwiaHJlZiIsInNyYyIsImFsdCIsImxheW91dCIsIm9iamVjdEZpdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./app/login/page.tsx\n"));

/***/ })

});