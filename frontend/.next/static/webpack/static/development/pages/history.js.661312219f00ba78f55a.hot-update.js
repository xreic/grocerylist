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

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["AccordionItem"], {
    background: "white",
    border: "1.5px solid black",
    padding: "1rem",
    borderRadius: "1rem",
    marginBottom: "1rem",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, __jsx(_styles_styled__WEBPACK_IMPORTED_MODULE_4__["StyleAccHeader"], {
    onClick: function onClick() {
      return setIsOpen(!isOpen);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    flex: "1",
    textAlign: "left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    fontSize: "2xl",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }, "Order No. ", id), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    fontSize: "lg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["formatDistance"])(Date.parse(createdAt), new Date(), {
    addSuffix: true
  }))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["AccordionIcon"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  })), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["AccordionPanel"], {
    pb: 4,
    isOpen: isOpen,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, history.map(function (item, index) {
    return __jsx(_HistoryItem__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: index
    }, item, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 13
      }
    }));
  }))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hpc3RvcnlMaXN0LmpzIl0sIm5hbWVzIjpbIkhpc3RvcnlMaXN0IiwiaWQiLCJoaXN0b3J5IiwiY3JlYXRlZEF0IiwidXNlU3RhdGUiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJmb3JtYXREaXN0YW5jZSIsIkRhdGUiLCJwYXJzZSIsImFkZFN1ZmZpeCIsIm1hcCIsIml0ZW0iLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBR0E7O0FBQ0E7QUFPQTtBQUNBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQWdDO0FBQUE7O0FBQUEsTUFBN0JDLEVBQTZCLFFBQTdCQSxFQUE2QjtBQUFBLE1BQXpCQyxPQUF5QixRQUF6QkEsT0FBeUI7QUFBQSxNQUFoQkMsU0FBZ0IsUUFBaEJBLFNBQWdCOztBQUFBLGtCQUN0QkMsc0RBQVEsQ0FBQyxLQUFELENBRGM7QUFBQSxNQUMzQ0MsTUFEMkM7QUFBQSxNQUNuQ0MsU0FEbUM7O0FBR2xELFNBQ0UsTUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNkRBQUQ7QUFDRSxjQUFVLEVBQUMsT0FEYjtBQUVFLFVBQU0sRUFBQyxtQkFGVDtBQUdFLFdBQU8sRUFBQyxNQUhWO0FBSUUsZ0JBQVksRUFBQyxNQUpmO0FBS0UsZ0JBQVksRUFBQyxNQUxmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FPRSxNQUFDLDZEQUFEO0FBQWdCLFdBQU8sRUFBRTtBQUFBLGFBQU1BLFNBQVMsQ0FBQyxDQUFDRCxNQUFGLENBQWY7QUFBQSxLQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxtREFBRDtBQUFLLFFBQUksRUFBQyxHQUFWO0FBQWMsYUFBUyxFQUFDLE1BQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG9EQUFEO0FBQU0sWUFBUSxFQUFDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBZ0NKLEVBQWhDLENBREYsRUFFRSxNQUFDLG9EQUFEO0FBQU0sWUFBUSxFQUFDLElBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHTSwrREFBYyxDQUFDQyxJQUFJLENBQUNDLEtBQUwsQ0FBV04sU0FBWCxDQUFELEVBQXdCLElBQUlLLElBQUosRUFBeEIsRUFBb0M7QUFDakRFLGFBQVMsRUFBRTtBQURzQyxHQUFwQyxDQURqQixDQUZGLENBREYsRUFTRSxNQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFURixDQVBGLEVBa0JFLE1BQUMsOERBQUQ7QUFBZ0IsTUFBRSxFQUFFLENBQXBCO0FBQXVCLFVBQU0sRUFBRUwsTUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHSCxPQUFPLENBQUNTLEdBQVIsQ0FBWSxVQUFDQyxJQUFELEVBQU9DLEtBQVA7QUFBQSxXQUNYLE1BQUMsb0RBQUQ7QUFBYSxTQUFHLEVBQUVBO0FBQWxCLE9BQTZCRCxJQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRFc7QUFBQSxHQUFaLENBREgsQ0FsQkYsQ0FERixDQURGO0FBNEJELENBL0JEOztHQUFNWixXOztLQUFBQSxXO0FBaUNTQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaGlzdG9yeS5qcy42NjEzMTIyMTlmMDBiYTc4ZjU1YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRGVwZW5kZW5jaWVzXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGZvcm1hdERpc3RhbmNlIH0gZnJvbSAnZGF0ZS1mbnMnO1xuXG4vLyBTdHlsZXNcbmltcG9ydCB7XG4gIEFjY29yZGlvbkl0ZW0sXG4gIEFjY29yZGlvblBhbmVsLFxuICBBY2NvcmRpb25JY29uLFxuICBCb3gsXG4gIFRleHRcbn0gZnJvbSAnQGNoYWtyYS11aS9jb3JlJztcbmltcG9ydCB7IFN0eWxlQWNjSGVhZGVyIH0gZnJvbSAnLi9zdHlsZXMvc3R5bGVkJztcbmltcG9ydCBIaXN0b3J5SXRlbSBmcm9tICcuL0hpc3RvcnlJdGVtJztcblxuY29uc3QgSGlzdG9yeUxpc3QgPSAoeyBpZCwgaGlzdG9yeSwgY3JlYXRlZEF0IH0pID0+IHtcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxBY2NvcmRpb25JdGVtXG4gICAgICAgIGJhY2tncm91bmQ9XCJ3aGl0ZVwiXG4gICAgICAgIGJvcmRlcj1cIjEuNXB4IHNvbGlkIGJsYWNrXCJcbiAgICAgICAgcGFkZGluZz1cIjFyZW1cIlxuICAgICAgICBib3JkZXJSYWRpdXM9XCIxcmVtXCJcbiAgICAgICAgbWFyZ2luQm90dG9tPVwiMXJlbVwiXG4gICAgICA+XG4gICAgICAgIDxTdHlsZUFjY0hlYWRlciBvbkNsaWNrPXsoKSA9PiBzZXRJc09wZW4oIWlzT3Blbil9PlxuICAgICAgICAgIDxCb3ggZmxleD1cIjFcIiB0ZXh0QWxpZ249XCJsZWZ0XCI+XG4gICAgICAgICAgICA8VGV4dCBmb250U2l6ZT1cIjJ4bFwiPk9yZGVyIE5vLiB7aWR9PC9UZXh0PlxuICAgICAgICAgICAgPFRleHQgZm9udFNpemU9XCJsZ1wiPlxuICAgICAgICAgICAgICB7Zm9ybWF0RGlzdGFuY2UoRGF0ZS5wYXJzZShjcmVhdGVkQXQpLCBuZXcgRGF0ZSgpLCB7XG4gICAgICAgICAgICAgICAgYWRkU3VmZml4OiB0cnVlXG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDxBY2NvcmRpb25JY29uIC8+XG4gICAgICAgIDwvU3R5bGVBY2NIZWFkZXI+XG4gICAgICAgIDxBY2NvcmRpb25QYW5lbCBwYj17NH0gaXNPcGVuPXtpc09wZW59PlxuICAgICAgICAgIHtoaXN0b3J5Lm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxIaXN0b3J5SXRlbSBrZXk9e2luZGV4fSB7Li4uaXRlbX0gLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9BY2NvcmRpb25QYW5lbD5cbiAgICAgIDwvQWNjb3JkaW9uSXRlbT5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGlzdG9yeUxpc3Q7XG4iXSwic291cmNlUm9vdCI6IiJ9