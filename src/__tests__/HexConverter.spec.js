import React from "react";
import renderer from "react-test-renderer";
import { render, fireEvent } from "@testing-library/react";
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
    it.each([
      ["100", "200", "250", "#64c8fa"],
      ["1", "2", "3", "#010203"],
      ["0", "100", "255", "#0064ff"]
    ])(
      "should set hex colour based on input",
      async (red, green, blue, hexValue) => {
        const { getByLabelText, getByDisplayValue, getByText } = render(
          <HexConverter />
        );

        await fireEvent.change(getByLabelText("Red"), {
          target: { value: red }
        });

        await fireEvent.change(getByLabelText("Green"), {
          target: { value: green }
        });

        await fireEvent.change(getByLabelText("Blue"), {
          target: { value: blue }
        });

        fireEvent.click(getByText("Convert", { selector: "button" }));

        expect(getByDisplayValue(red)).toBeInTheDocument();
        expect(getByDisplayValue(green)).toBeInTheDocument();
        expect(getByDisplayValue(blue)).toBeInTheDocument();
        expect(getByDisplayValue(hexValue)).toBeInTheDocument();
      }
    );

    it.each([
      ["100", "200", "250", "#000000"],
      ["1", "2", "3", "#000000"],
      ["0", "100", "255", "#000000"]
    ])("should reset state", async (red, green, blue, hexValue) => {
      const { getByLabelText, getByTestId, queryAllByDisplayValue, getByText } =
        render(<HexConverter />);

      await fireEvent.change(getByLabelText("Red"), {
        target: { value: red }
      });

      await fireEvent.change(getByLabelText("Green"), {
        target: { value: green }
      });

      await fireEvent.change(getByLabelText("Blue"), {
        target: { value: blue }
      });

      fireEvent.click(getByText("Reset", { selector: "button" }));

      expect(queryAllByDisplayValue(red).length).toBe(0);
      expect(queryAllByDisplayValue(green).length).toBe(0);
      expect(queryAllByDisplayValue(blue).length).toBe(0);
      expect(getByTestId("display-hex").value).toBe(hexValue);
    });
  });
});
