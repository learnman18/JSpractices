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
    console.log("password - " , password)

    if (!password) { return }
    textArea.value = password;
    document.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    textArea.remove();
    alert("text copied to the clipboard");
})

passwordGenrateEl.addEventListener("click", () => {
    const length = resultLengthEL.value;
    console.log("lenght" , length)
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
    // console.log("inside password generator");
    let generatedPassword = '';
    const typesCount = lower + upper + number + symbol;
    // const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(item => Object.values(item)[0]);
    const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter((item) =>{
        let obj =  Object.values(item)[0];
        console.log("object value", obj);
        return obj;
    } );
    console.log("typesArr" , typesArr);

    if (typesCount === 0) {
        return '';
    }

    for (let i = 0; i < length; i += typesCount) {
        //console.log(typesArr);
        // console.log("value of i : " + i);
        typesArr.forEach(type => {
            generatedPassword += randomFunc.lower();
            generatedPassword += randomFunc.upper();
            generatedPassword += randomFunc.symbols();
            generatedPassword += randomFunc.number();
            console.log("generatedPassword" , generatedPassword);
        })
    }

    const finalPassword = generatedPassword.slice(0, length);
    console.log("finalPassword" , finalPassword)
    return finalPassword;
}


function randomUpperCase() {
    // return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
    let UCase = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    console.log(UCase);
    return UCase;

}

function randomLowerCase() {
    // return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
    let lCase =  String.fromCharCode(Math.floor(Math.random() * 26) + 97)
    console.log(lCase);
    return lCase
}
function randomNumbers() {
    // return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
    let num = String.fromCharCode(Math.floor(Math.random() * 10) + 48);
    console.log(num);
    return num;
}

const symbols = '@$*%!.#&';

function randomSymbols() {
    // return String.fromCharCode(Math.floor(Math.random() * symbols.length) + 33)
    let symb = String.fromCharCode(Math.floor(Math.random() * symbols.length) + 33);
    console.log(symb);
    return symb;

}

console.log(randomSymbols());