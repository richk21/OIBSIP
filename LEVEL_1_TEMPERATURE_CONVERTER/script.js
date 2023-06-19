function onSwap(){
    // Get the swap button element
    const swapButton = document.getElementById("swap-button");

    // Get the dropdown elements
    const dropdown1 = document.getElementById("unit1");
    const dropdown2 = document.getElementById("unit2");
    const inputfield = document.getElementById("textfield1");
    const outputfield = document.getElementById("textfield2");

    //swap
    const tempValue = dropdown1.value;
    dropdown1.value = dropdown2.value;
    dropdown2.value = tempValue;

    if(outputfield.value){
        const temp = inputfield.value;
        inputfield.value = outputfield.value;
        outputfield.value = temp;
    }
}

// Input field event listener
function onInputInFields(){
    const inputfield = document.getElementById("textfield1");
    const outputfield = document.getElementById("textfield2");

    /* outputfield.value = inputfield.value; */
    const inputValue = parseFloat(inputfield.value);
    const unit1 = document.getElementById("unit1").value;
    const unit2 = document.getElementById("unit2").value;

    let convertedValue;

    // Perform the temperature conversion based on the selected units
    if (unit1 === "celsius" && unit2 === "kelvin") {
        convertedValue = inputValue + 273.15;
    } else if (unit1 === "celsius" && unit2 === "fahrenheit") {
        convertedValue = (inputValue * 9) / 5 + 32;
    } else if (unit1 === "kelvin" && unit2 === "celsius") {
        convertedValue = inputValue - 273.15;
    } else if (unit1 === "kelvin" && unit2 === "fahrenheit") {
        convertedValue = (inputValue - 273.15) * (9 / 5) + 32;
    } else if (unit1 === "fahrenheit" && unit2 === "celsius") {
        convertedValue = ((inputValue - 32) * 5) / 9;
    } else if (unit1 === "fahrenheit" && unit2 === "kelvin") {
        convertedValue = ((inputValue - 32) * 5) / 9 + 273.15;
    } else {
        // If the units are the same, no conversion is needed
        convertedValue = inputValue;
    }

    // Update the output field with the converted value
    outputfield.value = convertedValue.toFixed(2);
}
