import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

export const postCollection = () =>
	defineCollection({
		loader: glob({ base: "./src/content/posts", pattern: "**/*.md" }),
		schema: z.object({
			title: z.string(),
			description: z.string(),
			tags: z.array(z.string()),
			dates: z.object({
				published: z.coerce.date(),
			}),
		}),
	});
