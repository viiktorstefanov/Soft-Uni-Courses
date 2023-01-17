function oscars(input) {
let actor = input[0];
let points = Number(input[1]);
let n = Number(input[2]);
let pointsGiven = 0;
let totalPoints = 0;
for(let i =3; i < input.length ; i++) {
 let actors = input[i++];
 let actorPoints = input[i];
pointsGiven += (actors.length * actorPoints)/2;
totalPoints = pointsGiven + points;
if(totalPoints > 1250.5) {
    console.log(`Congratulations, ${actor} got a nominee for leading role with ${totalPoints.toFixed(1)}!`)
    return;
}
if(totalPoints < 1250.5 && i> input.length) {
    break;
}
}
console.log(`Sorry, ${actor} you need ${(1250.5 - totalPoints).toFixed(1)} more!`)
}
oscars(["Zahari Baharov",
"205",
"4",
"Johnny Depp",
"45",
"Will Smith",
"29",
"Jet Lee",
"10",
"Matthew Mcconaughey",
"39"])
