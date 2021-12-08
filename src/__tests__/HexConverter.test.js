import { render, fireEvent } from "@testing-library/react";
import HexConverter from "../components/HexConverter";
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

test("initial HEX value is correct", () => {
  const { getByText } = render(<HexConverter />);

  expect(getByText("#000000")).toBeInTheDocument();
});

// test("converter works correctly", () => {
//   const { getByLabelText, getByText } = render(<HexConverter />);

//   fireEvent.change(getByLabelText("red"), {
//       target: { value: "255" }
//     });

//   fireEvent.change(getByLabelText("green"), {
//       target: { value: "56" }
//     });

//   fireEvent.change(getByLabelText("blue"), {
//       target: { value: "18" }
//     });

//   fireEvent.click(getByText("Convert"))

//   expect(getByText("#FF3812")).toBeInTheDocument();
// });

