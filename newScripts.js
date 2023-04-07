
let operand1 = null;
let operand2 = null;
let operator = null;
let digits = document.querySelectorAll(".digits");
let operators = document.querySelectorAll(".operator");
let currentNumberDisplay = document.querySelector("#current-number-display");
let operatorDisplay = document.querySelector("#operator-display");
let savedNumberDisplay = document.querySelector("#saved-number-display");
let clearButton = document.getElementById("clear-button");
let equalSign = document.getElementById("equals-button");

// Loop through each button and add a click event listener to it
digits.forEach(function(button) {
  button.addEventListener('click', function(event) {
    // Get the text content of the button that was clicked
    let buttonPressed = event.target.textContent;
    // Update the current number display with the button pressed
    currentNumberDisplay.textContent += buttonPressed;
  });
});

operators.forEach(function(button) {
    button.addEventListener('click', function(event) {
      // Get the text content of the button that was clicked
      let buttonPressed = event.target.textContent;
      // Update the operator display with the operator pressed
      operatorDisplay.textContent = buttonPressed;
      // Move the current number display into the saved number display
      operator = buttonPressed;
      operand1 = parseFloat(currentNumberDisplay.textContent)
      savedNumberDisplay.textContent = currentNumberDisplay.textContent;
      currentNumberDisplay.textContent = "";
    });
  });

equalSign.addEventListener("click", function() {
    operand2 = parseFloat(currentNumberDisplay.textContent);
    savedNumberDisplay.textContent = calculate(operand1, operand2, operator);
    operatorDisplay.textContent = "";
    currentNumberDisplay.textContent = "";

})

clearButton.addEventListener("click", function (){
    clearAll();
})

function clearAll () {
    currentNumberDisplay.textContent = "";
    operatorDisplay.textContent = "";
    savedNumberDisplay.textContent = "";
}

function calculate(operand1, operand2, operator) {
    let result;
    switch(operator) {
      case '+':
        result = operand1 + operand2;
        break;
      case '-':
        result = operand1 - operand2;
        break;
      case 'x':
        result = operand1 * operand2;
        break;
      case '÷':
        if(operand2 === 0) {
          result = NaN;
        } else {
          result = operand1 / operand2;
        }
        break;
      default:
        result = NaN;
    }
    return result;
  }