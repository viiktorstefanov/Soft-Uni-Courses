function tradeCommissions(input) {
let city = input[0];
let V = Number(input[1]);
let comission = 0;
if(city === "Sofia") {
    if(V >= 0 && V <= 500) {
     comission = V * 0.05;
    }
    else if(V > 500 && V <= 1000) {
        comission = V * 0.07;
    }
    else if(V > 1000 && V <= 10000) {
        comission = V * 0.08;
    }
    else if(V > 10000) {
        comission = V * 0.12;
    }
    else {
        console.log("error");
        return;
    }
}
else if(city === "Varna") {
    if(V >= 0 && V <= 500) {
        comission = V * 0.045;
    }
    else if(V > 500 && V <= 1000) {
        comission = V * 0.075;
    }
    else if(V > 1000 && V <= 10000) {
        comission = V * 0.1;
    }
    else if(V > 10000) {
        comission = V * 0.13;
    }
    else {
        console.log("error");
        return;
    }
}
else if(city === "Plovdiv") {
    if(V >= 0 && V <= 500) {
        comission = V * 0.055;
    }
    else if(V > 500 && V <= 1000) {
        comission = V * 0.08;
    }
    else if(V > 1000 && V <= 10000) {
        comission = V * 0.12;
    }
    else if(V > 10000) {
        comission = V * 0.145;
    }
    else {
        console.log("error");
        return;
    }
}
else {
    console.log("error");
    return;
}
console.log(comission.toFixed(2));
}
tradeCommissions(["Kaspichan",
"-50"])



