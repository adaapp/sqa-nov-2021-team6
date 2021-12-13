import { singleColorConverter } from "../helpers/utils.js";

describe("Helpers - Utils.js", () => {
  it("should return the correct value from a valid input", () => {
    expect(singleColorConverter("1")).toBe("01");
    expect(singleColorConverter("23")).toBe("17");
    expect(singleColorConverter("99")).toBe("63");
    expect(singleColorConverter("155")).toBe("9b");
    expect(singleColorConverter("222")).toBe("de");
    expect(singleColorConverter("255")).toBe("ff");
  });

  it("should throw an error when the input field is empty", () => {
    expect(() => singleColorConverter("")).toThrow(
      "Please enter a value beteween 0 and 255"
    );
  });

  it("should throw an error when the input is not a string", () => {
    expect(() => singleColorConverter(4)).toThrow("Input must be a string");
    expect(() => singleColorConverter(true)).toThrow("Input must be a string");
    expect(() => singleColorConverter(null)).toThrow("Input must be a string");
    expect(() => singleColorConverter(undefined)).toThrow(
      "Input must be a string"
    );
    expect(() => singleColorConverter({})).toThrow("Input must be a string");
    expect(() => singleColorConverter([])).toThrow("Input must be a string");
  });

  it("should throw an error when the input is a string but the number is outside the expected range (0 - 255)", () => {
    expect(() => singleColorConverter("-5")).toThrow(
      "RGB values must be between 0 and 255"
    );
    expect(() => singleColorConverter("276")).toThrow(
      "RGB values must be between 0 and 255"
    );
  });
});
