import React, { useState, ReactNode, ReactElement, JSX } from "react";
import {
  StyledTabsContainer,
  StyledTabHeader,
  StyledTabButton,
  StyledTabContent,
} from "./styled";


interface PropsInterface {
  children: ReactNode;
  variant?: "light" | "dark";
  defaultActiveTab?: number;
}

interface TabHeaderProps {
  title: string;
  children: ReactNode;
}


const TabHeader = ({ children }: TabHeaderProps) => {
  return <>{children}</>;
};
const TabContent = ({ children }: { children: ReactNode }) => <>{children}</>;
const Tabs = ({ children, variant = "light", defaultActiveTab = 0 }: PropsInterface): JSX.Element => {
  const tabHeaders = React.Children.toArray(children) as ReactElement<TabHeaderProps>[];
  const [activeTab, setActiveTab] = useState(defaultActiveTab);

  return (
    <StyledTabsContainer>
      <StyledTabHeader >
        {tabHeaders.map((tab, index) => (
          <StyledTabButton
            key={index}
            variant={variant}
            isActive={index === activeTab}
            onClick={() => setActiveTab(index)}
          >
            {tab.props.title}
          </StyledTabButton>
        ))}
      </StyledTabHeader>
      <StyledTabContent variant={variant}>
        {tabHeaders[activeTab]?.props.children}
      </StyledTabContent>
    </StyledTabsContainer>
  );
};

export { Tabs, TabHeader, TabContent};
