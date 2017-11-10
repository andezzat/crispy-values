import React from 'react';
import { findDOMNode } from 'react-dom';
import cx from 'classnames';
import { Link } from 'react-router-dom';

import Row from '../../../lib/bootstrap/components/Row.jsx';

import AgencyHero from '../../../lib/spacial/components/AgencyHero.jsx';
import AgencyIntro from '../../../lib/spacial/components/AgencyIntro.jsx';
import AgencyPortfolio from '../../../lib/spacial/components/AgencyPortfolio.jsx';
import AgencyTestimonial from '../../../lib/spacial/components/AgencyTestimonial.jsx';
import PhotographyCTA from '../../../lib/spacial/components/PhotographyCTA.jsx';
import Clients from '../../../lib/spacial/components/Clients.jsx';

import { profiles } from '../../../data/';
import { home as content } from '../../../data/';


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
    const CTAButtonCx = cx(content.CTA.link.classes);
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

      var animationDelay = p.id * 0.2
      return (
        <div key={key} className={portfolioCol}>
          <Link to={{ pathname: '/profile', search: '?name=' + p.name.toLowerCase() }} className="project">
            <span className="mask">
              <span className="info">
                <h3>{p.title}</h3>
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
          <h1>{content.hero.title}</h1>
          <p>
            {content.hero.text}
          </p>
          <Link to={content.hero.link.href}>{content.hero.link.text}</Link>
        </AgencyHero>
        <AgencyIntro>
          <h3>{content.intro.title}</h3>
          <hr />
          <p>{content.intro.text}</p>
        </AgencyIntro>
        <AgencyPortfolio id="homeValues">
          <h2>{content.portfolio.title}</h2>
          <Row>
            {profileItems}
          </Row>
        </AgencyPortfolio>
        <AgencyIntro id="about">
          <h3>{content.about.title}</h3>
          <hr />
          <p>{content.about.text}</p>
        </AgencyIntro>
        <AgencyTestimonial id="homeTestimonial">
          <div className="quote">
            <span className="quote-mark">“</span>
            {content.testimonial.text}
          </div>
          <div className="author">
            <img src={content.testimonial.image} />
            <span className="name">
              {content.testimonial.author.name}
              <span className="company">{content.testimonial.author.company}</span>
            </span>
          </div>
        </AgencyTestimonial>
        <PhotographyCTA id="homePhotographyCTA">
          <section className="container">
            <h3>{content.CTA.title}</h3>
            <p>{content.CTA.text}</p>
            <Link to={content.CTA.link.href} className={CTAButtonCx}>{content.CTA.link.text}</Link>
          </section>
        </PhotographyCTA>
        <Clients heading={content.partners.heading} items={content.partners.list} />
      </div>
    );
  }
}
