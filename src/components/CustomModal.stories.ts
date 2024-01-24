import type {Meta, StoryObj} from "@storybook/react";

import {CustomModal} from "./CustomModal";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof CustomModal> = {
	component: CustomModal,
	title: "CustomModal",
};

export default meta;
type Story = StoryObj<typeof CustomModal>;

export const Standard: Story = {
	args: {
		//👇 The args you need here will depend on your component
		label: "Open Modal",
	},
};
