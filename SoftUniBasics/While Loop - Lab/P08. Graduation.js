function graduation(input) {
let index = 0;
let name = input[index];
index++;
let currentGrade = Number(input[index]);
let grade = 0;
let clas = 0;
let clasCounter = 0;
while (clas < 2) {
    if(currentGrade < 4) {
        clas++;
        
        
    }
    else if (currentGrade > 3){
       grade+=currentGrade;
       clasCounter++;
       
    }
    
   index++;
   currentGrade = Number(input[index]);
   if(clasCounter > 11) {
    console.log(`${name} graduated. Average grade: ${(grade/12).toFixed(2)}`);
    break;
   }
}
if(clas > 1) {
    console.log(`${name} has been excluded at ${clasCounter + 1} grade`)
}
}
graduation(["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"])

