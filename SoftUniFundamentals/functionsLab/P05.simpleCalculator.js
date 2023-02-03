function calculator (firstNum, secondNum, operator) {

    let multiplyNumbers = (firstNum, secondNum, operator) => 
           sum = firstNum * secondNum;


    let divideNumbers = (firstNum, secondNum, operator) => 
           sum = firstNum / secondNum;


    let addNumbers = (firstNum, secondNum, operator) =>
           sum = firstNum + secondNum;

let  subtractNumbers = (firstNum, secondNum, operator) =>
           sum = firstNum - secondNum;

let multiply = multiplyNumbers(firstNum, secondNum, operator);
let divide = divideNumbers(firstNum, secondNum, operator);
let add = addNumbers(firstNum, secondNum, operator);
let subtract = subtractNumbers(firstNum, secondNum, operator);

if(operator === "multiply") {
    console.log(multiply);
}
else if(operator === "divide" ) {
    console.log(divide);
}
else if (operator === "add") {
    console.log(add);
}
else {
    console.log(subtract);
}
}
calculator(5,
    5,
    'multiply'
    )