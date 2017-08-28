'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _App = require('./components/App.jsx');

var _App2 = _interopRequireDefault(_App);

var _Home = require('./Pages/Home.jsx');

var _Home2 = _interopRequireDefault(_Home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = [{ component: _App2.default,
  routes: [{ path: '/',
    exact: true,
    component: _Home2.default
  }, { path: '/home',
    component: _Home2.default
  }]
}];

exports.default = routes;