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
      background-color: #f0f9ff;
      border-color: #38bdf8;
      color: #0c4a6e;

      &:focus {
        border-color: #0284c7;
      }
    `}

  ${({ variant }) =>
    variant === "secondary" &&
    css`
      background-color: #fefce8;
      border-color: #facc15;
      color: #78350f;

      &:focus {
        border-color: #f59e0b;
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

