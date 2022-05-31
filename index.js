const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'What is the name of Han Solo’s ship?',
    answers: [
      { text: 'Millennium Falcon', correct: true },
      { text: 'Star Destroyer', correct: false },
      { text: 'X Wing', correct: false },
      { text: 'Tie Fighter', correct: false }
    ]
  },
  {
    question: 'The young Jedi Knight, Anakin Skywalker, becomes who in Star Wars?',
    answers: [
      { text: 'Padawan', correct: false },
      { text: 'Darth Vader', correct: true },
      { text: 'Obi One', correct: false },
      { text: 'Palpatine', correct: false }
    ]
  },
  {
    question: 'The X-wing fighter has how many engines?',
    answers: [
      { text: 'Four', correct: true },
      { text: 'Two', correct: false },
      { text: 'Eight', correct: false },
      { text: 'Six', correct: false }
    ]
  },
  {
    question: 'Jedi Council consists of how many members?',
    answers: [
      { text: '10', correct: false },
      { text: '12', correct: true }
    ]
  },
  {
    question: 'Trivia Question: How many languages is C-3P0 fluent in?',
    answers: [
      { text: 'Over 6 Million', correct: true },
      { text: 'under 6 Million', correct: false }
    ]
  },
  {
    question: 'What was the name of the planet that the clones were made on?',
    answers: [
      { text: 'Mustafar', correct: false },
      { text: 'Kamino', correct: true }
    ]
  },
  {
    question: 'What is the name of Boba Fett’s ship?',
    answers: [
      { text: 'Slave 1', correct: true },
      { text: 'A/SF-01 B-Wing', correct: false }
    ]
  },
  {
    question: 'Who killed Han Solo?',
    answers: [
      { text: 'Luke', correct: false },
      { text: 'Kylo', correct: true },
      { text: 'Leia', correct: false },
      { text: 'Darth Vader', correct: false }
    ]
  },
  {
    question: 'Who built C-3P0?',
    answers: [
      { text: 'Anakin Skywalker', correct: true },
      { text: 'Han Solo', correct: false }
    ]
  },
  {
    question: 'Who is Jango Fett’s son?',
    answers: [
      { text: 'Boba', correct: true },
      { text: 'Jango Junior', correct: false }
    ]
  },
]