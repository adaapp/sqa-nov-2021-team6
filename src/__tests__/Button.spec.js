import React from "react";
import renderer from "react-test-renderer";
import { render, fireEvent } from "@testing-library/react";
import Button from "../components/Button";

describe("Button.js", () => {
  it("should display the DOM correctly", () => {
    const reset = jest.fn();
    const tree = renderer
      .create(<Button type="secondary" text="Reset" action={reset} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  describe("logic", () => {
    it.each([
      ["primary", "is-info"],
      ["secondary", "is-light"]
    ])(
      "should display button with correct styling based on type prop",
      (type, expectedClass) => {
        const { container } = render(<Button type={type} />);

        expect(container.getElementsByClassName(expectedClass).length).toBe(1);
      }
    );

    it.each([["Convert"], ["Reset"]])(
      "should display given text prop",
      (text) => {
        const { getByText } = render(<Button text={text} />);

        expect(getByText(text)).toBeInTheDocument();
      }
    );

    it("should call action prop when the button is clicked", () => {
      const onSubmit = jest.fn();
      const { getByRole } = render(<Button action={onSubmit} />);

      fireEvent.click(getByRole("button"));

      expect(onSubmit).toHaveBeenCalled();
    });
  });
});
