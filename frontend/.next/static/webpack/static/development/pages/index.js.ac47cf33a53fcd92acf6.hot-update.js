webpackHotUpdate("static\\development\\pages\\index.js",{

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



var HistoryLoad = function HistoryLoad() {
  return __jsx(Skeleton, {
    borderRadius: "1rem",
    marginBottom: "1rem",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 3
    }
  }, __jsx(AccordionItem, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx(AccordionHeader, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, __jsx(Box, {
    flex: "1",
    textAlign: "left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx(Text, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 11
    }
  }, "Yes"), __jsx(Text, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 11
    }
  }, "Yes")), __jsx(AccordionIcon, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  })), __jsx(AccordionPanel, {
    pb: 4,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
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
      lineNumber: 20,
      columnNumber: 3
    }
  }, "Placeholder");
};

_c2 = GroceryListLoad;

var Loading = function Loading() {
  _s();

  var Router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  console.log(Router);
  if (pathname === '/history') return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Stack"], {
    width: "60%",
    maxWidth: "500px",
    minWidth: "300px",
    margin: "auto",
    spacing: "0.5rem",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  });
};

_s(Loading, "Nx7j8f58gAtJSFeAicBrugCk4WM=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvYWRpbmcuanMiXSwibmFtZXMiOlsiSGlzdG9yeUxvYWQiLCJHcm9jZXJ5TGlzdExvYWQiLCJMb2FkaW5nIiwiUm91dGVyIiwidXNlUm91dGVyIiwiY29uc29sZSIsImxvZyIsInBhdGhuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYztBQUFBLFNBQ2xCLE1BQUMsUUFBRDtBQUFVLGdCQUFZLEVBQUMsTUFBdkI7QUFBOEIsZ0JBQVksRUFBQyxNQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxhQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsR0FBRDtBQUFLLFFBQUksRUFBQyxHQUFWO0FBQWMsYUFBUyxFQUFDLE1BQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLElBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGLEVBRUUsTUFBQyxJQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FGRixDQURGLEVBS0UsTUFBQyxhQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMRixDQURGLEVBUUUsTUFBQyxjQUFEO0FBQWdCLE1BQUUsRUFBRSxDQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUkYsQ0FERixDQURrQjtBQUFBLENBQXBCOztLQUFNQSxXOztBQWVOLElBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0I7QUFBQSxTQUN0QixNQUFDLFFBQUQ7QUFBVSxnQkFBWSxFQUFDLE1BQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRHNCO0FBQUEsQ0FBeEI7O01BQU1BLGU7O0FBSU4sSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUFBOztBQUNwQixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSCxNQUFaO0FBRUEsTUFBSUksUUFBUSxLQUFLLFVBQWpCLEVBQ0EsT0FDRSxNQUFDLHFEQUFEO0FBQ0UsU0FBSyxFQUFDLEtBRFI7QUFFRSxZQUFRLEVBQUMsT0FGWDtBQUdFLFlBQVEsRUFBQyxPQUhYO0FBSUUsVUFBTSxFQUFDLE1BSlQ7QUFLRSxXQUFPLEVBQUMsUUFMVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREY7QUFTRCxDQWREOztHQUFNTCxPO1VBQ1dFLHFEOzs7TUFEWEYsTztBQWdCU0Esc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLmFjNDdjZjMzYTUzZmNkOTJhY2Y2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyBTdGFjayB9IGZyb20gJ0BjaGFrcmEtdWkvY29yZSc7XG5cbmNvbnN0IEhpc3RvcnlMb2FkID0gKCkgPT4gKFxuICA8U2tlbGV0b24gYm9yZGVyUmFkaXVzPVwiMXJlbVwiIG1hcmdpbkJvdHRvbT1cIjFyZW1cIj5cbiAgICA8QWNjb3JkaW9uSXRlbT5cbiAgICAgIDxBY2NvcmRpb25IZWFkZXI+XG4gICAgICAgIDxCb3ggZmxleD1cIjFcIiB0ZXh0QWxpZ249XCJsZWZ0XCI+XG4gICAgICAgICAgPFRleHQ+WWVzPC9UZXh0PlxuICAgICAgICAgIDxUZXh0PlllczwvVGV4dD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIDxBY2NvcmRpb25JY29uIC8+XG4gICAgICA8L0FjY29yZGlvbkhlYWRlcj5cbiAgICAgIDxBY2NvcmRpb25QYW5lbCBwYj17NH0+PC9BY2NvcmRpb25QYW5lbD5cbiAgICA8L0FjY29yZGlvbkl0ZW0+XG4gIDwvU2tlbGV0b24+XG4pO1xuXG5jb25zdCBHcm9jZXJ5TGlzdExvYWQgPSAoKSA9PiAoXG4gIDxTa2VsZXRvbiBib3JkZXJSYWRpdXM9XCIxcmVtXCI+UGxhY2Vob2xkZXI8L1NrZWxldG9uPlxuKTtcblxuY29uc3QgTG9hZGluZyA9ICgpID0+IHtcbiAgY29uc3QgUm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnNvbGUubG9nKFJvdXRlcik7XG5cbiAgaWYgKHBhdGhuYW1lID09PSAnL2hpc3RvcnknKVxuICByZXR1cm4gKFxuICAgIDxTdGFja1xuICAgICAgd2lkdGg9XCI2MCVcIlxuICAgICAgbWF4V2lkdGg9XCI1MDBweFwiXG4gICAgICBtaW5XaWR0aD1cIjMwMHB4XCJcbiAgICAgIG1hcmdpbj1cImF1dG9cIlxuICAgICAgc3BhY2luZz1cIjAuNXJlbVwiXG4gICAgPjwvU3RhY2s+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMb2FkaW5nO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==