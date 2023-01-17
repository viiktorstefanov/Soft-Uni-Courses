function accountBalance(input) {
let index = 0;
let sum = 0;
let income = (input[index]);
let trans ;

while(income !== "NoMoreMoney") {
    income = input[index];
    trans = input[index];
    if(trans == "NoMoreMoney") {
        break;
    }
income = Number(input[index]);
if(income < 0) {
    console.log("Invalid operation!");
    break;
}
index++;
sum +=income;
console.log(`Increase: ${income.toFixed(2)}`)

}
console.log(`Total: ${sum.toFixed(2)}`);
}
accountBalance(["5.51", 
"69.42",
"100",
"NoMoreMoney"])
