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
      value: '',
    }
  };

  mixins: [Formsy.Mixin];

  componentDidMount() {
    const value = this.props.value;

    this.props.setValue(value);
    this.setState({
      value,
    });
  };

  changeValue(event) {
    const { stepNumber, id } = this.props;

    const value = event.currentTarget.value;
    const valid = this.props.isValidValue(value);

    this.props.setValue(value);
    this.props.onUpdate(
      stepNumber,
      { id, value, valid }
    );
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
        <label htmlFor={this.props.labelFor}>{this.props.labelText}{this.props.required && ' *' || ' (optional)'}</label>
        <select className={inputCx} onBlur={this.handleBlur} onFocus={this.handleFocus} onChange={this.changeValue} value={this.props.getValue()}>
          {this.props.options.map((opt, key) => {
            return (
              <option key={key}>{opt}</option>
            );
          })}
        </select>
        {!this.props.description && <small className={cx('form-text', 'text-muted')}>{this.props.description}</small>}
        <div className="invalid-feedback">{errorMessage}</div>
      </div>
    );
  };
}

export default HOC(Dropdown);
