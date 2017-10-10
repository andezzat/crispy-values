import React from 'react';

import Formsy from 'formsy-react';
import {HOC} from 'formsy-react';

import cx from 'classnames';

class Dropdown extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.changeValue = this.changeValue.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleFocus = this.handleFocus.bind(this);

    this.state = {
      blurred: false,
    }
  };

  mixins: [Formsy.Mixin];

  changeValue(event) {
    this.props.setValue(event.currentTarget.value);
  };

  handleBlur() {
    this.setState({
      blurred: true,
    });
  };

  handleFocus() {
    this.setState({
      blurred: false,
    });
  }

  render() {
    const fieldCx = cx({
      'form-group': true,
      'required': this.props.showRequired(),
      'error': this.props.showError() && this.state.blurred,
      'has-success': !this.props.showError() && this.props.getValue(),
    });

    const inputCx = cx({
      'form-control': true,
      'is-valid': !this.props.showError() && this.props.getValue(),
      'is-invalid': this.props.showError() && this.state.blurred,
    });

    const errorMessage = this.props.getErrorMessage();

    return (
      <div className={fieldCx}>
        <label htmlFor={this.props.labelFor}>{this.props.labelText}</label>
        <select className={inputCx} onBlur={this.handleBlur} onFocus={this.handleFocus} onChange={this.changeValue} value={this.props.getValue() || ''}>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>
        <div className="invalid-feedback">{errorMessage}</div>
      </div>
    );
  };
}

export default HOC(Dropdown);
