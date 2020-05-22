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

  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Accordion"], {
    background: "white",
    border: "1px solid black",
    borderRadius: "1rem",
    marginBottom: "1rem",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["AccordionItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
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
  }, history.map(function (item) {
    return __jsx(_HistoryItem__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: id + createdAt
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hpc3RvcnlMaXN0LmpzIl0sIm5hbWVzIjpbIkhpc3RvcnlMaXN0IiwiaWQiLCJoaXN0b3J5IiwiY3JlYXRlZEF0IiwidXNlU3RhdGUiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJmb3JtYXREaXN0YW5jZSIsIkRhdGUiLCJwYXJzZSIsImFkZFN1ZmZpeCIsIm1hcCIsIml0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUdBOztBQUNBO0FBUUE7QUFDQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxPQUFnQztBQUFBOztBQUFBLE1BQTdCQyxFQUE2QixRQUE3QkEsRUFBNkI7QUFBQSxNQUF6QkMsT0FBeUIsUUFBekJBLE9BQXlCO0FBQUEsTUFBaEJDLFNBQWdCLFFBQWhCQSxTQUFnQjs7QUFBQSxrQkFDdEJDLHNEQUFRLENBQUMsS0FBRCxDQURjO0FBQUEsTUFDM0NDLE1BRDJDO0FBQUEsTUFDbkNDLFNBRG1DOztBQUdsRCxTQUNFLE1BQUMseURBQUQ7QUFDRSxjQUFVLEVBQUMsT0FEYjtBQUVFLFVBQU0sRUFBQyxpQkFGVDtBQUdFLGdCQUFZLEVBQUMsTUFIZjtBQUlFLGdCQUFZLEVBQUMsTUFKZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTUUsTUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw2REFBRDtBQUFnQixXQUFPLEVBQUU7QUFBQSxhQUFNQSxTQUFTLENBQUMsQ0FBQ0QsTUFBRixDQUFmO0FBQUEsS0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsbURBQUQ7QUFBSyxRQUFJLEVBQUMsR0FBVjtBQUFjLGFBQVMsRUFBQyxNQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxvREFBRDtBQUFNLFlBQVEsRUFBQyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQWdDSixFQUFoQyxDQURGLEVBRUUsTUFBQyxvREFBRDtBQUFNLFlBQVEsRUFBQyxJQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR00sK0RBQWMsQ0FBQ0MsSUFBSSxDQUFDQyxLQUFMLENBQVdOLFNBQVgsQ0FBRCxFQUF3QixJQUFJSyxJQUFKLEVBQXhCLEVBQW9DO0FBQ2pERSxhQUFTLEVBQUU7QUFEc0MsR0FBcEMsQ0FEakIsQ0FGRixDQURGLEVBU0UsTUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVEYsQ0FERixFQVlFLE1BQUMsOERBQUQ7QUFBZ0IsTUFBRSxFQUFFLENBQXBCO0FBQXVCLFVBQU0sRUFBRUwsTUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHSCxPQUFPLENBQUNTLEdBQVIsQ0FBWSxVQUFDQyxJQUFEO0FBQUEsV0FDWCxNQUFDLG9EQUFEO0FBQWEsU0FBRyxFQUFFWCxFQUFFLEdBQUdFO0FBQXZCLE9BQXNDUyxJQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRFc7QUFBQSxHQUFaLENBREgsQ0FaRixDQU5GLENBREY7QUEyQkQsQ0E5QkQ7O0dBQU1aLFc7O0tBQUFBLFc7QUFnQ1NBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxoaXN0b3J5LmpzLjE0NmViY2M0ZTIwM2Q5NmU1MzMwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBEZXBlbmRlbmNpZXNcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZm9ybWF0RGlzdGFuY2UgfSBmcm9tICdkYXRlLWZucyc7XG5cbi8vIFN0eWxlc1xuaW1wb3J0IHtcbiAgQWNjb3JkaW9uLFxuICBBY2NvcmRpb25JdGVtLFxuICBBY2NvcmRpb25QYW5lbCxcbiAgQWNjb3JkaW9uSWNvbixcbiAgQm94LFxuICBUZXh0XG59IGZyb20gJ0BjaGFrcmEtdWkvY29yZSc7XG5pbXBvcnQgeyBTdHlsZUFjY0hlYWRlciB9IGZyb20gJy4vc3R5bGVzL3N0eWxlZCc7XG5pbXBvcnQgSGlzdG9yeUl0ZW0gZnJvbSAnLi9IaXN0b3J5SXRlbSc7XG5cbmNvbnN0IEhpc3RvcnlMaXN0ID0gKHsgaWQsIGhpc3RvcnksIGNyZWF0ZWRBdCB9KSA9PiB7XG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8QWNjb3JkaW9uXG4gICAgICBiYWNrZ3JvdW5kPVwid2hpdGVcIlxuICAgICAgYm9yZGVyPVwiMXB4IHNvbGlkIGJsYWNrXCJcbiAgICAgIGJvcmRlclJhZGl1cz1cIjFyZW1cIlxuICAgICAgbWFyZ2luQm90dG9tPVwiMXJlbVwiXG4gICAgPlxuICAgICAgPEFjY29yZGlvbkl0ZW0+XG4gICAgICAgIDxTdHlsZUFjY0hlYWRlciBvbkNsaWNrPXsoKSA9PiBzZXRJc09wZW4oIWlzT3Blbil9PlxuICAgICAgICAgIDxCb3ggZmxleD1cIjFcIiB0ZXh0QWxpZ249XCJsZWZ0XCI+XG4gICAgICAgICAgICA8VGV4dCBmb250U2l6ZT1cIjJ4bFwiPk9yZGVyIE5vLiB7aWR9PC9UZXh0PlxuICAgICAgICAgICAgPFRleHQgZm9udFNpemU9XCJsZ1wiPlxuICAgICAgICAgICAgICB7Zm9ybWF0RGlzdGFuY2UoRGF0ZS5wYXJzZShjcmVhdGVkQXQpLCBuZXcgRGF0ZSgpLCB7XG4gICAgICAgICAgICAgICAgYWRkU3VmZml4OiB0cnVlXG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDxBY2NvcmRpb25JY29uIC8+XG4gICAgICAgIDwvU3R5bGVBY2NIZWFkZXI+XG4gICAgICAgIDxBY2NvcmRpb25QYW5lbCBwYj17NH0gaXNPcGVuPXtpc09wZW59PlxuICAgICAgICAgIHtoaXN0b3J5Lm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgPEhpc3RvcnlJdGVtIGtleT17aWQgKyBjcmVhdGVkQXR9IHsuLi5pdGVtfSAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0FjY29yZGlvblBhbmVsPlxuICAgICAgPC9BY2NvcmRpb25JdGVtPlxuICAgIDwvQWNjb3JkaW9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGlzdG9yeUxpc3Q7XG4iXSwic291cmNlUm9vdCI6IiJ9