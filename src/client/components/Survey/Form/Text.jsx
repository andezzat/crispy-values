import React from 'react';

import Formsy from 'formsy-react';
import {HOC} from 'formsy-react';

import cx from 'classnames';

class Text extends React.Component {
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
    this.props.onValidationUpdate(
      this.props.group,
      { name: this.props.name, valid: this.props.isValidValue(event.currentTarget.value) }
    );
  };

  handleBlur() {
    this.setState({
      ...this.state,
      blurred: true,
    });
  };

  handleFocus() {
    this.setState({
      ...this.state,
      blurred: false,
    });
  }

  render() {
    const fieldCx = cx({
      'form-group': true,
      'required': this.props.showRequired(),
      'error': this.props.showError() && this.state.blurred,
      'has-success': !this.props.showError() && this.props.getValue() && this.state.blurred,
    });

    const inputCx = cx({
      'form-control': true,
      'is-valid': !this.props.showError() && this.props.getValue() && this.state.blurred,
      'is-invalid': this.props.showError() && this.state.blurred,
    });

    const errorMessage = this.props.getErrorMessage();

    return (
      <div className={fieldCx}>
        <label htmlFor={this.props.labelFor}>{this.props.labelText}</label>
        <input className={inputCx} type="text" onBlur={this.handleBlur} onFocus={this.handleFocus} onChange={this.changeValue} value={this.props.getValue() || ''} />
        <div className="invalid-feedback">{errorMessage}</div>
      </div>
    );
  };
}

export default HOC(Text);
