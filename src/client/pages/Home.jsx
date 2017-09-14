import React from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';

import AgencyHero from '../../../lib/spacial/components/AgencyHero.jsx';
import AgencyIntro from '../../../lib/spacial/components/AgencyIntro.jsx';
import AgencyTestimonial from '../../../lib/spacial/components/AgencyTestimonial.jsx';
import PhotographyCTA from '../../../lib/spacial/components/PhotographyCTA.jsx';

export default class Home extends React.Component {
  render() {
    const CTAButtonClasses = cx(
      'btn-pill-sm',
      'btn-pill-success',
    );

    return (
      <div>
        <AgencyHero id="homeHero">
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
        <AgencyTestimonial>
          <div className="quote">
            <span className="quote-mark">“</span>
            The Values Footprints test has provided some insight into what I value most in both my personal and work lives.
            It's a great tool to jumpstart the process of self-discovery and another step towards finding my true calling.
          </div>
          <div className="author">
            <img src="images/uifaces/9.jpg" />
            <span className="name">
              Andrew Salib
              <span className="company">Swinburne</span>
            </span>
          </div>
        </AgencyTestimonial>
        <PhotographyCTA id="homePhotographyCTA">
          <section className="container">
            <h3>Not Convinced Yet?</h3>
            <p>
              We strongly believe that the path to self-actualization begins with
              learning more about you. What better way to do that than to map your values?
            </p>
            <Link to="/test" className={CTAButtonClasses}>Map My Values</Link>
          </section>
        </PhotographyCTA>
      </div>
    );
  }
}
