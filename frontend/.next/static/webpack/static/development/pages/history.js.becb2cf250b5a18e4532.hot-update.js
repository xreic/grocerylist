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
    border: "1.5px solid black",
    borderRadius: "1rem",
    marginBottom: "1rem",
    _after: {
      borderStyle: 'none'
    },
    _before: {
      borderStyle: 'none'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["AccordionItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, __jsx(_styles_styled__WEBPACK_IMPORTED_MODULE_4__["StyleAccHeader"], {
    onClick: function onClick() {
      return setIsOpen(!isOpen);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    flex: "1",
    textAlign: "left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    fontSize: "2xl",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 15
    }
  }, "Order No. ", id), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    fontSize: "lg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 15
    }
  }, Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["formatDistance"])(Date.parse(createdAt), new Date(), {
    addSuffix: true
  }))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["AccordionIcon"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  })), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["AccordionPanel"], {
    pb: 4,
    isOpen: isOpen,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  }, history.map(function (item, index) {
    return __jsx(_HistoryItem__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: index
    }, item, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 15
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

/***/ }),

/***/ "./components/styles/styled.js":
/*!*************************************!*\
  !*** ./components/styles/styled.js ***!
  \*************************************/
/*! exports provided: StyledButton, StyledInput, StyledInputPW, StyleAccHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledButton", function() { return StyledButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledInput", function() { return StyledInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledInputPW", function() { return StyledInputPW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleAccHeader", function() { return StyleAccHeader; });
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/es/index.js");


function _templateObject4() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  :focus {\n    outline: 0 !important;\n    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0) !important;\n  }\n\n  -webkit-tap-highlight-color: transparent;\n  -webkit-touch-callout: transparent;\n  -webkit-user-select: transparent;\n  -khtml-user-select: transparent;\n  -moz-user-select: transparent;\n  -ms-user-select: transparent;\n  user-select: transparent;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  :disabled {\n    opacity: 1;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  :disabled {\n    opacity: 1;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  :disabled {\n    opacity: 1;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var StyledButton = Object(_emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["IconButton"])(_templateObject());
var StyledInput = Object(_emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(_templateObject2());
var StyledInputPW = Object(_emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(_templateObject3());
var StyleAccHeader = Object(_emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["AccordionHeader"])(_templateObject4());

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hpc3RvcnlMaXN0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc3R5bGVzL3N0eWxlZC5qcyJdLCJuYW1lcyI6WyJIaXN0b3J5TGlzdCIsImlkIiwiaGlzdG9yeSIsImNyZWF0ZWRBdCIsInVzZVN0YXRlIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwiYm9yZGVyU3R5bGUiLCJmb3JtYXREaXN0YW5jZSIsIkRhdGUiLCJwYXJzZSIsImFkZFN1ZmZpeCIsIm1hcCIsIml0ZW0iLCJpbmRleCIsIlN0eWxlZEJ1dHRvbiIsInN0eWxlZCIsIkljb25CdXR0b24iLCJTdHlsZWRJbnB1dCIsIklucHV0IiwiU3R5bGVkSW5wdXRQVyIsIlN0eWxlQWNjSGVhZGVyIiwiQWNjb3JkaW9uSGVhZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FHQTs7QUFDQTtBQVFBO0FBQ0E7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsT0FBZ0M7QUFBQTs7QUFBQSxNQUE3QkMsRUFBNkIsUUFBN0JBLEVBQTZCO0FBQUEsTUFBekJDLE9BQXlCLFFBQXpCQSxPQUF5QjtBQUFBLE1BQWhCQyxTQUFnQixRQUFoQkEsU0FBZ0I7O0FBQUEsa0JBQ3RCQyxzREFBUSxDQUFDLEtBQUQsQ0FEYztBQUFBLE1BQzNDQyxNQUQyQztBQUFBLE1BQ25DQyxTQURtQzs7QUFHbEQsU0FDSSxNQUFDLHlEQUFEO0FBQ0UsY0FBVSxFQUFDLE9BRGI7QUFFRSxVQUFNLEVBQUMsbUJBRlQ7QUFHRSxnQkFBWSxFQUFDLE1BSGY7QUFJRSxnQkFBWSxFQUFDLE1BSmY7QUFLRSxVQUFNLEVBQUU7QUFDTkMsaUJBQVcsRUFBRTtBQURQLEtBTFY7QUFRRSxXQUFPLEVBQUU7QUFDUEEsaUJBQVcsRUFBRTtBQUROLEtBUlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVlFLE1BQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNkRBQUQ7QUFBZ0IsV0FBTyxFQUFFO0FBQUEsYUFBTUQsU0FBUyxDQUFDLENBQUNELE1BQUYsQ0FBZjtBQUFBLEtBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG1EQUFEO0FBQUssUUFBSSxFQUFDLEdBQVY7QUFBYyxhQUFTLEVBQUMsTUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsb0RBQUQ7QUFBTSxZQUFRLEVBQUMsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFnQ0osRUFBaEMsQ0FERixFQUVFLE1BQUMsb0RBQUQ7QUFBTSxZQUFRLEVBQUMsSUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dPLCtEQUFjLENBQUNDLElBQUksQ0FBQ0MsS0FBTCxDQUFXUCxTQUFYLENBQUQsRUFBd0IsSUFBSU0sSUFBSixFQUF4QixFQUFvQztBQUNqREUsYUFBUyxFQUFFO0FBRHNDLEdBQXBDLENBRGpCLENBRkYsQ0FERixFQVNFLE1BQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVRGLENBREYsRUFZRSxNQUFDLDhEQUFEO0FBQWdCLE1BQUUsRUFBRSxDQUFwQjtBQUF1QixVQUFNLEVBQUVOLE1BQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0gsT0FBTyxDQUFDVSxHQUFSLENBQVksVUFBQ0MsSUFBRCxFQUFPQyxLQUFQO0FBQUEsV0FDWCxNQUFDLG9EQUFEO0FBQWEsU0FBRyxFQUFFQTtBQUFsQixPQUE2QkQsSUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQURXO0FBQUEsR0FBWixDQURILENBWkYsQ0FaRixDQURKO0FBaUNELENBcENEOztHQUFNYixXOztLQUFBQSxXO0FBc0NTQSwwRUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdERBO0FBQ0E7QUFFTyxJQUFNZSxZQUFZLEdBQUdDLCtEQUFNLENBQUNDLDBEQUFELENBQVQsbUJBQWxCO0FBTUEsSUFBTUMsV0FBVyxHQUFHRiwrREFBTSxDQUFDRyxxREFBRCxDQUFULG9CQUFqQjtBQU1BLElBQU1DLGFBQWEsR0FBR0osK0RBQU0sQ0FBQ0cscURBQUQsQ0FBVCxvQkFBbkI7QUFNQSxJQUFNRSxjQUFjLEdBQUdMLCtEQUFNLENBQUNNLCtEQUFELENBQVQsb0JBQXBCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxoaXN0b3J5LmpzLmJlY2IyY2YyNTBiNWExOGU0NTMyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBEZXBlbmRlbmNpZXNcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZm9ybWF0RGlzdGFuY2UgfSBmcm9tICdkYXRlLWZucyc7XG5cbi8vIFN0eWxlc1xuaW1wb3J0IHtcbiAgQWNjb3JkaW9uLFxuICBBY2NvcmRpb25JdGVtLFxuICBBY2NvcmRpb25QYW5lbCxcbiAgQWNjb3JkaW9uSWNvbixcbiAgQm94LFxuICBUZXh0XG59IGZyb20gJ0BjaGFrcmEtdWkvY29yZSc7XG5pbXBvcnQgeyBTdHlsZWRCb3gsIFN0eWxlQWNjSGVhZGVyIH0gZnJvbSAnLi9zdHlsZXMvc3R5bGVkJztcbmltcG9ydCBIaXN0b3J5SXRlbSBmcm9tICcuL0hpc3RvcnlJdGVtJztcblxuY29uc3QgSGlzdG9yeUxpc3QgPSAoeyBpZCwgaGlzdG9yeSwgY3JlYXRlZEF0IH0pID0+IHtcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICByZXR1cm4gKFxuICAgICAgPEFjY29yZGlvblxuICAgICAgICBiYWNrZ3JvdW5kPVwid2hpdGVcIlxuICAgICAgICBib3JkZXI9XCIxLjVweCBzb2xpZCBibGFja1wiXG4gICAgICAgIGJvcmRlclJhZGl1cz1cIjFyZW1cIlxuICAgICAgICBtYXJnaW5Cb3R0b209XCIxcmVtXCJcbiAgICAgICAgX2FmdGVyPXt7XG4gICAgICAgICAgYm9yZGVyU3R5bGU6ICdub25lJ1xuICAgICAgICB9fVxuICAgICAgICBfYmVmb3JlPXt7XG4gICAgICAgICAgYm9yZGVyU3R5bGU6ICdub25lJ1xuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8QWNjb3JkaW9uSXRlbT5cbiAgICAgICAgICA8U3R5bGVBY2NIZWFkZXIgb25DbGljaz17KCkgPT4gc2V0SXNPcGVuKCFpc09wZW4pfT5cbiAgICAgICAgICAgIDxCb3ggZmxleD1cIjFcIiB0ZXh0QWxpZ249XCJsZWZ0XCI+XG4gICAgICAgICAgICAgIDxUZXh0IGZvbnRTaXplPVwiMnhsXCI+T3JkZXIgTm8uIHtpZH08L1RleHQ+XG4gICAgICAgICAgICAgIDxUZXh0IGZvbnRTaXplPVwibGdcIj5cbiAgICAgICAgICAgICAgICB7Zm9ybWF0RGlzdGFuY2UoRGF0ZS5wYXJzZShjcmVhdGVkQXQpLCBuZXcgRGF0ZSgpLCB7XG4gICAgICAgICAgICAgICAgICBhZGRTdWZmaXg6IHRydWVcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8QWNjb3JkaW9uSWNvbiAvPlxuICAgICAgICAgIDwvU3R5bGVBY2NIZWFkZXI+XG4gICAgICAgICAgPEFjY29yZGlvblBhbmVsIHBiPXs0fSBpc09wZW49e2lzT3Blbn0+XG4gICAgICAgICAgICB7aGlzdG9yeS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxIaXN0b3J5SXRlbSBrZXk9e2luZGV4fSB7Li4uaXRlbX0gLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvQWNjb3JkaW9uUGFuZWw+XG4gICAgICAgIDwvQWNjb3JkaW9uSXRlbT5cbiAgICAgIDwvQWNjb3JkaW9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGlzdG9yeUxpc3Q7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgeyBBY2NvcmRpb25IZWFkZXIsIEljb25CdXR0b24sIElucHV0IH0gZnJvbSAnQGNoYWtyYS11aS9jb3JlJztcblxuZXhwb3J0IGNvbnN0IFN0eWxlZEJ1dHRvbiA9IHN0eWxlZChJY29uQnV0dG9uKWBcbiAgOmRpc2FibGVkIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgU3R5bGVkSW5wdXQgPSBzdHlsZWQoSW5wdXQpYFxuICA6ZGlzYWJsZWQge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBTdHlsZWRJbnB1dFBXID0gc3R5bGVkKElucHV0KWBcbiAgOmRpc2FibGVkIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgU3R5bGVBY2NIZWFkZXIgPSBzdHlsZWQoQWNjb3JkaW9uSGVhZGVyKWBcbiAgOmZvY3VzIHtcbiAgICBvdXRsaW5lOiAwICFpbXBvcnRhbnQ7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMCByZ2JhKDAsIDAsIDAsIDApICFpbXBvcnRhbnQ7XG4gIH1cblxuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IHRyYW5zcGFyZW50O1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiB0cmFuc3BhcmVudDtcbiAgLWtodG1sLXVzZXItc2VsZWN0OiB0cmFuc3BhcmVudDtcbiAgLW1vei11c2VyLXNlbGVjdDogdHJhbnNwYXJlbnQ7XG4gIC1tcy11c2VyLXNlbGVjdDogdHJhbnNwYXJlbnQ7XG4gIHVzZXItc2VsZWN0OiB0cmFuc3BhcmVudDtcbmA7XG4iXSwic291cmNlUm9vdCI6IiJ9