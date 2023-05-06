function dayOfWeek (day) {
let result = 0;
if(day === 'Monday') {
    result = 1;
    console.log(result);
}
else if(day === 'Tuesday') {
    result = 2;
    console.log(result);
}
else if(day === 'Wednesday') {
    result = 3;
    console.log(result);
}
else if(day === 'Thursday') {
    result = 4;
    console.log(result);
}
else if(day === 'Friday') {
    result = 5;
    console.log(result);
}
else if(day === 'Saturday') {
    result = 6;
    console.log(result);
}
else if(day === 'Sunday') {
    result = 7;
    console.log(result);
}
else {
    console.log(`error`);
}
}
dayOfWeek ('Invalid')