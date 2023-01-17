function vacation(input) {
let index = 0;
let moneyForVacation = Number(input[index]);
index++;
let availableMoney = Number(input[index]);
index++;
let type ;
let moneySpend = 0;
let daysCount = 0;
let spendDays = 0;

while(availableMoney < moneyForVacation) {
    daysCount++;
    type = input[index];
    index++;
    moneySpend = Number(input[index]);
    index++;
    if(type === "spend") {
        availableMoney-=moneySpend;
        if(availableMoney < 0) {
            availableMoney = 0;
        }
        spendDays++;

    }
    else if(type === "save") {
        availableMoney+= moneySpend;
    }
    
    //if(type === "spend" && type !== "save" ) {
        //spendDays++;
    //}
    if(spendDays > 4) {
        break;
    }
}
if(availableMoney >= moneyForVacation) {
    console.log(`You saved the money for ${daysCount} days.`)
    
}
else {
console.log(`You can't save the money.`);
console.log(`${daysCount}`)
}
}
vacation(["110",
"60",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10"])



