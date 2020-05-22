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
    link: authLink.concat(delay).concat(httpLink),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcG9sbG9DbGllbnQuanMiXSwibmFtZXMiOlsiZGVsYXkiLCJzZXRDb250ZXh0IiwicmVxdWVzdCIsIlByb21pc2UiLCJzdWNjZXNzIiwiZmFpbCIsInNldFRpbWVvdXQiLCJodHRwTGluayIsImNyZWF0ZUh0dHBMaW5rIiwidXJpIiwiYXV0aExpbmsiLCJ0b2tlbiIsIkNvb2tpZXMiLCJnZXQiLCJoZWFkZXJzIiwidW5kZWZpbmVkIiwiYXV0aG9yaXphdGlvbiIsImNyZWF0ZUFwb2xsb0NsaWVudCIsImluaXRpYWxTdGF0ZSIsImN0eCIsIkFwb2xsb0NsaWVudCIsInNzck1vZGUiLCJCb29sZWFuIiwibGluayIsImNvbmNhdCIsImNhY2hlIiwiSW5NZW1vcnlDYWNoZSIsImFkZFR5cGVuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUlBLElBQU1BLEtBQUssR0FBR0Msc0VBQVUsQ0FDdEIsVUFBQ0MsT0FBRDtBQUFBLFNBQ0UsSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsSUFBVixFQUFtQjtBQUM3QkMsY0FBVSxDQUFDLFlBQU07QUFDZkYsYUFBTztBQUNSLEtBRlMsRUFFUCxLQUZPLENBQVY7QUFHRCxHQUpELENBREY7QUFBQSxDQURzQixDQUF4QixDLENBU0E7O0FBQ0EsSUFBTUcsUUFBUSxHQUFHQyx1RUFBYyxDQUFDO0FBQzlCQyxLQUFHLEVBQUU7QUFEeUIsQ0FBRCxDQUEvQixDLENBSUE7O0FBQ0EsSUFBTUMsUUFBUSxHQUFHVCxzRUFBVSxDQUFDLFlBQU07QUFDaEM7QUFDQSxNQUFNVSxLQUFLLEdBQUdDLGdEQUFPLENBQUNDLEdBQVIsQ0FBWSx3QkFBWixDQUFkLENBRmdDLENBR2hDOztBQUNBLFNBQU87QUFDTEMsV0FBTyxvQkFDREgsS0FBSyxLQUFLSSxTQUFWLEdBQXNCO0FBQUVDLG1CQUFhLG1CQUFZTCxLQUFaO0FBQWYsS0FBdEIsR0FBNkQsRUFENUQ7QUFERixHQUFQO0FBS0QsQ0FUMEIsQ0FBM0I7QUFXZSxTQUFTTSxrQkFBVCxDQUE0QkMsWUFBNUIsRUFBMENDLEdBQTFDLEVBQStDO0FBQzVEO0FBQ0E7QUFDQSxTQUFPLElBQUlDLDBEQUFKLENBQWlCO0FBQ3RCO0FBQ0E7QUFDQUMsV0FBTyxFQUFFQyxPQUFPLENBQUNILEdBQUQsQ0FITTtBQUl0QkksUUFBSSxFQUFFYixRQUFRLENBQUNjLE1BQVQsQ0FBZ0J4QixLQUFoQixFQUF1QndCLE1BQXZCLENBQThCakIsUUFBOUIsQ0FKZ0I7QUFLdEJrQixTQUFLLEVBQUUsSUFBSUMsbUVBQUosQ0FBa0I7QUFDdkJDLGlCQUFXLEVBQUU7QUFEVSxLQUFsQjtBQUxlLEdBQWpCLENBQVA7QUFTRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcX2FwcC5qcy4xNzU5OGYzMmQ2ODQzMjRmOGVmNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBvbGxvQ2xpZW50IH0gZnJvbSAnYXBvbGxvLWNsaWVudCc7XHJcbmltcG9ydCB7IEluTWVtb3J5Q2FjaGUgfSBmcm9tICdhcG9sbG8tY2FjaGUtaW5tZW1vcnknO1xyXG5pbXBvcnQgeyBjcmVhdGVIdHRwTGluayB9IGZyb20gJ2Fwb2xsby1saW5rLWh0dHAnO1xyXG5pbXBvcnQgeyBzZXRDb250ZXh0IH0gZnJvbSAnYXBvbGxvLWxpbmstY29udGV4dCc7XHJcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XHJcblxyXG4vKipcclxuICogQXJ0aWZpY2lhbCBkZWxheSB0byB0ZXN0IG9wdGltaXN0aWMgdXBkYXRlc1xyXG4gKiBTZXQgXCJsaW5rXCIgdG8gXCJhdXRoTGluay5jb25jYXQoZGVsYXkpLmNvbmNhdChodHRwTGluaylcIlxyXG4gKi9cclxuY29uc3QgZGVsYXkgPSBzZXRDb250ZXh0KFxyXG4gIChyZXF1ZXN0KSA9PlxyXG4gICAgbmV3IFByb21pc2UoKHN1Y2Nlc3MsIGZhaWwpID0+IHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgc3VjY2VzcygpO1xyXG4gICAgICB9LCAxMDAwMCk7XHJcbiAgICB9KVxyXG4pO1xyXG5cclxuLy8gQWRkIFwiL2dyYXBocWxcIiBmb3IgZXhwcmVzcyArIHBvc3RncmFwaGlsZVxyXG5jb25zdCBodHRwTGluayA9IGNyZWF0ZUh0dHBMaW5rKHtcclxuICB1cmk6ICdodHRwOi8vbG9jYWxob3N0OjQwMDAvZ3JhcGhxbCdcclxufSk7XHJcblxyXG4vLyBVc2VkIHRvIHNldCB0aGUgaGVhZGVyc1xyXG5jb25zdCBhdXRoTGluayA9IHNldENvbnRleHQoKCkgPT4ge1xyXG4gIC8vIEF0dGVtcHQgdG8gcmV0cmlldmUgdGhlIEpXVFxyXG4gIGNvbnN0IHRva2VuID0gQ29va2llcy5nZXQoJ2dyb2NlcnlsaXN0X2F1dGhfdG9rZW4nKTtcclxuICAvLyBBcHBsaWVzIHRoZSBoZWFkZXJzIHdpdGggdGhlIEpXVCBpZiB0aGUgSldUIGV4aXN0c1xyXG4gIHJldHVybiB7XHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIC4uLih0b2tlbiAhPT0gdW5kZWZpbmVkID8geyBhdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCB9IDoge30pXHJcbiAgICB9XHJcbiAgfTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVBcG9sbG9DbGllbnQoaW5pdGlhbFN0YXRlLCBjdHgpIHtcclxuICAvLyBUaGUgYGN0eGAgKE5leHRQYWdlQ29udGV4dCkgd2lsbCBvbmx5IGJlIHByZXNlbnQgb24gdGhlIHNlcnZlci5cclxuICAvLyB1c2UgaXQgdG8gZXh0cmFjdCBhdXRoIGhlYWRlcnMgKGN0eC5yZXEpIG9yIHNpbWlsYXIuXHJcbiAgcmV0dXJuIG5ldyBBcG9sbG9DbGllbnQoe1xyXG4gICAgLy8gaW5jbHVkZUV4dGVuc2lvbnM6IHRydWUsXHJcbiAgICAvLyBhZGRUeXBlbmFtZTogZmFsc2UsXHJcbiAgICBzc3JNb2RlOiBCb29sZWFuKGN0eCksXHJcbiAgICBsaW5rOiBhdXRoTGluay5jb25jYXQoZGVsYXkpLmNvbmNhdChodHRwTGluayksXHJcbiAgICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoe1xyXG4gICAgICBhZGRUeXBlbmFtZTogZmFsc2VcclxuICAgIH0pXHJcbiAgfSk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==