import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({  
      title: z.string(),
      pubDate: z.string().transform((str) => new Date(str)),
      description: z.string(),
      author: z.string(),
      tags : z.array(z.string()),
      image: z.object({
        src: z.string(),
        alt: z.string().optional(),
      }).optional(),
  }),
});

export const collections = {blog};