import React from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';

import Row from '../../../lib/bootstrap/components/Row.jsx';

export default class NotFound extends React.Component {


  render() {
    return (
      <div className="agency-portfolio-hero">
        <section className="container">
          <h1>Page not found!</h1>
          <p>Woops, the page you're looking for isn't here...</p>
          <Row justifyContent="center">
            <Link to="/home" className={cx('btn', 'btn-primary')}>Take me Home</Link>
          </Row>
        </section>
      </div>
    );
  };
}
