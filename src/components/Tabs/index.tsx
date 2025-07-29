import { JSX, useState } from "react";
import { StyledTabsContainer, StyledTabHeader, StyledTabContent, StyledTabButton } from "./styled";

export interface PropsInterface {
    children: React.ReactNode[];
    variant?: "light" | "dark";
    titles: string[];
    defaultActiveTab?: number;
}

export interface HeaderInterface {
    titles: string[];
    activeTab: number;
    onTabClick: (index: number) => void;
    variant: "light" | "dark";
}

export interface ContentInterface {
    children: React.ReactNode[];
    activeTab: number;
}

const TabHeader = (props: HeaderInterface): JSX.Element => {
    const { titles, activeTab, onTabClick, variant } = props;
    
    return (
        <StyledTabHeader variant={variant}>
            {titles.map((title, index) => (
                <StyledTabButton
                    key={index}
                    variant={variant}
                    isActive={activeTab === index}
                    onClick={() => onTabClick(index)}
                >
                    {title}
                </StyledTabButton>
            ))}
        </StyledTabHeader>
    );
};

const TabContent = (props: ContentInterface): JSX.Element => {
    const { children, activeTab } = props;
    
    return (
        <StyledTabContent variant="light">
            {children[activeTab]}
        </StyledTabContent>
    );
};

const Tabs = (props: PropsInterface): JSX.Element => {
    const { children, variant = "light", titles, defaultActiveTab = 0 } = props;
    const [activeTab, setActiveTab] = useState(defaultActiveTab);
    
    const handleTabClick = (index: number) => {
        setActiveTab(index);
    };
    
    return (
        <StyledTabsContainer variant={variant}>
            <TabHeader
                titles={titles}
                activeTab={activeTab}
                onTabClick={handleTabClick}
                variant={variant}
            />
            <TabContent activeTab={activeTab} children={children} />
        </StyledTabsContainer>
    );
};

export default Tabs;