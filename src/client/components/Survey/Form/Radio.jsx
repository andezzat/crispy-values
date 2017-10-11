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
    this.props.setValue(value);
    this.setState({
      value,
    });
    this.props.onValidationUpdate(
      this.props.group,
      { name: this.props.number, value, valid: this.props.isValidValue(value) }
    );
  };

  render() {
    return (
      <fieldset className="form-group">
        {this.props.options.map((opt, i) => (
          <div key={i} className="form-check">
            <label htmlFor={opt.value + this.props.number} className="form-check-label">
            <input
                className="form-check-input"
                type="radio"
                name={opt.value + this.props.number}
                onChange={this.changeValue.bind(this, opt.value)}
                checked={this.state.value === opt.value}
              />
              {' ' + opt.name}
            </label>
          </div>
        ))}
      </fieldset>
    );
  };
}

export default HOC(Radio);
