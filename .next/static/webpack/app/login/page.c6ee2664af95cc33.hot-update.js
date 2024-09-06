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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Login; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ \"(app-client)/./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../firebase/config */ \"(app-client)/./app/firebase/config.ts\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"(app-client)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Login() {\n    _s();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        try {\n            await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.signInWithEmailAndPassword)(_firebase_config__WEBPACK_IMPORTED_MODULE_3__.auth, email, password);\n            router.push(\"/dashboard\");\n        } catch (error) {\n            console.error(\"Error signing in:\", error);\n        // Handle error (e.g., show error message to user)\n        }\n    };\n    const handleGoogleSignIn = async ()=>{\n        const provider = new firebase_auth__WEBPACK_IMPORTED_MODULE_2__.GoogleAuthProvider();\n        try {\n            await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.signInWithPopup)(_firebase_config__WEBPACK_IMPORTED_MODULE_3__.auth, provider);\n            router.push(\"/dashboard\");\n        } catch (error) {\n            console.error(\"Error signing in with Google:\", error);\n        // Handle error (e.g., show error message to user)\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex min-h-screen flex-col items-center justify-center p-4 sm:p-8 md:p-24 bg-cover bg-center bg-no-repeat\",\n        style: {\n            backgroundImage: \"url('/background.webp')\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-white bg-opacity-80 p-8 rounded-lg shadow-md w-full max-w-md\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-2xl font-bold mb-4 text-center\",\n                    children: \"Login\"\n                }, void 0, false, {\n                    fileName: \"/Users/robertblaga/MyApps/Fever/app/login/page.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit,\n                    className: \"w-full\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"email\",\n                            placeholder: \"Email\",\n                            value: email,\n                            onChange: (e)=>setEmail(e.target.value),\n                            className: \"w-full p-2 mb-4 border rounded\",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"/Users/robertblaga/MyApps/Fever/app/login/page.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"password\",\n                            placeholder: \"Password\",\n                            value: password,\n                            onChange: (e)=>setPassword(e.target.value),\n                            className: \"w-full p-2 mb-4 border rounded\",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"/Users/robertblaga/MyApps/Fever/app/login/page.tsx\",\n                            lineNumber: 51,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            className: \"w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-4\",\n                            children: \"Login\"\n                        }, void 0, false, {\n                            fileName: \"/Users/robertblaga/MyApps/Fever/app/login/page.tsx\",\n                            lineNumber: 59,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/robertblaga/MyApps/Fever/app/login/page.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: handleGoogleSignIn,\n                    className: \"w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4\",\n                    children: \"Sign in with Google\"\n                }, void 0, false, {\n                    fileName: \"/Users/robertblaga/MyApps/Fever/app/login/page.tsx\",\n                    lineNumber: 63,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"mt-4 text-sm text-center\",\n                    children: [\n                        \"Don't have an account? \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                            href: \"/signup\",\n                            className: \"text-green-500 hover:text-green-700\",\n                            children: \"Sign up\"\n                        }, void 0, false, {\n                            fileName: \"/Users/robertblaga/MyApps/Fever/app/login/page.tsx\",\n                            lineNumber: 70,\n                            columnNumber: 34\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/robertblaga/MyApps/Fever/app/login/page.tsx\",\n                    lineNumber: 69,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/robertblaga/MyApps/Fever/app/login/page.tsx\",\n            lineNumber: 40,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/robertblaga/MyApps/Fever/app/login/page.tsx\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, this);\n}\n_s(Login, \"lnLPsXulL3oMypKJCpB5abnr2gw=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Login;\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2xvZ2luL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUVnQztBQUMrRDtBQUN0RDtBQUNFO0FBQ2Y7QUFJYixTQUFTTzs7SUFDdEIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdULCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ1UsVUFBVUMsWUFBWSxHQUFHWCwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNWSxTQUFTUCwwREFBU0E7SUFFeEIsTUFBTVEsZUFBZSxPQUFPQztRQUMxQkEsRUFBRUM7UUFDRixJQUFJO1lBQ0YsTUFBTWQseUVBQTBCQSxDQUFDRyxrREFBSUEsRUFBRUksT0FBT0U7WUFDOUNFLE9BQU9JLEtBQUs7UUFDZCxFQUFFLE9BQU9DLE9BQU87WUFDZEMsUUFBUUQsTUFBTSxxQkFBcUJBO1FBQ25DLGtEQUFrRDtRQUNwRDtJQUNGO0lBRUEsTUFBTUUscUJBQXFCO1FBQ3pCLE1BQU1DLFdBQVcsSUFBSWpCLDZEQUFrQkE7UUFDdkMsSUFBSTtZQUNGLE1BQU1ELDhEQUFlQSxDQUFDRSxrREFBSUEsRUFBRWdCO1lBQzVCUixPQUFPSSxLQUFLO1FBQ2QsRUFBRSxPQUFPQyxPQUFPO1lBQ2RDLFFBQVFELE1BQU0saUNBQWlDQTtRQUMvQyxrREFBa0Q7UUFDcEQ7SUFDRjtJQUVBLHFCQUNFLDhEQUFDSTtRQUFJQyxXQUFVO1FBQTRHQyxPQUFPO1lBQUVDLGlCQUFpQjtRQUEwQjtrQkFDN0ssNEVBQUNIO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDRztvQkFBR0gsV0FBVTs4QkFBc0M7Ozs7Ozs4QkFDcEQsOERBQUNJO29CQUFLQyxVQUFVZDtvQkFBY1MsV0FBVTs7c0NBQ3RDLDhEQUFDTTs0QkFDQ0MsTUFBSzs0QkFDTEMsYUFBWTs0QkFDWkMsT0FBT3ZCOzRCQUNQd0IsVUFBVSxDQUFDbEIsSUFBTUwsU0FBU0ssRUFBRW1CLE9BQU9GOzRCQUNuQ1QsV0FBVTs0QkFDVlksUUFBUTs7Ozs7O3NDQUVWLDhEQUFDTjs0QkFDQ0MsTUFBSzs0QkFDTEMsYUFBWTs0QkFDWkMsT0FBT3JCOzRCQUNQc0IsVUFBVSxDQUFDbEIsSUFBTUgsWUFBWUcsRUFBRW1CLE9BQU9GOzRCQUN0Q1QsV0FBVTs0QkFDVlksUUFBUTs7Ozs7O3NDQUVWLDhEQUFDQzs0QkFBT04sTUFBSzs0QkFBU1AsV0FBVTtzQ0FBcUY7Ozs7Ozs7Ozs7Ozs4QkFJdkgsOERBQUNhO29CQUNDQyxTQUFTakI7b0JBQ1RHLFdBQVU7OEJBQ1g7Ozs7Ozs4QkFHRCw4REFBQ2U7b0JBQUVmLFdBQVU7O3dCQUEyQjtzQ0FDZiw4REFBQ2hCLGtEQUFJQTs0QkFBQ2dDLE1BQUs7NEJBQVVoQixXQUFVO3NDQUFzQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLdEc7R0FoRXdCZjs7UUFHUEYsc0RBQVNBOzs7S0FIRkUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2xvZ2luL3BhZ2UudHN4PzQ5MGEiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5cbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCwgc2lnbkluV2l0aFBvcHVwLCBHb29nbGVBdXRoUHJvdmlkZXIgfSBmcm9tICdmaXJlYmFzZS9hdXRoJ1xuaW1wb3J0IHsgYXV0aCB9IGZyb20gJy4uL2ZpcmViYXNlL2NvbmZpZydcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvbmF2aWdhdGlvbidcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IGJhY2tncm91bmRJbWFnZSBmcm9tICcuL2JhY2tncm91bmQud2VicCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW4oKSB7XG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGU6IFJlYWN0LkZvcm1FdmVudCkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIHRyeSB7XG4gICAgICBhd2FpdCBzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChhdXRoLCBlbWFpbCwgcGFzc3dvcmQpXG4gICAgICByb3V0ZXIucHVzaCgnL2Rhc2hib2FyZCcpXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHNpZ25pbmcgaW46JywgZXJyb3IpXG4gICAgICAvLyBIYW5kbGUgZXJyb3IgKGUuZy4sIHNob3cgZXJyb3IgbWVzc2FnZSB0byB1c2VyKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUdvb2dsZVNpZ25JbiA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBwcm92aWRlciA9IG5ldyBHb29nbGVBdXRoUHJvdmlkZXIoKVxuICAgIHRyeSB7XG4gICAgICBhd2FpdCBzaWduSW5XaXRoUG9wdXAoYXV0aCwgcHJvdmlkZXIpXG4gICAgICByb3V0ZXIucHVzaCgnL2Rhc2hib2FyZCcpXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHNpZ25pbmcgaW4gd2l0aCBHb29nbGU6JywgZXJyb3IpXG4gICAgICAvLyBIYW5kbGUgZXJyb3IgKGUuZy4sIHNob3cgZXJyb3IgbWVzc2FnZSB0byB1c2VyKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG1pbi1oLXNjcmVlbiBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcC00IHNtOnAtOCBtZDpwLTI0IGJnLWNvdmVyIGJnLWNlbnRlciBiZy1uby1yZXBlYXRcIiBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKCcvYmFja2dyb3VuZC53ZWJwJylcIiB9fT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgYmctb3BhY2l0eS04MCBwLTggcm91bmRlZC1sZyBzaGFkb3ctbWQgdy1mdWxsIG1heC13LW1kXCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgbWItNCB0ZXh0LWNlbnRlclwiPkxvZ2luPC9oMT5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwidy1mdWxsXCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbFwiXG4gICAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBwLTIgbWItNCBib3JkZXIgcm91bmRlZFwiXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXG4gICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBwLTIgbWItNCBib3JkZXIgcm91bmRlZFwiXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwidy1mdWxsIGJnLWdyZWVuLTUwMCBob3ZlcjpiZy1ncmVlbi03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQgbWItNFwiPlxuICAgICAgICAgICAgTG9naW5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlR29vZ2xlU2lnbklufVxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy1ibHVlLTUwMCBob3ZlcjpiZy1ibHVlLTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZCBtYi00XCJcbiAgICAgICAgPlxuICAgICAgICAgIFNpZ24gaW4gd2l0aCBHb29nbGVcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTQgdGV4dC1zbSB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgIERvbid0IGhhdmUgYW4gYWNjb3VudD8gPExpbmsgaHJlZj1cIi9zaWdudXBcIiBjbGFzc05hbWU9XCJ0ZXh0LWdyZWVuLTUwMCBob3Zlcjp0ZXh0LWdyZWVuLTcwMFwiPlNpZ24gdXA8L0xpbms+XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwic2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJzaWduSW5XaXRoUG9wdXAiLCJHb29nbGVBdXRoUHJvdmlkZXIiLCJhdXRoIiwidXNlUm91dGVyIiwiTGluayIsIkxvZ2luIiwiZW1haWwiLCJzZXRFbWFpbCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJyb3V0ZXIiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJwdXNoIiwiZXJyb3IiLCJjb25zb2xlIiwiaGFuZGxlR29vZ2xlU2lnbkluIiwicHJvdmlkZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsImgxIiwiZm9ybSIsIm9uU3VibWl0IiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwicmVxdWlyZWQiLCJidXR0b24iLCJvbkNsaWNrIiwicCIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./app/login/page.tsx\n"));

/***/ })

});