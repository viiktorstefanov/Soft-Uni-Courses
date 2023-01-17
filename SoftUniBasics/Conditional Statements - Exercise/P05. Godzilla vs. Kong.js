function godzillaVsKong(input) {
let budget = Number(input[0]);
let numStat = Number(input[1]);
let priceCloth = Number(input[2]);
let decor = budget * 0.1;
if(numStat > 150 ){
    priceCloth = priceCloth * 0.9;
}
let total = (numStat * priceCloth) + decor;
if(total > budget) {
console.log("Not enough money!");
console.log(`Wingard needs ${(total - budget).toFixed(2)} leva more.`)
}
else if(total <= budget){
    console.log("Action!");
    console.log(`Wingard starts filming with ${(budget - total).toFixed(2)} leva left.`)
}
}
godzillaVsKong(["9587.88",
"222",
"55.68"])


