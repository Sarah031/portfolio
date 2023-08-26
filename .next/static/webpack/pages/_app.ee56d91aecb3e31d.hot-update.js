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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ContactForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _emailjs_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emailjs/browser */ \"./node_modules/@emailjs/browser/es/index.js\");\n/* harmony import */ var dotenv_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dotenv/config */ \"./node_modules/dotenv/config.js\");\n/* harmony import */ var dotenv_config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dotenv_config__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction ContactForm() {\n    _s();\n    const form = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const sendEmail = (e)=>{\n        e.preventDefault();\n        _emailjs_browser__WEBPACK_IMPORTED_MODULE_2__[\"default\"].sendForm(\"service_62sshko\", \"template_tqp7fxq\", form.current, \"tR5Waa4ma7A5ULcyF\").then((result)=>{\n            console.log(result.text);\n        }, (error1)=>{\n            console.log(error1.text);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        ref: form,\n        onSubmit: sendEmail,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"For more questions, feel free to contact me via the contact form!\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sara May\\\\Desktop\\\\tapsi-react\\\\src\\\\plugin\\\\contact-form.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"returnmessage\",\n                \"data-success\": \"Your message has been received, we will contact you soon.\",\n                style: {\n                    display: success ? \"block\" : \"none\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"contact_success\",\n                    children: \"Message sent. You can expect answer in 24hr.\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Sara May\\\\Desktop\\\\tapsi-react\\\\src\\\\plugin\\\\contact-form.js\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sara May\\\\Desktop\\\\tapsi-react\\\\src\\\\plugin\\\\contact-form.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"empty_notice\",\n                style: {\n                    display: error ? \"block\" : \"none\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    children: \"Please fill required fields!\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Sara May\\\\Desktop\\\\tapsi-react\\\\src\\\\plugin\\\\contact-form.js\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sara May\\\\Desktop\\\\tapsi-react\\\\src\\\\plugin\\\\contact-form.js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Name\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sara May\\\\Desktop\\\\tapsi-react\\\\src\\\\plugin\\\\contact-form.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                name: \"from_name\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sara May\\\\Desktop\\\\tapsi-react\\\\src\\\\plugin\\\\contact-form.js\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Email\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sara May\\\\Desktop\\\\tapsi-react\\\\src\\\\plugin\\\\contact-form.js\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"email\",\n                name: \"from_email\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sara May\\\\Desktop\\\\tapsi-react\\\\src\\\\plugin\\\\contact-form.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Message\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sara May\\\\Desktop\\\\tapsi-react\\\\src\\\\plugin\\\\contact-form.js\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                name: \"message\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sara May\\\\Desktop\\\\tapsi-react\\\\src\\\\plugin\\\\contact-form.js\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"submit\",\n                value: \"Send\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sara May\\\\Desktop\\\\tapsi-react\\\\src\\\\plugin\\\\contact-form.js\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Sara May\\\\Desktop\\\\tapsi-react\\\\src\\\\plugin\\\\contact-form.js\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, this);\n}\n_s(ContactForm, \"dQhLC9DEDZP9Q6oVJIWRdCVKDdw=\");\n_c = ContactForm;\nvar _c;\n$RefreshReg$(_c, \"ContactForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGx1Z2luL2NvbnRhY3QtZm9ybS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWdEO0FBQ1Q7QUFDaEI7QUFFUixTQUFTSSxjQUFjOztJQUNwQyxNQUFNQyxPQUFPSCw2Q0FBTUE7SUFFbkIsTUFBTUksWUFBWSxDQUFDQyxJQUFNO1FBQ3ZCQSxFQUFFQyxjQUFjO1FBRWhCTCxpRUFDVyxDQUNQLG1CQUNBLG9CQUNBRSxLQUFLSyxPQUFPLEVBQ1oscUJBRURDLElBQUksQ0FDSCxDQUFDQyxTQUFXO1lBQ1ZDLFFBQVFDLEdBQUcsQ0FBQ0YsT0FBT0csSUFBSTtRQUN6QixHQUNBLENBQUNDLFNBQVU7WUFDVEgsUUFBUUMsR0FBRyxDQUFDRSxPQUFNRCxJQUFJO1FBQ3hCO0lBRU47SUFFQSxxQkFDRSw4REFBQ1Y7UUFBS1ksS0FBS1o7UUFBTWEsVUFBVVo7OzBCQUN6Qiw4REFBQ2E7MEJBQUU7Ozs7OzswQkFDSCw4REFBQ0M7Z0JBQ0NDLFdBQVU7Z0JBQ1ZDLGdCQUFhO2dCQUNiQyxPQUFPO29CQUFFQyxTQUFTQyxVQUFVLFVBQVUsTUFBTTtnQkFBQzswQkFFN0MsNEVBQUNDO29CQUFLTCxXQUFVOzhCQUFrQjs7Ozs7Ozs7Ozs7MEJBSXBDLDhEQUFDRDtnQkFDQ0MsV0FBVTtnQkFDVkUsT0FBTztvQkFBRUMsU0FBU1IsUUFBUSxVQUFVLE1BQU07Z0JBQUM7MEJBRTNDLDRFQUFDVTs4QkFBSzs7Ozs7Ozs7Ozs7MEJBRVIsOERBQUNDOzBCQUFNOzs7Ozs7MEJBQ1AsOERBQUNDO2dCQUFNQyxNQUFLO2dCQUFPQyxNQUFLOzs7Ozs7MEJBQ3hCLDhEQUFDSDswQkFBTTs7Ozs7OzBCQUNQLDhEQUFDQztnQkFBTUMsTUFBSztnQkFBUUMsTUFBSzs7Ozs7OzBCQUN6Qiw4REFBQ0g7MEJBQU07Ozs7OzswQkFDUCw4REFBQ0k7Z0JBQVNELE1BQUs7Ozs7OzswQkFDZiw4REFBQ0Y7Z0JBQU1DLE1BQUs7Z0JBQVNHLE9BQU07Ozs7Ozs7Ozs7OztBQUdqQyxDQUFDO0dBbER1QjVCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wbHVnaW4vY29udGFjdC1mb3JtLmpzPzhhOTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGVtYWlsanMgZnJvbSBcIkBlbWFpbGpzL2Jyb3dzZXJcIjtcclxuaW1wb3J0IFwiZG90ZW52L2NvbmZpZ1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29udGFjdEZvcm0oKSB7XHJcbiAgY29uc3QgZm9ybSA9IHVzZVJlZigpO1xyXG5cclxuICBjb25zdCBzZW5kRW1haWwgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGVtYWlsanNcclxuICAgICAgLnNlbmRGb3JtKFxyXG4gICAgICAgIFwic2VydmljZV82MnNzaGtvXCIsXHJcbiAgICAgICAgXCJ0ZW1wbGF0ZV90cXA3ZnhxXCIsXHJcbiAgICAgICAgZm9ybS5jdXJyZW50LFxyXG4gICAgICAgIFwidFI1V2FhNG1hN0E1VUxjeUZcIlxyXG4gICAgICApXHJcbiAgICAgIC50aGVuKFxyXG4gICAgICAgIChyZXN1bHQpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdC50ZXh0KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IudGV4dCk7XHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9ybSByZWY9e2Zvcm19IG9uU3VibWl0PXtzZW5kRW1haWx9PlxyXG4gICAgICA8cD5Gb3IgbW9yZSBxdWVzdGlvbnMsIGZlZWwgZnJlZSB0byBjb250YWN0IG1lIHZpYSB0aGUgY29udGFjdCBmb3JtITwvcD5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cInJldHVybm1lc3NhZ2VcIlxyXG4gICAgICAgIGRhdGEtc3VjY2Vzcz1cIllvdXIgbWVzc2FnZSBoYXMgYmVlbiByZWNlaXZlZCwgd2Ugd2lsbCBjb250YWN0IHlvdSBzb29uLlwiXHJcbiAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogc3VjY2VzcyA/IFwiYmxvY2tcIiA6IFwibm9uZVwiIH19XHJcbiAgICAgID5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb250YWN0X3N1Y2Nlc3NcIj5cclxuICAgICAgICAgIE1lc3NhZ2Ugc2VudC4gWW91IGNhbiBleHBlY3QgYW5zd2VyIGluIDI0aHIuXHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cImVtcHR5X25vdGljZVwiXHJcbiAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogZXJyb3IgPyBcImJsb2NrXCIgOiBcIm5vbmVcIiB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPHNwYW4+UGxlYXNlIGZpbGwgcmVxdWlyZWQgZmllbGRzITwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxsYWJlbD5OYW1lPC9sYWJlbD5cclxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImZyb21fbmFtZVwiIC8+XHJcbiAgICAgIDxsYWJlbD5FbWFpbDwvbGFiZWw+XHJcbiAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBuYW1lPVwiZnJvbV9lbWFpbFwiIC8+XHJcbiAgICAgIDxsYWJlbD5NZXNzYWdlPC9sYWJlbD5cclxuICAgICAgPHRleHRhcmVhIG5hbWU9XCJtZXNzYWdlXCIgLz5cclxuICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlNlbmRcIiAvPlxyXG4gICAgPC9mb3JtPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJlbWFpbGpzIiwiQ29udGFjdEZvcm0iLCJmb3JtIiwic2VuZEVtYWlsIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic2VuZEZvcm0iLCJjdXJyZW50IiwidGhlbiIsInJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJ0ZXh0IiwiZXJyb3IiLCJyZWYiLCJvblN1Ym1pdCIsInAiLCJkaXYiLCJjbGFzc05hbWUiLCJkYXRhLXN1Y2Nlc3MiLCJzdHlsZSIsImRpc3BsYXkiLCJzdWNjZXNzIiwic3BhbiIsImxhYmVsIiwiaW5wdXQiLCJ0eXBlIiwibmFtZSIsInRleHRhcmVhIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/plugin/contact-form.js\n"));

/***/ })

});