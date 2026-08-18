import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * ── HOW TO POST ──────────────────────────────────────────────
 * Blog post: add a .md file to  src/content/blog/
 * News item: add a .md file to  src/content/news/
 * Commit + push → the site rebuilds and deploys automatically.
 * See POSTING_GUIDE.md at the repo root for templates.
 * ─────────────────────────────────────────────────────────────
 */

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    /** short items render inline on the News page; longer body optional */
    icon: z.enum(['paper', 'award', 'talk', 'milestone', 'etc']).default('etc'),
  }),
});

export const collections = { blog, news };
