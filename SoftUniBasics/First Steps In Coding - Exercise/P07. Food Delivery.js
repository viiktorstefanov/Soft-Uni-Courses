function foodDelivery(input) {
let priceChicken = 10.35;
let priceFish = 12.4;
let priceVegan = 8.15;
let priceDelivery = 2.5;

let numChicken = Number(input[0]);
let numFish = Number(input[1]);
let numVegan = Number(input[2]);

let totalPrice = (numChicken * priceChicken) + (numFish * priceFish) + (numVegan * priceVegan);
let priceDesert = totalPrice * 0.2;
let finalPrice = totalPrice + priceDesert + priceDelivery;
console.log(finalPrice)

}
foodDelivery(["2 ",
"4 ",
"3 "]
)