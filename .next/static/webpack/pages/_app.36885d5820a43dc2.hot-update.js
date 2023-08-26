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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ContactForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _emailjs_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emailjs/browser */ \"./node_modules/@emailjs/browser/es/index.js\");\n\nvar _s = $RefreshSig$();\n\n\nfunction ContactForm() {\n    _s();\n    const [form, setForm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        from_email: \"\",\n        from_name: \"\",\n        msg: \"\"\n    });\n    const [success, setSuccess] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const onChange = (e)=>{\n        setForm({\n            ...form,\n            [e.target.name]: e.target.value\n        });\n    };\n    const { email , name , msg  } = form;\n    const sendEmail = (e)=>{\n        e.preventDefault();\n        if (email && name && msg) {\n            setSuccess(true);\n            _emailjs_browser__WEBPACK_IMPORTED_MODULE_2__[\"default\"].sendForm(\"service_62sshko\", \"template_tqp7fxq\", form.current, \"tR5Waa4ma7A5ULcyF\").then((result)=>{\n                console.log(result.text);\n            }, (error)=>{\n                console.log(error.text);\n            });\n        } else {\n            setError(true);\n            setTimeout(()=>{\n                setError(false);\n            }, 2000);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: sendEmail,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"For more questions, feel free to contact me via the contact form!\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sara May\\\\Desktop\\\\tapsi-react\\\\src\\\\plugin\\\\contact-form.js\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"returnmessage\",\n                \"data-success\": \"Your message has been received, we will contact you soon.\",\n                style: {\n                    display: success ? \"block\" : \"none\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"contact_success\",\n                    children: \"Message sent. You can expect answer in 24hr.\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Sara May\\\\Desktop\\\\tapsi-react\\\\src\\\\plugin\\\\contact-form.js\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sara May\\\\Desktop\\\\tapsi-react\\\\src\\\\plugin\\\\contact-form.js\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"empty_notice\",\n                style: {\n                    display: error ? \"block\" : \"none\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    children: \"Please fill required fields!\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Sara May\\\\Desktop\\\\tapsi-react\\\\src\\\\plugin\\\\contact-form.js\",\n                    lineNumber: 57,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sara May\\\\Desktop\\\\tapsi-react\\\\src\\\\plugin\\\\contact-form.js\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Name\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sara May\\\\Desktop\\\\tapsi-react\\\\src\\\\plugin\\\\contact-form.js\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                onFocus: ()=>setActive(\"from_name\"),\n                onBlur: ()=>setActive(null),\n                onChange: (e)=>onChange(e),\n                type: \"text\",\n                value: name,\n                name: \"from_name\",\n                placeholder: \"\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sara May\\\\Desktop\\\\tapsi-react\\\\src\\\\plugin\\\\contact-form.js\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Email\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sara May\\\\Desktop\\\\tapsi-react\\\\src\\\\plugin\\\\contact-form.js\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                onFocus: ()=>setActive(\"from_email\"),\n                onBlur: ()=>setActive(null),\n                onChange: (e)=>onChange(e),\n                type: \"email\",\n                value: email,\n                name: \"from_email\",\n                placeholder: \"\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sara May\\\\Desktop\\\\tapsi-react\\\\src\\\\plugin\\\\contact-form.js\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Message\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sara May\\\\Desktop\\\\tapsi-react\\\\src\\\\plugin\\\\contact-form.js\",\n                lineNumber: 79,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                onFocus: ()=>setActive(\"message\"),\n                onBlur: ()=>setActive(null),\n                name: \"msg\",\n                onChange: (e)=>onChange(e),\n                value: msg,\n                placeholder: \"Your message\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sara May\\\\Desktop\\\\tapsi-react\\\\src\\\\plugin\\\\contact-form.js\",\n                lineNumber: 80,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"submit\",\n                value: \"Send\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sara May\\\\Desktop\\\\tapsi-react\\\\src\\\\plugin\\\\contact-form.js\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Sara May\\\\Desktop\\\\tapsi-react\\\\src\\\\plugin\\\\contact-form.js\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, this);\n}\n_s(ContactForm, \"OmP5oR2ZJ3Y9TSu25g2N9f+tZ4o=\");\n_c = ContactForm;\nvar _c;\n$RefreshReg$(_c, \"ContactForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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azovL19OX0UvLi9zcmMvcGx1Z2luL2NvbnRhY3QtZm9ybS5qcz84YTk3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBlbWFpbGpzIGZyb20gXCJAZW1haWxqcy9icm93c2VyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250YWN0Rm9ybSgpIHtcclxuICBjb25zdCBbZm9ybSwgc2V0Rm9ybV0gPSB1c2VTdGF0ZSh7IGZyb21fZW1haWw6IFwiXCIsIGZyb21fbmFtZTogXCJcIiwgbXNnOiBcIlwiIH0pO1xyXG4gIGNvbnN0IFtzdWNjZXNzLCBzZXRTdWNjZXNzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3Qgb25DaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgc2V0Rm9ybSh7IC4uLmZvcm0sIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSk7XHJcbiAgfTtcclxuICBjb25zdCB7IGVtYWlsLCBuYW1lLCBtc2cgfSA9IGZvcm07XHJcbiAgY29uc3Qgc2VuZEVtYWlsID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmIChlbWFpbCAmJiBuYW1lICYmIG1zZykge1xyXG4gICAgICBzZXRTdWNjZXNzKHRydWUpO1xyXG5cclxuICAgICAgZW1haWxqc1xyXG4gICAgICAgIC5zZW5kRm9ybShcclxuICAgICAgICAgIFwic2VydmljZV82MnNzaGtvXCIsXHJcbiAgICAgICAgICBcInRlbXBsYXRlX3RxcDdmeHFcIixcclxuICAgICAgICAgIGZvcm0uY3VycmVudCxcclxuICAgICAgICAgIFwidFI1V2FhNG1hN0E1VUxjeUZcIlxyXG4gICAgICAgIClcclxuICAgICAgICAudGhlbihcclxuICAgICAgICAgIChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0LnRleHQpO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci50ZXh0KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0RXJyb3IodHJ1ZSk7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHNldEVycm9yKGZhbHNlKTtcclxuICAgICAgfSwgMjAwMCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxmb3JtIG9uU3VibWl0PXtzZW5kRW1haWx9PlxyXG4gICAgICA8cD5Gb3IgbW9yZSBxdWVzdGlvbnMsIGZlZWwgZnJlZSB0byBjb250YWN0IG1lIHZpYSB0aGUgY29udGFjdCBmb3JtITwvcD5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cInJldHVybm1lc3NhZ2VcIlxyXG4gICAgICAgIGRhdGEtc3VjY2Vzcz1cIllvdXIgbWVzc2FnZSBoYXMgYmVlbiByZWNlaXZlZCwgd2Ugd2lsbCBjb250YWN0IHlvdSBzb29uLlwiXHJcbiAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogc3VjY2VzcyA/IFwiYmxvY2tcIiA6IFwibm9uZVwiIH19XHJcbiAgICAgID5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb250YWN0X3N1Y2Nlc3NcIj5cclxuICAgICAgICAgIE1lc3NhZ2Ugc2VudC4gWW91IGNhbiBleHBlY3QgYW5zd2VyIGluIDI0aHIuXHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cImVtcHR5X25vdGljZVwiXHJcbiAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogZXJyb3IgPyBcImJsb2NrXCIgOiBcIm5vbmVcIiB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPHNwYW4+UGxlYXNlIGZpbGwgcmVxdWlyZWQgZmllbGRzITwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxsYWJlbD5OYW1lPC9sYWJlbD5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgb25Gb2N1cz17KCkgPT4gc2V0QWN0aXZlKFwiZnJvbV9uYW1lXCIpfVxyXG4gICAgICAgIG9uQmx1cj17KCkgPT4gc2V0QWN0aXZlKG51bGwpfVxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25DaGFuZ2UoZSl9XHJcbiAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgIHZhbHVlPXtuYW1lfVxyXG4gICAgICAgIG5hbWU9XCJmcm9tX25hbWVcIlxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiXCJcclxuICAgICAgLz5cclxuICAgICAgPGxhYmVsPkVtYWlsPC9sYWJlbD5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgb25Gb2N1cz17KCkgPT4gc2V0QWN0aXZlKFwiZnJvbV9lbWFpbFwiKX1cclxuICAgICAgICBvbkJsdXI9eygpID0+IHNldEFjdGl2ZShudWxsKX1cclxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uQ2hhbmdlKGUpfVxyXG4gICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgIG5hbWU9XCJmcm9tX2VtYWlsXCJcclxuICAgICAgICBwbGFjZWhvbGRlcj1cIlwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxsYWJlbD5NZXNzYWdlPC9sYWJlbD5cclxuICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgb25Gb2N1cz17KCkgPT4gc2V0QWN0aXZlKFwibWVzc2FnZVwiKX1cclxuICAgICAgICBvbkJsdXI9eygpID0+IHNldEFjdGl2ZShudWxsKX1cclxuICAgICAgICBuYW1lPVwibXNnXCJcclxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uQ2hhbmdlKGUpfVxyXG4gICAgICAgIHZhbHVlPXttc2d9XHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJZb3VyIG1lc3NhZ2VcIlxyXG4gICAgICAvPlxyXG4gICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU2VuZFwiIC8+XHJcbiAgICA8L2Zvcm0+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsImVtYWlsanMiLCJDb250YWN0Rm9ybSIsImZvcm0iLCJzZXRGb3JtIiwiZnJvbV9lbWFpbCIsImZyb21fbmFtZSIsIm1zZyIsInN1Y2Nlc3MiLCJzZXRTdWNjZXNzIiwiZXJyb3IiLCJzZXRFcnJvciIsImFjdGl2ZSIsInNldEFjdGl2ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsImVtYWlsIiwic2VuZEVtYWlsIiwicHJldmVudERlZmF1bHQiLCJzZW5kRm9ybSIsImN1cnJlbnQiLCJ0aGVuIiwicmVzdWx0IiwiY29uc29sZSIsImxvZyIsInRleHQiLCJzZXRUaW1lb3V0Iiwib25TdWJtaXQiLCJwIiwiZGl2IiwiY2xhc3NOYW1lIiwiZGF0YS1zdWNjZXNzIiwic3R5bGUiLCJkaXNwbGF5Iiwic3BhbiIsImxhYmVsIiwiaW5wdXQiLCJvbkZvY3VzIiwib25CbHVyIiwidHlwZSIsInBsYWNlaG9sZGVyIiwidGV4dGFyZWEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/plugin/contact-form.js\n"));

/***/ })

});