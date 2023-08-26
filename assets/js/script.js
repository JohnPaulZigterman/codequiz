var timerEl = document.getElementById("timer");
var thebutton = document.getElementById("thebutton");

var i = 0;

function countdown() {
    var timeLeft = 2;
  
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

document.addEventListener('keydown', function (e) {
    var keyPress = e.key;
    
    while (i < answerArray.length){
        
        if (keyPress == answerArray[i]) {
            displayArray[i] = answerArray[i];
            let displayString = displayArray.join("");
            guessField.textContent = displayString;
            i++;
        } else {
            return;
        }
}
});



thebutton.addEventListener("click", function() {
    countdown();
});

