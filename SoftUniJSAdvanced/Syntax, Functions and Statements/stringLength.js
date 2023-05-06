function stringLength(el1,el2,el3) {
let allLength = el1.length + el2.length + el3.length;
let averageLength = allLength / 3;
console.log(allLength);
console.log(Math.round(averageLength));
} 
stringLength('chocolate', 'ice cream', 'cake')