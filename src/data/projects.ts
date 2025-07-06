import laptopImage from '@images/devices/mac.png';

type Project = {
  title: string;
  description: string;
  highlights: string[];
  imageSrc: string;
  tags: string[];
  demoLink: string;
  githubLink: string;
  deviceImageSrc: any;
  isWeb: boolean;
};
// Project data
export const projects: Project[] = [
  {
    title: 'Tidytrek: Frontend',
    description:
      'React TypeScript application for backpacking gear management featuring drag-and-drop functionality with optimistic updates, comprehensive testing, and performance optimizations.',
    highlights: [
      'TanStack Query for server state management with optimistic updates and caching',
      'Comprehensive testing with Vitest unit tests and Playwright E2E tests',
      'Advanced performance optimizations with code splitting and manual chunks',
    ],
    imageSrc: '/images/projects/lookingFoxScreen.gif',
    tags: ['React', 'TypeScript', 'TanStack Query', 'Vitest', 'Playwright'],
    demoLink: 'https://tidytrek.co',
    githubLink: 'https://github.com/rwbrockhoff/tidytrek-frontend',
    deviceImageSrc: laptopImage,
    isWeb: true,
  },
  {
    title: 'Tidytrek: Backend',
    description:
      'Production-ready Node.js Express API with PostgreSQL, featuring comprehensive testing, AWS integration, and robust security practices for backpacking gear management.',
    highlights: [
      'Express API with TypeScript, database migrations, and comprehensive test coverage',
      'AWS S3 integration for file uploads with CloudFront CDN distribution',
      'Production security with JWT authentication, rate limiting, and error monitoring',
    ],
    imageSrc: '/images/projects/lookingFoxScreen.gif',
    tags: ['Node.js', 'Express', 'PostgreSQL', 'AWS', 'TypeScript'],
    demoLink: 'https://tidytrek.co',
    githubLink: 'https://github.com/rwbrockhoff/tidytrek-backend',
    deviceImageSrc: laptopImage,
    isWeb: true,
  },
];
