import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ColorInput from "../components/ColorInput";

describe("ColourInput.js", () => {

  it("should display the color value correctly in the input field", () => {
    const setColor = jest.fn();

    const { getByRole, getByLabelText } = render(
      <ColorInput color={"green"} setColor={setColor}/>
    );

    fireEvent.change(getByLabelText("green"), {
      target: { value: "255" }
    });

    expect(getByRole("textbox").value).toBe("255");
  });

  it("displays error message when user enters invalid input", () => {
    const { getByText, getByLabelText } = render(
      <ColorInput color={"green"} />
    );

    fireEvent.change(getByLabelText("green"), {
      target: { value: "color" }
    });

    expect(getByText("Please insert a number between 0 and 255")).toBeInTheDocument();
  });

  it("should call the setColor function when user input is correct", () => {
    const setColor = jest.fn();
    const { getByLabelText } = render(
      <ColorInput color={"green"} setColor={setColor} />
    );

    fireEvent.change(getByLabelText("green"), {
      target: { value: "255" }
    });

    expect(setColor).toHaveBeenCalled();
  });
});
