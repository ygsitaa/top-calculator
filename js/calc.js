let inputValue1;
let inputValue2;
let operator;
let result;
let shouldResetInput = false;

const inputNum = document.querySelector("input");
const operatorsBtn = document.querySelectorAll(".operator");
const digitsBtn = document.querySelectorAll(".digit");
const calculBtn = document.querySelector(".calcul");
const clearBtn = document.querySelector(".clear");
const decimalBtn = document.querySelector(".decimal")
const backBtn = document.querySelector(".back");

inputNum.value;

// Le bouton "Clear" reset toutes les valeurs ainsi que la valeur-check shouldResetInput en false.
clearBtn.addEventListener("click", (e) => {
    inputNum.value = null;
    operator = null;
    op = null;
    inputValue1 = null;
    inputValue2 = null;
    result = null;
    shouldResetInput = false;
})

// Le bouton "Back" efface le dernier chiffre de la valeur affichée.
backBtn.addEventListener("click", () => {
    inputNum.value = inputNum.value.slice(0, -1);
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

// Le bouton "Decimal". Contient le même check que digitsBtn comme ca l'utilisateur peut input une décimal en première valeur si il le souhaite. Si la valeur affichée ne contient pas déjà de décimal, l'input est autorisé, sinon : alert.
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

// Les boutons "Operators". Au click d'un opérateur, stock la première valeur du calcul et la transforme en nombre, ainsi que l'opérateur sélectionné.
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

// Le bouton "Calcul". onClick, stock la deuxième valeur du calcul et lance le calcul avec la fonction approprié ci-dessus. Post-calcul, affiche le résultat commme valeur affichée et donne a la valeur-check "true" pour avoir le comportement adéquat.
calculBtn.addEventListener("click", (e) => {
    inputValue2 = Number(inputNum.value);

    console.log(inputValue2);

    calcul();

    inputNum.value = result;
    shouldResetInput = true;

    console.log(e);
})

// Support pour keyboard input
window.addEventListener("keydown", (e) => {
    // Boutons Digits (0-9)
    if (e.key >= "0" && e.key <= "9") { // condition : si le bouton pressé fait parti de la catégorie
        const btn = document.querySelector(`.digit[value="${e.key}"]`); // nouveau selecteur qui get la valeur key
        if (btn) btn.click(); // simuler un mouseclick avec .click() simule aussi tout le code de l'eventListener "click"
    }

    // Bouton Decimal
    if (e.key === ".") {
        decimalBtn.click();
    }

    // Boutons Operators
    if (["+", "-", "/", "*", "x", "X"].includes(e.key)) {
        let op = e.key;
        if (op === "*" || op === "x") op = "X"; // donne la bonne valeur de l'operator pour match la condition originelle
        const btn = document.querySelector(`.operator[value="${op}"]`);
        if (btn) btn.click();
    }

    // Bouton Enter or =
    if (e.key === "Enter" || e.key === "=") {
        calculBtn.click();
    }

    // Bouton Backspace
    if (e.key === "Backspace") {
        backBtn.click();
    }

    // Bouton Clear (Escape or c)
    if (e.key === "Escape" || e.key.toLowerCase() === "c") {
        clearBtn.click();
    }
});

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