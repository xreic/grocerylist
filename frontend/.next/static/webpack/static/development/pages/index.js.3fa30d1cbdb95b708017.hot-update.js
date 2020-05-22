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
      lineNumber: 81,
      columnNumber: 23
    }
  });

  if ((_data$currentUserItem = data.currentUserItems) === null || _data$currentUserItem === void 0 ? void 0 : _data$currentUserItem.nodes.length) {
    var list = data.currentUserItems.nodes;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 7
      }
    }, !isShopping && __jsx(_GroceryCheckout__WEBPACK_IMPORTED_MODULE_12__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
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
        lineNumber: 89,
        columnNumber: 9
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_8__["SimpleGrid"], {
      columns: "3",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 11
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_8__["Heading"], {
      as: "h4",
      size: "lg",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 13
      }
    }, "Item"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_8__["Heading"], {
      as: "h4",
      size: "lg",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 13
      }
    }, "Quantity")), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_8__["Box"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
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
          lineNumber: 106,
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
        lineNumber: 120,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0dyb2NlcnlMaXN0LmpzIl0sIm5hbWVzIjpbIkdyb2NlcnlMaXN0IiwidG9hc3QiLCJ1c2VUb2FzdCIsInVzZUNvbnRleHQiLCJTaG9wcGluZ0NvbnRleHQiLCJpc1Nob3BwaW5nIiwidXNlUXVlcnkiLCJVU0VSU19JVEVNU19RVUVSWSIsImRhdGEiLCJsb2FkaW5nIiwiZXJyb3IiLCJ1c2VNdXRhdGlvbiIsIlJFTU9WRV9JVEVNX01VVEFUSU9OIiwiZGVsZXRlSXRlbSIsImRlbGV0ZVJlc3BvbnNlIiwiaGFuZGxlQ2xpY2siLCJpZCIsInZhcmlhYmxlcyIsImlucHV0Iiwib3B0aW1pc3RpY1Jlc3BvbnNlIiwiX190eXBlbmFtZSIsIml0ZW0iLCJ1cGRhdGUiLCJjYWNoZSIsInJlYWRRdWVyeSIsInF1ZXJ5IiwiY3VycmVudFVzZXJJdGVtcyIsIm5vZGVzIiwid3JpdGVRdWVyeSIsImZpbHRlciIsIm5vZGUiLCJkZXNjcmlwdGlvbiIsInN0YXR1cyIsImR1cmF0aW9uIiwiaXNDbG9zYWJsZSIsImRvY3RvckVycm9yIiwibWVzc2FnZSIsImxlbmd0aCIsImxpc3QiLCJtYXAiLCJwcm9kdWN0IiwicXVhbnRpdHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FHQTs7QUFDQTtBQUNBO0NBR0E7O0NBR0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUFBOztBQUFBOztBQUN4QjtBQUNBLE1BQU1DLEtBQUssR0FBR0MsZ0VBQVEsRUFBdEI7O0FBRndCLG9CQUdEQyx3REFBVSxDQUFDQywyRUFBRCxDQUhUO0FBQUEsTUFHaEJDLFVBSGdCLGVBR2hCQSxVQUhnQixFQUt4Qjs7O0FBTHdCLGtCQU1TQyxvRUFBUSxDQUFDQyxxRUFBRCxDQU5qQjtBQUFBLE1BTWhCQyxJQU5nQixhQU1oQkEsSUFO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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0RBREY7QUFLRDtBQUNGLENBMUdEOztHQUFNZixXO1VBRVVFLHdELEVBSW1CSSw0RCxFQUNJSywrRDs7O0tBUGpDWCxXO0FBNEdTQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuM2ZhMzBkMWNiZGI5NWI3MDgwMTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIERlcGVuZG5lbmNpZXNcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VNdXRhdGlvbiwgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL3JlYWN0LWhvb2tzJztcblxuLy8gSGVscGVyc1xuaW1wb3J0IHsgVVNFUlNfSVRFTVNfUVVFUlkgfSBmcm9tICcuLi9saWIvYXBvbGxvL3F1ZXJpZXMnO1xuaW1wb3J0IHsgUkVNT1ZFX0lURU1fTVVUQVRJT04gfSBmcm9tICcuLi9saWIvYXBvbGxvL211dGF0aW9ucyc7XG5pbXBvcnQgeyBkb2N0b3JFcnJvciB9IGZyb20gJy4uL2xpYi9kb2N0b3JFcnJvcic7XG5cbi8vIFN0eWxlc1xuaW1wb3J0IHsgQm94LCBIZWFkaW5nLCBTaW1wbGVHcmlkLCBTdGFjaywgdXNlVG9hc3QgfSBmcm9tICdAY2hha3JhLXVpL2NvcmUnO1xuXG4vLyBSZWFjdFxuaW1wb3J0IEl0ZW0gZnJvbSAnLi9JdGVtJztcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4vTG9hZGluZyc7XG5pbXBvcnQgeyBTaG9wcGluZ0NvbnRleHQgfSBmcm9tICcuLi9saWIvUmVhY3QvU2hvcHBpbmdDb250ZXh0JztcbmltcG9ydCBHcm9jZXJ5Q2hlY2tvdXQgZnJvbSAnLi9Hcm9jZXJ5Q2hlY2tvdXQnO1xuXG5jb25zdCBHcm9jZXJ5TGlzdCA9ICgpID0+IHtcbiAgLy8gSG9va3MgKyBDb250ZXh0c1xuICBjb25zdCB0b2FzdCA9IHVzZVRvYXN0KCk7XG4gIGNvbnN0IHsgaXNTaG9wcGluZyB9ID0gdXNlQ29udGV4dChTaG9wcGluZ0NvbnRleHQpO1xuXG4gIC8vIEFwb2xsb1xuICBjb25zdCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH0gPSB1c2VRdWVyeShVU0VSU19JVEVNU19RVUVSWSk7XG4gIGNvbnN0IFtkZWxldGVJdGVtLCBkZWxldGVSZXNwb25zZV0gPSB1c2VNdXRhdGlvbihSRU1PVkVfSVRFTV9NVVRBVElPTik7XG5cbiAgLy8gSGFuZGxlcnNcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSBhc3luYyAoaWQpID0+IHtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgZGVsZXRlSXRlbSh7XG4gICAgICAgIHZhcmlhYmxlczogeyBpbnB1dDogeyBpZCB9IH0sXG4gICAgICAgIG9wdGltaXN0aWNSZXNwb25zZToge1xuICAgICAgICAgIF9fdHlwZW5hbWU6ICdNdXRhdGlvbicsXG4gICAgICAgICAgZGVsZXRlSXRlbToge1xuICAgICAgICAgICAgaXRlbTogeyBpZCB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB1cGRhdGU6IChjYWNoZSwgeyBkYXRhOiB7IGRlbGV0ZUl0ZW0gfSB9KSA9PiB7XG4gICAgICAgICAgY29uc3QgeyBjdXJyZW50VXNlckl0ZW1zIH0gPSBjYWNoZS5yZWFkUXVlcnkoe1xuICAgICAgICAgICAgcXVlcnk6IFVTRVJTX0lURU1TX1FVRVJZXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgY29uc3QgeyBub2RlcyB9ID0gY3VycmVudFVzZXJJdGVtcztcbiAgICAgICAgICBjb25zdCB7IGlkIH0gPSBkZWxldGVJdGVtLml0ZW07XG5cbiAgICAgICAgICBjYWNoZS53cml0ZVF1ZXJ5KHtcbiAgICAgICAgICAgIHF1ZXJ5OiBVU0VSU19JVEVNU19RVUVSWSxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgY3VycmVudFVzZXJJdGVtczoge1xuICAgICAgICAgICAgICAgIG5vZGVzOiBub2Rlcy5maWx0ZXIoKG5vZGUpID0+IG5vZGUuaWQgIT09IGlkKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAvLyBuZWVkIHRvIGNhdGNoIHRoZSBlcnJvciwgc28gYSBwb3B1cCBkb2Vzbid0IHNob3cgdXBcbiAgICB9XG4gIH07XG5cbiAgaWYgKGVycm9yIHx8IGRlbGV0ZVJlc3BvbnNlLmVycm9yKSB7XG4gICAgaWYgKCEhZXJyb3IpIHtcbiAgICAgIHRvYXN0KHtcbiAgICAgICAgZGVzY3JpcHRpb246IGVycm9yLFxuICAgICAgICBzdGF0dXM6ICdlcnJvcicsXG4gICAgICAgIGR1cmF0aW9uOiA5MDAxLFxuICAgICAgICBpc0Nsb3NhYmxlOiB0cnVlXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoISFkZWxldGVSZXNwb25zZS5lcnJvcikge1xuICAgICAgdG9hc3Qoe1xuICAgICAgICBkZXNjcmlwdGlvbjogZG9jdG9yRXJyb3IoZGVsZXRlUmVzcG9uc2UuZXJyb3IubWVzc2FnZSksXG4gICAgICAgIHN0YXR1czogJ2Vycm9yJyxcbiAgICAgICAgZHVyYXRpb246IDkwMDEsXG4gICAgICAgIGlzQ2xvc2FibGU6IHRydWVcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGlmIChsb2FkaW5nKSByZXR1cm4gPExvYWRpbmc+PC9Mb2FkaW5nPjtcblxuICBpZiAoZGF0YS5jdXJyZW50VXNlckl0ZW1zPy5ub2Rlcy5sZW5ndGgpIHtcbiAgICBjb25zdCBsaXN0ID0gZGF0YS5jdXJyZW50VXNlckl0ZW1zLm5vZGVzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgeyFpc1Nob3BwaW5nICYmIDxHcm9jZXJ5Q2hlY2tvdXQgLz59XG4gICAgICAgIDxTdGFja1xuICAgICAgICAgIHdpZHRoPVwiNjAlXCJcbiAgICAgICAgICBtYXhXaWR0aD1cIjUwMHB4XCJcbiAgICAgICAgICBtaW5XaWR0aD1cIjMwMHB4XCJcbiAgICAgICAgICBtYXJnaW49XCJhdXRvXCJcbiAgICAgICAgICBzcGFjaW5nPVwiMC41cmVtXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxTaW1wbGVHcmlkIGNvbHVtbnM9XCIzXCI+XG4gICAgICAgICAgICA8SGVhZGluZyBhcz1cImg0XCIgc2l6ZT1cImxnXCI+XG4gICAgICAgICAgICAgIEl0ZW1cbiAgICAgICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgICAgIDxIZWFkaW5nIGFzPVwiaDRcIiBzaXplPVwibGdcIj5cbiAgICAgICAgICAgICAgUXVhbnRpdHlcbiAgICAgICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgICA8L1NpbXBsZUdyaWQ+XG4gICAgICAgICAgPEJveD5cbiAgICAgICAgICAgIHtsaXN0Lm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICA8SXRlbVxuICAgICAgICAgICAgICAgIGtleT17aXRlbS5pZCArIGl0ZW0ucHJvZHVjdH1cbiAgICAgICAgICAgICAgICBpZD17aXRlbS5pZH1cbiAgICAgICAgICAgICAgICBwcm9kdWN0PXtpdGVtLnByb2R1Y3R9XG4gICAgICAgICAgICAgICAgcXVhbnRpdHk9e2l0ZW0ucXVhbnRpdHl9XG4gICAgICAgICAgICAgICAgaGFuZGxlQ2xpY2s9e2hhbmRsZUNsaWNrfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvU3RhY2s+XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxIZWFkaW5nIGFzPVwiaDRcIiBzaXplPVwibGdcIj5cbiAgICAgICAgUmVtZW1iZXIgdG8gYWRkIHRvIHlvdXIgbGlzdC4g8J+TnVxuICAgICAgPC9IZWFkaW5nPlxuICAgICk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdyb2NlcnlMaXN0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==