let calculationResult = document.getElementById("calculation-result");

function add(number1, number2) {
  return number1 + number2;
}

function subtraction(number1, number2) {
  return number1 - number2;
}

function multiplication(number1, number2) {
  return number1 * number2;
}

function division(number1, number2) {
  return number2 !== 0 ? number1 / number2 : "Cannot divide by zero";
}

function getInputs() {
  const number1 = parseFloat(document.getElementById("number1").value) || 0;
  const number2 = parseFloat(document.getElementById("number2").value) || 0;
  return [number1, number2];
}

document.getElementById("add").addEventListener("click", function () {
  const [number1, number2] = getInputs();
  calculationResult.textContent = add(number1, number2);
});

document.getElementById("subtract").addEventListener("click", function () {
  const [number1, number2] = getInputs();
  calculationResult.textContent = subtraction(number1, number2);
});

document.getElementById("multiply").addEventListener("click", function () {
  const [number1, number2] = getInputs();
  calculationResult.textContent = multiplication(number1, number2);
});

document.getElementById("divide").addEventListener("click", function () {
  const [number1, number2] = getInputs();
  calculationResult.textContent = division(number1, number2);
});
