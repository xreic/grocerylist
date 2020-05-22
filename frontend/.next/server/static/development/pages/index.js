module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/GroceryCheckout.js":
/*!***************************************!*\
  !*** ./components/GroceryCheckout.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/core */ "@chakra-ui/core");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_apollo_mutations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/apollo/mutations */ "./lib/apollo/mutations.js");
/* harmony import */ var _lib_React_StatusContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/React/StatusContext */ "./lib/React/StatusContext.js");
var _jsxFileName = "F:\\Work\\Projects\\Grocery List\\frontend\\components\\GroceryCheckout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// Dependencies

 // Styles

 // Apollo

 // React



const GroceryCheckout = () => {
  // Hooks + Contexts
  const {
    0: isCalling,
    1: setIsCalling
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    status
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_lib_React_StatusContext__WEBPACK_IMPORTED_MODULE_4__["StatusContext"]); // Apollo

  const [addToHistory] = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__["useMutation"])(_lib_apollo_mutations__WEBPACK_IMPORTED_MODULE_3__["ADD_TO_HISTORY_MUTATION"]); // Handlers

  const handleCheckout = async e => {
    e.preventDefault();
    setIsCalling(true);
    const input = {
      products: status
    };

    try {
      await addToHistory({
        variables: {
          input
        }
      });
    } catch (error) {
      console.log(JSON.parse(JSON.stringify(error)));
    }

    setIsCalling(false);
  };

  return __jsx("form", {
    method: "post",
    onSubmit: handleCheckout,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    type: "sumbit",
    variantColor: "blue",
    alignSelf: "center",
    width: "35%",
    maxWidth: "300px",
    marginBottom: "2rem",
    isLoading: isCalling,
    isDisabled: isCalling,
    "aira-busy": isCalling,
    "aria-label": `Checkout the selected items`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, "Checkout"));
};

/* harmony default export */ __webpack_exports__["default"] = (GroceryCheckout);

/***/ }),

/***/ "./components/GroceryForm.js":
/*!***********************************!*\
  !*** ./components/GroceryForm.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/core */ "@chakra-ui/core");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/md */ "react-icons/md");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_apollo_queries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/apollo/queries */ "./lib/apollo/queries.js");
/* harmony import */ var _lib_apollo_mutations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/apollo/mutations */ "./lib/apollo/mutations.js");
/* harmony import */ var _styles_styled__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/styled */ "./components/styles/styled.js");
var _jsxFileName = "F:\\Work\\Projects\\Grocery List\\frontend\\components\\GroceryForm.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Dependencies

 // Styles


 // Helpers





const GroceryForm = () => {
  // Form Refs
  const productRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])('');
  const quantityRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(''); // Hooks

  const {
    0: isCalling,
    1: setIsCalling
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false); // Apollo

  const [addItem] = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__["useMutation"])(_lib_apollo_mutations__WEBPACK_IMPORTED_MODULE_5__["ADD_ITEM_MUTATION"]); // Handlers

  const handleSubmit = e => {
    e.preventDefault();
    setIsCalling(true);
    const input = {
      product: productRef.current.value,
      quantity: parseInt(quantityRef.current.value)
    };
    addItem({
      variables: {
        input
      },
      optimisticResponse: {
        __typename: 'Mutation',
        addItem: {
          item: _objectSpread({
            id: Math.round(Math.random() * -1000000)
          }, input)
        }
      },
      update: (cache, {
        data: {
          addItem
        }
      }) => {
        const {
          currentUserItems
        } = cache.readQuery({
          query: _lib_apollo_queries__WEBPACK_IMPORTED_MODULE_4__["USERS_ITEMS_QUERY"]
        });
        const {
          nodes
        } = currentUserItems;
        const {
          item
        } = addItem;
        cache.writeQuery({
          query: _lib_apollo_queries__WEBPACK_IMPORTED_MODULE_4__["USERS_ITEMS_QUERY"],
          data: {
            currentUserItems: {
              nodes: [item, ...nodes]
            }
          }
        });
      }
    });
    setIsCalling(false);
    productRef.current.value = '';
    quantityRef.current.value = '';
    productRef.current.focus();
  };

  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
    justify: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 5
    }
  }, __jsx("form", {
    method: "post",
    onSubmit: handleSubmit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    templateColumns: "5fr 1fr",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 11
    }
  }, __jsx(_styles_styled__WEBPACK_IMPORTED_MODULE_6__["StyledInput"], {
    type: "text",
    placeholder: "Product",
    isDisabled: isCalling,
    ref: productRef,
    isRequired: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }
  }), __jsx(_styles_styled__WEBPACK_IMPORTED_MODULE_6__["StyledInput"], {
    type: "number",
    placeholder: "Quantity",
    isDisabled: isCalling,
    ref: quantityRef,
    isRequired: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }
  })), __jsx(_styles_styled__WEBPACK_IMPORTED_MODULE_6__["StyledButton"], {
    type: "submit",
    variantColor: "blue",
    icon: react_icons_md__WEBPACK_IMPORTED_MODULE_3__["MdAddShoppingCart"],
    isLoading: isCalling,
    isDisabled: isCalling,
    "aira-busy": isCalling,
    "aira-label": "Add into to your grocery list",
    height: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 11
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (GroceryForm);

/***/ }),

/***/ "./components/GroceryFormLayout.js":
/*!*****************************************!*\
  !*** ./components/GroceryFormLayout.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/core */ "@chakra-ui/core");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/md */ "react-icons/md");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _GroceryForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GroceryForm */ "./components/GroceryForm.js");
/* harmony import */ var _lib_React_UserContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/React/UserContext */ "./lib/React/UserContext.js");
/* harmony import */ var _lib_React_ShoppingContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/React/ShoppingContext */ "./lib/React/ShoppingContext.js");
var _jsxFileName = "F:\\Work\\Projects\\Grocery List\\frontend\\components\\GroceryFormLayout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// Dependencies

 // Styles


 // React





