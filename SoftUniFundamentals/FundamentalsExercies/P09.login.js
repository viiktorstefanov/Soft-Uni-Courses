function login(input) {
let index = 0;
let userName = input[index];
let correctPass = input[index];
let countWrongPassword = 0;
index++;
correctPass =[...correctPass].reverse().join("")
let password = input[index];
while(correctPass != password) {
  
    if(password != correctPass) {
        countWrongPassword++;
        if(countWrongPassword >= 4) {
            console.log(`User ${userName} blocked!`)
            return;
        }
        console.log("Incorrect password. Try again.")
    }
   
    index++;
    password = input[index];
}
console.log(`User ${userName} logged in.`)
}
login(['sunny','rainy','cloudy','sunny','not sunny'])