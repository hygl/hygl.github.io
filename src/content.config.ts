import { defineCollection, z } from 'astro:content';


// 2. Import loader(s)
import { glob, file } from 'astro/loaders';


// 4. Export a single `collections` object to register your collection(s)
const blog = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/blog" }),
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string().optional(),
		categories: z.array(z.string()),
		// Transform string to Date object
		//pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		//heroImage: z.string().optional(),
	}),
});

export const collections = { blog };