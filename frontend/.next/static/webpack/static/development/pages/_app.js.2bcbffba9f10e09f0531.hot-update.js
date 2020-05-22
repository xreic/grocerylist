webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./apolloClient.js":
/*!*************************!*\
  !*** ./apolloClient.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createApolloClient; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-client */ "./node_modules/apollo-client/bundle.esm.js");
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-cache-inmemory */ "./node_modules/apollo-cache-inmemory/lib/bundle.esm.js");
/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-link-http */ "./node_modules/apollo-link-http/lib/bundle.esm.js");
/* harmony import */ var apollo_link_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-link-context */ "./node_modules/apollo-link-context/lib/bundle.esm.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_5__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






/**
 * Artificial delay to test optimistic updates
 * Set "link" to "authLink.concat(delay).concat(httpLink)"
 */

var delay = Object(apollo_link_context__WEBPACK_IMPORTED_MODULE_4__["setContext"])(function (request) {
  return new Promise(function (success, fail) {
    setTimeout(function () {
      success();
    }, 10000);
  });
}); // Add "/graphql" for express + postgraphile

var httpLink = Object(apollo_link_http__WEBPACK_IMPORTED_MODULE_3__["createHttpLink"])({
  uri: 'http://localhost:4000/graphql'
}); // Used to set the headers

