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
    this.updateSteps = this.updateSteps.bind(this);
    this.isStepValid = this.isStepValid.bind(this);
    this.goToStep = this.goToStep.bind(this);
    this.submit = this.submit.bind(this);

    const initialState = {
      steps: [],
      canSubmit: false,
      currentStep: 1,
    };

    var stepNumber = 0;
    survey.formCollections.forEach((collection, i) => {
      collection.steps.forEach((step, j) => {
        initialState.steps.push({
          valid: false,
          collectionType: collection.type,
          fields: [],
        });
        step.fields.forEach((field, k) => {
          initialState.steps[stepNumber].fields.push({
            id: k,
            type: field.type,
            indexes: [ i, j, k ],
            stepNumber,
            value: '',
            values: {},
            valid: false,
            required: field.required,
          });
        });
      });
      stepNumber++;
    });

    this.state = initialState;

    Formsy.addValidationRule('isDate', (values, value) => {
      const today = new Date();

      var DOB = '';
      if (value !== undefined && value !== null && value !== '') {
        DOB = value;
      }

      if (DOB.length !== 10) {
        return false;
      }
      if (DOB.slice(2, 3) !== '/' || DOB.slice(5, 6) !== '/') {
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

  isStepValid(stepNumber) {
    const step = this.state.steps[stepNumber - 1];

    const stepValidation = step.fields.map((field) => {
      if (field.required || field.value) {
        return field.valid;
      } else {
        return true;
      }
    });

    const valid = stepValidation.every((value) => { return value });
    return valid;
  };

  updateSteps(stepNumber, updatedField) {
    const newSteps = this.state.steps.slice();

    const newStep = newSteps[stepNumber - 1];
    const newField = newStep.fields.find((field) => {
      return field.id === updatedField.id;
    });

    newField.valid = updatedField.valid;
    newField.value = updatedField.value;
    if (newStep.collectionType === 'questionnaire') {
      if (newField.type === 'radio') {
        const collectionIndex = newField.indexes[0];
        const stepIndex = newField.indexes[1];
        const fieldIndex = newField.indexes[2];

        console.log(survey.formCollections[collectionIndex].steps[stepIndex].fields[fieldIndex]);

        const option = survey.formCollections[collectionIndex].steps[stepIndex].fields[fieldIndex].options
          .find((option) => { option.value === newField.value });
        newField.values = option.values;
      }
    }
    newStep.valid = this.isStepValid(stepNumber);

    this.setState({
      ...this.state,
      steps: newSteps,
    });
  };

  goToStep(stepNumber) {
    this.setState({
      ...this.state,
      currentStep: stepNumber,
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

  submit() {
    // Do something
  };

  render() {
    const submitBtnCx = cx({
      'btn': true,
      'btn-success': true,
      'disabled': !this.state.canSubmit,
    });

    const backBtnCx = cx({
      'btn': true,
      'btn-secondary': true,
    });

    const surveyContainerCx = cx(
      'container',
      'survey',
    );

    const collectionDetails = [];
    survey.formCollections.forEach((collection, i) => {
      var firstStep;
      if (i === 0) {
        firstStep = 1;
      } else {
        firstStep = collectionDetails[i - 1].lastStep + 1;
      }

      collectionDetails.push({
        name: collection.name,
        description: collection.description,
        firstStep,
        lastStep: firstStep + collection.steps.length - 1,
      });
    });

    const stepDetails = [];
    survey.formCollections.forEach((collection, i) => {
      collection.steps.forEach((step, j) => {
        stepDetails.push(step);
      });
    });

    return (
      <div>
        <div className="agency-start-project-intro">
        {collectionDetails.map((collection, i) => {
          return (
            this.state.currentStep >= collection.firstStep && this.state.currentStep <= collection.lastStep &&
            <div key={i} className="container">
              <h3>{collection.name}</h3>
              <p>{collection.description}</p>
            </div>
          );
        })}
        </div>
        <div className={surveyContainerCx}>
          <Row>
            <div className="col-md-12">
              <div className="card">
                <div className="card-body">
                  <Formsy.Form onValidSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton}>
                    {stepDetails.map((step, i) => {
                      const stepNumber = i + 1;
                      return (
                        this.state.currentStep === stepNumber &&
                        <div key={i} className={'step' + stepNumber}>
                          {step.fields.map((field, j) => {
                            if (field.type === 'text') {
                              return (
                                <Text
                                  key={j}
                                  id={j}
                                  stepNumber={stepNumber}
                                  onUpdate={this.updateSteps}
                                  name={field.name}
                                  labelFor={field.name}
                                  labelText={field.label}
                                  value={this.state.steps[i].fields[j].value}
                                  validations={field.validations}
                                  validationError={field.validationError}
                                  required={field.required}
                                />
                              )
                            } else if (field.type === 'dropdown') {
                              const options = field.options.slice();
                              options.unshift('');
                              return (
                                <Dropdown
                                  key={j}
                                  id={j}
                                  stepNumber={stepNumber}
                                  onUpdate={this.updateSteps}
                                  name={field.name}
                                  labelFor={field.name}
                                  labelText={field.label}
                                  value={this.state.steps[i].fields[j].value}
                                  validations={field.validations + ':' + JSON.stringify(field.options)}
                                  validationError={field.validationError}
                                  options={options}
                                />
                              )
                            } else if (field.type === 'radio') {
                              const validValues = field.options.map((opt) => opt.value);
                              return (
                                <Radio
                                  key={j}
                                  id={j}
                                  stepNumber={stepNumber}
                                  onUpdate={this.updateSteps}
                                  name={j.toString()}
                                  value={this.state.steps[i].fields[j].value}
                                  options={field.options}
                                  validations={field.validations + ':' + JSON.stringify(validValues)}
                                  validationError={field.validationError}
                                  required={field.required}
                                />
                              )
                            }
                          })}
                          <Row justifyContent="around">
                            {stepNumber !== 1 &&
                              <button
                                className={backBtnCx}
                                onClick={() => { this.goToStep(stepNumber - 1) }}
                                type="button">Back</button>}
                            {stepNumber === stepDetails.length
                            ? <button
                                className={submitBtnCx}
                                type="submit"
                                disabled={!this.state.canSubmit}>Submit</button>
                            : <button
                                className={cx({
                                  'btn': true,
                                  'btn-primary': true,
                                  'disabled': !this.state.steps[stepNumber - 1].valid})}
                                type="button"
                                disabled={!this.state.steps[stepNumber - 1].valid}
                                onClick={() => { this.goToStep(stepNumber + 1) }}>Next</button>}
                          </Row>
                        </div>
                      );
                    })}
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
