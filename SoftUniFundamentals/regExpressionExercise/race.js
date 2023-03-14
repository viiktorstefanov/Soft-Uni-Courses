function race(input) {
let racers = input.shift().split(', ');

let line = input.shift();
let obj = {};
for(let i = 0; i < racers.length; i++) {
    let currRacer = racers[i];
    obj[currRacer] = 0;
}
let namePattern = /[A-Za-z]+/g;
let digitsPattern = /[0-9]+/g
while(line!== 'end of race') {
    
   
    let name = line.match(namePattern).join('');
    let distance = line.match(digitsPattern).join('').split('').map((a) => Number(a)).reduce((a,b) => a + b);

    
    if(obj.hasOwnProperty(name)) {
        obj[name] = obj[name] + distance;
    }
  
    line = input.shift();
}
let sortedRacers = Object.entries(obj).sort((a, b) => b[1]-a[1]);
let firstPlace = sortedRacers[0][0];
let secondPlace = sortedRacers[1][0];
let thirdPlace = sortedRacers[2][0];
console.log(`1st place: ${firstPlace}`);
console.log(`2nd place: ${secondPlace}`);
console.log(`3rd place: ${thirdPlace}`);

}
race(['George, Peter, Bill, Tom',
'G4e@55or%6g6!68e!!@ ',
'R1@!3a$y4456@',
'B5@i@#123ll',
'G@e54o$r6ge#',
'7P%et^#e5346r',
'T$o553m&6',
'end of race']
)