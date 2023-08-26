var timerEl = document.getElementById("timer");
var thebutton = document.getElementById("thebutton");
var question = document.getElementById("question");

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

function quiz() {
    question.textContent = "Commonly used data types DO NOT include:";
    
}

thebutton.addEventListener("click", function() {
    countdown();
    quiz();
});

