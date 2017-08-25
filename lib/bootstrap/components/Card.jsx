import React from 'react';
import PropTypes from 'prop-types';
import { colors } from '../constants';
import cx from 'classnames';

export default class Card extends React.Component {
  render() {
    const cardClasses = cx({
      'card': true,
      [`bg-${this.props.colors.background}`]: this.props.colors.background,
      [`text-${this.props.colors.text}`]: this.props.colors.text,
    });

    return (
      <div className={cardClasses}>
        <div className="card-body">
          <h4 className="card-title">{this.props.title}</h4>
          <p className="card-text">{this.props.text}</p>
        </div>
        {this.props.children}
      </div>
    );
  }
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  colors: PropTypes.shape({
    background: PropTypes.oneOf(colors.default),
    text: PropTypes.oneOf(colors.default),
  }),
};
