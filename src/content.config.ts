import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { postCollection } from "~/collections/post";
import { homeCollection } from "~/collections/home";
import { contactCollection } from "~/collections/contact";
import { portfolioCollection } from "~/collections/portfolio";
import { aboutCollection } from "~/collections/about";

export const collections = {
	work: defineCollection({
		// Load Markdown files in the src/content/work directory.
		loader: glob({ base: "./src/content/work", pattern: "**/*.md" }),
		schema: z.object({
			title: z.string(),
			description: z.string(),
			publishDate: z.coerce.date(),
			tags: z.array(z.string()),
			img: z.string(),
			img_alt: z.string().optional(),
		}),
	}),

	posts: postCollection(),
	home: homeCollection(),
	contacts: contactCollection(),
	portfolio: portfolioCollection(),
	about: aboutCollection(),
};
