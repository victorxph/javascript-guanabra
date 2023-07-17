let displayValue = "";

function appendToDisplay(val) {
    displayValue += val;
    updateDisplay();
}

function clearDisplay() {
    displayValue = "";
    updateDisplay();
}

function calculate() {
    try {
        const result = eval(displayValue);
        displayValue = result.toString();
        updateDisplay();
    } catch (error) {
        displayValue = "Error";
        updateDisplay();
    }
}

function updateDisplay() {
    const display = document.getElementById("display");
    display.value = displayValue;
}
