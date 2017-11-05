import React from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';

import Row from '../../../lib/bootstrap/components/Row.jsx';

export default class Error extends React.Component {
  render() {
    return (
      <div className="agency-portfolio-hero">
        <section className="container">
          <h1>We've encountered a problem...</h1>
          <p>Sorry for the inconvenience. If you'd like to report an issue, please click on the bug in the bottom right corner.</p>
          <Row justifyContent="center">
            <Link to="/home" className={cx('btn', 'btn-primary')}>Take me Home</Link>
          </Row>
        </section>
      </div>
    );
  };
}
