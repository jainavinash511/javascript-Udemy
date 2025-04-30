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
}

function calculateResult(calType) {
  const initialVal = currentResult;
  const currentVal = parseInt(userInput.value);
  let mathopp;
  if (currentVal) {
    if (calType === "ADD") {
      currentResult += currentVal;
      mathopp = "+";
    } else if (calType === "SUB") {
      currentResult -= currentVal;
      mathopp = "-";
    } else if (calType === "MUL") {
      currentResult *= currentVal;
      mathopp = "*";
    } else {
      currentResult /= currentVal;
      mathopp = "/";
    }
    CreateAndWriteOutput(mathopp, initialVal, currentVal);
    logger(calType, initialVal, currentVal, currentResult);
  }
}
function add() {
  calculateResult("ADD");
}

function substract() {
  calculateResult("SUB");
}

function multiply() {
  calculateResult("MUL");
}

function divide() {
  calculateResult("DIV");
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", substract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
