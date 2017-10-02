import React from 'react';

import Formsy from 'formsy-react';
import {HOC} from 'formsy-react';

import cx from 'classnames';

class Email extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.changeValue = this.changeValue.bind(this);
  };

  mixins: [Formsy.Mixin];

  changeValue(event) {
    this.props.setValue(event.currentTarget.value);
  };

  render() {
    // const className = this.props.showRequired() ? 'required' : this.props.showError() ? 'error' : null;

    const classNameDiv = cx({
      'form-group': true,
      'required': this.props.showRequired(),
      'error': this.props.showError(),
      'has-success': !this.props.showError() && this.props.getValue(),
    });

    const classNameInput = cx({
      'validation': true,
      'is-valid': !this.props.showError() && this.props.getValue(),
    });

    const errorMessage = this.props.getErrorMessage();

    return (
      <div className={classNameDiv}>
        <label htmlFor="Email">Email address</label>
        <input className={classNameInput} type="text" onChange={this.changeValue} value={this.props.getValue()} />
        <div className="invalid-feedback">{errorMessage}</div>
      </div>
    );
  };
}

export default HOC(Email);
