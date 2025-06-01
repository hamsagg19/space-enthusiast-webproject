const questions = [
    {
        question: "What happened after a large meteorite hit Earth 66 million years ago?  ",
        options: ["global warming","dinasaurs went extinct","neanderthals went extinct"],
        correctAnswer: "dinasaurs went extinct"
    },
    {
        question: "Where do most comets come from?",
        options: ["saturn's orbit", "Andromeda Galaxy", "oort cloud"],
        correctAnswer: "oort cloud"
    },
    {
        question: "What’s the name of the first known meteorite that came from Mars?",
        options: ["Hoba Meteorite", "Nakhla Meteorite", "Chelyabinsk Meteorite"],
        correctAnswer: "Nakhla Meteorite"
    },
    {
        question: " What do we call a space rock that reached Earth's surface?.",
        options: ["meteor","comet","meteorite"],
        correctAnswer: "meteorite"
    },
    {
        question: "What object has never been landed on",
        options: ["Asteroid", "Comet", "Meteor"],
        correctAnswer: "Meteor"
    },
    {
        question: "Which astronomical object is sometimes called a dirty snowball ",
        options: ["Asteroid", "Comet", "Meteor"],
        correctAnswer: "Comet"
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