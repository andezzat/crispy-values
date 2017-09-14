import React, { Component } from 'react';
import cx from 'classnames';

export default class AgencyPortfolio extends Component {
  render () {
    return (
      <div className="agency-portfolio" id={this.props.id}>
        <section className="container">
          {this.props.children}
        </section>
      </div>
    );
  }
}
