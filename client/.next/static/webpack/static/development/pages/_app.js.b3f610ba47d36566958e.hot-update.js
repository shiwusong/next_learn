webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./store/todo.js":
/*!***********************!*\
  !*** ./store/todo.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  state: {
    tasks: ['default']
  },
  dispatchers: {
    addTasks: function addTasks(_ref, _ref2) {
      var state = _ref.state;
      var new_tasks = _ref2.new_tasks;
      state.tasks.push(new_tasks);
    }
  }
};

/***/ })

})
//# sourceMappingURL=_app.js.b3f610ba47d36566958e.hot-update.js.map