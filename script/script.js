let currentDisplay = "0";
let fixedDisplay = ""; 

function onclickNum(num) {
  if (currentDisplay === "0" || currentDisplay === "-0") {
    currentDisplay = num;
  } else {
    currentDisplay += num;
  }
  document.querySelector("#display").value = currentDisplay;
  truncateDigits(document.querySelector("#display"));
  updateFixedDisplay();
}

function onclickOperator(operator) {
  if (
    currentDisplay.endsWith("+") ||
    currentDisplay.endsWith("-") ||
    currentDisplay.endsWith("*") ||
    currentDisplay.endsWith("/") ||
    currentDisplay.endsWith("%") ||
    currentDisplay.endsWith(".")
  ) {
    currentDisplay = currentDisplay.slice(0, -1);
  }
  currentDisplay += operator; 
  document.querySelector("#fixed-display").value = currentDisplay;
  truncateDigits(document.querySelector("#display"));
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
  document.querySelector("#display").value = currentDisplay;
  document.querySelector("#fixed-display").value = currentDisplay;
}

function evaluateExpression() {
  let expression = currentDisplay;

  if (expression.includes("%")) {
    expression = expression.replace(/(\d+)%/g, (match, p1) => {
      return (parseFloat(p1) / 100).toString();
    });
  }

  try {
    let result = eval(expression);
    currentDisplay = result.toString();
    document.querySelector("#fixed-display").value = expression + " =";
    document.querySelector("#display").value = currentDisplay;
  } catch (error) {
    currentDisplay = "Error";
    document.querySelector("#display").value = currentDisplay;
  }
}

function updateFixedDisplay() {
  const displayValue = document.querySelector("#display").value;
  document.querySelector("#fixed-display").value = displayValue;
}

function clearDisplay() {
  currentDisplay = "0";
  document.querySelector("#display").value = currentDisplay;
  document.querySelector("#fixed-display").value = "";
}
