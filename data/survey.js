module.exports = {
  formCollections: [
    {
      name: 'Your Details',
      description: 'We need to collect some personal information about you before we begin. We promise we won\'t divulge any of your details for any marketing purposes.',
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
              required: false,
              options: [ 'Advertising', 'Creative Industries', 'Education', 'Farming', 'Fashion', 'Finance', 'Information Technology', 'Infrastructure', 'Manufacturing', 'Media', 'Retail', 'Robotics', 'Space', 'Telecom', 'Student', 'Other' ]
            },
          ],
        },
      ],
    },
    {
      name: 'Which is more true?',
      description: 'Pick the option that best describes you.',
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
                  value: 'intrinsic'
                },
                {
                  description: 'I see the environment as a place in which things happen to me and people I know',
                  value: 'instrumental'
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
                  value: 'intrinsic'
                },
                {
                  description: 'I see the environment as a source of natural resources (i.e. wood, coal, minerals) that can be developed',
                  value: 'instrumental'
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
                  value: 'intrinsic'
                },
                {
                  description: 'I see money as financial resources (a means to an end)',
                  value: 'instrumental'
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
                  value: 'intrinsic'
                },
                {
                  description: 'I see money as a source for benevolence (altruism)',
                  value: 'instrumental'
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
                  value: 'intrinsic'
                },
                {
                  description: 'People are useful because of what they do or what they produce',
                  value: 'instrumental'
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
                  value: 'intrinsic'
                },
                {
                  description: 'When I think of helping people, I think of helping vulnerable people I don\'t know',
                  value: 'instrumental'
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
