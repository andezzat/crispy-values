import React from 'react';

import Row from '../../lib/bootstrap/components/Row.jsx';
import Card from '../../lib/bootstrap/components/Card.jsx';

export default class Main extends React.Component {
  render() {
    const cardProps = {};
    cardProps.title = 'Welcome';
    cardProps.text = 'Did you know that you can set reminders by saying \'Ok Google, remind me to... at...\'!';
    cardProps.colors = {};
    cardProps.colors.background = 'primary';
    cardProps.colors.text = 'light';

    return (
      <div>
        <Row>
          <div className="col">
            <h1>Hello World</h1>
          </div>
        </Row>
        <Row>
          <div className="col-sm-6">
            <Card {...cardProps} />
          </div>
        </Row>
      </div>
    );
  }
}
