function oddAndEvenSum (number) {
let numberToString = number.toString();
let even = 0;
let odd = 0;
for(let i = 0; i < numberToString.length; i++) {
    if(numberToString[i] % 2 === 0 ) {
        even += Number(numberToString[i]);
    }
    else {
        odd += Number(numberToString[i]);
    }
}
console.log(`Odd sum = ${odd}, Even sum = ${even}`)
}
oddAndEvenSum(1000435)