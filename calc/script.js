let displayText = "0";

function appendToDisplay(value) {
  if (displayText === "0") {
    displayText = value;
  } else {
    displayText += value;
  }
  updateDisplay();
}

function updateDisplay() {
  const display = document.getElementById("result");
  display.textContent = displayText;
}

function clearDisplay() {
  displayText = "0";
  updateDisplay();
}

function calculateResult() {
  try {
    displayText = eval(displayText).toString();
  } catch (error) {
    displayText = "Error";
  }
  updateDisplay();
}

updateDisplay();
