function depositCalculator(input) {
let depositAmount = Number(input[0]);
let termOfDeposit = Number(input[1]);
let yearInterestRate = Number(input[2]/ 100);
let total = depositAmount + termOfDeposit * ((depositAmount * yearInterestRate)/12);
console.log(total)
}
depositCalculator(["200 ",
"3 ",
"5.7 "]
)