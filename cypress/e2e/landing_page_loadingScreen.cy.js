/* eslint-disable no-undef */
describe("Landing Page", () => {
  before(() => {
    cy.visit("/");
  });

  it("displays a loading screen", () => {
    cy.get("#LoadingScreenLanding").should("exist");
  });

  it("prevents scrolling", () => {
    cy.get("body").should("have.css", "overflow", "hidden");
  });

  it("hides the loading screen when loading is complete", () => {
    cy.wait(4000);
    cy.get("#LoadingScreenLanding").should("have.css", "opacity", "0");
    cy.get("#LoadingScreenLanding").should("have.css", "visibility", "hidden");
  });
});
