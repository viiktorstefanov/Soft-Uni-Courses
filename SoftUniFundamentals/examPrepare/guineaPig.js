function guineaPig(input) {
input.slice(Number).join(` `);
let quantityFoodKg = input[0];
let quantityHayKg = input[1];
let quantityCoverKg = input[2];
let guineaWeight = input[3];
let outOfQuantity = false;
for( let days = 1; days <= 30; days++) {
    quantityFoodKg -= 0.3;
    if(days % 2 === 0) {
        quantityHayKg -= quantityFoodKg * 0.05;
    }
    if(days % 3 === 0) {
    let coverRemove = (1/3) * guineaWeight;
    quantityCoverKg -= coverRemove;
    }
    if(quantityFoodKg < 0 || quantityCoverKg < 0 || quantityHayKg < 0) {
        outOfQuantity = true;
        break;
    }
}
if(outOfQuantity) {
    console.log(`Merry must go to the pet store!`)
}
else {
    console.log(`Everything is fine! Puppy is happy! Food: ${quantityFoodKg.toFixed(2)}, Hay: ${quantityHayKg.toFixed(2)}, Cover: ${quantityCoverKg.toFixed(2)}.`);
}
}
guineaPig(["10", 
"5", 
"5.2", 
"1"])
