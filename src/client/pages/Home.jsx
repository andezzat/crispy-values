import React from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';

import AgencyHero from '../../../lib/spacial/components/AgencyHero.jsx';
import AgencyIntro from '../../../lib/spacial/components/AgencyIntro.jsx';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <AgencyHero>
          <h1 className="customFadeInUp">Ever wondered what your values profile looks like?</h1>
          <p className="customFadeInUp">It Starts With You</p>
          <Link to="/test" className="customFadeInUp">Take The Test</Link>
        </AgencyHero>
        <AgencyIntro>
          <h3>Map Your Values</h3>
          <hr />
          <p>
            The work 'etak' refers to a navigation system used by Pacific Islanders
            who followed star path patterns and imaginary islands to arrive at
            undiscovered new land in the middle of the ocean. We love the idea
            of setting sail for something possible on the horizon, so we have
            borrowed the term to describe our values navigation tool.
          </p>
        </AgencyIntro>
      </div>
    );
  }
}
