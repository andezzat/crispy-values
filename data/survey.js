import countries from './countries';

// Extracts country names only for each country.
const countryNames = countries.map((country) => country.name);

module.exports = {
  boundaryDivisor: 4,
  preStep: {
    title: 'Before We Begin',
    description: 'Please make sure you\'ve read our privacy terms and conditions before you begin your Values Footprint test.',
    text: 'You can find our privacy statement at the bottom of the page, by starting this test you agree to our terms and conditions.',
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
      description: 'Select the statement that is more true for you.',
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
      title: 'What do you value?',
      description: 'Choose the option that best reflects how much you esteem each personal attribute or value below.',
      type: 'questionnaire',
      steps: [
        {
          randomize: true,
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
                self: 0,
                other: 1
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
                self: 0,
                other: 1
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
            },
            {
              type: 'dropdown',
              label: 'Family security (taking care of loved ones)',
              name: 'familySecurity',
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
            },
            {
              type: 'dropdown',
              label: 'Freedom (independence, free choice)',
              name: 'freedom',
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
              label: 'Happiness (contentedness)',
              name: 'happiness',
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
            }
          ]
        },
        {
          randomize: true,
          fields: [
            {
              type: 'dropdown',
              label: 'Inner harmony (freedom from inner conflict)',
              name: 'innerHarmony',
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
              label: 'Mature love (sexual and spiritual intimacy)',
              name: 'matureLove',
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
            },
            {
              type: 'dropdown',
              label: 'National security (protection from attack)',
              name: 'nationalSecurity',
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
            },
            {
              type: 'dropdown',
              label: 'Pleasure (an enjoyable, leisurely life)',
              name: 'equality',
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
              label: 'Saved (eternal life)',
              name: 'saved',
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
              label: 'Self-respect (self-esteem)',
              name: 'self-respect',
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
              label: 'Social recognition (respect, admiration)',
              name: 'socialRecognition',
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
            },
            {
              type: 'dropdown',
              label: 'True friendship (close companionship)',
              name: 'trueFriendship',
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
            },
            {
              type: 'dropdown',
              label: 'Wisdom (a mature understanding of life)',
              name: 'wisdom',
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
            }
          ]
        },
        {
          randomize: true,
          fields: [
            {
              type: 'dropdown',
              label: 'Ambitious (hard-working, aspiring)',
              name: 'ambitious',
              required: true,
              validations: {
                name: 'isIn'
              },
              validationError: 'Please choose one of the options.',
              values: {
                intrinsic: 0,
                instrumental: 1,
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
              label: 'Broadminded (open-minded)',
              name: 'broadminded',
              required: true,
              validations: {
                name: 'isIn'
              },
              validationError: 'Please choose one of the options.',
              values: {
                intrinsic: 0,
                instrumental: 1,
                self: 0,
                other: 1
              },
              options: [
                'Not at all',
                'A little',
                'A lot'
              ]
            },
            {
              type: 'dropdown',
              label: 'Capable (competent, effective)',
              name: 'capable',
              required: true,
              validations: {
                name: 'isIn'
              },
              validationError: 'Please choose one of the options.',
              values: {
                intrinsic: 0,
                instrumental: 1,
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
              label: 'Cheerful (lighthearted, joyful)',
              name: 'cheerful',
              required: true,
              validations: {
                name: 'isIn'
              },
              validationError: 'Please choose one of the options.',
              values: {
                intrinsic: 0,
                instrumental: 1,
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
              label: 'Clean (neat, tidy)',
              name: 'clean',
              required: true,
              validations: {
                name: 'isIn'
              },
              validationError: 'Please choose one of the options.',
              values: {
                intrinsic: 0,
                instrumental: 1,
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
              label: 'Courageous (standing up for your beliefs)',
              name: 'courageous',
              required: true,
              validations: {
                name: 'isIn'
              },
              validationError: 'Please choose one of the options.',
              values: {
                intrinsic: 0,
                instrumental: 1,
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
              label: 'Forgiving (wiling to pardon others)',
              name: 'forgiving',
              required: true,
              validations: {
                name: 'isIn'
              },
              validationError: 'Please choose one of the options.',
              values: {
                intrinsic: 0,
                instrumental: 1,
                self: 0,
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
              label: 'Helpful (working for the welfare of others)',
              name: 'helpful',
              required: true,
              validations: {
                name: 'isIn'
              },
              validationError: 'Please choose one of the options.',
              values: {
                intrinsic: 0,
                instrumental: 1,
                self: 0,
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
              label: 'Honest (sincere, truthful)',
              name: 'honest',
              required: true,
              validations: {
                name: 'isIn'
              },
              validationError: 'Please choose one of the options.',
              values: {
                intrinsic: 0,
                instrumental: 1,
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
        },
        {
          randomize: true,
          fields: [
            {
              type: 'dropdown',
              label: 'Imaginative (daring, creative)',
              name: 'imaginative',
              required: true,
              validations: {
                name: 'isIn'
              },
              validationError: 'Please choose one of the options.',
              values: {
                intrinsic: 0,
                instrumental: 1,
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
              label: 'Independent (self-reliant, self-sufficient)',
              name: 'independent',
              required: true,
              validations: {
                name: 'isIn'
              },
              validationError: 'Please choose one of the options.',
              values: {
                intrinsic: 0,
                instrumental: 1,
                self: 2,
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
              label: 'Intellectual (intelligent, reflective)',
              name: 'intellectual',
              required: true,
              validations: {
                name: 'isIn'
              },
              validationError: 'Please choose one of the options.',
              values: {
                intrinsic: 0,
                instrumental: 1,
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
              label: 'Logical (consistent, rational)',
              name: 'logical',
              required: true,
              validations: {
                name: 'isIn'
              },
              validationError: 'Please choose one of the options.',
              values: {
                intrinsic: 0,
                instrumental: 1,
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
              label: 'Loving (affectionate, tender)',
              name: 'loving',
              required: true,
              validations: {
                name: 'isIn'
              },
              validationError: 'Please choose one of the options.',
              values: {
                intrinsic: 0,
                instrumental: 1,
                self: 0,
                other: 1
              },
              options: [
                'Not at all',
                'A little',
                'A lot'
              ]
            },
            {
              type: 'dropdown',
              label: 'Obedient (dutiful, respectful)',
              name: 'obedient',
              required: true,
              validations: {
                name: 'isIn'
              },
              validationError: 'Please choose one of the options.',
              values: {
                intrinsic: 0,
                instrumental: 1,
                self: 0,
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
              label: 'Polite (courteous, well-mannered)',
              name: 'polite',
              required: true,
              validations: {
                name: 'isIn'
              },
              validationError: 'Please choose one of the options.',
              values: {
                intrinsic: 0,
                instrumental: 1,
                self: 0,
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
              label: 'Responsible (dependable, reliable)',
              name: 'responsible',
              required: true,
              validations: {
                name: 'isIn'
              },
              validationError: 'Please choose one of the options.',
              values: {
                intrinsic: 0,
                instrumental: 1,
                self: 0,
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
              label: 'Self-controlled (restrained, self-disciplined)',
              name: 'self-controlled',
              required: true,
              validations: {
                name: 'isIn'
              },
              validationError: 'Please choose one of the options.',
              values: {
                intrinsic: 0,
                instrumental: 1,
                self: 1,
                other: 0
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
