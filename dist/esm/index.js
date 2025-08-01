import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import styled, { css } from 'styled-components';
import React, { useState, useRef, useEffect } from 'react';

const StyledButton = styled.button `
    padding: 10px 16px;
    border-radius: 6px;
    font-weight: 600;
    font-size: 14px;
    transition: background 0.2s ease-in-out;
    cursor: pointer;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;

    ${({ variant }) => variant === "primary" && css `
        background-color: #000000ea;
        color: white;
        border: none;
        &:hover{
            background-color: #232935ff;
        }
    `}
    ${({ variant }) => variant === "secondary" && css `
        background-color: #ffa500ff;
        color: white;
        border: none;
        &:hover{
            background-color: #ffb733;
        }
    `}
    ${({ variant }) => variant === "outlined" && css `
        background-color: transparent;
        color: #3b82f6;
        border: 2px solid #3b82f6;
        &:hover {
            background-color: #e0f2fe;
        }
    `}
    ${({ disabled }) => disabled && css `
        opacity: 0.6;
        cursor: not-allowed;
    `}
`;

const Button = (props) => {
    const { disabled = false, children, variant = "primary", action } = props;
    return (jsx(StyledButton, { disabled: disabled, variant: variant, onClick: disabled ? undefined : action, children: children }));
};

const StyledInput = styled.input `
  padding: 10px 14px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  border: 2px solid transparent;
  outline: none;
  width: 100%;

  ${({ variant }) => variant === "primary" &&
    css `
      background-color: #292c2eff;
      border-color: #051b24ff;
      color: #ffffffff;
      &:focus {
        border-color: #06013aff;
      }
    `}

  ${({ variant }) => variant === "secondary" &&
    css `
      background-color: #292c2eff;
      color: #ffffffff;
      border: none;
      border-bottom: 3px solid #333333;
      border-radius: 0px;

      &:focus {
        border-color: #666666;
      }
    `}

  ${({ disabled }) => disabled &&
    css `
      background-color: #f3f4f6;
      color: #9ca3af;
      border-color: #d1d5db;
      cursor: not-allowed;
    `}
`;

const Input = (props) => {
    const { disabled = false, variant = "primary", placeholder = "", value, type = "text", onChange, } = props;
    return (jsx(StyledInput, { type: type, variant: variant, disabled: disabled, placeholder: placeholder, value: value, onChange: onChange }));
};

const AccordionContainer = styled.div `
  width: 100%;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  overflow: hidden;
  background-color: #ffffff;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
`;
const AccordionItem = styled.div `
  border-bottom: 1px solid #f1f5f9;
  
  &:last-child {
    border-bottom: none;
  }
`;
const AccordionHeader = styled.div `
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
const AccordionContent = styled.div `
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

const Accordion = (props) => {
    const { items, allowMultipleOpen } = props;
    const [openIndexes, setOpenIndexes] = useState([]);
    const toggleItem = (index) => {
        if (allowMultipleOpen) {
            setOpenIndexes((prev) => prev.includes(index)
                ? prev.filter((i) => i !== index)
                : [...prev, index]);
        }
        else {
            setOpenIndexes((prev) => (prev[0] === index ? [] : [index]));
        }
    };
    return (jsx(AccordionContainer, { children: items.map((item, index) => (jsxs(AccordionItem, { children: [jsx(AccordionHeader, { onClick: () => toggleItem(index), children: item.title }), openIndexes.includes(index) && (jsx(AccordionContent, { children: item.content }))] }, index))) }));
};

const DropdownMenu = styled.div `
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  background-color: ${({ variant }) => (variant === "dark" ? "#000000ea" : "#ffffff")};
  color: ${({ variant }) => (variant === "dark" ? "#f1f5f9" : "#1e293b")};
  border: 1px solid ${({ variant }) => (variant === "dark" ? "#334155" : "#e2e8f0")};
  border-radius: 0.75rem;
  min-width: 180px;
  box-shadow: ${({ variant }) => variant === "dark"
    ? "0 10px 25px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -2px rgba(0, 0, 0, 0.3)"
    : "0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"};
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
const DropdownItem = styled.div `
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
    background-color: ${({ variant }) => variant === "dark"
    ? "rgba(148, 163, 184, 0.1)"
    : "rgba(59, 130, 246, 0.08)"};
    transform: translateX(2px);
  }
  
  &:active {
    background-color: ${({ variant }) => variant === "dark"
    ? "rgba(148, 163, 184, 0.15)"
    : "rgba(59, 130, 246, 0.12)"};
    transform: translateX(1px);
  }
