const modeToggle = document.getElementById("mode-toggle");
const modeLabel = document.getElementById("mode-label");
const sectionTitle = document.getElementById("section-title");
const fromUnit = document.getElementById("from-unit");
const toUnit = document.getElementById("to-unit");
const convertButton = document.getElementById("convert-button");
const inputValue = document.getElementById("input-value");
const outputValue = document.getElementById("output-value");

// Define unit sets
const lengthUnits = ["Centimeter", "Inch", "Foot", "Meter", "Mile"];
const temperatureUnits = ["Celsius", "Fahrenheit", "Kelvin"];

// Initialize default mode (length)
let currentMode = "length";
populateUnits(lengthUnits);

// Toggle mode
modeToggle.addEventListener("change", () => {
  if (modeToggle.checked) {
    currentMode = "temperature";
    modeLabel.textContent = "Mode: Temperature";
    sectionTitle.textContent = "Temperature Conversion";
    populateUnits(temperatureUnits);
  } else {
    currentMode = "length";
    modeLabel.textContent = "Mode: Length";
    sectionTitle.textContent = "Length Conversion";
    populateUnits(lengthUnits);
  }
});

// Populate dropdowns based on mode
function populateUnits(units) {
  fromUnit.innerHTML = "";
  toUnit.innerHTML = "";
  units.forEach((unit) => {
    const option1 = document.createElement("option");
    option1.textContent = unit;
    const option2 = document.createElement("option");
    option2.textContent = unit;
    fromUnit.appendChild(option1);
    toUnit.appendChild(option2);
  });
}

// Conversion handler
convertButton.addEventListener("click", () => {
  const value = parseFloat(inputValue.value);
  const from = fromUnit.value;
  const to = toUnit.value;

  if (isNaN(value)) {
    outputValue.value = "Invalid input";
    return;
  }

  let result;

  if (currentMode === "length") {
    result = convertLength(value, from, to);
  } else {
    result = convertTemperature(value, from, to);
  }

  outputValue.value = result.toFixed(4);
});

// Length conversion function
function convertLength(len, fromUnit, toUnit) {
  let lenInMeters;
  switch (fromUnit) {
    case "Centimeter": lenInMeters = len / 100; break;
    case "Inch": lenInMeters = len * 0.0254; break;
    case "Foot": lenInMeters = len * 0.3048; break;
    case "Meter": lenInMeters = len; break;
    case "Mile": lenInMeters = len * 1609.34; break;
    default: lenInMeters = len;
  }

  switch (toUnit) {
    case "Centimeter": return lenInMeters * 100;
    case "Inch": return lenInMeters / 0.0254;
    case "Foot": return lenInMeters / 0.3048;
    case "Meter": return lenInMeters;
    case "Mile": return lenInMeters / 1609.34;
    default: return lenInMeters;
  }
}

// Temperature conversion function
function convertTemperature(temp, fromUnit, toUnit) {
  let tempInCelsius;

  // Convert from any to Celsius
  switch (fromUnit) {
    case "Celsius": tempInCelsius = temp; break;
    case "Fahrenheit": tempInCelsius = (temp - 32) * (5 / 9); break;
    case "Kelvin": tempInCelsius = temp - 273.15; break;
    default: tempInCelsius = temp;
  }

  // Convert from Celsius to target
  switch (toUnit) {
    case "Celsius": return tempInCelsius;
    case "Fahrenheit": return tempInCelsius * (9 / 5) + 32;
    case "Kelvin": return tempInCelsius + 273.15;
    default: return tempInCelsius;
  }
}
