import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

export const aboutCollection = () =>
	defineCollection({
		loader: glob({ base: "./src/content", pattern: "about.md" }),
		schema: z.object({}),
	});
