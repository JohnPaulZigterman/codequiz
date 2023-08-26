var timerEl = document.getElementById("timer");
var startbutton = document.getElementById("startbutton");
var question = document.getElementById("question");
var list = document.getElementById('list');
var startzone = document.getElementById('startzone');

var message = document.getElementById('message');


var answer1 = document.getElementById('answer1');
var answer2 = document.getElementById('answer2');
var answer3 = document.getElementById('answer3');
var answer4 = document.getElementById('answer4');

var answerbtns = [document.getElementsByClassName('answerbtn')];

var prompts = [
    {
        quest: "Commonly used data types DO NOT include:",
        answers: [
            { text: "strings", correct: false},
            { text: "booleans", correct: false},
            { text: "alerts", correct: true},
            { text: "numbers", correct: false},
        ]
    },
    {
        quest: "The condition of an if/else statement is enclosed within:",
        answers: [
            { text: "quotes", correct: false},
            { text: "curly brackets", correct: false},
            { text: "parentheses", correct: true},
            { text: "square brackets", correct: false},
        ]
    },
    {
        quest: "Arrays in JavaScript can be used to store:",
        answers: [
            { text: "numbers and strings", correct: false},
            { text: "other arrays", correct: false},
            { text: "booleans", correct: false},
            { text: "all of the above", correct: true},
        ]
    },
    {
        quest: "String values must be enclosed within _____ when being assigned to variables:",
        answers: [
            { text: "commas", correct: false},
            { text: "curly brackets", correct: false},
            { text: "quotes", correct: false},
            { text: "parentheses", correct: true},
        ]
    },
];

function countdown() {
    var timeLeft = 20;
  
    var timeInterval = setInterval(function () {
      if (timeLeft > 1) {
        timerEl.textContent = timeLeft + ' seconds remaining';
        timeLeft--;
      } else if (timeLeft === 1) {
        timerEl.textContent = timeLeft + ' second remaining';
        timeLeft--;
      } else {
        timerEl.textContent = 'Done';
        clearInterval(timeInterval);
      }
    }, 1000);
  };

function quiz() {

    list.style.visibility = "visible";
    list.classList.add("box");
    currentQuestionIndex = 0;
    score = 0;
    questions();
};

function questions() {
    let currentQuestion = prompts[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    question.textContent = questionNo + ". " + currentQuestion.quest;
    answer1.textContent = currentQuestion.answers[0].text;
    answer2.textContent = currentQuestion.answers[1].text;
    answer3.textContent = currentQuestion.answers[2].text;
    answer4.textContent = currentQuestion.answers[3].text;
    
    list.addEventListener('click', (e)=> {
        let target = e.target;
        if(target.classList = "answerbtn") {
            message.textContent = "beef";
        }
    })

};

function showCorrect(x) {
    message.textContent = x;
}



startbutton.addEventListener("click", function() {
    startzone.style.visibility = "hidden";
    countdown();
    quiz();
});

console.log(answerbtns);