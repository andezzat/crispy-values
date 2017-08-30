import React from 'react';
import cx from 'classnames';

export default class HeaderHero extends React.Component {
  render() {
    const rowClasses = cx(
      'row',
      'text-center',
    );
    const colClasses = cx(
      'col-12',
      'fadeInScaleDown',
    )

    return (
      <div className="header-hero">
        <div className="container">
          <div className={rowClasses}>
            <div className={colClasses}>
              {this.props.children}
            </div>
          </div>
      </div>
      </div>
    );
  }
}
