import type { Meta, StoryObj } from "@storybook/react";
import  Accordion from ".";

// Example accordion data
const sampleItems = [
  {
    title: "What is PlugWorks?",
    content: "PlugWorks is a powerful toolkit for building React apps.",
  },
  {
    title: "How do I use the Accordion?",
    content: "Click on any section header to expand or collapse the content.",
  },
  {
    title: "Is multiple open supported?",
    content: "Yes! Just enable `allowMultipleOpen` prop.",
  },
];

const meta: Meta<typeof Accordion> = {
  title: "MyComponents/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  argTypes: {
    allowMultipleOpen: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof Accordion>;

export const SingleOpen: Story = {
  args: {
    items: sampleItems,
    allowMultipleOpen: false,
  },
};

export const MultipleOpen: Story = {
  args: {
    items: sampleItems,
    allowMultipleOpen: true,
  },
};
