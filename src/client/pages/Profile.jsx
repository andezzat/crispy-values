import React from 'react';
import cx from 'classnames';
import { Link, withRouter } from 'react-router-dom';
import { Redirect } from 'react-router';
import { instanceOf } from 'prop-types';
import queryString from 'query-string';
import { withCookies, Cookies } from 'react-cookie';

import { Line } from 'react-progressbar.js'

import Row from '../../../lib/bootstrap/components/Row.jsx';
import ProfileSidebar from '../components/ProfileSidebar.jsx';

import { profileContent } from '../../../data/';

class Profile extends React.Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  }

  constructor(props) {
    super(props);

    this.init = this.init.bind(this);

    this.state = {
      data: {},
      content: {},
      resultTitle: '',
    };
  }

  componentWillReceiveProps(nextProps) {
    // Checks if params are different, if so then kicks off init again but with new props
    if (nextProps.location.search !== this.props.location.search) {
      this.init(nextProps);
    }
  }

  componentWillMount() {
    this.init(this.props);
  }

  init(props) {
    const params = queryString.parse(props.location.search);
    var content;

    if (params.name) {
      content = profileContent.profiles.find((profile) => {
        return profile.name.toLowerCase() === params.name.toLowerCase();
      });
    }

    const data = this.props.cookies.get('result') || null;
    let resultTitle;

    if (data) {
      resultTitle = profileContent.profiles.find((profile) => {
        return profile.name.toLowerCase() === data.profileName.toLowerCase();
      }).title;
    }

    this.setState({
      ...this.state,
      data,
      content,
      resultTitle,
    });
  }

  render() {
    const content = this.state.content;
    const data = this.state.data;
    const resultTitle = this.state.resultTitle;

    // If no content is matched (or no name param provided) then redirect to home
    if (!content) {
      return <Redirect to="/home" />
    }

    const avatarURL = '/images/avatars/' + content.name.toLowerCase() + '_avatar.png';


    const sideBarProps = {};

    if (data) {
      const isMyProfile = data.profileName === content.name.toLowerCase();

      sideBarProps.title = 'Your Result';
      sideBarProps.values = data.values;
      sideBarProps.valueMappings = data.valueMappings;

      if (!isMyProfile) {
        sideBarProps.image = '/images/avatars/' + data.profileName + '_avatar.png';
        sideBarProps.profileName = resultTitle;
        sideBarProps.button = {
          text: 'Visit Profile',
          props: {
            to: { pathname: '/profile', search: '?name=' + data.profileName.toLowerCase(), state: 'result' },
            className: cx('btn-shadow', 'btn-shadow-sm', 'btn-shadow-primary', 'mb-2', 'mt-4')
          }
        }
      }

    } else {
      sideBarProps.title = 'No Results Yet';
      sideBarProps.text = 'Once you take the test, your results will appear here.';
      sideBarProps.button = {
        text: 'Take The Test',
        props: {
          className: cx('btn', 'btn-outline-primary', 'mt-2'),
          to: '/test'
        }
      }
    }

    return (
      <div id="profile">
        <div className="customer-story-header">
          <div className="container">
            <h2>{content.title}</h2>
            <p>{content.subtitle}</p>
            <img className="img-fluid" src={avatarURL} />
          </div>
        </div>
        <div className="customer-story-content">
          <div className="container">
            <Row>
              <div className="col-md-8">
                <div className="customer-story-body">
                  <h2>Description</h2>
                  <p>{content.description}</p>
                  <p>{content.report}</p>
                  <h2>Professional Matches</h2>
                  <p>{content.professionalMatch}</p>
                  <h2>Job Opportunities</h2>
                  <ul>
                    {content.possibleJobs.map((job, i) => {
                      return <li key={i}>{job}</li>
                    })}
                  </ul>
                  {data && data.profileName === content.name.toLowerCase() &&
                  <div>
                    <h2>Where do I go from here?</h2>
                    <p>{profileContent.finalPrompt}</p>
                  </div>}
                </div>
              </div>
              <div className="col-md-4">
                <ProfileSidebar {...sideBarProps} />
              </div>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

export default withCookies(Profile);