`;

const Dropdown = (props) => {
    const { options, variant = "light", children } = props;
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef(null);
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
    return (jsxs("div", { ref: ref, style: { position: "relative", display: "inline-block" }, children: [jsx("div", { onClick: () => setIsOpen((prev) => !prev), style: { display: "inline-block", cursor: "pointer" }, children: children }), isOpen && (jsx(DropdownMenu, { variant: variant, role: "menu", children: options.map((opt) => (jsx(DropdownItem, { onClick: () => {
                        if (opt.action) {
                            opt.action();
                        }
                        setIsOpen(false);
                    }, children: opt.label }, opt.value))) }))] }));
};

const Overlay = styled.div `
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
const DialogContainer = styled.div `
  background: ${({ variant }) => variant === "light"
    ? "rgba(255, 255, 255, 0.95)"
    : "rgba(20, 20, 20, 0.95)"};
  backdrop-filter: blur(20px);
  border: 1px solid ${({ variant }) => variant === "light"
    ? "rgba(255, 255, 255, 0.2)"
    : "rgba(255, 255, 255, 0.1)"};
  color: ${({ variant }) => (variant === "light" ? "#1a1a1a" : "#f0f0f0")};
  border-radius: 20px;
  width: 500px;
  max-width: 90vw;
  padding: 32px;
  box-shadow: ${({ variant }) => variant === "light"
    ? "0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.1)"
    : "0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.05)"};
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  transform: translateY(0);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`;
const Header = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;
const Title = styled.h2 `
  font-size: 20px;
  margin: 0;
`;
const CloseButton = styled.button `
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
const Content = styled.div `
  font-size: 16px;
`;
const OpenButton = styled.button `
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

const Dialog = (props) => {
    const { children, variant = "light", title, triggerText } = props;
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef(null);
    const toggleDialog = () => setIsOpen(prev => !prev);
    const renderTrigger = () => {
        return (jsx(OpenButton, { onClick: toggleDialog, children: triggerText }));
    };
    return (jsxs(Fragment, { children: [renderTrigger(), isOpen && (jsx(Overlay, { children: jsxs(DialogContainer, { ref: ref, variant: variant, "data-testid": "dialogContainer", children: [jsxs(Header, { children: [jsx(Title, { "data-testid": "dialogTitle", children: title }), jsx(CloseButton, { onClick: toggleDialog, "data-testid": "dialogCloseButton", children: "x" })] }), jsx(Content, { "data-testid": "dialogContent", children: children })] }) }))] }));
};

const StyledTabsContainer = styled.div `
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
`;
const StyledTabHeader = styled.div `
  display: flex;
  gap: 8px;
  padding: 0;
`;
const StyledTabButton = styled.button `
  padding: 8px 16px;
  border: none;
  border-radius: 9999px; 
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  background-color: ${props => props.isactive
    ? props.variant === "light" ? "#e0e0e0" : "#333333"
    : "transparent"};
  color: ${props => props.isactive
    ? props.variant === "light" ? "#000000" : "#ffffff"
    : props.variant === "light" ? "#444444" : "#817e7eff"};
  border: 1px solid
    ${props => props.isactive
    ? props.variant === "light" ? "#c0c0c0" : "#444444"
    : "transparent"};
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${props => props.variant === "light" ? "#f0f0f0" : "#444444"};
  }
`;
const StyledTabContent = styled.div `
  width: auto;
  padding: 24px;
  border-radius: 12px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  background-color: ${props => props.variant === "light" ? "#ffffff" : "#1e1e1e"};
  color: ${props => props.variant === "light" ? "#333333" : "#ffffff"};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border: 1px solid
    ${props => (props.variant === "light" ? "#e6e6e6" : "#333333")};
`;

const Tab = ({ children }) => {
    return jsx(Fragment, { children: children });
};
const Tabs = ({ children, variant = "light", defaultActiveTab = 0 }) => {
    const tabHeaders = React.Children.toArray(children);
    const [activeTab, setActiveTab] = useState(defaultActiveTab);
    return (jsxs(StyledTabsContainer, { children: [jsx(StyledTabHeader, { children: tabHeaders.map((tab, index) => (jsx(StyledTabButton, { variant: variant, isactive: index === activeTab, onClick: () => setActiveTab(index), children: tab.props.title }, index))) }), jsx(StyledTabContent, { "data-testid": "tab-content", variant: variant, children: tabHeaders[activeTab]?.props.children })] }));
};

export { Accordion, Button, Dialog, Dropdown, Input, Tab, Tabs };
//# sourceMappingURL=index.js.map
