/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_mj_Desktop_next_project_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_mj_Desktop_next_project_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_mj_Desktop_next_project_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_mj_Desktop_next_project_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Layout */ \"./pages/components/Layout.js\");\n/* harmony import */ var react_bootstrap_Figure__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/Figure */ \"./node_modules/react-bootstrap/esm/Figure.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/Users/mj/Desktop/next-project/pages/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar Index = function Index(_ref) {\n  _s();\n\n  var data = _ref.data;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(true),\n      fullscreen = _useState[0],\n      setFullscreen = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false),\n      show = _useState2[0],\n      setShow = _useState2[1];\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_6__.default, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n      className: \"jsx-2120997229\" + \" \" + \"form\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n        className: \"jsx-2120997229\" + \" \" + \"listTitle\",\n        children: \"STORE\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n        className: \"jsx-2120997229\" + \" \" + \"lists\",\n        children: data.map(function (data, idx) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_bootstrap_Figure__WEBPACK_IMPORTED_MODULE_8__.default, {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_bootstrap_Figure__WEBPACK_IMPORTED_MODULE_8__.default.Image, {\n              width: 180,\n              height: 180,\n              alt: \"171x180\",\n              src: data.thumb,\n              style: ListStyle,\n              onClick: function onClick() {\n                return handleShow(v);\n              }\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 20,\n              columnNumber: 17\n            }, _this)\n          }, idx, false, {\n            fileName: _jsxFileName,\n            lineNumber: 19,\n            columnNumber: 15\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default()), {\n      id: \"2120997229\",\n      children: \".form.jsx-2120997229{margin:1.5rem 1.75rem;text-align:center;}.lists.jsx-2120997229{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:1vw auto;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;width:68vw;}.listTitle.jsx-2120997229{font-family:Gotham A,Gotham B,DIN,sans-serif;font-weight:700;font-size:2rem;margin-bottom:1.75rem;text-align:left;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tai9EZXNrdG9wL25leHQtcHJvamVjdC9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQ2tCLEFBR2lDLEFBSVQsQUFRbUMsc0JBWDlCLGtCQUNwQixLQVdrQixnQkFDRCxhQVRDLEVBVU0sY0FUSyxRQVVYLGdCQUNsQixpRkFWcUIscUVBQ0oseURBQ0osV0FDYiIsImZpbGUiOiIvVXNlcnMvbWovRGVza3RvcC9uZXh0LXByb2plY3QvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExheW91dCBmcm9tICcuL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCBGaWd1cmUgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0ZpZ3VyZSc7XG5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNvbnN0IEluZGV4ID0gKHsgZGF0YSB9KSA9PiB7XG4gIGNvbnN0IFtmdWxsc2NyZWVuLCBzZXRGdWxsc2NyZWVuXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbc2hvdywgc2V0U2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdFRpdGxlXCI+U1RPUkU8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0c1wiPlxuICAgICAgICAgIHtkYXRhLm1hcCgoZGF0YSwgaWR4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8RmlndXJlIGtleT17aWR4fT5cbiAgICAgICAgICAgICAgICA8RmlndXJlLkltYWdlXG4gICAgICAgICAgICAgICAgICB3aWR0aD17MTgwfVxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsxODB9XG4gICAgICAgICAgICAgICAgICBhbHQ9XCIxNzF4MTgwXCJcbiAgICAgICAgICAgICAgICAgIHNyYz17ZGF0YS50aHVtYn1cbiAgICAgICAgICAgICAgICAgIHN0eWxlPXtMaXN0U3R5bGV9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTaG93KHYpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvRmlndXJlPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmZvcm0ge1xuICAgICAgICAgIG1hcmdpbjogMS41cmVtIDEuNzVyZW07XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIC5saXN0cyB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBtYXJnaW46IDF2dyBhdXRvO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICB3aWR0aDogNjh2dztcbiAgICAgICAgfVxuICAgICAgICAubGlzdFRpdGxlIHtcbiAgICAgICAgICBmb250LWZhbWlseTogR290aGFtIEEsIEdvdGhhbSBCLCBESU4sIHNhbnMtc2VyaWY7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMS43NXJlbTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG5jb25zdCBMaXN0U3R5bGUgPSB7XG4gIG1hcmdpbjogJzAuNXZ3JyxcbiAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcbiAgY3Vyc29yOiAncG9pbnRlcicsXG59O1xuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24gKCkge1xuICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6OTAwMC9zdG9yZXMnKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5kYXRhO1xuXG4gIGNvbnNvbGUubG9nKGBTaG93IGRhdGEgZmV0Y2hlZC4gQ291bnQ6ICR7ZGF0YS5sZW5ndGh9YCk7XG5cbiAgcmV0dXJuIHtcbiAgICBkYXRhOiBkYXRhLFxuICB9O1xufTtcblxuZnVuY3Rpb24gaGFuZGxlU2hvdyhicmVha3BvaW50KSB7XG4gIHNldEZ1bGxzY3JlZW4oYnJlYWtwb2ludCk7XG4gIHNldFNob3codHJ1ZSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl19 */\\n/*@ sourceURL=/Users/mj/Desktop/next-project/pages/index.js */\"\n    }, void 0, false, void 0, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Index, \"r1BdtmaL5kfnF9ZWQx7Jab+0RYs=\");\n\n_c = Index;\nvar ListStyle = {\n  margin: '0.5vw',\n  borderRadius: '5px',\n  cursor: 'pointer'\n};\nIndex.getInitialProps = /*#__PURE__*/(0,_Users_mj_Desktop_next_project_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_Users_mj_Desktop_next_project_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n  var res, data;\n  return _Users_mj_Desktop_next_project_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          _context.next = 2;\n          return axios__WEBPACK_IMPORTED_MODULE_7___default().get('http://localhost:9000/stores');\n\n        case 2:\n          res = _context.sent;\n          _context.next = 5;\n          return res.data;\n\n        case 5:\n          data = _context.sent;\n          console.log(\"Show data fetched. Count: \".concat(data.length));\n          return _context.abrupt(\"return\", {\n            data: data\n          });\n\n        case 8:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, _callee);\n}));\n\nfunction handleShow(breakpoint) {\n  setFullscreen(breakpoint);\n  setShow(true);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJJbmRleCIsImRhdGEiLCJ1c2VTdGF0ZSIsImZ1bGxzY3JlZW4iLCJzZXRGdWxsc2NyZWVuIiwic2hvdyIsInNldFNob3ciLCJtYXAiLCJpZHgiLCJ0aHVtYiIsIkxpc3RTdHlsZSIsImhhbmRsZVNob3ciLCJ2IiwibWFyZ2luIiwiYm9yZGVyUmFkaXVzIiwiY3Vyc29yIiwiZ2V0SW5pdGlhbFByb3BzIiwiYXhpb3MiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwiYnJlYWtwb2ludCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLE9BQWM7QUFBQTs7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7O0FBQUEsa0JBQ1VDLCtDQUFRLENBQUMsSUFBRCxDQURsQjtBQUFBLE1BQ25CQyxVQURtQjtBQUFBLE1BQ1BDLGFBRE87O0FBQUEsbUJBRUZGLCtDQUFRLENBQUMsS0FBRCxDQUZOO0FBQUEsTUFFbkJHLElBRm1CO0FBQUEsTUFFYkMsT0FGYTs7QUFJMUIsc0JBQ0UsOERBQUMsdURBQUQ7QUFBQSw0QkFDRTtBQUFBLDBDQUFlLE1BQWY7QUFBQSw4QkFDRTtBQUFBLDRDQUFlLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFO0FBQUEsNENBQWUsT0FBZjtBQUFBLGtCQUNHTCxJQUFJLENBQUNNLEdBQUwsQ0FBUyxVQUFDTixJQUFELEVBQU9PLEdBQVAsRUFBZTtBQUN2Qiw4QkFDRSw4REFBQywyREFBRDtBQUFBLG1DQUNFLDhEQUFDLGlFQUFEO0FBQ0UsbUJBQUssRUFBRSxHQURUO0FBRUUsb0JBQU0sRUFBRSxHQUZWO0FBR0UsaUJBQUcsRUFBQyxTQUhOO0FBSUUsaUJBQUcsRUFBRVAsSUFBSSxDQUFDUSxLQUpaO0FBS0UsbUJBQUssRUFBRUMsU0FMVDtBQU1FLHFCQUFPLEVBQUU7QUFBQSx1QkFBTUMsVUFBVSxDQUFDQyxDQUFELENBQWhCO0FBQUE7QUFOWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsYUFBYUosR0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGO0FBWUQsU0FiQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTRDRCxDQWhERDs7R0FBTVIsSzs7S0FBQUEsSztBQWtETixJQUFNVSxTQUFTLEdBQUc7QUFDaEJHLFFBQU0sRUFBRSxPQURRO0FBRWhCQyxjQUFZLEVBQUUsS0FGRTtBQUdoQkMsUUFBTSxFQUFFO0FBSFEsQ0FBbEI7QUFLQWYsS0FBSyxDQUFDZ0IsZUFBTixvVEFBd0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFDSkMsZ0RBQUEsQ0FBVSw4QkFBVixDQURJOztBQUFBO0FBQ2hCQyxhQURnQjtBQUFBO0FBQUEsaUJBRUhBLEdBQUcsQ0FBQ2pCLElBRkQ7O0FBQUE7QUFFaEJBLGNBRmdCO0FBSXRCa0IsaUJBQU8sQ0FBQ0MsR0FBUixxQ0FBeUNuQixJQUFJLENBQUNvQixNQUE5QztBQUpzQiwyQ0FNZjtBQUNMcEIsZ0JBQUksRUFBRUE7QUFERCxXQU5lOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBQXhCOztBQVdBLFNBQVNVLFVBQVQsQ0FBb0JXLFVBQXBCLEVBQWdDO0FBQzlCbEIsZUFBYSxDQUFDa0IsVUFBRCxDQUFiO0FBQ0FoQixTQUFPLENBQUMsSUFBRCxDQUFQO0FBQ0Q7O0FBRUQsK0RBQWVOLEtBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IEZpZ3VyZSBmcm9tICdyZWFjdC1ib290c3RyYXAvRmlndXJlJztcblxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY29uc3QgSW5kZXggPSAoeyBkYXRhIH0pID0+IHtcbiAgY29uc3QgW2Z1bGxzY3JlZW4sIHNldEZ1bGxzY3JlZW5dID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtzaG93LCBzZXRTaG93XSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm1cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0VGl0bGVcIj5TVE9SRTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RzXCI+XG4gICAgICAgICAge2RhdGEubWFwKChkYXRhLCBpZHgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxGaWd1cmUga2V5PXtpZHh9PlxuICAgICAgICAgICAgICAgIDxGaWd1cmUuSW1hZ2VcbiAgICAgICAgICAgICAgICAgIHdpZHRoPXsxODB9XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9ezE4MH1cbiAgICAgICAgICAgICAgICAgIGFsdD1cIjE3MXgxODBcIlxuICAgICAgICAgICAgICAgICAgc3JjPXtkYXRhLnRodW1ifVxuICAgICAgICAgICAgICAgICAgc3R5bGU9e0xpc3RTdHlsZX1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVNob3codil9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9GaWd1cmU+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuZm9ybSB7XG4gICAgICAgICAgbWFyZ2luOiAxLjVyZW0gMS43NXJlbTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmxpc3RzIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIG1hcmdpbjogMXZ3IGF1dG87XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgIHdpZHRoOiA2OHZ3O1xuICAgICAgICB9XG4gICAgICAgIC5saXN0VGl0bGUge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBHb3RoYW0gQSwgR290aGFtIEIsIERJTiwgc2Fucy1zZXJpZjtcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjc1cmVtO1xuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5cbmNvbnN0IExpc3RTdHlsZSA9IHtcbiAgbWFyZ2luOiAnMC41dncnLFxuICBib3JkZXJSYWRpdXM6ICc1cHgnLFxuICBjdXJzb3I6ICdwb2ludGVyJyxcbn07XG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDo5MDAwL3N0b3JlcycpO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmRhdGE7XG5cbiAgY29uc29sZS5sb2coYFNob3cgZGF0YSBmZXRjaGVkLiBDb3VudDogJHtkYXRhLmxlbmd0aH1gKTtcblxuICByZXR1cm4ge1xuICAgIGRhdGE6IGRhdGEsXG4gIH07XG59O1xuXG5mdW5jdGlvbiBoYW5kbGVTaG93KGJyZWFrcG9pbnQpIHtcbiAgc2V0RnVsbHNjcmVlbihicmVha3BvaW50KTtcbiAgc2V0U2hvdyh0cnVlKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});