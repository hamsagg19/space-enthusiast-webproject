const questions = [
    {
        question: "Galaxies are classified by their shape.",
        options: ["True","False"],
        correctAnswer: "True"
    },
    {
        question: "The Pinwheel galaxy is a kind of spiral galaxy.",
        options: ["True","False"],
        correctAnswer: "True"
    },
    {
        question: "Irregular galaxies are rare.",
        options: ["True","False"],
        correctAnswer: "True"
    },
    {
        question: " There are about a thousand galaxies in the universe.",
        options: ["True","False"],
        correctAnswer: "False"
    },
    {
        question: "Most galaxies contain only a few dozen stars.",
        options: ["True","False"],
        correctAnswer: "False"
    },
    {
        question: "Individual galaxies can unite. ",
        options: ["True","False"],
        correctAnswer: "True"
    },
    {
        question: " The word galaxy comes from the Greek word for milk. ",
        options: ["True","False"],
        correctAnswer: "True"
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