function VacationBook(input) {
let numPage = Number(input[0]);
let numReadPagePerHour = Number(input[1]);
let days = Number(input[2]);
let total = (numPage / numReadPagePerHour)/2;
console.log(total)
}
VacationBook(["212 ",
"20 ",
"2 "]
)