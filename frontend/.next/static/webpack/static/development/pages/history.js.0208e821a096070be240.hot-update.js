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
      _after: {
        bord: bord
      },
      _before: {},
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
          lineNumber: 48,
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
        lineNumber: 54,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hpc3RvcnlMYXlvdXQuanMiXSwibmFtZXMiOlsiSGlzdG9yeUxheW91dCIsInRvYXN0IiwidXNlVG9hc3QiLCJ1c2VRdWVyeSIsIlVTRVJfSElTVE9SWV9RVUVSWSIsImRhdGEiLCJsb2FkaW5nIiwiZXJyb3IiLCJkZXNjcmlwdGlvbiIsInN0YXR1cyIsImR1cmF0aW9uIiwiaXNDbG9zYWJsZSIsImN1cnJlbnRVc2VySGlzdG9yeSIsIm5vZGVzIiwibGVuZ3RoIiwibGlzdCIsImJvcmQiLCJtYXAiLCJpdGVtIiwiY3JlYXRlZEF0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUdBOztDQUdBOztDQUdBOztBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQUE7O0FBQzFCO0FBQ0EsTUFBTUMsS0FBSyxHQUFHQyxnRUFBUSxFQUF0QixDQUYwQixDQUkxQjs7QUFKMEIsa0JBS09DLG9FQUFRLENBQUNDLHNFQUFELENBTGY7QUFBQSxNQUtsQkMsSUFMa0IsYUFLbEJBLElBTGtCO0FBQUEsTUFLWkMsT0FMWSxhQUtaQSxPQUxZO0FBQUEsTUFLSEMsS0FMRyxhQUtIQSxLQUxHOztBQU8xQixNQUFJQSxLQUFKLEVBQVc7QUFDVE4sU0FBSyxDQUFDO0FBQ0pPLGlCQUFXLEVBQUVELEtBRFQ7QUFFSkUsWUFBTSxFQUFFLE9BRko7QUFHSkMsY0FBUSxFQUFFLElBSE47QUFJSkMsZ0JBQVUsRUFBRTtBQUpSLEtBQUQsQ0FBTDtBQU1EOztBQUVELE1BQUlMLE9BQUosRUFBYTtBQUNYLFdBQU8sTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQVA7QUFDRDs7QUFFRCxNQUFJRCxJQUFKLGFBQUlBLElBQUosdUJBQUlBLElBQUksQ0FBRU8sa0JBQU4sQ0FBeUJDLEtBQXpCLENBQStCQyxNQUFuQyxFQUEyQztBQUN6QyxRQUFNQyxJQUFJLEdBQUdWLElBQUksQ0FBQ08sa0JBQUwsQ0FBd0JDLEtBQXJDO0FBRUEsV0FDRSxNQUFDLHFEQUFEO0FBQ0UsV0FBSyxFQUFDLEtBRFI7QUFFRSxjQUFRLEVBQUMsT0FGWDtBQUdFLGNBQVEsRUFBQyxPQUhYO0FBSUUsWUFBTSxFQUFDLE1BSlQ7QUFLRSxhQUFPLEVBQUMsUUFMVjtBQU1FLFlBQU0sRUFBRTtBQUFDRyxZQUFJLEVBQUpBO0FBQUQsT0FOVjtBQU9FLGFBQU8sRUFBRSxFQVBYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FTR0QsSUFBSSxDQUFDRSxHQUFMLENBQVMsVUFBQ0MsSUFBRDtBQUFBLGFBQ1IsTUFBQyxvREFBRDtBQUFhLFdBQUcsRUFBRUEsSUFBSSxDQUFDQztBQUF2QixTQUFzQ0QsSUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURRO0FBQUEsS0FBVCxDQVRILENBREY7QUFlRCxHQWxCRCxNQWtCTztBQUNMLFdBQ0UsTUFBQyx1REFBRDtBQUFTLFFBQUUsRUFBQyxJQUFaO0FBQWlCLFVBQUksRUFBQyxJQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9EQURGO0FBS0Q7QUFDRixDQTdDRDs7R0FBTWxCLGE7VUFFVUUsd0QsRUFHbUJDLDREOzs7S0FMN0JILGE7QUErQ1NBLDRFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxoaXN0b3J5LmpzLjAyMDhlODIxYTA5NjA3MGJlMjQwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBEZXBlbmRlbmNpZXNcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9yZWFjdC1ob29rcyc7XG5cbi8vIFN0eWxlc1xuaW1wb3J0IHsgSGVhZGluZywgU3RhY2ssIHVzZVRvYXN0IH0gZnJvbSAnQGNoYWtyYS11aS9jb3JlJztcblxuLy8gQXBvbGxvXG5pbXBvcnQgeyBVU0VSX0hJU1RPUllfUVVFUlkgfSBmcm9tICcuLi9saWIvYXBvbGxvL3F1ZXJpZXMnO1xuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQgTG9hZGluZyBmcm9tICcuL0xvYWRpbmcnO1xuaW1wb3J0IEhpc3RvcnlMaXN0IGZyb20gJy4vSGlzdG9yeUxpc3QnO1xuXG5jb25zdCBIaXN0b3J5TGF5b3V0ID0gKCkgPT4ge1xuICAvLyBIb29rc1xuICBjb25zdCB0b2FzdCA9IHVzZVRvYXN0KCk7XG5cbiAgLy8gQXBvbGxvXG4gIGNvbnN0IHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfSA9IHVzZVF1ZXJ5KFVTRVJfSElTVE9SWV9RVUVSWSk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgdG9hc3Qoe1xuICAgICAgZGVzY3JpcHRpb246IGVycm9yLFxuICAgICAgc3RhdHVzOiAnZXJyb3InLFxuICAgICAgZHVyYXRpb246IDkwMDEsXG4gICAgICBpc0Nsb3NhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH1cblxuICBpZiAobG9hZGluZykge1xuICAgIHJldHVybiA8TG9hZGluZyAvPjtcbiAgfVxuXG4gIGlmIChkYXRhPy5jdXJyZW50VXNlckhpc3Rvcnkubm9kZXMubGVuZ3RoKSB7XG4gICAgY29uc3QgbGlzdCA9IGRhdGEuY3VycmVudFVzZXJIaXN0b3J5Lm5vZGVzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxTdGFja1xuICAgICAgICB3aWR0aD1cIjYwJVwiXG4gICAgICAgIG1heFdpZHRoPVwiNTAwcHhcIlxuICAgICAgICBtaW5XaWR0aD1cIjMwMHB4XCJcbiAgICAgICAgbWFyZ2luPVwiYXV0b1wiXG4gICAgICAgIHNwYWNpbmc9XCIwLjVyZW1cIlxuICAgICAgICBfYWZ0ZXI9e3tib3JkfX1cbiAgICAgICAgX2JlZm9yZT17e319XG4gICAgICA+XG4gICAgICAgIHtsaXN0Lm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgIDxIaXN0b3J5TGlzdCBrZXk9e2l0ZW0uY3JlYXRlZEF0fSB7Li4uaXRlbX0gLz5cbiAgICAgICAgKSl9XG4gICAgICA8L1N0YWNrPlxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxIZWFkaW5nIGFzPVwiaDRcIiBzaXplPVwibGdcIj5cbiAgICAgICAgUmVtZW1iZXIgdG8gYWRkIHRvIHlvdXIgbGlzdC4g8J+TnVxuICAgICAgPC9IZWFkaW5nPlxuICAgICk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhpc3RvcnlMYXlvdXQ7XG4iXSwic291cmNlUm9vdCI6IiJ9