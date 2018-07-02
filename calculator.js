const sum = document.querySelector("#sum");
const subtraction = document.querySelector("#subtraction");
const divide = document.querySelector("#divide");
const multiply = document.querySelector("#multiply");
const modus = document.querySelector("#modus");
const clear = document.querySelector("#clear");
const buttons = document.querySelectorAll("button");

// sum.addEventListener("click", () => {
//     const firstNumber = Number(document.querySelector("#firstNumber").value);
//     const secondNumber = Number(document.querySelector("#secondNumber").value);
//     const sumResult = firstNumber + secondNumber;
//     alert(sumResult);
// });

// subtraction.addEventListener("click", () => {
//     const firstNumber = Number(document.querySelector("#firstNumber").value);
//     const secondNumber = Number(document.querySelector("#secondNumber").value);
//     const subtractionResult = firstNumber - secondNumber;
//     alert(subtractionResult);
// });

// divide.addEventListener("click", () => {
//     const firstNumber = Number(document.querySelector("#firstNumber").value);
//     const secondNumber = Number(document.querySelector("#secondNumber").value);
//     const divideResult = firstNumber / secondNumber;
//     alert(divideResult);
// });

// multiply.addEventListener("click", () => {
//     const firstNumber = Number(document.querySelector("#firstNumber").value);
//     const secondNumber = Number(document.querySelector("#secondNumber").value);
//     const multiplyResult = firstNumber * secondNumber;
//     alert(multiplyResult);
// });

// modus.addEventListener("click", () => {
//     const firstNumber = Number(document.querySelector("#firstNumber").value);
//     const secondNumber = Number(document.querySelector("#secondNumber").value);
//     const modusResult = firstNumber % secondNumber;
//     alert(modusResult);
// });

// clear.addEventListener("click", () => {
//     document.querySelector("#firstNumber").value = 0;
//     document.querySelector("#secondNumber").value = 0;
// })

buttons.forEach( button => {
    button.addEventListener("click", e =>{
        calc(e.target.id);
    })
})

function calc(action){
    const firstNumber = Number(document.querySelector("#firstNumber").value);
    const secondNumber = Number(document.querySelector("#secondNumber").value);
    switch(action){
        case 'sum' :
            const sumResult = firstNumber + secondNumber;
            alert(sumResult);
            break;
        case 'subtraction':
            const subtractionResult = firstNumber - secondNumber;
            alert(subtractionResult);
            break;
        case 'divide':
            const divideResult = firstNumber / secondNumber;
            alert(divideResult);
            break;
        case 'multiply':
            const multiplyResult = firstNumber * secondNumber;
            alert(multiplyResult);
            break;
        case 'modus':
            const modusResult = firstNumber % secondNumber;
            alert(modusResult);
            break;
        case 'clear':
            document.querySelector("#firstNumber").value = 0;
            document.querySelector("#secondNumber").value = 0;
            break;
    }
}