/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/components/ModalOption.js":
/*!*****************************************!*\
  !*** ./pages/components/ModalOption.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Modal */ \"./node_modules/react-bootstrap/esm/Modal.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/myungj/Desktop/io/purpleio_next/pages/components/ModalOption.js\",\n    _this = undefined;\n\n\n\n\nvar ModalOption = function ModalOption(_ref) {\n  var show = _ref.show,\n      setShow = _ref.setShow,\n      fullscreen = _ref.fullscreen,\n      clickId = _ref.clickId;\n  var name = clickId.name,\n      description = clickId.description;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2__.default, {\n    show: show,\n    fullscreen: fullscreen,\n    onHide: function onHide() {\n      return setShow(false);\n    },\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2__.default.Header, {\n      closeButton: true,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2__.default.Title, {\n        style: true,\n        children: name\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 7\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2__.default.Body, {\n      children: description\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 5\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 3\n  }, _this);\n};\n\n_c = ModalOption;\nvar ListStyle = {\n  margin: '0.5vw',\n  borderRadius: '5px',\n  whiteSpace: 'break-spaces'\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ModalOption);\n\nvar _c;\n\n$RefreshReg$(_c, \"ModalOption\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9Nb2RhbE9wdGlvbi5qcz82NDc2Il0sIm5hbWVzIjpbIk1vZGFsT3B0aW9uIiwic2hvdyIsInNldFNob3ciLCJmdWxsc2NyZWVuIiwiY2xpY2tJZCIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsIkxpc3RTdHlsZSIsIm1hcmdpbiIsImJvcmRlclJhZGl1cyIsIndoaXRlU3BhY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsT0FBeUM7QUFBQSxNQUF0Q0MsSUFBc0MsUUFBdENBLElBQXNDO0FBQUEsTUFBakNDLE9BQWlDLFFBQWpDQSxPQUFpQztBQUFBLE1BQXhCQyxVQUF3QixRQUF4QkEsVUFBd0I7QUFBQSxNQUFiQyxPQUFhLFFBQWJBLE9BQWE7QUFBQSxNQUNwREMsSUFEb0QsR0FDaENELE9BRGdDLENBQ3BEQyxJQURvRDtBQUFBLE1BQy9DQyxXQUQrQyxHQUNoQ0YsT0FEZ0MsQ0FDL0NFLFdBRCtDO0FBRTNELHNCQUdBLDhEQUFDLDBEQUFEO0FBQU8sUUFBSSxFQUFFTCxJQUFiO0FBQW1CLGNBQVUsRUFBRUUsVUFBL0I7QUFBMkMsVUFBTSxFQUFFO0FBQUEsYUFBTUQsT0FBTyxDQUFDLEtBQUQsQ0FBYjtBQUFBLEtBQW5EO0FBQUEsNEJBQ0UsOERBQUMsaUVBQUQ7QUFBYyxpQkFBVyxNQUF6QjtBQUFBLDZCQUNFLDhEQUFDLGdFQUFEO0FBQWEsYUFBSyxNQUFsQjtBQUFBLGtCQUFvQkc7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUlFLDhEQUFDLCtEQUFEO0FBQUEsZ0JBQWFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUhBO0FBU0EsQ0FYRjs7S0FBTU4sVztBQVlOLElBQU1PLFNBQVMsR0FBRztBQUNoQkMsUUFBTSxFQUFFLE9BRFE7QUFFaEJDLGNBQVksRUFBRSxLQUZFO0FBR2hCQyxZQUFVLEVBQUU7QUFISSxDQUFsQjtBQUtBLCtEQUFlVixXQUFmIiwiZmlsZSI6Ii4vcGFnZXMvY29tcG9uZW50cy9Nb2RhbE9wdGlvbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgTW9kYWwgZnJvbSAncmVhY3QtYm9vdHN0cmFwL01vZGFsJ1xuXG5jb25zdCBNb2RhbE9wdGlvbiA9ICh7IHNob3csc2V0U2hvdyAsZnVsbHNjcmVlbixjbGlja0lkfSkgPT4ge1xuICBjb25zdCB7bmFtZSxkZXNjcmlwdGlvbn0gPSBjbGlja0lkXG4gIHJldHVybiAoXG5cblxuICA8TW9kYWwgc2hvdz17c2hvd30gZnVsbHNjcmVlbj17ZnVsbHNjcmVlbn0gb25IaWRlPXsoKSA9PiBzZXRTaG93KGZhbHNlKX0+XG4gICAgPE1vZGFsLkhlYWRlciBjbG9zZUJ1dHRvbj5cbiAgICAgIDxNb2RhbC5UaXRsZSBzdHlsZT57bmFtZX08L01vZGFsLlRpdGxlPlxuICAgIDwvTW9kYWwuSGVhZGVyPlxuICAgIDxNb2RhbC5Cb2R5PntkZXNjcmlwdGlvbn08L01vZGFsLkJvZHk+XG4gIDwvTW9kYWw+XG4pfTtcbmNvbnN0IExpc3RTdHlsZSA9IHtcbiAgbWFyZ2luOiAnMC41dncnLFxuICBib3JkZXJSYWRpdXM6ICc1cHgnLFxuICB3aGl0ZVNwYWNlOiAnYnJlYWstc3BhY2VzJyxcbn07XG5leHBvcnQgZGVmYXVsdCBNb2RhbE9wdGlvbjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/ModalOption.js\n");

/***/ })

});