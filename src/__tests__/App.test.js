import React from "react";
import { render } from "@testing-library/react";
import App from "../components/app/App";

it("should render the main screen correctly", () => {
  const { getByText, getByRole } = render(<App />);

  //Check for heading
  expect(getByText("RGB to Hex Converter")).toBeInTheDocument();

  //Check for buttons
  expect(getByRole("button", { name: /Convert/i })).toBeInTheDocument();
  expect(getByRole("button", { name: /Reset/i })).toBeInTheDocument();

  //Check for color input fields
  expect(getByText("red")).toBeInTheDocument();
  expect(getByText("green")).toBeInTheDocument();
  expect(getByText("blue")).toBeInTheDocument();

  //Check for Hex Color Display
  expect(getByText("HEX color")).toBeInTheDocument();
});
