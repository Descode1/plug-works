
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Page from ".";

describe("Page", () => {
  it("renders title and children", () => {
    const title = "Test Title";
    const children = "Test Children";

    const { getByText } = render(<Page title={title}>{children}</Page>);

    expect(getByText(title)).toBeInTheDocument();
    expect(getByText(children)).toBeInTheDocument();
  });
  it("applies correct background color to Container", () => {
    const { getByText } = render(<Page title="Test Title">Child</Page>);
    const styledDiv = getByText("Test Title").parentElement; 
    expect(styledDiv).toHaveStyle("background-color: #f5f5f5");
  });
});
