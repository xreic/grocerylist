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
    }, 1000);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcG9sbG9DbGllbnQuanMiXSwibmFtZXMiOlsiZGVsYXkiLCJzZXRDb250ZXh0IiwicmVxdWVzdCIsIlByb21pc2UiLCJzdWNjZXNzIiwiZmFpbCIsInNldFRpbWVvdXQiLCJodHRwTGluayIsImNyZWF0ZUh0dHBMaW5rIiwidXJpIiwiYXV0aExpbmsiLCJ0b2tlbiIsIkNvb2tpZXMiLCJnZXQiLCJoZWFkZXJzIiwidW5kZWZpbmVkIiwiYXV0aG9yaXphdGlvbiIsImNyZWF0ZUFwb2xsb0NsaWVudCIsImluaXRpYWxTdGF0ZSIsImN0eCIsIkFwb2xsb0NsaWVudCIsInNzck1vZGUiLCJCb29sZWFuIiwibGluayIsImNvbmNhdCIsImNhY2hlIiwiSW5NZW1vcnlDYWNoZSIsImFkZFR5cGVuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUlBLElBQU1BLEtBQUssR0FBR0Msc0VBQVUsQ0FDdEIsVUFBQ0MsT0FBRDtBQUFBLFNBQ0UsSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsSUFBVixFQUFtQjtBQUM3QkMsY0FBVSxDQUFDLFlBQU07QUFDZkYsYUFBTztBQUNSLEtBRlMsRUFFUCxJQUZPLENBQVY7QUFHRCxHQUpELENBREY7QUFBQSxDQURzQixDQUF4QixDLENBU0E7O0FBQ0EsSUFBTUcsUUFBUSxHQUFHQyx1RUFBYyxDQUFDO0FBQzlCQyxLQUFHLEVBQUU7QUFEeUIsQ0FBRCxDQUEvQixDLENBSUE7O0FBQ0EsSUFBTUMsUUFBUSxHQUFHVCxzRUFBVSxDQUFDLFlBQU07QUFDaEM7QUFDQSxNQUFNVSxLQUFLLEdBQUdDLGdEQUFPLENBQUNDLEdBQVIsQ0FBWSx3QkFBWixDQUFkLENBRmdDLENBR2hDOztBQUNBLFNBQU87QUFDTEMsV0FBTyxvQkFDREgsS0FBSyxLQUFLSSxTQUFWLEdBQXNCO0FBQUVDLG1CQUFhLG1CQUFZTCxLQUFaO0FBQWYsS0FBdEIsR0FBNkQsRUFENUQ7QUFERixHQUFQO0FBS0QsQ0FUMEIsQ0FBM0I7QUFXZSxTQUFTTSxrQkFBVCxDQUE0QkMsWUFBNUIsRUFBMENDLEdBQTFDLEVBQStDO0FBQzVEO0FBQ0E7QUFDQSxTQUFPLElBQUlDLDBEQUFKLENBQWlCO0FBQ3RCO0FBQ0E7QUFDQUMsV0FBTyxFQUFFQyxPQUFPLENBQUNILEdBQUQsQ0FITTtBQUl0QkksUUFBSSxFQUFFYixRQUFRLENBQUNjLE1BQVQsQ0FBZ0JqQixRQUFoQixDQUpnQjtBQUt0QmtCLFNBQUssRUFBRSxJQUFJQyxtRUFBSixDQUFrQjtBQUN2QkMsaUJBQVcsRUFBRTtBQURVLEtBQWxCO0FBTGUsR0FBakIsQ0FBUDtBQVNEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxfYXBwLmpzLjEyYWYwNjI3YWY0N2QyZjdlNmYzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcG9sbG9DbGllbnQgfSBmcm9tICdhcG9sbG8tY2xpZW50JztcclxuaW1wb3J0IHsgSW5NZW1vcnlDYWNoZSB9IGZyb20gJ2Fwb2xsby1jYWNoZS1pbm1lbW9yeSc7XHJcbmltcG9ydCB7IGNyZWF0ZUh0dHBMaW5rIH0gZnJvbSAnYXBvbGxvLWxpbmstaHR0cCc7XHJcbmltcG9ydCB7IHNldENvbnRleHQgfSBmcm9tICdhcG9sbG8tbGluay1jb250ZXh0JztcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcclxuXHJcbi8qKlxyXG4gKiBBcnRpZmljaWFsIGRlbGF5IHRvIHRlc3Qgb3B0aW1pc3RpYyB1cGRhdGVzXHJcbiAqIFNldCBcImxpbmtcIiB0byBcImF1dGhMaW5rLmNvbmNhdChkZWxheSkuY29uY2F0KGh0dHBMaW5rKVwiXHJcbiAqL1xyXG5jb25zdCBkZWxheSA9IHNldENvbnRleHQoXHJcbiAgKHJlcXVlc3QpID0+XHJcbiAgICBuZXcgUHJvbWlzZSgoc3VjY2VzcywgZmFpbCkgPT4ge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBzdWNjZXNzKCk7XHJcbiAgICAgIH0sIDEwMDApO1xyXG4gICAgfSlcclxuKTtcclxuXHJcbi8vIEFkZCBcIi9ncmFwaHFsXCIgZm9yIGV4cHJlc3MgKyBwb3N0Z3JhcGhpbGVcclxuY29uc3QgaHR0cExpbmsgPSBjcmVhdGVIdHRwTGluayh7XHJcbiAgdXJpOiAnaHR0cDovL2xvY2FsaG9zdDo0MDAwL2dyYXBocWwnXHJcbn0pO1xyXG5cclxuLy8gVXNlZCB0byBzZXQgdGhlIGhlYWRlcnNcclxuY29uc3QgYXV0aExpbmsgPSBzZXRDb250ZXh0KCgpID0+IHtcclxuICAvLyBBdHRlbXB0IHRvIHJldHJpZXZlIHRoZSBKV1RcclxuICBjb25zdCB0b2tlbiA9IENvb2tpZXMuZ2V0KCdncm9jZXJ5bGlzdF9hdXRoX3Rva2VuJyk7XHJcbiAgLy8gQXBwbGllcyB0aGUgaGVhZGVycyB3aXRoIHRoZSBKV1QgaWYgdGhlIEpXVCBleGlzdHNcclxuICByZXR1cm4ge1xyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICAuLi4odG9rZW4gIT09IHVuZGVmaW5lZCA/IHsgYXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAgfSA6IHt9KVxyXG4gICAgfVxyXG4gIH07XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlQXBvbGxvQ2xpZW50KGluaXRpYWxTdGF0ZSwgY3R4KSB7XHJcbiAgLy8gVGhlIGBjdHhgIChOZXh0UGFnZUNvbnRleHQpIHdpbGwgb25seSBiZSBwcmVzZW50IG9uIHRoZSBzZXJ2ZXIuXHJcbiAgLy8gdXNlIGl0IHRvIGV4dHJhY3QgYXV0aCBoZWFkZXJzIChjdHgucmVxKSBvciBzaW1pbGFyLlxyXG4gIHJldHVybiBuZXcgQXBvbGxvQ2xpZW50KHtcclxuICAgIC8vIGluY2x1ZGVFeHRlbnNpb25zOiB0cnVlLFxyXG4gICAgLy8gYWRkVHlwZW5hbWU6IGZhbHNlLFxyXG4gICAgc3NyTW9kZTogQm9vbGVhbihjdHgpLFxyXG4gICAgbGluazogYXV0aExpbmsuY29uY2F0KGh0dHBMaW5rKSxcclxuICAgIGNhY2hlOiBuZXcgSW5NZW1vcnlDYWNoZSh7XHJcbiAgICAgIGFkZFR5cGVuYW1lOiBmYWxzZVxyXG4gICAgfSlcclxuICB9KTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9