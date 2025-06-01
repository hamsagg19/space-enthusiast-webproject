const questions = [
    {
        question: "What is the boundary around a black hole from which nothing can escape called?",
        options: ["Event horizon"," Cosmic boundary"," Gravitational point","Singularity zone"],
        
         
        correctAnswer: "Event horizon"
    },
    {
        question: "Which type of black hole is found at the centers of most galaxies, including our own Milky Way?",
        options: ["Stellar black holes", "Intermediate black holes"," Supermassive black holes"," Micro black holes"],
        
        
        correctAnswer: "Supermassive black holes"
    },
    {
        question: "What is the name of the boundary around a black hole’s singularity, where gravitational forces become infinite?",
        options: ["Event horizon"," Cosmic boundary"," Gravitational point","Schwarzschild radius"],
        correctAnswer: "Schwarzschild radius"
    },
    {
        question: " What is the term for the point at the center of a black hole where all its mass is concentrated?",
        options: ["Event horizon"," Cosmic boundary"," Gravitational point","Singularity "],
        correctAnswer: "Singularity "
    },
    {
        question: "What happens to time near a black hole?",
        options: [" Time stands still"," Time speeds up","Time slows down","Time reverses"],
        
        correctAnswer: "Time slows down"
    },
    {
        question: "Who proposed the concept of Hawking radiation, suggesting that black holes can emit radiation due to quantum effects? ",
        options: [" Isaac Newton","Albert Einstein","Stephen Hawking","Carl Sagan"],
       correctAnswer: "Stephen Hawking"
      
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