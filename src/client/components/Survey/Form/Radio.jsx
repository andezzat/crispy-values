import React from 'react';

import Formsy from 'formsy-react';
import {HOC} from 'formsy-react';

import cx from 'classnames';

class Radio extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      value: this.props.value,
    }
  };

  mixins: [Formsy.Mixin];

  componentDidMount() {
    const { value } = this.props;

    this.props.setValue(value);
    this.setState({
      value,
    });
  };

  changeValue(value) {
    const { stepNumber, id } = this.props;
    const valid = this.props.isValidValue(value);

    this.props.setValue(value);
    this.setState({
      value,
    });
    this.props.onUpdate(
      stepNumber,
      { id, value, valid }
    );
  };

  render() {
    return (
      <fieldset className="form-group">
        {this.props.options.map((opt, i) => (
          <div key={i} className="form-check">
            <label htmlFor={opt.value + this.props.id} className="form-check-label">
            <input
                className="form-check-input"
                type="radio"
                name={opt.value + this.props.id}
                onChange={this.changeValue.bind(this, opt.value)}
                checked={this.state.value === opt.value}
                id={opt.value + this.props.id}
              />
              {' ' + opt.description}
            </label>
          </div>
        ))}
        {!this.props.required && this.props.getValue() !== '' && <small className={cx('form-text', 'text-muted')}>Optional</small>}
        <hr />
      </fieldset>
    );
  };
}

export default HOC(Radio);
