webpackHotUpdate("static\\development\\pages\\history.js",{

/***/ "./components/HistoryList.js":
/*!***********************************!*\
  !*** ./components/HistoryList.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/es/index.js");
/* harmony import */ var _styles_styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/styled */ "./components/styles/styled.js");
/* harmony import */ var _HistoryItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./HistoryItem */ "./components/HistoryItem.js");


var _this = undefined,
    _jsxFileName = "F:\\Work\\Projects\\Grocery List\\frontend\\components\\HistoryList.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
// Dependencies

 // Styles





var HistoryList = function HistoryList(_ref) {
  _s();

  var id = _ref.id,
      history = _ref.history,
      createdAt = _ref.createdAt;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isOpen = _useState[0],
      setIsOpen = _useState[1];

  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Accordion"], {
    background: "white",
    border: "1.5px solid black",
    borderRadius: "1rem",
    marginBottom: "1rem",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["AccordionItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, __jsx(_styles_styled__WEBPACK_IMPORTED_MODULE_4__["StyleAccHeader"], {
    onClick: function onClick() {
      return setIsOpen(!isOpen);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    flex: "1",
    textAlign: "left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    fontSize: "2xl",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }, "Order No. ", id), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    fontSize: "lg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["formatDistance"])(Date.parse(createdAt), new Date(), {
    addSuffix: true
  }))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["AccordionIcon"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  })), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["AccordionPanel"], {
    pb: 4,
    isOpen: isOpen,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, history.map(function (item, index) {
    return __jsx(_HistoryItem__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: index
    }, item, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 13
      }
    }));
  }))));
};

_s(HistoryList, "+sus0Lb0ewKHdwiUhiTAJFoFyQ0=");

_c = HistoryList;
/* harmony default export */ __webpack_exports__["default"] = (HistoryList);

var _c;

