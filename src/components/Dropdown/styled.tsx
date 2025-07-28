import styled from "styled-components";

export const DropdownMenu = styled.div<{ variant: string }>`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: ${({ variant }) => (variant === "dark" ? "#1f2937" : "#fff")};
  color: ${({ variant }) => (variant === "dark" ? "#f9fafb" : "#111827")};
  border: 1px solid #ccc;
  border-radius: 6px;
  min-width: 150px;
  box-shadow: 0px 2px 8px rgba(0,0,0,0.15);
  z-index: 100;
`;

export const DropdownItem = styled.div`
  padding: 10px 14px;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;
