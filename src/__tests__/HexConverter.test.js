import { render } from "@testing-library/react";
import HexConverter from "../components/HexConverter";

test("converter works correctly", () => {
  expect(hexConverter(123,15,36)).toBe("7B0F24")
});

test("Error message appears if input is incorrect", () => {
  const { getByText } = render(<HexConverter />);
  hexConverter(123,15,'a')

  expect(getByText("Invalid input")).toBeInTheDocument();
});

test("HEX value displayed in correct format", () => {
  const { getByText } = render(<HexConverter />);
  hexConverter(123,15,36)

  expect(getByText("#7B0F24")).toBeInTheDocument();
});
