import React from 'react';
import cx from 'classnames';
import { Link, withRouter } from 'react-router-dom';
import { Redirect } from 'react-router';
import { instanceOf } from 'prop-types';
import queryString from 'query-string';
import { withCookies, Cookies } from 'react-cookie';

import { Line } from 'react-progressbar.js'

import Row from '../../../lib/bootstrap/components/Row.jsx';
import ResultsCard from '../components/ResultsCard.jsx';

import { profileContent } from '../../../data/';

class Profile extends React.Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  }

  constructor(props) {
    super(props);

    this.init = this.init.bind(this);

    this.state = {
      content: {},
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

    this.setState({
      ...this.state,
      content,
    });
  }

  render() {
    console.log('Rendering...');
    const { cookies } = this.props;
    const data = cookies.get('result') || null;

    const content = this.state.content;

    // If no content is matched (or no name param provided) then redirect to home
    if (!content) {
      return <Redirect to="/home" />
    }

    const image = '/images/avatars/' + content.name.toLowerCase() + '_avatar.png';

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
                <div className="sidebar">
                  <div className="block">
                    <img className="img-fluid" src={image} />
                    {data && data.profileName === content.name.toLowerCase() &&
                    data.values.map((value, i) => {
                      return (
                        <div key={i}>
                          <p>{value.name}</p>
                          <Line
                            key={i}
                            progress={value.score / data.valueMappings[value.name.toLowerCase()].max}
                            initialAnimate={true}
                            containerClassName={'.progressBar'}
                            options={{
                              strokeWidth: 2,
                              easing: 'easeInOut',
                              duration: 1400,
                              color: '#FFEA82',
                              trailWidth: 1,
                              trailColor: '#eee'
                            }}
                          />
                        </div>
                      );
                    })}
                  </div>
                  {data && data.profileName !== content.name.toLowerCase() &&
                  <div className="block">
                    <hr />
                    <div className="title">Your Result</div>
                    <ResultsCard profileName={data.profileName} values={data.values} valueMappings={data.valueMappings} />
                  </div>
                  }
                </div>
              </div>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

export default withCookies(Profile);
