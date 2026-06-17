import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

export const postCollection = () =>
	defineCollection({
		loader: glob({ base: "./src/content/posts", pattern: "**/*.md" }),
		schema: z.object({
      draft: z.optional(z.boolean()),
			title: z.string(),
			description: z.string(),
			tags: z.array(z.string()),
			dates: z.object({
				published: z.coerce.date(),
			}),
		}),
	});
