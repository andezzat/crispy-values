import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

export default class Row extends React.Component {
  static propTypes = {
    justifyContent: PropTypes.oneOf(['start', 'center', 'end', 'around', 'between']),
  };

  render() {
    const classes = cx({
      'row': true,
      [`justify-content-${this.props.justifyContent}`]: this.props.justifyContent
    });

    return (
      <div className={classes}>
        {this.props.children}
      </div>
    );
  }
}
