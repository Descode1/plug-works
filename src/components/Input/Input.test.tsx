import "@testing-library/jest-dom";
import Input from ".";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Input component", () => {
  test("renders the placeholder", () => {
    render(<Input placeholder="Enter name" />);
    const input = screen.getByPlaceholderText("Enter name");
    expect(input).toBeInTheDocument();
  });
  test("renders as disabled when the disabled prop is passed", () => {
    render(<Input placeholder="Cant type" disabled />);
    const input = screen.getByPlaceholderText("Cant type") as HTMLInputElement;
    expect(input.disabled).toBe(true);
  });
  test("renders with correct variant (default primary)", () => {
    render(<Input placeholder="Check variant" />);
    const input = screen.getByPlaceholderText("Check variant");
    expect(input).toHaveAttribute("variant", "primary");
  });
  test("calls onChange when typing", () => {
    const handleChange = jest.fn();
    render(<Input placeholder="Type here" onChange={handleChange} />);
    const input = screen.getByPlaceholderText("Type here");
    fireEvent.change(input, { target: { value: "Hello" } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  test("supports different types like password", () => {
    render(<Input placeholder="Password" type="password" />);
    const input = screen.getByPlaceholderText("Password") as HTMLInputElement;
    expect(input.type).toBe("password");
  });
});
