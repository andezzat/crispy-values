import React from 'react';
import { findDOMNode } from 'react-dom';
import { withRouter } from 'react-router-dom';
import { instanceOf } from 'prop-types';
import Formsy from 'formsy-react';
import cx from 'classnames';
import 'whatwg-fetch';
import { withCookies, Cookies } from 'react-cookie';

import { Line } from 'react-progressbar.js'

import { survey, postcodes } from '../../../data/';

import Text from '../components/Survey/Form/Text.jsx';
import Dropdown from '../components/Survey/Form/Dropdown.jsx';
import Radio from '../components/Survey/Form/Radio.jsx'

import Row from '../../../lib/bootstrap/components/Row.jsx';

class Test extends React.Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };

  constructor(props, context) {
    super(props, context);

    this.shuffleArray = this.shuffleArray.bind(this);
    this.enableButton = this.enableButton.bind(this);
    this.disableButton = this.disableButton.bind(this);
    this.updateSteps = this.updateSteps.bind(this);
    this.isStepValid = this.isStepValid.bind(this);
    this.goToStep = this.goToStep.bind(this);
    this.handleError = this.handleError.bind(this);
    this.submit = this.submit.bind(this);

    const initialState = {
      steps: [],
      collectionDetails: [],
      stepDetails: [],
      canSubmit: false,
      currentStep: 0,
      progress: 0
    };

    let stepNumber = 0;
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
            name: field.name,
            type: field.type,
            indexes: [ i, j, k ],
            stepNumber,
            value: '',
            values: collection.type === 'questionnaire' && field.type === 'dropdown' ? field.values : {},
            valid: false,
            required: field.required,
          });
        });
        stepNumber++;
      });
    });

    survey.formCollections.forEach((collection, i) => {
      var firstStep;
      if (i === 0) {
        firstStep = 1;
      } else {
        firstStep = initialState.collectionDetails[i - 1].lastStep + 1;
      }

      initialState.collectionDetails.push({
        title: collection.title,
        description: collection.description,
        firstStep,
        lastStep: firstStep + collection.steps.length - 1,
      });
    });

    survey.formCollections.forEach((collection, i) => {
      collection.steps.forEach((step, j) => {
        if (step.randomize) {
          this.shuffleArray(step.fields);
        }
        initialState.stepDetails.push(step);
      });
    });

    this.state = initialState;

    // Add validation rules to Formsy
    Formsy.addValidationRule('isBetween', (values, value, array) => {
      return value >= array[0] && value <= array[1];
    });
    Formsy.addValidationRule('isIn', (values, value, array) => {
      return array.indexOf(value) >= 0;
    });
    Formsy.addValidationRule('isPostcode', (values, value, array) => {
      var isValid = false;
      const countryField = this.state.steps[0].fields.find((field) => field.name === 'Country');

      if (countryField.value === 'Australia') {
        postcodes.forEach((range) => {
          if (value >= range.from && value <= range.to) {
            isValid = true;
            return false; // Breaks out of loop
          }
        });
      } else {
        isValid = true;
      }
      return isValid;
    });
  };

  shuffleArray(array) {
    let i = array.length - 1;
    for (i > 0; i--;) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

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

        const option = survey.formCollections[collectionIndex].steps[stepIndex].fields[fieldIndex].options
          .find((opt) => { return opt.value === newField.value });
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
      progress: stepNumber / this.state.steps.length
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

  handleError(err) {
    this.props.history.push({
      pathname: '/error'
    });
  }

  submit() {
    this.disableButton();
    $(findDOMNode(this.refs.modal)).modal('show');

    const collections = survey.formCollections
      .filter((col) => col.type === 'questionnaire');

    const allValues = [];

    collections.forEach((col) => {
      col.steps.forEach((step) => {
        const dropdownFields = step.fields.filter((field) => field.type === 'dropdown');
        const radioFields = step.fields.filter((field) => field.type === 'radio');
        dropdownFields.forEach((field) => allValues.push(field.values));
        radioFields.forEach((field) => {
          field.options.forEach((opt) => allValues.push(opt.values));
        });
      });
    });

    const maxValues = {};

    // Calculates max score possible for a user to obtain for each value
    for (var property in allValues[0]) {
      if (allValues[0].hasOwnProperty(property)) {
        maxValues[property] = allValues.reduce((acc, val) => {
          return acc + (val[property] * 2)
        }, 0);
      }
    }

    const valueMappings = {};

    // Calculates boundary for each value based on max score
    // also checks if the max is valid
    for (var property in maxValues) {
      if (maxValues.hasOwnProperty(property)) {
        const value = maxValues[property];
        if (value === NaN || value === null || value === 0) {
          // Got a problem with one of the maxValues
          this.handleError('One of the max values is ', value);
        } else {
          // All good, proceed!
          valueMappings[property] = {
            max: value,
            boundary: value / survey.boundaryDivisor,
            valid: true,
          };
        }
      }
    }

    for (var property in valueMappings) {
      if (valueMappings.hasOwnProperty(property)) {
        if (valueMappings[property].valid === false) {
          this.handleError('One of the max values is ', value);
        }
      }
    }

    const result = {
      intrinsic: 0,
      instrumental: 0,
      self: 0,
      other: 0
    };

    const dropdownMappings = [
      { value: 'Not at all', multiplier: 0 },
      { value: 'A little', multiplier: 1 },
      { value: 'A lot', multiplier: 2 }
    ];

    // Calculates final score for each value based on form from this.state.steps
    this.state.steps.forEach((step) => {
      if (step.collectionType === 'questionnaire') {
        step.fields.forEach((field) => {
          if (field.type === 'radio') {
            for (var property in field.values) {
              if (field.values.hasOwnProperty(property) && result.hasOwnProperty(property)) {
                const scoreToAdd = field.values[property] * 2; // Radio questions are always * 2
                result[property] += scoreToAdd;
              }
            }
          } else if (field.type === 'dropdown') {
            for (var property in field.values) {
              if (field.values.hasOwnProperty(property) && result.hasOwnProperty(property)) {
                const multiplier = dropdownMappings.find((mapping) => mapping.value === field.value).multiplier;
                const scoreToAdd = field.values[property] * multiplier;
                result[property] += scoreToAdd;
              }
            }
          }
        });
      }
    });

    const netValues = [];

    // Caclulates net result for each value pair
    netValues.push({
      value: result.intrinsic > result.instrumental ? 'intrinsic' : 'instrumental',
      score: Math.abs(result.intrinsic - result.instrumental)
    });
    netValues.push({
      value: result.self > result.other ? 'self' : 'other',
      score: Math.abs(result.self - result.other)
    });

    // Checks if net values are within boundaries or not
    const valuesAttributes = netValues.map((net) => {
      if (net.score > valueMappings[net.value].boundary) {
        return net.value;
      } else {
        return 'none';
      }
    });

    var profileName;
    // Works out profile name based on values attributes
    if (valuesAttributes.every((value) => value === 'none')) {
      profileName = 'hybrid';
    } else {
      if (valuesAttributes.every((value) => value !== 'none')) {
        profileName = valuesAttributes[0] + '-' + valuesAttributes[1];
      } else {
        profileName = valuesAttributes.find((value) => value !== 'none');
      }
    }

    const data = {
      valueMappings,
      profileName,
    };

    // Chucks all user information fields from first step into data object;
    this.state.steps[0].fields.forEach((field) => {
      data[field.name.toLowerCase()] = field.value;
    });

    for (var property in result) {
      if (result.hasOwnProperty(property)) {
        data[property] = result[property];
      }
    }

    const POSTURL = process.env.NODE_ENV === 'production' ? 'https://www.valuesfootprint.com/results' : 'http://localhost:3000/results';

    const { cookies } = this.props;

    fetch(POSTURL, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' }
    });

    // Insert each value's name and its score inside an object into values array
    // This makes it easy to map into React markup
    const values = [];
    for (var property in result) {
      values.push({
        name: property[0].toUpperCase() + property.slice(1),
        score: result[property]
      });
    }

    // Store profile data in cookies
    const resultCookie = JSON.stringify({
      profileName,
      values,
      valueMappings
    });
    cookies.set('result', resultCookie);

    // Hide modal
    $(findDOMNode(this.refs.modal)).modal('hide');

    // Redirect user to their profile
    this.props.history.push({
      pathname: '/profile',
      search: '?name=' + profileName.replace('-', ''),
    });
  };

  render() {
    const { collectionDetails, stepDetails } = this.state;

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

    return (
      <div>
        <div id="loadingModal" ref="modal" className="modal" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <p>Loading...</p>
              </div>
            </div>
          </div>
        </div>
        <div className="agency-start-project-intro">
        {this.state.currentStep === 0 &&
        <div className="container">
          <h3>{survey.preStep.title}</h3>
          <p>{survey.preStep.description}</p>
        </div>}
        {collectionDetails.map((collection, i) => {
          return (
            this.state.currentStep >= collection.firstStep && this.state.currentStep <= collection.lastStep &&
            <div key={i} className="container">
              <h3>{collection.title}</h3>
              <p>{collection.description}</p>
            </div>
          );
        })}
        </div>
        <div className={cx('container', 'progress')}>
          <Line
            progress={this.state.progress}
            options={{ strokeWidth: 2, color: '#28a745' }}
            containerClassName={'.progressBar'}
            />
        </div>
        <div className={surveyContainerCx} id="survey">
          <Row>
            <div className="col-md-12">
              <div className="card">
                <div className="card-body">
                  {this.state.currentStep === 0 &&
                  <div className="step0">
                    <p className="card-text">
                      {survey.preStep.text}
                    </p>
                    <hr />
                    <Row justifyContent="center">
                      <button
                        onClick={() => { this.goToStep(survey.preStep.buttons.start.goToStep) }}
                        className={cx(survey.preStep.buttons.start.classes)}>{survey.preStep.buttons.start.name}</button>
                    </Row>
                  </div>
                  }
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
                                  description={field.description}
                                  labelText={field.label}
                                  value={this.state.steps[i].fields[j].value}
                                  validations={field.validations.values ? field.validations.name + ':' + JSON.stringify(field.validations.values) : field.validations.name}
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
                                  description={field.description}
                                  labelText={field.label}
                                  value={this.state.steps[i].fields[j].value}
                                  validations={field.validations.name + ':' + JSON.stringify(field.options)}
                                  validationError={field.validationError}
                                  options={options}
                                  required={field.required}
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
                                  validations={field.validations.name + ':' + JSON.stringify(validValues)}
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

export default withRouter(withCookies(Test));
