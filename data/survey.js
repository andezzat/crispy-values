import countries from './countries';

// Extracts country names only for each country.
const countryNames = countries.map((country) => country.name);

module.exports = {
  boundaryDivisor: 3,
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
      description: 'Select the statement that is more true for you from each pair of options below.',
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
              type: 'slider',
              label: 'A comfortable life (a prosperous life)',
              name: 'comfortableLife',
              required: false,
              validations: {
                name: 'isIn'
              },
              validationError: 'Please choose one of the options.',
              values: {
                intrinsic: 1,
                instrumental: 0,
                self: 1,
                other: 0
              }
            },
            {
              type: 'slider',
              label: 'An exciting life (a stimulating, active life)',
              name: 'excitingLife',
              required: false,
              validations: {
                name: 'isIn'
              },
              validationError: 'Please choose one of the options.',
              values: {
                intrinsic: 1,
                instrumental: 0,
                self: 1,
                other: 0
              }
            },
            {
              type: 'slider',
              label: 'A sense of accomplishment (lasting contribution)',
              name: 'accomplishment',
              required: false,
              validations: {
                name: 'isIn'
              },
              validationError: 'Please choose one of the options.',
              values: {
                intrinsic: 1,
                instrumental: 0,
                self: 1,
                other: 0
              }
            },
            {
              type: 'slider',
              label: 'A world at peace (free of war and conflict)',
              name: 'worldPeace',
              required: false,
              validations: {
                name: 'isIn'
              },
              validationError: 'Please choose one of the options.',
              values: {
                intrinsic: 1,
                instrumental: 0,
                self: 0,
                other: 1
              }
            },
            {
              type: 'slider',
              label: 'A world of beauty (beauty of nature and the arts)',
              name: 'wordlBeauty',
              required: false,
              validations: {
                name: 'isIn'
              },
              validationError: 'Please choose one of the options.',
              values: {
                intrinsic: 1,
                instrumental: 0,
                self: 0,
                other: 1
              }
            },
            {
              type: 'slider',
              label: 'Equality (brotherhood, equal opportunity for all)',
              name: 'equality',
              required: false,
              validations: {
                name: 'isIn'
              },
              validationError: 'Please choose one of the options.',
              values: {
                intrinsic: 1,
                instrumental: 0,
                self: 0,
                other: 1
              }
            },
            {
              type: 'slider',
              label: 'Family security (taking care of loved ones)',
              name: 'familySecurity',
              required: false,
              validations: {
                name: 'isIn'
              },
              validationError: 'Please choose one of the options.',
              values: {
                intrinsic: 1,
                instrumental: 0,
                self: 0,
                other: 1
              }
            },
            {
              type: 'slider',
              label: 'Freedom (independence, free choice)',
              name: 'freedom',
              required: false,
              validations: {
                name: 'isIn'
              },
              validationError: 'Please choose one of the options.',
              values: {
                intrinsic: 1,
                instrumental: 0,
                self: 1,
                other: 0
              }
            },
            {
              type: 'slider',
              label: 'Happiness (contentedness)',
              name: 'happiness',
              required: false,
              validations: {
                name: 'isIn'
              },
              validationError: 'Please choose one of the options.',
              values: {
                intrinsic: 1,
                instrumental: 0,
                self: 1,
                other: 0
              }
            }
          ]
        },
        {
          randomize: true,
          fields: [
            {
              type: 'slider',
              label: 'Inner harmony (freedom from inner conflict)',
              name: 'innerHarmony',
              required: false,
              validations: {
                name: 'isIn'
              },
              validationError: 'Please choose one of the options.',
              values: {
                intrinsic: 1,
                instrumental: 0,
                self: 1,
                other: 0
              }
            },
            {
              type: 'slider',
              label: 'Mature love (sexual and spiritual intimacy)',
              name: 'matureLove',
              required: false,
              validations: {
                name: 'isIn'
              },
              validationError: 'Please choose one of the options.',
              values: {
                intrinsic: 1,
                instrumental: 0,
                self: 0,
                other: 1
              }
            },
            {
              type: 'slider',
              label: 'National security (protection from attack)',
              name: 'nationalSecurity',
              required: false,
              validations: {
                name: 'isIn'
              },
              validationError: 'Please choose one of the options.',
              values: {
                intrinsic: 1,
                instrumental: 0,
                self: 0,
                other: 1
              }
            },
            {
              type: 'slider',
              label: 'Pleasure (an enjoyable, leisurely life)',
              name: 'equality',
              required: false,
              validations: {
                name: 'isIn'
              },
              validationError: 'Please choose one of the options.',
              values: {
                intrinsic: 1,
                instrumental: 0,
                self: 1,
                other: 0
              }
            },
            {
              type: 'slider',
              label: 'Saved (eternal life)',
              name: 'saved',
              required: false,
              validations: {
                name: 'isIn'
              },
              validationError: 'Please choose one of the options.',
              values: {
                intrinsic: 1,
                instrumental: 0,
                self: 1,
                other: 0
              }
            },
            {
              type: 'slider',
              label: 'Self-respect (self-esteem)',
              name: 'self-respect',
              required: false,
              validations: {
                name: 'isIn'
              },
              validationError: 'Please choose one of the options.',
              values: {
                intrinsic: 1,
                instrumental: 0,
                self: 1,
                other: 0
              }
            },
            {
              type: 'slider',
              label: 'Social recognition (respect, admiration)',
              name: 'socialRecognition',
              required: false,
              validations: {
                name: 'isIn'
              },
              validationError: 'Please choose one of the options.',
              values: {
                intrinsic: 1,
                instrumental: 0,
                self: 0,
                other: 1
              }
            },
            {
              type: 'slider',
              label: 'True friendship (close companionship)',
              name: 'trueFriendship',
              required: false,
              validations: {
                name: 'isIn'
              },
              validationError: 'Please choose one of the options.',
              values: {
                intrinsic: 1,
                instrumental: 0,
                self: 0,
                other: 1
              }
            },
            {
              type: 'slider',
              label: 'Wisdom (a mature understanding of life)',
              name: 'wisdom',
              required: false,
              validations: {
                name: 'isIn'
              },
              validationError: 'Please choose one of the options.',
              values: {
                intrinsic: 1,
                instrumental: 0,
                self: 1,
                other: 0
              }
            }
          ]
        },
        {
          randomize: true,
          fields: [
            {
              type: 'slider',
              label: 'Ambitious (hard-working, aspiring)',
              name: 'ambitious',
              required: false,
              validations: {
                name: 'isIn'
              },
              validationError: 'Please choose one of the options.',
              values: {
                intrinsic: 0,
                instrumental: 1,
                self: 1,
                other: 0
              }
            },
            {
              type: 'slider',
              label: 'Broadminded (open-minded)',
              name: 'broadminded',
              required: false,
              validations: {
                name: 'isIn'
              },
              validationError: 'Please choose one of the options.',
              values: {
                intrinsic: 0,
                instrumental: 1,
                self: 0,
                other: 1
              }
            },
            {
              type: 'slider',
              label: 'Capable (competent, effective)',
              name: 'capable',
              required: false,
              validations: {
                name: 'isIn'
              },
              validationError: 'Please choose one of the options.',
              values: {
                intrinsic: 0,
                instrumental: 1,
                self: 1,
                other: 0
              }
            },
            {
              type: 'slider',
              label: 'Cheerful (lighthearted, joyful)',
              name: 'cheerful',
              required: false,
              validations: {
                name: 'isIn'
              },
              validationError: 'Please choose one of the options.',
              values: {
                intrinsic: 0,
                instrumental: 1,
                self: 1,
                other: 0
              }
            },
            {
              type: 'slider',
              label: 'Clean (neat, tidy)',
              name: 'clean',
              required: false,
              validations: {
                name: 'isIn'
              },
              validationError: 'Please choose one of the options.',
              values: {
                intrinsic: 0,
                instrumental: 1,
                self: 1,
                other: 0
              }
            },
            {
              type: 'slider',
              label: 'Courageous (standing up for your beliefs)',
              name: 'courageous',
              required: false,
              validations: {
                name: 'isIn'
              },
              validationError: 'Please choose one of the options.',
              values: {
                intrinsic: 0,
                instrumental: 1,
                self: 1,
                other: 0
              }
            },
            {
              type: 'slider',
              label: 'Forgiving (wiling to pardon others)',
              name: 'forgiving',
              required: false,
              validations: {
                name: 'isIn'
              },
              validationError: 'Please choose one of the options.',
              values: {
                intrinsic: 0,
                instrumental: 1,
                self: 0,
                other: 2
              }
            },
            {
              type: 'slider',
              label: 'Helpful (working for the welfare of others)',
              name: 'helpful',
              required: false,
              validations: {
                name: 'isIn'
              },
              validationError: 'Please choose one of the options.',
              values: {
                intrinsic: 0,
                instrumental: 1,
                self: 0,
                other: 2
              }
            },
            {
              type: 'slider',
              label: 'Honest (sincere, truthful)',
              name: 'honest',
              required: false,
              validations: {
                name: 'isIn'
              },
              validationError: 'Please choose one of the options.',
              values: {
                intrinsic: 0,
                instrumental: 1,
                self: 0,
                other: 1
              }
            }
          ]
        },
        {
          randomize: true,
          fields: [
            {
              type: 'slider',
              label: 'Imaginative (daring, creative)',
              name: 'imaginative',
              required: false,
              validations: {
                name: 'isIn'
              },
              validationError: 'Please choose one of the options.',
              values: {
                intrinsic: 0,
                instrumental: 1,
                self: 1,
                other: 0
              }
            },
            {
              type: 'slider',
              label: 'Independent (self-reliant, self-sufficient)',
              name: 'independent',
              required: false,
              validations: {
                name: 'isIn'
              },
              validationError: 'Please choose one of the options.',
              values: {
                intrinsic: 0,
                instrumental: 1,
                self: 2,
                other: 0
              }
            },
            {
              type: 'slider',
              label: 'Intellectual (intelligent, reflective)',
              name: 'intellectual',
              required: false,
              validations: {
                name: 'isIn'
              },
              validationError: 'Please choose one of the options.',
              values: {
                intrinsic: 0,
                instrumental: 1,
                self: 1,
                other: 0
              }
            },
            {
              type: 'slider',
              label: 'Logical (consistent, rational)',
              name: 'logical',
              required: false,
              validations: {
                name: 'isIn'
              },
              validationError: 'Please choose one of the options.',
              values: {
                intrinsic: 0,
                instrumental: 1,
                self: 1,
                other: 0
              }
            },
            {
              type: 'slider',
              label: 'Loving (affectionate, tender)',
              name: 'loving',
              required: false,
              validations: {
                name: 'isIn'
              },
              validationError: 'Please choose one of the options.',
              values: {
                intrinsic: 0,
                instrumental: 1,
                self: 0,
                other: 1
              }
            },
            {
              type: 'slider',
              label: 'Obedient (dutiful, respectful)',
              name: 'obedient',
              required: false,
              validations: {
                name: 'isIn'
              },
              validationError: 'Please choose one of the options.',
              values: {
                intrinsic: 0,
                instrumental: 1,
                self: 0,
                other: 2
              }
            },
            {
              type: 'slider',
              label: 'Polite (courteous, well-mannered)',
              name: 'polite',
              required: false,
              validations: {
                name: 'isIn'
              },
              validationError: 'Please choose one of the options.',
              values: {
                intrinsic: 0,
                instrumental: 1,
                self: 0,
                other: 2
              }
            },
            {
              type: 'slider',
              label: 'Responsible (dependable, reliable)',
              name: 'responsible',
              required: false,
              validations: {
                name: 'isIn'
              },
              validationError: 'Please choose one of the options.',
              values: {
                intrinsic: 0,
                instrumental: 1,
                self: 0,
                other: 2
              }
            },
            {
              type: 'slider',
              label: 'Self-controlled (restrained, self-disciplined)',
              name: 'self-controlled',
              required: false,
              validations: {
                name: 'isIn'
              },
              validationError: 'Please choose one of the options.',
              values: {
                intrinsic: 0,
                instrumental: 1,
                self: 1,
                other: 0
              }
            }
          ]
        }
      ]
    }
  ],
};
