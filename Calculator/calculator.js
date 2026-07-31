const displayBox = document.querySelector("#display");
const rowsBtns = document.querySelectorAll("section");
const allBtns = document.querySelectorAll("button");

allBtns.forEach((button) => {
  button.addEventListener("click", () => {

    const text = button.textContent.trim();

    if (text === "AC") {
      // 1. CLEAR: Empty the screen.
      displayBox.value = "";
      
    } else if (text === "C") {
      // 2. CLEAR/BACKSPACE: Delete the last character
      if (displayBox.value === "Error") {
        // If the screen says "Error", clear the whole thing instead of leaving "Erro"
        displayBox.value = "";
      } else {
        // Chop off the last character
        displayBox.value = displayBox.value.slice(0, -1);
      }

    } else if (text === "=") {
      // 2. CALCULATE: Do the math, but DO NOT add "=" to the screen.
      try {
        let mathExpression = displayBox.value.replace(/×/g, "*").replace(/÷/g, "/");
        displayBox.value = eval(mathExpression);
      } catch (error) {
        displayBox.value = "Error";
      }
      
    } else {
      // 3. APPEND: Only add numbers and operators (+, -, *, /) to the screen.
      displayBox.value += text;
    }
  
  })
})

