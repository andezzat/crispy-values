import React from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';

import Navbar from '../../../lib/spacial/components/Navbar.jsx';

export default class Header extends React.Component {
  render() {
    const navItemsClasses = cx(
      'collapse',
      'navbar-collapse',
      'justify-content-end',
    );

    const testButtonClasses = cx(
      'nav-link',
      'nav-link--rounded',
    );

    return (
      <div className="header">
        <Navbar>
          <div className={navItemsClasses} id="navbar-collapse">
            <ul className="navbar-nav">
              <li key={1} className="nav-item">
                <Link to="Home" className="nav-link">Home</Link>
              </li>
              <li key={2} className="nav-item">
                <Link to="Test" className={testButtonClasses}>Values Test</Link>
              </li>
            </ul>
          </div>
        </Navbar>
      </div>
    );
  }
}
