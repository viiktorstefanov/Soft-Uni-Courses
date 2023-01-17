function suppliesForSchool(input) {
let numPens = Number(input[0]);
let numMarkers = Number(input[1]);
let litersCleaning = Number(input[2]);
let percentDiscount = Number(input[3]/100);
let pricePen = 5.8;
let priceMarkers = 7.2;
let priceLitersCleaningStuff = 1.2;
let totalPrice = (numPens * pricePen) + (numMarkers * priceMarkers) + (litersCleaning * priceLitersCleaningStuff);
let total = totalPrice - (totalPrice * percentDiscount);
console.log(total)
}
suppliesForSchool(["2 ",
"3 ",
"4 ",
"25 "]
)