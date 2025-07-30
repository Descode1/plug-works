import type { Meta, StoryObj } from "@storybook/react";
import { Tabs, Tab } from ".";

const meta: Meta<typeof Tabs> = {
  title: "MyComponents/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  args: {
    defaultActiveTab: 0,
    variant: "light",
  },
};

export default meta;

type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: (args) => (
    <>
      <Tabs {...args}>
        <Tab title="Profile">
          <p>This is the profile content</p>
        </Tab>
        <Tab title="Settings">
          <p>This is the settings content</p>
        </Tab>
        <Tab title="Messages">
          <p>This is the messages content</p>
        </Tab>
      </Tabs>
    </>
  ),
};
