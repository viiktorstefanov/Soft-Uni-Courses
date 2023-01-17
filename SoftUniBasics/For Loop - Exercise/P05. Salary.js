function salary(input) {
let salary = Number(input[1]);
let n = Number(input[0]);
for(i = 2; i <= n + 2 ; i++) {
    let tab = input[i];
    if(tab === "Facebook") {
        salary-=150;
    }
    else if(tab === "Instagram") {
        salary -=100;
    }
    else if(tab === "Reddit") {
        salary -=50;
    }
    
}
if(salary <= 0) {
    console.log("You have lost your salary.")
    return;
}
else  {
    console.log(`${salary}`)
}
}
salary(["10",
"750",
"Facebook",
"Dev.bg",
"Instagram",
"Facebook",
"Reddit",
"Facebook",
"Facebook"])


