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
  currentDisp.textContent += `${operator.textContent}`;
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
  const arithmetic = currentDisp.textContent;
  const match = arithmetic.match(/^(\d+)([-+*/])(\d+)$/);

  if (match) {
    const firstNumber = parseFloat(match[1]);
    const operator = match[2];
    const secondNumber = parseFloat(match[3]);

    const result = operate(operator, firstNumber, secondNumber);

    lastDisp.textContent = arithmetic;
    currentDisp.textContent = result;
  } else {
    currentDisp.textContent = "Error: Invalid input"; // Handle invalid input
  }
});
