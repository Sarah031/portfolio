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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ContactForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _emailjs_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emailjs/browser */ \"./node_modules/@emailjs/browser/es/index.js\");\n\nvar _s = $RefreshSig$();\n\n\nfunction ContactForm() {\n    _s();\n    const [form, setForm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        email: \"\",\n        name: \"\",\n        msg: \"\"\n    });\n    const [success, setSuccess] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const onChange = (e)=>{\n        setForm({\n            ...form,\n            [e.target.name]: e.target.value\n        });\n    };\n    const sendEmail = (e)=>{\n        e.preventDefault();\n        if (email && name && message) {\n            setSuccess(true);\n        }\n        _emailjs_browser__WEBPACK_IMPORTED_MODULE_2__[\"default\"].sendForm(\"service_62sshko\", \"template_tqp7fxq\", form.current, \"tR5Waa4ma7A5ULcyF\").then((result)=>{\n            console.log(result.text);\n        }, (error)=>{\n            console.log(error.text);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        ref: form,\n        onSubmit: sendEmail,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"For more questions, feel free to contact me via the contact form!\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sara May\\\\Desktop\\\\tapsi-react\\\\src\\\\plugin\\\\contact-form.js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"returnmessage\",\n                \"data-success\": \"Your message has been received, we will contact you soon.\",\n                style: {\n                    display: success ? \"block\" : \"none\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"contact_success\",\n                    children: \"Message sent. You can expect answer in 24hr.\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Sara May\\\\Desktop\\\\tapsi-react\\\\src\\\\plugin\\\\contact-form.js\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sara May\\\\Desktop\\\\tapsi-react\\\\src\\\\plugin\\\\contact-form.js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"empty_notice\",\n                style: {\n                    display: error ? \"block\" : \"none\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    children: \"Please fill required fields!\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Sara May\\\\Desktop\\\\tapsi-react\\\\src\\\\plugin\\\\contact-form.js\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sara May\\\\Desktop\\\\tapsi-react\\\\src\\\\plugin\\\\contact-form.js\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Name\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sara May\\\\Desktop\\\\tapsi-react\\\\src\\\\plugin\\\\contact-form.js\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                value: name,\n                name: \"from_name\",\n                placeholder: \"\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sara May\\\\Desktop\\\\tapsi-react\\\\src\\\\plugin\\\\contact-form.js\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Email\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sara May\\\\Desktop\\\\tapsi-react\\\\src\\\\plugin\\\\contact-form.js\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"email\",\n                value: email,\n                name: \"from_email\",\n                placeholder: \"\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sara May\\\\Desktop\\\\tapsi-react\\\\src\\\\plugin\\\\contact-form.js\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Message\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sara May\\\\Desktop\\\\tapsi-react\\\\src\\\\plugin\\\\contact-form.js\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                name: \"message\",\n                value: message,\n                placeholder: \"gfd\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sara May\\\\Desktop\\\\tapsi-react\\\\src\\\\plugin\\\\contact-form.js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"submit\",\n                value: \"Send\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sara May\\\\Desktop\\\\tapsi-react\\\\src\\\\plugin\\\\contact-form.js\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Sara May\\\\Desktop\\\\tapsi-react\\\\src\\\\plugin\\\\contact-form.js\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this);\n}\n_s(ContactForm, \"uxaRw55aE10p1erXcZ44aq2Xbzo=\");\n_c = ContactForm;\nvar _c;\n$RefreshReg$(_c, \"ContactForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGx1Z2luL2NvbnRhY3QtZm9ybS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFnRDtBQUNUO0FBRXhCLFNBQVNJLGNBQWM7O0lBQ3BDLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHTCwrQ0FBUUEsQ0FBQztRQUFFTSxPQUFPO1FBQUlDLE1BQU07UUFBSUMsS0FBSztJQUFHO0lBQ2hFLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHViwrQ0FBUUEsQ0FBQyxLQUFLO0lBQzVDLE1BQU0sQ0FBQ1csT0FBT0MsU0FBUyxHQUFHWiwrQ0FBUUEsQ0FBQyxLQUFLO0lBQ3hDLE1BQU1hLFdBQVcsQ0FBQ0MsSUFBTTtRQUN0QlQsUUFBUTtZQUFFLEdBQUdELElBQUk7WUFBRSxDQUFDVSxFQUFFQyxNQUFNLENBQUNSLElBQUksQ0FBQyxFQUFFTyxFQUFFQyxNQUFNLENBQUNDLEtBQUs7UUFBQztJQUNyRDtJQUNBLE1BQU1DLFlBQVksQ0FBQ0gsSUFBTTtRQUN2QkEsRUFBRUksY0FBYztRQUNoQixJQUFJWixTQUFTQyxRQUFRWSxTQUFTO1lBQzVCVCxXQUFXLElBQUk7UUFDakIsQ0FBQztRQUNEUixpRUFDVyxDQUNQLG1CQUNBLG9CQUNBRSxLQUFLaUIsT0FBTyxFQUNaLHFCQUVEQyxJQUFJLENBQ0gsQ0FBQ0MsU0FBVztZQUNWQyxRQUFRQyxHQUFHLENBQUNGLE9BQU9HLElBQUk7UUFDekIsR0FDQSxDQUFDZixRQUFVO1lBQ1RhLFFBQVFDLEdBQUcsQ0FBQ2QsTUFBTWUsSUFBSTtRQUN4QjtJQUVOO0lBRUEscUJBQ0UsOERBQUN0QjtRQUFLdUIsS0FBS3ZCO1FBQU13QixVQUFVWDs7MEJBQ3pCLDhEQUFDWTswQkFBRTs7Ozs7OzBCQUNILDhEQUFDQztnQkFDQ0MsV0FBVTtnQkFDVkMsZ0JBQWE7Z0JBQ2JDLE9BQU87b0JBQUVDLFNBQVN6QixVQUFVLFVBQVUsTUFBTTtnQkFBQzswQkFFN0MsNEVBQUMwQjtvQkFBS0osV0FBVTs4QkFBa0I7Ozs7Ozs7Ozs7OzBCQUlwQyw4REFBQ0Q7Z0JBQ0NDLFdBQVU7Z0JBQ1ZFLE9BQU87b0JBQUVDLFNBQVN2QixRQUFRLFVBQVUsTUFBTTtnQkFBQzswQkFFM0MsNEVBQUN3Qjs4QkFBSzs7Ozs7Ozs7Ozs7MEJBRVIsOERBQUNDOzBCQUFNOzs7Ozs7MEJBQ1AsOERBQUNDO2dCQUFNQyxNQUFLO2dCQUFPdEIsT0FBT1Q7Z0JBQU1BLE1BQUs7Z0JBQVlnQyxhQUFZOzs7Ozs7MEJBQzdELDhEQUFDSDswQkFBTTs7Ozs7OzBCQUNQLDhEQUFDQztnQkFBTUMsTUFBSztnQkFBUXRCLE9BQU9WO2dCQUFPQyxNQUFLO2dCQUFhZ0MsYUFBWTs7Ozs7OzBCQUNoRSw4REFBQ0g7MEJBQU07Ozs7OzswQkFDUCw4REFBQ0k7Z0JBQVNqQyxNQUFLO2dCQUFVUyxPQUFPRztnQkFBU29CLGFBQVk7Ozs7OzswQkFDckQsOERBQUNGO2dCQUFNQyxNQUFLO2dCQUFTdEIsT0FBTTs7Ozs7Ozs7Ozs7O0FBR2pDLENBQUM7R0F4RHVCYjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGx1Z2luL2NvbnRhY3QtZm9ybS5qcz84YTk3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBlbWFpbGpzIGZyb20gXCJAZW1haWxqcy9icm93c2VyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250YWN0Rm9ybSgpIHtcclxuICBjb25zdCBbZm9ybSwgc2V0Rm9ybV0gPSB1c2VTdGF0ZSh7IGVtYWlsOiBcIlwiLCBuYW1lOiBcIlwiLCBtc2c6IFwiXCIgfSk7XHJcbiAgY29uc3QgW3N1Y2Nlc3MsIHNldFN1Y2Nlc3NdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IG9uQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIHNldEZvcm0oeyAuLi5mb3JtLCBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG4gIH07XHJcbiAgY29uc3Qgc2VuZEVtYWlsID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmIChlbWFpbCAmJiBuYW1lICYmIG1lc3NhZ2UpIHtcclxuICAgICAgc2V0U3VjY2Vzcyh0cnVlKTtcclxuICAgIH1cclxuICAgIGVtYWlsanNcclxuICAgICAgLnNlbmRGb3JtKFxyXG4gICAgICAgIFwic2VydmljZV82MnNzaGtvXCIsXHJcbiAgICAgICAgXCJ0ZW1wbGF0ZV90cXA3ZnhxXCIsXHJcbiAgICAgICAgZm9ybS5jdXJyZW50LFxyXG4gICAgICAgIFwidFI1V2FhNG1hN0E1VUxjeUZcIlxyXG4gICAgICApXHJcbiAgICAgIC50aGVuKFxyXG4gICAgICAgIChyZXN1bHQpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdC50ZXh0KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IudGV4dCk7XHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9ybSByZWY9e2Zvcm19IG9uU3VibWl0PXtzZW5kRW1haWx9PlxyXG4gICAgICA8cD5Gb3IgbW9yZSBxdWVzdGlvbnMsIGZlZWwgZnJlZSB0byBjb250YWN0IG1lIHZpYSB0aGUgY29udGFjdCBmb3JtITwvcD5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cInJldHVybm1lc3NhZ2VcIlxyXG4gICAgICAgIGRhdGEtc3VjY2Vzcz1cIllvdXIgbWVzc2FnZSBoYXMgYmVlbiByZWNlaXZlZCwgd2Ugd2lsbCBjb250YWN0IHlvdSBzb29uLlwiXHJcbiAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogc3VjY2VzcyA/IFwiYmxvY2tcIiA6IFwibm9uZVwiIH19XHJcbiAgICAgID5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb250YWN0X3N1Y2Nlc3NcIj5cclxuICAgICAgICAgIE1lc3NhZ2Ugc2VudC4gWW91IGNhbiBleHBlY3QgYW5zd2VyIGluIDI0aHIuXHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cImVtcHR5X25vdGljZVwiXHJcbiAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogZXJyb3IgPyBcImJsb2NrXCIgOiBcIm5vbmVcIiB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPHNwYW4+UGxlYXNlIGZpbGwgcmVxdWlyZWQgZmllbGRzITwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxsYWJlbD5OYW1lPC9sYWJlbD5cclxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e25hbWV9IG5hbWU9XCJmcm9tX25hbWVcIiBwbGFjZWhvbGRlcj1cIlwiIC8+XHJcbiAgICAgIDxsYWJlbD5FbWFpbDwvbGFiZWw+XHJcbiAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiB2YWx1ZT17ZW1haWx9IG5hbWU9XCJmcm9tX2VtYWlsXCIgcGxhY2Vob2xkZXI9XCJcIiAvPlxyXG4gICAgICA8bGFiZWw+TWVzc2FnZTwvbGFiZWw+XHJcbiAgICAgIDx0ZXh0YXJlYSBuYW1lPVwibWVzc2FnZVwiIHZhbHVlPXttZXNzYWdlfSBwbGFjZWhvbGRlcj1cImdmZFwiIC8+XHJcbiAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTZW5kXCIgLz5cclxuICAgIDwvZm9ybT5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwiZW1haWxqcyIsIkNvbnRhY3RGb3JtIiwiZm9ybSIsInNldEZvcm0iLCJlbWFpbCIsIm5hbWUiLCJtc2ciLCJzdWNjZXNzIiwic2V0U3VjY2VzcyIsImVycm9yIiwic2V0RXJyb3IiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNlbmRFbWFpbCIsInByZXZlbnREZWZhdWx0IiwibWVzc2FnZSIsInNlbmRGb3JtIiwiY3VycmVudCIsInRoZW4iLCJyZXN1bHQiLCJjb25zb2xlIiwibG9nIiwidGV4dCIsInJlZiIsIm9uU3VibWl0IiwicCIsImRpdiIsImNsYXNzTmFtZSIsImRhdGEtc3VjY2VzcyIsInN0eWxlIiwiZGlzcGxheSIsInNwYW4iLCJsYWJlbCIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwidGV4dGFyZWEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/plugin/contact-form.js\n"));

/***/ })

});