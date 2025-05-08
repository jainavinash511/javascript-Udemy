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

addBtn.addEventListener("click", calculateResult.bind(this, "ADD"));
subtractBtn.addEventListener("click", calculateResult.bind(this, "SUB"));
multiplyBtn.addEventListener("click", calculateResult.bind(this, "MUL"));
divideBtn.addEventListener("click", calculateResult.bind(this, "DIV"));
