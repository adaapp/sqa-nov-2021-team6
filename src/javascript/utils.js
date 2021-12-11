export function singleColorConverter(colorValue) {

  if (typeof colorValue !== "string") {
    throw new Error("Input must be a string");
  }

  if (!colorValue.length) {
    throw new Error("Please enter a value beteween 0 and 255");
  }

  if (parseInt(colorValue, 10) < 0 || parseInt(colorValue, 10) > 255 ) {
    throw new Error("RGB values must be between 0 and 255");
  }

  let colorValueInteger = parseInt(colorValue);
  let hex = colorValueInteger.toString(16);

  return hex.length == 1 ? "0" + hex : hex;
}
