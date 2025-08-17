let inputValue1;
let inputValue2;
let operator;
let result;
let shouldResetInput = false;

const inputNum = document.querySelector("input");
const operatorsBtn = document.querySelectorAll(".operators button");
const digitsBtn = document.querySelectorAll(".digit");
const calculBtn = document.querySelector(".calcul");
const clearBtn = document.querySelector(".clear");
const decimalBtn = document.querySelector(".decimal")

inputNum.value;

// Le bouton "Clear" reset toutes les valeurs ainsi que la valeur-check shouldResetInput en false.
clearBtn.addEventListener("click", (e) => {
    inputNum.value = null;
    operator = null;
    inputValue1 = null;
    inputValue2 = null;
    result = null;
    shouldResetInput = false;
})

// Les boutons "Digits". Contient un check avec shouldResetInput : si un calcul a déjà été fait (true), vide la valeur affichée et reset la valeur-check. Sinon, comportement normal.
for (let i = 0; i < digitsBtn.length; i++) {
    digitsBtn[i].addEventListener("click", (e) => {
        if (shouldResetInput === true) {
            inputNum.value = "";
            shouldResetInput = false;
        }
        inputNum.value += digitsBtn[i].value;
        console.log(e);
    })
}

// Le bouton "decimal". Si la valeur affichée ne contient pas déjà de décimal, l'input est autorisé, sinon : alert.
decimalBtn.addEventListener("click", (e) => {
    if (shouldResetInput === true) {
            inputNum.value = "";
            shouldResetInput = false;
    }

    if (!inputNum.value.includes(".")) {
        inputNum.value += ".";
    } else {
        alert("You can't add multiple decimals !");
    }  
})

// Les boutons "operators". Au click d'un opérateur, stock la première valeur du calcul et la transforme en nombre, ainsi que l'opérateur sélectionné.
for (let i = 0; i < operatorsBtn.length; i++) {
        operatorsBtn[i].addEventListener("click", (e) => {
            inputValue1 = Number(inputNum.value);

            inputNum.value = null;

            operator = operatorsBtn[i].value;

            console.log(e);
            console.log(inputValue1);
            console.log(operator);
        })
    }

function calcul () {
    if (operator === "+") {
        add();
    } else if (operator === "-") {
        subtract();
    } else if (operator === "X") {
        multiply();
    } else if (operator === "/") {
        divide();
    }
}

// Le bouton "calcul". onClick, stock la deuxième valeur du calcul et lance le calcul avec la fonction approprié ci-dessus. Post-calcul, affiche le résultat commme valeur affichée et donne a la valeur-check "true" pour avoir le comportement adéquat.
calculBtn.addEventListener("click", (e) => {
    inputValue2 = Number(inputNum.value);

    console.log(inputValue2);

    calcul();

    inputNum.value = result;
    shouldResetInput = true;

    console.log(e);
})

function add() {
    result = (inputValue1 + inputValue2);
    console.log(result);
}

function subtract() {
    result = (inputValue1 - inputValue2);
    console.log(result);
}

function multiply() {
    result = (inputValue1 * inputValue2);
    console.log(result);
}

function divide() {
    if (inputValue2 === 0) {
        alert("You just tried dividing by 0, are you all right !?")
    } else {
        result = (inputValue1 / inputValue2);
    }
    
    console.log(result);
}