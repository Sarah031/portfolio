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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ContactForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _emailjs_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emailjs/browser */ \"./node_modules/@emailjs/browser/es/index.js\");\n\nvar _s = $RefreshSig$();\n\n\nfunction ContactForm() {\n    _s();\n    const [form, setForm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        from_email: \"\",\n        from_name: \"\",\n        msg: \"\"\n    });\n    const [success, setSuccess] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const onChange = (e)=>{\n        setForm({\n            ...form,\n            [e.target.name]: e.target.value\n        });\n    };\n    const { email , name , msg  } = form;\n    const sendEmail = (e)=>{\n        e.preventDefault();\n        if (email && name && msg) {\n            setSuccess(true);\n            setTimeout(()=>{\n                _emailjs_browser__WEBPACK_IMPORTED_MODULE_2__[\"default\"].sendForm(\"service_62sshko\", \"template_tqp7fxq\", form.current, \"tR5Waa4ma7A5ULcyF\").then((result)=>{\n                    console.log(result.text);\n                }, (error)=>{\n                    console.log(error.text);\n                });\n                setSuccess(false);\n            }, 2000);\n        } else {\n            setError(true);\n            setTimeout(()=>{\n                setError(false);\n            }, 2000);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: sendEmail,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"For more questions, feel free to contact me via the contact form!\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sara May\\\\Desktop\\\\tapsi-react\\\\src\\\\plugin\\\\contact-form.js\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"returnmessage\",\n                \"data-success\": \"Your message has been received, we will contact you soon.\",\n                style: {\n                    display: success ? \"block\" : \"none\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"contact_success\",\n                    children: \"Message sent. You can expect answer in 24hr.\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Sara May\\\\Desktop\\\\tapsi-react\\\\src\\\\plugin\\\\contact-form.js\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sara May\\\\Desktop\\\\tapsi-react\\\\src\\\\plugin\\\\contact-form.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"empty_notice\",\n                style: {\n                    display: error ? \"block\" : \"none\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    children: \"Please fill required fields!\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Sara May\\\\Desktop\\\\tapsi-react\\\\src\\\\plugin\\\\contact-form.js\",\n                    lineNumber: 59,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sara May\\\\Desktop\\\\tapsi-react\\\\src\\\\plugin\\\\contact-form.js\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Name\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sara May\\\\Desktop\\\\tapsi-react\\\\src\\\\plugin\\\\contact-form.js\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                onFocus: ()=>setActive(\"from_name\"),\n                onBlur: ()=>setActive(null),\n                onChange: (e)=>onChange(e),\n                type: \"text\",\n                value: name,\n                name: \"from_name\",\n                placeholder: \"\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sara May\\\\Desktop\\\\tapsi-react\\\\src\\\\plugin\\\\contact-form.js\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Email\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sara May\\\\Desktop\\\\tapsi-react\\\\src\\\\plugin\\\\contact-form.js\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                onFocus: ()=>setActive(\"from_email\"),\n                onBlur: ()=>setActive(null),\n                onChange: (e)=>onChange(e),\n                type: \"email\",\n                value: email,\n                name: \"from_email\",\n                placeholder: \"\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sara May\\\\Desktop\\\\tapsi-react\\\\src\\\\plugin\\\\contact-form.js\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Message\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sara May\\\\Desktop\\\\tapsi-react\\\\src\\\\plugin\\\\contact-form.js\",\n                lineNumber: 81,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                onFocus: ()=>setActive(\"message\"),\n                onBlur: ()=>setActive(null),\n                name: \"msg\",\n                onChange: (e)=>onChange(e),\n                value: msg,\n                placeholder: \"Your message\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sara May\\\\Desktop\\\\tapsi-react\\\\src\\\\plugin\\\\contact-form.js\",\n                lineNumber: 82,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"submit\",\n                value: \"Send\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sara May\\\\Desktop\\\\tapsi-react\\\\src\\\\plugin\\\\contact-form.js\",\n                lineNumber: 90,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Sara May\\\\Desktop\\\\tapsi-react\\\\src\\\\plugin\\\\contact-form.js\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, this);\n}\n_s(ContactForm, \"OmP5oR2ZJ3Y9TSu25g2N9f+tZ4o=\");\n_c = ContactForm;\nvar _c;\n$RefreshReg$(_c, \"ContactForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBR2pDLENBQUM7R0F6RnVCaEI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BsdWdpbi9jb250YWN0LWZvcm0uanM/OGE5NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgZW1haWxqcyBmcm9tIFwiQGVtYWlsanMvYnJvd3NlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29udGFjdEZvcm0oKSB7XHJcbiAgY29uc3QgW2Zvcm0sIHNldEZvcm1dID0gdXNlU3RhdGUoeyBmcm9tX2VtYWlsOiBcIlwiLCBmcm9tX25hbWU6IFwiXCIsIG1zZzogXCJcIiB9KTtcclxuICBjb25zdCBbc3VjY2Vzcywgc2V0U3VjY2Vzc10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IG9uQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIHNldEZvcm0oeyAuLi5mb3JtLCBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG4gIH07XHJcbiAgY29uc3QgeyBlbWFpbCwgbmFtZSwgbXNnIH0gPSBmb3JtO1xyXG4gIGNvbnN0IHNlbmRFbWFpbCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAoZW1haWwgJiYgbmFtZSAmJiBtc2cpIHtcclxuICAgICAgc2V0U3VjY2Vzcyh0cnVlKTtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgZW1haWxqc1xyXG4gICAgICAgICAgLnNlbmRGb3JtKFxyXG4gICAgICAgICAgICBcInNlcnZpY2VfNjJzc2hrb1wiLFxyXG4gICAgICAgICAgICBcInRlbXBsYXRlX3RxcDdmeHFcIixcclxuICAgICAgICAgICAgZm9ybS5jdXJyZW50LFxyXG4gICAgICAgICAgICBcInRSNVdhYTRtYTdBNVVMY3lGXCJcclxuICAgICAgICAgIClcclxuICAgICAgICAgIC50aGVuKFxyXG4gICAgICAgICAgICAocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0LnRleHQpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci50ZXh0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICBzZXRTdWNjZXNzKGZhbHNlKTtcclxuICAgICAgfSwgMjAwMCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRFcnJvcih0cnVlKTtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgc2V0RXJyb3IoZmFsc2UpO1xyXG4gICAgICB9LCAyMDAwKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGZvcm0gb25TdWJtaXQ9e3NlbmRFbWFpbH0+XHJcbiAgICAgIDxwPkZvciBtb3JlIHF1ZXN0aW9ucywgZmVlbCBmcmVlIHRvIGNvbnRhY3QgbWUgdmlhIHRoZSBjb250YWN0IGZvcm0hPC9wPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPVwicmV0dXJubWVzc2FnZVwiXHJcbiAgICAgICAgZGF0YS1zdWNjZXNzPVwiWW91ciBtZXNzYWdlIGhhcyBiZWVuIHJlY2VpdmVkLCB3ZSB3aWxsIGNvbnRhY3QgeW91IHNvb24uXCJcclxuICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBzdWNjZXNzID8gXCJibG9ja1wiIDogXCJub25lXCIgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbnRhY3Rfc3VjY2Vzc1wiPlxyXG4gICAgICAgICAgTWVzc2FnZSBzZW50LiBZb3UgY2FuIGV4cGVjdCBhbnN3ZXIgaW4gMjRoci5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiZW1wdHlfbm90aWNlXCJcclxuICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBlcnJvciA/IFwiYmxvY2tcIiA6IFwibm9uZVwiIH19XHJcbiAgICAgID5cclxuICAgICAgICA8c3Bhbj5QbGVhc2UgZmlsbCByZXF1aXJlZCBmaWVsZHMhPC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGxhYmVsPk5hbWU8L2xhYmVsPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICBvbkZvY3VzPXsoKSA9PiBzZXRBY3RpdmUoXCJmcm9tX25hbWVcIil9XHJcbiAgICAgICAgb25CbHVyPXsoKSA9PiBzZXRBY3RpdmUobnVsbCl9XHJcbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbkNoYW5nZShlKX1cclxuICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgdmFsdWU9e25hbWV9XHJcbiAgICAgICAgbmFtZT1cImZyb21fbmFtZVwiXHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJcIlxyXG4gICAgICAvPlxyXG4gICAgICA8bGFiZWw+RW1haWw8L2xhYmVsPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICBvbkZvY3VzPXsoKSA9PiBzZXRBY3RpdmUoXCJmcm9tX2VtYWlsXCIpfVxyXG4gICAgICAgIG9uQmx1cj17KCkgPT4gc2V0QWN0aXZlKG51bGwpfVxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25DaGFuZ2UoZSl9XHJcbiAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgbmFtZT1cImZyb21fZW1haWxcIlxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiXCJcclxuICAgICAgLz5cclxuICAgICAgPGxhYmVsPk1lc3NhZ2U8L2xhYmVsPlxyXG4gICAgICA8dGV4dGFyZWFcclxuICAgICAgICBvbkZvY3VzPXsoKSA9PiBzZXRBY3RpdmUoXCJtZXNzYWdlXCIpfVxyXG4gICAgICAgIG9uQmx1cj17KCkgPT4gc2V0QWN0aXZlKG51bGwpfVxyXG4gICAgICAgIG5hbWU9XCJtc2dcIlxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25DaGFuZ2UoZSl9XHJcbiAgICAgICAgdmFsdWU9e21zZ31cclxuICAgICAgICBwbGFjZWhvbGRlcj1cIllvdXIgbWVzc2FnZVwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTZW5kXCIgLz5cclxuICAgIDwvZm9ybT5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwiZW1haWxqcyIsIkNvbnRhY3RGb3JtIiwiZm9ybSIsInNldEZvcm0iLCJmcm9tX2VtYWlsIiwiZnJvbV9uYW1lIiwibXNnIiwic3VjY2VzcyIsInNldFN1Y2Nlc3MiLCJlcnJvciIsInNldEVycm9yIiwiYWN0aXZlIiwic2V0QWN0aXZlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiZW1haWwiLCJzZW5kRW1haWwiLCJwcmV2ZW50RGVmYXVsdCIsInNldFRpbWVvdXQiLCJzZW5kRm9ybSIsImN1cnJlbnQiLCJ0aGVuIiwicmVzdWx0IiwiY29uc29sZSIsImxvZyIsInRleHQiLCJvblN1Ym1pdCIsInAiLCJkaXYiLCJjbGFzc05hbWUiLCJkYXRhLXN1Y2Nlc3MiLCJzdHlsZSIsImRpc3BsYXkiLCJzcGFuIiwibGFiZWwiLCJpbnB1dCIsIm9uRm9jdXMiLCJvbkJsdXIiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ0ZXh0YXJlYSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/plugin/contact-form.js\n"));

/***/ })

});