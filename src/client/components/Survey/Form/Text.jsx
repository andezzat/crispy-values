import React from 'react';

import Formsy from 'formsy-react';
import {HOC} from 'formsy-react';

import cx from 'classnames';

class Text extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.changeValue = this.changeValue.bind(this);
    this.blurValue = this.blurValue.bind(this);
    this.keyDown = this.keyDown.bind(this);
  };

  mixins: [Formsy.Mixin];

  changeValue(event) {
    if (this.props.getErrorMessage() != null) {
      this.props.setValue(event.currentTarget.value);
    } else {
      if (this.props.isValidValue(event.target.value)) {
        this.props.setValue(event.target.value);
      } else {
        if (this.props.isValid()) {
          this.props.setValue(event.target.value);
        };
        this.props.setState({
          _value: event.currentTarget.value,
          _ispristine: false,
        });
      }
    }
  };

  blurValue(event) {
    this.props.setValue(event.currentTarget.value);
  };

  keyDown(event) {
    if (event.keyCode == '13') {
      this.props.setValue(event.currentTarget.value);
    }
  }

  render() {
    // const className = this.props.showRequired() ? 'required' : this.props.showError() ? 'error' : null;

    const fieldCx = cx({
      'form-group': true,
      'required': this.props.showRequired(),
      'error': this.props.showError(),
      'has-success': !this.props.showError() && this.props.getValue(),
    });

    const inputCx = cx({
      'form-control': true,
      'is-valid': !this.props.showError() && this.props.getValue(),
      'is-invalid': this.props.showError(),
    });

    const errorMessage = this.props.getErrorMessage();

    return (
      <div className={fieldCx}>
        <label htmlFor={this.props.labelFor}>{this.props.labelText}</label>
        <input className={inputCx} type="text" onBlur={this.blurValue} onKeyDown={this.keyDown} onChange={this.changeValue} value={this.props.getValue() || ''} />
        <div className="invalid-feedback">{errorMessage}</div>
      </div>
    );
  };
}

export default HOC(Text);
