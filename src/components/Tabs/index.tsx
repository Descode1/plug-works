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

interface TabProps {
  title: string;
  children: ReactNode;
}

const Tab = ({ children }: TabProps) => {
  return <>{children}</>;
};

const Tabs = ({ children, variant = "light", defaultActiveTab = 0 }: PropsInterface): JSX.Element => {

  const tabHeaders = React.Children.toArray(children) as ReactElement<TabProps>[];
  const [activeTab, setActiveTab] = useState<number>(defaultActiveTab);

  return (
    <StyledTabsContainer>
      <StyledTabHeader >
        {tabHeaders.map((tab, index) => (
          <StyledTabButton
            key={index}
            variant={variant}
            isactive={index === activeTab}
            onClick={() => setActiveTab(index)}
          >
            {tab.props.title}
          </StyledTabButton>
        ))}
      </StyledTabHeader>
      <StyledTabContent data-testid="tab-content" variant={variant}>
        {tabHeaders[activeTab]?.props.children}
      </StyledTabContent>
    </StyledTabsContainer>
  );
};

export  { Tabs, Tab};
