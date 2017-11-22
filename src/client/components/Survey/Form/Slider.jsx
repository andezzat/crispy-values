import React from 'react';

import Formsy from 'formsy-react';
import { HOC } from 'formsy-react';
import RangeSlider from 'react-rangeslider';

import cx from 'classnames';


class Slider extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.changeValue = this.changeValue.bind(this);

    this.state = {
      value: 3,
    }
  };

  mixins: [Formsy.Mixin];

  componentDidMount() {
    console.log('Slider is mounting...');
    let { value } = this.props;

    if (!value) {
      value = 3
    }

    console.log('About to set value to: ', value);
    this.props.setValue(value);
    console.log('About to set state');
    this.setState({
      value,
    }, console.log('State is set!'));
    console.log('Done');
  };

  changeValue(value) {
    console.log('Changing slider value...');
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
    console.log('Rendering...');
    const sliderType = this.state.sliderType;

    return (
      <fieldset className="form-group">
        <label htmlFor={this.props.labelFor}>{this.props.labelText}{this.props.required && ' *' || ' (optional)'}</label>
        <div className={cx('slider', 'custom-labels')}>
          <RangeSlider
            min={this.props.min}
            max={this.props.max}
            value={this.props.getValue()}
            labels={this.props.labels}
            onChange={this.changeValue}
          />
        </div>

        <hr />
      </fieldset>
    );
  };
}

export default HOC(Slider);
