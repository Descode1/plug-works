import '@testing-library/jest-dom';
import Dialog from '.';
import { fireEvent, render, screen } from '@testing-library/react';
describe("Dialog component",()=>{
    test("render the correct trigger text", ()=>{
        render(<Dialog title='test dialog' triggerText='Test'>This is a test</Dialog>);
        expect(screen.getByText("Test")).toBeInTheDocument();
    });
    test("renders the dialog when triggered",()=>{
        render(<Dialog title='test dialog' triggerText='Test'>This is a test</Dialog>);
        fireEvent.click(screen.getByText("Test"));
        expect(screen.getByText("test dialog")).toBeInTheDocument();
        expect(screen.getByText("This is a test")).toBeInTheDocument();
    });
    test("renders light variant by default",()=>{
        const{getByTestId} = render(<Dialog title='test dialog' triggerText='Test'>This is a test</Dialog>);
        fireEvent.click(screen.getByText("Test"));
        expect(getByTestId("dialogContainer")).toHaveStyle("background: rgba(255, 255, 255, 0.95)");
    });
    test("renders dark variant",()=>{
        const{getByTestId} = render(<Dialog title='test dialog' triggerText='Test' variant='dark'>This is a test</Dialog>);
        fireEvent.click(screen.getByText("Test"));
        expect(getByTestId("dialogContainer")).toHaveStyle("background:rgba(20, 20, 20, 0.95)");
    });
    test("closes the deilog when closeButton clicked", ()=>{
        const{getByTestId} = render(<Dialog title='test dialog' triggerText='Test'>This is a test</Dialog>);
        fireEvent.click(screen.getByText("Test"));
        expect(screen.getByText("This is a test")).toBeInTheDocument();
        fireEvent.click(getByTestId("dialogCloseButton"));
        expect(screen.getByText("Test")).toBeInTheDocument();
    });
});