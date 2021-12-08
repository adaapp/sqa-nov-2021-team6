import { render } from "@testing-library/react";
import HexConverter from "../components/HexConverter";

test("initial HEX value is correct", () => {
  const { getByText } = render(<HexConverter />);

  expect(getByText("#000000")).toBeInTheDocument();
});

// test("Error message appears if input is incorrect", () => {

// });

// test("HEX value displayed in correct format", () => {
//   const { getByText } = render(<HexConverter />);
//   hexConverter(123,15,36)

//   expect(getByText("#7B0F24")).toBeInTheDocument();
// });
