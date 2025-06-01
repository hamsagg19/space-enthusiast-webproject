const questions = [
    {
        question: "Which planet is known as the 'Red Planet'?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        correctAnswer: "Mars"
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Earth", "Jupiter", "Saturn", "Uranus"],
        correctAnswer: "Jupiter"
    },
    {
        question: "Which planet has the Great Red Spot?",
        options: ["Jupiter", "Mars", "Venus", "Mercury"],
        correctAnswer: "Jupiter"
    },
    {
        question: " Jupiter, Saturn, Uranus, and Neptune are commonly known as...",
        options: ["The 4 Giants","The Gas Giants","The Beasts","The O.G's"],
        correctAnswer: "The Gas Giants"
    },
    {
        question: "The brightest planet in the sky is...",
        options: ["Jupiter", "Mars", "Venus", "Mercury"],
        correctAnswer: "Venus"
    },
    {
        question: "Which is the planet nearest to the Sun? ",
        options: ["Jupiter", "Mars", "Venus", "Mercury"],
        correctAnswer: "Mercury"
    },
    {
        question: " the coldest planet in our solar system? ",
        options: ["Jupiter", "Mars", "Uranus", "Mercury"],
        correctAnswer: "Uranus"
    },
    {
        question: " Which of these planets has the shortest revolution period?",
        options: ["Jupiter", "Mars", "Venus", "Mercury"],
        correctAnswer: "Mercury"
    },
    {
        question: "Which planet’s natural satellites are Phobos and Deimos?",
        options: ["Jupiter", "Mars", "Venus", "Mercury"],
        correctAnswer: "Mars"
    },
    {
        question: "Which planet is called the morning/evening star? ",
        options: ["Jupiter", "Mars", "Venus", "Mercury"],
        correctAnswer: "Venus"
    },
  
];

let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById("question").textContent = currentQuestion.question;

    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = "";

    currentQuestion.options.forEach((option) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.addEventListener("click", () => checkAnswer(option));
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.correctAnswer) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        displayResult();
    }
}

function displayResult() {
    const resultContainer = document.getElementById("result");
    resultContainer.textContent = `Your Score: ${score} / ${questions.length}`;
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    }
}

// Initial display
displayQuestion();