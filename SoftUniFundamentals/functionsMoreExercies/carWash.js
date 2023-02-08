function carWash(arr) {
let clean = 0;
for(let i =0; i < arr.length; i++) {
    let currCommand = arr[i];
if(currCommand === "soap") {
    clean += 10;
}
else if (currCommand === "water") {
    clean += clean * 0.2;
}
else if (currCommand === "vacuum cleaner") {
    clean += clean * 0.25;
}
else if (currCommand === "mud") {
    clean -= clean * 0.1;
}
}
console.log(`The car is ${clean.toFixed(2)}% clean.`)
}
carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water'])