webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./sw-store/connect.js":
/*!*****************************!*\
  !*** ./sw-store/connect.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./context */ "./sw-store/context.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



/* harmony default export */ __webpack_exports__["default"] = (function (mapStateToProps, mapDispatchToProps) {
  return function (Comp) {
    return function (props) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_context__WEBPACK_IMPORTED_MODULE_1__["Consumer"], null, function (context) {
        console.log(context);
        var state = context.state,
            dispatchers = context.dispatchers;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Comp, _extends({}, props, mapStateToProps(state), mapDispatchToProps(dispatchers)));
      });
    };
  };
});

/***/ })

})
//# sourceMappingURL=_app.js.3e69a0369e455b319056.hot-update.js.map