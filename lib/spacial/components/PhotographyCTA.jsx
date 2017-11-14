import React, { Component } from 'react';
import cx from 'classnames';

export default class PhotographyCTA extends Component {
  render () {
    return (
      <div className="index-photography-cta" id={this.props.id}>
        <div className="background">
          <section className="container">
            {this.props.children}
          </section>
        </div>
      </div>
    );
  }
}
