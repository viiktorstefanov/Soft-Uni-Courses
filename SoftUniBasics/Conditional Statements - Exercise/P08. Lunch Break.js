function lunchBreak (input){
let nameSerial = input[0];
let timeOfSerial = Number(input[1]);
let timeOfBreak = Number(input[2]);

let lunchBreak = (1/8) * timeOfBreak;
let relaxTime = (1/4) * timeOfBreak;
let finalTime = timeOfBreak - relaxTime - lunchBreak;
if(timeOfSerial <= finalTime) {
    console.log(`You have enough time to watch ${nameSerial} and left with ${Math.ceil(finalTime - timeOfSerial)} minutes free time.`);
}
else{
    console.log(`You don't have enough time to watch ${nameSerial}, you need ${Math.ceil(timeOfSerial - finalTime)} more minutes.`);
}
}
lunchBreak(["Game of Thrones",
"60",
"96"])


