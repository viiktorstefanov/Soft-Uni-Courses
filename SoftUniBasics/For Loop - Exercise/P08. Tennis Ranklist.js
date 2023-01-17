function tennisRanklist(input) {
let startPoints = Number(input[1]);
let numTournaments = Number(input[0]);
let win = 0;
let totalPoints = 0;
for(let i =2; i< numTournaments + 2; i++) {
    let classification = input[i];
    if(classification === "W") {
     totalPoints+= 2000;
     win++;
    }
    else if(classification === "F") {
        totalPoints+= 1200;
    }
    else if(classification === "SF") {
        totalPoints+= 720;
    }
}
console.log(`Final points: ${totalPoints + startPoints}`);
console.log(`Average points: ${Math.floor((totalPoints/numTournaments))}`);
console.log(`${(((win/numTournaments)*100).toFixed(2))}%`)
}
tennisRanklist(["7",
"1200",
"SF",
"F",
"W",
"F",
"W",
"SF",
"W"])

