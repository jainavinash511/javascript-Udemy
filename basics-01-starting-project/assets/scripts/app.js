let currentResult = 0;

function add() {
  const initialVal = currentResult;
  const currentVal = parseInt(userInput.value);
  currentResult += currentVal;
  outputResult(currentResult, `${initialVal} + ${currentVal}`);
}

function substract() {
  const initialVal = currentResult;
  const currentVal = parseInt(userInput.value);
  currentResult -= currentVal;
  outputResult(currentResult, `${initialVal} - ${currentVal}`);
}

function multiply() {
  const initialVal = currentResult;
  const currentVal = parseInt(userInput.value);
  currentResult *= currentVal;
  outputResult(currentResult, `${initialVal} * ${currentVal}`);
}

function divide() {
  const initialVal = currentResult;
  const currentVal = parseInt(userInput.value);
  currentResult /= currentVal;
  outputResult(currentResult, `${initialVal} / ${currentVal}`);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", substract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
