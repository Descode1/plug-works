import type { Meta, StoryObj } from "@storybook/react";
import Tabs from ".";

const meta: Meta<typeof Tabs> = {
  title: "MyComponents/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "radio",
      options: ["light", "dark"],
      description: "Choose between light and dark theme",
    },
    titles: {
      control: "object",
      description: "Array of tab titles",
    },
    defaultActiveTab: {
      control: "number",
      description: "Initial active tab index",
    },
    children: {
      control: false,
      description: "Array of React nodes as tab content",
    },
  },
  args: {
    titles: ["Tab 1", "Tab 2", "Tab 3"],
    variant: "light",
    defaultActiveTab: 0,
    children: [
      <div key="1">This is the content of Tab 1</div>,
      <div key="2">This is the content of Tab 2</div>,
      <div key="3">This is the content of Tab 3</div>,
    ],
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Light: Story = {
  args: {
    variant: "light",
  },
};

export const Dark: Story = {
  args: {
    variant: "dark",
  },
};

export const CustomContent: Story = {
  args: {
    titles: ["Overview", "Code", "Preview"],
    children: [
      <div key="overview">
        <p>📄 Overview: Here’s a summary of the project.</p>
      </div>,
      <div key="code">
        <pre>
          <code>{`console.log("Hello, world!")`}</code>
        </pre>
      </div>,
      <div key="preview">
        <p>🔍 Live Preview goes here.</p>
      </div>,
    ],
    variant: "light",
  },
};

export const WithSecondTabActiveByDefault: Story = {
  args: {
    defaultActiveTab: 1,
  },
};
