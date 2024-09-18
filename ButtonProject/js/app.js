
// const text = document.getElementById('text');
// text.innerText = "newText";

// const button0= document.getElementById('button0');
// button0.addEventListener('click', () => {increaseBy(1);});

let score= 0;

function increaseBy(inputNumber) {
  score += inputNumber;
}
function updateScore() {
  const scoreDisplay = document.getElementById('score-display');
  scoreDisplay.textContent = score;
}

document.getElementById('increase-btn').addEventListener('click', function() {
  increaseBy(1);
  updateScore();
});

