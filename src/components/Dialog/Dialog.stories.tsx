import type { Meta, StoryObj } from '@storybook/react';
import Dialog from '.';

const meta: Meta<typeof Dialog> = {
  title: 'MyComponents/Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['light', 'dark'],
      description: 'Visual theme of the dialog',
    },
    title: {
      control: 'text',
      description: 'Title displayed in the dialog header',
    },
    children: {
      control: 'text',
      description: 'Content to display inside the dialog',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
  args: {
    variant: 'light',
    title: 'Default Dialog',
    children: 'This is the default dialog content. You can put any React content here.',
  },
};


export const DarkVariant: Story = {
  args: {
    variant: 'dark',
    title: 'Dark Theme Dialog',
    children: 'This dialog uses the dark theme variant. Perfect for dark mode applications.',
  },
};


export const LongContent: Story = {
  args: {
    variant: 'light',
    title: 'Dialog with Long Content',
    children: (
      <div>
        <p>This dialog contains longer content to demonstrate how the dialog handles scrolling and layout.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <ul>
          <li>Feature 1: Easy to use</li>
          <li>Feature 2: Responsive design</li>
          <li>Feature 3: Accessible</li>
        </ul>
      </div>
    ),
  },
};

