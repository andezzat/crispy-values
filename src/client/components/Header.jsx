import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import cx from 'classnames';

import Navbar from '../../../lib/spacial/components/Navbar.jsx';

import { nav as content } from '../../../data/';

// const routerComponent = withRouter(props => <Header {...props} />);

class Header extends React.Component {
  render() {
    const navItemsClasses = cx(
      'collapse',
      'navbar-collapse',
      'justify-content-end',
    );

    // Only exists when withRouter is used (as shown at EOF)
    const route = this.props.location.pathname.toLowerCase();

    const navbarCx = cx({
      'navbar': true,
      'navbar-expand-lg': true,
      'navbar-dark': route === '/' || route === '/home',
      'navbar-light': route !== '/' && route !== '/home',
      'bg-transparent': true,
    });

    const navLinks = content.links.map((link, i) => {
      link.classes.unshift('nav-link');
      return (
        <li
          key={i}
          className="nav-item">
          {
            link.type === 'link'
            ? <Link
                to={link.href}
                className={cx(link.classes)}>
                {link.text}
              </Link>
            : <a
                href={link.href}
                className={cx(link.classes)}>
                {link.text}
              </a>
          }
        </li>
      )
    });

    return (
      <div className="header">
        <Navbar navbarCx={navbarCx}>
          <button className="navbar-toggler" data-toggle="collapse" data-target="#navbar-collapse">
            <span className="navbar-toggler-icon" />
          </button>
          <div className={navItemsClasses} id="navbar-collapse">
            <ul className="navbar-nav">
              {navLinks}
            </ul>
          </div>
        </Navbar>
      </div>
    );
  }
}

// withRouter allows Header to contain router information such as current route
export default withRouter(Header);
