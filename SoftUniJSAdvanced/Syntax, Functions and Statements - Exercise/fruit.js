function fruit (fruit, weightG , pricePerKG) {
let weight = weightG / 1000;
let money = weight * pricePerKG;
    console.log(`I need $${money.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`);
}
fruit('orange', 2500, 1.80)