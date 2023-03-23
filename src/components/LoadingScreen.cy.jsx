/* eslint-disable no-undef */
import React from "react";
import LoadingScreen from "./LoadingScreen";

describe("<LoadingScreen />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<LoadingScreen />);
  });
});
