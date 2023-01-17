function fishTank(input) {
let lenght = Number(input[0]);
let width = Number(input[1]);
let height = Number(input[2]);
let percentOccupied = Number(input[3]/100);
let Scm2 = lenght * width * height;
let Sliters = Scm2 / 1000;
let total = Sliters - (Sliters * percentOccupied)
console.log(total)

}
fishTank(["85 ",
"75 ",
"47 ",
"17 "]
)