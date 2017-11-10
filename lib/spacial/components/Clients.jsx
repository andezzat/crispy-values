import React, { Component } from 'react';
import cx from 'classnames';

import Row from '../../bootstrap/components/Row.jsx';


export default class Clients extends Component {
  render() {
    const footerClasses = cx({
      'footer': true,
      'footer--light': this.props.style === 'light'
    });

    return (
      <div className="index-clients">
        <div className="container">
          <header>
            <h4>{this.props.heading}</h4>
          </header>
          <Row justifyContent="center">
            {this.props.items.map((item, i) => {
              return (
                <div className={cx('col-12', 'col-md-3', 'col-sm-6')}>
                  <img className={cx('img-fluid', 'mb-4')} src={item.image} />
                </div>
              )
            })}
          </Row>
        </div>
      </div>
    );
  }
}
