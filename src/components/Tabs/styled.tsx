import styled from "styled-components";

interface StyledProps {
  variant: "light" | "dark";
}

interface ButtonProps extends StyledProps {
  isActive: boolean;
}

// Wrapper for layout purposes (no visual box)
export const StyledTabsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;

export const StyledTabHeader = styled.div`
  display: flex;
  gap: 8px;
  padding: 0;
`;

export const StyledTabButton = styled.button<ButtonProps>`
  padding: 8px 16px;
  border: none;
  border-radius: 9999px; /* full pill */
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  background-color: ${props =>
    props.isActive
      ? props.variant === "light" ? "#e0e0e0" : "#333333"
      : "transparent"};
  color: ${props =>
    props.isActive
      ? props.variant === "light" ? "#000000" : "#ffffff"
      : props.variant === "light" ? "#444444" : "#cccccc"};
  border: 1px solid
    ${props =>
      props.isActive
        ? props.variant === "light" ? "#c0c0c0" : "#444444"
        : "transparent"};
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${props =>
      props.variant === "light" ? "#f0f0f0" : "#444444"};
  }
`;

export const StyledTabContent = styled.div<StyledProps>`
  width: 100%;
  padding: 24px;
  border-radius: 12px;
  background-color: ${props =>
    props.variant === "light" ? "#ffffff" : "#1e1e1e"};
  color: ${props =>
    props.variant === "light" ? "#333333" : "#ffffff"};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border: 1px solid
    ${props => (props.variant === "light" ? "#e6e6e6" : "#333333")};
`;
