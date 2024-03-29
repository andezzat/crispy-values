module.exports = {
  links: [
    {
      text: 'Home',
      href: '/home',
      type: 'link',
      classes: []
    },
    {
      text: 'Profiles',
      href: '#homeValues',
      type: 'anchor',
      showOn: [
        '/',
        '/home'
      ],
      classes: [
        'scroll'
      ]
    },
    {
      text: 'About',
      href: '#about',
      type: 'anchor',
      showOn: [
        '/',
        '/home'
      ],
      classes: [
        'scroll'
      ]
    },
    {
      text: 'Contact',
      href: '#footer',
      type: 'anchor',
      classes: [
        'scroll'
      ]
    },
    {
      text: 'Values Test',
      href: '/test',
      type: 'link',
      classes: [
        'nav-link--rounded'
      ]
    }
  ]
}
