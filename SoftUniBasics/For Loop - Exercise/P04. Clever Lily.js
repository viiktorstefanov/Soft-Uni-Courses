function cleverLilly(input) {
let n = Number(input[0]);
let toy = 0;
let money = 0;
let moneyCount = 0;

for(i = 1; i<= n ;i++) {
if(i % 2 === 1) {
    toy++;
}
else {
        money+= i * 5;
        money-=1;
}
}
let priceToy = Number(input[2]);
let priceWashMachine = Number(input[1]);
let total = money + (toy * priceToy)
if(total >= priceWashMachine) {
    console.log(`Yes! ${(total - priceWashMachine).toFixed(2)}`)
}
else {
    console.log(`No! ${(priceWashMachine - total).toFixed(2)}`)
}
}
cleverLilly(["21",
"1570.98",
"3"])

