function cutReverse(text) {
let length = text.length;
let firstPart = text.slice(0,length/2)
let secondPart = text.slice(length/2);
console.log(firstPart.split("").reverse().join(""));
console.log(secondPart.split("").reverse().join(""));
}
cutReverse('tluciffiDsIsihTgnizamAoSsIsihT')