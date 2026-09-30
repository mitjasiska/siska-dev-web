import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const writings = defineCollection({
  loader: glob({
    base: './writings',
    pattern: '*/README.md',
    generateId: ({ entry }) => {
      const slug = entry.split('/')[0];
      if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
        throw new Error(`Writing folder "${slug}" must use lowercase words separated by hyphens.`);
      }
      return slug;
    },
  }),
  schema: z.object({
    title: z.string().trim().min(1),
    description: z.string().trim().min(1),
    published: z.union([z.string().date(), z.date()]).pipe(z.coerce.date()),
  }),
});

export const collections = { writings };
