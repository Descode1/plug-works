import Dropdown from ".";
import type { DropdownOption } from ".";
import Button from "../Button";

export default {
  title: "MyComponents/Dropdown",
  component: Dropdown,
  tags: ["autodocs"],
  parameters: {
    layout: "centered"
  },
  argTypes: {
    variant: {
      description: "Dropdown theme variant",
      control: {
        type: "radio"
      },
      options: ["light", "dark"]
    },
    options: {
      description: "List of dropdown options",
      control: { type: "object" }
    },
    action: {
      description: "Callback when an option is selected",
      action: "selected"
    },
    children: {
      description: "Custom trigger element",
      control: { type: "text" }
    }
  }
};

const sampleOptions: DropdownOption[] = [
  { label: "Edit", value: "edit" },
  { label: "Delete", value: "delete" },
  { label: "Report", value: "report" }
];

export const LightVariant = {
  args: {
    variant: "light",
    options: sampleOptions,
    children: <Button>Open Menu</Button>
  }
};

export const DarkVariant = {
  args: {
    variant: "dark",
    options: sampleOptions,
    children: <Button>More Options</Button>
  }
};

