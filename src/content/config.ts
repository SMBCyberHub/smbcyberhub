import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string(),
    pubDate: z.date().optional(),
    heroImage: z.string().optional(),
    tags: z.array(z.string()).optional(),
    dateModified: z.date().optional(),
    ogImage: z.string().optional(),
    excerpt: z.string().optional(),
    featured: z.boolean().optional(),
    canonical: z.string().optional(),
  }),
});

export const collections = {
  posts,
};

