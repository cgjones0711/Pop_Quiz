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

//questions 

  {
    question: "Which of the following tag represents a generic document or application section in HTML5?",
    answers: {
      a: "Section",
      b: "article",
      c: "header"
    },
    correctAnswer: "c"
  },
  {
    question: "Which of the following tag represents the header of a section in HTML5?",
    answers: {
      a: "header",
      b: "article",
      c: "aside"
    },
    correctAnswer: "a"
  },
  {
    question: "Which of the following input control is used for input fields that should contain an URL address in Web Form 2.0?",
    answers: {
      a: "number",
      b: "URL",
      c: "RequireJS",
      d: "range"
    },
    correctAnswer: "b"
  }
];






}

//document.createElement