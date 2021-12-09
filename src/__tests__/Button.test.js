import { render, fireEvent } from "@testing-library/react";
import Button from "../components/Button";

test("function is called when the button is clicked", () => {
    const onSubmit = jest.fn()
    const { getByRole } = render(<Button action={onSubmit}/>);
    fireEvent.click(getByRole("button"))
  
    expect(onSubmit).toHaveBeenCalled();
  });