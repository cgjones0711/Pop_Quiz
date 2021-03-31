let timeEl = document.querySelector("#countDown");
// let mainEl = document.getElementById("questions");
let currentQuestionIndex= 0
let answers = ["Brady" , "Header" , "URL" ]
let initInput = document.querySelector("#initials")
let enterBtn = document.querySelector("#enter")
let msgDiv = document.querySelector("#msg")
let userSpan = document.querySelector("#userScore")



let secondsLeft = 30;

let score = 0;
setTime();
function setTime() {
  // Sets interval in variable
  let timerInterval = setInterval(function() {
    secondsLeft--;
    countDown.textContent = secondsLeft + " Time Left!";

    if(secondsLeft <= 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      console.log(timer)
      // Call endgame function XXXXX
      gameOver();
      }
  },1000);
}
function gameOver(){
  
  // hide all questions
  for (let i = 0; i < 3; i++) {
    document.getElementById("question"+i).style.display="none";
  }
  // show game over section
    document.getElementById("game_over").style.display="block";

  // insert score into the game over section
    document.getElementById("final_score").innerHTML = score;
   
   

}

function correct(n) {

 
  
  score +=1;
  console.log(score)

  // complete the last question, then go to gameOver function -- not the next question

  if (n === "END") {

    gameOver();

  } else {

    // hide all questions (set display to none)
    for (let i = 0; i < 3; i++) {
      document.getElementById("question"+i).style.display="none";
    }

    // Show question n
    document.getElementById("question"+n).style.display="block";
  }

}

function incorrect() {
  secondsLeft = secondsLeft - 5;
  //secondsLeft -= 5;
}

renderLastRegistered();

function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute("class", type);
}

function renderLastRegistered() {
  let initials = localStorage.getItem("initials");
 
   if (!initials ){
    return;
  }

  userSpan.textContent = initials;
  
}

  enterBtn.addEventListener("click", function(event) {
  event.preventDefault();

  let initials = document.querySelector("#initials").value;
 

  if (initials === "") {
    displayMessage("error", "Come on Bro");
  } 
  else {
    displayMessage("success", "I Got You");

    localStorage.setItem("initials", initials);
    renderLastRegistered();
  }
});


