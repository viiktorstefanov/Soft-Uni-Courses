function walking(input) {
let index = 0;
let goal = 10000;
let currentGoal = 0;
let flag = false;
let sum = 0;
while(sum <= goal) {
    let home = input[index];
    if(home === "Going home") {
        flag = true;
       }
       if(flag) {
           currentGoal = Number(input[index + 1]);
           sum+= currentGoal;
           break;
       }
    currentGoal = Number(input[index]);

    
    sum+= currentGoal;
    index++;
    
}
if(sum>= goal) {
    console.log(`Goal reached! Good job!`);
    console.log(`${sum - goal} steps over the goal!`);
}
else {
    console.log(`${goal - sum} more steps to reach goal.`)
}
}
walking(["125",
"250",
"4000",
"30",
"2678",
"4682"])



