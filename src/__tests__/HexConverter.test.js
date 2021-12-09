import { render } from "@testing-library/react";
import HexConverter from "../components/HexConverter";

test("initial HEX value is correct", () => {
  const { getByText } = render(<HexConverter />);

  expect(getByText("#000000")).toBeInTheDocument();
});

