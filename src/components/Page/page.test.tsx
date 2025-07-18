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
    const { container } = render(
      <Page title="Test Title">Test Children</Page>
    );
    const styledDiv = container.querySelector("div > div"); // selects <Container> (inside outer <div>)
    expect(styledDiv).toHaveStyle("background-color:#f5f5f5");
  });
});
