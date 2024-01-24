import type { Meta, StoryObj } from "@storybook/react";

import { CustomModal } from "./customModal";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof CustomModal> = {
  component: CustomModal,
};

export default meta;
type Story = StoryObj<typeof CustomModal>;

export const FirstStory: Story = {
  args: {
    //👇 The args you need here will depend on your component
  },
};
