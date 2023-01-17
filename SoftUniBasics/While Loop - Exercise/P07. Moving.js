function moving (input) {
let index = 0;
let width = Number(input[index]);
index++;
let length = Number(input[index]);
index++;
let height = Number(input[index]);
index++;
let s = width * length * height;
let command ;
while(s >= 0) {
 command = input[index];
 if(command === "Done") {
    console.log(`${s} Cubic meters left.`);
    return;
 }
 let box = Number(input[index]);
 index++;
 s-= box;

}
console.log(`No more free space! You need ${Math.abs(s)} Cubic meters more.`);
}
moving(["10", 
"10",
"2",
"20",
"20",
"20",
"20",
"122"])

