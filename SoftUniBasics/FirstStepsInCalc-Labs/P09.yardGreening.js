function yardGreening(input) {
let metersGreening = Number(input[0]);
let pricePerMeter = 7.61;
let priceWithoutDiscount = pricePerMeter * metersGreening;
let discount = priceWithoutDiscount * 0.18;
let priceWithDiscount = priceWithoutDiscount - (priceWithoutDiscount * 0.18);
console.log(`The final price is: ${priceWithDiscount} lv.`)
console.log(`The discount is: ${discount} lv.`)
}
yardGreening(["550"])