$RefreshReg$(_c, "HistoryList");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hpc3RvcnlMaXN0LmpzIl0sIm5hbWVzIjpbIkhpc3RvcnlMaXN0IiwiaWQiLCJoaXN0b3J5IiwiY3JlYXRlZEF0IiwidXNlU3RhdGUiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJmb3JtYXREaXN0YW5jZSIsIkRhdGUiLCJwYXJzZSIsImFkZFN1ZmZpeCIsIm1hcCIsIml0ZW0iLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBR0E7O0FBQ0E7QUFRQTtBQUNBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQWdDO0FBQUE7O0FBQUEsTUFBN0JDLEVBQTZCLFFBQTdCQSxFQUE2QjtBQUFBLE1BQXpCQyxPQUF5QixRQUF6QkEsT0FBeUI7QUFBQSxNQUFoQkMsU0FBZ0IsUUFBaEJBLFNBQWdCOztBQUFBLGtCQUN0QkMsc0RBQVEsQ0FBQyxLQUFELENBRGM7QUFBQSxNQUMzQ0MsTUFEMkM7QUFBQSxNQUNuQ0MsU0FEbUM7O0FBR2xELFNBQ0UsTUFBQyx5REFBRDtBQUNFLGNBQVUsRUFBQyxPQURiO0FBRUUsVUFBTSxFQUFDLG1CQUZUO0FBR0UsZ0JBQVksRUFBQyxNQUhmO0FBSUUsZ0JBQVksRUFBQyxNQUpmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNRSxNQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDZEQUFEO0FBQWdCLFdBQU8sRUFBRTtBQUFBLGFBQU1BLFNBQVMsQ0FBQyxDQUFDRCxNQUFGLENBQWY7QUFBQSxLQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxtREFBRDtBQUFLLFFBQUksRUFBQyxHQUFWO0FBQWMsYUFBUyxFQUFDLE1BQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG9EQUFEO0FBQU0sWUFBUSxFQUFDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBZ0NKLEVBQWhDLENBREYsRUFFRSxNQUFDLG9EQUFEO0FBQU0sWUFBUSxFQUFDLElBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHTSwrREFBYyxDQUFDQyxJQUFJLENBQUNDLEtBQUwsQ0FBV04sU0FBWCxDQUFELEVBQXdCLElBQUlLLElBQUosRUFBeEIsRUFBb0M7QUFDakRFLGFBQVMsRUFBRTtBQURzQyxHQUFwQyxDQURqQixDQUZGLENBREYsRUFTRSxNQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFURixDQURGLEVBWUUsTUFBQyw4REFBRDtBQUFnQixNQUFFLEVBQUUsQ0FBcEI7QUFBdUIsVUFBTSxFQUFFTCxNQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dILE9BQU8sQ0FBQ1MsR0FBUixDQUFZLFVBQUNDLElBQUQsRUFBT0MsS0FBUDtBQUFBLFdBQ1gsTUFBQyxvREFBRDtBQUFhLFNBQUcsRUFBRUE7QUFBbEIsT0FBNkJELElBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FEVztBQUFBLEdBQVosQ0FESCxDQVpGLENBTkYsQ0FERjtBQTJCRCxDQTlCRDs7R0FBTVosVzs7S0FBQUEsVztBQWdDU0EsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGhpc3RvcnkuanMuMzk4NWE2NGE5NWE2N2IzZWFlMzQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIERlcGVuZGVuY2llc1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBmb3JtYXREaXN0YW5jZSB9IGZyb20gJ2RhdGUtZm5zJztcblxuLy8gU3R5bGVzXG5pbXBvcnQge1xuICBBY2NvcmRpb24sXG4gIEFjY29yZGlvbkl0ZW0sXG4gIEFjY29yZGlvblBhbmVsLFxuICBBY2NvcmRpb25JY29uLFxuICBCb3gsXG4gIFRleHRcbn0gZnJvbSAnQGNoYWtyYS11aS9jb3JlJztcbmltcG9ydCB7IFN0eWxlQWNjSGVhZGVyIH0gZnJvbSAnLi9zdHlsZXMvc3R5bGVkJztcbmltcG9ydCBIaXN0b3J5SXRlbSBmcm9tICcuL0hpc3RvcnlJdGVtJztcblxuY29uc3QgSGlzdG9yeUxpc3QgPSAoeyBpZCwgaGlzdG9yeSwgY3JlYXRlZEF0IH0pID0+IHtcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICByZXR1cm4gKFxuICAgIDxBY2NvcmRpb25cbiAgICAgIGJhY2tncm91bmQ9XCJ3aGl0ZVwiXG4gICAgICBib3JkZXI9XCIxLjVweCBzb2xpZCBibGFja1wiXG4gICAgICBib3JkZXJSYWRpdXM9XCIxcmVtXCJcbiAgICAgIG1hcmdpbkJvdHRvbT1cIjFyZW1cIlxuICAgID5cbiAgICAgIDxBY2NvcmRpb25JdGVtPlxuICAgICAgICA8U3R5bGVBY2NIZWFkZXIgb25DbGljaz17KCkgPT4gc2V0SXNPcGVuKCFpc09wZW4pfT5cbiAgICAgICAgICA8Qm94IGZsZXg9XCIxXCIgdGV4dEFsaWduPVwibGVmdFwiPlxuICAgICAgICAgICAgPFRleHQgZm9udFNpemU9XCIyeGxcIj5PcmRlciBOby4ge2lkfTwvVGV4dD5cbiAgICAgICAgICAgIDxUZXh0IGZvbnRTaXplPVwibGdcIj5cbiAgICAgICAgICAgICAge2Zvcm1hdERpc3RhbmNlKERhdGUucGFyc2UoY3JlYXRlZEF0KSwgbmV3IERhdGUoKSwge1xuICAgICAgICAgICAgICAgIGFkZFN1ZmZpeDogdHJ1ZVxuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8QWNjb3JkaW9uSWNvbiAvPlxuICAgICAgICA8L1N0eWxlQWNjSGVhZGVyPlxuICAgICAgICA8QWNjb3JkaW9uUGFuZWwgcGI9ezR9IGlzT3Blbj17aXNPcGVufT5cbiAgICAgICAgICB7aGlzdG9yeS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8SGlzdG9yeUl0ZW0ga2V5PXtpbmRleH0gey4uLml0ZW19IC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvQWNjb3JkaW9uUGFuZWw+XG4gICAgICA8L0FjY29yZGlvbkl0ZW0+XG4gICAgPC9BY2NvcmRpb24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIaXN0b3J5TGlzdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=