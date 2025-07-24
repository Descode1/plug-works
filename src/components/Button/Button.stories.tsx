
import Button from ".";

export default {
  title: "MyComponents/Button",
  component: Button,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      description: "Button style variant",
      control: {
        type: "radio"
      },
      options: ["primary", "secondary" ,"outlined"]
    },
    disabled: {
      description: "Whether the button is disabled",
      control: {
        type: "boolean"
      }
    },
    children: {
      description: "Button content (text or node)",
      control: {
        type: "text"
      }
    },
    action: {
      description: "Function to call on click",
      action: "clicked"
    }
  }
};

export const Primary = {
  args: {
    children: "Click Me",
    variant: "primary"
  }
};
export const Secondary = {
    args: {
        children: "Click Me",
        variant: "secondary"
    }
};
export const Outlined = {
  args: {
    children: "Cancel",
    variant: "outlined"
  }
};
export const Disabled = {
  args: {
    children: "Disabled Button",
    variant: "primary",
    disabled: true
  }
};
