import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    tags: z.array(z.string()).optional(),
    image: z.string().optional(),
    category: z.enum(['data-analytics', 'tech', 'personal']),
    githubLink: z.string().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};
