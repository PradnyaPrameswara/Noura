import { defineCollection, z } from 'astro:content';

const works = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tagline: z.string(),
    coverImage: z.string(),
    secondImage: z.string().optional(),
    challengeTitle: z.string(),
    challengeDescription: z.string(),
    challengeImage: z.string(),
    finalImage: z.string(),
    resultsTitle: z.string(),
    resultsDescription: z.string(),
    nextCase: z.object({
      slug: z.string(),
      title: z.string(),
      image: z.string(),
    }),
  }),
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.string(),
    coverImage: z.string(),
    category: z.string().default('Blog post'),
  }),
});

export const collections = {
  works,
  blog,
};
