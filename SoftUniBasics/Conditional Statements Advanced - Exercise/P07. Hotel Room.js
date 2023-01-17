function hotelRoom (input) {
let mount = input[0];
let numNightStand = Number(input[1]);
let priceStudio = 0;
let priceApartment = 0;
if(mount == "May" || mount == "October") {
    
 priceStudio = 50;
 priceApartment = 65;
}
else if(mount == "June" || mount == "September") {
    priceStudio = 75.2;
    priceApartment = 68.7;
}
else if(mount == "July" || mount == "August") {
    priceStudio = 76;
    priceApartment = 77;
}
if(numNightStand > 7 && numNightStand <=14 && mount == "May" || mount == "October") {
    priceStudio = priceStudio -(priceStudio * 0.05);
}
if(numNightStand > 14 && mount == "May" || mount == "October") {
    priceStudio = priceStudio -(priceStudio * 0.30);
}
if(numNightStand > 14 && mount == "June" || mount == "September") {
    priceStudio = priceStudio -(priceStudio * 0.2);
}
if(numNightStand > 14) {
    priceApartment = priceApartment -(priceApartment * 0.1);
}
console.log(`Apartment: ${(priceApartment * numNightStand).toFixed(2)} lv.`);
console.log(`Studio: ${(priceStudio * numNightStand).toFixed(2)} lv.`);
}
hotelRoom(["August",
"20"])

