module.exports = {
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
              name: 'Email',
              label: 'Email',
              type: 'text',
              validations: 'isEmail',
              validationError: 'Please enter a valid Email Address.',
              required: false
            },
            {
              name: 'DateOfBirth',
              label: 'Date of Birth',
              type: 'text',
              validations: 'isDate',
              validationError: 'Please enter your DOB in the format dd/mm/yyyy',
              required: true
            },
            {
              name: 'Gender',
              label: 'Gender',
              type: 'dropdown',
              validations: 'isIn',
              validationError: 'Please choose from the options above.',
              required: true,
              options: [ 'Male', 'Female', 'Other' ]
            },
            {
              name: 'Industry',
              label: 'Industry',
              type: 'dropdown',
              validations: 'isIn',
              validationError: 'Please choose from the options above.',
              required: true,
              options: [ 'Advertising', 'Creative Industries', 'Education', 'Farming', 'Fashion', 'Finance', 'Information Technology', 'Infrastructure', 'Manufacturing', 'Media', 'Retail', 'Robotics', 'Space', 'Telecom', 'Student', 'Other' ]
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
              validations: 'isIn',
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
              validations: 'isIn',
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
              validations: 'isIn',
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
              validations: 'isIn',
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
              validations: 'isIn',
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
              validations: 'isIn',
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
              validations: 'isIn',
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
              validations: 'isIn',
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
              validations: 'isIn',
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
              validations: 'isIn',
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
              validations: 'isIn',
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
              validations: 'isIn',
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
