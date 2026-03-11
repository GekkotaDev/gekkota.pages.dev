import type { APIRoute } from "astro";

import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export const GET = (async (context) => {
	const blog = await getCollection("posts");

	return rss({
		// `<title>` field in output xml
		title: "gekkotadev's blog",
		// `<description>` field in output xml
		description:
			"Game development posts and other musings during my spare time",
		// Pull in your project "site" from the endpoint context
		// https://docs.astro.build/en/reference/api-reference/#site
		site: context.site!,
		// Array of `<item>`s in output xml
		// See "Generating items" section for examples using content collections and glob imports
		items: blog.map((post) => ({
			title: post.data.title,
			pubDate: post.data.dates.published,
			description: post.data.description,
			// Compute RSS link from post `id`
			// This example assumes all posts are rendered as `/blog/[id]` routes
			link: `/posts/${post.id}/`,
		})),
		// (optional) inject custom xml
		customData: `<language>en-us</language>`,
	});
}) satisfies APIRoute;
