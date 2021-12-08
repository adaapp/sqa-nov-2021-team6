import { render, fireEvent } from "@testing-library/react";
import Button from "../components/Button";

test("correct function called when button clicked", () => {
    const onSubmit = jest.fn()
    const buttonName = "Submit"
    const { getByText } = render(<Button text={"Submit"} action={onSubmit}/>);
    fireEvent.click(getByText("Submit"))
  
    expect(onSubmit).toHaveBeenCalled();
  });