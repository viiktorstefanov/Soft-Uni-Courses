function blackFlag(input) {
//every third day plund additional 50% of daily
//every fifth day lose 30% plunder of total
//days = Number(days);
let days = Number(input[0]);
let plunderPerDay = Number(input[1]);
let expectedPlund = Number(input[2]);
let totalPlunder = 0;
for(let day =1; day <= days; day++) { 
totalPlunder += plunderPerDay;
if(day % 3 === 0) {
totalPlunder += plunderPerDay * 0.5;
}
if(day % 5 === 0) {
    totalPlunder -= totalPlunder * 0.3;
    }
}
if(totalPlunder >= expectedPlund) {
    console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`)
}
else {
    console.log(`Collected only ${((totalPlunder*100)/expectedPlund).toFixed(2)}% of the plunder.`)
}
}
blackFlag((["10",
"20",
"380"])
)
