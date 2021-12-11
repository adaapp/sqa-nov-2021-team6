import React from "react";
import { render } from "@testing-library/react";
import HexConverter from "../components/HexConverter";

it("should display the initial HEX value correctly", () => {
  const { getByText } = render(<HexConverter />);

  expect(getByText("#000000")).toBeInTheDocument();
});

