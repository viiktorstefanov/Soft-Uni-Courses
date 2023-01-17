function sumOfTwoNumber(input) {
let magic = Number(input[2]);
let start = Number(input[0]);
let end = Number(input[1]);
let count = 0;
let magicNumber = 0;
let num1 = 0;
let num2 = 0;
for(let i =start ; i<= end ; i++) {
    num1 = i;
    for (let k = start ; k<= end; k++) {
        count++;
       num2 = k;
        if(i + k == magic) {
            magicNumber = i + k;
            break;
        }
        
    }
    if(magicNumber == magic) {
        break;
    }
}
if(magicNumber != magic)
{
    console.log(`${count} combinations - neither equals ${magic}`)
    return;
}
console.log(`Combination N:${count} (${num1} + ${num2} = ${magic})`)
}
sumOfTwoNumber(["23",
"24",
"20"])

