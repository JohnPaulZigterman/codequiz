var timerEl = document.getElementById("timer");
var startbutton = document.getElementById("startbutton");
var question = document.getElementById("question");
var list = document.getElementById('list');
var startzone = document.getElementById('startzone');
var unordered = document.getElementById('unordered');
var scoreview = document.getElementById('scoreview');

var message = document.getElementById('message');
var message2 = document.getElementById('message2');

let answerbtns = document.querySelectorAll('.answerbtn');

var currentQuestionIndex = 0;
var score = 0;
var timeLeft = 30;
var inputname;


var answer1 = document.getElementById('answer1');
var answer2 = document.getElementById('answer2');
var answer3 = document.getElementById('answer3');
var answer4 = document.getElementById('answer4');

var score = 0;

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
        quest: "The condition in an if/else statement is enclosed within:",
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
    {
        quest: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: [
            { text: "Javascript", correct: false},
            { text: "terminal/bash", correct: false},
            { text: "for loops", correct: false},
            { text: "console.log", correct: true},
        ]
    },
];

function countdown() {
  
    var timeInterval = setInterval(function () {
      if (timeLeft > 1) {
        timerEl.textContent = timeLeft + ' seconds remaining';
        timeLeft--;
      } else if (timeLeft === 1) {
        timerEl.textContent = timeLeft + ' second remaining';
        timeLeft--;
      } else if (timeLeft === 0) {
        timerEl.textContent = '0 seconds remaining';
        scoreSheet();
        return;
      } else if (timeLeft < 0) {
        timerEl.textContent = '0 seconds remaining';
        return;
      }
    }, 1000);
  };

function quiz() {
    list.style.visibility = "visible";
    list.classList.add("box");
    questions();
};

function logStats() {
    inputname = document.getElementById('init').value;
    var player = [inputname, score];
    var highscorelist = [];
    if (localStorage.getItem('highscorelist') === null) {
        highscorelist.push(player);
        var highscorestring = JSON.stringify(highscorelist);
        localStorage.setItem('highscorelist', highscorestring);
    } else {
        highscorelist = JSON.parse(localStorage.getItem('highscorelist'));
        highscorelist.push(player);
        var highscorestring = JSON.stringify(highscorelist);
        localStorage.setItem('highscorelist', highscorestring);
    }
}

function displayStats() {
    var displaystring = localStorage.getItem('highscorelist');
    var displaylist = JSON.parse(displaystring);
    list.innerHTML = '<h2>High Scores</h2><h3>' + displaylist + '</h3>';
    
}

function scoreSheet() {
    timeLeft = -1;
    question.textContent = "Test Complete!";
    list.textContent = "You got " + score + " correct!";
    startzone.innerHTML = '<form id="form1"> Initials: <input type="text" id="init"> <br> <input type="button" value="Submit" id="submitbutton"> </form>';
    var submitbutton = document.getElementById('submitbutton');
    submitbutton.addEventListener('click', function() {
        logStats();
        displayStats();
    });
}

function clickEvent() {

    var currentQuestionPlus = currentQuestionIndex + 1;

    var currentQuestion = prompts[currentQuestionIndex];
    if (this.textContent == currentQuestion.answers[0].text && currentQuestion.answers[0].correct == true) {
        message.textContent = "Nailed It!";
        score++;
    } else if (this.textContent == currentQuestion.answers[1].text && currentQuestion.answers[1].correct == true) {
        message.textContent = "Nailed It!";
        score++;
    } else if (this.textContent == currentQuestion.answers[2].text && currentQuestion.answers[2].correct == true) {
        message.textContent = "Nailed It!";
        score++;
    } else if (this.textContent == currentQuestion.answers[3].text && currentQuestion.answers[3].correct == true) {
        message.textContent = "Nailed It!";
        score++;
    } else {
        message.textContent = "Not Quite!";
        timeLeft -= 5;
    }

    if (currentQuestionPlus == prompts.length) {
        scoreSheet();
        return;
    }

    currentQuestionIndex++;
    questions();

}

function questions() {

    let currentQuestion = prompts[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    question.textContent = questionNo + ". " + currentQuestion.quest;
    answer1.textContent = currentQuestion.answers[0].text;
    answer2.textContent = currentQuestion.answers[1].text;
    answer3.textContent = currentQuestion.answers[2].text;
    answer4.textContent = currentQuestion.answers[3].text;


    answerbtns.forEach((item) => {
        item.addEventListener('click', clickEvent);
    });

};


startbutton.addEventListener("click", function(e) {
    e.stopPropagation();
    startzone.removeChild(startbutton);
    countdown();
    quiz();
});

scoreview.addEventListener("click", function() {
    list.style.visibility = "visible";
    list.classList.add("box");
    displayStats();
})