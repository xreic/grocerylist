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

  return __jsx(_styles_styled__WEBPACK_IMPORTED_MODULE_4__["StyledBox"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Accordion"], {
    background: "white",
    border: "1.5px solid black",
    borderRadius: "1rem",
    marginBottom: "1rem",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["AccordionItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, __jsx(_styles_styled__WEBPACK_IMPORTED_MODULE_4__["StyleAccHeader"], {
    onClick: function onClick() {
      return setIsOpen(!isOpen);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    flex: "1",
    textAlign: "left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    fontSize: "2xl",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 15
    }
  }, "Order No. ", id), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    fontSize: "lg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 15
    }
  }, Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["formatDistance"])(Date.parse(createdAt), new Date(), {
    addSuffix: true
  }))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["AccordionIcon"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  })), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["AccordionPanel"], {
    pb: 4,
    isOpen: isOpen,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  }, history.map(function (item, index) {
    return __jsx(_HistoryItem__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: index
    }, item, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hpc3RvcnlMaXN0LmpzIl0sIm5hbWVzIjpbIkhpc3RvcnlMaXN0IiwiaWQiLCJoaXN0b3J5IiwiY3JlYXRlZEF0IiwidXNlU3RhdGUiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJmb3JtYXREaXN0YW5jZSIsIkRhdGUiLCJwYXJzZSIsImFkZFN1ZmZpeCIsIm1hcCIsIml0ZW0iLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBR0E7O0FBQ0E7QUFRQTtBQUNBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQWdDO0FBQUE7O0FBQUEsTUFBN0JDLEVBQTZCLFFBQTdCQSxFQUE2QjtBQUFBLE1BQXpCQyxPQUF5QixRQUF6QkEsT0FBeUI7QUFBQSxNQUFoQkMsU0FBZ0IsUUFBaEJBLFNBQWdCOztBQUFBLGtCQUN0QkMsc0RBQVEsQ0FBQyxLQUFELENBRGM7QUFBQSxNQUMzQ0MsTUFEMkM7QUFBQSxNQUNuQ0MsU0FEbUM7O0FBR2xELFNBQ0UsTUFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx5REFBRDtBQUNFLGNBQVUsRUFBQyxPQURiO0FBRUUsVUFBTSxFQUFDLG1CQUZUO0FBR0UsZ0JBQVksRUFBQyxNQUhmO0FBSUUsZ0JBQVksRUFBQyxNQUpmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNRSxNQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDZEQUFEO0FBQWdCLFdBQU8sRUFBRTtBQUFBLGFBQU1BLFNBQVMsQ0FBQyxDQUFDRCxNQUFGLENBQWY7QUFBQSxLQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxtREFBRDtBQUFLLFFBQUksRUFBQyxHQUFWO0FBQWMsYUFBUyxFQUFDLE1BQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG9EQUFEO0FBQU0sWUFBUSxFQUFDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBZ0NKLEVBQWhDLENBREYsRUFFRSxNQUFDLG9EQUFEO0FBQU0sWUFBUSxFQUFDLElBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHTSwrREFBYyxDQUFDQyxJQUFJLENBQUNDLEtBQUwsQ0FBV04sU0FBWCxDQUFELEVBQXdCLElBQUlLLElBQUosRUFBeEIsRUFBb0M7QUFDakRFLGFBQVMsRUFBRTtBQURzQyxHQUFwQyxDQURqQixDQUZGLENBREYsRUFTRSxNQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFURixDQURGLEVBWUUsTUFBQyw4REFBRDtBQUFnQixNQUFFLEVBQUUsQ0FBcEI7QUFBdUIsVUFBTSxFQUFFTCxNQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dILE9BQU8sQ0FBQ1MsR0FBUixDQUFZLFVBQUNDLElBQUQsRUFBT0MsS0FBUDtBQUFBLFdBQ1gsTUFBQyxvREFBRDtBQUFhLFNBQUcsRUFBRUE7QUFBbEIsT0FBNkJELElBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FEVztBQUFBLEdBQVosQ0FESCxDQVpGLENBTkYsQ0FERixDQURGO0FBNkJELENBaENEOztHQUFNWixXOztLQUFBQSxXO0FBa0NTQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaGlzdG9yeS5qcy43ZDI0NjdlM2FkMTBlMzY5ODU0My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRGVwZW5kZW5jaWVzXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGZvcm1hdERpc3RhbmNlIH0gZnJvbSAnZGF0ZS1mbnMnO1xuXG4vLyBTdHlsZXNcbmltcG9ydCB7XG4gIEFjY29yZGlvbixcbiAgQWNjb3JkaW9uSXRlbSxcbiAgQWNjb3JkaW9uUGFuZWwsXG4gIEFjY29yZGlvbkljb24sXG4gIEJveCxcbiAgVGV4dFxufSBmcm9tICdAY2hha3JhLXVpL2NvcmUnO1xuaW1wb3J0IHsgU3R5bGVkQm94LCBTdHlsZUFjY0hlYWRlciB9IGZyb20gJy4vc3R5bGVzL3N0eWxlZCc7XG5pbXBvcnQgSGlzdG9yeUl0ZW0gZnJvbSAnLi9IaXN0b3J5SXRlbSc7XG5cbmNvbnN0IEhpc3RvcnlMaXN0ID0gKHsgaWQsIGhpc3RvcnksIGNyZWF0ZWRBdCB9KSA9PiB7XG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8U3R5bGVkQm94PlxuICAgICAgPEFjY29yZGlvblxuICAgICAgICBiYWNrZ3JvdW5kPVwid2hpdGVcIlxuICAgICAgICBib3JkZXI9XCIxLjVweCBzb2xpZCBibGFja1wiXG4gICAgICAgIGJvcmRlclJhZGl1cz1cIjFyZW1cIlxuICAgICAgICBtYXJnaW5Cb3R0b209XCIxcmVtXCJcbiAgICAgID5cbiAgICAgICAgPEFjY29yZGlvbkl0ZW0+XG4gICAgICAgICAgPFN0eWxlQWNjSGVhZGVyIG9uQ2xpY2s9eygpID0+IHNldElzT3BlbighaXNPcGVuKX0+XG4gICAgICAgICAgICA8Qm94IGZsZXg9XCIxXCIgdGV4dEFsaWduPVwibGVmdFwiPlxuICAgICAgICAgICAgICA8VGV4dCBmb250U2l6ZT1cIjJ4bFwiPk9yZGVyIE5vLiB7aWR9PC9UZXh0PlxuICAgICAgICAgICAgICA8VGV4dCBmb250U2l6ZT1cImxnXCI+XG4gICAgICAgICAgICAgICAge2Zvcm1hdERpc3RhbmNlKERhdGUucGFyc2UoY3JlYXRlZEF0KSwgbmV3IERhdGUoKSwge1xuICAgICAgICAgICAgICAgICAgYWRkU3VmZml4OiB0cnVlXG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPEFjY29yZGlvbkljb24gLz5cbiAgICAgICAgICA8L1N0eWxlQWNjSGVhZGVyPlxuICAgICAgICAgIDxBY2NvcmRpb25QYW5lbCBwYj17NH0gaXNPcGVuPXtpc09wZW59PlxuICAgICAgICAgICAge2hpc3RvcnkubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8SGlzdG9yeUl0ZW0ga2V5PXtpbmRleH0gey4uLml0ZW19IC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L0FjY29yZGlvblBhbmVsPlxuICAgICAgICA8L0FjY29yZGlvbkl0ZW0+XG4gICAgICA8L0FjY29yZGlvbj5cbiAgICA8L1N0eWxlZEJveD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhpc3RvcnlMaXN0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==