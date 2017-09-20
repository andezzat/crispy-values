import React, { Component } from 'react';
import cx from 'classnames';

export default class PhotographyCTA extends Component {
  render () {
    return (
      <div className="index-photography-cta" id={this.props.id}>
        {this.props.children}
      </div>
    );
  }
}
