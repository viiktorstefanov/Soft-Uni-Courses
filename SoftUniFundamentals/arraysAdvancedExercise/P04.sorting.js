function sorting(input) {
let sortedSmallToBig = [...input].sort((a, b) => a - b);
let sortedBigToSmall = [...input].sort((a,b) => b - a);
let sorted = [];
for(let i = 0; i < input.length/2; i++) {
sorted.push(sortedBigToSmall[i]);
sorted.push(sortedSmallToBig[i]);
}
console.log(sorted.join(' '))

}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])