> **Component Test Plan:**

### **Scopes:**

Test that the Title component renders without errors.
Test that the Title component displays the title text and subtext correctly.

### **Goal:**

The goal of the tests is to ensure that the Title component renders correctly and displays the correct title text and subtext.

### **Test Environment:**

The component will be tested in a React testing environment using Jest.

### **Test Approach:**

The test approach will be to use snapshot testing and unit testing to verify that the component renders correctly and displays the correct title text and subtext.

### **Test Cases**

- Snapshot Testing
- Test that the component renders without errors.
- Test that the component matches its snapshot.
- Unit Testing
- Test that the component displays the correct title text and subtext.
- Test that the component displays the title text and subtext in the correct order.

### **Place holder cypress test file:**

```js
import React from "react";
import { render, screen } from "@testing-library/react";
import Title from "../components/Title";

describe("Title Component", () => {
  it("renders without errors", () => {
    render(<Title titleText="Solliciteren" subText="Go for IT" />);
  });

  it("matches snapshot", () => {
    const { asFragment } = render(
      <Title titleText="Solliciteren" subText="Go for IT" />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("displays the correct title text and subtext", () => {
    render(<Title titleText="Solliciteren" subText="Go for IT" />);
    const title = screen.getByRole("heading", { level: 1 });
    const subtext = screen.getByText("Go for IT");
    expect(title).toHaveTextContent("Solliciteren");
    expect(subtext).toBeInTheDocument();
  });

  it("displays the title text and subtext in the correct order", () => {
    render(<Title titleText="Solliciteren" subText="Go for IT" />);
    const title = screen.getByRole("heading", { level: 1 });
    const subtext = screen.getByText("Go for IT");
    expect(title).toHaveStyle({ order: "2" });
    expect(subtext).toHaveStyle({ order: "1" });
  });
});
```
