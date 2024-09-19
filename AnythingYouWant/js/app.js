// Document elements
// Looks for "text0". Assigns to "textField0".
const textField0= document.getElementById("text0");

const increaseScoreButton= document.getElementById("button0");

// internal variables
let score= 0;

// Process (what is going to happen in what sequence?)
increaseScoreButton.addEventListener("click", () => {
  increaseScoreByOne();
});

function increaseScoreByOne() {
  score++;
  updateScoreText(score);
}

//View
function updateScoreText(newText) {
  textField0.innerHTML= newText;
}
