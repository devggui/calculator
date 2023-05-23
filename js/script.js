const theme1 = document.getElementById('theme1')
const theme2 = document.getElementById('theme2')
const theme3 = document.getElementById('theme3')

const body = document.getElementById('body')

theme1.addEventListener('change', toggleTheme)
theme2.addEventListener('change', toggleTheme)
theme3.addEventListener('change', toggleTheme)

function toggleTheme() {
  if(theme1.checked) {
    body.classList.add('theme-1')
    body.classList.remove('theme-2')
    body.classList.remove('theme-3')
  } else if(theme2.checked) {
    body.classList.remove('theme-1')
    body.classList.add('theme-2')
    body.classList.remove('theme-3')
  } else {
    body.classList.remove('theme-1')
    body.classList.remove('theme-2')
    body.classList.add('theme-3')
  }
}

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
