function mathPower(number, power) {
let resultOfPower = poweredNumber(number,power);
    function poweredNumber(number, power) {
let result = 1;
for(let i = 0; i < power; i++) {
    result *= number;
}
return result;
    }
    
    console.log(resultOfPower)
}
mathPower(2,8)