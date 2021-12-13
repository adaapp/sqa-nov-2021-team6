import React from "react";
import { render } from "@testing-library/react";
import HexConverter from "../components/HexConverter";

describe("HexConverter", () => {
  it("should display the initial HEX value correctly", () => {
    const { getByDisplayValue } = render(<HexConverter />);

    expect(getByDisplayValue("#000000")).toBeInTheDocument();
  });
});
