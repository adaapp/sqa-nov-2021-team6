import React from "react";
import renderer from "react-test-renderer";
import { render } from "@testing-library/react";
import DisplayHex from "../components/DisplayHex";

describe("DisplayHex.js", () => {
  it("should display the DOM correctly", () => {
    const tree = renderer.create(<DisplayHex hexValue={"#dede01"} />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  describe("logic", () => {
    it.each([["#dede01"], ["#02de01"], ["#16027b"]])(
      "should display the passed HEX values correctly",
      (expected) => {
        const { getByDisplayValue } = render(
          <DisplayHex hexValue={expected} />
        );

        expect(getByDisplayValue(expected)).toBeInTheDocument();
      }
    );
  });
});
