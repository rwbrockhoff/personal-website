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
      'Developed user-facing features for B2B employee engagement platform. Led key projects including user onboarding systems, analytics dashboards, and social recognition features.',
    tags: ['React', 'Javascript', 'Node.js', 'Express', 'PostgreSQL', 'AWS'],
  },
  {
    title: 'Founder & Business Strategist',
    company: 'Scout Adventures',
    duration: '2020 - 2024',
    location: 'Seattle, WA',
    description:
      'Built and scaled outdoor guiding business to 150+ clients. Managed website development, SEO, sales systems, and coordinated stakeholder expectations across projects.',
    tags: ['Digital Marketing', 'SEO', 'Web Development', 'Process Automation', 'Business Growth'],
  },
  {
    title: 'Freelance Software Engineer',
    company: 'Artifact Studio',
    duration: '2024 - Present',
    location: 'Remote',
    description:
      'Completed freelance projects building full-stack applications while developing Tidytrek (full-stack SaaS) and publishing Artifact UI (500+ downloads).',
    tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS', 'WebSockets'],
  },
];
