import countries from './countries';

const countryNames = countries.map((country) => country.name);

module.exports = {
  preStep: {
    name: 'Before We Begin',
    description: 'Please make sure you\'ve read our privacy terms and conditions before you begin your Values Footprint test.',
    text: 'You can find our privacy statement below, alternatively, our privacy statement can be found at the very bottom of every page.',
    buttons: {
      privacy: {
        name: 'Privacy',
        href: '/privacy',
        classes: [ 'btn', 'btn-outline-info' ]
      },
      start: {
        name: 'Start',
        goToStep: 1,
        classes: [ 'btn', 'btn-outline-success' ]
      }
    }
  },
  formCollections: [
    {
      name: 'Your Details',
      description: 'We need to collect some personal information about you before we begin. We promise we won\'t divulge any of your details for any marketing purposes.',
      type: 'details',
      steps: [
        {
          randomize: false,
          fields: [
            {
              name: 'Reference',
              label: 'Reference Code',
              type: 'text',
              validations: {
              },
              validationError: '',
              required: false
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
          ],
        },
      ],
    },
    {
      name: 'Which is more true?',
      description: 'Pick the option that best describes you.',
      type: 'questionnaire',
      steps: [
        {
          randomize: false,
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
      ],
    },
    {
      name: 'What do you value?',
      description: 'Choose the option that best reflects how much you esteem each personal attribute or value below.',
      type: 'questionnaire',
      steps: [
        {
          randomize: false,
          fields: [
            {
              type: 'dropdown',
              label: 'A comfortable life (a prosperous life)',
              name: 'comfortableLife',
              required: true,
              validations: {
                name: 'isIn'
              },
              validationError: 'Please choose one of the options.',
              values: {
                intrinsic: 1,
                instrumental: 0,
                self: 1,
                other: 0
              },
              options: [
                'Not at all',
                'A little',
                'A lot'
              ]
            },
            {
              type: 'dropdown',
              label: 'An exciting life (a stimulating, active life)',
              name: 'excitingLife',
              required: true,
              validations: {
                name: 'isIn'
              },
              validationError: 'Please choose one of the options.',
              values: {
                intrinsic: 1,
                instrumental: 0,
                self: 1,
                other: 0
              },
              options: [
                'Not at all',
                'A little',
                'A lot'
              ]
            },
            {
              type: 'dropdown',
              label: 'A sense of accomplishment (lasting contribution)',
              name: 'accomplishment',
              required: true,
              validations: {
                name: 'isIn'
              },
              validationError: 'Please choose one of the options.',
              values: {
                intrinsic: 1,
                instrumental: 0,
                self: 1,
                other: 0
              },
              options: [
                'Not at all',
                'A little',
                'A lot'
              ]
            },
            {
              type: 'dropdown',
              label: 'A world at peace (free of war and conflict)',
              name: 'worldPeace',
              required: true,
              validations: {
                name: 'isIn'
              },
              validationError: 'Please choose one of the options.',
              values: {
                intrinsic: 1,
                instrumental: 0,
                self: 1,
                other: 2
              },
              options: [
                'Not at all',
                'A little',
                'A lot'
              ]
            },
            {
              type: 'dropdown',
              label: 'A world of beauty (beauty of nature and the arts)',
              name: 'wordlBeauty',
              required: true,
              validations: {
                name: 'isIn'
              },
              validationError: 'Please choose one of the options.',
              values: {
                intrinsic: 1,
                instrumental: 0,
                self: 1,
                other: 2
              },
              options: [
                'Not at all',
                'A little',
                'A lot'
              ]
            },
            {
              type: 'dropdown',
              label: 'Equality (brotherhood, equal opportunity for all)',
              name: 'equality',
              required: true,
              validations: {
                name: 'isIn'
              },
              validationError: 'Please choose one of the options.',
              values: {
                intrinsic: 1,
                instrumental: 0,
                self: 0,
                other: 1
              },
              options: [
                'Not at all',
                'A little',
                'A lot'
              ]
            }
          ]
        }
      ]
    }
  ],
};
