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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ContactForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _emailjs_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emailjs/browser */ \"./node_modules/@emailjs/browser/es/index.js\");\n\nvar _s = $RefreshSig$();\n\n\nfunction ContactForm() {\n    _s();\n    const [form, setForm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        from_email: \"\",\n        from_name: \"\",\n        msg: \"\"\n    });\n    const [success, setSuccess] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const onChange = (e)=>{\n        setForm({\n            ...form,\n            [e.target.name]: e.target.value\n        });\n    };\n    const { email , name , msg  } = form;\n    const sendEmail = (e)=>{\n        e.preventDefault();\n        if (from_email && from_name && msg) {\n            setSuccess(true);\n            setTimeout(()=>{\n                _emailjs_browser__WEBPACK_IMPORTED_MODULE_2__[\"default\"].sendForm(\"service_62sshko\", \"template_tqp7fxq\", form.current, \"tR5Waa4ma7A5ULcyF\").then((result)=>{\n                    console.log(result.text);\n                }, (error)=>{\n                    console.log(error.text);\n                });\n                setSuccess(false);\n            }, 2000);\n        } else {\n            setError(true);\n            setTimeout(()=>{\n                setError(false);\n            }, 2000);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: sendEmail,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"For more questions, feel free to contact me via the contact form!\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sara May\\\\Desktop\\\\tapsi-react\\\\src\\\\plugin\\\\contact-form.js\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"returnmessage\",\n                \"data-success\": \"Your message has been received, we will contact you soon.\",\n                style: {\n                    display: success ? \"block\" : \"none\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"contact_success\",\n                    children: \"Message sent. You can expect answer in 24hr.\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Sara May\\\\Desktop\\\\tapsi-react\\\\src\\\\plugin\\\\contact-form.js\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sara May\\\\Desktop\\\\tapsi-react\\\\src\\\\plugin\\\\contact-form.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"empty_notice\",\n                style: {\n                    display: error ? \"block\" : \"none\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    children: \"Please fill required fields!\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Sara May\\\\Desktop\\\\tapsi-react\\\\src\\\\plugin\\\\contact-form.js\",\n                    lineNumber: 59,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sara May\\\\Desktop\\\\tapsi-react\\\\src\\\\plugin\\\\contact-form.js\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Name\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sara May\\\\Desktop\\\\tapsi-react\\\\src\\\\plugin\\\\contact-form.js\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                onFocus: ()=>setActive(\"name\"),\n                onBlur: ()=>setActive(null),\n                onChange: (e)=>onChange(e),\n                type: \"text\",\n                value: name,\n                name: \"from_name\",\n                placeholder: \"\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sara May\\\\Desktop\\\\tapsi-react\\\\src\\\\plugin\\\\contact-form.js\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Email\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sara May\\\\Desktop\\\\tapsi-react\\\\src\\\\plugin\\\\contact-form.js\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                onFocus: ()=>setActive(\"email\"),\n                onBlur: ()=>setActive(null),\n                onChange: (e)=>onChange(e),\n                type: \"email\",\n                value: email,\n                name: \"from_email\",\n                placeholder: \"\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sara May\\\\Desktop\\\\tapsi-react\\\\src\\\\plugin\\\\contact-form.js\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Message\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sara May\\\\Desktop\\\\tapsi-react\\\\src\\\\plugin\\\\contact-form.js\",\n                lineNumber: 81,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                onFocus: ()=>setActive(\"message\"),\n                onBlur: ()=>setActive(null),\n                name: \"msg\",\n                onChange: (e)=>onChange(e),\n                value: msg,\n                placeholder: \"Your message\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sara May\\\\Desktop\\\\tapsi-react\\\\src\\\\plugin\\\\contact-form.js\",\n                lineNumber: 82,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"submit\",\n                value: \"Send\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sara May\\\\Desktop\\\\tapsi-react\\\\src\\\\plugin\\\\contact-form.js\",\n                lineNumber: 90,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Sara May\\\\Desktop\\\\tapsi-react\\\\src\\\\plugin\\\\contact-form.js\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, this);\n}\n_s(ContactForm, \"OmP5oR2ZJ3Y9TSu25g2N9f+tZ4o=\");\n_c = ContactForm;\nvar _c;\n$RefreshReg$(_c, \"ContactForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztBQUdqQyxDQUFDO0dBekZ1QmhCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wbHVnaW4vY29udGFjdC1mb3JtLmpzPzhhOTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGVtYWlsanMgZnJvbSBcIkBlbWFpbGpzL2Jyb3dzZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRhY3RGb3JtKCkge1xyXG4gIGNvbnN0IFtmb3JtLCBzZXRGb3JtXSA9IHVzZVN0YXRlKHsgZnJvbV9lbWFpbDogXCJcIiwgZnJvbV9uYW1lOiBcIlwiLCBtc2c6IFwiXCIgfSk7XHJcbiAgY29uc3QgW3N1Y2Nlc3MsIHNldFN1Y2Nlc3NdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBvbkNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBzZXRGb3JtKHsgLi4uZm9ybSwgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSB9KTtcclxuICB9O1xyXG4gIGNvbnN0IHsgZW1haWwsIG5hbWUsIG1zZyB9ID0gZm9ybTtcclxuICBjb25zdCBzZW5kRW1haWwgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKGZyb21fZW1haWwgJiYgZnJvbV9uYW1lICYmIG1zZykge1xyXG4gICAgICBzZXRTdWNjZXNzKHRydWUpO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBlbWFpbGpzXHJcbiAgICAgICAgICAuc2VuZEZvcm0oXHJcbiAgICAgICAgICAgIFwic2VydmljZV82MnNzaGtvXCIsXHJcbiAgICAgICAgICAgIFwidGVtcGxhdGVfdHFwN2Z4cVwiLFxyXG4gICAgICAgICAgICBmb3JtLmN1cnJlbnQsXHJcbiAgICAgICAgICAgIFwidFI1V2FhNG1hN0E1VUxjeUZcIlxyXG4gICAgICAgICAgKVxyXG4gICAgICAgICAgLnRoZW4oXHJcbiAgICAgICAgICAgIChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQudGV4dCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLnRleHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIHNldFN1Y2Nlc3MoZmFsc2UpO1xyXG4gICAgICB9LCAyMDAwKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldEVycm9yKHRydWUpO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBzZXRFcnJvcihmYWxzZSk7XHJcbiAgICAgIH0sIDIwMDApO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9ybSBvblN1Ym1pdD17c2VuZEVtYWlsfT5cclxuICAgICAgPHA+Rm9yIG1vcmUgcXVlc3Rpb25zLCBmZWVsIGZyZWUgdG8gY29udGFjdCBtZSB2aWEgdGhlIGNvbnRhY3QgZm9ybSE8L3A+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9XCJyZXR1cm5tZXNzYWdlXCJcclxuICAgICAgICBkYXRhLXN1Y2Nlc3M9XCJZb3VyIG1lc3NhZ2UgaGFzIGJlZW4gcmVjZWl2ZWQsIHdlIHdpbGwgY29udGFjdCB5b3Ugc29vbi5cIlxyXG4gICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IHN1Y2Nlc3MgPyBcImJsb2NrXCIgOiBcIm5vbmVcIiB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29udGFjdF9zdWNjZXNzXCI+XHJcbiAgICAgICAgICBNZXNzYWdlIHNlbnQuIFlvdSBjYW4gZXhwZWN0IGFuc3dlciBpbiAyNGhyLlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9XCJlbXB0eV9ub3RpY2VcIlxyXG4gICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IGVycm9yID8gXCJibG9ja1wiIDogXCJub25lXCIgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxzcGFuPlBsZWFzZSBmaWxsIHJlcXVpcmVkIGZpZWxkcyE8L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8bGFiZWw+TmFtZTwvbGFiZWw+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIG9uRm9jdXM9eygpID0+IHNldEFjdGl2ZShcIm5hbWVcIil9XHJcbiAgICAgICAgb25CbHVyPXsoKSA9PiBzZXRBY3RpdmUobnVsbCl9XHJcbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbkNoYW5nZShlKX1cclxuICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgdmFsdWU9e25hbWV9XHJcbiAgICAgICAgbmFtZT1cImZyb21fbmFtZVwiXHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJcIlxyXG4gICAgICAvPlxyXG4gICAgICA8bGFiZWw+RW1haWw8L2xhYmVsPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICBvbkZvY3VzPXsoKSA9PiBzZXRBY3RpdmUoXCJlbWFpbFwiKX1cclxuICAgICAgICBvbkJsdXI9eygpID0+IHNldEFjdGl2ZShudWxsKX1cclxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uQ2hhbmdlKGUpfVxyXG4gICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgIG5hbWU9XCJmcm9tX2VtYWlsXCJcclxuICAgICAgICBwbGFjZWhvbGRlcj1cIlwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxsYWJlbD5NZXNzYWdlPC9sYWJlbD5cclxuICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgb25Gb2N1cz17KCkgPT4gc2V0QWN0aXZlKFwibWVzc2FnZVwiKX1cclxuICAgICAgICBvbkJsdXI9eygpID0+IHNldEFjdGl2ZShudWxsKX1cclxuICAgICAgICBuYW1lPVwibXNnXCJcclxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uQ2hhbmdlKGUpfVxyXG4gICAgICAgIHZhbHVlPXttc2d9XHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJZb3VyIG1lc3NhZ2VcIlxyXG4gICAgICAvPlxyXG4gICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU2VuZFwiIC8+XHJcbiAgICA8L2Zvcm0+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsImVtYWlsanMiLCJDb250YWN0Rm9ybSIsImZvcm0iLCJzZXRGb3JtIiwiZnJvbV9lbWFpbCIsImZyb21fbmFtZSIsIm1zZyIsInN1Y2Nlc3MiLCJzZXRTdWNjZXNzIiwiZXJyb3IiLCJzZXRFcnJvciIsImFjdGl2ZSIsInNldEFjdGl2ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsImVtYWlsIiwic2VuZEVtYWlsIiwicHJldmVudERlZmF1bHQiLCJzZXRUaW1lb3V0Iiwic2VuZEZvcm0iLCJjdXJyZW50IiwidGhlbiIsInJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJ0ZXh0Iiwib25TdWJtaXQiLCJwIiwiZGl2IiwiY2xhc3NOYW1lIiwiZGF0YS1zdWNjZXNzIiwic3R5bGUiLCJkaXNwbGF5Iiwic3BhbiIsImxhYmVsIiwiaW5wdXQiLCJvbkZvY3VzIiwib25CbHVyIiwidHlwZSIsInBsYWNlaG9sZGVyIiwidGV4dGFyZWEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/plugin/contact-form.js\n"));

/***/ })

});