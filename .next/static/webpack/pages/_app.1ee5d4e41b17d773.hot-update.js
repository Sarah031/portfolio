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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ContactForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _emailjs_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emailjs/browser */ \"./node_modules/@emailjs/browser/es/index.js\");\n\nvar _s = $RefreshSig$();\n\n\nfunction ContactForm() {\n    _s();\n    const form = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const sendEmail = (e)=>{\n        e.preventDefault();\n        _emailjs_browser__WEBPACK_IMPORTED_MODULE_2__[\"default\"].sendForm(\"service_62sshko\", \"template_tqp7fxq\", form.current, \"tR5Waa4ma7A5ULcyF\").then((result)=>{\n            console.log(result.text);\n        }, (error)=>{\n            console.log(error.text);\n        });\n        document.getElementById(\"form\").reset();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        ref: form,\n        id: \"form\",\n        onSubmit: sendEmail,\n        className: \"contact-form\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"form-group  \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"form-label col-md-6\",\n                        children: \"Name\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Sara May\\\\Desktop\\\\tapsi-react\\\\src\\\\plugin\\\\contact-form.js\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        name: \"from_name\",\n                        className: \"form-control\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Sara May\\\\Desktop\\\\tapsi-react\\\\src\\\\plugin\\\\contact-form.js\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Sara May\\\\Desktop\\\\tapsi-react\\\\src\\\\plugin\\\\contact-form.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"col-md-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"form-label\",\n                        children: \"Email\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Sara May\\\\Desktop\\\\tapsi-react\\\\src\\\\plugin\\\\contact-form.js\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"form-control\",\n                        type: \"email\",\n                        name: \"from_email\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Sara May\\\\Desktop\\\\tapsi-react\\\\src\\\\plugin\\\\contact-form.js\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Sara May\\\\Desktop\\\\tapsi-react\\\\src\\\\plugin\\\\contact-form.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"form-label\",\n                        children: \"Message\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Sara May\\\\Desktop\\\\tapsi-react\\\\src\\\\plugin\\\\contact-form.js\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        name: \"message\",\n                        className: \"form-control\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Sara May\\\\Desktop\\\\tapsi-react\\\\src\\\\plugin\\\\contact-form.js\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Sara May\\\\Desktop\\\\tapsi-react\\\\src\\\\plugin\\\\contact-form.js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"col-md-2 send\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"submit\",\n                    id: \"send_message\",\n                    value: \"Send\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Sara May\\\\Desktop\\\\tapsi-react\\\\src\\\\plugin\\\\contact-form.js\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sara May\\\\Desktop\\\\tapsi-react\\\\src\\\\plugin\\\\contact-form.js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Sara May\\\\Desktop\\\\tapsi-react\\\\src\\\\plugin\\\\contact-form.js\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this);\n}\n_s(ContactForm, \"dQhLC9DEDZP9Q6oVJIWRdCVKDdw=\");\n_c = ContactForm;\nvar _c;\n$RefreshReg$(_c, \"ContactForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGx1Z2luL2NvbnRhY3QtZm9ybS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFnRDtBQUNUO0FBRXhCLFNBQVNJLGNBQWM7O0lBQ3BDLE1BQU1DLE9BQU9ILDZDQUFNQTtJQUNuQixNQUFNSSxZQUFZLENBQUNDLElBQU07UUFDdkJBLEVBQUVDLGNBQWM7UUFDaEJMLGlFQUNXLENBQ1AsbUJBQ0Esb0JBQ0FFLEtBQUtLLE9BQU8sRUFDWixxQkFFREMsSUFBSSxDQUNILENBQUNDLFNBQVc7WUFDVkMsUUFBUUMsR0FBRyxDQUFDRixPQUFPRyxJQUFJO1FBQ3pCLEdBQ0EsQ0FBQ0MsUUFBVTtZQUNUSCxRQUFRQyxHQUFHLENBQUNFLE1BQU1ELElBQUk7UUFDeEI7UUFFSkUsU0FBU0MsY0FBYyxDQUFDLFFBQVFDLEtBQUs7SUFDdkM7SUFFQSxxQkFDRSw4REFBQ2Q7UUFBS2UsS0FBS2Y7UUFBTWdCLElBQUc7UUFBT0MsVUFBVWhCO1FBQVdpQixXQUFVOzswQkFDeEQsOERBQUNDO2dCQUFJRCxXQUFVOztrQ0FDYiw4REFBQ0U7d0JBQU1GLFdBQVU7a0NBQXNCOzs7Ozs7a0NBQ3ZDLDhEQUFDRzt3QkFBTUMsTUFBSzt3QkFBT0MsTUFBSzt3QkFBWUwsV0FBVTs7Ozs7Ozs7Ozs7OzBCQUVoRCw4REFBQ0M7Z0JBQUlELFdBQVU7O2tDQUNiLDhEQUFDRTt3QkFBTUYsV0FBVTtrQ0FBYTs7Ozs7O2tDQUM5Qiw4REFBQ0c7d0JBQU1ILFdBQVU7d0JBQWVJLE1BQUs7d0JBQVFDLE1BQUs7Ozs7Ozs7Ozs7OzswQkFFcEQsOERBQUNKOztrQ0FDQyw4REFBQ0M7d0JBQU1GLFdBQVU7a0NBQWE7Ozs7OztrQ0FDOUIsOERBQUNNO3dCQUFTRCxNQUFLO3dCQUFVTCxXQUFVOzs7Ozs7Ozs7Ozs7MEJBRXJDLDhEQUFDQztnQkFBSUQsV0FBVTswQkFDYiw0RUFBQ0c7b0JBQU1DLE1BQUs7b0JBQVNOLElBQUc7b0JBQWVTLE9BQU07Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXJELENBQUM7R0F6Q3VCMUI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BsdWdpbi9jb250YWN0LWZvcm0uanM/OGE5NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgZW1haWxqcyBmcm9tIFwiQGVtYWlsanMvYnJvd3NlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29udGFjdEZvcm0oKSB7XHJcbiAgY29uc3QgZm9ybSA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IHNlbmRFbWFpbCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBlbWFpbGpzXHJcbiAgICAgIC5zZW5kRm9ybShcclxuICAgICAgICBcInNlcnZpY2VfNjJzc2hrb1wiLFxyXG4gICAgICAgIFwidGVtcGxhdGVfdHFwN2Z4cVwiLFxyXG4gICAgICAgIGZvcm0uY3VycmVudCxcclxuICAgICAgICBcInRSNVdhYTRtYTdBNVVMY3lGXCJcclxuICAgICAgKVxyXG4gICAgICAudGhlbihcclxuICAgICAgICAocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQudGV4dCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAoZXJyb3IpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLnRleHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybVwiKS5yZXNldCgpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9ybSByZWY9e2Zvcm19IGlkPVwiZm9ybVwiIG9uU3VibWl0PXtzZW5kRW1haWx9IGNsYXNzTmFtZT1cImNvbnRhY3QtZm9ybVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgIFwiPlxyXG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWxhYmVsIGNvbC1tZC02XCI+TmFtZTwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImZyb21fbmFtZVwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XHJcbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5FbWFpbDwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJmcm9tX2VtYWlsXCIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5NZXNzYWdlPC9sYWJlbD5cclxuICAgICAgICA8dGV4dGFyZWEgbmFtZT1cIm1lc3NhZ2VcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMiBzZW5kXCI+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiBpZD1cInNlbmRfbWVzc2FnZVwiIHZhbHVlPVwiU2VuZFwiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9mb3JtPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJlbWFpbGpzIiwiQ29udGFjdEZvcm0iLCJmb3JtIiwic2VuZEVtYWlsIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic2VuZEZvcm0iLCJjdXJyZW50IiwidGhlbiIsInJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJ0ZXh0IiwiZXJyb3IiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicmVzZXQiLCJyZWYiLCJpZCIsIm9uU3VibWl0IiwiY2xhc3NOYW1lIiwiZGl2IiwibGFiZWwiLCJpbnB1dCIsInR5cGUiLCJuYW1lIiwidGV4dGFyZWEiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/plugin/contact-form.js\n"));

/***/ })

});