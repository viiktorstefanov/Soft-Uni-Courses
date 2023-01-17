function toyShop(input){
let priceVacation = Number(input[0]);
let numPuzzle = Number(input[1]);
let numDolls = Number(input[2]);
let numBears = Number(input[3]);
let numMinions = Number(input[4]);
let numTrucks = Number(input[5]);

let pricePuzzle = 2.6;
let priceDolls = 3;
let priceBears = 4.1;
let priceMinions = 8.2
let priceTrucks = 2;

let totalPrice = (numPuzzle * pricePuzzle) + (numDolls * priceDolls) 
+ (numBears * priceBears) + (numMinions * priceMinions) + (numTrucks * priceTrucks);
let numToys = numPuzzle + numDolls + numBears + numMinions + numTrucks;
if(numToys >= 50){
    totalPrice = totalPrice - (totalPrice * 0.25);
}
totalPrice = totalPrice - (totalPrice * 0.1);
if(totalPrice >= priceVacation){
    console.log(`Yes! ${(totalPrice - priceVacation).toFixed(2)} lv left.`);
}
else {
    console.log(`Not enough money! ${Math.abs(priceVacation - totalPrice).toFixed(2)} lv needed.`);
}
}
toyShop(["40.8",
"20",
"25",
"30",
"50",
"10"])
