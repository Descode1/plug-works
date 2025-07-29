import '@testing-library/jest-dom';
import Accordion, { AccordionData } from '.';
import { fireEvent, render, screen } from '@testing-library/react';
const items: AccordionData[] = [
    {title: "Item 1", content: "Content 1"},
    {title: "Item 2", content: "Content 2"},
    {title: "Item 3", content: "Content 3"},
];

describe("Accordion component", ()=>{
    test("renders all items title", ()=>{
        render(
            <Accordion items={items}/>   
        );
        items.forEach(item => {
            expect(screen.getByText(item.title)).toBeInTheDocument();
        });
    });
    test("toggles item content on click (without multipleOpen)", ()=>{
        render(<Accordion items={items}/>);
        fireEvent.click(screen.getByText("Item 1"));
        expect(screen.getByText("Content 1")).toBeInTheDocument();
        fireEvent.click(screen.getByText("Item 2"));
        expect(screen.getByText("Content 2")).toBeInTheDocument();
        expect(screen.queryByText("Content 1")).not.toBeInTheDocument();

    });
    test("toggles item content on click (with multipleOpen)", ()=>{
        render(<Accordion items={items} allowMultipleOpen = {true}/>);
        fireEvent.click(screen.getByText("Item 1"));
        expect(screen.getByText("Content 1")).toBeInTheDocument();
        fireEvent.click(screen.getByText("Item 2"));
        expect(screen.getByText("Content 2")).toBeInTheDocument();
        expect(screen.getByText("Content 1")).toBeInTheDocument();
    });
    test("closes item on second click", ()=>{
        render(<Accordion items={items} allowMultipleOpen = {true}/>);
        fireEvent.click(screen.getByText("Item 1"));
        expect(screen.getByText("Content 1")).toBeInTheDocument();
        fireEvent.click(screen.getByText("Item 1"));
        expect(screen.queryByText("Content 1")).not.toBeInTheDocument();
    })
});