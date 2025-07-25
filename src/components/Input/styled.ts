import styled, { css } from "styled-components";

interface StyledProps {
  variant: "primary" | "secondary";
  disabled: boolean;
}

export const StyledInput = styled.input<StyledProps>`
  padding: 10px 14px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  border: 2px solid transparent;
  outline: none;
  width: 100%;

  ${({ variant }) =>
    variant === "primary" &&
    css`
      background-color: #292c2eff;
      border-color: #051b24ff;
      color: #ffffffff;
      &:focus {
        border-color: #06013aff;
      }
    `}

  ${({ variant }) =>
    variant === "secondary" &&
    css`
      background-color: #292c2eff;
      color: #ffffffff;
      border: none;
      border-bottom: 3px solid #333333;
      border-radius: 0px;

      &:focus {
        border-color: #666666;
      }
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: #f3f4f6;
      color: #9ca3af;
      border-color: #d1d5db;
      cursor: not-allowed;
    `}
`;

