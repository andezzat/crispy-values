import React from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';

import Row from '../../../lib/bootstrap/components/Row.jsx';

import SpacialFooter from '../../../lib/spacial/components/Footer.jsx';

export default class Footer extends React.Component {
  render() {
    return (
      <SpacialFooter style="light">
        <Row>
          <div className="col-md-6">
            <div className="title">Values Footprints</div>
            <ul className="menu">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/test">Values Test</Link></li>
            </ul>
          </div>
        </Row>
      </SpacialFooter>
    );
  }
}
