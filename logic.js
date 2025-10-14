function convertLength() {
  let len = parseFloat(document.getElementById("len-input").value);
  let fromUnit = document.getElementById("From-unit").value;
  let toUnit = document.getElementById("To-unit").value;
  let output = document.getElementById("len-output");
  if (isNaN(len)) {
    output.value = "Invalid input";
    return;
  }
  let lenInMeters;
  switch (fromUnit) {
    case "Centimeter":
      lenInMeters = len / 100;
      break;
    case "Inch":
      lenInMeters = len * 0.0254;
      break;
    case "Foot":
      lenInMeters = len * 0.3048;
      break;
    case "Meter":
      lenInMeters = len;
      break;
    case "Mile":
      lenInMeters = len * 1609.34;
      break;
    default:
      lenInMeters = len;
  }
  let result;
  switch (toUnit) {
    case "Centimeter":
      result = lenInMeters * 100;
      break;
    case "Inch":
      result = lenInMeters / 0.0254;
      break;
    case "Foot":
      result = lenInMeters / 0.3048;
      break;
    case "Meter":
      result = lenInMeters;
      break;
    case "Mile":
      result = lenInMeters / 1609.34;
      break;
    default:
      result = lenInMeters;
  }

  output.value = result.toFixed(4);
}
document
  .getElementById("len-convert-button")
  .addEventListener("click", convertLength);
