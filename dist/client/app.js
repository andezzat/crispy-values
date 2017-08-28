'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _BrowserRouter = require('react-router-dom/BrowserRouter');

var _BrowserRouter2 = _interopRequireDefault(_BrowserRouter);

var _reactRouterConfig = require('react-router-config');

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import reducers from './modules';

var store = (0, _redux.createStore)(reducers, window.__INITIAL_STATE__, (0, _redux.applyMiddleware)(_reduxThunk2.default));

var AppRouter = function AppRouter() {
  return _react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(
      _BrowserRouter2.default,
      null,
      (0, _reactRouterConfig.renderRoutes)(_routes2.default)
    )
  );
};

(0, _reactDom.render)(_react2.default.createElement(AppRouter, null), document.querySelector('#app'));