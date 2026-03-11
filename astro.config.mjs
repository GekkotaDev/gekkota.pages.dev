// @ts-check
import cloudflare from "@astrojs/cloudflare";
import db from "@astrojs/db";
import {
	rehypeHeadingIds,
	remarkCollectImages,
} from "@astrojs/markdown-remark";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import solidJs from "@astrojs/solid-js";
import rehypeMathML from "@daiji256/rehype-mathml";
import { pluginCollapsibleSections } from "@expressive-code/plugin-collapsible-sections";
import { pluginLineNumbers } from "@expressive-code/plugin-line-numbers";
import playformCompress from "@playform/compress";
import playformInline from "@playform/inline";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import expressiveCode from "astro-expressive-code";
import mermaid from "astro-mermaid";
import pagefind from "astro-pagefind";
import AutoImport from "unplugin-auto-import/astro";
import { purgePolyfills } from "unplugin-purge-polyfills";
import { rehypeGithubAlerts } from "rehype-github-alerts";
import remarkBreaks from "remark-breaks";
import remarkDirective from "remark-directive";
import remarkGemoji from "remark-gemoji";
import remarkGFM from "remark-gfm";
import remarkMath from "remark-math";
import remarkReadingTime from "remark-reading-time";
import remarkToc from "remark-toc";

// https://astro.build/config
export default defineConfig({
	site: "https://gekkota.pages.dev",
	prefetch: true,

	markdown: {
		remarkPlugins: [
			// @ts-expect-error
			remarkReadingTime,
			remarkGFM,
			// remarkBreaks,
			// @ts-expect-error
			rehypeGithubAlerts,
			remarkMath,
			remarkGemoji,
			remarkToc,
		],
		rehypePlugins: [
			[rehypeHeadingIds, { headingIdCompat: true }],
			rehypeMathML,
			// rehypeShiki,
		],
	},

	image: {
		responsiveStyles: true,
	},

	vite: {
		plugins: [tailwindcss(), purgePolyfills.vite({})],
	},

	integrations: [
		AutoImport({
			include: [
				/\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
				/\.vue$/,
				/\.vue\?vue/, // .vue
				/\.vue\.[tj]sx?\?vue/, // .vue (vue-loader with experimentalInlineMatchResource enabled)
				/\.mdx?$/, // .md
				/\.astro?$/, // .astro
			],

			imports: [
				"date-fns",
				"solid-js",
				{
					from: "neverthrow",
					imports: [
						"Result",
						"ResultAsync",
						"fromThrowable",
						"fromAsyncThrowable",
						"fromPromise",
						"fromSafePromise",
						"safeTry",
					],
				},
				{
					from: "ts-pattern",
					imports: ["match", "P"],
				},
				{
					from: "es-toolkit/array",
					imports: [
						"chunk",
						"countBy",
						"groupBy",
						"head",
						"initial",
						"keyBy",
						"last",
						"limitAsync",
						"mapAsync",
						"orderBy",
						"partition",
						"sample",
						"sampleSize",
						"shuffle",
						"tail",
						"take",
						"takeRight",
						"takeRightWhile",
						"takeWhile",
						"uniq",
						"uniqBy",
						"uniqWith",
						"unzip",
						"unzipWith",
						"zip",
						"zipObject",
						"zipWith",
					],
				},
				{
					from: "es-toolkit/function",
					imports: [
						"asyncNoop",
						"before",
						"debounce",
						"flow",
						"flowRight",
						"identity",
						"memoize",
						"negate",
						"noop",
						"once",
						"partial",
						"partialRight",
						"rest",
						"spread",
						"throttle",
					],
				},
				{
					from: "es-toolkit/math",
					imports: [
						"clamp",
						"inRange",
						"mean",
						"meanBy",
						"median",
						"medianBy",
						"random",
						"randomInt",
						"range",
						"rangeRight",
					],
				},
				{
					from: "es-toolkit/object",
					imports: [
						"clone",
						"cloneDeep",
						"cloneDeepWith",
						"findKey",
						"mapKeys",
						"mapValues",
						"merge",
						"mergeWith",
						"omit",
						"omitBy",
						"pick",
						"pickBy",
						"retry",
						"toMerged",
					],
				},
				{
					from: "es-toolkit/promise",
					imports: ["delay", "timeout", "withTimeout"],
				},
				{
					from: "es-toolkit/string",
					imports: [
						"camelCase",
						"capitalize",
						"constantCase",
						"deburr",
						"escape",
						"escapeRegExp",
						"kebabCase",
						"lowerCase",
						"lowerFirst",
						"pad",
						"pascalCase",
						"reverseString",
						"snakeCase",
						"startCase",
						"upperCase",
						"upperFirst",
						"words",
					],
				},
				{
					from: "es-toolkit/util",
					imports: ["assert", "attempt", "attemptAsync", "invariant"],
				},
			],

			dirs: ["src/utils"],
		}), // Must come after expressive-code integration
		sitemap(),
		mermaid({
			theme: "dark",
		}),
		expressiveCode({
			themes: ["gruvbox-dark-hard"],
			removeUnusedThemes: false,
			defaultProps: {
				collapseStyle: "collapsible-auto",
			},
			plugins: [pluginCollapsibleSections(), pluginLineNumbers()],
		}),
		mdx(),
		solidJs(),
		// db(),
		pagefind(),
		playformCompress(),
		playformInline(),
	],

	experimental: {
		contentIntellisense: true,
	},

	output: "static",
	adapter: cloudflare({
		imageService: "compile",
	}),
});
