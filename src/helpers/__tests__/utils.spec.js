import { singleColorConverter } from "../utils.js";

describe("Helpers - Utils.js", () => {
  it.each([
    ["1", "01"],
    ["23", "17"],
    ["99", "63"],
    ["155", "9b"],
    ["222", "de"],
    ["255", "ff"]
  ])(
    "should return the correct value from a valid input",
    (rgbColour, hexColour) => {
      expect(singleColorConverter(rgbColour)).toBe(hexColour);
    }
  );

  it("should throw an error when the input field is empty", () => {
    expect(() => singleColorConverter("")).toThrow(
      "Please enter a value beteween 0 and 255"
    );
  });

  it.each([
    [4, "Input must be a string"],
    [true, "Input must be a string"],
    [null, "Input must be a string"],
    [undefined, "Input must be a string"],
    [{}, "Input must be a string"],
    [[], "Input must be a string"]
  ])(
    "should throw an error when the input is not a string",
    (invalidColor, error) => {
      expect(() => singleColorConverter(invalidColor)).toThrow(error);
    }
  );

  it.each([
    ["-5", "RGB values must be between 0 and 255"],
    ["276", "RGB values must be between 0 and 255"]
  ])(
    "should throw an error when the input is a string but the number is outside the expected range (0 - 255)",
    (invalidValue, error) => {
      expect(() => singleColorConverter(invalidValue)).toThrow(error);
    }
  );
});
