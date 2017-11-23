import countries from './countries';

// Extracts country names only for each country.
const countryNames = countries.map((country) => country.name);

module.exports = {
  boundaryDivisor: 4,
  questionnaireFieldTypes: {
    radio: {
      multiplier: 2
    },
    slider: {
      labels: [
        'Unimportant',
        'Very important'
      ],
      options: [
        0, 1, 2, 3, 4, 5
      ]
    }
  },
  preStep: {
    title: 'Before We Begin',
    description: 'Please make sure you\'ve read our privacy policy & terms of use before you begin your Values Footprint test.',
    text: 'You can find the privacy policy & terms of use at the bottom of the page, by starting this test you agree to our terms and conditions.',
    buttons: {
      start: {
        name: 'Start',
        goToStep: 1,
        classes: [ 'btn', 'btn-outline-success' ]
      }
    }
  },
  formCollections: [
    {
      title: 'Before We Begin',
      description: 'Please fill in your details below. Fields marked with a * are mandatory.',
      type: 'details',
      steps: [
        {
          randomize: false,
          fields: [
            {
              name: 'Country',
              label: 'Country',
              type: 'dropdown',
              validations: {
                name: 'isIn'
              },
              validationError: 'Please select a country.',
              required: true,
              options: countryNames
            },
            {
              name: 'Postcode',
              label: 'Postcode',
              type: 'text',
              validations: {
                name: 'isPostcode'
              },
              validationError: 'Please enter a valid Postcode.',
              required: true
            },
            {
              name: 'Industry',
              label: 'Industry',
              type: 'dropdown',
              validations: {
                name: 'isIn'
              },
              validationError: 'Please choose from the options above.',
              required: true,
              options: [ 'Agriculture, Forestry and Fishing', 'Mining', 'Manufacturing', 'Electricity, Gas and Water Supply', 'Construction', 'Wholesale Trade', 'Retail Trade', 'Accomodation, Cafes and Restaurants', 'Transport and Storage', 'Communication Services', 'Finance and Insurance', 'Property and Business Services', 'Government Administration and Defence', 'Education', 'Health and Community Services', 'Cultural and Recreational Services', 'Personal and Other Services', 'Other', 'Unemployed' ]
            },
            {
              name: 'Age',
              label: 'Age',
              type: 'text',
              validations: {
                name: 'isBetween',
                values: [ 16, 99 ]
              },
              validationError: 'Please enter an Age between 16 and 99.',
              required: true
            },
            {
              name: 'Gender',
              label: 'Gender',
              type: 'dropdown',
              validations: {
                name: 'isIn'
              },
              validationError: 'Please choose from the options above.',
              required: true,
              options: [ 'Male', 'Female', 'Other' ]
            },
            {
              name: 'Email',
              label: 'Email',
              type: 'text',
              validations: {
                name: 'isEmail'
              },
              validationError: 'Please enter a valid Email Address.',
              required: false
            },
            {
              name: 'Reference',
              label: 'Reference Code',
              description: 'Please provide your reference code if applicable, otherwise, please leave blank.',
              type: 'text',
              validations: {
              },
              validationError: '',
              required: false
            },
          ],
        },
      ],
    },
    {
      title: 'Which is more true?',
      description: 'In each pair, select the value that you identify with the most (the one that feels more important to you).',
      type: 'questionnaire',
      steps: [
        {
          randomize: true,
          fields: [
            {
              type: 'radio',
              required: true,
              validations: {
                name: 'isIn'
              },
              validationError: 'Please choose one of the options.',
              options: [
                {
                  description: 'I see the environment as having intrinsic worth, nature for nature\'s sake',
                  value: 'intrinsic',
                  values: {
                    intrinsic: 1,
                    instrumental: 0,
                    self: 0,
                    other: 0,
                  },
                },
                {
                  description: 'I see the environment as a place in which things happen to me and people I know',
                  value: 'instrumental',
                  values: {
                    intrinsic: 0,
                    instrumental: 1,
                    self: 0,
                    other: 0,
                  },
                },
              ],
            },
            {
              type: 'radio',
              required: true,
              validations: {
                name: 'isIn'
              },
              validationError: 'Please choose one of the options.',
              options: [
                {
                  description: 'I see the environment as an ecosystem that needs to be respected, preserved, and protected',
                  value: 'intrinsic',
                  values: {
                    intrinsic: 1,
                    instrumental: 0,
                    self: 0,
                    other: 0,
                  },
                },
                {
                  description: 'I see the environment as a source of natural resources (i.e. wood, coal, minerals) that can be developed',
                  value: 'instrumental',
                  values: {
                    intrinsic: 0,
                    instrumental: 1,
                    self: 0,
                    other: 0,
                  },
                },
              ],
            },
            {
              type: 'radio',
              required: true,
              validations: {
                name: 'isIn'
              },
              validationError: 'Please choose one of the options.',
              options: [
                {
                  description: 'I see money as financial wealth',
                  value: 'intrinsic',
                  values: {
                    intrinsic: 1,
                    instrumental: 0,
                    self: 0,
                    other: 0,
                  },
                },
                {
                  description: 'I see money as financial resources (a means to an end)',
                  value: 'instrumental',
                  values: {
                    intrinsic: 0,
                    instrumental: 1,
                    self: 0,
                    other: 0,
                  },
                },
              ],
            },
            {
              type: 'radio',
              required: true,
              validations: {
                name: 'isIn'
              },
              validationError: 'Please choose one of the options.',
              options: [
                {
                  description: 'I see money as financial resources (a means to an end)',
                  value: 'intrinsic',
                  values: {
                    intrinsic: 0,
                    instrumental: 1,
                    self: 0,
                    other: 0,
                  },
                },
                {
                  description: 'I see money as a source for benevolence (altruism)',
                  value: 'instrumental-other',
                  values: {
                    intrinsic: 0,
                    instrumental: 1,
                    self: 0,
                    other: 1,
                  },
                },
              ],
            },
            {
              type: 'radio',
              required: true,
              validations: {
                name: 'isIn'
              },
              validationError: 'Please choose one of the options.',
              options: [
                {
                  description: 'People are useful because they are human beings and have inherent worth',
                  value: 'intrinsic',
                  values: {
                    intrinsic: 1,
                    instrumental: 0,
                    self: 0,
                    other: 0,
                  },
                },
                {
                  description: 'People are useful because of what they do or what they produce',
                  value: 'instrumental',
                  values: {
                    intrinsic: 0,
                    instrumental: 1,
                    self: 0,
                    other: 0,
                  },
                },
              ],
            },
            {
              type: 'radio',
              required: true,
              validations: {
                name: 'isIn'
              },
              validationError: 'Please choose one of the options.',
              options: [
                {
                  description: 'When I think of helping people, I think of my personal relationships or helping people I know',
                  value: 'self',
                  values: {
                    intrinsic: 0,
                    instrumental: 0,
                    self: 1,
                    other: 0,
                  },
                },
                {
                  description: 'When I think of helping people, I think of helping vulnerable people I don\'t know',
                  value: 'other',
                  values: {
                    intrinsic: 0,
                    instrumental: 0,
                    self: 0,
                    other: 1,
                  },
                },
              ],
            },
          ],
        },
        {
          randomize: true,
          fields: [
            {
              type: 'radio',
              required: true,
              validations: {
                name: 'isIn'
              },
              validationError: 'Please choose one of the options.',
              options: [
                {
                  description: 'A comfortable life (a prosperous life)',
                  value: 'intrinsic',
                  values: {
                    intrinsic: 1,
                    instrumental: 0,
                    self: 0,
                    other: 0,
                  },
                },
                {
                  description: 'Responsible (dependable, reliable)',
                  value: 'instrumental',
                  values: {
                    intrinsic: 0,
                    instrumental: 1,
                    self: 0,
                    other: 0,
                  },
                },
              ],
            },
            {
              type: 'radio',
              required: true,
              validations: {
                name: 'isIn'
              },
              validationError: 'Please choose one of the options.',
              options: [
                {
                  description: 'An exciting life (a stimulating, active life)',
                  value: 'intrinsic',
                  values: {
                    intrinsic: 1,
                    instrumental: 0,
                    self: 0,
                    other: 0,
                  },
                },
                {
                  description: 'Self-controlled (restrained, self-disciplined)',
                  value: 'instrumental',
                  values: {
                    intrinsic: 0,
                    instrumental: 1,
                    self: 0,
                    other: 0,
                  },
                },
              ],
            },
            {
              type: 'radio',
              required: true,
              validations: {
                name: 'isIn'
              },
              validationError: 'Please choose one of the options.',
              options: [
                {
                  description: 'A sense of accomplishment (lasting contribution)',
                  value: 'intrinsic',
                  values: {
                    intrinsic: 1,
                    instrumental: 0,
                    self: 0,
                    other: 0,
                  },
                },
                {
                  description: 'Capable (competent, effective)',
                  value: 'instrumental',
                  values: {
                    intrinsic: 0,
                    instrumental: 1,
                    self: 0,
                    other: 0,
                  },
                },
              ],
            },
            {
              type: 'radio',
              required: true,
              validations: {
                name: 'isIn'
              },
              validationError: 'Please choose one of the options.',
              options: [
                {
                  description: 'Freedom (independence, free choice)',
                  value: 'intrinsic',
                  values: {
                    intrinsic: 1,
                    instrumental: 0,
                    self: 0,
                    other: 0,
                  },
                },
                {
                  description: 'Obedient (dutiful, respectful)',
                  value: 'instrumental',
                  values: {
                    intrinsic: 0,
                    instrumental: 1,
                    self: 0,
                    other: 0,
                  },
                },
              ],
            },
            {
              type: 'radio',
              required: true,
              validations: {
                name: 'isIn'
              },
              validationError: 'Please choose one of the options.',
              options: [
                {
                  description: 'Happiness (contentedness)',
                  value: 'intrinsic',
                  values: {
                    intrinsic: 1,
                    instrumental: 0,
                    self: 0,
                    other: 0,
                  },
                },
                {
                  description: 'Cheerful (lighthearted, joyful)',
                  value: 'instrumental',
                  values: {
                    intrinsic: 0,
                    instrumental: 1,
                    self: 0,
                    other: 0,
                  },
                },
              ],
            },
            {
              type: 'radio',
              required: true,
              validations: {
                name: 'isIn'
              },
              validationError: 'Please choose one of the options.',
              options: [
                {
                  description: 'Inner harmony (freedom from inner conflict)',
                  value: 'intrinsic',
                  values: {
                    intrinsic: 1,
                    instrumental: 0,
                    self: 0,
                    other: 0,
                  },
                },
                {
                  description: 'Imaginative (daring, creative)',
                  value: 'instrumental',
                  values: {
                    intrinsic: 0,
                    instrumental: 1,
                    self: 0,
                    other: 0,
                  },
                },
              ],
            },
          ]
        },
        {
          randomize: true,
          fields: [
            {
              type: 'radio',
              required: true,
              validations: {
                name: 'isIn'
              },
              validationError: 'Please choose one of the options.',
              options: [
                {
                  description: 'Mature love (sexual and spiritual intimacy)',
                  value: 'intrinsic',
                  values: {
                    intrinsic: 1,
                    instrumental: 0,
                    self: 0,
                    other: 0,
                  },
                },
                {
                  description: 'Loving (affectionate, tender)',
                  value: 'instrumental',
                  values: {
                    intrinsic: 0,
                    instrumental: 1,
                    self: 0,
                    other: 0,
                  },
                },
              ],
            },
            {
              type: 'radio',
              required: true,
              validations: {
                name: 'isIn'
              },
              validationError: 'Please choose one of the options.',
              options: [
                {
                  description: 'Pleasure (an enjoyable, leisurely life)',
                  value: 'intrinsic',
                  values: {
                    intrinsic: 1,
                    instrumental: 0,
                    self: 0,
                    other: 0,
                  },
                },
                {
                  description: 'Logical (consistent, rational)',
                  value: 'instrumental',
                  values: {
                    intrinsic: 0,
                    instrumental: 1,
                    self: 0,
                    other: 0,
                  },
                },
              ],
            },
            {
              type: 'radio',
              required: true,
              validations: {
                name: 'isIn'
              },
              validationError: 'Please choose one of the options.',
              options: [
                {
                  description: 'Social recognition (respect, admiration)',
                  value: 'intrinsic',
                  values: {
                    intrinsic: 1,
                    instrumental: 0,
                    self: 0,
                    other: 0,
                  },
                },
                {
                  description: 'Courageous (standing up for your beliefs)',
                  value: 'instrumental',
                  values: {
                    intrinsic: 0,
                    instrumental: 1,
                    self: 0,
                    other: 0,
                  },
                },
              ],
            },
            {
              type: 'radio',
              required: true,
              validations: {
                name: 'isIn'
              },
              validationError: 'Please choose one of the options.',
              options: [
                {
                  description: 'True friendship (close companionship)',
                  value: 'intrinsic',
                  values: {
                    intrinsic: 1,
                    instrumental: 0,
                    self: 0,
                    other: 0,
                  },
                },
                {
                  description: 'Independent (self-reliant, self-sufficient)',
                  value: 'instrumental',
                  values: {
                    intrinsic: 0,
                    instrumental: 1,
                    self: 0,
                    other: 0,
                  },
                },
              ],
            },
            {
              type: 'radio',
              required: true,
              validations: {
                name: 'isIn'
              },
              validationError: 'Please choose one of the options.',
              options: [
                {
                  description: 'Wisdom (a mature understanding of life)',
                  value: 'intrinsic',
                  values: {
                    intrinsic: 1,
                    instrumental: 0,
                    self: 0,
                    other: 0,
                  },
                },
                {
                  description: 'Intellectual (intelligent, reflective)',
                  value: 'instrumental',
                  values: {
                    intrinsic: 0,
                    instrumental: 1,
                    self: 0,
                    other: 0,
                  },
                },
              ],
            },
          ]
        },
        {
          randomize: true,
          fields: [
            {
              type: 'radio',
              required: true,
              validations: {
                name: 'isIn'
              },
              validationError: 'Please choose one of the options.',
              options: [
                {
                  description: 'A comfortable life (a prosperous life)',
                  value: 'self',
                  values: {
                    intrinsic: 0,
                    instrumental: 0,
                    self: 1,
                    other: 0,
                  },
                },
                {
                  description: 'Helpful (working for the welfare of others)',
                  value: 'instrumental',
                  values: {
                    intrinsic: 0,
                    instrumental: 0,
                    self: 0,
                    other: 1,
                  },
                },
              ],
            },
            {
              type: 'radio',
              required: true,
              validations: {
                name: 'isIn'
              },
              validationError: 'Please choose one of the options.',
              options: [
                {
                  description: 'An exciting life (a stimulating, active life)',
                  value: 'self',
                  values: {
                    intrinsic: 0,
                    instrumental: 0,
                    self: 1,
                    other: 0,
                  },
                },
                {
                  description: 'Responsible (dependable, reliable)',
                  value: 'instrumental',
                  values: {
                    intrinsic: 0,
                    instrumental: 0,
                    self: 0,
                    other: 1,
                  },
                },
              ],
            },
            {
              type: 'radio',
              required: true,
              validations: {
                name: 'isIn'
              },
              validationError: 'Please choose one of the options.',
              options: [
                {
                  description: 'Capable (competent, effective)',
                  value: 'self',
                  values: {
                    intrinsic: 0,
                    instrumental: 0,
                    self: 1,
                    other: 0,
                  },
                },
                {
                  description: 'Honest (sincere, truthful)',
                  value: 'instrumental',
                  values: {
                    intrinsic: 0,
                    instrumental: 0,
                    self: 0,
                    other: 1,
                  },
                },
              ],
            },
            {
              type: 'radio',
              required: true,
              validations: {
                name: 'isIn'
              },
              validationError: 'Please choose one of the options.',
              options: [
                {
                  description: 'Clean (neat, tidy)',
                  value: 'self',
                  values: {
                    intrinsic: 0,
                    instrumental: 0,
                    self: 1,
                    other: 0,
                  },
                },
                {
                  description: 'Polite (courteous, well-mannered)',
                  value: 'instrumental',
                  values: {
                    intrinsic: 0,
                    instrumental: 0,
                    self: 0,
                    other: 1,
                  },
                },
              ],
            },
            {
              type: 'radio',
              required: true,
              validations: {
                name: 'isIn'
              },
              validationError: 'Please choose one of the options.',
              options: [
                {
                  description: 'Freedom (independence, free choice)',
                  value: 'self',
                  values: {
                    intrinsic: 0,
                    instrumental: 0,
                    self: 1,
                    other: 0,
                  },
                },
                {
                  description: 'Family security (taking care of loved ones)',
                  value: 'instrumental',
                  values: {
                    intrinsic: 0,
                    instrumental: 0,
                    self: 0,
                    other: 1,
                  },
                },
              ],
            },
            {
              type: 'radio',
              required: true,
              validations: {
                name: 'isIn'
              },
              validationError: 'Please choose one of the options.',
              options: [
                {
                  description: 'Imaginative (daring, creative)',
                  value: 'self',
                  values: {
                    intrinsic: 0,
                    instrumental: 0,
                    self: 1,
                    other: 0,
                  },
                },
                {
                  description: 'A world of beauty (beauty of nature and the arts)',
                  value: 'instrumental',
                  values: {
                    intrinsic: 0,
                    instrumental: 0,
                    self: 0,
                    other: 1,
                  },
                },
              ],
            },
            {
              type: 'radio',
              required: true,
              validations: {
                name: 'isIn'
              },
              validationError: 'Please choose one of the options.',
              options: [
                {
                  description: 'Inner harmony (freedom from inner conflict)',
                  value: 'self',
                  values: {
                    intrinsic: 0,
                    instrumental: 0,
                    self: 1,
                    other: 0,
                  },
                },
                {
                  description: 'A world at peace (free of war and conflict)',
                  value: 'instrumental',
                  values: {
                    intrinsic: 0,
                    instrumental: 0,
                    self: 0,
                    other: 1,
                  },
                },
              ],
            },
          ]
        },
        {
          randomize: true,
          fields: [
            {
              type: 'radio',
              required: true,
              validations: {
                name: 'isIn'
              },
              validationError: 'Please choose one of the options.',
              options: [
                {
                  description: 'Logical (consistent, rational)',
                  value: 'self',
                  values: {
                    intrinsic: 0,
                    instrumental: 0,
                    self: 1,
                    other: 0,
                  },
                },
                {
                  description: 'Forgiving (wiling to pardon others)',
                  value: 'instrumental',
                  values: {
                    intrinsic: 0,
                    instrumental: 0,
                    self: 0,
                    other: 1,
                  },
                },
              ],
            },
            {
              type: 'radio',
              required: true,
              validations: {
                name: 'isIn'
              },
              validationError: 'Please choose one of the options.',
              options: [
                {
                  description: 'Pleasure (an enjoyable, leisurely life)',
                  value: 'self',
                  values: {
                    intrinsic: 0,
                    instrumental: 0,
                    self: 1,
                    other: 0,
                  },
                },
                {
                  description: 'Equality (brotherhood, equal opportunity for all)',
                  value: 'instrumental',
                  values: {
                    intrinsic: 0,
                    instrumental: 0,
                    self: 0,
                    other: 1,
                  },
                },
              ],
            },
            {
              type: 'radio',
              required: true,
              validations: {
                name: 'isIn'
              },
              validationError: 'Please choose one of the options.',
              options: [
                {
                  description: 'Saved (eternal life)',
                  value: 'self',
                  values: {
                    intrinsic: 0,
                    instrumental: 0,
                    self: 1,
                    other: 0,
                  },
                },
                {
                  description: 'National security (protection from attack)',
                  value: 'instrumental',
                  values: {
                    intrinsic: 0,
                    instrumental: 0,
                    self: 0,
                    other: 1,
                  },
                },
              ],
            },
            {
              type: 'radio',
              required: true,
              validations: {
                name: 'isIn'
              },
              validationError: 'Please choose one of the options.',
              options: [
                {
                  description: 'Self-controlled (restrained, self-disciplined)',
                  value: 'self',
                  values: {
                    intrinsic: 0,
                    instrumental: 0,
                    self: 1,
                    other: 0,
                  },
                },
                {
                  description: 'Broadminded (open-minded)',
                  value: 'instrumental',
                  values: {
                    intrinsic: 0,
                    instrumental: 0,
                    self: 0,
                    other: 1,
                  },
                },
              ],
            },
            {
              type: 'radio',
              required: true,
              validations: {
                name: 'isIn'
              },
              validationError: 'Please choose one of the options.',
              options: [
                {
                  description: 'Self-respect (self-esteem)',
                  value: 'self',
                  values: {
                    intrinsic: 0,
                    instrumental: 0,
                    self: 1,
                    other: 0,
                  },
                },
                {
                  description: 'Social recognition (respect, admiration)',
                  value: 'instrumental',
                  values: {
                    intrinsic: 0,
                    instrumental: 0,
                    self: 0,
                    other: 1,
                  },
                },
              ],
            },
            {
              type: 'radio',
              required: true,
              validations: {
                name: 'isIn'
              },
              validationError: 'Please choose one of the options.',
              options: [
                {
                  description: 'Wisdom (a mature understanding of life)',
                  value: 'self',
                  values: {
                    intrinsic: 0,
                    instrumental: 0,
                    self: 1,
                    other: 0,
                  },
                },
                {
                  description: 'Mature love (sexual and spiritual intimacy)',
                  value: 'instrumental',
                  values: {
                    intrinsic: 0,
                    instrumental: 0,
                    self: 0,
                    other: 1,
                  },
                },
              ],
            },
            {
              type: 'radio',
              required: true,
              validations: {
                name: 'isIn'
              },
              validationError: 'Please choose one of the options.',
              options: [
                {
                  description: 'Independent (self-reliant, self-sufficient)',
                  value: 'self',
                  values: {
                    intrinsic: 0,
                    instrumental: 0,
                    self: 1,
                    other: 0,
                  },
                },
                {
                  description: 'Obedient (dutiful, respectful)',
                  value: 'instrumental',
                  values: {
                    intrinsic: 0,
                    instrumental: 0,
                    self: 0,
                    other: 1,
                  },
                },
              ],
            },
          ]
        }
      ],
    },
  ],
};
