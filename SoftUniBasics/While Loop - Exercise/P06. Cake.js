function cake(input) {
let index = 0;
let a = Number(input[index]);
index++;
let b = Number(input[index]);
index++;
let s = a * b;
let flag;
let piece = 0;

while(s >= 0) {
    flag = input[index];
    if(flag === "STOP") {
        console.log(`${s} pieces are left.`)
        return;
    }
    piece = Number(input[index]);
    index++;
    s-= piece;
}
console.log(`No more cake left! You need ${Math.abs(s)} pieces more.`)
}
cake(["10",
"2",
"2",
"4",
"6",
"STOP"])

