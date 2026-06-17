import { defineCollection, z } from "astro:content";
import { file } from "astro/loaders";

export const contactCollection = () =>
	defineCollection({
		loader: file("./src/content/contacts.yaml"),
		schema: z.object({
			icon: z.string(),
			href: z.string(),
		}),
	});
