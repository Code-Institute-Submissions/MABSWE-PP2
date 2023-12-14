//Questions//

const questions = [
    {
        question: "What is the name of the main character in Finding Nemo?",
        answers: [
            { text: "Marlin", correct: false},
            { text: "Dory", correct: false},
            { text: "Nemo", correct: true},
            { text: "Bruce", correct: false},
        ]
    },
    {
        question: "Which movie features the song Hakuna Matata?",
        answers: [
            { text: "Aladdin", correct: false },
            { text: "The Lion King", correct: true },
            { text: "Frozen", correct: true },
            { text: "Moana", correct: false },
        ]
    }
];

// Get references to HTML elements by their IDs//
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("button_next");

// Initialize variables to track quiz state //
let currentQuestionIndex = 0;
let score = 0;

// Function to start the quiz//
function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
// Displays quiz questions, starting from the first question//

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

// Create and display buttons for answer options //
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("button");
        answerButtons.appendChild(button);
        
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);

    });

}

// Resets the state by hiding the "Next" button and removing answer buttons //
function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}


startQuiz();