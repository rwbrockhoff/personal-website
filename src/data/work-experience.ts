type Role = {
  title: string;
  company: string;
  duration: string;
  location: string;
  description: string;
  tags: string[];
};

export const workExperience: Role[] = [
  {
    title: 'Software Engineer',
    company: 'HyperCarrot',
    duration: '2019 - 2020',
    location: 'Remote',
    description:
      'Developed user-facing features and internal tools for B2B employee engagement platform. Led key projects including user onboarding systems, analytics dashboards, and video recognition features.',
    tags: ['React', 'Javascript', 'Node.js', 'Express', 'PostgreSQL', 'AWS'],
  },
  {
    title: 'Founder & Business Strategist',
    company: 'More Van Anything',
    duration: '2020 - 2024',
    location: 'Seattle, WA',
    description:
      'Scaled outdoor adventure business 300% through digital marketing and process automation. Managed website development, SEO optimization, and systematized service operations.',
    tags: ['Digital Marketing', 'SEO', 'Web Development', 'Process Automation', 'Business Growth'],
  },
  {
    title: 'Founder & Lead Engineer',
    company: 'Tidytrek',
    duration: '2024 - Present',
    location: 'Denver, CO',
    description:
      'Founded and developed full-stack SaaS platform serving outdoor community. Architected scalable solution from concept through production deployment.',
    tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS'],
  },
];
