function areaOfFigures(input) {
let type = input[0];


if(type === "square") {
    let num = Number(input[1]);
    let s = num * num;
    console.log(s.toFixed(3))
}
else if(type === "rectangle") {
    let num = Number(input[1]);
    let num2 = Number(input[2]);
    let s = num * num2;
    console.log(s.toFixed(3))
}
else if(type === "circle") {
    let num = Number(input[1]);
    let s = Math.pow(num,2) * Math.PI;
    console.log(s.toFixed(3))
}
else if(type === "triangle") {
    let num = Number(input[1]);
    let num2 = Number(input[2]);
    let s = (num * num2)/2;
    console.log(s.toFixed(3))
}
}
areaOfFigures(["circle",
"6"])

