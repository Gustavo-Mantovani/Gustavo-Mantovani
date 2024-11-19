let display = document.getElementById('display');

function clearDisplay() {
    display.value = '';
}

function appendToDisplay(value) {
    display.value += value;
}

function calculate() {
    try {
        // Replace certain functions with JavaScript math functions
        let expression = display.value;
        expression = expression.replace(/sin/g, 'Math.sin');
        expression = expression.replace(/cos/g, 'Math.cos');
        expression = expression.replace(/tan/g, 'Math.tan');
        expression = expression.replace(/sqrt/g, 'Math.sqrt');
        expression = expression.replace(/log/g, 'Math.log');
        expression = expression.replace(/exp/g, 'Math.exp');
        expression = expression.replace(/pow/g, 'Math.pow');

        // Evaluate the expression
        display.value = eval(expression);
    } catch (error) {
        display.value = 'Erro';
    }
}
