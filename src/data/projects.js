import laptopImage from '@images/devices/mac.png';
import mobileImage from '@images/devices/iphone.png';

// Project data
export const projects = [
  {
    title: 'Tidytrek',
    description:
      'A full-stack note-taking app created to solidify proficiency in React, while delving into extensive libraries such as Stripe (Elements, Subscription), and Medium-Draft (Draft.js)',
    highlights: [
      'Focuses on reusable components',
      'Uses complex table relations in Postgres',
      'Incorporates Material UI and Bootstrap',
    ],
    imageSrc: '/images/projects/duly_screen.gif',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    demoLink: 'https://tidytrek.co',
    githubLink: 'https://github.com/rwbrockhoff/tidytrek-frontend',
    deviceImaegSrc: laptopImage,
    isWeb: true,
  },
  {
    title: 'Looking Fox',
    description:
      'CMS web application built in React for professional photographers. Focuses on reusable components, using many tables and joins in Postgres, and incorporating Material UI and Bootstrap for a clean design.',
    highlights: [
      'Focuses on reusable components',
      'Uses complex table relations in Postgres',
      'Incorporates Material UI and Bootstrap',
    ],
    imageSrc: '/images/projects/lookingFoxScreen.gif',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    demoLink: '',
    githubLink: 'https://rwbrockhoff.github.io/ecrm/',
    deviceImaegSrc: laptopImage,
    isWeb: true,
  },
  {
    title: 'Oranges',
    description:
      'A full-stack, responsive game based on Apples to Apples. Built mobile-first in React, using socket.io as the bulk of the technology to communicate game information.',
    highlights: [
      'Responsible for the majority of frontend implementation',
      'Developed prototypes to improve user-flow using Figma',
      'Debugged and pair-programmed with team through various challenges',
    ],
    imageSrc: '/images/projects/orangesdemo.gif',
    tags: ['React', 'Firebase', 'Chart.js'],
    demoLink: 'https://oranges2oranges2.firebaseapp.com/',
    githubLink: 'https://github.com/rwbrockhoff/oranges',
    deviceImaegSrc: mobileImage,
    isWeb: false,
  },
];
