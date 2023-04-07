let num1;
let num2;
let currentNum = [];
let calculatedNum;
let currentOperator;
let currentButtonClicked = "";
let currentTextDisplay = [];
const digits = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '.']
let memoryDisplay = document.querySelector('.memory-display');
let currentNumberDisplay = document.querySelector('.current-number');
let operationSignDisplay = document.querySelector('.operation-sign');
let savedNumberDisplay = document.querySelector('.saved-number');
const buttonIDs = ['7', '8', '9', 'divide-button', '4', '5', '6', 'multiply-button', '1', '2', '3', 'minus-button', '.', '0', 'equals-button', 'plus-button', 'clear-button', 'delete-button'];
const operatorSymbols = {
    '+': '+',
    '-': '-',
    '*': '×',
    '/': '÷'
  };

//store the buttons with their respective IDs into an object
function automateGetElementByID (buttonIDs) {
    const buttons = {};
    buttonIDs.forEach((ID) => {
        buttons[ID] = document.getElementById(ID);
    });
    return buttons;
}

const buttons = automateGetElementByID(buttonIDs);

buttons['7'].addEventListener('click', function() {
    currentButtonClicked = '7';
    captureNum();
    convertToCurrentNumberDisplay();
});

buttons['8'].addEventListener('click', function() {
    currentButtonClicked = '8';
    captureNum();
    convertToCurrentNumberDisplay();
});

buttons['9'].addEventListener('click', function() {
    currentButtonClicked = '9';
    captureNum();
    convertToCurrentNumberDisplay();
});

buttons['divide-button'].addEventListener('click', function() {
    currentButtonClicked = 'divide-button';
    currentOperator = "/";
    captureOperation();
    if (num1 === null) {
      convertToOperatorDisplay()
      convertToSavedNumberDisplay();
      saveToNumOne(true); // overwrite num1
      convertToCurrentNumberDisplay();
    } else {
      saveToNumOne(false); // add to num1
      convertToSavedNumberDisplay();
      calculateNum();
      saveCalculatedNumber();
    }
});

buttons['4'].addEventListener('click', function() {
    currentButtonClicked = '4';
    captureNum();
    convertToCurrentNumberDisplay();
});

buttons['5'].addEventListener('click', function() {
    currentButtonClicked = '5';
    captureNum();
    convertToCurrentNumberDisplay();
});

buttons['6'].addEventListener('click', function() {
    currentButtonClicked = '6';
    captureNum();
    convertToCurrentNumberDisplay();
});

buttons['multiply-button'].addEventListener('click', function() {
    currentButtonClicked = 'multiply-button';
    currentOperator = "*";
    captureOperation();
    if (num1 === null) {
        convertToOperatorDisplay()
        convertToSavedNumberDisplay();
        saveToNumOne(true); // overwrite num1
        convertToCurrentNumberDisplay();
      } else {
        saveToNumOne(false); // add to num1
        convertToSavedNumberDisplay();
        calculateNum();
        saveCalculatedNumber();
      }
});

buttons['1'].addEventListener('click', function() {
    currentButtonClicked = '1';
    captureNum();
    convertToCurrentNumberDisplay();
});

buttons['2'].addEventListener('click', function() {
    currentButtonClicked = '2';
    captureNum();
    convertToCurrentNumberDisplay();
});

buttons['3'].addEventListener('click', function() {
    currentButtonClicked = '3';
    captureNum();
    convertToCurrentNumberDisplay();
});

buttons['minus-button'].addEventListener('click', function() {
    currentButtonClicked = 'minus-button';
    currentOperator = "-";
    captureOperation();
    if (num1 === null) {
        convertToOperatorDisplay()
        convertToSavedNumberDisplay();
        saveToNumOne(true); // overwrite num1
        convertToCurrentNumberDisplay();
      } else {
        saveToNumOne(false); // add to num1
        convertToSavedNumberDisplay();
        calculateNum();
        saveCalculatedNumber();
      }
});

