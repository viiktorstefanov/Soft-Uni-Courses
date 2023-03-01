function meetings(input) {
let schedule = {};
for(line of input) {
    line = line.split(' ');
    let day = line[0];
    let name = line[1];
    if(schedule.hasOwnProperty(day) === true) {
        console.log(`Conflict on ${day}!`);
    }
    else {
        schedule[day] = name;
        console.log(`Scheduled for ${day}`); 
    }
}
for(let [key,value] of Object.entries(schedule)) {
    console.log(`${key} -> ${value}`);
}
}
meetings(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']
)