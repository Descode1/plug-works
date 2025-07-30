import styled from "styled-components";
interface StyledProps {
  variant: "light" | "dark";
}

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

export const DialogContainer = styled.div<StyledProps>`
  background-color: ${({ variant }) =>
    variant === "light" ? "#ffffff" : "#1e1e1e"};
  color: ${({ variant }) => (variant === "light" ? "#000000" : "#f5f5f5")};
  border-radius: 12px;
  width: 500px;
  max-width: 90%;
  padding: 24px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

export const Title = styled.h2`
  font-size: 20px;
  margin: 0;
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  font-size: 24px;
  line-height: 1;
  cursor: pointer;
`;

export const Content = styled.div`
  font-size: 16px;
`;

export const OpenButton = styled.button`
  padding: 10px 16px;
  font-size: 16px;
  border: none;
  background-color: #3b82f6;
  color: white;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    background-color: #2563eb;
  }
`;
