import styled from "styled-components";

export const DropdownMenu = styled.div<{ variant: string }>`
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  background-color: ${({ variant }) => (variant === "dark" ? "#000000ea" : "#ffffff")};
  color: ${({ variant }) => (variant === "dark" ? "#f1f5f9" : "#1e293b")};
  border: 1px solid ${({ variant }) => (variant === "dark" ? "#334155" : "#e2e8f0")};
  border-radius: 0.75rem;
  min-width: 180px;
  box-shadow: ${({ variant }) => 
    variant === "dark" 
      ? "0 10px 25px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -2px rgba(0, 0, 0, 0.3)"
      : "0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
  };
  z-index: 100;
  overflow: hidden;
  backdrop-filter: blur(8px);
  animation: dropdownSlide 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  transform-origin: top right;
  
  @keyframes dropdownSlide {
    from {
      opacity: 0;
      transform: scale(0.95) translateY(-8px);
    }
    to {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
  }
`;

export const DropdownItem = styled.div<{ variant?: string }>`
  padding: 0.75rem 1rem;
  cursor: pointer;
  transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
  font-size: 14px;
  font-weight: 600;
  border-radius: 0.5rem;
  margin: 0.25rem 0.5rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  
  &:first-child {
    margin-top: 0.5rem;
  }
  
  &:last-child {
    margin-bottom: 0.5rem;
  }
  
  &:hover {
    background-color: ${({ variant }) => 
      variant === "dark" 
        ? "rgba(148, 163, 184, 0.1)" 
        : "rgba(59, 130, 246, 0.08)"
    };
    transform: translateX(2px);
  }
  
  &:active {
    background-color: ${({ variant }) => 
      variant === "dark" 
        ? "rgba(148, 163, 184, 0.15)" 
        : "rgba(59, 130, 246, 0.12)"
    };
    transform: translateX(1px);
  }
`;