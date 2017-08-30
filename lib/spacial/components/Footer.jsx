import React, { Component } from 'react';
import cx from 'classnames';

export default class Footer extends Component {
  render() {
    const footerClasses = cx({
      'footer': true,
      'footer--light': this.props.style === 'light'
    });

    return (
      <footer className={footerClasses}>
        <div className="container">
          {this.props.children}
        </div>
      </footer>
    );
  }
}
