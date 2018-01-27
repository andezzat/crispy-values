import { survey, postcodes } from '~/data/';

// const controller = {
//
// };

const ShuffleArray = (array) =>
{
  let i = array.length - 1;
  for (i > 0; i--;) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

const stateHelper = {
  CreateInitialState: () =>
  {
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
        const valid = step.fields.every((field) => !field.required);
        initialState.steps.push({
          valid,
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
            value: field.type === 'slider' ? 0 : '',
            values: collection.type === 'questionnaire' && field.type === 'slider' ? field.values : {},
            valid: false,
            required: field.required,
          });
        });

        stepNumber++;
      });
    });

    survey.formCollections.forEach((collection, i) => {
      let firstStep;
      if (i === 0) {
        firstStep = 1;
      } else {
        firstStep = initialState.collectionDetails[i - 1].lastStep + 1;
      }

      initialState.collectionDetails.push({
        title: collection.title,
        description: collection.description,
        firstStep,
        lastStep: firstStep + collection.steps.length - 1
      });
    });

    survey.formCollections.forEach((collection, i) => {
      collection.steps.forEach((step, j) => {
        if (step.randomize) {
          ShuffleArray(step.fields);
        }
        initialState.stepDetails.push(step);
      });
    });

    return initialState;
  },

  AddFormsyValidationRules: (Formsy, state) =>
  {
    Formsy.addValidationRule('isBetween', (values, value, array) => {
     return value >= array[0] && value <= array[1];
    });

    Formsy.addValidationRule('isIn', (values, value, array) => {
     return array.indexOf(value) >= 0;
    });

    Formsy.addValidationRule('isPostcode', (values, value, array) => {
      var isValid = false;
      const countryField = state.steps[0].fields.find((field) => field.name === 'Country');

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
  }
};

module.exports = {
    // controller,
    stateHelper
};
