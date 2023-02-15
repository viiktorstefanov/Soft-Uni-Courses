function computerStore(input) {
let totalPrice = 0;

for( let i = 0; i < input.length-1; i++) {
    let currEl = Number(input[i]);
    if(currEl < 0) {
        console.log(`Invalid price!`);
        continue;
    }
    totalPrice += currEl;
}
if(totalPrice == 0) {
    console.log(`Invalid order!`);
    return;
}
let totalPriceWithoutTax = totalPrice;
let tax = totalPrice * 0.2;
totalPrice += tax;
if(input[input.length-1] === "special") {
totalPrice = totalPrice - (totalPrice * 0.1);
}
console.log(`Congratulations you've just bought a new computer!`);
console.log(`Price without taxes: ${totalPriceWithoutTax.toFixed(2)}$`);
console.log(`Taxes: ${tax.toFixed(2)}$`);
console.log(`-----------`);
console.log(`Total price: ${totalPrice.toFixed(2)}$`);

}
// computerStore(([
//     '1050',
//     '200',
//     '450',
//     '2',
//     '18.50',
//     '16.86',
//     'special'
//     ])
//     )
// computerStore(([
//     '1023', 
//     '15', 
//     '-20',
//     '-5.50',
//     '450', 
//     '20', 
//     '17.66', 
//     '19.30', 'regular'
//     ])
//     )    
computerStore([
    'regular'
    ])
    