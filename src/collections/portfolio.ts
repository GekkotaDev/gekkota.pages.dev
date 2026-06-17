import { defineCollection, z } from "astro:content";
import { file } from "astro/loaders";

export const portfolioCollection = () =>
	defineCollection({
		loader: file("./src/content/portfolio.yaml"),
		schema: z.object({
			name: z.string(),
			href: z.string(),
			description: z.string(),
		}),
	});
