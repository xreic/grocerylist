webpackHotUpdate("static\\development\\pages\\history.js",{

/***/ "./components/HistoryLayout.js":
/*!*************************************!*\
  !*** ./components/HistoryLayout.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/es/index.js");
/* harmony import */ var _lib_apollo_queries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/apollo/queries */ "./lib/apollo/queries.js");
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Loading */ "./components/Loading.js");
/* harmony import */ var _HistoryList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./HistoryList */ "./components/HistoryList.js");


var _this = undefined,
    _jsxFileName = "F:\\Work\\Projects\\Grocery List\\frontend\\components\\HistoryLayout.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
// Dependencies
 // Styles

 // Apollo

 // Components




var HistoryLayout = function HistoryLayout() {
  _s();

  // Hooks
  var toast = Object(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["useToast"])(); // Apollo

  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(_lib_apollo_queries__WEBPACK_IMPORTED_MODULE_4__["USER_HISTORY_QUERY"]),
      data = _useQuery.data,
      loading = _useQuery.loading,
      error = _useQuery.error;

  if (error) {
    toast({
      description: error,
      status: 'error',
      duration: 9001,
      isClosable: true
    });
  }

  if (loading) {
    return __jsx(_Loading__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 7
      }
    }, __jsx(AccordionItem, {
      background: "white",
      border: "1.5px solid black",
      borderRadius: "1rem",
      marginBottom: "1rem",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }
    }, __jsx(StyleAccHeader, {
      onClick: function onClick() {
        return setIsOpen(!isOpen);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 11
      }
    }, __jsx(Box, {
      flex: "1",
      textAlign: "left",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 13
      }
    }, __jsx(Text, {
      fontSize: "2xl",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 15
      }
    }, "Order No. ", id), __jsx(Text, {
      fontSize: "lg",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 15
      }
    }, formatDistance(Date.parse(createdAt), new Date(), {
      addSuffix: true
    }))), __jsx(AccordionIcon, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 13
      }
    })), __jsx(AccordionPanel, {
      pb: 4,
      isOpen: isOpen,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 11
      }
    }, isOpen && __jsx(SimpleGrid, {
      columns: "2",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 15
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Heading"], {
      as: "h4",
      size: "md",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 17
      }
    }, "Item"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Heading"], {
      as: "h4",
      size: "md",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 17
      }
    }, "Quantity"), history.map(function (item, index) {
      return __jsx(HistoryItem, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        key: index
      }, item, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 19
        }
      }));
    })))));
  }

  if (data === null || data === void 0 ? void 0 : data.currentUserHistory.nodes.length) {
    var list = data.currentUserHistory.nodes;
    return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Stack"], {
      width: "60%",
      maxWidth: "500px",
      minWidth: "300px",
      margin: "auto",
      spacing: "0.5rem",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 7
      }
    }, list.map(function (item) {
      return __jsx(_HistoryList__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        key: item.createdAt
      }, item, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 11
        }
      }));
    }));
  } else {
    return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Heading"], {
      as: "h4",
      size: "lg",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 7
      }
    }, "Remember to add to your list. \uD83D\uDCDD");
  }
};

