function shopping(input) {
let budget = Number(input[0]);
let numVideoCards = Number(input[1]);
let numProcessors = Number(input[2]);
let numRams = Number(input[3]);

let priceVideoCard = 250;
let totalVideCard = numVideoCards * priceVideoCard;
let priceProcessor = totalVideCard * 0.35;
let priceRams = totalVideCard * 0.1;

let total = (numVideoCards * priceVideoCard) + (numProcessors * priceProcessor) + (numRams * priceRams);
if(numVideoCards > numProcessors){
    total = total - (total * 0.15);
}
if(budget >= total){
    console.log(`You have ${(budget - total).toFixed(2)} leva left!`)
}
else {
    console.log(`Not enough money! You need ${Math.abs(total - budget).toFixed(2)} leva more!`)
}
}
shopping(["920.45",
"3",
"1",
"1"])

