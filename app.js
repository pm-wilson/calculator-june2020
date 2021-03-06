//import from utils
import { add, subtract, multiply, divide } from "./utils.js";

// get add dom elements
// get add-input-1
const addInput1 = document.getElementById("add-input-1");
// get add-input-2
const addInput2 = document.getElementById("add-input-2");
// get add-button
const boogerButton = document.getElementById("add-button");
// get the add-result span
const boogerSpan = document.getElementById("add-result");

//get subtract dom elements
const subtractInput1 = document.getElementById("subtract-input-1");
const subtractInput2 = document.getElementById("subtract-input-2");
const subtractButton = document.getElementById("subtract-button");
const subtractResult = document.getElementById("subtract-result");

//get multiply dom elements
const multiplyInput1 = document.getElementById("multiply-input-1");
const multiplyInput2 = document.getElementById("multiply-input-2");
const multiplyButton = document.getElementById("multiply-button");
const multiplyResult = document.getElementById("multiply-result");

//get divide dom elements
const divideInput1 = document.getElementById("divide-input-1");
const divideInput2 = document.getElementById("divide-input-2");
const divideButton = document.getElementById("divide-button");
const divideResult = document.getElementById("divide-result");

// set the event handler to the button
boogerButton.addEventListener("click", () => {
  // in the click event handler . . .
  // make sure we have the inputs (console.log)
  // make sure we have the span
  // make sure we have the .values of the inputs
  const value1 = addInput1.value;
  const value2 = addInput2.value;

  // add the two values together
  const sum = add(value1, value2);

  // update the textContent of the span
  boogerSpan.textContent = sum;
});

subtractButton.addEventListener("click", () => {
  const subtractValue1 = subtractInput1.value;
  const subtractValue2 = subtractInput2.value;

  const result = subtract(subtractValue1, subtractValue2);

  subtractResult.textContent = result;
});

multiplyButton.addEventListener("click", () => {
  const multiplyValue1 = multiplyInput1.value;
  const multiplyValue2 = multiplyInput2.value;

  const result = multiply(multiplyValue1, multiplyValue2);

  multiplyResult.textContent = result;
});

divideButton.addEventListener("click", () => {
  const divideValue1 = divideInput1.value;
  const divideValue2 = divideInput2.value;

  const result = divide(divideValue1, divideValue2);

  divideResult.textContent = result;
});
