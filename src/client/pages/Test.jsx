import React from 'react';
import Formsy from 'formsy-react';
import cx from 'classnames';

import { survey } from '../../../data/';

import Text from '../components/Survey/Form/Text.jsx';
import Dropdown from '../components/Survey/Form/Dropdown.jsx';
import Radio from '../components/Survey/Form/Radio.jsx'

import Row from '../../../lib/bootstrap/components/Row.jsx';

export default class Test extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.enableButton = this.enableButton.bind(this);
    this.disableButton = this.disableButton.bind(this);
    this.updateFieldGroups = this.updateFieldGroups.bind(this);
    this.isFieldGroupValid = this.isFieldGroupValid.bind(this);
    this.goToStep = this.goToStep.bind(this);

    this.state = {
      fieldGroups: [
        { valid: false,
          fields: [
            { name: 'Email', value: '', valid: false, required: false },
            { name: 'DateOfBirth', value: '', valid: false, required: true },
            { name: 'Gender', value: '', valid: false, required: true },
            { name: 'Industry', value: '', valid: false, required: false },
          ]
        },
        {
          valid: false,
          fields: [
            { name: 0, value: '', valid: false, required: true },
            { name: 1, value: '', valid: false, required: true },
            { name: 2, value: '', valid: false, required: true },
            { name: 3, value: '', valid: false, required: true },
            { name: 4, value: '', valid: false, required: true },
            { name: 5, value: '', valid: false, required: true },
          ],
        },
      ],
      canSubmit: false,
      step: 1,
    };

    Formsy.addValidationRule('isDate', (values, value) => {
      const today = new Date();

      var DOB = '';
      if (value !== undefined && value !== null && value !== '') {
        DOB = value;
      }

      if (DOB.length !== 10) {
        return false;
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
    Formsy.addValidationRule('isIn', (values, value, array) => {
      return array.indexOf(value) >= 0;
    });
  };

  isFieldGroupValid(group) {
    const fieldGroup = this.state.fieldGroups[group - 1];

    const fieldValidation = fieldGroup.fields.map((field) => {
      if (field.required || field.value) {
        return field.valid;
      } else {
        return true;
      }
    });

    const valid = fieldValidation.every((value) => { return value });
    return valid;
  };

  updateFieldGroups(group, fieldObj) {
    const newFieldGroups = this.state.fieldGroups.slice();

    const newFieldGroup = newFieldGroups[group - 1];
    const newFieldObj = newFieldGroup.fields.find((field) => {
      return field.name === fieldObj.name;
    });

    newFieldObj.valid = fieldObj.valid;
    newFieldObj.value = fieldObj.value;
    newFieldGroup.valid = this.isFieldGroupValid(group);

    this.setState({
      ...this.state,
      fieldGroups: newFieldGroups,
    });
  };

  goToStep(step) {
    this.setState({
      ...this.state,
      step: step,
    });
  };

  enableButton() {
    this.setState({
      ...this.state,
      canSubmit: true
    });
  };
  disableButton() {
    this.setState({
      ...this.state,
      canSubmit: false
    });
  };

  submit(model) {
    // Do something
  };

  render() {
    console.log(this.state.fieldGroups[0].fields);

    const submitCx = cx({
      'btn': true,
      'btn-success': true,
      'disabled': !this.state.canSubmit,
    });

    const step1NextBtnCx = cx({
      'btn': true,
      'btn-primary': true,
      'disabled': !this.state.fieldGroups[0].valid,
    });

    const step2NextBtnCx = cx({
      'btn': true,
      'btn-primary': true,
      'disabled': !this.state.fieldGroups[1].valid,
    });

    const backBtnCx = cx({
      'btn': true,
      'btn-secondary': true,
    });

    const step3NextBtnCx = cx({
      'btn': true,
      'btn-primary': true,
      // 'disabled': !this.state.fieldGroups[1].valid,
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
                    { this.state.step === 1 && <div className="step1">
                      <Text group={1} onValidationUpdate={this.updateFieldGroups} value={this.state.fieldGroups[0].fields[0].value} name="Email" labelFor="Email" labelText="Email Address" validations="isEmail" validationError="Please enter a valid Email Address." />
                      <Text group={1} onValidationUpdate={this.updateFieldGroups} value={this.state.fieldGroups[0].fields[1].value} name="DateOfBirth" labelFor="DateOfBirth" labelText="Date of Birth" validations="isDate" validationError="Please enter your DOB in the format dd/mm/yyyy" required />
                      <Dropdown group={1} onValidationUpdate={this.updateFieldGroups} value={this.state.fieldGroups[0].fields[2].value} name="Gender" labelFor="Gender" labelText="Gender" validations="isIn:['Male', 'Female', 'Other']" options={['', 'Male', 'Female', 'Other']} required />
                      <Text group={1} onValidationUpdate={this.updateFieldGroups} value={this.state.fieldGroups[0].fields[3].value} name="Industry" labelFor="Industry" labelText="Industry" />
                      <button className={step1NextBtnCx} onClick={() => { this.goToStep(2) }} type="button" disabled={!this.state.fieldGroups[0].valid}>Next</button>
                      <button className={submitCx} type="submit" disabled={!this.state.canSubmit}>Submit</button>
                    </div> }
                    { this.state.step === 2 && <div className="step2">
                      <legend>{survey.questionSets[0].name}</legend>
                      {survey.questionSets[0].set.map((set, i) => (
                        <Radio group={2} onValidationUpdate={this.updateFieldGroups} value={this.state.fieldGroups[1].fields[i].value} name={'set' + i.toString()} key={i} options={set} number={i} validations="isIn:['intrinsic', 'instrumental']" validationError="Please choose an option." required />
                      ))}
                      <Row justifyContent="around">
                        <button className={backBtnCx} onClick={() => { this.goToStep(1) }} type="button">Back</button>
                        <button className={step2NextBtnCx} onClick={() => { this.goToStep(3) }} type="button" disabled={!this.state.fieldGroups[1].valid}>Next</button>
                      </Row>
                    </div> }
                    { this.state.step === 3 && <div className="step3">
                      <div>
                        Things
                      </div>
                      <Row justifyContent="around">
                        <button className={backBtnCx} onClick={() => { this.goToStep(2) }} type="button">Back</button>
                        <button className={step3NextBtnCx} onClick={() => { this.goToStep(4) }} type="button">Next</button>
                      </Row>
                    </div> }
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
