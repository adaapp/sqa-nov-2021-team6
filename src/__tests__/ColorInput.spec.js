import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ColorInput from "../components/ColorInput";

describe("ColourInput.js", () => {
  it("should call the setColor function when user input changes", () => {
    const setColor = jest.fn();
    const { getByLabelText } = render(
      <ColorInput color={"green"} setColor={setColor} />
    );

    fireEvent.change(getByLabelText("green"), {
      target: { value: "255" }
    });

    expect(setColor).toHaveBeenCalled();
  });

  it("should display the color value correctly in the input field", () => {
    const { getByRole } = render(
      <ColorInput color={"green"} rgbValue={"255"} />
    );

    expect(getByRole("textbox").value).toBe("255");
  });
});
