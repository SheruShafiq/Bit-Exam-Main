> ## **E2E Test Plan**

### **Scopes:**

- The animation should be visible on the landing page of the website.
- While the animation is playing, the user should not be able to interact with the website.
- Once the animation is over the user should be able to interact with the website.
- Once the animation is over it should not be visible anymore.

### **Goal**

The goal of this test is to make sure that the loading screen is visible on the landing page of the website upon landing and that the user is not able to interact with the website while the animation is playing. Once the animation is over the user should be able to interact with the website and the loading screen should not be visible anymore.

### **Test Environment:**

- Browser: Chrome Version: 111.0.5563.111
- Operating System: Windows 10
- Screen resolution: 1920 x 1080
- React version: 17.0.2
- Cypress version: 8.3.0
- Dependencies: react-router-dom version 6.2.1, framer-motion version 4.1.17

### **Test Approach:**

- The E2E test will use the Cypress testing framework to automate user actions and assertions.
- The test will be run on a local development environment.

### **Test Cases:**

- Verify that the landing page contains a loading screen animation upon loading.
- Verify that the user cannot interact with the website while the animation is playing.
- Verify that the loading screen animation disappears once it is finished.
- Verify that the user is able to interact with the website once the animation is finished.
- Verify that the loading screen animation does not reappear during subsequent visits to the landing page.

> ## **Component Test Plan:**

- Component Under Test
- LoadingScreen component

### **Scopes:**

- Test that the component renders without errors.
- Test that the component's root element has an ID of "overlay".
- Progress bar is styled correctly
- Test that the component's count-up element has a delay of 0, an end value of 100, and a duration of 4 seconds.
- Test that the component's "Loaded" text is displayed.
- Test that the component unmounts without errors.

### **Goal:**

- The goal of the tests is to ensure that the LoadingScreen component renders correctly and displays the progress bar, count-up element, and "Loaded" text as expected.

### **Test Environment:**

- Browser: Chrome Version: 111.0.5563.111
- Operating System: Windows 10
- Screen resolution: 1920 x 1080
- React version: 17.0.2
- Cypress version: 8.3.0
- Dependencies: react-router-dom version 6.2.1, framer-motion version 4.1.17

### **Test Approach:**

- The test approach will be to use unit testing to verify that the component renders correctly and its functionality works as expected.

### **Test Cases**

- Test that the component renders without errors.
- Test that the component's root element has an ID of "overlay".
- Progress bar is styled correctly
- Test that the component's count-up element has a delay of 0, an end value of 100, and a duration of 4 seconds.
- Test that the component's "Loaded" text is displayed.
- Test that the component unmounts without errors.

Place holder cypress test file:

```js
describe("LoadingScreen Component", () => {
  it("renders without errors", () => {
    cy.mount(<LoadingScreen />);
  });

  it("matches snapshot", () => {
    cy.wrap(<LoadingScreen />).toMatchSnapshot();
  });

  it("has an ID of overlay", () => {
    cy.get("#overlay").should("exist");
  });

  it("has a progress bar that starts at 2% and increases to 60% over 4 seconds", () => {
    cy.get("#overlay div").should("have.css", "width", "2%");
    cy.wait(4000);
    cy.get("#overlay div").should("have.css", "width", "60%");
  });

  it("has a progress bar with a height of 1px, white background color, and transition duration of 4 seconds, and a margin top and bottom of 20px", () => {
    cy.get("#overlay div").should("have.css", "height", "1px");
    cy.get("#overlay div").should(
      "have.css",
      "background-color",
      "rgb(255, 255, 255)"
    );
    cy.get("#overlay div").should("have.css", "transition-duration", "4s");
    cy.get("#overlay div").should("have.css", "margin-top", "20px");
    cy.get("#overlay div").should("have.css", "margin-bottom", "20px");
  });

  it("has a count-up element with a delay of 0, an end value of 100, and a duration of 4 seconds", () => {
    cy.get("#overlay div > div > span").should("have.attr", "data-delay", "0");
    cy.get("#overlay div > div > span").should("have.attr", "data-end", "100");
    cy.get("#overlay div > div > span").should(
      "have.attr",
      "data-duration",
      "4"
    );
  });

  it("displays 'Loaded' text", () => {
    cy.get("#textItem").should("have.text", "Loaded");
  });

  it("unmounts without errors", () => {
    cy.unmount(<LoadingScreen />);
  });
});
```
