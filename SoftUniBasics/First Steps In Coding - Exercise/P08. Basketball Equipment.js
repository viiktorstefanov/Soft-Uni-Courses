function basketballEquipment(input) {
let yearPayment = Number(input[0]);
let shoes = yearPayment - (yearPayment * 0.4);
let clothes = shoes - (shoes * 0.2);
let ball = (1/4) * clothes;
let accessories = (1/5) * ball;
let total = yearPayment + shoes + clothes + ball + accessories;
console.log(total)
}
basketballEquipment(["365"])