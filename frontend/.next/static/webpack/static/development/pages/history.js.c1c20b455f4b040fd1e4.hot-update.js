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
    }, __jsx(StyleAccHeader, {
      onClick: function onClick() {
        return setIsOpen(!isOpen);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 11
      }
    }, __jsx(Box, {
      flex: "1",
      textAlign: "left",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 13
      }
    }, __jsx(Text, {
      fontSize: "2xl",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 15
      }
    }, "Order No. ", id), __jsx(Text, {
      fontSize: "lg",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 15
      }
    }, formatDistance(Date.parse(createdAt), new Date(), {
      addSuffix: true
    }))), __jsx(AccordionIcon, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 13
      }
    })), __jsx(AccordionPanel, {
      pb: 4,
      isOpen: isOpen,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 11
      }
    }, isOpen && __jsx(SimpleGrid, {
      columns: "2",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 15
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Heading"], {
      as: "h4",
      size: "md",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 17
      }
    }, "Item"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Heading"], {
      as: "h4",
      size: "md",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 17
      }
    }, "Quantity"), history.map(function (item, index) {
      return __jsx(HistoryItem, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        key: index
      }, item, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
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
        lineNumber: 70,
        columnNumber: 7
      }
    }, list.map(function (item) {
      return __jsx(_HistoryList__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        key: item.createdAt
      }, item, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
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
        lineNumber: 84,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hpc3RvcnlMYXlvdXQuanMiXSwibmFtZXMiOlsiSGlzdG9yeUxheW91dCIsInRvYXN0IiwidXNlVG9hc3QiLCJ1c2VRdWVyeSIsIlVTRVJfSElTVE9SWV9RVUVSWSIsImRhdGEiLCJsb2FkaW5nIiwiZXJyb3IiLCJkZXNjcmlwdGlvbiIsInN0YXR1cyIsImR1cmF0aW9uIiwiaXNDbG9zYWJsZSIsInNldElzT3BlbiIsImlzT3BlbiIsImlkIiwiZm9ybWF0RGlzdGFuY2UiLCJEYXRlIiwicGFyc2UiLCJjcmVhdGVkQXQiLCJhZGRTdWZmaXgiLCJoaXN0b3J5IiwibWFwIiwiaXRlbSIsImluZGV4IiwiY3VycmVudFVzZXJIaXN0b3J5Iiwibm9kZXMiLCJsZW5ndGgiLCJsaXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUdBOztDQUdBOztDQUdBOztBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQUE7O0FBQzFCO0FBQ0EsTUFBTUMsS0FBSyxHQUFHQyxnRUFBUSxFQUF0QixDQUYwQixDQUkxQjs7QUFKMEIsa0JBS09DLG9FQUFRLENBQUNDLHNFQUFELENBTGY7QUFBQSxNQUtsQkMsSUFMa0IsYUFLbEJBLElBTGtCO0FBQUEsTUFLWkMsT0FMWSxhQUtaQSxPQUxZO0FBQUEsTUFLSEMsS0FMRyxhQUtIQSxLQUxHOztBQU8xQixNQUFJQSxLQUFKLEVBQVc7QUFDVE4sU0FBSyxDQUFDO0FBQ0pPLGlCQUFXLEVBQUVELEtBRFQ7QUFFSkUsWUFBTSxFQUFFLE9BRko7QUFHSkMsY0FBUSxFQUFFLElBSE47QUFJSkMsZ0JBQVUsRUFBRTtBQUpSLEtBQUQsQ0FBTDtBQU1EOztBQUVELE1BQUlMLE9BQUosRUFBYTtBQUNYLFdBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxhQUFE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Ijoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGhpc3RvcnkuanMuYzFjMjBiNDU1ZjRiMDQwZmQxZTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIERlcGVuZGVuY2llc1xuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL3JlYWN0LWhvb2tzJztcblxuLy8gU3R5bGVzXG5pbXBvcnQgeyBIZWFkaW5nLCBTdGFjaywgdXNlVG9hc3QgfSBmcm9tICdAY2hha3JhLXVpL2NvcmUnO1xuXG4vLyBBcG9sbG9cbmltcG9ydCB7IFVTRVJfSElTVE9SWV9RVUVSWSB9IGZyb20gJy4uL2xpYi9hcG9sbG8vcXVlcmllcyc7XG5cbi8vIENvbXBvbmVudHNcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4vTG9hZGluZyc7XG5pbXBvcnQgSGlzdG9yeUxpc3QgZnJvbSAnLi9IaXN0b3J5TGlzdCc7XG5cbmNvbnN0IEhpc3RvcnlMYXlvdXQgPSAoKSA9PiB7XG4gIC8vIEhvb2tzXG4gIGNvbnN0IHRvYXN0ID0gdXNlVG9hc3QoKTtcblxuICAvLyBBcG9sbG9cbiAgY29uc3QgeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9ID0gdXNlUXVlcnkoVVNFUl9ISVNUT1JZX1FVRVJZKTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICB0b2FzdCh7XG4gICAgICBkZXNjcmlwdGlvbjogZXJyb3IsXG4gICAgICBzdGF0dXM6ICdlcnJvcicsXG4gICAgICBkdXJhdGlvbjogOTAwMSxcbiAgICAgIGlzQ2xvc2FibGU6IHRydWVcbiAgICB9KTtcbiAgfVxuXG4gIGlmIChsb2FkaW5nKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMb2FkaW5nPlxuICAgICAgICA8QWNjb3JkaW9uSXRlbVxuICAgICAgICA+XG4gICAgICAgICAgPFN0eWxlQWNjSGVhZGVyIG9uQ2xpY2s9eygpID0+IHNldElzT3BlbighaXNPcGVuKX0+XG4gICAgICAgICAgICA8Qm94IGZsZXg9XCIxXCIgdGV4dEFsaWduPVwibGVmdFwiPlxuICAgICAgICAgICAgICA8VGV4dCBmb250U2l6ZT1cIjJ4bFwiPk9yZGVyIE5vLiB7aWR9PC9UZXh0PlxuICAgICAgICAgICAgICA8VGV4dCBmb250U2l6ZT1cImxnXCI+XG4gICAgICAgICAgICAgICAge2Zvcm1hdERpc3RhbmNlKERhdGUucGFyc2UoY3JlYXRlZEF0KSwgbmV3IERhdGUoKSwge1xuICAgICAgICAgICAgICAgICAgYWRkU3VmZml4OiB0cnVlXG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPEFjY29yZGlvbkljb24gLz5cbiAgICAgICAgICA8L1N0eWxlQWNjSGVhZGVyPlxuICAgICAgICAgIDxBY2NvcmRpb25QYW5lbCBwYj17NH0gaXNPcGVuPXtpc09wZW59PlxuICAgICAgICAgICAge2lzT3BlbiAmJiAoXG4gICAgICAgICAgICAgIDxTaW1wbGVHcmlkIGNvbHVtbnM9XCIyXCI+XG4gICAgICAgICAgICAgICAgPEhlYWRpbmcgYXM9XCJoNFwiIHNpemU9XCJtZFwiPlxuICAgICAgICAgICAgICAgICAgSXRlbVxuICAgICAgICAgICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgICAgICAgICA8SGVhZGluZyBhcz1cImg0XCIgc2l6ZT1cIm1kXCI+XG4gICAgICAgICAgICAgICAgICBRdWFudGl0eVxuICAgICAgICAgICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgICAgICAgICB7aGlzdG9yeS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8SGlzdG9yeUl0ZW0ga2V5PXtpbmRleH0gey4uLml0ZW19IC8+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvU2ltcGxlR3JpZD5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9BY2NvcmRpb25QYW5lbD5cbiAgICAgICAgPC9BY2NvcmRpb25JdGVtPlxuICAgICAgPC9Mb2FkaW5nPlxuICAgICk7XG4gIH1cblxuICBpZiAoZGF0YT8uY3VycmVudFVzZXJIaXN0b3J5Lm5vZGVzLmxlbmd0aCkge1xuICAgIGNvbnN0IGxpc3QgPSBkYXRhLmN1cnJlbnRVc2VySGlzdG9yeS5ub2RlcztcblxuICAgIHJldHVybiAoXG4gICAgICA8U3RhY2tcbiAgICAgICAgd2lkdGg9XCI2MCVcIlxuICAgICAgICBtYXhXaWR0aD1cIjUwMHB4XCJcbiAgICAgICAgbWluV2lkdGg9XCIzMDBweFwiXG4gICAgICAgIG1hcmdpbj1cImF1dG9cIlxuICAgICAgICBzcGFjaW5nPVwiMC41cmVtXCJcbiAgICAgID5cbiAgICAgICAge2xpc3QubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgPEhpc3RvcnlMaXN0IGtleT17aXRlbS5jcmVhdGVkQXR9IHsuLi5pdGVtfSAvPlxuICAgICAgICApKX1cbiAgICAgIDwvU3RhY2s+XG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEhlYWRpbmcgYXM9XCJoNFwiIHNpemU9XCJsZ1wiPlxuICAgICAgICBSZW1lbWJlciB0byBhZGQgdG8geW91ciBsaXN0LiDwn5OdXG4gICAgICA8L0hlYWRpbmc+XG4gICAgKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgSGlzdG9yeUxheW91dDtcbiJdLCJzb3VyY2VSb290IjoiIn0=