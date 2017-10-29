import React, { Component } from 'react';
import cx from 'classnames';

export default class AgencyHero extends Component {
  render () {
    return (
      <div className="agency-hero" id={this.props.id}>
        <section className="container">
          <div className="hero-text" ref={this.props.textRef}>
            {this.props.children}
          </div>
        </section>
      </div>
    );
  }
}
