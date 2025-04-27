let currentResult = 0;
const logentries = [];

function CreateAndWriteOutput(opp, oldNumber, newNumber) {
  outputResult(currentResult, `${oldNumber} ${opp} ${newNumber}`);
}

function logger(opp, initialVal, currentVal, currentResult) {
  const logEntry = {
    operator: opp,
    prevNum: initialVal,
    newNum: currentVal,
    currentRes: currentResult,
  };
  logentries.push(logEntry);
  console.log(logentries);
}

function add() {
  const initialVal = currentResult;
  const currentVal = parseInt(userInput.value);
  currentResult += currentVal;
  CreateAndWriteOutput("+", initialVal, currentVal);
  logger("ADD", initialVal, currentVal, currentResult);
}

function substract() {
  const initialVal = currentResult;
  const currentVal = parseInt(userInput.value);
  currentResult -= currentVal;
  CreateAndWriteOutput("-", initialVal, currentVal);
  logger("SUB", initialVal, currentVal, currentResult);
}

function multiply() {
  const initialVal = currentResult;
  const currentVal = parseInt(userInput.value);
  currentResult *= currentVal;
  CreateAndWriteOutput("*", initialVal, currentVal);
  logger("MUL", initialVal, currentVal, currentResult);
}

function divide() {
  const initialVal = currentResult;
  const currentVal = parseInt(userInput.value);
  currentResult /= currentVal;
  CreateAndWriteOutput("/", initialVal, currentVal);
  logger("DIV", initialVal, currentVal, currentResult);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", substract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
