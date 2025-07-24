import { JSX } from "react";
import { StyledButton } from "./styled";

interface PropsInterface {
  disabled?: boolean;
  children?: React.ReactNode;
  variant?: "primary" | "outlined";
  action?: () => void;
}

const Button = (props: PropsInterface): JSX.Element => {
  const { disabled = false, children, variant = "primary", action }= props;
  return(
    <StyledButton
    disabled = {disabled}
    variant = {variant}
    onClick = {disabled ? undefined : action}
    >
        {children}
    </StyledButton>

  )
};
export default Button;
