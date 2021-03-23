let timeEl = document.querySelector("#countDown");
let mainEl = document.getElementById("#main");




let secondsLeft = 45;
let gameOver = 0;
setTime();
function setTime() {
  // Sets interval in variable
  let timerInterval = setInterval(function() {
    secondsLeft--;
    countDown.textContent = secondsLeft + " Time Left!";

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      
      
    }

},1000);







}
