import "@testing-library/jest-dom";
import { Tabs,Tab } from ".";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Tab component", ()=>{
    test("renders the tab component", ()=>{
        render(<Tabs variant="light">
            <Tab title="Tab 1">Content 1</Tab>
            <Tab title="Tab 2">Content 2</Tab>
            <Tab title="Tab 3">Content 3</Tab>
        </Tabs>);
        expect(screen.getByText("Tab 1")).toBeInTheDocument();
        expect(screen.getByText("Content 1")).toBeInTheDocument();
        expect(screen.queryByText("Content 3")).not.toBeInTheDocument();
    });
    test("renders Tab 1 by default and the correct tab after switching tabs", ()=>{
       render(<Tabs variant="light">
            <Tab title="Tab 1">Content 1</Tab>
            <Tab title="Tab 2">Content 2</Tab>
            <Tab title="Tab 3">Content 3</Tab>
        </Tabs>);
        expect(screen.getByText("Content 1")).toBeInTheDocument();
        fireEvent.click(screen.getByText("Tab 2"));
        expect(screen.getByText("Content 2")).toBeInTheDocument();
        expect(screen.queryByText("Content 3")).not.toBeInTheDocument();
    });
    test("renders the light variant by default",()=>{
        const {getByTestId} = render(
        <Tabs>
            <Tab title="Tab 1">Content 1</Tab>
            <Tab title="Tab 2">Content 2</Tab>
            <Tab title="Tab 3">Content 3</Tab>
            </Tabs>);
        expect(getByTestId("tab-content")).toHaveStyle("background-color: #ffffff")
    });
    test("renders the dark variant",()=>{
        const {getByTestId} = render(
        <Tabs variant="dark">
            <Tab title="Tab 1">Content 1</Tab>
            <Tab title="Tab 2">Content 2</Tab>
            <Tab title="Tab 3">Content 3</Tab>
            </Tabs>);
        expect(getByTestId("tab-content")).toHaveStyle("background-color: #1e1e1e")
    });
    test("renders the correct default active tab",()=>{
        render(
        <Tabs  defaultActiveTab={2}>
            <Tab title="Tab 1">Content 1</Tab>
            <Tab title="Tab 2">Content 2</Tab>
            <Tab title="Tab 3">Content 3</Tab>
            </Tabs>);
            expect(screen.getByText("Content 3")).toBeInTheDocument();
    });
})