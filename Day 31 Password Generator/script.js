var resultsEl = document.getElementById("result");
var clipBoard = document.getElementById("clipBoard-btn");
var resultLengthEL = document.getElementById("password-length");
var uppercaseEl = document.getElementById("uppercase-option");
var lowercaseEl = document.getElementById("lowercase-option");
var numberEl = document.getElementById("number-option");
var symbolEL = document.getElementById("symbol-option");
var passwordGenrateEl = document.getElementById("password-generate");

const randomFunc = {
    lower: randomLowerCase,
    upper: randomUpperCase,
    number: randomNumbers,
    symbols: randomSymbols
}

clipBoard.addEventListener("click", () => {
    const textArea = document.createElement("textarea");
    const password = resultsEl.innerText;

    if (!password) { return }
    textArea.value = password;
    document.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    textArea.remove();
    alert("text copird to the clipboard");
})

passwordGenrateEl.addEventListener("click", () => {
    const length = resultLengthEL.value;
    const hasLower = lowercaseEl.checked;
    const hasUpper = uppercaseEl.checked;
    const hasNumber = numberEl.checked;
    const hasSymbol = symbolEL.checked;

    resultsEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length)
    //this is the function calling along with the parameters

})

//the parameters should be in order to get the required output in same format.
// generatePassword is a function name
// generatePassword is a block level vairable name
function generatePassword(lower, upper, number, symbol, length) {
    let generatedPassword = '';
    const typesCount = lower + upper + number + symbol;
    const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(item => Object.values(item)[0]);

    if (typesCount === 0) {
        return '';
    }

    for (let i = 0; i < length; i += typesCount) {
        //console.log(typesArr);
        // console.log("value of i : " + i);
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0];
            generatedPassword += randomFunc[funcName];
        })
    }

    const finalPassword = generatedPassword.slice(0, length);
    return finalPassword;
}


function randomUpperCase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function randomLowerCase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}
function randomNumbers() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

const symbols = '@$*%!.#&';

function randomSymbols() {
    return String.fromCharCode(Math.floor(Math.random() * symbols.length) + 33)
}

console.log(randomSymbols());