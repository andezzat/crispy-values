import React from 'react';
import { findDOMNode } from 'react-dom';
import $ from 'jquery';
import cx from 'classnames';
import { Link } from 'react-router-dom';

import Row from '../../../lib/bootstrap/components/Row.jsx';

import AgencyHero from '../../../lib/spacial/components/AgencyHero.jsx';
import AgencyIntro from '../../../lib/spacial/components/AgencyIntro.jsx';
import AgencyPortfolio from '../../../lib/spacial/components/AgencyPortfolio.jsx';
import AgencyTestimonial from '../../../lib/spacial/components/AgencyTestimonial.jsx';
import PhotographyCTA from '../../../lib/spacial/components/PhotographyCTA.jsx';

import { profiles } from '../../../data/';

export default class Home extends React.Component {
  componentDidMount() {
    // JQuery initialisation for Hero Parallax
    const hero = findDOMNode(this.refs.hero)
    const text = findDOMNode(this.refs.hero.refs.text);

    if (!window.utils.isMobile()) {
      $(window).scroll(() => {
        const scroll = $(window).scrollTop(),
        slowScroll = scroll/4,
        slowBg = 50 + slowScroll;

        $(hero).css('background-position', 'center ' + slowBg + '%');
      });

      utils.parallax_text($(text), $(text).position().top);
    }
  };

  render() {
    const CTAButtonCx = cx(
      'btn-pill-sm',
      'btn-pill-success',
    );
    const portfolioCol = cx(
      'col-lg-4',
      'col-md-6',
    );

    const profileItems = profiles.map((p, key) => {
      var picCx = cx(
        'pic',
        'values-avatar',
        p.image,
      );
      var linkTo = `/profiles/${p.id}`;
      var animationDelay = p.id * 0.2
      return (
        <div key={key} className={portfolioCol}>
          <Link to={linkTo} className="project">
            <span className="mask">
              <span className="info">
                <h3>{p.name}</h3>
                <p>{p.subtitle}</p>
              </span>
              <span className="btn-see-project">Learn More</span>
            </span>
            <span className={picCx} />
          </Link>
        </div>
      );
    });

    return (
      <div>
        <AgencyHero id="homeHero" ref="hero" textRef="text">
          <h1>Ever wondered what your values profile looks like?</h1>
          <p>
            It Starts With You
          </p>
          <Link to="/test">Take The Test</Link>
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
        <AgencyPortfolio id="homeValues">
          <h2>The Values Profiles</h2>
          <Row>
            {profileItems}
          </Row>
        </AgencyPortfolio>
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
            <Link to="/test" className={CTAButtonCx}>Map My Values</Link>
          </section>
        </PhotographyCTA>
      </div>
    );
  }
}
