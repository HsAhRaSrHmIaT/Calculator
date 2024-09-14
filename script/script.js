let currentDisplay = "0";
let fixedDisplay = "";

function onclickNum(num) {
    if (currentDisplay == "0" || currentDisplay.startsWith('-0')) {
        currentDisplay = num;
    } else {
        currentDisplay = currentDisplay + num;
    }
    document.querySelector("#display").value = currentDisplay;
    truncateDigits(document.querySelector("#display"));
    updateFixedDisplay();
}

function onclickOperator(operator) {
    if (currentDisplay.endsWith('+') || currentDisplay.endsWith('-') || currentDisplay.endsWith('*') || currentDisplay.endsWith('/') || currentDisplay.endsWith('%')
        || currentDisplay.endsWith('.')) {
        currentDisplay = currentDisplay.slice(0, -1);
    }
    updateFixedDisplay();
    currentDisplay = currentDisplay + operator;
    document.querySelector("#fixed-display").value = currentDisplay;
    document.querySelector("#display").value = currentDisplay;
    truncateDigits(document.querySelector("#fixed-display"));
}

function truncateDigits(input) {
    if (input.value.length > input.maxLength) {
        input.value = input.value.slice(0, input.maxLength);
    }
}

function eraseLastDigit() {
    if (currentDisplay.length > 1) {
        currentDisplay = currentDisplay.slice(0, -1);
    } else {
        currentDisplay = "0";
    }
    document.querySelector("#display").value = currentDisplay
    document.querySelector("#fixed-display").value = currentDisplay;
}

function evaluateExpression() {
        let expression = currentDisplay;
        let result = eval(expression);
        currentDisplay = result.toString();
        document.querySelector("#fixed-display").value = expression + " =";
        document.querySelector("#display").value = currentDisplay;
    }
function updateFixedDisplay() {
    const displayValue = document.querySelector("#display").value;
    document.querySelector("#fixed-display").value= displayValue;
}

function clearDisplay() {
    document.querySelector("#fixed-display").value = '';
}
