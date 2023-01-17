function maxNumber(input) {
let index = 0;
let income = input[index];

let maxNumber = Number.MIN_SAFE_INTEGER;
while(income !== "Stop") {
    income = input[index];
let number = Number(input[index]);
if(number > maxNumber) {
    maxNumber = number;
}
index++;
}
console.log(maxNumber);

}
maxNumber(["100",
"99",
"80",
"70",
"Stop"])
