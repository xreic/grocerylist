webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/GroceryList.js":
/*!***********************************!*\
  !*** ./components/GroceryList.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var _lib_apollo_queries__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/apollo/queries */ "./lib/apollo/queries.js");
/* harmony import */ var _lib_apollo_mutations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/apollo/mutations */ "./lib/apollo/mutations.js");
/* harmony import */ var _lib_doctorError__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/doctorError */ "./lib/doctorError.js");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/es/index.js");
/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Item */ "./components/Item.js");
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Loading */ "./components/Loading.js");
/* harmony import */ var _lib_React_ShoppingContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../lib/React/ShoppingContext */ "./lib/React/ShoppingContext.js");
/* harmony import */ var _GroceryCheckout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./GroceryCheckout */ "./components/GroceryCheckout.js");




var _this = undefined,
    _jsxFileName = "F:\\Work\\Projects\\Grocery List\\frontend\\components\\GroceryList.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;
// Dependnencies

 // Helpers



 // Styles

 // React






var GroceryList = function GroceryList() {
  _s();

  var _data$currentUserItem;

  // Hooks + Contexts
  var toast = Object(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_8__["useToast"])();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_lib_React_ShoppingContext__WEBPACK_IMPORTED_MODULE_11__["ShoppingContext"]),
      isShopping = _useContext.isShopping; // Apollo


  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__["useQuery"])(_lib_apollo_queries__WEBPACK_IMPORTED_MODULE_5__["USERS_ITEMS_QUERY"]),
      data = _useQuery.data,
      loading = _useQuery.loading,
      error = _useQuery.error;

  var _useMutation = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__["useMutation"])(_lib_apollo_mutations__WEBPACK_IMPORTED_MODULE_6__["REMOVE_ITEM_MUTATION"]),
      _useMutation2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useMutation, 2),
      deleteItem = _useMutation2[0],
      deleteResponse = _useMutation2[1]; // Handlers


  var handleClick = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(id) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return deleteItem({
                variables: {
                  input: {
                    id: id
                  }
                },
                optimisticResponse: {
                  __typename: 'Mutation',
                  deleteItem: {
                    item: {
                      id: id
                    }
                  }
                },
                update: function update(cache, _ref2) {
                  var deleteItem = _ref2.data.deleteItem;

                  var _cache$readQuery = cache.readQuery({
                    query: _lib_apollo_queries__WEBPACK_IMPORTED_MODULE_5__["USERS_ITEMS_QUERY"]
                  }),
                      currentUserItems = _cache$readQuery.currentUserItems;

                  var nodes = currentUserItems.nodes;
                  var id = deleteItem.item.id;
                  cache.writeQuery({
                    query: _lib_apollo_queries__WEBPACK_IMPORTED_MODULE_5__["USERS_ITEMS_QUERY"],
                    data: {
                      currentUserItems: {
                        nodes: nodes.filter(function (node) {
                          return node.id !== id;
                        })
                      }
                    }
                  });
                }
              });

            case 3:
              _context.next = 7;
              break;

            case 5:
              _context.prev = 5;
              _context.t0 = _context["catch"](0);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 5]]);
    }));

    return function handleClick(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  if (error || deleteResponse.error) {
    if (!!error) {
      toast({
        description: error,
        status: 'error',
        duration: 9001,
        isClosable: true
      });
    }

    if (!!deleteResponse.error) {
      toast({
        description: Object(_lib_doctorError__WEBPACK_IMPORTED_MODULE_7__["doctorError"])(deleteResponse.error.message),
        status: 'error',
        duration: 9001,
        isClosable: true
      });
    }
  }

  if (loading) return __jsx(_Loading__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }
  });

  if ((_data$currentUserItem = data.currentUserItems) === null || _data$currentUserItem === void 0 ? void 0 : _data$currentUserItem.nodes.length) {
    var list = data.currentUserItems.nodes;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 7
      }
    }, !isShopping && __jsx(_GroceryCheckout__WEBPACK_IMPORTED_MODULE_12__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 25
      }
    }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_8__["Stack"], {
      width: "60%",
      maxWidth: "500px",
      minWidth: "300px",
      margin: "auto",
      spacing: "0.5rem",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 9
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_8__["SimpleGrid"], {
      columns: "3",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 11
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_8__["Heading"], {
      as: "h4",
      size: "lg",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 13
      }
    }, "Item"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_8__["Heading"], {
      as: "h4",
      size: "lg",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 13
      }
    }, "Quantity")), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_8__["Box"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 11
      }
    }, list.map(function (item) {
      return __jsx(_Item__WEBPACK_IMPORTED_MODULE_9__["default"], {
        key: item.id + item.product,
        id: item.id,
        product: item.product,
        quantity: item.quantity,
        handleClick: handleClick,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 15
        }
      });
    }))));
  } else {
    return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_8__["Heading"], {
      as: "h4",
      size: "lg",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 7
      }
    }, "Remember to add to your list. \uD83D\uDCDD");
  }
};

