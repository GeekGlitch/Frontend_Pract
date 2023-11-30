const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correctAnswer: "Paris",
  },
  {
    question: "Which programming language is used for web development?",
    options: ["Java", "Python", "HTML", "JavaScript"],
    correctAnswer: "JavaScript",
  },
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    correctAnswer: "4",
  },
  {
    question: "Who painted the Mona Lisa?",
    options: [
      "Vincent van Gogh",
      "Leonardo da Vinci",
      "Pablo Picasso",
      "Michelangelo",
    ],
    correctAnswer: "Leonardo da Vinci",
  },
  {
    question: "What color is the sky on a sunny day?",
    options: ["Blue", "Red", "Yellow", "Green"],
    correctAnswer: "Blue",
  },
  {
    question: "How many legs does a cat have?",
    options: ["Two", "Four", "Six", "Eight"],
    correctAnswer: "Four",
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Jupiter", "Mars", "Neptune", "Uranus"],
    correctAnswer: "Jupiter",
  },
  {
    question: "What is the smallest country in Europe?",
    options: ["Andorra", "Monaco", "San Marino", "Vatican City"],
    correctAnswer: "Andorra",
  },
  {
    question: "What is the highest mountain in the world?",
    options: ["Kilimanjaro", "Mount Everest", "Chimborazo", "Mauna Kea"],
    correctAnswer: "Kilimanjaro",
  },
  {
    question: "What is the capital of Australia?",
    options: ["Canberra", "Brisbane", "Adelaide", "Perth"],
    correctAnswer: "Canberra",
  },
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options-container");
const resultElement = document.getElementById("result");

function loadQuestion() {
  const currentQuizData = quizData[currentQuestion];
  questionElement.textContent = currentQuizData.question;

  optionsContainer.innerHTML = "";
  currentQuizData.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.classList.add("option");
    button.onclick = () => checkAnswer(option);
    optionsContainer.appendChild(button);
  });
}

function checkAnswer(userAnswer) {
  const currentQuizData = quizData[currentQuestion];
  const coorectButtonIndex = currentQuizData.options.indexOf(
    currentQuizData.correctAnswer
  );

  if (userAnswer === currentQuizData.correctAnswer) {
    score++;
    optionsContainer.children[coorectButtonIndex].classList.add("correct");
  }

  if (currentQuestion < quizData.length - 1) {
    currentQuestion++;
    setTimeout(() => {
      loadQuestion();
    }, 1000);
  } else {
    setTimeout(() => {
      showResult();
    }, 1000);
  }
}

function showResult() {
  questionElement.style.display = "none";
  optionsContainer.style.display = "none";
  resultElement.textContent = `You scored ${score} out of ${quizData.length}!`;
}

function nextQuestion() {
  if (currentQuestion < quizData.length - 1) {
    currentQuestion++;
    loadQuestion();
  } else {
    showResult();
  }
}

// Initial load
loadQuestion();
