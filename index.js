document.addEventListener("DOMContentLoaded", function () {
  //Array for temperature units
  const temperatureUnits = ["celsius", "fahrenheit"];

  //Select elements for 'from' and 'to'
  let fromSelect = document.getElementById("from");
  let toSelect = document.getElementById("to");

  //Function to populate options in a select element using a for loop
  function populateOptions(selectElement, options) {
    for (let i = 0; i < options.length; i++) {
      let option = options[i];
      let optionElement = document.createElement("option");
      optionElement.textContent = option.charAt(0).toUpperCase() + option.slice(1);
      optionElement.value = option;
      selectElement.appendChild(optionElement);
    }
  }

  //Populate options for 'from' and 'to' 
  populateOptions(fromSelect, temperatureUnits);
  populateOptions(toSelect, temperatureUnits);

  //Event listener for form 'submit'
  document.getElementById("tempForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let tempValue = parseFloat(document.getElementById("tempValue").value);
    let fromUnit = document.getElementById("from").value;
    let toUnit = document.getElementById("to").value;

    let result;

    //Temperature conversion
    if (fromUnit === "celsius" && toUnit === "fahrenheit") {
      result = (tempValue * 9) / 5 + 32;
      result = result.toFixed(2) + " °F";
    } else if (fromUnit === "fahrenheit" && toUnit === "celsius") {
      result = ((tempValue - 32) * 5) / 9;
      result = result.toFixed(2) + " °C";
    } else {
      result = "Invalid conversion.";
    }

    //Display the converted temperature
    document.getElementById("result").textContent = `Converted Temperature: ${result}`;
  });
});