_s(GroceryList, "0U+pNjZtaHim+jr0Dajyc6TKtqk=", false, function () {
  return [_chakra_ui_core__WEBPACK_IMPORTED_MODULE_8__["useToast"], _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__["useQuery"], _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__["useMutation"]];
});

_c = GroceryList;
/* harmony default export */ __webpack_exports__["default"] = (GroceryList);

var _c;

$RefreshReg$(_c, "GroceryList");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0dyb2NlcnlMaXN0LmpzIl0sIm5hbWVzIjpbIkdyb2NlcnlMaXN0IiwidG9hc3QiLCJ1c2VUb2FzdCIsInVzZUNvbnRleHQiLCJTaG9wcGluZ0NvbnRleHQiLCJpc1Nob3BwaW5nIiwidXNlUXVlcnkiLCJVU0VSU19JVEVNU19RVUVSWSIsImRhdGEiLCJsb2FkaW5nIiwiZXJyb3IiLCJ1c2VNdXRhdGlvbiIsIlJFTU9WRV9JVEVNX01VVEFUSU9OIiwiZGVsZXRlSXRlbSIsImRlbGV0ZVJlc3BvbnNlIiwiaGFuZGxlQ2xpY2siLCJpZCIsInZhcmlhYmxlcyIsImlucHV0Iiwib3B0aW1pc3RpY1Jlc3BvbnNlIiwiX190eXBlbmFtZSIsIml0ZW0iLCJ1cGRhdGUiLCJjYWNoZSIsInJlYWRRdWVyeSIsInF1ZXJ5IiwiY3VycmVudFVzZXJJdGVtcyIsIm5vZGVzIiwid3JpdGVRdWVyeSIsImZpbHRlciIsIm5vZGUiLCJkZXNjcmlwdGlvbiIsInN0YXR1cyIsImR1cmF0aW9uIiwiaXNDbG9zYWJsZSIsImRvY3RvckVycm9yIiwibWVzc2FnZSIsImxlbmd0aCIsImxpc3QiLCJtYXAiLCJwcm9kdWN0IiwicXVhbnRpdHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FHQTs7QUFDQTtBQUNBO0NBR0E7O0NBVUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUFBOztBQUFBOztBQUN4QjtBQUNBLE1BQU1DLEtBQUssR0FBR0MsZ0VBQVEsRUFBdEI7O0FBRndCLG9CQUdEQyx3REFBVSxDQUFDQywyRUFBRCxDQUhUO0FBQUEsTUFHaEJDLFVBSGdCLGVBR2hCQSxVQUhnQixFQUt4Qjs7O0FBTHdCLGtCQU1TQyxvRUFBUSxDQUFDQyxxRUFBRCxDQU5qQjtBQUFBLE1BTWhCQyxJQU5nQixhQU1oQkEsSUFO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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0RBREY7QUFLRDtBQUNGLENBOUdEOztHQUFNZixXO1VBRVVFLHdELEVBSW1CSSw0RCxFQUNJSywrRDs7O0tBUGpDWCxXO0FBZ0hTQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuYWU5YWM0ZWU5MGUxY2ZhOTFhYTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIERlcGVuZG5lbmNpZXNcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VNdXRhdGlvbiwgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL3JlYWN0LWhvb2tzJztcblxuLy8gSGVscGVyc1xuaW1wb3J0IHsgVVNFUlNfSVRFTVNfUVVFUlkgfSBmcm9tICcuLi9saWIvYXBvbGxvL3F1ZXJpZXMnO1xuaW1wb3J0IHsgUkVNT1ZFX0lURU1fTVVUQVRJT04gfSBmcm9tICcuLi9saWIvYXBvbGxvL211dGF0aW9ucyc7XG5pbXBvcnQgeyBkb2N0b3JFcnJvciB9IGZyb20gJy4uL2xpYi9kb2N0b3JFcnJvcic7XG5cbi8vIFN0eWxlc1xuaW1wb3J0IHtcbiAgQm94LFxuICBIZWFkaW5nLFxuICBTa2VsZXRvbixcbiAgU2ltcGxlR3JpZCxcbiAgU3RhY2ssXG4gIHVzZVRvYXN0XG59IGZyb20gJ0BjaGFrcmEtdWkvY29yZSc7XG5cbi8vIFJlYWN0XG5pbXBvcnQgSXRlbSBmcm9tICcuL0l0ZW0nO1xuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi9Mb2FkaW5nJztcbmltcG9ydCB7IFNob3BwaW5nQ29udGV4dCB9IGZyb20gJy4uL2xpYi9SZWFjdC9TaG9wcGluZ0NvbnRleHQnO1xuaW1wb3J0IEdyb2NlcnlDaGVja291dCBmcm9tICcuL0dyb2NlcnlDaGVja291dCc7XG5cbmNvbnN0IEdyb2NlcnlMaXN0ID0gKCkgPT4ge1xuICAvLyBIb29rcyArIENvbnRleHRzXG4gIGNvbnN0IHRvYXN0ID0gdXNlVG9hc3QoKTtcbiAgY29uc3QgeyBpc1Nob3BwaW5nIH0gPSB1c2VDb250ZXh0KFNob3BwaW5nQ29udGV4dCk7XG5cbiAgLy8gQXBvbGxvXG4gIGNvbnN0IHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfSA9IHVzZVF1ZXJ5KFVTRVJTX0lURU1TX1FVRVJZKTtcbiAgY29uc3QgW2RlbGV0ZUl0ZW0sIGRlbGV0ZVJlc3BvbnNlXSA9IHVzZU11dGF0aW9uKFJFTU9WRV9JVEVNX01VVEFUSU9OKTtcblxuICAvLyBIYW5kbGVyc1xuICBjb25zdCBoYW5kbGVDbGljayA9IGFzeW5jIChpZCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBkZWxldGVJdGVtKHtcbiAgICAgICAgdmFyaWFibGVzOiB7IGlucHV0OiB7IGlkIH0gfSxcbiAgICAgICAgb3B0aW1pc3RpY1Jlc3BvbnNlOiB7XG4gICAgICAgICAgX190eXBlbmFtZTogJ011dGF0aW9uJyxcbiAgICAgICAgICBkZWxldGVJdGVtOiB7XG4gICAgICAgICAgICBpdGVtOiB7IGlkIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHVwZGF0ZTogKGNhY2hlLCB7IGRhdGE6IHsgZGVsZXRlSXRlbSB9IH0pID0+IHtcbiAgICAgICAgICBjb25zdCB7IGN1cnJlbnRVc2VySXRlbXMgfSA9IGNhY2hlLnJlYWRRdWVyeSh7XG4gICAgICAgICAgICBxdWVyeTogVVNFUlNfSVRFTVNfUVVFUllcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBjb25zdCB7IG5vZGVzIH0gPSBjdXJyZW50VXNlckl0ZW1zO1xuICAgICAgICAgIGNvbnN0IHsgaWQgfSA9IGRlbGV0ZUl0ZW0uaXRlbTtcblxuICAgICAgICAgIGNhY2hlLndyaXRlUXVlcnkoe1xuICAgICAgICAgICAgcXVlcnk6IFVTRVJTX0lURU1TX1FVRVJZLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICBjdXJyZW50VXNlckl0ZW1zOiB7XG4gICAgICAgICAgICAgICAgbm9kZXM6IG5vZGVzLmZpbHRlcigobm9kZSkgPT4gbm9kZS5pZCAhPT0gaWQpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIC8vIG5lZWQgdG8gY2F0Y2ggdGhlIGVycm9yLCBzbyBhIHBvcHVwIGRvZXNuJ3Qgc2hvdyB1cFxuICAgIH1cbiAgfTtcblxuICBpZiAoZXJyb3IgfHwgZGVsZXRlUmVzcG9uc2UuZXJyb3IpIHtcbiAgICBpZiAoISFlcnJvcikge1xuICAgICAgdG9hc3Qoe1xuICAgICAgICBkZXNjcmlwdGlvbjogZXJyb3IsXG4gICAgICAgIHN0YXR1czogJ2Vycm9yJyxcbiAgICAgICAgZHVyYXRpb246IDkwMDEsXG4gICAgICAgIGlzQ2xvc2FibGU6IHRydWVcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICghIWRlbGV0ZVJlc3BvbnNlLmVycm9yKSB7XG4gICAgICB0b2FzdCh7XG4gICAgICAgIGRlc2NyaXB0aW9uOiBkb2N0b3JFcnJvcihkZWxldGVSZXNwb25zZS5lcnJvci5tZXNzYWdlKSxcbiAgICAgICAgc3RhdHVzOiAnZXJyb3InLFxuICAgICAgICBkdXJhdGlvbjogOTAwMSxcbiAgICAgICAgaXNDbG9zYWJsZTogdHJ1ZVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKGxvYWRpbmcpXG4gICAgcmV0dXJuIChcbiAgICAgIDxMb2FkaW5nPlxuICAgICAgPC9Mb2FkaW5nPlxuICAgICk7XG5cbiAgaWYgKGRhdGEuY3VycmVudFVzZXJJdGVtcz8ubm9kZXMubGVuZ3RoKSB7XG4gICAgY29uc3QgbGlzdCA9IGRhdGEuY3VycmVudFVzZXJJdGVtcy5ub2RlcztcblxuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIHshaXNTaG9wcGluZyAmJiA8R3JvY2VyeUNoZWNrb3V0IC8+fVxuICAgICAgICA8U3RhY2tcbiAgICAgICAgICB3aWR0aD1cIjYwJVwiXG4gICAgICAgICAgbWF4V2lkdGg9XCI1MDBweFwiXG4gICAgICAgICAgbWluV2lkdGg9XCIzMDBweFwiXG4gICAgICAgICAgbWFyZ2luPVwiYXV0b1wiXG4gICAgICAgICAgc3BhY2luZz1cIjAuNXJlbVwiXG4gICAgICAgID5cbiAgICAgICAgICA8U2ltcGxlR3JpZCBjb2x1bW5zPVwiM1wiPlxuICAgICAgICAgICAgPEhlYWRpbmcgYXM9XCJoNFwiIHNpemU9XCJsZ1wiPlxuICAgICAgICAgICAgICBJdGVtXG4gICAgICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgICAgICA8SGVhZGluZyBhcz1cImg0XCIgc2l6ZT1cImxnXCI+XG4gICAgICAgICAgICAgIFF1YW50aXR5XG4gICAgICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgICAgPC9TaW1wbGVHcmlkPlxuICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICB7bGlzdC5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgPEl0ZW1cbiAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWQgKyBpdGVtLnByb2R1Y3R9XG4gICAgICAgICAgICAgICAgaWQ9e2l0ZW0uaWR9XG4gICAgICAgICAgICAgICAgcHJvZHVjdD17aXRlbS5wcm9kdWN0fVxuICAgICAgICAgICAgICAgIHF1YW50aXR5PXtpdGVtLnF1YW50aXR5fVxuICAgICAgICAgICAgICAgIGhhbmRsZUNsaWNrPXtoYW5kbGVDbGlja31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L1N0YWNrPlxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAoXG4gICAgICA8SGVhZGluZyBhcz1cImg0XCIgc2l6ZT1cImxnXCI+XG4gICAgICAgIFJlbWVtYmVyIHRvIGFkZCB0byB5b3VyIGxpc3QuIPCfk51cbiAgICAgIDwvSGVhZGluZz5cbiAgICApO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHcm9jZXJ5TGlzdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=