buttons['.'].addEventListener('click', function() {
    currentButtonClicked = '.';
    captureNum();
    convertToCurrentNumberDisplay();
});

buttons['0'].addEventListener('click', function() {
    currentButtonClicked = '0';
    captureNum();
    convertToCurrentNumberDisplay();
});

buttons['equals-button'].addEventListener('click', function() {
    currentButtonClicked = 'equals-button';
    saveToNumTwo();
    calculateNum();
    num1 = null;
});

buttons['plus-button'].addEventListener('click', function() {
    currentButtonClicked = 'plus-button';
    currentOperator = "+";
    captureOperation();
    if (num1 === null) {
        convertToOperatorDisplay()
        convertToSavedNumberDisplay();
        saveToNumOne(true); // overwrite num1
        convertToCurrentNumberDisplay();
      } else {
        saveToNumOne(false); // add to num1
        convertToSavedNumberDisplay();
        calculateNum();
        saveCalculatedNumber();
      }
});

buttons['clear-button'].addEventListener('click', function() {
    currentButtonClicked = 'clear-button';
    clearAll();
});

buttons['delete-button'].addEventListener('click', function() {
    currentButtonClicked = 'delete-button';
});

//on first button press sequence, store number into num1

function captureNum () {
    const button = buttons[currentButtonClicked];
    const buttonText = button.textContent;
    currentNum.push(buttonText);
    currentTextDisplay.push(buttonText);
}

function captureOperation () {
    const symbol = operatorSymbols[currentOperator];
    if (currentNum.length > 0) {
        currentTextDisplay.push(currentNum.join(""));
        currentNum = [];
    }
    currentTextDisplay.push(symbol);
}

function convertToCurrentNumberDisplay () {
    let textString = currentTextDisplay.join("");
    textString = textString.replace(/[+x-÷]/g, "");
    currentNumberDisplay.textContent = textString
}

function convertToSavedNumberDisplay () {
    let textString = currentTextDisplay.join("");
    textString = textString.replace(/[+x-÷]/g, "");
    savedNumberDisplay.textContent = textString;
}

function convertToOperatorDisplay () {
    const symbol = operatorSymbols[currentOperator];
    operationSignDisplay.textContent = symbol;
}

function saveToNumOne(overwrite) {
    if (overwrite) {
        num1 = parseFloat(currentNum);
    } else {
        num1 += parseFloat(currentNum);
    }
    if (isNaN(num1)) {
        num1 = 0;
    }
    currentNum = [];
    currentTextDisplay = [];
}

function saveToNumTwo () {
    num2 = parseFloat(currentNum);
    currentNum = [];
    currentTextDisplay = [];
}

function saveCalculatedNumber () {
    savedNumberDisplay.textContent = calculatedNum;
    num1 = calculatedNum;
    currentNum = [];
    currentTextDisplay = [];
    currentNumberDisplay.textContent = "";
}

function calculateNum () {
    switch (currentOperator) {
        case '+':
            calculatedNum = num1 + num2;
        break;
        case '-':
             calculatedNum = num1 - num2;
        break;
        case '*':
            calculatedNum = num1 * num2;
        break;
        case '/':
            if (num2 === 0) {
            alert("Error: Cannot divide by zero!")
            calculatedNum = null;
            } else {
            calculatedNum = num1 / num2;
            }
        break;
        default:
            calculatedNum = NaN;
    }
    num1 = null;
    num2 = null;
  }
  
    function clearAll () {
        console.log("Clearing all...");
      num1 = null;
      num2 = null;
      currentNum = [];
      calculatedNum = null;
      currentOperator = null;
      currentButtonClicked = "";
      currentNumberDisplay.textContent = "";
      savedNumberDisplay.textContent = "";
      operationSignDisplay.textContent = "";
      currentTextDisplay = [];
      console.log("Done clearing all.")
  }

//   function deleteLast () {
//     currentNum.pop();
//   }

//end first button press sequence when operation is pressed
//begin second button press sequence, store number into num2
//end second button press sequence when operation is pressed or equal sign is pressed
//save to memory function


