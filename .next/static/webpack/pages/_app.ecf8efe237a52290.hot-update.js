"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/plugin/contact-form.js":
/*!************************************!*\
  !*** ./src/plugin/contact-form.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ContactForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _emailjs_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emailjs/browser */ \"./node_modules/@emailjs/browser/es/index.js\");\n\nvar _s = $RefreshSig$();\n\n\nfunction ContactForm() {\n    _s();\n    const [form, setForm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        email: \"\",\n        name: \"\",\n        msg: \"\"\n    });\n    const [success, setSuccess] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const { email , name , msg  } = form;\n    const sendEmail = (e)=>{\n        e.preventDefault();\n        if (email && name && msg) {\n            setSuccess(true);\n            setTimeout(()=>{\n                _emailjs_browser__WEBPACK_IMPORTED_MODULE_2__[\"default\"].sendForm(\"service_62sshko\", \"template_tqp7fxq\", form.current, \"tR5Waa4ma7A5ULcyF\").then((result)=>{\n                    console.log(result.text);\n                }, (error)=>{\n                    console.log(error.text);\n                });\n                setSuccess(false);\n            }, 2000);\n        } else {\n            setError(true);\n            setTimeout(()=>{\n                setError(false);\n            }, 2000);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        ref: form,\n        onSubmit: sendEmail,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"For more questions, feel free to contact me via the contact form!\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sara May\\\\Desktop\\\\tapsi-react\\\\src\\\\plugin\\\\contact-form.js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"returnmessage\",\n                \"data-success\": \"Your message has been received, we will contact you soon.\",\n                style: {\n                    display: success ? \"block\" : \"none\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"contact_success\",\n                    children: \"Message sent. You can expect answer in 24hr.\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Sara May\\\\Desktop\\\\tapsi-react\\\\src\\\\plugin\\\\contact-form.js\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sara May\\\\Desktop\\\\tapsi-react\\\\src\\\\plugin\\\\contact-form.js\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"empty_notice\",\n                style: {\n                    display: error ? \"block\" : \"none\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    children: \"Please fill required fields!\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Sara May\\\\Desktop\\\\tapsi-react\\\\src\\\\plugin\\\\contact-form.js\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sara May\\\\Desktop\\\\tapsi-react\\\\src\\\\plugin\\\\contact-form.js\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Name\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sara May\\\\Desktop\\\\tapsi-react\\\\src\\\\plugin\\\\contact-form.js\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                onFocus: ()=>setActive(\"name\"),\n                type: \"text\",\n                value: name,\n                name: \"from_name\",\n                placeholder: \"\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sara May\\\\Desktop\\\\tapsi-react\\\\src\\\\plugin\\\\contact-form.js\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Email\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sara May\\\\Desktop\\\\tapsi-react\\\\src\\\\plugin\\\\contact-form.js\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"email\",\n                value: email,\n                name: \"from_email\",\n                placeholder: \"\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sara May\\\\Desktop\\\\tapsi-react\\\\src\\\\plugin\\\\contact-form.js\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Message\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sara May\\\\Desktop\\\\tapsi-react\\\\src\\\\plugin\\\\contact-form.js\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                name: \"message\",\n                value: msg,\n                placeholder: \"gfd\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sara May\\\\Desktop\\\\tapsi-react\\\\src\\\\plugin\\\\contact-form.js\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"submit\",\n                value: \"Send\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sara May\\\\Desktop\\\\tapsi-react\\\\src\\\\plugin\\\\contact-form.js\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Sara May\\\\Desktop\\\\tapsi-react\\\\src\\\\plugin\\\\contact-form.js\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, this);\n}\n_s(ContactForm, \"xIfGa1mFr6deCnBjy1SUxQH2/+k=\");\n_c = ContactForm;\nvar _c;\n$RefreshReg$(_c, \"ContactForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGx1Z2luL2NvbnRhY3QtZm9ybS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFnRDtBQUNUO0FBRXhCLFNBQVNJLGNBQWM7O0lBQ3BDLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHTCwrQ0FBUUEsQ0FBQztRQUFFTSxPQUFPO1FBQUlDLE1BQU07UUFBSUMsS0FBSztJQUFHO0lBQ2hFLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHViwrQ0FBUUEsQ0FBQyxLQUFLO0lBQzVDLE1BQU0sQ0FBQ1csT0FBT0MsU0FBUyxHQUFHWiwrQ0FBUUEsQ0FBQyxLQUFLO0lBQ3hDLE1BQU0sQ0FBQ2EsUUFBUUMsVUFBVSxHQUFHZCwrQ0FBUUEsQ0FBQyxJQUFJO0lBQ3pDLE1BQU0sRUFBRU0sTUFBSyxFQUFFQyxLQUFJLEVBQUVDLElBQUcsRUFBRSxHQUFHSjtJQUM3QixNQUFNVyxZQUFZLENBQUNDLElBQU07UUFDdkJBLEVBQUVDLGNBQWM7UUFDaEIsSUFBSVgsU0FBU0MsUUFBUUMsS0FBSztZQUN4QkUsV0FBVyxJQUFJO1lBQ2ZRLFdBQVcsSUFBTTtnQkFDZmhCLGlFQUNXLENBQ1AsbUJBQ0Esb0JBQ0FFLEtBQUtnQixPQUFPLEVBQ1oscUJBRURDLElBQUksQ0FDSCxDQUFDQyxTQUFXO29CQUNWQyxRQUFRQyxHQUFHLENBQUNGLE9BQU9HLElBQUk7Z0JBQ3pCLEdBQ0EsQ0FBQ2QsUUFBVTtvQkFDVFksUUFBUUMsR0FBRyxDQUFDYixNQUFNYyxJQUFJO2dCQUN4QjtnQkFFSmYsV0FBVyxLQUFLO1lBQ2xCLEdBQUc7UUFDTCxPQUFPO1lBQ0xFLFNBQVMsSUFBSTtZQUNiTSxXQUFXLElBQU07Z0JBQ2ZOLFNBQVMsS0FBSztZQUNoQixHQUFHO1FBQ0wsQ0FBQztJQUNIO0lBRUEscUJBQ0UsOERBQUNSO1FBQUtzQixLQUFLdEI7UUFBTXVCLFVBQVVaOzswQkFDekIsOERBQUNhOzBCQUFFOzs7Ozs7MEJBQ0gsOERBQUNDO2dCQUNDQyxXQUFVO2dCQUNWQyxnQkFBYTtnQkFDYkMsT0FBTztvQkFBRUMsU0FBU3hCLFVBQVUsVUFBVSxNQUFNO2dCQUFDOzBCQUU3Qyw0RUFBQ3lCO29CQUFLSixXQUFVOzhCQUFrQjs7Ozs7Ozs7Ozs7MEJBSXBDLDhEQUFDRDtnQkFDQ0MsV0FBVTtnQkFDVkUsT0FBTztvQkFBRUMsU0FBU3RCLFFBQVEsVUFBVSxNQUFNO2dCQUFDOzBCQUUzQyw0RUFBQ3VCOzhCQUFLOzs7Ozs7Ozs7OzswQkFFUiw4REFBQ0M7MEJBQU07Ozs7OzswQkFDUCw4REFBQ0M7Z0JBQ0NDLFNBQVMsSUFBTXZCLFVBQVU7Z0JBQ3pCd0IsTUFBSztnQkFDTEMsT0FBT2hDO2dCQUNQQSxNQUFLO2dCQUNMaUMsYUFBWTs7Ozs7OzBCQUVkLDhEQUFDTDswQkFBTTs7Ozs7OzBCQUNQLDhEQUFDQztnQkFBTUUsTUFBSztnQkFBUUMsT0FBT2pDO2dCQUFPQyxNQUFLO2dCQUFhaUMsYUFBWTs7Ozs7OzBCQUNoRSw4REFBQ0w7MEJBQU07Ozs7OzswQkFDUCw4REFBQ007Z0JBQVNsQyxNQUFLO2dCQUFVZ0MsT0FBTy9CO2dCQUFLZ0MsYUFBWTs7Ozs7OzBCQUNqRCw4REFBQ0o7Z0JBQU1FLE1BQUs7Z0JBQVNDLE9BQU07Ozs7Ozs7Ozs7OztBQUdqQyxDQUFDO0dBckV1QnBDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wbHVnaW4vY29udGFjdC1mb3JtLmpzPzhhOTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGVtYWlsanMgZnJvbSBcIkBlbWFpbGpzL2Jyb3dzZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRhY3RGb3JtKCkge1xyXG4gIGNvbnN0IFtmb3JtLCBzZXRGb3JtXSA9IHVzZVN0YXRlKHsgZW1haWw6IFwiXCIsIG5hbWU6IFwiXCIsIG1zZzogXCJcIiB9KTtcclxuICBjb25zdCBbc3VjY2Vzcywgc2V0U3VjY2Vzc10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IHsgZW1haWwsIG5hbWUsIG1zZyB9ID0gZm9ybTtcclxuICBjb25zdCBzZW5kRW1haWwgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKGVtYWlsICYmIG5hbWUgJiYgbXNnKSB7XHJcbiAgICAgIHNldFN1Y2Nlc3ModHJ1ZSk7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGVtYWlsanNcclxuICAgICAgICAgIC5zZW5kRm9ybShcclxuICAgICAgICAgICAgXCJzZXJ2aWNlXzYyc3Noa29cIixcclxuICAgICAgICAgICAgXCJ0ZW1wbGF0ZV90cXA3ZnhxXCIsXHJcbiAgICAgICAgICAgIGZvcm0uY3VycmVudCxcclxuICAgICAgICAgICAgXCJ0UjVXYWE0bWE3QTVVTGN5RlwiXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgICAudGhlbihcclxuICAgICAgICAgICAgKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdC50ZXh0KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IudGV4dCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgc2V0U3VjY2VzcyhmYWxzZSk7XHJcbiAgICAgIH0sIDIwMDApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0RXJyb3IodHJ1ZSk7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHNldEVycm9yKGZhbHNlKTtcclxuICAgICAgfSwgMjAwMCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxmb3JtIHJlZj17Zm9ybX0gb25TdWJtaXQ9e3NlbmRFbWFpbH0+XHJcbiAgICAgIDxwPkZvciBtb3JlIHF1ZXN0aW9ucywgZmVlbCBmcmVlIHRvIGNvbnRhY3QgbWUgdmlhIHRoZSBjb250YWN0IGZvcm0hPC9wPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPVwicmV0dXJubWVzc2FnZVwiXHJcbiAgICAgICAgZGF0YS1zdWNjZXNzPVwiWW91ciBtZXNzYWdlIGhhcyBiZWVuIHJlY2VpdmVkLCB3ZSB3aWxsIGNvbnRhY3QgeW91IHNvb24uXCJcclxuICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBzdWNjZXNzID8gXCJibG9ja1wiIDogXCJub25lXCIgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbnRhY3Rfc3VjY2Vzc1wiPlxyXG4gICAgICAgICAgTWVzc2FnZSBzZW50LiBZb3UgY2FuIGV4cGVjdCBhbnN3ZXIgaW4gMjRoci5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiZW1wdHlfbm90aWNlXCJcclxuICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBlcnJvciA/IFwiYmxvY2tcIiA6IFwibm9uZVwiIH19XHJcbiAgICAgID5cclxuICAgICAgICA8c3Bhbj5QbGVhc2UgZmlsbCByZXF1aXJlZCBmaWVsZHMhPC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGxhYmVsPk5hbWU8L2xhYmVsPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICBvbkZvY3VzPXsoKSA9PiBzZXRBY3RpdmUoXCJuYW1lXCIpfVxyXG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICB2YWx1ZT17bmFtZX1cclxuICAgICAgICBuYW1lPVwiZnJvbV9uYW1lXCJcclxuICAgICAgICBwbGFjZWhvbGRlcj1cIlwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxsYWJlbD5FbWFpbDwvbGFiZWw+XHJcbiAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiB2YWx1ZT17ZW1haWx9IG5hbWU9XCJmcm9tX2VtYWlsXCIgcGxhY2Vob2xkZXI9XCJcIiAvPlxyXG4gICAgICA8bGFiZWw+TWVzc2FnZTwvbGFiZWw+XHJcbiAgICAgIDx0ZXh0YXJlYSBuYW1lPVwibWVzc2FnZVwiIHZhbHVlPXttc2d9IHBsYWNlaG9sZGVyPVwiZ2ZkXCIgLz5cclxuICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlNlbmRcIiAvPlxyXG4gICAgPC9mb3JtPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJlbWFpbGpzIiwiQ29udGFjdEZvcm0iLCJmb3JtIiwic2V0Rm9ybSIsImVtYWlsIiwibmFtZSIsIm1zZyIsInN1Y2Nlc3MiLCJzZXRTdWNjZXNzIiwiZXJyb3IiLCJzZXRFcnJvciIsImFjdGl2ZSIsInNldEFjdGl2ZSIsInNlbmRFbWFpbCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInNldFRpbWVvdXQiLCJzZW5kRm9ybSIsImN1cnJlbnQiLCJ0aGVuIiwicmVzdWx0IiwiY29uc29sZSIsImxvZyIsInRleHQiLCJyZWYiLCJvblN1Ym1pdCIsInAiLCJkaXYiLCJjbGFzc05hbWUiLCJkYXRhLXN1Y2Nlc3MiLCJzdHlsZSIsImRpc3BsYXkiLCJzcGFuIiwibGFiZWwiLCJpbnB1dCIsIm9uRm9jdXMiLCJ0eXBlIiwidmFsdWUiLCJwbGFjZWhvbGRlciIsInRleHRhcmVhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/plugin/contact-form.js\n"));

/***/ })

});