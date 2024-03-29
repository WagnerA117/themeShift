import type {StorybookConfig} from "@storybook/react-vite";
import {mergeConfig} from "vite";

const config: StorybookConfig = {
	stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
	addons: [
		"@chakra-ui/storybook-addon",
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-onboarding",
		"@storybook/addon-interactions",
	],
	framework: {
		name: "@storybook/react-vite",
		options: {},
	},

	docs: {
		autodocs: "tag",
	},

	async viteFinal(config) {
		// Merge custom configuration into the default config
		return mergeConfig(config, {
			// Add dependencies to pre-optimization
			optimizeDeps: {
				include: ["storybook-dark-mode"],
			},
		});
	},
};
export default config;
