const questions = [
    {
        question: "How many stars are there in the Milky way?",
        options: ["400 million","30 million","200 million"],
        correctAnswer: "200 million"
    },
    {
        question: "which color of the star is the hottest?",
        options: ["Blue","white","yellow"],
        correctAnswer: "Blue"
    },
    {
        question: "Which is the coldest star of the sun ?",
        options: ["Sirius","Mercury","Proxima Centauri"],
        correctAnswer: "Proxima Centauri"
    },
    {
        question: "which is our home galaxy called?",
        options: ["","the solar system","the milky way"],
        correctAnswer: "the milky way"
    },
    {
        question: "What are stars mainly made of?",
        options: ["rock","hot gas","hot liquid"],
        correctAnswer: "hot gas"
    },
    {
        question: "what is the biggest type of star ?",
        options: ["red giant","white dwarf","super giant"],
        correctAnswer: "super giant"
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