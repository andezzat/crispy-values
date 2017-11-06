import React from 'react';
import cx from 'classnames';

export default class Navbar extends React.Component {
  static defaultProps = {
    navbarCx: cx(
      'navbar',
      'navbar-expand-lg',
      'navbar-dark',
      'bg-transparent',
    ),
  };

  render() {
    const containerCx = cx(
      'container',
      'no-override',
    )

    return (
      <nav className={this.props.navbarCx} role="navigation" id={this.props.id}>
        <div className={containerCx}>
          {this.props.children}
        </div>
      </nav>
    );
  }
}
