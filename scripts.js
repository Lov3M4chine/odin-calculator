let num1;
let num2;
let currentNum = [];
let calculatedNum;
let currentOperator;
let currentButtonClicked = "";
let digits = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '.']
const memoryDisplay = document.querySelector('.memory-display');
const currentInputDisplay = document.querySelector('.current-input-display');
const buttonIDs = ['7', '8', '9', 'divide-button', '4', '5', '6', 'multiply-button', '1', '2', '3', 'minus-button', '.', '0', 'equals-button', 'plus-button', 'clear-button', 'delete-button'];

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
});

buttons['8'].addEventListener('click', function() {
    currentButtonClicked = '8';
    captureNum();
});

buttons['9'].addEventListener('click', function() {
    currentButtonClicked = '9';
    captureNum();
});

buttons['divide-button'].addEventListener('click', function() {
    currentButtonClicked = 'divide-button';
    currentOperator = "/";
    if (num1 === null) {
        saveToNumOne();
    }
    else if (num2 === null) {
        saveToNumTwo();
        calculateNum();
    } 
});

buttons['4'].addEventListener('click', function() {
    currentButtonClicked = '4';
    captureNum();
});

buttons['5'].addEventListener('click', function() {
    currentButtonClicked = '5';
    captureNum();
});

buttons['6'].addEventListener('click', function() {
    currentButtonClicked = '6';
    captureNum();
});

buttons['multiply-button'].addEventListener('click', function() {
    currentButtonClicked = 'multiply-button';
    currentOperator = "*";
    if (num1 === null) {
        saveToNumOne();
    }
    else if (num2 === null) {
        saveToNumTwo();
        calculateNum();
    } 
});

buttons['1'].addEventListener('click', function() {
    currentButtonClicked = '1';
    captureNum();
});

buttons['2'].addEventListener('click', function() {
    currentButtonClicked = '2';
    captureNum();
});

buttons['3'].addEventListener('click', function() {
    currentButtonClicked = '3';
    captureNum();
});

buttons['minus-button'].addEventListener('click', function() {
    currentButtonClicked = 'minus-button';
    currentOperator = "-";
    if (num1 === null) {
        saveToNumOne();
    }
    else if (num2 === null) {
        saveToNumTwo();
        calculateNum();
    } 
});

buttons['.'].addEventListener('click', function() {
    currentButtonClicked = '.';
    captureNum();
});

buttons['0'].addEventListener('click', function() {
    currentButtonClicked = '0';
    captureNum();
});

buttons['equals-button'].addEventListener('click', function() {
    currentButtonClicked = 'equals-button';
    saveToNumTwo();
    num1 = null;
});

buttons['plus-button'].addEventListener('click', function() {
    currentButtonClicked = 'plus-button';
    currentOperator = "+";
    if (num1 === null) {
        saveToNumOne();
    }
    else if (num2 === null) {
        saveToNumTwo();
        calculateNum();
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
    currentNum.push(currentButtonClicked);
    const numString = currentNum.join('');
    const num = parseFloat(numString);
    currentInputDisplay.textContent = num;
}

function saveToNumOne () {
    num1 = parseFloat(currentNum);
    currentNum = [];
}

function saveToNumTwo () {
    num2 = parseFloat(currentNum);
    currentNum = [];
}

function calculateNum () {
    switch (currentOperator) {
      case '+':
        num1 = num1 + num2;
        break;
      case '-':
        num1 = num1 - num2;
        break;
      case '*':
        num1 = num1 * num2;
        break;
      case '/':
        num1 = num1 / num2;
        break;
      default:
        num1 = NaN;
    }
    num2 = null;
    return num1;
  }

  function clearAll () {
    num1 = null;
    num2 = null;
    currentNum = [];
    calculatedNum = null;
    currentOperator = null;
    currentButtonClicked = "";
    currentInputDisplay.textContent = "";
  }

//   function deleteLast () {
//     currentNum.pop();
//   }

//end first button press sequence when operation is pressed
//begin second button press sequence, store number into num2
//end second button press sequence when operation is pressed or equal sign is pressed
//save to memory function


