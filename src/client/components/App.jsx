import React from 'react';
import { renderRoutes } from 'react-router-config';

import Header from './Header.jsx';
import Footer from './Footer.jsx';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        {renderRoutes(this.props.route.routes)}
        <Footer />
      </div>
    );
  }
}
