function petShop(input) {
let foodDog = 2.5;
let foodCat = 4;
let numFoodDog = Number(input[0]);
let numFoodCat = Number(input[1]);
let total = (numFoodDog * foodDog) + (numFoodCat * foodCat);
console.log(`${total} lv.`)
}
petShop(["5 ","4 "])