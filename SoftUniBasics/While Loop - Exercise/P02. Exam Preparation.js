function examPreparation(input) {
let index = 0;
let numBadTask = Number(input[index]);
let lastTask ;
let countTask = 0;
let average = 0;
let task ;
index++;
let badGrades = 0;
while(numBadTask >= badGrades) {
    task = input[index];
    if(task === "Enough") {
        break;
    }
    lastTask = task;
    let badGrade = Number(input[index + 1]);
   
    
    countTask++;
    index++;
    let currentGrade = Number(input[index]);
    if(currentGrade <= 4) {
       badGrades++;
    }
    average+=currentGrade;
    index++;
    if(badGrades >= numBadTask) {
        break;
    }
}
if(badGrades >= numBadTask) {
    console.log(`You need a break, ${badGrades} poor grades.`)
    return;
}
console.log(`Average score: ${(average/countTask).toFixed(2)}`);
console.log(`Number of problems: ${countTask}`);
console.log(`Last problem: ${lastTask}`);
} 
examPreparation(["2",
"Income",
"3",
"Game Info",
"6",
"Best Player",
"4"])

