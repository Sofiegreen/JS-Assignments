// Document elements
// Looks for "text0". Assigns to "textField0".
const textField0= document.getElementById("text0");

const increaseScoreButton= document.getElementById("button0");

// internal variables
let score= 0;


// Process (what is going to happen in what sequence?)
increaseScoreButton.addEventListener("click", () => {
  increaseScoreByOne();
  updateScoreText();
  checkScoreForSeven();
});

function increaseScoreByOne() {
  score++;
}

function checkScoreForSeven() {
  if (score >= 7) {
    changeScoreTextColorToGreen()
  }
}

//View
function updateScoreText() {
  textField0.innerHTML= "Your score is: " + score;
}

function changeScoreTextColorToGreen(){
  textField0.style.color= "green"
}
