import Input from ".";

export default {
  title: "MyComponents/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      description: "Input style variant",
      control: { type: "radio" },
      options: ["primary", "secondary"],
    },
    disabled: {
      description: "Whether the input is disabled",
      control: { type: "boolean" },
    },
    placeholder: {
      description: "Placeholder text",
      control: { type: "text" },
    },
    value: {
      description: "Input value",
      control: { type: "text" },
    },
    type: {
      description: "Input type (text, email, password, etc.)",
      control: { type: "text" },
    },
    onChange: {
      action: "changed",
      description: "Function called on input change",
    },
  },
};

export const Primary = {
  args: {
    variant: "primary",
    placeholder: "Type here...",
    
  },
};

export const Secondary = {
  args: {
    variant: "secondary",
    placeholder: "Search...",    
  },
};

export const Disabled = {
  args: {
    variant: "primary",
    placeholder: "Can't type here",
    disabled: true,
  },
};

export const Password = {
  args: {
    variant: "primary",
    placeholder: "Enter password",
    type: "password",
  },
};
