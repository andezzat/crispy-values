import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import cx from 'classnames';

import Navbar from '../../../lib/spacial/components/Navbar.jsx';

// const routerComponent = withRouter(props => <Header {...props} />);

class Header extends React.Component {
  render() {
    const navItemsClasses = cx(
      'collapse',
      'navbar-collapse',
      'justify-content-end',
    );
    const contactClasses = cx(
      'nav-link',
      'scroll',
    );
    const testButtonClasses = cx(
      'nav-link',
      'nav-link--rounded',
    );

    const route = this.props.location.pathname.toLowerCase();

    const navbarCx = cx({
      'navbar': true,
      'navbar-expand-lg': true,
      'navbar-dark': route === '/' || route === '/home',
      'navbar-light': route !== '/' && route !== '/home',
      'bg-transparent': true,
    });

    return (
      <div className="header">
        <Navbar navbarCx={navbarCx}>
          <button className="navbar-toggler" data-toggle="collapse" data-target="#navbar-collapse">
            <span className="navbar-toggler-icon" />
          </button>
          <div className={navItemsClasses} id="navbar-collapse">
            <ul className="navbar-nav">
              <li key={1} className="nav-item">
                <Link to="/Home" className="nav-link">Home</Link>
              </li>
              <li key={2} className="nav-item">
                <a href="#footer" className={contactClasses}>Contact</a>
              </li>
              <li key={3} className="nav-item">
                <Link to="/Test" className={testButtonClasses}>Values Test</Link>
              </li>
            </ul>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default withRouter(Header);
