import React from 'react';
import cx from 'classnames';
import { Link, withRouter } from 'react-router-dom';
import queryString from 'query-string';

import Row from '../../../lib/bootstrap/components/Row.jsx';


import { profiles } from '../../../data/';

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.redirect = this.redirect.bind(this);

    this.state = {
      content: {}
    };
  }

  redirect() {
    this.props.history.push('/home');
  }

  componentWillMount() {
    const params = queryString.parse(this.props.location.search);
    var content;

    if (params.name) {
      content = profiles.find((profile) => {
        return profile.name.toLowerCase() === params.name.toLowerCase();
      });
    }

    this.setState({
      ...this.state,
      content,
    });
  }

  render() {
    const content = this.state.content;
    if (!content) {
      return null;
      this.redirect();
    }

    return (
      <div>
        <div className="customer-story-header">
          <div className="container">
            <h2>{content.title}</h2>
            <p>{content.subtitle}</p>
          </div>
        </div>
        <div className="customer-story-content">
          <div className="container">
            <div className="col-md-8">
              <div className="customer-story-body">
                <h2>Description</h2>
                <p>{content.description}</p>
                <h2>Report</h2>
                <p>{content.report}</p>
                <h2>Professional Matches</h2>
                <p>{content.professionalMatch}</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="sidebar">
                <div className="block">
                  {/* <img className="img-fluid" src={'images/avatars/' + content.image.slice(4, content.image.length + 1) + '_avatar.png' } /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Profile);
