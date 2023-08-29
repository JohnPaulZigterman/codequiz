//grabbing html elements and establishing other variables
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

//stores the questions and answers in arrays
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

//starts countdown
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

//begins quiz
function quiz() {
    list.style.visibility = "visible";
    list.classList.add("box");
    questions();
};

//takes player info and stores it to local storage
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

// displays high score list
function displayStats() {
    var displaystring = localStorage.getItem('highscorelist');
    var displaylist = JSON.parse(displaystring);
    list.innerHTML = '<h2>High Scores</h2><h3>' + displaylist + '</h3>';
    
}

//displays score sheet for that test attempt
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

//checks for accuracy of answer, displays message, and increments score
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

//fills in question and answer fields with appropriate data
function questions() {

    let currentQuestion = prompts[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    question.textContent = questionNo + ". " + currentQuestion.quest;
    answer1.textContent = currentQuestion.answers[0].text;
    answer2.textContent = currentQuestion.answers[1].text;
    answer3.textContent = currentQuestion.answers[2].text;
    answer4.textContent = currentQuestion.answers[3].text;

    //event listener for answer buttons
    answerbtns.forEach((item) => {
        item.addEventListener('click', clickEvent);
    });

};

//adds event listener to start button
startbutton.addEventListener("click", function(e) {
    e.stopPropagation();
    startzone.removeChild(startbutton);
    countdown();
    quiz();
});


//adds event listener to view scores
scoreview.addEventListener("click", function() {
    list.style.visibility = "visible";
    list.classList.add("box");
    displayStats();
})