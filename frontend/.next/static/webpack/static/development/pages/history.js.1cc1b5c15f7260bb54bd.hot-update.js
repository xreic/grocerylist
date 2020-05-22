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
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 15
      }
    }, "Order No. ", id), __jsx(Text, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hpc3RvcnlMYXlvdXQuanMiXSwibmFtZXMiOlsiSGlzdG9yeUxheW91dCIsInRvYXN0IiwidXNlVG9hc3QiLCJ1c2VRdWVyeSIsIlVTRVJfSElTVE9SWV9RVUVSWSIsImRhdGEiLCJsb2FkaW5nIiwiZXJyb3IiLCJkZXNjcmlwdGlvbiIsInN0YXR1cyIsImR1cmF0aW9uIiwiaXNDbG9zYWJsZSIsImlkIiwiZm9ybWF0RGlzdGFuY2UiLCJEYXRlIiwicGFyc2UiLCJjcmVhdGVkQXQiLCJhZGRTdWZmaXgiLCJpc09wZW4iLCJoaXN0b3J5IiwibWFwIiwiaXRlbSIsImluZGV4IiwiY3VycmVudFVzZXJIaXN0b3J5Iiwibm9kZXMiLCJsZW5ndGgiLCJsaXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUdBOztDQUdBOztDQUdBOztBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQUE7O0FBQzFCO0FBQ0EsTUFBTUMsS0FBSyxHQUFHQyxnRUFBUSxFQUF0QixDQUYwQixDQUkxQjs7QUFKMEIsa0JBS09DLG9FQUFRLENBQUNDLHNFQUFELENBTGY7QUFBQSxNQUtsQkMsSUFMa0IsYUFLbEJBLElBTGtCO0FBQUEsTUFLWkMsT0FMWSxhQUtaQSxPQUxZO0FBQUEsTUFLSEMsS0FMRyxhQUtIQSxLQUxHOztBQU8xQixNQUFJQSxLQUFKLEVBQVc7QUFDVE4sU0FBSyxDQUFDO0FBQ0pPLGlCQUFXLEVBQUVELEtBRFQ7QUFFSkUsWUFBTSxFQUFFLE9BRko7QUFHSkMsY0FBUSxFQUFFLElBSE47QUFJSkMsZ0JBQVUsRUFBRTtBQUpSLEtBQUQsQ0FBTDtBQU1EOztBQUVELE1BQUlMLE9BQUosRUFBYTtBQUNYLFdBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxhQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLGVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsR0FBRDtBQUFLLFVBQUksRUFBQyxHQUFWO0FBQWMsZUFBUyxFQUFDLE1BQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLElBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBaUJNLEVBQWpCLENBREYsRUFFRSxNQUFDLElBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHQyxjQUFjLENBQUNDLElBQUksQ0FBQ0MsS0FBTCxDQUFXQyxTQUFYLENBQUQsRUFBd0IsSUFBSUYsSUFBSixFQUF4QixFQUFvQztBQUNqREcsZUFBUyxFQUFFO0FBRHNDLEtBQXBDLENBRGpCLENBRkYsQ0FERixFQVNFLE1BQUMsYUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BVEYsQ0FERixFQVlFLE1BQUMsY0FBRDtBQUFnQixRQUFFLEVBQUUsQ0FBcEI7QUFBdUIsWUFBTSxFQUFFQyxNQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0dBLE1BQU0sSUFDTCxNQUFDLFVBQUQ7QUFBWSxhQUFPLEVBQUMsR0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsdURBQUQ7QUFBUyxRQUFFLEVBQUMsSUFBWjtBQUFpQixVQUFJLEVBQUMsSUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLEVBSUUsTUFBQyx1REFBRDtBQUFTLFFBQUUsRUFBQyxJQUFaO0FBQWlCLFVBQUksRUFBQyxJQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpGLEVBT0dDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQUNDLElBQUQsRUFBT0MsS0FBUDtBQUFBLGFBQ1gsTUFBQyxXQUFEO0FBQWEsV0FBRyxFQUFFQTtBQUFsQixTQUE2QkQsSUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURXO0FBQUEsS0FBWixDQVBILENBRkosQ0FaRixDQURGLENBREY7QUFnQ0Q7O0FBRUQsTUFBSWhCLElBQUosYUFBSUEsSUFBSix1QkFBSUEsSUFBSSxDQUFFa0Isa0JBQU4sQ0FBeUJDLEtBQXpCLENBQStCQyxNQUFuQyxFQUEyQztBQUN6QyxRQUFNQyxJQUFJLEdBQUdyQixJQUFJLENBQUNrQixrQkFBTCxDQUF3QkMsS0FBckM7QUFFQSxXQUNFLE1BQUMscURBQUQ7QUFDRSxXQUFLLEVBQUMsS0FEUjtBQUVFLGNBQVEsRUFBQyxPQUZYO0FBR0UsY0FBUSxFQUFDLE9BSFg7QUFJRSxZQUFNLEVBQUMsTUFKVDtBQUtFLGFBQU8sRUFBQyxRQUxWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FPR0UsSUFBSSxDQUFDTixHQUFMLENBQVMsVUFBQ0MsSUFBRDtBQUFBLGFBQ1IsTUFBQyxvREFBRDtBQUFhLFdBQUcsRUFBRUEsSUFBSSxDQUFDTDtBQUF2QixTQUFzQ0ssSUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURRO0FBQUEsS0FBVCxDQVBILENBREY7QUFhRCxHQWhCRCxNQWdCTztBQUNMLFdBQ0UsTUFBQyx1REFBRDtBQUFTLFFBQUUsRUFBQyxJQUFaO0FBQWlCLFVBQUksRUFBQyxJQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9EQURGO0FBS0Q7QUFDRixDQTFFRDs7R0FBTXJCLGE7VUFFVUUsd0QsRUFHbUJDLDREOzs7S0FMN0JILGE7QUE0RVNBLDRFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxoaXN0b3J5LmpzLjFjYzFiNWMxNWY3MjYwYmI1NGJkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBEZXBlbmRlbmNpZXNcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9yZWFjdC1ob29rcyc7XG5cbi8vIFN0eWxlc1xuaW1wb3J0IHsgSGVhZGluZywgU3RhY2ssIHVzZVRvYXN0IH0gZnJvbSAnQGNoYWtyYS11aS9jb3JlJztcblxuLy8gQXBvbGxvXG5pbXBvcnQgeyBVU0VSX0hJU1RPUllfUVVFUlkgfSBmcm9tICcuLi9saWIvYXBvbGxvL3F1ZXJpZXMnO1xuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQgTG9hZGluZyBmcm9tICcuL0xvYWRpbmcnO1xuaW1wb3J0IEhpc3RvcnlMaXN0IGZyb20gJy4vSGlzdG9yeUxpc3QnO1xuXG5jb25zdCBIaXN0b3J5TGF5b3V0ID0gKCkgPT4ge1xuICAvLyBIb29rc1xuICBjb25zdCB0b2FzdCA9IHVzZVRvYXN0KCk7XG5cbiAgLy8gQXBvbGxvXG4gIGNvbnN0IHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfSA9IHVzZVF1ZXJ5KFVTRVJfSElTVE9SWV9RVUVSWSk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgdG9hc3Qoe1xuICAgICAgZGVzY3JpcHRpb246IGVycm9yLFxuICAgICAgc3RhdHVzOiAnZXJyb3InLFxuICAgICAgZHVyYXRpb246IDkwMDEsXG4gICAgICBpc0Nsb3NhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH1cblxuICBpZiAobG9hZGluZykge1xuICAgIHJldHVybiAoXG4gICAgICA8TG9hZGluZz5cbiAgICAgICAgPEFjY29yZGlvbkl0ZW0+XG4gICAgICAgICAgPEFjY29yZGlvbkhlYWRlcj5cbiAgICAgICAgICAgIDxCb3ggZmxleD1cIjFcIiB0ZXh0QWxpZ249XCJsZWZ0XCI+XG4gICAgICAgICAgICAgIDxUZXh0Pk9yZGVyIE5vLiB7aWR9PC9UZXh0PlxuICAgICAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgICAgICB7Zm9ybWF0RGlzdGFuY2UoRGF0ZS5wYXJzZShjcmVhdGVkQXQpLCBuZXcgRGF0ZSgpLCB7XG4gICAgICAgICAgICAgICAgICBhZGRTdWZmaXg6IHRydWVcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8QWNjb3JkaW9uSWNvbiAvPlxuICAgICAgICAgIDwvQWNjb3JkaW9uSGVhZGVyPlxuICAgICAgICAgIDxBY2NvcmRpb25QYW5lbCBwYj17NH0gaXNPcGVuPXtpc09wZW59PlxuICAgICAgICAgICAge2lzT3BlbiAmJiAoXG4gICAgICAgICAgICAgIDxTaW1wbGVHcmlkIGNvbHVtbnM9XCIyXCI+XG4gICAgICAgICAgICAgICAgPEhlYWRpbmcgYXM9XCJoNFwiIHNpemU9XCJtZFwiPlxuICAgICAgICAgICAgICAgICAgSXRlbVxuICAgICAgICAgICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgICAgICAgICA8SGVhZGluZyBhcz1cImg0XCIgc2l6ZT1cIm1kXCI+XG4gICAgICAgICAgICAgICAgICBRdWFudGl0eVxuICAgICAgICAgICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgICAgICAgICB7aGlzdG9yeS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8SGlzdG9yeUl0ZW0ga2V5PXtpbmRleH0gey4uLml0ZW19IC8+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvU2ltcGxlR3JpZD5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9BY2NvcmRpb25QYW5lbD5cbiAgICAgICAgPC9BY2NvcmRpb25JdGVtPlxuICAgICAgPC9Mb2FkaW5nPlxuICAgICk7XG4gIH1cblxuICBpZiAoZGF0YT8uY3VycmVudFVzZXJIaXN0b3J5Lm5vZGVzLmxlbmd0aCkge1xuICAgIGNvbnN0IGxpc3QgPSBkYXRhLmN1cnJlbnRVc2VySGlzdG9yeS5ub2RlcztcblxuICAgIHJldHVybiAoXG4gICAgICA8U3RhY2tcbiAgICAgICAgd2lkdGg9XCI2MCVcIlxuICAgICAgICBtYXhXaWR0aD1cIjUwMHB4XCJcbiAgICAgICAgbWluV2lkdGg9XCIzMDBweFwiXG4gICAgICAgIG1hcmdpbj1cImF1dG9cIlxuICAgICAgICBzcGFjaW5nPVwiMC41cmVtXCJcbiAgICAgID5cbiAgICAgICAge2xpc3QubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgPEhpc3RvcnlMaXN0IGtleT17aXRlbS5jcmVhdGVkQXR9IHsuLi5pdGVtfSAvPlxuICAgICAgICApKX1cbiAgICAgIDwvU3RhY2s+XG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEhlYWRpbmcgYXM9XCJoNFwiIHNpemU9XCJsZ1wiPlxuICAgICAgICBSZW1lbWJlciB0byBhZGQgdG8geW91ciBsaXN0LiDwn5OdXG4gICAgICA8L0hlYWRpbmc+XG4gICAgKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgSGlzdG9yeUxheW91dDtcbiJdLCJzb3VyY2VSb290IjoiIn0=