import { render, fireEvent } from "@testing-library/react";
import ColorInput from "../components/ColorInput";

test("getColor called when user input changes", () => {
    const getColor = jest.fn()
    const { getByLabelText } = render(<ColorInput color={"green"} getColor={getColor}/>);

    fireEvent.change(getByLabelText("green"), {
        target: { value: "255" }
      });
  
    expect(getColor).toHaveBeenCalled();
  });