_s(HistoryLayout, "9cs9dm6XPkJ9s6I4XJY7EBvMrfc=", false, function () {
  return [_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["useToast"], _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useQuery"]];
});

_c = HistoryLayout;
/* harmony default export */ __webpack_exports__["default"] = (HistoryLayout);

var _c;

$RefreshReg$(_c, "HistoryLayout");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hpc3RvcnlMYXlvdXQuanMiXSwibmFtZXMiOlsiSGlzdG9yeUxheW91dCIsInRvYXN0IiwidXNlVG9hc3QiLCJ1c2VRdWVyeSIsIlVTRVJfSElTVE9SWV9RVUVSWSIsImRhdGEiLCJsb2FkaW5nIiwiZXJyb3IiLCJkZXNjcmlwdGlvbiIsInN0YXR1cyIsImR1cmF0aW9uIiwiaXNDbG9zYWJsZSIsInNldElzT3BlbiIsImlzT3BlbiIsImlkIiwiZm9ybWF0RGlzdGFuY2UiLCJEYXRlIiwicGFyc2UiLCJjcmVhdGVkQXQiLCJhZGRTdWZmaXgiLCJoaXN0b3J5IiwibWFwIiwiaXRlbSIsImluZGV4IiwiY3VycmVudFVzZXJIaXN0b3J5Iiwibm9kZXMiLCJsZW5ndGgiLCJsaXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUdBOztDQUdBOztDQUdBOztBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQUE7O0FBQzFCO0FBQ0EsTUFBTUMsS0FBSyxHQUFHQyxnRUFBUSxFQUF0QixDQUYwQixDQUkxQjs7QUFKMEIsa0JBS09DLG9FQUFRLENBQUNDLHNFQUFELENBTGY7QUFBQSxNQUtsQkMsSUFMa0IsYUFLbEJBLElBTGtCO0FBQUEsTUFLWkMsT0FMWSxhQUtaQSxPQUxZO0FBQUEsTUFLSEMsS0FMRyxhQUtIQSxLQUxHOztBQU8xQixNQUFJQSxLQUFKLEVBQVc7QUFDVE4sU0FBSyxDQUFDO0FBQ0pPLGlCQUFXLEVBQUVELEtBRFQ7QUFFSkUsWUFBTSxFQUFFLE9BRko7QUFHSkMsY0FBUSxFQUFFLElBSE47QUFJSkMsZ0JBQVUsRUFBRTtBQUpSLEtBQUQsQ0FBTDtBQU1EOztBQUVELE1BQUlMLE9BQUosRUFBYTtBQUNYLFdBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxhQUFE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QUFBQSxvREFERjtBQUtEO0FBQ0YsQ0EvRUQ7O0dBQU10QixhO1VBRVVFLHdELEVBR21CQyw0RDs7O0tBTDdCSCxhO0FBaUZTQSw0RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaGlzdG9yeS5qcy4xNWRlYjNkZjk3NTdkYjliODFkNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRGVwZW5kZW5jaWVzXG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vcmVhY3QtaG9va3MnO1xuXG4vLyBTdHlsZXNcbmltcG9ydCB7IEhlYWRpbmcsIFN0YWNrLCB1c2VUb2FzdCB9IGZyb20gJ0BjaGFrcmEtdWkvY29yZSc7XG5cbi8vIEFwb2xsb1xuaW1wb3J0IHsgVVNFUl9ISVNUT1JZX1FVRVJZIH0gZnJvbSAnLi4vbGliL2Fwb2xsby9xdWVyaWVzJztcblxuLy8gQ29tcG9uZW50c1xuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi9Mb2FkaW5nJztcbmltcG9ydCBIaXN0b3J5TGlzdCBmcm9tICcuL0hpc3RvcnlMaXN0JztcblxuY29uc3QgSGlzdG9yeUxheW91dCA9ICgpID0+IHtcbiAgLy8gSG9va3NcbiAgY29uc3QgdG9hc3QgPSB1c2VUb2FzdCgpO1xuXG4gIC8vIEFwb2xsb1xuICBjb25zdCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH0gPSB1c2VRdWVyeShVU0VSX0hJU1RPUllfUVVFUlkpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIHRvYXN0KHtcbiAgICAgIGRlc2NyaXB0aW9uOiBlcnJvcixcbiAgICAgIHN0YXR1czogJ2Vycm9yJyxcbiAgICAgIGR1cmF0aW9uOiA5MDAxLFxuICAgICAgaXNDbG9zYWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9XG5cbiAgaWYgKGxvYWRpbmcpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPExvYWRpbmc+XG4gICAgICAgIDxBY2NvcmRpb25JdGVtXG4gICAgICAgICAgYmFja2dyb3VuZD1cIndoaXRlXCJcbiAgICAgICAgICBib3JkZXI9XCIxLjVweCBzb2xpZCBibGFja1wiXG4gICAgICAgICAgYm9yZGVyUmFkaXVzPVwiMXJlbVwiXG4gICAgICAgICAgbWFyZ2luQm90dG9tPVwiMXJlbVwiXG4gICAgICAgID5cbiAgICAgICAgICA8U3R5bGVBY2NIZWFkZXIgb25DbGljaz17KCkgPT4gc2V0SXNPcGVuKCFpc09wZW4pfT5cbiAgICAgICAgICAgIDxCb3ggZmxleD1cIjFcIiB0ZXh0QWxpZ249XCJsZWZ0XCI+XG4gICAgICAgICAgICAgIDxUZXh0IGZvbnRTaXplPVwiMnhsXCI+T3JkZXIgTm8uIHtpZH08L1RleHQ+XG4gICAgICAgICAgICAgIDxUZXh0IGZvbnRTaXplPVwibGdcIj5cbiAgICAgICAgICAgICAgICB7Zm9ybWF0RGlzdGFuY2UoRGF0ZS5wYXJzZShjcmVhdGVkQXQpLCBuZXcgRGF0ZSgpLCB7XG4gICAgICAgICAgICAgICAgICBhZGRTdWZmaXg6IHRydWVcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8QWNjb3JkaW9uSWNvbiAvPlxuICAgICAgICAgIDwvU3R5bGVBY2NIZWFkZXI+XG4gICAgICAgICAgPEFjY29yZGlvblBhbmVsIHBiPXs0fSBpc09wZW49e2lzT3Blbn0+XG4gICAgICAgICAgICB7aXNPcGVuICYmIChcbiAgICAgICAgICAgICAgPFNpbXBsZUdyaWQgY29sdW1ucz1cIjJcIj5cbiAgICAgICAgICAgICAgICA8SGVhZGluZyBhcz1cImg0XCIgc2l6ZT1cIm1kXCI+XG4gICAgICAgICAgICAgICAgICBJdGVtXG4gICAgICAgICAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICAgICAgICAgIDxIZWFkaW5nIGFzPVwiaDRcIiBzaXplPVwibWRcIj5cbiAgICAgICAgICAgICAgICAgIFF1YW50aXR5XG4gICAgICAgICAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICAgICAgICAgIHtoaXN0b3J5Lm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgIDxIaXN0b3J5SXRlbSBrZXk9e2luZGV4fSB7Li4uaXRlbX0gLz5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9TaW1wbGVHcmlkPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L0FjY29yZGlvblBhbmVsPlxuICAgICAgICA8L0FjY29yZGlvbkl0ZW0+XG4gICAgICA8L0xvYWRpbmc+XG4gICAgKTtcbiAgfVxuXG4gIGlmIChkYXRhPy5jdXJyZW50VXNlckhpc3Rvcnkubm9kZXMubGVuZ3RoKSB7XG4gICAgY29uc3QgbGlzdCA9IGRhdGEuY3VycmVudFVzZXJIaXN0b3J5Lm5vZGVzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxTdGFja1xuICAgICAgICB3aWR0aD1cIjYwJVwiXG4gICAgICAgIG1heFdpZHRoPVwiNTAwcHhcIlxuICAgICAgICBtaW5XaWR0aD1cIjMwMHB4XCJcbiAgICAgICAgbWFyZ2luPVwiYXV0b1wiXG4gICAgICAgIHNwYWNpbmc9XCIwLjVyZW1cIlxuICAgICAgPlxuICAgICAgICB7bGlzdC5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICA8SGlzdG9yeUxpc3Qga2V5PXtpdGVtLmNyZWF0ZWRBdH0gey4uLml0ZW19IC8+XG4gICAgICAgICkpfVxuICAgICAgPC9TdGFjaz5cbiAgICApO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAoXG4gICAgICA8SGVhZGluZyBhcz1cImg0XCIgc2l6ZT1cImxnXCI+XG4gICAgICAgIFJlbWVtYmVyIHRvIGFkZCB0byB5b3VyIGxpc3QuIPCfk51cbiAgICAgIDwvSGVhZGluZz5cbiAgICApO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIaXN0b3J5TGF5b3V0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==