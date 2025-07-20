import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(), // Use `z.string()` if you want to keep dates quoted
    ogImage: z.string().optional(),
    tags: z.array(z.string()).optional(),
    excerpt: z.string().optional(),
    featured: z.boolean().optional(),
  }),
});

export const collections = {
  posts,
};
