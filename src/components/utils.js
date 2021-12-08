export function singleColorConverter(colorValue) {
  var colorValueInteger = parseInt(colorValue);
  var hex = colorValueInteger.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}