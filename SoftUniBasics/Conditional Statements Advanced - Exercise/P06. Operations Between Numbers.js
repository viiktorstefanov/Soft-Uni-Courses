function operationsBetweenNum(input) {
let N1 = Number(input[0]);
let N2 = Number(input[1]);
let symbol = input[2];
let result = 0;
let oddeven ;

if(symbol == "+" || symbol == "-"){
if(symbol == "+" ){
 result = N1 + N2 ;
 if(result % 2 == 0) {
    oddeven = "even";
   }
    else {
    oddeven = "odd"
   }
 console.log(`${N1} + ${N2} = ${result} - ${oddeven}`)
}
else if (symbol == "-") {
    result = N1 - N2;
    if(result % 2 == 0) {
        oddeven = "even";
       }
        else {
        oddeven = "odd"
       }
       console.log(`${N1} - ${N2} = ${result} - ${oddeven}`)
    }

}
else if(symbol == "*") {
    result = N1 * N2;
    if(result % 2 == 0) {
        oddeven = "even";
       }
        else {
        oddeven = "odd"
       }
console.log(`${N1} * ${N2} = ${result} - ${oddeven}`)      
}
else if(symbol == "%") {
    if(N2 == 0 ) {
        console.log(`Cannot divide ${N1} by zero`)
        return;
    }
    result = N1 % N2;
    console.log(`${N1} % ${N2} = ${result}`)
}
else if(symbol == "/") {
    if(N2 == 0) {
        console.log(`Cannot divide ${N1} by zero`)
        return;
    }
    result = N1 / N2;
    console.log(`${N1} / ${N2} = ${result.toFixed(2)}`)
}
}
operationsBetweenNum(["112",
"0",
"/"])

