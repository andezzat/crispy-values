import React from 'react';
import cx from 'classnames';

import Navbar from '../../lib/bootstrap/components/Navbar.jsx';

export default class Header extends React.Component {
  render() {
    const navbarProps = {};
    navbarProps.colors = {};

    const navPills = cx(
      'nav',
      'nav-pills',
      'float-right',
    );

    const names = [
      'Home',
      'About',
      'Contact',
    ];

    const navItems = names.map((name) => {
      if (name === 'Home') {
        return <li className="nav-item"><a className="nav-link active" href="#">{name}</a></li>;
      } else {
        return <li className="nav-item"><a className="nav-link" href="#">{name}</a></li>;
      }
    });

    return (
      <div className="header">
        <nav>
          <ul className={navPills}>
            {navItems}
          </ul>
        </nav>
        <h3 className="text-muted">Values Footprints</h3>
      </div>
    );
  }
}
