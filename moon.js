const questions = [
    {
        question: "How far is the moon from the Earth?",
        options: ["184,400","284,400","384,400","484,400"],
        correctAnswer: "384,400"
    },
    {
        question: "NASA is planning a manned lunar landing in 2025. What is the name of the spacecraft which will take the crew to the moon?",
        options: ["Apollo 18","Hercules 1","  Hermes 5","Artemis 3"],
        
      
        
        correctAnswer: "Artemis 3"
    },
    {
        question: "Triton is our solar system’s…",
        options: ["Largest moon"," Driest moon","oldest moon"," Least dense moon"],
       
        
        correctAnswer: "Largest moon"
    },
    {
        question: " Saturn’s largest moon Titan has a water cycle very similar to Earth’s, only instead of H20, Titan’s cycle runs on….",
        options: ["Nitrogen","Methane"," Argon"," Mercury"],
        
       
       
        correctAnswer: "Methane"
    },
    {
        question: "What moon phase comes after the New Moon?",
        options: ["Waxing crescent","Waning crescent "," Waxing gibbous","Waning gibbous"],
        
       
     
        correctAnswer: "Waning crescent"
    },
    {
        question: "How many times larger is the sun than the moon? ",
        options: ["200times", "400times", "1000times", "2000times"],
        correctAnswer: "400times"
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