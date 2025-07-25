import styled from "styled-components";

export const AccordionContainer = styled.div`
  width: 100%;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  overflow: hidden;
`;

export const AccordionItem = styled.div`
  border-bottom: 1px solid #e5e7eb;
`;

export const AccordionHeader = styled.div`
  padding: 1rem;
  background-color: #f9fafb;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f3f4f6;
  }
`;

export const AccordionContent = styled.div`
  padding: 1rem;
  background-color: #ffffff;
  color: #374151;
  animation: slideDown 0.2s ease-out;

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-0.25rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
