function repainting(input) {
let amountNylonMeters = Number(input[0]);
let amountLitersPaint = Number(input[1]);
let amountLitersThinner = Number(input[2]);
let timeTillJobDone = Number(input[3]);
let priceNylon = 1.5;
let pricePaint = 14.5;
let priceThinner = 5;
let totalPriceNylon = (amountNylonMeters + 2) * priceNylon;
let totalPricePaint = (amountLitersPaint +(amountLitersPaint * 0.1)) * pricePaint;
let totalPriceThinner = amountLitersThinner * priceThinner;
let priceBag = 0.4;
let totalPrice = totalPriceNylon + totalPricePaint + totalPriceThinner + priceBag;
let workersPrice = totalPrice * 0.3
let finalPrice = totalPrice + (workersPrice * timeTillJobDone);
console.log(finalPrice)
}
repainting(["10 ",
"11 ",
"4 ",
"8 "]
)