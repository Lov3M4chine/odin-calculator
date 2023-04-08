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
let deleteButton = document.getElementById("delete-button");
let memoryDisplay = document.querySelector(".memory-display");
let decimalButton = document.getElementById(".");
const keyMap = {
    "1": "1",
    "2": "2",
    "3": "3",
    "4": "4",
    "5": "5",
    "6": "6",
    "7": "7",
    "8": "8",
    "9": "9",
    "0": "0",
    ".": ".",
    "+": "+",
    "-": "-",
    "*": "x",
    "/": "÷",
    "Enter": "=",
    "Backspace": "delete",
    "Delete": "clear",
  };

  // Add event listener to the window object to listen for key presses
  window.addEventListener("keydown", function(event) {
    const key = event.key;
  
    if (keyMap.hasOwnProperty(key)) {
      event.preventDefault();
      const buttonValue = keyMap[key];
      const button = document.querySelector(`button[data-value="${buttonValue}"]`);
  
      if (button) {
        button.classList.add("active");
        button.click();
      }
    }
  });
  
  window.addEventListener("keyup", function(event) {
    const key = event.key;
  
    if (keyMap.hasOwnProperty(key)) {
      const buttonValue = keyMap[key];
      const button = document.querySelector(`button[data-value="${buttonValue}"]`);
  
      if (button) {
        button.classList.remove("active");
      }
    }
  });
  


// Loop through each button and add a click event listener to it
digits.forEach(function(button) {
  button.addEventListener('click', function(event) {
    // Get the text content of the button that was clicked
    let buttonPressed = event.target.textContent;
    // Update the current number display with the button pressed
    currentNumberDisplay.textContent += buttonPressed;
    enableOperators();
  });
});

decimalButton.addEventListener('click', function() {
    // Check if there's already a decimal point in the current number display
    if (currentNumberDisplay.textContent.includes(".")) {
      // If there is, disable the decimal button
      decimalButton.disabled = true;
    } else {
      // If there isn't, add the decimal point and enable the decimal button
      currentNumberDisplay.textContent += ".";
      decimalButton.disabled = false;
    }
  });

operators.forEach(function(button) {
    button.addEventListener('click', function(event) {
      // Get the text content of the button that was clicked
      let buttonPressed = event.target.textContent;
      // Update the operator display with the operator pressed
      operatorDisplay.textContent = buttonPressed;

      // If this is the first calculation or the previous calculation is complete,
      // use the current number display as the first operand
      if (operand1 === null || operator === null) {
        operand1 = parseFloat(currentNumberDisplay.textContent);
        savedNumberDisplay.textContent = operand1;
      } else {
        // Otherwise, use the result of the previous calculation as the first operand
        operand2 = parseFloat(currentNumberDisplay.textContent);
        operand1 = calculate(operand1, operand2, operator);
        savedNumberDisplay.textContent = operand1;
      }

      // Store the operator for the current calculation
      operator = buttonPressed;

      // Clear the current number display for the next operand
      currentNumberDisplay.textContent = "";
      decimalButton.disabled = false;
      disableOperators();
    });
  });

equalSign.addEventListener("click", function() {
    // Get the second operand from the current number display
    operand2 = parseFloat(currentNumberDisplay.textContent);
    // Calculate the result of the current operation
    let result = calculate(operand1, operand2, operator);
    // Update the saved number display with the result
    savedNumberDisplay.textContent = result;
    // Clear the operator display and the current number display for the next calculation
    operatorDisplay.textContent = "";
    currentNumberDisplay.textContent = "";
    // Use the result as the first operand for the next calculation
    operand1 = result;
    // Clear the second operand and operator to prepare for the next operation
    operand2 = null;
    operator = null;
});

clearButton.addEventListener("click", function (){
    clearAll();
});

deleteButton.addEventListener("click", function() {
    deleteLast();
})

function clearAll () {
    currentNumberDisplay.textContent = "";
    operatorDisplay.textContent = "";
    savedNumberDisplay.textContent = "";
    memoryDisplay.textContent = "";
    operand1 = null;
    operand2 = null;
    operator = null;
    decimalButton.disabled = false;
}

function deleteLast () {
    currentNumberDisplay.textContent = currentNumberDisplay.textContent.substring(0, currentNumberDisplay.textContent.length - 1);
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
            alert("Cannot divide by 0")
          result = NaN;
        } else {
          result = operand1 / operand2;
        }
        break;
      default:
        result = NaN;
    }
    result = Number(result.toFixed(2));
    let equation = operand1 + " " + operator + " " + operand2 + " " + "=" + " " + result;
    memoryDisplay.innerHTML += equation + "<br>";
    memoryDisplay.scrollTop = memoryDisplay.scrollHeight;
    decimalButton.disabled = false;
  return result;
}

function enableOperators() {
  operators.forEach(function(button) {
    button.removeAttribute('disabled');
  });
}

function disableOperators() {
    operators.forEach(function(operatorButton) {
        operatorButton.disabled = true;
    });
}