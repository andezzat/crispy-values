import React, { Component } from 'react';
import cx from 'classnames';

export default class AgencyTestimonial extends Component {
  render () {
    return (
      <div className="agency-testimonial" id={this.props.id}>
        <section className="container">
          {this.props.children}
        </section>
      </div>
    );
  }
}
