webpackHotUpdate("static\\development\\pages\\history.js",{

/***/ "./components/Loading.js":
/*!*******************************!*\
  !*** ./components/Loading.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/es/index.js");
var _this = undefined,
    _jsxFileName = "F:\\Work\\Projects\\Grocery List\\frontend\\components\\Loading.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// Dependencies
 // Styles



var HistoryLoad = function HistoryLoad() {
  return __jsx(Skeleton, {
    borderRadius: "1rem",
    marginBottom: "1rem",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 3
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["AccordionItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["AccordionHeader"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    flex: "1",
    textAlign: "left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx(Text, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }, "Yes"), __jsx(Text, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }, "Yes")), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["AccordionIcon"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  })), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["AccordionPanel"], {
    pb: 4,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  })));
};

_c = HistoryLoad;

var GroceryListLoad = function GroceryListLoad() {
  return __jsx(Skeleton, {
    borderRadius: "1rem",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 3
    }
  }, "Placeholder");
};

_c2 = GroceryListLoad;

var Loading = function Loading() {
  _s();

  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])(),
      pathname = _useRouter.pathname;

  if (pathname === '/history') {
    return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Stack"], {
      width: "60%",
      maxWidth: "500px",
      minWidth: "300px",
      margin: "auto",
      spacing: "0.5rem",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 7
      }
    }, __jsx(HistoryLoad, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }
    }), __jsx(HistoryLoad, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }
    }), __jsx(HistoryLoad, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }
    }), __jsx(HistoryLoad, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }
    }));
  }

  if (pathname === '/') {
    return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Stack"], {
      width: "60%",
      maxWidth: "500px",
      minWidth: "300px",
      margin: "auto",
      spacing: "0.5rem",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 7
      }
    }, __jsx(GroceryListLoad, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }
    }), __jsx(GroceryListLoad, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }
    }), __jsx(GroceryListLoad, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }
    }), __jsx(GroceryListLoad, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }
    }));
  }
};

_s(Loading, "QpP2vYJstxsDz0K+Qwttl8PPVoY=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"]];
});

_c3 = Loading;
/* harmony default export */ __webpack_exports__["default"] = (Loading);

var _c, _c2, _c3;

$RefreshReg$(_c, "HistoryLoad");
$RefreshReg$(_c2, "GroceryListLoad");
$RefreshReg$(_c3, "Loading");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvYWRpbmcuanMiXSwibmFtZXMiOlsiSGlzdG9yeUxvYWQiLCJHcm9jZXJ5TGlzdExvYWQiLCJMb2FkaW5nIiwidXNlUm91dGVyIiwicGF0aG5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUdBOztBQUNBOztBQVNBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjO0FBQUEsU0FDbEIsTUFBQyxRQUFEO0FBQVUsZ0JBQVksRUFBQyxNQUF2QjtBQUE4QixnQkFBWSxFQUFDLE1BQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG1EQUFEO0FBQUssUUFBSSxFQUFDLEdBQVY7QUFBYyxhQUFTLEVBQUMsTUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsSUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREYsRUFFRSxNQUFDLElBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUZGLENBREYsRUFLRSxNQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMRixDQURGLEVBUUUsTUFBQyw4REFBRDtBQUFnQixNQUFFLEVBQUUsQ0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJGLENBREYsQ0FEa0I7QUFBQSxDQUFwQjs7S0FBTUEsVzs7QUFlTixJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCO0FBQUEsU0FDdEIsTUFBQyxRQUFEO0FBQVUsZ0JBQVksRUFBQyxNQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURzQjtBQUFBLENBQXhCOztNQUFNQSxlOztBQUlOLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFBQTs7QUFBQSxtQkFDQ0MsNkRBQVMsRUFEVjtBQUFBLE1BQ1pDLFFBRFksY0FDWkEsUUFEWTs7QUFHcEIsTUFBSUEsUUFBUSxLQUFLLFVBQWpCLEVBQTZCO0FBQzNCLFdBQ0UsTUFBQyxxREFBRDtBQUNFLFdBQUssRUFBQyxLQURSO0FBRUUsY0FBUSxFQUFDLE9BRlg7QUFHRSxjQUFRLEVBQUMsT0FIWDtBQUlFLFlBQU0sRUFBQyxNQUpUO0FBS0UsYUFBTyxFQUFDLFFBTFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQU9FLE1BQUMsV0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BUEYsRUFRRSxNQUFDLFdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVJGLEVBU0UsTUFBQyxXQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFURixFQVVFLE1BQUMsV0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BVkYsQ0FERjtBQWNEOztBQUVELE1BQUlBLFFBQVEsS0FBSyxHQUFqQixFQUFzQjtBQUNwQixXQUNFLE1BQUMscURBQUQ7QUFDRSxXQUFLLEVBQUMsS0FEUjtBQUVFLGNBQVEsRUFBQyxPQUZYO0FBR0UsY0FBUSxFQUFDLE9BSFg7QUFJRSxZQUFNLEVBQUMsTUFKVDtBQUtFLGFBQU8sRUFBQyxRQUxWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FPRSxNQUFDLGVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVBGLEVBUUUsTUFBQyxlQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFSRixFQVNFLE1BQUMsZUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BVEYsRUFVRSxNQUFDLGVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVZGLENBREY7QUFjRDtBQUNGLENBcENEOztHQUFNRixPO1VBQ2lCQyxxRDs7O01BRGpCRCxPO0FBc0NTQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaGlzdG9yeS5qcy5kMTU4ZGMxNWM2OWY0ZWM3Y2JiZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRGVwZW5kZW5jaWVzXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5cbi8vIFN0eWxlc1xuaW1wb3J0IHtcbiAgQWNjb3JkaW9uSWNvbixcbiAgQWNjb3JkaW9uSXRlbSxcbiAgQWNjb3JkaW9uSGVhZGVyLFxuICBBY2NvcmRpb25QYW5lbCxcbiAgQm94LFxuICBTdGFja1xufSBmcm9tICdAY2hha3JhLXVpL2NvcmUnO1xuXG5jb25zdCBIaXN0b3J5TG9hZCA9ICgpID0+IChcbiAgPFNrZWxldG9uIGJvcmRlclJhZGl1cz1cIjFyZW1cIiBtYXJnaW5Cb3R0b209XCIxcmVtXCI+XG4gICAgPEFjY29yZGlvbkl0ZW0+XG4gICAgICA8QWNjb3JkaW9uSGVhZGVyPlxuICAgICAgICA8Qm94IGZsZXg9XCIxXCIgdGV4dEFsaWduPVwibGVmdFwiPlxuICAgICAgICAgIDxUZXh0PlllczwvVGV4dD5cbiAgICAgICAgICA8VGV4dD5ZZXM8L1RleHQ+XG4gICAgICAgIDwvQm94PlxuICAgICAgICA8QWNjb3JkaW9uSWNvbiAvPlxuICAgICAgPC9BY2NvcmRpb25IZWFkZXI+XG4gICAgICA8QWNjb3JkaW9uUGFuZWwgcGI9ezR9PjwvQWNjb3JkaW9uUGFuZWw+XG4gICAgPC9BY2NvcmRpb25JdGVtPlxuICA8L1NrZWxldG9uPlxuKTtcblxuY29uc3QgR3JvY2VyeUxpc3RMb2FkID0gKCkgPT4gKFxuICA8U2tlbGV0b24gYm9yZGVyUmFkaXVzPVwiMXJlbVwiPlBsYWNlaG9sZGVyPC9Ta2VsZXRvbj5cbik7XG5cbmNvbnN0IExvYWRpbmcgPSAoKSA9PiB7XG4gIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHVzZVJvdXRlcigpO1xuXG4gIGlmIChwYXRobmFtZSA9PT0gJy9oaXN0b3J5Jykge1xuICAgIHJldHVybiAoXG4gICAgICA8U3RhY2tcbiAgICAgICAgd2lkdGg9XCI2MCVcIlxuICAgICAgICBtYXhXaWR0aD1cIjUwMHB4XCJcbiAgICAgICAgbWluV2lkdGg9XCIzMDBweFwiXG4gICAgICAgIG1hcmdpbj1cImF1dG9cIlxuICAgICAgICBzcGFjaW5nPVwiMC41cmVtXCJcbiAgICAgID5cbiAgICAgICAgPEhpc3RvcnlMb2FkIC8+XG4gICAgICAgIDxIaXN0b3J5TG9hZCAvPlxuICAgICAgICA8SGlzdG9yeUxvYWQgLz5cbiAgICAgICAgPEhpc3RvcnlMb2FkIC8+XG4gICAgICA8L1N0YWNrPlxuICAgICk7XG4gIH1cblxuICBpZiAocGF0aG5hbWUgPT09ICcvJykge1xuICAgIHJldHVybiAoXG4gICAgICA8U3RhY2tcbiAgICAgICAgd2lkdGg9XCI2MCVcIlxuICAgICAgICBtYXhXaWR0aD1cIjUwMHB4XCJcbiAgICAgICAgbWluV2lkdGg9XCIzMDBweFwiXG4gICAgICAgIG1hcmdpbj1cImF1dG9cIlxuICAgICAgICBzcGFjaW5nPVwiMC41cmVtXCJcbiAgICAgID5cbiAgICAgICAgPEdyb2NlcnlMaXN0TG9hZCAvPlxuICAgICAgICA8R3JvY2VyeUxpc3RMb2FkIC8+XG4gICAgICAgIDxHcm9jZXJ5TGlzdExvYWQgLz5cbiAgICAgICAgPEdyb2NlcnlMaXN0TG9hZCAvPlxuICAgICAgPC9TdGFjaz5cbiAgICApO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMb2FkaW5nO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==