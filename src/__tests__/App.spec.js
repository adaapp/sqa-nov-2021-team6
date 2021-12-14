import React from "react";
import renderer from "react-test-renderer";
import { render } from "@testing-library/react";
import App from "../components/app/App";

describe("App.js", () => {
  it("should display the DOM correctly", () => {
    const tree = renderer.create(<App />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("should render the main screen correctly", () => {
    const { getByText, getByRole } = render(<App />);

    //Check for heading
    expect(getByText("RGB to Hex Converter")).toBeInTheDocument();

    //Check for color input fields
    expect(getByText("Red")).toBeInTheDocument();
    expect(getByText("Green")).toBeInTheDocument();
    expect(getByText("Blue")).toBeInTheDocument();

    //Check for buttons
    expect(getByRole("button", { name: /Convert/i })).toBeInTheDocument();
    expect(getByRole("button", { name: /Reset/i })).toBeInTheDocument();

    //Check for HEX color display
    expect(getByText("HEX Colour")).toBeInTheDocument();
  });
});
