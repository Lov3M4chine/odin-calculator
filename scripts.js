let num1 = 0;
let num2 = 0;
let currentButtonClicked = "";
let digits = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '.']
const memoryDisplay = document.querySelector('.memory-display');
const currentInputDisplay = document.querySelector('.current-input-display');
const buttonIDs = ['7', '8', '9', 'divide-button', '4', '5', '6', +
'multiply-button', '1', '2', '3', 'minus-button', '.', '0', 'equals-button', 'plus-button', 'clear-button', 'delete-button'];


//store the buttons with their respective IDs into an object
function automateGetElementByID (buttonIDs) {
    const buttons = {};
    buttonIDs.forEach((ID) => {
        buttons[ID] = document.getElementById('${ID}');
    });
    return buttons;
}

buttons['7'].addEventListener('click', function() {
    currentButtonClicked = '7';
});

buttons['8'].addEventListener('click', function() {
    currentButtonClicked = '8';
});

buttons['9'].addEventListener('click', function() {
    currentButtonClicked = '9';
});

buttons['divide-button'].addEventListener('click', function() {
    currentButtonClicked = 'divide-button';
});

buttons['4'].addEventListener('click', function() {
    currentButtonClicked = '4';
});

buttons['5'].addEventListener('click', function() {
    currentButtonClicked = '5';
});

buttons['6'].addEventListener('click', function() {
    currentButtonClicked = '6';
});

buttons['multiply-button'].addEventListener('click', function() {
    currentButtonClicked = 'multiply-button';
});

buttons['1'].addEventListener('click', function() {
    currentButtonClicked = '1';
});

buttons['2'].addEventListener('click', function() {
    currentButtonClicked = '2';
});

buttons['3'].addEventListener('click', function() {
    currentButtonClicked = '3';
});

buttons['minus-button'].addEventListener('click', function() {
    currentButtonClicked = 'minus-button';
});

buttons['.'].addEventListener('click', function() {
    currentButtonClicked = '.';
});

buttons['0'].addEventListener('click', function() {
    currentButtonClicked = '0';
});

buttons['equals-button'].addEventListener('click', function() {
    currentButtonClicked = 'equals-button';
});

buttons['plus-button'].addEventListener('click', function() {
    currentButtonClicked = 'plus-button';
});

buttons['clear-button'].addEventListener('click', function() {
    currentButtonClicked = 'clear-button';
});

buttons['delete-button'].addEventListener('click', function() {
    currentButtonClicked = 'delete-button';
});

//on first button press sequence, store number into num1

function storeNumber () {
    if (!mainButtons.includes(currentButtonClicked)) {
        num1 += parseInt(currentButtonClicked)
    }
}

//end first button press sequence when operation is pressed
//begin second button press sequence, store number into num2
//end second button press sequence when operation is pressed or equal sign is pressed

//addition function
function operationAddition {
    return num1 + num2;
}
//subtraction function
function operationSubtration {
    return num1 - num2;
}
//multiplication function
function operationMultiplication {
    return num1 * num2;
}
//division function
function operationDivision {
    return num1 / num2;
}
//save to memory function
