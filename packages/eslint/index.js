// @ts-check
import eslint from "@eslint/js";
import { defineConfig } from "eslint/config";
import astro from "eslint-plugin-astro";
import { builtinCommands } from "eslint-plugin-command/commands";
import command from "eslint-plugin-command/config";
import jsdoc from "eslint-plugin-jsdoc";
// @ts-ignore
import promise from "eslint-plugin-promise";
import * as regexp from "eslint-plugin-regexp";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import tseslint from "typescript-eslint";

export { defineCommand } from "eslint-plugin-command/commands";

/**
 * @typedef {import("eslint-plugin-command/commands").Command[]} Commands
 */

/**
 *
 * @param {object} props
 * @param {Commands} props.commands
 * @returns
 */
export const buildConfig = ({ commands = [] }) =>
	defineConfig(
		eslint.configs.recommended,
		tseslint.configs.recommended,
		{
			plugins: {
				"simple-import-sort": simpleImportSort,
			},
			rules: {
				"simple-import-sort/imports": "error",
				"simple-import-sort/exports": "error",
			},
			settings: {
				groups: [
					[
						// Side effect imports.
						["^\\u0000"],
						// Node.js builtins prefixed with `node:`.
						["^node:"],
						// Packages.
						// Things that start with a letter (or digit or underscore), or `@` followed by a letter.
						["^@?\\w"],
						// Import aliases.
						// Things that start with a dollar sign.
						["(^\\$).*"],
						// Absolute imports and other imports such as Vue-style `@/foo`.
						// Anything not matched in another group.
						["^"],
						// Relative imports.
						// Anything that starts with a dot.
						["^\\."],
					],
				],
			},
		},
		{
			...jsdoc.configs["flat/recommended-typescript"],
			ignores: ["**/*.js"],
		},
		{
			...jsdoc.configs["flat/recommended"],
			ignores: ["**/*.ts"],
		},
		promise.configs["flat/recommended"],
		regexp.configs["flat/recommended"],
		...astro.configs.recommended,
		command({
			commands: [...builtinCommands, ...commands],
		}),
	);
