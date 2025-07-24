import '@testing-library/jest-dom';
import { fireEvent, render, screen } from "@testing-library/react";
import Button from ".";
describe("Button Component", () => {
    test("renders with children", () =>{
        render(<Button>Click me!!</Button>);
        expect(screen.getByText("Click me!!")).toBeInTheDocument();
    });
    test("calls action on click", () =>{
        const handleClick = jest.fn();
        render(<Button action={handleClick}>Click</Button>);
        fireEvent.click(screen.getByText('Click'));
        expect(handleClick).toHaveBeenCalledTimes(1);  
    });
    test("does not call action when disabled", () =>{
        const handleClick = jest.fn();
        render(<Button disabled action={handleClick}>
            Disabled
        </Button>);
        fireEvent.click(screen.getByText("Disabled"));
        expect(handleClick).not.toHaveBeenCalled();
    });
    test("has blue styles when variant is 'mlue'", () =>{
        const {container} = render(<Button variant='primary'>Blue</Button>);
        expect(container.firstChild).toHaveStyle('background-color: #3b82f6');
        expect(container.firstChild).toHaveStyle('color: rgb(255, 255, 255)');
    });
    test("has outlined styles when variant is 'outlined'",() =>{
        const {container} = render(<Button variant='outlined'>Outlined</Button>);
        expect(container.firstChild).toHaveStyle('border: 2px solid #3b82f6');
        expect(container.firstChild).toHaveStyle("color: #3b82f6");
    })
     test("has disabled styles when disabled is true", () => {
    const { container } = render(<Button disabled>Disabled</Button>);
    expect(container.firstChild).toHaveStyle("opacity: 0.6");
    expect(container.firstChild).toHaveStyle("cursor: not-allowed");
  });
})