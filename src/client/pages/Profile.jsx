import React from 'react';
import cx from 'classnames';
import { Link, withRouter } from 'react-router-dom';

import Row from '../../../lib/bootstrap/components/Row.jsx';


import { profiles } from '../../../data/';

class Profile extends React.Component {

  render() {
    console.log(this.props.location);
    console.log(this.props.location.state);
    return (
      <div>
      </div>
    );
  }
}

export default withRouter(Profile);
