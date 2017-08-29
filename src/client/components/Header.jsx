import React from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';

import Navbar from '../../../lib/bootstrap/components/Navbar.jsx';

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

    const navItems = names.map((name, key) => {
      if (name === 'Home') {
        return <li key={key} className="nav-item"><Link to={name} className="nav-link active" href="#">{name}</Link></li>;
      } else {
        return <li key={key} className="nav-item"><Link to={name} className="nav-link" href="#">{name}</Link></li>;
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
