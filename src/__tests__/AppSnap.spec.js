import React from "react";
import renderer from "react-test-renderer";
import App from "../components/app/App";

it("should display the DOM correctly", () => {
  const tree = renderer.create(<App />).toJSON();

  expect(tree).toMatchSnapshot();
});
