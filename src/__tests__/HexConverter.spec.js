import React from "react";
import renderer from "react-test-renderer";
import { render } from "@testing-library/react";
import HexConverter from "../components/HexConverter";

describe("HexConverter", () => {
  describe("HexConverter view", () => {
    it("should display the DOM correctly", () => {
      const tree = renderer.create(<HexConverter />).toJSON();

      expect(tree).toMatchSnapshot();
    });

    it("should display the initial HEX value correctly", () => {
      const { getByDisplayValue } = render(<HexConverter />);

      expect(getByDisplayValue("#000000")).toBeInTheDocument();
    });
  });

  describe("logic", () => {
    it.todo("should set hex colour based on input");

    it.todo("should reset state");
  });
});
