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
        lineNumber: 31,
        columnNumber: 12
      }
    });
  }

  if (data === null || data === void 0 ? void 0 : data.currentUserHistory.nodes.length) {
    var list = data.currentUserHistory.nodes;
    return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Stack"], {
      width: "60%",
      maxWidth: "500px",
      minWidth: "300px",
      margin: "auto",
      spacing: "0.5rem",
      _after: {},
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 7
      }
    }, list.map(function (item) {
      return __jsx(_HistoryList__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        key: item.createdAt
      }, item, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47,
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
        lineNumber: 53,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hpc3RvcnlMYXlvdXQuanMiXSwibmFtZXMiOlsiSGlzdG9yeUxheW91dCIsInRvYXN0IiwidXNlVG9hc3QiLCJ1c2VRdWVyeSIsIlVTRVJfSElTVE9SWV9RVUVSWSIsImRhdGEiLCJsb2FkaW5nIiwiZXJyb3IiLCJkZXNjcmlwdGlvbiIsInN0YXR1cyIsImR1cmF0aW9uIiwiaXNDbG9zYWJsZSIsImN1cnJlbnRVc2VySGlzdG9yeSIsIm5vZGVzIiwibGVuZ3RoIiwibGlzdCIsIm1hcCIsIml0ZW0iLCJjcmVhdGVkQXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBR0E7O0NBR0E7O0NBR0E7O0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFBQTs7QUFDMUI7QUFDQSxNQUFNQyxLQUFLLEdBQUdDLGdFQUFRLEVBQXRCLENBRjBCLENBSTFCOztBQUowQixrQkFLT0Msb0VBQVEsQ0FBQ0Msc0VBQUQsQ0FMZjtBQUFBLE1BS2xCQyxJQUxrQixhQUtsQkEsSUFMa0I7QUFBQSxNQUtaQyxPQUxZLGFBS1pBLE9BTFk7QUFBQSxNQUtIQyxLQUxHLGFBS0hBLEtBTEc7O0FBTzFCLE1BQUlBLEtBQUosRUFBVztBQUNUTixTQUFLLENBQUM7QUFDSk8saUJBQVcsRUFBRUQsS0FEVDtBQUVKRSxZQUFNLEVBQUUsT0FGSjtBQUdKQyxjQUFRLEVBQUUsSUFITjtBQUlKQyxnQkFBVSxFQUFFO0FBSlIsS0FBRCxDQUFMO0FBTUQ7O0FBRUQsTUFBSUwsT0FBSixFQUFhO0FBQ1gsV0FBTyxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBUDtBQUNEOztBQUVELE1BQUlELElBQUosYUFBSUEsSUFBSix1QkFBSUEsSUFBSSxDQUFFTyxrQkFBTixDQUF5QkMsS0FBekIsQ0FBK0JDLE1BQW5DLEVBQTJDO0FBQ3pDLFFBQU1DLElBQUksR0FBR1YsSUFBSSxDQUFDTyxrQkFBTCxDQUF3QkMsS0FBckM7QUFFQSxXQUNFLE1BQUMscURBQUQ7QUFDRSxXQUFLLEVBQUMsS0FEUjtBQUVFLGNBQVEsRUFBQyxPQUZYO0FBR0UsY0FBUSxFQUFDLE9BSFg7QUFJRSxZQUFNLEVBQUMsTUFKVDtBQUtFLGFBQU8sRUFBQyxRQUxWO0FBTUUsWUFBTSxFQUFFLEVBTlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQVFHRSxJQUFJLENBQUNDLEdBQUwsQ0FBUyxVQUFDQyxJQUFEO0FBQUEsYUFDUixNQUFDLG9EQUFEO0FBQWEsV0FBRyxFQUFFQSxJQUFJLENBQUNDO0FBQXZCLFNBQXNDRCxJQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBRFE7QUFBQSxLQUFULENBUkgsQ0FERjtBQWNELEdBakJELE1BaUJPO0FBQ0wsV0FDRSxNQUFDLHVEQUFEO0FBQVMsUUFBRSxFQUFDLElBQVo7QUFBaUIsVUFBSSxFQUFDLElBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0RBREY7QUFLRDtBQUNGLENBNUNEOztHQUFNakIsYTtVQUVVRSx3RCxFQUdtQkMsNEQ7OztLQUw3QkgsYTtBQThDU0EsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGhpc3RvcnkuanMuMzQxMmJmNDIyM2FlMzQyYTQyOGEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIERlcGVuZGVuY2llc1xuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL3JlYWN0LWhvb2tzJztcblxuLy8gU3R5bGVzXG5pbXBvcnQgeyBIZWFkaW5nLCBTdGFjaywgdXNlVG9hc3QgfSBmcm9tICdAY2hha3JhLXVpL2NvcmUnO1xuXG4vLyBBcG9sbG9cbmltcG9ydCB7IFVTRVJfSElTVE9SWV9RVUVSWSB9IGZyb20gJy4uL2xpYi9hcG9sbG8vcXVlcmllcyc7XG5cbi8vIENvbXBvbmVudHNcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4vTG9hZGluZyc7XG5pbXBvcnQgSGlzdG9yeUxpc3QgZnJvbSAnLi9IaXN0b3J5TGlzdCc7XG5cbmNvbnN0IEhpc3RvcnlMYXlvdXQgPSAoKSA9PiB7XG4gIC8vIEhvb2tzXG4gIGNvbnN0IHRvYXN0ID0gdXNlVG9hc3QoKTtcblxuICAvLyBBcG9sbG9cbiAgY29uc3QgeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9ID0gdXNlUXVlcnkoVVNFUl9ISVNUT1JZX1FVRVJZKTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICB0b2FzdCh7XG4gICAgICBkZXNjcmlwdGlvbjogZXJyb3IsXG4gICAgICBzdGF0dXM6ICdlcnJvcicsXG4gICAgICBkdXJhdGlvbjogOTAwMSxcbiAgICAgIGlzQ2xvc2FibGU6IHRydWVcbiAgICB9KTtcbiAgfVxuXG4gIGlmIChsb2FkaW5nKSB7XG4gICAgcmV0dXJuIDxMb2FkaW5nIC8+O1xuICB9XG5cbiAgaWYgKGRhdGE/LmN1cnJlbnRVc2VySGlzdG9yeS5ub2Rlcy5sZW5ndGgpIHtcbiAgICBjb25zdCBsaXN0ID0gZGF0YS5jdXJyZW50VXNlckhpc3Rvcnkubm9kZXM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFN0YWNrXG4gICAgICAgIHdpZHRoPVwiNjAlXCJcbiAgICAgICAgbWF4V2lkdGg9XCI1MDBweFwiXG4gICAgICAgIG1pbldpZHRoPVwiMzAwcHhcIlxuICAgICAgICBtYXJnaW49XCJhdXRvXCJcbiAgICAgICAgc3BhY2luZz1cIjAuNXJlbVwiXG4gICAgICAgIF9hZnRlcj17e319XG4gICAgICA+XG4gICAgICAgIHtsaXN0Lm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgIDxIaXN0b3J5TGlzdCBrZXk9e2l0ZW0uY3JlYXRlZEF0fSB7Li4uaXRlbX0gLz5cbiAgICAgICAgKSl9XG4gICAgICA8L1N0YWNrPlxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxIZWFkaW5nIGFzPVwiaDRcIiBzaXplPVwibGdcIj5cbiAgICAgICAgUmVtZW1iZXIgdG8gYWRkIHRvIHlvdXIgbGlzdC4g8J+TnVxuICAgICAgPC9IZWFkaW5nPlxuICAgICk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhpc3RvcnlMYXlvdXQ7XG4iXSwic291cmNlUm9vdCI6IiJ9