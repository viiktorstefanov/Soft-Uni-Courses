function journey(input) {
let budget = Number(input[0]);
let season = input[1];
let type ;
let destination ;
let price = 0;

if(season == "summer") {
    type = "Camp"
}
else if(season == "winter") {
    type = "Hotel"
}
if(budget <= 100) {
    destination = "Bulgaria";
    if(season == "summer") {
     price = budget * 0.3;
    }
    else if(season == "winter") {
        price = budget * 0.7;
    }
}
else if(budget <= 1000) {
    destination = "Balkans";
    if(season == "summer") {
        price = budget * 0.4;
    }
    else if(season == "winter") {
        price = budget * 0.8;
    }
}
if(budget > 1000) {
    destination = "Europe";
    price = budget * 0.9;
}
if(destination == "Europe") {
    type = "Hotel";
}
console.log(`Somewhere in ${destination}`);
console.log(`${type} - ${price.toFixed(2)}`)
}
journey(["50", "summer"])