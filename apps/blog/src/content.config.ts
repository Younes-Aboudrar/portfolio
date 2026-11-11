import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const posts = defineCollection({
	loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
	schema: z.object({
		title: z.string(),
		lang: z.enum(['fr', 'en']).default('fr'),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		tags: z.array(z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'Use lowercase URL-safe tags')).default([]),
		draft: z.boolean().default(false),
		cover: z.string().optional()
	})
});

export const collections = { posts };