webpackHotUpdate("static\\development\\pages\\history.js",{

/***/ "./components/HistoryList.js":
/*!***********************************!*\
  !*** ./components/HistoryList.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/es/index.js");
/* harmony import */ var _styles_styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/styled */ "./components/styles/styled.js");
/* harmony import */ var _HistoryItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./HistoryItem */ "./components/HistoryItem.js");


var _this = undefined,
    _jsxFileName = "F:\\Work\\Projects\\Grocery List\\frontend\\components\\HistoryList.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
// Dependencies

 // Styles





var HistoryList = function HistoryList(_ref) {
  _s();

  var id = _ref.id,
      history = _ref.history,
      createdAt = _ref.createdAt;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isOpen = _useState[0],
      setIsOpen = _useState[1];

  console.log("Thing Number ".concat(id));
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["AccordionItem"], {
    background: "white",
    border: "1.5px solid black",
    borderRadius: "1rem",
    marginBottom: "1rem",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, __jsx(_styles_styled__WEBPACK_IMPORTED_MODULE_4__["StyleAccHeader"], {
    onClick: function onClick() {
      return setIsOpen(!isOpen);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    flex: "1",
    textAlign: "left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    fontSize: "2xl",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, "Order No. ", id), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    fontSize: "lg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["formatDistance"])(Date.parse(createdAt), new Date(), {
    addSuffix: true
  }))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["AccordionIcon"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  })), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["AccordionPanel"], {
    pb: 4,
    isOpen: isOpen,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["SimpleGrid"], {
    columns: "2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Heading"], {
    as: "h4",
    size: "md",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, "Item"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Heading"], {
    as: "h4",
    size: "md",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, "Quantity"), history.map(function (item, index) {
    return __jsx(_HistoryItem__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: index
    }, item, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 15
      }
    }));
  })))));
};

_s(HistoryList, "+sus0Lb0ewKHdwiUhiTAJFoFyQ0=");

_c = HistoryList;
/* harmony default export */ __webpack_exports__["default"] = (HistoryList);

var _c;

