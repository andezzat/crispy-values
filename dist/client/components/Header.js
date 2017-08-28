'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Navbar = require('../../../lib/bootstrap/components/Navbar.jsx');

var _Navbar2 = _interopRequireDefault(_Navbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      var navbarProps = {};
      navbarProps.colors = {};

      var navPills = (0, _classnames2.default)('nav', 'nav-pills', 'float-right');

      var names = ['Home', 'About', 'Contact'];

      var navItems = names.map(function (name) {
        if (name === 'Home') {
          return _react2.default.createElement(
            'li',
            { className: 'nav-item' },
            _react2.default.createElement(
              'a',
              { className: 'nav-link active', href: '#' },
              name
            )
          );
        } else {
          return _react2.default.createElement(
            'li',
            { className: 'nav-item' },
            _react2.default.createElement(
              'a',
              { className: 'nav-link', href: '#' },
              name
            )
          );
        }
      });

      return _react2.default.createElement(
        'div',
        { className: 'header' },
        _react2.default.createElement(
          'nav',
          null,
          _react2.default.createElement(
            'ul',
            { className: navPills },
            navItems
          )
        ),
        _react2.default.createElement(
          'h3',
          { className: 'text-muted' },
          'Values Footprints'
        )
      );
    }
  }]);

  return Header;
}(_react2.default.Component);

exports.default = Header;