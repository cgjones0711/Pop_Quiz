let startButton = document.querySelector("#start");
let timeEl = document.querySelector(".countDown");
let mainEl = document.getElementById("main");


var secondsLeft = 10;
setTime();
function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    countDown.textContent = secondsLeft + " Game Over!";

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      sendMessage();
    }

  
},1000);






}

//document.createElement