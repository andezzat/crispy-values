import React from 'react';

import Formsy from 'formsy-react';
import {HOC} from 'formsy-react';
import Slide from 'rc-slider';

import cx from 'classnames';

import Row from '../../../../../lib/bootstrap/components/Row.jsx';

class Slider extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.changeValue = this.changeValue.bind(this);

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
        <label htmlFor={this.props.labelFor}>{this.props.labelText}</label>
        <div className="sliderContainer">
          <Slide
            dots
            min={this.props.min}
            max={this.props.max}
            value={this.props.getValue()}
            onChange={this.changeValue}
          />
        </div>
        <Row id="sliderLabels" justifyContent="between">
        {this.props.labels.map((label, i) => {
          return (
            <label key={i}>{label}</label>
          )
        })}
        </Row>
        <div className="invalid-feedback">{this.props.validationError}</div>
        <hr />
      </fieldset>
    );
  };
}

export default HOC(Slider);
