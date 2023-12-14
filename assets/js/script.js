//Questions//

const questions = [
    {
        question: "What is the name of the main character in Finding Nemo?",
        anwsers: [
            { text: "Marlin", correct: false },
            { text: "Dory", correct: false },
            { text: "Nemo", correct: true },
            { text: "Bruce", correct: false },
        ]
    },
    {
        question: "Which movie features the song Hakuna Matata?",
        anwsers: [
            { text: "Aladdin", correct: false },
            { text: "The Lion King", correct: true },
            { text: "Frozen", correct: true },
            { text: "Moana", correct: false },
        ]
    }
];

// Get references to HTML elements by their IDs//
const questionElement = document.getElementById("question");
const anwserButtonsElement = document.getElementById("anwser-buttons");
const buttonNextElement = document.getElementById("button_next");

// Initialize variables to track quiz state //
let currentQuestionIndex = 0;
let score = 0;

// Function to start the quiz//
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
// Displays quiz questions, starting from the first question//

function showQuestion(){
    let currentQuestion = questions[currentQuestionIndex];
    let questNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;

}