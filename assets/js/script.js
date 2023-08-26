var timerEl = document.getElementById("timer");
var startbutton = document.getElementById("startbutton");
var question = document.getElementById("question");
var list = document.getElementById('list');

var qs = 1;

var i = 0;

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
  }

function quiz1() {

    list.innerHTML = '<ul><li><button id="answer1">Answer 1</button></li><li><button id="answer2">Answer 2</button></li><li><button id="answer3">Answer 3</button></li><li><button id="answer4">Answer 4</button></li></ul>';
    list.style.visibility = "visible";
    list.classList.add("box");
    var answer1 = document.getElementById('answer1');
    var answer2 = document.getElementById('answer2');
    var answer3 = document.getElementById('answer3');
    var answer4 = document.getElementById('answer4');
    question.textContent = "Commonly used data types DO NOT include:";
    answer1.textContent = "strings";
    answer2.textContent = "booleans";
    answer3.textContent = "alerts";
    answer4.textContent = "numbers";
}

startbutton.addEventListener("click", function() {
    countdown();
    quiz1();
});

