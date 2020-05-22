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
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }
    }, __jsx(AccordionHeader, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 11
      }
    }, __jsx(Box, {
      flex: "1",
      textAlign: "left",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 13
      }
    }, __jsx(Text, {
      fontSize: "2xl",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 15
      }
    }, "Order No. ", id), __jsx(Text, {
      fontSize: "lg",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 15
      }
    }, formatDistance(Date.parse(createdAt), new Date(), {
      addSuffix: true
    }))), __jsx(AccordionIcon, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 13
      }
    })), __jsx(AccordionPanel, {
      pb: 4,
      isOpen: isOpen,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 11
      }
    }, isOpen && __jsx(SimpleGrid, {
      columns: "2",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 15
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Heading"], {
      as: "h4",
      size: "md",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 17
      }
    }, "Item"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Heading"], {
      as: "h4",
      size: "md",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 17
      }
    }, "Quantity"), history.map(function (item, index) {
      return __jsx(HistoryItem, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        key: index
      }, item, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
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
        lineNumber: 69,
        columnNumber: 7
      }
    }, list.map(function (item) {
      return __jsx(_HistoryList__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        key: item.createdAt
      }, item, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
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
        lineNumber: 83,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hpc3RvcnlMYXlvdXQuanMiXSwibmFtZXMiOlsiSGlzdG9yeUxheW91dCIsInRvYXN0IiwidXNlVG9hc3QiLCJ1c2VRdWVyeSIsIlVTRVJfSElTVE9SWV9RVUVSWSIsImRhdGEiLCJsb2FkaW5nIiwiZXJyb3IiLCJkZXNjcmlwdGlvbiIsInN0YXR1cyIsImR1cmF0aW9uIiwiaXNDbG9zYWJsZSIsImlkIiwiZm9ybWF0RGlzdGFuY2UiLCJEYXRlIiwicGFyc2UiLCJjcmVhdGVkQXQiLCJhZGRTdWZmaXgiLCJpc09wZW4iLCJoaXN0b3J5IiwibWFwIiwiaXRlbSIsImluZGV4IiwiY3VycmVudFVzZXJIaXN0b3J5Iiwibm9kZXMiLCJsZW5ndGgiLCJsaXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUdBOztDQUdBOztDQUdBOztBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQUE7O0FBQzFCO0FBQ0EsTUFBTUMsS0FBSyxHQUFHQyxnRUFBUSxFQUF0QixDQUYwQixDQUkxQjs7QUFKMEIsa0JBS09DLG9FQUFRLENBQUNDLHNFQUFELENBTGY7QUFBQSxNQUtsQkMsSUFMa0IsYUFLbEJBLElBTGtCO0FBQUEsTUFLWkMsT0FMWSxhQUtaQSxPQUxZO0FBQUEsTUFLSEMsS0FMRyxhQUtIQSxLQUxHOztBQU8xQixNQUFJQSxLQUFKLEVBQVc7QUFDVE4sU0FBSyxDQUFDO0FBQ0pPLGlCQUFXLEVBQUVELEtBRFQ7QUFFSkUsWUFBTSxFQUFFLE9BRko7QUFHSkMsY0FBUSxFQUFFLElBSE47QUFJSkMsZ0JBQVUsRUFBRTtBQUpSLEtBQUQsQ0FBTDtBQU1EOztBQUVELE1BQUlMLE9BQUosRUFBYTtBQUNYLFdBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxhQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLGVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsR0FBRDtBQUFLLFVBQUksRUFBQyxHQUFWO0FBQWMsZUFBUyxFQUFDLE1BQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLElBQUQ7QUFBTSxjQUFRLEVBQUMsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFnQ00sRUFBaEMsQ0FERixFQUVFLE1BQUMsSUFBRDtBQUFNLGNBQVEsRUFBQyxJQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDR0MsY0FBYyxDQUFDQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0MsU0FBWCxDQUFELEVBQXdCLElBQUlGLElBQUosRUFBeEIsRUFBb0M7QUFDakRHLGVBQVMsRUFBRTtBQURzQyxLQUFwQyxDQURqQixDQUZGLENBREYsRUFTRSxNQUFDLGFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVRGLENBREYsRUFZRSxNQUFDLGNBQUQ7QUFBZ0IsUUFBRSxFQUFFLENBQXBCO0FBQXVCLFlBQU0sRUFBRUMsTUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHQSxNQUFNLElBQ0wsTUFBQyxVQUFEO0FBQVksYUFBTyxFQUFDLEdBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLHVEQUFEO0FBQVMsUUFBRSxFQUFDLElBQVo7QUFBaUIsVUFBSSxFQUFDLElBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixFQUlFLE1BQUMsdURBQUQ7QUFBUyxRQUFFLEVBQUMsSUFBWjtBQUFpQixVQUFJLEVBQUMsSUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFKRixFQU9HQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFDQyxJQUFELEVBQU9DLEtBQVA7QUFBQSxhQUNYLE1BQUMsV0FBRDtBQUFhLFdBQUcsRUFBRUE7QUFBbEIsU0FBNkJELElBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FEVztBQUFBLEtBQVosQ0FQSCxDQUZKLENBWkYsQ0FERixDQURGO0FBZ0NEOztBQUVELE1BQUloQixJQUFKLGFBQUlBLElBQUosdUJBQUlBLElBQUksQ0FBRWtCLGtCQUFOLENBQXlCQyxLQUF6QixDQUErQkMsTUFBbkMsRUFBMkM7QUFDekMsUUFBTUMsSUFBSSxHQUFHckIsSUFBSSxDQUFDa0Isa0JBQUwsQ0FBd0JDLEtBQXJDO0FBRUEsV0FDRSxNQUFDLHFEQUFEO0FBQ0UsV0FBSyxFQUFDLEtBRFI7QUFFRSxjQUFRLEVBQUMsT0FGWDtBQUdFLGNBQVEsRUFBQyxPQUhYO0FBSUUsWUFBTSxFQUFDLE1BSlQ7QUFLRSxhQUFPLEVBQUMsUUFMVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BT0dFLElBQUksQ0FBQ04sR0FBTCxDQUFTLFVBQUNDLElBQUQ7QUFBQSxhQUNSLE1BQUMsb0RBQUQ7QUFBYSxXQUFHLEVBQUVBLElBQUksQ0FBQ0w7QUFBdkIsU0FBc0NLLElBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FEUTtBQUFBLEtBQVQsQ0FQSCxDQURGO0FBYUQsR0FoQkQsTUFnQk87QUFDTCxXQUNFLE1BQUMsdURBQUQ7QUFBUyxRQUFFLEVBQUMsSUFBWjtBQUFpQixVQUFJLEVBQUMsSUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvREFERjtBQUtEO0FBQ0YsQ0ExRUQ7O0dBQU1yQixhO1VBRVVFLHdELEVBR21CQyw0RDs7O0tBTDdCSCxhO0FBNEVTQSw0RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaGlzdG9yeS5qcy42ZWViYmEyZTg0MTFiMmNlNDE0Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRGVwZW5kZW5jaWVzXG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vcmVhY3QtaG9va3MnO1xuXG4vLyBTdHlsZXNcbmltcG9ydCB7IEhlYWRpbmcsIFN0YWNrLCB1c2VUb2FzdCB9IGZyb20gJ0BjaGFrcmEtdWkvY29yZSc7XG5cbi8vIEFwb2xsb1xuaW1wb3J0IHsgVVNFUl9ISVNUT1JZX1FVRVJZIH0gZnJvbSAnLi4vbGliL2Fwb2xsby9xdWVyaWVzJztcblxuLy8gQ29tcG9uZW50c1xuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi9Mb2FkaW5nJztcbmltcG9ydCBIaXN0b3J5TGlzdCBmcm9tICcuL0hpc3RvcnlMaXN0JztcblxuY29uc3QgSGlzdG9yeUxheW91dCA9ICgpID0+IHtcbiAgLy8gSG9va3NcbiAgY29uc3QgdG9hc3QgPSB1c2VUb2FzdCgpO1xuXG4gIC8vIEFwb2xsb1xuICBjb25zdCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH0gPSB1c2VRdWVyeShVU0VSX0hJU1RPUllfUVVFUlkpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIHRvYXN0KHtcbiAgICAgIGRlc2NyaXB0aW9uOiBlcnJvcixcbiAgICAgIHN0YXR1czogJ2Vycm9yJyxcbiAgICAgIGR1cmF0aW9uOiA5MDAxLFxuICAgICAgaXNDbG9zYWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9XG5cbiAgaWYgKGxvYWRpbmcpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPExvYWRpbmc+XG4gICAgICAgIDxBY2NvcmRpb25JdGVtPlxuICAgICAgICAgIDxBY2NvcmRpb25IZWFkZXI+XG4gICAgICAgICAgICA8Qm94IGZsZXg9XCIxXCIgdGV4dEFsaWduPVwibGVmdFwiPlxuICAgICAgICAgICAgICA8VGV4dCBmb250U2l6ZT1cIjJ4bFwiPk9yZGVyIE5vLiB7aWR9PC9UZXh0PlxuICAgICAgICAgICAgICA8VGV4dCBmb250U2l6ZT1cImxnXCI+XG4gICAgICAgICAgICAgICAge2Zvcm1hdERpc3RhbmNlKERhdGUucGFyc2UoY3JlYXRlZEF0KSwgbmV3IERhdGUoKSwge1xuICAgICAgICAgICAgICAgICAgYWRkU3VmZml4OiB0cnVlXG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPEFjY29yZGlvbkljb24gLz5cbiAgICAgICAgICA8L0FjY29yZGlvbkhlYWRlcj5cbiAgICAgICAgICA8QWNjb3JkaW9uUGFuZWwgcGI9ezR9IGlzT3Blbj17aXNPcGVufT5cbiAgICAgICAgICAgIHtpc09wZW4gJiYgKFxuICAgICAgICAgICAgICA8U2ltcGxlR3JpZCBjb2x1bW5zPVwiMlwiPlxuICAgICAgICAgICAgICAgIDxIZWFkaW5nIGFzPVwiaDRcIiBzaXplPVwibWRcIj5cbiAgICAgICAgICAgICAgICAgIEl0ZW1cbiAgICAgICAgICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgICAgICAgICAgPEhlYWRpbmcgYXM9XCJoNFwiIHNpemU9XCJtZFwiPlxuICAgICAgICAgICAgICAgICAgUXVhbnRpdHlcbiAgICAgICAgICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgICAgICAgICAge2hpc3RvcnkubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgPEhpc3RvcnlJdGVtIGtleT17aW5kZXh9IHsuLi5pdGVtfSAvPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L1NpbXBsZUdyaWQ+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvQWNjb3JkaW9uUGFuZWw+XG4gICAgICAgIDwvQWNjb3JkaW9uSXRlbT5cbiAgICAgIDwvTG9hZGluZz5cbiAgICApO1xuICB9XG5cbiAgaWYgKGRhdGE/LmN1cnJlbnRVc2VySGlzdG9yeS5ub2Rlcy5sZW5ndGgpIHtcbiAgICBjb25zdCBsaXN0ID0gZGF0YS5jdXJyZW50VXNlckhpc3Rvcnkubm9kZXM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFN0YWNrXG4gICAgICAgIHdpZHRoPVwiNjAlXCJcbiAgICAgICAgbWF4V2lkdGg9XCI1MDBweFwiXG4gICAgICAgIG1pbldpZHRoPVwiMzAwcHhcIlxuICAgICAgICBtYXJnaW49XCJhdXRvXCJcbiAgICAgICAgc3BhY2luZz1cIjAuNXJlbVwiXG4gICAgICA+XG4gICAgICAgIHtsaXN0Lm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgIDxIaXN0b3J5TGlzdCBrZXk9e2l0ZW0uY3JlYXRlZEF0fSB7Li4uaXRlbX0gLz5cbiAgICAgICAgKSl9XG4gICAgICA8L1N0YWNrPlxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxIZWFkaW5nIGFzPVwiaDRcIiBzaXplPVwibGdcIj5cbiAgICAgICAgUmVtZW1iZXIgdG8gYWRkIHRvIHlvdXIgbGlzdC4g8J+TnVxuICAgICAgPC9IZWFkaW5nPlxuICAgICk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhpc3RvcnlMYXlvdXQ7XG4iXSwic291cmNlUm9vdCI6IiJ9