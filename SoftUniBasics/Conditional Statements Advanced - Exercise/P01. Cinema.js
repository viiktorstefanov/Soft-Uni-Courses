function cinema(input) {
let type = input[0];
let row = Number(input[1]);
let colums = Number(input[2]);

let price = 0;

if(type === "Premiere") {
 price = 12;
}
else if(type === "Normal") {
    price = 7.5;
}
else if (type === "Discount") {
    price = 5;
}
let total = row * colums * price;
console.log(`${total.toFixed(2)} leva`);
}
cinema(["Premiere",
"10",
"12"])
