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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ContactForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _emailjs_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emailjs/browser */ \"./node_modules/@emailjs/browser/es/index.js\");\n/* harmony import */ var dotenv_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dotenv/config */ \"./node_modules/dotenv/config.js\");\n/* harmony import */ var dotenv_config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dotenv_config__WEBPACK_IMPORTED_MODULE_3__);\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"./node_modules/next/dist/build/polyfills/process.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction ContactForm() {\n    _s();\n    const [form, setForm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        email: \"\",\n        name: \"\",\n        subject: \"\",\n        msg: \"\"\n    });\n    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [success, setSuccess] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const onChange = (e)=>{\n        setForm({\n            ...form,\n            [e.target.name]: e.target.value\n        });\n    };\n    const { email , name , subject , msg  } = form;\n    const onSubmit = (e)=>{\n        e.preventDefault();\n        if (email && name && subject && msg) {\n            _emailjs_browser__WEBPACK_IMPORTED_MODULE_2__[\"default\"].sendForm(process.env.YOUR_SERVICE_ID, process.env.YOUR_TEMPLATE_ID, form.current, process.env.YOUR_PUBLIC_KEY).then((result)=>{\n                console.log(result.text);\n            }, (error)=>{\n                console.log(error.text);\n            });\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        ref: form,\n        onSubmit: sendEmail,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Name\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sara May\\\\Desktop\\\\tapsi-react\\\\src\\\\plugin\\\\contact-form.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                name: \"from_name\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sara May\\\\Desktop\\\\tapsi-react\\\\src\\\\plugin\\\\contact-form.js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Email\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sara May\\\\Desktop\\\\tapsi-react\\\\src\\\\plugin\\\\contact-form.js\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"email\",\n                name: \"from_name\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sara May\\\\Desktop\\\\tapsi-react\\\\src\\\\plugin\\\\contact-form.js\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Message\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sara May\\\\Desktop\\\\tapsi-react\\\\src\\\\plugin\\\\contact-form.js\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                name: \"message\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sara May\\\\Desktop\\\\tapsi-react\\\\src\\\\plugin\\\\contact-form.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"submit\",\n                value: \"Send\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sara May\\\\Desktop\\\\tapsi-react\\\\src\\\\plugin\\\\contact-form.js\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Sara May\\\\Desktop\\\\tapsi-react\\\\src\\\\plugin\\\\contact-form.js\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, this);\n}\n_s(ContactForm, \"eXxi5kfXT6HoCn2f3Mxuqj3BEa0=\");\n_c = ContactForm;\nvar _c;\n$RefreshReg$(_c, \"ContactForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGx1Z2luL2NvbnRhY3QtZm9ybS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUF3QztBQUNEO0FBQ2hCO0FBRVIsU0FBU0csY0FBYzs7SUFDcEMsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdKLCtDQUFRQSxDQUFDO1FBQy9CSyxPQUFPO1FBQ1BDLE1BQU07UUFDTkMsU0FBUztRQUNUQyxLQUFLO0lBQ1A7SUFDQSxNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR1YsK0NBQVFBLENBQUMsSUFBSTtJQUN6QyxNQUFNLENBQUNXLE9BQU9DLFNBQVMsR0FBR1osK0NBQVFBLENBQUMsS0FBSztJQUN4QyxNQUFNLENBQUNhLFNBQVNDLFdBQVcsR0FBR2QsK0NBQVFBLENBQUMsS0FBSztJQUM1QyxNQUFNZSxXQUFXLENBQUNDLElBQU07UUFDdEJaLFFBQVE7WUFBRSxHQUFHRCxJQUFJO1lBQUUsQ0FBQ2EsRUFBRUMsTUFBTSxDQUFDWCxJQUFJLENBQUMsRUFBRVUsRUFBRUMsTUFBTSxDQUFDQyxLQUFLO1FBQUM7SUFDckQ7SUFDQSxNQUFNLEVBQUViLE1BQUssRUFBRUMsS0FBSSxFQUFFQyxRQUFPLEVBQUVDLElBQUcsRUFBRSxHQUFHTDtJQUN0QyxNQUFNZ0IsV0FBVyxDQUFDSCxJQUFNO1FBQ3RCQSxFQUFFSSxjQUFjO1FBQ2hCLElBQUlmLFNBQVNDLFFBQVFDLFdBQVdDLEtBQUs7WUFDbkNQLGlFQUNXLENBQ1BxQixPQUFPQSxDQUFDQyxHQUFHLENBQUNDLGVBQWUsRUFDM0JGLE9BQU9BLENBQUNDLEdBQUcsQ0FBQ0UsZ0JBQWdCLEVBQzVCdEIsS0FBS3VCLE9BQU8sRUFDWkosT0FBT0EsQ0FBQ0MsR0FBRyxDQUFDSSxlQUFlLEVBRTVCQyxJQUFJLENBQ0gsQ0FBQ0MsU0FBVztnQkFDVkMsUUFBUUMsR0FBRyxDQUFDRixPQUFPRyxJQUFJO1lBQ3pCLEdBQ0EsQ0FBQ3JCLFFBQVU7Z0JBQ1RtQixRQUFRQyxHQUFHLENBQUNwQixNQUFNcUIsSUFBSTtZQUN4QjtRQUVOLENBQUM7SUFDSDtJQUNBLHFCQUNFLDhEQUFDN0I7UUFBSzhCLEtBQUs5QjtRQUFNZ0IsVUFBVWU7OzBCQUN6Qiw4REFBQ0M7MEJBQU07Ozs7OzswQkFDUCw4REFBQ0M7Z0JBQU1DLE1BQUs7Z0JBQU8vQixNQUFLOzs7Ozs7MEJBQ3hCLDhEQUFDNkI7MEJBQU07Ozs7OzswQkFDUCw4REFBQ0M7Z0JBQU1DLE1BQUs7Z0JBQVEvQixNQUFLOzs7Ozs7MEJBQ3pCLDhEQUFDNkI7MEJBQU07Ozs7OzswQkFDUCw4REFBQ0c7Z0JBQVNoQyxNQUFLOzs7Ozs7MEJBQ2YsOERBQUM4QjtnQkFBTUMsTUFBSztnQkFBU25CLE9BQU07Ozs7Ozs7Ozs7OztBQUdqQyxDQUFDO0dBN0N1QmhCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wbHVnaW4vY29udGFjdC1mb3JtLmpzPzhhOTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBlbWFpbGpzIGZyb20gXCJAZW1haWxqcy9icm93c2VyXCI7XHJcbmltcG9ydCBcImRvdGVudi9jb25maWdcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRhY3RGb3JtKCkge1xyXG4gIGNvbnN0IFtmb3JtLCBzZXRGb3JtXSA9IHVzZVN0YXRlKHtcclxuICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgbmFtZTogXCJcIixcclxuICAgIHN1YmplY3Q6IFwiXCIsXHJcbiAgICBtc2c6IFwiXCIsXHJcbiAgfSk7XHJcbiAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzdWNjZXNzLCBzZXRTdWNjZXNzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBvbkNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBzZXRGb3JtKHsgLi4uZm9ybSwgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSB9KTtcclxuICB9O1xyXG4gIGNvbnN0IHsgZW1haWwsIG5hbWUsIHN1YmplY3QsIG1zZyB9ID0gZm9ybTtcclxuICBjb25zdCBvblN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAoZW1haWwgJiYgbmFtZSAmJiBzdWJqZWN0ICYmIG1zZykge1xyXG4gICAgICBlbWFpbGpzXHJcbiAgICAgICAgLnNlbmRGb3JtKFxyXG4gICAgICAgICAgcHJvY2Vzcy5lbnYuWU9VUl9TRVJWSUNFX0lELFxyXG4gICAgICAgICAgcHJvY2Vzcy5lbnYuWU9VUl9URU1QTEFURV9JRCxcclxuICAgICAgICAgIGZvcm0uY3VycmVudCxcclxuICAgICAgICAgIHByb2Nlc3MuZW52LllPVVJfUFVCTElDX0tFWVxyXG4gICAgICAgIClcclxuICAgICAgICAudGhlbihcclxuICAgICAgICAgIChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0LnRleHQpO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci50ZXh0KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxmb3JtIHJlZj17Zm9ybX0gb25TdWJtaXQ9e3NlbmRFbWFpbH0+XHJcbiAgICAgIDxsYWJlbD5OYW1lPC9sYWJlbD5cclxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImZyb21fbmFtZVwiIC8+XHJcbiAgICAgIDxsYWJlbD5FbWFpbDwvbGFiZWw+XHJcbiAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBuYW1lPVwiZnJvbV9uYW1lXCIgLz5cclxuICAgICAgPGxhYmVsPk1lc3NhZ2U8L2xhYmVsPlxyXG4gICAgICA8dGV4dGFyZWEgbmFtZT1cIm1lc3NhZ2VcIiAvPlxyXG4gICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU2VuZFwiIC8+XHJcbiAgICA8L2Zvcm0+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImVtYWlsanMiLCJDb250YWN0Rm9ybSIsImZvcm0iLCJzZXRGb3JtIiwiZW1haWwiLCJuYW1lIiwic3ViamVjdCIsIm1zZyIsImFjdGl2ZSIsInNldEFjdGl2ZSIsImVycm9yIiwic2V0RXJyb3IiLCJzdWNjZXNzIiwic2V0U3VjY2VzcyIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwib25TdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInNlbmRGb3JtIiwicHJvY2VzcyIsImVudiIsIllPVVJfU0VSVklDRV9JRCIsIllPVVJfVEVNUExBVEVfSUQiLCJjdXJyZW50IiwiWU9VUl9QVUJMSUNfS0VZIiwidGhlbiIsInJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJ0ZXh0IiwicmVmIiwic2VuZEVtYWlsIiwibGFiZWwiLCJpbnB1dCIsInR5cGUiLCJ0ZXh0YXJlYSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/plugin/contact-form.js\n"));

/***/ })

});