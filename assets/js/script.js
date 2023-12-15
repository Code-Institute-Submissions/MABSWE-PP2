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
            { text: "Frozen", correct: false },
            { text: "Moana", correct: false },
        ]
        
    },
    {
        question: "Who played the iconic character Jack Dawson in Titanic?",
        answers: [
            { text: "Leonardo DiCaprio", correct: true },
            { text: "Johnny Depp", correct: false },
            { text: "Brad Pitt", correct: false },
            { text: "Tom Cruise", correct: false },
        ]
    },
    {
        question: "In which film does a young boy go on an adventure with a group of dwarves to reclaim their homeland?",
        answers: [
            { text: "The Hobbit", correct: true },
            { text: "Harry Potter and the Sorcerer's Stone", correct: false },
            { text: "Eragon", correct: false },
            { text: "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe", correct: false },
        ]
    },
    {
        question: "Who directed the movie 'Inception'?",
        answers: [
            { text: "Christopher Nolan", correct: true },
            { text: "Steven Spielberg", correct: false },
            { text: "Quentin Tarantino", correct: false },
            { text: "Martin Scorsese", correct: false },
        ]
    },
    {
        question: "What film tells the story of a clownfish searching for his lost son?",
        answers: [
            { text: "Toy Story", correct: false },
            { text: "Shrek", correct: false },
            { text: "Finding Nemo", correct: true },
            { text: "Madagascar", correct: false },
        ]
    },
    {
        question: "In the movie 'Forrest Gump,' what does Forrest's mother say life is like?",
        answers: [
            { text: "A box of chocolates", correct: true },
            { text: "A roller coaster", correct: false },
            { text: "A puzzle", correct: false },
            { text: "A marathon", correct: false },
        ]
    },
    {
        question: "Which movie features a character named 'Marty McFly' who travels through time?",
        answers: [
            { text: "Timecop", correct: false },
            { text: "Back to the Future", correct: true },
            { text: "Looper", correct: false },
            { text: "Edge of Tomorrow", correct: false },
        ]
    },
    {
        question: "Who played the character of Captain Jack Sparrow in the Pirates of the Caribbean series?",
        answers: [
            { text: "Brad Pitt", correct: false },
            { text: "Johnny Depp", correct: true },
            { text: "Orlando Bloom", correct: false },
            { text: "Tom Hanks", correct: false },
        ]
    },
    {
        question: "What movie is known for the line 'Here's looking at you, kid'?",
        answers: [
            { text: "The Maltese Falcon", correct: false },
            { text: "Casablanca", correct: true },
            { text: "Gone with the Wind", correct: false },
            { text: "The Godfather", correct: false },
        ]
    },
    {
        question: "Who played the lead role in 'The Shawshank Redemption'?",
        answers: [
            { text: "Morgan Freeman", correct: false },
            { text: "Tim Robbins", correct: true },
            { text: "Harrison Ford", correct: false },
            { text: "Kevin Costner", correct: false },
        ]
    },
    {
        question: "In which movie does a fish named Dory suffer from short-term memory loss?",
        answers: [
            { text: "Finding Nemo", correct: true },
            { text: "Shark Tale", correct: false },
            { text: "The Little Mermaid", correct: false },
            { text: "Free Willy", correct: false },
        ]
    },
    {
        question: "What film is about a young wizard named Harry Potter?",
        answers: [
            { text: "The Lord of the Rings", correct: false },
            { text: "Harry Potter and the Chamber of Secrets", correct: true },
            { text: "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe", correct: false },
            { text: "Eragon", correct: false },
        ]
    },
    {
        question: "Who directed the movie 'The Dark Knight'?",
        answers: [
            { text: "J.J. Abrams", correct: false },
            { text: "Zack Snyder", correct: false },
            { text: "Christopher Nolan", correct: true },
            { text: "Michael Bay", correct: false },
        ]
    },
    {
        question: "In the movie 'Toy Story,' what is the name of the cowboy doll?",
        answers: [
            { text: "Woody", correct: true },
            { text: "Buzz Lightyear", correct: false },
            { text: "Rex", correct: false },
            { text: "Mr. Potato Head", correct: false },
        ]
    },
    {
        question: "What film tells the story of a boy who befriends an extraterrestrial creature?",
        answers: [
            { text: "E.T. the Extra-Terrestrial", correct: true },
            { text: "Close Encounters of the Third Kind", correct: false },
            { text: "War of the Worlds", correct: false },
            { text: "Men in Black", correct: false },
        ]
    },
    {
        question: "Who played the character of Katniss Everdeen in 'The Hunger Games' series?",
        answers: [
            { text: "Jennifer Aniston", correct: false },
            { text: "Jennifer Lawrence", correct: true },
            { text: "Emma Stone", correct: false },
            { text: "Scarlett Johansson", correct: false },
        ]
    },
    {
        question: "In which film does a boy named Elliot ride a bicycle with an alien?",
        answers: [
            { text: "E.T. the Extra-Terrestrial", correct: true },
            { text: "Close Encounters of the Third Kind", correct: false },
            { text: "War of the Worlds", correct: false },
            { text: "Men in Black", correct: false },
        ]
    },
    {
        question: "Who played the character of Katniss Everdeen in 'The Hunger Games' series?",
        answers: [
            { text: "Jennifer Aniston", correct: false },
            { text: "Jennifer Lawrence", correct: true },
            { text: "Emma Stone", correct: false },
            { text: "Scarlett Johansson", correct: false },
        ]
    },
    {
        question: "Which movie features a young boy named Kevin who is accidentally left behind by his family during the holidays?",
        answers: [
            { text: "Elf", correct: false },
            { text: "Home Alone", correct: true },
            { text: "Jingle All the Way", correct: false },
            { text: "A Christmas Story", correct: false },
        ]
    }
];

// Get references to HTML elements by their IDs//
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("button_next");
const welcomePage = document.querySelector(".welcome-page");
const startQuizButton = document.getElementById("start-quiz-button");
const usernameInput = document.getElementById("username");
const app = document.querySelector(".app");
const usernameDisplay = document.getElementById("username-display");


// Initialize variables to track quiz state //
let currentQuestionIndex = 0;
let score = 0;


// Function to start the quiz//
function startQuiz() {
    const username = usernameInput.value.trim();

      // Check if a username is entered //
      if (username === "") {
        alert("Please enter your username.");
        return;
    }

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
function selectAnswer(e){

    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
        document.getElementById("correct-sound").play();
    }else{
        selectedBtn.classList.add("incorrect");
        document.getElementById("wrong-sound").play();
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";


}
// Score System //
function showScore(){
    resetState();
    questionElement.innerHTML = `Your Score Is ${score} Out Of ${questions.length}!`;

    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }


});
startQuiz();