// Get value of the Celsius and Farenheit input fields
const celsius= document.querySelector("#celsius"),
fahrenhiet= document.querySelector("#fahrenheit");

// Set focus to the Celsius input field when the page loads

window.addEventListener("load", () => celsius.focus());

//Convert Celsius to Farenheit whwn Celsius values changes
celsius.addEventListener("input", () => {
    fahrenhiet.value =((celsius.value * 9) / 5 + 32).toFixed(2);
//  Clear farenheit value when celsius value is empty
 if(!celsius.value)  fahrenhiet.value ="";

});

// Convert Farenheit to Celsius when Fahrenheit value changes 
fahrenhiet.addEventListener("input", () => {
    celsius.value=(((fahrenhiet.value - 32) * 5) / 9).toFixed(2);

//  Clear farenheit value when celsius value is empty
if(!fahrenhiet.value)  celsius.value ="";

});