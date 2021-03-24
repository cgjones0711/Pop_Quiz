let timeEl = document.querySelector("#countDown");
let mainEl = document.getElementById("questions");
let quest1 = document.querySelector("Brady");
let quest2= document.getElementById("Header");
let quest3= document.getElementById("URL");
let currentQuestionIndex= 0
let answers = ["Brady" , "Header" , "URL" ]





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
      //increment current question index and hide previous question
    // }
    // else {
      // if answer is false decrement the timer by 5 seconds 

    
    //}
    if  (answers[currentQuestionIndex] !== element.innerText ) {
      secondsLeft = secondsLeft -5
      // secondsLeft -=5
    }
    // after question is answer hide current question and add next question and increment currentQuestionIndex
    let currentQuestionEl=document.getElementById("question" + currentQuestionIndex)
    let nextQuestionEl=document.getElementById("question"+(currentquestionIndex+1))
    // hide the current question element unhide the next question and incrememnt currentquestionindex
  }
})

