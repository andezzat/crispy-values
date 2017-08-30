import React from 'react';

import Row from '../../../lib/bootstrap/components/Row.jsx';
import Card from '../../../lib/bootstrap/components/Card.jsx';

export default class Test extends React.Component {
  render() {
    return (
      <div className="container">
        <Row>
          <div className="col">
            <h1>This is The Test!</h1>
          </div>
        </Row>
      </div>
    );
  }
}
