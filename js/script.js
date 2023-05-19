let result = document.getElementById('result');

function appendCharacter(character) {
  result.value += character;
}

function clearResult() {
  result.value = '';
}

function deleteLastCharacter() {
  result.value = result.value.slice(0, -1);
}

function calculate() {
  try {
    const expression = result.value;
    const calculatedResult = eval(expression);
    result.value = calculatedResult;
  } catch (error) {
    result.value = 'Error';
  }
}
