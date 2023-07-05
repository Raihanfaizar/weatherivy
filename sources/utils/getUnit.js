export default function getUnit(unit = "celsius", value) {
  // Change to celsius
  if(unit === "celsius") {
    return `${Math.floor(value - 273.15)} ℃`;
  }
  // Change to fahrenheit
  return `${Math.floor(((value - 273.15) * 1.8) + 32)} ℉`;
}