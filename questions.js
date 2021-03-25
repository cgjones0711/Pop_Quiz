let timeEl = document.querySelector("#countDown");
let mainEl = document.getElementById("questions");
let currentQuestionIndex= 0
let answers = ["Brady" , "Header" , "URL" ]
let quest1= document.querySelector("#question0")
let quest2 = document.querySelector("#question1")
let quest3 = document.querySelector("question2")

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

  // n is the number for the next question
  // increase the score ???
  score +=1;
  console.log(score)

  // If we just completed the last question, then go to gameOver function -- not the next question

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


      
      





















  

