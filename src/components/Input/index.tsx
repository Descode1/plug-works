import React, { JSX } from "react";
import { StyledInput } from "./styled";

interface PropsInterface {
  disabled?: boolean;
  variant?: "primary" | "secondary";
  placeholder?: string;
  value?: string;
  type?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export type{PropsInterface};
const Input = (props: PropsInterface): JSX.Element => {
  const {
    disabled = false,
    variant = "primary",
    placeholder = "",
    value,
    type = "text",
    onChange,
  } = props;

  return (
    <StyledInput
      type={type}
      variant={variant}
      disabled={disabled}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
