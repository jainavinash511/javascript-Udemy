let currentResult = 0;

function CreateAndWriteOutput(opp, oldNumber, newNumber) {
  outputResult(currentResult, `${oldNumber} ${opp} ${newNumber}`);
}

function add() {
  const initialVal = currentResult;
  const currentVal = parseInt(userInput.value);
  currentResult += currentVal;
  CreateAndWriteOutput("+", initialVal, currentVal);
}

function substract() {
  const initialVal = currentResult;
  const currentVal = parseInt(userInput.value);
  currentResult -= currentVal;
  CreateAndWriteOutput("-", initialVal, currentVal);
}

function multiply() {
  const initialVal = currentResult;
  const currentVal = parseInt(userInput.value);
  currentResult *= currentVal;
  CreateAndWriteOutput("*", initialVal, currentVal);
}

function divide() {
  const initialVal = currentResult;
  const currentVal = parseInt(userInput.value);
  currentResult /= currentVal;
  CreateAndWriteOutput("/", initialVal, currentVal);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", substract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