const GroceryFormLayout = () => {
  // Hooks + Contexts
  const {
    user
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_lib_React_UserContext__WEBPACK_IMPORTED_MODULE_5__["UserContext"]);
  const {
    isShopping,
    setIsShopping
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_lib_React_ShoppingContext__WEBPACK_IMPORTED_MODULE_6__["ShoppingContext"]); // useEffect

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    // Force the user to sign in
    if (!user) next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/signin');
  }, [user]); // Handlers

  const handleClick = () => {
    setIsShopping(!isShopping);
  };

  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Stack"], {
    spacing: "2rem",
    paddingBottom: "2rem",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["IconButton"], {
    variantColor: "blue",
    icon: isShopping ? react_icons_md__WEBPACK_IMPORTED_MODULE_3__["MdAddShoppingCart"] : react_icons_md__WEBPACK_IMPORTED_MODULE_3__["MdReceipt"],
    width: "65%",
    maxWidth: "300px",
    alignSelf: "center",
    onClick: handleClick,
    "aria-label": `Click to switch from ${isShopping ? 'add to remove' : 'remove to add'}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }), isShopping && __jsx(_GroceryForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 22
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (GroceryFormLayout);

/***/ }),

/***/ "./components/GroceryList.js":
/*!***********************************!*\
  !*** ./components/GroceryList.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_apollo_queries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/apollo/queries */ "./lib/apollo/queries.js");
/* harmony import */ var _lib_apollo_mutations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/apollo/mutations */ "./lib/apollo/mutations.js");
/* harmony import */ var _lib_doctorError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/doctorError */ "./lib/doctorError.js");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/core */ "@chakra-ui/core");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Item */ "./components/Item.js");
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Loading */ "./components/Loading.js");
/* harmony import */ var _lib_React_ShoppingContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lib/React/ShoppingContext */ "./lib/React/ShoppingContext.js");
/* harmony import */ var _GroceryCheckout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./GroceryCheckout */ "./components/GroceryCheckout.js");
var _jsxFileName = "F:\\Work\\Projects\\Grocery List\\frontend\\components\\GroceryList.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// Dependnencies

 // Helpers



 // Styles

 // React






const GroceryList = () => {
  var _data$currentUserItem;

  // Hooks + Contexts
  const toast = Object(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__["useToast"])();
  const {
    isShopping
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_lib_React_ShoppingContext__WEBPACK_IMPORTED_MODULE_8__["ShoppingContext"]); // Apollo

  const {
    data,
    loading,
    error
  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__["useQuery"])(_lib_apollo_queries__WEBPACK_IMPORTED_MODULE_2__["USERS_ITEMS_QUERY"]);
  const [deleteItem, deleteResponse] = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__["useMutation"])(_lib_apollo_mutations__WEBPACK_IMPORTED_MODULE_3__["REMOVE_ITEM_MUTATION"]); // Handlers

  const handleClick = async id => {
    try {
      await deleteItem({
        variables: {
          input: {
            id
          }
        },
        optimisticResponse: {
          __typename: 'Mutation',
          deleteItem: {
            item: {
              id
            }
          }
        },
        update: (cache, {
          data: {
            deleteItem
          }
        }) => {
          const {
            currentUserItems
          } = cache.readQuery({
            query: _lib_apollo_queries__WEBPACK_IMPORTED_MODULE_2__["USERS_ITEMS_QUERY"]
          });
          const {
            nodes
          } = currentUserItems;
          const {
            id
          } = deleteItem.item;
          cache.writeQuery({
            query: _lib_apollo_queries__WEBPACK_IMPORTED_MODULE_2__["USERS_ITEMS_QUERY"],
            data: {
              currentUserItems: {
                nodes: nodes.filter(node => node.id !== id)
              }
            }
          });
        }
      });
    } catch (error) {// need to catch the error, so a popup doesn't show up
    }
  };

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
        description: Object(_lib_doctorError__WEBPACK_IMPORTED_MODULE_4__["doctorError"])(deleteResponse.error.message),
        status: 'error',
        duration: 9001,
        isClosable: true
      });
    }
  }

  if (loading) return __jsx(_Loading__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 23
    }
  });

  if ((_data$currentUserItem = data.currentUserItems) === null || _data$currentUserItem === void 0 ? void 0 : _data$currentUserItem.nodes.length) {
    const list = data.currentUserItems.nodes;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 7
      }
    }, !isShopping && __jsx(_GroceryCheckout__WEBPACK_IMPORTED_MODULE_9__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 25
      }
    }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__["Stack"], {
      width: "60%",
      maxWidth: "500px",
      minWidth: "300px",
      margin: "auto",
      spacing: "0.5rem",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 9
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__["SimpleGrid"], {
      columns: "3",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 11
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__["Heading"], {
      as: "h4",
      size: "lg",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 13
      }
    }, "Item"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__["Heading"], {
      as: "h4",
      size: "lg",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 13
      }
    }, "Quantity")), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__["Box"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 11
      }
    }, list.map(item => __jsx(_Item__WEBPACK_IMPORTED_MODULE_6__["default"], {
      key: item.id + item.product,
      id: item.id,
      product: item.product,
      quantity: item.quantity,
      handleClick: handleClick,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 15
      }
    })))));
  } else {
    return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__["Heading"], {
      as: "h4",
      size: "lg",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 7
      }
    }, "Remember to add to your list. \uD83D\uDCDD");
  }
};

/* harmony default export */ __webpack_exports__["default"] = (GroceryList);

/***/ }),

/***/ "./components/Item.js":
/*!****************************!*\
  !*** ./components/Item.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ "@chakra-ui/core");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/md */ "react-icons/md");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_React_ShoppingContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/React/ShoppingContext */ "./lib/React/ShoppingContext.js");
/* harmony import */ var _lib_React_StatusContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/React/StatusContext */ "./lib/React/StatusContext.js");
var _jsxFileName = "F:\\Work\\Projects\\Grocery List\\frontend\\components\\Item.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// Dependencies
 // Styles


 // React




const Item = ({
  id,
  product,
  quantity,
  handleClick
}) => {
  // Hooks + Contexts
  const {
    0: isSelected,
    1: setIsSelected
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    addToHistory,
    removeFromHistory
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_lib_React_StatusContext__WEBPACK_IMPORTED_MODULE_4__["StatusContext"]);
  const {
    isShopping
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_lib_React_ShoppingContext__WEBPACK_IMPORTED_MODULE_3__["ShoppingContext"]); // Handlers

  const changeStatus = payload => {
    if (isSelected) removeFromHistory(id);else addToHistory(payload);
    setIsSelected(!isSelected);
  };

  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["SimpleGrid"], {
    columns: "3",
    paddingBottom: "0.25rem",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    alignSelf: "center",
    as: "b",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, product), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    alignSelf: "center",
    as: "b",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, quantity), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    justify: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, isShopping ? __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["IconButton"], {
    size: "sm",
    variantColor: "blue",
    icon: react_icons_md__WEBPACK_IMPORTED_MODULE_2__["MdRemoveCircleOutline"],
    onClick: () => handleClick(id),
    "aria-label": "Click to remove from list",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }) : __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["IconButton"], {
    size: "sm",
    variantColor: "blue",
    icon: isSelected ? react_icons_md__WEBPACK_IMPORTED_MODULE_2__["MdLabel"] : react_icons_md__WEBPACK_IMPORTED_MODULE_2__["MdLabelOutline"],
    onClick: () => changeStatus({
      id,
      product,
      quantity
    }),
    "aria-label": `Click to ${isSelected && 'de'}select`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Item);

/***/ }),

/***/ "./components/Loading.js":
/*!*******************************!*\
  !*** ./components/Loading.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/core */ "@chakra-ui/core");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "F:\\Work\\Projects\\Grocery List\\frontend\\components\\Loading.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// Dependencies
 // Styles



const HistoryLoad = () => __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Skeleton"], {
  borderRadius: "1rem",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 3
  }
}, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["AccordionItem"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }
}, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["AccordionHeader"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 7
  }
}, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
  flex: "1",
  textAlign: "left",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 9
  }
}, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 11
  }
}, "Yes"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 11
  }
}, "Yes")), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["AccordionIcon"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 9
  }
})), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["AccordionPanel"], {
  pb: 4,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 7
  }
})));

const GroceryListLoad = () => __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Skeleton"], {
  borderRadius: "1rem",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 3
  }
}, "Placeholder");

const Loading = () => {
  const {
    pathname
  } = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();

  if (pathname === '/history') {
    return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Stack"], {
      width: "60%",
      maxWidth: "500px",
      minWidth: "300px",
      margin: "auto",
      spacing: "0.5rem",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 7
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }
    }, __jsx(HistoryLoad, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 11
      }
    })), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }
    }, __jsx(HistoryLoad, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 11
      }
    })), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }
    }, __jsx(HistoryLoad, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 11
      }
    })), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }
    }, __jsx(HistoryLoad, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 11
      }
    })));
  }

  if (pathname === '/') {
    return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Stack"], {
      width: "60%",
      maxWidth: "500px",
      minWidth: "300px",
      margin: "auto",
      spacing: "0.5rem",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 7
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }
    }, __jsx(GroceryListLoad, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 11
      }
    })), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }
    }, __jsx(GroceryListLoad, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 11
      }
    })), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 9
      }
    }, __jsx(GroceryListLoad, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 11
      }
    })), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 9
      }
    }, __jsx(GroceryListLoad, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 11
      }
    })));
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Loading);

/***/ }),

/***/ "./components/styles/styled.js":
/*!*************************************!*\
  !*** ./components/styles/styled.js ***!
  \*************************************/
/*! exports provided: StyledButton, StyledInput, StyledInputPW, StyleAccHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledButton", function() { return StyledButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledInput", function() { return StyledInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledInputPW", function() { return StyledInputPW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleAccHeader", function() { return StyleAccHeader; });
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled */ "@emotion/styled");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ "@chakra-ui/core");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__);


const StyledButton = _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default()(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["IconButton"])`
  :disabled {
    opacity: 1;
  }
`;
const StyledInput = _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default()(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Input"])`
  :disabled {
    opacity: 1;
  }
`;
const StyledInputPW = _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default()(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Input"])`
  :disabled {
    opacity: 1;
  }
`;
const StyleAccHeader = _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default()(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["AccordionHeader"])`
  :focus {
    outline: 0 !important;
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0) !important;
  }

  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: transparent;
  -webkit-user-select: transparent;
  -khtml-user-select: transparent;
  -moz-user-select: transparent;
  -ms-user-select: transparent;
  user-select: transparent;
