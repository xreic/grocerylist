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

var Loading = function Loading(props) {
  _s();

  var Router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Stack"], {
    width: "60%",
    maxWidth: "500px",
    minWidth: "300px",
    margin: "auto",
    spacing: "0.5rem",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  }, props.children, props.children, props.children, props.children);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvYWRpbmcuanMiXSwibmFtZXMiOlsiSGlzdG9yeUxvYWQiLCJHcm9jZXJ5TGlzdExvYWQiLCJMb2FkaW5nIiwicHJvcHMiLCJSb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWM7QUFBQSxTQUNsQixNQUFDLFFBQUQ7QUFBVSxnQkFBWSxFQUFDLE1BQXZCO0FBQThCLGdCQUFZLEVBQUMsTUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsYUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxlQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLEdBQUQ7QUFBSyxRQUFJLEVBQUMsR0FBVjtBQUFjLGFBQVMsRUFBQyxNQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxJQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERixFQUVFLE1BQUMsSUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRkYsQ0FERixFQUtFLE1BQUMsYUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEYsQ0FERixFQVFFLE1BQUMsY0FBRDtBQUFnQixNQUFFLEVBQUUsQ0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJGLENBREYsQ0FEa0I7QUFBQSxDQUFwQjs7S0FBTUEsVzs7QUFlTixJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCO0FBQUEsU0FDdEIsTUFBQyxRQUFEO0FBQVUsZ0JBQVksRUFBQyxNQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURzQjtBQUFBLENBQXhCOztNQUFNQSxlOztBQUlOLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUN6QixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBRUEsU0FDRSxNQUFDLHFEQUFEO0FBQ0UsU0FBSyxFQUFDLEtBRFI7QUFFRSxZQUFRLEVBQUMsT0FGWDtBQUdFLFlBQVEsRUFBQyxPQUhYO0FBSUUsVUFBTSxFQUFDLE1BSlQ7QUFLRSxXQUFPLEVBQUMsUUFMVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBT0dGLEtBQUssQ0FBQ0csUUFQVCxFQVFHSCxLQUFLLENBQUNHLFFBUlQsRUFTR0gsS0FBSyxDQUFDRyxRQVRULEVBVUdILEtBQUssQ0FBQ0csUUFWVCxDQURGO0FBY0QsQ0FqQkQ7O0dBQU1KLE87VUFDV0cscUQ7OztNQURYSCxPO0FBbUJTQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuOGYwODViOTIyMWFiMWY2Y2ZkYWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IFN0YWNrIH0gZnJvbSAnQGNoYWtyYS11aS9jb3JlJztcblxuY29uc3QgSGlzdG9yeUxvYWQgPSAoKSA9PiAoXG4gIDxTa2VsZXRvbiBib3JkZXJSYWRpdXM9XCIxcmVtXCIgbWFyZ2luQm90dG9tPVwiMXJlbVwiPlxuICAgIDxBY2NvcmRpb25JdGVtPlxuICAgICAgPEFjY29yZGlvbkhlYWRlcj5cbiAgICAgICAgPEJveCBmbGV4PVwiMVwiIHRleHRBbGlnbj1cImxlZnRcIj5cbiAgICAgICAgICA8VGV4dD5ZZXM8L1RleHQ+XG4gICAgICAgICAgPFRleHQ+WWVzPC9UZXh0PlxuICAgICAgICA8L0JveD5cbiAgICAgICAgPEFjY29yZGlvbkljb24gLz5cbiAgICAgIDwvQWNjb3JkaW9uSGVhZGVyPlxuICAgICAgPEFjY29yZGlvblBhbmVsIHBiPXs0fT48L0FjY29yZGlvblBhbmVsPlxuICAgIDwvQWNjb3JkaW9uSXRlbT5cbiAgPC9Ta2VsZXRvbj5cbik7XG5cbmNvbnN0IEdyb2NlcnlMaXN0TG9hZCA9ICgpID0+IChcbiAgPFNrZWxldG9uIGJvcmRlclJhZGl1cz1cIjFyZW1cIj5QbGFjZWhvbGRlcjwvU2tlbGV0b24+XG4pO1xuXG5jb25zdCBMb2FkaW5nID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IFJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIHJldHVybiAoXG4gICAgPFN0YWNrXG4gICAgICB3aWR0aD1cIjYwJVwiXG4gICAgICBtYXhXaWR0aD1cIjUwMHB4XCJcbiAgICAgIG1pbldpZHRoPVwiMzAwcHhcIlxuICAgICAgbWFyZ2luPVwiYXV0b1wiXG4gICAgICBzcGFjaW5nPVwiMC41cmVtXCJcbiAgICA+XG4gICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPC9TdGFjaz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExvYWRpbmc7XG4iXSwic291cmNlUm9vdCI6IiJ9