$RefreshReg$(_c, "HistoryList");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hpc3RvcnlMaXN0LmpzIl0sIm5hbWVzIjpbIkhpc3RvcnlMaXN0IiwiaWQiLCJoaXN0b3J5IiwiY3JlYXRlZEF0IiwidXNlU3RhdGUiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJjb25zb2xlIiwibG9nIiwiZm9ybWF0RGlzdGFuY2UiLCJEYXRlIiwicGFyc2UiLCJhZGRTdWZmaXgiLCJtYXAiLCJpdGVtIiwiaW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUdBOztBQUNBO0FBU0E7QUFDQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxPQUFnQztBQUFBOztBQUFBLE1BQTdCQyxFQUE2QixRQUE3QkEsRUFBNkI7QUFBQSxNQUF6QkMsT0FBeUIsUUFBekJBLE9BQXlCO0FBQUEsTUFBaEJDLFNBQWdCLFFBQWhCQSxTQUFnQjs7QUFBQSxrQkFDdEJDLHNEQUFRLENBQUMsS0FBRCxDQURjO0FBQUEsTUFDM0NDLE1BRDJDO0FBQUEsTUFDbkNDLFNBRG1DOztBQUdsREMsU0FBTyxDQUFDQyxHQUFSLHdCQUE0QlAsRUFBNUI7QUFFQSxTQUNFLE1BQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDZEQUFEO0FBQ0UsY0FBVSxFQUFDLE9BRGI7QUFFRSxVQUFNLEVBQUMsbUJBRlQ7QUFHRSxnQkFBWSxFQUFDLE1BSGY7QUFJRSxnQkFBWSxFQUFDLE1BSmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1FLE1BQUMsNkRBQUQ7QUFBZ0IsV0FBTyxFQUFFO0FBQUEsYUFBTUssU0FBUyxDQUFDLENBQUNELE1BQUYsQ0FBZjtBQUFBLEtBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG1EQUFEO0FBQUssUUFBSSxFQUFDLEdBQVY7QUFBYyxhQUFTLEVBQUMsTUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsb0RBQUQ7QUFBTSxZQUFRLEVBQUMsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFnQ0osRUFBaEMsQ0FERixFQUVFLE1BQUMsb0RBQUQ7QUFBTSxZQUFRLEVBQUMsSUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dRLCtEQUFjLENBQUNDLElBQUksQ0FBQ0MsS0FBTCxDQUFXUixTQUFYLENBQUQsRUFBd0IsSUFBSU8sSUFBSixFQUF4QixFQUFvQztBQUNqREUsYUFBUyxFQUFFO0FBRHNDLEdBQXBDLENBRGpCLENBRkYsQ0FERixFQVNFLE1BQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVRGLENBTkYsRUFpQkUsTUFBQyw4REFBRDtBQUFnQixNQUFFLEVBQUUsQ0FBcEI7QUFBdUIsVUFBTSxFQUFFUCxNQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywwREFBRDtBQUFZLFdBQU8sRUFBQyxHQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx1REFBRDtBQUFTLE1BQUUsRUFBQyxJQUFaO0FBQWlCLFFBQUksRUFBQyxJQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsRUFJRSxNQUFDLHVEQUFEO0FBQVMsTUFBRSxFQUFDLElBQVo7QUFBaUIsUUFBSSxFQUFDLElBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSkYsRUFPR0gsT0FBTyxDQUFDVyxHQUFSLENBQVksVUFBQ0MsSUFBRCxFQUFPQyxLQUFQO0FBQUEsV0FDWCxNQUFDLG9EQUFEO0FBQWEsU0FBRyxFQUFFQTtBQUFsQixPQUE2QkQsSUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQURXO0FBQUEsR0FBWixDQVBILENBREYsQ0FqQkYsQ0FERixDQURGO0FBbUNELENBeENEOztHQUFNZCxXOztLQUFBQSxXO0FBMENTQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaGlzdG9yeS5qcy4wYTgxYWJmOTU0NTI0YTU3MTRkZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRGVwZW5kZW5jaWVzXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGZvcm1hdERpc3RhbmNlIH0gZnJvbSAnZGF0ZS1mbnMnO1xuXG4vLyBTdHlsZXNcbmltcG9ydCB7XG4gIEFjY29yZGlvbkl0ZW0sXG4gIEFjY29yZGlvblBhbmVsLFxuICBBY2NvcmRpb25JY29uLFxuICBCb3gsXG4gIEhlYWRpbmcsXG4gIFNpbXBsZUdyaWQsXG4gIFRleHRcbn0gZnJvbSAnQGNoYWtyYS11aS9jb3JlJztcbmltcG9ydCB7IFN0eWxlQWNjSGVhZGVyIH0gZnJvbSAnLi9zdHlsZXMvc3R5bGVkJztcbmltcG9ydCBIaXN0b3J5SXRlbSBmcm9tICcuL0hpc3RvcnlJdGVtJztcblxuY29uc3QgSGlzdG9yeUxpc3QgPSAoeyBpZCwgaGlzdG9yeSwgY3JlYXRlZEF0IH0pID0+IHtcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zb2xlLmxvZyhgVGhpbmcgTnVtYmVyICR7aWR9YClcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxBY2NvcmRpb25JdGVtXG4gICAgICAgIGJhY2tncm91bmQ9XCJ3aGl0ZVwiXG4gICAgICAgIGJvcmRlcj1cIjEuNXB4IHNvbGlkIGJsYWNrXCJcbiAgICAgICAgYm9yZGVyUmFkaXVzPVwiMXJlbVwiXG4gICAgICAgIG1hcmdpbkJvdHRvbT1cIjFyZW1cIlxuICAgICAgPlxuICAgICAgICA8U3R5bGVBY2NIZWFkZXIgb25DbGljaz17KCkgPT4gc2V0SXNPcGVuKCFpc09wZW4pfT5cbiAgICAgICAgICA8Qm94IGZsZXg9XCIxXCIgdGV4dEFsaWduPVwibGVmdFwiPlxuICAgICAgICAgICAgPFRleHQgZm9udFNpemU9XCIyeGxcIj5PcmRlciBOby4ge2lkfTwvVGV4dD5cbiAgICAgICAgICAgIDxUZXh0IGZvbnRTaXplPVwibGdcIj5cbiAgICAgICAgICAgICAge2Zvcm1hdERpc3RhbmNlKERhdGUucGFyc2UoY3JlYXRlZEF0KSwgbmV3IERhdGUoKSwge1xuICAgICAgICAgICAgICAgIGFkZFN1ZmZpeDogdHJ1ZVxuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8QWNjb3JkaW9uSWNvbiAvPlxuICAgICAgICA8L1N0eWxlQWNjSGVhZGVyPlxuICAgICAgICA8QWNjb3JkaW9uUGFuZWwgcGI9ezR9IGlzT3Blbj17aXNPcGVufT5cbiAgICAgICAgICA8U2ltcGxlR3JpZCBjb2x1bW5zPVwiMlwiPlxuICAgICAgICAgICAgPEhlYWRpbmcgYXM9XCJoNFwiIHNpemU9XCJtZFwiPlxuICAgICAgICAgICAgICBJdGVtXG4gICAgICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgICAgICA8SGVhZGluZyBhcz1cImg0XCIgc2l6ZT1cIm1kXCI+XG4gICAgICAgICAgICAgIFF1YW50aXR5XG4gICAgICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgICAgICB7aGlzdG9yeS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxIaXN0b3J5SXRlbSBrZXk9e2luZGV4fSB7Li4uaXRlbX0gLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvU2ltcGxlR3JpZD5cbiAgICAgICAgPC9BY2NvcmRpb25QYW5lbD5cbiAgICAgIDwvQWNjb3JkaW9uSXRlbT5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGlzdG9yeUxpc3Q7XG4iXSwic291cmNlUm9vdCI6IiJ9