`;

/***/ }),

/***/ "./lib/React/ShoppingContext.js":
/*!**************************************!*\
  !*** ./lib/React/ShoppingContext.js ***!
  \**************************************/
/*! exports provided: default, ShoppingContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingContext", function() { return ShoppingContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "F:\\Work\\Projects\\Grocery List\\frontend\\lib\\React\\ShoppingContext.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const ShoppingContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({});

const Shopping = props => {
  const {
    0: isShopping,
    1: setIsShopping
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  return __jsx(ShoppingContext.Provider, {
    value: {
      isShopping,
      setIsShopping
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (Shopping);


/***/ }),

/***/ "./lib/React/StatusContext.js":
/*!************************************!*\
  !*** ./lib/React/StatusContext.js ***!
  \************************************/
/*! exports provided: default, StatusContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusContext", function() { return StatusContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "F:\\Work\\Projects\\Grocery List\\frontend\\lib\\React\\StatusContext.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const StatusContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({});

class Status extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      status: []
    });

    _defineProperty(this, "addToHistory", payload => {
      this.setState({
        status: [payload, ...this.state.status]
      });
    });

    _defineProperty(this, "removeFromHistory", id => {
      this.setState({
        status: this.state.status.filter(item => id !== item.id)
      });
    });
  }

  render() {
    const {
      addToHistory,
      removeFromHistory
    } = this;
    const {
      status
    } = this.state;
    const value = {
      status,
      addToHistory,
      removeFromHistory
    };
    return __jsx(StatusContext.Provider, {
      value: value,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 7
      }
    }, this.props.children);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Status);


/***/ }),

/***/ "./lib/React/UserContext.js":
/*!**********************************!*\
  !*** ./lib/React/UserContext.js ***!
  \**********************************/
/*! exports provided: default, UserContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserContext", function() { return UserContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "F:\\Work\\Projects\\Grocery List\\frontend\\lib\\React\\UserContext.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const UserContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({});

const User = props => {
  const {
    0: user,
    1: setUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(!!js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.get('grocerylist_auth_token'));
  return __jsx(UserContext.Provider, {
    value: {
      user,
      setUser
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (User);


/***/ }),

/***/ "./lib/apollo/mutations.js":
/*!*********************************!*\
  !*** ./lib/apollo/mutations.js ***!
  \*********************************/
/*! exports provided: ADD_ITEM_MUTATION, REMOVE_ITEM_MUTATION, ADD_TO_HISTORY_MUTATION, SIGNIN_USER_MUTATION, REGISTER_USER_MUTATION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_ITEM_MUTATION", function() { return ADD_ITEM_MUTATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_ITEM_MUTATION", function() { return REMOVE_ITEM_MUTATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TO_HISTORY_MUTATION", function() { return ADD_TO_HISTORY_MUTATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNIN_USER_MUTATION", function() { return SIGNIN_USER_MUTATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTER_USER_MUTATION", function() { return REGISTER_USER_MUTATION; });
const ADD_ITEM_MUTATION = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "mutation",
    "name": {
      "kind": "Name",
      "value": "ADD_ITEM_MUTATION"
    },
    "variableDefinitions": [{
      "kind": "VariableDefinition",
      "variable": {
        "kind": "Variable",
        "name": {
          "kind": "Name",
          "value": "input"
        }
      },
      "type": {
        "kind": "NonNullType",
        "type": {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "AddItemInput"
          }
        }
      },
      "directives": []
    }],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "name": {
          "kind": "Name",
          "value": "addItem"
        },
        "arguments": [{
          "kind": "Argument",
          "name": {
            "kind": "Name",
            "value": "input"
          },
          "value": {
            "kind": "Variable",
            "name": {
              "kind": "Name",
              "value": "input"
            }
          }
        }],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "item"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "id"
                },
                "arguments": [],
                "directives": []
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "product"
                },
                "arguments": [],
                "directives": []
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "quantity"
                },
                "arguments": [],
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 159,
    "source": {
      "body": "\n  mutation ADD_ITEM_MUTATION($input: AddItemInput!) {\n    addItem(input: $input) {\n      item {\n        id\n        product\n        quantity\n      }\n    }\n  }\n",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const REMOVE_ITEM_MUTATION = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "mutation",
    "name": {
      "kind": "Name",
      "value": "REMOVE_ITEM_MUTATION"
    },
    "variableDefinitions": [{
      "kind": "VariableDefinition",
      "variable": {
        "kind": "Variable",
        "name": {
          "kind": "Name",
          "value": "input"
        }
      },
      "type": {
        "kind": "NonNullType",
        "type": {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "DeleteItemInput"
          }
        }
      },
      "directives": []
    }],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "name": {
          "kind": "Name",
          "value": "deleteItem"
        },
        "arguments": [{
          "kind": "Argument",
          "name": {
            "kind": "Name",
            "value": "input"
          },
          "value": {
            "kind": "Variable",
            "name": {
              "kind": "Name",
              "value": "input"
            }
          }
        }],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "item"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "id"
                },
                "arguments": [],
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 135,
    "source": {
      "body": "\n  mutation REMOVE_ITEM_MUTATION($input: DeleteItemInput!) {\n    deleteItem(input: $input) {\n      item {\n        id\n      }\n    }\n  }\n",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const ADD_TO_HISTORY_MUTATION = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "mutation",
    "name": {
      "kind": "Name",
      "value": "ADD_TO_HISTORY_MUTATION"
    },
    "variableDefinitions": [{
      "kind": "VariableDefinition",
      "variable": {
        "kind": "Variable",
        "name": {
          "kind": "Name",
          "value": "input"
        }
      },
      "type": {
        "kind": "NonNullType",
        "type": {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "AddToHistoryInput"
          }
        }
      },
      "directives": []
    }],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "name": {
          "kind": "Name",
          "value": "addToHistory"
        },
        "arguments": [{
          "kind": "Argument",
          "name": {
            "kind": "Name",
            "value": "input"
          },
          "value": {
            "kind": "Variable",
            "name": {
              "kind": "Name",
              "value": "input"
            }
          }
        }],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "history"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "history"
                },
                "arguments": [],
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 150,
    "source": {
      "body": "\n  mutation ADD_TO_HISTORY_MUTATION($input: AddToHistoryInput!) {\n    addToHistory(input: $input) {\n      history {\n        history\n      }\n    }\n  }\n",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const SIGNIN_USER_MUTATION = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "mutation",
    "name": {
      "kind": "Name",
      "value": "SIGNIN_USER_MUTATION"
    },
    "variableDefinitions": [{
      "kind": "VariableDefinition",
      "variable": {
        "kind": "Variable",
        "name": {
          "kind": "Name",
          "value": "input"
        }
      },
      "type": {
        "kind": "NonNullType",
        "type": {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "AuthenticateInput"
          }
        }
      },
      "directives": []
    }],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "name": {
          "kind": "Name",
          "value": "authenticate"
        },
        "arguments": [{
          "kind": "Argument",
          "name": {
            "kind": "Name",
            "value": "input"
          },
          "value": {
            "kind": "Variable",
            "name": {
              "kind": "Name",
              "value": "input"
            }
          }
        }],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "jwtToken"
            },
            "arguments": [],
            "directives": []
          }]
        }
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 122,
    "source": {
      "body": "\n  mutation SIGNIN_USER_MUTATION($input: AuthenticateInput!) {\n    authenticate(input: $input) {\n      jwtToken\n    }\n  }\n",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const REGISTER_USER_MUTATION = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "mutation",
    "name": {
      "kind": "Name",
      "value": "REGISTER_USER_MUTATION"
    },
    "variableDefinitions": [{
      "kind": "VariableDefinition",
      "variable": {
        "kind": "Variable",
        "name": {
          "kind": "Name",
          "value": "input"
        }
      },
      "type": {
        "kind": "NonNullType",
        "type": {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "RegisterUserInput"
          }
        }
      },
      "directives": []
    }],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "name": {
          "kind": "Name",
          "value": "registerUser"
        },
        "arguments": [{
          "kind": "Argument",
          "name": {
            "kind": "Name",
            "value": "input"
          },
          "value": {
            "kind": "Variable",
            "name": {
              "kind": "Name",
              "value": "input"
            }
          }
        }],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "user"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "displayname"
                },
                "arguments": [],
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 150,
    "source": {
      "body": "\n  mutation REGISTER_USER_MUTATION($input: RegisterUserInput!) {\n    registerUser(input: $input) {\n      user {\n        displayname\n      }\n    }\n  }\n",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};

/***/ }),

/***/ "./lib/apollo/queries.js":
/*!*******************************!*\
  !*** ./lib/apollo/queries.js ***!
  \*******************************/
/*! exports provided: USERS_ITEMS_QUERY, USER_HISTORY_QUERY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USERS_ITEMS_QUERY", function() { return USERS_ITEMS_QUERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_HISTORY_QUERY", function() { return USER_HISTORY_QUERY; });
const USERS_ITEMS_QUERY = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "USERS_ITEMS_QUERY"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "name": {
          "kind": "Name",
          "value": "currentUserItems"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "nodes"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "id"
                },
                "arguments": [],
                "directives": []
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "product"
                },
                "arguments": [],
                "directives": []
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "quantity"
                },
                "arguments": [],
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 128,
    "source": {
      "body": "\n  query USERS_ITEMS_QUERY {\n    currentUserItems {\n      nodes {\n        id\n        product\n        quantity\n      }\n    }\n  }\n",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
const USER_HISTORY_QUERY = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "USER_HISTORY_QUERY"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "name": {
          "kind": "Name",
          "value": "currentUserHistory"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "nodes"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "id"
                },
                "arguments": [],
                "directives": []
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "history"
                },
                "arguments": [],
                "directives": []
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "createdAt"
                },
                "arguments": [],
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 132,
    "source": {
      "body": "\n  query USER_HISTORY_QUERY {\n    currentUserHistory {\n      nodes {\n        id\n        history\n        createdAt\n      }\n    }\n  }\n",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};

/***/ }),

/***/ "./lib/doctorError.js":
/*!****************************!*\
  !*** ./lib/doctorError.js ***!
  \****************************/
/*! exports provided: doctorError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doctorError", function() { return doctorError; });
const doctorError = errorString => {
  let fixedString;
  fixedString = errorString.replace('GraphQL error: ', '');

  if (fixedString.includes('permission denied for table item')) {
    fixedString = fixedString.replace('permission denied for table item', "You don't have the permissions for that action.");
  }

  console.log('fixedString');
  console.log(fixedString);
  return fixedString;
};

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_React_ShoppingContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/React/ShoppingContext */ "./lib/React/ShoppingContext.js");
/* harmony import */ var _lib_React_StatusContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/React/StatusContext */ "./lib/React/StatusContext.js");
/* harmony import */ var _components_GroceryFormLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/GroceryFormLayout */ "./components/GroceryFormLayout.js");
/* harmony import */ var _components_GroceryList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/GroceryList */ "./components/GroceryList.js");
var _jsxFileName = "F:\\Work\\Projects\\Grocery List\\frontend\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// Context

 // Components




const Home = () => __jsx(_lib_React_ShoppingContext__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 3
  }
}, __jsx(_lib_React_StatusContext__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }
}, __jsx(_components_GroceryFormLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 7
  }
}), __jsx(_components_GroceryList__WEBPACK_IMPORTED_MODULE_4__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 7
  }
})));

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ 5:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\Work\Projects\Grocery List\frontend\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "@apollo/react-hooks":
/*!**************************************!*\
  !*** external "@apollo/react-hooks" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@apollo/react-hooks");

/***/ }),

/***/ "@chakra-ui/core":
/*!**********************************!*\
  !*** external "@chakra-ui/core" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@chakra-ui/core");

/***/ }),

/***/ "@emotion/styled":
/*!**********************************!*\
  !*** external "@emotion/styled" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@emotion/styled");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-icons/md":
/*!*********************************!*\
  !*** external "react-icons/md" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/md");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Hcm9jZXJ5Q2hlY2tvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Hcm9jZXJ5Rm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0dyb2NlcnlGb3JtTGF5b3V0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvR3JvY2VyeUxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9JdGVtLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTG9hZGluZy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3N0eWxlcy9zdHlsZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL1JlYWN0L1Nob3BwaW5nQ29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9saWIvUmVhY3QvU3RhdHVzQ29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9saWIvUmVhY3QvVXNlckNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2Fwb2xsby9tdXRhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2Fwb2xsby9xdWVyaWVzLmpzIiwid2VicGFjazovLy8uL2xpYi9kb2N0b3JFcnJvci5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXBvbGxvL3JlYWN0LWhvb2tzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGNoYWtyYS11aS9jb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGVtb3Rpb24vc3R5bGVkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianMtY29va2llXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWljb25zL21kXCIiXSwibmFtZXMiOlsiR3JvY2VyeUNoZWNrb3V0IiwiaXNDYWxsaW5nIiwic2V0SXNDYWxsaW5nIiwidXNlU3RhdGUiLCJzdGF0dXMiLCJ1c2VDb250ZXh0IiwiU3RhdHVzQ29udGV4dCIsImFkZFRvSGlzdG9yeSIsInVzZU11dGF0aW9uIiwiQUREX1RPX0hJU1RPUllfTVVUQVRJT04iLCJoYW5kbGVDaGVja291dCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImlucHV0IiwicHJvZHVjdHMiLCJ2YXJpYWJsZXMiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJHcm9jZXJ5Rm9ybSIsInByb2R1Y3RSZWYiLCJ1c2VSZWYiLCJxdWFudGl0eVJlZiIsImFkZEl0ZW0iLCJBRERfSVRFTV9NVVRBVElPTiIsImhhbmRsZVN1Ym1pdCIsInByb2R1Y3QiLCJjdXJyZW50IiwidmFsdWUiLCJxdWFudGl0eSIsInBhcnNlSW50Iiwib3B0aW1pc3RpY1Jlc3BvbnNlIiwiX190eXBlbmFtZSIsIml0ZW0iLCJpZCIsIk1hdGgiLCJyb3VuZCIsInJhbmRvbSIsInVwZGF0ZSIsImNhY2hlIiwiZGF0YSIsImN1cnJlbnRVc2VySXRlbXMiLCJyZWFkUXVlcnkiLCJxdWVyeSIsIlVTRVJTX0lURU1TX1FVRVJZIiwibm9kZXMiLCJ3cml0ZVF1ZXJ5IiwiZm9jdXMiLCJNZEFkZFNob3BwaW5nQ2FydCIsIkdyb2NlcnlGb3JtTGF5b3V0IiwidXNlciIsIlVzZXJDb250ZXh0IiwiaXNTaG9wcGluZyIsInNldElzU2hvcHBpbmciLCJTaG9wcGluZ0NvbnRleHQiLCJ1c2VFZmZlY3QiLCJSb3V0ZXIiLCJwdXNoIiwiaGFuZGxlQ2xpY2siLCJNZFJlY2VpcHQiLCJHcm9jZXJ5TGlzdCIsInRvYXN0IiwidXNlVG9hc3QiLCJsb2FkaW5nIiwidXNlUXVlcnkiLCJkZWxldGVJdGVtIiwiZGVsZXRlUmVzcG9uc2UiLCJSRU1PVkVfSVRFTV9NVVRBVElPTiIsImZpbHRlciIsIm5vZGUiLCJkZXNjcmlwdGlvbiIsImR1cmF0aW9uIiwiaXNDbG9zYWJsZSIsImRvY3RvckVycm9yIiwibWVzc2FnZSIsImxlbmd0aCIsImxpc3QiLCJtYXAiLCJJdGVtIiwiaXNTZWxlY3RlZCIsInNldElzU2VsZWN0ZWQiLCJyZW1vdmVGcm9tSGlzdG9yeSIsImNoYW5nZVN0YXR1cyIsInBheWxvYWQiLCJNZFJlbW92ZUNpcmNsZU91dGxpbmUiLCJNZExhYmVsIiwiTWRMYWJlbE91dGxpbmUiLCJIaXN0b3J5TG9hZCIsIkdyb2NlcnlMaXN0TG9hZCIsIkxvYWRpbmciLCJwYXRobmFtZSIsInVzZVJvdXRlciIsIlN0eWxlZEJ1dHRvbiIsInN0eWxlZCIsIkljb25CdXR0b24iLCJTdHlsZWRJbnB1dCIsIklucHV0IiwiU3R5bGVkSW5wdXRQVyIsIlN0eWxlQWNjSGVhZGVyIiwiQWNjb3JkaW9uSGVhZGVyIiwiY3JlYXRlQ29udGV4dCIsIlNob3BwaW5nIiwicHJvcHMiLCJjaGlsZHJlbiIsIlN0YXR1cyIsIkNvbXBvbmVudCIsInNldFN0YXRlIiwic3RhdGUiLCJyZW5kZXIiLCJVc2VyIiwic2V0VXNlciIsIkNvb2tpZXMiLCJnZXQiLCJTSUdOSU5fVVNFUl9NVVRBVElPTiIsIlJFR0lTVEVSX1VTRVJfTVVUQVRJT04iLCJVU0VSX0hJU1RPUllfUVVFUlkiLCJlcnJvclN0cmluZyIsImZpeGVkU3RyaW5nIiwicmVwbGFjZSIsImluY2x1ZGVzIiwiSG9tZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFB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ckYsaUJBQWlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBdkI7QUFZQSxNQUFNMkMsb0JBQW9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBQTFCO0FBVUEsTUFBTTdELHVCQUF1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUE3QjtBQVVBLE1BQU0yRyxvQkFBb0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBMUI7QUFRQSxNQUFNQyxzQkFBc0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBNUIsQzs7Ozs7Ozs7Ozs7O0FDeENQO0FBQUE7QUFBQTtBQUFPLE1BQU10RSxpQkFBaUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUF2QjtBQVlBLE1BQU11RSxrQkFBa0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUF4QixDOzs7Ozs7Ozs7Ozs7QUNkUDtBQUFBO0FBQU8sTUFBTTFDLFdBQVcsR0FBSTJDLFdBQUQsSUFBaUI7QUFDMUMsTUFBSUMsV0FBSjtBQUVBQSxhQUFXLEdBQUdELFdBQVcsQ0FBQ0UsT0FBWixDQUFvQixpQkFBcEIsRUFBdUMsRUFBdkMsQ0FBZDs7QUFFQSxNQUFJRCxXQUFXLENBQUNFLFFBQVosQ0FBcUIsa0NBQXJCLENBQUosRUFBOEQ7QUFDNURGLGVBQVcsR0FBR0EsV0FBVyxDQUFDQyxPQUFaLENBQ1osa0NBRFksRUFFWixpREFGWSxDQUFkO0FBSUQ7O0FBRUR4RyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxhQUFaO0FBQ0FELFNBQU8sQ0FBQ0MsR0FBUixDQUFZc0csV0FBWjtBQUVBLFNBQU9BLFdBQVA7QUFDRCxDQWhCTSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQVA7QUFDQTtDQUdBOztBQUNBO0FBQ0E7O0FBRUEsTUFBTUcsSUFBSSxHQUFHLE1BQ1gsTUFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0UsTUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0UsTUFBQyxxRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBREYsRUFFRSxNQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFGRixDQURGLENBREY7O0FBU2VBLG1FQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJBLGdEOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDJDIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA1KTtcbiIsIi8vIERlcGVuZGVuY2llc1xuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gJ0BhcG9sbG8vcmVhY3QtaG9va3MnO1xuXG4vLyBTdHlsZXNcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ0BjaGFrcmEtdWkvY29yZSc7XG5cbi8vIEFwb2xsb1xuaW1wb3J0IHsgQUREX1RPX0hJU1RPUllfTVVUQVRJT04gfSBmcm9tICcuLi9saWIvYXBvbGxvL211dGF0aW9ucyc7XG5cbi8vIFJlYWN0XG5pbXBvcnQgeyBTdGF0dXNDb250ZXh0IH0gZnJvbSAnLi4vbGliL1JlYWN0L1N0YXR1c0NvbnRleHQnO1xuXG5jb25zdCBHcm9jZXJ5Q2hlY2tvdXQgPSAoKSA9PiB7XG4gIC8vIEhvb2tzICsgQ29udGV4dHNcbiAgY29uc3QgW2lzQ2FsbGluZywgc2V0SXNDYWxsaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgeyBzdGF0dXMgfSA9IHVzZUNvbnRleHQoU3RhdHVzQ29udGV4dCk7XG5cbiAgLy8gQXBvbGxvXG4gIGNvbnN0IFthZGRUb0hpc3RvcnldID0gdXNlTXV0YXRpb24oQUREX1RPX0hJU1RPUllfTVVUQVRJT04pO1xuXG4gIC8vIEhhbmRsZXJzXG4gIGNvbnN0IGhhbmRsZUNoZWNrb3V0ID0gYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgc2V0SXNDYWxsaW5nKHRydWUpO1xuXG4gICAgY29uc3QgaW5wdXQgPSB7IHByb2R1Y3RzOiBzdGF0dXMgfTtcblxuICAgIHRyeSB7XG4gICAgICBhd2FpdCBhZGRUb0hpc3Rvcnkoe1xuICAgICAgICB2YXJpYWJsZXM6IHsgaW5wdXQgfVxuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZXJyb3IpKSk7XG4gICAgfVxuXG4gICAgc2V0SXNDYWxsaW5nKGZhbHNlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxmb3JtIG1ldGhvZD1cInBvc3RcIiBvblN1Ym1pdD17aGFuZGxlQ2hlY2tvdXR9PlxuICAgICAgPEJ1dHRvblxuICAgICAgICB0eXBlPVwic3VtYml0XCJcbiAgICAgICAgdmFyaWFudENvbG9yPVwiYmx1ZVwiXG4gICAgICAgIGFsaWduU2VsZj1cImNlbnRlclwiXG4gICAgICAgIHdpZHRoPVwiMzUlXCJcbiAgICAgICAgbWF4V2lkdGg9XCIzMDBweFwiXG4gICAgICAgIG1hcmdpbkJvdHRvbT1cIjJyZW1cIlxuICAgICAgICBpc0xvYWRpbmc9e2lzQ2FsbGluZ31cbiAgICAgICAgaXNEaXNhYmxlZD17aXNDYWxsaW5nfVxuICAgICAgICBhaXJhLWJ1c3k9e2lzQ2FsbGluZ31cbiAgICAgICAgYXJpYS1sYWJlbD17YENoZWNrb3V0IHRoZSBzZWxlY3RlZCBpdGVtc2B9XG4gICAgICA+XG4gICAgICAgIENoZWNrb3V0XG4gICAgICA8L0J1dHRvbj5cbiAgICA8L2Zvcm0+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHcm9jZXJ5Q2hlY2tvdXQ7XG4iLCIvLyBEZXBlbmRlbmNpZXNcbmltcG9ydCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gJ0BhcG9sbG8vcmVhY3QtaG9va3MnO1xuXG4vLyBTdHlsZXNcbmltcG9ydCB7IEJveCwgRmxleCwgR3JpZCB9IGZyb20gJ0BjaGFrcmEtdWkvY29yZSc7XG5pbXBvcnQgeyBNZEFkZFNob3BwaW5nQ2FydCB9IGZyb20gJ3JlYWN0LWljb25zL21kJztcblxuLy8gSGVscGVyc1xuaW1wb3J0IHsgVVNFUlNfSVRFTVNfUVVFUlkgfSBmcm9tICcuLi9saWIvYXBvbGxvL3F1ZXJpZXMnO1xuaW1wb3J0IHsgQUREX0lURU1fTVVUQVRJT04gfSBmcm9tICcuLi9saWIvYXBvbGxvL211dGF0aW9ucyc7XG5pbXBvcnQgeyBTdHlsZWRCdXR0b24sIFN0eWxlZElucHV0IH0gZnJvbSAnLi9zdHlsZXMvc3R5bGVkJztcblxuY29uc3QgR3JvY2VyeUZvcm0gPSAoKSA9PiB7XG4gIC8vIEZvcm0gUmVmc1xuICBjb25zdCBwcm9kdWN0UmVmID0gdXNlUmVmKCcnKTtcbiAgY29uc3QgcXVhbnRpdHlSZWYgPSB1c2VSZWYoJycpO1xuXG4gIC8vIEhvb2tzXG4gIGNvbnN0IFtpc0NhbGxpbmcsIHNldElzQ2FsbGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgLy8gQXBvbGxvXG4gIGNvbnN0IFthZGRJdGVtXSA9IHVzZU11dGF0aW9uKEFERF9JVEVNX01VVEFUSU9OKTtcblxuICAvLyBIYW5kbGVyc1xuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBzZXRJc0NhbGxpbmcodHJ1ZSk7XG5cbiAgICBjb25zdCBpbnB1dCA9IHtcbiAgICAgIHByb2R1Y3Q6IHByb2R1Y3RSZWYuY3VycmVudC52YWx1ZSxcbiAgICAgIHF1YW50aXR5OiBwYXJzZUludChxdWFudGl0eVJlZi5jdXJyZW50LnZhbHVlKVxuICAgIH07XG5cbiAgICBhZGRJdGVtKHtcbiAgICAgIHZhcmlhYmxlczogeyBpbnB1dCB9LFxuXG4gICAgICBvcHRpbWlzdGljUmVzcG9uc2U6IHtcbiAgICAgICAgX190eXBlbmFtZTogJ011dGF0aW9uJyxcbiAgICAgICAgYWRkSXRlbToge1xuICAgICAgICAgIGl0ZW06IHtcbiAgICAgICAgICAgIGlkOiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAtMTAwMDAwMCksXG4gICAgICAgICAgICAuLi5pbnB1dFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgdXBkYXRlOiAoY2FjaGUsIHsgZGF0YTogeyBhZGRJdGVtIH0gfSkgPT4ge1xuICAgICAgICBjb25zdCB7IGN1cnJlbnRVc2VySXRlbXMgfSA9IGNhY2hlLnJlYWRRdWVyeSh7XG4gICAgICAgICAgcXVlcnk6IFVTRVJTX0lURU1TX1FVRVJZXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCB7IG5vZGVzIH0gPSBjdXJyZW50VXNlckl0ZW1zO1xuICAgICAgICBjb25zdCB7IGl0ZW0gfSA9IGFkZEl0ZW07XG5cbiAgICAgICAgY2FjaGUud3JpdGVRdWVyeSh7XG4gICAgICAgICAgcXVlcnk6IFVTRVJTX0lURU1TX1FVRVJZLFxuICAgICAgICAgIGRhdGE6IHsgY3VycmVudFVzZXJJdGVtczogeyBub2RlczogW2l0ZW0sIC4uLm5vZGVzXSB9IH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBzZXRJc0NhbGxpbmcoZmFsc2UpO1xuICAgIHByb2R1Y3RSZWYuY3VycmVudC52YWx1ZSA9ICcnO1xuICAgIHF1YW50aXR5UmVmLmN1cnJlbnQudmFsdWUgPSAnJztcblxuICAgIHByb2R1Y3RSZWYuY3VycmVudC5mb2N1cygpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEZsZXgganVzdGlmeT1cImNlbnRlclwiPlxuICAgICAgPGZvcm0gbWV0aG9kPVwicG9zdFwiIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICA8R3JpZCB0ZW1wbGF0ZUNvbHVtbnM9XCI1ZnIgMWZyXCI+XG4gICAgICAgICAgPEJveD5cbiAgICAgICAgICAgIDxTdHlsZWRJbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUHJvZHVjdFwiXG4gICAgICAgICAgICAgIGlzRGlzYWJsZWQ9e2lzQ2FsbGluZ31cbiAgICAgICAgICAgICAgcmVmPXtwcm9kdWN0UmVmfVxuICAgICAgICAgICAgICBpc1JlcXVpcmVkXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFN0eWxlZElucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlF1YW50aXR5XCJcbiAgICAgICAgICAgICAgaXNEaXNhYmxlZD17aXNDYWxsaW5nfVxuICAgICAgICAgICAgICByZWY9e3F1YW50aXR5UmVmfVxuICAgICAgICAgICAgICBpc1JlcXVpcmVkXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDxTdHlsZWRCdXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgdmFyaWFudENvbG9yPVwiYmx1ZVwiXG4gICAgICAgICAgICBpY29uPXtNZEFkZFNob3BwaW5nQ2FydH1cbiAgICAgICAgICAgIGlzTG9hZGluZz17aXNDYWxsaW5nfVxuICAgICAgICAgICAgaXNEaXNhYmxlZD17aXNDYWxsaW5nfVxuICAgICAgICAgICAgYWlyYS1idXN5PXtpc0NhbGxpbmd9XG4gICAgICAgICAgICBhaXJhLWxhYmVsPVwiQWRkIGludG8gdG8geW91ciBncm9jZXJ5IGxpc3RcIlxuICAgICAgICAgICAgaGVpZ2h0XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9mb3JtPlxuICAgIDwvRmxleD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdyb2NlcnlGb3JtO1xuIiwiLy8gRGVwZW5kZW5jaWVzXG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcblxuLy8gU3R5bGVzXG5pbXBvcnQgeyBJY29uQnV0dG9uLCBTdGFjayB9IGZyb20gJ0BjaGFrcmEtdWkvY29yZSc7XG5pbXBvcnQgeyBNZEFkZFNob3BwaW5nQ2FydCwgTWRSZWNlaXB0IH0gZnJvbSAncmVhY3QtaWNvbnMvbWQnO1xuXG4vLyBSZWFjdFxuaW1wb3J0IEdyb2NlcnlGb3JtIGZyb20gJy4vR3JvY2VyeUZvcm0nO1xuaW1wb3J0IHsgVXNlckNvbnRleHQgfSBmcm9tICcuLi9saWIvUmVhY3QvVXNlckNvbnRleHQnO1xuaW1wb3J0IHsgU2hvcHBpbmdDb250ZXh0IH0gZnJvbSAnLi4vbGliL1JlYWN0L1Nob3BwaW5nQ29udGV4dCc7XG5cbmNvbnN0IEdyb2NlcnlGb3JtTGF5b3V0ID0gKCkgPT4ge1xuICAvLyBIb29rcyArIENvbnRleHRzXG4gIGNvbnN0IHsgdXNlciB9ID0gdXNlQ29udGV4dChVc2VyQ29udGV4dCk7XG4gIGNvbnN0IHsgaXNTaG9wcGluZywgc2V0SXNTaG9wcGluZyB9ID0gdXNlQ29udGV4dChTaG9wcGluZ0NvbnRleHQpO1xuXG4gIC8vIHVzZUVmZmVjdFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIEZvcmNlIHRoZSB1c2VyIHRvIHNpZ24gaW5cbiAgICBpZiAoIXVzZXIpIFJvdXRlci5wdXNoKCcvc2lnbmluJyk7XG4gIH0sIFt1c2VyXSk7XG5cbiAgLy8gSGFuZGxlcnNcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgc2V0SXNTaG9wcGluZyghaXNTaG9wcGluZyk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8U3RhY2sgc3BhY2luZz1cIjJyZW1cIiBwYWRkaW5nQm90dG9tPVwiMnJlbVwiPlxuICAgICAgPEljb25CdXR0b25cbiAgICAgICAgdmFyaWFudENvbG9yPVwiYmx1ZVwiXG4gICAgICAgIGljb249e2lzU2hvcHBpbmcgPyBNZEFkZFNob3BwaW5nQ2FydCA6IE1kUmVjZWlwdH1cbiAgICAgICAgd2lkdGg9XCI2NSVcIlxuICAgICAgICBtYXhXaWR0aD1cIjMwMHB4XCJcbiAgICAgICAgYWxpZ25TZWxmPVwiY2VudGVyXCJcbiAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XG4gICAgICAgIGFyaWEtbGFiZWw9e2BDbGljayB0byBzd2l0Y2ggZnJvbSAke1xuICAgICAgICAgIGlzU2hvcHBpbmcgPyAnYWRkIHRvIHJlbW92ZScgOiAncmVtb3ZlIHRvIGFkZCdcbiAgICAgICAgfWB9XG4gICAgICAvPlxuICAgICAge2lzU2hvcHBpbmcgJiYgPEdyb2NlcnlGb3JtIC8+fVxuICAgIDwvU3RhY2s+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHcm9jZXJ5Rm9ybUxheW91dDtcbiIsIi8vIERlcGVuZG5lbmNpZXNcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VNdXRhdGlvbiwgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL3JlYWN0LWhvb2tzJztcblxuLy8gSGVscGVyc1xuaW1wb3J0IHsgVVNFUlNfSVRFTVNfUVVFUlkgfSBmcm9tICcuLi9saWIvYXBvbGxvL3F1ZXJpZXMnO1xuaW1wb3J0IHsgUkVNT1ZFX0lURU1fTVVUQVRJT04gfSBmcm9tICcuLi9saWIvYXBvbGxvL211dGF0aW9ucyc7XG5pbXBvcnQgeyBkb2N0b3JFcnJvciB9IGZyb20gJy4uL2xpYi9kb2N0b3JFcnJvcic7XG5cbi8vIFN0eWxlc1xuaW1wb3J0IHtcbiAgQm94LFxuICBIZWFkaW5nLFxuICBTa2VsZXRvbixcbiAgU2ltcGxlR3JpZCxcbiAgU3RhY2ssXG4gIHVzZVRvYXN0XG59IGZyb20gJ0BjaGFrcmEtdWkvY29yZSc7XG5cbi8vIFJlYWN0XG5pbXBvcnQgSXRlbSBmcm9tICcuL0l0ZW0nO1xuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi9Mb2FkaW5nJztcbmltcG9ydCB7IFNob3BwaW5nQ29udGV4dCB9IGZyb20gJy4uL2xpYi9SZWFjdC9TaG9wcGluZ0NvbnRleHQnO1xuaW1wb3J0IEdyb2NlcnlDaGVja291dCBmcm9tICcuL0dyb2NlcnlDaGVja291dCc7XG5cbmNvbnN0IEdyb2NlcnlMaXN0ID0gKCkgPT4ge1xuICAvLyBIb29rcyArIENvbnRleHRzXG4gIGNvbnN0IHRvYXN0ID0gdXNlVG9hc3QoKTtcbiAgY29uc3QgeyBpc1Nob3BwaW5nIH0gPSB1c2VDb250ZXh0KFNob3BwaW5nQ29udGV4dCk7XG5cbiAgLy8gQXBvbGxvXG4gIGNvbnN0IHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfSA9IHVzZVF1ZXJ5KFVTRVJTX0lURU1TX1FVRVJZKTtcbiAgY29uc3QgW2RlbGV0ZUl0ZW0sIGRlbGV0ZVJlc3BvbnNlXSA9IHVzZU11dGF0aW9uKFJFTU9WRV9JVEVNX01VVEFUSU9OKTtcblxuICAvLyBIYW5kbGVyc1xuICBjb25zdCBoYW5kbGVDbGljayA9IGFzeW5jIChpZCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBkZWxldGVJdGVtKHtcbiAgICAgICAgdmFyaWFibGVzOiB7IGlucHV0OiB7IGlkIH0gfSxcbiAgICAgICAgb3B0aW1pc3RpY1Jlc3BvbnNlOiB7XG4gICAgICAgICAgX190eXBlbmFtZTogJ011dGF0aW9uJyxcbiAgICAgICAgICBkZWxldGVJdGVtOiB7XG4gICAgICAgICAgICBpdGVtOiB7IGlkIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHVwZGF0ZTogKGNhY2hlLCB7IGRhdGE6IHsgZGVsZXRlSXRlbSB9IH0pID0+IHtcbiAgICAgICAgICBjb25zdCB7IGN1cnJlbnRVc2VySXRlbXMgfSA9IGNhY2hlLnJlYWRRdWVyeSh7XG4gICAgICAgICAgICBxdWVyeTogVVNFUlNfSVRFTVNfUVVFUllcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBjb25zdCB7IG5vZGVzIH0gPSBjdXJyZW50VXNlckl0ZW1zO1xuICAgICAgICAgIGNvbnN0IHsgaWQgfSA9IGRlbGV0ZUl0ZW0uaXRlbTtcblxuICAgICAgICAgIGNhY2hlLndyaXRlUXVlcnkoe1xuICAgICAgICAgICAgcXVlcnk6IFVTRVJTX0lURU1TX1FVRVJZLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICBjdXJyZW50VXNlckl0ZW1zOiB7XG4gICAgICAgICAgICAgICAgbm9kZXM6IG5vZGVzLmZpbHRlcigobm9kZSkgPT4gbm9kZS5pZCAhPT0gaWQpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIC8vIG5lZWQgdG8gY2F0Y2ggdGhlIGVycm9yLCBzbyBhIHBvcHVwIGRvZXNuJ3Qgc2hvdyB1cFxuICAgIH1cbiAgfTtcblxuICBpZiAoZXJyb3IgfHwgZGVsZXRlUmVzcG9uc2UuZXJyb3IpIHtcbiAgICBpZiAoISFlcnJvcikge1xuICAgICAgdG9hc3Qoe1xuICAgICAgICBkZXNjcmlwdGlvbjogZXJyb3IsXG4gICAgICAgIHN0YXR1czogJ2Vycm9yJyxcbiAgICAgICAgZHVyYXRpb246IDkwMDEsXG4gICAgICAgIGlzQ2xvc2FibGU6IHRydWVcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICghIWRlbGV0ZVJlc3BvbnNlLmVycm9yKSB7XG4gICAgICB0b2FzdCh7XG4gICAgICAgIGRlc2NyaXB0aW9uOiBkb2N0b3JFcnJvcihkZWxldGVSZXNwb25zZS5lcnJvci5tZXNzYWdlKSxcbiAgICAgICAgc3RhdHVzOiAnZXJyb3InLFxuICAgICAgICBkdXJhdGlvbjogOTAwMSxcbiAgICAgICAgaXNDbG9zYWJsZTogdHJ1ZVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKGxvYWRpbmcpIHJldHVybiA8TG9hZGluZyAvPjtcblxuICBpZiAoZGF0YS5jdXJyZW50VXNlckl0ZW1zPy5ub2Rlcy5sZW5ndGgpIHtcbiAgICBjb25zdCBsaXN0ID0gZGF0YS5jdXJyZW50VXNlckl0ZW1zLm5vZGVzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgeyFpc1Nob3BwaW5nICYmIDxHcm9jZXJ5Q2hlY2tvdXQgLz59XG4gICAgICAgIDxTdGFja1xuICAgICAgICAgIHdpZHRoPVwiNjAlXCJcbiAgICAgICAgICBtYXhXaWR0aD1cIjUwMHB4XCJcbiAgICAgICAgICBtaW5XaWR0aD1cIjMwMHB4XCJcbiAgICAgICAgICBtYXJnaW49XCJhdXRvXCJcbiAgICAgICAgICBzcGFjaW5nPVwiMC41cmVtXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxTaW1wbGVHcmlkIGNvbHVtbnM9XCIzXCI+XG4gICAgICAgICAgICA8SGVhZGluZyBhcz1cImg0XCIgc2l6ZT1cImxnXCI+XG4gICAgICAgICAgICAgIEl0ZW1cbiAgICAgICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgICAgIDxIZWFkaW5nIGFzPVwiaDRcIiBzaXplPVwibGdcIj5cbiAgICAgICAgICAgICAgUXVhbnRpdHlcbiAgICAgICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgICA8L1NpbXBsZUdyaWQ+XG4gICAgICAgICAgPEJveD5cbiAgICAgICAgICAgIHtsaXN0Lm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICA8SXRlbVxuICAgICAgICAgICAgICAgIGtleT17aXRlbS5pZCArIGl0ZW0ucHJvZHVjdH1cbiAgICAgICAgICAgICAgICBpZD17aXRlbS5pZH1cbiAgICAgICAgICAgICAgICBwcm9kdWN0PXtpdGVtLnByb2R1Y3R9XG4gICAgICAgICAgICAgICAgcXVhbnRpdHk9e2l0ZW0ucXVhbnRpdHl9XG4gICAgICAgICAgICAgICAgaGFuZGxlQ2xpY2s9e2hhbmRsZUNsaWNrfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvU3RhY2s+XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxIZWFkaW5nIGFzPVwiaDRcIiBzaXplPVwibGdcIj5cbiAgICAgICAgUmVtZW1iZXIgdG8gYWRkIHRvIHlvdXIgbGlzdC4g8J+TnVxuICAgICAgPC9IZWFkaW5nPlxuICAgICk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdyb2NlcnlMaXN0O1xuIiwiLy8gRGVwZW5kZW5jaWVzXG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuLy8gU3R5bGVzXG5pbXBvcnQgeyBGbGV4LCBJY29uQnV0dG9uLCBTaW1wbGVHcmlkLCBUZXh0IH0gZnJvbSAnQGNoYWtyYS11aS9jb3JlJztcbmltcG9ydCB7IE1kUmVtb3ZlQ2lyY2xlT3V0bGluZSwgTWRMYWJlbCwgTWRMYWJlbE91dGxpbmUgfSBmcm9tICdyZWFjdC1pY29ucy9tZCc7XG5cbi8vIFJlYWN0XG5pbXBvcnQgeyBTaG9wcGluZ0NvbnRleHQgfSBmcm9tICcuLi9saWIvUmVhY3QvU2hvcHBpbmdDb250ZXh0JztcbmltcG9ydCB7IFN0YXR1c0NvbnRleHQgfSBmcm9tICcuLi9saWIvUmVhY3QvU3RhdHVzQ29udGV4dCc7XG5cbmNvbnN0IEl0ZW0gPSAoeyBpZCwgcHJvZHVjdCwgcXVhbnRpdHksIGhhbmRsZUNsaWNrIH0pID0+IHtcbiAgLy8gSG9va3MgKyBDb250ZXh0c1xuICBjb25zdCBbaXNTZWxlY3RlZCwgc2V0SXNTZWxlY3RlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHsgYWRkVG9IaXN0b3J5LCByZW1vdmVGcm9tSGlzdG9yeSB9ID0gdXNlQ29udGV4dChTdGF0dXNDb250ZXh0KTtcbiAgY29uc3QgeyBpc1Nob3BwaW5nIH0gPSB1c2VDb250ZXh0KFNob3BwaW5nQ29udGV4dCk7XG5cbiAgLy8gSGFuZGxlcnNcbiAgY29uc3QgY2hhbmdlU3RhdHVzID0gKHBheWxvYWQpID0+IHtcbiAgICBpZiAoaXNTZWxlY3RlZCkgcmVtb3ZlRnJvbUhpc3RvcnkoaWQpO1xuICAgIGVsc2UgYWRkVG9IaXN0b3J5KHBheWxvYWQpO1xuXG4gICAgc2V0SXNTZWxlY3RlZCghaXNTZWxlY3RlZCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8U2ltcGxlR3JpZCBjb2x1bW5zPVwiM1wiIHBhZGRpbmdCb3R0b209XCIwLjI1cmVtXCI+XG4gICAgICA8VGV4dCBhbGlnblNlbGY9XCJjZW50ZXJcIiBhcz1cImJcIj5cbiAgICAgICAge3Byb2R1Y3R9XG4gICAgICA8L1RleHQ+XG4gICAgICA8VGV4dCBhbGlnblNlbGY9XCJjZW50ZXJcIiBhcz1cImJcIj5cbiAgICAgICAge3F1YW50aXR5fVxuICAgICAgPC9UZXh0PlxuICAgICAgPEZsZXgganVzdGlmeT1cImNlbnRlclwiPlxuICAgICAgICB7aXNTaG9wcGluZyA/IChcbiAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICAgIHZhcmlhbnRDb2xvcj1cImJsdWVcIlxuICAgICAgICAgICAgaWNvbj17TWRSZW1vdmVDaXJjbGVPdXRsaW5lfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soaWQpfVxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkNsaWNrIHRvIHJlbW92ZSBmcm9tIGxpc3RcIlxuICAgICAgICAgIC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgICB2YXJpYW50Q29sb3I9XCJibHVlXCJcbiAgICAgICAgICAgIGljb249e2lzU2VsZWN0ZWQgPyBNZExhYmVsIDogTWRMYWJlbE91dGxpbmV9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VTdGF0dXMoeyBpZCwgcHJvZHVjdCwgcXVhbnRpdHkgfSl9XG4gICAgICAgICAgICBhcmlhLWxhYmVsPXtgQ2xpY2sgdG8gJHtpc1NlbGVjdGVkICYmICdkZSd9c2VsZWN0YH1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgPC9GbGV4PlxuICAgIDwvU2ltcGxlR3JpZD5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBJdGVtO1xuIiwiLy8gRGVwZW5kZW5jaWVzXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5cbi8vIFN0eWxlc1xuaW1wb3J0IHtcbiAgQWNjb3JkaW9uSWNvbixcbiAgQWNjb3JkaW9uSXRlbSxcbiAgQWNjb3JkaW9uSGVhZGVyLFxuICBBY2NvcmRpb25QYW5lbCxcbiAgQm94LFxuICBTa2VsZXRvbixcbiAgU3RhY2ssXG4gIFRleHRcbn0gZnJvbSAnQGNoYWtyYS11aS9jb3JlJztcblxuY29uc3QgSGlzdG9yeUxvYWQgPSAoKSA9PiAoXG4gIDxTa2VsZXRvbiBib3JkZXJSYWRpdXM9XCIxcmVtXCI+XG4gICAgPEFjY29yZGlvbkl0ZW0+XG4gICAgICA8QWNjb3JkaW9uSGVhZGVyPlxuICAgICAgICA8Qm94IGZsZXg9XCIxXCIgdGV4dEFsaWduPVwibGVmdFwiPlxuICAgICAgICAgIDxUZXh0PlllczwvVGV4dD5cbiAgICAgICAgICA8VGV4dD5ZZXM8L1RleHQ+XG4gICAgICAgIDwvQm94PlxuICAgICAgICA8QWNjb3JkaW9uSWNvbiAvPlxuICAgICAgPC9BY2NvcmRpb25IZWFkZXI+XG4gICAgICA8QWNjb3JkaW9uUGFuZWwgcGI9ezR9PjwvQWNjb3JkaW9uUGFuZWw+XG4gICAgPC9BY2NvcmRpb25JdGVtPlxuICA8L1NrZWxldG9uPlxuKTtcblxuY29uc3QgR3JvY2VyeUxpc3RMb2FkID0gKCkgPT4gKFxuICA8U2tlbGV0b24gYm9yZGVyUmFkaXVzPVwiMXJlbVwiPlBsYWNlaG9sZGVyPC9Ta2VsZXRvbj5cbik7XG5cbmNvbnN0IExvYWRpbmcgPSAoKSA9PiB7XG4gIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHVzZVJvdXRlcigpO1xuXG4gIGlmIChwYXRobmFtZSA9PT0gJy9oaXN0b3J5Jykge1xuICAgIHJldHVybiAoXG4gICAgICA8U3RhY2tcbiAgICAgICAgd2lkdGg9XCI2MCVcIlxuICAgICAgICBtYXhXaWR0aD1cIjUwMHB4XCJcbiAgICAgICAgbWluV2lkdGg9XCIzMDBweFwiXG4gICAgICAgIG1hcmdpbj1cImF1dG9cIlxuICAgICAgICBzcGFjaW5nPVwiMC41cmVtXCJcbiAgICAgID5cbiAgICAgICAgPEJveD5cbiAgICAgICAgICA8SGlzdG9yeUxvYWQgLz5cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIDxCb3g+XG4gICAgICAgICAgPEhpc3RvcnlMb2FkIC8+XG4gICAgICAgIDwvQm94PlxuICAgICAgICA8Qm94PlxuICAgICAgICAgIDxIaXN0b3J5TG9hZCAvPlxuICAgICAgICA8L0JveD5cbiAgICAgICAgPEJveD5cbiAgICAgICAgICA8SGlzdG9yeUxvYWQgLz5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L1N0YWNrPlxuICAgICk7XG4gIH1cblxuICBpZiAocGF0aG5hbWUgPT09ICcvJykge1xuICAgIHJldHVybiAoXG4gICAgICA8U3RhY2tcbiAgICAgICAgd2lkdGg9XCI2MCVcIlxuICAgICAgICBtYXhXaWR0aD1cIjUwMHB4XCJcbiAgICAgICAgbWluV2lkdGg9XCIzMDBweFwiXG4gICAgICAgIG1hcmdpbj1cImF1dG9cIlxuICAgICAgICBzcGFjaW5nPVwiMC41cmVtXCJcbiAgICAgID5cbiAgICAgICAgPEJveD5cbiAgICAgICAgICA8R3JvY2VyeUxpc3RMb2FkIC8+XG4gICAgICAgIDwvQm94PlxuICAgICAgICA8Qm94PlxuICAgICAgICAgIDxHcm9jZXJ5TGlzdExvYWQgLz5cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIDxCb3g+XG4gICAgICAgICAgPEdyb2NlcnlMaXN0TG9hZCAvPlxuICAgICAgICA8L0JveD5cbiAgICAgICAgPEJveD5cbiAgICAgICAgICA8R3JvY2VyeUxpc3RMb2FkIC8+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9TdGFjaz5cbiAgICApO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMb2FkaW5nO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IHsgQWNjb3JkaW9uSGVhZGVyLCBJY29uQnV0dG9uLCBJbnB1dCB9IGZyb20gJ0BjaGFrcmEtdWkvY29yZSc7XG5cbmV4cG9ydCBjb25zdCBTdHlsZWRCdXR0b24gPSBzdHlsZWQoSWNvbkJ1dHRvbilgXG4gIDpkaXNhYmxlZCB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IFN0eWxlZElucHV0ID0gc3R5bGVkKElucHV0KWBcbiAgOmRpc2FibGVkIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgU3R5bGVkSW5wdXRQVyA9IHN0eWxlZChJbnB1dClgXG4gIDpkaXNhYmxlZCB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IFN0eWxlQWNjSGVhZGVyID0gc3R5bGVkKEFjY29yZGlvbkhlYWRlcilgXG4gIDpmb2N1cyB7XG4gICAgb3V0bGluZTogMCAhaW1wb3J0YW50O1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAgcmdiYSgwLCAwLCAwLCAwKSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiB0cmFuc3BhcmVudDtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogdHJhbnNwYXJlbnQ7XG4gIC1raHRtbC11c2VyLXNlbGVjdDogdHJhbnNwYXJlbnQ7XG4gIC1tb3otdXNlci1zZWxlY3Q6IHRyYW5zcGFyZW50O1xuICAtbXMtdXNlci1zZWxlY3Q6IHRyYW5zcGFyZW50O1xuICB1c2VyLXNlbGVjdDogdHJhbnNwYXJlbnQ7XG5gO1xuIiwiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFNob3BwaW5nQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30pO1xuXG5jb25zdCBTaG9wcGluZyA9IChwcm9wcykgPT4ge1xuICBjb25zdCBbaXNTaG9wcGluZywgc2V0SXNTaG9wcGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICByZXR1cm4gKFxuICAgIDxTaG9wcGluZ0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgaXNTaG9wcGluZywgc2V0SXNTaG9wcGluZyB9fT5cbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8L1Nob3BwaW5nQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNob3BwaW5nO1xuXG5leHBvcnQgeyBTaG9wcGluZ0NvbnRleHQgfTtcbiIsImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgU3RhdHVzQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30pO1xuXG5jbGFzcyBTdGF0dXMgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0ZSA9IHsgc3RhdHVzOiBbXSB9O1xuXG4gIGFkZFRvSGlzdG9yeSA9IChwYXlsb2FkKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHN0YXR1czogW3BheWxvYWQsIC4uLnRoaXMuc3RhdGUuc3RhdHVzXSB9KTtcbiAgfTtcblxuICByZW1vdmVGcm9tSGlzdG9yeSA9IChpZCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc3RhdHVzOiB0aGlzLnN0YXRlLnN0YXR1cy5maWx0ZXIoKGl0ZW0pID0+IGlkICE9PSBpdGVtLmlkKVxuICAgIH0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGFkZFRvSGlzdG9yeSwgcmVtb3ZlRnJvbUhpc3RvcnkgfSA9IHRoaXM7XG4gICAgY29uc3QgeyBzdGF0dXMgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgdmFsdWUgPSB7IHN0YXR1cywgYWRkVG9IaXN0b3J5LCByZW1vdmVGcm9tSGlzdG9yeSB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxTdGF0dXNDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt2YWx1ZX0+XG4gICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgPC9TdGF0dXNDb250ZXh0LlByb3ZpZGVyPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RhdHVzO1xuXG5leHBvcnQgeyBTdGF0dXNDb250ZXh0IH07XG4iLCJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XG5cbmNvbnN0IFVzZXJDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSk7XG5cbmNvbnN0IFVzZXIgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoISFDb29raWVzLmdldCgnZ3JvY2VyeWxpc3RfYXV0aF90b2tlbicpKTtcblxuICByZXR1cm4gKFxuICAgIDxVc2VyQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyB1c2VyLCBzZXRVc2VyIH19PlxuICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgIDwvVXNlckNvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBVc2VyO1xuXG5leHBvcnQgeyBVc2VyQ29udGV4dCB9O1xuIiwiaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG5cbmV4cG9ydCBjb25zdCBBRERfSVRFTV9NVVRBVElPTiA9IGdxbGBcbiAgbXV0YXRpb24gQUREX0lURU1fTVVUQVRJT04oJGlucHV0OiBBZGRJdGVtSW5wdXQhKSB7XG4gICAgYWRkSXRlbShpbnB1dDogJGlucHV0KSB7XG4gICAgICBpdGVtIHtcbiAgICAgICAgaWRcbiAgICAgICAgcHJvZHVjdFxuICAgICAgICBxdWFudGl0eVxuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IFJFTU9WRV9JVEVNX01VVEFUSU9OID0gZ3FsYFxuICBtdXRhdGlvbiBSRU1PVkVfSVRFTV9NVVRBVElPTigkaW5wdXQ6IERlbGV0ZUl0ZW1JbnB1dCEpIHtcbiAgICBkZWxldGVJdGVtKGlucHV0OiAkaW5wdXQpIHtcbiAgICAgIGl0ZW0ge1xuICAgICAgICBpZFxuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IEFERF9UT19ISVNUT1JZX01VVEFUSU9OID0gZ3FsYFxuICBtdXRhdGlvbiBBRERfVE9fSElTVE9SWV9NVVRBVElPTigkaW5wdXQ6IEFkZFRvSGlzdG9yeUlucHV0ISkge1xuICAgIGFkZFRvSGlzdG9yeShpbnB1dDogJGlucHV0KSB7XG4gICAgICBoaXN0b3J5IHtcbiAgICAgICAgaGlzdG9yeVxuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IFNJR05JTl9VU0VSX01VVEFUSU9OID0gZ3FsYFxuICBtdXRhdGlvbiBTSUdOSU5fVVNFUl9NVVRBVElPTigkaW5wdXQ6IEF1dGhlbnRpY2F0ZUlucHV0ISkge1xuICAgIGF1dGhlbnRpY2F0ZShpbnB1dDogJGlucHV0KSB7XG4gICAgICBqd3RUb2tlblxuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IFJFR0lTVEVSX1VTRVJfTVVUQVRJT04gPSBncWxgXG4gIG11dGF0aW9uIFJFR0lTVEVSX1VTRVJfTVVUQVRJT04oJGlucHV0OiBSZWdpc3RlclVzZXJJbnB1dCEpIHtcbiAgICByZWdpc3RlclVzZXIoaW5wdXQ6ICRpbnB1dCkge1xuICAgICAgdXNlciB7XG4gICAgICAgIGRpc3BsYXluYW1lXG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuIiwiaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG5cbmV4cG9ydCBjb25zdCBVU0VSU19JVEVNU19RVUVSWSA9IGdxbGBcbiAgcXVlcnkgVVNFUlNfSVRFTVNfUVVFUlkge1xuICAgIGN1cnJlbnRVc2VySXRlbXMge1xuICAgICAgbm9kZXMge1xuICAgICAgICBpZFxuICAgICAgICBwcm9kdWN0XG4gICAgICAgIHF1YW50aXR5XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgVVNFUl9ISVNUT1JZX1FVRVJZID0gZ3FsYFxuICBxdWVyeSBVU0VSX0hJU1RPUllfUVVFUlkge1xuICAgIGN1cnJlbnRVc2VySGlzdG9yeSB7XG4gICAgICBub2RlcyB7XG4gICAgICAgIGlkXG4gICAgICAgIGhpc3RvcnlcbiAgICAgICAgY3JlYXRlZEF0XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuIiwiZXhwb3J0IGNvbnN0IGRvY3RvckVycm9yID0gKGVycm9yU3RyaW5nKSA9PiB7XG4gIGxldCBmaXhlZFN0cmluZztcblxuICBmaXhlZFN0cmluZyA9IGVycm9yU3RyaW5nLnJlcGxhY2UoJ0dyYXBoUUwgZXJyb3I6ICcsICcnKTtcblxuICBpZiAoZml4ZWRTdHJpbmcuaW5jbHVkZXMoJ3Blcm1pc3Npb24gZGVuaWVkIGZvciB0YWJsZSBpdGVtJykpIHtcbiAgICBmaXhlZFN0cmluZyA9IGZpeGVkU3RyaW5nLnJlcGxhY2UoXG4gICAgICAncGVybWlzc2lvbiBkZW5pZWQgZm9yIHRhYmxlIGl0ZW0nLFxuICAgICAgXCJZb3UgZG9uJ3QgaGF2ZSB0aGUgcGVybWlzc2lvbnMgZm9yIHRoYXQgYWN0aW9uLlwiXG4gICAgKTtcbiAgfVxuXG4gIGNvbnNvbGUubG9nKCdmaXhlZFN0cmluZycpO1xuICBjb25zb2xlLmxvZyhmaXhlZFN0cmluZyk7XG5cbiAgcmV0dXJuIGZpeGVkU3RyaW5nO1xufTtcbiIsIi8vIENvbnRleHRcbmltcG9ydCBTaG9wcGluZyBmcm9tICcuLi9saWIvUmVhY3QvU2hvcHBpbmdDb250ZXh0JztcbmltcG9ydCBTdGF0dXMgZnJvbSAnLi4vbGliL1JlYWN0L1N0YXR1c0NvbnRleHQnO1xuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQgR3JvY2VyeUZvcm1MYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9Hcm9jZXJ5Rm9ybUxheW91dCc7XG5pbXBvcnQgR3JvY2VyeUxpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9Hcm9jZXJ5TGlzdCc7XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiAoXG4gIDxTaG9wcGluZz5cbiAgICA8U3RhdHVzPlxuICAgICAgPEdyb2NlcnlGb3JtTGF5b3V0IC8+XG4gICAgICA8R3JvY2VyeUxpc3QgLz5cbiAgICA8L1N0YXR1cz5cbiAgPC9TaG9wcGluZz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXBvbGxvL3JlYWN0LWhvb2tzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBjaGFrcmEtdWkvY29yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZW1vdGlvbi9zdHlsZWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianMtY29va2llXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zL21kXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=