var authLink = Object(apollo_link_context__WEBPACK_IMPORTED_MODULE_4__["setContext"])(function () {
  // Attempt to retrieve the JWT
  var token = js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.get('grocerylist_auth_token'); // Applies the headers with the JWT if the JWT exists

  return {
    headers: _objectSpread({}, token !== undefined ? {
      authorization: "Bearer ".concat(token)
    } : {})
  };
});
function createApolloClient(initialState, ctx) {
  // The `ctx` (NextPageContext) will only be present on the server.
  // use it to extract auth headers (ctx.req) or similar.
  return new apollo_client__WEBPACK_IMPORTED_MODULE_1__["ApolloClient"]({
    // includeExtensions: true,
    // addTypename: false,
    ssrMode: Boolean(ctx),
    link: authLink.concat(httpLink),
    cache: new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_2__["InMemoryCache"]({
      addTypename: false
    })
  });
}

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcG9sbG9DbGllbnQuanMiXSwibmFtZXMiOlsiZGVsYXkiLCJzZXRDb250ZXh0IiwicmVxdWVzdCIsIlByb21pc2UiLCJzdWNjZXNzIiwiZmFpbCIsInNldFRpbWVvdXQiLCJodHRwTGluayIsImNyZWF0ZUh0dHBMaW5rIiwidXJpIiwiYXV0aExpbmsiLCJ0b2tlbiIsIkNvb2tpZXMiLCJnZXQiLCJoZWFkZXJzIiwidW5kZWZpbmVkIiwiYXV0aG9yaXphdGlvbiIsImNyZWF0ZUFwb2xsb0NsaWVudCIsImluaXRpYWxTdGF0ZSIsImN0eCIsIkFwb2xsb0NsaWVudCIsInNzck1vZGUiLCJCb29sZWFuIiwibGluayIsImNvbmNhdCIsImNhY2hlIiwiSW5NZW1vcnlDYWNoZSIsImFkZFR5cGVuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUlBLElBQU1BLEtBQUssR0FBR0Msc0VBQVUsQ0FDdEIsVUFBQ0MsT0FBRDtBQUFBLFNBQ0UsSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsSUFBVixFQUFtQjtBQUM3QkMsY0FBVSxDQUFDLFlBQU07QUFDZkYsYUFBTztBQUNSLEtBRlMsRUFFUCxLQUZPLENBQVY7QUFHRCxHQUpELENBREY7QUFBQSxDQURzQixDQUF4QixDLENBU0E7O0FBQ0EsSUFBTUcsUUFBUSxHQUFHQyx1RUFBYyxDQUFDO0FBQzlCQyxLQUFHLEVBQUU7QUFEeUIsQ0FBRCxDQUEvQixDLENBSUE7O0FBQ0EsSUFBTUMsUUFBUSxHQUFHVCxzRUFBVSxDQUFDLFlBQU07QUFDaEM7QUFDQSxNQUFNVSxLQUFLLEdBQUdDLGdEQUFPLENBQUNDLEdBQVIsQ0FBWSx3QkFBWixDQUFkLENBRmdDLENBR2hDOztBQUNBLFNBQU87QUFDTEMsV0FBTyxvQkFDREgsS0FBSyxLQUFLSSxTQUFWLEdBQXNCO0FBQUVDLG1CQUFhLG1CQUFZTCxLQUFaO0FBQWYsS0FBdEIsR0FBNkQsRUFENUQ7QUFERixHQUFQO0FBS0QsQ0FUMEIsQ0FBM0I7QUFXZSxTQUFTTSxrQkFBVCxDQUE0QkMsWUFBNUIsRUFBMENDLEdBQTFDLEVBQStDO0FBQzVEO0FBQ0E7QUFDQSxTQUFPLElBQUlDLDBEQUFKLENBQWlCO0FBQ3RCO0FBQ0E7QUFDQUMsV0FBTyxFQUFFQyxPQUFPLENBQUNILEdBQUQsQ0FITTtBQUl0QkksUUFBSSxFQUFFYixRQUFRLENBQUNjLE1BQVQsQ0FBZ0JqQixRQUFoQixDQUpnQjtBQUt0QmtCLFNBQUssRUFBRSxJQUFJQyxtRUFBSixDQUFrQjtBQUN2QkMsaUJBQVcsRUFBRTtBQURVLEtBQWxCO0FBTGUsR0FBakIsQ0FBUDtBQVNEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxfYXBwLmpzLjJiY2JmZmJhOWYxMGUwOWYwNTMxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcG9sbG9DbGllbnQgfSBmcm9tICdhcG9sbG8tY2xpZW50JztcclxuaW1wb3J0IHsgSW5NZW1vcnlDYWNoZSB9IGZyb20gJ2Fwb2xsby1jYWNoZS1pbm1lbW9yeSc7XHJcbmltcG9ydCB7IGNyZWF0ZUh0dHBMaW5rIH0gZnJvbSAnYXBvbGxvLWxpbmstaHR0cCc7XHJcbmltcG9ydCB7IHNldENvbnRleHQgfSBmcm9tICdhcG9sbG8tbGluay1jb250ZXh0JztcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcclxuXHJcbi8qKlxyXG4gKiBBcnRpZmljaWFsIGRlbGF5IHRvIHRlc3Qgb3B0aW1pc3RpYyB1cGRhdGVzXHJcbiAqIFNldCBcImxpbmtcIiB0byBcImF1dGhMaW5rLmNvbmNhdChkZWxheSkuY29uY2F0KGh0dHBMaW5rKVwiXHJcbiAqL1xyXG5jb25zdCBkZWxheSA9IHNldENvbnRleHQoXHJcbiAgKHJlcXVlc3QpID0+XHJcbiAgICBuZXcgUHJvbWlzZSgoc3VjY2VzcywgZmFpbCkgPT4ge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBzdWNjZXNzKCk7XHJcbiAgICAgIH0sIDEwMDAwKTtcclxuICAgIH0pXHJcbik7XHJcblxyXG4vLyBBZGQgXCIvZ3JhcGhxbFwiIGZvciBleHByZXNzICsgcG9zdGdyYXBoaWxlXHJcbmNvbnN0IGh0dHBMaW5rID0gY3JlYXRlSHR0cExpbmsoe1xyXG4gIHVyaTogJ2h0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9ncmFwaHFsJ1xyXG59KTtcclxuXHJcbi8vIFVzZWQgdG8gc2V0IHRoZSBoZWFkZXJzXHJcbmNvbnN0IGF1dGhMaW5rID0gc2V0Q29udGV4dCgoKSA9PiB7XHJcbiAgLy8gQXR0ZW1wdCB0byByZXRyaWV2ZSB0aGUgSldUXHJcbiAgY29uc3QgdG9rZW4gPSBDb29raWVzLmdldCgnZ3JvY2VyeWxpc3RfYXV0aF90b2tlbicpO1xyXG4gIC8vIEFwcGxpZXMgdGhlIGhlYWRlcnMgd2l0aCB0aGUgSldUIGlmIHRoZSBKV1QgZXhpc3RzXHJcbiAgcmV0dXJuIHtcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgLi4uKHRva2VuICE9PSB1bmRlZmluZWQgPyB7IGF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gIH0gOiB7fSlcclxuICAgIH1cclxuICB9O1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUFwb2xsb0NsaWVudChpbml0aWFsU3RhdGUsIGN0eCkge1xyXG4gIC8vIFRoZSBgY3R4YCAoTmV4dFBhZ2VDb250ZXh0KSB3aWxsIG9ubHkgYmUgcHJlc2VudCBvbiB0aGUgc2VydmVyLlxyXG4gIC8vIHVzZSBpdCB0byBleHRyYWN0IGF1dGggaGVhZGVycyAoY3R4LnJlcSkgb3Igc2ltaWxhci5cclxuICByZXR1cm4gbmV3IEFwb2xsb0NsaWVudCh7XHJcbiAgICAvLyBpbmNsdWRlRXh0ZW5zaW9uczogdHJ1ZSxcclxuICAgIC8vIGFkZFR5cGVuYW1lOiBmYWxzZSxcclxuICAgIHNzck1vZGU6IEJvb2xlYW4oY3R4KSxcclxuICAgIGxpbms6IGF1dGhMaW5rLmNvbmNhdChodHRwTGluayksXHJcbiAgICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoe1xyXG4gICAgICBhZGRUeXBlbmFtZTogZmFsc2VcclxuICAgIH0pXHJcbiAgfSk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==