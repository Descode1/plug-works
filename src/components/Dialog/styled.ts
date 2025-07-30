import styled from "styled-components";
interface StyledProps {
  variant: "light" | "dark";
}

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  animation: fadeIn 0.2s ease-out;
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      backdrop-filter: blur(0px);
    }
    to {
      opacity: 1;
      backdrop-filter: blur(8px);
    }
  }
`;

export const DialogContainer = styled.div<StyledProps>`
  background: ${({ variant }) =>
    variant === "light" 
      ? "rgba(255, 255, 255, 0.95)" 
      : "rgba(20, 20, 20, 0.95)"};
  backdrop-filter: blur(20px);
  border: 1px solid ${({ variant }) =>
    variant === "light" 
      ? "rgba(255, 255, 255, 0.2)" 
      : "rgba(255, 255, 255, 0.1)"};
  color: ${({ variant }) => (variant === "light" ? "#1a1a1a" : "#f0f0f0")};
  border-radius: 20px;
  width: 500px;
  max-width: 90vw;
  padding: 32px;
  box-shadow: ${({ variant }) =>
    variant === "light"
      ? "0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.1)"
      : "0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.05)"};
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  transform: translateY(0);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
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
  font-size: 20px;
  line-height: 1;
  cursor: pointer;
  padding: 8px;
  border-radius: 4px;
  color: #666;
  transition: all 0.15s ease;
  
  &:hover {   
    color: #333;
  }
`;

export const Content = styled.div`
  font-size: 16px;
`;

export const OpenButton = styled.button`
   padding: 10px 16px;
    border-radius: 6px;
    font-weight: 600;
    font-size: 14px;
    transition: background 0.2s ease-in-out;
    cursor: pointer;
    background-color: #000000ea;
    color: white;
    border: none;
    &:hover{
        background-color: #232935ff;
    }
`;
