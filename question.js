let startButton = document.querySelector("#start");
let timeEl = document.querySelector("#countDown");
let mainEl = document.getElementById("#main");




var secondsLeft = 10;
var gameOver = 0;
setTime();
function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    countDown.textContent = secondsLeft + " Time Left!";

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      
      
    }

//Start Game
function startGame() {
  isWin = false;
  countDown = 10;
  // Prevents start button from being clicked when round is in progress
  startButton.disabled = true;
  renderBlanks()
  startTimer()
}

   
},1000);

//questions 





}

//document.createElement