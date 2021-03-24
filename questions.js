let timeEl = document.querySelector("#countDown");
let mainEl = document.getElementById("questions");
let currentQuestionIndex= 0
let answers = ["Brady" , "Header" , "URL" ]
let quest2 = document.querySelector("#question2")
let quest3 = document.querySelector("question3")
var carousel = document.querySelector(".carouselbox")




let secondsLeft = 30;
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

//questions

mainEl.addEventListener('click', function(event) {
  var element = event.target;
  
  if (element.matches("button")) {
   //if (answers[currentQuestionIndex] === element.innerText ) {
     ///display.element
      //increment current question index and hide previous question
    // }
    // else {
  }
    if  (answers[currentQuestionIndex] !== element.innerText ) {
      secondsLeft = secondsLeft -5
      // secondsLeft -=5
    }
    // after question is answer hide current question and add next question and increment currentQuestionIndex
    let currentQuestionEl=document.getElementById("question" + currentQuestionIndex)
    let nextQuestionEl=document.getElementById("question"+(currentQuestionIndex+1));
    // hide the current question element unhide the next question and incrememnt currentquestionindex
    function navigate(direction) {
      currentQuestionEl = currentQuestionEl + direction;
      // if (currentQuestionEl < 0) { 
      //   index = nextQuestionEl - 1; 
      // } else if (currentQuestionEl> nextQuestionEl - 1) { 
      //   currentQuestionEl= 0;
      // }
     
    }
    
    
})
