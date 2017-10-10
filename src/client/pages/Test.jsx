import React from 'react';

import Formsy from 'formsy-react';
import cx from 'classnames';

import Text from '../components/Survey/Form/Text.jsx';
import Dropdown from '../components/Survey/Form/Dropdown.jsx';

import Row from '../../../lib/bootstrap/components/Row.jsx';

export default class Test extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.enableButton = this.enableButton.bind(this);
    this.disableButton = this.disableButton.bind(this);

    this.state = {
      canSubmit: false,
    };

    Formsy.addValidationRule('isDOB', (values, value) => {
      const today = new Date();

      var DOB = '';
      if (value !== undefined && value !== null && value !== '') {
        DOB = value;
      }

      const day = DOB.slice(0, 2);
      const month = DOB.slice(3, 5);
      const year = DOB.slice(6, 11);

      if (day < 1 || day > 31) {
        return false;
      }
      if (month < 1 || month > 12) {
        return false;
      }
      if (year > today.getFullYear() || year < 1900) {
        return false;
      }
      return true;
    });
  };
  enableButton() {
    this.setState({
      canSubmit: true
    });
  };
  disableButton() {
    this.setState({
      canSubmit: false
    });
  };
  submit(model) {
    // Do something
  };

  render() {
    const submitCx = cx({
      'btn': true,
      'btn-primary': true,
      'disabled': !this.state.canSubmit,
    });

    const surveyContainerCx = cx(
      'container',
      'survey',
    );

    return (
      <div>
        <div className="agency-start-project-intro">
          <div className="container">
            <h3>Your Details</h3>
            <p>
              We need to collect some personal information about you before we begin.
              We promise we won't divulge any of your details for any marketing purposes.
            </p>
          </div>
        </div>
        <div className={surveyContainerCx}>
          <Row>
            <div className="col-md-12">
              <div className="card">
                <div className="card-body">
                  <Formsy.Form onValidSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton}>
                    <Text name="Email" labelFor="Email" labelText="Email Address" validations="isEmail" validationError="Please enter a valid Email Address." />
                    <Text name="DateOfBirth" labelFor="DateOfBirth" labelText="Date of Birth" validations="isDOB" validationError="Please enter your DOB in the format dd/mm/yyyy" />
                    <Dropdown name="Gender" labelFor="Gender" labelText="Gender" />
                    <button className={submitCx} type="submit" disabled={!this.state.canSubmit}>Submit</button>
                  </Formsy.Form>
                </div>
              </div>
            </div>
          </Row>
        </div>
      </div>
    );
  };
}
