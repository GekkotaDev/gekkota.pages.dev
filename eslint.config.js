import { buildConfig } from "@site/eslint";

export default [
	...buildConfig({}),
	{
		rules: {
			"@typescript-eslint/no-unused-vars": "off",
		},
	},
];
