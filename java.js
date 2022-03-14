let inputText = document.createElement('div')
let answerText = document.createElement('div')
const input = document.getElementById('output')
const answer = document.getElementById('result')

inputText.textContent = ''
input.appendChild(inputText)

answerText.textContent = ''
answer.appendChild(answerText)

let activeOperator = ''

let numberButtons = document.querySelectorAll('.number')
numberButtons.forEach(numberButton => numberButton.addEventListener('click', function(e) {
  inputText.textContent = inputText.textContent + this.textContent
}));
window.addEventListener('keydown', function(e) {
  const numberButtonKey = document.querySelector(`.number[data-key="${e.keyCode}"]`)
  inputText.textContent = inputText.textContent + numberButtonKey.textContent
})


let operatorButtons = document.querySelectorAll('.operator')
operatorButtons.forEach(operatorButton => operatorButton.addEventListener('click', function(e) {
  if (inputText.textContent !== '' && answerText.textContent !== '' && activeOperator === 'plus') {
    answerText.textContent = Number(answerText.textContent) + Number(inputText.textContent)
  } else if (inputText.textContent !== '' && answerText.textContent !== '' && activeOperator === 'minus') {
    answerText.textContent = Number(answerText.textContent) - Number(inputText.textContent)
  } else if (inputText.textContent !== '' && answerText.textContent !== '' && activeOperator === 'times') {
    answerText.textContent = Number(answerText.textContent) * Number(inputText.textContent)
  } else if (inputText.textContent !== '' && answerText.textContent !== '' && activeOperator === 'divided') {
    answerText.textContent = Number(inputText.textContent) / Number(answerText.textContent)
  } else if (inputText.textContent !== '' && answerText.textContent === '') {
    answerText.textContent = inputText.textContent
  }
  if(this.id === 'addition') {
    activeOperator = 'plus'
  } else if (this.id === 'subtraction') {
    activeOperator = 'minus'
  } else if (this.id === 'multiplication') {
    activeOperator = 'times'
  } else if (this.id === 'division') {
    activeOperator = 'divided'
  }
  clearInput()
}))

function clearInput() {
  inputText.textContent = ''
}
function clearAnswer() {
  answerText.textContent = ''
}
function fullClear() {
  clearInput()
  clearAnswer()
  activeOperator = ''
}

const clearButton = document.getElementById('clear')
clearButton.addEventListener('click', fullClear)

const calculateButton = document.getElementById('equals')
calculateButton.addEventListener('click', function(e) {
  if(activeOperator === 'plus') {
    answerText.textContent = Number(answerText.textContent) + Number(inputText.textContent)
  } else if(activeOperator === 'minus') {
    answerText.textContent = Number(answerText.textContent) - Number(inputText.textContent) 
  } else if(activeOperator === 'times') {
    answerText.textContent = Number(answerText.textContent) * Number(inputText.textContent)
  } else if(activeOperator === 'divided') {
    answerText.textContent = Number(answerText.textContent) / Number(inputText.textContent)
  }
  activeOperator = ''
  clearInput()
})