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
        lineNumber: 40,
        columnNumber: 7
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["AccordionItem"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["AccordionHeader"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 11
      }
    }, __jsx(Box, {
      flex: "1",
      textAlign: "left",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 13
      }
    }, __jsx(Text, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 15
      }
    }), __jsx(Text, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 15
      }
    })), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["AccordionIcon"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 13
      }
    })), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["AccordionPanel"], {
      pb: 4,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 11
      }
    })));
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
        lineNumber: 59,
        columnNumber: 7
      }
    }, list.map(function (item) {
      return __jsx(_HistoryList__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        key: item.createdAt
      }, item, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
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
        lineNumber: 73,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hpc3RvcnlMYXlvdXQuanMiXSwibmFtZXMiOlsiSGlzdG9yeUxheW91dCIsInRvYXN0IiwidXNlVG9hc3QiLCJ1c2VRdWVyeSIsIlVTRVJfSElTVE9SWV9RVUVSWSIsImRhdGEiLCJsb2FkaW5nIiwiZXJyb3IiLCJkZXNjcmlwdGlvbiIsInN0YXR1cyIsImR1cmF0aW9uIiwiaXNDbG9zYWJsZSIsImN1cnJlbnRVc2VySGlzdG9yeSIsIm5vZGVzIiwibGVuZ3RoIiwibGlzdCIsIm1hcCIsIml0ZW0iLCJjcmVhdGVkQXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBR0E7O0NBV0E7O0NBR0E7O0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFBQTs7QUFDMUI7QUFDQSxNQUFNQyxLQUFLLEdBQUdDLGdFQUFRLEVBQXRCLENBRjBCLENBSTFCOztBQUowQixrQkFLT0Msb0VBQVEsQ0FBQ0Msc0VBQUQsQ0FMZjtBQUFBLE1BS2xCQyxJQUxrQixhQUtsQkEsSUFMa0I7QUFBQSxNQUtaQyxPQUxZLGFBS1pBLE9BTFk7QUFBQSxNQUtIQyxLQUxHLGFBS0hBLEtBTEc7O0FBTzFCLE1BQUlBLEtBQUosRUFBVztBQUNUTixTQUFLLENBQUM7QUFDSk8saUJBQVcsRUFBRUQsS0FEVDtBQUVKRSxZQUFNLEVBQUUsT0FGSjtBQUdKQyxjQUFRLEVBQUUsSUFITjtBQUlKQyxnQkFBVSxFQUFFO0FBSlIsS0FBRCxDQUFMO0FBTUQ7O0FBRUQsTUFBSUwsT0FBSixFQUFhO0FBQ1gsV0FDRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLEdBQUQ7QUFBSyxVQUFJLEVBQUMsR0FBVjtBQUFjLGVBQVMsRUFBQyxNQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxJQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixFQUVFLE1BQUMsSUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRkYsQ0FERixFQUtFLE1BQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUxGLENBREYsRUFRRSxNQUFDLDhEQUFEO0FBQWdCLFFBQUUsRUFBRSxDQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BUkYsQ0FERixDQURGO0FBY0Q7O0FBRUQsTUFBSUQsSUFBSixhQUFJQSxJQUFKLHVCQUFJQSxJQUFJLENBQUVPLGtCQUFOLENBQXlCQyxLQUF6QixDQUErQkMsTUFBbkMsRUFBMkM7QUFDekMsUUFBTUMsSUFBSSxHQUFHVixJQUFJLENBQUNPLGtCQUFMLENBQXdCQyxLQUFyQztBQUVBLFdBQ0UsTUFBQyxxREFBRDtBQUNFLFdBQUssRUFBQyxLQURSO0FBRUUsY0FBUSxFQUFDLE9BRlg7QUFHRSxjQUFRLEVBQUMsT0FIWDtBQUlFLFlBQU0sRUFBQyxNQUpUO0FBS0UsYUFBTyxFQUFDLFFBTFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQU9HRSxJQUFJLENBQUNDLEdBQUwsQ0FBUyxVQUFDQyxJQUFEO0FBQUEsYUFDUixNQUFDLG9EQUFEO0FBQWEsV0FBRyxFQUFFQSxJQUFJLENBQUNDO0FBQXZCLFNBQXNDRCxJQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBRFE7QUFBQSxLQUFULENBUEgsQ0FERjtBQWFELEdBaEJELE1BZ0JPO0FBQ0wsV0FDRSxNQUFDLHVEQUFEO0FBQVMsUUFBRSxFQUFDLElBQVo7QUFBaUIsVUFBSSxFQUFDLElBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0RBREY7QUFLRDtBQUNGLENBeEREOztHQUFNakIsYTtVQUVVRSx3RCxFQUdtQkMsNEQ7OztLQUw3QkgsYTtBQTBEU0EsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGhpc3RvcnkuanMuYmI1ZGM5Y2E4MmE2OWJkOWNiOWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIERlcGVuZGVuY2llc1xuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL3JlYWN0LWhvb2tzJztcblxuLy8gU3R5bGVzXG5pbXBvcnQge1xuICBBY2NvcmRpb25JdGVtLFxuICBBY2NvcmRpb25IZWFkZXIsXG4gIEFjY29yZGlvblBhbmVsLFxuICBBY2NvcmRpb25JY29uLFxuICBIZWFkaW5nLFxuICBTdGFjayxcbiAgdXNlVG9hc3Rcbn0gZnJvbSAnQGNoYWtyYS11aS9jb3JlJztcblxuLy8gQXBvbGxvXG5pbXBvcnQgeyBVU0VSX0hJU1RPUllfUVVFUlkgfSBmcm9tICcuLi9saWIvYXBvbGxvL3F1ZXJpZXMnO1xuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQgTG9hZGluZyBmcm9tICcuL0xvYWRpbmcnO1xuaW1wb3J0IEhpc3RvcnlMaXN0IGZyb20gJy4vSGlzdG9yeUxpc3QnO1xuXG5jb25zdCBIaXN0b3J5TGF5b3V0ID0gKCkgPT4ge1xuICAvLyBIb29rc1xuICBjb25zdCB0b2FzdCA9IHVzZVRvYXN0KCk7XG5cbiAgLy8gQXBvbGxvXG4gIGNvbnN0IHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfSA9IHVzZVF1ZXJ5KFVTRVJfSElTVE9SWV9RVUVSWSk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgdG9hc3Qoe1xuICAgICAgZGVzY3JpcHRpb246IGVycm9yLFxuICAgICAgc3RhdHVzOiAnZXJyb3InLFxuICAgICAgZHVyYXRpb246IDkwMDEsXG4gICAgICBpc0Nsb3NhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH1cblxuICBpZiAobG9hZGluZykge1xuICAgIHJldHVybiAoXG4gICAgICA8TG9hZGluZz5cbiAgICAgICAgPEFjY29yZGlvbkl0ZW0+XG4gICAgICAgICAgPEFjY29yZGlvbkhlYWRlcj5cbiAgICAgICAgICAgIDxCb3ggZmxleD1cIjFcIiB0ZXh0QWxpZ249XCJsZWZ0XCI+XG4gICAgICAgICAgICAgIDxUZXh0PjwvVGV4dD5cbiAgICAgICAgICAgICAgPFRleHQ+PC9UZXh0PlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8QWNjb3JkaW9uSWNvbiAvPlxuICAgICAgICAgIDwvQWNjb3JkaW9uSGVhZGVyPlxuICAgICAgICAgIDxBY2NvcmRpb25QYW5lbCBwYj17NH0+PC9BY2NvcmRpb25QYW5lbD5cbiAgICAgICAgPC9BY2NvcmRpb25JdGVtPlxuICAgICAgPC9Mb2FkaW5nPlxuICAgICk7XG4gIH1cblxuICBpZiAoZGF0YT8uY3VycmVudFVzZXJIaXN0b3J5Lm5vZGVzLmxlbmd0aCkge1xuICAgIGNvbnN0IGxpc3QgPSBkYXRhLmN1cnJlbnRVc2VySGlzdG9yeS5ub2RlcztcblxuICAgIHJldHVybiAoXG4gICAgICA8U3RhY2tcbiAgICAgICAgd2lkdGg9XCI2MCVcIlxuICAgICAgICBtYXhXaWR0aD1cIjUwMHB4XCJcbiAgICAgICAgbWluV2lkdGg9XCIzMDBweFwiXG4gICAgICAgIG1hcmdpbj1cImF1dG9cIlxuICAgICAgICBzcGFjaW5nPVwiMC41cmVtXCJcbiAgICAgID5cbiAgICAgICAge2xpc3QubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgPEhpc3RvcnlMaXN0IGtleT17aXRlbS5jcmVhdGVkQXR9IHsuLi5pdGVtfSAvPlxuICAgICAgICApKX1cbiAgICAgIDwvU3RhY2s+XG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEhlYWRpbmcgYXM9XCJoNFwiIHNpemU9XCJsZ1wiPlxuICAgICAgICBSZW1lbWJlciB0byBhZGQgdG8geW91ciBsaXN0LiDwn5OdXG4gICAgICA8L0hlYWRpbmc+XG4gICAgKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgSGlzdG9yeUxheW91dDtcbiJdLCJzb3VyY2VSb290IjoiIn0=