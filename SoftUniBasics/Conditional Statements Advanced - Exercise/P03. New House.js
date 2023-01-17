function newHouse(input) {
let flower = input[0];
let numFlower = Number(input[1]);
let budget = Number(input[2]);
let price = 0;
let total = 0;

if(flower == "Roses") {
    price = 5;
}
else if (flower == "Dahlias") {
    price = 3.8;
}
else if(flower == "Tulips") {
    price = 2.8;
}
else if(flower == "Narcissus") {
    price = 3;
}
else if(flower == "Gladiolus") {
    price = 2.5;
}
total = numFlower * price;

if(flower == "Narcissus" && numFlower < 120) {
    total = total + (total * 0.15);
}
if(flower == "Gladiolus" && numFlower < 80) {
    total = total + (total * 0.2);
}
if(flower == "Roses" && numFlower > 80) {
    total = total - (total * 0.1);
}
if(flower == "Dahlias" && numFlower > 90) {
    total = total - (total * 0.15);
}
if(flower == "Tulips" && numFlower > 80) {
    total = total - (total * 0.15);
}
let neededMoney = total - budget;
if(budget >= total) {
    console.log(`Hey, you have a great garden with ${numFlower} ${flower} and ${(budget - total).toFixed(2)} leva left.`)
}
else {
    console.log(`Not enough money, you need ${neededMoney.toFixed(2)} leva more.`)
}
}
newHouse(["Narcissus",
"119",
"360"])

