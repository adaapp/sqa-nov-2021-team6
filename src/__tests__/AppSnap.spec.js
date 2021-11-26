import React from "react";
import renderer from "react-test-renderer";
import App from "../components/app/App";

it("checks that DOM is consistent", () => {
  const tree = renderer.create(<App />).toJSON();

  expect(tree).toMatchSnapshot();
});
