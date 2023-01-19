const numberBtns = document.querySelectorAll("#number");
const opBtns = document.querySelectorAll("#operator");
const equalBtn = document.querySelector("#equal");
const clearBtn = document.querySelector("#clear");
let prevNumDisp = document.querySelector(".previousnumber");
let currNumDisp = document.querySelector(".currentnumber");
let previousValue = "";
let currentValue = "";
let operator = "";

numberBtns.forEach((button) =>
  button.addEventListener("click", (button) => {
    handleNumber(button.target.textContent);
  })
);

function handleNumber(num) {
  if (currentValue.length <= 5) {
    currentValue += num;
    currNumDisp.textContent = currentValue;
  }
}

opBtns.forEach((button) =>
  button.addEventListener("click", (button) => {
    handleOperators(button.target.textContent);
  })
);

function handleOperators(op) {
  operator = op;
  if (prevNumDisp.textContent === "") {
    previousValue = currentValue;
    currentValue = "";
    prevNumDisp.textContent = previousValue + " " + op;
    currNumDisp.textContent = currentValue;
  } else {
    prevNumDisp.textContent = previousValue + " " + op;
    currentValue = "";
    currNumDisp.textContent = currentValue;
  }
}

equalBtn.addEventListener("click", () => {
  equal();
});

function equal() {
  previousValue = Number(previousValue);
  currentValue = Number(currentValue);

  switch (operator) {
    case "+":
      previousValue += currentValue;
      break;
    case "-":
      previousValue -= currentValue;
      break;
    case "*":
      previousValue *= currentValue;
      break;
    case "/":
      previousValue /= currentValue;
      break;
  }

  currNumDisp.textContent = previousValue.toString();
}

clearBtn.addEventListener("click", () => {
  erase();
});

function erase() {
  currentValue = "";
  previousValue = "";
  currNumDisp.textContent = currentValue;
  prevNumDisp.textContent = previousValue;
}
