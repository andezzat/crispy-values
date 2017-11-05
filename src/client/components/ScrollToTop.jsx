import React from 'react';
import { withRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import Header from './Header.jsx';
import Footer from './Footer.jsx';

class ScrollToTop extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}

export default withRouter(ScrollToTop);
