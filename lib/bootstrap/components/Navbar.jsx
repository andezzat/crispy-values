import React from 'react';
import PropTypes from 'prop-types';
import { colors } from '../constants';
import cx from 'classnames';

export default class Navbar extends React.Component {
  render() {
    const navbarClasses = cx({
      'navbar': true,
      [`bg-${this.props.colors.background}`]: this.props.colors.background,
      [`navbar-${this.props.colors.navbar}`]: this.props.colors.navbar,
    });

    return (
      <nav className={navbarClasses}>
        {this.props.brand ? <a className='navbar-brand' href={this.props.brand.href}>{this.props.brand.text}</a> : null}
        {this.props.children}
      </nav>
    );
  }
}

Navbar.propTypes = {
  colors: PropTypes.shape({
    background: PropTypes.oneOf(colors.default),
    navbar: PropTypes.oneOf(colors.default),
  }),
  brand: PropTypes.shape({
    text: PropTypes.string,
    href: PropTypes.string,
  }),
};
