import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

export const homeCollection = () =>
	defineCollection({
		loader: glob({ base: "./src/content", pattern: "home.md" }),
		schema: z.object({}),
	});
