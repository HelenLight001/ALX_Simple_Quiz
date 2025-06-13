const submitAnswer = document.getElementById("submit-answer");
function checkAnswer() {
  const correctAnswer = "4";
  const selectedAnswer = document.querySelector('input[name="quiz"]:checked');

  const userAnswer = selectedAnswer.value;

  if (userAnswer === correctAnswer) {
    document.getElementById("feedback").textContent = "Correct! Well done.";
  } else {
    document.getElementById("feedback").textContent =
      "That's incorrect. Try again!";
  }
}

submitAnswer.addEventListener("click", checkAnswer);
