import { render, fireEvent } from "@testing-library/react";
import ColorInput from "../components/ColorInput";

test("getColor called when user input changes", () => {
    const setColor = jest.fn()
    const { getByLabelText } = render(<ColorInput color={"green"} setColor={setColor}/>);

    fireEvent.change(getByLabelText("green"), {
        target: { value: "255" }
      });
  
    expect(setColor).toHaveBeenCalled();
  });