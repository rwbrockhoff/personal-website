type Role = {
  title: string;
  company: string;
  duration: string;
  description: string;
  details: string[];
  tags: string[];
};

export const workExperience: Role[] = [
  {
    title: 'Software Engineer',
    company: 'HyperCarrot',
    duration: '2019 - 2020',
    description:
      'Built features in React, Node, SQL. Led onboarding workflow, analytics dashboard, and real-time notifications.',
    details: ['Something I did at this company', 'Another thing I did at this company', 'And more'],
    tags: ['Node.js', 'Express', 'PostgreSQL', 'AWS', 'TypeScript'],
  },
  {
    title: 'Designer & Marketing',
    company: 'More Van Anything',
    duration: '2020 - 2024',
    description:
      'Designed user stories in Figma, collaborated on UX, and worked with product management to refine workflows.',
    details: ['Something I did at this company', 'Another thing I did at this company', 'And more'],
    tags: ['Node.js', 'Express', 'PostgreSQL', 'AWS', 'TypeScript'],
  },
  {
    title: 'Full-Stack Developer',
    company: 'Tidytrek',
    duration: '2024 - Present',
    description: 'Architect and develop a production-ready SaaS application for backpacking gear management.',
    details: [
      'Developed SaaS product from concept to production deployment',
      'Managed full product lifecycle including design, development, testing, and deployment',
      'Built scalable architecture to support business growth and user expansion',
    ],
    tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS'],
  },
];
