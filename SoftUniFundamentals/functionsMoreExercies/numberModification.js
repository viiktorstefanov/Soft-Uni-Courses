function numberMod(num) {
let stringNum = num.toString();
let sumOfDigits = 0;
for(let i = 0; i < stringNum.length; i++) {
    let currNum = Number(stringNum[i]);
    sumOfDigits += currNum;
}
let currSumOfDigits = sumOfDigits;
let average = sumOfDigits / stringNum.length;
while(average < 5) {
    stringNum += "9";
    currSumOfDigits += 9;
let currAverage = currSumOfDigits/stringNum.length;
average = currAverage;
}
console.log(stringNum)
}
numberMod(101)