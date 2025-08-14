let sum = 0;
let operator;
let num;

function add() {
    return sum += num;
}

function subtract() {
    return sum -= num;
}

function multiply() {
    return sum *= num;
}

function divide() {
    return sum /= num;
}

function operate(sum, operator, num) {
    add(sum, num)
}