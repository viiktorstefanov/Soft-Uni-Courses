function travelling(input) {
let destination = input[0];
let minBudget = Number(input[1]);
let savedMoney = 0;
let index = 2;
let isTrue = false;
while(minBudget >= savedMoney) {
    let command = input[index];
    if(command === "End") {
        return;
    }
    let currentMoney = Number(input[index]);
    savedMoney+= currentMoney;
    index++;
   if(minBudget <= savedMoney) {
    console.log(`Going to ${destination}!`);
    savedMoney = 0;
    destination = input[index];
    index++;
    minBudget = Number(input[index]);
    index++;
   }
}


}
travelling(["Greece",
"1000",
"200",
"200",
"300",
"100",
"150",
"240",
"Spain",
"1200",
"300",
"500",
"193",
"423",
"End"])
