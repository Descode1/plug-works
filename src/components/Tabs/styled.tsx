import styled from "styled-components";

interface StyledProps {
    variant: "light" | "dark";
}

interface ButtonProps extends StyledProps {
    isActive: boolean;
}

export const StyledTabsContainer = styled.div<StyledProps>`
    width: 100%;
    background-color: ${props => props.variant === "light" ? "#ffffff" : "#1a1a1a"};
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
`;

export const StyledTabHeader = styled.div<StyledProps>`
    display: flex;
    background-color: ${props => props.variant === "light" ? "#f8f9fa" : "#2d2d2d"};
    border-bottom: 1px solid ${props => props.variant === "light" ? "#e9ecef" : "#404040"};
    padding: 0;
`;

export const StyledTabButton = styled.button<ButtonProps>`
    padding: 12px 24px;
    border: none;
    background-color: ${props => {
        if (props.isActive) {
            return props.variant === "light" ? "#ffffff" : "#1a1a1a";
        }
        return "transparent";
    }};
    color: ${props => {
        if (props.isActive) {
            return props.variant === "light" ? "#333333" : "#ffffff";
        }
        return props.variant === "light" ? "#666666" : "#cccccc";
    }};
    cursor: pointer;
    font-size: 14px;
    font-weight: ${props => props.isActive ? "600" : "400"};
    border-bottom: 2px solid ${props => {
        if (props.isActive) {
            return props.variant === "light" ? "#007bff" : "#4dabf7";
        }
        return "transparent";
    }};
    transition: all 0.3s ease;
    position: relative;
    
    &:hover {
        background-color: ${props => {
            if (props.isActive) {
                return props.variant === "light" ? "#ffffff" : "#1a1a1a";
            }
            return props.variant === "light" ? "#f1f3f4" : "#3a3a3a";
        }};
        color: ${props => props.variant === "light" ? "#333333" : "#ffffff"};
    }
    
    &:focus {
        outline: 2px solid ${props => props.variant === "light" ? "#007bff" : "#4dabf7"};
        outline-offset: -2px;
    }
    
    &:active {
        transform: translateY(1px);
    }
`;

export const StyledTabContent = styled.div<StyledProps>`
    padding: 24px;
    min-height: 200px;
    line-height: 1.6;
    background-color: ${props => props.variant === "light" ? "#ffffff" : "#1a1a1a"};
    color: ${props => props.variant === "light" ? "#333333" : "#ffffff"};
    
    /* Smooth content transition */
    animation: fadeIn 0.3s ease-in-out;
    
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;