function formatGrade(grade) {
let formattedDescription = formatDescription(grade);
let formattedGrade = formatGrade(grade);
    function formatDescription(grade) {
let description = "";
if(grade < 3.00) {
    description = "Fail";
}
else if(grade < 3.50) {
    description = "Poor";
}
else if(grade < 4.50) {
    description = "Good"
}
else if(grade < 5.50) {
    description = "Very good"
}
else {
    description = "Excellent"
}
return description;
    }
    function formatGrade (grade) {
if(grade < 3) {
    grade = 2;
}
else {
    grade = grade.toFixed(2);
}
return grade;
    }
console.log(`${formattedDescription} (${formattedGrade})`)
}
formatGrade(4.50)

// with nested functions
