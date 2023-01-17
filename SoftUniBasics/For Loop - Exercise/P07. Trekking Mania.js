function trekkingMania(input) {
let numGroups = Number(input[0]);
let musala = 0;
let monblan = 0;
let kilimandjaro = 0;
let k2 = 0;
let everest = 0;
let totalPeople = 0;

for(let i =1; i <= numGroups; i++){
let group = Number(input[i]);
totalPeople += group;
if(group <= 5) {
    musala+=group;
}
else if(group > 5 && group <= 12) {
    monblan+=group;
}
else if(group > 12 && group <= 25) {
    kilimandjaro+=group;
}
else if(group > 25 && group <= 40) {
    k2+=group;
}
else if(group > 40) {
    everest+=group;
}
}
console.log(`${((musala/totalPeople)*100).toFixed(2)}%`)
console.log(`${((monblan/totalPeople)*100).toFixed(2)}%`)
console.log(`${((kilimandjaro/totalPeople)*100).toFixed(2)}%`)
console.log(`${((k2/totalPeople)*100).toFixed(2)}%`)
console.log(`${((everest/totalPeople)*100).toFixed(2)}%`)
}
trekkingMania(["5",
"25",
"41",
"31",
"250",
"6"])
