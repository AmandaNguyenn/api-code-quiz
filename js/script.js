let timer;

let time = 75;

//questions array
const questions = [
    {
        question: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        question: "The condition in an if/else statement is enclosed with ____",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "curly brackets"
    },
    {
        question: "Arrays in JavaScript can be used to store ____.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {
        question: "String values must be enclosed within _______ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parentheses"],
        answer: "quotes"
    },
    {
        question: "A very useful tool used during development and debgging for printing content to the debugger is:",
        choices: ["JavaScript", "terminal/bash", "for loops", "console.log"],
        answer: "console.log"
    },
]

//it begins with start btn click
document.querySelector(".takeQuiz").addEventListener("click", function() {
    //hide the start screen
    document.querySelector("#start-screen").classList.add("hide");

    //show the questions contianer
    document.querySelector(".quiz-box").classList.remove("hide");

    //start the timer
    timer = setInterval(function() {
        //time is decreased by 1
        time--;

        //show time on doc
        document.querySelector("#time").textContent = time;

        //end of time end quiz
        if (time <= 0) {
            endQuiz();
        }
    }, 1000);

    //show the the first question
    showQuestion();
});

//function that will generate the next question
let questionindex = 0;
let score = 0;
function showQuestion() {
    //create a question tempalte literal
    const questionTempalte = `
        <div class="question-title">${questions[questionindex].question}</div>
        <div class="choice-container">
            <div class="choice">${questions[questionindex].choices[0]}</div>
            <div class="choice">${questions[questionindex].choices[1]}</div>
            <div class="choice">${questions[questionindex].choices[2]}</div>
            <div class="choice">${questions[questionindex].choices[3]}</div>
        <div>
    `;

    //convert this string of html into html and add to the page
    document.querySelector(".quiz-box").innerHTML = questionTempalte;

    //add event listener to the choice
    const arrayChoices = document.querySelectorAll(".choice");
    for (let i = 0; i < arrayChoices.length; i++) {
        arrayChoices[i].addEventListener("click", function(event) {

            console.log("*****", questions[questionindex]);

            //decided weather the click choice was correct or incorrect
            if (event.target.textContent === questions[questionindex].answer) {
                score++;
            } else {
                time--;
            }

            questionindex++;

            if (questionindex === questions.length) {
                endQuiz();
            } else {
                showQuestion();
            }
        });
    }
};

var playerInitials = document.querySelector('initals')

function renderLastScore() {
    var playerInitials = localStorage.getItem("initials");
}

function endQuiz() {
    //show end screen
    document.querySelector("#end-screen").classList.remove("hide");

    //hide the questions contianer
    document.querySelector(".quiz-box").classList.add("hide");

    //stop timer
    clearInterval(timer);

    //show score
    document.querySelector("#score").textContent = score;
};

    var playerInitials = document.querySelector('initials').value;
//store initials with score and put in local storage
submitButton.addEventListener("click", function() {
    localStorage.setItem("submit", submitButton);
})