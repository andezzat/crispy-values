import React from 'react';
import cx from 'classnames';

export default class Navbar extends React.Component {
  render() {
    const navbarClasses = cx(
      'navbar',
      'navbar-expand-lg',
      'navbar-dark',
      'bg-transparent',
    );
    const containerClasses = cx(
      'container',
      'no-override',
    )

    return (
      <nav className={navbarClasses} role="navigation">
        <div className={containerClasses}>
          {this.props.children}
        </div>
      </nav>
    );
  }
}
