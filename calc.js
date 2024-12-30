function operate(operator, firstNumber, secondNumber) {
  let result;
  if (operator === "+") {
    result = add(firstNumber, secondNumber);
  } else if (operator === "-") {
    result = subtract(firstNumber, secondNumber);
  } else if (operator === "*") {
    result = multiply(firstNumber, secondNumber);
  }
  else if (operator === "/") {
    result = divide(firstNumber, secondNumber);
  }
  return result;
}

function add(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}
function subtract(firstNumber, secondNumber) {
  return firstNumber - secondNumber;
}
function multiply(firstNumber, secondNumber) {
  return firstNumber * secondNumber;
}

function divide(firstNumber, secondNumber) {
  if (secondNumber === 0) {
    return `Error: Can't divide by zero`;
  }
  return firstNumber / secondNumber;
}
const lastDisp = document.querySelector("#lastOperationDisplay");
const currentDisp = document.querySelector("#currentOperationDisplay");

const digits = document.querySelectorAll(".digit");
digits.forEach(digit => digit.addEventListener("click", e => {
  currentDisp.textContent += `${digit.textContent}`;
}));

const operators = document.querySelectorAll(".operator");
operators.forEach(operator => operator.addEventListener("click", e => {
  let lastCharIndex = currentDisp.textContent.length - 1;
  let lastChar = currentDisp.textContent[lastCharIndex];
  const ops = ["+", "-", "/", "*"];

  if (ops.includes(lastChar)) {
    currentDisp.textContent = currentDisp.textContent.slice(0, lastCharIndex);
    currentDisp.textContent += `${operator.textContent}`;
  } else {
    currentDisp.textContent += `${operator.textContent}`;
  }
}));

const clearBtn = document.querySelector(".clear-btn");
clearBtn.addEventListener("click", e => {
  currentDisp.textContent = ``;
});

const delBtn = document.querySelector(".del-btn");
delBtn.addEventListener("click", e => {
  let lastCharIndex = currentDisp.textContent.length - 1;
  currentDisp.textContent = currentDisp.textContent.slice(0, lastCharIndex);
})

const equalsBtn = document.querySelector("#equals");
equalsBtn.addEventListener("click", e => {
  const arithmetic = currentDisp.textContent.trim();
  const match = arithmetic.match(/^\s*(-?\d+(\.\d+)?)\s*([-+*/])\s*(-?\d+(\.\d+)?)\s*$/);

  if (match) {
    const firstNumber = parseFloat(match[1]); // Convert to number
    const operator = match[3];               // Operator
    const secondNumber = parseFloat(match[4]); // Convert to number

    // Perform the operation
    const result = operate(operator, firstNumber, secondNumber);

    // Update displays
    lastDisp.textContent = arithmetic;
    currentDisp.textContent = parseFloat(result.toFixed(5));
  } else {
    console.error("Invalid input:", arithmetic);
    currentDisp.textContent = "Error: Invalid input";
  }
});

