import "@testing-library/jest-dom";
import Dropdown from ".";
import { DropdownOption } from ".";
import { fireEvent, render, screen } from "@testing-library/react";

const mockOption: DropdownOption[] = [
  { label: "Option 1", value: "1" },
  { label: "Option 2", value: "2" },
  { label: "Option 3", value: "3", action: jest.fn() },
];
describe("Dropdown component", () => {
  test("renders trigger and no menu initially", () => {
    render(
      <Dropdown options={mockOption} >
        Toggle
      </Dropdown>
    );
    expect(screen.getByText("Toggle")).toBeInTheDocument();
    expect(screen.queryByText("Option 1")).not.toBeInTheDocument();
  });
  test("opens dropdown on trigger click", () => {
    render(
      <Dropdown options={mockOption}  variant="light">
        Menu
      </Dropdown>
    );
    fireEvent.click(screen.getByText("Menu"));
    expect(screen.getByText("Option 1")).toBeVisible();
    expect(screen.getByText("Option 2")).toBeVisible();
    expect(screen.getByText("Option 3")).toBeVisible();
  });
  test("applies light variant styles", () => {
    render(
      <Dropdown options={mockOption}  variant="light">
        <button>Light</button>
      </Dropdown>
    );
    fireEvent.click(screen.getByText("Light"));
    const menu = screen.getByRole("menu");
    expect(menu).toHaveStyle("background-color: #fff ")
  });

  test("applies dark variant styles", () => {
    render(
      <Dropdown options={mockOption}  variant="dark">
        <button>Dark</button>
      </Dropdown>
    );
    fireEvent.click(screen.getByText("Dark"));
    const menu = screen.getByRole("menu");
    expect(menu).toHaveStyle("background-color: #000000ea")
  });
});
