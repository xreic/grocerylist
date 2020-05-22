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
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["AccordionItem"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["AccordionHeader"], {
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
    }), __jsx(Text, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 15
      }
    })), __jsx(AccordionIcon, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 13
      }
    })), __jsx(AccordionPanel, {
      pb: 4,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
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
        lineNumber: 51,
        columnNumber: 7
      }
    }, list.map(function (item) {
      return __jsx(_HistoryList__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        key: item.createdAt
      }, item, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
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
        lineNumber: 65,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hpc3RvcnlMYXlvdXQuanMiXSwibmFtZXMiOlsiSGlzdG9yeUxheW91dCIsInRvYXN0IiwidXNlVG9hc3QiLCJ1c2VRdWVyeSIsIlVTRVJfSElTVE9SWV9RVUVSWSIsImRhdGEiLCJsb2FkaW5nIiwiZXJyb3IiLCJkZXNjcmlwdGlvbiIsInN0YXR1cyIsImR1cmF0aW9uIiwiaXNDbG9zYWJsZSIsImN1cnJlbnRVc2VySGlzdG9yeSIsIm5vZGVzIiwibGVuZ3RoIiwibGlzdCIsIm1hcCIsIml0ZW0iLCJjcmVhdGVkQXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBR0E7O0NBR0E7O0NBR0E7O0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFBQTs7QUFDMUI7QUFDQSxNQUFNQyxLQUFLLEdBQUdDLGdFQUFRLEVBQXRCLENBRjBCLENBSTFCOztBQUowQixrQkFLT0Msb0VBQVEsQ0FBQ0Msc0VBQUQsQ0FMZjtBQUFBLE1BS2xCQyxJQUxrQixhQUtsQkEsSUFMa0I7QUFBQSxNQUtaQyxPQUxZLGFBS1pBLE9BTFk7QUFBQSxNQUtIQyxLQUxHLGFBS0hBLEtBTEc7O0FBTzFCLE1BQUlBLEtBQUosRUFBVztBQUNUTixTQUFLLENBQUM7QUFDSk8saUJBQVcsRUFBRUQsS0FEVDtBQUVKRSxZQUFNLEVBQUUsT0FGSjtBQUdKQyxjQUFRLEVBQUUsSUFITjtBQUlKQyxnQkFBVSxFQUFFO0FBSlIsS0FBRCxDQUFMO0FBTUQ7O0FBRUQsTUFBSUwsT0FBSixFQUFhO0FBQ1gsV0FDRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLEdBQUQ7QUFBSyxVQUFJLEVBQUMsR0FBVjtBQUFjLGVBQVMsRUFBQyxNQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxJQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixFQUVFLE1BQUMsSUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRkYsQ0FERixFQUtFLE1BQUMsYUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BTEYsQ0FERixFQVFFLE1BQUMsY0FBRDtBQUFnQixRQUFFLEVBQUUsQ0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVJGLENBREYsQ0FERjtBQWNEOztBQUVELE1BQUlELElBQUosYUFBSUEsSUFBSix1QkFBSUEsSUFBSSxDQUFFTyxrQkFBTixDQUF5QkMsS0FBekIsQ0FBK0JDLE1BQW5DLEVBQTJDO0FBQ3pDLFFBQU1DLElBQUksR0FBR1YsSUFBSSxDQUFDTyxrQkFBTCxDQUF3QkMsS0FBckM7QUFFQSxXQUNFLE1BQUMscURBQUQ7QUFDRSxXQUFLLEVBQUMsS0FEUjtBQUVFLGNBQVEsRUFBQyxPQUZYO0FBR0UsY0FBUSxFQUFDLE9BSFg7QUFJRSxZQUFNLEVBQUMsTUFKVDtBQUtFLGFBQU8sRUFBQyxRQUxWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FPR0UsSUFBSSxDQUFDQyxHQUFMLENBQVMsVUFBQ0MsSUFBRDtBQUFBLGFBQ1IsTUFBQyxvREFBRDtBQUFhLFdBQUcsRUFBRUEsSUFBSSxDQUFDQztBQUF2QixTQUFzQ0QsSUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURRO0FBQUEsS0FBVCxDQVBILENBREY7QUFhRCxHQWhCRCxNQWdCTztBQUNMLFdBQ0UsTUFBQyx1REFBRDtBQUFTLFFBQUUsRUFBQyxJQUFaO0FBQWlCLFVBQUksRUFBQyxJQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9EQURGO0FBS0Q7QUFDRixDQXhERDs7R0FBTWpCLGE7VUFFVUUsd0QsRUFHbUJDLDREOzs7S0FMN0JILGE7QUEwRFNBLDRFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxoaXN0b3J5LmpzLjkwOTZiOGJmYWYyNDVjZjcxODgzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBEZXBlbmRlbmNpZXNcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9yZWFjdC1ob29rcyc7XG5cbi8vIFN0eWxlc1xuaW1wb3J0IHsgQWNjb3JkaW9uSXRlbSwgQWNjb3JkaW9uSGVhZGVyLCBIZWFkaW5nLCBTdGFjaywgdXNlVG9hc3QgfSBmcm9tICdAY2hha3JhLXVpL2NvcmUnO1xuXG4vLyBBcG9sbG9cbmltcG9ydCB7IFVTRVJfSElTVE9SWV9RVUVSWSB9IGZyb20gJy4uL2xpYi9hcG9sbG8vcXVlcmllcyc7XG5cbi8vIENvbXBvbmVudHNcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4vTG9hZGluZyc7XG5pbXBvcnQgSGlzdG9yeUxpc3QgZnJvbSAnLi9IaXN0b3J5TGlzdCc7XG5cbmNvbnN0IEhpc3RvcnlMYXlvdXQgPSAoKSA9PiB7XG4gIC8vIEhvb2tzXG4gIGNvbnN0IHRvYXN0ID0gdXNlVG9hc3QoKTtcblxuICAvLyBBcG9sbG9cbiAgY29uc3QgeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9ID0gdXNlUXVlcnkoVVNFUl9ISVNUT1JZX1FVRVJZKTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICB0b2FzdCh7XG4gICAgICBkZXNjcmlwdGlvbjogZXJyb3IsXG4gICAgICBzdGF0dXM6ICdlcnJvcicsXG4gICAgICBkdXJhdGlvbjogOTAwMSxcbiAgICAgIGlzQ2xvc2FibGU6IHRydWVcbiAgICB9KTtcbiAgfVxuXG4gIGlmIChsb2FkaW5nKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMb2FkaW5nPlxuICAgICAgICA8QWNjb3JkaW9uSXRlbT5cbiAgICAgICAgICA8QWNjb3JkaW9uSGVhZGVyPlxuICAgICAgICAgICAgPEJveCBmbGV4PVwiMVwiIHRleHRBbGlnbj1cImxlZnRcIj5cbiAgICAgICAgICAgICAgPFRleHQ+PC9UZXh0PlxuICAgICAgICAgICAgICA8VGV4dD48L1RleHQ+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDxBY2NvcmRpb25JY29uIC8+XG4gICAgICAgICAgPC9BY2NvcmRpb25IZWFkZXI+XG4gICAgICAgICAgPEFjY29yZGlvblBhbmVsIHBiPXs0fT48L0FjY29yZGlvblBhbmVsPlxuICAgICAgICA8L0FjY29yZGlvbkl0ZW0+XG4gICAgICA8L0xvYWRpbmc+XG4gICAgKTtcbiAgfVxuXG4gIGlmIChkYXRhPy5jdXJyZW50VXNlckhpc3Rvcnkubm9kZXMubGVuZ3RoKSB7XG4gICAgY29uc3QgbGlzdCA9IGRhdGEuY3VycmVudFVzZXJIaXN0b3J5Lm5vZGVzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxTdGFja1xuICAgICAgICB3aWR0aD1cIjYwJVwiXG4gICAgICAgIG1heFdpZHRoPVwiNTAwcHhcIlxuICAgICAgICBtaW5XaWR0aD1cIjMwMHB4XCJcbiAgICAgICAgbWFyZ2luPVwiYXV0b1wiXG4gICAgICAgIHNwYWNpbmc9XCIwLjVyZW1cIlxuICAgICAgPlxuICAgICAgICB7bGlzdC5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICA8SGlzdG9yeUxpc3Qga2V5PXtpdGVtLmNyZWF0ZWRBdH0gey4uLml0ZW19IC8+XG4gICAgICAgICkpfVxuICAgICAgPC9TdGFjaz5cbiAgICApO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAoXG4gICAgICA8SGVhZGluZyBhcz1cImg0XCIgc2l6ZT1cImxnXCI+XG4gICAgICAgIFJlbWVtYmVyIHRvIGFkZCB0byB5b3VyIGxpc3QuIPCfk51cbiAgICAgIDwvSGVhZGluZz5cbiAgICApO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIaXN0b3J5TGF5b3V0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==