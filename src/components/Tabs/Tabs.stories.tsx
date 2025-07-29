
import type { Meta, StoryObj } from "@storybook/react";
import { Tabs, TabHeader, TabContent } from ".";



const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
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
      {/* Optional Global Style */}
      {/* <GlobalStyle /> */}

      <Tabs {...args}>
        <TabHeader title="Profile">
          <TabContent>
            <p>This is the profile content</p>
          </TabContent>
        </TabHeader>
        <TabHeader title="Settings">
          <TabContent>
            <p>This is the settings content</p>
          </TabContent>
        </TabHeader>
        <TabHeader title="Messages">
          <TabContent>
            <p>This is the messages content</p>
          </TabContent>
        </TabHeader>
      </Tabs>
    </>
  ),
};

