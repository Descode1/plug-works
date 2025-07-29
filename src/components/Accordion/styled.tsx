import styled from "styled-components";

export const AccordionContainer = styled.div`
  width: 100%;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  overflow: hidden;
  background-color: #ffffff;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
`;

export const AccordionItem = styled.div`
  border-bottom: 1px solid #f1f5f9;
  
  &:last-child {
    border-bottom: none;
  }
`;

export const AccordionHeader = styled.div`
  padding: 1.25rem 1.5rem;
  background-color: #ffffff;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  
  &:hover {
    background-color: #f8fafc;
  }
  
  &:active {
    background-color: #f1f5f9;
  }
`;

export const AccordionContent = styled.div`
  padding: 0 1.5rem 1.5rem 1.5rem;
  background-color: #ffffff;
  color: #475569;
  line-height: 1.6;
  animation: expandContent 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  transform-origin: top;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  
  @keyframes expandContent {
    from {
      opacity: 0;
      max-height: 0;
      transform: translateY(-8px);
    }
    to {
      opacity: 1;
      max-height: 1000px;
      transform: translateY(0);
    }
  }
`;