import React, { Component } from 'react';
import cx from 'classnames';

export default class AgencyIntro extends Component {
  render () {
    return (
      <div className="agency-intro">
        <section className="container">
          {this.props.children}
        </section>
      </div>
    );
  }
}
