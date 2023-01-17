function fishingBoat(input) {
let budget = Number(input[0]);
let season = input[1];
let numFishers = Number(input[2]);

let price = 0;

if(season == "Spring") {
    price = 3000;
}
else if(season == "Summer" || season == "Autumn") {
    price = 4200;
}
else if(season == "Winter") {
    price = 2600;
}
if(numFishers < 7) {
    price = price - (price * 0.1);
}
else if(numFishers >= 7 && numFishers <= 11) {
    price = price - (price * 0.15);
}
else if(numFishers > 12) {
    price = price - (price * 0.25);
}
if(season != "Autumn" && numFishers % 2 == 0) {
    price = price - (price * 0.05);
}
if(budget >= price) {
    console.log(`Yes! You have ${(budget - price).toFixed(2)} leva left.`)
}
else {
    console.log(`Not enough money! You need ${Math.abs(price - budget).toFixed(2)} leva.`)
}
}
fishingBoat(["3000",
"Summer",
"11"])
