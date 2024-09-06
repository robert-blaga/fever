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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Login; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ \"(app-client)/./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../firebase/config */ \"(app-client)/./app/firebase/config.ts\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"(app-client)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/image */ \"(app-client)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _background_webp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./background.webp */ \"(app-client)/./app/login/background.webp\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Login() {\n    _s();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        try {\n            await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.signInWithEmailAndPassword)(_firebase_config__WEBPACK_IMPORTED_MODULE_3__.auth, email, password);\n            router.push(\"/dashboard\");\n        } catch (error) {\n            console.error(\"Error signing in:\", error);\n        // Handle error (e.g., show error message to user)\n        }\n    };\n    const handleGoogleSignIn = async ()=>{\n        const provider = new firebase_auth__WEBPACK_IMPORTED_MODULE_2__.GoogleAuthProvider();\n        try {\n            await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.signInWithPopup)(_firebase_config__WEBPACK_IMPORTED_MODULE_3__.auth, provider);\n            router.push(\"/dashboard\");\n        } catch (error) {\n            console.error(\"Error signing in with Google:\", error);\n        // Handle error (e.g., show error message to user)\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-1 flex items-center justify-center bg-orange-200\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"max-w-md w-full p-6\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-2xl font-bold mb-6 text-center text-red-500\",\n                            children: \"Login\"\n                        }, void 0, false, {\n                            fileName: \"/Users/robertblaga/MyApps/Fever/app/login/page.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            onSubmit: handleSubmit,\n                            className: \"space-y-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"email\",\n                                    placeholder: \"Email\",\n                                    value: email,\n                                    onChange: (e)=>setEmail(e.target.value),\n                                    className: \"w-full p-2 border- border-gray-300 rounded\",\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"/Users/robertblaga/MyApps/Fever/app/login/page.tsx\",\n                                    lineNumber: 45,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"password\",\n                                    placeholder: \"Password\",\n                                    value: password,\n                                    onChange: (e)=>setPassword(e.target.value),\n                                    className: \"w-full p-2 border border-gray-300 rounded\",\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"/Users/robertblaga/MyApps/Fever/app/login/page.tsx\",\n                                    lineNumber: 53,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    type: \"submit\",\n                                    className: \"w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600\",\n                                    children: \"Login\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/robertblaga/MyApps/Fever/app/login/page.tsx\",\n                                    lineNumber: 61,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/robertblaga/MyApps/Fever/app/login/page.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: handleGoogleSignIn,\n                            className: \"w-full mt-4 bg-red-500 text-white p-2 rounded hover:bg-red-600\",\n                            children: \"Sign in with Google\"\n                        }, void 0, false, {\n                            fileName: \"/Users/robertblaga/MyApps/Fever/app/login/page.tsx\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"mt-4 text-sm text-center\",\n                            children: [\n                                \"Don't have an account? \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                    href: \"/signup\",\n                                    className: \"text-blue-500 hover:text-blue-700\",\n                                    children: \"Sign up\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/robertblaga/MyApps/Fever/app/login/page.tsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 36\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/robertblaga/MyApps/Fever/app/login/page.tsx\",\n                            lineNumber: 71,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/robertblaga/MyApps/Fever/app/login/page.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/robertblaga/MyApps/Fever/app/login/page.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"hidden md:flex md:flex-[2] relative\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {\n                    src: _background_webp__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n                    alt: \"Login background\",\n                    layout: \"fill\",\n                    objectFit: \"cover\"\n                }, void 0, false, {\n                    fileName: \"/Users/robertblaga/MyApps/Fever/app/login/page.tsx\",\n                    lineNumber: 79,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/robertblaga/MyApps/Fever/app/login/page.tsx\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/robertblaga/MyApps/Fever/app/login/page.tsx\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, this);\n}\n_s(Login, \"lnLPsXulL3oMypKJCpB5abnr2gw=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Login;\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2xvZ2luL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVnQztBQUMrRDtBQUN0RDtBQUNFO0FBQ2Y7QUFDRTtBQUNpQjtBQUVoQyxTQUFTUzs7SUFDdEIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdYLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ1ksVUFBVUMsWUFBWSxHQUFHYiwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNYyxTQUFTVCwwREFBU0E7SUFFeEIsTUFBTVUsZUFBZSxPQUFPQztRQUMxQkEsRUFBRUM7UUFDRixJQUFJO1lBQ0YsTUFBTWhCLHlFQUEwQkEsQ0FBQ0csa0RBQUlBLEVBQUVNLE9BQU9FO1lBQzlDRSxPQUFPSSxLQUFLO1FBQ2QsRUFBRSxPQUFPQyxPQUFPO1lBQ2RDLFFBQVFELE1BQU0scUJBQXFCQTtRQUNuQyxrREFBa0Q7UUFDcEQ7SUFDRjtJQUVBLE1BQU1FLHFCQUFxQjtRQUN6QixNQUFNQyxXQUFXLElBQUluQiw2REFBa0JBO1FBQ3ZDLElBQUk7WUFDRixNQUFNRCw4REFBZUEsQ0FBQ0Usa0RBQUlBLEVBQUVrQjtZQUM1QlIsT0FBT0ksS0FBSztRQUNkLEVBQUUsT0FBT0MsT0FBTztZQUNkQyxRQUFRRCxNQUFNLGlDQUFpQ0E7UUFDL0Msa0RBQWtEO1FBQ3BEO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ0k7UUFBSUMsV0FBVTs7MEJBRWIsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNDOzRCQUFHRCxXQUFVO3NDQUFtRDs7Ozs7O3NDQUNqRSw4REFBQ0U7NEJBQUtDLFVBQVVaOzRCQUFjUyxXQUFVOzs4Q0FDdEMsOERBQUNJO29DQUNDQyxNQUFLO29DQUNMQyxhQUFZO29DQUNaQyxPQUFPckI7b0NBQ1BzQixVQUFVLENBQUNoQixJQUFNTCxTQUFTSyxFQUFFaUIsT0FBT0Y7b0NBQ25DUCxXQUFVO29DQUNWVSxRQUFROzs7Ozs7OENBRVYsOERBQUNOO29DQUNDQyxNQUFLO29DQUNMQyxhQUFZO29DQUNaQyxPQUFPbkI7b0NBQ1BvQixVQUFVLENBQUNoQixJQUFNSCxZQUFZRyxFQUFFaUIsT0FBT0Y7b0NBQ3RDUCxXQUFVO29DQUNWVSxRQUFROzs7Ozs7OENBRVYsOERBQUNDO29DQUFPTixNQUFLO29DQUFTTCxXQUFVOzhDQUE4RDs7Ozs7Ozs7Ozs7O3NDQUloRyw4REFBQ1c7NEJBQ0NDLFNBQVNmOzRCQUNURyxXQUFVO3NDQUNYOzs7Ozs7c0NBR0QsOERBQUNhOzRCQUFFYixXQUFVOztnQ0FBMkI7OENBQ2YsOERBQUNsQixrREFBSUE7b0NBQUNnQyxNQUFLO29DQUFVZCxXQUFVOzhDQUFvQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBTWhHLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ2pCLG1EQUFLQTtvQkFDSmdDLEtBQUsvQix3REFBZUE7b0JBQ3BCZ0MsS0FBSTtvQkFDSkMsUUFBTztvQkFDUEMsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLcEI7R0E3RXdCakM7O1FBR1BKLHNEQUFTQTs7O0tBSEZJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9sb2dpbi9wYWdlLnRzeD80OTBhIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQsIHNpZ25JbldpdGhQb3B1cCwgR29vZ2xlQXV0aFByb3ZpZGVyIH0gZnJvbSAnZmlyZWJhc2UvYXV0aCdcbmltcG9ydCB7IGF1dGggfSBmcm9tICcuLi9maXJlYmFzZS9jb25maWcnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L25hdmlnYXRpb24nXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBiYWNrZ3JvdW5kSW1hZ2UgZnJvbSAnLi9iYWNrZ3JvdW5kLndlYnAnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luKCkge1xuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlOiBSZWFjdC5Gb3JtRXZlbnQpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICB0cnkge1xuICAgICAgYXdhaXQgc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoYXV0aCwgZW1haWwsIHBhc3N3b3JkKVxuICAgICAgcm91dGVyLnB1c2goJy9kYXNoYm9hcmQnKVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBzaWduaW5nIGluOicsIGVycm9yKVxuICAgICAgLy8gSGFuZGxlIGVycm9yIChlLmcuLCBzaG93IGVycm9yIG1lc3NhZ2UgdG8gdXNlcilcbiAgICB9XG4gIH1cblxuICBjb25zdCBoYW5kbGVHb29nbGVTaWduSW4gPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgR29vZ2xlQXV0aFByb3ZpZGVyKClcbiAgICB0cnkge1xuICAgICAgYXdhaXQgc2lnbkluV2l0aFBvcHVwKGF1dGgsIHByb3ZpZGVyKVxuICAgICAgcm91dGVyLnB1c2goJy9kYXNoYm9hcmQnKVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBzaWduaW5nIGluIHdpdGggR29vZ2xlOicsIGVycm9yKVxuICAgICAgLy8gSGFuZGxlIGVycm9yIChlLmcuLCBzaG93IGVycm9yIG1lc3NhZ2UgdG8gdXNlcilcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBoLXNjcmVlblwiPlxuICAgICAgey8qIExlZnQgc2lkZSAtIExvZ2luIEZvcm0gKDEvMyB3aWR0aCkgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1vcmFuZ2UtMjAwXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctbWQgdy1mdWxsIHAtNlwiPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgbWItNiB0ZXh0LWNlbnRlciB0ZXh0LXJlZC01MDBcIj5Mb2dpbjwvaDE+XG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwic3BhY2UteS00XCI+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbFwiXG4gICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBwLTIgYm9yZGVyLSBib3JkZXItZ3JheS0zMDAgcm91bmRlZFwiXG4gICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcC0yIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZFwiXG4gICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwidy1mdWxsIGJnLWJsdWUtNTAwIHRleHQtd2hpdGUgcC0yIHJvdW5kZWQgaG92ZXI6YmctYmx1ZS02MDBcIj5cbiAgICAgICAgICAgICAgTG9naW5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVHb29nbGVTaWduSW59XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgbXQtNCBiZy1yZWQtNTAwIHRleHQtd2hpdGUgcC0yIHJvdW5kZWQgaG92ZXI6YmctcmVkLTYwMFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgU2lnbiBpbiB3aXRoIEdvb2dsZVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTQgdGV4dC1zbSB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgRG9uJ3QgaGF2ZSBhbiBhY2NvdW50PyA8TGluayBocmVmPVwiL3NpZ251cFwiIGNsYXNzTmFtZT1cInRleHQtYmx1ZS01MDAgaG92ZXI6dGV4dC1ibHVlLTcwMFwiPlNpZ24gdXA8L0xpbms+XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogUmlnaHQgc2lkZSAtIEJhY2tncm91bmQgSW1hZ2UgKDIvMyB3aWR0aCkgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBtZDpmbGV4IG1kOmZsZXgtWzJdIHJlbGF0aXZlXCI+XG4gICAgICAgIDxJbWFnZVxuICAgICAgICAgIHNyYz17YmFja2dyb3VuZEltYWdlfVxuICAgICAgICAgIGFsdD1cIkxvZ2luIGJhY2tncm91bmRcIlxuICAgICAgICAgIGxheW91dD1cImZpbGxcIlxuICAgICAgICAgIG9iamVjdEZpdD1cImNvdmVyXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwic2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJzaWduSW5XaXRoUG9wdXAiLCJHb29nbGVBdXRoUHJvdmlkZXIiLCJhdXRoIiwidXNlUm91dGVyIiwiTGluayIsIkltYWdlIiwiYmFja2dyb3VuZEltYWdlIiwiTG9naW4iLCJlbWFpbCIsInNldEVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsInJvdXRlciIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInB1c2giLCJlcnJvciIsImNvbnNvbGUiLCJoYW5kbGVHb29nbGVTaWduSW4iLCJwcm92aWRlciIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiZm9ybSIsIm9uU3VibWl0IiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwicmVxdWlyZWQiLCJidXR0b24iLCJvbkNsaWNrIiwicCIsImhyZWYiLCJzcmMiLCJhbHQiLCJsYXlvdXQiLCJvYmplY3RGaXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./app/login/page.tsx\n"));

/***/ })

});